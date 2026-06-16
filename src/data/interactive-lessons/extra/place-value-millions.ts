import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Place Value to Millions (Grade 4 Math).
 * Registry key: 'place-value-millions' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light numeric input-boxes.
 * Math uses doubled backslashes (template-literal strings). File lives in extra/,
 * so the registry import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'place-value-millions',
    sections: [
      {
        id: 'pvm1-intro',
        type: 'text' as const,
        content: `# 🔢 Place Value to Millions

**Part 1 of 5 — What Place Value Means**

---

### Topics in This Part

| Section |
|---------|
| Digits vs. Numbers |
| The Place Value Chart |
| Reading Each Place |

> 🔑 **Key Idea:** The *same digit* can be worth different amounts depending on **where** it sits in a number. The spot a digit sits in is called its **place**, and the amount it is worth there is its **value**. That is what "place value" means.`,
      },
      {
        id: 'pvm1-digits',
        type: 'text' as const,
        content: `## Digits vs. Numbers

A **digit** is one of the ten symbols we write numbers with:

$$0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9$$

A **number** is built by putting digits together. The number $375$ is made from the three digits $3$, $7$, and $5$.

Here is the big secret of our number system: the **position** of a digit tells you how much it is worth.

| Number | The digit $5$ is worth... |
|--------|---------------------------|
| $5$ | five ones $= 5$ |
| $50$ | five tens $= 50$ |
| $500$ | five hundreds $= 500$ |

> 💡 The same digit $5$ stands for $5$, then $50$, then $500$. Moving one spot to the **left** makes a digit **10 times bigger**.`,
      },
      {
        id: 'pvm1-digit-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $80$, what is the digit $8$ worth?',
              options: ['Eight ones (8)', 'Eight tens (80)', 'Eight hundreds (800)', 'Just eight'],
              correctAnswer: 1,
              explanation: 'In $80$, the $8$ sits in the tens place, so it is worth eight tens, which is $80$. The $0$ holds the ones place.',
            },
            {
              question: 'Which number is built from the digits $2$, $0$, and $6$?',
              options: ['$26$', '$206$', '$620$', '$2006$'],
              correctAnswer: 1,
              explanation: 'Reading the digits $2$, then $0$, then $6$ in order gives $206$. The $0$ in the middle holds the tens place open.',
            },
          ],
        },
      },
      {
        id: 'pvm1-chart',
        type: 'text' as const,
        content: `## The Place Value Chart

We give each spot a name. Reading from **right to left**, the places get bigger and bigger:

| Place | Value of a $1$ there |
|-------|----------------------|
| Ones | $1$ |
| Tens | $10$ |
| Hundreds | $100$ |
| Thousands | $1{,}000$ |
| Ten Thousands | $10{,}000$ |
| Hundred Thousands | $100{,}000$ |
| Millions | $1{,}000{,}000$ |

Notice the pattern: each step to the **left** is $10$ times the place before it. Ten ones make one ten, ten tens make one hundred, ten hundreds make one thousand, and so on.

> 🔑 **Key Rule:** Each place to the left is **10 times** the place to its right. That is why we call ours a *base-ten* number system.`,
      },
      {
        id: 'pvm1-tentimes-drill',
        type: 'input-boxes' as const,
        content: `**Ten Times Bigger** 🧮

Each place is $10$ times the one to its right. Fill in each blank.

**1)** $10$ tens make $1$ hundred. How many hundreds make $1$ thousand?
**2)** A digit in the thousands place is worth $1{,}000$. What is a digit worth one place to its left (ten thousands)?
**3)** $10 \\times 100 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '10000', '1000'],
          hint1: 'Each bigger place takes $10$ of the place before it.',
          hint2: 'Ten thousands means $10 \\times 1{,}000$.',
          hint3: '$10 \\times 100$ means ten hundreds, which is one thousand.',
          explanation: '1) $10$ hundreds make a thousand. 2) Ten thousands $= 10 \\times 1{,}000 = 10{,}000$. 3) $10 \\times 100 = 1{,}000$. Every place is 10 times the one to its right.',
        },
      },
      {
        id: 'pvm1-reading-places',
        type: 'text' as const,
        content: `## Reading Each Place

Let's place the number $3{,}527{,}481$ into the chart. We line up the digits with their place names:

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|----------|-------------------|---------------|-----------|----------|------|------|
| $3$ | $5$ | $2$ | $7$ | $4$ | $8$ | $1$ |

Now we can read each digit's *place*:
- The $3$ is in the **millions** place.
- The $5$ is in the **hundred thousands** place.
- The $2$ is in the **ten thousands** place.
- The $1$ is in the **ones** place.

> 💡 To find any digit's place, just line the number up in the chart. In Part 2, we'll turn each place into its full **value** (like "the $3$ is worth $3{,}000{,}000$").`,
      },
      {
        id: 'pvm1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Place** 🔽

Use the number $3{,}527{,}481$ from the chart above. Choose the **place** each digit sits in.

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|----------|-------------------|---------------|-----------|----------|------|------|
| $3$ | $5$ | $2$ | $7$ | $4$ | $8$ | $1$ |`,
        exercise: {
          dropdowns: [
            { label: 'The digit $3$ is in the:', options: ['millions place', 'hundred thousands place', 'thousands place', 'hundreds place'] },
            { label: 'The digit $7$ is in the:', options: ['ten thousands place', 'thousands place', 'hundreds place', 'tens place'] },
            { label: 'The digit $8$ is in the:', options: ['hundreds place', 'tens place', 'ones place', 'thousands place'] },
          ],
          correctAnswers: ['millions place', 'thousands place', 'tens place'],
          hint1: 'Read the place names from the chart heading, lined up over each digit.',
          hint2: 'The leftmost digit ($3$) is the millions; the $7$ sits in the middle group as the thousands.',
          hint3: 'Counting from the right: ones, tens, hundreds — so the $8$ (second from the right) is in the tens place.',
          explanation: 'In $3{,}527{,}481$: the $3$ is millions, the $7$ is thousands, and the $8$ is tens. Just line each digit up under its place name.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'place-value-millions',
    sections: [
      {
        id: 'pvm2-intro',
        type: 'text' as const,
        content: `# 🔢 Place Value to Millions

**Part 2 of 5 — The Value of a Digit**

---

> 🔑 **The Idea:** A digit's **place** is its spot's name (tens, hundreds, ...). A digit's **value** is the full amount it stands for *in that spot*. The $7$ in $700$ has a *value* of $700$, even though the digit is just $7$.`,
      },
      {
        id: 'pvm2-value',
        type: 'text' as const,
        content: `## Place vs. Value

To find a digit's **value**, multiply the digit by what one of that place is worth.

$$\\text{value} = \\text{digit} \\times \\text{value of the place}$$

Look at $4{,}716{,}203$:

| Digit | Place | Value |
|-------|-------|-------|
| $4$ | millions | $4 \\times 1{,}000{,}000 = 4{,}000{,}000$ |
| $7$ | hundred thousands | $7 \\times 100{,}000 = 700{,}000$ |
| $1$ | ten thousands | $1 \\times 10{,}000 = 10{,}000$ |
| $6$ | thousands | $6 \\times 1{,}000 = 6{,}000$ |
| $2$ | hundreds | $2 \\times 100 = 200$ |
| $0$ | tens | $0 \\times 10 = 0$ |
| $3$ | ones | $3 \\times 1 = 3$ |

> ⚠️ **Watch out:** A $0$ does *not* mean "nothing useful." The $0$ in the tens place is a **placeholder** — it keeps every other digit in its correct, larger spot.`,
      },
      {
        id: 'pvm2-value-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $4{,}716{,}203$, what is the **value** of the digit $7$?',
              options: ['$7$', '$7{,}000$', '$70{,}000$', '$700{,}000$'],
              correctAnswer: 3,
              explanation: 'The $7$ sits in the hundred thousands place, so its value is $7 \\times 100{,}000 = 700{,}000$.',
            },
            {
              question: 'What is the difference between a digit\'s **place** and its **value**?',
              options: [
                'They are the same thing',
                'Place is the spot\'s name; value is the amount the digit is worth there',
                'Place is always bigger than value',
                'Value is only used for the digit 0',
              ],
              correctAnswer: 1,
              explanation: 'The place is the name of the spot (like "hundreds"). The value is the full amount the digit stands for in that spot (like $300$ for a $3$ in the hundreds place).',
            },
          ],
        },
      },
      {
        id: 'pvm2-value-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Value** 🔽

Use the number $809{,}205$. Pick the **value** of each digit.

| Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|-------------------|---------------|-----------|----------|------|------|
| $8$ | $0$ | $9$ | $2$ | $0$ | $5$ |`,
        exercise: {
          dropdowns: [
            { label: 'Value of the $8$:', options: ['$8$', '$8{,}000$', '$80{,}000$', '$800{,}000$'] },
            { label: 'Value of the $9$:', options: ['$9$', '$900$', '$9{,}000$', '$90{,}000$'] },
            { label: 'Value of the $2$:', options: ['$2$', '$20$', '$200$', '$2{,}000$'] },
          ],
          correctAnswers: ['$800{,}000$', '$9{,}000$', '$200$'],
          hint1: 'The $8$ is in the hundred thousands place: $8 \\times 100{,}000$.',
          hint2: 'The $9$ is in the thousands place: $9 \\times 1{,}000$.',
          hint3: 'The $2$ is in the hundreds place: $2 \\times 100$.',
          explanation: '$8 \\to 800{,}000$, $9 \\to 9{,}000$, $2 \\to 200$. Each value is the digit times what one of that place is worth.',
        },
      },
      {
        id: 'pvm2-value-drill',
        type: 'input-boxes' as const,
        content: `**Find the Value** 🧮

For the number $2{,}658{,}300$, write the **value** of each digit below. (Write the full number, like $700$ or $40{,}000$.)

**1)** The value of the $6$ ( hundred thousands place ) $= \\,?$
**2)** The value of the $5$ ( ten thousands place ) $= \\,?$
**3)** The value of the $8$ ( thousands place ) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['600000', '50000', '8000'],
          hint1: 'Value = digit $\\times$ value of the place.',
          hint2: 'Hundred thousands: $6 \\times 100{,}000$. Ten thousands: $5 \\times 10{,}000$.',
          hint3: 'Thousands: $8 \\times 1{,}000 = 8{,}000$.',
          explanation: '$6 \\times 100{,}000 = 600{,}000$; $\\;5 \\times 10{,}000 = 50{,}000$; $\\;8 \\times 1{,}000 = 8{,}000$.',
        },
      },
      {
        id: 'pvm2-ten-times',
        type: 'text' as const,
        content: `## The "10 Times" Connection

Because each place is $10$ times the one to its right, the **same digit** is worth $10$ times more each spot it moves left.

Look at the digit $5$ across three numbers:

| Number | Place of the $5$ | Value of the $5$ |
|--------|------------------|------------------|
| $50$ | tens | $50$ |
| $500$ | hundreds | $500$ |
| $5{,}000$ | thousands | $5{,}000$ |

Each time the $5$ moves one place left, its value is multiplied by $10$: $\\;50 \\to 500 \\to 5{,}000$.

> 🔑 **Key Fact:** $5{,}000$ is exactly **10 times** as much as $500$, because $5{,}000 = 10 \\times 500$. Place value and "times 10" go hand in hand.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'place-value-millions',
    sections: [
      {
        id: 'pvm3-intro',
        type: 'text' as const,
        content: `# 🔢 Place Value to Millions

**Part 3 of 5 — Three Ways to Write a Number**

---

> 🔑 **The Idea:** Every number can be written in **three forms**: *standard form* (the digits, like $42{,}569$), *expanded form* (each value added up), and *word form* (written out in words). Knowing all three is the heart of place value.`,
      },
      {
        id: 'pvm3-three-forms',
        type: 'text' as const,
        content: `## The Three Forms

Let's write $42{,}569$ three ways.

**Standard form** — the everyday way, just the digits:
$$42{,}569$$

**Expanded form** — break it into the value of each digit and add:
$$40{,}000 + 2{,}000 + 500 + 60 + 9$$

**Word form** — say it the way you'd read it out loud:
$$\\text{forty-two thousand, five hundred sixty-nine}$$

| Form | $42{,}569$ |
|------|------------|
| Standard | $42{,}569$ |
| Expanded | $40{,}000 + 2{,}000 + 500 + 60 + 9$ |
| Word | forty-two thousand, five hundred sixty-nine |

> 💡 **Tip:** Expanded form is just every digit's **value** from Part 2, added together. If a place has a $0$, you can skip it in expanded form.`,
      },
      {
        id: 'pvm3-forms-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the **expanded form** of $7{,}304$?',
              options: [
                '$7{,}000 + 300 + 4$',
                '$7{,}000 + 30 + 4$',
                '$700 + 30 + 4$',
                '$7{,}000 + 300 + 40$',
              ],
              correctAnswer: 0,
              explanation: 'The digit values are $7{,}000$ (thousands), $300$ (hundreds), $0$ (tens), and $4$ (ones). We add only the nonzero values: $7{,}000 + 300 + 4$. The tens place is $0$, so we leave it out.',
            },
            {
              question: 'Which number is "two hundred six thousand, fifteen" in standard form?',
              options: ['$26{,}015$', '$206{,}015$', '$206{,}150$', '$260{,}015$'],
              correctAnswer: 1,
              explanation: 'Two hundred six thousand is $206{,}000$; fifteen is $15$. Together that is $206{,}015$. The $0$ in the hundreds place is a placeholder.',
            },
          ],
        },
      },
      {
        id: 'pvm3-expanded-drill',
        type: 'input-boxes' as const,
        content: `**Build the Number** 🧮

Add up the expanded form to find the standard-form number. (Type just the digits, no commas — like $40500$.)

**1)** $40{,}000 + 2{,}000 + 500 + 60 + 9 = \\,?$
**2)** $600{,}000 + 5{,}000 + 30 = \\,?$
**3)** $1{,}000{,}000 + 300{,}000 + 2{,}000 + 7 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['42569', '605030', '1302007'],
          hint1: 'Put each value into its place; a missing place becomes a $0$.',
          hint2: 'For #2, there is no hundreds and no ones, so those places are $0$: $605{,}030$.',
          hint3: 'For #3, the hundred-thousands is $3$, but ten-thousands, hundreds, and tens are all $0$.',
          explanation: '1) $42{,}569$. 2) $605{,}030$ (the empty hundreds and ones become $0$). 3) $1{,}302{,}007$. Missing places are filled with $0$.',
        },
      },
      {
        id: 'pvm3-word-form',
        type: 'text' as const,
        content: `## Reading Big Numbers in Words

Commas split a number into groups of three, and each group has a name. Read each group, then say its group's name.

$$\\underbrace{2}_{\\text{millions}},\\ \\underbrace{084}_{\\text{thousands}},\\ \\underbrace{500}_{\\text{ones}}$$

Read it group by group:
- $2$ → "two **million**"
- $084$ → "eighty-four **thousand**"
- $500$ → "five hundred"

Put it together: **two million, eighty-four thousand, five hundred**.

> ⚠️ **Common mistake:** Don't say "and" between groups. We write $2{,}084{,}500$ as "two million, eighty-four thousand, five hundred" — no "and." We also never name the *ones* group, we just say its digits.`,
      },
      {
        id: 'pvm3-word-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read It in Words** 🔽

Build the word form of $3{,}450{,}016$ by choosing each group.

$$\\underbrace{3}_{\\text{millions}},\\ \\underbrace{450}_{\\text{thousands}},\\ \\underbrace{016}_{\\text{ones}}$$`,
        exercise: {
          dropdowns: [
            { label: 'Millions group ($3$):', options: ['three million', 'thirty million', 'three thousand', 'three hundred'] },
            { label: 'Thousands group ($450$):', options: ['forty-five thousand', 'four hundred five thousand', 'four hundred fifty thousand', 'four hundred fifty'] },
            { label: 'Ones group ($016$):', options: ['sixteen', 'sixty', 'one hundred six', 'one hundred sixteen'] },
          ],
          correctAnswers: ['three million', 'four hundred fifty thousand', 'sixteen'],
          hint1: 'Read each group as if it were a small number, then add its group name.',
          hint2: '$450$ reads "four hundred fifty," and its group is thousands.',
          hint3: '$016$ is just $16$, read "sixteen." We don\'t name the ones group.',
          explanation: '$3{,}450{,}016$ is "three million, four hundred fifty thousand, sixteen." Read each group, then say its name (millions, thousands).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'place-value-millions',
    sections: [
      {
        id: 'pvm4-intro',
        type: 'text' as const,
        content: `# 🔢 Place Value to Millions

**Part 4 of 5 — Comparing & Rounding**

---

> 🔑 **The Idea:** Place value lets us **compare** two big numbers (which is bigger?) and **round** a number to a nearby, friendlier number. Both tricks start by lining up the digits by their places.`,
      },
      {
        id: 'pvm4-compare',
        type: 'text' as const,
        content: `## Comparing Big Numbers

To compare two numbers, line them up by place and compare from the **left** (the biggest place) first.

We use three symbols:

| Symbol | Means |
|--------|-------|
| $>$ | greater than |
| $<$ | less than |
| $=$ | equal to |

**Example:** Compare $548{,}000$ and $548{,}200$.

1. Same millions/hundred-thousands/ten-thousands/thousands: $548$ matches $548$.
2. First difference is in the **hundreds** place: $0$ vs. $2$.
3. Since $0 < 2$, we get $548{,}000 < 548{,}200$.

> 💡 **Shortcut:** A number with **more digits** is always bigger (for whole numbers). $1{,}200{,}000$ has 7 digits and $912{,}345$ has 6 digits, so $1{,}200{,}000 > 912{,}345$ — you don't even have to check each place.`,
      },
      {
        id: 'pvm4-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Greater, Less, or Equal?** 🔽

Choose the correct symbol for each pair.`,
        exercise: {
          dropdowns: [
            { label: '$548{,}000\\ \\boxed{?}\\ 548{,}200$', options: ['$>$', '$<$', '$=$'] },
            { label: '$1{,}200{,}000\\ \\boxed{?}\\ 912{,}345$', options: ['$>$', '$<$', '$=$'] },
            { label: '$73{,}914\\ \\boxed{?}\\ 73{,}914$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$<$', '$>$', '$=$'],
          hint1: 'Compare from the left, place by place, until the digits differ.',
          hint2: 'A 7-digit number is always bigger than a 6-digit whole number.',
          hint3: 'If every digit matches, the numbers are equal.',
          explanation: '$548{,}000 < 548{,}200$ (hundreds: $0<2$). $1{,}200{,}000 > 912{,}345$ (more digits). $73{,}914 = 73{,}914$ (identical).',
        },
      },
      {
        id: 'pvm4-rounding',
        type: 'text' as const,
        content: `## Rounding to a Place

Rounding swaps a number for a nearby, simpler one. Here are the steps to round to a given place:

1. **Underline** the digit in the place you're rounding to.
2. **Look at the digit just to its right** (the "neighbor").
3. If the neighbor is $5$ or more, **round up** (add $1$ to the underlined digit). If it's $4$ or less, **keep it the same**.
4. Change every digit to the **right** of the underlined place into a $0$.

**Example:** Round $84{,}627$ to the nearest **thousand**.

- The thousands digit is $4$ (in $8\\underline{4}{,}627$).
- Its neighbor (hundreds place) is $6$. Since $6 \\ge 5$, round **up**: $4 \\to 5$.
- Zero out the rest: $\\;85{,}000$.

$$84{,}627 \\approx 85{,}000$$

> ⚠️ **Remember:** You only look at the **one** digit to the right of your place — not the whole rest of the number. The neighbor decides everything.`,
      },
      {
        id: 'pvm4-round-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $247{,}910$ to the nearest **ten thousand**.',
              options: ['$240{,}000$', '$250{,}000$', '$248{,}000$', '$200{,}000$'],
              correctAnswer: 1,
              explanation: 'The ten-thousands digit is $4$ (in $2\\underline{4}7{,}910$). Its neighbor, the thousands digit, is $7 \\ge 5$, so round up: $4 \\to 5$. Result: $250{,}000$.',
            },
            {
              question: 'When rounding, which digit do you look at to decide round up or stay the same?',
              options: [
                'The digit in the place you are rounding to',
                'The very first (leftmost) digit',
                'The digit just to the right of the rounding place',
                'The last (ones) digit',
              ],
              correctAnswer: 2,
              explanation: 'You look at the single digit just to the **right** of the place you are rounding to. If it is $5$ or more, round up; if $4$ or less, keep the digit the same.',
            },
          ],
        },
      },
      {
        id: 'pvm4-round-drill',
        type: 'input-boxes' as const,
        content: `**Round It** 🧮

Round each number as asked. (Type just the digits, no commas.)

**1)** Round $3{,}527{,}481$ to the nearest **hundred thousand**.
**2)** Round $5{,}450{,}000$ to the nearest **million**.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3500000', '5000000'],
          hint1: 'Underline the rounding place, then check its right-hand neighbor.',
          hint2: 'For #1, hundred-thousands digit is $5$; its neighbor (ten-thousands) is $2 < 5$, so keep it: $3{,}500{,}000$.',
          hint3: 'For #2, millions digit is $5$; its neighbor (hundred-thousands) is $4 < 5$, so keep it: $5{,}000{,}000$.',
          explanation: '1) Neighbor $2 < 5$ → keep, zero the rest → $3{,}500{,}000$. 2) Neighbor $4 < 5$ → keep, zero the rest → $5{,}000{,}000$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'place-value-millions',
    sections: [
      {
        id: 'pvm5-intro',
        type: 'text' as const,
        content: `# 🔢 Place Value to Millions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name each **place**, (2) find a digit's **value**, (3) write numbers in **standard, expanded, and word** form, and (4) **compare** and **round**. Let's put it all together.`,
      },
      {
        id: 'pvm5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Skill | What to do |
|-------|------------|
| Find a place | Line the number up in the place value chart |
| Find a value | digit $\\times$ value of its place (e.g. $7$ in hundreds $= 700$) |
| Expanded form | add the value of every digit (skip $0$s) |
| Word form | read each comma-group, then say its name (millions, thousands) |
| Compare | line up by place, compare from the **left** |
| Round | look at the digit **right** of your place: $\\ge 5$ rounds up |

> 🔑 **Big takeaway:** Every place is **10 times** the place to its right. That one rule explains naming places, finding values, comparing, *and* rounding. Place value is the backbone of the whole number system.`,
      },
      {
        id: 'pvm5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Use the number $6{,}205{,}038$ to answer each part.`,
        exercise: {
          dropdowns: [
            { label: 'The place of the digit $6$:', options: ['millions', 'hundred thousands', 'thousands', 'hundreds'] },
            { label: 'The value of the digit $2$:', options: ['$2$', '$2{,}000$', '$20{,}000$', '$200{,}000$'] },
            { label: 'In words, this number begins:', options: ['sixty million', 'six million', 'six hundred thousand', 'six thousand'] },
          ],
          correctAnswers: ['millions', '$200{,}000$', 'six million'],
          hint1: 'Line $6{,}205{,}038$ up in the chart: the leftmost digit is in the millions place.',
          hint2: 'The $2$ is in the hundred-thousands place: $2 \\times 100{,}000$.',
          hint3: 'The millions group is just "$6$," so it reads "six million."',
          explanation: 'The $6$ is in the millions place. The $2$ is worth $200{,}000$. The number is "six million, two hundred five thousand, thirty-eight."',
        },
      },
      {
        id: 'pvm5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Type just the digits (no commas).

**1)** Write the **standard form** of "one million, four hundred thousand, twenty-five."
**2)** What is the **value** of the $9$ in $1{,}392{,}640$?
**3)** Round $682{,}500$ to the nearest **hundred thousand**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1400025', '90000', '700000'],
          hint1: 'For #1: one million is $1{,}000{,}000$; four hundred thousand is $400{,}000$; twenty-five is $25$.',
          hint2: 'For #2: the $9$ is in the ten-thousands place, so $9 \\times 10{,}000$.',
          hint3: 'For #3: hundred-thousands digit is $6$; its neighbor (ten-thousands) is $8 \\ge 5$, so round up ($6 \\to 7$) and zero the rest: $700{,}000$.',
          explanation: '1) $1{,}000{,}000 + 400{,}000 + 25 = 1{,}400{,}025$. 2) $9 \\times 10{,}000 = 90{,}000$. 3) Neighbor $8 \\ge 5$ → round up → $700{,}000$.',
        },
      },
      {
        id: 'pvm5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In $5{,}832{,}107$, what is the **value** of the digit $8$?',
              options: ['$8{,}000$', '$80{,}000$', '$800{,}000$', '$8{,}000{,}000$'],
              correctAnswer: 2,
              explanation: 'The $8$ is in the hundred-thousands place, so its value is $8 \\times 100{,}000 = 800{,}000$.',
            },
            {
              question: 'Which comparison is **true**?',
              options: [
                '$409{,}000 > 409{,}900$',
                '$1{,}050{,}000 < 950{,}000$',
                '$236{,}471 > 236{,}470$',
                '$700{,}000 = 70{,}000$',
              ],
              correctAnswer: 2,
              explanation: '$236{,}471 > 236{,}470$ because the ones digit $1 > 0$ and every other digit matches. The others are false: $409{,}000 < 409{,}900$; $1{,}050{,}000 > 950{,}000$ (more digits); and $700{,}000 \\ne 70{,}000$.',
            },
            {
              question: 'Round $3{,}749{,}000$ to the nearest **million**.',
              options: ['$3{,}000{,}000$', '$4{,}000{,}000$', '$3{,}700{,}000$', '$3{,}800{,}000$'],
              correctAnswer: 1,
              explanation: 'The millions digit is $3$. Its neighbor (hundred-thousands) is $7 \\ge 5$, so round up: $3 \\to 4$, giving $4{,}000{,}000$.',
            },
          ],
        },
      },
    ],
  },
]
