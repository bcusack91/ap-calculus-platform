import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Common Taylor Series and Applications (AP Calculus BC).
 * Registry key / DB Topic.slug: 'common-taylor-series'.
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts1-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 1 of 7 — What a Taylor Series Is**

---

### Topics in This Part

| Section |
|---------|
| Power Series as "Infinite Polynomials" |
| The Taylor & Maclaurin Formulas |
| Building a Series from Derivatives |

> 🔑 **Key Concept:** A **Taylor series** rewrites a function as an infinite polynomial. Once you memorize a handful of "famous" series (Part 3), you can differentiate, integrate, and approximate almost anything by manipulating them like algebra.`,
      },
      {
        id: 'cts1-powerseries',
        type: 'text' as const,
        content: `## A Power Series Is an Infinite Polynomial

A **power series centered at $a$** has the form

$$\\sum_{n=0}^{\\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$

The numbers $c_n$ are the **coefficients**. If we choose the coefficients so the series matches a function $f(x)$ and *all* of its derivatives at $x=a$, we get the **Taylor series of $f$**.

When the center is $a = 0$, we give it a special name — the **Maclaurin series**:

$$\\sum_{n=0}^{\\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + \\cdots$$

> 💡 A Maclaurin series is just a Taylor series with the easiest possible center, $a = 0$. Most of the "famous" series you memorize are Maclaurin series.`,
      },
      {
        id: 'cts1-formula',
        type: 'text' as const,
        content: `## The Taylor Coefficient Formula

The coefficients aren't guesses — they're forced by the derivatives of $f$ at the center:

$$c_n = \\frac{f^{(n)}(a)}{n!}$$

So the full **Taylor series of $f$ centered at $a$** is

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$$

### Why the $n!$ shows up

When you differentiate $(x-a)^n$ exactly $n$ times you get $n!$. Dividing by $n!$ "cancels" that factor so that the $n$-th derivative of the series at $x=a$ equals $f^{(n)}(a)$ — every derivative matches.

> 🔑 **Memorize this one formula.** Everything in this lesson is built from $c_n = \\dfrac{f^{(n)}(a)}{n!}$.`,
      },
      {
        id: 'cts1-concept-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A **Maclaurin** series is a Taylor series centered at which value?',
              options: ['$a = 0$', '$a = 1$', '$a = \\infty$', 'any value of $a$'],
              correctAnswer: 0,
              explanation: 'Maclaurin is the special case $a = 0$. The general Taylor series can be centered at any $a$.',
            },
            {
              question: 'In the Taylor formula, the coefficient of $(x-a)^n$ is:',
              options: ['$\\dfrac{f^{(n)}(a)}{n!}$', '$f^{(n)}(a)\\cdot n!$', '$\\dfrac{f^{(n)}(a)}{n}$', '$f^{(n)}(0)$'],
              correctAnswer: 0,
              explanation: 'The $n$-th coefficient is $c_n = \\dfrac{f^{(n)}(a)}{n!}$ — the $n$-th derivative at the center, divided by $n!$.',
            },
          ],
        },
      },
      {
        id: 'cts1-build-exp',
        type: 'text' as const,
        content: `## Worked Example: Build the Series for $e^x$

Let $f(x) = e^x$, centered at $a = 0$. The magic of $e^x$ is that **every derivative is $e^x$**, and $e^0 = 1$:

$$f(0) = 1,\\quad f'(0) = 1,\\quad f''(0) = 1,\\quad f'''(0) = 1,\\ \\ldots$$

Plug into $c_n = \\dfrac{f^{(n)}(0)}{n!} = \\dfrac{1}{n!}$:

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$

> ✅ **Check:** the constant term is $f(0)=1$, and the coefficient of $x$ is $f'(0)/1! = 1$. ✓ This is the most important series in all of calculus.`,
      },
      {
        id: 'cts1-build-drill',
        type: 'input-boxes' as const,
        content: `**Build a Coefficient** 🧮

Let $f(x) = e^x$ with center $a = 0$, so $c_n = \\dfrac{1}{n!}$.

**1)** The coefficient of $x^2$ is $\\dfrac{1}{2!} = \\dfrac{1}{?}$  *(enter the denominator)*
**2)** The coefficient of $x^3$ is $\\dfrac{1}{3!} = \\dfrac{1}{?}$  *(enter the denominator)*
**3)** The coefficient of $x^4$ is $\\dfrac{1}{4!} = \\dfrac{1}{?}$  *(enter the denominator)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '24'],
          hint1: '$2! = 2\\cdot 1 = 2$.',
          hint2: '$3! = 3\\cdot 2\\cdot 1 = 6$.',
          hint3: '$4! = 4\\cdot 3\\cdot 2\\cdot 1 = 24$.',
          explanation: '$2!=2$, $3!=6$, $4!=24$. So $e^x = 1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6} + \\dfrac{x^4}{24} + \\cdots$',
        },
      },
      {
        id: 'cts1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Vocabulary Check** 🔽

Fill in the definitions from this part.`,
        exercise: {
          dropdowns: [
            { label: 'A power series rewrites a function as an infinite:', options: ['polynomial', 'fraction', 'derivative', 'integral'] },
            { label: 'A Taylor series matches $f$ and all its:', options: ['derivatives at the center', 'roots', 'asymptotes', 'integrals'] },
            { label: 'The $n$-th Taylor coefficient $c_n$ equals:', options: ['$\\dfrac{f^{(n)}(a)}{n!}$', '$\\dfrac{f^{(n)}(a)}{n}$', '$n!\\,f^{(n)}(a)$', '$f(a)^n$'] },
          ],
          correctAnswers: ['polynomial', 'derivatives at the center', '$\\dfrac{f^{(n)}(a)}{n!}$'],
          hint1: 'A power series is an "infinite polynomial."',
          hint2: 'Taylor series force every derivative to agree at $x=a$.',
          hint3: 'The coefficient is the $n$-th derivative at the center divided by $n!$.',
          explanation: 'A power series is an infinite polynomial; a Taylor series matches every derivative at the center; and $c_n = \\dfrac{f^{(n)}(a)}{n!}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts2-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 2 of 7 — Taylor Polynomials & Centering**

---

> 🔑 **The Idea:** You rarely add up infinitely many terms. You **truncate** the series after a few terms to get a **Taylor polynomial** $P_n(x)$ — a finite polynomial that approximates $f$ near the center.`,
      },
      {
        id: 'cts2-poly',
        type: 'text' as const,
        content: `## Taylor Polynomials

The **$n$-th degree Taylor polynomial** of $f$ at $a$ keeps the terms up through degree $n$:

$$P_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

- $P_0$ is a **constant** (matches the height).
- $P_1$ is the **tangent line** (matches height *and* slope).
- $P_2$ is a **parabola** (matches height, slope, *and* concavity).

> 💡 Each higher-degree polynomial hugs the curve more tightly near $x = a$ — adding a term forces one more derivative to match.`,
      },
      {
        id: 'cts2-worked',
        type: 'text' as const,
        content: `## Worked Example: $P_3$ for $\\sin x$ at $a = 0$

With $f(x) = \\sin x$, the derivatives cycle $\\sin, \\cos, -\\sin, -\\cos$:

$$f(0) = 0,\\quad f'(0) = \\cos 0 = 1,\\quad f''(0) = -\\sin 0 = 0,\\quad f'''(0) = -\\cos 0 = -1$$

So the coefficients are $0,\\ 1,\\ 0,\\ -\\frac{1}{3!}$, giving

$$P_3(x) = 0 + 1\\cdot x + 0\\cdot x^2 - \\frac{1}{6}x^3 = x - \\frac{x^3}{6}$$

> ✅ **Check:** $P_3'(0) = 1 = \\cos 0$ and the even-degree terms vanish because $\\sin x$ is an **odd** function. ✓`,
      },
      {
        id: 'cts2-poly-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The first-degree Taylor polynomial $P_1(x)$ of $f$ at $a$ is exactly:',
              options: [
                'the tangent line to $f$ at $x=a$',
                'the secant line through $(0,f(0))$',
                'a horizontal line $y = f(a)$',
                'the parabola of best fit',
              ],
              correctAnswer: 0,
              explanation: '$P_1(x) = f(a) + f\'(a)(x-a)$ matches both the value and slope at $a$ — that is precisely the tangent line.',
            },
            {
              question: 'Why are all the even-power terms zero in the Maclaurin series of $\\sin x$?',
              options: [
                '$\\sin x$ is an odd function, so its series has only odd powers',
                '$\\sin x$ is an even function',
                'factorials of even numbers are zero',
                'it is a coincidence of the first few terms',
              ],
              correctAnswer: 0,
              explanation: '$\\sin(-x) = -\\sin x$, so $\\sin x$ is odd. An odd function\'s Maclaurin series contains only odd powers of $x$.',
            },
          ],
        },
      },
      {
        id: 'cts2-tangent-drill',
        type: 'input-boxes' as const,
        content: `**Tangent-Line Approximation** 🧮

The degree-1 Taylor (Maclaurin) polynomial of $f(x)=e^x$ at $a=0$ is $P_1(x) = 1 + x$.

**1)** Use $P_1$ to estimate $e^{0.1}$: $\\;P_1(0.1) = 1 + 0.1 = \\,?$  *(decimal)*
**2)** The degree-1 polynomial of $\\cos x$ at $a=0$ is $P_1(x) = 1$. Estimate $\\cos(0.3)$: $P_1(0.3) = \\,?$
**3)** The degree-1 polynomial of $\\sin x$ at $a=0$ is $P_1(x) = x$. Estimate $\\sin(0.2)$: $P_1(0.2) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1.1', '1', '0.2'],
          hint1: 'Just plug $x=0.1$ into $1+x$: $1 + 0.1 = 1.1$.',
          hint2: 'The degree-1 polynomial of $\\cos x$ is the constant $1$, so the estimate is $1$ for any small $x$.',
          hint3: 'The degree-1 polynomial of $\\sin x$ is $x$, so $P_1(0.2) = 0.2$.',
          explanation: '$e^{0.1}\\approx 1.1$ (true $\\approx 1.105$), $\\cos(0.3)\\approx 1$ (true $\\approx 0.955$), $\\sin(0.2)\\approx 0.2$ (true $\\approx 0.199$). Low-degree polynomials are crude but quick.',
        },
      },
      {
        id: 'cts2-center-dropdown',
        type: 'dropdown-select' as const,
        content: `**Center vs. Maclaurin** 🔽

Match each description to the correct term.`,
        exercise: {
          dropdowns: [
            { label: 'Taylor series centered at $a=0$:', options: ['Maclaurin series', 'Geometric series', 'Harmonic series', 'Binomial theorem'] },
            { label: 'Degree-1 Taylor polynomial:', options: ['tangent-line approximation', 'concavity matcher', 'remainder term', 'antiderivative'] },
            { label: 'The factor dividing $(x-a)^n$:', options: ['$n!$', '$n^2$', '$(n-1)!$', '$2^n$'] },
          ],
          correctAnswers: ['Maclaurin series', 'tangent-line approximation', '$n!$'],
          hint1: 'Centered at zero gets a special name.',
          hint2: '$P_1$ matches value and slope — that is a tangent line.',
          hint3: 'The Taylor coefficient is $f^{(n)}(a)/n!$.',
          explanation: 'Maclaurin = center $0$; $P_1$ = tangent line; the $n$-th term is divided by $n!$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts3-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 3 of 7 — The Famous Five (Memorize These)**

---

> 🔑 **The Payoff:** Five Maclaurin series appear over and over on the BC exam. Memorize them and you can build dozens of others by substitution, differentiation, and integration — no derivative-cranking required.`,
      },
      {
        id: 'cts3-table',
        type: 'text' as const,
        content: `## The Five Series to Memorize

| Function | Maclaurin Series | $\\sum$ form | Converges for |
|----------|------------------|-------------|---------------|
| $e^x$ | $1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots$ | $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^n}{n!}$ | all $x$ |
| $\\sin x$ | $x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$ | $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$ | all $x$ |
| $\\cos x$ | $1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$ | $\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n}}{(2n)!}$ | all $x$ |
| $\\dfrac{1}{1-x}$ | $1 + x + x^2 + x^3 + \\cdots$ | $\\displaystyle\\sum_{n=0}^{\\infty} x^n$ | $\\lvert x\\rvert < 1$ |
| $\\ln(1+x)$ | $x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots$ | $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1} x^n}{n}$ | $-1 < x \\le 1$ |

> 💡 **Patterns to notice:** $\\sin$ has only **odd** powers, $\\cos$ has only **even** powers, and both alternate sign. The geometric series $\\frac{1}{1-x}$ has **no factorials** and only converges on $(-1,1)$.`,
      },
      {
        id: 'cts3-sincos-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Maclaurin series for $\\cos x$ is:',
              options: [
                '$1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$',
                '$x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$',
                '$1 + x + \\dfrac{x^2}{2!} + \\cdots$',
                '$1 + x^2 + x^4 + \\cdots$',
              ],
              correctAnswer: 0,
              explanation: '$\\cos x$ keeps only **even** powers with alternating signs: $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$. The second option is $\\sin x$; the third is $e^x$.',
            },
            {
              question: 'Which series does NOT converge for every real number $x$?',
              options: ['$\\dfrac{1}{1-x}$', '$e^x$', '$\\sin x$', '$\\cos x$'],
              correctAnswer: 0,
              explanation: 'The geometric series $\\frac{1}{1-x} = \\sum x^n$ converges only for $\\lvert x\\rvert<1$. The series for $e^x$, $\\sin x$, and $\\cos x$ converge for all real $x$.',
            },
          ],
        },
      },
      {
        id: 'cts3-coeff-drill',
        type: 'input-boxes' as const,
        content: `**Read a Coefficient** 🧮

Using the Famous Five, give the requested coefficient (enter as a fraction like \`1/120\` or a decimal).

**1)** Coefficient of $x^5$ in $\\sin x$ is $\\dfrac{1}{5!} = \\,?$  *(give as \`1/120\`)*
**2)** Coefficient of $x^4$ in $\\cos x$ is $\\dfrac{1}{4!} = \\,?$  *(give as \`1/24\`)*
**3)** Coefficient of $x^3$ in $\\ln(1+x)$ is $\\,?$  *(give as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/120', '1/24', '1/3'],
          hint1: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$, and $5! = 120$. The $x^5$ term is $+\\frac{x^5}{120}$.',
          hint2: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, and $4! = 24$. The $x^4$ term is $+\\frac{x^4}{24}$.',
          hint3: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$. The $x^3$ term is $+\\frac{x^3}{3}$.',
          explanation: 'In $\\sin x$ the $x^5$ coefficient is $+\\frac{1}{120}$; in $\\cos x$ the $x^4$ coefficient is $+\\frac{1}{24}$; in $\\ln(1+x)$ the $x^3$ coefficient is $+\\frac{1}{3}$.',
        },
      },
      {
        id: 'cts3-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Series** 🔽

Identify each Maclaurin expansion.`,
        exercise: {
          dropdowns: [
            { label: '$1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots$', options: ['$e^x$', '$\\sin x$', '$\\cos x$', '$\\dfrac{1}{1-x}$'] },
            { label: '$x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$', options: ['$\\sin x$', '$\\cos x$', '$\\ln(1+x)$', '$e^x$'] },
            { label: '$1 + x + x^2 + x^3 + \\cdots$', options: ['$\\dfrac{1}{1-x}$', '$e^x$', '$\\cos x$', '$\\ln(1+x)$'] },
            { label: '$x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots$', options: ['$\\ln(1+x)$', '$\\sin x$', '$\\arctan x$', '$e^x$'] },
          ],
          correctAnswers: ['$e^x$', '$\\sin x$', '$\\dfrac{1}{1-x}$', '$\\ln(1+x)$'],
          hint1: 'Factorial denominators with all powers and all $+$ signs is $e^x$.',
          hint2: 'Odd powers, factorial denominators, alternating signs is $\\sin x$.',
          hint3: 'No factorials, all powers, all $+$ signs is the geometric series $\\frac{1}{1-x}$; alternating with $1/n$ denominators is $\\ln(1+x)$.',
          explanation: 'Top to bottom: $e^x$, $\\sin x$, $\\frac{1}{1-x}$, $\\ln(1+x)$. Recognizing these by sight is the core BC skill.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts4-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 4 of 7 — Substitution & Algebra Tricks**

---

> 🔑 **The Superpower:** To find a new series, **substitute into a known one**. Want $e^{x^2}$? Replace every $x$ in the series for $e^x$ with $x^2$. No derivatives needed.`,
      },
      {
        id: 'cts4-sub',
        type: 'text' as const,
        content: `## Substitution

Start from $e^u = 1 + u + \\dfrac{u^2}{2!} + \\dfrac{u^3}{3!} + \\cdots$ and let $u = x^2$:

$$e^{x^2} = 1 + x^2 + \\frac{x^4}{2!} + \\frac{x^6}{3!} + \\cdots = \\sum_{n=0}^{\\infty}\\frac{x^{2n}}{n!}$$

### Substituting into $\\dfrac{1}{1-x}$

The geometric series $\\dfrac{1}{1-u} = 1 + u + u^2 + \\cdots$ is a workhorse. Let $u = -x$:

$$\\frac{1}{1+x} = 1 - x + x^2 - x^3 + \\cdots = \\sum_{n=0}^{\\infty}(-1)^n x^n,\\qquad \\lvert x\\rvert < 1$$

> 💡 Substitution can change the **interval of convergence**. Replacing $x$ with $x^2$ in a series valid for $\\lvert x\\rvert<1$ gives one valid for $\\lvert x^2\\rvert<1$, i.e. $\\lvert x\\rvert<1$ as well — but replacing $x$ with $2x$ shrinks it to $\\lvert x\\rvert < \\frac{1}{2}$.`,
      },
      {
        id: 'cts4-scale-mult',
        type: 'text' as const,
        content: `## Scaling and Multiplying by a Power

You may also **multiply** a known series by a constant or a power of $x$.

### Example: $x\\,\\sin x$

$$x\\sin x = x\\left(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\right) = x^2 - \\frac{x^4}{3!} + \\frac{x^6}{5!} - \\cdots$$

### Example: $\\sin(2x)$

Replace $x$ with $2x$ in $\\sin x = x - \\frac{x^3}{3!} + \\cdots$:

$$\\sin(2x) = 2x - \\frac{(2x)^3}{3!} + \\frac{(2x)^5}{5!} - \\cdots = 2x - \\frac{8x^3}{6} + \\cdots = 2x - \\frac{4x^3}{3} + \\cdots$$

> ⚠️ When you substitute $2x$, the **whole** factor gets raised to the power: $(2x)^3 = 8x^3$, not $2x^3$. This is the #1 substitution mistake.`,
      },
      {
        id: 'cts4-sub-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Substituting $u = -x^2$ into $\\dfrac{1}{1-u} = \\sum u^n$ gives the Maclaurin series for:',
              options: [
                '$\\dfrac{1}{1+x^2}$',
                '$\\dfrac{1}{1-x^2}$',
                '$\\dfrac{1}{1+x}$',
                '$\\arctan x$',
              ],
              correctAnswer: 0,
              explanation: 'With $u = -x^2$, $\\frac{1}{1-u} = \\frac{1}{1-(-x^2)} = \\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \\cdots$.',
            },
            {
              question: 'The Maclaurin series for $\\cos(x^2)$ begins:',
              options: [
                '$1 - \\dfrac{x^4}{2!} + \\dfrac{x^8}{4!} - \\cdots$',
                '$1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$',
                '$x^2 - \\dfrac{x^6}{3!} + \\cdots$',
                '$1 - x^4 + x^8 - \\cdots$',
              ],
              correctAnswer: 0,
              explanation: 'Replace $x$ with $x^2$ in $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, giving $1 - \\frac{(x^2)^2}{2!} + \\frac{(x^2)^4}{4!} - \\cdots = 1 - \\frac{x^4}{2!} + \\frac{x^8}{4!} - \\cdots$.',
            },
          ],
        },
      },
      {
        id: 'cts4-sub-drill',
        type: 'input-boxes' as const,
        content: `**Substitution Drill** 🧮

**1)** In $e^{3x}$, the coefficient of $x^2$ comes from $\\dfrac{(3x)^2}{2!} = \\dfrac{9x^2}{2}$. Enter the coefficient as a fraction \`9/2\`.
**2)** In $\\sin(2x) = 2x - \\dfrac{(2x)^3}{3!} + \\cdots$, what is $(2x)^3$? Enter the coefficient of $x^3$ inside that term, i.e. the value of $2^3$.
**3)** In $\\dfrac{1}{1+x} = 1 - x + x^2 - x^3 + \\cdots$, the coefficient of $x^3$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9/2', '8', '-1'],
          hint1: '$(3x)^2 = 9x^2$, divided by $2! = 2$, gives $\\frac{9}{2}x^2$.',
          hint2: '$(2x)^3 = 2^3 x^3 = 8x^3$, so $2^3 = 8$.',
          hint3: '$\\frac{1}{1+x} = \\sum(-1)^n x^n$, so the $x^3$ coefficient is $(-1)^3 = -1$.',
          explanation: '1) $\\frac{9}{2}$.  2) $2^3 = 8$.  3) $(-1)^3 = -1$. Substitution is pure algebra once you respect the exponents.',
        },
      },
      {
        id: 'cts4-sub-dropdown',
        type: 'dropdown-select' as const,
        content: `**Substitution Targets** 🔽

Pick the substitution that turns the known series into the target.`,
        exercise: {
          dropdowns: [
            { label: 'To get $e^{x^2}$ from $e^x$, substitute:', options: ['$x \\to x^2$', '$x \\to 2x$', '$x \\to -x$', '$x \\to x^3$'] },
            { label: 'To get $\\dfrac{1}{1+x}$ from $\\dfrac{1}{1-u}$, let:', options: ['$u \\to -x$', '$u \\to x^2$', '$u \\to 2x$', '$u \\to x$'] },
            { label: 'In $\\sin(2x)$, the cube term uses $(2x)^3 =$', options: ['$8x^3$', '$2x^3$', '$6x^3$', '$4x^3$'] },
          ],
          correctAnswers: ['$x \\to x^2$', '$u \\to -x$', '$8x^3$'],
          hint1: 'Replace $x$ with $x^2$ everywhere in the $e^x$ series.',
          hint2: '$\\frac{1}{1-(-x)} = \\frac{1}{1+x}$.',
          hint3: '$(2x)^3 = 2^3 x^3 = 8x^3$.',
          explanation: 'Substitute $x\\to x^2$ for $e^{x^2}$; $u\\to -x$ for $\\frac{1}{1+x}$; and $(2x)^3 = 8x^3$ — the whole factor is cubed.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts5-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 5 of 7 — Differentiating & Integrating Series**

---

> 🔑 **Term-by-Term Calculus:** Inside its interval of convergence, you can differentiate or integrate a power series **one term at a time**, just like a polynomial. This unlocks series that are painful to build directly.`,
      },
      {
        id: 'cts5-termbyterm',
        type: 'text' as const,
        content: `## Differentiate or Integrate Term by Term

If $f(x) = \\sum c_n x^n$ on its interval of convergence, then

$$f'(x) = \\sum_{n=1}^{\\infty} n\\,c_n x^{n-1}, \\qquad \\int f(x)\\,dx = C + \\sum_{n=0}^{\\infty}\\frac{c_n}{n+1}x^{n+1}$$

### Example: differentiate $\\sin x$ to recover $\\cos x$

$$\\frac{d}{dx}\\left(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\right) = 1 - \\frac{3x^2}{3!} + \\frac{5x^4}{5!} - \\cdots = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\cos x$$

> ✅ **Check:** $\\dfrac{3}{3!} = \\dfrac{3}{6} = \\dfrac{1}{2} = \\dfrac{1}{2!}$ and $\\dfrac{5}{5!} = \\dfrac{5}{120} = \\dfrac{1}{24} = \\dfrac{1}{4!}$. The derivative of $\\sin x$ really is $\\cos x$, term by term. ✓`,
      },
      {
        id: 'cts5-arctan',
        type: 'text' as const,
        content: `## Worked Example: Build $\\arctan x$ by Integration

Recall $\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^2}$. We already found

$$\\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \\cdots$$

Integrate term by term (and use $\\arctan 0 = 0$, so $C = 0$):

$$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1},\\qquad \\lvert x\\rvert \\le 1$$

> 💡 This is how $\\ln(1+x)$ is built too: integrate $\\dfrac{1}{1+x} = 1 - x + x^2 - \\cdots$ term by term to get $x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots$.`,
      },
      {
        id: 'cts5-diff-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiating the series for $\\cos x$ term by term gives:',
              options: ['$-\\sin x$', '$\\sin x$', '$\\cos x$', '$-\\cos x$'],
              correctAnswer: 0,
              explanation: 'Since $\\frac{d}{dx}\\cos x = -\\sin x$, term-by-term differentiation of the $\\cos x$ series produces the series for $-\\sin x$.',
            },
            {
              question: 'Integrating $\\dfrac{1}{1+x} = 1 - x + x^2 - x^3 + \\cdots$ term by term (with $C$ chosen so the value at $0$ is $0$) gives:',
              options: [
                '$\\ln(1+x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots$',
                '$\\arctan x = x - \\dfrac{x^3}{3} + \\cdots$',
                '$e^x = 1 + x + \\cdots$',
                '$\\dfrac{1}{1-x} = 1 + x + \\cdots$',
              ],
              correctAnswer: 0,
              explanation: 'Antiderivative of $\\frac{1}{1+x}$ is $\\ln(1+x)$. Integrating each term: $\\int 1\\,dx = x$, $\\int(-x)\\,dx = -\\frac{x^2}{2}$, etc., giving $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$.',
            },
          ],
        },
      },
      {
        id: 'cts5-int-drill',
        type: 'input-boxes' as const,
        content: `**Term-by-Term Drill** 🧮

**1)** Differentiating $\\dfrac{x^4}{4!}$ gives $\\dfrac{4x^3}{4!} = \\dfrac{x^3}{?}$. Enter the new denominator.  *(Hint: $4!/4 = 3! = 6$)*
**2)** Integrating $x^2$ gives $\\dfrac{x^3}{?}$ (ignoring $+C$). Enter the denominator.
**3)** In the series $\\arctan x = x - \\dfrac{x^3}{3} + \\dfrac{x^5}{5} - \\cdots$, the coefficient of $x^5$ is $\\,?$  *(fraction \`1/5\`)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', '1/5'],
          hint1: '$\\frac{4}{4!} = \\frac{4}{24} = \\frac{1}{6}$, so the denominator is $6$ (which is $3!$).',
          hint2: '$\\int x^2\\,dx = \\frac{x^3}{3}$, so the denominator is $3$.',
          hint3: 'The pattern of $\\arctan x$ is $\\frac{(-1)^n x^{2n+1}}{2n+1}$; the $x^5$ term ($n=2$) is $+\\frac{x^5}{5}$.',
          explanation: '1) denominator $6$.  2) denominator $3$.  3) coefficient $\\frac{1}{5}$. Term-by-term calculus mirrors the power rule.',
        },
      },
      {
        id: 'cts5-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Operation?** 🔽

Choose how each known series produces the target.`,
        exercise: {
          dropdowns: [
            { label: 'From $\\dfrac{1}{1+x^2}$ to $\\arctan x$:', options: ['integrate term by term', 'differentiate term by term', 'substitute $x\\to 2x$', 'multiply by $x$'] },
            { label: 'From $\\sin x$ to $\\cos x$:', options: ['differentiate term by term', 'integrate term by term', 'square the series', 'substitute $x\\to x^2$'] },
            { label: 'From $\\dfrac{1}{1+x}$ to $\\ln(1+x)$:', options: ['integrate term by term', 'differentiate term by term', 'substitute $x\\to -x$', 'multiply by $x^2$'] },
          ],
          correctAnswers: ['integrate term by term', 'differentiate term by term', 'integrate term by term'],
          hint1: '$\\arctan x$ is an antiderivative of $\\frac{1}{1+x^2}$.',
          hint2: '$\\frac{d}{dx}\\sin x = \\cos x$.',
          hint3: '$\\ln(1+x)$ is an antiderivative of $\\frac{1}{1+x}$.',
          explanation: 'Integrate $\\frac{1}{1+x^2}\\to\\arctan x$; differentiate $\\sin x\\to\\cos x$; integrate $\\frac{1}{1+x}\\to\\ln(1+x)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts6-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 6 of 7 — Approximation, Error & Limits**

---

> 🔑 **Why We Bother:** Series let us **approximate** values a calculator can't reach in closed form, **bound the error**, and **evaluate tough limits** by inspection. This is where BC free-response points live.`,
      },
      {
        id: 'cts6-approx',
        type: 'text' as const,
        content: `## Approximating a Value

To estimate $\\cos(0.2)$, plug $x = 0.2$ into a few terms of $\\cos x = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$:

$$\\cos(0.2) \\approx 1 - \\frac{(0.2)^2}{2} = 1 - \\frac{0.04}{2} = 1 - 0.02 = 0.98$$

The true value is $0.980067$, so two terms already give 4-decimal accuracy.

## The Alternating Series Error Bound

For an **alternating** series whose terms decrease in size to $0$, the truncation error is **less than the first omitted term**:

$$\\left|\\,\\text{error}\\,\\right| \\le \\left|\\text{first dropped term}\\right|$$

For $\\cos(0.2)$, the first dropped term is $\\dfrac{(0.2)^4}{4!} = \\dfrac{0.0016}{24} \\approx 0.0000667$, so our estimate is off by at most $0.0000667$.

> 💡 The alternating series bound is the **fastest** way to control error on the BC exam — no derivative of $f$ required, just the next term.`,
      },
      {
        id: 'cts6-lagrange',
        type: 'text' as const,
        content: `## The Lagrange Error Bound

For any Taylor polynomial $P_n$, the remainder $R_n(x) = f(x) - P_n(x)$ satisfies

$$\\left|R_n(x)\\right| \\le \\frac{M}{(n+1)!}\\left|x-a\\right|^{n+1}$$

where $M$ is a bound on $\\left|f^{(n+1)}\\right|$ between $a$ and $x$.

### Example

Approximating $\\sin(0.5)$ with $P_3(x) = x - \\dfrac{x^3}{6}$, the next derivative is bounded by $M = 1$ (all derivatives of $\\sin$ are bounded by $1$):

$$\\left|R_3(0.5)\\right| \\le \\frac{1}{4!}(0.5)^4 = \\frac{0.0625}{24} \\approx 0.0026$$

> ⚠️ Use $\\boldsymbol{(n+1)!}$ and the power $\\boldsymbol{\\lvert x-a\\rvert^{n+1}}$ — both indices go **up by one** from the polynomial's degree $n$. Forgetting the "$+1$" is the classic error.`,
      },
      {
        id: 'cts6-error-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You approximate $\\cos(0.3)$ with $1 - \\dfrac{(0.3)^2}{2}$. By the alternating series bound, the error is at most:',
              options: [
                '$\\dfrac{(0.3)^4}{4!}$',
                '$\\dfrac{(0.3)^2}{2!}$',
                '$\\dfrac{(0.3)^4}{2!}$',
                '$(0.3)^4$',
              ],
              correctAnswer: 0,
              explanation: 'The next (first omitted) term of the alternating $\\cos$ series is $+\\frac{x^4}{4!}$, so the error is at most $\\frac{(0.3)^4}{4!}$.',
            },
            {
              question: 'In the Lagrange bound $\\lvert R_n(x)\\rvert \\le \\dfrac{M}{(n+1)!}\\lvert x-a\\rvert^{n+1}$, the quantity $M$ is:',
              options: [
                'a bound on $\\lvert f^{(n+1)}\\rvert$ between $a$ and $x$',
                'the value $f(a)$',
                'always equal to $1$',
                'the $n$-th term of the series',
              ],
              correctAnswer: 0,
              explanation: '$M$ is an upper bound for $\\lvert f^{(n+1)}(t)\\rvert$ for $t$ between the center $a$ and the point $x$. For $\\sin$ and $\\cos$, $M=1$ works.',
            },
          ],
        },
      },
      {
        id: 'cts6-limit',
        type: 'text' as const,
        content: `## Evaluating Limits with Series

Series turn nasty $\\frac{0}{0}$ limits into easy cancellation. Replace each function by its series and simplify.

### Example: $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3}$

Use $\\sin x = x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120} - \\cdots$:

$$\\frac{\\sin x - x}{x^3} = \\frac{\\left(x - \\frac{x^3}{6} + \\cdots\\right) - x}{x^3} = \\frac{-\\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots}{x^3} = -\\frac{1}{6} + \\frac{x^2}{120} - \\cdots$$

As $x \\to 0$, every remaining term vanishes except the constant:

$$\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3} = -\\frac{1}{6}$$

> 💡 This is often faster than L'Hôpital's Rule — one substitution and the answer is the leading coefficient.`,
      },
      {
        id: 'cts6-approx-drill',
        type: 'input-boxes' as const,
        content: `**Approximation & Limits Drill** 🧮

**1)** Estimate $e^{0.1}$ with $1 + x + \\dfrac{x^2}{2}$: $\\;1 + 0.1 + \\dfrac{0.01}{2} = \\,?$  *(decimal)*
**2)** The alternating-series error bound for $\\sin(0.4) \\approx 0.4 - \\dfrac{(0.4)^3}{6}$ is the next term $\\dfrac{(0.4)^5}{5!} = \\dfrac{0.01024}{120}$. Round to the nearest $0.0001$: $\\,?$
**3)** Evaluate $\\displaystyle\\lim_{x\\to 0}\\frac{1 - \\cos x}{x^2}$ using $\\cos x = 1 - \\dfrac{x^2}{2} + \\cdots$. Answer as a fraction \`1/2\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1.105', '0.0001', '1/2'],
          hint1: '$1 + 0.1 + 0.005 = 1.105$ (true $e^{0.1}\\approx 1.10517$).',
          hint2: '$\\frac{0.01024}{120} = 0.00008533\\ldots$, which rounds to $0.0001$.',
          hint3: '$1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\cdots$, so $\\frac{1-\\cos x}{x^2} = \\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\to \\frac{1}{2}$.',
          explanation: '1) $1.105$.  2) $\\approx 0.0001$.  3) $\\frac{1}{2}$. Series make approximation, error bounds, and limits routine.',
        },
      },
      {
        id: 'cts6-error-dropdown',
        type: 'dropdown-select' as const,
        content: `**Error-Bound Picker** 🔽

Choose the right tool or quantity for each situation.`,
        exercise: {
          dropdowns: [
            { label: 'Error of an alternating partial sum is at most:', options: ['the first omitted term', 'the last kept term', 'the sum of all terms', 'zero'] },
            { label: 'In the Lagrange bound, the factorial in the denominator is:', options: ['$(n+1)!$', '$n!$', '$(n-1)!$', '$2n!$'] },
            { label: 'For $\\sin x$ and $\\cos x$, a valid bound $M$ on every derivative is:', options: ['$1$', '$0$', '$\\infty$', '$\\pi$'] },
          ],
          correctAnswers: ['the first omitted term', '$(n+1)!$', '$1$'],
          hint1: 'Alternating series error is bounded by the size of the next term you dropped.',
          hint2: 'The Lagrange bound bumps the index up by one: $(n+1)!$.',
          hint3: 'Every derivative of $\\sin$ or $\\cos$ stays within $[-1,1]$, so $M=1$.',
          explanation: 'Alternating error $\\le$ first omitted term; the Lagrange denominator is $(n+1)!$; and $M=1$ bounds all derivatives of $\\sin$ and $\\cos$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'common-taylor-series',
    sections: [
      {
        id: 'cts7-intro',
        type: 'text' as const,
        content: `# 🌀 Common Taylor Series & Applications

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) build a Taylor/Maclaurin series from the formula, (2) recall the Famous Five, (3) make new series by substitution, (4) differentiate and integrate term by term, and (5) approximate values, bound error, and crack limits. Let's put it together.`,
      },
      {
        id: 'cts7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Taylor coefficient | $c_n = \\dfrac{f^{(n)}(a)}{n!}$ |
| $e^x$ | $\\sum \\dfrac{x^n}{n!}$ (all $x$) |
| $\\sin x$ / $\\cos x$ | odd / even powers, alternating (all $x$) |
| $\\dfrac{1}{1-x}$ | $\\sum x^n$ for $\\lvert x\\rvert<1$ |
| $\\ln(1+x)$, $\\arctan x$ | integrate $\\frac{1}{1+x}$, $\\frac{1}{1+x^2}$ |
| New series | substitute / multiply / differentiate / integrate |
| Alternating error | $\\le$ first omitted term |
| Lagrange error | $\\dfrac{M}{(n+1)!}\\lvert x-a\\rvert^{n+1}$ |

> ⚠️ Remember: respect exponents under substitution ($(2x)^3 = 8x^3$), keep the $\\pm$ pattern in alternating series, and bump indices by one in the Lagrange bound.`,
      },
      {
        id: 'cts7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Maclaurin series for $e^{-x}$ is:',
              options: [
                '$1 - x + \\dfrac{x^2}{2!} - \\dfrac{x^3}{3!} + \\cdots$',
                '$1 + x + \\dfrac{x^2}{2!} + \\cdots$',
                '$-1 - x - \\dfrac{x^2}{2!} - \\cdots$',
                '$x - \\dfrac{x^3}{3!} + \\cdots$',
              ],
              correctAnswer: 0,
              explanation: 'Substitute $-x$ for $x$ in $e^x = \\sum \\frac{x^n}{n!}$: $e^{-x} = \\sum \\frac{(-x)^n}{n!} = 1 - x + \\frac{x^2}{2!} - \\frac{x^3}{3!} + \\cdots$ (signs alternate).',
            },
            {
              question: 'What is the coefficient of $x^2$ in the Maclaurin series for $e^{x}\\cdot\\cos x$? (Multiply the first few terms.)',
              options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$-\\dfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: '$e^x = 1 + x + \\frac{x^2}{2} + \\cdots$ and $\\cos x = 1 - \\frac{x^2}{2} + \\cdots$. The $x^2$ terms: $1\\cdot(-\\frac{1}{2}) + 1\\cdot 0 \\,(\\text{no }x^1\\text{ in }\\cos) + \\frac{1}{2}\\cdot 1 = -\\frac{1}{2} + \\frac{1}{2} = 0$.',
            },
          ],
        },
      },
      {
        id: 'cts7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Coefficient of $x^2$ in $e^{2x}$: from $\\dfrac{(2x)^2}{2!} = \\dfrac{4x^2}{2}$, the coefficient is $\\,?$
**2)** $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^x - 1 - x}{x^2}$ using $e^x = 1 + x + \\dfrac{x^2}{2} + \\cdots$. Answer as a fraction \`1/2\`.
**3)** Coefficient of $x^3$ in $\\sin x$ (i.e. the value of the $x^3$ coefficient $-\\dfrac{1}{3!}$) as a fraction \`-1/6\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1/2', '-1/6'],
          hint1: '$\\frac{(2x)^2}{2!} = \\frac{4x^2}{2} = 2x^2$, so the coefficient is $2$.',
          hint2: '$e^x - 1 - x = \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$, so $\\frac{e^x-1-x}{x^2} = \\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}$.',
          hint3: '$\\sin x = x - \\frac{x^3}{3!} + \\cdots$ and $3! = 6$, so the $x^3$ coefficient is $-\\frac{1}{6}$.',
          explanation: '1) $2$.  2) $\\frac{1}{2}$.  3) $-\\frac{1}{6}$. Substitution, limits, and recall — all in one drill.',
        },
      },
      {
        id: 'cts7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Strategy Picker** 🔽

Choose the most efficient method for each task.`,
        exercise: {
          dropdowns: [
            { label: 'Find the series for $e^{x^3}$:', options: ['substitute $x\\to x^3$ in $e^x$', 'integrate $e^x$ thrice', 'differentiate $\\cos x$', 'use the Lagrange bound'] },
            { label: 'Bound the error of an alternating partial sum:', options: ['use the first omitted term', 'square the last term', 'take a derivative', 'integrate term by term'] },
            { label: 'Find the series for $\\arctan x$:', options: ['integrate $\\dfrac{1}{1+x^2}$', 'differentiate $\\sin x$', 'substitute $x\\to 2x$ in $e^x$', 'multiply $\\cos x$ by $x$'] },
          ],
          correctAnswers: ['substitute $x\\to x^3$ in $e^x$', 'use the first omitted term', 'integrate $\\dfrac{1}{1+x^2}$'],
          hint1: 'Replacing $x$ with $x^3$ in a known series is instant.',
          hint2: 'Alternating error is bounded by the size of the next term.',
          hint3: '$\\arctan x = \\int \\frac{1}{1+x^2}\\,dx$.',
          explanation: 'Substitute for $e^{x^3}$; first omitted term bounds alternating error; integrate $\\frac{1}{1+x^2}$ for $\\arctan x$.',
        },
      },
      {
        id: 'cts7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is the Maclaurin series for $\\dfrac{1}{1-x}$ (valid for $\\lvert x\\rvert<1$)?',
              options: [
                '$1 + x + x^2 + x^3 + \\cdots$',
                '$1 - x + x^2 - x^3 + \\cdots$',
                '$x + \\dfrac{x^2}{2} + \\dfrac{x^3}{3} + \\cdots$',
                '$1 + \\dfrac{x}{1!} + \\dfrac{x^2}{2!} + \\cdots$',
              ],
              correctAnswer: 0,
              explanation: 'The geometric series $\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\cdots$ for $\\lvert x\\rvert<1$. The second option is $\\frac{1}{1+x}$; the last is $e^x$.',
            },
            {
              question: 'Using $\\sin x \\approx x - \\dfrac{x^3}{6}$, the alternating-series error in estimating $\\sin(0.5)$ is at most:',
              options: [
                '$\\dfrac{(0.5)^5}{5!}$',
                '$\\dfrac{(0.5)^3}{3!}$',
                '$\\dfrac{(0.5)^4}{4!}$',
                '$(0.5)^5$',
              ],
              correctAnswer: 0,
              explanation: 'The next term of the alternating $\\sin$ series after $-\\frac{x^3}{6}$ is $+\\frac{x^5}{5!}$, so the error is at most $\\frac{(0.5)^5}{5!} = \\frac{0.03125}{120} \\approx 0.00026$.',
            },
            {
              question: '$\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2} = $',
              options: ['$\\dfrac{1}{2}$', '$0$', '$1$', '$\\dfrac{1}{6}$'],
              correctAnswer: 0,
              explanation: '$1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\cdots$, so $\\frac{1-\\cos x}{x^2} = \\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\to \\frac{1}{2}$ as $x\\to 0$.',
            },
          ],
        },
      },
    ],
  },
]
