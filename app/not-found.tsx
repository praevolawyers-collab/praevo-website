import Link from "next/link";
import { PageHero } from "@/components/Blocks";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" lead="The page you were looking for has moved or no longer exists." />
      <section className="section">
        <div className="wrap btns" style={{ marginTop: 0 }}>
          <Link href="/" className="btn btn-dark">Home</Link>
          <Link href="/expertise" className="btn btn-dark">Expertise</Link>
          <Link href="/contact" className="btn btn-dark">Contact</Link>
        </div>
      </section>
    </>
  );
}
