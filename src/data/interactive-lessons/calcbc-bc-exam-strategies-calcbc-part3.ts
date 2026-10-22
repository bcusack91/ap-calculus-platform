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
| Units, only when the question asks you to indicate units | 1 pt |
| Correct answer (decimals accurate to three places) | 1 pt |

> **Key Fact:** You can earn setup points even if your final computation is wrong. **Always show your setup!**

### Answers Without Work

If you write ONLY the final answer:
- **Correct:** it depends on the point. Some answer points are marked "with or without supporting work" (common on calculator parts), but points for a setup, a justification, or an "answer with supporting work" cannot be earned by a bare answer.
- **Incorrect:** no credit, since there is no work to earn a setup point

If you show the setup AND get the wrong numerical answer:
- You keep the setup points and lose only the points that depend on the wrong value

**Bottom line: Always show work.** Also, answers need not be simplified, and within one question at most one point is lost for inappropriate rounding.`
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
- Cross out work you want scored: crossed-out work is not scored
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
            question: 'Which statement about a correct FRQ answer written with no supporting work matches the official scoring guidelines?',
            options: ['Some points accept it, not setup or justification points', 'It always earns full credit for every point in that part of the question', 'It never earns any credit, even on a calculator-active part', 'It earns credit only when the final value is fully simplified'],
            correctAnswer: 0,
            explanation: 'Recent scoring guidelines mark some answer points "with or without supporting work," while setup, justification, and "answer with supporting work" points need the work shown. So a bare correct answer can earn some credit but never all of it on a multi-point part, and answers need not be simplified to earn credit.'
          },
          {
            question: 'On an FRQ about particle motion, a student forgets to include units. This typically costs:',
            options: ['1 point, when the problem asks for units', '0 points — units are never scored', '3 points — one per part', 'The entire question score'],
            correctAnswer: 0,
            explanation: 'A units point exists only when the question asks you to indicate units of measure; then a missing or wrong unit costs that 1 point. There is no units point on parts that do not ask for units.'
          },
          {
            question: 'A student writes two different answers for part (b) without crossing either out. The reader:',
            options: ['Scores the worse of the two answers', 'Scores the better one', 'Averages the two scores', 'Scores the first one'],
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
            options: ['$\\int_0^2 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt$', '$\\int_0^2 \\sqrt{x^2 + y^2}\\,dt$', '$\\int_0^2 \\sqrt{1 + (3t^2/(2t))^2}\\,dt$', '$\\int_0^2 \\sqrt{t^4 + t^6}\\,dt$'],
            correctAnswers: ['$\\int_0^2 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt$'],
            hints: ['Arc length = $\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$.'],
            explanation: '$dx/dt = 2t$, $dy/dt = 3t^2$. Arc length $= \\int_0^2 \\sqrt{4t^2 + 9t^4}\\,dt$. The setup alone is worth points.'
          },
          {
            label: 'For speed at $t = 1$, the proper notation is:',
            options: ['$\\sqrt{(x\'(1))^2 + (y\'(1))^2} = \\sqrt{4 + 9} = \\sqrt{13}$', '$|x(1) + y(1)| = |1 + 1| = 2$', '$x\'(1) + y\'(1) = 2 + 3 = 5$', '$\\sqrt{(x(1))^2 + (y(1))^2} = \\sqrt{2}$'],
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
