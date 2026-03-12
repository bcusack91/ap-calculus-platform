#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Exponents & Radicals.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-exponents-radicals-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-exponents-radicals-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Laws of Exponents ────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satExponentsPart1Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp1-intro',
      type: 'text' as const,
      content: `
# ⚡ Laws of Exponents

**Part 1 of 7 — Product, Quotient, Power, Zero & Negative Exponents**

Exponent rules show up on roughly **10–15 %** of SAT Math questions. Master the five core laws below and these become free points on test day.

| Rule | Formula | Quick Example |
|------|---------|---------------|
| Product | $a^m \\\\cdot a^n = a^{m+n}$ | $x^3 \\\\cdot x^4 = x^7$ |
| Quotient | $\\\\frac{a^m}{a^n} = a^{m-n}$ | $\\\\frac{x^5}{x^2} = x^3$ |
| Power | $(a^m)^n = a^{mn}$ | $(x^3)^2 = x^6$ |
| Zero | $a^0 = 1\\\\;(a\\\\neq 0)$ | $7^0 = 1$ |
| Negative | $a^{-n} = \\\\frac{1}{a^n}$ | $x^{-2} = \\\\frac{1}{x^2}$ |

**Bonus rules (combinations):**

$$
(ab)^n = a^n b^n \\\\qquad \\\\left(\\\\frac{a}{b}\\\\right)^n = \\\\frac{a^n}{b^n}
$$
      `
    },
    {
      id: 'sat-exp1-product-quotient',
      type: 'text' as const,
      content: `
## Product & Quotient Rules — Worked Examples

**Example 1 — Product Rule**

Simplify $2x^3 \\\\cdot 5x^4$.

- Multiply coefficients: $2 \\\\times 5 = 10$.
- Add exponents on $x$: $3 + 4 = 7$.
- Result: $10x^7$.

**Example 2 — Quotient Rule**

Simplify $\\\\dfrac{18x^5 y^3}{6x^2 y^5}$.

- Coefficients: $\\\\frac{18}{6} = 3$.
- $x$: $x^{5-2} = x^3$.
- $y$: $y^{3-5} = y^{-2} = \\\\frac{1}{y^2}$.
- Result: $\\\\dfrac{3x^3}{y^2}$.

---

**SAT Tip:** Keep bases the same → add or subtract exponents. Different bases? You can't combine them.
      `
    },
    {
      id: 'sat-exp1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice — Product & Quotient Rules** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $x^4 \\\\cdot x^{-2} \\\\cdot x^3$',
            options: ['$x^5$', '$x^9$', '$x^{-24}$', '$x^1$'],
            correctAnswer: 0,
            explanation: 'Add all exponents: $4 + (-2) + 3 = 5$. Answer: $x^5$.'
          },
          {
            question: 'Simplify: $\\\\dfrac{24a^6 b^2}{8a^4 b^5}$',
            options: ['$3a^2 b^{-3}$', '$3a^{10} b^7$', '$16a^2 b^3$', '$3a^2 b^3$'],
            correctAnswer: 0,
            explanation: 'Coefficients: $24/8=3$. $a^{6-4}=a^2$. $b^{2-5}=b^{-3}$. So $3a^2 b^{-3}$ or equivalently $\\\\frac{3a^2}{b^3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp1-negative',
      type: 'text' as const,
      content: `
## Negative & Zero Exponents — Deep Dive

**Zero exponent:** Anything (except 0) raised to the 0th power equals 1.

$$5^0 = 1,\\\\quad (-3)^0 = 1,\\\\quad (2x+7)^0 = 1$$

**Negative exponent = reciprocal:**

$$a^{-n} = \\\\frac{1}{a^n} \\\\qquad \\\\frac{1}{a^{-n}} = a^n$$

**Worked Example:** Simplify $\\\\left(\\\\dfrac{2}{x}\\\\right)^{-3}$.

1. Flip the fraction: $\\\\left(\\\\dfrac{x}{2}\\\\right)^3$.
2. Apply the power: $\\\\dfrac{x^3}{8}$.

**SAT Tip:** When you see a negative exponent, think **"flip."** The base moves across the fraction bar and the exponent becomes positive.
      `
    },
    {
      id: 'sat-exp1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate each expression (give a whole number).** 🧮

1) $2^{-3}$ — enter the **denominator** when written as $\\\\frac{1}{?}$

2) $5^0 + 4^{-1}$ — enter the **numerator** when written over 4

3) $(-2)^4$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '5', '16'],
        hint1: '$2^{-3} = \\\\frac{1}{2^3}$. What is $2^3$?',
        hint2: '$5^0 = 1$ and $4^{-1} = \\\\frac{1}{4}$. Written over 4: $\\\\frac{4}{4}+\\\\frac{1}{4}=\\\\frac{5}{4}$. Numerator is 5.',
        hint3: '$(-2)^4 = (-2)(-2)(-2)(-2) = 16$. Even exponent makes it positive.',
        explanation: '1) $2^3 = 8$. 2) $\\\\frac{5}{4}$, numerator = 5. 3) $16$.'
      }
    },
    {
      id: 'sat-exp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its simplified form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(3^2)^3$',
            options: ['$3^5$', '$3^6$', '$9^3$', '$3^8$']
          },
          {
            label: '$\\\\frac{x^{10}}{x^{10}}$',
            options: ['$0$', '$1$', '$x$', '$x^{20}$']
          },
          {
            label: '$(2x)^3$',
            options: ['$2x^3$', '$6x^3$', '$8x^3$', '$2^3 + x^3$']
          }
        ],
        correctAnswers: ['$3^6$', '$1$', '$8x^3$'],
        hint1: 'Power rule: multiply exponents. $2 \\\\times 3 = 6$.',
        hint2: 'Same base divided: $x^{10-10} = x^0 = 1$.',
        hint3: '$(2x)^3 = 2^3 \\\\cdot x^3 = 8x^3$.',
        explanation: '$(3^2)^3 = 3^6$. $\\\\frac{x^{10}}{x^{10}} = x^0 = 1$. $(2x)^3 = 8x^3$.'
      }
    },
    {
      id: 'sat-exp1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $3^x = 81$, what is $3^{x-2}$?',
            options: ['$3$', '$9$', '$27$', '$79$'],
            correctAnswer: 1,
            explanation: '$3^x = 81 = 3^4$, so $x = 4$. Then $3^{x-2} = 3^2 = 9$. Or use the quotient rule: $3^{x-2} = \\\\frac{3^x}{3^2} = \\\\frac{81}{9} = 9$.'
          },
          {
            question: 'Which expression equals $\\\\dfrac{12x^5 y^3}{4x^2 y^5}$?',
            options: ['$3x^3 y^{-2}$', '$3x^7 y^8$', '$8x^3 y^{-2}$', '$3x^{2.5} y^{0.6}$'],
            correctAnswer: 0,
            explanation: 'Divide coefficients: $12/4 = 3$. Subtract $x$ exponents: $5-2=3$. Subtract $y$ exponents: $3-5=-2$. Result: $3x^3 y^{-2}$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 2: Fractional Exponents ─────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp2-intro',
      type: 'text' as const,
      content: `
# 🔢 Fractional Exponents

**Part 2 of 7 — Converting Between Radicals and Rational Exponents**

The SAT loves testing whether you can move fluidly between radical notation and fractional exponent notation. The key identity:

$$x^{1/n} = \\\\sqrt[n]{x}$$

More generally:

$$x^{m/n} = \\\\left(\\\\sqrt[n]{x}\\\\right)^m = \\\\sqrt[n]{x^m}$$

**Quick Reference:**

| Expression | Equivalent |
|------------|------------|
| $x^{1/2}$ | $\\\\sqrt{x}$ |
| $x^{1/3}$ | $\\\\sqrt[3]{x}$ |
| $x^{2/3}$ | $\\\\sqrt[3]{x^2}$ or $(\\\\sqrt[3]{x})^2$ |
| $x^{3/2}$ | $\\\\sqrt{x^3}$ or $(\\\\sqrt{x})^3$ |
| $x^{-1/2}$ | $\\\\frac{1}{\\\\sqrt{x}}$ |
      `
    },
    {
      id: 'sat-exp2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Evaluate $27^{2/3}$.

1. Rewrite: $27^{2/3} = (\\\\sqrt[3]{27})^2$.
2. Cube root of 27 is 3: $(3)^2 = 9$.

**Example 2:** Simplify $\\\\frac{x^{3/4}}{x^{1/4}}$.

1. Same base → subtract exponents: $x^{3/4 - 1/4} = x^{2/4} = x^{1/2}$.
2. Answer: $\\\\sqrt{x}$.

**Example 3:** Write $\\\\frac{1}{\\\\sqrt[4]{x^3}}$ using exponents.

1. $\\\\sqrt[4]{x^3} = x^{3/4}$.
2. Reciprocal → negative exponent: $x^{-3/4}$.

---

**SAT Tip:** When the SAT says "equivalent form," try converting everything to fractional exponents first — it makes arithmetic easier.
      `
    },
    {
      id: 'sat-exp2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Evaluating Fractional Exponents** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $16^{3/4}$?',
            options: ['$4$', '$8$', '$12$', '$64$'],
            correctAnswer: 1,
            explanation: '$16^{3/4} = (\\\\sqrt[4]{16})^3 = 2^3 = 8$.'
          },
          {
            question: 'Simplify: $8^{-2/3}$',
            options: ['$-4$', '$\\\\frac{1}{4}$', '$4$', '$-\\\\frac{1}{4}$'],
            correctAnswer: 1,
            explanation: '$8^{2/3} = (\\\\sqrt[3]{8})^2 = 2^2 = 4$. Negative exponent → reciprocal: $\\\\frac{1}{4}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp2-convert',
      type: 'dropdown-select' as const,
      content: `
**Convert each expression to exponential form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\sqrt{x^3}$',
            options: ['$x^{3/2}$', '$x^{2/3}$', '$3x^{1/2}$', '$x^3$']
          },
          {
            label: '$\\\\frac{1}{\\\\sqrt[3]{x}}$',
            options: ['$x^{1/3}$', '$-x^{1/3}$', '$x^{-1/3}$', '$x^{-3}$']
          },
          {
            label: '$(\\\\sqrt[5]{x})^2$',
            options: ['$x^{5/2}$', '$x^{2/5}$', '$x^{10}$', '$2x^{1/5}$']
          }
        ],
        correctAnswers: ['$x^{3/2}$', '$x^{-1/3}$', '$x^{2/5}$'],
        hint1: '$\\\\sqrt{x^3} = (x^3)^{1/2} = x^{3/2}$.',
        hint2: '$\\\\sqrt[3]{x} = x^{1/3}$, then take reciprocal: $x^{-1/3}$.',
        hint3: '$(x^{1/5})^2 = x^{2/5}$.',
        explanation: 'Use the rule $\\\\sqrt[n]{x^m} = x^{m/n}$ and $\\\\frac{1}{x^a} = x^{-a}$.'
      }
    },
    {
      id: 'sat-exp2-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate — give a whole number.** 🧮

1) $125^{1/3}$ = ?

2) $32^{2/5}$ = ?

3) $81^{3/4}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '4', '27'],
        hint1: 'What number cubed equals 125? $5^3 = 125$.',
        hint2: '$32 = 2^5$. So $32^{2/5} = (2^5)^{2/5} = 2^2 = 4$.',
        hint3: '$81 = 3^4$. So $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$.',
        explanation: '1) $\\\\sqrt[3]{125} = 5$. 2) $(\\\\sqrt[5]{32})^2 = 2^2 = 4$. 3) $(\\\\sqrt[4]{81})^3 = 3^3 = 27$.'
      }
    },
    {
      id: 'sat-exp2-harder',
      type: 'text' as const,
      content: `
## Combining Fractional Exponents

**Example:** Simplify $\\\\frac{x^{5/6} \\\\cdot x^{1/3}}{x^{1/2}}$.

1. Numerator: $x^{5/6 + 1/3} = x^{5/6 + 2/6} = x^{7/6}$.
2. Divide: $x^{7/6 - 1/2} = x^{7/6 - 3/6} = x^{4/6} = x^{2/3}$.

**Common pitfall:** Forgetting to find a common denominator before adding/subtracting fractional exponents.

**SAT Pattern:** The SAT often writes $\\\\sqrt{x} \\\\cdot \\\\sqrt[3]{x}$ and asks for the simplified form. Convert first:

$$x^{1/2} \\\\cdot x^{1/3} = x^{3/6 + 2/6} = x^{5/6}$$
      `
    },
    {
      id: 'sat-exp2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^{1/2} = 5$, what is $x^{3/2}$?',
            options: ['$15$', '$25$', '$125$', '$\\\\sqrt{5}$'],
            correctAnswer: 2,
            explanation: '$x^{3/2} = (x^{1/2})^3 = 5^3 = 125$.'
          },
          {
            question: 'Which expression equals $\\\\sqrt{x} \\\\cdot \\\\sqrt[3]{x^2}$?',
            options: ['$x^{7/6}$', '$x^{5/6}$', '$x^{1/3}$', '$x^{2/6}$'],
            correctAnswer: 0,
            explanation: '$\\\\sqrt{x} = x^{1/2}$ and $\\\\sqrt[3]{x^2} = x^{2/3}$. Add: $\\\\frac{1}{2}+\\\\frac{2}{3} = \\\\frac{3}{6}+\\\\frac{4}{6} = \\\\frac{7}{6}$. Answer: $x^{7/6}$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 3: Simplifying Radicals ─────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satExponentsPart3Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp3-intro',
      type: 'text' as const,
      content: `
# √ Simplifying Radicals

**Part 3 of 7 — Perfect Squares, Rationalizing & Combining Radicals**

On the SAT you'll need to simplify radical expressions quickly. Here's the roadmap:

1. **Factor** out perfect squares (or cubes).
2. **Rationalize** denominators when needed.
3. **Combine** like radicals just like like terms.

**Key identity:**

$$\\\\sqrt{ab} = \\\\sqrt{a} \\\\cdot \\\\sqrt{b} \\\\qquad (a,b \\\\ge 0)$$
      `
    },
    {
      id: 'sat-exp3-simplify',
      type: 'text' as const,
      content: `
## Simplifying Square Roots

**Method:** Find the largest perfect-square factor, then pull it out.

**Example 1:** $\\\\sqrt{72}$

$72 = 36 \\\\times 2$, so $\\\\sqrt{72} = \\\\sqrt{36} \\\\cdot \\\\sqrt{2} = 6\\\\sqrt{2}$.

**Example 2:** $\\\\sqrt{50x^4 y^3}$

$50 = 25 \\\\times 2$, $x^4$ is a perfect square, $y^3 = y^2 \\\\cdot y$.

$$\\\\sqrt{50x^4 y^3} = 5x^2 y\\\\sqrt{2y}$$

**Example 3:** $3\\\\sqrt{48} - 2\\\\sqrt{27}$

$\\\\sqrt{48} = 4\\\\sqrt{3}$ and $\\\\sqrt{27} = 3\\\\sqrt{3}$.

$$3(4\\\\sqrt{3}) - 2(3\\\\sqrt{3}) = 12\\\\sqrt{3} - 6\\\\sqrt{3} = 6\\\\sqrt{3}$$

---

**SAT Tip:** Memorize perfect squares up to $15^2 = 225$. It saves huge amounts of time.
      `
    },
    {
      id: 'sat-exp3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice — Simplifying** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\\\sqrt{200}$.',
            options: ['$10\\\\sqrt{2}$', '$2\\\\sqrt{100}$', '$20\\\\sqrt{5}$', '$14.1$'],
            correctAnswer: 0,
            explanation: '$200 = 100 \\\\times 2$, so $\\\\sqrt{200} = 10\\\\sqrt{2}$.'
          },
          {
            question: 'Simplify $5\\\\sqrt{12} + 3\\\\sqrt{27}$.',
            options: ['$8\\\\sqrt{39}$', '$19\\\\sqrt{3}$', '$8\\\\sqrt{12}$', '$15\\\\sqrt{3}$'],
            correctAnswer: 1,
            explanation: '$\\\\sqrt{12} = 2\\\\sqrt{3}$ and $\\\\sqrt{27} = 3\\\\sqrt{3}$. So $5(2\\\\sqrt{3}) + 3(3\\\\sqrt{3}) = 10\\\\sqrt{3} + 9\\\\sqrt{3} = 19\\\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp3-rationalize',
      type: 'text' as const,
      content: `
## Rationalizing Denominators

**Why?** The SAT often wants answers with no radical in the denominator.

**Single radical:** Multiply top and bottom by the radical.

$$\\\\frac{3}{\\\\sqrt{5}} = \\\\frac{3}{\\\\sqrt{5}} \\\\cdot \\\\frac{\\\\sqrt{5}}{\\\\sqrt{5}} = \\\\frac{3\\\\sqrt{5}}{5}$$

**Binomial denominator:** Multiply by the conjugate.

$$\\\\frac{2}{3 + \\\\sqrt{7}} = \\\\frac{2(3 - \\\\sqrt{7})}{(3)^2 - (\\\\sqrt{7})^2} = \\\\frac{2(3-\\\\sqrt{7})}{9-7} = \\\\frac{2(3-\\\\sqrt{7})}{2} = 3 - \\\\sqrt{7}$$

**SAT Tip:** If an answer choice has a radical in the denominator and another doesn't, rationalize to compare.
      `
    },
    {
      id: 'sat-exp3-input',
      type: 'input-boxes' as const,
      content: `
**Simplify each — enter the coefficient in front of the radical.** 🧮

1) $\\\\sqrt{98}$ = ?$\\\\sqrt{2}$ → enter the coefficient

2) $\\\\sqrt{75}$ = ?$\\\\sqrt{3}$ → enter the coefficient

3) $2\\\\sqrt{45} + 3\\\\sqrt{20}$ = ?$\\\\sqrt{5}$ → enter the coefficient
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '5', '12'],
        hint1: '$98 = 49 \\\\times 2$, so $\\\\sqrt{98} = 7\\\\sqrt{2}$.',
        hint2: '$75 = 25 \\\\times 3$, so $\\\\sqrt{75} = 5\\\\sqrt{3}$.',
        hint3: '$\\\\sqrt{45} = 3\\\\sqrt{5}$, $\\\\sqrt{20} = 2\\\\sqrt{5}$. So $2(3\\\\sqrt{5}) + 3(2\\\\sqrt{5}) = 6\\\\sqrt{5} + 6\\\\sqrt{5} = 12\\\\sqrt{5}$.',
        explanation: '1) $7$. 2) $5$. 3) $12$.'
      }
    },
    {
      id: 'sat-exp3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its rationalized form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\frac{4}{\\\\sqrt{2}}$',
            options: ['$2\\\\sqrt{2}$', '$4\\\\sqrt{2}$', '$\\\\frac{\\\\sqrt{2}}{4}$', '$2$']
          },
          {
            label: '$\\\\frac{1}{\\\\sqrt{3}}$',
            options: ['$\\\\frac{\\\\sqrt{3}}{3}$', '$\\\\frac{3}{\\\\sqrt{3}}$', '$\\\\sqrt{3}$', '$\\\\frac{1}{3}$']
          },
          {
            label: '$\\\\frac{6}{\\\\sqrt{6}}$',
            options: ['$1$', '$6$', '$\\\\sqrt{6}$', '$\\\\frac{6\\\\sqrt{6}}{6}$']
          }
        ],
        correctAnswers: ['$2\\\\sqrt{2}$', '$\\\\frac{\\\\sqrt{3}}{3}$', '$\\\\sqrt{6}$'],
        hint1: '$\\\\frac{4}{\\\\sqrt{2}} = \\\\frac{4\\\\sqrt{2}}{2} = 2\\\\sqrt{2}$.',
        hint2: '$\\\\frac{1}{\\\\sqrt{3}} = \\\\frac{\\\\sqrt{3}}{3}$.',
        hint3: '$\\\\frac{6}{\\\\sqrt{6}} = \\\\frac{6\\\\sqrt{6}}{6} = \\\\sqrt{6}$.',
        explanation: 'Multiply numerator and denominator by the radical in the denominator.'
      }
    },
    {
      id: 'sat-exp3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the simplified form of $\\\\frac{\\\\sqrt{18} + \\\\sqrt{8}}{\\\\sqrt{2}}$?',
            options: ['$5$', '$3 + 2$', '$\\\\sqrt{26}$', '$4$'],
            correctAnswer: 0,
            explanation: '$\\\\sqrt{18} = 3\\\\sqrt{2}$, $\\\\sqrt{8} = 2\\\\sqrt{2}$. Numerator = $5\\\\sqrt{2}$. Divide by $\\\\sqrt{2}$: answer is $5$.'
          },
          {
            question: 'If $\\\\sqrt{x} = 3\\\\sqrt{2}$, what is $x$?',
            options: ['$6$', '$9$', '$12$', '$18$'],
            correctAnswer: 3,
            explanation: 'Square both sides: $x = (3\\\\sqrt{2})^2 = 9 \\\\cdot 2 = 18$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 4: Exponential Equations ─────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp4-intro',
      type: 'text' as const,
      content: `
# 🧩 Exponential Equations

**Part 4 of 7 — Solving When Bases Match (and When They Don't)**

Many SAT equations involve exponents. The core strategy:

> **If $a^m = a^n$ (same base, $a > 0$, $a \\\\neq 1$), then $m = n$.**

This means your job is to rewrite both sides with the **same base**, then set the exponents equal.

**Common base families to memorize:**

| Base 2 | Base 3 | Base 5 |
|--------|--------|--------|
| $2^1=2$ | $3^1=3$ | $5^1=5$ |
| $2^2=4$ | $3^2=9$ | $5^2=25$ |
| $2^3=8$ | $3^3=27$ | $5^3=125$ |
| $2^4=16$ | $3^4=81$ | $5^4=625$ |
| $2^5=32$ | $3^5=243$ | |
| $2^{10}=1024$ | | |
      `
    },
    {
      id: 'sat-exp4-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Solve $4^x = 32$.

1. Rewrite in base 2: $4 = 2^2$ and $32 = 2^5$.
2. $(2^2)^x = 2^5 \\\\Rightarrow 2^{2x} = 2^5$.
3. Set exponents equal: $2x = 5 \\\\Rightarrow x = \\\\frac{5}{2}$.

**Example 2:** Solve $9^{x+1} = 27^x$.

1. Rewrite in base 3: $9 = 3^2$, $27 = 3^3$.
2. $3^{2(x+1)} = 3^{3x}$.
3. $2x + 2 = 3x \\\\Rightarrow x = 2$.

**Example 3:** Solve $\\\\frac{8^x}{2^x} = 64$.

1. $\\\\frac{8^x}{2^x} = \\\\left(\\\\frac{8}{2}\\\\right)^x = 4^x$.
2. $4^x = 64$. Rewrite: $2^{2x} = 2^6$, so $2x = 6$, $x = 3$.

---

**SAT Tip:** If you can't find a common base, the answer choices usually let you plug in and check.
      `
    },
    {
      id: 'sat-exp4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Matching Bases** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $2^{3x} = 2^{12}$. What is $x$?',
            options: ['$x = 3$', '$x = 4$', '$x = 9$', '$x = 36$'],
            correctAnswer: 1,
            explanation: 'Same base → set exponents equal: $3x = 12 \\\\Rightarrow x = 4$.'
          },
          {
            question: 'Solve: $25^x = 5^6$. What is $x$?',
            options: ['$x = 2$', '$x = 3$', '$x = 6$', '$x = 12$'],
            correctAnswer: 1,
            explanation: '$25 = 5^2$, so $(5^2)^x = 5^6 \\\\Rightarrow 5^{2x} = 5^6 \\\\Rightarrow 2x = 6 \\\\Rightarrow x = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rewrite each number as a power of the given base.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$64$ as a power of $2$',
            options: ['$2^4$', '$2^5$', '$2^6$', '$2^8$']
          },
          {
            label: '$81$ as a power of $3$',
            options: ['$3^2$', '$3^3$', '$3^4$', '$3^5$']
          },
          {
            label: '$\\\\frac{1}{16}$ as a power of $2$',
            options: ['$2^{-2}$', '$2^{-3}$', '$2^{-4}$', '$2^{-8}$']
          }
        ],
        correctAnswers: ['$2^6$', '$3^4$', '$2^{-4}$'],
        hint1: '$2^6 = 64$.',
        hint2: '$3^4 = 81$.',
        hint3: '$16 = 2^4$, so $\\\\frac{1}{16} = 2^{-4}$.',
        explanation: 'Knowing powers of small primes is essential for the SAT.'
      }
    },
    {
      id: 'sat-exp4-input',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$ — enter a whole number or simple fraction.** 🧮

1) $3^{2x} = 81$ → $x$ = ?

2) $8^x = 4^6$ → $x$ = ?

3) $5^{x-1} = 125$ → $x$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '4'],
        hint1: '$81 = 3^4$, so $2x = 4$, $x = 2$.',
        hint2: '$8 = 2^3$, $4 = 2^2$. So $2^{3x} = 2^{12}$, $3x = 12$, $x = 4$.',
        hint3: '$125 = 5^3$, so $x - 1 = 3$, $x = 4$.',
        explanation: '1) $x = 2$. 2) $x = 4$. 3) $x = 4$.'
      }
    },
    {
      id: 'sat-exp4-harder',
      type: 'text' as const,
      content: `
## When Bases Don't Match Neatly

Sometimes you can't find a common base. Strategies:

**Strategy 1 — Plug in answer choices.** If $3^x = 50$, try each option:
- $x = 3$: $3^3 = 27$ (too small)
- $x = 4$: $3^4 = 81$ (too big)
- So $x$ is between 3 and 4 — look for the answer choice that matches.

**Strategy 2 — Use properties to simplify.**

Solve $\\\\frac{6^7}{6^4} = 6^x$. By quotient rule: $6^{7-4} = 6^3$, so $x = 3$.

**Strategy 3 — Recognize patterns.**

If $2^a = 5$ (given), find $2^{3a}$. Answer: $(2^a)^3 = 5^3 = 125$.

The SAT won't ask you to use logarithms — there's always an algebraic path.
      `
    },
    {
      id: 'sat-exp4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $2^a = 7$, what is the value of $2^{a+3}$?',
            options: ['$10$', '$21$', '$49$', '$56$'],
            correctAnswer: 3,
            explanation: '$2^{a+3} = 2^a \\\\cdot 2^3 = 7 \\\\cdot 8 = 56$.'
          },
          {
            question: 'If $9^x = 3^{x+4}$, what is $x$?',
            options: ['$1$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: '$9 = 3^2$, so $3^{2x} = 3^{x+4}$. Then $2x = x+4$, giving $x = 4$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 5: Scientific Notation ──────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satExponentsPart5Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp5-intro',
      type: 'text' as const,
      content: `
# 🔬 Scientific Notation

**Part 5 of 7 — Converting, Multiplying, Dividing & SAT Calculator Tips**

Scientific notation expresses numbers as:

$$a \\\\times 10^n \\\\quad \\\\text{where } 1 \\\\le |a| < 10$$

| Standard Form | Scientific Notation |
|--------------|---------------------|
| $3{,}200{,}000$ | $3.2 \\\\times 10^6$ |
| $0.00045$ | $4.5 \\\\times 10^{-4}$ |
| $7.1$ | $7.1 \\\\times 10^0$ |

**Converting tip:** Count how many places the decimal moves.
- Moving **left** → positive exponent (big number).
- Moving **right** → negative exponent (small number).
      `
    },
    {
      id: 'sat-exp5-operations',
      type: 'text' as const,
      content: `
## Operations with Scientific Notation

**Multiplying:** Multiply the coefficients, add the exponents.

$(3 \\\\times 10^4)(2 \\\\times 10^5) = 6 \\\\times 10^9$

**Dividing:** Divide the coefficients, subtract the exponents.

$\\\\frac{8 \\\\times 10^7}{4 \\\\times 10^3} = 2 \\\\times 10^4$

**Watch the coefficient!** If it falls outside $[1, 10)$, adjust:

$(5 \\\\times 10^3)(4 \\\\times 10^2) = 20 \\\\times 10^5 = 2.0 \\\\times 10^6$

**Adding/Subtracting:** Make the exponents the same first.

$3.2 \\\\times 10^5 + 4.0 \\\\times 10^4 = 3.2 \\\\times 10^5 + 0.40 \\\\times 10^5 = 3.6 \\\\times 10^5$

---

**SAT Calculator Tip:** On your calculator, enter scientific notation as \\`3.2 EE 5\\` (not \\`3.2 × 10^5\\`). The \\`EE\\` or \\`EXP\\` key is faster and avoids mistakes.
      `
    },
    {
      id: 'sat-exp5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Express $0.00072$ in scientific notation.',
            options: ['$7.2 \\\\times 10^{-4}$', '$72 \\\\times 10^{-5}$', '$7.2 \\\\times 10^{-3}$', '$0.72 \\\\times 10^{-3}$'],
            correctAnswer: 0,
            explanation: 'Move decimal 4 places right: $7.2 \\\\times 10^{-4}$. Note: $72 \\\\times 10^{-5}$ is numerically equal but not proper scientific notation (72 is not between 1 and 10).'
          },
          {
            question: 'Compute: $(6 \\\\times 10^3)(5 \\\\times 10^{-7})$',
            options: ['$30 \\\\times 10^{-4}$', '$3.0 \\\\times 10^{-3}$', '$3.0 \\\\times 10^{-4}$', '$11 \\\\times 10^{-4}$'],
            correctAnswer: 1,
            explanation: '$6 \\\\times 5 = 30$ and $10^{3+(-7)} = 10^{-4}$. So $30 \\\\times 10^{-4} = 3.0 \\\\times 10^{-3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Convert each number to proper scientific notation.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$45{,}000$',
            options: ['$4.5 \\\\times 10^3$', '$4.5 \\\\times 10^4$', '$45 \\\\times 10^3$', '$4.5 \\\\times 10^5$']
          },
          {
            label: '$0.0031$',
            options: ['$3.1 \\\\times 10^{-2}$', '$31 \\\\times 10^{-4}$', '$3.1 \\\\times 10^{-3}$', '$3.1 \\\\times 10^{-4}$']
          },
          {
            label: '$602{,}000{,}000{,}000{,}000{,}000{,}000{,}000$',
            options: ['$6.02 \\\\times 10^{21}$', '$6.02 \\\\times 10^{23}$', '$6.02 \\\\times 10^{24}$', '$60.2 \\\\times 10^{22}$']
          }
        ],
        correctAnswers: ['$4.5 \\\\times 10^4$', '$3.1 \\\\times 10^{-3}$', '$6.02 \\\\times 10^{23}$'],
        hint1: '$45{,}000 = 4.5$ with the decimal moved 4 places.',
        hint2: '$0.0031$: decimal moves 3 places right to get $3.1$.',
        hint3: 'That\\'s Avogadro\\'s number: $6.02 \\\\times 10^{23}$.',
        explanation: 'Remember: coefficient must be between 1 and 10.'
      }
    },
    {
      id: 'sat-exp5-input',
      type: 'input-boxes' as const,
      content: `
**Enter just the exponent (the power of 10).** 🧮

1) $8{,}300{,}000 = 8.3 \\\\times 10^{?}$ → exponent = ?

2) $\\\\frac{9 \\\\times 10^8}{3 \\\\times 10^5} = 3 \\\\times 10^{?}$ → exponent = ?

3) $(2 \\\\times 10^4)^3 = 8 \\\\times 10^{?}$ → exponent = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '12'],
        hint1: 'Count: $8{,}300{,}000$ has the decimal moving 6 places.',
        hint2: 'Divide coefficients: $9/3 = 3$. Subtract exponents: $8 - 5 = 3$.',
        hint3: '$(2 \\\\times 10^4)^3 = 2^3 \\\\times 10^{12} = 8 \\\\times 10^{12}$.',
        explanation: '1) $10^6$. 2) $10^3$. 3) $10^{12}$.'
      }
    },
    {
      id: 'sat-exp5-word',
      type: 'text' as const,
      content: `
## SAT Word Problem Patterns

**Pattern:** "The distance from Earth to the Sun is approximately $1.5 \\\\times 10^8$ km. Light travels at $3 \\\\times 10^5$ km/s. How many seconds does it take light to travel from the Sun to Earth?"

**Solution:**

$$t = \\\\frac{1.5 \\\\times 10^8}{3 \\\\times 10^5} = 0.5 \\\\times 10^3 = 5 \\\\times 10^2 = 500 \\\\text{ seconds}$$

**Pattern:** "A bacteria colony doubles every hour. If there are $3 \\\\times 10^4$ bacteria now, how many will there be in 5 hours?"

$$3 \\\\times 10^4 \\\\times 2^5 = 3 \\\\times 10^4 \\\\times 32 = 96 \\\\times 10^4 = 9.6 \\\\times 10^5$$
      `
    },
    {
      id: 'sat-exp5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A human hair is about $7 \\\\times 10^{-5}$ meters wide. A red blood cell is about $7 \\\\times 10^{-6}$ meters wide. A hair is how many times wider than a red blood cell?',
            options: ['$10$', '$100$', '$7$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{7 \\\\times 10^{-5}}{7 \\\\times 10^{-6}} = 1 \\\\times 10^{-5-(-6)} = 10^1 = 10$.'
          },
          {
            question: 'If $x = 4 \\\\times 10^3$ and $y = 5 \\\\times 10^5$, what is $xy$ in scientific notation?',
            options: ['$2 \\\\times 10^{9}$', '$20 \\\\times 10^{8}$', '$2 \\\\times 10^{8}$', '$9 \\\\times 10^{8}$'],
            correctAnswer: 0,
            explanation: '$4 \\\\times 5 = 20$ and $10^{3+5} = 10^8$. So $20 \\\\times 10^8 = 2 \\\\times 10^9$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 6: Growth & Decay ───────────────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satExponentsPart6Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp6-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Growth & Decay

**Part 6 of 7 — The SAT's Favorite Real-World Exponent Problems**

The general model:

$$A = P(1 + r)^t \\\\quad \\\\text{(growth)} \\\\qquad A = P(1 - r)^t \\\\quad \\\\text{(decay)}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Initial amount (principal) |
| $r$ | Rate (as a decimal) |
| $t$ | Time (number of periods) |

**Growth** → base $> 1$ (e.g., $1.05$ for 5% growth)
**Decay** → base between $0$ and $1$ (e.g., $0.92$ for 8% decay)
      `
    },
    {
      id: 'sat-exp6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Compound Interest**

You invest $\\\\$2{,}000$ at 6% annual interest compounded yearly. How much after 5 years?

$$A = 2000(1.06)^5 = 2000(1.3382...) \\\\approx \\\\$2{,}676.45$$

**Example 2 — Depreciation**

A car worth $\\\\$25{,}000$ loses 15% of its value each year. Value after 3 years?

$$A = 25000(1 - 0.15)^3 = 25000(0.85)^3 = 25000(0.614125) \\\\approx \\\\$15{,}353$$

**Example 3 — Doubling Time**

A population doubles every 4 years. Starting at $500$, population after $t$ years:

$$P(t) = 500 \\\\cdot 2^{t/4}$$

After 12 years: $P(12) = 500 \\\\cdot 2^3 = 500 \\\\cdot 8 = 4{,}000$.

---

**SAT Tip:** When you see "doubles every $k$ years," the model is $P \\\\cdot 2^{t/k}$. For "triples," use $3^{t/k}$.
      `
    },
    {
      id: 'sat-exp6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Exponential Models** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(t) = 800(0.75)^t$ models a quantity over time. Which statement is true?',
            options: [
              'The initial value is 75 and it grows by 800% per period',
              'The initial value is 800 and it decreases by 25% per period',
              'The initial value is 800 and it increases by 75% per period',
              'The initial value is 600 and it decreases by 75% per period'
            ],
            correctAnswer: 1,
            explanation: 'Initial value = 800 (when $t=0$). Base $0.75 = 1 - 0.25$, so it decreases by 25% each period.'
          },
          {
            question: 'Which function models a quantity that starts at 50 and triples every 6 hours?',
            options: ['$f(t) = 50(3)^{6t}$', '$f(t) = 50(3)^{t/6}$', '$f(t) = 50(6)^{t/3}$', '$f(t) = 150^{t/6}$'],
            correctAnswer: 1,
            explanation: 'Triples every 6 hours: after $t$ hours, the number of tripling periods is $t/6$. So $f(t) = 50 \\\\cdot 3^{t/6}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp6-halflife',
      type: 'text' as const,
      content: `
## Half-Life Problems

The SAT loves half-life questions. The model:

$$A = P \\\\cdot \\\\left(\\\\frac{1}{2}\\\\right)^{t/h}$$

where $h$ is the half-life (time for half to remain).

**Example:** A radioactive isotope has a half-life of 10 years. Starting with 200 grams, how much remains after 30 years?

$$A = 200 \\\\cdot \\\\left(\\\\frac{1}{2}\\\\right)^{30/10} = 200 \\\\cdot \\\\left(\\\\frac{1}{2}\\\\right)^3 = 200 \\\\cdot \\\\frac{1}{8} = 25 \\\\text{ grams}$$

**Quick shortcut for half-life:**

| Half-lives elapsed | Fraction remaining |
|-------------------|--------------------|
| 1 | $1/2$ |
| 2 | $1/4$ |
| 3 | $1/8$ |
| 4 | $1/16$ |
| 5 | $1/32$ |
      `
    },
    {
      id: 'sat-exp6-input',
      type: 'input-boxes' as const,
      content: `
**Solve each — enter a whole number.** 🧮

1) A substance has a half-life of 5 years. Starting with 160 g, how many grams remain after 15 years?

2) A population doubles every 3 years. Starting at 100, what is the population after 9 years?

3) You invest $\\\\$1{,}000$ at 10% annual growth. After 2 years, what is the value (round to nearest dollar)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '800', '1210'],
        hint1: '15 years = 3 half-lives. $160 \\\\div 2 \\\\div 2 \\\\div 2 = 20$.',
        hint2: '9 years = 3 doubling periods. $100 \\\\times 2^3 = 800$.',
        hint3: '$1000(1.10)^2 = 1000(1.21) = 1210$.',
        explanation: '1) 3 half-lives → $160/8 = 20$. 2) $100 \\\\cdot 8 = 800$. 3) $\\\\$1{,}210$.'
      }
    },
    {
      id: 'sat-exp6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the model for each scenario.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car loses 20% of its value each year (initial: $\\\\$30{,}000$)',
            options: ['$30000(1.20)^t$', '$30000(0.80)^t$', '$30000(0.20)^t$', '$30000 - 0.20t$']
          },
          {
            label: 'Bacteria double every 2 hours (initial count: 500)',
            options: ['$500(2)^{2t}$', '$500(2)^{t/2}$', '$1000^t$', '$500 + 2t$']
          },
          {
            label: 'A savings account earns 3% annual interest (initial: $\\\\$5{,}000$)',
            options: ['$5000(0.03)^t$', '$5000(0.97)^t$', '$5000(1.03)^t$', '$5000 + 150t$']
          }
        ],
        correctAnswers: ['$30000(0.80)^t$', '$500(2)^{t/2}$', '$5000(1.03)^t$'],
        hint1: 'Loses 20% → keeps 80% → multiply by $0.80$ each year.',
        hint2: 'Doubles every 2 hours → $2^{t/2}$ where $t$ is in hours.',
        hint3: 'Earns 3% → multiply by $1.03$ each year.',
        explanation: 'Growth: base $> 1$. Decay: base between 0 and 1. Linear models (like $+150t$) are NOT exponential.'
      }
    },
    {
      id: 'sat-exp6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The value of a collectible is modeled by $V(t) = 120(1.08)^t$, where $t$ is the number of years since purchase. What does 1.08 represent?',
            options: [
              'The collectible gains $\\\\$1.08$ in value each year',
              'The collectible\\'s value increases by 8% each year',
              'The collectible is worth $\\\\$108$ after one year',
              'The collectible\\'s value increases by 108% each year'
            ],
            correctAnswer: 1,
            explanation: 'The base $1.08 = 1 + 0.08$, so the value grows by 8% per year. (Not $\\\\$1.08$ — that would be linear, not exponential.)'
          },
          {
            question: 'A medication has a half-life of 4 hours in the body. If a patient takes 400 mg, approximately how many mg remain after 12 hours?',
            options: ['$200$', '$100$', '$50$', '$25$'],
            correctAnswer: 2,
            explanation: '12 hours = 3 half-lives. $400 \\\\to 200 \\\\to 100 \\\\to 50$ mg.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 7: Review ───────────────────────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp7-cheatsheet',
      type: 'text' as const,
      content: `
# 🏆 Exponents & Radicals — Complete Review

**Part 7 of 7 — Cheat Sheet + Mixed Practice**

**Master Cheat Sheet — All Rules in One Place**

| Rule | Formula |
|------|---------|
| Product | $a^m \\\\cdot a^n = a^{m+n}$ |
| Quotient | $\\\\frac{a^m}{a^n} = a^{m-n}$ |
| Power | $(a^m)^n = a^{mn}$ |
| Zero Exponent | $a^0 = 1$ |
| Negative Exp. | $a^{-n} = \\\\frac{1}{a^n}$ |
| Fractional Exp. | $x^{m/n} = \\\\sqrt[n]{x^m}$ |
| Radical Product | $\\\\sqrt{ab} = \\\\sqrt{a}\\\\sqrt{b}$ |
| Rationalize | $\\\\frac{a}{\\\\sqrt{b}} = \\\\frac{a\\\\sqrt{b}}{b}$ |
| Growth Model | $A = P(1+r)^t$ |
| Decay Model | $A = P(1-r)^t$ |
| Half-Life | $A = P(\\\\frac{1}{2})^{t/h}$ |
| Scientific Not. | $a \\\\times 10^n,\\\\; 1 \\\\le a < 10$ |
      `
    },
    {
      id: 'sat-exp7-tips',
      type: 'text' as const,
      content: `
## SAT Strategy Recap

**Time Management:**
- Exponent-rule questions should take **30–45 seconds** max.
- Growth/decay word problems: budget **60–90 seconds**.
- If stuck, try plugging in answer choices — it often works faster than algebra.

**Common Traps:**
1. Confusing $(2x)^3 = 8x^3$ with $2x^3$ (missing the 8).
2. Forgetting that $x^0 = 1$, not $0$.
3. Adding exponents when bases are different: $2^3 \\\\cdot 3^2 \\\\neq 6^5$.
4. Misreading decay: $0.85^t$ means 15% decay, NOT 85% decay.
5. In scientific notation, $32 \\\\times 10^4$ is not proper form — adjust to $3.2 \\\\times 10^5$.

**Power Moves:**
- Convert everything to the same base before comparing.
- When in doubt, write it out: expand the exponent to see the pattern.
- On calculator-allowed sections, verify your algebraic answer numerically.
      `
    },
    {
      id: 'sat-exp7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\\\frac{(2x^3)^2 \\\\cdot x^{-4}}{2x^2}$',
            options: ['$2$', '$2x^0 = 2$', '$2x^{-2}$', '$4x$'],
            correctAnswer: 1,
            explanation: 'Numerator: $(2x^3)^2 = 4x^6$. Then $4x^6 \\\\cdot x^{-4} = 4x^2$. Divide: $\\\\frac{4x^2}{2x^2} = 2$. Since $x^0 = 1$, the answer is $2$.'
          },
          {
            question: 'If $\\\\sqrt[3]{x} = 4$, what is $x^{2/3}$?',
            options: ['$2$', '$8$', '$16$', '$64$'],
            correctAnswer: 2,
            explanation: '$x^{1/3} = 4$, so $x^{2/3} = (x^{1/3})^2 = 4^2 = 16$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A radioactive sample of 640 mg has a half-life of 8 hours. How much remains after 24 hours?',
            options: ['$320$ mg', '$160$ mg', '$80$ mg', '$40$ mg'],
            correctAnswer: 2,
            explanation: '24 hours = 3 half-lives. $640 \\\\to 320 \\\\to 160 \\\\to 80$ mg.'
          },
          {
            question: '$\\\\frac{6 \\\\times 10^9}{2 \\\\times 10^{-3}}$ equals:',
            options: ['$3 \\\\times 10^{6}$', '$3 \\\\times 10^{12}$', '$3 \\\\times 10^{-27}$', '$12 \\\\times 10^{6}$'],
            correctAnswer: 1,
            explanation: '$6/2 = 3$ and $10^{9-(-3)} = 10^{12}$. Answer: $3 \\\\times 10^{12}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge — enter a number for each.** 🧮

1) $4^{3/2}$ = ?

2) Rationalize: $\\\\frac{10}{\\\\sqrt{5}} = a\\\\sqrt{5}$. What is $a$?

3) If an investment grows by 20% per year, by what factor has it grown after 3 years? (Give answer as a decimal, e.g., 1.728)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '2', '1.728'],
        hint1: '$4^{3/2} = (\\\\sqrt{4})^3 = 2^3 = 8$.',
        hint2: '$\\\\frac{10}{\\\\sqrt{5}} = \\\\frac{10\\\\sqrt{5}}{5} = 2\\\\sqrt{5}$. So $a = 2$.',
        hint3: '$(1.20)^3 = 1.728$.',
        explanation: '1) $8$. 2) $a = 2$. 3) $(1.2)^3 = 1.728$.'
      }
    },
    {
      id: 'sat-exp7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify each statement as TRUE or FALSE.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(-5)^0 = 1$',
            options: ['TRUE', 'FALSE']
          },
          {
            label: '$2^3 \\\\cdot 3^2 = 6^5$',
            options: ['TRUE', 'FALSE']
          },
          {
            label: '$x^{-1} + x^{-1} = 2x^{-1}$',
            options: ['TRUE', 'FALSE']
          }
        ],
        correctAnswers: ['TRUE', 'FALSE', 'TRUE'],
        hint1: 'Any nonzero number raised to the 0 power equals 1.',
        hint2: '$2^3 \\\\cdot 3^2 = 8 \\\\cdot 9 = 72$, but $6^5 = 7776$. Not equal! You can only add exponents when bases are the same.',
        hint3: 'Like terms: $\\\\frac{1}{x} + \\\\frac{1}{x} = \\\\frac{2}{x} = 2x^{-1}$. This is addition of like terms, not an exponent rule.',
        explanation: '1) TRUE. 2) FALSE — different bases cannot be combined by adding exponents. 3) TRUE — adding like terms.'
      }
    },
    {
      id: 'sat-exp7-final',
      type: 'text' as const,
      content: `
## You're Ready! 🎯

**What you've mastered:**
- ✅ All 7 exponent laws (product, quotient, power, zero, negative, products/quotients of powers)
- ✅ Fractional exponents and radical ↔ exponent conversion
- ✅ Simplifying radicals and rationalizing denominators
- ✅ Solving exponential equations by matching bases
- ✅ Scientific notation — converting and computing
- ✅ Growth, decay, half-life, and doubling-time models

**Next steps:**
- Practice timed sets of 5 questions in under 5 minutes.
- Pay special attention to negative and fractional exponents — they appear most frequently.
- On test day, if an exponent problem feels hard, try plugging in small numbers to test the answer choices.

Good luck on the SAT! 🚀
      `
    }
  ]
}
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Exponents & Radicals lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")
