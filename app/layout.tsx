import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://envisionhealthcare.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "envisionhealthcare.wealthcareportal.com";
const SITE_BRAND = "Envision Healthcare";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Envision Healthcare - Login",
    template: "%s | Envision Healthcare",
  },
  keywords: [
  "Envision Healthcare",
  "Envision Healthcare login",
  "Envision Healthcare benefits",
  "Envision Healthcare benefits portal",
  "Envision Healthcare employee benefits",
  "Envision Healthcare employee portal",
  "Envision Healthcare participant portal",
  "Envision Healthcare secure login",
  "Envision Healthcare account access",
  "Envision Healthcare online account",
  "Envision Healthcare healthcare portal",
  "Envision Healthcare employee health benefits",
  "Envision Healthcare benefits management",
  "Envision Healthcare reimbursement account",
  "Envision Healthcare HSA login",
  "Envision Healthcare FSA login",
  "Envision Healthcare COBRA login",
  "Envision Healthcare participant login",
  "Envision Healthcare employee login",
  "Envision benefits",
  "Envision Portal",
  "Envision benefits portal",
  "Envision employee portal",
  "Envision participant portal",
  "Envision secure login",
  "Envision account access",
  "Envision healthcare login",
  "Envision employee benefits",
  "Envision online benefits portal",
  "Envision WealthCare Portal",
  "WealthCare Portal",
  "wealthcare portal",
  "WealthCare benefits portal",
  "WealthCare participant portal",
  "WealthCare secure login",
  "WealthCare account access",
  "WealthCare healthcare portal",
  "envisionhealthcare.wealthcareportal.com",
  "benefits login",
  "employee benefits login",
  "employee benefits portal",
  "healthcare login",
  "healthcare portal",
  "secure healthcare login",
  "secure benefits login",
  "participant portal login",
  "participant portal access",
  "employee portal sign in",
  "account access",
  "account access login",
  "online benefits account login",
  "secure portal access",
  "health benefits",
  "employee health",
  "employee health benefits",
  "health benefits login",
  "healthcare account access",
  "healthcare reimbursement account",
  "medical reimbursement portal",
  "reimbursement account",
  "benefits management",
  "employee benefits administration",
  "benefits administration services",
  "online employee benefits platform",
  "healthcare benefits management",
  "secure employee benefits portal",
  "employee healthcare management",
  "participant benefits portal",
  "online healthcare account management",
  "how to access employee benefits portal",
  "how to manage healthcare benefits online",
  "how to access healthcare account",
  "how to submit reimbursement claims",
  "how to access participant portal",
  "how to reset healthcare portal password",
  "forgot benefits portal password",
  "benefits portal login issues",
  "secure employee portal access",
  "participant portal authentication help",
  "benefits portal password reset",
  "handshake authentication",
  "handshake authentication login",
  "secure portal authentication",
  "two-factor authentication benefits portal",
  "employee portal verification",
  "secure reimbursement account access",
  "participant portal security",
  "account recovery portal login"
],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health benefits, and sign in securely through Envision Healthcare.`,

  authors: [{ name: "Envision Healthcare" }],
  creator: "Envision Healthcare",
  publisher: "Envision Healthcare",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Envision Healthcare - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health benefits, and sign in securely through Envision Healthcare.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "YourFlex Accounts - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "YourFlex Accounts sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your YourFlex Accounts profile.",
  publisher: {
    "@type": "Organization",
    name: "YourFlex Accounts",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
