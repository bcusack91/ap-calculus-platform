export const bioDnaReplicationPart1Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr1-intro',
      type: 'text' as const,
      content: `
## DNA Structure — The Molecular Basis of Heredity

**Part 1 of 7**

Understanding DNA replication requires a thorough understanding of DNA structure.  The double helix model, proposed by Watson and Crick in 1953 (based on X-ray crystallography data from Rosalind Franklin and Maurice Wilkins), remains one of the most important discoveries in biology.
      `
    },
    {
      id: 'dr1-nucleotide',
      type: 'text' as const,
      content: `
### Nucleotide Structure

DNA is a polymer of **nucleotides**.  Each nucleotide has three components:

1. **Deoxyribose sugar** (5-carbon sugar lacking an -OH group at the 2' carbon)
2. **Phosphate group** (attached to the 5' carbon of the sugar)
3. **Nitrogenous base** (attached to the 1' carbon of the sugar)

**The four DNA bases:**

| Base | Type | Rings | Pairs with |
|------|------|-------|-----------|
| **Adenine (A)** | Purine | 2 rings | Thymine (T) — 2 hydrogen bonds |
| **Guanine (G)** | Purine | 2 rings | Cytosine (C) — 3 hydrogen bonds |
| **Thymine (T)** | Pyrimidine | 1 ring | Adenine (A) — 2 hydrogen bonds |
| **Cytosine (C)** | Pyrimidine | 1 ring | Guanine (G) — 3 hydrogen bonds |

> **Chargaff's Rules:** In any DNA molecule, the amount of A equals the amount of T, and the amount of G equals the amount of C.  This 1:1 ratio (A=T, G=C) was critical evidence for the base-pairing model.

**Key structural features of the double helix:**
- Two antiparallel strands (one runs 5' → 3', the other 3' → 5')
- Sugar-phosphate backbones on the outside; bases face inward
- Bases held together by **hydrogen bonds** (A-T: 2 H-bonds; G-C: 3 H-bonds)
- The helix has a **major groove** and a **minor groove** (important for protein-DNA interactions)
- One complete turn = 10 base pairs = 3.4 nm
- Diameter = 2 nm
      `
    },
    {
      id: 'dr1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — DNA Structure
      `,
      exercise: {
        questions: [
          {
            question: 'DNA from organism X is analyzed and found to contain 30% adenine.  What percentage of the bases is cytosine?',
            options: [
              '30%',
              '20%',
              '40%',
              '10%'
            ],
            correctAnswer: 1,
            explanation: 'By Chargaff\\u2019s rules: A = T = 30%.  So A + T = 60%.  Since A + T + G + C = 100%, G + C = 40%.  Since G = C, each is 20%.'
          },
          {
            question: 'Why is a G-C base pair more stable than an A-T base pair?',
            options: [
              'G-C pairs have longer hydrogen bonds',
              'G-C pairs have 3 hydrogen bonds compared to 2 in A-T pairs, providing more energy to disrupt',
              'G-C pairs are covalently bonded',
              'A-T pairs are not real base pairs'
            ],
            correctAnswer: 1,
            explanation: 'Guanine-cytosine base pairs are held together by three hydrogen bonds, while adenine-thymine pairs have only two. The extra hydrogen bond means more energy is required to separate G-C pairs. DNA rich in G-C content has a higher melting temperature (Tm).'
          },
          {
            question: 'The two strands of DNA run antiparallel.  What does this mean?',
            options: [
              'They are identical sequences',
              'One strand runs 5\\u2019 to 3\\u2019 while the complementary strand runs 3\\u2019 to 5\\u2019 in the opposite direction',
              'They have different base compositions',
              'They are wound in opposite rotational directions'
            ],
            correctAnswer: 1,
            explanation: 'Antiparallel means the two strands have opposite directionality.  The 5\\u2019 end of one strand is paired with the 3\\u2019 end of the other.  This arrangement is critical for replication and transcription, as enzymes that process DNA have inherent directionality.'
          }
        ]
      }
    },
    {
      id: 'dr1-packaging',
      type: 'text' as const,
      content: `
### DNA Packaging in Eukaryotes

Human cells contain about **6.4 billion base pairs** of DNA (~2 meters per cell if stretched out).  This must be packaged into a nucleus only ~6 \\(\\mu\\)m in diameter — a compaction ratio of ~10,000:1.

**Packaging hierarchy:**
1. **Nucleosome** — 147 bp of DNA wraps ~1.65 times around a histone octamer (2 copies each of H2A, H2B, H3, H4); the fundamental unit of chromatin (11 nm "beads on a string")
2. **Linker histone H1** binds between nucleosomes, helping them pack into a **30 nm fiber**
3. **Looped domains** — 30 nm fiber forms loops of 30,000-100,000 bp attached to a protein scaffold
4. **Heterochromatin** — maximally condensed, transcriptionally inactive
5. **Metaphase chromosome** — highest compaction (~10,000-fold), visible under a light microscope

> **Epigenetics and Histones:** Chemical modifications to histones (acetylation, methylation, phosphorylation) alter chromatin structure and gene accessibility.  **Histone acetylation** (by HATs) generally OPENS chromatin (euchromatin, active).  **Histone deacetylation** (by HDACs) CLOSES it (heterochromatin, silenced).
      `
    },
    {
      id: 'dr1-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — DNA Structure
      `,
      exercise: {
        questions: [
          {
            question: 'The type of bond that holds complementary bases together (A-T, G-C):',
            answer: 'hydrogen bonds',
            acceptableAnswers: ['hydrogen bonds', 'hydrogen bond', 'Hydrogen bonds', 'H bonds', 'h-bonds'],
            placeholder: 'e.g. covalent bonds'
          },
          {
            question: 'A purine with 2 rings that pairs with thymine:',
            answer: 'adenine',
            acceptableAnswers: ['adenine', 'Adenine', 'A'],
            placeholder: 'e.g. guanine'
          },
          {
            question: 'The protein complex around which DNA wraps to form nucleosomes:',
            answer: 'histone octamer',
            acceptableAnswers: ['histone octamer', 'histones', 'histone', 'Histones', 'Histone octamer'],
            placeholder: 'e.g. condensin'
          }
        ]
      }
    },
    {
      id: 'dr1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — DNA Structure
      `,
      exercise: {
        questions: [
          {
            question: 'A double-stranded DNA molecule is 1000 bp long.  How many hydrogen bonds hold the two strands together if the molecule is 40% G-C?',
            options: [
              '2000',
              '2400 — 400 G-C pairs contribute 3 H-bonds each (1200) and 600 A-T pairs contribute 2 H-bonds each (1200), totaling 2400',
              '3000',
              '1000'
            ],
            correctAnswer: 1,
            explanation: '40% G-C means 400 G-C base pairs (x 3 H-bonds = 1200) and 60% A-T means 600 A-T pairs (x 2 H-bonds = 1200).  Total = 1200 + 1200 = 2400 hydrogen bonds.'
          }
        ]
      }
    }
  ]
};