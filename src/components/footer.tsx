import Link from 'next/link'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { EmailCapture } from '@/components/email-capture'
import { getCourseHref } from '@/data/course-metadata'

const footerLinks = {
  'Courses': [
    { name: 'AP Calculus AB', href: getCourseHref('ap-calculus-ab') },
    { name: 'AP Calculus BC', href: getCourseHref('ap-calculus-bc') },
    { name: 'AP Physics 1', href: getCourseHref('ap-physics-1') },
    { name: 'AP Chemistry', href: getCourseHref('ap-chemistry') },
    { name: 'AP Biology', href: getCourseHref('ap-biology') },
    { name: 'All Courses', href: '/topics' },
  ],
  'Features': [
    { name: 'Study Notes', href: '/topics' },
    { name: 'Flashcards', href: '/flashcards' },
    { name: 'AP Chem Diagnostic', href: '/ap-chem-diagnostic' },
    { name: 'Calc AB Diagnostic', href: '/calcab-diagnostic' },
    { name: 'Calc BC Diagnostic', href: '/calcbc-diagnostic' },
    { name: 'Competitive Mode', href: '/competitive' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Search', href: '/search' },
    { name: 'Pricing', href: '/pricing' },
  ],
  'Company': [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Editorial Standards', href: '/editorial-standards' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950">
      <div className="container py-12 md:py-16">
        {/* Top section: Brand + Link columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="inline-block" style={{ width: 28, height: 28 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28">
                  <rect width="32" height="32" rx="7" fill="url(#fg)"/>
                  <defs>
                    <linearGradient id="fg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED"/>
                      <stop offset="100%" stopColor="#2563EB"/>
                    </linearGradient>
                  </defs>
                  <rect x="7" y="10" width="18" height="12" rx="2.5" fill="#fff" stroke="#7C3AED" strokeWidth="1.2"/>
                  <rect x="9" y="12" width="14" height="8" rx="1.5" fill="#e0e7ff"/>
                  <path d="M9 12 Q16 14.5 23 12" fill="none" stroke="#7C3AED" strokeWidth="0.7"/>
                  <ellipse cx="13" cy="16" rx="1.2" ry="1.5" fill="#7C3AED"/>
                  <ellipse cx="19" cy="16" rx="1.2" ry="1.5" fill="#7C3AED"/>
                  <path d="M13.5 19 Q16 20.8 18.5 19" stroke="#7C3AED" strokeWidth="0.7" fill="none"/>
                </svg>
              </span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Study Mondo</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Free study resources for students from Grade 4 through AP and test prep. {COURSE_COUNT} courses, {TOPIC_COUNT_LABEL} topics.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={`Footer ${title} links`}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Email Capture */}
        <div className="mt-10 max-w-lg mx-auto md:mx-0">
          <EmailCapture
            source="footer"
            heading="Stay Ahead in School"
            description="Free weekly study tips, practice sets, and exam strategies. Join 10,000+ students."
            buttonText="Get Free Tips"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Study Mondo. Built for students.
              </p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                AP® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
