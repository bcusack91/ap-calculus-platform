export const apStatsProbabilityPart4Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p4-intro',
      type: 'text' as const,
      content: `# 📈 Conditional Probability

**Part 4 of 7 — "Given That" Probabilities**

---

### What Is Conditional Probability?

**Conditional probability** is the probability of event $A$ occurring, **given that** event $B$ has already occurred:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

> 🔑 **Key Insight:** Knowing $B$ occurred **restricts** the sample space to only outcomes where $B$ happened.

---

### Reading Conditional Probability

| Notation | Read As |
|:--------:|---------|
| $P(A|B)$ | "Probability of $A$ given $B$" |
| $P(B|A)$ | "Probability of $B$ given $A$" |

> ⚠️ **Warning:** $P(A|B) \\neq P(B|A)$ in general! The order matters.

---

### Worked Example 1: Formula

**$P(A \\cap B) = 0.12$, $P(B) = 0.4$. Find $P(A|B)$.**

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.12}{0.4} = 0.3$$

---

### Worked Example 2: Two-Way Table

**Survey of 500 students:**

| | Plays Sport | No Sport | Total |
|---|:---:|:---:|:---:|
| **Male** | 120 | 80 | 200 |
| **Female** | 100 | 200 | 300 |
| **Total** | 220 | 280 | 500 |

**Find $P(\\text{Sport} | \\text{Male})$:**

$$P(\\text{Sport}|\\text{Male}) = \\frac{120}{200} = 0.60$$

> We restrict to males only (200), then count how many play a sport (120).

**Find $P(\\text{Male} | \\text{Sport})$:**

$$P(\\text{Male}|\\text{Sport}) = \\frac{120}{220} \\approx 0.545$$

> We restrict to sport players (220), then count how many are male (120).

Notice: $P(\\text{Sport}|\\text{Male}) \\neq P(\\text{Male}|\\text{Sport})$!

---

### Connection to the Multiplication Rule

Rearranging the conditional probability formula:

$$P(A \\cap B) = P(B) \\cdot P(A|B)$$

This IS the general multiplication rule!

---

### Bayes\' Theorem (Tree Diagrams)

For problems where you know $P(B|A)$ but need $P(A|B)$:

$$P(A|B) = \\frac{P(A) \\cdot P(B|A)}{P(B)}$$

> 🔑 **AP Tip:** On the AP exam, you can use a tree diagram instead of memorizing Bayes\' formula. Draw branches for $A$ and $A\\text{\' }$, then for $B$ given each.`
    },
    {
      id: 'apstats-probability-rules-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Conditional Probability Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(A \\cap B) = 0.15$, $P(B) = 0.5$. $P(A|B) =$',
            options: ['$0.075$', '$0.3$', '$0.5$', '$0.65$'],
            correctAnswer: 1,
            explanation: '$P(A|B) = P(A \\cap B)/P(B) = 0.15/0.5 = 0.3$.'
          },
          {
            question: '$P(A|B)$ restricts the sample space to:',
            options: ['All outcomes', 'Only outcomes where $A$ occurred', 'Only outcomes where $B$ occurred', 'The empty set'],
            correctAnswer: 2,
            explanation: '"Given $B$" means we only consider outcomes where $B$ happened.'
          },
          {
            question: 'In general, $P(A|B)$ and $P(B|A)$ are:',
            options: ['Always equal', 'NOT equal (order matters)', 'Always complementary', 'Always independent'],
            correctAnswer: 1,
            explanation: '$P(A|B) \\neq P(B|A)$ in general. Different conditioning = different answers.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p4-input',
      type: 'input-boxes' as const,
      content: `
**Computing Conditional Probabilities** 🧮

**$P(A|B) = P(A \\cap B) / P(B)$**

**1)** $P(A \\cap B) = 0.12$, $P(B) = 0.4$. $P(A|B) = $ ?

**2)** $P(A \\cap B) = 0.06$, $P(B) = 0.2$. $P(A|B) = $ ?

**3)** From a table: 80 males, 50 play a sport. $P(\\text{Sport}|\\text{Male}) = $ ? (as decimal)
      `,
      exercise: {
        inputs: [
          {
            label: 'P(A|B) problem 1',
            correctAnswer: '0.3',
            explanation: '$P(A|B) = 0.12 / 0.4 = 0.3$.'
          },
          {
            label: 'P(A|B) problem 2',
            correctAnswer: '0.3',
            explanation: '$P(A|B) = 0.06 / 0.2 = 0.3$.'
          },
          {
            label: 'P(Sport|Male)',
            correctAnswer: '0.625',
            explanation: '$P(\\text{Sport}|\\text{Male}) = 50/80 = 0.625$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conditional vs Joint Probability** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr4-dd1',
            label: '$P(A|B)$ reads as "probability of $A$ ___":',
            options: ['and $B$', 'or $B$', 'given $B$', 'without $B$'],
            correctIndex: 2,
            explanation: 'The vertical bar $|$ means "given" or "conditional on."'
          },
          {
            id: 'pr4-dd2',
            label: 'The denominator in $P(A|B)$ is:',
            options: ['$P(A)$', '$P(B)$', '$P(A \\cap B)$', '$P(A \\cup B)$'],
            correctIndex: 1,
            explanation: '$P(A|B) = P(A \\cap B) / P(B)$. The denominator is the given event\'s probability.'
          },
          {
            id: 'pr4-dd3',
            label: 'Rearranging $P(A|B) = P(A \\cap B)/P(B)$ gives:',
            options: ['$P(A \\cap B) = P(A) + P(B)$', '$P(A \\cap B) = P(B) \\cdot P(A|B)$', '$P(A \\cup B) = P(A) \\cdot P(B)$', '$P(B) = P(A) \\cdot P(A|B)$'],
            correctIndex: 1,
            explanation: 'This is the general multiplication rule: $P(A \\cap B) = P(B) \\cdot P(A|B)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conditional Probability** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(A \\cap B) = 0.20$, $P(B) = 0.50$. $P(A|B) =$',
            options: ['$0.10$', '$0.25$', '$0.40$', '$0.70$'],
            correctAnswer: 2,
            explanation: '$P(A|B) = 0.20/0.50 = 0.40$.'
          },
          {
            question: '$P(A|B) = 0.6$, $P(B) = 0.5$. $P(A \\cap B) =$',
            options: ['$0.10$', '$0.30$', '$0.55$', '$1.10$'],
            correctAnswer: 1,
            explanation: '$P(A \\cap B) = P(B) \\cdot P(A|B) = 0.5 \\times 0.6 = 0.30$.'
          },
          {
            question: 'A class has 30 students; 18 study math, 12 study science, 6 study both. $P(\\text{Math}|\\text{Science}) =$',
            options: ['$6/30$', '$6/18$', '$6/12$', '$12/18$'],
            correctAnswer: 2,
            explanation: 'Given Science (12 students), how many also do Math? $6/12 = 0.5$.'
          },
          {
            question: 'Using the same class: $P(\\text{Science}|\\text{Math}) =$',
            options: ['$6/30$', '$6/18$', '$6/12$', '$18/30$'],
            correctAnswer: 1,
            explanation: 'Given Math (18 students), how many also do Science? $6/18 = 1/3$.'
          },
          {
            question: 'A medical test is 95% accurate. $P(\\text{positive}|\\text{disease}) = 0.95$ means:',
            options: ['95% of people have the disease', '95% of those with the disease test positive', '95% of positive tests are correct', 'The disease is 95% fatal'],
            correctAnswer: 1,
            explanation: 'This is the sensitivity: among those WITH the disease, 95% test positive.'
          },
          {
            question: '$P(\\text{disease}|\\text{positive})$ is called:',
            options: ['Sensitivity', 'Specificity', 'Positive predictive value', 'False positive rate'],
            correctAnswer: 2,
            explanation: 'The probability of having the disease given a positive test = positive predictive value.'
          },
          {
            question: 'If $A$ and $B$ are independent, then $P(A|B) =$',
            options: ['$0$', '$P(B)$', '$P(A)$', '$P(A) + P(B)$'],
            correctAnswer: 2,
            explanation: 'For independent events, $P(A|B) = P(A)$: knowing $B$ doesn\'t change $A$\'s probability.'
          },
          {
            question: 'A tree diagram helps with conditional probability by:',
            options: ['Replacing the formula', 'Showing all branches and their probabilities', 'Eliminating the need for multiplication', 'Only working for independent events'],
            correctAnswer: 1,
            explanation: 'Tree diagrams visually organize the conditional probabilities along branches.'
          },
          {
            question: '$P(A|B) > P(A)$ means:',
            options: ['$A$ and $B$ are independent', 'Knowing $B$ occurred makes $A$ MORE likely', 'Knowing $B$ occurred makes $A$ LESS likely', '$A$ and $B$ are mutually exclusive'],
            correctAnswer: 1,
            explanation: 'If $P(A|B) > P(A)$, then $B$ occurring increases the chance of $A$.'
          },
          {
            question: 'Which formula is Bayes\' Theorem?',
            options: ['$P(A|B) = P(A) + P(B)$', '$P(A|B) = P(A) \\cdot P(B|A) / P(B)$', '$P(A|B) = P(A \\cup B) / P(B)$', '$P(A|B) = 1 - P(B|A)$'],
            correctAnswer: 1,
            explanation: 'Bayes\': $P(A|B) = P(A) \\cdot P(B|A) / P(B)$. It "reverses" the conditioning.'
          }
        ]
      }
    }
  ]
};
