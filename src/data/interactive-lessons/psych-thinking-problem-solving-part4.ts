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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Availability heuristic?',
            options: [
              'seeking evidence that supports beliefs',
              'relying too heavily on first piece of information',
              'judging likelihood by ease of recall',
              'judging by similarity to prototype'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Availability heuristic: judging likelihood by ease of recall. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Anchoring?',
            options: [
              'seeking evidence that supports beliefs',
              'judging likelihood by ease of recall',
              'judging by similarity to prototype',
              'relying too heavily on first piece of information'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Anchoring: relying too heavily on first piece of information. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Availability heuristic',
            options: ['seeking evidence that supports beliefs', 'judging by similarity to prototype', 'relying too heavily on first piece of information', 'judging likelihood by ease of recall']
          },
          {
            label: 'Representativeness heuristic',
            options: ['judging likelihood by ease of recall', 'seeking evidence that supports beliefs', 'judging by similarity to prototype', 'relying too heavily on first piece of information']
          },
          {
            label: 'Anchoring',
            options: ['seeking evidence that supports beliefs', 'judging likelihood by ease of recall', 'judging by similarity to prototype', 'relying too heavily on first piece of information']
          }
        ],
        correctAnswers: ['judging likelihood by ease of recall', 'judging by similarity to prototype', 'relying too heavily on first piece of information'],
        hint1: 'Think about what each concept specifically describes in Judgment & Heuristics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Judgment & Heuristics describes a specific idea. Availability heuristic: judging likelihood by ease of recall. Representativeness heuristic: judging by similarity to prototype. Anchoring: relying too heavily on first piece of information.'
      }
    }
  ]
}
