export const calcbcAlternatingPart4Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt4-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 4 of 7 — Approximation with Error Bound**

### AP Exam Application

"Approximate $\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!}$ to within $0.001$."

This is $\sin(1)$! Compute partial sums until the first omitted term $< 0.001$.

$n=0$: $1$
$n=1$: $1 - 1/6 = 5/6$
$n=2$: $5/6 + 1/120$

Check: $b_3 = 1/5040 \approx 0.0002 < 0.001$ ✓

So $S_2 = 5/6 + 1/120 = 101/120 \approx 0.8417$ approximates $\sin(1)$ within $0.001$.`
    },
    {
      id: 'alt4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'The series $\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$ equals $e^{-1}$. Using $S_3$, the error is at most:',
            options: ['$1/24$', '$1/6$', '$1/120$', '$1/4$'],
            correctAnswer: 0,
            explanation: '$S_3 = 1 - 1 + 1/2 - 1/6$. First omitted: $b_4 = 1/4! = 1/24$.'
          }
        ]
      }
    },
    {
      id: 'alt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
On the AP exam: compute partial sums until the error bound is small enough.`
    }
  ]
};
