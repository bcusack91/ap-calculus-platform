export const bioCellCyclePart6Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Cell Cycle

**Part 6 of 7**

This workshop applies cell cycle and mitosis concepts to experimental scenarios commonly seen on the AP Biology exam.
      `
    },
    {
      id: 'cc6-scenario1',
      type: 'text' as const,
      content: `
### Scenario 1: Mitotic Index Calculation

A student observes 200 onion root tip cells under a microscope and counts the number of cells in each stage:

| Stage | Number of Cells |
|-------|----------------|
| Interphase | 170 |
| Prophase | 14 |
| Metaphase | 6 |
| Anaphase | 4 |
| Telophase | 6 |

**Mitotic Index** = (cells in mitosis / total cells) $\\times$ 100

$$\\text{Mitotic Index} = \\frac{14 + 6 + 4 + 6}{200} \\times 100 = \\frac{30}{200} \\times 100 = 15\\%$$

The mitotic index tells us the proportion of cells actively dividing.  A higher mitotic index indicates more rapid cell proliferation.

**The relative time in each phase** is proportional to the number of cells observed:
- If the total cell cycle is 24 hours, and 15% of cells are in mitosis, then mitosis takes ~3.6 hours
- Prophase (14/200 = 7%) $\\approx$ 1.68 hours
- Anaphase (4/200 = 2%) $\\approx$ 0.48 hours (shortest phase — confirmed by observation)
      `
    },
    {
      id: 'cc6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Scenario 1 Questions
      `,
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
      content: `
### Scenario 2: Cell Fusion Experiment

Researchers fuse cells in different phases and observe the results:

**Experiment A:** S-phase cell fused with G$_1$-phase cell
- Result: The G$_1$ nucleus immediately enters S phase (begins DNA replication)
- Interpretation: S-phase cells contain factors (Cyclin E/A-Cdk2) that can drive a G$_1$ nucleus into S phase

**Experiment B:** M-phase cell fused with G$_1$-phase cell
- Result: The G$_1$ nucleus undergoes premature chromosome condensation (PCC) — but the chromosomes are single-chromatid (unreplicated), leading to chromosome damage
- Interpretation: M-phase cells contain MPF (Cyclin B-Cdk1) that forces any nucleus to enter M phase regardless of DNA replication status

**Experiment C:** M-phase cell fused with S-phase cell
- Result: The S-phase chromosomes show premature condensation of partially replicated DNA — pulverized chromosomes (chromosome fragmentation)
- Interpretation: Forcing M phase entry on incompletely replicated DNA is catastrophic

> **These experiments demonstrated that cell cycle progression is controlled by diffusible cytoplasmic factors** (cyclins and Cdks), not by fixed programs in the nucleus alone.
      `
    },
    {
      id: 'cc6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Scenario 2 Questions
      `,
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
      content: `
### Apply Your Knowledge
      `,
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
      content: `
### Exit Ticket — Workshop
      `,
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
};