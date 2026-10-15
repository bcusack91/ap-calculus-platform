export const bioCellStructurePart2Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# 🦠 Prokaryotes vs. Eukaryotes

**Part 2 of 7 — Two Fundamental Cell Plans**

---

> 🔑 **Big idea:** All cells fall into one of two categories — **prokaryotic** (no membrane-bound nucleus) or **eukaryotic** (membrane-bound nucleus and organelles). Understanding these differences is foundational for AP Biology.

---

### What You'll Master in Part 2
- Structural and functional differences between prokaryotic and eukaryotic cells
- Features shared by all cells
- Size comparison and the significance of compartmentalization
- The domains of life and their cell types`
    },
    {
      id: 'cs2-comparison',
      type: 'text' as const,
      content: `
## 📊 Side-by-Side Comparison

| Feature | Prokaryotic Cell | Eukaryotic Cell |
|---------|-----------------|-----------------|
| **Size** | 0.1–5 μm | 10–100 μm |
| **Nucleus** | No — DNA in **nucleoid** region | Yes — membrane-bound nucleus |
| **DNA shape** | Single, circular chromosome | Multiple, linear chromosomes |
| **Membrane-bound organelles** | None | Mitochondria, ER, Golgi, etc. |
| **Ribosomes** | Present (smaller) | Present (larger in the cytoplasm) |
| **Cell wall** | Present (peptidoglycan in bacteria) | Present in plants/fungi; absent in animals |
| **Internal organization** | Specialized regions, no membrane-bound compartments | Membrane-bound compartments |
| **Reproduction** | Binary fission | Mitosis / meiosis |
| **Gene regulation** | Operons, polycistronic mRNA | Complex (enhancers, silencers, splicing) |

---

### Features Shared by ALL Cells

Every cell — whether prokaryotic or eukaryotic — has:

1. **Plasma membrane** — phospholipid bilayer with embedded proteins
2. **DNA** — genetic material encoding the organism's information
3. **Ribosomes** — molecular machines for protein synthesis
4. **Cytoplasm** — aqueous interior where metabolic reactions occur

> 🔑 These four features reflect the common ancestry of all living things — a key concept tested on the AP exam.
      `
    },
    {
      id: 'cs2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Prokaryote vs. Eukaryote Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cell is observed to have a single circular chromosome, ribosomes, and no membrane-bound organelles. This cell is most likely:',
            options: [
              'A plant root cell',
              'A eukaryotic animal cell',
              'A prokaryotic cell',
              'A fungal cell'
            ],
            correctAnswer: 2,
            explanation: 'A single circular chromosome with no membrane-bound organelles is the hallmark of a prokaryotic cell. Ribosomes do not help decide, since every cell has them. Eukaryotes (plants, animals, fungi) have linear chromosomes in a nucleus and membrane-bound organelles.'
          },
          {
            question: 'Which feature is found in BOTH prokaryotic and eukaryotic cells?',
            options: [
              'Nuclear envelope',
              'Endoplasmic reticulum',
              'Plasma membrane',
              'Mitochondria'
            ],
            correctAnswer: 2,
            explanation: 'The plasma membrane is universal to all cells. The nuclear envelope, ER, and mitochondria are found only in eukaryotes. Both cell types need a plasma membrane to regulate what enters and exits the cell.'
          },
          {
            question: 'Which observation provides the strongest evidence that prokaryotes and eukaryotes share a common ancestor?',
            options: [
              'Both build proteins on ribosomes made of rRNA and protein',
              'Both are always single-celled and similar in size',
              'Both keep their DNA inside a membrane-bound nucleus',
              'Both have cell walls made of cellulose'
            ],
            correctAnswer: 0,
            explanation: 'Ribosomes are found in all known cells and are built from the same kinds of components (rRNA and protein), which reflects common ancestry. Many eukaryotes are multicellular, prokaryotes have no nucleus, and cellulose walls are found in plants, not in all cells.'
          }
        ]
      }
    },
    {
      id: 'cs2-domains',
      type: 'text' as const,
      content: `
## 🌍 The Three Domains of Life

| Domain | Cell Type | Key Features | Examples |
|--------|----------|-------------|----------|
| **Bacteria** | Prokaryotic | Peptidoglycan cell walls; most are unicellular | *E. coli*, *Streptococcus* |
| **Archaea** | Prokaryotic | No peptidoglycan; many are extremophiles | Methanogens, halophiles, thermophiles |
| **Eukarya** | Eukaryotic | Membrane-bound organelles; includes unicellular and multicellular | Animals, plants, fungi, protists |

---

### Bacteria vs. Archaea — Not the Same!

Both are prokaryotic: no nucleus and no membrane-bound organelles. Both have cell walls that protect against osmotic lysis, but archaeal walls lack peptidoglycan, and many archaea live in extreme environments.

> 🔑 **AP Exam Tip:** Archaea are actually more closely related to Eukarya than to Bacteria on the phylogenetic tree. This is a frequently tested concept.

---

### Why Compartmentalization Matters

Eukaryotic cells are 10–100× larger than prokaryotic cells. Membrane-bound compartments solve the scaling problem:

- **Concentrate enzymes** in specific locations (e.g., digestive enzymes in lysosomes)
- **Separate conflicting reactions** (e.g., protein synthesis in cytoplasm vs. DNA replication in nucleus)
- **Increase membrane surface area** for reactions (e.g., cristae in mitochondria)
- **Create specialized environments** (e.g., low pH in lysosomes)
      `
    },
    {
      id: 'cs2-input',
      type: 'input-boxes' as const,
      content: `
**Key Terms — Fill in the Blanks** ✏️

Enter the correct term for each description.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['nucleoid', 'peptidoglycan', 'binary fission'],
        hint1: 'The region in a prokaryotic cell where the circular chromosome is located (not enclosed by a membrane).',
        hint2: 'The polymer that makes up bacterial cell walls — a target of antibiotics like penicillin.',
        hint3: 'The process by which prokaryotic cells reproduce — splitting into two identical daughter cells.',
        explanation: 'The nucleoid is the non-membrane-bound region containing prokaryotic DNA. Peptidoglycan is unique to bacterial cell walls and is targeted by penicillin/lysozyme. Binary fission is asexual reproduction in prokaryotes — no mitotic spindle is involved.'
      }
    },
    {
      id: 'cs2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Cell Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cell walls are found in Bacteria, Archaea, fungi, and',
            options: ['Plants', 'Animals', 'All protists', 'Viruses']
          },
          {
            label: 'The structure that every cell uses to synthesize proteins is the',
            options: ['Ribosome', 'Nucleus', 'Golgi apparatus', 'Mitochondrion']
          },
          {
            label: 'The primary advantage of compartmentalization in eukaryotic cells is',
            options: ['Allowing faster cell division by binary fission', 'Separating incompatible reactions into distinct regions', 'Removing the need for ribosomes in the cytoplasm', 'Reducing the number of genes each cell needs']
          },
          {
            label: 'On the phylogenetic tree, Archaea are most closely related to',
            options: ['Bacteria', 'Eukarya', 'Viruses', 'Cyanobacteria']
          }
        ],
        correctAnswers: ['Plants', 'Ribosome', 'Separating incompatible reactions into distinct regions', 'Eukarya'],
        hint1: 'Animal cells are the group without a wall.',
        hint2: 'It is found in all cells, prokaryotic and eukaryotic.',
        hint3: 'Compartmentalization allows different chemical environments within one cell.',
        explanation: 'Cell walls of Bacteria, Archaea, fungi, and plants provide structure and protect against osmotic lysis; animal cells have none. Ribosomes are universal; they are not membrane-bound, so even prokaryotes have them. Compartmentalization is the key evolutionary advantage of eukaryotes. Archaea share more molecular features with Eukarya than with Bacteria.'
      }
    },
    {
      id: 'cs2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Prokaryotes vs. Eukaryotes** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Mitochondria contain their own ribosomes and circular DNA, both similar to those of bacteria. This observation best supports which hypothesis?',
            options: [
              'Mitochondria evolved from pieces of the nuclear genome',
              'Bacteria evolved from mitochondria released by eukaryotes',
              'Mitochondria originated as endosymbiotic bacteria',
              'All organelles contain their own DNA'
            ],
            correctAnswer: 2,
            explanation: 'The endosymbiotic theory proposes that mitochondria (and chloroplasts) were once free-living bacteria that were engulfed by an ancestral eukaryotic cell. Evidence includes bacteria-like ribosomes, circular DNA, a double membrane, and division by a process like binary fission.'
          },
          {
            question: 'A bacterium has no membrane-bound organelles, yet it keeps its DNA in a defined area and carries out many separate metabolic tasks. Which statement best describes how prokaryotes organize these functions?',
            options: [
              'They use internal regions with specialized structures, like the nucleoid',
              'They hide a small nucleus too thin to see with most microscopes',
              'They borrow mitochondria from nearby eukaryotic cells for ATP',
              'They run every reaction everywhere in the cell with no organization'
            ],
            correctAnswer: 0,
            explanation: 'Prokaryotes typically lack internal membrane-bound organelles but have internal regions with specialized structures and functions, such as the nucleoid where the chromosome sits. They have no nucleus, cannot borrow organelles, and their cytoplasm is organized rather than random.'
          }
        ]
      }
    }
  ]
};
