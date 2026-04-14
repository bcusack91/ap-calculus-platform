export const apStatsProbabilityPart6Data = {
  topicSlug: 'probability-rules-apstats',
  sections: [
    {
      id: 'apstats-probability-rules-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Combining Probability Rules**

---

### Strategy: Which Rule Do I Use?

| Key Word / Phrase | Rule | Formula |
|-------------------|------|---------|
| "or", "either", "at least one of" | Addition | $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ |
| "and", "both", "all" | Multiplication | $P(A \\cap B) = P(A) \\cdot P(B|A)$ |
| "given", "if", "knowing that" | Conditional | $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ |
| "not", "fails", "none" | Complement | $P(A\\text{\' }) = 1 - P(A)$ |
| "at least one" | Complement shortcut | $1 - P(\\text{none})$ |

---

### Worked Example 1: "At Least One" with Complement

**A factory produces items with a 5% defect rate. In a batch of 3 independent items, what is $P(\\text{at least one defective})$?**

**Step 1:** Find $P(\\text{not defective}) = 1 - 0.05 = 0.95$

**Step 2:** $P(\\text{none defective in 3}) = 0.95^3 = 0.857375$

**Step 3:** $P(\\text{at least one}) = 1 - 0.857375 = 0.1426$

$$\\boxed{P(\\text{at least one defective}) \\approx 0.143}$$

---

### Worked Example 2: Combining Multiple Rules

**In a class: 60% study math, 40% study science, 20% study both. A student is chosen. Given they study math, what is $P(\\text{science})$?**

**Step 1:** Identify: This is $P(\\text{Science}|\\text{Math})$ → conditional probability

**Step 2:** Apply formula:
$$P(\\text{Sci}|\\text{Math}) = \\frac{P(\\text{Sci} \\cap \\text{Math})}{P(\\text{Math})} = \\frac{0.20}{0.60} = 0.333$$

---

### Worked Example 3: Sequential Events with Dependence

**A bag has 5 red and 3 blue marbles. Draw 2 without replacement. $P(\\text{both red})$?**

**Step 1:** $P(\\text{1st red}) = \\frac{5}{8}$

**Step 2:** After removing a red: $P(\\text{2nd red}|\\text{1st red}) = \\frac{4}{7}$

**Step 3:** Multiply (general rule):
$$P(\\text{both red}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0.357$$

---

### Decision Flowchart

$$\\text{Read the problem} \\to \\begin{cases} \\text{"or" / "either"} &\\to \\text{Addition Rule} \\\\ \\text{"and" / "both"} &\\to \\text{Multiplication Rule} \\\\ \\text{"given" / "if"} &\\to \\text{Conditional} \\\\ \\text{"at least one"} &\\to \\text{Complement} \\end{cases}$$

> 🎯 **Pro tip:** "At least one" problems are almost ALWAYS easier with the complement: $1 - P(\\text{none})$.`
    },
    {
      id: 'apstats-probability-rules-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Choosing the Right Rule** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P(\\text{rain}) = 0.3$, days independent. $P(\\text{no rain on both of 2 days}) =$',
            options: ['$0.7$', '$0.49$', '$0.09$', '$0.51$'],
            correctAnswer: 1,
            explanation: '$P(\\text{dry}) = 0.7$. Independent: $P(\\text{both dry}) = 0.7 \\times 0.7 = 0.49$.'
          },
          {
            question: '"What is the probability of drawing a king OR a heart?" — Which rule?',
            options: ['Multiplication', 'Complement', 'Addition', 'Conditional'],
            correctAnswer: 2,
            explanation: '"OR" signals union → Addition Rule: $P(K \\cup H) = P(K) + P(H) - P(K \\cap H)$.'
          },
          {
            question: '$P(A) = 0.4$, $P(B) = 0.5$, independent. $P(A \\text{ or } B) =$',
            options: ['$0.9$', '$0.7$', '$0.2$', '$0.5$'],
            correctAnswer: 1,
            explanation: 'Independent: $P(A \\cap B) = 0.2$. $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p6-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Rule Calculations** 🧮

**1)** $P(\\text{defect}) = 0.1$, items independent. $P(\\text{at least one defect in 3 items}) =$ ?
*(Use: $1 - P(\\text{none}) = 1 - 0.9^3$. Round to 3 decimal places.)*

**2)** Bag: 4 red, 6 blue. Draw 2 without replacement. $P(\\text{both blue}) =$ ?
*(Round to 3 decimal places.)*

**3)** $P(A) = 0.5$, $P(B) = 0.3$, $P(A \\cap B) = 0.15$. $P(A|B) =$ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'At least one defect',
            correctAnswer: '0.271',
            explanation: '$1 - 0.9^3 = 1 - 0.729 = 0.271$.'
          },
          {
            label: 'Both blue',
            correctAnswer: '0.333',
            explanation: '$\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = 0.333$.'
          },
          {
            label: 'P(A|B)',
            correctAnswer: '0.5',
            explanation: '$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.15}{0.3} = 0.5$.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rule Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'pr6-dd1',
            label: '"At least one" problems are best solved using the ___ approach:',
            options: ['Addition rule', 'Complement rule', 'Multiplication rule', 'Conditional probability'],
            correctIndex: 1,
            explanation: '$P(\\text{at least one}) = 1 - P(\\text{none})$ is far easier than adding every case.'
          },
          {
            id: 'pr6-dd2',
            label: '"P(A and B)" when events are dependent requires:',
            options: ['$P(A) + P(B)$', '$P(A) \\cdot P(B)$', '$P(A) \\cdot P(B|A)$', '$1 - P(A)$'],
            correctIndex: 2,
            explanation: 'General multiplication rule: $P(A \\cap B) = P(A) \\cdot P(B|A)$. Independent events simplify to $P(A) \\cdot P(B)$.'
          },
          {
            id: 'pr6-dd3',
            label: 'Drawing cards without replacement makes successive draws:',
            options: ['Independent', 'Dependent', 'Mutually exclusive', 'Complementary'],
            correctIndex: 1,
            explanation: 'Removing a card changes the remaining deck composition → dependent events.'
          },
          {
            id: 'pr6-dd4',
            label: '"P(A or B)" always uses the ___ rule:',
            options: ['Multiplication', 'Complement', 'Addition', 'Conditional'],
            correctIndex: 2,
            explanation: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ is the addition rule.'
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(\\text{rain}) = 0.3$, days independent. $P(\\text{rain on at least one of 3 days}) =$',
            options: ['$0.343$', '$0.657$', '$0.900$', '$0.300$'],
            correctAnswer: 1,
            explanation: '$P(\\text{none}) = 0.7^3 = 0.343$. At least one: $1 - 0.343 = 0.657$.'
          },
          {
            question: 'Bag: 3 red, 7 blue. Draw 1. $P(\\text{red OR blue}) =$',
            options: ['$0.3$', '$0.7$', '$1.0$', '$0.21$'],
            correctAnswer: 2,
            explanation: 'Red and blue are mutually exclusive and exhaust all outcomes: $P = 0.3 + 0.7 = 1.0$.'
          },
          {
            question: '$P(A) = 0.6$, $P(B|A) = 0.5$. $P(A \\cap B) =$',
            options: ['$1.1$', '$0.3$', '$0.1$', '$0.5$'],
            correctAnswer: 1,
            explanation: '$P(A \\cap B) = P(A) \\cdot P(B|A) = 0.6 \\times 0.5 = 0.3$.'
          },
          {
            question: 'Flip a fair coin 5 times. $P(\\text{at least one head}) =$',
            options: ['$0.5$', '$31/32$', '$1/32$', '$5/32$'],
            correctAnswer: 1,
            explanation: '$P(\\text{no heads}) = (0.5)^5 = 1/32$. At least one: $1 - 1/32 = 31/32$.'
          },
          {
            question: '$P(A) = 0.4$, $P(B) = 0.3$, events mutually exclusive. $P(A \\cup B) =$',
            options: ['$0.12$', '$0.58$', '$0.70$', '$0.10$'],
            correctAnswer: 2,
            explanation: 'ME: $P(A \\cup B) = P(A) + P(B) = 0.4 + 0.3 = 0.70$.'
          },
          {
            question: 'Draw 2 cards without replacement from a standard deck. $P(\\text{both aces}) =$',
            options: ['$1/169$', '$1/221$', '$4/52$', '$1/13$'],
            correctAnswer: 1,
            explanation: '$\\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$.'
          },
          {
            question: 'Which problem type would you solve with $1 - P(\\text{complement})$?',
            options: ['$P(A \\text{ and } B)$', '$P(A|B)$', '$P(\\text{at least one success in } n \\text{ trials})$', '$P(A \\text{ or } B)$ when ME'],
            correctAnswer: 2,
            explanation: '"At least one" → complement approach: $1 - P(\\text{zero successes})$.'
          },
          {
            question: '$P(\\text{pass exam}) = 0.8$. Three students independently take the exam. $P(\\text{all three pass}) =$',
            options: ['$2.4$', '$0.512$', '$0.800$', '$0.240$'],
            correctAnswer: 1,
            explanation: 'Independent: $0.8 \\times 0.8 \\times 0.8 = 0.512$.'
          },
          {
            question: '$P(A) = 0.7$, $P(B) = 0.4$, $P(A \\cap B) = 0.28$. $P(A \\cup B) =$',
            options: ['$1.10$', '$0.82$', '$0.28$', '$0.42$'],
            correctAnswer: 1,
            explanation: '$P(A \\cup B) = 0.7 + 0.4 - 0.28 = 0.82$.'
          },
          {
            question: 'A jar has 10 marbles (6 red, 4 green). Draw 2 with replacement. $P(\\text{1st red AND 2nd green}) =$',
            options: ['$0.24$', '$0.60$', '$0.40$', '$0.267$'],
            correctAnswer: 0,
            explanation: 'With replacement → independent: $\\frac{6}{10} \\times \\frac{4}{10} = 0.24$.'
          }
        ]
      }
    }
  ]
};
