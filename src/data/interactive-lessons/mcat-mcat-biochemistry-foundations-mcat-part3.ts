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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Carbohydrate Metabolism:',
            options: ['Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytop', 'Pyruvate dehydrogenase: pyruvate to acetyl-CoA + CO2 + NADH ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytop', 'Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 '],
        hint1: 'Think about carbohydrate metabolism',
        hint2: 'Consider the MCAT application',
        explanation: 'Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic). Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn.'
      }
    }
  ]
}
