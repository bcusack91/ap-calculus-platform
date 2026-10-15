export const bioCellCommPart3Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
## Signal Reception

**Part 3 of 7 — Signal Reception**

Reception is the moment a ligand binds its receptor. It decides **which** cells respond and **what kind** of transduction follows. Two ideas from the CED organize this part:

1. A receptor's **ligand-binding domain** recognizes one specific chemical messenger (a peptide, a small molecule or a protein), in a highly specific fit.
2. Binding changes the receptor's **shape**, and that change, not the ligand entering the cell, is what passes the signal on.

### Where is the receptor? Let the ligand's chemistry decide

The plasma membrane has a hydrophobic interior. That single fact predicts where a receptor must be.

| Ligand property | Can it cross the membrane? | Receptor location | Examples |
|-----------------|----------------------------|-------------------|----------|
| Large and/or hydrophilic (polar or charged) | No | **Plasma membrane**, binding site facing outside | Epinephrine, insulin, growth factors, acetylcholine |
| Small and hydrophobic (nonpolar) | Yes, diffuses through | **Cytoplasm or nucleus** (intracellular receptor) | Steroid hormones (testosterone, estrogen, cortisol), thyroid hormones |
      `
    },
    {
      id: 'cell3-membrane',
      type: 'text' as const,
      content: `
### Three families of membrane receptors

**1. G protein-coupled receptors (GPCRs)**

- A single protein that crosses the membrane seven times.
- Inside the cell it works with a **G protein**, a switch protein that is **off when GDP is bound** and **on when GTP is bound**.
- Ligand binding changes the receptor's shape, so the receptor makes the G protein swap GDP for GTP. The active G protein then moves along the membrane and activates an enzyme (for example, adenylyl cyclase).
- The G protein turns itself off by hydrolyzing its GTP back to GDP, so the signal is temporary.
- GPCRs detect epinephrine, many neurotransmitters, odors and light. The CED uses them as its example of a eukaryotic receptor.

**2. Receptor tyrosine kinases (RTKs)**

- The receptor itself is an **enzyme**: its inside portion is a kinase that adds phosphate groups to the amino acid tyrosine.
- Ligand binding causes two receptor units to pair up (**dimerize**). Each unit then phosphorylates tyrosines on its partner.
- Different relay proteins bind different phosphorylated tyrosines, so **one RTK can start several pathways at once**.
- The insulin receptor and many growth-factor receptors are RTKs. Faulty RTKs that are active without a ligand are linked to some cancers.

**3. Ligand-gated ion channels**

- A channel protein with a gate that opens (or closes) when the ligand binds.
- Ions such as Na⁺, K⁺, Ca²⁺ or Cl⁻ then flow down their gradients, changing the cell's membrane potential within milliseconds.
- Example: acetylcholine binding a channel on a skeletal muscle cell lets Na⁺ rush in, starting contraction.
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A newly discovered hormone is a large, charged peptide. Where would you expect to find its receptor?',
            options: [
              'Embedded in the plasma membrane with its binding site outside',
              'Free in the cytoplasm, waiting for the hormone to diffuse inward',
              'Inside the nucleus, bound to the DNA near the target genes',
              'In the lumen of the endoplasmic reticulum near the ribosomes'
            ],
            correctAnswer: 0,
            explanation: 'A large, charged molecule cannot cross the hydrophobic core of the membrane, so its receptor must sit in the plasma membrane with the binding site facing outward.'
          },
          {
            question: 'A G protein has been altered so that it cannot hydrolyze GTP. After a single brief exposure to the ligand, what happens?',
            options: [
              'The G protein never activates because GDP cannot be released',
              'The receptor is destroyed and the cell stops responding to the ligand',
              'The G protein stays active and keeps stimulating its target enzyme',
              'The ligand becomes trapped inside the cell and is broken down'
            ],
            correctAnswer: 2,
            explanation: 'G proteins switch themselves off by hydrolyzing GTP to GDP. If they cannot, they stay in the GTP-bound "on" state and keep activating the target enzyme long after the ligand is gone.'
          },
          {
            question: 'Binding of one growth factor to its receptor activates two different relay proteins and two separate pathways. Which receptor type best fits this result?',
            options: [
              'A ligand-gated ion channel',
              'A receptor tyrosine kinase',
              'A steroid hormone receptor',
              'A gap junction channel'
            ],
            correctAnswer: 1,
            explanation: 'An RTK phosphorylates several tyrosines, and different relay proteins bind different phosphorylated sites, so one activated RTK can start more than one pathway.'
          }
        ]
      }
    },
    {
      id: 'cell3-intracellular',
      type: 'text' as const,
      content: `
### Intracellular receptors: when the receptor is a transcription factor

Steroid and thyroid hormones are hydrophobic enough to diffuse through the plasma membrane. Their receptors wait in the cytoplasm or nucleus.

**Worked example: testosterone in a target cell**

1. Testosterone, a steroid made from cholesterol, travels in the blood bound to carrier proteins.
2. It diffuses across the plasma membrane of every cell it reaches.
3. **Only target cells** contain the testosterone receptor. Binding changes the receptor's shape and activates it.
4. The hormone-receptor complex enters the nucleus (if it is not already there).
5. The complex acts as a **transcription factor**: it binds specific DNA sequences and turns on particular genes.
6. The new mRNAs are translated into proteins that produce the male characteristics the hormone controls.

| Feature | Membrane receptor | Intracellular receptor |
|---------|-------------------|------------------------|
| Ligand | Hydrophilic or large | Small and hydrophobic |
| Speed of response | Seconds to minutes | Usually hours (new proteins must be made) |
| Typical response | Changes activity of existing proteins | Changes which genes are transcribed |
| Second messengers | Often used | Usually not needed |

> 💡 **Misconception alert:** Hydrophobic hormones enter **all** cells, not just target cells. Specificity still comes from the receptor: a cell without the intracellular receptor lets the hormone pass through and does nothing.
      `
    },
    {
      id: 'cell3-same-ligand',
      type: 'text' as const,
      content: `
### One ligand, different receptors

Some ligands have more than one receptor type, and the receptor type decides the response.

| Ligand | Receptor on skeletal muscle | Receptor on heart muscle |
|--------|-----------------------------|--------------------------|
| Acetylcholine | Ligand-gated Na⁺ channel → cell depolarizes → **contraction** | G protein-coupled receptor → K⁺ channels open → heart rate **slows** |

So "acetylcholine excites" or "acetylcholine inhibits" are both incomplete statements. The receptor, not the ligand, sets the meaning.

> 📝 **AP Connection:** A common free-response prompt gives a ligand's chemical structure or solubility and asks you to **predict the receptor's location and justify** the prediction. Use the membrane's hydrophobic core in your justification.
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: Predicting Reception** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Cells were treated with radioactively labeled cortisol, a steroid hormone. Where would most of the label bound to its receptor be found inside responsive cells?',
            options: [
              'On the outer face of the plasma membrane',
              'Bound to the cell wall outside the cell',
              'In the cytoplasm or the nucleus',
              'Inside vesicles waiting for exocytosis'
            ],
            correctAnswer: 2,
            explanation: 'Cortisol is a hydrophobic steroid that diffuses through the membrane and binds an intracellular receptor, which then acts in the nucleus. Animal cells have no cell wall.'
          },
          {
            question: 'A mutation changes the DNA-binding region of the estrogen receptor but leaves its hormone-binding region intact. Which outcome is most likely in target cells exposed to estrogen?',
            options: [
              'Estrogen can no longer cross the plasma membrane to reach the receptor',
              'The receptor binds estrogen but cannot switch on the genes it controls',
              'The receptor binds the hormone and activates its target genes more strongly',
              'The receptor signals through second messengers made at the membrane'
            ],
            correctAnswer: 1,
            explanation: 'Hormone binding still occurs, but the complex can no longer bind the DNA sequences it normally controls, so the genes it regulates are not switched on. Membrane crossing depends on the hormone, not the receptor.'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Receptor to the Description** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Opens to let ions flow when a neurotransmitter binds',
            options: ['G protein-coupled receptor', 'Receptor tyrosine kinase', 'Ligand-gated ion channel', 'Intracellular receptor']
          },
          {
            label: 'Activates a switch protein by causing it to exchange GDP for GTP',
            options: ['G protein-coupled receptor', 'Receptor tyrosine kinase', 'Ligand-gated ion channel', 'Intracellular receptor']
          },
          {
            label: 'Pairs up and phosphorylates its partner after binding a ligand',
            options: ['G protein-coupled receptor', 'Receptor tyrosine kinase', 'Ligand-gated ion channel', 'Intracellular receptor']
          },
          {
            label: 'Binds a steroid hormone and then binds DNA as a transcription factor',
            options: ['G protein-coupled receptor', 'Receptor tyrosine kinase', 'Ligand-gated ion channel', 'Intracellular receptor']
          }
        ],
        correctAnswers: ['Ligand-gated ion channel', 'G protein-coupled receptor', 'Receptor tyrosine kinase', 'Intracellular receptor'],
        hint1: 'Ion flow means a channel; GDP and GTP mean a G protein.',
        hint2: 'Dimerization and self-phosphorylation are the signature of RTKs.',
        hint3: 'Steroids cross the membrane, so their receptor is inside the cell.',
        explanation: 'Ligand-gated channels let ions through, GPCRs activate G proteins, RTKs dimerize and cross-phosphorylate, and intracellular receptors for steroids act as transcription factors.'
      }
    }
  ]
}
