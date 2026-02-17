export const actScienceReasonPart1Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Science Reasoning

**Part 1 of 7 — Scientific Method**

Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.

A hypothesis is testable and falsifiable.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Observation → Question → Hypothesis →…?',
            options: [
              'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.',
              'Scientific method is iterative — new questions arise from conclusions.',
              'Theory: well-supported explanation; Law: describes a consistent pattern.',
              'A hypothesis is testable and falsifiable.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Observation → Question → Hypothesis → Experiment → Analysis → Conclusion. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Science Reasoning, which explains Key Insight?',
            options: [
              'Theory: well-supported explanation; Law: describes a consistent pattern.',
              'A hypothesis is testable and falsifiable.',
              'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.',
              'Scientific method is iterative — new questions arise from conclusions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Theory: well-supported explanation; Law: describes a consistent pattern. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Theory: well-supported explanation; Law: describes a consistent pattern.

**ACT Tip:** Scientific method is iterative — new questions arise from conclusions.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Science Reasoning, which correctly describes ACT Tip?',
            options: [
              'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.',
              'Scientific method is iterative — new questions arise from conclusions.',
              'Theory: well-supported explanation; Law: describes a consistent pattern.',
              'A hypothesis is testable and falsifiable.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Scientific method is iterative — new questions arise from conclusions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['A hypothesis is testable and falsifiable.', 'Theory: well-supported explanation; Law: describes a consistent pattern.', 'Scientific method is iterative — new questions arise from conclusions.', 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.']
          },
          {
            label: 'ACT Tip',
            options: ['Theory: well-supported explanation; Law: describes a consistent pattern.', 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.', 'A hypothesis is testable and falsifiable.', 'Scientific method is iterative — new questions arise from conclusions.']
          }
        ],
        correctAnswers: ['Theory: well-supported explanation; Law: describes a consistent pattern.', 'Scientific method is iterative — new questions arise from conclusions.'],
        hint1: 'Think about what each concept specifically describes in Science Reasoning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Science Reasoning describes a specific idea. Key Insight: Theory: well-supported explanation; Law: describes a consistent pattern. ACT Tip: Scientific method is iterative — new questions arise from conclusions.'
      }
    }
  ]
}
