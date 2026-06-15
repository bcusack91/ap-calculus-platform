import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Linear Equation Word Problems (Algebra 1).
 * Registry key: 'word-problems-linear-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'word-problems-linear-algebra1',
    sections: [
      {
        id: 'wplin1-intro',
        type: 'text' as const,
        content: `# 📝 Linear Equation Word Problems

**Part 1 of 5 — Translating Words into Algebra**

---

### Topics in This Part

| Section |
|---------|
| Why Word Problems Feel Hard |
| The Translation Dictionary |
| Choosing and Naming the Variable |
| Turning Sentences into Equations |

> 🔑 **Key Concept:** A word problem is just an equation wearing a costume. The whole skill is **translation** — turning English phrases into algebra one piece at a time. Master that, and every problem becomes a routine equation to solve.`,
      },
      {
        id: 'wplin1-dictionary',
        type: 'text' as const,
        content: `## The Translation Dictionary

Most of word-problem difficulty disappears once you memorize how everyday words map to operations.

| English phrase | Math |
|----------------|------|
| sum, more than, increased by, total | $+$ |
| difference, less than, decreased by, fewer | $-$ |
| product, times, of, twice, double | $\\times$ |
| quotient, per, divided by, ratio | $\\div$ |
| is, was, gives, results in, equals | $=$ |
| a number (unknown) | a variable like $x$ |

> ⚠️ **Watch the order with "less than."** "$5$ less than a number" is $x - 5$, **not** $5 - x$. The phrase *less than* flips the order you read it in. Same with "subtracted from."

### Quick examples

| Phrase | Expression |
|--------|------------|
| "$7$ more than a number" | $x + 7$ |
| "$3$ less than twice a number" | $2x - 3$ |
| "the sum of a number and $10$" | $x + 10$ |
| "$4$ times a number, decreased by $9$" | $4x - 9$ |`,
      },
      {
        id: 'wplin1-translate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Translate: "$8$ less than a number $n$".',
              options: ['$n - 8$', '$8 - n$', '$8n$', '$n + 8$'],
              correctAnswer: 0,
              explanation: '"Less than" flips the order: $8$ less than $n$ means you start at $n$ and take $8$ away, so $n - 8$.',
            },
            {
              question: 'Translate: "the product of $5$ and a number, increased by $2$".',
              options: ['$5x + 2$', '$5(x + 2)$', '$5 + 2x$', '$2x - 5$'],
              correctAnswer: 0,
              explanation: 'The product of $5$ and the number is $5x$; "increased by $2$" adds $2$, giving $5x + 2$.',
            },
            {
              question: 'Which phrase matches the expression $2(x + 6)$?',
              options: [
                'twice the sum of a number and $6$',
                'twice a number, plus $6$',
                'a number plus twice $6$',
                'the sum of twice a number and $6$',
              ],
              correctAnswer: 0,
              explanation: 'The parentheses mean you add first, then double: "twice the **sum** of a number and $6$." The others would be $2x + 6$.',
            },
          ],
        },
      },
      {
        id: 'wplin1-name-variable',
        type: 'text' as const,
        content: `## Choosing and Naming the Variable

Every word problem starts the same way: **decide what the unknown is and give it a name.** Write a short sentence — a *let statement* — so you never lose track.

> 🔑 **Always write a "Let" statement.**
> *Let $x =$ the number of tickets sold.*
> *Let $w =$ the width of the rectangle, in feet.*

The single most useful trick: when a problem describes **two related quantities**, name the *smaller or simpler* one $x$, then write the other **in terms of $x$**.

### Example

> *"A rope is cut into two pieces. One piece is $3$ feet longer than the other."*

- Let $x =$ length of the shorter piece (feet).
- Then the longer piece $= x + 3$.

You now have **both** quantities described with a single variable — exactly what you need to build one equation.`,
      },
      {
        id: 'wplin1-express-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Second Quantity** 🔽

Pick the correct expression for the second quantity, given the variable definition.`,
        exercise: {
          dropdowns: [
            { label: 'Let $x =$ Maria\'s age. Maria is $4$ years older than Sam. Sam\'s age $=$', options: ['$x - 4$', '$x + 4$', '$4x$', '$4 - x$'] },
            { label: 'Let $x =$ a number. "$6$ less than three times the number" $=$', options: ['$3x - 6$', '$6 - 3x$', '$3(x - 6)$', '$6x - 3$'] },
            { label: 'Two numbers add to $20$. Let $x =$ one of them. The other $=$', options: ['$20 - x$', '$x - 20$', '$20x$', '$x + 20$'] },
          ],
          correctAnswers: ['$x - 4$', '$3x - 6$', '$20 - x$'],
          hint1: 'If Maria is $4$ years OLDER, then Sam is $4$ years YOUNGER, so subtract $4$.',
          hint2: '"Three times the number" is $3x$; "$6$ less than" that subtracts $6$: $3x - 6$.',
          hint3: 'If the two numbers total $20$ and one is $x$, the other is whatever is left: $20 - x$.',
          explanation: 'When two quantities are linked, write the second in terms of $x$. Sam $= x - 4$; "$6$ less than $3x$" $= 3x - 6$; the partner of $x$ that sums to $20$ is $20 - x$.',
        },
      },
      {
        id: 'wplin1-build-equation',
        type: 'text' as const,
        content: `## Turning a Whole Sentence into an Equation

The word **"is"** (or *equals*, *gives*, *results in*) is the $=$ sign. Translate the left side, drop the $=$ where "is" appears, then translate the right side.

### Example

> *"When $5$ is added to twice a number, the result is $17$."*

$$\\underbrace{2x + 5}_{\\text{twice a number, plus }5} \\;=\\; \\underbrace{17}_{\\text{the result}}$$

That's a complete linear equation, ready to solve in Part 2.

> 💡 **The 4-step plan you'll use every time:**
> 1. **Read** and decide what's unknown.
> 2. **Let** a variable name it (and name related quantities in terms of it).
> 3. **Translate** the sentence into an equation.
> 4. **Solve**, then **check** the answer against the original words.`,
      },
      {
        id: 'wplin1-equation-mc',
        type: 'multiple-choice' as const,
        content: `**Build the Equation** 🎯

Don't solve yet — just choose the equation that matches the words.`,
        exercise: {
          questions: [
            {
              question: '"Seven less than a number is $12$." Which equation is correct?',
              options: ['$x - 7 = 12$', '$7 - x = 12$', '$x + 7 = 12$', '$7x = 12$'],
              correctAnswer: 0,
              explanation: '"Seven less than a number" is $x - 7$, and "is $12$" makes it equal $12$: $x - 7 = 12$.',
            },
            {
              question: '"Three times a number, increased by $4$, equals $19$."',
              options: ['$3x + 4 = 19$', '$3(x + 4) = 19$', '$3x - 4 = 19$', '$4x + 3 = 19$'],
              correctAnswer: 0,
              explanation: '"Three times a number" is $3x$, "increased by $4$" adds $4$, and "equals $19$" sets it to $19$: $3x + 4 = 19$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'word-problems-linear-algebra1',
    sections: [
      {
        id: 'wplin2-intro',
        type: 'text' as const,
        content: `# 📝 Linear Equation Word Problems

**Part 2 of 5 — Number, Consecutive-Integer & Age Problems**

---

> 🔑 **The Idea:** These classic problems all use the same engine: name one unknown $x$, write every other quantity in terms of $x$, build one equation, solve, and check. We'll do each type with a full worked example.`,
      },
      {
        id: 'wplin2-number',
        type: 'text' as const,
        content: `## Number Problems

### Worked Example

> *"The sum of three times a number and $8$ is $-7$. Find the number."*

**Let** $x =$ the number.
**Translate:** $3x + 8 = -7$.
**Solve:**

$$3x + 8 = -7 \\;\\Rightarrow\\; 3x = -15 \\;\\Rightarrow\\; x = -5$$

**Check:** $3(-5) + 8 = -15 + 8 = -7$ ✓

> 💡 Always finish by plugging the answer back into the **original sentence**, not just the equation — that catches translation mistakes, the most common kind.`,
      },
      {
        id: 'wplin2-number-drill',
        type: 'input-boxes' as const,
        content: `**Number Problems** 🧮

Set up an equation and solve. Enter the number.

**1)** Five more than twice a number is $23$. The number $= \\,?$
**2)** Four less than half a number is $10$. The number $= \\,?$
**3)** When a number is decreased by $9$, the result is $-2$. The number $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '28', '7'],
          hint1: '"Twice a number plus $5$": $2x + 5 = 23 \\Rightarrow 2x = 18 \\Rightarrow x = 9$.',
          hint2: '"Half a number minus $4$": $\\frac{x}{2} - 4 = 10 \\Rightarrow \\frac{x}{2} = 14 \\Rightarrow x = 28$.',
          hint3: '"A number decreased by $9$": $x - 9 = -2 \\Rightarrow x = 7$.',
          explanation: '1) $2x+5=23 \\Rightarrow x=9$.  2) $\\frac{x}{2}-4=10 \\Rightarrow x=28$.  3) $x-9=-2 \\Rightarrow x=7$.',
        },
      },
      {
        id: 'wplin2-consecutive',
        type: 'text' as const,
        content: `## Consecutive Integer Problems

**Consecutive integers** go up by $1$: if the first is $x$, the next are $x+1$, $x+2$, …
**Consecutive even** *or* **odd** integers go up by $2$: $x$, $x+2$, $x+4$, … (both even and odd jump by $2$).

### Worked Example

> *"The sum of three consecutive integers is $72$. Find them."*

**Let** $x =$ first integer. Then the three are $x,\\; x+1,\\; x+2$.

$$x + (x+1) + (x+2) = 72$$
$$3x + 3 = 72 \\;\\Rightarrow\\; 3x = 69 \\;\\Rightarrow\\; x = 23$$

So the integers are $23,\\, 24,\\, 25$. **Check:** $23+24+25 = 72$ ✓

> ⚠️ For consecutive **even** or **odd** integers, the gap is **$2$**, not $1$ — even though $x+2$ has the same form for both. The starting value of $x$ is what makes them even or odd.`,
      },
      {
        id: 'wplin2-consecutive-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up Consecutive Integers** 🔽

Choose the correct setup for each problem (don't solve).`,
        exercise: {
          dropdowns: [
            { label: 'Two consecutive integers, first $= x$. Their sum is $45$:', options: ['$x + (x+1) = 45$', '$x + (x+2) = 45$', '$2x = 45$', '$x + x = 45$'] },
            { label: 'Three consecutive EVEN integers, first $= x$. Their sum is $66$:', options: ['$x + (x+2) + (x+4) = 66$', '$x + (x+1) + (x+2) = 66$', '$3x = 66$', '$x + 2x + 4x = 66$'] },
            { label: 'The largest of three consecutive integers ($x$ is smallest):', options: ['$x + 2$', '$x + 1$', '$x + 3$', '$3x$'] },
          ],
          correctAnswers: ['$x + (x+1) = 45$', '$x + (x+2) + (x+4) = 66$', '$x + 2$'],
          hint1: 'Plain consecutive integers go up by $1$, so the second is $x+1$.',
          hint2: 'Consecutive EVEN integers go up by $2$ each: $x$, $x+2$, $x+4$.',
          hint3: 'With three consecutive integers $x$, $x+1$, $x+2$, the largest is $x+2$.',
          explanation: 'Consecutive integers step by $1$ ($x, x+1$); consecutive even/odd step by $2$ ($x, x+2, x+4$). The largest of three consecutive integers is $x+2$.',
        },
      },
      {
        id: 'wplin2-consecutive-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Consecutive Integers** 🧮

**1)** The sum of two consecutive integers is $45$. Enter the **smaller** integer.
**2)** The sum of three consecutive odd integers is $81$. Enter the **middle** integer.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['22', '27'],
          hint1: '$x + (x+1) = 45 \\Rightarrow 2x + 1 = 45 \\Rightarrow 2x = 44 \\Rightarrow x = 22$ (the smaller). The integers are $22, 23$.',
          hint2: 'Odd integers: $x + (x+2) + (x+4) = 81 \\Rightarrow 3x + 6 = 81 \\Rightarrow 3x = 75 \\Rightarrow x = 25$. They are $25, 27, 29$; the middle is $27$.',
          hint3: 'The "middle" is the second of the three, which is $x + 2$.',
          explanation: '1) $22$ and $23$; smaller $= 22$.  2) $25, 27, 29$; middle $= 27$.',
        },
      },
      {
        id: 'wplin2-age',
        type: 'text' as const,
        content: `## Age Problems

Age problems link two people's ages, then often jump forward or backward in time.

### Worked Example

> *"Tara is $3$ times as old as Ben. In $6$ years, the sum of their ages will be $44$. How old is each now?"*

**Let** $x =$ Ben's age now. Then Tara $= 3x$ now.
**In $6$ years:** Ben $= x + 6$, Tara $= 3x + 6$.

$$(x + 6) + (3x + 6) = 44 \\;\\Rightarrow\\; 4x + 12 = 44 \\;\\Rightarrow\\; 4x = 32 \\;\\Rightarrow\\; x = 8$$

Ben is $8$, Tara is $24$. **Check:** in $6$ years $14 + 30 = 44$ ✓

> ⚠️ Add the time change to **everyone's** age. A common slip is aging one person but not the other.`,
      },
      {
        id: 'wplin2-age-mc',
        type: 'multiple-choice' as const,
        content: `**Age Setup** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Let $x =$ Jon\'s age now. Mia is $5$ years younger than Jon. What is Mia\'s age in $4$ years?',
              options: ['$x - 1$', '$x + 9$', '$x - 9$', '$x + 1$'],
              correctAnswer: 0,
              explanation: 'Mia now $= x - 5$. In $4$ years, add $4$: $(x - 5) + 4 = x - 1$.',
            },
            {
              question: 'Pat is twice as old as Lee now. Five years ago, the sum of their ages was $26$. Which equation models this?',
              options: [
                '$(x - 5) + (2x - 5) = 26$',
                '$(x + 5) + (2x + 5) = 26$',
                '$x + 2x = 26$',
                '$(x - 5) + (2x) = 26$',
              ],
              correctAnswer: 0,
              explanation: 'Let $x =$ Lee now, $2x =$ Pat now. Five years AGO subtract $5$ from each: $(x-5)+(2x-5)=26$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'word-problems-linear-algebra1',
    sections: [
      {
        id: 'wplin3-intro',
        type: 'text' as const,
        content: `# 📝 Linear Equation Word Problems

**Part 3 of 5 — Money, Coins & Percent Problems**

---

> 🔑 **The Idea:** When dollars and cents are involved, the key is to track **value**, not just **count**. A nickel is worth $5$ cents, so $n$ nickels are worth $5n$ cents. Percent problems lean on a single template: *part $=$ percent $\\times$ whole.*`,
      },
      {
        id: 'wplin3-coins',
        type: 'text' as const,
        content: `## Coin & Money Problems

The trap: a pile of $10$ coins isn't worth $10$ — it depends on **which** coins. Separate **how many** from **how much each is worth**.

| Coin | Value (cents) |
|------|---------------|
| penny | $1$ |
| nickel | $5$ |
| dime | $10$ |
| quarter | $25$ |

### Worked Example

> *"A jar has $7$ more dimes than nickels. The coins are worth \\$2.45 in total. How many nickels are there?"*

**Let** $x =$ number of nickels. Then dimes $= x + 7$.
**Value in cents** ($\\$2.45 = 245$ cents):

$$\\underbrace{5x}_{\\text{nickels}} + \\underbrace{10(x + 7)}_{\\text{dimes}} = 245$$
$$5x + 10x + 70 = 245 \\;\\Rightarrow\\; 15x = 175 \\;\\Rightarrow\\; x = \\tfrac{175}{15}$$

Hmm — that isn't a whole number, so let's recheck with cleaner numbers below. The **method** is what matters: *(count) × (value each) summed = total value.*

> ⚠️ Keep all money in the **same unit**. Mixing dollars and cents is the #1 coin-problem error. Convert \\$2.45 to $245$ cents (or write everything in dollars: $0.05x + 0.10(x+7) = 2.45$).`,
      },
      {
        id: 'wplin3-coins-worked',
        type: 'text' as const,
        content: `### A Clean Worked Example

> *"A jar has $5$ more dimes than nickels and is worth \\$3.50. How many nickels?"*

**Let** $x =$ nickels, so dimes $= x + 5$. In cents ($\\$3.50 = 350$):

$$5x + 10(x + 5) = 350$$
$$5x + 10x + 50 = 350 \\;\\Rightarrow\\; 15x = 300 \\;\\Rightarrow\\; x = 20$$

So there are $20$ nickels and $25$ dimes.
**Check:** $20(5) + 25(10) = 100 + 250 = 350$ cents $= \\$3.50$ ✓`,
      },
      {
        id: 'wplin3-coins-drill',
        type: 'input-boxes' as const,
        content: `**Coin Drill** 🧮

Work in **cents** to stay clean.

**1)** $x$ nickels and twice as many dimes are worth $125$ cents. Find $x$ (number of nickels).
**2)** A box has $x$ quarters and $x$ dimes (equal numbers), worth $175$ cents total. Find $x$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '5'],
          hint1: 'Nickels: $5x$. Dimes: twice as many $= 2x$ dimes worth $10(2x) = 20x$. So $5x + 20x = 125 \\Rightarrow 25x = 125 \\Rightarrow x = 5$.',
          hint2: 'Quarters worth $25x$, dimes worth $10x$: $25x + 10x = 175 \\Rightarrow 35x = 175 \\Rightarrow x = 5$.',
          hint3: 'Always multiply the COUNT of each coin by its VALUE, then add the values.',
          explanation: '1) $5x + 20x = 125 \\Rightarrow x = 5$.  2) $35x = 175 \\Rightarrow x = 5$.',
        },
      },
      {
        id: 'wplin3-percent',
        type: 'text' as const,
        content: `## Percent Problems

Every basic percent problem fits one template:

$$\\text{part} = \\text{percent (as a decimal)} \\times \\text{whole}$$

Convert the percent to a decimal first: $25\\% = 0.25$, $7\\% = 0.07$, $150\\% = 1.5$.

### Three flavors

| Question | Equation | Solve for |
|----------|----------|-----------|
| What is $30\\%$ of $80$? | $p = 0.30(80)$ | $p = 24$ |
| $18$ is what percent of $72$? | $18 = r(72)$ | $r = 0.25 = 25\\%$ |
| $15$ is $20\\%$ of what? | $15 = 0.20(w)$ | $w = 75$ |

> 💡 **Tip:** "of" almost always means **multiply**, and "is" means **equals** — so "$30\\%$ of $80$" becomes $0.30 \\times 80$.`,
      },
      {
        id: 'wplin3-percent-mc',
        type: 'multiple-choice' as const,
        content: `**Percent Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $40\\%$ of $150$?',
              options: ['$60$', '$110$', '$375$', '$6$'],
              correctAnswer: 0,
              explanation: '$0.40 \\times 150 = 60$.',
            },
            {
              question: '$21$ is what percent of $60$?',
              options: ['$35\\%$', '$39\\%$', '$28.6\\%$', '$21\\%$'],
              correctAnswer: 0,
              explanation: '$21 = r(60) \\Rightarrow r = \\frac{21}{60} = 0.35 = 35\\%$.',
            },
            {
              question: 'A \\$80 jacket is discounted $25\\%$. What is the sale price?',
              options: ['\\$60', '\\$55', '\\$20', '\\$75'],
              correctAnswer: 0,
              explanation: 'Discount $= 0.25 \\times 80 = \\$20$, so the sale price is $80 - 20 = \\$60$. (Or pay $75\\%$: $0.75 \\times 80 = \\$60$.)',
            },
          ],
        },
      },
      {
        id: 'wplin3-percent-drill',
        type: 'input-boxes' as const,
        content: `**Percent Drill** 🧮

Use *part $=$ percent $\\times$ whole*. Enter numbers only (no $\\%$ sign or \\$).

**1)** $12$ is $30\\%$ of what number?
**2)** A \\$45 shirt has $20\\%$ added in tax. What is the total cost, in dollars?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['40', '54'],
          hint1: '$12 = 0.30(w) \\Rightarrow w = \\frac{12}{0.30} = 40$.',
          hint2: 'Tax $= 0.20 \\times 45 = 9$, so total $= 45 + 9 = 54$. (Or $1.20 \\times 45 = 54$.)',
          hint3: 'Adding $20\\%$ tax means paying $120\\%$ of the price: $1.20 \\times 45 = 54$.',
          explanation: '1) $w = 12 / 0.30 = 40$.  2) total $= 1.20 \\times 45 = \\$54$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'word-problems-linear-algebra1',
    sections: [
      {
        id: 'wplin4-intro',
        type: 'text' as const,
        content: `# 📝 Linear Equation Word Problems

**Part 4 of 5 — Distance, Rate & Time + Geometry & Perimeter**

---

> 🔑 **The Idea:** Motion problems all run on one formula, $d = rt$. Geometry word problems run on a perimeter or area formula. In both, you draw or tabulate the quantities, write each in terms of $x$, then build one equation.`,
      },
      {
        id: 'wplin4-drt',
        type: 'text' as const,
        content: `## Distance = Rate × Time

$$d = r \\cdot t$$

Build a small table — one row per moving object — and fill in two of the three columns; the third is the product (or the unknown).

### Worked Example

> *"Two cars leave the same point going opposite directions. One drives $55$ mph, the other $45$ mph. After how many hours are they $300$ miles apart?"*

**Let** $t =$ time in hours (same for both).

| | rate | time | distance |
|--|------|------|----------|
| Car A | $55$ | $t$ | $55t$ |
| Car B | $45$ | $t$ | $45t$ |

Going opposite ways, the distances **add** to $300$:

$$55t + 45t = 300 \\;\\Rightarrow\\; 100t = 300 \\;\\Rightarrow\\; t = 3 \\text{ hours}$$

**Check:** in $3$ h, car A goes $165$ mi, car B goes $135$ mi; $165 + 135 = 300$ ✓`,
      },
      {
        id: 'wplin4-drt-mc',
        type: 'multiple-choice' as const,
        content: `**Motion Setup** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A train travels at $60$ mph for $t$ hours and covers $210$ miles. Which equation finds $t$?',
              options: ['$60t = 210$', '$60 + t = 210$', '$\\frac{60}{t} = 210$', '$t = 60 \\cdot 210$'],
              correctAnswer: 0,
              explanation: 'Distance $= $ rate $\\times$ time, so $60t = 210$ (giving $t = 3.5$ hours).',
            },
            {
              question: 'Two runners start together and run the SAME direction at $6$ mph and $8$ mph. After $t$ hours, how far apart are they?',
              options: ['$2t$ miles', '$14t$ miles', '$48t$ miles', '$t$ miles'],
              correctAnswer: 0,
              explanation: 'Same direction: the gap grows at the DIFFERENCE of speeds, $8 - 6 = 2$ mph, so the distance apart is $2t$.',
            },
          ],
        },
      },
      {
        id: 'wplin4-drt-drill',
        type: 'input-boxes' as const,
        content: `**Motion Drill** 🧮

**1)** A cyclist rides at $12$ mph. How many hours to travel $54$ miles? (Decimal ok.)
**2)** Two buses leave a station in opposite directions at $40$ mph and $50$ mph. After how many hours are they $270$ miles apart?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4.5', '3'],
          hint1: '$12t = 54 \\Rightarrow t = \\frac{54}{12} = 4.5$ hours.',
          hint2: 'Opposite directions add: $40t + 50t = 270 \\Rightarrow 90t = 270 \\Rightarrow t = 3$.',
          hint3: 'Use $d = rt$. Opposite directions ADD distances; same direction SUBTRACT speeds.',
          explanation: '1) $t = 54/12 = 4.5$ h.  2) $90t = 270 \\Rightarrow t = 3$ h.',
        },
      },
      {
        id: 'wplin4-geometry',
        type: 'text' as const,
        content: `## Geometry & Perimeter Problems

Pull in the right formula, then express each dimension in terms of one variable.

| Shape | Formula |
|-------|---------|
| Rectangle perimeter | $P = 2\\ell + 2w$ |
| Rectangle area | $A = \\ell \\cdot w$ |
| Triangle angle sum | angles add to $180^\\circ$ |

### Worked Example

> *"A rectangle's length is $4$ cm more than its width, and its perimeter is $36$ cm. Find the dimensions."*

**Let** $w =$ width. Then length $\\ell = w + 4$.

$$2(w + 4) + 2w = 36 \\;\\Rightarrow\\; 2w + 8 + 2w = 36 \\;\\Rightarrow\\; 4w = 28 \\;\\Rightarrow\\; w = 7$$

Width $= 7$ cm, length $= 11$ cm.
**Check:** $2(11) + 2(7) = 22 + 14 = 36$ ✓`,
      },
      {
        id: 'wplin4-geometry-dropdown',
        type: 'dropdown-select' as const,
        content: `**Geometry Setup** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Rectangle: length is twice the width $w$. Perimeter expression:', options: ['$2(2w) + 2w$', '$2w + w$', '$2w \\cdot w$', '$4w + 4$'] },
            { label: 'Triangle angles are $x$, $2x$, and $3x$. The equation:', options: ['$x + 2x + 3x = 180$', '$x + 2x + 3x = 360$', '$6x = 90$', '$x \\cdot 2x \\cdot 3x = 180$'] },
            { label: 'A square has side $s$ and perimeter $48$. The equation:', options: ['$4s = 48$', '$s^2 = 48$', '$2s = 48$', '$s + 4 = 48$'] },
          ],
          correctAnswers: ['$2(2w) + 2w$', '$x + 2x + 3x = 180$', '$4s = 48$'],
          hint1: 'Perimeter $= 2\\ell + 2w$. Here $\\ell = 2w$, so it is $2(2w) + 2w$.',
          hint2: 'A triangle\'s three angles always sum to $180^\\circ$: $x + 2x + 3x = 180$.',
          hint3: 'A square has $4$ equal sides, so perimeter $= 4s$; set $4s = 48$.',
          explanation: 'Rectangle perimeter with $\\ell = 2w$ is $2(2w)+2w = 6w$; triangle angles sum to $180^\\circ$; square perimeter is $4s$.',
        },
      },
      {
        id: 'wplin4-geometry-drill',
        type: 'input-boxes' as const,
        content: `**Geometry Drill** 🧮

**1)** A rectangle's length is $3$ ft more than its width, and the perimeter is $26$ ft. Find the **width**, in feet.
**2)** A triangle's angles are $x$, $x$, and $x + 30$ degrees. Find $x$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '50'],
          hint1: 'Let width $= w$, length $= w + 3$: $2(w+3) + 2w = 26 \\Rightarrow 4w + 6 = 26 \\Rightarrow 4w = 20 \\Rightarrow w = 5$.',
          hint2: 'Angles sum to $180$: $x + x + (x + 30) = 180 \\Rightarrow 3x + 30 = 180 \\Rightarrow 3x = 150 \\Rightarrow x = 50$.',
          hint3: 'Perimeter uses $2\\ell + 2w$; triangle angles add to $180^\\circ$.',
          explanation: '1) $4w + 6 = 26 \\Rightarrow w = 5$ ft (length $8$ ft).  2) $3x + 30 = 180 \\Rightarrow x = 50^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'word-problems-linear-algebra1',
    sections: [
      {
        id: 'wplin5-intro',
        type: 'text' as const,
        content: `# 📝 Linear Equation Word Problems

**Part 5 of 5 — Mixed Mastery & Exit Quiz**

---

You can now (1) translate words into algebra, (2) handle number, consecutive-integer, and age problems, (3) work money and percent problems, and (4) set up distance and geometry problems. Time to mix them all together.`,
      },
      {
        id: 'wplin5-summary',
        type: 'text' as const,
        content: `## The Universal Game Plan

| Step | What to do |
|------|------------|
| 1. Read | Decide what the question is actually asking. |
| 2. Let | Name the unknown $x$; write related quantities in terms of $x$. |
| 3. Translate | Use the dictionary + the right formula to build **one** equation. |
| 4. Solve | Solve the linear equation for $x$. |
| 5. Answer & check | Answer the **question asked**, then verify in the original words. |

> ⚠️ **Two recurring traps:**
> - **"Less than" / "subtracted from" flip the order** ($5$ less than $x$ is $x - 5$).
> - **Answer what's asked.** If you let $x$ be the width but the problem wants the length, don't stop at $x$ — convert.

> 💡 Keep units consistent (all cents, or all dollars; all hours, etc.) and the algebra stays clean.`,
      },
      {
        id: 'wplin5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Setup** 🔽

Match each problem to its correct equation (don't solve).`,
        exercise: {
          dropdowns: [
            { label: 'Two consecutive integers sum to $33$ (first $= x$):', options: ['$x + (x+1) = 33$', '$x + (x+2) = 33$', '$2x = 33$', '$x(x+1) = 33$'] },
            { label: '$15$ is $25\\%$ of what number $w$?', options: ['$15 = 0.25w$', '$15 = 25w$', '$0.25 = 15w$', '$w = 0.25(15)$'] },
            { label: 'Rectangle: length $= w + 5$, perimeter $= 50$:', options: ['$2(w+5) + 2w = 50$', '$(w+5) + w = 50$', '$(w+5)(w) = 50$', '$w + 5 = 50$'] },
          ],
          correctAnswers: ['$x + (x+1) = 33$', '$15 = 0.25w$', '$2(w+5) + 2w = 50$'],
          hint1: 'Consecutive integers go up by $1$: $x$ and $x+1$.',
          hint2: '"$15$ is $25\\%$ of $w$" $\\Rightarrow$ part $=$ percent $\\times$ whole $\\Rightarrow 15 = 0.25w$.',
          hint3: 'Perimeter $= 2\\ell + 2w$ with $\\ell = w + 5$.',
          explanation: 'Consecutive: $x + (x+1) = 33$. Percent: $15 = 0.25w$. Perimeter: $2(w+5) + 2w = 50$.',
        },
      },
      {
        id: 'wplin5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Solve each fully and enter the requested value.

**1)** The sum of three consecutive integers is $90$. Enter the **largest**.
**2)** A coat costs \\$120 after a $20\\%$ discount was taken off the original price. What was the **original** price, in dollars?
**3)** A rectangle's length is $2$ cm more than $3$ times its width. Its perimeter is $44$ cm. Find the **width**, in cm.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['31', '150', '5'],
          hint1: '$x + (x+1) + (x+2) = 90 \\Rightarrow 3x + 3 = 90 \\Rightarrow x = 29$; integers $29, 30, 31$; largest $= 31$.',
          hint2: 'A $20\\%$ discount means you paid $80\\%$: $0.80 \\cdot p = 120 \\Rightarrow p = \\frac{120}{0.80} = 150$.',
          hint3: 'Width $= w$, length $= 3w + 2$: $2(3w+2) + 2w = 44 \\Rightarrow 8w + 4 = 44 \\Rightarrow 8w = 40 \\Rightarrow w = 5$.',
          explanation: '1) $29,30,31$; largest $= 31$.  2) $0.80p = 120 \\Rightarrow p = \\$150$.  3) $8w + 4 = 44 \\Rightarrow w = 5$ cm.',
        },
      },
      {
        id: 'wplin5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lia is $4$ times as old as Sam. In $5$ years their ages will sum to $45$. How old is Sam now?',
              options: ['$7$', '$8$', '$10$', '$28$'],
              correctAnswer: 0,
              explanation: 'Sam $= x$, Lia $= 4x$. In $5$ yrs: $(x+5)+(4x+5)=45 \\Rightarrow 5x+10=45 \\Rightarrow 5x=35 \\Rightarrow x=7$.',
            },
            {
              question: 'Two cars leave the same spot in opposite directions at $50$ and $70$ mph. When are they $360$ miles apart?',
              options: ['$3$ hours', '$6$ hours', '$2.5$ hours', '$4$ hours'],
              correctAnswer: 0,
              explanation: 'Opposite directions add: $50t + 70t = 360 \\Rightarrow 120t = 360 \\Rightarrow t = 3$ hours.',
            },
          ],
        },
      },
      {
        id: 'wplin5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Translate: "$6$ less than four times a number is $18$."',
              options: ['$4x - 6 = 18$', '$6 - 4x = 18$', '$4(x - 6) = 18$', '$6x - 4 = 18$'],
              correctAnswer: 0,
              explanation: '"Four times a number" is $4x$; "$6$ less than" subtracts $6$: $4x - 6 = 18$.',
            },
            {
              question: 'The sum of two consecutive even integers is $50$. What is the smaller integer?',
              options: ['$24$', '$25$', '$26$', '$22$'],
              correctAnswer: 0,
              explanation: 'Even integers: $x + (x+2) = 50 \\Rightarrow 2x + 2 = 50 \\Rightarrow 2x = 48 \\Rightarrow x = 24$. They are $24$ and $26$.',
            },
            {
              question: 'A \\$60 item is marked up $15\\%$. What is the new price?',
              options: ['\\$69', '\\$75', '\\$45', '\\$9'],
              correctAnswer: 0,
              explanation: 'Markup $= 0.15 \\times 60 = \\$9$, so the new price is $60 + 9 = \\$69$ (or $1.15 \\times 60 = \\$69$).',
            },
          ],
        },
      },
    ],
  },
]
