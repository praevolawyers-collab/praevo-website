import { areas } from "./site";

// Articles for the Insights section. Updated October 2026 from the original posts on the old website.

export type Block = { h?: string; p?: string[]; list?: string[] };
export type Article = {
  slug: string;
  oldSlug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  published: string;
  updated: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "parenting-arrangements-after-separation",
    oldSlug: "family-law-understanding-child-custody-in-divorce-cases",
    title: "Parenting arrangements after separation in Australia",
    summary:
      "How Australian family law decides where children live and how parents share responsibility, including the 2024 changes and issues for families with ties overseas.",
    category: "Family law",
    author: "Prakash Srinivasan",
    published: "18 October 2024",
    updated: "19 October 2026",
    body: [
      {
        p: [
          "Australian family law does not use the words “custody” or “access”. Under the Family Law Act 1975 (Cth), the questions are who has parental responsibility for a child, who the child lives with, and how much time the child spends with each parent and other important people. In every case, the child's best interests are the paramount consideration.",
        ],
      },
      {
        h: "Parental responsibility",
        p: [
          "Parental responsibility means the duties, powers and authority that parents have for their children, including major long-term decisions about education, health, religion and culture, name, and where a child lives when a move would make it harder to spend time with the other parent.",
          "Since 6 May 2024 there is no longer a presumption of “equal shared parental responsibility”. The court can make orders for joint decision-making on major long-term issues, or give that responsibility to one parent, depending on what is in the child's best interests.",
        ],
      },
      {
        h: "What the court considers",
        p: ["When deciding what is in a child's best interests, the court considers:"],
        list: [
          "what arrangements best promote the safety of the child and of each person who cares for them, including any history of family violence, abuse or neglect",
          "any views the child expresses",
          "the child's developmental, psychological, emotional and cultural needs",
          "each person's capacity to provide for those needs",
          "the benefit to the child of a relationship with both parents and other significant people, such as grandparents, where it is safe",
          "anything else relevant to the child's circumstances",
        ],
      },
      {
        h: "Reaching agreement first",
        p: [
          "Most parents resolve arrangements without going to court, by agreement recorded in a parenting plan or in consent orders made by the Federal Circuit and Family Court of Australia. Consent orders are enforceable; a parenting plan is not.",
          "Before applying for parenting orders, parents generally must attempt family dispute resolution and obtain a certificate, unless an exception applies, for example where there is family violence or urgency.",
        ],
      },
      {
        h: "Child support",
        p: [
          "Child support is separate from parenting orders. It is usually assessed by Services Australia using a formula based on both parents' incomes, the number and ages of the children, and the care each parent provides. Parents can also make a private child support agreement.",
        ],
      },
      {
        h: "Changing parenting orders",
        p: [
          "Final parenting orders are not reconsidered lightly. Before changing them, the court must be satisfied that there has been a significant change of circumstances since the orders were made and that reconsidering them is in the child's best interests.",
        ],
      },
      {
        h: "Families with ties to India or another country",
        p: [
          "Relocating a child overseas, or keeping a child overseas after a holiday, without the other parent's consent or a court order can have serious consequences. India is not a party to the Hague Convention on the Civil Aspects of International Child Abduction, so the usual return mechanisms do not apply between Australia and India. If you are worried that a child may be taken overseas, get advice early: urgent orders, including placing a child on the Australian Federal Police Family Law Watchlist, may be available.",
        ],
      },
    ],
  },
  {
    slug: "contracts-in-business",
    oldSlug: "commercial-law-the-importance-of-contract-law-in-business",
    title: "Contracts in business: what makes them enforceable and how to protect yourself",
    summary:
      "The elements of a binding contract under Australian law, the unfair contract terms regime, and practical steps to reduce disputes.",
    category: "Commercial law",
    author: "Prakash Srinivasan",
    published: "18 October 2024",
    updated: "19 October 2026",
    body: [
      {
        p: [
          "Contracts set out who does what, when, and for how much. A clear contract reduces disputes and gives each party a remedy if the other does not perform.",
        ],
      },
      {
        h: "What makes a contract binding",
        p: ["Under Australian law, a contract is generally enforceable if there is:"],
        list: [
          "an agreement, usually an offer accepted on the same terms",
          "consideration, meaning each party gives something of value (a deed is the exception)",
          "an intention to create legal relations",
          "terms that are certain enough to be enforced",
          "parties with legal capacity, and a lawful purpose",
        ],
      },
      {
        p: [
          "Many contracts do not need to be in writing, and agreements can be formed by email or signed electronically. However, some contracts, such as contracts for the sale of land, must be in writing to be enforceable, and an unwritten agreement is always harder to prove.",
        ],
      },
      {
        h: "Unfair contract terms",
        p: [
          "Under the Australian Consumer Law, terms in standard form consumer contracts and small business contracts can be declared void if they are unfair. Since 9 November 2023, proposing or relying on an unfair term can also attract significant penalties. A business is generally a small business for these purposes if it has fewer than 100 employees or an annual turnover below $10 million. Businesses that use standard terms should review them.",
        ],
      },
      {
        h: "Contracts every business should have in order",
        list: [
          "customer terms and conditions, or service agreements",
          "supplier and distribution agreements",
          "employment and contractor agreements",
          "shareholder or partnership agreements",
          "confidentiality agreements",
          "leases",
        ],
      },
      {
        h: "If the other party breaches the contract",
        p: [
          "The main remedy is damages, which aim to put you in the position you would have been in if the contract had been performed. In some cases you may be able to terminate the contract, or ask a court to order specific performance or an injunction. Time limits apply: in Victoria, a claim for breach of contract must generally be brought within six years.",
        ],
      },
      {
        h: "Practical steps",
        list: [
          "put important agreements in writing and keep signed copies",
          "define the scope of work, price, payment terms and deadlines precisely",
          "include a dispute resolution clause, such as negotiation followed by mediation",
          "for contracts with an overseas party, state which country's law applies and where disputes will be resolved",
          "have significant contracts reviewed before you sign",
        ],
      },
    ],
  },
  {
    slug: "pathways-to-permanent-residence",
    oldSlug: "immigration-law-steps-to-obtaining-permanent-residency",
    title: "Pathways to permanent residence in Australia",
    summary:
      "The main routes to Australian permanent residence, the steps involved, and what permanent residence does and does not give you.",
    category: "Visas & migration",
    author: "Prakash Srinivasan",
    published: "18 October 2024",
    updated: "19 October 2026",
    body: [
      {
        p: [
          "Permanent residence allows you to live, work and study in Australia indefinitely, enrol in Medicare, sponsor eligible relatives and, after meeting the residence requirements, apply for Australian citizenship. Visa criteria, occupation lists and processing priorities change often, so check the current requirements before you apply.",
        ],
      },
      {
        h: "Main pathways",
        list: [
          "Skilled migration: Skilled Independent (subclass 189), Skilled Nominated by a state or territory (subclass 190), and Skilled Work Regional (subclass 491), which can lead to permanent residence through subclass 191. These are points-tested and by invitation.",
          "Employer sponsorship: the Employer Nomination Scheme (subclass 186), including for people who have worked for their sponsoring employer on a temporary skilled visa.",
          "Partner visas: onshore (subclasses 820 and 801) or offshore (subclasses 309 and 100), for partners of Australian citizens, permanent residents and eligible New Zealand citizens.",
          "Parent and other family visas, many of which have long waiting periods.",
          "National Innovation visa (subclass 858), formerly the Global Talent visa, for people with an internationally recognised record of exceptional achievement.",
        ],
      },
      {
        p: [
          "The Business Innovation and Investment Program closed to new applications in July 2024.",
        ],
      },
      {
        h: "The usual steps",
        list: [
          "Assess eligibility and choose the right visa, including skills assessment and English requirements where they apply.",
          "For points-tested visas, lodge an expression of interest in SkillSelect and, if required, obtain a state or territory nomination.",
          "Gather evidence: identity documents, qualifications, employment records, relationship evidence and police certificates.",
          "Lodge the application online and pay the visa application charge.",
          "Complete health examinations and respond to any requests from the Department of Home Affairs.",
          "Receive the decision. Some refusals can be reviewed by the Administrative Review Tribunal, within strict time limits.",
        ],
      },
      {
        h: "After you become a permanent resident",
        p: [
          "A permanent visa lets you stay in Australia indefinitely, but its travel facility usually lasts five years. To re-enter after that, you need a Resident Return Visa or Australian citizenship.",
          "To apply for citizenship by conferral, you generally need to have lived in Australia lawfully for four years, including one year as a permanent resident, and meet the other requirements, including the citizenship test.",
        ],
      },
      {
        h: "Before you apply",
        p: [
          "A refused or poorly prepared application can affect later applications. Get advice on the right pathway before lodging, especially if you have a previous refusal, health or character concerns, or a visa with a “no further stay” condition.",
        ],
      },
    ],
  },
  {
    slug: "your-rights-if-arrested-in-victoria",
    oldSlug: "criminal-law-your-rights-during-an-arrest",
    title: "Your rights if you are arrested in Victoria",
    summary:
      "What police can and cannot do when you are arrested or questioned in Victoria, and what you should do.",
    category: "Criminal law",
    author: "Prakash Srinivasan",
    published: "18 October 2024",
    updated: "19 October 2026",
    body: [
      {
        p: [
          "Being arrested is stressful. Knowing your basic rights helps you protect yourself without making things worse. This article summarises the position in Victoria, mainly under the Crimes Act 1958 (Vic).",
        ],
      },
      {
        h: "The right to silence",
        p: [
          "In most cases you do not have to answer police questions. Before questioning you, police must caution you that you do not have to say or do anything, and that anything you say or do may be given in evidence.",
          "However, police can require you to give your name and address in certain circumstances, for example if they believe on reasonable grounds that you have committed or are about to commit an offence, or when you are driving. Refusing or giving false details in those circumstances can be an offence.",
        ],
      },
      {
        h: "Contacting a lawyer and a friend or relative",
        p: [
          "Before questioning, you have the right to communicate with a lawyer, and with a friend or relative to tell them where you are, unless police reasonably believe this would allow an accomplice to escape or evidence to be destroyed. Ask to speak with a lawyer before answering any questions.",
        ],
      },
      {
        h: "Interpreters and consular help",
        p: [
          "If you cannot speak English well enough to communicate, you are entitled to an interpreter before questioning. If you are not an Australian citizen, you can ask police to let you contact your country's consulate.",
        ],
      },
      {
        h: "Young people",
        p: [
          "If you are under 18, a parent, guardian or independent person must generally be present during questioning.",
        ],
      },
      {
        h: "How long police can hold you",
        p: [
          "After arrest, police must either release you or bring you before a bail justice or court within a reasonable time. You may be released on bail, with or without conditions, or remanded in custody.",
        ],
      },
      {
        h: "Searches and force",
        p: [
          "Police need a warrant or a specific legal power to search you, your car or your home. Do not physically resist a search, even if you think it is unlawful; tell your lawyer afterwards. Police may use only reasonable force. If you are injured, ask for medical attention, and note the names or numbers of the officers and any witnesses.",
        ],
      },
      {
        h: "If you are not an Australian citizen",
        p: [
          "Criminal charges and convictions can affect your current visa and future visa applications, including through the character test. Tell your lawyer about your visa status so the criminal and immigration consequences can be considered together.",
        ],
      },
      {
        h: "What to do",
        list: [
          "stay calm and be polite",
          "give your name and address if required",
          "say you wish to speak with a lawyer before answering questions",
          "do not sign anything you do not understand",
          "contact a criminal lawyer as soon as possible",
        ],
      },
    ],
  },

  {
    slug: "sponsoring-overseas-workers",
    oldSlug: "",
    title: "Sponsoring overseas workers: a guide for Australian employers",
    summary:
      "How the Skills in Demand visa works, what it costs, and the obligations that come with being an approved sponsor.",
    category: "Employer sponsorship",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "When you cannot find the skills you need in Australia, sponsoring a worker from overseas can fill the gap. Sponsorship is a three-step process, and each step has its own requirements.",
        ],
      },
      {
        h: "The three steps",
        list: [
          "Sponsorship: the business applies to become an approved standard business sponsor.",
          "Nomination: the business nominates a specific position, occupation and salary.",
          "Visa: the worker applies for the visa, usually the Skills in Demand visa (subclass 482).",
        ],
      },
      {
        h: "The Skills in Demand visa (subclass 482)",
        p: [
          "The Skills in Demand visa replaced the Temporary Skill Shortage visa in December 2024. Its main streams are:",
        ],
        list: [
          "Specialist Skills: for highly paid roles. From 1 July 2026, the salary must be at least the Specialist Skills Income Threshold of $146,717.",
          "Core Skills: for occupations on the Core Skills Occupation List, with a salary of at least the Core Skills Income Threshold, $79,499 from 1 July 2026.",
          "Labour Agreement: for employers with a negotiated labour agreement.",
        ],
      },
      {
        p: [
          "Thresholds are indexed each year. In every case, the salary must also be at least the market rate paid to Australian workers in the same role.",
        ],
      },
      {
        h: "Costs for the employer",
        p: [
          "Employers pay the nomination fee and the Skilling Australians Fund levy, which depends on business turnover and the length of the visa. These costs cannot be passed on to the worker. Asking or allowing a worker to pay them is a breach of sponsorship obligations.",
        ],
      },
      {
        h: "Your obligations as a sponsor",
        list: [
          "pay the nominated salary and give the same terms as Australian employees",
          "make sure the worker only does the nominated occupation",
          "keep records and notify the Department of Home Affairs of certain events, such as the worker leaving",
          "co-operate with monitoring and inspectors",
          "pay reasonable return travel costs if asked",
        ],
      },
      {
        p: [
          "Breaches can lead to fines, a bar on sponsoring, or cancellation of the sponsorship.",
        ],
      },
      {
        h: "A path to permanent residence",
        p: [
          "Many sponsored workers later move to permanent residence through the Employer Nomination Scheme (subclass 186). Planning for this from the start makes the transition smoother for both employer and employee.",
        ],
      },
    ],
  },
  {
    slug: "setting-up-a-business-in-australia",
    oldSlug: "",
    title: "Setting up a business in Australia from India or overseas",
    summary:
      "Company or branch, director requirements, registrations, foreign investment approval and the India-side steps to plan for.",
    category: "Market entry & FIRB",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "Australia is a natural next market for many Indian businesses. A common legal system, the English language and the Australia–India Economic Cooperation and Trade Agreement (ECTA) all help. Getting the structure right at the start saves cost and delay later.",
        ],
      },
      {
        h: "Company or branch?",
        list: [
          "Australian subsidiary: a separate Australian company (usually a proprietary limited company). It limits liability to the Australian business and is the most common choice.",
          "Branch: the overseas company registers with ASIC as a foreign company and trades directly. It is simpler to set up, but the parent company is directly liable.",
        ],
      },
      {
        h: "Key registrations",
        list: [
          "company registration with ASIC; a proprietary company needs at least one director who ordinarily lives in Australia",
          "Australian Business Number (ABN) and tax file number",
          "GST registration once turnover reaches the threshold",
          "business name, trade mark and any industry licences",
        ],
      },
      {
        h: "Do you need foreign investment approval?",
        p: [
          "Foreign investors may need approval through the Foreign Investment Review Board (FIRB) depending on the type of investment and its value. Monetary thresholds for 2026 include $347 million for most private investors, and $560 million for private Indian investors acquiring non-sensitive service businesses. Lower thresholds, including $0, apply to residential land, national security businesses and some other investments. Check the current thresholds before you sign.",
        ],
      },
      {
        h: "Staff and visas",
        p: [
          "If you are bringing managers or specialists from India, plan the visas early. The Skills in Demand visa and related nominations take time, and the business must first be approved as a sponsor.",
        ],
      },
      {
        h: "The India side",
        p: [
          "An Indian company investing in Australia must comply with India's overseas direct investment rules under FEMA. That is Indian law, handled by your Indian advisers. We coordinate with them so the Australian structure and the Indian approvals line up.",
        ],
      },
      {
        h: "Tax",
        p: [
          "Get tax advice in both countries before you choose a structure. The Australia–India double taxation agreement affects how profits, dividends and services are taxed.",
        ],
      },
    ],
  },
  {
    slug: "buying-property-in-victoria-from-overseas",
    oldSlug: "",
    title: "Buying property in Victoria as a foreign or overseas buyer",
    summary:
      "The ban on foreign purchases of established homes, FIRB approval, Victoria's foreign purchaser duty and land tax surcharges.",
    category: "Property",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "Whether you are a “foreign person” decides most of the rules. Australian citizens are not foreign persons, even if they live overseas. Permanent residents are generally not foreign persons if they live in Australia. Temporary visa holders and most overseas residents are.",
        ],
      },
      {
        h: "Established homes: currently banned",
        p: [
          "Since 1 April 2025, foreign persons, including temporary residents and foreign-owned companies, generally cannot buy established (existing) dwellings. The ban has been extended to 30 June 2029. Limited exceptions apply, mainly for investments that add to housing supply.",
        ],
      },
      {
        h: "New dwellings and vacant land",
        p: [
          "Foreign persons can usually buy new dwellings and vacant residential land for development, but need foreign investment approval before signing, or must make the contract conditional on approval. Application fees apply and can be significant. Vacant land must generally be developed within a set time.",
        ],
      },
      {
        h: "Victorian taxes for foreign buyers",
        list: [
          "Foreign purchaser additional duty: 8% of the price of residential property, on top of ordinary stamp duty",
          "Absentee owner surcharge: an extra 4% land tax each year for absentee owners, on top of ordinary land tax",
          "Vacant residential land tax: applies to homes left vacant for more than six months in a year",
        ],
      },
      {
        h: "When you sell",
        p: [
          "Buyers must withhold 15% of the price and pay it to the ATO unless the seller gives a clearance certificate showing they are an Australian resident for tax purposes. Overseas sellers should plan for this.",
        ],
      },
      {
        h: "Before you sign",
        p: [
          "Victorian contracts can become binding quickly, and cooling-off rights are limited, especially at auction. Have the contract and vendor's statement reviewed, confirm your foreign person status, and check finance and approvals first.",
        ],
      },
    ],
  },
  {
    slug: "wills-for-families-with-assets-in-two-countries",
    oldSlug: "",
    title: "Wills and estates for families with assets in Australia and India",
    summary:
      "Making a valid will in Victoria, why you may need a separate Indian will, and how estates are administered across two countries.",
    category: "Wills & estates",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "Many families in Australia own property, bank accounts or shares in India. Without planning, an estate can take years to administer across two legal systems. A little preparation now makes things much easier for your family.",
        ],
      },
      {
        h: "Making a valid will in Victoria",
        list: [
          "the will must be in writing and signed by you in the presence of two witnesses, who also sign",
          "a witness, or the partner of a witness, should not be a beneficiary",
          "in some circumstances, wills can be signed and witnessed by audio-visual link with a special witness such as a lawyer",
          "marriage generally revokes an earlier will, and divorce revokes gifts to a former spouse, so review your will when your relationship changes",
        ],
      },
      {
        h: "One will or two?",
        p: [
          "A single Australian will can cover worldwide assets. However, Indian property is dealt with under Indian law, and Indian authorities may require Indian probate or other formalities. Many families find a separate Indian will, covering only Indian assets, makes administration faster.",
          "If you have two wills, each must be drafted so that it does not revoke the other. We prepare the Australian will and work with Indian counsel, engaged by you, on the Indian will.",
        ],
      },
      {
        h: "Enduring powers of attorney",
        p: [
          "An enduring power of attorney lets someone you trust manage your financial affairs if you lose capacity. A Victorian enduring power of attorney may not be recognised in India for Indian assets, so a separate Indian power of attorney may also be needed.",
        ],
      },
      {
        h: "After a death",
        p: [
          "The executor usually applies to the Supreme Court of Victoria for a grant of probate. If there is no will, the estate is distributed under the intestacy rules. In Victoria, certain people can apply for further provision from an estate, generally within six months of the grant of probate.",
        ],
      },
      {
        h: "Practical steps",
        list: [
          "list your assets in each country and how each is owned",
          "review nominations for superannuation, which are not automatically covered by your will",
          "keep originals safe and tell your executor where they are",
          "review your will every few years or after a major life change",
        ],
      },
    ],
  },
  {
    slug: "resolving-business-disputes-in-victoria",
    oldSlug: "",
    title: "Resolving business disputes in Victoria",
    summary:
      "From letter of demand to court: the options, the costs, time limits, and what happens when the other party is in India.",
    category: "Disputes & litigation",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "Most business disputes are resolved without a trial. Acting early, keeping good records and understanding your options give you the best chance of a quick and cost-effective outcome.",
        ],
      },
      {
        h: "First steps",
        list: [
          "gather the contract, invoices, emails and other documents",
          "check any dispute resolution clause in the contract, which may require negotiation or mediation first",
          "send a clear letter of demand setting out the claim and a deadline",
        ],
      },
      {
        h: "Which court?",
        list: [
          "Magistrates' Court of Victoria: claims up to $100,000",
          "County Court of Victoria: larger claims, including in its Commercial Division",
          "Supreme Court of Victoria: the largest and most complex claims",
          "VCAT: some disputes, including many consumer and domestic building disputes",
        ],
      },
      {
        p: [
          "Before starting proceedings, parties are expected to take reasonable steps to resolve the dispute, and to act honestly and cooperatively throughout. Most civil cases go to mediation before trial.",
        ],
      },
      {
        h: "Time limits",
        p: [
          "In Victoria, a claim for breach of contract must generally be brought within six years of the breach. Other claims have different limits. Do not wait until the deadline is close.",
        ],
      },
      {
        h: "Costs",
        p: [
          "The successful party usually recovers part of its legal costs from the other side, but rarely all of them. We give you a written estimate and update it as the matter progresses.",
        ],
      },
      {
        h: "When the other party is in India",
        p: [
          "Australia is not a “reciprocating territory” under India's Code of Civil Procedure. An Australian court judgment usually cannot be executed directly in India; a fresh suit is generally needed in India, based on the Australian judgment. Arbitration awards may be easier to enforce. If you trade with Indian parties, consider the dispute resolution clause carefully when you sign the contract, and get advice from Indian counsel on enforcement.",
        ],
      },
    ],
  },
  {
    slug: "one-matter-two-countries",
    oldSlug: "",
    title: "One matter, two countries: how cross-border matters work",
    summary:
      "How we handle the Australian side of a matter with an Indian dimension, and what to expect when working with lawyers in both countries.",
    category: "Cross-border matters",
    author: "Prakash Srinivasan",
    published: "21 October 2026",
    updated: "21 October 2026",
    body: [
      {
        p: [
          "A family separation with property in Bengaluru. An Indian company opening in Melbourne. An estate with bank accounts in Chennai. Many matters touch both countries, and each part is governed by that country's law.",
        ],
      },
      {
        h: "Who advises on what",
        p: [
          "Praevo Lawyers advises on Australian law. Where a matter involves Indian law, such as a property transfer, succession, FEMA approvals or proceedings in an Indian court, independent Indian counsel advise on that part. You engage and pay each firm directly, and no referral fees are paid.",
        ],
      },
      {
        h: "How we coordinate",
        list: [
          "map which parts of the matter are Australian and which are Indian",
          "agree one timeline and one point of contact for you",
          "share information between the two firms only with your consent",
          "make sure documents work in both countries, for example wills, powers of attorney and contracts",
        ],
      },
      {
        h: "Documents for use in India",
        p: [
          "Documents signed in Australia for use in India often need to be notarised and apostilled. Both countries are parties to the Apostille Convention. Check the exact requirements with the receiving authority or your Indian lawyer before you sign.",
        ],
      },
      {
        h: "Time zones and meetings",
        p: [
          "Melbourne is 4.5 to 5.5 hours ahead of India, depending on daylight saving. We arrange video meetings at times that suit you and your Indian advisers.",
        ],
      },
    ],
  },
];

// Topics = practice areas that have at least one article, in practice-area order.

export const topicSlug = (a: Article) => areas.find((x) => x.title === a.category)?.slug ?? "general";
export const coverImage = (a: Article) => `/blog/${a.slug}.svg`;
export const coverImagePng = (a: Article) => `/blog/${a.slug}.png`;
export const topics = areas
  .filter((t) => articles.some((a) => a.category === t.title))
  .map((t) => ({ slug: t.slug, title: t.title }));
