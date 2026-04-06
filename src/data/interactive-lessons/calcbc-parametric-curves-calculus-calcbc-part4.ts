export const calcbcParametricPart4Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param4-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 4 of 7 — Area Under Parametric Curves**

### Area Formula

$$A = \int_a^b y(t)\,\\frac{dx}{dt}\,dt$$

or equivalently $A = \int_a^b g(t) \cdot f'(t)\,dt$

### Speed of a Parametric Curve

$$\\text{Speed} = \sqrt{\left(\\frac{dx}{dt}\\right)^2 + \left(\\frac{dy}{dt}\\right)^2}$$

### Distance Traveled

$$\\text{Distance} = \int_a^b \sqrt{\left(\\frac{dx}{dt}\\right)^2 + \left(\\frac{dy}{dt}\\right)^2}\,dt$$`
    },
    {
      id: 'param4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area & Speed** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x = 3t$, $y = 4t$ for $0 \\leq t \\leq 2$. Find the speed.',
            options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$.'
          }
        ]
      }
    },
    {
      id: 'param4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Speed is the magnitude of the velocity vector.`
    }
  ]
};
