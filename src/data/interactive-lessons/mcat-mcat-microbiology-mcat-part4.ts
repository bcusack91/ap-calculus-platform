export const mcatMicroPart4Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Microbial Genetics

**Part 4 of 7 — Microbial Genetics**

Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage.

Conjugation: direct DNA transfer via pilus (F-plasmid); horizontal gene transfer.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in microbial genetics?',
            options: [
              'Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.

**MCAT Tip:** Transposons: jumping genes that can move within and between genomes.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to microbial genetics?',
            options: [
              'Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Microbial Genetics:',
            options: ['Transformation: uptake of free DNA from environment; Transdu', 'Conjugation: direct DNA transfer via pilus (F-plasmid); hori', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Plasmids: extrachromosomal DNA, often carry antibiotic resis', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Transformation: uptake of free DNA from environment; Transdu', 'Plasmids: extrachromosomal DNA, often carry antibiotic resis'],
        hint1: 'Think about microbial genetics',
        hint2: 'Consider the MCAT application',
        explanation: 'Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage. Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.'
      }
    }
  ]
}
