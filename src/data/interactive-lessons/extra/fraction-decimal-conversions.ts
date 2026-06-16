import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Fraction and Decimal Conversions (Pre-Algebra).
 * Registry key / DB slug: 'fraction-decimal-conversions'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'fraction-decimal-conversions',
    sections: [
      {
        id: 'fdc1-intro',
        type: 'text' as const,
        content: `# 🔢 Fraction & Decimal Conversions

**Part 1 of 5 — Two Names for the Same Number**

---

### Topics in This Part

| Section |
|---------|
| Fractions and Decimals Mean the Same Thing |
| Decimal Place Value |
| Terminating vs. Repeating Decimals |

> 🔑 **Key Concept:** A fraction and a decimal are just two ways of writing the same amount. $\\dfrac{1}{2}$ and $0.5$ point to the exact same spot on the number line. This lesson teaches you to travel freely between the two forms.`,
      },
      {
        id: 'fdc1-meaning',
        type: 'text' as const,
        content: `## Fractions and Decimals Mean the Same Thing

A **fraction** $\\dfrac{a}{b}$ is really a division statement: it means "$a$ divided by $b$."

$$\\frac{a}{b} = a \\div b$$

So $\\dfrac{3}{4}$ literally means $3 \\div 4 = 0.75$. The fraction bar *is* a division sign.

A **decimal** writes the same value using place value to the right of the decimal point:

| Decimal | In words | As a fraction |
|---------|----------|----------------|
| $0.5$ | five tenths | $\\dfrac{5}{10} = \\dfrac{1}{2}$ |
| $0.25$ | twenty-five hundredths | $\\dfrac{25}{100} = \\dfrac{1}{4}$ |
| $0.75$ | seventy-five hundredths | $\\dfrac{75}{100} = \\dfrac{3}{4}$ |

> 🔑 **Key Idea:** The fraction bar means *divide*. That single fact is the engine behind every fraction-to-decimal conversion in this lesson.`,
      },
      {
        id: 'fdc1-warmup',
        type: 'input-boxes' as const,
        content: `**Warm-Up** 🧮

Use the table above (or divide top by bottom) to fill in the matching form.

**1)** $\\dfrac{1}{2} = \\,?$  *(decimal)*
**2)** $\\dfrac{1}{4} = \\,?$  *(decimal)*
**3)** $0.75 = \\dfrac{?}{4}$  *(numerator only)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.5', '0.25', '3'],
          hint1: 'Half of a whole is $0.5$, since $1 \\div 2 = 0.5$.',
          hint2: 'A quarter is $0.25$, since $1 \\div 4 = 0.25$.',
          hint3: 'Seventy-five hundredths is three quarters: $0.75 = \\frac{75}{100} = \\frac{3}{4}$, so the numerator is $3$.',
          explanation: '1) $\\frac{1}{2}=0.5$.  2) $\\frac{1}{4}=0.25$.  3) $0.75 = \\frac{3}{4}$, so the missing numerator is $3$. These are the same numbers in two outfits.',
        },
      },
      {
        id: 'fdc1-placevalue',
        type: 'text' as const,
        content: `## Decimal Place Value

Each spot after the decimal point names a denominator that is a power of $10$:

| Place | $0.\\,d_1\\,d_2\\,d_3$ | Denominator |
|-------|------|-------------|
| 1st place | tenths | $10$ |
| 2nd place | hundredths | $100$ |
| 3rd place | thousandths | $1000$ |

So $0.7$ is **7 tenths** $= \\dfrac{7}{10}$, and $0.07$ is **7 hundredths** $= \\dfrac{7}{100}$.

**Read the whole number, then attach the last place value.** The decimal $0.349$ ends in the thousandths place, so it reads "three hundred forty-nine **thousandths**" $= \\dfrac{349}{1000}$.

> 💡 The number of digits after the point tells you the denominator: 1 digit → $10$, 2 digits → $100$, 3 digits → $1000$. Each extra digit adds a zero.`,
      },
      {
        id: 'fdc1-place-check',
        type: 'dropdown-select' as const,
        content: `**Name That Place** 🔽

Match each underlined idea to the correct place value.`,
        exercise: {
          dropdowns: [
            { label: 'In $0.6$, the $6$ is in the:', options: ['tenths place', 'hundredths place', 'thousandths place', 'ones place'] },
            { label: 'In $0.08$, the $8$ is in the:', options: ['hundredths place', 'tenths place', 'thousandths place', 'tens place'] },
            { label: '$0.451$ reads as four hundred fifty-one:', options: ['thousandths', 'hundredths', 'tenths', 'ten-thousandths'] },
          ],
          correctAnswers: ['tenths place', 'hundredths place', 'thousandths'],
          hint1: 'Count digits after the point: 1 digit means tenths.',
          hint2: 'Two digits after the point means the last digit lands in the hundredths place.',
          hint3: 'Three digits after the point means the value is read in thousandths.',
          explanation: '$0.6 = \\frac{6}{10}$ (tenths). $0.08 = \\frac{8}{100}$ (hundredths). $0.451 = \\frac{451}{1000}$ (thousandths). The number of decimal digits names the denominator.',
        },
      },
      {
        id: 'fdc1-types',
        type: 'text' as const,
        content: `## Terminating vs. Repeating Decimals

When you turn a fraction into a decimal, exactly one of two things happens:

- A **terminating decimal** stops. The division comes out even.
$$\\frac{3}{8} = 0.375 \\qquad \\frac{1}{4} = 0.25$$

- A **repeating decimal** never stops — one or more digits repeat forever. We mark the repeat with a **bar** over the repeating block.
$$\\frac{1}{3} = 0.333\\ldots = 0.\\overline{3} \\qquad \\frac{2}{11} = 0.1818\\ldots = 0.\\overline{18}$$

> 💡 **How to predict it:** Put the fraction in lowest terms. If the denominator's only prime factors are $2$'s and $5$'s, the decimal **terminates**. Any *other* prime factor (like $3$ or $7$) makes it **repeat**. Example: $\\dfrac{3}{8}$ has denominator $8 = 2^3$ → terminates; $\\dfrac{1}{6}$ has denominator $6 = 2 \\cdot 3$ → repeats.`,
      },
      {
        id: 'fdc1-types-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which fraction produces a TERMINATING decimal?',
              options: ['$\\frac{5}{8}$', '$\\frac{1}{3}$', '$\\frac{2}{7}$', '$\\frac{5}{6}$'],
              correctAnswer: 0,
              explanation: '$8 = 2^3$ has only the prime factor $2$, so $\\frac{5}{8} = 0.625$ terminates. The denominators $3$, $7$, and $6$ each contain a prime other than $2$ or $5$, so those repeat.',
            },
            {
              question: 'The decimal $0.4545\\ldots$ written with a repeat bar is:',
              options: ['$0.\\overline{45}$', '$0.4\\overline{5}$', '$0.\\overline{4}5$', '$0.45\\overline{45}$'],
              correctAnswer: 0,
              explanation: 'The block "$45$" repeats forever, so the bar goes over both digits: $0.\\overline{45}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'fraction-decimal-conversions',
    sections: [
      {
        id: 'fdc2-intro',
        type: 'text' as const,
        content: `# 🔢 Fraction & Decimal Conversions

**Part 2 of 5 — Fraction → Decimal (Divide)**

---

> 🔑 **The Idea:** To turn any fraction into a decimal, divide the **top** by the **bottom**: $\\dfrac{a}{b} = a \\div b$. The fraction bar told you to divide all along.`,
      },
      {
        id: 'fdc2-division',
        type: 'text' as const,
        content: `## The Long-Division Method

To convert $\\dfrac{3}{4}$, compute $3 \\div 4$. Since $3$ is smaller than $4$, write $3$ as $3.000$ and divide:

$$3.000 \\div 4 = 0.75$$

**Step by step:**
- $30 \\div 4 = 7$ remainder $2$ → first decimal digit $7$
- bring down: $20 \\div 4 = 5$ remainder $0$ → next digit $5$
- remainder is $0$, so we **stop**: $\\dfrac{3}{4} = 0.75$ ✓

### A few you should memorize

| Fraction | Decimal | Fraction | Decimal |
|----------|---------|----------|---------|
| $\\frac{1}{2}$ | $0.5$ | $\\frac{1}{5}$ | $0.2$ |
| $\\frac{1}{4}$ | $0.25$ | $\\frac{3}{4}$ | $0.75$ |
| $\\frac{1}{8}$ | $0.125$ | $\\frac{1}{10}$ | $0.1$ |

> 💡 **Shortcut:** If the denominator is already $10$, $100$, or $1000$, just write the digits in the matching place — no division needed. $\\dfrac{7}{10} = 0.7$ and $\\dfrac{23}{100} = 0.23$.`,
      },
      {
        id: 'fdc2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To convert $\\frac{5}{8}$ to a decimal, you should:',
              options: ['divide $5$ by $8$', 'divide $8$ by $5$', 'multiply $5$ by $8$', 'subtract $5$ from $8$'],
              correctAnswer: 0,
              explanation: 'The fraction bar means divide top by bottom: $\\frac{5}{8} = 5 \\div 8 = 0.625$.',
            },
            {
              question: 'Which fraction is already set up to convert without any division?',
              options: ['$\\frac{23}{100}$', '$\\frac{5}{8}$', '$\\frac{2}{3}$', '$\\frac{4}{7}$'],
              correctAnswer: 0,
              explanation: 'When the denominator is a power of $10$, just place the digits: $\\frac{23}{100} = 0.23$. The others need long division.',
            },
          ],
        },
      },
      {
        id: 'fdc2-shortcut',
        type: 'text' as const,
        content: `## The "Build to a Power of 10" Trick

Sometimes you can rewrite a fraction with a denominator of $10$, $100$, or $1000$ instead of doing long division. Multiply the top and bottom by the **same** number:

$$\\frac{3}{25} = \\frac{3 \\times 4}{25 \\times 4} = \\frac{12}{100} = 0.12$$

$$\\frac{7}{20} = \\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100} = 0.35$$

This works whenever the denominator divides evenly into a power of $10$ (that is, when it only has $2$'s and $5$'s as prime factors). For example, $\\dfrac{9}{20} = \\dfrac{45}{100} = 0.45$.

> ⚠️ You must multiply **top and bottom by the same number**, or you change the value. $\\dfrac{3}{25}$ and $\\dfrac{12}{100}$ are equal; $\\dfrac{3}{25}$ and $\\dfrac{12}{25}$ are not.`,
      },
      {
        id: 'fdc2-drill',
        type: 'input-boxes' as const,
        content: `**Convert to a Decimal** 🧮

Divide top by bottom (or build to a power of $10$). Each of these terminates.

**1)** $\\dfrac{1}{4} = \\,?$
**2)** $\\dfrac{7}{8} = \\,?$
**3)** $\\dfrac{3}{5} = \\,?$
**4)** $\\dfrac{11}{20} = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['0.25', '0.875', '0.6', '0.55'],
          hint1: '$1 \\div 4 = 0.25$.',
          hint2: '$7 \\div 8 = 0.875$.',
          hint3: '$3 \\div 5 = 0.6$, and $\\frac{11}{20} = \\frac{55}{100} = 0.55$.',
          explanation: '1) $\\frac{1}{4}=0.25$.  2) $\\frac{7}{8}=0.875$.  3) $\\frac{3}{5}=0.6$.  4) $\\frac{11}{20}=\\frac{55}{100}=0.55$.',
        },
      },
      {
        id: 'fdc2-repeating',
        type: 'text' as const,
        content: `## When the Division Repeats

If the remainder never reaches $0$, the decimal repeats. Convert $\\dfrac{2}{3}$:

$$2 \\div 3 = 0.6666\\ldots = 0.\\overline{6}$$

Every step gives a remainder of $2$ again, so the $6$ repeats forever.

Convert $\\dfrac{5}{6}$: dividing gives $0.8333\\ldots$, where only the $3$ repeats:
$$\\frac{5}{6} = 0.8\\overline{3}$$

> 💡 **Watch the remainders.** Once a remainder *repeats*, the digits start repeating too — that's your signal to stop and draw the bar.`,
      },
      {
        id: 'fdc2-rep-drill',
        type: 'input-boxes' as const,
        content: `**Repeating Decimals** 🧮

Convert each fraction to a decimal, rounding to exactly $3$ decimal places — for example, enter $0.333$ for $0.\\overline{3}$.

**1)** $\\dfrac{1}{3} = \\,?$  *(type $0.333$)*
**2)** $\\dfrac{1}{9} = \\,?$  *(type $0.111$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.333', '0.111'],
          hint1: '$1 \\div 3 = 0.3333\\ldots$ — the $3$ repeats.',
          hint2: '$1 \\div 9 = 0.1111\\ldots$ — the $1$ repeats.',
          hint3: 'Both denominators contain the prime $3$, so both decimals repeat forever.',
          explanation: '$\\frac{1}{3} = 0.\\overline{3} \\approx 0.333$ and $\\frac{1}{9} = 0.\\overline{1} \\approx 0.111$. The single digit repeats endlessly.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'fraction-decimal-conversions',
    sections: [
      {
        id: 'fdc3-intro',
        type: 'text' as const,
        content: `# 🔢 Fraction & Decimal Conversions

**Part 3 of 5 — Terminating Decimal → Fraction**

---

> 🔑 **The Idea:** Read the decimal out loud. The *last* place value gives you the denominator; the digits give you the numerator. Then **simplify**.`,
      },
      {
        id: 'fdc3-method',
        type: 'text' as const,
        content: `## Place Value → Fraction → Simplify

**Three steps** to turn a terminating decimal into a fraction:

1. **Write the digits** (after the point) as the numerator.
2. **Use the last place value** as the denominator ($10$, $100$, $1000$, …).
3. **Simplify** by dividing top and bottom by their greatest common factor (GCF).

### Worked Example: $0.6$

The last digit is in the **tenths** place, so:
$$0.6 = \\frac{6}{10} = \\frac{6 \\div 2}{10 \\div 2} = \\frac{3}{5}$$

### Worked Example: $0.48$

The last digit is in the **hundredths** place, so:
$$0.48 = \\frac{48}{100} = \\frac{48 \\div 4}{100 \\div 4} = \\frac{12}{25}$$

> ⚠️ **Always simplify.** $\\dfrac{6}{10}$ is correct but not finished — the fully reduced answer is $\\dfrac{3}{5}$. Divide top and bottom by their GCF.`,
      },
      {
        id: 'fdc3-denom-check',
        type: 'dropdown-select' as const,
        content: `**Pick the Starting Fraction** 🔽

Before simplifying, choose the place-value fraction for each decimal.`,
        exercise: {
          dropdowns: [
            { label: '$0.9 = $', options: ['$\\frac{9}{10}$', '$\\frac{9}{100}$', '$\\frac{9}{1}$', '$\\frac{1}{9}$'] },
            { label: '$0.07 = $', options: ['$\\frac{7}{100}$', '$\\frac{7}{10}$', '$\\frac{7}{1000}$', '$\\frac{70}{100}$'] },
            { label: '$0.125 = $', options: ['$\\frac{125}{1000}$', '$\\frac{125}{100}$', '$\\frac{125}{10}$', '$\\frac{12.5}{100}$'] },
          ],
          correctAnswers: ['$\\frac{9}{10}$', '$\\frac{7}{100}$', '$\\frac{125}{1000}$'],
          hint1: 'One digit after the point → denominator $10$.',
          hint2: 'Two digits after the point → denominator $100$. Keep the leading zero in the numerator only as a placeholder; $0.07 = \\frac{7}{100}$.',
          hint3: 'Three digits after the point → denominator $1000$.',
          explanation: '$0.9 = \\frac{9}{10}$, $0.07 = \\frac{7}{100}$, $0.125 = \\frac{125}{1000}$. The number of decimal digits sets the denominator before you simplify.',
        },
      },
      {
        id: 'fdc3-watchzeros',
        type: 'text' as const,
        content: `## Watch the Zeros

The place-value step trips people up with zeros. Two rules keep you safe:

- A **leading zero inside the decimal** still counts as a place. $0.07$ has two decimal digits, so the denominator is $100$: $0.07 = \\dfrac{7}{100}$, **not** $\\dfrac{7}{10}$.
- A **trailing zero** doesn't change the value. $0.40 = \\dfrac{40}{100} = \\dfrac{2}{5}$, the same as $0.4 = \\dfrac{4}{10} = \\dfrac{2}{5}$.

> ⚠️ Count every digit *after* the point — including zeros — to choose the right denominator. Then simplify.`,
      },
      {
        id: 'fdc3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write $0.35$ as a fraction in lowest terms.',
              options: ['$\\frac{7}{20}$', '$\\frac{35}{100}$', '$\\frac{7}{10}$', '$\\frac{35}{10}$'],
              correctAnswer: 0,
              explanation: '$0.35 = \\frac{35}{100}$. GCF of $35$ and $100$ is $5$: $\\frac{35 \\div 5}{100 \\div 5} = \\frac{7}{20}$.',
            },
            {
              question: 'Which decimal equals $\\frac{3}{5}$?',
              options: ['$0.6$', '$0.35$', '$0.53$', '$0.06$'],
              correctAnswer: 0,
              explanation: '$\\frac{3}{5} = \\frac{6}{10} = 0.6$. (Or divide: $3 \\div 5 = 0.6$.)',
            },
          ],
        },
      },
      {
        id: 'fdc3-simplify',
        type: 'text' as const,
        content: `## Finishing the Job: Simplifying

After writing the place-value fraction, reduce it.

### Worked Example: $0.125$

$$0.125 = \\frac{125}{1000}$$

The GCF of $125$ and $1000$ is $125$:
$$\\frac{125 \\div 125}{1000 \\div 125} = \\frac{1}{8}$$

So $0.125 = \\dfrac{1}{8}$. ✓ (This matches the table you saw in Part 2.)

### Mixed numbers

If there's a whole-number part, keep it out front. $2.75 = 2\\dfrac{75}{100} = 2\\dfrac{3}{4}$, or as an improper fraction $\\dfrac{11}{4}$.

> 💡 If you can't spot the GCF at once, reduce in stages: $\\dfrac{48}{100} \\to \\dfrac{24}{50} \\to \\dfrac{12}{25}$. Halving twice gets you there.`,
      },
      {
        id: 'fdc3-drill',
        type: 'input-boxes' as const,
        content: `**Decimal → Fraction** 🧮

Convert each terminating decimal to a fraction in **lowest terms**. Type fractions like $3/5$.

**1)** $0.4 = \\,?$
**2)** $0.75 = \\,?$
**3)** $0.05 = \\,?$
**4)** $0.16 = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2/5', '3/4', '1/20', '4/25'],
          hint1: '$0.4 = \\frac{4}{10}$; divide top and bottom by $2$ to get $\\frac{2}{5}$.',
          hint2: '$0.75 = \\frac{75}{100}$; the GCF is $25$, giving $\\frac{3}{4}$.',
          hint3: '$0.05 = \\frac{5}{100} = \\frac{1}{20}$, and $0.16 = \\frac{16}{100} = \\frac{4}{25}$.',
          explanation: '1) $\\frac{4}{10}=\\frac{2}{5}$.  2) $\\frac{75}{100}=\\frac{3}{4}$.  3) $\\frac{5}{100}=\\frac{1}{20}$.  4) $\\frac{16}{100}=\\frac{4}{25}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'fraction-decimal-conversions',
    sections: [
      {
        id: 'fdc4-intro',
        type: 'text' as const,
        content: `# 🔢 Fraction & Decimal Conversions

**Part 4 of 5 — Repeating Decimal → Fraction**

---

> 🔑 **The Idea:** A repeating decimal hides a clean fraction. We catch it with a little algebra: set the decimal equal to $x$, multiply to shift the repeat, then subtract to make the repeating tails cancel.`,
      },
      {
        id: 'fdc4-method',
        type: 'text' as const,
        content: `## The Subtraction Trick (one repeating digit)

Convert $0.\\overline{4} = 0.4444\\ldots$ to a fraction.

1. **Let** $x = 0.4444\\ldots$
2. **Multiply by $10$** (one repeating digit → shift one place): $10x = 4.4444\\ldots$
3. **Subtract** the first equation from the second — the endless tails cancel:
$$\\begin{aligned} 10x &= 4.4444\\ldots \\\\ -\\;\\;x &= 0.4444\\ldots \\\\ \\hline 9x &= 4 \\end{aligned}$$
4. **Solve:** $x = \\dfrac{4}{9}$.

So $0.\\overline{4} = \\dfrac{4}{9}$. ✓

> 🔑 **Pattern for a single repeating digit:** the fraction is just that digit over $9$. $0.\\overline{1} = \\frac{1}{9}$, $0.\\overline{2} = \\frac{2}{9}$, … , $0.\\overline{8} = \\frac{8}{9}$.`,
      },
      {
        id: 'fdc4-pattern-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the subtraction trick for a single repeating digit, what do you multiply $x$ by?',
              options: ['$10$', '$100$', '$9$', '$2$'],
              correctAnswer: 0,
              explanation: 'One repeating digit means you shift one place, so multiply by $10$. The subtraction then leaves $9x = $ (the digit).',
            },
            {
              question: 'Using the over-9 pattern, $0.\\overline{7} = $',
              options: ['$\\frac{7}{9}$', '$\\frac{7}{10}$', '$\\frac{7}{99}$', '$\\frac{9}{7}$'],
              correctAnswer: 0,
              explanation: 'A single repeating digit $d$ gives $\\frac{d}{9}$, so $0.\\overline{7} = \\frac{7}{9}$.',
            },
          ],
        },
      },
      {
        id: 'fdc4-twodigit',
        type: 'text' as const,
        content: `## Two Repeating Digits

When **two** digits repeat, multiply by $100$ instead. Convert $0.\\overline{27} = 0.272727\\ldots$:

1. **Let** $x = 0.272727\\ldots$
2. **Multiply by $100$** (two repeating digits → shift two places): $100x = 27.272727\\ldots$
3. **Subtract:**
$$\\begin{aligned} 100x &= 27.2727\\ldots \\\\ -\\;\\;\\;x &= \\;\\,0.2727\\ldots \\\\ \\hline 99x &= 27 \\end{aligned}$$
4. **Solve and simplify:** $x = \\dfrac{27}{99} = \\dfrac{27 \\div 9}{99 \\div 9} = \\dfrac{3}{11}$.

> 🔑 **Pattern:** one repeating digit → denominator $9$; two repeating digits → denominator $99$; three → $999$. Then simplify. So $0.\\overline{27} = \\frac{27}{99} = \\frac{3}{11}$.`,
      },
      {
        id: 'fdc4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Equation** 🔽

You're converting $0.\\overline{6}$ to a fraction. Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'Start by letting:', options: ['$x = 0.6666\\ldots$', '$x = 6$', '$x = 0.6$', '$10x = 0.6$'] },
            { label: 'Multiply both sides by:', options: ['$10$', '$100$', '$6$', '$9$'] },
            { label: 'After subtracting $x$:', options: ['$9x = 6$', '$10x = 6$', '$9x = 0.6$', '$x = 6$'] },
            { label: 'Final simplified fraction:', options: ['$\\frac{2}{3}$', '$\\frac{6}{9}$', '$\\frac{3}{5}$', '$\\frac{6}{10}$'] },
          ],
          correctAnswers: ['$x = 0.6666\\ldots$', '$10$', '$9x = 6$', '$\\frac{2}{3}$'],
          hint1: 'Name the whole repeating decimal $x = 0.6666\\ldots$',
          hint2: 'One repeating digit → multiply by $10$, giving $10x = 6.6666\\ldots$',
          hint3: 'Subtracting cancels the tails: $10x - x = 9x = 6$, so $x = \\frac{6}{9} = \\frac{2}{3}$.',
          explanation: '$x = 0.\\overline{6}$, $10x = 6.\\overline{6}$, subtract to get $9x = 6$, so $x = \\frac{6}{9} = \\frac{2}{3}$.',
        },
      },
      {
        id: 'fdc4-shortcut',
        type: 'text' as const,
        content: `## The Fast Shortcut (use after you understand the why)

Once you trust the algebra, you can skip straight to the answer for a decimal where the **whole part after the point repeats**:

$$\\text{repeating block over a string of 9's, one 9 per repeating digit, then simplify}$$

| Decimal | Block / 9's | Simplified |
|---------|-------------|------------|
| $0.\\overline{2}$ | $\\frac{2}{9}$ | $\\frac{2}{9}$ |
| $0.\\overline{9}$ | $\\frac{9}{9}$ | $1$ |
| $0.\\overline{45}$ | $\\frac{45}{99}$ | $\\frac{5}{11}$ |
| $0.\\overline{12}$ | $\\frac{12}{99}$ | $\\frac{4}{33}$ |

> ⚠️ Count the 9's carefully: it's **one 9 per repeating digit**, not one 9 total. $0.\\overline{45}$ has *two* repeating digits, so it's $\\frac{45}{99}$, not $\\frac{45}{9}$.`,
      },
      {
        id: 'fdc4-drill',
        type: 'input-boxes' as const,
        content: `**Repeating → Fraction** 🧮

Convert each repeating decimal to a fraction in **lowest terms**. Type fractions like $1/3$.

**1)** $0.\\overline{8} = \\,?$  *(one repeating digit)*
**2)** $0.\\overline{3} = \\,?$
**3)** $0.\\overline{18} = \\,?$  *(two repeating digits)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/9', '1/3', '2/11'],
          hint1: 'One repeating digit → over $9$: $0.\\overline{8} = \\frac{8}{9}$ (already lowest terms).',
          hint2: '$0.\\overline{3} = \\frac{3}{9} = \\frac{1}{3}$.',
          hint3: 'Two repeating digits → over $99$: $0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$ (divide top and bottom by $9$).',
          explanation: '1) $\\frac{8}{9}$.  2) $\\frac{3}{9}=\\frac{1}{3}$.  3) $\\frac{18}{99}=\\frac{2}{11}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'fraction-decimal-conversions',
    sections: [
      {
        id: 'fdc5-intro',
        type: 'text' as const,
        content: `# 🔢 Fraction & Decimal Conversions

**Part 5 of 5 — Comparing, Ordering & Mastery Check**

---

You can now go both directions: fraction → decimal (divide) and decimal → fraction (place value or the subtraction trick). Let's use that skill to **compare** numbers and then prove mastery.`,
      },
      {
        id: 'fdc5-compare',
        type: 'text' as const,
        content: `## Comparing Fractions and Decimals

It's hard to compare $\\dfrac{5}{8}$ and $0.6$ in different forms. **Convert to one form** — usually decimals — and compare digit by digit.

$$\\frac{5}{8} = 0.625 \\qquad\\text{vs.}\\qquad 0.6 = 0.600$$

Line up the places: $0.625 > 0.600$, so $\\dfrac{5}{8} > 0.6$.

### Worked Example: order $\\dfrac{3}{4},\\; 0.7,\\; \\dfrac{2}{3}$

Convert each to a decimal:
$$\\frac{3}{4} = 0.75 \\qquad 0.7 = 0.700 \\qquad \\frac{2}{3} = 0.6\\overline{6} \\approx 0.667$$

Least to greatest: $\\dfrac{2}{3} \\,(0.667) < 0.7 < \\dfrac{3}{4}\\,(0.75)$.

> 💡 **Tip:** Give every number the *same number of decimal places* (pad with zeros) before you compare. $0.6$ becomes $0.600$ — now it's easy to see $0.600 < 0.625$.`,
      },
      {
        id: 'fdc5-compare-check',
        type: 'dropdown-select' as const,
        content: `**Compare Them** 🔽

Convert to decimals in your head (or on paper), then pick the correct symbol.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{1}{2} \\;\\rule{1em}{0.4pt}\\; 0.4$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.75 \\;\\rule{1em}{0.4pt}\\; \\frac{3}{4}$', options: ['$=$', '$>$', '$<$'] },
            { label: '$\\frac{2}{5} \\;\\rule{1em}{0.4pt}\\; 0.45$', options: ['$<$', '$>$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$=$', '$<$'],
          hint1: '$\\frac{1}{2} = 0.5$, and $0.5 > 0.4$.',
          hint2: '$\\frac{3}{4} = 0.75$ exactly, so the two sides are equal.',
          hint3: '$\\frac{2}{5} = 0.4$, and $0.40 < 0.45$.',
          explanation: '$\\frac{1}{2}=0.5>0.4$. $0.75=\\frac{3}{4}$. $\\frac{2}{5}=0.4<0.45$. Converting to a common (decimal) form makes the comparison clear.',
        },
      },
      {
        id: 'fdc5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Fraction → decimal | divide top by bottom: $\\frac{a}{b} = a \\div b$ |
| Build to power of 10 | scale top & bottom so denominator is $10, 100, 1000$ |
| Terminating decimal → fraction | digits over last place value, then **simplify** |
| Single repeating digit $\\to$ fraction | digit over $9$ (e.g. $0.\\overline{5} = \\frac{5}{9}$) |
| Two repeating digits $\\to$ fraction | block over $99$, then simplify |
| Compare forms | convert all to decimals, pad with zeros |

> ⚠️ Two reminders: a fraction-to-decimal answer must use **division** (top ÷ bottom, not bottom ÷ top), and a decimal-to-fraction answer is not done until it's in **lowest terms**.`,
      },
      {
        id: 'fdc5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list is ordered from LEAST to GREATEST?',
              options: ['$0.3,\\; \\frac{2}{5},\\; \\frac{1}{2}$', '$\\frac{1}{2},\\; \\frac{2}{5},\\; 0.3$', '$\\frac{2}{5},\\; 0.3,\\; \\frac{1}{2}$', '$0.3,\\; \\frac{1}{2},\\; \\frac{2}{5}$'],
              correctAnswer: 0,
              explanation: 'Convert: $\\frac{2}{5}=0.4$ and $\\frac{1}{2}=0.5$. So the values are $0.3, 0.4, 0.5$ — already least to greatest in the first option.',
            },
            {
              question: 'Convert $0.\\overline{12}$ to a fraction in lowest terms.',
              options: ['$\\frac{4}{33}$', '$\\frac{12}{99}$', '$\\frac{6}{50}$', '$\\frac{12}{100}$'],
              correctAnswer: 0,
              explanation: 'Two repeating digits: $0.\\overline{12} = \\frac{12}{99}$. GCF of $12$ and $99$ is $3$: $\\frac{12 \\div 3}{99 \\div 3} = \\frac{4}{33}$.',
            },
          ],
        },
      },
      {
        id: 'fdc5-readycheck',
        type: 'text' as const,
        content: `## Almost There — Final Reminders

Before the exit quiz, run through the three skills one last time:

- **Fraction → decimal:** divide **top ÷ bottom** (not the other way around).
- **Terminating decimal → fraction:** digits over the last place value, then **reduce to lowest terms**.
- **Repeating decimal → fraction:** repeating block over a string of $9$'s (one $9$ per repeating digit), then **reduce**.

> 🔑 If you can do those three moves, you can convert any number between the two forms. Take the quiz below to lock it in.`,
      },
      {
        id: 'fdc5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{7}{8}$ as a decimal?',
              options: ['$0.875$', '$0.78$', '$0.87$', '$1.142$'],
              correctAnswer: 0,
              explanation: '$7 \\div 8 = 0.875$ (a terminating decimal, since $8 = 2^3$).',
            },
            {
              question: 'Write $0.24$ as a fraction in lowest terms.',
              options: ['$\\frac{6}{25}$', '$\\frac{24}{100}$', '$\\frac{12}{50}$', '$\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation: '$0.24 = \\frac{24}{100}$. GCF of $24$ and $100$ is $4$: $\\frac{24 \\div 4}{100 \\div 4} = \\frac{6}{25}$.',
            },
            {
              question: 'Which fraction equals the repeating decimal $0.\\overline{5}$?',
              options: ['$\\frac{5}{9}$', '$\\frac{1}{2}$', '$\\frac{5}{10}$', '$\\frac{5}{99}$'],
              correctAnswer: 0,
              explanation: 'A single repeating digit $d$ gives $\\frac{d}{9}$, so $0.\\overline{5} = \\frac{5}{9}$. (Note $\\frac{1}{2} = 0.5$ exactly — that does NOT repeat.)',
            },
          ],
        },
      },
    ],
  },
]
