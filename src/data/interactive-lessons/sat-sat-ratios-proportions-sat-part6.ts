export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp6-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 6 of 7 — Mixture and Work Problems**

### Mixture Problems

"How many liters of 60% acid solution must be mixed with 10 liters of 20% acid to get a 40% solution?"

Let $x$ = liters of 60% solution:

$$0.60x + 0.20(10) = 0.40(x + 10)$$
$$0.60x + 2 = 0.40x + 4$$
$$0.20x = 2$$
$$x = 10 \\text{ liters}$$

### Work/Rate Problems

"Pipe A fills a tank in 6 hours, Pipe B in 4 hours. Together?"

- Rate A: $1/6$ tank/hour
- Rate B: $1/4$ tank/hour
- Combined: $1/6 + 1/4 = 2/12 + 3/12 = 5/12$ tank/hour
- Time: $12/5 = 2.4$ hours

### SAT Strategy for Rate Problems

$$\\text{Rate} \\times \\text{Time} = \\text{Work}$$

Add rates when working together. The combined rate is always faster than either individual rate.`
    },
    {
      id: 'rp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixtures & Work** 🎯',
      exercise: {
        questions: [
          {
            question: 'Worker A can paint a house in 12 hours and Worker B can paint it in 8 hours. Working together, how many hours will it take?',
            options: ['$4.8$ hours', '$10$ hours', '$6$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: 'Combined rate = $1/12 + 1/8 = 2/24 + 3/24 = 5/24$. Time = $24/5 = 4.8$ hours.'
          },
          {
            question: 'How many mL of pure water must be added to 200 mL of 30% salt solution to make a 20% solution?',
            options: ['$100$ mL', '$50$ mL', '$200$ mL', '$150$ mL'],
            correctAnswer: 0,
            explanation: 'Salt stays the same: $0.30(200) = 60$ mL. New total: $x + 200$. $60/(x + 200) = 0.20$ → $60 = 0.20x + 40$ → $x = 100$ mL.'
          },
          {
            question: 'A printer prints 40 pages per minute. A faster printer does 60 pages per minute. Together, how long to print 500 pages?',
            options: ['$5$ minutes', '$8$ minutes', '$10$ minutes', '$3$ minutes'],
            correctAnswer: 0,
            explanation: 'Combined rate: $40 + 60 = 100$ pages/min. Time = $500/100 = 5$ minutes.'
          }
        ]
      }
    },
    {
      id: 'rp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Mixtures: set up equation where (amount of substance) is equal on both sides
- Work problems: add the **rates** (not the times), then find time from combined rate
- Rate × Time = Work (or Amount)
- For work problems: find individual rates, add them, then use $time = work/rate$`
    }
  ]
};
