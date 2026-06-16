import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rounding Numbers (Grade 4 Math).
 * Registry key: 'rounding-numbers' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rounding-numbers',
    sections: [
      {
        id: 'rnd1-intro',
        type: 'text' as const,
        content: `# 🎯 Rounding Numbers

**Part 1 of 5 — Place Value: The Foundation**

---

### Topics in This Part

| Section |
|---------|
| What Does "Rounding" Mean? |
| Naming the Places |
| Reading the Digit in Each Place |

> 🔑 **Key Concept:** Rounding means swapping an exact number for a *nearby, simpler* number that is easier to say, write, and use. Before you can round, you have to know your **place values** — that's Part 1.`,
      },
      {
        id: 'rnd1-what',
        type: 'text' as const,
        content: `## What Does "Rounding" Mean?

Imagine a school has **287** students. If a friend asks "about how many kids go to your school?", you probably wouldn't say "two hundred eighty-seven." You'd say **"about 300."**

That's rounding! You traded the exact number for a **nearby round number** that's quicker to use.

> 💡 **Round numbers** end in zeros — like $10$, $50$, $200$, or $1{,}000$. They are easy to picture and easy to add in your head.

We round when we want a **quick estimate** instead of an exact count:

| Exact number | Rounded (about) | Why round? |
|--------------|-----------------|------------|
| $287$ students | $300$ | Easier to remember |
| $\\$4{,}812$ price | $\\$5{,}000$ | Quick "ballpark" cost |
| $58$ minutes | $60$ (one hour) | Simpler to plan with |

The rounded number isn't *exactly* right — but it's **close**, and close is often all you need.`,
      },
      {
        id: 'rnd1-places',
        type: 'text' as const,
        content: `## Naming the Places

Every digit in a number sits in a **place**, and each place has a name. Starting from the right:

| Place | Ones | Tens | Hundreds | Thousands |
|-------|------|------|----------|-----------|
| Value of one unit | $1$ | $10$ | $100$ | $1{,}000$ |

Take the number **4,652**:

| Digit | $4$ | $6$ | $5$ | $2$ |
|-------|-----|-----|-----|-----|
| Place | thousands | hundreds | tens | ones |
| Means | $4{,}000$ | $600$ | $50$ | $2$ |

So $4{,}652 = 4{,}000 + 600 + 50 + 2$.

> 🔑 **Key Idea:** The place tells you how much a digit is *worth*. The $5$ in $4{,}652$ isn't worth five — it's worth **fifty**, because it sits in the **tens** place.`,
      },
      {
        id: 'rnd1-place-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $3{,}748$, which digit is in the **hundreds** place?',
              options: ['$3$', '$7$', '$4$', '$8$'],
              correctAnswer: 1,
              explanation: 'Reading from the right: $8$ = ones, $4$ = tens, $7$ = hundreds, $3$ = thousands. So $7$ is in the hundreds place (it is worth $700$).',
            },
            {
              question: 'What is the value of the digit $6$ in $1{,}269$?',
              options: ['$6$', '$60$', '$600$', '$6{,}000$'],
              correctAnswer: 1,
              explanation: 'In $1{,}269$ the $6$ sits in the **tens** place, so it is worth $6 \\times 10 = 60$.',
            },
          ],
        },
      },
      {
        id: 'rnd1-place-input',
        type: 'input-boxes' as const,
        content: `**Name the Digit** 🧮

For the number **5,317**, write the digit found in each place.

**1)** What digit is in the **tens** place?
**2)** What digit is in the **thousands** place?
**3)** What digit is in the **ones** place?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '5', '7'],
          hint1: 'Start at the far right: $7$ is ones, then move left.',
          hint2: 'Tens is the second place from the right — that is the $1$.',
          hint3: 'Thousands is the far-left digit — that is the $5$.',
          explanation: '$5{,}317$: the $7$ is ones, the $1$ is tens, the $3$ is hundreds, and the $5$ is thousands.',
        },
      },
      {
        id: 'rnd1-expanded',
        type: 'text' as const,
        content: `## Expanded Form

Knowing place values lets you break a number apart into the value of each digit. This is called **expanded form**.

$$2{,}836 = 2{,}000 + 800 + 30 + 6$$

Each piece is a digit times its place: $2 \\times 1{,}000$, $8 \\times 100$, $3 \\times 10$, and $6 \\times 1$.

> 💡 Expanded form makes it crystal clear *which* part of a number you change when you round. Round $2{,}836$ to the nearest hundred and only the "$800$" part (and what's after it) can move.`,
      },
      {
        id: 'rnd1-expanded-dd',
        type: 'dropdown-select' as const,
        content: `**Match the Place** 🔽

Use the number $\\mathbf{4{,}205}$. Pick what each digit is **worth**.`,
        exercise: {
          dropdowns: [
            { label: 'The digit $4$ is worth:', options: ['$4$', '$40$', '$400$', '$4{,}000$'] },
            { label: 'The digit $2$ is worth:', options: ['$2$', '$20$', '$200$', '$2{,}000$'] },
            { label: 'The digit $5$ is worth:', options: ['$5$', '$50$', '$500$', '$5{,}000$'] },
          ],
          correctAnswers: ['$4{,}000$', '$200$', '$5$'],
          hint1: 'The $4$ is in the thousands place, so it is worth $4 \\times 1{,}000$.',
          hint2: 'The $2$ is in the hundreds place, so it is worth $2 \\times 100 = 200$.',
          hint3: 'The $0$ holds the tens place (worth $0$), and the $5$ is in the ones place, worth $5$.',
          explanation: '$4{,}205 = 4{,}000 + 200 + 0 + 5$. The $0$ in the tens place is a placeholder — it keeps the other digits in their correct places.',
        },
      },
      {
        id: 'rnd1-wrap',
        type: 'text' as const,
        content: `## You're Ready to Round

You can now name every place — **ones, tens, hundreds, thousands** — and tell what each digit is worth.

That skill is the whole foundation of rounding. When someone says *"round to the nearest hundred,"* you'll know **exactly** which digit they're talking about.

> 💡 In Part 2 you'll learn the one simple rule that decides whether a number rounds **up** or **down**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rounding-numbers',
    sections: [
      {
        id: 'rnd2-intro',
        type: 'text' as const,
        content: `# 🎯 Rounding Numbers

**Part 2 of 5 — The Rounding Rule**

---

> 🔑 **The Big Rule:** To round, look at the digit **just to the right** of the place you're rounding to. If it's **5 or more, round up**. If it's **4 or less, round down**.`,
      },
      {
        id: 'rnd2-rule',
        type: 'text' as const,
        content: `## The "5 or More" Rule

Rounding always follows the same three steps:

1. **Find** the place you're rounding to and **underline** that digit.
2. **Look** at the digit *immediately to its right* — call it the **decider**.
3. **Decide:**
   - Decider is $5, 6, 7, 8,$ or $9$ → **round up** (add $1$ to the underlined digit).
   - Decider is $0, 1, 2, 3,$ or $4$ → **round down** (keep the underlined digit the same).

After deciding, **every digit to the right becomes $0$.**

> 🔑 **Memory trick:** "**Five and up, round it up. Four and down, round it down.**"

### The number line picture

Rounding $\\mathbf{47}$ to the nearest **ten**: is it closer to $40$ or $50$?

$$40 \\;\\;\\; 41 \\;\\; 42 \\;\\; 43 \\;\\; 44 \\;\\; \\underline{45} \\;\\; 46 \\;\\; \\mathbf{47} \\;\\; 48 \\;\\; 49 \\;\\;\\; 50$$

$47$ is past the **halfway** mark ($45$), so it's closer to $50$. The rule agrees: the decider (the ones digit $7$) is "5 or more," so we round **up** to $\\mathbf{50}$.`,
      },
      {
        id: 'rnd2-decider-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

We are rounding to the **nearest ten**, so the **ones** digit is the decider.`,
        exercise: {
          questions: [
            {
              question: 'Round $63$ to the nearest ten. The decider is the ones digit $3$, so we...',
              options: ['round up to $70$', 'round down to $60$', 'keep it $63$', 'round down to $50$'],
              correctAnswer: 1,
              explanation: 'The decider is $3$ (4 or less), so we round **down** — the tens digit stays $6$ and the ones become $0$: $60$.',
            },
            {
              question: 'Round $85$ to the nearest ten. The decider is $5$, so we...',
              options: ['round down to $80$', 'keep it $85$', 'round up to $90$', 'round up to $100$'],
              correctAnswer: 2,
              explanation: 'A decider of exactly $5$ means **round up**. The tens digit $8$ becomes $9$ and the ones become $0$: $90$.',
            },
          ],
        },
      },
      {
        id: 'rnd2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Up or Down?** 🔽

For each number, we're rounding to the **nearest ten**. Pick whether the ones digit makes it round up or down.`,
        exercise: {
          dropdowns: [
            { label: '$42$ → decider is $2$:', options: ['round up', 'round down'] },
            { label: '$78$ → decider is $8$:', options: ['round up', 'round down'] },
            { label: '$35$ → decider is $5$:', options: ['round up', 'round down'] },
            { label: '$91$ → decider is $1$:', options: ['round up', 'round down'] },
          ],
          correctAnswers: ['round down', 'round up', 'round up', 'round down'],
          hint1: 'Deciders $0,1,2,3,4$ → round down. Deciders $5,6,7,8,9$ → round up.',
          hint2: 'Exactly $5$ counts as "5 or more," so it rounds **up**.',
          hint3: '$42$ down → $40$; $78$ up → $80$; $35$ up → $40$; $91$ down → $90$.',
          explanation: 'Decider $\\geq 5$ rounds up, decider $\\leq 4$ rounds down. So $42 \\to 40$, $78 \\to 80$, $35 \\to 40$, $91 \\to 90$.',
        },
      },
      {
        id: 'rnd2-tie',
        type: 'text' as const,
        content: `## Why Does Exactly 5 Round *Up*?

A number like $45$ is *exactly halfway* between $40$ and $50$ — it's not really closer to either one!

To keep things fair and simple, math has a rule: **a tie goes up.** Whenever the decider is exactly $5$ (with nothing but zeros after it), we round **up**.

> ⚠️ **Watch out:** $5$ does **not** mean "stay the same." It means **round up**. This is the most common rounding mistake — don't fall for it!`,
      },
      {
        id: 'rnd2-input',
        type: 'input-boxes' as const,
        content: `**Round to the Nearest Ten** 🧮

Use the "5 or more, round up" rule. Look at the ones digit each time.

**1)** $26 \\to \\,?$
**2)** $53 \\to \\,?$
**3)** $75 \\to \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '50', '80'],
          hint1: '$26$: decider $6$ is 5-or-more → round up to $30$.',
          hint2: '$53$: decider $3$ is 4-or-less → round down to $50$.',
          hint3: '$75$: decider $5$ rounds up → $80$.',
          explanation: '$26 \\to 30$ (up), $53 \\to 50$ (down), $75 \\to 80$ (up, because a tie rounds up).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rounding-numbers',
    sections: [
      {
        id: 'rnd3-intro',
        type: 'text' as const,
        content: `# 🎯 Rounding Numbers

**Part 3 of 5 — Tens, Hundreds & Thousands**

---

> 🔑 **Same rule, bigger numbers:** Rounding to the hundreds or thousands works *exactly* like rounding to tens. You just underline a different place and check the digit to **its** right.`,
      },
      {
        id: 'rnd3-hundreds',
        type: 'text' as const,
        content: `## Rounding to the Nearest Hundred

The decider is now the **tens** digit (the one just right of the hundreds place).

### Example: round $3{,}472$ to the nearest hundred

1. **Underline** the hundreds digit: $3{,}\\underline{4}72$.
2. The **decider** is the tens digit: $7$.
3. $7$ is 5-or-more → **round up.** The $4$ becomes $5$.
4. Everything to the right becomes $0$.

$$3{,}472 \\;\\to\\; 3{,}500$$

### Example: round $812$ to the nearest hundred

The hundreds digit is $8$; the decider (tens digit) is $1$. Since $1$ is 4-or-less, **round down** — keep the $8$, zero out the rest:

$$812 \\;\\to\\; 800$$

> 💡 Notice we only ever look at **one** decider digit — never the whole number after it. For $812$, we check the $1$, not "$12$."`,
      },
      {
        id: 'rnd3-thousands',
        type: 'text' as const,
        content: `## Rounding to the Nearest Thousand

Now the decider is the **hundreds** digit.

### Example: round $6{,}540$ to the nearest thousand

1. **Underline** the thousands digit: $\\underline{6}{,}540$.
2. The **decider** is the hundreds digit: $5$.
3. $5$ → **round up.** The $6$ becomes $7$, and the rest become $0$.

$$6{,}540 \\;\\to\\; 7{,}000$$

### Example: round $4{,}318$ to the nearest thousand

Thousands digit is $4$; decider (hundreds digit) is $3$. Since $3$ is 4-or-less, **round down**:

$$4{,}318 \\;\\to\\; 4{,}000$$

> 🔑 **The pattern:** "Nearest ___" tells you which digit to **keep an eye on**. The digit **one spot to its right** does the deciding.`,
      },
      {
        id: 'rnd3-which-digit',
        type: 'dropdown-select' as const,
        content: `**Which Digit Decides?** 🔽

For each task, choose the **decider** — the digit you look at to round. Use the number $7{,}3\\,8\\,4$ (seven thousand, three hundred eighty-four).`,
        exercise: {
          dropdowns: [
            { label: 'Round to nearest ten → decider is the:', options: ['ones digit ($4$)', 'tens digit ($8$)', 'hundreds digit ($3$)'] },
            { label: 'Round to nearest hundred → decider is the:', options: ['ones digit ($4$)', 'tens digit ($8$)', 'hundreds digit ($3$)'] },
            { label: 'Round to nearest thousand → decider is the:', options: ['tens digit ($8$)', 'hundreds digit ($3$)', 'thousands digit ($7$)'] },
          ],
          correctAnswers: ['ones digit ($4$)', 'tens digit ($8$)', 'hundreds digit ($3$)'],
          hint1: 'The decider is always **one place to the right** of the place you are rounding to.',
          hint2: 'For nearest hundred, you keep an eye on the hundreds digit ($3$) and let the tens digit ($8$) decide.',
          hint3: 'For nearest thousand, the thousands digit is $7$, so the decider is the hundreds digit, $3$.',
          explanation: 'Nearest ten → ones decides ($4$). Nearest hundred → tens decides ($8$). Nearest thousand → hundreds decides ($3$).',
        },
      },
      {
        id: 'rnd3-recap',
        type: 'text' as const,
        content: `## Same Four Steps, Every Time

Whether the place is tens, hundreds, or thousands, the routine never changes:

| Step | Example: $2{,}750$ to nearest **hundred** |
|------|-------------------------------------------|
| Underline the place | $2{,}\\underline{7}50$ (hundreds) |
| Find the decider | tens digit $= 5$ |
| Decide | $5$ → round **up**, so $7 \\to 8$ |
| Zero out the rest | $2{,}800$ |

> 💡 Once you trust the four steps, even big numbers feel easy. Let's try a few.`,
      },
      {
        id: 'rnd3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $2{,}750$ to the nearest hundred.',
              options: ['$2{,}700$', '$2{,}800$', '$3{,}000$', '$2{,}750$'],
              correctAnswer: 1,
              explanation: 'Hundreds digit is $7$; the decider (tens digit) is $5$, so round **up**: $7 \\to 8$, giving $2{,}800$.',
            },
            {
              question: 'Round $9{,}210$ to the nearest thousand.',
              options: ['$9{,}000$', '$9{,}200$', '$10{,}000$', '$9{,}300$'],
              correctAnswer: 0,
              explanation: 'Thousands digit is $9$; the decider (hundreds digit) is $2$, which is 4-or-less, so round **down**: $9{,}000$.',
            },
          ],
        },
      },
      {
        id: 'rnd3-input',
        type: 'input-boxes' as const,
        content: `**Mixed Rounding** 🧮

Round each number to the place shown.

**1)** $4{,}681$ to the nearest **hundred** $= \\,?$
**2)** $5{,}500$ to the nearest **thousand** $= \\,?$
**3)** $327$ to the nearest **hundred** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4700', '6000', '300'],
          hint1: '$4{,}681$: hundreds digit $6$, decider (tens) is $8$ → round up to $4{,}700$.',
          hint2: '$5{,}500$: thousands digit $5$, decider (hundreds) is $5$ → round up to $6{,}000$.',
          hint3: '$327$: hundreds digit $3$, decider (tens) is $2$ → round down to $300$.',
          explanation: '$4{,}681 \\to 4{,}700$; $5{,}500 \\to 6{,}000$ (the tie rounds up); $327 \\to 300$. Enter numbers without commas.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rounding-numbers',
    sections: [
      {
        id: 'rnd4-intro',
        type: 'text' as const,
        content: `# 🎯 Rounding Numbers

**Part 4 of 5 — Tricky Cases & Real Life**

---

> 🔑 **The sneaky one:** Sometimes rounding up turns a $9$ into a $10$, and the carry "rolls over" into the next place. This part shows you exactly how to handle it — plus where rounding shows up in real life.`,
      },
      {
        id: 'rnd4-rollover',
        type: 'text' as const,
        content: `## When Rounding Up Rolls Over

What happens if the digit you're rounding up is already a $9$? Adding $1$ makes it $10$, so it **carries** to the next place — just like in addition.

### Example: round $97$ to the nearest ten

The decider (ones digit) is $7$, so round **up**. But the tens digit is $9$, and $9 + 1 = 10$:

$$97 \\;\\to\\; 100$$

The $9$ tens become $10$ tens, which is the same as $1$ hundred. So $97$ rounds up to **one hundred**.

### Example: round $1{,}962$ to the nearest hundred

Hundreds digit is $9$; the decider (tens digit) is $6$, so round **up**. The $9$ hundreds roll over:

$$1{,}962 \\;\\to\\; 2{,}000$$

The $9$ became $10$ hundreds = $1$ more thousand, so $1{,}900 \\to 2{,}000$.

> ⚠️ **Don't panic when you see a $9$.** Just add $1$ like normal and let the carry move left. $9 \\to 10$ means write $0$ and carry the $1$.`,
      },
      {
        id: 'rnd4-rollover-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $396$ to the nearest ten.',
              options: ['$390$', '$400$', '$300$', '$396$'],
              correctAnswer: 1,
              explanation: 'Decider (ones) is $6$ → round up. The tens digit $9$ becomes $10$, which carries: $39$ tens become $40$ tens, so $396 \\to 400$.',
            },
            {
              question: 'Round $5{,}983$ to the nearest hundred.',
              options: ['$5{,}900$', '$5{,}980$', '$6{,}000$', '$5{,}000$'],
              correctAnswer: 2,
              explanation: 'Hundreds digit is $9$; the decider (tens) is $8$ → round up. The $9$ hundreds roll over to a new thousand: $5{,}983 \\to 6{,}000$.',
            },
          ],
        },
      },
      {
        id: 'rnd4-realworld',
        type: 'text' as const,
        content: `## Rounding in Real Life

Rounding isn't just for tests — people use it every day to **estimate** quickly.

| Situation | Exact | Rounded estimate |
|-----------|-------|------------------|
| Crowd at a game | $4{,}187$ fans | "about $4{,}000$" (nearest thousand) |
| Money saved | $\\$68$ | "about $\\$70$" (nearest ten) |
| Pages in a book | $312$ pages | "about $300$" (nearest hundred) |
| Steps walked | $9{,}640$ steps | "about $10{,}000$" (nearest thousand) |

> 💡 **Estimating to check answers:** Suppose you add $\\$397 + \\$205$ and get $\\$602$. Round first: $\\$400 + \\$200 = \\$600$. Since $\\$600$ is close to $\\$602$, your answer looks **reasonable!** Rounding is a great way to catch big mistakes.`,
      },
      {
        id: 'rnd4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Estimate to Check** 🔽

A store cart has items costing $\\$298$, $\\$52$, and $\\$149$. Round each to estimate the total.`,
        exercise: {
          dropdowns: [
            { label: '$\\$298$ to the nearest hundred:', options: ['$\\$200$', '$\\$300$', '$\\$290$'] },
            { label: '$\\$52$ to the nearest ten:', options: ['$\\$50$', '$\\$60$', '$\\$100$'] },
            { label: '$\\$149$ to the nearest hundred:', options: ['$\\$100$', '$\\$150$', '$\\$200$'] },
          ],
          correctAnswers: ['$\\$300$', '$\\$50$', '$\\$100$'],
          hint1: '$\\$298$: hundreds digit $2$, decider (tens) is $9$ → round up to $\\$300$.',
          hint2: '$\\$52$: tens digit $5$, decider (ones) is $2$ → round down to $\\$50$.',
          hint3: '$\\$149$: hundreds digit $1$, decider (tens) is $4$ → round down to $\\$100$.',
          explanation: 'Estimates: $\\$300 + \\$50 + \\$100 = \\$450$. The exact total is $\\$499$, so $\\$450$ is a reasonable ballpark.',
        },
      },
      {
        id: 'rnd4-input',
        type: 'input-boxes' as const,
        content: `**Roll-Over Practice** 🧮

These all round up past a $9$. Round each to the place shown.

**1)** $98$ to the nearest **ten** $= \\,?$
**2)** $1{,}975$ to the nearest **hundred** $= \\,?$
**3)** $7{,}600$ to the nearest **thousand** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '2000', '8000'],
          hint1: '$98$: decider $8$ → round up; $9$ tens become $10$ tens = $100$.',
          hint2: '$1{,}975$: hundreds digit $9$, decider (tens) is $7$ → round up; rolls to $2{,}000$.',
          hint3: '$7{,}600$: thousands digit $7$, decider (hundreds) is $6$ → round up to $8{,}000$.',
          explanation: '$98 \\to 100$, $1{,}975 \\to 2{,}000$, $7{,}600 \\to 8{,}000$. Each roll-over carries the $1$ to the next place. Enter numbers without commas.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rounding-numbers',
    sections: [
      {
        id: 'rnd5-intro',
        type: 'text' as const,
        content: `# 🎯 Rounding Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name place values, (2) use the "5 or more" rule, (3) round to tens, hundreds, and thousands, and (4) handle roll-overs and real-life estimates. Let's put it all together!`,
      },
      {
        id: 'rnd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Step | What to do |
|------|-----------|
| 1. Find the place | "Nearest ___" → underline that digit |
| 2. Find the decider | The digit **one spot to the right** |
| 3. Decide | $5$ or more → round **up**; $4$ or less → round **down** |
| 4. Finish | Change all digits to the right into **zeros** |

> ⚠️ **Three things to remember:** exactly $5$ rounds **up**; only the **one** decider digit matters; and a $9$ that rounds up **carries** to the next place ($9 \\to 0$, carry $1$).`,
      },
      {
        id: 'rnd5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $4{,}449$ to the nearest **hundred**.',
              options: ['$4{,}400$', '$4{,}500$', '$4{,}000$', '$5{,}000$'],
              correctAnswer: 0,
              explanation: 'Hundreds digit is $4$; the decider is the **tens** digit, $4$. Since $4$ is 4-or-less, round **down** to $4{,}400$. Do not be tricked by the $9$ at the end — it is not the decider!',
            },
            {
              question: 'Which number rounds to $700$ when rounded to the nearest hundred?',
              options: ['$648$', '$672$', '$761$', '$590$'],
              correctAnswer: 1,
              explanation: '$672$: hundreds digit $6$, decider (tens) $7$ → round **up** to $700$. ✓  The others: $648 \\to 600$, $761 \\to 800$, $590 \\to 600$.',
            },
          ],
        },
      },
      {
        id: 'rnd5-input',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

Round each number to the place shown. Enter numbers **without commas**.

**1)** $3{,}849$ to the nearest **thousand** $= \\,?$
**2)** $164$ to the nearest **ten** $= \\,?$
**3)** $2{,}951$ to the nearest **hundred** $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4000', '160', '3000'],
          hint1: '$3{,}849$: thousands digit $3$, decider (hundreds) is $8$ → round up to $4{,}000$.',
          hint2: '$164$: tens digit $6$, decider (ones) is $4$ → round down to $160$.',
          hint3: '$2{,}951$: hundreds digit $9$, decider (tens) is $5$ → round up; the $9$ rolls over to $3{,}000$.',
          explanation: '$3{,}849 \\to 4{,}000$, $164 \\to 160$, $2{,}951 \\to 3{,}000$ (roll-over). Each one followed the 4-step rule.',
        },
      },
      {
        id: 'rnd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson!`,
        exercise: {
          questions: [
            {
              question: 'Round $675$ to the nearest **ten**.',
              options: ['$670$', '$680$', '$700$', '$600$'],
              correctAnswer: 1,
              explanation: 'The decider is the ones digit $5$, which rounds **up**. The tens digit $7$ becomes $8$: $675 \\to 680$.',
            },
            {
              question: 'Round $8{,}500$ to the nearest **thousand**.',
              options: ['$8{,}000$', '$8{,}500$', '$9{,}000$', '$10{,}000$'],
              correctAnswer: 2,
              explanation: 'Thousands digit is $8$; the decider (hundreds digit) is $5$. A tie rounds **up**, so $8 \\to 9$: $8{,}500 \\to 9{,}000$.',
            },
            {
              question: 'Round $1{,}996$ to the nearest **hundred**.',
              options: ['$1{,}900$', '$1{,}990$', '$2{,}000$', '$2{,}100$'],
              correctAnswer: 2,
              explanation: 'Hundreds digit is $9$; the decider (tens digit) is $9$ → round up. The $9$ hundreds roll over into a new thousand: $1{,}996 \\to 2{,}000$.',
            },
          ],
        },
      },
    ],
  },
]
