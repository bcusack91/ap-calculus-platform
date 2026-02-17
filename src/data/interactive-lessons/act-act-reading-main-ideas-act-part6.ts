export const actReadingMainPart6Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Context clues: the surrounding words reveal the meaning.

Substitute each answer choice — which one makes the most sense?.
      `
    },
    {
      id: 'act-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Context clues?',
            options: [
              'ACT tests common words with uncommon meanings.',
              'Substitute each answer choice — which one makes the most sense?.',
              'Read the full sentence, not just the phrase around the word.',
              'the surrounding words reveal the meaning.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Context clues: the surrounding words reveal the meaning. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Substitute each answer choice — which one makes the most sense?.',
              'the surrounding words reveal the meaning.',
              'ACT tests common words with uncommon meanings.',
              'Read the full sentence, not just the phrase around the word.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: ACT tests common words with uncommon meanings. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ACT tests common words with uncommon meanings.

**ACT Tip:** Read the full sentence, not just the phrase around the word.
      `
    },
    {
      id: 'act-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Substitute each answer choice — which one makes the most sense?.',
              'ACT tests common words with uncommon meanings.',
              'the surrounding words reveal the meaning.',
              'Read the full sentence, not just the phrase around the word.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Read the full sentence, not just the phrase around the word. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Context clues',
            options: ['Substitute each answer choice — which one makes the most sense?.', 'ACT tests common words with uncommon meanings.', 'Read the full sentence, not just the phrase around the word.', 'the surrounding words reveal the meaning.']
          },
          {
            label: 'Key Insight',
            options: ['the surrounding words reveal the meaning.', 'Substitute each answer choice — which one makes the most sense?.', 'Read the full sentence, not just the phrase around the word.', 'ACT tests common words with uncommon meanings.']
          },
          {
            label: 'ACT Tip',
            options: ['Read the full sentence, not just the phrase around the word.', 'the surrounding words reveal the meaning.', 'ACT tests common words with uncommon meanings.', 'Substitute each answer choice — which one makes the most sense?.']
          }
        ],
        correctAnswers: ['the surrounding words reveal the meaning.', 'ACT tests common words with uncommon meanings.', 'Read the full sentence, not just the phrase around the word.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Context clues: the surrounding words reveal the meaning. Key Insight: ACT tests common words with uncommon meanings. ACT Tip: Read the full sentence, not just the phrase around the word.'
      }
    }
  ]
}
