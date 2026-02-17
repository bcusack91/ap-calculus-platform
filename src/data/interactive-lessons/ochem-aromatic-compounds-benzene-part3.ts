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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Monosubstituted" refer to in this topic?',
            options: [
              'phenol, anisole, benzaldehyde, benzoic acid',
              'toluene (methylbenzene), aniline (aminobenzene)',
              'C₆H₅- ; Benzyl group: C₆H₅CH₂-',
              'ortho (1,2), meta (1,3), para (1,4)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Monosubstituted: toluene (methylbenzene), aniline (aminobenzene). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Common names?',
            options: [
              'ortho (1,2), meta (1,3), para (1,4)',
              'C₆H₅- ; Benzyl group: C₆H₅CH₂-',
              'phenol, anisole, benzaldehyde, benzoic acid',
              'toluene (methylbenzene), aniline (aminobenzene)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Common names: phenol, anisole, benzaldehyde, benzoic acid. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monosubstituted',
            options: ['C₆H₅- ; Benzyl group: C₆H₅CH₂-', 'ortho (1,2), meta (1,3), para (1,4)', 'toluene (methylbenzene), aniline (aminobenzene)', 'phenol, anisole, benzaldehyde, benzoic acid']
          },
          {
            label: 'Disubstituted',
            options: ['C₆H₅- ; Benzyl group: C₆H₅CH₂-', 'phenol, anisole, benzaldehyde, benzoic acid', 'toluene (methylbenzene), aniline (aminobenzene)', 'ortho (1,2), meta (1,3), para (1,4)']
          },
          {
            label: 'Common names',
            options: ['toluene (methylbenzene), aniline (aminobenzene)', 'C₆H₅- ; Benzyl group: C₆H₅CH₂-', 'phenol, anisole, benzaldehyde, benzoic acid', 'ortho (1,2), meta (1,3), para (1,4)']
          }
        ],
        correctAnswers: ['toluene (methylbenzene), aniline (aminobenzene)', 'ortho (1,2), meta (1,3), para (1,4)', 'phenol, anisole, benzaldehyde, benzoic acid'],
        hint1: 'Think about what each concept specifically describes in Nomenclature of Aromatics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nomenclature of Aromatics describes a specific idea. Monosubstituted: toluene (methylbenzene), aniline (aminobenzene). Disubstituted: ortho (1,2), meta (1,3), para (1,4). Common names: phenol, anisole, benzaldehyde, benzoic acid.'
      }
    }
  ]
}
