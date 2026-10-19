"use client";

import Link from "next/link";
import { useState } from "react";
import { firm } from "@/content/site";

const links = [
  { href: "/expertise", label: "Expertise" },
  { href: "/clients-from-india", label: "Clients from India" },
  { href: "/our-people", label: "Our People" },
  { href: "/fees", label: "Fees" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>{firm.address.street}, Melbourne VIC 3000</span>
          <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href={firm.phoneHref}>{firm.phone}</a>
            <a href={`mailto:${firm.email}`}>{firm.email}</a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="brand" aria-label={`${firm.name} home`}>
            <img src="/logo-mark.png" alt="" width={52} height={59} />
            <span>
              PRAEVO
              <small>LAWYERS</small>
            </span>
          </Link>
          <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
          <nav id="main-nav" aria-label="Main" className={open ? "nav open" : "nav"}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/book" className="btn btn-gold" onClick={() => setOpen(false)}>
              Book a consultation
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
