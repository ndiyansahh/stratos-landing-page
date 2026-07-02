export type PrivacySection = {
  number: string;
  title: string;
  clauses: string[];
};

export const privacySections: PrivacySection[] = [
  {
    number: "1",
    title: "Introduction",
    clauses: [
      "PT Semesta Harsa Karya (\"Stratoshub\", \"we\", \"us\") respects the privacy of visitors to our website and clients engaging our software engineering, AI integration, cloud, and advisory services.",
      "This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.",
      "By using our website or engaging our services, you consent to the practices described in this Policy.",
    ],
  },
  {
    number: "2",
    title: "Information We Collect",
    clauses: [
      "Contact information you provide directly, such as name, company, email address, and WhatsApp number, when you reach out via our website, email, or WhatsApp.",
      "Project and engagement information shared during discovery calls, NDA-covered discussions, or through a signed MSA/SOW, including business requirements and system documentation necessary to deliver our services.",
      "Basic website usage data (such as pages visited and browser type) collected through standard analytics, used only to understand how our site is used and to improve it.",
      "We do not knowingly collect information from individuals under the age of majority in their jurisdiction.",
    ],
  },
  {
    number: "3",
    title: "How We Use Your Information",
    clauses: [
      "To respond to inquiries and schedule consultations regarding our services.",
      "To prepare and administer NDAs, MSAs, SOWs, and related engagement documentation.",
      "To deliver, maintain, and support the software, AI systems, or infrastructure built under an active engagement.",
      "To send invoices, payment reminders, and project status updates related to an active engagement.",
      "To improve our website, services, and internal processes.",
    ],
  },
  {
    number: "4",
    title: "Confidential & Client Project Data",
    clauses: [
      "Any confidential business information, source code, credentials, or client data shared with us during an engagement is handled under the confidentiality terms of the applicable NDA and MSA, in addition to this Policy.",
      "Access to client project data is restricted to engineers and personnel directly assigned to the relevant engagement.",
      "We do not use client project data for purposes beyond the scope of the applicable SOW, except with the Client's written consent.",
    ],
  },
  {
    number: "5",
    title: "Sharing of Information",
    clauses: [
      "We do not sell or rent personal information to third parties.",
      "Information may be shared with trusted sub-processors (such as cloud hosting or payment gateway providers) strictly as required to deliver the engaged services, and only under confidentiality obligations equivalent to this Policy.",
      "We may disclose information where required by Indonesian law, regulation, or a valid legal request.",
      "In the event of a corporate restructuring involving Stratoshub, information may be transferred as part of that transaction, subject to equivalent confidentiality protections.",
    ],
  },
  {
    number: "6",
    title: "Data Retention",
    clauses: [
      "Personal and project information is retained only for as long as necessary to fulfil the purposes described in this Policy, or as required by the applicable MSA, tax, or legal obligations.",
      "Upon completion or termination of an engagement, client project data is retained, returned, or securely deleted in accordance with the terms agreed in the SOW.",
    ],
  },
  {
    number: "7",
    title: "Data Security",
    clauses: [
      "We apply reasonable technical and organisational measures — including access controls, encryption in transit, and confidentiality agreements — to protect information against unauthorised access, loss, or misuse.",
      "While we take security seriously, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    number: "8",
    title: "Your Rights",
    clauses: [
      "You may request access to, correction of, or deletion of your personal information held by us, subject to our legitimate business and legal retention needs.",
      "You may opt out of non-essential communications (such as newsletters or marketing updates) at any time by contacting us directly.",
      "Requests can be made via email or WhatsApp using the contact details below, and will be addressed within a reasonable timeframe.",
    ],
  },
  {
    number: "9",
    title: "Cookies & Website Analytics",
    clauses: [
      "Our website may use basic cookies or analytics tools to understand visitor behaviour and improve site performance.",
      "These tools do not collect sensitive personal information and are used solely for aggregate, non-identifying analysis.",
      "You may disable cookies through your browser settings; doing so may affect certain website functionality.",
    ],
  },
  {
    number: "10",
    title: "Changes to This Policy",
    clauses: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "Material changes will be reflected by an updated effective date at the top of this page.",
      "Continued use of our website or services after changes are posted constitutes acceptance of the updated Policy.",
    ],
  },
];
