import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // =====================================================================
  // PART 1 — Concept Introduction
  // =====================================================================
  {
    topicSlug: 'volume-cylinders-cones-spheres',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## What Is Volume? 🧊

**Volume** measures the amount of space *inside* a 3D shape. You can think of it as:

- How much **liquid** the shape can hold
- How many **unit cubes** fit inside
- The **capacity** of the shape

Because volume fills up 3D space, we always measure it in **cubic units**: $\\text{cm}^3$, $\\text{in}^3$, $\\text{m}^3$, or $\\text{ft}^3$.

Curved 3D shapes are everywhere in real life:
- A **soda can** is a cylinder 🥤
- An **ice cream cone** is a cone 🍦
- A **basketball** is a sphere 🏀

Once you learn three formulas, you can find the volume of all of them. The secret is that they're all connected through the **circle area** $\\pi r^2$.`
      },
      {
        id: 'p1-cylinder',
        type: 'text',
        content: `## Volume of a Cylinder 🥫

A **cylinder** has two circular bases and a curved side, like a soda can.

**Formula:**

$$V = \\pi r^2 h$$

Where:
- $r$ = radius of the circular base
- $h$ = height of the cylinder
- $\\pi \\approx 3.14$ (or use your calculator's $\\pi$ button)

**Why does it work?** Volume of a cylinder is just the **area of the base** times the **height**:
- Base area (a circle) $= \\pi r^2$
- Multiply by height: $\\pi r^2 \\times h = \\pi r^2 h$

**Worked Example.** Find the volume of a cylinder with radius $3$ cm and height $10$ cm. Use $\\pi \\approx 3.14$.

$$V = \\pi r^2 h = \\pi \\times (3)^2 \\times 10 = \\pi \\times 9 \\times 10 = 90\\pi$$

$$V \\approx 90 \\times 3.14 \\approx 282.6 \\text{ cm}^3$$

> **Watch out!** Square the radius **before** multiplying by the height. The exponent only touches the $r$.`
      },
      {
        id: 'p1-cone-sphere',
        type: 'text',
        content: `## Cones and Spheres 🍦🏀

Two more shapes complete the set. Notice how each formula is built from $\\pi r^2$ or $r^3$.

| Shape | Formula | Key Idea |
| --- | --- | --- |
| **Cylinder** | $V = \\pi r^2 h$ | base area $\\times$ height |
| **Cone** | $V = \\frac{1}{3}\\pi r^2 h$ | exactly $\\frac{1}{3}$ of a matching cylinder |
| **Sphere** | $V = \\frac{4}{3}\\pi r^3$ | depends only on the radius |

**Cone insight:** A cone holds exactly **one-third** of a cylinder with the *same* base and *same* height. That's where the $\\frac{1}{3}$ comes from!

**Sphere insight:** A sphere has *no* height to plug in — its size depends only on the radius. Notice the radius is **cubed** ($r^3$, not $r^2$), because a sphere curves in every direction.

**Quick cone example.** Cone with $r = 5$ in and $h = 9$ in:
$$V = \\frac{1}{3}\\pi (5)^2 (9) = \\frac{1}{3}\\pi (25)(9) = \\frac{1}{3}\\pi (225) = 75\\pi \\approx 235.5 \\text{ in}^3$$`
      },
      {
        id: 'p1-check',
        type: 'multiple-choice',
        content: `## Concept Check ✅

Let's make sure the big ideas are clear before moving on.`,
        exercise: {
          questions: [
            {
              question: 'A cone and a cylinder have the **same radius** and the **same height**. How does the cone\'s volume compare to the cylinder\'s?',
              options: [
                'The cone holds 3 times as much as the cylinder',
                'The cone holds exactly $\\frac{1}{3}$ as much as the cylinder',
                'They hold exactly the same amount',
                'The cone holds $\\frac{1}{2}$ as much as the cylinder'
              ],
              correctAnswer: 1,
              explanation: 'A cone\'s formula is $V = \\frac{1}{3}\\pi r^2 h$, which is exactly $\\frac{1}{3}$ of the cylinder\'s $V = \\pi r^2 h$ when they share the same base and height.'
            }
          ]
        }
      }
    ]
  },

  // =====================================================================
  // PART 2 — Worked Examples
  // =====================================================================
  {
    topicSlug: 'volume-cylinders-cones-spheres',
    sections: [
      {
        id: 'p2-cylinder-diameter',
        type: 'text',
        content: `## Worked Example: A Water Tank 💧

A cylindrical water tank has **diameter** $8$ ft and **height** $12$ ft. What is its volume? Use $\\pi \\approx 3.14$.

**Step 1 — Find the radius.** The problem gives the *diameter*, but the formula needs the *radius*. The radius is half the diameter:
$$r = \\frac{8}{2} = 4 \\text{ ft}$$

**Step 2 — Plug into the formula.**
$$V = \\pi r^2 h = \\pi (4)^2 (12)$$

**Step 3 — Simplify in order.** Square first, then multiply:
$$V = \\pi (16)(12) = 192\\pi$$

**Step 4 — Estimate with $\\pi \\approx 3.14$.**
$$V \\approx 192 \\times 3.14 \\approx 603.2 \\text{ ft}^3$$

> **Answer:** $192\\pi \\text{ ft}^3$, or about $603 \\text{ ft}^3$. The most common mistake is forgetting to cut the diameter in half — don't fall for it!`
      },
      {
        id: 'p2-sphere',
        type: 'text',
        content: `## Worked Example: A Sphere 🌐

Find the volume of a sphere with radius $3$ cm. Use $\\pi \\approx 3.14$.

**Step 1 — Write the formula.**
$$V = \\frac{4}{3}\\pi r^3$$

**Step 2 — Cube the radius.** Remember, $r^3 = r \\times r \\times r$:
$$3^3 = 3 \\times 3 \\times 3 = 27$$

**Step 3 — Multiply.**
$$V = \\frac{4}{3}\\pi (27) = \\frac{4 \\times 27}{3}\\pi = \\frac{108}{3}\\pi = 36\\pi$$

**Step 4 — Estimate.**
$$V \\approx 36 \\times 3.14 \\approx 113.04 \\text{ cm}^3$$

> **Answer:** $36\\pi \\text{ cm}^3$, or about $113 \\text{ cm}^3$. A friendly trick: dividing $27$ by $3$ first ($= 9$) keeps the numbers small: $4 \\times 9 = 36$.`
      },
      {
        id: 'p2-input',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Boxes ✍️

Find the volume of a **cone** with radius $2$ cm and height $12$ cm. Use $\\pi \\approx 3.14$.

Leave Boxes 1 and 2 as **exact** numbers (no $\\pi$). For Box 3, write the volume as the number in front of $\\pi$ (the "$\\pi$-coefficient").

**Box 1:** The value of $r^2$ (that is, $2^2$)
**Box 2:** The value of $r^2 \\times h$ (multiply Box 1 by the height $12$)
**Box 3:** The volume as a coefficient of $\\pi$ — take $\\frac{1}{3}$ of Box 2`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '48', '16'],
          hint1: 'Box 1: square the radius, $2 \\times 2$. Box 2: multiply that by the height $12$. Box 3: take one-third of Box 2.',
          hint2: 'Box 1: $2^2 = 4$. Box 2: $4 \\times 12 = 48$. Box 3: $\\frac{1}{3} \\times 48$.',
          explanation: 'Box 1: $r^2 = 2^2 = 4$. Box 2: $4 \\times 12 = 48$. Box 3: $V = \\frac{1}{3}\\pi (48) = 16\\pi$, so the coefficient is $16$. (That\'s about $50.24 \\text{ cm}^3$.) ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 3 — Guided Practice
  // =====================================================================
  {
    topicSlug: 'volume-cylinders-cones-spheres',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Pick the right formula, plug in carefully, and simplify. Answers are left in terms of $\\pi$.`,
        exercise: {
          questions: [
            {
              question: 'Find the volume of a **cylinder** with radius $2$ m and height $7$ m.',
              options: [
                '$14\\pi$ $m^{3}$',
                '$28\\pi$ $m^{3}$',
                '$56\\pi$ $m^{3}$',
                '$98\\pi$ $m^{3}$'
              ],
              correctAnswer: 1,
              explanation: '$V = \\pi r^2 h = \\pi (2)^2 (7) = \\pi (4)(7) = 28\\pi$ $m^{3}$. Square the radius first, then multiply by the height.'
            },
            {
              question: 'Find the volume of a **sphere** with radius $3$ in.',
              options: [
                '$9\\pi$ $in^{3}$',
                '$27\\pi$ $in^{3}$',
                '$36\\pi$ $in^{3}$',
                '$108\\pi$ $in^{3}$'
              ],
              correctAnswer: 2,
              explanation: '$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi (27) = 36\\pi$ $in^{3}$. Cube the radius, then take $\\frac{4}{3}$ of it.'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Match the Shape to Its Formula 🔽

Choose the correct volume formula for each shape.`,
        exercise: {
          dropdowns: [
            {
              label: 'Volume of a cone…',
              options: ['$V = \\pi r^2 h$', '$V = \\frac{1}{3}\\pi r^2 h$', '$V = \\frac{4}{3}\\pi r^3$', '$V = \\frac{1}{2}\\pi r^2$']
            },
            {
              label: 'Volume of a sphere…',
              options: ['$V = \\frac{4}{3}\\pi r^3$', '$V = \\pi r^2 h$', '$V = \\frac{1}{3}\\pi r^2 h$', '$V = 4\\pi r^2$']
            }
          ],
          correctAnswers: ['$V = \\frac{1}{3}\\pi r^2 h$', '$V = \\frac{4}{3}\\pi r^3$'],
          hint1: 'A cone is $\\frac{1}{3}$ of a cylinder, so it uses $\\frac{1}{3}\\pi r^2 h$. A sphere has no height and uses $r$ cubed.',
          explanation: 'A cone uses $V = \\frac{1}{3}\\pi r^2 h$ (one-third of a cylinder). A sphere uses $V = \\frac{4}{3}\\pi r^3$ — notice the radius is cubed and there is no height. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 4 — Application & Word Problems
  // =====================================================================
  {
    topicSlug: 'volume-cylinders-cones-spheres',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Volume in the Real World 🌍

These formulas help people make real decisions about **capacity** — how much something holds.

**Example — a grain silo.** A farmer's cylindrical silo has radius $5$ m and height $14$ m. How much grain can it hold? Use $\\pi \\approx 3.14$.
- $V = \\pi r^2 h = \\pi (5)^2 (14) = \\pi (25)(14) = 350\\pi$
- $V \\approx 350 \\times 3.14 \\approx 1099 \\text{ m}^3$

So the silo holds about **$1{,}099 \\text{ m}^3$** of grain.

**Reading word problems carefully matters:**
- If a problem gives the **diameter**, cut it in half to get the **radius**.
- A "ball," "globe," or "marble" is a **sphere**.
- A "can," "tank," "pipe," or "drum" is a **cylinder**.
- A "funnel," "party hat," or "scoop holder" is a **cone**.

Now try a couple of real-world problems yourself!`
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Word Problem — Fill in the Boxes ✍️

A spherical bouncy ball has **diameter** $6$ cm. Find its volume in terms of $\\pi$.

**Box 1:** The **radius** of the ball in cm (half the diameter)
**Box 2:** The value of $r^3$ (cube your Box 1 answer)
**Box 3:** The volume as a coefficient of $\\pi$ — take $\\frac{4}{3}$ of Box 2`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '27', '36'],
          hint1: 'Box 1: the radius is half the diameter. Box 2: cube the radius, $r \\times r \\times r$. Box 3: multiply Box 2 by $\\frac{4}{3}$.',
          hint2: 'Box 1: $6 \\div 2$. Box 2: $3^3 = 3 \\times 3 \\times 3$. Box 3: $\\frac{4}{3} \\times 27 = \\frac{4 \\times 27}{3}$.',
          explanation: 'Box 1: $r = 6 \\div 2 = 3$ cm. Box 2: $r^3 = 3^3 = 27$. Box 3: $V = \\frac{4}{3}\\pi (27) = 36\\pi$, so the coefficient is $36$. (That\'s about $113 \\text{ cm}^3$.) ✓'
        }
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Application Question 🧮

Read carefully and choose the correct shape and formula.`,
        exercise: {
          questions: [
            {
              question: 'A paper cup shaped like a **cone** has radius $4$ cm and height $9$ cm. How much water can it hold (in terms of $\\pi$)?',
              options: [
                '$48\\pi$ $cm^{3}$',
                '$144\\pi$ $cm^{3}$',
                '$36\\pi$ $cm^{3}$',
                '$12\\pi$ $cm^{3}$'
              ],
              correctAnswer: 0,
              explanation: '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (4)^2 (9) = \\frac{1}{3}\\pi (16)(9) = \\frac{1}{3}\\pi (144) = 48\\pi$ $cm^{3}$.'
            }
          ]
        }
      }
    ]
  },

  // =====================================================================
  // PART 5 — Review & Challenge
  // =====================================================================
  {
    topicSlug: 'volume-cylinders-cones-spheres',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Summary: All Three Formulas 🎓

You can now find the volume of any cylinder, cone, or sphere. Here's everything in one place:

| Shape | Formula | What you need | Remember |
| --- | --- | --- | --- |
| **Cylinder** 🥫 | $V = \\pi r^2 h$ | radius and height | base area $\\times$ height |
| **Cone** 🍦 | $V = \\frac{1}{3}\\pi r^2 h$ | radius and height | $\\frac{1}{3}$ of a cylinder |
| **Sphere** 🏀 | $V = \\frac{4}{3}\\pi r^3$ | radius only | radius is **cubed** |

**Three habits that prevent mistakes:**
- **Diameter → radius.** If you're given the diameter, divide by $2$ first.
- **Exponent order.** Square (or cube) the radius *before* multiplying by anything else.
- **Right units.** Volume always ends in **cubic units** like $\\text{cm}^3$ or $\\text{ft}^3$.

The two final questions mix all three shapes — read carefully and pick the right formula each time!`
      },
      {
        id: 'p5-mc',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

Mix and match everything you've learned. Answers are in terms of $\\pi$.`,
        exercise: {
          questions: [
            {
              question: 'A cylinder and a cone both have radius $3$ cm and height $6$ cm. What is the **difference** between the cylinder\'s volume and the cone\'s volume?',
              options: [
                '$18\\pi$ $cm^{3}$',
                '$36\\pi$ $cm^{3}$',
                '$54\\pi$ $cm^{3}$',
                '$72\\pi$ $cm^{3}$'
              ],
              correctAnswer: 1,
              explanation: 'Cylinder: $\\pi (3)^2 (6) = 54\\pi$. Cone: $\\frac{1}{3}\\pi (3)^2 (6) = 18\\pi$. Difference: $54\\pi - 18\\pi = 36\\pi$ $cm^{3}$.'
            },
            {
              question: 'A sphere has radius $6$ in. What is its volume?',
              options: [
                '$72\\pi$ $in^{3}$',
                '$216\\pi$ $in^{3}$',
                '$288\\pi$ $in^{3}$',
                '$864\\pi$ $in^{3}$'
              ],
              correctAnswer: 2,
              explanation: '$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (6)^3 = \\frac{4}{3}\\pi (216) = 4 \\times 72\\,\\pi = 288\\pi$ $in^{3}$.'
            }
          ]
        }
      }
    ]
  }
]
