import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COASYS",
  description: "COASYS: A Digital Nervous System for the New Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav id="NavigationMenu">
          <a href="/Products"><Image src="/navProducts.png" alt="Products" /></a>
          <a href="/Resources"><Image src="/navResources.png" alt="Resources" /></a>
          <a href="/Development"><Image src="/navDevelopment.png" alt="Development" /></a>
          <a href="/Community"><Image src="/navCommunity.png" alt="Community" /></a>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
