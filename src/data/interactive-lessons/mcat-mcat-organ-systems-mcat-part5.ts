export const mcatOrganSysPart5Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Endocrine System

**Part 5 of 7 — Endocrine System**

Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin.

Thyroid: T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in endocrine system?',
            options: [
              'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.

**MCAT Tip:** Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to endocrine system?',
            options: [
              'Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Endocrine System:',
            options: ['Hypothalamus controls pituitary; anterior pituitary releases', 'Thyroid: T3/T4 increase metabolic rate; Parathyroid: PTH inc', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Adrenal cortex: cortisol (stress), aldosterone (Na+ retentio', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Hypothalamus controls pituitary; anterior pituitary releases', 'Adrenal cortex: cortisol (stress), aldosterone (Na+ retentio'],
        hint1: 'Think about endocrine system',
        hint2: 'Consider the MCAT application',
        explanation: 'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin. Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.'
      }
    }
  ]
}
