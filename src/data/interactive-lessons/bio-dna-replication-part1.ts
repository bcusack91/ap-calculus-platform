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

1. **Deoxyribose sugar** (a 5-carbon sugar)
2. **Phosphate group**, which links one nucleotide's sugar to the next, forming the backbone
3. **Nitrogenous base**: a purine or a pyrimidine

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
- A **purine always pairs with a pyrimidine**, so every base pair is the same width and the helix has a uniform diameter
- The sequence of bases along one strand carries the genetic information; the other strand is its complement
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
            explanation: 'By Chargaff\u2019s rules: A = T = 30%.  So A + T = 60%.  Since A + T + G + C = 100%, G + C = 40%.  Since G = C, each is 20%.'
          },
          {
            question: 'Why is a G-C base pair more stable than an A-T base pair?',
            options: [
              'G-C hydrogen bonds are longer, so each single bond is stronger',
              'G-C pairs share three hydrogen bonds and A-T pairs share two',
              'G-C pairs are joined by a covalent bond between the two bases',
              'A-T pairs fit the helix poorly and are not true Watson-Crick pairs'
            ],
            correctAnswer: 1,
            explanation: 'Guanine-cytosine base pairs are held together by three hydrogen bonds, while adenine-thymine pairs have only two. The extra hydrogen bond means more energy is required to separate G-C pairs. DNA rich in G-C content has a higher melting temperature (Tm).'
          },
          {
            question: 'The two strands of DNA run antiparallel.  What does this mean?',
            options: [
              'The two strands carry identical base sequences read the same way',
              'The strands run in opposite 5’-to-3’ directions alongside each other',
              'The two strands differ in base composition, so A does not equal T',
              'The two strands coil around the axis in opposite rotational directions'
            ],
            correctAnswer: 1,
            explanation: 'Antiparallel means the two strands have opposite directionality.  The 5\u2019 end of one strand is paired with the 3\u2019 end of the other.  This arrangement is critical for replication and transcription, as enzymes that process DNA have inherent directionality.'
          }
        ]
      }
    },
    {
      id: 'dr1-packaging',
      type: 'text' as const,
      content: `
### How Prokaryotes and Eukaryotes Store DNA

| Feature | Prokaryotes | Eukaryotes |
|---------|-------------|------------|
| Main chromosome(s) | Usually one **circular** chromosome | Several **linear** chromosomes |
| Location | Cytoplasm (nucleoid region) | Nucleus |
| Packaging | Little protein packaging | DNA wound around **histone** proteins and further condensed |
| **Plasmids** | Common: small, extra-chromosomal circular DNA | Occur in some eukaryotes, such as yeast |

**Packaging in eukaryotes.** A human cell holds about 2 meters of DNA in a nucleus a few micrometers across. The DNA wraps around clusters of **histones** to form **nucleosomes** ("beads on a string"), and these coil and fold further with other proteins. During mitosis and meiosis the chromosomes condense the most, which is when they are visible under a light microscope.

> **Epigenetics and Histones:** Chemical modifications to histones change how tightly DNA is packed and so how accessible genes are. **Adding acetyl groups** to histones generally loosens chromatin and allows transcription; **removing them** tightens it and silences genes. These modifications are reversible and do not change the DNA sequence.
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
            question: 'The proteins around which eukaryotic DNA wraps to form nucleosomes:',
            answer: 'histones',
            acceptableAnswers: ['histones', 'histone', 'Histones', 'Histone', 'histone proteins', 'histone octamer'],
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
              '2400',
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