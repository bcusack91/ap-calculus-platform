/**
 * Entrance Quiz — Transformations — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Translations
  {
    id: 'trp-ent-1a',
    question: 'The function $f$ has domain $[-3, 4]$ and range $[0, 6]$. What are the domain and range of $g(x) = f(x + 2) - 5$?',
    options: ['Domain $[-1, 6]$, range $[-5, 1]$', 'Domain $[-5, 2]$, range $[-5, 1]$', 'Domain $[-5, 2]$, range $[5, 11]$', 'Domain $[-1, 6]$, range $[5, 11]$'],
    correctIndex: 1,
    explanation: 'The $+2$ inside shifts every input left 2, giving $[-5, 2]$, and the $-5$ outside shifts every output down 5, giving $[-5, 1]$. Moving the domain right confuses the direction of a horizontal shift.',
    partNumber: 1,
    partTitle: 'Translations',
  },
  {
    id: 'trp-ent-1b',
    question: 'A translation moves the point $(-1, 5)$ on the graph of $f$ to the point $(3, 2)$ on the graph of $g$. Which rule gives $g$?',
    options: ['$g(x) = f(x + 4) - 3$', '$g(x) = f(x - 4) + 3$', '$g(x) = f(x - 4) - 3$', '$g(x) = f(x - 3) - 4$'],
    correctIndex: 2,
    explanation: 'The point moves right 4 and down 3. Right 4 is written $f(x - 4)$ and down 3 is $-3$ outside, so $g(x) = f(x - 4) - 3$.',
    partNumber: 1,
    partTitle: 'Translations',
  },
  // Part 2 — Reflections
  {
    id: 'trp-ent-2a',
    question: 'Which function is odd?',
    options: ['$f(x) = (x - 1)^3$', '$f(x) = x^3 + 1$', '$f(x) = x^4 - x^2$', '$f(x) = 2x^3$'],
    correctIndex: 3,
    explanation: '$f(-x) = 2(-x)^3 = -2x^3 = -f(x)$, so $2x^3$ is odd. Adding a constant or shifting a cubic breaks origin symmetry, and $x^4 - x^2$ is even.',
    partNumber: 2,
    partTitle: 'Reflections',
  },
  {
    id: 'trp-ent-2b',
    question: 'The point $(-2, 6)$ lies on the graph of $f$. Which point lies on the graph of $y = f(-x) + 1$?',
    options: ['$(2, 7)$', '$(-2, -5)$', '$(2, -5)$', '$(-2, 7)$'],
    correctIndex: 0,
    explanation: 'Negating the input reflects across the $y$-axis, so $x = -2$ becomes $2$; adding 1 outside raises the output to $7$. Negating the output instead would reflect across the $x$-axis.',
    partNumber: 2,
    partTitle: 'Reflections',
  },
  // Part 3 — Stretches & Compressions
  {
    id: 'trp-ent-3a',
    question: 'The graph of $f$ has $x$-intercepts $-6$ and $9$ and $y$-intercept $4$. What are the intercepts of $g(x) = 2f(3x)$?',
    options: ['$x$-intercepts $-18$ and $27$; $y$-intercept $8$', '$x$-intercepts $-2$ and $3$; $y$-intercept $4$', '$x$-intercepts $-2$ and $3$; $y$-intercept $8$', '$x$-intercepts $-12$ and $18$; $y$-intercept $12$'],
    correctIndex: 2,
    explanation: 'The factor 3 inside divides every $x$-value by 3, so the zeros move to $-2$ and $3$; the factor 2 outside doubles every output, so $g(0) = 2f(0) = 8$. Multiplying the zeros by 3 reverses the horizontal effect.',
    partNumber: 3,
    partTitle: 'Stretches & Compressions',
  },
  {
    id: 'trp-ent-3b',
    question: 'The point $(-8, 3)$ lies on the graph of $f$. Which point lies on the graph of $y = \\tfrac{1}{2}f\\left(\\tfrac{1}{4}x\\right)$?',
    options: ['$(-2, 1.5)$', '$(-32, 6)$', '$(-2, 6)$', '$(-32, 1.5)$'],
    correctIndex: 3,
    explanation: 'The input must still be $-8$: $\\tfrac{1}{4}x = -8$ gives $x = -32$, and the output is halved to $1.5$. Dividing $-8$ by 4 treats the inside factor as a compression.',
    partNumber: 3,
    partTitle: 'Stretches & Compressions',
  },
  // Part 4 — Combined Transformations
  {
    id: 'trp-ent-4a',
    question: 'What are the domain and range of $y = -2\\sqrt{3 - x} + 1$?',
    options: ['$x \\le 3$, $y \\le 1$', '$x \\le 3$, $y \\ge 1$', '$x \\ge -3$, $y \\ge 1$', '$x \\ge 3$, $y \\le 1$'],
    correctIndex: 0,
    explanation: 'The radicand $3 - x$ must be nonnegative, so $x \\le 3$. The square root is at least 0, multiplying by $-2$ makes that part at most 0, and adding 1 gives $y \\le 1$.',
    partNumber: 4,
    partTitle: 'Combined Transformations',
  },
  {
    id: 'trp-ent-4b',
    question: 'The point $(4, 6)$ lies on the graph of $f$. Which point lies on the graph of $y = 3f(2x - 8) - 5$?',
    options: ['$(10, 13)$', '$(6, 13)$', '$(6, 3)$', '$(-2, 13)$'],
    correctIndex: 1,
    explanation: 'Factor the inside as $2(x - 4)$: divide $4$ by 2 and then add 4 to get $x = 6$; the output becomes $3(6) - 5 = 13$. Reading the shift as 8 gives $x = 10$.',
    partNumber: 4,
    partTitle: 'Combined Transformations',
  },
  // Part 5 — Parent Functions Gallery
  {
    id: 'trp-ent-5a',
    question: 'A parent function has domain all real numbers, range $(0, \\infty)$, and passes through $(0, 1)$. Which function is it?',
    options: ['$y = x^2$', '$y = \\sqrt[3]{x}$', '$y = \\log x$', '$y = 2^x$'],
    correctIndex: 3,
    explanation: 'The exponential $2^x$ accepts every input, outputs only positive values, and equals 1 at $x = 0$. The parabola $x^2$ reaches 0, so its range is $[0, \\infty)$.',
    partNumber: 5,
    partTitle: 'Parent Functions Gallery',
  },
  {
    id: 'trp-ent-5b',
    question: 'Which parent function has a vertical asymptote and is defined only for positive inputs?',
    options: ['$y = \\log x$', '$y = \\sqrt{x}$', '$y = \\dfrac{1}{x}$', '$y = 2^x$'],
    correctIndex: 0,
    explanation: '$\\log x$ is defined only for $x > 0$ and has the vertical asymptote $x = 0$. The reciprocal also has that asymptote but accepts negative inputs, and $\\sqrt{x}$ is defined at $0$ with no asymptote.',
    partNumber: 5,
    partTitle: 'Parent Functions Gallery',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'trp-ent-6a',
    question: 'A V-shaped graph made from $y = \\lvert x \\rvert$ has its vertex at $(-1, 4)$ and passes through $(2, -2)$. Which equation describes it?',
    options: ['$y = 2\\lvert x + 1 \\rvert + 4$', '$y = -2\\lvert x + 1 \\rvert + 4$', '$y = -2\\lvert x - 1 \\rvert + 4$', '$y = -\\tfrac{1}{2}\\lvert x + 1 \\rvert + 4$'],
    correctIndex: 1,
    explanation: 'Use $y = a\\lvert x + 1 \\rvert + 4$ and the point: $-2 = a(3) + 4$, so $a = -2$. The form with $\\lvert x - 1 \\rvert$ puts the vertex at $x = 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'trp-ent-6b',
    question: 'The graph of $y = a \\cdot b^x + k$ has horizontal asymptote $y = -3$, $y$-intercept $1$, and passes through $(1, 9)$. Which equation is it?',
    options: ['$y = 4 \\cdot 3^x + 3$', '$y = 4 \\cdot 2^x - 3$', '$y = 4 \\cdot 3^x - 3$', '$y = 1 \\cdot 9^x - 3$'],
    correctIndex: 2,
    explanation: 'The asymptote gives $k = -3$, the intercept gives $a - 3 = 1$ so $a = 4$, and the point gives $4b - 3 = 9$ so $b = 3$. Using $+3$ would put the asymptote at $y = 3$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Review & Applications
  {
    id: 'trp-ent-7a',
    question: 'The function $f$ has domain $[-2, 6]$. What is the domain of $g(x) = f\\left(-\\tfrac{1}{2}x + 1\\right)$?',
    options: ['$[-10, 6]$', '$[-6, 10]$', '$[-2, 2]$', '$[-14, 2]$'],
    correctIndex: 0,
    explanation: 'Require $-2 \\le -\\tfrac{1}{2}x + 1 \\le 6$: subtract 1 to get $-3 \\le -\\tfrac{1}{2}x \\le 5$, then multiply by $-2$ and flip to get $-10 \\le x \\le 6$. The interval $[-2, 2]$ plugs the endpoints into the inside instead of solving for $x$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'trp-ent-7b',
    question: 'The average rate of change of $f$ on $[1, 3]$ is $4$. What is the average rate of change of $g(x) = 3f(x) - 2$ on $[1, 3]$?',
    options: ['$10$', '$12$', '$4$', '$6$'],
    correctIndex: 1,
    explanation: '$\\tfrac{g(3) - g(1)}{2} = \\tfrac{3f(3) - 3f(1)}{2} = 3 \\cdot 4 = 12$. The vertical shift of $-2$ cancels in the difference, so $10$ is wrong, while the vertical stretch multiplies the rate by 3.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Translations' },
    { partNumber: 2, partTitle: 'Reflections' },
    { partNumber: 3, partTitle: 'Stretches & Compressions' },
    { partNumber: 4, partTitle: 'Combined Transformations' },
    { partNumber: 5, partTitle: 'Parent Functions Gallery' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
