/**
 * AP Calculus BC diagnostic v2, Unit 10: Infinite Sequences and Series
 * (10.1–10.15). No calculator. Convergence tests are the six the CED assesses
 * (nth-term, integral, direct and limit comparison, alternating series, ratio;
 * LIM-7.A.11), so no root test. Stimulus sets: a table of Taylor coefficients
 * with a Lagrange bound (calcbc-s1001), a power series and its derivative
 * (calcbc-s1002), a table of alternating partial sums (calcbc-s1003) and the
 * series for sin x / x (calcbc-s1004).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcbc-s1001",
    title: "Derivatives of f at x = 1",
    kind: "table",
    content:
      "A function $f$ has derivatives of all orders for all real numbers. The values of $f$ and its first three derivatives at $x = 1$ are given in the table, where $f^{(0)} = f$. " +
      "It is also known that $\\left|f^{(4)}(x)\\right| \\le 48$ for $1 \\le x \\le 1.5$.\n\n" +
      "| $n$ | 0 | 1 | 2 | 3 |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| $f^{(n)}(1)$ | 2 | $-3$ | 4 | $-12$ |",
  },
  {
    id: "calcbc-s1002",
    title: "A power series centered at x = 5",
    kind: "passage",
    content:
      "The function $f$ is defined by the power series $f(x) = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x - 5)^n}{n^2\\, 2^n}$ for all $x$ at which the series converges. " +
      "The radius of convergence of the series is 2. Differentiating term by term gives $f'(x) = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x - 5)^{n-1}}{n\\, 2^n}$, which has the same radius of convergence.",
  },
  {
    id: "calcbc-s1003",
    title: "Partial sums of an alternating series",
    kind: "table",
    content:
      "Let $S = \\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n+1}\\frac{4}{n^2 + 3}$. The terms $\\frac{4}{n^2 + 3}$ are positive and decrease to 0. " +
      "The table gives the partial sums $S_N = \\displaystyle\\sum_{n=1}^{N} (-1)^{n+1}\\frac{4}{n^2 + 3}$, rounded to four decimal places.\n\n" +
      "| $N$ | 1 | 2 | 3 | 4 | 5 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $S_N$ | 1.0000 | 0.4286 | 0.7619 | 0.5514 | 0.6942 |",
  },
  {
    id: "calcbc-s1004",
    title: "A series for sin x / x",
    kind: "passage",
    content:
      "The function $g$ is defined by $g(x) = \\dfrac{\\sin x}{x}$ for $x \\ne 0$ and $g(0) = 1$. The Maclaurin series for $\\sin x$ is $x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$, " +
      "so the Maclaurin series for $g$ is $1 - \\dfrac{x^2}{3!} + \\dfrac{x^4}{5!} - \\cdots$. The value of $\\displaystyle\\int_0^1 g(x)\\,dx$ cannot be found with an elementary antiderivative, so it is approximated with this series.",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcbc-s1001: Taylor coefficients and a Lagrange bound ----
  {
    id: "calcbc-s1001-q1",
    stimulusId: "calcbc-s1001",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "easy",
    stem: "What is the coefficient of $(x - 1)^3$ in the third-degree Taylor polynomial for $f$ about $x = 1$?",
    options: ["$-2$", "$-12$", "$-4$", "$-6$"],
    correctIndex: 0,
    explanation:
      "The coefficient of $(x - 1)^n$ is $\\frac{f^{(n)}(1)}{n!}$, so for $n = 3$ it is $\\frac{-12}{3!} = \\frac{-12}{6} = -2$. $-12$ forgets to divide by $3!$. $-4$ divides by 3 instead of $3! = 6$. $-6$ divides by $2!$.",
  },
  {
    id: "calcbc-s1001-q2",
    stimulusId: "calcbc-s1001",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "medium",
    stem: "What is the value at $x = 1.5$ of the third-degree Taylor polynomial for $f$ about $x = 1$?",
    options: ["$0.75$", "$1$", "$0$", "$0.5$"],
    correctIndex: 0,
    explanation:
      "$P_3(x) = 2 - 3(x - 1) + \\frac{4}{2!}(x - 1)^2 - \\frac{12}{3!}(x - 1)^3 = 2 - 3(x - 1) + 2(x - 1)^2 - 2(x - 1)^3$. At $x = 1.5$: $2 - 1.5 + 2(0.25) - 2(0.125) = 0.75$. 1 is $P_2(1.5)$, stopping before the cubic term. 0 leaves out the factorials: $2 - 1.5 + 4(0.25) - 12(0.125)$. 0.5 divides $f'''(1)$ by 3 instead of $3!$.",
  },
  {
    id: "calcbc-s1001-q3",
    stimulusId: "calcbc-s1001",
    unit: "unit-10",
    topicSlug: "lagrange-error-bound-calcbc",
    difficulty: "hard",
    stem: "The third-degree Taylor polynomial for $f$ about $x = 1$ is used to approximate $f(1.5)$. What is the Lagrange error bound for this approximation?",
    options: ["$0.125$", "$0.5$", "$0.25$", "$0.75$"],
    correctIndex: 0,
    explanation:
      "$\\left|f(1.5) - P_3(1.5)\\right| \\le \\frac{\\max\\left|f^{(4)}\\right|}{4!}\\,|1.5 - 1|^4 = \\frac{48}{24}(0.5)^4 = 2(0.0625) = 0.125$. 0.5 divides by $3!$ instead of $4!$. 0.25 uses $(0.5)^3$, the power for the degree instead of degree plus one. 0.75 divides by 4 instead of $4! = 24$.",
  },
  // ---- calcbc-s1002: power series and its derivative ----
  {
    id: "calcbc-s1002-q1",
    stimulusId: "calcbc-s1002",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "medium",
    stem: "What is the interval of convergence of the series for $f$?",
    options: ["$3 \\le x \\le 7$", "$3 < x < 7$", "$3 \\le x < 7$", "$3 < x \\le 7$"],
    correctIndex: 0,
    explanation:
      "The radius is 2 about the center $x = 5$, so check $x = 3$ and $x = 7$. At $x = 7$: $\\sum\\frac{2^n}{n^2 2^n} = \\sum\\frac{1}{n^2}$, a convergent $p$-series ($p = 2$). At $x = 3$: $\\sum\\frac{(-1)^n}{n^2}$, which converges absolutely. So the interval is $3 \\le x \\le 7$. The open interval skips the endpoint checks. $3 \\le x < 7$ is the pattern for a series like $\\sum\\frac{u^n}{n}$, whose right endpoint gives the harmonic series. $3 < x \\le 7$ drops $x = 3$, treating an alternating endpoint as divergent, although $\\sum\\frac{(-1)^n}{n^2}$ converges absolutely.",
  },
  {
    id: "calcbc-s1002-q2",
    stimulusId: "calcbc-s1002",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "hard",
    stem: "What is the interval of convergence of the series for $f'$?",
    options: ["$3 \\le x < 7$", "$3 \\le x \\le 7$", "$3 < x \\le 7$", "$3 < x < 7$"],
    correctIndex: 0,
    explanation:
      "The radius is still 2. At $x = 7$: $\\sum\\frac{2^{n-1}}{n\\,2^n} = \\sum\\frac{1}{2n}$, half the harmonic series, which diverges. At $x = 3$: $\\sum\\frac{(-2)^{n-1}}{n\\,2^n} = \\sum\\frac{(-1)^{n-1}}{2n}$, which converges by the alternating series test. So the interval is $3 \\le x < 7$. $3 \\le x \\le 7$ assumes term-by-term differentiation keeps the endpoints; only the radius is guaranteed. $3 < x \\le 7$ reverses which endpoint gives the alternating series. The open interval misses that the alternating endpoint converges.",
  },
  {
    id: "calcbc-s1002-q3",
    stimulusId: "calcbc-s1002",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "easy",
    stem: "What is the value of $f''(5)$?",
    options: ["$\\dfrac{1}{8}$", "$\\dfrac{1}{16}$", "$\\dfrac{1}{2}$", "$0$"],
    correctIndex: 0,
    explanation:
      "In a power series centered at $x = 5$, the coefficient of $(x - 5)^2$ is $\\frac{f''(5)}{2!}$. That coefficient is $\\frac{1}{2^2\\cdot 2^2} = \\frac{1}{16}$, so $f''(5) = 2!\\cdot\\frac{1}{16} = \\frac{1}{8}$. $\\frac{1}{16}$ is the coefficient itself, without multiplying by $2!$. $\\frac{1}{2}$ is $f'(5)$, the coefficient of $(x - 5)^1$. 0 is $f(5)$, since every term vanishes at the center.",
  },
  // ---- calcbc-s1003: alternating series partial sums ----
  {
    id: "calcbc-s1003-q1",
    stimulusId: "calcbc-s1003",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "easy",
    stem: "What is the alternating series error bound for the approximation $S \\approx S_4$?",
    options: ["$\\dfrac{4}{28}$", "$\\dfrac{4}{19}$", "$\\dfrac{4}{39}$", "$\\dfrac{4}{12}$"],
    correctIndex: 0,
    explanation:
      "For an alternating series whose terms decrease to 0, the error after $N$ terms is at most the first omitted term: $|S - S_4| \\le \\frac{4}{5^2 + 3} = \\frac{4}{28}$, which is $\\frac{1}{7}$. $\\frac{4}{19}$ is the last term used ($n = 4$). $\\frac{4}{39}$ is the term for $n = 6$, one term too far. $\\frac{4}{12}$ is the term for $n = 3$.",
  },
  {
    id: "calcbc-s1003-q2",
    stimulusId: "calcbc-s1003",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "medium",
    stem: "Based on the table, which interval must contain $S$?",
    options: ["$0.5514 < S < 0.6942$", "$0.6942 < S < 0.7619$", "$0.4286 < S < 0.5514$", "$0.6942 < S < 0.8371$"],
    correctIndex: 0,
    explanation:
      "For an alternating series with decreasing terms, the partial sums alternate above and below $S$, so $S$ lies between any two consecutive partial sums. With $S_4 = 0.5514$ below and $S_5 = 0.6942$ above, $0.5514 < S < 0.6942$. The interval from $0.6942$ to $0.7619$ uses $S_5$ and $S_3$, which are both above $S$. The interval from $0.4286$ to $0.5514$ uses $S_2$ and $S_4$, which are both below $S$. Adding the next term's size to $S_5$ moves the wrong way: $S_5$ is already too high, and the next term ($n = 6$) is subtracted.",
  },
  {
    id: "calcbc-s1003-q3",
    stimulusId: "calcbc-s1003",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "hard",
    stem: "Which statement about the series $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n+1}\\frac{4}{n^2 + 3}$ is true?",
    options: [
      "It converges absolutely, because $\\sum \\frac{4}{n^2 + 3}$ converges by comparison with $\\sum \\frac{4}{n^2}$.",
      "It converges conditionally, because it converges by the alternating series test but $\\sum \\frac{4}{n^2 + 3}$ diverges.",
      "It converges conditionally, because its terms alternate in sign.",
      "It diverges, because the partial sums in the table do not approach a single value.",
    ],
    correctIndex: 0,
    explanation:
      "$0 < \\frac{4}{n^2 + 3} < \\frac{4}{n^2}$, and $\\sum\\frac{4}{n^2}$ is a convergent $p$-series ($p = 2$), so the series of absolute values converges by the direct comparison test: the series converges absolutely. The absolute values do not diverge, so 'conditionally' is wrong. Alternating signs alone never decide between absolute and conditional convergence. The partial sums of a convergent alternating series oscillate while closing in on $S$; five of them cannot show divergence.",
  },
  // ---- calcbc-s1004: the series for sin x / x ----
  {
    id: "calcbc-s1004-q1",
    stimulusId: "calcbc-s1004",
    unit: "unit-10",
    topicSlug: "series-applications-calcbc",
    difficulty: "medium",
    stem: "The first two nonzero terms of the Maclaurin series for $g$ are integrated term by term to approximate $\\displaystyle\\int_0^1 g(x)\\,dx$. What is the approximation?",
    options: ["$\\dfrac{17}{18}$", "$\\dfrac{5}{6}$", "$1$", "$\\dfrac{19}{18}$"],
    correctIndex: 0,
    explanation:
      "$\\int_0^1\\left(1 - \\frac{x^2}{6}\\right)dx = \\left[x - \\frac{x^3}{18}\\right]_0^1 = 1 - \\frac{1}{18} = \\frac{17}{18}$. $\\frac{5}{6}$ subtracts $\\frac{x^2}{6}$ evaluated at $x = 1$ without integrating it. 1 uses only the first term. $\\frac{19}{18}$ adds the second term instead of subtracting it.",
  },
  {
    id: "calcbc-s1004-q2",
    stimulusId: "calcbc-s1004",
    unit: "unit-10",
    topicSlug: "series-applications-calcbc",
    difficulty: "hard",
    stem: "The approximation $\\displaystyle\\int_0^1 g(x)\\,dx \\approx \\int_0^1 \\left(1 - \\frac{x^2}{3!}\\right)dx$ is used. What is the alternating series error bound for this approximation?",
    options: ["$\\dfrac{1}{600}$", "$\\dfrac{1}{120}$", "$\\dfrac{1}{18}$", "$\\dfrac{1}{5040}$"],
    correctIndex: 0,
    explanation:
      "Integrating term by term gives the alternating series $1 - \\frac{1}{3\\cdot 3!} + \\frac{1}{5\\cdot 5!} - \\frac{1}{7\\cdot 7!} + \\cdots$, whose terms decrease to 0. The error is at most the first omitted term, $\\int_0^1\\frac{x^4}{5!}\\,dx = \\frac{1}{5\\cdot 120} = \\frac{1}{600}$. $\\frac{1}{120}$ uses the series term $\\frac{x^4}{5!}$ at $x = 1$ without integrating it. $\\frac{1}{18}$ is the last term used, not the first one omitted. $\\frac{1}{5040}$ is $\\frac{1}{7!}$, a term too far and not integrated.",
  },
  // ---- standalone: sequences ----
  {
    id: "calcbc-u10-001",
    unit: "unit-10",
    topicSlug: "infinite-sequences-calcbc",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{n\\to\\infty} n\\sin\\left(\\frac{3}{n}\\right)$?",
    options: ["$3$", "$0$", "$1$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "Let $u = \\frac{3}{n}$, so $u \\to 0$. Then $n\\sin\\frac{3}{n} = 3\\cdot\\frac{\\sin u}{u} \\to 3(1) = 3$. (L'Hospital's Rule on $\\frac{\\sin(3/x)}{1/x}$, a $\\frac{0}{0}$ form, gives the same value.) 0 assumes the factor $\\sin\\frac{3}{n} \\to 0$ wins the product. 1 uses $\\frac{\\sin u}{u} \\to 1$ but forgets the factor 3. The limit exists: the $\\infty\\cdot 0$ form resolves to 3.",
  },
  {
    id: "calcbc-u10-002",
    unit: "unit-10",
    topicSlug: "infinite-sequences-calcbc",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\lim_{n\\to\\infty} \\frac{4^n + n}{5\\cdot 4^n}$?",
    options: ["$\\dfrac{1}{5}$", "$0$", "$1$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "Divide the numerator and denominator by $4^n$: $\\frac{1 + n/4^n}{5}$. Since exponentials grow faster than polynomials, $\\frac{n}{4^n} \\to 0$, and the limit is $\\frac{1}{5}$. 0 treats the denominator as growing faster, but both grow like $4^n$. 1 ignores the factor 5. The extra $n$ in the numerator is negligible next to $4^n$, so the limit does exist.",
  },
  {
    id: "calcbc-u10-003",
    unit: "unit-10",
    topicSlug: "infinite-sequences-calcbc",
    difficulty: "medium",
    stem: "Which of the following sequences converges?",
    options: [
      "$a_n = \\dfrac{\\ln n}{\\sqrt{n}}$",
      "$a_n = \\dfrac{(-1)^n\\, n}{n + 3}$",
      "$a_n = \\dfrac{\\sqrt{n}}{\\ln n}$",
      "$a_n = \\cos(n\\pi)$",
    ],
    correctIndex: 0,
    explanation:
      "L'Hospital's Rule on $\\frac{\\ln x}{\\sqrt{x}}$ gives $\\frac{1/x}{1/(2\\sqrt{x})} = \\frac{2}{\\sqrt{x}} \\to 0$, so $\\frac{\\ln n}{\\sqrt{n}}$ converges to 0. $\\frac{(-1)^n n}{n + 3}$ alternates between values near $-1$ and near 1. $\\frac{\\sqrt{n}}{\\ln n}$ is the reciprocal of a positive sequence going to 0, so it grows without bound. $\\cos(n\\pi) = (-1)^n$ alternates between $-1$ and 1.",
  },
  // ---- standalone: series, geometric and the nth-term test ----
  {
    id: "calcbc-u10-004",
    unit: "unit-10",
    topicSlug: "infinite-series-calcbc",
    difficulty: "easy",
    stem: "What is the sum of the series $\\displaystyle\\sum_{n=0}^{\\infty} 10\\left(-\\frac{2}{3}\\right)^n$?",
    options: ["$6$", "$30$", "$-4$", "$10$"],
    correctIndex: 0,
    explanation:
      "This is a geometric series with first term 10 and ratio $r = -\\frac{2}{3}$, and $|r| < 1$, so its sum is $\\frac{10}{1 - (-2/3)} = \\frac{10}{5/3} = 6$. 30 uses $1 - \\frac{2}{3}$, losing the sign of $r$. $-4$ starts the series at $n = 1$, with first term $-\\frac{20}{3}$. 10 is the first term, not the sum.",
  },
  {
    id: "calcbc-u10-005",
    unit: "unit-10",
    topicSlug: "infinite-series-calcbc",
    difficulty: "medium",
    stem: "What is the sum of the series $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{3^n}{5^{n+1}}$?",
    options: ["$\\dfrac{9}{50}$", "$\\dfrac{9}{10}$", "$\\dfrac{3}{10}$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{3^n}{5^{n+1}} = \\frac{1}{5}\\left(\\frac{3}{5}\\right)^n$. The first term ($n = 2$) is $\\frac{1}{5}\\cdot\\frac{9}{25} = \\frac{9}{125}$ and the ratio is $\\frac{3}{5}$, so the sum is $\\frac{9/125}{1 - 3/5} = \\frac{9}{125}\\cdot\\frac{5}{2} = \\frac{9}{50}$. $\\frac{9}{10}$ drops the factor $\\frac{1}{5}$. $\\frac{3}{10}$ starts at $n = 1$. $\\frac{1}{2}$ starts at $n = 0$.",
  },
  {
    id: "calcbc-u10-006",
    unit: "unit-10",
    topicSlug: "infinite-series-calcbc",
    difficulty: "medium",
    stem: "A sequence of positive numbers satisfies $\\displaystyle\\lim_{n\\to\\infty} a_n = 0$. Which statement about $\\displaystyle\\sum_{n=1}^{\\infty} a_n$ is true?",
    options: [
      "The series may converge or may diverge.",
      "The series must converge, because its terms approach 0.",
      "The series must converge to 0, the limit of its terms.",
      "The series must diverge, because its terms never equal 0.",
    ],
    correctIndex: 0,
    explanation:
      "Terms that go to 0 are necessary for convergence but not sufficient: $\\sum\\frac{1}{n^2}$ converges and $\\sum\\frac{1}{n}$ diverges, and both have terms that go to 0. 'Must converge' reverses the $n$th-term test, which proves divergence only when the terms do not go to 0. 'Converges to 0' confuses the limit of the terms with the sum, which is positive here. Terms that never equal 0 can still add up to a finite sum, as $\\sum\\frac{1}{n^2}$ shows.",
  },
  // ---- standalone: convergence tests ----
  {
    id: "calcbc-u10-007",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "easy",
    stem: "Which of the following infinite series has a finite sum?",
    options: [
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.01}}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^{0.99}}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt[4]{n}}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n}{n + 1}$",
    ],
    correctIndex: 0,
    explanation:
      "A $p$-series $\\sum\\frac{1}{n^p}$ converges exactly when $p > 1$; $p = 1.01$ qualifies, even though it is close to the harmonic series. $p = 0.99$ and $p = \\frac{1}{4}$ are less than 1, so those series diverge. $\\frac{n}{n + 1} \\to 1 \\ne 0$, so that series diverges by the $n$th-term test.",
  },
  {
    id: "calcbc-u10-008",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "medium",
    stem: "Which statement about the series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{n^3 + 1}$ is true?",
    options: [
      "It diverges, because $\\displaystyle\\int_1^{\\infty} \\frac{x^2}{x^3 + 1}\\,dx$ diverges.",
      "It converges, because its terms are positive and $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^2}{n^3 + 1} = 0$.",
      "It converges by direct comparison, because $\\dfrac{n^2}{n^3 + 1} < \\dfrac{1}{n}$ for all $n \\ge 1$.",
      "It diverges by the $n$th-term test, because $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^2}{n^3 + 1} \\ne 0$.",
    ],
    correctIndex: 0,
    explanation:
      "$f(x) = \\frac{x^2}{x^3 + 1}$ is positive and continuous, and decreasing for $x \\ge 2$, and $\\int_1^b \\frac{x^2}{x^3 + 1}\\,dx = \\frac{1}{3}\\ln(b^3 + 1) - \\frac{1}{3}\\ln 2 \\to \\infty$, so the series diverges by the integral test. Terms that go to 0 do not make a series converge. Being smaller than the terms of the divergent series $\\sum\\frac{1}{n}$ proves nothing. The terms do go to 0, so the $n$th-term test cannot be the reason.",
  },
  {
    id: "calcbc-u10-009",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "medium",
    stem: "The series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\sqrt[3]{n}}{2n^2 - 1}$ is tested with the limit comparison test. Which comparison series gives a finite, positive limit, and what is the conclusion?",
    options: [
      "$\\displaystyle\\sum \\frac{1}{n^{5/3}}$; the series converges",
      "$\\displaystyle\\sum \\frac{1}{n^{2/3}}$; the series diverges",
      "$\\displaystyle\\sum \\frac{1}{n^{2}}$; the series converges",
      "$\\displaystyle\\sum \\frac{1}{n}$; the series diverges",
    ],
    correctIndex: 0,
    explanation:
      "For large $n$, $\\frac{n^{1/3}}{2n^2 - 1}$ behaves like $\\frac{n^{1/3}}{2n^2} = \\frac{1}{2n^{5/3}}$. With $b_n = \\frac{1}{n^{5/3}}$, $\\lim\\frac{a_n}{b_n} = \\lim\\frac{n^2}{2n^2 - 1} = \\frac{1}{2}$, finite and positive, and $\\sum b_n$ converges ($p = \\frac{5}{3} > 1$), so the series converges. $\\frac{1}{n^{2/3}}$ gives $\\lim\\frac{n}{2n^2 - 1} = 0$. $\\frac{1}{n^2}$ gives $\\lim\\frac{n^{7/3}}{2n^2 - 1} = \\infty$. $\\frac{1}{n}$ gives $\\lim\\frac{n^{4/3}}{2n^2 - 1} = 0$. A limit of 0 or $\\infty$ with these comparison series settles nothing.",
  },
  {
    id: "calcbc-u10-010",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "hard",
    stem: "Which of the following is a valid argument about the series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2 + \\cos n}{n}$?",
    options: [
      "It diverges, because $\\dfrac{2 + \\cos n}{n} \\ge \\dfrac{1}{n}$ and $\\sum \\dfrac{1}{n}$ diverges.",
      "It converges, because $\\dfrac{2 + \\cos n}{n} \\le \\dfrac{3}{n}$ for all $n$ and its terms approach 0.",
      "It converges by the alternating series test, because $\\cos n$ changes sign infinitely often.",
      "It diverges by the $n$th-term test, because $\\cos n$ has no limit as $n \\to \\infty$.",
    ],
    correctIndex: 0,
    explanation:
      "Since $\\cos n \\ge -1$, $2 + \\cos n \\ge 1$, so $\\frac{2 + \\cos n}{n} \\ge \\frac{1}{n} > 0$. The harmonic series diverges, so by the direct comparison test the larger series diverges too. Being below $\\frac{3}{n}$ proves nothing, because $\\sum\\frac{3}{n}$ diverges, and terms approaching 0 do not guarantee convergence. The terms are never negative, since $2 + \\cos n \\ge 1$, so the series is not alternating. The terms do go to 0 (they lie between $\\frac{1}{n}$ and $\\frac{3}{n}$), so the $n$th-term test does not apply.",
  },
  {
    id: "calcbc-u10-011",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "medium",
    stem: "The ratio test is applied to $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n\\, 2^n}{(n + 1)!}$. What is $L = \\displaystyle\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$, and what does the test conclude?",
    options: [
      "$L = 0$; the series converges",
      "$L = 2 > 1$; the series diverges",
      "$L = 1$; the test is inconclusive",
      "$L = \\infty$; the series diverges",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{a_{n+1}}{a_n} = \\frac{(n + 1)2^{n+1}}{(n + 2)!}\\cdot\\frac{(n + 1)!}{n\\,2^n} = \\frac{2(n + 1)}{n(n + 2)} \\to 0$. Since $L = 0 < 1$, the series converges. $L = 2$ keeps the factor $\\frac{2^{n+1}}{2^n}$ but drops $\\frac{(n + 1)!}{(n + 2)!} = \\frac{1}{n + 2}$. $L = 1$ looks only at $\\frac{n + 1}{n}$. $L = \\infty$ inverts the ratio, $\\frac{a_n}{a_{n+1}}$.",
  },
  {
    id: "calcbc-u10-012",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "medium",
    stem: "Which of the following best describes the series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt[3]{n} + 2}$?",
    options: [
      "It converges conditionally.",
      "It converges absolutely, because its terms approach 0.",
      "It diverges, because $\\sum \\dfrac{1}{\\sqrt[3]{n} + 2}$ diverges.",
      "It diverges, because its terms alternate in sign.",
    ],
    correctIndex: 0,
    explanation:
      "The terms $\\frac{1}{\\sqrt[3]{n} + 2}$ are positive, decreasing and go to 0, so the series converges by the alternating series test. The absolute values behave like $\\frac{1}{\\sqrt[3]{n}}$: $\\lim\\frac{1/(\\sqrt[3]{n} + 2)}{1/\\sqrt[3]{n}} = 1$, and $\\sum\\frac{1}{\\sqrt[3]{n}}$ diverges ($p = \\frac{1}{3}$), so the convergence is not absolute: it is conditional. Terms approaching 0 say nothing about absolute convergence; that depends on $\\sum\\left|a_n\\right|$. A divergent series of absolute values does not make the alternating series diverge. Alternating signs alone never cause divergence.",
  },
  {
    id: "calcbc-u10-013",
    unit: "unit-10",
    topicSlug: "convergence-tests-summary-calcbc",
    difficulty: "hard",
    stem: "The series $\\displaystyle\\sum_{n=1}^{\\infty} a_n$ converges, and $a_n > 0$ for all $n$. Which of the following series must also converge?",
    options: [
      "$\\displaystyle\\sum_{n=1}^{\\infty} a_n^{\\,2}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\sqrt{a_n}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{a_n}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\sqrt{n}\\,a_n$",
    ],
    correctIndex: 0,
    explanation:
      "Since $\\sum a_n$ converges, $a_n \\to 0$, so $0 < a_n < 1$ for all large $n$, and then $a_n^2 < a_n$. By the direct comparison test, $\\sum a_n^2$ converges. $\\sqrt{a_n}$ can be larger: $a_n = \\frac{1}{n^2}$ gives $\\sum\\frac{1}{n}$, which diverges. $\\frac{1}{a_n} \\to \\infty$, so $\\sum\\frac{1}{a_n}$ diverges by the $n$th-term test. $\\sqrt{n}\\,a_n$ can also diverge: $a_n = \\frac{1}{n^{3/2}}$ gives $\\sum\\frac{1}{n}$.",
  },
  // ---- standalone: alternating series error ----
  {
    id: "calcbc-u10-014",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "easy",
    stem: "The series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n!}$ is approximated by the sum of its first four terms. What is the alternating series error bound for this approximation?",
    options: ["$\\dfrac{1}{120}$", "$\\dfrac{1}{24}$", "$\\dfrac{1}{720}$", "$\\dfrac{1}{5}$"],
    correctIndex: 0,
    explanation:
      "The terms $\\frac{1}{n!}$ decrease to 0, so the error after four terms is at most the fifth term, $\\frac{1}{5!} = \\frac{1}{120}$. $\\frac{1}{24} = \\frac{1}{4!}$ is the last term used. $\\frac{1}{720} = \\frac{1}{6!}$ skips a term. $\\frac{1}{5}$ uses $\\frac{1}{n}$ instead of $\\frac{1}{n!}$.",
  },
  {
    id: "calcbc-u10-015",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "hard",
    stem: "What is the least number of terms of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2 + 1}$ whose sum is guaranteed, by the alternating series error bound, to be within $0.01$ of the sum of the series?",
    options: ["$9$", "$10$", "$8$", "$99$"],
    correctIndex: 0,
    explanation:
      "After $N$ terms the error is at most the next term, $\\frac{1}{(N + 1)^2 + 1}$. This is less than $0.01$ when $(N + 1)^2 + 1 > 100$, that is $(N + 1)^2 > 99$, so $N + 1 \\ge 10$ and $N \\ge 9$. Check: $N = 9$ gives a bound of $\\frac{1}{101} < 0.01$, and $N = 8$ gives $\\frac{1}{82} > 0.01$. 10 requires the last term used, $\\frac{1}{N^2 + 1}$, to be below 0.01. 8 stops one term early. 99 drops the square: $(N + 1) + 1 > 100$.",
  },
  {
    id: "calcbc-u10-016",
    unit: "unit-10",
    topicSlug: "alternating-series-calcbc",
    difficulty: "hard",
    stem: "Let $S = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{(n + 1)^2}$, and let $S_3$ be the sum of its first three terms. Which statement is true?",
    options: [
      "$S_3 > S$, and $S_3 - S \\le \\dfrac{1}{25}$",
      "$S_3 < S$, and $S - S_3 \\le \\dfrac{1}{25}$",
      "$S_3 > S$, and $S_3 - S \\le \\dfrac{1}{16}$",
      "$S_3 < S$, and $S - S_3 \\le \\dfrac{1}{16}$",
    ],
    correctIndex: 0,
    explanation:
      "$S_3 = \\frac{1}{4} - \\frac{1}{9} + \\frac{1}{16}$ ends with an added term, and the next term, $\\frac{1}{25}$, is subtracted. For an alternating series with decreasing terms, $S$ lies between $S_3$ and $S_4 = S_3 - \\frac{1}{25}$, so $S_3 > S$ and the overestimate is at most $\\frac{1}{25}$. $S_3 < S$ gets the direction backward. $\\frac{1}{16}$ is the last term used, $\\frac{1}{(3 + 1)^2}$, not the first omitted term, $\\frac{1}{(4 + 1)^2}$.",
  },
  // ---- standalone: Taylor and Maclaurin series ----
  {
    id: "calcbc-u10-017",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "easy",
    stem: "Which polynomial is made up of the first three nonzero terms of the Maclaurin series for $\\cos(2x)$?",
    options: [
      "$1 - 2x^2 + \\dfrac{2}{3}x^4$",
      "$1 - 2x^2 + 4x^4$",
      "$1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24}$",
      "$2x - \\dfrac{4}{3}x^3 + \\dfrac{4}{15}x^5$",
    ],
    correctIndex: 0,
    explanation:
      "Substitute $2x$ into $\\cos u = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\cdots$: $1 - \\frac{4x^2}{2} + \\frac{16x^4}{24} = 1 - 2x^2 + \\frac{2}{3}x^4$. $4x^4$ divides $16x^4$ by 4 instead of $4! = 24$. $1 - \\frac{x^2}{2} + \\frac{x^4}{24}$ is the series for $\\cos x$, without the substitution. The odd-power series is the one for $\\sin(2x)$.",
  },
  {
    id: "calcbc-u10-018",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "medium",
    stem: "What is the second-degree Taylor polynomial for $f(x) = \\dfrac{1}{x^2}$ about $x = 1$?",
    options: [
      "$1 - 2(x - 1) + 3(x - 1)^2$",
      "$1 - 2(x - 1) + 6(x - 1)^2$",
      "$1 + 2(x - 1) + 3(x - 1)^2$",
      "$1 - 2x + 3x^2$",
    ],
    correctIndex: 0,
    explanation:
      "$f(1) = 1$; $f'(x) = -2x^{-3}$, so $f'(1) = -2$; $f''(x) = 6x^{-4}$, so $f''(1) = 6$. Then $P_2(x) = 1 - 2(x - 1) + \\frac{6}{2!}(x - 1)^2 = 1 - 2(x - 1) + 3(x - 1)^2$. $6(x - 1)^2$ forgets to divide by $2!$. $+2(x - 1)$ loses the sign of $f'(1)$. $1 - 2x + 3x^2$ uses powers of $x$, which centers the polynomial at 0 instead of 1.",
  },
  {
    id: "calcbc-u10-019",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "medium",
    stem: "The function $f$ is given by $f(x) = \\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(n + 1)!}$. What is the value of $f^{(4)}(0)$?",
    options: ["$4$", "$\\dfrac{1}{6}$", "$-4$", "$\\dfrac{2}{3}$"],
    correctIndex: 0,
    explanation:
      "The $x^4$ term comes from $n = 2$: $\\frac{(-1)^2 x^4}{3!} = \\frac{x^4}{6}$. That coefficient equals $\\frac{f^{(4)}(0)}{4!}$, so $f^{(4)}(0) = 24\\cdot\\frac{1}{6} = 4$. $\\frac{1}{6}$ is the coefficient, not the derivative. $-4$ uses the sign $(-1)^1$ of the $x^2$ term. $\\frac{2}{3}$ multiplies the coefficient by 4 instead of $4! = 24$.",
  },
  {
    id: "calcbc-u10-020",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "hard",
    stem: "What is the coefficient of $x^6$ in the Maclaurin series for $x^2\\cos\\left(x^2\\right)$?",
    options: ["$-\\dfrac{1}{2}$", "$\\dfrac{1}{24}$", "$-\\dfrac{1}{720}$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\cos u = 1 - \\frac{u^2}{2} + \\frac{u^4}{24} - \\cdots$, so with $u = x^2$, $\\cos(x^2) = 1 - \\frac{x^4}{2} + \\frac{x^8}{24} - \\cdots$. Multiplying by $x^2$ gives $x^2 - \\frac{x^6}{2} + \\frac{x^{10}}{24} - \\cdots$, so the coefficient of $x^6$ is $-\\frac{1}{2}$. $\\frac{1}{24}$ multiplies the $\\frac{x^4}{24}$ term of $\\cos x$ by $x^2$ without substituting $x^2$ for $x$. $-\\frac{1}{720}$ is the coefficient of $x^6$ in $\\cos x$ itself. $\\frac{1}{2}$ drops the sign.",
  },
  {
    id: "calcbc-u10-021",
    unit: "unit-10",
    topicSlug: "series-applications-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x\\to 0}\\frac{1 - \\cos(2x) - 2x^2}{x^4}$?",
    options: ["$-\\dfrac{2}{3}$", "$\\dfrac{2}{3}$", "$-\\dfrac{1}{24}$", "$0$"],
    correctIndex: 0,
    explanation:
      "$\\cos(2x) = 1 - 2x^2 + \\frac{2}{3}x^4 - \\cdots$, so $1 - \\cos(2x) - 2x^2 = -\\frac{2}{3}x^4 + (\\text{higher powers of } x)$. Dividing by $x^4$ and letting $x \\to 0$ gives $-\\frac{2}{3}$. $\\frac{2}{3}$ drops the sign when the series is subtracted. $-\\frac{1}{24}$ uses $\\frac{x^4}{4!}$ for the fourth-power term, forgetting the factor $2^4 = 16$. 0 assumes every term of the numerator cancels.",
  },
  {
    id: "calcbc-u10-022",
    unit: "unit-10",
    topicSlug: "series-applications-calcbc",
    difficulty: "medium",
    stem: "The Maclaurin series $\\arctan x = \\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n + 1}$ converges for $-1 \\le x \\le 1$. What is the sum of the series $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n + 1)\\,3^n}$?",
    options: ["$\\dfrac{\\sqrt{3}\\,\\pi}{6}$", "$\\dfrac{\\pi}{6}$", "$\\dfrac{\\pi}{4}$", "$\\dfrac{\\pi}{3}$"],
    correctIndex: 0,
    explanation:
      "$\\arctan x = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n + 1}$ for $|x| \\le 1$. With $x = \\frac{1}{\\sqrt{3}}$, $x^{2n+1} = \\frac{1}{\\sqrt{3}}\\cdot\\frac{1}{3^n}$, so $\\arctan\\frac{1}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}}\\sum\\frac{(-1)^n}{(2n + 1)3^n}$. The sum is $\\sqrt{3}\\cdot\\frac{\\pi}{6} = \\frac{\\sqrt{3}\\,\\pi}{6}$. $\\frac{\\pi}{6}$ forgets the factor $\\sqrt{3}$ from $x^{2n+1}$. $\\frac{\\pi}{4}$ is the sum with $x = 1$. $\\frac{\\pi}{3}$ is $\\arctan\\sqrt{3}$, using $x^2 = 3$ instead of $\\frac{1}{3}$.",
  },
  {
    id: "calcbc-u10-023",
    unit: "unit-10",
    topicSlug: "taylor-maclaurin-series-calcbc",
    difficulty: "easy",
    stem: "Which of the following is the Maclaurin series for $\\dfrac{1}{1 + 4x^2}$?",
    options: [
      "$\\displaystyle\\sum_{n=0}^{\\infty} (-1)^n 4^n x^{2n}$",
      "$\\displaystyle\\sum_{n=0}^{\\infty} (-1)^n 4 x^{2n}$",
      "$\\displaystyle\\sum_{n=0}^{\\infty} 4^n x^{2n}$",
      "$\\displaystyle\\sum_{n=0}^{\\infty} (-1)^n 2^n x^{2n}$",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{1}{1 + u} = \\sum_{n=0}^{\\infty}(-1)^n u^n$ for $|u| < 1$. With $u = 4x^2$, $(4x^2)^n = 4^n x^{2n}$. $4x^{2n}$ raises only $x^2$ to the $n$th power, not the 4. Dropping $(-1)^n$ gives the series for $\\frac{1}{1 - 4x^2}$. $2^n x^{2n}$ substitutes $u = 2x^2$, confusing $4x^2 = (2x)^2$ with $2x^2$.",
  },
  {
    id: "calcbc-u10-024",
    unit: "unit-10",
    topicSlug: "series-applications-calcbc",
    difficulty: "medium",
    stem: "Let $g(x) = \\displaystyle\\int_0^x \\frac{1}{1 + t^3}\\,dt$. What is the coefficient of $x^{10}$ in the Maclaurin series for $g$?",
    options: ["$-\\dfrac{1}{10}$", "$\\dfrac{1}{10}$", "$-1$", "$-\\dfrac{1}{9}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{1}{1 + t^3} = 1 - t^3 + t^6 - t^9 + \\cdots$. Integrating from 0 to $x$ term by term: $g(x) = x - \\frac{x^4}{4} + \\frac{x^7}{7} - \\frac{x^{10}}{10} + \\cdots$, so the coefficient is $-\\frac{1}{10}$. $\\frac{1}{10}$ loses the sign of the $t^9$ term. $-1$ is the coefficient of $t^9$ before integrating. $-\\frac{1}{9}$ divides by the old exponent instead of the new one.",
  },
  // ---- standalone: Lagrange error bound ----
  {
    id: "calcbc-u10-025",
    unit: "unit-10",
    topicSlug: "lagrange-error-bound-calcbc",
    difficulty: "hard",
    stem: "The second-degree Taylor polynomial for $f(x) = \\sqrt{1 + x}$ about $x = 0$ is used to approximate $\\sqrt{1.1}$. Given that $f'''(x) = \\dfrac{3}{8}(1 + x)^{-5/2}$, which of the following is the Lagrange error bound for this approximation?",
    options: [
      "$\\dfrac{3}{8}\\cdot\\dfrac{(0.1)^3}{3!}$",
      "$\\dfrac{3}{8}\\cdot\\dfrac{(0.1)^3}{2!}$",
      "$\\dfrac{3}{8}(1.1)^{-5/2}\\cdot\\dfrac{(0.1)^3}{3!}$",
      "$\\dfrac{1}{4}\\cdot\\dfrac{(0.1)^2}{2!}$",
    ],
    correctIndex: 0,
    explanation:
      "The bound is $\\frac{M}{3!}|0.1 - 0|^3$, where $M$ is the maximum of $|f'''(x)|$ for $0 \\le x \\le 0.1$. Since $(1 + x)^{-5/2}$ decreases, the maximum is at $x = 0$: $M = \\frac{3}{8}$. Dividing by $2!$ uses the degree instead of degree plus one. The factor $(1.1)^{-5/2}$ takes $|f'''|$ at the right endpoint, where it is smallest, so the result is not a bound. $\\frac{1}{4}\\cdot\\frac{(0.1)^2}{2!}$ uses $|f''(0)| = \\frac{1}{4}$ and the second power: that is the size of the last term used, not the error.",
  },
  {
    id: "calcbc-u10-026",
    unit: "unit-10",
    topicSlug: "lagrange-error-bound-calcbc",
    difficulty: "medium",
    stem: "The fourth-degree Taylor polynomial $P_4$ for a function $f$ about $x = 0$ is used to approximate $f(0.5)$, and $\\left|f^{(5)}(x)\\right| \\le 3$ for $0 \\le x \\le 0.5$. Which statement must be true?",
    options: [
      "$\\left|f(0.5) - P_4(0.5)\\right| \\le \\dfrac{1}{1280}$",
      "$\\left|f(0.5) - P_4(0.5)\\right| = \\dfrac{1}{1280}$",
      "$\\left|f(0.5) - P_4(0.5)\\right| \\le \\dfrac{1}{256}$",
      "$\\left|f(0.5) - P_4(0.5)\\right| \\le \\dfrac{3}{32}$",
    ],
    correctIndex: 0,
    explanation:
      "The Lagrange error bound gives $\\left|f(0.5) - P_4(0.5)\\right| \\le \\frac{3}{5!}(0.5)^5 = \\frac{3}{120}\\cdot\\frac{1}{32} = \\frac{1}{1280}$. The bound is a ceiling on the error, not its exact value, so the equation is not guaranteed. $\\frac{1}{256}$ divides by $4!$ instead of $5!$. $\\frac{3}{32}$ leaves out the factorial.",
  },
  // ---- standalone: power series ----
  {
    id: "calcbc-u10-027",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "easy",
    stem: "What is the radius of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n\\,(x + 2)^n}{5^n}$?",
    options: ["$5$", "$\\dfrac{1}{5}$", "$2$", "$\\infty$"],
    correctIndex: 0,
    explanation:
      "Ratio test: $\\left|\\frac{(n + 1)(x + 2)^{n+1}/5^{n+1}}{n(x + 2)^n/5^n}\\right| = \\frac{n + 1}{n}\\cdot\\frac{|x + 2|}{5} \\to \\frac{|x + 2|}{5}$. Convergence needs $\\frac{|x + 2|}{5} < 1$, so $|x + 2| < 5$ and the radius is 5. $\\frac{1}{5}$ reports the coefficient in the limit instead of solving for $|x + 2|$. 2 is the distance from the center $-2$ to the origin, which is unrelated to the radius. $\\infty$ would need a limit of 0 for every $x$, as happens with a factorial in the denominator.",
  },
  {
    id: "calcbc-u10-028",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "medium",
    stem: "For exactly which values of $x$ does the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(3x)^n}{n^2}$ converge?",
    options: [
      "$-\\dfrac{1}{3} \\le x \\le \\dfrac{1}{3}$",
      "$-\\dfrac{1}{3} < x < \\dfrac{1}{3}$",
      "$-3 \\le x \\le 3$",
      "$-\\dfrac{1}{3} < x \\le \\dfrac{1}{3}$",
    ],
    correctIndex: 0,
    explanation:
      "The ratio test gives the limit $|3x|$, so the series converges for $|3x| < 1$, that is $|x| < \\frac{1}{3}$. At $x = \\frac{1}{3}$ the series is $\\sum\\frac{1}{n^2}$, which converges ($p = 2$). At $x = -\\frac{1}{3}$ it is $\\sum\\frac{(-1)^n}{n^2}$, which converges absolutely. Both endpoints are included. The open interval skips the endpoint checks. $-3 \\le x \\le 3$ solves $|3x| < 1$ as $|x| < 3$. Excluding $x = -\\frac{1}{3}$ treats that endpoint as if it gave a divergent series.",
  },
  {
    id: "calcbc-u10-029",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "hard",
    stem: "A power series $\\displaystyle\\sum_{n=0}^{\\infty} a_n (x - 3)^n$ converges at $x = 7$ and diverges at $x = -2$. Which of the following must be true?",
    options: [
      "The series converges at $x = 0$.",
      "The series converges at $x = -1$.",
      "The series diverges at $x = 7.5$.",
      "The series converges at $x = 9.5$.",
    ],
    correctIndex: 0,
    explanation:
      "Converging at $x = 7$, a distance of 4 from the center 3, means the radius $R \\ge 4$; diverging at $x = -2$, a distance of 5, means $R \\le 5$. Every $x$ with $|x - 3| < 4$ is inside the interval of convergence, so $x = 0$ (distance 3) must converge. $x = -1$ is at distance exactly 4: if $R = 4$, it is an endpoint, which may diverge. $x = 7.5$ is at distance 4.5: it is inside the interval if $R = 5$, so it may converge. $x = 9.5$ is at distance $6.5 > 5$, so the series must diverge there.",
  },
  {
    id: "calcbc-u10-030",
    unit: "unit-10",
    topicSlug: "power-series-calcbc",
    difficulty: "easy",
    stem: "For $|x| < 3$, $f(x) = \\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{3^n}$. Which of the following is a series for $f'(x)$?",
    options: [
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n\\,x^{n-1}}{3^n}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{3^{n-1}}$",
      "$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{(n + 1)\\,3^n}$",
      "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n\\,x^{n-1}}{3^{n-1}}$",
    ],
    correctIndex: 0,
    explanation:
      "Differentiate term by term: $\\frac{d}{dx}\\frac{x^n}{3^n} = \\frac{n x^{n-1}}{3^n}$; the $n = 0$ term is a constant, so the new sum starts at $n = 1$. $\\frac{x^{n-1}}{3^{n-1}}$ only lowers the exponents, dropping the factor $n$ and changing the constant $3^n$. The series with $\\frac{x^{n+1}}{n + 1}$ is an antiderivative. $\\frac{n x^{n-1}}{3^{n-1}}$ also lowers the power of 3, which is a constant and does not change when differentiating.",
  },
]
