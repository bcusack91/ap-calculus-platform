export const bioNucleicAcidsPart1Data = {
  topicSlug: 'nucleic-acids',
  sections: [
    {
      id: 'nuc1-intro',
      type: 'text' as const,
      content: `
# 🧬 Nucleic Acids: The Information Molecules

**Nucleic acids** store, transmit, and express the genetic information of every living organism. The two types are:

- **DNA** (deoxyribonucleic acid) — the long-term genetic blueprint
- **RNA** (ribonucleic acid) — the working copy used to make proteins

### Element fingerprint

Nucleic acids contain **C, H, O, N, and P**. The presence of **phosphorus** distinguishes nucleic acids from carbohydrates and most lipids.

### Where you'll meet nucleic acids

| Where | Form | Role |
|-------|------|------|
| Nucleus | DNA in chromosomes | Long-term genetic storage |
| Cytoplasm | mRNA, tRNA, rRNA | Protein synthesis |
| Mitochondria & chloroplasts | Their own DNA | Endosymbiotic legacy |
| Cell metabolism | ATP (a modified nucleotide) | Energy currency |
      `
    },
    {
      id: 'nuc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which element is found in every nucleic acid but is NOT typically found in carbohydrates?',
            options: ['Carbon', 'Hydrogen', 'Phosphorus', 'Oxygen'],
            correctAnswer: 2,
            explanation: 'The phosphate group in every nucleotide makes phosphorus a hallmark of nucleic acids; carbohydrates contain only C, H, and O.'
          }
        ]
      }
    },
    {
      id: 'nuc1-monomer',
      type: 'text' as const,
      content: `
## The Monomer: Nucleotide

A **nucleotide** has three parts:

1. **Pentose sugar** (5-carbon ring) — ribose in RNA, deoxyribose in DNA
2. **Phosphate group** — gives the molecule its acidic character
3. **Nitrogenous base** — purine (A, G) or pyrimidine (C, T, U)

### DNA vs RNA: side-by-side

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose (no –OH on 2′ C) | Ribose (–OH on 2′ C) |
| Bases | A, T, G, C | A, **U**, G, C |
| Strands | Double helix | Usually single-stranded |
| Stability | Very stable | Less stable (degrades easily) |
| Job | Long-term storage | Short-term workhorse |

### Pairing rules (Chargaff)

In DNA: **A pairs with T** (2 H-bonds), **G pairs with C** (3 H-bonds).

In RNA: **A pairs with U** instead.
      `
    },
    {
      id: 'nuc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which base is found in RNA but NOT in DNA?',
            options: ['Adenine', 'Guanine', 'Cytosine', 'Uracil'],
            correctAnswer: 3,
            explanation: 'RNA replaces thymine (T) with uracil (U). Adenine, guanine, and cytosine appear in both DNA and RNA.'
          }
        ]
      }
    },
    {
      id: 'nuc1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The monomer of DNA is a ___', options: ['amino acid', 'nucleotide', 'monosaccharide', 'fatty acid'] },
          { label: 'In DNA, adenine pairs with ___', options: ['guanine', 'cytosine', 'thymine', 'uracil'] },
          { label: 'The sugar in RNA is ___', options: ['glucose', 'fructose', 'ribose', 'deoxyribose'] }
        ],
        correctAnswers: ['nucleotide', 'thymine', 'ribose'],
        hint1: 'Three parts: sugar, phosphate, base.',
        hint2: 'A–T, G–C in DNA.',
        hint3: 'Has –OH on the 2′ carbon.',
        explanation: 'Nucleotides are the monomers of nucleic acids. In DNA, A pairs with T; in RNA the sugar is ribose (RNA = Ribo-Nucleic Acid).'
      }
    }
  ]
}
