export const calcabUSubPart6Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub6-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems combining all u-substitution techniques.`
    },
    {
      id: 'usub6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed u-Sub Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi/4} \\sec^2(x) e^{\\tan x}\\,dx$.',
            options: ['$e - 1$', '$e$', '$e + 1$', '$1$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\tan x$, $du = \\sec^2 x\\,dx$. Limits: $u=0$ to $u=1$. $\\int_0^1 e^u\\,du = e - 1$.'
          },
          {
            question: 'Evaluate $\\int \\frac{\\cos(\\ln x)}{x}\\,dx$.',
            options: ['$\\sin(\\ln x) + C$', '$\\cos(\\ln x) + C$', '$\\frac{\\sin(\\ln x)}{x} + C$', '$x\\sin(\\ln x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. $\\int \\cos(u)\\,du = \\sin(u) = \\sin(\\ln x) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^3}{\\sqrt{x^4+9}}\\,dx$.',
            options: ['$\\frac{1}{2}\\sqrt{x^4+9} + C$', '$\\sqrt{x^4+9} + C$', '$\\frac{1}{4}\\sqrt{x^4+9} + C$', '$2\\sqrt{x^4+9} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^4+9$, $du = 4x^3\\,dx$. $\\frac{1}{4}\\int u^{-1/2}\\,du = \\frac{1}{4}(2u^{1/2}) = \\frac{1}{2}\\sqrt{x^4+9} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub6-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Challenging Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^4 \\frac{1}{\\sqrt{x}(1+\\sqrt{x})^2}\\,dx$.',
            options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$', '$1$'],
            correctAnswer: 0,
            explanation: 'Let $u = 1 + \\sqrt{x}$, $du = \\frac{1}{2\\sqrt{x}}\\,dx$. Limits: $x=1 \\Rightarrow u=2$, $x=4 \\Rightarrow u=3$. $2\\int_2^3 u^{-2}\\,du = 2[-u^{-1}]_2^3 = 2(-\\frac{1}{3}+\\frac{1}{2}) = 2 \\cdot \\frac{1}{6} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'usub6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

You practiced u-sub with exponentials, logarithms, trig functions, and algebraic manipulation.`
    }
  ]
};
