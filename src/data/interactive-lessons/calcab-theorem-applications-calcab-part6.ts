export const calcabTheoremsPart6Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm6-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 6 of 7 \u2014 AP-Style Free-Response Workshop**

### AP FRQ Theorem Patterns

| Part | Typical Prompt | Theorem |
|:---:|:---|:---:|
| (a) | "Must $f(c) = k$ for some $c$?" | IVT |
| (b) | "Must $f'(c) = m$ for some $c$?" | MVT |
| (c) | "Find absolute max/min on $[a,b]$" | EVT + closed interval |
| (d) | "Find $G'(x)$ where $G = \\int$" | FTC |

---

### Complete Worked FRQ

> $f$ is continuous on $[-2, 6]$ and differentiable on $(-2, 6)$.

| $x$ | $-2$ | $0$ | $3$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $4$ | $1$ | $7$ | $4$ |

**(a) Must there exist $c \\in (-2, 6)$ where $f(c) = 5$?**

$f(0) = 1 < 5 < 7 = f(3)$. Since $f$ is continuous on $[0,3]$, by IVT $\\exists\\, c \\in (0,3) \\subset (-2,6)$ with $f(c) = 5$. \u2713

**(b) Must there exist $c \\in (-2, 6)$ where $f'(c) = 0$?**

$f(-2) = 4 = f(6)$. Since $f$ is continuous on $[-2,6]$ and differentiable on $(-2,6)$, by Rolle\u2019s Theorem $\\exists\\, c \\in (-2,6)$ with $f'(c) = 0$. \u2713

**(c) Find the average rate of change on $[-2, 6]$.**

$\\frac{f(6) - f(-2)}{6-(-2)} = \\frac{4-4}{8} = 0$.

By MVT, $\\exists\\, c \\in (-2,6)$ with $f'(c) = 0$. (Same conclusion as Rolle\u2019s \u2014 consistent!)

**(d) Must $f$ attain an absolute max on $[-2, 6]$?**

Yes. By EVT, since $f$ is continuous on the closed interval $[-2,6]$, $f$ attains both an absolute max and an absolute min.`
    },
    {
      id: 'thm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-style questions** \ud83c\udfaf\n\n$g$ is continuous on $[0,8]$ and differentiable on $(0,8)$. $g(0) = 2$, $g(4) = 10$, $g(8) = 6$.',
      exercise: {
        questions: [
          {
            question: 'Must there exist $c \\in (0,4)$ where $g\'(c) = 2$?',
            options: ['Yes \u2014 by MVT on $[0,4]$', 'No', 'Only by IVT', 'Only if $g\'\' = 0$'],
            correctAnswer: 0,
            explanation: '$\\frac{g(4)-g(0)}{4-0} = \\frac{10-2}{4} = 2$. By MVT, $\\exists\\, c \\in (0,4)$ with $g\'(c) = 2$.'
          },
          {
            question: 'Must there exist $c \\in (0,8)$ where $g(c) = 5$?',
            options: ['Yes \u2014 by IVT on $[0,4]$', 'No', 'Only by MVT', 'Only on $[4,8]$'],
            correctAnswer: 0,
            explanation: '$g(0) = 2 < 5 < 10 = g(4)$. By IVT on $[0,4]$, $\\exists\\, c$ with $g(c) = 5$.'
          },
          {
            question: 'Must $g$ attain an absolute maximum on $[0,8]$?',
            options: ['Yes \u2014 by EVT', 'Only if $g\' = 0$ somewhere', 'No \u2014 interval is too large', 'Only at endpoints'],
            correctAnswer: 0,
            explanation: '$g$ is continuous on $[0,8]$ (closed interval). By EVT, absolute max and min exist.'
          }
        ]
      }
    },
    {
      id: 'thm6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Justify with theorems.** \ud83d\udd0d\n\n$h$ is continuous and differentiable. $h(1) = 3$, $h(5) = 3$, $h(3) = 8$.',
      exercise: {
        dropdowns: [
          {
            label: '"Must $h\'(c) = 0$ for some $c \\in (1,5)$?"',
            options: ['Yes \u2014 Rolle\u2019s ($h(1) = h(5) = 3$)', 'No', 'Only by MVT', 'Only by IVT'],
            correctAnswers: ['Yes \u2014 Rolle\u2019s ($h(1) = h(5) = 3$)'],
            hints: ['$h(1) = h(5)$, continuous, differentiable.'],
            explanation: '$h(1) = h(5) = 3$. By Rolle\u2019s, $\\exists\\, c \\in (1,5)$ with $h\'(c) = 0$.'
          },
          {
            label: '"Must $h(c) = 5$ for some $c \\in (1,3)$?"',
            options: ['Yes \u2014 IVT ($3 < 5 < 8$)', 'No', 'Only by MVT', 'Cannot tell'],
            correctAnswers: ['Yes \u2014 IVT ($3 < 5 < 8$)'],
            hints: ['$h(1) = 3 < 5 < 8 = h(3)$.'],
            explanation: '$h(1) = 3 < 5 < 8 = h(3)$. By IVT, $\\exists\\, c \\in (1,3)$ with $h(c) = 5$.'
          },
          {
            label: 'Average rate on $[1,3]$:',
            options: ['$5/2$', '$3$', '$8/3$', '$5/3$'],
            correctAnswers: ['$5/2$'],
            hints: ['$\\frac{h(3)-h(1)}{3-1} = \\frac{8-3}{2}$.'],
            explanation: '$\\frac{8-3}{2} = \\frac{5}{2}$. By MVT, $\\exists\\, c$ with $h\'(c) = 5/2$.'
          }
        ]
      }
    },
    {
      id: 'thm6-input',
      type: 'input-box' as const,
      content: '**MVT calculation.** \u270d\ufe0f',
      exercise: {
        question: '$f$ is differentiable on $[2, 10]$. $f(2) = 5$, $f(10) = 29$.\n\nBy MVT, $f\'(c) = a/b$ in lowest terms. Enter **$a + b$**.',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: [
          '$f\'(c) = \\frac{f(10)-f(2)}{10-2} = \\frac{24}{8}$.',
          '$= 3 = 3/1$.',
          '$a + b = 3 + 1 = 4$.'
        ],
        explanation: '$f\'(c) = \\frac{24}{8} = 3 = 3/1$. $a + b = 4$.'
      }
    },
    {
      id: 'thm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs frequently combine multiple theorems in one problem
- Always identify which theorem matches the conclusion needed
- Cite theorems by name and verify all hypotheses
- IVT for values, MVT/Rolle\u2019s for derivatives, EVT for extrema`
    }
  ]
};
