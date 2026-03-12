export const mcatCarsStratPart7Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 7 of 7 — Long-Term CARS Improvement Plan**

### Building CARS Skills Over Time

CARS cannot be crammed. It requires consistent practice over months.

### Recommended Practice Schedule

| Timeframe | Activity |
|-----------|----------|
| 3+ months out | Read challenging non-fiction daily (philosophy, ethics, social science) |
| 2 months out | Practice 1-2 timed passages daily with review |
| 1 month out | Full-length CARS sections under test conditions weekly |
| Test week | Light practice, review strategy, rest |

### How to Review CARS Practice

For EVERY wrong answer, ask:
1. Why was the wrong answer tempting?
2. What type of wrong answer was it? (extreme, out of scope, opposite, etc.)
3. What did I miss in the passage?
4. What specific text supports the right answer?

### Common CARS Mistakes

- Reading too quickly and missing nuance
- Choosing answers based on outside knowledge
- Not reading all four answer choices before selecting
- Spending too much time on one difficult question
- Confusing what the author says vs. what someone else says in the passage`
    },
    {
      id: 'cs7-quiz1',
      type: 'multiple-choice' as const,
      content: `**CARS Strategy Review** 🎯`,
      exercise: {
        questions: [
          {
            question: `The single most effective way to improve CARS performance over 3 months is:`,
            options: [`Daily practice with careful review of every wrong answer`, `Memorizing a list of CARS strategies`, `Reading only science passages`, `Spending all study time on CARS and ignoring other sections`],
            correctAnswer: 0,
            explanation: `CARS improvement comes from consistent, deliberate practice with thorough review. Understanding WHY you got questions wrong is more valuable than doing more passages. Quality > quantity.`
          }
        ]
      }
    },
    {
      id: 'cs7-summary',
      type: 'text' as const,
      content: `### CARS Strategy — Complete! ✅

CARS is a skill built over time. The keys: active reading, strong elimination, understanding author tone, and consistent practice with careful review. Every wrong answer is a learning opportunity.`
    }
  ]
};
