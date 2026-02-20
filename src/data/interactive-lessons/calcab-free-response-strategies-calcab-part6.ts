export const calcabFRQPart6Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq6-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 6 of 7 — Scoring & Partial Credit**

### How FRQs Are Scored

Each question is worth **9 points**, typically split:
- Part (a): 2 points
- Part (b): 2-3 points
- Part (c): 2-3 points
- Part (d): 2-3 points

### Partial Credit Tips

- **Each part is graded independently** — always attempt every part
- You can use results from earlier parts even if wrong
- Show your setup for credit even if computation has errors
- A correct answer with no work may get 0 points`
    },
    {
      id: 'frq6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Scoring Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'You get part (a) wrong. What should you do for parts (b)-(d)?',
            options: ['Use your (possibly wrong) answer and continue', 'Leave them blank', 'Start over', 'Write "see part (a)"'],
            correctAnswer: 0,
            explanation: 'Parts are graded independently. If you use a wrong answer from (a) correctly in (b), you can still earn full credit on (b).'
          }
        ]
      }
    },
    {
      id: 'frq6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
1. Never leave a part blank
2. Show work for every part
3. Parts are scored independently`
    }
  ]
};
