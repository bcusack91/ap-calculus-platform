import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Higher-Order Derivatives (AP Calculus AB).
 * Registry key / DB Topic.slug: 'higher-order-derivatives'.
 * 7 parts, gold-standard structure: what they are & notation → computing them for
 * polynomials/powers → trig, exp, log & rational/radical → position, velocity,
 * acceleration & jerk → concavity & inflection (the 2nd derivative) → implicit
 * 2nd derivatives + nth-derivative patterns → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified with a CAS and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod1-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 1 of 7 — The Derivative of the Derivative**

---

### Topics in This Part

| Section |
|---------|
| What Is a Higher-Order Derivative? |
| The Three Notations (Leibniz, prime, $f^{(n)}$) |
| Reading Order from Notation |

> 🔑 **Key Concept:** A derivative is itself a function — so you can differentiate it *again*. Do it twice and you get the **second derivative**; three times, the **third**; and so on. These repeated derivatives are called **higher-order derivatives**, and each one measures the rate of change of the one before it.`,
      },
      {
        id: 'hod1-what',
        type: 'text' as const,
        content: `## What Is a Higher-Order Derivative?

Start with a function $f(x)$. Differentiating gives the **first derivative** $f'(x)$, which measures how fast $f$ changes.

But $f'(x)$ is just another function — so we can differentiate *it*:

$$f''(x) = \\frac{d}{dx}\\big[\\,f'(x)\\,\\big]$$

This is the **second derivative**. Keep going and you build a whole chain:

| Order | Name | Meaning |
|-------|------|---------|
| $f(x)$ | the function | the quantity itself |
| $f'(x)$ | first derivative | rate of change of $f$ |
| $f''(x)$ | second derivative | rate of change of $f'$ |
| $f'''(x)$ | third derivative | rate of change of $f''$ |

> 🔑 **Key Idea:** Each derivative is the slope (rate of change) of the curve **above** it in the table. There is nothing new to learn about *how* to differentiate — you just apply the rules you already know, one extra time.`,
      },
      {
        id: 'hod1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `The second derivative $f''(x)$ is best described as:`,
              options: [
                `the derivative of the first derivative`,
                `the function $f(x)$ multiplied by $2$`,
                `the slope of $f$ at exactly two points`,
                `the original function squared`,
              ],
              correctAnswer: 0,
              explanation: `You get $f''(x)$ by differentiating $f'(x)$. It measures the rate of change of the first derivative — not anything squared or doubled.`,
            },
            {
              question: `Differentiating the second derivative $f''(x)$ once more produces $f'''(x)$. That result $f'''$ is the:`,
              options: ['fourth derivative', 'second derivative', 'third derivative', 'first derivative'],
              correctAnswer: 2,
              explanation: `$f'''$ has three primes, so it is the third derivative — one order higher than $f''$. Each extra differentiation raises the order by one.`,
            },
          ],
        },
      },
      {
        id: 'hod1-notation',
        type: 'text' as const,
        content: `## The Three Notations

The AP exam uses all three of these interchangeably. You must read every one fluently.

| Order | Prime / Roman | Leibniz | $f^{(n)}$ notation |
|-------|---------------|---------|--------------------|
| 1st | $f'(x)$ or $y'$ | $\\dfrac{dy}{dx}$ | $f^{(1)}(x)$ |
| 2nd | $f''(x)$ or $y''$ | $\\dfrac{d^2y}{dx^2}$ | $f^{(2)}(x)$ |
| 3rd | $f'''(x)$ or $y'''$ | $\\dfrac{d^3y}{dx^3}$ | $f^{(3)}(x)$ |
| $n$th | (too many primes!) | $\\dfrac{d^ny}{dx^n}$ | $f^{(n)}(x)$ |

> ⚠️ **Watch the Leibniz placement.** The second derivative is $\\dfrac{d^2y}{dx^2}$ — the "$2$" sits on top with the $d$ in the numerator, but **next to the $x$** in the denominator. It is *not* $\\dfrac{d^2y}{dx^{2}}$ written as $\\left(\\dfrac{dy}{dx}\\right)^2$. The superscripts mean "differentiate twice," not "square."

> 💡 Once you pass three primes, writing $f''''(x)$ gets silly. From the 4th derivative on, switch to $f^{(4)}(x)$ with the order in parentheses.`,
      },
      {
        id: 'hod1-readnotation',
        type: 'dropdown-select' as const,
        content: `**Match the Notation** 🔽

Each symbol below names a derivative of $y = f(x)$. Pick the order it represents.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d^3y}{dx^3}$ is the …', options: ['first derivative', 'second derivative', 'third derivative', 'fourth derivative'] },
            { label: '$f^{(4)}(x)$ is the …', options: ['second derivative', 'third derivative', 'fourth derivative', 'fifth derivative'] },
            { label: `$y''$ is the …`, options: ['first derivative', 'second derivative', 'third derivative', 'fourth derivative'] },
          ],
          correctAnswers: ['third derivative', 'fourth derivative', 'second derivative'],
          hint1: `In Leibniz form $\\dfrac{d^ny}{dx^n}$, the superscript $n$ is the order.`,
          hint2: `In $f^{(n)}(x)$, the number in parentheses is the order directly.`,
          hint3: `Count the primes: $y''$ has two primes, so it is the second derivative.`,
          explanation: `$\\dfrac{d^3y}{dx^3}$ → 3rd; $f^{(4)}(x)$ → 4th; $y''$ → 2nd. The order is the superscript (Leibniz), the parenthesized number ($f^{(n)}$), or the count of primes.`,
        },
      },
      {
        id: 'hod1-recap',
        type: 'text' as const,
        content: `## Putting It Together

To find a higher-order derivative you simply differentiate **repeatedly**, fully simplifying at each step before continuing.

**Example:** Find $f''(x)$ for $f(x) = x^3$.

$$f'(x) = 3x^2 \\qquad\\Longrightarrow\\qquad f''(x) = \\frac{d}{dx}\\big[3x^2\\big] = 6x$$

That's it — no new rule, just the power rule applied twice.`,
      },
      {
        id: 'hod1-firststep',
        type: 'input-boxes' as const,
        content: `**Your First Second Derivative** 🧮

Practice the "differentiate twice" idea on simple power functions.

**1)** For $f(x) = x^2$, find $f''(x)$.  *(it's a constant)*
**2)** For $f(x) = x^3$, find $f''(x)$ at $x = 2$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '12'],
          hint1: `$f(x) = x^2 \\Rightarrow f'(x) = 2x \\Rightarrow f''(x) = 2$.`,
          hint2: `$f(x) = x^3 \\Rightarrow f'(x) = 3x^2 \\Rightarrow f''(x) = 6x$.`,
          hint3: `Then substitute: $f''(2) = 6(2) = 12$.`,
          explanation: `1) $f''(x) = 2$ for $x^2$.  2) $f''(x) = 6x$ for $x^3$, so $f''(2) = 12$. You differentiated each twice — nothing more.`,
        },
      },
      {
        id: 'hod1-close',
        type: 'text' as const,
        content: `Differentiating twice took no new rule — just the power rule applied a second time. In **Part 2** we'll build real fluency computing second, third, and higher derivatives of polynomials and power functions.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod2-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 2 of 7 — Polynomials & Power Functions**

---

> 🔑 **The Idea:** For a polynomial, every derivative drops the degree by one. Differentiate enough times and you eventually reach a **constant**, and one more derivative after that gives **zero**.`,
      },
      {
        id: 'hod2-poly',
        type: 'text' as const,
        content: `## Differentiating a Polynomial Repeatedly

### Worked Example: $f(x) = x^4 - 3x^3 + 2x - 7$

Apply the power rule one order at a time, simplifying as you go:

$$f'(x) = 4x^3 - 9x^2 + 2$$
$$f''(x) = 12x^2 - 18x$$
$$f'''(x) = 24x - 18$$
$$f^{(4)}(x) = 24$$
$$f^{(5)}(x) = 0$$

> 💡 **Pattern:** A degree-$n$ polynomial has a *constant* $n$th derivative and a *zero* $(n+1)$th derivative. Here the degree is $4$, so $f^{(4)}$ is the constant $24$ and everything after is $0$.

> ⚠️ The constant term $-7$ and the linear term $2x$ vanish quickly: a constant differentiates to $0$, and $2x$ differentiates to $2$, then to $0$. Don't carry "ghost" terms forward.`,
      },
      {
        id: 'hod2-quiz1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `For $f(x) = x^3 - 5x^2 + 4x - 9$, what is $f''(x)$?`,
              options: ['$6x - 10$', '$3x^2 - 10x + 4$', '$6x - 5$', '$6$'],
              correctAnswer: 0,
              explanation: `First $f'(x) = 3x^2 - 10x + 4$. Differentiate again: $f''(x) = 6x - 10$. (The constant $4$ and $-9$ disappear.)`,
            },
            {
              question: `A polynomial has degree $5$. Its $6$th derivative $f^{(6)}(x)$ equals:`,
              options: ['a nonzero constant', '$0$', 'a linear function', 'undefined'],
              correctAnswer: 1,
              explanation: `A degree-$5$ polynomial has a constant $5$th derivative, so the $6$th derivative is $0$. In general $f^{(n+1)} = 0$ for a degree-$n$ polynomial.`,
            },
          ],
        },
      },
      {
        id: 'hod2-power',
        type: 'text' as const,
        content: `## Power Functions and the Marching Exponent

For $f(x) = x^n$, each derivative multiplies by the current exponent and lowers it by one:

### Worked Example: $f(x) = 2x^5$

$$f'(x) = 10x^4 \\quad f''(x) = 40x^3 \\quad f'''(x) = 120x^2 \\quad f^{(4)}(x) = 240x \\quad f^{(5)}(x) = 240$$

Watch the coefficients **build up**: $2 \\to 10 \\to 40 \\to 120 \\to 240$. Each comes from multiplying by the exponent that was sitting there before you differentiated ($2\\cdot 5 = 10$, then $10\\cdot 4 = 40$, then $40\\cdot 3 = 120$, then $120\\cdot 2 = 240$).

> 🔑 **Key Idea:** The repeated power rule produces a product of falling exponents. For $x^n$, the $k$th derivative is
> $$\\frac{d^k}{dx^k}\\,x^n = n(n-1)(n-2)\\cdots(n-k+1)\\,x^{\\,n-k}.$$`,
      },
      {
        id: 'hod2-drill',
        type: 'input-boxes' as const,
        content: `**Compute Higher Derivatives** 🧮

Find each requested derivative.

**1)** $f(x) = 6x^4$. Find $f'''(x)$ at $x = 1$.  *(i.e. plug in $x=1$)*
**2)** $g(x) = x^3 - 5x^2 + 4x - 9$. Find $g'''(x)$.  *(it's a constant)*
**3)** $h(x) = x^4 - 3x^3 + 2x - 7$. Find $h^{(4)}(x)$.  *(constant)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['144', '6', '24'],
          hint1: `$f' = 24x^3,\\; f'' = 72x^2,\\; f''' = 144x$. At $x=1$: $144(1) = 144$.`,
          hint2: `$g' = 3x^2-10x+4,\\; g'' = 6x-10,\\; g''' = 6$ (a constant).`,
          hint3: `$h' = 4x^3-9x^2+2,\\; h'' = 12x^2-18x,\\; h''' = 24x-18,\\; h^{(4)} = 24$.`,
          explanation: `1) $f'''(x) = 144x$, so $f'''(1) = 144$.  2) $g'''(x) = 6$.  3) $h^{(4)}(x) = 24$. Each polynomial flattens to a constant once you reach its degree.`,
        },
      },
      {
        id: 'hod2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Track the Coefficients** 🔽

You are differentiating $f(x) = x^6$ repeatedly. Fill in each derivative.`,
        exercise: {
          dropdowns: [
            { label: `$f'(x) =$`, options: ['$6x^5$', '$5x^6$', '$6x^6$', '$x^5$'] },
            { label: `$f''(x) =$`, options: ['$30x^4$', '$36x^4$', '$6x^4$', '$30x^5$'] },
            { label: `$f'''(x) =$`, options: ['$120x^3$', '$90x^3$', '$30x^3$', '$120x^4$'] },
          ],
          correctAnswers: ['$6x^5$', '$30x^4$', '$120x^3$'],
          hint1: `Power rule: $\\frac{d}{dx}x^6 = 6x^5$.`,
          hint2: `Differentiate $6x^5$: multiply by $5$, drop the exponent → $30x^4$.`,
          hint3: `Differentiate $30x^4$: $30\\cdot 4 = 120$ and exponent $4\\to 3$ → $120x^3$.`,
          explanation: `$x^6 \\to 6x^5 \\to 30x^4 \\to 120x^3$. The coefficient grows ($6 \\to 30 \\to 120$) because each step multiplies by the exponent that was present before differentiating.`,
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod3-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 3 of 7 — Trig, Exponentials, Logs & Reciprocals**

---

> 🔑 **Why this part matters:** Unlike polynomials, these functions never "die out." Their higher derivatives **cycle** (sine and cosine), **rescale** (exponentials), or **grow without bound** (reciprocals). Recognizing the pattern is half the work.`,
      },
      {
        id: 'hod3-trig',
        type: 'text' as const,
        content: `## Sine and Cosine: A Cycle of Four

Differentiating $\\sin x$ repeatedly walks a four-step loop:

$$\\sin x \\;\\xrightarrow{\\;d/dx\\;}\\; \\cos x \\;\\xrightarrow{\\;d/dx\\;}\\; -\\sin x \\;\\xrightarrow{\\;d/dx\\;}\\; -\\cos x \\;\\xrightarrow{\\;d/dx\\;}\\; \\sin x$$

After **four** derivatives you're back to the start. So:

| $f(x)=\\sin x$ | $f'$ | $f''$ | $f'''$ | $f^{(4)}$ |
|----------------|------|-------|--------|-----------|
| $\\sin x$ | $\\cos x$ | $-\\sin x$ | $-\\cos x$ | $\\sin x$ |

> 💡 **Shortcut for $\\sin x$:** the second derivative is the **negative of itself**: $\\dfrac{d^2}{dx^2}\\sin x = -\\sin x$. The same holds for cosine: $\\dfrac{d^2}{dx^2}\\cos x = -\\cos x$. This is why sine and cosine model oscillation — their acceleration points back toward zero.`,
      },
      {
        id: 'hod3-trigquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `What is $\\dfrac{d^3}{dx^3}\\,(\\cos x)$ (the third derivative of $\\cos x$)?`,
              options: ['$\\sin x$', '$-\\sin x$', '$\\cos x$', '$-\\cos x$'],
              correctAnswer: 0,
              explanation: `$\\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. The third derivative is $\\sin x$.`,
            },
            {
              question: `Which statement is true for $f(x) = \\sin x$?`,
              options: [`$f''(x) = -f(x)$`, `$f''(x) = f(x)$`, `$f''(x) = -f'(x)$`, `$f''(x) = 0$`],
              correctAnswer: 0,
              explanation: `$f''(x) = -\\sin x = -f(x)$. The second derivative of sine is the negative of sine itself.`,
            },
          ],
        },
      },
      {
        id: 'hod3-exp',
        type: 'text' as const,
        content: `## Exponentials: The Constant Keeps Multiplying

The exponential $e^x$ is its own derivative, so **every** higher derivative is still $e^x$:

$$\\frac{d^n}{dx^n}\\,e^x = e^x \\quad\\text{for all } n.$$

With an inner coefficient, the chain rule pulls out a factor each time:

$$\\frac{d}{dx}e^{2x} = 2e^{2x},\\quad \\frac{d^2}{dx^2}e^{2x} = 4e^{2x},\\quad \\frac{d^3}{dx^3}e^{2x} = 8e^{2x}.$$

In general $\\dfrac{d^n}{dx^n}e^{kx} = k^n e^{kx}$.

> ⚠️ **Sign-alternation trap:** for $e^{-x}$, each derivative multiplies by $-1$:
> $$e^{-x} \\to -e^{-x} \\to e^{-x} \\to -e^{-x} \\to \\cdots$$
> The magnitude stays $e^{-x}$, but the **sign flips** every order. So $\\dfrac{d^2}{dx^2}e^{-x} = e^{-x}$, while $\\dfrac{d^3}{dx^3}e^{-x} = -e^{-x}$.`,
      },
      {
        id: 'hod3-recip',
        type: 'text' as const,
        content: `## Reciprocals and Radicals: Rewrite First

For $\\dfrac{1}{x}$ and $\\sqrt{x}$, the trick is to rewrite using **negative or fractional exponents**, then use the power rule.

### $f(x) = \\dfrac{1}{x} = x^{-1}$

$$f'(x) = -x^{-2} = -\\frac{1}{x^2},\\quad f''(x) = 2x^{-3} = \\frac{2}{x^3},\\quad f'''(x) = -6x^{-4} = -\\frac{6}{x^4}.$$

### $f(x) = \\sqrt{x} = x^{1/2}$

$$f'(x) = \\tfrac{1}{2}x^{-1/2},\\quad f''(x) = -\\tfrac{1}{4}x^{-3/2} = -\\frac{1}{4x^{3/2}}.$$

> 🔑 **Key move:** Convert $\\dfrac{1}{x}$ to $x^{-1}$ and $\\sqrt{x}$ to $x^{1/2}$ *before* differentiating. The power rule handles negatives and fractions perfectly — and you can keep applying it order after order.`,
      },
      {
        id: 'hod3-drill',
        type: 'dropdown-select' as const,
        content: `**Spot the Higher Derivative** 🔽

Use the cycles and patterns above.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d^2}{dx^2}\\,e^{2x} =$', options: ['$2e^{2x}$', '$4e^{2x}$', '$e^{2x}$', '$8e^{2x}$'] },
            { label: '$\\dfrac{d^2}{dx^2}\\left(\\dfrac{1}{x}\\right) =$', options: ['$\\dfrac{2}{x^3}$', '$-\\dfrac{1}{x^2}$', '$-\\dfrac{2}{x^3}$', '$\\dfrac{1}{x^3}$'] },
            { label: '$\\dfrac{d^4}{dx^4}\\,(\\sin x) =$', options: ['$\\sin x$', '$\\cos x$', '$-\\sin x$', '$-\\cos x$'] },
          ],
          correctAnswers: ['$4e^{2x}$', '$\\dfrac{2}{x^3}$', '$\\sin x$'],
          hint1: `For $e^{kx}$, the $n$th derivative is $k^n e^{kx}$; here $k=2$, $n=2$, so $2^2 = 4$.`,
          hint2: `Write $\\frac1x = x^{-1}$: $f' = -x^{-2}$, $f'' = 2x^{-3} = \\frac{2}{x^3}$.`,
          hint3: `Sine has a 4-step cycle, so the 4th derivative returns to $\\sin x$.`,
          explanation: `$\\frac{d^2}{dx^2}e^{2x} = 4e^{2x}$; $\\frac{d^2}{dx^2}\\frac1x = \\frac{2}{x^3}$; $\\frac{d^4}{dx^4}\\sin x = \\sin x$ (a full cycle).`,
        },
      },
      {
        id: 'hod3-input',
        type: 'input-boxes' as const,
        content: `**Evaluate** 🧮

**1)** For $f(x) = e^{3x}$, find $f'''(x)$ in the form $(\\text{coefficient})\\,e^{3x}$ — enter just the coefficient.
**2)** For $g(x) = \\ln x$, the second derivative is $g''(x) = -\\dfrac{1}{x^2}$. Find $g''(x)$ at $x = 2$ (enter as a fraction).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['27', '-1/4'],
          hint1: `$\\frac{d^n}{dx^n}e^{3x} = 3^n e^{3x}$. For $n=3$: $3^3 = 27$.`,
          hint2: `$\\ln x \\to \\frac1x \\to -\\frac{1}{x^2}$. At $x=2$: $-\\frac{1}{2^2} = -\\frac14$.`,
          hint3: `Square the denominator before applying the sign: $-\\frac{1}{(2)^2} = -\\frac14$.`,
          explanation: `1) $f'''(x) = 27e^{3x}$, coefficient $27$.  2) $g''(2) = -\\frac{1}{4}$.`,
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod4-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 4 of 7 — Motion: Position, Velocity, Acceleration & Jerk**

---

> 🔑 **The Big Application:** If $s(t)$ is an object's **position** at time $t$, then its derivatives have famous physical names. This is the single most tested use of higher-order derivatives on the AP exam.`,
      },
      {
        id: 'hod4-pva',
        type: 'text' as const,
        content: `## The Motion Ladder

| Quantity | Symbol | How to get it | Meaning |
|----------|--------|---------------|---------|
| Position | $s(t)$ | given | where the object is |
| Velocity | $v(t) = s'(t)$ | 1st derivative | how fast & which direction |
| Acceleration | $a(t) = v'(t) = s''(t)$ | 2nd derivative | how velocity changes |
| Jerk | $j(t) = a'(t) = s'''(t)$ | 3rd derivative | how acceleration changes |

So **velocity is the first derivative of position**, and **acceleration is the second derivative of position**.

> 💡 **Sign meanings.** Velocity's sign tells you *direction* (positive = moving right/up). Acceleration's sign tells you whether the object is *speeding up or slowing down* — but only when compared to the velocity's sign (more on that below).`,
      },
      {
        id: 'hod4-worked',
        type: 'text' as const,
        content: `## Worked Example

A particle moves along a line with position $s(t) = t^3 - 6t^2 + 9t$ (meters, $t$ in seconds).

**Velocity:** $\\;v(t) = s'(t) = 3t^2 - 12t + 9$

**Acceleration:** $\\;a(t) = v'(t) = s''(t) = 6t - 12$

**Find the acceleration when the velocity is zero.** First solve $v(t)=0$:
$$3t^2 - 12t + 9 = 3(t-1)(t-3) = 0 \\;\\Rightarrow\\; t = 1 \\text{ or } t = 3.$$

Now evaluate acceleration at each:
$$a(1) = 6(1) - 12 = -6 \\,\\tfrac{\\text{m}}{\\text{s}^2}, \\qquad a(3) = 6(3) - 12 = +6 \\,\\tfrac{\\text{m}}{\\text{s}^2}.$$

> 🔑 **Interpretation:** At $t=1$ the particle is momentarily at rest with **negative** acceleration (about to move backward); at $t=3$ it is at rest with **positive** acceleration (about to move forward).`,
      },
      {
        id: 'hod4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `If $s(t)$ is position, which derivative gives **acceleration**?`,
              options: [`the second derivative $s''(t)$`, `the first derivative $s'(t)$`, `the third derivative $s'''(t)$`, `the function $s(t)$ itself`],
              correctAnswer: 0,
              explanation: `Acceleration $= v'(t) = s''(t)$, the second derivative of position. The first derivative is velocity; the third is jerk.`,
            },
            {
              question: `A particle has $s(t) = t^4 - 4t^3$. Its acceleration is $a(t) = 12t^2 - 24t$. At $t = 1$, $a(1) = $`,
              options: ['$-12$', '$12$', '$-24$', '$0$'],
              correctAnswer: 0,
              explanation: `$a(1) = 12(1)^2 - 24(1) = 12 - 24 = -12$. (Here $a(t)=s''(t)$, found by differentiating $s$ twice.)`,
            },
          ],
        },
      },
      {
        id: 'hod4-speeding',
        type: 'text' as const,
        content: `## Speeding Up vs. Slowing Down

A subtle but heavily tested idea: **acceleration alone does not tell you if the object speeds up.** You compare the *signs* of velocity and acceleration.

| $v(t)$ sign | $a(t)$ sign | Object is … |
|-------------|-------------|-------------|
| $+$ | $+$ | speeding up |
| $-$ | $-$ | speeding up |
| $+$ | $-$ | slowing down |
| $-$ | $+$ | slowing down |

> 🔑 **Rule:** The object **speeds up** when $v$ and $a$ have the **same sign**, and **slows down** when they have **opposite signs**. Equivalently, speed increases exactly when $v\\cdot a > 0$.

> ⚠️ A common error is saying "acceleration is negative, so the object is slowing down." That's only true if velocity is *positive*. If velocity is also negative, a negative acceleration makes it speed up (in the negative direction).`,
      },
      {
        id: 'hod4-speedingcheck',
        type: 'dropdown-select' as const,
        content: `**Speeding Up or Slowing Down?** 🔽

At three different instants a particle has the velocity and acceleration shown. Decide what it's doing (compare signs).`,
        exercise: {
          dropdowns: [
            { label: '$v = 4$, $a = -3$:', options: ['slowing down', 'speeding up', 'at rest', 'not moving'] },
            { label: '$v = -2$, $a = -5$:', options: ['speeding up', 'slowing down', 'at rest', 'reversing'] },
            { label: '$v = 5$, $a = 2$:', options: ['speeding up', 'slowing down', 'at rest', 'stopping'] },
          ],
          correctAnswers: ['slowing down', 'speeding up', 'speeding up'],
          hint1: 'Same signs → speeding up; opposite signs → slowing down.',
          hint2: '$v=4>0$ and $a=-3<0$ are opposite, so the object is slowing down.',
          hint3: 'Check the product $v\\cdot a$: positive → speeding up, negative → slowing down.',
          explanation: '$v=4,a=-3$: opposite signs ($v\\cdot a = -12 < 0$) → slowing down. $v=-2,a=-5$: same sign ($v\\cdot a = 10 > 0$) → speeding up. $v=5,a=2$: same sign → speeding up.',
        },
      },
      {
        id: 'hod4-drill',
        type: 'input-boxes' as const,
        content: `**Motion Calculations** 🧮

A particle has position $s(t) = t^3 - 6t^2 + 9t$ (from the worked example).

**1)** Find the velocity at $t = 0$:  $v(0) = ?$
**2)** Find the acceleration at $t = 2$:  $a(2) = ?$
**3)** The jerk $j(t) = s'''(t)$ is a constant. What is it?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '0', '6'],
          hint1: `$v(t) = 3t^2 - 12t + 9$, so $v(0) = 9$.`,
          hint2: `$a(t) = 6t - 12$, so $a(2) = 6(2) - 12 = 0$.`,
          hint3: `$a(t) = 6t - 12 \\Rightarrow j(t) = a'(t) = 6$, a constant.`,
          explanation: `1) $v(0) = 9$ m/s.  2) $a(2) = 0$ $m/s^{2}$ (acceleration is momentarily zero).  3) Jerk $= s'''(t) = 6$ $m/s^{3}$, constant for a cubic position.`,
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod5-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 5 of 7 — Concavity, Inflection Points & the Second-Derivative Test**

---

> 🔑 **The Geometric Meaning:** The first derivative tells you whether a curve goes **up or down**. The second derivative tells you which way it **bends** — that bending is called **concavity**, and it's the second derivative's signature job.`,
      },
      {
        id: 'hod5-concavity',
        type: 'text' as const,
        content: `## What the Second Derivative Sees

| If $f''(x)$ … | the graph is … | shape |
|---------------|----------------|-------|
| $f''(x) > 0$ | **concave up** | holds water, $\\cup$ |
| $f''(x) < 0$ | **concave down** | spills water, $\\cap$ |

A point where concavity **changes** (from up to down, or down to up) is an **inflection point**. At an inflection point $f''=0$ *or* is undefined — **and** $f''$ must actually change sign there.

### Example: $f(x) = x^3 - 3x^2 + 1$

$$f'(x) = 3x^2 - 6x, \\qquad f''(x) = 6x - 6 = 6(x-1).$$

Set $f''(x) = 0$: $\\;x = 1$. Test each side:

- At $x = 0$: $f''(0) = -6 < 0$ → concave **down**.
- At $x = 2$: $f''(2) = +6 > 0$ → concave **up**.

The sign flips at $x = 1$, so $x = 1$ **is** an inflection point.

> ⚠️ $f''=0$ is **necessary but not sufficient.** For $f(x) = x^4$, $f''(x) = 12x^2 = 0$ at $x = 0$, but $f''$ is $\\ge 0$ on both sides — no sign change, so $x=0$ is **not** an inflection point.`,
      },
      {
        id: 'hod5-concavequiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `On an interval where $f''(x) < 0$, the graph of $f$ is:`,
              options: ['concave down', 'concave up', 'increasing', 'a straight line'],
              correctAnswer: 0,
              explanation: `$f'' < 0$ means concave down (the $\\cap$ shape). Concavity is about bending, not about increasing/decreasing (that\'s $f'$).`,
            },
            {
              question: `For $f(x) = x^4$ we have $f''(x) = 12x^2$. Is $x = 0$ an inflection point?`,
              options: [
                `No — $f''$ does not change sign there`,
                `Yes — because $f''(0) = 0$`,
                `Yes — every critical point is an inflection point`,
                `Cannot be determined`,
              ],
              correctAnswer: 0,
              explanation: `$f''(0)=0$, but $12x^2 \\ge 0$ on both sides — no sign change, so concavity never flips. It is **not** an inflection point. $f''=0$ alone is not enough.`,
            },
          ],
        },
      },
      {
        id: 'hod5-sdt',
        type: 'text' as const,
        content: `## The Second-Derivative Test for Local Extrema

The second derivative also classifies critical points (places where $f'=0$) without checking sign charts:

| At a critical point $c$ (where $f'(c)=0$) | If $f''(c) > 0$ | If $f''(c) < 0$ |
|---|---|---|
| Conclusion | local **minimum** (concave up) | local **maximum** (concave down) |

If $f''(c) = 0$, the test is **inconclusive** — fall back to a first-derivative sign chart.

### Example: $f(x) = x^3 - 3x$

$$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) \\Rightarrow \\text{critical points } x = -1,\\, 1.$$
$$f''(x) = 6x.$$

- $f''(1) = 6 > 0$ → **local minimum** at $x=1$ (and $f(1) = -2$).
- $f''(-1) = -6 < 0$ → **local maximum** at $x=-1$ (and $f(-1) = 2$).

> 💡 **Memory hook:** Positive second derivative = "happy" $\\cup$ = bottom of a valley = **minimum**. Negative = "frowning" $\\cap$ = top of a hill = **maximum**.`,
      },
      {
        id: 'hod5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Tests** 🔽

Use $f''$ to read concavity and classify points.`,
        exercise: {
          dropdowns: [
            { label: `If $f''(c) = 5$ at a critical point $c$, then $c$ is a …`, options: ['local minimum', 'local maximum', 'inflection point', 'cannot tell'] },
            { label: `If $f''(c) = -3$ at a critical point $c$, then $c$ is a …`, options: ['local maximum', 'local minimum', 'inflection point', 'cannot tell'] },
            { label: `If $f''(c) = 0$ at a critical point $c$, the second-derivative test is …`, options: ['inconclusive', 'a guaranteed minimum', 'a guaranteed maximum', 'a guaranteed inflection'] },
          ],
          correctAnswers: ['local minimum', 'local maximum', 'inconclusive'],
          hint1: `Positive $f''$ → concave up → bottom of a valley → minimum.`,
          hint2: `Negative $f''$ → concave down → top of a hill → maximum.`,
          hint3: `When $f''(c) = 0$ the test gives no information; use a first-derivative sign chart instead.`,
          explanation: `$f''(c)>0$ → local min; $f''(c)<0$ → local max; $f''(c)=0$ → inconclusive (the curve could bend either way).`,
        },
      },
      {
        id: 'hod5-input',
        type: 'input-boxes' as const,
        content: `**Find the Inflection Point** 🧮

For $f(x) = x^3 - 3x^2 + 1$:

**1)** Compute $f''(x)$ and find the $x$-value where the inflection point occurs.
**2)** For $g(x) = x^3 - 3x$, the critical points are $x=\\pm 1$. Using $g''(x) = 6x$, give $g''(-1)$ (its sign tells you it's a max).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '-6'],
          hint1: `$f''(x) = 6x - 6$. Set $6x - 6 = 0 \\Rightarrow x = 1$ (and $f''$ changes sign there).`,
          hint2: `$g''(x) = 6x$, so $g''(-1) = 6(-1) = -6$.`,
          hint3: `A negative second derivative ($-6 < 0$) confirms a local maximum at $x = -1$.`,
          explanation: `1) Inflection at $x = 1$, where $f''$ switches from negative to positive.  2) $g''(-1) = -6 < 0$, so $x = -1$ is a local maximum.`,
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod6-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 6 of 7 — Implicit 2nd Derivatives & $n$th-Derivative Patterns**

---

> 🔑 **Two power moves:** (1) finding $\\dfrac{d^2y}{dx^2}$ when $y$ is defined *implicitly*, and (2) spotting a formula for the **general $n$th derivative** so you can jump straight to the 10th or 50th without computing all of them.`,
      },
      {
        id: 'hod6-implicit',
        type: 'text' as const,
        content: `## The Second Derivative, Implicitly

When a curve is given by an equation like $x^2 + y^2 = 25$, you find $\\dfrac{d^2y}{dx^2}$ in two stages.

**Stage 1 — first derivative (implicit differentiation):**
$$2x + 2y\\,\\frac{dy}{dx} = 0 \\;\\Rightarrow\\; \\frac{dy}{dx} = -\\frac{x}{y}.$$

**Stage 2 — differentiate again** (quotient rule, treating $y$ as a function of $x$):
$$\\frac{d^2y}{dx^2} = -\\frac{(1)\\cdot y - x\\cdot \\frac{dy}{dx}}{y^2} = -\\frac{y - x\\left(-\\frac{x}{y}\\right)}{y^2} = -\\frac{y + \\frac{x^2}{y}}{y^2}.$$

Multiply top and bottom by $y$:
$$\\frac{d^2y}{dx^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{25}{y^3}.$$

> 🔑 **Key step:** after differentiating once, you must **substitute** $\\dfrac{dy}{dx} = -\\dfrac{x}{y}$ back in — the second derivative cannot keep a $\\frac{dy}{dx}$ in it. The final answer used $x^2 + y^2 = 25$ to simplify.`,
      },
      {
        id: 'hod6-implicitquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: `When finding $\\dfrac{d^2y}{dx^2}$ implicitly, after differentiating the first derivative you must:`,
              options: [
                `substitute the expression for $\\frac{dy}{dx}$ back in`,
                `set $\\frac{dy}{dx} = 0$`,
                `ignore the $\\frac{dy}{dx}$ terms`,
                `replace $y$ with $x$`,
              ],
              correctAnswer: 0,
              explanation: `The second derivative must be free of $\\frac{dy}{dx}$, so you substitute its known expression (here $-x/y$) and simplify.`,
            },
            {
              question: `For $x^2 + y^2 = 25$, the second derivative simplifies to $\\dfrac{d^2y}{dx^2} = -\\dfrac{25}{y^3}$ because:`,
              options: [
                `we used $x^2 + y^2 = 25$ to replace $x^2 + y^2$`,
                `we divided by $25$`,
                `the first derivative was zero`,
                `$y = 25$ on the circle`,
              ],
              correctAnswer: 0,
              explanation: `After combining terms we had $-\\frac{x^2+y^2}{y^3}$, and the original equation lets us replace $x^2+y^2$ with $25$.`,
            },
          ],
        },
      },
      {
        id: 'hod6-nth',
        type: 'text' as const,
        content: `## Finding a Formula for the $n$th Derivative

Sometimes the higher derivatives follow a clean rule, letting you skip ahead.

### Exponential: $f(x) = e^{3x}$

Each derivative pulls out another $3$:
$$f^{(n)}(x) = 3^n e^{3x}.$$

### Sine via the cycle: $f(x) = \\sin x$

The derivatives repeat every $4$ steps, so use $n \\bmod 4$:

| $n \\bmod 4$ | $f^{(n)}(x)$ |
|-------------|--------------|
| $0$ | $\\sin x$ |
| $1$ | $\\cos x$ |
| $2$ | $-\\sin x$ |
| $3$ | $-\\cos x$ |

**Example:** Find the $50$th derivative of $\\sin x$. Since $50 \\div 4$ leaves remainder $2$ (because $50 = 4\\cdot 12 + 2$), $f^{(50)}(x) = -\\sin x$.

> 💡 **Strategy:** Compute the first three or four derivatives, look for the repeating structure (a cycle, a power of a constant, or a factorial-with-alternating-sign), then express the $n$th term in one formula.`,
      },
      {
        id: 'hod6-nthdrill',
        type: 'input-boxes' as const,
        content: `**Jump to the $n$th Derivative** 🧮

**1)** For $f(x) = e^{3x}$, $f^{(n)}(x) = 3^n e^{3x}$. Find the coefficient when $n = 4$ (i.e. the value of $3^4$).
**2)** Find the $51$st derivative of $\\sin x$ as one of: type **cos** if it equals $\\cos x$, or **-cos** if it equals $-\\cos x$.  *(Hint: $51 \\bmod 4 = 3$.)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['81', '-cos'],
          hint1: `$3^4 = 81$, so $f^{(4)}(x) = 81e^{3x}$.`,
          hint2: `$51 = 4\\cdot 12 + 3$, so the remainder is $3$.`,
          hint3: `Remainder $3$ in the sine cycle corresponds to $-\\cos x$.`,
          explanation: `1) $3^4 = 81$.  2) $51 \\bmod 4 = 3$, and remainder $3$ gives $-\\cos x$, so the answer is $-\\cos$.`,
        },
      },
      {
        id: 'hod6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Pattern** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The $n$th derivative of $e^{kx}$ is …', options: ['$k^n e^{kx}$', '$n\\,e^{kx}$', '$k\\,e^{kx}$', '$e^{nkx}$'] },
            { label: '$\\dfrac{d^4}{dx^4}\\,(\\cos x) =$', options: ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'] },
            { label: 'For $x^5$, the $5$th derivative $\\dfrac{d^5}{dx^5}x^5 =$', options: ['$120$', '$60$', '$0$', '$24x$'] },
          ],
          correctAnswers: ['$k^n e^{kx}$', '$\\cos x$', '$120$'],
          hint1: `Each derivative of $e^{kx}$ pulls out one factor of $k$, so after $n$ steps you have $k^n$.`,
          hint2: `Cosine returns to itself after a full 4-step cycle.`,
          hint3: `$\\frac{d^5}{dx^5}x^5 = 5! = 120$ (a constant); the 6th derivative would be $0$.`,
          explanation: `$\\frac{d^n}{dx^n}e^{kx} = k^n e^{kx}$; $\\cos x$ completes its cycle at the 4th derivative; and $\\frac{d^5}{dx^5}x^5 = 5\\cdot4\\cdot3\\cdot2\\cdot1 = 120$.`,
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'higher-order-derivatives',
    sections: [
      {
        id: 'hod7-intro',
        type: 'text' as const,
        content: `# 🔁 Higher-Order Derivatives

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) compute second, third, and $n$th derivatives, (2) read all three notations, (3) interpret velocity/acceleration/jerk, (4) use the second derivative for concavity and extrema, and (5) handle implicit and patterned derivatives. Time to put it together.`,
      },
      {
        id: 'hod7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find $f''$, $f'''$, … | differentiate again, simplifying each step |
| Degree-$n$ polynomial | $f^{(n)}$ is constant, $f^{(n+1)} = 0$ |
| $e^{kx}$, $n$th derivative | $k^n e^{kx}$ |
| $\\sin x$ / $\\cos x$, $n$th | use a 4-step cycle ($n \\bmod 4$) |
| Acceleration | $a(t) = s''(t)$, the 2nd derivative of position |
| Speeding up | $v$ and $a$ have the **same** sign ($v\\cdot a > 0$) |
| Concave up / down | $f'' > 0$ / $f'' < 0$ |
| Inflection point | $f'' = 0$ **and** $f''$ changes sign |
| 2nd-derivative test | $f''(c)>0$ → min, $f''(c)<0$ → max, $=0$ → inconclusive |

> ⚠️ Two classic traps: **(a)** $f''=0$ does not guarantee an inflection point — the sign must flip; **(b)** negative acceleration does **not** automatically mean "slowing down" — compare it to the velocity's sign.`,
      },
      {
        id: 'hod7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: `For $f(x) = 4x^3 - 2x$, find $f''(x)$ at $x = 1$.`,
              options: ['$24$', '$22$', '$12$', '$10$'],
              correctAnswer: 0,
              explanation: `$f'(x) = 12x^2 - 2$, $f''(x) = 24x$. So $f''(1) = 24$.`,
            },
            {
              question: `A particle has position $s(t) = 2t^3 - t$. Its acceleration at $t = 1$ is:`,
              options: ['$12$', '$6$', '$5$', '$11$'],
              correctAnswer: 0,
              explanation: `$v(t) = 6t^2 - 1$, $a(t) = s''(t) = 12t$. So $a(1) = 12$.`,
            },
            {
              question: `Where is $f(x) = x^3 - 3x^2 + 1$ concave up?`,
              options: ['for $x > 1$', 'for $x < 1$', 'everywhere', 'nowhere'],
              correctAnswer: 0,
              explanation: `$f''(x) = 6x - 6 > 0$ when $x > 1$. So the graph is concave up for $x > 1$ (and concave down for $x < 1$).`,
            },
          ],
        },
      },
      {
        id: 'hod7-mixeddrill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** For $g(x) = e^{-2x}$, the second derivative is $g''(x) = 4e^{-2x}$. Find the coefficient (the number in front of $e^{-2x}$).
**2)** For $f(x) = x^4 - 3x^3 + 2x - 7$, find the constant value of $f^{(4)}(x)$.
**3)** A particle's acceleration is $a(t) = 6t - 12$. Find the time $t$ when $a(t) = 0$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '24', '2'],
          hint1: `$g' = -2e^{-2x}$, $g'' = 4e^{-2x}$ (each derivative multiplies by $-2$, and $(-2)^2 = 4$).`,
          hint2: `$f^{(4)}(x) = 24$ (a degree-4 polynomial has a constant 4th derivative).`,
          hint3: `Solve $6t - 12 = 0 \\Rightarrow t = 2$.`,
          explanation: `1) coefficient $= 4$.  2) $f^{(4)}(x) = 24$.  3) $a(t) = 0$ at $t = 2$.`,
        },
      },
      {
        id: 'hod7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: `What is $\\dfrac{d^2}{dx^2}\\,(\\cos x)$ (the second derivative of $\\cos x$)?`,
              options: ['$-\\cos x$', '$\\cos x$', '$-\\sin x$', '$\\sin x$'],
              correctAnswer: 0,
              explanation: `$\\cos x \\to -\\sin x \\to -\\cos x$. The second derivative of cosine is $-\\cos x$.`,
            },
            {
              question: `At a critical point $c$ where $f'(c) = 0$, you find $f''(c) = -4$. The point $c$ is a:`,
              options: ['local maximum', 'local minimum', 'inflection point', 'point where the test fails'],
              correctAnswer: 0,
              explanation: `$f''(c) < 0$ means concave down at $c$, so by the second-derivative test it is a local maximum.`,
            },
            {
              question: `The $50$th derivative of $\\sin x$ is:`,
              options: ['$-\\sin x$', '$\\sin x$', '$\\cos x$', '$-\\cos x$'],
              correctAnswer: 0,
              explanation: `Sine cycles every 4 derivatives. $50 = 4\\cdot 12 + 2$, so the remainder is $2$, which corresponds to $-\\sin x$.`,
            },
          ],
        },
      },
    ],
  },
]
