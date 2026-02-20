export const mcatCellBioPart3Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb3-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 3 of 7 — Cell Cycle & Mitosis**

### The Cell Cycle

| Phase | Events | Duration |
|-------|--------|----------|
| G$_1$ | Cell growth, organelle duplication | Variable |
| S | DNA replication | ~8 hours |
| G$_2$ | Final growth, preparation for mitosis | ~4 hours |
| M | Mitosis + cytokinesis | ~1 hour |
| G$_0$ | Quiescent (non-dividing) | Indefinite |

### Mitosis Stages (PMAT)

1. **Prophase**: Chromosomes condense, nuclear envelope breaks down, spindle forms
2. **Metaphase**: Chromosomes align at metaphase plate
3. **Anaphase**: Sister chromatids separate, pulled to poles
4. **Telophase**: Nuclear envelopes reform, chromosomes decondense

### Cell Cycle Checkpoints

| Checkpoint | Location | Checks for |
|-----------|----------|-----------|
| G$_1$/S | End of G$_1$ | DNA damage, cell size, growth signals |
| G$_2$/M | End of G$_2$ | Complete DNA replication, no damage |
| Spindle | During M | All chromosomes attached to spindle |

### MCAT Connection: Cancer

Cancer = uncontrolled cell division due to:
- **Oncogenes**: Gain-of-function (gas pedal stuck ON)
- **Tumor suppressors**: Loss-of-function (brakes broken) — e.g., p53, Rb`
    },
    {
      id: 'cb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell has 46 chromosomes in G$_1$. After S phase but before mitosis, it has:`,
            options: [`46 chromosomes, each with 2 sister chromatids (92 chromatids total)`, `92 chromosomes`, `23 chromosomes`, `46 chromosomes with 46 chromatids`],
            correctAnswer: 0,
            explanation: `DNA replicates in S phase, but centromeres haven't split yet. So: still 46 chromosomes, but each consists of 2 sister chromatids joined at the centromere. After anaphase, they separate into 92 individual chromatids.`
          },
          {
            question: `Loss of p53 function would most directly affect:`,
            options: [`The G$_1$/S checkpoint — damaged DNA would not be detected, allowing replication to proceed`, `Chromosome condensation during prophase`, `Cytokinesis`, `Spindle formation`],
            correctAnswer: 0,
            explanation: `p53 is the "guardian of the genome" — it arrests the cell cycle at G$_1$/S when DNA damage is detected and can trigger apoptosis. Without p53, damaged cells continue dividing → cancer.`
          }
        ]
      }
    },
    {
      id: 'cb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Cell cycle: G$_1$ → S → G$_2$ → M (interphase = G$_1$+S+G$_2$)
- Mitosis: PMAT (Prophase, Metaphase, Anaphase, Telophase)
- Checkpoints prevent damaged/incomplete cells from dividing
- Cancer: oncogenes (gain of function) + tumor suppressors (loss of function)`
    }
  ]
};
