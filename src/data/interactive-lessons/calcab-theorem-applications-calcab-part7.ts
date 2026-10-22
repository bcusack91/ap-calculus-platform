export const calcabTheoremsPart7Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm7-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Theorem Reference

| Theorem | Hypothesis | Conclusion |
|:---|:---|:---|
| IVT | $f$ continuous on $[a,b]$ | $\\exists\\, c: f(c) = N$ (for $N$ between $f(a), f(b)$) |
| MVT | Continuous + differentiable | $\\exists\\, c: f'(c) = \\frac{f(b)-f(a)}{b-a}$ |
| Rolle\u2019s | Cont. + diff. + $f(a)=f(b)$ | $\\exists\\, c: f'(c) = 0$ |
| EVT | $f$ continuous on $[a,b]$ | Absolute max and min exist |
| FTC 1 | $f$ continuous | $\\frac{d}{dx}\\int_a^x f = f(x)$ |
| FTC 2 | $f$ continuous | $\\int_a^b f = F(b) - F(a)$ |

### Common AP Mistakes

| Mistake | Correction |
|:---|:---|
| Using IVT for derivatives | IVT is for function values; use MVT for derivatives |
| Not verifying hypotheses | Always check continuity/differentiability |
| Confusing Rolle\u2019s and MVT | Rolle\u2019s is MVT with $f(a)=f(b)$ |
| Forgetting FTC chain rule | $\\frac{d}{dx}\\int_a^{g(x)} f = f(g(x))\\cdot g'(x)$ |
| Not citing theorem by name | AP requires explicit theorem citation |`
    },
    {
      id: 'thm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 1** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A car\u2019s odometer reads 100 mi at 1:00 PM and 280 mi at 4:00 PM. Which is guaranteed?',
            options: ['The speed was exactly 60 mph at some moment', 'The car went exactly 60 mph the whole three hours', 'The car stopped at some point during the trip', 'The car’s speed was increasing the whole time'],
            correctAnswer: 0,
            explanation: 'Average speed $= 180/3 = 60$ mph. By MVT, the speedometer read exactly 60 mph at some moment.'
          },
          {
            question: 'If $f$ is continuous on $[1,6]$ with $f(1) = -2$ and $f(6) = 3$, which theorem guarantees a root?',
            options: ['IVT', 'MVT', 'EVT', 'FTC'],
            correctAnswer: 0,
            explanation: '$f(1) = -2 < 0 < 3 = f(6)$. IVT guarantees $f(c) = 0$ for some $c \\in (1,6)$.'
          },
          {
            question: 'If $f$ is continuous on $[1, 6]$, which is guaranteed by EVT?',
            options: ['$f$ has an absolute maximum on $[1,6]$', '$f\'(c) = 0$ for some $c$', '$f$ is differentiable on $(1,6)$', '$f$ is bounded above by $f(6)$'],
            correctAnswer: 0,
            explanation: 'EVT: continuous on closed interval $\\Rightarrow$ absolute max and min exist.'
          },
          {
            question: '$G(x) = \\int_2^{x^3} \\cos t\\,dt$. Find $G\'(x)$.',
            options: ['$3x^2\\cos(x^3)$', '$\\cos(x^3)$', '$3x^2\\sin(x^3)$', '$\\sin(x^3)$'],
            correctAnswer: 0,
            explanation: 'FTC with chain rule: $G\'(x) = \\cos(x^3) \\cdot 3x^2$.'
          }
        ]
      }
    },
    {
      id: 'thm7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Set 2** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f$ is twice-differentiable. $f\'(2) = 3$, $f\'(8) = -1$. Must there exist $c$ where $f\'(c) = 0$?',
            options: ['Yes \u2014 by IVT, as $f\'$ is continuous', 'Yes — by MVT applied to $f$ on $[2,8]$', 'No — $f\'$ could skip over $0$', 'Only if $f(2) = f(8)$, by Rolle’s'],
            correctAnswer: 0,
            explanation: '$f\'$ is continuous (since $f$ is twice-differentiable). $f\'(2) = 3 > 0 > -1 = f\'(8)$. By IVT applied to $f\'$, $\\exists\\, c$ with $f\'(c) = 0$. MVT on $f$ would need $f(2)$ and $f(8)$, which are not given.'
          },
          {
            question: '$f(x) = x^{2/3}$ on $[-1, 1]$. Can MVT be applied?',
            options: ['No \u2014 $f\'(0)$ does not exist (a cusp)', 'Yes — $f$ is continuous on $[-1, 1]$', 'Yes — $f(-1) = f(1) = 1$, so it applies', 'No — $f$ is not continuous at $x = 0$'],
            correctAnswer: 0,
            explanation: '$f$ is continuous, but $f\'(x) = \\frac{2}{3}x^{-1/3}$ is undefined at $x = 0$. Not differentiable on $(-1,1)$, so MVT fails.'
          },
          {
            question: 'If $\\int_0^4 f(x)\\,dx = 12$, the average value of $f$ on $[0,4]$ is:',
            options: ['$3$', '$12$', '$48$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: 'Average value $= \\frac{1}{b-a}\\int_a^b f\\,dx = \\frac{12}{4} = 3$. Forgetting to divide gives $12$, multiplying gives $48$, and dividing the wrong way gives $\\frac{4}{12} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'thm7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the theorem.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '"$f$ continuous on $[2,7]$, $f(2)=1$, $f(7)=9$. $\\exists\\,c: f(c)=\\pi$."',
            options: ['IVT', 'MVT', 'EVT', 'FTC'],
            correctAnswers: ['IVT'],
            hints: ['$1 < \\pi < 9$. Finding a function value.'],
            explanation: '$1 < \\pi \\approx 3.14 < 9$. IVT guarantees $f(c) = \\pi$ for some $c \\in (2,7)$.'
          },
          {
            label: '"$f$ diff. on $[0,6]$, $f(0)=2$, $f(6)=8$. $\\exists\\,c: f\'(c) = 1$."',
            options: ['MVT', 'IVT', 'Rolle\u2019s', 'EVT'],
            correctAnswers: ['MVT'],
            hints: ['$\\frac{8-2}{6} = 1$. Finding a derivative value.'],
            explanation: '$\\frac{f(6)-f(0)}{6} = 1$. MVT guarantees $f\'(c) = 1$.'
          },
          {
            label: '"$f$ continuous on $[-3,3]$. Does $f$ have a global max?"',
            options: ['Yes \u2014 EVT', 'Only if differentiable', 'Only at critical points', 'Cannot determine'],
            correctAnswers: ['Yes \u2014 EVT'],
            hints: ['Continuous on closed interval.'],
            explanation: 'EVT: continuous on $[-3,3]$ $\\Rightarrow$ absolute max and min exist.'
          }
        ]
      }
    },
    {
      id: 'thm7-input',
      type: 'input-box' as const,
      content: '**Final challenge.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^3 - 6x$ on $[0, 4]$. By MVT, $f\'(c) = \\frac{f(4)-f(0)}{4}$ for some $c$ in $(0, 4)$. Find $c$. Give an exact answer, or a decimal correct to three places.',
        correctAnswer: '4/sqrt(3)',
        acceptableAnswers: ['4/sqrt(3)', '4/√3', '4sqrt(3)/3', '2.309'],
        hints: [
          '$f(0) = 0$, $f(4) = 64 - 24 = 40$.',
          'Average rate $= 40/4 = 10$.',
          '$f\'(x) = 3x^2 - 6 = 10 \\Rightarrow x^2 = 16/3$.',
          'Keep the root in $(0, 4)$.'
        ],
        explanation: '$3c^2 - 6 = 10 \\Rightarrow c^2 = 16/3 \\Rightarrow c = \\frac{4}{\\sqrt{3}} \\approx 2.309$, which is in $(0, 4)$ (the root $-\\frac{4}{\\sqrt{3}}$ is not).'
      }
    },
    {
      id: 'thm7-completion',
      type: 'text' as const,
      content: `### Theorem Applications \u2014 Complete! \ud83c\udf93

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Intermediate Value Theorem (IVT) | \u2705 |
| 2 | Mean Value Theorem (MVT) | \u2705 |
| 3 | Extreme Value Theorem (EVT) | \u2705 |
| 4 | Rolle\u2019s Theorem | \u2705 |
| 5 | FTC & Theorem Selection | \u2705 |
| 6 | AP-Style Free-Response Workshop | \u2705 |
| 7 | Comprehensive Assessment | \u2705 |

You have mastered all the major calculus theorems for the AP exam!`
    }
  ]
};
