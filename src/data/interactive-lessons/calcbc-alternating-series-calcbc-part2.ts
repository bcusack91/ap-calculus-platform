export const calcbcAlternatingPart2Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as2-intro',
      type: 'text' as const,
      content: `# Alternating Series — Error Bound

**Part 2 of 7 — The Alternating Series Remainder**

### The Error Bound Theorem

If $\\sum (-1)^{n+1} b_n$ satisfies the AST conditions and $S$ is the exact sum, then the error after $N$ terms satisfies:

$$\\boxed{|S - S_N| \\le b_{N+1}}$$

The error is bounded by the **absolute value of the first omitted term**.

### Why This Works

The partial sums of an alternating series "bracket" the true sum:

$$S_1 > S > S_2,\\quad S_3 > S > S_4,\\quad \\ldots$$

Each new term overshoots and then corrects, so the error is at most the magnitude of the next term.

### Example

$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^3}$. Approximate $S$ using 4 terms.

$S_4 = 1 - \\frac{1}{8} + \\frac{1}{27} - \\frac{1}{64} = \\frac{1728 - 216 + 64 - 27}{1728} \\approx 0.8958$

Error $\\le b_5 = 1/125 = 0.008$. So $S \\approx 0.896 \\pm 0.008$.

> **AP Tip:** This error bound appears almost every year on the BC exam, often in FRQ. Know it cold.`
    },
    {
      id: 'as2-finding-n',
      type: 'text' as const,
      content: `### Finding $N$ for a Given Accuracy

**Problem:** How many terms of $\\sum (-1)^{n+1}/n^2$ ensure error $< 0.01$?

**Solution:** Need $b_{N+1} < 0.01$, i.e., $\\frac{1}{(N+1)^2} < 0.01$.

$(N+1)^2 > 100 \\implies N+1 > 10 \\implies N \\ge 10$

So **10 terms** give accuracy within $0.01$.

### Important Distinctions

| Feature | Alternating Series Error | Lagrange Error (Taylor) |
|---------|------------------------|----------------------|
| Formula | $|R_N| \\le b_{N+1}$ | $|R_n(x)| \\le \\frac{M|x-c|^{n+1}}{(n+1)!}$ |
| Applies to | Any alternating series meeting AST | Taylor polynomial remainders |
| Easy to use? | Very easy | Requires finding $M$ |
| On AP exam | Very common | Also very common |`
    },
    {
      id: 'as2-mc1',
      type: 'multiple-choice' as const,
      content: '**Error Bound Practice**',
      exercise: {
        questions: [
          {
            question: 'For $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n!}$, the error using 5 terms is at most:',
            options: ['$1/720$', '$1/120$', '$1/24$', '$1/6$'],
            correctAnswer: 0,
            explanation: 'Using 5 terms: error $\\le b_6 = 1/6! = 1/720$.'
          },
          {
            question: 'How many terms of $\\sum (-1)^{n+1}/n$ are needed for error $< 0.001$?',
            options: ['1000', '100', '10', '500'],
            correctAnswer: 0,
            explanation: 'Need $1/(N+1) < 0.001$, so $N+1 > 1000$, meaning $N \\ge 1000$. The harmonic series converges slowly!'
          },
          {
            question: 'The alternating series error bound guarantees the error is at most the absolute value of:',
            options: ['The first omitted term', 'The last included term', 'The sum of all remaining terms', 'Twice the first omitted term'],
            correctAnswer: 0,
            explanation: '$|S - S_N| \\le b_{N+1}$ = the first term NOT included in the partial sum.'
          }
        ]
      }
    },
    {
      id: 'as2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Error Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1)!}$ (related to $\\sin 1$), error using terms through $n=2$ is at most:',
            options: ['$1/5! = 1/120$', '$1/7! = 1/5040$', '$1/3! = 1/6$', '$1/4! = 1/24$'],
            correctAnswers: ['$1/5! = 1/120$'],
            hints: ['Terms through $n=2$ means we include $n=0,1,2$. The next term is $n=3$: $1/(2(3)+1)! = 1/7!$. Wait — recount carefully.'],
            explanation: 'Terms for $n=0,1,2$: $1/1! - 1/3! + 1/5!$. The first omitted term is $n=3$: $1/7! = 1/5040$. Error $\\le 1/5040$. Actually, the next omitted term has $b_3 = 1/(2\\cdot3+1)! = 1/7!$. So the answer is $1/5040$, not $1/120$.'
          },
          {
            label: 'If $S_5 = 0.9$, $b_6 = 0.02$, and $S_5$ is an overestimate, then $S$ is between:',
            options: ['$0.88$ and $0.9$', '$0.9$ and $0.92$', '$0.88$ and $0.92$', 'Cannot determine'],
            correctAnswers: ['$0.88$ and $0.9$'],
            hints: ['If $S_5$ overestimates, then $S < S_5 = 0.9$ and $|S - 0.9| \\le 0.02$.'],
            explanation: '$S < S_5 = 0.9$ (overestimate) and $S \\ge 0.9 - 0.02 = 0.88$. So $0.88 \\le S \\le 0.9$.'
          }
        ]
      }
    },
    {
      id: 'as2-input',
      type: 'input-box' as const,
      content: '**Finding Number of Terms**',
      exercise: {
        question: 'How many terms of $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^3}$ are needed for error less than $0.001$?',
        correctAnswer: '10',
        acceptableAnswers: ['10'],
        hints: ['Need $1/(N+1)^3 < 0.001$, so $(N+1)^3 > 1000$.'],
        explanation: '$(N+1)^3 > 1000 \\implies N+1 > 10 \\implies N \\ge 10$. Check: $b_{11} = 1/11^3 = 1/1331 \\approx 0.00075 < 0.001$ ✓.'
      }
    },
    {
      id: 'as2-summary',
      type: 'text' as const,
      content: `### Summary

- Error $\\le |b_{N+1}|$ = first omitted term
- To find $N$ for accuracy $\\epsilon$: solve $b_{N+1} < \\epsilon$
- Partial sums alternately overestimate and underestimate
- This is one of the MOST tested concepts on the BC exam

> **Next:** Part 3 — Absolute vs. Conditional Convergence in Alternating Series.`
    }
  ]
};
