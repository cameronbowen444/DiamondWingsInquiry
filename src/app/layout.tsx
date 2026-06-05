import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://diamond-wings-inquiry.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Diamond Wings 369 | Luxury Chauffeur Service",
    template: "%s | Diamond Wings 369",
  },

  description:
    "Book luxury chauffeur service with Diamond Wings 369. Premium black-car transportation for airport rides, private events, weddings, corporate travel, date nights, and special occasions in Los Angeles.",

  keywords: [
    "Diamond Wings 369",
    "luxury chauffeur service",
    "black car service",
    "Los Angeles chauffeur",
    "Los Angeles black car service",
    "LAX airport transportation",
    "airport chauffeur service",
    "private driver Los Angeles",
    "wedding transportation",
    "event transportation",
    "corporate transportation",
    "luxury car service",
    "private ride service",
    "executive transportation",
    "private chauffeur Los Angeles",
    "VIP transportation Los Angeles",
  ],

  authors: [{ name: "Diamond Wings 369" }],
  creator: "Diamond Wings 369",
  publisher: "Diamond Wings 369",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Diamond Wings 369 | Ride First Class",
    description:
      "Premium luxury chauffeur and black-car service for airport transfers, events, weddings, corporate travel, date nights, and private rides in Los Angeles.",
    url: siteUrl,
    siteName: "Diamond Wings 369",
    images: [
      {
        url: "/car2.png",
        width: 1200,
        height: 630,
        alt: "Diamond Wings 369 luxury chauffeur and black car service",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Wings 369 | Luxury Chauffeur Service",
    description:
      "Book premium black-car transportation for airport rides, weddings, events, corporate travel, and private luxury transportation in Los Angeles.",
    images: ["/car2.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}