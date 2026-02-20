export const calcbcSeriesAppsPart5Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp5-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 5 of 7 — Euler's Formula**

### The Beautiful Connection

$$e^{ix} = \cos x + i\sin x$$

This follows from comparing Maclaurin series:

$e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \cdots$

$= \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) + i\left(x - \frac{x^3}{3!} + \cdots\right)$

$= \cos x + i\sin x$

### Euler's Identity

$$e^{i\pi} + 1 = 0$$`
    },
    {
      id: 'sapp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Euler Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why do $\\sin x$, $\\cos x$, and $e^x$ series produce Euler\'s formula?',
            options: ['The even powers of $e^{ix}$ give $\\cos x$ and the odd powers give $i\\sin x$', 'It is just a coincidence', 'Only works for $x = \\pi$', 'They are unrelated series'],
            correctAnswer: 0,
            explanation: '$i^{2n}$ alternates $\\pm 1$ (matching $\\cos x$) and $i^{2n+1}$ alternates $\\pm i$ (matching $i\\sin x$).'
          }
        ]
      }
    },
    {
      id: 'sapp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Euler's formula connects exponential and trigonometric functions through series.`
    }
  ]
};
