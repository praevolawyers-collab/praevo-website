import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Insights",
  description: "Legal updates and practical guides from Praevo Lawyers.",
};

// Articles from the old website to migrate here (copy text in once reviewed and updated):
// - Family Law: Understanding Child Custody in Divorce Cases
// - Commercial Law: The Importance of Contract Law in Business
// - Immigration Law: Steps to Obtaining Permanent Residency
// - Criminal Law: Your Rights During an Arrest

export default function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Legal updates and practical guides." />
      <section className="section">
        <div className="wrap">
          <div className="placeholder">[Articles to be migrated from the old website and reviewed before publishing]</div>
        </div>
      </section>
    </>
  );
}
