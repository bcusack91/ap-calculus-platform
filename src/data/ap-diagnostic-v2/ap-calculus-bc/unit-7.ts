/**
 * AP Calculus BC diagnostic v2, Unit 7 (BC-only topics 7.5 and 7.9): Euler's
 * method and logistic models. No calculator. Logistic items are interpreted
 * from the differential equation without solving it (FUN-7.H; owner rule).
 * The AB part of Unit 7 comes from the AB v2 bank. Stimulus set: a logistic
 * fish-population model (calcbc-s701).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcbc-s701",
    title: "A logistic model for a fish population",
    kind: "passage",
    content:
      "A wildlife agency models the number of fish in a lake. Let $W(t)$ be the number of fish, in thousands, $t$ years after the lake is stocked. " +
      "The model is the logistic differential equation $\\dfrac{dW}{dt} = 0.4W - 0.01W^2$, and the lake is stocked with $W(0) = 10$ thousand fish. " +
      "The agency wants to describe the long-run behavior of $W$ and the time of fastest growth without solving the equation.",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcbc-s701: logistic fish model ----
  {
    id: "calcbc-s701-q1",
    stimulusId: "calcbc-s701",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "easy",
    stem: "According to the model, what is $\\displaystyle\\lim_{t \\to \\infty} W(t)$?",
    options: ["40 thousand fish", "20 thousand fish", "0.4 thousand fish", "The number of fish grows without bound."],
    correctIndex: 0,
    explanation:
      "Factor the rate: $\\frac{dW}{dt} = 0.4W\\left(1 - \\frac{W}{40}\\right)$, so the carrying capacity is $L = \\frac{0.4}{0.01} = 40$. A solution that starts with $0 < W(0) < 40$ increases toward 40, so the limit is 40 thousand fish. 20 thousand is $\\frac{L}{2}$, where the growth is fastest, not where it levels off. 0.4 is the relative growth rate $k$. Unbounded growth ignores the $-0.01W^2$ term and treats the model as exponential.",
  },
  {
    id: "calcbc-s701-q2",
    stimulusId: "calcbc-s701",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "medium",
    stem: "For what value of $W$ is the fish population growing fastest, and what is the rate of growth at that value?",
    options: [
      "$W = 20$; 4 thousand fish per year",
      "$W = 20$; 8 thousand fish per year",
      "$W = 40$; 0 thousand fish per year",
      "$W = 10$; 3 thousand fish per year",
    ],
    correctIndex: 0,
    explanation:
      "As a function of $W$, $\\frac{dW}{dt} = 0.4W - 0.01W^2$ is a downward parabola with its vertex at $W = \\frac{0.4}{2(0.01)} = 20 = \\frac{L}{2}$. There $\\frac{dW}{dt} = 0.4(20) - 0.01(400) = 8 - 4 = 4$ thousand fish per year. 8 drops the $-0.01W^2$ term. $W = 40$ is the carrying capacity, where the rate is 0. $W = 10$ is the starting value, with rate $4 - 1 = 3$, which is not the maximum.",
  },
  {
    id: "calcbc-s701-q3",
    stimulusId: "calcbc-s701",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "hard",
    stem: "Suppose instead that the lake were stocked with $W(0) = 60$ thousand fish, with the same differential equation. Which statement describes the solution for $t > 0$?",
    options: [
      "$W$ decreases toward 40, and its graph is concave up.",
      "$W$ decreases toward 40, and its graph is concave down.",
      "$W$ decreases until it reaches 20, and its graph is concave up.",
      "$W$ increases without bound, and its graph is concave up.",
    ],
    correctIndex: 0,
    explanation:
      "For $W > 40$, $\\frac{dW}{dt} = 0.4W\\left(1 - \\frac{W}{40}\\right) < 0$, so $W$ decreases; it cannot cross the equilibrium $W = 40$, so it approaches 40. Differentiating, $\\frac{d^2W}{dt^2} = (0.4 - 0.02W)\\frac{dW}{dt}$. For $W > 40$ both factors are negative, so the product is positive and the graph is concave up. Concave down needs the factors to have opposite signs, which happens only for $20 < W < 40$. 20 is where growth is fastest, not a limit. Unbounded growth reads the sign of $\\frac{dW}{dt}$ backward.",
  },
  // ---- standalone: Euler's method ----
  {
    id: "calcbc-u7-001",
    unit: "unit-7",
    topicSlug: "euler-method-advanced-calcbc",
    difficulty: "medium",
    stem: "Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = xy - 1$ with $f(0) = 2$. What is the approximation for $f(1)$ obtained by using Euler's method with two steps of equal size?",
    options: ["$1.375$", "$1.5$", "$1$", "$1.25$"],
    correctIndex: 0,
    explanation:
      "The step size is $0.5$. Step 1: the slope at $(0, 2)$ is $0\\cdot 2 - 1 = -1$, so $f(0.5) \\approx 2 + 0.5(-1) = 1.5$. Step 2: the slope at $(0.5, 1.5)$ is $0.75 - 1 = -0.25$, so $f(1) \\approx 1.5 + 0.5(-0.25) = 1.375$. $1.5$ stops after one step. $1$ reuses the first slope for both steps. $1.25$ uses a step of size 1 in the second step, $1.5 + 1(-0.25)$.",
  },
  {
    id: "calcbc-u7-002",
    unit: "unit-7",
    topicSlug: "euler-method-advanced-calcbc",
    difficulty: "easy",
    stem: "Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = y\\sqrt{x + 1}$ with $f(0) = 4$. What is the approximation for $f(0.1)$ obtained by using Euler's method with one step of size $0.1$?",
    options: ["$4.4$", "$4.1$", "$0.4$", "$4.04$"],
    correctIndex: 0,
    explanation:
      "The slope at $(0, 4)$ is $4\\sqrt{0 + 1} = 4$, so $f(0.1) \\approx 4 + 0.1(4) = 4.4$. $4.1$ uses the slope $\\sqrt{0 + 1} = 1$, dropping the factor $y$. $0.4$ is the change $\\Delta y$ alone, without the starting value 4. $4.04$ multiplies the slope by $(0.1)^2$ instead of $0.1$.",
  },
  {
    id: "calcbc-u7-003",
    unit: "unit-7",
    topicSlug: "euler-method-advanced-calcbc",
    difficulty: "hard",
    stem: "Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = 2x + y$ with $f(0) = 1$. Euler's method with one step of size $0.5$ is used to approximate $f(0.5)$. What is the approximation, and is it an overestimate or an underestimate?",
    options: [
      "$1.5$; an underestimate, because $f$ is concave up near $x = 0$",
      "$1.5$; an overestimate, because $f$ is concave up near $x = 0$",
      "$2$; an underestimate, because $f$ is concave up near $x = 0$",
      "$2$; an overestimate, because $f$ is concave down near $x = 0$",
    ],
    correctIndex: 0,
    explanation:
      "The slope at $(0, 1)$ is $2(0) + 1 = 1$, so $f(0.5) \\approx 1 + 0.5(1) = 1.5$. Then $\\frac{d^2y}{dx^2} = 2 + \\frac{dy}{dx} = 2 + 2x + y$, which is $3 > 0$ at $(0, 1)$ and stays positive nearby, so the solution curve is concave up and lies above its tangent segments: Euler's value is an underestimate. Calling it an overestimate reverses the concavity rule. 2 uses the slope at $x = 0.5$, $2(0.5) + 1 = 2$, instead of the slope at the starting point.",
  },
  {
    id: "calcbc-u7-004",
    unit: "unit-7",
    topicSlug: "euler-method-advanced-calcbc",
    difficulty: "medium",
    stem: "Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = x^2 - y$ with $f(2) = 5$. Euler's method with one step of size $\\Delta x = -0.5$, moving to the left, is used to approximate $f(1.5)$. What is the approximation?",
    options: ["$5.5$", "$4.5$", "$6$", "$6.375$"],
    correctIndex: 0,
    explanation:
      "The slope at $(2, 5)$ is $2^2 - 5 = -1$. Moving left, $\\Delta x = -0.5$: $f(1.5) \\approx 5 + (-0.5)(-1) = 5.5$. $4.5$ uses $\\Delta x = +0.5$ even though the step moves left. $6$ uses a step of size 1. $6.375$ evaluates the slope at the new $x$-value with the old $y$-value, $(1.5)^2 - 5 = -2.75$; Euler's method uses the slope at the known point.",
  },
  {
    id: "calcbc-u7-005",
    unit: "unit-7",
    topicSlug: "euler-method-advanced-calcbc",
    difficulty: "medium",
    stem: "Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = \\dfrac{x + 2}{2y}$ with $f(0) = 2$. What is the approximation for $f(2)$ obtained by using Euler's method with two steps of size 1?",
    options: ["$3.1$", "$2.5$", "$3$", "$3.25$"],
    correctIndex: 0,
    explanation:
      "Step 1: the slope at $(0, 2)$ is $\\frac{0 + 2}{2(2)} = 0.5$, so $f(1) \\approx 2 + 1(0.5) = 2.5$. Step 2: the slope at $(1, 2.5)$ is $\\frac{1 + 2}{2(2.5)} = 0.6$, so $f(2) \\approx 2.5 + 1(0.6) = 3.1$. $2.5$ stops after the first step. $3$ reuses the first slope, 0.5, for the second step. $3.25$ computes the second slope at $x = 1$ with the old $y = 2$, $\\frac{3}{4}$, instead of the updated $y \\approx 2.5$.",
  },
  // ---- standalone: logistic models (interpretation only) ----
  {
    id: "calcbc-u7-006",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "easy",
    stem: "Which of the following differential equations is a logistic model whose solutions with $0 < y(0) < 75$ increase toward a carrying capacity of 75?",
    options: [
      "$\\dfrac{dy}{dt} = 0.2y(75 - y)$",
      "$\\dfrac{dy}{dt} = 0.2y^2(75 - y)$",
      "$\\dfrac{dy}{dt} = -0.2y(75 - y)$",
      "$\\dfrac{dy}{dt} = 0.2y\\left(1 - \\dfrac{y}{150}\\right)$",
    ],
    correctIndex: 0,
    explanation:
      "A logistic equation has the form $\\frac{dy}{dt} = ky(L - y)$, equivalently $ky\\left(1 - \\frac{y}{L}\\right)$, with $k > 0$; $0.2y(75 - y)$ has $L = 75$. $0.2y^2(75 - y)$ also has solutions that rise toward 75, but its rate is not of the form $ky(L - y)$ (the factor is $y^2$), so it is not logistic. $-0.2y(75 - y)$ has $k < 0$: its rate is negative for $0 < y < 75$, so those solutions decrease, away from 75. $0.2y\\left(1 - \\frac{y}{150}\\right)$ is logistic with carrying capacity 150.",
  },
  {
    id: "calcbc-u7-007",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "medium",
    stem: "A population $P(t)$ follows a logistic model. Its rate of growth $\\dfrac{dP}{dt}$ is greatest at $t = 6$ years, when $P = 350$. What is $\\displaystyle\\lim_{t\\to\\infty} P(t)$?",
    options: ["$700$", "$350$", "$2100$", "$175$"],
    correctIndex: 0,
    explanation:
      "A logistic population grows fastest when it is half the carrying capacity: $\\frac{L}{2} = 350$, so $L = 700$ and $P(t) \\to 700$. 350 is the population at the point of fastest growth (the inflection point), not the limit. 2100 multiplies 350 by the time 6, which plays no role. 175 halves 350 instead of doubling it.",
  },
  {
    id: "calcbc-u7-008",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "hard",
    stem: "A population satisfies $\\dfrac{dP}{dt} = 0.6P - 0.003P^2$ with $P(0) = 50$. Which statement describes the graph of $P$ for $t \\ge 0$?",
    options: [
      "$P$ increases for all $t$; it is concave up while $P < 100$ and concave down once $P > 100$.",
      "$P$ increases for all $t$; it is concave down for all $t$.",
      "$P$ increases for all $t$; it is concave up while $P < 200$.",
      "$P$ increases for all $t$; it is concave down while $P < 100$ and concave up once $P > 100$.",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{dP}{dt} = 0.6P\\left(1 - \\frac{P}{200}\\right)$, so the carrying capacity is 200: $P$ rises from 50 toward 200 and $\\frac{dP}{dt} > 0$ for all $t$. $\\frac{d^2P}{dt^2} = (0.6 - 0.006P)\\frac{dP}{dt}$ is positive while $P < 100$ and negative once $P > 100$, so the graph is concave up until $P$ reaches $\\frac{L}{2} = 100$, then concave down. 'Concave down for all $t$' ignores the start below 100. 'Concave up while $P < 200$' puts the inflection point at the carrying capacity. The reversed pattern swaps the signs of $0.6 - 0.006P$.",
  },
  {
    id: "calcbc-u7-009",
    unit: "unit-7",
    topicSlug: "logistic-models-calcbc",
    difficulty: "medium",
    stem: "A population is modeled by $\\dfrac{dP}{dt} = kP\\left(1 - \\dfrac{P}{400}\\right)$, where $k > 0$. How does the rate of growth when $P = 100$ compare with the rate of growth when $P = 300$?",
    options: [
      "The two rates are equal.",
      "The rate is greater when $P = 100$.",
      "The rate is greater when $P = 300$.",
      "The comparison depends on the value of $k$.",
    ],
    correctIndex: 0,
    explanation:
      "At $P = 100$: $k(100)\\left(1 - \\frac{1}{4}\\right) = 75k$. At $P = 300$: $k(300)\\left(1 - \\frac{3}{4}\\right) = 75k$. The rates are equal: $kP\\left(1 - \\frac{P}{L}\\right)$ is symmetric about $\\frac{L}{2} = 200$, and 100 and 300 are each 100 away from 200. 'Greater at 100' assumes growth slows from the start. 'Greater at 300' assumes a larger population always grows faster. $k$ multiplies both rates by the same positive factor, so it cannot change the comparison.",
  },
]
