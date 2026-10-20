import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import { areas } from "@/content/site";

export const metadata: Metadata = {
  title: "Collaborate with us: for Indian and overseas law firms",
  description:
    "For law firms in India and overseas: refer clients who need Australian legal help, and act for Praevo Lawyers' clients on matters in your country. Starting with India; UK, Singapore and Malaysia to follow.",
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
    title: "Act for our clients in India",
    text: "Many of our clients live in Australia but have family, property, succession or business matters in India. They need an Indian firm to advise and appear for them, and we refer those matters to firms we work with.",
  },
];

const indiaWork = [
  { icon: "heart", title: "Family law in India", text: "Divorce, maintenance, custody and guardianship proceedings in India, including where one spouse lives in Australia and parallel proceedings run here." },
  { icon: "home", title: "Property in India", text: "Sale and purchase by NRI and OCI owners, title checks, partition, tenant and possession disputes, and property managed under a power of attorney." },
  { icon: "scroll", title: "Succession and estates in India", text: "Probate, letters of administration, succession and legal heir certificates, and transferring Indian assets after a death in Australia." },
  { icon: "scale", title: "Civil and commercial disputes", text: "Recovery suits, contract disputes and cheque-dishonour matters for clients who cannot easily travel to India." },
  { icon: "shield", title: "Criminal matters in India", text: "Anticipatory bail, quashing petitions and representation for clients living in Australia who face complaints in India." },
  { icon: "building", title: "Australian businesses entering India", text: "Company and LLP set-up, FDI and FEMA compliance, contracts and employment for Australian clients expanding into India." },
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
  { h: "Tell us about the matter", p: "Either firm sends a short outline. No confidential documents until conflicts are cleared." },
  { h: "We run a conflict check", p: "The receiving firm confirms whether it can act. We reply within two business days." },
  { h: "The client engages us directly", p: "Each firm gives the client its own costs disclosure and terms. Neither firm's existing engagement is affected." },
  { h: "We keep you in the loop", p: "With the client's consent, the two firms keep each other updated so the advice fits together." },
];

export default function Collaborate() {
  return (
    <>
      <PageHero
        eyebrow="The Firm · For overseas law firms"
        title="Collaboration that works in both directions."
        lead="Our clients in Australia often have legal matters overseas, and overseas firms have clients with matters in Australia. We work with independent law firms so that each side is handled by a lawyer qualified in that country. We are starting with India, where many of our clients have family, property and business ties. This page is for law firms."
      />

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 10 }}>How we can work together</h2>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 720 }}>
            Work flows both ways: you refer clients with Australian matters to us, and we refer our clients with Indian matters to you. Each arrangement is matter by matter, and each firm
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
          <p className="eyebrow" style={{ color: "var(--gold-text)" }}>From Australia to India</p>
          <h2 style={{ marginBottom: 10 }}>Indian-law work our clients need</h2>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 760 }}>
            A large part of our practice is clients with ties to India. Many come to us with matters that have to be run
            in India, by an Indian advocate. These are the matters we look to refer to firms we work with.
          </p>
          <div className="situations">
            {indiaWork.map((w) => (
              <div key={w.title} className="situation">
                <span className="icon"><Icon name={w.icon} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 24, maxWidth: 760 }}>
            Our clients engage the Indian firm directly, on its own terms and fees. We help with the Australian side, such as
            documents signed and witnessed here and any related Australian proceedings, and stay in touch with the client&apos;s consent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "var(--gold-text)" }}>From India to Australia</p>
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

      <section className="section stone">
        <div className="wrap split">
          <div className="narrow">
            <h2>How a referral works, either way</h2>
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

      <section className="section">
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

      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <h2 style={{ marginBottom: 10 }}>Beyond India</h2>
          <p className="muted">
            India is where we are starting. We plan to build the same two-way arrangements with independent firms in the
            United Kingdom, Singapore, Malaysia and other countries where our clients have ties. If your firm practises in
            one of those countries, we would be glad to hear from you through the form below.
          </p>
        </div>
      </section>

      <section className="section stone" id="enquire">
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
