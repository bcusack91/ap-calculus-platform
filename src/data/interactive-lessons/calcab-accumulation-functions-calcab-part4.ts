export const calcabAccumulationPart4Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc4-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 4 of 7 \u2014 Net Change Applications**

### Rate In / Rate Out Problems

If $R_{in}(t)$ = rate in and $R_{out}(t)$ = rate out:

$$\\text{Net change} = \\int_a^b [R_{in}(t) - R_{out}(t)]\\,dt$$

$$\\text{Amount at time } b = \\text{Initial amount} + \\int_a^b [R_{in} - R_{out}]\\,dt$$

These problems appear on nearly every AP exam!`
    },
    {
      id: 'acc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rate In/Rate Out** \ud83c\udfaf\n\nWater flows into a tank at $R_{in}(t) = 10 + 2t$ gallons/hr and leaks out at $R_{out}(t) = 5$ gallons/hr. Initially the tank has 100 gallons.',
      exercise: {
        questions: [
          {
            question: 'How much water is in the tank at $t = 4$ hours?',
            options: ['$136$ gallons', '$140$ gallons', '$120$ gallons', '$116$ gallons'],
            correctAnswer: 0,
            explanation: 'Net rate = $(10+2t) - 5 = 5 + 2t$. Net change = $\\int_0^4 (5+2t)\\,dt = [5t+t^2]_0^4 = 20+16 = 36$. Total: $100 + 36 = 136$ gallons.'
          },
          {
            question: 'At what rate is the amount of water changing at $t = 3$?',
            options: ['$11$ gal/hr', '$16$ gal/hr', '$5$ gal/hr', '$8$ gal/hr'],
            correctAnswer: 0,
            explanation: 'Net rate at $t=3$: $(10+6) - 5 = 11$ gallons/hour.'
          }
        ]
      }
    },
    {
      id: 'acc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. Net change = $\\int (\\text{rate in} - \\text{rate out})\\,dt$
2. Current amount = initial + net change
3. This is one of the most common AP FRQ formats`
    }
  ]
};
