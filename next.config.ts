import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 redirects from the old WordPress site so existing links and search rankings carry over.
  async redirects() {
    const old: [string, string][] = [
      ["/about-us", "/about"],
      ["/contact-us", "/contact"],
      ["/our-services", "/expertise"],
      ["/our-services/family-law", "/expertise/family-law"],
      ["/our-services/commercial-law", "/expertise/commercial-law"],
      ["/our-services/immigration-law", "/expertise/visas-and-migration"],
      ["/our-services/criminal-law", "/expertise/criminal-law"],
      ["/our-services/wills-estate", "/expertise/wills-and-estates"],
      ["/blog", "/insights"],
      ["/privacy-policy", "/legal/privacy"],
      ["/disclaimer", "/legal/disclaimer"],
      ["/terms-conditions", "/legal/terms"],
      ["/family-law-understanding-child-custody-in-divorce-cases", "/insights"],
      ["/commercial-law-the-importance-of-contract-law-in-business", "/insights"],
      ["/immigration-law-steps-to-obtaining-permanent-residency", "/insights"],
      ["/criminal-law-your-rights-during-an-arrest", "/insights"],
    ];
    return old.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;
