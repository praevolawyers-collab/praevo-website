import type { Metadata } from "next";
import "./globals.css";
import { firm, areas } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: { default: `${firm.name} | Melbourne lawyers for local and cross-border matters`, template: `%s | ${firm.name}` },
  description: firm.description,
  openGraph: { siteName: firm.name, locale: "en_AU", type: "website", images: ["/logo-full.png"] },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: firm.name,
  url: firm.url,
  logo: `${firm.url}/logo-full.png`,
  telephone: firm.phone,
  email: firm.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: firm.address.street,
    addressLocality: firm.address.locality,
    addressRegion: firm.address.region,
    postalCode: firm.address.postcode,
    addressCountry: "AU",
  },
  areaServed: ["AU", "IN"],
  knowsLanguage: ["en", "hi", "ta", "kn"],
  knowsAbout: areas.map((a) => a.title),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="whatsapp" href={firm.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          WhatsApp
        </a>
      </body>
    </html>
  );
}
