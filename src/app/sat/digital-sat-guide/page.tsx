import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FaqList,
  GuideBreadcrumb,
  GuideLinks,
  GuideSection,
  Tip,
  TrademarkNote,
  guideArticleJsonLd,
  guideMetadata,
} from '@/components/SatGuideParts'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import { satDomainQbankHref } from '@/lib/qbank-url'
import type { SatDomainKey } from '@/lib/sat-domains'

// Pure static content: no session, no database, so Next prerenders it.
// Format numbers match the practice-test blueprint in
// src/data/sat-practice/test-generator.ts (27 + 27 R&W at 32 min, 22 + 22
// Math at 35 min).

const PATH = '/sat/digital-sat-guide'
const PUBLISHED = '2026-10-12'
const TITLE = 'Digital SAT Strategy Guide'
const DESCRIPTION =
  'How the digital SAT works and how to prepare: the 2-section, 4-module adaptive format, why Module 1 matters, pacing, every Reading and Writing and Math domain with a strategy for each, the reference sheet, and how to use Bluebook practice tests well.'

export const metadata: Metadata = guideMetadata({
  title: `${TITLE}: Format, Adaptive Modules, Pacing and Strategy | Study Mondo`,
  description: DESCRIPTION,
  path: PATH,
  published: PUBLISHED,
})

const faqs = [
  {
    question: 'How long is the digital SAT?',
    answer:
      '2 hours 14 minutes of testing: Reading and Writing is two 32-minute modules and Math is two 35-minute modules, with a 10-minute break between the sections.',
  },
  {
    question: 'How many questions are on the digital SAT?',
    answer: '98 in total: 54 in Reading and Writing (27 per module) and 44 in Math (22 per module). A few in each module are unscored pretest questions that look like all the others.',
  },
  {
    question: 'Is there a penalty for wrong answers?',
    answer: 'No. Your score counts only correct answers, so answer every question, even if you have to guess.',
  },
  {
    question: 'Can I use a calculator on the whole Math section?',
    answer:
      'Yes. Bluebook has a Desmos graphing calculator built in for both Math modules, and you may also bring your own approved calculator.',
  },
  {
    question: 'Does Module 1 matter more than Module 2?',
    answer:
      'Both count toward your score, but Module 1 also decides which version of Module 2 you get. Doing well on Module 1 sends you to the harder second module, which is where the highest scores are possible.',
  },
]

const card = 'rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800'

const RW_DOMAINS: { key: SatDomainKey; name: string; share: string; types: string; strategy: string }[] = [
  {
    key: 'craft-structure',
    name: 'Craft and Structure',
    share: 'about 28%',
    types: 'Words in Context, Text Structure and Purpose, Cross-Text Connections',
    strategy:
      'Cover the choices and predict a word or a purpose from the passage first, then pick the closest match. For two-text questions, sum up each author’s claim in a few words before comparing them.',
  },
  {
    key: 'information-ideas',
    name: 'Information and Ideas',
    share: 'about 26%',
    types: 'Central Ideas and Details, Command of Evidence (textual and quantitative), Inferences',
    strategy:
      'The right answer is supported by the text, not just plausible. For a table or graph, find the exact claim the question asks you to support, then check the data for that claim only. Distrust choices that go further than the passage does.',
  },
  {
    key: 'conventions',
    name: 'Standard English Conventions',
    share: 'about 26%',
    types: 'Boundaries (punctuation between and within sentences); Form, Structure, and Sense (agreement, verb forms, pronouns, modifiers, possessives)',
    strategy:
      'Compare the choices to see what is being tested, then apply the rule. These are the fastest points on the test once the rules are automatic: what a semicolon, a colon and a dash can join, and how to find the real subject of a verb.',
  },
  {
    key: 'expression',
    name: 'Expression of Ideas',
    share: 'about 20%',
    types: 'Rhetorical Synthesis (choosing from a student’s notes), Transitions',
    strategy:
      'For notes questions, read the stated goal first; the answer is the choice that does that exact job, even if others are true. For transitions, name the relationship between the two sentences (contrast, cause, example, addition) before looking at the choices.',
  },
]

const MATH_DOMAINS: { key: SatDomainKey; name: string; share: string; types: string; strategy: string }[] = [
  {
    key: 'algebra',
    name: 'Algebra',
    share: 'about 35%',
    types: 'Linear equations in one and two variables, linear functions, systems of two linear equations, linear inequalities',
    strategy:
      'Know slope and intercepts cold and what they mean in a word problem. For systems, Desmos gives the intersection in seconds; for “how many solutions” questions, compare slopes and intercepts.',
  },
  {
    key: 'advanced',
    name: 'Advanced Math',
    share: 'about 35%',
    types: 'Equivalent expressions; nonlinear equations and systems; nonlinear functions (quadratic, exponential, polynomial, rational, radical)',
    strategy:
      'Recognize the forms of a quadratic (standard, factored, vertex) and what each one shows. For exponential models, identify the starting value and the growth or decay factor. Graph to find zeros, vertices and intersections.',
  },
  {
    key: 'problem-solving',
    name: 'Problem-Solving and Data Analysis',
    share: 'about 15%',
    types: 'Ratios, rates and units; percentages; one- and two-variable data; probability; sample statistics and margin of error; evaluating statistical claims',
    strategy:
      'Write units next to every number. For percent change, use multipliers (a 20% increase is × 1.2). For study design, only a random sample supports generalizing to a population, and only random assignment supports cause and effect.',
  },
  {
    key: 'geometry',
    name: 'Geometry and Trigonometry',
    share: 'about 15%',
    types: 'Area and volume; lines, angles and triangles; right triangles and trigonometry; circles',
    strategy:
      'Start from the reference sheet, then add what it leaves out: the circle equation (x − h)² + (y − k)² = r², SOH-CAH-TOA, and the fact that sin x = cos(90° − x). Draw and label a figure when none is given.',
  },
]

function DomainCard({ d }: { d: (typeof RW_DOMAINS)[number] }) {
  return (
    <div className={card}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">{d.name}</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">{d.share} of the section</span>
      </div>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-300">Question types: </span>
        {d.types}
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{d.strategy}</p>
      <Link href={satDomainQbankHref(d.key)} className="mt-2 inline-block rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">
        Practice {d.name}
      </Link>
    </div>
  )
}

export default function DigitalSatGuidePage() {
  const jsonLd = [
    guideArticleJsonLd({ title: TITLE, description: DESCRIPTION, path: PATH, datePublished: PUBLISHED }),
    faqJsonLd(faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'SAT Prep', url: '/sat' },
      { name: 'Digital SAT strategy guide', url: PATH },
    ]),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <GuideBreadcrumb current="Digital SAT strategy guide" />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{TITLE}</h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          The digital SAT is shorter than the old paper test and adapts to you as you go. Knowing how it is built, and what each part
          rewards, tells you where your study time pays off. This guide covers the format, adaptive routing, pacing, every content domain
          with a strategy for each, and how to use College Board&rsquo;s Bluebook practice tests alongside StudyMondo.
        </p>

        <GuideSection id="format" title="The format at a glance">
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full min-w-[22rem] text-left text-sm">
              <caption className="sr-only">Digital SAT sections, modules, questions and time</caption>
              <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">Section</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Modules</th>
                  <th scope="col" className="px-3 py-2 text-right font-semibold">Questions</th>
                  <th scope="col" className="px-3 py-2 text-right font-semibold">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                <tr>
                  <th scope="row" className="px-3 py-2 font-medium text-gray-900 dark:text-white">Reading and Writing</th>
                  <td className="px-3 py-2">2 × 27 questions, 32 min each</td>
                  <td className="px-3 py-2 text-right tabular-nums">54</td>
                  <td className="px-3 py-2 text-right tabular-nums">64 min</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2 font-medium text-gray-900 dark:text-white">Break</th>
                  <td className="px-3 py-2">Between the sections</td>
                  <td className="px-3 py-2 text-right">—</td>
                  <td className="px-3 py-2 text-right tabular-nums">10 min</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2 font-medium text-gray-900 dark:text-white">Math</th>
                  <td className="px-3 py-2">2 × 22 questions, 35 min each</td>
                  <td className="px-3 py-2 text-right tabular-nums">44</td>
                  <td className="px-3 py-2 text-right tabular-nums">70 min</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/60">
                  <th scope="row" className="px-3 py-2 font-semibold text-gray-900 dark:text-white">Total</th>
                  <td className="px-3 py-2">4 modules</td>
                  <td className="px-3 py-2 text-right font-semibold tabular-nums">98</td>
                  <td className="px-3 py-2 text-right font-semibold tabular-nums">2 h 14 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc space-y-1 pl-5">
            <li>Each section is scored 200–800, for a total of 400–1600. There is no penalty for wrong answers.</li>
            <li>Every Reading and Writing question has its own short passage (or a pair of passages, or notes, or a table or graph).</li>
            <li>About a quarter of Math questions ask you to type your own answer instead of choosing one.</li>
            <li>A few questions in each module are unscored pretest questions. You can&rsquo;t tell which, so treat every question as real.</li>
            <li>
              You take it in Bluebook, College Board&rsquo;s testing app, which includes a{' '}
              <Link href="/sat/desmos-guide" className="font-medium text-accent hover:underline dark:text-accent-muted">
                Desmos graphing calculator
              </Link>{' '}
              and a reference sheet for Math, a highlighter and notes for Reading and Writing, an answer eliminator, and a flag to mark
              questions for review.
            </li>
          </ul>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The PSAT/NMSQT uses the same adaptive design and content domains, scored 160–760 per section. Juniors can check where their
            section scores land for National Merit with the{' '}
            <Link href="/psat-selection-index" className="font-medium text-accent hover:underline dark:text-accent-muted">
              PSAT Selection Index calculator
            </Link>
            .
          </p>
        </GuideSection>

        <GuideSection id="adaptive" title="How adaptive routing works, and why Module 1 matters">
          <p>
            Each section has two modules. <strong>Module 1</strong> is a broad mix of easy, medium and hard questions.
            How you do on it decides your <strong>Module 2</strong>: a higher-difficulty version or a lower-difficulty one. Your section
            score then reflects both modules and the difficulty of the questions you answered correctly.
          </p>
          <p>
            The practical upshot: the easier second module has fewer hard questions, so a student routed there generally can&rsquo;t
            reach the top of the section&rsquo;s range. College Board doesn&rsquo;t publish the routing cutoff, but the lesson is clear.
            Module 1 is where careless errors cost the most.
          </p>
          <Tip title="What to do with that">
            <ul className="list-disc space-y-1 pl-4">
              <li>Don&rsquo;t rush Module 1 to bank time. Accuracy there is worth more than speed.</li>
              <li>If Module 2 feels harder, that is usually a good sign. Don&rsquo;t let it rattle you.</li>
              <li>Don&rsquo;t try to guess your route from how a module feels. Just answer the question in front of you.</li>
            </ul>
          </Tip>
        </GuideSection>

        <GuideSection id="pacing" title="Pacing">
          <p>
            Reading and Writing gives you about <strong>71 seconds per question</strong> (32 minutes for 27); Math gives about{' '}
            <strong>95 seconds</strong> (35 minutes for 22). Those are averages, not targets: conventions and transitions questions often
            take 30 seconds, which buys time for longer evidence and data questions.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Answer everything.</strong> There is no guessing penalty, so never leave a blank. If you&rsquo;re stuck, eliminate
              what you can, pick one, and flag it.
            </li>
            <li>
              <strong>Use mark for review.</strong> You can move freely between questions inside a module. Flag a time sink, move on, and
              come back with whatever time is left.
            </li>
            <li>
              <strong>Set a bail-out point.</strong> If a question has taken about twice the average and you aren&rsquo;t close, guess,
              flag and move on.
            </li>
            <li>
              <strong>Hide the timer if it distracts you.</strong> Bluebook shows it again when five minutes remain.
            </li>
          </ul>
        </GuideSection>

        <GuideSection id="rw" title="Reading and Writing, domain by domain">
          <p>
            Questions in each Reading and Writing module are grouped by type, in this order. Since you can move around within a module,
            some students answer the quick conventions and transitions questions first.
          </p>
          <div className="space-y-3">
            {RW_DOMAINS.map((d) => (
              <DomainCard key={d.key} d={d} />
            ))}
          </div>
        </GuideSection>

        <GuideSection id="math" title="Math, domain by domain">
          <p>
            Math mixes the four domains throughout each module. Algebra and Advanced Math together are about 70% of the section, so they
            are where most students should spend most of their study time.
          </p>
          <div className="space-y-3">
            {MATH_DOMAINS.map((d) => (
              <DomainCard key={d.key} d={d} />
            ))}
          </div>
        </GuideSection>

        <GuideSection id="reference" title="The reference sheet">
          <p>Bluebook&rsquo;s Math reference sheet gives you:</p>
          <ul className="grid gap-x-6 gap-y-1 pl-5 sm:grid-cols-2 [&>li]:list-disc">
            <li>Circle: A = πr², C = 2πr</li>
            <li>Rectangle: A = ℓw</li>
            <li>Triangle: A = ½bh</li>
            <li>Pythagorean theorem: c² = a² + b²</li>
            <li>Special right triangles: 30°-60°-90° (x, x√3, 2x) and 45°-45°-90° (s, s, s√2)</li>
            <li>Rectangular solid: V = ℓwh</li>
            <li>Cylinder: V = πr²h</li>
            <li>Sphere: V = (4/3)πr³</li>
            <li>Cone: V = (1/3)πr²h</li>
            <li>Rectangular pyramid: V = (1/3)ℓwh</li>
            <li>A circle has 360° of arc, or 2π radians</li>
            <li>A triangle&rsquo;s angles add to 180°</li>
          </ul>
          <p>
            It does <strong>not</strong> give you slope, the quadratic formula, vertex form, the equation of a circle, exponent rules,
            SOH-CAH-TOA, or percent change. Memorize those. Knowing the sheet&rsquo;s formulas by heart also saves the trip to open it.
          </p>
        </GuideSection>

        <GuideSection id="together" title="Using Bluebook and StudyMondo together">
          <p>
            Bluebook&rsquo;s official practice tests are the best measure of where you stand, but there are only a few, so use them as
            checkpoints rather than as study material. A cycle that works:
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              <strong>Diagnose.</strong> Take the{' '}
              <Link href="/sat-diagnostic" className="font-medium text-accent hover:underline dark:text-accent-muted">
                free SAT diagnostic
              </Link>{' '}
              (about 30 minutes) to get a score range and a plan.
            </li>
            <li>
              <strong>Study the plan.</strong> Work the recommended lessons and pass their exit quizzes; drill weak domains in the question bank.
            </li>
            <li>
              <strong>Check in.</strong> After two study cycles, take a full-length: a Bluebook practice test or a{' '}
              <Link href="/sat-practice" className="font-medium text-accent hover:underline dark:text-accent-muted">
                StudyMondo practice test
              </Link>
              .
            </li>
            <li>
              <strong>Log it.</strong> Enter your Bluebook score report in the{' '}
              <Link href="/sat/bluebook" className="font-medium text-accent hover:underline dark:text-accent-muted">
                Bluebook companion
              </Link>{' '}
              to get practice sets and lessons for your weakest domains, then start the next cycle.
            </li>
          </ol>
        </GuideSection>

        <GuideSection id="faq-title" title="Frequently asked questions">
          <FaqList faqs={faqs} />
        </GuideSection>

        <GuideLinks keys={['diagnostic', 'bluebook', 'desmos', 'selectionIndex']} />
        <TrademarkNote />
      </article>
    </div>
  )
}
