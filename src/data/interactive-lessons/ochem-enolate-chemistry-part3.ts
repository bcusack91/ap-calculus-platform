export const oChemEnolatePart3Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola3-intro',
      type: 'text' as const,
      content: `
# Aldol Reaction

**Part 3 of 7 — Aldol Reaction**

### 1. Aldol reaction

enolate + carbonyl → β-hydroxy carbonyl

### 2. Aldol condensation

heat eliminates water → α,β-unsaturated carbonyl

### 3. Crossed aldol

two different carbonyls (use LDA for control)

### 4. Intramolecular aldol

forms 5- or 6-membered rings
      `
    },
    {
      id: 'enola3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Aldol reaction?',
            options: [
              'two different carbonyls (use LDA for control)',
              'heat eliminates water → α,β-unsaturated carbonyl',
              'forms 5- or 6-membered rings',
              'enolate + carbonyl → β-hydroxy carbonyl'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Aldol reaction: enolate + carbonyl → β-hydroxy carbonyl. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Crossed aldol:',
            options: [
              'heat eliminates water → α,β-unsaturated carbonyl',
              'enolate + carbonyl → β-hydroxy carbonyl',
              'forms 5- or 6-membered rings',
              'two different carbonyls (use LDA for control)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Crossed aldol: two different carbonyls (use LDA for control). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Aldol reaction**: enolate + carbonyl → β-hydroxy carbonyl
- **Aldol condensation**: heat eliminates water → α,β-unsaturated carbonyl
- **Crossed aldol**: two different carbonyls (use LDA for control)
- **Intramolecular aldol**: forms 5- or 6-membered rings
      `
    },
    {
      id: 'enola3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to aldol reaction?',
            options: [
              'forms 5- or 6-membered rings',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Intramolecular aldol: forms 5- or 6-membered rings'
          }
        ]
      }
    },
    {
      id: 'enola3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aldol reaction',
            options: ['two different carbonyls (use LDA for control)', 'enolate + carbonyl → β-hydroxy carbonyl', 'heat eliminates water → α,β-unsaturated carbonyl', 'forms 5- or 6-membered rings']
          },
          {
            label: 'Aldol condensation',
            options: ['forms 5- or 6-membered rings', 'enolate + carbonyl → β-hydroxy carbonyl', 'two different carbonyls (use LDA for control)', 'heat eliminates water → α,β-unsaturated carbonyl']
          },
          {
            label: 'Crossed aldol',
            options: ['heat eliminates water → α,β-unsaturated carbonyl', 'two different carbonyls (use LDA for control)', 'enolate + carbonyl → β-hydroxy carbonyl', 'forms 5- or 6-membered rings']
          }
        ],
        correctAnswers: ['enolate + carbonyl → β-hydroxy carbonyl', 'heat eliminates water → α,β-unsaturated carbonyl', 'two different carbonyls (use LDA for control)'],
        hint1: 'Think about what each concept specifically describes in Aldol Reaction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Aldol Reaction describes a specific idea. Aldol reaction: enolate + carbonyl → β-hydroxy carbonyl. Aldol condensation: heat eliminates water → α,β-unsaturated carbonyl. Crossed aldol: two different carbonyls (use LDA for control).'
      }
    }
  ]
}
