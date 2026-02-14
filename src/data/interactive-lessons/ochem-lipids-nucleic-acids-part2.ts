export const oChemLipidsPart2Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid2-intro',
      type: 'text' as const,
      content: `
# Phospholipids & Membranes

**Part 2 of 7 — Phospholipids & Membranes**

### 1. Phospholipids

glycerol + 2 fatty acids + phosphate head group

### 2. Amphipathic

hydrophilic head + hydrophobic tails

### 3. Form bilayers spontaneously in water

Form bilayers spontaneously in water

### 4. Cell membrane

phospholipid bilayer + proteins + cholesterol
      `
    },
    {
      id: 'lipid2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of phospholipids & membranes?',
            options: [
              'Phospholipids',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Phospholipids: glycerol + 2 fatty acids + phosphate head group'
          },
          {
            question: 'In the context of phospholipids & membranes, which is accurate?',
            options: [
              'Form bilayers spontaneously in water',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Form bilayers spontaneously in water'
          }
        ]
      }
    },
    {
      id: 'lipid2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Phospholipids**: glycerol + 2 fatty acids + phosphate head group
- **Amphipathic**: hydrophilic head + hydrophobic tails
- **Form bilayers spontaneously in water**
- **Cell membrane**: phospholipid bilayer + proteins + cholesterol
      `
    },
    {
      id: 'lipid2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to phospholipids & membranes?',
            options: [
              'phospholipid bilayer + proteins + cholesterol',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cell membrane: phospholipid bilayer + proteins + cholesterol'
          }
        ]
      }
    },
    {
      id: 'lipid2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phospholipids',
            options: ['glycerol + 2 fatty acids + phosphate head group', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Amphipathic',
            options: ['hydrophilic head + hydrophobic tails', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Form bilayers spontaneously in water',
            options: ['Form bilayers spontaneously in water', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['glycerol + 2 fatty acids + phosphate head group', 'hydrophilic head + hydrophobic tails', 'Form bilayers spontaneously in water'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Phospholipids & Membranes.'
      }
    }
  ]
}
