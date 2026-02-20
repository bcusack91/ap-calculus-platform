export const calcbcExamStrategyPart5Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str5-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 5 of 7 — Parametric & Polar FRQs**

### Parametric FRQ Checklist

- $dy/dx = (dy/dt)/(dx/dt)$
- Speed: $\sqrt{(dx/dt)^2 + (dy/dt)^2}$
- Arc length: $\int \sqrt{(dx/dt)^2 + (dy/dt)^2}\,dt$
- Total distance vs. displacement

### Polar FRQ Checklist

- Area: $A = \frac{1}{2}\int r^2\,d\theta$
- Find intersection: set $r_1 = r_2$ (and check pole)
- Slope: $dy/dx = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$`
    },
    {
      id: 'str5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Param/Polar** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x(t) = t^2$, $y(t) = t^3$. At $t = 1$, $dy/dx = $',
            options: ['$3/2$', '$3$', '$2/3$', '$1$'],
            correctAnswer: 0,
            explanation: '$dy/dx = (dy/dt)/(dx/dt) = 3t^2/(2t) = 3t/2$. At $t = 1$: $3/2$.'
          }
        ]
      }
    },
    {
      id: 'str5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Parametric: use $dy/dt$ and $dx/dt$. Polar: area is $(1/2)\\int r^2\\,d\\theta$.`
    }
  ]
};
