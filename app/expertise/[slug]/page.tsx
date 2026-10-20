import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, firm } from "@/content/site";
import { faqs, areaSeo } from "@/content/faqs";
import { articles, topicSlug } from "@/content/insights";
import ArticleGrid from "@/components/ArticleGrid";
import { PageHero, CtaBand } from "@/components/Blocks";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) return {};
  const seo = areaSeo[a.slug];
  return {
    title: seo?.title ?? a.title,
    description: seo?.description ?? a.intro,
    alternates: { canonical: `/expertise/${a.slug}` },
    openGraph: { title: seo?.title ?? a.title, description: seo?.description ?? a.intro },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();
  const posts = articles.filter((p) => topicSlug(p) === a.slug);

  const qa = faqs[a.slug] ?? a.faqs;
  const seo = areaSeo[a.slug];
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: a.title,
    name: seo?.h1 ?? a.title,
    description: a.intro,
    areaServed: [{ "@type": "City", name: "Melbourne" }, { "@type": "State", name: "Victoria" }, { "@type": "Country", name: "Australia" }],
    provider: { "@type": "LegalService", name: firm.name, url: firm.url, telephone: firm.phone },
  };
  const crumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: firm.url },
      { "@type": "ListItem", position: 2, name: "Expertise", item: `${firm.url}/expertise` },
      { "@type": "ListItem", position: 3, name: a.title, item: `${firm.url}/expertise/${a.slug}` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }} />
      <PageHero eyebrow={`Expertise · ${a.title}`} title={seo?.h1 ?? a.title} lead={a.intro} />
      <section className="section">
        <div className="wrap split">
          <div className="wide">
            <h2 style={{ marginBottom: 24 }}>What we help with</h2>
            <ul className="checks">
              {a.help.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <h2 style={{ margin: "56px 0 28px" }}>How it works</h2>
            <ol className="steps">
              {a.process.map((p) => <li key={p}><h3>{p}</h3></li>)}
            </ol>
          </div>
          <aside className="narrow">
            <div className="card">
              <h3>Fees</h3>
              <p>We give you a written estimate before any work starts, and fixed or capped fees where the work allows.</p>
              <p><Link href="/fees">How our fees work →</Link></p>
            </div>
            <div className="card" style={{ marginTop: 20 }}>
              <h3>Talk to us</h3>
              <p>Book a consultation by video or in person in Melbourne.</p>
              <div className="btns" style={{ marginTop: 16 }}>
                <Link href="/book" className="btn btn-dark">Book a consultation</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section stone">
        <div className="wrap faq" style={{ maxWidth: 860 }}>
          <h2 style={{ marginBottom: 16 }}>Common questions about {a.title.toLowerCase()}</h2>
          {qa.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p className="small muted" style={{ marginTop: 20 }}>General information only, not legal advice for your situation.</p>
        </div>
      </section>
      {posts.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2 style={{ marginBottom: 32 }}>Read more on {a.title.toLowerCase()}</h2>
            <ArticleGrid items={posts} />
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
