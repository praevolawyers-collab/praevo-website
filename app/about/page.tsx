import Link from "next/link";
import type { Metadata } from "next";
import { firm } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "About",
  description: "About Praevo Lawyers, a Melbourne law practice regulated in Victoria.",
};

const values = [
  ["Integrity", "Honest advice, including when the answer is not the one you hoped for."],
  ["Client-centred", "We explain options in plain English and keep you informed."],
  ["Professional excellence", "Careful preparation in every matter, large or small."],
  ["Empathy", "Many legal problems arrive at difficult times. We take that seriously."],
  ["Innovation", "Modern tools that make our work faster and clearer for clients."],
  ["Collaboration", "We work closely with clients and, where needed, with lawyers in other countries."],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A modern Melbourne law firm, at home and across borders."
        lead="Praevo Lawyers was founded by principal solicitor Prakash Srinivasan. We act for individuals, families and businesses in Australia, and for clients overseas with matters here."
      />
      <section className="section">
        <div className="wrap split">
          <div className="narrow"><h2>Our values</h2></div>
          <div className="wide cards">
            {values.map(([t, d]) => (
              <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section stone">
        <div className="wrap prose">
          <h2 id="regulation" style={{ marginTop: 0, scrollMarginTop: 120 }}>Regulation</h2>
          <p>{firm.regulatory}</p>
          <p>{firm.pss}</p>
          <p><Link href="/our-people">Meet our team →</Link></p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
