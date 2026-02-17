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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Operon model (prokaryotes)',
            options: ['enhancers, silencers, transcription factors, chromatin remodeling.', 'lac operon (inducible), trp operon (repressible).', 'miRNA and siRNA: small RNAs that silence gene expression post-transcriptionally.', 'Epigenetics: DNA methylation silences genes; histone acetylation activates genes.']
          },
          {
            label: 'Eukaryotic regulation',
            options: ['Epigenetics: DNA methylation silences genes; histone acetylation activates genes.', 'miRNA and siRNA: small RNAs that silence gene expression post-transcriptionally.', 'lac operon (inducible), trp operon (repressible).', 'enhancers, silencers, transcription factors, chromatin remodeling.']
          },
          {
            label: 'Key Insight',
            options: ['Epigenetics: DNA methylation silences genes; histone acetylation activates genes.', 'miRNA and siRNA: small RNAs that silence gene expression post-transcriptionally.', 'enhancers, silencers, transcription factors, chromatin remodeling.', 'lac operon (inducible), trp operon (repressible).']
          }
        ],
        correctAnswers: ['lac operon (inducible), trp operon (repressible).', 'enhancers, silencers, transcription factors, chromatin remodeling.', 'Epigenetics: DNA methylation silences genes; histone acetylation activates genes.'],
        hint1: 'Think about what each concept specifically describes in Gene Regulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Gene Regulation describes a specific idea. Operon model (prokaryotes): lac operon (inducible), trp operon (repressible). Eukaryotic regulation: enhancers, silencers, transcription factors, chromatin remodeling. Key Insight: Epigenetics: DNA methylation silences genes; histone acetylation activates genes.'
      }
    }
  ]
}
