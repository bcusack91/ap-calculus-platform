export const actPreAlgebraPart4Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p4-intro',
      type: 'text' as const,
      content: `
# Percentages

**Part 4 of 7 — Percentages**

Percent = part/whole × 100.

Percent of a number: (percent/100) × number.
      `
    },
    {
      id: 'act-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Percent = part/whole × 100.?',
            options: [
              'Percent = part/whole × 100.',
              'Discount then tax: calculate discount first, then apply tax to the reduced price.',
              '(percent/100) × number.',
              'Percent increase = (new - old)/old × 100.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Percent = part/whole × 100. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '(percent/100) × number.',
              'Percent = part/whole × 100.',
              'Discount then tax: calculate discount first, then apply tax to the reduced price.',
              'Percent increase = (new - old)/old × 100.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Percent increase = (new - old)/old × 100. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Percent increase = (new - old)/old × 100.

**ACT Tip:** Discount then tax: calculate discount first, then apply tax to the reduced price.
      `
    },
    {
      id: 'act-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Percentages, which correctly describes ACT Tip?',
            options: [
              '(percent/100) × number.',
              'Discount then tax: calculate discount first, then apply tax to the reduced price.',
              'Percent increase = (new - old)/old × 100.',
              'Percent = part/whole × 100.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Discount then tax: calculate discount first, then apply tax to the reduced price. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Percent of a number',
            options: ['Percent increase = (new - old)/old × 100.', '(percent/100) × number.', 'Percent = part/whole × 100.', 'Discount then tax: calculate discount first, then apply tax to the reduced price.']
          },
          {
            label: 'Key Insight',
            options: ['(percent/100) × number.', 'Percent = part/whole × 100.', 'Discount then tax: calculate discount first, then apply tax to the reduced price.', 'Percent increase = (new - old)/old × 100.']
          },
          {
            label: 'ACT Tip',
            options: ['Discount then tax: calculate discount first, then apply tax to the reduced price.', 'Percent increase = (new - old)/old × 100.', '(percent/100) × number.', 'Percent = part/whole × 100.']
          }
        ],
        correctAnswers: ['(percent/100) × number.', 'Percent increase = (new - old)/old × 100.', 'Discount then tax: calculate discount first, then apply tax to the reduced price.'],
        hint1: 'Think about what each concept specifically describes in Percentages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Percentages describes a specific idea. Percent of a number: (percent/100) × number. Key Insight: Percent increase = (new - old)/old × 100. ACT Tip: Discount then tax: calculate discount first, then apply tax to the reduced price.'
      }
    }
  ]
}
