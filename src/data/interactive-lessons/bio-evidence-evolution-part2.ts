export const bioEvidencePart2Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid2-intro-p2',
      type: 'text' as const,
      content: `
# ## Comparative Anatomy

**Part 2 of 7 — Comparative Anatomy**

1. Homologous structures: same origin, different function (arm, wing, flipper)
2. Analogous structures: different origin, same function (bird wing vs insect wing)
3. Vestigial structures: reduced or nonfunctional (appendix, whale pelvis)
4. Homology indicates common ancestry
      `
    },
    {
      id: 'evid2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Homologous structures" refer to in biology?',
            options: [
              'different origin, same function (bird wing vs insect wing)',
              'Homology indicates common ancestry',
              'reduced or nonfunctional (appendix, whale pelvis)',
              'same origin, different function (arm, wing, flipper)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Homologous structures: same origin, different function (arm, wing, flipper). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Vestigial structures?',
            options: [
              'Homology indicates common ancestry',
              'same origin, different function (arm, wing, flipper)',
              'different origin, same function (bird wing vs insect wing)',
              'reduced or nonfunctional (appendix, whale pelvis)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Vestigial structures: reduced or nonfunctional (appendix, whale pelvis). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Homologous structures**: same origin, different function (arm, wing, flipper)
- **Analogous structures**: different origin, same function (bird wing vs insect wing)
- **Vestigial structures**: reduced or nonfunctional (appendix, whale pelvis)
- **Homology indicates common ancestry**
      `
    },
    {
      id: 'evid2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Comparative Anatomy, which correctly describes Homology indicates common ancestry?',
            options: [
              'reduced or nonfunctional (appendix, whale pelvis)',
              'Homology indicates common ancestry',
              'same origin, different function (arm, wing, flipper)',
              'different origin, same function (bird wing vs insect wing)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Homology indicates common ancestry. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homologous structures',
            options: ['same origin, different function (arm, wing, flipper)', 'reduced or nonfunctional (appendix, whale pelvis)', 'different origin, same function (bird wing vs insect wing)', 'Homology indicates common ancestry']
          },
          {
            label: 'Analogous structures',
            options: ['reduced or nonfunctional (appendix, whale pelvis)', 'same origin, different function (arm, wing, flipper)', 'different origin, same function (bird wing vs insect wing)', 'Homology indicates common ancestry']
          },
          {
            label: 'Vestigial structures',
            options: ['different origin, same function (bird wing vs insect wing)', 'same origin, different function (arm, wing, flipper)', 'reduced or nonfunctional (appendix, whale pelvis)', 'Homology indicates common ancestry']
          }
        ],
        correctAnswers: ['same origin, different function (arm, wing, flipper)', 'different origin, same function (bird wing vs insect wing)', 'reduced or nonfunctional (appendix, whale pelvis)'],
        hint1: 'Think about what each concept specifically describes in Comparative Anatomy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comparative Anatomy describes a specific idea. Homologous structures: same origin, different function (arm, wing, flipper). Analogous structures: different origin, same function (bird wing vs insect wing). Vestigial structures: reduced or nonfunctional (appendix, whale pelvis).'
      }
    }
  ]
}
