import type { Metadata } from "next";
import { Inter } from "next/font/google";

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

        <nav>
          <h1>Navigation</h1>
          <Link href="/">Home</Link>
          <Link href="/AD4M">AD4M</Link>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
