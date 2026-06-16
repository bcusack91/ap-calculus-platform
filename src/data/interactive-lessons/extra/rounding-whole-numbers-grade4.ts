import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rounding Whole Numbers (Grade 4 Math).
 * Registry key: 'rounding-whole-numbers-grade4'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Grade-4-friendly tone and numbers.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rounding-whole-numbers-grade4',
    sections: [
      {
        id: 'rwn1-intro',
        type: 'text' as const,
        content: `# 🔢 Rounding Whole Numbers

**Part 1 of 5 — Place Value, the Map Behind Rounding**

---

### Topics in This Part

| Section |
|---------|
| Why We Round |
| Place Value up to the Millions |
| Naming the Digit in Any Place |

> 🔑 **Key Concept:** Rounding means trading an exact number for a *close, easier* number. Before we can round, we have to know our **place values** cold — they are the map that tells us where to round. That is what Part 1 builds.`,
      },
      {
        id: 'rwn1-why',
        type: 'text' as const,
        content: `## Why We Round

You don't always need an exact number. When a number is *close enough* to be useful, we **round** it.

- A stadium holds $48{,}273$ people. The newspaper says **"about $48{,}000$ fans."**
- A school raised \\$1,962. The principal announces **"nearly \\$2,000!"**
- A road trip is $311$ miles. Mom says **"around $300$ miles."**

Each rounded number is easier to say, remember, and picture — and it's still honest, because it stays close to the real value.

> 💡 **Round = "make it friendlier."** We keep the size of the number but smooth off the messy end so it's quick to use.`,
      },
      {
        id: 'rwn1-placevalue',
        type: 'text' as const,
        content: `## Place Value up to the Millions

Every digit in a number sits in a **place**, and each place is worth **10 times** the place to its right.

| Place | Value of one in that place |
|-------|----------------------------|
| Ones | $1$ |
| Tens | $10$ |
| Hundreds | $100$ |
| Thousands | $1{,}000$ |
| Ten-thousands | $10{,}000$ |
| Hundred-thousands | $100{,}000$ |
| Millions | $1{,}000{,}000$ |

Let's read **$527{,}364$** properly:

| Digit | $5$ | $2$ | $7$ | $3$ | $6$ | $4$ |
|-------|-----|-----|-----|-----|-----|-----|
| Place | hundred-thousands | ten-thousands | thousands | hundreds | tens | ones |

So $527{,}364$ = five hundred twenty-seven thousand, three hundred sixty-four.

> 🔑 **The comma helps you read.** It splits the number into groups of three: **millions | thousands | ones**.`,
      },
      {
        id: 'rwn1-name-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $48{,}273$, which digit is in the **thousands** place?',
              options: ['$8$', '$4$', '$2$', '$7$'],
              correctAnswer: 0,
              explanation: 'Reading from the right: $3$ ones, $7$ tens, $2$ hundreds, $8$ thousands, $4$ ten-thousands. So the thousands digit is $8$.',
            },
            {
              question: 'What is the value of the digit $6$ in $36{,}500$?',
              options: ['$6{,}000$', '$600$', '$60$', '$60{,}000$'],
              correctAnswer: 0,
              explanation: 'The $6$ sits in the thousands place, so it is worth $6 \\times 1{,}000 = 6{,}000$.',
            },
          ],
        },
      },
      {
        id: 'rwn1-name-drill',
        type: 'input-boxes' as const,
        content: `**Name That Place** 🧮

Look at the number **$734{,}892$** and answer with a single digit.

**1)** Which digit is in the **hundreds** place?
**2)** Which digit is in the **ten-thousands** place?
**3)** Which digit is in the **ones** place?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '3', '2'],
          hint1: 'Start at the right end and count places: ones, tens, hundreds…',
          hint2: 'Ones $=2$, tens $=9$, hundreds $=8$. The hundreds digit is $8$.',
          hint3: 'Thousands $=4$, ten-thousands $=3$, hundred-thousands $=7$.',
          explanation: '$734{,}892$: ones $2$, tens $9$, hundreds $8$, thousands $4$, ten-thousands $3$, hundred-thousands $7$.',
        },
      },
      {
        id: 'rwn1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Place** 🔽

Use the number **$615{,}049$** to fill in each blank.`,
        exercise: {
          dropdowns: [
            { label: 'The digit in the **thousands** place is:', options: ['$5$', '$6$', '$1$', '$4$'] },
            { label: 'The digit in the **hundred-thousands** place is:', options: ['$6$', '$1$', '$5$', '$0$'] },
            { label: 'The value of the digit $1$ is:', options: ['$10{,}000$', '$1{,}000$', '$100{,}000$', '$100$'] },
          ],
          correctAnswers: ['$5$', '$6$', '$10{,}000$'],
          hint1: 'Reading $615{,}049$ from the right: ones $9$, tens $4$, hundreds $0$, thousands $5$, ten-thousands $1$, hundred-thousands $6$.',
          hint2: 'The thousands digit is $5$ and the hundred-thousands digit is $6$.',
          hint3: 'The $1$ sits in the ten-thousands place, so it is worth $1 \\times 10{,}000 = 10{,}000$.',
          explanation: '$615{,}049$: thousands digit $= 5$, hundred-thousands digit $= 6$, and the $1$ is in the ten-thousands place, worth $10{,}000$.',
        },
      },
      {
        id: 'rwn1-wrap',
        type: 'text' as const,
        content: `## You're Ready to Round

You can now spot the digit in any place. That's the whole foundation, because rounding always starts the same way: **"To which place am I rounding?"**

In Part 2 we'll meet the **number line**, the picture that makes rounding feel obvious — you'll *see* which way a number leans.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rounding-whole-numbers-grade4',
    sections: [
      {
        id: 'rwn2-intro',
        type: 'text' as const,
        content: `# 🔢 Rounding Whole Numbers

**Part 2 of 5 — The Number Line Picture**

---

> 🔑 **The Idea:** Rounding asks, *"Which landmark number is my number closest to?"* A **number line** lets you see the two nearest landmarks and decide which one wins.`,
      },
      {
        id: 'rwn2-nearest',
        type: 'text' as const,
        content: `## Nearest Ten

To round to the nearest **ten**, find the two tens your number sits between, then pick the closer one.

Round **$47$** to the nearest ten:

\`\`\`
40 ----------------------- 47 -- 50
          (lower)               (upper)
\`\`\`

- $47$ is between $40$ and $50$.
- It's only $3$ away from $50$ but $7$ away from $40$.
- So $47$ rounds **up** to $\\mathbf{50}$.

### The Halfway Mark

The exact middle between $40$ and $50$ is **$45$**. This is the tie-breaker line:

- Below $45$ → round **down** to $40$.
- At $45$ or above → round **up** to $50$.

> 🔑 **The rule of $5$:** if a number lands on the halfway mark ($45$, $450$, etc.) we agree to round **up**. Math teachers everywhere use this "round half up" rule.`,
      },
      {
        id: 'rwn2-nearest-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the number line, which two tens does $63$ sit between?',
              options: ['$60$ and $70$', '$50$ and $60$', '$63$ and $64$', '$6$ and $7$'],
              correctAnswer: 0,
              explanation: '$63$ is more than $60$ but less than $70$, so it sits between $60$ and $70$.',
            },
            {
              question: 'Rounding $45$ to the nearest ten gives:',
              options: ['$50$', '$40$', '$45$', '$100$'],
              correctAnswer: 0,
              explanation: '$45$ is exactly halfway. By the "round half up" rule, it rounds **up** to $50$.',
            },
          ],
        },
      },
      {
        id: 'rwn2-hundred',
        type: 'text' as const,
        content: `## Nearest Hundred

The same picture works for **hundreds** — just use hundred landmarks.

Round **$273$** to the nearest hundred:

\`\`\`
200 -------------- 250 ------ 273 -- 300
              (halfway)            (upper)
\`\`\`

- $273$ is between $200$ and $300$.
- The halfway mark is $250$.
- $273$ is **past** $250$, so it rounds **up** to $\\mathbf{300}$.

And round **$612$** to the nearest hundred:

- Between $600$ and $700$, halfway is $650$.
- $612$ is **before** $650$, so it rounds **down** to $\\mathbf{600}$.

> 💡 You never have to draw the whole line. Just ask: *"Did my number pass the halfway mark?"* Past it → up. Before it → down.`,
      },
      {
        id: 'rwn2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Up or Down?** 🔽

Decide which way each number leans, then give the rounded result.`,
        exercise: {
          dropdowns: [
            { label: '$38$ to the nearest ten rounds…', options: ['up', 'down'] },
            { label: '…to give', options: ['$40$', '$30$', '$38$', '$50$'] },
            { label: '$420$ to the nearest hundred rounds…', options: ['down', 'up'] },
            { label: '…to give', options: ['$400$', '$500$', '$420$', '$450$'] },
          ],
          correctAnswers: ['up', '$40$', 'down', '$400$'],
          hint1: '$38$ is between $30$ and $40$; halfway is $35$. $38$ is past $35$.',
          hint2: 'Past the halfway mark means round up; $38 \\to 40$.',
          hint3: '$420$ is between $400$ and $500$; halfway is $450$. $420$ is before $450$, so round down to $400$.',
          explanation: '$38$ passes the halfway mark $35$, so it rounds **up** to $40$. $420$ has not reached the halfway mark $450$, so it rounds **down** to $400$.',
        },
      },
      {
        id: 'rwn2-drill',
        type: 'input-boxes' as const,
        content: `**Round with the Picture** 🧮

**1)** Round $61$ to the nearest ten. $=\\,?$
**2)** Round $85$ to the nearest ten. $=\\,?$
**3)** Round $349$ to the nearest hundred. $=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '90', '300'],
          hint1: '$61$ is between $60$ and $70$; halfway is $65$. $61$ is before $65$.',
          hint2: '$85$ is exactly halfway between $80$ and $90$, so round half **up**.',
          hint3: '$349$ is between $300$ and $400$; halfway is $350$. $349$ is just *before* $350$.',
          explanation: '1) $61 \\to 60$ (before $65$).  2) $85 \\to 90$ (halfway rounds up).  3) $349 \\to 300$ (just before $350$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rounding-whole-numbers-grade4',
    sections: [
      {
        id: 'rwn3-intro',
        type: 'text' as const,
        content: `# 🔢 Rounding Whole Numbers

**Part 3 of 5 — The Digit Rule (No Number Line Needed)**

---

> 🔑 **Why it works:** Drawing a line is slow. The **digit rule** does the same thing instantly: just peek at the digit *one place to the right* of where you're rounding.`,
      },
      {
        id: 'rwn3-steps',
        type: 'text' as const,
        content: `## The 4-Step Digit Rule

To round any whole number:

1. **Find** the digit in the place you are rounding to. Call it the **rounding digit**. Underline it.
2. **Look right** — at the very next digit. This is the **decider**.
3. **Decide:**
   - Decider is $0,1,2,3,4$ → **round down** (rounding digit stays the same).
   - Decider is $5,6,7,8,9$ → **round up** (rounding digit goes up by $1$).
4. **Replace** every digit to the *right* of the rounding digit with **$0$**.

> 🔑 **"$5$ or more, raise the score. $4$ or less, let it rest."** That rhyme is the whole rule.

### Worked Example: round $3{,}471$ to the nearest hundred

1. Rounding digit (hundreds) = **$4$** → $3{,}\\underline{4}71$
2. Decider (next digit right) = $7$
3. $7$ is "$5$ or more" → round up: $4 \\to 5$
4. Zero out the rest → $3{,}500$

$$3{,}471 \\;\\longrightarrow\\; 3{,}500$$`,
      },
      {
        id: 'rwn3-worked2',
        type: 'text' as const,
        content: `### Worked Example: round $3{,}471$ to the nearest **thousand**

1. Rounding digit (thousands) = **$3$** → $\\underline{3}{,}471$
2. Decider = $4$ (the hundreds digit)
3. $4$ is "$4$ or less" → round down: $3$ stays $3$
4. Zero out the rest → $3{,}000$

$$3{,}471 \\;\\longrightarrow\\; 3{,}000$$

### Worked Example: round $58{,}640$ to the nearest **ten-thousand**

1. Rounding digit (ten-thousands) = **$5$** → $\\underline{5}8{,}640$
2. Decider = $8$ (the thousands digit)
3. $8$ is "$5$ or more" → round up: $5 \\to 6$
4. Zero out the rest → $60{,}000$

$$58{,}640 \\;\\longrightarrow\\; 60{,}000$$

> ⚠️ **Only the decider matters!** When rounding $58{,}640$ to the nearest ten-thousand, the $640$ at the end does **not** vote. Just the *one* digit to the right of your rounding place.`,
      },
      {
        id: 'rwn3-decider-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To round $7{,}382$ to the nearest hundred, which digit is the **decider**?',
              options: ['$8$ (the tens digit)', '$3$ (the hundreds digit)', '$7$ (the thousands digit)', '$2$ (the ones digit)'],
              correctAnswer: 0,
              explanation: 'The rounding digit is the hundreds digit $3$. The decider is the digit *one place to the right* — the tens digit, which is $8$.',
            },
            {
              question: 'A decider of $5$ tells you to:',
              options: ['Round up', 'Round down', 'Leave the number alone', 'Erase the rounding digit'],
              correctAnswer: 0,
              explanation: '"$5$ or more, raise the score." A decider of exactly $5$ means round up.',
            },
          ],
        },
      },
      {
        id: 'rwn3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Rule** 🔽

Round $\\mathbf{6{,}248}$ to the nearest **hundred**, one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — the rounding digit (hundreds) is:', options: ['$2$', '$6$', '$4$', '$8$'] },
            { label: 'Step 2 — the decider (next digit right) is:', options: ['$4$', '$2$', '$8$', '$6$'] },
            { label: 'Step 3 — so we round:', options: ['down', 'up'] },
            { label: 'Step 4 — the result is:', options: ['$6{,}200$', '$6{,}300$', '$6{,}000$', '$6{,}250$'] },
          ],
          correctAnswers: ['$2$', '$4$', 'down', '$6{,}200$'],
          hint1: 'In $6{,}248$, the hundreds digit is $2$.',
          hint2: 'The decider is the tens digit, $4$.',
          hint3: '$4$ is "$4$ or less," so round down: the $2$ stays, and the rest become zeros → $6{,}200$.',
          explanation: 'Rounding digit $2$, decider $4$ (4 or less → down), so $6{,}248 \\to 6{,}200$.',
        },
      },
      {
        id: 'rwn3-drill',
        type: 'input-boxes' as const,
        content: `**Use the Digit Rule** 🧮

**1)** Round $4{,}826$ to the nearest hundred. $=\\,?$
**2)** Round $4{,}826$ to the nearest thousand. $=\\,?$
**3)** Round $73{,}500$ to the nearest thousand. $=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4800', '5000', '74000'],
          hint1: 'Hundreds digit $8$, decider $2$ (4 or less) → down → $4{,}800$.',
          hint2: 'Thousands digit $4$, decider $8$ (5 or more) → up → $5{,}000$.',
          hint3: 'Thousands digit $3$, decider $5$ (5 or more) → up → $74{,}000$. Enter numbers without commas.',
          explanation: '1) decider $2$ → $4{,}800$.  2) decider $8$ → $5{,}000$.  3) decider $5$ rounds up → $74{,}000$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rounding-whole-numbers-grade4',
    sections: [
      {
        id: 'rwn4-intro',
        type: 'text' as const,
        content: `# 🔢 Rounding Whole Numbers

**Part 4 of 5 — Tricky Cases & Real-World Estimation**

---

> 🔑 **Big Payoff:** Two things trip students up — **carrying a 9 up to a new place** and choosing what to round in a **word problem**. Master both here and you've mastered rounding.`,
      },
      {
        id: 'rwn4-nine',
        type: 'text' as const,
        content: `## When the Rounding Digit Is a 9

What happens if you round **up** a $9$? A $9$ can't become a "$10$" in one box — it rolls over, just like $9 + 1 = 10$ does.

### Worked Example: round $397$ to the nearest ten

1. Rounding digit (tens) = $9$ → $3\\underline{9}7$
2. Decider = $7$ → "$5$ or more," round up.
3. The $9$ would become $10$, so it **carries**: the tens become $0$ and the hundreds go from $3$ to $4$.

$$397 \\;\\longrightarrow\\; 400$$

### Worked Example: round $1{,}960$ to the nearest hundred

1. Rounding digit (hundreds) = $9$ → $1{,}\\underline{9}60$
2. Decider = $6$ → round up.
3. The $9$ carries: hundreds → $0$, thousands $1 \\to 2$.

$$1{,}960 \\;\\longrightarrow\\; 2{,}000$$

> ⚠️ **Don't write "$3{,}\\!(10)0$".** When a $9$ rounds up, let it roll into the next place — exactly like regrouping in addition.`,
      },
      {
        id: 'rwn4-nine-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $695$ to the nearest ten.',
              options: ['$700$', '$690$', '$600$', '$710$'],
              correctAnswer: 0,
              explanation: 'Tens digit $9$, decider $5$ → round up. The $9$ carries: $69 \\to 70$ tens, giving $700$.',
            },
            {
              question: 'Round $9{,}980$ to the nearest hundred.',
              options: ['$10{,}000$', '$9{,}900$', '$9{,}000$', '$10{,}100$'],
              correctAnswer: 0,
              explanation: 'Hundreds digit $9$, decider $8$ → round up. The carry rolls all the way: $9{,}9 \\to 10{,}0$ hundreds, giving $10{,}000$.',
            },
          ],
        },
      },
      {
        id: 'rwn4-estimate',
        type: 'text' as const,
        content: `## Rounding to Estimate in Word Problems

Rounding makes **estimating** quick. The trick is choosing a sensible place to round to.

### Example: A book fair sold $312$ books on Friday and $589$ on Saturday. About how many in all?

Round each to the nearest hundred, then add:

$$312 \\approx 300, \\qquad 589 \\approx 600$$
$$300 + 600 = 900 \\text{ books (about)}$$

The exact total is $312 + 589 = 901$, so our estimate of $900$ is excellent.

### Example: A theater has $48$ rows of $52$ seats. About how many seats?

Round to the nearest ten, then multiply:

$$48 \\approx 50, \\qquad 52 \\approx 50$$
$$50 \\times 50 = 2{,}500 \\text{ seats (about)}$$

> 💡 **Estimate first, then check.** If your exact answer is wildly far from your estimate, you probably made a mistake somewhere.`,
      },
      {
        id: 'rwn4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Estimate the Trip** 🔽

A family drives $278$ miles on Day 1 and $431$ miles on Day 2. Estimate the total by rounding **to the nearest hundred**.`,
        exercise: {
          dropdowns: [
            { label: '$278$ rounds to:', options: ['$300$', '$200$', '$280$', '$270$'] },
            { label: '$431$ rounds to:', options: ['$400$', '$500$', '$430$', '$440$'] },
            { label: 'Estimated total:', options: ['$700$', '$800$', '$709$', '$600$'] },
          ],
          correctAnswers: ['$300$', '$400$', '$700$'],
          hint1: '$278$ is between $200$ and $300$; decider $7$ (5 or more) → up → $300$.',
          hint2: '$431$ is between $400$ and $500$; decider $3$ (4 or less) → down → $400$.',
          hint3: 'Add the rounded numbers: $300 + 400 = 700$ miles (about).',
          explanation: '$278 \\to 300$, $431 \\to 400$, and $300 + 400 = 700$. The exact total is $709$, so the estimate is right on target.',
        },
      },
      {
        id: 'rwn4-drill',
        type: 'input-boxes' as const,
        content: `**Carries & Estimates** 🧮

**1)** Round $798$ to the nearest ten. $=\\,?$
**2)** Round $2{,}951$ to the nearest hundred. $=\\,?$
**3)** A store sold $194$ shirts and $207$ hats. Round each to the nearest hundred and add: $=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['800', '3000', '400'],
          hint1: 'Tens digit $9$, decider $8$ → round up; the $9$ carries to make $800$.',
          hint2: 'Hundreds digit $9$, decider $5$ → round up; the carry rolls: $2{,}9 \\to 3{,}0$ hundreds → $3{,}000$.',
          hint3: '$194 \\to 200$ and $207 \\to 200$, so $200 + 200 = 400$.',
          explanation: '1) $798 \\to 800$.  2) $2{,}951 \\to 3{,}000$.  3) $200 + 200 = 400$ items (about).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rounding-whole-numbers-grade4',
    sections: [
      {
        id: 'rwn5-intro',
        type: 'text' as const,
        content: `# 🔢 Rounding Whole Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name any place value, (2) use the number-line picture, (3) apply the digit rule, and (4) handle $9$-carries and word-problem estimates. Time to put it all together.`,
      },
      {
        id: 'rwn5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find where to round | name the **rounding digit** for that place |
| Decide up or down | look at the **one** digit to its right (the decider) |
| The rule | "$5$ or more, raise the score; $4$ or less, let it rest" |
| Finish | turn every digit to the right into **$0$** |
| Rounding digit is $9$ and goes up | let it **carry** into the next place |
| Estimate a problem | round each number first, then add/multiply |

> ⚠️ **The two classic mistakes:** (1) looking at *all* the digits instead of just the decider, and (2) forgetting to zero out the digits to the right. Avoid those and you're golden.`,
      },
      {
        id: 'rwn5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $5{,}649$ to the nearest thousand.',
              options: ['$6{,}000$', '$5{,}000$', '$5{,}600$', '$5{,}700$'],
              correctAnswer: 0,
              explanation: 'Thousands digit $5$, decider $6$ (the hundreds digit) → "$5$ or more," round up to $6{,}000$.',
            },
            {
              question: 'Round $5{,}649$ to the nearest **hundred**.',
              options: ['$5{,}600$', '$5{,}700$', '$6{,}000$', '$5{,}650$'],
              correctAnswer: 0,
              explanation: 'Hundreds digit $6$, decider $4$ (the tens digit) → "$4$ or less," round down to $5{,}600$.',
            },
            {
              question: 'Which number rounds to $400$ when rounded to the nearest hundred?',
              options: ['$449$', '$451$', '$349$', '$520$'],
              correctAnswer: 0,
              explanation: '$449$ is between $400$ and $500$; its decider (tens digit) is $4$, so it rounds **down** to $400$. The others miss: $451 \\to 500$, $349 \\to 300$, and $520 \\to 500$.',
            },
          ],
        },
      },
      {
        id: 'rwn5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Round** 🧮

**1)** Round $84{,}500$ to the nearest thousand. $=\\,?$
**2)** Round $6{,}098$ to the nearest hundred. $=\\,?$
**3)** Estimate $403 + 298$ by rounding each to the nearest hundred. $=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['85000', '6100', '700'],
          hint1: 'Thousands digit $4$, decider $5$ → round up → $85{,}000$.',
          hint2: 'Hundreds digit $0$, decider $9$ → round up: $0 \\to 1$ → $6{,}100$.',
          hint3: '$403 \\to 400$ and $298 \\to 300$, so $400 + 300 = 700$. Enter numbers without commas.',
          explanation: '1) decider $5$ → $85{,}000$.  2) decider $9$ → $6{,}100$.  3) $400 + 300 = 700$.',
        },
      },
      {
        id: 'rwn5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'When rounding $27{,}384$ to the nearest ten-thousand, which digit is the decider?',
              options: ['$7$ (the thousands digit)', '$2$ (the ten-thousands digit)', '$3$ (the hundreds digit)', '$4$ (the ones digit)'],
              correctAnswer: 0,
              explanation: 'The rounding digit is the ten-thousands digit $2$; the decider is one place to the right — the thousands digit, $7$.',
            },
            {
              question: 'Round $899$ to the nearest ten.',
              options: ['$900$', '$890$', '$800$', '$910$'],
              correctAnswer: 0,
              explanation: 'Tens digit $9$, decider $9$ → round up. The $9$ carries: $89 \\to 90$ tens, giving $900$.',
            },
            {
              question: 'A library has $612$ books on one shelf and $389$ on another. Estimate the total by rounding each to the nearest hundred.',
              options: ['$1{,}000$', '$900$', '$1{,}100$', '$1{,}001$'],
              correctAnswer: 0,
              explanation: '$612 \\to 600$ and $389 \\to 400$, so $600 + 400 = 1{,}000$ books (about). The exact total is $1{,}001$.',
            },
          ],
        },
      },
    ],
  },
]
