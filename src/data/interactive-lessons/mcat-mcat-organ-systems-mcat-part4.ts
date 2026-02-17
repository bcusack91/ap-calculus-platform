export const mcatOrganSysPart4Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Digestive System

**Part 4 of 7 — Digestive System**

Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile).

Stomach: HCl activates pepsinogen to pepsin (protein digestion), pH ~2.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in digestive system?',
            options: [
              'Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile)'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats.

**MCAT Tip:** Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to digestive system?',
            options: [
              'Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stomach',
            options: ['HCl activates pepsinogen to pepsin (protein digestion), pH ~2.', 'Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.', 'Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats.', 'Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile).']
          },
          {
            label: 'Key Insight',
            options: ['Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats.', 'Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.', 'HCl activates pepsinogen to pepsin (protein digestion), pH ~2.', 'Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile).']
          },
          {
            label: 'MCAT Tip',
            options: ['Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.', 'Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile).', 'Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats.', 'HCl activates pepsinogen to pepsin (protein digestion), pH ~2.']
          }
        ],
        correctAnswers: ['HCl activates pepsinogen to pepsin (protein digestion), pH ~2.', 'Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats.', 'Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.'],
        hint1: 'Think about what each concept specifically describes in Digestive System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Digestive System describes a specific idea. Stomach: HCl activates pepsinogen to pepsin (protein digestion), pH ~2. Key Insight: Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats. MCAT Tip: Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine.'
      }
    }
  ]
}
