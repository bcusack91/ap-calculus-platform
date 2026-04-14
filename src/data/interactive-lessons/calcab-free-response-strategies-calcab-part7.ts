export const calcabFRQPart7Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq7-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Full Practice FRQ Set

**Part 7 of 7**

---

### Practice FRQ Format

This section simulates exam conditions with mixed-topic questions covering all major FRQ types.

### FRQ Scoring Checklist

| Criterion | Points at Stake |
|:---|:---:|
| Correct setup/method | 1\u20132 |
| Correct computation | 1\u20132 |
| Correct answer with units | 1 |
| Justification (theorem name + verification) | 1\u20132 |
| Interpretation in context | 1 |

### Master Formula Sheet

| Formula | Usage |
|:---|:---|
| $f'(a) = \\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}$ | Definition of derivative |
| $(fg)' = f'g + fg'$ | Product rule |
| $[f(g(x))]' = f'(g(x))g'(x)$ | Chain rule |
| $\\int_a^b f'(x)\\,dx = f(b)-f(a)$ | Net change / FTC 2 |
| $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))g'(x)$ | FTC 1 + chain |
| $f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f$ | Average value |
| $A = \\int [\\text{top}-\\text{bottom}]\\,dx$ | Area between curves |
| $V = \\pi\\int [R^2-r^2]\\,dx$ | Washer volume |`
    },
    {
      id: 'frq7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice \u2014 Set 1** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = \\int_0^x f(t)\\,dt$ and $f$ is continuous, then $g\'(3) =$',
            options: ['$f(3)$', '$\\int_0^3 f(t)\\,dt$', '$f\'(3)$', '$g(3)$'],
            correctAnswer: 0,
            explanation: 'FTC Part 1: $g\'(x) = f(x)$, so $g\'(3) = f(3)$.'
          },
          {
            question: 'A particle\u2019s position is $s(t) = t^3 - 6t^2$. The particle is at rest when:',
            options: ['$t = 0$ and $t = 4$', '$t = 2$ only', '$t = 0$ only', '$t = 4$ only'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 12t = 3t(t-4) = 0$ at $t=0$ and $t=4$.'
          },
          {
            question: 'The MVT guarantees that for $f(x)=\\sqrt{x}$ on $[1,9]$, there exists $c$ such that $f\'(c) =$',
            options: ['$1/4$', '$1/2$', '$1/3$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\frac{f(9)-f(1)}{9-1} = \\frac{3-1}{8} = \\frac{1}{4}$.'
          }
        ]
      }
    },
    {
      id: 'frq7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice \u2014 Set 2** \ud83d\udcdd',
      exercise: {
        questions: [
          {
            question: '$\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx =$',
            options: ['$2$', '$4$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$\\int x^{-1/2}\\,dx = 2\\sqrt{x}$. $[2\\sqrt{x}]_1^4 = 4-2 = 2$.'
          },
          {
            question: 'If $\\frac{dy}{dx} = 2y$ and $y(0)=5$, then $y(t) =$',
            options: ['$5e^{2t}$', '$2e^{5t}$', '$5 + 2t$', '$e^{10t}$'],
            correctAnswer: 0,
            explanation: '$y\' = 2y \\implies y = Ce^{2t}$. $y(0)=5 \\implies C=5$.'
          },
          {
            question: 'The total distance traveled by a particle with $v(t) = t - 2$ on $[0, 4]$ is:',
            options: ['$4$', '$0$', '$2$', '$8$'],
            correctAnswer: 0,
            explanation: '$v=0$ at $t=2$. $\\int_0^2 |t-2|\\,dt + \\int_2^4 |t-2|\\,dt = \\int_0^2 (2-t)\\,dt + \\int_2^4 (t-2)\\,dt = 2+2 = 4$.'
          }
        ]
      }
    },
    {
      id: 'frq7-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ strategy identification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '\u201cFind the total amount of water that flowed in from $t=0$ to $t=8$\u201d:',
            options: ['$\\int_0^8 r(t)\\,dt$', '$r(8) - r(0)$', '$r\'(4) \\cdot 8$', '$\\frac{r(0)+r(8)}{2}$'],
            correctAnswers: ['$\\int_0^8 r(t)\\,dt$'],
            hints: ['Integral of rate = total accumulation.'],
            explanation: 'Net change theorem: $\\int_0^8 r(t)\\,dt$ gives total water.'
          },
          {
            label: '\u201cExplain why there must be a time $c$ where $v(c) = 0$\u201d:',
            options: ['IVT applied to $v$', 'MVT applied to $s$', 'EVT on $[a,b]$', 'FTC'],
            correctAnswers: ['IVT applied to $v$'],
            hints: ['If $v$ changes sign, IVT guarantees it passes through 0.'],
            explanation: 'IVT: if $v$ is continuous and changes sign, then $v(c)=0$ for some $c$.'
          },
          {
            label: '\u201cSet up but do not evaluate an integral for the volume\u201d means:',
            options: ['Write the integral with limits and integrand, then stop', 'Evaluate and box the answer', 'Use a Riemann sum', 'Graph the region only'],
            correctAnswers: ['Write the integral with limits and integrand, then stop'],
            hints: ['AP says \u201cset up\u201d = write it out. \u201cDo not evaluate\u201d = don\u2019t compute.'],
            explanation: 'Full points for a correct integral expression. DO NOT waste time computing.'
          }
        ]
      }
    },
    {
      id: 'frq7-input',
      type: 'input-box' as const,
      content: '**Final computation.** \u270d\ufe0f',
      exercise: {
        question: 'Find the average value of $f(x) = 6x^2$ on $[0, 2]$.',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          '$f_{\\text{avg}} = \\frac{1}{2-0}\\int_0^2 6x^2\\,dx$.',
          '$= \\frac{1}{2}[2x^3]_0^2 = \\frac{1}{2}(16)$.',
          '$= 8$.'
        ],
        explanation: '$\\frac{1}{2}\\int_0^2 6x^2\\,dx = \\frac{1}{2}\\cdot 16 = 8$.'
      }
    },
    {
      id: 'frq7-completion',
      type: 'text' as const,
      content: `### Completion Checklist

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | FRQ Structure & Core Skills | \u2705 |
| 2 | Rate & Accumulation FRQs | \u2705 |
| 3 | Table-Based FRQs | \u2705 |
| 4 | Graph-Based FRQs | \u2705 |
| 5 | Differential Equation FRQs | \u2705 |
| 6 | Area & Volume FRQs | \u2705 |
| 7 | Full Practice FRQ Set | \u2705 |

**You\u2019ve completed the Free-Response Strategies unit! You\u2019re ready for the FRQ section.** \ud83c\udf89

### Final Reminders

- Show ALL work on every FRQ part
- Include units whenever the problem involves a physical quantity
- Name theorems explicitly (IVT, MVT, EVT)
- \u201cSet up but do not evaluate\u201d = write the integral and STOP`
    }
  ]
};
