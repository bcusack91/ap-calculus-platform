export const mcatBiochemPart3Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Carbohydrate Metabolism

**Part 3 of 7 — Carbohydrate Metabolism**

Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic).

Pyruvate dehydrogenase: pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix).
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in carbohydrate metabolism?',
            options: [
              'Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.

**MCAT Tip:** Gluconeogenesis: essentially reverse glycolysis with 4 bypass enzymes — occurs in liver.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to carbohydrate metabolism?',
            options: [
              'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Glycolysis',
            options: ['pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix).', 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.', 'glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic).', 'Gluconeogenesis: essentially reverse glycolysis with 4 bypass enzymes — occurs in liver.']
          },
          {
            label: 'Pyruvate dehydrogenase',
            options: ['Gluconeogenesis: essentially reverse glycolysis with 4 bypass enzymes — occurs in liver.', 'pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix).', 'glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic).', 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.']
          },
          {
            label: 'Key Insight',
            options: ['glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic).', 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.', 'Gluconeogenesis: essentially reverse glycolysis with 4 bypass enzymes — occurs in liver.', 'pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix).']
          }
        ],
        correctAnswers: ['glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic).', 'pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix).', 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.'],
        hint1: 'Think about what each concept specifically describes in Carbohydrate Metabolism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Carbohydrate Metabolism describes a specific idea. Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic). Pyruvate dehydrogenase: pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix). Key Insight: Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.'
      }
    }
  ]
}
