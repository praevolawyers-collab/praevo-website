import Link from "next/link";
import { firm } from "@/content/site";

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="dark page-hero">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead" style={{ marginTop: 22 }}>{lead}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Talk to a lawyer about your matter." }: { title?: string }) {
  return (
    <section className="dark cta-band">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p style={{ marginTop: 14, marginBottom: 0 }}>
            Book a video or in-person consultation, or send us a short enquiry. Consultations are {firm.consultationFee}.
          </p>
        </div>
        <div className="btns" style={{ marginTop: 0 }}>
          <Link href="/book" className="btn btn-gold">Book a consultation</Link>
          <Link href="/contact" className="btn btn-line">Send an enquiry</Link>
        </div>
      </div>
    </section>
  );
}
