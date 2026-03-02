import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./design.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";
import { siteName, tagline } from "@/lib/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${siteName} | ${tagline}`,
  description: `${tagline}. Trusted IT outsourcing and software development partner.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <GsapProvider>
          <Header />
          <main className="flex-1 pt-20 md:pt-24">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
