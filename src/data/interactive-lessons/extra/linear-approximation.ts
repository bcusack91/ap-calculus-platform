import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Linear Approximation (AP Calculus AB).
 * Registry key / DB Topic.slug: 'linear-approximation'.
 * 7 parts, gold-standard structure: tangent-line idea → the linearization
 * formula → differentials (dy vs Δy) → worked approximations (roots, powers,
 * trig, exp, log) → error, concavity & over/under-estimates → applications
 * (error propagation, percent error) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every numerical value was computed and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox1-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 1 of 7 — Why a Tangent Line Is the Best Local Straight-Line Model**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea: Curves Look Straight Up Close |
| The Tangent Line at a Point |
| "Local Linearity" — Zooming In on a Graph |

> 🔑 **Key Concept:** Near a single point, a smooth curve and its tangent line are almost indistinguishable. **Linear approximation** is the idea of *replacing a hard curved function with its easy tangent line* whenever you only care about points close to one spot. That's the whole lesson in one sentence.`,
      },
      {
        id: 'linapprox1-bigidea',
        type: 'text' as const,
        content: `## Curves Look Straight Up Close

Pick any smooth curve and zoom in on a single point. The more you zoom, the **straighter** the curve looks — until, at extreme zoom, it's visually a straight line. That straight line is the **tangent line** at the point.

This property is called **local linearity**: a differentiable function is "locally linear" — it behaves like a line in a small neighborhood of any point.

Why do we care? Because lines are *easy*:
- We can evaluate $y = mx + b$ in our heads.
- A curve like $\\sqrt{x}$, $e^x$, or $\\ln x$ is *hard* to evaluate by hand.

> 💡 **The strategy:** To estimate a hard value like $\\sqrt{4.1}$, find a nearby *easy* point ($x = 4$, where $\\sqrt{4}=2$), build the tangent line there, and read off the line's height at $x = 4.1$. The tangent line does the hard curve's job — approximately.`,
      },
      {
        id: 'linapprox1-tangent',
        type: 'text' as const,
        content: `## The Tangent Line at a Point

At a point $x = a$, a differentiable function $f$ has a tangent line with:
- **Point on the line:** $(a,\\, f(a))$ — the curve and line touch here.
- **Slope:** $f'(a)$ — the derivative gives the instantaneous slope.

Using point–slope form $y - y_1 = m(x - x_1)$:

$$y = f(a) + f'(a)\\,(x - a)$$

This line touches the curve at $x=a$ **and** matches its slope there, so it "leaves" the curve as slowly as possible. No other line stays closer to the curve near $a$.

### Example

For $f(x) = x^2$ at $a = 3$: $f(3) = 9$ and $f'(x) = 2x$, so $f'(3) = 6$. The tangent line is

$$y = 9 + 6(x - 3).$$

At $x = 3.1$ the line gives $9 + 6(0.1) = 9.6$, while the true value is $3.1^2 = 9.61$ — off by just $0.01$.`,
      },
      {
        id: 'linapprox1-mc-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What two pieces of information do you need to write the tangent line of $f$ at $x = a$?',
              options: [
                'The value $f(a)$ and the slope $f\'(a)$',
                'Only the slope $f\'(a)$',
                'The values $f(a)$ and $f(a+1)$',
                'The second derivative $f\'\'(a)$',
              ],
              correctAnswer: 0,
              explanation: 'A line needs a point and a slope. The point is $(a, f(a))$ and the slope is $f\'(a)$, giving $y = f(a) + f\'(a)(x-a)$.',
            },
            {
              question: '"Local linearity" means that a differentiable function...',
              options: [
                'is exactly a straight line everywhere',
                'looks almost straight when you zoom in near a point',
                'has no tangent line at any point',
                'can only be approximated by a parabola',
              ],
              correctAnswer: 1,
              explanation: 'Local linearity is the observation that smooth curves resemble their tangent line in a small neighborhood of a point — the basis for linear approximation.',
            },
          ],
        },
      },
      {
        id: 'linapprox1-input-tangent',
        type: 'input-boxes' as const,
        content: `**Build a Tangent Line** 🧮

Let $f(x) = x^2$. We will use the point $a = 4$.

**1)** Find $f(4)$.
**2)** Find $f'(4)$.  *(Recall $f'(x) = 2x$.)*
**3)** Using the tangent line $y = f(4) + f'(4)(x-4)$, estimate the value at $x = 4.1$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '8', '16.8'],
          hint1: '$f(4) = 4^2 = 16$.',
          hint2: '$f\'(x) = 2x$, so $f\'(4) = 2(4) = 8$.',
          hint3: 'The line gives $16 + 8(4.1 - 4) = 16 + 8(0.1) = 16.8$. (True value $4.1^2 = 16.81$.)',
          explanation: '$f(4)=16$, $f\'(4)=8$. Tangent line: $y = 16 + 8(x-4)$. At $x=4.1$: $16 + 8(0.1) = 16.8$, very close to the true $16.81$.',
        },
      },
      {
        id: 'linapprox1-recap',
        type: 'text' as const,
        content: `## Recap: Three Moves, Every Time

Whether you call it a "tangent line" or a "linearization," the procedure never changes:

1. Find the height $f(a)$.
2. Find the slope $f'(a)$.
3. Assemble $y = f(a) + f'(a)(x-a)$.

Let's lock in that assembly step with one more drill before moving on.`,
      },
      {
        id: 'linapprox1-dropdown-tangent',
        type: 'dropdown-select' as const,
        content: `**Match the Tangent-Line Pieces** 🔽

For $f(x) = x^2$ at the anchor $a = 3$, identify each ingredient of the tangent line $y = f(a) + f'(a)(x-a)$.`,
        exercise: {
          dropdowns: [
            { label: 'Point of tangency $(a, f(a))$:', options: ['$(3, 9)$', '$(3, 6)$', '$(9, 3)$', '$(3, 3)$'] },
            { label: 'Slope $f\'(3)$ (where $f\'(x)=2x$):', options: ['$6$', '$3$', '$9$', '$2$'] },
            { label: 'Tangent line equation:', options: ['$y = 9 + 6(x-3)$', '$y = 3 + 6(x-9)$', '$y = 9 + 3(x-6)$', '$y = 6 + 9(x-3)$'] },
          ],
          correctAnswers: ['$(3, 9)$', '$6$', '$y = 9 + 6(x-3)$'],
          hint1: 'The curve passes through $(3, f(3)) = (3, 3^2) = (3, 9)$.',
          hint2: '$f\'(x) = 2x$, so $f\'(3) = 2(3) = 6$.',
          hint3: 'Point–slope with point $(3,9)$ and slope $6$: $y = 9 + 6(x-3)$.',
          explanation: 'Point $(3,9)$, slope $f\'(3)=6$, so the tangent line is $y = 9 + 6(x-3)$ — the basis for approximating $f$ near $x=3$.',
        },
      },
      {
        id: 'linapprox1-wrapup',
        type: 'text' as const,
        content: `## Where We're Headed

You now have the central image: **the tangent line stands in for the curve near the point of tangency.** Everything else is bookkeeping.

In **Part 2** we turn the tangent-line equation into a reusable formula — the **linearization** $L(x)$ — and learn the standard recipe for using it. From there we'll meet **differentials** (Part 3), grind through the classic AP examples (Part 4), analyze the **error** and whether we over- or under-shoot (Part 5), apply it to real measurements (Part 6), and finish with a mastery check (Part 7).

> ⚠️ **Heads-up:** Linear approximation is only trustworthy *near* the chosen point $a$. The farther $x$ drifts from $a$, the worse the estimate. Choosing a good "anchor" point $a$ is half the skill.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox2-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 2 of 7 — The Linearization $L(x)$ and the Standard Recipe**

---

> 🔑 **The Idea:** The tangent-line equation, viewed as a *function we plug into*, is called the **linearization** of $f$ at $a$:
> $$L(x) = f(a) + f'(a)\\,(x - a).$$
> For $x$ near $a$, $f(x) \\approx L(x)$.`,
      },
      {
        id: 'linapprox2-formula',
        type: 'text' as const,
        content: `## The Linearization Formula

$$\\boxed{\\,L(x) = f(a) + f'(a)\\,(x - a)\\,}$$

Read each piece carefully:

| Symbol | Meaning |
|--------|---------|
| $a$ | the **anchor** — a nearby point where $f(a)$ and $f'(a)$ are *easy* |
| $f(a)$ | the curve's height at the anchor (the line's starting value) |
| $f'(a)$ | the slope of the tangent line |
| $(x - a)$ | how far you've stepped away from the anchor |

The approximation statement is

$$f(x) \\approx L(x) \\quad \\text{for } x \\text{ near } a.$$

> 💡 **Reading it as "start + slope × step":** $L(x) = \\underbrace{f(a)}_{\\text{start}} + \\underbrace{f'(a)}_{\\text{slope}} \\cdot \\underbrace{(x-a)}_{\\text{step}}$. You start at the known height and walk along the tangent line.`,
      },
      {
        id: 'linapprox2-recipe',
        type: 'text' as const,
        content: `## The Four-Step Recipe

To approximate a hard value $f(x_0)$:

1. **Choose the anchor $a$** — the nearest point where $f(a)$ and $f'(a)$ are simple (often a perfect square, a nice angle, $0$, or $1$).
2. **Compute $f(a)$** — the height at the anchor.
3. **Compute $f'(a)$** — the slope at the anchor.
4. **Plug in:** $L(x_0) = f(a) + f'(a)(x_0 - a)$.

### Worked Example: Estimate $\\sqrt{4.1}$

1. Let $f(x) = \\sqrt{x}$; anchor $a = 4$ (since $\\sqrt 4$ is exact and $4.1$ is close).
2. $f(4) = \\sqrt{4} = 2$.
3. $f'(x) = \\dfrac{1}{2\\sqrt{x}}$, so $f'(4) = \\dfrac{1}{2\\cdot 2} = \\dfrac{1}{4} = 0.25$.
4. $L(4.1) = 2 + 0.25(4.1 - 4) = 2 + 0.25(0.1) = 2.025$.

> ✅ **Check:** A calculator gives $\\sqrt{4.1} \\approx 2.02485$. Our estimate $2.025$ is correct to three decimals.`,
      },
      {
        id: 'linapprox2-dropdown-pieces',
        type: 'dropdown-select' as const,
        content: `**Identify the Pieces** 🔽

You want to estimate $\\sqrt{16.5}$ using $f(x) = \\sqrt{x}$. Choose the correct ingredient at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Best anchor $a$:', options: ['$16$', '$16.5$', '$25$', '$4$'] },
            { label: 'Value $f(a)$:', options: ['$4$', '$16$', '$2$', '$4.06$'] },
            { label: 'Slope $f\'(a) = \\frac{1}{2\\sqrt a}$:', options: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{16}$', '$8$'] },
            { label: 'Step $(x - a)$:', options: ['$0.5$', '$-0.5$', '$16.5$', '$0.05$'] },
          ],
          correctAnswers: ['$16$', '$4$', '$\\frac{1}{8}$', '$0.5$'],
          hint1: 'The anchor should be the nearest perfect square: $16$, since $\\sqrt{16}=4$ is exact.',
          hint2: '$f(16)=\\sqrt{16}=4$, and $f\'(16)=\\frac{1}{2\\sqrt{16}}=\\frac{1}{2\\cdot4}=\\frac{1}{8}$.',
          hint3: 'The step is $x - a = 16.5 - 16 = 0.5$.',
          explanation: 'With $a=16$: $L(16.5) = 4 + \\frac{1}{8}(0.5) = 4 + 0.0625 = 4.0625$. (True $\\sqrt{16.5}\\approx 4.06202$.)',
        },
      },
      {
        id: 'linapprox2-assemble',
        type: 'text' as const,
        content: `## Assembling the Estimate

You just identified all four ingredients for $\\sqrt{16.5}$. Snapping them into the formula:

$$L(16.5) = \\underbrace{4}_{f(a)} + \\underbrace{\\tfrac{1}{8}}_{f'(a)} \\cdot \\underbrace{0.5}_{x-a} = 4 + 0.0625 = 4.0625.$$

Now run the *same* recipe yourself, writing each piece as a decimal so you get fluent with the arithmetic.`,
      },
      {
        id: 'linapprox2-input-sqrt',
        type: 'input-boxes' as const,
        content: `**Run the Recipe** 🧮

Use $f(x) = \\sqrt{x}$ with anchor $a = 16$ to estimate $\\sqrt{16.5}$.

**1)** $f(16) = \\,?$
**2)** $f'(16) = \\,?$  *(enter as a decimal)*
**3)** $L(16.5) = \\,?$  *(enter as a decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '0.125', '4.0625'],
          hint1: '$f(16) = \\sqrt{16} = 4$.',
          hint2: '$f\'(16) = \\frac{1}{2\\sqrt{16}} = \\frac{1}{8} = 0.125$.',
          hint3: '$L(16.5) = 4 + 0.125(16.5 - 16) = 4 + 0.125(0.5) = 4 + 0.0625 = 4.0625$.',
          explanation: '$f(16)=4$, $f\'(16)=0.125$, and $L(16.5)=4 + 0.125(0.5)=4.0625$. The true value is $\\approx 4.06202$, so the error is about $0.0005$.',
        },
      },
      {
        id: 'linapprox2-mc-anchor',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To estimate $\\sqrt{99}$ with $f(x)=\\sqrt x$, the smartest anchor $a$ is:',
              options: ['$100$', '$99$', '$81$', '$10$'],
              correctAnswer: 0,
              explanation: '$a = 100$ is the nearest perfect square ($\\sqrt{100}=10$ exact) and is very close to $99$, so the step $\\lvert x-a\\rvert=1$ is small.',
            },
            {
              question: 'In $L(x) = f(a) + f\'(a)(x-a)$, the factor $f\'(a)$ represents the...',
              options: [
                'slope of the tangent line at the anchor',
                'area under the curve',
                'second derivative at the anchor',
                'distance from $x$ to $a$',
              ],
              correctAnswer: 0,
              explanation: '$f\'(a)$ is the derivative evaluated at the anchor — the slope of the tangent line used to approximate.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox3-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 3 of 7 — Differentials: $dy$, $dx$, and $\\Delta y \\approx dy$**

---

> 🔑 **The Idea:** The same approximation, repackaged. A small step $dx$ along the $x$-axis produces an estimated change $dy = f'(x)\\,dx$ in the output. This $dy$ approximates the *true* change $\\Delta y$ — and it's the language AP loves for "estimate the change."`,
      },
      {
        id: 'linapprox3-differentials',
        type: 'text' as const,
        content: `## The Differential

Define the **differential** of $y = f(x)$ as

$$\\boxed{\\,dy = f'(x)\\,dx\\,}$$

where:
- $dx$ is a (small) chosen change in $x$ — you pick it.
- $dy$ is the resulting change *along the tangent line*.

This estimates the **actual change** in $y$:

$$\\Delta y = f(x + dx) - f(x) \\;\\approx\\; dy = f'(x)\\,dx.$$

### How it connects to $L(x)$

If $x = a$ and $dx = x_0 - a$, then $dy = f'(a)(x_0 - a)$ and

$$f(x_0) \\approx f(a) + dy = L(x_0).$$

So differentials and linearization are the **same machinery** — $dy$ is just the "$f'(a)(x-a)$" term standing on its own.

| Quantity | Meaning | Exact or estimate? |
|----------|---------|--------------------|
| $\\Delta y$ | true change in output | exact |
| $dy = f'(x)\\,dx$ | tangent-line change | estimate of $\\Delta y$ |`,
      },
      {
        id: 'linapprox3-worked',
        type: 'text' as const,
        content: `## Worked Example: Change in $y = x^3$

Estimate the change in $y = x^3$ as $x$ goes from $2$ to $2.01$.

- $\\dfrac{dy}{dx} = 3x^2$, so $dy = 3x^2\\,dx$.
- Here $x = 2$ and $dx = 0.01$:

$$dy = 3(2)^2(0.01) = 3(4)(0.01) = 0.12.$$

> ✅ **Compare to the truth:** $\\Delta y = 2.01^3 - 2^3 = 8.1206\\ldots - 8 = 0.1206$. The differential $dy = 0.12$ is excellent — within $0.0006$.

### Estimating a value (not just a change)

To estimate $2.01^3$ itself, add $dy$ to the known value:

$$2.01^3 \\approx 2^3 + dy = 8 + 0.12 = 8.12.$$`,
      },
      {
        id: 'linapprox3-input-diff',
        type: 'input-boxes' as const,
        content: `**Differential Drill** 🧮

For $y = \\sqrt{x}$, we have $dy = \\dfrac{1}{2\\sqrt{x}}\\,dx$.

Use $x = 25$ and $dx = 0.3$.

**1)** Evaluate the slope $\\dfrac{1}{2\\sqrt{x}}$ at $x = 25$.  *(decimal)*
**2)** Compute $dy$.  *(decimal)*
**3)** Estimate $\\sqrt{25.3}$ by adding $dy$ to $\\sqrt{25}$.  *(decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.1', '0.03', '5.03'],
          hint1: '$\\frac{1}{2\\sqrt{25}} = \\frac{1}{2\\cdot 5} = \\frac{1}{10} = 0.1$.',
          hint2: '$dy = 0.1 \\times 0.3 = 0.03$.',
          hint3: '$\\sqrt{25.3} \\approx \\sqrt{25} + dy = 5 + 0.03 = 5.03$.',
          explanation: 'Slope $=0.1$, $dy = 0.1(0.3) = 0.03$, so $\\sqrt{25.3}\\approx 5.03$. (True value $\\approx 5.0299$.)',
        },
      },
      {
        id: 'linapprox3-vocab',
        type: 'text' as const,
        content: `## Keeping the Symbols Straight

The differential notation has three look-alike symbols. Don't mix them up:

| Symbol | Read as | Role |
|--------|---------|------|
| $dx$ | "differential of $x$" | the small step *you choose* |
| $dy$ | "differential of $y$" | the *estimated* change, $= f'(x)\\,dx$ |
| $\\Delta y$ | "delta $y$" | the *actual* change in output |

Test yourself on the vocabulary before the next computation.`,
      },
      {
        id: 'linapprox3-dropdown',
        type: 'dropdown-select' as const,
        content: `**$dy$ vs. $\\Delta y$** 🔽

Sort out the vocabulary.`,
        exercise: {
          dropdowns: [
            { label: 'The *true* change in the output is called:', options: ['$\\Delta y$', '$dy$', '$dx$', '$f\'(x)$'] },
            { label: 'The *tangent-line* (estimated) change is:', options: ['$dy$', '$\\Delta y$', '$\\Delta x$', '$f(a)$'] },
            { label: 'The formula for $dy$ is:', options: ['$f\'(x)\\,dx$', '$f(x)\\,dx$', '$f\'\'(x)\\,dx$', '$\\frac{dx}{f\'(x)}$'] },
          ],
          correctAnswers: ['$\\Delta y$', '$dy$', '$f\'(x)\\,dx$'],
          hint1: 'The capital "delta" $\\Delta$ denotes an actual, exact change.',
          hint2: 'The differential $dy$ rides along the tangent line, so it is the *estimate*.',
          hint3: 'By definition $dy = f\'(x)\\,dx$ — slope times the chosen step.',
          explanation: '$\\Delta y$ is exact; $dy = f\'(x)\\,dx$ is the tangent-line estimate of it. For small $dx$, $\\Delta y \\approx dy$.',
        },
      },
      {
        id: 'linapprox3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = x^2$ at $x = 10$ with $dx = 0.1$, the differential $dy$ equals:',
              options: ['$2$', '$0.2$', '$20$', '$0.01$'],
              correctAnswer: 0,
              explanation: '$dy = 2x\\,dx = 2(10)(0.1) = 2$. (The true change is $10.1^2 - 100 = 2.01$.)',
            },
            {
              question: 'Why is $dy$ usually slightly off from $\\Delta y$?',
              options: [
                'The tangent line drifts away from the curve as you step from the anchor',
                'Because $dx$ must be negative',
                'Because the derivative is always wrong',
                'They are always exactly equal',
              ],
              correctAnswer: 0,
              explanation: '$dy$ follows the straight tangent line, but the true curve bends away. The gap grows with $\\lvert dx\\rvert$ and the curvature.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox4-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 4 of 7 — The Classic Toolkit: Roots, Powers, Trig, Exp & Log**

---

> 🔑 **The Idea:** Most AP linear-approximation problems are one of a handful of "greatest hits." This part drills the standard anchors so they become automatic.`,
      },
      {
        id: 'linapprox4-table',
        type: 'text' as const,
        content: `## The Standard Anchors

| Function $f$ | Good anchor $a$ | Why |
|--------------|-----------------|-----|
| $\\sqrt{x},\\ \\sqrt[3]{x}$ | nearest perfect square / cube | $f(a)$ is a whole number |
| $x^n$ near $1$ | $a = 1$ | $1^n = 1$ |
| $\\sin x,\\ \\tan x,\\ \\cos x$ | $0$ or $\\frac{\\pi}{4}$ or $\\frac{\\pi}{6}$ | known exact values |
| $e^x$ | $a = 0$ | $e^0 = 1$ |
| $\\ln x$ | $a = 1$ | $\\ln 1 = 0$ |

> 💡 **Three formulas worth memorizing** (all linearizations at $a=0$ or $a=1$):
> $$e^x \\approx 1 + x,\\qquad \\ln(1+x) \\approx x,\\qquad \\sin x \\approx x \\;\\;(x\\text{ in radians}).$$
> These are the tangent lines of $e^x$ at $0$, $\\ln x$ at $1$, and $\\sin x$ at $0$, respectively.`,
      },
      {
        id: 'linapprox4-cuberoot',
        type: 'text' as const,
        content: `## Worked Example: $\\sqrt[3]{8.06}$

Let $f(x) = x^{1/3}$, anchor $a = 8$ (a perfect cube, $\\sqrt[3]{8}=2$).

- $f(8) = 8^{1/3} = 2$.
- $f'(x) = \\dfrac{1}{3}x^{-2/3} = \\dfrac{1}{3\\sqrt[3]{x^2}}$, so $f'(8) = \\dfrac{1}{3\\cdot 4} = \\dfrac{1}{12}$.
- $L(8.06) = 2 + \\dfrac{1}{12}(8.06 - 8) = 2 + \\dfrac{1}{12}(0.06) = 2 + 0.005 = 2.005$.

> ✅ **Check:** $\\sqrt[3]{8.06} \\approx 2.00499$. Spot on.

## Worked Example: $e^{0.1}$

Use $e^x \\approx 1 + x$ (linearization at $a=0$):

$$e^{0.1} \\approx 1 + 0.1 = 1.1.$$

True value $\\approx 1.10517$, so we underestimate slightly (more on *why* in Part 5).`,
      },
      {
        id: 'linapprox4-input-toolkit',
        type: 'input-boxes' as const,
        content: `**Toolkit Drill** 🧮

Use the standard linearizations.

**1)** Estimate $\\ln(1.05)$ using $\\ln(1+x)\\approx x$.  *(decimal)*
**2)** Estimate $\\sin(0.1)$ using $\\sin x \\approx x$ (radians).  *(decimal)*
**3)** Estimate $\\sqrt{101}$ using $f(x)=\\sqrt x$, $a = 100$.  *(decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.05', '0.1', '10.05'],
          hint1: '$\\ln(1+x)\\approx x$ with $x = 0.05$ gives $0.05$.',
          hint2: '$\\sin x \\approx x$ with $x = 0.1$ gives $0.1$.',
          hint3: '$f(100)=10$, $f\'(100)=\\frac{1}{2\\sqrt{100}}=\\frac{1}{20}=0.05$, so $L(101)=10+0.05(1)=10.05$.',
          explanation: '$\\ln(1.05)\\approx 0.05$ (true $0.0488$); $\\sin(0.1)\\approx 0.1$ (true $0.0998$); $\\sqrt{101}\\approx 10.05$ (true $10.0499$).',
        },
      },
      {
        id: 'linapprox4-mc-trig',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which linearization of $f(x) = e^x$ at $a = 0$ is correct?',
              options: ['$L(x) = 1 + x$', '$L(x) = x$', '$L(x) = e + x$', '$L(x) = 1 + ex$'],
              correctAnswer: 0,
              explanation: '$f(0)=e^0=1$ and $f\'(0)=e^0=1$, so $L(x)=1 + 1\\cdot(x-0)=1+x$.',
            },
            {
              question: 'To estimate $(1.02)^{10}$, the cleanest linear approximation of $(1+x)^{10}$ at $x=0$ gives:',
              options: ['$1 + 10x$', '$1 + x$', '$10 + x$', '$1 + 10x^9$'],
              correctAnswer: 0,
              explanation: 'With $f(x)=(1+x)^{10}$: $f(0)=1$, $f\'(x)=10(1+x)^9$ so $f\'(0)=10$. Thus $L(x)=1+10x$, giving $(1.02)^{10}\\approx 1+10(0.02)=1.2$.',
            },
          ],
        },
      },
      {
        id: 'linapprox4-derive-note',
        type: 'text' as const,
        content: `## Where Those Memorized Formulas Come From

The "facts" $e^x\\approx 1+x$, $\\ln(1+x)\\approx x$, and $\\sin x\\approx x$ aren't magic — each is just $L(x)=f(a)+f'(a)(x-a)$ worked out at a friendly anchor. Let's *derive* the $\\ln$ one step-by-step instead of memorizing it.`,
      },
      {
        id: 'linapprox4-dropdown-build',
        type: 'dropdown-select' as const,
        content: `**Build the Linearization** 🔽

Find the linearization of $f(x) = \\ln x$ at $a = 1$, then use it.`,
        exercise: {
          dropdowns: [
            { label: '$f(1) = \\ln 1 =$', options: ['$0$', '$1$', '$e$', '$\\ln e$'] },
            { label: '$f\'(x) = \\frac{1}{x}$, so $f\'(1) =$', options: ['$1$', '$0$', '$e$', '$\\frac{1}{e}$'] },
            { label: 'Linearization $L(x) =$', options: ['$x - 1$', '$\\ln x$', '$1 + x$', '$x$'] },
            { label: 'So $\\ln(1.1) \\approx$', options: ['$0.1$', '$1.1$', '$0$', '$1$'] },
          ],
          correctAnswers: ['$0$', '$1$', '$x - 1$', '$0.1$'],
          hint1: '$\\ln 1 = 0$ because $e^0 = 1$.',
          hint2: '$f\'(x)=\\frac{1}{x}$, so $f\'(1)=\\frac{1}{1}=1$.',
          hint3: '$L(x)=f(1)+f\'(1)(x-1)=0 + 1\\cdot(x-1)=x-1$; at $x=1.1$ this is $0.1$.',
          explanation: '$L(x)=x-1$, so $\\ln(1.1)\\approx 1.1-1 = 0.1$. (True $\\ln(1.1)\\approx 0.0953$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox5-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 5 of 7 — Error, Concavity & Over- vs. Under-Estimates**

---

> 🔑 **The Idea:** Concavity tells you which side of the curve the tangent line lies on — so you can predict, *without a calculator*, whether your estimate is too big or too small.`,
      },
      {
        id: 'linapprox5-concavity',
        type: 'text' as const,
        content: `## Concavity Decides Over vs. Under

The tangent line is straight; the curve bends. Which way it bends ($f''$) determines where the tangent sits:

| If near $a$... | Curve is... | Tangent line lies... | Estimate is an... |
|----------------|-------------|----------------------|-------------------|
| $f'' > 0$ | concave **up** (bowl) | **below** the curve | **under**estimate |
| $f'' < 0$ | concave **down** (dome) | **above** the curve | **over**estimate |

The picture: a concave-up curve "smiles," curving *up away* from its tangent, so the curve sits above the line and the line *under*shoots the true value.

> 💡 **One-line rule:** *Concave up → tangent below → underestimate.* *Concave down → tangent above → overestimate.*`,
      },
      {
        id: 'linapprox5-examples',
        type: 'text' as const,
        content: `## Examples You Can Reason Through

**$\\sqrt{x}$:** $f''(x) = -\\dfrac{1}{4}x^{-3/2} < 0$ for $x>0$, so $\\sqrt{x}$ is concave **down** → linear approximations of square roots are **overestimates**.

Indeed $\\sqrt{4.1}\\approx 2.025$ (our estimate) vs. true $2.02485$ — the estimate is *bigger*. ✓

**$e^x$:** $f''(x) = e^x > 0$ always, so $e^x$ is concave **up** → estimates **underestimate**.

Indeed $e^{0.1}\\approx 1.1$ vs. true $1.10517$ — the estimate is *smaller*. ✓

**$\\ln x$:** $f''(x) = -\\dfrac{1}{x^2} < 0$ → concave **down** → **overestimate**.

Indeed $\\ln(1.1)\\approx 0.1$ vs. true $0.0953$ — the estimate is *bigger*. ✓`,
      },
      {
        id: 'linapprox5-mc-overunder',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A linear approximation built where $f$ is concave **up** will tend to:',
              options: [
                'underestimate the true value',
                'overestimate the true value',
                'equal the true value exactly',
                'give no information',
              ],
              correctAnswer: 0,
              explanation: 'Concave up means the curve bends up away from its tangent, so the tangent line lies below the curve and the estimate is too small (an underestimate).',
            },
            {
              question: 'Using the tangent line to $f(x)=x^2$ at $a=3$ to estimate $f(3.1)$ gives an estimate that is:',
              options: [
                'an underestimate, since $x^2$ is concave up',
                'an overestimate, since $x^2$ is concave down',
                'exactly correct',
                'undefined',
              ],
              correctAnswer: 0,
              explanation: '$f\'\'(x)=2>0$, so $x^2$ is concave up everywhere → tangent below the curve → underestimate. Indeed $L(3.1)=9.6 < 9.61$.',
            },
          ],
        },
      },
      {
        id: 'linapprox5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict the Direction** 🔽

For each function near its anchor, decide whether a linear approximation over- or under-estimates.`,
        exercise: {
          dropdowns: [
            { label: '$f(x)=\\sqrt{x}$ ($f\'\'<0$):', options: ['overestimate', 'underestimate', 'exact', 'cannot tell'] },
            { label: '$f(x)=e^{x}$ ($f\'\'>0$):', options: ['underestimate', 'overestimate', 'exact', 'cannot tell'] },
            { label: '$f(x)=\\ln x$ ($f\'\'<0$):', options: ['overestimate', 'underestimate', 'exact', 'cannot tell'] },
          ],
          correctAnswers: ['overestimate', 'underestimate', 'overestimate'],
          hint1: 'Concave down ($f\'\'<0$) → tangent above → overestimate.',
          hint2: 'Concave up ($f\'\'>0$) → tangent below → underestimate.',
          hint3: '$\\sqrt x$ and $\\ln x$ are both concave down (overestimate); $e^x$ is concave up (underestimate).',
          explanation: 'Square root and natural log are concave down → overestimates. The exponential is concave up → underestimate.',
        },
      },
      {
        id: 'linapprox5-error',
        type: 'text' as const,
        content: `## How Big Is the Error?

The error is $\\lvert f(x) - L(x)\\rvert$. Two things make it grow:

1. **Distance from the anchor**, $\\lvert x - a\\rvert$ — farther means worse.
2. **Curvature** near the anchor (size of $f''$) — sharper bending means worse.

> ⚠️ **AP exam tip:** You are rarely asked to *bound* the error numerically in Calc AB (that's a Taylor-series topic in BC). You **are** frequently asked whether the estimate is an over- or under-estimate, and to *justify it using concavity / the second derivative*. Memorize the concavity rule — it's worth easy points.`,
      },
      {
        id: 'linapprox5-input-secondderiv',
        type: 'input-boxes' as const,
        content: `**Concavity from $f''$** 🧮

For $f(x)=x^3$, the second derivative is $f''(x)=6x$.

**1)** Evaluate $f''(2)$.
**2)** Is $f$ concave up at $x=2$? Enter **1** for yes (concave up) or **0** for no (concave down).
**3)** A linear approximation of $x^3$ near $x=2$ will *underestimate*? Enter **1** for yes, **0** for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '1', '1'],
          hint1: '$f\'\'(2)=6(2)=12$.',
          hint2: 'Since $f\'\'(2)=12>0$, the curve is concave up at $x=2$.',
          hint3: 'Concave up → tangent below → underestimate, so the answer is yes (1).',
          explanation: '$f\'\'(2)=12>0$, so $x^3$ is concave up near $x=2$; the tangent line lies below the curve, making the estimate an underestimate.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox6-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 6 of 7 — Applications: Error Propagation & Percent Error**

---

> 🔑 **The Idea:** Real measurements have small errors. Differentials predict how a tiny measurement error $dx$ "propagates" into an error in a computed quantity like area or volume.`,
      },
      {
        id: 'linapprox6-propagation',
        type: 'text' as const,
        content: `## Error Propagation

Suppose you measure $x$ with a small uncertainty $dx$, then compute $y = f(x)$. The induced error in $y$ is approximately

$$dy = f'(x)\\,dx.$$

The **relative (percent) error** is

$$\\frac{dy}{y} = \\frac{f'(x)\\,dx}{f(x)}.$$

### Worked Example: Area of a Square

A square's side is measured as $s = 10$ cm with a possible error of $ds = 0.1$ cm. Estimate the error in the area $A = s^2$.

- $\\dfrac{dA}{ds} = 2s$, so $dA = 2s\\,ds = 2(10)(0.1) = 2 \\text{ cm}^2$.
- **Relative error:** $\\dfrac{dA}{A} = \\dfrac{2s\\,ds}{s^2} = \\dfrac{2\\,ds}{s} = \\dfrac{2(0.1)}{10} = 0.02 = 2\\%$.

> 💡 Notice the side has a $1\\%$ error ($0.1/10$) but the *area* has a $2\\%$ error. Squaring **doubles** the relative error — a general pattern: for $y = x^n$, the relative error scales by $n$.`,
      },
      {
        id: 'linapprox6-sphere',
        type: 'text' as const,
        content: `## Worked Example: Volume of a Sphere

A ball bearing has radius $r = 5$ mm measured with error $dr = 0.05$ mm. Its volume is $V = \\dfrac{4}{3}\\pi r^3$.

- $\\dfrac{dV}{dr} = 4\\pi r^2$, so $dV = 4\\pi r^2\\,dr = 4\\pi(25)(0.05) = 5\\pi \\approx 15.71 \\text{ mm}^3$.
- **Relative error:** $\\dfrac{dV}{V} = \\dfrac{4\\pi r^2\\,dr}{\\frac{4}{3}\\pi r^3} = \\dfrac{3\\,dr}{r} = \\dfrac{3(0.05)}{5} = 0.03 = 3\\%$.

> 💡 For volume ($r^3$), the relative error **triples**: a $1\\%$ error in radius becomes a $3\\%$ error in volume. Again, the exponent $n$ multiplies the relative error.`,
      },
      {
        id: 'linapprox6-input-cube',
        type: 'input-boxes' as const,
        content: `**Error-Propagation Drill** 🧮

A cube's edge is measured as $s = 5$ cm with a possible error $ds = 0.1$ cm. Its volume is $V = s^3$, so $dV = 3s^2\\,ds$.

**1)** Compute $dV$ (the estimated error in volume, in $\\text{cm}^3$).  *(decimal)*
**2)** Compute the relative error $\\dfrac{dV}{V} = \\dfrac{3\\,ds}{s}$.  *(decimal)*
**3)** Express that relative error as a percent.  *(enter the number of percent, e.g. 6 for 6%)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.5', '0.06', '6'],
          hint1: '$dV = 3s^2\\,ds = 3(25)(0.1) = 7.5 \\text{ cm}^3$.',
          hint2: '$\\frac{dV}{V} = \\frac{3\\,ds}{s} = \\frac{3(0.1)}{5} = \\frac{0.3}{5} = 0.06$.',
          hint3: '$0.06 = 6\\%$. (A $2\\%$ edge error tripled to $6\\%$ in volume.)',
          explanation: '$dV = 3(25)(0.1) = 7.5\\,\\text{cm}^3$; relative error $\\frac{3(0.1)}{5}=0.06=6\\%$. The exponent $3$ triples the $2\\%$ edge error.',
        },
      },
      {
        id: 'linapprox6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle\'s radius is measured with a $1\\%$ error. The approximate percent error in its area $A=\\pi r^2$ is:',
              options: ['$2\\%$', '$1\\%$', '$0.5\\%$', '$4\\%$'],
              correctAnswer: 0,
              explanation: '$\\frac{dA}{A}=\\frac{2\\pi r\\,dr}{\\pi r^2}=\\frac{2\\,dr}{r}$, which is twice the radius\'s relative error: $2\\times 1\\% = 2\\%$.',
            },
            {
              question: 'The differential $dV = 4\\pi r^2\\,dr$ for a sphere is really just...',
              options: [
                'the surface area $4\\pi r^2$ times the change in radius',
                'the volume times the radius',
                'the second derivative of the volume',
                'unrelated to linear approximation',
              ],
              correctAnswer: 0,
              explanation: 'Since $\\frac{dV}{dr}=4\\pi r^2$ is exactly the sphere\'s surface area, $dV=(\\text{surface area})\\,dr$ — a thin shell of thickness $dr$. This is the differential / linear-approximation estimate of the volume change.',
            },
          ],
        },
      },
      {
        id: 'linapprox6-pattern',
        type: 'text' as const,
        content: `## The General Pattern

For any power $y = x^n$, the differential is $dy = n x^{n-1}\\,dx$, so the relative error is

$$\\frac{dy}{y} = \\frac{n x^{n-1}\\,dx}{x^n} = n\\cdot\\frac{dx}{x}.$$

In words: **the relative error of $x^n$ is $n$ times the relative error of $x$.** Length ($n=1$) keeps it; area ($n=2$) doubles it; volume ($n=3$) triples it. Lock that pattern in below.`,
      },
      {
        id: 'linapprox6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Scaling of Relative Error** 🔽

For $y = x^n$, a small relative error $\\frac{dx}{x}$ produces a relative error $\\frac{dy}{y} = n\\cdot\\frac{dx}{x}$. Fill in the multipliers.`,
        exercise: {
          dropdowns: [
            { label: 'Area of a square, $A = s^2$:', options: ['$2\\times$', '$1\\times$', '$3\\times$', '$4\\times$'] },
            { label: 'Volume of a cube, $V = s^3$:', options: ['$3\\times$', '$2\\times$', '$1\\times$', '$6\\times$'] },
            { label: 'Side length itself, $y = s^1$:', options: ['$1\\times$', '$2\\times$', '$0\\times$', '$3\\times$'] },
          ],
          correctAnswers: ['$2\\times$', '$3\\times$', '$1\\times$'],
          hint1: 'For $y = x^n$, the relative error multiplies by the exponent $n$.',
          hint2: 'Square → $n=2$; cube → $n=3$.',
          hint3: 'A plain length is $s^1$, so $n=1$ and the relative error is unchanged.',
          explanation: 'Relative error scales by the exponent: square ($n=2$) doubles it, cube ($n=3$) triples it, and a length ($n=1$) leaves it unchanged.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'linear-approximation',
    sections: [
      {
        id: 'linapprox7-intro',
        type: 'text' as const,
        content: `# 📐 Linear Approximation

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) build the tangent line / linearization $L(x)$, (2) use differentials $dy=f'(x)\\,dx$, (3) approximate roots, powers, trig, exp & log, (4) call over- vs. under-estimates from concavity, and (5) propagate measurement error. Let's put it all together.`,
      },
      {
        id: 'linapprox7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Approximate $f(x_0)$ | $L(x_0) = f(a) + f'(a)(x_0 - a)$, anchor $a$ nearby & easy |
| Estimate a change | $\\Delta y \\approx dy = f'(x)\\,dx$ |
| Estimate a value via $dy$ | $f(x_0) \\approx f(a) + dy$ |
| Over- or under-estimate? | $f'' > 0 \\Rightarrow$ under; $f'' < 0 \\Rightarrow$ over |
| Propagate error | $dy = f'(x)\\,dx$; relative $\\frac{dy}{y}$; for $x^n$ multiply by $n$ |

> ⚠️ **Top mistakes to avoid:** picking an anchor that's *not* near $x_0$; forgetting that $\\sin x \\approx x$ needs **radians**; reporting the *change* $dy$ when the question wants the *value* $f(a)+dy$ (or vice-versa); and dropping the sign of $(x-a)$ when stepping *down* from the anchor.`,
      },
      {
        id: 'linapprox7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Estimate $\\sqrt[3]{8.1}$ using $f(x)=x^{1/3}$, anchor $a=8$ (recall $f'(8)=\\frac{1}{12}$).  *(decimal, round to 4 places)*
**2)** Find the linearization of $f(x)=\\sqrt{x}$ at $a=9$, then estimate $\\sqrt{9}$'s neighbor: give $L(9.2)$.  *(decimal)*
**3)** For $y=x^2$, use $dy$ to estimate the change as $x$ goes $7 \\to 7.02$.  *(decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2.0083', '3.0333', '0.28'],
          hint1: '$L(8.1)=2+\\frac{1}{12}(0.1)=2+0.008\\overline{3}=2.0083$ (to 4 places).',
          hint2: '$f(9)=3$, $f\'(9)=\\frac{1}{2\\sqrt9}=\\frac{1}{6}$; $L(9.2)=3+\\frac{1}{6}(0.2)=3+0.0\\overline{3}=3.0333$.',
          hint3: '$dy = 2x\\,dx = 2(7)(0.02)=14(0.02)=0.28$.',
          explanation: '1) $L(8.1)=2+\\frac{0.1}{12}\\approx 2.0083$ (true $2.00830$). 2) $L(9.2)=3+\\frac{0.2}{6}\\approx 3.0333$ (true $3.03315$). 3) $dy=2(7)(0.02)=0.28$ (true change $0.2804$).',
        },
      },
      {
        id: 'linapprox7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

A spherical balloon has radius $r=10$ cm with measurement error $dr=0.2$ cm; $V=\\frac{4}{3}\\pi r^3$.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{dV}{dr} =$', options: ['$4\\pi r^2$', '$\\frac{4}{3}\\pi r^2$', '$3\\pi r^2$', '$4\\pi r^3$'] },
            { label: 'Relative error $\\frac{dV}{V} = \\frac{3\\,dr}{r} =$', options: ['$0.06$', '$0.02$', '$0.6$', '$0.6\\pi$'] },
            { label: 'As a percent, that is:', options: ['$6\\%$', '$2\\%$', '$60\\%$', '$0.6\\%$'] },
          ],
          correctAnswers: ['$4\\pi r^2$', '$0.06$', '$6\\%$'],
          hint1: 'Differentiate $V=\\frac{4}{3}\\pi r^3$ to get $\\frac{dV}{dr}=4\\pi r^2$.',
          hint2: '$\\frac{dV}{V}=\\frac{3\\,dr}{r}=\\frac{3(0.2)}{10}=\\frac{0.6}{10}=0.06$.',
          hint3: '$0.06 = 6\\%$ — the radius\'s $2\\%$ error tripled.',
          explanation: '$\\frac{dV}{dr}=4\\pi r^2$; relative error $=\\frac{3(0.2)}{10}=0.06=6\\%$. (The $2\\%$ radius error triples for a volume.)',
        },
      },
      {
        id: 'linapprox7-conceptual',
        type: 'text' as const,
        content: `## From Numbers to Concepts

The mechanical drills above are only half of the AP picture. The other half is *conceptual*: recognizing a standard linearization on sight and justifying the direction of the error. The next round tests exactly those reasoning skills.`,
      },
      {
        id: 'linapprox7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The linearization of $f(x)=\\sin x$ at $a=0$ is:',
              options: ['$L(x)=x$', '$L(x)=1+x$', '$L(x)=\\cos x$', '$L(x)=1-x$'],
              correctAnswer: 0,
              explanation: '$f(0)=\\sin 0 = 0$ and $f\'(x)=\\cos x$ so $f\'(0)=1$. Thus $L(x)=0+1\\cdot(x-0)=x$, the famous "$\\sin x \\approx x$."',
            },
            {
              question: 'Using its tangent line at $a=8$, the estimate of $\\sqrt[3]{8.1}\\approx 2.0083$ is (true value $\\approx 2.00830$):',
              options: [
                'an overestimate, because $x^{1/3}$ is concave down for $x>0$',
                'an underestimate, because $x^{1/3}$ is concave up',
                'exactly correct',
                'impossible to determine',
              ],
              correctAnswer: 0,
              explanation: '$f\'\'(x)=-\\frac{2}{9}x^{-5/3}<0$ for $x>0$, so $x^{1/3}$ is concave down → tangent above the curve → overestimate.',
            },
          ],
        },
      },
      {
        id: 'linapprox7-final-note',
        type: 'text' as const,
        content: `## You're Ready

You've assembled linearizations from scratch, switched fluidly between $L(x)$ and differentials, hit every standard anchor, justified over- vs. under-estimates with concavity, and propagated measurement error. The three exit-quiz questions below braid all of that together — take your time and write each $L(x)$ out fully.

> 🔑 **One last reminder:** every problem reduces to *"point + slope × step"*: $f(a) + f'(a)(x-a)$. If you can find a friendly anchor and a derivative, you can approximate almost anything.`,
      },
      {
        id: 'linapprox7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the linearization $L(x)$ of $f(x)=\\sqrt{x}$ at $a=100$, and what does it give for $\\sqrt{102}$?',
              options: [
                '$L(x)=10+\\frac{1}{20}(x-100)$, giving $\\sqrt{102}\\approx 10.1$',
                '$L(x)=10+\\frac{1}{10}(x-100)$, giving $\\sqrt{102}\\approx 10.2$',
                '$L(x)=100+\\frac{1}{20}(x-100)$, giving $\\sqrt{102}\\approx 100.1$',
                '$L(x)=10+10(x-100)$, giving $\\sqrt{102}\\approx 30$',
              ],
              correctAnswer: 0,
              explanation: '$f(100)=10$, $f\'(100)=\\frac{1}{2\\sqrt{100}}=\\frac{1}{20}$. So $L(x)=10+\\frac{1}{20}(x-100)$ and $L(102)=10+\\frac{1}{20}(2)=10+0.1=10.1$. (True $\\sqrt{102}\\approx 10.0995$.)',
            },
            {
              question: 'For $y=f(x)$, the differential is $dy=f\'(x)\\,dx$. If $f(x)=\\frac{1}{x}$, $x=2$, and $dx=0.1$, then $dy=$',
              options: ['$-0.025$', '$0.025$', '$-0.25$', '$0.05$'],
              correctAnswer: 0,
              explanation: '$f\'(x)=-\\frac{1}{x^2}$, so $f\'(2)=-\\frac{1}{4}$. Then $dy=-\\frac{1}{4}(0.1)=-0.025$. (It is negative because $\\frac1x$ decreases as $x$ grows.)',
            },
            {
              question: 'A linear approximation of $f(x)=e^x$ near $a=0$ will:',
              options: [
                'underestimate, because $e^x$ is concave up ($f\'\'=e^x>0$)',
                'overestimate, because $e^x$ is concave down',
                'be exact for all $x$',
                'underestimate only for $x<0$',
              ],
              correctAnswer: 0,
              explanation: '$f\'\'(x)=e^x>0$ everywhere, so $e^x$ is concave up; its tangent line lies below the curve, making the linear estimate an underestimate. (E.g. $e^{0.1}\\approx 1.1 < 1.10517$.)',
            },
          ],
        },
      },
    ],
  },
]
