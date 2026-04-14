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

**Cyclin-dependent kinases (Cdks)** are enzymes that phosphorylate target proteins to drive the cell through each phase.  Cdks are only active when bound to a **cyclin** partner.

**Key Cdk-cyclin complexes:**

| Complex | Phase regulated | Function |
|---------|----------------|----------|
| **Cyclin D — Cdk4/6** | G\\(_1\\) progression | Responds to growth factor signals; phosphorylates Rb |
| **Cyclin E — Cdk2** | G\\(_1\\)/S transition | Commits cell to S phase; initiates DNA replication licensing |
| **Cyclin A — Cdk2** | S phase | Drives DNA replication; prevents re-replication |
| **Cyclin B — Cdk1 (MPF)** | G\\(_2\\)/M transition | Triggers entry into mitosis; promotes chromosome condensation, nuclear envelope breakdown, spindle assembly |

**How cyclin-Cdk regulation works:**
1. Cyclins are synthesized and degraded in a cyclical pattern — each cyclin accumulates during a specific phase
2. When cyclin levels are high, Cdks are activated
3. Activated Cdk phosphorylates target proteins, driving the next cell cycle event
4. After the event, cyclins are tagged for destruction by ubiquitin ligases (e.g., APC/C, SCF) and degraded by the proteasome
5. Cdk activity drops, resetting the system

> **MPF (Maturation/Mitosis Promoting Factor):** The Cyclin B-Cdk1 complex was originally discovered in frog oocytes as the factor that triggers entry into M phase.  Its discovery by Leland Hartwell, Tim Hunt, and Paul Nurse earned the 2001 Nobel Prize in Physiology or Medicine.
      `
    },
    {
      id: 'cc5-checkpoints',
      type: 'text' as const,
      content: `
### Checkpoint Summary

| Checkpoint | Location | What is checked | Key molecules |
|-----------|----------|----------------|---------------|
| **G\\(_1\\)/S (Restriction Point)** | End of G\\(_1\\) | Cell size, nutrients, growth signals, DNA integrity | Cyclin D-Cdk4/6, Rb, p53, p21 |
| **Intra-S** | During S phase | Replication fork stalling, DNA damage | ATR, Chk1 |
| **G\\(_2\\)/M** | End of G\\(_2\\) | Complete DNA replication, DNA damage repair | Cyclin B-Cdk1, ATM, Chk2, p53 |
| **Spindle Assembly (SAC)** | Metaphase | All kinetochores attached to spindle | Mad2, BubR1, APC/C |

### The Rb Pathway (G\\(_1\\)/S control)

1. **Rb (Retinoblastoma protein)** normally INHIBITS E2F transcription factors
2. When E2F is inhibited, genes needed for S phase entry are NOT transcribed
3. Growth factor signaling activates **Cyclin D-Cdk4/6**, which **phosphorylates Rb**
4. Phosphorylated Rb releases E2F
5. E2F activates transcription of genes for DNA replication (DNA polymerase, thymidine kinase, Cyclin E, etc.)
6. Cyclin E-Cdk2 further phosphorylates Rb, creating a positive feedback loop that commits the cell to S phase
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
      content: `
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
      content: `
### Key Terms — Regulation and Cancer
      `,
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
      content: `
### Exit Ticket — Regulation
      `,
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
};