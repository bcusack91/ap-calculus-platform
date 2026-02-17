export const mcatMolBioPart7Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.

Gel electrophoresis: separates DNA/protein by size; smaller fragments migrate faster.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** CRISPR-Cas9: gene editing using guide RNA to target specific sequences.

**MCAT Tip:** Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
            options: [
              'CRISPR-Cas9: gene editing using guide RNA to target specific sequences',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'CRISPR-Cas9: gene editing using guide RNA to target specific sequences'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PCR',
            options: ['CRISPR-Cas9: gene editing using guide RNA to target specific sequences.', 'Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop.', 'separates DNA/protein by size; smaller fragments migrate faster.', 'amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.']
          },
          {
            label: 'Gel electrophoresis',
            options: ['Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop.', 'CRISPR-Cas9: gene editing using guide RNA to target specific sequences.', 'amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.', 'separates DNA/protein by size; smaller fragments migrate faster.']
          },
          {
            label: 'Key Insight',
            options: ['CRISPR-Cas9: gene editing using guide RNA to target specific sequences.', 'Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop.', 'separates DNA/protein by size; smaller fragments migrate faster.', 'amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.']
          }
        ],
        correctAnswers: ['amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.', 'separates DNA/protein by size; smaller fragments migrate faster.', 'CRISPR-Cas9: gene editing using guide RNA to target specific sequences.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling. Gel electrophoresis: separates DNA/protein by size; smaller fragments migrate faster. Key Insight: CRISPR-Cas9: gene editing using guide RNA to target specific sequences.'
      }
    }
  ]
}
