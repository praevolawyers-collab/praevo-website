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
];
