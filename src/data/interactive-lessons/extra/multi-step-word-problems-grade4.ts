import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multi-Step Word Problems (Grade 4 Math).
 * Registry key: 'multi-step-word-problems-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multi-step-word-problems-grade4',
    sections: [
      {
        id: 'mswp1-intro',
        type: 'text' as const,
        content: `# 🧩 Multi-Step Word Problems

**Part 1 of 5 — What Makes a Problem "Multi-Step"?**

---

### Topics in This Part

| Section |
|---------|
| One-Step vs. Multi-Step |
| Finding the Hidden Question |
| The 4-Step Plan (Read, Plan, Solve, Check) |

> 🔑 **Key Idea:** A **multi-step** word problem cannot be solved with a single calculation. You have to find a *hidden* answer first, then use it to reach the *real* answer.`,
      },
      {
        id: 'mswp1-onevsmulti',
        type: 'text' as const,
        content: `## One-Step vs. Multi-Step

A **one-step** problem needs just one operation:

> *Maya has 12 stickers. She buys 8 more. How many does she have?*
> One step: $12 + 8 = 20$.

A **multi-step** problem hides a number you must find *before* you can answer:

> *Maya has 12 stickers. She buys 3 packs with 8 stickers each. How many does she have now?*

You can't just add — first you must find how many stickers are in the 3 packs:

$$\\text{Step 1: } 3 \\times 8 = 24 \\text{ stickers in the packs}$$
$$\\text{Step 2: } 12 + 24 = 36 \\text{ stickers total}$$

> 💡 The number **24** is the *hidden answer*. The question never asks for it directly, but you need it to finish.`,
      },
      {
        id: 'mswp1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which problem is multi-step (needs more than one calculation)?',
              options: [
                'A box has 6 crayons. How many crayons in 4 boxes?',
                'Sam reads 5 books in March and 7 in April. He gives 3 away. How many does he keep?',
                'There are 9 birds on a wire. 4 fly away. How many are left?',
                'A bag holds 20 marbles. How many marbles in the bag?',
              ],
              correctAnswer: 1,
              explanation: 'Sam\'s problem needs two steps: first add $5 + 7 = 12$ books, then subtract $12 - 3 = 9$. The others each need only one operation (or none).',
            },
            {
              question: 'In a multi-step problem, the "hidden answer" is:',
              options: [
                'The final answer the question asks for',
                'A number you find first and then use in the next step',
                'A number that is written in the problem already',
                'A number you can ignore',
              ],
              correctAnswer: 1,
              explanation: 'The hidden answer is an in-between number you must calculate first. You then use it to reach the final answer the question asks for.',
            },
          ],
        },
      },
      {
        id: 'mswp1-fourstep',
        type: 'text' as const,
        content: `## The 4-Step Plan

Use this plan on *every* multi-step problem:

| Step | What you do |
|------|-------------|
| **1. Read** | Read twice. What is the question really asking? |
| **2. Plan** | List the steps and pick an operation for each. |
| **3. Solve** | Do the steps in order. Label each number. |
| **4. Check** | Does the answer make sense? Estimate to be sure. |

> ⚠️ **Watch Out:** Many students answer the *hidden* question by mistake (like writing "24 stickers" instead of "36"). Always re-read the question at the end to make sure you answered what was asked.`,
      },
      {
        id: 'mswp1-hiddenq',
        type: 'dropdown-select' as const,
        content: `**Find the Hidden Step** 🔽

*A school orders 4 boxes of markers. Each box has 10 markers. The teacher then gives away 15 markers. How many markers are left?*

Choose the correct operation for each step.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — find the total markers ordered:', options: ['$4 \\times 10$', '$4 + 10$', '$10 - 4$', '$10 \\div 4$'] },
            { label: 'Step 2 — find how many are left:', options: ['$40 - 15$', '$40 + 15$', '$15 - 40$', '$40 \\times 15$'] },
            { label: 'The final answer is:', options: ['$25$ markers', '$40$ markers', '$55$ markers', '$15$ markers'] },
          ],
          correctAnswers: ['$4 \\times 10$', '$40 - 15$', '$25$ markers'],
          hint1: '"4 boxes of 10" means 4 groups of 10 — that is multiplication.',
          hint2: 'After finding $40$ markers, "gives away 15" means you subtract.',
          hint3: 'Step 1: $4 \\times 10 = 40$. Step 2: $40 - 15 = 25$.',
          explanation: 'First find the hidden answer: $4 \\times 10 = 40$ markers. Then subtract the ones given away: $40 - 15 = 25$ markers left.',
        },
      },
      {
        id: 'mswp1-firstdrill',
        type: 'input-boxes' as const,
        content: `**Your First Two-Step Problems** 🧮

Solve each. Enter just the final number.

**1)** A farmer collects 6 eggs each day for 5 days. He uses 9 eggs. How many eggs are left?
**2)** Liam saves 8 dollars a week for 4 weeks. He spends 12 dollars. How many dollars does he have left?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['21', '20'],
          hint1: 'Problem 1 — first find total eggs: $6 \\times 5$. Then subtract the 9 used.',
          hint2: 'Problem 1: $6 \\times 5 = 30$, then $30 - 9 = 21$.',
          hint3: 'Problem 2: $8 \\times 4 = 32$ dollars saved, then $32 - 12 = 20$ dollars left.',
          explanation: '1) $6 \\times 5 = 30$ eggs, then $30 - 9 = 21$ eggs left. 2) $8 \\times 4 = 32$ dollars, then $32 - 12 = 20$ dollars left.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multi-step-word-problems-grade4',
    sections: [
      {
        id: 'mswp2-intro',
        type: 'text' as const,
        content: `# 🧩 Multi-Step Word Problems

**Part 2 of 5 — Choosing the Right Operations**

---

> 🔑 **The Skill:** In a multi-step problem, each step might use a *different* operation. The hard part is matching the **clue words** in the story to $+$, $-$, $\\times$, or $\\div$.`,
      },
      {
        id: 'mswp2-cluewords',
        type: 'text' as const,
        content: `## Clue Words for Each Operation

| Operation | Clue words | Example phrase |
|-----------|-----------|----------------|
| **Add** $+$ | total, altogether, in all, combined, sum | "How many in all?" |
| **Subtract** $-$ | left, fewer, difference, how many more, remain | "How many are left?" |
| **Multiply** $\\times$ | groups of, each, per, times, rows of | "5 boxes of 8" |
| **Divide** $\\div$ | split equally, shared, each gets, how many groups | "shared among 4 friends" |

> 💡 **"Each" is tricky!** "5 bags with 6 apples *each*" means multiply ($5 \\times 6$). But "share 30 apples so each friend gets the same" means divide ($30 \\div 5$). Read the *whole* sentence, not just the word.`,
      },
      {
        id: 'mswp2-matchop',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which phrase tells you to DIVIDE?',
              options: [
                '"3 shelves with 7 books each"',
                '"24 cookies shared equally among 4 plates"',
                '"5 more than yesterday"',
                '"the total of both teams"',
              ],
              correctAnswer: 1,
              explanation: '"Shared equally among 4 plates" means split 24 into 4 equal groups: $24 \\div 4 = 6$. That is division.',
            },
            {
              question: '"There are 8 rows of chairs with 9 chairs in each row." To find the total chairs you should:',
              options: ['Add $8 + 9$', 'Subtract $9 - 8$', 'Multiply $8 \\times 9$', 'Divide $9 \\div 8$'],
              correctAnswer: 2,
              explanation: '"8 rows with 9 in each" is 8 groups of 9, so multiply: $8 \\times 9 = 72$ chairs.',
            },
          ],
        },
      },
      {
        id: 'mswp2-worked',
        type: 'text' as const,
        content: `## Worked Example: Two Different Operations

> *A bakery makes 9 trays of muffins with 6 muffins on each tray. They sell 40 muffins. How many muffins are left?*

**Step 1 — "9 trays with 6 each" → multiply:**
$$9 \\times 6 = 54 \\text{ muffins made}$$

**Step 2 — "sell 40" / "how many left" → subtract:**
$$54 - 40 = 14 \\text{ muffins left}$$

> ✅ **Check:** $14$ muffins left $+ 40$ sold $= 54$ made. And $9 \\times 6 = 54$. ✓ It matches!`,
      },
      {
        id: 'mswp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Operation** 🔽

*A library has 7 shelves. Each shelf holds 20 books. Then 35 books are checked out. How many books remain?*`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — total books on the shelves:', options: ['multiply', 'add', 'subtract', 'divide'] },
            { label: 'Step 2 — books that remain:', options: ['subtract', 'add', 'multiply', 'divide'] },
            { label: 'The answer is:', options: ['$105$ books', '$140$ books', '$27$ books', '$62$ books'] },
          ],
          correctAnswers: ['multiply', 'subtract', '$105$ books'],
          hint1: '"7 shelves, each holds 20" is 7 groups of 20 — multiply.',
          hint2: '"Checked out" means books leave, so subtract.',
          hint3: 'Step 1: $7 \\times 20 = 140$. Step 2: $140 - 35 = 105$.',
          explanation: 'Step 1: $7 \\times 20 = 140$ books total. Step 2: $140 - 35 = 105$ books remain.',
        },
      },
      {
        id: 'mswp2-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Operations Drill** 🧮

Solve each two-step problem. Enter the final number.

**1)** 5 friends each pick 7 flowers. They give 6 flowers to a teacher. How many flowers do they keep?
**2)** A store has 48 apples. They put them equally into 6 baskets, then sell 1 whole basket. How many apples are sold?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['29', '8'],
          hint1: 'Problem 1: first $5 \\times 7 = 35$ flowers, then subtract 6.',
          hint2: 'Problem 2: "equally into 6 baskets" means $48 \\div 6$ per basket.',
          hint3: 'Problem 2: $48 \\div 6 = 8$ apples per basket, and 1 basket is sold, so $8$ apples are sold.',
          explanation: '1) $5 \\times 7 = 35$, then $35 - 6 = 29$ flowers kept. 2) $48 \\div 6 = 8$ apples per basket; selling 1 basket sells $8$ apples.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multi-step-word-problems-grade4',
    sections: [
      {
        id: 'mswp3-intro',
        type: 'text' as const,
        content: `# 🧩 Multi-Step Word Problems

**Part 3 of 5 — Money, Time & Measurement**

---

> 🔑 **Real-World Math:** The most common multi-step problems are about **money** (making change), **time** (figuring out how long), and **measurement** (combining lengths or weights). The same 4-step plan works for all of them.`,
      },
      {
        id: 'mswp3-money',
        type: 'text' as const,
        content: `## Money Problems & Making Change

> *Noah buys 3 notebooks that cost \\$4 each. He pays with a \\$20 bill. How much change does he get back?*

**Step 1 — "3 notebooks at \\$4 each" → multiply:**
$$3 \\times \\$4 = \\$12 \\text{ total cost}$$

**Step 2 — "pays with \\$20, change?" → subtract:**
$$\\$20 - \\$12 = \\$8 \\text{ in change}$$

> 💡 **Change = Money Paid − Total Cost.** Find the total cost first (that's the hidden step), then subtract it from what was handed over.`,
      },
      {
        id: 'mswp3-moneycheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Ava buys 4 pens for \\$3 each and pays with a \\$20 bill. How much change does she get?',
              options: ['\\$8', '\\$12', '\\$17', '\\$32'],
              correctAnswer: 0,
              explanation: 'Total cost: $4 \\times \\$3 = \\$12$. Change: $\\$20 - \\$12 = \\$8$.',
            },
            {
              question: 'A movie ticket costs \\$9. A family buys 5 tickets. How much do they spend in all?',
              options: ['\\$14', '\\$40', '\\$45', '\\$54'],
              correctAnswer: 2,
              explanation: '"5 tickets at \\$9 each" means $5 \\times \\$9 = \\$45$.',
            },
          ],
        },
      },
      {
        id: 'mswp3-time',
        type: 'text' as const,
        content: `## Time & Measurement Problems

**Time example:**

> *A movie starts at 3:00 and lasts 2 hours. Then there is a 30-minute drive home. What time do you get home?*

**Step 1 — movie ends:** $3\\!:\\!00 + 2 \\text{ hours} = 5\\!:\\!00$
**Step 2 — drive home:** $5\\!:\\!00 + 30 \\text{ min} = 5\\!:\\!30$

**Measurement example:**

> *A ribbon is 8 feet long. You cut off 3 pieces that are each 2 feet long. How much ribbon is left?*

**Step 1 — ribbon cut off:** $3 \\times 2 = 6 \\text{ feet}$
**Step 2 — ribbon left:** $8 - 6 = 2 \\text{ feet}$

> ⚠️ With time, remember there are **60 minutes in an hour**, not 100. With measurement, make sure all your numbers use the **same unit** before you add or subtract.`,
      },
      {
        id: 'mswp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Money Word Problem** 🔽

*Sofia has \\$25. She buys 2 books for \\$6 each and 1 bookmark for \\$3. How much money does she have left?*`,
        exercise: {
          dropdowns: [
            { label: 'Cost of the 2 books:', options: ['$2 \\times \\$6 = \\$12$', '$2 + \\$6 = \\$8$', '$\\$6 - 2 = \\$4$', '$2 \\times \\$3 = \\$6$'] },
            { label: 'Total spent (books + bookmark):', options: ['$\\$12 + \\$3 = \\$15$', '$\\$12 - \\$3 = \\$9$', '$\\$12 + \\$6 = \\$18$', '$\\$6 + \\$3 = \\$9$'] },
            { label: 'Money left:', options: ['$\\$25 - \\$15 = \\$10$', '$\\$25 - \\$12 = \\$13$', '$\\$25 - \\$3 = \\$22$', '$\\$25 + \\$15 = \\$40$'] },
          ],
          correctAnswers: ['$2 \\times \\$6 = \\$12$', '$\\$12 + \\$3 = \\$15$', '$\\$25 - \\$15 = \\$10$'],
          hint1: 'First find the cost of the 2 books: 2 groups of \\$6.',
          hint2: 'Add the bookmark to the books to get total spent.',
          hint3: '$2 \\times \\$6 = \\$12$; $\\$12 + \\$3 = \\$15$ spent; $\\$25 - \\$15 = \\$10$ left.',
          explanation: 'Books cost $2 \\times \\$6 = \\$12$. Total spent $= \\$12 + \\$3 = \\$15$. Money left $= \\$25 - \\$15 = \\$10$.',
        },
      },
      {
        id: 'mswp3-drill',
        type: 'input-boxes' as const,
        content: `**Money, Time & Measure Drill** 🧮

Enter the final number only (no \\$ sign or units).

**1)** A toy costs \\$7. You buy 2 toys and pay with \\$20. How many dollars of change do you get?
**2)** A board is 15 feet long. You cut off 4 pieces, each 3 feet long. How many feet are left?
**3)** Practice starts at 4:00 and lasts 90 minutes. How many hours long is practice? *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', '1.5'],
          hint1: 'Problem 1: cost is $2 \\times \\$7 = \\$14$, then change is $\\$20 - \\$14$.',
          hint2: 'Problem 2: cut off $4 \\times 3 = 12$ feet, then $15 - 12$.',
          hint3: 'Problem 3: $90$ minutes $= 60 + 30$, which is $1$ whole hour plus a half hour $= 1.5$ hours.',
          explanation: '1) $2 \\times \\$7 = \\$14$; $\\$20 - \\$14 = \\$6$ change. 2) $4 \\times 3 = 12$ feet cut; $15 - 12 = 3$ feet left. 3) $90 \\div 60 = 1.5$ hours.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multi-step-word-problems-grade4',
    sections: [
      {
        id: 'mswp4-intro',
        type: 'text' as const,
        content: `# 🧩 Multi-Step Word Problems

**Part 4 of 5 — Estimating & Checking Your Answer**

---

> 🔑 **Be Your Own Checker:** A good problem-solver always asks "Does my answer make sense?" **Estimating** (rounding to easy numbers) is the fastest way to catch a big mistake.`,
      },
      {
        id: 'mswp4-estimate',
        type: 'text' as const,
        content: `## Estimating to Check

To estimate, **round** each number to the nearest ten (or hundred), then do the easy math.

> *A class collects 38 cans on Monday and 41 cans on Tuesday. They split them equally among 4 boxes. About how many cans per box?*

**Estimate first:** $38 \\approx 40$ and $41 \\approx 40$, so $40 + 40 = 80$, then $80 \\div 4 = 20$. Expect **about 20**.

**Exact answer:** $38 + 41 = 79$, then... $79$ isn't a clean divide, but our estimate of $20$ tells us the real per-box number should be close to $20$. If you got $200$ or $5$, you'd know something went wrong!

> 💡 An estimate won't give the *exact* answer — it gives you a **target zone**. If your real answer lands far from the estimate, recheck your steps.`,
      },
      {
        id: 'mswp4-estcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Estimate: $29 \\times 4$. Rounding 29 to 30, about how much is it?',
              options: ['About 70', 'About 120', 'About 300', 'About 33'],
              correctAnswer: 1,
              explanation: 'Round $29 \\approx 30$, then $30 \\times 4 = 120$. The real answer ($116$) is close, so $120$ is a good estimate.',
            },
            {
              question: 'A student solved a problem and got 450 cookies for one small bakery in a day. The estimate was "about 50." What should the student do?',
              options: [
                'Trust 450 — estimates are always wrong',
                'Recheck the steps — 450 is very far from the estimate of 50',
                'Change the estimate to 450',
                'Add the two numbers together',
              ],
              correctAnswer: 1,
              explanation: 'When the real answer (450) is far from a careful estimate (50), it is a warning sign. The student should recheck the steps to find a mistake.',
            },
          ],
        },
      },
      {
        id: 'mswp4-reasonable',
        type: 'text' as const,
        content: `## Is the Answer Reasonable?

Besides estimating, ask common-sense questions:

| Ask yourself | Why it helps |
|--------------|--------------|
| Should the answer be **bigger or smaller** than the numbers in the story? | Multiplying/adding grows; subtracting/dividing shrinks. |
| Did I answer the **real** question (not the hidden one)? | Re-read the last sentence. |
| Do the **units** make sense? (dollars, feet, cookies) | A "time" answer shouldn't be in dollars. |

> ⚠️ **Reasonableness trap:** If a problem says "Jon shares 12 candies with 3 friends," each friend can't get *more* than 12. An answer of $36$ would be unreasonable — division should make the number *smaller*: $12 \\div 3 = 4$.`,
      },
      {
        id: 'mswp4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reasonable or Not?** 🔽

For each, decide whether the answer is **reasonable** or **not reasonable**.`,
        exercise: {
          dropdowns: [
            { label: '"15 students share 30 pencils equally." Answer: each gets 2 pencils.', options: ['reasonable', 'not reasonable'] },
            { label: '"A pizza is cut into 8 slices. 3 are eaten." Answer: 11 slices are left.', options: ['not reasonable', 'reasonable'] },
            { label: '"6 boxes of 9 crayons, then 4 lost." Answer: about 50 crayons.', options: ['reasonable', 'not reasonable'] },
          ],
          correctAnswers: ['reasonable', 'not reasonable', 'reasonable'],
          hint1: '$30 \\div 15 = 2$ pencils each — that fits.',
          hint2: 'You can\'t have MORE slices after eating some. Eating should make the number go down.',
          hint3: '$6 \\times 9 = 54$, then $54 - 4 = 50$ — "about 50" matches.',
          explanation: 'Row 1: $30 \\div 15 = 2$ ✓ reasonable. Row 2: eating slices must *reduce* the count, so 11 (more than 8) is not reasonable. Row 3: $6 \\times 9 - 4 = 50$, so "about 50" is reasonable.',
        },
      },
      {
        id: 'mswp4-drill',
        type: 'input-boxes' as const,
        content: `**Estimate, Then Solve** 🧮

For each, enter the EXACT final answer.

**1)** A store sells 19 toy cars on Saturday and 22 on Sunday. They split the weekend total into 3 equal display cases left over... actually, find just the weekend total: how many cars in all?
**2)** There are 4 tables with 12 chairs each. 7 chairs are broken and removed. How many chairs are usable?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['41', '41'],
          hint1: 'Problem 1: just add the two days, $19 + 22$. Estimate: $20 + 20 = 40$.',
          hint2: 'Problem 2: first $4 \\times 12 = 48$ chairs, then remove 7.',
          hint3: 'Problem 2: $4 \\times 12 = 48$, then $48 - 7 = 41$ usable chairs.',
          explanation: '1) $19 + 22 = 41$ cars (estimate $40$, so reasonable). 2) $4 \\times 12 = 48$ chairs, then $48 - 7 = 41$ usable chairs.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multi-step-word-problems-grade4',
    sections: [
      {
        id: 'mswp5-intro',
        type: 'text' as const,
        content: `# 🧩 Multi-Step Word Problems

**Part 5 of 5 — Putting It All Together & Mastery Check**

---

You can now (1) spot a multi-step problem, (2) choose the right operation for each step, (3) handle money, time, and measurement, and (4) estimate to check. Time to put it all together!`,
      },
      {
        id: 'mswp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Spot the multi-step | Look for a **hidden answer** you must find first |
| Choose operations | Match **clue words** to $+\\;-\\;\\times\\;\\div$ |
| Make change | Total cost first, then **Money Paid − Cost** |
| Check your work | **Estimate** by rounding; ask "is this reasonable?" |

> 🔑 **The 4-Step Plan never changes:** **Read** → **Plan** → **Solve** → **Check**. Always re-read the final question so you answer what was actually asked — not the hidden number.`,
      },
      {
        id: 'mswp5-bigworked',
        type: 'text' as const,
        content: `## One Big Worked Example

> *A class of 24 students goes on a field trip. Tickets cost \\$5 each. The teacher has \\$150. How much money is left after buying everyone a ticket?*

**Step 1 — Read:** We need the *money left* after buying 24 tickets.

**Step 2 & 3 — Plan & Solve:**
Total cost: $24 \\times 5 = 120$, i.e. \\$120
Money left: $150 - 120 = 30$, i.e. \\$30

**Step 4 — Check:** Estimate $25 \\times 5 = 125$, i.e. \\$125, and $150 - 125 = 25$, i.e. \\$25. Our answer \\$30 is close to \\$25, so it's reasonable. ✓

> 💡 The hidden answer was \\$120 (the total cost). The **real** answer is \\$30 (money left). Always finish the last step!`,
      },
      {
        id: 'mswp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A gardener plants 6 rows of 8 tomato plants. Then 5 plants don\'t grow. How many plants grow?',
              options: ['43', '48', '53', '19'],
              correctAnswer: 0,
              explanation: 'Step 1: $6 \\times 8 = 48$ plants. Step 2: $48 - 5 = 43$ plants grow.',
            },
            {
              question: 'Jordan buys 3 packs of cards with 10 cards each, then gives 8 cards to a friend. How many cards does Jordan have left?',
              options: ['22', '30', '38', '13'],
              correctAnswer: 0,
              explanation: 'Step 1: $3 \\times 10 = 30$ cards. Step 2: $30 - 8 = 22$ cards left.',
            },
          ],
        },
      },
      {
        id: 'mswp5-finaldrill',
        type: 'input-boxes' as const,
        content: `**Mastery Drill** 🧮

Enter the final number only.

**1)** A baker makes 5 batches of 12 cookies. She sells 48 cookies. How many cookies are left?
**2)** 7 kids each bring 6 stickers to school. They put them into 3 equal piles. How many stickers are in each pile? *(decimal is fine)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '14'],
          hint1: 'Problem 1: $5 \\times 12 = 60$ cookies, then subtract 48.',
          hint2: 'Problem 2: first find the total stickers, $7 \\times 6$.',
          hint3: 'Problem 2: $7 \\times 6 = 42$ stickers, then $42 \\div 3 = 14$ per pile.',
          explanation: '1) $5 \\times 12 = 60$, then $60 - 48 = 12$ cookies left. 2) $7 \\times 6 = 42$ stickers, then $42 \\div 3 = 14$ stickers per pile.',
        },
      },
      {
        id: 'mswp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A store has 9 boxes with 7 toys in each box. They sell 20 toys. How many toys are left?',
              options: ['43', '63', '36', '23'],
              correctAnswer: 0,
              explanation: 'Step 1: $9 \\times 7 = 63$ toys. Step 2: $63 - 20 = 43$ toys left.',
            },
            {
              question: 'Mia pays for 4 muffins that cost \\$2 each using a \\$20 bill. How much change does she get back?',
              options: ['\\$12', '\\$8', '\\$16', '\\$28'],
              correctAnswer: 0,
              explanation: 'Total cost: $4 \\times \\$2 = \\$8$. Change: $\\$20 - \\$8 = \\$12$.',
            },
            {
              question: 'In a two-step problem, you found the hidden answer is 24 and the question asks "how many are left after using 9." What is the final answer?',
              options: ['15', '24', '33', '9'],
              correctAnswer: 0,
              explanation: 'The hidden answer (24) is not the end. "How many left after using 9" means $24 - 9 = 15$. Always finish the last step!',
            },
          ],
        },
      },
    ],
  },
]
