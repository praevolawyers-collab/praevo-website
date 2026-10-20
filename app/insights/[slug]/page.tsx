import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, coverImage, coverImagePng, topicSlug } from "@/content/insights";
import ArticleGrid from "@/components/ArticleGrid";
import { firm } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.summary, openGraph: { type: "article", images: [coverImagePng(a)] } } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = [
    ...articles.filter((x) => x.slug !== a.slug && topicSlug(x) === topicSlug(a)),
    ...articles.filter((x) => x.slug !== a.slug && topicSlug(x) !== topicSlug(a)),
  ].slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    author: { "@type": "Person", name: a.author },
    publisher: { "@type": "Organization", name: firm.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero eyebrow={a.category} title={a.title} lead={a.summary} />
      <article className="section">
        <div className="wrap prose">
          <img src={coverImage(a)} alt="" width={1200} height={630} className="article-cover" />
          <p className="small muted">
            By {a.author} · First published {a.published} · Updated {a.updated}
          </p>
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              {b.p?.map((p) => <p key={p}>{p}</p>)}
              {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </div>
          ))}
          <p className="small muted" style={{ marginTop: 40, borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            This article is general information about the law at the date it was updated. It is not legal advice. Get advice
            on your own circumstances before acting.
          </p>
          <p><Link href="/insights">← All articles</Link></p>
        </div>
      </article>
      {related.length > 0 && (
        <section className="section stone">
          <div className="wrap">
            <h2 style={{ marginBottom: 32 }}>More articles</h2>
            <ArticleGrid items={related} />
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
