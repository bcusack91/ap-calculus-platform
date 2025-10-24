import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Calculus Learning Platform - Master AP Calculus",
  description: "Free and premium calculus resources including text explanations, flashcards, quizzes, and adaptive learning modules for AP Calculus students.",
  keywords: ["calculus", "AP Calculus", "math", "learning", "flashcards", "study"],
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
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built for AP Calculus students. © {new Date().getFullYear()} Calculus Learning Platform
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
