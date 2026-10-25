export const asvabArWholeNumberProblemsPart1Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn1-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 1 of 7 — Word Problems on the AR Subtest**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Word problems on the AR subtest** |
| 2 | Turning words into operations |
| 3 | Multi-step problems and order of operations |
| 4 | Measurement: units, perimeter and area |
| 5 | Remainders, rounding up and estimation |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What these questions look like

The official description of Arithmetic Reasoning (AR) is short: "Ability to solve basic arithmetic word problems." Most AR items are a little story of two to four sentences (a paycheck, a supply order, a shift schedule, a room that needs new flooring) followed by one question and four answer choices.

The arithmetic is usually just adding, subtracting, multiplying and dividing. What makes AR feel hard is the **reading**:

- deciding which operation the story is describing,
- doing two or three steps in the right order,
- and answering the question that was actually asked, in the units it asked for.

This topic is about whole numbers and whole-dollar money. Fractions, percents, ratios and averages each have their own topic in this unit.`
    },
    {
      id: 'arwn1-testday',
      type: 'text' as const,
      content: `## How AR works on test day

| Fact | What it means for you |
|:---|:---|
| CAT-ASVAB: 15 scored questions in 55 minutes | About 3.5 minutes per question, the most generous pace on the whole test |
| No calculator on any version | Every number is chosen so it works on scratch paper |
| At MEPS: two sheets of scratch paper and two pencils | Ask for more if you need it, and write every step |
| 4 answer choices per question | The wrong choices are built from common mistakes |
| Adaptive, and you cannot go back | A right answer usually brings a harder question; you must answer to move on |

Some questions may be unscored tryout items, and you can't tell which ones, so treat every question as if it counts. If you take a paper version, the pace is much faster (30 questions in 36 minutes), but the skills are the same.

### Why AR matters so much

AR is one of the four subtests in your **AFQT** score: AR + MK + 2 × VE, using standard scores, turned into a percentile from 1 to 99. The AFQT decides whether you can enlist. AR also feeds job line scores. For example, the Army GT score and the Air Force G score both use AR + VE, and the Marine Corps GT score uses AR + MC + VE.

> **Key Fact:** Whole-number word problems are the foundation of AR. Every harder AR topic (fractions, percents, rates) still needs you to read the story, pick the operations and keep track of units.`
    },
    {
      id: 'arwn1-habits',
      type: 'text' as const,
      content: `## Five habits that beat AR without a calculator

1. **Read the last sentence first.** That is where the question lives. Know what you are finding ("total cost", "how many more", "change from a \\$50 bill") and its unit before you touch a number.
2. **Translate the words into a number sentence.** Write it down: $6 \\times 85 + 4 \\times 120$. Setting it up is most of the work.
3. **Track units at every step.** Write "hours", "sq ft" or "dollars" next to each number on your scratch paper. Many wrong choices are the right number in the wrong unit.
4. **Estimate first.** Round to friendly numbers to know roughly what the answer should be. An estimate often eliminates two choices before you compute, and it catches slips afterwards.
5. **Check against the story and the choices.** Change can't be more than the bill you paid with, and a total can't be smaller than one of its parts. If setting up is hard, plug the answer choices back into the story (back-solving).

### Mental-math moves you will use all the time

| Move | Example |
|:---|:---|
| Break a number apart | $6 \\times 85 = 6 \\times 80 + 6 \\times 5 = 480 + 30 = 510$ |
| Round, then fix | $49 \\times 7 = 50 \\times 7 - 7 = 350 - 7 = 343$ |
| Multiply by 25 | For $36 \\times 25$: $36 \\times 100 = 3{,}600$, then $3{,}600 \\div 4 = 900$ |
| Add up instead of subtracting | $500 - 368$: count up $368 \\to 400 \\to 500$, so $32 + 100 = 132$ |`
    },
    {
      id: 'arwn1-worked',
      type: 'text' as const,
      content: `## Worked Example: a supply order

> A motor pool orders 6 tires at \\$85 each and 4 batteries at \\$120 each. What is the total cost of the order?
>
> \\$205  ·  \\$510  ·  \\$990  ·  \\$2,050

**Step 1 — Last sentence.** We want the **total cost**, in dollars, of everything ordered.

**Step 2 — Number sentence.** Each tire costs the same, so the tires cost $6 \\times 85$. The batteries cost $4 \\times 120$. The total is

$$6 \\times 85 + 4 \\times 120$$

**Step 3 — Estimate.** $6 \\times 85$ is close to $6 \\times 90 = 540$, and $4 \\times 120 = 480$. The answer should be near $540 + 480 = 1{,}020$, so about \\$1,000.

**Step 4 — Compute.**

$$6 \\times 85 = 480 + 30 = 510 \\qquad 4 \\times 120 = 480 \\qquad 510 + 480 = 990$$

The total is \\$990.

**Step 5 — Check.** \\$990 is right next to the estimate of about \\$1,000. Now look at why the other choices are there:

| Choice | The mistake behind it |
|:---|:---|
| \\$205 | Added the two prices ($85 + 120$) and ignored how many of each were bought |
| \\$510 | The tires alone: stopped one step early |
| \\$2,050 | Added the counts ($6 + 4 = 10$) and the prices, then multiplied $10 \\times 205$ |

> **Key Fact:** On AR the wrong choices are not random. Each one is what you get from a specific mistake, which is exactly why an estimate and a final check are worth the few seconds they take.`
    },
    {
      id: 'arwn1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** Use the five habits on two short problems. 🔥',
      exercise: {
        questions: [
          {
            question: 'A storage room has 14 shelves, and each shelf holds 24 boxes. How many boxes does the room hold when every shelf is full?',
            options: ['38', '284', '336', '360'],
            correctAnswer: 2,
            explanation: 'Every shelf holds the same number of boxes, so multiply: $14 \\times 24 = 14 \\times 20 + 14 \\times 4 = 280 + 56 = 336$. The total 38 comes from adding the two numbers instead of multiplying, and 284 comes from multiplying only the 20 by 14 and then tacking on the 4. 360 is $15 \\times 24$: rounding 14 up to 15 for an estimate and never correcting it.'
          },
          {
            question: 'Dana had \\$400 in her checking account. She paid a \\$135 phone bill and then deposited a \\$210 paycheck. How much is in her account now?',
            options: ['\\$745', '\\$475', '\\$265', '\\$55'],
            correctAnswer: 1,
            explanation: 'Start with \\$400, subtract the bill, then add the deposit: $400 - 135 = 265$ and $265 + 210 = 475$, so \\$475. \\$265 stops before the paycheck is added, \\$55 subtracts the paycheck as if it were another bill, and \\$745 adds the bill instead of subtracting it.'
          }
        ]
      }
    },
    {
      id: 'arwn1-warmup-input',
      type: 'input-boxes' as const,
      content: `**Warm-up, continued.** ✍️

A unit orders 18 cases of bottled water. Each case holds 24 bottles.

**1)** How many bottles are in the order? (number only, in bottles)`,
      exercise: {
        boxes: 1,
        correctAnswers: ['432'],
        hint1: 'Every case holds the same number of bottles. Repeating the same amount means multiplying.',
        hint2: 'Estimate: $20 \\times 24 = 480$, so the answer is a little less than 480.',
        hint3: 'Break 24 apart: $18 \\times 20 + 18 \\times 4$.',
        explanation: '$18 \\times 24 = 18 \\times 20 + 18 \\times 4 = 360 + 72 = 432$ bottles. That fits the estimate of a bit under 480.'
      }
    },
    {
      id: 'arwn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- AR is 15 scored word problems in 55 minutes on the CAT-ASVAB: about **3.5 minutes each**, no calculator, scratch paper only
- You can't go back, so work each problem carefully the first time and check it before you answer
- The habits: **last sentence first**, write a **number sentence**, **track units**, **estimate**, then **check** against the story and the choices
- Every wrong choice comes from a real mistake: adding instead of multiplying, stopping one step early, the wrong unit

> **Up Next:** Part 2 — turning the words of a problem into the right operation, and why key words can mislead you.`
    }
  ]
};
