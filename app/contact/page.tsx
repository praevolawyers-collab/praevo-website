import type { Metadata } from "next";
import { firm } from "@/content/site";
import { PageHero } from "@/components/Blocks";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Praevo Lawyers, Suite 1304, 227 Collins Street, Melbourne. Phone, email, WhatsApp or online enquiry.",
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Send us a short enquiry." lead="We reply within two business days. For urgent matters, please call." />
      <section className="section">
        <div className="wrap split">
          <div className="wide"><EnquiryForm kind="client" /></div>
          <aside className="narrow">
            <div className="card">
              <h3>Office</h3>
              <p>{firm.address.street}<br />Melbourne VIC 3000, Australia</p>
              <p>{firm.hours}<br />Video consultations can be arranged at times that suit clients in India.</p>
            </div>
            <div className="card" style={{ marginTop: 20 }}>
              <h3>Phone and email</h3>
              <p><a href={firm.phoneHref}>{firm.phone}</a><br /><a href={firm.whatsappHref}>{firm.mobile} (WhatsApp)</a><br /><a href={`mailto:${firm.email}`}>{firm.email}</a></p>
            </div>
            <iframe
              title="Map showing 227 Collins Street, Melbourne"
              src="https://www.google.com/maps?q=227+Collins+Street+Melbourne+VIC+3000&output=embed"
              style={{ width: "100%", height: 260, border: 0, marginTop: 20, borderRadius: 6 }}
              loading="lazy"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
