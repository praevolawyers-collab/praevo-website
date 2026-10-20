"use client";

import { useState } from "react";
import Link from "next/link";
import { areas } from "@/content/site";

type Kind = "client" | "collaborate";

export default function EnquiryForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, kind }),
    }).catch(() => null);
    setState(res && res.ok ? "ok" : "err");
    if (res && res.ok) e.currentTarget.reset();
  }

  if (state === "ok") {
    return (
      <p className="notice ok" role="status">
        Thank you. We have received your {kind === "client" ? "enquiry" : "expression of interest"} and will reply within two business days.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      {/* honeypot: hidden from people, catches bots */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      {kind === "collaborate" && (
        <div className="row">
          <label>Firm name<input name="firm" required /></label>
          <label>City<input name="city" required /></label>
        </div>
      )}
      {kind === "collaborate" && (
        <div className="row">
          <label>
            What would you like to do?
            <select name="purpose" required defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Refer a client who needs Australian legal help</option>
              <option>Work together on a cross-border matter</option>
              <option>Take on Indian-law work for Praevo&apos;s clients</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Area of law (if known)
            <select name="area" defaultValue="">
              <option value="">Not sure / not applicable</option>
              <optgroup label="Australian law">
                {areas.map((a) => <option key={a.slug}>{a.title}</option>)}
              </optgroup>
              <optgroup label="Indian law (for our clients)">
                {["Family law in India", "Property in India", "Succession and estates in India", "Civil and commercial disputes in India", "Criminal matters in India", "Business set-up in India"].map((t) => <option key={t}>{t}</option>)}
              </optgroup>
            </select>
          </label>
        </div>
      )}
      <div className="row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="row">
        <label>Phone or WhatsApp<input name="phone" autoComplete="tel" /></label>
        {kind === "client" ? (
          <label>
            Type of matter
            <select name="area" defaultValue="">
              <option value="" disabled>Select…</option>
              {areas.map((a) => <option key={a.slug}>{a.title}</option>)}
              <option>Something else</option>
            </select>
          </label>
        ) : (
          <label>Bar Council enrolment number(s)<input name="enrolment" /></label>
        )}
      </div>
      {kind === "collaborate" && (
        <label>
          For a referral: client and other party names, for our conflict check (only with your client&apos;s consent)
          <input name="otherParties" />
        </label>
      )}
      {kind === "client" && (
        <label>Names of any other parties involved (for our conflict check)<input name="otherParties" /></label>
      )}
      <label>
        {kind === "client" ? "Briefly, what do you need help with?" : "Outline of the matter, or your practice areas and how you would like to work with us"}
        <textarea name="message" required />
      </label>
      {kind === "client" && (
        <p className="small muted" style={{ margin: 0 }}>
          Please do not send confidential documents until we have confirmed we can act for you.
        </p>
      )}
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to Praevo Lawyers using these details to respond to me, as set out in the <Link href="/legal/privacy">privacy policy</Link>.
        </span>
      </label>
      {state === "err" && (
        <p className="notice err" role="alert">
          Sorry, your message could not be sent. Please email info@praevo.com.au or call +61 3 9671 4554.
        </p>
      )}
      <div>
        <button className="btn btn-dark" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
