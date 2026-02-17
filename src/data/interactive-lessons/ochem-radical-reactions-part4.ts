export const oChemRadicalsPart4Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic4-intro',
      type: 'text' as const,
      content: `
# Radical Addition to Alkenes

**Part 4 of 7 — Radical Addition to Alkenes**

### 1. Anti-Markovnikov addition of HBr with peroxides

Anti-Markovnikov addition of HBr with peroxides

### 2. Radical adds to less substituted carbon (more stable radical at more substituted)

Radical adds to less substituted carbon (more stable radical at more substituted)

### 3. Only works with HBr (not HCl or HI)

Only works with HBr (not HCl or HI)

### 4. Polymerization

radical chain growth of alkenes
      `
    },
    {
      id: 'radic4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Anti-Markovnikov addition of HBr with…" refer to in this topic?',
            options: [
              'Only works with HBr (not HCl or HI)',
              'Radical adds to less substituted carbon (more stable radical at more substituted)',
              'radical chain growth of alkenes',
              'Anti-Markovnikov addition of HBr with peroxides'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Anti-Markovnikov addition of HBr with peroxides. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Radical Addition to Alkenes, which explains Only works with HBr (not HCl or HI)?',
            options: [
              'radical chain growth of alkenes',
              'Radical adds to less substituted carbon (more stable radical at more substituted)',
              'Only works with HBr (not HCl or HI)',
              'Anti-Markovnikov addition of HBr with peroxides'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Only works with HBr (not HCl or HI). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'radic4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Anti-Markovnikov addition of HBr with peroxides**
- **Radical adds to less substituted carbon (more stable radical at more substituted)**
- **Only works with HBr (not HCl or HI)**
- **Polymerization**: radical chain growth of alkenes
      `
    },
    {
      id: 'radic4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to radical addition to alkenes?',
            options: [
              'radical chain growth of alkenes',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Polymerization: radical chain growth of alkenes'
          }
        ]
      }
    },
    {
      id: 'radic4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Anti-Markovnikov addition of HBr with…',
            options: ['Anti-Markovnikov addition of HBr with peroxides', 'Radical adds to less substituted carbon (more stable radical at more substituted)', 'Only works with HBr (not HCl or HI)', 'radical chain growth of alkenes']
          },
          {
            label: 'Radical adds to less substituted carbon…',
            options: ['radical chain growth of alkenes', 'Anti-Markovnikov addition of HBr with peroxides', 'Radical adds to less substituted carbon (more stable radical at more substituted)', 'Only works with HBr (not HCl or HI)']
          },
          {
            label: 'Only works with HBr (not HCl or HI)',
            options: ['Only works with HBr (not HCl or HI)', 'Radical adds to less substituted carbon (more stable radical at more substituted)', 'Anti-Markovnikov addition of HBr with peroxides', 'radical chain growth of alkenes']
          }
        ],
        correctAnswers: ['Anti-Markovnikov addition of HBr with peroxides', 'Radical adds to less substituted carbon (more stable radical at more substituted)', 'Only works with HBr (not HCl or HI)'],
        hint1: 'Think about what each concept specifically describes in Radical Addition to Alkenes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radical Addition to Alkenes describes a specific idea. Anti-Markovnikov addition of HBr with peroxides. Radical adds to less substituted carbon (more stable radical at more substituted). Only works with HBr (not HCl or HI).'
      }
    }
  ]
}
