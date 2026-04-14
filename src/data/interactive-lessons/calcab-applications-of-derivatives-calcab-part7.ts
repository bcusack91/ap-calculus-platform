export const calcabAppsDerivativesPart7Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps7-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives — Review

**Part 7 of 7 — Comprehensive Assessment**

### Complete Topic Summary

| Part | Topic | Key Tool |
|:---:|:---:|:---:|
| 1 | Critical Points & First Derivative Test | Sign chart of $f'$ |
| 2 | Second Derivative & Concavity | Sign of $f''$ |
| 3 | Absolute Extrema | Candidates Test: CPs + endpoints |
| 4 | Curve Sketching | 7-step procedure, reading $f'$ graphs |
| 5 | Mean Value Theorem | $f'(c) = \\frac{f(b)-f(a)}{b-a}$ |
| 6 | Optimization | Objective + constraint → single variable |

### Quick Reference

$$\\boxed{f' > 0: \\uparrow \\quad f' < 0: \\downarrow \\quad f'' > 0: \\cup \\quad f'' < 0: \\cap}$$`
    },
    {
      id: 'apps7-decision',
      type: 'text' as const,
      content: `### Decision Guide: Which Test to Use?

| Scenario | Best Approach |
|:---:|:---:|
| Classify a critical point | First or Second Derivative Test |
| Find abs extrema on $[a,b]$ | Candidates Test |
| $f''(c) = 0$ at critical point | Use First Derivative Test (SDT inconclusive) |
| Reading a graph of $f'$ | $f'$ zeros = potential extrema; $f'$ extrema = inflection |
| Justify on free-response | State hypotheses, then conclusion |
| Optimization | Write objective, use constraint, differentiate |
| MVT application | Verify continuous on $[a,b]$, differentiable on $(a,b)$ |

### Common AP Mistakes to Avoid

| Mistake | Correction |
|:---:|:---:|
| $f'(c) = 0$ → extremum | Need sign change (or use SDT) |
| $f''(c) = 0$ → inflection | Need sign change in $f''$ |
| Forgetting endpoints in Candidates Test | ALWAYS check $f(a)$ and $f(b)$ |
| Not justifying optimization answer | Must verify max/min (FDT, SDT, or Candidates) |
| Using SDT when $f''(c) = 0$ | Switch to FDT — SDT is inconclusive |
| MVT without stating hypotheses | Must say "continuous" and "differentiable" |`
    },
    {
      id: 'apps7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = x^3 - 12x$ on $[-3, 4]$.',
            options: ['$16$', '$9$', '$36$', '$-16$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f(-3) = 9$, $f(-2) = 16$, $f(2) = -16$, $f(4) = 16$. Absolute max = $16$ (at both $x = -2$ and $x = 4$).'
          },
          {
            question: 'How many inflection points does $g(x) = x^5 - 5x^3$ have?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = 20x^3 - 30x = 10x(2x^2-3) = 0$ at $x = 0, \\pm\\sqrt{3/2}$. All three have sign changes: 3 inflection points.'
          },
          {
            question: 'If $f\'(2) = 0$ and $f\'\'(2) = -3$, what is at $x = 2$?',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'SDT: $f\'(2) = 0$ and $f\'\'(2) < 0$: concave down → local maximum.'
          },
          {
            question: 'Which theorem guarantees $f\'(c) = 0$ for some $c \\in (a,b)$ when $f(a) = f(b)$?',
            options: ['EVT', 'IVT', 'MVT', 'Rolle\'s Theorem'],
            correctAnswer: 3,
            explanation: 'Rolle\'s Theorem: if $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $f\'(c) = 0$ for some $c \\in (a,b)$.'
          }
        ]
      }
    },
    {
      id: 'apps7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A function $f$ has $f\'(x) = (x-1)^3(x-5)$. At $x = 1$, $f$ has:',
            options: ['A local max', 'A local min', 'An inflection point', 'Neither extremum nor inflection'],
            correctAnswer: 0,
            explanation: '$f\'(1) = 0$. For $x$ just below 1 (say $x = 0.9$): $(-.1)^3(-4.1) = (-.001)(-4.1) = +$. For $x$ just above 1 (say $x = 1.1$): $(.1)^3(-3.9) = (.001)(-3.9) = -$. $f\'$ changes from $+$ to $-$: local maximum at $x = 1$.'
          },
          {
            question: 'Minimize the sum of a positive number and its reciprocal.',
            options: ['$2$', '$1$', '$\\sqrt{2}$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Minimize $f(x) = x + \\frac{1}{x}$ for $x > 0$. $f\' = 1 - \\frac{1}{x^2} = 0$ at $x = 1$. $f(1) = 2$. $f\'\' = \\frac{2}{x^3} > 0$: minimum.'
          },
          {
            question: 'If the graph of $f\'$ is a DOWNWARD parabola with vertex at $(3, 5)$, which is true?',
            options: ['$f$ has a local max at $x = 3$', '$f$ has a local min at $x = 3$', '$f$ has an inflection point at $x = 3$', '$f$ is constant at $x = 3$'],
            correctAnswer: 2,
            explanation: 'A local max of $f\'$ = $f\'$ changes from increasing to decreasing = $f$ changes from concave up to concave down = inflection point.'
          }
        ]
      }
    },
    {
      id: 'apps7-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP-Style Table Problem** 🔍\n\n| $x$ | $1$ | $3$ | $5$ | $7$ |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | $2$ | $10$ | $6$ | $14$ |\n\n$f$ is continuous and differentiable on $[1, 7]$.',
      exercise: {
        dropdowns: [
          {
            label: 'MVT on $[1, 7]$ guarantees $f\'(c) =$',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswers: ['$2$'],
            hints: ['$\\frac{f(7)-f(1)}{7-1} = \\frac{14-2}{6}$.'],
            explanation: '$\\frac{14-2}{6} = \\frac{12}{6} = 2$. There exists $c \\in (1,7)$ with $f\'(c) = 2$.'
          },
          {
            label: 'Average rate on $[1, 3]$:',
            options: ['$2$', '$4$', '$6$', '$8$'],
            correctAnswers: ['$4$'],
            hints: ['$\\frac{f(3)-f(1)}{3-1} = \\frac{10-2}{2}$.'],
            explanation: '$\\frac{10-2}{2} = 4$.'
          },
          {
            label: 'On which subinterval must $f\'(c) < 0$ for some $c$?',
            options: ['$[1,3]$', '$[3,5]$', '$[5,7]$', 'Cannot determine'],
            correctAnswers: ['$[3,5]$'],
            hints: ['Where does $f$ decrease?'],
            explanation: '$\\frac{f(5)-f(3)}{5-3} = \\frac{6-10}{2} = -2$. By MVT, $f\'(c) = -2 < 0$ for some $c \\in (3,5)$.'
          }
        ]
      }
    },
    {
      id: 'apps7-input',
      type: 'input-box' as const,
      content: '**Final Optimization Problem** ✍️',
      exercise: {
        question: 'Find the minimum value of $f(x) = x + \\frac{4}{x}$ for $x > 0$.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: [
          'Differentiate: $f\'(x) = 1 - \\frac{4}{x^2}$.',
          'Set $f\'(x) = 0$: $x^2 = 4$, $x = 2$ (since $x > 0$).',
          'Evaluate: $f(2) = 2 + \\frac{4}{2}$.'
        ],
        explanation: '$f\'(x) = 1 - 4/x^2 = 0 \\Rightarrow x = 2$.\\n\\n$f\'\'(x) = 8/x^3$. $f\'\'(2) = 1 > 0$: confirmed minimum.\\n\\n$f(2) = 2 + 2 = 4$.'
      }
    },
    {
      id: 'apps7-summary',
      type: 'text' as const,
      content: `### Applications of Derivatives — Complete! ✅

You have mastered:
- ✅ Critical points and the First Derivative Test
- ✅ Concavity, inflection points, and the Second Derivative Test
- ✅ Absolute extrema via EVT and Candidates Test
- ✅ Curve sketching and reading $f'$ graphs
- ✅ Mean Value Theorem and Rolle's Theorem
- ✅ Optimization: objective + constraint approach

### AP Free-Response Justification Checklist

| Claim | Required Justification |
|:---:|:---:|
| $f$ has a local max at $c$ | $f'$ changes $+ \\to -$ at $c$ |
| $f$ has a local min at $c$ | $f'$ changes $- \\to +$ at $c$ |
| $f$ has inflection at $c$ | $f''$ changes sign at $c$ |
| $f$ has abs max/min | Candidates Test: list ALL values |
| MVT applies | State: continuous on $[a,b]$, differentiable on $(a,b)$ |
| Optimization answer is a max/min | FDT, SDT, or only critical point argument |`
    }
  ]
};
