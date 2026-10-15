export const bioTranscriptionPart5Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran5-intro-p5',
      type: 'text' as const,
      content: `
## Post-Translational Modification

**Part 5 of 7 — Post-Translational Modification**

A polypeptide leaving the ribosome is a chain of amino acids, not yet a working protein. Before it can do its job it must **fold**, often be **chemically modified** or **cut**, and be **delivered** to the right place in or out of the cell. These steps connect gene expression (Unit 6) to protein structure (Unit 1) and the endomembrane system (Unit 2).

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **Folding** | The chain folds into its three-dimensional shape | Shape determines function |
| **Targeting** | Signal sequences send the protein to its destination | A protein works only in the right compartment |
| **Chemical modification** | Groups such as sugars or phosphates are added | Changes stability, recognition or activity |
| **Cleavage** | Part of the chain is cut away | Can switch an inactive precursor on |
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
| **Yes** | A recognition particle binds the signal; the ribosome docks on the rough ER; the chain is threaded into the ER as it is made | ER → Golgi → secretion, plasma membrane or lysosomes |
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
| **Disulfide bond formation** | ER lumen | Locks the shape of secreted proteins | Antibodies, insulin |
| **Phosphorylation** | Cytosol and nucleus | A **reversible** on/off switch for activity | Kinase cascades in cell signaling |

### Cleavage: activating a precursor

Some proteins are made as inactive, longer precursors and become active only after part of the chain is cut away.

**Worked example: insulin.**

1. The insulin gene is translated into a single chain, **preproinsulin**, which begins with an ER signal sequence.
2. In the ER the signal sequence is removed, giving **proinsulin**. The chain folds and forms disulfide bonds.
3. In secretory vesicles, enzymes cut out a middle segment (the C-peptide).
4. What remains is active **insulin**: two shorter chains (A and B) held together by disulfide bonds.

**Why make a precursor?** Digestive enzymes show the advantage clearly. Pancreatic cells make **trypsinogen**, which is inactive. It is converted to active **trypsin** only after it reaches the small intestine, so the cells that make it are not digested by their own enzyme.

### Turnover: proteins have lifespans

Proteins are not permanent. Many are tagged with a small protein called ubiquitin and broken down by a **proteasome**. Controlling how long a protein lasts is one more way a cell controls how much of it is present.
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

> 📝 **AP Connection:** Questions may ask where a secreted protein is glycosylated, why a precursor is safer, or what a pulse-chase table shows. Tie each answer to a specific structure or step.
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
            question: 'Pancreatic cells make trypsin as the inactive precursor trypsinogen. What is the main benefit to the cell?',
            options: [
              'It prevents the enzyme from digesting proteins of the cell that makes it',
              'It allows the enzyme to be made without being translated on ribosomes',
              'It lets the cell secrete the enzyme without using any vesicles',
              'It makes the enzyme more stable inside the acidic stomach'
            ],
            correctAnswer: 0,
            explanation: 'Keeping the enzyme inactive until it reaches the small intestine protects the pancreatic cells from self-digestion. Trypsinogen is still made on ribosomes and secreted in vesicles.'
          },
          {
            question: 'Which change happens to proinsulin as it becomes active insulin?',
            options: [
              'Sugar chains are added to it in the cytosol',
              'A middle segment of the chain is cut away',
              'Its introns are removed by the spliceosome',
              'Its amino acid sequence is copied onto RNA'
            ],
            correctAnswer: 1,
            explanation: 'Proinsulin is activated by cleavage: enzymes remove the C-peptide, leaving the A and B chains linked by disulfide bonds. Splicing acts on RNA, not on proteins.'
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
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Small intestine']
          },
          {
            label: 'A polypeptide with an ER signal sequence is threaded into the lumen as it is made',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Small intestine']
          },
          {
            label: 'A glycolysis enzyme that will stay in the cytosol is made',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Small intestine']
          },
          {
            label: 'Trypsinogen is converted to active trypsin',
            options: ['Free ribosome in the cytosol', 'Rough ER', 'Golgi apparatus', 'Small intestine']
          }
        ],
        correctAnswers: ['Golgi apparatus', 'Rough ER', 'Free ribosome in the cytosol', 'Small intestine'],
        hint1: 'The Golgi modifies and sorts proteins that arrive from the ER.',
        hint2: 'Proteins without an ER signal sequence finish on free ribosomes.',
        hint3: 'Trypsin is activated only where it is needed for digestion.',
        explanation: 'Glycoproteins are refined in the Golgi, signal-sequence proteins enter the rough ER, cytosolic enzymes are made on free ribosomes, and trypsinogen is activated in the small intestine.'
      }
    }
  ]
}
