export const mcatOrgChemPart7Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.

1H NMR: chemical shift indicates electronic environment; splitting follows n+1 rule.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.

**MCAT Tip:** UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
            options: [
              'Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Review & MCAT Practice:',
            options: ['IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp', '1H NMR: chemical shift indicates electronic environment; spl', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Mass spectrometry: molecular ion peak gives molecular weight', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp', 'Mass spectrometry: molecular ion peak gives molecular weight'],
        hint1: 'Think about review & mcat practice',
        hint2: 'Consider the MCAT application',
        explanation: 'IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1. Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.'
      }
    }
  ]
}
