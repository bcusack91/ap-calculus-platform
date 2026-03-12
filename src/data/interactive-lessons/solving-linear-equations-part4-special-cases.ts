export const solvingLinearEquationsPart4Data = {
  topicSlug: 'solving-linear-equations-algebra1',
  sections: [
    {
      id: 'part4-intro',
      type: 'text' as const,
      content: `
**Part 4: Special Cases, Fractions, & Real-World Applications** 🌍

So far, every equation we've solved had exactly **one solution**. But not all equations work that way!

In this part, you'll learn:
- 📐 How to clear fractions and decimals from equations
- 🚫 Equations with **no solution** (contradictions)
- ♾️ Equations with **infinitely many solutions** (identities)
- 🌎 Translating real-world problems into equations
      `
    },
    {
      id: 'clearing-fractions',
      type: 'text' as const,
      content: `
**Clearing Fractions — The LCD Method** 🔧

Fractions make equations look scary, but there's a simple trick: **multiply every term by the Least Common Denominator (LCD)** to eliminate all fractions at once.

**Example 1:** Solve $\\frac{x}{3} + \\frac{x}{4} = 7$

**Step 1: Find the LCD** of 3 and 4 → LCD = 12

**Step 2: Multiply EVERY term by 12**
$$12 \\cdot \\frac{x}{3} + 12 \\cdot \\frac{x}{4} = 12 \\cdot 7$$
$$4x + 3x = 84$$

**Step 3: Solve the simpler equation**
$$7x = 84$$
$$x = 12$$

**Check:** $\\frac{12}{3} + \\frac{12}{4} = 4 + 3 = 7$ ✓

---

**Example 2:** Solve $\\frac{2x - 1}{5} = \\frac{x + 3}{2}$

**LCD** of 5 and 2 → LCD = 10

**Multiply every term by 10:**
$$10 \\cdot \\frac{2x - 1}{5} = 10 \\cdot \\frac{x + 3}{2}$$
$$2(2x - 1) = 5(x + 3)$$
$$4x - 2 = 5x + 15$$

**Solve:**
$$-2 - 15 = 5x - 4x$$
$$-17 = x$$

**Check:** $\\frac{2(-17)-1}{5} = \\frac{-35}{5} = -7$. $\\frac{-17+3}{2} = \\frac{-14}{2} = -7$ ✓

**The LCD method turns fraction equations into regular equations you already know how to solve!**
      `
    },
    {
      id: 'fraction-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Clearing Fractions** 🧮

Solve each equation using the LCD method.

1) $\\frac{x}{2} + \\frac{x}{5} = 14$

2) $\\frac{3x + 1}{4} = 7$

3) $\\frac{x - 3}{2} = \\frac{x + 1}{6}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '9', '5'],
        hint1: 'LCD of 2 and 5 is 10. Multiply all terms by 10: $5x + 2x = 140$.',
        hint2: 'Multiply both sides by 4: $3x + 1 = 28$. Then subtract 1 and divide by 3.',
        hint3: 'LCD of 2 and 6 is 6. $6 \\cdot \\frac{x-3}{2} = 6 \\cdot \\frac{x+1}{6}$. So $3(x-3) = x + 1$. Distribute: $3x - 9 = x + 1$.',
        explanation: '1) $5x + 2x = 140 \\Rightarrow 7x = 140 \\Rightarrow x = 20$. 2) $3x + 1 = 28 \\Rightarrow 3x = 27 \\Rightarrow x = 9$. 3) $3x - 9 = x + 1 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.'
      }
    },
    {
      id: 'special-cases-intro',
      type: 'text' as const,
      content: `
**Special Cases: No Solution & Infinite Solutions** 🤔

Not every equation has exactly one answer. Sometimes strange things happen when you solve…

---

**No Solution (Contradiction):**

Solve $2(x + 3) = 2x + 10$

$$2x + 6 = 2x + 10$$

Subtract $2x$ from both sides:

$$6 = 10$$

This is **never true**! No value of $x$ can make $6 = 10$.

**Answer: No solution.** The equation is a **contradiction**.

*Visually: the lines $y = 2x + 6$ and $y = 2x + 10$ are parallel — they never intersect.*

---

**Infinite Solutions (Identity):**

Solve $3(x + 2) = 3x + 6$

$$3x + 6 = 3x + 6$$

Subtract $3x$:

$$6 = 6$$

This is **always true**! Every value of $x$ works.

**Answer: All real numbers.** The equation is an **identity**.

*Visually: $y = 3x + 6$ and $y = 3x + 6$ are the same line — they overlap everywhere.*
      `
    },
    {
      id: 'special-cases-quiz',
      type: 'multiple-choice' as const,
      content: `
**Identify the Type of Equation** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What type of equation is $4x + 5 = 4x + 5$?',
            options: [
              'One solution',
              'No solution (contradiction)',
              'Infinitely many solutions (identity)',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'Both sides are identical! Subtracting $4x$ gives $5 = 5$, which is always true. Every value of $x$ is a solution — this is an identity.'
          },
          {
            question: 'Solve: $5x - 3 = 5x + 7$. What happens?',
            options: [
              '$x = 10$',
              '$x = 2$',
              'Infinitely many solutions',
              'No solution'
            ],
            correctAnswer: 3,
            explanation: 'Subtract $5x$: $-3 = 7$. This is never true, so there is no solution. This is a contradiction.'
          },
          {
            question: 'Solve: $2(3x - 1) + 2 = 6x$',
            options: [
              '$x = 0$',
              '$x = 1$',
              'No solution',
              'Infinitely many solutions'
            ],
            correctAnswer: 3,
            explanation: 'Distribute: $6x - 2 + 2 = 6x$. Simplify: $6x = 6x$. This is always true — identity!'
          },
          {
            question: 'Which equation has exactly one solution?',
            options: [
              '$3x + 1 = 3x + 1$',
              '$2x + 4 = 2x - 4$',
              '$5x + 2 = 3x + 10$',
              '$x - x = 1$'
            ],
            correctAnswer: 2,
            explanation: '$5x + 2 = 3x + 10$: Subtract $3x$: $2x + 2 = 10$. Subtract 2: $2x = 8$. $x = 4$. Exactly one solution. The others are either identities or contradictions.'
          }
        ]
      }
    },
    {
      id: 'decimals-clearing',
      type: 'text' as const,
      content: `
**Clearing Decimals** 💰

Decimal equations work the same way as fractions — multiply by a power of 10 to clear them.

**Example 3:** Solve $0.3x + 1.5 = 4.2$

**Multiply every term by 10** (to remove one decimal place):

$$3x + 15 = 42$$
$$3x = 27$$
$$x = 9$$

**Check:** $0.3(9) + 1.5 = 2.7 + 1.5 = 4.2$ ✓

---

**Example 4:** Solve $0.05x + 0.25 = 1.75$

**Multiply every term by 100** (to remove two decimal places):

$$5x + 25 = 175$$
$$5x = 150$$
$$x = 30$$

**Check:** $0.05(30) + 0.25 = 1.50 + 0.25 = 1.75$ ✓

**Tip:** Count the most decimal places in any term. That tells you whether to multiply by 10, 100, or 1000.
      `
    },
    {
      id: 'word-problems-setup',
      type: 'text' as const,
      content: `
**Real-World Applications** 🌎

Here's where all these skills come together. The hardest part of word problems is **setting up** the equation. Once you have the equation, you know how to solve it!

**Strategy for Word Problems:**
1. **Define your variable** — What are you solving for?
2. **Identify the relationships** — What connects the quantities?
3. **Write the equation** — Translate English into algebra
4. **Solve and check** — Does your answer make sense?

---

**Example 5: Consecutive Integers**

The sum of three consecutive integers is 72. Find the integers.

**Define:** Let $x$ = first integer. Then: $x + 1$ = second, $x + 2$ = third.

**Equation:** $x + (x+1) + (x+2) = 72$

**Solve:** $3x + 3 = 72 \\Rightarrow 3x = 69 \\Rightarrow x = 23$

**Answer:** 23, 24, 25. **Check:** $23 + 24 + 25 = 72$ ✓

---

**Example 6: Age Problem**

Maria is 5 years older than twice her brother's age. If Maria is 31, how old is her brother?

**Define:** Let $b$ = brother's age

**Equation:** $2b + 5 = 31$

**Solve:** $2b = 26 \\Rightarrow b = 13$

**Answer:** Her brother is 13. **Check:** $2(13) + 5 = 31$ ✓
      `
    },
    {
      id: 'word-problem-quiz',
      type: 'multiple-choice' as const,
      content: `
**Word Problem Practice** 📝
      `,
      exercise: {
        questions: [
          {
            question: 'A rectangle\'s length is 3 cm more than twice its width. If the perimeter is 48 cm, what is the width?',
            options: [
              '$w = 6$ cm',
              '$w = 7$ cm',
              '$w = 9$ cm',
              '$w = 14$ cm'
            ],
            correctAnswer: 1,
            explanation: 'Let $w$ = width. Length $= 2w + 3$. Perimeter $= 2(w) + 2(2w + 3) = 48$. So $2w + 4w + 6 = 48$, $6w = 42$, $w = 7$ cm. Length $= 2(7) + 3 = 17$ cm. Check: $2(7) + 2(17) = 14 + 34 = 48$ ✓'
          },
          {
            question: 'Two friends have $95 combined. Friend A has $15 more than Friend B. How much does Friend B have?',
            options: [
              '$40',
              '$45$',
              '$50',
              '$55$'
            ],
            correctAnswer: 0,
            explanation: 'Let $b$ = Friend B\'s money. Friend A $= b + 15$. Sum: $b + (b + 15) = 95$. $2b + 15 = 95$. $2b = 80$. $b = 40$. Check: B has $40, A has $55, sum = $95 ✓'
          },
          {
            question: 'A phone plan costs $30/month plus $0.10 per text. If your bill was $52, how many texts did you send?',
            options: [
              '22 texts',
              '52 texts',
              '220 texts',
              '520 texts'
            ],
            correctAnswer: 2,
            explanation: '$30 + 0.10t = 52$. $0.10t = 22$. $t = 220$ texts. Check: $30 + 0.10(220) = 30 + 22 = 52$ ✓'
          }
        ]
      }
    },
    {
      id: 'part4-exit-challenge',
      type: 'input-boxes' as const,
      content: `
**Part 4 Exit Challenge** 🏆

These are challenging — they combine everything from this part!

1) Solve: $\\frac{2x}{3} - 4 = \\frac{x}{6} + 1$ *(Use the LCD method)*

2) A number is tripled and then decreased by 8. The result equals the number increased by 12. Find the number.

3) Solve: $0.2x + 0.5 = 0.7x - 2$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '10', '5'],
        hint1: 'LCD of 3 and 6 is 6. Multiply all terms by 6: $4x - 24 = x + 6$. Then solve.',
        hint2: 'Let $n$ = the number. "Tripled and decreased by 8": $3n - 8$. "Number increased by 12": $n + 12$. Set them equal.',
        hint3: 'Multiply every term by 10 first: $2x + 5 = 7x - 20$. Then collect $x$-terms on one side.',
        explanation: '1) $4x - 24 = x + 6 \\Rightarrow 3x = 30 \\Rightarrow x = 10$. 2) $3n - 8 = n + 12 \\Rightarrow 2n = 20 \\Rightarrow n = 10$. 3) $2x + 5 = 7x - 20 \\Rightarrow 25 = 5x \\Rightarrow x = 5$.'
      }
    },
    {
      id: 'part4-complete',
      type: 'text' as const,
      content: `
**Part 4 Complete!** 🎉

You've mastered the tricky stuff — fractions, special cases, and word problems!

**Key Takeaways:**
- ✅ **LCD method** eliminates fractions — multiply every term by the LCD
- ✅ **Multiply by 10, 100, etc.** to clear decimals
- ✅ If you get a **false statement** (like $3 = 7$) → **no solution**
- ✅ If you get a **true statement** (like $5 = 5$) → **infinitely many solutions**
- ✅ Word problems: **define the variable**, set up the equation, solve, and check

**Next Up: Part 5 — Mastery Challenge**

Time to prove you've mastered it all! A comprehensive quiz covering everything from one-step equations to word problems. Score 80%+ to unlock **Competitive Mode**!
      `
    }
  ]
}
