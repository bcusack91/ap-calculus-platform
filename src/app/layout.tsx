import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { CookieConsent } from "@/components/cookie-consent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AdSenseScript from "@/components/AdSenseScript";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studymondo.com"),
  title: "Study Mondo — Free AP Study Platform",
  description:
    "Study Mondo offers free notes, flashcards, and practice problems for AP Calculus, Physics, Chemistry, and Biology — created by educators to help you ace your exams.",
  alternates: {
    canonical: "https://www.studymondo.com",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-adsense-account": "ca-pub-8403501245603262",
  },
  keywords: [
    "study mondo",
    "studymondo",
    "ap study",
    "calculus",
    "physics",
    "chemistry",
    "biology",
    "math",
    "science",
    "learning",
    "flashcards",
    "free study resources",
  ],
  openGraph: {
    title: "Study Mondo — Free AP Study Platform",
    description:
      "Study Mondo offers free notes, flashcards, and practice problems for AP Calculus, Physics, Chemistry, and Biology — created by educators to help you ace your exams.",
    url: "https://www.studymondo.com",
    siteName: "Study Mondo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Mondo — Free AP Study Platform",
    description:
      "Free notes, flashcards, and practice problems for AP Calculus, Physics, Chemistry, and Biology.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        {adsenseClientId && <AdSenseScript clientId={adsenseClientId} />}
        <Providers>
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
