export const asvabArWholeNumberProblemsPart5Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn5-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 5 of 7 — Remainders, Rounding Up and Estimation**

### One division, three different answers

When a division doesn't come out even, the remainder forces a decision. The story decides, not the arithmetic.

A supply clerk has 230 bandage rolls. Every first-aid kit uses 12 rolls, and the rolls ship in boxes of 12.

$$230 \\div 12 = 19 \\text{ remainder } 2 \\qquad (12 \\times 19 = 228, \\; 230 - 228 = 2)$$

| The question | What it counts | Answer |
|:---|:---|:---:|
| How many boxes are needed to pack **all** 230 rolls? | Every roll needs a box, even the last 2 | **20** (round up) |
| How many **complete** kits can be made? | A kit with only 2 rolls isn't a kit | **19** (round down) |
| How many rolls are **left over** after making the kits? | The extra rolls | **2** (the remainder) |

Same numbers, three correct answers to three different questions. That is why you **read the last sentence first**.`
    },
    {
      id: 'arwn5-decide',
      type: 'text' as const,
      content: `## How to decide

| Question sounds like | Do this |
|:---|:---|
| How many buses, vans, boxes or trips are **needed** to carry or hold **all** of them? | **Round up**: one more for the leftovers |
| How many **full** or **complete** groups can be made? How many can you **buy** with this money? | **Round down**: drop the leftovers |
| How many are **left over**, **remain** or are **extra**? | The **remainder** is the answer |

**Worked Example 1 — Bus capacity.** 140 recruits are going to a training site. Each bus holds 44 people. How many buses are needed?

- $140 \\div 44$: $3 \\times 44 = 132$, and $140 - 132 = 8$, so 3 remainder 8.
- 3 buses would leave 8 recruits behind. You need **4 buses**.
- Check: $4 \\times 44 = 176$, which is enough room for 140. ✓

**Worked Example 2 — Spending money.** You have \\$75 to spend on notebooks that cost \\$8 each. How many can you buy?

- $75 \\div 8$: $9 \\times 8 = 72$, and $75 - 72 = 3$, so 9 remainder 3.
- The leftover \\$3 can't buy another notebook. You can buy **9**, with \\$3 left.

> **Key Fact:** A remainder never shows up as a decimal or a fraction in these answers. You can't rent part of a bus. Ask: *would the leftovers be stranded?* If yes, round up.`
    },
    {
      id: 'arwn5-estimate',
      type: 'text' as const,
      content: `## Estimate to eliminate, then check by multiplying back

### Compatible numbers

Round to numbers that are easy to work with **together**.

**Worked Example 3.** A unit buys 48 folding cots at \\$61 each. What is the total cost?

> \\$1,928  ·  \\$2,928  ·  \\$3,928  ·  \\$29,280

Estimate: $50 \\times 60 = 3{,}000$. Only \\$2,928 is anywhere close. You can answer without the full multiplication, though it's quick: $48 \\times 61 = 48 \\times 60 + 48 = 2{,}880 + 48 = 2{,}928$.

### Front-end estimation

Round each number to its leading digit's place, then add. For $412 + 389 + 276$: about $400 + 400 + 300 = 1{,}100$. The exact sum is 1,077, so any choice near 700 or 1,500 is out.

For division, pick a nearby number the divisor goes into evenly. $4{,}182 \\div 6$ is about $4{,}200 \\div 6 = 700$. The exact answer is 697.

### Multiply back to check

Every division can be checked with multiplication:

$$\\text{quotient} \\times \\text{divisor} + \\text{remainder} = \\text{number you started with}$$

For the bandages: $19 \\times 12 + 2 = 228 + 2 = 230$. ✓ For the cots: $697 \\times 6 = 4{,}182$. ✓ If the check fails, the slip is in your division, and you find it before you answer, not after.`
    },
    {
      id: 'arwn5-mc',
      type: 'multiple-choice' as const,
      content: '**Decide what the remainder means.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Vans that seat 12 passengers will take 75 people to a job fair. What is the fewest number of vans needed?',
            options: ['6', '3', '7', '900'],
            correctAnswer: 2,
            explanation: '$75 \\div 12 = 6$ remainder 3, because $6 \\times 12 = 72$. Six vans would leave 3 people behind, so round up to 7. The answer 6 rounds down and strands those 3 people, the answer 3 is the remainder itself, and 900 multiplies instead of dividing.'
          },
          {
            question: 'A crew has 200 feet of cable. Each connection uses 15 feet. How many complete connections can the crew make?',
            options: ['14', '13', '5', '185'],
            correctAnswer: 1,
            explanation: '$200 \\div 15 = 13$ remainder 5, because $15 \\times 13 = 195$. The leftover 5 feet can\'t make a full connection, so round down to 13. Rounding up to 14 would need 210 feet of cable, 5 is the leftover cable, and 185 subtracts one connection\'s worth instead of dividing.'
          },
          {
            question: 'A depot ships 2,976 boxes, split evenly among 8 trucks. How many boxes go on each truck?',
            options: ['362', '3,720', '2,968', '372'],
            correctAnswer: 3,
            explanation: 'Estimate: $3{,}000 \\div 8$ is about 375, which rules out 3,720 (a place-value slip) and 2,968 (subtracting 8 instead of dividing). Multiply back to choose between the other two: $372 \\times 8 = 2{,}976$ ✓, while $362 \\times 8 = 2{,}896$, so 362 is a slip in the middle digit.'
          }
        ]
      }
    },
    {
      id: 'arwn5-input',
      type: 'input-boxes' as const,
      content: `**Remainders in context.** ✍️

**1)** A food drive collected 340 cans. Each box holds 24 cans. How many boxes are needed to pack every can? (number only, in boxes)

**2)** A trainer has 100 resistance bands to share equally among 8 squads, giving each squad the same whole number of bands. How many bands are left over? (number only, in bands)

**3)** Movie tickets cost \\$11 each. How many tickets can you buy with \\$90? (number only, in tickets)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '4', '8'],
        hint1: '$24 \\times 14 = 336$. Are any cans left without a box?',
        hint2: '$8 \\times 12 = 96$. The question asks for what is left.',
        hint3: '$11 \\times 8 = 88$. Is there enough money for one more ticket?',
        explanation: '(1) $340 \\div 24 = 14$ remainder 4; the last 4 cans still need a box, so 15 boxes. (2) $100 \\div 8 = 12$ remainder 4, so 4 bands are left over. (3) $90 \\div 11 = 8$ remainder 2; the leftover \\$2 can\'t buy a ticket, so 8 tickets.'
      }
    },
    {
      id: 'arwn5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Round up, round down, or use the remainder?** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'How many 6-seat tables are needed so that all 50 guests have a seat?',
            options: ['round up', 'round down', 'use the remainder'],
            correctAnswer: 0
          },
          {
            label: 'How many \\$7 sandwiches can you buy with \\$40?',
            options: ['round up', 'round down', 'use the remainder'],
            correctAnswer: 1
          },
          {
            label: 'Sixty-two pencils are shared equally by 9 students. How many pencils are left over?',
            options: ['round up', 'round down', 'use the remainder'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['round up', 'round down', 'use the remainder'],
        hint1: 'If the leftover guests had no table, they would be standing.',
        hint2: 'Leftover money that can\'t buy a whole sandwich doesn\'t count.',
        hint3: '"Remain" asks for the leftovers themselves.',
        explanation: 'Tables: $50 \\div 6 = 8$ remainder 2, and the last 2 guests still need a table, so 9 tables (round up). Sandwiches: $40 \\div 7 = 5$ remainder 5, so 5 sandwiches (round down). Pencils: $62 \\div 9 = 6$ remainder 8, so 8 pencils remain (the remainder).'
      }
    },
    {
      id: 'arwn5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- The **story** decides what to do with a remainder
- Containers or trips needed to hold **all** of them: **round up**
- **Complete** groups, or how many you can **buy**: **round down**
- **Left over** or **remain**: the **remainder** is the answer
- Estimate with **compatible numbers** to eliminate choices, and **multiply back** to check a division

> **Up Next:** Part 6 — the traps the test sets on whole-number word problems, and how to manage your time.`
    }
  ]
};
