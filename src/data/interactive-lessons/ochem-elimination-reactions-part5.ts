export const oChemElimPart5Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi5-intro',
      type: 'text' as const,
      content: `
# Substitution vs Elimination

**Part 5 of 7 — Substitution vs Elimination**

### 1. Strong base + primary substrate → SN2 or E2

Strong base + primary substrate → SN2 or E2

### 2. Strong bulky base → E2 favored over SN2

Strong bulky base → E2 favored over SN2

### 3. Weak base + tertiary substrate → SN1 or E1

Weak base + tertiary substrate → SN1 or E1

### 4. Temperature increase favors elimination over substitution

Temperature increase favors elimination over substitution
      `
    },
    {
      id: 'elimi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of substitution vs elimination?',
            options: [
              'Strong base + primary substrate → SN2 or E2',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Strong base + primary substrate → SN2 or E2'
          },
          {
            question: 'In the context of substitution vs elimination, which is accurate?',
            options: [
              'Weak base + tertiary substrate → SN1 or E1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Weak base + tertiary substrate → SN1 or E1'
          }
        ]
      }
    },
    {
      id: 'elimi5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Strong base + primary substrate → SN2 or E2**
- **Strong bulky base → E2 favored over SN2**
- **Weak base + tertiary substrate → SN1 or E1**
- **Temperature increase favors elimination over substitution**
      `
    },
    {
      id: 'elimi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to substitution vs elimination?',
            options: [
              'Temperature increase favors elimination over substitution',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Temperature increase favors elimination over substitution'
          }
        ]
      }
    },
    {
      id: 'elimi5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Strong base + primary substrate → SN2 or E2',
            options: ['Strong base + primary substrate → SN2 or E2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Strong bulky base → E2 favored over SN2',
            options: ['Strong bulky base → E2 favored over SN2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Weak base + tertiary substrate → SN1 or E1',
            options: ['Weak base + tertiary substrate → SN1 or E1', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Strong base + primary substrate → SN2 or E2', 'Strong bulky base → E2 favored over SN2', 'Weak base + tertiary substrate → SN1 or E1'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Substitution vs Elimination.'
      }
    }
  ]
}
