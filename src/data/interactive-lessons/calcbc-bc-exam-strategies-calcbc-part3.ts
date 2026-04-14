export const calcbcExamStrategyPart3Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es3-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies

**Part 3 of 7 — Maximizing Points on FRQs**

### How FRQs Are Scored

Each FRQ has **9 points** distributed across parts (a)–(d). Points are earned for:

| Action | Points |
|--------|--------|
| Correct integral/derivative setup | 1–2 pts |
| Correct evaluation/simplification | 1–2 pts |
| Proper justification | 1–2 pts |
| Answer with correct units (if applicable) | 1 pt |
| Final numerical answer | 1 pt |

> **Key Fact:** You can earn setup points even if your final computation is wrong. **Always show your setup!**

### The "Bald Answer" Rule

If you write ONLY the final answer with no work:
- **Correct:** Full credit
- **Incorrect:** ZERO credit

If you show setup AND get the wrong numerical answer:
- You can still earn 50–75% of the points

**Bottom line: Always show work.**`
    },
    {
      id: 'es3-notation',
      type: 'text' as const,
      content: `### Notation That Earns (or Loses) Points

**DO:**
- Write $\\int_a^b$ with limits, not just $\\int$
- Write $\\frac{d}{dx}[\\ldots]$ or $f'(x) = \\ldots$
- Use proper limit notation: $\\lim_{x \\to a}$
- Include units when the problem gives them
- Label which part you're answering: (a), (b), etc.

**DON'T:**
- Write $\\frac{dy}{dx} = \\frac{\\text{top}}{\\text{bottom}}$ — use $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$
- Use calculator syntax like nDeriv or fnInt
- Cross out work unless you're replacing it (readers look at crossed-out work)
- Write contradictory statements (you get the WORSE of the two scores)

> **AP Tip:** If you write two different answers for the same part, the reader scores the WORSE one. Cross out work you don't want scored.`
    },
    {
      id: 'es3-mc',
      type: 'multiple-choice' as const,
      content: '**FRQ Scoring Practice**',
      exercise: {
        questions: [
          {
            question: 'A student writes $\\int_0^3 f(x)\\,dx = 12$ with no work shown. The correct answer is $12$. The student earns:',
            options: ['Full credit — correct bald answer', '0 points — no work shown', 'Partial credit only', '1 point for the answer'],
            correctAnswer: 0,
            explanation: 'A correct "bald answer" earns full credit. But this is risky — if the answer were wrong, they\'d get 0 points.'
          },
          {
            question: 'On an FRQ about particle motion, a student forgets to include units. This typically costs:',
            options: ['1 point (units are usually worth 1 pt when required)', '0 points — units don\'t matter', '3 points', 'The entire question score'],
            correctAnswer: 0,
            explanation: 'When units are specified in the problem, omitting them typically costs 1 point. Always check if the problem gives units.'
          },
          {
            question: 'A student writes two different answers for part (b) without crossing either out. The reader:',
            options: ['Scores the worse of the two answers', 'Scores the better of the two', 'Averages the scores', 'Ignores both'],
            correctAnswer: 0,
            explanation: 'AP readers score the worse answer when two contradictory responses are given. Always cross out work you don\'t want scored.'
          }
        ]
      }
    },
    {
      id: 'es3-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Setup Practice**\n\nA particle moves along a curve with $x(t) = t^2$, $y(t) = t^3$ for $0 \\leq t \\leq 2$.',
      exercise: {
        dropdowns: [
          {
            label: 'The correct setup for arc length is:',
            options: ['$\\int_0^2 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt$', '$\\int_0^2 \\sqrt{x^2 + y^2}\\,dt$', '$\\int_0^2 (2t + 3t^2)\\,dt$', '$\\int_0^2 \\sqrt{t^4 + t^6}\\,dt$'],
            correctAnswers: ['$\\int_0^2 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt$'],
            hints: ['Arc length = $\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$.'],
            explanation: '$dx/dt = 2t$, $dy/dt = 3t^2$. Arc length $= \\int_0^2 \\sqrt{4t^2 + 9t^4}\\,dt$. The setup alone is worth points.'
          },
          {
            label: 'For speed at $t = 1$, the proper notation is:',
            options: ['$\\sqrt{(x\'(1))^2 + (y\'(1))^2} = \\sqrt{4 + 9} = \\sqrt{13}$', '$|x(1) + y(1)| = |1 + 1| = 2$', '$x\'(1) + y\'(1) = 2 + 3 = 5$', '$\\sqrt{1^2 + 1^2} = \\sqrt{2}$'],
            correctAnswers: ['$\\sqrt{(x\'(1))^2 + (y\'(1))^2} = \\sqrt{4 + 9} = \\sqrt{13}$'],
            hints: ['Speed = magnitude of velocity vector.'],
            explanation: '$x\'(1) = 2$, $y\'(1) = 3$. Speed $= \\sqrt{4 + 9} = \\sqrt{13}$.'
          }
        ]
      }
    },
    {
      id: 'es3-input',
      type: 'input-box' as const,
      content: '**Justification Practice**',
      exercise: {
        question: 'A particle is at rest when speed $= 0$. Given $x\'(t) = 2t$ and $y\'(t) = 3t^2$, at what time $t \\geq 0$ is the particle at rest?',
        correctAnswer: '0',
        acceptableAnswers: ['0', 't=0', 't = 0'],
        hints: ['Speed $= \\sqrt{(2t)^2 + (3t^2)^2} = 0$ requires both components to be zero.'],
        explanation: '$x\'(t) = 0 \\Rightarrow t = 0$ and $y\'(t) = 0 \\Rightarrow t = 0$. Both are zero only at $t = 0$.'
      }
    },
    {
      id: 'es3-summary',
      type: 'text' as const,
      content: `### FRQ Scoring Summary

1. **Show all setup** — integral bounds, derivative formulas
2. **Use proper notation** — no calculator syntax
3. **Include units** when the problem provides them
4. **Cross out** wrong work; never leave contradictory answers
5. **Write something** for every part — partial credit exists
6. **Label each part** clearly: (a), (b), (c), (d)

**Next: Part 4 — Time Management and Common Mistakes**`
    }
  ]
};
