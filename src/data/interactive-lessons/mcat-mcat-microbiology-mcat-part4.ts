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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transformation',
            options: ['Transposons: jumping genes that can move within and between genomes.', 'uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage.', 'Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.', 'direct DNA transfer via pilus (F-plasmid); horizontal gene transfer.']
          },
          {
            label: 'Conjugation',
            options: ['Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.', 'uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage.', 'Transposons: jumping genes that can move within and between genomes.', 'direct DNA transfer via pilus (F-plasmid); horizontal gene transfer.']
          },
          {
            label: 'Key Insight',
            options: ['Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.', 'direct DNA transfer via pilus (F-plasmid); horizontal gene transfer.', 'uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage.', 'Transposons: jumping genes that can move within and between genomes.']
          }
        ],
        correctAnswers: ['uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage.', 'direct DNA transfer via pilus (F-plasmid); horizontal gene transfer.', 'Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.'],
        hint1: 'Think about what each concept specifically describes in Microbial Genetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Microbial Genetics describes a specific idea. Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage. Conjugation: direct DNA transfer via pilus (F-plasmid); horizontal gene transfer. Key Insight: Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes.'
      }
    }
  ]
}
