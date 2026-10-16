/**
 * Entrance Quiz — Integration Applications — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Area Between Curves (Advanced)
  {
    id: 'ia-ent-1a',
    question: 'What is the total area between $y = x^3$ and $y = x$ on the interval $[0, 2]$?',
    options: ['$2$', '$\\frac{5}{2}$', '$6$', '$-2$'],
    correctIndex: 1,
    explanation: 'The curves cross at $x = 1$, so split: $\\int_0^1 (x - x^3)\\,dx + \\int_1^2 (x^3 - x)\\,dx = \\frac{1}{4} + \\frac{9}{4} = \\frac{5}{2}$. One unsplit integral gives the net value $-2$ (or $2$), and $6$ comes from adding the functions instead of subtracting.',
    partNumber: 1,
    partTitle: 'Area Between Curves (Advanced)',
  },
  {
    id: 'ia-ent-1b',
    question: 'Which integral gives the area of the region bounded by $x = y^2 - 4$ and $x = 2 - y$?',
    options: [
      '$\\int_{-2}^{3}(6-y-y^2)\\,dy$',
      '$\\int_{-3}^{2}(y^2+y-6)\\,dy$',
      '$\\int_{-3}^{2}(2-y-y^2)\\,dy$',
      '$\\int_{-3}^{2}(6-y-y^2)\\,dy$',
    ],
    correctIndex: 3,
    explanation: 'Setting $y^2 - 4 = 2 - y$ gives $y = -3$ and $y = 2$; the line $x = 2 - y$ is on the right, so the integrand is $(2 - y) - (y^2 - 4) = 6 - y - y^2$. The integrand $y^2 + y - 6$ is left minus right, and $2 - y - y^2$ drops the $-4$.',
    partNumber: 1,
    partTitle: 'Area Between Curves (Advanced)',
  },

  // Part 2 — Cross-Sectional Volumes
  {
    id: 'ia-ent-2a',
    question: 'The base of a solid is the triangle bounded by $y = 4 - 2x$, the $x$-axis, and the $y$-axis. Cross sections perpendicular to the $x$-axis are semicircles with diameters in the base. What is the volume?',
    options: ['$\\frac{32}{3}$', '$\\frac{16\\pi}{3}$', '$\\frac{4\\pi}{3}$', '$\\frac{8\\pi}{3}$'],
    correctIndex: 2,
    explanation: 'A semicircle with diameter $s$ has area $\\frac{\\pi}{8}s^2$, so $V = \\frac{\\pi}{8}\\int_0^2 (4 - 2x)^2\\,dx = \\frac{\\pi}{8} \\cdot \\frac{32}{3} = \\frac{4\\pi}{3}$. Using $s$ as the radius gives $\\frac{16\\pi}{3}$, and $\\frac{32}{3}$ is the volume for square cross sections.',
    partNumber: 2,
    partTitle: 'Cross-Sectional Volumes',
  },
  {
    id: 'ia-ent-2b',
    question: 'The base of a solid is the first-quadrant region bounded by $y = x^2$, the line $y = 4$, and the $y$-axis. Cross sections perpendicular to the $y$-axis are squares. What is the volume?',
    options: ['$\\frac{256}{15}$', '$8$', '$\\frac{16}{3}$', '$\\frac{32}{5}$'],
    correctIndex: 1,
    explanation: 'Slices perpendicular to the $y$-axis run from $x = 0$ to $x = \\sqrt{y}$, so $V = \\int_0^4 (\\sqrt{y})^2\\,dy = \\int_0^4 y\\,dy = 8$. Slicing perpendicular to the $x$-axis instead gives $\\frac{256}{15}$, and forgetting to square the side gives $\\frac{16}{3}$.',
    partNumber: 2,
    partTitle: 'Cross-Sectional Volumes',
  },

  // Part 3 — Volumes: Disk and Washer Methods
  {
    id: 'ia-ent-3a',
    question: 'The region between $y = \\sqrt{x}$ and $y = x$ is revolved about the $x$-axis. What is the volume of the solid?',
    options: ['$\\frac{\\pi}{30}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{3}$'],
    correctIndex: 1,
    explanation: 'The curves meet at $x = 0$ and $x = 1$, and $\\sqrt{x} \\ge x$ there, so washers have $R = \\sqrt{x}$ and $r = x$: $V = \\pi\\int_0^1 (x - x^2)\\,dx = \\frac{\\pi}{6}$. Squaring the difference of the radii gives $\\frac{\\pi}{30}$, and revolving only one curve gives $\\frac{\\pi}{2}$ or $\\frac{\\pi}{3}$.',
    partNumber: 3,
    partTitle: 'Volumes: Disk and Washer Methods',
  },
  {
    id: 'ia-ent-3b',
    question: 'The region bounded by $y = x^2$, $y = 0$, and $x = 2$ is revolved about the line $y = -2$. Which integral gives the volume?',
    options: [
      '$\\pi\\int_0^2[(x^2-2)^2-4]\\,dx$',
      '$\\pi\\int_0^2[(x^2+2)-2]^2\\,dx$',
      '$\\pi\\int_0^2[(x^2+2)^2-4]\\,dx$',
      '$\\pi\\int_0^2(x^2+2)^2\\,dx$',
    ],
    correctIndex: 2,
    explanation: 'The axis is 2 units below the region, so the outer radius is $x^2 + 2$ and the inner radius (from $y = 0$) is $2$, giving $\\pi\\int_0^2[(x^2+2)^2 - 2^2]\\,dx$. Squaring the difference of the radii, or ignoring the hole, are the usual errors.',
    partNumber: 3,
    partTitle: 'Volumes: Disk and Washer Methods',
  },

  // Part 4 — Riemann Sums and Trapezoidal Rule
  {
    id: 'ia-ent-4a',
    question: 'A continuous function has $f(0) = 4$, $f(3) = 10$, $f(5) = 8$, and $f(10) = 2$. Using a trapezoidal sum with the three subintervals given by the table, what is the estimate of $\\int_0^{10} f(x)\\,dx$?',
    options: ['$70$', '$72$', '$64$', '$56$'],
    correctIndex: 2,
    explanation: 'Each trapezoid uses its own width: $3 \\cdot \\frac{4+10}{2} + 2 \\cdot \\frac{10+8}{2} + 5 \\cdot \\frac{8+2}{2} = 21 + 18 + 25 = 64$. Treating the widths as equal gives $70$; the left and right sums are $72$ and $56$.',
    partNumber: 4,
    partTitle: 'Riemann Sums and Trapezoidal Rule',
  },
  {
    id: 'ia-ent-4b',
    question: 'A function $f$ is increasing and concave down on $[0, 8]$. With four equal subintervals, the left sum is $30$ and the right sum is $38$. What is true of the trapezoidal sum $T$ and the exact integral $I$?',
    options: ['$T = 34$ and $T > I$', '$T = 68$ and $T < I$', '$T = 34$ and $T < I$', '$T = 68$ and $T > I$'],
    correctIndex: 2,
    explanation: 'The trapezoidal sum is the average of the left and right sums, $T = \\frac{30 + 38}{2} = 34$. For a concave down function the trapezoid tops lie below the curve, so $T$ underestimates the integral. Adding without halving gives $68$.',
    partNumber: 4,
    partTitle: 'Riemann Sums and Trapezoidal Rule',
  },

  // Part 5 — Rate Problems & Net Change
  {
    id: 'ia-ent-5a',
    question: 'A tank holds $120$ liters at $t = 0$. Water enters at $12$ liters per minute and drains at $3\\sqrt{t}$ liters per minute, with $t$ in minutes. How many liters are in the tank at $t = 4$?',
    options: ['$168$', '$104$', '$184$', '$152$'],
    correctIndex: 3,
    explanation: 'Amount $= 120 + \\int_0^4 (12 - 3\\sqrt{t})\\,dt = 120 + 48 - 2t^{3/2}\\big|_0^4 = 120 + 48 - 16 = 152$. Ignoring the drain gives $168$, and adding the drained water gives $184$.',
    partNumber: 5,
    partTitle: 'Rate Problems & Net Change',
  },
  {
    id: 'ia-ent-5b',
    question: 'A wildfire has burned $A(t)$ acres after $t$ hours, so $A\'(t)$ is in acres per hour. What does $\\int_1^4 A\'(t)\\,dt = 90$ mean?',
    options: [
      'By hour 4, the fire had burned 90 acres in total',
      '90 acres burned from hour 1 to hour 4',
      'The fire averaged 90 acres per hour over that span',
      'At hour 4, the fire was spreading at 90 acres per hour',
    ],
    correctIndex: 1,
    explanation: 'The integral of a rate is the net change: $A(4) - A(1) = 90$, so 90 more acres burned between hour 1 and hour 4. It is not the running total since $t = 0$, and the average rate on that interval would be $90/3 = 30$ acres per hour.',
    partNumber: 5,
    partTitle: 'Rate Problems & Net Change',
  },

  // Part 6 — Practice Workshop
  {
    id: 'ia-ent-6a',
    question: 'Region $R$ is bounded by $y = e^x$, the $x$-axis, $x = 0$, and $x = \\ln 3$. Solid A is $R$ revolved about the $x$-axis; solid B has base $R$ and square cross sections perpendicular to the $x$-axis. What are their volumes?',
    options: ['$V_A=4$ and $V_B=4\\pi$', '$V_A=8\\pi$ and $V_B=8$', '$V_A=2\\pi$ and $V_B=2$', '$V_A=4\\pi$ and $V_B=4$'],
    correctIndex: 3,
    explanation: 'Both solids use $\\int_0^{\\ln 3} e^{2x}\\,dx = \\frac{9 - 1}{2} = 4$; the revolved solid has circular slices, so it carries the factor $\\pi$ and the square slices do not. Dropping the $\\frac{1}{2}$ from the antiderivative gives $8$, and not squaring $e^x$ gives $2$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ia-ent-6b',
    question: 'The first-quadrant region bounded by $y = x^3$, the line $y = 8$, and the $y$-axis is revolved about the $y$-axis. What is the volume?',
    options: ['$\\frac{768\\pi}{7}$', '$\\frac{128\\pi}{7}$', '$\\frac{96\\pi}{5}$', '$12\\pi$'],
    correctIndex: 2,
    explanation: 'Slices perpendicular to the $y$-axis are disks of radius $x = y^{1/3}$, so $V = \\pi\\int_0^8 y^{2/3}\\,dy = \\pi \\cdot \\frac{3}{5} \\cdot 32 = \\frac{96\\pi}{5}$. Writing $\\pi\\int_0^2 x^6\\,dx$ uses the wrong variable for a vertical axis, $\\frac{768\\pi}{7}$ revolves about the $x$-axis, and $12\\pi$ forgets to square the radius.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'ia-ent-7a',
    question: 'What is the average value of $f(x) = 3x^2 - 2x$ on the interval $[1, 3]$?',
    options: ['$18$', '$9$', '$10$', '$8$'],
    correctIndex: 1,
    explanation: 'Average value $= \\frac{1}{3 - 1}\\int_1^3 (3x^2 - 2x)\\,dx = \\frac{1}{2}\\left[x^3 - x^2\\right]_1^3 = \\frac{18}{2} = 9$. Forgetting to divide gives $18$, the average rate of change $\\frac{f(3) - f(1)}{2}$ is $10$, and $f(2) = 8$ is just the midpoint value.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ia-ent-7b',
    question: 'The region between $y = x + 1$ and $y = 1$ for $0 \\le x \\le 2$ is revolved about the $x$-axis. A student writes the volume as $\\pi\\int_0^2 x^2\\,dx$. What is the error?',
    options: [
      'The factor $\\pi$ should be dropped for a solid with a hole',
      'The limits should run from $y=1$ to $y=3$, not $0$ to $2$',
      'The radii were subtracted before squaring instead of using $R^2-r^2$',
      'Nothing is wrong, as the inner radius of $1$ cancels out',
    ],
    correctIndex: 2,
    explanation: 'The washer method needs $R^2 - r^2 = (x+1)^2 - 1^2$, not $(R - r)^2 = x^2$, so the correct volume is $\\pi\\int_0^2 (x^2 + 2x)\\,dx = \\frac{20\\pi}{3}$. Washers still carry $\\pi$, and the slices are vertical, so $x$ runs from $0$ to $2$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Area Between Curves (Advanced)' },
    { partNumber: 2, partTitle: 'Cross-Sectional Volumes' },
    { partNumber: 3, partTitle: 'Volumes: Disk and Washer Methods' },
    { partNumber: 4, partTitle: 'Riemann Sums and Trapezoidal Rule' },
    { partNumber: 5, partTitle: 'Rate Problems & Net Change' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
