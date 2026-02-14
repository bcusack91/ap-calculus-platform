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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of friedel-crafts reactions?',
            options: [
              'Friedel-Crafts alkylation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Friedel-Crafts alkylation: Ar-H + RCl/AlCl₃ → Ar-R'
          },
          {
            question: 'In the context of friedel-crafts reactions, which is accurate?',
            options: [
              'Acylation avoids rearrangement and polyalkylation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acylation avoids rearrangement and polyalkylation'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Friedel-Crafts alkylation',
            options: ['Ar-H + RCl/AlCl₃ → Ar-R', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Friedel-Crafts acylation',
            options: ['Ar-H + RCOCl/AlCl₃ → Ar-COR', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acylation avoids rearrangement and polyalkylation',
            options: ['Acylation avoids rearrangement and polyalkylation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Ar-H + RCl/AlCl₃ → Ar-R', 'Ar-H + RCOCl/AlCl₃ → Ar-COR', 'Acylation avoids rearrangement and polyalkylation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Friedel-Crafts Reactions.'
      }
    }
  ]
}
