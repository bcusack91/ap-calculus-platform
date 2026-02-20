export const calcabFRQPart5Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq5-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 5 of 7 — Common Mistakes to Avoid**

### Top 10 AP Calculus Mistakes

1. **Forgetting $+C$** on indefinite integrals
2. **Not stating hypotheses** when using IVT/MVT
3. **Using the wrong variable** ($x$ vs $t$)
4. **Not including units** in contextual answers
5. **Premature rounding** on calculator problems
6. **Confusing displacement and total distance**
7. **Forgetting absolute values** for total distance
8. **Not checking endpoints** for absolute extrema
9. **Missing a factor** from the chain rule
10. **Not answering the question asked**`
    },
    {
      id: 'frq5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Avoid Common Mistakes** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question asks for total distance. You compute $\\int_0^5 v(t)\\,dt = -3$. What should you do?',
            options: ['Split the integral where $v = 0$ and use $|v(t)|$', 'Write $|-3| = 3$', 'The total distance is $-3$', 'Write $3$'],
            correctAnswer: 0,
            explanation: 'Total distance $= \\int |v(t)|\\,dt$. You must split at zeros and handle each piece. Simply taking absolute value of the result is wrong.'
          }
        ]
      }
    },
    {
      id: 'frq5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Read the question carefully
2. Include units and justify theorems
3. Total distance and displacement are different!`
    }
  ]
};
