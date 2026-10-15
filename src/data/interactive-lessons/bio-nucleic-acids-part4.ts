export const bioNucleicAcidsPart4Data = {
  topicSlug: 'nucleic-acids',
  sections: [
    {
      id: 'nuc4-review',
      type: 'text' as const,
      content: `
## 🎯 AP Review: Nucleic Acids

### Must-know synthesis points

1. **Nucleotides = sugar + phosphate + nitrogenous base.**
2. **DNA vs RNA** — DNA: deoxyribose, T, double-stranded, stable. RNA: ribose, U, usually single-stranded.
3. **Chargaff's pairing** — A–T (or A–U), G–C; G–C pairs are held by more hydrogen bonds than A–T pairs.
4. **Antiparallel orientation** enables semiconservative replication and accurate copying.
5. **Central dogma** — DNA → mRNA → protein (transcription → translation).
6. **Nucleotides also serve as energy carriers** — ATP, $NAD^{+}$, FAD, cAMP all share a nucleotide backbone.

### Common AP traps

- mRNA is the **photocopy**, not the original. The DNA stays in the nucleus (in eukaryotes).
- A **nucleotide** is the monomer; **nucleic acid** is the polymer.
- Both **DNA and RNA contain phosphate groups** — phosphate isn't unique to one.
      `
    },
    {
      id: 'nuc4-workshop',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'A DNA sample is found to contain 22% adenine. Using Chargaff\'s rules, what percent guanine should it contain?',
            options: ['22%', '28%', '44%', '78%'],
            correctAnswer: 1,
            explanation: 'A = T = 22%, so A + T = 44%. The remaining 56% is split equally between G and C → 28% G (and 28% C).'
          }
        ]
      }
    },
    {
      id: 'nuc4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Workshop Problem** 📐`,
      exercise: {
        questions: [
          {
            question: 'Each G–C base pair is held by three hydrogen bonds, and each A–T pair by two. A region of DNA with very high G–C content will be ___ to separate by heat than an A–T-rich region.',
            options: [
              'Easier — fewer hydrogen bonds',
              'Easier — phosphate bonds break first',
              'Harder — more hydrogen bonds must be broken',
              'Identical — base composition does not affect strand stability'
            ],
            correctAnswer: 2,
            explanation: 'G–C pairs share 3 hydrogen bonds; A–T pairs share 2. G–C-rich regions therefore require more heat (or denaturant) to separate.'
          }
        ]
      }
    },
    {
      id: 'nuc4-dropdown',
      type: 'dropdown-select' as const,
      content: `**AP Synthesis** 🔬`,
      exercise: {
        dropdowns: [
          { label: 'The sugar in DNA is ___', options: ['ribose', 'deoxyribose', 'glucose', 'galactose'] },
          { label: 'The base UNIQUE to RNA is ___', options: ['adenine', 'thymine', 'uracil', 'guanine'] },
          { label: 'A nucleic acid contains C, H, O, N, and ___', options: ['S', 'P', 'Fe', 'Mg'] }
        ],
        correctAnswers: ['deoxyribose', 'uracil', 'P'],
        hint1: 'DNA = deoxyribonucleic acid.',
        hint2: 'Replaces thymine.',
        hint3: 'In every phosphate group.',
        explanation: 'DNA uses deoxyribose. Uracil replaces thymine in RNA. Phosphorus is found in every nucleotide\'s phosphate group.'
      }
    }
  ]
}
