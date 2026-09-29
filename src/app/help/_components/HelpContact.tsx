import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

/** The "Still stuck?" footer every help page ends with. */
export function HelpContact() {
  return (
    <section
      aria-labelledby="help-contact-heading"
      className="rounded-2xl border border-card-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-6"
    >
      <div className="flex gap-3">
        <MessageCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
        <div>
          <h2 id="help-contact-heading" className="text-lg font-bold text-gray-900 dark:text-white">
            Still stuck?
          </h2>
          <p className="text-sm text-muted-foreground">Tell us what happened and we will help you sort it out.</p>
        </div>
      </div>
      <Link
        href="/contact"
        className="mt-4 inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:mt-0 sm:shrink-0"
      >
        Contact us
      </Link>
    </section>
  )
}
