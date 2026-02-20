export const calcbcLagrangePart5Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag5-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 5 of 7 — AP FRQ Practice**

### Typical AP Question Format

"Let $f$ be a function with $|f^{(4)}(x)| \\leq 6$ for all $x$ in $[-1, 1]$. Show that the error of $P_3(x)$ at $x = 0.5$ is less than $0.02$."

**Solution**: $|R_3(0.5)| \\leq \\frac{6}{4!}(0.5)^4 = \\frac{6}{24} \\cdot \\frac{1}{16} = \\frac{1}{64} \\approx 0.0156 < 0.02$ ✓`
    },
    {
      id: 'lag5-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $|f^{(5)}(x)| \\leq 10$ for $x \\in [0, 2]$, then $|R_4(2)|$ is at most:',
            options: ['$10 \\cdot 32 / 120 = 8/3$', '$10 \\cdot 16/24$', '$10/120$', '$320/120$... wait, same as first option!'],
            correctAnswer: 0,
            explanation: '$|R_4(2)| \\leq \\frac{10}{5!}|2-0|^5 = \\frac{10 \\cdot 32}{120} = \\frac{320}{120} = \\frac{8}{3}$.'
          }
        ]
      }
    },
    {
      id: 'lag5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Show your formula, substitute values, simplify. State conclusion clearly.`
    }
  ]
};
