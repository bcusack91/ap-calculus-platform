export const mcatCellBioPart5Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb5-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 5 of 7 — Cell Signaling**

### Signal Transduction Pathway

$$\\text{Signal} \\to \\text{Receptor} \\to \\text{Transduction} \\to \\text{Response}$$

### Types of Signaling

| Type | Distance | Example |
|------|----------|---------|
| Endocrine | Long (via blood) | Insulin from pancreas |
| Paracrine | Short (nearby cells) | Growth factors |
| Autocrine | Self (same cell) | IL-2 in T cells |
| Juxtacrine | Contact (cell-to-cell) | Notch signaling |

### Receptor Types

| Receptor | Location | Mechanism | Example |
|----------|----------|-----------|---------|
| G-protein coupled (GPCR) | Membrane | G-protein → 2nd messenger (cAMP, IP$_3$) | Epinephrine receptor |
| Receptor tyrosine kinase (RTK) | Membrane | Dimerization → phosphorylation cascade | Insulin receptor |
| Ligand-gated ion channel | Membrane | Ion flow | ACh receptor at NMJ |
| Intracellular/Nuclear | Cytoplasm/nucleus | Direct gene activation | Steroid hormones |

### Second Messengers

- **cAMP**: Activated by adenylyl cyclase, activates PKA
- **IP$_3$ / DAG**: Activated by phospholipase C
- **Ca$^{2+}$**: Released from ER, activates many enzymes
- **cGMP**: Activated by guanylyl cyclase`
    },
    {
      id: 'cb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Signaling** 🎯`,
      exercise: {
        questions: [
          {
            question: `Steroid hormones (like testosterone) can directly activate genes because they:`,
            options: [`Are hydrophobic and cross the cell membrane to bind intracellular receptors`, `Bind to GPCRs on the cell surface`, `Are water-soluble`, `Use cAMP as a second messenger`],
            correctAnswer: 0,
            explanation: `Steroids are derived from cholesterol (lipid-soluble). They cross the membrane, bind cytoplasmic or nuclear receptors, and the hormone-receptor complex directly acts as a transcription factor.`
          }
        ]
      }
    },
    {
      id: 'cb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Signal transduction: Signal → Receptor → Transduction → Response
- GPCRs use G-proteins and second messengers (cAMP, IP$_3$, Ca$^{2+}$)
- RTKs dimerize and auto-phosphorylate (insulin, growth factors)
- Steroid hormones bypass membrane receptors — directly enter cell`
    }
  ]
};
