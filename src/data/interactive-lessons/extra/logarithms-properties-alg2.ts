import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Logarithms and Their Properties (Algebra 2).
 * Registry key / DB Topic.slug: 'logarithms-properties-alg2'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'logarithms-properties-alg2',
    sections: [
      {
        id: 'log1-intro',
        type: 'text' as const,
        content: `# 📐 Logarithms and Their Properties

**Part 1 of 5 — What Is a Logarithm?**

---

### Topics in This Part

| Section |
|---------|
| Logarithms as "the exponent" |
| Switching between log and exponential form |
| Reading off simple log values |

> 🔑 **Key Concept:** A logarithm answers a single question — *"What exponent do I need?"* The expression $\\log_b x$ asks: *to what power must I raise the base $b$ to get $x$?*`,
      },
      {
        id: 'log1-definition',
        type: 'text' as const,
        content: `## The Definition

A logarithm is the **inverse** of an exponential. They say the exact same thing in two different forms:

$$\\log_b x = y \\quad\\Longleftrightarrow\\quad b^y = x$$

Read $\\log_b x$ as *"log base $b$ of $x$."* The answer ($y$) is **the exponent**.

### Examples

| Question in words | Log form | Exponential form |
|-------------------|----------|------------------|
| "2 to what power is 8?" | $\\log_2 8 = 3$ | $2^3 = 8$ |
| "10 to what power is 100?" | $\\log_{10} 100 = 2$ | $10^2 = 100$ |
| "5 to what power is 1?" | $\\log_5 1 = 0$ | $5^0 = 1$ |

> 🔑 **Key Idea:** The base of the log becomes the base of the power, and the value of the log **is the exponent**. If you can rewrite a log as an exponent, you can evaluate it.

> ⚠️ The base $b$ must be **positive and not equal to 1**, and you can only take the log of a **positive** number. There is no real value for $\\log_2(-4)$ or $\\log_2 0$.`,
      },
      {
        id: 'log1-form-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which exponential equation is the same as $\\log_3 81 = 4$?',
              options: ['$3^4 = 81$', '$4^3 = 81$', '$81^3 = 4$', '$3^{81} = 4$'],
              correctAnswer: 0,
              explanation: '$\\log_b x = y$ means $b^y = x$. Here $b=3$, $x=81$, $y=4$, so $3^4 = 81$. ✓',
            },
            {
              question: 'Rewrite $2^5 = 32$ in logarithmic form.',
              options: ['$\\log_2 32 = 5$', '$\\log_5 32 = 2$', '$\\log_{32} 2 = 5$', '$\\log_2 5 = 32$'],
              correctAnswer: 0,
              explanation: 'The base of the power ($2$) is the base of the log; the exponent ($5$) is the value. $\\log_2 32 = 5$.',
            },
          ],
        },
      },
      {
        id: 'log1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Log** 🧮

Ask yourself: *"the base to what power gives the inside?"*

**1)** $\\log_2 16 = \\,?$
**2)** $\\log_5 125 = \\,?$
**3)** $\\log_{10} 1000 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '3'],
          hint1: '$2^? = 16$. Count: $2^4 = 16$.',
          hint2: '$5^? = 125$. Since $5^3 = 125$, the answer is $3$.',
          hint3: '$10^? = 1000$. Since $10^3 = 1000$, the answer is $3$.',
          explanation: '1) $2^4 = 16$, so $\\log_2 16 = 4$.  2) $5^3 = 125$, so $\\log_5 125 = 3$.  3) $10^3 = 1000$, so $\\log_{10}1000 = 3$.',
        },
      },
      {
        id: 'log1-special',
        type: 'text' as const,
        content: `## Two Values to Memorize

Every base gives the same answer to these two, so learn them once:

$$\\log_b 1 = 0 \\qquad\\text{(because } b^0 = 1\\text{)}$$

$$\\log_b b = 1 \\qquad\\text{(because } b^1 = b\\text{)}$$

For example, $\\log_7 1 = 0$ and $\\log_7 7 = 1$ — no matter the base.

> 💡 A handy intuition: $\\log_b x$ tells you roughly *how many times you multiply $b$ by itself* to reach $x$. You now have the one idea the whole topic rests on: **a log is an exponent.** In Part 2 we use the two famous bases that appear everywhere.`,
      },
      {
        id: 'log1-special-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Value** 🔽

Use $\\log_b 1 = 0$, $\\log_b b = 1$, and the definition.`,
        exercise: {
          dropdowns: [
            { label: '$\\log_9 1 =$', options: ['$0$', '$1$', '$9$', '$3$'] },
            { label: '$\\log_4 4 =$', options: ['$1$', '$0$', '$4$', '$2$'] },
            { label: '$\\log_3 27 =$', options: ['$3$', '$9$', '$2$', '$27$'] },
          ],
          correctAnswers: ['$0$', '$1$', '$3$'],
          hint1: 'The log of $1$ in any base is $0$ since $b^0 = 1$.',
          hint2: 'The log of the base itself is $1$ since $b^1 = b$.',
          hint3: '$3^3 = 27$, so $\\log_3 27 = 3$.',
          explanation: '$\\log_9 1 = 0$, $\\log_4 4 = 1$, and $\\log_3 27 = 3$ since $3^3 = 27$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'logarithms-properties-alg2',
    sections: [
      {
        id: 'log2-intro',
        type: 'text' as const,
        content: `# 📐 Logarithms and Their Properties

**Part 2 of 5 — Common Logs, Natural Logs & Inverses**

---

> 🔑 **The Idea:** Two bases are so common they get their own shorthand. And because logs and exponentials are inverses, they **undo** each other — a fact that powers nearly every log problem you'll solve.`,
      },
      {
        id: 'log2-common-natural',
        type: 'text' as const,
        content: `## The Two Famous Bases

| Name | Written | Means | Why it matters |
|------|---------|-------|----------------|
| **Common log** | $\\log x$ | $\\log_{10} x$ | base 10, matches our number system |
| **Natural log** | $\\ln x$ | $\\log_e x$ | base $e \\approx 2.718$, the growth constant |

When you see $\\log x$ with **no base written**, it means base **10**. When you see $\\ln x$, the base is the special number $e \\approx 2.71828$.

### Examples

$$\\log 1000 = \\log_{10} 1000 = 3 \\qquad (10^3 = 1000)$$

$$\\ln e = \\log_e e = 1 \\qquad (e^1 = e)$$

$$\\ln 1 = 0 \\qquad (e^0 = 1)$$

> 💡 Your calculator has two log buttons: **LOG** (base 10) and **LN** (base $e$). Both follow every rule in this lesson.`,
      },
      {
        id: 'log2-notation-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the base of $\\log x$ when no base is written?',
              options: ['$10$', '$e$', '$2$', '$1$'],
              correctAnswer: 0,
              explanation: 'A plain $\\log$ with no subscript is the common log, base $10$. (Natural log is written $\\ln$.)',
            },
            {
              question: '$\\ln e^1$ equals:',
              options: ['$1$', '$e$', '$0$', '$2.718$'],
              correctAnswer: 0,
              explanation: '$\\ln e = \\log_e e = 1$, because $e^1 = e$.',
            },
          ],
        },
      },
      {
        id: 'log2-inverse',
        type: 'text' as const,
        content: `## Logs and Exponentials Undo Each Other

Because $\\log_b x$ and $b^x$ are inverse functions, applying one then the other returns you to the start. These are the **inverse (cancellation) properties**:

$$b^{\\,\\log_b x} = x \\qquad\\text{and}\\qquad \\log_b\\!\\left(b^{\\,x}\\right) = x$$

### Examples

| Expression | Simplifies to | Why |
|------------|---------------|-----|
| $\\log_2\\!\\left(2^7\\right)$ | $7$ | log base 2 undoes "2 to the" |
| $10^{\\,\\log 4}$ | $4$ | base-10 power undoes common log |
| $\\ln\\!\\left(e^{5}\\right)$ | $5$ | $\\ln$ undoes $e$ to the power |
| $e^{\\,\\ln 9}$ | $9$ | $e$ to the power undoes $\\ln$ |

> ⚠️ The base must **match**. $\\log_2(3^5)$ does **not** simplify to $5$, because the log base ($2$) and the power base ($3$) differ.`,
      },
      {
        id: 'log2-inverse-drill',
        type: 'input-boxes' as const,
        content: `**Cancel Them Out** 🧮

Use $b^{\\log_b x} = x$ and $\\log_b(b^x) = x$ — but only when the bases match.

**1)** $\\log_3\\!\\left(3^8\\right) = \\,?$
**2)** $\\ln\\!\\left(e^{6}\\right) = \\,?$
**3)** $10^{\\,\\log 12} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '12'],
          hint1: 'Log base 3 undoes "3 to the power," leaving the exponent $8$.',
          hint2: '$\\ln$ is base $e$, and it undoes $e^6$, leaving $6$.',
          hint3: 'A base-10 power undoes a base-10 log, leaving the inside, $12$.',
          explanation: '1) $\\log_3(3^8) = 8$.  2) $\\ln(e^6) = 6$.  3) $10^{\\log 12} = 12$. In each case matching bases cancel.',
        },
      },
      {
        id: 'log2-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Will They Cancel?** 🔽

Pick the simplified value. Watch whether the bases match.`,
        exercise: {
          dropdowns: [
            { label: '$\\log_5\\!\\left(5^4\\right) =$', options: ['$4$', '$5$', '$20$', '$1$'] },
            { label: '$e^{\\,\\ln 7} =$', options: ['$7$', '$e$', '$\\ln 7$', '$1$'] },
            { label: '$\\log 10^9 =$', options: ['$9$', '$10$', '$90$', '$1$'] },
          ],
          correctAnswers: ['$4$', '$7$', '$9$'],
          hint1: 'Log base 5 undoes a base-5 power: the answer is the exponent $4$.',
          hint2: '$e$ to a power undoes $\\ln$ (base $e$): you get back the inside, $7$.',
          hint3: '$\\log$ is base 10, undoing $10^9$ to give the exponent $9$.',
          explanation: 'All three have matching bases, so they cancel: $\\log_5(5^4)=4$, $e^{\\ln 7}=7$, $\\log 10^9 = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'logarithms-properties-alg2',
    sections: [
      {
        id: 'log3-intro',
        type: 'text' as const,
        content: `# 📐 Logarithms and Their Properties

**Part 3 of 5 — The Three Big Properties**

---

> 🔑 **The Engine of the Topic:** Three rules let you break apart, combine, and move logs. They come straight from the laws of exponents, because a log *is* an exponent.`,
      },
      {
        id: 'log3-rules',
        type: 'text' as const,
        content: `## Product, Quotient, and Power Rules

For any valid base $b$ and positive numbers $M, N$:

| Rule | Formula | In words |
|------|---------|----------|
| **Product** | $\\log_b(MN) = \\log_b M + \\log_b N$ | multiply inside → **add** logs |
| **Quotient** | $\\log_b\\!\\dfrac{M}{N} = \\log_b M - \\log_b N$ | divide inside → **subtract** logs |
| **Power** | $\\log_b\\!\\left(M^{\\,p}\\right) = p\\,\\log_b M$ | exponent inside → **multiply** out front |

### Where they come from

Exponents *add* when you multiply: $b^x \\cdot b^y = b^{x+y}$. Since logs are exponents, a product inside a log becomes a **sum** of logs. The other two rules follow the same way.

> 🔑 **Key Idea:** These rules turn multiplication into addition, division into subtraction, and powers into multiplication — they make hard logs simple.`,
      },
      {
        id: 'log3-expand',
        type: 'text' as const,
        content: `## Worked Example: Expanding

"Expand" means write a single log as a sum/difference of simpler logs.

### Expand $\\log_b\\!\\dfrac{x^3 y}{z}$

$$\\log_b\\frac{x^3 y}{z} = \\log_b(x^3 y) - \\log_b z \\quad\\text{(quotient rule)}$$

$$= \\log_b x^3 + \\log_b y - \\log_b z \\quad\\text{(product rule)}$$

$$= 3\\log_b x + \\log_b y - \\log_b z \\quad\\text{(power rule)}$$

> ⚠️ **Watch the signs.** Everything in the *denominator* gets **subtracted**. A common error is writing $+\\log_b z$ instead of $-\\log_b z$.`,
      },
      {
        id: 'log3-expand-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $\\log_b(x^2 y)$.',
              options: ['$2\\log_b x + \\log_b y$', '$2\\log_b x \\cdot \\log_b y$', '$\\log_b x^2 - \\log_b y$', '$2(\\log_b x + \\log_b y)$'],
              correctAnswer: 0,
              explanation: 'Product rule splits it: $\\log_b x^2 + \\log_b y$. Then the power rule gives $2\\log_b x + \\log_b y$.',
            },
            {
              question: 'Which is the correct expansion of $\\log_b\\dfrac{m}{n^4}$?',
              options: ['$\\log_b m - 4\\log_b n$', '$\\log_b m + 4\\log_b n$', '$4(\\log_b m - \\log_b n)$', '$\\dfrac{\\log_b m}{4\\log_b n}$'],
              correctAnswer: 0,
              explanation: 'Quotient rule: $\\log_b m - \\log_b n^4$. Power rule on the second term: $\\log_b m - 4\\log_b n$.',
            },
          ],
        },
      },
      {
        id: 'log3-power-drill',
        type: 'input-boxes' as const,
        content: `**Apply One Rule** 🧮

Use the property and a known value. Recall $\\log_2 8 = 3$ and $\\log_5 25 = 2$.

**1)** $\\log_2\\!\\left(8^4\\right) = 4\\cdot\\log_2 8 = \\,?$
**2)** $\\log_5\\!\\left(25^3\\right) = 3\\cdot\\log_5 25 = \\,?$
**3)** If $\\log_b 6 = \\log_b 2 + \\log_b 3$ and $\\log_b 2 = 0.43$, $\\log_b 3 = 0.68$, then $\\log_b 6 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '6', '1.11'],
          hint1: 'Power rule: $4 \\cdot \\log_2 8 = 4 \\cdot 3$.',
          hint2: 'Power rule: $3 \\cdot \\log_5 25 = 3 \\cdot 2$.',
          hint3: 'Product rule: $\\log_b 6 = \\log_b 2 + \\log_b 3 = 0.43 + 0.68$.',
          explanation: '1) $4 \\cdot 3 = 12$.  2) $3 \\cdot 2 = 6$.  3) $0.43 + 0.68 = 1.11$.',
        },
      },
      {
        id: 'log3-condense',
        type: 'text' as const,
        content: `## Worked Example: Condensing

"Condense" runs the rules **backward** — combine several logs into one.

### Condense $3\\log_b x + \\log_b y - 2\\log_b z$

First, use the power rule to move coefficients up as exponents:

$$\\log_b x^3 + \\log_b y - \\log_b z^2$$

Then product rule joins the sums, quotient rule handles the subtraction:

$$\\log_b\\frac{x^3 y}{z^2}$$

> 💡 **Strategy:** When condensing, deal with coefficients **first** (power rule), then combine. Added terms go on top; subtracted terms go on the bottom.`,
      },
      {
        id: 'log3-condense-dropdown',
        type: 'dropdown-select' as const,
        content: `**Condense Step by Step** 🔽

Combine $\\log_b 5 + 2\\log_b x - \\log_b y$ into a single log.`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite $2\\log_b x$ with the power rule:', options: ['$\\log_b x^2$', '$\\log_b 2x$', '$2 + \\log_b x$', '$\\log_b\\sqrt{x}$'] },
            { label: 'Combine the added terms:', options: ['$\\log_b(5x^2)$', '$\\log_b(5 + x^2)$', '$\\log_b(10x)$', '$\\log_b 5 \\cdot \\log_b x^2$'] },
            { label: 'Apply the subtracted $\\log_b y$:', options: ['$\\log_b\\dfrac{5x^2}{y}$', '$\\log_b(5x^2 - y)$', '$\\log_b\\dfrac{y}{5x^2}$', '$\\log_b(5x^2 y)$'] },
          ],
          correctAnswers: ['$\\log_b x^2$', '$\\log_b(5x^2)$', '$\\log_b\\dfrac{5x^2}{y}$'],
          hint1: 'A coefficient becomes an exponent: $2\\log_b x = \\log_b x^2$.',
          hint2: 'Added logs multiply inside: $\\log_b 5 + \\log_b x^2 = \\log_b(5x^2)$.',
          hint3: 'A subtracted log lands in the denominator: $\\log_b(5x^2) - \\log_b y = \\log_b\\dfrac{5x^2}{y}$.',
          explanation: 'Power → product → quotient: $\\log_b 5 + 2\\log_b x - \\log_b y = \\log_b\\dfrac{5x^2}{y}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'logarithms-properties-alg2',
    sections: [
      {
        id: 'log4-intro',
        type: 'text' as const,
        content: `# 📐 Logarithms and Their Properties

**Part 4 of 5 — Change of Base & Solving Equations**

---

> 🔑 **Big Payoff:** The change-of-base formula lets your calculator evaluate *any* log, and the properties let you **solve** equations where the unknown is trapped in an exponent.`,
      },
      {
        id: 'log4-change-base',
        type: 'text' as const,
        content: `## The Change-of-Base Formula

Most calculators only do base 10 ($\\log$) and base $e$ ($\\ln$). To evaluate any other base, rewrite it:

$$\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}$$

You can use **either** base on the right (10 or $e$) — the ratio comes out the same.

### Example: $\\log_2 50$

$$\\log_2 50 = \\frac{\\log 50}{\\log 2} = \\frac{1.699}{0.301} \\approx 5.644$$

**Check:** $2^5 = 32$ and $2^6 = 64$, so $\\log_2 50$ should fall between $5$ and $6$. ✓

> 💡 The same numerator base goes on top and the same on bottom — never mix $\\log$ on top with $\\ln$ on bottom.`,
      },
      {
        id: 'log4-change-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression correctly evaluates $\\log_7 20$ on a calculator?',
              options: ['$\\dfrac{\\ln 20}{\\ln 7}$', '$\\dfrac{\\ln 7}{\\ln 20}$', '$\\ln 20 - \\ln 7$', '$\\ln(20)\\cdot\\ln(7)$'],
              correctAnswer: 0,
              explanation: 'Change of base: $\\log_b x = \\dfrac{\\ln x}{\\ln b}$. Here $x = 20$ (top), $b = 7$ (bottom).',
            },
            {
              question: 'Without a calculator, $\\log_2 50$ is between which whole numbers?',
              options: ['$5$ and $6$', '$4$ and $5$', '$6$ and $7$', '$1$ and $2$'],
              correctAnswer: 0,
              explanation: '$2^5 = 32 < 50 < 64 = 2^6$, so $\\log_2 50$ lies between $5$ and $6$.',
            },
          ],
        },
      },
      {
        id: 'log4-solve',
        type: 'text' as const,
        content: `## Solving Exponential Equations

When the variable is in the exponent, take the log of both sides, then use the **power rule** to bring it down.

### Example: $3^x = 20$

$$\\log 3^x = \\log 20 \\;\\Rightarrow\\; x\\log 3 = \\log 20$$

$$x = \\frac{\\log 20}{\\log 3} = \\frac{1.301}{0.477} \\approx 2.727$$

**Check:** $3^{2.727}\\approx 20$ ✓ (and it's sensibly between $3^2=9$ and $3^3=27$).

### Solving Logarithmic Equations: $\\log_2(x) = 5$

Rewrite in exponential form: $x = 2^5 = 32$.

> ⚠️ Always check log-equation answers in the original equation — the inside of a log must stay **positive**, so reject any solution that makes an argument $\\le 0$.`,
      },
      {
        id: 'log4-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

**1)** $\\log_4 x = 3 \\;\\Rightarrow\\; x = \\,?$  *(rewrite as a power)*
**2)** $\\log_3(x) = 0 \\;\\Rightarrow\\; x = \\,?$
**3)** $10^x = 1000 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['64', '1', '3'],
          hint1: '$\\log_4 x = 3$ means $x = 4^3$.',
          hint2: 'Anything to the power $0$ is $1$, so $x = 3^0 = 1$.',
          hint3: 'Take $\\log_{10}$ of both sides, or note $10^3 = 1000$.',
          explanation: '1) $x = 4^3 = 64$.  2) $x = 3^0 = 1$.  3) $10^3 = 1000$, so $x = 3$.',
        },
      },
      {
        id: 'log4-solve-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $5^x = 40$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, take the log of both sides:', options: ['$\\log 5^x = \\log 40$', '$5^x = \\log 40$', '$x = \\log 40$', '$\\log 5 = x\\log 40$'] },
            { label: 'Use the power rule on the left:', options: ['$x\\log 5 = \\log 40$', '$5\\log x = \\log 40$', '$\\log 5^x = x + \\log$', '$x = 5\\log 40$'] },
            { label: 'Solve for $x$:', options: ['$x = \\dfrac{\\log 40}{\\log 5}$', '$x = \\log 40 - \\log 5$', '$x = \\log 40 \\cdot \\log 5$', '$x = \\dfrac{\\log 5}{\\log 40}$'] },
          ],
          correctAnswers: ['$\\log 5^x = \\log 40$', '$x\\log 5 = \\log 40$', '$x = \\dfrac{\\log 40}{\\log 5}$'],
          hint1: 'Apply $\\log$ to both sides to start pulling the exponent down.',
          hint2: 'The power rule moves the exponent $x$ out front: $\\log 5^x = x\\log 5$.',
          hint3: 'Divide both sides by $\\log 5$ to isolate $x$.',
          explanation: '$\\log 5^x = \\log 40 \\Rightarrow x\\log 5 = \\log 40 \\Rightarrow x = \\dfrac{\\log 40}{\\log 5} \\approx 2.29$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'logarithms-properties-alg2',
    sections: [
      {
        id: 'log5-intro',
        type: 'text' as const,
        content: `# 📐 Logarithms and Their Properties

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read a log as an exponent, (2) use the common/natural logs and inverse properties, (3) expand and condense with the three rules, and (4) change base and solve equations. Let's put it together.`,
      },
      {
        id: 'log5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Evaluate $\\log_b x$ | ask "$b$ to what power is $x$?" |
| Special values | $\\log_b 1 = 0$, $\\;\\log_b b = 1$ |
| Cancel inverses | $b^{\\log_b x} = x$, $\\;\\log_b(b^x) = x$ |
| Product / Quotient | $\\log_b MN = \\log_b M + \\log_b N$; $\\;\\log_b\\frac{M}{N} = \\log_b M - \\log_b N$ |
| Power | $\\log_b M^p = p\\log_b M$ |
| Change of base | $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ |

> ⚠️ Remember: there is **no rule** that simplifies $\\log_b(M+N)$ — the product rule applies to multiplication *inside*, never to a sum. $\\log_b(M+N) \\ne \\log_b M + \\log_b N$.`,
      },
      {
        id: 'log5-trap-mc',
        type: 'multiple-choice' as const,
        content: `**Spot the Mistake** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement is FALSE?',
              options: ['$\\log_b(M + N) = \\log_b M + \\log_b N$', '$\\log_b(MN) = \\log_b M + \\log_b N$', '$\\log_b M^p = p\\log_b M$', '$\\log_b\\dfrac{M}{N} = \\log_b M - \\log_b N$'],
              correctAnswer: 0,
              explanation: 'The product rule applies to a product *inside* the log, not a sum. There is no rule for $\\log_b(M+N)$, so the first statement is false.',
            },
            {
              question: 'Condense $2\\log x - \\log y$ into a single logarithm.',
              options: ['$\\log\\dfrac{x^2}{y}$', '$\\log\\dfrac{2x}{y}$', '$\\log(x^2 - y)$', '$\\dfrac{2\\log x}{\\log y}$'],
              correctAnswer: 0,
              explanation: 'Power rule: $\\log x^2 - \\log y$. Quotient rule (subtraction → division): $\\log\\dfrac{x^2}{y}$.',
            },
          ],
        },
      },
      {
        id: 'log5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** $\\log_2 64 = \\,?$
**2)** $\\ln\\!\\left(e^{10}\\right) = \\,?$
**3)** Solve $\\log_5 x = 2 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '10', '25'],
          hint1: '$2^? = 64$. Count powers of 2: $2^6 = 64$.',
          hint2: '$\\ln$ undoes $e$ to the power, leaving the exponent.',
          hint3: '$\\log_5 x = 2$ means $x = 5^2$.',
          explanation: '1) $2^6 = 64$, so $\\log_2 64 = 6$.  2) $\\ln(e^{10}) = 10$.  3) $x = 5^2 = 25$.',
        },
      },
      {
        id: 'log5-condense-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Single Log** 🔽

Condense $\\log_b a + 3\\log_b c - \\log_b d$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite $3\\log_b c$ using the power rule:', options: ['$\\log_b c^3$', '$\\log_b 3c$', '$3 + \\log_b c$', '$\\log_b c^{1/3}$'] },
            { label: 'Combine the two added terms:', options: ['$\\log_b(a c^3)$', '$\\log_b(a + c^3)$', '$\\log_b(3ac)$', '$\\log_b a \\cdot \\log_b c^3$'] },
            { label: 'Apply the subtracted term:', options: ['$\\log_b\\dfrac{a c^3}{d}$', '$\\log_b(a c^3 - d)$', '$\\log_b\\dfrac{d}{a c^3}$', '$\\log_b(a c^3 d)$'] },
          ],
          correctAnswers: ['$\\log_b c^3$', '$\\log_b(a c^3)$', '$\\log_b\\dfrac{a c^3}{d}$'],
          hint1: 'The power rule moves a coefficient up as an exponent: $3\\log_b c = \\log_b c^3$.',
          hint2: 'Added logs multiply inside: $\\log_b a + \\log_b c^3 = \\log_b(a c^3)$.',
          hint3: 'A subtracted log goes in the denominator: $\\log_b(ac^3) - \\log_b d = \\log_b\\dfrac{ac^3}{d}$.',
          explanation: 'Power → product → quotient: $\\log_b a + 3\\log_b c - \\log_b d = \\log_b\\dfrac{a c^3}{d}$.',
        },
      },
      {
        id: 'log5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\log_3 81$.',
              options: ['$4$', '$3$', '$27$', '$9$'],
              correctAnswer: 0,
              explanation: '$3^4 = 81$, so $\\log_3 81 = 4$.',
            },
            {
              question: 'Expand $\\log_b\\dfrac{x^5}{y}$ completely.',
              options: ['$5\\log_b x - \\log_b y$', '$5\\log_b x + \\log_b y$', '$\\dfrac{5\\log_b x}{\\log_b y}$', '$5(\\log_b x - \\log_b y)$'],
              correctAnswer: 0,
              explanation: 'Quotient rule: $\\log_b x^5 - \\log_b y$. Power rule on the first term: $5\\log_b x - \\log_b y$.',
            },
            {
              question: 'Solve $2^x = 16$ for $x$.',
              options: ['$x = 4$', '$x = 8$', '$x = 2$', '$x = 16$'],
              correctAnswer: 0,
              explanation: '$2^4 = 16$, so $x = \\log_2 16 = 4$.',
            },
          ],
        },
      },
    ],
  },
]
