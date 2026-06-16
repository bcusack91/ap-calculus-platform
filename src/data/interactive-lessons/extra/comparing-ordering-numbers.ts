import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Comparing and Ordering Numbers (Grade 4 Math).
 * Registry key / DB Topic.slug: 'comparing-ordering-numbers'.
 * 5 parts, gold-standard structure: place value & reading numbers → comparing two
 * whole numbers with <, =, > → ordering lists least↔greatest → comparing & ordering
 * decimals → mixed practice + exit quiz.
 * Number range stays within Grade 4 expectations (whole numbers to the millions,
 * decimals to hundredths). LaTeX uses doubled backslashes (template-literal strings).
 * Every comparison and ordering was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-numbers',
    sections: [
      {
        id: 'con1-intro',
        type: 'text' as const,
        content: `# 🔢 Comparing and Ordering Numbers

**Part 1 of 5 — Place Value: The Secret to Every Comparison**

---

### Topics in This Part

| Section |
|---------|
| What Place Value Means |
| Reading Big Numbers |
| Lining Up by Place |

> 🔑 **Key Concept:** Before you can decide which number is bigger, you have to know what each digit is *worth*. The same digit means different amounts in different spots — the **9** in $90$ is worth ten times more than the **9** in $9$. That idea, called **place value**, is the engine behind every comparison in this lesson.`,
      },
      {
        id: 'con1-placevalue',
        type: 'text' as const,
        content: `## What Place Value Means

Every digit sits in a **place**, and each place is worth **10 times** the place to its right.

| Place | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|
| Value | $100{,}000$ | $10{,}000$ | $1{,}000$ | $100$ | $10$ | $1$ |

Take the number $3{,}482$:

| Digit | $3$ | $4$ | $8$ | $2$ |
|-------|:---:|:---:|:---:|:---:|
| Place | thousands | hundreds | tens | ones |
| Worth | $3{,}000$ | $400$ | $80$ | $2$ |

So $3{,}482 = 3{,}000 + 400 + 80 + 2$. That breakdown is called **expanded form**.

> 🔑 **Key Idea:** The digit on the **far left** lives in the **biggest place**, so it has the most power to make a number large. A 4-digit number is always bigger than a 3-digit number — it has a thousands place that the smaller one doesn't even reach.`,
      },
      {
        id: 'con1-place-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $7{,}625$, what is the digit $6$ worth?',
              options: ['$6$', '$60$', '$600$', '$6{,}000$'],
              correctAnswer: 2,
              explanation: 'In $7{,}625$ the $6$ sits in the hundreds place, so it is worth $6 \\times 100 = 600$.',
            },
            {
              question: 'Which number has a $5$ in the thousands place?',
              options: ['$1{,}500$', '$5{,}210$', '$8{,}051$', '$3{,}405$'],
              correctAnswer: 1,
              explanation: 'In $5{,}210$ the $5$ is the far-left digit, the thousands place ($5{,}000$). In $1{,}500$ the $5$ is in the hundreds place.',
            },
          ],
        },
      },
      {
        id: 'con1-reading',
        type: 'text' as const,
        content: `## Reading Big Numbers

Commas split a number into **groups of three** digits, starting from the right. Each group has a name.

$$\\underbrace{482}_{\\text{thousands}}{,}\\underbrace{059}_{\\text{ones}}$$

We read $482{,}059$ as **"four hundred eighty-two thousand, fifty-nine."**

| Number | In Words |
|--------|----------|
| $6{,}300$ | six thousand, three hundred |
| $40{,}015$ | forty thousand, fifteen |
| $209{,}600$ | two hundred nine thousand, six hundred |

> 💡 **Tip:** A $0$ is a **placeholder** — it keeps the other digits in their correct places. In $40{,}015$, the zeros hold the thousands and hundreds places so the $4$ stays in ten-thousands and the $15$ stays at the end. Don't ignore zeros!`,
      },
      {
        id: 'con1-expanded-input',
        type: 'input-boxes' as const,
        content: `**Place Value Practice** 🧮

Answer each question with a number.

**1)** In $58{,}734$, what is the digit $5$ worth?
**2)** How many digits does the number $124{,}000$ have?
**3)** Write the value of the $7$ in $4{,}703$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50000', '6', '700'],
          hint1: 'The $5$ in $58{,}734$ is in the ten-thousands place: $5 \\times 10{,}000$.',
          hint2: 'Count every digit, including the zeros: $1$-$2$-$4$-$0$-$0$-$0$.',
          hint3: 'The $7$ in $4{,}703$ is in the hundreds place: $7 \\times 100$.',
          explanation: '1) $50{,}000$ (ten-thousands place).  2) $6$ digits.  3) $700$ (hundreds place).',
        },
      },
      {
        id: 'con1-lineup',
        type: 'text' as const,
        content: `## Lining Up by Place

The single most useful trick for comparing is to **stack numbers so their places line up**. Always line up the **ones** on the right:

$$\\begin{aligned} &3{,}482 \\\\ &3{,}460 \\end{aligned}$$

Now you can scan left to right and compare one place at a time — thousands vs. thousands, hundreds vs. hundreds, and so on.

> ⚠️ **Watch out:** Don't compare by counting how "long" a number *looks* when it's written sloppily. Line up the digits by place value, not by where your pencil happens to land. In Part 2 we'll turn this lineup into a clear rule for choosing $<$, $=$, or $>$.`,
      },
      {
        id: 'con1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Place** 🔽

Use the number $\\;592{,}018$. Choose the correct place for each digit.`,
        exercise: {
          dropdowns: [
            { label: 'The $5$ is in the:', options: ['hundred-thousands place', 'ten-thousands place', 'thousands place', 'hundreds place'] },
            { label: 'The $2$ is in the:', options: ['ten-thousands place', 'thousands place', 'hundreds place', 'tens place'] },
            { label: 'The $8$ is in the:', options: ['hundreds place', 'tens place', 'ones place', 'thousands place'] },
          ],
          correctAnswers: ['hundred-thousands place', 'thousands place', 'ones place'],
          hint1: 'Reading left to right, $592{,}018$ has digits $5$-$9$-$2$ before the comma and $0$-$1$-$8$ after.',
          hint2: 'The far-left digit $5$ is in the largest place: hundred-thousands. The $9$ is ten-thousands, and the $2$ is thousands.',
          hint3: 'After the comma, $0$ is the hundreds place, $1$ is the tens place, and $8$ is the ones place (the very last digit).',
          explanation: 'In $592{,}018$: $5$ = hundred-thousands, $9$ = ten-thousands, $2$ = thousands, $0$ = hundreds, $1$ = tens, $8$ = ones.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-numbers',
    sections: [
      {
        id: 'con2-intro',
        type: 'text' as const,
        content: `# 🔢 Comparing and Ordering Numbers

**Part 2 of 5 — Comparing Two Numbers with $<$, $=$, $>$**

---

> 🔑 **The Symbols:** $>$ means *greater than*, $<$ means *less than*, and $=$ means *equal to*. A handy memory trick: the symbol is like a hungry mouth that always **opens toward the bigger number**. $7 > 4$ — the wide-open side faces the $7$.`,
      },
      {
        id: 'con2-symbols',
        type: 'text' as const,
        content: `## The Three Symbols

| Symbol | Meaning | Example | Read it as |
|:---:|---|:---:|---|
| $>$ | greater than | $9 > 5$ | "nine is greater than five" |
| $<$ | less than | $3 < 8$ | "three is less than eight" |
| $=$ | equal to | $6 = 6$ | "six equals six" |

The pointy end of $<$ and $>$ always aims at the **smaller** number, and the open end aims at the **bigger** number.

$$8 \\;>\\; 2 \\qquad\\qquad 2 \\;<\\; 8$$

Both statements say the same thing — $8$ is the bigger number — just written from different sides.

> 💡 **Memory trick:** Think of the symbol as an alligator's mouth. The alligator is greedy, so it always **bites the larger number**.`,
      },
      {
        id: 'con2-symbol-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes this true:  $46 \\;\\square\\; 64$ ?',
              options: ['$>$', '$<$', '$=$', 'none of these'],
              correctAnswer: 1,
              explanation: '$46$ is less than $64$, so we use $<$: $46 < 64$. The open end points to the bigger number, $64$.',
            },
            {
              question: 'The statement $5 > 9$ is...',
              options: ['true', 'false', 'sometimes true', 'cannot tell'],
              correctAnswer: 1,
              explanation: '$5 > 9$ claims five is greater than nine, which is false. The correct statement is $5 < 9$.',
            },
          ],
        },
      },
      {
        id: 'con2-method',
        type: 'text' as const,
        content: `## The Compare-by-Place Method

To compare two whole numbers, follow these steps:

1. **Count the digits first.** The number with **more digits** is bigger (as long as there are no extra leading zeros). $1{,}205$ beats $999$ because it has $4$ digits vs. $3$.
2. **If the digit counts are equal,** line up the numbers and compare **from the left**, place by place.
3. **Stop at the first place where the digits differ** — the bigger digit there wins. You do *not* need to look any further.

### Worked Example: $3{,}482$ vs. $3{,}460$

$$\\begin{aligned} &3{,}482 \\\\ &3{,}460 \\end{aligned}$$

- Thousands: $3 = 3$ → tie, keep going.
- Hundreds: $4 = 4$ → tie, keep going.
- Tens: $8$ vs. $6$ → **$8 > 6$**, stop!

So $3{,}482 > 3{,}460$. The ones place ($2$ vs. $0$) never even matters.`,
      },
      {
        id: 'con2-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Symbol** 🔽

Pick $>$, $<$, or $=$ to make each comparison true.`,
        exercise: {
          dropdowns: [
            { label: '$725 \\;\\square\\; 752$', options: ['$>$', '$<$', '$=$'] },
            { label: '$8{,}040 \\;\\square\\; 8{,}004$', options: ['$>$', '$<$', '$=$'] },
            { label: '$1{,}200 \\;\\square\\; 1{,}200$', options: ['$>$', '$<$', '$=$'] },
            { label: '$60{,}000 \\;\\square\\; 9{,}999$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$<$', '$>$', '$=$', '$>$'],
          hint1: '$725$ vs. $752$: hundreds tie ($7=7$), then tens $2 < 5$, so $725 < 752$.',
          hint2: '$8{,}040$ vs. $8{,}004$: thousands and hundreds tie, then tens $4 > 0$, so $8{,}040 > 8{,}004$.',
          hint3: '$60{,}000$ has $5$ digits; $9{,}999$ has only $4$ — more digits means bigger, so $60{,}000 > 9{,}999$.',
          explanation: '$725 < 752$ (tens differ), $8{,}040 > 8{,}004$ (tens differ), $1{,}200 = 1{,}200$ (identical), $60{,}000 > 9{,}999$ (more digits).',
        },
      },
      {
        id: 'con2-compare-input',
        type: 'input-boxes' as const,
        content: `**Greater or Less?** 🧮

For each pair, type the **larger** number.

**1)** $4{,}706$  and  $4{,}760$
**2)** $35{,}210$  and  $35{,}120$
**3)** $9{,}998$  and  $10{,}001$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4760', '35210', '10001'],
          hint1: '$4{,}706$ vs. $4{,}760$: thousands and hundreds tie, then tens $0 < 6$, so $4{,}760$ is larger.',
          hint2: '$35{,}210$ vs. $35{,}120$: the first three places tie, then hundreds $2 > 1$, so $35{,}210$ is larger.',
          hint3: '$10{,}001$ has $5$ digits; $9{,}998$ has only $4$. More digits wins.',
          explanation: '1) $4{,}760$.  2) $35{,}210$.  3) $10{,}001$ (five digits beats four).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-numbers',
    sections: [
      {
        id: 'con3-intro',
        type: 'text' as const,
        content: `# 🔢 Comparing and Ordering Numbers

**Part 3 of 5 — Ordering a List of Numbers**

---

> 🔑 **The Goal:** *Comparing* deals with two numbers at a time. *Ordering* means putting a **whole list** in order — either **least to greatest** (smallest first) or **greatest to least** (biggest first).`,
      },
      {
        id: 'con3-leastgreatest',
        type: 'text' as const,
        content: `## Least to Greatest, Greatest to Least

Two phrases you will see constantly:

| Phrase | Means | First number in the list is... |
|--------|-------|--------------------------------|
| **Least to greatest** (ascending) | smallest → largest | the **smallest** |
| **Greatest to least** (descending) | largest → smallest | the **largest** |

> 💡 **Tip:** Read the question carefully! "Order from least to greatest" and "order from greatest to least" give **exactly reversed** answers. Underline the direction word before you start.`,
      },
      {
        id: 'con3-strategy',
        type: 'text' as const,
        content: `## A Reliable Ordering Strategy

To order a list from **least to greatest**:

1. **Group by number of digits.** Fewer digits = smaller. Put the shortest numbers first.
2. **Within the same digit count,** compare from the left, place by place (just like Part 2).
3. **Cross each number off** as you place it, so you don't use one twice.

### Worked Example

Order from least to greatest: $\\;\\;1{,}205, \\;\\;980, \\;\\;1{,}250, \\;\\;1{,}052$

- **By digits:** $980$ has $3$ digits — it's the smallest. Place it first.
- The other three all have $4$ digits and all start with $1{,}2$ or $1{,}0$. Compare the hundreds place:
  - $1{,}052$ → hundreds digit $0$ (smallest)
  - $1{,}205$ → hundreds digit $2$
  - $1{,}250$ → hundreds digit $2$
- $1{,}205$ and $1{,}250$ tie at the hundreds; their tens decide: $0 < 5$, so $1{,}205 < 1{,}250$.

$$980 \\;<\\; 1{,}052 \\;<\\; 1{,}205 \\;<\\; 1{,}250$$

> ✅ **Check:** Each "$<$" really does point from smaller to larger. The list climbs steadily — that's how you know it's right.`,
      },
      {
        id: 'con3-order-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list is ordered correctly from **least to greatest**?',
              options: [
                '$308, \\; 380, \\; 830, \\; 803$',
                '$308, \\; 380, \\; 803, \\; 830$',
                '$830, \\; 803, \\; 380, \\; 308$',
                '$380, \\; 308, \\; 803, \\; 830$',
              ],
              correctAnswer: 1,
              explanation: 'Least to greatest: $308 < 380 < 803 < 830$. The first option swaps $830$ and $803$; the third is greatest-to-least; the fourth puts $380$ before $308$.',
            },
            {
              question: 'You order $5{,}600,\\; 560,\\; 6{,}500,\\; 5{,}060$ from **greatest to least**. Which number comes first?',
              options: ['$560$', '$5{,}060$', '$5{,}600$', '$6{,}500$'],
              correctAnswer: 3,
              explanation: 'Greatest to least starts with the largest. Among these, $6{,}500$ is the biggest (its thousands digit $6$ beats every $5$ and the 3-digit $560$).',
            },
          ],
        },
      },
      {
        id: 'con3-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Order** 🔽

Order these four numbers from **least to greatest**:  $2{,}400, \\;\\; 420, \\;\\; 2{,}040, \\;\\; 2{,}404$.
Choose which number belongs in each position.`,
        exercise: {
          dropdowns: [
            { label: '1st (least):', options: ['$420$', '$2{,}040$', '$2{,}400$', '$2{,}404$'] },
            { label: '2nd:', options: ['$420$', '$2{,}040$', '$2{,}400$', '$2{,}404$'] },
            { label: '3rd:', options: ['$420$', '$2{,}040$', '$2{,}400$', '$2{,}404$'] },
            { label: '4th (greatest):', options: ['$420$', '$2{,}040$', '$2{,}400$', '$2{,}404$'] },
          ],
          correctAnswers: ['$420$', '$2{,}040$', '$2{,}400$', '$2{,}404$'],
          hint1: '$420$ has only $3$ digits, so it is the smallest — it goes first.',
          hint2: 'The three 4-digit numbers all start with $2$. Compare the hundreds place: $2{,}040$ has $0$, $2{,}400$ and $2{,}404$ have $4$.',
          hint3: '$2{,}400$ vs. $2{,}404$: they tie until the ones place, where $0 < 4$, so $2{,}400 < 2{,}404$.',
          explanation: 'Order: $420 < 2{,}040 < 2{,}400 < 2{,}404$. Fewest digits first, then compare place by place.',
        },
      },
      {
        id: 'con3-order-input',
        type: 'input-boxes' as const,
        content: `**Find the Extremes** 🧮

Look at this list of test scores:  $1{,}840, \\;\\; 1{,}480, \\;\\; 1{,}804, \\;\\; 1{,}408$.

**1)** What is the **greatest** number?
**2)** What is the **least** number?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1840', '1408'],
          hint1: 'All four numbers start with $1{,}$ and have the same number of digits, so compare the hundreds place: $8, 4, 8, 4$.',
          hint2: 'Two numbers have hundreds digit $8$: $1{,}840$ and $1{,}804$. Their tens decide: $4 > 0$, so $1{,}840$ is greatest.',
          hint3: 'Two numbers have hundreds digit $4$: $1{,}480$ and $1{,}408$. Their tens decide: $0 < 8$, so $1{,}408$ is least.',
          explanation: 'Greatest $= 1{,}840$; least $= 1{,}408$. Full order: $1{,}408 < 1{,}480 < 1{,}804 < 1{,}840$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-numbers',
    sections: [
      {
        id: 'con4-intro',
        type: 'text' as const,
        content: `# 🔢 Comparing and Ordering Numbers

**Part 4 of 5 — Comparing and Ordering Decimals**

---

> 🔑 **Same Rules, New Places:** Decimals like $0.7$ and $0.65$ follow the **exact same compare-from-the-left** rule as whole numbers. The only new idea is the places *after* the decimal point: **tenths** and **hundredths**.`,
      },
      {
        id: 'con4-decimalplaces',
        type: 'text' as const,
        content: `## Decimal Place Value

To the **right** of the decimal point, each place is again $10$ times smaller than the one before it:

| Place | Ones | . | Tenths | Hundredths |
|-------|:---:|:---:|:---:|:---:|
| Value | $1$ | . | $\\frac{1}{10}$ | $\\frac{1}{100}$ |

So in the number $3.46$:

| Digit | $3$ | $4$ | $6$ |
|-------|:---:|:---:|:---:|
| Place | ones | tenths | hundredths |

That means $3.46 = 3 + \\dfrac{4}{10} + \\dfrac{6}{100}$.

> ⚠️ **Don't be fooled by length!** $0.7$ looks "shorter" than $0.65$, but $0.7$ is actually **larger**. Adding a placeholder zero makes it clear: $0.7 = 0.70$, and $0.70 > 0.65$ because $7$ tenths beats $6$ tenths. **Always compare tenths first.**`,
      },
      {
        id: 'con4-decimal-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is greater, $0.5$ or $0.45$?',
              options: ['$0.5$', '$0.45$', 'they are equal', 'cannot tell'],
              correctAnswer: 0,
              explanation: 'Write $0.5$ as $0.50$. Compare tenths: $5 > 4$, so $0.50 > 0.45$. The longer-looking number is not always bigger!',
            },
            {
              question: 'In the number $7.83$, which digit is in the **hundredths** place?',
              options: ['$7$', '$8$', '$3$', 'there is none'],
              correctAnswer: 2,
              explanation: 'After the decimal point, the first digit ($8$) is tenths and the second ($3$) is hundredths. So $3$ is in the hundredths place.',
            },
          ],
        },
      },
      {
        id: 'con4-equivalent',
        type: 'text' as const,
        content: `## The Add-a-Zero Trick

Comparing decimals is easiest when both have the **same number of decimal places**. You can add zeros to the end of a decimal **without changing its value**:

$$0.7 = 0.70 \\qquad 0.3 = 0.30 \\qquad 0.9 = 0.90$$

This works because a trailing zero in the hundredths place just says "zero hundredths," which adds nothing.

### Worked Example: Order $0.6, \\;0.56, \\;0.65$ from least to greatest

Give them all two decimal places: $0.60, \\;0.56, \\;0.65$.

- Tenths: $0.56$ has $5$ tenths; the other two have $6$ tenths. So $0.56$ is the **smallest**.
- $0.60$ vs. $0.65$: tenths tie ($6=6$), hundredths decide: $0 < 5$, so $0.60 < 0.65$.

$$0.56 \\;<\\; 0.60 \\;<\\; 0.65$$

> 💡 Lining up decimals so the points stack vertically makes the tenths and hundredths fall into neat columns — just like lining up whole numbers in Part 1.`,
      },
      {
        id: 'con4-decimal-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Symbol** 🔽

Pick $>$, $<$, or $=$ for each decimal comparison.`,
        exercise: {
          dropdowns: [
            { label: '$0.8 \\;\\square\\; 0.75$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.3 \\;\\square\\; 0.30$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.42 \\;\\square\\; 0.4$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.09 \\;\\square\\; 0.1$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$=$', '$>$', '$<$'],
          hint1: '$0.8 = 0.80$. Compare tenths: $8 > 7$, so $0.8 > 0.75$.',
          hint2: '$0.3$ and $0.30$ are the same value — adding a trailing zero changes nothing, so they are equal.',
          hint3: '$0.42$ vs. $0.40$: tenths tie ($4=4$), hundredths $2 > 0$, so $0.42 > 0.4$. And $0.09 < 0.10$ because $0$ tenths is less than $1$ tenth.',
          explanation: '$0.8 > 0.75$ (tenths), $0.3 = 0.30$ (equal), $0.42 > 0.4$ (hundredths), $0.09 < 0.1$ (tenths: $0 < 1$).',
        },
      },
      {
        id: 'con4-decimal-input',
        type: 'input-boxes' as const,
        content: `**Order the Decimals** 🧮

Order $0.4, \\;\\; 0.36, \\;\\; 0.43, \\;\\; 0.5$ from **least to greatest**, then answer:

**1)** Which decimal is the **least**?
**2)** Which decimal is the **greatest**?
**3)** Which decimal comes **second** in the least-to-greatest list?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.36', '0.5', '0.4'],
          hint1: 'Give each two places: $0.40, 0.36, 0.43, 0.50$. Compare tenths first: $4, 3, 4, 5$.',
          hint2: '$0.36$ has only $3$ tenths (least) and $0.50$ has $5$ tenths (greatest).',
          hint3: '$0.40$ and $0.43$ both have $4$ tenths; hundredths decide $0 < 3$, so $0.40$ comes before $0.43$. Order: $0.36 < 0.4 < 0.43 < 0.5$.',
          explanation: 'Order: $0.36 < 0.4 < 0.43 < 0.5$. Least $= 0.36$, greatest $= 0.5$, second $= 0.4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'comparing-ordering-numbers',
    sections: [
      {
        id: 'con5-intro',
        type: 'text' as const,
        content: `# 🔢 Comparing and Ordering Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read big numbers using place value, (2) compare two numbers with $<$, $=$, $>$, (3) order whole-number lists, and (4) compare and order decimals. Let's put it all together.`,
      },
      {
        id: 'con5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Compare two numbers | More digits wins; if tied, compare **from the left** and stop at the first difference |
| Choose the symbol | The open end of $<$ / $>$ faces the **bigger** number |
| Order a list | Group by digit count, then compare place by place; cross off as you go |
| Compare decimals | Add trailing zeros so they match, then compare **tenths first**, then hundredths |

> ⚠️ **Top two mistakes to avoid:** (1) Thinking a *longer-looking* number is automatically bigger — $0.7 > 0.65$. (2) Mixing up **least-to-greatest** with **greatest-to-least** — always underline the direction word first.`,
      },
      {
        id: 'con5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes $24{,}500 \\;\\square\\; 24{,}050$ true?',
              options: ['$>$', '$<$', '$=$', 'none'],
              correctAnswer: 0,
              explanation: 'The first two places tie ($24$), then hundreds: $5 > 0$, so $24{,}500 > 24{,}050$.',
            },
            {
              question: 'Order from **greatest to least**:  $0.6, \\; 0.66, \\; 0.06, \\; 0.65$.',
              options: [
                '$0.66, \\; 0.65, \\; 0.6, \\; 0.06$',
                '$0.6, \\; 0.06, \\; 0.65, \\; 0.66$',
                '$0.06, \\; 0.6, \\; 0.65, \\; 0.66$',
                '$0.65, \\; 0.66, \\; 0.6, \\; 0.06$',
              ],
              correctAnswer: 0,
              explanation: 'As hundredths: $0.60, 0.66, 0.06, 0.65$. Greatest to least: $0.66 > 0.65 > 0.6 > 0.06$.',
            },
          ],
        },
      },
      {
        id: 'con5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Putting It Together** 🧮

**1)** Type the larger number:  $7{,}089$  or  $7{,}098$.
**2)** Order $0.2, \\; 0.25, \\; 0.05$ from least to greatest. Which is the **least**?
**3)** In the number $362{,}517$, what is the digit $6$ worth?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7098', '0.05', '60000'],
          hint1: '$7{,}089$ vs. $7{,}098$: thousands and hundreds tie, then tens $8 < 9$, so $7{,}098$ is larger.',
          hint2: 'As hundredths: $0.20, 0.25, 0.05$. The least has the fewest tenths: $0.05$ has $0$ tenths.',
          hint3: 'In $362{,}517$ the $6$ is in the ten-thousands place: $6 \\times 10{,}000 = 60{,}000$.',
          explanation: '1) $7{,}098$.  2) least $= 0.05$ (order $0.05 < 0.2 < 0.25$).  3) $60{,}000$.',
        },
      },
      {
        id: 'con5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement is **true**?',
              options: ['$8{,}300 < 8{,}030$', '$8{,}300 > 8{,}030$', '$8{,}300 = 8{,}030$', '$8{,}030 > 8{,}300$'],
              correctAnswer: 1,
              explanation: 'Thousands tie ($8$), then hundreds: $3 > 0$, so $8{,}300 > 8{,}030$.',
            },
            {
              question: 'Which list is correctly ordered from **least to greatest**?',
              options: [
                '$0.5, \\; 0.45, \\; 0.54$',
                '$0.45, \\; 0.5, \\; 0.54$',
                '$0.54, \\; 0.5, \\; 0.45$',
                '$0.45, \\; 0.54, \\; 0.5$',
              ],
              correctAnswer: 1,
              explanation: 'As hundredths: $0.45, 0.50, 0.54$. Least to greatest: $0.45 < 0.5 < 0.54$.',
            },
            {
              question: 'A number has more digits than another number (and no leading zeros). That number is...',
              options: ['always smaller', 'always larger', 'sometimes equal', 'impossible to compare'],
              correctAnswer: 1,
              explanation: 'With no leading zeros, more digits means a bigger place value is reached, so the number is always larger. For example, $1{,}000$ (4 digits) $> 999$ (3 digits).',
            },
          ],
        },
      },
    ],
  },
]
