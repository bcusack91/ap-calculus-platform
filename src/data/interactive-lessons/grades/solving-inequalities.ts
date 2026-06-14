import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Is an Inequality?"
  // ============================================================
  {
    topicSlug: 'solving-inequalities',
    sections: [
      {
        id: 'p1-what-is-inequality',
        type: 'text',
        content: `## What Is an Inequality? ⚖️

An **equation** uses an equals sign ($=$) to say that two things are *exactly the same*.

An **inequality** is similar, but instead of saying two expressions are equal, it says one is **greater than** or **less than** the other.

Here are the four inequality symbols you'll use:

| Symbol | Meaning | Example | Read it as |
|:------:|:--------|:-------:|:-----------|
| $<$ | less than | $3 < 5$ | "3 is less than 5" |
| $>$ | greater than | $7 > 2$ | "7 is greater than 2" |
| $\\le$ | less than **or equal to** | $x \\le 10$ | "x is at most 10" |
| $\\ge$ | greater than **or equal to** | $y \\ge -3$ | "y is at least -3" |

A handy trick: the inequality symbol always **opens toward the bigger number**. The wide side faces the larger value, and the pointy side faces the smaller one.`,
      },
      {
        id: 'p1-many-solutions',
        type: 'text',
        content: `## One Answer vs. Many Answers 🔢

This is the **biggest difference** between equations and inequalities.

**Equation:** $x + 3 = 7$
- This has exactly **ONE** solution: $x = 4$.

**Inequality:** $x + 3 > 7$
- This has **MANY** solutions: $x > 4$.
- Try some numbers: $5$ works, $6$ works, $100$ works, even $4.1$ works!
- There are *infinitely many* answers.

**Key idea:** An inequality describes a whole **range** of numbers, not just a single value. Whenever you solve one, your answer will look like $x > 4$ or $y \\le 11$ — a statement about *all* the numbers that fit.`,
      },
      {
        id: 'p1-solving-idea',
        type: 'text',
        content: `## Solving Works Just Like Equations ✨

Here's the good news: you solve inequalities using the **same inverse operations** you already use for equations. Whatever you do to one side, you do to the other.

- To undo **adding**, you **subtract**.
- To undo **subtracting**, you **add**.
- To undo **multiplying**, you **divide**.
- To undo **dividing**, you **multiply**.

**Example:** Solve $x + 5 > 12$

**Step 1 —** Subtract $5$ from both sides:
$$x + 5 - 5 > 12 - 5$$
$$x > 7$$

So **any number greater than 7** is a solution. Let's check $x = 8$: $8 + 5 = 13$, and $13 > 12$ ✓`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea is clear.`,
        exercise: {
          questions: [
            {
              question:
                'Which statement about the inequality $x > 4$ is TRUE?',
              options: [
                'It has exactly one solution, $x = 4$.',
                'It has many solutions — every number greater than 4.',
                'It has no solutions at all.',
                'Its only solution is $x = 5$.',
              ],
              correctAnswer: 1,
              explanation:
                'Unlike an equation, an inequality describes a whole range of numbers. $x > 4$ means every number bigger than 4 (5, 6, 4.1, 100, ...) is a solution.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Solving One-Step Inequalities"
  // ============================================================
  {
    topicSlug: 'solving-inequalities',
    sections: [
      {
        id: 'p2-add-subtract',
        type: 'text',
        content: `## Worked Example: Add or Subtract ➕➖

When a number is **added to** or **subtracted from** the variable, undo it with the opposite operation on **both sides**.

**Example 1 — Solve $y - 3 \\le 8$**

**Step 1 —** Add $3$ to both sides (to undo the $-3$):
$$y - 3 + 3 \\le 8 + 3$$
$$y \\le 11$$

**Answer: $y \\le 11$** — any number less than *or equal to* 11 works.

**Check** with $y = 11$: $11 - 3 = 8$, and $8 \\le 8$ ✓`,
      },
      {
        id: 'p2-multiply-divide',
        type: 'text',
        content: `## Worked Example: Multiply or Divide (Positive) ✖️➗

When the variable is **multiplied or divided by a positive number**, undo it with the opposite operation. Because the number is positive, the symbol **stays the same**.

**Example 2 — Solve $4x < 20$**

**Step 1 —** Divide both sides by $4$:
$$\\frac{4x}{4} < \\frac{20}{4}$$
$$x < 5$$

**Answer: $x < 5$**

**Example 3 — Solve $\\frac{x}{3} \\ge 6$**

**Step 1 —** Multiply both sides by $3$:
$$3 \\times \\frac{x}{3} \\ge 3 \\times 6$$
$$x \\ge 18$$

**Answer: $x \\ge 18$**`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Solve These ✍️

Solve each one-step inequality. Type **only the number** that goes after the symbol (for example, if the answer is $x > 7$, just type \`7\`).

1. Solve $x + 6 > 10$. Then $x > \\;?$
2. Solve $3x < 21$. Then $x < \\;?$
3. Solve $\\frac{y}{2} \\ge 5$. Then $y \\ge \\;?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '7', '10'],
          hint1:
            'Use the opposite operation on both sides. For #1 subtract 6; for #2 divide by 3; for #3 multiply by 2.',
          hint2:
            'Since every number you divide or multiply by here is positive, the inequality symbol stays exactly the same.',
          explanation:
            'Problem 1: $x + 6 > 10 \\Rightarrow x > 4$. Problem 2: $3x < 21 \\Rightarrow x < 7$. Problem 3: $\\frac{y}{2} \\ge 5 \\Rightarrow y \\ge 10$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "The Negative Flip Rule"
  // ============================================================
  {
    topicSlug: 'solving-inequalities',
    sections: [
      {
        id: 'p3-flip-rule',
        type: 'text',
        content: `## ⚠️ The Special Rule: Flip for Negatives!

Here's the **one rule that makes inequalities different** from equations:

> When you **multiply or divide both sides by a NEGATIVE number, you must FLIP the inequality symbol!**

**Why?** Start with a true statement: $5 > 2$.
- Multiply both sides by $-1$: we get $-5$ and $-2$.
- On a number line, $-5$ sits to the **left** of $-2$, so $-5 < -2$.
- The symbol flipped from $>$ to $<$ to keep the statement true!

**Example — Solve $-3x > 12$**

**Step 1 —** Divide both sides by $-3$ **and flip** $>$ to $<$:
$$\\frac{-3x}{-3} < \\frac{12}{-3}$$
$$x < -4$$

**Answer: $x < -4$.** Check $x = -5$: $-3(-5) = 15$, and $15 > 12$ ✓

Now try the questions below.`,
      },
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve the inequality $-2x < 10$.',
              options: ['$x < 5$', '$x > -5$', '$x < -5$', '$x > 5$'],
              correctAnswer: 1,
              explanation:
                'Divide both sides by $-2$. Because $-2$ is negative, flip the symbol: $<$ becomes $>$, giving $x > -5$.',
            },
            {
              question: 'Solve the inequality $\\frac{x}{-4} \\ge 2$.',
              options: ['$x \\ge 8$', '$x \\ge -8$', '$x \\le -8$', '$x \\le 8$'],
              correctAnswer: 2,
              explanation:
                'Multiply both sides by $-4$. Since $-4$ is negative, flip $\\ge$ to $\\le$: $x \\le -8$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Flip or Don't Flip? 🔽

For each problem, choose whether you **flip** the symbol, and pick the correct solution.`,
        exercise: {
          dropdowns: [
            {
              label: 'When solving $5x > 15$, do you flip the symbol?',
              options: ['Yes, flip it', 'No, keep it the same'],
            },
            {
              label: 'Solve $-x \\le 6$. The answer is:',
              options: ['$x \\le 6$', '$x \\ge -6$', '$x \\le -6$'],
            },
          ],
          correctAnswers: ['No, keep it the same', '$x \\ge -6$'],
          hint1:
            'You only flip the symbol when you multiply or divide by a NEGATIVE number. For the second one, dividing by $-1$ requires a flip.',
          explanation:
            'For $5x > 15$ you divide by positive $5$, so no flip: $x > 3$. For $-x \\le 6$, divide by $-1$ and flip $\\le$ to $\\ge$, giving $x \\ge -6$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Inequalities in the Real World"
  // ============================================================
  {
    topicSlug: 'solving-inequalities',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Inequalities in the Real World 🌎

Inequalities are everywhere — anytime we talk about a **limit**, a **minimum**, or a **maximum**.

Watch for these clue words:

- **"at most"** or **"no more than"** → $\\le$
- **"at least"** or **"no less than"** → $\\ge$
- **"less than"** or **"under"** → $<$
- **"more than"** or **"over"** → $>$

**Example:** A ride at the fair has a sign: *"You must be at least 48 inches tall."*

If $h$ stands for your height, this becomes the inequality $h \\ge 48$. Any height of 48 inches **or more** lets you ride.

**Example with a solve:** Tickets cost \\$8 each, and Jordan has \\$50 to spend. How many tickets $t$ can Jordan buy?
$$8t \\le 50$$
$$t \\le 6.25$$
Since Jordan can't buy part of a ticket, the most they can buy is **6 tickets**.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Set Up and Solve ✍️

Type **only the number** that goes after the inequality symbol.

1. A bus holds **at most** 40 people. Write $p \\le \\;?$ for the number of people allowed.
2. To pass, Maria needs **at least** an 80 on her test. Write $s \\ge \\;?$ for her score $s$.
3. A pizza costs \\$9 and Sam has \\$45. Solving $9p \\le 45$ gives $p \\le \\;?$ pizzas.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '80', '5'],
          hint1:
            '"At most" means $\\le$ and "at least" means $\\ge$. The number stays the same in #1 and #2.',
          hint2:
            'For #3, divide both sides by 9. Since 9 is positive, the symbol does not flip.',
          explanation:
            'Problem 1: "at most 40" means $p \\le 40$. Problem 2: "at least 80" means $s \\ge 80$. Problem 3: $9p \\le 45 \\Rightarrow p \\le 5$.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Word Problem Check 🎯`,
        exercise: {
          questions: [
            {
              question:
                'A movie theater says guests must be "no more than 12 years old" to get the child discount. If $a$ is a guest’s age, which inequality matches?',
              options: ['$a > 12$', '$a < 12$', '$a \\ge 12$', '$a \\le 12$'],
              correctAnswer: 3,
              explanation:
                '"No more than 12" means 12 is allowed and anything smaller is too, so $a \\le 12$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Challenge"
  // ============================================================
  {
    topicSlug: 'solving-inequalities',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Putting It All Together 🧠

You now know how to solve and graph inequalities. Here's everything in one place:

| Situation | What to do | Flip the symbol? |
|:----------|:-----------|:----------------:|
| Add / subtract a number | Do the opposite to both sides | **No** |
| Multiply / divide by a **positive** | Do the opposite to both sides | **No** |
| Multiply / divide by a **negative** | Do the opposite to both sides | **YES — flip!** |

**Remember the symbols:**
- $<$ less than, $>$ greater than
- $\\le$ less than or equal to, $\\ge$ greater than or equal to

**The #1 thing to watch:** only flip the inequality symbol when you multiply or divide by a **negative** number. Adding and subtracting *never* flip it!

Ready for the final challenge? 💪`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

These mix everything together. Take your time on each one.`,
        exercise: {
          questions: [
            {
              question: 'Solve the inequality $x - 7 \\ge 2$.',
              options: ['$x \\ge 9$', '$x \\ge -5$', '$x \\le 9$', '$x \\ge 5$'],
              correctAnswer: 0,
              explanation:
                'Add 7 to both sides: $x - 7 + 7 \\ge 2 + 7$, so $x \\ge 9$. Adding never flips the symbol.',
            },
            {
              question: 'Solve the inequality $-6x \\le 18$.',
              options: ['$x \\le -3$', '$x \\ge -3$', '$x \\le 3$', '$x \\ge 3$'],
              correctAnswer: 1,
              explanation:
                'Divide both sides by $-6$. Because $-6$ is negative, flip $\\le$ to $\\ge$: $x \\ge -3$.',
            },
          ],
        },
      },
    ],
  },
]
