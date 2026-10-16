export const bioCellCyclePart5Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc5-intro',
      type: 'text' as const,
      content: `
## Cell Cycle Regulation — Checkpoints and Cancer

**Part 5 of 7**

The cell cycle is tightly regulated to ensure accurate DNA replication and equal chromosome distribution.  The control system relies on **cyclins**, **cyclin-dependent kinases (Cdks)**, **checkpoints**, and **tumor suppressors**.

Loss of cell cycle control is the fundamental basis of **cancer**.
      `
    },
    {
      id: 'cc5-cdks',
      type: 'text' as const,
      content: `
### Cyclins and Cdks — The Engine of the Cell Cycle

**Cyclin-dependent kinases (Cdks)** are enzymes that phosphorylate target proteins to drive the cell through each phase. Cdks are present at fairly constant levels, but they are **only active when bound to a cyclin** partner.

**How cyclin-Cdk regulation works:**
1. Cyclins are synthesized and broken down in a repeating pattern, so each kind of cyclin builds up during a particular part of the cycle
2. When enough cyclin has accumulated, it binds and activates its Cdk
3. The active cyclin-Cdk complex phosphorylates target proteins, pushing the cell past a checkpoint into the next phase
4. After that event, the cyclin is broken down
5. Cdk activity drops, resetting the system for the next round

### Reading a cyclin graph

A typical AP graph plots cyclin concentration and Cdk activity over two or three cycles:

| Observation on the graph | What it means |
|---|---|
| Cyclin rises gradually through interphase | Cyclin is being made faster than it is broken down |
| Cdk activity rises only once cyclin is high | Cdks need cyclin to be active |
| Both drop sharply during mitosis | Cyclin is destroyed, switching the Cdk off so the cell can finish dividing |
| Cdk protein level stays flat | The Cdk itself is not made or destroyed each cycle; only its activity changes |

> Which specific cyclin pairs with which Cdk at each checkpoint is not tested on the AP exam. Know the general mechanism: cyclins activate Cdks, and the rise and fall of cyclins drives the cell through its checkpoints.
      `
    },
    {
      id: 'cc5-checkpoints',
      type: 'text' as const,
      content: `
### Checkpoint Summary

| Checkpoint | Location | What is checked | If the check fails |
|-----------|----------|----------------|---------------|
| **G$_1$/S** | End of G$_1$ | Cell size, nutrients, growth-factor signals, DNA damage | Cell pauses or enters G$_0$ |
| **G$_2$/M** | End of G$_2$ | DNA completely replicated; damage repaired | Cycle halts for repair, or apoptosis |
| **Metaphase (M)** | Metaphase | Every chromosome attached to the spindle from both poles | Anaphase is delayed |

### How a checkpoint stops the cycle

Checkpoints work by controlling cyclin-Cdk activity. When DNA is damaged, the tumor suppressor protein **p53** builds up. It halts the cycle by blocking the cyclin-Cdk activity needed to move forward, giving time for repair. If the damage cannot be repaired, p53 triggers **apoptosis** (programmed cell death), so the damaged cell does not divide.

Other tumor suppressors act as brakes at the G$_1$/S checkpoint: they hold the cell in G$_1$ until growth-factor signals, acting through cyclin-Cdk complexes, release the brake.
      `
    },
    {
      id: 'cc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Regulation
      `,
      exercise: {
        questions: [
          {
            question: 'A drug blocks the cyclin-Cdk complex that is required for a cell to pass the G2/M checkpoint. Where would treated cells accumulate?',
            options: [
              'At the end of G2, unable to begin mitosis',
              'In S phase, unable to finish copying their DNA',
              'In anaphase, unable to separate their chromatids',
              'In G0, permanently unable to divide again'
            ],
            correctAnswer: 0,
            explanation: 'Without that cyclin-Cdk activity the cell cannot pass the G2/M checkpoint, so it stops after finishing G2. DNA replication in S phase is already complete, the cell never reaches anaphase, and G0 is entered from G1, not G2.'
          },
          {
            question: 'In dividing cells, cyclin concentration rises through interphase, peaks at the start of mitosis, and then drops sharply, while the amount of Cdk protein stays constant. Cdk activity rises and falls along with cyclin. What best explains this pattern?',
            options: [
              'Cdks function only while attached to cyclin',
              'Cdks are made only while cyclin is present',
              'Cdks are destroyed whenever cyclin is destroyed',
              'Cdks convert themselves into cyclin molecules'
            ],
            correctAnswer: 0,
            explanation: 'The amount of Cdk never changes, so its activity must depend on something else: binding to cyclin. When cyclin is destroyed, the Cdk is still there but inactive. That is why Cdk activity tracks cyclin concentration.'
          }
        ]
      }
    },
    {
      id: 'cc5-cancer',
      type: 'text' as const,
      content: `
### Cancer — Loss of Cell Cycle Control

Cancer results from the accumulation of mutations in genes that regulate the cell cycle.  Two categories of genes are involved:

**1. Proto-oncogenes → Oncogenes (gain-of-function mutations)**
- Proto-oncogenes are normal genes that PROMOTE cell division (e.g., growth factors, growth factor receptors, signal transduction proteins, cyclins)
- A mutation that makes the gene product hyperactive or overexpressed converts it into an **oncogene**
- Only ONE mutant allele is needed (dominant)
- Examples: a growth-factor receptor that signals even without its ligand; a relay protein in a growth-signaling pathway that is stuck "on"; a cyclin made in excess

**2. Tumor suppressor genes (loss-of-function mutations)**
- Normal products INHIBIT cell division, promote apoptosis, or repair DNA
- BOTH alleles usually must be inactivated (recessive — the "two-hit" hypothesis)
- Examples:
  - **p53** — "guardian of the genome"; halts the cycle for DNA repair or triggers apoptosis; mutated in about half of human cancers
  - G$_1$/S brakes — when both copies are lost, cells enter S phase without growth signals

> **Why cancer takes several mutations:** a cell usually needs both an accelerator stuck "on" (an oncogene) and lost brakes (both copies of a tumor suppressor) before it divides without control. That is one reason cancer risk rises with age.
      `
    },
    {
      id: 'cc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Cancer
      `,
      exercise: {
        questions: [
          {
            question: 'A patient has a mutation in ONE copy of the p53 gene. According to the two-hit hypothesis, this person:',
            options: [
              'Will certainly develop cancer, because one mutant copy disables p53',
              'Has a higher cancer risk, because only one more mutation would eliminate p53 function',
              'Is fully protected, because one working copy of p53 is always sufficient',
              'Already has cancer, because any p53 mutation causes tumor formation'
            ],
            correctAnswer: 1,
            explanation: 'Tumor suppressor genes typically require inactivation of both alleles (two hits). Having one mutant copy increases cancer risk significantly because only one more mutation event is needed. However, the person does not automatically develop cancer — additional mutations and factors are required.'
          },
          {
            question: 'Many chemotherapy drugs target rapidly dividing cells. Why does this approach also damage healthy tissues like bone marrow, hair follicles, and intestinal lining?',
            options: [
              'These tissues also contain cancer cells that the drugs are designed to target',
              'These normal tissues also divide rapidly, so the drugs hit them too',
              'Chemotherapy drugs kill all cells equally, whether dividing rapidly or not',
              'These tissues lack p53, so they cannot survive DNA damage from the drugs'
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
      content: `
### Key Terms — Regulation and Cancer
      `,
      exercise: {
        questions: [
          {
            question: 'The tumor suppressor known as the "guardian of the genome":',
            answer: 'p53',
            acceptableAnswers: ['p53', 'P53', 'TP53'],
            placeholder: 'e.g. cyclin'
          },
          {
            question: 'The general term for a gene whose normal product slows cell division or triggers apoptosis (two words):',
            answer: 'tumor suppressor',
            acceptableAnswers: ['tumor suppressor', 'Tumor suppressor', 'tumor suppressor gene', 'tumour suppressor', 'tumor-suppressor'],
            placeholder: 'e.g. oncogene'
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
      content: `
### Exit Ticket — Regulation
      `,
      exercise: {
        questions: [
          {
            question: 'A cancer cell has a mutation that causes overproduction of the cyclin that drives cells past the G1/S checkpoint. What is the expected effect?',
            options: [
              'The cell would arrest in G1, since extra cyclin blocks its Cdk',
              'The cell would enter S phase again and again and keep dividing',
              'DNA replication would stop, since the extra cyclin binds to the DNA',
              'The cell would enter G0 for good and stop dividing altogether'
            ],
            correctAnswer: 1,
            explanation: 'Extra cyclin keeps its Cdk active, so the signal to pass the G1/S checkpoint is always on and the cell enters S phase again and again without waiting for growth signals. This makes the cyclin gene act like an oncogene. Cyclin activates, rather than blocks, its Cdk.'
          }
        ]
      }
    }
  ]
};