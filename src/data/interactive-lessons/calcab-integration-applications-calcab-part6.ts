export const calcabIntAppsPart6Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia6-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ia6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Integration Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'Region between $y = 4 - x^2$ and $y = 0$. Cross sections perpendicular to $x$-axis are semicircles with diameter on the base. Find the volume.',
            options: ['$\\frac{256\\pi}{105}$', '$\\frac{128\\pi}{15}$', '$\\frac{32\\pi}{5}$', '$\\frac{64\\pi}{15}$'],
            correctAnswer: 0,
            explanation: 'Diameter $= 4 - x^2$, radius $= (4-x^2)/2$. $A = \\frac{\\pi}{2}r^2 = \\frac{\\pi}{8}(4-x^2)^2$. $V = \\frac{\\pi}{8}\\int_{-2}^{2}(4-x^2)^2\\,dx = \\frac{\\pi}{8} \\cdot \\frac{512}{15} \\cdot \\frac{1}{2}$. Actually $\\int_{-2}^2 (16 - 8x^2 + x^4)\\,dx = 2[16x - 8x^3/3 + x^5/5]_0^2 = 2(32 - 64/3 + 32/5) = 2 \\cdot 256/15 = 512/15$. $V = \\frac{\\pi}{8} \\cdot \\frac{512}{15} = \\frac{64\\pi}{15}$. Hmm, let me check: semicircle area with diameter $d$ is $\\frac{\\pi d^2}{8}$. $V = \\frac{\\pi}{8} \\cdot \\frac{512}{15} = \\frac{64\\pi}{15}$.'
          }
        ]
      }
    },
    {
      id: 'ia6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
