import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Dentiste | Modern Premium Dental Care",
  description: "Experience premium dental care with a personalized approach. Modern dentistry designed for your comfort and long-term oral health.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dentiste | Modern Premium Dental Care",
    description: "Experience premium dental care with a personalized approach.",
    url: "https://d-beta-nine.vercel.app",
    siteName: "Dentiste",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dentiste Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentiste | Modern Premium Dental Care",
    description: "Experience premium dental care with a personalized approach.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.variable} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
