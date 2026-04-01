export const calcabExpModelsPart2Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp2-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 2 of 7 — Newton's Law of Cooling**

### The Model

$$\\frac{dT}{dt} = k(T - T_s)$$

where $T_s$ is the surrounding temperature.

**Solution:** $T(t) = T_s + (T_0 - T_s)e^{kt}$ where $k < 0$.

### Worked Example

A cup of coffee at $200°F$ is placed in a $70°F$ room. After 10 min it's $150°F$.

$150 = 70 + 130e^{10k}$

$80 = 130e^{10k}$

$e^{10k} = \\frac{8}{13}$

$T(t) = 70 + 130\\left(\\frac{8}{13}\\right)^{t/10}$`
    },
    {
      id: 'exp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Newton\'s Cooling** 🎯',
      exercise: {
        questions: [
          {
            question: 'A body at $98°F$ is found in a $65°F$ room. After 1 hour it\'s $90°F$. What was the temperature 2 hours after death?',
            options: ['$83.1°F$', '$85°F$', '$80°F$', '$77°F$'],
            correctAnswer: 0,
            explanation: '$90 = 65 + 33e^{k}$. $e^k = 25/33$. After 2 hrs: $T = 65 + 33(25/33)^2 = 65 + 33 \\cdot 625/1089 \\approx 65 + 18.94 = 83.1°F$.'
          }
        ]
      }
    },
    {
      id: 'exp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Newton's Cooling: rate proportional to temperature difference
2. Temperature approaches surroundings exponentially`
    }
  ]
};
