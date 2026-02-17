export const oChemEASPart3Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect3-intro',
      type: 'text' as const,
      content: `
# Friedel-Crafts Reactions

**Part 3 of 7 — Friedel-Crafts Reactions**

### 1. Friedel-Crafts alkylation

Ar-H + RCl/AlCl₃ → Ar-R

### 2. Friedel-Crafts acylation

Ar-H + RCOCl/AlCl₃ → Ar-COR

### 3. Acylation avoids rearrangement and polyalkylation

Acylation avoids rearrangement and polyalkylation

### 4. Deactivated rings don't undergo Friedel-Crafts reactions

Deactivated rings don't undergo Friedel-Crafts reactions
      `
    },
    {
      id: 'elect3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Friedel-Crafts alkylation?',
            options: [
              'Ar-H + RCOCl/AlCl₃ → Ar-COR',
              'Acylation avoids rearrangement and polyalkylation',
              'Ar-H + RCl/AlCl₃ → Ar-R',
              'Deactivated rings don\'t undergo Friedel-Crafts reactions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Friedel-Crafts alkylation: Ar-H + RCl/AlCl₃ → Ar-R. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Acylation avoids rearrangement and…?',
            options: [
              'Ar-H + RCOCl/AlCl₃ → Ar-COR',
              'Acylation avoids rearrangement and polyalkylation',
              'Deactivated rings don\'t undergo Friedel-Crafts reactions',
              'Ar-H + RCl/AlCl₃ → Ar-R'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Acylation avoids rearrangement and polyalkylation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'elect3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Friedel-Crafts alkylation**: Ar-H + RCl/AlCl₃ → Ar-R
- **Friedel-Crafts acylation**: Ar-H + RCOCl/AlCl₃ → Ar-COR
- **Acylation avoids rearrangement and polyalkylation**
- **Deactivated rings don't undergo Friedel-Crafts reactions**
      `
    },
    {
      id: 'elect3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to friedel-crafts reactions?',
            options: [
              'Deactivated rings don\'t undergo Friedel-Crafts reactions',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Deactivated rings don\'t undergo Friedel-Crafts reactions'
          }
        ]
      }
    },
    {
      id: 'elect3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Friedel-Crafts alkylation',
            options: ['Deactivated rings don\'t undergo Friedel-Crafts reactions', 'Acylation avoids rearrangement and polyalkylation', 'Ar-H + RCOCl/AlCl₃ → Ar-COR', 'Ar-H + RCl/AlCl₃ → Ar-R']
          },
          {
            label: 'Friedel-Crafts acylation',
            options: ['Ar-H + RCOCl/AlCl₃ → Ar-COR', 'Ar-H + RCl/AlCl₃ → Ar-R', 'Acylation avoids rearrangement and polyalkylation', 'Deactivated rings don\'t undergo Friedel-Crafts reactions']
          }
        ],
        correctAnswers: ['Ar-H + RCl/AlCl₃ → Ar-R', 'Ar-H + RCOCl/AlCl₃ → Ar-COR'],
        hint1: 'Think about what each concept specifically describes in Friedel-Crafts Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Friedel-Crafts Reactions describes a specific idea. Friedel-Crafts alkylation: Ar-H + RCl/AlCl₃ → Ar-R. Friedel-Crafts acylation: Ar-H + RCOCl/AlCl₃ → Ar-COR.'
      }
    }
  ]
}
