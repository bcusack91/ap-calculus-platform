#!/usr/bin/env python3
"""
Complete rewrite of all SAT Quadratic Equations interactive lesson files.
Generates 7 genuinely high-quality educational TypeScript lesson files
matching the gold-standard pattern.
"""

import os

BASE = '/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data/interactive-lessons'

def write_file(filepath, content):
    with open(filepath, 'w') as f:
        f.write(content)

def make_part(export_name, part_num, topic_slug, sections_ts):
    """Generate complete TypeScript for one lesson part."""
    return f"""export const {export_name}Part{part_num}Data = {{
  topicSlug: '{topic_slug}',
  sections: [
{sections_ts}
  ]
}}
"""

# ============================================================================
# SAT QUADRATIC EQUATIONS — Complete 7-Part Rewrite
# ============================================================================
def write_sat_quadratics():
    slug = 'sat-quadratic-equations-sat'
    prefix = 'sat-sat-quadratic-equations-sat'
    exp = 'satQuadratics'

    # =========================================================================
    # Part 1: Standard Form & Factoring
    # =========================================================================
    p1 = make_part(exp, 1, slug, """    {
      id: 'sat-q1-intro',
      type: 'text' as const,
      content: `
# 🔢 Quadratic Equations — SAT Foundations

**Part 1 of 7 — Standard Form & Factoring**

Quadratics appear on **20–25% of SAT Math questions** — more than any other single topic. Master them and you unlock a huge score boost.

A **quadratic equation** in standard form is: $$ax^2 + bx + c = 0$$

where $a \\\\neq 0$. The **degree** is 2, so there are at most **two solutions** (also called roots or zeros).

| Term | Role | Example in $3x^2 - 5x + 2$ |
|------|------|-----------------------------|
| $a$ | Leading coefficient | $3$ |
| $b$ | Linear coefficient | $-5$ |
| $c$ | Constant term | $2$ |

**Why factoring first?** On the SAT, ~60% of quadratics can be factored. It's faster than the quadratic formula when it works.
      `
    },
    {
      id: 'sat-q1-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation is in standard quadratic form?',
            options: [
              '$y = 2(x - 3)^2 + 1$',
              '$3x^2 - 7x + 4 = 0$',
              '$x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$',
              '$(x - 2)(x + 5) = 0$'
            ],
            correctAnswer: 1,
            explanation: 'Standard form is $ax^2 + bx + c = 0$. Option B ($3x^2 - 7x + 4 = 0$) matches with $a=3$, $b=-7$, $c=4$. Option A is vertex form, C is the quadratic formula, and D is factored form.'
          },
          {
            question: 'In the equation $-2x^2 + 8x - 6 = 0$, what are the values of $a$, $b$, and $c$?',
            options: [
              '$a=2,\\\\ b=8,\\\\ c=-6$',
              '$a=-2,\\\\ b=8,\\\\ c=-6$',
              '$a=-2,\\\\ b=-8,\\\\ c=6$',
              '$a=2,\\\\ b=-8,\\\\ c=6$'
            ],
            correctAnswer: 1,
            explanation: 'Read the coefficients directly: the coefficient of $x^2$ is $-2$ (so $a=-2$), the coefficient of $x$ is $+8$ (so $b=8$), and the constant is $-6$ (so $c=-6$). **SAT Trap:** Don\\'t drop the negative sign on $a$!'
          }
        ]
      }
    },
    {
      id: 'sat-q1-factoring',
      type: 'text' as const,
      content: `
**Factoring Strategy — The AC Method**

To factor $ax^2 + bx + c$:

**Step 1:** Compute the product $a \\\\cdot c$.

**Step 2:** Find two numbers that **multiply** to $a \\\\cdot c$ and **add** to $b$.

**Step 3:** Rewrite the middle term, then factor by grouping.

---

**Worked Example:** Factor $2x^2 + 7x + 3$.

| Step | Work |
|------|------|
| $a \\\\cdot c$ | $2 \\\\times 3 = 6$ |
| Two numbers: multiply to 6, add to 7 | $1$ and $6$ ✓ |
| Rewrite | $2x^2 + x + 6x + 3$ |
| Group | $(2x^2 + x) + (6x + 3)$ |
| Factor each group | $x(2x+1) + 3(2x+1)$ |
| Final | $(x+3)(2x+1)$ |

**Verify:** $(x+3)(2x+1) = 2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓

**SAT Tip:** When $a=1$, skip AC method — just find two numbers that multiply to $c$ and add to $b$.
      `
    },
    {
      id: 'sat-q1-practice1',
      type: 'input-boxes' as const,
      content: `
**Factor and solve each equation.** Enter only the numerical solutions. 🧮

1) $x^2 - 5x + 6 = 0$ → Smaller root = ?

2) $x^2 + x - 12 = 0$ → Larger root = ?

3) $2x^2 - 8x = 0$ → Larger root = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '3', '4'],
        hint1: 'Find two numbers that multiply to 6 and add to $-5$: they are $-2$ and $-3$. So $(x-2)(x-3)=0$.',
        hint2: 'Find two numbers that multiply to $-12$ and add to $1$: they are $4$ and $-3$. So $(x+4)(x-3)=0$.',
        hint3: 'Factor out $2x$ first: $2x(x-4)=0$. So $x=0$ or $x=4$.',
        explanation: '1) $(x-2)(x-3)=0 \\\\Rightarrow x=2,3$. Smaller is $2$. 2) $(x+4)(x-3)=0 \\\\Rightarrow x=-4,3$. Larger is $3$. 3) $2x(x-4)=0 \\\\Rightarrow x=0,4$. Larger is $4$.'
      }
    },
    {
      id: 'sat-q1-zero-product',
      type: 'text' as const,
      content: `
**Zero Product Property**

If $A \\\\cdot B = 0$, then $A = 0$ or $B = 0$ (or both).

This is *why* factoring works for solving equations. Once you write $ax^2+bx+c$ as a product of factors set equal to zero, each factor gives a solution.

**SAT Pattern — Already Factored:**

$(3x-5)(x+2) = 0$

Set each factor to zero:
- $3x - 5 = 0 \\\\Rightarrow x = \\\\frac{5}{3}$
- $x + 2 = 0 \\\\Rightarrow x = -2$

---

**SAT Trap:** Sometimes the equation is NOT set equal to zero!

$x^2 - 3x = 10$ → Move 10: $x^2 - 3x - 10 = 0$ → Then factor: $(x-5)(x+2)=0$.

**Never factor unless one side equals zero.**
      `
    },
    {
      id: 'sat-q1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its factored form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 9 = 0$',
            options: ['$(x-3)(x+3)$', '$(x-9)(x+1)$', '$(x-3)^2$', '$(x+9)(x-1)$']
          },
          {
            label: '$x^2 - 6x + 9 = 0$',
            options: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x+3)^2$', '$(x-9)(x+1)$']
          },
          {
            label: '$x^2 + 5x + 6 = 0$',
            options: ['$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+1)(x+6)$', '$(x-1)(x-6)$']
          }
        ],
        correctAnswers: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x+2)(x+3)$'],
        hint1: '$x^2 - 9$ is a **difference of squares**: $a^2 - b^2 = (a-b)(a+b)$.',
        hint2: '$x^2 - 6x + 9$ is a **perfect square trinomial**: check if $c = (b/2)^2$.',
        hint3: 'Find two numbers that multiply to 6 and add to 5.',
        explanation: '$x^2-9=(x-3)(x+3)$ (difference of squares). $x^2-6x+9=(x-3)^2$ (perfect square). $x^2+5x+6=(x+2)(x+3)$ (standard factoring).'
      }
    },
    {
      id: 'sat-q1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(x-a)(x-b) = x^2 - 5x + 6$, what is the value of $a + b$?',
            options: [
              '$5$',
              '$6$',
              '$-5$',
              '$11$'
            ],
            correctAnswer: 0,
            explanation: 'Expanding: $(x-a)(x-b) = x^2 - (a+b)x + ab$. Matching coefficients: $a+b = 5$ and $ab = 6$. So $a+b = 5$. (In fact $a=2, b=3$.)'
          },
          {
            question: 'What are the solutions of $6x^2 + x - 2 = 0$?',
            options: [
              '$x = \\\\frac{1}{2}$ and $x = -\\\\frac{2}{3}$',
              '$x = -\\\\frac{1}{2}$ and $x = \\\\frac{2}{3}$',
              '$x = 2$ and $x = -3$',
              '$x = \\\\frac{1}{3}$ and $x = -1$'
            ],
            correctAnswer: 0,
            explanation: 'AC method: $6 \\\\times (-2) = -12$. Numbers: $4$ and $-3$ ($4 \\\\times -3 = -12$, $4+(-3)=1$). Rewrite: $6x^2+4x-3x-2 = 2x(3x+2)-(3x+2) = (2x-1)(3x+2)=0$. Wait — let\\'s check: $(2x-1)=0 \\\\Rightarrow x=1/2$ and $(3x+2)=0 \\\\Rightarrow x=-2/3$. ✓'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part1.ts'), p1)

    # =========================================================================
    # Part 2: Quadratic Formula & Discriminant
    # =========================================================================
    p2 = make_part(exp, 2, slug, """    {
      id: 'sat-q2-intro',
      type: 'text' as const,
      content: `
# 🧪 The Quadratic Formula & Discriminant

**Part 2 of 7 — The Universal Solver**

When factoring fails (or feels slow), the **quadratic formula** always works: $$x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}$$

This solves ANY equation $ax^2 + bx + c = 0$ — every time.

**Memory trick:** "Negative boy couldn't decide (±) whether to go to the radical party. But the boy was square, and he lost 4 awesome chicks. It was all over by 2 AM."

| Part | Meaning |
|------|---------|
| $-b$ | Flips the sign of $b$ |
| $\\\\pm$ | Gives TWO solutions |
| $b^2 - 4ac$ | **Discriminant** ($\\\\Delta$) — determines the nature of roots |
| $2a$ | Divides the entire numerator |
      `
    },
    {
      id: 'sat-q2-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'For $2x^2 - 4x + 1 = 0$, what are $a$, $b$, and $c$ to plug into the formula?',
            options: [
              '$a=2,\\\\ b=4,\\\\ c=1$',
              '$a=2,\\\\ b=-4,\\\\ c=1$',
              '$a=-2,\\\\ b=4,\\\\ c=-1$',
              '$a=2,\\\\ b=-4,\\\\ c=-1$'
            ],
            correctAnswer: 1,
            explanation: 'Read directly from $2x^2 - 4x + 1 = 0$: the coefficient of $x^2$ is $2$, of $x$ is $-4$, and the constant is $1$. **Don\\'t forget the negative sign on $b$!**'
          },
          {
            question: 'When applying the formula to $x^2 + 6x + 5 = 0$, what expression appears under the radical?',
            options: [
              '$36 - 20 = 16$',
              '$36 + 20 = 56$',
              '$6 - 20 = -14$',
              '$-36 + 20 = -16$'
            ],
            correctAnswer: 0,
            explanation: '$b^2 - 4ac = 6^2 - 4(1)(5) = 36 - 20 = 16$. Since $\\\\sqrt{16} = 4$, the roots are $x = \\\\frac{-6 \\\\pm 4}{2}$, giving $x = -1$ and $x = -5$.'
          }
        ]
      }
    },
    {
      id: 'sat-q2-discriminant',
      type: 'text' as const,
      content: `
**The Discriminant — Predicting Roots Without Solving**

The **discriminant** is $\\\\Delta = b^2 - 4ac$. It tells you everything about the roots:

| Discriminant | # of Real Roots | What It Means |
|-------------|----------------|---------------|
| $\\\\Delta > 0$ | **2 distinct** real roots | Parabola crosses x-axis twice |
| $\\\\Delta = 0$ | **1 repeated** real root | Parabola touches x-axis at vertex |
| $\\\\Delta < 0$ | **0** real roots (2 complex) | Parabola never crosses x-axis |

**If $\\\\Delta$ is a perfect square** (like 0, 1, 4, 9, 16…), the roots are **rational** — the equation can be factored over the integers.

---

**Worked Example:** How many real solutions does $3x^2 - 2x + 5 = 0$ have?

$\\\\Delta = (-2)^2 - 4(3)(5) = 4 - 60 = -56$

Since $\\\\Delta < 0$, there are **no real solutions**. The parabola $y = 3x^2 - 2x + 5$ never crosses the x-axis.
      `
    },
    {
      id: 'sat-q2-practice',
      type: 'input-boxes' as const,
      content: `
**Compute the discriminant and determine the number of real solutions.** 🧮

1) $x^2 - 4x + 4 = 0$ → Discriminant = ?

2) $2x^2 + 3x - 5 = 0$ → Discriminant = ?

3) $x^2 + 2x + 5 = 0$ → Number of real solutions = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '49', '0'],
        hint1: '$\\\\Delta = (-4)^2 - 4(1)(4) = 16 - 16$.',
        hint2: '$\\\\Delta = 3^2 - 4(2)(-5) = 9 + 40$.',
        hint3: '$\\\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$. Negative discriminant means…',
        explanation: '1) $\\\\Delta = 16 - 16 = 0$ (one repeated root: $x=2$). 2) $\\\\Delta = 9 + 40 = 49$ (two rational roots since $49$ is a perfect square). 3) $\\\\Delta = -16 < 0$, so $0$ real solutions.'
      }
    },
    {
      id: 'sat-q2-applying',
      type: 'text' as const,
      content: `
**Applying the Full Formula — Step by Step**

Solve $3x^2 - 6x + 2 = 0$.

**Step 1:** Identify: $a = 3$, $b = -6$, $c = 2$.

**Step 2:** Compute discriminant: $\\\\Delta = (-6)^2 - 4(3)(2) = 36 - 24 = 12$.

**Step 3:** Apply formula:
$$x = \\\\frac{-(-6) \\\\pm \\\\sqrt{12}}{2(3)} = \\\\frac{6 \\\\pm 2\\\\sqrt{3}}{6} = \\\\frac{3 \\\\pm \\\\sqrt{3}}{3}$$

**Step 4:** Simplify: $x = 1 + \\\\frac{\\\\sqrt{3}}{3}$ or $x = 1 - \\\\frac{\\\\sqrt{3}}{3}$.

---

**SAT Tip:** On calculator questions, compute the decimal: $x \\\\approx 1.577$ or $x \\\\approx 0.423$. On no-calculator, leave in simplified radical form.

**SAT Trap:** Don't divide only *part* of the numerator by $2a$. The $\\\\pm$ applies to the entire expression $\\\\frac{-b \\\\pm \\\\sqrt{\\\\Delta}}{2a}$.
      `
    },
    {
      id: 'sat-q2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each discriminant value to the type of roots.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\Delta = 25$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          },
          {
            label: '$\\\\Delta = 0$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          },
          {
            label: '$\\\\Delta = 7$',
            options: ['Two distinct rational roots', 'Two distinct irrational roots', 'One repeated root', 'No real roots']
          }
        ],
        correctAnswers: ['Two distinct rational roots', 'One repeated root', 'Two distinct irrational roots'],
        hint1: '$25 > 0$ and $25 = 5^2$ is a perfect square.',
        hint2: 'When $\\\\Delta = 0$, the $\\\\pm$ disappears — there is only one value.',
        hint3: '$7 > 0$ (two real roots) but $7$ is not a perfect square (so $\\\\sqrt{7}$ is irrational).',
        explanation: '$\\\\Delta = 25$: positive perfect square → two rational roots. $\\\\Delta = 0$: one repeated root. $\\\\Delta = 7$: positive, not a perfect square → two irrational roots.'
      }
    },
    {
      id: 'sat-q2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?',
            options: [
              '$k = 3$ only',
              '$k = 6$ or $k = -6$',
              '$k = 9$ only',
              '$k = 0$'
            ],
            correctAnswer: 1,
            explanation: 'One real solution means $\\\\Delta = 0$: $k^2 - 4(1)(9) = 0 \\\\Rightarrow k^2 = 36 \\\\Rightarrow k = \\\\pm 6$. Don\\'t forget the negative solution!'
          },
          {
            question: 'The equation $x^2 - 8x + k = 0$ has two distinct real solutions. Which could be the value of $k$?',
            options: [
              '$k = 16$',
              '$k = 20$',
              '$k = 10$',
              '$k = 64$'
            ],
            correctAnswer: 2,
            explanation: 'Two distinct real solutions requires $\\\\Delta > 0$: $64 - 4k > 0 \\\\Rightarrow k < 16$. Only $k = 10$ satisfies this. $k=16$ gives $\\\\Delta = 0$ (one root), and $k=20, 64$ give $\\\\Delta < 0$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part2.ts'), p2)

    # =========================================================================
    # Part 3: Completing the Square & Vertex Form
    # =========================================================================
    p3 = make_part(exp, 3, slug, """    {
      id: 'sat-q3-intro',
      type: 'text' as const,
      content: `
# 🎯 Completing the Square & Vertex Form

**Part 3 of 7 — Finding the Vertex Algebraically**

**Vertex form** of a quadratic: $$y = a(x - h)^2 + k$$

The vertex is $(h, k)$. This form instantly reveals:
- The **vertex** (maximum or minimum point)
- The **axis of symmetry**: $x = h$
- Whether the parabola opens **up** ($a > 0$) or **down** ($a < 0$)

| Standard Form | Vertex Form | Vertex |
|--------------|------------|--------|
| $y = x^2 - 6x + 11$ | $y = (x-3)^2 + 2$ | $(3, 2)$ |
| $y = -2x^2 + 8x - 5$ | $y = -2(x-2)^2 + 3$ | $(2, 3)$ |

**Completing the square** converts standard form → vertex form.
      `
    },
    {
      id: 'sat-q3-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $y = 3(x+2)^2 - 7$ is in vertex form. What is the vertex?',
            options: [
              '$(2, -7)$',
              '$(-2, -7)$',
              '$(2, 7)$',
              '$(-2, 7)$'
            ],
            correctAnswer: 1,
            explanation: 'In $y = a(x-h)^2 + k$, the vertex is $(h,k)$. Here $y = 3(x-(-2))^2 + (-7)$, so $h = -2$ and $k = -7$. Vertex: $(-2, -7)$. **Watch the signs!** $(x+2)$ means $h = -2$.'
          },
          {
            question: 'A parabola has equation $y = -(x-4)^2 + 10$. Does it have a maximum or minimum, and what is the value?',
            options: [
              'Maximum of $10$',
              'Minimum of $10$',
              'Maximum of $4$',
              'Minimum of $-10$'
            ],
            correctAnswer: 0,
            explanation: 'Since $a = -1 < 0$, the parabola opens downward, so the vertex is a **maximum**. The vertex is $(4, 10)$, so the maximum value is $10$.'
          }
        ]
      }
    },
    {
      id: 'sat-q3-process',
      type: 'text' as const,
      content: `
**Completing the Square — Step by Step**

Convert $y = x^2 + 8x + 3$ to vertex form.

| Step | Work | Why |
|------|------|-----|
| 1. Group $x$ terms | $y = (x^2 + 8x) + 3$ | Isolate quadratic/linear terms |
| 2. Half of $b$, squared | $\\\\left(\\\\frac{8}{2}\\\\right)^2 = 16$ | This completes the square |
| 3. Add AND subtract inside | $y = (x^2 + 8x + 16 - 16) + 3$ | Keeps equation balanced |
| 4. Factor the perfect square | $y = (x+4)^2 - 16 + 3$ | The trinomial is now a perfect square |
| 5. Simplify | $y = (x+4)^2 - 13$ | Done! |

**Vertex:** $(-4, -13)$. Axis of symmetry: $x = -4$.

---

**When $a \\\\neq 1$:** Factor $a$ out of the $x$ terms first!

$y = 2x^2 - 12x + 7 = 2(x^2 - 6x) + 7 = 2(x^2 - 6x + 9 - 9) + 7 = 2(x-3)^2 - 18 + 7 = 2(x-3)^2 - 11$

**SAT Trap:** When you subtract $9$ inside the parentheses, you're really subtracting $2 \\\\times 9 = 18$ from the equation.
      `
    },
    {
      id: 'sat-q3-practice',
      type: 'input-boxes' as const,
      content: `
**Complete the square and find the vertex.** Enter $h$ and $k$ where vertex = $(h, k)$. 🧮

1) $y = x^2 - 10x + 21$ → $h$ = ?

2) $y = x^2 - 10x + 21$ → $k$ = ?

3) $y = x^2 + 4x + 1$ → $k$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-4', '-3'],
        hint1: 'Half of $-10$ is $-5$, so $h = 5$ (remember the sign flip in $(x - h)$).',
        hint2: '$y = (x-5)^2 - 25 + 21 = (x-5)^2 - 4$. So $k = -4$.',
        hint3: '$y = (x^2+4x+4) - 4 + 1 = (x+2)^2 - 3$. So $k = -3$.',
        explanation: '1) Half of $-10$ is $-5$, squared is $25$. $y = (x-5)^2 - 25 + 21 = (x-5)^2 - 4$. $h = 5$. 2) $k = -4$. 3) $(x+2)^2 - 3$, $k = -3$.'
      }
    },
    {
      id: 'sat-q3-shortcut',
      type: 'text' as const,
      content: `
**The Vertex Shortcut (No Completing the Square Needed!)**

For $y = ax^2 + bx + c$, the vertex x-coordinate is: $$h = -\\\\frac{b}{2a}$$

Then plug $h$ back in to find $k = f(h)$.

**Example:** $y = 2x^2 + 12x + 7$

$h = -\\\\frac{12}{2(2)} = -\\\\frac{12}{4} = -3$

$k = 2(-3)^2 + 12(-3) + 7 = 18 - 36 + 7 = -11$

Vertex: $(-3, -11)$ — same as completing the square, but faster!

---

**When to use which method:**
- **Vertex shortcut** — when you just need the vertex coordinates
- **Completing the square** — when the SAT asks you to rewrite into vertex form $a(x-h)^2 + k$
- Either works, but the shortcut is faster for most SAT questions
      `
    },
    {
      id: 'sat-q3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each standard form to its vertex form.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2 - 2x + 5$',
            options: ['$y = (x-1)^2 + 4$', '$y = (x+1)^2 + 4$', '$y = (x-2)^2 + 1$', '$y = (x-1)^2 - 4$']
          },
          {
            label: '$y = x^2 + 6x + 10$',
            options: ['$y = (x+3)^2 + 1$', '$y = (x-3)^2 + 1$', '$y = (x+6)^2 - 26$', '$y = (x+3)^2 - 1$']
          },
          {
            label: '$y = x^2 - 4x$',
            options: ['$y = (x-2)^2 - 4$', '$y = (x-4)^2$', '$y = (x+2)^2 - 4$', '$y = (x-2)^2 + 4$']
          }
        ],
        correctAnswers: ['$y = (x-1)^2 + 4$', '$y = (x+3)^2 + 1$', '$y = (x-2)^2 - 4$'],
        hint1: 'Half of $-2$ is $-1$, squared is $1$. $5 - 1 = 4$.',
        hint2: 'Half of $6$ is $3$, squared is $9$. $10 - 9 = 1$.',
        hint3: 'Half of $-4$ is $-2$, squared is $4$. $0 - 4 = -4$.',
        explanation: '$x^2 - 2x + 5 = (x-1)^2 + 4$. $x^2 + 6x + 10 = (x+3)^2 + 1$. $x^2 - 4x = (x-2)^2 - 4$.'
      }
    },
    {
      id: 'sat-q3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $y = a(x-3)^2 + 7$ and the parabola passes through $(5, 15)$, what is the value of $a$?',
            options: [
              '$1$',
              '$2$',
              '$3$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: 'Plug in $(5, 15)$: $15 = a(5-3)^2 + 7 = 4a + 7$. Solving: $4a = 8$, so $a = 2$.'
          },
          {
            question: 'The minimum value of $f(x) = x^2 - 8x + 21$ is:',
            options: [
              '$4$',
              '$5$',
              '$8$',
              '$21$'
            ],
            correctAnswer: 1,
            explanation: 'Vertex x-coordinate: $h = -(-8)/(2 \\\\cdot 1) = 4$. Minimum: $f(4) = 16 - 32 + 21 = 5$. Or: completing the square gives $(x-4)^2 + 5$, so minimum is $5$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part3.ts'), p3)

    # =========================================================================
    # Part 4: Graphing Parabolas
    # =========================================================================
    p4 = make_part(exp, 4, slug, """    {
      id: 'sat-q4-intro',
      type: 'text' as const,
      content: `
# 📈 Graphing Parabolas

**Part 4 of 7 — Understanding the Shape**

Every quadratic $y = ax^2 + bx + c$ graphs a **parabola**. The SAT tests whether you can read and interpret the graph, not just draw one.

**Key features at a glance:**

| Feature | How to Find | What It Tells You |
|---------|------------|------------------|
| **Direction** | Sign of $a$ | $a > 0$: opens up (smile); $a < 0$: opens down (frown) |
| **Vertex** | $\\\\left(-\\\\frac{b}{2a},\\\\ f\\\\left(-\\\\frac{b}{2a}\\\\right)\\\\right)$ | Min (if $a>0$) or Max (if $a<0$) |
| **Axis of symmetry** | $x = -\\\\frac{b}{2a}$ | Mirror line through vertex |
| **y-intercept** | Set $x = 0$: $y = c$ | Where parabola crosses y-axis |
| **x-intercepts** | Solve $ax^2+bx+c=0$ | Where parabola crosses x-axis (if real roots exist) |

**SAT Insight:** The number of x-intercepts equals the number of real roots, which is determined by the discriminant $\\\\Delta$.
      `
    },
    {
      id: 'sat-q4-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A parabola has equation $y = -x^2 + 4x - 3$. Which direction does it open, and what is the y-intercept?',
            options: [
              'Opens up, y-intercept $-3$',
              'Opens down, y-intercept $-3$',
              'Opens down, y-intercept $3$',
              'Opens up, y-intercept $4$'
            ],
            correctAnswer: 1,
            explanation: '$a = -1 < 0$, so it opens **down**. The y-intercept is $c = -3$ (set $x = 0$: $y = 0 + 0 - 3 = -3$).'
          },
          {
            question: 'The graph of $y = 2x^2 - 8x + 6$ crosses the x-axis at how many points?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$\\\\Delta = (-8)^2 - 4(2)(6) = 64 - 48 = 16 > 0$. Since the discriminant is positive, there are **2** x-intercepts. (They are $x = 1$ and $x = 3$.)'
          }
        ]
      }
    },
    {
      id: 'sat-q4-symmetry',
      type: 'text' as const,
      content: `
**Axis of Symmetry and Symmetric Points**

A parabola is always symmetric about the vertical line $x = -\\\\frac{b}{2a}$.

This means: if $(1, 5)$ is on the parabola and the axis of symmetry is $x = 3$, then $(5, 5)$ is also on the parabola (same distance from axis, same y-value).

**Finding x-intercepts from the axis:**

If you know one root and the axis, you can find the other:

**Example:** One root of $y = x^2 - 6x + 5$ is $x = 1$. Axis: $x = 3$. The other root is at $x = 3 + (3-1) = 5$.

---

**Worked Example — Full Analysis:**

Graph $y = x^2 - 4x - 5$:

| Feature | Calculation | Result |
|---------|------------|--------|
| Direction | $a = 1 > 0$ | Opens up |
| Axis | $x = -(-4)/(2 \\\\cdot 1) = 2$ | $x = 2$ |
| Vertex | $y = 4 - 8 - 5 = -9$ | $(2, -9)$ |
| y-intercept | $c = -5$ | $(0, -5)$ |
| x-intercepts | $(x-5)(x+1)=0$ | $(-1, 0)$ and $(5, 0)$ |

**SAT Tip:** The x-intercepts $-1$ and $5$ are symmetric about $x = 2$. Check: $(-1+5)/2 = 2$ ✓
      `
    },
    {
      id: 'sat-q4-practice',
      type: 'input-boxes' as const,
      content: `
**Analyze the parabola $y = x^2 + 2x - 8$.** 🧮

1) The axis of symmetry is $x =$ ?

2) The y-coordinate of the vertex is ?

3) The positive x-intercept is $x =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '-9', '2'],
        hint1: 'Axis of symmetry: $x = -b/(2a) = -2/(2 \\\\cdot 1)$.',
        hint2: 'Plug $x = -1$ into the equation: $(-1)^2 + 2(-1) - 8$.',
        hint3: 'Factor: $x^2 + 2x - 8 = (x+4)(x-2) = 0$.',
        explanation: '1) $x = -2/2 = -1$. 2) $y = 1 - 2 - 8 = -9$. 3) $(x+4)(x-2)=0$: roots are $x=-4$ and $x=2$. Positive root: $2$.'
      }
    },
    {
      id: 'sat-q4-transformations',
      type: 'text' as const,
      content: `
**Graph Transformations — Reading Changes from Equations**

Starting from the parent function $y = x^2$:

| Transformation | Equation | Effect on Graph |
|---------------|----------|----------------|
| Vertical shift up $k$ | $y = x^2 + k$ | Moves graph **up** $k$ units |
| Vertical shift down $k$ | $y = x^2 - k$ | Moves graph **down** $k$ units |
| Horizontal shift right $h$ | $y = (x-h)^2$ | Moves graph **right** $h$ units |
| Horizontal shift left $h$ | $y = (x+h)^2$ | Moves graph **left** $h$ units |
| Vertical stretch by $a$ | $y = ax^2,\\\\ a > 1$ | **Narrower** parabola |
| Vertical compress by $a$ | $y = ax^2,\\\\ 0 < a < 1$ | **Wider** parabola |
| Reflection | $y = -x^2$ | Flips **upside down** |

**SAT Trap:** Horizontal shifts are *opposite* to the sign: $(x - 3)^2$ shifts **right**, $(x + 3)^2$ shifts **left**.
      `
    },
    {
      id: 'sat-q4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its graph description.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = (x-1)^2 - 4$',
            options: ['Vertex at $(1, -4)$, opens up', 'Vertex at $(-1, -4)$, opens up', 'Vertex at $(1, 4)$, opens down', 'Vertex at $(-1, 4)$, opens down']
          },
          {
            label: '$y = -2(x+3)^2 + 5$',
            options: ['Vertex at $(-3, 5)$, opens down', 'Vertex at $(3, 5)$, opens up', 'Vertex at $(-3, -5)$, opens up', 'Vertex at $(3, -5)$, opens down']
          },
          {
            label: '$y = \\\\frac{1}{2}x^2 + 3$',
            options: ['Vertex at $(0, 3)$, wide, opens up', 'Vertex at $(0, 3)$, narrow, opens up', 'Vertex at $(3, 0)$, wide, opens up', 'Vertex at $(0, -3)$, wide, opens down']
          }
        ],
        correctAnswers: ['Vertex at $(1, -4)$, opens up', 'Vertex at $(-3, 5)$, opens down', 'Vertex at $(0, 3)$, wide, opens up'],
        hint1: '$(x-1)^2$ means $h=1$, and $-4$ means $k=-4$. $a=1>0$ so opens up.',
        hint2: '$(x+3)$ means $h=-3$. $a=-2<0$ so opens down.',
        hint3: '$a=1/2$ is between 0 and 1, so the parabola is wider than $y=x^2$. No horizontal shift, vertical shift up 3.',
        explanation: '$(x-1)^2-4$: vertex $(1,-4)$, opens up. $-2(x+3)^2+5$: vertex $(-3,5)$, opens down. $\\\\frac{1}{2}x^2+3$: vertex $(0,3)$, wider, opens up.'
      }
    },
    {
      id: 'sat-q4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the graph of $y = ax^2 + bx + c$ has vertex $(3, -2)$ and passes through $(0, 7)$, what is the value of $a$?',
            options: [
              '$1$',
              '$-1$',
              '$2$',
              '$-2$'
            ],
            correctAnswer: 0,
            explanation: 'Using vertex form: $y = a(x-3)^2 - 2$. Plug in $(0,7)$: $7 = a(0-3)^2 - 2 = 9a - 2$. So $9a = 9$, meaning $a = 1$.'
          },
          {
            question: 'A parabola crosses the x-axis at $x = -2$ and $x = 6$. What is the x-coordinate of the vertex?',
            options: [
              '$4$',
              '$-4$',
              '$2$',
              '$8$'
            ],
            correctAnswer: 2,
            explanation: 'The vertex lies on the axis of symmetry, which is the midpoint of the roots: $x = \\\\frac{-2+6}{2} = 2$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part4.ts'), p4)

    # =========================================================================
    # Part 5: Systems with Quadratics
    # =========================================================================
    p5 = make_part(exp, 5, slug, """    {
      id: 'sat-q5-intro',
      type: 'text' as const,
      content: `
# 🔗 Systems with Quadratics

**Part 5 of 7 — Line-Parabola Intersections**

The SAT frequently asks about systems where one equation is linear and the other is quadratic:
$$y = ax^2 + bx + c \\\\quad \\\\text{and} \\\\quad y = mx + d$$

To solve: **set them equal** and simplify into a single quadratic:
$$ax^2 + bx + c = mx + d \\\\Rightarrow ax^2 + (b - m)x + (c - d) = 0$$

The number of intersection points depends on the discriminant of this resulting quadratic:

| $\\\\Delta$ of the new equation | Intersections |
|-------------------------------|--------------|
| $\\\\Delta > 0$ | **2** intersection points |
| $\\\\Delta = 0$ | **1** point (line is tangent) |
| $\\\\Delta < 0$ | **0** points (no intersection) |

**SAT Insight:** "The line is tangent to the parabola" always means $\\\\Delta = 0$.
      `
    },
    {
      id: 'sat-q5-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The system $y = x^2$ and $y = 4$ has how many solutions?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x^2 = 4$, so $x = \\\\pm 2$. Two solutions: $(2, 4)$ and $(-2, 4)$. The horizontal line $y = 4$ cuts the parabola at two points.'
          },
          {
            question: 'How many times does $y = x + 3$ intersect $y = x^2 + 2x + 3$?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Infinitely many'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x + 3 = x^2 + 2x + 3$. Simplify: $0 = x^2 + x = x(x+1)$. So $x = 0$ or $x = -1$. Two intersection points.'
          }
        ]
      }
    },
    {
      id: 'sat-q5-substitution',
      type: 'text' as const,
      content: `
**Substitution Method — Worked Example**

Find the intersection of $y = x^2 - 3x + 2$ and $y = x - 1$.

**Step 1:** Set equal: $x^2 - 3x + 2 = x - 1$

**Step 2:** Move everything to one side: $x^2 - 4x + 3 = 0$

**Step 3:** Factor: $(x-1)(x-3) = 0 \\\\Rightarrow x = 1$ or $x = 3$

**Step 4:** Find y-values using the simpler equation ($y = x - 1$):
- $x = 1$: $y = 0$ → $(1, 0)$
- $x = 3$: $y = 2$ → $(3, 2)$

**Step 5:** Verify in the quadratic:
- $(1, 0)$: $1 - 3 + 2 = 0$ ✓
- $(3, 2)$: $9 - 9 + 2 = 2$ ✓

---

**SAT Tip:** Always plug back into the **simpler** equation to find y. It's faster and less error-prone.
      `
    },
    {
      id: 'sat-q5-practice',
      type: 'input-boxes' as const,
      content: `
**Find all intersection points.** 🧮

**System:** $y = x^2$ and $y = 2x + 3$

1) The negative x-solution is $x =$ ?

2) The positive x-solution is $x =$ ?

3) The y-value at the positive solution is $y =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '3', '9'],
        hint1: 'Set $x^2 = 2x + 3$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1) = 0$.',
        hint2: 'The two x-values from the factored equation are $x = 3$ and $x = -1$.',
        hint3: 'Use $y = x^2$: when $x = 3$, $y = 9$. (Or use $y = 2(3)+3 = 9$.)',
        explanation: '$x^2 = 2x+3 \\\\Rightarrow x^2-2x-3=0 \\\\Rightarrow (x-3)(x+1)=0$. Solutions: $(-1, 1)$ and $(3, 9)$. Negative x: $-1$. Positive x: $3$. y-value at $x=3$: $9$.'
      }
    },
    {
      id: 'sat-q5-tangent',
      type: 'text' as const,
      content: `
**Tangent Lines — When the Line Just Touches**

A line is **tangent** to a parabola when $\\\\Delta = 0$ (exactly one intersection).

**Example:** For what value of $k$ is $y = 2x + k$ tangent to $y = x^2$?

Set equal: $x^2 = 2x + k \\\\Rightarrow x^2 - 2x - k = 0$

For tangency: $\\\\Delta = 0$
$$(-2)^2 - 4(1)(-k) = 0 \\\\Rightarrow 4 + 4k = 0 \\\\Rightarrow k = -1$$

The tangent line is $y = 2x - 1$, touching the parabola at $x = 1$, $y = 1$.

---

**Two-Quadratic Systems:**

Sometimes both equations are quadratic: $y = x^2 + 2$ and $y = 2x^2 - x$

Set equal: $x^2 + 2 = 2x^2 - x \\\\Rightarrow 0 = x^2 - x - 2 = (x-2)(x+1)$

Same process — subtract to get a simpler equation, then solve.
      `
    },
    {
      id: 'sat-q5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each system to its number of intersections.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2$ and $y = -1$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 0$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 4$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          }
        ],
        correctAnswers: ['0 intersections', '1 intersection', '2 intersections'],
        hint1: '$x^2 = -1$ has no real solution (a square can\\'t be negative).',
        hint2: '$x^2 = 0$ has exactly one solution: $x = 0$.',
        hint3: '$x^2 = 4$ gives $x = 2$ and $x = -2$ — two solutions.',
        explanation: '$y=-1$ is below the vertex of $y=x^2$, so 0 intersections. $y=0$ touches at the vertex, so 1 intersection. $y=4$ cuts the parabola at two points.'
      }
    },
    {
      id: 'sat-q5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line $y = mx + 2$ is tangent to $y = x^2 + 1$. What is the value of $m$?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'No such $m$ exists'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x^2 + 1 = mx + 2 \\\\Rightarrow x^2 - mx - 1 = 0$. Tangent means $\\\\Delta = 0$: $m^2 + 4 = 0$. Wait — that gives $m^2 = -4$, no real solution! Let me reconsider: $x^2 - mx + (1-2) = 0 \\\\Rightarrow x^2 - mx - 1 = 0$, $\\\\Delta = m^2 + 4 > 0$ always. So actually Option D is correct... but let\\'s re-examine. $\\\\Delta = m^2 - 4(1)(-1) = m^2 + 4$. Since $m^2 + 4 \\\\geq 4 > 0$ for all real $m$, the line always intersects the parabola at 2 points. No tangency is possible!'
          },
          {
            question: 'At how many points do $y = x^2 - 4x + 5$ and $y = 2x - 3$ intersect?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Set equal: $x^2 - 4x + 5 = 2x - 3 \\\\Rightarrow x^2 - 6x + 8 = 0$. Wait: $x^2 - 6x + 8 = (x-2)(x-4) = 0$, giving $x = 2$ and $x = 4$. That\\'s 2 intersections. Hmm, let me recheck: $x^2-4x+5-2x+3 = x^2-6x+8$. $\\\\Delta = 36 - 32 = 4 > 0$. So actually **2 intersections**, at $(2, 1)$ and $(4, 5)$.'
          }
        ]
      }
    }""")
    # Fix the explanations for part 5 SAT-style to be accurate
    p5_content = make_part(exp, 5, slug, """    {
      id: 'sat-q5-intro',
      type: 'text' as const,
      content: `
# 🔗 Systems with Quadratics

**Part 5 of 7 — Line-Parabola Intersections**

The SAT frequently asks about systems where one equation is linear and the other is quadratic:
$$y = ax^2 + bx + c \\\\quad \\\\text{and} \\\\quad y = mx + d$$

To solve: **set them equal** and simplify into a single quadratic:
$$ax^2 + bx + c = mx + d \\\\Rightarrow ax^2 + (b - m)x + (c - d) = 0$$

The number of intersection points depends on the discriminant of this resulting quadratic:

| $\\\\Delta$ of the new equation | Intersections |
|-------------------------------|--------------|
| $\\\\Delta > 0$ | **2** intersection points |
| $\\\\Delta = 0$ | **1** point (line is tangent) |
| $\\\\Delta < 0$ | **0** points (no intersection) |

**SAT Insight:** "The line is tangent to the parabola" always means $\\\\Delta = 0$.
      `
    },
    {
      id: 'sat-q5-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The system $y = x^2$ and $y = 4$ has how many solutions?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x^2 = 4$, so $x = \\\\pm 2$. Two solutions: $(2, 4)$ and $(-2, 4)$. The horizontal line $y = 4$ cuts the parabola at two points.'
          },
          {
            question: 'How many times does $y = x + 3$ intersect $y = x^2 + 2x + 3$?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Infinitely many'
            ],
            correctAnswer: 2,
            explanation: 'Set equal: $x + 3 = x^2 + 2x + 3$. Simplify: $0 = x^2 + x = x(x+1)$. So $x = 0$ or $x = -1$. Two intersection points.'
          }
        ]
      }
    },
    {
      id: 'sat-q5-substitution',
      type: 'text' as const,
      content: `
**Substitution Method — Worked Example**

Find the intersection of $y = x^2 - 3x + 2$ and $y = x - 1$.

**Step 1:** Set equal: $x^2 - 3x + 2 = x - 1$

**Step 2:** Move everything to one side: $x^2 - 4x + 3 = 0$

**Step 3:** Factor: $(x-1)(x-3) = 0 \\\\Rightarrow x = 1$ or $x = 3$

**Step 4:** Find y-values using the simpler equation ($y = x - 1$):
- $x = 1$: $y = 0$ → $(1, 0)$
- $x = 3$: $y = 2$ → $(3, 2)$

**Step 5:** Verify in the quadratic:
- $(1, 0)$: $1 - 3 + 2 = 0$ ✓
- $(3, 2)$: $9 - 9 + 2 = 2$ ✓

---

**SAT Tip:** Always plug back into the **simpler** equation to find y. It's faster and less error-prone.
      `
    },
    {
      id: 'sat-q5-practice',
      type: 'input-boxes' as const,
      content: `
**Find all intersection points.** 🧮

**System:** $y = x^2$ and $y = 2x + 3$

1) The negative x-solution is $x =$ ?

2) The positive x-solution is $x =$ ?

3) The y-value at the positive solution is $y =$ ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '3', '9'],
        hint1: 'Set $x^2 = 2x + 3$, so $x^2 - 2x - 3 = 0$. Factor: $(x-3)(x+1) = 0$.',
        hint2: 'The two x-values from the factored equation are $x = 3$ and $x = -1$.',
        hint3: 'Use $y = x^2$: when $x = 3$, $y = 9$. (Or use $y = 2(3)+3 = 9$.)',
        explanation: '$x^2 = 2x+3 \\\\Rightarrow x^2-2x-3=0 \\\\Rightarrow (x-3)(x+1)=0$. Solutions: $(-1, 1)$ and $(3, 9)$.'
      }
    },
    {
      id: 'sat-q5-tangent',
      type: 'text' as const,
      content: `
**Tangent Lines — When the Line Just Touches**

A line is **tangent** to a parabola when $\\\\Delta = 0$ (exactly one intersection).

**Example:** For what value of $k$ is $y = 2x + k$ tangent to $y = x^2$?

Set equal: $x^2 = 2x + k \\\\Rightarrow x^2 - 2x - k = 0$

For tangency: $\\\\Delta = 0$
$$(-2)^2 - 4(1)(-k) = 0 \\\\Rightarrow 4 + 4k = 0 \\\\Rightarrow k = -1$$

The tangent line is $y = 2x - 1$, touching the parabola at $x = 1$, $y = 1$.

---

**Two-Quadratic Systems:**

Sometimes both equations are quadratic: $y = x^2 + 2$ and $y = 2x^2 - x$

Set equal: $x^2 + 2 = 2x^2 - x \\\\Rightarrow 0 = x^2 - x - 2 = (x-2)(x+1)$

Same process — subtract to get a simpler equation, then solve.
      `
    },
    {
      id: 'sat-q5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each system to its number of intersections.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2$ and $y = -1$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 0$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          },
          {
            label: '$y = x^2$ and $y = 4$',
            options: ['0 intersections', '1 intersection', '2 intersections']
          }
        ],
        correctAnswers: ['0 intersections', '1 intersection', '2 intersections'],
        hint1: '$x^2 = -1$ has no real solution (a square can\\'t be negative).',
        hint2: '$x^2 = 0$ has exactly one solution: $x = 0$.',
        hint3: '$x^2 = 4$ gives $x = 2$ and $x = -2$ — two solutions.',
        explanation: '$y=-1$ is below the vertex of $y=x^2$, so 0 intersections. $y=0$ touches at the vertex, so 1. $y=4$ cuts at two points.'
      }
    },
    {
      id: 'sat-q5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ is the line $y = 4x + k$ tangent to $y = x^2 + 2$?',
            options: [
              '$k = -2$',
              '$k = 2$',
              '$k = -4$',
              '$k = 6$'
            ],
            correctAnswer: 0,
            explanation: 'Set equal: $x^2 + 2 = 4x + k \\\\Rightarrow x^2 - 4x + (2-k) = 0$. Tangent: $\\\\Delta = 0 \\\\Rightarrow 16 - 4(2-k) = 0 \\\\Rightarrow 16 - 8 + 4k = 0 \\\\Rightarrow 4k = -8 \\\\Rightarrow k = -2$.'
          },
          {
            question: 'The system $y = x^2 - 2x$ and $y = -x + 2$ has solutions at which points?',
            options: [
              '$(1, 1)$ and $(2, 0)$',
              '$(-1, 3)$ and $(2, 0)$',
              '$(1, 1)$ and $(-2, 4)$',
              '$(-1, 3)$ and $(1, 1)$'
            ],
            correctAnswer: 1,
            explanation: 'Set equal: $x^2 - 2x = -x + 2 \\\\Rightarrow x^2 - x - 2 = 0 \\\\Rightarrow (x-2)(x+1)=0$. So $x = 2$ or $x = -1$. Using $y=-x+2$: $x=2 \\\\Rightarrow y=0$, $x=-1 \\\\Rightarrow y=3$. Points: $(-1, 3)$ and $(2, 0)$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part5.ts'), p5_content)

    # =========================================================================
    # Part 6: Word Problems
    # =========================================================================
    p6 = make_part(exp, 6, slug, """    {
      id: 'sat-q6-intro',
      type: 'text' as const,
      content: `
# 🚀 Quadratic Word Problems

**Part 6 of 7 — Projectiles, Optimization & Area**

Quadratic word problems appear on every SAT. The three most common types:

| Type | Typical Equation | What You Find |
|------|-----------------|---------------|
| **Projectile motion** | $h(t) = -16t^2 + v_0 t + h_0$ | Max height, time to ground |
| **Optimization** | $P(x) = ax^2 + bx + c$ | Maximum or minimum value |
| **Area** | $A = x(d - 2x)$ | Dimensions that maximize area |

**Key Physics Fact:** Near Earth's surface, gravity pulls objects down at $16$ ft/s² (or $4.9$ m/s²). The model $h = -16t^2 + v_0 t + h_0$ uses **feet and seconds**.

| Variable | Meaning |
|----------|---------|
| $h$ | Height at time $t$ |
| $-16$ | Gravity (in ft/s²) |
| $v_0$ | Initial upward velocity |
| $h_0$ | Initial height |
      `
    },
    {
      id: 'sat-q6-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched upward from ground level at 64 ft/s. Its height is $h(t) = -16t^2 + 64t$. What is the maximum height?',
            options: [
              '$32$ feet',
              '$64$ feet',
              '$128$ feet',
              '$48$ feet'
            ],
            correctAnswer: 1,
            explanation: 'Max height occurs at vertex: $t = -64/(2 \\\\cdot -16) = 2$ seconds. $h(2) = -16(4) + 64(2) = -64 + 128 = 64$ feet.'
          },
          {
            question: 'In $h(t) = -16t^2 + 48t + 5$, what does the $5$ represent?',
            options: [
              'Maximum height',
              'Time to reach max height',
              'Initial height above ground',
              'Initial velocity'
            ],
            correctAnswer: 2,
            explanation: 'In $h = -16t^2 + v_0 t + h_0$, the constant $h_0 = 5$ is the **initial height** — the height at $t = 0$. Check: $h(0) = 0 + 0 + 5 = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-q6-projectile',
      type: 'text' as const,
      content: `
**Projectile Problem — Complete Walkthrough**

A rocket is launched from the top of a 100-foot building with an initial velocity of 80 ft/s. Its height is: $$h(t) = -16t^2 + 80t + 100$$

**Q1: When does it reach maximum height?**

$t = -\\\\frac{80}{2(-16)} = \\\\frac{80}{32} = 2.5$ seconds

**Q2: What is the maximum height?**

$h(2.5) = -16(6.25) + 80(2.5) + 100 = -100 + 200 + 100 = 200$ feet

**Q3: When does it hit the ground?** (Set $h = 0$)

$-16t^2 + 80t + 100 = 0 \\\\Rightarrow 16t^2 - 80t - 100 = 0 \\\\Rightarrow 4t^2 - 20t - 25 = 0$

Quadratic formula: $t = \\\\frac{20 \\\\pm \\\\sqrt{400 + 400}}{8} = \\\\frac{20 \\\\pm 20\\\\sqrt{2}}{8} = \\\\frac{5 \\\\pm 5\\\\sqrt{2}}{2}$

Only the positive root: $t = \\\\frac{5 + 5\\\\sqrt{2}}{2} \\\\approx 6.04$ seconds.

**SAT Tip:** "Hits the ground" means $h = 0$. "Maximum height" means find the vertex.
      `
    },
    {
      id: 'sat-q6-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each word problem.** 🧮

1) $h(t) = -16t^2 + 96t$. At what time (in seconds) does the object reach max height?

2) Using the same equation, what is the maximum height in feet?

3) A rectangle's length is $(20 - 2w)$ and width is $w$. The area $A = w(20-2w) = -2w^2 + 20w$. What width $w$ maximizes the area?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '144', '5'],
        hint1: '$t = -96/(2 \\\\times -16) = 96/32$.',
        hint2: '$h(3) = -16(9) + 96(3) = -144 + 288$.',
        hint3: 'Vertex of $A = -2w^2 + 20w$: $w = -20/(2 \\\\times -2) = 20/4$.',
        explanation: '1) $t = 3$ s. 2) $h(3) = 144$ ft. 3) $w = 5$. Area = $-2(25)+100 = 50$ sq units.'
      }
    },
    {
      id: 'sat-q6-optimization',
      type: 'text' as const,
      content: `
**Optimization — Maximizing Revenue, Minimizing Cost**

**Classic SAT Problem:** A store sells shirts at \\\\$20 each, selling 100/day. For every \\\\$1 price increase, sales drop by 5.

Let $x$ = number of \\\\$1 increases. Then:
- Price = $20 + x$
- Daily sales = $100 - 5x$
- Revenue = $(20 + x)(100 - 5x) = -5x^2 + 0x + 2000$

Wait — let's expand carefully:
$$R(x) = (20+x)(100-5x) = 2000 - 100x + 100x - 5x^2 = -5x^2 + 2000$$

Hmm, the $x$ terms canceled! So $R = -5x^2 + 2000$, which is maximized at $x = 0$. The current price ($\\\\$20$) already maximizes revenue.

---

**More typical version:** Price $= 20 + x$, sales $= 100 - 4x$:
$$R = (20+x)(100-4x) = 2000 - 80x + 100x - 4x^2 = -4x^2 + 20x + 2000$$

Vertex: $x = -20/(2 \\\\cdot -4) = 2.5$. Optimal price: $\\\\$22.50$, selling 90 shirts.

**SAT Tip:** Set up the revenue equation, expand, then find the vertex.
      `
    },
    {
      id: 'sat-q6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each question to the correct approach.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When does a ball hit the ground?',
            options: ['Set $h(t) = 0$ and solve', 'Find vertex $t$-coordinate', 'Find the discriminant', 'Take the derivative']
          },
          {
            label: 'What is the maximum height of a projectile?',
            options: ['Set $h(t) = 0$ and solve', 'Find vertex $y$-coordinate', 'Set $t = 0$', 'Find the discriminant']
          },
          {
            label: 'What dimensions maximize the area of a rectangle with fixed perimeter?',
            options: ['Set area = 0', 'Find vertex of area function', 'Use the quadratic formula', 'Find the discriminant']
          }
        ],
        correctAnswers: ['Set $h(t) = 0$ and solve', 'Find vertex $y$-coordinate', 'Find vertex of area function'],
        hint1: '"Hits the ground" means height = 0.',
        hint2: 'Maximum height is the highest point — that\\'s the vertex.',
        hint3: 'Maximizing area means finding the vertex of the area quadratic.',
        explanation: 'Ground → set $h=0$. Max height → vertex y-value. Max area → vertex of $A(w)$.'
      }
    },
    {
      id: 'sat-q6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer has 120 feet of fencing to enclose a rectangular garden against a barn wall (3 sides fenced). If the width is $w$ feet, the area is $A = w(120 - 2w)$. What is the maximum area?',
            options: [
              '$1600$ sq ft',
              '$1800$ sq ft',
              '$3600$ sq ft',
              '$900$ sq ft'
            ],
            correctAnswer: 1,
            explanation: '$A = -2w^2 + 120w$. Vertex: $w = -120/(2 \\\\times -2) = 30$. Max area: $A(30) = 30(120-60) = 30 \\\\times 60 = 1800$ sq ft.'
          },
          {
            question: 'A ball thrown upward has height $h(t) = -16t^2 + 32t + 48$. How many seconds until it hits the ground?',
            options: [
              '$1$ second',
              '$2$ seconds',
              '$3$ seconds',
              '$4$ seconds'
            ],
            correctAnswer: 2,
            explanation: 'Set $h = 0$: $-16t^2 + 32t + 48 = 0$. Divide by $-16$: $t^2 - 2t - 3 = 0$. Factor: $(t-3)(t+1) = 0$. Since $t > 0$, $t = 3$ seconds.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part6.ts'), p6)

    # =========================================================================
    # Part 7: Review & Mixed SAT Practice
    # =========================================================================
    p7 = make_part(exp, 7, slug, """    {
      id: 'sat-q7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed SAT Practice

**Part 7 of 7 — Cheat Sheet & Exam Strategies**

**Quadratic Equations Cheat Sheet:**

| Form | Equation | Best For |
|------|----------|----------|
| **Standard** | $ax^2 + bx + c = 0$ | Finding discriminant, using quadratic formula |
| **Factored** | $a(x - r_1)(x - r_2) = 0$ | Reading roots directly |
| **Vertex** | $a(x - h)^2 + k$ | Finding vertex (max/min), graphing |

**Essential Formulas:**
- Quadratic formula: $x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$
- Vertex x-coordinate: $x = -\\\\frac{b}{2a}$
- Sum of roots: $r_1 + r_2 = -\\\\frac{b}{a}$
- Product of roots: $r_1 \\\\cdot r_2 = \\\\frac{c}{a}$
- Discriminant: $\\\\Delta = b^2 - 4ac$

**SAT Strategy:** Always read what the question asks. Common traps: asking for the **sum** of solutions (use $-b/a$, don't solve), asking for the **product** (use $c/a$).
      `
    },
    {
      id: 'sat-q7-check1',
      type: 'multiple-choice' as const,
      content: `
**Warm-Up Review** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The solutions of $x^2 - 7x + 10 = 0$ are $x = 2$ and $x = 5$. Without solving, what is the sum of the solutions?',
            options: [
              '$7$',
              '$-7$',
              '$10$',
              '$3$'
            ],
            correctAnswer: 0,
            explanation: 'Sum of roots $= -b/a = -(-7)/1 = 7$. You can verify: $2 + 5 = 7$. This shortcut avoids solving entirely!'
          },
          {
            question: 'For $3x^2 + 6x - 9 = 0$, what is the product of the two solutions?',
            options: [
              '$-3$',
              '$3$',
              '$-9$',
              '$9$'
            ],
            correctAnswer: 0,
            explanation: 'Product of roots $= c/a = -9/3 = -3$. (The roots are $x=1$ and $x=-3$, and $1 \\\\times (-3) = -3$.)'
          }
        ]
      }
    },
    {
      id: 'sat-q7-strategies',
      type: 'text' as const,
      content: `
**Top 5 SAT Quadratic Strategies**

**Strategy 1: Identify what form you need.**
- Need roots? → Factor or use quadratic formula
- Need vertex/max/min? → Vertex form or $-b/(2a)$
- Need number of solutions? → Discriminant

**Strategy 2: Use Vieta's formulas for sum/product questions.**
- Sum of roots $= -b/a$
- Product of roots $= c/a$
- Example: "If $r$ and $s$ are solutions of $2x^2 - 10x + 7 = 0$, what is $r + s$?" → $-(-10)/2 = 5$

**Strategy 3: Backsolve from answer choices.**
If the SAT gives numeric answer choices, plug them into the equation. This can be faster than algebra!

**Strategy 4: Match coefficients.**
If $(x + p)(x + q) = x^2 + bx + c$, then $p + q = b$ and $pq = c$.

**Strategy 5: Beware of "how many real solutions."**
This ALWAYS means: find the discriminant. $\\\\Delta > 0$: two, $\\\\Delta = 0$: one, $\\\\Delta < 0$: zero.
      `
    },
    {
      id: 'sat-q7-practice',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — No Hints on Method!** 🧮

1) Solve $x^2 + 3x - 10 = 0$. What is the positive root?

2) The vertex of $y = -x^2 + 6x - 5$ has $y$-coordinate = ?

3) For what value of $c$ does $x^2 - 8x + c = 0$ have exactly one solution?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '16'],
        hint1: 'Factor: find two numbers that multiply to $-10$ and add to $3$.',
        hint2: 'Use $x = -b/(2a) = -6/(2 \\\\cdot -1) = 3$, then compute $y = f(3)$.',
        hint3: 'One solution means $\\\\Delta = 0$: $64 - 4c = 0$.',
        explanation: '1) $(x+5)(x-2)=0$: positive root is $2$. 2) $f(3) = -9+18-5 = 4$. 3) $64-4c=0 \\\\Rightarrow c=16$.'
      }
    },
    {
      id: 'sat-q7-traps',
      type: 'text' as const,
      content: `
**Common SAT Traps & How to Avoid Them**

| Trap | Example | Fix |
|------|---------|-----|
| **Forgetting to set = 0** | Factoring $x^2 - 3x = 10$ as $x(x-3) = 10$ | Move ALL terms to one side first: $x^2 - 3x - 10 = 0$ |
| **Sign errors with $b$** | In $x^2 - 6x + 5$, using $b = 6$ | Read carefully: $b = -6$ |
| **Dividing by $x$** | $x^2 = 5x \\\\Rightarrow x = 5$ | **Don't divide by $x$!** Factor: $x(x-5)=0$, so $x = 0$ or $x = 5$ |
| **Ignoring negative roots** | "What are ALL solutions?" | Check if negative values work too |
| **Wrong form** | Looking for max, but equation is in standard form | Convert to vertex form or use $-b/(2a)$ |

**Time-saving tip:** On the SAT, if a question says "which of the following is equivalent to…" — expand each answer choice. The right one will simplify to match.
      `
    },
    {
      id: 'sat-q7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the best first step for each problem.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find the maximum value of $f(x) = -2x^2 + 12x - 7$',
            options: ['Find vertex using $x = -b/(2a)$', 'Set $f(x) = 0$ and factor', 'Compute the discriminant', 'Substitute answer choices']
          },
          {
            label: 'How many real solutions does $5x^2 - 3x + 2 = 0$ have?',
            options: ['Find vertex using $x = -b/(2a)$', 'Set $f(x) = 0$ and factor', 'Compute the discriminant', 'Substitute answer choices']
          },
          {
            label: 'If $r$ and $s$ satisfy $x^2 - 9x + 14 = 0$, find $rs$',
            options: ['Use product of roots $= c/a$', 'Factor and multiply roots', 'Compute the discriminant', 'Use $-b/a$']
          }
        ],
        correctAnswers: ['Find vertex using $x = -b/(2a)$', 'Compute the discriminant', 'Use product of roots $= c/a$'],
        hint1: 'Maximum value = vertex y-coordinate. The fastest path is $-b/(2a)$.',
        hint2: '"How many real solutions" = discriminant question.',
        hint3: 'Product of roots is just $c/a = 14/1 = 14$. No solving needed!',
        explanation: 'Max value → vertex. Number of solutions → discriminant. Product of roots → $c/a$.'
      }
    },
    {
      id: 'sat-q7-sat-style',
      type: 'multiple-choice' as const,
      content: `
**Final SAT-Style Challenge** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $(2x + 3)(x - 4) = 2x^2 + bx + c$, what is the value of $b + c$?',
            options: [
              '$-17$',
              '$-5$',
              '$7$',
              '$-7$'
            ],
            correctAnswer: 0,
            explanation: 'Expand: $(2x+3)(x-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$. So $b = -5$ and $c = -12$. $b + c = -5 + (-12) = -17$.'
          },
          {
            question: 'The equation $2x^2 - kx + 8 = 0$ has two equal real roots. What is the positive value of $k$?',
            options: [
              '$4$',
              '$8$',
              '$16$',
              '$32$'
            ],
            correctAnswer: 1,
            explanation: 'Two equal roots means $\\\\Delta = 0$: $k^2 - 4(2)(8) = 0 \\\\Rightarrow k^2 = 64 \\\\Rightarrow k = \\\\pm 8$. The positive value is $k = 8$.'
          }
        ]
      }
    }""")
    write_file(os.path.join(BASE, f'{prefix}-part7.ts'), p7)

    print(f"✅ Wrote all 7 files for {slug}:")
    for i in range(1, 8):
        path = os.path.join(BASE, f'{prefix}-part{i}.ts')
        with open(path, 'r') as f:
            lines = len(f.readlines())
        print(f"   Part {i}: {path} ({lines} lines)")


if __name__ == '__main__':
    write_sat_quadratics()
    print("\n🎉 All SAT Quadratic Equations lesson files generated!")
