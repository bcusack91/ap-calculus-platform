export const mcatMolBioPart4Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Gene Regulation

**Part 4 of 7 — Gene Regulation**

Operon model (prokaryotes): lac operon (inducible), trp operon (repressible).

Eukaryotic regulation: enhancers, silencers, transcription factors, chromatin remodeling.
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
            question: 'Which of the following best describes a key concept in gene regulation?',
            options: [
              'Operon model (prokaryotes): lac operon (inducible), trp operon (repressible)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Operon model (prokaryotes): lac operon (inducible), trp operon (repressible)'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Epigenetics: DNA methylation silences genes; histone acetylation activates genes.

**MCAT Tip:** miRNA and siRNA: small RNAs that silence gene expression post-transcriptionally.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to gene regulation?',
            options: [
              'Epigenetics: DNA methylation silences genes; histone acetylation activates genes',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetics: DNA methylation silences genes; histone acetylation activates genes'
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
            label: 'Core concept for Gene Regulation:',
            options: ['Operon model (prokaryotes): lac operon (inducible), trp oper', 'Eukaryotic regulation: enhancers, silencers, transcription f', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Epigenetics: DNA methylation silences genes; histone acetyla', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Operon model (prokaryotes): lac operon (inducible), trp oper', 'Epigenetics: DNA methylation silences genes; histone acetyla'],
        hint1: 'Think about gene regulation',
        hint2: 'Consider the MCAT application',
        explanation: 'Operon model (prokaryotes): lac operon (inducible), trp operon (repressible). Epigenetics: DNA methylation silences genes; histone acetylation activates genes.'
      }
    }
  ]
}
