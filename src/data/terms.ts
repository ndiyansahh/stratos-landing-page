export type TermsSection = {
  number: string;
  title: string;
  clauses: string[];
};

export const termsSections: TermsSection[] = [
  {
    number: "1",
    title: "Scope of Agreement",
    clauses: [
      "These Terms & Conditions govern all engagements between PT Semesta Harsa Karya (\"Stratoshub\", \"we\", \"us\") and any client or partner (\"Client\", \"you\") who engages our software engineering, AI integration, cloud, or advisory services.",
      "Access to or use of our services, website, or any deliverable constitutes acceptance of these Terms.",
      "Where a signed Master Service Agreement (MSA) or Statement of Work (SOW) exists, the terms of that agreement take precedence over these general Terms in the event of a conflict.",
    ],
  },
  {
    number: "2",
    title: "Engagement Process",
    clauses: [
      "Every engagement follows a structured document sequence: Non-Disclosure Agreement (NDA), followed by a Master Service Agreement (MSA), followed by a Statement of Work (SOW).",
      "No work, deliverable, or access to proprietary materials is provided prior to a signed NDA where confidential information is involved.",
      "No development work commences until the applicable SOW is signed by both parties and the agreed Down Payment has been settled.",
      "The SOW is the authoritative document defining project scope, deliverables, timeline, milestones, and pricing for a given engagement.",
    ],
  },
  {
    number: "3",
    title: "Engagement Models",
    clauses: [
      "Freelance Engagement applies to projects valued below IDR 100,000,000, initiated via a simplified one-page agreement.",
      "PT as Vendor is our standard and recommended model for projects valued at IDR 100,000,000 or above, governed by the full NDA + MSA + SOW structure with official invoicing.",
      "Joint Entity is a long-term strategic model in which both parties may co-found a new legal entity with defined equity and governance, subject to a separate shareholders' agreement.",
      "The applicable model for a given project is confirmed in writing prior to commencement of work.",
    ],
  },
  {
    number: "4",
    title: "Payment Terms",
    clauses: [
      "Standard engagements are billed on a milestone basis: 50% upon project kickoff (SOW signing), 30% upon mid-project delivery, and 20% upon final delivery and handover.",
      "All invoices must be settled within five (5) business days of issuance unless otherwise agreed in writing.",
      "Quotations are all-inclusive of manpower and infrastructure costs unless the project scope is formally amended.",
      "Late payment beyond the agreed window may result in suspension of work until outstanding invoices are settled.",
    ],
  },
  {
    number: "5",
    title: "Intellectual Property",
    clauses: [
      "Intellectual property ownership is defined per project in the SOW under one of three models: Full Transfer, Licensed Use, or Shared Ownership.",
      "Unless otherwise stated in the SOW, the Licensed Use model applies by default: the Client receives a perpetual, exclusive license to the delivered work, while Stratoshub retains the right to reuse generic, non-proprietary components in other engagements.",
      "Full Transfer of all source code, assets, and documentation occurs only upon full and final payment, where explicitly agreed in the SOW.",
    ],
  },
  {
    number: "6",
    title: "Confidentiality",
    clauses: [
      "Both parties agree to keep confidential all non-public information disclosed during the engagement, whether marked confidential or reasonably understood to be so.",
      "Confidentiality obligations survive the termination or completion of the engagement for a period defined in the applicable NDA or MSA.",
      "Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
    ],
  },
  {
    number: "7",
    title: "Warranties & Limitation of Liability",
    clauses: [
      "Stratoshub warrants that services will be performed with reasonable skill and care consistent with industry standards.",
      "Except as expressly stated in a signed SOW, services are provided on an \"as-is\" basis without further warranties of any kind, whether express or implied.",
      "To the maximum extent permitted by law, Stratoshub's aggregate liability arising from any engagement is limited to the total fees paid by the Client for the specific SOW giving rise to the claim.",
      "Stratoshub is not liable for indirect, incidental, or consequential damages, including loss of profit or business opportunity.",
    ],
  },
  {
    number: "8",
    title: "Termination",
    clauses: [
      "Either party may terminate an active SOW for material breach not remedied within thirty (30) days of written notice.",
      "Upon termination, the Client remains liable for fees corresponding to work completed up to the effective date of termination.",
      "Termination of a specific SOW does not automatically terminate the underlying MSA or NDA, which remain in force for any other active or future engagements.",
    ],
  },
  {
    number: "9",
    title: "Governing Law & Dispute Resolution",
    clauses: [
      "These Terms and any engagement under them are governed by the laws of the Republic of Indonesia.",
      "Parties agree to first attempt resolution of any dispute through good-faith negotiation before pursuing formal proceedings.",
      "Unresolved disputes shall be settled in accordance with the dispute resolution mechanism specified in the applicable MSA.",
    ],
  },
  {
    number: "10",
    title: "Amendments",
    clauses: [
      "Stratoshub may update these Terms & Conditions from time to time to reflect changes in our services or legal requirements.",
      "Material changes affecting active engagements will be communicated to the Client in writing and, where applicable, reflected in an updated SOW.",
      "Continued engagement of our services following notice of changes constitutes acceptance of the updated Terms.",
    ],
  },
];
