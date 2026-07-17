export const satProbSolvDataPart6Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd6-intro',
      type: 'text' as const,
      content: `# Probability & Counting

**Part 6 of 7 — SAT Probability Essentials**

### Basic Probability
$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

### Complement Rule
$$P(\\text{not A}) = 1 - P(A)$$

Often easier: "What's the probability of getting AT LEAST one?" = 1 − P(none).

### "Or" vs. "And"
- **P(A or B)** = P(A) + P(B) − P(A and B)
- **P(A and B)** for independent events = P(A) × P(B)

### SAT Probability Questions — Common Types
1. **From a table**: "A randomly selected student from the table above..."
2. **Cards/marbles**: "If 3 red and 5 blue marbles..."
3. **Surveys**: "Based on the survey results, what proportion..."

### Expected Value
If the SAT asks what value you'd "expect":
$$\\text{Expected} = \\text{Total} \\times P(\\text{event})$$

Example: 200 people surveyed, 35% prefer A → Expected = 200 × 0.35 = 70

### Relative Frequency
Just another word for proportion:
$$\\text{Relative frequency of A} = \\frac{\\text{count of A}}{\\text{total count}}$$`
    },
    {
      id: 'psd6-q1',
      type: 'quiz' as const,
      question: 'A bag has 4 red, 6 blue, and 5 green marbles. What is the probability of NOT drawing a red marble?',
      options: [
        '4/15',
        '11/15',
        '6/15',
        '2/3'
      ],
      correctAnswer: 1,
      explanation: 'P(red) = 4/15. P(not red) = 1 − 4/15 = 11/15. Alternatively: non-red marbles = 6 + 5 = 11, so P(not red) = 11/15.'
    },
    {
      id: 'psd6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Probability Strategies

### Worked Example 1: "At Least One" with Complement

| Step | Work |
|---|---|
| **Problem** | "Roll a die twice. What is P(at least one 6)?" |
| **Complement** | P(no sixes) $= \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$ |
| **Answer** | P(at least one 6) $= 1 - \\frac{25}{36} = \\frac{11}{36}$ |

### Worked Example 2: Expected Value from a Survey

| Step | Work |
|---|---|
| **Problem** | "In a sample, 42% prefer Brand A. If 500 people are surveyed from the same population, how many would you expect to prefer Brand A?" |
| **Expected** | $500 \\times 0.42 = 210$ people |

### Probability Rules Summary

| Rule | Formula | When to Use |
|---|---|---|
| Complement | $P(\\text{not } A) = 1 - P(A)$ | "At least one", "none" |
| Or (general) | $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ | Either event |
| Or (mutually exclusive) | $P(A \\cup B) = P(A) + P(B)$ | Events can't overlap |
| And (independent) | $P(A \\cap B) = P(A) \\times P(B)$ | "Both", "all" |
| And (dependent) | $P(A \\cap B) = P(A) \\times P(B|A)$ | Without replacement |

### SAT Probability from Tables

The SAT usually gives you a two-way table and asks:
1. **Simple probability**: one cell ÷ grand total
2. **Conditional**: one cell ÷ row/column total
3. **"At least"**: use complement (1 − P(none))`
    },
    {
      id: 'psd6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Probability Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A class has 12 boys and 18 girls. Two students are picked randomly without replacement. What is P(both are girls)?',
            options: ['$\\frac{18 \\times 17}{30 \\times 29} = \\frac{306}{870}$', '$\\frac{18}{30} \\times \\frac{18}{30}$', '$\\frac{18}{30} \\times \\frac{17}{30}$', '$\\frac{12 \\times 18}{30 \\times 29}$'],
            correctAnswer: 0,
            explanation: 'Without replacement: first girl $= 18/30$, second girl $= 17/29$ (one fewer girl, one fewer total). P(both girls) $= \\frac{18}{30} \\times \\frac{17}{29} = \\frac{306}{870} \\approx 0.352$.'
          },
          {
            question: 'Events A and B are independent. P(A) = 0.3, P(B) = 0.5. What is P(A or B)?',
            options: ['$0.65$', '$0.80$', '$0.15$', '$0.50$'],
            correctAnswer: 0,
            explanation: 'P(A or B) $= P(A) + P(B) - P(A \\text{ and } B) = 0.3 + 0.5 - (0.3)(0.5) = 0.8 - 0.15 = 0.65$.'
          },
          {
            question: 'In a survey, 70% drink coffee and 40% drink tea. 25% drink both. What percent drink neither?',
            options: ['$15\\%$', '$10\\%$', '$25\\%$', '$30\\%$'],
            correctAnswer: 0,
            explanation: 'P(coffee or tea) $= 0.70 + 0.40 - 0.25 = 0.85$. P(neither) $= 1 - 0.85 = 0.15 = 15\\%$.'
          }
        ]
      }
    },
    {
      id: 'psd6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Probability Rule Identification** — Match the scenario to the correct approach.',
      exercise: {
        dropdowns: [
          '"P(at least one head in 3 flips)" → [1 − P(no heads)|P(H) × 3|P(H) + P(H) + P(H)|3/6]',
          '"P(red OR blue marble)" from a bag → [P(R) + P(B)|P(R) × P(B)|1 − P(green)|P(R) + P(B) − P(R and B)]',
          'Two dice, P(both show 6) → [P(6) × P(6)|(1/6) + (1/6)|1 − P(not 6)|2/12]',
          'Drawing 2 cards without replacement, P(both aces) → [(4/52)(3/51)|(4/52)(4/52)|(4/52)(4/51)|8/52]'
        ],
        correctAnswers: ['1 − P(no heads)', 'P(R) + P(B)', 'P(6) × P(6)', '(4/52)(3/51)'],
        hint1: '"At least one" → complement is easiest.',
        hint2: 'Red and blue are mutually exclusive (can\'t be both) → just add.',
        hint3: 'Dice rolls are independent → multiply.',
        explanation: 'At least one → complement: 1 − $(1/2)^{3}$ = 7/8. Mutually exclusive colors → add: P(R) + P(B). Independent dice → multiply: $(1/6)^{2}$. Without replacement → second draw changes: (4/52)(3/51).'
      }
    },
    {
      id: 'psd6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary: Probability

| Rule | Formula | Key Word |
|---|---|---|
| Basic | Favorable ÷ Total | "probability of" |
| Complement | $1 - P(A)$ | "at least one", "not" |
| Or (exclusive) | $P(A) + P(B)$ | Can't happen together |
| Or (overlap) | $P(A) + P(B) - P(A \\cap B)$ | Can happen together |
| And (independent) | $P(A) \\times P(B)$ | With replacement, separate trials |
| And (dependent) | $P(A) \\times P(B|A)$ | Without replacement |
| Expected value | Total $\\times$ P(event) | "How many would you expect" |

*Next: Comprehensive review and mixed practice →*`
    }
  ]
};
