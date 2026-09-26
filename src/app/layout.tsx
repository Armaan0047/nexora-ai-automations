import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NEXORA | Modern Websites & AI Solutions",
  description:
    "Nexora builds modern business websites, landing pages, website redesigns, AI chatbots, and business automation. Requirement-based solutions with no rigid packages.",
  keywords: [
    "Business Websites",
    "Website Development",
    "Landing Pages",
    "Website Redesign",
    "Website AI Chatbots",
    "WhatsApp Website Integration",
    "Customer Support AI",
    "FAQ Systems",
    "Business Automation",
    "Next.js Development",
  ],
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  publisher: "Nexora",
  metadataBase: new URL("https://nexora.systems"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora.systems",
    siteName: "NEXORA",
    title: "NEXORA | Modern Websites & AI Solutions",
    description:
      "Modern business websites, landing pages, redesigns, AI chatbots, and business automation tailored to your exact requirements.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXORA - Modern Websites & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA | AI Systems. Automated Growth.",
    description:
      "Nexora engineers custom, high-performance websites and intelligent AI agents for modern businesses.",
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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-brand-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
