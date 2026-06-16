import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rational and Irrational Numbers (Grade 8 Math, CCSS 8.NS.A.1–2).
 * Registry key / DB Topic.slug: 'rational-irrational-numbers-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * defining rationals (fractions, terminating & repeating decimals), defining
 * irrationals (non-terminating non-repeating, roots of non-perfect-squares, π),
 * converting repeating decimals to fractions, and estimating/ordering irrationals
 * on a number line. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-irrational-numbers-grade8',
    sections: [
      {
        id: 'rin1-intro',
        type: 'text' as const,
        content: `# 🔢 Rational and Irrational Numbers

**Part 1 of 5 — What Makes a Number Rational**

---

### Topics in This Part

| Section |
|---------|
| The Definition of a Rational Number |
| Integers and Fractions Are Rational |
| Terminating and Repeating Decimals |

> 🔑 **Key Concept:** A **rational number** is any number you can write as a fraction $\\dfrac{a}{b}$ where $a$ and $b$ are integers and $b \\ne 0$. By the end of this part you'll be able to spot one instantly.`,
      },
      {
        id: 'rin1-define',
        type: 'text' as const,
        content: `## The Definition of a Rational Number

A number is **rational** if it can be written as a **ratio of two integers**:

$$\\text{rational} = \\frac{a}{b}, \\quad a, b \\text{ are integers}, \\quad b \\ne 0$$

The word *ratio*nal literally contains the word **ratio** — a fraction. That's the whole idea.

### What counts as rational?

| Number | Written as a fraction | Rational? |
|--------|-----------------------|-----------|
| $7$ | $\\dfrac{7}{1}$ | ✓ |
| $-4$ | $\\dfrac{-4}{1}$ | ✓ |
| $\\dfrac{3}{5}$ | $\\dfrac{3}{5}$ | ✓ |
| $0.25$ | $\\dfrac{1}{4}$ | ✓ |
| $0$ | $\\dfrac{0}{1}$ | ✓ |

> 🔑 **Key Idea:** Every integer is rational, because any whole number $n$ equals $\\dfrac{n}{1}$. The denominator can never be $0$, though — division by zero is undefined.`,
      },
      {
        id: 'rin1-spot',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly defines a rational number?',
              options: [
                'A number that can be written as $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\ne 0$',
                'Any number with a decimal point',
                'A number that is always positive',
                'Only numbers that are whole',
              ],
              correctAnswer: 0,
              explanation: 'A rational number is exactly a ratio of two integers $\\frac{a}{b}$ with $b \\ne 0$. Sign and decimals are not part of the definition.',
            },
            {
              question: 'Why is the integer $-9$ a rational number?',
              options: [
                'Because it can be written as $\\frac{-9}{1}$, a ratio of two integers',
                'Because it is negative',
                'Because it has no decimal point',
                'Integers are actually not rational',
              ],
              correctAnswer: 0,
              explanation: 'Every integer $n$ equals $\\frac{n}{1}$, so $-9 = \\frac{-9}{1}$ — a ratio of integers with a nonzero denominator. That makes it rational.',
            },
          ],
        },
      },
      {
        id: 'rin1-decimals',
        type: 'text' as const,
        content: `## Decimals That Are Rational

A decimal is rational when it either **stops** or **repeats forever in a pattern**.

**Terminating decimals** end after a finite number of digits:
$$0.5 = \\frac{1}{2}, \\qquad 0.75 = \\frac{3}{4}, \\qquad 0.125 = \\frac{1}{8}$$

**Repeating decimals** have a block of digits that repeats without end. We draw a bar over the repeating block:
$$0.\\overline{3} = 0.3333\\ldots = \\frac{1}{3}, \\qquad 0.\\overline{6} = 0.6666\\ldots = \\frac{2}{3}$$

| Decimal | Type | Fraction |
|---------|------|----------|
| $0.4$ | terminating | $\\dfrac{2}{5}$ |
| $0.\\overline{1}$ | repeating | $\\dfrac{1}{9}$ |
| $0.\\overline{7}$ | repeating | $\\dfrac{7}{9}$ |
| $0.\\overline{8}$ | repeating | $\\dfrac{8}{9}$ |

> 💡 **Both** terminating and repeating decimals are rational. We'll learn to turn a repeating decimal into a fraction in Part 3.`,
      },
      {
        id: 'rin1-classify-drill',
        type: 'dropdown-select' as const,
        content: `**Classify Each Number** 🔽

Decide whether each value is rational. (Every number here *is* rational — choose the reason.)`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{2}{7}$ is rational because…', options: ['it is already a ratio of two integers', 'it is a whole number', 'it never repeats'] },
            { label: '$0.25$ is rational because…', options: ['it is a terminating decimal equal to $\\frac{1}{4}$', 'it is greater than $0$', 'it cannot be a fraction'] },
            { label: '$0.\\overline{3}$ is rational because…', options: ['it is a repeating decimal equal to $\\frac{1}{3}$', 'it stops after one digit', 'it equals $\\pi$'] },
          ],
          correctAnswers: [
            'it is already a ratio of two integers',
            'it is a terminating decimal equal to $\\frac{1}{4}$',
            'it is a repeating decimal equal to $\\frac{1}{3}$',
          ],
          hint1: 'A fraction of two integers is rational by definition.',
          hint2: 'Terminating decimals always convert to a fraction — $0.25 = \\frac{25}{100} = \\frac{1}{4}$.',
          hint3: 'Repeating decimals are rational too: $0.\\overline{3} = \\frac{1}{3}$.',
          explanation: 'Fractions, terminating decimals, and repeating decimals are all rational — each can be written as a ratio of integers.',
        },
      },
      {
        id: 'rin1-fraction-drill',
        type: 'input-boxes' as const,
        content: `**Write It as a Fraction** 🧮

Every rational number is a ratio of integers. Write each as a fraction in **lowest terms**. (Type like \`3/4\`.)

**1)** $6 = \\,?$  *(use denominator $1$)*
**2)** $0.5 = \\,?$
**3)** $-2 = \\,?$  *(use denominator $1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6/1', '1/2', '-2/1'],
          hint1: 'Any integer $n$ equals $\\frac{n}{1}$, so $6 = \\frac{6}{1}$.',
          hint2: '$0.5$ means $\\frac{5}{10}$, which reduces to $\\frac{1}{2}$.',
          hint3: 'A negative integer is still over $1$: $-2 = \\frac{-2}{1}$.',
          explanation: '1) $6 = \\frac{6}{1}$.  2) $0.5 = \\frac{1}{2}$.  3) $-2 = \\frac{-2}{1}$. Each is a ratio of two integers, so each is rational.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-irrational-numbers-grade8',
    sections: [
      {
        id: 'rin2-intro',
        type: 'text' as const,
        content: `# 🔢 Rational and Irrational Numbers

**Part 2 of 5 — Irrational Numbers**

---

> 🔑 **The Idea:** An **irrational** number *cannot* be written as a fraction of integers. Its decimal goes on **forever with no repeating pattern**. The prefix *ir-* means "not," so *irrational* = "not a ratio."`,
      },
      {
        id: 'rin2-define',
        type: 'text' as const,
        content: `## What Makes a Number Irrational

A decimal is **irrational** when it is **non-terminating** (never ends) **and non-repeating** (never settles into a pattern).

### The three families you'll meet most

**1) The square root of a number that isn't a perfect square.**
$$\\sqrt{2} = 1.41421356\\ldots \\qquad \\sqrt{3} = 1.7320508\\ldots \\qquad \\sqrt{10} = 3.16227\\ldots$$

**2) The number $\\pi$** (ratio of a circle's circumference to its diameter):
$$\\pi = 3.14159265\\ldots$$

**3) Special constants** like $e = 2.71828\\ldots$ (you'll meet $e$ in later courses).

> ⚠️ **Careful:** $3.14$ and $\\dfrac{22}{7}$ are *rational approximations* of $\\pi$ — they are **not** equal to $\\pi$. The true value $\\pi$ never ends and never repeats, so $\\pi$ itself is irrational.`,
      },
      {
        id: 'rin2-roots',
        type: 'text' as const,
        content: `## Perfect Squares vs. the Rest

A **perfect square** is a number whose square root is a whole number. Its root is **rational**. The square root of any *non*-perfect-square is **irrational**.

| Number | Square root | Rational or irrational? |
|--------|-------------|--------------------------|
| $\\sqrt{16}$ | $4$ | rational (perfect square) |
| $\\sqrt{25}$ | $5$ | rational (perfect square) |
| $\\sqrt{2}$ | $1.4142\\ldots$ | irrational |
| $\\sqrt{7}$ | $2.6457\\ldots$ | irrational |
| $\\sqrt{50}$ | $7.071\\ldots$ | irrational |

It helps to know the perfect squares by heart:
$$1,\\; 4,\\; 9,\\; 16,\\; 25,\\; 36,\\; 49,\\; 64,\\; 81,\\; 100,\\; 121,\\; 144$$

> 🔑 **Quick test for $\\sqrt{n}$:** If $n$ is in the list above (a perfect square), $\\sqrt{n}$ is **rational**. Otherwise $\\sqrt{n}$ is **irrational**.`,
      },
      {
        id: 'rin2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is irrational?',
              options: ['$\\sqrt{2}$', '$\\sqrt{9}$', '$0.75$', '$\\frac{4}{5}$'],
              correctAnswer: 0,
              explanation: '$2$ is not a perfect square, so $\\sqrt{2} = 1.4142\\ldots$ never ends or repeats — irrational. $\\sqrt{9}=3$, $0.75$, and $\\frac{4}{5}$ are all rational.',
            },
            {
              question: 'What makes a decimal irrational?',
              options: [
                'It is non-terminating AND non-repeating',
                'It has more than two decimal places',
                'It repeats forever in a pattern',
                'It is negative',
              ],
              correctAnswer: 0,
              explanation: 'Irrational decimals never end and never fall into a repeating block. A decimal that *does* repeat (like $0.\\overline{3}$) is rational.',
            },
            {
              question: 'Why is $\\pi$ irrational rather than equal to $\\frac{22}{7}$?',
              options: [
                '$\\frac{22}{7}$ is only an approximation; $\\pi$ never ends or repeats',
                '$\\pi$ is exactly $3.14$',
                '$\\pi$ is a perfect square',
                '$\\frac{22}{7}$ equals $\\pi$ exactly',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{22}{7} \\approx 3.142857\\ldots$ is a handy rational estimate, but the true value of $\\pi = 3.14159\\ldots$ continues forever with no pattern, so $\\pi$ is irrational.',
            },
          ],
        },
      },
      {
        id: 'rin2-sort-drill',
        type: 'dropdown-select' as const,
        content: `**Rational or Irrational?** 🔽

Label each value.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{36}$', options: ['rational', 'irrational'] },
            { label: '$\\sqrt{5}$', options: ['rational', 'irrational'] },
            { label: '$\\pi$', options: ['rational', 'irrational'] },
            { label: '$0.\\overline{2}$', options: ['rational', 'irrational'] },
          ],
          correctAnswers: ['rational', 'irrational', 'irrational', 'rational'],
          hint1: '$36$ is a perfect square: $\\sqrt{36} = 6$.',
          hint2: '$5$ is not a perfect square, so $\\sqrt{5}$ is irrational. And $\\pi$ never ends or repeats.',
          hint3: 'A repeating decimal like $0.\\overline{2} = \\frac{2}{9}$ is rational.',
          explanation: '$\\sqrt{36}=6$ (rational); $\\sqrt{5}=2.236\\ldots$ (irrational); $\\pi=3.14159\\ldots$ (irrational); $0.\\overline{2}=\\frac{2}{9}$ (rational).',
        },
      },
      {
        id: 'rin2-perfsq-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Perfect Squares** 🧮

Each of these IS a perfect square, so its root is a whole number. Find each value.

**1)** $\\sqrt{49} = \\,?$
**2)** $\\sqrt{81} = \\,?$
**3)** $\\sqrt{144} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '9', '12'],
          hint1: 'Ask: what number times itself gives the value under the root?',
          hint2: '$7 \\times 7 = 49$ and $9 \\times 9 = 81$.',
          hint3: '$12 \\times 12 = 144$.',
          explanation: '$\\sqrt{49}=7$, $\\sqrt{81}=9$, $\\sqrt{144}=12$. All three are perfect squares, so all three roots are rational whole numbers.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-irrational-numbers-grade8',
    sections: [
      {
        id: 'rin3-intro',
        type: 'text' as const,
        content: `# 🔢 Rational and Irrational Numbers

**Part 3 of 5 — Turning Repeating Decimals into Fractions**

---

> 🔑 **Why this matters:** Every repeating decimal is rational, which means it *must* equal some fraction. This part shows the algebra trick that finds that fraction every time.`,
      },
      {
        id: 'rin3-method',
        type: 'text' as const,
        content: `## The "Let $x$ Equal It" Method

To convert a repeating decimal to a fraction:

1. **Let** $x$ equal the decimal.
2. **Multiply** by $10$, $100$, or $1000$ — enough to slide the repeating block left by one full block.
3. **Subtract** the original equation to cancel the repeating tail.
4. **Solve** for $x$ and simplify.

### Worked Example: $0.\\overline{7}$ (one repeating digit)

$$x = 0.7777\\ldots$$

Multiply by $10$ (one repeating digit → one zero):
$$10x = 7.7777\\ldots$$

Subtract the first equation from the second:
$$10x - x = 7.7777\\ldots - 0.7777\\ldots \\;\\Rightarrow\\; 9x = 7$$

$$x = \\frac{7}{9}$$

> ✅ **Check:** $7 \\div 9 = 0.7777\\ldots = 0.\\overline{7}$ ✓`,
      },
      {
        id: 'rin3-worked2',
        type: 'text' as const,
        content: `### Worked Example: $0.\\overline{36}$ (two repeating digits)

$$x = 0.363636\\ldots$$

There are **two** repeating digits, so multiply by $100$:
$$100x = 36.363636\\ldots$$

Subtract:
$$100x - x = 36.363636\\ldots - 0.363636\\ldots \\;\\Rightarrow\\; 99x = 36$$

$$x = \\frac{36}{99} = \\frac{4}{11}$$

> 💡 **Shortcut pattern:** For a decimal made of *only* a repeating block, the fraction is (the block) over as many $9$s as there are repeating digits.
> $0.\\overline{7} = \\dfrac{7}{9}$, $\\;0.\\overline{36} = \\dfrac{36}{99} = \\dfrac{4}{11}$, $\\;0.\\overline{452} = \\dfrac{452}{999}$.`,
      },
      {
        id: 'rin3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're converting $0.\\overline{5}$ to a fraction. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, let $x$ equal:', options: ['$0.5555\\ldots$', '$5$', '$0.5$ exactly', '$50$'] },
            { label: 'Multiply both sides by:', options: ['$10$', '$100$', '$2$', '$5$'] },
            { label: 'After subtracting $x$, you get:', options: ['$9x = 5$', '$10x = 5$', '$9x = 50$', '$x = 5$'] },
            { label: 'So $0.\\overline{5}$ equals:', options: ['$\\frac{5}{9}$', '$\\frac{1}{2}$', '$\\frac{5}{10}$', '$\\frac{9}{5}$'] },
          ],
          correctAnswers: ['$0.5555\\ldots$', '$10$', '$9x = 5$', '$\\frac{5}{9}$'],
          hint1: 'The bar means the $5$ repeats forever, so $x = 0.5555\\ldots$',
          hint2: 'One repeating digit → multiply by $10$.',
          hint3: '$10x - x = 5.555\\ldots - 0.555\\ldots = 5$, so $9x = 5$ and $x = \\frac{5}{9}$.',
          explanation: '$x = 0.\\overline{5}$, $10x = 5.\\overline{5}$, subtract to get $9x = 5$, so $0.\\overline{5} = \\frac{5}{9}$.',
        },
      },
      {
        id: 'rin3-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert to a Fraction** 🧮

Use the method (or the $9$s shortcut). Give each answer in **lowest terms** (type like \`2/3\`).

**1)** $0.\\overline{8} = \\,?$
**2)** $0.\\overline{45} = \\,?$  *(reduce it!)*
**3)** $0.\\overline{1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/9', '5/11', '1/9'],
          hint1: 'One repeating digit → over $9$: $0.\\overline{8} = \\frac{8}{9}$.',
          hint2: 'Two repeating digits → over $99$: $0.\\overline{45} = \\frac{45}{99}$.',
          hint3: '$\\frac{45}{99}$ reduces — both divide by $9$: $\\frac{45 \\div 9}{99 \\div 9} = \\frac{5}{11}$.',
          explanation: '1) $0.\\overline{8} = \\frac{8}{9}$.  2) $0.\\overline{45} = \\frac{45}{99} = \\frac{5}{11}$.  3) $0.\\overline{1} = \\frac{1}{9}$.',
        },
      },
      {
        id: 'rin3-frac-decimal-drill',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When converting $0.\\overline{27}$, what should you multiply $x$ by, and why?',
              options: [
                'By $100$, because there are two repeating digits',
                'By $10$, because there is one repeating digit',
                'By $1000$, because the decimal is long',
                'By $2$, because of the digit $2$',
              ],
              correctAnswer: 0,
              explanation: 'Two repeating digits ($27$) means multiply by $100$ so the repeating block lines up. You get $99x = 27$, so $x = \\frac{27}{99} = \\frac{3}{11}$.',
            },
            {
              question: 'A repeating decimal can always be written as a fraction. This tells us every repeating decimal is:',
              options: ['rational', 'irrational', 'a perfect square', 'undefined'],
              correctAnswer: 0,
              explanation: 'If a decimal equals a ratio of integers, it is rational by definition. So every repeating decimal is rational.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-irrational-numbers-grade8',
    sections: [
      {
        id: 'rin4-intro',
        type: 'text' as const,
        content: `# 🔢 Rational and Irrational Numbers

**Part 4 of 5 — Estimating & Ordering on a Number Line**

---

> 🔑 **Big Payoff:** You can't write an irrational like $\\sqrt{2}$ as an exact decimal, but you *can* trap it between two whole numbers and place it on a number line. That's how we compare and order real numbers.`,
      },
      {
        id: 'rin4-estimate',
        type: 'text' as const,
        content: `## Trapping a Square Root Between Whole Numbers

To estimate $\\sqrt{n}$, find the two nearest perfect squares — one below $n$ and one above.

### Example: Estimate $\\sqrt{50}$

The perfect squares around $50$ are $49$ and $64$:
$$49 < 50 < 64 \\;\\Rightarrow\\; \\sqrt{49} < \\sqrt{50} < \\sqrt{64} \\;\\Rightarrow\\; 7 < \\sqrt{50} < 8$$

Since $50$ is very close to $49$, $\\sqrt{50}$ is just above $7$ (in fact $\\sqrt{50} \\approx 7.07$).

### Example: Estimate $\\sqrt{20}$

$$16 < 20 < 25 \\;\\Rightarrow\\; 4 < \\sqrt{20} < 5$$

$20$ is closer to $16$ than to $25$, so $\\sqrt{20} \\approx 4.5$ (actually $4.47$).

> 💡 **To pick which whole number it's nearer to:** compare $n$ to the two perfect squares. Closer to the lower square → root is nearer the lower whole number.`,
      },
      {
        id: 'rin4-trap-drill',
        type: 'input-boxes' as const,
        content: `**Trap the Root** 🧮

Each $\\sqrt{n}$ falls between two consecutive whole numbers. Enter the **whole number just below** each root.

**1)** $\\sqrt{40}$ is between ___ and the next whole number. Lower bound $= \\,?$
**2)** $\\sqrt{30}$ → lower bound $= \\,?$
**3)** $\\sqrt{8}$ → lower bound $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '5', '2'],
          hint1: 'Find the largest perfect square *below* $n$, then take its root.',
          hint2: '$36 < 40 < 49$, so $6 < \\sqrt{40} < 7$. For $30$: $25 < 30 < 36$.',
          hint3: 'For $\\sqrt{8}$: $4 < 8 < 9$, so $2 < \\sqrt{8} < 3$ — lower bound $2$.',
          explanation: '1) $\\sqrt{40}$: $6 < \\sqrt{40} < 7$ → $6$.  2) $\\sqrt{30}$: $5 < \\sqrt{30} < 6$ → $5$.  3) $\\sqrt{8}$: $2 < \\sqrt{8} < 3$ → $2$.',
        },
      },
      {
        id: 'rin4-nearest',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\sqrt{50}$ is closest to which whole number?',
              options: ['$7$', '$8$', '$25$', '$5$'],
              correctAnswer: 0,
              explanation: '$49 < 50 < 64$ gives $7 < \\sqrt{50} < 8$. Since $50$ is barely above $49$, $\\sqrt{50} \\approx 7.07$ — closest to $7$.',
            },
            {
              question: 'Between which two consecutive whole numbers does $\\sqrt{20}$ lie?',
              options: ['$4$ and $5$', '$3$ and $4$', '$5$ and $6$', '$9$ and $10$'],
              correctAnswer: 0,
              explanation: '$16 < 20 < 25$, so $\\sqrt{16} < \\sqrt{20} < \\sqrt{25}$, i.e. $4 < \\sqrt{20} < 5$.',
            },
          ],
        },
      },
      {
        id: 'rin4-order',
        type: 'text' as const,
        content: `## Ordering Rationals and Irrationals Together

To order a mixed list, turn everything into a **decimal estimate**, then compare.

### Example: Order $\\;2.5, \\;\\sqrt{8}, \\;\\dfrac{7}{3}, \\;\\pi\\;$ from least to greatest.

| Value | Decimal estimate |
|-------|------------------|
| $\\dfrac{7}{3}$ | $2.33$ |
| $2.5$ | $2.50$ |
| $\\sqrt{8}$ | $2.83$ |
| $\\pi$ | $3.14$ |

Reading the estimates in order:
$$\\frac{7}{3} < 2.5 < \\sqrt{8} < \\pi$$

> ⚠️ **Don't guess from the symbols.** $\\sqrt{8}$ *looks* small but $\\approx 2.83$, larger than $2.5$. Always convert to decimals first, then compare.`,
      },
      {
        id: 'rin4-order-drill',
        type: 'dropdown-select' as const,
        content: `**Compare Each Pair** 🔽

Choose the correct symbol so each statement is true. (Estimate as decimals first.)`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{2}\\;\\;?\\;\\;1.5$', options: ['$<$', '$>$', '$=$'] },
            { label: '$\\pi\\;\\;?\\;\\;\\frac{22}{7}$', options: ['$<$', '$>$', '$=$'] },
            { label: '$\\sqrt{16}\\;\\;?\\;\\;3.9$', options: ['$<$', '$>$', '$=$'] },
          ],
          correctAnswers: ['$<$', '$<$', '$>$'],
          hint1: '$\\sqrt{2} \\approx 1.41$, which is less than $1.5$.',
          hint2: '$\\pi \\approx 3.14159$ while $\\frac{22}{7} \\approx 3.142857$, so $\\pi$ is slightly less.',
          hint3: '$\\sqrt{16} = 4$ exactly, and $4 > 3.9$.',
          explanation: '$\\sqrt{2} \\approx 1.41 < 1.5$; $\\pi \\approx 3.1416 < 3.1429 \\approx \\frac{22}{7}$; $\\sqrt{16}=4 > 3.9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-irrational-numbers-grade8',
    sections: [
      {
        id: 'rin5-intro',
        type: 'text' as const,
        content: `# 🔢 Rational and Irrational Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) define and spot rational numbers, (2) recognize irrationals, (3) convert repeating decimals to fractions, and (4) estimate and order roots on a number line. Let's put it all together.`,
      },
      {
        id: 'rin5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Question | How to decide |
|----------|---------------|
| Is it rational? | Can it be written as $\\frac{a}{b}$, integers, $b \\ne 0$? |
| Terminating or repeating decimal? | Rational |
| Non-terminating AND non-repeating? | Irrational |
| $\\sqrt{n}$, $n$ a perfect square? | Rational (whole-number root) |
| $\\sqrt{n}$, $n$ not a perfect square? | Irrational |
| Repeating decimal → fraction | block over that many $9$s, then reduce |
| Estimate $\\sqrt{n}$ | trap between nearest perfect squares |

> ⚠️ **Two classic traps:** (1) $\\pi \\ne 3.14$ and $\\pi \\ne \\frac{22}{7}$ — those are *approximations*. (2) A square root is only irrational when the radicand is **not** a perfect square: $\\sqrt{9}=3$ is rational.`,
      },
      {
        id: 'rin5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list contains ONLY irrational numbers?',
              options: [
                '$\\sqrt{2}, \\;\\pi, \\;\\sqrt{7}$',
                '$\\sqrt{4}, \\;\\pi, \\;0.\\overline{3}$',
                '$\\frac{1}{2}, \\;\\sqrt{3}, \\;0.25$',
                '$\\sqrt{9}, \\;\\sqrt{16}, \\;\\sqrt{25}$',
              ],
              correctAnswer: 0,
              explanation: '$\\sqrt{2}$, $\\pi$, and $\\sqrt{7}$ are all non-terminating, non-repeating. The other lists each contain a rational number (e.g. $\\sqrt{4}=2$, $0.\\overline{3}=\\frac{1}{3}$, $\\frac{1}{2}$, or perfect-square roots).',
            },
            {
              question: 'Convert $0.\\overline{6}$ to a fraction in lowest terms.',
              options: ['$\\frac{2}{3}$', '$\\frac{6}{9}$', '$\\frac{3}{5}$', '$\\frac{1}{6}$'],
              correctAnswer: 0,
              explanation: 'One repeating digit → $\\frac{6}{9}$, which reduces ($\\div 3$) to $\\frac{2}{3}$. Lowest terms is required, so $\\frac{6}{9}$ is not the final answer.',
            },
            {
              question: 'Which value is between $\\sqrt{36}$ and $\\sqrt{49}$?',
              options: ['$6.5$', '$5.5$', '$7.5$', '$36.5$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{36}=6$ and $\\sqrt{49}=7$, so the value must lie between $6$ and $7$. Only $6.5$ fits.',
            },
          ],
        },
      },
      {
        id: 'rin5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

**1)** Convert $0.\\overline{4}$ to a fraction in lowest terms. $0.\\overline{4} = \\,?$  *(type like \`2/9\`)*
**2)** What is the largest whole number less than $\\sqrt{75}$?
**3)** Evaluate $\\sqrt{121} = \\,?$  *(it's a perfect square)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/9', '8', '11'],
          hint1: 'One repeating digit → over $9$: $0.\\overline{4} = \\frac{4}{9}$ (already lowest terms).',
          hint2: '$64 < 75 < 81$, so $8 < \\sqrt{75} < 9$ — the whole number just below is $8$.',
          hint3: '$11 \\times 11 = 121$, so $\\sqrt{121} = 11$.',
          explanation: '1) $0.\\overline{4} = \\frac{4}{9}$.  2) $\\sqrt{75}$ is between $8$ and $9$, so the answer is $8$.  3) $\\sqrt{121} = 11$.',
        },
      },
      {
        id: 'rin5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which number is rational?',
              options: ['$\\sqrt{64}$', '$\\sqrt{2}$', '$\\pi$', '$\\sqrt{11}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{64}=8$, a whole number, so it is rational. $\\sqrt{2}$, $\\pi$, and $\\sqrt{11}$ are all irrational.',
            },
            {
              question: 'A decimal that never ends and never repeats is:',
              options: ['irrational', 'rational', 'an integer', 'a perfect square'],
              correctAnswer: 0,
              explanation: 'Non-terminating AND non-repeating is the exact definition of an irrational number — it cannot be written as a ratio of integers.',
            },
            {
              question: '$0.\\overline{3}$ written as a fraction is:',
              options: ['$\\frac{1}{3}$', '$\\frac{3}{10}$', '$\\frac{1}{30}$', '$\\frac{3}{9}$ (not reduced)'],
              correctAnswer: 0,
              explanation: 'One repeating digit → $\\frac{3}{9}$, which reduces to $\\frac{1}{3}$. Lowest terms gives $\\frac{1}{3}$.',
            },
          ],
        },
      },
    ],
  },
]
