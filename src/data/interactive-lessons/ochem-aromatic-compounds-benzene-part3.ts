export const oChemAromaticPart3Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma3-intro',
      type: 'text' as const,
      content: `
# Nomenclature of Aromatics

**Part 3 of 7 — Nomenclature of Aromatics**

### 1. Monosubstituted

toluene (methylbenzene), aniline (aminobenzene)

### 2. Disubstituted

ortho (1,2), meta (1,3), para (1,4)

### 3. Common names

phenol, anisole, benzaldehyde, benzoic acid

### 4. Phenyl group

C₆H₅- ; Benzyl group: C₆H₅CH₂-
      `
    },
    {
      id: 'aroma3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nomenclature of aromatics?',
            options: [
              'Monosubstituted',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Monosubstituted: toluene (methylbenzene), aniline (aminobenzene)'
          },
          {
            question: 'In the context of nomenclature of aromatics, which is accurate?',
            options: [
              'phenol, anisole, benzaldehyde, benzoic acid',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Common names: phenol, anisole, benzaldehyde, benzoic acid'
          }
        ]
      }
    },
    {
      id: 'aroma3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Monosubstituted**: toluene (methylbenzene), aniline (aminobenzene)
- **Disubstituted**: ortho (1,2), meta (1,3), para (1,4)
- **Common names**: phenol, anisole, benzaldehyde, benzoic acid
- **Phenyl group**: C₆H₅- ; Benzyl group: C₆H₅CH₂-
      `
    },
    {
      id: 'aroma3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nomenclature of aromatics?',
            options: [
              'C₆H₅- ; Benzyl group: C₆H₅CH₂-',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Phenyl group: C₆H₅- ; Benzyl group: C₆H₅CH₂-'
          }
        ]
      }
    },
    {
      id: 'aroma3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monosubstituted',
            options: ['toluene (methylbenzene), aniline (aminobenzene)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Disubstituted',
            options: ['ortho (1,2), meta (1,3), para (1,4)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Common names',
            options: ['phenol, anisole, benzaldehyde, benzoic acid', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['toluene (methylbenzene), aniline (aminobenzene)', 'ortho (1,2), meta (1,3), para (1,4)', 'phenol, anisole, benzaldehyde, benzoic acid'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nomenclature of Aromatics.'
      }
    }
  ]
}
