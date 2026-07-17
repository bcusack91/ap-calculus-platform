export const bioCellStructurePart3Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cs3-intro',
      type: 'text' as const,
      content: `# 🧫 Membrane-Bound Organelles

**Part 3 of 7 — The Nucleus, Ribosomes, and Endoplasmic Reticulum**

---

> 🔑 **Big idea:** Eukaryotic cells contain specialized membrane-bound compartments that allow different chemical processes to occur simultaneously. This part covers the organelles involved in the flow of genetic information and protein production.

---

### What You'll Master in Part 3
- The structure and function of the nucleus
- Free vs. bound ribosomes
- Rough ER and smooth ER — structure and function
- The connection between these organelles in protein production`
    },
    {
      id: 'cs3-nucleus',
      type: 'text' as const,
      content: `
## 🔵 The Nucleus — Command Center of the Cell

The nucleus is the largest organelle in most eukaryotic cells (typically 5–10 μm in diameter).

### Structure

| Component | Function |
|-----------|----------|
| **Nuclear envelope** | Double membrane with nuclear pores; continuous with the ER |
| **Nuclear pores** | Regulate transport of mRNA, ribosomal subunits, and proteins between nucleus and cytoplasm |
| **Chromatin** | DNA + histone proteins; loosely packed during interphase |
| **Chromosomes** | Condensed chromatin; visible during cell division |
| **Nucleolus** | Site of ribosomal RNA (rRNA) synthesis and ribosome assembly |

---

### Key Functions

1. **Stores genetic information** — DNA contains all instructions for building proteins
2. **Controls gene expression** — Transcription factors regulate which genes are active
3. **Produces ribosomal components** — The nucleolus assembles ribosomal subunits
4. **Separates transcription from translation** — mRNA must be processed and exported before translation

> 🔑 **AP Exam Connection:** In eukaryotes, transcription occurs in the nucleus and translation occurs in the cytoplasm. This spatial separation allows for **RNA processing** (5' cap, poly-A tail, splicing) — a key difference from prokaryotes where transcription and translation are coupled.

---

### Nuclear Pore Complex

Nuclear pores are not simple holes — they are **selective gates**:
- Small molecules (water, ions) pass freely
- Large molecules require **nuclear localization signals** (NLS) for import
- mRNA is exported with the help of export proteins
- Each nucleus has ~3,000–4,000 pores
      `
    },
    {
      id: 'cs3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Nucleus Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The nucleolus is the site of:',
            options: [
              'DNA replication',
              'mRNA splicing',
              'Ribosomal RNA synthesis and ribosome subunit assembly',
              'Protein folding and modification'
            ],
            correctAnswer: 2,
            explanation: 'The nucleolus is where rRNA genes are transcribed and ribosomal subunits are partially assembled. The subunits are then exported through nuclear pores to the cytoplasm, where they join during translation.'
          },
          {
            question: 'Why is the separation of transcription and translation in eukaryotes biologically significant?',
            options: [
              'It allows cells to make proteins faster',
              'It enables RNA processing (capping, splicing, polyadenylation) before translation',
              'It prevents ribosomes from entering the nucleus',
              'It eliminates the need for mRNA'
            ],
            correctAnswer: 1,
            explanation: 'The nuclear envelope creates a spatial separation that allows pre-mRNA to be processed (5-prime cap added, introns spliced out, poly-A tail added) before it reaches ribosomes. This is a major regulatory opportunity that prokaryotes lack.'
          }
        ]
      }
    },
    {
      id: 'cs3-ribosomes-er',
      type: 'text' as const,
      content: `
## 🔩 Ribosomes — The Protein Factories

Ribosomes are **not membrane-bound** — they are the site of translation (mRNA → protein).

### Two Locations

| Type | Location | What It Makes |
|------|----------|--------------|
| **Free ribosomes** | Floating in cytoplasm | Proteins used within the cell (e.g., cytoplasmic enzymes, cytoskeletal proteins) |
| **Bound ribosomes** | Attached to rough ER | Proteins destined for secretion, membranes, or organelles |

> ⚠️ **Common misconception:** Free and bound ribosomes are structurally identical. A ribosome becomes "bound" when it starts translating a protein with a **signal peptide** that directs it to the ER.

---

## 📜 Endoplasmic Reticulum (ER)

The ER is the largest membrane system in the cell — a network of interconnected tubules and flattened sacs (cisternae) continuous with the nuclear envelope.

### Rough ER (RER)

| Feature | Detail |
|---------|--------|
| **Appearance** | Studded with ribosomes (hence "rough") |
| **Function** | Synthesizes proteins for secretion, membrane insertion, or organelle targeting |
| **Protein folding** | Chaperone proteins ensure correct 3D structure |
| **Quality control** | Misfolded proteins are tagged for degradation |
| **Rich in** | Secretory cells (e.g., pancreatic cells making insulin, plasma cells making antibodies) |

### Smooth ER (SER)

| Feature | Detail |
|---------|--------|
| **Appearance** | No ribosomes attached; tubular network |
| **Functions** | Lipid synthesis, steroid hormone production, detoxification, calcium storage |
| **Rich in** | Liver cells (detox), ovary/testes cells (steroids), muscle cells ($Ca^{2+}$ as sarcoplasmic reticulum) |

> 🔑 **Key connection:** Rough ER → makes proteins. Smooth ER → makes lipids and detoxifies. Both contribute to building new cell membranes.
      `
    },
    {
      id: 'cs3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Ribosomes & ER Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cell is producing large quantities of a secreted protein hormone. Which organelle would you expect to be most abundant in this cell?',
            options: [
              'Smooth ER',
              'Rough ER',
              'Lysosomes',
              'Peroxisomes'
            ],
            correctAnswer: 1,
            explanation: 'Secreted proteins are synthesized on bound ribosomes at the rough ER. Cells that secrete large amounts of protein (like pancreatic beta cells secreting insulin) have extensive rough ER.'
          },
          {
            question: 'A liver cell exposed to high levels of alcohol increases its smooth ER surface area. This adaptation is most directly related to the role of smooth ER in:',
            options: [
              'Protein synthesis',
              'DNA replication',
              'Detoxification',
              'Ribosome assembly'
            ],
            correctAnswer: 2,
            explanation: 'The smooth ER contains enzymes that detoxify drugs and alcohol. Chronic alcohol exposure triggers proliferation of smooth ER in liver cells, increasing detoxification capacity. This is why chronic drinkers develop alcohol tolerance.'
          }
        ]
      }
    },
    {
      id: 'cs3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Organelle Function Matching** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A protein with a signal peptide is directed to the',
            options: ['Free ribosomes', 'Rough ER', 'Smooth ER', 'Nucleolus']
          },
          {
            label: 'Steroid hormones like estrogen are synthesized in the',
            options: ['Rough ER', 'Smooth ER', 'Golgi apparatus', 'Nucleus']
          },
          {
            label: 'The nuclear envelope is continuous with the',
            options: ['Plasma membrane', 'Endoplasmic reticulum', 'Golgi apparatus', 'Mitochondrial membrane']
          },
          {
            label: 'Ribosomal subunits are assembled in the',
            options: ['Cytoplasm', 'Rough ER', 'Nucleolus', 'Golgi apparatus']
          }
        ],
        correctAnswers: ['Rough ER', 'Smooth ER', 'Endoplasmic reticulum', 'Nucleolus'],
        hint1: 'Signal peptides direct nascent proteins to the ER membrane.',
        hint2: 'Steroids are lipids — lipid synthesis occurs in the smooth ER.',
        hint3: 'The outer membrane of the nuclear envelope is physically continuous with the rough ER.',
        explanation: 'Signal peptides target proteins to the rough ER for secretory pathway processing. Smooth ER synthesizes lipids including steroid hormones. The nuclear envelope and ER form a continuous membrane system. The nucleolus is where rRNA is made and ribosomal subunits are partially assembled.'
      }
    },
    {
      id: 'cs3-input',
      type: 'input-boxes' as const,
      content: `
**Key Terms** ✏️

Enter the correct term for each description.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['signal peptide', 'nucleolus', 'rough ER'],
        hint1: 'A short amino acid sequence at the start of a protein that directs it to the ER.',
        hint2: 'The dense structure within the nucleus where ribosomal RNA is produced.',
        hint3: 'The organelle studded with ribosomes that synthesizes secretory proteins.',
        explanation: 'A signal peptide is a short N-terminal sequence that targets a protein to the rough ER membrane. The nucleolus produces rRNA and assembles ribosomal subunits. The rough ER is named for its ribosome-studded appearance and is the primary site for synthesizing proteins destined for secretion or membrane insertion.'
      }
    },
    {
      id: 'cs3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Membrane-Bound Organelles** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mutation removes the signal peptide from a secretory protein. What is the most likely consequence?',
            options: [
              'The protein will be synthesized in the nucleus',
              'The protein will be translated on free ribosomes and remain in the cytoplasm',
              'The protein will be sent directly to the Golgi',
              'The cell will not be able to make the protein at all'
            ],
            correctAnswer: 1,
            explanation: 'Without a signal peptide, the ribosome has no signal to dock at the rough ER. Translation will complete on a free ribosome, and the protein will remain in the cytoplasm instead of entering the secretory pathway.'
          },
          {
            question: 'Which observation would provide evidence that a cell is specialized for secretion?',
            options: [
              'Large central vacuole and many chloroplasts',
              'Extensive rough ER and prominent Golgi apparatus',
              'Many smooth ER tubules and few ribosomes',
              'Multiple nuclei and thick cell wall'
            ],
            correctAnswer: 1,
            explanation: 'Secretory cells (e.g., pancreatic acinar cells, plasma cells) have extensive rough ER for protein synthesis and a prominent Golgi for protein modification, sorting, and packaging into secretory vesicles.'
          }
        ]
      }
    }
  ]
};
