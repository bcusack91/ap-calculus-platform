export const actRhetoricalPart3Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e3-intro',
      type: 'text' as const,
      content: `
# Sentence Placement

**Part 3 of 7 — Sentence Placement**

Topic sentences usually go at the beginning of paragraphs.

Supporting details follow the topic sentence.
      `
    },
    {
      id: 'act-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Topic sentences usually go at the…" refer to in ACT prep?',
            options: [
              'Place sentences where they maintain chronological or logical order.',
              'Concluding/transitional sentences go at the end.',
              'Topic sentences usually go at the beginning of paragraphs.',
              'Supporting details follow the topic sentence.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Topic sentences usually go at the beginning of paragraphs. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Sentence Placement, which explains Key Insight?',
            options: [
              'Place sentences where they maintain chronological or logical order.',
              'Supporting details follow the topic sentence.',
              'Topic sentences usually go at the beginning of paragraphs.',
              'Concluding/transitional sentences go at the end.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Concluding/transitional sentences go at the end. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Concluding/transitional sentences go at the end.

**ACT Tip:** Place sentences where they maintain chronological or logical order.
      `
    },
    {
      id: 'act-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Sentence Placement, which correctly describes ACT Tip?',
            options: [
              'Topic sentences usually go at the beginning of paragraphs.',
              'Supporting details follow the topic sentence.',
              'Place sentences where they maintain chronological or logical order.',
              'Concluding/transitional sentences go at the end.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Place sentences where they maintain chronological or logical order. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Concluding/transitional sentences go at the end.', 'Place sentences where they maintain chronological or logical order.', 'Supporting details follow the topic sentence.', 'Topic sentences usually go at the beginning of paragraphs.']
          },
          {
            label: 'ACT Tip',
            options: ['Concluding/transitional sentences go at the end.', 'Supporting details follow the topic sentence.', 'Place sentences where they maintain chronological or logical order.', 'Topic sentences usually go at the beginning of paragraphs.']
          }
        ],
        correctAnswers: ['Concluding/transitional sentences go at the end.', 'Place sentences where they maintain chronological or logical order.'],
        hint1: 'Think about what each concept specifically describes in Sentence Placement.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sentence Placement describes a specific idea. Key Insight: Concluding/transitional sentences go at the end. ACT Tip: Place sentences where they maintain chronological or logical order.'
      }
    }
  ]
}
