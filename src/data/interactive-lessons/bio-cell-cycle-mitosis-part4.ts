export const bioCellCyclePart4Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc4-intro',
      type: 'text' as const,
      content: `
## Cytokinesis — Dividing the Cytoplasm

**Part 4 of 7**

Cytokinesis is the division of the cytoplasm to produce two separate daughter cells.  It typically begins during anaphase or telophase and overlaps with the final stages of mitosis.

The mechanism differs between animal and plant cells.
      `
    },
    {
      id: 'cc4-animal',
      type: 'text' as const,
      content: `
### Cytokinesis in Animal Cells — Cleavage Furrow

Animal cells divide by **cleavage**:

1. A **contractile ring** of protein filaments (actin) assembles just beneath the plasma membrane at the former metaphase plate
2. Signals from the mitotic spindle place the ring midway between the two sets of separated chromosomes
3. The ring tightens, using energy from ATP
4. This creates an inward indentation called the **cleavage furrow**
5. The furrow deepens progressively until the cell is pinched in two

> **Why the middle?** Placing the furrow at the equator ensures that each daughter cell receives one of the two new nuclei. The molecular details of how the ring is positioned and tightened are not tested on the AP exam.
      `
    },
    {
      id: 'cc4-plant',
      type: 'text' as const,
      content: `
### Cytokinesis in Plant Cells — Cell Plate

Plant cells cannot form a cleavage furrow because of their rigid **cell wall**.  Instead, they build a new cell wall from the inside out:

1. **Golgi-derived vesicles** carrying cell wall materials (polysaccharides, glycoproteins) are transported along remaining spindle microtubules to the center of the cell
2. Vesicles fuse to form the **cell plate**, which grows outward from the center toward the existing cell wall
3. The vesicle membranes become the new plasma membrane on each side, and their contents become the new cell wall between the daughter cells
4. The cell plate eventually fuses with the existing cell wall, completing the division

| Feature | Animal Cytokinesis | Plant Cytokinesis |
|---------|-------------------|-------------------|
| Mechanism | Cleavage furrow (contractile ring) | Cell plate formation |
| Direction | Outside → in (constriction) | Inside → out (vesicle fusion) |
| What does the work | A ring of protein filaments | Golgi vesicles guided by microtubules |
| Cell wall | Not present | New cell wall built |
      `
    },
    {
      id: 'cc4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Cytokinesis
      `,
      exercise: {
        questions: [
          {
            question: 'What would happen if an animal cell were treated with a drug that inhibits actin polymerization during telophase?',
            options: [
              'Mitosis would arrest at metaphase because the spindle could not form',
              'Nuclear division would finish but no cleavage furrow would form, leaving a binucleate cell',
              'The chromosomes would fail to decondense, so the nuclei could not re-form',
              'The cell would undergo apoptosis before it could finish telophase'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow depends on a contractile ring made of actin and myosin. Blocking actin polymerization prevents ring formation, so the cytoplasm cannot divide. The nuclei divide normally (mitosis is microtubule-dependent, not actin-dependent), producing a binucleate cell.'
          },
          {
            question: 'In plant cell cytokinesis, the cell plate forms:',
            options: [
              'By the cell wall constricting inward from the outside toward the center',
              'By Golgi vesicles fusing at the center and growing outward',
              'By the old cell wall dissolving and being rebuilt between the nuclei',
              'By the plasma membrane pinching inward along an actin-myosin ring'
            ],
            correctAnswer: 1,
            explanation: 'Plant cell cytokinesis builds a new partition from the inside out. Golgi vesicles carrying cell wall materials are guided to the cell center by microtubules, fuse into a cell plate, and expand outward until they merge with the existing cell wall.'
          }
        ]
      }
    },
    {
      id: 'cc4-binary',
      type: 'text' as const,
      content: `
### Binary Fission in Prokaryotes

Prokaryotes (bacteria and archaea) do not undergo mitosis.  They reproduce by **binary fission**:

1. The single circular chromosome is replicated, starting from one **origin of replication**
2. The two copies of the chromosome are moved toward opposite ends of the cell
3. The cell elongates
4. A ring of protein forms at the midpoint and the cell pinches inward as new membrane and cell wall form between the two copies
5. The cell divides into two genetically identical daughter cells

**Key differences from mitosis:**

| Feature | Binary Fission | Mitosis |
|---------|---------------|---------|
| Organism | Prokaryotes | Eukaryotes |
| Chromosome type | Single, circular | Multiple, linear |
| Spindle apparatus | None | Mitotic spindle with microtubules |
| Speed | Very fast (20 min in E. coli) | Slower (1+ hour for M phase) |
| Nuclear envelope | None (no nucleus) | Breaks down and reforms |
      `
    },
    {
      id: 'cc4-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Cytokinesis
      `,
      exercise: {
        questions: [
          {
            question: 'The inward indentation formed during animal cell cytokinesis:',
            answer: 'cleavage furrow',
            acceptableAnswers: ['cleavage furrow', 'Cleavage furrow'],
            placeholder: 'e.g. cell plate'
          },
          {
            question: 'The structure formed by vesicle fusion during plant cell cytokinesis:',
            answer: 'cell plate',
            acceptableAnswers: ['cell plate', 'Cell plate'],
            placeholder: 'e.g. cleavage furrow'
          },
          {
            question: 'The process by which prokaryotes divide without mitosis (two words):',
            answer: 'binary fission',
            acceptableAnswers: ['binary fission', 'Binary fission', 'fission'],
            placeholder: 'e.g. budding'
          }
        ]
      }
    },
    {
      id: 'cc4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Cytokinesis
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature is shared by binary fission in bacteria and mitosis followed by cytokinesis in eukaryotes?',
            options: [
              'Each daughter cell receives a full copy of the replicated DNA',
              'A nuclear envelope breaks down and then re-forms around the DNA',
              'A spindle made of microtubules separates several linear chromosomes',
              'Homologous chromosomes pair up and exchange segments of DNA'
            ],
            correctAnswer: 0,
            explanation: 'Both processes replicate the DNA and then deliver one complete copy to each of two genetically identical daughter cells. Bacteria have no nucleus or mitotic spindle, and pairing of homologous chromosomes happens in meiosis, not in either of these processes.'
          },
          {
            question: 'A mutation disrupts the signaling pathway that positions the cleavage furrow in an animal cell.  The furrow forms, but at a random position instead of the cell equator.  What is the likely outcome?',
            options: [
              'Normal division, since furrow position does not affect the daughter cells',
              'Unequal daughter cells, one possibly getting both nuclei or neither',
              'The cell will switch to building a cell plate from Golgi vesicles instead',
              'The furrow will slide back to the equator before the cell finishes dividing'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow must form at the cell equator to ensure each daughter cell receives one nucleus. If positioned randomly, one daughter cell might get both nuclei (or no nucleus), and the cells would be unequal in size. Proper spindle-to-cortex signaling is essential for accurate division.'
          }
        ]
      }
    }
  ]
};