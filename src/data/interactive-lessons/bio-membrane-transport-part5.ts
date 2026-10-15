export const bioMembraneTransportPart5Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt5-intro',
      type: 'text' as const,
      content: `
## Bulk Transport — Vesicle-Mediated Movement

**Part 5 of 7**

Some materials are too large to cross the membrane through channels or carriers (e.g., proteins, polysaccharides, whole cells).  These are transported in membrane-bound **vesicles** through processes called **endocytosis** (into the cell) and **exocytosis** (out of the cell).

Both processes require **energy** (ATP) and involve the dynamic remodeling of the plasma membrane.
      `
    },
    {
      id: 'mt5-exo',
      type: 'text' as const,
      content: `
### Exocytosis — Secretion

In exocytosis, a **vesicle** fuses with the plasma membrane and releases its contents outside the cell:

1. Material is packaged into a vesicle (often by the Golgi apparatus)
2. The vesicle is transported to the cell surface along the cytoskeleton
3. The vesicle membrane fuses with the plasma membrane
4. Contents are released to the exterior; vesicle membrane becomes part of the plasma membrane

**Examples of exocytosis:**
- Secretion of neurotransmitters at synapses
- Release of hormones (insulin from beta cells)
- Secretion of digestive enzymes
- Secretion of extracellular matrix components
- Mucus secretion by goblet cells

> **Membrane Recycling:** Exocytosis adds membrane to the plasma membrane. This is balanced by endocytosis, which removes membrane — keeping the total surface area relatively constant.
      `
    },
    {
      id: 'mt5-endo',
      type: 'text' as const,
      content: `
### Endocytosis — Uptake

Endocytosis is the inward folding of the plasma membrane to form a vesicle that brings material INTO the cell:

**Three types of endocytosis:**

| Type | Mechanism | What is taken in | Example |
|------|-----------|-----------------|---------|
| **Phagocytosis** ("cell eating") | Cell extends pseudopods to engulf large particles | Cells, bacteria, debris | Macrophages engulfing pathogens |
| **Pinocytosis** ("cell drinking") | Small indentations of membrane capture droplets of extracellular fluid | Small dissolved molecules in fluid | Most cell types; non-specific |
| **Receptor-mediated endocytosis** | Specific molecules bind to receptors, and that patch of membrane folds inward | Specific molecules (ligands) | Cholesterol uptake |

**Why receptors matter:** because receptors bind only their specific ligand, the vesicle that forms is packed with the molecule the cell needs, even when that molecule is scarce outside. If the receptors are missing or defective, the ligand stays outside the cell and can build up there (for example, cholesterol accumulating in the blood).

> The protein coats and sorting compartments involved in each kind of endocytosis are not tested on the AP exam; the CED requires that endocytosis and exocytosis move large substances in vesicles and require energy.
      `
    },
    {
      id: 'mt5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Bulk Transport
      `,
      exercise: {
        questions: [
          {
            question: 'A macrophage engulfs a bacterium by extending pseudopods around it and forming a phagosome. This is an example of:',
            options: [
              'Pinocytosis',
              'Receptor-mediated endocytosis',
              'Phagocytosis',
              'Phagolysosome formation'
            ],
            correctAnswer: 2,
            explanation: 'Phagocytosis ("cell eating") involves the extension of pseudopods to surround and engulf large particles (like bacteria). The resulting vesicle is called a phagosome, which fuses with a lysosome for digestion.'
          },
          {
            question: 'Why is receptor-mediated endocytosis more efficient than pinocytosis for taking up specific molecules like cholesterol?',
            options: [
              'It spends more ATP per vesicle, so each vesicle swallows more fluid',
              'Receptors gather the target molecules before the membrane folds in',
              'Pinocytosis cannot take in any dissolved molecules from outside the cell',
              'It skips membrane folding, so receptors pass molecules straight into the cytoplasm'
            ],
            correctAnswer: 1,
            explanation: 'Receptor-mediated endocytosis is specific — receptors bind particular ligands and cluster them in coated pits. This concentrating effect allows cells to take up specific molecules efficiently, even when their external concentration is very low. Pinocytosis is non-specific and takes in whatever is dissolved in the fluid.'
          },
          {
            question: 'A neuron releases acetylcholine at a synapse by vesicle fusion with the presynaptic membrane. This is:',
            options: [
              'Endocytosis',
              'Phagocytosis',
              'Exocytosis',
              'Facilitated diffusion'
            ],
            correctAnswer: 2,
            explanation: 'Neurotransmitter release is a classic example of exocytosis. Synaptic vesicles containing acetylcholine fuse with the presynaptic membrane, releasing the neurotransmitter into the synaptic cleft.'
          }
        ]
      }
    },
    {
      id: 'mt5-comparison',
      type: 'text' as const,
      content: `
### Comprehensive Comparison of All Transport Types

| Transport Type | Direction relative to gradient | Energy required? | Protein required? | Examples |
|---------------|-------------------------------|-----------------|------------------|---------|
| Simple diffusion | Down | No | No | O$_2$, CO$_2$, ethanol |
| Facilitated diffusion (channels) | Down | No | Yes (channel) | K$^+$ leak channels, aquaporins |
| Facilitated diffusion (carriers) | Down | No | Yes (carrier) | Glucose carrier proteins |
| Primary active transport | Against | Yes (ATP) | Yes (pump) | Na$^+$/K$^+$ pump, proton pump |
| Secondary active transport | Against (for cargo) | Yes (indirect — gradient) | Yes (cotransporter) | Na$^+$/glucose symporter |
| Exocytosis | Out of cell | Yes (ATP) | Yes (vesicle fusion) | Neurotransmitter release, insulin secretion |
| Endocytosis | Into cell | Yes (ATP) | Often (receptors) | Phagocytosis, receptor-mediated uptake |
      `
    },
    {
      id: 'mt5-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Bulk Transport
      `,
      exercise: {
        questions: [
          {
            question: 'The general term for folding the plasma membrane inward to bring material into the cell in a vesicle:',
            answer: 'endocytosis',
            acceptableAnswers: ['endocytosis', 'Endocytosis'],
            placeholder: 'e.g. diffusion'
          },
          {
            question: 'The general term for vesicle fusion with the plasma membrane to release contents outside the cell:',
            answer: 'exocytosis',
            acceptableAnswers: ['exocytosis', 'Exocytosis'],
            placeholder: 'e.g. endocytosis'
          },
          {
            question: 'The type of endocytosis that is non-specific and takes in extracellular fluid:',
            answer: 'pinocytosis',
            acceptableAnswers: ['pinocytosis', 'Pinocytosis', 'cell drinking'],
            placeholder: 'e.g. phagocytosis'
          }
        ]
      }
    },
    {
      id: 'mt5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Transport Type
      `,
      exercise: {
        questions: [
          {
            question: 'A white blood cell engulfing a pathogen:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Phagocytosis'
          },
          {
            question: 'Cholesterol particles binding to specific surface receptors and being taken in:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Receptor-mediated endocytosis'
          },
          {
            question: 'Insulin packaged by the Golgi being released from a beta cell:',
            options: ['Exocytosis', 'Phagocytosis', 'Pinocytosis', 'Receptor-mediated endocytosis'],
            correctAnswer: 'Exocytosis'
          }
        ]
      }
    },
    {
      id: 'mt5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Bulk Transport
      `,
      exercise: {
        questions: [
          {
            question: 'A cell is actively performing endocytosis. Over time, what would happen to the plasma membrane if exocytosis did not also occur?',
            options: [
              'The plasma membrane would keep growing as vesicles add to it',
              'The plasma membrane would shrink as pieces of it are pulled inward',
              'Nothing would change, since new membrane is made at the same rate',
              'The plasma membrane would be restored when the cell divides'
            ],
            correctAnswer: 1,
            explanation: 'Each endocytic event removes a portion of the plasma membrane to form a vesicle. Without compensating exocytosis (which adds membrane back), the plasma membrane would shrink. In healthy cells, these processes are balanced to maintain constant membrane area.'
          }
        ]
      }
    }
  ]
};