import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import { areas } from "@/content/site";

export const metadata: Metadata = {
  title: "Collaborate with us: for Indian law firms",
  description:
    "For law firms in India: refer clients who need Australian legal help, or work with Praevo Lawyers, Melbourne, on matters with both an Indian and an Australian side.",
  alternates: { canonical: "/collaborate" },
};

const ways = [
  {
    icon: "plane",
    title: "Refer a client who needs Australian legal help",
    text: "Your client is moving to Australia, investing, buying property, or has a family member, dispute or estate here. We advise them on the Australian law and keep you informed with their consent.",
  },
  {
    icon: "arrows",
    title: "Work together on a cross-border matter",
    text: "Some matters need advice under both systems: an estate with assets in both countries, a separation, a business entering Australia. Each firm advises on its own law, for the same client.",
  },
  {
    icon: "globe",
    title: "Receive Indian-law work from Australia",
    text: "Our clients in Australia often need advice on Indian law: property, succession, family matters and company work. We refer them to independent firms we know and trust in India.",
  },
];

const referralAreas = [
  { slug: "visas-and-migration", text: "Skilled, family, student and visitor visas" },
  { slug: "employer-sponsorship", text: "Sending staff from India to Australian operations" },
  { slug: "market-entry-and-firb", text: "Indian companies setting up in Australia, FIRB" },
  { slug: "property", text: "Buying and selling property in Australia" },
  { slug: "family-law", text: "Separation and parenting with an Australian side" },
  { slug: "wills-and-estates", text: "Probate and estates with assets in Australia" },
  { slug: "disputes-and-litigation", text: "Contract and debt disputes with Australian parties" },
  { slug: "commercial-law", text: "Contracts, distribution and supply into Australia" },
];

const process = [
  { h: "Tell us about the matter", p: "Use the form below with a short outline. Do not send confidential documents yet." },
  { h: "We run a conflict check", p: "We confirm within two business days whether we can act, and who will handle it." },
  { h: "The client engages us directly", p: "We give the client our own costs disclosure and terms. Your engagement with the client is unaffected." },
  { h: "We keep you in the loop", p: "With the client's consent, we update you on the Australian side so the advice fits together." },
];

export default function Collaborate() {
  return (
    <>
      <PageHero
        eyebrow="The Firm · For law firms in India"
        title="Work with us on matters that reach Australia."
        lead="We work with independent law firms in India on clients and matters with an Australian side, in both directions. This page is for law firms. If you are a client, please see our contact page."
      />

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 10 }}>How we can work together</h2>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 720 }}>
            Three ways a firm in India can work with Praevo Lawyers. Each one is on a matter-by-matter basis, and each firm
            advises only on its own country&apos;s law.
          </p>
          <div className="situations">
            {ways.map((w) => (
              <div key={w.title} className="situation">
                <span className="icon"><Icon name={w.icon} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <a href="#enquire" className="pill">
                  Get in touch <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stone">
        <div className="wrap">
          <h2 style={{ marginBottom: 10 }}>Australian work we take on referral</h2>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 720 }}>
            Matters firms in India most often send us. Our team speaks English, Hindi, Tamil, Kannada and Marathi.
          </p>
          <div className="situations">
            {referralAreas.map((r) => {
              const a = areas.find((x) => x.slug === r.slug);
              if (!a) return null;
              return (
                <div key={r.slug} className="situation">
                  <h3>{a.title}</h3>
                  <p>{r.text}</p>
                  <Link href={`/expertise/${a.slug}`} className="pill">
                    About this area <span aria-hidden="true">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="narrow">
            <h2>How a referral works</h2>
          </div>
          <div className="wide">
            <ol className="steps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {process.map((s) => (
                <li key={s.h}>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section stone">
        <div className="wrap split">
          <div className="narrow">
            <h2>The ground rules</h2>
            <p className="muted">These keep both firms within their professional obligations in India and in Victoria.</p>
          </div>
          <div className="wide">
            <ul className="checks">
              <li>Referral and co-counsel arrangements only. We do not form partnerships, joint ventures or LLPs with firms in India.</li>
              <li>No referral fees, commissions or shared fees in either direction. Each firm bills its own work.</li>
              <li>Each firm is engaged directly by the client and gives its own costs disclosure.</li>
              <li>We advise on Australian law only. Advice on Indian law stays with the Indian firm.</li>
              <li>Each firm runs its own conflict checks, and client information is shared only with the client&apos;s consent.</li>
              <li>Collaborating firms are named on our website only with their written consent.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="enquire">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <h2 style={{ marginBottom: 10 }}>Refer a matter or start a conversation</h2>
          <p className="muted" style={{ marginBottom: 28 }}>
            Tell us what you have in mind. We reply within two business days. Please send an outline only, not confidential
            documents, until we confirm we can act.
          </p>
          <EnquiryForm kind="collaborate" />
        </div>
      </section>
    </>
  );
}
