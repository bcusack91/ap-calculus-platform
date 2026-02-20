export const mcatCellBioPart7Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb7-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 7 of 7 — Specialized Cell Types & Tissues**

### The Four Tissue Types

| Type | Function | Examples |
|------|----------|---------|
| **Epithelial** | Cover/line surfaces, secretion | Skin, intestinal lining, glands |
| **Connective** | Support, connect, protect | Bone, blood, cartilage, adipose |
| **Muscle** | Contraction/movement | Skeletal, smooth, cardiac |
| **Nervous** | Signal transmission | Neurons, glial cells |

### Muscle Types

| Feature | Skeletal | Cardiac | Smooth |
|---------|---------|---------|--------|
| Striated? | Yes | Yes | No |
| Voluntary? | Yes | No | No |
| Nuclei | Multinucleated | 1-2 central | 1 central |
| Special features | T-tubules, SR | Intercalated discs | Gap junctions |

### Stem Cells

| Type | Potency | Can become |
|------|---------|-----------|
| Totipotent | Everything | Any cell + placenta (zygote) |
| Pluripotent | Almost everything | Any cell type (embryonic stem cells) |
| Multipotent | Several types | Limited lineage (hematopoietic stem cells) |
| Unipotent | One type | Only one cell type |`
    },
    {
      id: 'cb7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Tissues & Cell Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cardiac muscle has intercalated discs because they:`,
            options: [`Contain gap junctions that allow synchronized contraction of the heart`, `Provide extra structural support`, `Store calcium`, `Are remnants from embryonic development`],
            correctAnswer: 0,
            explanation: `Intercalated discs have gap junctions (electrical coupling for rapid signal spread) and desmosomes (mechanical adhesion). This allows the heart to contract as a coordinated unit (functional syncytium).`
          }
        ]
      }
    },
    {
      id: 'cb7-summary',
      type: 'text' as const,
      content: `### Cell Biology — Complete! ✅

From organelles to tissues, cell biology is the foundation of every MCAT biology passage. Know organelle functions, membrane transport, the cell cycle, meiosis, signaling pathways, and apoptosis — these are all ultra-high-yield.`
    }
  ]
};
