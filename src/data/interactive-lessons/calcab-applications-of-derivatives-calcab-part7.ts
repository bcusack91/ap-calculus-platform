export const calcabAppsDerivativesPart7Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps7-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives — Review

**Part 7 of 7 — Comprehensive Assessment**`
    },
    {
      id: 'apps7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = x^3 - 12x$ on $[-3, 4]$.',
            options: ['$16$', '$9$', '$36$', '$24$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f(-3) = -27+36 = 9$, $f(-2) = -8+24 = 16$, $f(2) = 8-24 = -16$, $f(4) = 64-48 = 16$. Absolute max = $16$.'
          },
          {
            question: 'How many inflection points does $g(x) = x^5 - 5x^3$ have?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = 20x^3 - 30x = 10x(2x^2 - 3) = 0$ at $x = 0, \\pm\\sqrt{3/2}$. All three are actual sign changes, so 3 inflection points.'
          },
          {
            question: 'If $f\'(2) = 0$, $f\'\'(2) = -3$, what type of extremum is at $x = 2$?',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Second Derivative Test: $f\'(2) = 0$ and $f\'\'(2) < 0$, so concave down at $x = 2$ → local maximum.'
          }
        ]
      }
    },
    {
      id: 'apps7-summary',
      type: 'text' as const,
      content: `### Applications of Derivatives — Complete! ✅

You have mastered:
- ✅ Critical points and increasing/decreasing analysis
- ✅ Second derivative test and concavity
- ✅ Absolute extrema on closed intervals
- ✅ Curve sketching
- ✅ Mean Value Theorem
- ✅ Related rates applications`
    }
  ]
};
