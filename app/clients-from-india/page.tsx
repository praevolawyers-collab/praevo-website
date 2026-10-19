import Link from "next/link";
import type { Metadata } from "next";
import { corridor } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Clients from India",
  description: "Australian legal help for Indian individuals, families and businesses: visas, company set-up, FIRB, property, family law and estates. Indian-law work is handled by independent Indian counsel.",
};

export default function India() {
  return (
    <>
      <PageHero
        eyebrow="Clients from India"
        title="Australian legal help for Indian families and businesses."
        lead="We advise on the Australian side of your matter, in English, Hindi, Tamil or Kannada, and coordinate with independent Indian law firms where Indian law applies."
      />
      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 36 }}>What we help Indian clients with</h2>
          <div className="cards">
            {corridor.map((c) => (
              <div key={c.title} className="card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section stone">
        <div className="wrap split">
          <div className="narrow">
            <h2>How the Indian side is handled</h2>
          </div>
          <div className="wide">
            <ul className="checks">
              <li>We advise on Australian law only.</li>
              <li>Where part of your matter is governed by Indian law, such as ODI or FEMA approvals, an Indian will or a property transfer in India, we tell you at the start.</li>
              <li>We can introduce you to an independent Indian law firm. You engage and pay that firm directly, under its own terms.</li>
              <li>No referral fees are paid in either direction.</li>
              <li>With your consent, we coordinate with your Indian lawyers so both sides follow one timeline.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="narrow"><h2>Working with us from India</h2></div>
          <div className="wide">
            <ol className="steps">
              <li><h3>Send a short enquiry</h3><p>Tell us about your matter by form, email or WhatsApp.</p></li>
              <li><h3>Video consultation</h3><p>At a time that suits Indian Standard Time.</p></li>
              <li><h3>Written advice and fees</h3><p>A written costs estimate before work starts.</p></li>
              <li><h3>Remote handling</h3><p>Documents signed electronically, with regular updates.</p></li>
            </ol>
            <p style={{ marginTop: 32 }}><Link href="/expertise/cross-border-matters" style={{ fontWeight: 600 }}>More on cross-border matters →</Link></p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
