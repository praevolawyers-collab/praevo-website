import Link from "next/link";
import type { Metadata } from "next";
import { areas } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Practice areas at Praevo Lawyers, Melbourne: visas, employer sponsorship, market entry, commercial, disputes, family, wills, property, criminal and cross-border matters.",
};

export default function Expertise() {
  return (
    <>
      <PageHero eyebrow="Expertise" title="Practical Australian legal advice across ten practice areas." />
      <section className="section">
        <div className="wrap tiles">
          {areas.map((a, i) => (
            <Link key={a.slug} href={`/expertise/${a.slug}`} className="tile">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="t">{a.title}</span>
              <span className="d">{a.short}</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
