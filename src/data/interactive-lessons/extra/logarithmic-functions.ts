import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Logarithmic Functions (AP Precalculus).
 * Registry key: 'logarithmic-functions' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Content is tuned to the
 * AP Precalculus CED (Unit 2): logs as inverses of exponentials, log properties,
 * change of base, solving exp/log equations, log models, and semi-log linearization.
 * LaTeX uses doubled backslashes (template-literal strings). File lives in extra/,
 * so the registry import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc1-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 1 of 7 — Logs as the Inverse of Exponentials**

---

### Topics in This Part

| Section |
|---------|
| What Question a Logarithm Answers |
| The Inverse Relationship $\\log_b ⇄ b^x$ |
| Converting Between Forms |
| Evaluating Logarithms by Hand |

> 🔑 **Key Concept:** A logarithm answers one question — *"what exponent turns the base into this number?"* In AP Precalculus, the logarithmic function $y=\\log_b x$ is built as the **inverse** of the exponential function $y=b^x$, and almost everything else follows from that single idea.`,
      },
      {
        id: 'logpc1-inverse',
        type: 'text' as const,
        content: `## Logs Undo Exponentials

An exponential function takes an exponent and returns a value. A logarithm reverses that — it takes a value and returns the exponent.

$$y = b^x \\quad\\Longleftrightarrow\\quad x = \\log_b y$$

We require the base $b>0$ and $b\\ne 1$, and the input of a log must be **positive**.

### The Two Forms Side by Side

| Exponential form | Logarithmic form | Read as |
|------------------|------------------|---------|
| $2^3 = 8$ | $\\log_2 8 = 3$ | "log base 2 of 8 is 3" |
| $10^2 = 100$ | $\\log_{10} 100 = 2$ | "log base 10 of 100 is 2" |
| $5^0 = 1$ | $\\log_5 1 = 0$ | "log base 5 of 1 is 0" |
| $b^x = y$ | $\\log_b y = x$ | "log base $b$ of $y$ is $x$" |

> 🔑 **Key Idea:** Because $\\log_b x$ and $b^x$ are inverses, their graphs are **reflections across the line $y=x$**, and they swap domain and range: $b^x$ has range $(0,\\infty)$, so $\\log_b x$ has domain $(0,\\infty)$.`,
      },
      {
        id: 'logpc1-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $3^4 = 81$ in logarithmic form.',
              options: ['$\\log_3 81 = 4$', '$\\log_4 81 = 3$', '$\\log_{81} 3 = 4$', '$\\log_3 4 = 81$'],
              correctAnswer: 0,
              explanation: 'In $b^x=y$, the base $b=3$ stays the base of the log, the exponent $x=4$ is the result, and $y=81$ is the input: $\\log_3 81 = 4$.',
            },
            {
              question: 'Which statement is the inverse relationship that defines a logarithm?',
              options: ['$y=b^x \\Leftrightarrow x=\\log_b y$', '$y=b^x \\Leftrightarrow y=\\log_b x$', '$y=b^x \\Leftrightarrow b=\\log_x y$', '$y=b^x \\Leftrightarrow x=\\log_y b$'],
              correctAnswer: 0,
              explanation: 'A logarithm returns the exponent. If $y=b^x$, then the exponent is $x=\\log_b y$. The base of the exponential becomes the base of the log.',
            },
          ],
        },
      },
      {
        id: 'logpc1-evaluate-input',
        type: 'input-boxes' as const,
        content: `**Evaluate by Hand** 🧮

Ask yourself *"what exponent turns the base into the input?"*

**1)** $\\log_2 16 = \\,?$
**2)** $\\log_5 125 = \\,?$
**3)** $\\log_3 \\dfrac{1}{9} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '-2'],
          hint1: '$\\log_2 16$ asks $2^? = 16$. Since $2^4 = 16$, the answer is $4$.',
          hint2: '$\\log_5 125$ asks $5^? = 125$. Since $5^3 = 125$, the answer is $3$.',
          hint3: '$\\log_3 \\frac{1}{9}$ asks $3^? = \\frac{1}{9}$. Since $3^{-2} = \\frac{1}{9}$, the answer is $-2$. Negative exponents give fractions.',
          explanation: '1) $2^4=16$ so $\\log_2 16 = 4$.  2) $5^3=125$ so $\\log_5 125 = 3$.  3) $3^{-2}=\\frac{1}{9}$ so $\\log_3\\frac{1}{9} = -2$.',
        },
      },
      {
        id: 'logpc1-common-natural',
        type: 'text' as const,
        content: `## Two Special Bases

Two bases appear so often they get their own shorthand:

- **Common log** — base $10$, written $\\log x$ (no base shown means base $10$).
- **Natural log** — base $e \\approx 2.718$, written $\\ln x$.

$$\\log x = \\log_{10} x \\qquad\\qquad \\ln x = \\log_e x$$

### Quick values to know

| Expression | Value | Why |
|------------|-------|-----|
| $\\log 1000$ | $3$ | $10^3 = 1000$ |
| $\\log 0.01$ | $-2$ | $10^{-2} = 0.01$ |
| $\\ln e$ | $1$ | $e^1 = e$ |
| $\\ln 1$ | $0$ | $e^0 = 1$ |

> 💡 For **any** base, $\\log_b 1 = 0$ (since $b^0=1$) and $\\log_b b = 1$ (since $b^1 = b$). These two facts save time on every problem.`,
      },
      {
        id: 'logpc1-base-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Notation** 🔽

Identify each value. Use the inverse relationship and the special-base facts.`,
        exercise: {
          dropdowns: [
            { label: '$\\log 100 =$', options: ['$2$', '$10$', '$1$', '$100$'] },
            { label: '$\\ln e^5 =$', options: ['$5$', '$e$', '$1$', '$\\ln 5$'] },
            { label: '$\\log_7 7 =$', options: ['$1$', '$7$', '$0$', '$49$'] },
          ],
          correctAnswers: ['$2$', '$5$', '$1$'],
          hint1: '$\\log 100 = \\log_{10}100$ asks $10^?=100$, and $10^2=100$.',
          hint2: '$\\ln e^5$ asks $e^? = e^5$, so the exponent is $5$.',
          hint3: 'For any base, $\\log_b b = 1$ because $b^1=b$; here $\\log_7 7 = 1$.',
          explanation: '$\\log 100 = 2$, $\\ln e^5 = 5$, and $\\log_7 7 = 1$. Each comes straight from "what exponent gives the input?"',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc2-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 2 of 7 — The Graph, Domain & Asymptote**

---

> 🔑 **The Idea:** Reflecting $y=b^x$ across $y=x$ produces $y=\\log_b x$. That reflection turns the exponential's horizontal asymptote into the log's **vertical asymptote**, and tells you the domain at a glance.`,
      },
      {
        id: 'logpc2-graph',
        type: 'text' as const,
        content: `## The Shape of $y=\\log_b x$ (for $b>1$)

Because $y=\\log_b x$ is the reflection of $y=b^x$ across $y=x$:

| Feature | $y=b^x$ | $y=\\log_b x$ |
|---------|---------|--------------|
| Domain | $(-\\infty,\\infty)$ | $(0,\\infty)$ |
| Range | $(0,\\infty)$ | $(-\\infty,\\infty)$ |
| Asymptote | horizontal $y=0$ | **vertical $x=0$** |
| Key point | $(0,1)$ | $(1,0)$ |
| Key point | $(1,b)$ | $(b,1)$ |

For $b>1$ the log is **increasing** and **concave down**: it climbs forever but more and more slowly.

> ⚠️ **Domain trap:** $\\log_b x$ is only defined for $x>0$. You can never take the log of $0$ or a negative number — the graph hugs the line $x=0$ but never touches or crosses it.`,
      },
      {
        id: 'logpc2-behavior',
        type: 'text' as const,
        content: `## End Behavior & Rate

As $x \\to 0^+$, the curve plunges: $\\log_b x \\to -\\infty$ (that's the vertical asymptote).
As $x \\to \\infty$, it rises without bound but ever more slowly: $\\log_b x \\to \\infty$.

### Why "slowly"?

To increase $\\log_2 x$ by just $1$, you must **double** $x$:

$$\\log_2 8 = 3,\\quad \\log_2 16 = 4,\\quad \\log_2 32 = 5$$

Each step up costs twice as much input. This **slow, decelerating growth** is exactly why logs are used to compress huge ranges (decibels, pH, Richter scale).

> 💡 A logarithmic function grows slower than **every** positive power of $x$ — slower than $\\sqrt{x}$, slower than $x^{0.01}$ — yet it still heads to $+\\infty$.`,
      },
      {
        id: 'logpc2-domain-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the domain of $f(x) = \\log_2 x$?',
              options: ['$x > 0$', '$x \\ge 0$', 'all real numbers', '$x > 1$'],
              correctAnswer: 0,
              explanation: 'The input of a logarithm must be strictly positive, so the domain is $x>0$, i.e. $(0,\\infty)$. At $x=0$ the function is undefined (vertical asymptote).',
            },
            {
              question: 'The graph of $y=\\log_b x$ (with $b>1$) has which asymptote?',
              options: ['Vertical asymptote $x=0$', 'Horizontal asymptote $y=0$', 'Vertical asymptote $x=1$', 'No asymptote'],
              correctAnswer: 0,
              explanation: 'Reflecting $y=b^x$ (asymptote $y=0$) across $y=x$ swaps the roles of $x$ and $y$, giving the vertical asymptote $x=0$.',
            },
          ],
        },
      },
      {
        id: 'logpc2-domain-input',
        type: 'input-boxes' as const,
        content: `**Find the Domain Boundary** 🧮

The argument of a log must be positive. Find the value of $x$ where each function's vertical asymptote sits (solve *argument* $=0$).

**1)** $f(x)=\\log_3(x-4)$.  Asymptote at $x = \\,?$
**2)** $g(x)=\\ln(x+2)$.  Asymptote at $x = \\,?$
**3)** $h(x)=\\log(2x-6)$.  Asymptote at $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-2', '3'],
          hint1: 'Set the inside equal to $0$: $x-4=0 \\Rightarrow x=4$. The domain is $x>4$.',
          hint2: '$x+2=0 \\Rightarrow x=-2$. The domain is $x>-2$.',
          hint3: '$2x-6=0 \\Rightarrow 2x=6 \\Rightarrow x=3$. The domain is $x>3$.',
          explanation: '1) $x-4=0$ gives $x=4$.  2) $x+2=0$ gives $x=-2$.  3) $2x-6=0$ gives $x=3$. Each is where the argument hits $0$, producing the vertical asymptote.',
        },
      },
      {
        id: 'logpc2-transform-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Transformation** 🔽

Compare each function to the parent $y=\\log_2 x$ and identify how the graph shifts.`,
        exercise: {
          dropdowns: [
            { label: '$y=\\log_2(x-3)$ shifts the parent:', options: ['right $3$', 'left $3$', 'up $3$', 'down $3$'] },
            { label: '$y=\\log_2 x + 5$ shifts the parent:', options: ['up $5$', 'down $5$', 'right $5$', 'left $5$'] },
            { label: 'Vertical asymptote of $y=\\log_2(x+1)$:', options: ['$x=-1$', '$x=1$', '$x=0$', '$y=-1$'] },
          ],
          correctAnswers: ['right $3$', 'up $5$', '$x=-1$'],
          hint1: 'Replacing $x$ with $x-3$ moves the graph right $3$ (and the asymptote to $x=3$).',
          hint2: 'Adding $5$ *outside* the log raises every output, a vertical shift up $5$.',
          hint3: 'For $\\log_2(x+1)$, the argument is $0$ when $x=-1$, so the vertical asymptote is $x=-1$.',
          explanation: 'Inside changes shift horizontally (and move the asymptote); outside changes shift vertically. $x+1=0$ at $x=-1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc3-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 3 of 7 — The Three Log Properties**

---

> 🔑 **Why they exist:** Logs turn exponents into multipliers, so the exponent rules ($b^m b^n=b^{m+n}$, etc.) become **log rules**. These three properties let you expand, condense, and ultimately *solve*.`,
      },
      {
        id: 'logpc3-rules',
        type: 'text' as const,
        content: `## The Product, Quotient & Power Rules

For $b>0,\\,b\\ne 1$ and **positive** $M,N$:

$$\\textbf{Product: }\\;\\log_b(MN) = \\log_b M + \\log_b N$$
$$\\textbf{Quotient: }\\;\\log_b\\!\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$$
$$\\textbf{Power: }\\;\\log_b\\!\\left(M^p\\right) = p\\,\\log_b M$$

### Where they come from

Multiplying numbers **adds** their exponents, so the log of a product **adds** the logs. Raising to a power **multiplies** the exponent, so the log of a power **multiplies** by that power.

> ⚠️ **Top traps:** $\\log_b(M+N) \\ne \\log_b M + \\log_b N$, and $\\dfrac{\\log_b M}{\\log_b N} \\ne \\log_b\\!\\left(\\dfrac{M}{N}\\right)$. The rules apply to products, quotients, and powers — **never** to sums or differences *inside* one log.`,
      },
      {
        id: 'logpc3-expand',
        type: 'text' as const,
        content: `## Worked Example — Expanding

Write $\\log_b \\dfrac{x^3 y}{z}$ as a sum/difference of simpler logs.

$$\\log_b \\frac{x^3 y}{z} = \\log_b(x^3 y) - \\log_b z \\quad\\text{(quotient)}$$
$$= \\log_b x^3 + \\log_b y - \\log_b z \\quad\\text{(product)}$$
$$= 3\\log_b x + \\log_b y - \\log_b z \\quad\\text{(power)}$$

## Worked Example — Condensing

Write $2\\log x + \\log 3 - \\log y$ as a single logarithm.

$$2\\log x + \\log 3 - \\log y = \\log x^2 + \\log 3 - \\log y \\quad\\text{(power)}$$
$$= \\log(3x^2) - \\log y \\quad\\text{(product)}$$
$$= \\log\\!\\left(\\frac{3x^2}{y}\\right) \\quad\\text{(quotient)}$$

> ✅ **Check:** Coefficients become exponents; pluses become multiplication; minuses become division.`,
      },
      {
        id: 'logpc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is equal to $\\log_b(x^2 y)$?',
              options: ['$2\\log_b x + \\log_b y$', '$2\\log_b x \\cdot \\log_b y$', '$\\log_b(x^2) - \\log_b y$', '$2(\\log_b x + \\log_b y)$'],
              correctAnswer: 0,
              explanation: 'Product rule splits the multiplication into a sum; then the power rule pulls the exponent $2$ in front: $\\log_b(x^2 y)=\\log_b x^2 + \\log_b y = 2\\log_b x + \\log_b y$.',
            },
            {
              question: 'Condense $3\\ln a - \\ln b$ into one logarithm.',
              options: ['$\\ln\\!\\dfrac{a^3}{b}$', '$\\ln(3a-b)$', '$\\dfrac{3\\ln a}{\\ln b}$', '$\\ln\\!\\dfrac{a}{b^3}$'],
              correctAnswer: 0,
              explanation: 'The coefficient $3$ becomes an exponent: $3\\ln a=\\ln a^3$. Then the subtraction becomes a quotient: $\\ln a^3 - \\ln b = \\ln\\frac{a^3}{b}$.',
            },
          ],
        },
      },
      {
        id: 'logpc3-expand-input',
        type: 'input-boxes' as const,
        content: `**Apply One Rule** 🧮

Use the log properties. Enter the missing number.

**1)** $\\log_2(8\\cdot 4) = \\log_2 8 + \\log_2 4 = \\,?$
**2)** $\\log_5 \\dfrac{125}{25} = \\log_5 125 - \\log_5 25 = \\,?$
**3)** $\\log_3 9^4 = 4\\log_3 9 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '1', '8'],
          hint1: '$\\log_2 8 = 3$ and $\\log_2 4 = 2$, so the sum is $3+2=5$. (Check: $8\\cdot4=32=2^5$.)',
          hint2: '$\\log_5 125 = 3$ and $\\log_5 25 = 2$, so $3-2=1$. (Check: $\\frac{125}{25}=5=5^1$.)',
          hint3: '$\\log_3 9 = 2$, so $4\\cdot 2 = 8$. (Check: $9^4=(3^2)^4=3^8$.)',
          explanation: '1) $3+2=5$.  2) $3-2=1$.  3) $4\\cdot2=8$. Each result matches evaluating the original argument directly.',
        },
      },
      {
        id: 'logpc3-condense-dropdown',
        type: 'dropdown-select' as const,
        content: `**Expand or Condense** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\log\\dfrac{x}{y}$ equals:', options: ['$\\log x - \\log y$', '$\\log x + \\log y$', '$\\dfrac{\\log x}{\\log y}$', '$\\log(x-y)$'] },
            { label: '$\\log_b \\sqrt{x}$ equals:', options: ['$\\tfrac{1}{2}\\log_b x$', '$2\\log_b x$', '$\\log_b x^2$', '$\\sqrt{\\log_b x}$'] },
            { label: '$\\ln a + \\ln b$ condenses to:', options: ['$\\ln(ab)$', '$\\ln(a+b)$', '$\\ln a \\cdot \\ln b$', '$\\ln\\tfrac{a}{b}$'] },
          ],
          correctAnswers: ['$\\log x - \\log y$', '$\\tfrac{1}{2}\\log_b x$', '$\\ln(ab)$'],
          hint1: 'A quotient inside a log becomes a difference of logs.',
          hint2: '$\\sqrt{x}=x^{1/2}$, so the power rule gives the exponent $\\tfrac12$ as a coefficient.',
          hint3: 'A sum of logs condenses to the log of a product (not a sum).',
          explanation: 'Quotient → difference; $\\sqrt{x}=x^{1/2}$ → coefficient $\\tfrac12$; sum of logs → log of the product $ab$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc4-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 4 of 7 — Change of Base**

---

> 🔑 **The Problem:** Your calculator only has $\\log$ (base $10$) and $\\ln$ (base $e$). The **change-of-base formula** lets you compute a log of *any* base using those two buttons.`,
      },
      {
        id: 'logpc4-formula',
        type: 'text' as const,
        content: `## The Change-of-Base Formula

For any valid bases $a,b$ and positive $x$:

$$\\log_b x = \\frac{\\log_a x}{\\log_a b}$$

In practice you pick $a=10$ or $a=e$:

$$\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}$$

### Worked Example: $\\log_2 50$

$$\\log_2 50 = \\frac{\\ln 50}{\\ln 2} = \\frac{3.912}{0.693} \\approx 5.644$$

**Sanity check:** $2^5 = 32$ and $2^6 = 64$, and $50$ is between them, so the answer should be between $5$ and $6$. ✓

> 💡 **Memory aid:** *"new over new"* — put the log of the **argument** on top and the log of the **old base** on the bottom, both in your new (calculator) base.`,
      },
      {
        id: 'logpc4-exact',
        type: 'text' as const,
        content: `## Change of Base for Exact Values

Change of base also gives **exact** answers when the numbers cooperate.

### Example: $\\log_8 32$

Convert to base $2$ (since $8=2^3$ and $32=2^5$):

$$\\log_8 32 = \\frac{\\log_2 32}{\\log_2 8} = \\frac{5}{3}$$

**Check:** $8^{5/3} = \\left(8^{1/3}\\right)^5 = 2^5 = 32$ ✓

### Example: $\\log_9 27$

$$\\log_9 27 = \\frac{\\log_3 27}{\\log_3 9} = \\frac{3}{2}$$

> ✅ Choosing a base where *both* numbers are clean powers turns a messy log into a simple fraction.`,
      },
      {
        id: 'logpc4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression correctly computes $\\log_5 20$ with a calculator?',
              options: ['$\\dfrac{\\ln 20}{\\ln 5}$', '$\\dfrac{\\ln 5}{\\ln 20}$', '$\\ln 20 - \\ln 5$', '$\\ln(20)\\cdot\\ln(5)$'],
              correctAnswer: 0,
              explanation: 'Change of base puts the argument ($20$) on top and the old base ($5$) on the bottom: $\\log_5 20 = \\frac{\\ln 20}{\\ln 5}$.',
            },
            {
              question: 'Without a calculator, $\\log_4 64 = $',
              options: ['$3$', '$16$', '$4$', '$\\dfrac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Use base $2$: $\\log_4 64 = \\frac{\\log_2 64}{\\log_2 4} = \\frac{6}{2} = 3$. Check: $4^3 = 64$. ✓',
            },
          ],
        },
      },
      {
        id: 'logpc4-input',
        type: 'input-boxes' as const,
        content: `**Exact Change of Base** 🧮

Rewrite each in a common base, then enter the exact value (a whole number or a fraction like $3/2$).

**1)** $\\log_4 16 = \\,?$
**2)** $\\log_8 2 = \\,?$  *(fraction ok)*
**3)** $\\log_{27} 9 = \\,?$  *(fraction ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1/3', '2/3'],
          hint1: 'Base $2$: $\\log_4 16=\\frac{\\log_2 16}{\\log_2 4}=\\frac{4}{2}=2$.',
          hint2: 'Base $2$: $\\log_8 2=\\frac{\\log_2 2}{\\log_2 8}=\\frac{1}{3}$. (Check: $8^{1/3}=2$.)',
          hint3: 'Base $3$: $\\log_{27} 9=\\frac{\\log_3 9}{\\log_3 27}=\\frac{2}{3}$. (Check: $27^{2/3}=(27^{1/3})^2=3^2=9$.)',
          explanation: '1) $\\frac{4}{2}=2$.  2) $\\frac{1}{3}$.  3) $\\frac{2}{3}$. Pick a base where both numbers are clean powers, then divide the exponents.',
        },
      },
      {
        id: 'logpc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Quotient** 🔽

Choose the correct change-of-base setup (use base $e$).`,
        exercise: {
          dropdowns: [
            { label: '$\\log_7 100 =$', options: ['$\\dfrac{\\ln 100}{\\ln 7}$', '$\\dfrac{\\ln 7}{\\ln 100}$', '$\\dfrac{\\ln 100}{\\ln 10}$', '$\\ln 100 \\cdot \\ln 7$'] },
            { label: '$\\log_3 x =$', options: ['$\\dfrac{\\ln x}{\\ln 3}$', '$\\dfrac{\\ln 3}{\\ln x}$', '$\\dfrac{\\ln x}{3}$', '$3\\ln x$'] },
            { label: 'The denominator always uses the:', options: ['old base', 'argument', 'new base value', 'exponent'] },
          ],
          correctAnswers: ['$\\dfrac{\\ln 100}{\\ln 7}$', '$\\dfrac{\\ln x}{\\ln 3}$', 'old base'],
          hint1: 'Argument on top, old base on bottom: $\\log_7 100 = \\frac{\\ln 100}{\\ln 7}$.',
          hint2: 'Same pattern: $\\log_3 x = \\frac{\\ln x}{\\ln 3}$.',
          hint3: 'The denominator is always $\\ln(\\text{old base})$ — the base you are converting away from.',
          explanation: 'Change of base = $\\frac{\\ln(\\text{argument})}{\\ln(\\text{old base})}$. The old base lives in the denominator every time.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc5-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 5 of 7 — Solving Exponential & Logarithmic Equations**

---

> 🔑 **The Strategy:** Logs and exponentials are inverses, so they **undo** each other. To free a variable stuck in an exponent, take a log; to free a variable stuck in a log, exponentiate.`,
      },
      {
        id: 'logpc5-exp',
        type: 'text' as const,
        content: `## Solving Exponential Equations

When the variable is in the exponent, take a log of both sides and use the **power rule** to bring it down.

### Example: $3^x = 20$

$$\\ln 3^x = \\ln 20 \\;\\Rightarrow\\; x\\ln 3 = \\ln 20 \\;\\Rightarrow\\; x = \\frac{\\ln 20}{\\ln 3} \\approx 2.727$$

### Example: $5\\cdot 2^x = 80$

First **isolate** the exponential: $2^x = 16$. Then $x = \\log_2 16 = 4$.

> ⚠️ **Isolate first.** Get the exponential term alone *before* taking a log. You can't bring the exponent down while a coefficient is still attached by multiplication.`,
      },
      {
        id: 'logpc5-log',
        type: 'text' as const,
        content: `## Solving Logarithmic Equations

When the variable is inside a log, rewrite in **exponential form** (or condense to a single log first).

### Example: $\\log_2(x-1) = 5$

Rewrite as exponential: $x-1 = 2^5 = 32 \\Rightarrow x = 33$.

### Example: $\\log x + \\log(x-3) = 1$

Condense: $\\log\\big(x(x-3)\\big) = 1 \\Rightarrow x(x-3) = 10^1 = 10$.
$$x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2) = 0 \\Rightarrow x = 5 \\text{ or } x=-2$$

> ⚠️ **Check for extraneous solutions!** A log's argument must be positive. $x=-2$ makes $\\log(-2)$ undefined, so we **reject** it. Only $x=5$ is valid.`,
      },
      {
        id: 'logpc5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_3(x+5) = 2$.',
              options: ['$x = 4$', '$x = 1$', '$x = -2$', '$x = 11$'],
              correctAnswer: 0,
              explanation: 'Rewrite in exponential form: $x+5 = 3^2 = 9$, so $x = 4$. Check: $\\log_3(9)=2$. ✓',
            },
            {
              question: 'Why must you check solutions when solving log equations?',
              options: ['A log argument must be positive, so some solutions are extraneous', 'Logs can equal two values at once', 'The power rule fails for negatives', 'Change of base introduces errors'],
              correctAnswer: 0,
              explanation: 'Condensing or squaring can introduce values that make a log argument $\\le 0$. Those are undefined, so they must be rejected as extraneous.',
            },
          ],
        },
      },
      {
        id: 'logpc5-input',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve each equation. Enter the (valid) value of $x$.

**1)** $2^x = 64 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\log_5(x+1) = 3 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\ln x = 0 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '124', '1'],
          hint1: '$2^x=64$. Since $64=2^6$, $x=6$.',
          hint2: 'Exponential form: $x+1=5^3=125$, so $x=125-1=124$.',
          hint3: '$\\ln x = 0$ means $x=e^0=1$.',
          explanation: '1) $2^6=64$ so $x=6$.  2) $x+1=125$ so $x=124$.  3) $e^0=1$ so $x=1$.',
        },
      },
      {
        id: 'logpc5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the First Move** 🔽

For each equation, pick the correct first step.`,
        exercise: {
          dropdowns: [
            { label: 'To solve $7^x = 200$:', options: ['Take $\\ln$ of both sides', 'Rewrite as a log of $x$', 'Square both sides', 'Divide by $7$'] },
            { label: 'To solve $\\log_4 x = 3$:', options: ['Rewrite as $x=4^3$', 'Take $\\ln$ of both sides', 'Divide by $\\log 4$', 'Subtract $3$'] },
            { label: 'To solve $3\\cdot 5^x = 75$:', options: ['Divide by $3$ first', 'Take $\\ln$ first', 'Rewrite as $x = \\log_3 75$', 'Subtract $3$'] },
          ],
          correctAnswers: ['Take $\\ln$ of both sides', 'Rewrite as $x=4^3$', 'Divide by $3$ first'],
          hint1: 'The variable is in the exponent — take a log to bring it down with the power rule.',
          hint2: 'The variable is inside the log — rewrite in exponential form: $x=4^3$.',
          hint3: 'Isolate the exponential term first: divide both sides by $3$ to get $5^x=25$.',
          explanation: 'Variable in an exponent → take a log. Variable in a log → exponentiate. Always isolate the exp/log term first.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc6-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 6 of 7 — Logarithmic Models & Semi-Log Plots**

---

> 🔑 **The AP Connection:** Logarithmic functions model the *inverse* of exponential growth — data that rises fast then levels off. And plotting exponential data on a **semi-log scale** turns its curve into a straight line you can analyze.`,
      },
      {
        id: 'logpc6-models',
        type: 'text' as const,
        content: `## Where Logarithmic Models Fit

A logarithmic model $y = a + b\\ln x$ (or with $\\log$) is appropriate when the output **grows quickly at first and then flattens** — rapid early change, diminishing returns later.

### Real-world log scales

| Quantity | Formula | Why a log? |
|----------|---------|-----------|
| Sound (decibels) | $L = 10\\log\\dfrac{I}{I_0}$ | compresses a huge intensity range |
| Acidity (pH) | $\\text{pH} = -\\log[\\text{H}^+]$ | concentrations span many orders of magnitude |
| Earthquakes (Richter) | $M = \\log\\dfrac{A}{A_0}$ | energy varies enormously |

> 💡 **Order-of-magnitude rule:** because these are base-$10$ logs, **each unit increase means $\\times 10$**. A pH of $4$ is $10$ times more acidic than pH $5$; a magnitude-$6$ quake has $10$ times the amplitude of a magnitude-$5$ quake.`,
      },
      {
        id: 'logpc6-semilog',
        type: 'text' as const,
        content: `## Semi-Log Plots Linearize Exponentials

Take an exponential model $y = a\\cdot b^x$ and apply $\\log$ to both sides:

$$\\log y = \\log(a\\cdot b^x) = \\log a + x\\log b$$

Let $Y = \\log y$. Then

$$Y = (\\log b)\\,x + \\log a$$

That's a **straight line** in $x$ and $Y$! So if you plot $\\log y$ (vertical) against $x$ (horizontal) — a **semi-log plot** — exponential data becomes **linear**.

| What you read off | What it means |
|-------------------|---------------|
| slope $= \\log b$ | recovers the base $b = 10^{\\text{slope}}$ |
| vertical intercept $= \\log a$ | recovers $a = 10^{\\text{intercept}}$ |

> 🔑 **Key takeaway:** *Exponential data is linear under a logarithmic transformation of the output.* A straight semi-log plot is the fingerprint of exponential growth.`,
      },
      {
        id: 'logpc6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a semi-log plot ($\\log y$ vs. $x$), data that forms a straight line indicates the original data is:',
              options: ['Exponential', 'Linear', 'Logarithmic', 'Quadratic'],
              correctAnswer: 0,
              explanation: 'Applying $\\log$ to $y=a\\cdot b^x$ gives $\\log y=(\\log b)x+\\log a$, a line. So a straight semi-log plot means the underlying data is exponential.',
            },
            {
              question: 'On the Richter scale, a magnitude-7 quake has how many times the amplitude of a magnitude-5 quake?',
              options: ['$100$ times', '$2$ times', '$10$ times', '$20$ times'],
              correctAnswer: 0,
              explanation: 'Richter is base-$10$: each unit is $\\times 10$. From $5$ to $7$ is two units, so $10^2 = 100$ times the amplitude.',
            },
          ],
        },
      },
      {
        id: 'logpc6-input',
        type: 'input-boxes' as const,
        content: `**Read a Log Scale** 🧮

Use the order-of-magnitude rule (each base-$10$ unit $= \\times 10$).

**1)** Solution A has pH $3$, solution B has pH $6$. A is how many times more acidic than B? Enter the number.
**2)** A semi-log fit gives $\\log y = 0.5x + 2$. What is $a = 10^{\\text{intercept}}$?
**3)** Same fit: what is the base $b = 10^{\\text{slope}}$? Use $10^{0.5}\\approx 3.16$ and round to two decimals.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1000', '100', '3.16'],
          hint1: 'pH differs by $6-3=3$ units, and each unit is $\\times 10$, so $10^3 = 1000$.',
          hint2: 'The vertical intercept is $\\log a = 2$, so $a = 10^2 = 100$.',
          hint3: 'The slope is $\\log b = 0.5$, so $b = 10^{0.5} = \\sqrt{10} \\approx 3.16$.',
          explanation: '1) $10^{3}=1000$ times.  2) $a=10^2=100$.  3) $b=10^{0.5}\\approx 3.16$. Slope recovers the base; intercept recovers the leading coefficient.',
        },
      },
      {
        id: 'logpc6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Semi-Log Line** 🔽

A data set is plotted as $\\log y$ versus $x$ and fits the line $\\log y = 0.3x + 1$.`,
        exercise: {
          dropdowns: [
            { label: 'The underlying model $y=a\\cdot b^x$ has $a=$', options: ['$10$', '$1$', '$0.3$', '$3$'] },
            { label: 'Its base is $b=$', options: ['$10^{0.3}$', '$0.3$', '$10$', '$e^{0.3}$'] },
            { label: 'A straight semi-log line means the growth is:', options: ['exponential', 'logarithmic', 'linear', 'constant'] },
          ],
          correctAnswers: ['$10$', '$10^{0.3}$', 'exponential'],
          hint1: 'Intercept $=\\log a = 1$, so $a=10^1=10$.',
          hint2: 'Slope $=\\log b = 0.3$, so $b=10^{0.3}$.',
          hint3: 'Linearity on a semi-log ($\\log y$ vs $x$) plot is the signature of exponential behavior.',
          explanation: 'From $\\log y = 0.3x+1$: $a=10^{1}=10$, $b=10^{0.3}$, and the straight line confirms exponential growth.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'logarithmic-functions',
    sections: [
      {
        id: 'logpc7-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Functions

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) read logs as inverses of exponentials, (2) graph them and state domain/asymptote, (3) apply the three properties, (4) change base, (5) solve exp/log equations, and (6) interpret log models and semi-log plots. Let's pull it together.`,
      },
      {
        id: 'logpc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read a log | $\\log_b x = y \\Leftrightarrow b^y = x$ |
| Domain of $\\log_b(\\text{arg})$ | argument $>0$ (vertical asymptote where arg $=0$) |
| Expand / condense | product↔sum, quotient↔difference, power↔coefficient |
| Any base on a calculator | $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ |
| Variable in an exponent | take $\\ln$, then power rule |
| Variable in a log | rewrite in exponential form; **check** arg $>0$ |
| Spot exponential data | straight line on a semi-log ($\\log y$ vs $x$) plot |

> ⚠️ Three things never to forget: a log's argument is **always positive**, $\\log_b(M+N)\\ne\\log_b M+\\log_b N$, and **check for extraneous solutions** whenever you condense logs.`,
      },
      {
        id: 'logpc7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_2 x + \\log_2(x-2) = 3$.',
              options: ['$x = 4$', '$x = -2$', '$x = 4 \\text{ or } -2$', '$x = 8$'],
              correctAnswer: 0,
              explanation: 'Condense: $\\log_2[x(x-2)]=3 \\Rightarrow x(x-2)=8 \\Rightarrow x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0$. Reject $x=-2$ (makes the argument negative); only $x=4$ is valid.',
            },
            {
              question: 'Expand $\\ln\\dfrac{x^2}{\\sqrt{y}}$ completely.',
              options: ['$2\\ln x - \\tfrac{1}{2}\\ln y$', '$2\\ln x + \\tfrac{1}{2}\\ln y$', '$\\dfrac{2\\ln x}{\\tfrac12\\ln y}$', '$\\ln(2x) - \\ln(\\tfrac12 y)$'],
              correctAnswer: 0,
              explanation: 'Quotient → difference: $\\ln x^2 - \\ln y^{1/2}$. Power rule on each: $2\\ln x - \\tfrac{1}{2}\\ln y$.',
            },
          ],
        },
      },
      {
        id: 'logpc7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Evaluate $\\log_{16} 4$.  *(fraction ok)*
**2)** Solve $10^{x} = 1000 \\Rightarrow x = \\,?$
**3)** Vertical asymptote of $f(x)=\\ln(x-7)$ is at $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '3', '7'],
          hint1: 'Base $2$: $\\log_{16}4=\\frac{\\log_2 4}{\\log_2 16}=\\frac{2}{4}=\\frac12$. (Check: $16^{1/2}=4$.)',
          hint2: '$1000=10^3$, so $x=3$.',
          hint3: 'The argument $x-7=0$ at $x=7$, giving the vertical asymptote (domain $x>7$).',
          explanation: '1) $\\frac{2}{4}=\\frac12$.  2) $10^3=1000$ so $x=3$.  3) $x-7=0$ at $x=7$.',
        },
      },
      {
        id: 'logpc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is equivalent to $\\log_5 125 = 3$?',
              options: ['$5^3 = 125$', '$3^5 = 125$', '$125^3 = 5$', '$5^{125} = 3$'],
              correctAnswer: 0,
              explanation: 'The definition $\\log_b x = y \\Leftrightarrow b^y = x$ gives $5^3 = 125$. The base of the log is the base of the power.',
            },
            {
              question: 'Solve $4^{x} = 32$.',
              options: ['$x = \\dfrac{5}{2}$', '$x = 8$', '$x = 2$', '$x = \\dfrac{2}{5}$'],
              correctAnswer: 0,
              explanation: 'Write both sides base $2$: $(2^2)^x = 2^5 \\Rightarrow 2^{2x}=2^5 \\Rightarrow 2x=5 \\Rightarrow x=\\frac{5}{2}$.',
            },
            {
              question: 'A bacteria count plotted as $\\log y$ vs. time $x$ gives a straight line with slope $0.4$ and intercept $1$. The model is $y = a\\cdot b^x$ with:',
              options: ['$a=10,\\; b=10^{0.4}$', '$a=0.4,\\; b=1$', '$a=1,\\; b=0.4$', '$a=10^{0.4},\\; b=10$'],
              correctAnswer: 0,
              explanation: 'From $\\log y = 0.4x + 1$: intercept $\\log a = 1 \\Rightarrow a=10$, slope $\\log b = 0.4 \\Rightarrow b=10^{0.4}$. A straight semi-log line confirms exponential growth.',
            },
          ],
        },
      },
    ],
  },
]
