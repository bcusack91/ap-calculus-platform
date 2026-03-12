export const calcabTheoremsPart7Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm7-intro',
      type: 'text' as const,
      content: `# Theorem Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'thm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car\'s odometer reads 100 mi at 1:00 PM and 280 mi at 4:00 PM. What can we conclude?',
            options: ['The car went exactly 60 mph at some moment', 'The car averaged 60 mph', 'Both A and B', 'Only B'],
            correctAnswer: 2,
            explanation: 'Average speed = 180/3 = 60 mph. By MVT (assuming speed is continuous), the speedometer read exactly 60 mph at some moment AND the average was 60 mph.'
          },
          {
            question: 'If $f$ is continuous on $[1, 6]$, which is guaranteed?',
            options: ['$f$ has an absolute maximum on $[1, 6]$', '$f\'(c) = 0$ for some $c$', '$f$ is differentiable on $(1, 6)$', '$f$ is bounded above by $f(6)$'],
            correctAnswer: 0,
            explanation: 'EVT: continuous on a closed interval → absolute max and min exist.'
          }
        ]
      }
    },
    {
      id: 'thm7-summary',
      type: 'text' as const,
      content: `### Theorem Applications — Complete! ✅

You have mastered:
- ✅ Intermediate Value Theorem (IVT)
- ✅ Mean Value Theorem (MVT)
- ✅ Extreme Value Theorem (EVT)
- ✅ Rolle's Theorem
- ✅ Choosing the right theorem`
    }
  ]
};
