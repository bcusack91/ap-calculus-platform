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
| **Ribosomes** | 70S (50S + 30S) | 80S (60S + 40S) |
| **Cell wall** | Present (peptidoglycan in bacteria) | Present in plants/fungi; absent in animals |
| **Cytoskeleton** | Simple (FtsZ, MreB) | Complex (microtubules, microfilaments, intermediate filaments) |
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
            question: 'A cell is observed to have a single circular chromosome, 70S ribosomes, and no membrane-bound organelles. This cell is most likely:',
            options: [
              'A plant cell',
              'An animal cell',
              'A prokaryotic cell',
              'A fungal cell'
            ],
            correctAnswer: 2,
            explanation: 'Circular chromosome, 70S ribosomes, and no membrane-bound organelles are all hallmarks of prokaryotic cells. Eukaryotes (plants, animals, fungi) have linear chromosomes, 80S ribosomes, and membrane-bound organelles.'
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
            question: 'Prokaryotic ribosomes are 70S while eukaryotic cytoplasmic ribosomes are 80S. Why is this difference medically significant?',
            options: [
              'It allows eukaryotic cells to make larger proteins',
              'Antibiotics can target 70S ribosomes without harming host 80S ribosomes',
              'Prokaryotic ribosomes produce different amino acids',
              '70S ribosomes cannot read eukaryotic mRNA'
            ],
            correctAnswer: 1,
            explanation: "This structural difference is the basis for many antibiotics (tetracycline, chloramphenicol, erythromycin). These drugs bind to bacterial 70S ribosomes but not human 80S ribosomes, killing bacteria without harming the patient's cells."
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

Although both are prokaryotic, Bacteria and Archaea differ in important ways:

| Feature | Bacteria | Archaea |
|---------|---------|---------|
| **Cell wall** | Peptidoglycan | Pseudopeptidoglycan or protein |
| **Membrane lipids** | Ester-linked fatty acids | Ether-linked isoprenes |
| **RNA polymerase** | One type (simple) | Multiple types (more like eukaryotes) |
| **Response to antibiotics** | Susceptible to most | Resistant to most bacterial antibiotics |

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
            label: 'An organism with ether-linked membrane lipids and no peptidoglycan belongs to domain',
            options: ['Bacteria', 'Archaea', 'Eukarya', 'Protista']
          },
          {
            label: 'Eukaryotic cytoplasmic ribosomes have a sedimentation coefficient of',
            options: ['30S', '50S', '70S', '80S']
          },
          {
            label: 'The primary advantage of compartmentalization in eukaryotic cells is',
            options: ['Faster binary fission', 'Separating incompatible reactions into specialized compartments', 'Eliminating the need for ribosomes', 'Reducing the number of genes needed']
          },
          {
            label: 'On the phylogenetic tree, Archaea are most closely related to',
            options: ['Bacteria', 'Eukarya', 'Viruses', 'Protists']
          }
        ],
        correctAnswers: ['Archaea', '80S', 'Separating incompatible reactions into specialized compartments', 'Eukarya'],
        hint1: 'Ether-linked lipids and no peptidoglycan rule out Bacteria.',
        hint2: 'Prokaryotic = 70S, Eukaryotic cytoplasmic = 80S.',
        hint3: 'Compartmentalization allows different chemical environments within one cell.',
        explanation: 'Archaea have unique ether-linked membrane lipids. Eukaryotic cytoplasmic ribosomes are 80S (mitochondrial ribosomes are 70S — evidence for endosymbiosis). Compartmentalization is the key evolutionary advantage of eukaryotes. Archaea share more molecular features with Eukarya than with Bacteria.'
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
            question: 'Mitochondria contain 70S ribosomes and circular DNA, similar to bacteria. This observation best supports which hypothesis?',
            options: [
              'Mitochondria evolved from the nuclear genome',
              'Bacteria evolved from eukaryotic cells',
              'Mitochondria originated as endosymbiotic bacteria',
              'All organelles contain their own DNA'
            ],
            correctAnswer: 2,
            explanation: 'The endosymbiotic theory proposes that mitochondria (and chloroplasts) were once free-living bacteria that were engulfed by an ancestral eukaryotic cell. Evidence includes: 70S ribosomes, circular DNA, double membrane, and independent replication by binary fission.'
          },
          {
            question: 'A researcher treats cells with an antibiotic that specifically binds to the 50S ribosomal subunit. Which cells would be MOST affected?',
            options: [
              'Human liver cells only',
              'Plant cells only',
              'Bacterial cells and mitochondria within eukaryotic cells',
              'Only cells in the domain Archaea'
            ],
            correctAnswer: 2,
            explanation: 'The 50S subunit is part of the 70S prokaryotic ribosome. Both bacteria and mitochondria have 70S ribosomes (supporting endosymbiotic theory). This is why some antibiotics can have side effects — they can partially inhibit mitochondrial protein synthesis.'
          }
        ]
      }
    }
  ]
};
