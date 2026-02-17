export const mcatMicroPart1Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Microbiology

**Part 1 of 7 — Bacteria Structure & Function**

Bacteria: prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles.

Gram-positive: thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in bacteria structure & function?',
            options: [
              'Bacteria: prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Bacteria: prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).

**MCAT Tip:** Binary fission: asexual reproduction; doubling time can be as short as 20 minutes.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to bacteria structure & function?',
            options: [
              'Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bacteria',
            options: ['Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).', 'prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles.', 'Binary fission: asexual reproduction; doubling time can be as short as 20 minutes.', 'thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink.']
          },
          {
            label: 'Gram-positive',
            options: ['Binary fission: asexual reproduction; doubling time can be as short as 20 minutes.', 'Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).', 'prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles.', 'thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink.']
          },
          {
            label: 'Key Insight',
            options: ['Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).', 'thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink.', 'Binary fission: asexual reproduction; doubling time can be as short as 20 minutes.', 'prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles.']
          }
        ],
        correctAnswers: ['prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles.', 'thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink.', 'Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).'],
        hint1: 'Think about what each concept specifically describes in Microbiology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Microbiology describes a specific idea. Bacteria: prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles. Gram-positive: thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink. Key Insight: Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals).'
      }
    }
  ]
}
