export const mcatBiochemPart1Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Biochemistry Foundations

**Part 1 of 7 — Amino Acids & Protein Structure**

20 standard amino acids: nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H).

Protein structure: primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits).
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in amino acids & protein structure?',
            options: [
              '20 standard amino acids: nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: '20 standard amino acids: nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Peptide bond: planar, partial double-bond character, trans configuration preferred.

**MCAT Tip:** pI = isoelectric point — pH where net charge = 0; average of flanking pKa values.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to amino acids & protein structure?',
            options: [
              'Peptide bond: planar, partial double-bond character, trans configuration preferred',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Peptide bond: planar, partial double-bond character, trans configuration preferred'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '20 standard amino acids',
            options: ['nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H).', 'pI = isoelectric point — pH where net charge = 0; average of flanking pKa values.', 'primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits).', 'Peptide bond: planar, partial double-bond character, trans configuration preferred.']
          },
          {
            label: 'Protein structure',
            options: ['pI = isoelectric point — pH where net charge = 0; average of flanking pKa values.', 'primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits).', 'nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H).', 'Peptide bond: planar, partial double-bond character, trans configuration preferred.']
          },
          {
            label: 'Key Insight',
            options: ['primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits).', 'nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H).', 'pI = isoelectric point — pH where net charge = 0; average of flanking pKa values.', 'Peptide bond: planar, partial double-bond character, trans configuration preferred.']
          }
        ],
        correctAnswers: ['nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H).', 'primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits).', 'Peptide bond: planar, partial double-bond character, trans configuration preferred.'],
        hint1: 'Think about what each concept specifically describes in Biochemistry Foundations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biochemistry Foundations describes a specific idea. 20 standard amino acids: nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H). Protein structure: primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits). Key Insight: Peptide bond: planar, partial double-bond character, trans configuration preferred.'
      }
    }
  ]
}
