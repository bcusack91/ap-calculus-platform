import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// KaTeX stylesheet must be global: FRQ pages, full exams, and the blog render
// KaTeX HTML via rehype-katex/renderRichText and were unstyled without it.
import "katex/dist/katex.min.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { CookieConsent } from "@/components/cookie-consent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AdSenseScript from "@/components/AdSenseScript";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { Footer } from "@/components/footer";
import { WebVitals } from "@/components/web-vitals";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studymondo.com"),
  title: "Study Mondo — Free AP, SAT & MCAT Study Platform",
  description:
    "Free notes, flashcards, practice problems & interactive lessons for AP Calculus, Physics, Chemistry, Biology, SAT, and MCAT — created by educators to help you ace your exams.",
  alternates: {
    canonical: "https://www.studymondo.com",
    languages: {
      "en": "https://www.studymondo.com",
      "x-default": "https://www.studymondo.com",
    },
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
    title: "Study Mondo — Free AP, SAT & MCAT Study Platform",
    description:
      "Free notes, flashcards, practice problems & interactive lessons for AP Calculus, Physics, Chemistry, Biology, SAT, and MCAT — join thousands of students studying smarter.",
    url: "https://www.studymondo.com",
    siteName: "Study Mondo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Mondo — Free AP, SAT & MCAT Study Platform",
    description:
      "Free notes, flashcards, practice problems & interactive lessons — 100% free. Join thousands of students studying smarter.",
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
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        {/* Prevent flash of wrong theme / color scheme */}
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
                  var prefs = localStorage.getItem('user-preferences');
                  if (prefs) {
                    var p = JSON.parse(prefs);
                    if (p.colorScheme && p.colorScheme !== 'default') {
                      document.documentElement.setAttribute('data-scheme', p.colorScheme);
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Register service worker only in production to avoid stale-cache issues in local dev */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').catch(function() {});
                  });
                }
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <WebVitals />
        <Providers>
          {isProd && gaId && <GoogleAnalytics measurementId={gaId} />}
          {isProd && adsenseClientId && <AdSenseScript clientId={adsenseClientId} />}
          {isProd && clarityProjectId && <MicrosoftClarity projectId={clarityProjectId} />}
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </Providers>
        {isProd && <Analytics />}
        {isProd && <SpeedInsights />}
      </body>
    </html>
  );
}
