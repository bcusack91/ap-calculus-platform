export const calcabVolumesPart5Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol5-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 5 of 7 \u2014 Disk/Washer in $y$**

### Rotating About the $y$-axis Using $dy$

$$V = \\pi\\int_c^d [R(y)]^2\\,dy$$

### Worked Example

$y = x^2$ from $y = 0$ to $y = 4$, rotated about the $y$-axis.

$x = \\sqrt{y}$, so $R = \\sqrt{y}$.

$$V = \\pi\\int_0^4 y\\,dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = 8\\pi$$`
    },
    {
      id: 'vol5-quiz1',
      type: 'multiple-choice' as const,
      content: '**y-Axis Rotation** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the volume when $x = y^2$ from $y = 0$ to $y = 2$ is rotated about the $y$-axis.',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 (y^2)^2\\,dy = \\pi\\int_0^2 y^4\\,dy = \\pi[\\frac{y^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          }
        ]
      }
    },
    {
      id: 'vol5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
- For $y$-axis rotation, express $x$ as a function of $y$
- Use $\\int dy$ with the same disk/washer formulas`
    }
  ]
};
