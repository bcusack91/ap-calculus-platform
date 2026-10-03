export const actMathStrategyPart3Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m3-intro',
      type: 'text' as const,
      content: `
# 🔄 Backsolving

**Part 3 of 7 — Plugging In the Answer Choices**

Every ACT Math question gives you the answer: it is one of the four choices. **Backsolving** means testing the choices in the problem instead of setting up and solving an equation. When the algebra is messy, or you are not sure how to set it up, backsolving turns a hard question into a few quick checks.

## When to Backsolve

Backsolving works best when **all** of these are true:

| Signal | Example |
|--------|---------|
| The choices are **numbers** (not expressions with variables) | 12, 14, 16, 18 |
| The question asks for **one specific value** | "How many adult tickets were sold?" |
| The setup is wordy or the equation is awkward | ages, mixtures, consecutive integers, coins, radical or rational equations |

It is a poor choice when the choices contain variables (use picking numbers, Part 4, instead) or when the algebra is one step ($3x = 21$).

## How to Backsolve

1. **Identify what each choice represents.** Write it down: "choice = number of adult tickets."
2. **Start with a middle value.** ACT numerical choices are usually listed in increasing or decreasing order. With 4 choices, test the second or third value first.
3. **Run the choice through the problem's conditions,** one condition at a time.
4. **If it works, stop.** If it fails, decide whether you need a **bigger** or **smaller** value, and test in that direction.

Because the choices are ordered, one test often eliminates two choices at once: if 16 gives a total that is too small and larger values give larger totals, then 12 is also too small. At most you will test two or three choices.

## Why Backsolving Protects You From Extraneous Solutions

When you square both sides of an equation or multiply by an expression containing $x$, you can create **extraneous solutions**: values that satisfy the new equation but not the original. Backsolving tests each choice in the **original** equation, so an extraneous value fails automatically.

For example, solving $\\sqrt{x + 7} = x - 5$ by squaring gives $x^2 - 11x + 18 = 0$, so $x = 2$ or $x = 9$. But plugging $x = 2$ into the original gives $\\sqrt{9} = -3$, which is false. Only $x = 9$ works. If 2 appears as a choice, it is a trap for students who solve without checking.

## Backsolving Checklist

| Step | Question to ask yourself |
|------|--------------------------|
| Label | What does each choice stand for? |
| Start | Which middle choice should I test first? |
| Test | Does it satisfy **every** condition in the problem? |
| Direction | If not, do I need bigger or smaller? |
| Stop | One choice works: bubble it and move on |

**Common mistake:** testing a choice against only part of the problem. In an age problem with two conditions ("now" and "in 6 years"), a choice must pass both.

**ACT Tip:** Backsolving is not cheating or a last resort. Strong scorers use it whenever it is faster than writing an equation, and it doubles as a check when you do solve algebraically.
      `
    },
    {
      id: 'act-m3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A ticket problem, solved by testing choices</b></summary>

**Question:** A theater sold 40 tickets for a total of 380 dollars. Adult tickets cost 12 dollars and student tickets cost 7 dollars. How many adult tickets were sold? Choices: 12, 16, 20, 24.

**Solution:**
1. Label: choice = number of adult tickets; students = 40 minus the choice.
2. Test 16 (a middle value): $16 \\times 12 = 192$ and $24 \\times 7 = 168$. Total 360, which is **too low**.
3. More adult tickets raise the total (each one adds 5 dollars over a student ticket), so go bigger.
4. Test 20: $20 \\times 12 = 240$ and $20 \\times 7 = 140$. Total 380. ✓

**Answer:** 20 adult tickets. Testing 16 also ruled out 12, since 12 would give an even smaller total.
</details>

<details>
<summary><b>Example 2: Backsolving a radical equation</b></summary>

**Question:** What value of $x$ satisfies $\\sqrt{x + 7} = x - 5$? Choices: 2, 9, 11, 13.

**Solution:**
1. Test 9: $\\sqrt{16} = 4$ and $9 - 5 = 4$. ✓
2. For comparison, test 2: $\\sqrt{9} = 3$ but $2 - 5 = -3$. ✗ A square root is never negative.

**Why it matters:** Squaring both sides produces $x = 2$ and $x = 9$. A student who solves the quadratic and picks the first root chooses 2, an extraneous solution. Backsolving tests the original equation, so it never falls for this.
</details>
      `
    },
    {
      id: 'act-m3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Backsolve These** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "The sum of three consecutive even integers is 78. What is the largest of the three integers?",
            options: ['$24$', '$26$', '$28$', '$30$'],
            correctAnswer: 2,
            explanation: "Test 28 as the largest: the three integers are 24, 26, 28, and $24 + 26 + 28 = 78$. ✓ 24 is the smallest of the three and 26 is the middle one, so both answer a different question. If 30 were the largest, the integers would be 26, 28, 30, which sum to 84, too big."
          },
          {
            question: "Jana is 4 times as old as her son. In 6 years, she will be 3 times as old as her son. How old is her son now?",
            options: ['$6$', '$8$', '$9$', '$12$'],
            correctAnswer: 3,
            explanation: "Test 12: Jana is 48. In 6 years they are 54 and 18, and $54 = 3 \\times 18$. ✓ Testing 9 gives 42 and 15 in six years (42 is not 45); 8 gives 38 and 14 (not 42); 6 gives 30 and 12 (not 36). Each smaller choice misses by more, which tells you to move toward the larger end."
          },
          {
            question: "Which of the following values of $x$ satisfies $\\frac{6}{x} + \\frac{x}{2} = 4$?",
            options: ['$1$', '$3$', '$4$', '$6$'],
            correctAnswer: 3,
            explanation: "Test 6: $\\frac{6}{6} + \\frac{6}{2} = 1 + 3 = 4$. ✓ Testing 1 gives $6 + 0.5 = 6.5$; 3 gives $2 + 1.5 = 3.5$; 4 gives $1.5 + 2 = 3.5$. None of those equal 4. (Algebra gives $x^2 - 8x + 12 = 0$, so $x = 2$ or $6$; only 6 is offered.)"
          },
          {
            question: "A store makes 10 pounds of a nut mix from peanuts costing 3 dollars per pound and cashews costing 8 dollars per pound. The mix costs 45 dollars in total. How many pounds of cashews are in the mix?",
            options: ['$2$', '$3$', '$5$', '$7$'],
            correctAnswer: 1,
            explanation: "Test 3 pounds of cashews: 7 pounds of peanuts cost 21 dollars and 3 pounds of cashews cost 24 dollars, totaling 45. ✓ 7 is the weight of the peanuts, not the cashews. With 5 pounds of cashews the cost is $15 + 40 = 55$, too much; with 2 pounds it is $24 + 16 = 40$, too little."
          }
        ]
      }
    },
    {
      id: 'act-m3-input1',
      type: 'input-boxes' as const,
      content: `
**Backsolve or Solve — Your Choice** ✏️

1) The sum of five consecutive integers is 115. What is the smallest integer?

2) For what value of $x$ does $\\frac{x + 3}{x - 1} = 3$?

3) A jar holds 18 coins, all dimes and quarters, worth 3.15 dollars in total. How many quarters are in the jar?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['21', '3', '9'],
        hint1: 'The middle integer is $115 \\div 5 = 23$; count down two.',
        hint2: 'Try $x = 3$: the fraction becomes $\\frac{6}{2}$.',
        hint3: 'Try 9 quarters: $9(0.25) + 9(0.10)$.',
        explanation: '1) 21, 22, 23, 24, 25 sum to 115, so the smallest is 21. 2) $\\frac{3 + 3}{3 - 1} = 3$, so $x = 3$. 3) 9 quarters (2.25 dollars) and 9 dimes (0.90 dollars) total 3.15 dollars, so there are 9 quarters.'
      }
    },
    {
      id: 'act-m3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Quick Backsolves

| # | Problem | Answer | Test that confirms it |
|---|---------|--------|-----------------------|
| 1 | Two numbers sum to 30, and one is 4 times the other. What is the larger number? | $24$ | $24 + 6 = 30$ and $24 = 4 \\times 6$ |
| 2 | What is the positive solution of $x^2 - x = 30$? | $6$ | $36 - 6 = 30$ |
| 3 | A rectangle has perimeter 34 and a diagonal of 13. What is its longer side? | $12$ | sides 12 and 5: $2(17) = 34$ and $\\sqrt{144 + 25} = 13$ |
| 4 | Solve $\\frac{x + 2}{x - 3} = 6$. | $4$ | $\\frac{6}{1} = 6$ |

**ACT Tip:** In problem 3, setting up two equations in two variables takes time; testing a choice takes seconds. Recognizing the 5-12-13 right triangle makes it faster still.
      `
    },
    {
      id: 'act-m3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What value of $x$ satisfies $2^{x} + 2^{x + 1} = 48$?",
            options: ['$3$', '$4$', '$5$', '$6$'],
            correctAnswer: 1,
            explanation: "Test 4: $2^4 + 2^5 = 16 + 32 = 48$. ✓ Testing 3 gives $8 + 16 = 24$, half of 48; 5 gives $32 + 64 = 96$, double; 6 gives 192. Algebraically, $2^{x}(1 + 2) = 48$, so $2^{x} = 16$, the same answer."
          },
          {
            question: "The length of a rectangle is 5 meters greater than its width, and its area is 84 square meters. What is the width, in meters?",
            options: ['$4$', '$6$', '$7$', '$12$'],
            correctAnswer: 2,
            explanation: "Test 7: the length is 12 and $7 \\times 12 = 84$. ✓ 12 is the length, the right number for a different question. A width of 6 gives $6 \\times 11 = 66$, and a width of 4 gives $4 \\times 9 = 36$; both areas fall short of 84."
          },
          {
            question: "Which of the following is a solution of $\\sqrt{2x + 3} = x$?",
            options: ['$-3$', '$-1$', 'Both $-1$ and $3$', '$3$'],
            correctAnswer: 3,
            explanation: "Test 3: $\\sqrt{9} = 3$. ✓ $-1$ is the extraneous solution: squaring gives $x^2 - 2x - 3 = 0$, so $x = 3$ or $-1$, but $\\sqrt{1} = 1$, not $-1$. That also rules out 'both $-1$ and $3$', which keeps the extraneous root. $-3$ makes the radicand negative, so it cannot be a solution either."
          },
          {
            question: "A price was increased by 25%, and then the new price was decreased by 20%. The final price was 60 dollars. What was the original price, in dollars?",
            options: ['$60$', '$62$', '$64$', '$72$'],
            correctAnswer: 0,
            explanation: "Test 60: a 25% increase gives 75, and 20% off 75 is $75 - 15 = 60$. ✓ The changes cancel because $1.25 \\times 0.8 = 1$. Testing 64 gives $80$ then 64, not 60; 72 is 60 increased by 20%, which undoes only one of the changes; 62 ends at 62, not 60."
          }
        ]
      }
    },
    {
      id: 'act-m3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Backsolve** when the choices are numbers, the question asks for one value, and the setup is wordy or awkward.
- **Label** what each choice represents before testing.
- **Start with a middle choice,** then move bigger or smaller based on the result; one test can eliminate two choices.
- **Test every condition** in the problem, not just one.
- **Backsolving checks the original equation,** so it automatically rejects extraneous solutions from squaring or clearing fractions.
      `
    }
  ]
}
