import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Comparing and Ordering Rational Numbers (Pre-Algebra).
 * Registry key / DB slug: 'comparing-ordering-rational'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-rational',
    sections: [
      {
        id: 'cor1-intro',
        type: 'text' as const,
        content: `# ⚖️ Comparing & Ordering Rational Numbers

**Part 1 of 5 — What Counts as a Rational Number?**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rational Number? |
| The Number Line: Bigger = Farther Right |
| Equivalent Forms of the Same Value |

> 🔑 **Key Concept:** A **rational number** is any number you can write as a fraction $\\dfrac{a}{b}$ of two integers, where $b \\ne 0$. Whole numbers, negatives, terminating decimals, and repeating decimals are *all* rational. Before we can compare them, we need to see how they all live together on one number line.`,
      },
      {
        id: 'cor1-define',
        type: 'text' as const,
        content: `## What Is a Rational Number?

A number is **rational** when it can be written as $\\dfrac{a}{b}$ with $a$ and $b$ integers and $b \\ne 0$.

| Number | As a fraction | Rational? |
|--------|---------------|-----------|
| $5$ | $\\dfrac{5}{1}$ | ✓ yes |
| $-3$ | $\\dfrac{-3}{1}$ | ✓ yes |
| $0.75$ | $\\dfrac{3}{4}$ | ✓ yes |
| $0.\\overline{3}$ | $\\dfrac{1}{3}$ | ✓ yes |
| $2\\tfrac{1}{2}$ | $\\dfrac{5}{2}$ | ✓ yes |

So every kind of number you'll meet in this lesson — integers, fractions, mixed numbers, and decimals — is just a different **costume** for a point on the number line.

> 💡 The word *rational* comes from **ratio**. A rational number is a ratio of two whole numbers.`,
      },
      {
        id: 'cor1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is **NOT** written in the form $\\frac{a}{b}$, yet is still a rational number?',
              options: ['$-7$', '$\\frac{2}{9}$', '$\\frac{0}{4}$', '$\\frac{1}{6}$'],
              correctAnswer: 0,
              explanation: '$-7$ is shown as a plain integer, but it equals $\\frac{-7}{1}$, so it is rational. The others are already written as fractions.',
            },
            {
              question: 'Why must the denominator $b$ never equal $0$ in $\\frac{a}{b}$?',
              options: ['Division by zero is undefined', 'Zero is not an integer', 'The fraction would be negative', 'Zero makes the number irrational'],
              correctAnswer: 0,
              explanation: 'You cannot divide by $0$, so $\\frac{a}{0}$ has no value. That is why the definition requires $b \\ne 0$. (Zero *is* an integer, and it is fine in the numerator: $\\frac{0}{4} = 0$.)',
            },
          ],
        },
      },
      {
        id: 'cor1-numberline',
        type: 'text' as const,
        content: `## The Number Line: Bigger = Farther Right

Every rational number is a single point on the number line. The rule for comparing is simple:

> 🔑 **The Golden Rule:** The number **farther to the right** is **greater**. The number farther to the **left** is **smaller** — even when it looks "bigger."

$$\\cdots\\; -2 \\;<\\; -1 \\;<\\; -\\tfrac{1}{2} \\;<\\; 0 \\;<\\; \\tfrac{1}{2} \\;<\\; 1 \\;<\\; 2 \\;\\cdots$$

A few quick reads off the line:

| Comparison | Why |
|------------|-----|
| $3 > -100$ | $3$ is to the right of $-100$ |
| $-\\tfrac{1}{2} < \\tfrac{1}{4}$ | negatives sit left of $0$ |
| $-5 < -2$ | $-5$ is *farther* left, so it is *smaller* |

> ⚠️ **Watch the trap:** With negatives, the number with the **larger digits** is actually the **smaller** value. $-9$ is less than $-2$.`,
      },
      {
        id: 'cor1-line-drill',
        type: 'dropdown-select' as const,
        content: `**Read the Number Line** 🔽

For each pair, pick the correct symbol so the statement is true.`,
        exercise: {
          dropdowns: [
            { label: '$\\;4 \\;\\square\\; -10$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;-6 \\;\\square\\; -1$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;-\\tfrac{1}{2} \\;\\square\\; 0$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$<$', '$<$'],
          hint1: '$4$ is to the right of $-10$, so $4$ is greater.',
          hint2: '$-6$ is farther left than $-1$, so it is the smaller number.',
          hint3: 'Any negative number sits to the left of $0$, so it is less than $0$.',
          explanation: '$4 > -10$ (positive beats negative); $-6 < -1$ (farther left is smaller); $-\\tfrac{1}{2} < 0$ (negatives are below zero).',
        },
      },
      {
        id: 'cor1-forms',
        type: 'text' as const,
        content: `## Same Value, Different Costume

The hardest part of comparing rational numbers is that the **same value** shows up in many forms. You must be able to switch between them.

$$\\tfrac{1}{2} \\;=\\; 0.5 \\;=\\; 50\\%, \\qquad \\tfrac{3}{4} \\;=\\; 0.75, \\qquad 1\\tfrac{1}{4} \\;=\\; \\tfrac{5}{4} \\;=\\; 1.25$$

To compare two rational numbers fairly, you first put them in the **same form** — either both as fractions with a common denominator, or both as decimals. Those are exactly the two methods we build next.

> 💡 In Part 2 we compare with **common denominators**; in Part 3 we compare with **decimals**. Both always agree — pick whichever is easier for the numbers in front of you.`,
      },
      {
        id: 'cor1-forms-drill',
        type: 'input-boxes' as const,
        content: `**Switch the Costume** 🧮

Rewrite each value in the requested form.

**1)** Write $\\dfrac{1}{2}$ as a decimal: $\\,?$
**2)** Write $0.25$ as a fraction in lowest terms (type \`1/4\`): $\\,?$
**3)** Write the mixed number $1\\tfrac{1}{2}$ as a decimal: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.5', '1/4', '1.5'],
          hint1: '$1 \\div 2 = 0.5$.',
          hint2: '$0.25 = \\frac{25}{100}$, which reduces to $\\frac{1}{4}$.',
          hint3: '$1\\tfrac{1}{2}$ means $1 + 0.5 = 1.5$.',
          explanation: '$\\frac{1}{2} = 0.5$, $\\;0.25 = \\frac{1}{4}$, $\\;1\\tfrac{1}{2} = 1.5$. Same values, different costumes.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-rational',
    sections: [
      {
        id: 'cor2-intro',
        type: 'text' as const,
        content: `# ⚖️ Comparing & Ordering Rational Numbers

**Part 2 of 5 — Comparing with Common Denominators**

---

> 🔑 **The Idea:** When two fractions have the **same denominator**, the one with the **larger numerator** is larger. So to compare *any* two fractions, first rewrite them over a common denominator.`,
      },
      {
        id: 'cor2-method',
        type: 'text' as const,
        content: `## The Common-Denominator Method

To compare $\\dfrac{a}{b}$ and $\\dfrac{c}{d}$:

1. Find a **common denominator** (the LCD, or just $b \\times d$).
2. Rewrite **both** fractions over that denominator.
3. Compare the **numerators**.

### Worked Example: $\\dfrac{3}{4}$ vs $\\dfrac{5}{8}$

The LCD of $4$ and $8$ is $8$. Rewrite $\\dfrac{3}{4}$:

$$\\frac{3}{4} = \\frac{3 \\cdot 2}{4 \\cdot 2} = \\frac{6}{8}$$

Now compare numerators over the **same** denominator $8$:

$$\\frac{6}{8} \\;>\\; \\frac{5}{8} \\quad\\Longrightarrow\\quad \\frac{3}{4} > \\frac{5}{8}$$

> ✅ **Check with decimals:** $\\frac{3}{4} = 0.75$ and $\\frac{5}{8} = 0.625$, and $0.75 > 0.625$ ✓`,
      },
      {
        id: 'cor2-method-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Once two fractions share the same denominator, how do you decide which is larger?',
              options: ['The larger numerator wins', 'The smaller numerator wins', 'The larger denominator wins', 'You must convert to decimals'],
              correctAnswer: 0,
              explanation: 'With equal denominators the pieces are the same size, so more pieces (a larger numerator) means a larger number.',
            },
            {
              question: 'Compare $\\frac{2}{3}$ and $\\frac{3}{5}$ using the common denominator $15$.',
              options: ['$\\frac{2}{3} > \\frac{3}{5}$', '$\\frac{2}{3} < \\frac{3}{5}$', '$\\frac{2}{3} = \\frac{3}{5}$', 'Cannot be compared'],
              correctAnswer: 0,
              explanation: '$\\frac{2}{3} = \\frac{10}{15}$ and $\\frac{3}{5} = \\frac{9}{15}$. Since $10 > 9$, we get $\\frac{2}{3} > \\frac{3}{5}$.',
            },
          ],
        },
      },
      {
        id: 'cor2-lcd-example',
        type: 'text' as const,
        content: `## When the LCD Isn't Obvious

If the denominators share no easy factor, use the LCD — the smallest number both divide into.

### Worked Example: $\\dfrac{7}{12}$ vs $\\dfrac{5}{8}$

The LCD of $12$ and $8$ is $24$.

$$\\frac{7}{12} = \\frac{7 \\cdot 2}{12 \\cdot 2} = \\frac{14}{24}, \\qquad \\frac{5}{8} = \\frac{5 \\cdot 3}{8 \\cdot 3} = \\frac{15}{24}$$

Compare numerators: $14 < 15$, so

$$\\frac{7}{12} \\;<\\; \\frac{5}{8}$$

> 💡 **Shortcut — cross multiply.** To compare $\\dfrac{a}{b}$ and $\\dfrac{c}{d}$ (positive), compare $a \\cdot d$ with $c \\cdot b$. Here $7 \\cdot 8 = 56$ and $5 \\cdot 12 = 60$; since $56 < 60$, the first fraction is smaller. Same answer, less writing.`,
      },
      {
        id: 'cor2-cross-drill',
        type: 'input-boxes' as const,
        content: `**Cross-Multiply to Compare** 🧮

For each pair of positive fractions, compute the two cross products $a\\cdot d$ and $c\\cdot b$ to decide which is bigger.

**1)** Compare $\\dfrac{3}{4}$ and $\\dfrac{5}{7}$. Enter $3 \\times 7 = \\,?$
**2)** Same pair: enter $5 \\times 4 = \\,?$
**3)** Which fraction is larger — type \`3/4\` or \`5/7\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '20', '3/4'],
          hint1: '$3 \\times 7 = 21$. This product sits above the $\\frac{3}{4}$ side.',
          hint2: '$5 \\times 4 = 20$. This product sits above the $\\frac{5}{7}$ side.',
          hint3: 'The larger cross product belongs to the larger fraction: $21 > 20$, so $\\frac{3}{4}$ wins.',
          explanation: '$3\\times7 = 21$ and $5\\times4 = 20$. Since $21 > 20$, $\\frac{3}{4} > \\frac{5}{7}$. (Check: $0.75 > 0.714\\ldots$ ✓)',
        },
      },
      {
        id: 'cor2-build-drill',
        type: 'input-boxes' as const,
        content: `**Rewrite Over a Common Denominator** 🧮

**1)** Rewrite $\\dfrac{2}{3}$ over the denominator $12$. Enter the new **numerator**.
**2)** Rewrite $\\dfrac{3}{4}$ over the denominator $12$. Enter the new **numerator**.
**3)** Using your answers, which is larger — type \`2/3\` or \`3/4\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', '3/4'],
          hint1: '$\\frac{2}{3} = \\frac{2 \\cdot 4}{3 \\cdot 4} = \\frac{8}{12}$, so the numerator is $8$.',
          hint2: '$\\frac{3}{4} = \\frac{3 \\cdot 3}{4 \\cdot 3} = \\frac{9}{12}$, so the numerator is $9$.',
          hint3: 'Over $12$ths, compare $8$ vs $9$. Since $9 > 8$, $\\frac{3}{4}$ is larger.',
          explanation: '$\\frac{2}{3} = \\frac{8}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$. Because $9 > 8$, we have $\\frac{3}{4} > \\frac{2}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-rational',
    sections: [
      {
        id: 'cor3-intro',
        type: 'text' as const,
        content: `# ⚖️ Comparing & Ordering Rational Numbers

**Part 3 of 5 — Comparing with Decimals**

---

> 🔑 **Why decimals help:** Once two numbers are written as decimals, you compare them place by place — like reading a price tag. No common denominators required.`,
      },
      {
        id: 'cor3-convert',
        type: 'text' as const,
        content: `## Turning a Fraction into a Decimal

A fraction is just a division problem: $\\dfrac{a}{b} = a \\div b$.

| Fraction | Division | Decimal |
|----------|----------|---------|
| $\\dfrac{1}{2}$ | $1 \\div 2$ | $0.5$ |
| $\\dfrac{3}{4}$ | $3 \\div 4$ | $0.75$ |
| $\\dfrac{5}{8}$ | $5 \\div 8$ | $0.625$ |
| $\\dfrac{1}{3}$ | $1 \\div 3$ | $0.\\overline{3} = 0.333\\ldots$ |

Some fractions give a **terminating** decimal (it stops); others give a **repeating** decimal (a digit pattern repeats forever, marked with a bar). Both are still rational.

> 💡 To compare a fraction and a decimal, it is usually easiest to turn the **fraction into a decimal** and line up the place values.`,
      },
      {
        id: 'cor3-align',
        type: 'text' as const,
        content: `## Comparing Decimals: Line Up the Places

Write the decimals with the **same number of places** (pad with zeros), then compare left to right.

### Worked Example: Compare $0.6$ and $0.58$

Pad $0.6$ to two places: $0.60$.

$$0.60 \\quad\\text{vs}\\quad 0.58$$

Tenths place: $6 > 5$, so $0.6 > 0.58$.

> ⚠️ **Common mistake:** thinking $0.58 > 0.6$ "because it has more digits." Length does **not** mean larger. Pad with zeros and compare place by place.

### Worked Example: Compare $\\dfrac{2}{5}$ and $\\dfrac{3}{7}$

$$\\frac{2}{5} = 0.40, \\qquad \\frac{3}{7} = 0.428\\ldots$$

Tenths are equal ($4 = 4$); hundredths: $2 > 0$, so $\\dfrac{3}{7} > \\dfrac{2}{5}$.`,
      },
      {
        id: 'cor3-decimal-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is the greatest? $0.5$, $\\;0.45$, $\\;0.405$',
              options: ['$0.5$', '$0.45$', '$0.405$', 'They are all equal'],
              correctAnswer: 0,
              explanation: 'Pad to three places: $0.500$, $0.450$, $0.405$. The tenths digit decides: $5 > 4$, so $0.5$ is greatest — even though it is written with the fewest digits.',
            },
            {
              question: '$\\frac{3}{8}$ written as a decimal is:',
              options: ['$0.375$', '$0.38$', '$0.3$', '$0.835$'],
              correctAnswer: 0,
              explanation: '$3 \\div 8 = 0.375$ exactly (a terminating decimal).',
            },
          ],
        },
      },
      {
        id: 'cor3-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert to Decimals** 🧮

Write each fraction as a decimal. (Each of these terminates.)

**1)** $\\dfrac{1}{4} = \\,?$
**2)** $\\dfrac{7}{10} = \\,?$
**3)** $\\dfrac{5}{8} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.25', '0.7', '0.625'],
          hint1: '$1 \\div 4 = 0.25$.',
          hint2: '$7 \\div 10 = 0.7$ — dividing by $10$ just shifts the decimal point.',
          hint3: '$5 \\div 8 = 0.625$.',
          explanation: '$\\frac{1}{4} = 0.25$, $\\;\\frac{7}{10} = 0.7$, $\\;\\frac{5}{8} = 0.625$. All terminate.',
        },
      },
      {
        id: 'cor3-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decimal Showdown** 🔽

Convert where needed, then choose the correct symbol.`,
        exercise: {
          dropdowns: [
            { label: '$\\;0.7 \\;\\square\\; 0.68$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;\\tfrac{1}{4} \\;\\square\\; 0.3$', options: ['$>$', '$<$', '$=$'] },
            { label: '$\\;\\tfrac{3}{5} \\;\\square\\; 0.6$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$<$', '$=$'],
          hint1: 'Pad to $0.70$ vs $0.68$. Tenths: $7 > 6$.',
          hint2: '$\\frac{1}{4} = 0.25$, and $0.25 < 0.3$.',
          hint3: '$\\frac{3}{5} = 0.6$ exactly, so the two sides are equal.',
          explanation: '$0.70 > 0.68$; $\\;0.25 < 0.3$; $\\;\\frac{3}{5} = 0.6$ so they are equal.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-rational',
    sections: [
      {
        id: 'cor4-intro',
        type: 'text' as const,
        content: `# ⚖️ Comparing & Ordering Rational Numbers

**Part 4 of 5 — Negatives & Ordering a Whole List**

---

> 🔑 **The Big Skill:** Real problems mix positives, negatives, fractions, and decimals all at once. The trick is to put everything in **one common form** (usually decimals), then walk the number line from left to right.`,
      },
      {
        id: 'cor4-negatives',
        type: 'text' as const,
        content: `## Comparing Negative Rational Numbers

The number-line rule still holds: **farther right is greater.** Since negatives sit left of $0$, the one **closer to zero** is the larger value.

### Worked Example: Compare $-\\dfrac{2}{3}$ and $-\\dfrac{3}{4}$

Convert to decimals (keep the sign):

$$-\\frac{2}{3} = -0.66\\overline{6}, \\qquad -\\frac{3}{4} = -0.75$$

On the number line, $-0.666\\ldots$ is to the **right** of $-0.75$ (it is closer to $0$), so

$$-\\frac{2}{3} \\;>\\; -\\frac{3}{4}$$

> ⚠️ **The negative flip:** Among positives, $\\frac{3}{4} > \\frac{2}{3}$. Add the minus signs and the order **reverses**: $-\\frac{3}{4} < -\\frac{2}{3}$. Bigger size = more negative = smaller value.`,
      },
      {
        id: 'cor4-neg-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is the greatest?',
              options: ['$-0.2$', '$-0.9$', '$-1.5$', '$-2$'],
              correctAnswer: 0,
              explanation: 'For negatives, the one closest to $0$ is greatest. $-0.2$ is closest to $0$, so it is the largest of the four.',
            },
            {
              question: 'Order $-\\frac{1}{2}$, $\\;-\\frac{1}{4}$, $\\;-\\frac{3}{4}$ from least to greatest.',
              options: ['$-\\frac{3}{4}, -\\frac{1}{2}, -\\frac{1}{4}$', '$-\\frac{1}{4}, -\\frac{1}{2}, -\\frac{3}{4}$', '$-\\frac{1}{2}, -\\frac{1}{4}, -\\frac{3}{4}$', '$-\\frac{1}{4}, -\\frac{3}{4}, -\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'As decimals: $-0.75, -0.5, -0.25$. Least (most negative) is $-\\frac{3}{4}$; greatest (closest to $0$) is $-\\frac{1}{4}$.',
            },
          ],
        },
      },
      {
        id: 'cor4-ordering',
        type: 'text' as const,
        content: `## Ordering a Mixed List

To order a list of rational numbers from **least to greatest**:

1. Convert **every** number to the same form (decimals are easiest).
2. Negatives come first (most negative is least), then $0$, then positives.
3. Read off the order, then translate back to the original forms.

### Worked Example: Order $-1.5,\\; \\dfrac{2}{5},\\; -\\dfrac{3}{4},\\; 0,\\; \\dfrac{2}{3}$

Convert to decimals:

$$-1.5,\\quad \\frac{2}{5}=0.4,\\quad -\\frac{3}{4}=-0.75,\\quad 0,\\quad \\frac{2}{3}=0.66\\overline{6}$$

Place on the line, least to greatest:

$$-1.5 \\;<\\; -0.75 \\;<\\; 0 \\;<\\; 0.4 \\;<\\; 0.666\\ldots$$

So the order is:

$$-1.5 \\;<\\; -\\frac{3}{4} \\;<\\; 0 \\;<\\; \\frac{2}{5} \\;<\\; \\frac{2}{3}$$`,
      },
      {
        id: 'cor4-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Order** 🔽

You are ordering $\\;\\dfrac{1}{2},\\; -0.3,\\; \\dfrac{3}{4},\\; -1,\\; 0\\;$ from **least to greatest**. Fill each slot.`,
        exercise: {
          dropdowns: [
            { label: 'Least (1st):', options: ['$-1$', '$-0.3$', '$0$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'] },
            { label: '2nd:', options: ['$-1$', '$-0.3$', '$0$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'] },
            { label: '3rd:', options: ['$-1$', '$-0.3$', '$0$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'] },
            { label: 'Greatest (5th):', options: ['$-1$', '$-0.3$', '$0$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'] },
          ],
          correctAnswers: ['$-1$', '$-0.3$', '$0$', '$\\frac{3}{4}$'],
          hint1: 'As decimals: $0.5,\\, -0.3,\\, 0.75,\\, -1,\\, 0$. The most negative is least.',
          hint2: 'Negatives first: $-1$ then $-0.3$; then $0$.',
          hint3: 'After $0$ come the positives $\\frac{1}{2}=0.5$ then $\\frac{3}{4}=0.75$, so the greatest is $\\frac{3}{4}$.',
          explanation: 'Full order: $-1 < -0.3 < 0 < \\frac{1}{2} < \\frac{3}{4}$. The slots asked are the 1st, 2nd, 3rd, and 5th.',
        },
      },
      {
        id: 'cor4-order-drill',
        type: 'input-boxes' as const,
        content: `**Order It Yourself** 🧮

Order $\\;\\dfrac{1}{4},\\; -\\dfrac{1}{2},\\; 0.6,\\; -0.1\\;$ from **least to greatest**.

Type each value (as written above) in order. Use \`1/4\` for the fraction and \`-1/2\` for the negative fraction.

**1)** Least $= \\,?$  **2)** Next $= \\,?$  **3)** Next $= \\,?$  **4)** Greatest $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-1/2', '-0.1', '1/4', '0.6'],
          hint1: 'Convert all to decimals: $0.25,\\, -0.5,\\, 0.6,\\, -0.1$.',
          hint2: 'The two negatives come first; $-0.5$ is more negative than $-0.1$, so $-\\frac{1}{2}$ is least.',
          hint3: 'After the negatives: $\\frac{1}{4}=0.25$ then $0.6$. So $0.6$ is greatest.',
          explanation: 'As decimals $-0.5 < -0.1 < 0.25 < 0.6$, giving $-\\frac{1}{2} < -0.1 < \\frac{1}{4} < 0.6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-rational',
    sections: [
      {
        id: 'cor5-intro',
        type: 'text' as const,
        content: `# ⚖️ Comparing & Ordering Rational Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize rational numbers, (2) compare with common denominators, (3) compare with decimals, and (4) order a mixed list including negatives. Let's put it all together.`,
      },
      {
        id: 'cor5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Compare two fractions | common denominator, or cross multiply $a\\cdot d$ vs $c\\cdot b$ |
| Compare fraction vs decimal | turn the fraction into a decimal |
| Compare decimals | pad with zeros, compare left to right |
| Compare negatives | closer to $0$ = greater; bigger size = smaller |
| Order a mixed list | convert all to decimals, walk left → right on the line |

> ⚠️ **Two traps to remember:** a longer decimal is **not** automatically larger ($0.5 > 0.45$), and a "bigger looking" negative is **smaller** ($-9 < -2$).`,
      },
      {
        id: 'cor5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Compare $\\dfrac{4}{5}$ and $\\dfrac{7}{9}$ by cross multiplying: enter $4 \\times 9 = \\,?$
**2)** Same pair: enter $7 \\times 5 = \\,?$
**3)** Which is larger — type \`4/5\` or \`7/9\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '35', '4/5'],
          hint1: '$4 \\times 9 = 36$ (over the $\\frac{4}{5}$ side).',
          hint2: '$7 \\times 5 = 35$ (over the $\\frac{7}{9}$ side).',
          hint3: 'Larger cross product = larger fraction: $36 > 35$, so $\\frac{4}{5}$ wins.',
          explanation: '$4\\times9 = 36 > 35 = 7\\times5$, so $\\frac{4}{5} > \\frac{7}{9}$. (Check: $0.8 > 0.777\\ldots$ ✓)',
        },
      },
      {
        id: 'cor5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement is true?',
              options: ['$\\frac{5}{6} > \\frac{4}{5}$', '$\\frac{5}{6} < \\frac{4}{5}$', '$\\frac{5}{6} = \\frac{4}{5}$', '$\\frac{5}{6} > 1$'],
              correctAnswer: 0,
              explanation: 'Cross multiply: $5 \\times 5 = 25$ vs $4 \\times 6 = 24$. Since $25 > 24$, $\\frac{5}{6} > \\frac{4}{5}$. (Check: $0.83\\overline{3} > 0.8$ ✓)',
            },
            {
              question: 'Order from **least to greatest**: $\\;0.4,\\; -\\frac{1}{2},\\; \\frac{1}{3}$',
              options: ['$-\\frac{1}{2}, \\frac{1}{3}, 0.4$', '$-\\frac{1}{2}, 0.4, \\frac{1}{3}$', '$\\frac{1}{3}, 0.4, -\\frac{1}{2}$', '$0.4, \\frac{1}{3}, -\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'As decimals: $-0.5,\\; 0.333\\ldots,\\; 0.4$. So $-\\frac{1}{2} < \\frac{1}{3} < 0.4$.',
            },
          ],
        },
      },
      {
        id: 'cor5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes $\\;-\\frac{3}{5} \\;\\square\\; -\\frac{2}{3}\\;$ true?',
              options: ['$>$', '$<$', '$=$', 'none of these'],
              correctAnswer: 0,
              explanation: 'As decimals, $-\\frac{3}{5} = -0.6$ and $-\\frac{2}{3} = -0.66\\overline{6}$. Since $-0.6$ is closer to $0$, $-\\frac{3}{5} > -\\frac{2}{3}$.',
            },
            {
              question: 'Which decimal is greatest? $\\;0.7,\\; 0.07,\\; 0.77,\\; 0.707$',
              options: ['$0.77$', '$0.707$', '$0.7$', '$0.07$'],
              correctAnswer: 0,
              explanation: 'Pad to three places: $0.700,\\, 0.070,\\, 0.770,\\, 0.707$. The tenths are $7,0,7,7$; among the three with $7$ tenths, the hundredths $7 > 0$ picks $0.770$ as greatest.',
            },
            {
              question: 'A list is ordered least to greatest. Which list is correct?',
              options: ['$-1, -\\frac{1}{4}, 0, \\frac{2}{3}$', '$-\\frac{1}{4}, -1, 0, \\frac{2}{3}$', '$0, -\\frac{1}{4}, -1, \\frac{2}{3}$', '$\\frac{2}{3}, 0, -\\frac{1}{4}, -1$'],
              correctAnswer: 0,
              explanation: 'As decimals: $-1, -0.25, 0, 0.66\\overline{6}$. Each is larger than the one before, so this list is correctly ordered least to greatest.',
            },
          ],
        },
      },
    ],
  },
]
