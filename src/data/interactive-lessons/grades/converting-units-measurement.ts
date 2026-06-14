import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // =====================================================================
  // PART 1 — Concept Introduction
  // =====================================================================
  {
    topicSlug: 'converting-units-measurement',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Why Do We Convert Units? 📏

Sometimes the same amount can be written using **different units**. Converting just means **changing the unit without changing how much there really is**.

Think about these everyday questions:

- Your height: $4$ feet = how many **inches**?
- A recipe: $2$ cups = how many **pints**?
- A puppy's weight: $5$ pounds = how many **ounces**?

In every case the *real amount stays the same* — only the **unit** changes. A board that is $3$ feet long is the **exact same length** as a board that is $36$ inches long!`
      },
      {
        id: 'p1-length-units',
        type: 'text',
        content: `## The Length Units to Remember

For **customary length** (the system we use in the U.S.), memorize these key facts:

| Bigger unit | equals | Smaller unit |
| --- | --- | --- |
| $1$ foot (ft) | $=$ | $12$ inches (in) |
| $1$ yard (yd) | $=$ | $3$ feet (ft) |
| $1$ yard (yd) | $=$ | $36$ inches (in) |
| $1$ mile (mi) | $=$ | $5{,}280$ feet (ft) |

Notice the units go from **biggest** (mile) down to **smallest** (inch):

**mile → yard → foot → inch**

The further right you go, the **smaller** the unit — so it takes **more** of them to fill the same space. That is the big idea behind every conversion!`
      },
      {
        id: 'p1-rules',
        type: 'text',
        content: `## The Golden Rule: Multiply or Divide? 🔑

There are only **two directions** you can convert, and each has its own rule.

**Going from a BIGGER unit to a SMALLER unit → MULTIPLY**
- Small units are *tiny*, so you need *lots* of them.
- More units = bigger number, and multiplying makes numbers bigger. ✓

**Example:** $3$ feet $=$ ? inches
- $1$ foot $= 12$ inches, so $3 \\times 12 = 36$ inches ✓

**Going from a SMALLER unit to a BIGGER unit → DIVIDE**
- Big units are *roomy*, so you need *fewer* of them.
- Fewer units = smaller number, and dividing makes numbers smaller. ✓

**Example:** $24$ inches $=$ ? feet
- $12$ inches $= 1$ foot, so $24 \\div 12 = 2$ feet ✓

> **Quick check:** Did your answer get *bigger* when you switched to a *smaller* unit? Good — that's exactly right!`
      },
      {
        id: 'p1-check',
        type: 'multiple-choice',
        content: `## Concept Check ✅

Let's make sure the **multiply or divide** idea makes sense before we practice.`,
        exercise: {
          questions: [
            {
              question: 'You want to change a measurement from **feet** into **inches**. Inches are *smaller* than feet. What should you do?',
              options: [
                'Multiply, because you are going from a bigger unit to a smaller unit',
                'Divide, because you are going from a bigger unit to a smaller unit',
                'Subtract 12 from the number of feet',
                'Add 12 to the number of feet'
              ],
              correctAnswer: 0,
              explanation: 'Going from a bigger unit (feet) to a smaller unit (inches) means you need MORE pieces, so you multiply. For example, $2 \\times 12 = 24$ inches.'
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
    topicSlug: 'converting-units-measurement',
    sections: [
      {
        id: 'p2-worked-length',
        type: 'text',
        content: `## Worked Examples: Step by Step ✏️

Let's slow down and walk through conversions **one step at a time**. Each example follows the same plan:

1. **Find** the matching fact ($1$ big unit $=$ how many small units).
2. **Decide** multiply (bigger → smaller) or divide (smaller → bigger).
3. **Compute** and label your answer with the new unit.

---

**Example 1 — Yards to feet (bigger → smaller, so multiply)**

Convert $5$ yards into feet.

- Fact: $1$ yard $= 3$ feet
- Direction: yards are bigger than feet → **multiply**
- $5 \\times 3 = 15$ feet ✓

---

**Example 2 — Inches to feet (smaller → bigger, so divide)**

Convert $48$ inches into feet.

- Fact: $12$ inches $= 1$ foot
- Direction: inches are smaller than feet → **divide**
- $48 \\div 12 = 4$ feet ✓`
      },
      {
        id: 'p2-worked-weight',
        type: 'text',
        content: `## Weight Conversions ⚖️

For **weight**, the facts you need are:

| Bigger unit | equals | Smaller unit |
| --- | --- | --- |
| $1$ pound (lb) | $=$ | $16$ ounces (oz) |
| $1$ ton (T) | $=$ | $2{,}000$ pounds (lb) |

**Example 3 — Pounds to ounces (bigger → smaller, multiply)**

Convert $4$ pounds into ounces.

- Fact: $1$ pound $= 16$ ounces
- $4 \\times 16 = 64$ ounces ✓

**Example 4 — Pounds to tons (smaller → bigger, divide)**

Convert $6{,}000$ pounds into tons.

- Fact: $2{,}000$ pounds $= 1$ ton
- $6{,}000 \\div 2{,}000 = 3$ tons ✓

Now you try a few in the boxes below!`
      },
      {
        id: 'p2-input',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Boxes ✍️

Use the facts $1$ foot $= 12$ inches, $1$ yard $= 3$ feet, and $1$ pound $= 16$ ounces.

**Box 1:** $6$ feet $=$ ? inches
**Box 2:** $12$ feet $=$ ? yards
**Box 3:** $2$ pounds $=$ ? ounces`,
        exercise: {
          boxes: 3,
          correctAnswers: ['72', '4', '32'],
          hint1: 'For Box 1, feet → inches is bigger → smaller, so multiply by $12$. For Box 2, feet → yards is smaller → bigger, so divide by $3$.',
          hint2: 'Box 1: $6 \\times 12$. Box 2: $12 \\div 3$. Box 3: $2 \\times 16$.',
          explanation: 'Box 1: $6 \\times 12 = 72$ inches. Box 2: $12 \\div 3 = 4$ yards. Box 3: $2 \\times 16 = 32$ ounces. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 3 — Guided Practice
  // =====================================================================
  {
    topicSlug: 'converting-units-measurement',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Remember the golden rule: **bigger → smaller = multiply**, **smaller → bigger = divide**.`,
        exercise: {
          questions: [
            {
              question: 'Convert $3$ yards into inches. (Hint: $1$ yard $= 36$ inches.)',
              options: [
                '$12$ inches',
                '$39$ inches',
                '$108$ inches',
                '$9$ inches'
              ],
              correctAnswer: 2,
              explanation: 'Yards are bigger than inches, so multiply: $3 \\times 36 = 108$ inches. ✓'
            },
            {
              question: 'Convert $80$ ounces into pounds. (Hint: $16$ ounces $= 1$ pound.)',
              options: [
                '$5$ pounds',
                '$96$ pounds',
                '$64$ pounds',
                '$1{,}280$ pounds'
              ],
              correctAnswer: 0,
              explanation: 'Ounces are smaller than pounds, so divide: $80 \\div 16 = 5$ pounds. ✓'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Pick the Right Operation 🔽

For each conversion, choose whether you should **multiply** or **divide**, then finish the answer.`,
        exercise: {
          dropdowns: [
            {
              label: 'To change $9$ feet into yards you should…',
              options: ['multiply', 'divide']
            },
            {
              label: '$9$ feet $=$ ? yards (use $3$ feet $= 1$ yard)',
              options: ['3', '6', '12', '27']
            }
          ],
          correctAnswers: ['divide', '3'],
          hint1: 'Feet are smaller than yards, so you are going from a smaller unit to a bigger unit. That means divide by $3$.',
          explanation: 'Feet → yards is smaller → bigger, so divide. Then $9 \\div 3 = 3$ yards. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 4 — Application & Word Problems
  // =====================================================================
  {
    topicSlug: 'converting-units-measurement',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Conversions in Real Life 🍳

Converting units shows up everywhere — in the **kitchen**, in **sports**, and even when you **build** something. For these problems we will use the **capacity (liquid)** facts:

| Bigger unit | equals | Smaller unit |
| --- | --- | --- |
| $1$ cup (c) | $=$ | $8$ fluid ounces (fl oz) |
| $1$ pint (pt) | $=$ | $2$ cups (c) |
| $1$ quart (qt) | $=$ | $2$ pints (pt) |
| $1$ quart (qt) | $=$ | $4$ cups (c) |
| $1$ gallon (gal) | $=$ | $4$ quarts (qt) |

**A memory trick — "G-Q-P-C"** (Gallon, Quart, Pint, Cup):
- Going **down** the list (big → small) → **multiply**
- Going **up** the list (small → big) → **divide**

**Story example:** Maria has a $2$-gallon jug of lemonade for a picnic. How many quarts is that?
- Gallons → quarts is big → small, so multiply: $2 \\times 4 = 8$ quarts. That's enough for everyone! 🍋`
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Recipe Time 🥤

A juice recipe uses these amounts. Convert each one using the capacity facts above.

**Box 1:** A pitcher holds $3$ quarts. How many **pints** is that? ($1$ qt $= 2$ pt)
**Box 2:** A bottle holds $4$ cups. How many **fluid ounces** is that? ($1$ c $= 8$ fl oz)
**Box 3:** A cooler holds $12$ quarts. How many **gallons** is that? ($4$ qt $= 1$ gal)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '32', '3'],
          hint1: 'Quarts → pints and cups → fluid ounces both go big → small, so multiply. Quarts → gallons goes small → big, so divide.',
          hint2: 'Box 1: $3 \\times 2$. Box 2: $4 \\times 8$. Box 3: $12 \\div 4$.',
          explanation: 'Box 1: $3 \\times 2 = 6$ pints. Box 2: $4 \\times 8 = 32$ fluid ounces. Box 3: $12 \\div 4 = 3$ gallons. ✓'
        }
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Word Problem Challenge 🏀`,
        exercise: {
          questions: [
            {
              question: 'A water cooler at a basketball game holds $5$ gallons. The coach pours it into quart-sized bottles. How many **quart bottles** can be filled? (Use $1$ gallon $= 4$ quarts.)',
              options: [
                '$9$ bottles',
                '$20$ bottles',
                '$1$ bottle',
                '$54$ bottles'
              ],
              correctAnswer: 1,
              explanation: 'Gallons are bigger than quarts, so multiply: $5 \\times 4 = 20$ quart bottles. ✓'
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
    topicSlug: 'converting-units-measurement',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything in One Place 🌟

You can now convert **length**, **weight**, and **capacity**! Here is a summary table of the most important facts:

| Type | Conversion fact |
| --- | --- |
| Length | $1$ foot $= 12$ inches |
| Length | $1$ yard $= 3$ feet |
| Length | $1$ mile $= 5{,}280$ feet |
| Weight | $1$ pound $= 16$ ounces |
| Weight | $1$ ton $= 2{,}000$ pounds |
| Capacity | $1$ cup $= 8$ fluid ounces |
| Capacity | $1$ pint $= 2$ cups |
| Capacity | $1$ quart $= 2$ pints |
| Capacity | $1$ gallon $= 4$ quarts |

**The one rule that ties it all together:**

- **Bigger unit → smaller unit:** MULTIPLY (you need more pieces)
- **Smaller unit → bigger unit:** DIVIDE (you need fewer pieces)

Keep that rule in your back pocket and you can convert *any* of these units. 💪`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

These mix together length, weight, and capacity. Take your time and decide **multiply or divide** first!`,
        exercise: {
          questions: [
            {
              question: 'Convert $2$ pints into cups, then tell how many cups there are. (Use $1$ pint $= 2$ cups.)',
              options: [
                '$1$ cup',
                '$2$ cups',
                '$4$ cups',
                '$8$ cups'
              ],
              correctAnswer: 2,
              explanation: 'Pints are bigger than cups, so multiply: $2 \\times 2 = 4$ cups. ✓'
            },
            {
              question: 'A delivery truck carries $3$ tons of bricks. How many **pounds** is that? (Use $1$ ton $= 2{,}000$ pounds.)',
              options: [
                '$600$ pounds',
                '$2{,}003$ pounds',
                '$5{,}000$ pounds',
                '$6{,}000$ pounds'
              ],
              correctAnswer: 3,
              explanation: 'Tons are bigger than pounds, so multiply: $3 \\times 2{,}000 = 6{,}000$ pounds. ✓'
            }
          ]
        }
      }
    ]
  }
]
