export const bioNucleicAcidsPart3Data = {
  topicSlug: 'nucleic-acids',
  sections: [
    {
      id: 'nuc3-functions',
      type: 'text' as const,
      content: `
## Functions Beyond Information Storage

| Molecule | Job |
|----------|-----|
| **DNA** | Long-term genetic storage; replicated each cell division |
| **mRNA** | Carries gene information from nucleus to ribosome |
| **tRNA** | Brings the correct amino acid to the ribosome during translation |
| **rRNA** | Catalytic component of the ribosome |
| **ATP** | Energy currency (a modified nucleotide) |
| **NAD⁺ / FAD / NADP⁺** | Electron carriers (also nucleotide-based) |

### The central dogma

$$DNA \\xrightarrow{\\text{transcription}} mRNA \\xrightarrow{\\text{translation}} \\text{Protein}$$

DNA is the **archive**. mRNA is the **photocopy** sent to the workshop. Protein is the **product**.

### Why double-stranded matters

The double helix is **antiparallel** (5′→3′ on one strand opposite 3′→5′ on the other) and **complementary** — each strand can serve as a template for an exact copy. This is what makes DNA replication possible.
      `
    },
    {
      id: 'nuc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A long, single-stranded molecule with uracil that carries information from a gene to the ribosome is most likely:',
            options: ['DNA', 'mRNA', 'tRNA', 'rRNA'],
            correctAnswer: 1,
            explanation: 'mRNA is single-stranded, contains uracil, and carries the gene\'s code from the nucleus to the ribosome for translation.'
          }
        ]
      }
    },
    {
      id: 'nuc3-energy',
      type: 'text' as const,
      content: `
## Nucleotides as Energy Currency

**ATP** (adenosine triphosphate) is a nucleotide with three phosphate groups. The bonds between phosphates are **high-energy** — when one is broken, energy is released to drive cellular work.

$$ATP \\rightarrow ADP + P_i + \\text{energy}$$

This single reaction powers nearly everything cells do — muscle contraction, active transport, biosynthesis, signaling.

### Other nucleotide-based cofactors

- **NAD⁺ / NADH** — electron carrier in respiration
- **FAD / FADH₂** — electron carrier in respiration
- **NADP⁺ / NADPH** — electron carrier in photosynthesis and biosynthesis
- **cAMP** — second messenger in cell signaling

So nucleotides do far more than store information — they are also the cell's **energy and signaling currency**.
      `
    },
    {
      id: 'nuc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'ATP, NAD⁺, and cAMP all share the same fundamental building block. They are all:',
            options: [
              'Modified amino acids',
              'Modified fatty acids',
              'Nucleotide derivatives',
              'Polysaccharides'
            ],
            correctAnswer: 2,
            explanation: 'ATP, NAD⁺, FAD, NADP⁺, and cAMP are all nucleotide-based, illustrating how the cell repurposes one chemical scaffold across many roles.'
          }
        ]
      }
    },
    {
      id: 'nuc3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The two strands of DNA run ___ to each other', options: ['parallel', 'antiparallel', 'perpendicular', 'tangled'] },
          { label: 'A–T pairs are held by ___ hydrogen bonds', options: ['1', '2', '3', '4'] },
          { label: 'The cell\'s primary energy currency is ___', options: ['glucose', 'ATP', 'NADH', 'cAMP'] }
        ],
        correctAnswers: ['antiparallel', '2', 'ATP'],
        hint1: '5′→3′ opposite 3′→5′.',
        hint2: 'Fewer than G–C.',
        hint3: 'Releases energy when phosphate is cleaved.',
        explanation: 'DNA strands are antiparallel. A–T = 2 H-bonds (G–C = 3, more stable). ATP is the universal cellular energy currency.'
      }
    }
  ]
}
