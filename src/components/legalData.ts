export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
}

export const legalData: Record<string, LegalContent> = {
  "privacy": {
    title: "Privacy Policy",
    lastUpdated: "June 20, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "We only collect basic identification data explicitly provided by you during the membership application process, specifically your professional email address. We do not track browsing history or use third-party tracking cookies."
      },
      {
        heading: "2. How We Use Your Data",
        body: "Your submitted email is exclusively utilized to process your founding membership request, manage invitation queues, and send official development updates regarding The Archipelago Club chapters."
      },
      {
        heading: "3. Data Preservation & Security",
        body: "Membership records are housed in secure, isolated database environments. We never sell, lease, distribute, or expose your private contact information to external marketing entities or third parties."
      }
    ]
  },
  "terms": {
    title: "Terms of Service",
    lastUpdated: "June 20, 2026",
    sections: [
      {
        heading: "1. Invitation & Waitlist Mechanics",
        body: "Submitting an application to the waitlist does not guarantee admission or immediate membership allocation. Access is granted at the sole discretion of our regional membership committees."
      },
      {
        heading: "2. Early Access Allocation",
        body: "Promotional rate reductions (such as the 20% founding member discount) are non-transferable, subject to node seating capacity parameters, and tied strictly to your registered application profile."
      },
      {
        heading: "3. Acceptable Space Usage",
        body: "Once granted on-site access, network users are required to maintain strict professional etiquette, avoid disruptive activities within collective open spaces, and treat smart hardware infrastructure with care."
      }
    ]
  }
};