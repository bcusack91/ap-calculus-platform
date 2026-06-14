import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { InArticleAd } from '@/components/ad-banner'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry 2 | Free OChem 2 Practice & Score Predictor',
  description:
    'Master Organic Chemistry 2 — second-semester organic. Aromatics & EAS/NAS, pericyclic reactions, full carbonyl & acyl substitution, enolates (aldol/Claisen/Michael/Robinson), amines, biomolecules, advanced 2D NMR, and retrosynthesis. Includes a 1–5 AP-equivalent score predictor.',
  alternates: { canonical: 'https://www.studymondo.com/organic-chemistry-2' },
  openGraph: {
    title: 'Organic Chemistry 2',
    description: 'AP-equivalent rigor across the full second-semester organic curriculum, with a 1–5 score predictor.',
    url: 'https://www.studymondo.com/organic-chemistry-2',
  },
}

const features = [
  { title: 'Interactive Lessons', description: 'Step-by-step coverage of all OChem 2 topics including pericyclic reactions, aldol/Claisen, Michael/Robinson, NAS, phenols, advanced 2D NMR, and retrosynthesis.', href: '/courses/organic-chemistry', stats: '6 units · 17 topics', color: 'from-emerald-500 to-teal-500', icon: '📗' },
  { title: 'Diagnostic Test', description: 'Benchmark your performance across the OChem 2 curriculum.', href: '/ochem-diagnostic', stats: '~30 questions · 25 min', color: 'from-blue-500 to-indigo-500', icon: '🎯' },
  { title: 'AP-Equivalent Score Predictor', description: 'Convert your performance into an AP-equivalent 1–5 score, the way AP Chemistry students are scored.', href: '/ochem2-score-predictor', stats: '1–5 scale · live updates', color: 'from-teal-500 to-cyan-500', icon: '⭐' },
  { title: 'Flashcards', description: 'Named reactions, mechanisms, and biomolecule structures for OChem 2.', href: '/flashcards?course=organic-chemistry-2', stats: 'Mechanisms · Biomolecules', color: 'from-purple-500 to-pink-500', icon: '🃏' },
  { title: 'Daily Question', description: 'A fresh organic question every day — keep advanced mechanisms sharp.', href: '/ochem-daily-question', stats: 'New daily', color: 'from-rose-500 to-pink-500', icon: '📅' },
  { title: 'Exit Quizzes', description: 'Per-lesson assessments confirm mastery before you advance.', href: '/courses/organic-chemistry', stats: 'Per topic · Instant feedback', color: 'from-cyan-500 to-blue-500', icon: '✅' },
]

const units = [
  { title: 'Unit 1 · Conjugation, Pericyclic & Aromatics', topics: ['Conjugated dienes; 1,2 vs 1,4 addition', 'Diels-Alder & pericyclic reactions (FMO)', 'Aromaticity & Hückel\'s rule', 'EAS: directing & activating effects', 'Nucleophilic Aromatic Substitution (SNAr & benzyne)', 'Phenols & quinones'], color: 'emerald' },
  { title: 'Unit 2 · Carbonyls & Acyl Substitution', topics: ['Aldehydes & ketones (NaBH₄, Grignard, Wittig, acetals)', 'Carboxylic acid derivatives & their reactivity ladder'], color: 'teal' },
  { title: 'Unit 3 · Enolates & α-Substitution', topics: ['Enol/enolate formation; LDA kinetic enolates', 'Aldol & Claisen condensations (incl. Dieckmann)', 'Michael addition & Robinson annulation'], color: 'green' },
  { title: 'Unit 4 · Amines & Nitrogen Chemistry', topics: ['Amine basicity, synthesis, alkylation/acylation', 'Diazonium salts & Sandmeyer chemistry'], color: 'cyan' },
  { title: 'Unit 5 · Biomolecules', topics: ['Carbohydrates (Fischer/Haworth, anomers, glycosides)', 'Amino acids, peptides & protein structure', 'Lipids & nucleic acids'], color: 'lime' },
  { title: 'Unit 6 · Advanced Spectroscopy & Synthesis', topics: ['Advanced & 2D NMR: DEPT, COSY, HSQC, HMBC, NOESY', 'Multi-step synthesis & retrosynthetic analysis (synthons, FGI, protecting groups)'], color: 'emerald' },
]

const colorClasses: Record<string, { text: string; check: string }> = {
  lime: { text: 'text-lime-700 dark:text-lime-400', check: 'text-lime-500' },
  emerald: { text: 'text-emerald-700 dark:text-emerald-400', check: 'text-emerald-500' },
  green: { text: 'text-green-700 dark:text-green-400', check: 'text-green-500' },
  teal: { text: 'text-teal-700 dark:text-teal-400', check: 'text-teal-500' },
  cyan: { text: 'text-cyan-700 dark:text-cyan-400', check: 'text-cyan-500' },
}

export default function OrganicChemistry2Hub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
          title: 'Organic Chemistry 2',
          description: metadata.description as string,
          slug: 'organic-chemistry-2',
        })) }}
      />
      <CourseUniqueIntro slug="organic-chemistry-2" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <span>🎓</span> Second-semester organic chemistry · AP-equivalent rigor
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Organic Chemistry 2</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Second-semester organic chemistry at AP-equivalent rigor — pericyclic reactions, the full aromatic/carbonyl/acyl-substitution
            machinery, enolate condensations, biomolecules, advanced 2D NMR, and full retrosynthetic planning. Includes a
            <strong> 1–5 AP-equivalent score predictor</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/ochem-diagnostic" className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">Start with Diagnostic</Link>
            <Link href="/ochem2-score-predictor" className="rounded-xl border-2 border-teal-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-teal-700 transition hover:bg-teal-50 dark:border-teal-600 dark:text-teal-400 dark:hover:bg-teal-900/20">View 1–5 Score Predictor</Link>
            <Link href="/courses/organic-chemistry" className="rounded-xl border-2 border-emerald-300 px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-900/20">Browse Lessons</Link>
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Need to review fundamentals? <Link href="/organic-chemistry-1" className="font-semibold text-lime-600 underline hover:text-lime-700 dark:text-lime-400">← Back to Organic Chemistry 1</Link>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <Link key={f.title} href={f.href} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-2xl text-white ${f.color}`}>{f.icon}</div>
                <span className="text-xs font-medium text-gray-400">{f.stats}</span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </Link>
          ))}
        </div></div>
      </section>

      {/* In-article ad — single, mid-page placement between features and "What's Covered" */}
      <InArticleAd />

      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">Organic Chemistry 2 Curriculum</h2>
          <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">6 units · 17 topics · expanded for AP-equivalent depth</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-4 text-lg font-bold ${colorClasses[u.color].text}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${colorClasses[u.color].check}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">About the AP-Equivalent Score (1–5)</h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Organic Chemistry 2 is taught at AP-equivalent depth. The score predictor blends <strong>70% quiz performance</strong> and
            <strong> 30% topic mastery rate</strong>, then maps the result onto the same 1–5 scale used for AP Chemistry —
            so you can interpret your standing the way you would for any other AP science.
          </p>
          <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2 dark:text-gray-300">
            <li>• <strong>5</strong> — Top performance (≥ 85%): synthesis-ready, exam-confident.</li>
            <li>• <strong>4</strong> — Strong (≥ 70%): solid mechanisms; refine spectroscopy.</li>
            <li>• <strong>3</strong> — Passing (≥ 55%): foundational; rebuild carbonyl/aromatic chemistry.</li>
            <li>• <strong>2</strong> — Below passing (≥ 35%): focused remediation needed.</li>
            <li>• <strong>1</strong> — Beginning (&lt; 35%): work through the lessons end-to-end.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
