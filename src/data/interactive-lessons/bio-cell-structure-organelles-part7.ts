export const bioCellStructurePart7Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# 🎯 AP Review — Cell Structure & Organelles

**Part 7 of 7 — Comprehensive Review**

---

> This final part brings together all concepts from Parts 1–6 with AP exam-style questions. Focus on **application and analysis**, not just recall.

---

### High-Yield Topics for the AP Exam

| Topic | Why It's Tested | Common Question Types |
|-------|---------------|---------------------|
| Endomembrane system flow | Tests understanding of organelle relationships | Trace protein through ER → Golgi → vesicle |
| Endosymbiotic theory evidence | Tests evidence-based reasoning | Identify evidence for mitochondria/chloroplast origin |
| SA:V ratio | Tests mathematical reasoning | Calculate ratio, predict consequences |
| Prokaryote vs. eukaryote | Tests comparison skills | Table-based comparison questions |
| Cell specialization | Tests structure-function connections | Predict organelle abundance from cell function |`
    },
    {
      id: 'cs7-review-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cell biologist uses autoradiography with tritiated $(^{3}H)$ leucine (a radioactive amino acid) to track protein production. After 5 minutes, radioactivity is concentrated in the rough ER. After 20 minutes, radioactivity is concentrated in the Golgi. After 60 minutes, radioactivity is found outside the cell. This experiment demonstrates:',
            options: [
              'Proteins are made in the Golgi and then secreted through the rough ER',
              'Secreted proteins move from the rough ER to the Golgi and then out of the cell',
              'Radioactive leucine is toxic, so the cell expels it through the rough ER',
              'Proteins are made outside the cell and imported by endocytosis into the Golgi'
            ],
            correctAnswer: 1,
            explanation: 'This is George Palade\'s classic pulse-chase experiment (Nobel Prize, 1974). The temporal sequence of radioactivity precisely maps the secretory pathway: rough ER (synthesis) → Golgi (modification/sorting) → secretory vesicles → exocytosis.'
          },
          {
            question: 'Cyanide blocks the last step of the mitochondrial electron transport chain, where electrons pass to oxygen. A cell treated with cyanide would:',
            options: [
              'Raise its rate of oxidative phosphorylation to make up the loss',
              'Keep making ATP at the same rate, since glycolysis would take over',
              'Sharply cut ATP output, since oxidative phosphorylation would stop',
              'Switch to photosynthesis, since its mitochondria would fail'
            ],
            correctAnswer: 2,
            explanation: 'Cyanide stops electron flow at the end of the electron transport chain, so electrons can no longer pass to oxygen and the $H^{+}$ gradient is not maintained. Without the gradient, ATP synthase cannot make ATP by oxidative phosphorylation. Glycolysis still yields a little ATP (2 per glucose), far less than the roughly 26–28 normally made by oxidative phosphorylation, and animal cells cannot photosynthesize.'
          },
          {
            question: 'Which of the following correctly pairs a cellular structure with the type of cell in which it would be MOST abundant?',
            options: [
              'Smooth ER — white blood cells',
              'Chloroplasts — root cells',
              'Rough ER — pancreatic acinar cells',
              'Central vacuole — animal muscle cells'
            ],
            correctAnswer: 2,
            explanation: 'Pancreatic acinar cells secrete digestive enzymes (proteins), requiring extensive rough ER for protein synthesis. White blood cells are not marked by unusually abundant smooth ER. Chloroplasts are in photosynthetic cells (leaves, not roots). Central vacuoles are in plant cells, not animal cells.'
          }
        ]
      }
    },
    {
      id: 'cs7-review-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues that viruses disprove cell theory because they can reproduce without being composed of cells. The best response to this argument is:',
            options: [
              'Viruses are actually made of very small cells that pass through filters',
              'Viruses are not considered living organisms, so cell theory does not cover them',
              'Cell theory has been disproven and is no longer accepted by biologists',
              'Viruses are built with their own ribosomes and reproduce independently'
            ],
            correctAnswer: 1,
            explanation: 'Cell theory applies to living organisms. Viruses lack key characteristics of life — they have no metabolism, cannot reproduce independently (they hijack host cell machinery), and are not made of cells. Most biologists classify viruses as "non-living" or "obligate intracellular parasites," so they exist outside the scope of cell theory.'
          },
          {
            question: 'How do internal membranes help a eukaryotic cell carry out its metabolism?',
            options: [
              'They separate competing reactions and add surface area for enzymes',
              'They let the cell skip making ribosomes in its cytoplasm',
              'They block every substance from moving between compartments',
              'They keep the cell smaller than a typical prokaryotic cell'
            ],
            correctAnswer: 0,
            explanation: 'Internal membranes compartmentalize the cell: they keep competing reactions apart and increase the surface area where membrane-bound reactions occur (for example, the folded inner membrane of the mitochondrion). Eukaryotic cells still need ribosomes, materials do move between compartments (by vesicles and transport proteins), and eukaryotic cells are usually larger than prokaryotes.'
          },
          {
            question: 'If a cell\'s Golgi apparatus were removed, which of the following would still occur normally?',
            options: [
              'Secretion of proteins to the cell exterior',
              'Formation of lysosomes',
              'Glycosylation of membrane proteins',
              'Transcription of mRNA in the nucleus'
            ],
            correctAnswer: 3,
            explanation: 'Transcription occurs in the nucleus and does not depend on the Golgi. Without the Golgi, protein secretion would fail (no vesicle sorting), lysosomes could not form (enzymes not targeted), and full glycosylation could not be completed (Golgi modifies carbohydrate chains started in the ER).'
          }
        ]
      }
    },
    {
      id: 'cs7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hydrolytic enzymes that digest worn-out organelles are found in the',
            options: ['Mitochondria', 'Lysosomes', 'Ribosomes', 'Golgi apparatus']
          },
          {
            label: 'The organelle that modifies, sorts, and packages proteins from the ER is the',
            options: ['Lysosome', 'Golgi apparatus', 'Nucleolus', 'Mitochondrion']
          },
          {
            label: 'A cell with many mitochondria and extensive rough ER is likely specialized for',
            options: ['Photosynthesis', 'Protein secretion', 'Fat storage', 'Gas exchange']
          },
          {
            label: 'Prokaryotic cells lack all of the following EXCEPT',
            options: ['Nucleus', 'Ribosomes', 'Mitochondria', 'Endoplasmic reticulum']
          }
        ],
        correctAnswers: ['Lysosomes', 'Golgi apparatus', 'Protein secretion', 'Ribosomes'],
        hint1: 'These acidic sacs are the cell\'s digestive compartments.',
        hint2: 'Vesicles from the rough ER deliver proteins here before they are shipped out.',
        hint3: 'Energy (mitochondria) + protein synthesis (rough ER) = secretory cell.',
        explanation: 'Lysosomes hold hydrolytic enzymes that digest worn-out organelles and engulfed material. The Golgi apparatus modifies, sorts, and packages proteins received from the ER. Abundant mitochondria + rough ER indicates a protein-secreting cell. Ribosomes are universal to ALL cells.'
      }
    },
    {
      id: 'cs7-input',
      type: 'input-boxes' as const,
      content: `
**Final Key Terms** ✏️

Enter the correct term for each description.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['endosymbiosis', 'plasmodesmata', 'exocytosis'],
        hint1: 'The theory that mitochondria and chloroplasts originated from engulfed prokaryotes.',
        hint2: 'Channels through plant cell walls that allow direct cytoplasmic communication between adjacent cells.',
        hint3: 'The process in which vesicles fuse with the plasma membrane to release their contents outside the cell.',
        explanation: 'Endosymbiotic theory (Lynn Margulis, 1967) explains the origin of mitochondria and chloroplasts. Plasmodesmata are plant-specific cell junctions. In exocytosis, vesicles fuse with the plasma membrane and secrete their contents — the last step of the secretory pathway.'
      }
    },
    {
      id: 'cs7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Cell Structure & Organelles** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher isolates mitochondria from cells and places them in a test tube with the necessary substrates. The mitochondria continue to produce ATP. This observation supports the idea that:',
            options: [
              'Mitochondria can survive alone but are unimportant to the function of cells',
              'ATP can only be produced by mitochondria inside intact living cells',
              'Mitochondria can carry out their own reactions apart from the cell',
              'Mitochondria can make ATP from nothing, without needing any substrates'
            ],
            correctAnswer: 2,
            explanation: 'The ability of isolated mitochondria to function independently supports their semi-autonomous nature — consistent with endosymbiotic theory. They retain the molecular machinery (DNA, ribosomes, enzymes) needed for energy conversion, just as their free-living bacterial ancestors did.'
          },
          {
            question: 'A cube-shaped cell has sides of length 10 μm. If it divides into eight equal cubes (each with sides of 5 μm), how does the TOTAL surface area of the eight small cells compare to the surface area of the original large cell?',
            options: [
              'It is the same',
              'It doubles',
              'It quadruples',
              'It is halved'
            ],
            correctAnswer: 1,
            explanation: 'Original cell: SA = $6(10^{2})$ = 600 $\\mu m^{2}$. Each small cell: SA = $6(5^{2})$ = 150 $\\mu m^{2}$. Total for 8 cells: 8 × 150 = 1,200 $\\mu m^{2}$. That is exactly double (1,200/600 = 2). This is why dividing into smaller cells increases total surface area available for exchange — a key biological advantage.'
          }
        ]
      }
    }
  ]
};
