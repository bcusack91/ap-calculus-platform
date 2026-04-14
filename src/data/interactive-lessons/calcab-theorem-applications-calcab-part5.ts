export const calcabTheoremsPart5Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm5-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 5 of 7 \u2014 FTC & Theorem Selection**

### The Fundamental Theorem of Calculus

**Part 1 (Derivative of an Integral):**

$$\\boxed{\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)}$$

**Part 2 (Evaluating Definite Integrals):**

$$\\boxed{\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{where } F' = f}$$

### With Chain Rule (Variable Upper Limit):

$$\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$$

### Theorem Selection Guide

| You Want to Show... | Use This Theorem | Key Hypothesis |
|:---|:---:|:---|
| $f(c) = N$ for some $c$ | IVT | Continuity |
| $f'(c) = m$ for some $c$ | MVT | Cont. + diff. |
| $f'(c) = 0$ for some $c$ | Rolle\u2019s | Cont. + diff. + $f(a)=f(b)$ |
| Absolute max/min exist | EVT | Continuity on $[a,b]$ |
| $\\frac{d}{dx}\\int_a^x f$ | FTC Part 1 | $f$ continuous |
| $\\int_a^b f$ from antiderivative | FTC Part 2 | $f$ continuous |

> **AP Tip:** On multiple-choice, look for keywords like "must there exist," "guarantee," "show that." These signal a theorem justification.`
    },
    {
      id: 'thm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Which Theorem?** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '"$f$ is continuous, $f(2) = -1$, $f(5) = 4$. Show $f(c) = 2$ for some $c$." Which theorem?',
            options: ['IVT', 'MVT', 'EVT', 'Rolle\u2019s'],
            correctAnswer: 0,
            explanation: 'We need $f(c) = N$. That\u2019s IVT. ($-1 < 2 < 4$, and $f$ is continuous.)'
          },
          {
            question: '"$f$ is differentiable, $f(1) = 3$, $f(5) = 11$. Show $f\'(c) = 2$." Which theorem?',
            options: ['MVT', 'IVT', 'EVT', 'FTC'],
            correctAnswer: 0,
            explanation: '$\\frac{11-3}{5-1} = 2$. MVT guarantees $f\'(c) = 2$ for some $c \\in (1,5)$.'
          },
          {
            question: 'If $G(x) = \\int_1^x e^{-t^2}\\,dt$, then $G\'(3) =$',
            options: ['$e^{-9}$', '$e^{-1}$', '$\\int_1^3 e^{-t^2}\\,dt$', '$0$'],
            correctAnswer: 0,
            explanation: 'By FTC Part 1: $G\'(x) = e^{-x^2}$. So $G\'(3) = e^{-9}$.'
          }
        ]
      }
    },
    {
      id: 'thm5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the scenario.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '"Show that $f$ has an absolute max on $[0,5]$."',
            options: ['EVT', 'MVT', 'IVT', 'FTC'],
            correctAnswers: ['EVT'],
            hints: ['Absolute extrema on closed intervals.'],
            explanation: 'EVT guarantees absolute extrema exist for continuous functions on closed intervals.'
          },
          {
            label: '"$f(2) = f(6) = 0$, $f$ smooth. Show $f\'(c) = 0$."',
            options: ['Rolle\u2019s Theorem', 'IVT', 'MVT', 'EVT'],
            correctAnswers: ['Rolle\u2019s Theorem'],
            hints: ['$f(a) = f(b)$ and want $f\'(c) = 0$.'],
            explanation: '$f(2) = f(6)$, continuous, differentiable $\\Rightarrow$ Rolle\u2019s gives $f\'(c) = 0$.'
          },
          {
            label: '"Find $\\frac{d}{dx}\\int_2^{x^2} \\sin t\\,dt$."',
            options: ['FTC Part 1 with chain rule', 'MVT', 'IVT', 'FTC Part 2'],
            correctAnswers: ['FTC Part 1 with chain rule'],
            hints: ['Variable upper limit with $g(x) = x^2$.'],
            explanation: '$\\frac{d}{dx}\\int_2^{x^2}\\sin t\\,dt = \\sin(x^2)\\cdot 2x$.'
          }
        ]
      }
    },
    {
      id: 'thm5-input',
      type: 'input-box' as const,
      content: '**FTC Part 1 with chain rule.** \u270d\ufe0f',
      exercise: {
        question: '$H(x) = \\int_0^{3x} t^2\\,dt$. Find $H\'(2)$.\n\n(Enter an integer.)',
        correctAnswer: '108',
        acceptableAnswers: ['108'],
        hints: [
          'FTC with chain rule: $H\'(x) = (3x)^2 \\cdot 3$.',
          '$= 9x^2 \\cdot 3 = 27x^2$.',
          '$H\'(2) = 27(4) = 108$.'
        ],
        explanation: '$H\'(x) = (3x)^2 \\cdot 3 = 27x^2$. $H\'(2) = 27 \\cdot 4 = 108$.'
      }
    },
    {
      id: 'thm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- FTC Part 1: derivative of integral = the integrand
- FTC with chain rule: multiply by $g'(x)$
- Know which theorem to use based on what you need to prove
- IVT for values, MVT for derivatives, EVT for extrema`
    }
  ]
};
