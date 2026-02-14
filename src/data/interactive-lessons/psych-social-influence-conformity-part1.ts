export const psychSocialInfluencePart1Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia1-intro',
      type: 'text' as const,
      content: `
# 🧠 Social Influence & Conformity

**Part 1 of 7 — Social Psychology Introduction**

### 1. Social psychology

how people think about, influence, and relate to others

### 2. Attribution theory

explaining others' behavior

### 3. Fundamental attribution error

overestimating personality, underestimating situation

### 4. Self-serving bias

attributing success to self, failure to situation
      `
    },
    {
      id: 'socia1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of social psychology introduction?',
            options: [
              'Social psychology',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Social psychology: how people think about, influence, and relate to others'
          },
          {
            question: 'In the context of social psychology introduction, which is accurate?',
            options: [
              'overestimating personality, underestimating situation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Fundamental attribution error: overestimating personality, underestimating situation'
          }
        ]
      }
    },
    {
      id: 'socia1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Social psychology**: how people think about, influence, and relate to others
- **Attribution theory**: explaining others' behavior
- **Fundamental attribution error**: overestimating personality, underestimating situation
- **Self-serving bias**: attributing success to self, failure to situation
      `
    },
    {
      id: 'socia1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to social psychology introduction?',
            options: [
              'attributing success to self, failure to situation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Self-serving bias: attributing success to self, failure to situation'
          }
        ]
      }
    },
    {
      id: 'socia1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social psychology',
            options: ['how people think about, influence, and relate to o', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Attribution theory',
            options: ['explaining others\' behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Fundamental attribution error',
            options: ['overestimating personality, underestimating situat', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['how people think about, influence, and relate to o', 'explaining others\' behavior', 'overestimating personality, underestimating situat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Social Psychology Introduction.'
      }
    }
  ]
}
