export const apStatsProbabilityPart7Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p7-intro',
      type: 'text' as const,
      content: `# 🏆 Review & Applications

**Part 7 of 7 — Comprehensive Probability Review**

---

### Complete Formula Reference

| Rule | Formula | When to Use |
|------|---------|-------------|
| **Complement** | $P(A\\text{\' }) = 1 - P(A)$ | "not", "fails", "none" |
| **Addition (General)** | $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ | "or", "either" |
| **Addition (ME)** | $P(A \\cup B) = P(A) + P(B)$ | "or" when mutually exclusive |
| **Multiplication (General)** | $P(A \\cap B) = P(A) \\cdot P(B|A)$ | "and", "both" (dependent) |
| **Multiplication (Indep.)** | $P(A \\cap B) = P(A) \\cdot P(B)$ | "and", "both" (independent) |
| **Conditional** | $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ | "given", "if", "knowing" |
| **At least one** | $1 - P(\\text{none})$ | "at least one" |

---

### Key Relationships

$$\\text{Mutually Exclusive:} \\quad P(A \\cap B) = 0$$
$$\\text{Independent:} \\quad P(A \\cap B) = P(A) \\cdot P(B)$$
$$\\text{Complementary:} \\quad P(A) + P(A\\text{\' }) = 1$$

> 🔑 **Remember:** Mutually exclusive events with $P > 0$ are NEVER independent!

---

### Comprehensive Worked Example

**A survey of 500 adults:**

| | Exercises Regularly | Does Not | Total |
|---|:---:|:---:|:---:|
| **Healthy Weight** | 180 | 120 | 300 |
| **Not Healthy Weight** | 60 | 140 | 200 |
| **Total** | 240 | 260 | 500 |

**a) $P(\\text{Healthy Weight})$**
$$P(\\text{HW}) = \\frac{300}{500} = 0.60$$

**b) $P(\\text{Exercises AND Healthy Weight})$**
$$P(\\text{E} \\cap \\text{HW}) = \\frac{180}{500} = 0.36$$

**c) $P(\\text{Exercises OR Healthy Weight})$**
$$P(\\text{E} \\cup \\text{HW}) = P(\\text{E}) + P(\\text{HW}) - P(\\text{E} \\cap \\text{HW}) = 0.48 + 0.60 - 0.36 = 0.72$$

**d) $P(\\text{Healthy Weight} | \\text{Exercises})$**
$$P(\\text{HW}|\\text{E}) = \\frac{P(\\text{HW} \\cap \\text{E})}{P(\\text{E})} = \\frac{0.36}{0.48} = 0.75$$

**e) Are Exercise and Healthy Weight independent?**
$$P(\\text{HW}) = 0.60 \\neq 0.75 = P(\\text{HW}|\\text{E})$$
**No — exercising is associated with higher rate of healthy weight.**

---

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|-----------|
| Using addition rule for "and" | "And" → multiplication rule |
| Forgetting $-P(A \\cap B)$ in addition rule | Always subtract overlap unless ME |
| Treating dependent events as independent | Check if events affect each other |
| Confusing ME with independent | ME ≠ independent (opposite when $P > 0$) |
| $P > 1$ in final answer | Probability is always between 0 and 1 |`
    },
    {
      id: 'apstats-probability-rules-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Formula Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.7$. $P(A\\text{\' }) =$',
            options: ['$0.7$', '$0.3$', '$1.0$', '$0.07$'],
            correctAnswer: 1,
            explanation: '$P(A\\text{\' }) = 1 - P(A) = 1 - 0.7 = 0.3$.'
          },
          {
            question: '$P(A) = 0.5$, $P(B) = 0.4$, $P(A \\cap B) = 0.2$. $P(A \\cup B) =$',
            options: ['$0.9$', '$0.7$', '$0.2$', '$0.1$'],
            correctAnswer: 1,
            explanation: '$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$.'
          },
          {
            question: '$P(A \\cap B) = 0.15$, $P(B) = 0.3$. $P(A|B) =$',
            options: ['$0.45$', '$2.0$', '$0.5$', '$0.15$'],
            correctAnswer: 2,
            explanation: '$P(A|B) = \\frac{0.15}{0.3} = 0.5$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** $P(A) = 0.4$, $P(B) = 0.3$, independent. $P(A \\cap B) =$ ?

**2)** $P(A) = 0.6$, $P(B) = 0.5$, $P(A \\cap B) = 0.3$. $P(A \\cup B) =$ ?

**3)** $P(\\text{pass}) = 0.9$, 2 independent attempts. $P(\\text{at least one pass}) =$ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'P(A∩B) independent',
            correctAnswer: '0.12',
            explanation: 'Independent: $P(A \\cap B) = P(A) \\cdot P(B) = 0.4 \\times 0.3 = 0.12$.'
          },
          {
            label: 'P(A∪B)',
            correctAnswer: '0.8',
            explanation: '$P(A \\cup B) = 0.6 + 0.5 - 0.3 = 0.8$.'
          },
          {
            label: 'At least one pass',
            correctAnswer: '0.99',
            explanation: '$P(\\text{both fail}) = 0.1^2 = 0.01$. $P(\\text{at least one}) = 1 - 0.01 = 0.99$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr7-dd1',
            label: 'The complement of $P = 0.85$ is:',
            options: ['$0.85$', '$0.15$', '$1.00$', '$0.50$'],
            correctIndex: 1,
            explanation: '$P\\text{\' } = 1 - 0.85 = 0.15$.'
          },
          {
            id: 'pr7-dd2',
            label: '"Both A and B occur" uses the ___ rule:',
            options: ['Addition', 'Complement', 'Multiplication', 'Conditional'],
            correctIndex: 2,
            explanation: '"Both" / "and" → intersection → multiplication rule.'
          },
          {
            id: 'pr7-dd3',
            label: 'If $P(A|B) = P(A)$, the events are:',
            options: ['Dependent', 'Mutually exclusive', 'Independent', 'Complementary'],
            correctIndex: 2,
            explanation: '$P(A|B) = P(A)$ is the definition of independence.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Comprehensive Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A) = 0.6$, $P(B) = 0.4$, mutually exclusive. $P(A \\cup B) =$',
            options: ['$0.24$', '$0.76$', '$1.00$', '$0.20$'],
            correctAnswer: 2,
            explanation: 'ME: $P(A \\cup B) = P(A) + P(B) = 0.6 + 0.4 = 1.0$.'
          },
          {
            question: '$P(A) = 0.3$, $P(B) = 0.5$, independent. $P(A \\cap B) =$',
            options: ['$0.8$', '$0.15$', '$0.2$', '$0.35$'],
            correctAnswer: 1,
            explanation: 'Independent: $P(A \\cap B) = 0.3 \\times 0.5 = 0.15$.'
          },
          {
            question: '$P(A \\cap B) = 0.12$, $P(B) = 0.4$. $P(A|B) =$',
            options: ['$0.30$', '$0.48$', '$0.12$', '$0.52$'],
            correctAnswer: 0,
            explanation: '$P(A|B) = \\frac{0.12}{0.4} = 0.30$.'
          },
          {
            question: '$P(\\text{defect}) = 0.02$, 3 independent items. $P(\\text{at least one defect}) \\approx$',
            options: ['$0.06$', '$0.0588$', '$0.9412$', '$0.000008$'],
            correctAnswer: 1,
            explanation: '$P(\\text{none}) = 0.98^3 \\approx 0.9412$. At least one: $1 - 0.9412 = 0.0588$.'
          },
          {
            question: 'Events A and B with $P(A) = 0.5$, $P(B) = 0.3$. If mutually exclusive, are they independent?',
            options: ['Yes', 'No — ME events (with P > 0) are never independent', 'Sometimes', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'ME with $P > 0$: knowing $A$ happened means $B$ didn\'t → dependent.'
          },
          {
            question: '$P(A) = 0.5$, $P(B) = 0.6$, $P(A \\cap B) = 0.3$. $P(A \\cup B) =$',
            options: ['$1.1$', '$0.8$', '$0.3$', '$0.5$'],
            correctAnswer: 1,
            explanation: '$P(A \\cup B) = 0.5 + 0.6 - 0.3 = 0.8$.'
          },
          {
            question: 'Bag: 8 red, 2 blue. Draw 2 with replacement. $P(\\text{both red}) =$',
            options: ['$0.64$', '$0.80$', '$56/90$', '$0.16$'],
            correctAnswer: 0,
            explanation: 'With replacement → independent: $0.8 \\times 0.8 = 0.64$.'
          },
          {
            question: 'A student is selected. $P(\\text{athlete}) = 0.4$, $P(\\text{honor roll}|\\text{athlete}) = 0.6$. $P(\\text{athlete AND honor roll}) =$',
            options: ['$1.0$', '$0.24$', '$0.67$', '$0.40$'],
            correctAnswer: 1,
            explanation: '$P(A \\cap H) = P(A) \\cdot P(H|A) = 0.4 \\times 0.6 = 0.24$.'
          },
          {
            question: '$P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.20$. Independent?',
            options: ['No, product is different', 'Yes — $0.4 \\times 0.5 = 0.20 = P(A \\cap B)$', 'Only if ME', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$P(A) \\cdot P(B) = 0.20 = P(A \\cap B)$ ✓ Independent!'
          },
          {
            question: 'In a two-way table, how do you check independence?',
            options: ['Check if all cells are equal', 'Compare conditional proportions across categories', 'See if the total is 100%', 'Check if any cell is zero'],
            correctAnswer: 1,
            explanation: 'If $P(A|B) = P(A|B\\text{\' })$, the conditional proportions are equal → independent.'
          }
        ]
      }
    }
  ]
};
