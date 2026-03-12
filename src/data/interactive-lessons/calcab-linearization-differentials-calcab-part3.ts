export const calcabLinearizationPart3Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin3-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 3 of 7 — Over/Underestimates**

### Concavity Determines the Error

| Concavity | Tangent line is... | Linear approx is... |
|-----------|-------------------|---------------------|
| Concave up ($f'' > 0$) | Below the curve | Underestimate |
| Concave down ($f'' < 0$) | Above the curve | Overestimate |

This is a common AP exam question!`
    },
    {
      id: 'lin3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Over or Under?** 🎯',
      exercise: {
        questions: [
          {
            question: 'The linearization of $f(x) = e^x$ at $a = 0$ gives $L(x) = 1 + x$. Is $L(0.5)$ an overestimate or underestimate?',
            options: ['Underestimate', 'Overestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = e^x > 0$ everywhere, so $f$ is concave up. The tangent line lies below the curve → underestimate.'
          },
          {
            question: 'The linearization of $f(x) = \ln x$ at $a = 1$ gives $L(x) = x - 1$. Is $L(1.5)$ an overestimate or underestimate?',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = -1/x^2 < 0$, so $f$ is concave down. The tangent line lies above the curve → overestimate. $L(1.5) = 0.5 > \ln(1.5) \approx 0.405$.'
          }
        ]
      }
    },
    {
      id: 'lin3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Concave up → tangent line below → underestimate
2. Concave down → tangent line above → overestimate`
    }
  ]
};
