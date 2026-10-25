export const asvabMkNumberPropertiesPart6Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp6-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock

On the CAT-ASVAB, MK gives you **31 minutes for 15 questions**, about **2 minutes each**. (The paper version is tighter: 25 questions in 24 minutes, about 1 minute each.) Number-property questions are usually the fastest on the subtest. Aim to finish them in under a minute so you bank time for geometry and word-heavy algebra.

### How the Wrong Answers Are Built

The three wrong choices are rarely random. Each one is the answer you get from a **specific mistake**. If you know the mistakes, you can spot the traps.

| Question type | Trap choice comes from |
|:---|:---|
| Order of operations | working strictly left to right, or doing $\\times$ before $\\div$ when $\\div$ comes first |
| Signs | treating $a - (-b)$ as $a - b$; losing track of how many negatives |
| Exponents | multiplying base by exponent ($3^4 \\to 12$); multiplying exponents when you should add |
| Negative exponent | making the answer negative ($2^{-3} \\to -8$) |
| $-a^2$ vs $(-a)^2$ | squaring the negative sign when there are no parentheses |
| GCF / LCM | giving the other one; giving the plain product |
| Primes | calling $1$, $51$, $57$ or $91$ prime; forgetting $2$ is prime |
| Roots | splitting $\\sqrt{a + b}$ into $\\sqrt{a} + \\sqrt{b}$; halving instead of rooting |
| Scientific notation | front number not between $1$ and $10$; wrong sign on the exponent |

### Five Habits That Save Points

1. **Write every step on scratch paper.** Sign errors happen in your head, not on paper.
2. **Estimate first.** If $\\sqrt{130}$ must be a little more than $11$, any choice near $65$ is out.
3. **Plug in small numbers** for "which must be even/odd/positive" questions. Try $1$, $2$, $-1$, and $0$ if it is allowed.
4. **Check the other direction.** After finding a root, square it. After a factorization, multiply it back.
5. **Answer every question genuinely.** You can't go back on the CAT, and the official guidance is that a string of wrong answers at the end of a subtest carries a relatively large penalty, so keep working real answers even when time is short rather than clicking at random.

> **Key Fact:** Some questions may be unscored tryouts, and you can't tell which. Treat every question as if it counts.`
    },
    {
      id: 'mknp6-mc-traps',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯 Each question asks which mistake produces a choice.',
      exercise: {
        questions: [
          {
            question: 'For $30 - 6 \\div 2 \\cdot 3$, a student picks $29$. Which mistake gives $29$?',
            options: ['Multiplying $2 \\cdot 3$ before dividing', 'Subtracting $30 - 6$ first', 'Adding instead of subtracting', 'Squaring the $3$ by accident'],
            correctAnswer: 0,
            explanation: 'Doing $2 \\cdot 3 = 6$ first gives $6 \\div 6 = 1$ and $30 - 1 = 29$. Correct order is left to right: $6 \\div 2 = 3$, $3 \\cdot 3 = 9$, $30 - 9 = 21$.'
          },
          {
            question: 'A question asks for $4^{-2}$. Which answer choice is the trap built from treating the exponent as a sign?',
            options: ['$\\frac{1}{16}$', '$-16$', '$16$', '$\\frac{1}{8}$'],
            correctAnswer: 1,
            explanation: '$-16$ comes from thinking a negative exponent makes the number negative. The correct value is $\\frac{1}{4^2} = \\frac{1}{16}$; $\\frac{1}{8}$ comes from multiplying $4 \\cdot 2$.'
          },
          {
            question: 'Two signals flash every $6$ and $8$ seconds. A student answers $48$ seconds for when they next flash together. What went wrong?',
            options: ['Nothing; $48$ is correct', 'The student found the GCF instead', 'The student multiplied instead of finding the LCM', 'The student added the two times'],
            correctAnswer: 2,
            explanation: '$6 \\cdot 8 = 48$ is a common multiple, but the LCM is $24$ ($6 = 2 \\cdot 3$, $8 = 2^3$, so $2^3 \\cdot 3$). The product equals the LCM only when the numbers share no factors.'
          }
        ]
      }
    },
    {
      id: 'mknp6-mc-fast',
      type: 'multiple-choice' as const,
      content: '**Work smart, not long.** 🎯 Use estimating or plugging in.',
      exercise: {
        questions: [
          {
            question: 'Which is closest to $\\sqrt{150}$?',
            options: ['$75$', '$15.0$', '$11.2$', '$12.2$'],
            correctAnswer: 3,
            explanation: '$12^2 = 144$ and $13^2 = 169$, so $\\sqrt{150}$ is a little over $12$. Only $12.2$ fits ($12.2^2 = 148.84$). $75$ is half of $150$, and $15$ would square to $225$.'
          },
          {
            question: 'If $n$ is a negative integer, which expression must be positive?',
            options: ['$n^3$', '$2n$', '$n^2$', '$n + 1$'],
            correctAnswer: 2,
            explanation: 'Try $n = -1$: $n^2 = 1$ (positive), $n^3 = -1$, $2n = -2$, $n + 1 = 0$. Any negative number squared is positive.'
          }
        ]
      }
    },
    {
      id: 'mknp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each wrong answer to its mistake.** 🔽 The question was: evaluate $(-3)^2 + 2^3$. The correct answer is $17$.',
      exercise: {
        dropdowns: [
          {
            label: 'A student answered $-1$. The mistake was:',
            options: ['treating $(-3)^2$ as $-9$', 'computing $2^3$ as $6$', 'adding the bases first', 'computing $(-3)^2$ as $6$'],
            correctAnswer: 0
          },
          {
            label: 'A student answered $15$. The mistake was:',
            options: ['treating $(-3)^2$ as $-9$', 'computing $2^3$ as $6$', 'adding the bases first', 'computing $(-3)^2$ as $-6$'],
            correctAnswer: 1
          },
          {
            label: 'A third student added $-3 + 2$ first and only then tried to apply the exponents. The rule broken was:',
            options: ['exponents come before addition', 'subtraction comes before addition', 'roots come before exponents', 'multiplication comes before division'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['treating $(-3)^2$ as $-9$', 'computing $2^3$ as $6$', 'exponents come before addition'],
        hint1: '$-9 + 8 = ?$',
        hint2: '$9 + 6 = ?$',
        hint3: 'In PEMDAS, where do exponents sit relative to addition?',
        explanation: '$-9 + 8 = -1$, so that student dropped the parentheses and squared only the $3$. $9 + 6 = 15$, so that student multiplied $2 \\cdot 3$ instead of cubing. Adding the bases before applying exponents breaks the order of operations: exponents come first.'
      }
    },
    {
      id: 'mknp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes per MK question** on the CAT; number questions should take less
- Wrong choices come from **predictable mistakes**: left-to-right only, sign slips, base × exponent, GCF/LCM swaps, splitting roots
- **Estimate** to eliminate, **plug in** small numbers for "must be" questions, **check backward**
- No going back on the CAT: answer each question for real and keep a steady pace

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`
    }
  ]
};
