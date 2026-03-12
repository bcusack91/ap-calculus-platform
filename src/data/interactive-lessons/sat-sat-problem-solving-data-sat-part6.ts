export const satProbSolvDataPart6Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd6-intro',
      type: 'text' as const,
      content: `# Probability & Counting

**Part 6 of 7 — SAT Probability Essentials**

### Basic Probability
$$P(\text{event}) = \frac{\text{favorable outcomes}}{\text{total outcomes}}$$

### Complement Rule
$$P(\text{not A}) = 1 - P(A)$$

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
$$\text{Expected} = \text{Total} \times P(\text{event})$$

Example: 200 people surveyed, 35% prefer A → Expected = 200 × 0.35 = 70

### Relative Frequency
Just another word for proportion:
$$\text{Relative frequency of A} = \frac{\text{count of A}}{\text{total count}}$$`
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
    }
  ]
};
