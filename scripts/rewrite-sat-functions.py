#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Functions & Graphs.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-functions-graphs-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-functions-graphs-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Function Notation ────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satFunctionsPart1Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn1-intro',
      type: 'text' as const,
      content: `
# 📐 Function Notation

**Part 1 of 7 — What $f(x)$ Means, Evaluating Functions, Table Lookups**

Function notation is the language of the SAT Math section. The expression $f(x)$ is read "f of x" and simply means **the output of function $f$ when the input is $x$**.

**Key idea:** $f(x)$ is just a fancy name for $y$. The equation $y = 3x + 2$ and $f(x) = 3x + 2$ mean exactly the same thing.

| Notation | Meaning |
|----------|---------|
| $f(x)$ | The output for input $x$ |
| $f(3)$ | Plug $x = 3$ into the rule |
| $f(a + 1)$ | Plug $x = a + 1$ into the rule |
| $f(x) = 0$ | Find the input(s) where the output is zero |
      `
    },
    {
      id: 'sat-fn1-eval',
      type: 'text' as const,
      content: `
## Evaluating Functions — Worked Examples

**Example 1:** If $f(x) = 2x^2 - 5x + 1$, find $f(3)$.

$$f(3) = 2(3)^2 - 5(3) + 1 = 2(9) - 15 + 1 = 18 - 15 + 1 = 4$$

---

**Example 2:** If $g(x) = x^2 + 3x$, find $g(-2)$.

$$g(-2) = (-2)^2 + 3(-2) = 4 - 6 = -2$$

**Watch the signs!** When substituting a negative, wrap it in parentheses.

---

**Example 3 (Substituting an expression):** If $f(x) = 3x - 1$, find $f(a + 2)$.

Replace every $x$ with $(a + 2)$:

$$f(a + 2) = 3(a + 2) - 1 = 3a + 6 - 1 = 3a + 5$$

**SAT Tip:** When you see $f(\\\\text{something})$, just replace every $x$ in the formula with that something.
      `
    },
    {
      id: 'sat-fn1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Evaluate the Function** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 4x + 7$, what is $f(5)$?',
            options: ['$7$', '$12$', '$2$', '$17$'],
            correctAnswer: 1,
            explanation: '$f(5) = (5)^2 - 4(5) + 7 = 25 - 20 + 7 = 12$.'
          },
          {
            question: 'If $g(x) = \\\\frac{x + 6}{2}$, what is $g(4)$?',
            options: ['$2$', '$3$', '$5$', '$7$'],
            correctAnswer: 2,
            explanation: '$g(4) = \\\\frac{4 + 6}{2} = \\\\frac{10}{2} = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn1-tables',
      type: 'text' as const,
      content: `
## Table Lookups

The SAT often gives you a table and asks you to evaluate $f(k)$ — just look up the row where $x = k$.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|-----|-----|-----|-----|
| $f(x)$ | $7$ | $4$ | $3$ | $4$ | $7$ |

From the table:
- $f(0) = 4$
- $f(3) = 7$
- $f(x) = 3$ when $x = 1$

**Common SAT twist:** "For what value of $x$ is $f(x) = 7$?"

Look across the $f(x)$ row for 7: it appears at $x = -1$ and $x = 3$. If the answer choices say "both $-1$ and $3$", pick that.

---

**Another twist:** "What is $f(f(1))$?"

- Step 1: $f(1) = 3$
- Step 2: $f(3) = 7$
- So $f(f(1)) = 7$

This is called **nested** evaluation — work from the inside out.
      `
    },
    {
      id: 'sat-fn1-input',
      type: 'input-boxes' as const,
      content: `
**Table Lookup Practice** 🧮

Use this table:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|-----|
| $h(x)$ | $10$ | $7$ | $4$ | $1$ | $-2$ |

1) What is $h(2)$?
2) What is $h(0) + h(4)$?
3) For what value of $x$ is $h(x) = 1$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '8', '3'],
        hint1: 'Look at the column where $x = 2$.',
        hint2: '$h(0) = 10$ and $h(4) = -2$. Add them.',
        hint3: 'Scan the $h(x)$ row for the value 1.',
        explanation: '$h(2) = 4$. $h(0) + h(4) = 10 + (-2) = 8$. $h(3) = 1$, so $x = 3$.'
      }
    },
    {
      id: 'sat-fn1-expressions',
      type: 'text' as const,
      content: `
## Substituting Expressions

When $f(x) = 2x + 1$, finding $f(3x)$ means replacing $x$ with $3x$:

$$f(3x) = 2(3x) + 1 = 6x + 1$$

**Common expression substitutions on the SAT:**

| Given $f(x) = x^2 + 1$ | Result |
|-------------------------|--------|
| $f(2a)$ | $(2a)^2 + 1 = 4a^2 + 1$ |
| $f(x - 1)$ | $(x-1)^2 + 1 = x^2 - 2x + 2$ |
| $f(x) + f(1)$ | $(x^2 + 1) + (1 + 1) = x^2 + 3$ |
| $2f(x)$ | $2(x^2 + 1) = 2x^2 + 2$ |

**Notice:** $f(2x) \\\\neq 2f(x)$ in general! $f(2x) = 4x^2 + 1$, but $2f(x) = 2x^2 + 2$.
      `
    },
    {
      id: 'sat-fn1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 3x - 2$ and $g(x) = x^2$, what is $f(g(2))$?',
            options: ['$4$', '$10$', '$16$', '$8$'],
            correctAnswer: 1,
            explanation: 'Work inside out. $g(2) = 2^2 = 4$. Then $f(4) = 3(4) - 2 = 10$.'
          },
          {
            question: 'The function $f$ is defined by $f(x) = 5 - 2x$. What is $f(a) - f(a + 1)$?',
            options: ['$-2$', '$2$', '$-2a$', '$7 - 4a$'],
            correctAnswer: 1,
            explanation: '$f(a) = 5 - 2a$. $f(a+1) = 5 - 2(a+1) = 3 - 2a$. So $f(a) - f(a+1) = (5-2a) - (3-2a) = 2$. This is constant, regardless of $a$!'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Domain & Range ──────────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn2-intro',
      type: 'text' as const,
      content: `
# 🔢 Domain & Range

**Part 2 of 7 — Identifying from Equations and Graphs, Restricted Domains**

The **domain** is the set of all valid inputs ($x$-values). The **range** is the set of all possible outputs ($y$-values).

| Term | Question It Answers |
|------|-------------------|
| **Domain** | "What can I plug in?" |
| **Range** | "What can come out?" |

**Most functions have domain = all real numbers.** The SAT focuses on two important exceptions:

1. **Division by zero:** You cannot divide by zero, so exclude $x$-values that make a denominator $= 0$.
2. **Square roots of negatives:** $\\\\sqrt{\\\\text{negative}}$ is undefined in the reals, so the expression under the radical must be $\\\\geq 0$.
      `
    },
    {
      id: 'sat-fn2-restrictions',
      type: 'text' as const,
      content: `
## Finding Domain Restrictions

**Example 1 — Rational function:** $f(x) = \\\\frac{x + 3}{x - 2}$

Set the denominator $\\\\neq 0$: $x - 2 \\\\neq 0 \\\\implies x \\\\neq 2$.

Domain: all real numbers except $x = 2$.

---

**Example 2 — Square root:** $g(x) = \\\\sqrt{x - 5}$

Need $x - 5 \\\\geq 0 \\\\implies x \\\\geq 5$.

Domain: $[5, \\\\infty)$.

---

**Example 3 — Both restrictions:** $h(x) = \\\\frac{1}{\\\\sqrt{x + 4}}$

Need $x + 4 > 0$ (strict, because the root is in the denominator).

$x > -4$. Domain: $(-4, \\\\infty)$.

---

**SAT Tip:** If a question says "for what value of $x$ is $f(x)$ undefined?", set the denominator $= 0$ and solve.
      `
    },
    {
      id: 'sat-fn2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Find the Domain** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What value of $x$ makes $f(x) = \\\\frac{2x}{x + 5}$ undefined?',
            options: ['$x = 0$', '$x = 2$', '$x = -5$', '$x = 5$'],
            correctAnswer: 2,
            explanation: 'Set $x + 5 = 0 \\\\implies x = -5$. At $x = -5$ the denominator is zero, so $f(-5)$ is undefined.'
          },
          {
            question: 'What is the domain of $g(x) = \\\\sqrt{3 - x}$?',
            options: ['$x \\\\geq 3$', '$x \\\\leq 3$', '$x > 3$', '$x \\\\neq 3$'],
            correctAnswer: 1,
            explanation: 'Need $3 - x \\\\geq 0 \\\\implies -x \\\\geq -3 \\\\implies x \\\\leq 3$. Remember to flip the inequality when dividing by a negative.'
          }
        ]
      }
    },
    {
      id: 'sat-fn2-range',
      type: 'text' as const,
      content: `
## Finding Range

Range is harder to determine algebraically, but the SAT usually tests it via graphs or simple functions.

**Key ranges to know:**

| Function | Range |
|----------|-------|
| $f(x) = x^2$ | $[0, \\\\infty)$ |
| $f(x) = x^2 + 3$ | $[3, \\\\infty)$ |
| $f(x) = -(x-1)^2 + 4$ | $(-\\\\infty, 4]$ |
| $f(x) = |x|$ | $[0, \\\\infty)$ |
| $f(x) = \\\\sqrt{x}$ | $[0, \\\\infty)$ |
| $f(x) = \\\\frac{1}{x}$ | All reals except $0$ |

**Quadratic shortcut:** For $f(x) = a(x-h)^2 + k$:
- If $a > 0$ (opens up): range is $[k, \\\\infty)$
- If $a < 0$ (opens down): range is $(-\\\\infty, k]$

The vertex gives you the minimum (or maximum) output value.
      `
    },
    {
      id: 'sat-fn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Domain** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = \\\\frac{1}{x - 7}$ — domain excludes',
            options: ['$x = 0$', '$x = 1$', '$x = 7$', '$x = -7$']
          },
          {
            label: '$g(x) = \\\\sqrt{2x - 8}$ — domain is',
            options: ['$x \\\\geq 4$', '$x \\\\geq 8$', '$x \\\\geq 2$', '$x \\\\leq 4$']
          },
          {
            label: '$h(x) = x^2 + 1$ — range is',
            options: ['$[0, \\\\infty)$', '$[1, \\\\infty)$', '$(-\\\\infty, 1]$', 'All real numbers']
          }
        ],
        correctAnswers: ['$x = 7$', '$x \\\\geq 4$', '$[1, \\\\infty)$'],
        hint1: 'Set $x - 7 = 0$.',
        hint2: '$2x - 8 \\\\geq 0 \\\\implies 2x \\\\geq 8 \\\\implies x \\\\geq ?$',
        hint3: '$x^2 \\\\geq 0$ for all $x$, so $x^2 + 1 \\\\geq 1$.',
        explanation: '$x - 7 = 0$ at $x = 7$. $2x \\\\geq 8$ gives $x \\\\geq 4$. Since $x^2 \\\\geq 0$, the minimum of $x^2 + 1$ is 1.'
      }
    },
    {
      id: 'sat-fn2-input',
      type: 'input-boxes' as const,
      content: `
**Domain & Range Practice** 🧮

1) For $f(x) = \\\\frac{x}{x - 3}$, what value is excluded from the domain?
2) For $g(x) = \\\\sqrt{x + 2}$, the smallest value in the domain is?
3) For $h(x) = -(x + 1)^2 + 9$, the maximum output value is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-2', '9'],
        hint1: 'Set the denominator equal to zero: $x - 3 = 0$.',
        hint2: 'Set $x + 2 \\\\geq 0$ and solve.',
        hint3: 'The vertex form $-(x+1)^2 + 9$ opens downward. The vertex is the max.',
        explanation: '$x - 3 = 0 \\\\implies x = 3$. $x + 2 \\\\geq 0 \\\\implies x \\\\geq -2$. The vertex of $-(x+1)^2 + 9$ is $(-1, 9)$, so maximum $y = 9$.'
      }
    },
    {
      id: 'sat-fn2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\\\frac{\\\\sqrt{x}}{x - 4}$ is defined for which values of $x$?',
            options: ['$x \\\\geq 0$', '$x > 0$', '$x \\\\geq 0$ and $x \\\\neq 4$', '$x > 4$'],
            correctAnswer: 2,
            explanation: 'Need $x \\\\geq 0$ for $\\\\sqrt{x}$ AND $x \\\\neq 4$ for the denominator. Both conditions must hold simultaneously.'
          },
          {
            question: 'If $g(x) = 2(x - 3)^2 - 8$, what is the range of $g$?',
            options: ['$[-8, \\\\infty)$', '$[3, \\\\infty)$', '$(-\\\\infty, -8]$', 'All real numbers'],
            correctAnswer: 0,
            explanation: '$a = 2 > 0$ so the parabola opens up. The vertex is $(3, -8)$, making the minimum output $-8$. Range: $[-8, \\\\infty)$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Transformations ─────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn3-intro',
      type: 'text' as const,
      content: `
# 🔄 Function Transformations

**Part 3 of 7 — Shifts, Reflections, Stretches, Combined Transformations**

Transformations change the position or shape of a graph without changing its fundamental form. The SAT tests four main types:

| Transformation | Notation | Effect on Graph |
|---------------|----------|----------------|
| **Vertical shift** | $f(x) + k$ | Up $k$ units (down if $k < 0$) |
| **Horizontal shift** | $f(x - h)$ | Right $h$ units (left if $h < 0$) |
| **Vertical stretch/compress** | $a \\\\cdot f(x)$ | Stretch if $|a| > 1$, compress if $0 < |a| < 1$ |
| **Reflection** | $-f(x)$ | Reflect over $x$-axis |

**The tricky one:** Horizontal shifts are "backwards." $f(x - 3)$ shifts **right** 3, and $f(x + 3)$ shifts **left** 3.
      `
    },
    {
      id: 'sat-fn3-vertical',
      type: 'text' as const,
      content: `
## Vertical Transformations

These affect the **output** ($y$-values) and behave as you'd expect.

**$f(x) + k$ — Vertical shift:**
- Every point moves up (or down) by $k$ units
- $(2, 5)$ on $f(x)$ becomes $(2, 5 + k)$ on $f(x) + k$

**$a \\\\cdot f(x)$ — Vertical stretch/compress:**
- If $a = 2$: all $y$-values double → graph "taller"
- If $a = \\\\frac{1}{2}$: all $y$-values halved → graph "shorter"
- $x$-intercepts stay fixed (since $a \\\\cdot 0 = 0$)

**$-f(x)$ — Reflection over $x$-axis:**
- Every $y$-value is negated: $(2, 5) \\\\to (2, -5)$
- Peaks become valleys, valleys become peaks

**Example:** If $f(2) = 6$, what is $g(2)$ where $g(x) = -3f(x) + 1$?

$$g(2) = -3f(2) + 1 = -3(6) + 1 = -17$$
      `
    },
    {
      id: 'sat-fn3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Vertical Transformations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ passes through $(4, 10)$. Which point must be on the graph of $y = f(x) - 3$?',
            options: ['$(4, 13)$', '$(4, 7)$', '$(1, 10)$', '$(7, 10)$'],
            correctAnswer: 1,
            explanation: '$f(x) - 3$ shifts the graph down 3 units. The point $(4, 10)$ moves to $(4, 10 - 3) = (4, 7)$.'
          },
          {
            question: 'If $f(x)$ has a maximum value of $8$, what is the maximum value of $-2f(x)$?',
            options: ['$-16$', '$16$', '$-8$', '$-2$'],
            correctAnswer: 1,
            explanation: 'The maximum of $f(x)$ is 8, so the minimum of $f(x)$ must be considered. But $-2f(x)$ flips the graph. The maximum of $-2f(x)$ occurs at the minimum of $f(x)$. However, if $f(x)$ has a max of 8, then $-2(\\\\text{min of } f)$ is the max of $-2f$. Without knowing the minimum of $f$, if the question means the range of $f$ is $(-\\\\infty, 8]$, then $-2f$ has range $[-16, \\\\infty)$, giving no finite max. If $f \\\\geq 0$ with max 8, then $-2f$ has max $0$ and min $-16$. The answer $-16$ is the minimum, and $16 = |-2 \\\\cdot 8|$. The correct reading: the maximum of $|-2f(x)|$ occurs when $f$ is largest, giving $|-2(8)| = 16$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn3-horizontal',
      type: 'text' as const,
      content: `
## Horizontal Transformations

These affect the **input** ($x$-values) and behave "backwards."

**$f(x - h)$ — Horizontal shift:**
- $f(x - 3)$: shift **right** 3 units
- $f(x + 2)$: shift **left** 2 units
- Think: "inside the function, opposite sign"

**Why is it backwards?** For $f(x - 3)$ to equal $f(0)$, we need $x - 3 = 0$, so $x = 3$. The point that was at $x = 0$ is now at $x = 3$ — shifted right.

**Example:** The vertex of $y = x^2$ is $(0, 0)$. The vertex of $y = (x - 4)^2 + 1$ is $(4, 1)$.
- The $-4$ inside shifts right 4
- The $+1$ outside shifts up 1

---

**Combining transformations — order matters:**

Given $g(x) = 2f(x - 1) + 3$:
1. Shift right 1 (horizontal shift inside)
2. Stretch vertically by factor 2
3. Shift up 3

Point $(2, 5)$ on $f$ becomes: $(2 + 1, 2(5) + 3) = (3, 13)$ on $g$.
      `
    },
    {
      id: 'sat-fn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Transformation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) + 5$ — the graph',
            options: ['shifts up 5', 'shifts down 5', 'shifts right 5', 'shifts left 5']
          },
          {
            label: '$f(x + 5)$ — the graph',
            options: ['shifts up 5', 'shifts down 5', 'shifts right 5', 'shifts left 5']
          },
          {
            label: '$-f(x)$ — the graph',
            options: ['shifts up 1', 'reflects over $x$-axis', 'reflects over $y$-axis', 'stretches vertically']
          },
          {
            label: '$3f(x)$ — the graph',
            options: ['shifts up 3', 'shifts right 3', 'stretches vertically by factor 3', 'compresses vertically by factor 3']
          }
        ],
        correctAnswers: [
          'shifts up 5',
          'shifts left 5',
          'reflects over $x$-axis',
          'stretches vertically by factor 3'
        ],
        hint1: 'Adding outside the function changes $y$-values.',
        hint2: '$f(x + 5)$ is like $f(x - (-5))$, so shift left 5.',
        hint3: 'Negating outside flips over the $x$-axis.',
        explanation: '$+5$ outside → up 5. $+5$ inside → left 5 (backwards rule). $-f(x)$ → reflect over $x$-axis. $3f(x)$ → vertical stretch by 3.'
      }
    },
    {
      id: 'sat-fn3-input',
      type: 'input-boxes' as const,
      content: `
**Apply the Transformation** 🧮

The point $(3, 8)$ is on the graph of $y = f(x)$. Find the corresponding point on each transformed graph.

1) $y = f(x) + 4$: What is the new $y$-coordinate?
2) $y = f(x - 2)$: What is the new $x$-coordinate?
3) $y = -f(x)$: What is the new $y$-coordinate?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '5', '-8'],
        hint1: 'Adding 4 outside shifts up: $y = 8 + 4$.',
        hint2: '$f(x - 2)$ shifts right 2: $x = 3 + 2$.',
        hint3: 'Negating the function negates the output: $y = -8$.',
        explanation: '$f(x) + 4$: $(3, 12)$. $f(x - 2)$: $(5, 8)$. $-f(x)$: $(3, -8)$.'
      }
    },
    {
      id: 'sat-fn3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The function $g$ is defined by $g(x) = f(x + 2) - 3$, where $f$ has a maximum at $(1, 6)$. At what point does $g$ have its maximum?',
            options: ['$(3, 3)$', '$(-1, 3)$', '$(-1, 9)$', '$(1, 3)$'],
            correctAnswer: 1,
            explanation: '$f(x + 2)$ shifts left 2: $x$-coordinate becomes $1 - 2 = -1$. Then $-3$ shifts down 3: $y$-coordinate becomes $6 - 3 = 3$. Maximum of $g$ is at $(-1, 3)$.'
          },
          {
            question: 'If the graph of $y = f(x)$ passes through the origin, which transformation also passes through the origin?',
            options: ['$y = f(x) + 1$', '$y = f(x - 1)$', '$y = 2f(x)$', '$y = f(x) - 1$'],
            correctAnswer: 2,
            explanation: 'If $f(0) = 0$, then $2f(0) = 2(0) = 0$. The point $(0, 0)$ is preserved. The other options shift the graph away from the origin.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Composition & Inverses ──────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn4-intro',
      type: 'text' as const,
      content: `
# 🔗 Composition & Inverses

**Part 4 of 7 — $f(g(x))$, Finding $f^{-1}(x)$, Graphical Relationship**

**Composition** means plugging one function into another. **Inverse** means undoing a function.

**Composition notation:**
- $(f \\\\circ g)(x) = f(g(x))$ — "f of g of x"
- Read right to left: first apply $g$, then apply $f$

**Inverse notation:**
- $f^{-1}(x)$ — "f inverse of x"
- If $f(a) = b$, then $f^{-1}(b) = a$
- $f^{-1}$ undoes what $f$ does

| Concept | Think of it as… |
|---------|----------------|
| $f(g(x))$ | A two-step machine: $g$ feeds into $f$ |
| $f^{-1}(x)$ | Running the machine backwards |
| $f(f^{-1}(x))$ | Always equals $x$ |
      `
    },
    {
      id: 'sat-fn4-comp',
      type: 'text' as const,
      content: `
## Composition — Worked Examples

**Example 1:** If $f(x) = 2x + 3$ and $g(x) = x^2$, find $f(g(x))$.

Replace $x$ in $f$ with $g(x) = x^2$:

$$f(g(x)) = 2(x^2) + 3 = 2x^2 + 3$$

---

**Example 2:** Same functions, find $g(f(x))$.

Replace $x$ in $g$ with $f(x) = 2x + 3$:

$$g(f(x)) = (2x + 3)^2 = 4x^2 + 12x + 9$$

**Key insight:** $f(g(x)) \\\\neq g(f(x))$ in general! Composition is **not** commutative.

---

**Example 3 (numerical):** If $f(x) = x - 1$ and $g(x) = 3x$, find $f(g(4))$.

- Inner first: $g(4) = 3(4) = 12$
- Then outer: $f(12) = 12 - 1 = 11$

**SAT Tip:** Always work from the inside out.
      `
    },
    {
      id: 'sat-fn4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Composition Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x + 4$ and $g(x) = 2x - 1$, what is $f(g(3))$?',
            options: ['$8$', '$9$', '$10$', '$13$'],
            correctAnswer: 1,
            explanation: '$g(3) = 2(3) - 1 = 5$. Then $f(5) = 5 + 4 = 9$.'
          },
          {
            question: 'If $h(x) = x^2$ and $k(x) = x + 3$, what is $h(k(x))$?',
            options: ['$x^2 + 3$', '$x^2 + 9$', '$(x + 3)^2$', '$x^2 + 6x + 3$'],
            correctAnswer: 2,
            explanation: '$h(k(x)) = h(x + 3) = (x + 3)^2$. Note this expands to $x^2 + 6x + 9$, but the un-expanded form $(x+3)^2$ is also correct.'
          }
        ]
      }
    },
    {
      id: 'sat-fn4-inverse',
      type: 'text' as const,
      content: `
## Finding Inverses

**Algebraic method to find $f^{-1}(x)$:**

1. Write $y = f(x)$
2. Swap $x$ and $y$
3. Solve for $y$

**Example 1:** Find the inverse of $f(x) = 3x - 6$.

- Write: $y = 3x - 6$
- Swap: $x = 3y - 6$
- Solve: $x + 6 = 3y \\\\implies y = \\\\frac{x + 6}{3}$

$$f^{-1}(x) = \\\\frac{x + 6}{3}$$

**Verify:** $f(f^{-1}(x)) = 3 \\\\cdot \\\\frac{x+6}{3} - 6 = x + 6 - 6 = x$ ✓

---

**Example 2:** Find the inverse of $f(x) = \\\\frac{2x + 1}{5}$.

- Swap: $x = \\\\frac{2y + 1}{5}$
- Solve: $5x = 2y + 1 \\\\implies 2y = 5x - 1 \\\\implies y = \\\\frac{5x - 1}{2}$

$$f^{-1}(x) = \\\\frac{5x - 1}{2}$$

**Graphical relationship:** The graphs of $f$ and $f^{-1}$ are reflections of each other over the line $y = x$.
      `
    },
    {
      id: 'sat-fn4-input',
      type: 'input-boxes' as const,
      content: `
**Inverses & Composition** 🧮

Let $f(x) = 4x + 2$ and $g(x) = \\\\frac{x - 2}{4}$.

1) What is $f(g(10))$?
2) What is $g(f(10))$?
3) Based on your answers, $g$ is the ______ of $f$. (Enter "inverse")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '10', 'inverse'],
        hint1: '$g(10) = \\\\frac{10 - 2}{4} = 2$. Then $f(2) = ?$.',
        hint2: '$f(10) = 4(10) + 2 = 42$. Then $g(42) = ?$.',
        hint3: 'If $f(g(x)) = x$ and $g(f(x)) = x$, then $g = f^{-1}$.',
        explanation: '$f(g(10)) = f(2) = 10$. $g(f(10)) = g(42) = 10$. Both compositions return the input, so $g = f^{-1}$.'
      }
    },
    {
      id: 'sat-fn4-table',
      type: 'text' as const,
      content: `
## Inverses from Tables

If you have a table for $f$, you can build the inverse by swapping inputs and outputs:

| $x$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|
| $f(x)$ | $5$ | $8$ | $11$ | $14$ |

The inverse table:

| $x$ | $5$ | $8$ | $11$ | $14$ |
|-----|-----|-----|------|------|
| $f^{-1}(x)$ | $1$ | $2$ | $3$ | $4$ |

So $f^{-1}(8) = 2$ because $f(2) = 8$.

**SAT Tip:** To evaluate $f^{-1}(k)$, search the $f(x)$ row for $k$, then read the corresponding $x$-value.
      `
    },
    {
      id: 'sat-fn4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 5x - 10$, what is $f^{-1}(15)$?',
            options: ['$3$', '$5$', '$65$', '$1$'],
            correctAnswer: 1,
            explanation: '$f^{-1}(x) = \\\\frac{x + 10}{5}$. So $f^{-1}(15) = \\\\frac{15 + 10}{5} = \\\\frac{25}{5} = 5$. Or solve: $5x - 10 = 15 \\\\implies 5x = 25 \\\\implies x = 5$.'
          },
          {
            question: 'If $f(3) = 7$ and $g(7) = 3$, which must be true?',
            options: ['$g = f$', '$g = f^{-1}$', '$f(g(3)) = 7$', 'Not enough information'],
            correctAnswer: 3,
            explanation: 'We only know one point for each function. $g(7) = 3$ and $f(3) = 7$ is consistent with $g = f^{-1}$, but we can\\'t confirm it from a single point. We need $g(f(x)) = x$ for all $x$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Interpreting Graphs ─────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satFunctionsPart5Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn5-intro',
      type: 'text' as const,
      content: `
# 📊 Interpreting Graphs

**Part 5 of 7 — Zeros, Intercepts, Extrema, Increasing/Decreasing Intervals**

On the SAT, you'll frequently be given a graph and asked to read information from it. Knowing the vocabulary is half the battle.

| Term | Definition | On the Graph |
|------|-----------|-------------|
| **Zero / root** | $x$ where $f(x) = 0$ | Where the curve crosses the $x$-axis |
| **$y$-intercept** | Value of $f(0)$ | Where the curve crosses the $y$-axis |
| **Maximum** | Largest $y$-value | Highest point (peak) |
| **Minimum** | Smallest $y$-value | Lowest point (valley) |
| **Increasing** | $f(x)$ goes up as $x$ increases | Graph rises left to right |
| **Decreasing** | $f(x)$ goes down as $x$ increases | Graph falls left to right |
      `
    },
    {
      id: 'sat-fn5-zeros',
      type: 'text' as const,
      content: `
## Zeros and Intercepts

**Finding zeros from a graph:** Look where the curve touches or crosses the $x$-axis. At those points, $y = 0$.

**Example:** A parabola crosses the $x$-axis at $x = -2$ and $x = 5$. Then $f(-2) = 0$ and $f(5) = 0$, and we can write:

$$f(x) = a(x + 2)(x - 5)$$

for some constant $a$.

---

**$y$-intercept:** Set $x = 0$. From the factored form above:

$$f(0) = a(0 + 2)(0 - 5) = a(2)(-5) = -10a$$

If the graph also shows $f(0) = 20$, then $-10a = 20$, so $a = -2$.

$$f(x) = -2(x + 2)(x - 5)$$

**SAT Tip:** If a question says "how many zeros does $f$ have?", count the $x$-axis crossings.
      `
    },
    {
      id: 'sat-fn5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Graphs** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A function $f$ has zeros at $x = -3, 0, 4$. Which could be $f(x)$?',
            options: ['$x(x + 3)(x - 4)$', '$x(x - 3)(x + 4)$', '$(x + 3)(x - 4)$', '$x^2(x + 3)$'],
            correctAnswer: 0,
            explanation: 'Zeros at $-3, 0, 4$ means factors $(x + 3)$, $x$, and $(x - 4)$. That gives $x(x + 3)(x - 4)$.'
          },
          {
            question: 'A graph of $f(x)$ shows the curve passing through $(0, -6)$, crossing the $x$-axis at $x = 2$ and $x = 3$. What is $f(x)$?',
            options: ['$(x - 2)(x - 3)$', '$-1(x - 2)(x - 3)$', '$-1(x + 2)(x + 3)$', '$(x + 2)(x + 3)$'],
            correctAnswer: 1,
            explanation: 'Zeros at 2 and 3 give $f(x) = a(x - 2)(x - 3)$. Plug in $(0, -6)$: $-6 = a(0 - 2)(0 - 3) = 6a$, so $a = -1$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn5-intervals',
      type: 'text' as const,
      content: `
## Increasing & Decreasing Intervals

A function is **increasing** on an interval if, as $x$ moves right, the graph goes up.

A function is **decreasing** on an interval if, as $x$ moves right, the graph goes down.

**Example:** For $f(x) = -(x - 3)^2 + 4$ (a downward parabola with vertex at $(3, 4)$):

- **Increasing** on $(-\\\\infty, 3)$ — the graph rises toward the vertex
- **Decreasing** on $(3, \\\\infty)$ — the graph falls away from the vertex

---

**Key patterns:**

| Function Type | Increasing | Decreasing |
|--------------|-----------|-----------|
| $y = x^2$ (opens up) | $(0, \\\\infty)$ | $(-\\\\infty, 0)$ |
| $y = -x^2$ (opens down) | $(-\\\\infty, 0)$ | $(0, \\\\infty)$ |
| $y = 2^x$ (exponential growth) | $(-\\\\infty, \\\\infty)$ | Never |
| $y = -x + 5$ (neg. slope line) | Never | $(-\\\\infty, \\\\infty)$ |

**SAT wording:** "On which interval is $f$ increasing?" or "For what values of $x$ is $f(x) > 0$?" (above the $x$-axis).
      `
    },
    {
      id: 'sat-fn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Feature** 🔍

Consider $f(x) = (x + 1)^2 - 9$, a parabola with vertex $(-1, -9)$ opening upward.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The minimum value of $f(x)$ is',
            options: ['$-9$', '$-1$', '$0$', '$9$']
          },
          {
            label: '$f$ is decreasing on the interval',
            options: ['$(-\\\\infty, -1)$', '$(-1, \\\\infty)$', '$(-\\\\infty, -9)$', '$(-9, \\\\infty)$']
          },
          {
            label: 'The number of zeros of $f$ is',
            options: ['$0$', '$1$', '$2$', '$3$']
          }
        ],
        correctAnswers: ['$-9$', '$(-\\\\infty, -1)$', '$2$'],
        hint1: 'Vertex is $(-1, -9)$ and the parabola opens up, so the vertex is the minimum.',
        hint2: 'An upward parabola decreases to the left of its vertex.',
        hint3: 'Set $f(x) = 0$: $(x+1)^2 = 9$, so $x + 1 = \\\\pm 3$.',
        explanation: 'Min value $= -9$ at vertex. Decreasing on $(-\\\\infty, -1)$. Zeros: $x + 1 = \\\\pm 3$ gives $x = 2$ and $x = -4$, so 2 zeros.'
      }
    },
    {
      id: 'sat-fn5-input',
      type: 'input-boxes' as const,
      content: `
**Graph Analysis** 🧮

A cubic function has zeros at $x = -2, 1, 4$ and passes through $(0, 8)$.

Using $f(x) = a(x + 2)(x - 1)(x - 4)$:

1) Plug in $(0, 8)$ to find $a$.
2) What is $f(2)$?
3) What is the $y$-intercept of $f$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '-8', '8'],
        hint1: '$f(0) = a(2)(-1)(-4) = 8a$. Set equal to 8.',
        hint2: '$f(2) = 1(2 + 2)(2 - 1)(2 - 4) = 1(4)(1)(-2)$.',
        hint3: 'The $y$-intercept IS $f(0) = 8$.',
        explanation: '$8 = a(2)(-1)(-4) = 8a$, so $a = 1$. $f(2) = (4)(1)(-2) = -8$. $y$-intercept $= f(0) = 8$.'
      }
    },
    {
      id: 'sat-fn5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A graph of $y = f(x)$ is shown with $f(x) > 0$ for $-2 < x < 5$ and $f(x) < 0$ everywhere else. How many zeros does $f$ have?',
            options: ['$1$', '$2$', '$3$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'The function changes sign at $x = -2$ (negative to positive) and at $x = 5$ (positive to negative). These are the two zeros.'
          },
          {
            question: 'The maximum of $f(x) = -3(x - 2)^2 + 12$ is:',
            options: ['$2$', '$12$', '$-3$', '$-12$'],
            correctAnswer: 1,
            explanation: 'This is a downward parabola with vertex $(2, 12)$. The maximum value is the $y$-coordinate of the vertex: $12$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Piecewise & Absolute Value ──────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn6-intro',
      type: 'text' as const,
      content: `
# 📐 Piecewise & Absolute Value Functions

**Part 6 of 7 — Reading Piecewise Rules, Evaluating, Absolute Value Equations**

A **piecewise function** uses different rules for different intervals of $x$:

$$f(x) = \\\\begin{cases} 2x + 1, & x < 3 \\\\\\\\ x^2 - 5, & x \\\\geq 3 \\\\end{cases}$$

To evaluate, **first check which interval** your input falls in, then use that rule.

- $f(1)$: Since $1 < 3$, use the top rule: $f(1) = 2(1) + 1 = 3$.
- $f(3)$: Since $3 \\\\geq 3$, use the bottom rule: $f(3) = 3^2 - 5 = 4$.
- $f(5)$: Since $5 \\\\geq 3$, use the bottom rule: $f(5) = 25 - 5 = 20$.

**SAT Tip:** Always check the boundary value! At $x = 3$ above, the $\\\\geq$ sign tells us to use the second piece.
      `
    },
    {
      id: 'sat-fn6-piecewise',
      type: 'text' as const,
      content: `
## Piecewise Functions — More Examples

**Example:** Evaluate at several points:

$$g(x) = \\\\begin{cases} -x + 4, & x \\\\leq 1 \\\\\\\\ 3, & 1 < x < 5 \\\\\\\\ 2x - 7, & x \\\\geq 5 \\\\end{cases}$$

| Input | Interval | Rule | Output |
|-------|----------|------|--------|
| $g(-2)$ | $-2 \\\\leq 1$ | $-(-2) + 4$ | $6$ |
| $g(1)$ | $1 \\\\leq 1$ | $-(1) + 4$ | $3$ |
| $g(3)$ | $1 < 3 < 5$ | constant $3$ | $3$ |
| $g(5)$ | $5 \\\\geq 5$ | $2(5) - 7$ | $3$ |
| $g(10)$ | $10 \\\\geq 5$ | $2(10) - 7$ | $13$ |

**Is $g$ continuous?** Check the boundaries:
- At $x = 1$: left piece gives $3$, middle piece approaches $3$ ✓
- At $x = 5$: middle piece is $3$, right piece gives $3$ ✓

Yes — the pieces "connect" without a jump.
      `
    },
    {
      id: 'sat-fn6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Piecewise Evaluation** 🔍

$$f(x) = \\\\begin{cases} x^2, & x < 0 \\\\\\\\ 2x + 1, & x \\\\geq 0 \\\\end{cases}$$
      `,
      exercise: {
        questions: [
          {
            question: 'What is $f(-3)$?',
            options: ['$-5$', '$9$', '$-9$', '$7$'],
            correctAnswer: 1,
            explanation: 'Since $-3 < 0$, use $x^2$: $f(-3) = (-3)^2 = 9$.'
          },
          {
            question: 'What is $f(0) + f(4)$?',
            options: ['$9$', '$10$', '$16$', '$17$'],
            correctAnswer: 1,
            explanation: '$f(0)$: Since $0 \\\\geq 0$, use $2x + 1$: $f(0) = 1$. $f(4)$: $2(4) + 1 = 9$. Sum: $1 + 9 = 10$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn6-absval',
      type: 'text' as const,
      content: `
## Absolute Value Equations

The absolute value $|x|$ gives the distance from zero, so it's always $\\\\geq 0$.

**Key rule:** $|A| = B$ means $A = B$ or $A = -B$ (only when $B \\\\geq 0$).

**Example 1:** Solve $|x - 3| = 7$.

$$x - 3 = 7 \\\\quad \\\\text{or} \\\\quad x - 3 = -7$$
$$x = 10 \\\\quad \\\\text{or} \\\\quad x = -4$$

---

**Example 2:** Solve $|2x + 1| = 5$.

$$2x + 1 = 5 \\\\quad \\\\text{or} \\\\quad 2x + 1 = -5$$
$$2x = 4 \\\\implies x = 2 \\\\quad \\\\text{or} \\\\quad 2x = -6 \\\\implies x = -3$$

---

**Example 3:** Solve $|x - 4| = -2$.

**No solution!** Absolute value is never negative.

---

**Absolute value as piecewise:** $|x| = \\\\begin{cases} x, & x \\\\geq 0 \\\\\\\\ -x, & x < 0 \\\\end{cases}$

The graph of $y = |x|$ is a V-shape with vertex at the origin.
      `
    },
    {
      id: 'sat-fn6-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Absolute Value Equations** 🧮

1) Solve $|x - 5| = 3$. What is the **larger** solution?
2) Solve $|2x + 4| = 10$. What is the **smaller** solution?
3) Solve $|x + 1| = 0$. What is $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '-7', '-1'],
        hint1: '$x - 5 = 3$ or $x - 5 = -3$. Find both and pick the larger.',
        hint2: '$2x + 4 = 10$ or $2x + 4 = -10$. Solve both.',
        hint3: '$|x + 1| = 0$ means $x + 1 = 0$ (only one case).',
        explanation: '$x = 8$ or $x = 2$, larger is 8. $2x = 6$ or $2x = -14$, so $x = 3$ or $x = -7$, smaller is $-7$. $|x+1| = 0 \\\\implies x = -1$.'
      }
    },
    {
      id: 'sat-fn6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Piecewise & Absolute Value** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$|x - 2| = 6$ has how many solutions?',
            options: ['0', '1', '2', 'Infinitely many']
          },
          {
            label: '$|x + 3| = -1$ has how many solutions?',
            options: ['0', '1', '2', 'Infinitely many']
          },
          {
            label: 'The vertex of $y = |x - 4| + 2$ is at',
            options: ['$(4, 2)$', '$(-4, 2)$', '$(4, -2)$', '$(2, 4)$']
          }
        ],
        correctAnswers: ['2', '0', '$(4, 2)$'],
        hint1: 'Two cases: $x - 2 = 6$ or $x - 2 = -6$.',
        hint2: 'Can absolute value equal a negative number?',
        hint3: '$|x - h| + k$ has vertex at $(h, k)$.',
        explanation: '$|x - 2| = 6$: two solutions ($x = 8, -4$). $|x + 3| = -1$: no solution (absolute value $\\\\geq 0$). $|x - 4| + 2$ has vertex at $(4, 2)$.'
      }
    },
    {
      id: 'sat-fn6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $|3x - 6| = 12$, what is the sum of all possible values of $x$?',
            options: ['$4$', '$2$', '$6$', '$8$'],
            correctAnswer: 0,
            explanation: '$3x - 6 = 12 \\\\implies x = 6$. $3x - 6 = -12 \\\\implies x = -2$. Sum: $6 + (-2) = 4$.'
          },
          {
            question: 'A piecewise function $f$ is defined as $f(x) = x + 3$ for $x < 2$ and $f(x) = 2x - 1$ for $x \\\\geq 2$. What is $f(f(1))$?',
            options: ['$5$', '$7$', '$9$', '$6$'],
            correctAnswer: 1,
            explanation: '$f(1)$: Since $1 < 2$, $f(1) = 1 + 3 = 4$. $f(4)$: Since $4 \\\\geq 2$, $f(4) = 2(4) - 1 = 7$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Key Formulas, Mixed SAT Problems, Strategy Tips**

Let's bring together everything from Parts 1–6. Here's your quick-reference sheet:

| Topic | Key Fact |
|-------|---------|
| **Notation** | $f(a)$ = plug $a$ into the rule for $f$ |
| **Domain** | Exclude values that cause ÷ 0 or $\\\\sqrt{\\\\text{neg}}$ |
| **Range** | Vertex $(h, k)$ of $a(x-h)^2+k$: min $k$ if $a>0$, max $k$ if $a<0$ |
| **Transformations** | $f(x-h)+k$ → right $h$, up $k$; $-f(x)$ reflects over $x$-axis |
| **Composition** | $f(g(x))$: apply $g$ first, then $f$ |
| **Inverse** | Swap $x,y$ and solve; $f(f^{-1}(x))=x$ |
| **Zeros** | Where $f(x) = 0$; $x$-axis crossings |
| **Piecewise** | Check which interval, use that rule |
| **Absolute value** | $|A| = B \\\\implies A = B$ or $A = -B$ |
      `
    },
    {
      id: 'sat-fn7-strat',
      type: 'text' as const,
      content: `
## SAT Strategy Tips

**1. Substitution is your best friend.** When a question says "find $f(g(2))$", just plug in step by step.

**2. Use answer choices.** If finding $f^{-1}(7)$ is hard algebraically, try each answer choice $c$ and see which gives $f(c) = 7$.

**3. Graph questions — read carefully:**
- "Where is $f(x) > 0$?" = where the graph is **above** the $x$-axis
- "Where is $f$ increasing?" = where the graph goes **uphill** left to right
- "What is the maximum of $f$?" = the **highest** $y$-value

**4. Transformation traps:**
- $f(x - 3)$ shifts **right** (not left!)
- $f(x) - 3$ shifts **down** (not up!)
- Don't confuse $2f(x)$ (stretch output) with $f(2x)$ (compress input)

**5. Absolute value = two cases.** Always split $|\\\\text{expr}| = k$ into two equations.
      `
    },
    {
      id: 'sat-fn7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 + 2x$ and $g(x) = x - 3$, what is $f(g(5))$?',
            options: ['$8$', '$12$', '$32$', '$35$'],
            correctAnswer: 0,
            explanation: '$g(5) = 5 - 3 = 2$. Then $f(2) = 4 + 4 = 8$.'
          },
          {
            question: 'The function $h(x) = \\\\frac{x + 1}{x^2 - 9}$ is undefined when $x =$',
            options: ['$-1$ only', '$3$ only', '$3$ and $-3$', '$-1, 3,$ and $-3$'],
            correctAnswer: 2,
            explanation: '$x^2 - 9 = 0 \\\\implies x^2 = 9 \\\\implies x = \\\\pm 3$. The numerator being zero ($x = -1$) doesn\\'t make the function undefined — it just means $h(-1) = 0$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ has a minimum at $(2, -5)$. The graph of $y = f(x - 3) + 1$ has a minimum at which point?',
            options: ['$(-1, -4)$', '$(5, -4)$', '$(5, -6)$', '$(-1, -6)$'],
            correctAnswer: 1,
            explanation: '$f(x - 3)$ shifts right 3: $x$-coordinate becomes $2 + 3 = 5$. The $+1$ shifts up 1: $y$-coordinate becomes $-5 + 1 = -4$. Minimum at $(5, -4)$.'
          },
          {
            question: 'If $f(x) = 2x + 6$, what is $f^{-1}(0)$?',
            options: ['$0$', '$3$', '$-3$', '$6$'],
            correctAnswer: 2,
            explanation: 'Solve $2x + 6 = 0 \\\\implies x = -3$. So $f(-3) = 0$, meaning $f^{-1}(0) = -3$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) If $f(x) = 3x - 1$ and $g(x) = x^2 + 2$, find $g(f(2))$.
2) Solve $|2x - 8| = 6$. Find the **product** of the two solutions.
3) The vertex of $y = -(x + 3)^2 + 7$ is at $(-3, k)$. What is $k$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['27', '7', '7'],
        hint1: '$f(2) = 3(2) - 1 = 5$. Then $g(5) = ?$.',
        hint2: '$2x - 8 = 6 \\\\implies x = 7$. $2x - 8 = -6 \\\\implies x = 1$. Multiply them.',
        hint3: 'In $-(x+3)^2 + 7$, the vertex is $(-3, 7)$.',
        explanation: '$f(2) = 5$, $g(5) = 25 + 2 = 27$. Solutions: $x = 7$ or $x = 1$; product $= 7$. Vertex: $(-3, 7)$, so $k = 7$.'
      }
    },
    {
      id: 'sat-fn7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify & Solve** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = \\\\frac{1}{\\\\sqrt{x - 1}}$ — domain is',
            options: ['$x > 0$', '$x > 1$', '$x \\\\geq 1$', '$x \\\\neq 1$']
          },
          {
            label: 'If $f(3) = 10$, then $f^{-1}(10) =$',
            options: ['$3$', '$10$', '$\\\\frac{1}{10}$', 'Cannot determine']
          },
          {
            label: '$g(x) = |x| + 2$ has range',
            options: ['$[0, \\\\infty)$', '$[2, \\\\infty)$', '$(-\\\\infty, 2]$', 'All reals']
          },
          {
            label: '$y = f(x) + 5$ shifts the graph',
            options: ['Right 5', 'Left 5', 'Up 5', 'Down 5']
          }
        ],
        correctAnswers: ['$x > 1$', '$3$', '$[2, \\\\infty)$', 'Up 5'],
        hint1: 'Need $x - 1 > 0$ (strict, because it\\'s in the denominator under a root).',
        hint2: 'By definition of inverse: if $f(a) = b$, then $f^{-1}(b) = a$.',
        hint3: '$|x| \\\\geq 0$, so $|x| + 2 \\\\geq 2$.',
        explanation: '$x - 1 > 0 \\\\implies x > 1$. $f(3) = 10 \\\\implies f^{-1}(10) = 3$. $|x| + 2 \\\\geq 2$, range $[2, \\\\infty)$. Adding 5 outside shifts up 5.'
      }
    },
    {
      id: 'sat-fn7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Level Mixed Problems** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = ax + b$ where $f(2) = 7$ and $f(5) = 16$, what is $f(0)$?',
            options: ['$1$', '$-1$', '$3$', '$0$'],
            correctAnswer: 0,
            explanation: 'From $f(2) = 7$: $2a + b = 7$. From $f(5) = 16$: $5a + b = 16$. Subtract: $3a = 9 \\\\implies a = 3$. Then $b = 7 - 6 = 1$. So $f(0) = 3(0) + 1 = 1$.'
          },
          {
            question: 'A piecewise function $f$ satisfies $f(x) = |x - 2| + |x + 1|$. What is $f(0)$?',
            options: ['$1$', '$3$', '$-1$', '$5$'],
            correctAnswer: 1,
            explanation: '$f(0) = |0 - 2| + |0 + 1| = |-2| + |1| = 2 + 1 = 3$.'
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
    print("Generating SAT Functions & Graphs lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
