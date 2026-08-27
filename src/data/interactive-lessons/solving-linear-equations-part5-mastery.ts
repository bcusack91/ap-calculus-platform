export const solvingLinearEquationsPart5Data = {
  topicSlug: 'solving-linear-equations-algebra1',
  sections: [
    {
      id: 'mastery-intro',
      type: 'text' as const,
      content: `
**Part 5: Mastery Challenge** 🏆

This is the final test! You'll face a comprehensive quiz covering **everything** from Parts 1–4:

- ✅ One-step equations
- ✅ Two-step equations
- ✅ Multi-step equations with distribution
- ✅ Variables on both sides
- ✅ Fraction and decimal equations
- ✅ Special cases (no solution / infinite solutions)
- ✅ Word problems

**Your goal:** Score **80% or higher** to demonstrate mastery and unlock **Competitive Mode**, where you can test your skills against other students in real-time!

Take your time, show your work on paper if needed, and remember: **check your answers!**
      `
    },
    {
      id: 'mastery-warmup',
      type: 'input-boxes' as const,
      content: `
**Warm-Up Round** 🔥

Quick review before the big quiz. Solve each equation.

1) $x - 14 = -6$

2) $-5x = 45$

3) $\\frac{x}{7} + 3 = 10$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '-9', '49'],
        hint1: 'Add 14 to both sides.',
        hint2: 'Divide both sides by $-5$. Watch the sign!',
        hint3: 'Subtract 3 first: $\\frac{x}{7} = 7$. Then multiply by 7.',
        explanation: '1) $x = -6 + 14 = 8$. 2) $x = 45 \\div (-5) = -9$. 3) $\\frac{x}{7} = 7 \\Rightarrow x = 49$.'
      }
    },
    {
      id: 'mastery-quiz-section1',
      type: 'multiple-choice' as const,
      content: `
**Mastery Quiz — Part A: Core Skills** 📝

Answer each question carefully. These cover the foundational skills.
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $3x + 7 = -8$',
            options: [
              '$x = -5$',
              '$x = 5$',
              '$x = -\\frac{1}{3}$',
              '$x = \\frac{1}{3}$'
            ],
            correctAnswer: 0,
            explanation: 'Subtract 7: $3x = -15$. Divide by 3: $x = -5$. Check: $3(-5) + 7 = -15 + 7 = -8$ ✓'
          },
          {
            question: 'Solve: $\\frac{x}{-6} = 8$',
            options: [
              '$x = 48$',
              '$x = -48$',
              '$x = -\\frac{4}{3}$',
              '$x = 14$'
            ],
            correctAnswer: 1,
            explanation: 'Multiply both sides by $-6$: $x = 8 \\times (-6) = -48$. Check: $\\frac{-48}{-6} = 8$ ✓'
          },
          {
            question: 'Solve: $4(x - 3) = 2(x + 5)$',
            options: [
              '$x = 8$',
              '$x = 1$',
              '$x = 11$',
              '$x = -1$'
            ],
            correctAnswer: 2,
            explanation: 'Distribute: $4x - 12 = 2x + 10$. Subtract $2x$: $2x - 12 = 10$. Add 12: $2x = 22$. Divide: $x = 11$. Check: $4(11-3) = 4(8) = 32$ and $2(11+5) = 2(16) = 32$ ✓'
          },
          {
            question: 'Solve: $7x - 3 = 4x + 12$',
            options: [
              '$x = 5$',
              '$x = 3$',
              '$x = -5$',
              '$x = \\frac{9}{11}$'
            ],
            correctAnswer: 0,
            explanation: 'Subtract $4x$: $3x - 3 = 12$. Add 3: $3x = 15$. Divide: $x = 5$. Check: $7(5) - 3 = 32$ and $4(5) + 12 = 32$ ✓'
          },
          {
            question: 'What is the first step to solve $\\frac{x}{3} + \\frac{2x}{5} = 11$?',
            options: [
              'Subtract $\\frac{2x}{5}$ from both sides',
              'Multiply every term by 15 (the LCD)',
              'Divide both sides by $x$',
              'Cross-multiply'
            ],
            correctAnswer: 1,
            explanation: 'The LCD of 3 and 5 is 15. Multiply every term by 15 to clear all fractions: $5x + 6x = 165$, giving $11x = 165$ and $x = 15$.'
          }
        ]
      }
    },
    {
      id: 'mastery-computation',
      type: 'input-boxes' as const,
      content: `
**Mastery Quiz — Part B: Computation** 🧮

These require careful multi-step work. Solve each equation.

1) $5(x + 3) = 2(x + 6) + 12$

2) $\\frac{3x + 2}{4} = \\frac{x - 6}{2}$

3) $0.4x - 1.2 = 0.1x + 0.6$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-14', '6'],
        hint1: 'Distribute: $5x + 15 = 2x + 12 + 12$. Simplify: $5x + 15 = 2x + 24$. Subtract $2x$.',
        hint2: 'LCD is 4. Multiply both sides by 4: $3x + 2 = 2(x - 6) = 2x - 12$. Then solve: $x = -14$.',
        hint3: 'Multiply everything by 10: $4x - 12 = x + 6$. Subtract $x$: $3x - 12 = 6$. Add 12: $3x = 18$.',
        explanation: '1) $5x + 15 = 2x + 24 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. Check: $5(6) = 30$ and $2(9)+12 = 30$ ✓. 2) $3x + 2 = 2x - 12 \\Rightarrow x = -14$. Check: $\\frac{-40}{4} = -10$ and $\\frac{-20}{2} = -10$ ✓. 3) $4x - 12 = x + 6 \\Rightarrow 3x = 18 \\Rightarrow x = 6$. Check: $2.4 - 1.2 = 1.2$ and $0.6 + 0.6 = 1.2$ ✓.'
      }
    },
    {
      id: 'mastery-quiz-section2',
      type: 'multiple-choice' as const,
      content: `
**Mastery Quiz — Part C: Advanced Concepts** 🧠

These test deeper understanding — not just mechanics.
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation has no solution?',
            options: [
              '$2x + 3 = 2x + 3$',
              '$4x - 1 = 4x + 5$',
              '$3x + 2 = 5x - 6$',
              '$x + 1 = 2x$'
            ],
            correctAnswer: 1,
            explanation: '$4x - 1 = 4x + 5$: Subtract $4x$: $-1 = 5$. This is never true — contradiction. No solution.'
          },
          {
            question: 'Which equation is an identity (true for all values of $x$)?',
            options: [
              '$5x = 5x + 1$',
              '$2(x + 3) = 2x + 6$',
              '$3x = 6$',
              '$x + 1 = x - 1$'
            ],
            correctAnswer: 1,
            explanation: '$2(x+3) = 2x + 6$ simplifies to $2x + 6 = 2x + 6$, which is always true. Every value of $x$ satisfies this equation.'
          },
          {
            question: 'The sum of two consecutive even integers is 54. What is the larger integer?',
            options: [
              '26',
              '27',
              '28',
              '30'
            ],
            correctAnswer: 2,
            explanation: 'Let $n$ = first even integer, $n + 2$ = next even integer. $n + (n+2) = 54$. $2n + 2 = 54$. $2n = 52$. $n = 26$. Larger = $28$. Check: $26 + 28 = 54$ ✓'
          },
          {
            question: 'A student solves $3(x + 2) = 15$ and writes: Step 1: $3x + 2 = 15$. Step 2: $3x = 13$. Step 3: $x = \\frac{13}{3}$. What is the error?',
            options: [
              'Step 2 is wrong — should subtract 2 from 15',
              'Step 1 is wrong — should distribute: $3x + 6 = 15$',
              'Step 3 is wrong — should multiply by 3, not divide',
              'There is no error'
            ],
            correctAnswer: 1,
            explanation: 'The student forgot to distribute 3 to BOTH terms inside the parentheses. Correct: $3(x+2) = 3x + 6 = 15$, so $3x = 9$, $x = 3$.'
          },
          {
            question: 'Solve: $\\frac{x - 1}{3} = \\frac{x + 5}{9}$',
            options: [
              '$x = 4$',
              '$x = -4$',
              '$x = 2$',
              '$x = 8$'
            ],
            correctAnswer: 0,
            explanation: 'LCD = 9. Multiply all terms by 9: $3(x-1) = x + 5$. Distribute: $3x - 3 = x + 5$. Subtract $x$: $2x - 3 = 5$. Add 3: $2x = 8$. $x = 4$. Check: $\\frac{3}{3} = 1$ and $\\frac{9}{9} = 1$ ✓'
          },
          {
            question: 'A plumber charges a \\$50 service fee plus \\$35 per hour. If the total bill was \\$225, which equation finds the number of hours $h$?',
            options: [
              '$50h + 35 = 225$',
              '$35h + 50 = 225$',
              '$35h - 50 = 225$',
              '$85h = 225$'
            ],
            correctAnswer: 1,
            explanation: 'The \\$50 fee is fixed (added once), and the \\$35 rate multiplies the hours: \\$35h + 50 = 225$. Solving: \\$35h = 175$, $h = 5$ hours.'
          }
        ]
      }
    },
    {
      id: 'mastery-final-round',
      type: 'input-boxes' as const,
      content: `
**Final Round — Prove Your Mastery** 💪

These are the toughest problems. Solve each equation.

1) $2(3x + 1) - (x - 3) = 3(x + 5)$

2) $\\frac{5x - 3}{6} + 1 = \\frac{x + 3}{2}$

3) $0.25(x - 4) + 0.5x = 2.75$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '5'],
        hint1: 'Distribute: $6x + 2 - x + 3 = 3x + 15$. Simplify left: $5x + 5 = 3x + 15$. Subtract $3x$.',
        hint2: 'LCD = 6. Multiply all terms by 6: $(5x - 3) + 6 = 3(x + 3)$. So $5x + 3 = 3x + 9$.',
        hint3: 'Distribute: $0.25x - 1 + 0.5x = 2.75$. Combine: $0.75x - 1 = 2.75$. Add 1: $0.75x = 3.75$.',
        explanation: '1) $5x + 5 = 3x + 15 \\Rightarrow 2x = 10 \\Rightarrow x = 5$. Check: $2(16)-(2) = 30$ and $3(10) = 30$ ✓. 2) $5x + 3 = 3x + 9 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Check: $\\frac{12}{6}+1 = 3$ and $\\frac{6}{2} = 3$ ✓. 3) $0.75x = 3.75 \\Rightarrow x = 5$. Check: $0.25(1)+2.5 = 0.25+2.5 = 2.75$ ✓.'
      }
    },
    {
      id: 'mastery-complete',
      type: 'text' as const,
      content: `
**🎉 Congratulations — You've Mastered Solving Linear Equations! 🎉**

You've completed all 5 parts and proven your mastery of one of algebra's most important skills.

**What You've Learned:**
- ✅ One-step equations (addition, subtraction, multiplication, division)
- ✅ Two-step equations (reverse order of operations)
- ✅ Multi-step equations (distribute, combine like terms)
- ✅ Variables on both sides
- ✅ Clearing fractions and decimals
- ✅ Special cases (no solution & infinite solutions)
- ✅ Setting up and solving word problems

**🏆 Competitive Mode Unlocked!**

You're now ready to compete! Head to Competitive Mode to test your equation-solving speed against other students in real-time challenges.

**Keep Practicing:** The more equations you solve, the faster and more accurate you'll become. These skills are the foundation for everything that comes next in algebra!
      `
    }
  ]
}
