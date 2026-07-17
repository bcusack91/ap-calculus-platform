export const bioCellStructurePart1Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# 🔬 Cell Theory — The Foundation of Biology

**Part 1 of 7 — The Three Tenets and Cell Discovery**

---

### What You'll Master in This Topic

| Part | Focus | This Part |
|------|-------|-----------|
| **1** | **Cell Theory** | ✅ You are here |
| 2 | Prokaryotes vs Eukaryotes | |
| 3 | Membrane-Bound Organelles | |
| 4 | Endomembrane System | |
| 5 | Energy Organelles | |
| 6 | Problem-Solving Workshop | |
| 7 | AP Review | |

> 🔑 **Why this matters:** Cell theory is one of the unifying theories of biology — every living organism consists of cells, and understanding cell structure is essential for nearly every AP Biology topic.

---

### What You'll Master in Part 1
- The three tenets of cell theory
- How cell theory was developed through microscopy
- The relationship between surface area and volume in cells
- Why cells must remain small`
    },
    {
      id: 'cs1-cell-theory',
      type: 'text' as const,
      content: `
## 📖 The Three Tenets of Cell Theory

Cell theory was established in the 1830s–1850s by **Schleiden**, **Schwann**, and **Virchow**:

| Tenet | Statement | Key Scientist |
|-------|-----------|---------------|
| **1** | All living things are composed of one or more cells | Schleiden & Schwann (1838–1839) |
| **2** | The cell is the basic unit of structure and function in living organisms | Schwann (1839) |
| **3** | All cells arise from pre-existing cells | Virchow (1855) — "*Omnis cellula e cellula*" |

---

### Modern Additions to Cell Theory

| Addition | Explanation |
|----------|------------|
| DNA is the hereditary material | Genetic information is passed from parent cell to daughter cell |
| All cells have the same basic chemical composition | All cells use DNA, RNA, proteins, carbohydrates, and lipids |
| Energy flow occurs within cells | All cells require energy and carry out metabolic processes |

> 🔑 **AP Exam Tip:** The third tenet — all cells come from pre-existing cells — directly contradicts spontaneous generation. Pasteur's swan-neck flask experiment (1859) provided definitive evidence.

---

### Key Historical Experiments

| Scientist | Contribution | Year |
|-----------|-------------|------|
| **Robert Hooke** | First to observe cells (cork) and coin the term "cell" | 1665 |
| **Anton van Leeuwenhoek** | First to observe living cells (bacteria, protists) | 1670s |
| **Matthias Schleiden** | All plants are made of cells | 1838 |
| **Theodor Schwann** | All animals are made of cells | 1839 |
| **Rudolf Virchow** | All cells come from pre-existing cells | 1855 |
| **Louis Pasteur** | Disproved spontaneous generation | 1859 |
      `
    },
    {
      id: 'cs1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Cell Theory Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which tenet of cell theory did Rudolf Virchow contribute?',
            options: [
              'All living things are composed of cells',
              'The cell is the basic unit of life',
              'All cells arise from pre-existing cells',
              'DNA is the hereditary material'
            ],
            correctAnswer: 2,
            explanation: 'Virchow (1855) stated "Omnis cellula e cellula" — all cells come from pre-existing cells. This was the third and final tenet of classical cell theory, contradicting spontaneous generation.'
          },
          {
            question: 'Robert Hooke observed cells in cork tissue and coined the term "cell." Why did he choose this word?',
            options: [
              'The cells were moving like living organisms',
              'The empty chambers reminded him of monastery rooms (cellae)',
              'He could see the nucleus inside each cell',
              'The cork contained visible organelles'
            ],
            correctAnswer: 1,
            explanation: 'Hooke saw empty, box-like chambers in dead cork cells that reminded him of the small rooms (cellae) that monks lived in. He was actually looking at the cell walls of dead plant cells — the cytoplasm had long since dried away.'
          },
          {
            question: 'Which of the following would violate cell theory?',
            options: [
              'A multicellular organism growing by cell division',
              'A virus reproducing inside a host cell',
              'A living organism that is not composed of cells',
              'A bacterial cell dividing by binary fission'
            ],
            correctAnswer: 2,
            explanation: 'Cell theory states all living things are composed of cells. A living organism without cells would violate this fundamental tenet. Viruses are considered exceptions to cell theory — they are not composed of cells, which is one reason biologists debate whether viruses are truly "alive."'
          }
        ]
      }
    },
    {
      id: 'cs1-sa-vol',
      type: 'text' as const,
      content: `
## 📐 Surface Area-to-Volume Ratio

A critical constraint on cell size is the **surface area-to-volume ratio (SA:V)**. As a cell grows, its volume increases faster than its surface area.

### Why This Matters

| Factor | Surface Area | Volume | SA:V Ratio |
|--------|-------------|--------|------------|
| Small cell (1 μm) | $6 \\text{ μm}^2$ | $1 \\text{ μm}^3$ | **6:1** |
| Medium cell (2 μm) | $24 \\text{ μm}^2$ | $8 \\text{ μm}^3$ | **3:1** |
| Large cell (4 μm) | $96 \\text{ μm}^2$ | $64 \\text{ μm}^3$ | **1.5:1** |

> For a cube with side length $s$: SA $= 6s^2$, Volume $= s^3$, SA:V $= \\frac{6}{s}$

---

### Consequences for Cell Function

As a cell gets **larger**:

1. **Diffusion becomes too slow** — Nutrients and waste cannot reach/exit the cell interior quickly enough
2. **DNA bottleneck** — A single nucleus cannot produce enough mRNA to serve the entire cytoplasm
3. **Membrane capacity** — Not enough membrane surface for needed transport proteins

> 🔑 **Key idea:** Cells must stay small to maintain an adequate SA:V ratio. When cells need to grow, organisms increase **cell number** (by mitosis), not cell size.

---

### Adaptations to Increase SA:V

| Adaptation | Example | How It Helps |
|-----------|---------|-------------|
| **Microvilli** | Intestinal epithelial cells | Finger-like projections increase absorptive surface area |
| **Infoldings** | Inner mitochondrial membrane (cristae) | Increases surface for ATP synthesis |
| **Flattened shape** | Red blood cells | Maximizes diffusion across the membrane |
| **Multinucleated** | Skeletal muscle fibers | Multiple nuclei serve a large cytoplasmic volume |
      `
    },
    {
      id: 'cs1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Surface Area & Volume Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spherical cell doubles its diameter. What happens to its surface area-to-volume ratio?',
            options: [
              'It doubles',
              'It stays the same',
              'It is cut in half',
              'It quadruples'
            ],
            correctAnswer: 2,
            explanation: 'For a sphere, SA:V = 3/r. When the diameter doubles, the radius doubles, so SA:V is halved. This is why larger cells face increasing difficulty with transport and diffusion.'
          },
          {
            question: 'Intestinal epithelial cells have microvilli on their apical surface. This adaptation directly addresses which cellular constraint?',
            options: [
              'The need for more ribosomes to produce enzymes',
              'The decreasing SA:V ratio as cells grow',
              'The requirement for more mitochondria',
              'The need to store more DNA'
            ],
            correctAnswer: 1,
            explanation: 'Microvilli are finger-like projections that dramatically increase the surface area of the cell membrane without increasing volume. This allows more nutrient absorption per cell — a direct solution to the SA:V constraint.'
          }
        ]
      }
    },
    {
      id: 'cs1-microscopy',
      type: 'text' as const,
      content: `
## 🔬 Microscopy & Cell Observation

Different types of microscopes reveal different levels of cellular detail:

| Microscope Type | Max Resolution | What It Reveals | Specimen |
|----------------|---------------|-----------------|----------|
| **Light microscope (LM)** | ~200 nm | Cells, large organelles (nucleus, chloroplasts) | Living or fixed |
| **Transmission electron (TEM)** | ~0.2 nm | Internal ultrastructure, membranes, ribosomes | Fixed & stained (2D) |
| **Scanning electron (SEM)** | ~2 nm | 3D surface topology | Fixed & coated (3D) |

---

### Key Definitions

- **Resolution** — The minimum distance between two points that can be distinguished as separate; determines image clarity
- **Magnification** — How much larger an image appears compared to actual size
- **Contrast** — The difference in brightness between structures; staining improves contrast

> ⚠️ **Common misconception:** Higher magnification does NOT automatically mean better images. Resolution is the limiting factor. Blowing up a blurry image just makes a bigger blurry image.

---

### Cell Size Reference

| Structure | Approximate Size |
|-----------|-----------------|
| Water molecule | 0.3 nm |
| Ribosome | 25 nm |
| Virus | 50–200 nm |
| Bacterium | 1–5 μm |
| Mitochondrion | 1–10 μm |
| Animal cell | 10–30 μm |
| Plant cell | 10–100 μm |
| Human egg cell | ~100 μm |

> 💡 **Size scale:** 1 mm = 1,000 μm = 1,000,000 nm
      `
    },
    {
      id: 'cs1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Microscopy Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To view the 3D surface of a pollen grain, you would use',
            options: ['Light microscope', 'TEM', 'SEM', 'Fluorescence microscope']
          },
          {
            label: 'To view the internal cristae of a mitochondrion, you would use',
            options: ['Light microscope', 'TEM', 'SEM', 'Dissecting microscope']
          },
          {
            label: 'The factor that limits the useful detail in an image is',
            options: ['Magnification', 'Resolution', 'Contrast', 'Brightness']
          },
          {
            label: 'A typical animal cell is approximately',
            options: ['0.2 nm', '1–5 μm', '10–30 μm', '1 mm']
          }
        ],
        correctAnswers: ['SEM', 'TEM', 'Resolution', '10–30 μm'],
        hint1: 'SEM provides 3D surface images of specimens.',
        hint2: 'TEM shoots electrons through thin sections to reveal internal ultrastructure.',
        hint3: 'Resolution determines the minimum distance between two distinguishable points.',
        explanation: 'SEM gives 3D surface views (pollen grain surface). TEM reveals internal structure at the nanometer scale (cristae inside mitochondria). Resolution is the true determinant of image detail — not magnification. Typical animal cells are 10–30 μm in diameter.'
      }
    },
    {
      id: 'cs1-input',
      type: 'input-boxes' as const,
      content: `
**Key Terms — Fill in the Blanks** ✏️

Enter the correct term for each description.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['resolution', 'Virchow', 'surface area'],
        hint1: 'This is the minimum distance between two points that can still be distinguished as separate.',
        hint2: 'This scientist stated "Omnis cellula e cellula" — all cells from cells.',
        hint3: 'As a cell grows, which measurement increases more slowly than volume?',
        explanation: 'Resolution determines image clarity (not magnification). Virchow contributed the third tenet of cell theory. Surface area increases as the square of the radius, while volume increases as the cube — so surface area cannot keep up with volume as cells grow.'
      }
    },
    {
      id: 'cs1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Cell Theory** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher discovers an organism in a deep-sea vent that carries out metabolic reactions and reproduces. Under a microscope, it appears to contain cytoplasm enclosed by a membrane. Which statement about this organism is most consistent with cell theory?',
            options: [
              'It must be a prokaryote because it lives in an extreme environment',
              'It is composed of at least one cell since all living things are made of cells',
              'It must contain a nucleus because all cells have nuclei',
              'It arose spontaneously from minerals in the vent'
            ],
            correctAnswer: 1,
            explanation: 'Cell theory states all living things are made of one or more cells. Since this organism carries out metabolism, reproduces, and has membrane-enclosed cytoplasm, it is composed of at least one cell. It could be prokaryotic or eukaryotic — not all cells have nuclei (prokaryotes lack them). Spontaneous generation has been disproven.'
          },
          {
            question: 'A cube-shaped cell has a side length of 3 μm. What is its surface area-to-volume ratio?',
            options: [
              '1:1',
              '2:1',
              '3:1',
              '6:1'
            ],
            correctAnswer: 1,
            explanation: 'For a cube: SA = $6s^{2}$ = 6(9) = 54 $\\mu m^{2}$. Volume = $s^{3}$ = 27 $\\mu m^{3}$. SA:V = 54/27 = 2:1. As the cell grows from 1→2→3 μm, the SA:V drops from 6:1 → 3:1 → 2:1, illustrating why larger cells face diffusion limitations.'
          }
        ]
      }
    }
  ]
};
