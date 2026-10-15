export const bioTranscriptionPart5Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran5-intro-p5',
      type: 'text' as const,
      content: `
## Post-Translational Modification

**Part 5 of 7 — Post-Translational Modification**

A polypeptide leaving the ribosome is a chain of amino acids, not yet a working protein. Before it can do its job it must **fold**, often be **chemically modified**, and be **delivered** to the right place in or out of the cell. These steps connect gene expression (Unit 6) to protein structure (Unit 1) and the endomembrane system (Unit 2).

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **Folding** | The chain folds into its three-dimensional shape | Shape determines function |
| **Targeting** | Signal sequences send the protein to its destination | A protein works only in the right compartment |
| **Chemical modification** | Groups such as sugars or phosphates are added | Changes stability, recognition or activity |
      `
    },
    {
      id: 'tran5-folding',
      type: 'text' as const,
      content: `
### Folding: sequence decides shape

The amino acid sequence (primary structure) contains the information for folding. As the chain emerges, hydrophobic side chains cluster away from water, hydrogen bonds form helices and sheets, and ionic bonds and disulfide bridges stabilize the final shape.

- **Chaperone proteins** help many polypeptides fold correctly by shielding them from improper interactions while they fold. They do not supply the shape; they prevent mistakes.
- **Misfolded proteins** are usually tagged and destroyed. In the most common cystic fibrosis allele, a deletion of one amino acid causes the CFTR chloride channel to misfold; the cell degrades most of it before it reaches the plasma membrane, so chloride transport fails.

> 💡 **Misconception alert:** A mutation does not have to change the "active site" to ruin a protein. Changing a single amino acid anywhere can alter folding, and a misfolded protein may never reach its destination.

### Targeting: where will the protein go?

Every polypeptide begins on a free ribosome in the cytosol. What happens next depends on whether its first amino acids form an **ER signal sequence**.

| Signal sequence at the start of the chain? | Path | Final destinations |
|-------------------------------------------|------|--------------------|
| **No** | Translation finishes on a free ribosome | Cytosol, or (with other signals) the nucleus, mitochondria, chloroplasts |
| **Yes** | The signal sequence directs the ribosome to the rough ER, and the chain is threaded into the ER as it is made | ER → Golgi → secretion, plasma membrane or lysosomes |
      `
    },
    {
      id: 'tran5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers attach an ER signal sequence to the start of a protein that normally stays in the cytosol. Where will the altered protein most likely end up?',
            options: [
              'In the cytosol, since its amino acid sequence otherwise is the same',
              'In the ER and the secretory pathway, entering as it is translated',
              'In the nucleus, since signal sequences direct proteins to the DNA',
              'In the mitochondria, since they import most newly made proteins'
            ],
            correctAnswer: 1,
            explanation: 'The signal sequence is what sends a ribosome to the rough ER. Adding it reroutes the protein into the ER and onward through the secretory pathway.'
          },
          {
            question: 'A mutation changes one amino acid far from a channel protein\'s pore. The channel never reaches the plasma membrane. What is the best explanation?',
            options: [
              'The mutated gene is no longer transcribed in the nucleus',
              'The protein misfolds and is degraded before it is delivered',
              'The ribosome stops translating at the altered codon',
              'Sorting signals send the protein to the nucleus instead'
            ],
            correctAnswer: 1,
            explanation: 'A single amino acid change can disrupt folding anywhere in the protein. Quality-control systems destroy misfolded proteins, so the channel never arrives, as in common cystic fibrosis mutations.'
          }
        ]
      }
    },
    {
      id: 'tran5-modify',
      type: 'text' as const,
      content: `
### Chemical modification

| Modification | Where | Effect | Example |
|--------------|-------|--------|---------|
| **Glycosylation** (adding sugar chains) | Begins in the ER, refined in the Golgi | Helps folding, stability and cell-cell recognition | Membrane glycoproteins that act as cell-surface markers |
| **Disulfide bond formation** | ER lumen | Locks the shape of secreted proteins | Antibodies and many secreted hormones |
| **Phosphorylation** | Cytosol and nucleus | A **reversible** on/off switch for activity | Kinase cascades in cell signaling |

### Worked example: from gene to cell-surface receptor

Follow a membrane receptor protein from its gene to its working position on the cell surface. Each step depends on the one before it.

| Step | Where | What happens |
|------|-------|--------------|
| 1. Transcription and processing | Nucleus | The receptor gene is transcribed; the pre-mRNA is capped, given a tail and spliced |
| 2. Translation begins | Free ribosome in the cytosol | The first amino acids made include an ER signal sequence |
| 3. Targeting | Rough ER | The ribosome docks on the rough ER, and the chain is made into the ER membrane |
| 4. Folding and first modifications | ER | The chain folds; sugar chains are added |
| 5. Sorting | Golgi apparatus | Sugar chains are modified, and the protein is packaged into vesicles |
| 6. Delivery | Vesicle → plasma membrane | The vesicle fuses with the plasma membrane, placing the receptor in the cell surface |

**Predicting disruptions.** A change at any step changes what the cell can do:
- No signal sequence (step 2): the receptor is finished in the cytosol and never reaches the membrane.
- A mutation that prevents folding (step 4): the receptor is degraded, so the cell cannot respond to the receptor's signal.
- Vesicles that cannot leave the Golgi (step 6): the receptor accumulates in the Golgi instead of reaching the surface.

### Turnover: proteins have lifespans

Proteins are not permanent. Cells tag many proteins for destruction and break them down, some within minutes and others over days. How long a protein lasts is one more way a cell controls how much of it is present, and so the cell's phenotype.
      `
    },
    {
      id: 'tran5-pulse',
      type: 'text' as const,
      content: `
### Reading data: a pulse-chase experiment

Pancreatic cells are given radioactive amino acids for 3 minutes (the **pulse**), then normal amino acids (the **chase**). The location of radioactivity is followed over time.

| Time after pulse | Highest radioactivity found in |
|------------------|--------------------------------|
| 3 min | Rough ER |
| 20 min | Golgi apparatus |
| 90 min | Secretory vesicles near the plasma membrane |
| 120 min+ | Outside the cell |

**Interpretation.** Newly made proteins move in order: rough ER → Golgi → vesicles → secretion. Only proteins made during the pulse are labeled, so the experiment tracks **one batch** of proteins over time.

> 📝 **AP Connection:** Questions may ask where a secreted protein is glycosylated, what happens when one step of the pathway is blocked, or what a pulse-chase table shows. Tie each answer to a specific structure or step.
      `
    },
    {
      id: 'tran5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the pulse-chase data, why is radioactivity found in the rough ER before the Golgi?',
            options: [
              'Proteins for secretion are made on ER-bound ribosomes and then moved on',
              'The Golgi makes its own proteins only after the ER stops working',
              'Radioactive amino acids are too large to enter the Golgi directly',
              'The Golgi breaks proteins down once the ER has finished folding them'
            ],
            correctAnswer: 0,
            explanation: 'Secreted proteins are synthesized into the rough ER, then carried by vesicles to the Golgi and onward. The label follows that path in order.'
          },
          {
            question: 'A drug prevents vesicles from leaving the Golgi apparatus. Where will a newly made cell-surface receptor most likely accumulate?',
            options: [
              'In the cytosol, on free ribosomes that never reach the Golgi',
              'In the Golgi, unable to move on to the plasma membrane',
              'In the plasma membrane, in larger amounts than normal',
              'In the nucleus, where its mRNA was first transcribed'
            ],
            correctAnswer: 1,
            explanation: 'The receptor still enters the rough ER and travels to the Golgi, but without vesicle transport it cannot reach the plasma membrane, so it builds up in the Golgi. Its signal sequence still sent it to the ER, so it is not stranded in the cytosol, and proteins are not returned to the nucleus.'
          },
          {
            question: 'Which protein modification serves as a quick, reversible on/off switch for an enzyme\'s activity?',
            options: [
              'Adding sugar chains in the ER and Golgi',
              'Adding or removing phosphate groups',
              'Removing introns from the pre-mRNA',
              'Joining the protein to a signal sequence'
            ],
            correctAnswer: 1,
            explanation: 'Kinases add phosphate groups and other enzymes remove them, so phosphorylation can switch a protein\'s activity on or off within seconds, as in cell-signaling cascades. Sugar chains mainly aid folding and recognition, intron removal acts on RNA, and the signal sequence directs targeting rather than switching activity.'
          }
        ]
      }
    },
    {
      id: 'tran5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Where Does It Happen?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sugar chains of a secreted glycoprotein are modified and trimmed',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Transport vesicle']
          },
          {
            label: 'A polypeptide with an ER signal sequence is threaded into the lumen as it is made',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Transport vesicle']
          },
          {
            label: 'A glycolysis enzyme that will stay in the cytosol is made',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Transport vesicle']
          },
          {
            label: 'A finished secretory protein is carried from the Golgi to the plasma membrane',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Transport vesicle']
          }
        ],
        correctAnswers: ['Golgi apparatus', 'Rough ER', 'Free ribosome in the cytosol', 'Transport vesicle'],
        hint1: 'The Golgi modifies and sorts proteins that arrive from the ER.',
        hint2: 'Proteins without an ER signal sequence finish on free ribosomes.',
        hint3: 'Membrane-bound sacs that bud from the Golgi move proteins to the cell surface.',
        explanation: 'Glycoproteins are refined in the Golgi, signal-sequence proteins enter the rough ER, cytosolic enzymes are made on free ribosomes, and transport vesicles carry finished secretory proteins from the Golgi to the plasma membrane.'
      }
    }
  ]
}
