import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & Student Data Privacy | Study Mondo",
  description:
    "How Study Mondo protects student data: FERPA and COPPA alignment, encryption, subprocessors, AI data handling, retention, and breach response. Built for schools and districts.",
  alternates: {
    canonical: "https://www.studymondo.com/security",
  },
};

const LAST_REVIEWED = "June 2026";

// Keep this list accurate to what the application actually uses. Districts will
// compare it against network traffic and their own vendor inventory.
const SUBPROCESSORS: { name: string; purpose: string; location: string }[] = [
  { name: "Vercel", purpose: "Application hosting & content delivery", location: "United States" },
  { name: "Neon", purpose: "Managed Postgres database (account & progress data)", location: "United States" },
  { name: "Google", purpose: "Optional Google sign-in (OAuth)", location: "United States" },
  { name: "Anthropic", purpose: "AI tutoring & assignment feedback (Claude)", location: "United States" },
  { name: "Stripe", purpose: "Payment processing for paid plans (no student payment data)", location: "United States" },
  { name: "Upstash", purpose: "Rate limiting & abuse prevention", location: "United States" },
];

export default function SecurityPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-2">Security &amp; Student Data Privacy</h1>
      <p className="text-muted-foreground mb-8">
        <strong>Last reviewed:</strong> {LAST_REVIEWED} · Reviewed by the Study Mondo team
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="lead">
          Study Mondo is used by students, including minors, in classrooms. Protecting their data is a
          core design constraint, not an afterthought. This page summarizes our practices for school and
          district decision-makers. It is informational; where a district signs a Data Privacy Agreement
          (DPA), the terms of that agreement govern.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our commitments at a glance</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>We do not sell student data.</strong> Ever.</li>
            <li><strong>No advertising to students.</strong> Study Mondo serves no third-party ads and runs no behavioral ad targeting.</li>
            <li><strong>Education purpose only.</strong> Student data is used to operate the learning service for the school — not for unrelated commercial profiling.</li>
            <li><strong>Data minimization.</strong> We collect the least we need to run the service.</li>
            <li><strong>School ownership.</strong> Under a district agreement, student personal information remains the property of the school/district.</li>
            <li><strong>Deletion on request.</strong> Schools can request deletion of their students&apos; data.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Compliance posture</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">FERPA</h3>
          <p>
            When a school uses Study Mondo to deliver instruction, we act as a &quot;school official&quot; with a
            legitimate educational interest under FERPA&apos;s school official exception (34 CFR § 99.31(a)(1)).
            We use education records only to provide the service to the school and remain under the school&apos;s
            direct control for those records.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">COPPA</h3>
          <p>
            For students under 13, schools may provide consent on behalf of parents for the use of an
            educational service for school purposes, consistent with FTC guidance. Teachers who roster
            students attest that they are authorized to do so. We do not condition participation on the
            collection of more personal information than is reasonably necessary, and we do not use
            children&apos;s data for behavioral advertising.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">State student-privacy laws</h3>
          <p>
            Our practices are designed to align with state student data privacy laws (for example
            California&apos;s SOPIPA and similar statutes in other states), including prohibitions on selling
            student data and on targeted advertising to students.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What we collect &amp; why</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account data</strong> — name and email, used to authenticate the student and associate progress.</li>
            <li><strong>Learning activity</strong> — topics studied, quiz/assignment results, mastery, streaks. This powers the teacher dashboard and the student&apos;s own progress.</li>
            <li><strong>Limited technical data</strong> — standard server logs used for security, reliability, and abuse prevention.</li>
          </ul>
          <p className="mt-4">
            We do not require a student home address, phone number, or government identifiers. We do not
            process student payment information; paid plans are handled by teachers/parents/administrators
            through our payment processor.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">How we use AI</h2>
          <p>
            Study Mondo uses Anthropic&apos;s Claude models to power AI tutoring and to assist teachers with
            assignment feedback. Two points matter for districts:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Content sent to the AI provider is used to generate the response for that request. Our AI
              provider does not use data submitted through its commercial API to train its models.
            </li>
            <li>
              We design AI prompts to avoid sending unnecessary student identifiers — the model receives the
              academic context it needs (e.g., the question and the student&apos;s answer), not a profile.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Security measures</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption in transit</strong> — all traffic is served over HTTPS/TLS.</li>
            <li><strong>Encryption at rest</strong> — our database and hosting providers encrypt stored data at rest.</li>
            <li><strong>Access control</strong> — application access is role-based (student, teacher, admin); teachers can only see their own classes&apos; data.</li>
            <li><strong>Authentication</strong> — passwords are hashed (bcrypt); Google single sign-on is supported; credential sign-in is rate-limited against brute-force attempts.</li>
            <li><strong>Least privilege &amp; managed infrastructure</strong> — we run on managed, SOC-2-type cloud infrastructure and limit administrative access.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Subprocessors</h2>
          <p>
            We use a small set of vetted infrastructure providers to operate the service. Current
            subprocessors:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700 text-left">
                  <th className="py-2 pr-4 font-semibold">Provider</th>
                  <th className="py-2 pr-4 font-semibold">Purpose</th>
                  <th className="py-2 font-semibold">Region</th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 pr-4 font-medium">{s.name}</td>
                    <td className="py-2 pr-4">{s.purpose}</td>
                    <td className="py-2">{s.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Data retention &amp; deletion</h2>
          <p>
            We retain student account and learning data for as long as the account is active or as needed to
            provide the service to the school. Schools and districts may request export or deletion of their
            students&apos; data; we will action verified requests promptly. Individual users may also delete
            their own account from account settings.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Breach response</h2>
          <p>
            We maintain procedures to detect, investigate, and respond to security incidents. In the event of
            a confirmed breach affecting student personal information, we will notify the affected school or
            district without undue delay and cooperate with the district&apos;s obligations under applicable law
            and any signed agreement.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Data Privacy Agreements</h2>
          <p>
            We are happy to review and sign a Data Privacy Agreement with your district, including standard
            frameworks such as the Student Data Privacy Consortium (SDPC) National DPA and state-specific
            exhibits. See our{" "}
            <Link href="/dpa" className="text-blue-600 hover:underline">
              Data Privacy Agreement page
            </Link>{" "}
            for how to start.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Security or privacy questions, DPA requests, or data deletion requests:{" "}
            <a href="mailto:privacy@studymondo.com" className="text-blue-600 hover:underline">
              privacy@studymondo.com
            </a>
            . See also our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
