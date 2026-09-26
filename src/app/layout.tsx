import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  SCHEMA_ORGANIZATION,
  SCHEMA_WEBSITE,
  SCHEMA_SERVICES,
  SCHEMA_FAQ,
} from "@/data/seoSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#11100E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NEXORA — Websites That Make Your Business Easier to Trust & Contact",
  description:
    "Nexora is a boutique digital studio building custom business websites, high-conversion landing pages, AI assistants, and WhatsApp lead automation for growing businesses.",
  keywords: [
    "Digital Studio",
    "Business Websites",
    "Website Development",
    "Landing Pages",
    "Website Redesign",
    "AI Chatbots",
    "WhatsApp Website Integration",
    "Lead Automation",
    "Next.js Development",
  ],
  authors: [{ name: "Nexora Studio" }],
  creator: "Nexora",
  publisher: "Nexora",
  metadataBase: new URL("https://nexora-ai-automations.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora-ai-automations.vercel.app",
    siteName: "NEXORA Digital Studio",
    title: "NEXORA — Websites That Make Your Business Easier to Trust & Contact",
    description:
      "Modern websites and practical automation for businesses that want more qualified inquiries and less busywork.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXORA — Boutique Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA — Websites That Make Your Business Easier to Trust & Contact",
    description:
      "Modern websites and practical automation for businesses that want more qualified inquiries and less busywork.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      SCHEMA_ORGANIZATION,
      SCHEMA_WEBSITE,
      ...SCHEMA_SERVICES,
      SCHEMA_FAQ,
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-studio-primary antialiased selection:bg-copper-muted selection:text-studio-primary">
        {children}
      </body>
    </html>
  );
}
