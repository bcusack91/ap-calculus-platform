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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of terpenes & steroids?',
            options: [
              'Terpenes',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Terpenes: built from isoprene units (C₅H₈)'
          },
          {
            question: 'In the context of terpenes & steroids, which is accurate?',
            options: [
              'four fused rings (A, B, C, D)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Steroids: four fused rings (A, B, C, D)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terpenes',
            options: ['built from isoprene units (C₅H₈)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)',
            options: ['Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpen', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Steroids',
            options: ['four fused rings (A, B, C, D)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['built from isoprene units (C₅H₈)', 'Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpen', 'four fused rings (A, B, C, D)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Terpenes & Steroids.'
      }
    }
  ]
}
