import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Privacy Agreement (DPA) | Study Mondo",
  description:
    "Study Mondo signs Data Privacy Agreements with schools and districts, including the SDPC National DPA and state exhibits. Here's how to request one.",
  alternates: {
    canonical: "https://www.studymondo.com/dpa",
  },
};

const LAST_REVIEWED = "June 2026";

export default function DpaPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-2">Data Privacy Agreement (DPA)</h1>
      <p className="text-muted-foreground mb-8">
        <strong>Last reviewed:</strong> {LAST_REVIEWED} · Reviewed by the Study Mondo team
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead">
          Many districts require a signed Data Privacy Agreement before staff and students use an edtech
          service. Study Mondo is willing to review and sign a DPA with your school or district. This page
          explains what we support and how to get one in place.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What we&apos;ll sign</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>SDPC National DPA</strong> — we work with the Student Data Privacy Consortium&apos;s
              standard National Data Privacy Agreement and its state-specific exhibits.
            </li>
            <li>
              <strong>State-specific agreements</strong> — including California, New York (Ed Law 2-d), Illinois
              (SOPPA), and similar state frameworks.
            </li>
            <li>
              <strong>Your district&apos;s own template</strong> — send us your standard agreement and we&apos;ll
              review it.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What a DPA with us covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Student data is owned by the district and used only to provide the service to the school.</li>
            <li>No sale of student data and no advertising or behavioral targeting to students.</li>
            <li>Defined data retention and deletion on request or at contract termination.</li>
            <li>Security safeguards and breach-notification commitments.</li>
            <li>A current list of subprocessors (see our <Link href="/security" className="text-blue-600 hover:underline">Security page</Link>).</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">How to request a DPA</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Email{" "}
              <a href="mailto:privacy@studymondo.com" className="text-blue-600 hover:underline">
                privacy@studymondo.com
              </a>{" "}
              from your district email with your district name and state.
            </li>
            <li>
              Tell us which framework you use — the SDPC National DPA, a state exhibit, or your own template
              (attach it if so).
            </li>
            <li>
              If your district is part of a privacy consortium (e.g., a state SDPC alliance), send the link to
              your registry entry and we&apos;ll complete the agreement there.
            </li>
            <li>We review, sign, and return the executed agreement, then your rostering can proceed.</li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Typical turnaround is a few business days, depending on the template and any redlines.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Already have students using Study Mondo?</h2>
          <p>
            That&apos;s fine — teachers can pilot the free tier under the FERPA school-official exception while a
            district-wide DPA is being put in place. If your district later requires deletion of pilot data, we
            will action a verified request. See our{" "}
            <Link href="/security" className="text-blue-600 hover:underline">
              Security &amp; Student Data Privacy
            </Link>{" "}
            page for details.
          </p>
        </section>

        <section className="mt-8 not-prose rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Request a DPA</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Email us and we&apos;ll get started. Please write from your district email address.
          </p>
          <a
            href="mailto:privacy@studymondo.com?subject=DPA%20Request"
            className="inline-block px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Email privacy@studymondo.com
          </a>
        </section>
      </div>
    </div>
  );
}
