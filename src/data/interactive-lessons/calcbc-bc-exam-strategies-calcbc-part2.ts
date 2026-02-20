export const calcbcExamStrategyPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str2-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 2 of 7 — BC-Only Topics**

### Topics Unique to BC (not on AB)

1. **Series**: Taylor, Maclaurin, Lagrange, convergence tests
2. **Integration**: By parts, partial fractions, improper integrals
3. **Parametric/Polar/Vector**: Curves, areas, arc length
4. **Euler's Method** (extended)
5. **Logistic Growth**

### Scoring

BC students also receive an AB Subscore. ~60% of BC exam is AB content.`
    },
    {
      id: 'str2-quiz1',
      type: 'multiple-choice' as const,
      content: '**BC Topics** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which topic appears on BC but NOT on AB?',
            options: ['Integration by parts', 'Chain rule', 'Riemann sums', 'Mean Value Theorem'],
            correctAnswer: 0,
            explanation: 'Integration by parts is a BC-only technique. The other topics appear on both AB and BC.'
          }
        ]
      }
    },
    {
      id: 'str2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Series is the biggest BC-only topic. Master AB content first—it is 60% of BC.`
    }
  ]
};
