export const oChemAlkenesPart4Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken4-intro',
      type: 'text' as const,
      content: `
# Hydroboration-Oxidation

**Part 4 of 7 — Hydroboration-Oxidation**

### 1. Hydroboration-oxidation

anti-Markovnikov, syn addition

### 2. BH₃ adds B to less substituted carbon

BH₃ adds B to less substituted carbon

### 3. Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol

Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol

### 4. Syn addition

H and OH add to same face
      `
    },
    {
      id: 'alken4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of hydroboration-oxidation?',
            options: [
              'Hydroboration-oxidation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Hydroboration-oxidation: anti-Markovnikov, syn addition'
          },
          {
            question: 'In the context of hydroboration-oxidation, which is accurate?',
            options: [
              'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol'
          }
        ]
      }
    },
    {
      id: 'alken4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Hydroboration-oxidation**: anti-Markovnikov, syn addition
- **BH₃ adds B to less substituted carbon**
- **Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol**
- **Syn addition**: H and OH add to same face
      `
    },
    {
      id: 'alken4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to hydroboration-oxidation?',
            options: [
              'H and OH add to same face',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Syn addition: H and OH add to same face'
          }
        ]
      }
    },
    {
      id: 'alken4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hydroboration-oxidation',
            options: ['anti-Markovnikov, syn addition', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'BH₃ adds B to less substituted carbon',
            options: ['BH₃ adds B to less substituted carbon', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol',
            options: ['Oxidation with H₂O₂/NaOH gives anti-Markovnikov al', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['anti-Markovnikov, syn addition', 'BH₃ adds B to less substituted carbon', 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov al'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Hydroboration-Oxidation.'
      }
    }
  ]
}
