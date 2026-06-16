import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multi-Digit Division (Grade 5 Math).
 * Registry key / DB slug: 'multi-digit-division-grade5'.
 * 5 parts, gold-standard structure: vocabulary & estimation → 1-digit divisors →
 * 2-digit divisors (long division) → remainders & interpreting → mixed mastery +
 * exit quiz. Interactive practice mixes multiple-choice + input-boxes + dropdown.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multi-digit-division-grade5',
    sections: [
      {
        id: 'mdd1-intro',
        type: 'text' as const,
        content: `# ➗ Multi-Digit Division

**Part 1 of 5 — The Parts of a Division Problem & Smart Estimating**

---

### Topics in This Part

| Section |
|---------|
| What the Words Mean: Dividend, Divisor, Quotient |
| Division Is Just Repeated Subtraction |
| Estimating the Answer First |

> 🔑 **Key Concept:** Before you do any long division, you should already have a rough idea of how big the answer is. A good estimate catches mistakes before they happen.`,
      },
      {
        id: 'mdd1-vocab',
        type: 'text' as const,
        content: `## The Parts of a Division Problem

Every division problem has the same three pieces. Learning their names now makes everything else easier.

$$\\underbrace{846}_{\\text{dividend}} \\div \\underbrace{6}_{\\text{divisor}} = \\underbrace{141}_{\\text{quotient}}$$

| Word | What it means | In $846 \\div 6$ |
|------|---------------|-----------------|
| **Dividend** | the number being split up (the total) | $846$ |
| **Divisor** | the number you split it into | $6$ |
| **Quotient** | the answer | $141$ |

The same problem can be written three ways. They all mean the exact same thing:

$$846 \\div 6 \\qquad\\qquad \\frac{846}{6} \\qquad\\qquad 6\\,\\overline{)\\,846}$$

> 💡 **Memory trick:** The **divi**dend goes **in**side the long-division "house" ($\\overline{)\\;\\;}$). The **divisor** stands outside the door.`,
      },
      {
        id: 'mdd1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the problem $952 \\div 7$, which number is the **divisor**?',
              options: ['$7$', '$952$', '$136$', '$945$'],
              correctAnswer: 0,
              explanation: 'The divisor is the number you are dividing *by* — it stands outside the house. Here that is $7$. The dividend ($952$) is the total being split up.',
            },
            {
              question: 'The **quotient** is another name for which part of a division problem?',
              options: ['The answer', 'The total being split up', 'The number you divide by', 'The leftover'],
              correctAnswer: 0,
              explanation: 'The quotient is the *answer* to a division problem. The total is the dividend, and the number you divide by is the divisor.',
            },
          ],
        },
      },
      {
        id: 'mdd1-repeated-sub',
        type: 'text' as const,
        content: `## Division Is Repeated Subtraction

Dividing $20 \\div 5$ asks: **"How many groups of 5 fit inside 20?"**

$$20 - 5 - 5 - 5 - 5 = 0 \\quad\\Rightarrow\\quad \\text{four 5's fit, so } 20 \\div 5 = 4$$

This is also why **division and multiplication are opposites** (inverse operations). Every division fact hides a multiplication fact:

$$20 \\div 5 = 4 \\quad\\Longleftrightarrow\\quad 4 \\times 5 = 20$$

> 🔑 **Check any answer with multiplication.** If $846 \\div 6 = 141$, then $141 \\times 6$ should equal $846$. If it doesn't, the answer is wrong.`,
      },
      {
        id: 'mdd1-estimate',
        type: 'text' as const,
        content: `## Estimate First with Compatible Numbers

A great estimate uses **compatible numbers** — numbers close to the real ones that divide *evenly* in your head.

**Example:** Estimate $417 \\div 6$.

- $417$ is close to $420$, and $420 \\div 6 = 70$ (because $42 \\div 6 = 7$).
- So the answer should be **near 70**.

**Example:** Estimate $3{,}512 \\div 7$.

- $3{,}512$ is close to $3{,}500$, and $3{,}500 \\div 7 = 500$ (because $35 \\div 7 = 5$).
- So the answer should be **near 500**.

> 💡 You are *not* trying to get the exact answer when you estimate — you are finding the right "size" so you know roughly where the decimal point and digits belong.`,
      },
      {
        id: 'mdd1-estimate-drill',
        type: 'input-boxes' as const,
        content: `**Estimate It** 🧮

Use compatible numbers to estimate each quotient. Enter your estimate.

**1)** $\\;365 \\div 6 \\approx \\,?$  *(round the dividend to $360$)*
**2)** $\\;2{,}438 \\div 5 \\approx \\,?$  *(round the dividend to $2{,}500$)*
**3)** $\\;6{,}312 \\div 9 \\approx \\,?$  *(round the dividend to $6{,}300$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '500', '700'],
          hint1: '$360 \\div 6 = 60$ because $36 \\div 6 = 6$.',
          hint2: '$2{,}500 \\div 5 = 500$ because $25 \\div 5 = 5$.',
          hint3: '$6{,}300 \\div 9 = 700$ because $63 \\div 9 = 7$.',
          explanation: '1) $360 \\div 6 = 60$.  2) $2{,}500 \\div 5 = 500$.  3) $6{,}300 \\div 9 = 700$. Each estimate uses a "friendly" dividend that divides evenly.',
        },
      },
      {
        id: 'mdd1-estimate-mc',
        type: 'multiple-choice' as const,
        content: `**Does the Answer Make Sense?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student says $483 \\div 7 = 6.9$. Using estimation, is that reasonable? (Estimate: $490 \\div 7 = 70$.)',
              options: ['No — the answer should be near 70, not near 7', 'Yes — 6.9 is close to 7', 'No — the answer should be near 700', 'Yes — division always makes numbers small'],
              correctAnswer: 0,
              explanation: '$490 \\div 7 = 70$, so the real answer should be near $70$. The student misplaced the value by a factor of 10 — a perfect example of why estimating first catches errors. (The true answer is $69$.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multi-digit-division-grade5',
    sections: [
      {
        id: 'mdd2-intro',
        type: 'text' as const,
        content: `# ➗ Multi-Digit Division

**Part 2 of 5 — Dividing by a One-Digit Number**

---

> 🔑 **The Rhythm of Long Division:** Every long-division problem repeats the same four steps over and over: **Divide, Multiply, Subtract, Bring down.** Some people remember it as **D · M · S · B**.`,
      },
      {
        id: 'mdd2-steps',
        type: 'text' as const,
        content: `## The Four Steps: D-M-S-B

To divide, you work through the dividend **one digit at a time, left to right**, repeating this loop:

1. **Divide** — How many times does the divisor go into the current number?
2. **Multiply** — Multiply that digit by the divisor.
3. **Subtract** — Subtract to find what's left.
4. **Bring down** — Bring down the next digit and repeat.

### Worked Example: $896 \\div 7$

$$
\\begin{array}{r}
128 \\\\
7\\,\\overline{)\\,896}
\\end{array}
$$

- **$8 \\div 7$:** 7 goes in **1** time. $1 \\times 7 = 7$. $8 - 7 = 1$. Bring down the $9 \\rightarrow 19$.
- **$19 \\div 7$:** 7 goes in **2** times. $2 \\times 7 = 14$. $19 - 14 = 5$. Bring down the $6 \\rightarrow 56$.
- **$56 \\div 7$:** 7 goes in **8** times. $8 \\times 7 = 56$. $56 - 56 = 0$. Done.

$$896 \\div 7 = 128$$

> ✅ **Check:** $128 \\times 7 = 896$ ✓`,
      },
      {
        id: 'mdd2-step-check',
        type: 'dropdown-select' as const,
        content: `**Follow the Steps** 🔽

You're dividing $872 \\div 4$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'How many times does 4 go into 8?', options: ['$2$', '$1$', '$3$', '$4$'] },
            { label: 'After writing 2 and subtracting, bring down the 7 to get:', options: ['$07$', '$27$', '$7$', '$72$'] },
            { label: 'How many times does 4 go into 7?', options: ['$1$', '$2$', '$0$', '$3$'] },
            { label: 'The final quotient is:', options: ['$218$', '$208$', '$28$', '$281$'] },
          ],
          correctAnswers: ['$2$', '$07$', '$1$', '$218$'],
          hint1: '$4 \\times 2 = 8$, so 4 goes into 8 exactly 2 times with nothing left over.',
          hint2: 'After $8 - 8 = 0$, bring down the next digit (7). The running number is $07$, which is just $7$.',
          hint3: '$4 \\times 1 = 4$; 4 goes into 7 one time ($7 - 4 = 3$). Bring down the 2 to get 32, and $32 \\div 4 = 8$. So the quotient is $218$.',
          explanation: '$872 \\div 4$: $8 \\div 4 = 2$, $7 \\div 4 = 1$ rem $3$, $32 \\div 4 = 8$. The quotient is $218$. Check: $218 \\times 4 = 872$ ✓.',
        },
      },
      {
        id: 'mdd2-zero-quotient',
        type: 'text' as const,
        content: `## ⚠️ Don't Forget Zeros in the Quotient!

When the divisor **doesn't go into** a digit, you must write a **0** in the quotient and keep going. Skipping the zero is the #1 long-division mistake.

### Worked Example: $618 \\div 6$

$$
\\begin{array}{r}
103 \\\\
6\\,\\overline{)\\,618}
\\end{array}
$$

- **$6 \\div 6 = 1$.** $1 \\times 6 = 6$. $6 - 6 = 0$. Bring down the $1 \\rightarrow 1$.
- **$1 \\div 6$:** 6 does **not** go into 1, so write a **0** in the quotient. Bring down the $8 \\rightarrow 18$.
- **$18 \\div 6 = 3$.** $3 \\times 6 = 18$. $18 - 18 = 0$. Done.

$$618 \\div 6 = 103 \\quad\\text{(not } 13!\\text{)}$$

> ⚠️ If you had skipped the zero, you'd get $13$ — and $13 \\times 6 = 78$, nowhere near $618$. Always place a digit (even a 0) for **every** digit you bring down.`,
      },
      {
        id: 'mdd2-divide-drill',
        type: 'input-boxes' as const,
        content: `**Divide by One Digit** 🧮

Work each one with D-M-S-B. These all come out even (no remainder).

**1)** $\\;574 \\div 7 = \\,?$
**2)** $\\;936 \\div 4 = \\,?$
**3)** $\\;824 \\div 8 = \\,?$  *(watch for a zero in the middle!)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['82', '234', '103'],
          hint1: '$57 \\div 7 = 8$ rem $1$; bring down 4 to get 14; $14 \\div 7 = 2$. Quotient $82$.',
          hint2: '$9 \\div 4 = 2$ rem $1$; $13 \\div 4 = 3$ rem $1$; $16 \\div 4 = 4$. Quotient $234$.',
          hint3: '$8 \\div 8 = 1$; 8 does NOT go into 2, so write 0; $24 \\div 8 = 3$. Quotient $103$.',
          explanation: '1) $574 \\div 7 = 82$.  2) $936 \\div 4 = 234$.  3) $824 \\div 8 = 103$ — the 0 in the tens place is essential.',
        },
      },
      {
        id: 'mdd2-zero-mc',
        type: 'multiple-choice' as const,
        content: `**Spot the Mistake** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student divides $728 \\div 7$ and writes the answer as $14$. What went wrong?',
              options: [
                'They forgot a 0 — the answer is $104$',
                'Nothing, $14$ is correct',
                'They should have gotten $24$',
                'The divisor and dividend are swapped',
              ],
              correctAnswer: 0,
              explanation: '$7 \\div 7 = 1$; then 7 does not go into 2, so a **0** belongs in the quotient; then $28 \\div 7 = 4$. The answer is $104$. Check: $104 \\times 7 = 728$ ✓. Writing $14$ means the zero was skipped.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multi-digit-division-grade5',
    sections: [
      {
        id: 'mdd3-intro',
        type: 'text' as const,
        content: `# ➗ Multi-Digit Division

**Part 3 of 5 — Dividing by a Two-Digit Number**

---

> 🔑 **Same four steps, bigger divisor.** Dividing by a two-digit number (like 23 or 41) uses the *exact same* D-M-S-B loop. The only new skill is **guessing** how many times a big number goes in — and we'll use estimation to guess smart.`,
      },
      {
        id: 'mdd3-rounding',
        type: 'text' as const,
        content: `## Guess Smart: Round the Divisor

With a two-digit divisor, "how many times does it go in?" is harder to see. The trick is to **round the divisor** to the nearest ten and use that to guess.

| Divisor | Round to | Use this to guess |
|---------|----------|-------------------|
| $23$ | $20$ | think "how many 20s?" |
| $38$ | $40$ | think "how many 40s?" |
| $52$ | $50$ | think "how many 50s?" |

**Example:** For $187 \\div 23$, round 23 to **20**. About how many 20s in 187? Around $9$ (since $20 \\times 9 = 180$). Test 8: $23 \\times 8 = 184$, which fits inside 187. So the digit is **8**.

> 💡 Your first guess might be too big. That's normal! If $\\text{guess} \\times \\text{divisor}$ is **bigger** than the number, lower your guess by 1 and try again.`,
      },
      {
        id: 'mdd3-guess-drill',
        type: 'input-boxes' as const,
        content: `**Make a Smart Guess** 🧮

Round the divisor to estimate the **single digit** that goes in the quotient.

**1)** How many times does $19$ go into $58$?  *(round 19 to 20; $20 \\times 3 = 60$)*
**2)** How many times does $42$ go into $89$?  *(round 42 to 40)*
**3)** How many times does $31$ go into $97$?  *(round 31 to 30)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '2', '3'],
          hint1: '$19 \\times 3 = 57$, which fits inside 58 ($19 \\times 4 = 76$ is too big). Answer: 3.',
          hint2: '$42 \\times 2 = 84$, which fits inside 89 ($42 \\times 3 = 126$ is too big). Answer: 2.',
          hint3: '$31 \\times 3 = 93$, which fits inside 97 ($31 \\times 4 = 124$ is too big). Answer: 3.',
          explanation: '1) $19 \\times 3 = 57 \\le 58$, so 3.  2) $42 \\times 2 = 84 \\le 89$, so 2.  3) $31 \\times 3 = 93 \\le 97$, so 3.',
        },
      },
      {
        id: 'mdd3-worked',
        type: 'text' as const,
        content: `## Worked Example: $874 \\div 23$

$$
\\begin{array}{r}
38 \\\\
23\\,\\overline{)\\,874}
\\end{array}
$$

**Step 1 — the first chunk.** 23 doesn't go into 8, so look at **87**. Round 23 to 20: about how many 20s in 87? Around 4. Test: $23 \\times 4 = 92$ — too big! Back down to **3**: $23 \\times 3 = 69$. Write **3**. $87 - 69 = 18$. Bring down the $4 \\rightarrow 184$.

**Step 2 — the next chunk.** How many 23s in 184? Round to 20: about 9. Test: $23 \\times 8 = 184$ exactly. Write **8**. $184 - 184 = 0$. Done.

$$874 \\div 23 = 38$$

> ✅ **Check:** $38 \\times 23 = 874$ ✓`,
      },
      {
        id: 'mdd3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $1{,}512 \\div 36$

$$
\\begin{array}{r}
42 \\\\
36\\,\\overline{)\\,1512}
\\end{array}
$$

- 36 doesn't go into 1, and not into 15. Look at **151**. Round 36 to 40: about how many 40s in 151? Around 3. Test $36 \\times 4 = 144$ (fits!), and $36 \\times 5 = 180$ (too big). Write **4**. $151 - 144 = 7$. Bring down the $2 \\rightarrow 72$.
- How many 36s in 72? Exactly **2** ($36 \\times 2 = 72$). $72 - 72 = 0$. Done.

$$1{,}512 \\div 36 = 42$$

> ✅ **Check:** $42 \\times 36 = 1{,}512$ ✓`,
      },
      {
        id: 'mdd3-two-digit-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To divide $608 \\div 19$, why is it smart to first round 19 to 20?',
              options: [
                'Rounding makes it easier to guess how many times the divisor fits',
                'You should divide by 20 instead of 19 to get the answer',
                'Rounding changes the dividend',
                '19 cannot be used in division',
              ],
              correctAnswer: 0,
              explanation: 'You round the *divisor* only to make a smart **guess** for each quotient digit. You still multiply and subtract using the real divisor, 19. (Here $608 \\div 19 = 32$.)',
            },
            {
              question: 'While dividing, your guess gives $24 \\times 7 = 168$, but the number you are dividing into is only $150$. What should you do?',
              options: ['Lower the guess to 6 and try again', 'Use 7 anyway', 'Raise the guess to 8', 'Skip this digit'],
              correctAnswer: 0,
              explanation: 'Since $168 > 150$, the guess of 7 is too big. Lower it: $24 \\times 6 = 144 \\le 150$ ✓. When your product is bigger than the number, go down by one.',
            },
          ],
        },
      },
      {
        id: 'mdd3-two-digit-drill',
        type: 'input-boxes' as const,
        content: `**Divide by Two Digits** 🧮

Use rounding to guess, then check with multiplication. These all divide evenly.

**1)** $\\;702 \\div 18 = \\,?$
**2)** $\\;966 \\div 42 = \\,?$
**3)** $\\;1{,}176 \\div 24 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['39', '23', '49'],
          hint1: 'Round 18 to 20. $18 \\times 3 = 54$ into 70 → write 3 ($70-54=16$); bring down 2 → 162; $18 \\times 9 = 162$. Quotient 39.',
          hint2: 'Round 42 to 40. $42 \\times 2 = 84$ into 96 → write 2 ($96-84=12$); bring down 6 → 126; $42 \\times 3 = 126$. Quotient 23.',
          hint3: 'Round 24 to 20. $24 \\times 4 = 96$ into 117 → write 4 ($117-96=21$); bring down 6 → 216; $24 \\times 9 = 216$. Quotient 49.',
          explanation: '1) $702 \\div 18 = 39$.  2) $966 \\div 42 = 23$.  3) $1{,}176 \\div 24 = 49$. Always check: e.g. $49 \\times 24 = 1{,}176$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multi-digit-division-grade5',
    sections: [
      {
        id: 'mdd4-intro',
        type: 'text' as const,
        content: `# ➗ Multi-Digit Division

**Part 4 of 5 — Remainders & What They Mean**

---

> 🔑 **Not everything divides evenly.** When the divisor doesn't fit a whole number of times, the leftover is the **remainder**. The smart part isn't *finding* the remainder — it's deciding what to **do** with it in a real-world problem.`,
      },
      {
        id: 'mdd4-remainder',
        type: 'text' as const,
        content: `## Finding a Remainder

The remainder is what's **left over** after dividing as far as you can with whole numbers. It must always be **smaller than the divisor**.

### Worked Example: $59 \\div 8$

- $8 \\times 7 = 56$, which fits inside 59. ($8 \\times 8 = 64$ is too big.)
- $59 - 56 = 3$ left over.

$$59 \\div 8 = 7 \\text{ R } 3$$

We say "7 remainder 3." To **check a remainder problem**, use:

$$(\\text{quotient} \\times \\text{divisor}) + \\text{remainder} = \\text{dividend}$$

$$(7 \\times 8) + 3 = 56 + 3 = 59 \\;✓$$

> ⚠️ A remainder can **never** be equal to or larger than the divisor. If your "remainder" is $8$ when dividing by $8$, the quotient should have been one bigger!`,
      },
      {
        id: 'mdd4-remainder-drill',
        type: 'input-boxes' as const,
        content: `**Find the Quotient and Remainder** 🧮

For each, enter the **whole-number quotient** in the first box and the **remainder** in the second box.

**1)** $\\;47 \\div 6 = \\,?\\ \\text{R}\\ ?$
**2)** $\\;100 \\div 9 = \\,?\\ \\text{R}\\ ?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '5', '11', '1'],
          hint1: '$6 \\times 7 = 42$, and $47 - 42 = 5$. So $47 \\div 6 = 7$ R $5$.',
          hint2: '$9 \\times 11 = 99$, and $100 - 99 = 1$. So $100 \\div 9 = 11$ R $1$.',
          hint3: 'Check each: $(7\\times 6)+5 = 47$ ✓ and $(11 \\times 9)+1 = 100$ ✓.',
          explanation: '1) $47 \\div 6 = 7$ R $5$ (boxes: 7, 5).  2) $100 \\div 9 = 11$ R $1$ (boxes: 11, 1).',
        },
      },
      {
        id: 'mdd4-interpret',
        type: 'text' as const,
        content: `## What Do You DO with the Remainder?

The same numbers can give **three different answers** depending on the question! Watch:

> **Problem:** 53 students need to ride in vans. Each van holds 8 students. ($53 \\div 8 = 6 \\text{ R } 5$)

| The question asks… | What to do with R 5 | Answer |
|--------------------|---------------------|--------|
| How many vans are **needed** so everyone rides? | **Round UP** — those 5 kids still need a van | **7 vans** |
| How many vans can be **completely filled**? | **Drop** the remainder | **6 vans** |
| How many students are **left without a full van**? | The remainder **is** the answer | **5 students** |

> 🔑 **Read the question carefully.** "Everyone must fit" → round up. "How many full groups" → drop the remainder. "How many left over" → the remainder itself.`,
      },
      {
        id: 'mdd4-interpret-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interpret the Remainder** 🔽

Each problem starts from $74 \\div 5 = 14 \\text{ R } 4$. Choose the right answer for each question.`,
        exercise: {
          dropdowns: [
            { label: '74 people, 5 per taxi. How many taxis are needed so everyone gets a ride?', options: ['$15$', '$14$', '$4$', '$5$'] },
            { label: 'You have 74 stickers shared into 5 equal piles. How many whole stickers in each pile?', options: ['$14$', '$15$', '$4$', '$74$'] },
            { label: 'After sharing 74 stickers into 5 equal piles, how many are left over?', options: ['$4$', '$5$', '$14$', '$0$'] },
          ],
          correctAnswers: ['$15$', '$14$', '$4$'],
          hint1: '"So everyone gets a ride" means the leftover 4 people still need a taxi — round UP from 14 to 15.',
          hint2: '"How many whole stickers in each pile" is the quotient itself — drop the remainder. That is 14.',
          hint3: '"How many are left over" is the remainder. That is 4.',
          explanation: 'Same division ($74 \\div 5 = 14$ R $4$), three answers: round up → 15 taxis; drop → 14 per pile; remainder → 4 left over. The *question* decides.',
        },
      },
      {
        id: 'mdd4-interpret-mc',
        type: 'multiple-choice' as const,
        content: `**Word Problem** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A baker puts 9 muffins in each box. She has 130 muffins. How many **full boxes** can she make?',
              options: ['$14$ full boxes', '$15$ full boxes', '$13$ full boxes', '$4$ full boxes'],
              correctAnswer: 0,
              explanation: '$130 \\div 9 = 14$ R $4$. "Full boxes" means we drop the remainder: she can completely fill **14** boxes, with 4 muffins left over.',
            },
            {
              question: 'A bus holds 40 passengers. 326 fans need a ride to the game. How many buses are needed so **everyone** gets there?',
              options: ['$9$ buses', '$8$ buses', '$6$ buses', '$40$ buses'],
              correctAnswer: 0,
              explanation: '$326 \\div 40 = 8$ R $6$. Eight buses carry 320 fans; 6 are still waiting, so they need a 9th bus. Round **up** to **9** buses.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multi-digit-division-grade5',
    sections: [
      {
        id: 'mdd5-intro',
        type: 'text' as const,
        content: `# ➗ Multi-Digit Division

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name the parts of a division problem, (2) estimate the answer, (3) divide by one- and two-digit numbers using D-M-S-B, and (4) find and interpret remainders. Time to put it all together.`,
      },
      {
        id: 'mdd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Estimate first | use **compatible numbers** (e.g. $417 \\div 6 \\approx 420 \\div 6 = 70$) |
| Do long division | repeat **D**ivide · **M**ultiply · **S**ubtract · **B**ring down |
| Two-digit divisor | **round the divisor** to guess each digit; adjust if too big |
| Check the answer | $(\\text{quotient} \\times \\text{divisor}) + \\text{remainder} = \\text{dividend}$ |
| Word-problem remainder | "everyone fits" → **round up**; "full groups" → **drop**; "left over" → **remainder** |

> ⚠️ Top three mistakes to avoid: **(1)** skipping a 0 in the quotient, **(2)** letting a remainder be $\\ge$ the divisor, and **(3)** ignoring what the word problem actually asks.`,
      },
      {
        id: 'mdd5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** $\\;945 \\div 7 = \\,?$  *(even)*
**2)** $\\;988 \\div 38 = \\,?$  *(even, two-digit divisor)*
**3)** $\\;85 \\div 6 = \\,?\\ \\text{R}\\ ?$  *(quotient in box 3, remainder in box 4)*`,
        exercise: {
          boxes: 4,
          correctAnswers: ['135', '26', '14', '1'],
          hint1: '$9 \\div 7 = 1$ r2; $24 \\div 7 = 3$ r3; $35 \\div 7 = 5$. Quotient $135$.',
          hint2: 'Round 38 to 40. $38 \\times 2 = 76$ into 98 → 2 r22; bring down 8 → 228; $38 \\times 6 = 228$. Quotient $26$.',
          hint3: '$6 \\times 14 = 84$, and $85 - 84 = 1$. So $85 \\div 6 = 14$ R $1$.',
          explanation: '1) $945 \\div 7 = 135$.  2) $988 \\div 38 = 26$.  3) $85 \\div 6 = 14$ R $1$ (boxes: 14, 1).',
        },
      },
      {
        id: 'mdd5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Without dividing exactly, which is the best estimate of $4{,}189 \\div 7$?',
              options: ['About $600$', 'About $60$', 'About $6{,}000$', 'About $6$'],
              correctAnswer: 0,
              explanation: '$4{,}189$ is close to $4{,}200$, and $4{,}200 \\div 7 = 600$ (since $42 \\div 7 = 6$). So the answer is **about 600**.',
            },
            {
              question: 'Which check confirms that $612 \\div 17 = 36$?',
              options: ['$36 \\times 17 = 612$', '$36 + 17 = 612$', '$612 \\times 17 = 36$', '$612 - 17 = 36$'],
              correctAnswer: 0,
              explanation: 'Division is checked with multiplication: quotient $\\times$ divisor should equal the dividend. $36 \\times 17 = 612$ ✓.',
            },
          ],
        },
      },
      {
        id: 'mdd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $738 \\div 6$?',
              options: ['$123$', '$13$', '$1{,}023$', '$103$'],
              correctAnswer: 0,
              explanation: '$7 \\div 6 = 1$ r1; $13 \\div 6 = 2$ r1; $18 \\div 6 = 3$. So $738 \\div 6 = 123$. Check: $123 \\times 6 = 738$ ✓.',
            },
            {
              question: 'What is $645 \\div 8$?',
              options: ['$80$ R $5$', '$80$ R $8$', '$8$ R $5$', '$81$ R $3$'],
              correctAnswer: 0,
              explanation: '$8 \\times 80 = 640$, and $645 - 640 = 5$. So $645 \\div 8 = 80$ R $5$. (The remainder 5 is less than the divisor 8 ✓, and a 0 belongs in the ones place of the quotient.)',
            },
            {
              question: '54 campers ride in canoes that each hold 4 campers. How many canoes are needed so **every** camper has a seat?',
              options: ['$14$ canoes', '$13$ canoes', '$2$ canoes', '$54$ canoes'],
              correctAnswer: 0,
              explanation: '$54 \\div 4 = 13$ R $2$. Thirteen canoes seat 52 campers; 2 are still waiting, so a 14th canoe is needed. Round **up** to **14**.',
            },
          ],
        },
      },
    ],
  },
]
