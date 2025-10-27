import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { CookieConsent } from "@/components/cookie-consent";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Free AP Study Platform - Master Science & Math",
  description: "Free comprehensive study resources for AP Calculus, Physics, Chemistry, and Biology. Original notes, flashcards, and practice problems created by educators.",
  keywords: ["calculus", "AP study", "physics", "chemistry", "biology", "math", "science", "learning", "flashcards", "free study resources"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-8">
              <div className="container">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="text-center md:text-left">
                    <p className="text-sm leading-loose text-muted-foreground">
                      Built for AP students. © {new Date().getFullYear()} Calculus Learning Platform
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                      AP® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this website.
                    </p>
                  </div>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="/about" className="hover:text-foreground transition-colors">
                      About
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                      Contact
                    </Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">
                      Terms
                    </Link>
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
