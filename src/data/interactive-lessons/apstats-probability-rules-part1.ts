export const apStatsProbabilityPart1Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p1-intro',
      type: 'text' as const,
      content: `# 📐 Basic Probability

**Part 1 of 7 — Foundations of Probability**

---

### What Is Probability?

**Probability** measures how likely an event is to occur, expressed as a number between 0 and 1.

$$P(A) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of equally likely outcomes}}$$

| Probability | Meaning |
|:-----------:|---------|
| $P(A) = 0$ | Impossible — can never happen |
| $P(A) = 1$ | Certain — always happens |
| $0 < P(A) < 1$ | Possible — may or may not happen |

---

### Key Vocabulary

| Term | Symbol | Meaning |
|------|:------:|---------|
| **Sample space** | $S$ | Set of ALL possible outcomes |
| **Event** | $A$, $B$, etc. | A subset of the sample space |
| **Complement** | $A\\text{\'}$ or $A^c$ | Everything NOT in $A$ |
| **Union** | $A \\cup B$ | $A$ or $B$ (or both) |
| **Intersection** | $A \\cap B$ | $A$ AND $B$ (both) |

---

### Complement Rule

$$P(A\\text{\' }) = 1 - P(A)$$

> 🔑 **Key Insight:** An event and its complement always sum to 1. This is often the fastest way to solve "at least one" problems.

---

### Worked Example 1: Rolling a Die

**Find $P(\\text{even})$ on a fair six-sided die.**

- Sample space: $S = \\{1, 2, 3, 4, 5, 6\\}$ → 6 outcomes
- Favorable outcomes: $\\{2, 4, 6\\}$ → 3 outcomes

$$P(\\text{even}) = \\frac{3}{6} = 0.5$$

---

### Worked Example 2: Using the Complement

**A bag has 10 marbles: 3 red, 7 blue. Find $P(\\text{not red})$.**

$$P(\\text{not red}) = 1 - P(\\text{red}) = 1 - \\frac{3}{10} = \\frac{7}{10} = 0.7$$

---

### Interpreting Probability

| Interpretation | Description |
|----------------|-------------|
| **Classical** | Equally likely outcomes (dice, coins, cards) |
| **Relative frequency** | Long-run proportion from many trials |
| **Subjective** | Personal belief based on experience |

> 🔑 **Law of Large Numbers:** As the number of trials increases, the relative frequency approaches the true probability.`
    },
    {
      id: 'apstats-probability-rules-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Basic Probability Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(6)$ on a fair die is:',
            options: ['$1/6$', '$1/3$', '$1/2$', '$1$'],
            correctAnswer: 0,
            explanation: '1 favorable outcome out of 6 equally likely outcomes: $P(6) = 1/6$.'
          },
          {
            question: 'If $P(A) = 0.3$, then $P(A\\text{\' }) =$',
            options: ['$0.3$', '$0.7$', '$0.03$', '$1.3$'],
            correctAnswer: 1,
            explanation: '$P(A\\text{\' }) = 1 - P(A) = 1 - 0.3 = 0.7$.'
          },
          {
            question: 'A probability of 1.2 is:',
            options: ['Very likely', 'Certain', 'Impossible — probability cannot exceed 1', 'Greater than certain'],
            correctAnswer: 2,
            explanation: 'Probabilities must be between 0 and 1 inclusive. $P = 1.2$ is invalid.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p1-input',
      type: 'input-boxes' as const,
      content: `
**Calculating Probabilities** 🧮

**1)** $P(\\text{heads})$ on a fair coin:

**2)** A bag has 5 red and 15 blue marbles. $P(\\text{red}) = $ ? (as decimal)

**3)** Using the complement: $P(\\text{not red}) = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'P(heads)',
            correctAnswer: '0.5',
            explanation: 'Fair coin: $P(\\text{heads}) = 1/2 = 0.5$.'
          },
          {
            label: 'P(red)',
            correctAnswer: '0.25',
            explanation: '$P(\\text{red}) = 5/20 = 0.25$.'
          },
          {
            label: 'P(not red)',
            correctAnswer: '0.75',
            explanation: '$P(\\text{not red}) = 1 - 0.25 = 0.75$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Probability Vocabulary** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr1-dd1',
            label: 'Probability always ranges from:',
            options: ['$-1$ to $1$', '$0$ to $1$', '$0$ to $100$', '$-\\infty$ to $\\infty$'],
            correctIndex: 1,
            explanation: 'Probabilities are always between 0 (impossible) and 1 (certain).'
          },
          {
            id: 'pr1-dd2',
            label: '$P(A\\text{\' })$ is called the ___ of $A$:',
            options: ['Union', 'Intersection', 'Complement', 'Conditional'],
            correctIndex: 2,
            explanation: '$A\\text{\' }$ = complement of $A$ = everything NOT in $A$.'
          },
          {
            id: 'pr1-dd3',
            label: 'The Law of Large Numbers says relative frequency approaches:',
            options: ['0.5', 'The true probability', 'The sample size', 'Zero'],
            correctIndex: 1,
            explanation: 'With more trials, the observed proportion converges to the true probability.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Basic Probability** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) + P(A\\text{\' }) =$',
            options: ['$0$', '$0.5$', '$1$', '$2$'],
            correctAnswer: 2,
            explanation: 'An event and its complement account for ALL outcomes: $P(A) + P(A\\text{\' }) = 1$.'
          },
          {
            question: 'The sample space for flipping two coins is:',
            options: ['$\\{H, T\\}$', '$\\{HH, HT, TH, TT\\}$', '$\\{HH, HT, TT\\}$', '$\\{H, T, HH, TT\\}$'],
            correctAnswer: 1,
            explanation: 'Two flips: $\\{HH, HT, TH, TT\\}$ — 4 outcomes (HT and TH are different).'
          },
          {
            question: '$P(\\text{even on a fair die}) =$',
            options: ['$1/6$', '$1/3$', '$1/2$', '$2/3$'],
            correctAnswer: 2,
            explanation: 'Even numbers: $\\{2, 4, 6\\}$ = 3 out of 6 = $1/2$.'
          },
          {
            question: 'If $P(\\text{rain}) = 0.4$, then $P(\\text{no rain}) =$',
            options: ['$0.4$', '$0.6$', '$0.04$', '$1.4$'],
            correctAnswer: 1,
            explanation: '$P(\\text{no rain}) = 1 - 0.4 = 0.6$.'
          },
          {
            question: 'A card is drawn from a standard 52-card deck. $P(\\text{ace}) =$',
            options: ['$1/52$', '$1/13$', '$1/4$', '$4/13$'],
            correctAnswer: 1,
            explanation: '4 aces out of 52 cards: $P = 4/52 = 1/13$.'
          },
          {
            question: 'Which is NOT a valid probability?',
            options: ['$0$', '$0.99$', '$-0.1$', '$1$'],
            correctAnswer: 2,
            explanation: 'Probabilities cannot be negative. $-0.1$ is invalid.'
          },
          {
            question: '"At least one head in 3 flips" is easiest to calculate using:',
            options: ['The addition rule', 'The complement rule', 'The multiplication rule', 'Bayes\' theorem'],
            correctAnswer: 1,
            explanation: '$P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - P(\\text{TTT})$.'
          },
          {
            question: 'If you flip a fair coin 1000 times and get 520 heads, the relative frequency is:',
            options: ['$0.50$', '$0.52$', '$520$', '$0.48$'],
            correctAnswer: 1,
            explanation: 'Relative frequency $= 520/1000 = 0.52$.'
          },
          {
            question: 'The "equally likely" interpretation of probability requires:',
            options: ['A large sample', 'All outcomes have the same chance', 'At least 30 trials', 'A normal distribution'],
            correctAnswer: 1,
            explanation: 'Classical probability assumes all outcomes are equally likely (fair die, fair coin).'
          },
          {
            question: '$P(\\text{roll a 7 on a standard die}) =$',
            options: ['$1/7$', '$1/6$', '$0$', '$7/6$'],
            correctAnswer: 2,
            explanation: 'A standard die has faces 1–6. Rolling a 7 is impossible: $P = 0$.'
          }
        ]
      }
    }
  ]
};
