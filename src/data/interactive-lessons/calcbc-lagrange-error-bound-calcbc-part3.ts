export const calcbcLagrangePart3Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag3-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 3 of 7 — How Many Terms Do We Need?**

### Determining Degree for Desired Accuracy

"How many terms of $e^x$ centered at $0$ are needed for $|R_n(1)| < 0.001$?"

Need: $\frac{M}{(n+1)!} < 0.001$ where $M \leq 3$ (bound for $e^c$ on $[0,1]$).

$\frac{3}{(n+1)!} < 0.001$

$(n+1)! > 3000$

$7! = 5040 > 3000$ ✓

So $n = 6$ (use $P_6$, i.e., 7 terms).`
    },
    {
      id: 'lag3-quiz1',
      type: 'multiple-choice' as const,
      content: '**How Many Terms?** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many terms of $\\cos x$ at $a = 0$ ensure error $< 0.0001$ at $x = 1$?',
            options: ['$P_6$ (4 nonzero terms)', '$P_4$ (3 nonzero terms)', '$P_8$ (5 nonzero terms)', '$P_2$ (2 nonzero terms)'],
            correctAnswer: 0,
            explanation: 'Need $\\frac{1}{(n+1)!} < 0.0001$. $7! = 5040 > 10000$. Actually we need $\\frac{1}{7!} \\approx 0.0002 > 0.0001$. Try $\\frac{1}{8!} = 1/40320 < 0.0001$. So $n = 7$, but $\\cos x$ only has even terms, so $P_6$ gives same result. Need $P_6$.'
          }
        ]
      }
    },
    {
      id: 'lag3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Solve $(n+1)! > M/\\epsilon$ to find the required degree.`
    }
  ]
};
