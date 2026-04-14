export const calcbcIntTechPart6Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it6-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Mixed practice requiring you to select and execute the correct technique. Work each problem before checking.`
    },
    {
      id: 'it6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Set 1**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x}{\\sqrt{9-x^2}}\\,dx =$',
            options: [
              '$-\\sqrt{9-x^2} + C$',
              '$\\arcsin(x/3) + C$',
              '$-\\frac{1}{3}\\arcsin(x/3) + C$',
              '$x\\arcsin(x/3) + C$'
            ],
            correctAnswer: 0,
            explanation: 'Despite the $\\sqrt{a^2-x^2}$ form, this is a simple $u$-sub! Let $u = 9-x^2$, $du = -2x\\,dx$: $-\\frac{1}{2}\\int u^{-1/2}du = -\\sqrt{u} + C$.'
          },
          {
            question: '$\\int \\frac{dx}{x^2 - 4}\\,dx =$',
            options: [
              '$\\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$',
              '$\\frac{1}{2}\\ln|x^2-4| + C$',
              '$\\arctan(x/2) + C$',
              '$\\frac{1}{2}\\arcsin(x/2) + C$'
            ],
            correctAnswer: 0,
            explanation: 'Partial fractions: $\\frac{1}{(x-2)(x+2)} = \\frac{1/4}{x-2} - \\frac{1/4}{x+2}$. Integrate: $\\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + C$.'
          },
          {
            question: '$\\int e^x \\sin x\\,dx$ requires:',
            options: [
              'IBP twice, then solve for the integral (cycling)',
              'A single IBP',
              '$u$-substitution',
              'Trig identity'
            ],
            correctAnswer: 0,
            explanation: 'This is the classic cycling/boomerang integral. Two rounds of IBP produce the original integral on the right side, letting you solve algebraically.'
          }
        ]
      }
    },
    {
      id: 'it6-mixed',
      type: 'text' as const,
      content: `### Worked Solutions

**Problem A:** $\\int \\frac{x^2 + 1}{x^2 - 1}\\,dx$

Long division: $\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{x^2-1} = 1 + \\frac{2}{(x-1)(x+1)}$

Partial fractions: $\\frac{2}{(x-1)(x+1)} = \\frac{1}{x-1} - \\frac{1}{x+1}$

$$\\boxed{x + \\ln|x-1| - \\ln|x+1| + C = x + \\ln\\left|\\frac{x-1}{x+1}\\right| + C}$$

**Problem B:** $\\int \\frac{dx}{x^2 + 2x + 5}$

Complete: $(x+1)^2 + 4$

$$\\boxed{\\frac{1}{2}\\arctan\\frac{x+1}{2} + C}$$`
    },
    {
      id: 'it6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Technique & Result**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{\\sqrt{x}}{1+x}\\,dx$: Best substitution?',
            options: ['$u = \\sqrt{x}$ ($x = u^2$, $dx = 2u\\,du$)', '$u = 1+x$', 'Trig sub $x = \\tan^2\\theta$', 'No substitution needed'],
            correctAnswers: ['$u = \\sqrt{x}$ ($x = u^2$, $dx = 2u\\,du$)'],
            hints: ['$\\int \\frac{u}{1+u^2} \\cdot 2u\\,du$? No \u2014 actually $\\int \\frac{u \\cdot 2u}{1+u^2}\\,du = 2\\int \\frac{u^2}{1+u^2}\\,du$.'],
            explanation: '$u = \\sqrt{x}$: $\\int \\frac{2u^2}{1+u^2}\\,du = 2\\int (1 - \\frac{1}{1+u^2})\\,du = 2u - 2\\arctan u + C = 2\\sqrt{x} - 2\\arctan\\sqrt{x} + C$.'
          },
          {
            label: '$\\int x^3 \\ln x\\,dx$: Best technique?',
            options: ['IBP: $u = \\ln x$, $dv = x^3 dx$', 'IBP: $u = x^3$, $dv = \\ln x\\,dx$', '$u$-sub: $u = \\ln x$', 'Tabular method'],
            correctAnswers: ['IBP: $u = \\ln x$, $dv = x^3 dx$'],
            hints: ['$\\ln x$ simplifies when differentiated. $x^3$ is easy to integrate.'],
            explanation: '$u = \\ln x$, $dv = x^3 dx$: $\\frac{x^4 \\ln x}{4} - \\int \\frac{x^3}{4}\\,dx = \\frac{x^4 \\ln x}{4} - \\frac{x^4}{16} + C$.'
          }
        ]
      }
    },
    {
      id: 'it6-challenge',
      type: 'text' as const,
      content: `### Challenge Problems

**1.** $\\int \\frac{e^x}{e^{2x} + 1}\\,dx$

Let $u = e^x$: $\\int \\frac{du}{u^2+1} = \\arctan(e^x) + C$

**2.** $\\int \\frac{x^2}{\\sqrt{1-x^2}}\\,dx$

Trig sub $x = \\sin\\theta$: $\\int \\sin^2\\theta\\,d\\theta = \\frac{\\theta}{2} - \\frac{\\sin 2\\theta}{4} + C = \\frac{\\arcsin x}{2} - \\frac{x\\sqrt{1-x^2}}{2} + C$

**3.** $\\int \\frac{x^2 + 2x + 3}{(x+1)(x^2+1)}\\,dx$

Partial fractions with irreducible quadratic: $\\frac{A}{x+1} + \\frac{Bx+C}{x^2+1}$

> **Pattern Recognition:** The faster you identify the technique, the more time you save on the AP exam.`
    },
    {
      id: 'it6-input',
      type: 'input-box' as const,
      content: '**Mixed Practice**',
      exercise: {
        question: 'Use long division then partial fractions: $\\int_2^3 \\frac{x^2}{x^2-1}\\,dx$. After division: $1 + \\frac{1}{x^2-1}$. Compute the integer part: $\\int_2^3 1\\,dx = ?$',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$\\int_2^3 1\\,dx = 3 - 2 = 1$.'],
        explanation: '$\\int_2^3 1\\,dx = 1$. The remaining $\\int_2^3 \\frac{1}{x^2-1}\\,dx$ uses partial fractions ($\\frac{1/2}{x-1} - \\frac{1/2}{x+1}$).'
      }
    },
    {
      id: 'it6-summary',
      type: 'text' as const,
      content: `### Workshop Recap

**Common Pitfalls:**
1. Jumping to trig sub when $u$-sub works (like $\\int \\frac{x}{\\sqrt{9-x^2}}\\,dx$)
2. Forgetting long division when degree(num) $\\ge$ degree(den)
3. Not completing the square when the denominator won\u2019t factor
4. Missing a simplification that eliminates the need for advanced techniques

> **Coming Up:** Part 7 is the **Comprehensive Review** of all integration techniques.`
    }
  ]
};
