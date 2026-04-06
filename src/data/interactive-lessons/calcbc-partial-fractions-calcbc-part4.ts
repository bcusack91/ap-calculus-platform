export const calcbcPartialFracPart4Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf4-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 4 of 7 — Long Division First**

### When Degree of Numerator $\geq$ Degree of Denominator

You must do **polynomial long division** first!

$\\frac{x^2 + 1}{x - 1} = x + 1 + \\frac{2}{x-1}$

Then integrate term by term.`
    },
    {
      id: 'pf4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Long Division + PFD** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x^2}{x-1}\\,dx = $',
            options: ['$\\frac{x^2}{2} + x + \\ln|x-1| + C$', '$\\frac{x^2}{2} + \\ln|x-1| + C$', '$x + \\ln|x-1| + C$', '$\\frac{x^3}{3(x-1)} + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{x^2}{x-1} = x + 1 + \\frac{1}{x-1}$. $\\int = \\frac{x^2}{2} + x + \\ln|x-1| + C$.'
          }
        ]
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Always check: is the degree of numerator $\geq$ denominator? If so, divide first!`
    }
  ]
};
