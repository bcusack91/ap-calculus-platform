export const asvabArPercentsInterestPart1Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi1-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 1 of 7 — Percents on the AR Subtest**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Percents on the AR subtest** |
| 2 | Percent of a number and mental-math shortcuts |
| 3 | Percent change, discounts and depreciation |
| 4 | Sales tax, tips and commission |
| 5 | Simple interest |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What these questions look like

The official scope of Arithmetic Reasoning (AR) names "interest and percentage" outright, and one of the official sample topics is **percent depreciation**. So percent problems are a regular part of AR. They show up as everyday money stories:

- a jacket that is 25% off,
- sales tax or a tip added to a bill,
- a paycheck with base pay plus commission,
- a truck that loses 10% of its value each year,
- a loan or a savings account that earns simple interest.

The math is almost always one of three moves: **find a percent of a number**, **find what percent one number is of another**, or **find the whole when you know a part**. What trips people up is the story around the math: which number is the starting value, whether the question wants the discount or the price you actually pay, and whether "18 months" has been turned into years.`
    },
    {
      id: 'arpi1-testday',
      type: 'text' as const,
      content: `## Percents on test day

| Fact | What it means for percent problems |
|:---|:---|
| CAT-ASVAB: 15 scored questions in 55 minutes | About 3.5 minutes per question, plenty for a two-step discount or interest problem |
| No calculator on any version | Every percent is chosen to work with shortcuts like 10%, 5% and 25% |
| At MEPS: two sheets of scratch paper and two pencils | Write the setup ("part = percent × whole") before you compute; ask for more paper if you need it |
| 4 answer choices per question | The wrong choices are the discount instead of the sale price, the interest instead of the total, and so on |
| Adaptive, and you cannot go back | Check a percent answer against the story before you click; you can't fix it later |

Some questions may be unscored tryout items, and you can't tell which ones, so treat every question as scored. If you take a paper version, the pace is much faster, so the shortcuts in Part 2 matter even more.

### Why it matters

AR is one of the four subtests in your **AFQT** score (AR + MK + 2 × VE, using standard scores, turned into a 1–99 percentile), and the AFQT decides whether you can enlist. AR also feeds job line scores such as the Army GT and Air Force G scores (AR + VE) and the Marine Corps GT score (AR + MC + VE). Percent problems are some of the most learnable points on AR: the same handful of setups appears again and again.`
    },
    {
      id: 'arpi1-habits',
      type: 'text' as const,
      content: `## The AR habits, applied to percents

1. **Read the last sentence first.** Does it ask for the **discount** or the **sale price**? The **interest** or the **total owed**? The **commission** or the **total pay**? Circle it on your scratch paper before you start.
2. **Translate words to an equation.** "Is" means equals and "of" means times: "What is 15% of 60?" becomes $\\text{answer} = 0.15 \\times 60$.
3. **Track units.** Interest rates are **per year**, so time must be in years. Write "dollars" or "%" next to each number so you don't hand in a percent when the question wants dollars.
4. **Estimate first.** 10% of anything is easy (move the decimal point one place left). Use it to know roughly where the answer sits.
5. **Use shortcuts instead of long multiplication.** 25% is one quarter, 20% is one fifth, 15% is 10% plus half of that.
6. **Check reasonableness.** A sale price must be **less** than the original. A price with tax must be **more**. Interest on a small loan for one year is a small number.
7. **Use the answer choices.** On "what was the original price?" questions, you can test each choice: take the discount off and see which one lands on the sale price.

> **Key Fact:** On percent problems, most wrong answers come from answering a different question than the one asked, not from bad arithmetic. Read the last sentence first.`
    },
    {
      id: 'arpi1-worked',
      type: 'text' as const,
      content: `## Worked Example: a sale price

> A jacket regularly priced at \\$80 is on sale for 15% off. What is the sale price?
>
> \\$12  ·  \\$65  ·  \\$68  ·  \\$92

**Step 1 — Last sentence.** We want the **sale price**: what you actually pay, in dollars.

**Step 2 — Estimate.** 10% of \\$80 is \\$8, so 15% off is a bit more than \\$8 off. The sale price should be a little less than \\$72.

**Step 3 — Compute with shortcuts.**

- 10% of 80: move the decimal point, $80 \\to 8$
- 5% of 80: half of that, $8 \\div 2 = 4$
- 15% of 80: $8 + 4 = 12$, so the discount is \\$12
- Sale price: $80 - 12 = 68$, so \\$68

**Step 4 — Check against the story and the choices.** \\$68 is less than \\$80 and just under our estimate of \\$72. Here is where the other choices come from:

| Choice | The mistake behind it |
|:---|:---|
| \\$12 | The discount itself: stopped one step early |
| \\$65 | Took \\$15 off instead of 15% off |
| \\$92 | Added the discount, as if it were tax; a sale price can't be higher than the original |

> **Key Fact:** Every percent problem has a **base**, the "whole" the percent is taken of. Here the base is the original price, \\$80.`
    },
    {
      id: 'arpi1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** Two quick percent problems. Read the last sentence first. 🔥',
      exercise: {
        questions: [
          {
            question: 'A squad has a supply budget of \\$640. It sets aside 25% of the budget for fuel. How much is set aside for fuel?',
            options: ['\\$480', '\\$64', '\\$160', '\\$128'],
            correctAnswer: 2,
            explanation: '25% is one quarter, so divide by 4: $640 \\div 4 = 160$, so \\$160. \\$480 is the 75% that is left for everything else, not the fuel share. \\$64 is only 10% of the budget, and \\$128 divides by 5, which is 20%, not 25%.'
          },
          {
            question: 'A platoon has 40 recruits, and 14 of them have already passed the swim qualification. What percent of the platoon has passed?',
            options: ['14%', '35%', '65%', '26%'],
            correctAnswer: 1,
            explanation: 'Part ÷ whole: $14 \\div 40 = 0.35 = 35\\%$. (Shortcut: 10% of 40 is 4, and $14 = 4 + 4 + 4 + 2$, which is 10% + 10% + 10% + 5% = 35%.) 65% is the share that has NOT passed yet. 14% just puts a percent sign on the count, and 26% comes from subtracting $40 - 14$.'
          }
        ]
      }
    },
    {
      id: 'arpi1-warmup-input',
      type: 'input-boxes' as const,
      content: `**Warm-up, continued.** ✍️

A pair of work boots costs \\$60 and is on sale for 20% off.

**1)** What is the sale price, in dollars? (number only)`,
      exercise: {
        boxes: 1,
        correctAnswers: ['48'],
        hint1: 'Read the last sentence: it wants the price you pay, not the discount.',
        hint2: '10% of 60 is 6, so 20% of 60 is double that.',
        hint3: 'The discount is \\$12. Subtract it from \\$60.',
        explanation: '20% of 60 is $2 \\times 6 = 12$, so the discount is \\$12 and the sale price is $60 - 12 = 48$, or \\$48. Check: \\$48 is less than \\$60, as a sale price must be.'
      }
    },
    {
      id: 'arpi1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Percent problems on AR are money stories: discounts, tax and tips, commission, depreciation and simple interest
- Every problem has a **base** (the whole the percent is taken of); find it first
- Read the last sentence: **discount or sale price? interest or total?**
- No calculator: lean on 10%, 5%, 25% and 50% shortcuts, and estimate before you compute
- A sale price is below the original; a price with tax is above it

> **Up Next:** Part 2 — percent of a number, the three question types, and the mental-math shortcuts that replace a calculator.`
    }
  ]
};
