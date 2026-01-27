import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { COMPANY_NAME, META_DESCRIPTION, SITE_URL } from "./config/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const title = `${COMPANY_NAME} - AI-Powered Lead Qualification for Contractors`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: META_DESCRIPTION,
  keywords: [
    "lead qualification",
    "contractor leads",
    "AI lead qualification",
    "contractor software",
    "lead scoring",
    "home improvement leads",
    "automated lead capture",
  ],
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title,
    description: META_DESCRIPTION,
    // Add openGraph.images: ['/og.png'] when you have an OG image
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add after verifying at search.google.com/search-console
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#0a0909",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      contactPoint: {
        "@type": "ContactPoint",
        email: "emails@flowqualify.app",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      description: META_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
