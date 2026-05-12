import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Zeyaul Hasan - Software Developer & Ethical Hacker",
  description: "Passionate Software Developer and CSE student specializing in software engineering, ethical hacking, cybersecurity, and competitive programming. Currently pursuing B.Tech CSE at LPU.",
  keywords: "Zeyaul Hasan, Software Developer, Ethical Hacker, CSE Student, LPU, Competitive Programming, Cybersecurity, Web Development",
  authors: [{ name: "Zeyaul Hasan" }],
  creator: "Zeyaul Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeyaulhasan.vercel.app",
    siteName: "Zeyaul Hasan Portfolio",
    title: "Zeyaul Hasan - Software Developer & Ethical Hacker",
    description: "Passionate Software Developer and CSE student specializing in software engineering, ethical hacking, cybersecurity, and competitive programming.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeyaul Hasan - Software Developer & Ethical Hacker",
    description: "Passionate Software Developer and CSE student specializing in software engineering, ethical hacking, cybersecurity, and competitive programming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import AppWrapper from "../components/AppWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppWrapper>{children}</AppWrapper>
        <button
          id="back-to-top"
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full shadow-lg transition-all duration-300 opacity-0 pointer-events-none"
          style={{ display: 'none' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </body>
    </html>
  );
}
