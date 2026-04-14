export const calcbcSequencesPart2Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq2-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Monotone & Bounded Sequences

**Part 2 of 7 — Monotonicity, Bounds, and the Monotone Convergence Theorem**

### Definitions

| Property | Meaning |
|----------|---------|
| **Increasing** | $a_{n+1} \\ge a_n$ for all $n$ |
| **Decreasing** | $a_{n+1} \\le a_n$ for all $n$ |
| **Monotone** | Either increasing or decreasing |
| **Bounded above** | $\\exists M: a_n \\le M$ for all $n$ |
| **Bounded below** | $\\exists m: a_n \\ge m$ for all $n$ |
| **Bounded** | Both bounded above and below |

### Monotone Convergence Theorem

$$\\boxed{\\text{Monotone + Bounded} \\implies \\text{Convergent}}$$

This is one of the most powerful tools for proving convergence without finding the limit.

> **Key Fact:** An increasing sequence that is bounded above must converge. A decreasing sequence that is bounded below must converge.`
    },
    {
      id: 'seq2-tests',
      type: 'text' as const,
      content: `### Testing Monotonicity

**Method 1: Difference test**
$a_{n+1} - a_n > 0 \\implies$ increasing; $< 0 \\implies$ decreasing.

**Method 2: Ratio test** (for positive sequences)
$a_{n+1}/a_n > 1 \\implies$ increasing; $< 1 \\implies$ decreasing.

**Method 3: Derivative test**
If $a_n = f(n)$ and $f'(x) > 0$ for $x \\ge 1$, then $\\{a_n\\}$ is increasing.

### Example

$a_n = \\frac{n}{n+1}$. Is it monotone? Bounded?

$a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)} = \\frac{1}{(n+2)(n+1)} > 0$

So $\\{a_n\\}$ is **increasing**. Also $a_n < 1$ for all $n$ (bounded above). By MCT, it converges. Indeed, $\\lim a_n = 1$.`
    },
    {
      id: 'seq2-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The sequence $a_n = \\frac{1}{n!}$ is:',
            options: ['Decreasing and bounded below by $0$', 'Increasing and bounded', 'Neither increasing nor decreasing', 'Decreasing and unbounded'],
            correctAnswer: 0,
            explanation: '$a_{n+1}/a_n = \\frac{n!}{(n+1)!} = \\frac{1}{n+1} < 1$, so decreasing. $a_n > 0$ for all $n$, so bounded below by $0$. By MCT, it converges (to $0$).'
          },
          {
            question: 'A bounded sequence that is NOT monotone:',
            options: ['May or may not converge', 'Must converge', 'Must diverge', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$a_n = (-1)^n/n$ is bounded and not monotone, but converges. $a_n = (-1)^n$ is bounded and not monotone, but diverges. Boundedness alone is not sufficient.'
          }
        ]
      }
    },
    {
      id: 'seq2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The Monotone Convergence Theorem says convergence is guaranteed when a sequence is:',
            options: ['Monotone AND bounded', 'Just monotone', 'Just bounded', 'Alternating'],
            correctAnswers: ['Monotone AND bounded'],
            hints: ['Both conditions are needed.'],
            explanation: '$a_n = n$ is monotone but not bounded (diverges). $a_n = (-1)^n$ is bounded but not monotone (diverges). You need both.'
          },
          {
            label: '$a_n = \\left(1 + \\frac{1}{n}\\right)^n$ is:',
            options: ['Increasing and bounded above (converges to $e$)', 'Decreasing', 'Unbounded', 'Constant'],
            correctAnswers: ['Increasing and bounded above (converges to $e$)'],
            hints: ['This is the classic definition of $e$.'],
            explanation: 'This sequence is increasing (can be shown by AM-GM) and bounded above by $3$. By MCT, it converges. The limit is $e \\approx 2.71828$.'
          }
        ]
      }
    },
    {
      id: 'seq2-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Let $a_n = \\frac{2n}{n+3}$. Compute $a_1$, $a_2$, $a_3$ and determine the limit. What is $\\lim_{n \\to \\infty} a_n$?',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['$a_1 = 2/4 = 0.5$, $a_2 = 4/5 = 0.8$, $a_3 = 6/6 = 1$.', 'The sequence is increasing toward...'],
        explanation: '$a_n = \\frac{2n}{n+3} = \\frac{2}{1 + 3/n} \\to 2$. The sequence is increasing and bounded above by $2$.'
      }
    },
    {
      id: 'seq2-summary',
      type: 'text' as const,
      content: `### Summary

- Monotone: always increasing or always decreasing
- Test with: difference, ratio, or derivative
- **Monotone Convergence Theorem:** Monotone + Bounded $\\implies$ Convergent
- This theorem proves existence of a limit without finding it

> **Next:** Part 3 — Recursive sequences and special limits.`
    }
  ]
};
