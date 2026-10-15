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
- The relationship between surface area and volume in cells
- Why cells must remain small
- How body size affects heat exchange and metabolic rate`
    },
    {
      id: 'cs1-cell-theory',
      type: 'text' as const,
      content: `
## 📖 The Three Tenets of Cell Theory

Cell theory is one of the unifying ideas of biology:

| Tenet | Statement |
|-------|-----------|
| **1** | All living things are composed of one or more cells |
| **2** | The cell is the basic unit of structure and function in living organisms |
| **3** | All cells arise from pre-existing cells |

---

### Modern Additions to Cell Theory

| Addition | Explanation |
|----------|------------|
| DNA is the hereditary material | Genetic information is passed from parent cell to daughter cell |
| All cells have the same basic chemical composition | All cells use DNA, RNA, proteins, carbohydrates, and lipids |
| Energy flow occurs within cells | All cells require energy and carry out metabolic processes |

> 🔑 **AP Exam Tip:** The third tenet — all cells come from pre-existing cells — rules out spontaneous generation. The shared chemistry of all cells (DNA, ribosomes, membranes) is evidence of common ancestry. The names and dates of the scientists who built cell theory are not tested on the AP exam.
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
            question: 'Sealed flasks of sterile broth stay free of microbes, but microbes grow as soon as living cells are added. This result most directly supports which tenet of cell theory?',
            options: [
              'All cells arise from pre-existing cells',
              'The cell is the basic unit of structure and function',
              'All living things are composed of one or more cells',
              'Every cell uses DNA as its hereditary material'
            ],
            correctAnswer: 0,
            explanation: 'New cells appeared only when living cells were already present, so cells came from pre-existing cells rather than arising spontaneously from the broth. The other statements are true parts of cell theory, but this experiment does not test them.'
          },
          {
            question: 'Bacteria, plants, and animals all store information in DNA, build proteins on ribosomes, and are bounded by a phospholipid membrane. Which conclusion does this shared set of features best support?',
            options: [
              'Bacteria evolved from plant and animal cells',
              'All living cells descend from a common ancestor',
              'These features arose separately in each group',
              'All cells have the same size and shape'
            ],
            correctAnswer: 1,
            explanation: 'Features found in every known cell, such as ribosomes made of rRNA and protein, are best explained by inheritance from a common ancestor. Independent origin of the same complex machinery in each group is far less likely, and the shared features say nothing about size or shape.'
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
              'The decreasing SA:V ratio as a cell grows',
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
## 🐘 Scaling Up: SA:V in Whole Organisms

The same geometry applies to whole organisms. As body size increases, the surface area-to-volume ratio **decreases**.

| Feature | Small organism (e.g., a shrew) | Large organism (e.g., an elephant) |
|---------|-------------------------------|------------------------------------|
| **SA:V ratio** | High | Low |
| **Heat exchange per unit mass** | Fast — loses heat quickly | Slow — retains heat |
| **Metabolic rate per unit body mass** | High | Low |

### Why the metabolic pattern follows

- A small body exchanges proportionally more heat with its surroundings, so a small endotherm must burn fuel faster per gram just to stay warm.
- A large body exchanges heat slowly, so its metabolic rate per gram can be lower.

### Structural solutions at every level

When exchange can't keep up, organisms add surface without adding much volume: microvilli on gut cells, root hairs on plant roots, folded membranes inside organelles, and thin, flat leaves.

> 🔑 **AP Exam Tip:** Expect to calculate SA:V for a cube or sphere and then explain the consequence for exchange, heat loss, or metabolic rate.
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
            label: 'As a cell grows larger, its surface area-to-volume ratio',
            options: ['Increases', 'Decreases', 'Stays the same', 'Doubles']
          },
          {
            label: 'Per gram of body mass, a small mammal loses heat to its surroundings',
            options: ['Faster than a large mammal', 'Slower than a large mammal', 'At the same rate as a large mammal', 'Only when it is active']
          },
          {
            label: 'Per gram of body mass, a shrew has a metabolic rate that is',
            options: ['Higher than an elephant\'s', 'Lower than an elephant\'s', 'Equal to an elephant\'s', 'Zero at rest']
          },
          {
            label: 'Microvilli and root hairs mainly increase a cell\'s',
            options: ['Volume', 'Surface area', 'DNA content', 'Number of nuclei']
          }
        ],
        correctAnswers: ['Decreases', 'Faster than a large mammal', 'Higher than an elephant\'s', 'Surface area'],
        hint1: 'Volume grows as the cube of length; surface area only as the square.',
        hint2: 'Smaller bodies have a higher SA:V ratio.',
        hint3: 'Fast heat loss must be balanced by fast heat production.',
        explanation: 'Larger cells have lower SA:V ratios. Small animals have a high SA:V ratio, so they exchange heat with the environment proportionally faster and need a higher metabolic rate per unit body mass to stay warm. Microvilli and root hairs add surface area with little added volume.'
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
        correctAnswers: ['microvilli', 'volume', 'surface area'],
        hint1: 'Finger-like projections on intestinal cells that increase the absorptive surface.',
        hint2: 'As a cell grows, this measurement increases as the cube of its length.',
        hint3: 'As a cell grows, which measurement increases more slowly than volume?',
        explanation: 'Microvilli increase surface area for absorption. Volume grows with the cube of a cell\'s length while surface area grows only with the square, so surface area cannot keep up with volume as cells grow.'
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
              'It is made of at least one cell, as all living things are',
              'It must contain a nucleus because all true cells have nuclei',
              'It arose spontaneously from the minerals around the vent'
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
