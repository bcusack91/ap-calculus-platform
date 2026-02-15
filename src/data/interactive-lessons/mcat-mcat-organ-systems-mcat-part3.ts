export const mcatOrganSysPart3Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Renal & Excretory System

**Part 3 of 7 — Renal & Excretory System**

Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning).

GFR = glomerular filtration rate; filtered = all small molecules, not proteins/cells.
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
            question: 'Which of the following best describes a key concept in renal & excretory system?',
            options: [
              'Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ADH (from posterior pituitary): increases water reabsorption in collecting duct.

**MCAT Tip:** Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to renal & excretory system?',
            options: [
              'ADH (from posterior pituitary): increases water reabsorption in collecting duct',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'ADH (from posterior pituitary): increases water reabsorption in collecting duct'
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
            label: 'Core concept for Renal & Excretory System:',
            options: ['Nephron: glomerulus (filtration), PCT (reabsorption), loop o', 'GFR = glomerular filtration rate; filtered = all small molec', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['ADH (from posterior pituitary): increases water reabsorption', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Nephron: glomerulus (filtration), PCT (reabsorption), loop o', 'ADH (from posterior pituitary): increases water reabsorption'],
        hint1: 'Think about renal & excretory system',
        hint2: 'Consider the MCAT application',
        explanation: 'Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning). ADH (from posterior pituitary): increases water reabsorption in collecting duct.'
      }
    }
  ]
}
