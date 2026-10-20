import type { Metadata } from "next";
import { articles } from "@/content/insights";
import { PageHero, CtaBand } from "@/components/Blocks";
import ArticleGrid, { TopicChips } from "@/components/ArticleGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides to Australian law from Praevo Lawyers, Melbourne: visas, employer sponsorship, property, family law, wills, disputes, criminal law and cross-border matters.",
};

export default function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights · Blog" title="Practical guides to Australian law." lead="Plain-English articles on the matters our clients ask about most. General information only, not legal advice." />
      <section className="section">
        <div className="wrap">
          <TopicChips />
          <ArticleGrid items={[...articles].reverse()} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
