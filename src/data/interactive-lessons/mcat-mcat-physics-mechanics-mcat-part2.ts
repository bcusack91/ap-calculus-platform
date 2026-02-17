export const mcatPhysMechPart2Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Forces & Newtons Laws

**Part 2 of 7 — Forces & Newtons Laws**

F = ma — net force equals mass times acceleration (Newtons second law).

Normal force is perpendicular to the contact surface; friction is parallel and opposes motion.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in forces & newtons laws?',
            options: [
              'F = ma — net force equals mass times acceleration (Newtons second law)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'F = ma — net force equals mass times acceleration (Newtons second law)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta).

**MCAT Tip:** Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to forces & newtons laws?',
            options: [
              'Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Normal force is perpendicular to the contact surface; friction is parallel and opposes motion.', 'Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta).', 'Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion.', 'F = ma — net force equals mass times acceleration (Newtons second law).']
          },
          {
            label: 'MCAT Tip',
            options: ['Normal force is perpendicular to the contact surface; friction is parallel and opposes motion.', 'F = ma — net force equals mass times acceleration (Newtons second law).', 'Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion.', 'Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta).']
          }
        ],
        correctAnswers: ['Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta).', 'Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion.'],
        hint1: 'Think about what each concept specifically describes in Forces & Newtons Laws.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Forces & Newtons Laws describes a specific idea. Key Insight: Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta). MCAT Tip: Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion.'
      }
    }
  ]
}
