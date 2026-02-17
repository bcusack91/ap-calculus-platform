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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nephron',
            options: ['ADH (from posterior pituitary): increases water reabsorption in collecting duct.', 'glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning).', 'GFR = glomerular filtration rate; filtered = all small molecules, not proteins/cells.', 'Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.']
          },
          {
            label: 'Key Insight',
            options: ['GFR = glomerular filtration rate; filtered = all small molecules, not proteins/cells.', 'ADH (from posterior pituitary): increases water reabsorption in collecting duct.', 'glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning).', 'Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.']
          },
          {
            label: 'MCAT Tip',
            options: ['GFR = glomerular filtration rate; filtered = all small molecules, not proteins/cells.', 'Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.', 'ADH (from posterior pituitary): increases water reabsorption in collecting duct.', 'glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning).']
          }
        ],
        correctAnswers: ['glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning).', 'ADH (from posterior pituitary): increases water reabsorption in collecting duct.', 'Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.'],
        hint1: 'Think about what each concept specifically describes in Renal & Excretory System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Renal & Excretory System describes a specific idea. Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning). Key Insight: ADH (from posterior pituitary): increases water reabsorption in collecting duct. MCAT Tip: Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure.'
      }
    }
  ]
}
