export const calcbcArcLengthPart4Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc4-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 4 of 7 — Speed and Arc Length Connection**

### Speed Function

$$\text{Speed}(t) = \sqrt{[x'(t)]^2 + [y'(t)]^2} = \frac{ds}{dt}$$

So arc length = $\int$ speed $\cdot dt$

This connects parametric arc length to physics: **distance = integral of speed**.`
    },
    {
      id: 'arc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Speed Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x(t) = 3\\cos(2t)$, $y(t) = 3\\sin(2t)$. What is its speed?',
            options: ['$6$', '$3$', '$9$', '$2$'],
            correctAnswer: 0,
            explanation: '$x\' = -6\\sin(2t)$, $y\' = 6\\cos(2t)$. Speed $= \\sqrt{36\\sin^2(2t) + 36\\cos^2(2t)} = 6$.'
          }
        ]
      }
    },
    {
      id: 'arc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Arc length is the integral of the speed function.`
    }
  ]
};
