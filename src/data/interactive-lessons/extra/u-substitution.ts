import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — U-Substitution Method (AP Calculus AB).
 * Registry key / DB Topic.slug: 'u-substitution'.
 * 7 parts, gold-standard structure: motivation (reverse chain rule) → choosing u
 * → the mechanics → worked indefinite integrals → trig/exp/log integrands →
 * definite integrals (two methods) → mixed mastery practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every integral, derivative check, and limit-of-integration was computed and
 * re-verified by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub1-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 1 of 7 — Why We Need It: Undoing the Chain Rule**

---

### Topics in This Part

| Section |
|---------|
| The Integral That Stumps the Basic Rules |
| U-Substitution = the Chain Rule, Reversed |
| Spotting an "Inner Function" and Its Derivative |

> 🔑 **Key Concept:** Differentiation has the **chain rule** for composite functions like $\\sin(x^2)$. Integration needs a way to *undo* it. That tool is **u-substitution** — the single most important integration technique in AP Calculus.`,
      },
      {
        id: 'usub1-motivate',
        type: 'text' as const,
        content: `## The Integral That Stumps the Basic Rules

The basic rules handle things like $\\int x^2\\,dx = \\dfrac{x^3}{3} + C$. But what about:

$$\\int 2x\\cos(x^2)\\,dx \\;=\\; ?$$

There is **no product rule for integrals**, and $\\cos(x^2)$ is a composite function. None of the basic antiderivative rules apply directly.

But look closely. Recall from differentiation:

$$\\frac{d}{dx}\\Big[\\sin(x^2)\\Big] = \\cos(x^2)\\cdot 2x$$

That is **exactly** our integrand! So the answer must be:

$$\\int 2x\\cos(x^2)\\,dx = \\sin(x^2) + C$$

> 💡 **The whole idea:** an integrand built by the chain rule has a recognizable shape — an outer function applied to an **inner function**, *multiplied by the inner function's derivative*. U-substitution is the systematic way to reverse that.`,
      },
      {
        id: 'usub1-reverse-chain',
        type: 'text' as const,
        content: `## U-Substitution = the Chain Rule, Reversed

The chain rule says:

$$\\frac{d}{dx}\\Big[F(g(x))\\Big] = F'(g(x))\\cdot g'(x)$$

Integrating both sides:

$$\\int F'(g(x))\\cdot g'(x)\\,dx = F(g(x)) + C$$

We rename the **inner function** $g(x)$ as $u$. Its derivative gives the differential:

$$u = g(x) \\quad\\Longrightarrow\\quad du = g'(x)\\,dx$$

The messy integral collapses into a clean one in $u$:

$$\\int F'(u)\\,du = F(u) + C$$

| In the original | Becomes |
|-----------------|---------|
| inner function $g(x)$ | $u$ |
| $g'(x)\\,dx$ | $du$ |
| $\\int F'(g(x))g'(x)\\,dx$ | $\\int F'(u)\\,du$ |

> 🔑 **Key Idea:** Choose $u$ to be the **inner function**. If its derivative $g'(x)$ is also sitting in the integrand (up to a constant), substitution will work.`,
      },
      {
        id: 'usub1-spot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'U-substitution is best described as the reverse of which differentiation rule?',
              options: ['The chain rule', 'The product rule', 'The quotient rule', 'The power rule'],
              correctAnswer: 0,
              explanation: 'The chain rule differentiates composite functions $F(g(x))$. U-substitution reverses that process to integrate them.',
            },
            {
              question: 'In $\\int 2x\\cos(x^2)\\,dx$, which part should be chosen as $u$?',
              options: ['$x^2$ (the inner function)', '$\\cos(x^2)$', '$2x$', '$\\cos x$'],
              correctAnswer: 0,
              explanation: 'Choose $u$ to be the inner function $x^2$. Then $du = 2x\\,dx$, and that $2x$ is already in the integrand — the substitution closes perfectly.',
            },
          ],
        },
      },
      {
        id: 'usub1-spot-du',
        type: 'dropdown-select' as const,
        content: `**Find $du$** 🔽

For each choice of $u$, select the correct differential $du$.`,
        exercise: {
          dropdowns: [
            { label: 'If $u = x^3$, then $du =$', options: ['$3x^2\\,dx$', '$x^2\\,dx$', '$3x\\,dx$', '$x^3\\,dx$'] },
            { label: 'If $u = 5x + 1$, then $du =$', options: ['$5\\,dx$', '$dx$', '$x\\,dx$', '$(5x+1)\\,dx$'] },
            { label: 'If $u = \\cos x$, then $du =$', options: ['$-\\sin x\\,dx$', '$\\sin x\\,dx$', '$\\cos x\\,dx$', '$-\\cos x\\,dx$'] },
          ],
          correctAnswers: ['$3x^2\\,dx$', '$5\\,dx$', '$-\\sin x\\,dx$'],
          hint1: 'Differentiate $u$ with respect to $x$, then attach $dx$.',
          hint2: '$\\frac{d}{dx}[x^3] = 3x^2$ and $\\frac{d}{dx}[5x+1] = 5$.',
          hint3: '$\\frac{d}{dx}[\\cos x] = -\\sin x$ — watch the negative sign.',
          explanation: '$du = u\'(x)\\,dx$. So $u=x^3 \\Rightarrow du=3x^2\\,dx$; $u=5x+1 \\Rightarrow du=5\\,dx$; $u=\\cos x \\Rightarrow du=-\\sin x\\,dx$.',
        },
      },
      {
        id: 'usub1-du-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Differential** 🧮

For each $u$, differentiate and write the numerical coefficient that multiplies $dx$ in $du$.

**1)** $u = x^4,\\ du = (\\,?\\,)x^3\\,dx$ — enter the coefficient.
**2)** $u = 7x - 2,\\ du = (\\,?\\,)\\,dx$ — enter the coefficient.
**3)** $u = \\sin x,\\ du = (\\,?\\,)\\,dx$ — enter the function (e.g. \`cos x\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', 'cos x'],
          hint1: '$\\frac{d}{dx}[x^4] = 4x^3$, so the coefficient is $4$.',
          hint2: '$\\frac{d}{dx}[7x-2] = 7$.',
          hint3: '$\\frac{d}{dx}[\\sin x] = \\cos x$, so $du = \\cos x\\,dx$.',
          explanation: '1) $du = 4x^3\\,dx$.  2) $du = 7\\,dx$.  3) $du = \\cos x\\,dx$. In every case $du = u\'(x)\\,dx$.',
        },
      },
      {
        id: 'usub1-recap',
        type: 'text' as const,
        content: `## Where We're Headed

You now know the *purpose* of u-substitution: it unwinds the chain rule so composite functions become integrable. The plan for this lesson:

1. **Choose** the right $u$ (Part 2)
2. **Execute** the substitution cleanly (Part 3)
3. Apply it to **polynomials, roots, trig, exponentials, and logs** (Parts 4–5)
4. Handle **definite integrals** with the limits-change trick (Part 6)
5. **Mixed mastery + Exit Quiz** (Part 7)

> ⚠️ **Heads-up:** The single hardest part is *choosing $u$*. We tackle that next.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub2-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 2 of 7 — Choosing the Right $u$**

---

> 🔑 **The Golden Rule:** Let $u$ be the **inner function** — the quantity inside a power, a root, a trig function, an exponent, or a logarithm — whose derivative *also appears* in the integrand (allowing for a constant multiple).`,
      },
      {
        id: 'usub2-where',
        type: 'text' as const,
        content: `## Where to Look for $u$

The inner function usually hides in one of these places:

| Integrand shape | Good choice of $u$ |
|-----------------|--------------------|
| $(\\text{stuff})^n$ | $u = \\text{stuff}$ |
| $\\sqrt{\\text{stuff}}$ | $u = \\text{stuff}$ |
| $\\sin(\\text{stuff}),\\ \\cos(\\text{stuff})$ | $u = \\text{stuff}$ |
| $e^{\\text{stuff}}$ | $u = \\text{stuff}$ |
| $\\dfrac{1}{\\text{stuff}}$ or $\\ln(\\text{stuff})$ | $u = \\text{stuff}$ (the denominator/argument) |

**The test:** after picking $u$, compute $du$. The integrand must contain $du$ — exactly, or off by a **constant factor** you can adjust.

### Example
In $\\int 3x^2(x^3+4)^5\\,dx$, the inner function is $x^3+4$. Set $u = x^3+4$, so $du = 3x^2\\,dx$. The $3x^2\\,dx$ is right there — perfect.`,
      },
      {
        id: 'usub2-choose-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\int x^2(x^3 + 1)^4\\,dx$, the best choice of $u$ is:',
              options: ['$u = x^3 + 1$', '$u = x^2$', '$u = (x^3+1)^4$', '$u = x^3$'],
              correctAnswer: 0,
              explanation: 'The inner function is $x^3+1$. Then $du = 3x^2\\,dx$, and $x^2\\,dx$ is in the integrand (off by the constant $3$, which is fixable).',
            },
            {
              question: 'For $\\int \\dfrac{2x}{x^2 + 5}\\,dx$, the best choice of $u$ is:',
              options: ['$u = x^2 + 5$', '$u = 2x$', '$u = x^2$', '$u = \\dfrac{1}{x^2+5}$'],
              correctAnswer: 0,
              explanation: 'Let $u$ be the denominator $x^2+5$. Then $du = 2x\\,dx$ — exactly the numerator. The integral becomes $\\int \\frac{1}{u}\\,du = \\ln\\lvert u\\rvert + C$.',
            },
            {
              question: 'Why is $u = \\sqrt{x}$ a poor choice for $\\int 2x\\sqrt{x^2+9}\\,dx$?',
              options: [
                'Its derivative does not appear in the integrand; the inner function is $x^2+9$',
                '$\\sqrt{x}$ is not a function',
                'You can never let $u$ be a square root',
                'It makes $du = dx$',
              ],
              correctAnswer: 0,
              explanation: 'The composite here is $\\sqrt{x^2+9}$, so the inner function is $x^2+9$. Choosing $u=\\sqrt{x}$ ignores the actual structure and $du$ would not match the integrand.',
            },
          ],
        },
      },
      {
        id: 'usub2-choose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Inner Function** 🔽

For each integrand, choose the substitution $u$ whose derivative is present (up to a constant).`,
        exercise: {
          dropdowns: [
            { label: '$\\int 3x^2 e^{x^3}\\,dx$:', options: ['$u = x^3$', '$u = e^{x^3}$', '$u = 3x^2$', '$u = x^2$'] },
            { label: '$\\int \\dfrac{\\cos x}{\\sin x}\\,dx$:', options: ['$u = \\sin x$', '$u = \\cos x$', '$u = \\tan x$', '$u = x$'] },
            { label: '$\\int (4x+5)^9\\,dx$:', options: ['$u = 4x + 5$', '$u = (4x+5)^9$', '$u = 4x$', '$u = 9$'] },
          ],
          correctAnswers: ['$u = x^3$', '$u = \\sin x$', '$u = 4x + 5$'],
          hint1: 'In $e^{x^3}$ the inner function is $x^3$, whose derivative $3x^2$ sits in the integrand.',
          hint2: 'For $\\frac{\\cos x}{\\sin x}$, let $u=\\sin x$; then $du=\\cos x\\,dx$ — exactly the numerator.',
          hint3: 'For $(4x+5)^9$, the inner function is $4x+5$ and $du = 4\\,dx$ (a constant, which is fixable).',
          explanation: 'Choose the inner function whose derivative appears: $u=x^3$ ($du=3x^2dx$), $u=\\sin x$ ($du=\\cos x\\,dx$), $u=4x+5$ ($du=4\\,dx$).',
        },
      },
      {
        id: 'usub2-constant',
        type: 'text' as const,
        content: `## The "Off by a Constant" Adjustment

What if $du$ is *almost* right but off by a number? You can multiply and divide by a constant — constants slide freely in and out of integrals.

### Example: $\\int x(x^2+1)^3\\,dx$

Let $u = x^2 + 1$. Then $du = 2x\\,dx$, so $x\\,dx = \\dfrac{1}{2}\\,du$.

$$\\int x(x^2+1)^3\\,dx = \\int u^3\\cdot \\tfrac{1}{2}\\,du = \\tfrac{1}{2}\\int u^3\\,du$$

> ⚠️ **Critical limitation:** You may only adjust for a **constant** factor. If $du$ requires a *variable* factor that isn't in the integrand, u-substitution fails — e.g. $\\int (x^2+1)^3\\,dx$ has **no** $x$ to supply the needed $2x$, so plain u-sub won't work.`,
      },
      {
        id: 'usub2-adjust-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Differential** 🧮

For each substitution, find the constant $k$ so that the indicated piece $= k\\,du$.

**1)** $u = x^2 + 1,\\ du = 2x\\,dx$. Then $x\\,dx = k\\,du$, so $k = \\,?$
**2)** $u = 4x + 3,\\ du = 4\\,dx$. Then $dx = k\\,du$, so $k = \\,?$
**3)** $u = x^3,\\ du = 3x^2\\,dx$. Then $x^2\\,dx = k\\,du$, so $k = \\,?$  *(fraction is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '1/4', '1/3'],
          hint1: 'Solve the $du$ equation for the piece you want. From $du = 2x\\,dx$, divide both sides by $2$: $x\\,dx = \\frac{1}{2}\\,du$.',
          hint2: 'From $du = 4\\,dx$, divide by $4$: $dx = \\frac{1}{4}\\,du$.',
          hint3: 'From $du = 3x^2\\,dx$, divide by $3$: $x^2\\,dx = \\frac{1}{3}\\,du$.',
          explanation: '1) $x\\,dx = \\tfrac{1}{2}\\,du$, so $k=\\tfrac{1}{2}$.  2) $dx = \\tfrac{1}{4}\\,du$, so $k=\\tfrac{1}{4}$.  3) $x^2\\,dx = \\tfrac{1}{3}\\,du$, so $k=\\tfrac{1}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub3-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 3 of 7 — The Five-Step Method**

---

> 🔑 **The Procedure:** Every u-substitution follows the same five moves. Master the steps and you can integrate anything that fits the pattern.`,
      },
      {
        id: 'usub3-steps',
        type: 'text' as const,
        content: `## The Five Steps

To evaluate $\\displaystyle\\int f(x)\\,dx$ by substitution:

1. **Choose** $u$ = inner function.
2. **Differentiate:** $du = u'(x)\\,dx$; solve for $dx$ (or the matching piece).
3. **Substitute** so the *entire* integral is in terms of $u$ — **no $x$ may remain**.
4. **Integrate** the simpler $u$-integral.
5. **Back-substitute** $u = u(x)$ to return to $x$, and add $+C$.

### Worked Example: $\\int (2x+1)^5\\,dx$

**Step 1:** $u = 2x + 1$.
**Step 2:** $du = 2\\,dx \\Rightarrow dx = \\dfrac{1}{2}\\,du$.
**Step 3:** $\\displaystyle\\int (2x+1)^5\\,dx = \\int u^5\\cdot \\tfrac{1}{2}\\,du$.
**Step 4:** $\\dfrac{1}{2}\\cdot \\dfrac{u^6}{6} = \\dfrac{u^6}{12}$.
**Step 5:** $\\dfrac{(2x+1)^6}{12} + C$.

> ✅ **Check by differentiating:** $\\dfrac{d}{dx}\\!\\left[\\dfrac{(2x+1)^6}{12}\\right] = \\dfrac{6(2x+1)^5\\cdot 2}{12} = (2x+1)^5$ ✓`,
      },
      {
        id: 'usub3-order',
        type: 'dropdown-select' as const,
        content: `**Order the Method** 🔽

You're evaluating $\\int x(x^2+1)^3\\,dx$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — choose $u$:', options: ['$u = x^2 + 1$', '$u = x$', '$u = (x^2+1)^3$', '$u = x^2$'] },
            { label: 'Step 2 — find $du$:', options: ['$du = 2x\\,dx$', '$du = x\\,dx$', '$du = 3x^2\\,dx$', '$du = dx$'] },
            { label: 'Step 3 — the integral becomes:', options: ['$\\int \\tfrac{1}{2}u^3\\,du$', '$\\int u^3\\,du$', '$\\int 2u^3\\,du$', '$\\int u^3\\,dx$'] },
            { label: 'Step 4 — integrate:', options: ['$\\tfrac{1}{8}u^4$', '$\\tfrac{1}{2}u^4$', '$\\tfrac{1}{4}u^4$', '$u^4$'] },
          ],
          correctAnswers: ['$u = x^2 + 1$', '$du = 2x\\,dx$', '$\\int \\tfrac{1}{2}u^3\\,du$', '$\\tfrac{1}{8}u^4$'],
          hint1: 'The inner function is $x^2+1$, so $u = x^2+1$ and $du = 2x\\,dx$.',
          hint2: 'Since $x\\,dx = \\tfrac{1}{2}\\,du$, replace $x(x^2+1)^3\\,dx$ with $\\tfrac{1}{2}u^3\\,du$.',
          hint3: '$\\int \\tfrac{1}{2}u^3\\,du = \\tfrac{1}{2}\\cdot\\tfrac{u^4}{4} = \\tfrac{1}{8}u^4$.',
          explanation: '$u=x^2+1$, $du=2x\\,dx$, $x\\,dx=\\tfrac{1}{2}du$. Integral $=\\int\\tfrac12 u^3\\,du=\\tfrac18 u^4 = \\tfrac18(x^2+1)^4 + C$.',
        },
      },
      {
        id: 'usub3-noxleft',
        type: 'text' as const,
        content: `## The #1 Rule: No $x$ May Survive

After Step 3, your integral must be **purely in $u$**. If a stray $x$ remains, either:

- your choice of $u$ was wrong, **or**
- you need to solve $u = u(x)$ for $x$ and substitute that too.

### Example where you back-solve: $\\int x\\sqrt{x+1}\\,dx$

Let $u = x + 1$, so $du = dx$ and $x = u - 1$. Substitute *both*:

$$\\int x\\sqrt{x+1}\\,dx = \\int (u-1)\\sqrt{u}\\,du = \\int \\big(u^{3/2} - u^{1/2}\\big)\\,du$$

> 💡 The leftover $x$ became $u - 1$. Now everything is in $u$ and we can integrate term by term.`,
      },
      {
        id: 'usub3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After substituting, you find a single $x$ still left in the integral. What does this signal?',
              options: [
                'Either re-pick $u$, or solve $u=u(x)$ for $x$ and substitute that too',
                'You should add $+C$ and stop',
                'The integral is impossible',
                'You can ignore the leftover $x$',
              ],
              correctAnswer: 0,
              explanation: 'A surviving $x$ means the integral is not yet purely in $u$. Fix it by back-solving for $x$ or choosing a better $u$ — never integrate a mix of $x$ and $u$.',
            },
            {
              question: 'Evaluate $\\int (2x+1)^5\\,dx$.',
              options: [
                '$\\dfrac{(2x+1)^6}{12} + C$',
                '$\\dfrac{(2x+1)^6}{6} + C$',
                '$\\dfrac{(2x+1)^6}{2} + C$',
                '$6(2x+1)^4 + C$',
              ],
              correctAnswer: 0,
              explanation: 'With $u=2x+1$, $dx=\\tfrac12 du$: $\\int u^5\\cdot\\tfrac12\\,du = \\tfrac{u^6}{12} = \\tfrac{(2x+1)^6}{12}+C$.',
            },
          ],
        },
      },
      {
        id: 'usub3-coeff-drill',
        type: 'input-boxes' as const,
        content: `**Run the Steps** 🧮

Carry out the five-step method and report the leading coefficient $k$ in $k(\\cdots)^{n} + C$. *(fractions ok)*

**1)** $\\int (4x-1)^2\\,dx = k(4x-1)^3 + C$. Find $k$.
**2)** $\\int (2x+1)^5\\,dx = k(2x+1)^6 + C$. Find $k$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/12', '1/12'],
          hint1: 'For #1, $u=4x-1$, $dx=\\tfrac14 du$: $\\int u^2\\tfrac14\\,du = \\tfrac14\\cdot\\tfrac{u^3}{3} = \\tfrac{1}{12}u^3$.',
          hint2: 'For #2, $u=2x+1$, $dx=\\tfrac12 du$: $\\int u^5\\tfrac12\\,du = \\tfrac12\\cdot\\tfrac{u^6}{6} = \\tfrac{1}{12}u^6$.',
          hint3: 'In each case $k = (\\text{constant from }du)\\times\\frac{1}{n+1}$.',
          explanation: '1) $k = \\tfrac14\\cdot\\tfrac13 = \\tfrac{1}{12}$.  2) $k = \\tfrac12\\cdot\\tfrac16 = \\tfrac{1}{12}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub4-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 4 of 7 — Powers & Roots**

---

> 🔑 **Focus:** Integrands of the form $(\\text{inner})^n \\cdot (\\text{inner})'$. After substitution you just apply the power rule $\\int u^n\\,du = \\dfrac{u^{n+1}}{n+1} + C$.`,
      },
      {
        id: 'usub4-power',
        type: 'text' as const,
        content: `## Worked Example: A Polynomial Power

$$\\int 3x^2(x^3+4)^5\\,dx$$

**Step 1:** $u = x^3 + 4$.
**Step 2:** $du = 3x^2\\,dx$ — exactly the rest of the integrand!
**Step 3:** $\\displaystyle\\int u^5\\,du$.
**Step 4:** $\\dfrac{u^6}{6}$.
**Step 5:** $\\dfrac{(x^3+4)^6}{6} + C$.

> ✅ **Check:** $\\dfrac{d}{dx}\\!\\left[\\dfrac{(x^3+4)^6}{6}\\right] = \\dfrac{6(x^3+4)^5\\cdot 3x^2}{6} = 3x^2(x^3+4)^5$ ✓`,
      },
      {
        id: 'usub4-root',
        type: 'text' as const,
        content: `## Worked Example: A Square Root

$$\\int x\\sqrt{x^2+1}\\,dx$$

Rewrite the root as a power: $\\sqrt{x^2+1} = (x^2+1)^{1/2}$.

**Step 1:** $u = x^2 + 1$.
**Step 2:** $du = 2x\\,dx \\Rightarrow x\\,dx = \\tfrac{1}{2}\\,du$.
**Step 3:** $\\displaystyle\\int (x^2+1)^{1/2}\\,x\\,dx = \\int u^{1/2}\\cdot \\tfrac{1}{2}\\,du$.
**Step 4:** $\\dfrac{1}{2}\\cdot \\dfrac{u^{3/2}}{3/2} = \\dfrac{1}{2}\\cdot \\dfrac{2}{3}u^{3/2} = \\dfrac{1}{3}u^{3/2}$.
**Step 5:** $\\dfrac{1}{3}(x^2+1)^{3/2} + C$.

> 💡 **Tip:** Always convert roots to fractional exponents *before* applying the power rule. $\\int u^{1/2}\\,du = \\dfrac{u^{3/2}}{3/2} = \\dfrac{2}{3}u^{3/2}$.`,
      },
      {
        id: 'usub4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\int 3x^2(x^3+4)^5\\,dx$.',
              options: [
                '$\\dfrac{(x^3+4)^6}{6} + C$',
                '$\\dfrac{(x^3+4)^6}{18} + C$',
                '$(x^3+4)^6 + C$',
                '$\\dfrac{3(x^3+4)^6}{6} + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=x^3+4$, $du=3x^2\\,dx$, so $\\int u^5\\,du = \\tfrac{u^6}{6} = \\tfrac{(x^3+4)^6}{6}+C$. No extra constant is needed because $du$ matched exactly.',
            },
            {
              question: 'Evaluate $\\int x\\sqrt{x^2+1}\\,dx$.',
              options: [
                '$\\dfrac{1}{3}(x^2+1)^{3/2} + C$',
                '$\\dfrac{2}{3}(x^2+1)^{3/2} + C$',
                '$(x^2+1)^{3/2} + C$',
                '$\\dfrac{1}{2}(x^2+1)^{1/2} + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=x^2+1$, $x\\,dx=\\tfrac12 du$: $\\int u^{1/2}\\tfrac12\\,du = \\tfrac12\\cdot\\tfrac23 u^{3/2} = \\tfrac13(x^2+1)^{3/2}+C$.',
            },
          ],
        },
      },
      {
        id: 'usub4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Power Integral** 🔽

For $\\displaystyle\\int x^2(x^3+2)^4\\,dx$, fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Choose $u$:', options: ['$u = x^3 + 2$', '$u = x^2$', '$u = (x^3+2)^4$', '$u = x^3$'] },
            { label: 'Find $du$:', options: ['$du = 3x^2\\,dx$', '$du = 2x\\,dx$', '$du = x^2\\,dx$', '$du = 4x^3\\,dx$'] },
            { label: 'Rewrite $x^2\\,dx$:', options: ['$\\tfrac13\\,du$', '$3\\,du$', '$\\tfrac12\\,du$', '$du$'] },
            { label: 'Integral in $u$:', options: ['$\\int \\tfrac13 u^4\\,du$', '$\\int u^4\\,du$', '$\\int 3u^4\\,du$', '$\\int \\tfrac13 u^4\\,dx$'] },
          ],
          correctAnswers: ['$u = x^3 + 2$', '$du = 3x^2\\,dx$', '$\\tfrac13\\,du$', '$\\int \\tfrac13 u^4\\,du$'],
          hint1: 'The inner function is $x^3+2$, so $du = 3x^2\\,dx$.',
          hint2: 'Solve $du = 3x^2\\,dx$ for the piece in the integrand: $x^2\\,dx = \\tfrac13\\,du$.',
          hint3: 'Replace $(x^3+2)^4$ with $u^4$ and $x^2\\,dx$ with $\\tfrac13\\,du$ to get $\\int\\tfrac13 u^4\\,du$.',
          explanation: '$u=x^3+2$, $du=3x^2\\,dx$, $x^2\\,dx=\\tfrac13 du$, so the integral becomes $\\int\\tfrac13 u^4\\,du = \\tfrac{1}{15}u^5 = \\tfrac{1}{15}(x^3+2)^5 + C$.',
        },
      },
      {
        id: 'usub4-drill',
        type: 'input-boxes' as const,
        content: `**Fill In the Coefficient** 🧮

After integrating in $u$, give the **leading fraction** that multiplies the power. (Enter as a fraction or decimal.)

**1)** $\\int (3x+2)^4\\,dx = k(3x+2)^5 + C$. Find $k$.
**2)** $\\int x(x^2+7)^3\\,dx = k(x^2+7)^4 + C$. Find $k$.
**3)** $\\int x^2\\sqrt{x^3+1}\\,dx = k(x^3+1)^{3/2} + C$. Find $k$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/15', '1/8', '2/9'],
          hint1: '$u=3x+2$, $dx=\\tfrac13 du$: $\\int u^4\\tfrac13 du = \\tfrac13\\cdot\\tfrac{u^5}{5} = \\tfrac{1}{15}u^5$.',
          hint2: '$u=x^2+7$, $x\\,dx=\\tfrac12 du$: $\\int u^3\\tfrac12 du = \\tfrac12\\cdot\\tfrac{u^4}{4} = \\tfrac18 u^4$.',
          hint3: '$u=x^3+1$, $x^2\\,dx=\\tfrac13 du$: $\\int u^{1/2}\\tfrac13 du = \\tfrac13\\cdot\\tfrac23 u^{3/2} = \\tfrac29 u^{3/2}$.',
          explanation: '1) $k=\\tfrac{1}{15}$.  2) $k=\\tfrac18$.  3) $k=\\tfrac29$. Each is (constant from $du$) $\\times$ (reciprocal of the new exponent).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub5-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 5 of 7 — Trig, Exponential & Logarithmic Integrals**

---

> 🔑 **Focus:** The same method handles $\\sin$, $\\cos$, $e^{(\\cdots)}$, and $\\dfrac{1}{(\\cdots)}$. Memorize the four core antiderivatives and let $u$ be the inner function.`,
      },
      {
        id: 'usub5-table',
        type: 'text' as const,
        content: `## The Core Antiderivatives

After substitution, you'll land on one of these:

| Integral in $u$ | Result |
|-----------------|--------|
| $\\int \\cos u\\,du$ | $\\sin u + C$ |
| $\\int \\sin u\\,du$ | $-\\cos u + C$ |
| $\\int e^u\\,du$ | $e^u + C$ |
| $\\int \\dfrac{1}{u}\\,du$ | $\\ln\\lvert u\\rvert + C$ |

### Worked Example: Trig — $\\int 2x\\cos(x^2)\\,dx$

$u = x^2$, $du = 2x\\,dx$:
$$\\int \\cos u\\,du = \\sin u + C = \\sin(x^2) + C$$

### Worked Example: Exponential — $\\int e^{5x}\\,dx$

$u = 5x$, $du = 5\\,dx \\Rightarrow dx = \\tfrac15\\,du$:
$$\\int e^u\\cdot \\tfrac15\\,du = \\tfrac15 e^u + C = \\tfrac15 e^{5x} + C$$`,
      },
      {
        id: 'usub5-log',
        type: 'text' as const,
        content: `## The Logarithm Case: $\\int \\dfrac{1}{\\text{stuff}}\\,dx$

When the derivative of the denominator sits on top, you get a natural log.

### Worked Example: $\\int \\dfrac{1}{3x+2}\\,dx$

$u = 3x+2$, $du = 3\\,dx \\Rightarrow dx = \\tfrac13\\,du$:

$$\\int \\frac{1}{u}\\cdot \\tfrac13\\,du = \\tfrac13\\ln\\lvert u\\rvert + C = \\tfrac13\\ln\\lvert 3x+2\\rvert + C$$

### Worked Example: $\\int \\dfrac{2x}{x^2+5}\\,dx$

$u = x^2+5$, $du = 2x\\,dx$ — exactly the numerator:

$$\\int \\frac{1}{u}\\,du = \\ln\\lvert u\\rvert + C = \\ln\\lvert x^2+5\\rvert + C$$

> ⚠️ **Absolute values:** $\\int \\frac{1}{u}\\,du = \\ln\\lvert u\\rvert + C$, **with** the absolute value — the antiderivative of $1/u$ is defined for negative $u$ too.`,
      },
      {
        id: 'usub5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Antiderivative** 🔽

After choosing $u$, select the correct antiderivative.`,
        exercise: {
          dropdowns: [
            { label: '$\\int \\cos u\\,du =$', options: ['$\\sin u + C$', '$-\\sin u + C$', '$-\\cos u + C$', '$\\tan u + C$'] },
            { label: '$\\int \\sin u\\,du =$', options: ['$-\\cos u + C$', '$\\cos u + C$', '$\\sin u + C$', '$-\\sin u + C$'] },
            { label: '$\\int \\dfrac{1}{u}\\,du =$', options: ['$\\ln\\lvert u\\rvert + C$', '$\\dfrac{1}{u^2} + C$', '$u^{-2} + C$', '$\\ln(u) + C$'] },
            { label: '$\\int e^{u}\\,du =$', options: ['$e^{u} + C$', '$u e^{u} + C$', '$\\dfrac{e^{u}}{u} + C$', '$e^{u-1} + C$'] },
          ],
          correctAnswers: ['$\\sin u + C$', '$-\\cos u + C$', '$\\ln\\lvert u\\rvert + C$', '$e^{u} + C$'],
          hint1: 'The antiderivative of $\\cos$ is $\\sin$; the antiderivative of $\\sin$ is $-\\cos$.',
          hint2: 'Integrating $1/u$ gives a natural log — include the absolute value: $\\ln\\lvert u\\rvert$.',
          hint3: '$e^u$ is its own antiderivative: $\\int e^u\\,du = e^u + C$.',
          explanation: 'These four are the workhorses after substitution: $\\int\\cos u\\,du=\\sin u$, $\\int\\sin u\\,du=-\\cos u$, $\\int\\frac{1}{u}\\,du=\\ln\\lvert u\\rvert$, $\\int e^u\\,du=e^u$ (each $+C$).',
        },
      },
      {
        id: 'usub5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\int \\dfrac{1}{3x+2}\\,dx$.',
              options: [
                '$\\dfrac{1}{3}\\ln\\lvert 3x+2\\rvert + C$',
                '$\\ln\\lvert 3x+2\\rvert + C$',
                '$3\\ln\\lvert 3x+2\\rvert + C$',
                '$\\dfrac{1}{3(3x+2)} + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=3x+2$, $dx=\\tfrac13 du$: $\\int\\frac1u\\cdot\\tfrac13\\,du = \\tfrac13\\ln\\lvert u\\rvert = \\tfrac13\\ln\\lvert 3x+2\\rvert+C$.',
            },
            {
              question: 'Evaluate $\\int e^{5x}\\,dx$.',
              options: [
                '$\\dfrac{1}{5}e^{5x} + C$',
                '$5e^{5x} + C$',
                '$e^{5x} + C$',
                '$\\dfrac{1}{5}e^{x} + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=5x$, $dx=\\tfrac15 du$: $\\int e^u\\cdot\\tfrac15\\,du = \\tfrac15 e^{5x}+C$. Differentiating gives $\\tfrac15\\cdot 5e^{5x}=e^{5x}$ ✓.',
            },
            {
              question: 'Evaluate $\\int 2x\\sin(x^2)\\,dx$.',
              options: [
                '$-\\cos(x^2) + C$',
                '$\\cos(x^2) + C$',
                '$-2\\cos(x^2) + C$',
                '$\\sin(x^2) + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=x^2$, $du=2x\\,dx$: $\\int\\sin u\\,du = -\\cos u = -\\cos(x^2)+C$.',
            },
          ],
        },
      },
      {
        id: 'usub5-drill',
        type: 'input-boxes' as const,
        content: `**Integrate Each One** 🧮

Give the leading coefficient $k$ in the antiderivative. *(fractions ok; watch signs)*

**1)** $\\int \\sin(3x)\\,dx = k\\cos(3x) + C$. Find $k$.
**2)** $\\int e^{4x}\\,dx = k\\,e^{4x} + C$. Find $k$.
**3)** $\\int \\dfrac{2}{2x+3}\\,dx = k\\ln\\lvert 2x+3\\rvert + C$. Find $k$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1/3', '1/4', '1'],
          hint1: '$u=3x$, $dx=\\tfrac13 du$: $\\int\\sin u\\cdot\\tfrac13\\,du = -\\tfrac13\\cos u$. So $k=-\\tfrac13$ (negative!).',
          hint2: '$u=4x$, $dx=\\tfrac14 du$: $\\int e^u\\cdot\\tfrac14\\,du = \\tfrac14 e^{4x}$, so $k=\\tfrac14$.',
          hint3: '$u=2x+3$, $du=2\\,dx$ — exactly the numerator: $\\int\\frac1u\\,du = \\ln\\lvert 2x+3\\rvert$, so $k=1$.',
          explanation: '1) $\\int\\sin(3x)\\,dx = -\\tfrac13\\cos(3x)+C$, $k=-\\tfrac13$.  2) $\\int e^{4x}\\,dx = \\tfrac14 e^{4x}+C$, $k=\\tfrac14$.  3) $\\int\\frac{2}{2x+3}\\,dx = \\ln\\lvert 2x+3\\rvert+C$, $k=1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub6-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 6 of 7 — Definite Integrals**

---

> 🔑 **Big Idea:** With a definite integral $\\int_a^b$, you have two valid options. The faster, less error-prone way is to **change the limits** so you never have to back-substitute.`,
      },
      {
        id: 'usub6-twoways',
        type: 'text' as const,
        content: `## Two Methods for $\\int_a^b$

**Method A — Change the limits (recommended).**
When you substitute $u = g(x)$, also convert the bounds: the new limits are $g(a)$ and $g(b)$. Then evaluate entirely in $u$ — no back-substitution.

$$\\int_{x=a}^{x=b} f(g(x))g'(x)\\,dx = \\int_{u=g(a)}^{u=g(b)} f(u)\\,du$$

**Method B — Back-substitute, then use original $x$-limits.**
Find the antiderivative in $u$, convert back to $x$, then plug in the **original** $x$-bounds.

> ⚠️ **Most common error:** changing to $u$ but forgetting to change the limits, then plugging the **$x$-bounds** into a **$u$-expression**. Pick one method and stay consistent.`,
      },
      {
        id: 'usub6-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\int_0^2 2x(x^2+1)^3\\,dx$

**Method A (change limits).** Let $u = x^2+1$, $du = 2x\\,dx$.

Convert the bounds:
- When $x = 0$: $u = 0^2 + 1 = 1$.
- When $x = 2$: $u = 2^2 + 1 = 5$.

$$\\int_0^2 2x(x^2+1)^3\\,dx = \\int_1^5 u^3\\,du = \\left[\\frac{u^4}{4}\\right]_1^5 = \\frac{625}{4} - \\frac{1}{4} = \\frac{624}{4} = 156$$

> ✅ **Check with Method B:** antiderivative $\\dfrac{(x^2+1)^4}{4}$; at $x=2$ it is $\\dfrac{5^4}{4}=\\dfrac{625}{4}$, at $x=0$ it is $\\dfrac{1}{4}$; difference $=156$ ✓. Same answer, but Method A avoided rewriting in $x$.`,
      },
      {
        id: 'usub6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Change the Limits** 🔽

Evaluate $\\displaystyle\\int_1^3 2x(x^2)^2\\,dx$ using $u = x^2$. Fill in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'Lower limit: when $x=1$, $u =$', options: ['$1$', '$0$', '$2$', '$3$'] },
            { label: 'Upper limit: when $x=3$, $u =$', options: ['$9$', '$6$', '$3$', '$27$'] },
            { label: 'Integral in $u$:', options: ['$\\int_1^9 u^2\\,du$', '$\\int_1^3 u^2\\,du$', '$\\int_1^9 2u^2\\,du$', '$\\int_0^9 u^2\\,du$'] },
            { label: 'Value:', options: ['$\\dfrac{728}{3}$', '$\\dfrac{729}{3}$', '$243$', '$\\dfrac{26}{3}$'] },
          ],
          correctAnswers: ['$1$', '$9$', '$\\int_1^9 u^2\\,du$', '$\\dfrac{728}{3}$'],
          hint1: '$u=x^2$, so $x=1\\Rightarrow u=1$ and $x=3\\Rightarrow u=9$. Also $du=2x\\,dx$, which is exactly the rest of the integrand.',
          hint2: 'The integrand $2x(x^2)^2\\,dx$ becomes $u^2\\,du$ with the new limits $1$ to $9$.',
          hint3: '$\\int_1^9 u^2\\,du = \\big[\\tfrac{u^3}{3}\\big]_1^9 = \\tfrac{729}{3}-\\tfrac{1}{3} = \\tfrac{728}{3}$.',
          explanation: 'Changing limits: $u$ runs $1\\to 9$, and $2x\\,dx=du$, so $\\int_1^9 u^2\\,du = \\tfrac{729-1}{3} = \\tfrac{728}{3}$.',
        },
      },
      {
        id: 'usub6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using $u = x^2+1$ on $\\displaystyle\\int_1^3 2x(x^2+1)\\,dx$, the new limits on $u$ are:',
              options: [
                'from $2$ to $10$',
                'from $1$ to $3$',
                'from $1$ to $9$',
                'from $0$ to $10$',
              ],
              correctAnswer: 0,
              explanation: 'When $x=1$, $u=1^2+1=2$; when $x=3$, $u=3^2+1=10$. The $u$-limits run from $2$ to $10$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\int_0^1 3e^{3x}\\,dx$.',
              options: [
                '$e^3 - 1$',
                '$e^3$',
                '$\\dfrac{e^3 - 1}{3}$',
                '$3e^3 - 3$',
              ],
              correctAnswer: 0,
              explanation: '$u=3x$, $du=3\\,dx$; limits $x:0\\to1$ give $u:0\\to3$. $\\int_0^3 e^u\\,du = e^3 - e^0 = e^3 - 1$.',
            },
            {
              question: 'A student substitutes $u=x^2+1$ in a definite integral but keeps the original $x$-limits while integrating in $u$. This is:',
              options: [
                'wrong — the limits must be converted to $u$, or you must back-substitute to $x$ first',
                'fine, since limits never change',
                'fine, because $u$ and $x$ have the same bounds',
                'only wrong for trig integrals',
              ],
              correctAnswer: 0,
              explanation: 'The bounds are values of the variable of integration. If you integrate in $u$, the limits must be the $u$-values; otherwise convert the antiderivative back to $x$ and use the $x$-limits. Mixing them is the most common definite-integral error.',
            },
          ],
        },
      },
      {
        id: 'usub6-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Definite Integrals** 🧮

Use the change-of-limits method. Enter exact values (fractions ok).

**1)** $\\displaystyle\\int_0^1 2x(x^2+1)^3\\,dx = \\,?$
**2)** $\\displaystyle\\int_0^1 e^{2x}\\cdot 2\\,dx = \\,?$  *(leave $e$ symbolic: form is $e^2 - 1$, enter the coefficient pattern below)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['15/4', 'e^2-1'],
          hint1: '$u=x^2+1$: $x=0\\Rightarrow u=1$, $x=1\\Rightarrow u=2$. $\\int_1^2 u^3\\,du = \\big[\\tfrac{u^4}{4}\\big]_1^2 = \\tfrac{16}{4}-\\tfrac14 = \\tfrac{15}{4}$.',
          hint2: 'For #2, $u=2x$: $x=0\\Rightarrow u=0$, $x=1\\Rightarrow u=2$, $du=2\\,dx$. $\\int_0^2 e^u\\,du = e^2 - e^0 = e^2 - 1$.',
          hint3: 'Write the second answer literally as $e^2-1$ (the value $\\approx 6.389$).',
          explanation: '1) $\\int_1^2 u^3\\,du = \\tfrac{16-1}{4} = \\tfrac{15}{4}$.  2) $\\int_0^2 e^u\\,du = e^2 - 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'u-substitution',
    sections: [
      {
        id: 'usub7-intro',
        type: 'text' as const,
        content: `# ∫ U-Substitution

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) recognize when substitution applies, (2) choose $u$, (3) run the five steps, (4) integrate powers, roots, trig, exponentials, and logs, and (5) handle definite integrals. Let's put it all together.`,
      },
      {
        id: 'usub7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Integrand | Choose $u$ | Result |
|-----------|-----------|--------|
| $(\\text{inner})^n\\,(\\text{inner})'$ | inner | $\\dfrac{u^{n+1}}{n+1}$ |
| $\\dfrac{(\\text{inner})'}{\\text{inner}}$ | inner | $\\ln\\lvert u\\rvert$ |
| $e^{(\\text{inner})}(\\text{inner})'$ | inner | $e^u$ |
| $\\cos(\\text{inner})(\\text{inner})'$ | inner | $\\sin u$ |
| $\\sin(\\text{inner})(\\text{inner})'$ | inner | $-\\cos u$ |

> ⚠️ **Three reminders:** (1) After substituting, **no $x$ may remain**. (2) Only adjust for a **constant** factor — never a variable. (3) For definite integrals, **change the limits** or back-substitute, never mix the two.`,
      },
      {
        id: 'usub7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\int \\cos(4x)\\,dx$.',
              options: [
                '$\\dfrac{1}{4}\\sin(4x) + C$',
                '$4\\sin(4x) + C$',
                '$\\sin(4x) + C$',
                '$-\\dfrac{1}{4}\\sin(4x) + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=4x$, $dx=\\tfrac14 du$: $\\int\\cos u\\cdot\\tfrac14\\,du = \\tfrac14\\sin(4x)+C$.',
            },
            {
              question: 'Evaluate $\\int \\dfrac{x}{x^2+1}\\,dx$.',
              options: [
                '$\\dfrac{1}{2}\\ln\\lvert x^2+1\\rvert + C$',
                '$\\ln\\lvert x^2+1\\rvert + C$',
                '$2\\ln\\lvert x^2+1\\rvert + C$',
                '$\\dfrac{1}{2}\\ln\\lvert x\\rvert + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=x^2+1$, $x\\,dx=\\tfrac12 du$: $\\int\\frac1u\\cdot\\tfrac12\\,du = \\tfrac12\\ln\\lvert x^2+1\\rvert+C$. (No absolute-value worry here since $x^2+1>0$, but writing it is good practice.)',
            },
            {
              question: 'Which integral can **NOT** be done by a simple u-substitution as written?',
              options: [
                '$\\int (x^2+1)^3\\,dx$',
                '$\\int x(x^2+1)^3\\,dx$',
                '$\\int 2x(x^2+1)^3\\,dx$',
                '$\\int x(x^2+1)^{1/2}\\,dx$',
              ],
              correctAnswer: 0,
              explanation: '$\\int (x^2+1)^3\\,dx$ has no factor of $x$ to supply $du=2x\\,dx$, and you may only adjust for a constant — not a missing variable. The others all contain an $x$ that matches $du$.',
            },
          ],
        },
      },
      {
        id: 'usub7-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

**1)** $\\displaystyle\\int_0^1 3x^2(x^3+1)^2\\,dx = \\,?$  *(fraction ok)*
**2)** $\\int (5x-2)^3\\,dx = k(5x-2)^4 + C$. Find $k$.  *(fraction ok)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7/3', '1/20'],
          hint1: 'For #1, $u=x^3+1$: $x=0\\Rightarrow u=1$, $x=1\\Rightarrow u=2$, $du=3x^2\\,dx$. So $\\int_1^2 u^2\\,du = \\big[\\tfrac{u^3}{3}\\big]_1^2$.',
          hint2: '$\\int_1^2 u^2\\,du = \\tfrac{8}{3}-\\tfrac13 = \\tfrac{7}{3}$.',
          hint3: 'For #2, $u=5x-2$, $dx=\\tfrac15 du$: $\\int u^3\\tfrac15\\,du = \\tfrac15\\cdot\\tfrac{u^4}{4} = \\tfrac{1}{20}u^4$, so $k=\\tfrac{1}{20}$.',
          explanation: '1) $\\int_1^2 u^2\\,du = \\tfrac{7}{3}$.  2) $k = \\tfrac15\\cdot\\tfrac14 = \\tfrac{1}{20}$.',
        },
      },
      {
        id: 'usub7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $\\int x^2(x^3+5)^7\\,dx$, the correct substitution and differential are:',
              options: [
                '$u = x^3+5,\\ du = 3x^2\\,dx$',
                '$u = x^2,\\ du = 2x\\,dx$',
                '$u = (x^3+5)^7,\\ du = 7(x^3+5)^6\\,dx$',
                '$u = x^3,\\ du = x^2\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'The inner function is $x^3+5$, so $u=x^3+5$ and $du=3x^2\\,dx$. The $x^2\\,dx$ in the integrand matches $du$ up to the constant $3$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\int_0^2 2x(x^2+1)^3\\,dx$.',
              options: ['$156$', '$624$', '$\\dfrac{625}{4}$', '$39$'],
              correctAnswer: 0,
              explanation: '$u=x^2+1$ runs from $1$ to $5$; $\\int_1^5 u^3\\,du = \\big[\\tfrac{u^4}{4}\\big]_1^5 = \\tfrac{625-1}{4} = 156$.',
            },
            {
              question: 'Evaluate $\\int \\dfrac{1}{2x+1}\\,dx$.',
              options: [
                '$\\dfrac{1}{2}\\ln\\lvert 2x+1\\rvert + C$',
                '$\\ln\\lvert 2x+1\\rvert + C$',
                '$2\\ln\\lvert 2x+1\\rvert + C$',
                '$\\dfrac{1}{2(2x+1)} + C$',
              ],
              correctAnswer: 0,
              explanation: '$u=2x+1$, $dx=\\tfrac12 du$: $\\int\\frac1u\\cdot\\tfrac12\\,du = \\tfrac12\\ln\\lvert 2x+1\\rvert+C$.',
            },
          ],
        },
      },
    ],
  },
]
