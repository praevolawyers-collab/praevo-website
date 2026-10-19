// All website text lives in this file so it can be edited in one place.
// Items in [square brackets] are placeholders the principal must confirm before launch.

export const firm = {
  name: "Praevo Lawyers",
  url: "https://praevo.com.au",
  tagline: "Australian legal advice, wherever your life or business connects.",
  description:
    "Praevo Lawyers is a Melbourne law firm advising on visas, business, property, family law, wills and disputes, including matters that cross into India and beyond.",
  address: {
    street: "Suite 1304, 227 Collins Street",
    locality: "Melbourne",
    region: "VIC",
    postcode: "3000",
    country: "Australia",
  },
  phone: "+61 3 9671 4554",
  phoneHref: "tel:+61396714554",
  mobile: "+61 413 030 361",
  whatsappHref: "https://wa.me/61413030361",
  email: "info@praevo.com.au",
  hours: "Monday to Friday, 9:00am – 5:30pm (Melbourne time)",
  consultationFee: "$330, plus GST for clients in Australia",
  googleReviewUrl: "https://g.page/r/CeQW4i0Qfzy-EAE/review",
  googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Praevo+Lawyers+227+Collins+Street+Melbourne",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/praevolawyers/30min",
  regulatory:
    "Praevo Lawyers is an Australian law practice regulated in Victoria by the Victorian Legal Services Board and Commissioner. We advise on Australian law. Where Indian or other foreign law applies, we work alongside independent lawyers qualified in that country, who are engaged by you directly.",
  pss: "Liability limited by a scheme approved under Professional Standards Legislation.",
};

export type Area = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  help: string[];
  process: string[];
  faqs: { q: string; a: string }[];
};

export const areas: Area[] = [
  {
    slug: "visas-and-migration",
    title: "Visas & migration",
    short: "Skilled, partner, parent, student and business visas, and citizenship.",
    intro:
      "We advise individuals and families on Australian visas, from the first eligibility check to lodgement and decision, and on review where a visa has been refused.",
    help: [
      "Skilled and employer-sponsored visas",
      "Partner, parent and other family visas",
      "Student visas and study-to-residence pathways",
      "Business and investor visas",
      "Australian citizenship",
      "Visa refusals and cancellations, including review applications",
    ],
    process: [
      "Eligibility assessment and written visa strategy",
      "Document checklist and evidence review",
      "Preparation and lodgement of the application",
      "Responding to requests from the Department of Home Affairs until decision",
    ],
    faqs: [
      {
        q: "Can you help if I am outside Australia?",
        a: "Yes. Consultations are held by video call, documents are signed electronically and applications are lodged online.",
      },
      {
        q: "Visa rules change often. How do you keep advice current?",
        a: "We check the criteria that apply on the day we advise and again before lodgement, and tell you in writing if a change affects your application.",
      },
    ],
  },
  {
    slug: "employer-sponsorship",
    title: "Employer sponsorship",
    short: "Sponsor approval, nominations and ongoing sponsor obligations.",
    intro:
      "We help Australian employers recruit skilled staff from overseas and stay compliant with their obligations as sponsors.",
    help: [
      "Standard business sponsorship applications",
      "Nominations and labour market testing",
      "Visa applications for sponsored employees and their families",
      "Sponsor obligations and compliance reviews",
      "Responding to monitoring and sanctions",
    ],
    process: [
      "Review of the role, salary and business",
      "Sponsorship and nomination applications",
      "Employee visa application",
      "Ongoing compliance support",
    ],
    faqs: [
      {
        q: "Can you act for both the employer and the employee?",
        a: "Often yes, with both parties' informed consent and after a conflict check. We will explain how this works before we start.",
      },
    ],
  },
  {
    slug: "market-entry-and-firb",
    title: "Market entry & FIRB",
    short: "Company set-up, foreign investment approval and structuring for overseas businesses.",
    intro:
      "We help overseas businesses, including Indian companies, establish and operate in Australia, and advise on foreign investment approval where it is needed.",
    help: [
      "Establishing an Australian company or branch",
      "Foreign Investment Review Board (FIRB) applications",
      "Shareholder and joint venture agreements",
      "Employment contracts and staff visas",
      "Commercial contracts for the Australian business",
    ],
    process: [
      "Structuring advice for the Australian operation",
      "Registration and FIRB applications where required",
      "Core contracts and employment documents",
      "Coordination with your lawyers and advisers in your home country",
    ],
    faqs: [
      {
        q: "Who handles the Indian-law side, such as ODI or FEMA approvals?",
        a: "Independent Indian counsel, engaged by you directly. We coordinate with them so both sides line up.",
      },
    ],
  },
  {
    slug: "commercial-law",
    title: "Commercial law",
    short: "Contracts, shareholder and joint venture agreements, business purchases.",
    intro:
      "Practical commercial advice for start-ups, family businesses and established companies.",
    help: [
      "Drafting and reviewing commercial contracts",
      "Shareholder and partnership agreements",
      "Buying or selling a business",
      "Leases and franchise agreements",
      "Terms and conditions and privacy policies",
    ],
    process: [
      "Understand the commercial goal",
      "Advice on risks and options",
      "Drafting and negotiation",
      "Completion and next steps",
    ],
    faqs: [
      {
        q: "Do you offer fixed fees for contract work?",
        a: "Often, yes. We quote in writing before we start.",
      },
    ],
  },
  {
    slug: "disputes-and-litigation",
    title: "Disputes & litigation",
    short: "Commercial claims, debt recovery and shareholder disputes in Australian courts.",
    intro:
      "We act in civil and commercial disputes in Victorian and federal courts, and aim to resolve matters early where that serves the client.",
    help: [
      "Contract and commercial disputes",
      "Debt recovery",
      "Shareholder and director disputes",
      "Building and construction disputes",
      "Mediation and settlement negotiations",
    ],
    process: [
      "Early assessment of the claim and the evidence",
      "Letters of demand and negotiation",
      "Court proceedings where needed",
      "Mediation, settlement or trial",
    ],
    faqs: [
      {
        q: "The other party is in India. Can I still bring a claim in Australia?",
        a: "It depends on the contract and the facts. We advise on the Australian proceedings and work with Indian counsel on any steps needed in India.",
      },
    ],
  },
  {
    slug: "family-law",
    title: "Family law",
    short: "Separation, parenting and property settlements, including assets overseas.",
    intro:
      "Clear, careful advice through separation, including for families with property, children or relatives in more than one country.",
    help: [
      "Divorce and separation",
      "Parenting arrangements",
      "Property settlements, including overseas assets",
      "Financial and binding financial agreements",
      "Family violence intervention orders",
    ],
    process: [
      "Initial advice on your rights and options",
      "Negotiation and dispute resolution",
      "Consent orders or agreements",
      "Court proceedings where needed",
    ],
    faqs: [
      {
        q: "We married in India. Can we divorce in Australia?",
        a: "Usually yes, if either party meets the Australian jurisdiction requirements. We will confirm this in your first consultation.",
      },
    ],
  },
  {
    slug: "wills-and-estates",
    title: "Wills & estates",
    short: "Wills, powers of attorney and probate for families with assets in more than one country.",
    intro:
      "We help you plan ahead and help families administer estates, including where there are assets or beneficiaries overseas.",
    help: [
      "Wills and testamentary trusts",
      "Enduring powers of attorney",
      "Probate and estate administration",
      "Estates with assets in India or elsewhere",
      "Will disputes",
    ],
    process: [
      "Review of your family and assets",
      "Advice and drafting",
      "Signing and safe custody",
      "Coordination with overseas counsel where needed",
    ],
    faqs: [
      {
        q: "Do I need a separate will for property in India?",
        a: "Often it is advisable. We draft the Australian will and coordinate with Indian counsel so the two documents work together.",
      },
    ],
  },
  {
    slug: "property",
    title: "Property",
    short: "Contract review, FIRB and settlement for buyers in Australia and overseas.",
    intro:
      "Advice on buying and selling property in Australia, including for buyers who live overseas.",
    help: [
      "Contract of sale review",
      "FIRB approval for foreign purchasers",
      "Foreign purchaser duty",
      "Co-ownership agreements",
      "Property disputes",
    ],
    process: [
      "Contract review before you sign",
      "FIRB and duty advice",
      "Coordination with your conveyancer and lender",
      "Settlement",
    ],
    faqs: [
      {
        q: "Can foreign buyers purchase residential property in Australia?",
        a: "Foreign persons generally need FIRB approval and pay additional duty in most states. Rules change, so get advice before you sign a contract.",
      },
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal law",
    short: "Advice and representation from bail to hearing.",
    intro: "Advice and representation in Victorian criminal matters.",
    help: [
      "Bail applications",
      "Summary offences and traffic matters",
      "Pleas and sentencing",
      "Contested hearings",
      "Advice on immigration consequences of criminal charges",
    ],
    process: [
      "Urgent first advice",
      "Review of the brief of evidence",
      "Negotiation with the prosecution",
      "Representation in court",
    ],
    faqs: [
      {
        q: "Can a criminal charge affect my visa?",
        a: "It can. We advise on the criminal matter and its immigration consequences together.",
      },
    ],
  },
  {
    slug: "cross-border-matters",
    title: "Cross-border matters",
    short: "Australian matters with an Indian dimension, coordinated with Indian counsel.",
    intro:
      "Many of our clients have ties to both Australia and India. We handle the Australian side of the matter and coordinate with independent Indian law firms on the Indian side.",
    help: [
      "Indian businesses establishing in Australia",
      "Families with assets or proceedings in both countries",
      "Disputes with a party in India",
      "Estates with property in India",
      "Visas for family members in India",
    ],
    process: [
      "We map which parts of the matter are Australian and which are Indian",
      "We advise on the Australian law",
      "We introduce independent Indian counsel, engaged by you directly",
      "We coordinate one timeline across both",
    ],
    faqs: [
      {
        q: "Do you advise on Indian law?",
        a: "No. We advise on Australian law only. Indian-law advice comes from independent Indian counsel, who act for you under their own engagement and fees.",
      },
      {
        q: "Do you receive a referral fee from Indian law firms?",
        a: "No. Each firm is engaged and paid by you separately, and no fees are shared.",
      },
    ],
  },
];

export const corridor = [
  {
    title: "Indian businesses entering Australia",
    text: "Subsidiary set-up, FIRB, contracts and staff visas, with one point of contact in Melbourne.",
  },
  { title: "Moving to Australia", text: "Visa strategy from first eligibility check to lodgement and decision." },
  {
    title: "Families across two countries",
    text: "Australian family law, wills and probate where assets or relatives are in India.",
  },
  {
    title: "Disputes with an Indian party",
    text: "Australian proceedings, with any steps in India handled by Indian counsel.",
  },
];

export const steps = [
  { title: "Tell us about your matter", text: "Send a short enquiry or book a consultation online." },
  { title: "Meet a lawyer", text: "By video or in person in Melbourne, at a time that suits you." },
  { title: "Advice and fees in writing", text: "Clear advice and a written costs estimate before work starts." },
  { title: "We handle it", text: "Regular updates, electronic signing and one point of contact." },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  qualifications: string[];
  admissions: string[];
  languages: string[];
  areas: string[];
  bio: string[];
};

// Photos currently load from the old website. Before switching off WordPress,
// download them into /public/team/ and change these paths to /team/<file>.jpg.
export const people: Person[] = [
  {
    slug: "prakash-srinivasan",
    name: "Prakash Srinivasan",
    role: "Founder & Principal Solicitor",
    photo: "https://praevo.com.au/wp-content/uploads/2025/01/Prakash-Srinivasan_1.jpg",
    qualifications: ["Bachelor of Laws, University of New England"],
    admissions: [
      "Admitted to practise in the Supreme Court of Victoria and the High Court of Australia",
      "Holds a principal practising certificate issued by the Victorian Legal Services Board",
    ],
    languages: ["English", "Hindi", "Tamil", "Kannada"],
    areas: ["Visas & migration", "Family law", "Disputes & litigation", "Commercial law", "Cross-border matters"],
    bio: [
      "Prakash founded Praevo Lawyers. Before becoming a lawyer he worked as a migration agent for more than 15 years, and immigration remains at the centre of his practice.",
      "He practises in civil and commercial litigation, family, immigration and criminal law, and works with Indian counsel on matters with an Indian dimension.",
    ],
  },
  {
    slug: "zubin-kalchuri",
    name: "Zubin Kalchuri",
    role: "Senior Solicitor",
    photo: "https://praevo.com.au/wp-content/uploads/2025/07/Zubin-Kalchuri-300x300.jpg",
    qualifications: [
      "Juris Doctor, University of Technology Sydney",
      "Postgraduate qualifications in human resource management, University of Wollongong",
    ],
    admissions: ["Admitted to the Supreme Court of Victoria", "Formerly practised as an advocate in India"],
    languages: ["English", "Hindi", "Marathi"],
    areas: ["Family law", "Commercial law", "Visas & migration", "Criminal law", "Disputes & litigation"],
    bio: [
      "Zubin brings more than a decade of courtroom and advisory experience, including practice as an advocate in India before admission in Victoria.",
      "He is known for thorough preparation and client-focused advocacy.",
    ],
  },
  {
    slug: "neha-prakash",
    name: "Neha Prakash",
    role: "Solicitor",
    photo: "https://praevo.com.au/wp-content/uploads/2025/01/Neha-Prakash_1-214x300.jpg",
    qualifications: ["Bachelor of Laws and Bachelor of Commerce"],
    admissions: ["Admitted to the Supreme Court of Victoria"],
    languages: ["English", "Kannada"],
    areas: ["Family law", "Commercial law", "Visas & migration", "Criminal law", "Disputes & litigation"],
    bio: [
      "Neha combines legal reasoning with commercial awareness, and gives practical advice tailored to each client.",
    ],
  },
  {
    slug: "sev-gokoglu",
    name: "Sev Gokoglu",
    role: "Legal & Migration Assistant",
    photo: "https://praevo.com.au/wp-content/uploads/2025/01/Sev-Gokoglu_1-214x300.jpg",
    qualifications: [
      "Graduate Diploma in Migration Law, Victoria University",
      "Currently studying a Bachelor of Laws",
    ],
    admissions: [],
    languages: ["English", "Turkish"],
    areas: ["Visas & migration"],
    bio: [
      "Sev supports our migration team, guiding clients through each step of the visa process. Sev is not a lawyer, and all legal advice is given by our solicitors.",
    ],
  },
];
