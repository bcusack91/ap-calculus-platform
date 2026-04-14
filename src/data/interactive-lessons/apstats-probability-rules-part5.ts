export const apStatsProbabilityPart5Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p5-intro',
      type: 'text' as const,
      content: `# 🧮 Independence

**Part 5 of 7 — Testing for Independence**

---

### What Does Independence Mean?

Events $A$ and $B$ are **independent** if knowing one occurred does NOT change the probability of the other.

**Two equivalent tests:**

$$P(A|B) = P(A) \\qquad \\text{or} \\qquad P(A \\cap B) = P(A) \\cdot P(B)$$

If either equation holds, events are independent. If not, they are **dependent**.

---

### How to Check Independence

| Method | Check | Independent If |
|--------|-------|:-------------:|
| Conditional probability | Compute $P(A|B)$ | $P(A|B) = P(A)$ |
| Multiplication check | Compute $P(A) \\cdot P(B)$ | $P(A) \\cdot P(B) = P(A \\cap B)$ |
| Two-way table | Compare conditional proportions | Row/column proportions are equal |

---

### Independence vs Mutually Exclusive

These concepts are DIFFERENT and often confused:

| Property | Independent | Mutually Exclusive |
|----------|:-----------:|:------------------:|
| Can both occur? | Yes | No |
| $P(A \\cap B)$ | $P(A) \\cdot P(B) > 0$ | $0$ |
| $P(A|B)$ | $P(A)$ | $0$ |
| Knowing one affects the other? | No | Yes (if one occurs, the other can\'t) |

> 🔑 **Critical Fact:** If $A$ and $B$ are mutually exclusive (and both have $P > 0$), they are ALWAYS **dependent**. If $A$ happened, $B$ definitely didn\'t!

---

### Worked Example 1: Multiplication Check

**$P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.2$. Independent?**

$$P(A) \\cdot P(B) = 0.4 \\times 0.5 = 0.2 = P(A \\cap B) \\checkmark$$

**Yes, independent!** The product equals the intersection.

---

### Worked Example 2: Two-Way Table

**200 employees:**

| | College Degree | No Degree | Total |
|---|:---:|:---:|:---:|
| **Promoted** | 30 | 10 | 40 |
| **Not Promoted** | 120 | 40 | 160 |
| **Total** | 150 | 50 | 200 |

**Are promotion and degree independent?**

$$P(\\text{Promoted}|\\text{Degree}) = \\frac{30}{150} = 0.20$$
$$P(\\text{Promoted}|\\text{No Degree}) = \\frac{10}{50} = 0.20$$

Since $P(\\text{Promoted}|\\text{Degree}) = P(\\text{Promoted}|\\text{No Degree}) = 0.20$, the events are **independent**. Having a degree doesn\'t affect the promotion rate.

---

### Independence in Sampling

| Sampling Method | Independent? |
|----------------|:------------:|
| With replacement | Yes |
| Without replacement ($n < 10\\%$ of $N$) | Approximately yes |
| Without replacement ($n \\geq 10\\%$ of $N$) | No — use other methods |`
    },
    {
      id: 'apstats-probability-rules-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Independence Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.3$, $P(B) = 0.6$, $P(A \\cap B) = 0.10$. Independent?',
            options: ['Yes, $0.3 \\times 0.6 = 0.10$', 'No, $0.3 \\times 0.6 = 0.18 \\neq 0.10$', 'Cannot determine', 'Only if mutually exclusive'],
            correctAnswer: 1,
            explanation: '$P(A) \\cdot P(B) = 0.18 \\neq 0.10 = P(A \\cap B)$. NOT independent.'
          },
          {
            question: 'Mutually exclusive events (with $P > 0$) are:',
            options: ['Always independent', 'Never independent', 'Sometimes independent', 'Always complementary'],
            correctAnswer: 1,
            explanation: 'If $A$ occurs, $B$ can\'t → knowing $A$ changes $P(B)$ to 0. That\'s dependent.'
          },
          {
            question: 'If events are independent, $P(A|B) =$',
            options: ['$P(B)$', '$P(A \\cap B)$', '$P(A)$', '$0$'],
            correctAnswer: 2,
            explanation: 'Independence means $B$ occurring doesn\'t change $A$\'s probability: $P(A|B) = P(A)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p5-input',
      type: 'input-boxes' as const,
      content: `
**Testing Independence** 🧮

**Compute $P(A) \\times P(B)$ and compare with $P(A \\cap B)$:**

**1)** $P(A) = 0.4$, $P(B) = 0.5$. $P(A) \\times P(B) = $ ?

**2)** $P(A) = 0.3$, $P(B) = 0.6$. $P(A) \\times P(B) = $ ?

**3)** $P(A) = 0.5$, $P(B) = 0.8$. $P(A) \\times P(B) = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'Product 1',
            correctAnswer: '0.2',
            explanation: '$0.4 \\times 0.5 = 0.2$. Compare with $P(A \\cap B)$ to check independence.'
          },
          {
            label: 'Product 2',
            correctAnswer: '0.18',
            explanation: '$0.3 \\times 0.6 = 0.18$. If $P(A \\cap B) \\neq 0.18$, they are dependent.'
          },
          {
            label: 'Product 3',
            correctAnswer: '0.4',
            explanation: '$0.5 \\times 0.8 = 0.4$. Compare with $P(A \\cap B)$ to check.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Key Distinctions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr5-dd1',
            label: 'Independent means one event ___ the other:',
            options: ['Always causes', 'Does not affect', 'Prevents', 'Guarantees'],
            correctIndex: 1,
            explanation: 'Independent: $A$ happening has no effect on $B$\'s probability.'
          },
          {
            id: 'pr5-dd2',
            label: 'For events with $P > 0$: mutually exclusive events are ___ independent:',
            options: ['Always', 'Never', 'Sometimes', 'Definitely'],
            correctIndex: 1,
            explanation: 'If $A$ occurs and events are ME, then $P(B|A) = 0 \\neq P(B)$. Dependent!'
          },
          {
            id: 'pr5-dd3',
            label: 'Sampling without replacement from a large population ($n < 10\\%$) is:',
            options: ['Exactly independent', 'Approximately independent', 'Always dependent', 'Impossible to determine'],
            correctIndex: 1,
            explanation: 'The 10% condition: if $n < 10\\%$ of $N$, we treat observations as approximately independent.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Independence** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.5$, $P(B) = 0.5$, $P(A \\cap B) = 0.25$. Are they independent?',
            options: ['No', 'Yes — $0.5 \\times 0.5 = 0.25$', 'Only if mutually exclusive', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$P(A) \\cdot P(B) = 0.25 = P(A \\cap B)$ ✓ Independent!'
          },
          {
            question: '$P(A) = 0.6$, $P(B) = 0.3$, $P(A \\cap B) = 0.1$. Independent?',
            options: ['Yes', 'No — $0.6 \\times 0.3 = 0.18 \\neq 0.10$', 'Yes — $0.1 < 0.3$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$P(A) \\cdot P(B) = 0.18 \\neq 0.10$. NOT independent.'
          },
          {
            question: 'If $A$ and $B$ are independent, $P(A \\cap B) =$',
            options: ['$0$', '$P(A) + P(B)$', '$P(A) \\cdot P(B)$', '$P(A|B)$'],
            correctAnswer: 2,
            explanation: 'For independent events: $P(A \\cap B) = P(A) \\cdot P(B)$.'
          },
          {
            question: 'A table shows $P(\\text{Pass}|\\text{Study}) = 0.90$ and $P(\\text{Pass}|\\text{No Study}) = 0.50$. Are passing and studying independent?',
            options: ['Yes — both have positive probability', 'No — the conditional probabilities differ', 'Cannot determine without $P(A \\cap B)$', 'Yes — they are unrelated'],
            correctAnswer: 1,
            explanation: '$P(\\text{Pass}|\\text{Study}) \\neq P(\\text{Pass}|\\text{No Study})$, so passing depends on studying.'
          },
          {
            question: 'Rolling a 6 on the first die and rolling a 3 on the second die are:',
            options: ['Mutually exclusive', 'Dependent', 'Independent', 'Complementary'],
            correctAnswer: 2,
            explanation: 'Different dice don\'t affect each other — independent events.'
          },
          {
            question: 'If $P(A|B) = 0$, this tells us events are:',
            options: ['Independent', 'Dependent and mutually exclusive', 'Complementary', 'Identical'],
            correctAnswer: 1,
            explanation: 'If $B$ makes $A$ impossible ($P(A|B) = 0$), they cannot both occur (ME) and are dependent.'
          },
          {
            question: 'Drawing 5 cards from a deck of 52 without replacement: the 10% condition is:',
            options: ['Met — $5 < 10\\%$ of 52', 'Not met — $5 > 10\\%$ of 52', 'Not applicable', 'Always met for cards'],
            correctAnswer: 0,
            explanation: '$10\\%$ of 52 ≈ 5.2. Since $5 < 5.2$, the condition is met (barely).'
          },
          {
            question: 'If events $A$ and $B$ are both independent AND mutually exclusive, then:',
            options: ['This is common', 'At least one must have $P = 0$', '$P(A \\cap B) = P(A) \\cdot P(B)$', 'They are complementary'],
            correctAnswer: 1,
            explanation: 'ME: $P(A \\cap B) = 0$. Independent: $P(A \\cap B) = P(A)P(B)$. Both true only if $P(A)$ or $P(B) = 0$.'
          },
          {
            question: '$P(A) = 0.7$, events are independent. $P(A\\text{\' }) \\cdot P(B) =$',
            options: ['$0.3 \\cdot P(B)$', '$0.7 \\cdot P(B)$', '$P(A\\text{\' } \\cap B)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$P(A\\text{\' }) = 0.3$. Since $A$ and $B$ are independent, $A\\text{\' }$ and $B$ are also independent: $P(A\\text{\' } \\cap B) = P(A\\text{\' }) \\cdot P(B) = 0.3 \\cdot P(B)$.'
          },
          {
            question: 'The best way to test independence from a two-way table is:',
            options: ['Check if totals are equal', 'Compare conditional proportions across rows/columns', 'Check if the table has 4 cells', 'See if any cell is 0'],
            correctAnswer: 1,
            explanation: 'If conditional proportions are equal across groups, the variables are independent.'
          }
        ]
      }
    }
  ]
};
