import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Understanding Place Value (Grade 4 Math).
 * Registry key: 'understanding-place-value-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'understanding-place-value-grade4',
    sections: [
      {
        id: 'upv1-intro',
        type: 'text' as const,
        content: `# 🔢 Understanding Place Value

**Part 1 of 5 — What Place Value Means**

---

### Topics in This Part

| Section |
|---------|
| Digits vs. Numbers |
| The Place-Value Columns |
| Finding a Digit's Value |

> 🔑 **Key Concept:** In our number system, the **position** of a digit tells you its value. The same digit $7$ can mean $7$, or $70$, or $700$ — it all depends on which **place** it sits in.`,
      },
      {
        id: 'upv1-digits',
        type: 'text' as const,
        content: `## Digits vs. Numbers

A **digit** is one of the ten symbols we write numbers with:

$$0,\\; 1,\\; 2,\\; 3,\\; 4,\\; 5,\\; 6,\\; 7,\\; 8,\\; 9$$

A **number** is built by putting digits together. The number $352$ is made of the digits $3$, $5$, and $2$.

But those digits are **not** worth $3$, $5$, and $2$. Their value depends on **where** they sit:

| Digit | Place it sits in | What it is worth |
|-------|------------------|------------------|
| $3$ | hundreds | $300$ |
| $5$ | tens | $50$ |
| $2$ | ones | $2$ |

Add the values: $300 + 50 + 2 = 352$. ✓

> 💡 This is why our system is called **base ten** — each place is worth **ten times** as much as the place just to its right.`,
      },
      {
        id: 'upv1-columns',
        type: 'text' as const,
        content: `## The Place-Value Columns

Reading from the **right**, the columns grow by ten each step:

| Place | Millions | Hundred-thousands | Ten-thousands | Thousands | Hundreds | Tens | Ones |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Value of one | $1{,}000{,}000$ | $100{,}000$ | $10{,}000$ | $1{,}000$ | $100$ | $10$ | $1$ |

The **ones** place is always farthest to the **right**. As you move **left**, the value of each place gets **bigger**.

### Example: the number 4,286

| Thousands | Hundreds | Tens | Ones |
|:---:|:---:|:---:|:---:|
| $4$ | $2$ | $8$ | $6$ |
| $4{,}000$ | $200$ | $80$ | $6$ |

So $4{,}286 = 4{,}000 + 200 + 80 + 6$.

> 🔑 **Remember:** A comma is placed every **three digits** from the right. It helps you see the groups: ones, then thousands, then millions.`,
      },
      {
        id: 'upv1-name-place',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $5{,}731$, which place is the digit $7$ in?',
              options: ['Hundreds', 'Tens', 'Thousands', 'Ones'],
              correctAnswer: 0,
              explanation: 'Reading from the right: $1$ is ones, $3$ is tens, $7$ is hundreds, $5$ is thousands. So $7$ is in the hundreds place.',
            },
            {
              question: 'Which digit is in the tens place of $8{,}094$?',
              options: ['$8$', '$0$', '$9$', '$4$'],
              correctAnswer: 2,
              explanation: 'From the right: $4$ is ones, $9$ is tens, $0$ is hundreds, $8$ is thousands. The tens digit is $9$.',
            },
          ],
        },
      },
      {
        id: 'upv1-value-text',
        type: 'text' as const,
        content: `## Finding a Digit's Value

To find what a digit is **worth**, multiply the digit by the value of its place.

$$\\text{value} = \\text{digit} \\times \\text{place value}$$

### Example: the value of $6$ in $3{,}640$

The $6$ sits in the **hundreds** place, so its value is:

$$6 \\times 100 = 600$$

The $6$ is worth **six hundred**, not six.

### Example: the value of $4$ in $3{,}640$

The $4$ sits in the **tens** place, so its value is:

$$4 \\times 10 = 40$$

> ⚠️ **Watch out:** Don't confuse the *digit* with its *value*. In $3{,}640$ the digit is $6$, but its **value** is $600$.`,
      },
      {
        id: 'upv1-value-drill',
        type: 'input-boxes' as const,
        content: `**Find the Value** 🧮

Write the **value** of the underlined digit (not just the digit).

**1)** In $2{,}\\underline{5}03$, the $5$ is worth $\\,?$
**2)** In $\\underline{7}{,}219$, the $7$ is worth $\\,?$
**3)** In $4{,}9\\underline{8}0$, the $8$ is worth $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['500', '7000', '80'],
          hint1: 'In $2{,}503$ the $5$ is in the hundreds place: $5 \\times 100 = 500$.',
          hint2: 'In $7{,}219$ the $7$ is in the thousands place: $7 \\times 1000 = 7000$.',
          hint3: 'In $4{,}980$ the $8$ is in the tens place: $8 \\times 10 = 80$.',
          explanation: '1) hundreds → $500$.  2) thousands → $7000$.  3) tens → $80$. Multiply the digit by its place value each time.',
        },
      },
      {
        id: 'upv1-place-recap',
        type: 'text' as const,
        content: `## Putting It Together

For any digit, ask two questions:

1. **Which place** is it in? (Count from the ones place on the right.)
2. **What is one of that place worth?** ($1$, $10$, $100$, $1{,}000$, …)

Multiply, and you have the digit's value.

> 🔑 **One last reminder:** The places, right to left, are **ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions**. Each is ten times the one before it.`,
      },
      {
        id: 'upv1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Place** 🔽

For the number $\\textbf{6,253}$, choose what each digit means.`,
        exercise: {
          dropdowns: [
            { label: 'The digit $6$ is in the ___ place.', options: ['thousands', 'hundreds', 'tens', 'ones'] },
            { label: 'The digit $2$ is in the ___ place.', options: ['thousands', 'hundreds', 'tens', 'ones'] },
            { label: 'The value of the digit $5$ is:', options: ['$50$', '$5$', '$500$', '$5{,}000$'] },
          ],
          correctAnswers: ['thousands', 'hundreds', '$50$'],
          hint1: 'Reading $6{,}253$ from the right: $3$ ones, $5$ tens, $2$ hundreds, $6$ thousands.',
          hint2: 'The $2$ is the third digit from the right, which is the hundreds place.',
          hint3: 'The $5$ is in the tens place, so its value is $5 \\times 10 = 50$.',
          explanation: 'In $6{,}253$: $6$ is thousands, $2$ is hundreds, $5$ is tens (value $50$), and $3$ is ones.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'understanding-place-value-grade4',
    sections: [
      {
        id: 'upv2-intro',
        type: 'text' as const,
        content: `# 🔢 Understanding Place Value

**Part 2 of 5 — Three Ways to Write a Number**

---

> 🔑 **The Idea:** Every whole number can be written **three** ways — as digits (**standard form**), as a sum of place values (**expanded form**), and in words (**word form**). They all name the same number.`,
      },
      {
        id: 'upv2-forms',
        type: 'text' as const,
        content: `## The Three Forms

| Form | What it looks like | Example for $3{,}408$ |
|------|--------------------|-----------------------|
| **Standard form** | the digits, with commas | $3{,}408$ |
| **Expanded form** | a sum of each place's value | $3{,}000 + 400 + 8$ |
| **Word form** | the number spelled out | three thousand, four hundred eight |

Notice the **expanded form** of $3{,}408$ has **no tens term**, because the tens digit is $0$. A zero holds the place but adds nothing.

> 💡 **Expanded form is just place value written as a sum.** Each digit becomes (digit $\\times$ place value), and you add them up.`,
      },
      {
        id: 'upv2-expanded-ex',
        type: 'text' as const,
        content: `## Writing Expanded Form

Break the number into one piece per **non-zero** digit.

### Example: $6{,}752$

| Digit | Place | Value |
|:---:|:---:|:---:|
| $6$ | thousands | $6{,}000$ |
| $7$ | hundreds | $700$ |
| $5$ | tens | $50$ |
| $2$ | ones | $2$ |

$$6{,}752 = 6{,}000 + 700 + 50 + 2$$

### Example with a zero: $5{,}069$

The thousands digit is $5$, hundreds is $0$, tens is $6$, ones is $9$:

$$5{,}069 = 5{,}000 + 60 + 9$$

> ⚠️ Skip the $0$ place in expanded form — writing "$+\\,0$" is allowed but usually left out. Just be sure the other digits land in the right place.`,
      },
      {
        id: 'upv2-expanded-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the expanded form of $2{,}930$?',
              options: [
                '$2{,}000 + 900 + 30$',
                '$2{,}000 + 90 + 3$',
                '$200 + 90 + 3$',
                '$2{,}000 + 900 + 3$',
              ],
              correctAnswer: 0,
              explanation: '$2$ is thousands ($2{,}000$), $9$ is hundreds ($900$), $3$ is tens ($30$), and $0$ ones adds nothing. So $2{,}000 + 900 + 30$.',
            },
            {
              question: 'Which number is written as $4{,}000 + 200 + 5$ in expanded form?',
              options: ['$4{,}250$', '$4{,}205$', '$4{,}025$', '$4{,}502$'],
              correctAnswer: 1,
              explanation: '$4$ thousands, $2$ hundreds, $0$ tens, $5$ ones → $4{,}205$. There is no tens term, so the tens digit is $0$.',
            },
          ],
        },
      },
      {
        id: 'upv2-word-form',
        type: 'text' as const,
        content: `## Word Form

To write a number in words, read each **group of three** (each comma section) and say its group name.

### Example: $52{,}170$

- The thousands group is $52$ → "fifty-two **thousand**"
- The last group is $170$ → "one hundred seventy"

$$52{,}170 = \\text{fifty-two thousand, one hundred seventy}$$

> 🔑 **Rules to remember:**
> - Put a **comma** in word form where the comma goes in the number.
> - Hyphenate two-word numbers like **twenty-one** and **fifty-two**.
> - We do **not** say the word "and" in a whole number — say "two hundred five," not "two hundred *and* five."`,
      },
      {
        id: 'upv2-form-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Forms** 🔽

Fill in the missing form for each number.`,
        exercise: {
          dropdowns: [
            {
              label: 'Standard form of "six thousand, forty":',
              options: ['$6{,}040$', '$6{,}400$', '$6{,}004$', '$640$'],
            },
            {
              label: 'Expanded form of $8{,}301$:',
              options: [
                '$8{,}000 + 300 + 1$',
                '$8{,}000 + 30 + 1$',
                '$800 + 300 + 1$',
                '$8{,}000 + 300 + 10$',
              ],
            },
            {
              label: 'Word form of $1{,}205$:',
              options: [
                'one thousand, two hundred five',
                'one thousand, two hundred fifty',
                'twelve hundred fifty',
                'one thousand, twenty-five',
              ],
            },
          ],
          correctAnswers: [
            '$6{,}040$',
            '$8{,}000 + 300 + 1$',
            'one thousand, two hundred five',
          ],
          hint1: '"Six thousand" is $6{,}000$ and "forty" is $40$ (tens place), so $6{,}040$ — the hundreds digit is $0$.',
          hint2: 'In $8{,}301$: $8$ thousands, $3$ hundreds, $0$ tens, $1$ one → $8{,}000 + 300 + 1$.',
          hint3: '$1{,}205$ is one thousand, then the group $205$ = "two hundred five." No "and," and no tens word since the tens digit is $0$.',
          explanation: 'Each number has one value but three matching forms: standard $6{,}040$; expanded $8{,}000 + 300 + 1$; word form "one thousand, two hundred five."',
        },
      },
      {
        id: 'upv2-standard-text',
        type: 'text' as const,
        content: `## Going Backward to Standard Form

You can also work the other way: start with expanded or word form and rebuild the **standard** number. Just place each digit in its correct column, and use a **$0$** wherever a place is missing.

### Example: $5{,}000 + 70 + 8$

There is no hundreds term, so the hundreds digit is $0$:

$$5{,}000 + 0 + 70 + 8 = 5{,}078$$

> 💡 The trickiest part is remembering the **zeros**. If a place isn't named, its digit is $0$.`,
      },
      {
        id: 'upv2-standard-drill',
        type: 'input-boxes' as const,
        content: `**Back to Standard Form** 🧮

Write each as a standard-form number (digits only — you may include the comma or not).

**1)** $7{,}000 + 500 + 60 + 3 = \\,?$
**2)** $9{,}000 + 40 + 2 = \\,?$
**3)** "three thousand, eight hundred" $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7563', '9042', '3800'],
          hint1: '$7{,}000 + 500 + 60 + 3$: line up thousands, hundreds, tens, ones → $7563$.',
          hint2: 'There is no hundreds term, so the hundreds digit is $0$: $9{,}000 + 0 + 40 + 2 = 9042$.',
          hint3: '"Three thousand" is $3{,}000$ and "eight hundred" is $800$; tens and ones are $0$ → $3800$.',
          explanation: '1) $7563$.  2) $9042$ (a $0$ fills the empty hundreds place).  3) $3800$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'understanding-place-value-grade4',
    sections: [
      {
        id: 'upv3-intro',
        type: 'text' as const,
        content: `# 🔢 Understanding Place Value

**Part 3 of 5 — The "Ten Times" Rule**

---

> 🔑 **Why it works:** Each place is worth **ten times** the place on its right. So the **same digit** is worth ten times more each step you move it to the **left**.`,
      },
      {
        id: 'upv3-ten-times',
        type: 'text' as const,
        content: `## A Digit Is 10 Times Bigger to the Left

Look at the digit $4$ as it slides one place to the **left**:

| Number | Place of the $4$ | Value of the $4$ |
|:---:|:---:|:---:|
| $4$ | ones | $4$ |
| $40$ | tens | $40$ |
| $400$ | hundreds | $400$ |
| $4{,}000$ | thousands | $4{,}000$ |

Each step to the left, the value is **multiplied by $10$**:

$$4 \\xrightarrow{\\times 10} 40 \\xrightarrow{\\times 10} 400 \\xrightarrow{\\times 10} 4{,}000$$

> 💡 **And going the other way:** each step to the **right** the value is divided by $10$ (it becomes **one tenth** as big). $400 \\to 40 \\to 4$.`,
      },
      {
        id: 'upv3-ten-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply and Divide by 10** 🔽

Use the "ten times to the left, one tenth to the right" rule.`,
        exercise: {
          dropdowns: [
            { label: '$60 \\times 10 = $', options: ['$600$', '$70$', '$6$', '$6{,}000$'] },
            { label: '$30 \\times 100 = $', options: ['$300$', '$3{,}000$', '$330$', '$30{,}000$'] },
            { label: '$800 \\div 10 = $', options: ['$80$', '$8$', '$8{,}000$', '$790$'] },
          ],
          correctAnswers: ['$600$', '$3{,}000$', '$80$'],
          hint1: 'Multiplying by $10$ shifts the digits one place left (add one zero): $60 \\times 10 = 600$.',
          hint2: 'Multiplying by $100$ shifts the digits two places left (add two zeros): $30 \\times 100 = 3{,}000$.',
          hint3: 'Dividing by $10$ shifts the digits one place right (remove one zero): $800 \\div 10 = 80$.',
          explanation: '$\\times 10$ moves digits one place left; $\\times 100$ moves them two places left; $\\div 10$ moves them one place right. So $600$, $3{,}000$, and $80$.',
        },
      },
      {
        id: 'upv3-compare-places',
        type: 'text' as const,
        content: `## Comparing the Same Digit in Two Places

### Example: the two $7$s in $7{,}700$

- The **left** $7$ is in the **thousands** place → worth $7{,}000$.
- The **right** $7$ is in the **hundreds** place → worth $700$.

How many times bigger is the left $7$?

$$7{,}000 \\div 700 = 10$$

The left $7$ is worth **$10$ times** as much as the right $7$. That is always true for **neighboring** places.

> 🔑 **The key fact:** A digit in any place is worth **$10$ times** the same digit one place to its **right**, and **$\\dfrac{1}{10}$** as much one place to its **left**.`,
      },
      {
        id: 'upv3-ten-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $3{,}300$, the value of the $3$ in the thousands place is how many times the value of the $3$ in the hundreds place?',
              options: ['$10$ times', '$100$ times', '$3$ times', '$1{,}000$ times'],
              correctAnswer: 0,
              explanation: 'The left $3$ is worth $3{,}000$ and the right $3$ is worth $300$. $3{,}000 \\div 300 = 10$, so it is $10$ times as much (neighboring places are always $10\\times$).',
            },
            {
              question: 'The value of a digit in the tens place is $\\frac{1}{10}$ of its value in which place?',
              options: ['Ones', 'Hundreds', 'Thousands', 'Tens'],
              correctAnswer: 1,
              explanation: 'Moving one place to the LEFT multiplies by $10$, so the tens value is one tenth of the hundreds value. For example $20$ is $\\frac{1}{10}$ of $200$.',
            },
          ],
        },
      },
      {
        id: 'upv3-ten-drill-text',
        type: 'text' as const,
        content: `## A Quick Pattern for Multiplying by 10

Because each place is ten times the one to its right, **multiplying a whole number by $10$** just shifts every digit one place left — which looks like **adding a zero**:

$$50 \\times 10 = 500 \\qquad 7 \\times 1000 = 7000$$

Dividing by $10$ does the opposite for numbers that end in zero — it **removes** a zero: $800 \\div 10 = 80$.

> 💡 This shortcut only "adds a zero" for **whole numbers**. The real reason it works is the place-value pattern, not a trick.`,
      },
      {
        id: 'upv3-ten-drill',
        type: 'input-boxes' as const,
        content: `**Ten Times Practice** 🧮

**1)** $50 \\times 10 = \\,?$
**2)** $7 \\times 1000 = \\,?$
**3)** The $9$ in $9{,}000$ is worth how many times the $9$ in $900$? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['500', '7000', '10'],
          hint1: '$50 \\times 10$: add one zero → $500$.',
          hint2: '$7 \\times 1000$: add three zeros → $7000$.',
          hint3: '$9{,}000 \\div 900 = 10$; neighboring places are always $10$ times apart.',
          explanation: '1) $500$.  2) $7000$.  3) $10$ times — the thousands place is $10$ times the hundreds place.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'understanding-place-value-grade4',
    sections: [
      {
        id: 'upv4-intro',
        type: 'text' as const,
        content: `# 🔢 Understanding Place Value

**Part 4 of 5 — Comparing, Ordering & Rounding**

---

> 🔑 **Big Payoff:** Place value lets you **compare** any two numbers, put a list **in order**, and **round** to a friendly number — all by looking at digits one place at a time.`,
      },
      {
        id: 'upv4-compare',
        type: 'text' as const,
        content: `## Comparing Numbers

To compare two whole numbers, line them up and compare **from the left**:

1. The number with **more digits** is larger.
2. If they have the **same number of digits**, compare the leftmost place. The bigger digit wins.
3. If those digits tie, move **one place right** and compare again.

We write comparisons with these symbols:

| Symbol | Means |
|:---:|:---|
| $>$ | is greater than |
| $<$ | is less than |
| $=$ | is equal to |

### Example: compare $3{,}471$ and $3{,}419$

Both have $3$ in thousands and $4$ in hundreds — a tie so far. Move to the **tens**:

$$7 > 1 \\quad\\Rightarrow\\quad 3{,}471 > 3{,}419$$

> 💡 **Tip:** The $>$ and $<$ symbols always open toward the **bigger** number, like a hungry mouth eating the larger amount.`,
      },
      {
        id: 'upv4-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Greater, Less, or Equal?** 🔽

Choose the symbol that makes each statement true.`,
        exercise: {
          dropdowns: [
            { label: '$4{,}820 \\;\\square\\; 4{,}280$', options: ['$>$', '$<$', '$=$'] },
            { label: '$915 \\;\\square\\; 1{,}002$', options: ['$>$', '$<$', '$=$'] },
            { label: '$6{,}507 \\;\\square\\; 6{,}507$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$<$', '$=$'],
          hint1: 'Both start with $4$ thousands. Compare hundreds: $8 > 2$, so $4{,}820 > 4{,}280$.',
          hint2: '$915$ has $3$ digits; $1{,}002$ has $4$ digits. More digits means larger, so $915 < 1{,}002$.',
          hint3: 'Every digit matches, so the numbers are equal: $6{,}507 = 6{,}507$.',
          explanation: 'Compare from the left: $4{,}820 > 4{,}280$ (hundreds $8>2$); $915 < 1{,}002$ (fewer digits); $6{,}507 = 6{,}507$ (identical).',
        },
      },
      {
        id: 'upv4-rounding',
        type: 'text' as const,
        content: `## Rounding to a Place

Rounding replaces a number with a nearby "friendly" number. To round to a given place:

1. **Underline** the digit in the rounding place.
2. **Look at the digit just to its right** (the "decider").
3. If the decider is **$5$ or more**, round **up** (add $1$ to the underlined digit).
   If it is **$4$ or less**, round **down** (keep the underlined digit).
4. Change every digit **to the right** to $0$.

### Example: round $3{,}472$ to the nearest hundred

The hundreds digit is $4$; the digit to its right (tens) is $7$.

$$7 \\ge 5 \\quad\\Rightarrow\\quad \\text{round up}: \\; 3{,}472 \\approx 3{,}500$$

### Example: round $3{,}472$ to the nearest thousand

The thousands digit is $3$; the digit to its right (hundreds) is $4$.

$$4 < 5 \\quad\\Rightarrow\\quad \\text{round down}: \\; 3{,}472 \\approx 3{,}000$$

> ⚠️ **Only the decider digit matters** — the one immediately to the right of the rounding place. Don't peek further right than that.`,
      },
      {
        id: 'upv4-round-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Round $2{,}648$ to the nearest hundred.',
              options: ['$2{,}600$', '$2{,}700$', '$2{,}650$', '$3{,}000$'],
              correctAnswer: 0,
              explanation: 'The hundreds digit is $6$; the decider (the tens digit) is $4$. Since $4 < 5$, round down — keep the $6$ and zero out the rest: $2{,}600$.',
            },
            {
              question: 'Round $5{,}815$ to the nearest thousand.',
              options: ['$5{,}000$', '$6{,}000$', '$5{,}800$', '$5{,}900$'],
              correctAnswer: 1,
              explanation: 'The thousands digit is $5$; the decider (the hundreds digit) is $8$. Since $8 \\ge 5$, round up: $5 \\to 6$, giving $6{,}000$.',
            },
          ],
        },
      },
      {
        id: 'upv4-order-text',
        type: 'text' as const,
        content: `## Ordering a List

To put several numbers **in order**, compare them two at a time using place value, just like before. To find the **largest**, scan for the biggest digit in the highest place where they differ.

### Example: order $4{,}109$, $4{,}901$, $4{,}190$ from least to greatest

All share $4$ in the thousands place, so compare **hundreds**: $1$, $9$, and $1$. The $9$ ($4{,}901$) is biggest. The other two tie at hundreds ($1$), so compare **tens**: $0$ vs $9$ — so $4{,}109 < 4{,}190$.

$$4{,}109 \\;<\\; 4{,}190 \\;<\\; 4{,}901$$

> 💡 Always start at the **highest** place (farthest left) and move right only when there's a tie.`,
      },
      {
        id: 'upv4-order-drill',
        type: 'input-boxes' as const,
        content: `**Order & Round** 🧮

**1)** Which is the **largest** of $4{,}109$, $4{,}901$, and $4{,}190$? $\\,?$
**2)** Round $7{,}350$ to the nearest hundred. $\\,?$
**3)** Round $7{,}350$ to the nearest thousand. $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4901', '7400', '7000'],
          hint1: 'All start with $4$ thousands. Compare hundreds: $4{,}901$ has a $9$, which beats $1$ and $1$. So $4{,}901$ is largest.',
          hint2: 'Nearest hundred: hundreds digit $3$, decider (tens) is $5$. $5 \\ge 5$ rounds up → $7{,}400$.',
          hint3: 'Nearest thousand: thousands digit $7$, decider (hundreds) is $3$. $3 < 5$ rounds down → $7{,}000$.',
          explanation: '1) $4{,}901$ is largest (hundreds digit $9$).  2) $7{,}350 \\approx 7{,}400$ (decider $5$ rounds up).  3) $7{,}350 \\approx 7{,}000$ (decider $3$ rounds down).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'understanding-place-value-grade4',
    sections: [
      {
        id: 'upv5-intro',
        type: 'text' as const,
        content: `# 🔢 Understanding Place Value

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name a digit's place and value, (2) write numbers in standard, expanded, and word form, (3) use the "ten times" rule, and (4) compare, order, and round. Let's put it all together.`,
      },
      {
        id: 'upv5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a digit's value | digit $\\times$ place value (e.g. $5$ in tens $= 5 \\times 10 = 50$) |
| Expanded form | add up each place's value: $4{,}205 = 4{,}000 + 200 + 5$ |
| Ten-times rule | one place **left** is $\\times 10$; one place **right** is $\\div 10$ |
| Compare numbers | compare digits **from the left**; first difference decides |
| Round to a place | look at the **decider** digit just to the right: $\\ge 5$ up, $< 5$ down |

> ⚠️ **Top reminders:** a $0$ still **holds a place** (so $4{,}205$ has a tens digit of $0$); when rounding, only the **single decider digit** matters; the symbols $>$ and $<$ open toward the **larger** number.`,
      },
      {
        id: 'upv5-warmup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Warm-Up** 🔽

A quick check across everything you've learned, using the number $\\textbf{8,406}$.`,
        exercise: {
          dropdowns: [
            { label: 'The digit $8$ has a value of:', options: ['$8{,}000$', '$800$', '$80$', '$8$'] },
            { label: 'Expanded form of $8{,}406$:', options: ['$8{,}000 + 400 + 6$', '$8{,}000 + 40 + 6$', '$800 + 40 + 6$', '$8{,}000 + 400 + 60$'] },
            { label: '$8{,}406$ rounded to the nearest hundred:', options: ['$8{,}400$', '$8{,}500$', '$8{,}000$', '$8{,}410$'] },
          ],
          correctAnswers: ['$8{,}000$', '$8{,}000 + 400 + 6$', '$8{,}400$'],
          hint1: 'The $8$ is in the thousands place: $8 \\times 1{,}000 = 8{,}000$.',
          hint2: '$8$ thousands, $4$ hundreds, $0$ tens, $6$ ones → $8{,}000 + 400 + 6$ (no tens term).',
          hint3: 'Nearest hundred: hundreds digit $4$, decider (tens) is $0$. $0 < 5$ rounds down → $8{,}400$.',
          explanation: 'For $8{,}406$: the $8$ is worth $8{,}000$; expanded form is $8{,}000 + 400 + 6$; and it rounds to $8{,}400$ (the tens digit $0$ rounds down).',
        },
      },
      {
        id: 'upv5-bridge',
        type: 'text' as const,
        content: `Nicely done. Now try a few mixed questions that pull from **every** part of the lesson.`,
      },
      {
        id: 'upv5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the value of the digit $3$ in $13{,}472$?',
              options: ['$3$', '$300$', '$3{,}000$', '$30{,}000$'],
              correctAnswer: 2,
              explanation: 'In $13{,}472$ the places from the right are: $2$ ones, $7$ tens, $4$ hundreds, $3$ thousands, $1$ ten-thousand. The $3$ is in the thousands place: $3 \\times 1{,}000 = 3{,}000$.',
            },
            {
              question: 'Which list is ordered from least to greatest?',
              options: [
                '$2{,}080,\\; 2{,}800,\\; 2{,}008$',
                '$2{,}008,\\; 2{,}080,\\; 2{,}800$',
                '$2{,}800,\\; 2{,}080,\\; 2{,}008$',
                '$2{,}080,\\; 2{,}008,\\; 2{,}800$',
              ],
              correctAnswer: 1,
              explanation: 'All begin with $2$ thousands, so compare hundreds: $2{,}008$ (hundreds $0$) $<$ $2{,}080$ (hundreds $0$, but tens $8 > 0$) $<$ $2{,}800$ (hundreds $8$). Least to greatest: $2{,}008,\\; 2{,}080,\\; 2{,}800$.',
            },
          ],
        },
      },
      {
        id: 'upv5-exit-intro',
        type: 'text' as const,
        content: `## One Last Check

You've reached the end. The **Exit Quiz** below has three questions that touch the biggest ideas of the lesson: **place value**, the **ten-times rule**, and **rounding**. Take your time and use what you've learned.`,
      },
      {
        id: 'upv5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the expanded form of $6{,}504$?',
              options: [
                '$6{,}000 + 500 + 4$',
                '$6{,}000 + 50 + 4$',
                '$600 + 50 + 4$',
                '$6{,}000 + 500 + 40$',
              ],
              correctAnswer: 0,
              explanation: '$6$ thousands, $5$ hundreds, $0$ tens, $4$ ones. The tens digit is $0$, so there is no tens term: $6{,}000 + 500 + 4$.',
            },
            {
              question: 'In $5{,}500$, the $5$ in the thousands place is worth how many times the $5$ in the hundreds place?',
              options: ['$10$ times', '$5$ times', '$100$ times', '$2$ times'],
              correctAnswer: 0,
              explanation: 'The left $5$ is worth $5{,}000$ and the right $5$ is worth $500$. $5{,}000 \\div 500 = 10$, so it is $10$ times as much — neighboring places are always $10\\times$ apart.',
            },
            {
              question: 'Round $4{,}962$ to the nearest hundred.',
              options: ['$5{,}000$', '$4{,}900$', '$4{,}960$', '$4{,}000$'],
              correctAnswer: 0,
              explanation: 'The hundreds digit is $9$; the decider (tens) is $6$. Since $6 \\ge 5$, round up. The $9$ becomes $10$, which carries: $4{,}9\\underline{\\;} \\to 5{,}000$.',
            },
          ],
        },
      },
    ],
  },
]
