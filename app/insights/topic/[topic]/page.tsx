import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, topics, topicSlug } from "@/content/insights";
import { PageHero, CtaBand } from "@/components/Blocks";
import ArticleGrid, { TopicChips } from "@/components/ArticleGrid";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const t = topics.find((x) => x.slug === topic);
  return t ? { title: `${t.title} articles`, description: `Articles on ${t.title.toLowerCase()} from Praevo Lawyers, Melbourne.` } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = topics.find((x) => x.slug === topic);
  if (!t) notFound();
  const items = articles.filter((a) => topicSlug(a) === t.slug);
  return (
    <>
      <PageHero eyebrow="Blog" title={`${t.title}: articles and guides`} />
      <section className="section">
        <div className="wrap">
          <TopicChips current={t.slug} />
          <ArticleGrid items={items} />
          <p style={{ marginTop: 32 }}>
            <Link href={`/expertise/${t.slug}`} style={{ fontWeight: 600 }}>How we help with {t.title.toLowerCase()} →</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
