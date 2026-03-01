#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Complex Numbers.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-complex-numbers-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-complex-numbers-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: The Imaginary Unit i ─────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satComplexPart1Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx1-intro',
      type: 'text' as const,
      content: `
# 🔢 The Imaginary Unit $i$

**Part 1 of 7 — Definition, Powers of $i$, and the Cycle**

The imaginary unit $i$ was invented to give meaning to the square root of negative numbers:

$$
i = \\\\sqrt{-1} \\\\qquad i^2 = -1
$$

| Expression | Value |
|------------|-------|
| $\\\\sqrt{-4}$ | $2i$ |
| $\\\\sqrt{-9}$ | $3i$ |
| $\\\\sqrt{-25}$ | $5i$ |

**General rule:** $\\\\sqrt{-a} = i\\\\sqrt{a}$ for any positive number $a$.

A **complex number** has the form $a + bi$, where $a$ is the **real part** and $b$ is the **imaginary part**.
      `
    },
    {
      id: 'sat-cx1-powers',
      type: 'text' as const,
      content: `
## Powers of $i$ — The 4-Step Cycle

The powers of $i$ repeat every 4:

| Power | Value | Why |
|-------|-------|-----|
| $i^1$ | $i$ | Definition |
| $i^2$ | $-1$ | Definition |
| $i^3$ | $-i$ | $i^2 \\\\cdot i = -1 \\\\cdot i = -i$ |
| $i^4$ | $1$ | $i^2 \\\\cdot i^2 = (-1)(-1) = 1$ |
| $i^5$ | $i$ | Cycle restarts |

**Shortcut:** To find $i^n$, divide $n$ by $4$ and look at the **remainder**:

| Remainder | $i^n$ equals |
|-----------|-------------|
| $0$ | $1$ |
| $1$ | $i$ |
| $2$ | $-1$ |
| $3$ | $-i$ |

**Example:** $i^{23}$. Divide $23 \\\\div 4 = 5$ remainder $3$. So $i^{23} = -i$.

**Example:** $i^{100}$. Divide $100 \\\\div 4 = 25$ remainder $0$. So $i^{100} = 1$.
      `
    },
    {
      id: 'sat-cx1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Powers of $i$** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $i^{42}$?',
            options: ['$1$', '$i$', '$-1$', '$-i$'],
            correctAnswer: 2,
            explanation: '$42 \\\\div 4 = 10$ remainder $2$, so $i^{42} = i^2 = -1$.'
          },
          {
            question: 'What is $i^{17} + i^{18}$?',
            options: ['$0$', '$1 + i$', '$i - 1$', '$-1 - i$'],
            correctAnswer: 2,
            explanation: '$17 \\\\div 4$ has remainder $1$, so $i^{17} = i$. $18 \\\\div 4$ has remainder $2$, so $i^{18} = -1$. Sum: $i + (-1) = i - 1$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx1-simplify',
      type: 'text' as const,
      content: `
## Simplifying Square Roots of Negatives

Always extract $i$ first, then simplify the radical:

**Example 1:** $\\\\sqrt{-48}$
$$\\\\sqrt{-48} = i\\\\sqrt{48} = i\\\\sqrt{16 \\\\cdot 3} = 4i\\\\sqrt{3}$$

**Example 2:** $\\\\sqrt{-72}$
$$\\\\sqrt{-72} = i\\\\sqrt{72} = i\\\\sqrt{36 \\\\cdot 2} = 6i\\\\sqrt{2}$$

**Example 3:** $3\\\\sqrt{-50}$
$$3\\\\sqrt{-50} = 3 \\\\cdot i\\\\sqrt{50} = 3i\\\\sqrt{25 \\\\cdot 2} = 15i\\\\sqrt{2}$$

---

**⚠️ Common mistake:** $\\\\sqrt{-4} \\\\cdot \\\\sqrt{-9} \\\\neq \\\\sqrt{36} = 6$. You must convert to $i$-form first: $(2i)(3i) = 6i^2 = -6$.
      `
    },
    {
      id: 'sat-cx1-input1',
      type: 'input-boxes' as const,
      content: `
**Simplify these expressions.** 🧮

Write answers using $i$ (e.g. type "5i" or "-3i" or "1").

1) $i^{36} = $

2) $i^{75} = $

3) $\\\\sqrt{-64} = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-i', '8i'],
        hint1: '$36 \\\\div 4 = 9$ remainder $0$. Remainder $0$ means $i^{36} = 1$.',
        hint2: '$75 \\\\div 4 = 18$ remainder $3$. Remainder $3$ means $i^{75} = -i$.',
        hint3: '$\\\\sqrt{-64} = i\\\\sqrt{64} = 8i$.',
        explanation: '$i^{36}=1$ (rem 0), $i^{75}=-i$ (rem 3), $\\\\sqrt{-64}=8i$.'
      }
    },
    {
      id: 'sat-cx1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to its simplified value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$i^{20}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          },
          {
            label: '$i^{31}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          },
          {
            label: '$i^{50}$',
            options: ['$1$', '$i$', '$-1$', '$-i$']
          }
        ],
        correctAnswers: ['$1$', '$-i$', '$-1$'],
        hint1: '$20 \\\\div 4 = 5$ remainder $0$, so $i^{20} = 1$.',
        hint2: '$31 \\\\div 4 = 7$ remainder $3$, so $i^{31} = -i$.',
        hint3: '$50 \\\\div 4 = 12$ remainder $2$, so $i^{50} = -1$.',
        explanation: 'Divide the exponent by 4 and use the remainder: 0→1, 1→i, 2→−1, 3→−i.'
      }
    },
    {
      id: 'sat-cx1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is equal to $i^4 + i^8 + i^{12} + i^{16}$?',
            options: ['$4$', '$4i$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Each exponent is divisible by 4, so each term equals $1$. The sum is $1+1+1+1=4$.'
          },
          {
            question: 'What is the value of $\\\\frac{i^{25}}{i^{21}}$?',
            options: ['$1$', '$i$', '$-1$', '$-i$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{i^{25}}{i^{21}} = i^{25-21} = i^4 = 1$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 2: Adding & Subtracting Complex Numbers ────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satComplexPart2Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx2-intro',
      type: 'text' as const,
      content: `
# ➕ Adding & Subtracting Complex Numbers

**Part 2 of 7 — Combine Real with Real, Imaginary with Imaginary**

Complex numbers have the form $a + bi$. When adding or subtracting, treat $i$ like a variable — combine **like terms**.

$$
(a + bi) + (c + di) = (a + c) + (b + d)i
$$

$$
(a + bi) - (c + di) = (a - c) + (b - d)i
$$

| Operation | Example | Result |
|-----------|---------|--------|
| Addition | $(3 + 2i) + (5 + 4i)$ | $8 + 6i$ |
| Subtraction | $(7 + 3i) - (2 + 5i)$ | $5 - 2i$ |
| Mixed | $(4 - i) + (-1 + 6i)$ | $3 + 5i$ |
      `
    },
    {
      id: 'sat-cx2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** $(6 + 3i) + (-2 + 7i)$

1. Real parts: $6 + (-2) = 4$
2. Imaginary parts: $3i + 7i = 10i$
3. **Result:** $4 + 10i$

**Example 2:** $(9 - 4i) - (3 - 8i)$

1. Distribute the minus sign: $9 - 4i - 3 + 8i$
2. Real parts: $9 - 3 = 6$
3. Imaginary parts: $-4i + 8i = 4i$
4. **Result:** $6 + 4i$

**Example 3:** $(-5 + 2i) - (-5 + 2i)$

1. $-5 + 2i + 5 - 2i = 0 + 0i = 0$

---

**⚠️ Watch the signs!** The most common error is forgetting to distribute the negative sign when subtracting. $(a+bi)-(c+di) = a+bi-c-di$, NOT $a+bi-c+di$.
      `
    },
    {
      id: 'sat-cx2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Addition & Subtraction** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(3 + 5i) + (-7 + 2i)$?',
            options: ['$-4 + 7i$', '$10 + 7i$', '$-4 + 3i$', '$4 - 7i$'],
            correctAnswer: 0,
            explanation: 'Real: $3 + (-7) = -4$. Imaginary: $5i + 2i = 7i$. Result: $-4 + 7i$.'
          },
          {
            question: 'What is $(8 - 3i) - (2 + 4i)$?',
            options: ['$6 + i$', '$10 - 7i$', '$6 - 7i$', '$6 + 7i$'],
            correctAnswer: 2,
            explanation: 'Distribute: $8 - 3i - 2 - 4i$. Real: $8-2=6$. Imaginary: $-3i-4i=-7i$. Result: $6-7i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx2-multi-step',
      type: 'text' as const,
      content: `
## Multi-Step Problems

**Example 4:** If $z_1 = 2 + 3i$ and $z_2 = -1 + 4i$, find $2z_1 - z_2$.

1. $2z_1 = 2(2+3i) = 4 + 6i$
2. $2z_1 - z_2 = (4+6i) - (-1+4i) = 4+6i+1-4i = 5+2i$

**Example 5:** Find the value of $a$ and $b$ such that $(a + bi) + (3 - 2i) = 7 + i$.

1. $(a+3) + (b-2)i = 7 + i$
2. Real parts: $a+3=7 \\\\Rightarrow a=4$
3. Imaginary parts: $b-2=1 \\\\Rightarrow b=3$

---

**SAT Tip:** Some problems ask for just the real part or just the imaginary part. Read the question carefully!
      `
    },
    {
      id: 'sat-cx2-input1',
      type: 'input-boxes' as const,
      content: `
**Compute each result.** 🧮

Write answers in $a + bi$ form (e.g. "3 + 2i" or "-1 - 4i"). For real answers, just write the number.

1) $(4 + 9i) + (-4 + i) = $

2) $(10 - 6i) - (3 - 6i) = $

3) $3(2 + i) - (1 + 5i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10i', '7', '5 - 2i'],
        hint1: 'Real: $4+(-4)=0$. Imaginary: $9i+i=10i$. When the real part is 0, the answer is just $10i$.',
        hint2: 'Real: $10-3=7$. Imaginary: $-6i-(-6i)=-6i+6i=0$. The answer is just $7$.',
        hint3: '$3(2+i)=6+3i$. Then $6+3i-1-5i=5-2i$.',
        explanation: '$(4+9i)+(-4+i)=10i$. $(10-6i)-(3-6i)=7$. $3(2+i)-(1+5i)=5-2i$.'
      }
    },
    {
      id: 'sat-cx2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the real and imaginary parts.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Real part of $(5 + 3i) - (2 - i)$',
            options: ['$3$', '$7$', '$4$', '$2$']
          },
          {
            label: 'Imaginary part of $(5 + 3i) - (2 - i)$',
            options: ['$2i$', '$3i$', '$4i$', '$-4i$']
          },
          {
            label: 'Real part of $4i + (6 - 2i)$',
            options: ['$4$', '$6$', '$0$', '$2$']
          }
        ],
        correctAnswers: ['$3$', '$4i$', '$6$'],
        hint1: '$(5+3i)-(2-i)=5+3i-2+i=3+4i$. The real part is $3$.',
        hint2: 'From the same calculation, the imaginary part is $4i$.',
        hint3: '$4i + (6-2i) = 6 + 2i$. The real part is $6$.',
        explanation: '$(5+3i)-(2-i)=3+4i$: real part $3$, imaginary part $4i$. $4i+(6-2i)=6+2i$: real part $6$.'
      }
    },
    {
      id: 'sat-cx2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(a+bi)+(4-3i)=6+2i$, what is the value of $a+b$?',
            options: ['$5$', '$7$', '$3$', '$9$'],
            correctAnswer: 1,
            explanation: '$a+4=6 \\\\Rightarrow a=2$. $b-3=2 \\\\Rightarrow b=5$. So $a+b=2+5=7$.'
          },
          {
            question: 'What is the sum $(1+i)+(2+2i)+(3+3i)+\\\\cdots+(10+10i)$?',
            options: ['$55 + 55i$', '$55$', '$10 + 10i$', '$100 + 100i$'],
            correctAnswer: 0,
            explanation: 'Real parts: $1+2+3+\\\\cdots+10 = 55$. Imaginary parts: $1+2+3+\\\\cdots+10 = 55$. Total: $55+55i$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 3: Multiplying Complex Numbers ──────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satComplexPart3Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx3-intro',
      type: 'text' as const,
      content: `
# ✖️ Multiplying Complex Numbers

**Part 3 of 7 — FOIL Method, $i^2 = -1$, and Special Products**

To multiply two complex numbers, use FOIL just like with binomials, then replace $i^2$ with $-1$:

$$
(a+bi)(c+di) = ac + adi + bci + bdi^2
$$
$$
= ac + adi + bci + bd(-1)
$$
$$
= (ac - bd) + (ad + bc)i
$$

**Quick formula:**
$$
(a+bi)(c+di) = (ac-bd) + (ad+bc)i
$$

Don't memorize the formula — just FOIL and replace $i^2 = -1$.
      `
    },
    {
      id: 'sat-cx3-examples',
      type: 'text' as const,
      content: `
## Worked Examples — FOIL

**Example 1:** $(3 + 2i)(4 + 5i)$

| Step | Calculation |
|------|-------------|
| **F**irst | $3 \\\\cdot 4 = 12$ |
| **O**uter | $3 \\\\cdot 5i = 15i$ |
| **I**nner | $2i \\\\cdot 4 = 8i$ |
| **L**ast | $2i \\\\cdot 5i = 10i^2 = -10$ |

$$12 + 15i + 8i - 10 = 2 + 23i$$

**Example 2:** $(1 - 3i)(2 + i)$

$$= 2 + i - 6i - 3i^2 = 2 - 5i - 3(-1) = 2 - 5i + 3 = 5 - 5i$$

**Example 3:** $(4i)(3 - 2i)$

$$= 12i - 8i^2 = 12i - 8(-1) = 8 + 12i$$
      `
    },
    {
      id: 'sat-cx3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Multiplication** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(2 + 3i)(2 - 3i)$?',
            options: ['$4 + 9$', '$13$', '$4 - 9i^2$', '$-5$'],
            correctAnswer: 1,
            explanation: '$(2+3i)(2-3i)=4-6i+6i-9i^2=4-9(-1)=4+9=13$. This is a conjugate pair!'
          },
          {
            question: 'What is $(1 + i)^2$?',
            options: ['$2$', '$2i$', '$1 + 2i$', '$2 + 2i$'],
            correctAnswer: 1,
            explanation: '$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i + (-1) = 2i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx3-special',
      type: 'text' as const,
      content: `
## Special Products

**Conjugate pairs** give real results — this is crucial for division (Part 4):

$$
(a+bi)(a-bi) = a^2 + b^2
$$

| Example | Conjugate Pair | Product |
|---------|---------------|---------|
| $(3+4i)(3-4i)$ | Yes | $9+16=25$ |
| $(1+i)(1-i)$ | Yes | $1+1=2$ |
| $(5+2i)(5-2i)$ | Yes | $25+4=29$ |

**Squaring a complex number:**

$$(a+bi)^2 = a^2 + 2abi + b^2i^2 = (a^2-b^2) + 2abi$$

**Example:** $(3+i)^2 = 9 + 6i + i^2 = 9 + 6i - 1 = 8 + 6i$
      `
    },
    {
      id: 'sat-cx3-input1',
      type: 'input-boxes' as const,
      content: `
**Multiply and simplify.** 🧮

Write answers in $a + bi$ form.

1) $(5 + i)(2 + 3i) = $

2) $(4 - 2i)^2 = $

3) $(6 + i)(6 - i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7 + 17i', '12 - 16i', '37'],
        hint1: 'FOIL: $10 + 15i + 2i + 3i^2 = 10 + 17i + 3(-1) = 7 + 17i$.',
        hint2: '$(4-2i)^2 = 16 - 16i + 4i^2 = 16 - 16i - 4 = 12 - 16i$.',
        hint3: 'Conjugate pair: $6^2 + 1^2 = 36 + 1 = 37$.',
        explanation: '$(5+i)(2+3i)=7+17i$. $(4-2i)^2=12-16i$. $(6+i)(6-i)=37$.'
      }
    },
    {
      id: 'sat-cx3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Classify each product.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(3+2i)(3-2i)$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          },
          {
            label: '$(1+i)^2$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          },
          {
            label: '$(2+i)(1+3i)$ is…',
            options: ['purely real', 'purely imaginary', 'complex (has both parts)']
          }
        ],
        correctAnswers: ['purely real', 'purely imaginary', 'complex (has both parts)'],
        hint1: 'Conjugate pairs always produce a purely real number: $9+4=13$.',
        hint2: '$(1+i)^2 = 1+2i+i^2 = 2i$, which is purely imaginary.',
        hint3: '$(2+i)(1+3i) = 2+6i+i+3i^2 = 2+7i-3 = -1+7i$, which has both parts.',
        explanation: 'Conjugate pairs → real. $(1+i)^2=2i$ → imaginary. $(2+i)(1+3i)=-1+7i$ → complex.'
      }
    },
    {
      id: 'sat-cx3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(3+2i)(3-2i)-(1+i)(1-i)$?',
            options: ['$13$', '$11$', '$15$', '$2$'],
            correctAnswer: 1,
            explanation: '$(3+2i)(3-2i)=9+4=13$. $(1+i)(1-i)=1+1=2$. Difference: $13-2=11$.'
          },
          {
            question: 'If $(a+bi)^2 = -16$, which of the following could be $a+bi$?',
            options: ['$4$', '$4i$', '$-4$', '$2+2i$'],
            correctAnswer: 1,
            explanation: '$(4i)^2 = 16i^2 = 16(-1) = -16$. ✓'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 4: Complex Conjugates & Division ────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satComplexPart4Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx4-intro',
      type: 'text' as const,
      content: `
# ➗ Complex Conjugates & Division

**Part 4 of 7 — Conjugates, Rationalizing, Division**

The **complex conjugate** of $a + bi$ is $a - bi$. The product of a number and its conjugate is always **real**:

$$
(a + bi)(a - bi) = a^2 + b^2
$$

| Number | Conjugate | Product |
|--------|-----------|---------|
| $3 + 4i$ | $3 - 4i$ | $25$ |
| $2 - i$ | $2 + i$ | $5$ |
| $7i$ | $-7i$ | $49$ |

This property is the key to dividing complex numbers.
      `
    },
    {
      id: 'sat-cx4-division',
      type: 'text' as const,
      content: `
## Division — Multiply by the Conjugate

To divide $\\\\frac{a + bi}{c + di}$, multiply top and bottom by the conjugate of the denominator:

$$
\\\\frac{a+bi}{c+di} = \\\\frac{(a+bi)(c-di)}{(c+di)(c-di)} = \\\\frac{(a+bi)(c-di)}{c^2+d^2}
$$

**Example 1:** $\\\\frac{3+i}{1-2i}$

$$= \\\\frac{(3+i)(1+2i)}{(1-2i)(1+2i)} = \\\\frac{3+6i+i+2i^2}{1+4} = \\\\frac{3+7i-2}{5} = \\\\frac{1+7i}{5} = \\\\frac{1}{5}+\\\\frac{7}{5}i$$

**Example 2:** $\\\\frac{4}{2+i}$

$$= \\\\frac{4(2-i)}{(2+i)(2-i)} = \\\\frac{8-4i}{4+1} = \\\\frac{8-4i}{5} = \\\\frac{8}{5}-\\\\frac{4}{5}i$$
      `
    },
    {
      id: 'sat-cx4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Division** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\\\frac{5+i}{2+3i}$ in $a+bi$ form?',
            options: ['$1 - i$', '$\\\\frac{13-13i}{13}$', '$1+i$', '$\\\\frac{13+13i}{13}$'],
            correctAnswer: 0,
            explanation: 'Multiply by conjugate: $\\\\frac{(5+i)(2-3i)}{(2+3i)(2-3i)}=\\\\frac{10-15i+2i-3i^2}{4+9}=\\\\frac{10-13i+3}{13}=\\\\frac{13-13i}{13}=1-i$.'
          },
          {
            question: 'What is $\\\\frac{6i}{3-i}$?',
            options: ['$-\\\\frac{3}{5}+\\\\frac{9}{5}i$', '$\\\\frac{3}{5}+\\\\frac{9}{5}i$', '$2i$', '$\\\\frac{6}{5}+\\\\frac{18}{5}i$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{6i(3+i)}{(3-i)(3+i)}=\\\\frac{18i+6i^2}{9+1}=\\\\frac{-6+18i}{10}=-\\\\frac{3}{5}+\\\\frac{9}{5}i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx4-steps',
      type: 'text' as const,
      content: `
## Step-by-Step Division Checklist

When dividing complex numbers on the SAT:

1. **Identify** the denominator (e.g., $c + di$)
2. **Write** its conjugate ($c - di$)
3. **Multiply** numerator and denominator by the conjugate
4. **FOIL** the numerator
5. Use $i^2 = -1$ to simplify
6. Denominator becomes $c^2 + d^2$ (always a real number)
7. **Split** into real and imaginary parts if needed

**Example:** $\\\\frac{2-3i}{4+i}$

$$= \\\\frac{(2-3i)(4-i)}{(4+i)(4-i)} = \\\\frac{8-2i-12i+3i^2}{16+1} = \\\\frac{8-14i-3}{17} = \\\\frac{5-14i}{17}$$

$$= \\\\frac{5}{17} - \\\\frac{14}{17}i$$
      `
    },
    {
      id: 'sat-cx4-input1',
      type: 'input-boxes' as const,
      content: `
**Divide and simplify.** 🧮

Give answers as simplified fractions or whole numbers.

1) $\\\\frac{10}{1+3i}$ — what is the real part?

2) $\\\\frac{10}{1+3i}$ — what is the coefficient of $i$?

3) $(3+4i)(3-4i) = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-3', '25'],
        hint1: 'Multiply by conjugate: $\\\\frac{10(1-3i)}{(1+3i)(1-3i)}=\\\\frac{10-30i}{1+9}=\\\\frac{10-30i}{10}=1-3i$.',
        hint2: 'From $1-3i$, the coefficient of $i$ is $-3$.',
        hint3: 'Conjugate pair: $3^2+4^2=9+16=25$.',
        explanation: '$\\\\frac{10}{1+3i}=\\\\frac{10(1-3i)}{10}=1-3i$. Real part: $1$, imaginary coefficient: $-3$. $(3+4i)(3-4i)=25$.'
      }
    },
    {
      id: 'sat-cx4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match each expression to the correct conjugate.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conjugate of $5 - 2i$',
            options: ['$5 + 2i$', '$-5 + 2i$', '$-5 - 2i$', '$2 - 5i$']
          },
          {
            label: 'Conjugate of $-3i$',
            options: ['$3$', '$3i$', '$-3$', '$-3i$']
          },
          {
            label: 'Conjugate of $4$',
            options: ['$-4$', '$4i$', '$4$', '$-4i$']
          }
        ],
        correctAnswers: ['$5 + 2i$', '$3i$', '$4$'],
        hint1: 'Change the sign of the imaginary part: $5-2i \\\\to 5+2i$.',
        hint2: '$-3i = 0 - 3i$, so the conjugate is $0 + 3i = 3i$.',
        hint3: '$4 = 4 + 0i$, so the conjugate is $4 - 0i = 4$. Real numbers are their own conjugates.',
        explanation: 'Flip the sign of the imaginary part. Real numbers are self-conjugate.'
      }
    },
    {
      id: 'sat-cx4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\\\frac{(1+i)^2}{i}$?',
            options: ['$2$', '$-2$', '$2i$', '$-2i$'],
            correctAnswer: 0,
            explanation: '$(1+i)^2=1+2i+i^2=2i$. Then $\\\\frac{2i}{i}=2$.'
          },
          {
            question: 'If $z = a+bi$ and $z \\\\cdot \\\\bar{z} = 25$, which could be $z$?',
            options: ['$5+i$', '$3+4i$', '$5+5i$', '$25$'],
            correctAnswer: 1,
            explanation: '$z \\\\cdot \\\\bar{z} = a^2+b^2$. For $3+4i$: $9+16=25$. ✓'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 5: Solving Equations with Complex Solutions ─────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satComplexPart5Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx5-intro',
      type: 'text' as const,
      content: `
# 🔍 Solving Equations with Complex Solutions

**Part 5 of 7 — Negative Discriminants, $x^2 + k = 0$, Quadratic Formula**

Not every quadratic equation has real solutions. When the discriminant $b^2-4ac < 0$, the solutions are **complex numbers**.

$$
x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}
$$

| Discriminant $\\\\Delta = b^2-4ac$ | Solutions |
|----------------------------------|-----------|
| $\\\\Delta > 0$ | Two real solutions |
| $\\\\Delta = 0$ | One repeated real solution |
| $\\\\Delta < 0$ | Two complex conjugate solutions |

**Key fact:** Complex solutions always come in conjugate pairs: if $a+bi$ is a solution, then $a-bi$ is also a solution.
      `
    },
    {
      id: 'sat-cx5-simple',
      type: 'text' as const,
      content: `
## Simple Cases: $x^2 + k = 0$

**Example 1:** Solve $x^2 + 4 = 0$.

$$x^2 = -4 \\\\Rightarrow x = \\\\pm\\\\sqrt{-4} = \\\\pm 2i$$

**Example 2:** Solve $x^2 + 9 = 0$.

$$x^2 = -9 \\\\Rightarrow x = \\\\pm 3i$$

**Example 3:** Solve $2x^2 + 50 = 0$.

$$2x^2 = -50 \\\\Rightarrow x^2 = -25 \\\\Rightarrow x = \\\\pm 5i$$

---

**Pattern:** $x^2 + k = 0$ (with $k > 0$) always gives $x = \\\\pm i\\\\sqrt{k}$.
      `
    },
    {
      id: 'sat-cx5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Simple Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What are the solutions to $x^2 + 16 = 0$?',
            options: ['$x = \\\\pm 4$', '$x = \\\\pm 4i$', '$x = \\\\pm 8i$', '$x = \\\\pm 16i$'],
            correctAnswer: 1,
            explanation: '$x^2 = -16 \\\\Rightarrow x = \\\\pm\\\\sqrt{-16} = \\\\pm 4i$.'
          },
          {
            question: 'How many real solutions does $3x^2 + 12 = 0$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: '$x^2 = -4$, which has no real solutions (you cannot square a real number and get a negative). It has 2 complex solutions: $\\\\pm 2i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx5-quadratic',
      type: 'text' as const,
      content: `
## Using the Quadratic Formula

**Example:** Solve $x^2 - 4x + 13 = 0$.

Here $a=1$, $b=-4$, $c=13$.

$$\\\\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36$$

$$x = \\\\frac{4 \\\\pm \\\\sqrt{-36}}{2} = \\\\frac{4 \\\\pm 6i}{2} = 2 \\\\pm 3i$$

**Solutions:** $x = 2 + 3i$ and $x = 2 - 3i$ (conjugate pair!).

**Example:** Solve $x^2 + 2x + 5 = 0$.

$$\\\\Delta = 4 - 20 = -16$$

$$x = \\\\frac{-2 \\\\pm \\\\sqrt{-16}}{2} = \\\\frac{-2 \\\\pm 4i}{2} = -1 \\\\pm 2i$$

---

**SAT Tip:** If a problem says "non-real solutions," it means the discriminant is negative.
      `
    },
    {
      id: 'sat-cx5-input1',
      type: 'input-boxes' as const,
      content: `
**Solve each equation.** 🧮

1) $x^2 + 36 = 0$ — the positive imaginary solution is $x = $

2) $x^2 - 6x + 13 = 0$ — the discriminant is $\\\\Delta = $

3) For the equation in (2), the solutions are $x = 3 \\\\pm \\\\_\\\\_ i$. Fill in the blank.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6i', '-16', '2'],
        hint1: '$x^2 = -36$, so $x = \\\\pm 6i$. The positive imaginary solution is $6i$.',
        hint2: '$\\\\Delta = (-6)^2 - 4(1)(13) = 36 - 52 = -16$.',
        hint3: '$x = \\\\frac{6 \\\\pm \\\\sqrt{-16}}{2} = \\\\frac{6 \\\\pm 4i}{2} = 3 \\\\pm 2i$. The blank is $2$.',
        explanation: '$x^2+36=0 \\\\Rightarrow x=\\\\pm 6i$. $\\\\Delta = 36-52=-16$. $x=3\\\\pm 2i$.'
      }
    },
    {
      id: 'sat-cx5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Classify each equation's solutions.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 6x + 9 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          },
          {
            label: '$x^2 + 1 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          },
          {
            label: '$x^2 - 5x + 3 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          }
        ],
        correctAnswers: ['One repeated real', 'Two complex (non-real)', 'Two distinct real'],
        hint1: '$\\\\Delta = 36-36=0$, so one repeated real solution: $x=3$.',
        hint2: '$\\\\Delta = 0-4=-4 < 0$, so two complex solutions: $x=\\\\pm i$.',
        hint3: '$\\\\Delta = 25-12=13>0$, so two distinct real solutions.',
        explanation: '$\\\\Delta=0$: repeated. $\\\\Delta<0$: complex. $\\\\Delta>0$: two real.'
      }
    },
    {
      id: 'sat-cx5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ does $x^2 + kx + 25 = 0$ have exactly one real solution?',
            options: ['$k = 5$', '$k = 10$', '$k = 25$', '$k = 0$'],
            correctAnswer: 1,
            explanation: 'For one repeated solution, $\\\\Delta = 0$: $k^2 - 4(1)(25) = 0 \\\\Rightarrow k^2 = 100 \\\\Rightarrow k = \\\\pm 10$. The positive value is $10$.'
          },
          {
            question: 'If $2+3i$ is a solution to a quadratic with real coefficients, what is the other solution?',
            options: ['$2-3i$', '$-2+3i$', '$-2-3i$', '$3+2i$'],
            correctAnswer: 0,
            explanation: 'Complex solutions come in conjugate pairs. If $2+3i$ is a solution, $2-3i$ must also be a solution.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 6: Complex Numbers on the SAT ──────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satComplexPart6Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx6-intro',
      type: 'text' as const,
      content: `
# 🎯 Complex Numbers on the SAT

**Part 6 of 7 — Pattern Recognition, Common Traps, $i^n$ Cycles**

Complex number questions appear in the **Calculator** and **No Calculator** sections. They test three main skills:

| Skill | Frequency |
|-------|-----------|
| Powers of $i$ | ★★★ Very common |
| Add/subtract/multiply | ★★★ Very common |
| Division (conjugates) | ★★ Common |
| Discriminant / non-real solutions | ★★ Common |
| Writing $\\\\frac{a+bi}{c+di}$ in $a+bi$ form | ★★ Common |

**Key pattern:** Most SAT complex-number problems take 30–60 seconds if you know the rules. They reward **memorization** of the $i$-cycle and fluency with FOIL.
      `
    },
    {
      id: 'sat-cx6-trap1',
      type: 'text' as const,
      content: `
## Common SAT Traps

**Trap 1: Forgetting $i^2 = -1$ when multiplying**

Wrong: $(2+i)(3+i) = 6 + 2i + 3i + i^2 = 6 + 5i + i^2 = ?$

Students who leave $i^2$ or write $+1$ instead of $-1$ get the wrong answer.

Correct: $6 + 5i + (-1) = 5 + 5i$

**Trap 2: Sign errors when subtracting**

Wrong: $(4+3i)-(2+5i) = 4+3i-2+5i = 2+8i$ ❌

Correct: $(4+3i)-(2+5i) = 4+3i-2-5i = 2-2i$ ✅

**Trap 3: Confusing $r^2$ in the discriminant**

When $\\\\Delta < 0$, students sometimes forget to put $\\\\sqrt{|\\\\Delta|}$ over $2a$.

$$x = \\\\frac{-b \\\\pm \\\\sqrt{\\\\Delta}}{2a} = \\\\frac{-b \\\\pm i\\\\sqrt{|\\\\Delta|}}{2a}$$
      `
    },
    {
      id: 'sat-cx6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Trap-Spotting Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A student says $(3i)^2 = 9$. What is the correct value?',
            options: ['$9$', '$-9$', '$9i$', '$-9i$'],
            correctAnswer: 1,
            explanation: '$(3i)^2 = 9i^2 = 9(-1) = -9$. Remember to apply the exponent to $i$ too!'
          },
          {
            question: 'Which expression is equivalent to $i + i^2 + i^3 + i^4$?',
            options: ['$4i$', '$-1$', '$0$', '$1$'],
            correctAnswer: 2,
            explanation: '$i + (-1) + (-i) + 1 = (i - i) + (-1 + 1) = 0$. One complete cycle of powers of $i$ always sums to $0$!'
          }
        ]
      }
    },
    {
      id: 'sat-cx6-cycle-sum',
      type: 'text' as const,
      content: `
## The Cycle Sum Trick

One complete cycle of consecutive powers of $i$ sums to $0$:

$$i^1 + i^2 + i^3 + i^4 = i + (-1) + (-i) + 1 = 0$$

This means:
- $i + i^2 + i^3 + \\\\cdots + i^{100} = 0$ (25 complete cycles)
- $i + i^2 + i^3 + \\\\cdots + i^{99} = i + i^2 + i^3 = i - 1 - i = -1$ (24 complete cycles + 3 extra)

**Shortcut for sums:** Divide the number of terms by 4. Complete groups of 4 cancel to $0$. Then add up the remaining terms.

**Example:** $i + i^2 + \\\\cdots + i^{42}$

42 terms: $42 \\\\div 4 = 10$ complete groups (40 terms) + 2 remaining.

Remaining: $i^{41} + i^{42} = i + (-1) = i - 1 = -1 + i$.
      `
    },
    {
      id: 'sat-cx6-input1',
      type: 'input-boxes' as const,
      content: `
**Quick calculations.** 🧮

1) $(2i)^3 = $

2) $i + i^2 + i^3 + i^4 + i^5 = $

3) $\\\\frac{1}{i} = $ (Write in the form $ai$ or $-ai$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-8i', 'i', '-i'],
        hint1: '$(2i)^3 = 8i^3 = 8(-i) = -8i$.',
        hint2: 'The first four terms sum to $0$, so just add $i^5 = i$.',
        hint3: 'Multiply by $\\\\frac{i}{i}$: $\\\\frac{1}{i} \\\\cdot \\\\frac{i}{i} = \\\\frac{i}{i^2} = \\\\frac{i}{-1} = -i$.',
        explanation: '$(2i)^3=-8i$. Sum of full cycle is $0$, plus $i^5=i$. $\\\\frac{1}{i}=-i$.'
      }
    },
    {
      id: 'sat-cx6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the correct approach for each SAT problem type.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Simplify $i^{203}$',
            options: ['Divide 203 by 4, use remainder', 'Multiply out 203 times', 'Use calculator', 'Factor 203']
          },
          {
            label: 'Write $\\\\frac{3}{2-i}$ in $a+bi$ form',
            options: ['Multiply by $\\\\frac{2+i}{2+i}$', 'Multiply by $\\\\frac{2-i}{2-i}$', 'Divide 3 by 2, ignore $i$', 'Set equal to $a+bi$ and guess']
          },
          {
            label: 'Find non-real solutions of $x^2+2x+10=0$',
            options: ['Factor the quadratic', 'Use the quadratic formula', 'Complete the square only', 'Graph it']
          }
        ],
        correctAnswers: ['Divide 203 by 4, use remainder', 'Multiply by $\\\\frac{2+i}{2+i}$', 'Use the quadratic formula'],
        hint1: 'The power-of-$i$ cycle has period 4. $203 \\\\div 4 = 50$ remainder $3$, so $i^{203}=-i$.',
        hint2: 'Multiply numerator and denominator by the conjugate of the denominator.',
        hint3: 'When the discriminant is negative, the quadratic formula gives complex solutions.',
        explanation: 'Powers of $i$: divide by 4. Division: multiply by conjugate. Non-real solutions: quadratic formula.'
      }
    },
    {
      id: 'sat-cx6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of $(1+i)(1-i)(1+i)$?',
            options: ['$2+2i$', '$2-2i$', '$4$', '$2(1+i)$'],
            correctAnswer: 0,
            explanation: 'First: $(1+i)(1-i)=1+1=2$. Then $2(1+i)=2+2i$.'
          },
          {
            question: 'If $z = 3-2i$, what is $z \\\\cdot \\\\bar{z}$ (where $\\\\bar{z}$ is the conjugate)?',
            options: ['$5$', '$13$', '$9+4i$', '$9-4i$'],
            correctAnswer: 1,
            explanation: '$z \\\\cdot \\\\bar{z} = (3-2i)(3+2i) = 9+4 = 13$. A number times its conjugate equals $a^2+b^2$.'
          }
        ]
      }
    }
  ]
}
"""))


# ── Part 7: Review & Mixed Practice ──────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satComplexPart7Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx7-cheatsheet',
      type: 'text' as const,
      content: `
# 📋 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed Problems, Strategies**

## Complex Numbers Cheat Sheet

| Concept | Formula / Rule |
|---------|---------------|
| Imaginary unit | $i = \\\\sqrt{-1},\\\\; i^2 = -1$ |
| Powers of $i$ | Cycle: $i, -1, -i, 1$ (period 4) |
| Addition | $(a+bi)+(c+di)=(a+c)+(b+d)i$ |
| Subtraction | $(a+bi)-(c+di)=(a-c)+(b-d)i$ |
| Multiplication | $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ |
| Conjugate of $a+bi$ | $a-bi$ |
| Conjugate product | $(a+bi)(a-bi)=a^2+b^2$ |
| Division | Multiply by $\\\\frac{\\\\overline{\\\\text{denom}}}{\\\\overline{\\\\text{denom}}}$ |
| Discriminant | $\\\\Delta = b^2-4ac$ |
| Complex solutions | When $\\\\Delta<0$: $x=\\\\frac{-b\\\\pm i\\\\sqrt{|\\\\Delta|}}{2a}$ |
      `
    },
    {
      id: 'sat-cx7-strategy',
      type: 'text' as const,
      content: `
## SAT Test-Day Strategies

**1. Time management:** Complex number problems are usually quick (30–60 sec). Don't skip them!

**2. Powers of $i$:** Always divide the exponent by 4 and use the remainder. This takes 5 seconds.

**3. Multiplication:** FOIL and replace $i^2 = -1$. Double-check the sign on the last term.

**4. Division:** Multiply top and bottom by the conjugate. The denominator becomes $a^2+b^2$.

**5. "Which is equivalent to…":** These problems usually test multiplication or division. Just compute carefully.

**6. Discriminant questions:** If they ask about "non-real" or "no real" solutions, compute $b^2-4ac$ and check if it's negative.

**7. Verify with conjugate pairs:** If one complex solution is $a+bi$, the other is $a-bi$. You can check by adding them ($=2a$) or multiplying them ($=a^2+b^2$).
      `
    },
    {
      id: 'sat-cx7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $i^{99} - i^{97}$?',
            options: ['$0$', '$2i$', '$-2i$', '$2$'],
            correctAnswer: 2,
            explanation: '$99 \\\\div 4$: rem $3 \\\\Rightarrow i^{99}=-i$. $97 \\\\div 4$: rem $1 \\\\Rightarrow i^{97}=i$. So $-i - i = -2i$.'
          },
          {
            question: 'What is $(4-i)(4+i)-(3+2i)(3-2i)$?',
            options: ['$0$', '$4$', '$30$', '$-4$'],
            correctAnswer: 1,
            explanation: '$(4-i)(4+i)=16+1=17$. $(3+2i)(3-2i)=9+4=13$. Difference: $17-13=4$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed computations.** 🧮

1) $(3+i)(1-2i) + (2+3i) = $

2) The discriminant of $x^2 + 4x + 8 = 0$ is $\\\\Delta = $

3) $\\\\frac{(2+i)^2}{i} = $ (Write in $a+bi$ form)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7 - 2i', '-16', '4 - 3i'],
        hint1: '$(3+i)(1-2i) = 3-6i+i-2i^2 = 3-5i+2 = 5-5i$. Then $5-5i+2+3i = 7-2i$.',
        hint2: '$\\\\Delta = 16 - 32 = -16$.',
        hint3: '$(2+i)^2 = 4+4i+i^2 = 3+4i$. Then $\\\\frac{3+4i}{i} \\\\cdot \\\\frac{-i}{-i} = \\\\frac{-3i-4i^2}{-i^2} = \\\\frac{4-3i}{1}=4-3i$.',
        explanation: '$(3+i)(1-2i)+(2+3i)=7-2i$. $\\\\Delta=16-32=-16$. $\\\\frac{(2+i)^2}{i}=4-3i$.'
      }
    },
    {
      id: 'sat-cx7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final review — true or false?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The sum of a complex number and its conjugate is always real.',
            options: ['True', 'False']
          },
          {
            label: 'The product of a complex number and its conjugate can be negative.',
            options: ['True', 'False']
          },
          {
            label: '$i^{4n} = 1$ for every positive integer $n$.',
            options: ['True', 'False']
          }
        ],
        correctAnswers: ['True', 'False', 'True'],
        hint1: '$(a+bi)+(a-bi)=2a$, which is real.',
        hint2: '$(a+bi)(a-bi)=a^2+b^2 \\\\geq 0$. A sum of squares is never negative.',
        hint3: '$i^{4n} = (i^4)^n = 1^n = 1$.',
        explanation: 'Sum = $2a$ (real). Product = $a^2+b^2 \\\\geq 0$ (never negative). $i^{4n}=1$.'
      }
    },
    {
      id: 'sat-cx7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^2 - 2x + 5 = 0$, what is the product of the two solutions?',
            options: ['$5$', '$-5$', '$2$', '$-2$'],
            correctAnswer: 0,
            explanation: 'By Vieta\\'s formulas, the product of the roots of $ax^2+bx+c=0$ is $\\\\frac{c}{a}=\\\\frac{5}{1}=5$. (You can verify: the solutions are $1 \\\\pm 2i$, and $(1+2i)(1-2i)=1+4=5$.)'
          },
          {
            question: 'Which value of $k$ makes $x^2-6x+k=0$ have complex (non-real) solutions?',
            options: ['$k = 8$', '$k = 9$', '$k = 10$', '$k = 0$'],
            correctAnswer: 2,
            explanation: 'Need $\\\\Delta < 0$: $36 - 4k < 0 \\\\Rightarrow k > 9$. Only $k=10 > 9$ satisfies this.'
          }
        ]
      }
    },
    {
      id: 'sat-cx7-final',
      type: 'text' as const,
      content: `
## 🎉 You've Completed SAT Complex Numbers!

**What you've mastered:**

✅ The imaginary unit $i$ and its power cycle

✅ Adding, subtracting, multiplying complex numbers

✅ Complex conjugates and division

✅ Solving equations with complex solutions

✅ SAT-specific patterns and traps

**Key takeaways for test day:**

- Powers of $i$: divide exponent by 4, use remainder
- Multiply: FOIL + replace $i^2 = -1$
- Divide: multiply by the conjugate
- Complex solutions: discriminant $< 0$
- Solutions come in conjugate pairs

Keep practicing — complex numbers are some of the easiest points on the SAT once you know the rules!
      `
    }
  ]
}
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Complex Numbers lessons …")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")
