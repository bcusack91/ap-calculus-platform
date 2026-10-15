export const bioCellCompartmentPart3Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p3-s1-intro',
      type: 'text' as const,
      content: `
## Compartments at Work: Case Studies

**Part 3 of 7 — Compartments at Work: Case Studies**

The fastest way to understand a compartment is to ask two questions about it:

1. **What does this membrane keep apart?**
2. **What would happen if the separation failed?**

This part works through five cases. Each one shows a different benefit from Parts 1 and 2, and each ends with a prediction you could be asked to make on the exam.

| Case | Compartment | What it keeps apart | Benefit shown |
|---|---|---|---|
| A | Lysosome | Hydrolases and their substrates from the cytosol | Separation and distinct pH |
| B | Smooth ER of muscle (sarcoplasmic reticulum) | A stored supply of $\\text{Ca}^{2+}$ from the cytosol | Ion storage for signaling |
| C | Plant central vacuole | Water, ions, pigments and defensive compounds from the cytosol | Storage and turgor |
| D | ER, Golgi and secretory vesicles | Proteins bound for export from the cytosol | A sealed route out of the cell |
| E | Mitochondrion | The proton gradient from the rest of the cell | Gradient for ATP synthesis |
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s2-cases-ab',
      type: 'text' as const,
      content: `
### Case A — When a lysosome cannot finish its job

Lysosomes receive worn-out organelles and macromolecules and break them down with hydrolytic enzymes. The building blocks (amino acids, sugars, nucleotides, fatty acids) are transported back to the cytosol for reuse. The CED lists three lysosome roles: intracellular digestion, recycling of the cell's organic materials, and programmed cell death (apoptosis).

In **Tay-Sachs disease**, an inherited mutation leaves lysosomes without one working enzyme that breaks down a specific membrane lipid. The steps of the problem:

1. The lipid is delivered to lysosomes in nerve cells as usual.
2. Without the enzyme, it cannot be broken into pieces small enough to be transported out.
3. Because the lysosomal membrane keeps undigested material inside, the lipid **accumulates in the lysosomes**, which swell.
4. Swollen lysosomes crowd and damage neurons, which are long-lived cells that cannot dilute the build-up by dividing.

**Lesson:** the membrane that keeps hydrolases away from the cytosol also traps whatever the hydrolases fail to digest. The defect stays inside the compartment, so symptoms appear in the cells that rely most on that compartment.

### Case B — A compartment as a signal reservoir

Muscle cells store calcium inside a specialized smooth ER called the **sarcoplasmic reticulum**. When a nerve signal arrives, channels open and $\\text{Ca}^{2+}$ floods into the cytosol, triggering contraction. Pumps in the membrane then use ATP to move $\\text{Ca}^{2+}$ back inside, and the muscle relaxes.

The compartment works like a charged battery: because the cytosol is kept almost free of calcium, a brief release produces a large, fast change in cytosolic concentration. **Prediction:** if the calcium pumps fail, cytosolic calcium stays high and relaxation is delayed.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s3-mcq-ab',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Lysosomes and Calcium Stores
      `,
      exercise: {
        questions: [
          {
            question: 'In a lysosomal storage disease, one lysosomal hydrolase is missing. Where would undigested substrate most likely build up?',
            options: [
              'Inside lysosomes, where it swells the sacs',
              'In the cytosol, after leaking out of lysosomes',
              'In the Golgi, where hydrolases are first made',
              'In the nucleus, where the material blocks transcription'
            ],
            correctAnswer: 0,
            explanation: 'The substrate is delivered into lysosomes but cannot be broken into pieces small enough to be transported out, so it accumulates there. Hydrolases are made on the rough ER, not in the Golgi.'
          },
          {
            question: 'A toxin blocks the ATP-powered pumps that move calcium from the cytosol back into the sarcoplasmic reticulum of a muscle cell. Which result is most likely?',
            options: [
              'Contraction cannot begin because no calcium can be released',
              'Calcium stays high in the cytosol and relaxation is delayed',
              'The sarcoplasmic reticulum fills with excess calcium ions',
              'The cytosol becomes acidic as protons replace the calcium'
            ],
            correctAnswer: 1,
            explanation: 'Release through channels does not need the pumps, but returning calcium to storage does, so cytosolic calcium stays elevated and the muscle stays contracted longer. The store would gradually empty, not fill.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p3-s4-cases-cde',
      type: 'text' as const,
      content: `
### Case C — The plant central vacuole

In a mature plant cell, the central vacuole can take up most of the cell's volume. The CED describes vacuoles as compartments for the **storage and release of macromolecules and waste**, and notes that the plant central vacuole **retains water, producing turgor pressure**. The tonoplast (vacuole membrane) lets the cell:

- Store water so that the vacuole presses the cytoplasm against the cell wall and keeps soft tissues firm.
- Hold ions, sugars and pigments at concentrations that would disrupt enzymes in the cytosol.
- Sequester bitter or toxic compounds that deter herbivores without poisoning the cell's own metabolism.

**Prediction:** if a plant loses water so that its vacuoles shrink, turgor pressure falls and the plant wilts.

### Case D — A sealed route out of the cell

A protein destined for secretion, such as a digestive enzyme or the hormone insulin, enters the **ER lumen** while it is being made on a ribosome attached to the rough ER. From then on:

1. It travels in vesicles from the ER to the Golgi.
2. It is modified and sorted in the Golgi.
3. It leaves in a secretory vesicle that fuses with the plasma membrane (exocytosis).

At no point after entering the ER does the protein cross another membrane. Vesicles bud off and fuse, so the inside of the ER, Golgi and vesicles is continuous with the **outside of the cell**. A digestive enzyme made in the pancreas therefore never touches the cytosol of the cell that made it.

### Case E — The mitochondrion revisited

Part 2 showed that the inner mitochondrial membrane holds a proton gradient. Here the case question is *what the compartment keeps apart*: protons concentrated in the intermembrane space are kept from the matrix except through ATP synthase.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Diagnose the failed compartment

Match each observation to the compartment whose separation has most likely failed.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Leaves droop even though the cell walls are intact and the soil was dry for a week',
            options: ['Central vacuole', 'Lysosome', 'Sarcoplasmic reticulum', 'Inner mitochondrial membrane']
          },
          {
            label: 'Oxygen use continues but ATP output falls sharply and the cells warm up',
            options: ['Lysosome', 'Inner mitochondrial membrane', 'Central vacuole', 'Sarcoplasmic reticulum']
          },
          {
            label: 'Neurons fill with swollen sacs packed with an undigested lipid',
            options: ['Sarcoplasmic reticulum', 'Central vacuole', 'Lysosome', 'Inner mitochondrial membrane']
          }
        ],
        correctAnswers: ['Central vacuole', 'Inner mitochondrial membrane', 'Lysosome'],
        hint1: 'Wilting is a loss of turgor pressure.',
        hint2: 'Fuel is still being oxidized, but the energy is not captured as ATP.',
        hint3: 'Undigested material collects in the compartment that normally digests it.',
        explanation: 'Wilting reflects shrunken central vacuoles and lost turgor; continued oxygen use with less ATP and more heat means a leaky inner mitochondrial membrane; swollen sacs of undigested lipid point to lysosomes missing an enzyme.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p3-s6-pattern',
      type: 'text' as const,
      content: `
### The pattern across the cases

| Case | If separation fails... | Type of failure |
|---|---|---|
| Lysosome missing an enzyme | Undigested material is trapped and builds up | Process inside the compartment stops |
| Calcium pumps blocked | Signal cannot be turned off | Gradient cannot be restored |
| Vacuole loses water | Turgor falls and tissues wilt | Stored contents are lost |
| Secretory route bypassed | Enzymes or hormones could act on the cytosol | Products reach the wrong space |
| Inner membrane leaky | Energy released as heat, little ATP | Gradient collapses |

Two kinds of failure appear again and again: **the process inside the compartment stops**, or **the barrier between compartments leaks**. When an exam stem describes a defect, decide which kind it is before predicting the result.

> **AP Connection:** Many multiple-choice sets describe a patient or a mutant cell and ask you to identify the organelle involved or predict the effect of a drug. Look for clues about what is accumulating, what is missing, and where it ends up.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Applying the Cases
      `,
      exercise: {
        questions: [
          {
            question: 'Insulin is made on ribosomes of the rough ER and released by exocytosis. After the growing insulin chain enters the ER lumen, how many membranes does it cross before reaching the blood?',
            options: [
              'Zero membranes',
              'One membrane',
              'Two membranes',
              'Four membranes'
            ],
            correctAnswer: 0,
            explanation: 'Insulin moves from ER to Golgi to secretory vesicle by budding and fusion, and exocytosis releases it when the vesicle fuses with the plasma membrane. The protein itself never passes through a bilayer again.'
          },
          {
            question: 'Some plants store compounds in their central vacuoles that are toxic to the plant\'s own enzymes. Which benefit of compartmentalization does this storage best show?',
            options: [
              'Concentrating reactants so that the compounds can be built faster',
              'Separating harmful molecules from the metabolism they would disrupt',
              'Increasing membrane surface area for the enzymes that make them',
              'Holding a proton gradient that powers transport of the compounds'
            ],
            correctAnswer: 1,
            explanation: 'Keeping a defensive toxin inside the vacuole separates it from the cytosolic enzymes it would damage, while it remains available to deter herbivores. The other benefits are real but do not explain why a toxin is stored apart.'
          },
          {
            question: 'Two cell types are compared. Cell P has abundant rough ER and Golgi and many secretory vesicles. Cell Q has abundant smooth ER and few secretory vesicles. Which cell is more likely to export large amounts of protein?',
            options: [
              'Cell P, because its membranes form the export route',
              'Cell Q, because smooth ER packages proteins for export',
              'Cell P, because smooth ER would digest exported proteins',
              'Cell Q, because fewer vesicles means faster exocytosis'
            ],
            correctAnswer: 0,
            explanation: 'Rough ER, Golgi and secretory vesicles are the compartments of the secretory route, so a cell rich in them is built to export protein. Smooth ER handles lipid synthesis and detoxification, not protein packaging.'
          }
        ]
      }
    }
  ]
};
