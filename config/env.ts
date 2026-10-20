/**
 * Centralized Application Configuration (Frontend Static)
 */
export const ENV = {
  // Application Metadata
  APP_NAME: "ROBOSPRANO '26 // KILOBOTS GCEK",
  ORG_NAME: "Kilobots Robotics Society - GCE Kalahandi",
  COLLEGE_NAME: "Government College of Engineering Kalahandi, Bhawanipatna",
  OFFICIAL_CLUB_URL: "https://www.gcekbpatna.ac.in",
  COLLEGE_URL: "https://www.gcekbpatna.ac.in",
  CONTACT_EMAIL: "kilobots@gcekbpatna.ac.in",
  SUPPORT_EMAIL: "kilobots@gcekbpatna.ac.in",

  // Google Forms Registration Link
  GOOGLE_FORM_URL:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://forms.gle/robosprano2026",
} as const;
