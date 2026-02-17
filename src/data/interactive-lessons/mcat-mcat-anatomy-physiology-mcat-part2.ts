export const mcatAnatPhysPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Reproductive System

**Part 2 of 7 — Reproductive System**

Male: testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens.

Female: ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in reproductive system?',
            options: [
              'Male: testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Male: testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).

**MCAT Tip:** Fertilization: sperm capacitation, acrosome reaction, cortical reaction prevents polyspermy.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to reproductive system?',
            options: [
              'Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Male',
            options: ['Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).', 'Fertilization: sperm capacitation, acrosome reaction, cortical reaction prevents polyspermy.', 'testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens.', 'ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum.']
          },
          {
            label: 'Female',
            options: ['ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum.', 'Fertilization: sperm capacitation, acrosome reaction, cortical reaction prevents polyspermy.', 'Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).', 'testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens.']
          },
          {
            label: 'Key Insight',
            options: ['ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum.', 'Fertilization: sperm capacitation, acrosome reaction, cortical reaction prevents polyspermy.', 'Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).', 'testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens.']
          }
        ],
        correctAnswers: ['testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens.', 'ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum.', 'Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).'],
        hint1: 'Think about what each concept specifically describes in Reproductive System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reproductive System describes a specific idea. Male: testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens. Female: ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum. Key Insight: Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone).'
      }
    }
  ]
}
