export const calcbcEulerPart5Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'eul5-intro',
      type: 'text' as const,
      content: `# Euler's Method

**Part 5 of 7 — AP Exam Contexts**

### What the AP Exam Asks

1. **Compute**: Perform 2-3 steps of Euler
2. **Interpret**: Is result an over/underestimate?
3. **Justify**: Explain using concavity

### Template Answer

"Using Euler's method with step size $\\Delta x$:
$y_1 = y_0 + f(x_0, y_0)\\Delta x = ...$

Since $f''(x) > 0$ (concave up), the tangent lines lie below the curve, so Euler's method produces an underestimate."`
    },
    {
      id: 'eul5-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Context** 🎯',
      exercise: {
        questions: [
          {
            question: '$dy/dx = \\cos(xy)$, $y(0) = 0$, $\\Delta x = 0.5$. Find $y(0.5)$.',
            options: ['$0.5$', '$0$', '$1$', '$0.25$'],
            correctAnswer: 0,
            explanation: '$y_1 = 0 + \\cos(0 \\cdot 0)(0.5) = 0 + \\cos(0)(0.5) = 0 + 1(0.5) = 0.5$.'
          }
        ]
      }
    },
    {
      id: 'eul5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Compute, then justify over/underestimate using concavity.`
    }
  ]
};
