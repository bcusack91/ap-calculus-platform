export const satReadingEvidencePart3Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r3-intro',
      type: 'text' as const,
      content: `
# Author Purpose & Tone

**Part 3 of 7 — Author Purpose & Tone**

Purpose: why did the author write this? (inform, persuade, entertain, analyze).

Tone: the author's attitude (objective, critical, enthusiastic, skeptical).
      `
    },
    {
      id: 'sat-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Purpose?',
            options: [
              'Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.',
              'why did the author write this? (inform, persuade, entertain, analyze).',
              'the author\'s attitude (objective, critical, enthusiastic, skeptical).',
              'Look at word choice (diction) for tone clues.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Purpose: why did the author write this? (inform, persuade, entertain, analyze). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look at word choice (diction) for tone clues.',
              'the author\'s attitude (objective, critical, enthusiastic, skeptical).',
              'Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.',
              'why did the author write this? (inform, persuade, entertain, analyze).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Look at word choice (diction) for tone clues. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at word choice (diction) for tone clues.

**SAT Tip:** Don't confuse the author's tone with a character's or speaker's tone.
      `
    },
    {
      id: 'sat-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'the author\'s attitude (objective, critical, enthusiastic, skeptical).',
              'why did the author write this? (inform, persuade, entertain, analyze).',
              'Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.',
              'Look at word choice (diction) for tone clues.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Purpose',
            options: ['why did the author write this? (inform, persuade, entertain, analyze).', 'the author\'s attitude (objective, critical, enthusiastic, skeptical).', 'Look at word choice (diction) for tone clues.', 'Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.']
          },
          {
            label: 'Tone',
            options: ['the author\'s attitude (objective, critical, enthusiastic, skeptical).', 'why did the author write this? (inform, persuade, entertain, analyze).', 'Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.', 'Look at word choice (diction) for tone clues.']
          },
          {
            label: 'Key Insight',
            options: ['Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone.', 'why did the author write this? (inform, persuade, entertain, analyze).', 'the author\'s attitude (objective, critical, enthusiastic, skeptical).', 'Look at word choice (diction) for tone clues.']
          }
        ],
        correctAnswers: ['why did the author write this? (inform, persuade, entertain, analyze).', 'the author\'s attitude (objective, critical, enthusiastic, skeptical).', 'Look at word choice (diction) for tone clues.'],
        hint1: 'Think about what each concept specifically describes in Author Purpose & Tone.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Author Purpose & Tone describes a specific idea. Purpose: why did the author write this? (inform, persuade, entertain, analyze). Tone: the author\'s attitude (objective, critical, enthusiastic, skeptical). Key Insight: Look at word choice (diction) for tone clues.'
      }
    }
  ]
}
