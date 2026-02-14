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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of radical addition to alkenes?',
            options: [
              'Anti-Markovnikov addition of HBr with peroxides',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Anti-Markovnikov addition of HBr with peroxides'
          },
          {
            question: 'In the context of radical addition to alkenes, which is accurate?',
            options: [
              'Only works with HBr (not HCl or HI)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Only works with HBr (not HCl or HI)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Anti-Markovnikov addition of HBr with peroxides',
            options: ['Anti-Markovnikov addition of HBr with peroxides', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Radical adds to less substituted carbon (more stable radical at more substituted)',
            options: ['Radical adds to less substituted carbon (more stab', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Only works with HBr (not HCl or HI)',
            options: ['Only works with HBr (not HCl or HI)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Anti-Markovnikov addition of HBr with peroxides', 'Radical adds to less substituted carbon (more stab', 'Only works with HBr (not HCl or HI)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Radical Addition to Alkenes.'
      }
    }
  ]
}
