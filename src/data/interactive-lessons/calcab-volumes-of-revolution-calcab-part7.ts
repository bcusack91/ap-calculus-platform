export const calcabVolumesPart7Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol7-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**

| Method | Formula |
|--------|---------|
| Disk | $V = \\pi\\int [R]^2\\,dx$ |
| Washer | $V = \\pi\\int [R^2 - r^2]\\,dx$ |
| Cross-section | $V = \\int A(x)\\,dx$ |`
    },
    {
      id: 'vol7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^3$ from $x = 0$ to $x = 1$ about the $x$-axis. Find the volume.',
            options: ['$\\frac{\\pi}{7}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{7}$', '$\\frac{\\pi}{3}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 x^6\\,dx = \\pi[\\frac{x^7}{7}]_0^1 = \\frac{\\pi}{7}$.'
          },
          {
            question: 'Which method has cross-sections that are rings (annuli)?',
            options: ['Disk', 'Washer', 'Shell', 'Cross-section'],
            correctAnswer: 1,
            explanation: 'The washer method produces ring-shaped cross-sections with outer radius $R$ and inner radius $r$.'
          }
        ]
      }
    },
    {
      id: 'vol7-summary',
      type: 'text' as const,
      content: `### Volumes of Revolution \u2014 Complete! \u2705

You have mastered:
- \u2705 Disk method (single curve rotation)
- \u2705 Washer method (two curves, hole in middle)
- \u2705 Rotation about non-standard axes
- \u2705 Cross-sectional volumes with known shapes`
    }
  ]
};
