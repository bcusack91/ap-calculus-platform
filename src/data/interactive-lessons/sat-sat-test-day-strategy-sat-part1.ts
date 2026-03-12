export const satTestDayStrategyPart1Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds1-intro',
      type: 'text' as const,
      content: `# Digital SAT: Format & Structure

**Part 1 of 7 — Know What You're Walking Into**

### The Digital SAT Format (2024+)
| Section | Modules | Questions | Time | Focus |
|---|---|---|---|---|
| Reading & Writing | 2 | 27 each (54 total) | 32 min each (64 min) | Comprehension, grammar, rhetoric |
| Math | 2 | 22 each (44 total) | 35 min each (70 min) | Algebra, geometry, problem solving |
| **Total** | **4** | **98** | **134 min** | |

### Adaptive Testing
- **Module 1** = mix of easy, medium, hard questions
- **Module 2** = difficulty adjusts based on Module 1 performance
  - Did well on Module 1? → Module 2 is harder (higher score ceiling)
  - Struggled on Module 1? → Module 2 is easier (lower score ceiling)

### What This Means for You
- **Every Module 1 question matters** — it determines your Module 2 difficulty
- Module 2 hard = access to 600-800 range per section
- Module 2 easy = score capped around 200-500 per section

### Scoring
- R&W: 200-800
- Math: 200-800
- **Total: 400-1600**

### Built-in Tools
- Desmos graphing calculator (all Math questions)
- Highlight & annotate (R&W passages)
- Mark for review (flag questions to return to within a module)
- Timer (always visible)`
    },
    {
      id: 'tds1-q1',
      type: 'quiz' as const,
      question: 'On the Digital SAT, if you perform well on Math Module 1, what happens?',
      options: [
        'You skip Module 2',
        'Module 2 becomes harder, giving access to higher scores',
        'Module 2 stays the same difficulty',
        'You get extra time on Module 2'
      ],
      correctAnswer: 1,
      explanation: 'The Digital SAT is adaptive: strong Module 1 performance unlocks a harder Module 2, which has questions that can push your score to 700-800. A weaker Module 1 leads to an easier Module 2 with a lower score ceiling.'
    }
  ]
};
