export const psychThinkingPart4Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think4-intro',
      type: 'text' as const,
      content: `
# ## Judgment & Heuristics

**Part 4 of 7 — Judgment & Heuristics**

### 1. Availability heuristic

judging likelihood by ease of recall

### 2. Representativeness heuristic

judging by similarity to prototype

### 3. Anchoring

relying too heavily on first piece of information

### 4. Confirmation bias

seeking evidence that supports beliefs
      `
    },
    {
      id: 'think4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of judgment & heuristics?',
            options: [
              'Availability heuristic',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Availability heuristic: judging likelihood by ease of recall'
          },
          {
            question: 'In the context of judgment & heuristics, which is accurate?',
            options: [
              'relying too heavily on first piece of information',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Anchoring: relying too heavily on first piece of information'
          }
        ]
      }
    },
    {
      id: 'think4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Availability heuristic**: judging likelihood by ease of recall
- **Representativeness heuristic**: judging by similarity to prototype
- **Anchoring**: relying too heavily on first piece of information
- **Confirmation bias**: seeking evidence that supports beliefs
      `
    },
    {
      id: 'think4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to judgment & heuristics?',
            options: [
              'seeking evidence that supports beliefs',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Confirmation bias: seeking evidence that supports beliefs'
          }
        ]
      }
    },
    {
      id: 'think4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Availability heuristic',
            options: ['judging likelihood by ease of recall', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Representativeness heuristic',
            options: ['judging by similarity to prototype', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Anchoring',
            options: ['relying too heavily on first piece of information', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['judging likelihood by ease of recall', 'judging by similarity to prototype', 'relying too heavily on first piece of information'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Judgment & Heuristics.'
      }
    }
  ]
}
