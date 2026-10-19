import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/content/insights";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Insights",
  description: "Legal updates and practical guides from Praevo Lawyers, Melbourne.",
};

export default function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Legal updates and practical guides." />
      <section className="section">
        <div className="wrap cards">
          {articles.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>{a.category}</p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 500 }}>{a.title}</h3>
              <p>{a.summary}</p>
              <p className="small">Updated {a.updated}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
