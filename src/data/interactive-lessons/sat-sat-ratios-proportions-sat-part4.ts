export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp4-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 4 of 7 — Unit Conversions**

### Dimensional Analysis

Convert units by multiplying by fractions equal to 1:

"Convert 30 mph to feet per second"

$$30 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{5,280 \\text{ feet}}{1 \\text{ mile}} \\times \\frac{1 \\text{ hour}}{3,600 \\text{ seconds}} = 44 \\text{ ft/s}$$

### Common Conversions (SAT-relevant)

| Given | Conversion |
|-------|-----------|
| 1 mile | 5,280 feet |
| 1 kilometer | 1,000 meters |
| 1 hour | 60 minutes = 3,600 seconds |
| 1 gallon | 4 quarts |
| 1 pound | 16 ounces |

### SAT Unit Conversion Strategy

1. Write the starting quantity as a fraction
2. Multiply by conversion factors so unwanted units cancel
3. Compute the result

The SAT provides conversion factors in the problem — you don't need to memorize them. Focus on the METHOD of canceling units.`
    },
    {
      id: 'rp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Unit Conversions** 🎯',
      exercise: {
        questions: [
          {
            question: 'A faucet drips 3 gallons per hour. How many quarts per minute is this? (1 gallon = 4 quarts)',
            options: ['$0.2$ quarts/min', '$12$ quarts/min', '$0.75$ quarts/min', '$1$ quart/min'],
            correctAnswer: 0,
            explanation: '$3$ gal/hr $\\times$ $4$ qt/gal $\\times$ $1$ hr/$60$ min $= 12/60 = 0.2$ quarts per minute.'
          },
          {
            question: 'A car travels at 90 km/h. What is its speed in m/s? (1 km = 1000 m)',
            options: ['$25$ m/s', '$15$ m/s', '$50$ m/s', '$90$ m/s'],
            correctAnswer: 0,
            explanation: '$90$ km/h $\\times 1000$ m/km $\\times 1$ hr/$3600$ s $= 90000/3600 = 25$ m/s.'
          },
          {
            question: 'If fabric costs \\$8 per yard, what is the cost per foot? (1 yard = 3 feet)',
            options: ['\\$2.67', '\\$3', '\\$24', '\\$8'],
            correctAnswer: 0,
            explanation: '$\\$8$/yd $\\times$ $1$ yd/$3$ ft $= \\$8/3 ≈ \\$2.67$ per foot.'
          }
        ]
      }
    },
    {
      id: 'rp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Dimensional analysis: multiply by fractions equal to 1, cancel units
- Set up so unwanted units appear in numerator AND denominator (they cancel)
- The SAT will give you all needed conversion factors — focus on the method
- Write units at every step to avoid errors`
    }
  ]
};
