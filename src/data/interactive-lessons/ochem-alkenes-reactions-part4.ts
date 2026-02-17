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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Hydroboration-oxidation?',
            options: [
              'H and OH add to same face',
              'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol',
              'BH₃ adds B to less substituted carbon',
              'anti-Markovnikov, syn addition'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Hydroboration-oxidation: anti-Markovnikov, syn addition. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Hydroboration-Oxidation, which explains Oxidation with H₂O₂/NaOH gives…?',
            options: [
              'anti-Markovnikov, syn addition',
              'H and OH add to same face',
              'BH₃ adds B to less substituted carbon',
              'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hydroboration-oxidation',
            options: ['anti-Markovnikov, syn addition', 'BH₃ adds B to less substituted carbon', 'H and OH add to same face', 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol']
          },
          {
            label: 'Syn addition',
            options: ['BH₃ adds B to less substituted carbon', 'H and OH add to same face', 'anti-Markovnikov, syn addition', 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol']
          }
        ],
        correctAnswers: ['anti-Markovnikov, syn addition', 'H and OH add to same face'],
        hint1: 'Think about what each concept specifically describes in Hydroboration-Oxidation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hydroboration-Oxidation describes a specific idea. Hydroboration-oxidation: anti-Markovnikov, syn addition. Syn addition: H and OH add to same face.'
      }
    }
  ]
}
