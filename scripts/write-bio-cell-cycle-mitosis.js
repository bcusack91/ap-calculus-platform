const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src/data/interactive-lessons');

// Part 1: Cell Cycle Phases
const part1 = `export const bioCellCyclePart1Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc1-intro',
      type: 'text' as const,
      content: \`
## The Cell Cycle — An Overview

**Part 1 of 7**

Every living organism depends on cell division for growth, repair, and reproduction.  The **cell cycle** is the ordered sequence of events that a cell undergoes from one division to the next.

A typical mammalian cell cycle lasts about **24 hours**, though this varies enormously — some embryonic cells divide in 8 minutes, while liver cells may go years between divisions.
      \`
    },
    {
      id: 'cc1-phases',
      type: 'text' as const,
      content: \`
### Phases of the Cell Cycle

The cell cycle consists of two major periods:

**1. Interphase** (~90% of the cell cycle)
- **G\\\\(_1\\\\) phase** (Gap 1) — cell growth, organelle duplication, preparation for DNA synthesis
- **S phase** (Synthesis) — DNA replication; each chromosome is duplicated into two sister chromatids joined at the centromere
- **G\\\\(_2\\\\) phase** (Gap 2) — continued growth, preparation for mitosis; error-checking of replicated DNA

**2. Mitotic (M) phase** (~10% of the cell cycle)
- **Mitosis** — division of the nucleus (karyokinesis) into two genetically identical daughter nuclei
- **Cytokinesis** — division of the cytoplasm to form two separate daughter cells

| Phase | Duration (typical) | Key Events |
|-------|-------------------|------------|
| G\\\\(_1\\\\) | 10-12 hours | Growth, protein synthesis, organelle production |
| S | 6-8 hours | DNA replication |
| G\\\\(_2\\\\) | 3-4 hours | Growth, preparation for mitosis, checkpoint |
| M (mitosis + cytokinesis) | ~1 hour | Nuclear and cytoplasmic division |

> **G\\\\(_0\\\\) Phase:** Some cells exit the cell cycle and enter a quiescent state called G\\\\(_0\\\\). These cells are metabolically active but do not divide. Examples include neurons and mature muscle cells.  Some G\\\\(_0\\\\) cells can re-enter the cycle if stimulated (e.g., hepatocytes after liver damage).
      \`
    },
    {
      id: 'cc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Cell Cycle Overview
      \`,
      exercise: {
        questions: [
          {
            question: 'A student observes cells under a microscope and finds that 90% of the cells appear to be in interphase. What can be concluded?',
            options: [
              'Most cells are dead',
              'Interphase is the longest phase of the cell cycle, so at any given moment, the majority of dividing cells will be in interphase',
              'The cells have stopped dividing',
              'The microscope is not powerful enough to see mitotic cells'
            ],
            correctAnswer: 1,
            explanation: 'Interphase occupies approximately 90% of the cell cycle. Since the proportion of cells in each phase reflects the relative duration of that phase, ~90% of dividing cells observed at any instant will be in interphase.'
          },
          {
            question: 'During which phase does the cell replicate its DNA?',
            options: [
              'G1 phase',
              'G2 phase',
              'S phase',
              'M phase'
            ],
            correctAnswer: 2,
            explanation: 'The S (Synthesis) phase is when DNA replication occurs. Each chromosome is duplicated, producing two identical sister chromatids joined at the centromere. A cell entering S phase with 46 chromosomes exits S phase still with 46 chromosomes, but each now consists of two chromatids.'
          },
          {
            question: 'A mature neuron in the human brain is in which phase?',
            options: [
              'G1, actively preparing to divide',
              'S phase, replicating its DNA',
              'G0 — a quiescent state where the cell no longer divides',
              'M phase'
            ],
            correctAnswer: 2,
            explanation: 'Most neurons are terminally differentiated and have exited the cell cycle into G0. They remain metabolically active (conducting nerve impulses) but do not divide. This is why brain and spinal cord injuries are often permanent.'
          }
        ]
      }
    },
    {
      id: 'cc1-chromosome',
      type: 'text' as const,
      content: \`
### Chromosome Organization at Each Stage

Understanding chromosome structure throughout the cell cycle is critical:

**Before S phase (G\\\\(_1\\\\)):**
- Each chromosome = 1 DNA double helix + histones = **unreplicated chromosome**
- Human cell: 46 unreplicated chromosomes

**After S phase (G\\\\(_2\\\\) and early mitosis):**
- Each chromosome = 2 identical copies (sister chromatids) joined at the centromere = **replicated chromosome**
- Human cell: 46 replicated chromosomes (= 92 chromatids)
- The chromosome number does NOT change after replication — the cell still has 46 chromosomes

**After mitosis:**
- Sister chromatids separate → each becomes an independent chromosome
- Each daughter cell: 46 unreplicated chromosomes (identical to the original)

> **Key Distinction:** "Chromosome number" counts centromeres, not chromatids.  A replicated chromosome with two sister chromatids counts as ONE chromosome.

**DNA packaging hierarchy:**
1. DNA double helix (2 nm diameter)
2. DNA wraps around **histone octamers** → **nucleosomes** ("beads on a string," 11 nm)
3. Nucleosomes coil into **30 nm fiber** (solenoid)
4. Looped domains of 30 nm fiber attached to a **protein scaffold**
5. Maximum condensation during metaphase → visible chromosomes (~1400 nm)
      \`
    },
    {
      id: 'cc1-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Chromosome Counting
      \`,
      exercise: {
        questions: [
          {
            question: 'A human cell has completed S phase but has not yet begun mitosis. How many chromosomes and chromatids does it have?',
            options: [
              '23 chromosomes, 46 chromatids',
              '46 chromosomes, 92 chromatids',
              '92 chromosomes, 92 chromatids',
              '46 chromosomes, 46 chromatids'
            ],
            correctAnswer: 1,
            explanation: 'After S phase, each of the 46 chromosomes has been replicated into two sister chromatids joined at a centromere. The cell still has 46 chromosomes (count centromeres), but 92 chromatids (each chromosome has 2).'
          }
        ]
      }
    },
    {
      id: 'cc1-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Cell Cycle
      \`,
      exercise: {
        questions: [
          {
            question: 'The phase of interphase where DNA is replicated:',
            answer: 'S phase',
            acceptableAnswers: ['S phase', 's phase', 'S', 'synthesis phase', 'Synthesis phase'],
            placeholder: 'e.g. M phase'
          },
          {
            question: 'The quiescent state entered by cells that have stopped dividing:',
            answer: 'G0',
            acceptableAnswers: ['G0', 'G0 phase', 'g0', 'G zero', 'G-zero'],
            placeholder: 'e.g. G1'
          },
          {
            question: 'The structure that joins two sister chromatids together:',
            answer: 'centromere',
            acceptableAnswers: ['centromere', 'Centromere'],
            placeholder: 'e.g. telomere'
          }
        ]
      }
    },
    {
      id: 'cc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Match the Phase
      \`,
      exercise: {
        questions: [
          {
            question: 'Cell grows and duplicates organelles before DNA synthesis:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'G1 phase'
          },
          {
            question: 'DNA replication produces sister chromatids:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'S phase'
          },
          {
            question: 'Error-checking of replicated DNA before division:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'G2 phase'
          },
          {
            question: 'Nuclear division followed by cytoplasmic division:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
            correctAnswer: 'M phase'
          }
        ]
      }
    },
    {
      id: 'cc1-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Cell Cycle Phases
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher adds a drug that blocks DNA polymerase (the enzyme that copies DNA). In which phase would cells accumulate?',
            options: [
              'G1 — cells cannot prepare for division',
              'S phase — cells enter S but cannot replicate their DNA, so they stall in S',
              'G2 — cells cannot check their DNA',
              'M phase — cells cannot divide'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase is required during S phase to replicate DNA. Blocking it would cause cells to enter S phase but fail to complete DNA synthesis. Cells would accumulate (arrest) in S phase.'
          }
        ]
      }
    }
  ]
};`;

// Part 2: Interphase
const part2 = `export const bioCellCyclePart2Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc2-intro',
      type: 'text' as const,
      content: \`
## Interphase — Preparation for Division

**Part 2 of 7**

Interphase is often called the "resting phase," but this is a misnomer — the cell is extremely active during interphase.  It is growing, producing proteins, duplicating organelles, and (during S phase) replicating its entire genome.
      \`
    },
    {
      id: 'cc2-g1',
      type: 'text' as const,
      content: \`
### G\\\\(_1\\\\) Phase — Growth and Preparation

G\\\\(_1\\\\) is typically the longest and most variable phase of interphase:

**Key events:**
- Cell growth — increase in cell size and mass
- Synthesis of proteins, lipids, and carbohydrates
- Duplication of organelles (ribosomes, mitochondria, ER)
- Centriole duplication begins (in animal cells)
- Gene expression patterns establish the functional identity of the cell

**G\\\\(_1\\\\)/S Checkpoint (Restriction Point):**
- The most important checkpoint in the cell cycle
- The cell "decides" whether to commit to division
- Checks: adequate cell size, sufficient nutrients, growth factor signals, and intact DNA
- If the cell passes this checkpoint, it is committed to S phase and division
- If conditions are unfavorable, the cell enters **G\\\\(_0\\\\)**

> **Growth Factors:** External signals (like PDGF, EGF, and insulin-like growth factor) bind to receptors and activate signaling cascades that promote passage through the G\\\\(_1\\\\)/S checkpoint.  Cancer cells often have mutations that make them independent of growth factor signaling.
      \`
    },
    {
      id: 'cc2-s',
      type: 'text' as const,
      content: \`
### S Phase — DNA Replication

During S phase, the entire genome is copied:

**Key events:**
- Each chromosome is replicated by **DNA polymerase** using semi-conservative replication
- Replication begins at many **origins of replication** simultaneously (humans have ~30,000-50,000 origins)
- New histone proteins are synthesized and assembled onto the replicated DNA
- After replication, each chromosome consists of two **sister chromatids** joined at the **centromere** by **cohesin** proteins
- The centrosome (containing two centrioles in animal cells) is also duplicated

**Replication timing:**
- Not all chromosomes replicate simultaneously
- Euchromatin (active genes) replicates early in S phase
- Heterochromatin (condensed, inactive regions) replicates late in S phase
- Each origin of replication fires only ONCE per S phase (licensing system prevents re-replication)

> **DNA Content Notation:** A cell in G\\\\(_1\\\\) has **2n** chromosomes and **2C** DNA content.  After S phase (in G\\\\(_2\\\\)), it has **2n** chromosomes but **4C** DNA content (each chromosome has doubled its DNA).
      \`
    },
    {
      id: 'cc2-g2',
      type: 'text' as const,
      content: \`
### G\\\\(_2\\\\) Phase — Final Preparation

G\\\\(_2\\\\) is the final preparation period before mitosis:

**Key events:**
- Continued cell growth and protein synthesis
- Synthesis of proteins needed for mitosis (e.g., tubulin for the mitotic spindle)
- Final duplication of centrosomes completed
- **G\\\\(_2\\\\)/M Checkpoint** — the cell verifies:
  - All DNA has been completely and accurately replicated
  - DNA damage has been repaired
  - The cell is large enough to divide
  - Critical mitotic proteins are present

> **If DNA damage is detected:** The checkpoint kinase **ATM/ATR** activates **p53**, which can halt the cell cycle (allowing time for repair) or trigger **apoptosis** (programmed cell death) if the damage is too severe to repair.
      \`
    },
    {
      id: 'cc2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Interphase
      \`,
      exercise: {
        questions: [
          {
            question: 'Why is the G1/S checkpoint considered the most critical decision point in the cell cycle?',
            options: [
              'It determines the speed of DNA replication',
              'Once a cell passes this checkpoint, it is committed to completing the cell cycle and dividing; before this point, the cell can exit to G0',
              'It controls the separation of sister chromatids',
              'It regulates cytokinesis'
            ],
            correctAnswer: 1,
            explanation: 'The G1/S checkpoint (also called the restriction point in mammalian cells) is the commitment point. Before it, the cell can pause or exit the cycle. After it, the cell proceeds through S, G2, and M without needing further external signals. This is why it is a frequent target of mutations in cancer.'
          },
          {
            question: 'After S phase, a cell has the same number of chromosomes as before S phase. How is this possible if all the DNA was replicated?',
            options: [
              'Some DNA was degraded during replication',
              'Each replicated chromosome consists of two sister chromatids joined at the centromere — it counts as ONE chromosome. The chromosome number (counted by centromeres) is unchanged.',
              'Only half the chromosomes were replicated',
              'The extra DNA is stored in the nucleus as free fragments'
            ],
            correctAnswer: 1,
            explanation: 'Chromosome number counts centromeres. After replication, each chromosome has two copies (sister chromatids) linked at one centromere. So the number of chromosomes remains 2n = 46 in humans, but the DNA content doubles from 2C to 4C.'
          },
          {
            question: 'A mutation in ATM kinase prevents the cell from detecting DNA damage at the G2/M checkpoint. What is the likely consequence?',
            options: [
              'The cell will be unable to replicate its DNA',
              'Cells with damaged DNA will proceed into mitosis, potentially propagating mutations and contributing to genomic instability',
              'All cells will immediately undergo apoptosis',
              'DNA repair will become more efficient'
            ],
            correctAnswer: 1,
            explanation: 'ATM kinase is a key sensor for DNA double-strand breaks. Without it, the G2/M checkpoint cannot detect damage, and cells with broken or improperly replicated DNA enter mitosis. This leads to genomic instability — a hallmark of cancer.'
          }
        ]
      }
    },
    {
      id: 'cc2-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Interphase
      \`,
      exercise: {
        questions: [
          {
            question: 'The proteins that hold sister chromatids together at the centromere after replication:',
            answer: 'cohesin',
            acceptableAnswers: ['cohesin', 'Cohesin', 'cohesins'],
            placeholder: 'e.g. condensin'
          },
          {
            question: 'The tumor suppressor protein activated by ATM/ATR when DNA damage is detected:',
            answer: 'p53',
            acceptableAnswers: ['p53', 'P53', 'TP53', 'tp53'],
            placeholder: 'e.g. Rb'
          },
          {
            question: 'The DNA content abbreviation for a cell after completing S phase:',
            answer: '4C',
            acceptableAnswers: ['4C', '4c'],
            placeholder: 'e.g. 2C'
          }
        ]
      }
    },
    {
      id: 'cc2-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Interphase
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher measures the DNA content per cell in a population and obtains a histogram. Most cells show 2C DNA content, with a smaller peak at 4C.  What interpretation is correct?',
            options: [
              'The 4C cells are haploid',
              'Most cells are in G1 (or G0) with unreplicated DNA (2C); the smaller 4C peak represents cells in G2 or M phase that have completed DNA replication',
              'The 2C cells have completed mitosis and the 4C cells are about to undergo meiosis',
              'All cells are in S phase'
            ],
            correctAnswer: 1,
            explanation: 'In a dividing population, cells in G1 (or G0) have 2C DNA content. After S phase, DNA content doubles to 4C (G2 and M). Since G1 is the longest phase, more cells are found at 2C. Cells in the process of S phase would show intermediate values between 2C and 4C.'
          }
        ]
      }
    }
  ]
};`;

// Part 3: Mitosis
const part3 = `export const bioCellCyclePart3Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc3-intro',
      type: 'text' as const,
      content: \`
## Mitosis — Dividing the Nucleus

**Part 3 of 7**

Mitosis is the division of the nucleus to produce two **genetically identical** daughter nuclei.  It is a continuous process but is conventionally divided into four (or five) stages: **prophase, prometaphase, metaphase, anaphase, and telophase**.
      \`
    },
    {
      id: 'cc3-prophase',
      type: 'text' as const,
      content: \`
### Prophase

**Key events:**
- Chromatin condenses into visible **chromosomes** (each consisting of two sister chromatids joined at the centromere)
- Condensation is driven by **condensin** proteins that coil and compact the chromatin
- The **mitotic spindle** begins to form:
  - In animal cells: centrosomes (each with two centrioles) migrate toward opposite poles; asters (radial arrays of microtubules) form around them
  - In plant cells: spindle forms without centrioles (acentrosomal spindle)
- **Nucleolus** disappears (ribosomal RNA synthesis ceases)

### Prometaphase

**Key events:**
- **Nuclear envelope breaks down** (fragments into vesicles)
- Spindle microtubules now access the chromosomes
- **Kinetochores** form at the centromere of each sister chromatid — these are protein complexes that serve as attachment points for spindle microtubules
- **Kinetochore microtubules** from opposite poles attach to the kinetochores of sister chromatids
- Chromosomes are moved by motor proteins along microtubules in a "search and capture" process
      \`
    },
    {
      id: 'cc3-meta-ana',
      type: 'text' as const,
      content: \`
### Metaphase

**Key events:**
- All chromosomes align at the **metaphase plate** (the equator of the cell, equidistant from both poles)
- Each chromosome is attached to kinetochore microtubules from BOTH poles (bipolar attachment)
- **Spindle Assembly Checkpoint (SAC)** — verifies that every kinetochore is properly attached to spindle microtubules from both poles before allowing anaphase to proceed

> **The Spindle Assembly Checkpoint is critical:** If even one kinetochore is unattached, the checkpoint protein **Mad2** inhibits the **Anaphase-Promoting Complex (APC/C)**, preventing the cell from entering anaphase.  Failure of this checkpoint leads to **aneuploidy** (abnormal chromosome number).

### Anaphase

The shortest phase of mitosis, but the most dramatic:

**Key events:**
- **Cohesin** proteins holding sister chromatids together are cleaved by the enzyme **separase**
- Separase is activated when APC/C degrades **securin** (the inhibitor of separase)
- Sister chromatids separate and move toward opposite poles:
  - **Anaphase A:** Kinetochore microtubules shorten (depolymerize at the kinetochore end), pulling chromatids poleward
  - **Anaphase B:** Polar microtubules elongate, pushing the poles apart; motor proteins (dynein) pull on astral microtubules, moving poles apart
- Once separated, each chromatid is now called an independent **chromosome**
      \`
    },
    {
      id: 'cc3-telo',
      type: 'text' as const,
      content: \`
### Telophase

**Key events:**
- Chromosomes arrive at opposite poles and begin to **decondense** (uncoil back into chromatin)
- **Nuclear envelope re-forms** around each set of chromosomes (from vesicles and ER membrane)
- **Nucleolus** reappears
- Spindle microtubules depolymerize
- The cell now contains two nuclei, each with a complete set of chromosomes

**Summary of chromosome movement by microtubule type:**

| Microtubule Type | Attachment | Role |
|-----------------|------------|------|
| **Kinetochore microtubules** | Kinetochore to pole | Pull chromatids poleward (anaphase A) |
| **Polar (interpolar) microtubules** | Overlap at cell center | Push poles apart (anaphase B) |
| **Astral microtubules** | Centrosome to cell cortex | Position the spindle; aid pole separation |
      \`
    },
    {
      id: 'cc3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Mitosis Stages
      \`,
      exercise: {
        questions: [
          {
            question: 'A cell is observed with chromosomes aligned in a single plane at the center of the cell. All kinetochores appear to be attached to spindle fibers. This cell is in:',
            options: [
              'Prophase',
              'Metaphase',
              'Anaphase',
              'Telophase'
            ],
            correctAnswer: 1,
            explanation: 'The hallmark of metaphase is chromosomes aligned at the metaphase plate (cell equator) with bipolar kinetochore attachment. The spindle assembly checkpoint verifies proper attachment before allowing progression to anaphase.'
          },
          {
            question: 'The drug colchicine binds to tubulin and prevents microtubule polymerization. If added to dividing cells, at which stage would cells arrest?',
            options: [
              'G1 phase — cells cannot grow',
              'S phase — DNA replication is blocked',
              'Metaphase — without functional spindle microtubules, kinetochores are unattached, the spindle assembly checkpoint is activated, and the cell arrests',
              'Telophase — nuclear envelope cannot reform'
            ],
            correctAnswer: 2,
            explanation: 'Colchicine prevents spindle formation. Without proper kinetochore-microtubule attachment, the spindle assembly checkpoint (Mad2/APC pathway) is activated and the cell cannot enter anaphase. Cells accumulate in metaphase. This is why colchicine is used to prepare karyotypes.'
          },
          {
            question: 'What triggers the separation of sister chromatids at the onset of anaphase?',
            options: [
              'Condensin cleaves the centromere',
              'The APC/C ubiquitin ligase degrades securin, releasing active separase, which cleaves cohesin proteins holding sister chromatids together',
              'Kinetochore microtubules physically tear the chromatids apart',
              'DNA between the chromatids is enzymatically digested'
            ],
            correctAnswer: 1,
            explanation: 'The Anaphase-Promoting Complex/Cyclosome (APC/C) tags securin for proteasomal degradation. Securin normally inhibits separase. When securin is destroyed, separase is freed to cleave the cohesin molecules at the centromere, allowing sister chromatids to separate.'
          }
        ]
      }
    },
    {
      id: 'cc3-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Mitosis
      \`,
      exercise: {
        questions: [
          {
            question: 'The protein complex at the centromere where spindle microtubules attach:',
            answer: 'kinetochore',
            acceptableAnswers: ['kinetochore', 'Kinetochore'],
            placeholder: 'e.g. centrosome'
          },
          {
            question: 'The enzyme that cleaves cohesin to separate sister chromatids:',
            answer: 'separase',
            acceptableAnswers: ['separase', 'Separase'],
            placeholder: 'e.g. ligase'
          },
          {
            question: 'The checkpoint that verifies all kinetochores are attached before anaphase:',
            answer: 'spindle assembly checkpoint',
            acceptableAnswers: ['spindle assembly checkpoint', 'SAC', 'Spindle assembly checkpoint', 'spindle checkpoint'],
            placeholder: 'e.g. G2/M checkpoint'
          }
        ]
      }
    },
    {
      id: 'cc3-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Match the Mitosis Stage
      \`,
      exercise: {
        questions: [
          {
            question: 'Chromatin condenses; spindle begins to form:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Prophase'
          },
          {
            question: 'Nuclear envelope breaks down; kinetochores attach to microtubules:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Prometaphase'
          },
          {
            question: 'Sister chromatids separate and move to opposite poles:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'Nuclear envelopes re-form; chromosomes decondense:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Telophase'
          }
        ]
      }
    },
    {
      id: 'cc3-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Mitosis
      \`,
      exercise: {
        questions: [
          {
            question: 'A human cell (2n = 46) is in anaphase of mitosis. How many centromeres are moving toward each pole?',
            options: [
              '23',
              '46',
              '92',
              '184'
            ],
            correctAnswer: 1,
            explanation: 'In anaphase, the sister chromatids of all 46 chromosomes separate. Each chromatid (now an independent chromosome with its own centromere) moves to one pole. So 46 centromeres move toward each pole, for a total of 92 in the cell.'
          }
        ]
      }
    }
  ]
};`;

// Part 4: Cytokinesis
const part4 = `export const bioCellCyclePart4Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc4-intro',
      type: 'text' as const,
      content: \`
## Cytokinesis — Dividing the Cytoplasm

**Part 4 of 7**

Cytokinesis is the division of the cytoplasm to produce two separate daughter cells.  It typically begins during anaphase or telophase and overlaps with the final stages of mitosis.

The mechanism differs between animal and plant cells.
      \`
    },
    {
      id: 'cc4-animal',
      type: 'text' as const,
      content: \`
### Cytokinesis in Animal Cells — Cleavage Furrow

Animal cells divide by **cleavage**:

1. A **contractile ring** of actin microfilaments and myosin II motor proteins assembles just beneath the plasma membrane at the former metaphase plate
2. The position of the contractile ring is determined by signals from the **mitotic spindle** (specifically, the central spindle — overlapping polar microtubules between the separating chromosomes)
3. Myosin II hydrolyzes ATP and slides along actin filaments, constricting the ring
4. This creates an inward indentation called the **cleavage furrow**
5. The furrow deepens progressively until the cell is pinched in two
6. Final separation (abscission) involves membrane fusion at the narrow bridge connecting the two cells

> **Why the middle?** The position of the contractile ring is specified by signals from the spindle midzone and astral microtubules. The RhoA GTPase pathway activates myosin II and actin assembly at the equator. This ensures the cell divides between the two sets of chromosomes.
      \`
    },
    {
      id: 'cc4-plant',
      type: 'text' as const,
      content: \`
### Cytokinesis in Plant Cells — Cell Plate

Plant cells cannot form a cleavage furrow because of their rigid **cell wall**.  Instead, they build a new cell wall from the inside out:

1. **Golgi-derived vesicles** carrying cell wall materials (polysaccharides, glycoproteins) are transported along remaining spindle microtubules to the center of the cell
2. Vesicles fuse to form the **cell plate**, which grows outward from the center toward the existing cell wall
3. The cell plate matures into a new **middle lamella** (shared layer between adjacent cell walls) and regions of new cell wall (primary wall)
4. New plasma membrane lines each side of the cell plate
5. The cell plate eventually fuses with the existing cell wall, completing the division

**Plasmodesmata** (channels connecting adjacent plant cells) are established during cell plate formation — portions of ER become trapped in the forming plate, creating cytoplasmic bridges between daughter cells.

| Feature | Animal Cytokinesis | Plant Cytokinesis |
|---------|-------------------|-------------------|
| Mechanism | Cleavage furrow (contractile ring) | Cell plate formation |
| Direction | Outside → in (constriction) | Inside → out (vesicle fusion) |
| Key proteins | Actin, myosin II | Golgi vesicles, phragmoplast microtubules |
| Cell wall | Not present | New cell wall built |
      \`
    },
    {
      id: 'cc4-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Cytokinesis
      \`,
      exercise: {
        questions: [
          {
            question: 'What would happen if an animal cell were treated with a drug that inhibits actin polymerization during telophase?',
            options: [
              'Mitosis would be blocked at metaphase',
              'The cell would complete nuclear division but fail to form a cleavage furrow, resulting in a binucleate cell',
              'DNA replication would be blocked',
              'The cell would undergo apoptosis before reaching telophase'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow depends on a contractile ring made of actin and myosin. Blocking actin polymerization prevents ring formation, so the cytoplasm cannot divide. The nuclei divide normally (mitosis is microtubule-dependent, not actin-dependent), producing a binucleate cell.'
          },
          {
            question: 'In plant cell cytokinesis, the cell plate forms:',
            options: [
              'By constriction of the cell wall from outside to inside',
              'By fusion of Golgi-derived vesicles at the center of the cell, growing outward until it reaches the existing cell wall',
              'By dissolution of the existing cell wall',
              'By invagination of the plasma membrane'
            ],
            correctAnswer: 1,
            explanation: 'Plant cell cytokinesis builds a new partition from the inside out. Golgi vesicles carrying cell wall precursors are guided to the cell center by phragmoplast microtubules, fuse into a cell plate, and expand outward until they merge with the existing cell wall.'
          }
        ]
      }
    },
    {
      id: 'cc4-binary',
      type: 'text' as const,
      content: \`
### Binary Fission in Prokaryotes

Prokaryotes (bacteria and archaea) do not undergo mitosis.  They reproduce by **binary fission**:

1. The single circular chromosome is replicated starting from the **origin of replication** (oriC)
2. The two copies of the chromosome are moved to opposite ends of the cell (by proteins attached to the membrane, including ParA/ParB system)
3. The cell elongates
4. A **septum** (new cell wall and membrane) forms at the midpoint, guided by the **FtsZ protein ring** (a tubulin-like protein that forms a contractile ring analogous to the animal cell contractile ring)
5. The cell divides into two identical daughter cells

**Key differences from mitosis:**

| Feature | Binary Fission | Mitosis |
|---------|---------------|---------|
| Organism | Prokaryotes | Eukaryotes |
| Chromosome type | Single, circular | Multiple, linear |
| Spindle apparatus | None (FtsZ ring instead) | Mitotic spindle with microtubules |
| Speed | Very fast (20 min in E. coli) | Slower (1+ hour for M phase) |
| Nuclear envelope | None (no nucleus) | Breaks down and reforms |
      \`
    },
    {
      id: 'cc4-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Cytokinesis
      \`,
      exercise: {
        questions: [
          {
            question: 'The inward indentation formed during animal cell cytokinesis:',
            answer: 'cleavage furrow',
            acceptableAnswers: ['cleavage furrow', 'Cleavage furrow'],
            placeholder: 'e.g. cell plate'
          },
          {
            question: 'The structure formed by vesicle fusion during plant cell cytokinesis:',
            answer: 'cell plate',
            acceptableAnswers: ['cell plate', 'Cell plate'],
            placeholder: 'e.g. cleavage furrow'
          },
          {
            question: 'The prokaryotic tubulin-like protein that forms a ring during binary fission:',
            answer: 'FtsZ',
            acceptableAnswers: ['FtsZ', 'ftsZ', 'Ftsz', 'FTSZ'],
            placeholder: 'e.g. actin'
          }
        ]
      }
    },
    {
      id: 'cc4-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Cytokinesis
      \`,
      exercise: {
        questions: [
          {
            question: 'FtsZ in bacteria is considered a homolog of eukaryotic tubulin. What does this suggest about the evolution of cell division?',
            options: [
              'Bacteria evolved from eukaryotes',
              'The fundamental mechanisms of cell division are ancient, with FtsZ and tubulin likely sharing a common ancestor — evidence for the evolutionary relationship between prokaryotic and eukaryotic division',
              'Tubulin was acquired by horizontal gene transfer from bacteria',
              'FtsZ and tubulin have no functional similarity'
            ],
            correctAnswer: 1,
            explanation: 'FtsZ and tubulin share structural and functional similarities despite billions of years of divergence. Both polymerize into filaments and are essential for cell division. Their homology suggests that the basic molecular machinery for cell division was present in the last common ancestor of prokaryotes and eukaryotes.'
          },
          {
            question: 'A mutation disrupts the signaling pathway that positions the cleavage furrow in an animal cell.  The furrow forms, but at a random position instead of the cell equator.  What is the likely outcome?',
            options: [
              'Normal division — position does not matter',
              'Daughter cells of unequal size, with one potentially receiving both nuclei or neither nucleus — asymmetric and likely abnormal division',
              'The cell will switch to plant-type cytokinesis',
              'The furrow will self-correct automatically'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow must form at the cell equator to ensure each daughter cell receives one nucleus. If positioned randomly, one daughter cell might get both nuclei (or no nucleus), and the cells would be unequal in size. Proper spindle-to-cortex signaling is essential for accurate division.'
          }
        ]
      }
    }
  ]
};`;

// Part 5: Cell Cycle Regulation
const part5 = `export const bioCellCyclePart5Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc5-intro',
      type: 'text' as const,
      content: \`
## Cell Cycle Regulation — Checkpoints and Cancer

**Part 5 of 7**

The cell cycle is tightly regulated to ensure accurate DNA replication and equal chromosome distribution.  The control system relies on **cyclins**, **cyclin-dependent kinases (Cdks)**, **checkpoints**, and **tumor suppressors**.

Loss of cell cycle control is the fundamental basis of **cancer**.
      \`
    },
    {
      id: 'cc5-cdks',
      type: 'text' as const,
      content: \`
### Cyclins and Cdks — The Engine of the Cell Cycle

**Cyclin-dependent kinases (Cdks)** are enzymes that phosphorylate target proteins to drive the cell through each phase.  Cdks are only active when bound to a **cyclin** partner.

**Key Cdk-cyclin complexes:**

| Complex | Phase regulated | Function |
|---------|----------------|----------|
| **Cyclin D — Cdk4/6** | G\\\\(_1\\\\) progression | Responds to growth factor signals; phosphorylates Rb |
| **Cyclin E — Cdk2** | G\\\\(_1\\\\)/S transition | Commits cell to S phase; initiates DNA replication licensing |
| **Cyclin A — Cdk2** | S phase | Drives DNA replication; prevents re-replication |
| **Cyclin B — Cdk1 (MPF)** | G\\\\(_2\\\\)/M transition | Triggers entry into mitosis; promotes chromosome condensation, nuclear envelope breakdown, spindle assembly |

**How cyclin-Cdk regulation works:**
1. Cyclins are synthesized and degraded in a cyclical pattern — each cyclin accumulates during a specific phase
2. When cyclin levels are high, Cdks are activated
3. Activated Cdk phosphorylates target proteins, driving the next cell cycle event
4. After the event, cyclins are tagged for destruction by ubiquitin ligases (e.g., APC/C, SCF) and degraded by the proteasome
5. Cdk activity drops, resetting the system

> **MPF (Maturation/Mitosis Promoting Factor):** The Cyclin B-Cdk1 complex was originally discovered in frog oocytes as the factor that triggers entry into M phase.  Its discovery by Leland Hartwell, Tim Hunt, and Paul Nurse earned the 2001 Nobel Prize in Physiology or Medicine.
      \`
    },
    {
      id: 'cc5-checkpoints',
      type: 'text' as const,
      content: \`
### Checkpoint Summary

| Checkpoint | Location | What is checked | Key molecules |
|-----------|----------|----------------|---------------|
| **G\\\\(_1\\\\)/S (Restriction Point)** | End of G\\\\(_1\\\\) | Cell size, nutrients, growth signals, DNA integrity | Cyclin D-Cdk4/6, Rb, p53, p21 |
| **Intra-S** | During S phase | Replication fork stalling, DNA damage | ATR, Chk1 |
| **G\\\\(_2\\\\)/M** | End of G\\\\(_2\\\\) | Complete DNA replication, DNA damage repair | Cyclin B-Cdk1, ATM, Chk2, p53 |
| **Spindle Assembly (SAC)** | Metaphase | All kinetochores attached to spindle | Mad2, BubR1, APC/C |

### The Rb Pathway (G\\\\(_1\\\\)/S control)

1. **Rb (Retinoblastoma protein)** normally INHIBITS E2F transcription factors
2. When E2F is inhibited, genes needed for S phase entry are NOT transcribed
3. Growth factor signaling activates **Cyclin D-Cdk4/6**, which **phosphorylates Rb**
4. Phosphorylated Rb releases E2F
5. E2F activates transcription of genes for DNA replication (DNA polymerase, thymidine kinase, Cyclin E, etc.)
6. Cyclin E-Cdk2 further phosphorylates Rb, creating a positive feedback loop that commits the cell to S phase
      \`
    },
    {
      id: 'cc5-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Regulation
      \`,
      exercise: {
        questions: [
          {
            question: 'If a cell has a mutation that makes Rb constitutively active (always bound to E2F, even when phosphorylated), what would happen?',
            options: [
              'The cell would divide uncontrollably',
              'The cell would be permanently arrested in G1 because E2F could never activate S-phase genes',
              'DNA replication would proceed normally',
              'The cell would skip directly to M phase'
            ],
            correctAnswer: 1,
            explanation: 'If Rb cannot be inactivated by phosphorylation, it permanently sequesters E2F. Without E2F activity, the genes needed for DNA replication are never transcribed, and the cell cannot enter S phase. The cell is permanently stuck in G1.'
          },
          {
            question: 'Cyclin B levels rise throughout G2 and peak at the onset of mitosis, then drop sharply during anaphase.  What causes the drop?',
            options: [
              'Cyclin B is diluted as the cell divides',
              'The APC/C (Anaphase-Promoting Complex) ubiquitinates Cyclin B, targeting it for proteasomal degradation',
              'Cyclin B spontaneously degrades at high concentrations',
              'Cdk1 destroys its own cyclin partner'
            ],
            correctAnswer: 1,
            explanation: 'The APC/C is a ubiquitin ligase activated during mitosis. It tags Cyclin B (and securin) with ubiquitin chains, marking them for destruction by the 26S proteasome. This drops Cdk1 activity and allows the cell to exit mitosis.'
          }
        ]
      }
    },
    {
      id: 'cc5-cancer',
      type: 'text' as const,
      content: \`
### Cancer — Loss of Cell Cycle Control

Cancer results from the accumulation of mutations in genes that regulate the cell cycle.  Two categories of genes are involved:

**1. Proto-oncogenes → Oncogenes (gain-of-function mutations)**
- Proto-oncogenes are normal genes that PROMOTE cell division (e.g., growth factors, growth factor receptors, signal transduction proteins, cyclins)
- A mutation that makes the gene product hyperactive or overexpressed converts it into an **oncogene**
- Only ONE mutant allele is needed (dominant)
- Examples:
  - **Ras** — GTPase in growth factor signaling; mutant Ras is stuck "on" (~30% of all cancers)
  - **HER2** — growth factor receptor overexpressed in some breast cancers
  - **Myc** — transcription factor that drives cell proliferation

**2. Tumor suppressor genes (loss-of-function mutations)**
- Normal products INHIBIT cell division, promote apoptosis, or repair DNA
- BOTH alleles must be inactivated (recessive — Knudson two-hit hypothesis)
- Examples:
  - **p53** — "guardian of the genome"; halts the cycle for DNA repair or triggers apoptosis; mutated in >50% of cancers
  - **Rb** — blocks E2F-mediated S phase entry; loss causes retinoblastoma
  - **BRCA1/BRCA2** — DNA repair (homologous recombination); mutations increase breast/ovarian cancer risk

> **Hallmarks of Cancer (Hanahan & Weinberg):** sustained proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality (telomerase), inducing angiogenesis, activating invasion and metastasis.
      \`
    },
    {
      id: 'cc5-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Checkpoint — Cancer
      \`,
      exercise: {
        questions: [
          {
            question: 'A patient has a mutation in ONE copy of the p53 gene. According to the two-hit hypothesis, this person:',
            options: [
              'Will definitely develop cancer',
              'Has an increased cancer risk because only one more mutation (second hit) is needed to eliminate p53 function; however, the remaining functional copy still provides protection',
              'Is completely protected because one copy is sufficient',
              'Has cancer already'
            ],
            correctAnswer: 1,
            explanation: 'Tumor suppressor genes typically require inactivation of both alleles (two hits). Having one mutant copy increases cancer risk significantly because only one more mutation event is needed. However, the person does not automatically develop cancer — additional mutations and factors are required.'
          },
          {
            question: 'Many chemotherapy drugs target rapidly dividing cells. Why does this approach also damage healthy tissues like bone marrow, hair follicles, and intestinal lining?',
            options: [
              'These tissues are cancerous too',
              'These normal tissues have high cell division rates, so they are also susceptible to drugs that target dividing cells — causing side effects like immunosuppression, hair loss, and GI problems',
              'Chemotherapy drugs are not specific to dividing cells',
              'These tissues lack p53'
            ],
            correctAnswer: 1,
            explanation: 'Chemotherapy drugs target rapidly dividing cells (e.g., by disrupting DNA replication or microtubule function). Normal tissues with high proliferation rates — bone marrow (blood cells), hair follicles, and GI epithelium — are collateral damage, causing the classic side effects of chemotherapy.'
          }
        ]
      }
    },
    {
      id: 'cc5-input',
      type: 'input-boxes' as const,
      content: \`
### Key Terms — Regulation and Cancer
      \`,
      exercise: {
        questions: [
          {
            question: 'The tumor suppressor known as the "guardian of the genome":',
            answer: 'p53',
            acceptableAnswers: ['p53', 'P53', 'TP53'],
            placeholder: 'e.g. Rb'
          },
          {
            question: 'An oncogenic GTPase stuck in the "on" state in ~30% of cancers:',
            answer: 'Ras',
            acceptableAnswers: ['Ras', 'RAS', 'ras', 'K-Ras', 'KRAS'],
            placeholder: 'e.g. Myc'
          },
          {
            question: 'The general term for a normal gene that, when mutated, becomes an oncogene:',
            answer: 'proto-oncogene',
            acceptableAnswers: ['proto-oncogene', 'Proto-oncogene', 'proto oncogene'],
            placeholder: 'e.g. tumor suppressor'
          }
        ]
      }
    },
    {
      id: 'cc5-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Regulation
      \`,
      exercise: {
        questions: [
          {
            question: 'A cancer cell is found to have a mutation that causes overproduction of Cyclin D. What is the expected effect?',
            options: [
              'The cell would arrest in G1',
              'Excess Cyclin D would constitutively activate Cdk4/6, hyperphosphorylate Rb, release E2F, and drive continuous entry into S phase — promoting uncontrolled proliferation',
              'DNA replication would be blocked',
              'The cell would undergo apoptosis'
            ],
            correctAnswer: 1,
            explanation: 'Cyclin D activates Cdk4/6, which phosphorylates Rb. Rb releases E2F, driving S phase entry. Overproduction of Cyclin D means Rb is constantly inactivated, and the cell bypasses the G1/S checkpoint repeatedly — a common mechanism in cancer (Cyclin D is encoded by the CCND1 gene, amplified in many cancers).'
          }
        ]
      }
    }
  ]
};`;

// Part 6: Problem-Solving Workshop
const part6 = `export const bioCellCyclePart6Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc6-intro',
      type: 'text' as const,
      content: \`
## Problem-Solving Workshop — Cell Cycle

**Part 6 of 7**

This workshop applies cell cycle and mitosis concepts to experimental scenarios commonly seen on the AP Biology exam.
      \`
    },
    {
      id: 'cc6-scenario1',
      type: 'text' as const,
      content: \`
### Scenario 1: Mitotic Index Calculation

A student observes 200 onion root tip cells under a microscope and counts the number of cells in each stage:

| Stage | Number of Cells |
|-------|----------------|
| Interphase | 170 |
| Prophase | 14 |
| Metaphase | 6 |
| Anaphase | 4 |
| Telophase | 6 |

**Mitotic Index** = (cells in mitosis / total cells) \\\\(\\\\times\\\\) 100

$$\\\\text{Mitotic Index} = \\\\frac{14 + 6 + 4 + 6}{200} \\\\times 100 = \\\\frac{30}{200} \\\\times 100 = 15\\\\%$$

The mitotic index tells us the proportion of cells actively dividing.  A higher mitotic index indicates more rapid cell proliferation.

**The relative time in each phase** is proportional to the number of cells observed:
- If the total cell cycle is 24 hours, and 15% of cells are in mitosis, then mitosis takes ~3.6 hours
- Prophase (14/200 = 7%) \\\\(\\\\approx\\\\) 1.68 hours
- Anaphase (4/200 = 2%) \\\\(\\\\approx\\\\) 0.48 hours (shortest phase — confirmed by observation)
      \`
    },
    {
      id: 'cc6-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 1 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'A tumor sample has a mitotic index of 42%, while normal tissue from the same organ has a mitotic index of 5%.  What does this indicate?',
            options: [
              'The tumor cells are dying faster than normal cells',
              'The tumor cells are dividing much more rapidly than normal cells — consistent with unregulated cell proliferation in cancer',
              'The normal tissue is growing faster',
              'The tumor sample was contaminated'
            ],
            correctAnswer: 1,
            explanation: 'A significantly elevated mitotic index in the tumor (42% vs. 5%) indicates that a much larger proportion of tumor cells are in active division at any given time. This reflects the loss of normal cell cycle control — a hallmark of cancer.'
          },
          {
            question: 'In the onion root tip data, anaphase has the fewest cells (4/200). What does this indicate about anaphase?',
            options: [
              'Anaphase cells are difficult to identify',
              'Anaphase is the shortest phase of mitosis — cells spend less time in anaphase, so fewer are caught in that stage at any observation point',
              'Anaphase does not occur in onion cells',
              'The student miscounted'
            ],
            correctAnswer: 1,
            explanation: 'The number of cells observed in each phase is proportional to the duration of that phase. Since very few cells are in anaphase relative to other stages, anaphase must be the shortest. This is confirmed biochemically — once sister chromatids separate, they move to poles quickly.'
          }
        ]
      }
    },
    {
      id: 'cc6-scenario2',
      type: 'text' as const,
      content: \`
### Scenario 2: Cell Fusion Experiment

Researchers fuse cells in different phases and observe the results:

**Experiment A:** S-phase cell fused with G\\\\(_1\\\\)-phase cell
- Result: The G\\\\(_1\\\\) nucleus immediately enters S phase (begins DNA replication)
- Interpretation: S-phase cells contain factors (Cyclin E/A-Cdk2) that can drive a G\\\\(_1\\\\) nucleus into S phase

**Experiment B:** M-phase cell fused with G\\\\(_1\\\\)-phase cell
- Result: The G\\\\(_1\\\\) nucleus undergoes premature chromosome condensation (PCC) — but the chromosomes are single-chromatid (unreplicated), leading to chromosome damage
- Interpretation: M-phase cells contain MPF (Cyclin B-Cdk1) that forces any nucleus to enter M phase regardless of DNA replication status

**Experiment C:** M-phase cell fused with S-phase cell
- Result: The S-phase chromosomes show premature condensation of partially replicated DNA — pulverized chromosomes (chromosome fragmentation)
- Interpretation: Forcing M phase entry on incompletely replicated DNA is catastrophic

> **These experiments demonstrated that cell cycle progression is controlled by diffusible cytoplasmic factors** (cyclins and Cdks), not by fixed programs in the nucleus alone.
      \`
    },
    {
      id: 'cc6-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### Scenario 2 Questions
      \`,
      exercise: {
        questions: [
          {
            question: 'Why does fusing an M-phase cell with an S-phase cell produce pulverized (fragmented) chromosomes?',
            options: [
              'The chromosomes are incompatible between the two cells',
              'MPF from the M-phase cell forces chromosome condensation in the S-phase nucleus, but the DNA is only partially replicated — condensing partially replicated DNA at active replication forks causes breaks',
              'The S-phase cell digests the M-phase chromosomes',
              'DNA polymerase cuts the chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'During S phase, DNA is being actively copied at thousands of replication forks. Forcing condensation (via MPF) on this partially replicated DNA creates enormous mechanical stress at replication forks, causing DNA breakage and chromosomal fragmentation.'
          },
          {
            question: 'These cell fusion experiments provide evidence that:',
            options: [
              'The nucleus controls the cell cycle independently',
              'Diffusible cytoplasmic factors (cyclins and Cdks) regulate cell cycle progression and can override the phase of a foreign nucleus',
              'Only membrane-bound signals regulate the cell cycle',
              'Cell cycle phases cannot be accelerated artificially'
            ],
            correctAnswer: 1,
            explanation: 'The experiments show that factors in the cytoplasm (MPF, S-phase kinases) can cross into a foreign nucleus and trigger phase-specific events. This was pivotal in establishing that cell cycle control is mediated by diffusible, enzymatically active protein complexes.'
          }
        ]
      }
    },
    {
      id: 'cc6-input',
      type: 'input-boxes' as const,
      content: \`
### Apply Your Knowledge
      \`,
      exercise: {
        questions: [
          {
            question: 'The percentage of cells in mitosis in a population (calculated from microscopy):',
            answer: 'mitotic index',
            acceptableAnswers: ['mitotic index', 'Mitotic index', 'Mitotic Index', 'MI'],
            placeholder: 'e.g. growth rate'
          },
          {
            question: 'The phenomenon where chromosomes condense prematurely in a cell not yet ready for mitosis:',
            answer: 'premature chromosome condensation',
            acceptableAnswers: ['premature chromosome condensation', 'PCC', 'Premature chromosome condensation'],
            placeholder: 'e.g. nondisjunction'
          }
        ]
      }
    },
    {
      id: 'cc6-exit',
      type: 'multiple-choice' as const,
      content: \`
### Exit Ticket — Workshop
      \`,
      exercise: {
        questions: [
          {
            question: 'A researcher treats cells with a drug that prevents Cyclin B degradation.  What stage will the cells arrest in?',
            options: [
              'G1 — they cannot enter S phase',
              'S phase — DNA replication is blocked',
              'Late mitosis / metaphase-to-anaphase transition — persistent Cdk1 activity (due to undegraded Cyclin B) prevents anaphase onset and mitotic exit',
              'Cytokinesis — the cell cannot divide'
            ],
            correctAnswer: 2,
            explanation: 'Cyclin B degradation by APC/C is required for anaphase progression and exit from mitosis. If Cyclin B cannot be degraded, Cdk1 remains active, which prevents chromosome decondensation, nuclear envelope reformation, and cytokinesis. The cells arrest in mitosis.'
          }
        ]
      }
    }
  ]
};`;

// Part 7: AP Review
const part7 = `export const bioCellCyclePart7Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc7-intro',
      type: 'text' as const,
      content: \`
## AP Review — Cell Cycle and Mitosis

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating all cell cycle and mitosis concepts.
      \`
    },
    {
      id: 'cc7-summary',
      type: 'text' as const,
      content: \`
### Key Principles Summary

1. The cell cycle consists of **interphase** (G\\\\(_1\\\\), S, G\\\\(_2\\\\)) and **M phase** (mitosis + cytokinesis)
2. **Mitosis** produces two genetically identical daughter cells (preserving chromosome number)
3. **Cyclin-Cdk complexes** drive progression through each phase; cyclin degradation resets the system
4. **Checkpoints** (G\\\\(_1\\\\)/S, G\\\\(_2\\\\)/M, SAC) ensure accuracy before committing to the next phase
5. **Cancer** results from mutations in proto-oncogenes (gain of function) and tumor suppressors (loss of function)
6. Cytokinesis uses a **cleavage furrow** (animal) or **cell plate** (plant)
      \`
    },
    {
      id: 'cc7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 1
      \`,
      exercise: {
        questions: [
          {
            question: 'An organism has a diploid number of 2n = 8. During G2, how many DNA molecules (double helices) are present in each cell?',
            options: [
              '4',
              '8',
              '16 — each of the 8 chromosomes has been replicated (sister chromatids), so there are 16 DNA molecules',
              '32'
            ],
            correctAnswer: 2,
            explanation: 'In G2, each chromosome has been replicated and consists of 2 sister chromatids, each containing one DNA molecule. With 8 chromosomes, there are 8 x 2 = 16 DNA molecules. Note: the chromosome count is still 8 (counted by centromeres).'
          },
          {
            question: 'HPV (Human Papillomavirus) produces the E7 protein, which binds and inactivates Rb. How does this contribute to cervical cancer?',
            options: [
              'E7 directly damages DNA',
              'E7 inactivates Rb, releasing E2F to constitutively activate S-phase genes — the cell bypasses the G1/S checkpoint and proliferates without growth factor signals',
              'E7 prevents cytokinesis',
              'E7 blocks apoptosis only'
            ],
            correctAnswer: 1,
            explanation: 'By binding and inactivating Rb, the viral E7 protein mimics the effect of Rb phosphorylation. E2F is free to activate S-phase genes regardless of growth signals or cell cycle status. Combined with E6 (which degrades p53), HPV effectively disables both major tumor suppressor pathways.'
          },
          {
            question: 'Taxol (paclitaxel) is a chemotherapy drug that stabilizes microtubules and prevents their depolymerization. How does this kill cancer cells?',
            options: [
              'It prevents DNA replication',
              'It blocks chromosome condensation',
              'It prevents sister chromatid separation — stabilized kinetochore microtubules cannot shorten during anaphase, activating the spindle assembly checkpoint and arresting cells in mitosis, eventually triggering apoptosis',
              'It prevents cytokinesis only'
            ],
            correctAnswer: 2,
            explanation: 'Taxol locks microtubules in a polymerized state. During anaphase A, kinetochore microtubules must depolymerize to pull chromatids to the poles. With stabilized microtubules, proper separation fails, the SAC is chronically activated, and prolonged mitotic arrest eventually triggers apoptosis.'
          }
        ]
      }
    },
    {
      id: 'cc7-quiz2',
      type: 'multiple-choice' as const,
      content: \`
### AP-Style Questions — Set 2
      \`,
      exercise: {
        questions: [
          {
            question: 'Stem cells can divide asymmetrically — producing one daughter cell that remains a stem cell and one that differentiates. What must be differently distributed during this division?',
            options: [
              'DNA — one cell gets more chromosomes',
              'Regulatory molecules (transcription factors, signaling proteins) must be asymmetrically partitioned so that the two daughter cells receive different developmental signals despite having identical genomes',
              'Mitochondria — one cell gets all the mitochondria',
              'The two cells receive different chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'Both daughter cells receive identical chromosomes through mitosis. Asymmetric division depends on the unequal distribution of cell-fate determinants (transcription factors, mRNAs, signaling molecules) during cytokinesis. The daughter that inherits "stemness" factors remains a stem cell; the other differentiates.'
          },
          {
            question: 'The unicellular organism Caulobacter crescentus divides asymmetrically into a stalked cell and a swarmer cell, despite having identical DNA. This best illustrates:',
            options: [
              'Mutation during cell division',
              'Differential gene expression — the same genome can produce different cell types by expressing different sets of genes, regulated by asymmetrically distributed transcription factors',
              'Different DNA sequences in the two cells',
              'Random variation with no regulatory basis'
            ],
            correctAnswer: 1,
            explanation: 'Both daughter cells have identical genomes, but asymmetric distribution of regulatory proteins (like CtrA in Caulobacter) during division causes different sets of genes to be expressed in each cell. This is a fundamental principle of developmental biology — identical genomes, different gene expression.'
          },
          {
            question: 'After mitosis, each daughter cell has 46 chromosomes. If a cell undergoes mitosis without cytokinesis, and then undergoes a second round of mitosis WITH cytokinesis, how many chromosomes will each final daughter cell have?',
            options: [
              '23',
              '46',
              '92 — the first division without cytokinesis doubles the chromosome number to 92 in a single cell; the second mitosis distributes these equally, giving each daughter 92 chromosomes',
              '184'
            ],
            correctAnswer: 2,
            explanation: 'After the first mitosis without cytokinesis, the cell has 92 chromosomes (two complete sets, tetraploid). In the second round, these 92 chromosomes replicate during S phase (92 replicated chromosomes = 184 chromatids), then separate during mitosis. Each daughter cell receives 92 chromosomes.'
          }
        ]
      }
    },
    {
      id: 'cc7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
### Comprehensive Matching
      \`,
      exercise: {
        questions: [
          {
            question: 'Sister chromatids are separated by cleavage of cohesin:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'S phase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'DNA replication occurs:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'Prophase', 'Anaphase'],
            correctAnswer: 'S phase'
          },
          {
            question: 'Cyclin B-Cdk1 (MPF) triggers entry into this phase:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase (mitosis)', 'G0'],
            correctAnswer: 'M phase (mitosis)'
          },
          {
            question: 'The Rb protein blocks E2F to prevent progression into:',
            options: ['G1 phase', 'S phase', 'G2 phase', 'M phase', 'Cytokinesis'],
            correctAnswer: 'S phase'
          },
          {
            question: 'The contractile ring of actin and myosin functions during:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Cytokinesis', 'S phase'],
            correctAnswer: 'Cytokinesis'
          }
        ]
      }
    },
    {
      id: 'cc7-input',
      type: 'input-boxes' as const,
      content: \`
### Final Review
      \`,
      exercise: {
        questions: [
          {
            question: 'The chemotherapy drug that stabilizes microtubules, preventing depolymerization:',
            answer: 'Taxol',
            acceptableAnswers: ['Taxol', 'taxol', 'paclitaxel', 'Paclitaxel'],
            placeholder: 'e.g. colchicine'
          },
          {
            question: 'The viral protein from HPV that inactivates Rb:',
            answer: 'E7',
            acceptableAnswers: ['E7', 'e7'],
            placeholder: 'e.g. E6'
          }
        ]
      }
    },
    {
      id: 'cc7-exit',
      type: 'multiple-choice' as const,
      content: \`
### Final Exit Ticket
      \`,
      exercise: {
        questions: [
          {
            question: 'Integration question: A cancer cell has three mutations — Ras is constitutively active, p53 is non-functional, and telomerase is overexpressed. Explain how EACH mutation contributes to the cancer phenotype.',
            options: [
              'Only one mutation is needed for cancer',
              'Ras constitutively active → continuous growth signaling without growth factors; p53 non-functional → no G1/S arrest or apoptosis in response to DNA damage; telomerase overexpressed → unlimited replication capacity by maintaining telomere length (normally, somatic cells have a Hayflick limit)',
              'All three mutations have the same effect',
              'These mutations only cause cancer if inherited'
            ],
            correctAnswer: 1,
            explanation: 'Cancer typically requires multiple mutations affecting different regulatory pathways: (1) Ras (oncogene) provides constant proliferative signaling. (2) p53 (tumor suppressor) loss eliminates DNA damage checkpoints and apoptosis. (3) Telomerase (normally silent in somatic cells) allows indefinite replication by preventing telomere shortening. Together, these create an immortal, uncontrollably dividing, damage-tolerant cell.'
          }
        ]
      }
    }
  ]
};`;

// Write all files
const files = {
  'bio-cell-cycle-mitosis-part1.ts': part1,
  'bio-cell-cycle-mitosis-part2.ts': part2,
  'bio-cell-cycle-mitosis-part3.ts': part3,
  'bio-cell-cycle-mitosis-part4.ts': part4,
  'bio-cell-cycle-mitosis-part5.ts': part5,
  'bio-cell-cycle-mitosis-part6.ts': part6,
  'bio-cell-cycle-mitosis-part7.ts': part7,
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(BASE, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${filePath} (${content.length} chars)`);
}

console.log('Done! All 7 cell-cycle-mitosis parts written.');
