export const oChemLipidsPart3Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid3-intro',
      type: 'text' as const,
      content: `
# Terpenes & Steroids

**Part 3 of 7 — Terpenes & Steroids**

### 1. Terpenes

built from isoprene units (C₅H₈)

### 2. Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)

Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)

### 3. Steroids

four fused rings (A, B, C, D)

### 4. Cholesterol → steroid hormones (testosterone, estradiol, cortisol)

Cholesterol → steroid hormones (testosterone, estradiol, cortisol)
      `
    },
    {
      id: 'lipid3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Terpenes?',
            options: [
              'built from isoprene units (C₅H₈)',
              'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)',
              'Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)',
              'four fused rings (A, B, C, D)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Terpenes: built from isoprene units (C₅H₈). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Terpenes & Steroids, which explains Steroids?',
            options: [
              'built from isoprene units (C₅H₈)',
              'four fused rings (A, B, C, D)',
              'Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)',
              'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Steroids: four fused rings (A, B, C, D). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lipid3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Terpenes**: built from isoprene units (C₅H₈)
- **Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)**
- **Steroids**: four fused rings (A, B, C, D)
- **Cholesterol → steroid hormones (testosterone, estradiol, cortisol)**
      `
    },
    {
      id: 'lipid3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to terpenes & steroids?',
            options: [
              'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)'
          }
        ]
      }
    },
    {
      id: 'lipid3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terpenes',
            options: ['Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)', 'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)', 'built from isoprene units (C₅H₈)', 'four fused rings (A, B, C, D)']
          },
          {
            label: 'Steroids',
            options: ['Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)', 'four fused rings (A, B, C, D)', 'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)', 'built from isoprene units (C₅H₈)']
          }
        ],
        correctAnswers: ['built from isoprene units (C₅H₈)', 'four fused rings (A, B, C, D)'],
        hint1: 'Think about what each concept specifically describes in Terpenes & Steroids.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Terpenes & Steroids describes a specific idea. Terpenes: built from isoprene units (C₅H₈). Steroids: four fused rings (A, B, C, D).'
      }
    }
  ]
}
