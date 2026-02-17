export const actReadingMainPart7Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Context clues: the surrounding words reveal the meaning.

Substitute each answer choice — which one makes the most sense?.
      `
    },
    {
      id: 'act-r7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Context clues?',
            options: [
              'the surrounding words reveal the meaning.',
              'Read the full sentence, not just the phrase around the word.',
              'ACT tests common words with uncommon meanings.',
              'Substitute each answer choice — which one makes the most sense?.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Context clues: the surrounding words reveal the meaning. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'ACT tests common words with uncommon meanings.',
              'the surrounding words reveal the meaning.',
              'Read the full sentence, not just the phrase around the word.',
              'Substitute each answer choice — which one makes the most sense?.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: ACT tests common words with uncommon meanings. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ACT tests common words with uncommon meanings.

**ACT Tip:** Read the full sentence, not just the phrase around the word.
      `
    },
    {
      id: 'act-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Substitute each answer choice — which one makes the most sense?.',
              'the surrounding words reveal the meaning.',
              'Read the full sentence, not just the phrase around the word.',
              'ACT tests common words with uncommon meanings.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Read the full sentence, not just the phrase around the word. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Context clues',
            options: ['the surrounding words reveal the meaning.', 'Read the full sentence, not just the phrase around the word.', 'Substitute each answer choice — which one makes the most sense?.', 'ACT tests common words with uncommon meanings.']
          },
          {
            label: 'Key Insight',
            options: ['the surrounding words reveal the meaning.', 'Read the full sentence, not just the phrase around the word.', 'ACT tests common words with uncommon meanings.', 'Substitute each answer choice — which one makes the most sense?.']
          },
          {
            label: 'ACT Tip',
            options: ['Substitute each answer choice — which one makes the most sense?.', 'ACT tests common words with uncommon meanings.', 'Read the full sentence, not just the phrase around the word.', 'the surrounding words reveal the meaning.']
          }
        ],
        correctAnswers: ['the surrounding words reveal the meaning.', 'ACT tests common words with uncommon meanings.', 'Read the full sentence, not just the phrase around the word.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Context clues: the surrounding words reveal the meaning. Key Insight: ACT tests common words with uncommon meanings. ACT Tip: Read the full sentence, not just the phrase around the word.'
      }
    }
  ]
}
