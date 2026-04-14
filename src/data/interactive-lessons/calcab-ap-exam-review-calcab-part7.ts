export const calcabExamReviewPart7Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev7-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Full Practice Exam

**Part 7 of 7**

---

### AP Calculus AB Exam Format

| Section | Questions | Time | Calculator |
|:---:|:---|:---:|:---:|
| MC Part A | 30 questions | 60 min | No |
| MC Part B | 15 questions | 45 min | Yes |
| FRQ Part A | 2 questions | 30 min | Yes |
| FRQ Part B | 4 questions | 60 min | No |

### Formula Quick Reference

| Category | Key Formula |
|:---|:---|
| Derivative | $\\frac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$ |
| FTC 1 | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ |
| FTC 2 | $\\int_a^b f(x)\\,dx = F(b)-F(a)$ |
| MVT | $f'(c) = \\frac{f(b)-f(a)}{b-a}$ |
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| Disk volume | $\\pi\\int_a^b [R(x)]^2\\,dx$ |
| Accumulation | $f(b) = f(a) + \\int_a^b f'(t)\\,dt$ |

> **Key Fact:** You must show ALL work on FRQs. An answer without justification earns 0 points.`
    },
    {
      id: 'examrev7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice Exam \u2014 No Calculator** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x\\to 0}\\frac{\\tan x}{x} =$',
            options: ['$1$', '$0$', '$\\infty$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{\\tan x}{x} = \\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x} \\to 1\\cdot 1 = 1$.'
          },
          {
            question: '$\\frac{d}{dx}[e^{x^2}] =$',
            options: ['$2xe^{x^2}$', '$e^{x^2}$', '$x^2 e^{x^2-1}$', '$2e^{x^2}$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{x^2}\\cdot 2x = 2xe^{x^2}$.'
          },
          {
            question: '$\\int_0^{\\pi} \\sin x\\,dx =$',
            options: ['$2$', '$0$', '$1$', '$-2$'],
            correctAnswer: 0,
            explanation: '$[-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1+1 = 2$.'
          },
          {
            question: 'If $f(x) = x^4 - 4x^3$, then $f$ has an inflection point at:',
            options: ['$x = 0$ and $x = 2$', '$x = 3$ only', '$x = 0$ only', '$x = 2$ only'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = 12x^2 - 24x = 12x(x-2) = 0$ at $x=0,2$. Sign changes at both \u2192 both are inflection points.'
          }
        ]
      }
    },
    {
      id: 'examrev7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Practice Exam \u2014 Calculator Active** \ud83d\udcf1',
      exercise: {
        questions: [
          {
            question: 'The area enclosed by $y = \\sin x$ and $y = 0$ from $x = 0$ to $x = 2\\pi$ is:',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$\\int_0^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}|\\sin x|\\,dx = 2 + 2 = 4$. Must use absolute value for area.'
          },
          {
            question: 'A particle\u2019s velocity is $v(t) = t^2 - 4t + 3$. The particle changes direction at:',
            options: ['$t = 1$ and $t = 3$', '$t = 2$ only', '$t = 1$ only', '$t = 3$ only'],
            correctAnswer: 0,
            explanation: '$v(t) = (t-1)(t-3) = 0$ at $t=1,3$. $v$ changes sign at both \u2192 direction changes.'
          },
          {
            question: 'If $\\int_0^5 f(x)\\,dx = 12$ and $\\int_0^3 f(x)\\,dx = 7$, then $\\int_3^5 f(x)\\,dx =$',
            options: ['$5$', '$19$', '$-5$', '$7$'],
            correctAnswer: 0,
            explanation: '$\\int_0^5 = \\int_0^3 + \\int_3^5 \\implies 12 = 7 + \\int_3^5 \\implies \\int_3^5 = 5$.'
          }
        ]
      }
    },
    {
      id: 'examrev7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick-fire theorem check.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'To guarantee $f(c)=0$ for some $c$ in $(a,b)$, use:',
            options: ['IVT', 'MVT', 'EVT', 'FTC'],
            correctAnswers: ['IVT'],
            hints: ['Which theorem guarantees an intermediate value?'],
            explanation: 'IVT: if $f(a)$ and $f(b)$ have opposite signs and $f$ is continuous, then $f(c)=0$.'
          },
          {
            label: 'To guarantee $f\'(c) = \\frac{f(b)-f(a)}{b-a}$, use:',
            options: ['MVT', 'IVT', 'EVT', 'Rolle\u2019s Theorem'],
            correctAnswers: ['MVT'],
            hints: ['Relates the average rate to an instantaneous rate.'],
            explanation: 'Mean Value Theorem: some tangent line has the same slope as the secant line.'
          },
          {
            label: 'To guarantee $f$ has an absolute max on $[a,b]$, use:',
            options: ['EVT', 'MVT', 'IVT', 'FTC'],
            correctAnswers: ['EVT'],
            hints: ['Which theorem guarantees extrema exist on a closed interval?'],
            explanation: 'Extreme Value Theorem: continuous function on a closed interval attains max and min.'
          }
        ]
      }
    },
    {
      id: 'examrev7-input',
      type: 'input-box' as const,
      content: '**FRQ-style computation.** \u270d\ufe0f',
      exercise: {
        question: 'Let $g(x) = \\int_0^x (t^2 - 4)\\,dt$. Find $g(3)$.',
        correctAnswer: '-3',
        acceptableAnswers: ['-3'],
        hints: [
          '$g(3) = \\int_0^3 (t^2-4)\\,dt$.',
          '$= \\left[\\frac{t^3}{3} - 4t\\right]_0^3$.',
          '$= (9 - 12) - 0 = -3$.'
        ],
        explanation: '$g(3) = \\frac{27}{3} - 12 = 9 - 12 = -3$.'
      }
    },
    {
      id: 'examrev7-strategies',
      type: 'text' as const,
      content: `### AP Exam Day Strategies

| Strategy | Details |
|:---|:---|
| Time management | ~2 min/MC question, 15 min/FRQ |
| MC tips | Eliminate obviously wrong answers first |
| FRQ tips | Show all work; label answers with units |
| Common mistakes | Forgetting $+C$, sign errors, chain rule omission |
| Calculator section | Use it for graphing and numerical integration |

### Common AP Mistakes to Avoid

| Mistake | Correction |
|:---|:---|
| Writing $\\int f(x)$ without $dx$ | Always include $dx$ |
| Forgetting $+C$ on indefinite integrals | Points deducted every time |
| Not justifying with theorems | Name the theorem (IVT, MVT, etc.) |
| Plugging in before differentiating | Differentiate first, THEN substitute |
| Confusing displacement vs. distance | Distance uses $|v(t)|$ |

---

### Completion Checklist

| Unit | Review Topic | Status |
|:---:|:---|:---:|
| 1\u20132 | Limits & Continuity | \u2705 |
| 3\u20134 | Differentiation Rules | \u2705 |
| 5 | Applications of Derivatives | \u2705 |
| 6 | Integration Techniques | \u2705 |
| 7\u20138 | Applications of Integration | \u2705 |
| 7 | Differential Equations | \u2705 |
| \u2014 | Full Practice Exam | \u2705 |

**You\u2019ve completed the AP Calculus AB Exam Review! Good luck on exam day!** \ud83c\udf89`
    }
  ]
};
