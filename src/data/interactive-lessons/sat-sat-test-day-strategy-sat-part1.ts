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
    },
    {
      id: 'tds1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Understanding Adaptive Scoring

### Worked Example 1: Score Ceiling by Path

| Module 2 Path | Module 1 Performance | Score Range (per section) | Strategy |
|---|---|---|---|
| Hard Module 2 | ~70 %+ correct on M1 | ~550–800 | Maximize accuracy on hard Qs |
| Easy Module 2 | <70 % correct on M1 | ~200–550 | Every correct answer matters |

**Takeaway:** Module 1 accuracy is your priority. Don't rush — getting 70 %+ right on Module 1 is worth more than finishing fast.

### Worked Example 2: Time Budget Planning

| Action | R&W Module | Math Module |
|---|---|---|
| Total time | 32 min | 35 min |
| Questions | 27 | 22 |
| Per question | ~71 sec | ~95 sec |
| Pass 1 target | ~20 min (easy/medium) | ~22 min (easy/medium) |
| Pass 2 target | ~12 min (flagged) | ~13 min (flagged) |

### Key Digital SAT Facts vs. Myths

| Myth | Reality |
|---|---|
| Question order = difficulty order | Questions are mixed — easy ones can appear later |
| You can go back to Module 1 | Once you submit a module, it's locked |
| Calculator only on some Qs | Desmos is available on ALL Math questions |
| Wrong answers cost points | No penalty — always guess |
| Longer answer = correct | Length has no correlation with correctness |`
    },
    {
      id: 'tds1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Format & Structure Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many total questions are on the Digital SAT?',
            options: ['88', '98', '108', '154'],
            correctAnswer: 1,
            explanation: 'R&W has 54 questions (27 × 2 modules) and Math has 44 questions (22 × 2 modules). Total: 54 + 44 = 98.'
          },
          {
            question: 'You finished Module 1 of R&W and scored well. Module 2 will be harder. This is:',
            options: ['Bad — harder questions mean a lower score', 'Good — harder Module 2 gives access to scores above 550', 'Neutral — score range is the same regardless', 'Impossible — adaptive testing does not exist on the Digital SAT'],
            correctAnswer: 1,
            explanation: 'Getting the harder Module 2 is a GOOD sign. It means you performed well and now have access to the full 200-800 scoring range for that section.'
          },
          {
            question: 'Which tool is NOT built into the Digital SAT interface?',
            options: ['Desmos calculator', 'Highlight & annotate', 'Spell checker', 'Mark for review'],
            correctAnswer: 2,
            explanation: 'The Digital SAT includes Desmos, highlighting/annotation, and mark-for-review. There is no built-in spell checker — you need to know how to spell on your own for grid-in and written responses.'
          }
        ]
      }
    },
    {
      id: 'tds1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Digital SAT Format Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Total test time (excluding breaks) = [134 min|120 min|150 min|180 min]',
          'Number of R&W modules = [2|1|3|4]',
          'Each Math module has [22|27|25|30] questions',
          'Total score range = [400–1600|200–800|600–2400|0–1600]'
        ],
        correctAnswers: ['134 min', '2', '22', '400–1600'],
        hint1: '64 minutes for R&W + 70 minutes for Math.',
        hint2: 'Each section (R&W and Math) has 2 adaptive modules.',
        hint3: 'R&W = 27 per module, Math = 22 per module.',
        explanation: 'R&W: 32 min × 2 = 64 min. Math: 35 min × 2 = 70 min. Total: 134 min. R&W has 2 modules with 27 Qs each. Math has 2 modules with 22 Qs each. Scoring: 200-800 per section, 400-1600 total.'
      }
    },
    {
      id: 'tds1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Key Fact | Detail |
|---|---|
| Total questions | 98 (54 R&W + 44 Math) |
| Total time | 134 min (64 R&W + 70 Math) |
| Adaptive | Module 2 difficulty depends on Module 1 |
| Score range | 400–1600 (200–800 per section) |
| Penalty | None — always answer every question |
| Built-in tools | Desmos, highlight, annotate, mark-for-review |

*Next: Time Management on the Digital SAT →*`
    }
  ]
};
