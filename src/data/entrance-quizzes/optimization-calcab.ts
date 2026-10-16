/**
 * Entrance Quiz — Optimization (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Setting Up Optimization Problems
  {
    id: 'opt-ent-1a',
    question: 'A closed box with a square base of side $x$ must hold a volume of $64$. Which function of $x$ should be minimized to use the least material?',
    options: ['$S(x) = 2x^2 + \\frac{256}{x}$', '$S(x) = x^2 + \\frac{256}{x}$', '$S(x) = 2x^2 + \\frac{64}{x}$', '$S(x) = 2x^2 + 4x$'],
    correctIndex: 0,
    explanation: 'The surface area is $2x^2 + 4xh$ (top, bottom and four sides). The constraint $x^2h = 64$ gives $h = \\frac{64}{x^2}$, so $4xh = \\frac{256}{x}$. Using $x^2$ alone would describe an open-top box.',
    partNumber: 1,
    partTitle: 'Setting Up Optimization Problems',
  },
  {
    id: 'opt-ent-1b',
    question: 'An area function $A(x)$ is differentiable on $0 < x < 10$ and has exactly one critical point, $x = 4$, where $A\'\'(4) = -3$. What can be concluded?',
    options: ['$A$ has an absolute minimum at $x = 4$', '$A$ has an absolute maximum at $x = 4$', '$A$ has a local maximum but no absolute maximum', 'The endpoints $x = 0$ and $x = 10$ give the maximum'],
    correctIndex: 1,
    explanation: '$A\'\'(4) < 0$ makes $x = 4$ a local maximum, and because it is the only critical point on the interval, $A$ cannot rise above that value anywhere else. So it is the absolute maximum.',
    partNumber: 1,
    partTitle: 'Setting Up Optimization Problems',
  },
  // Part 2 — Geometric Optimization
  {
    id: 'opt-ent-2a',
    question: 'An open-top box is made by cutting squares of side $x$ from the corners of an $18 \\times 18$ sheet and folding up the sides. What is the largest possible volume?',
    options: ['$864$', '$108$', '$432$', '$144$'],
    correctIndex: 2,
    explanation: '$V(x) = x(18 - 2x)^2$ on $0 < x < 9$. Then $V\'(x) = (18 - 2x)(18 - 6x) = 0$ gives $x = 3$ in the domain, and $V(3) = 3 \\cdot 12^2 = 432$. Forgetting the factor 2 in $18 - 2x$ leads to 864.',
    partNumber: 2,
    partTitle: 'Geometric Optimization',
  },
  {
    id: 'opt-ent-2b',
    question: 'Which point on the parabola $y = x^2$ is closest to the point $(3, 0)$?',
    options: ['$\\left(\\frac{3}{2}, \\frac{9}{4}\\right)$', '$\\left(\\frac{1}{2}, \\frac{1}{4}\\right)$', '$(3, 9)$', '$(1, 1)$'],
    correctIndex: 3,
    explanation: 'Minimize $D^2 = (x - 3)^2 + x^4$: $2(x - 3) + 4x^3 = 0$, or $2x^3 + x - 3 = 0$, which has root $x = 1$. The point is $(1, 1)$. Writing $y$ instead of $y^2$ in the distance gives $\\left(\\frac{3}{2}, \\frac{9}{4}\\right)$.',
    partNumber: 2,
    partTitle: 'Geometric Optimization',
  },
  // Part 3 — Cost & Revenue Optimization
  {
    id: 'opt-ent-3a',
    question: 'Items sell at price $p = 60 - 0.5x$ dollars when $x$ are sold, and the cost of making $x$ items is $C(x) = 10x + 300$ dollars. What is the maximum profit?',
    options: ['$\\$950$', '$\\$1{,}250$', '$\\$1{,}800$', '$\\$1{,}750$'],
    correctIndex: 0,
    explanation: 'Profit is $P(x) = x(60 - 0.5x) - (10x + 300) = 50x - 0.5x^2 - 300$. Then $P\'(x) = 50 - x = 0$ at $x = 50$, and $P(50) = 2500 - 1250 - 300 = 950$. The value $\\$1{,}800$ is the maximum revenue, not profit.',
    partNumber: 3,
    partTitle: 'Cost & Revenue Optimization',
  },
  {
    id: 'opt-ent-3b',
    question: 'The cost of producing $x$ units is $C(x) = 2x^2 + 50x + 800$. At what production level is the average cost $\\frac{C(x)}{x}$ smallest?',
    options: ['$x = 400$', '$x = 20$', '$x = 20\\sqrt{2}$', '$x = 800$'],
    correctIndex: 1,
    explanation: 'Average cost is $2x + 50 + \\frac{800}{x}$, with derivative $2 - \\frac{800}{x^2} = 0$ at $x^2 = 400$, so $x = 20$. Stopping at $x^2 = 400$ gives the distractor 400.',
    partNumber: 3,
    partTitle: 'Cost & Revenue Optimization',
  },
  // Part 4 — 3D Optimization (Cylinders & Cones)
  {
    id: 'opt-ent-4a',
    question: 'A closed cylindrical can must hold $128\\pi$ cm$^3$. What radius, in cm, minimizes its total surface area?',
    options: ['$r = 8$', '$r = 2$', '$r = 4$', '$r = 4\\sqrt[3]{2}$'],
    correctIndex: 2,
    explanation: 'With $h = \\frac{128}{r^2}$, $S = 2\\pi r^2 + \\frac{256\\pi}{r}$ and $S\' = 4\\pi r - \\frac{256\\pi}{r^2} = 0$ gives $r^3 = 64$, so $r = 4$ (and $h = 8 = 2r$). The value $4\\sqrt[3]{2}$ is the answer for an open-top can.',
    partNumber: 4,
    partTitle: '3D Optimization (Cylinders & Cones)',
  },
  {
    id: 'opt-ent-4b',
    question: 'An open-top box with a square base must hold $500$ cm$^3$ using the least material. How do its optimal dimensions compare?',
    options: ['The height equals the base side', 'The height is twice the base side', 'The base side is half the height', 'The height is half the side of the base'],
    correctIndex: 3,
    explanation: 'With $h = \\frac{500}{x^2}$, $S = x^2 + \\frac{2000}{x}$ and $S\' = 2x - \\frac{2000}{x^2} = 0$ gives $x = 10$. Then $h = 5$, half the base side.',
    partNumber: 4,
    partTitle: '3D Optimization (Cylinders & Cones)',
  },
  // Part 5 — Distance & Mixed Problems
  {
    id: 'opt-ent-5a',
    question: 'A 40-cm wire is cut into two pieces, and each piece is bent into a square. How should it be cut to make the total enclosed area as small as possible?',
    options: ['Into two equal $20$-cm pieces', 'Into pieces of $10$ and $30$ cm', 'Using all $40$ cm for one square', 'Into pieces of $16$ and $24$ cm'],
    correctIndex: 0,
    explanation: 'With one piece $x$, the area is $A = \\frac{x^2}{16} + \\frac{(40 - x)^2}{16}$, and $A\' = \\frac{x - (40 - x)}{8} = 0$ at $x = 20$. Since $A\'\' > 0$, equal pieces minimize the area; using all the wire for one square gives the maximum.',
    partNumber: 5,
    partTitle: 'Distance & Mixed Problems',
  },
  {
    id: 'opt-ent-5b',
    question: 'What is the absolute maximum value of $f(x) = x^3 - 6x^2 + 9x + 2$ on $[0, 5]$?',
    options: ['$6$', '$22$', '$2$', '$5$'],
    correctIndex: 1,
    explanation: 'Critical points: $f\'(x) = 3(x - 1)(x - 3) = 0$ at $x = 1, 3$. Candidates: $f(0) = 2$, $f(1) = 6$, $f(3) = 2$, $f(5) = 22$. The maximum is 22 at the endpoint; 6 is only a local maximum.',
    partNumber: 5,
    partTitle: 'Distance & Mixed Problems',
  },
  // Part 6 — AP-Style Workshop
  {
    id: 'opt-ent-6a',
    question: 'A cost function $C$ is differentiable for $x > 0$ with $C\'(x) < 0$ for $x < 6$ and $C\'(x) > 0$ for $x > 6$. Which statement justifies that $x = 6$ gives the absolute minimum?',
    options: ['$C\'(6) = 0$, so $x = 6$ must give a minimum', '$C(6)$ is smaller than $C(5)$ and $C(7)$', 'It is the only critical point and $C\'$ changes from $-$ to $+$', 'A calculator graph shows a low point at $x = 6$'],
    correctIndex: 2,
    explanation: 'The sign change of $C\'$ from negative to positive shows a minimum, and because it is the only critical point, $C$ decreases before 6 and increases after it, making it the absolute minimum. A zero derivative or two sample values alone do not justify this.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'opt-ent-6b',
    question: 'A poster must have $50$ in$^2$ of printed area with margins of $1$ in on each side and $2$ in at the top and bottom. What page dimensions (width by height) use the least paper?',
    options: ['$5$ in by $10$ in', '$\\sqrt{50}$ in by $\\sqrt{50}$ in', '$6$ in by $12$ in', '$7$ in by $14$ in'],
    correctIndex: 3,
    explanation: 'With printed width $u$, the printed height is $\\frac{50}{u}$ and the page area is $(u + 2)\\left(\\frac{50}{u} + 4\\right) = 58 + 4u + \\frac{100}{u}$. Setting $4 - \\frac{100}{u^2} = 0$ gives $u = 5$, so the page is $7$ by $14$ in; $5$ by $10$ is only the printed region.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'opt-ent-7a',
    question: 'Positive numbers $x$ and $y$ satisfy $x + y = 30$. What is the largest possible value of $xy^2$?',
    options: ['$4000$', '$3375$', '$1000$', '$2000$'],
    correctIndex: 0,
    explanation: 'Write $f(y) = (30 - y)y^2 = 30y^2 - y^3$. Then $f\'(y) = 60y - 3y^2 = 0$ at $y = 20$, so $x = 10$ and $xy^2 = 4000$. Splitting evenly gives only 3375, and swapping the roles gives 2000.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'opt-ent-7b',
    question: 'At price $p$ dollars, a store sells $400 - 8p$ items, so revenue is $R(p) = p(400 - 8p)$. What is the maximum revenue?',
    options: ['$\\$2{,}500$', '$\\$5{,}000$', '$\\$10{,}000$', '$\\$20{,}000$'],
    correctIndex: 1,
    explanation: '$R\'(p) = 400 - 16p = 0$ at $p = 25$, and $R\'\' = -16 < 0$, so this is the maximum: $R(25) = 25 \\cdot 200 = 5000$ dollars. Ignoring the drop in sales gives $25 \\cdot 400 = 10{,}000$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Setting Up Optimization Problems' },
    { partNumber: 2, partTitle: 'Geometric Optimization' },
    { partNumber: 3, partTitle: 'Cost & Revenue Optimization' },
    { partNumber: 4, partTitle: '3D Optimization (Cylinders & Cones)' },
    { partNumber: 5, partTitle: 'Distance & Mixed Problems' },
    { partNumber: 6, partTitle: 'AP-Style Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
