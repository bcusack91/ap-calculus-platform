export const bioCellCommPart7Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
## Cell Communication: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

This part pulls Parts 1–6 into one picture. Read the map, check yourself against the trap list, then work the mixed questions.

### The topic on one page

| Question | Answer | Part |
|----------|--------|------|
| How does a signal reach its target? | Direct contact, local regulator or hormone | 2 |
| Where is the receptor? | Membrane for hydrophilic/large ligands; inside the cell for small hydrophobic ones | 3 |
| What does binding do? | Changes the receptor's shape | 1, 3 |
| How is the signal relayed? | G proteins, kinase cascades and second messengers such as cAMP | 4 |
| Why is a small signal enough? | Each step activates many molecules: amplification | 4 |
| What can the response be? | Enzyme or channel activity, gene expression, division, apoptosis | 5 |
| How is the signal ended? | Ligand leaves, GTP hydrolysis, phosphodiesterase, phosphatases | 4, 5 |
| What if a part changes? | Downstream steps are stuck on or stuck off | 5, 6 |
      `
    },
    {
      id: 'cell7-compare',
      type: 'text' as const,
      content: `
### Two pathways side by side

| Feature | Epinephrine in a liver cell | Testosterone in a target cell |
|---------|-----------------------------|-------------------------------|
| Ligand chemistry | Hydrophilic | Hydrophobic steroid |
| Receptor | G protein-coupled receptor in the membrane | Intracellular receptor |
| Transduction | G protein → adenylyl cyclase → cAMP → kinase cascade | Hormone-receptor complex moves to the nucleus |
| Response | Existing enzyme activated; glucose released | New genes transcribed; new proteins made |
| Speed | Seconds | Hours |
| Amplification | Large, through the cascade | Smaller; each complex activates genes directly |

### The six traps that cost the most points

1. **"The ligand enters the cell and does the work."** Most ligands never cross the membrane. The receptor's shape change starts everything.
2. **"Cells without a response lack the hormone."** They lack the **receptor** (or the downstream proteins).
3. **"Signals change DNA."** Signals change **which genes are expressed**, not the DNA sequence.
4. **"A mutation affects the whole pathway."** It affects steps **downstream** of the change, not those upstream.
5. **Forgetting the off-switches.** A pathway that cannot shut off (GTP not hydrolyzed, cAMP not broken down, phosphates not removed) keeps signaling.
6. **Mixing up second messengers and ligands.** cAMP is made **inside** the cell after reception; the ligand is the first messenger outside.
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Thyroid hormone is small and hydrophobic, and it raises the metabolic rate over several hours by increasing production of certain enzymes. Which mechanism best fits these facts?',
            options: [
              'A membrane receptor that opens an ion channel and changes membrane voltage',
              'A G protein-coupled receptor that raises cAMP and activates existing enzymes',
              'An intracellular receptor that acts with the hormone to alter gene transcription',
              'A gap junction that passes the hormone from cell to cell through the tissue'
            ],
            correctAnswer: 2,
            explanation: 'A small hydrophobic hormone can cross the membrane, and a slow effect involving new enzymes points to changes in gene expression through an intracellular receptor.'
          },
          {
            question: 'In a kinase cascade, kinase 2 is defective, but kinase 1 and kinase 3 are normal. Which result is expected after the ligand binds?',
            options: [
              'Kinase 1 is activated, but kinase 3 and the final response are not',
              'Kinase 1 and kinase 3 are both activated, but the response is absent',
              'Neither kinase 1 nor kinase 3 is activated, and the receptor is blocked',
              'Kinase 3 is activated directly by the receptor and the response is normal'
            ],
            correctAnswer: 0,
            explanation: 'A defect affects only downstream steps. Kinase 1 lies upstream and is still activated, but kinase 3 needs kinase 2, so it and the final response fail.'
          },
          {
            question: 'Which observation would best support the claim that a signaling pathway amplifies the signal?',
            options: [
              'The response stops shortly after the ligand is removed from the medium',
              'A few hundred ligand molecules lead to millions of product molecules',
              'Only cells carrying the matching receptor show any detectable response',
              'The same ligand produces different responses in two kinds of cell'
            ],
            correctAnswer: 1,
            explanation: 'Amplification means the output vastly exceeds the input. The other observations show signal termination, specificity and receptor-dependent responses.'
          }
        ]
      }
    },
    {
      id: 'cell7-frq',
      type: 'text' as const,
      content: `
### FRQ practice: a model response

**Prompt (adapted, AP style).** A researcher studies a growth factor that binds a receptor tyrosine kinase and causes cell division. A mutant cell line divides rapidly even when no growth factor is present. (a) **Identify** one component of the pathway that could be altered in the mutant. (b) **Predict** the effect of adding a drug that blocks the growth factor's binding site on the receptor in the mutant cells. (c) **Justify** your prediction.

**Model response.**

(a) A relay protein downstream of the receptor, such as Ras, could be locked in its active, GTP-bound form.

(b) The drug would **not** slow division in the mutant cells.

(c) The drug acts at reception, which is **upstream** of the mutant relay protein. Because the relay protein is already active without any signal from the receptor, blocking the receptor does not change the downstream steps, and the cells keep receiving a division signal.

> 📝 **Scoring notes:** Each part earns its point only if it is specific. "Something in the pathway is broken" does not earn (a); a prediction without the upstream/downstream logic does not earn (c).
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review, Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Yeast, plants and animals all use G protein-coupled receptors and similar kinase cascades. Which conclusion do these shared features best support?',
            options: [
              'These pathways arose separately in each group as similar answers to similar needs',
              'These pathways were inherited from a common ancestor and have been conserved over time',
              'These pathways were transferred from animals to plants and fungi by viruses',
              'These pathways appeared only once multicellular organisms began to evolve'
            ],
            correctAnswer: 1,
            explanation: 'Shared molecular machinery across distantly related eukaryotes, including single-celled yeast, is evidence that the pathways evolved in a common ancestor and were retained.'
          },
          {
            question: 'Drug Y raises cAMP levels in heart cells even when no hormone is present, but has no effect on cells lacking adenylyl cyclase. Where does drug Y most likely act?',
            options: [
              'On protein kinase A, directly',
              'On the hormone receptor or the G protein',
              'On the phosphodiesterase enzyme',
              'On the genes for the hormone receptor'
            ],
            correctAnswer: 1,
            explanation: 'Drug Y needs adenylyl cyclase to work, so it acts at or above the cyclase. Activating the receptor or G protein would switch the cyclase on and raise cAMP without the hormone.'
          },
          {
            question: 'Why can quorum sensing coordinate behavior among many bacteria while a single bacterium does not respond to its own signal?',
            options: [
              'A lone cell lacks the receptor gene, which is only switched on in groups',
              'The signal must build up past a threshold that only a dense group can reach',
              'Each cell responds to signals from other species but never from its own',
              'A lone cell destroys its own signal before it can leave the cytoplasm'
            ],
            correctAnswer: 1,
            explanation: 'Each cell releases the signal, but only a dense population makes enough of it to cross the threshold concentration that switches on the shared response.'
          }
        ]
      }
    },
    {
      id: 'cell7-checklist',
      type: 'text' as const,
      content: `
### Last-mile checklist

- I can classify a signal as contact, local or long-distance, with an example of each.
- I can predict a receptor's location from the ligand's chemistry and justify it.
- I can trace epinephrine → GPCR → G protein → adenylyl cyclase → cAMP → protein kinase A → response.
- I can calculate amplification through a cascade.
- I can name four kinds of response, including apoptosis.
- I can predict the effect of a mutation or drug at any step, upstream versus downstream.
- I can read a dose-response table and spot receptor saturation.

> 🎯 **Final takeaway:** Every signaling question reduces to one chain and one rule: changes act downstream. Draw the chain, place the change, and predict forward.
      `
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Match** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bacteria switch on light production only at high cell density',
            options: ['Quorum sensing', 'Apoptosis', 'Amplification', 'Signal termination']
          },
          {
            label: 'Phosphodiesterase converts cAMP to AMP',
            options: ['Quorum sensing', 'Apoptosis', 'Amplification', 'Signal termination']
          },
          {
            label: 'One hormone molecule leads to thousands of active enzymes',
            options: ['Quorum sensing', 'Apoptosis', 'Amplification', 'Signal termination']
          },
          {
            label: 'Cells between developing digits self-destruct on cue',
            options: ['Quorum sensing', 'Apoptosis', 'Amplification', 'Signal termination']
          }
        ],
        correctAnswers: ['Quorum sensing', 'Signal termination', 'Amplification', 'Apoptosis'],
        hint1: 'Density-dependent group behavior in bacteria has a special name.',
        hint2: 'Breaking down a second messenger ends the signal.',
        hint3: 'Programmed, signal-driven cell death is apoptosis.',
        explanation: 'Density-triggered light is quorum sensing, cAMP breakdown terminates the signal, one-to-thousands is amplification, and scheduled cell death between digits is apoptosis.'
      }
    }
  ]
}
