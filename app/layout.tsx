import type { Metadata } from 'next';
import {Analytics} from "@vercel/analytics/react";
import { Sora, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import "./globals.css";

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
});
const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
});
export const metadata: Metadata = {
  title: {
    template: "%s | Zyper LLC",
    default: "Zyper LLC | Web3 Ecosystem Platform on TON",
  },
  description: "Zyper is a modern DeFI, Web3, and Governance ecosystem manager that empowers users to create, manage, and trade digital assets seamlessly.",
  keywords: [
    "Blockchain", "crypto", "web3 Affiliate Platform", "zyper", "TON", "affiliate platform", "blockchain Affiliate Platform",
    "crypto Affiliate Platform", "web3"
  ],
  category: "Blockchain",
  metadataBase: new URL("https://www.zyper.org"),
  openGraph: {
    title: "Zyper Protocol",
    description: "Revolutionizing the blockchain and cryptocurrency space on TON.",
    url: "https://www.zyper.org",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "Zyper Logo",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Zyper ",
    description: "Revolutionizing the blockchain and cryptocurrency space on TON.",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "Zyper Logo",
        width: 1200,
        height: 630,
      },
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log("Children:", children);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased bg-gray-900 text-white `}
      >
        <Navbar />
        {children}
         <Analytics />
         <Footer/>
      </body>
    </html>
  );
}

