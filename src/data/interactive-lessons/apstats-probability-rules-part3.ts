export const apStatsProbabilityPart3Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p3-intro',
      type: 'text' as const,
      content: `# 🔢 Multiplication Rule

**Part 3 of 7 — "And" Probabilities**

---

### The General Multiplication Rule

The probability that **both** $A$ and $B$ occur:

$$P(A \\cap B) = P(A) \\cdot P(B | A)$$

where $P(B | A)$ means "the probability of $B$ given that $A$ has occurred."

---

### Independent Events (Special Case)

If events are **independent** (one doesn\'t affect the other):

$$P(A \\cap B) = P(A) \\cdot P(B)$$

> 🔑 **Key Insight:** For independent events, you just multiply. For dependent events, you must account for how the first event changes the second.

---

### Independent vs Dependent

| Scenario | Type | Why |
|----------|:----:|-----|
| Flip a coin, then roll a die | Independent | Coin doesn\'t affect die |
| Draw 2 cards WITH replacement | Independent | Deck is reset each time |
| Draw 2 cards WITHOUT replacement | Dependent | Deck shrinks after 1st draw |
| Select 2 people from a small group | Dependent | Pool changes after 1st selection |

---

### Worked Example 1: Independent Events

**Two coin flips. Find $P(HH)$.**

Flips are independent:
$$P(HH) = P(H) \\cdot P(H) = 0.5 \\times 0.5 = 0.25$$

---

### Worked Example 2: Dependent Events (Without Replacement)

**A bag has 4 red and 6 blue marbles. Draw 2 without replacement. Find $P(\\text{both red})$.**

$$P(R_1 \\cap R_2) = P(R_1) \\cdot P(R_2 | R_1) = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.133$$

> After removing one red marble, only 3 red remain out of 9 total.

---

### Extending to Multiple Events

For three independent events:
$$P(A \\cap B \\cap C) = P(A) \\cdot P(B) \\cdot P(C)$$

**Example:** Probability of 3 heads in a row:
$$P(HHH) = 0.5^3 = 0.125$$

---

### "At Least One" Using the Complement

$$P(\\text{at least one}) = 1 - P(\\text{none})$$

**Example:** Roll a die 3 times. $P(\\text{at least one 6})$:
$$P(\\text{at least one 6}) = 1 - P(\\text{no 6s}) = 1 - \\left(\\frac{5}{6}\\right)^3 = 1 - \\frac{125}{216} \\approx 0.421$$`
    },
    {
      id: 'apstats-probability-rules-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Multiplication Rule Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.3$, $P(B) = 0.4$, independent. $P(A \\cap B) =$',
            options: ['$0.70$', '$0.12$', '$0.10$', '$0.34$'],
            correctAnswer: 1,
            explanation: 'Independent: $P(A \\cap B) = 0.3 \\times 0.4 = 0.12$.'
          },
          {
            question: 'Drawing cards WITHOUT replacement makes events:',
            options: ['Independent', 'Dependent', 'Mutually exclusive', 'Complementary'],
            correctAnswer: 1,
            explanation: 'Without replacement, the deck composition changes after each draw → dependent.'
          },
          {
            question: 'The multiplication rule finds $P(A \\text{ ___ } B)$:',
            options: ['or', 'and', 'given', 'not'],
            correctAnswer: 1,
            explanation: 'Multiplication rule: $P(A \\text{ AND } B) = P(A \\cap B)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p3-input',
      type: 'input-boxes' as const,
      content: `
**Computing "And" Probabilities** 🧮

**For independent events:**

**1)** $P(A) = 0.5$, $P(B) = 0.5$. $P(A \\cap B) = $ ?

**2)** $P(A) = 0.2$, $P(B) = 0.5$. $P(A \\cap B) = $ ?

**3)** $P(\\text{at least one head in 2 flips}) = 1 - P(TT) = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'P(A∩B) problem 1',
            correctAnswer: '0.25',
            explanation: '$P(A \\cap B) = 0.5 \\times 0.5 = 0.25$.'
          },
          {
            label: 'P(A∩B) problem 2',
            correctAnswer: '0.1',
            explanation: '$P(A \\cap B) = 0.2 \\times 0.5 = 0.10$.'
          },
          {
            label: 'P(at least one head)',
            correctAnswer: '0.75',
            explanation: '$P(TT) = 0.5 \\times 0.5 = 0.25$. $P(\\text{at least one H}) = 1 - 0.25 = 0.75$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Independent vs Dependent** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr3-dd1',
            label: 'Independent events have ___ effect on each other:',
            options: ['A large', 'A small', 'No', 'A negative'],
            correctIndex: 2,
            explanation: 'Independent: knowing one occurred gives no information about the other.'
          },
          {
            id: 'pr3-dd2',
            label: 'For dependent events, we use $P(B|A)$ instead of $P(B)$ because:',
            options: ['It is always larger', 'The first event changes the probabilities', 'The events are mutually exclusive', 'It simplifies the calculation'],
            correctIndex: 1,
            explanation: 'Dependent: the outcome of $A$ changes the probability of $B$.'
          },
          {
            id: 'pr3-dd3',
            label: '"At least one" problems are best solved using:',
            options: ['The addition rule', 'The complement: $1 - P(\\text{none})$', 'The multiplication rule only', 'A Venn diagram'],
            correctIndex: 1,
            explanation: '$P(\\text{at least one}) = 1 - P(\\text{none})$ avoids listing many cases.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Multiplication Rule** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.6$, $P(B) = 0.5$, independent. $P(A \\cap B) =$',
            options: ['$0.10$', '$0.30$', '$0.55$', '$1.10$'],
            correctAnswer: 1,
            explanation: '$P(A \\cap B) = 0.6 \\times 0.5 = 0.30$.'
          },
          {
            question: 'A bag has 3 red and 7 blue. Draw one, then another WITHOUT replacement. $P(\\text{both red}) =$',
            options: ['$3/10 \\times 3/10$', '$3/10 \\times 2/9$', '$3/10 \\times 2/10$', '$3/10 + 2/9$'],
            correctAnswer: 1,
            explanation: 'Without replacement: $P(R_1) = 3/10$, $P(R_2|R_1) = 2/9$. $P = 3/10 \\times 2/9 = 6/90$.'
          },
          {
            question: '$P(\\text{at least one 6 in 2 rolls}) =$',
            options: ['$1/6 + 1/6$', '$1 - (5/6)^2$', '$(1/6)^2$', '$2/6$'],
            correctAnswer: 1,
            explanation: '$P(\\text{at least one}) = 1 - P(\\text{none}) = 1 - (5/6)^2 = 1 - 25/36 = 11/36$.'
          },
          {
            question: 'Three independent events each have $P = 0.9$. $P(\\text{all three occur}) =$',
            options: ['$0.729$', '$0.900$', '$2.700$', '$0.271$'],
            correctAnswer: 0,
            explanation: '$P = 0.9^3 = 0.729$.'
          },
          {
            question: 'Which scenario involves independent events?',
            options: ['Drawing 2 names from a hat (no replacement)', 'Rolling a die and flipping a coin', 'Selecting 2 students from a class of 10', 'Dealing 5 cards from a deck'],
            correctAnswer: 1,
            explanation: 'Rolling and flipping use different devices — the outcomes don\'t affect each other.'
          },
          {
            question: '$P(A) = 0.4$, $P(B|A) = 0.3$. $P(A \\cap B) =$',
            options: ['$0.70$', '$0.12$', '$0.10$', '$0.75$'],
            correctAnswer: 1,
            explanation: 'General multiplication rule: $P(A \\cap B) = P(A) \\cdot P(B|A) = 0.4 \\times 0.3 = 0.12$.'
          },
          {
            question: 'If $P(A \\cap B) = P(A) \\cdot P(B)$, the events are:',
            options: ['Mutually exclusive', 'Dependent', 'Independent', 'Complementary'],
            correctAnswer: 2,
            explanation: 'This is the defining property of independent events.'
          },
          {
            question: '$P(\\text{no heads in 4 flips}) =$',
            options: ['$0.0625$', '$0.25$', '$0.50$', '$0.9375$'],
            correctAnswer: 0,
            explanation: '$P(TTTT) = (0.5)^4 = 0.0625$.'
          },
          {
            question: '$P(\\text{at least one head in 4 flips}) =$',
            options: ['$0.0625$', '$0.50$', '$0.75$', '$0.9375$'],
            correctAnswer: 3,
            explanation: '$P(\\text{at least one H}) = 1 - P(TTTT) = 1 - 0.0625 = 0.9375$.'
          },
          {
            question: 'With replacement, drawing from a deck is ___, because the deck is:',
            options: ['Dependent — changed', 'Independent — reset', 'Impossible', 'Mutually exclusive'],
            correctAnswer: 1,
            explanation: 'Replacing the card resets the deck, making each draw independent.'
          }
        ]
      }
    }
  ]
};
