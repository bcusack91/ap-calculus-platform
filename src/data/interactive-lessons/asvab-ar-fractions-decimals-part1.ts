export const asvabArFractionsDecimalsPart1Data = {
  topicSlug: 'asvab-ar-fractions-decimals',
  sections: [
    {
      id: 'arfd1-intro',
      type: 'text' as const,
      content: `# 🧩 Fractions and Decimals in Context

**Part 1 of 7 — Fractions and Decimals on the AR Subtest**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Fractions and decimals on the AR subtest** |
| 2 | Finding a fraction of a quantity |
| 3 | Adding and subtracting fractions and mixed numbers |
| 4 | Multiplying and dividing fractions in context |
| 5 | Decimals and money by hand |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What These Questions Look Like

The Arithmetic Reasoning (AR) subtest is officially described as the "ability to solve basic arithmetic word problems," and fractions and decimals show up in a big share of them. They rarely say "compute $\\frac{3}{4} \\times 36$." Instead they tell a short story:

- **A fraction of a group:** "Three-fourths of the 36 soldiers in a unit passed the swim test..."
- **Measurements in mixed numbers:** board lengths, hours worked, miles run, cups in a recipe.
- **Money with decimals:** a paycheck at \\$14.50 an hour, the change from a \\$20 bill, the cost of 12 gallons of gas.

What is really being tested is whether you can turn the words into the right operation and carry it out cleanly by hand.

### The Conditions You Work Under

| Fact | What it means for fractions and decimals |
|:---|:---|
| 15 scored questions in 55 minutes on the computer test (CAT-ASVAB) | About 3.5 minutes per question: enough time to write out every step |
| No calculator, at any version of the test | Every decimal and fraction step is done on scratch paper |
| Two sheets of scratch paper and two pencils (ask for more if you need them) | Use them: line up decimal points and write each fraction step |
| 4 answer choices per question | The wrong choices are built from common slips, so a "familiar" number is not proof |
| You cannot go back once you answer | Check each answer before you click |

If you take a paper version of the test, the pace is much faster, so the shortcuts in this lesson matter even more.

AR is one of the four subtests in your **AFQT** score, the score that decides whether you can enlist, and it also feeds job line scores such as the Army GT score. Fraction and decimal points are some of the most winnable points on it.`
    },
    {
      id: 'arfd1-habits',
      type: 'text' as const,
      content: `## Seven Habits, Applied to Fractions and Decimals

| Habit | What it looks like in this topic |
|:---|:---|
| **1. Read the last sentence first** | Is it asking for the part that *did* something or the part that *did not*? The amount spent or the amount *left*? |
| **2. Translate words to operations** | "Of" means multiply. "How many pieces of length ___ fit" means divide. "Altogether" means add. |
| **3. Track units** | Feet vs inches, hours vs minutes, dollars vs cents. Write the unit next to every number. |
| **4. Estimate first** | Round $2\\frac{7}{8}$ to $3$ and \\$14.50 to \\$15 to know roughly what the answer should be. |
| **5. Shortcuts** | Cancel before you multiply fractions; split \\$14.50 into \\$14 + \\$0.50. |
| **6. Check reasonableness** | A part of a group is smaller than the group. Dividing by a fraction less than 1 gives a *bigger* number. |
| **7. Use the answer choices** | When a problem gives a part and asks for the whole, plug the choices in. |

> **Key Fact:** The most common way to lose a fraction point is not a hard calculation. It is answering a slightly different question than the one asked, such as giving the number who passed when the question asked how many did *not* pass.`
    },
    {
      id: 'arfd1-worked',
      type: 'text' as const,
      content: `## A Fully Worked Example

**Problem.** Three-fourths of the 36 soldiers in a unit passed the swim test on the first try. How many soldiers did **not** pass on the first try?

**Step 1 — Read the last sentence.** The question asks for the soldiers who did **not** pass. Circle "not" on your scratch paper.

**Step 2 — Estimate.** Three-fourths is most of the group, so the number who did not pass is a small part of 36: well under half, so less than 18.

**Step 3 — Translate and compute.** If $\\frac{3}{4}$ passed, then $1 - \\frac{3}{4} = \\frac{1}{4}$ did not pass.

$$\\frac{1}{4} \\text{ of } 36 = 36 \\div 4 = 9$$

**Step 4 — Check.** Passed: $36 \\div 4 \\times 3 = 27$. Passed plus not passed: $27 + 9 = 36$. ✓ And $9$ is less than $18$, as the estimate said.

**The trap.** The answer choices will almost certainly include $27$, the number who **did** pass. If you skip Step 1, you will compute $27$ correctly and still get the question wrong.`
    },
    {
      id: 'arfd1-warmup-mc',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Read the last sentence first, then compute.',
      exercise: {
        questions: [
          {
            question: 'A shift has 40 workers, and $\\frac{2}{5}$ of them work overtime this week. How many workers work overtime this week?',
            options: ['24', '8', '16', '32'],
            correctAnswer: 2,
            explanation: 'Divide by the denominator, then multiply by the numerator: $40 \\div 5 = 8$ and $8 \\times 2 = 16$. The 24 is the number who do not work overtime, 8 is only one fifth of the shift (you stopped after dividing), and 32 is what is left after taking away one fifth.'
          },
          {
            question: 'A notebook costs \\$1.25. How much do 6 notebooks cost?',
            options: ['\\$75.00', '\\$7.50', '\\$0.75', '\\$7.25'],
            correctAnswer: 1,
            explanation: '$125 \\times 6 = 750$, and \\$1.25 has two decimal places, so the cost is \\$7.50. Estimate: about \\$1 each makes about \\$6, so \\$75.00 and \\$0.75 have the decimal point in the wrong place. \\$7.25 comes from adding 6 to \\$1.25 instead of multiplying.'
          }
        ]
      }
    },
    {
      id: 'arfd1-warmup-input',
      type: 'input-boxes' as const,
      content: `**Warm-up: fraction to decimal.** ✍️

**1)** A water jug is $\\frac{3}{4}$ full. Write $\\frac{3}{4}$ as a decimal (number only).

**2)** A recruit has finished $\\frac{1}{2}$ of a 6-mile run. How many miles has the recruit run? (number only, in miles)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['0.75', '3'],
        hint1: 'Three quarters of a dollar is how many cents?',
        hint2: 'Half of something means divide it by 2.',
        hint3: '$3 \\div 4 = 0.75$; $6 \\div 2 = 3$.',
        explanation: '(1) $\\frac{3}{4} = 3 \\div 4 = 0.75$, the same as three quarters making 75 cents. (2) $\\frac{1}{2}$ of 6 miles is $6 \\div 2 = 3$ miles.'
      }
    },
    {
      id: 'arfd1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Fraction and decimal questions on AR are **word problems**: a fraction of a group, mixed-number measurements, or money
- You have about **3.5 minutes per question** on the computer test and **no calculator**, so write each step on scratch paper
- **Read the last sentence first**: the part that did, or the part that did not? The amount spent, or the amount left?
- **Estimate** before you compute, and **check** that your answer fits the story

> **Up Next:** Part 2 — finding a fraction of a quantity, the remaining fraction, and the "fraction of what is left" trap.`
    }
  ]
};
