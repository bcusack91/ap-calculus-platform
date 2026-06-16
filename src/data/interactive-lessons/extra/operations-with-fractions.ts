import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Operations with Fractions (Pre-Algebra).
 * Registry key / DB Topic.slug: 'operations-with-fractions'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'operations-with-fractions',
    sections: [
      {
        id: 'owf1-intro',
        type: 'text' as const,
        content: `# 🍕 Operations with Fractions

**Part 1 of 5 — Fraction Foundations**

---

### Topics in This Part

| Section |
|---------|
| What a Fraction Really Means |
| Equivalent Fractions |
| Simplifying to Lowest Terms |

> 🔑 **Key Concept:** A fraction is just a division problem in disguise — $\\dfrac{a}{b}$ means "$a$ pieces, each one $b$-th of a whole." Master what fractions *mean* in Part 1 and every operation later becomes common sense.`,
      },
      {
        id: 'owf1-meaning',
        type: 'text' as const,
        content: `## What a Fraction Really Means

Every fraction has two parts:

$$\\frac{\\text{numerator}}{\\text{denominator}} = \\frac{3}{4}$$

- The **denominator** ($4$) tells you how many equal pieces the whole is split into.
- The **numerator** ($3$) tells you how many of those pieces you have.

So $\\dfrac{3}{4}$ of a pizza means the pizza was cut into $4$ equal slices and you took $3$ of them.

### Three Kinds of Fractions

| Type | Example | Meaning |
|------|---------|---------|
| Proper | $\\dfrac{2}{5}$ | numerator $<$ denominator (less than $1$) |
| Improper | $\\dfrac{7}{4}$ | numerator $\\ge$ denominator (at least $1$) |
| Mixed number | $1\\tfrac{3}{4}$ | a whole number plus a proper fraction |

> 💡 $\\dfrac{7}{4}$ and $1\\tfrac{3}{4}$ are the **same amount** — one written as a single fraction, one split into a whole plus a part.`,
      },
      {
        id: 'owf1-meaning-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A chocolate bar is split into $8$ equal squares and you eat $5$ of them. What fraction did you eat?',
              options: ['$\\dfrac{5}{8}$', '$\\dfrac{8}{5}$', '$\\dfrac{3}{8}$', '$\\dfrac{5}{3}$'],
              correctAnswer: 0,
              explanation: 'The denominator is the number of equal pieces ($8$) and the numerator is how many you took ($5$), so it is $\\dfrac{5}{8}$.',
            },
            {
              question: 'Which of these is an improper fraction?',
              options: ['$\\dfrac{9}{4}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{7}$'],
              correctAnswer: 0,
              explanation: 'In $\\dfrac{9}{4}$ the numerator ($9$) is larger than the denominator ($4$), so it is improper (greater than $1$). The others are proper fractions.',
            },
          ],
        },
      },
      {
        id: 'owf1-equivalent',
        type: 'text' as const,
        content: `## Equivalent Fractions

Two fractions are **equivalent** when they name the same amount. You build one by **multiplying** (or dividing) the top and bottom by the *same* nonzero number:

$$\\frac{1}{2} = \\frac{1 \\cdot 3}{2 \\cdot 3} = \\frac{3}{6}, \\qquad \\frac{1}{2} = \\frac{1 \\cdot 5}{2 \\cdot 5} = \\frac{5}{10}$$

Half a pizza is the same whether you cut it into $2$, $6$, or $10$ slices.

> ⚠️ You may only multiply or divide top and bottom by the **same** number. *Adding* the same number to both does **not** give an equivalent fraction — $\\dfrac{1}{2} \\ne \\dfrac{1+1}{2+1} = \\dfrac{2}{3}$.`,
      },
      {
        id: 'owf1-equiv-drill',
        type: 'input-boxes' as const,
        content: `**Build Equivalent Fractions** 🧮

Fill in the missing numerator.

**1)** $\\dfrac{2}{3} = \\dfrac{?}{12}$
**2)** $\\dfrac{3}{5} = \\dfrac{?}{20}$
**3)** $\\dfrac{1}{4} = \\dfrac{?}{16}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '12', '4'],
          hint1: 'To get from $3$ to $12$ in the denominator, multiply by $4$, so multiply the top by $4$ too: $2 \\cdot 4 = 8$.',
          hint2: 'From $5$ to $20$ is times $4$, so $3 \\cdot 4 = 12$.',
          hint3: 'From $4$ to $16$ is times $4$, so $1 \\cdot 4 = 4$.',
          explanation: '1) $\\dfrac{2}{3} = \\dfrac{8}{12}$.  2) $\\dfrac{3}{5} = \\dfrac{12}{20}$.  3) $\\dfrac{1}{4} = \\dfrac{4}{16}$. Whatever you do to the bottom, do to the top.',
        },
      },
      {
        id: 'owf1-simplify',
        type: 'text' as const,
        content: `## Simplifying to Lowest Terms

A fraction is in **lowest terms** when the numerator and denominator share no common factor except $1$. To simplify, divide top and bottom by their **greatest common factor (GCF)**.

### Example: Simplify $\\dfrac{12}{18}$

The GCF of $12$ and $18$ is $6$:

$$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$

### Example: Simplify $\\dfrac{15}{20}$

The GCF of $15$ and $20$ is $5$:

$$\\frac{15}{20} = \\frac{15 \\div 5}{20 \\div 5} = \\frac{3}{4}$$

> 🔑 Always give your **final answer in lowest terms** — it is the standard way to report a fraction, and it makes answers easy to compare.`,
      },
      {
        id: 'owf1-simplify-check',
        type: 'dropdown-select' as const,
        content: `**Simplify Each Fraction** 🔽

Choose the lowest-terms form of each fraction.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{8}{12} = $', options: ['$\\dfrac{2}{3}$', '$\\dfrac{4}{6}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{2}$'] },
            { label: '$\\dfrac{10}{25} = $', options: ['$\\dfrac{2}{5}$', '$\\dfrac{5}{10}$', '$\\dfrac{1}{2}$', '$\\dfrac{4}{5}$'] },
            { label: '$\\dfrac{9}{12} = $', options: ['$\\dfrac{3}{4}$', '$\\dfrac{2}{3}$', '$\\dfrac{9}{12}$', '$\\dfrac{1}{2}$'] },
          ],
          correctAnswers: ['$\\dfrac{2}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{4}$'],
          hint1: 'The GCF of $8$ and $12$ is $4$: $\\dfrac{8 \\div 4}{12 \\div 4} = \\dfrac{2}{3}$.',
          hint2: 'The GCF of $10$ and $25$ is $5$: $\\dfrac{10 \\div 5}{25 \\div 5} = \\dfrac{2}{5}$.',
          hint3: 'The GCF of $9$ and $12$ is $3$: $\\dfrac{9 \\div 3}{12 \\div 3} = \\dfrac{3}{4}$.',
          explanation: 'Divide top and bottom by their GCF each time: $\\dfrac{8}{12}=\\dfrac{2}{3}$, $\\dfrac{10}{25}=\\dfrac{2}{5}$, $\\dfrac{9}{12}=\\dfrac{3}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'operations-with-fractions',
    sections: [
      {
        id: 'owf2-intro',
        type: 'text' as const,
        content: `# 🍕 Operations with Fractions

**Part 2 of 5 — Adding & Subtracting Fractions**

---

> 🔑 **The Golden Rule:** You can only add or subtract fractions when they have the **same denominator**. Same-size pieces add directly; different-size pieces must be rewritten first.`,
      },
      {
        id: 'owf2-like',
        type: 'text' as const,
        content: `## Like Denominators (the easy case)

When denominators match, **add or subtract the numerators** and keep the denominator the same:

$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}$$

### Examples

$$\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7} \\qquad \\frac{5}{8} - \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2}$$

> ⚠️ **Never add the denominators!** $\\dfrac{2}{7} + \\dfrac{3}{7}$ is $\\dfrac{5}{7}$, **not** $\\dfrac{5}{14}$. The denominator names the *size* of the pieces, and the pieces don't change when you combine them.

Always simplify at the end: $\\dfrac{4}{8}$ becomes $\\dfrac{1}{2}$.`,
      },
      {
        id: 'owf2-like-drill',
        type: 'input-boxes' as const,
        content: `**Like Denominators** 🧮

Add or subtract. Give each answer in **lowest terms**. Enter fractions like \`3/5\`.

**1)** $\\dfrac{1}{6} + \\dfrac{4}{6} = \\,?$
**2)** $\\dfrac{7}{10} - \\dfrac{1}{10} = \\,?$
**3)** $\\dfrac{3}{8} + \\dfrac{1}{8} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '3/5', '1/2'],
          hint1: 'Add the numerators, keep the $6$: $\\dfrac{1+4}{6} = \\dfrac{5}{6}$ (already lowest terms).',
          hint2: '$\\dfrac{7-1}{10} = \\dfrac{6}{10}$; the GCF of $6$ and $10$ is $2$, so $\\dfrac{3}{5}$.',
          hint3: '$\\dfrac{3+1}{8} = \\dfrac{4}{8}$; divide by $4$ to get $\\dfrac{1}{2}$.',
          explanation: '1) $\\dfrac{5}{6}$.  2) $\\dfrac{6}{10} = \\dfrac{3}{5}$.  3) $\\dfrac{4}{8} = \\dfrac{1}{2}$. Combine numerators, then simplify.',
        },
      },
      {
        id: 'owf2-unlike',
        type: 'text' as const,
        content: `## Unlike Denominators

Different denominators mean different-size pieces, so first rewrite both fractions with a **common denominator** — usually the **least common multiple (LCM)** of the two denominators, called the **LCD**.

### Example: $\\dfrac{1}{3} + \\dfrac{1}{4}$

The LCD of $3$ and $4$ is $12$. Rewrite each fraction over $12$:

$$\\frac{1}{3} = \\frac{4}{12}, \\qquad \\frac{1}{4} = \\frac{3}{12}$$

Now the denominators match, so add the numerators:

$$\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

### Example: $\\dfrac{5}{6} - \\dfrac{1}{4}$

The LCD of $6$ and $4$ is $12$:

$$\\frac{5}{6} = \\frac{10}{12}, \\qquad \\frac{1}{4} = \\frac{3}{12} \\;\\Rightarrow\\; \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$

> 💡 **Finding the LCD:** list multiples of the larger denominator until one is also a multiple of the smaller. Multiples of $6$: $6, 12$ — and $12$ is divisible by $4$, so $\\text{LCD} = 12$.`,
      },
      {
        id: 'owf2-lcd-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the least common denominator (LCD) of $\\dfrac{1}{6}$ and $\\dfrac{3}{8}$?',
              options: ['$24$', '$48$', '$14$', '$12$'],
              correctAnswer: 0,
              explanation: 'List multiples of $8$: $8, 16, 24$ — and $24$ is divisible by $6$. The LCM of $6$ and $8$ is $24$, so the LCD is $24$.',
            },
            {
              question: 'Rewriting $\\dfrac{2}{5}$ with a denominator of $15$ gives:',
              options: ['$\\dfrac{6}{15}$', '$\\dfrac{2}{15}$', '$\\dfrac{5}{15}$', '$\\dfrac{10}{15}$'],
              correctAnswer: 0,
              explanation: 'From $5$ to $15$ multiply by $3$, so multiply the top by $3$ too: $2 \\cdot 3 = 6$, giving $\\dfrac{6}{15}$.',
            },
          ],
        },
      },
      {
        id: 'owf2-unlike-drill',
        type: 'input-boxes' as const,
        content: `**Unlike Denominators** 🧮

Find a common denominator, add or subtract, then simplify. Enter fractions like \`7/12\`.

**1)** $\\dfrac{1}{2} + \\dfrac{1}{3} = \\,?$
**2)** $\\dfrac{3}{4} - \\dfrac{1}{6} = \\,?$
**3)** $\\dfrac{2}{3} + \\dfrac{1}{6} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '7/12', '5/6'],
          hint1: 'LCD of $2$ and $3$ is $6$: $\\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$.',
          hint2: 'LCD of $4$ and $6$ is $12$: $\\dfrac{9}{12} - \\dfrac{2}{12} = \\dfrac{7}{12}$.',
          hint3: 'LCD of $3$ and $6$ is $6$: $\\dfrac{4}{6} + \\dfrac{1}{6} = \\dfrac{5}{6}$.',
          explanation: '1) $\\dfrac{3}{6}+\\dfrac{2}{6}=\\dfrac{5}{6}$.  2) $\\dfrac{9}{12}-\\dfrac{2}{12}=\\dfrac{7}{12}$.  3) $\\dfrac{4}{6}+\\dfrac{1}{6}=\\dfrac{5}{6}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'operations-with-fractions',
    sections: [
      {
        id: 'owf3-intro',
        type: 'text' as const,
        content: `# 🍕 Operations with Fractions

**Part 3 of 5 — Multiplying & Dividing Fractions**

---

> 🔑 **Good news:** Multiplying and dividing fractions is actually *easier* than adding them — you do **not** need a common denominator. Just follow two short rules.`,
      },
      {
        id: 'owf3-multiply',
        type: 'text' as const,
        content: `## Multiplying Fractions

Multiply **straight across** — numerator times numerator, denominator times denominator:

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

### Example

$$\\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15}$$

### Cancel Before You Multiply

You can simplify *before* multiplying by canceling a common factor from any top with any bottom. It keeps the numbers small:

$$\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{\\cancel{3}^{\\,1}}{\\cancel{4}^{\\,1}} \\cdot \\frac{\\cancel{8}^{\\,2}}{\\cancel{9}^{\\,3}} = \\frac{1 \\cdot 2}{1 \\cdot 3} = \\frac{2}{3}$$

Here $4$ and $8$ share a factor of $4$ (leaving $1$ and $2$), and $3$ and $9$ share a factor of $3$ (leaving $1$ and $3$).

> 💡 "Of" means multiply: $\\dfrac{1}{2}$ **of** $\\dfrac{3}{5}$ is $\\dfrac{1}{2} \\cdot \\dfrac{3}{5} = \\dfrac{3}{10}$.`,
      },
      {
        id: 'owf3-multiply-drill',
        type: 'input-boxes' as const,
        content: `**Multiply Fractions** 🧮

Multiply and write each answer in lowest terms. Enter fractions like \`3/10\`.

**1)** $\\dfrac{2}{5} \\cdot \\dfrac{1}{3} = \\,?$
**2)** $\\dfrac{3}{4} \\cdot \\dfrac{2}{9} = \\,?$
**3)** $\\dfrac{5}{6} \\cdot \\dfrac{3}{10} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2/15', '1/6', '1/4'],
          hint1: 'Straight across: $\\dfrac{2 \\cdot 1}{5 \\cdot 3} = \\dfrac{2}{15}$ (already lowest terms).',
          hint2: '$\\dfrac{3 \\cdot 2}{4 \\cdot 9} = \\dfrac{6}{36} = \\dfrac{1}{6}$ (divide by $6$).',
          hint3: '$\\dfrac{5 \\cdot 3}{6 \\cdot 10} = \\dfrac{15}{60} = \\dfrac{1}{4}$ (divide by $15$).',
          explanation: '1) $\\dfrac{2}{15}$.  2) $\\dfrac{6}{36}=\\dfrac{1}{6}$.  3) $\\dfrac{15}{60}=\\dfrac{1}{4}$.',
        },
      },
      {
        id: 'owf3-divide',
        type: 'text' as const,
        content: `## Dividing Fractions

To divide, **multiply by the reciprocal** of the second fraction (flip it):

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$

The **reciprocal** of $\\dfrac{c}{d}$ is $\\dfrac{d}{c}$ — just swap top and bottom.

### Example: $\\dfrac{1}{2} \\div \\dfrac{3}{4}$

Flip the second fraction and multiply:

$$\\frac{1}{2} \\div \\frac{3}{4} = \\frac{1}{2} \\cdot \\frac{4}{3} = \\frac{4}{6} = \\frac{2}{3}$$

> 🔑 Many students remember this as **"Keep, Change, Flip"**: *keep* the first fraction, *change* $\\div$ to $\\times$, *flip* the second fraction.

> ⚠️ Only flip the **second** fraction (the divisor). Flipping the first one gives the wrong answer.`,
      },
      {
        id: 'owf3-divide-check',
        type: 'dropdown-select' as const,
        content: `**Keep, Change, Flip** 🔽

You are computing $\\dfrac{2}{3} \\div \\dfrac{5}{6}$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'After "Keep, Change, Flip" the problem becomes:', options: ['$\\dfrac{2}{3} \\cdot \\dfrac{6}{5}$', '$\\dfrac{3}{2} \\cdot \\dfrac{5}{6}$', '$\\dfrac{2}{3} \\cdot \\dfrac{5}{6}$', '$\\dfrac{3}{2} \\cdot \\dfrac{6}{5}$'] },
            { label: 'Multiplying straight across gives:', options: ['$\\dfrac{12}{15}$', '$\\dfrac{10}{18}$', '$\\dfrac{7}{9}$', '$\\dfrac{12}{30}$'] },
            { label: 'In lowest terms the answer is:', options: ['$\\dfrac{4}{5}$', '$\\dfrac{5}{9}$', '$\\dfrac{2}{3}$', '$\\dfrac{3}{4}$'] },
          ],
          correctAnswers: ['$\\dfrac{2}{3} \\cdot \\dfrac{6}{5}$', '$\\dfrac{12}{15}$', '$\\dfrac{4}{5}$'],
          hint1: 'Keep $\\dfrac{2}{3}$, change $\\div$ to $\\times$, flip $\\dfrac{5}{6}$ to $\\dfrac{6}{5}$.',
          hint2: 'Straight across: $\\dfrac{2 \\cdot 6}{3 \\cdot 5} = \\dfrac{12}{15}$.',
          hint3: 'The GCF of $12$ and $15$ is $3$: $\\dfrac{12 \\div 3}{15 \\div 3} = \\dfrac{4}{5}$.',
          explanation: '$\\dfrac{2}{3} \\div \\dfrac{5}{6} = \\dfrac{2}{3} \\cdot \\dfrac{6}{5} = \\dfrac{12}{15} = \\dfrac{4}{5}$.',
        },
      },
      {
        id: 'owf3-divide-drill',
        type: 'input-boxes' as const,
        content: `**Divide Fractions** 🧮

Use Keep, Change, Flip. Give answers in lowest terms. Enter fractions like \`4/9\`.

**1)** $\\dfrac{1}{3} \\div \\dfrac{2}{5} = \\,?$
**2)** $\\dfrac{4}{5} \\div \\dfrac{2}{3} = \\,?$
**3)** $\\dfrac{3}{8} \\div \\dfrac{3}{4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '6/5', '1/2'],
          hint1: '$\\dfrac{1}{3} \\cdot \\dfrac{5}{2} = \\dfrac{5}{6}$.',
          hint2: '$\\dfrac{4}{5} \\cdot \\dfrac{3}{2} = \\dfrac{12}{10} = \\dfrac{6}{5}$.',
          hint3: '$\\dfrac{3}{8} \\cdot \\dfrac{4}{3} = \\dfrac{12}{24} = \\dfrac{1}{2}$.',
          explanation: '1) $\\dfrac{1}{3}\\cdot\\dfrac{5}{2}=\\dfrac{5}{6}$.  2) $\\dfrac{4}{5}\\cdot\\dfrac{3}{2}=\\dfrac{12}{10}=\\dfrac{6}{5}$.  3) $\\dfrac{3}{8}\\cdot\\dfrac{4}{3}=\\dfrac{12}{24}=\\dfrac{1}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'operations-with-fractions',
    sections: [
      {
        id: 'owf4-intro',
        type: 'text' as const,
        content: `# 🍕 Operations with Fractions

**Part 4 of 5 — Mixed Numbers & Word Problems**

---

> 🔑 **Big idea:** To do *any* operation on a mixed number, first turn it into an improper fraction. Then it behaves exactly like the fractions you already know.`,
      },
      {
        id: 'owf4-convert',
        type: 'text' as const,
        content: `## Converting Mixed Numbers

**Mixed number → improper fraction:** multiply the whole number by the denominator, add the numerator, keep the denominator.

$$2\\frac{3}{4} = \\frac{(2 \\cdot 4) + 3}{4} = \\frac{11}{4}$$

**Improper fraction → mixed number:** divide. The quotient is the whole number, the remainder is the new numerator.

$$\\frac{17}{5} = 17 \\div 5 = 3 \\text{ R } 2 = 3\\frac{2}{5}$$

| Mixed | Improper |
|-------|----------|
| $1\\tfrac{1}{2}$ | $\\dfrac{3}{2}$ |
| $3\\tfrac{1}{3}$ | $\\dfrac{10}{3}$ |
| $2\\tfrac{5}{6}$ | $\\dfrac{17}{6}$ |

> 💡 Check $2\\tfrac{5}{6}$: $(2 \\cdot 6) + 5 = 17$, so $\\dfrac{17}{6}$. ✓`,
      },
      {
        id: 'owf4-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert to Improper Fractions** 🧮

Rewrite each mixed number as an improper fraction. Enter like \`11/4\`.

**1)** $3\\dfrac{1}{2} = \\,?$
**2)** $2\\dfrac{2}{3} = \\,?$
**3)** $4\\dfrac{1}{5} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/2', '8/3', '21/5'],
          hint1: '$(3 \\cdot 2) + 1 = 7$, keep the $2$: $\\dfrac{7}{2}$.',
          hint2: '$(2 \\cdot 3) + 2 = 8$, keep the $3$: $\\dfrac{8}{3}$.',
          hint3: '$(4 \\cdot 5) + 1 = 21$, keep the $5$: $\\dfrac{21}{5}$.',
          explanation: '1) $\\dfrac{7}{2}$.  2) $\\dfrac{8}{3}$.  3) $\\dfrac{21}{5}$. Multiply whole by denominator, add numerator, keep denominator.',
        },
      },
      {
        id: 'owf4-operate',
        type: 'text' as const,
        content: `## Operating with Mixed Numbers

### Example: $1\\dfrac{1}{2} \\cdot 2\\dfrac{2}{3}$

Convert both, then multiply:

$$1\\frac{1}{2} \\cdot 2\\frac{2}{3} = \\frac{3}{2} \\cdot \\frac{8}{3} = \\frac{24}{6} = 4$$

### Example: $3\\dfrac{1}{4} - 1\\dfrac{1}{2}$

Convert both to a common denominator of $4$:

$$3\\frac{1}{4} - 1\\frac{1}{2} = \\frac{13}{4} - \\frac{6}{4} = \\frac{7}{4} = 1\\frac{3}{4}$$

> ⚠️ When the final answer is improper, convert it **back** to a mixed number unless the problem asks otherwise — $\\dfrac{7}{4} = 1\\tfrac{3}{4}$.`,
      },
      {
        id: 'owf4-word-check',
        type: 'multiple-choice' as const,
        content: `**Word Problems** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe needs $\\dfrac{3}{4}$ cup of sugar, but you are **doubling** it. How much sugar do you need?',
              options: ['$1\\dfrac{1}{2}$ cups', '$\\dfrac{3}{8}$ cup', '$\\dfrac{3}{4}$ cup', '$2\\dfrac{3}{4}$ cups'],
              correctAnswer: 0,
              explanation: 'Doubling means $\\dfrac{3}{4} \\cdot 2 = \\dfrac{6}{4} = \\dfrac{3}{2} = 1\\dfrac{1}{2}$ cups.',
            },
            {
              question: 'A board is $\\dfrac{7}{8}$ meter long. You cut off $\\dfrac{1}{4}$ meter. How much is left?',
              options: ['$\\dfrac{5}{8}$ meter', '$\\dfrac{3}{4}$ meter', '$\\dfrac{1}{2}$ meter', '$\\dfrac{6}{4}$ meter'],
              correctAnswer: 0,
              explanation: 'Common denominator $8$: $\\dfrac{7}{8} - \\dfrac{2}{8} = \\dfrac{5}{8}$ meter. ($\\dfrac{1}{4} = \\dfrac{2}{8}$.)',
            },
            {
              question: 'You have $4$ cups of flour and each batch of cookies uses $\\dfrac{2}{3}$ cup. How many full batches can you make?',
              options: ['$6$ batches', '$8$ batches', '$5$ batches', '$2\\dfrac{2}{3}$ batches'],
              correctAnswer: 0,
              explanation: 'Divide: $4 \\div \\dfrac{2}{3} = 4 \\cdot \\dfrac{3}{2} = \\dfrac{12}{2} = 6$ batches.',
            },
          ],
        },
      },
      {
        id: 'owf4-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Number Practice** 🧮

Solve. Enter improper-fraction answers in lowest terms like \`7/4\`, or a whole number like \`4\`.

**1)** $1\\dfrac{1}{3} + 2\\dfrac{1}{3} = \\,?$  *(give as improper, lowest terms)*
**2)** $2\\dfrac{1}{2} \\cdot \\dfrac{2}{5} = \\,?$  *(whole number)*
**3)** $3\\dfrac{1}{2} \\div 1\\dfrac{3}{4} = \\,?$  *(whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11/3', '1', '2'],
          hint1: '$\\dfrac{4}{3} + \\dfrac{7}{3} = \\dfrac{11}{3}$.',
          hint2: '$\\dfrac{5}{2} \\cdot \\dfrac{2}{5} = \\dfrac{10}{10} = 1$.',
          hint3: '$\\dfrac{7}{2} \\div \\dfrac{7}{4} = \\dfrac{7}{2} \\cdot \\dfrac{4}{7} = \\dfrac{28}{14} = 2$.',
          explanation: '1) $\\dfrac{4}{3}+\\dfrac{7}{3}=\\dfrac{11}{3}$.  2) $\\dfrac{5}{2}\\cdot\\dfrac{2}{5}=1$.  3) $\\dfrac{7}{2}\\cdot\\dfrac{4}{7}=2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'operations-with-fractions',
    sections: [
      {
        id: 'owf5-intro',
        type: 'text' as const,
        content: `# 🍕 Operations with Fractions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) simplify fractions, (2) add and subtract with common denominators, (3) multiply and divide, and (4) handle mixed numbers and word problems. Let's pull it all together.`,
      },
      {
        id: 'owf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Operation | Rule | Need common denominator? |
|-----------|------|--------------------------|
| Add / Subtract | combine numerators over the common denominator | **Yes** |
| Multiply | $\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{ac}{bd}$ (straight across) | No |
| Divide | $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c}$ (Keep, Change, Flip) | No |

> ⚠️ **Three habits that prevent most mistakes:**
> 1. Find a common denominator **only** for $+$ and $-$.
> 2. Flip the **second** fraction when dividing.
> 3. Always give the final answer in **lowest terms**.`,
      },
      {
        id: 'owf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which operation requires a common denominator?',
              options: ['$\\dfrac{2}{3} + \\dfrac{1}{4}$', '$\\dfrac{2}{3} \\cdot \\dfrac{1}{4}$', '$\\dfrac{2}{3} \\div \\dfrac{1}{4}$', 'None of them'],
              correctAnswer: 0,
              explanation: 'Only addition (and subtraction) needs a common denominator. Multiplication and division do not.',
            },
            {
              question: 'Compute $\\dfrac{5}{6} - \\dfrac{1}{3}$.',
              options: ['$\\dfrac{1}{2}$', '$\\dfrac{4}{3}$', '$\\dfrac{4}{6}$', '$\\dfrac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'LCD is $6$: $\\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.',
            },
          ],
        },
      },
      {
        id: 'owf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{18}{24}$ to lowest terms.',
              options: ['$\\dfrac{3}{4}$', '$\\dfrac{6}{8}$', '$\\dfrac{9}{12}$', '$\\dfrac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'The GCF of $18$ and $24$ is $6$: $\\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$.',
            },
            {
              question: 'Compute $\\dfrac{3}{4} \\div \\dfrac{2}{3}$.',
              options: ['$\\dfrac{9}{8}$', '$\\dfrac{1}{2}$', '$\\dfrac{6}{12}$', '$\\dfrac{8}{9}$'],
              correctAnswer: 0,
              explanation: 'Keep, Change, Flip: $\\dfrac{3}{4} \\cdot \\dfrac{3}{2} = \\dfrac{9}{8}$ (already lowest terms).',
            },
            {
              question: 'A pitcher holds $2\\dfrac{1}{2}$ liters and you pour out $\\dfrac{3}{4}$ liter. How much is left?',
              options: ['$1\\dfrac{3}{4}$ liters', '$1\\dfrac{1}{4}$ liters', '$2\\dfrac{1}{4}$ liters', '$1\\dfrac{1}{2}$ liters'],
              correctAnswer: 0,
              explanation: '$2\\dfrac{1}{2} = \\dfrac{5}{2} = \\dfrac{10}{4}$; then $\\dfrac{10}{4} - \\dfrac{3}{4} = \\dfrac{7}{4} = 1\\dfrac{3}{4}$ liters.',
            },
          ],
        },
      },
    ],
  },
]
