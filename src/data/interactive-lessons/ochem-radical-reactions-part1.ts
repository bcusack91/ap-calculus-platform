export const oChemRadicalsPart1Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Radical Reactions

**Part 1 of 7 — Introduction to Radicals**

### 1. Radicals

species with unpaired electrons

### 2. Homolytic cleavage

bond breaks evenly → two radicals

### 3. Radical reactions have three stages

initiation, propagation, termination

### 4. Radicals are highly reactive and short-lived

Radicals are highly reactive and short-lived
      `
    },
    {
      id: 'radic1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to radicals?',
            options: [
              'Radicals',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Radicals: species with unpaired electrons'
          },
          {
            question: 'In the context of introduction to radicals, which is accurate?',
            options: [
              'initiation, propagation, termination',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Radical reactions have three stages: initiation, propagation, termination'
          }
        ]
      }
    },
    {
      id: 'radic1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Radicals**: species with unpaired electrons
- **Homolytic cleavage**: bond breaks evenly → two radicals
- **Radical reactions have three stages**: initiation, propagation, termination
- **Radicals are highly reactive and short-lived**
      `
    },
    {
      id: 'radic1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to radicals?',
            options: [
              'Radicals are highly reactive and short-lived',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Radicals are highly reactive and short-lived'
          }
        ]
      }
    },
    {
      id: 'radic1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radicals',
            options: ['species with unpaired electrons', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Homolytic cleavage',
            options: ['bond breaks evenly → two radicals', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Radical reactions have three stages',
            options: ['initiation, propagation, termination', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['species with unpaired electrons', 'bond breaks evenly → two radicals', 'initiation, propagation, termination'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Radicals.'
      }
    }
  ]
}
