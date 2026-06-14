import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'solving-proportions-grade7',
    sections: [
      {
        id: 'solving-proportions-grade7-p1-intro',
        type: 'text' as const,
        content: `
# ⚖️ Solving Proportions

**Part 1 of 5 — Concept Introduction**

Imagine you have a recipe that serves $4$ people, but tonight $8$ people are coming for dinner. How much of each ingredient do you need? Or you are looking at a map where $1$ inch stands for $50$ miles — how far apart are two cities that are $3$ inches apart on the map?

The math tool that answers **all** of these questions is the **proportion**.

## What Is a Proportion?

A **proportion** is an equation that says **two ratios are equal**:

$$\\frac{a}{b} = \\frac{c}{d}$$

You read this as "$a$ is to $b$ as $c$ is to $d$." Both fractions describe the *same relationship*, just with different numbers.

**Example:** $\\dfrac{1}{2} = \\dfrac{3}{6}$ is a true proportion, because both fractions are equal to one-half.
    `
      },
      {
        id: 'solving-proportions-grade7-p1-cross-mult',
        type: 'text' as const,
        content: `
## Cross Multiplication ✖️

Most proportions have a **missing number** — usually written as $x$. To find it, we use a trick called **cross multiplication**.

When two ratios are equal, the **diagonal products** are equal too:

$$\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad a \\times d = b \\times c$$

You multiply along each diagonal (corner to opposite corner) and set the two products equal.

| Step | What You Do |
|------|-------------|
| 1. Set up | Write the proportion $\\frac{a}{b} = \\frac{c}{d}$ |
| 2. Cross multiply | Multiply the diagonals: $a \\times d$ and $b \\times c$ |
| 3. Set equal | Write $a \\times d = b \\times c$ |
| 4. Solve | Divide both sides to get $x$ by itself |

The two diagonals form a little "X" across the equal sign — that is why it is called *cross* multiplication.
    `
      },
      {
        id: 'solving-proportions-grade7-p1-example',
        type: 'text' as const,
        content: `
## A First Worked Example 📝

Let's solve for $x$ in this proportion:

$$\\frac{3}{4} = \\frac{x}{12}$$

**Step 1 — Cross multiply** the diagonals. The $3$ pairs with the $12$, and the $4$ pairs with the $x$:

$$3 \\times 12 = 4 \\times x$$

**Step 2 — Multiply** the known numbers:

$$36 = 4x$$

**Step 3 — Solve** by dividing both sides by $4$:

$$x = \\frac{36}{4} = 9$$

So $x = 9$. ✅

**Check it!** Substitute back in: $\\dfrac{3}{4} = \\dfrac{9}{12}$. Both fractions reduce to $\\dfrac{3}{4}$, so our answer is correct.
    `
      },
      {
        id: 'solving-proportions-grade7-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand what cross multiplication does.
    `,
        exercise: {
          questions: [
            {
              question: 'When you cross multiply the proportion $\\frac{2}{5} = \\frac{x}{15}$, which equation do you get?',
              options: [
                '$2 \\times 15 = 5 \\times x$',
                '$2 \\times 5 = 15 \\times x$',
                '$2 \\times x = 5 \\times 15$',
                '$5 \\times 15 = 2 \\times x$'
              ],
              correctAnswer: 0,
              explanation: 'Cross multiplication multiplies along the diagonals: the top-left $2$ pairs with the bottom-right $15$, and the bottom-left $5$ pairs with the top-right $x$. That gives $2 \\times 15 = 5 \\times x$.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'solving-proportions-grade7',
    sections: [
      {
        id: 'solving-proportions-grade7-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's walk through two complete examples, one careful step at a time.

## Example 1: Missing number on the bottom

$$\\frac{5}{x} = \\frac{20}{12}$$

**Step 1 — Cross multiply** the diagonals ($5$ with $12$, and $x$ with $20$):

$$5 \\times 12 = x \\times 20$$

**Step 2 — Multiply** the known numbers:

$$60 = 20x$$

**Step 3 — Solve** by dividing both sides by $20$:

$$x = \\frac{60}{20} = 3$$

So $x = 3$. **Check:** $\\dfrac{5}{3} = \\dfrac{20}{12}$? Yes — $\\dfrac{20}{12}$ reduces to $\\dfrac{5}{3}$. ✅
    `
      },
      {
        id: 'solving-proportions-grade7-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: A bigger proportion

$$\\frac{x}{6} = \\frac{15}{18}$$

**Step 1 — Cross multiply** ($x$ with $18$, and $6$ with $15$):

$$x \\times 18 = 6 \\times 15$$

**Step 2 — Multiply** the right side:

$$18x = 90$$

**Step 3 — Solve** by dividing both sides by $18$:

$$x = \\frac{90}{18} = 5$$

So $x = 5$. **Check:** $\\dfrac{5}{6} = \\dfrac{15}{18}$? Yes — $\\dfrac{15}{18}$ reduces to $\\dfrac{5}{6}$. ✅

**The pattern is always the same:** cross multiply, then divide to get $x$ alone.
    `
      },
      {
        id: 'solving-proportions-grade7-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve the proportion $\\dfrac{4}{6} = \\dfrac{x}{9}$ step by step.

1) Cross multiply the known numbers $4$ and $9$. What is $4 \\times 9$? (Type a single number.)

2) Your equation is now $36 = 6x$. To solve, divide $36$ by $6$. What is $x$? (Type a single number.)

3) Check your answer: does $\\dfrac{4}{6} = \\dfrac{6}{9}$? Type **yes** or **no**.
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '6', 'yes'],
          hint1: 'Cross multiply means multiply the diagonals. The $4$ on top-left pairs with the $9$ on bottom-right: $4 \\times 9$.',
          hint2: 'After cross multiplying you get $36 = 6x$. Divide both sides by $6$ to get $x$ by itself: $36 \\div 6$.',
          explanation: 'Cross multiply: $4 \\times 9 = 36$, so $36 = 6x$. Divide by $6$: $x = 6$. Checking, $\\frac{4}{6}$ and $\\frac{6}{9}$ both reduce to $\\frac{2}{3}$, so the answer is **yes** — it is a true proportion.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'solving-proportions-grade7',
    sections: [
      {
        id: 'solving-proportions-grade7-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Cross multiply, then divide to find $x$. Work carefully and check each answer.
    `,
        exercise: {
          questions: [
            {
              question: 'Solve for $x$: $\\dfrac{x}{8} = \\dfrac{3}{4}$',
              options: [
                '$x = 6$',
                '$x = 12$',
                '$x = 2$',
                '$x = 24$'
              ],
              correctAnswer: 0,
              explanation: 'Cross multiply: $x \\times 4 = 8 \\times 3$, so $4x = 24$. Divide by $4$: $x = 6$.'
            },
            {
              question: 'Solve for $x$: $\\dfrac{2}{7} = \\dfrac{10}{x}$',
              options: [
                '$x = 35$',
                '$x = 20$',
                '$x = 5$',
                '$x = 70$'
              ],
              correctAnswer: 0,
              explanation: 'Cross multiply: $2 \\times x = 7 \\times 10$, so $2x = 70$. Divide by $2$: $x = 35$.'
            }
          ]
        }
      },
      {
        id: 'solving-proportions-grade7-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the solution to the proportion $\\dfrac{6}{9} = \\dfrac{x}{15}$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'After cross multiplying ($6 \\times 15$), the equation becomes:',
              options: ['$90 = 9x$', '$54 = 9x$', '$90 = 6x$', '$21 = 9x$']
            },
            {
              label: 'Solving $90 = 9x$ by dividing both sides by $9$ gives:',
              options: ['$x = 10$', '$x = 9$', '$x = 81$', '$x = 15$']
            }
          ],
          correctAnswers: ['$90 = 9x$', '$x = 10$'],
          hint1: 'Cross multiply the diagonals: $6 \\times 15 = 90$, which equals $9 \\times x$. Then divide $90$ by $9$ to get $x$.',
          explanation: 'Cross multiply: $6 \\times 15 = 90$ and $9 \\times x = 9x$, so $90 = 9x$. Divide both sides by $9$: $x = 10$. Check: $\\frac{6}{9}$ and $\\frac{10}{15}$ both reduce to $\\frac{2}{3}$. ✅'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'solving-proportions-grade7',
    sections: [
      {
        id: 'solving-proportions-grade7-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Proportions show up everywhere in real life. The trick to word problems is **setting up the proportion correctly**: keep the *same kind of thing* on the same level in both fractions.

## Recipe Scaling 🍪

A cookie recipe uses $2$ cups of flour to make $24$ cookies. How much flour do you need to make $60$ cookies?

**Step 1 — Set up** the proportion, keeping **flour over cookies** on both sides:

$$\\frac{2 \\text{ cups}}{24 \\text{ cookies}} = \\frac{x \\text{ cups}}{60 \\text{ cookies}}$$

**Step 2 — Cross multiply:** $2 \\times 60 = 24 \\times x$, so $120 = 24x$.

**Step 3 — Solve:** $x = \\dfrac{120}{24} = 5$ cups of flour. 🧁

## Where Else Are Proportions Used?

- **Scale drawings & maps** — $1$ inch represents $50$ real miles
- **Recipe conversions** — doubling or tripling a recipe
- **Unit conversions** — changing feet to inches, or dollars to euros
- **Similar figures** — shapes with matching shape but different size

> **Tip:** Always label your fractions (like "cups over cookies") so the matching units line up on top and bottom.
    `
      },
      {
        id: 'solving-proportions-grade7-p4-input',
        type: 'input-boxes' as const,
        content: `
**Map Distance Problem** 🗺️

On a map, $1$ inch represents $50$ miles. Two cities are $4$ inches apart on the map. Set up and solve the proportion $\\dfrac{1}{50} = \\dfrac{4}{x}$ to find the real distance.

1) Cross multiply: what is $1 \\times x$ equal to? Compute $50 \\times 4$. (Type a single number.)

2) So $x =$ ? This is the real distance in miles. (Type a single number.)

3) If two other cities were $3$ inches apart, how many real miles is that ($3 \\times 50$)? (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['200', '200', '150'],
          hint1: 'Cross multiply $\\frac{1}{50} = \\frac{4}{x}$: that gives $1 \\times x = 50 \\times 4$, so $x = 50 \\times 4$.',
          hint2: 'Since $1$ inch is $50$ miles, multiply the number of inches by $50$ to get real miles. For $3$ inches, compute $3 \\times 50$.',
          explanation: 'Cross multiplying $\\frac{1}{50} = \\frac{4}{x}$ gives $x = 50 \\times 4 = 200$ miles. For $3$ inches, $3 \\times 50 = 150$ miles. Each inch on the map adds $50$ real miles.'
        }
      },
      {
        id: 'solving-proportions-grade7-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Application Problem** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A car travels $90$ miles using $3$ gallons of gas. At the same rate, how many miles can it travel on $7$ gallons? (Hint: solve $\\frac{90}{3} = \\frac{x}{7}$.)',
              options: ['$210$ miles', '$270$ miles', '$30$ miles', '$630$ miles'],
              correctAnswer: 0,
              explanation: 'Cross multiply $\\frac{90}{3} = \\frac{x}{7}$: $90 \\times 7 = 3 \\times x$, so $630 = 3x$ and $x = 210$ miles.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'solving-proportions-grade7',
    sections: [
      {
        id: 'solving-proportions-grade7-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything about solving proportions in one place.

## Quick Summary Table

| Idea | What It Means | Example |
|------|---------------|---------|
| **Proportion** | Two equal ratios | $\\frac{a}{b} = \\frac{c}{d}$ |
| **Cross multiply** | Multiply the diagonals | $a \\times d = b \\times c$ |
| **Solve for $x$** | Divide to get $x$ alone | $36 = 4x \\Rightarrow x = 9$ |
| **Check** | Substitute back in | $\\frac{3}{4} = \\frac{9}{12}$ ✓ |
| **Word problems** | Match units top & bottom | $\\frac{\\text{cups}}{\\text{cookies}}$ |

**Remember the 3 steps:**
1. **Cross multiply** the diagonals and set the products equal.
2. **Solve** by dividing both sides so $x$ is by itself.
3. **Check** by substituting your answer back into the proportion.

Proportions help with **maps**, **recipes**, **unit conversions**, and **similar figures**. Now try these mixed challenge problems! 🎯
    `
      },
      {
        id: 'solving-proportions-grade7-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix every idea together. Cross multiply, solve, and check carefully!
    `,
        exercise: {
          questions: [
            {
              question: 'Solve for $x$: $\\dfrac{x}{20} = \\dfrac{9}{12}$',
              options: [
                '$x = 15$',
                '$x = 12$',
                '$x = 18$',
                '$x = 27$'
              ],
              correctAnswer: 0,
              explanation: 'Cross multiply: $x \\times 12 = 20 \\times 9$, so $12x = 180$. Divide by $12$: $x = 15$.'
            },
            {
              question: 'A photo that is $4$ inches wide and $6$ inches tall is enlarged so it is $10$ inches wide. Using $\\frac{4}{6} = \\frac{10}{x}$, how tall is the enlarged photo?',
              options: [
                '$15$ inches',
                '$12$ inches',
                '$8$ inches',
                '$20$ inches'
              ],
              correctAnswer: 0,
              explanation: 'Cross multiply $\\frac{4}{6} = \\frac{10}{x}$: $4 \\times x = 6 \\times 10$, so $4x = 60$ and $x = 15$ inches. The enlarged photo keeps the same shape, just bigger.'
            }
          ]
        }
      }
    ]
  }
]
