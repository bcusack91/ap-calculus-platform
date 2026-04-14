export const calcabExamReviewPart1Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev1-intro',
      type: 'text' as const,
      content: `# AP Calculus AB Exam Review

**Part 1 of 7 \u2014 Limits & Continuity Review**

### Topic Overview

| Part | Review Topic |
|:---:|:---|
| **1** | **Limits & Continuity** |
| 2 | Differentiation Rules |
| 3 | Applications of Derivatives |
| 4 | Integration Techniques |
| 5 | Applications of Integration |
| 6 | Differential Equations & Modeling |
| 7 | Full Practice Exam |

> **Exam Weight:** Units 1\u20132 (Limits & Continuity) = **10\u201312%** of the AP exam.

---

### Limit Evaluation Techniques

| Technique | When to Use | Example |
|:---|:---|:---|
| Direct substitution | No indeterminate form | $\\lim_{x\\to 3}(x^2+1) = 10$ |
| Factoring | $\\frac{0}{0}$ with polynomials | $\\frac{x^2-4}{x-2} = x+2$ |
| Rationalizing | Square roots give $\\frac{0}{0}$ | Multiply by conjugate |
| Trig identities | $\\frac{\\sin x}{x}$ type | $\\lim \\frac{\\sin x}{x}=1$ |

### Essential Trig Limits

$$\\boxed{\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1 \\qquad \\lim_{x\\to 0}\\frac{1-\\cos x}{x} = 0}$$

### Limits at Infinity \u2014 Rational Functions

| Degrees | Limit | HA |
|:---|:---:|:---:|
| deg(top) $<$ deg(bottom) | $0$ | $y=0$ |
| deg(top) $=$ deg(bottom) | $\\frac{\\text{leading coeff.}}{\\text{leading coeff.}}$ | $y = \\frac{a}{b}$ |
| deg(top) $>$ deg(bottom) | $\\pm\\infty$ | None |

### Continuity Conditions

$f$ is continuous at $x = a$ if ALL THREE hold:

1. $f(a)$ is defined
2. $\\lim_{x\\to a} f(x)$ exists
3. $\\lim_{x\\to a} f(x) = f(a)$`
    },
    {
      id: 'examrev1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Limits Review Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x\\to 5}\\frac{x^2-25}{x-5} =$',
            options: ['$10$', '$5$', '$0$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{(x-5)(x+5)}{x-5} = x+5 \\to 10$.'
          },
          {
            question: '$\\lim_{x\\to 0}\\frac{\\sin(3x)}{x} =$',
            options: ['$3$', '$1$', '$0$', '$1/3$'],
            correctAnswer: 0,
            explanation: '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$.'
          },
          {
            question: '$\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4} =$',
            options: ['$1/4$', '$1/2$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: '$x-4 = (\\sqrt{x}-2)(\\sqrt{x}+2)$. So $\\frac{1}{\\sqrt{x}+2} \\to \\frac{1}{4}$.'
          }
        ]
      }
    },
    {
      id: 'examrev1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the concept.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Left-hand limit $\\ne$ right-hand limit means:',
            options: ['Jump discontinuity', 'Removable discontinuity', 'Infinite discontinuity', 'Continuous'],
            correctAnswers: ['Jump discontinuity'],
            hints: ['One-sided limits exist but differ.'],
            explanation: 'When one-sided limits exist but are unequal, the graph \u201cjumps.\u201d'
          },
          {
            label: 'To show a root exists on an interval, use:',
            options: ['IVT', 'MVT', 'EVT', 'Squeeze Theorem'],
            correctAnswers: ['IVT'],
            hints: ['Which theorem guarantees a value between $f(a)$ and $f(b)$?'],
            explanation: 'IVT: if $f$ is continuous and $0$ is between $f(a)$ and $f(b)$, a root exists.'
          },
          {
            label: '$\\lim_{x\\to\\infty}\\frac{6x^2+1}{3x^2-7} =$',
            options: ['$2$', '$0$', '$\\infty$', '$6/3 = 2$'],
            correctAnswers: ['$2$'],
            hints: ['Same degree \u2014 ratio of leading coefficients.'],
            explanation: '$\\frac{6}{3} = 2$. Equal degrees: limit is ratio of leading coefficients.'
          }
        ]
      }
    },
    {
      id: 'examrev1-input',
      type: 'input-box' as const,
      content: '**Compute the limit.** \u270d\ufe0f',
      exercise: {
        question: '$\\lim_{x\\to 0}\\frac{\\sin(5x)}{\\sin(2x)} = \\frac{a}{b}$ in lowest terms. Enter **$a + b$**.',
        correctAnswer: '7',
        acceptableAnswers: ['7'],
        hints: [
          '$\\frac{\\sin(5x)}{\\sin(2x)} = \\frac{\\sin(5x)}{5x}\\cdot\\frac{2x}{\\sin(2x)}\\cdot\\frac{5}{2}$.',
          'Each ratio $\\to 1$.',
          'Limit $= 5/2$. $a+b = 5+2 = 7$.'
        ],
        explanation: '$\\frac{\\sin(5x)}{\\sin(2x)} \\to \\frac{5}{2}$. $a+b = 7$.'
      }
    },
    {
      id: 'examrev1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Always try direct substitution first
- $\\frac{0}{0}$ requires algebraic manipulation
- Compare degrees for limits at infinity
- Continuity needs all three conditions verified`
    }
  ]
};
