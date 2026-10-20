"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { firm, areas } from "@/content/site";
import { topics } from "@/content/insights";

type Item = { href: string; label: string };
type Menu = { label: string; href?: string; items?: Item[]; footer?: Item };

const menus: Menu[] = [
  { label: "Home", href: "/" },
  {
    label: "The Firm",
    items: [
      { href: "/about", label: "About Praevo" },
      { href: "/our-people", label: "Our People" },
      { href: "/fees", label: "Fees" },
      { href: "/collaborate", label: "Collaborate with us" },
    ],
  },
  {
    label: "Expertise",
    items: areas.map((a) => ({ href: `/expertise/${a.slug}`, label: a.title })),
    footer: { href: "/expertise", label: "All practice areas →" },
  },
  { label: "Clients from India", href: "/clients-from-india" },
  {
    label: "Insights",
    items: [{ href: "/insights", label: "Blog: all articles" }, ...topics.map((t) => ({ href: `/insights/topic/${t.slug}`, label: t.title }))],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close menus when the page changes, on outside click, or on Escape.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (m: Menu) =>
    m.href === "/" ? pathname === "/" : m.href ? pathname.startsWith(m.href) : !!m.items?.some((i) => pathname.startsWith(i.href)) || (!!m.footer && pathname.startsWith(m.footer.href));

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
          <button className="menu-toggle" aria-expanded={mobileOpen} aria-controls="main-nav" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "Close" : "Menu"}
          </button>
          <nav id="main-nav" ref={navRef} aria-label="Main" className={mobileOpen ? "nav open" : "nav"}>
            <ul className="nav-list">
              {menus.map((m) =>
                m.items ? (
                  <li
                    key={m.label}
                    className={`has-menu${openMenu === m.label ? " open" : ""}`}
                    onMouseEnter={() => window.matchMedia("(min-width: 961px)").matches && setOpenMenu(m.label)}
                    onMouseLeave={() => window.matchMedia("(min-width: 961px)").matches && setOpenMenu(null)}
                  >
                    <button
                      className={`nav-link${isActive(m) ? " active" : ""}`}
                      aria-expanded={openMenu === m.label}
                      aria-controls={`menu-${m.label}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(openMenu === m.label ? null : m.label);
                      }}
                    >
                      {m.label}
                      <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </button>
                    <div id={`menu-${m.label}`} className={`dropdown${m.items.length > 6 ? " wide" : ""}`}>
                      <ul>
                        {m.items.map((i) => (
                          <li key={i.href}>
                            <Link href={i.href} aria-current={pathname === i.href ? "page" : undefined}>{i.label}</Link>
                          </li>
                        ))}
                      </ul>
                      {m.footer && <Link href={m.footer.href} className="dropdown-footer">{m.footer.label}</Link>}
                    </div>
                  </li>
                ) : (
                  <li key={m.label}>
                    <Link href={m.href!} className={`nav-link${isActive(m) ? " active" : ""}`} aria-current={pathname === m.href ? "page" : undefined}>
                      {m.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link href="/book" className="btn btn-gold nav-cta">Book a consultation</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
