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

### Reversing the Condition with a Tree Diagram

Sometimes you know $P(B|A)$ but need $P(A|B)$. Draw a tree, then use the conditional probability formula.

**Example:** 2% of people have a disease. A test is positive for 95% of people with the disease and for 10% of people without it.

| Branch | Probability |
|--------|-------------|
| Disease AND positive | $0.02 \\times 0.95 = 0.019$ |
| No disease AND positive | $0.98 \\times 0.10 = 0.098$ |
| **Positive (total)** | $0.019 + 0.098 = 0.117$ |

$$P(\\text{disease}|\\text{positive}) = \\frac{P(\\text{disease} \\cap \\text{positive})}{P(\\text{positive})} = \\frac{0.019}{0.117} \\approx 0.162$$

> 🔑 Only about 16% of positive tests come from people with the disease, because the disease is rare. The tree plus $P(A|B) = P(A \\cap B)/P(B)$ is all you need; no separate formula is required.`
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
            options: ['$0.075$', '$0.3$', '$0.15$', '$0.65$'],
            correctAnswer: 1,
            explanation: '$P(A|B) = P(A \\cap B)/P(B) = 0.15/0.5 = 0.3$. 0.075 multiplies instead of dividing, 0.15 is the joint probability, and 0.65 adds the two values.'
          },
          {
            question: '$P(A|B)$ restricts the sample space to:',
            options: ['All outcomes', 'Only outcomes where $A$ occurred', 'Only outcomes where $B$ occurred', 'Outcomes in $A$ or $B$'],
            correctAnswer: 2,
            explanation: '"Given $B$" means we only consider outcomes where $B$ happened, so $P(B)$ becomes the denominator. Restricting to $A$ would give $P(B|A)$ instead.'
          },
          {
            question: 'In general, $P(A|B)$ and $P(B|A)$ are:',
            options: ['Equal to each other', 'Usually different', 'Complementary', 'Independent of each other'],
            correctAnswer: 1,
            explanation: '$P(A|B)$ and $P(B|A)$ divide the same joint probability by different totals, so they are usually different (they match only when $P(A) = P(B)$). In the sports table, $P(\\text{Sport}|\\text{Male}) = 0.60$ but $P(\\text{Male}|\\text{Sport}) \\approx 0.545$.'
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
            question: 'For a medical test, $P(\\text{positive}|\\text{disease}) = 0.95$. This means:',
            options: ['95% of all people tested have the disease', '95% of people with the disease test positive', '95% of people who test positive have it', '95% of people without it test negative'],
            correctAnswer: 1,
            explanation: 'The condition after the bar is the group we restrict to: among people WITH the disease, 95% test positive. "95% of positives have it" reverses the condition, $P(\\text{disease}|\\text{positive})$, which can be far lower.'
          },
          {
            question: 'In the tree example (2% have the disease; 95% of them and 10% of others test positive), what is $P(\\text{positive})$?',
            options: ['0.019', '0.098', '0.117', '0.950'],
            correctAnswer: 2,
            explanation: 'Add both branches that end in a positive test: $0.02(0.95) + 0.98(0.10) = 0.019 + 0.098 = 0.117$. 0.019 and 0.098 are single branches, and 0.950 is $P(\\text{positive}|\\text{disease})$.'
          },
          {
            question: 'If $A$ and $B$ are independent, then $P(A|B) =$',
            options: ['$0$', '$P(B)$', '$P(A)$', '$P(A) + P(B)$'],
            correctAnswer: 2,
            explanation: 'For independent events, $P(A|B) = P(A)$: knowing $B$ doesn\'t change $A$\'s probability. A value of 0 would mean the events cannot occur together.'
          },
          {
            question: 'A tree diagram helps with conditional probability by:',
            options: ['Removing any need to multiply probabilities', 'Showing each stage\'s probabilities', 'Working only for independent events', 'Listing outcomes without probabilities'],
            correctAnswer: 1,
            explanation: 'A tree shows each stage\'s probabilities on its branches, with later branches written as conditional probabilities. You still multiply along branches, and trees are most useful exactly when events are dependent.'
          },
          {
            question: '$P(A|B) > P(A)$ means:',
            options: ['$A$ and $B$ are independent', 'Knowing $B$ occurred makes $A$ MORE likely', 'Knowing $B$ occurred makes $A$ LESS likely', '$A$ and $B$ are mutually exclusive'],
            correctAnswer: 1,
            explanation: 'If $P(A|B) > P(A)$, then $B$ occurring increases the chance of $A$, so the events are dependent. Mutually exclusive events would have $P(A|B) = 0$.'
          },
          {
            question: 'In the same tree example, $P(\\text{disease}|\\text{positive})$ is closest to:',
            options: ['0.95', '0.16', '0.02', '0.84'],
            correctAnswer: 1,
            explanation: '$P(\\text{disease}|\\text{positive}) = 0.019/0.117 \\approx 0.16$. 0.95 is the reverse conditional $P(\\text{positive}|\\text{disease})$, 0.02 is the overall disease rate, and 0.84 is $1 - 0.16$.'
          }
        ]
      }
    }
  ]
};
