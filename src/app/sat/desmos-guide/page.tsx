import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FaqList,
  GuideBreadcrumb,
  GuideLinks,
  GuideSection,
  Tip,
  TrademarkNote,
  WorkedExample,
  guideArticleJsonLd,
  guideMetadata,
} from '@/components/SatGuideParts'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'

// Pure static content: no session, no database, so Next prerenders it.

const PATH = '/sat/desmos-guide'
const PUBLISHED = '2026-10-12'
const TITLE = 'How to Use Desmos on the Digital SAT'
const DESCRIPTION =
  'Practical Desmos techniques for the Digital SAT Math section, each with a worked example: solving equations by graphing, systems, quadratics, inequalities, regression, sliders, max and min, and checking equivalent expressions.'

export const metadata: Metadata = guideMetadata({
  title: `${TITLE}: 10 Techniques with Worked Examples | Study Mondo`,
  description: DESCRIPTION,
  path: PATH,
  published: PUBLISHED,
})

const faqs = [
  {
    question: 'Is the Desmos calculator available on the whole SAT Math section?',
    answer:
      'Yes. Bluebook, the app you take the digital SAT in, has a Desmos graphing calculator built in for both Math modules. It is not available in the Reading and Writing section. You may also bring your own approved calculator.',
  },
  {
    question: 'Do I need Desmos to get a high Math score?',
    answer:
      'No. Every question can be solved by hand. Desmos saves time on certain question types (systems, quadratics, counting solutions, regression, checking answer choices) and protects against algebra slips, so it is worth practicing until using it is automatic.',
  },
  {
    question: 'Does Desmos give exact answers?',
    answer:
      'It shows decimals. When the answer choices are exact values such as 3 ± (√22)/2, convert the choices to decimals and match them. For a question where you type your own answer, read College Board’s entry directions once in a Bluebook practice test so you know how fractions and long decimals are accepted.',
  },
  {
    question: 'Should I graph every Math question?',
    answer:
      'No. A one-step equation, a percent or a unit conversion is faster by hand. Reach for Desmos when the algebra is long, when you need to see how many solutions there are, or when testing answer choices is quicker than solving.',
  },
]

const code = 'rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] text-gray-900 dark:bg-gray-800 dark:text-gray-100'

const TOC = [
  ['basics', 'The basics'],
  ['solve', '1. Solve an equation by graphing both sides'],
  ['extraneous', '2. Catch extraneous solutions'],
  ['systems', '3. Systems of equations'],
  ['quadratics', '4. Quadratics: vertex and zeros'],
  ['maxmin', '5. Maximum and minimum in word problems'],
  ['inequalities', '6. Inequalities and shading'],
  ['sliders', '7. Sliders to test a constant'],
  ['regression', '8. Regression with a table'],
  ['equivalent', '9. Check equivalent expressions'],
  ['lists', '10. Functions and lists'],
  ['pitfalls', 'Common pitfalls'],
] as const

export default function SatDesmosGuidePage() {
  const jsonLd = [
    guideArticleJsonLd({ title: TITLE, description: DESCRIPTION, path: PATH, datePublished: PUBLISHED }),
    faqJsonLd(faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'SAT Prep', url: '/sat' },
      { name: 'Desmos on the Digital SAT', url: PATH },
    ]),
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <GuideBreadcrumb current="Desmos on the Digital SAT" />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{TITLE}</h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
          The digital SAT gives you a Desmos graphing calculator for the entire Math section, built right into Bluebook. Used well, it turns
          long algebra into a picture you can read in seconds. Here are ten techniques that come up again and again, each with a worked
          example you can try yourself.
        </p>

        <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">On this page</p>
          <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <GuideSection id="basics" title="The basics">
          <p>
            In Bluebook, open the calculator from the toolbar on any Math question. It is the same Desmos graphing calculator as on
            desmos.com: each row holds one expression, and anything with <em>x</em> and <em>y</em> is graphed.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Click a curve</strong> to reveal its points of interest (x-intercepts, y-intercept, maximum or minimum) as gray dots.
              Click a dot to see its coordinates.
            </li>
            <li>
              <strong>Two curves that cross</strong> show their intersection as a gray dot too. Click it for the coordinates.
            </li>
            <li>
              <strong>Type equations the way they are written.</strong> Desmos graphs <code className={code}>3x + 2y = 15</code> directly, with no
              need to solve for <em>y</em> first.
            </li>
            <li>
              <strong>Use the functions you know.</strong> Typing <code className={code}>sqrt</code> makes a square root, <code className={code}>^</code> makes an
              exponent, and <code className={code}>/</code> makes a fraction.
            </li>
          </ul>
          <Tip title="When not to bother">
            <p>
              A one-step equation, a percent or a unit conversion is faster by hand. Save Desmos for long algebra, counting solutions,
              anything graphical, and testing answer choices.
            </p>
          </Tip>
        </GuideSection>

        <GuideSection id="solve" title="1. Solve an equation by graphing both sides">
          <p>
            Put each side of the equation on its own line as <em>y = …</em>. Every intersection is a solution, and its x-coordinate is the
            value of <em>x</em>. This is also the fastest way to answer &ldquo;how many solutions?&rdquo; questions.
          </p>
          <WorkedExample
            title="How many real solutions?"
            problem={<>How many real solutions does x² − 6x + 11 = 2x − 5 have?</>}
            type={['y = x^2 - 6x + 11', 'y = 2x - 5']}
            steps={[
              'The parabola and the line touch at exactly one point, (4, 3).',
              'One point of contact means one solution. (Algebra agrees: x² − 8x + 16 = 0 is (x − 4)² = 0.)',
            ]}
            answer="Exactly one real solution, x = 4."
          />
        </GuideSection>

        <GuideSection id="extraneous" title="2. Catch extraneous solutions">
          <p>
            Squaring both sides of a radical equation can create answers that don&rsquo;t actually work. The graph never shows those, so
            it settles the question at a glance.
          </p>
          <WorkedExample
            title="A radical equation"
            problem={<>What value of x satisfies √(x + 7) = x − 5?</>}
            type={['y = sqrt(x + 7)', 'y = x - 5']}
            steps={[
              'The two graphs cross once, at (9, 4).',
              'Solving by squaring gives x² − 11x + 18 = 0, so x = 9 or x = 2. But at x = 2 the left side is √9 = 3 and the right side is −3, so 2 is extraneous.',
            ]}
            answer="x = 9."
          />
        </GuideSection>

        <GuideSection id="systems" title="3. Systems of equations">
          <p>Type both equations exactly as given and click where they cross.</p>
          <WorkedExample
            title="Read the solution off the graph"
            problem={<>If (x, y) is the solution to the system y = 2x − 3 and 3x + 2y = 15, what is x + y?</>}
            type={['y = 2x - 3', '3x + 2y = 15']}
            steps={['Click the intersection: (3, 3).', 'Add the coordinates.']}
            answer="x + y = 6."
          />
          <p>
            Parallel lines (no intersection) mean no solution; lines that lie on top of each other mean infinitely many. That makes
            Desmos a quick check for &ldquo;how many solutions does this system have?&rdquo;
          </p>
        </GuideSection>

        <GuideSection id="quadratics" title="4. Quadratics: vertex and zeros">
          <p>Graph the function and click the curve. The vertex and both x-intercepts appear as points you can click.</p>
          <WorkedExample
            title="Maximum value and zeros"
            problem={<>The function f is defined by f(x) = −2x² + 12x − 7. What is the maximum value of f, and where are its zeros?</>}
            type={['f(x) = -2x^2 + 12x - 7']}
            steps={[
              'Click the parabola. The top point is (3, 11), so the maximum value of f is 11 (it occurs at x = 3).',
              'The x-intercepts show as about 0.655 and 5.345.',
              'If the choices are exact, like 3 ± (√22)/2, convert them: √22 ≈ 4.690, so 3 ± 2.345 gives 0.655 and 5.345. That matches.',
            ]}
            answer="Maximum value 11; zeros x = 3 ± (√22)/2 (about 0.655 and 5.345)."
          />
        </GuideSection>

        <GuideSection id="maxmin" title="5. Maximum and minimum in word problems">
          <p>
            Desmos graphs in <em>x</em> and <em>y</em>, so rename the variable: h(t) becomes y with x standing for t. Zoom out if the
            interesting part of the graph is off screen.
          </p>
          <WorkedExample
            title="Projectile height"
            problem={
              <>
                A ball&rsquo;s height, in feet, t seconds after it is thrown is h(t) = −16t² + 48t + 6. What is the ball&rsquo;s maximum
                height, and about when does it hit the ground?
              </>
            }
            type={['y = -16x^2 + 48x + 6']}
            steps={[
              'Click the top of the parabola: (1.5, 42). The ball peaks at 42 feet after 1.5 seconds.',
              'Click the positive x-intercept: about (3.12, 0). Ignore the negative intercept, since time can’t be negative.',
            ]}
            answer="Maximum height 42 feet; it lands after about 3.12 seconds."
          />
        </GuideSection>

        <GuideSection id="inequalities" title="6. Inequalities and shading">
          <p>
            Desmos shades the solution region of an inequality. A strict inequality (&lt; or &gt;) gets a dashed boundary, and ≤ or ≥ gets a
            solid one. With two inequalities, the solutions are where the shading overlaps. Type the answer-choice points as coordinates
            to see which one lands in the overlap.
          </p>
          <WorkedExample
            title="Which point is a solution?"
            problem={
              <>
                Which point (x, y) is a solution to the system y &gt; 2x − 1 and y ≤ −x + 5? Choices: (3, 4), (1, 5), (0, 0), (4, 0).
              </>
            }
            type={['y > 2x - 1', 'y <= -x + 5', '(3, 4)', '(1, 5)', '(0, 0)', '(4, 0)']}
            steps={[
              'Only (0, 0) sits in the region shaded by both inequalities.',
              'Check it: 0 > 2(0) − 1 = −1 is true, and 0 ≤ −0 + 5 is true.',
            ]}
            answer="(0, 0)."
          />
        </GuideSection>

        <GuideSection id="sliders" title="7. Sliders to test a constant">
          <p>
            When an equation contains an unknown constant, type it as a letter. Desmos offers to add a slider for it, which you can drag
            or set to each answer choice in turn. This works well for &ldquo;for what value of k…&rdquo; questions.
          </p>
          <WorkedExample
            title="No solution"
            problem={<>In the system 3x + ky = 7 and 6x + 8y = 5, k is a constant. For what value of k does the system have no solution?</>}
            type={['3x + ky = 7', '6x + 8y = 5']}
            steps={[
              'Accept the slider for k, then set k to each answer choice (or drag it).',
              'At k = 4 the lines are parallel and never meet: no solution. (Check: 6x + 8y = 5 is the same as 3x + 4y = 2.5, which has the same slope as 3x + 4y = 7 but a different constant.)',
            ]}
            answer="k = 4."
          />
        </GuideSection>

        <GuideSection id="regression" title="8. Regression with a table">
          <p>
            Add a table (type <code className={code}>table</code> on a new line, or use the add menu). Its columns are x<sub>1</sub> and y
            <sub>1</sub>. Then type a model with a tilde (~), and Desmos fits it and reports the parameters. Type <code className={code}>y_1</code> to
            get the subscript.
          </p>
          <WorkedExample
            title="Line of best fit"
            problem={
              <>
                The table shows x = 1, 2, 3, 4, 5 and y = 3.1, 4.9, 7.2, 8.8, 11.0. Using a linear model, predict y when x = 8.
              </>
            }
            type={['table: x₁ = 1, 2, 3, 4, 5 and y₁ = 3.1, 4.9, 7.2, 8.8, 11.0', 'y_1 ~ m x_1 + b']}
            steps={[
              'Desmos reports m ≈ 1.97 and b ≈ 1.09, with r² ≈ 0.998: a very strong linear fit.',
              'Predict: 1.97(8) + 1.09 ≈ 16.85.',
            ]}
            answer="About 16.9."
          />
          <p>
            Other models work the same way: <code className={code}>y_1 ~ a x_1^2 + b x_1 + c</code> for a quadratic and{' '}
            <code className={code}>y_1 ~ a b^(x_1)</code> for an exponential.
          </p>
        </GuideSection>

        <GuideSection id="equivalent" title="9. Check equivalent expressions">
          <p>
            Graph the original expression and each answer choice as <em>y = …</em>. The equivalent choice lies exactly on top of the
            original everywhere; the others separate somewhere. Click a choice&rsquo;s colored circle to hide or show it.
          </p>
          <WorkedExample
            title="Which expression is equivalent?"
            problem={
              <>
                Which expression is equivalent to (2x + 3)² − (x + 1)²? Choices: 3x² + 10x + 8, 3x² + 14x + 10, 3x² + 8, 5x² + 14x + 10.
              </>
            }
            type={['y = (2x + 3)^2 - (x + 1)^2', 'y = 3x^2 + 10x + 8']}
            steps={[
              'The second graph sits exactly on the first; the other choices pull away.',
              'Spot-check at x = 2: the original gives 49 − 9 = 40, and 3(4) + 20 + 8 = 40.',
            ]}
            answer="3x² + 10x + 8."
          />
          <Tip title="Watch the domain">
            <p>
              Graphs that match on screen only match where both are defined. (x² − 9)/(x + 3) and x − 3 look identical, but the first is
              undefined at x = −3. Check any restriction the question mentions.
            </p>
          </Tip>
        </GuideSection>

        <GuideSection id="lists" title="10. Functions and lists">
          <p>
            Define a function once and evaluate it as often as you like: type <code className={code}>f(x) = x^2 - 3x</code>, then{' '}
            <code className={code}>f(5)</code> shows 10. Compositions like <code className={code}>f(g(2))</code> work too once g is defined.
          </p>
          <p>
            For data questions, lists save arithmetic: <code className={code}>mean([12, 15, 15, 18, 40])</code> gives 20 and{' '}
            <code className={code}>median([12, 15, 15, 18, 40])</code> gives 15. That shows at a glance how the outlier, 40, pulls the mean
            above the median.
          </p>
        </GuideSection>

        <GuideSection id="pitfalls" title="Common pitfalls">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>The answer is off screen.</strong> If you expect an intersection and don&rsquo;t see one, zoom out before deciding there
              isn&rsquo;t one.
            </li>
            <li>
              <strong>Missing parentheses.</strong> <code className={code}>1/2x</code> and <code className={code}>1/(2x)</code> are different
              functions. Check the typeset expression before you trust the graph.
            </li>
            <li>
              <strong>Angles.</strong> Desmos treats angles as radians by default, so sin(30) is not 0.5. Most SAT trigonometry is
              right-triangle reasoning anyway; if you do compute, convert first: sin(30π/180) = 0.5.
            </li>
            <li>
              <strong>Decimals against exact answers.</strong> Convert the answer choices to decimals and compare, rather than trying to
              recognize a decimal on sight.
            </li>
            <li>
              <strong>Over-using it.</strong> Typing takes time. If you can do it in your head in ten seconds, do.
            </li>
          </ul>
        </GuideSection>

        <GuideSection id="practice-title" title="How to practice">
          <p>
            Practice with the calculator you will actually use. Bluebook&rsquo;s full-length practice tests include the same built-in
            Desmos, so use it there under timed conditions. Between tests, keep{' '}
            <a href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline dark:text-accent-muted">
              desmos.com/calculator
            </a>{' '}
            open while you work StudyMondo&rsquo;s{' '}
            <Link href="/sat/qbank?domain=advanced&count=15&mode=tutor" className="font-medium text-accent hover:underline dark:text-accent-muted">
              Advanced Math practice sets
            </Link>{' '}
            and{' '}
            <Link href="/sat-grid-in" className="font-medium text-accent hover:underline dark:text-accent-muted">
              grid-in problems
            </Link>
            , and try each technique on purpose until it is automatic.
          </p>
        </GuideSection>

        <GuideSection id="faq-title" title="Frequently asked questions">
          <FaqList faqs={faqs} />
        </GuideSection>

        <GuideLinks keys={['diagnostic', 'strategy', 'bluebook', 'practice']} />
        <TrademarkNote />
      </article>
    </div>
  )
}
