export const mcatMolBioPart5Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Mutations & Repair

**Part 5 of 7 — Mutations & Repair**

Point mutations: silent, missense, nonsense, frameshift (insertion/deletion).

Missense: different amino acid; Nonsense: premature stop codon; Silent: same amino acid.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in mutations & repair?',
            options: [
              'Point mutations: silent, missense, nonsense, frameshift (insertion/deletion)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Point mutations: silent, missense, nonsense, frameshift (insertion/deletion)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** DNA repair: mismatch repair, base excision repair, nucleotide excision repair.

**MCAT Tip:** Mutagens: UV light (thymine dimers), chemicals (alkylating agents), radiation (double-strand breaks).
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to mutations & repair?',
            options: [
              'DNA repair: mismatch repair, base excision repair, nucleotide excision repair',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'DNA repair: mismatch repair, base excision repair, nucleotide excision repair'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Mutations & Repair:',
            options: ['Point mutations: silent, missense, nonsense, frameshift (ins', 'Missense: different amino acid; Nonsense: premature stop cod', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['DNA repair: mismatch repair, base excision repair, nucleotid', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Point mutations: silent, missense, nonsense, frameshift (ins', 'DNA repair: mismatch repair, base excision repair, nucleotid'],
        hint1: 'Think about mutations & repair',
        hint2: 'Consider the MCAT application',
        explanation: 'Point mutations: silent, missense, nonsense, frameshift (insertion/deletion). DNA repair: mismatch repair, base excision repair, nucleotide excision repair.'
      }
    }
  ]
}
