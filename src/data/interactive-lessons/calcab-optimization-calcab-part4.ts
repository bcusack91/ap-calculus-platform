export const calcabOptimizationPart4Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt4-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 4 of 7 — 3D Optimization (Cylinders & Cones)**

### Cylinder with Fixed Surface Area

Minimize the surface area of a cylinder with volume $V = 1000$ cm$^3$.

$V = \\pi r^2 h = 1000$ → $h = \\frac{1000}{\\pi r^2}$

$S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{2000}{r}$

$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0$

$r^3 = \\frac{500}{\\pi}$ → $r = \\left(\\frac{500}{\\pi}\\right)^{1/3} \\approx 5.42$ cm

This gives $h = 2r$ — the optimal cylinder has height equal to its diameter!`
    },
    {
      id: 'opt4-quiz1',
      type: 'multiple-choice' as const,
      content: '**3D Optimization** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cylinder with no top has volume $V = 27\\pi$. What radius minimizes the surface area?',
            options: ['$r = 3$', '$r = 2$', '$r = \\sqrt[3]{27}$', '$r = 9$'],
            correctAnswer: 0,
            explanation: '$h = 27/r^2$. $S = \\pi r^2 + 2\\pi rh = \\pi r^2 + 54\\pi/r$. $S\' = 2\\pi r - 54\\pi/r^2 = 0$. $r^3 = 27$, $r = 3$.'
          }
        ]
      }
    },
    {
      id: 'opt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \\u2014 Part 4
1. 3D optimization follows the same strategy: objective + constraint
2. Express surface area or volume in one variable using the constraint
3. For optimal cylinders: $h = 2r$ (with top) or $h = r$ (without top)`
    }
  ]
};
