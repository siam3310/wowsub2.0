import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Nabar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BPL 2025 LIVE - bpl25.netlify.app",
  description: "A website where you can watch live BPL 2025 for free - BPL25.NETLIFY.APP",
  verification: { google: "keVTh4CE7NNuJ2uokcjoiAlHfUlakVP7ThDhRKijtCc" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C00L020W1Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C00L020W1Z');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Tech-Inspired Gradient Background */}
        <div className="relative min-h-screen">
          {/* Gradient Bar at the Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 via-orange-500 via-green-400 via-blue-500 to-cyan-500 z-10"></div>
          
          {/* Main Content */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-gray-900 to-black z-0">
            <Navbar />
            <main className="relative z-20">{children}</main>
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
