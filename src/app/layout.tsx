import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DS Identity | Beyond Commerce. Beyond Convention.",
  description:
    "DS Identity is the home of commerce, entrepreneurship, financial literacy, and student-led innovation at Dubai Scholars Private School.",
  metadataBase: new URL("https://dsidentity.tech"),
  openGraph: {
    title: "DS Identity",
    description:
      "The student community promoting commerce, entrepreneurship, financial literacy, and innovation.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[#05070b] text-slate-100 antialiased">
        <Suspense fallback={<div className="h-[74px]" />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
