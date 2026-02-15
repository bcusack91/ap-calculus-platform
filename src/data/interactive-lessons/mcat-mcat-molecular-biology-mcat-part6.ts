export const mcatMolBioPart6Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Biotechnology & Lab Techniques

**Part 6 of 7 — Biotechnology & Lab Techniques**

PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling.

Gel electrophoresis: separates DNA/protein by size; smaller fragments migrate faster.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in biotechnology & lab techniques?',
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
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** CRISPR-Cas9: gene editing using guide RNA to target specific sequences.

**MCAT Tip:** Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to biotechnology & lab techniques?',
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
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Biotechnology & Lab Techniques:',
            options: ['PCR: amplifies specific DNA sequences using primers, Taq pol', 'Gel electrophoresis: separates DNA/protein by size; smaller ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['CRISPR-Cas9: gene editing using guide RNA to target specific', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['PCR: amplifies specific DNA sequences using primers, Taq pol', 'CRISPR-Cas9: gene editing using guide RNA to target specific'],
        hint1: 'Think about biotechnology & lab techniques',
        hint2: 'Consider the MCAT application',
        explanation: 'PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling. CRISPR-Cas9: gene editing using guide RNA to target specific sequences.'
      }
    }
  ]
}
