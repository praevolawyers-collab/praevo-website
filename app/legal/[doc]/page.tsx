import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { firm } from "@/content/site";
import { PageHero } from "@/components/Blocks";

// DRAFT legal pages — the principal must review and finalise each one before launch.
type Doc = { title: string; sections: { h: string; p: string[] }[] };

const docs: Record<string, Doc> = {
  privacy: {
    title: "Privacy policy",
    sections: [
      { h: "Who we are", p: [`${firm.name}, ${firm.address.street}, Melbourne VIC 3000. We handle personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.`] },
      { h: "What we collect", p: ["Contact details, information about your matter, identity documents where required, and information about other parties for conflict checks. Our website collects only what you enter into our forms, plus analytics data if you consent to cookies."] },
      { h: "How we use it", p: ["To respond to your enquiry, check for conflicts, provide legal services, bill you and meet our legal and professional obligations."] },
      { h: "Overseas disclosure", p: ["Some service providers we use (such as email, booking, payment, hosting and analytics providers) may store data outside Australia, including in the United States. [List providers and countries.] Where you ask us to work with lawyers in India or another country, we share information with them only with your consent."] },
      { h: "Security and retention", p: ["We take reasonable steps to protect personal information and keep client files for the periods required by law."] },
      { h: "Access, correction and complaints", p: [`Contact our privacy officer at ${firm.email}. If you are not satisfied with our response, you may complain to the Office of the Australian Information Commissioner.`] },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      { h: "General information only", p: ["The content of this website is general information and is not legal advice. You should obtain advice on your own circumstances before acting."] },
      { h: "No lawyer–client relationship", p: ["Sending us an enquiry or booking a consultation does not create a lawyer–client relationship. We act for you only once we have confirmed in writing that we will."] },
      { h: "Foreign law", p: ["We advise on Australian law only. We do not advise on Indian law or the law of any other country."] },
      { h: "Professional standards", p: [firm.pss] },
    ],
  },
  costs: {
    title: "Costs disclosure",
    sections: [
      { h: "Your right to information about costs", p: ["Under the Legal Profession Uniform Law (Victoria), you have the right to receive information about how we charge, an estimate of total legal costs, and updates if that estimate changes significantly."] },
      { h: "Your other rights", p: ["You have the right to negotiate a costs agreement, to receive a bill, to request an itemised bill after receiving a lump sum bill, and to seek the assistance of the Victorian Legal Services Board and Commissioner in a costs dispute."] },
      { h: "Formal disclosure", p: ["For matters where costs are likely to exceed $750 (excluding GST and disbursements), we provide a formal written disclosure before or as soon as practicable after we are engaged. [Principal to confirm wording.]"] },
    ],
  },
  terms: {
    title: "Website terms",
    sections: [
      { h: "Use of this website", p: ["You may use this website for personal and business information purposes. Content is owned by Praevo Lawyers unless stated otherwise."] },
      { h: "Links", p: ["Links to other websites are provided for convenience. We are not responsible for their content."] },
      { h: "Liability", p: ["To the extent permitted by law, we are not liable for loss arising from reliance on the general information on this website."] },
      { h: "Governing law", p: ["These terms are governed by the law of Victoria, Australia."] },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: { params: Promise<{ doc: string }> }): Promise<Metadata> {
  const { doc } = await params;
  return docs[doc] ? { title: docs[doc].title } : {};
}

export default async function LegalDoc({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  const d = docs[doc];
  if (!d) notFound();
  return (
    <>
      <PageHero eyebrow="Legal" title={d.title} />
      <section className="section">
        <div className="wrap prose">
          {d.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => <p key={p}>{p}</p>)}
            </div>
          ))}
          <p className="small muted" style={{ marginTop: 40 }}>Last updated: [date]</p>
        </div>
      </section>
    </>
  );
}
