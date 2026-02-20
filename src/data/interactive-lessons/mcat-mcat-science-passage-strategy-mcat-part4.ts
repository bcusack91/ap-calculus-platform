export const mcatSciPassagePart4Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 4 of 7 — Question Types & Strategies**

### MCAT Question Categories

| Type | % of Exam | What It Tests |
|------|----------|---------------|
| **Discrete** (standalone) | ~25% | Pure content knowledge, no passage |
| **Passage-based: Recall** | ~15% | Finding info in the passage |
| **Passage-based: Application** | ~35% | Applying passage info to new situations |
| **Passage-based: Reasoning** | ~25% | Drawing conclusions from data/experiments |

### Strategy by Question Type

**Recall questions**: Answer is IN the passage — go back and find it!
**Application questions**: Use passage + your knowledge to solve a new problem
**Reasoning questions**: What do the results mean? What's the best conclusion?

### Eliminating Wrong Answers

Common wrong answer patterns:
- **True but irrelevant**: Statement is factually correct but doesn't answer the question
- **Extreme language**: "Always," "never," "completely," "no effect"
- **Opposite of correct**: Tests if you're paying attention
- **Partially correct**: Right concept but wrong detail`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Question Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'An answer choice states "The mutation completely eliminates all enzyme function." This is likely wrong because:',
            options: ['Extreme language ("completely," "all") is usually wrong on the MCAT — most biological effects are partial', 'It contains scientific terminology', 'It\'s too short', 'Mutations always eliminate enzyme function'],
            correctAnswer: 0,
            explanation: 'The MCAT loves nuance. Words like "completely," "always," "never," "all" are red flags. In biology, most mutations affect function partially (reduced activity) rather than eliminating it entirely. Moderate, qualified language is usually correct.'
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- ~60% of questions require passage + external knowledge (not just reading)
- Recall: find it in passage. Application: apply to new scenario. Reasoning: interpret data.
- Eliminate extreme language, true-but-irrelevant, and opposite answers
- If stuck, eliminate 2 answers and make an educated guess (no penalty for guessing)`
    }
  ]
};
