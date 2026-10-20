// Common questions for each practice-area page. Questions are phrased the way people search on Google.
// Keep answers general, accurate for Victoria/Australia, and free of guarantees, "best" or "specialist" claims.
// Figures that change (fees, thresholds) should be checked at least once a year.

export type Faq = { q: string; a: string };

export const faqs: Record<string, Faq[]> = {
  "visas-and-migration": [
    {
      q: "Do I need an immigration lawyer or a registered migration agent?",
      a: "Either can help you with an Australian visa. Australian lawyers who hold a current practising certificate can give immigration assistance without being registered as migration agents, and they can also advise on related legal issues such as family law, criminal charges or employment that may affect your visa.",
    },
    {
      q: "My visa was refused. What can I do?",
      a: "You may be able to apply to the Administrative Review Tribunal for a review, make a new application, or seek ministerial intervention in limited cases. Review deadlines are strict and run from the date you are notified, so get advice as soon as you receive a refusal.",
    },
    {
      q: "Can I apply for a partner visa while I am in Australia on a visitor visa?",
      a: "It depends on the conditions on your current visa. A “no further stay” condition prevents most applications made from within Australia, and the Government has proposed further limits on this route. Check your visa conditions and get advice before lodging.",
    },
    {
      q: "How long does a partner visa take in Australia?",
      a: "Processing times vary widely and change often, from many months to more than a year. A complete application with strong evidence of your relationship avoids delays caused by requests for further information.",
    },
    {
      q: "How much does a partner visa cost?",
      a: "The Department of Home Affairs charges a visa application charge, which is indexed each year and is one of the highest for any visa. Health checks, police certificates and translations are extra. We give you a written estimate of our professional fees before we start.",
    },
    {
      q: "What is a bridging visa?",
      a: "A bridging visa lets you stay in Australia lawfully while your substantive visa application is processed or reviewed. Its conditions, including work and travel rights, depend on your circumstances. Travelling without the right bridging visa can end your application.",
    },
    {
      q: "Am I eligible for Australian citizenship?",
      a: "Most applicants need to have lived in Australia lawfully for four years, including one year as a permanent resident, with limited time outside Australia, and pass the citizenship test. Other pathways exist for children and people born to Australian parents.",
    },
    {
      q: "Can you help if I am outside Australia, including in India?",
      a: "Yes. We hold consultations by video call, documents are signed electronically and applications are lodged online. We speak English, Hindi, Tamil, Kannada and Marathi.",
    },
  ],
  "employer-sponsorship": [
    {
      q: "How do I sponsor an overseas worker in Australia?",
      a: "There are three steps: your business applies to become an approved sponsor, you nominate the position, and the worker applies for the visa, usually the Skills in Demand visa (subclass 482).",
    },
    {
      q: "What salary must I pay a sponsored worker?",
      a: "The salary must be at least the market rate paid to Australian workers in the same role, and at least the relevant income threshold. From 1 July 2026, the Core Skills Income Threshold is $79,499 and the Specialist Skills Income Threshold is $146,717. These are indexed each year.",
    },
    {
      q: "Do I have to advertise the job in Australia first?",
      a: "Generally yes. Labour market testing requires employers to advertise the position in Australia before nominating an overseas worker, unless an exemption applies, for example under some international trade agreements.",
    },
    {
      q: "How long does business sponsorship last?",
      a: "Approval as a standard business sponsor usually lasts five years. During that time you can nominate positions, provided you continue to meet your sponsorship obligations.",
    },
    {
      q: "Can a sponsored worker change employers?",
      a: "Yes. The new employer must be an approved sponsor and lodge a new nomination. If the worker's employment ends, they generally have up to 180 days to find a new sponsor, apply for another visa or leave Australia.",
    },
    {
      q: "Who pays the visa costs, the employer or the employee?",
      a: "The employer must pay the nomination fee and the Skilling Australians Fund levy, and cannot pass these on to the worker. The worker usually pays their own visa application charge, although employers may choose to cover it.",
    },
    {
      q: "Can I act for both the employer and the employee?",
      a: "Often yes, with both parties' informed consent and after a conflict check. We explain how this works before we start.",
    },
    {
      q: "Can a sponsored worker get permanent residence?",
      a: "Many do, through the Employer Nomination Scheme (subclass 186) after working for an approved sponsor for the required period. Planning for permanent residence from the start makes the transition smoother.",
    },
  ],
  "market-entry-and-firb": [
    {
      q: "Can a foreign company own 100% of an Australian company?",
      a: "Yes. A foreign company or individual can own all the shares in an Australian company. A proprietary company must have at least one director who ordinarily lives in Australia.",
    },
    {
      q: "Should I set up a subsidiary or register a branch in Australia?",
      a: "A subsidiary is a separate Australian company that limits liability to the Australian business. A branch is simpler but makes the overseas parent directly liable. Tax and practical needs also matter, so get advice in both countries.",
    },
    {
      q: "Do I need FIRB approval to invest in Australia?",
      a: "It depends on who you are, what you are buying and its value. Most residential land purchases by foreign persons need approval, and lower thresholds apply to sensitive and national security businesses. For 2026, the general threshold for private investors is $347 million, and $560 million for private Indian investors in non-sensitive service businesses.",
    },
    {
      q: "How long does FIRB approval take?",
      a: "The statutory decision period is 30 days, but it is often extended, especially for complex or sensitive investments. Build the approval into your timetable and make contracts conditional on it.",
    },
    {
      q: "What registrations does a new business need in Australia?",
      a: "Usually company registration with ASIC, an Australian Business Number, a tax file number and GST registration once turnover reaches $75,000. Some industries also need licences.",
    },
    {
      q: "Can I get a visa to manage my company's Australian business?",
      a: "Your Australian company can become an approved sponsor and nominate key staff, including managers, for the Skills in Demand visa. The Business Innovation and Investment visa program closed to new applications in 2024.",
    },
    {
      q: "Who handles ODI and FEMA approvals in India?",
      a: "Independent Indian counsel, engaged by you directly. We coordinate with them so the Australian structure and the Indian approvals line up.",
    },
    {
      q: "How does the Australia–India trade agreement help Indian businesses?",
      a: "The Australia–India Economic Cooperation and Trade Agreement reduces tariffs and gives private Indian investors a higher FIRB threshold for non-sensitive service businesses. The two countries are negotiating a broader agreement.",
    },
  ],
  "commercial-law": [
    {
      q: "Do I need a shareholders agreement?",
      a: "If your company has more than one owner, yes. A shareholders agreement sets out decision-making, funding, dividends, what happens if a shareholder leaves or dies, and how disputes are resolved. It prevents many costly disputes.",
    },
    {
      q: "Is a verbal agreement legally binding in Australia?",
      a: "Many verbal agreements are binding, but they are harder to prove. Some contracts, such as contracts for the sale of land, must be in writing.",
    },
    {
      q: "What should I check before buying a business?",
      a: "Review the financial records, contracts with customers and suppliers, the lease, employee entitlements, licences, intellectual property and any disputes. Make the contract conditional on finance, due diligence and lease assignment where possible.",
    },
    {
      q: "Are my business's standard terms and conditions legally compliant?",
      a: "Unfair terms in standard form contracts with consumers and small businesses can be declared void, and since November 2023 using them can attract significant penalties. Review your terms regularly.",
    },
    {
      q: "What is a retail lease disclosure statement in Victoria?",
      a: "Under the Retail Leases Act 2003 (Vic), a landlord must give a tenant a disclosure statement at least seven days before the lease is entered into. It sets out key information such as rent, outgoings and the term.",
    },
    {
      q: "How do I protect my business name and brand?",
      a: "Registering a business name does not give you exclusive rights. A registered trade mark gives stronger protection for your brand in Australia. Check availability before you invest in a name.",
    },
    {
      q: "Do you offer fixed fees for contracts?",
      a: "Often, yes. We quote in writing before we start.",
    },
  ],
  "disputes-and-litigation": [
    {
      q: "How do I recover a debt in Victoria?",
      a: "Usually start with a clear letter of demand. If that does not work, you can start proceedings in the Magistrates' Court for claims up to $100,000, or a higher court for larger claims. For company debtors, a statutory demand may be an option.",
    },
    {
      q: "What is a statutory demand?",
      a: "A statutory demand is a formal demand to a company for a debt that is due and not disputed. If the company does not pay or apply to set it aside within 21 days, it is presumed insolvent and can be wound up. It should not be used where the debt is genuinely disputed.",
    },
    {
      q: "How much does it cost to go to court?",
      a: "Costs depend on the size and complexity of the dispute and whether it settles early. The successful party usually recovers part, but rarely all, of its legal costs. We give you a written estimate and update it as the matter progresses.",
    },
    {
      q: "How long does a court case take in Victoria?",
      a: "Simple claims can resolve in a few months. Defended cases often take a year or more. Most settle at mediation before trial.",
    },
    {
      q: "Do I have to try mediation before going to court?",
      a: "Parties must take reasonable steps to resolve a dispute before and during proceedings, and courts usually order mediation before trial. Many contracts also require negotiation or mediation first.",
    },
    {
      q: "I have been served with court documents. What should I do?",
      a: "Act immediately. There is a short deadline to file a defence or response, and judgment can be entered against you if you miss it.",
    },
    {
      q: "How long do I have to sue for breach of contract?",
      a: "In Victoria, generally six years from the breach. Other claims have different time limits, some much shorter.",
    },
    {
      q: "Can an Australian judgment be enforced in India?",
      a: "Not directly. Australia is not a reciprocating territory under India's Code of Civil Procedure, so a fresh suit in India based on the Australian judgment is usually needed. Arbitration awards may be easier to enforce. Indian counsel advise on the Indian steps.",
    },
  ],
  "family-law": [
    {
      q: "How long do I have to apply for a property settlement?",
      a: "Married couples have 12 months after a divorce order takes effect. De facto couples have two years after separation. After that, you need the court's permission.",
    },
    {
      q: "How is property divided after separation in Australia?",
      a: "There is no automatic 50/50 split. The court identifies the property and debts, considers each party's financial and non-financial contributions, considers current and future needs, and the effect of any family violence, and decides what is just and equitable.",
    },
    {
      q: "How long do we need to be separated before divorce?",
      a: "You must be separated for at least 12 months. You can be separated while living under the same roof, but you will need extra evidence. If you have been married less than two years, you generally need a counselling certificate.",
    },
    {
      q: "Can I get a divorce if my spouse does not agree?",
      a: "Yes. A sole application can be made without your spouse's consent, as long as the marriage has broken down and you meet the separation and other requirements.",
    },
    {
      q: "We married in India. Can we divorce in Australia?",
      a: "Usually yes, if either of you is an Australian citizen, regards Australia as your permanent home, or has lived in Australia for at least 12 months before applying. We confirm this in your first consultation.",
    },
    {
      q: "Do we have to go to mediation for parenting arrangements?",
      a: "Generally yes. Before applying to court for parenting orders, you must attempt family dispute resolution, unless an exception applies, for example family violence or urgency.",
    },
    {
      q: "Can Australian courts deal with property we own in India?",
      a: "Australian family courts can take overseas property into account and make orders binding on the parties. Transferring or selling the property in India may need steps under Indian law, which Indian counsel handle.",
    },
    {
      q: "Do we need lawyers if we have already agreed?",
      a: "Agreements are best recorded in consent orders or a binding financial agreement so they are enforceable. Each party usually benefits from independent advice, and a binding financial agreement requires it.",
    },
  ],
  "wills-and-estates": [
    {
      q: "What happens if I die without a will in Victoria?",
      a: "Your estate is distributed under the intestacy rules in the Administration and Probate Act 1958 (Vic), which may not match your wishes, especially in blended families. The court appoints an administrator instead of an executor you choose.",
    },
    {
      q: "Can I write my own will?",
      a: "You can, but home-made wills often fail to meet formal requirements, deal with all assets, or anticipate family claims. Errors can cost your family far more than a professionally prepared will.",
    },
    {
      q: "How long does probate take in Victoria?",
      a: "Applicants must advertise their intention to apply at least 14 days before applying. A straightforward grant often takes a few months. Complex or contested estates take longer.",
    },
    {
      q: "Can a will be challenged in Victoria?",
      a: "Yes. Certain people, such as a spouse, partner or child, can apply for further provision from an estate. Applications generally must be made within six months of the grant of probate.",
    },
    {
      q: "Does my will cover my superannuation?",
      a: "Not automatically. Superannuation is paid according to the fund's rules and any binding death benefit nomination. Review your nominations when you make your will.",
    },
    {
      q: "What is an enduring power of attorney?",
      a: "It lets someone you trust make financial and personal decisions for you if you lose capacity. It must be made while you have capacity, and witnessing requirements apply.",
    },
    {
      q: "Do I need a separate will for property in India?",
      a: "Often it is advisable. We draft the Australian will and coordinate with Indian counsel so the two documents work together and do not revoke each other.",
    },
    {
      q: "When should I update my will?",
      a: "After marriage, separation or divorce, the birth of a child, a major change in assets, or a move overseas. Marriage generally revokes an earlier will in Victoria.",
    },
  ],
  property: [
    {
      q: "Is there a cooling-off period when buying property in Victoria?",
      a: "For most private sales of residential property, buyers have three business days to cool off, with a small penalty. There is no cooling-off period for auction purchases or several other types of sale.",
    },
    {
      q: "What is a Section 32 vendor statement?",
      a: "It is the disclosure document the seller must give a buyer before signing, setting out title, planning, outgoings, building permits and other matters. Have it reviewed before you sign.",
    },
    {
      q: "Can foreigners or temporary visa holders buy property in Australia?",
      a: "Foreign persons, including most temporary visa holders, are currently banned from buying established dwellings until 30 June 2029, with limited exceptions. They can usually buy new dwellings or vacant land with foreign investment approval.",
    },
    {
      q: "How much extra stamp duty do foreign buyers pay in Victoria?",
      a: "Foreign purchaser additional duty is 8% of the price of residential property, on top of ordinary stamp duty. An absentee owner surcharge of 4% also applies to land tax each year.",
    },
    {
      q: "Can I get a first home buyer stamp duty exemption in Victoria?",
      a: "Eligible first home buyers may receive a duty exemption or concession on homes up to $750,000. Conditions apply, including living in the home. Check eligibility with the State Revenue Office.",
    },
    {
      q: "Do I need a lawyer or a conveyancer to buy property?",
      a: "Either can handle a standard conveyance. A lawyer can also advise on contract terms, co-ownership, foreign investment, tax and disputes.",
    },
    {
      q: "What happens if I sell property and live overseas?",
      a: "The buyer must withhold 15% of the price for the ATO unless you provide a clearance certificate showing you are an Australian resident for tax purposes. Plan for this before you list the property.",
    },
    {
      q: "Can Australian citizens living overseas buy property in Australia?",
      a: "Yes. Australian citizens are not foreign persons for foreign investment purposes, even if they live overseas.",
    },
  ],
  "criminal-law": [
    {
      q: "Do I have to answer police questions in Victoria?",
      a: "In most cases, no. You have the right to remain silent, but you may have to give your name and address in certain circumstances. Ask to speak to a lawyer before answering questions.",
    },
    {
      q: "Can I get bail?",
      a: "It depends on the charge, your history and the circumstances. For some serious offences, the accused must show compelling reasons or exceptional circumstances. A well-prepared bail application makes a real difference.",
    },
    {
      q: "Will I get a criminal record?",
      a: "Not always. For some offences, courts can impose a sentence without recording a conviction, or a matter may be dealt with through diversion. Outcomes depend on the charge, your history and the circumstances.",
    },
    {
      q: "What is the diversion program?",
      a: "Diversion is available in the Magistrates' Court for some less serious offences. If you accept responsibility and complete conditions, the charge is dismissed without a criminal record. The prosecution must agree.",
    },
    {
      q: "What happens at my first court date?",
      a: "Most cases start in the Magistrates' Court with a mention. You may plead guilty, ask for an adjournment, or indicate that you will contest the charge. Speak to a lawyer before your first date.",
    },
    {
      q: "Can a criminal charge affect my visa?",
      a: "Yes. Convictions can affect current and future visas through the character test, and some sentences lead to mandatory visa cancellation. Tell your lawyer your visa status so both are considered together.",
    },
    {
      q: "Should I plead guilty?",
      a: "Only after advice. A lawyer reviews the evidence, explains possible defences and the likely sentence, and may negotiate with the prosecution to have charges withdrawn or reduced.",
    },
  ],
  "cross-border-matters": [
    {
      q: "Do you advise on Indian law?",
      a: "No. We advise on Australian law only. Indian-law advice comes from independent Indian counsel, who act for you under their own engagement and fees.",
    },
    {
      q: "Do you receive a referral fee from Indian law firms?",
      a: "No. Each firm is engaged and paid by you separately, and no fees are shared.",
    },
    {
      q: "Is an Indian divorce recognised in Australia?",
      a: "Generally yes, if the divorce is valid under Indian law and certain connection requirements are met. Get advice if you plan to remarry or have property in Australia.",
    },
    {
      q: "How do I sign documents in Australia for use in India?",
      a: "Many documents must be signed before a notary public and then apostilled by the Department of Foreign Affairs and Trade. Check the exact requirements with the Indian authority or your Indian lawyer first.",
    },
    {
      q: "Will my Australian will cover my property in India?",
      a: "A single will can cover worldwide assets, but Indian property is dealt with under Indian law. A separate Indian will often makes administration faster.",
    },
    {
      q: "Can you represent me in an Indian court?",
      a: "No. Independent Indian advocates represent clients in Indian courts. We handle the Australian side and coordinate with them.",
    },
    {
      q: "Do I pay tax in both Australia and India?",
      a: "Possibly. The Australia–India double taxation agreement helps avoid double tax on the same income. Get tax advice in both countries before buying, selling or moving money.",
    },
    {
      q: "Can I speak with a lawyer in Hindi, Tamil, Kannada or Marathi?",
      a: "Yes. Our team speaks English, Hindi, Tamil, Kannada and Marathi.",
    },
  ],
};

// Search titles and descriptions for each practice-area page (the browser tab and Google result).
export const areaSeo: Record<string, { title: string; description: string; h1: string }> = {
  "visas-and-migration": {
    h1: "Immigration and visa lawyers in Melbourne",
    title: "Immigration & Visa Lawyers Melbourne",
    description: "Melbourne immigration lawyers for partner, skilled, parent and student visas, citizenship and visa refusals. Video consultations from Australia, India and overseas.",
  },
  "employer-sponsorship": {
    h1: "Employer sponsorship and skilled visa lawyers",
    title: "Employer Sponsorship & 482 Visa Lawyers",
    description: "Help for Australian employers sponsoring overseas workers: sponsor approval, nominations, Skills in Demand 482 and 186 visas, and sponsor compliance.",
  },
  "market-entry-and-firb": {
    h1: "Setting up your business in Australia, including FIRB approval",
    title: "FIRB & Business Set-up Lawyers Melbourne",
    description: "Setting up a company in Australia from India or overseas: subsidiaries, FIRB approval, contracts and staff visas, coordinated with your Indian advisers.",
  },
  "commercial-law": {
    h1: "Commercial and contract lawyers in Melbourne",
    title: "Commercial & Contract Lawyers Melbourne",
    description: "Melbourne commercial lawyers for contracts, shareholders agreements, buying or selling a business, leases and terms and conditions. Fixed fees available.",
  },
  "disputes-and-litigation": {
    h1: "Business disputes and debt recovery lawyers in Melbourne",
    title: "Dispute & Debt Recovery Lawyers Melbourne",
    description: "Contract disputes, debt recovery, statutory demands and shareholder disputes in Victorian courts. Practical advice on resolving disputes early.",
  },
  "family-law": {
    h1: "Family lawyers in Melbourne for separation, property and parenting",
    title: "Family & Divorce Lawyers Melbourne",
    description: "Melbourne family lawyers for divorce, property settlements, parenting arrangements and binding financial agreements, including assets in India and overseas.",
  },
  "wills-and-estates": {
    h1: "Wills, estates and probate lawyers in Melbourne",
    title: "Wills, Estates & Probate Lawyers Melbourne",
    description: "Wills, enduring powers of attorney and probate in Victoria, including for families with property in India and overseas.",
  },
  property: {
    h1: "Property lawyers in Melbourne for buyers in Australia and overseas",
    title: "Property Lawyers Melbourne & Foreign Buyers",
    description: "Contract and Section 32 review, FIRB approval and foreign purchaser duty advice for property buyers in Victoria, including buyers living overseas.",
  },
  "criminal-law": {
    h1: "Criminal lawyers in Melbourne",
    title: "Criminal Lawyers Melbourne",
    description: "Criminal defence in Melbourne: bail applications, Magistrates' Court matters, diversion, pleas and contested hearings, and visa consequences of charges.",
  },
  "cross-border-matters": {
    h1: "Australia–India cross-border legal matters",
    title: "Australia–India Cross-Border Lawyers",
    description: "Australian legal help for matters with an Indian dimension: family, property, estates, business and disputes, coordinated with independent Indian counsel.",
  },
};
