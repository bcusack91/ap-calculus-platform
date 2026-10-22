/**
 * AP Calculus AB diagnostic v2, Unit 4: Contextual Applications of
 * Differentiation. No calculator. Stimulus sets: a particle's velocity graph
 * (calcab-s401), a table of temperatures and rates (calcab-s402) and a
 * conical-tank related-rates setup (calcab-s403).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s401",
    title: "Velocity of a particle moving along a line",
    kind: "figure",
    content:
      "A particle moves along the $x$-axis. Its velocity $v(t)$, in meters per second, for $0 \\le t \\le 8$ seconds is shown in the graph, which consists of four line segments. " +
      "They join the points $(0, -2)$, $(2, 4)$, $(5, 4)$, $(7, -2)$ and $(8, -2)$, in that order.",
    svg: FIGURES["calcab-s401"],
  },
  {
    id: "calcab-s402",
    title: "Internal temperature of a roast",
    kind: "table",
    content:
      "A roast is placed in a hot oven at time $t = 0$. Its internal temperature, in degrees Fahrenheit, is $H(t)$, where $t$ is measured in minutes and $H$ is twice differentiable. Selected values of $H(t)$ and $H'(t)$ are shown in the table.\n\n" +
      "| $t$ (minutes) | 0 | 10 | 20 | 30 |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| $H(t)$ (°F) | 40 | 70 | 92 | 108 |\n" +
      "| $H'(t)$ (°F per minute) | 3.6 | 2.6 | 1.9 | 1.4 |",
  },
  {
    id: "calcab-s403",
    title: "Water filling a conical tank",
    kind: "passage",
    content:
      "A tank is shaped like a right circular cone with its vertex pointing down. The tank is 12 feet tall, and the radius of its circular top is 4 feet. " +
      "Water flows into the tank at a constant rate of 2 cubic feet per minute. At time $t$ minutes, the water in the tank is $h$ feet deep and the radius of the water's circular surface is $r$ feet. " +
      "The volume of a cone with radius $r$ and height $h$ is $V = \\frac{1}{3}\\pi r^2 h$.",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s401: velocity graph ----
  {
    id: "calcab-s401-q1",
    stimulusId: "calcab-s401",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "easy",
    stem: "Based on the graph, what is the acceleration of the particle at $t = 1$ second?",
    options: ["$3$ m/s²", "$1$ m/s²", "$-2$ m/s²", "$0$ m/s²"],
    correctIndex: 0,
    explanation:
      "Acceleration is the slope of the velocity graph. On $0 < t < 2$ the slope is $\\frac{4 - (-2)}{2 - 0} = 3$ m/s². 1 is the velocity $v(1)$, the height of the graph. $-2$ is the initial velocity. 0 is the acceleration on $2 < t < 5$, where the graph is horizontal.",
  },
  {
    id: "calcab-s401-q2",
    stimulusId: "calcab-s401",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "medium",
    stem: "How many times does the particle change direction on the interval $0 < t < 8$?",
    options: ["Two", "Only one", "Three", "None"],
    correctIndex: 0,
    explanation:
      "The particle changes direction where $v(t)$ changes sign. $v$ goes from negative to positive at $t = \\frac{2}{3}$ (where $-2 + 3t = 0$) and from positive to negative at $t = \\frac{19}{3}$ (where $4 - 3(t - 5) = 0$). That is two changes. Three counts $t = 2$, $t = 5$ or $t = 7$, where the acceleration changes but $v$ keeps its sign. One misses a crossing.",
  },
  {
    id: "calcab-s401-q3",
    stimulusId: "calcab-s401",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "hard",
    stem: "At which of the following times is the speed of the particle increasing?",
    options: ["$t = 6.5$", "$t = 0.5$", "$t = 3$", "$t = 6$"],
    correctIndex: 0,
    explanation:
      "Speed increases when velocity and acceleration have the same sign. At $t = 6.5$, $v = 4 - 3(1.5) = -0.5 < 0$ and $a = -3 < 0$: speeding up. At $t = 0.5$, $v = -0.5$ but $a = 3$: opposite signs, slowing down. At $t = 3$, $a = 0$, so the speed is constant. At $t = 6$, $v = 1 > 0$ and $a = -3$: slowing down. Choosing $t = 0.5$ confuses increasing velocity with increasing speed.",
  },
  // ---- calcab-s402: roast temperature table ----
  {
    id: "calcab-s402-q1",
    stimulusId: "calcab-s402",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "easy",
    stem: "Which of the following is the best interpretation of $H'(20) = 1.9$?",
    options: [
      "At $t = 20$ minutes, the temperature is rising at 1.9 °F per minute.",
      "During the first 20 minutes, the temperature of the roast rose by a total of 1.9 °F.",
      "At $t = 20$ minutes, the temperature of the roast is 1.9 °F higher than at $t = 19$.",
      "From $t = 0$ to $t = 20$, the temperature rose at an average rate of 1.9 °F per minute.",
    ],
    correctIndex: 0,
    explanation:
      "$H'(20)$ is the instantaneous rate of change of temperature at $t = 20$, in °F per minute. A total change over the first 20 minutes would be $H(20) - H(0) = 52$ °F. The average rate over $[0, 20]$ is $\\frac{52}{20} = 2.6$ °F per minute. The change from minute 19 to minute 20 is only approximately 1.9 °F, because the rate is not constant.",
  },
  {
    id: "calcab-s402-q2",
    stimulusId: "calcab-s402",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "medium",
    stem: "Using the line tangent to the graph of $H$ at $t = 20$, what is the approximation of $H(22)$?",
    options: ["$95.8$ °F", "$93.9$ °F", "$95.2$ °F", "$94.8$ °F"],
    correctIndex: 0,
    explanation:
      "$H(22) \\approx H(20) + H'(20)(22 - 20) = 92 + 1.9(2) = 95.8$ °F. 93.9 forgets to multiply the rate by the 2-minute step. 95.2 uses the average rate $\\frac{108 - 92}{10} = 1.6$ instead of the tangent slope. 94.8 uses $H'(30) = 1.4$, the slope at the wrong point.",
  },
  {
    id: "calcab-s402-q3",
    stimulusId: "calcab-s402",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "hard",
    stem: "Suppose $H'$ is decreasing on $0 \\le t \\le 30$. Which statement correctly describes the tangent-line approximation of $H(22)$ found from $t = 20$?",
    options: [
      "It is an overestimate, because $H'$ is decreasing, so $H$ is concave down.",
      "It is an underestimate, because $H'$ is decreasing, so $H$ is concave down.",
      "It is an underestimate, because $H'$ is positive, so the graph of $H$ is increasing.",
      "It is an overestimate, because $H'$ is positive, so the graph of $H$ is increasing.",
    ],
    correctIndex: 0,
    explanation:
      "Decreasing $H'$ means $H'' < 0$, so the graph of $H$ is concave down and lies below its tangent lines. The tangent-line value is therefore too large: an overestimate. Over- or underestimation depends on concavity, not on whether $H$ is increasing, so the reasons based on $H' > 0$ are wrong even where the conclusion happens to match.",
  },
  // ---- calcab-s403: conical tank ----
  {
    id: "calcab-s403-q1",
    stimulusId: "calcab-s403",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "easy",
    stem: "Which of the following expresses the volume $V$ of the water in the tank in terms of its depth $h$ alone?",
    options: [
      "$V = \\dfrac{\\pi h^3}{27}$",
      "$V = \\dfrac{\\pi h^3}{9}$",
      "$V = \\dfrac{16\\pi h}{3}$",
      "$V = 3\\pi h^3$",
    ],
    correctIndex: 0,
    explanation:
      "By similar triangles, $\\frac{r}{h} = \\frac{4}{12}$, so $r = \\frac{h}{3}$. Then $V = \\frac{1}{3}\\pi\\left(\\frac{h}{3}\\right)^2 h = \\frac{\\pi h^3}{27}$. $\\frac{\\pi h^3}{9}$ drops the factor $\\frac{1}{3}$ in the cone formula. $\\frac{16\\pi h}{3}$ uses the full radius 4 for the water at every depth. $3\\pi h^3$ uses $r = 3h$, the ratio upside down.",
  },
  {
    id: "calcab-s403-q2",
    stimulusId: "calcab-s403",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "medium",
    stem: "At the instant the water is 6 feet deep, how fast is the depth of the water increasing?",
    options: [
      "$\\dfrac{1}{2\\pi}$ feet per minute",
      "$\\dfrac{1}{6\\pi}$ feet per minute",
      "$\\dfrac{3}{2\\pi}$ feet per minute",
      "$\\dfrac{3}{8\\pi}$ feet per minute",
    ],
    correctIndex: 0,
    explanation:
      "From $V = \\frac{\\pi h^3}{27}$, $\\frac{dV}{dt} = \\frac{\\pi h^2}{9}\\frac{dh}{dt}$. With $\\frac{dV}{dt} = 2$ and $h = 6$: $2 = 4\\pi\\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{1}{2\\pi}$. $\\frac{1}{6\\pi}$ is the rate for the radius, $\\frac{dr}{dt} = \\frac{1}{3}\\frac{dh}{dt}$ (it also results from dropping the $\\frac{1}{3}$ in the cone formula). $\\frac{3}{2\\pi}$ substitutes $r = 2$ before differentiating, treating the radius as constant: $2 = \\frac{4\\pi}{3}\\frac{dh}{dt}$. $\\frac{3}{8\\pi}$ treats the radius as the full 4 feet: $2 = \\frac{16\\pi}{3}\\frac{dh}{dt}$.",
  },
  {
    id: "calcab-s403-q3",
    stimulusId: "calcab-s403",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "hard",
    stem: "At the instant the water is 6 feet deep, at what rate is the area of the water's circular surface increasing?",
    options: [
      "$\\dfrac{2}{3}$ square feet per minute",
      "$\\dfrac{1}{3}$ square feet per minute",
      "$4\\pi$ square feet per minute",
      "$\\dfrac{2}{9}$ square feet per minute",
    ],
    correctIndex: 0,
    explanation:
      "The surface area is $A = \\pi r^2 = \\frac{\\pi h^2}{9}$, so $\\frac{dA}{dt} = \\frac{2\\pi h}{9}\\frac{dh}{dt}$. At $h = 6$, $\\frac{dh}{dt} = \\frac{1}{2\\pi}$, so $\\frac{dA}{dt} = \\frac{12\\pi}{9} \\cdot \\frac{1}{2\\pi} = \\frac{2}{3}$. $\\frac{1}{3}$ drops the 2 from the power rule. $4\\pi$ is the surface area itself at $h = 6$ ($r = 2$). $\\frac{2}{9}$ substitutes $\\frac{dr}{dt} = \\frac{1}{6\\pi}$ where $\\frac{dh}{dt}$ belongs.",
  },
  // ---- standalone ----
  {
    id: "calcab-u4-002",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "easy",
    stem: "A particle moves along a line so that its position at time $t \\ge 0$ is $x(t) = 2t^3 - 9t^2 + 12t$. At what times is the particle at rest?",
    options: ["$t = 1$ and $t = 2$", "$t = 1.5$ only", "$t = 2$ only", "$t = 0$ only"],
    correctIndex: 0,
    explanation:
      "The particle is at rest when $v(t) = x'(t) = 6t^2 - 18t + 12 = 6(t - 1)(t - 2) = 0$, so at $t = 1$ and $t = 2$. $t = 1.5$ is where the acceleration $12t - 18$ is 0. $t = 2$ only misses a root. $t = 0$ is where the position is 0, not the velocity.",
  },
  {
    id: "calcab-u4-003",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "easy",
    stem: "The velocity of a particle moving along a line is $v(t) = t^2 - 2t$ for $t \\ge 0$. What is the acceleration of the particle at $t = 3$?",
    options: ["$4$", "$3$", "$6$", "$9$"],
    correctIndex: 0,
    explanation:
      "Acceleration is the derivative of velocity: $a(t) = 2t - 2$, so $a(3) = 4$. 3 is the velocity $v(3) = 9 - 6$. 6 differentiates only $t^2$ and 9 evaluates only $t^2$.",
  },
  {
    id: "calcab-u4-004",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "hard",
    stem: "A particle moves along a line with velocity $v(t) = t^2 - 6t + 8$ for $t \\ge 0$. For which values of $t$ is the speed of the particle increasing?",
    options: ["$2 < t < 3$ and $t > 4$", "$t > 4$ only", "$t > 3$ only", "$2 < t < 4$ only"],
    correctIndex: 0,
    explanation:
      "$v(t) = (t - 2)(t - 4)$ and $a(t) = 2t - 6$. Speed increases where $v$ and $a$ share a sign. Both are negative on $2 < t < 3$ ($v < 0$ between the roots, $a < 0$ for $t < 3$), and both are positive for $t > 4$. $t > 4$ only misses the interval where both are negative. $t > 3$ is where the velocity increases, not the speed. $2 < t < 4$ is where the particle moves left.",
  },
  {
    id: "calcab-u4-005",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "medium",
    stem: "Each side of an equilateral triangle is increasing at a rate of 2 centimeters per second. At the instant each side is 6 centimeters long, how fast is the area of the triangle increasing?",
    options: [
      "$6\\sqrt{3}$ cm² per second",
      "$3\\sqrt{3}$ cm² per second",
      "$9\\sqrt{3}$ cm² per second",
      "$12\\sqrt{3}$ cm² per second",
    ],
    correctIndex: 0,
    explanation:
      "$A = \\frac{\\sqrt{3}}{4}s^2$, so $\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}s\\frac{ds}{dt} = \\frac{\\sqrt{3}}{2}(6)(2) = 6\\sqrt{3}$. $3\\sqrt{3}$ forgets to multiply by $\\frac{ds}{dt} = 2$. $9\\sqrt{3}$ is the area itself. $12\\sqrt{3}$ drops the factor $\\frac{1}{2}$, using $\\sqrt{3}\\,s\\frac{ds}{dt}$.",
  },
  {
    id: "calcab-u4-006",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "medium",
    stem: "A 25-foot ladder leans against a vertical wall. The bottom of the ladder slides away from the wall at 3 feet per second. How fast is the top of the ladder moving at the instant the bottom is 7 feet from the wall?",
    options: [
      "Down the wall at $\\dfrac{7}{8}$ foot per second",
      "Down the wall at $\\dfrac{72}{7}$ feet per second",
      "Down the wall at $\\dfrac{21}{25}$ foot per second",
      "Down the wall at $\\dfrac{7}{24}$ foot per second",
    ],
    correctIndex: 0,
    explanation:
      "With $x^2 + y^2 = 625$ and $x = 7$, the top is at $y = 24$. Differentiating, $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$, so $\\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt} = -\\frac{7}{24}(3) = -\\frac{7}{8}$: the top slides down at $\\frac{7}{8}$ ft/s. $\\frac{72}{7}$ swaps $x$ and $y$. $\\frac{21}{25}$ divides by the ladder length 25 instead of the height 24. $\\frac{7}{24}$ forgets to multiply by $\\frac{dx}{dt} = 3$.",
  },
  {
    id: "calcab-u4-007",
    unit: "unit-4",
    topicSlug: "related-rates",
    difficulty: "medium",
    stem: "Car A is 6 miles north of an intersection and driving toward it at 30 miles per hour. Car B is 8 miles east of the intersection and driving away from it at 20 miles per hour. At that instant, how is the distance between the cars changing?",
    options: [
      "Decreasing at 2 miles per hour",
      "Increasing at 2 miles per hour",
      "Decreasing at 20 miles per hour",
      "Increasing at 34 miles per hour",
    ],
    correctIndex: 0,
    explanation:
      "Let $x = 8$ (east) and $y = 6$ (north), so $D = 10$. From $D^2 = x^2 + y^2$, $D\\frac{dD}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt} = 8(20) + 6(-30) = -20$, so $\\frac{dD}{dt} = -2$: decreasing at 2 mph. Increasing at 2 drops the sign. Decreasing at 20 forgets to divide by $D = 10$. Increasing at 34 treats car A as moving away ($160 + 180 = 340$).",
  },
  {
    id: "calcab-u4-008",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "medium",
    stem: "Using the line tangent to $f(x) = \\sqrt[3]{x}$ at $x = 8$, what is the approximation of $\\sqrt[3]{8.12}$?",
    options: ["$2.01$", "$2.04$", "$2.12$", "$2.03$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = \\frac{1}{3}x^{-2/3}$, so $f'(8) = \\frac{1}{3 \\cdot 4} = \\frac{1}{12}$. Then $\\sqrt[3]{8.12} \\approx 2 + \\frac{1}{12}(0.12) = 2.01$. 2.04 uses $f'(8) = \\frac{1}{3}$ (forgetting $8^{-2/3}$). 2.12 adds the whole change in $x$. 2.03 uses $\\frac{1}{4}$ for the slope, dropping the $\\frac{1}{3}$.",
  },
  {
    id: "calcab-u4-009",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "easy",
    stem: "A differentiable function $f$ has $f(2) = 5$ and $f'(2) = -3$. Using the line tangent to the graph of $f$ at $x = 2$, what is the approximation of $f(1.9)$?",
    options: ["$5.3$", "$4.7$", "$5.03$", "$2.0$"],
    correctIndex: 0,
    explanation:
      "$f(1.9) \\approx f(2) + f'(2)(1.9 - 2) = 5 + (-3)(-0.1) = 5.3$. 4.7 uses $+0.1$ for the step, which approximates $f(2.1)$. 5.03 uses a step of $-0.01$. 2.0 adds $f'(2)$ itself without multiplying by the step.",
  },
  {
    id: "calcab-u4-010",
    unit: "unit-4",
    topicSlug: "lhopitals-rule",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to 1} \\frac{\\ln x}{x^2 - 1}$?",
    options: ["$\\dfrac{1}{2}$", "$2$", "$0$", "$1$"],
    correctIndex: 0,
    explanation:
      "Substitution gives $\\frac{0}{0}$, so L'Hospital's Rule applies: $\\lim_{x \\to 1} \\frac{1/x}{2x} = \\frac{1}{2}$. 2 inverts the quotient. 0 treats $\\frac{0}{0}$ as 0. 1 differentiates only the numerator.",
  },
  {
    id: "calcab-u4-011",
    unit: "unit-4",
    topicSlug: "lhopitals-rule",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$?",
    options: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$0$"],
    correctIndex: 0,
    explanation:
      "Each step is $\\frac{0}{0}$ until the last: $\\frac{1 - \\cos x}{3x^2} \\to \\frac{\\sin x}{6x} \\to \\frac{\\cos x}{6} \\to \\frac{1}{6}$. $\\frac{1}{3}$ differentiates $3x^2$ as $3x$ at the second step, giving $\\frac{\\sin x}{3x}$. $\\frac{1}{2}$ drops the 3 from the first derivative of $x^3$. 0 stops after one step and treats $\\frac{0}{0}$ as 0.",
  },
  {
    id: "calcab-u4-012",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "medium",
    stem: "$V(t)$ is the volume of water, in gallons, in a tank at time $t$ minutes, and $V$ is twice differentiable. Which of the following is the best interpretation of $V''(5) = -2$?",
    options: [
      "At $t = 5$ minutes, $V'(t)$ is decreasing at 2 gallons per minute per minute.",
      "At $t = 5$ minutes, the volume of water in the tank is decreasing at 2 gallons per minute.",
      "During the first 5 minutes, the volume of water in the tank decreased by 2 gallons.",
      "At $t = 5$ minutes, the rate of change of the volume is $-2$ gallons per minute.",
    ],
    correctIndex: 0,
    explanation:
      "$V''$ is the derivative of the rate $V'$, so $V''(5) = -2$ says the rate of change of the volume is itself decreasing at 2 gallons per minute per minute at $t = 5$. Saying the volume decreases at 2 gal/min, or that the rate is $-2$ gal/min, describes $V'(5) = -2$. A total decrease over 5 minutes describes $V(5) - V(0)$.",
  },
  {
    id: "calcab-u4-013",
    unit: "unit-4",
    topicSlug: "linearization-differentials-calcab",
    difficulty: "hard",
    stem: "A differentiable function $f$ has $f(3) = 2$ and $f'(3) = 4$. Let $g(x) = [f(x)]^2$. Using the line tangent to the graph of $g$ at $x = 3$, what is the approximation of $g(3.1)$?",
    options: ["$5.6$", "$4.4$", "$4.8$", "$5.76$"],
    correctIndex: 0,
    explanation:
      "$g(3) = 4$ and $g'(3) = 2f(3)f'(3) = 2(2)(4) = 16$, so $g(3.1) \\approx 4 + 16(0.1) = 5.6$. 4.4 uses $f'(3)$ as the slope of $g$. 4.8 uses $2f'(3) = 8$, dropping the factor $f(3)$. 5.76 approximates $f(3.1) \\approx 2.4$ with $f$'s tangent line and then squares it, which is not the tangent line of $g$.",
  },
  {
    id: "calcab-u4-014",
    unit: "unit-4",
    topicSlug: "particle-motion-calcab",
    difficulty: "medium",
    stem: "A particle moves along a line with position $x(t) = 2\\sin t + t$ for $t \\ge 0$. At what time is the particle first at rest?",
    options: ["$t = \\dfrac{2\\pi}{3}$", "$t = \\dfrac{\\pi}{3}$", "$t = \\dfrac{\\pi}{2}$", "$t = \\pi$"],
    correctIndex: 0,
    explanation:
      "$v(t) = 2\\cos t + 1 = 0$ when $\\cos t = -\\frac{1}{2}$, first at $t = \\frac{2\\pi}{3}$. $\\frac{\\pi}{3}$ solves $\\cos t = \\frac{1}{2}$ (a sign slip). $\\frac{\\pi}{2}$ is where $\\cos t = 0$, ignoring the $+1$. $t = \\pi$ is where the velocity is smallest ($\\cos t = -1$, $v = -1$), not where it is 0.",
  },
]
