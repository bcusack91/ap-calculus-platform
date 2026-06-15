import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Standards & Content Methodology | Study Mondo",
  description:
    "How Study Mondo's study guides, practice problems, and interactive lessons are written, reviewed, and kept accurate and aligned to official exam standards.",
  alternates: {
    canonical: "https://www.studymondo.com/editorial-standards",
  },
};

export default function EditorialStandardsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-4">Editorial Standards &amp; Content Methodology</h1>
      <p className="text-muted-foreground mb-8">
        <strong>Maintained by:</strong> Brendan Cusack, Study Mondo Education Team ·{" "}
        <strong>Last updated:</strong> June 5, 2026
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          Study Mondo publishes free study guides, worked examples, practice
          problems, flashcards, and interactive lessons for AP®, SAT®, MCAT®, and
          K–12 math and science courses. This page explains who creates our
          material, how we keep it accurate, and how we maintain it over time.
          We take the trust students and educators place in us seriously, and we
          want our process to be transparent.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Who Writes Our Content</h2>
          <p>
            All content on Study Mondo is created and reviewed by{" "}
            <strong>Brendan Cusack</strong> together with the Study Mondo
            Education Team. Our material draws on years of experience studying
            and tutoring advanced mathematics and science, and is written
            specifically for students preparing for standardized and
            college-level exams. Every topic page is attributed with an author
            byline and a last-updated date so you always know who stands behind
            the material and when it was last checked.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">How We Create Lessons</h2>
          <p>
            Each subject is broken down into a structured curriculum that mirrors
            the official course framework (for example, College Board units for
            AP courses, or the Digital SAT content domains). For every topic we
            produce:
          </p>
          <ul>
            <li>
              <strong>Written explanations</strong> that introduce concepts in
              plain language, build intuition, and connect ideas to the exam
              skills they support.
            </li>
            <li>
              <strong>Worked examples</strong> with complete, step-by-step
              solutions — not just final answers — so students can follow the
              reasoning.
            </li>
            <li>
              <strong>Practice problems</strong> with explanations for every
              answer choice, written to match the style and difficulty of the
              real exam.
            </li>
            <li>
              <strong>Flashcards and interactive lessons</strong> for active
              recall and self-assessment.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Use of Technology</h2>
          <p>
            We use software tooling to help organize our large curriculum, format
            mathematical notation consistently, and scale content production
            across many subjects. <strong>Every lesson and problem set is reviewed
            by a human</strong> for mathematical accuracy, clarity, and alignment
            to the relevant exam framework before it is published. Technology helps
            us work faster; it does not replace editorial judgment.
          </p>
          <p className="mt-4">
            Some optional, clearly-labeled study aids — such as on-demand
            &ldquo;explain this differently&rdquo; help — may be generated for you
            in real time by an AI assistant. These are study aids to support the
            reviewed core lessons, are marked as AI-generated where used, and you
            should always verify them against the lesson content.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Accuracy &amp; Review</h2>
          <p>
            We hold our content to the following standards:
          </p>
          <ul>
            <li>
              <strong>Mathematical correctness.</strong> Solutions are checked so
              that every step is valid and every stated answer is correct.
            </li>
            <li>
              <strong>Exam alignment.</strong> Topics and terminology follow the
              current official course and exam descriptions for each subject.
            </li>
            <li>
              <strong>Clarity.</strong> Explanations are written to be understood
              by a student encountering the material for the first time.
            </li>
            <li>
              <strong>Currency.</strong> Pages display a last-updated date, and we
              revise content when exam frameworks change or when we identify an
              improvement.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Corrections</h2>
          <p>
            We work hard to be accurate, but no resource is perfect. If you spot
            an error — a typo, an incorrect solution, or anything unclear — please
            tell us through our{" "}
            <Link href="/contact" className="text-purple-700 hover:underline dark:text-purple-300">
              contact page
            </Link>
            . We review every report and correct verified issues promptly, then
            update the page&apos;s last-updated date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Independence &amp; Funding</h2>
          <p>
            Study Mondo is free to use and supported by third-party advertising.
            Advertising never influences the substance of our educational
            content — lessons and problems are written purely to help students
            learn. You can read more about how we handle data and advertising in
            our{" "}
            <Link href="/privacy" className="text-purple-700 hover:underline dark:text-purple-300">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Trademark Notice</h2>
          <p className="text-muted-foreground">
            AP® is a trademark registered by the College Board. SAT® is a
            trademark registered by the College Board. MCAT® is a program of the
            Association of American Medical Colleges. None of these organizations
            are affiliated with, nor do they endorse, this website.
          </p>
        </section>
      </div>
    </div>
  );
}
