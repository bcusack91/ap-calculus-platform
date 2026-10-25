export const asvabMkNumberPropertiesPart7Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp7-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 7 of 7 — Mixed Mastery Set**

Twelve questions from every part of this lesson, in the mix you'll see on the real MK subtest: a few quick ones, a solid middle, and a few that take real care.

**Test conditions:** no calculator, scratch paper only, and aim for about **2 minutes per question**. Work each one fully before you look at the explanation, just as you would on the CAT, where you can't go back.`
    },
    {
      id: 'mknp7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Set A.** 🎯 Warm-up level.',
      exercise: {
        questions: [
          {
            question: 'Which number is both even and prime?',
            options: ['$1$', '$4$', '$9$', '$2$'],
            correctAnswer: 3,
            explanation: '$2$ has exactly two factors, $1$ and $2$, and it is even. It is the only even prime. $1$ is not prime, $4 = 2 \\cdot 2$ and $9$ is odd.'
          },
          {
            question: 'Evaluate $12 - 8 \\div 4 + 1$.',
            options: ['$2$', '$11$', '$9$', '$13$'],
            correctAnswer: 1,
            explanation: 'Divide first: $8 \\div 4 = 2$. Then left to right: $12 - 2 + 1 = 11$. Working left to right from the start gives $2$; adding $4 + 1$ before subtracting gives $9$.'
          },
          {
            question: 'What is $\\sqrt{169}$?',
            options: ['$13$', '$84.5$', '$17$', '$14$'],
            correctAnswer: 0,
            explanation: '$13 \\cdot 13 = 169$. Half of $169$ is $84.5$, which is not a square root; $14^2 = 196$.'
          }
        ]
      }
    },
    {
      id: 'mknp7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Set B.** 🎯 Typical MK level.',
      exercise: {
        questions: [
          {
            question: 'What is the greatest common factor of $36$ and $60$?',
            options: ['$6$', '$180$', '$12$', '$4$'],
            correctAnswer: 2,
            explanation: '$36 = 2^2 \\cdot 3^2$ and $60 = 2^2 \\cdot 3 \\cdot 5$. Shared, with smaller powers: $2^2 \\cdot 3 = 12$. $6$ and $4$ are common factors but not the greatest; $180$ is the LCM.'
          },
          {
            question: 'What is $(-2)^3 - (-2)^2$?',
            options: ['$-4$', '$-12$', '$4$', '$12$'],
            correctAnswer: 1,
            explanation: '$(-2)^3 = -8$ and $(-2)^2 = 4$. Then $-8 - 4 = -12$. Getting $-4$ means $(-2)^2$ was treated as $-4$.'
          },
          {
            question: 'Write $3.6 \\times 10^{-4}$ as a decimal.',
            options: ['$0.0036$', '$0.000036$', '$36{,}000$', '$0.00036$'],
            correctAnswer: 3,
            explanation: 'A negative exponent moves the decimal point left: four places from $3.6$ gives $0.00036$. Moving right gives $36{,}000$; three or five places give the other two.'
          },
          {
            question: 'Simplify $2^5 \\cdot 2^{-2}$.',
            options: ['$8$', '$\\frac{1}{8}$', '$-8$', '$\\frac{1}{1{,}024}$'],
            correctAnswer: 0,
            explanation: 'Add the exponents: $5 + (-2) = 3$, so $2^3 = 8$. Multiplying the exponents gives $2^{-10} = \\frac{1}{1{,}024}$.'
          }
        ]
      }
    },
    {
      id: 'mknp7-mc-c',
      type: 'multiple-choice' as const,
      content: '**Set C.** 🎯 The harder end of the subtest.',
      exercise: {
        questions: [
          {
            question: 'Simplify $\\sqrt{50} + \\sqrt{18}$.',
            options: ['$\\sqrt{68}$', '$2\\sqrt{17}$', '$8\\sqrt{2}$', '$15\\sqrt{2}$'],
            correctAnswer: 2,
            explanation: '$\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$, so the sum is $8\\sqrt{2}$. $\\sqrt{68} = 2\\sqrt{17}$ comes from adding under one root, which is not allowed; $15\\sqrt{2}$ multiplies $5 \\cdot 3$.'
          },
          {
            question: 'For which value of $n$ is $n^2 < n$?',
            options: ['$-2$', '$\\frac{1}{2}$', '$0$', '$2$'],
            correctAnswer: 1,
            explanation: '$\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, which is less than $\\frac{1}{2}$. Squaring a number between $0$ and $1$ makes it smaller. $(-2)^2 = 4 > -2$, $0^2 = 0$ is equal, and $2^2 = 4 > 2$.'
          },
          {
            question: 'What is $\\dfrac{(4 \\times 10^6)(5 \\times 10^{-3})}{2 \\times 10^2}$?',
            options: ['$1 \\times 10^3$', '$1 \\times 10^1$', '$4 \\times 10^{-1}$', '$1 \\times 10^2$'],
            correctAnswer: 3,
            explanation: 'Top: $20 \\times 10^3$. Divide by $2 \\times 10^2$: $10 \\times 10^1 = 1 \\times 10^2$, which is $100$. Forgetting to rewrite $10 \\times 10^1$ correctly leads to the $10^3$ or $10^1$ choices.'
          },
          {
            question: 'Evaluate $\\lvert -6 + 2 \\rvert - 2\\lvert 3 - 9 \\rvert$.',
            options: ['$-8$', '$-4$', '$16$', '$8$'],
            correctAnswer: 0,
            explanation: 'Inside the bars: $\\lvert -4 \\rvert = 4$ and $\\lvert -6 \\rvert = 6$. Multiply before subtracting: $4 - 2 \\cdot 6 = 4 - 12 = -8$. Grouping the wrong way, $(4 - 6) \\cdot 2$, gives $-4$, and adding the two parts instead of subtracting gives $16$.'
          }
        ]
      }
    },
    {
      id: 'mknp7-input',
      type: 'input-boxes' as const,
      content: `**Last one.** ✍️

**1)** What is the smallest positive whole number that is divisible by $2$, $3$, $4$ and $5$?`,
      exercise: {
        boxes: 1,
        correctAnswers: ['60'],
        hint1: 'You want the LCM of all four numbers.',
        hint2: '$4 = 2^2$, so use $2^2$, plus $3$ and $5$.',
        hint3: '$2^2 \\cdot 3 \\cdot 5 = ?$',
        explanation: 'The LCM uses every prime with its largest power: $2^2 \\cdot 3 \\cdot 5 = 60$. Multiplying all four numbers ($120$) gives a common multiple, but not the smallest.'
      }
    },
    {
      id: 'mknp7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Number Properties, Exponents and Roots

- **Number types:** whole, integer, rational, irrational; $0$ is even; $2$ is the only even prime
- **GCF** = shared primes, smaller powers; **LCM** = all primes, larger powers
- **PEMDAS** with left-to-right pairs; fraction bars and absolute value bars group
- **Signs:** subtracting a negative adds; count the negatives in a product
- **Exponents:** add when multiplying, subtract when dividing, multiply for a power of a power; $a^0 = 1$; $a^{-n} = \\frac{1}{a^n}$
- **Scientific notation:** front number from $1$ to under $10$
- **Roots:** largest perfect square factor; only like radicals add; $\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}$

> **Next:** take the exit quiz for this topic, then move on to Linear Equations and Inequalities.`
    }
  ]
};
