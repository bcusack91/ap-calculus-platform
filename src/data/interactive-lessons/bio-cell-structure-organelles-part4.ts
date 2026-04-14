export const bioCellStructurePart4Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# 📦 The Endomembrane System

**Part 4 of 7 — Golgi Apparatus, Lysosomes, and Vesicular Transport**

---

> 🔑 **Big idea:** The endomembrane system is a network of interconnected membranes that work together to synthesize, modify, package, and transport proteins and lipids. Understanding the flow through this system is heavily tested on the AP exam.

---

### What You'll Master in Part 4
- The Golgi apparatus — structure and function (cis vs. trans face)
- Lysosomes and their digestive role
- Vacuoles — plant vs. animal cells
- Vesicular transport and the secretory pathway`
    },
    {
      id: 'cs4-golgi',
      type: 'text' as const,
      content: `
## 📦 The Golgi Apparatus

The Golgi is a stack of flattened, membrane-bound sacs (cisternae) that functions as the cell's **processing and shipping center**.

### Structure

| Component | Description |
|-----------|------------|
| **Cis face** ("receiving") | Faces the ER; receives transport vesicles |
| **Medial cisternae** | Middle layers where modifications occur |
| **Trans face** ("shipping") | Faces the plasma membrane; sends out vesicles |
| **Transport vesicles** | Membrane-bound packages that shuttle cargo |

---

### Functions of the Golgi

1. **Modifies proteins** — adds carbohydrate chains (glycosylation), phosphate groups, or lipids
2. **Sorts and packages** — directs proteins to their correct destination
3. **Manufactures polysaccharides** — including cell wall components in plant cells

### Protein Destinations from the Trans Golgi

| Destination | Vesicle Type | Example |
|-------------|-------------|---------|
| **Plasma membrane** | Secretory vesicles | Insulin secretion from pancreatic β-cells |
| **Lysosomes** | Lysosomal vesicles | Digestive enzymes tagged with mannose-6-phosphate |
| **Cell surface** | Constitutive vesicles | Membrane proteins and lipids |

> 🔑 **The secretory pathway:** Rough ER → transport vesicles → cis Golgi → medial Golgi → trans Golgi → secretory vesicles → plasma membrane (exocytosis)
      `
    },
    {
      id: 'cs4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Golgi Apparatus Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A protein is synthesized on the rough ER. In what order does it travel through the endomembrane system?',
            options: [
              'Rough ER → Golgi cis face → Golgi trans face → vesicle → destination',
              'Golgi → Rough ER → smooth ER → vesicle → destination',
              'Nucleus → smooth ER → Golgi → rough ER → destination',
              'Free ribosome → Golgi → rough ER → vesicle → destination'
            ],
            correctAnswer: 0,
            explanation: 'Proteins synthesized on the rough ER are packaged in transport vesicles that bud from the ER, fuse with the cis face of the Golgi, move through the Golgi cisternae while being modified, and exit from the trans face in vesicles targeted to their destination.'
          },
          {
            question: 'Glycosylation is the process of:',
            options: [
              'Removing amino acids from a protein',
              'Adding carbohydrate chains to proteins or lipids',
              'Breaking down glucose for energy',
              'Replicating glycogen molecules'
            ],
            correctAnswer: 1,
            explanation: 'Glycosylation is the covalent attachment of carbohydrate chains (oligosaccharides) to proteins or lipids. It begins in the rough ER and continues in the Golgi. Glycoproteins are common on the cell surface and in secreted proteins.'
          }
        ]
      }
    },
    {
      id: 'cs4-lysosomes',
      type: 'text' as const,
      content: `
## 🔴 Lysosomes — The Cell's Digestive System

Lysosomes are membrane-bound organelles containing **hydrolytic enzymes** (hydrolases) that break down macromolecules.

### Key Features

| Property | Detail |
|----------|--------|
| **Internal pH** | ~4.5–5.0 (acidic — maintained by H⁺ pumps) |
| **Enzyme type** | Acid hydrolases (lipases, proteases, nucleases, etc.) |
| **Membrane protection** | Inner membrane is heavily glycosylated to resist self-digestion |
| **Origin** | Formed from Golgi; enzymes tagged with mannose-6-phosphate |

---

### Functions

| Process | Description |
|---------|------------|
| **Phagocytosis** | Digests bacteria or debris engulfed by immune cells (macrophages) |
| **Autophagy** | Recycles damaged or aged organelles |
| **Apoptosis** | Releases enzymes during programmed cell death |
| **Receptor recycling** | Degrades internalized receptor-ligand complexes |

> ⚠️ **Lysosomal storage diseases:** If a lysosomal enzyme is missing or defective, substrates accumulate. Examples: Tay-Sachs disease (missing hexosaminidase A → lipid accumulation in neurons) and Pompe disease (missing acid maltase → glycogen accumulation).

---

## 🟢 Vacuoles

| Type | Found In | Function |
|------|----------|----------|
| **Central vacuole** | Plant cells | Water storage, turgor pressure, pigment storage, waste disposal |
| **Food vacuoles** | Protists, some animal cells | Formed by phagocytosis; fuse with lysosomes for digestion |
| **Contractile vacuoles** | Freshwater protists | Pump out excess water to maintain osmotic balance |

> 🔑 **The central vacuole** can occupy up to 90% of a plant cell's volume. It generates **turgor pressure** by absorbing water, which helps maintain the plant's rigidity.
      `
    },
    {
      id: 'cs4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Lysosomes & Vacuoles Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A child is diagnosed with a lysosomal storage disease in which undigested lipids accumulate in brain cells. This is most likely caused by:',
            options: [
              'Overproduction of lipids by the smooth ER',
              'A defective lysosomal hydrolase enzyme',
              'Too many lysosomes in the brain cells',
              'Excessive phagocytosis by neurons'
            ],
            correctAnswer: 1,
            explanation: 'Lysosomal storage diseases result from deficiency of specific lysosomal enzymes. Without the enzyme, the substrate cannot be broken down and accumulates inside lysosomes, eventually impairing cell function. Tay-Sachs disease is a classic example.'
          },
          {
            question: 'A plant cell is placed in a hypertonic solution. What happens to the central vacuole?',
            options: [
              'It expands and pushes the cell wall outward',
              'It shrinks as water leaves by osmosis, causing plasmolysis',
              'It ruptures and releases its contents',
              'It remains unchanged because of the cell wall'
            ],
            correctAnswer: 1,
            explanation: 'In a hypertonic solution, water moves out of the cell by osmosis. The central vacuole shrinks, the plasma membrane pulls away from the cell wall (plasmolysis), and the plant wilts. The cell wall prevents the cell from lysing but cannot prevent water loss.'
          }
        ]
      }
    },
    {
      id: 'cs4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Endomembrane System Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The cis face of the Golgi receives vesicles from the',
            options: ['Plasma membrane', 'Rough ER', 'Lysosomes', 'Nucleus']
          },
          {
            label: 'Mannose-6-phosphate is a tag that directs enzymes to the',
            options: ['Nucleus', 'Mitochondria', 'Lysosomes', 'Plasma membrane']
          },
          {
            label: 'Turgor pressure in plant cells is generated by the',
            options: ['Golgi apparatus', 'Central vacuole', 'Chloroplasts', 'Cell wall alone']
          },
          {
            label: 'The process by which a cell recycles its own damaged organelles is called',
            options: ['Phagocytosis', 'Apoptosis', 'Autophagy', 'Exocytosis']
          }
        ],
        correctAnswers: ['Rough ER', 'Lysosomes', 'Central vacuole', 'Autophagy'],
        hint1: 'Transport vesicles from the ER fuse with the cis (receiving) face.',
        hint2: 'Mannose-6-phosphate is the molecular address label for lysosomal enzymes.',
        hint3: 'The vacuole absorbs water, creating pressure against the rigid cell wall.',
        explanation: "ER vesicles deliver cargo to the cis Golgi. M6P tags direct enzymes to lysosomes. The central vacuole generates turgor pressure. Autophagy (literally 'self-eating') is the lysosomal degradation of a cell's own components."
      }
    },
    {
      id: 'cs4-input',
      type: 'input-boxes' as const,
      content: `
**Key Terms** ✏️

Enter the correct term for each description.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Golgi apparatus', 'lysosome', 'autophagy'],
        hint1: 'The organelle that modifies, sorts, and packages proteins received from the ER.',
        hint2: 'The membrane-bound organelle with an acidic interior that contains digestive enzymes.',
        hint3: 'The process by which a cell degrades and recycles its own damaged organelles.',
        explanation: "The Golgi apparatus (or Golgi body/complex) is the cell's processing and distribution center. Lysosomes are the digestive compartments (pH ~4.5-5). Autophagy is the lysosome-mediated recycling of cellular components — important for quality control and during starvation."
      }
    },
    {
      id: 'cs4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Endomembrane System** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher uses a radioactive amino acid to trace the path of a secreted protein. In which order would radioactivity appear?',
            options: [
              'Golgi → ER → plasma membrane → extracellular space',
              'Rough ER → Golgi → vesicles → plasma membrane → extracellular space',
              'Free ribosomes → smooth ER → Golgi → lysosomes',
              'Nucleus → rough ER → lysosomes → extracellular space'
            ],
            correctAnswer: 1,
            explanation: 'This classic pulse-chase experiment was performed by George Palade (Nobel Prize, 1974). Secreted proteins follow: ribosome/rough ER → transport vesicles → Golgi (cis → trans) → secretory vesicles → plasma membrane → extracellular space via exocytosis.'
          },
          {
            question: 'If the pH inside lysosomes were raised to 7.0 (neutral), what would most likely happen?',
            options: [
              'Lysosomal enzymes would work faster',
              'Lysosomal enzymes would denature and lose function',
              'The lysosome would fuse more readily with phagosomes',
              'The lysosome would begin producing ATP'
            ],
            correctAnswer: 1,
            explanation: 'Lysosomal hydrolases are acid hydrolases — they have optimal activity at pH 4.5–5.0. At neutral pH, these enzymes lose their functional conformation (denature), which serves as a safety mechanism: if a lysosome ruptures, the enzymes become inactive in the neutral cytoplasm.'
          }
        ]
      }
    }
  ]
};
