import Link from "next/link";
import type { Metadata } from "next";
import { firm } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Fees",
  description: "How Praevo Lawyers charges: consultations, fixed and capped fees, hourly rates and costs disclosure.",
};

export default function Fees() {
  return (
    <>
      <PageHero eyebrow="Fees" title="Clear fees, agreed in writing before we start." />
      <section className="section">
        <div className="wrap cards">
          <div className="card"><h3>Initial consultation</h3><p>{firm.consultationFee}. Paid when you book.</p></div>
          <div className="card"><h3>Fixed fees</h3><p>For defined work such as visa applications, wills and many contracts.</p></div>
          <div className="card"><h3>Capped fees</h3><p>A maximum agreed in advance where the scope is less certain.</p></div>
          <div className="card"><h3>Hourly rates</h3><p>For litigation and open-ended matters, with regular estimates and updates.</p></div>
        </div>
      </section>
      <section className="section stone">
        <div className="wrap prose">
          <h2 style={{ marginTop: 0 }}>Your rights about legal costs</h2>
          <p>
            Under the Legal Profession Uniform Law (Victoria), we will give you information about our costs, including an
            estimate of total legal costs, before or as soon as practicable after we are engaged. You have the right to
            negotiate a costs agreement, to receive a bill, to request an itemised bill, and to dispute costs.
          </p>
          <p><Link href="/legal/costs">Read our costs disclosure information →</Link></p>
          <p className="small muted">Disbursements, such as government application fees and court filing fees, are charged in addition and set out in your estimate.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
