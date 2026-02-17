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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Social psychology?',
            options: [
              'explaining others\' behavior',
              'attributing success to self, failure to situation',
              'overestimating personality, underestimating situation',
              'how people think about, influence, and relate to others'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Social psychology: how people think about, influence, and relate to others. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Fundamental attribution error:',
            options: [
              'how people think about, influence, and relate to others',
              'overestimating personality, underestimating situation',
              'attributing success to self, failure to situation',
              'explaining others\' behavior'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fundamental attribution error: overestimating personality, underestimating situation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social psychology',
            options: ['overestimating personality, underestimating situation', 'explaining others\' behavior', 'attributing success to self, failure to situation', 'how people think about, influence, and relate to others']
          },
          {
            label: 'Attribution theory',
            options: ['attributing success to self, failure to situation', 'how people think about, influence, and relate to others', 'overestimating personality, underestimating situation', 'explaining others\' behavior']
          },
          {
            label: 'Fundamental attribution error',
            options: ['overestimating personality, underestimating situation', 'attributing success to self, failure to situation', 'explaining others\' behavior', 'how people think about, influence, and relate to others']
          }
        ],
        correctAnswers: ['how people think about, influence, and relate to others', 'explaining others\' behavior', 'overestimating personality, underestimating situation'],
        hint1: 'Think about what each concept specifically describes in Social Influence & Conformity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Social Influence & Conformity describes a specific idea. Social psychology: how people think about, influence, and relate to others. Attribution theory: explaining others\' behavior. Fundamental attribution error: overestimating personality, underestimating situation.'
      }
    }
  ]
}
