import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Dividing Decimals (Grade 5 Math).
 * Registry key: 'dividing-decimals-grade5' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'dividing-decimals-grade5',
    sections: [
      {
        id: 'dd1-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Decimals

**Part 1 of 5 — What Division With Decimals Means**

---

### Topics in This Part

| Section |
|---------|
| What "dividing" really asks |
| Place value and the decimal point |
| Estimating before you divide |

> 🔑 **Key Concept:** Dividing decimals works exactly like dividing whole numbers. The only new job is keeping the **decimal point** in the right place. Master that, and you've mastered the whole topic.`,
      },
      {
        id: 'dd1-meaning',
        type: 'text' as const,
        content: `## What Does Dividing Mean?

Division answers the question **"how many equal groups?"** or **"how big is each share?"**

When you see $8.4 \\div 4$, you can read it two ways:
- **Sharing:** Split $8.4$ into $4$ equal parts. How big is each part?
- **Grouping:** How many groups of $4$ fit into $8.4$?

The parts of a division problem have names:

| Term | Meaning | In $8.4 \\div 4 = 2.1$ |
|------|---------|------------------------|
| **Dividend** | the number being divided | $8.4$ |
| **Divisor** | the number you divide by | $4$ |
| **Quotient** | the answer | $2.1$ |

> 💡 **Tip:** $8.4 \\div 4$ and $\\dfrac{8.4}{4}$ mean the exact same thing — a fraction bar *is* a division sign.`,
      },
      {
        id: 'dd1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the problem $12.6 \\div 3$, which number is the **divisor**?',
              options: ['$12.6$', '$3$', '$4.2$', '$15.6$'],
              correctAnswer: 1,
              explanation: 'The divisor is the number you divide *by*. You are dividing by $3$, so $3$ is the divisor. ($12.6$ is the dividend and $4.2$ is the quotient.)',
            },
            {
              question: 'Which expression means the **same thing** as $9.6 \\div 8$?',
              options: ['$\\dfrac{8}{9.6}$', '$9.6 \\times 8$', '$\\dfrac{9.6}{8}$', '$8 - 9.6$'],
              correctAnswer: 2,
              explanation: 'A fraction bar means "divide the top by the bottom." So $9.6 \\div 8 = \\dfrac{9.6}{8}$. Order matters: the dividend goes on top.',
            },
          ],
        },
      },
      {
        id: 'dd1-place-value',
        type: 'text' as const,
        content: `## Place Value: Why the Decimal Point Matters

Each spot in a decimal number has a value **ten times smaller** than the spot to its left:

| Tens | Ones | • | Tenths | Hundredths | Thousandths |
|:----:|:----:|:-:|:------:|:----------:|:-----------:|
| $10$ | $1$ | • | $\\frac{1}{10}$ | $\\frac{1}{100}$ | $\\frac{1}{1000}$ |

The number $3.25$ means $3$ ones $+$ $2$ tenths $+$ $5$ hundredths.

> ⚠️ **Watch out:** $0.6$, $0.06$, and $6.0$ all use the digit $6$, but they are **very different** numbers. The decimal point tells you which place that $6$ lives in. Getting the point in the wrong spot can make an answer $10$ or $100$ times too big!`,
      },
      {
        id: 'dd1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Place** 🔽

For each number, choose the place value of the digit **$7$**.`,
        exercise: {
          dropdowns: [
            { label: 'In $4.7$, the $7$ is in the:', options: ['tenths place', 'ones place', 'hundredths place', 'tens place'] },
            { label: 'In $0.07$, the $7$ is in the:', options: ['hundredths place', 'tenths place', 'thousandths place', 'ones place'] },
            { label: 'Which is the largest number?', options: ['$0.7$', '$0.07$', '$0.007$', 'they are equal'] },
          ],
          correctAnswers: ['tenths place', 'hundredths place', '$0.7$'],
          hint1: 'The first spot right of the point is tenths; the second is hundredths; the third is thousandths.',
          hint2: 'In $0.07$ the $7$ is two spots right of the point, so it is in the hundredths place.',
          hint3: '$0.7 = 7$ tenths, $0.07 = 7$ hundredths, $0.007 = 7$ thousandths. Tenths are the biggest, so $0.7$ is largest.',
          explanation: 'The further right of the decimal point a digit sits, the smaller its value: tenths $>$ hundredths $>$ thousandths.',
        },
      },
      {
        id: 'dd1-estimate',
        type: 'text' as const,
        content: `## Estimate First — Then You Can Check Yourself

Before dividing, make a quick estimate by rounding to friendly whole numbers. Your real answer should land **near** the estimate.

### Example: Estimate $18.6 \\div 3$

Round $18.6$ to $18$. Since $18 \\div 3 = 6$, the answer should be **about $6$**.

(The exact answer is $6.2$ — nice and close, so you know you're on the right track.)

### Example: Estimate $41.7 \\div 6$

Round $41.7$ to $42$ (because $42 \\div 6 = 7$ is easy). The answer should be **about $7$**.

> 💡 Estimating is your safety net. If you ever calculate $18.6 \\div 3 = 62$, your estimate of "about $6$" instantly warns you the decimal point slipped.`,
      },
      {
        id: 'dd1-estimate-drill',
        type: 'multiple-choice' as const,
        content: `**Estimation Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Estimate $24.3 \\div 4$ by rounding. The answer is closest to:',
              options: ['About $0.6$', 'About $6$', 'About $60$', 'About $96$'],
              correctAnswer: 1,
              explanation: 'Round $24.3$ to $24$. Then $24 \\div 4 = 6$, so the answer is about $6$. (The exact value is $6.075$.)',
            },
            {
              question: 'A student divides $35.6 \\div 4$ and gets $89$. A quick estimate tells you this is:',
              options: ['Correct', 'Way too big — the decimal point is misplaced', 'Way too small', 'Impossible to check'],
              correctAnswer: 1,
              explanation: 'Round to $36 \\div 4 = 9$. The answer should be about $9$, not $89$. The estimate shows the point slipped. (The real answer is $8.9$.)',
            },
          ],
        },
      },
      {
        id: 'dd1-wrap',
        type: 'text' as const,
        content: `## You're Ready

You now know what division asks, the names of each part, why place value matters, and how to estimate a sanity-check answer.

In **Part 2**, we keep things simple: dividing a decimal by a **whole number**, where the decimal point barely has to move at all.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'dividing-decimals-grade5',
    sections: [
      {
        id: 'dd2-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Decimals

**Part 2 of 5 — Dividing a Decimal by a Whole Number**

---

> 🔑 **The Idea:** When the divisor is a whole number, you divide *exactly* like normal long division — then bring the decimal point **straight up** into the answer.`,
      },
      {
        id: 'dd2-steps',
        type: 'text' as const,
        content: `## The One Golden Rule

When you divide a decimal by a **whole number**:

> 🔑 **Bring the decimal point straight up.** Place the point in the answer (quotient) directly above the point in the dividend — *before* you start dividing the digits.

### Worked Example: $7.5 \\div 5$

$$\\begin{array}{r} 1.5 \\\\ 5\\,\\overline{\\smash{)}\\,7.5} \\end{array}$$

1. The decimal point in $7.5$ sits between the $7$ and the $5$. Put a point **straight up** in the answer.
2. Divide as usual: $7 \\div 5 = 1$ remainder $2$.
3. Bring down the $5$ to make $25$. Then $25 \\div 5 = 5$.
4. Answer: $\\mathbf{1.5}$.

> ✅ **Check:** $1.5 \\times 5 = 7.5$ ✓`,
      },
      {
        id: 'dd2-point-dropdown',
        type: 'dropdown-select' as const,
        content: `**Place the Point** 🔽

The digits of each answer are already correct — you just choose where the decimal point belongs.`,
        exercise: {
          dropdowns: [
            { label: '$8.4 \\div 2$ has digits $42$. Correct answer:', options: ['$4.2$', '$42$', '$0.42$', '$420$'] },
            { label: '$0.9 \\div 3$ has digits $3$. Correct answer:', options: ['$0.3$', '$3$', '$0.03$', '$30$'] },
          ],
          correctAnswers: ['$4.2$', '$0.3$'],
          hint1: 'The point rides straight up from the dividend. $8.4$ has the point after the ones digit, so the answer is $4.2$, not $42$.',
          hint2: '$0.9 \\div 3$: the point in $0.9$ is before the $9$ (tenths), so it lands before the $3$ in the answer: $0.3$.',
          hint3: 'Estimate to confirm: $8.4 \\div 2 \\approx 4$, so $4.2$. And $0.9 \\div 3$ must be small, so $0.3$.',
          explanation: 'Bring the point straight up from the dividend. $8.4 \\div 2 = 4.2$ and $0.9 \\div 3 = 0.3$.',
        },
      },
      {
        id: 'dd2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $9.6 \\div 8$

Point goes straight up. Then divide:

$$9.6 \\div 8 = 1.2$$

- $9 \\div 8 = 1$ remainder $1$.
- Bring down the $6$ to make $16$. Then $16 \\div 8 = 2$.
- Answer: $\\mathbf{1.2}$.

### Worked Example: $14.4 \\div 4$

$$14.4 \\div 4 = 3.6$$

- $14 \\div 4 = 3$ remainder $2$.
- Bring down the $4$ to make $24$. Then $24 \\div 4 = 6$.
- Answer: $\\mathbf{3.6}$.

> 💡 Notice the digits never changed how you divide — the decimal point just rode straight up from the dividend into the answer.`,
      },
      {
        id: 'dd2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When dividing $6.4 \\div 2$, where does the decimal point go in the answer?',
              options: ['Straight up, directly above the point in $6.4$', 'At the far right end', 'It disappears', 'You move it two places left'],
              correctAnswer: 0,
              explanation: 'When the divisor is a whole number, the point goes straight up — directly above the point in the dividend. $6.4 \\div 2 = 3.2$.',
            },
            {
              question: 'What is $8.8 \\div 4$?',
              options: ['$2.2$', '$22$', '$0.22$', '$4.4$'],
              correctAnswer: 0,
              explanation: 'Bring the point straight up, then divide: $8 \\div 4 = 2$ for the ones and $8 \\div 4 = 2$ for the tenths, giving $8.8 \\div 4 = 2.2$. Check: $2.2 \\times 4 = 8.8$ ✓.',
            },
          ],
        },
      },
      {
        id: 'dd2-zeros',
        type: 'text' as const,
        content: `## Sometimes You Add a Zero

What if the division doesn't come out evenly with the digits you have? You can **add zeros** after the decimal point — they don't change the value of the dividend, but they give you more digits to bring down.

### Worked Example: $3 \\div 4$

$3$ doesn't have a decimal part, but $3 = 3.00$. Write the point and add zeros:

$$3 \\div 4 = 0.75$$

- $3 \\div 4 = 0$ remainder $3$ (write $0$, point, then keep going).
- Bring down a $0$: $30 \\div 4 = 7$ remainder $2$.
- Bring down another $0$: $20 \\div 4 = 5$.
- Answer: $\\mathbf{0.75}$.

> 💡 Adding zeros to the **right of the last decimal digit** never changes a number: $3 = 3.0 = 3.00 = 3.000$. This trick lets you keep dividing until the remainder is $0$.`,
      },
      {
        id: 'dd2-drill',
        type: 'input-boxes' as const,
        content: `**Divide It** 🧮

Divide each decimal by the whole number. Bring the point straight up!

**1)** $4.8 \\div 4 = \\,?$
**2)** $13.5 \\div 5 = \\,?$
**3)** $6 \\div 8 = \\,?$  *(add zeros — answer is a decimal less than 1)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1.2', '2.7', '0.75'],
          hint1: '$4 \\div 4 = 1$ and $8 \\div 4 = 2$, so $4.8 \\div 4 = 1.2$.',
          hint2: '$13 \\div 5 = 2$ remainder $3$; bring down the $5$ to make $35$, and $35 \\div 5 = 7$. Answer $2.7$.',
          hint3: 'Write $6$ as $6.00$. $60 \\div 8 = 7$ r $4$; bring down a $0$ to make $40$; $40 \\div 8 = 5$. Answer $0.75$.',
          explanation: '1) $1.2$ (check: $1.2 \\times 4 = 4.8$). 2) $2.7$ (check: $2.7 \\times 5 = 13.5$). 3) $0.75$ (check: $0.75 \\times 8 = 6$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'dividing-decimals-grade5',
    sections: [
      {
        id: 'dd3-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Decimals

**Part 3 of 5 — Dividing by Powers of 10 & Moving the Point**

---

> 🔑 **The Shortcut:** Multiplying or dividing by $10$, $100$, or $1000$ doesn't require long division at all — you just **slide the decimal point**. This is the secret that makes Part 4 possible.`,
      },
      {
        id: 'dd3-divide-pow10',
        type: 'text' as const,
        content: `## Dividing by 10, 100, 1000

Each time you divide by $10$, every digit gets **ten times smaller**, so the decimal point slides **one place to the LEFT**.

| Divide by | Point moves left | Example |
|-----------|:----------------:|---------|
| $10$ | $1$ place | $45.6 \\div 10 = 4.56$ |
| $100$ | $2$ places | $45.6 \\div 100 = 0.456$ |
| $1000$ | $3$ places | $45.6 \\div 1000 = 0.0456$ |

Count the **zeros** in the divisor — that's how many places the point hops left.

> 💡 If you run out of digits, fill the empty spots with zeros: $7 \\div 100 = 0.07$ (two hops left, fill with a leading zero).`,
      },
      {
        id: 'dd3-divide-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $45.6 \\div 10$?',
              options: ['$4.56$', '$0.456$', '$456$', '$4560$'],
              correctAnswer: 0,
              explanation: 'Dividing by $10$ slides the point ONE place left: $45.6 \\to 4.56$.',
            },
            {
              question: 'What is $7 \\div 100$?',
              options: ['$0.07$', '$0.7$', '$0.007$', '$700$'],
              correctAnswer: 0,
              explanation: 'Dividing by $100$ slides the point TWO places left. Starting at $7.0$, hop two places left and fill with a leading zero: $0.07$.',
            },
          ],
        },
      },
      {
        id: 'dd3-multiply-pow10',
        type: 'text' as const,
        content: `## Multiplying by 10, 100, 1000 (the opposite)

Multiplying makes numbers **bigger**, so the point slides to the **RIGHT**.

| Multiply by | Point moves right | Example |
|-------------|:-----------------:|---------|
| $10$ | $1$ place | $3.7 \\times 10 = 37$ |
| $100$ | $2$ places | $3.7 \\times 100 = 370$ |
| $1000$ | $3$ places | $3.7 \\times 1000 = 3700$ |

> ⚠️ **Direction matters!** Dividing → point moves **left** (number shrinks). Multiplying → point moves **right** (number grows). Mixing these up is the #1 power-of-10 mistake.`,
      },
      {
        id: 'dd3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Slide the Point** 🔽

For each one, pick the correct result.`,
        exercise: {
          dropdowns: [
            { label: '$52.4 \\div 10 =$', options: ['$5.24$', '$524$', '$0.524$', '$52.40$'] },
            { label: '$8.3 \\div 100 =$', options: ['$0.083$', '$0.83$', '$830$', '$0.0083$'] },
            { label: '$6.1 \\times 100 =$', options: ['$610$', '$61$', '$0.061$', '$6100$'] },
            { label: '$9 \\div 1000 =$', options: ['$0.009$', '$0.09$', '$0.0009$', '$9000$'] },
          ],
          correctAnswers: ['$5.24$', '$0.083$', '$610$', '$0.009$'],
          hint1: 'Dividing by $10$ moves the point ONE place left: $52.4 \\to 5.24$.',
          hint2: 'Dividing by $100$ moves the point TWO places left: $8.3 \\to 0.083$ (fill with a leading zero).',
          hint3: 'Multiplying by $100$ moves the point TWO places right: $6.1 \\to 610$. Dividing $9$ by $1000$ moves it three places left: $0.009$.',
          explanation: 'Count the zeros, then hop the point that many places — left to divide, right to multiply.',
        },
      },
      {
        id: 'dd3-why',
        type: 'text' as const,
        content: `## Why This Will Matter Next

Here's the big plan for the hardest case (Part 4): when the divisor is a **decimal**, we'll *multiply both numbers* by a power of $10$ to turn the divisor into a **whole number**. Then we're back to the easy case from Part 2.

For example, to handle $\\div 0.4$, we'll multiply by $10$ to get $\\div 4$. That's why sliding the point fluently is so important right now.

> 🔑 **Fairness rule (preview):** Whatever you multiply the divisor by, you must multiply the dividend by the **same** amount. It's like a fraction — scaling top and bottom equally keeps the value the same.`,
      },
      {
        id: 'dd3-drill',
        type: 'input-boxes' as const,
        content: `**Move the Point** 🧮

Slide the decimal point the right number of places.

**1)** $73.5 \\div 10 = \\,?$
**2)** $2.6 \\times 1000 = \\,?$
**3)** $4.5 \\div 100 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.35', '2600', '0.045'],
          hint1: 'Divide by $10$: point hops ONE place left. $73.5 \\to 7.35$.',
          hint2: 'Multiply by $1000$: point hops THREE places right. $2.6 \\to 2600$ (fill with zeros).',
          hint3: 'Divide by $100$: point hops TWO places left. $4.5 \\to 0.045$ (add a leading zero).',
          explanation: '1) $7.35$ (one left). 2) $2600$ (three right). 3) $0.045$ (two left).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'dividing-decimals-grade5',
    sections: [
      {
        id: 'dd4-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Decimals

**Part 4 of 5 — Dividing by a Decimal**

---

> 🔑 **The Master Move:** Never divide by a decimal directly. First turn the **divisor** into a whole number by sliding its point right — then slide the **dividend's** point the same number of places. Now it's a Part 2 problem.`,
      },
      {
        id: 'dd4-steps',
        type: 'text' as const,
        content: `## The 3-Step Method

To compute (dividend) $\\div$ (decimal divisor):

1. **Count** how many places the point must move right to make the **divisor** whole.
2. **Move** the point that many places in **both** the divisor and the dividend.
3. **Divide** as usual (whole-number divisor), bringing the point straight up.

### Worked Example: $8.4 \\div 0.4$

- Step 1: $0.4$ needs to move **$1$ place** right to become $4$.
- Step 2: Move both points $1$ place right: $\\;8.4 \\to 84\\;$ and $\\;0.4 \\to 4$.
- Step 3: $84 \\div 4 = 21$.

$$8.4 \\div 0.4 = 84 \\div 4 = \\mathbf{21}$$

> ✅ **Check:** $21 \\times 0.4 = 8.4$ ✓`,
      },
      {
        id: 'dd4-worked2',
        type: 'text' as const,
        content: `### Worked Example: $9.36 \\div 0.04$

- The divisor $0.04$ needs **$2$ places** right to become $4$.
- Move both points $2$ places: $\\;9.36 \\to 936\\;$ and $\\;0.04 \\to 4$.
- Divide: $936 \\div 4 = 234$.

$$9.36 \\div 0.04 = 936 \\div 4 = \\mathbf{234}$$

### Worked Example: $1.5 \\div 0.5$

- $0.5$ needs **$1$ place** right to become $5$.
- Move both: $\\;1.5 \\to 15\\;$ and $\\;0.5 \\to 5$.
- Divide: $15 \\div 5 = 3$.

$$1.5 \\div 0.5 = 15 \\div 5 = \\mathbf{3}$$

> 💡 **Surprise:** $1.5 \\div 0.5 = 3$, which is *bigger* than the number you started with! Dividing by a number **less than $1$** makes the answer grow — because lots of tiny pieces fit inside.`,
      },
      {
        id: 'dd4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Problem** 🔽

You're solving $7.2 \\div 0.6$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'To make the divisor $0.6$ whole, move the point:', options: ['$1$ place right', '$2$ places right', '$1$ place left', 'no move needed'] },
            { label: 'After moving, the divisor becomes:', options: ['$6$', '$60$', '$0.06$', '$6.0$ tenths'] },
            { label: 'Move the dividend the SAME way: $7.2$ becomes:', options: ['$72$', '$720$', '$0.72$', '$7.2$'] },
            { label: 'The final answer $72 \\div 6 =$', options: ['$12$', '$1.2$', '$120$', '$6$'] },
          ],
          correctAnswers: ['$1$ place right', '$6$', '$72$', '$12$'],
          hint1: '$0.6$ has one digit after the point, so move $1$ place right to reach $6$.',
          hint2: 'Whatever you do to the divisor, do to the dividend: $7.2$ also moves $1$ place right to become $72$.',
          hint3: 'Now the divisor is a whole number: $72 \\div 6 = 12$. Check: $12 \\times 0.6 = 7.2$ ✓.',
          explanation: 'Move both points $1$ place right ($0.6 \\to 6$, $7.2 \\to 72$), then $72 \\div 6 = 12$.',
        },
      },
      {
        id: 'dd4-watch',
        type: 'text' as const,
        content: `## Two Things to Watch

When you move the points, keep these in mind:

1. **Move BOTH the same amount.** If the divisor moves $2$ places, the dividend moves $2$ places. Moving only one of them changes the answer.
2. **The dividend may need extra zeros.** To compute $8.4 \\div 0.04$, the divisor $0.04 \\to 4$ needs $2$ places, so $8.4$ must move $2$ places too: $8.4 \\to 840$ (you append a zero).

> 💡 **Big-picture sense check:** dividing by a number **less than $1$** always makes the answer *bigger* than the dividend, while dividing by a number **greater than $1$** makes it *smaller*.`,
      },
      {
        id: 'dd4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To divide by $0.05$, how many places do you move BOTH decimal points to the right?',
              options: ['$1$ place', '$2$ places', '$3$ places', '$0$ places'],
              correctAnswer: 1,
              explanation: '$0.05$ has two digits after the point. Moving $2$ places right turns $0.05$ into $5$. You must move the dividend $2$ places too.',
            },
            {
              question: 'Without dividing yet — $4.8 \\div 0.6$ will be:',
              options: ['Less than $4.8$', 'Greater than $4.8$', 'Exactly $0.6$', 'Exactly $4.8$'],
              correctAnswer: 1,
              explanation: 'Dividing by a number less than $1$ (like $0.6$) makes the answer larger. In fact $4.8 \\div 0.6 = 8$, which is bigger than $4.8$.',
            },
          ],
        },
      },
      {
        id: 'dd4-recap',
        type: 'text' as const,
        content: `## Your Turn — Recap the Steps

Before the drill, run the method in your head one more time:

1. **Count** the decimal places in the divisor.
2. **Slide** both points right that many places.
3. **Divide** the new whole-number problem and bring the point straight up.

> 🔑 If the divisor is already whole (like $\\div 4$), there's nothing to slide — you're back in Part 2.`,
      },
      {
        id: 'dd4-drill',
        type: 'input-boxes' as const,
        content: `**Divide by a Decimal** 🧮

Make the divisor whole, move both points, then divide.

**1)** $6.3 \\div 0.7 = \\,?$
**2)** $4.8 \\div 0.6 = \\,?$
**3)** $8.4 \\div 0.04 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '8', '210'],
          hint1: '$0.7 \\to 7$ (one place); $6.3 \\to 63$. Then $63 \\div 7 = 9$.',
          hint2: '$0.6 \\to 6$ (one place); $4.8 \\to 48$. Then $48 \\div 6 = 8$.',
          hint3: '$0.04 \\to 4$ (two places); $8.4 \\to 840$ (two places, add a zero). Then $840 \\div 4 = 210$.',
          explanation: '1) $63 \\div 7 = 9$. 2) $48 \\div 6 = 8$. 3) $840 \\div 4 = 210$. Check each by multiplying back by the original divisor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'dividing-decimals-grade5',
    sections: [
      {
        id: 'dd5-intro',
        type: 'text' as const,
        content: `# ➗ Dividing Decimals

**Part 5 of 5 — Word Problems, Mixed Practice & Mastery Check**

---

You can now divide a decimal by a whole number, slide the point for powers of $10$, and divide by a decimal. Let's use these skills on real situations and then prove your mastery.`,
      },
      {
        id: 'dd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|------------|
| Decimal $\\div$ whole number | Bring the point **straight up**; divide normally |
| Divide by $10,\\,100,\\,1000$ | Slide the point **left** (1, 2, 3 places) |
| Multiply by $10,\\,100,\\,1000$ | Slide the point **right** (1, 2, 3 places) |
| Decimal $\\div$ **decimal** | Make divisor whole, move **both** points, then divide |
| Doesn't come out even | Add **zeros** to the dividend and keep going |

> ⚠️ **Two habits to keep:** (1) Always *estimate first* so you catch a misplaced point. (2) When dividing by a decimal, move **both** points the same number of places — never just one.`,
      },
      {
        id: 'dd5-word-problems',
        type: 'text' as const,
        content: `## Word Problems

### Example: Sharing money

Four friends split a \\$9.60 lunch bill equally. How much does each pay?

$$9.60 \\div 4 = 2.40$$

Each friend pays **\\$2.40**. (Check: $2.40 \\times 4 = 9.60$ ✓)

### Example: How many pieces?

A ribbon is $7.5$ meters long. How many $0.5$-meter pieces can you cut?

$$7.5 \\div 0.5 = 75 \\div 5 = 15$$

You get **$15$ pieces**. (Here dividing by $0.5$, a number under $1$, gives an answer bigger than $7.5$ — that makes sense, since each piece is short.)

> 💡 **Decide which number is the divisor:** "split among $4$ people" → divide by $4$. "How many $0.5$-m pieces" → divide by $0.5$.`,
      },
      {
        id: 'dd5-word-check',
        type: 'multiple-choice' as const,
        content: `**Word Problem Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $13.5$-lb bag of flour is split into bags holding $1.5$ lb each. How many bags can be filled?',
              options: ['$9$ bags', '$12$ bags', '$15$ bags', '$20.25$ bags'],
              correctAnswer: 0,
              explanation: '$13.5 \\div 1.5 = 135 \\div 15 = 9$. Move both points one place right, then divide. Check: $9 \\times 1.5 = 13.5$ ✓.',
            },
            {
              question: 'Maya runs $6.4$ miles in $4$ equal days. How far does she run each day?',
              options: ['$1.6$ miles', '$16$ miles', '$2.4$ miles', '$25.6$ miles'],
              correctAnswer: 0,
              explanation: 'Equal days means divide by $4$: $6.4 \\div 4 = 1.6$. Bring the point straight up. Check: $1.6 \\times 4 = 6.4$ ✓.',
            },
          ],
        },
      },
      {
        id: 'dd5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

One of each type — pick the right method for each!

**1)** $15.6 \\div 4 = \\,?$  *(decimal ÷ whole number)*
**2)** $28.3 \\div 100 = \\,?$  *(power of 10)*
**3)** $5.6 \\div 0.8 = \\,?$  *(÷ a decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3.9', '0.283', '7'],
          hint1: 'Point straight up: $15 \\div 4 = 3$ r $3$; bring down $6$ → $36 \\div 4 = 9$. Answer $3.9$.',
          hint2: 'Divide by $100$: move the point TWO places left. $28.3 \\to 0.283$.',
          hint3: '$0.8 \\to 8$ and $5.6 \\to 56$ (both one place right). Then $56 \\div 8 = 7$.',
          explanation: '1) $3.9$ (check $3.9 \\times 4 = 15.6$). 2) $0.283$ (two places left). 3) $7$ (check $7 \\times 0.8 = 5.6$).',
        },
      },
      {
        id: 'dd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $9.6 \\div 3$?',
              options: ['$3.2$', '$32$', '$0.32$', '$3.6$'],
              correctAnswer: 0,
              explanation: 'Bring the point straight up: $9 \\div 3 = 3$, $6 \\div 3 = 2$, so $9.6 \\div 3 = 3.2$. Check: $3.2 \\times 3 = 9.6$ ✓.',
            },
            {
              question: 'What is $5.2 \\div 100$?',
              options: ['$0.052$', '$0.52$', '$520$', '$0.0052$'],
              correctAnswer: 0,
              explanation: 'Dividing by $100$ slides the point TWO places left: $5.2 \\to 0.052$ (add a leading zero).',
            },
            {
              question: 'What is $4.5 \\div 0.9$?',
              options: ['$5$', '$0.5$', '$50$', '$4.05$'],
              correctAnswer: 0,
              explanation: 'Make the divisor whole: $0.9 \\to 9$ and $4.5 \\to 45$ (both one place right). Then $45 \\div 9 = 5$. Check: $5 \\times 0.9 = 4.5$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
