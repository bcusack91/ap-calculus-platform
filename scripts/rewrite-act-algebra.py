#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT Algebra & Equations.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-algebra-equations-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-algebra-equations-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Solving Linear Equations ────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actAlgebraPart1Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg1-intro',
      type: 'text' as const,
      content: `
# 🔢 Solving Linear Equations

**Part 1 of 7 — One-Step, Two-Step, Multi-Step & Variables on Both Sides**

Linear equations are the backbone of ACT Algebra. You will see several on every test.

| Type | Example |
|------|---------|
| One-step | $x + 5 = 12$ |
| Two-step | $2x - 3 = 11$ |
| Multi-step | $3(x + 2) - 4 = 14$ |
| Variables both sides | $5x - 7 = 2x + 8$ |

**Golden Rule:** Whatever you do to one side, do to the other.
      `
    },
    {
      id: 'act-alg1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — One-step:** Solve $x - 9 = 4$.

$$x - 9 = 4 \\\\implies x = 13$$

**Example 2 — Two-step:** Solve $3x + 7 = 22$.

$$3x = 15 \\\\implies x = 5$$

**Example 3 — Multi-step:** Solve $2(x - 4) + 6 = 18$.

$$2x - 8 + 6 = 18 \\\\implies 2x - 2 = 18 \\\\implies 2x = 20 \\\\implies x = 10$$

**Example 4 — Variables on both sides:** Solve $7x - 3 = 4x + 12$.

$$3x = 15 \\\\implies x = 5$$

**ACT Tip:** Distribute first, combine like terms, then isolate $x$. Speed matters — practice until these steps are automatic.
      `
    },
    {
      id: 'act-alg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $4x - 5 = 19$',
            options: ['$x = 3$', '$x = 6$', '$x = 4.5$', '$x = 7$'],
            correctAnswer: 1,
            explanation: '$4x = 24 \\\\implies x = 6$.'
          },
          {
            question: 'Solve: $3(2x + 1) = 5x + 9$',
            options: ['$x = 2$', '$x = 6$', '$x = 3$', '$x = 8$'],
            correctAnswer: 1,
            explanation: '$6x + 3 = 5x + 9 \\\\implies x = 6$.'
          }
        ]
      }
    },
    {
      id: 'act-alg1-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for x** 🧮

1) $5x + 3 = 28$
2) $2(x - 6) = 10$
3) $9x - 4 = 5x + 16$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '11', '5'],
        hint1: '$5x = 25$.',
        hint2: '$2x - 12 = 10 \\\\implies 2x = 22$.',
        hint3: '$4x = 20$.',
        explanation: '1) $x = 5$. 2) $x = 11$. 3) $x = 5$. Each requires isolating $x$ using inverse operations.'
      }
    },
    {
      id: 'act-alg1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the First Step** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $3(x + 4) = 21$, you should first …',
            options: ['Subtract 4', 'Divide by 3', 'Distribute the 3', 'Add 3']
          },
          {
            label: 'For $8x - 2 = 30$, you should first …',
            options: ['Divide by 8', 'Subtract 2', 'Add 2', 'Multiply by 8']
          },
          {
            label: 'For $6x + 1 = 4x + 9$, you should first …',
            options: ['Add 1 to both sides', 'Subtract 4x from both sides', 'Divide by 6', 'Subtract 9']
          }
        ],
        correctAnswers: ['Distribute the 3', 'Add 2', 'Subtract 4x from both sides'],
        hint1: 'The parentheses need to be removed first.',
        hint2: 'Move the constant term away from the variable term.',
        hint3: 'Collect variables on one side before isolating.',
        explanation: 'Distribute before combining; add/subtract constants to isolate the variable term; collect variable terms on one side when variables appear on both sides.'
      }
    },
    {
      id: 'act-alg1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

On the ACT you have roughly **1 minute per question**. Try solving these without writing every step.

| # | Problem | Answer |
|---|---------|--------|
| 1 | $\\\\frac{x}{3} + 4 = 9$ | $x = 15$ |
| 2 | $-2(x - 5) = 3x + 20$ | $x = -2$ |
| 3 | $\\\\frac{2x + 1}{5} = 3$ | $x = 7$ |

**ACT Tip:** When fractions appear, multiply every term by the LCD first — it clears the fractions instantly.
      `
    },
    {
      id: 'act-alg1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\frac{x}{4} - 3 = 5$, what is the value of $x$?',
            options: ['$8$', '$32$', '$20$', '$2$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{x}{4} = 8 \\\\implies x = 32$.'
          },
          {
            question: 'If $5(x - 2) - 3x = 14$, what is $x$?',
            options: ['$6$', '$12$', '$8$', '$24$'],
            correctAnswer: 1,
            explanation: '$5x - 10 - 3x = 14 \\\\implies 2x = 24 \\\\implies x = 12$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Systems of Equations ────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actAlgebraPart2Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg2-intro',
      type: 'text' as const,
      content: `
# 📐 Systems of Equations

**Part 2 of 7 — Substitution, Elimination & Word Problems**

A **system of equations** is two (or more) equations with the same unknowns.

| Method | Best When |
|--------|-----------|
| Substitution | One variable is already isolated |
| Elimination | Coefficients are easy to match or cancel |

**Goal:** Find the $(x, y)$ pair that satisfies *both* equations simultaneously.
      `
    },
    {
      id: 'act-alg2-worked',
      type: 'text' as const,
      content: `
## Substitution — Worked Example

Solve:
$$y = 2x + 1$$
$$3x + y = 16$$

Substitute $y = 2x + 1$ into the second equation:

$$3x + (2x + 1) = 16 \\\\implies 5x + 1 = 16 \\\\implies x = 3$$

Back-substitute: $y = 2(3) + 1 = 7$.

**Solution:** $(3,\\\\, 7)$

---

## Elimination — Worked Example

Solve:
$$2x + 3y = 12$$
$$4x - 3y = 6$$

Add the two equations:

$$6x = 18 \\\\implies x = 3$$

Substitute back: $2(3) + 3y = 12 \\\\implies y = 2$.

**Solution:** $(3,\\\\, 2)$

**ACT Tip:** If the ACT asks only for $x$ or only for $y$, elimination is usually faster — you can skip the back-substitution step entirely.
      `
    },
    {
      id: 'act-alg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Systems Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $x + y = 10$ and $x - y = 4$. What is $x$?',
            options: ['$3$', '$7$', '$5$', '$8$'],
            correctAnswer: 1,
            explanation: 'Add the equations: $2x = 14 \\\\implies x = 7$.'
          },
          {
            question: 'Solve: $y = 3x$ and $2x + y = 15$. What is $y$?',
            options: ['$3$', '$9$', '$12$', '$15$'],
            correctAnswer: 1,
            explanation: 'Substitute: $2x + 3x = 15 \\\\implies 5x = 15 \\\\implies x = 3$, so $y = 9$.'
          }
        ]
      }
    },
    {
      id: 'act-alg2-input1',
      type: 'input-boxes' as const,
      content: `
**Find the Values** 🧮

System: $3x + 2y = 19$ and $x - 2y = -3$.

1) What is $x$?
2) What is $y$?
3) What is $x + y$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3.5', '7.5'],
        hint1: 'Add the two equations to eliminate $y$: $4x = 16$.',
        hint2: 'Substitute $x = 4$ back: $3(4) + 2y = 19 \\\\implies 2y = 7$.',
        hint3: 'Simply add your values of $x$ and $y$.',
        explanation: 'Adding the equations gives $4x = 16$, so $x = 4$. Then $2y = 7$, so $y = 3.5$. Thus $x + y = 7.5$.'
      }
    },
    {
      id: 'act-alg2-word',
      type: 'text' as const,
      content: `
## Word Problems → Systems

**Example:** A store sells pencils for \\\\$0.50 and pens for \\\\$1.25. Maria buys 14 items for \\\\$11.00. How many of each?

Let $p$ = pencils, $n$ = pens.

$$p + n = 14$$
$$0.50p + 1.25n = 11$$

Multiply the second equation by 4: $2p + 5n = 44$.

From the first: $p = 14 - n$ → substitute:

$$2(14 - n) + 5n = 44 \\\\implies 28 - 2n + 5n = 44 \\\\implies 3n = 16$$

Hmm — let's try \\\\$0.50 and \\\\$1.00:

$$0.50p + 1.00n = 11 \\\\implies p + 2n = 22$$

Subtract from $p + n = 14$: $n = 8$, $p = 6$. ✓

**ACT Tip:** On the ACT, back-solve from the answer choices when the algebra gets messy — it's often faster.
      `
    },
    {
      id: 'act-alg2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Method Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = 5x - 1$ and $2x + 3y = 20$ → best method?',
            options: ['Substitution', 'Elimination', 'Graphing', 'Guessing']
          },
          {
            label: '$3x + 4y = 10$ and $3x - 4y = 2$ → best method?',
            options: ['Substitution', 'Elimination', 'Graphing', 'Guessing']
          },
          {
            label: 'When the ACT gives integer answer choices for a system, a good backup strategy is …',
            options: ['Graphing', 'Cramer\\'s rule', 'Back-solving from answer choices', 'Dimensional analysis']
          }
        ],
        correctAnswers: ['Substitution', 'Elimination', 'Back-solving from answer choices'],
        hint1: 'One variable is already isolated — just plug it in.',
        hint2: 'The $y$-coefficients are equal and opposite — adding cancels $y$.',
        hint3: 'Plugging answer choices into both equations is a reliable ACT strategy.',
        explanation: 'Use substitution when a variable is isolated; elimination when coefficients align. Back-solving is a powerful ACT shortcut for multiple-choice systems.'
      }
    },
    {
      id: 'act-alg2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Two numbers have a sum of 20 and a difference of 6. What is the larger number?',
            options: ['$10$', '$13$', '$14$', '$7$'],
            correctAnswer: 1,
            explanation: '$x + y = 20$ and $x - y = 6$. Adding: $2x = 26 \\\\implies x = 13$.'
          },
          {
            question: 'If $2x + y = 11$ and $x + 2y = 13$, what is $x + y$?',
            options: ['$6$', '$8$', '$12$', '$24$'],
            correctAnswer: 1,
            explanation: 'Add both equations: $3x + 3y = 24 \\\\implies x + y = 8$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Inequalities ───────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actAlgebraPart3Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Inequalities

**Part 3 of 7 — Solving, Graphing, Compound & Absolute Value Inequalities**

Inequalities work like equations with one critical rule:

> **Flip the inequality sign when you multiply or divide by a negative number.**

| Symbol | Meaning |
|--------|---------|
| $<$ | less than |
| $\\\\leq$ | less than or equal to |
| $>$ | greater than |
| $\\\\geq$ | greater than or equal to |
      `
    },
    {
      id: 'act-alg3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Basic inequality:** Solve $3x - 7 > 8$.

$$3x > 15 \\\\implies x > 5$$

**Example 2 — Negative coefficient:** Solve $-2x + 4 \\\\leq 10$.

$$-2x \\\\leq 6 \\\\implies x \\\\geq -3$$

Notice the inequality **flipped** when we divided by $-2$.

**Example 3 — Compound inequality:** Solve $-1 < 2x + 3 \\\\leq 11$.

$$-4 < 2x \\\\leq 8 \\\\implies -2 < x \\\\leq 4$$

**Example 4 — Absolute value inequality:** Solve $|x - 5| < 3$.

$$-3 < x - 5 < 3 \\\\implies 2 < x < 8$$

**ACT Tip:** $|A| < k$ means $-k < A < k$ (AND). $|A| > k$ means $A < -k$ OR $A > k$.
      `
    },
    {
      id: 'act-alg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Inequality Skills** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $-4x + 3 > 19$',
            options: ['$x > -4$', '$x < -4$', '$x > 4$', '$x < 4$'],
            correctAnswer: 1,
            explanation: '$-4x > 16 \\\\implies x < -4$ (flip when dividing by $-4$).'
          },
          {
            question: 'Which interval satisfies $|x + 2| \\\\leq 5$?',
            options: ['$[-7, 3]$', '$(-7, 3)$', '$[-3, 7]$', '$(-3, 7)$'],
            correctAnswer: 0,
            explanation: '$-5 \\\\leq x + 2 \\\\leq 5 \\\\implies -7 \\\\leq x \\\\leq 3$, which is $[-7, 3]$.'
          }
        ]
      }
    },
    {
      id: 'act-alg3-input1',
      type: 'input-boxes' as const,
      content: `
**Solve the Inequality** 🧮

Give the boundary value (the number $x$ is compared to).

1) $5x + 2 > 27$ → $x > \\\\text{?}$
2) $-3x \\\\geq 12$ → $x \\\\leq \\\\text{?}$
3) $|x - 1| < 4$ → lower bound of $x$ is?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-4', '-3'],
        hint1: '$5x > 25$.',
        hint2: 'Divide by $-3$ and flip: $x \\\\leq -4$.',
        hint3: '$-4 < x - 1 < 4 \\\\implies -3 < x < 5$.',
        explanation: '1) $x > 5$. 2) $x \\\\leq -4$ (don\\'t forget to flip!). 3) Lower bound is $-3$ from $|x-1| < 4$.'
      }
    },
    {
      id: 'act-alg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Inequality Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you divide both sides by a negative, you must …',
            options: ['Keep the sign', 'Flip the inequality sign', 'Remove the inequality', 'Square both sides']
          },
          {
            label: '$|x| < 5$ is equivalent to …',
            options: ['$x < 5$', '$-5 < x < 5$', '$x > -5$', '$x < -5$ or $x > 5$']
          },
          {
            label: '$|x| > 3$ is equivalent to …',
            options: ['$-3 < x < 3$', '$x > 3$', '$x < -3$ or $x > 3$', '$x \\\\geq -3$']
          }
        ],
        correctAnswers: ['Flip the inequality sign', '-5 < x < 5', 'x < -3 or x > 3'],
        hint1: 'Multiplying or dividing by a negative reverses the direction.',
        hint2: '$|x| < k$ means x is within $k$ units of 0.',
        hint3: '$|x| > k$ means x is more than $k$ units from 0 — two separate regions.',
        explanation: 'Flip when multiplying/dividing by negatives. "Less than" absolute value → AND (between). "Greater than" absolute value → OR (outside).'
      }
    },
    {
      id: 'act-alg3-compound',
      type: 'text' as const,
      content: `
## Graphing Inequalities — Number Line Summary

| Inequality | Graph |
|-----------|-------|
| $x > 3$ | Open circle at 3, arrow right → |
| $x \\\\leq -2$ | Closed circle at $-2$, arrow left ← |
| $1 < x \\\\leq 5$ | Open at 1, closed at 5, shade between |
| $x < -1$ or $x > 4$ | Two regions, open circles |

**ACT Tip:** Open circle = strict ($<, >$). Closed circle = inclusive ($\\\\leq, \\\\geq$).
      `
    },
    {
      id: 'act-alg3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $-3 \\\\leq 2x + 1 < 9$, which values can $x$ take?',
            options: ['$-2 \\\\leq x < 4$', '$-1 \\\\leq x < 5$', '$-2 < x \\\\leq 4$', '$-1 < x \\\\leq 4$'],
            correctAnswer: 0,
            explanation: 'Subtract 1: $-4 \\\\leq 2x < 8$. Divide by 2: $-2 \\\\leq x < 4$.'
          },
          {
            question: 'How many integers satisfy $|x - 3| \\\\leq 4$?',
            options: ['$7$', '$9$', '$8$', '$5$'],
            correctAnswer: 1,
            explanation: '$-1 \\\\leq x \\\\leq 7$. Integers: $-1, 0, 1, 2, 3, 4, 5, 6, 7$ → 9 values.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Linear Word Problems ───────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actAlgebraPart4Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg4-intro',
      type: 'text' as const,
      content: `
# 📝 Linear Word Problems

**Part 4 of 7 — Translating Words to Equations, Rate/Distance/Time & Mixtures**

The hardest part of word problems is **translation** — turning English into algebra.

| Phrase | Operation |
|--------|-----------|
| "sum of" / "more than" | $+$ |
| "difference" / "less than" | $-$ |
| "product of" / "times" | $\\\\times$ |
| "quotient" / "per" | $\\\\div$ |
| "is" / "equals" | $=$ |

**ACT Tip:** Underline what they're asking for *before* you set up the equation.
      `
    },
    {
      id: 'act-alg4-rate',
      type: 'text' as const,
      content: `
## Rate × Time = Distance

The classic formula: $d = rt$.

**Example 1:** A car travels at 55 mph for 3 hours. Distance?

$$d = 55 \\\\times 3 = 165 \\\\text{ miles}$$

**Example 2:** Two trains leave the same station in opposite directions. Train A travels at 60 mph and Train B at 80 mph. After how many hours are they 420 miles apart?

$$60t + 80t = 420 \\\\implies 140t = 420 \\\\implies t = 3 \\\\text{ hours}$$

**Example 3:** You drive to work at 30 mph and return at 50 mph. The total trip is 40 miles each way. What is your average speed for the round trip?

Time there: $\\\\frac{40}{30} = \\\\frac{4}{3}$ hr. Time back: $\\\\frac{40}{50} = \\\\frac{4}{5}$ hr.

$$\\\\text{Avg speed} = \\\\frac{\\\\text{total distance}}{\\\\text{total time}} = \\\\frac{80}{\\\\frac{4}{3} + \\\\frac{4}{5}} = \\\\frac{80}{\\\\frac{32}{15}} = \\\\frac{80 \\\\times 15}{32} = 37.5 \\\\text{ mph}$$

**ACT Tip:** Average speed is NOT the average of the two speeds. Use total distance ÷ total time.
      `
    },
    {
      id: 'act-alg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Translation Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Five more than twice a number is 23." Which equation?',
            options: ['$5 + x = 23$', '$2x + 5 = 23$', '$5(2 + x) = 23$', '$2(x + 5) = 23$'],
            correctAnswer: 1,
            explanation: '"Twice a number" = $2x$. "Five more than that" = $2x + 5$.'
          },
          {
            question: 'A runner covers 12 miles in 1.5 hours. What is the speed in mph?',
            options: ['$6$', '$8$', '$10$', '$18$'],
            correctAnswer: 1,
            explanation: '$r = d / t = 12 / 1.5 = 8$ mph.'
          }
        ]
      }
    },
    {
      id: 'act-alg4-input1',
      type: 'input-boxes' as const,
      content: `
**Word Problem Workout** 🧮

1) The sum of three consecutive integers is 48. What is the smallest?
2) A cyclist travels at 15 mph for $t$ hours covering 60 miles. What is $t$?
3) A phone plan charges \\\\$25/month plus \\\\$0.10 per text. If the bill is \\\\$40, how many texts were sent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '4', '150'],
        hint1: 'Let the integers be $n, n+1, n+2$. Then $3n + 3 = 48$.',
        hint2: '$d = rt \\\\implies 60 = 15t$.',
        hint3: '$25 + 0.10t = 40 \\\\implies 0.10t = 15$.',
        explanation: '1) $n = 15$ (integers are 15, 16, 17). 2) $t = 4$ hours. 3) 150 texts.'
      }
    },
    {
      id: 'act-alg4-mixture',
      type: 'text' as const,
      content: `
## Mixture Problems

**Example:** A chemist mixes a 40% acid solution with a 70% acid solution to get 12 liters of 50% acid. How many liters of each?

Let $x$ = liters of 40%, so $12 - x$ = liters of 70%.

$$0.40x + 0.70(12 - x) = 0.50(12)$$

$$0.40x + 8.4 - 0.70x = 6$$

$$-0.30x = -2.4 \\\\implies x = 8$$

**Answer:** 8 liters of 40% and 4 liters of 70%.

**ACT Tip:** For mixture problems, set up: (amount₁)(concentration₁) + (amount₂)(concentration₂) = (total)(target concentration).
      `
    },
    {
      id: 'act-alg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match the Formula** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Distance equals …',
            options: ['rate + time', 'rate × time', 'rate ÷ time', 'rate − time']
          },
          {
            label: 'Average speed for a round trip uses …',
            options: ['Average of the two speeds', 'Total distance ÷ total time', 'Faster speed only', 'Sum of speeds']
          },
          {
            label: 'In a mixture problem, you set up …',
            options: ['amount₁ + amount₂ = target', 'concentration₁ × concentration₂ = target', 'amount × concentration for each part = total amount × target %', 'rate × time = distance']
          }
        ],
        correctAnswers: ['rate × time', 'Total distance ÷ total time', 'amount × concentration for each part = total amount × target %'],
        hint1: '$d = rt$ is the fundamental relationship.',
        hint2: 'Average speed is never just the arithmetic mean of two speeds.',
        hint3: 'Each component contributes (its volume)(its concentration) to the total.',
        explanation: 'Distance = rate × time. Average speed = total distance ÷ total time. Mixtures: sum of (amount × concentration) for each part equals the total mixture\\'s (amount × concentration).'
      }
    },
    {
      id: 'act-alg4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store sells notebooks for \\\\$3 each and binders for \\\\$5 each. Tanya buys 11 items for \\\\$41. How many notebooks did she buy?',
            options: ['$4$', '$7$', '$5$', '$6$'],
            correctAnswer: 1,
            explanation: '$3n + 5(11 - n) = 41 \\\\implies 3n + 55 - 5n = 41 \\\\implies -2n = -14 \\\\implies n = 7$.'
          },
          {
            question: 'Two cars start from the same point. Car A goes north at 45 mph, Car B goes east at 60 mph. After 2 hours, how far apart are they?',
            options: ['$150$ mi', '$210$ mi', '$75$ mi', '$105$ mi'],
            correctAnswer: 0,
            explanation: 'North: $90$ mi. East: $120$ mi. Distance $= \\\\sqrt{90^2 + 120^2} = \\\\sqrt{8100 + 14400} = \\\\sqrt{22500} = 150$ mi.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Absolute Value Equations ────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actAlgebraPart5Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg5-intro',
      type: 'text' as const,
      content: `
# 📏 Absolute Value Equations

**Part 5 of 7 — Solving $|x - a| = b$, Two Cases & Extraneous Solutions**

The absolute value $|A|$ is the distance from $A$ to 0 on the number line. Because distance is always non-negative:

$$|A| = b \\\\implies A = b \\\\quad \\\\text{or} \\\\quad A = -b \\\\qquad (b \\\\geq 0)$$

If $b < 0$, there is **no solution** — absolute value can never be negative.

**Key Insight:** Always isolate the absolute value expression *first*, then split into two cases.
      `
    },
    {
      id: 'act-alg5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Solve $|x - 3| = 7$.

Case 1: $x - 3 = 7 \\\\implies x = 10$

Case 2: $x - 3 = -7 \\\\implies x = -4$

**Solutions:** $x = 10$ or $x = -4$

---

**Example 2:** Solve $|2x + 1| + 5 = 12$.

First isolate: $|2x + 1| = 7$.

Case 1: $2x + 1 = 7 \\\\implies x = 3$

Case 2: $2x + 1 = -7 \\\\implies x = -4$

---

**Example 3 — No solution:** Solve $|x + 4| = -2$.

No solution! Absolute value cannot equal a negative number.

---

**Example 4 — Extraneous solutions:** Solve $|3x - 6| = x + 2$.

Case 1: $3x - 6 = x + 2 \\\\implies 2x = 8 \\\\implies x = 4$

Check: $|12 - 6| = 6$ and $4 + 2 = 6$. ✓

Case 2: $3x - 6 = -(x + 2) \\\\implies 3x - 6 = -x - 2 \\\\implies 4x = 4 \\\\implies x = 1$

Check: $|3 - 6| = 3$ and $1 + 2 = 3$. ✓

Both valid! But always check — sometimes one case is extraneous.

**ACT Tip:** When the other side contains a variable, you **must** check both solutions in the original equation.
      `
    },
    {
      id: 'act-alg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Absolute Value Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions does $|x + 5| = -3$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'Absolute value is never negative, so there are 0 solutions.'
          },
          {
            question: 'Solve $|2x - 8| = 6$. What is the sum of the solutions?',
            options: ['$4$', '$8$', '$6$', '$12$'],
            correctAnswer: 1,
            explanation: 'Case 1: $2x - 8 = 6 \\\\implies x = 7$. Case 2: $2x - 8 = -6 \\\\implies x = 1$. Sum $= 7 + 1 = 8$.'
          }
        ]
      }
    },
    {
      id: 'act-alg5-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for x** 🧮

For each, give the LARGER solution.

1) $|x - 4| = 9$
2) $|3x + 6| = 12$
3) $|x| + 3 = 10$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '2', '7'],
        hint1: '$x - 4 = 9$ or $x - 4 = -9$. The larger one is …',
        hint2: '$3x + 6 = 12 \\\\implies x = 2$ or $3x + 6 = -12 \\\\implies x = -6$.',
        hint3: 'Isolate first: $|x| = 7$, so $x = 7$ or $x = -7$.',
        explanation: '1) $x = 13$ or $x = -5$; larger is 13. 2) $x = 2$ or $x = -6$; larger is 2. 3) $x = 7$ or $x = -7$; larger is 7.'
      }
    },
    {
      id: 'act-alg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Absolute Value Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$|A| = b$ (with $b > 0$) has how many cases?',
            options: ['1', '2', '3', 'Depends on A']
          },
          {
            label: 'An extraneous solution occurs when …',
            options: ['Both cases give the same answer', 'A solution fails the check in the original equation', 'There is no solution', 'The equation has fractions']
          },
          {
            label: 'The first step in solving $|2x + 3| - 5 = 8$ is …',
            options: ['Split into two cases', 'Add 5 to both sides', 'Subtract 3', 'Square both sides']
          }
        ],
        correctAnswers: ['2', 'A solution fails the check in the original equation', 'Add 5 to both sides'],
        hint1: 'The expression inside can be positive or negative.',
        hint2: 'Extraneous means it satisfies the derived equation but not the original.',
        hint3: 'You must isolate $|\\\\cdots|$ before splitting into cases.',
        explanation: 'Two cases (positive and negative). Extraneous solutions don\\'t satisfy the original equation. Always isolate the absolute value first.'
      }
    },
    {
      id: 'act-alg5-extraneous',
      type: 'text' as const,
      content: `
## Spotting Extraneous Solutions

Extraneous solutions most commonly appear when the right side contains a variable:

$$|3x - 1| = 2x + 5$$

Case 1: $3x - 1 = 2x + 5 \\\\implies x = 6$ → Check: $|17| = 17$ ✓

Case 2: $3x - 1 = -(2x + 5) \\\\implies 5x = -4 \\\\implies x = -\\\\frac{4}{5}$

Check: $|3(-0.8) - 1| = |-3.4| = 3.4$ vs. $2(-0.8) + 5 = 3.4$ ✓

Both work here, but consider $|x - 2| = 3x + 4$:

Case 2 gives $x - 2 = -3x - 4 \\\\implies 4x = -2 \\\\implies x = -0.5$

Check: $|-0.5 - 2| = 2.5$ but $3(-0.5) + 4 = 2.5$ ✓ — valid!

**ACT Tip:** If you only have time, solve Case 1 and check the answer choices — it's usually correct. Use Case 2 only if needed.
      `
    },
    {
      id: 'act-alg5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $|4x - 12| = 0$, what is $x$?',
            options: ['$0$', '$3$', '$-3$', '$12$'],
            correctAnswer: 1,
            explanation: '$|4x - 12| = 0 \\\\implies 4x - 12 = 0 \\\\implies x = 3$. When the absolute value equals 0, there is exactly one solution.'
          },
          {
            question: 'The solutions of $|x - 5| = 2x - 7$ are:',
            options: ['$x = 4$ only', '$x = 4$ and $x = \\\\frac{2}{3}$', '$x = 12$ and $x = 4$', '$x = 4$ and $x = -4$'],
            correctAnswer: 0,
            explanation: 'Case 1: $x - 5 = 2x - 7 \\\\implies x = 2$. Check: $|2-5|=3$ but $2(2)-7=-3$. ✗ Extraneous! Case 2: $x-5 = -(2x-7) \\\\implies 3x = 12 \\\\implies x = 4$. Check: $|4-5|=1$ and $2(4)-7=1$. ✓'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Algebraic Manipulation ─────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actAlgebraPart6Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg6-intro',
      type: 'text' as const,
      content: `
# 🔧 Algebraic Manipulation

**Part 6 of 7 — Factoring, Distributing, Combining Like Terms & Special Products**

Strong algebraic manipulation skills save time on **every** section of the ACT Math. These are the building blocks.

| Skill | Example |
|-------|---------|
| Distribute | $3(x + 4) = 3x + 12$ |
| Combine like terms | $5x + 2x - 3 = 7x - 3$ |
| Factor GCF | $6x^2 + 9x = 3x(2x + 3)$ |
| Factor trinomial | $x^2 + 5x + 6 = (x + 2)(x + 3)$ |
      `
    },
    {
      id: 'act-alg6-special',
      type: 'text' as const,
      content: `
## Special Products — Memorise These!

| Name | Formula |
|------|---------|
| Difference of squares | $a^2 - b^2 = (a + b)(a - b)$ |
| Perfect square (sum) | $a^2 + 2ab + b^2 = (a + b)^2$ |
| Perfect square (diff) | $a^2 - 2ab + b^2 = (a - b)^2$ |

**Example 1:** Factor $x^2 - 49$.

$$x^2 - 49 = (x + 7)(x - 7)$$

**Example 2:** Factor $4x^2 - 12x + 9$.

$$4x^2 - 12x + 9 = (2x)^2 - 2(2x)(3) + 3^2 = (2x - 3)^2$$

**Example 3:** Simplify $\\\\frac{x^2 - 9}{x + 3}$.

$$\\\\frac{(x+3)(x-3)}{x+3} = x - 3 \\\\quad (x \\\\neq -3)$$

**ACT Tip:** Difference of squares appears *constantly* on the ACT. Be ready to recognize it instantly.
      `
    },
    {
      id: 'act-alg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factoring Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Factor: $x^2 - 8x + 16$',
            options: ['$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)(x - 2)$', '$(x - 16)(x - 1)$'],
            correctAnswer: 0,
            explanation: '$x^2 - 8x + 16 = (x - 4)^2$ — a perfect square trinomial.'
          },
          {
            question: 'Simplify: $\\\\frac{x^2 - 25}{x - 5}$',
            options: ['$x - 5$', '$x + 5$', '$x^2 - 5$', '$25$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{(x+5)(x-5)}{x-5} = x + 5$.'
          }
        ]
      }
    },
    {
      id: 'act-alg6-input1',
      type: 'input-boxes' as const,
      content: `
**Simplify** 🧮

Give the numerical result.

1) Expand and simplify: $(x + 3)(x - 3)$ when $x = 5$. Answer?
2) If $x^2 + 6x + 9 = (x + a)^2$, what is $a$?
3) $2(3x + 4) - (x - 2) = ?x + ?$ — what is the coefficient of $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '3', '5'],
        hint1: '$(5+3)(5-3) = 8 \\\\times 2$. Or use difference of squares: $25 - 9$.',
        hint2: '$x^2 + 6x + 9 = (x + 3)^2$. What\\'s the number being squared?',
        hint3: '$6x + 8 - x + 2 = 5x + 10$.',
        explanation: '1) $25 - 9 = 16$. 2) $a = 3$ since $(x+3)^2 = x^2 + 6x + 9$. 3) $2(3x+4) - (x-2) = 5x + 10$, coefficient is 5.'
      }
    },
    {
      id: 'act-alg6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the Technique** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 64$ is best factored using …',
            options: ['GCF', 'Difference of squares', 'Grouping', 'Quadratic formula']
          },
          {
            label: '$6x^3 + 9x^2$ is best factored using …',
            options: ['Difference of squares', 'GCF', 'Perfect square', 'AC method']
          },
          {
            label: 'To simplify $\\\\frac{x^2 + 3x}{x}$, you should …',
            options: ['Cross-multiply', 'Cancel the $x$ from numerator and denominator', 'Square both sides', 'Set equal to zero']
          }
        ],
        correctAnswers: ['Difference of squares', 'GCF', 'Cancel the $x$ from numerator and denominator'],
        hint1: 'Two perfect squares separated by subtraction.',
        hint2: 'Both terms share a common factor of $3x^2$.',
        hint3: '$\\\\frac{x(x+3)}{x} = x + 3$ for $x \\\\neq 0$.',
        explanation: 'Difference of squares for $a^2 - b^2$. GCF when all terms share a common factor. Cancel common factors from rational expressions.'
      }
    },
    {
      id: 'act-alg6-distribute',
      type: 'text' as const,
      content: `
## Distribution & Combining Like Terms — Practice Table

| Expression | Simplified |
|-----------|-----------|
| $4(2x - 5) + 3x$ | $11x - 20$ |
| $-(x^2 - 3x + 1)$ | $-x^2 + 3x - 1$ |
| $(2x + 1)(x - 3)$ | $2x^2 - 5x - 3$ |
| $3x^2 + 7x - 2x^2 + x$ | $x^2 + 8x$ |

**ACT Tip:** Don't skip sign distribution — the most common algebra mistake on the ACT is dropping a negative sign when distributing.
      `
    },
    {
      id: 'act-alg6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression is equivalent to $(3x - 2)^2$?',
            options: ['$9x^2 - 4$', '$9x^2 - 6x + 4$', '$9x^2 - 12x + 4$', '$9x^2 + 12x + 4$'],
            correctAnswer: 2,
            explanation: '$(3x-2)^2 = 9x^2 - 2(3x)(2) + 4 = 9x^2 - 12x + 4$.'
          },
          {
            question: 'If $x^2 - y^2 = 40$ and $x + y = 8$, what is $x - y$?',
            options: ['$4$', '$5$', '$8$', '$32$'],
            correctAnswer: 1,
            explanation: '$x^2 - y^2 = (x+y)(x-y) = 8(x-y) = 40 \\\\implies x - y = 5$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const actAlgebraPart7Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-alg7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed ACT-Style Problems & Time Strategy**

This final part pulls together everything from Parts 1–6.

## Quick-Reference Cheat Sheet

| Topic | Key Formula / Rule |
|-------|--------------------|
| Linear equations | Isolate $x$: inverse operations |
| Systems | Substitution or elimination |
| Inequalities | Flip sign when × or ÷ by negative |
| Absolute value | $|A|=b \\\\implies A = b$ or $A = -b$ |
| Factoring | $a^2 - b^2 = (a+b)(a-b)$ |
| $d = rt$ | Distance = rate × time |
| Mixtures | $\\\\sum (\\\\text{amount}_i \\\\times \\\\text{conc}_i) = \\\\text{total} \\\\times \\\\text{target}$ |
      `
    },
    {
      id: 'act-alg7-strategy',
      type: 'text' as const,
      content: `
## ACT Math Time Strategy

You have **60 minutes for 60 questions** — exactly 1 minute per question.

| Question # | Difficulty | Strategy |
|-----------|-----------|----------|
| 1–20 | Easy | Solve directly, aim for < 30 sec each |
| 21–40 | Medium | Most algebra questions fall here |
| 41–60 | Hard | Skip & return if stuck > 90 sec |

**Top 5 Algebra Speed Tips:**

1. **Back-solve** from answer choices on tough questions
2. **Plug in numbers** when variables make things abstract
3. **Eliminate obviously wrong answers** first
4. **Memorise special products** — never FOIL $a^2 - b^2$
5. **Clear fractions immediately** by multiplying by the LCD
      `
    },
    {
      id: 'act-alg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\frac{3x-1}{2} = 7$, what is $x$?',
            options: ['$3$', '$5$', '$\\\\frac{15}{3}$', '$\\\\frac{13}{3}$'],
            correctAnswer: 1,
            explanation: '$3x - 1 = 14 \\\\implies 3x = 15 \\\\implies x = 5$.'
          },
          {
            question: 'If $|2x - 10| = 4$, what is the product of the two solutions?',
            options: ['$21$', '$20$', '$18$', '$24$'],
            correctAnswer: 0,
            explanation: '$2x - 10 = 4 \\\\implies x = 7$. $2x - 10 = -4 \\\\implies x = 3$. Product $= 7 \\\\times 3 = 21$.'
          }
        ]
      }
    },
    {
      id: 'act-alg7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Skills** 🧮

1) Solve: $4(x - 3) = 2(x + 5)$. What is $x$?
2) Factor: $x^2 - 16 = (x + a)(x - a)$. What is $a$?
3) System: $x + y = 9$ and $x - y = 3$. What is $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11', '4', '6'],
        hint1: '$4x - 12 = 2x + 10 \\\\implies 2x = 22$.',
        hint2: '$16 = 4^2$, so difference of squares gives $a = 4$.',
        hint3: 'Add the equations: $2x = 12$.',
        explanation: '1) $x = 11$. 2) $a = 4$ (difference of squares). 3) $x = 6$ (elimination by adding).'
      }
    },
    {
      id: 'act-alg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You\\'re on question 52 and stuck after 45 seconds. You should …',
            options: ['Keep working — you\\'ll get it', 'Skip it and come back', 'Guess randomly', 'Erase all work and start over']
          },
          {
            label: 'The fastest way to solve a system when one variable is isolated is …',
            options: ['Graphing', 'Elimination', 'Substitution', 'Cramer\\'s rule']
          },
          {
            label: 'When you see $x^2 - 25$ in a denominator, you should immediately think …',
            options: ['Quadratic formula', 'Completing the square', 'Difference of squares', 'Long division']
          }
        ],
        correctAnswers: ['Skip it and come back', 'Substitution', 'Difference of squares'],
        hint1: 'Hard questions at the end are worth the same as easy ones at the beginning.',
        hint2: 'If $y = \\\\ldots$ is given, just plug it in.',
        hint3: '$x^2 - 25 = (x+5)(x-5)$ — a pattern you should recognize instantly.',
        explanation: 'Time management is crucial: skip and return. Use substitution when a variable is isolated. Difference of squares is one of the most tested patterns.'
      }
    },
    {
      id: 'act-alg7-mixed',
      type: 'text' as const,
      content: `
## Final Mixed Problems

Try these under timed conditions — **6 minutes for 6 questions**.

| # | Problem | Answer |
|---|---------|--------|
| 1 | Solve $5x - 3(x + 2) = 8$ | $x = 7$ |
| 2 | Solve the system: $2x + y = 7$, $x - y = 2$ | $(3,\\\\, 1)$ |
| 3 | Solve $|x + 3| = 2x - 1$ | $x = 4$ only |
| 4 | Factor $2x^2 - 8$ completely | $2(x+2)(x-2)$ |
| 5 | A train at 80 mph and a car at 60 mph leave at the same time in the same direction. After how many hours is the train 50 miles ahead? | $2.5$ hr |
| 6 | Solve $-5 < 3x + 1 \\\\leq 13$ | $-2 < x \\\\leq 4$ |

**Check:** Problem 3 — Case 1: $x + 3 = 2x - 1 \\\\implies x = 4$. Case 2: $x + 3 = -(2x-1) \\\\implies 3x = -2 \\\\implies x = -\\\\frac{2}{3}$.
Check Case 2: $|{-\\\\frac{2}{3}}+3| = \\\\frac{7}{3}$ but $2(-\\\\frac{2}{3})-1 = -\\\\frac{7}{3} < 0$ ✗ Extraneous!
      `
    },
    {
      id: 'act-alg7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $3(2x - 4) = 2(3x - 6)$, how many solutions does the equation have?',
            options: ['$0$', '$1$', 'Infinitely many', '$2$'],
            correctAnswer: 2,
            explanation: '$6x - 12 = 6x - 12$ is an identity — true for all $x$. Infinitely many solutions.'
          },
          {
            question: 'A 20% salt solution is mixed with a 50% salt solution to make 30 liters of a 40% solution. How many liters of the 50% solution are needed?',
            options: ['$10$', '$15$', '$20$', '$25$'],
            correctAnswer: 2,
            explanation: 'Let $x$ = liters of 50%. Then $0.20(30-x) + 0.50x = 0.40(30)$. $6 - 0.20x + 0.50x = 12 \\\\implies 0.30x = 6 \\\\implies x = 20$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT Algebra & Equations lessons …")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")
