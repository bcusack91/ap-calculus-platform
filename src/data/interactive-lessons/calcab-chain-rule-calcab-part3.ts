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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of chain rule with trig?',
            options: [
              'd/dx[sin(u)] = cos(u) · u\' where u = g(x)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[sin(u)] = cos(u) · u\' where u = g(x)'
          },
          {
            question: 'In the context of chain rule with trig, which is accurate?',
            options: [
              'd/dx[tan(u)] = sec²(u) · u\'',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[tan(u)] = sec²(u) · u\''
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to chain rule with trig?',
            options: [
              'Chain rule combines with every trig derivative',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Chain rule combines with every trig derivative'
          }
        ]
      }
    },
    {
      id: 'chain3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin(u)] = cos(u) · u\' where u = g(x)',
            options: ['d/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[cos(3x²)] = -sin(3x²) · 6x',
            options: ['d/dx[cos(3x²)] = -sin(3x²) · 6x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[tan(u)] = sec²(u) · u\'',
            options: ['d/dx[tan(u)] = sec²(u) · u\'', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'd/dx[cos(3x²)] = -sin(3x²) · 6x', 'd/dx[tan(u)] = sec²(u) · u\''],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Chain Rule with Trig.'
      }
    }
  ]
}
