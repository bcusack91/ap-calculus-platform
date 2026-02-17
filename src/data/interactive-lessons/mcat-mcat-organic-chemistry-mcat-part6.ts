export const mcatOrgChemPart6Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Spectroscopy & Structure

**Part 6 of 7 — Spectroscopy & Structure**

IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.

1H NMR: chemical shift indicates electronic environment; splitting follows n+1 rule.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in spectroscopy & structure?',
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
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.

**MCAT Tip:** UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to spectroscopy & structure?',
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
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IR spectroscopy',
            options: ['Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.', 'UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition.', 'chemical shift indicates electronic environment; splitting follows n+1 rule.', 'O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.']
          },
          {
            label: '1H NMR',
            options: ['O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.', 'UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition.', 'chemical shift indicates electronic environment; splitting follows n+1 rule.', 'Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.']
          },
          {
            label: 'Key Insight',
            options: ['chemical shift indicates electronic environment; splitting follows n+1 rule.', 'Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.', 'UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition.', 'O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.']
          }
        ],
        correctAnswers: ['O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1.', 'chemical shift indicates electronic environment; splitting follows n+1 rule.', 'Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.'],
        hint1: 'Think about what each concept specifically describes in Spectroscopy & Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Spectroscopy & Structure describes a specific idea. IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1. 1H NMR: chemical shift indicates electronic environment; splitting follows n+1 rule. Key Insight: Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure.'
      }
    }
  ]
}
