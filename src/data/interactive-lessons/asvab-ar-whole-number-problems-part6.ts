export const asvabArWholeNumberProblemsPart6Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn6-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 6 of 7 — Test Strategy and Common Traps**

### The six traps the wrong answers are built from

AR answer choices are designed around predictable mistakes. Once you know them, you'll recognize them on sight.

| Trap | What it looks like | How to dodge it |
|:---|:---|:---|
| **Stopping one step early** | The subtotal (total spent, regular pay, area) is one of the choices | Reread the last sentence; check your final number answers *that* question |
| **Wrong unit** | Minutes when the question asks for hours; sq ft when the price is per sq yd; ounces vs. pounds | Circle the unit in the question; write units on every line |
| **Remainder handled wrong** | Both "round down" and "round up" answers appear | Ask whether leftovers would be stranded (round up) or wasted (round down) |
| **Key-word misread** | "Fewer" when you need to add; "8 less than 30" written as $8 - 30$ | Act the story out: combine, compare, repeat or split? |
| **Misreading "how many more"** | The sum of the two amounts is a choice | "How many more" compares: subtract smaller from larger |
| **Forgetting the starting amount** | "Had 35, then bought 3 packs of 12": the choice 36 | The answer includes what was there before: $35 + 36 = 71$ |

> **Key Fact:** If your answer matches a choice on the first try, that's good, but it doesn't prove you're right. The trap answers match choices too. The final check is what separates them.`
    },
    {
      id: 'arwn6-timing',
      type: 'text' as const,
      content: `## Timing: 3.5 minutes is an average, not a limit per question

On the CAT-ASVAB you have 55 minutes for 15 scored questions, about **3.5 minutes each**. That is generous, so use it wisely:

- **One-step problems** (one operation, one unit) should take about **1 minute**. Answer, check, move on.
- The time you **bank** on easy items pays for the **multi-step** ones (overtime, carpet in square yards, an L-shaped room), which can take 4 or 5 minutes.
- You **can't skip or go back**. You must answer to move on, so give each problem real effort the first time.
- Stuck after a few minutes? Eliminate what you can with an estimate and choose among what's left. A thoughtful guess beats a blank.
- Don't rush at the end. Unanswered questions are scored as random guesses, and a run of wrong answers late in a subtest is penalized heavily. Keep genuinely working each problem; the time limit is generous enough that this almost never comes up.

### Back-solving: let the choices do the work

When the setup is hard to write, **plug the choices into the story**.

**Worked Example.** Ella buys some \\$9 shirts and pays with a \\$50 bill. Her change is \\$14. How many shirts did she buy? Choices: 3, 4, 5, 6.

- Try 4: $4 \\times 9 = 36$, and $50 - 36 = 14$. ✓ Done.

Start with a middle choice. If it gives too much change, you need a bigger number; too little, a smaller one.`
    },
    {
      id: 'arwn6-checklist',
      type: 'text' as const,
      content: `## The 20-second reasonableness checklist

Before you click, run through these:

1. **Did I answer the last sentence?** Not a subtotal, not a different quantity.
2. **Is it in the right unit?** Hours or minutes, feet or yards, square feet or square yards.
3. **Does the size make sense?** Change is less than the bill paid with. A total is bigger than each of its parts. Pay before a deduction is more than the check.
4. **Is it close to my estimate?** If you estimated about 3,000 and got 29,280, a place value slipped.
5. **Did I handle the remainder for this story?** Buses round up; full kits round down.

### Estimation knocks out choices fast

> A unit buys 52 tents at \\$198 each. Which is the total?
>
> \\$1,296  ·  \\$10,296  ·  \\$12,960  ·  \\$102,960

$50 \\times 200 = 10{,}000$, so the answer is about \\$10,000: only \\$10,296 fits. Exact: $52 \\times 198 = 52 \\times 200 - 52 \\times 2 = 10{,}400 - 104 = 10{,}296$.`
    },
    {
      id: 'arwn6-spot',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** Each problem has a trap answer waiting. Find the real one. 🕵️',
      exercise: {
        questions: [
          {
            question: 'A student solved this problem: "A box holds 18 bottles. How many boxes are needed for 400 bottles?" She wrote 22. What went wrong?',
            options: ['She divided when she should have multiplied', 'She made an error in the long division itself', 'She rounded down; every bottle needs a box', 'She should have reported the remainder, 4'],
            correctAnswer: 2,
            explanation: '$400 \\div 18 = 22$ remainder 4, because $18 \\times 22 = 396$, so her division was correct. But 22 boxes leave 4 bottles with no box, so the answer is 23. Multiplying would make no sense here, and the remainder of 4 tells you how many bottles are left over, not how many boxes are needed.'
          },
          {
            question: 'A supply sergeant had 46 batteries on the shelf. She received 4 more packs, each holding 24 batteries. How many batteries are on the shelf now?',
            options: ['142', '96', '74', '50'],
            correctAnswer: 0,
            explanation: 'New batteries: $4 \\times 24 = 96$. Add the starting amount: $46 + 96 = 142$. The answer 96 forgets the 46 batteries already on the shelf; 74 adds every number in the story ($46 + 4 + 24$); 50 adds the 4 packs as if they were 4 batteries.'
          },
          {
            question: 'A yard 27 ft long and 15 ft wide will be covered with sod. Sod costs \\$5 per square yard. What will the sod cost?',
            options: ['\\$2,025', '\\$225', '\\$675', '\\$420'],
            correctAnswer: 1,
            explanation: 'Area: $27 \\times 15 = 405$ sq ft, and $405 \\div 9 = 45$ sq yd. Cost: $45 \\times 5 = 225$, so \\$225. (Or convert first: 9 yd by 5 yd is 45 sq yd.) \\$2,025 prices square feet at the square-yard rate, \\$675 divides by 3 instead of 9, and \\$420 prices the perimeter (84 ft).'
          },
          {
            question: 'A mechanic charges \\$65 an hour for labor plus \\$150 for parts. A job takes 3 hours, and the customer pays with four \\$100 bills. How much change does the customer get?',
            options: ['\\$345', '\\$205', '\\$195', '\\$55'],
            correctAnswer: 3,
            explanation: 'Labor: $3 \\times 65 = 195$. Bill: $195 + 150 = 345$. Change: $400 - 345 = 55$, so \\$55. \\$345 is the bill, one step early; \\$205 forgets the parts; \\$195 is the labor alone.'
          }
        ]
      }
    },
    {
      id: 'arwn6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The six traps: **stopping early, wrong unit, remainder handled wrong, key-word misread, "how many more" added, starting amount forgotten**
- **Bank time** on one-step items (about 1 minute) to spend on multi-step ones
- You can't go back, so **check before you click**: right question, right unit, sensible size, close to the estimate
- When the setup is hard, **back-solve**: plug a middle choice into the story

> **Up Next:** Part 7 — a mixed mastery set in ASVAB difficulty order.`
    }
  ]
};
