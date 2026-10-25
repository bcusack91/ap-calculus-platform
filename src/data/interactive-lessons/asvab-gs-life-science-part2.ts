const gslPlantCellFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="24" y="16" width="208" height="190" rx="10" fill="none" stroke="currentColor" stroke-width="4"/><rect x="33" y="25" width="190" height="172" rx="7" fill="none" stroke="currentColor" stroke-width="1.2"/><g class="fig-muted"><rect x="52" y="58" width="100" height="108" rx="28" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/></g><circle cx="184" cy="58" r="20" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="188" cy="55" r="6" fill="currentColor"/><g class="fig-accent"><ellipse cx="78" cy="40" rx="13" ry="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="70" y1="40" x2="86" y2="40" stroke="currentColor" stroke-width="1"/><ellipse cx="118" cy="182" rx="13" ry="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="110" y1="182" x2="126" y2="182" stroke="currentColor" stroke-width="1"/><ellipse cx="192" cy="168" rx="13" ry="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="184" y1="168" x2="200" y2="168" stroke="currentColor" stroke-width="1"/></g><g class="fig-accent-2"><ellipse cx="188" cy="116" rx="16" ry="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 176 116 L 180 111 L 184 121 L 188 111 L 192 121 L 196 111 L 200 116" fill="none" stroke="currentColor" stroke-width="1"/></g><g stroke="currentColor" stroke-width="1"><line x1="204" y1="55" x2="262" y2="42"/><line x1="152" y1="96" x2="262" y2="88"/><line x1="204" y1="117" x2="262" y2="124"/><line x1="205" y1="167" x2="262" y2="164"/></g><g fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="274" cy="42" r="10"/><circle cx="274" cy="88" r="10"/><circle cx="274" cy="124" r="10"/><circle cx="274" cy="164" r="10"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="274" y="46">1</text><text x="274" y="92">2</text><text x="274" y="128">3</text><text x="274" y="168">4</text></g></svg>',
  alt: 'Simplified drawing of a plant cell with a thick outer cell wall and a thin cell membrane just inside it. Label 1 points to a round structure near the top right that contains a smaller dark dot (the nucleus with its nucleolus). Label 2 points to a large dashed sac that fills most of the left and center of the cell (the central vacuole). Label 3 points to a small oval with a zigzag inner fold on the right side (a mitochondrion). Label 4 points to one of three small green ovals with a line through the middle, scattered near the cell edges (chloroplasts).',
  caption: 'Figure 1. A plant cell. Four structures are numbered.',
  size: 'md' as const,
}

export const asvabGsLifeSciencePart2Data = {
  topicSlug: 'asvab-gs-life-science',
  sections: [
    {
      id: 'gsl2-intro',
      type: 'text' as const,
      content: `# 🧬 Life Science: Cells, Body Systems and Ecology

**Part 2 of 7 — Cells and Organelles**

### The Cell Theory

Every living thing is built from cells. Biology rests on three statements, known together as the **cell theory**:

1. All living things are made of one or more **cells**.
2. The cell is the **basic unit of life** (the smallest thing that is alive).
3. All cells come from **existing cells**.

### Two kinds of cells

| | Prokaryotic cell | Eukaryotic cell |
|:---|:---|:---|
| Nucleus? | **No** nucleus; DNA floats in the cell | **Has a nucleus** that holds the DNA |
| Size | Small and simple | Larger, with many membrane-bound organelles |
| Examples | **Bacteria** | Plants, animals, fungi, protists |

Memory hook: **pro** sounds like "no" (no nucleus); **eu** sounds like "do" (do have one).

### Levels of organization

$$\\text{cell} \\rightarrow \\text{tissue} \\rightarrow \\text{organ} \\rightarrow \\text{organ system} \\rightarrow \\text{organism}$$

Muscle **cells** form muscle **tissue**; tissues form an **organ** such as the heart; the heart and blood vessels form the circulatory **system**; all the systems together make the **organism**.`
    },
    {
      id: 'gsl2-organelles',
      type: 'text' as const,
      content: `## The Organelle Job Chart

Think of a cell as a small factory. Each organelle has one job you should be able to name in a second.

| Organelle | Job | Factory comparison |
|:---|:---|:---|
| **Nucleus** | Holds the DNA and controls the cell | Main office |
| **Cell membrane** | Controls what enters and leaves | Security gate |
| **Cytoplasm** | Gel that fills the cell; organelles sit in it | Factory floor |
| **Mitochondria** | Release energy from sugar (cellular respiration) | Power plant |
| **Ribosomes** | Build proteins | Assembly line |
| **Endoplasmic reticulum (ER)** | Transports materials; rough ER has ribosomes | Conveyor belts |
| **Golgi apparatus** | Packages and ships proteins | Shipping department |
| **Lysosomes** | Break down wastes and worn-out parts | Cleanup crew |
| **Vacuole** | Stores water, food and wastes | Warehouse |
| **Chloroplasts** | Capture sunlight for photosynthesis (plants) | Solar panels |
| **Cell wall** | Rigid outer support (plants, fungi, bacteria) | Outer brick wall |

### Plant cells vs animal cells

| Structure | Plant cell | Animal cell |
|:---|:---:|:---:|
| Cell membrane, nucleus, mitochondria, ribosomes | ✅ | ✅ |
| **Cell wall** (made of cellulose) | ✅ | ❌ |
| **Chloroplasts** | ✅ | ❌ |
| **Large central vacuole** | ✅ | ❌ (small vacuoles only) |
| Shape | Boxy, fixed | Rounded, flexible |

> **Key Fact:** Plants have **both** chloroplasts **and** mitochondria. Chloroplasts make sugar; mitochondria then burn that sugar for energy, just as in animal cells. "Plants have chloroplasts instead of mitochondria" is a classic wrong answer.`
    },
    {
      id: 'gsl2-transport',
      type: 'text' as const,
      content: `## Moving Materials and Making New Cells

### Diffusion and osmosis

- **Diffusion:** particles spread from where they are **more concentrated** to where they are **less concentrated**. No energy is needed. (A drop of food coloring spreading through water.)
- **Osmosis:** the diffusion of **water** across a membrane. A wilted stalk of celery placed in fresh water firms up as water moves into its cells.
- **Active transport:** the cell **spends energy** to move material from low concentration to high, "uphill."

### Mitosis vs meiosis

Human body cells have **46 chromosomes** (23 pairs). Cells divide in two different ways:

| | Mitosis | Meiosis |
|:---|:---|:---|
| Purpose | Growth and repair | Making sex cells (sperm and egg) |
| Number of new cells | **2** | **4** |
| Chromosomes in each new human cell | **46** (identical copy) | **23** (half) |

When a sperm (23) joins an egg (23) at fertilization, the new cell has 46 again.

### Worked example

**Question:** A cell from a sample has a nucleus, a cell wall and chloroplasts. Where did it come from?

**Reasoning:** A nucleus rules out bacteria. A cell wall plus chloroplasts means a **plant**. (Fungi have cell walls but no chloroplasts; animals have neither.)`
    },
    {
      id: 'gsl2-figure-dropdown',
      type: 'dropdown-select' as const,
      figure: gslPlantCellFigure,
      content: '**Label the cell.** 🔽 Name each numbered structure in Figure 1.',
      exercise: {
        dropdowns: [
          {
            label: 'Structure 1 is the:',
            options: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Chloroplast'],
            correctAnswer: 0
          },
          {
            label: 'Structure 2 is the:',
            options: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Chloroplast'],
            correctAnswer: 1
          },
          {
            label: 'Structure 3 is a:',
            options: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Chloroplast'],
            correctAnswer: 2
          },
          {
            label: 'Structure 4 is a:',
            options: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Chloroplast'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Chloroplast'],
        hint1: 'The control center is round and holds a dark dot (the nucleolus).',
        hint2: 'In a plant cell, one storage sac takes up most of the space.',
        hint3: 'Chloroplasts are the green ovals; the mitochondrion has a folded inner membrane.',
        explanation: '1 is the nucleus (round, with a dark nucleolus inside). 2 is the large central vacuole, the storage sac that fills much of a plant cell. 3 is a mitochondrion: its folded inner membrane is where energy is released from sugar. 4 is a chloroplast, one of the green structures that capture sunlight. The vacuole and chloroplasts, along with the thick wall, mark this as a plant cell.'
      }
    },
    {
      id: 'gsl2-mc',
      type: 'multiple-choice' as const,
      content: '**Organelle jobs.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which structure controls which substances enter and leave an animal cell?',
            options: ['Cell membrane', 'Cell wall', 'Nucleus', 'Golgi apparatus'],
            correctAnswer: 0,
            explanation: 'The cell membrane is the selective barrier around every cell. Animal cells have no cell wall; the nucleus controls cell activities through DNA, not by guarding the border; the Golgi apparatus packages proteins.'
          },
          {
            question: 'A single-celled organism has no nucleus. It is most likely a:',
            options: ['Bacterium', 'Fungus', 'Plant', 'Protist'],
            correctAnswer: 0,
            explanation: 'Cells without a nucleus are prokaryotes, and bacteria are the common example. Fungi, plants and protists are all eukaryotes, which keep their DNA inside a nucleus.'
          },
          {
            question: 'Which list is in order from smallest to largest?',
            options: ['Cell, tissue, organ, organ system', 'Tissue, cell, organ, organ system', 'Cell, organ, tissue, organ system', 'Organ, tissue, cell, organ system'],
            correctAnswer: 0,
            explanation: 'Cells group into tissues, tissues into organs, and organs into organ systems. Every other order puts a larger level before a smaller one.'
          },
          {
            question: 'A raisin left in a glass of water swells up. Which process moved the water into the raisin?',
            options: ['Osmosis', 'Photosynthesis', 'Active transport', 'Meiosis'],
            correctAnswer: 0,
            explanation: 'Water moved across the raisin\'s cell membranes from where water was more concentrated (the glass) to where it was less concentrated (inside the raisin). Diffusion of water across a membrane is osmosis. Active transport needs energy and moves material uphill; photosynthesis and meiosis are unrelated.'
          }
        ]
      }
    },
    {
      id: 'gsl2-input',
      type: 'input-boxes' as const,
      content: `**Count the chromosomes.** ✍️ A dog's body cells have $78$ chromosomes.

**1)** How many chromosomes are in each cell made when a dog skin cell divides by mitosis?

**2)** How many chromosomes are in each dog egg cell made by meiosis?

**3)** How many new cells does one round of meiosis produce from one starting cell?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['78', '39', '4'],
        hint1: 'Mitosis makes identical copies of the parent cell.',
        hint2: 'Meiosis halves the chromosome number.',
        hint3: 'Mitosis makes 2 cells; meiosis makes 4.',
        explanation: '(1) Mitosis copies the cell exactly, so each new skin cell has $78$. (2) Meiosis makes sex cells with half the number: $78 \\div 2 = 39$. (3) One round of meiosis produces $4$ cells. When a $39$-chromosome sperm joins a $39$-chromosome egg, the puppy\'s first cell has $78$ again.'
      }
    },
    {
      id: 'gsl2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Cell theory:** all living things are made of cells; the cell is the basic unit of life; cells come from cells
- **Prokaryotes** (bacteria) have **no nucleus**; **eukaryotes** (plants, animals, fungi, protists) do
- Organelle jobs: **nucleus** = control and DNA, **mitochondria** = energy, **ribosomes** = proteins, **membrane** = gatekeeper, **chloroplasts** = photosynthesis
- Only plant cells have a **cell wall, chloroplasts and a large central vacuole**; plants **also** have mitochondria
- **Osmosis** = water diffusing across a membrane; diffusion goes from high to low concentration
- **Mitosis** → 2 identical cells (46 in humans); **meiosis** → 4 sex cells with half (23)

> **Up Next:** Part 3 — DNA, genetics and how living things are classified.`
    }
  ]
};
