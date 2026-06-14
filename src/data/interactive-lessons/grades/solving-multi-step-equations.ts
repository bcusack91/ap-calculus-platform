import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Is a Multi-Step Equation?"
  // ============================================================
  {
    topicSlug: 'solving-multi-step-equations',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Leveling Up Your Equation Skills 🚀

In Grade 6 you solved **one-step equations** like $x + 7 = 12$ or $3x = 15$. Those took a single move to crack.

A **multi-step equation** needs **two or more steps** to get the variable alone. They combine the operations you already know, so you'll have to undo them one at a time — in the right order.

**Examples of multi-step equations:**

- $2x + 5 = 13$ — two steps (subtract, then divide)
- $3(x - 4) = 15$ — three steps (distribute, add, divide)
- $5x - 3 = 2x + 9$ — variables on **both** sides!

**Your goal never changes:** get the variable **alone** on one side of the equal sign.`,
      },
      {
        id: 'p1-strategy',
        type: 'text',
        content: `## The Strategy: Unwrap the Present 🎁

Think of an equation like a wrapped gift. The variable is hidden inside, with layers of operations wrapped around it. To reach it, you **unwrap in reverse order**.

You already know **PEMDAS** — the order you *build* an expression:

**P**arentheses → **E**xponents → **M**ultiply/**D**ivide → **A**dd/**S**ubtract

To **solve**, you run that order **backwards** (reverse PEMDAS):

1. **Simplify** first — combine like terms and distribute parentheses.
2. **Undo addition / subtraction** — do the opposite to **both** sides.
3. **Undo multiplication / division** — do the opposite to **both** sides.

**The Golden Rule:** Whatever you do to one side, you **must** do to the **other** side. That keeps the equation balanced, like a scale. ⚖️`,
      },
      {
        id: 'p1-worked',
        type: 'text',
        content: `## A First Worked Example

Solve: $2x + 5 = 13$

**Step 1 — Undo the addition.** Subtract $5$ from **both** sides:

$$2x + 5 - 5 = 13 - 5 \\;\\Rightarrow\\; 2x = 8$$

**Step 2 — Undo the multiplication.** Divide **both** sides by $2$:

$$\\frac{2x}{2} = \\frac{8}{2} \\;\\Rightarrow\\; x = 4$$

**Step 3 — Check.** Put $x = 4$ back in: $2(4) + 5 = 8 + 5 = 13$ ✓

**Answer: $x = 4$**

Notice the order: we undid the **$+5$** first, then the **$\\times 2$**. That's the reverse of how you'd build the expression!`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea stuck.`,
        exercise: {
          questions: [
            {
              question:
                'To solve $2x + 5 = 13$, which step should you do **first**?',
              options: [
                'Divide both sides by $2$',
                'Subtract $5$ from both sides',
                'Add $5$ to both sides',
                'Multiply both sides by $2$',
              ],
              correctAnswer: 1,
              explanation:
                'Using reverse PEMDAS, you undo addition/subtraction before multiplication/division. Subtracting $5$ from both sides gives $2x = 8$, then you divide by $2$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Worked Examples: Two-Step & Distributing"
  // ============================================================
  {
    topicSlug: 'solving-multi-step-equations',
    sections: [
      {
        id: 'p2-twostep',
        type: 'text',
        content: `## Worked Examples: Two-Step Equations ✍️

**Example A — Subtraction then division:** Solve $3x - 7 = 14$

**Step 1 — Add $7$ to both sides** (undo the subtraction):

$$3x - 7 + 7 = 14 + 7 \\;\\Rightarrow\\; 3x = 21$$

**Step 2 — Divide both sides by $3$:**

$$\\frac{3x}{3} = \\frac{21}{3} \\;\\Rightarrow\\; x = 7$$

**Check:** $3(7) - 7 = 21 - 7 = 14$ ✓ → **$x = 7$**

---

**Example B — A fraction in the mix:** Solve $\\dfrac{x}{4} + 3 = 8$

**Step 1 — Subtract $3$ from both sides:**

$$\\frac{x}{4} = 5$$

**Step 2 — Multiply both sides by $4$:**

$$x = 5 \\times 4 = 20$$

**Check:** $\\frac{20}{4} + 3 = 5 + 3 = 8$ ✓ → **$x = 20$**`,
      },
      {
        id: 'p2-distribute',
        type: 'text',
        content: `## Worked Example: Use the Distributive Property

When you see **parentheses**, distribute first to clear them.

Solve: $2(x + 3) = 16$

**Step 1 — Distribute the $2$** across the parentheses:

$$2 \\times x + 2 \\times 3 = 16 \\;\\Rightarrow\\; 2x + 6 = 16$$

**Step 2 — Subtract $6$ from both sides:**

$$2x = 10$$

**Step 3 — Divide both sides by $2$:**

$$x = 5$$

**Check:** $2(5 + 3) = 2(8) = 16$ ✓ → **$x = 5$**

> **Watch the sign!** With a negative out front, like $-3(x - 4)$, distribute the negative too: $-3x + 12$. Forgetting to flip that sign is the #1 mistake here.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✍️

Solve each equation for $x$. Type just the number (for example, \`7\` or \`-3\`).

- **Box 1:** $4x + 9 = 25$
- **Box 2:** $\\dfrac{x}{5} - 2 = 3$
- **Box 3:** $3(x + 2) = 21$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '25', '5'],
          hint1: 'Undo addition/subtraction first, then undo multiplication/division. For the parentheses, distribute before anything else.',
          hint2: 'Box 2: add $2$ first to get $\\frac{x}{5} = 5$, then multiply both sides by $5$. Box 3: distribute to get $3x + 6 = 21$.',
          explanation:
            'Box 1: $4x + 9 = 25 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. Box 2: $\\frac{x}{5} - 2 = 3 \\Rightarrow \\frac{x}{5} = 5 \\Rightarrow x = 25$. Box 3: $3(x+2)=21 \\Rightarrow 3x + 6 = 21 \\Rightarrow 3x = 15 \\Rightarrow x = 5$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'solving-multi-step-equations',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Work each one carefully on scratch paper, then pick the matching answer.`,
        exercise: {
          questions: [
            {
              question: 'Solve for $x$: $5x - 4 = 26$',
              options: ['$x = 6$', '$x = 5$', '$x = 30$', '$x = 110$'],
              correctAnswer: 0,
              explanation:
                'Add $4$ to both sides: $5x = 30$. Then divide by $5$: $x = 6$. Check: $5(6) - 4 = 30 - 4 = 26$ ✓',
            },
            {
              question: 'Solve for $x$: $-2(x - 5) = 14$',
              options: ['$x = 12$', '$x = -2$', '$x = 2$', '$x = 9$'],
              correctAnswer: 1,
              explanation:
                'Distribute: $-2x + 10 = 14$. Subtract $10$: $-2x = 4$. Divide by $-2$: $x = -2$. Check: $-2(-2 - 5) = -2(-7) = 14$ ✓',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Fill in the Solving Steps 🧩

Below is the work for solving $3x + 8 = 23$. Choose the option that correctly fills each blank.`,
        exercise: {
          dropdowns: [
            {
              label: 'First step: to undo the $+8$, you should',
              options: ['subtract $8$ from both sides', 'divide both sides by $8$', 'add $8$ to both sides'],
            },
            {
              label: 'After that step you get $3x = 15$, so the final answer is',
              options: ['$x = 45$', '$x = 5$', '$x = 18$'],
            },
          ],
          correctAnswers: ['subtract $8$ from both sides', '$x = 5$'],
          hint1: 'Undo addition with subtraction first; then divide both sides by the number in front of $x$.',
          explanation:
            'Subtract $8$ from both sides of $3x + 8 = 23$ to get $3x = 15$. Then divide both sides by $3$ to get $x = 5$. Check: $3(5) + 8 = 15 + 8 = 23$ ✓',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Real-World Equations"
  // ============================================================
  {
    topicSlug: 'solving-multi-step-equations',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Equations in the Real World 🌎

Multi-step equations are perfect for real situations that have a **starting fee** plus a **per-item cost**.

**Example — Bowling night:** A bowling alley charges $\\$3$ to rent shoes plus $\\$5$ per game. You spent $\\$23$ total. How many games did you play?

**Set up the equation.** Let $g$ = number of games:

$$5g + 3 = 23$$

The $5g$ is the cost of the games, and the $+3$ is the one-time shoe fee.

**Solve it:**

- Subtract $3$ from both sides: $5g = 20$
- Divide both sides by $5$: $g = 4$

**You played $4$ games.** Check: $5(4) + 3 = 20 + 3 = 23$ ✓

The trick to word problems is **translating** words into an equation. Look for the **per-item** amount (it multiplies the variable) and the **one-time** amount (it gets added or subtracted).`,
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Solve the Story Problems 🎟️

Set up an equation, solve it, and type just the number.

- **Box 1:** A taxi charges a $\\$4$ flat fee plus $\\$2$ per mile. Your ride cost $\\$18$. How many **miles** was the ride? (Solve $2m + 4 = 18$.)
- **Box 2:** A gym membership is $\\$20$ to join plus $\\$15$ per month. You paid $\\$95$ total. How many **months** did you pay for? (Solve $15n + 20 = 95$.)
- **Box 3:** A pizza is split into slices. After eating $3$ slices, twice the slices left equals $10$. How many slices were **left**? (Solve $2x = 10$.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '5', '5'],
          hint1: 'Undo the flat fee (subtract it) first, then divide by the per-item cost.',
          hint2: 'Box 1: $2m + 4 = 18 \\Rightarrow 2m = 14$. Box 2: $15n + 20 = 95 \\Rightarrow 15n = 75$. Box 3: just divide $10$ by $2$.',
          explanation:
            'Box 1: $2m + 4 = 18 \\Rightarrow 2m = 14 \\Rightarrow m = 7$ miles. Box 2: $15n + 20 = 95 \\Rightarrow 15n = 75 \\Rightarrow n = 5$ months. Box 3: $2x = 10 \\Rightarrow x = 5$ slices left.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## One More Real-World Problem 💰`,
        exercise: {
          questions: [
            {
              question:
                'Maria is saving money. She already has $\\$12$ and saves $\\$6$ each week. The equation $6w + 12 = 48$ finds how many weeks until she has $\\$48$. How many weeks is that?',
              options: ['$10$ weeks', '$6$ weeks', '$8$ weeks', '$5$ weeks'],
              correctAnswer: 1,
              explanation:
                'Subtract $12$ from both sides: $6w = 36$. Divide by $6$: $w = 6$ weeks. Check: $6(6) + 12 = 36 + 12 = 48$ ✓',
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
    topicSlug: 'solving-multi-step-equations',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## 🏆 Putting It All Together

You can now solve equations that take several steps. Here's the game plan to lock it in:

| Step | What To Do | Why |
|------|-----------|-----|
| **1. Simplify** | Distribute parentheses, combine like terms | Clears clutter so you can see the equation |
| **2. Undo $+$ / $-$** | Add or subtract on **both** sides | Reverse PEMDAS: addition comes last to build, so undo it first |
| **3. Undo $\\times$ / $\\div$** | Multiply or divide **both** sides | Isolates the variable completely |
| **4. Check** | Substitute your answer back in | Catches sign and arithmetic mistakes |

**Two mistakes to avoid:**

- **Forgetting "both sides."** The equation is a balanced scale ⚖️ — change one side, change the other.
- **Dropping a negative sign** when distributing, like $-3(x - 4) = -3x + 12$. Distribute the negative to **every** term inside.`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge: Mixed Practice 🎓

These mix everything together — distributing, two-step solving, and checking. Take your time!`,
        exercise: {
          questions: [
            {
              question: 'Solve for $x$: $4(x + 1) - 6 = 14$',
              options: ['$x = 4$', '$x = 5$', '$x = 3$', '$x = 6$'],
              correctAnswer: 0,
              explanation:
                'Distribute: $4x + 4 - 6 = 14$, which simplifies to $4x - 2 = 14$. Add $2$: $4x = 16$. Divide by $4$: $x = 4$. Check: $4(4 + 1) - 6 = 4(5) - 6 = 20 - 6 = 14$ ✓',
            },
            {
              question:
                'A student solves $-2(x - 3) = 8$ and gets $x = 7$. What mistake did they most likely make?',
              options: [
                'Nothing — $x = 7$ is correct',
                'They forgot to distribute the negative sign, which should give $x = -1$',
                'They should have added instead, getting $x = 11$',
                'The answer should be $x = 5$',
              ],
              correctAnswer: 1,
              explanation:
                'Distributing the negative gives $-2x + 6 = 8$. Subtract $6$: $-2x = 2$. Divide by $-2$: $x = -1$. The student likely wrote $-2x - 6$ instead of $-2x + 6$. Check: $-2(-1 - 3) = -2(-4) = 8$ ✓',
            },
          ],
        },
      },
    ],
  },
]
