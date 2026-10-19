import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Collaborate with us",
  description: "For Indian and international law firms interested in referral and co-counsel arrangements with Praevo Lawyers, Melbourne.",
};

export default function Collaborate() {
  return (
    <>
      <PageHero
        eyebrow="For law firms"
        title="Collaborate with Praevo Lawyers."
        lead="We work with independent law firms in India and elsewhere on matters with an Australian side. This page is for law firms, not clients."
      />
      <section className="section stone">
        <div className="wrap split">
          <div className="narrow"><h2>How collaboration works</h2></div>
          <div className="wide">
            <ul className="checks">
              <li>Referral and co-counsel arrangements only. We do not form partnerships with overseas firms.</li>
              <li>Each firm is engaged directly by the client, gives its own costs disclosure and bills its own fees.</li>
              <li>No referral fees or commissions are paid in either direction.</li>
              <li>Each firm runs its own conflict checks and shares client information only with the client&apos;s consent.</li>
              <li>Collaborating firms are named on our website only with their written consent.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 28 }}>Express interest</h2>
          <EnquiryForm kind="collaborate" />
        </div>
      </section>
    </>
  );
}
