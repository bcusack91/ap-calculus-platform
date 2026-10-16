export const apStatsProbabilityPart2Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p2-intro',
      type: 'text' as const,
      content: `# 📊 Addition Rule

**Part 2 of 7 — "Or" Probabilities**

---

### The General Addition Rule

The probability that event $A$ **or** event $B$ (or both) occurs:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

> 🔑 **Why subtract $P(A \\cap B)$?** Because the overlap is counted once in $P(A)$ and again in $P(B)$. Subtracting avoids double-counting.

---

### Venn Diagram View

| Region | Represents | Probability |
|--------|-----------|-------------|
| Left only | $A$ but not $B$ | $P(A) - P(A \\cap B)$ |
| Overlap | $A$ and $B$ | $P(A \\cap B)$ |
| Right only | $B$ but not $A$ | $P(B) - P(A \\cap B)$ |
| Outside both | Neither $A$ nor $B$ | $1 - P(A \\cup B)$ |

---

### Mutually Exclusive Events

Two events are **mutually exclusive** (disjoint) if they cannot both occur: $P(A \\cap B) = 0$.

For mutually exclusive events, the addition rule simplifies to:

$$P(A \\cup B) = P(A) + P(B)$$

**Examples:**
- Rolling a 2 and rolling a 5 on one die → mutually exclusive
- Choosing one student who is a freshman and choosing one who is a senior → mutually exclusive
- Drawing a heart and drawing a spade → mutually exclusive

**NOT mutually exclusive:**
- Drawing a heart and drawing a king (king of hearts exists!)

---

### Worked Example 1: General Addition Rule

**$P(A) = 0.4$, $P(B) = 0.3$, $P(A \\cap B) = 0.1$. Find $P(A \\cup B)$.**

$$P(A \\cup B) = 0.4 + 0.3 - 0.1 = 0.6$$

---

### Worked Example 2: Two-Way Table

**A class of 200 students:**

| | Freshman | Sophomore | Total |
|---|:---:|:---:|:---:|
| **Male** | 50 | 30 | 80 |
| **Female** | 60 | 60 | 120 |
| **Total** | 110 | 90 | 200 |

**Find $P(\\text{Male OR Freshman})$:**

$$P(M \\cup F) = P(M) + P(F) - P(M \\cap F) = \\frac{80}{200} + \\frac{110}{200} - \\frac{50}{200} = \\frac{140}{200} = 0.70$$

> 🔑 **Check:** Count directly: 80 males + 60 female freshmen = 140 out of 200 = 0.70 ✓`
    },
    {
      id: 'apstats-probability-rules-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Addition Rule Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.5$, $P(B) = 0.2$, events are mutually exclusive. $P(A \\cup B) =$',
            options: ['$0.1$', '$0.3$', '$0.7$', '$1.0$'],
            correctAnswer: 2,
            explanation: 'Mutually exclusive: $P(A \\cup B) = P(A) + P(B) = 0.5 + 0.2 = 0.7$. 0.1 multiplies the probabilities, and 0.3 subtracts them.'
          },
          {
            question: 'We subtract $P(A \\cap B)$ in the addition rule to:',
            options: ['Make the answer less than one', 'Avoid counting the overlap twice', 'Account for independent events', 'Find the complement'],
            correctAnswer: 1,
            explanation: 'The overlap is counted once in $P(A)$ and again in $P(B)$, so we subtract it once. The rule works whether or not the events are independent, and the complement of the union is $1 - P(A \\cup B)$.'
          },
          {
            question: '"Mutually exclusive" means:',
            options: ['The events are independent', 'Events cannot both occur', 'Events always occur together', 'Events have equal probability'],
            correctAnswer: 1,
            explanation: 'Mutually exclusive = disjoint = $P(A \\cap B) = 0$: the events cannot happen together. That is different from independence, and it says nothing about the events having equal probabilities.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p2-input',
      type: 'input-boxes' as const,
      content: `
**Addition Rule Calculations** 🧮

**1)** $P(A) = 0.4$, $P(B) = 0.3$, $P(A \\cap B) = 0.1$. $P(A \\cup B) = $ ?

**2)** $P(A) = 0.6$, $P(B) = 0.4$, $P(A \\cap B) = 0.2$. $P(A \\cup B) = $ ?

**3)** $P(A \\cup B) = 0.9$, $P(A) = 0.5$, $P(B) = 0.6$. $P(A \\cap B) = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'P(A∪B) problem 1',
            correctAnswer: '0.6',
            explanation: '$P(A \\cup B) = 0.4 + 0.3 - 0.1 = 0.6$.'
          },
          {
            label: 'P(A∪B) problem 2',
            correctAnswer: '0.8',
            explanation: '$P(A \\cup B) = 0.6 + 0.4 - 0.2 = 0.8$.'
          },
          {
            label: 'P(A∩B)',
            correctAnswer: '0.2',
            explanation: 'Rearrange: $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.6 - 0.9 = 0.2$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Key Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr2-dd1',
            label: 'The addition rule finds $P(A \\;\\rule{1.5em}{0.4pt}\\; B)$:',
            options: ['and', 'or', 'given', 'not'],
            correctIndex: 1,
            explanation: 'The addition rule calculates $P(A \\text{ OR } B) = P(A \\cup B)$.'
          },
          {
            id: 'pr2-dd2',
            label: 'If $P(A \\cap B) = 0$, the events are:',
            options: ['Independent', 'Complementary', 'Mutually exclusive', 'Conditional'],
            correctIndex: 2,
            explanation: '$P(A \\cap B) = 0$ means the events cannot both occur = mutually exclusive.'
          },
          {
            id: 'pr2-dd3',
            label: 'Drawing a heart and drawing a king from a deck are:',
            options: ['Mutually exclusive', 'Not mutually exclusive', 'Complementary events', 'Independent and disjoint'],
            correctIndex: 1,
            explanation: 'The king of hearts is in both events, so they CAN occur together.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Addition Rule** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.3$, $P(B) = 0.5$, $P(A \\cap B) = 0.15$. $P(A \\cup B) =$',
            options: ['$0.50$', '$0.65$', '$0.80$', '$0.95$'],
            correctAnswer: 1,
            explanation: '$P(A \\cup B) = 0.3 + 0.5 - 0.15 = 0.65$.'
          },
          {
            question: 'If events are mutually exclusive, $P(A \\cap B) =$',
            options: ['$P(A) \\cdot P(B)$', '$P(A) + P(B)$', '$0$', '$P(A \\cup B)$'],
            correctAnswer: 2,
            explanation: 'Mutually exclusive = cannot both occur = $P(A \\cap B) = 0$. $P(A) \\cdot P(B)$ is the intersection for independent events, and $P(A) + P(B)$ is the union for mutually exclusive events.'
          },
          {
            question: '$P(\\text{neither } A \\text{ nor } B) =$',
            options: ['$P(A \\cup B)$', '$1 - P(A \\cup B)$', '$P(A) \\cdot P(B)$', '$P(A\\text{\' }) + P(B\\text{\' })$'],
            correctAnswer: 1,
            explanation: '"Neither" is the complement of the union: $P(\\text{neither}) = 1 - P(A \\cup B)$. $P(A\\text{\' }) + P(B\\text{\' })$ double-counts the outcomes outside both events and can exceed 1.'
          },
          {
            question: 'Rolling an even number and rolling an odd number on one die are:',
            options: ['Independent', 'Mutually exclusive', 'Overlapping events', 'Conditional'],
            correctAnswer: 1,
            explanation: 'A single roll cannot be both even and odd — mutually exclusive.'
          },
          {
            question: '$P(A) = 0.7$, $P(B) = 0.6$. Can $A$ and $B$ be mutually exclusive?',
            options: ['Yes, since any two events can be', 'No, since $P(A) + P(B) > 1$', 'Yes, since they could be independent', 'Only if $P(A \\cap B) = 1$'],
            correctAnswer: 1,
            explanation: 'If ME, $P(A \\cup B) = 0.7 + 0.6 = 1.3 > 1$, which is impossible.'
          },
          {
            question: 'In a deck of 52 cards, $P(\\text{heart OR face card}) =$',
            options: ['$13/52 + 12/52$', '$13/52 + 12/52 - 3/52$', '$13/52 + 12/52 - 1/52$', '$13/52 \\cdot 12/52$'],
            correctAnswer: 1,
            explanation: 'Hearts: 13, face cards: 12, overlap (jack, queen and king of hearts): 3. $P = (13+12-3)/52 = 22/52$. Leaving out the overlap double-counts 3 cards, subtracting only 1/52 counts one face heart instead of three, and multiplying gives an "and" probability.'
          },
          {
            question: 'From a two-way table with 300 total: 120 are type A, 100 are type B, 40 are both. $P(A \\cup B) =$',
            options: ['$120/300$', '$180/300$', '$220/300$', '$260/300$'],
            correctAnswer: 1,
            explanation: '$P(A \\cup B) = (120 + 100 - 40)/300 = 180/300 = 0.6$. 220/300 forgets to subtract the 40 counted twice, and 120/300 is just $P(A)$.'
          },
          {
            question: 'If $P(A \\cup B) = 0.8$ and $P(A \\cup B)\\text{\' } = 0.2$, these should sum to:',
            options: ['$0.6$', '$0.5$', '$1$', '$0.8$'],
            correctAnswer: 2,
            explanation: 'An event and its complement always sum to 1: $0.8 + 0.2 = 1$.'
          },
          {
            question: 'Mutually exclusive events are:',
            options: ['Always independent', 'Dependent when both have $P > 0$', 'Always complementary', 'Independent when both have $P > 0$'],
            correctAnswer: 1,
            explanation: 'If $A$ and $B$ are ME with $P(A), P(B) > 0$: knowing $A$ occurred means $B$ did NOT, so they are dependent.'
          },
          {
            question: '$P(A) = 0.4$, $P(B) = 0.3$, $P(A \\cup B) = 0.7$. The events are:',
            options: ['Independent', 'Mutually exclusive', 'Complementary', 'Conditional'],
            correctAnswer: 1,
            explanation: '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.4 + 0.3 - 0.7 = 0$, so the events are disjoint. They are not independent (that would need $P(A \\cap B) = 0.12$) and not complementary (their probabilities sum to 0.7, not 1).'
          }
        ]
      }
    }
  ]
};
