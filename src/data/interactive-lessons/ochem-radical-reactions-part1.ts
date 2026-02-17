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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Radicals" refer to in this topic?',
            options: [
              'species with unpaired electrons',
              'Radicals are highly reactive and short-lived',
              'initiation, propagation, termination',
              'bond breaks evenly → two radicals'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Radicals: species with unpaired electrons. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Radical Reactions, which explains Radical reactions have three stages?',
            options: [
              'initiation, propagation, termination',
              'Radicals are highly reactive and short-lived',
              'bond breaks evenly → two radicals',
              'species with unpaired electrons'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Radical reactions have three stages: initiation, propagation, termination. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radicals',
            options: ['bond breaks evenly → two radicals', 'species with unpaired electrons', 'Radicals are highly reactive and short-lived', 'initiation, propagation, termination']
          },
          {
            label: 'Homolytic cleavage',
            options: ['Radicals are highly reactive and short-lived', 'initiation, propagation, termination', 'species with unpaired electrons', 'bond breaks evenly → two radicals']
          },
          {
            label: 'Radical reactions have three stages',
            options: ['Radicals are highly reactive and short-lived', 'bond breaks evenly → two radicals', 'species with unpaired electrons', 'initiation, propagation, termination']
          }
        ],
        correctAnswers: ['species with unpaired electrons', 'bond breaks evenly → two radicals', 'initiation, propagation, termination'],
        hint1: 'Think about what each concept specifically describes in ️ Radical Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Radical Reactions describes a specific idea. Radicals: species with unpaired electrons. Homolytic cleavage: bond breaks evenly → two radicals. Radical reactions have three stages: initiation, propagation, termination.'
      }
    }
  ]
}
