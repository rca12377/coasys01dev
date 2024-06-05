import type { Metadata } from "next";


import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

import "./globals.css";

/* Google Font "Bricolage Grotesque" */
import { Bricolage_Grotesque } from 'next/font/google';
const PrimaryFont = Bricolage_Grotesque({ subsets: ['latin'] });
import { Noto_Serif } from 'next/font/google';
const SecondaryFont = Noto_Serif({ subsets: ['latin'] });




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
      
      <body className={SecondaryFont.className}>

        <div id="PrimaryContainer">
        
          <div id="PageContent">
            {children}
          </div>
            
        </div>
        
      </body>
    </html>
  );
}
