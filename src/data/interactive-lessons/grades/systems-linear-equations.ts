import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'systems-linear-equations',
    sections: [
      {
        id: 'sle-p1-intro',
        type: 'text' as const,
        content: `# 📈 Systems of Linear Equations

## What Happens When Two Lines Meet?

A **system of linear equations** is a set of **two or more** linear equations that share the **same variables** (usually $x$ and $y$).

Here is a simple system:

$$y = 2x + 1$$
$$y = -x + 4$$

The **solution** to a system is the point $(x, y)$ that makes **BOTH** equations true at the same time. On a graph, that is exactly the point where the two lines **cross** — their **intersection point**.

> 🔑 **Big Idea:** One equation has infinitely many points on its line. A *system* asks: which point is on **both** lines at once?

Systems show up everywhere in the real world — comparing two phone plans, figuring out when two savings accounts hold the same amount, or finding where supply meets demand in business.`
      },
      {
        id: 'sle-p1-graphing',
        type: 'text' as const,
        content: `## ✏️ Solving by Graphing

To solve a system **by graphing**, you draw both lines and read off where they meet.

**Steps:**
1. Graph **both** equations on the same coordinate plane.
2. Find the point where the lines **intersect**.
3. **Check** that point in both equations.

**Example:** Solve by graphing.

$$y = x + 1$$
$$y = -2x + 4$$

**Graph $y = x + 1$:** start at the y-intercept $(0, 1)$, slope $1$ means *up 1, right 1*. Points: $(0, 1)$, $(1, 2)$, $(2, 3)$.

**Graph $y = -2x + 4$:** start at the y-intercept $(0, 4)$, slope $-2$ means *down 2, right 1*. Points: $(0, 4)$, $(1, 2)$, $(2, 0)$.

The lines cross at $(1, 2)$.

**Check:**
- $y = x + 1 \\rightarrow 2 = 1 + 1$ ✓
- $y = -2x + 4 \\rightarrow 2 = -2(1) + 4 = 2$ ✓

**Answer: $(1, 2)$**`
      },
      {
        id: 'sle-p1-types',
        type: 'text' as const,
        content: `## 🔢 Three Possible Outcomes

Not every system has exactly one answer. There are **three** possibilities, and you can predict which one you'll get by looking at the **slopes** and **y-intercepts**.

| Type of System | What the lines do | Slopes | Y-intercepts | Number of solutions |
|---|---|---|---|---|
| **One solution** | Cross at one point | **Different** | (any) | Exactly **one** |
| **No solution** | Stay parallel | **Same** | **Different** | **None** |
| **Infinitely many** | Same exact line | **Same** | **Same** | **Infinite** |

**One solution:** $y = 2x + 1$ and $y = -x + 4$ have different slopes, so they cross once — at $(1, 3)$.

**No solution:** $y = 3x + 2$ and $y = 3x - 5$ have the **same** slope ($3$) but different intercepts, so they are **parallel** and never meet.

**Infinitely many:** $y = 2x + 3$ and $2y = 4x + 6$ are the **same line** (divide the second by 2 to see it), so every point works.

> 🧠 **Quick trick:** Compare slopes first. Different slopes → one solution. Same slope → check the intercepts to tell parallel apart from identical.`
      },
      {
        id: 'sle-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'What does the **solution** to a system of two linear equations represent on a graph?',
              options: [
                'The point where the two lines intersect',
                'The y-intercept of the first line',
                'Any point on either of the two lines',
                'The steeper of the two slopes'
              ],
              correctAnswer: 0,
              explanation: 'The solution is the single point $(x, y)$ that lies on BOTH lines, which is exactly where they intersect. That point satisfies both equations at once.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'systems-linear-equations',
    sections: [
      {
        id: 'sle-p2-worked',
        type: 'text' as const,
        content: `## 🛠️ Worked Example: Solve by Graphing

Let's carefully solve a full system and check our work.

**Solve:**
$$y = -x + 5$$
$$y = 2x - 1$$

**Step 1 — Plot the first line $y = -x + 5$.**
- Y-intercept: $(0, 5)$
- Slope $-1$ (down 1, right 1): $(1, 4)$, $(2, 3)$, $(3, 2)$

**Step 2 — Plot the second line $y = 2x - 1$.**
- Y-intercept: $(0, -1)$
- Slope $2$ (up 2, right 1): $(1, 1)$, $(2, 3)$, $(3, 5)$

**Step 3 — Find where they cross.** Both lines pass through $(2, 3)$, so the intersection is $(2, 3)$.

**Step 4 — Check in BOTH equations.**
- $y = -x + 5 \\rightarrow 3 = -(2) + 5 = 3$ ✓
- $y = 2x - 1 \\rightarrow 3 = 2(2) - 1 = 3$ ✓

**Answer: $(2, 3)$**`
      },
      {
        id: 'sle-p2-classify',
        type: 'text' as const,
        content: `## 🔍 Worked Example: Classify Without Graphing

You can often tell the type of system just by comparing the equations.

**System A:**
$$y = 4x + 2$$
$$y = 4x - 7$$

Same slope ($4$), **different** y-intercepts ($2$ vs $-7$). The lines are **parallel** → **no solution**.

**System B:**
$$y = \\frac{1}{2}x + 3$$
$$y = -2x + 3$$

**Different** slopes ($\\frac{1}{2}$ vs $-2$) → the lines cross once → **one solution**. (They share the y-intercept $(0, 3)$, so that's the meeting point!)

> 💡 Comparing slopes and intercepts is a fast preview before you ever pick up a pencil to graph.`
      },
      {
        id: 'sle-p2-input',
        type: 'input-boxes' as const,
        content: `## 📝 Your Turn: Find the Intersection

Solve this system **by graphing** (or by reasoning):

$$y = x + 2$$
$$y = -x + 6$$

Fill in the intersection point and the check.

- **Box 1:** the $x$-value of the intersection point
- **Box 2:** the $y$-value of the intersection point
- **Box 3:** plug the $x$-value into $y = x + 2$ — what $y$ do you get? (it should match Box 2!)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '4'],
          hint1: 'The lines meet where $x + 2 = -x + 6$. Add $x$ to both sides, then solve for $x$.',
          hint2: 'From $x + 2 = -x + 6$: add $x$ to get $2x + 2 = 6$, so $2x = 4$ and $x = 2$. Then $y = 2 + 2 = 4$.',
          explanation: 'Setting the equations equal: $x + 2 = -x + 6$ gives $2x = 4$, so $x = 2$. Then $y = 2 + 2 = 4$. The intersection is $(2, 4)$, and the check confirms $y = 4$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'systems-linear-equations',
    sections: [
      {
        id: 'sle-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice

Use what you know about slopes, intercepts, and intersections.`,
        exercise: {
          questions: [
            {
              question: 'How many solutions does this system have? $y = 5x - 1$ and $y = 5x + 4$',
              options: [
                'No solution (the lines are parallel)',
                'Exactly one solution',
                'Infinitely many solutions',
                'Exactly two solutions'
              ],
              correctAnswer: 0,
              explanation: 'Both lines have slope $5$ but different y-intercepts ($-1$ vs $4$), so they are parallel and never meet — no solution.'
            },
            {
              question: 'A graph shows two lines crossing at the single point $(3, -2)$. What is the solution to that system?',
              options: [
                '$(3, -2)$',
                '$(-2, 3)$',
                '$x = 3$ only',
                'There is no solution'
              ],
              correctAnswer: 0,
              explanation: 'The solution is written as the ordered pair $(x, y)$ where the lines intersect. Here that point is $(3, -2)$.'
            }
          ]
        }
      },
      {
        id: 'sle-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Classify Each System

For each system, choose how many solutions it has.`,
        exercise: {
          dropdowns: [
            { label: '$y = 2x + 3$ and $2y = 4x + 6$ has', options: ['Infinitely many solutions', 'One solution', 'No solution'] },
            { label: '$y = x + 1$ and $y = -3x + 9$ has', options: ['One solution', 'No solution', 'Infinitely many solutions'] }
          ],
          correctAnswers: ['Infinitely many solutions', 'One solution'],
          hint1: 'Rewrite the second equation in the first system in $y = mx + b$ form. For the second system, compare the slopes.',
          explanation: 'Dividing $2y = 4x + 6$ by 2 gives $y = 2x + 3$ — the same line, so infinitely many solutions. In the second system the slopes ($1$ and $-3$) differ, so the lines cross once: one solution.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'systems-linear-equations',
    sections: [
      {
        id: 'sle-p4-context',
        type: 'text' as const,
        content: `## 🌎 Real-World Systems: Comparing Two Plans

Systems are perfect for **comparing two options** and finding when they are **equal**.

**The setup:** Maya is choosing between two go-kart deals, where $x$ is the number of laps.

- **Speedy Track:** \\$2 to enter plus \\$1 per lap → $y = x + 2$
- **Turbo Track:** \\$6 to enter plus a discount, costing $y = -x + 6$ for a special package

The lines meet where the **total costs are equal**. We already found that intersection in Part 2: $(2, 4)$. That means at **$2$ laps**, both tracks cost **\\$4** — the break-even point!

> 💬 **Real-life meaning:** Before the intersection, one option is cheaper; after it, the other becomes the better deal. The solution point tells you exactly where the choice flips.`
      },
      {
        id: 'sle-p4-input',
        type: 'input-boxes' as const,
        content: `## 📝 Word Problem: Two Savings Accounts

Jordan and Riley each open a savings account, where $x$ is the number of weeks.

- **Jordan** starts with \\$10 and adds \\$5 per week: $y = 5x + 10$
- **Riley** starts with \\$30 and adds \\$3 per week: $y = 3x + 30$

Find the week when they have the **same** amount of money, and how much that is.

- **Box 1:** the number of weeks $x$ when the amounts are equal
- **Box 2:** the dollar amount $y$ they both have at that time
- **Box 3:** how much money **Jordan** has after that many weeks (use $y = 5x + 10$ — it should match Box 2!)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '60', '60'],
          hint1: 'They are equal when $5x + 10 = 3x + 30$. Get the $x$ terms on one side and the numbers on the other.',
          hint2: 'From $5x + 10 = 3x + 30$: subtract $3x$ to get $2x + 10 = 30$, then $2x = 20$, so $x = 10$. Then $y = 5(10) + 10 = 60$.',
          explanation: 'Set the equations equal: $5x + 10 = 3x + 30$ gives $2x = 20$, so $x = 10$ weeks. Then $y = 5(10) + 10 = 60$ dollars. Both accounts hold \\$60 at week 10.'
        }
      },
      {
        id: 'sle-p4-mc',
        type: 'multiple-choice' as const,
        content: `## ✅ Application Check`,
        exercise: {
          questions: [
            {
              question: 'In the savings problem, what does the **intersection point** $(10, 60)$ tell us in real life?',
              options: [
                'After 10 weeks, both people have \\$60',
                'Jordan saves \\$10 and Riley saves \\$60',
                'The accounts can never be equal',
                'Riley always has more money than Jordan'
              ],
              correctAnswer: 0,
              explanation: 'The intersection $(10, 60)$ means at week $x = 10$, both accounts hold the same amount, $y = 60$ dollars. That is the moment their balances are equal.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'systems-linear-equations',
    sections: [
      {
        id: 'sle-p5-summary',
        type: 'text' as const,
        content: `## 🧾 Quick Review

A **system of linear equations** is two (or more) equations sharing the same variables. The **solution** is the point that satisfies **all** of them — where the lines **intersect**.

**To solve by graphing:** plot both lines, find where they cross, and check the point in both equations.

| If the slopes are... | And the y-intercepts are... | Then the system has... |
|---|---|---|
| **Different** | (any) | **One solution** (lines cross once) |
| **Same** | **Different** | **No solution** (parallel lines) |
| **Same** | **Same** | **Infinitely many** (same line) |

> 🎯 **Master move:** Compare slopes first to predict the outcome, then graph (or set the equations equal) to find the exact point. Always check your answer in both equations!`
      },
      {
        id: 'sle-p5-challenge',
        type: 'multiple-choice' as const,
        content: `## 🏆 Mixed Challenge`,
        exercise: {
          questions: [
            {
              question: 'Without graphing, how many solutions does this system have? $y = -2x + 7$ and $y = 4x - 5$',
              options: [
                'One solution — the slopes ($-2$ and $4$) are different',
                'No solution — the lines are parallel',
                'Infinitely many — they are the same line',
                'No solution — the y-intercepts are different'
              ],
              correctAnswer: 0,
              explanation: 'The slopes $-2$ and $4$ are different, so the lines must cross at exactly one point — one solution. Different slopes always means one solution.'
            },
            {
              question: 'Solve by setting equal: where do $y = 3x - 4$ and $y = x + 2$ intersect?',
              options: [
                '$(3, 5)$',
                '$(5, 3)$',
                '$(2, 2)$',
                '$(-3, 5)$'
              ],
              correctAnswer: 0,
              explanation: 'Set $3x - 4 = x + 2$, giving $2x = 6$ so $x = 3$. Then $y = 3 + 2 = 5$, so the lines intersect at $(3, 5)$.'
            }
          ]
        }
      }
    ]
  }
]
