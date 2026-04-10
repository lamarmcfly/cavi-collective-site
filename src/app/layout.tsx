import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { KEYWORDS_EXTRA, META_DESCRIPTION } from "@/lib/marketing-copy";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cavi Collective | Deploy AI Divisions That Operate",
  description: META_DESCRIPTION,
  keywords: [
    "AI workforce",
    "AI agents",
    "enterprise AI",
    "agentic operations",
    "AI divisions",
    "labor as a service",
    ...KEYWORDS_EXTRA,
  ],
  authors: [{ name: "Cavi Collective" }],
  openGraph: {
    title: "Cavi Collective | Deploy AI Divisions That Operate",
    description: META_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Cavi Collective",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavi Collective | Deploy AI Divisions That Operate",
    description: META_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
