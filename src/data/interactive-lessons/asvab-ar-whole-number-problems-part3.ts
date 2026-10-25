export const asvabArWholeNumberProblemsPart3Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn3-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 3 of 7 — Multi-Step Problems and Order of Operations**

### A multi-step problem is a chain of one-step problems

Most AR questions take two to four steps. Each step is one of the four actions from Part 2. The answer to one step becomes a number in the next one.

The plan is always the same:

1. **What does the question want?** (Last sentence, with its unit.)
2. **What do I know?** (The numbers in the story.)
3. **What is missing in between?** (The intermediate results you must find first.)

### Label every intermediate result

On scratch paper, write a **word next to each number** you find. When you reach the end, you can see at a glance which number answers the question, and you won't pick a subtotal by mistake.

**Worked Example 1 — Buying and making change.** A soldier buys 3 T-shirts at \\$14 each and 2 pairs of socks at \\$6 each. She pays with a \\$100 bill. How much change does she get?

| Step | Scratch paper |
|:---|:---|
| Shirts | $3 \\times 14 = 42$ dollars |
| Socks | $2 \\times 6 = 12$ dollars |
| Total spent | $42 + 12 = 54$ dollars |
| **Change** | $100 - 54 = 46$ dollars |

Her change is \\$46. **Estimate check:** she spent a bit more than \\$50, so the change should be a bit less than \\$50. ✓ Notice that \\$54 (the total spent) is sitting right there on the scratch paper. It answers a different question.`
    },
    {
      id: 'arwn3-pay-trips',
      type: 'text' as const,
      content: `## Overtime pay and trips

**Worked Example 2 — Overtime.** Jamal earns \\$18 an hour for his first 40 hours each week and \\$27 an hour for every hour over 40. Last week he worked 46 hours. What was his pay?

| Step | Scratch paper |
|:---|:---|
| Overtime hours | $46 - 40 = 6$ hours |
| Regular pay | $40 \\times 18 = 720$ dollars |
| Overtime pay | $6 \\times 27 = 162$ dollars |
| **Total pay** | $720 + 162 = 882$ dollars |

His pay was \\$882. **Reasonableness:** 46 hours at about \\$20 an hour is about \\$920. Most of his hours were at \\$18, so a little under \\$920 makes sense. ✓

Watch for the traps: paying all 46 hours at \\$18 gives \\$828 and all 46 at \\$27 gives \\$1,242. The two rates apply to **different** hours.

**Worked Example 3 — A trip and a refuel.** A convoy truck burns 6 gallons of diesel each hour. It drives 7 hours on Monday and 5 hours on Tuesday. Diesel costs \\$4 a gallon. What does the fuel for both days cost?

| Step | Scratch paper |
|:---|:---|
| Hours driven | $7 + 5 = 12$ hours |
| Fuel used | $12 \\times 6 = 72$ gallons |
| **Fuel cost** | $72 \\times 4 = 288$ dollars |

The fuel costs \\$288. The units tell the story: hours times gallons per hour gives **gallons**, and gallons times dollars per gallon gives **dollars**.`
    },
    {
      id: 'arwn3-pemdas',
      type: 'text' as const,
      content: `## Order of operations when it's one expression

Sometimes you write the whole setup as one expression, or a choice shows you one. Then the **order of operations** decides the value.

| Order | What to do |
|:---:|:---|
| 1 | **P**arentheses first |
| 2 | **E**xponents |
| 3 | **M**ultiply and **D**ivide, left to right |
| 4 | **A**dd and **S**ubtract, left to right |

(PEMDAS: "Please Excuse My Dear Aunt Sally.") Multiplying does not always come before dividing; they are a tie, done left to right. The same goes for adding and subtracting.

| Expression | Correct | Common wrong answer |
|:---|:---:|:---|
| $5 + 3 \\times 4$ | $17$ | $32$ (added first) |
| $48 \\div 4 \\times 2$ | $24$ | $6$ (multiplied first) |
| $20 - 8 + 3$ | $15$ | $9$ (added first) |

### Why the parentheses matter

The change problem from Worked Example 1 as one expression:

$$100 - (3 \\times 14 + 2 \\times 6) = 100 - (42 + 12) = 100 - 54 = 46$$

Leave out the parentheses and the value changes:

$$100 - 3 \\times 14 + 2 \\times 6 = 100 - 42 + 12 = 70$$

That expression subtracts the shirts but **adds** the socks back. When a total is being subtracted, it needs parentheses.

> **Key Fact:** If an answer choice is an expression, evaluate it with PEMDAS and compare it with the story. A missing pair of parentheses is a favorite wrong choice.`
    },
    {
      id: 'arwn3-mc',
      type: 'multiple-choice' as const,
      content: '**Chain the steps.** Label each intermediate result. 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the value of $60 - 4 \\times 9 + 6 \\div 2$?',
            options: ['255', '21', '27', '15'],
            correctAnswer: 2,
            explanation: 'Multiply and divide first: $4 \\times 9 = 36$ and $6 \\div 2 = 3$. Then work left to right: $60 - 36 + 3 = 27$. The answer 21 subtracts both 36 and 3, as if the minus sign covered everything after it; 15 does all the other work and divides by 2 last; 255 works straight left to right with no order of operations.'
          },
          {
            question: 'A family buys 4 adult tickets at \\$16 each and 3 child tickets at \\$9 each. They pay with a \\$100 bill. How much change do they get?',
            options: ['\\$91', '\\$9', '\\$75', '\\$19'],
            correctAnswer: 1,
            explanation: 'Adults: $4 \\times 16 = 64$. Children: $3 \\times 9 = 27$. Total: $64 + 27 = 91$. Change: $100 - 91 = 9$, so \\$9. \\$91 is the total spent, an intermediate step; \\$75 subtracts one ticket of each kind ($100 - 16 - 9$) instead of all seven; \\$19 drops the carry when adding $64 + 27$.'
          },
          {
            question: 'A warehouse worker earns \\$16 an hour for her first 40 hours and \\$24 an hour for each overtime hour. She worked 47 hours this week. What is her pay for the week?',
            options: ['\\$752', '\\$1,128', '\\$168', '\\$808'],
            correctAnswer: 3,
            explanation: 'Regular: $40 \\times 16 = 640$. Overtime: $47 - 40 = 7$ hours, and $7 \\times 24 = 168$. Total: $640 + 168 = 808$, so \\$808. \\$752 pays all 47 hours at \\$16, \\$1,128 pays all 47 at \\$24, and \\$168 is only the overtime part.'
          }
        ]
      }
    },
    {
      id: 'arwn3-input',
      type: 'input-boxes' as const,
      content: `**Your turn.** ✍️

**1)** Evaluate $8 + 6 \\times 5 - 12 \\div 4$. (number only)

**2)** A unit orders 5 cases of bottled water at \\$7 a case and 3 boxes of granola bars at \\$11 a box. It pays with two \\$50 bills. How much change does it get? (number only, in dollars)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['35', '32'],
        hint1: 'Do $6 \\times 5$ and $12 \\div 4$ before any adding or subtracting.',
        hint2: 'Label each step: water cost, granola cost, total spent, then change.',
        hint3: 'Two \\$50 bills make \\$100.',
        explanation: '(1) $6 \\times 5 = 30$ and $12 \\div 4 = 3$, so $8 + 30 - 3 = 35$. (2) Water: $5 \\times 7 = 35$. Granola: $3 \\times 11 = 33$. Total: $35 + 33 = 68$. Change: $100 - 68 = 32$, so \\$32.'
      }
    },
    {
      id: 'arwn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- A multi-step problem is a **chain** of one-step problems: want, know, missing in between
- Write a **label** next to every intermediate result so you never answer with a subtotal
- Overtime: **regular hours × regular rate + extra hours × overtime rate**
- Order of operations: **parentheses, exponents, multiply/divide left to right, add/subtract left to right**
- When a whole total is subtracted (change from a bill), it needs **parentheses**

> **Up Next:** Part 4 — measurement: converting units, elapsed time, perimeter and area (including the square-yard trap).`
    }
  ]
};
