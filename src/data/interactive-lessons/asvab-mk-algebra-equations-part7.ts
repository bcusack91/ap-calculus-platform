export const asvabMkAlgebraEquationsPart7Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle7-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 7 of 7 — Mixed Mastery Set**

### How to Use This Set

Twelve questions from every part of this lesson, mixed the way the ASVAB mixes them: a few quick ones, several medium ones and a few that take more steps.

- Give yourself about **2 minutes per question**, the CAT-ASVAB pace for MK.
- Use scratch paper, no calculator.
- **Check** each answer before you move on, just as you would on the real test where you can't go back.

| Skill | Where it was taught |
|:---|:---:|
| Substitution and simplifying | Part 1 |
| Solving equations and formulas | Part 2 |
| Word problems | Part 3 |
| Inequalities | Part 4 |
| Systems | Part 5 |
| Traps and "answer what's asked" | Part 6 |`
    },
    {
      id: 'mkle7-set-a',
      type: 'multiple-choice' as const,
      content: '**Set A — warm up.** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $k = -3$, what is the value of $2k^2 - k$?',
            options: ['$15$', '$21$', '$-15$', '$39$'],
            correctAnswer: 1,
            explanation: '$2(-3)^2 - (-3) = 2(9) + 3 = 21$. Subtracting $3$ instead of adding gives $15$; squaring to $-9$ gives $-15$; squaring $2k$ instead of $k$ gives $36 + 3 = 39$.'
          },
          {
            question: 'Six more than a number is equal to four times the number. What is the number?',
            options: ['$2$', '$\\frac{6}{5}$', '$-2$', '$\\frac{3}{2}$'],
            correctAnswer: 0,
            explanation: '$n + 6 = 4n$, so $6 = 3n$ and $n = 2$. Check: $2 + 6 = 8 = 4(2)$ ✓. Adding $n$ to $4n$ instead of subtracting gives $\\frac{6}{5}$; dropping the $n$ on the left gives $\\frac{3}{2}$.'
          }
        ]
      }
    },
    {
      id: 'mkle7-set-b',
      type: 'multiple-choice' as const,
      content: '**Set B — the core.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve for $x$: $7(x - 1) = 3x + 13$',
            options: ['$3.5$', '$5$', '$2$', '$1.5$'],
            correctAnswer: 1,
            explanation: '$7x - 7 = 3x + 13$, so $4x = 20$ and $x = 5$. Writing $7x - 1$ (distributing to $x$ only) leads to $4x = 14$, or $3.5$.'
          },
          {
            question: 'Solve: $-3x + 2 > 14$',
            options: ['$x > -4$', '$x < 4$', '$x < -4$', '$x > -\\frac{16}{3}$'],
            correctAnswer: 2,
            explanation: 'Subtract $2$: $-3x > 12$. Divide by $-3$ and flip: $x < -4$. Keeping the sign gives $x > -4$; adding $2$ instead of subtracting gives the $-\\frac{16}{3}$ value.'
          },
          {
            question: 'The perimeter of a rectangle is $P = 2(l + w)$. Which equation is solved for $l$?',
            options: ['$l = \\frac{P - w}{2}$', '$l = 2P - w$', '$l = \\frac{P}{2} + w$', '$l = \\frac{P}{2} - w$'],
            correctAnswer: 3,
            explanation: 'Divide both sides by $2$: $\\frac{P}{2} = l + w$. Subtract $w$: $l = \\frac{P}{2} - w$. Check with $l = 5$, $w = 3$: $P = 16$ and $8 - 3 = 5$ ✓.'
          },
          {
            question: 'If $x + 2y = 11$ and $x - y = 2$, what is the value of $x$?',
            options: ['$3$', '$5$', '$7$', '$\\frac{13}{3}$'],
            correctAnswer: 1,
            explanation: 'Subtract the second equation from the first: $3y = 9$, so $y = 3$. Then $x - 3 = 2$ gives $x = 5$. Check: $5 + 6 = 11$ ✓. The value $3$ is $y$.'
          }
        ]
      }
    },
    {
      id: 'mkle7-set-c',
      type: 'multiple-choice' as const,
      content: '**Set C — more steps.** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $2(3x - 1) = 22$, what is the value of $3x + 5$?',
            options: ['$9$', '$17$', '$12$', '$29$'],
            correctAnswer: 1,
            explanation: '$6x - 2 = 22$, so $6x = 24$ and $3x = 12$. Then $3x + 5 = 17$. The value $12$ is $3x$, $9$ is $x + 5$, and $29$ is $6x + 5$.'
          },
          {
            question: 'The sum of three consecutive odd integers is $75$. What is the largest of the three?',
            options: ['$25$', '$23$', '$27$', '$26$'],
            correctAnswer: 2,
            explanation: '$n + (n + 2) + (n + 4) = 75$, so $3n + 6 = 75$, $3n = 69$ and $n = 23$. The integers are $23, 25, 27$; the largest is $27$. The value $25$ is the middle one.'
          },
          {
            question: 'A recruit needs an average of at least $85$ on four fitness tests. Her first three scores are $78$, $88$ and $82$. What is the lowest score she can get on the fourth test?',
            options: ['$92$', '$85$', '$90$', '$88$'],
            correctAnswer: 0,
            explanation: '$\\frac{78 + 88 + 82 + s}{4} \\ge 85$ means $248 + s \\ge 340$, so $s \\ge 92$. The first three scores average below $85$ (their total is $248$, short of $3 \\cdot 85 = 255$), so the fourth score has to make up the gap: $85$ itself is not enough.'
          },
          {
            question: 'A store sells caps for 12 dollars and shirts for 20 dollars. It sold $15$ items for a total of 236 dollars. How many shirts did it sell?',
            options: ['$8$', '$9$', '$6$', '$7$'],
            correctAnswer: 3,
            explanation: '$c + s = 15$ and $12c + 20s = 236$. Substitute $c = 15 - s$: $180 - 12s + 20s = 236$, so $8s = 56$ and $s = 7$. Check: $8$ caps and $7$ shirts give $96 + 140 = 236$ ✓.'
          }
        ]
      }
    },
    {
      id: 'mkle7-input',
      type: 'input-boxes' as const,
      content: `**Finish strong.** ✍️ Solve for $x$. Fractions are fine.

**1)** $4 - (x + 5) = 2x$

**2)** $\\frac{x}{4} - 1 = \\frac{x}{6}$`,
      exercise: {
        boxes: 2,
        correctAnswers: ['-1/3', '12'],
        hint1: 'The minus sign in front of the parentheses changes both signs: $4 - x - 5$.',
        hint2: 'For (2), multiply every term by $12$.',
        hint3: '(2) becomes $3x - 12 = 2x$.',
        explanation: '(1) $4 - x - 5 = 2x$, so $-1 - x = 2x$, $-1 = 3x$ and $x = -\\frac{1}{3}$. (2) Multiply by $12$: $3x - 12 = 2x$, so $x = 12$. Check: $3 - 1 = 2$ ✓.'
      }
    },
    {
      id: 'mkle7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Linear Equations and Inequalities

- **Substitute** with parentheses; **distribute** to every term, signs included
- **Solve** with the same move on both sides: distribute → combine → move → divide → check
- **Translate** words phrase by phrase; "less than" switches the order
- **Inequalities** solve like equations, except the sign **flips** when you multiply or divide by a negative
- **Systems:** substitution when a letter is already alone, elimination when coefficients match
- On the CAT-ASVAB you have about **2 minutes per MK question** and no going back: solve, check, answer what was asked

> **Next step:** take the exit quiz for this topic. Anything you miss sends you back to the part that teaches it.`
    }
  ]
};
