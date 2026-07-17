export const bioOriginsOfLifePart3Data = {
  topicSlug: 'origins-of-life',
  sections: [
    {
      id: 'ori3-intro',
      type: 'text' as const,
      content: `
## The RNA World Hypothesis

**Part 3 of 7**

One of the biggest puzzles in the origin of life is the **chicken-and-egg problem**: DNA stores genetic information but needs protein enzymes to replicate, while proteins are encoded by DNA. Which came first? The RNA World hypothesis offers a solution — **RNA can do both**.

### Key terms for this part
- **RNA world** — hypothesis that early life was based on RNA molecules that could both store information and catalyze reactions
- **ribozyme** — an RNA molecule with enzymatic (catalytic) activity
- **self-replicating RNA** — RNA that can direct its own copying without protein enzymes
- **reverse transcriptase** — enzyme that synthesizes DNA from an RNA template (evidence of RNA → DNA transition)
      `
    },
    {
      id: 'ori3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — RNA World** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a ribozyme?',
            options: [
              'An RNA molecule that functions as a biological catalyst',
              'A ribosome that synthesizes RNA',
              'A protein enzyme that degrades RNA',
              'A DNA sequence that encodes ribosomal RNA'
            ],
            correctAnswer: 0,
            explanation: 'Ribozymes are RNA molecules with catalytic activity. The discovery of ribozymes by Thomas Cech (self-splicing introns) and Sidney Altman (RNase P) earned the 1989 Nobel Prize and provided key evidence for the RNA World hypothesis.'
          },
          {
            question: 'The RNA World hypothesis resolves which fundamental problem in the origin of life?',
            options: [
              'The chicken-and-egg problem: DNA needs proteins to replicate, but proteins need DNA to be encoded',
              'How the first cell membrane formed',
              'Why there are 20 standard amino acids',
              'How photosynthesis evolved before cellular respiration'
            ],
            correctAnswer: 0,
            explanation: 'RNA can both store genetic information (like DNA) AND catalyze chemical reactions (like proteins). This dual functionality means an RNA-based system could self-replicate without needing either DNA or protein enzymes first.'
          }
        ]
      }
    },
    {
      id: 'ori3-content2',
      type: 'text' as const,
      content: `
## Evidence for the RNA World

### 1. Ribozymes — RNA as Catalyst

Key discoveries demonstrating catalytic RNA:

| Ribozyme | Function | Significance |
|---|---|---|
| **Self-splicing introns** (Tetrahymena) | RNA removes its own introns | First ribozyme discovered (Cech, 1982) |
| **RNase P** | Processes pre-tRNA | RNA component is catalytic (Altman) |
| **Ribosome (peptidyl transferase)** | Forms peptide bonds | The ribosome is fundamentally a ribozyme — rRNA catalyzes the key reaction of translation |
| **Hammerhead ribozyme** | Self-cleavage | Found in plant viroids |
| **Spliceosome** | mRNA splicing | snRNA-catalyzed |

**The ribosome is the most important evidence**: the fact that the catalytic core of protein synthesis is made of RNA (not protein) strongly suggests that RNA preceded proteins in evolution.

### 2. RNA as Information Storage

- RNA can form complementary base pairs (A-U, G-C) and be copied by template-directed synthesis
- Some viruses (**RNA viruses**) use RNA as their sole genetic material
- **Retroviruses** (e.g., HIV) convert RNA → DNA using reverse transcriptase, showing the transition is biochemically possible

### 3. RNA's Chemical Versatility

- RNA can fold into complex 3D structures (like proteins)
- RNA contains **ribose** sugar with a 2'-OH group that enables diverse chemistry
- RNA nucleotides (ATP, GTP, $NAD^{+}$, FAD, coenzyme A) serve as **metabolic cofactors** in all modern cells — possible "molecular fossils" from the RNA world
      `
    },
    {
      id: 'ori3-content3',
      type: 'text' as const,
      content: `
## From RNA World → DNA World

### Why Did DNA Replace RNA?

| Feature | RNA | DNA |
|---|---|---|
| Sugar | Ribose (2'-OH) | Deoxyribose (2'-H) |
| Stability | Less stable (2'-OH makes it susceptible to hydrolysis) | More stable (better for long-term storage) |
| Base | Uracil (U) | Thymine (T) — methylated uracil, easier to repair |
| Structure | Usually single-stranded | Usually double-stranded (redundant backup) |

**DNA is a more stable archive.** Natural selection favored organisms that stored genetic information in DNA while using RNA as an intermediary (mRNA) and catalyst (rRNA).

### The Proposed Transition Sequence

1. **RNA world**: RNA stores information and catalyzes reactions
2. **RNA + protein world**: RNA begins to direct protein synthesis; proteins are better catalysts and take over most enzymatic roles
3. **DNA + RNA + protein world** (modern): DNA stores information (more stable), RNA serves as intermediary and catalyst, proteins perform most catalysis

### Key Lab Evidence

- **In vitro evolution** experiments have produced RNA molecules that can:
  - Copy short RNA templates (RNA-dependent RNA polymerrase ribozyme)
  - Catalyze amino acid attachment
  - Join nucleotides together
- Scientists have evolved ribozymes that can replicate RNA strands of 200+ nucleotides — approaching self-sustaining replication
      `
    },
    {
      id: 'ori3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — RNA World** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The catalytic core of the ribosome is made of ___, making it fundamentally a ribozyme.',
            options: ['rRNA', 'mRNA', 'tRNA', 'protein']
          },
          {
            label: 'DNA replaced RNA as the primary genetic material because DNA is more ___ due to its deoxyribose sugar.',
            options: ['chemically stable', 'catalytically active', 'easily transcribed', 'water soluble']
          },
          {
            label: 'Modern metabolic cofactors like ATP, $NAD^{+}$, and FAD are ___ nucleotides, considered "molecular fossils" from the RNA world.',
            options: ['RNA-based', 'DNA-based', 'protein-based', 'lipid-based']
          }
        ],
        correctAnswers: ['rRNA', 'chemically stable', 'RNA-based'],
        hint1: 'Which type of RNA is the structural and catalytic component of ribosomes?',
        hint2: 'The 2\'-OH group on ribose makes RNA prone to hydrolysis — removing it makes DNA more resistant.',
        hint3: 'ATP, $NAD^{+}$, CoA all contain adenine ribonucleotides — a clue about their evolutionary origin.',
        explanation: 'The ribosome\'s peptidyl transferase activity comes from rRNA. DNA replaced RNA for information storage because deoxyribose makes it more chemically stable. Modern cofactors like ATP and $NAD^{+}$ are RNA-based molecules, likely remnants of the RNA world.'
      }
    },
    {
      id: 'ori3-summary',
      type: 'text' as const,
      content: `
## Summary — Part 3

- The **RNA World hypothesis** proposes that early life used RNA for both information storage and catalysis
- **Ribozymes** (catalytic RNA) provide key evidence — especially the ribosome's rRNA-based catalytic core
- RNA can store genetic information (as seen in RNA viruses)
- Modern **metabolic cofactors** (ATP, $NAD^{+}$, FAD, CoA) are RNA-based "molecular fossils"
- DNA eventually replaced RNA for genetic storage because it is **more chemically stable** (deoxyribose lacks the hydrolysis-prone 2'-OH)
- The transition: RNA world → RNA+protein world → DNA+RNA+protein world (modern)
- In vitro evolution experiments have generated ribozymes capable of replicating RNA templates

**Next up:** Part 4 — Protocells and the First Cells
      `
    }
  ]
};
