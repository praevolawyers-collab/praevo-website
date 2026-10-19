import Link from "next/link";
import type { Metadata } from "next";
import { firm } from "@/content/site";
import { PageHero } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Book a consultation",
  description: "Book a video or in-person consultation with Praevo Lawyers, Melbourne.",
};

export default function Book() {
  return (
    <>
      <PageHero
        eyebrow="Book a consultation"
        title="Choose a time that suits you."
        lead={`Video or in-person consultations at our Collins Street office. ${firm.consultationFee}. Times are shown in your own time zone.`}
      />
      <section className="section">
        <div className="wrap">
          {firm.calendlyUrl ? (
            <iframe
              title="Book a consultation with Praevo Lawyers"
              src={`${firm.calendlyUrl}?hide_gdpr_banner=1&primary_color=c9a25a`}
              style={{ width: "100%", height: 760, border: 0 }}
            />
          ) : (
            <div className="placeholder">[Calendly booking calendar — set NEXT_PUBLIC_CALENDLY_URL in Vercel]</div>
          )}
          <p className="small muted" style={{ marginTop: 20 }}>
            Booking a consultation does not mean we have agreed to act for you. We will confirm after a conflict check.
            Prefer to write first? <Link href="/contact">Send an enquiry</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
