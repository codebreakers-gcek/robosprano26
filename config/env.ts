/**
 * Centralized Application Configuration (Frontend Static)
 */
export const ENV = {
  // Application Metadata
  APP_NAME: "HACKVERSE '26 // CODEBREAKERS GCEK",
  ORG_NAME: "CodeBreakers - GCE Kalahandi",
  COLLEGE_NAME: "Government College of Engineering Kalahandi, Bhawanipatna",
  OFFICIAL_CLUB_URL: "https://www.codebreakersgcek.tech",
  COLLEGE_URL: "https://www.gcekbpatna.ac.in",
  CONTACT_EMAIL: "kilobots@gcekbpatna.ac.in",
  SUPPORT_EMAIL: "kilobots@gcekbpatna.ac.in",

  // Google Forms Registration Link
  GOOGLE_FORM_URL:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://forms.gle/hackverse2026",
} as const;
