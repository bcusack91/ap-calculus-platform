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

1. A **contractile ring** of actin microfilaments and myosin II motor proteins assembles just beneath the plasma membrane at the former metaphase plate
2. The position of the contractile ring is determined by signals from the **mitotic spindle** (specifically, the central spindle — overlapping polar microtubules between the separating chromosomes)
3. Myosin II hydrolyzes ATP and slides along actin filaments, constricting the ring
4. This creates an inward indentation called the **cleavage furrow**
5. The furrow deepens progressively until the cell is pinched in two
6. Final separation (abscission) involves membrane fusion at the narrow bridge connecting the two cells

> **Why the middle?** The position of the contractile ring is specified by signals from the spindle midzone and astral microtubules. The RhoA GTPase pathway activates myosin II and actin assembly at the equator. This ensures the cell divides between the two sets of chromosomes.
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
3. The cell plate matures into a new **middle lamella** (shared layer between adjacent cell walls) and regions of new cell wall (primary wall)
4. New plasma membrane lines each side of the cell plate
5. The cell plate eventually fuses with the existing cell wall, completing the division

**Plasmodesmata** (channels connecting adjacent plant cells) are established during cell plate formation — portions of ER become trapped in the forming plate, creating cytoplasmic bridges between daughter cells.

| Feature | Animal Cytokinesis | Plant Cytokinesis |
|---------|-------------------|-------------------|
| Mechanism | Cleavage furrow (contractile ring) | Cell plate formation |
| Direction | Outside → in (constriction) | Inside → out (vesicle fusion) |
| Key proteins | Actin, myosin II | Golgi vesicles, phragmoplast microtubules |
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
              'Mitosis would be blocked at metaphase',
              'The cell would complete nuclear division but fail to form a cleavage furrow, resulting in a binucleate cell',
              'DNA replication would be blocked',
              'The cell would undergo apoptosis before reaching telophase'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow depends on a contractile ring made of actin and myosin. Blocking actin polymerization prevents ring formation, so the cytoplasm cannot divide. The nuclei divide normally (mitosis is microtubule-dependent, not actin-dependent), producing a binucleate cell.'
          },
          {
            question: 'In plant cell cytokinesis, the cell plate forms:',
            options: [
              'By constriction of the cell wall from outside to inside',
              'By fusion of Golgi-derived vesicles at the center of the cell, growing outward until it reaches the existing cell wall',
              'By dissolution of the existing cell wall',
              'By invagination of the plasma membrane'
            ],
            correctAnswer: 1,
            explanation: 'Plant cell cytokinesis builds a new partition from the inside out. Golgi vesicles carrying cell wall precursors are guided to the cell center by phragmoplast microtubules, fuse into a cell plate, and expand outward until they merge with the existing cell wall.'
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

1. The single circular chromosome is replicated starting from the **origin of replication** (oriC)
2. The two copies of the chromosome are moved to opposite ends of the cell (by proteins attached to the membrane, including ParA/ParB system)
3. The cell elongates
4. A **septum** (new cell wall and membrane) forms at the midpoint, guided by the **FtsZ protein ring** (a tubulin-like protein that forms a contractile ring analogous to the animal cell contractile ring)
5. The cell divides into two identical daughter cells

**Key differences from mitosis:**

| Feature | Binary Fission | Mitosis |
|---------|---------------|---------|
| Organism | Prokaryotes | Eukaryotes |
| Chromosome type | Single, circular | Multiple, linear |
| Spindle apparatus | None (FtsZ ring instead) | Mitotic spindle with microtubules |
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
            question: 'The prokaryotic tubulin-like protein that forms a ring during binary fission:',
            answer: 'FtsZ',
            acceptableAnswers: ['FtsZ', 'ftsZ', 'Ftsz', 'FTSZ'],
            placeholder: 'e.g. actin'
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
            question: 'FtsZ in bacteria is considered a homolog of eukaryotic tubulin. What does this suggest about the evolution of cell division?',
            options: [
              'Bacteria evolved from eukaryotes',
              'The fundamental mechanisms of cell division are ancient, with FtsZ and tubulin likely sharing a common ancestor — evidence for the evolutionary relationship between prokaryotic and eukaryotic division',
              'Tubulin was acquired by horizontal gene transfer from bacteria',
              'FtsZ and tubulin have no functional similarity'
            ],
            correctAnswer: 1,
            explanation: 'FtsZ and tubulin share structural and functional similarities despite billions of years of divergence. Both polymerize into filaments and are essential for cell division. Their homology suggests that the basic molecular machinery for cell division was present in the last common ancestor of prokaryotes and eukaryotes.'
          },
          {
            question: 'A mutation disrupts the signaling pathway that positions the cleavage furrow in an animal cell.  The furrow forms, but at a random position instead of the cell equator.  What is the likely outcome?',
            options: [
              'Normal division — position does not matter',
              'Daughter cells of unequal size, with one potentially receiving both nuclei or neither nucleus — asymmetric and likely abnormal division',
              'The cell will switch to plant-type cytokinesis',
              'The furrow will self-correct automatically'
            ],
            correctAnswer: 1,
            explanation: 'The cleavage furrow must form at the cell equator to ensure each daughter cell receives one nucleus. If positioned randomly, one daughter cell might get both nuclei (or no nucleus), and the cells would be unequal in size. Proper spindle-to-cortex signaling is essential for accurate division.'
          }
        ]
      }
    }
  ]
};