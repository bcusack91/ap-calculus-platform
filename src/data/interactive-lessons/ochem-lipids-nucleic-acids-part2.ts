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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Phospholipids?',
            options: [
              'phospholipid bilayer + proteins + cholesterol',
              'hydrophilic head + hydrophobic tails',
              'glycerol + 2 fatty acids + phosphate head group',
              'Form bilayers spontaneously in water'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phospholipids: glycerol + 2 fatty acids + phosphate head group. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Phospholipids & Membranes, which explains Form bilayers spontaneously in water?',
            options: [
              'phospholipid bilayer + proteins + cholesterol',
              'glycerol + 2 fatty acids + phosphate head group',
              'Form bilayers spontaneously in water',
              'hydrophilic head + hydrophobic tails'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Form bilayers spontaneously in water. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phospholipids',
            options: ['phospholipid bilayer + proteins + cholesterol', 'glycerol + 2 fatty acids + phosphate head group', 'Form bilayers spontaneously in water', 'hydrophilic head + hydrophobic tails']
          },
          {
            label: 'Amphipathic',
            options: ['phospholipid bilayer + proteins + cholesterol', 'glycerol + 2 fatty acids + phosphate head group', 'Form bilayers spontaneously in water', 'hydrophilic head + hydrophobic tails']
          },
          {
            label: 'Cell membrane',
            options: ['phospholipid bilayer + proteins + cholesterol', 'glycerol + 2 fatty acids + phosphate head group', 'Form bilayers spontaneously in water', 'hydrophilic head + hydrophobic tails']
          }
        ],
        correctAnswers: ['glycerol + 2 fatty acids + phosphate head group', 'hydrophilic head + hydrophobic tails', 'phospholipid bilayer + proteins + cholesterol'],
        hint1: 'Think about what each concept specifically describes in Phospholipids & Membranes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Phospholipids & Membranes describes a specific idea. Phospholipids: glycerol + 2 fatty acids + phosphate head group. Amphipathic: hydrophilic head + hydrophobic tails. Cell membrane: phospholipid bilayer + proteins + cholesterol.'
      }
    }
  ]
}
