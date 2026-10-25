export const asvabArWholeNumberProblemsPart2Data = {
  topicSlug: 'asvab-ar-whole-number-problems',
  sections: [
    {
      id: 'arwn2-intro',
      type: 'text' as const,
      content: `# 🔢 Word Problems with Whole Numbers

**Part 2 of 7 — Turning Words into Operations**

### Four actions, four operations

Every one-step word problem does one of four things with its numbers. Before you look for key words, ask: **what is the story doing?**

| What the story does | Operation | Common key words |
|:---|:---:|:---|
| **Combines** amounts into one total | Addition | total, combined, in all, altogether, sum |
| **Compares** two amounts, or **takes some away** | Subtraction | difference, how many more, how many fewer, left, remain |
| **Repeats** the same amount several times | Multiplication | each (with a count), per, times, every, at \\$12 each |
| **Splits** an amount into equal groups | Division | split, shared equally, divided among, each (one share) |

### Set up the number sentence before you compute

Write the problem as a short number sentence, with a word standing in for the answer. This takes ten seconds and prevents most operation mistakes.

**Worked Example 1.** Six friends share a \\$420 cabin rental equally. How much does each one pay?

- The story **splits** \\$420 into 6 equal shares.
- Number sentence: $420 \\div 6 = \\text{one share}$
- Compute: $420 \\div 6 = 70$, so each pays \\$70.
- Check: $6 \\times 70 = 420$. ✓

Now flip it: *each of 6 friends pays \\$70; what is the total rent?* The story now **repeats** \\$70 six times: $6 \\times 70 = 420$, so \\$420. The word "each" appears in both versions, but the operations are opposite. That is why the action matters more than any single word.`
    },
    {
      id: 'arwn2-traps',
      type: 'text' as const,
      content: `## When key words mislead you

Key words are a hint, not a rule. Three of them trip up test-takers again and again.

### "How many more" means subtract

**Worked Example 2.** Squad A ran 27 laps and Squad B ran 45 laps. How many more laps did Squad B run?

This **compares** two amounts, so subtract the smaller from the larger: $45 - 27 = 18$ laps.

Adding ($27 + 45 = 72$) is the classic trap: the word "more" makes it look like addition. Check by adding back: $27 + 18 = 45$. ✓

### "Less than" flips the order

"8 less than 30" means start at 30 and take away 8: $30 - 8 = 22$. The number **after** "less than" is the starting amount, so it is written **first**.

**Worked Example 3.** Maria scored 14 points less than twice Leo's score. Leo scored 23. What did Maria score?

- "Twice Leo's score": $2 \\times 23 = 46$
- "14 less than" that: $46 - 14 = 32$

Maria scored 32. Writing $14 - 46$ or $2 \\times (23 - 14) = 18$ both misread the order.

### "Fewer" doesn't always mean subtract

"March had 9 fewer sign-ups than April" tells you **April is bigger**. If you know March and want April, you **add** 9. Always ask *which amount is bigger?* before you pick the operation.

> **Key Fact:** Act the story out in your head. Are things being **combined**, **compared**, **repeated** or **split**? The action tells you the operation even when the key word points the wrong way.`
    },
    {
      id: 'arwn2-reverse',
      type: 'text' as const,
      content: `## "What number" problems: work backwards

Sometimes the story gives you the **result** and asks for the **starting amount**. Write the number sentence with a blank for the unknown, then undo the operation.

| The story did this | To find the start, do this |
|:---:|:---:|
| Added | Subtract |
| Subtracted | Add |
| Multiplied | Divide |
| Divided | Multiply |

**Worked Example 4.** After \\$128 was taken out for taxes, Kim's paycheck was \\$642. What was her pay before the deduction?

- Number sentence: $\\text{pay} - 128 = 642$
- Undo the subtraction by adding: $642 + 128 = 770$, so \\$770.
- Check: $770 - 128 = 642$. ✓

**Reasonableness:** pay *before* a deduction must be **more** than the check. If you subtracted again ($642 - 128 = 514$), your answer would be smaller than the check, which can't be right.

**Worked Example 5.** Theo bought 8 identical event tickets for a total of \\$96. What did one ticket cost?

- Number sentence: $8 \\times \\text{price} = 96$
- Undo the multiplication by dividing: $96 \\div 8 = 12$, so \\$12.
- Check: $8 \\times 12 = 96$. ✓`
    },
    {
      id: 'arwn2-mc',
      type: 'multiple-choice' as const,
      content: '**Choose the operation, then compute.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A recruiting station signed 38 recruits in March. That was 9 fewer than it signed in April. How many recruits did it sign in April?',
            options: ['29', '47', '342', '4'],
            correctAnswer: 1,
            explanation: 'If March is 9 fewer than April, then April is 9 more than March: $38 + 9 = 47$. The answer 29 follows the word "fewer" and subtracts without asking which month is bigger; 342 multiplies the two numbers, and 4 divides 38 by 9 and drops the remainder.'
          },
          {
            question: 'A large fuel truck holds 2,400 gallons, and a small one holds 850 gallons. How many more gallons does the large truck hold?',
            options: ['3,250', '1,650', '1,550', '1,450'],
            correctAnswer: 2,
            explanation: '"How many more" compares, so subtract: $2{,}400 - 850 = 1{,}550$. One clean way: $2{,}400 - 800 = 1{,}600$, then take away the other 50 to get 1,550. Adding the 50 back instead gives 1,650, and 3,250 adds the two capacities. 1,450 comes from subtracting 900 and then taking away 50 more instead of adding 50 back.'
          },
          {
            question: 'After paying a \\$75 deposit, Lena still owes \\$340 on a used laptop. What is the full price of the laptop?',
            options: ['\\$265', '\\$315', '\\$25,500', '\\$415'],
            correctAnswer: 3,
            explanation: '$\\text{price} - 75 = 340$, so undo the subtraction: $340 + 75 = 415$, so \\$415. \\$265 subtracts the deposit again, which can\'t be right because the full price must be more than what she still owes. \\$315 forgets to carry the 1 from $4 + 7 = 11$ in the tens place, and \\$25,500 multiplies the two amounts.'
          }
        ]
      }
    },
    {
      id: 'arwn2-input',
      type: 'input-boxes' as const,
      content: `**Write the number sentence, then solve.** ✍️

**1)** A gym membership costs \\$29 per month. How much does one year of membership cost? (number only, in dollars)

**2)** A crew of 7 splits 245 sandbags equally. How many sandbags does each person carry? (number only, in sandbags)

**3)** A water tank lost 180 gallons during a training exercise and has 465 gallons left. How many gallons were in the tank before the exercise? (number only, in gallons)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['348', '35', '645'],
        hint1: 'One year is 12 months, and the same price repeats each month.',
        hint2: '"Splits equally" means divide: $245 \\div 7$.',
        hint3: '$\\text{start} - 180 = 465$. Undo the subtraction.',
        explanation: '(1) $29 \\times 12 = 290 + 58 = 348$, so \\$348. Estimate: $30 \\times 12 = 360$. (2) $245 \\div 7 = 35$ sandbags; check $7 \\times 35 = 245$. (3) $\\text{start} - 180 = 465$, so the start is $465 + 180 = 645$ gallons; the starting amount has to be bigger than what is left.'
      }
    },
    {
      id: 'arwn2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the operation.** Decide what the story is doing before you compute. 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Rosa drove 312 miles and Sam drove 198 miles. How many more miles did Rosa drive?',
            options: ['addition', 'subtraction', 'multiplication', 'division'],
            correctAnswer: 1
          },
          {
            label: 'Each of 9 vans carries 12 passengers. How many passengers ride in all?',
            options: ['addition', 'subtraction', 'multiplication', 'division'],
            correctAnswer: 2
          },
          {
            label: 'A 96-foot rope is cut into 8 equal pieces. How long is each piece?',
            options: ['addition', 'subtraction', 'multiplication', 'division'],
            correctAnswer: 3
          },
          {
            label: 'A pack weighs 35 pounds and a sleeping bag weighs 9 pounds. What is their combined weight?',
            options: ['addition', 'subtraction', 'multiplication', 'division'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['subtraction', 'multiplication', 'division', 'addition'],
        hint1: '"How many more" compares two amounts.',
        hint2: 'The same 12 passengers repeat for each of the 9 vans.',
        hint3: 'Cutting into equal pieces splits the rope; "combined" puts two amounts together.',
        explanation: 'Comparing (how many more) is subtraction: $312 - 198 = 114$ miles. Repeating 12 nine times is multiplication: 108 passengers. Splitting 96 feet into 8 equal pieces is division: 12 feet each. Combining two weights is addition: 44 pounds.'
      }
    },
    {
      id: 'arwn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Ask what the story **does**: combine (add), compare or take away (subtract), repeat (multiply), split (divide)
- **Write the number sentence** before you compute
- "How many more" is **subtraction**; "8 less than 30" is $30 - 8$; "fewer" can mean you **add** if you are finding the bigger amount
- "What number" problems: **undo** the operation, then check that the starting amount makes sense

> **Up Next:** Part 3 — chaining two to four steps together, and the order of operations.`
    }
  ]
};
