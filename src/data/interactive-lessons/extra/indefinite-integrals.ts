import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Indefinite Integrals and Notation (AP Calculus AB).
 * Registry key / DB Topic.slug: 'indefinite-integrals'.
 * 7 parts, gold-standard structure: antiderivatives & the "+C" idea → integral notation →
 * the power rule for integration → constant-multiple & sum/difference rules → integrals of
 * trig, exponential, and 1/x functions → solving for C with initial conditions →
 * mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every antiderivative was verified by differentiating the result before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-1-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 1 of 7 — Antiderivatives and the "+C"**

---

### Topics in This Part

| Section |
|---------|
| What Is an Antiderivative? |
| Reversing the Derivative |
| Why Every Antiderivative Needs "+C" |
| The Family of Antiderivatives |

> 🔑 **Key Concept:** A derivative answers "how fast is this changing?" An **antiderivative** runs that machine *backward* — it starts from the rate of change and rebuilds the original function. The indefinite integral is the tool that collects *all* such functions at once.`,
      },
      {
        id: 'ind-int-1-antideriv',
        type: 'text' as const,
        content: `## What Is an Antiderivative?

A function $F$ is an **antiderivative** of $f$ if differentiating $F$ gives back $f$:

$$F'(x) = f(x)$$

So finding an antiderivative means asking: *"What function has a derivative equal to $f$?"*

### Examples

| $f(x)$ | An antiderivative $F(x)$ | Check: $F'(x)$ |
|--------|--------------------------|----------------|
| $2x$ | $x^2$ | $\\frac{d}{dx}[x^2] = 2x$ ✓ |
| $3x^2$ | $x^3$ | $\\frac{d}{dx}[x^3] = 3x^2$ ✓ |
| $\\cos x$ | $\\sin x$ | $\\frac{d}{dx}[\\sin x] = \\cos x$ ✓ |
| $1$ | $x$ | $\\frac{d}{dx}[x] = 1$ ✓ |

> 💡 **The golden test:** You can always *check* an antiderivative by differentiating it. If the derivative matches $f$, you're right — no exceptions. This makes integration self-checking.`,
      },
      {
        id: 'ind-int-1-check-reverse',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which function is an antiderivative of $f(x) = 4x^3$?',
              options: ['$x^4$', '$12x^2$', '$4x^4$', '$x^3$'],
              correctAnswer: 0,
              explanation: 'We need $F$ with $F\'(x) = 4x^3$. Since $\\frac{d}{dx}[x^4] = 4x^3$, the antiderivative is $x^4$. (The option $12x^2$ is the *derivative* of $4x^3$ — the wrong direction.)',
            },
            {
              question: '$F(x) = \\sin x$ is an antiderivative of which function?',
              options: ['$\\cos x$', '$-\\cos x$', '$-\\sin x$', '$\\sin x$'],
              correctAnswer: 0,
              explanation: 'An antiderivative of $f$ satisfies $F\'(x) = f(x)$. Here $\\frac{d}{dx}[\\sin x] = \\cos x$, so $\\sin x$ is an antiderivative of $\\cos x$.',
            },
          ],
        },
      },
      {
        id: 'ind-int-1-plusC',
        type: 'text' as const,
        content: `## Why Every Antiderivative Needs "+C"

Here's the catch. The derivative of a **constant** is zero:

$$\\frac{d}{dx}[7] = 0, \\qquad \\frac{d}{dx}[-3] = 0, \\qquad \\frac{d}{dx}[C] = 0$$

So $x^2$, $x^2 + 5$, and $x^2 - 100$ **all** have derivative $2x$:

$$\\frac{d}{dx}[x^2 + 5] = 2x, \\qquad \\frac{d}{dx}[x^2 - 100] = 2x$$

Antiderivatives come in an entire **family** that differ only by a constant. We capture every member at once with the **constant of integration** $C$:

$$\\text{antiderivative of } 2x = x^2 + C$$

> ⚠️ **The single most common integration mistake** is forgetting the $+C$. On the AP exam, an indefinite integral written without $+C$ is marked wrong even if the rest is perfect.`,
      },
      {
        id: 'ind-int-1-check-plusC',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is NOT an antiderivative of $f(x) = 2x$?',
              options: ['$x^2 + 2x$', '$x^2$', '$x^2 + 5$', '$x^2 - 100$'],
              correctAnswer: 0,
              explanation: 'Every antiderivative of $2x$ has the form $x^2 + C$ (a constant added). But $x^2 + 2x$ differs by a *variable* term $2x$, not a constant — its derivative is $2x + 2 \\ne 2x$. The other three all differ only by a constant.',
            },
            {
              question: 'Why must an indefinite integral include "$+C$"?',
              options: ['Because functions differing by any constant have the same derivative', 'Because $C$ is always equal to zero', 'Because the integral sign requires a letter', 'Because $C$ is the variable of integration'],
              correctAnswer: 0,
              explanation: 'The derivative of any constant is $0$, so $F(x)$, $F(x)+5$, $F(x)-100$ all share the same derivative. The $+C$ captures this whole family at once.',
            },
          ],
        },
      },
      {
        id: 'ind-int-1-family',
        type: 'text' as const,
        content: `## The Family of Antiderivatives

Geometrically, $y = x^2 + C$ is the **same parabola shifted up or down** by $C$. Every curve in the family has the *same slope* at each $x$-value — which is exactly why they share the derivative $2x$.

> 🔑 **The Key Theorem:** If $F$ is *one* antiderivative of $f$, then *every* antiderivative has the form $F(x) + C$ for some constant $C$. There are no other antiderivatives hiding anywhere.

This is what "indefinite" means: the integral is **indefinite** because $C$ is undetermined. In Part 6 we'll pin $C$ down using an extra piece of information (an *initial condition*).`,
      },
      {
        id: 'ind-int-1-drill',
        type: 'input-boxes' as const,
        content: `**Reverse the Derivative** 🧮

For each $f(x)$, find the value of the exponent or coefficient in the antiderivative. Differentiate your answer to check.

**1)** An antiderivative of $f(x) = 5x^4$ is $x^{?}$. Enter the exponent.
**2)** $\\frac{d}{dx}[x^2 + C] = 2x$ for *any* $C$. How many different antiderivatives of $2x$ are there?  *(enter a word: "one" or "infinitely many")*
**3)** An antiderivative of $f(x) = 6x$ is $3x^{?}$. Enter the exponent.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', 'infinitely many', '2'],
          hint1: 'You need $F$ with $F\'(x) = 5x^4$. Since $\\frac{d}{dx}[x^5] = 5x^4$, the exponent is $5$.',
          hint2: 'Any constant $C$ works because its derivative is $0$, so there are infinitely many.',
          hint3: '$\\frac{d}{dx}[3x^2] = 6x$, so the exponent is $2$.',
          explanation: '1) $x^5$ since $\\frac{d}{dx}[x^5]=5x^4$. 2) Infinitely many — they form the family $x^2 + C$. 3) $3x^2$ since $\\frac{d}{dx}[3x^2]=6x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-2-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 2 of 7 — Reading the Integral Sign**

---

> 🔑 **The Idea:** Mathematicians needed a compact symbol for "the family of all antiderivatives." That symbol is the **integral sign** $\\int$. This part decodes every piece of the notation so the rest of the lesson reads like a sentence.`,
      },
      {
        id: 'ind-int-2-notation',
        type: 'text' as const,
        content: `## The Indefinite Integral

The **indefinite integral** of $f$ is written:

$$\\int f(x)\\,dx = F(x) + C \\qquad \\text{where } F'(x) = f(x)$$

Read it out loud as: *"the integral of $f$ of $x$, dee-$x$, equals $F$ of $x$ plus $C$."*

Each symbol has a job:

| Symbol | Name | What it tells you |
|--------|------|-------------------|
| $\\int$ | integral sign | "find the antiderivative of…" |
| $f(x)$ | integrand | the function you're integrating |
| $dx$ | differential | **which variable** you integrate with respect to |
| $F(x)+C$ | the result | the whole family of antiderivatives |

> 💡 The integral sign $\\int$ is a stretched-out letter "S" (for **S**um). In Part 7 of the *definite* integral lessons you'll see why summation is hiding inside it — but for indefinite integrals, just read it as "antiderivative of."`,
      },
      {
        id: 'ind-int-2-check-integrand',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $\\displaystyle\\int 7x^2\\,dx$, what is the integrand?',
              options: ['$7x^2$', '$dx$', '$\\int$', '$x$'],
              correctAnswer: 0,
              explanation: 'The integrand is the function being integrated — everything between the integral sign and $dx$. Here that is $7x^2$.',
            },
            {
              question: 'Which is read correctly?',
              options: ['$\\int f(x)\\,dx$ means "an antiderivative of $f$, plus $C$"', '$\\int f(x)\\,dx$ means "the derivative of $f$"', '$\\int f(x)\\,dx$ means "$f$ multiplied by $x$"', '$\\int f(x)\\,dx$ means "$f$ evaluated at $x$"'],
              correctAnswer: 0,
              explanation: 'The integral sign means "find the antiderivative." The result is $F(x)+C$, where $F\'(x)=f(x)$ — a whole family of functions.',
            },
          ],
        },
      },
      {
        id: 'ind-int-2-dx',
        type: 'text' as const,
        content: `## The $dx$ Is Not Optional

The $dx$ tells you the **variable of integration**. It matters when other letters are floating around:

$$\\int 2t\\,dt = t^2 + C \\qquad\\text{(integrate with respect to } t\\text{)}$$

$$\\int a\\,dx = ax + C \\qquad\\text{(here } a \\text{ is a constant; integrate w.r.t. } x\\text{)}$$

In that second integral, $a$ is treated like a number, so its antiderivative w.r.t. $x$ is $ax$ — just as $\\int 5\\,dx = 5x + C$.

> ⚠️ **Always close the integral with $dx$ (or $dt$, $du$, …).** Leaving it off is like writing a sentence with no period — and it hides which variable you mean. It also marks the *end* of the integrand, so $\\int 2x\\,dx + 3$ means "(integral of $2x$) then add 3," not the integral of $2x+3$.`,
      },
      {
        id: 'ind-int-2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

Consider the statement $\\displaystyle\\int 3x^2\\,dx = x^3 + C$. Identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The integrand is:', options: ['$3x^2$', '$x^3$', '$dx$', '$C$'] },
            { label: 'The variable of integration is:', options: ['$x$', '$C$', '$3$', '$dx$'] },
            { label: 'The "$+C$" is called the:', options: ['constant of integration', 'integrand', 'differential', 'derivative'] },
            { label: '$\\int 3x^2\\,dx = x^3 + C$ because:', options: ['$\\frac{d}{dx}[x^3+C] = 3x^2$', '$\\frac{d}{dx}[3x^2] = 6x$', '$x^3$ is the derivative of $3x^2$', '$3x^2$ is a constant'] },
          ],
          correctAnswers: ['$3x^2$', '$x$', 'constant of integration', '$\\frac{d}{dx}[x^3+C] = 3x^2$'],
          hint1: 'The integrand is the function *inside* the integral, before $dx$.',
          hint2: 'The differential $dx$ names the variable — here it is $x$.',
          hint3: 'An integral is correct exactly when differentiating the result returns the integrand: $\\frac{d}{dx}[x^3+C]=3x^2$. ✓',
          explanation: 'Integrand $3x^2$, variable $x$ (from $dx$), and "$+C$" is the constant of integration. The result is verified by differentiating: $\\frac{d}{dx}[x^3+C]=3x^2$.',
        },
      },
      {
        id: 'ind-int-2-relationship',
        type: 'text' as const,
        content: `## Integration Undoes Differentiation

The integral sign and the derivative are **inverse operations**. Applying one then the other (carefully) gets you back where you started:

$$\\int F'(x)\\,dx = F(x) + C$$

For example, since $\\frac{d}{dx}[\\sin x] = \\cos x$:

$$\\int \\cos x\\,dx = \\sin x + C$$

> 🔑 **Strategy that never fails:** To integrate, ask *"what did I differentiate to get this?"* Then write that function $+\\,C$. If you're unsure, guess a function, differentiate it, and adjust.`,
      },
      {
        id: 'ind-int-2-check-notation',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does the $dx$ in $\\int f(x)\\,dx$ tell you?',
              options: ['Which variable you are integrating with respect to', 'The answer to the integral', 'The constant of integration', 'To multiply $f(x)$ by $x$'],
              correctAnswer: 0,
              explanation: 'The differential $dx$ identifies the variable of integration. In $\\int 2t\\,dt$ the variable is $t$; in $\\int 2x\\,dx$ it is $x$.',
            },
            {
              question: 'Which statement is true?',
              options: ['$\\int f(x)\\,dx$ represents a whole family of functions (because of $+C$)', '$\\int f(x)\\,dx$ is always a single number', 'The integral sign means "take the derivative"', 'The integrand is the same as the answer'],
              correctAnswer: 0,
              explanation: 'An *indefinite* integral has a $+C$, so it represents infinitely many functions at once — a family. (A *definite* integral, with bounds, gives a single number.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-3-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 3 of 7 — The Power Rule for Integration**

---

> 🔑 **The Workhorse:** Almost every polynomial you integrate uses one rule. The power rule for integration is the reverse of the power rule for derivatives — and it handles $x^n$ for nearly every exponent $n$.`,
      },
      {
        id: 'ind-int-3-rule',
        type: 'text' as const,
        content: `## The Power Rule

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\qquad (n \\ne -1)$$

In words: **add 1 to the exponent, then divide by the new exponent.** This is the exact reverse of the derivative power rule (which *subtracts* 1 and *multiplies* by the old exponent).

### Why it works

Differentiate the answer to check:

$$\\frac{d}{dx}\\left[\\frac{x^{n+1}}{n+1}\\right] = \\frac{(n+1)\\,x^{n}}{n+1} = x^n \\;✓$$

The new exponent $n+1$ in the numerator cancels the denominator, leaving $x^n$.

> ⚠️ **The forbidden case $n = -1$:** If $n = -1$, the formula divides by $n+1 = 0$. So the power rule **cannot** integrate $x^{-1} = \\frac{1}{x}$. That single case has its own rule (a logarithm) — we cover it in Part 5.`,
      },
      {
        id: 'ind-int-3-mechanics',
        type: 'dropdown-select' as const,
        content: `**Walk Through the Mechanics** 🔽

You're integrating $\\displaystyle\\int x^4\\,dx$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'The new exponent ($n+1$) is:', options: ['$5$', '$3$', '$4$', '$\\frac{1}{5}$'] },
            { label: 'You then divide by:', options: ['$5$', '$4$', '$x$', '$n$'] },
            { label: 'So $\\int x^4\\,dx =$', options: ['$\\frac{x^5}{5} + C$', '$4x^3 + C$', '$\\frac{x^5}{4} + C$', '$5x^5 + C$'] },
          ],
          correctAnswers: ['$5$', '$5$', '$\\frac{x^5}{5} + C$'],
          hint1: 'Add 1 to the exponent: $4 + 1 = 5$.',
          hint2: 'Divide by the *new* exponent, which is $5$.',
          hint3: '$\\int x^4\\,dx = \\frac{x^5}{5} + C$. Check: $\\frac{d}{dx}\\left[\\frac{x^5}{5}\\right] = \\frac{5x^4}{5} = x^4$ ✓.',
          explanation: 'Add 1 ($4\\to 5$), divide by the new exponent $5$: $\\int x^4\\,dx = \\frac{x^5}{5} + C$.',
        },
      },
      {
        id: 'ind-int-3-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example 1:** $\\displaystyle\\int x^3\\,dx$. Add 1 to the exponent ($3 \\to 4$), divide by 4:
$$\\int x^3\\,dx = \\frac{x^{4}}{4} + C$$

**Example 2:** $\\displaystyle\\int x\\,dx$. Here $x = x^1$, so $n = 1 \\to 2$:
$$\\int x\\,dx = \\frac{x^{2}}{2} + C$$

**Example 3 (constant):** $\\displaystyle\\int 1\\,dx$. Here $1 = x^0$, so $n = 0 \\to 1$:
$$\\int 1\\,dx = \\frac{x^{1}}{1} + C = x + C$$

**Example 4 (negative exponent):** $\\displaystyle\\int x^{-3}\\,dx$. Add 1: $-3 \\to -2$, divide by $-2$:
$$\\int x^{-3}\\,dx = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^{2}} + C$$

> 💡 **Rewrite first!** Roots and fractions are easier to integrate once written as powers. For instance $\\sqrt{x} = x^{1/2}$ and $\\frac{1}{x^{2}} = x^{-2}$. Convert, apply the rule, then simplify back if you like.`,
      },
      {
        id: 'ind-int-3-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int x^5\\,dx = $',
              options: ['$\\frac{x^6}{6} + C$', '$5x^4 + C$', '$\\frac{x^6}{5} + C$', '$6x^6 + C$'],
              correctAnswer: 0,
              explanation: 'Add 1 to the exponent ($5\\to 6$) and divide by the new exponent: $\\frac{x^6}{6}+C$. Check: $\\frac{d}{dx}\\left[\\frac{x^6}{6}\\right] = \\frac{6x^5}{6} = x^5$ ✓.',
            },
            {
              question: 'Why can the power rule NOT be used to integrate $\\frac{1}{x}$?',
              options: ['Because $\\frac{1}{x} = x^{-1}$ and the rule would divide by $n+1 = 0$', 'Because $\\frac{1}{x}$ has no antiderivative at all', 'Because the rule only works for positive exponents', 'Because $\\frac{1}{x}$ is a constant'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{x} = x^{-1}$, so $n = -1$ and $n+1 = 0$. Dividing by zero is undefined, so the power rule excludes $n=-1$. (Its antiderivative is $\\ln|x|+C$ — see Part 5.)',
            },
          ],
        },
      },
      {
        id: 'ind-int-3-rewrite-note',
        type: 'text' as const,
        content: `## Rewrite, Then Integrate

Before the power rule can fire, the term must look like $x^n$. So convert roots and reciprocals first:

| Original | Rewritten as $x^n$ | Integral |
|----------|--------------------|----------|
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{2}{3}x^{3/2} + C$ |
| $\\frac{1}{x^2}$ | $x^{-2}$ | $-x^{-1} + C = -\\frac{1}{x} + C$ |
| $\\sqrt[3]{x}$ | $x^{1/3}$ | $\\frac{3}{4}x^{4/3} + C$ |

> 💡 Dividing by a fraction is multiplying by its reciprocal: $\\dfrac{x^{3/2}}{3/2} = \\dfrac{2}{3}x^{3/2}$. Keep that move handy — fractional exponents are everywhere on the AP exam.`,
      },
      {
        id: 'ind-int-3-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Power Rule** 🧮

Integrate each. Enter the answer **without** the "$+C$" (just the function part). Use "^" for exponents, e.g. write \`x^4/4\` or \`(x^4)/4\`. For roots, rewrite as powers first.

**1)** $\\displaystyle\\int x^7\\,dx = $ ?  *(enter as* \`x^8/8\` *)*
**2)** $\\displaystyle\\int x^2\\,dx = $ ?  *(enter as* \`x^3/3\` *)*
**3)** $\\displaystyle\\int x^{1/2}\\,dx = $ ? Enter the **new exponent** as a fraction.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['x^8/8', 'x^3/3', '3/2'],
          hint1: 'Add 1 to the exponent ($7\\to 8$), then divide by 8: $\\frac{x^8}{8}$.',
          hint2: 'Add 1 ($2\\to 3$), divide by 3: $\\frac{x^3}{3}$.',
          hint3: 'For $\\sqrt{x} = x^{1/2}$, the new exponent is $\\frac{1}{2}+1 = \\frac{3}{2}$, and you divide by $\\frac{3}{2}$, giving $\\frac{2}{3}x^{3/2}$.',
          explanation: '1) $\\frac{x^8}{8}+C$. 2) $\\frac{x^3}{3}+C$. 3) $\\int x^{1/2}dx = \\frac{x^{3/2}}{3/2}+C = \\frac{2}{3}x^{3/2}+C$; the new exponent is $\\frac{3}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-4-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 4 of 7 — Constant-Multiple & Sum/Difference Rules**

---

> 🔑 **Build Bigger Integrals:** Real integrands are polynomials with many terms and coefficients out front. Two simple rules let you break any such integral into easy pieces handled by the power rule.`,
      },
      {
        id: 'ind-int-4-rules',
        type: 'text' as const,
        content: `## The Two Linearity Rules

**Constant-Multiple Rule** — a constant factor slides out front:

$$\\int k\\,f(x)\\,dx = k\\int f(x)\\,dx$$

**Sum & Difference Rule** — integrate term by term:

$$\\int \\big[f(x) \\pm g(x)\\big]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$$

Together these say integration is **linear**: pull constants out, and split sums into separate integrals.

> ⚠️ **No product or quotient rule for integrals!** Linearity only works for sums, differences, and constant multiples. You **cannot** write $\\int f\\cdot g\\,dx = \\int f\\,dx \\cdot \\int g\\,dx$ — that is false. (To integrate a product you must usually multiply it out or use a later technique.)`,
      },
      {
        id: 'ind-int-4-worked',
        type: 'text' as const,
        content: `## Worked Example: a Full Polynomial

$$\\int \\left(6x^2 - 4x + 5\\right)\\,dx$$

**Step 1 — Split** into separate integrals and pull out constants:
$$= 6\\int x^2\\,dx \\;-\\; 4\\int x\\,dx \\;+\\; 5\\int 1\\,dx$$

**Step 2 — Power rule** on each:
$$= 6\\cdot\\frac{x^3}{3} \\;-\\; 4\\cdot\\frac{x^2}{2} \\;+\\; 5x \\;+\\; C$$

**Step 3 — Simplify:**
$$= 2x^3 - 2x^2 + 5x + C$$

> ✅ **Check by differentiating:** $\\frac{d}{dx}[2x^3 - 2x^2 + 5x + C] = 6x^2 - 4x + 5$ ✓ — exactly the integrand.

> 💡 **Only one $+C$.** Each term technically produces its own constant, but they all combine into a single constant $C$. Never write multiple $C$'s.`,
      },
      {
        id: 'ind-int-4-trap',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a VALID integration step?',
              options: ['$\\int 5x^4\\,dx = 5\\int x^4\\,dx$', '$\\int x\\cdot x^2\\,dx = \\int x\\,dx \\cdot \\int x^2\\,dx$', '$\\int \\frac{x}{x^2}\\,dx = \\frac{\\int x\\,dx}{\\int x^2\\,dx}$', '$\\int (x^2)\\,dx = (\\int x\\,dx)^2$'],
              correctAnswer: 0,
              explanation: 'Only the constant-multiple rule is valid: a constant factor pulls out. There is NO product or quotient rule for integrals, so the other three are false.',
            },
            {
              question: '$\\displaystyle\\int \\left(4x^3 - 6x\\right)\\,dx = $',
              options: ['$x^4 - 3x^2 + C$', '$x^4 - 6x^2 + C$', '$12x^2 - 6 + C$', '$4x^4 - 6x^2 + C$'],
              correctAnswer: 0,
              explanation: '$4\\cdot\\frac{x^4}{4} - 6\\cdot\\frac{x^2}{2} = x^4 - 3x^2 + C$. Check: $\\frac{d}{dx}[x^4-3x^2+C] = 4x^3-6x$ ✓.',
            },
          ],
        },
      },
      {
        id: 'ind-int-4-byterm',
        type: 'text' as const,
        content: `## One Term at a Time

For a long polynomial, integrate **each term independently** and string the results together. The constant-multiple rule handles the coefficient; the power rule handles the variable.

$$\\int \\left(8x^3 + 3x^2 - 2\\right)\\,dx \\;=\\; \\underbrace{2x^4}_{8\\cdot\\frac{x^4}{4}} \\;+\\; \\underbrace{x^3}_{3\\cdot\\frac{x^3}{3}} \\;-\\; \\underbrace{2x}_{\\int 2\\,dx} \\;+\\; C$$

Try the same breakdown yourself in the next check.`,
      },
      {
        id: 'ind-int-4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Integrate Term by Term** 🔽

Work through $\\displaystyle\\int \\left(8x^3 + 3x^2 - 2\\right)\\,dx$ one piece at a time.`,
        exercise: {
          dropdowns: [
            { label: '$\\int 8x^3\\,dx =$', options: ['$2x^4$', '$8x^4$', '$24x^4$', '$2x^3$'] },
            { label: '$\\int 3x^2\\,dx =$', options: ['$x^3$', '$3x^3$', '$x^2$', '$6x$'] },
            { label: '$\\int (-2)\\,dx =$', options: ['$-2x$', '$-2$', '$-x^2$', '$0$'] },
            { label: 'The full answer is:', options: ['$2x^4 + x^3 - 2x + C$', '$2x^4 + x^3 - 2 + C$', '$8x^4 + 3x^3 - 2x + C$', '$2x^4 + 3x^3 - 2x + C$'] },
          ],
          correctAnswers: ['$2x^4$', '$x^3$', '$-2x$', '$2x^4 + x^3 - 2x + C$'],
          hint1: '$8\\int x^3\\,dx = 8\\cdot\\frac{x^4}{4} = 2x^4$.',
          hint2: '$3\\int x^2\\,dx = 3\\cdot\\frac{x^3}{3} = x^3$, and $\\int(-2)\\,dx = -2x$.',
          hint3: 'Add the pieces and attach a single $+C$: $2x^4 + x^3 - 2x + C$.',
          explanation: '$\\int(8x^3+3x^2-2)\\,dx = 2x^4 + x^3 - 2x + C$. Check: $\\frac{d}{dx}$ gives $8x^3+3x^2-2$ ✓.',
        },
      },
      {
        id: 'ind-int-4-practice-note',
        type: 'text' as const,
        content: `## Your Turn

The drill below asks only for a single coefficient from each integral — so focus on the constant-multiple step: $\\;k\\cdot\\dfrac{x^{n+1}}{n+1}$. Read each prompt carefully to see which coefficient it wants.`,
      },
      {
        id: 'ind-int-4-drill',
        type: 'input-boxes' as const,
        content: `**Integrate Polynomials** 🧮

Each answer has the form (coefficient)$x^{(\\text{power})}$ + … Enter the requested **coefficient** as a number or fraction (e.g. \`3\` or \`-1/2\`).

**1)** $\\int 9x^2\\,dx = \\_\\,x^3 + C$. Coefficient $=$ ?
**2)** $\\int 10x^4\\,dx = \\_\\,x^5 + C$. Coefficient $=$ ?
**3)** $\\int \\left(x^3 - 8x\\right)\\,dx = \\frac{1}{4}x^4 \\;+\\; \\_\\,x^2 + C$. The coefficient on $x^2$ $=$ ?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '2', '-4'],
          hint1: '$9\\int x^2\\,dx = 9\\cdot\\frac{x^3}{3} = 3x^3$, so the coefficient is $3$.',
          hint2: '$10\\int x^4\\,dx = 10\\cdot\\frac{x^5}{5} = 2x^5$, so the coefficient is $2$.',
          hint3: '$\\int(-8x)\\,dx = -8\\cdot\\frac{x^2}{2} = -4x^2$, so the coefficient is $-4$.',
          explanation: '1) $3x^3$. 2) $2x^5$. 3) $\\int(x^3-8x)\\,dx = \\frac{x^4}{4} - 4x^2 + C$, so the $x^2$ coefficient is $-4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-5-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 5 of 7 — Trig, Exponential & the $1/x$ Integrals**

---

> 🔑 **Beyond Polynomials:** The AP exam expects you to integrate the standard transcendental functions on sight. Each one is just a derivative you already know, run backward. Memorizing this short table is worth real points.`,
      },
      {
        id: 'ind-int-5-table',
        type: 'text' as const,
        content: `## The Essential Integral Table

Every entry is verified by differentiating the right side.

| Integral | Result | Because $\\frac{d}{dx}$[result] $=$ |
|----------|--------|-------------------------------------|
| $\\int \\cos x\\,dx$ | $\\sin x + C$ | $\\cos x$ |
| $\\int \\sin x\\,dx$ | $-\\cos x + C$ | $\\sin x$ |
| $\\int \\sec^2 x\\,dx$ | $\\tan x + C$ | $\\sec^2 x$ |
| $\\int e^x\\,dx$ | $e^x + C$ | $e^x$ |
| $\\int \\dfrac{1}{x}\\,dx$ | $\\ln\\lvert x\\rvert + C$ | $\\dfrac{1}{x}$ |

> ⚠️ **Watch the sign on $\\sin$.** Since $\\frac{d}{dx}[\\cos x] = -\\sin x$, integrating $\\sin x$ introduces a **negative**: $\\int \\sin x\\,dx = -\\cos x + C$. Mixing up these two signs is one of the most common slips.`,
      },
      {
        id: 'ind-int-5-sign-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\cos x\\,dx = $',
              options: ['$\\sin x + C$', '$-\\sin x + C$', '$\\cos x + C$', '$-\\cos x + C$'],
              correctAnswer: 0,
              explanation: 'Since $\\frac{d}{dx}[\\sin x] = \\cos x$, we have $\\int\\cos x\\,dx = \\sin x + C$. No negative sign appears for cosine.',
            },
            {
              question: 'A student writes $\\int \\sin x\\,dx = \\cos x + C$. What went wrong?',
              options: ['Missing a negative sign — it should be $-\\cos x + C$', 'It should be $\\sin x + C$', 'It should be $\\sec^2 x + C$', 'Nothing — it is correct'],
              correctAnswer: 0,
              explanation: '$\\frac{d}{dx}[\\cos x] = -\\sin x$, so $\\cos x$ is an antiderivative of $-\\sin x$. To integrate $+\\sin x$ you need $-\\cos x$: $\\int\\sin x\\,dx = -\\cos x + C$.',
            },
          ],
        },
      },
      {
        id: 'ind-int-5-lnabs',
        type: 'text' as const,
        content: `## The Special Case: $\\int \\frac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C$

Remember from Part 3 that the power rule **fails** on $x^{-1}$. The rescue comes from the derivative of the natural log:

$$\\frac{d}{dx}\\left[\\ln x\\right] = \\frac{1}{x}$$

So $\\int \\frac{1}{x}\\,dx = \\ln x + C$ — but only where $x > 0$. To cover **negative** $x$ as well, we use the **absolute value**:

$$\\int \\frac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C$$

> 💡 **Why the absolute value?** The function $\\frac{1}{x}$ is defined for negative $x$ too, but $\\ln x$ is not. Writing $\\ln\\lvert x\\rvert$ makes the antiderivative valid on both sides of $0$. AP graders expect the absolute value bars here.`,
      },
      {
        id: 'ind-int-5-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\sin x\\,dx = $',
              options: ['$-\\cos x + C$', '$\\cos x + C$', '$-\\sin x + C$', '$\\cos x - C$'],
              correctAnswer: 0,
              explanation: 'Since $\\frac{d}{dx}[-\\cos x] = -(-\\sin x) = \\sin x$, we get $\\int \\sin x\\,dx = -\\cos x + C$. The negative sign is essential.',
            },
            {
              question: '$\\displaystyle\\int \\frac{1}{x}\\,dx = $',
              options: ['$\\ln\\lvert x\\rvert + C$', '$\\frac{x^0}{0} + C$', '$-\\frac{1}{x^2} + C$', '$\\ln x^2 + C$'],
              correctAnswer: 0,
              explanation: 'The power rule fails ($n=-1$). The antiderivative is $\\ln\\lvert x\\rvert + C$, since $\\frac{d}{dx}[\\ln\\lvert x\\rvert] = \\frac{1}{x}$. The absolute value covers negative $x$.',
            },
            {
              question: '$\\displaystyle\\int e^x\\,dx = $',
              options: ['$e^x + C$', '$x e^{x-1} + C$', '$\\frac{e^{x+1}}{x+1} + C$', '$\\ln x + C$'],
              correctAnswer: 0,
              explanation: '$e^x$ is its own derivative AND its own antiderivative: $\\frac{d}{dx}[e^x]=e^x$, so $\\int e^x\\,dx = e^x + C$. (You do NOT apply the power rule to $e^x$ — the variable is in the exponent.)',
            },
          ],
        },
      },
      {
        id: 'ind-int-5-combine',
        type: 'text' as const,
        content: `## Combining the Table with Linearity

The same linearity rules from Part 4 apply to these functions:

$$\\int \\left(3\\cos x - 5e^x + \\frac{2}{x}\\right)\\,dx = 3\\sin x - 5e^x + 2\\ln\\lvert x\\rvert + C$$

Pull out each constant, integrate each piece from the table, and attach a single $C$.

> ✅ **Check:** $\\frac{d}{dx}\\left[3\\sin x - 5e^x + 2\\ln\\lvert x\\rvert + C\\right] = 3\\cos x - 5e^x + \\frac{2}{x}$ ✓.`,
      },
      {
        id: 'ind-int-5-drill',
        type: 'dropdown-select' as const,
        content: `**Mixed Function Integrals** 🔽

Integrate each. Pick the correct antiderivative (a "$+C$" is implied on every choice).`,
        exercise: {
          dropdowns: [
            { label: '$\\int 4\\cos x\\,dx =$', options: ['$4\\sin x$', '$-4\\sin x$', '$4\\cos x$', '$-4\\cos x$'] },
            { label: '$\\int 2e^x\\,dx =$', options: ['$2e^x$', '$e^{2x}$', '$2x e^{x-1}$', '$\\frac{2e^{x+1}}{x+1}$'] },
            { label: '$\\int \\frac{6}{x}\\,dx =$', options: ['$6\\ln\\lvert x\\rvert$', '$6\\ln x^2$', '$-\\frac{6}{x^2}$', '$\\frac{6x^0}{0}$'] },
            { label: '$\\int \\sec^2 x\\,dx =$', options: ['$\\tan x$', '$\\sec x$', '$\\cot x$', '$\\sec x\\tan x$'] },
          ],
          correctAnswers: ['$4\\sin x$', '$2e^x$', '$6\\ln\\lvert x\\rvert$', '$\\tan x$'],
          hint1: '$\\int\\cos x\\,dx = \\sin x$, so $\\int 4\\cos x\\,dx = 4\\sin x + C$.',
          hint2: '$e^x$ is its own antiderivative: $\\int 2e^x\\,dx = 2e^x + C$.',
          hint3: '$\\int\\frac{1}{x}\\,dx = \\ln\\lvert x\\rvert$, and $\\int\\sec^2 x\\,dx = \\tan x$.',
          explanation: 'From the table: $4\\sin x$, $2e^x$, $6\\ln\\lvert x\\rvert$, and $\\tan x$ (each $+C$). Verify any of them by differentiating.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-6-intro',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 6 of 7 — Initial Conditions: Solving for $C$**

---

> 🔑 **Pinning Down $C$:** An indefinite integral gives a whole family. If we know *one point* the function passes through — an **initial condition** — we can solve for $C$ and select the *one* particular antiderivative. This is the bridge from "family" to "specific function."`,
      },
      {
        id: 'ind-int-6-method',
        type: 'text' as const,
        content: `## The Three-Step Method

Given $f'(x)$ (a rate) plus a known point on $f$, recover $f(x)$ exactly:

1. **Integrate** $f'(x)$ to get the general antiderivative $F(x) + C$.
2. **Substitute** the known point to make an equation in $C$.
3. **Solve** for $C$, then write the final function.

### Worked Example

Find $f(x)$ if $f'(x) = 6x$ and $f(2) = 10$.

**Step 1 — Integrate:**
$$f(x) = \\int 6x\\,dx = 3x^2 + C$$

**Step 2 — Substitute $f(2) = 10$:**
$$3(2)^2 + C = 10 \\;\\Rightarrow\\; 12 + C = 10$$

**Step 3 — Solve:**
$$C = -2 \\;\\Rightarrow\\; f(x) = 3x^2 - 2$$

> ✅ **Check:** $f(2) = 3(4) - 2 = 10$ ✓ and $f'(x) = 6x$ ✓.`,
      },
      {
        id: 'ind-int-6-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f\'(x) = 4x^3$ and $f(1) = 7$, what is $f(x)$?',
              options: ['$x^4 + 6$', '$x^4 + 7$', '$x^4 - 6$', '$4x^4 + 3$'],
              correctAnswer: 0,
              explanation: '$f(x) = \\int 4x^3\\,dx = x^4 + C$. Then $f(1) = 1 + C = 7 \\Rightarrow C = 6$. So $f(x) = x^4 + 6$. Check: $f(1)=1+6=7$ ✓.',
            },
            {
              question: 'Why does an initial condition let you find a single antiderivative?',
              options: ['It gives one equation that determines the unknown constant $C$', 'It changes the integration rule used', 'It removes the need for the $+C$', 'It makes the integral definite instead of indefinite'],
              correctAnswer: 0,
              explanation: 'The family $F(x)+C$ has one unknown, $C$. A known point gives one equation, which solves for that single unknown — selecting exactly one curve from the family.',
            },
          ],
        },
      },
      {
        id: 'ind-int-6-2step',
        type: 'text' as const,
        content: `## Two Integrations: from Acceleration to Position

Physics often gives a *second* derivative. You integrate **twice**, picking up a constant each time, and need **two** conditions.

### Example

A particle has acceleration $a(t) = 6t$, initial velocity $v(0) = 4$, and initial position $s(0) = 1$. Find $s(t)$.

**Integrate once** (acceleration → velocity):
$$v(t) = \\int 6t\\,dt = 3t^2 + C_1, \\quad v(0) = C_1 = 4 \\;\\Rightarrow\\; v(t) = 3t^2 + 4$$

**Integrate again** (velocity → position):
$$s(t) = \\int (3t^2 + 4)\\,dt = t^3 + 4t + C_2, \\quad s(0) = C_2 = 1$$

$$\\boxed{s(t) = t^3 + 4t + 1}$$

> 💡 **One condition per constant.** Each integration adds a constant, so $n$ integrations need $n$ conditions. Here two integrations needed $v(0)$ and $s(0)$.`,
      },
      {
        id: 'ind-int-6-order',
        type: 'dropdown-select' as const,
        content: `**Order the Solution** 🔽

You're given $f'(x) = 4x + 3$ and $f(0) = 5$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, integrate to get $f(x) =$', options: ['$2x^2 + 3x + C$', '$4x^2 + 3x + C$', '$2x^2 + 3 + C$', '$4 + C$'] },
            { label: 'Substitute $f(0) = 5$ to get:', options: ['$C = 5$', '$C = 0$', '$C = -5$', '$C = 3$'] },
            { label: 'So the final function is:', options: ['$2x^2 + 3x + 5$', '$2x^2 + 3x$', '$4x^2 + 3x + 5$', '$2x^2 + 5$'] },
          ],
          correctAnswers: ['$2x^2 + 3x + C$', '$C = 5$', '$2x^2 + 3x + 5$'],
          hint1: '$\\int(4x+3)\\,dx = 4\\cdot\\frac{x^2}{2} + 3x + C = 2x^2 + 3x + C$.',
          hint2: 'At $x=0$ every $x$-term vanishes: $f(0) = 0 + 0 + C = 5$, so $C = 5$.',
          hint3: 'Put $C = 5$ back in: $f(x) = 2x^2 + 3x + 5$.',
          explanation: '$f(x) = \\int(4x+3)\\,dx = 2x^2 + 3x + C$; $f(0) = C = 5$, so $f(x) = 2x^2 + 3x + 5$.',
        },
      },
      {
        id: 'ind-int-6-drill-note',
        type: 'text' as const,
        content: `## Practice Set

The drill below mixes one-step and two-step problems. For each, integrate, substitute the given point, and solve for the constant. Take them one at a time.`,
      },
      {
        id: 'ind-int-6-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Constant** 🧮

Find $C$ (and the requested value) for each initial-value problem.

**1)** $f'(x) = 2x$, $f(3) = 5$. Find $C$ in $f(x) = x^2 + C$.
**2)** Using #1, what is $f(0)$?
**3)** $g'(x) = e^x$, $g(0) = 1$. Find $C$ in $g(x) = e^x + C$. *(Recall $e^0 = 1$.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '-4', '0'],
          hint1: '$f(x) = x^2 + C$, and $f(3) = 9 + C = 5$, so $C = 5 - 9 = -4$.',
          hint2: '$f(x) = x^2 - 4$, so $f(0) = 0 - 4 = -4$ (the constant $C$ IS the $y$-intercept here).',
          hint3: '$g(x) = e^x + C$, and $g(0) = e^0 + C = 1 + C = 1$, so $C = 0$.',
          explanation: '1) $9 + C = 5 \\Rightarrow C = -4$. 2) $f(0) = 0 + C = -4$. 3) $1 + C = 1 \\Rightarrow C = 0$, so $g(x) = e^x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'indefinite-integrals',
    sections: [
      {
        id: 'ind-int-7-summary',
        type: 'text' as const,
        content: `# ∫ Indefinite Integrals & Notation

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) reverse a derivative, (2) read and write integral notation, (3) apply the power rule, (4) use linearity on polynomials, (5) integrate trig/exponential/$1/x$ functions, and (6) solve for $C$ from an initial condition. Here is everything on one page.

## Quick Reference

| Integral | Result |
|----------|--------|
| $\\int x^n\\,dx\\;(n\\ne-1)$ | $\\dfrac{x^{n+1}}{n+1} + C$ |
| $\\int k\\,f(x)\\,dx$ | $k\\int f(x)\\,dx$ |
| $\\int \\frac{1}{x}\\,dx$ | $\\ln\\lvert x\\rvert + C$ |
| $\\int e^x\\,dx$ | $e^x + C$ |
| $\\int \\cos x\\,dx$ | $\\sin x + C$ |
| $\\int \\sin x\\,dx$ | $-\\cos x + C$ |
| $\\int \\sec^2 x\\,dx$ | $\\tan x + C$ |

> ⚠️ **Three habits that save points:** (1) Always write $+C$ on an indefinite integral. (2) Rewrite roots/fractions as powers *before* applying the power rule. (3) Verify any answer by differentiating it.`,
      },
      {
        id: 'ind-int-7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\left(\\sqrt{x} + \\frac{1}{x}\\right)\\,dx = $',
              options: ['$\\frac{2}{3}x^{3/2} + \\ln\\lvert x\\rvert + C$', '$\\frac{1}{2}x^{-1/2} - \\frac{1}{x^2} + C$', '$\\frac{2}{3}x^{3/2} + \\ln x^2 + C$', '$x^{3/2} + \\ln\\lvert x\\rvert + C$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{x} = x^{1/2} \\to \\frac{x^{3/2}}{3/2} = \\frac{2}{3}x^{3/2}$, and $\\frac{1}{x} \\to \\ln\\lvert x\\rvert$. Sum: $\\frac{2}{3}x^{3/2} + \\ln\\lvert x\\rvert + C$.',
            },
            {
              question: 'If $f\'(x) = 3x^2 + 2$ and $f(1) = 5$, then $f(x) = $',
              options: ['$x^3 + 2x + 2$', '$x^3 + 2x + 5$', '$x^3 + 2x$', '$6x + 2$'],
              correctAnswer: 0,
              explanation: '$f(x) = \\int(3x^2+2)\\,dx = x^3 + 2x + C$. Then $f(1) = 1 + 2 + C = 5 \\Rightarrow C = 2$, so $f(x) = x^3 + 2x + 2$.',
            },
          ],
        },
      },
      {
        id: 'ind-int-7-error-intro',
        type: 'text' as const,
        content: `## Reading Other People's Work

A huge part of mastery is *catching mistakes* — your own and others'. The most common integration errors are: a slipped sign (especially on $\\sin$/$\\cos$), a power-rule slip (forgetting to divide), and a missing $+C$.

In the next check, an integral has been worked out with a deliberate error or two. Diagnose each line.`,
      },
      {
        id: 'ind-int-7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Error** 🔽

A student integrated $\\displaystyle\\int \\left(2x^3 - \\sin x\\right)\\,dx$ and wrote $\\;\\frac{x^4}{2} - \\cos x$. Diagnose it.`,
        exercise: {
          dropdowns: [
            { label: 'Is $\\int 2x^3\\,dx = \\frac{x^4}{2}$ correct?', options: ['Yes', 'No, it should be $\\frac{x^4}{4}$', 'No, it should be $2x^4$', 'No, it should be $6x^2$'] },
            { label: 'Is $\\int(-\\sin x)\\,dx = -\\cos x$ correct?', options: ['No, it should be $+\\cos x$', 'Yes', 'No, it should be $-\\sin x$', 'No, it should be $\\sin x$'] },
            { label: 'What else is missing entirely?', options: ['the "$+C$"', 'a $dx$', 'an absolute value', 'nothing'] },
          ],
          correctAnswers: ['Yes', 'No, it should be $+\\cos x$', 'the "$+C$"'],
          hint1: '$2\\int x^3\\,dx = 2\\cdot\\frac{x^4}{4} = \\frac{x^4}{2}$ — that term is correct.',
          hint2: '$\\int\\sin x\\,dx = -\\cos x$, so $\\int(-\\sin x)\\,dx = +\\cos x$. The student dropped a sign.',
          hint3: 'Every indefinite integral needs a constant of integration, $+C$.',
          explanation: 'The $\\frac{x^4}{2}$ term is right, but $-\\sin x$ integrates to $+\\cos x$ (sign error), and the $+C$ is missing. Correct answer: $\\frac{x^4}{2} + \\cos x + C$.',
        },
      },
      {
        id: 'ind-int-7-final-note',
        type: 'text' as const,
        content: `## One Last Drill Before the Quiz

These three quick calculations touch every skill in the lesson: the power rule with a coefficient, solving for $C$, and a trig integral. Work each carefully — then the Exit Quiz is all that remains.`,
      },
      {
        id: 'ind-int-7-drill',
        type: 'input-boxes' as const,
        content: `**Final Calculations** 🧮

**1)** $\\int 12x^3\\,dx = \\_\\,x^4 + C$. Enter the coefficient.
**2)** $f'(x) = 2x + 1$, $f(0) = 4$. Find $C$ in $f(x) = x^2 + x + C$.
**3)** $\\int \\left(\\cos x + 3x^2\\right)\\,dx = \\sin x + \\_\\,x^3 + C$. Enter the coefficient on $x^3$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '1'],
          hint1: '$12\\int x^3\\,dx = 12\\cdot\\frac{x^4}{4} = 3x^4$, so the coefficient is $3$.',
          hint2: '$f(0) = 0 + 0 + C = 4$, so $C = 4$ (the constant equals the value at $x=0$ here).',
          hint3: '$\\int 3x^2\\,dx = 3\\cdot\\frac{x^3}{3} = x^3$, so the coefficient is $1$.',
          explanation: '1) $3x^4$. 2) $C = 4$. 3) $\\int(\\cos x + 3x^2)\\,dx = \\sin x + x^3 + C$, coefficient $1$.',
        },
      },
      {
        id: 'ind-int-7-wrapup',
        type: 'text' as const,
        content: `## You're Ready

Everything in this lesson reduces to one idea: **integration reverses differentiation.** Recognize the derivative pattern, run it backward, add $C$, and verify by differentiating. The Exit Quiz below confirms you've got it.`,
      },
      {
        id: 'ind-int-7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\left(6x^5 - 4\\right)\\,dx = $',
              options: ['$x^6 - 4x + C$', '$x^6 - 4 + C$', '$30x^4 + C$', '$\\frac{6x^6}{6} - 4 + C$'],
              correctAnswer: 0,
              explanation: '$6\\cdot\\frac{x^6}{6} - 4x + C = x^6 - 4x + C$. Check: $\\frac{d}{dx}[x^6 - 4x + C] = 6x^5 - 4$ ✓.',
            },
            {
              question: 'Which is the antiderivative of $\\frac{1}{x}$ valid for all $x \\ne 0$?',
              options: ['$\\ln\\lvert x\\rvert + C$', '$\\ln x + C$', '$\\frac{x^0}{0} + C$', '$-x^{-2} + C$'],
              correctAnswer: 0,
              explanation: 'The power rule fails for $x^{-1}$. The antiderivative is $\\ln\\lvert x\\rvert + C$; the absolute value makes it valid for negative $x$ as well as positive.',
            },
            {
              question: 'If $f\'(x) = e^x$ and $f(0) = 3$, then $f(x) = $',
              options: ['$e^x + 2$', '$e^x + 3$', '$e^x$', '$xe^{x-1} + 2$'],
              correctAnswer: 0,
              explanation: '$f(x) = \\int e^x\\,dx = e^x + C$. Then $f(0) = e^0 + C = 1 + C = 3 \\Rightarrow C = 2$, so $f(x) = e^x + 2$.',
            },
          ],
        },
      },
    ],
  },
]
