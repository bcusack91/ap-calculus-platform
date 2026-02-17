export const actReadSciTipsPart2Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# ACT Science Overview

**Part 2 of 7 — ACT Science Overview**

40 questions in 35 minutes across 7 passages.

Three types: data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 40 questions in 35 minutes across 7…?',
            options: [
              'data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).',
              'Focus on trends and relationships, not memorizing data.',
              'You do NOT need advanced science knowledge — it is a reading comprehension test.',
              '40 questions in 35 minutes across 7 passages.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 40 questions in 35 minutes across 7 passages. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).',
              'Focus on trends and relationships, not memorizing data.',
              '40 questions in 35 minutes across 7 passages.',
              'You do NOT need advanced science knowledge — it is a reading comprehension test.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Focus on trends and relationships, not memorizing data. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Focus on trends and relationships, not memorizing data.

**ACT Tip:** You do NOT need advanced science knowledge — it is a reading comprehension test.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding ACT Science Overview, which correctly describes ACT Tip?',
            options: [
              '40 questions in 35 minutes across 7 passages.',
              'You do NOT need advanced science knowledge — it is a reading comprehension test.',
              'Focus on trends and relationships, not memorizing data.',
              'data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: You do NOT need advanced science knowledge — it is a reading comprehension test. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three types',
            options: ['data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).', '40 questions in 35 minutes across 7 passages.', 'Focus on trends and relationships, not memorizing data.', 'You do NOT need advanced science knowledge — it is a reading comprehension test.']
          },
          {
            label: 'Key Insight',
            options: ['Focus on trends and relationships, not memorizing data.', 'data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).', 'You do NOT need advanced science knowledge — it is a reading comprehension test.', '40 questions in 35 minutes across 7 passages.']
          },
          {
            label: 'ACT Tip',
            options: ['You do NOT need advanced science knowledge — it is a reading comprehension test.', 'Focus on trends and relationships, not memorizing data.', 'data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).', '40 questions in 35 minutes across 7 passages.']
          }
        ],
        correctAnswers: ['data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).', 'Focus on trends and relationships, not memorizing data.', 'You do NOT need advanced science knowledge — it is a reading comprehension test.'],
        hint1: 'Think about what each concept specifically describes in ACT Science Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ACT Science Overview describes a specific idea. Three types: data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%). Key Insight: Focus on trends and relationships, not memorizing data. ACT Tip: You do NOT need advanced science knowledge — it is a reading comprehension test.'
      }
    }
  ]
}
