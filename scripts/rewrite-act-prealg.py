#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT Pre-Algebra Basics.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-pre-algebra-basics-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-pre-algebra-basics-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Number Properties ───────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actPreAlgebraPart1Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa1-intro',
      type: 'text' as const,
      content: `
# 🔢 Number Properties

**Part 1 of 7 — Factors, Multiples, Primes & Divisibility Rules**

Pre-Algebra questions make up roughly **20–25 %** of the ACT Math section. Mastering basic number properties gives you quick, reliable points.

| Concept | Definition |
|---------|-----------|
| Factor | A number that divides evenly into another |
| Multiple | The product of a number and any positive integer |
| Prime | A number greater than 1 with exactly two factors: 1 and itself |
| Composite | A number greater than 1 that is **not** prime |

**First 10 primes:** $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$

> Remember: $1$ is **neither** prime nor composite, and $2$ is the only even prime.
      `
    },
    {
      id: 'act-pa1-divisibility',
      type: 'text' as const,
      content: `
## Divisibility Rules

Quick divisibility tests save time on the ACT:

| Divisor | Rule | Example |
|---------|------|---------|
| 2 | Last digit is even | $438$ → last digit $8$ ✓ |
| 3 | Sum of digits divisible by 3 | $627$: $6+2+7 = 15$ ✓ |
| 4 | Last two digits form a number divisible by 4 | $316$: $16 \\\\div 4 = 4$ ✓ |
| 5 | Last digit is 0 or 5 | $745$ ✓ |
| 6 | Divisible by both 2 and 3 | $312$: even and $3+1+2=6$ ✓ |
| 9 | Sum of digits divisible by 9 | $729$: $7+2+9 = 18$ ✓ |

**Example 1:** Is $891$ divisible by $9$?

$$8 + 9 + 1 = 18 \\\\quad\\\\text{and}\\\\quad 18 \\\\div 9 = 2 \\\\;✓$$

Yes — $891 = 9 \\\\times 99$.
      `
    },
    {
      id: 'act-pa1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factors & Primes** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a prime number?',
            options: ['$21$', '$27$', '$29$', '$33$'],
            correctAnswer: 2,
            explanation: '$21 = 3 \\\\times 7$, $27 = 3^3$, $33 = 3 \\\\times 11$. Only $29$ has no factors besides $1$ and itself.'
          },
          {
            question: 'How many factors does $36$ have?',
            options: ['$6$', '$7$', '$8$', '$9$'],
            correctAnswer: 3,
            explanation: '$36 = 2^2 \\\\times 3^2$. Number of factors $= (2+1)(2+1) = 9$. They are $1, 2, 3, 4, 6, 9, 12, 18, 36$.'
          }
        ]
      }
    },
    {
      id: 'act-pa1-lcmgcf',
      type: 'text' as const,
      content: `
## LCM & GCF

**Greatest Common Factor (GCF):** the largest number that divides two or more numbers evenly.

**Least Common Multiple (LCM):** the smallest positive number that is a multiple of two or more numbers.

**Example 2 — GCF:** Find $\\\\text{GCF}(24, 36)$.

$$24 = 2^3 \\\\times 3 \\\\qquad 36 = 2^2 \\\\times 3^2$$

Take the **lower** power of each common prime: $2^2 \\\\times 3 = 12$.

**Example 3 — LCM:** Find $\\\\text{LCM}(8, 12)$.

$$8 = 2^3 \\\\qquad 12 = 2^2 \\\\times 3$$

Take the **higher** power of every prime: $2^3 \\\\times 3 = 24$.

**Shortcut:** $\\\\text{LCM}(a,b) = \\\\frac{a \\\\times b}{\\\\text{GCF}(a,b)}$. So $\\\\text{LCM}(8,12) = \\\\frac{96}{4} = 24$ ✓
      `
    },
    {
      id: 'act-pa1-input1',
      type: 'input-boxes' as const,
      content: `
**Number Properties Practice** 🧮

1) What is $\\\\text{GCF}(18, 30)$?
2) What is $\\\\text{LCM}(6, 10)$?
3) How many prime numbers are between 10 and 30?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '30', '6'],
        hint1: '$18 = 2 \\\\times 3^2$ and $30 = 2 \\\\times 3 \\\\times 5$. Take the lower powers of shared primes.',
        hint2: '$6 = 2 \\\\times 3$ and $10 = 2 \\\\times 5$. Take the higher powers of all primes.',
        hint3: 'List them: $11, 13, 17, 19, 23, 29$.',
        explanation: '$\\\\text{GCF}(18,30) = 2 \\\\times 3 = 6$. $\\\\text{LCM}(6,10) = 2 \\\\times 3 \\\\times 5 = 30$. Primes between 10 and 30: $11,13,17,19,23,29$ — that is $6$.'
      }
    },
    {
      id: 'act-pa1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The number 1 is …',
            options: ['prime', 'composite', 'neither prime nor composite']
          },
          {
            label: 'A number divisible by both 2 and 3 is also divisible by …',
            options: ['5', '6', '8', '12']
          },
          {
            label: '$\\\\text{GCF}(a, b)$ uses the ______ power of common prime factors.',
            options: ['higher', 'lower', 'average', 'sum']
          }
        ],
        correctAnswers: ['neither prime nor composite', '6', 'lower'],
        hint1: 'By convention, 1 is excluded from both categories.',
        hint2: 'If a number has factors of 2 and 3, then $2 \\\\times 3 = 6$ divides it too.',
        hint3: 'GCF picks the smaller exponent; LCM picks the larger.',
        explanation: '$1$ is neither prime nor composite. Divisible by 2 and 3 means divisible by $6$. GCF uses the lower power.'
      }
    },
    {
      id: 'act-pa1-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the LCM of 12 and 18?',
            options: ['$6$', '$36$', '$72$', '$216$'],
            correctAnswer: 1,
            explanation: '$12 = 2^2 \\\\times 3$ and $18 = 2 \\\\times 3^2$. LCM $= 2^2 \\\\times 3^2 = 36$.'
          },
          {
            question: 'If $n$ is a prime number greater than 2, which statement must be true?',
            options: ['$n$ is even', '$n$ is odd', '$n$ is divisible by 3', '$n$ ends in 7'],
            correctAnswer: 1,
            explanation: 'Every even number greater than 2 is divisible by 2 and thus not prime. So every prime greater than 2 is odd.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Fractions & Decimals ────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actPreAlgebraPart2Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa2-intro',
      type: 'text' as const,
      content: `
# 🍕 Fractions & Decimals

**Part 2 of 7 — Operations, Converting & Ordering**

Fraction and decimal arithmetic appears on virtually every ACT. You need to add, subtract, multiply, and divide with confidence.

**Key fraction rules:**

| Operation | Rule |
|-----------|------|
| Add / Subtract | Common denominator: $\\\\frac{a}{b} \\\\pm \\\\frac{c}{d} = \\\\frac{ad \\\\pm bc}{bd}$ |
| Multiply | Straight across: $\\\\frac{a}{b} \\\\times \\\\frac{c}{d} = \\\\frac{ac}{bd}$ |
| Divide | Flip and multiply: $\\\\frac{a}{b} \\\\div \\\\frac{c}{d} = \\\\frac{a}{b} \\\\times \\\\frac{d}{c}$ |

Always **simplify** your final answer.
      `
    },
    {
      id: 'act-pa2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Addition:** $\\\\frac{2}{5} + \\\\frac{1}{3}$

$$\\\\frac{2}{5} + \\\\frac{1}{3} = \\\\frac{6}{15} + \\\\frac{5}{15} = \\\\frac{11}{15}$$

**Example 2 — Subtraction with mixed numbers:** $3\\\\frac{1}{4} - 1\\\\frac{2}{3}$

Convert to improper fractions:

$$\\\\frac{13}{4} - \\\\frac{5}{3} = \\\\frac{39}{12} - \\\\frac{20}{12} = \\\\frac{19}{12} = 1\\\\frac{7}{12}$$

**Example 3 — Multiplication:** $\\\\frac{3}{8} \\\\times \\\\frac{4}{9}$

$$\\\\frac{3}{8} \\\\times \\\\frac{4}{9} = \\\\frac{12}{72} = \\\\frac{1}{6}$$

**Example 4 — Converting:** $0.375 = \\\\frac{375}{1000} = \\\\frac{3}{8}$
      `
    },
    {
      id: 'act-pa2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Fraction Operations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\\\frac{3}{4} \\\\div \\\\frac{2}{5}$?',
            options: ['$\\\\frac{6}{20}$', '$\\\\frac{15}{8}$', '$\\\\frac{3}{10}$', '$\\\\frac{8}{15}$'],
            correctAnswer: 1,
            explanation: 'Flip and multiply: $\\\\frac{3}{4} \\\\times \\\\frac{5}{2} = \\\\frac{15}{8}$.'
          },
          {
            question: 'Which fraction is equivalent to $0.625$?',
            options: ['$\\\\frac{1}{2}$', '$\\\\frac{5}{8}$', '$\\\\frac{3}{4}$', '$\\\\frac{7}{10}$'],
            correctAnswer: 1,
            explanation: '$0.625 = \\\\frac{625}{1000} = \\\\frac{5}{8}$.'
          }
        ]
      }
    },
    {
      id: 'act-pa2-ordering',
      type: 'text' as const,
      content: `
## Ordering & Comparing

To compare fractions, use one of these methods:

1. **Common denominator:** Convert all fractions to the same denominator and compare numerators.
2. **Cross-multiply:** To compare $\\\\frac{a}{b}$ and $\\\\frac{c}{d}$, check if $ad > bc$.
3. **Convert to decimals.**

**Example 5:** Order from least to greatest: $\\\\frac{3}{5},\\\\; \\\\frac{2}{3},\\\\; \\\\frac{7}{10}$

Convert to decimals: $0.60,\\\\; 0.\\\\overline{6},\\\\; 0.70$

$$\\\\frac{3}{5} < \\\\frac{2}{3} < \\\\frac{7}{10}$$

**Mixed Number Tip:** To convert a mixed number $a\\\\frac{b}{c}$ to an improper fraction: $\\\\frac{ac + b}{c}$.
      `
    },
    {
      id: 'act-pa2-input1',
      type: 'input-boxes' as const,
      content: `
**Fraction & Decimal Practice** 🧮

1) Simplify $\\\\frac{2}{3} + \\\\frac{5}{6}$. Enter the answer as a fraction *(e.g. 3/2)*.
2) What is $\\\\frac{7}{8}$ as a decimal?
3) Convert the mixed number $2\\\\frac{3}{5}$ to an improper fraction. Enter the numerator.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3/2', '0.875', '13'],
        hint1: 'Common denominator is 6: $\\\\frac{4}{6} + \\\\frac{5}{6} = \\\\frac{9}{6}$. Simplify.',
        hint2: 'Divide: $7 \\\\div 8 = 0.875$.',
        hint3: '$2\\\\frac{3}{5} = \\\\frac{2 \\\\times 5 + 3}{5} = \\\\frac{13}{5}$.',
        explanation: '$\\\\frac{2}{3}+\\\\frac{5}{6} = \\\\frac{4}{6}+\\\\frac{5}{6} = \\\\frac{9}{6} = \\\\frac{3}{2}$. $7 \\\\div 8 = 0.875$. $2\\\\frac{3}{5} = \\\\frac{13}{5}$ so the numerator is $13$.'
      }
    },
    {
      id: 'act-pa2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To add fractions with different denominators, you first need a …',
            options: ['common numerator', 'common denominator', 'prime factorization', 'decimal form']
          },
          {
            label: 'To divide by a fraction, you ______ the second fraction and multiply.',
            options: ['double', 'square', 'flip', 'subtract']
          },
          {
            label: '$\\\\frac{0}{5}$ equals …',
            options: ['0', '5', 'undefined', '1']
          }
        ],
        correctAnswers: ['common denominator', 'flip', '0'],
        hint1: 'You can only add fractions when the bottom numbers match.',
        hint2: 'Dividing by a fraction is multiplying by its reciprocal.',
        hint3: 'Zero divided by any nonzero number is zero.',
        explanation: 'Add/subtract fractions using a common denominator. Divide by flipping (reciprocal). $\\\\frac{0}{5} = 0$.'
      }
    },
    {
      id: 'act-pa2-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A recipe calls for $2\\\\frac{1}{3}$ cups of flour. If you want to make $1\\\\frac{1}{2}$ times the recipe, how many cups of flour do you need?',
            options: ['$3\\\\frac{1}{6}$', '$3\\\\frac{1}{2}$', '$3\\\\frac{5}{6}$', '$4\\\\frac{1}{6}$'],
            correctAnswer: 1,
            explanation: '$2\\\\frac{1}{3} \\\\times 1\\\\frac{1}{2} = \\\\frac{7}{3} \\\\times \\\\frac{3}{2} = \\\\frac{21}{6} = \\\\frac{7}{2} = 3\\\\frac{1}{2}$.'
          },
          {
            question: 'Which of the following is greatest?',
            options: ['$\\\\frac{5}{9}$', '$0.54$', '$\\\\frac{11}{20}$', '$0.56$'],
            correctAnswer: 3,
            explanation: 'Converting: $\\\\frac{5}{9} \\\\approx 0.556$, $0.54$, $\\\\frac{11}{20} = 0.55$, $0.56$. The greatest is $0.56$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Percents ────────────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actPreAlgebraPart3Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa3-intro',
      type: 'text' as const,
      content: `
# 💯 Percents

**Part 3 of 7 — Percent of a Number, Increase/Decrease, Tax/Tip/Discount**

"Percent" means "per hundred." So $45\\\\%$ means $\\\\frac{45}{100} = 0.45$.

**Core conversions:**

| From | To | Method |
|------|-----|--------|
| Percent → Decimal | $45\\\\% = 0.45$ | Divide by 100 |
| Decimal → Percent | $0.08 = 8\\\\%$ | Multiply by 100 |
| Fraction → Percent | $\\\\frac{3}{4} = 75\\\\%$ | Divide then multiply by 100 |

**Percent of a number:**

$$\\\\text{Part} = \\\\text{Percent} \\\\times \\\\text{Whole}$$

**Example 1:** What is $30\\\\%$ of $250$?

$$0.30 \\\\times 250 = 75$$
      `
    },
    {
      id: 'act-pa3-change',
      type: 'text' as const,
      content: `
## Percent Increase & Decrease

$$\\\\text{Percent Change} = \\\\frac{|\\\\text{New} - \\\\text{Original}|}{\\\\text{Original}} \\\\times 100\\\\%$$

**Example 2 — Increase:** A price goes from $\\\\$40$ to $\\\\$52$. What is the percent increase?

$$\\\\frac{52 - 40}{40} \\\\times 100\\\\% = \\\\frac{12}{40} \\\\times 100\\\\% = 30\\\\%$$

**Example 3 — Decrease:** A shirt originally costs $\\\\$80$ and is on sale for $\\\\$60$. What is the percent discount?

$$\\\\frac{80 - 60}{80} \\\\times 100\\\\% = \\\\frac{20}{80} \\\\times 100\\\\% = 25\\\\%$$

**Shortcut:** For a $p\\\\%$ increase, multiply by $(1 + \\\\frac{p}{100})$. For a $p\\\\%$ decrease, multiply by $(1 - \\\\frac{p}{100})$.
      `
    },
    {
      id: 'act-pa3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Percent Calculations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $15\\\\%$ of $200$?',
            options: ['$15$', '$25$', '$30$', '$35$'],
            correctAnswer: 2,
            explanation: '$0.15 \\\\times 200 = 30$.'
          },
          {
            question: 'A population grew from $500$ to $650$. What was the percent increase?',
            options: ['$15\\\\%$', '$23\\\\%$', '$25\\\\%$', '$30\\\\%$'],
            correctAnswer: 3,
            explanation: '$\\\\frac{650 - 500}{500} \\\\times 100\\\\% = \\\\frac{150}{500} \\\\times 100\\\\% = 30\\\\%$.'
          }
        ]
      }
    },
    {
      id: 'act-pa3-taxtip',
      type: 'text' as const,
      content: `
## Tax, Tip & Discount

These are the most common real-world percent problems on the ACT.

**Example 4 — Sales Tax:** A jacket costs $\\\\$65$ and the sales tax is $8\\\\%$. What is the total?

$$\\\\text{Tax} = 0.08 \\\\times 65 = 5.20 \\\\implies \\\\text{Total} = 65 + 5.20 = \\\\$70.20$$

Or use the multiplier: $65 \\\\times 1.08 = \\\\$70.20$.

**Example 5 — Tip:** A meal costs $\\\\$42$. You leave a $20\\\\%$ tip. Total cost?

$$42 \\\\times 1.20 = \\\\$50.40$$

**Example 6 — Discount:** A $\\\\$120$ item is $35\\\\%$ off. Sale price?

$$120 \\\\times (1 - 0.35) = 120 \\\\times 0.65 = \\\\$78$$
      `
    },
    {
      id: 'act-pa3-input1',
      type: 'input-boxes' as const,
      content: `
**Percent Practice** 🧮

1) What is $40\\\\%$ of $90$?
2) A $\\\\$50$ item is $20\\\\%$ off. What is the sale price in dollars?
3) A value increased from $80$ to $100$. What is the percent increase?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '40', '25'],
        hint1: '$0.40 \\\\times 90$.',
        hint2: 'Discount $= 0.20 \\\\times 50 = 10$. Subtract from $50$.',
        hint3: '$\\\\frac{100 - 80}{80} \\\\times 100\\\\%$.',
        explanation: '$0.40 \\\\times 90 = 36$. Sale price $= 50 - 10 = \\\\$40$. Percent increase $= \\\\frac{20}{80} \\\\times 100 = 25\\\\%$.'
      }
    },
    {
      id: 'act-pa3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the total price after an 8% tax, multiply the price by …',
            options: ['$0.08$', '$0.92$', '$1.08$', '$8$']
          },
          {
            label: '$0.04$ expressed as a percent is …',
            options: ['$0.4\\\\%$', '$4\\\\%$', '$40\\\\%$', '$0.04\\\\%$']
          },
          {
            label: 'If an item is 30% off, you pay ______ of the original price.',
            options: ['$30\\\\%$', '$70\\\\%$', '$130\\\\%$', '$0.30$']
          }
        ],
        correctAnswers: ['$1.08$', '$4\\\\%$', '$70\\\\%$'],
        hint1: 'You keep the original price (1.00) and add the tax.',
        hint2: 'Move the decimal two places to the right.',
        hint3: '$100\\\\% - 30\\\\% = 70\\\\%$.',
        explanation: 'Total with 8% tax: multiply by $1.08$. $0.04 = 4\\\\%$. 30% off means you pay $70\\\\%$.'
      }
    },
    {
      id: 'act-pa3-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store marks up a wholesale price of $\\\\$25$ by $60\\\\%$. During a sale the marked price is then reduced by $25\\\\%$. What is the sale price?',
            options: ['$\\\\$25$', '$\\\\$27$', '$\\\\$30$', '$\\\\$35$'],
            correctAnswer: 2,
            explanation: 'Marked price $= 25 \\\\times 1.60 = \\\\$40$. Sale price $= 40 \\\\times 0.75 = \\\\$30$.'
          },
          {
            question: 'If $12$ is $p\\\\%$ of $48$, what is $p$?',
            options: ['$4$', '$15$', '$25$', '$36$'],
            correctAnswer: 2,
            explanation: '$\\\\frac{12}{48} = 0.25 = 25\\\\%$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Ratios & Proportions ────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actPreAlgebraPart4Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ratios & Proportions

**Part 4 of 7 — Setting Up, Cross-Multiplying, Scaling & Unit Rates**

A **ratio** compares two quantities: $a : b$ or $\\\\frac{a}{b}$.

A **proportion** states that two ratios are equal: $\\\\frac{a}{b} = \\\\frac{c}{d}$.

**Cross-multiplication** is the go-to strategy:

$$\\\\frac{a}{b} = \\\\frac{c}{d} \\\\implies ad = bc$$

**Example 1:** If $\\\\frac{3}{5} = \\\\frac{x}{20}$, find $x$.

$$3 \\\\times 20 = 5 \\\\times x \\\\implies 60 = 5x \\\\implies x = 12$$
      `
    },
    {
      id: 'act-pa4-scaling',
      type: 'text' as const,
      content: `
## Scaling & Part-to-Whole

When a ratio is $a : b$, the total parts are $a + b$.

**Example 2:** A class has boys and girls in the ratio $3 : 5$. If there are $40$ students, how many are boys?

Total parts $= 3 + 5 = 8$. Each part $= \\\\frac{40}{8} = 5$.

$$\\\\text{Boys} = 3 \\\\times 5 = 15$$

**Example 3 — Scaling a recipe:** A recipe uses flour and sugar in a $4 : 1$ ratio. If you use $12$ cups of flour, how much sugar?

$$\\\\frac{4}{1} = \\\\frac{12}{x} \\\\implies 4x = 12 \\\\implies x = 3 \\\\text{ cups}$$

**Example 4 — Map scale:** On a map, $1$ inch represents $25$ miles. Two cities are $3.5$ inches apart. Actual distance?

$$3.5 \\\\times 25 = 87.5 \\\\text{ miles}$$
      `
    },
    {
      id: 'act-pa4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Ratios & Proportions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\frac{7}{x} = \\\\frac{21}{15}$, what is $x$?',
            options: ['$3$', '$5$', '$7$', '$9$'],
            correctAnswer: 1,
            explanation: 'Cross-multiply: $7 \\\\times 15 = 21x \\\\implies 105 = 21x \\\\implies x = 5$.'
          },
          {
            question: 'Red and blue marbles are in a $2 : 7$ ratio. If there are $63$ total marbles, how many are red?',
            options: ['$9$', '$14$', '$18$', '$49$'],
            correctAnswer: 1,
            explanation: 'Total parts $= 2 + 7 = 9$. Each part $= 63 \\\\div 9 = 7$. Red $= 2 \\\\times 7 = 14$.'
          }
        ]
      }
    },
    {
      id: 'act-pa4-unitrate',
      type: 'text' as const,
      content: `
## Unit Rates

A **unit rate** expresses a ratio per **one** unit of the second quantity.

**Example 5:** A car travels $210$ miles in $3.5$ hours. What is the speed in mph?

$$\\\\text{Rate} = \\\\frac{210}{3.5} = 60 \\\\text{ mph}$$

**Example 6 — Unit price:** A 12-pack of soda costs $\\\\$4.80$. Price per can?

$$\\\\frac{4.80}{12} = \\\\$0.40 \\\\text{ per can}$$

**Example 7 — Better deal:** Store A sells $5$ lb of apples for $\\\\$6.25$. Store B sells $3$ lb for $\\\\$3.45$. Which is cheaper per pound?

$$A: \\\\frac{6.25}{5} = \\\\$1.25/\\\\text{lb} \\\\qquad B: \\\\frac{3.45}{3} = \\\\$1.15/\\\\text{lb}$$

Store B is cheaper.
      `
    },
    {
      id: 'act-pa4-input1',
      type: 'input-boxes' as const,
      content: `
**Ratio & Rate Practice** 🧮

1) Solve: $\\\\frac{4}{9} = \\\\frac{x}{27}$. What is $x$?
2) A printer prints $120$ pages in $8$ minutes. Pages per minute?
3) Markers and pens are in a $3 : 4$ ratio. If there are $28$ pens, how many markers?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '15', '21'],
        hint1: 'Cross-multiply: $4 \\\\times 27 = 9x$.',
        hint2: '$\\\\frac{120}{8}$.',
        hint3: '$\\\\frac{3}{4} = \\\\frac{m}{28}$, cross-multiply.',
        explanation: '$4 \\\\times 27 = 108 = 9x \\\\implies x = 12$. $120 \\\\div 8 = 15$ pages/min. $\\\\frac{3}{4}=\\\\frac{m}{28} \\\\implies 4m = 84 \\\\implies m = 21$.'
      }
    },
    {
      id: 'act-pa4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve a proportion, the standard strategy is to …',
            options: ['add the fractions', 'cross-multiply', 'find the LCM', 'take the square root']
          },
          {
            label: 'In a ratio $5 : 3$, there are ______ total parts.',
            options: ['$2$', '$5$', '$8$', '$15$']
          },
          {
            label: 'A unit rate always has ______ in the denominator.',
            options: ['$0$', '$1$', '$10$', '$100$']
          }
        ],
        correctAnswers: ['cross-multiply', '$8$', '$1$'],
        hint1: 'Set up $\\\\frac{a}{b} = \\\\frac{c}{d}$ and multiply diagonals.',
        hint2: '$5 + 3 = 8$ total parts.',
        hint3: '"Unit" means one.',
        explanation: 'Cross-multiply to solve proportions. $5 + 3 = 8$ total parts. A unit rate is "per 1" unit.'
      }
    },
    {
      id: 'act-pa4-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A train travels $180$ miles in $2.5$ hours. At the same rate, how far will it travel in $4$ hours?',
            options: ['$240$ miles', '$270$ miles', '$288$ miles', '$320$ miles'],
            correctAnswer: 2,
            explanation: 'Rate $= \\\\frac{180}{2.5} = 72$ mph. Distance $= 72 \\\\times 4 = 288$ miles.'
          },
          {
            question: 'The ratio of cats to dogs in a shelter is $5 : 8$. If there are $40$ dogs, how many animals are there in total?',
            options: ['$55$', '$60$', '$65$', '$75$'],
            correctAnswer: 2,
            explanation: 'Each part $= 40 \\\\div 8 = 5$. Cats $= 5 \\\\times 5 = 25$. Total $= 25 + 40 = 65$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Exponents & Roots ───────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actPreAlgebraPart5Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa5-intro',
      type: 'text' as const,
      content: `
# ⚡ Exponents & Roots

**Part 5 of 7 — Rules of Exponents, Square Roots & Order of Operations**

Exponents appear frequently on the ACT. Know these rules cold:

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\\\cdot a^n = a^{m+n}$ | $2^3 \\\\cdot 2^4 = 2^7 = 128$ |
| Quotient | $\\\\frac{a^m}{a^n} = a^{m-n}$ | $\\\\frac{5^6}{5^2} = 5^4 = 625$ |
| Power of a Power | $(a^m)^n = a^{mn}$ | $(3^2)^3 = 3^6 = 729$ |
| Zero Exponent | $a^0 = 1$ (for $a \\\\neq 0$) | $7^0 = 1$ |
| Negative Exponent | $a^{-n} = \\\\frac{1}{a^n}$ | $4^{-2} = \\\\frac{1}{16}$ |
      `
    },
    {
      id: 'act-pa5-roots',
      type: 'text' as const,
      content: `
## Square Roots & Simplifying

$$\\\\sqrt{a} \\\\text{ is the non-negative number whose square is } a.$$

**Perfect squares to memorise:** $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$

**Simplifying radicals:** Factor out the largest perfect square.

**Example 1:** $\\\\sqrt{72} = \\\\sqrt{36 \\\\cdot 2} = 6\\\\sqrt{2}$

**Example 2:** $\\\\sqrt{50} + \\\\sqrt{18} = 5\\\\sqrt{2} + 3\\\\sqrt{2} = 8\\\\sqrt{2}$

**Example 3:** $\\\\sqrt{12} \\\\cdot \\\\sqrt{3} = \\\\sqrt{36} = 6$

**Key property:** $\\\\sqrt{a \\\\cdot b} = \\\\sqrt{a} \\\\cdot \\\\sqrt{b}$ (for $a, b \\\\geq 0$)
      `
    },
    {
      id: 'act-pa5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Exponents & Roots** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\\\frac{3^5}{3^2}$.',
            options: ['$3^3 = 27$', '$3^7 = 2187$', '$3^{10} = 59049$', '$1^3 = 1$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$.'
          },
          {
            question: 'What is $\\\\sqrt{200}$ in simplified form?',
            options: ['$10\\\\sqrt{2}$', '$2\\\\sqrt{50}$', '$20\\\\sqrt{5}$', '$4\\\\sqrt{5}$'],
            correctAnswer: 0,
            explanation: '$\\\\sqrt{200} = \\\\sqrt{100 \\\\cdot 2} = 10\\\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'act-pa5-pemdas',
      type: 'text' as const,
      content: `
## Order of Operations (PEMDAS)

$$\\\\text{Parentheses} \\\\to \\\\text{Exponents} \\\\to \\\\text{Multiplication/Division} \\\\to \\\\text{Addition/Subtraction}$$

Multiplication and division are done **left to right** (same level). Likewise for addition and subtraction.

**Example 4:** Evaluate $3 + 2 \\\\times 4^2 - 10 \\\\div 5$.

$$= 3 + 2 \\\\times 16 - 10 \\\\div 5$$
$$= 3 + 32 - 2$$
$$= 33$$

**Example 5:** Evaluate $\\\\frac{(6 + 2)^2}{4} - 3^2$.

$$= \\\\frac{8^2}{4} - 9 = \\\\frac{64}{4} - 9 = 16 - 9 = 7$$

**ACT Tip:** Fraction bars act as grouping symbols — evaluate numerator and denominator separately.
      `
    },
    {
      id: 'act-pa5-input1',
      type: 'input-boxes' as const,
      content: `
**Exponents & Roots Practice** 🧮

1) Evaluate: $2^5$
2) Simplify $\\\\sqrt{48}$. Enter in the form $a\\\\sqrt{b}$ *(e.g. 4sqrt3)*.
3) Evaluate: $5 \\\\times 3 - 4^2 + 1$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '4sqrt3', '0'],
        hint1: '$2^5 = 2 \\\\times 2 \\\\times 2 \\\\times 2 \\\\times 2$.',
        hint2: '$48 = 16 \\\\times 3$ and $\\\\sqrt{16} = 4$.',
        hint3: 'PEMDAS: exponents first, then multiply, then add/subtract left to right.',
        explanation: '$2^5 = 32$. $\\\\sqrt{48} = \\\\sqrt{16 \\\\cdot 3} = 4\\\\sqrt{3}$. $5 \\\\times 3 - 16 + 1 = 15 - 16 + 1 = 0$.'
      }
    },
    {
      id: 'act-pa5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$a^0 = $ ______ (for $a \\\\neq 0$)',
            options: ['$0$', '$1$', '$a$', 'undefined']
          },
          {
            label: 'In PEMDAS, multiplication and division are evaluated …',
            options: ['multiplication first', 'division first', 'left to right', 'right to left']
          },
          {
            label: '$\\\\sqrt{a \\\\cdot b} = $ ______',
            options: ['$\\\\sqrt{a} + \\\\sqrt{b}$', '$\\\\sqrt{a} \\\\cdot \\\\sqrt{b}$', '$a\\\\sqrt{b}$', '$\\\\sqrt{a+b}$']
          }
        ],
        correctAnswers: ['$1$', 'left to right', '$\\\\sqrt{a} \\\\cdot \\\\sqrt{b}$'],
        hint1: 'Any nonzero base to the zero power equals 1.',
        hint2: 'Multiplication and division have equal precedence.',
        hint3: 'The product property of radicals.',
        explanation: '$a^0 = 1$. Multiplication and division go left to right. $\\\\sqrt{ab} = \\\\sqrt{a}\\\\sqrt{b}$.'
      }
    },
    {
      id: 'act-pa5-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(-3)^4$?',
            options: ['$-81$', '$-12$', '$12$', '$81$'],
            correctAnswer: 3,
            explanation: '$(-3)^4 = (-3)(-3)(-3)(-3) = 9 \\\\times 9 = 81$. An even exponent makes the result positive.'
          },
          {
            question: 'Evaluate: $\\\\frac{2^3 + 3^2}{5}$',
            options: ['$\\\\frac{11}{5}$', '$\\\\frac{17}{5}$', '$5$', '$\\\\frac{35}{5}$'],
            correctAnswer: 1,
            explanation: '$2^3 + 3^2 = 8 + 9 = 17$. So $\\\\frac{17}{5}$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Basic Statistics ────────────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actPreAlgebraPart6Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa6-intro',
      type: 'text' as const,
      content: `
# 📊 Basic Statistics

**Part 6 of 7 — Mean, Median, Mode, Range & Reading Charts**

The ACT loves simple data-analysis questions. Know these four measures:

| Measure | Definition | Example for $\\\\{2, 3, 3, 7, 10\\\\}$ |
|---------|-----------|------|
| **Mean** | Sum ÷ count | $\\\\frac{2+3+3+7+10}{5} = 5$ |
| **Median** | Middle value (sorted) | $3$ |
| **Mode** | Most frequent value | $3$ |
| **Range** | Max − Min | $10 - 2 = 8$ |

> For an **even** number of data points, the median is the average of the two middle values.
      `
    },
    {
      id: 'act-pa6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Mean:** Test scores: $78, 85, 92, 88, 97$. Find the mean.

$$\\\\text{Mean} = \\\\frac{78 + 85 + 92 + 88 + 97}{5} = \\\\frac{440}{5} = 88$$

**Example 2 — Median (even count):** Data: $4, 7, 9, 12$. Find the median.

$$\\\\text{Median} = \\\\frac{7 + 9}{2} = 8$$

**Example 3 — Missing-value problem:** The mean of five numbers is $20$. Four of them are $15, 18, 22, 25$. Find the fifth.

$$\\\\text{Sum} = 5 \\\\times 20 = 100$$
$$\\\\text{Known sum} = 15 + 18 + 22 + 25 = 80$$
$$\\\\text{Fifth number} = 100 - 80 = 20$$

**ACT Tip:** "Find the missing value given the mean" is a classic ACT question pattern.
      `
    },
    {
      id: 'act-pa6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Statistics Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the median of $\\\\{12, 5, 8, 3, 15, 9\\\\}$?',
            options: ['$8$', '$8.5$', '$9$', '$10.5$'],
            correctAnswer: 1,
            explanation: 'Sorted: $3, 5, 8, 9, 12, 15$. Middle two are $8$ and $9$. Median $= \\\\frac{8+9}{2} = 8.5$.'
          },
          {
            question: 'The data set $\\\\{4, 4, 5, 7, 7, 7, 9\\\\}$ has mode …',
            options: ['$4$', '$5$', '$7$', '$4$ and $7$'],
            correctAnswer: 2,
            explanation: '$7$ appears three times, more than any other value.'
          }
        ]
      }
    },
    {
      id: 'act-pa6-charts',
      type: 'text' as const,
      content: `
## Reading Charts & Tables

On the ACT, you may see bar graphs, pie charts, tables, or line graphs. The math is usually straightforward — the challenge is extracting the right numbers.

**Strategy:**
1. Read the title and axis labels first.
2. Identify what the question asks.
3. Pull the numbers and compute.

**Example 4 — Table:** A store sold the following units:

| Day | Mon | Tue | Wed | Thu | Fri |
|-----|-----|-----|-----|-----|-----|
| Units | 30 | 45 | 25 | 50 | 40 |

Average daily sales $= \\\\frac{30 + 45 + 25 + 50 + 40}{5} = \\\\frac{190}{5} = 38$ units.

Best day: Thursday ($50$ units).  
Range: $50 - 25 = 25$ units.
      `
    },
    {
      id: 'act-pa6-input1',
      type: 'input-boxes' as const,
      content: `
**Statistics Practice** 🧮

1) Find the mean of $\\\\{10, 14, 18, 22, 26\\\\}$.
2) The mean of 4 numbers is $15$. Three of them are $12, 16, 20$. What is the fourth?
3) Find the range of $\\\\{3, 8, 1, 15, 7\\\\}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '12', '14'],
        hint1: 'Add all five values and divide by 5.',
        hint2: 'Total $= 4 \\\\times 15 = 60$. Subtract the known three.',
        hint3: 'Range $= \\\\text{Max} - \\\\text{Min}$.',
        explanation: 'Mean $= \\\\frac{10+14+18+22+26}{5} = \\\\frac{90}{5} = 18$. Fourth $= 60 - (12+16+20) = 60 - 48 = 12$. Range $= 15 - 1 = 14$.'
      }
    },
    {
      id: 'act-pa6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a data set has an even number of values, the median is the ______ of the two middle values.',
            options: ['sum', 'product', 'average', 'difference']
          },
          {
            label: 'A data set can have ______ mode(s).',
            options: ['exactly one', 'zero, one, or more than one', 'only two', 'at most one']
          },
          {
            label: 'Adding a very large outlier to a data set most affects the …',
            options: ['mode', 'median', 'mean', 'range only']
          }
        ],
        correctAnswers: ['average', 'zero, one, or more than one', 'mean'],
        hint1: 'Average the two middle values.',
        hint2: 'If no value repeats, there is no mode. Multiple values can tie.',
        hint3: 'The mean uses every value in its calculation.',
        explanation: 'Even-count median: average the two middle values. A set can have 0, 1, or multiple modes. The mean is most affected by outliers.'
      }
    },
    {
      id: 'act-pa6-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The mean of $6$ test scores is $82$. After adding a $7$th score, the mean rises to $84$. What is the $7$th score?',
            options: ['$86$', '$90$', '$94$', '$96$'],
            correctAnswer: 3,
            explanation: 'Original sum $= 6 \\\\times 82 = 492$. New sum $= 7 \\\\times 84 = 588$. Seventh score $= 588 - 492 = 96$.'
          },
          {
            question: 'A set of 5 numbers has a mode of 8, a median of 8, and a mean of 10. Which could be the set?',
            options: ['$\\\\{6, 8, 8, 10, 18\\\\}$', '$\\\\{8, 8, 8, 8, 18\\\\}$', '$\\\\{4, 8, 8, 12, 18\\\\}$', '$\\\\{2, 8, 8, 14, 18\\\\}$'],
            correctAnswer: 2,
            explanation: 'Check: $4+8+8+12+18 = 50$ and $50 \\\\div 5 = 10$ ✓. Median (3rd value) $= 8$ ✓. Mode $= 8$ ✓.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed ──────────────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const actPreAlgebraPart7Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa7-cheatsheet',
      type: 'text' as const,
      content: `
# 📝 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed ACT Pre-Algebra Problems**

## Pre-Algebra Formula Cheat Sheet

| Topic | Key Formulas |
|-------|-------------|
| Factors / Multiples | $\\\\text{LCM}(a,b) = \\\\frac{a \\\\times b}{\\\\text{GCF}(a,b)}$ |
| Fractions | Add: common denom; Divide: flip & multiply |
| Percents | Part $= \\\\% \\\\times$ Whole; Change $= \\\\frac{|\\\\text{New}-\\\\text{Old}|}{\\\\text{Old}} \\\\times 100$ |
| Proportions | $\\\\frac{a}{b} = \\\\frac{c}{d} \\\\implies ad = bc$ |
| Exponents | $a^m \\\\cdot a^n = a^{m+n}$; $a^0 = 1$; $a^{-n} = \\\\frac{1}{a^n}$ |
| Roots | $\\\\sqrt{ab} = \\\\sqrt{a}\\\\sqrt{b}$ |
| Stats | Mean $= \\\\frac{\\\\text{sum}}{n}$; Median = middle; Mode = most common |
| PEMDAS | Parentheses → Exponents → Mult/Div → Add/Sub |
      `
    },
    {
      id: 'act-pa7-tips',
      type: 'text' as const,
      content: `
## ACT Strategy Tips

1. **Plug in answers** — On multiple-choice, try each option if algebra feels slow.
2. **Estimate** — Eliminate clearly wrong answers before computing.
3. **Watch units** — Especially in rate and percent problems.
4. **Read carefully** — "Percent increase" is not the same as "new value."
5. **Don't overthink** — Pre-algebra questions are meant to be quick; ~30 seconds each.

**Common traps:**
- Confusing $-3^2 = -9$ with $(-3)^2 = 9$.
- Forgetting to simplify fractions.
- Mixing up LCM and GCF.
- Using the wrong base in percent-change problems.
      `
    },
    {
      id: 'act-pa7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Pre-Algebra** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\\\frac{2}{3}$ of $45$?',
            options: ['$15$', '$22.5$', '$30$', '$35$'],
            correctAnswer: 2,
            explanation: '$\\\\frac{2}{3} \\\\times 45 = \\\\frac{90}{3} = 30$.'
          },
          {
            question: 'A store charges $\\\\$18$ for an item after a $10\\\\%$ discount. What was the original price?',
            options: ['$\\\\$16.20$', '$\\\\$19.80$', '$\\\\$20$', '$\\\\$28$'],
            correctAnswer: 2,
            explanation: 'After 10% off you pay 90%: $0.90 \\\\times P = 18 \\\\implies P = 20$.'
          }
        ]
      }
    },
    {
      id: 'act-pa7-mixed',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem 1:** Evaluate $\\\\frac{3^2 + 4^2}{5}$.

$$\\\\frac{9 + 16}{5} = \\\\frac{25}{5} = 5$$

**Problem 2:** A bag has red and green marbles in a $2 : 5$ ratio. If there are $35$ total marbles, how many are red?

$$\\\\text{Total parts} = 7 \\\\implies \\\\text{each part} = 5 \\\\implies \\\\text{red} = 2 \\\\times 5 = 10$$

**Problem 3:** The median of $\\\\{3, 7, x, 12, 18\\\\}$ (already sorted) is $9$. What is $x$?

The median is the 3rd value: $x = 9$.

**Problem 4:** A sweater costs $\\\\$64$ after a $20\\\\%$ discount. Original price?

$$0.80P = 64 \\\\implies P = 80$$
      `
    },
    {
      id: 'act-pa7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) Evaluate: $(-2)^3 + 5^2$
2) What is $\\\\text{LCM}(9, 12)$?
3) A cyclist rides $45$ miles in $3$ hours. What is the speed in mph?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '36', '15'],
        hint1: '$(-2)^3 = -8$ and $5^2 = 25$.',
        hint2: '$9 = 3^2$, $12 = 2^2 \\\\times 3$. Take the higher powers.',
        hint3: 'Speed $= \\\\frac{\\\\text{distance}}{\\\\text{time}}$.',
        explanation: '$(-2)^3 + 5^2 = -8 + 25 = 17$. LCM $= 2^2 \\\\times 3^2 = 36$. Speed $= 45 \\\\div 3 = 15$ mph.'
      }
    },
    {
      id: 'act-pa7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find an original price before a discount, you ______ by the remaining percent.',
            options: ['multiply the sale price', 'divide the sale price', 'add the discount', 'subtract the discount']
          },
          {
            label: '$-5^2$ equals …',
            options: ['$25$', '$-25$', '$10$', '$-10$']
          },
          {
            label: 'The mean is most affected by …',
            options: ['the mode', 'the median', 'outliers', 'the range']
          }
        ],
        correctAnswers: ['divide the sale price', '$-25$', 'outliers'],
        hint1: 'If $0.80P = \\\\text{sale price}$, solve for $P$.',
        hint2: 'Without parentheses, exponent applies to $5$ only: $-(5^2)$.',
        hint3: 'Extreme values pull the mean toward them.',
        explanation: 'Divide sale price by $(1 - \\\\text{discount rate})$. $-5^2 = -(25) = -25$. Outliers strongly affect the mean.'
      }
    },
    {
      id: 'act-pa7-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Final Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the mean of $8, 12, x, 20$ is $15$, what is $x$?',
            options: ['$15$', '$18$', '$20$', '$22$'],
            correctAnswer: 2,
            explanation: 'Sum $= 4 \\\\times 15 = 60$. Known $= 8 + 12 + 20 = 40$. So $x = 60 - 40 = 20$.'
          },
          {
            question: 'A $25\\\\%$ increase followed by a $20\\\\%$ decrease returns to what percent of the original?',
            options: ['$95\\\\%$', '$100\\\\%$', '$105\\\\%$', '$110\\\\%$'],
            correctAnswer: 1,
            explanation: '$1.25 \\\\times 0.80 = 1.00$. You return to exactly $100\\\\%$ of the original.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT Pre-Algebra Basics lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
