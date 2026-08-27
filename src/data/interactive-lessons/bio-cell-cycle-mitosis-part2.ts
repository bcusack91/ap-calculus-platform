export const bioCellCyclePart2Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc2-intro',
      type: 'text' as const,
      content: `
## Interphase — Preparation for Division

**Part 2 of 7**

Interphase is often called the "resting phase," but this is a misnomer — the cell is extremely active during interphase.  It is growing, producing proteins, duplicating organelles, and (during S phase) replicating its entire genome.
      `
    },
    {
      id: 'cc2-g1',
      type: 'text' as const,
      content: `
### G$_1$ Phase — Growth and Preparation

G$_1$ is typically the longest and most variable phase of interphase:

**Key events:**
- Cell growth — increase in cell size and mass
- Synthesis of proteins, lipids, and carbohydrates
- Duplication of organelles (ribosomes, mitochondria, ER)
- Centriole duplication begins (in animal cells)
- Gene expression patterns establish the functional identity of the cell

**G$_1$/S Checkpoint (Restriction Point):**
- The most important checkpoint in the cell cycle
- The cell "decides" whether to commit to division
- Checks: adequate cell size, sufficient nutrients, growth factor signals, and intact DNA
- If the cell passes this checkpoint, it is committed to S phase and division
- If conditions are unfavorable, the cell enters **G$_0$**

> **Growth Factors:** External signals (like PDGF, EGF, and insulin-like growth factor) bind to receptors and activate signaling cascades that promote passage through the G$_1$/S checkpoint.  Cancer cells often have mutations that make them independent of growth factor signaling.
      `
    },
    {
      id: 'cc2-s',
      type: 'text' as const,
      content: `
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

> **DNA Content Notation:** A cell in G$_1$ has **2n** chromosomes and **2C** DNA content.  After S phase (in G$_2$), it has **2n** chromosomes but **4C** DNA content (each chromosome has doubled its DNA).
      `
    },
    {
      id: 'cc2-g2',
      type: 'text' as const,
      content: `
### G$_2$ Phase — Final Preparation

G$_2$ is the final preparation period before mitosis:

**Key events:**
- Continued cell growth and protein synthesis
- Synthesis of proteins needed for mitosis (e.g., tubulin for the mitotic spindle)
- Final duplication of centrosomes completed
- **G$_2$/M Checkpoint** — the cell verifies:
  - All DNA has been completely and accurately replicated
  - DNA damage has been repaired
  - The cell is large enough to divide
  - Critical mitotic proteins are present

> **If DNA damage is detected:** The checkpoint kinase **ATM/ATR** activates **p53**, which can halt the cell cycle (allowing time for repair) or trigger **apoptosis** (programmed cell death) if the damage is too severe to repair.
      `
    },
    {
      id: 'cc2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Interphase
      `,
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
      content: `
### Key Terms — Interphase
      `,
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
      content: `
### Exit Ticket — Interphase
      `,
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
};