export const calcabAppsDerivativesPart6Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps6-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 6 of 7 — Related Rates (Mini-Review)**

### Related Rates Strategy

1. Draw a picture and label variables
2. Write an equation relating the variables
3. Differentiate both sides with respect to time $t$
4. Substitute known values and solve`
    },
    {
      id: 'apps6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Related Rates & Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circle is expanding with $\\frac{dr}{dt} = 3$ cm/s. Find $\\frac{dA}{dt}$ when $r = 5$ cm.',
            options: ['$30\\pi$ cm$^2$/s', '$15\\pi$ cm$^2$/s', '$10\\pi$ cm$^2$/s', '$25\\pi$ cm$^2$/s'],
            correctAnswer: 0,
            explanation: '$A = \\pi r^2$. $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(3) = 30\\pi$ cm$^2$/s.'
          },
          {
            question: 'Water fills a cone (radius 3 m, height 6 m) at 2 m$^3$/min. How fast is the depth rising when $h = 2$ m? ($r = h/2$)',
            options: ['$\\frac{2}{\\pi}$ m/min', '$\\frac{8}{\\pi}$ m/min', '$\\frac{1}{\\pi}$ m/min', '$\\frac{4}{\\pi}$ m/min'],
            correctAnswer: 0,
            explanation: 'Since $r = h/2$: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{12}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$. $2 = \\frac{\\pi(4)}{4}\\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{2}{\\pi}$ m/min.'
          }
        ]
      }
    },
    {
      id: 'apps6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

1. Related rates: differentiate with respect to $t$ using Chain Rule
2. Always identify what you're given and what you're finding
3. Don't substitute values until AFTER differentiating`
    }
  ]
};
