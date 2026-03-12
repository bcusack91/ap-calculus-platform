export const satLinearEquationsPart7Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le7-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 7 of 7 — SAT Mixed Practice & Review**

### Quick Reference

| Concept | Formula/Rule |
|---------|-------------|
| Slope-intercept | $y = mx + b$ |
| Standard form | $Ax + By = C$, slope $= -A/B$ |
| Point-slope | $y - y_1 = m(x - x_1)$ |
| Slope formula | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| Parallel | Same slope |
| Perpendicular | $m_1 \\cdot m_2 = -1$ |
| System: no solution | Same slope, different intercepts |
| System: ∞ solutions | Identical equations |

### Common SAT Mistakes to Avoid

1. **Forgetting to flip** the inequality sign when dividing by a negative
2. **Misreading** what the question asks — "What is $x + y$?" vs "What is $x$?"
3. **Not checking** answer choices by plugging back in
4. **Rushing** standard form → slope conversion (slope is $-A/B$, not $A/B$)

### Time-Saving Strategies

- **Back-solve from answer choices** — plug in each option when algebra is messy
- **Pick smart numbers** — if the problem has fractions, choose a common denominator
- **Look for shortcuts** — many system problems can be solved by adding/subtracting the equations directly`
    },
    {
      id: 'le7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $3(x - 2) = 2x + 7$, what is the value of $5x$?',
            options: ['$65$', '$13$', '$15$', '$60$'],
            correctAnswer: 0,
            explanation: '$3x - 6 = 2x + 7$ → $x = 13$. The question asks for $5x = 5(13) = 65$. Always read what the question asks for!'
          },
          {
            question: 'Line $p$ has equation $y = -2x + 5$. Line $q$ is perpendicular to $p$ and passes through $(4, 1)$. What is the y-intercept of $q$?',
            options: ['$-1$', '$1$', '$3$', '$-3$'],
            correctAnswer: 0,
            explanation: 'Perpendicular slope: $1/2$. Point-slope: $y - 1 = \\frac{1}{2}(x - 4)$ → $y = \\frac{1}{2}x - 1$. The y-intercept is $-1$.'
          },
          {
            question: 'For what value of $a$ does $ax + 6y = 12$ and $2x + 3y = 5$ have no solution?',
            options: ['$4$', '$2$', '$6$', '$3$'],
            correctAnswer: 0,
            explanation: 'No solution = parallel lines = same slope. First equation slope: $-a/6$. Second: $-2/3$. Set equal: $-a/6 = -2/3$ → $a = 4$. Check y-intercepts differ: $12/6 = 2 \\neq 5/3$. ✓'
          }
        ]
      }
    },
    {
      id: 'le7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Master all forms of linear equations and when to use each
- Systems: elimination is usually faster than substitution on the SAT
- Always check what the question is asking for — $x$? $y$? $x + y$? $5x$?
- Back-solving from answer choices is a powerful SAT-specific strategy
- Practice converting between forms fluently — speed matters on test day`
    }
  ]
};
