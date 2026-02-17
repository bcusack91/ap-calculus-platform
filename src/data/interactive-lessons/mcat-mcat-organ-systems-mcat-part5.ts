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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thyroid',
            options: ['Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.', 'Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).', 'T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+.', 'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin.']
          },
          {
            label: 'Key Insight',
            options: ['Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).', 'Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.', 'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin.', 'T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+.']
          },
          {
            label: 'MCAT Tip',
            options: ['Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.', 'T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+.', 'Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin.', 'Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).']
          }
        ],
        correctAnswers: ['T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+.', 'Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine.', 'Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).'],
        hint1: 'Think about what each concept specifically describes in Endocrine System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Endocrine System describes a specific idea. Thyroid: T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+. Key Insight: Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine. MCAT Tip: Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown).'
      }
    }
  ]
}
