export const bioCellStructurePart6Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Applying Cell Structure Concepts**

---

> This workshop tests your ability to **integrate** concepts from Parts 1–5. On the AP exam, questions often combine multiple cell biology topics — identifying organelles from experimental data, predicting outcomes when organelles malfunction, and analyzing cell specialization.

---

### Strategy for AP Cell Biology Questions

1. **Identify the organelle** from the description, not just the name
2. **Connect structure to function** — why does this organelle have this particular structure?
3. **Predict consequences** — what happens when this organelle is absent, damaged, or overactive?
4. **Think about specialization** — which cell types would have the most/least of this organelle?`
    },
    {
      id: 'cs6-scenario1',
      type: 'text' as const,
      content: `
## 🔬 Scenario 1: The Mystery Cell

A researcher examines an unknown eukaryotic cell under an electron microscope and observes:
- Extremely abundant rough ER
- Very prominent Golgi apparatus with many vesicles
- Numerous mitochondria
- No chloroplasts
- No large central vacuole

**Use these observations to answer the following questions.**`
    },
    {
      id: 'cs6-scenario1-quiz',
      type: 'multiple-choice' as const,
      content: `
**Scenario 1 Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the observations, this cell is most likely specialized for:',
            options: [
              'Photosynthesis',
              'Protein secretion',
              'Fat storage',
              'Cell division'
            ],
            correctAnswer: 1,
            explanation: 'Abundant rough ER (protein synthesis) + prominent Golgi (protein modification and packaging) + many vesicles (secretion) = a cell specialized for protein secretion. Examples include pancreatic acinar cells (digestive enzymes) or plasma cells (antibodies).'
          },
          {
            question: 'The absence of chloroplasts and a large central vacuole suggests this cell is from:',
            options: [
              'A plant leaf',
              'A fungal hypha',
              'An animal tissue',
              'An algal colony'
            ],
            correctAnswer: 2,
            explanation: 'Chloroplasts are exclusive to plants and algae. Large central vacuoles are characteristic of plant cells. The absence of both indicates an animal cell. The secretory features further support this — the cell is likely a glandular animal cell.'
          },
          {
            question: 'Why would this cell need numerous mitochondria?',
            options: [
              'To store excess glucose',
              'To provide ATP for the energy-demanding process of protein synthesis and secretion',
              'To photosynthesize when light is available',
              'To replicate mitochondrial DNA for the next generation'
            ],
            correctAnswer: 1,
            explanation: 'Protein synthesis, folding, modification, packaging, and vesicular transport all require large amounts of ATP. Active secretory cells have many mitochondria to meet this energy demand.'
          }
        ]
      }
    },
    {
      id: 'cs6-scenario2',
      type: 'text' as const,
      content: `
## 🧪 Scenario 2: Drug Experiment

A biologist treats cells with **Brefeldin A**, a drug that causes the Golgi apparatus to collapse back into the ER.

**Predict the effects on cellular function.**`
    },
    {
      id: 'cs6-scenario2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Scenario 2 Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the Golgi collapses, which process would be MOST directly impaired?',
            options: [
              'DNA replication',
              'Protein sorting, modification, and secretion',
              'Glycolysis in the cytoplasm',
              'mRNA transcription in the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'The Golgi is responsible for modifying proteins (glycosylation), sorting them to correct destinations, and packaging them into vesicles. Without a functional Golgi, proteins made in the ER cannot be properly processed or delivered.'
          },
          {
            question: 'Would Brefeldin A affect a prokaryotic cell?',
            options: [
              'Yes — prokaryotes also depend on the Golgi for protein secretion',
              'No — prokaryotes lack a Golgi apparatus and endomembrane system',
              'Yes — it would disrupt their nuclear envelope',
              'No — but only because their cell wall blocks the drug'
            ],
            correctAnswer: 1,
            explanation: 'Prokaryotes lack all membrane-bound organelles, including the Golgi apparatus. They secrete proteins directly through the plasma membrane or via type III/IV secretion systems. Brefeldin A specifically targets the eukaryotic endomembrane system.'
          }
        ]
      }
    },
    {
      id: 'cs6-comparison',
      type: 'text' as const,
      content: `
## 📊 Cell Comparison Practice

### Plant Cell vs. Animal Cell

| Feature | Plant Cell | Animal Cell |
|---------|-----------|-------------|
| **Cell wall** | Present (cellulose) | Absent |
| **Central vacuole** | Large, prominent | Small or absent |
| **Chloroplasts** | Present (photosynthetic cells) | Absent |
| **Centrioles** | Absent in most | Present |
| **Plasmodesmata** | Present (cell-cell connections) | Absent |
| **Tight junctions / Gap junctions** | Absent | Present |
| **Shape** | Fixed (rectangular) | Flexible (round/irregular) |
| **Cytokinesis** | Cell plate formation | Cleavage furrow |
| **Lysosomes** | Rare (vacuole serves similar role) | Common |

> 🔑 **Both have:** plasma membrane, nucleus, ER, Golgi, ribosomes, mitochondria, cytoskeleton`
    },
    {
      id: 'cs6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Cell Type Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A cell with chloroplasts, a cell wall, and a large central vacuole is a',
            options: ['Animal cell', 'Prokaryotic cell', 'Plant cell', 'Fungal cell']
          },
          {
            label: 'During plant cell cytokinesis, a structure called the ___ forms between daughter cells',
            options: ['Cleavage furrow', 'Cell plate', 'Contractile ring', 'Nuclear envelope']
          },
          {
            label: 'Cell-cell communication channels in plant cells are called',
            options: ['Gap junctions', 'Tight junctions', 'Plasmodesmata', 'Desmosomes']
          },
          {
            label: 'A cell type that would have the MOST smooth ER is a',
            options: ['Neuron', 'Liver cell', 'Red blood cell', 'Bacterial cell']
          }
        ],
        correctAnswers: ['Plant cell', 'Cell plate', 'Plasmodesmata', 'Liver cell'],
        hint1: 'Chloroplasts + cell wall + central vacuole = plant cell features.',
        hint2: 'Plant cells cannot form a cleavage furrow because the rigid cell wall prevents pinching.',
        hint3: 'Plasmodesmata are channels through the cell wall connecting adjacent plant cells.',
        explanation: 'Plant cells have chloroplasts, cell walls, and large central vacuoles. Plant cytokinesis uses a cell plate (vesicles fuse to build a new wall). Plasmodesmata allow direct cytoplasmic connections between plant cells. Liver cells (hepatocytes) have extensive smooth ER for detoxification of drugs and alcohol.'
      }
    },
    {
      id: 'cs6-input',
      type: 'input-boxes' as const,
      content: `
**Organelle Identification** ✏️

Identify the organelle described.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['chloroplast', 'lysosome', 'Golgi apparatus'],
        hint1: 'Contains thylakoid membranes organized into grana; site of photosynthesis.',
        hint2: 'Membrane-bound vesicle with acidic interior (pH ~5) containing hydrolytic enzymes.',
        hint3: 'Stack of flattened cisternae with a cis (receiving) face and trans (shipping) face.',
        explanation: 'Chloroplasts contain thylakoids stacked into grana where light reactions occur. Lysosomes are acidic digestive compartments. The Golgi apparatus consists of cisternae stacks that modify, sort, and package proteins from the ER.'
      }
    },
    {
      id: 'cs6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A genetic mutation prevents a cell from producing mannose-6-phosphate tags. Which organelle would be MOST directly affected?',
            options: [
              'Mitochondria — they would not receive enough ATP',
              'Lysosomes — hydrolytic enzymes would not be targeted correctly',
              'Chloroplasts — photosynthesis would slow down',
              'Nucleus — DNA replication would fail'
            ],
            correctAnswer: 1,
            explanation: 'Mannose-6-phosphate (M6P) is the molecular "address label" that directs enzymes from the Golgi to lysosomes. Without M6P tags, hydrolytic enzymes would be secreted outside the cell instead of being delivered to lysosomes. This leads to I-cell disease (inclusion cell disease).'
          },
          {
            question: 'A researcher stains cells with a fluorescent dye that binds to actin. Under the fluorescence microscope, which structures would glow?',
            options: [
              'Mitotic spindle fibers and cilia',
              'Microfilaments, cleavage furrows, and microvilli',
              'Intermediate filaments and the nuclear lamina',
              'Rough ER and the Golgi apparatus'
            ],
            correctAnswer: 1,
            explanation: 'Actin is the protein that makes up microfilaments (7 nm). These form cleavage furrows during cytokinesis, support microvilli, and are involved in cell crawling. Microtubules (tubulin) form the spindle and cilia. Intermediate filaments are made of keratins/lamins.'
          }
        ]
      }
    }
  ]
};
