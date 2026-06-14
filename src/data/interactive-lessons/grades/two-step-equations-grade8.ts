import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Is a Two-Step Equation?"
  // ============================================================
  {
    topicSlug: 'two-step-equations-grade8',
    sections: [
      {
        id: 'p1-what-is-two-step',
        type: 'text',
        content: `## What Is a Two-Step Equation? 🧩

A **two-step equation** is an equation that needs **two different operations** to solve.

You already know how to solve a **one-step equation** like $x + 5 = 17$ (just subtract 5). A two-step equation has *one extra layer*:

$$3x + 5 = 17$$

To get $x$ all by itself here, you have to undo **two** things:
- the $+ 5$ that is **added** to $3x$, and
- the $3$ that is **multiplied** by $x$.

The whole goal is to **isolate the variable** — to get $x$ alone on one side of the equals sign so the other side tells you its value.`,
      },
      {
        id: 'p1-golden-rule',
        type: 'text',
        content: `## The Golden Rule: Stay Balanced ⚖️

Think of an equation as a balanced scale. The two sides are equal, so whatever you do to one side, you **must do to the other side** to keep it balanced.

We solve by using **inverse (opposite) operations** to peel away everything around the variable:

| Operation you see | Inverse used to undo it |
|:-----------------:|:-----------------------:|
| addition ($+$) | subtraction ($-$) |
| subtraction ($-$) | addition ($+$) |
| multiplication ($\\times$) | division ($\\div$) |
| division ($\\div$) | multiplication ($\\times$) |

**Order matters.** Just like getting dressed, you take things off in the *reverse* order you put them on.`,
      },
      {
        id: 'p1-two-steps-order',
        type: 'text',
        content: `## The Two Steps, In Order 🪜

For an equation like $3x + 5 = 17$:

**Step 1 — Undo the addition or subtraction first.**
Move the constant (the lonely number) to the other side.
$$3x + 5 - 5 = 17 - 5 \\;\\Rightarrow\\; 3x = 12$$

**Step 2 — Undo the multiplication or division second.**
Now isolate the variable.
$$\\frac{3x}{3} = \\frac{12}{3} \\;\\Rightarrow\\; x = 4$$

**Why this order?** The variable is "wrapped" by multiplication *inside* and addition *outside*. We unwrap from the **outside in** — strip the added number off first, then the number multiplying the variable. Doing it in this order keeps the arithmetic clean.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Make sure the big idea is solid before we start solving.`,
        exercise: {
          questions: [
            {
              question:
                'In the equation $4x - 7 = 13$, which operation should you undo FIRST?',
              options: [
                'Divide by 4 first.',
                'Add 7 to both sides first (undo the subtraction).',
                'Subtract 4 from both sides first.',
                'Multiply both sides by 7 first.',
              ],
              correctAnswer: 1,
              explanation:
                'Undo the addition/subtraction before the multiplication. Here we add 7 to both sides to clear the $-7$, giving $4x = 20$, and only then divide by 4.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Worked Examples"
  // ============================================================
  {
    topicSlug: 'two-step-equations-grade8',
    sections: [
      {
        id: 'p2-worked-example-1',
        type: 'text',
        content: `## Worked Example 1: $3x + 5 = 17$ ✏️

Let's solve it slowly, one line at a time.

**Start:**
$$3x + 5 = 17$$

**Step 1 — Subtract 5 from both sides** (undo the $+5$):
$$3x + 5 - 5 = 17 - 5$$
$$3x = 12$$

**Step 2 — Divide both sides by 3** (undo the $\\times 3$):
$$\\frac{3x}{3} = \\frac{12}{3}$$
$$x = 4$$

**Check your answer** — substitute $x = 4$ back into the *original* equation:
$$3(4) + 5 = 12 + 5 = 17 ✓$$

It works, so $x = 4$ is correct. **Always check** — it catches almost every mistake.`,
      },
      {
        id: 'p2-worked-example-2',
        type: 'text',
        content: `## Worked Example 2: Working With Negatives ➖

Negatives follow the **exact same two steps**. Just be careful with signs.

**Solve:** $-2x - 6 = 10$

**Step 1 — Add 6 to both sides** (undo the $-6$):
$$-2x - 6 + 6 = 10 + 6$$
$$-2x = 16$$

**Step 2 — Divide both sides by $-2$** (undo the $\\times -2$):
$$\\frac{-2x}{-2} = \\frac{16}{-2}$$
$$x = -8$$

**Check:** $-2(-8) - 6 = 16 - 6 = 10 ✓$

Notice that dividing a positive ($16$) by a negative ($-2$) gives a **negative** answer. Watch those signs in Step 2!`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Fill In the Steps 🔧

Solve $5x + 3 = 23$ by filling in each blank with a number.

- **Box 1:** After subtracting 3 from both sides, $5x = \\;?$
- **Box 2:** After dividing both sides by 5, $x = \\;?$
- **Box 3:** Check it — what is $5x + 3$ when you plug your answer back in?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '4', '23'],
          hint1:
            'Step 1: $23 - 3 = 20$, so $5x = 20$. Step 2: divide both sides by 5.',
          hint2:
            'For the check, substitute your value of $x$ into $5x + 3$. It should equal the right side of the original equation.',
          explanation:
            'Subtracting 3 gives $5x = 20$. Dividing by 5 gives $x = 4$. Checking: $5(4) + 3 = 20 + 3 = 23$ ✓, which matches the original equation.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'two-step-equations-grade8',
    sections: [
      {
        id: 'p3-multiple-choice',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Solution 🎯

Work each one on paper using the two steps, then pick the answer.`,
        exercise: {
          questions: [
            {
              question: 'Solve: $2x + 7 = 19$. What is $x$?',
              options: ['$x = 6$', '$x = 13$', '$x = 26$', '$x = 12$'],
              correctAnswer: 0,
              explanation:
                'Subtract 7: $2x = 12$. Divide by 2: $x = 6$. Check: $2(6) + 7 = 12 + 7 = 19$ ✓.',
            },
            {
              question: 'Solve: $\\frac{x}{4} - 2 = 3$. What is $x$?',
              options: ['$x = 4$', '$x = 20$', '$x = 12$', '$x = 5$'],
              correctAnswer: 1,
              explanation:
                'Add 2: $\\frac{x}{4} = 5$. Multiply both sides by 4: $x = 20$. Check: $\\frac{20}{4} - 2 = 5 - 2 = 3$ ✓.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Pick the Right Step 🧠

For the equation $\\frac{x}{3} + 4 = 10$, choose the correct first step and the correct final answer.`,
        exercise: {
          dropdowns: [
            {
              label: 'The correct FIRST step is to:',
              options: [
                'Multiply both sides by 3',
                'Subtract 4 from both sides',
                'Divide both sides by 4',
                'Add 10 to both sides',
              ],
            },
            {
              label: 'The final solution is:',
              options: ['$x = 2$', '$x = 18$', '$x = 42$', '$x = 6$'],
            },
          ],
          correctAnswers: ['Subtract 4 from both sides', '$x = 18$'],
          hint1:
            'Undo the addition first: subtracting 4 gives $\\frac{x}{3} = 6$. Then undo the division by multiplying both sides by 3.',
          explanation:
            'Step 1: subtract 4 to get $\\frac{x}{3} = 6$. Step 2: multiply both sides by 3 to get $x = 18$. Check: $\\frac{18}{3} + 4 = 6 + 4 = 10$ ✓.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Word Problems"
  // ============================================================
  {
    topicSlug: 'two-step-equations-grade8',
    sections: [
      {
        id: 'p4-real-world-text',
        type: 'text',
        content: `## Two-Step Equations in Real Life 🌎

Two-step equations show up constantly once you start charging fees, splitting bills, or saving money.

**Example — Skating rink:** A roller rink charges a flat **\\$5 entry fee** plus **\\$3 per hour** of skating. You spent **\\$17** total. How many hours did you skate?

**Set it up.** Let $h$ be the number of hours:
$$3h + 5 = 17$$

That \\$5 entry is the **constant**, and the \\$3-per-hour is the rate **multiplying** the variable — a classic two-step setup!

**Solve it.**
- Step 1: subtract 5 → $3h = 12$
- Step 2: divide by 3 → $h = 4$

You skated for **4 hours**. The skill is the same as before — the only new part is **translating words into an equation** first.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Application: Saving for a Bike 🚲

Maria has **\\$12** saved. She adds **\\$8 every week**. She needs **\\$60** for a bike. The equation is $8w + 12 = 60$, where $w$ is the number of weeks.

- **Box 1:** After subtracting 12 from both sides, $8w = \\;?$
- **Box 2:** After dividing both sides by 8, $w = \\;?$ (this is the number of weeks)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['48', '6'],
          hint1:
            'Start by undoing the $+12$: compute $60 - 12$ to find what $8w$ equals.',
          hint2:
            'Then divide that result by 8 to find the number of weeks $w$.',
          explanation:
            'Subtracting 12 gives $8w = 48$. Dividing by 8 gives $w = 6$. So it takes Maria 6 weeks. Check: $8(6) + 12 = 48 + 12 = 60$ ✓.',
        },
      },
      {
        id: 'p4-multiple-choice',
        type: 'multiple-choice',
        content: `## Application Check 🧾

Read carefully and translate the words into a two-step equation.`,
        exercise: {
          questions: [
            {
              question:
                'A taxi charges a \\$4 flat fee plus \\$2 per mile. The total ride cost \\$20. Which equation models this, and how many miles ($m$) was the ride?',
              options: [
                '$2m + 4 = 20$, so $m = 8$',
                '$4m + 2 = 20$, so $m = 4.5$',
                '$2m - 4 = 20$, so $m = 12$',
                '$2m + 4 = 20$, so $m = 12$',
              ],
              correctAnswer: 0,
              explanation:
                'The flat fee is the constant (+4) and the per-mile cost multiplies the miles ($2m$), giving $2m + 4 = 20$. Subtract 4: $2m = 16$; divide by 2: $m = 8$ miles.',
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
    topicSlug: 'two-step-equations-grade8',
    sections: [
      {
        id: 'p5-summary-text',
        type: 'text',
        content: `## Putting It All Together 🏁

You now have a reliable, two-step recipe for any equation in the form $ax + b = c$.

| Step | What you do | Why |
|:----:|:------------|:----|
| **1** | Undo addition/subtraction | Move the constant off the variable's side |
| **2** | Undo multiplication/division | Isolate the variable completely |
| **3** | Check by substituting | Confirm both sides are equal |

**Remember:**
- Keep the equation **balanced** — do the same thing to **both sides**.
- Watch your **signs**, especially when dividing by a negative.
- **Always check** your answer in the *original* equation.

Time for a final mixed challenge that brings together positives, negatives, and division. You've got this! 💪`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🎓

Two mixed problems — take your time and check each answer.`,
        exercise: {
          questions: [
            {
              question: 'Solve: $-3x + 8 = 23$. What is $x$?',
              options: ['$x = -5$', '$x = 5$', '$x = -15$', '$x = 15$'],
              correctAnswer: 0,
              explanation:
                'Subtract 8: $-3x = 15$. Divide by $-3$: $x = -5$. Check: $-3(-5) + 8 = 15 + 8 = 23$ ✓.',
            },
            {
              question: 'Solve: $\\frac{x}{2} + 9 = 4$. What is $x$?',
              options: ['$x = -10$', '$x = 26$', '$x = 10$', '$x = -5$'],
              correctAnswer: 0,
              explanation:
                'Subtract 9: $\\frac{x}{2} = -5$. Multiply both sides by 2: $x = -10$. Check: $\\frac{-10}{2} + 9 = -5 + 9 = 4$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
