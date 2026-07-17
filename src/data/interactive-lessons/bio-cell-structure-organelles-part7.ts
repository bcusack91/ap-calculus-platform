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
              'Proteins are synthesized in the Golgi and secreted via the ER',
              'The secretory pathway: rough ER → Golgi → secretory vesicles → extracellular space',
              'Radioactive amino acids are toxic and are expelled from the cell',
              'Proteins are synthesized outside the cell and imported via endocytosis'
            ],
            correctAnswer: 1,
            explanation: 'This is George Palade\'s classic pulse-chase experiment (Nobel Prize, 1974). The temporal sequence of radioactivity precisely maps the secretory pathway: rough ER (synthesis) → Golgi (modification/sorting) → secretory vesicles → exocytosis.'
          },
          {
            question: 'Cyanide inhibits cytochrome c oxidase, a protein in the mitochondrial electron transport chain. A cell treated with cyanide would:',
            options: [
              'Increase its rate of aerobic respiration to compensate',
              'Continue to produce ATP at the same rate via glycolysis',
              'Dramatically reduce ATP production because oxidative phosphorylation is blocked',
              'Switch to photosynthesis for energy production'
            ],
            correctAnswer: 2,
            explanation: 'Cyanide blocks Complex IV of the ETC, halting electron flow and preventing the $H^{+}$ gradient from being maintained. Without the gradient, ATP synthase cannot produce ATP via oxidative phosphorylation. Glycolysis can still produce a small amount of ATP (2 per glucose), but this is far less than the ~30-34 from oxidative phosphorylation.'
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
            explanation: 'Pancreatic acinar cells secrete digestive enzymes (proteins), requiring extensive rough ER for protein synthesis. Smooth ER is most abundant in liver cells (detox) and steroid-producing cells. Chloroplasts are in photosynthetic cells (leaves, not roots). Central vacuoles are in plant cells, not animal cells.'
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
              'Viruses are actually composed of very small cells',
              'Viruses are not considered living organisms and therefore do not contradict cell theory for living things',
              'Cell theory has been disproven and is no longer accepted',
              'Viruses contain their own ribosomes and can reproduce independently'
            ],
            correctAnswer: 1,
            explanation: 'Cell theory applies to living organisms. Viruses lack key characteristics of life — they have no metabolism, cannot reproduce independently (they hijack host cell machinery), and are not made of cells. Most biologists classify viruses as "non-living" or "obligate intracellular parasites," so they exist outside the scope of cell theory.'
          },
          {
            question: 'An antibiotic targets the 30S ribosomal subunit. This drug would inhibit protein synthesis in:',
            options: [
              'Eukaryotic cells only (which have 30S subunits in their 80S ribosomes)',
              'Bacteria only (which have 30S subunits in their 70S ribosomes)',
              'Both bacteria and human mitochondria',
              'Neither bacteria nor eukaryotic cells'
            ],
            correctAnswer: 2,
            explanation: 'Both bacteria and mitochondria have 70S ribosomes (composed of 30S + 50S subunits). An antibiotic targeting the 30S subunit would inhibit protein synthesis in both. This explains why some antibiotics can cause mitochondrial side effects — a direct consequence of endosymbiotic origin.'
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
            label: 'Tay-Sachs disease results from a deficiency of enzymes in the',
            options: ['Mitochondria', 'Lysosomes', 'Peroxisomes', 'Golgi apparatus']
          },
          {
            label: 'The 9+2 arrangement of microtubules is found in',
            options: ['Centrioles', 'Cilia and flagella', 'The mitotic spindle', 'Intermediate filaments']
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
        correctAnswers: ['Lysosomes', 'Cilia and flagella', 'Protein secretion', 'Ribosomes'],
        hint1: 'Tay-Sachs is a lysosomal storage disease — lipids accumulate because the degrading enzyme is missing.',
        hint2: 'The 9+2 axoneme arrangement (9 outer doublets + 2 central microtubules) is the hallmark of motile cilia and flagella.',
        hint3: 'Energy (mitochondria) + protein synthesis (rough ER) = secretory cell.',
        explanation: 'Tay-Sachs is caused by missing hexosaminidase A in lysosomes. The 9+2 microtubule pattern is unique to motile cilia and flagella (centrioles have 9×3). Abundant mitochondria + rough ER indicates a protein-secreting cell. Ribosomes are universal to ALL cells.'
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
        correctAnswers: ['endosymbiosis', 'plasmodesmata', 'peroxisome'],
        hint1: 'The theory that mitochondria and chloroplasts originated from engulfed prokaryotes.',
        hint2: 'Channels through plant cell walls that allow direct cytoplasmic communication between adjacent cells.',
        hint3: 'An organelle that breaks down fatty acids and detoxifies hydrogen peroxide using catalase.',
        explanation: 'Endosymbiotic theory (Lynn Margulis, 1967) explains the origin of mitochondria and chloroplasts. Plasmodesmata are plant-specific cell junctions. Peroxisomes are single-membrane organelles that oxidize fatty acids and use catalase to convert $H_{2}O_{2}$ to water.'
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
              'Mitochondria are not important for cell function',
              'ATP can only be produced inside living cells',
              'Mitochondria are semi-autonomous organelles capable of independent function',
              'Mitochondria do not need substrates to make ATP'
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
