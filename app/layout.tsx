import type { Metadata } from "next";


import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

import "./globals.css";

import { Inter } from "next/font/google";

/* Google Font "Bricolage Grotesque" */
import { createFont } from 'next/font/google';
export const secondaryFont = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-grotesque",
    display: "swap",
    adjustFontFallback: false,
});
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Bricolage Grotesque', tailwindConfig.theme.fontFamily.sans],
    },
  },
};

const inter = Bricolage;



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

        <div id="PrimaryContainer">
        
          <div id="NavigationMenu">
            <a href="/Products"><img height="40" src="/navProducts.png" alt="Products" /></a>
            <a href="/Resources"><img height="40" src="/navResources.png" alt="Resources" /></a>
            <a href="/Development"><img height="40" src="/navDevelopment.png" alt="Development" /></a>
            <a href="/Community"><img height="40" src="/navCommunity.png" alt="Community" /></a>
            &nbsp;&nbsp;
            <a href="/"><img src="/hamburger.svg" alt="" /></a>
            &nbsp;&nbsp;
            <a href="/AD4M"><img src="/navLogin.svg" alt="Login" /></a>
          </div>

          <div id="PageContent">
            {children}
          </div>
            
        </div>
        
      </body>
    </html>
  );
}
