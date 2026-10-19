import type { Metadata } from "next";
import { people } from "@/content/site";
import { PageHero, CtaBand } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Our People",
  description: "Meet the lawyers and staff at Praevo Lawyers, Melbourne.",
};

export default function OurPeople() {
  return (
    <>
      <PageHero eyebrow="Our People" title="The team behind your matter." />
      <section className="section">
        <div className="wrap people">
          {people.map((p) => (
            <article key={p.slug} id={p.slug} className="person">
              <img src={p.photo} alt={p.name} loading="lazy" />
              <div className="body">
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                {p.bio.map((b) => <p key={b} className="small">{b}</p>)}
                <dl>
                  <dt>Qualifications</dt>
                  {p.qualifications.map((q) => <dd key={q}>{q}</dd>)}
                  {p.admissions.length > 0 && <dt>Admission</dt>}
                  {p.admissions.map((q) => <dd key={q}>{q}</dd>)}
                  <dt>Languages</dt>
                  <dd>{p.languages.join(", ")}</dd>
                  <dt>Practice areas</dt>
                  <dd>{p.areas.join(", ")}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
