export const calcBCExamStrategiesPart2Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex2-intro',
      type: 'text' as const,
      content: `
# Series Questions Strategy

**Part 2 of 7 — Series Questions Strategy**

### 1. Series MC

identify convergence test quickly using the strategy flowchart

### 2. Series FRQ

usually involves Taylor series construction, error bounds, and interval of convergence

### 3. Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))

Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))

### 4. Know how to construct new series from known ones by substitution, differentiation, integration

Know how to construct new series from known ones by substitution, differentiation, integration
      `
    },
    {
      id: 'bc-ex2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Series MC?',
            options: [
              'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))',
              'Know how to construct new series from known ones by substitution, differentiation, integration',
              'usually involves Taylor series construction, error bounds, and interval of convergence',
              'identify convergence test quickly using the strategy flowchart'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Series MC: identify convergence test quickly using the strategy flowchart. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Memorize the common Maclaurin series…?',
            options: [
              'Know how to construct new series from known ones by substitution, differentiation, integration',
              'identify convergence test quickly using the strategy flowchart',
              'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))',
              'usually involves Taylor series construction, error bounds, and interval of convergence'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x)). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'bc-ex2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Series MC**: identify convergence test quickly using the strategy flowchart
- **Series FRQ**: usually involves Taylor series construction, error bounds, and interval of convergence
- **Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))**
- **Know how to construct new series from known ones by substitution, differentiation, integration**
      `
    },
    {
      id: 'bc-ex2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Series Questions Strategy, which correctly describes Know how to construct new series from…?',
            options: [
              'identify convergence test quickly using the strategy flowchart',
              'usually involves Taylor series construction, error bounds, and interval of convergence',
              'Know how to construct new series from known ones by substitution, differentiation, integration',
              'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Know how to construct new series from known ones by substitution, differentiation, integration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Series MC',
            options: ['Know how to construct new series from known ones by substitution, differentiation, integration', 'usually involves Taylor series construction, error bounds, and interval of convergence', 'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))', 'identify convergence test quickly using the strategy flowchart']
          },
          {
            label: 'Series FRQ',
            options: ['Know how to construct new series from known ones by substitution, differentiation, integration', 'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))', 'usually involves Taylor series construction, error bounds, and interval of convergence', 'identify convergence test quickly using the strategy flowchart']
          }
        ],
        correctAnswers: ['identify convergence test quickly using the strategy flowchart', 'usually involves Taylor series construction, error bounds, and interval of convergence'],
        hint1: 'Think about what each concept specifically describes in Series Questions Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Series Questions Strategy describes a specific idea. Series MC: identify convergence test quickly using the strategy flowchart. Series FRQ: usually involves Taylor series construction, error bounds, and interval of convergence.'
      }
    }
  ]
}
