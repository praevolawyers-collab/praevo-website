import Link from "next/link";
import { firm, areas, corridor, steps, people, situations } from "@/content/site";
import { CtaBand } from "@/components/Blocks";
import Icon from "@/components/Icon";

export default function Home() {
  const principal = people[0];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-main">
            <p className="eyebrow">Melbourne law firm · Australian law</p>
            <h1 style={{ color: "#fff" }}>{firm.tagline}</h1>
            <p className="lead" style={{ marginTop: 26 }}>
              Visas, business, property, family law and disputes, including matters that cross into India and beyond.
            </p>
            <div className="btns">
              <Link href="/book" className="btn btn-gold">Book a consultation</Link>
              <Link href="/expertise" className="btn btn-line">Explore our expertise</Link>
            </div>
          </div>
          <div className="hero-side">
            <Link href="/book" className="hero-card">
              <strong>Video consultations <span aria-hidden="true">→</span></strong>
              From Australia, India or anywhere, at a time that suits your time zone.
            </Link>
            <Link href="/fees" className="hero-card">
              <strong>Fees in writing first <span aria-hidden="true">→</span></strong>
              Fixed or capped fees where possible, quoted before work starts.
            </Link>
            <Link href="/about#regulation" className="hero-card">
              <strong>Regulated in Victoria <span aria-hidden="true">→</span></strong>
              An Australian law practice led by a practising principal solicitor.
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="eyebrow">Who we help</p>
              <h2>Where would you like to start?</h2>
            </div>
            <Link href="/contact">Not sure? Send us a short enquiry →</Link>
          </div>
          <div className="situations">
            {situations.map((s) => {
              const area = areas.find((a) => a.slug === s.area)!;
              return (
                <div key={s.title} className="situation">
                  <span className="icon"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href={`/expertise/${area.slug}`} className="pill">
                    {area.title} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap">
          <div className="head-row">
            <h2>All practice areas</h2>
            <Link href="/expertise">View expertise →</Link>
          </div>
          <div className="tiles">
            {areas.map((a, i) => (
              <Link key={a.slug} href={`/expertise/${a.slug}`} className="tile">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{a.title}</span>
                <span className="d">{a.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section stone">
        <div className="wrap split">
          <div className="narrow">
            <p className="eyebrow">India → Australia</p>
            <h2>One Australian point of contact for matters that cross borders.</h2>
            <p style={{ marginTop: 22 }}>
              Many of our clients have a connection to both countries. We handle the Australian side and coordinate with
              independent Indian law firms, who are engaged by you directly for any Indian-law work.
            </p>
            <Link href="/clients-from-india" style={{ fontWeight: 600 }}>Clients from India →</Link>
          </div>
          <div className="wide cards">
            {corridor.map((c) => (
              <div key={c.title} className="card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 44 }}>How it works</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section white">
        <div className="wrap feature">
          <img src={principal.photo} alt={principal.name} />
          <div>
            <p className="eyebrow">{principal.role}</p>
            <h2>{principal.name}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{principal.bio[0]}</p>
            <p className="muted">Speaks {principal.languages.join(", ")}.</p>
            <Link href="/our-people" style={{ fontWeight: 600 }}>Meet our team →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 style={{ marginBottom: 28 }}>What clients say</h2>
          <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ margin: 0, maxWidth: 560 }}>Read what our clients say on Google, or share your own experience of working with us.</p>
            <div className="btns" style={{ marginTop: 0 }}>
              <a href={firm.googleProfileUrl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Read our Google reviews</a>
              <a href={firm.googleReviewUrl} className="btn btn-gold" target="_blank" rel="noopener noreferrer">Leave a review</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
