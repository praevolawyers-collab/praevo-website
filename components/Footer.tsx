import Link from "next/link";
import { firm } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap cols">
        <div>
          <h2>{firm.name}</h2>
          <p>
            {firm.address.street}
            <br />
            Melbourne VIC 3000, Australia
          </p>
          <p className="small">{firm.hours}</p>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={firm.phoneHref}>{firm.phone}</a></li>
            <li><a href={firm.whatsappHref}>{firm.mobile} (WhatsApp)</a></li>
            <li><a href={`mailto:${firm.email}`}>{firm.email}</a></li>
          </ul>
        </div>
        <div>
          <h2>Firm</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/our-people">Our People</Link></li>
            <li><Link href="/fees">Fees</Link></li>
            <li><Link href="/collaborate">Collaborate with us</Link></li>
            <li><Link href="/insights">Insights</Link></li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul>
            <li><Link href="/legal/privacy">Privacy policy</Link></li>
            <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
            <li><Link href="/legal/costs">Costs disclosure</Link></li>
            <li><Link href="/legal/terms">Website terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>{firm.regulatory}</p>
        <p>{firm.pss}</p>
        <p>Information on this website is general and is not legal advice. Contacting us does not create a lawyer–client relationship.</p>
        <p>© {new Date().getFullYear()} {firm.name}.</p>
      </div>
    </footer>
  );
}
