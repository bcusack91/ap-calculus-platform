const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src/data/interactive-lessons');

// Part 1: DNA Structure
const part1 = `export const bioDnaReplicationPart1Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr1-intro',
      type: 'text' as const,
      content: \`
## DNA Structure — The Molecular Basis of Heredity

**Part 1 of 7**

Understanding DNA replication requires a thorough understanding of DNA structure.  The double helix model, proposed by Watson and Crick in 1953 (based on X-ray crystallography data from Rosalind Franklin and Maurice Wilkins), remains one of the most important discoveries in biology.
      \`
    },
    {
      id: 'dr1-nucleotide',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'dr1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — DNA Structure
      \`,
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
            explanation: 'By Chargaff\\\\u2019s rules: A = T = 30%.  So A + T = 60%.  Since A + T + G + C = 100%, G + C = 40%.  Since G = C, each is 20%.'
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
              'One strand runs 5\\\\u2019 to 3\\\\u2019 while the complementary strand runs 3\\\\u2019 to 5\\\\u2019 in the opposite direction',
              'They have different base compositions',
              'They are wound in opposite rotational directions'
            ],
            correctAnswer: 1,
            explanation: 'Antiparallel means the two strands have opposite directionality.  The 5\\\\u2019 end of one strand is paired with the 3\\\\u2019 end of the other.  This arrangement is critical for replication and transcription, as enzymes that process DNA have inherent directionality.'
          }
        ]
      }
    },
    {
      id: 'dr1-packaging',
      type: 'text' as const,
      content: \`
### DNA Packaging in Eukaryotes

Human cells contain about **6.4 billion base pairs** of DNA (~2 meters per cell if stretched out).  This must be packaged into a nucleus only ~6 \\\\(\\\\mu\\\\)m in diameter — a compaction ratio of ~10,000:1.

**Packaging hierarchy:**
1. **Nucleosome** — 147 bp of DNA wraps ~1.65 times around a histone octamer (2 copies each of H2A, H2B, H3, H4); the fundamental unit of chromatin (11 nm "beads on a string")
2. **Linker histone H1** binds between nucleosomes, helping them pack into a **30 nm fiber**
3. **Looped domains** — 30 nm fiber forms loops of 30,000-100,000 bp attached to a protein scaffold
4. **Heterochromatin** — maximally condensed, transcriptionally inactive
5. **Metaphase chromosome** — highest compaction (~10,000-fold), visible under a light microscope

> **Epigenetics and Histones:** Chemical modifications to histones (acetylation, methylation, phosphorylation) alter chromatin structure and gene accessibility.  **Histone acetylation** (by HATs) generally OPENS chromatin (euchromatin, active).  **Histone deacetylation** (by HDACs) CLOSES it (heterochromatin, silenced).
      \`
    },
    {
      id: 'dr1-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — DNA Structure
      \`,
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
      content: \`
### Exit Ticket — DNA Structure
      \`,
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
};`;

// Part 2: Semiconservative Replication
const part2 = `export const bioDnaReplicationPart2Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr2-intro',
      type: 'text' as const,
      content: \`
## Semiconservative Replication

**Part 2 of 7**

Three models for DNA replication were proposed:
1. **Conservative** — the original double helix remains intact; a completely new copy is made
2. **Semiconservative** — each new double helix consists of one original (parental) strand and one new strand
3. **Dispersive** — parental and new DNA are interspersed throughout both strands

The **Meselson-Stahl experiment** (1958) elegantly determined which model is correct.
      \`
    },
    {
      id: 'dr2-meselson',
      type: 'text' as const,
      content: \`
### The Meselson-Stahl Experiment

**Design:**
1. E. coli were grown for many generations in medium containing **heavy nitrogen** (\\\\(^{15}\\\\)N) — all DNA became uniformly "heavy"
2. Cells were transferred to medium containing **light nitrogen** (\\\\(^{14}\\\\)N)
3. DNA was extracted after each generation and centrifuged in a **CsCl density gradient**

**Results:**

| Generation | DNA bands observed | Interpretation |
|-----------|-------------------|----------------|
| 0 (all \\\\(^{15}\\\\)N) | One heavy band | All DNA is heavy |
| 1 (one round of replication in \\\\(^{14}\\\\)N) | One intermediate band | Each DNA molecule has one heavy and one light strand |
| 2 | Half intermediate, half light | Half the molecules retain a heavy strand; half are entirely light |
| 3 | 1/4 intermediate, 3/4 light | Pattern continues predictably |

**Conclusion:** DNA replication is **semiconservative** — each daughter molecule contains one parental strand and one newly synthesized strand.

> **Why this rules out other models:**
> - Conservative would show heavy + light bands at generation 1 (not intermediate)
> - Dispersive would show all intermediate bands that become progressively lighter (never a pure light band)
> - Only semiconservative predicts one intermediate band at generation 1, then both intermediate and light at generation 2
      \`
    },
    {
      id: 'dr2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Semiconservative Replication
      \`,
      exercise: {
        questions: [
          {
            question: 'In the Meselson-Stahl experiment, after 3 generations in light (14N) medium starting from all heavy (15N) DNA, what fraction of DNA molecules will have intermediate density?',
            options: [
              '1/2',
              '1/4 — each generation halves the number of molecules retaining a heavy parental strand',
              '3/4',
              '1/8'
            ],
            correctAnswer: 1,
            explanation: 'After generation 1: all intermediate (2/2). After generation 2: 2/4 intermediate, 2/4 light. After generation 3: 2/8 intermediate, 6/8 light. The number of intermediate molecules stays constant (2), but the total number doubles each generation. So 2/8 = 1/4.'
          },
          {
            question: 'If replication were conservative, what would Meselson and Stahl have observed after one generation?',
            options: [
              'One intermediate band',
              'Two bands — one heavy (the original intact molecule) and one light (the entirely new copy)',
              'One light band',
              'Three bands — heavy, intermediate, and light'
            ],
            correctAnswer: 1,
            explanation: 'Conservative replication predicts the original double helix stays fully heavy (both parental strands together) and a completely new light copy is made. This would produce two distinct bands — heavy and light — with NO intermediate. Meselson-Stahl observed intermediate, ruling this out.'
          }
        ]
      }
    },
    {
      id: 'dr2-origins',
      type: 'text' as const,
      content: \`
### Origins of Replication

DNA replication begins at specific sequences called **origins of replication**:

**Prokaryotes:**
- Single circular chromosome with **one origin** (oriC in E. coli)
- Replication proceeds **bidirectionally** from the origin, creating two replication forks that move in opposite directions and meet on the opposite side of the chromosome
- Total replication time: ~40 minutes

**Eukaryotes:**
- Multiple linear chromosomes with **many origins** (30,000-50,000 in human cells)
- Multiple origins allow the much larger genome to be replicated within the S phase time window
- Each origin fires once per S phase (controlled by the **licensing system** — pre-replication complexes mark origins for use)
- Adjacent origins define a **replicon** — the segment of DNA replicated from one origin
- Replication forks from adjacent origins meet and the replicons fuse

> **Why multiple origins?** Human DNA polymerase moves at ~50 nucleotides/second. With 6.4 billion bp and bidirectional replication from one origin, it would take ~2 years. Multiple origins reduce this to ~8 hours.
      \`
    },
    {
      id: 'dr2-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Replication Model
      \`,
      exercise: {
        questions: [
          {
            question: 'The replication model confirmed by Meselson and Stahl:',
            answer: 'semiconservative',
            acceptableAnswers: ['semiconservative', 'Semiconservative', 'semi-conservative'],
            placeholder: 'e.g. conservative'
          },
          {
            question: 'In E. coli, the single origin of replication is called:',
            answer: 'oriC',
            acceptableAnswers: ['oriC', 'OriC', 'oricC', 'ori C'],
            placeholder: 'e.g. ori1'
          },
          {
            question: 'The isotope of nitrogen used to make heavy DNA in the Meselson-Stahl experiment:',
            answer: '15N',
            acceptableAnswers: ['15N', 'N-15', 'nitrogen-15', '15-N'],
            placeholder: 'e.g. 14C'
          }
        ]
      }
    },
    {
      id: 'dr2-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'If a drug blocks the licensing of replication origins, what would be the consequence?',
            options: [
              'DNA would replicate faster',
              'Cells would be unable to initiate DNA replication at the blocked origins, preventing complete genome duplication and potentially arresting the cell cycle',
              'DNA would replicate conservatively instead',
              'The cell would use RNA instead of DNA'
            ],
            correctAnswer: 1,
            explanation: 'The licensing system ensures that pre-replication complexes are loaded at origins during G1. If licensing is blocked, origins cannot fire during S phase, DNA replication cannot initiate (or is incomplete), and the cell cannot proceed through the cell cycle.'
          }
        ]
      }
    }
  ]
};`;

// Part 3: Replication Machinery
const part3 = `export const bioDnaReplicationPart3Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr3-intro',
      type: 'text' as const,
      content: \`
## The Replication Machinery

**Part 3 of 7**

DNA replication requires a team of enzymes and proteins working together at the **replication fork** — the Y-shaped region where the parental double helix is unwound and new strands are synthesized.
      \`
    },
    {
      id: 'dr3-enzymes',
      type: 'text' as const,
      content: \`
### Key Enzymes and Proteins

| Enzyme/Protein | Function |
|---------------|----------|
| **Helicase** | Unwinds the double helix by breaking hydrogen bonds between bases; moves along the DNA using ATP hydrolysis |
| **Single-strand binding proteins (SSB)** | Bind to exposed single-stranded DNA to prevent reannealing and protect from nuclease degradation |
| **Topoisomerase (Gyrase in prokaryotes)** | Relieves torsional strain (supercoiling) ahead of the replication fork by cutting, swiveling, and re-joining the DNA backbone |
| **Primase** | RNA polymerase that synthesizes a short **RNA primer** (5-10 nucleotides) complementary to the template; provides the free 3'-OH needed by DNA polymerase |
| **DNA Polymerase III** (prokaryotes) | The main replicative polymerase; adds nucleotides to the 3' end of the primer/growing strand in the 5' → 3' direction |
| **DNA Polymerase I** (prokaryotes) | Removes RNA primers (5' → 3' exonuclease activity) and replaces them with DNA |
| **DNA Ligase** | Seals the nick (phosphodiester bond) between adjacent Okazaki fragments after primer removal |
| **Sliding clamp (PCNA in eukaryotes)** | Ring-shaped protein that encircles DNA and tethers DNA polymerase to the template, increasing processivity |
| **Clamp loader** | Uses ATP to load the sliding clamp onto DNA at primer-template junctions |

> **Why primers?** DNA polymerase can only ADD nucleotides to an existing 3'-OH group.  It cannot start a new strand from scratch.  Primase (an RNA polymerase) CAN start de novo, providing the initial 3'-OH.
      \`
    },
    {
      id: 'dr3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Replication Enzymes
      \`,
      exercise: {
        questions: [
          {
            question: 'Why is an RNA primer necessary for DNA replication to begin?',
            options: [
              'DNA polymerase requires RNA as a template',
              'DNA polymerase can only extend an existing strand — it needs a free 3\\\\u2019-OH group to add nucleotides. It cannot initiate a new strand de novo.',
              'RNA primers protect the DNA from damage',
              'Primers speed up helicase activity'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase has a fundamental limitation — it can only add nucleotides to the 3\\\\u2019-OH of an existing nucleic acid chain. Primase synthesizes a short RNA primer to provide this initial 3\\\\u2019-OH, which DNA polymerase then extends with deoxyribonucleotides.'
          },
          {
            question: 'If topoisomerase is inhibited while helicase continues to unwind DNA, what occurs?',
            options: [
              'DNA replication speeds up',
              'Positive supercoiling accumulates ahead of the fork, eventually generating so much torsional strain that the fork cannot advance — replication stalls',
              'The DNA spontaneously unwinds',
              'Primers cannot be synthesized'
            ],
            correctAnswer: 1,
            explanation: 'As helicase unwinds the helix, it creates positive supercoils (overwinding) ahead of the fork. Without topoisomerase to relieve this tension, the DNA becomes so tightly wound that helicase can no longer separate the strands. Many antibiotics (fluoroquinolones) and anticancer drugs (camptothecin) target topoisomerases.'
          }
        ]
      }
    },
    {
      id: 'dr3-leading-lagging',
      type: 'text' as const,
      content: \`
### Leading and Lagging Strands

Because DNA polymerase can only synthesize in the **5' → 3' direction**, and the two parental strands are antiparallel, the two daughter strands are synthesized differently:

**Leading strand:**
- Template runs 3' → 5' (so new strand grows 5' → 3' toward the fork)
- Synthesized **continuously** with a single primer
- DNA polymerase moves in the same direction as the fork

**Lagging strand:**
- Template runs 5' → 3' (so new strand must grow 5' → 3' AWAY from the fork)
- Synthesized **discontinuously** as a series of short fragments called **Okazaki fragments**
  - ~1000-2000 nt in prokaryotes; ~100-200 nt in eukaryotes
- Each Okazaki fragment requires its own RNA primer
- After synthesis, **DNA Polymerase I** removes the RNA primers and fills in with DNA
- **DNA Ligase** seals the remaining nicks, joining the Okazaki fragments into a continuous strand

> **The lagging strand is the "complex" strand** — it requires repeated cycles of priming, extension, primer removal, gap filling, and ligation.  This makes lagging strand synthesis more error-prone and slower than leading strand synthesis.
      \`
    },
    {
      id: 'dr3-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Leading and Lagging
      \`,
      exercise: {
        questions: [
          {
            question: 'A mutation knocks out DNA ligase activity.  Which strand would be most severely affected?',
            options: [
              'The leading strand — it needs ligase to connect to the origin',
              'The lagging strand — without ligase, Okazaki fragments cannot be joined into a continuous strand, resulting in fragmented DNA',
              'Both equally — ligase is needed for both',
              'Neither — ligase is not essential'
            ],
            correctAnswer: 1,
            explanation: 'The leading strand is synthesized continuously and needs only one ligation event. The lagging strand consists of hundreds or thousands of Okazaki fragments, each needing to be ligated to the next. Without ligase, the lagging strand remains in fragments — a severe defect.'
          },
          {
            question: 'How many RNA primers are needed to replicate a linear DNA molecule with one origin of replication?',
            options: [
              'One',
              'Two — one for each leading strand',
              'Many — one for each leading strand PLUS one for every Okazaki fragment on each lagging strand',
              'None — eukaryotes do not use primers'
            ],
            correctAnswer: 2,
            explanation: 'Bidirectional replication from one origin creates two replication forks. Each fork has one leading strand (one primer) and one lagging strand (many primers — one per Okazaki fragment). Total primers = 2 (leading strands) + many (all Okazaki fragments) = many primers.'
          }
        ]
      }
    },
    {
      id: 'dr3-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Replication Machinery
      \`,
      exercise: {
        questions: [
          {
            question: 'Short DNA fragments synthesized on the lagging strand:',
            answer: 'Okazaki fragments',
            acceptableAnswers: ['Okazaki fragments', 'okazaki fragments', 'Okazaki', 'okazaki'],
            placeholder: 'e.g. restriction fragments'
          },
          {
            question: 'The enzyme that synthesizes RNA primers:',
            answer: 'primase',
            acceptableAnswers: ['primase', 'Primase', 'RNA primase'],
            placeholder: 'e.g. polymerase'
          },
          {
            question: 'The enzyme that seals nicks between Okazaki fragments:',
            answer: 'DNA ligase',
            acceptableAnswers: ['DNA ligase', 'ligase', 'Ligase', 'DNA Ligase'],
            placeholder: 'e.g. helicase'
          }
        ]
      }
    },
    {
      id: 'dr3-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'An antibiotic targets the bacterial DNA gyrase (topoisomerase II).  Why would this drug selectively affect bacteria without harming human cells?',
            options: [
              'Human cells do not have topoisomerases',
              'Bacterial DNA gyrase is structurally different from eukaryotic topoisomerases — the drug binds specifically to the bacterial enzyme. Human topoisomerases are not affected at therapeutic doses.',
              'Human cells do not replicate their DNA',
              'The antibiotic is only taken up by bacterial cells'
            ],
            correctAnswer: 1,
            explanation: 'Bacterial DNA gyrase (topoisomerase II) and eukaryotic topoisomerases are related but structurally different. Fluoroquinolone antibiotics (e.g., ciprofloxacin) specifically inhibit the bacterial enzyme. Human topoisomerase II is sufficiently different that it is not targeted at therapeutic doses.'
          }
        ]
      }
    }
  ]
};`;

// Part 4: Proofreading and Repair
const part4 = `export const bioDnaReplicationPart4Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr4-intro',
      type: 'text' as const,
      content: \`
## Proofreading and DNA Repair

**Part 4 of 7**

DNA replication must be extraordinarily accurate — the error rate is approximately **1 mistake per 10\\\\(^{10}\\\\) base pairs** in E. coli.  This remarkable fidelity is achieved through three layers of error correction.
      \`
    },
    {
      id: 'dr4-fidelity',
      type: 'text' as const,
      content: \`
### Three Layers of Replication Fidelity

**Layer 1: Base selection by DNA polymerase (~10\\\\(^5\\\\) accuracy)**
- DNA polymerase has a tight active site that favors correct Watson-Crick base pairs (A-T, G-C)
- Incorrect bases fit poorly and are rejected before incorporation
- Error rate: ~1 in 100,000

**Layer 2: Proofreading (3' → 5' exonuclease activity, ~10\\\\(^2\\\\) improvement)**
- DNA polymerase has a built-in editor: if a wrong nucleotide is incorporated, the polymerase detects the mismatch (distortion in the helix)
- The polymerase reverses direction and removes the incorrect nucleotide using **3' → 5' exonuclease** activity
- A correct nucleotide is then inserted
- Combined error rate: ~1 in 10\\\\(^7\\\\)

**Layer 3: Mismatch repair (MMR, ~10\\\\(^3\\\\) improvement)**
- After replication, mismatch repair proteins scan the newly synthesized DNA
- They detect and correct remaining mismatches
- The key challenge: distinguishing which strand has the error (old vs. new strand)
  - In E. coli: the parental strand is methylated (GATC sites); the new strand is not yet methylated, so repair enzymes know to fix the new strand
  - In eukaryotes: the new strand is identified by the presence of nicks (gaps not yet sealed)
- Combined final error rate: ~1 in 10\\\\(^{10}\\\\)
      \`
    },
    {
      id: 'dr4-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Proofreading and Repair
      \`,
      exercise: {
        questions: [
          {
            question: 'A mutant DNA polymerase lacks 3\\\\u2019 to 5\\\\u2019 exonuclease activity but retains normal polymerase activity. What is the predicted effect on mutation rates?',
            options: [
              'No effect — other repair systems compensate completely',
              'The mutation rate increases approximately 100-fold, as the proofreading step is lost; base selection and post-replication repair still function',
              'DNA replication stops entirely',
              'The mutation rate decreases because the polymerase works more carefully'
            ],
            correctAnswer: 1,
            explanation: 'Proofreading (3\\\\u2019-5\\\\u2019 exonuclease) typically provides a 100-fold improvement in accuracy. Losing it increases the error rate from ~1/10^10 to ~1/10^8 (base selection and mismatch repair still operate). This is a significant increase in mutation rate.'
          },
          {
            question: 'In mismatch repair, how does the cell distinguish the parental (correct) strand from the daughter (potentially incorrect) strand in E. coli?',
            options: [
              'The parental strand is longer',
              'The parental strand is methylated at GATC sequences; the newly synthesized strand is not yet methylated, directing repair to the unmethylated (new) strand',
              'The parental strand is made of RNA',
              'The cell cannot distinguish them'
            ],
            correctAnswer: 1,
            explanation: 'E. coli uses Dam methylase to add methyl groups to GATC sequences. Immediately after replication, only the parental strand is methylated (the new strand has not yet been methylated). Mismatch repair proteins use this asymmetry to determine which strand to repair.'
          }
        ]
      }
    },
    {
      id: 'dr4-damage',
      type: 'text' as const,
      content: \`
### DNA Damage and Additional Repair Mechanisms

Beyond replication errors, DNA is constantly damaged by environmental and metabolic factors:

**Types of DNA damage:**
- **Deamination:** Spontaneous loss of an amino group from cytosine, converting it to uracil (if not repaired, G-C becomes A-T after replication)
- **Depurination:** Loss of a purine base (A or G) from the sugar-phosphate backbone (~5000 per cell per day)
- **Thymine dimers:** UV light causes adjacent thymines to form covalent bonds (pyrimidine dimers), distorting the helix
- **Oxidative damage:** Reactive oxygen species (ROS) modify bases (e.g., 8-oxoguanine mispairs with adenine)
- **Alkylation:** Chemical agents add alkyl groups to bases

**Repair pathways:**

| Pathway | Damage type | Mechanism |
|---------|------------|-----------|
| **Base excision repair (BER)** | Modified/damaged single bases | Glycosylase removes damaged base → AP endonuclease cuts backbone → polymerase fills gap → ligase seals |
| **Nucleotide excision repair (NER)** | Bulky lesions (thymine dimers, crosslinks) | Endonucleases cut on both sides of damage → ~12 nt oligonucleotide removed → polymerase fills → ligase seals |
| **Homologous recombination (HR)** | Double-strand breaks (DSBs) | Uses sister chromatid as template for accurate repair — only in S/G\\\\(_2\\\\) phase |
| **Non-homologous end joining (NHEJ)** | Double-strand breaks | Directly ligates broken ends — faster but error-prone (may lose bases) |

> **Xeroderma pigmentosum (XP):** A genetic disease caused by mutations in NER genes.  Patients cannot repair UV-induced thymine dimers and are extremely sensitive to sunlight, with high rates of skin cancer.
      \`
    },
    {
      id: 'dr4-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — DNA Repair
      \`,
      exercise: {
        questions: [
          {
            question: 'A patient with xeroderma pigmentosum develops skin cancer after minimal sun exposure. Which DNA repair pathway is defective?',
            options: [
              'Mismatch repair',
              'Nucleotide excision repair (NER) — the pathway that removes UV-induced thymine dimers and other bulky DNA lesions',
              'Base excision repair',
              'Homologous recombination'
            ],
            correctAnswer: 1,
            explanation: 'XP is caused by mutations in genes encoding NER proteins. NER removes thymine dimers caused by UV radiation. Without functional NER, these dimers persist, block replication, and if bypassed by error-prone polymerases, cause mutations that lead to cancer.'
          }
        ]
      }
    },
    {
      id: 'dr4-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — DNA Repair
      \`,
      exercise: {
        questions: [
          {
            question: 'The UV-induced lesion where adjacent pyrimidines become covalently linked:',
            answer: 'thymine dimer',
            acceptableAnswers: ['thymine dimer', 'Thymine dimer', 'pyrimidine dimer', 'thymine dimers'],
            placeholder: 'e.g. deletion mutation'
          },
          {
            question: 'The repair pathway that uses a sister chromatid as a template for accurate double-strand break repair:',
            answer: 'homologous recombination',
            acceptableAnswers: ['homologous recombination', 'HR', 'Homologous recombination', 'homologous recombination repair'],
            placeholder: 'e.g. NHEJ'
          }
        ]
      }
    },
    {
      id: 'dr4-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'Why is homologous recombination (HR) a more accurate repair mechanism for double-strand breaks than non-homologous end joining (NHEJ)?',
            options: [
              'HR is faster than NHEJ',
              'HR uses the sister chromatid (perfect copy) as a template to restore the original sequence; NHEJ simply ligates broken ends without a template, often losing or adding nucleotides at the junction',
              'NHEJ only works in prokaryotes',
              'HR does not require any enzymes'
            ],
            correctAnswer: 1,
            explanation: 'HR uses the intact sister chromatid as a template for synthesis across the break, restoring the original sequence exactly. NHEJ processes and ligates the broken ends directly, often resulting in small deletions or insertions at the repair site. However, HR is only available in S/G2 phase when a sister chromatid exists.'
          }
        ]
      }
    }
  ]
};`;

// Part 5: Telomeres and the End Replication Problem
const part5 = `export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr5-intro',
      type: 'text' as const,
      content: \`
## Telomeres and the End Replication Problem

**Part 5 of 7**

Linear chromosomes in eukaryotes face a unique challenge: the **end replication problem**.  This problem does not exist in prokaryotes because their chromosomes are circular.
      \`
    },
    {
      id: 'dr5-problem',
      type: 'text' as const,
      content: \`
### The End Replication Problem

**The problem:**
- On the lagging strand, an RNA primer must initiate each Okazaki fragment
- At the very end of the chromosome (3' end of the template), the last RNA primer is synthesized, and DNA polymerase extends from it
- When this primer is removed, there is a short gap at the 5' end of the new strand that CANNOT be filled — there is no upstream 3'-OH for DNA polymerase to extend from
- Result: the daughter strand is slightly shorter than the parent

**Consequence:** With each round of replication, chromosomes get shorter at both ends.  After many divisions, essential genes near the ends would be lost.

### Telomeres — The Protective Solution

**Telomeres** are repetitive, non-coding DNA sequences at the ends of linear chromosomes:
- Human telomere repeat: **TTAGGG** (repeated 1000-2000 times, totaling 5-15 kb)
- Telomeres provide a "buffer zone" of expendable sequence — shortening removes repeats, not genes
- Telomeres also form a protective structure called a **T-loop** (the 3' overhang folds back and invades the double-stranded region) with a protein complex called **shelterin** that prevents the cell from recognizing chromosome ends as DNA breaks

> **Hayflick Limit:** Normal somatic cells can divide approximately **50-70 times** before telomeres become critically short.  At this point, cells enter **replicative senescence** (a permanent G\\\\(_0\\\\) state) or undergo apoptosis.  This is a tumor-suppression mechanism.
      \`
    },
    {
      id: 'dr5-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint
      \`,
      exercise: {
        questions: [
          {
            question: 'Why does the end replication problem only affect eukaryotes, not prokaryotes?',
            options: [
              'Prokaryotes have smaller genomes',
              'Prokaryotic chromosomes are circular — there are no "ends" where incomplete replication can occur; the lagging strand is eventually completed all the way around',
              'Prokaryotes do not use Okazaki fragments',
              'Prokaryotic DNA polymerase can synthesize in both directions'
            ],
            correctAnswer: 1,
            explanation: 'Circular chromosomes have no free ends. The last Okazaki fragment on the lagging strand can be completed by extending from the adjacent fragment or by closing the circle. Only linear chromosomes have terminal sequences that cannot be fully replicated.'
          },
          {
            question: 'What would happen if telomeres were removed from a chromosome?',
            options: [
              'Nothing — telomeres have no function',
              'The chromosome ends would be recognized as double-strand breaks, triggering DNA repair (end-to-end fusions via NHEJ) or apoptosis; coding genes at the ends would also be lost during replication',
              'The chromosome would replicate faster',
              'The cell would become cancerous immediately'
            ],
            correctAnswer: 1,
            explanation: 'Without telomeres and their associated shelterin complex, chromosome ends resemble DSBs. The cell tries to "repair" them by fusing chromosomes together (creating dicentric chromosomes) or by triggering checkpoint-mediated apoptosis. Additionally, essential genes near the ends would be eroded.'
          }
        ]
      }
    },
    {
      id: 'dr5-telomerase',
      type: 'text' as const,
      content: \`
### Telomerase — Extending the Ends

**Telomerase** is a specialized enzyme that extends telomeres, counteracting the end replication problem:

**Structure:**
- Telomerase is a **ribonucleoprotein** (protein + RNA)
- Contains **TERT** (telomerase reverse transcriptase) — the catalytic protein subunit
- Contains **TERC** (telomerase RNA component) — includes a template sequence complementary to the telomeric repeat

**Mechanism:**
1. The TERC template (3'-AAUCCC-5') base-pairs with the 3' overhang of the telomere
2. TERT extends the 3' end using the RNA template (reverse transcription — RNA → DNA)
3. Telomerase translocates and repeats, adding multiple TTAGGG repeats
4. Primase then synthesizes a primer on the extended 3' overhang
5. DNA polymerase fills in the complementary strand
6. The primer is removed, leaving a slightly extended chromosome

**Telomerase expression:**
- **Active** in: germ cells, stem cells, early embryonic cells — these cells must divide indefinitely
- **Inactive** in: most somatic cells — contributes to the Hayflick limit and aging
- **Reactivated** in: ~85-90% of cancers — telomerase reactivation grants immortality

> **Cancer Connection:** Telomerase reactivation is one of the hallmarks of cancer. Drugs targeting telomerase (e.g., imetelstat) are being developed as potential cancer therapies.  However, targeting telomerase could also affect stem cells, posing a therapeutic challenge.
      \`
    },
    {
      id: 'dr5-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Telomerase
      \`,
      exercise: {
        questions: [
          {
            question: 'Telomerase contains an RNA component (TERC). Why is this RNA essential?',
            options: [
              'It provides structural stability only',
              'The RNA serves as a template for synthesizing the telomeric DNA repeat — TERT (the enzyme) uses the RNA template to add TTAGGG repeats to the chromosome end via reverse transcription',
              'It catalyzes the reaction',
              'It protects TERT from degradation'
            ],
            correctAnswer: 1,
            explanation: 'TERC contains a short template sequence (complementary to the telomere repeat) that TERT uses to synthesize new telomeric DNA. This makes telomerase a reverse transcriptase — it copies RNA into DNA. Without TERC, TERT has no template and cannot extend telomeres.'
          },
          {
            question: 'If telomerase is inhibited in cancer cells, what is the predicted long-term effect?',
            options: [
              'The cells would die immediately',
              'Over multiple divisions, telomeres would progressively shorten until they reach critical length, triggering senescence or apoptosis — the cancer cells would eventually stop dividing',
              'The cells would switch to a different replication mechanism',
              'Nothing — cancer cells do not need telomerase'
            ],
            correctAnswer: 1,
            explanation: 'Telomerase inhibition does not kill cells immediately. Rather, with each division, telomeres shorten further. After many divisions (depends on initial telomere length), telomeres become critically short, triggering checkpoint-mediated senescence or apoptosis. This is why telomerase inhibitors require prolonged treatment.'
          }
        ]
      }
    },
    {
      id: 'dr5-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Telomeres
      \`,
      exercise: {
        questions: [
          {
            question: 'The repetitive DNA sequence at human chromosome ends:',
            answer: 'TTAGGG',
            acceptableAnswers: ['TTAGGG', 'ttaggg'],
            placeholder: 'e.g. AATCGG'
          },
          {
            question: 'The approximate maximum number of times a normal somatic cell can divide:',
            answer: '50-70',
            acceptableAnswers: ['50-70', '50', '50 to 70', 'about 50', 'approximately 50'],
            placeholder: 'e.g. 100'
          },
          {
            question: 'The protein subunit of telomerase that acts as a reverse transcriptase:',
            answer: 'TERT',
            acceptableAnswers: ['TERT', 'tert', 'telomerase reverse transcriptase'],
            placeholder: 'e.g. TERC'
          }
        ]
      }
    },
    {
      id: 'dr5-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'Dolly the sheep (the first mammal cloned from an adult somatic cell) had shortened telomeres compared to age-matched naturally born sheep. Why?',
            options: [
              'Cloning damages DNA',
              'The nucleus used for cloning came from an adult cell that had already undergone many divisions and had shortened telomeres; the telomeres were not fully restored during cloning',
              'Sheep do not have telomerase',
              'Dolly was genetically different from normal sheep'
            ],
            correctAnswer: 1,
            explanation: 'The donor nucleus had the shortened telomeres characteristic of an adult somatic cell. During reprogramming and subsequent development, telomeres were not fully restored to embryonic length. This meant Dolly effectively started life with "older" chromosomes, which may have contributed to her premature aging.'
          }
        ]
      }
    }
  ]
};`;

// Part 6: Problem-Solving Workshop
const part6 = `export const bioDnaReplicationPart6Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr6-intro',
      type: 'text' as const,
      content: \`
## Problem-Solving Workshop — DNA Replication

**Part 6 of 7**

This workshop applies DNA replication concepts to experimental scenarios and quantitative problems.
      \`
    },
    {
      id: 'dr6-scenario1',
      type: 'text' as const,
      content: \`
### Scenario 1: Replication Fork Analysis

A researcher treats E. coli with radioactive thymidine (\\\\(^3\\\\)H-thymidine) for a brief pulse, then chases with unlabeled thymidine. After autoradiography of the replicating DNA:

- The label appears as a band along the newly synthesized DNA
- The leading strand shows a continuous band of label
- The lagging strand shows a series of short labeled segments (Okazaki fragments) with gaps where primers were located

**If the pulse is very short** (seconds), only the most recently synthesized DNA is labeled.  The leading strand shows label near the fork, while the lagging strand shows label in the most recently completed Okazaki fragment.

**If the chase is long enough**, DNA Pol I replaces primers with DNA and ligase joins fragments, so the lagging strand eventually looks continuous.
      \`
    },
    {
      id: 'dr6-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 1 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'If DNA ligase is mutated (non-functional), what would autoradiography of the replicated DNA reveal?',
            options: [
              'Normal continuous strands on both sides',
              'The leading strand would appear normal and continuous; the lagging strand would remain fragmented (Okazaki fragments not joined) because ligase cannot seal the nicks between them',
              'Both strands would be fragmented',
              'No replication would occur'
            ],
            correctAnswer: 1,
            explanation: 'The leading strand is synthesized as one continuous piece — no ligation needed (beyond the initial primer replacement). The lagging strand consists of many Okazaki fragments that require ligase to be joined. Without ligase, Okazaki fragments remain separate, and the lagging strand is fragmented.'
          }
        ]
      }
    },
    {
      id: 'dr6-scenario2',
      type: 'text' as const,
      content: \`
### Scenario 2: Density Gradient Predictions

Starting with one double-stranded DNA molecule where BOTH strands are labeled with \\\\(^{15}\\\\)N (heavy):

**After 1 generation in \\\\(^{14}\\\\)N:**
- 2 molecules, each with one \\\\(^{15}\\\\)N strand + one \\\\(^{14}\\\\)N strand = **2 intermediate**

**After 2 generations in \\\\(^{14}\\\\)N:**
- 4 molecules total
- 2 have one \\\\(^{15}\\\\)N + one \\\\(^{14}\\\\)N = **2 intermediate**  
- 2 have both \\\\(^{14}\\\\)N = **2 light**

**After n generations:**
- Total molecules = \\\\(2^n\\\\)
- Intermediate molecules = **always 2** (the two original parental strands + a new partner)
- Light molecules = \\\\(2^n - 2\\\\)
- Heavy molecules = **0** (after generation 1)

> **Quantitative AP Tip:** The number of intermediate-density molecules never changes (always 2) because the two original heavy strands are conserved indefinitely, each paired with a new light strand.
      \`
    },
    {
      id: 'dr6-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 2 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'After 5 generations of replication in 14N medium (starting from all 15N DNA), how many total DNA molecules are there and how many are intermediate density?',
            options: [
              '32 total, 16 intermediate',
              '32 total, 2 intermediate and 30 light',
              '64 total, 2 intermediate',
              '10 total, 5 intermediate'
            ],
            correctAnswer: 1,
            explanation: 'After 5 generations: 2^5 = 32 total molecules. The two original 15N strands are each paired with a 14N strand = 2 intermediate molecules. The remaining 30 molecules are all-14N (light). The number of intermediate molecules is always exactly 2.'
          }
        ]
      }
    },
    {
      id: 'dr6-input',
      type: 'input-boxes' as const,
      content: \`
### Apply Your Knowledge
      \`,
      exercise: {
        questions: [
          {
            question: 'After 4 generations of semiconservative replication, one original DNA molecule produces how many total molecules?',
            answer: '16',
            acceptableAnswers: ['16', 'sixteen', '2^4'],
            placeholder: 'e.g. 8'
          },
          {
            question: 'Of those molecules, how many contain a parental (original) strand?',
            answer: '2',
            acceptableAnswers: ['2', 'two'],
            placeholder: 'e.g. 4'
          }
        ]
      }
    },
    {
      id: 'dr6-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Workshop
      \`,
      exercise: {
        questions: [
          {
            question: 'BrdU (bromodeoxyuridine) is a thymidine analog that is incorporated into newly synthesized DNA and can be detected by antibodies. If cells replicate once in BrdU, then once without BrdU, what pattern of BrdU labeling would be seen in the daughter chromosomes?',
            options: [
              'All four chromatids would be labeled',
              'In the second division: each replicated chromosome would have one chromatid labeled (containing the BrdU strand from round 1) and one unlabeled (containing only thymidine), demonstrating semiconservative replication at the chromosomal level',
              'No chromatids would be labeled — BrdU is diluted out',
              'Only the leading strand would contain BrdU'
            ],
            correctAnswer: 1,
            explanation: 'After replication in BrdU (round 1), both daughter molecules have one BrdU strand and one original strand. After replication WITHOUT BrdU (round 2), each of the two chromatids contains either the BrdU strand + unlabeled new strand (labeled chromatid) or the original strand + unlabeled new strand (unlabeled chromatid). This produces a "harlequin" pattern visible by staining.'
          }
        ]
      }
    }
  ]
};`;

// Part 7: AP Review
const part7 = `export const bioDnaReplicationPart7Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr7-intro',
      type: 'text' as const,
      content: \`
## AP Review — DNA Replication

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating all DNA replication concepts.
      \`
    },
    {
      id: 'dr7-summary',
      type: 'text' as const,
      content: \`
### Key Principles Summary

1. DNA replication is **semiconservative** — each daughter molecule has one parental and one new strand (Meselson-Stahl)
2. Replication is **bidirectional** from origins and proceeds in the **5' → 3' direction** only
3. The **leading strand** is continuous; the **lagging strand** is discontinuous (Okazaki fragments)
4. **Primase** provides RNA primers; **DNA Polymerase III** extends; **Pol I** removes primers; **Ligase** seals nicks
5. Three layers of fidelity: base selection, proofreading (3'→5' exonuclease), and mismatch repair
6. Multiple DNA repair pathways (BER, NER, HR, NHEJ) protect against different types of damage
7. **Telomeres** protect chromosome ends; **telomerase** counteracts the end replication problem
      \`
    },
    {
      id: 'dr7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 1
      \`,
      exercise: {
        questions: [
          {
            question: 'A segment of single-stranded DNA template reads 3\\\\u2019-TACGAATTCCAT-5\\\\u2019. What is the sequence of the complementary strand synthesized by DNA polymerase?',
            options: [
              '5\\\\u2019-TACGAATTCCAT-3\\\\u2019',
              '5\\\\u2019-ATGCTTAAGGTA-3\\\\u2019',
              '3\\\\u2019-ATGCTTAAGGTA-5\\\\u2019',
              '5\\\\u2019-UACGAAUUCCAU-3\\\\u2019'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase synthesizes in the 5\\\\u2019 to 3\\\\u2019 direction, reading the template 3\\\\u2019 to 5\\\\u2019. Complementary pairing: T-A, A-T, C-G, G-C, A-T, A-T, T-A, T-A, C-G, C-G, A-T, T-A. New strand: 5\\\\u2019-ATGCTTAAGGTA-3\\\\u2019.'
          },
          {
            question: 'BRCA1 and BRCA2 are important for homologous recombination repair of double-strand breaks. Mutations in these genes increase breast and ovarian cancer risk. Which of the following best explains this connection?',
            options: [
              'BRCA mutations directly cause cells to grow faster',
              'Without functional HR repair, double-strand breaks are either left unrepaired or repaired by error-prone NHEJ, leading to increased genomic instability and accumulation of cancer-causing mutations',
              'BRCA proteins prevent all mutations',
              'BRCA mutations only affect germ cells'
            ],
            correctAnswer: 1,
            explanation: 'BRCA1/2 are essential for homologous recombination, the most accurate DSB repair pathway. Without them, cells rely on error-prone NHEJ or leave breaks unrepaired. This causes accumulating mutations and chromosomal rearrangements — genomic instability that drives cancer development.'
          }
        ]
      }
    },
    {
      id: 'dr7-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 2
      \`,
      exercise: {
        questions: [
          {
            question: 'Aphidicolin is a drug that specifically inhibits eukaryotic DNA polymerase alpha and delta but not mitochondrial DNA polymerase gamma. If aphidicolin is applied to dividing cells, which is most accurate?',
            options: [
              'Both nuclear and mitochondrial DNA replication stop',
              'Nuclear DNA replication is inhibited (cells arrest in S phase), but mitochondrial DNA continues to replicate because it uses a different, unaffected polymerase',
              'Only mitochondrial DNA replication stops',
              'Protein synthesis is blocked'
            ],
            correctAnswer: 1,
            explanation: 'Aphidicolin specifically targets replicative polymerases alpha and delta in the nucleus. Mitochondrial DNA polymerase gamma is structurally distinct and unaffected. This differential sensitivity reflects the endosymbiotic origin of mitochondria — their replication machinery derives from ancestral bacteria.'
          },
          {
            question: 'A researcher sequences a newly replicated DNA strand and finds that ~5% of the nucleotides are ribonucleotides (RNA). What is the most likely explanation?',
            options: [
              'DNA polymerase incorporated the wrong nucleotides',
              'The RNA primers have not yet been completely removed and replaced with DNA by the repair/replacement mechanism',
              'Reverse transcription occurred',
              'The cell is undergoing transcription, not replication'
            ],
            correctAnswer: 1,
            explanation: 'During lagging strand synthesis, each Okazaki fragment starts with an RNA primer (~5-10 ribonucleotides). If the observed strand still contains ribonucleotides, it indicates that DNA Pol I has not yet fully removed all primers and replaced them with DNA. In a completed strand, no ribonucleotides should remain.'
          },
          {
            question: 'Werner syndrome is caused by a mutation in a RecQ helicase involved in various DNA repair and replication processes. Patients show premature aging. How might this relate to DNA replication?',
            options: [
              'Werner syndrome only affects RNA processing',
              'Defective helicase leads to impaired DNA repair, replication fork stalling, genomic instability, and accelerated telomere shortening — all contributing to premature cellular aging and senescence',
              'Werner syndrome causes cells to divide too quickly',
              'The mutation increases telomerase activity'
            ],
            correctAnswer: 1,
            explanation: 'RecQ helicases are crucial for resolving DNA structures during replication and repair. Without WRN helicase, replication forks stall more frequently, DNA damage accumulates, and telomere maintenance is impaired. The resulting genomic instability causes cells to senesce prematurely, explaining the accelerated aging phenotype.'
          }
        ]
      }
    },
    {
      id: 'dr7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Comprehensive Matching
      \`,
      exercise: {
        questions: [
          {
            question: 'Unwinds the double helix by breaking hydrogen bonds:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Helicase'
          },
          {
            question: 'Synthesizes the RNA primer:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Primase'
          },
          {
            question: 'Relieves supercoiling ahead of the fork:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Topoisomerase'
          },
          {
            question: 'Joins Okazaki fragments by sealing phosphodiester bonds:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Ligase'
          },
          {
            question: 'Main replicative polymerase that extends primers:',
            options: ['DNA polymerase I', 'Helicase', 'Primase', 'Ligase', 'DNA polymerase III'],
            correctAnswer: 'DNA polymerase III'
          }
        ]
      }
    },
    {
      id: 'dr7-input',
      type: 'input-boxes' as const,
      content: \`
### Final Review
      \`,
      exercise: {
        questions: [
          {
            question: 'The genetic disease caused by defective nucleotide excision repair:',
            answer: 'xeroderma pigmentosum',
            acceptableAnswers: ['xeroderma pigmentosum', 'Xeroderma pigmentosum', 'XP', 'xeroderma'],
            placeholder: 'e.g. cystic fibrosis'
          },
          {
            question: 'The experiment that proved semiconservative replication (last names of researchers):',
            answer: 'Meselson-Stahl',
            acceptableAnswers: ['Meselson-Stahl', 'Meselson and Stahl', 'meselson-stahl', 'Meselson Stahl'],
            placeholder: 'e.g. Watson-Crick'
          }
        ]
      }
    },
    {
      id: 'dr7-exit',
      type: 'multiple-choice' as const,
      content: \`
### Final Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'Integration: A pharmaceutical company develops a drug that inhibits primase. What effects would this drug have on DNA replication?',
            options: [
              'Only the leading strand would be affected',
              'DNA replication would be almost completely blocked — no primers can be synthesized, so neither the leading strand (needs one primer) nor the lagging strand (needs many primers) can be initiated. DNA polymerase cannot start synthesis without a primer.',
              'Only Okazaki fragment synthesis would stop',
              'DNA would replicate normally using DNA polymerase alone'
            ],
            correctAnswer: 1,
            explanation: 'Both the leading and lagging strands require RNA primers to initiate synthesis. The leading strand needs one primer; the lagging strand needs a primer for every Okazaki fragment. Inhibiting primase would prevent ANY new DNA synthesis, completely blocking replication. This effects both strands.'
          }
        ]
      }
    }
  ]
};`;

// Write all files
const files = {
  'bio-dna-replication-part1.ts': part1,
  'bio-dna-replication-part2.ts': part2,
  'bio-dna-replication-part3.ts': part3,
  'bio-dna-replication-part4.ts': part4,
  'bio-dna-replication-part5.ts': part5,
  'bio-dna-replication-part6.ts': part6,
  'bio-dna-replication-part7.ts': part7,
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(BASE, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${filePath} (${content.length} chars)`);
}

console.log('Done! All 7 dna-replication parts written.');
