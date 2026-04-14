export const calcabExamReviewPart4Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev4-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Integration Techniques

**Part 4 of 7**

---

### Integration Formulas Reference

| Integral | Result |
|:---|:---|
| $\\int x^n\\,dx$ | $\\frac{x^{n+1}}{n+1} + C$ ($n \\ne -1$) |
| $\\int \\frac{1}{x}\\,dx$ | $\\ln|x| + C$ |
| $\\int e^x\\,dx$ | $e^x + C$ |
| $\\int \\sin x\\,dx$ | $-\\cos x + C$ |
| $\\int \\cos x\\,dx$ | $\\sin x + C$ |
| $\\int \\sec^2 x\\,dx$ | $\\tan x + C$ |

### Fundamental Theorem of Calculus

$$\\boxed{\\text{FTC Part 1: } \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)}$$

$$\\boxed{\\text{FTC Part 2: } \\int_a^b f(x)\\,dx = F(b) - F(a)}$$

> **Chain Rule Variant:** $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))\\cdot g'(x)$

---

### $u$-Substitution Strategy

| Step | Action |
|:---|:---|
| 1 | Identify inner function $u = g(x)$ |
| 2 | Compute $du = g'(x)\\,dx$ |
| 3 | Rewrite integral entirely in terms of $u$ |
| 4 | Integrate and substitute back |

### Worked Example \u2014 $u$-Substitution

$$\\int x\\cos(x^2)\\,dx$$

Let $u = x^2$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$.

$$\\frac{1}{2}\\int \\cos u\\,du = \\frac{1}{2}\\sin u + C = \\frac{1}{2}\\sin(x^2) + C$$`
    },
    {
      id: 'examrev4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\int_0^2 (3x^2 - 4x + 1)\\,dx =$',
            options: ['$2$', '$3$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: '$[x^3-2x^2+x]_0^2 = (8-8+2) - 0 = 2$.'
          },
          {
            question: '$\\int \\frac{2x}{x^2+1}\\,dx =$',
            options: ['$\\ln(x^2+1) + C$', '$\\frac{1}{x^2+1} + C$', '$\\ln|2x| + C$', '$\\arctan x + C$'],
            correctAnswer: 0,
            explanation: '$u = x^2+1$, $du = 2x\\,dx$. $\\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2+1) + C$.'
          },
          {
            question: 'If $F(x) = \\int_1^x \\sqrt{t^3+1}\\,dt$, then $F\'(3) =$',
            options: ['$\\sqrt{28}$', '$\\sqrt{10}$', '$3\\sqrt{28}$', '$28$'],
            correctAnswer: 0,
            explanation: 'FTC Part 1: $F\'(x) = \\sqrt{x^3+1}$. $F\'(3) = \\sqrt{27+1} = \\sqrt{28}$.'
          }
        ]
      }
    },
    {
      id: 'examrev4-definite',
      type: 'text' as const,
      content: `### Definite Integral Properties

| Property | Formula |
|:---|:---|
| Additivity | $\\int_a^b f + \\int_b^c f = \\int_a^c f$ |
| Constant multiple | $\\int_a^b kf = k\\int_a^b f$ |
| Reverse limits | $\\int_a^b f = -\\int_b^a f$ |
| Zero width | $\\int_a^a f = 0$ |
| Sum/Difference | $\\int_a^b (f \\pm g) = \\int_a^b f \\pm \\int_a^b g$ |

### Average Value Formula

$$\\boxed{f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx}$$

**Example:** Average value of $f(x) = x^2$ on $[0,3]$:

$$f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\cdot\\frac{27}{3} = 3$$`
    },
    {
      id: 'examrev4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the technique.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\int e^{5x}\\,dx$ \u2014 What substitution?',
            options: ['$u = 5x$', '$u = e^x$', '$u = e^{5x}$', 'No substitution needed'],
            correctAnswers: ['$u = 5x$'],
            hints: ['The inner function of the exponential is $5x$.'],
            explanation: '$u=5x$, $du=5\\,dx$. $\\frac{1}{5}e^{5x}+C$.'
          },
          {
            label: '$\\frac{d}{dx}\\int_0^{x^2} \\sin t\\,dt$ uses:',
            options: ['FTC + Chain Rule', 'FTC Part 2 only', '$u$-substitution', 'Integration by parts'],
            correctAnswers: ['FTC + Chain Rule'],
            hints: ['The upper limit is $x^2$, not just $x$.'],
            explanation: '$\\sin(x^2)\\cdot 2x$. The chain rule multiplies by the derivative of the upper limit.'
          },
          {
            label: '$\\int_2^5 f(x)\\,dx = 7$ and $\\int_2^5 g(x)\\,dx = 3$. Then $\\int_2^5 [2f(x) - g(x)]\\,dx =$',
            options: ['$11$', '$7$', '$17$', '$4$'],
            correctAnswers: ['$11$'],
            hints: ['Use linearity: $2(7) - 3$.'],
            explanation: '$2\\int f - \\int g = 2(7)-3 = 11$.'
          }
        ]
      }
    },
    {
      id: 'examrev4-input',
      type: 'input-box' as const,
      content: '**Compute the integral.** \u270d\ufe0f',
      exercise: {
        question: '$\\int_0^4 \\sqrt{x}\\,dx =$ Enter your answer as a fraction $\\frac{a}{b}$ in lowest terms. Give $a + b$.',
        correctAnswer: '19',
        acceptableAnswers: ['19'],
        hints: [
          '$\\sqrt{x} = x^{1/2}$. Antiderivative: $\\frac{x^{3/2}}{3/2} = \\frac{2}{3}x^{3/2}$.',
          '$\\frac{2}{3}(4)^{3/2} - 0 = \\frac{2}{3}\\cdot 8$.',
          '$= \\frac{16}{3}$. $a+b = 16+3 = 19$.'
        ],
        explanation: '$\\frac{2}{3}x^{3/2}\\Big|_0^4 = \\frac{2}{3}(8) = \\frac{16}{3}$. $a+b=19$.'
      }
    },
    {
      id: 'examrev4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Know antiderivative formulas for power, exponential, trig, and $\\ln$
- FTC Part 1 connects derivatives and integrals
- $u$-substitution reverses the chain rule
- Average value = $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$`
    }
  ]
};
