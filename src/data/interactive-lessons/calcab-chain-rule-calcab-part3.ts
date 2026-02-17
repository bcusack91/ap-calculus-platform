export const calcABChainRulePart3Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain3-intro',
      type: 'text' as const,
      content: `
# Chain Rule with Trig

**Part 3 of 7 — Chain Rule with Trig**

### 1. d/dx[sin(u)] = cos(u) · u' where u = g(x)

d/dx[sin(u)] = cos(u) · u' where u = g(x)

### 2. d/dx[cos(3x²)] = -sin(3x²) · 6x

d/dx[cos(3x²)] = -sin(3x²) · 6x

### 3. d/dx[tan(u)] = sec²(u) · u'

d/dx[tan(u)] = sec²(u) · u'

### 4. Chain rule combines with every trig derivative

Chain rule combines with every trig derivative
      `
    },
    {
      id: 'chain3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "d/dx[sin(u)] = cos(u) · u\' where u =…" refer to in calculus?',
            options: [
              'd/dx[sin(u)] = cos(u) · u\' where u = g(x)',
              'd/dx[tan(u)] = sec²(u) · u\'',
              'Chain rule combines with every trig derivative',
              'd/dx[cos(3x²)] = -sin(3x²) · 6x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — d/dx[sin(u)] = cos(u) · u\' where u = g(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about d/dx[tan(u)] = sec²(u) · u\'?',
            options: [
              'Chain rule combines with every trig derivative',
              'd/dx[sin(u)] = cos(u) · u\' where u = g(x)',
              'd/dx[cos(3x²)] = -sin(3x²) · 6x',
              'd/dx[tan(u)] = sec²(u) · u\''
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[tan(u)] = sec²(u) · u\'. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'chain3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[sin(u)] = cos(u) · u' where u = g(x)**
- **d/dx[cos(3x²)] = -sin(3x²) · 6x**
- **d/dx[tan(u)] = sec²(u) · u'**
- **Chain rule combines with every trig derivative**
      `
    },
    {
      id: 'chain3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Chain Rule with Trig, which correctly describes Chain rule combines with every trig…?',
            options: [
              'd/dx[sin(u)] = cos(u) · u\' where u = g(x)',
              'd/dx[cos(3x²)] = -sin(3x²) · 6x',
              'Chain rule combines with every trig derivative',
              'd/dx[tan(u)] = sec²(u) · u\''
            ],
            correctAnswer: 2,
            explanation: 'Correct — Chain rule combines with every trig derivative. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin(u)] = cos(u) · u\' where u =…',
            options: ['d/dx[cos(3x²)] = -sin(3x²) · 6x', 'd/dx[tan(u)] = sec²(u) · u\'', 'd/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'Chain rule combines with every trig derivative']
          },
          {
            label: 'd/dx[cos(3x²)] = -sin(3x²) · 6x',
            options: ['d/dx[cos(3x²)] = -sin(3x²) · 6x', 'd/dx[tan(u)] = sec²(u) · u\'', 'd/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'Chain rule combines with every trig derivative']
          },
          {
            label: 'd/dx[tan(u)] = sec²(u) · u\'',
            options: ['d/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'd/dx[cos(3x²)] = -sin(3x²) · 6x', 'Chain rule combines with every trig derivative', 'd/dx[tan(u)] = sec²(u) · u\'']
          }
        ],
        correctAnswers: ['d/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'd/dx[cos(3x²)] = -sin(3x²) · 6x', 'd/dx[tan(u)] = sec²(u) · u\''],
        hint1: 'Think about what each concept specifically describes in Chain Rule with Trig.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chain Rule with Trig describes a specific idea. d/dx[sin(u)] = cos(u) · u\' where u = g(x). d/dx[cos(3x²)] = -sin(3x²) · 6x. d/dx[tan(u)] = sec²(u) · u\'.'
      }
    }
  ]
}
