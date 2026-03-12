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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Strong base + primary substrate → SN2…" refer to in this topic?',
            options: [
              'Temperature increase favors elimination over substitution',
              'Strong bulky base → E2 favored over SN2',
              'Strong base + primary substrate → SN2 or E2',
              'Weak base + tertiary substrate → SN1 or E1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Strong base + primary substrate → SN2 or E2. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Weak base + tertiary substrate → SN1 or…:',
            options: [
              'Temperature increase favors elimination over substitution',
              'Weak base + tertiary substrate → SN1 or E1',
              'Strong base + primary substrate → SN2 or E2',
              'Strong bulky base → E2 favored over SN2'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Weak base + tertiary substrate → SN1 or E1. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Strong base + primary substrate → SN2…',
            options: ['Weak base + tertiary substrate → SN1 or E1', 'Strong bulky base → E2 favored over SN2', 'Strong base + primary substrate → SN2 or E2', 'Temperature increase favors elimination over substitution']
          },
          {
            label: 'Strong bulky base → E2 favored over SN2',
            options: ['Temperature increase favors elimination over substitution', 'Strong bulky base → E2 favored over SN2', 'Weak base + tertiary substrate → SN1 or E1', 'Strong base + primary substrate → SN2 or E2']
          },
          {
            label: 'Weak base + tertiary substrate → SN1 or…',
            options: ['Strong bulky base → E2 favored over SN2', 'Weak base + tertiary substrate → SN1 or E1', 'Temperature increase favors elimination over substitution', 'Strong base + primary substrate → SN2 or E2']
          }
        ],
        correctAnswers: ['Strong base + primary substrate → SN2 or E2', 'Strong bulky base → E2 favored over SN2', 'Weak base + tertiary substrate → SN1 or E1'],
        hint1: 'Think about what each concept specifically describes in Substitution vs Elimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Substitution vs Elimination describes a specific idea. Strong base + primary substrate → SN2 or E2. Strong bulky base → E2 favored over SN2. Weak base + tertiary substrate → SN1 or E1.'
      }
    }
  ]
}
