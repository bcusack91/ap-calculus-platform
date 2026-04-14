export const bioCellCyclePart3Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc3-intro',
      type: 'text' as const,
      content: `
## Mitosis — Dividing the Nucleus

**Part 3 of 7**

Mitosis is the division of the nucleus to produce two **genetically identical** daughter nuclei.  It is a continuous process but is conventionally divided into four (or five) stages: **prophase, prometaphase, metaphase, anaphase, and telophase**.
      `
    },
    {
      id: 'cc3-prophase',
      type: 'text' as const,
      content: `
### Prophase

**Key events:**
- Chromatin condenses into visible **chromosomes** (each consisting of two sister chromatids joined at the centromere)
- Condensation is driven by **condensin** proteins that coil and compact the chromatin
- The **mitotic spindle** begins to form:
  - In animal cells: centrosomes (each with two centrioles) migrate toward opposite poles; asters (radial arrays of microtubules) form around them
  - In plant cells: spindle forms without centrioles (acentrosomal spindle)
- **Nucleolus** disappears (ribosomal RNA synthesis ceases)

### Prometaphase

**Key events:**
- **Nuclear envelope breaks down** (fragments into vesicles)
- Spindle microtubules now access the chromosomes
- **Kinetochores** form at the centromere of each sister chromatid — these are protein complexes that serve as attachment points for spindle microtubules
- **Kinetochore microtubules** from opposite poles attach to the kinetochores of sister chromatids
- Chromosomes are moved by motor proteins along microtubules in a "search and capture" process
      `
    },
    {
      id: 'cc3-meta-ana',
      type: 'text' as const,
      content: `
### Metaphase

**Key events:**
- All chromosomes align at the **metaphase plate** (the equator of the cell, equidistant from both poles)
- Each chromosome is attached to kinetochore microtubules from BOTH poles (bipolar attachment)
- **Spindle Assembly Checkpoint (SAC)** — verifies that every kinetochore is properly attached to spindle microtubules from both poles before allowing anaphase to proceed

> **The Spindle Assembly Checkpoint is critical:** If even one kinetochore is unattached, the checkpoint protein **Mad2** inhibits the **Anaphase-Promoting Complex (APC/C)**, preventing the cell from entering anaphase.  Failure of this checkpoint leads to **aneuploidy** (abnormal chromosome number).

### Anaphase

The shortest phase of mitosis, but the most dramatic:

**Key events:**
- **Cohesin** proteins holding sister chromatids together are cleaved by the enzyme **separase**
- Separase is activated when APC/C degrades **securin** (the inhibitor of separase)
- Sister chromatids separate and move toward opposite poles:
  - **Anaphase A:** Kinetochore microtubules shorten (depolymerize at the kinetochore end), pulling chromatids poleward
  - **Anaphase B:** Polar microtubules elongate, pushing the poles apart; motor proteins (dynein) pull on astral microtubules, moving poles apart
- Once separated, each chromatid is now called an independent **chromosome**
      `
    },
    {
      id: 'cc3-telo',
      type: 'text' as const,
      content: `
### Telophase

**Key events:**
- Chromosomes arrive at opposite poles and begin to **decondense** (uncoil back into chromatin)
- **Nuclear envelope re-forms** around each set of chromosomes (from vesicles and ER membrane)
- **Nucleolus** reappears
- Spindle microtubules depolymerize
- The cell now contains two nuclei, each with a complete set of chromosomes

**Summary of chromosome movement by microtubule type:**

| Microtubule Type | Attachment | Role |
|-----------------|------------|------|
| **Kinetochore microtubules** | Kinetochore to pole | Pull chromatids poleward (anaphase A) |
| **Polar (interpolar) microtubules** | Overlap at cell center | Push poles apart (anaphase B) |
| **Astral microtubules** | Centrosome to cell cortex | Position the spindle; aid pole separation |
      `
    },
    {
      id: 'cc3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Mitosis Stages
      `,
      exercise: {
        questions: [
          {
            question: 'A cell is observed with chromosomes aligned in a single plane at the center of the cell. All kinetochores appear to be attached to spindle fibers. This cell is in:',
            options: [
              'Prophase',
              'Metaphase',
              'Anaphase',
              'Telophase'
            ],
            correctAnswer: 1,
            explanation: 'The hallmark of metaphase is chromosomes aligned at the metaphase plate (cell equator) with bipolar kinetochore attachment. The spindle assembly checkpoint verifies proper attachment before allowing progression to anaphase.'
          },
          {
            question: 'The drug colchicine binds to tubulin and prevents microtubule polymerization. If added to dividing cells, at which stage would cells arrest?',
            options: [
              'G1 phase — cells cannot grow',
              'S phase — DNA replication is blocked',
              'Metaphase — without functional spindle microtubules, kinetochores are unattached, the spindle assembly checkpoint is activated, and the cell arrests',
              'Telophase — nuclear envelope cannot reform'
            ],
            correctAnswer: 2,
            explanation: 'Colchicine prevents spindle formation. Without proper kinetochore-microtubule attachment, the spindle assembly checkpoint (Mad2/APC pathway) is activated and the cell cannot enter anaphase. Cells accumulate in metaphase. This is why colchicine is used to prepare karyotypes.'
          },
          {
            question: 'What triggers the separation of sister chromatids at the onset of anaphase?',
            options: [
              'Condensin cleaves the centromere',
              'The APC/C ubiquitin ligase degrades securin, releasing active separase, which cleaves cohesin proteins holding sister chromatids together',
              'Kinetochore microtubules physically tear the chromatids apart',
              'DNA between the chromatids is enzymatically digested'
            ],
            correctAnswer: 1,
            explanation: 'The Anaphase-Promoting Complex/Cyclosome (APC/C) tags securin for proteasomal degradation. Securin normally inhibits separase. When securin is destroyed, separase is freed to cleave the cohesin molecules at the centromere, allowing sister chromatids to separate.'
          }
        ]
      }
    },
    {
      id: 'cc3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Mitosis
      `,
      exercise: {
        questions: [
          {
            question: 'The protein complex at the centromere where spindle microtubules attach:',
            answer: 'kinetochore',
            acceptableAnswers: ['kinetochore', 'Kinetochore'],
            placeholder: 'e.g. centrosome'
          },
          {
            question: 'The enzyme that cleaves cohesin to separate sister chromatids:',
            answer: 'separase',
            acceptableAnswers: ['separase', 'Separase'],
            placeholder: 'e.g. ligase'
          },
          {
            question: 'The checkpoint that verifies all kinetochores are attached before anaphase:',
            answer: 'spindle assembly checkpoint',
            acceptableAnswers: ['spindle assembly checkpoint', 'SAC', 'Spindle assembly checkpoint', 'spindle checkpoint'],
            placeholder: 'e.g. G2/M checkpoint'
          }
        ]
      }
    },
    {
      id: 'cc3-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Mitosis Stage
      `,
      exercise: {
        questions: [
          {
            question: 'Chromatin condenses; spindle begins to form:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Prophase'
          },
          {
            question: 'Nuclear envelope breaks down; kinetochores attach to microtubules:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Prometaphase'
          },
          {
            question: 'Sister chromatids separate and move to opposite poles:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'Nuclear envelopes re-form; chromosomes decondense:',
            options: ['Prophase', 'Prometaphase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Telophase'
          }
        ]
      }
    },
    {
      id: 'cc3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Mitosis
      `,
      exercise: {
        questions: [
          {
            question: 'A human cell (2n = 46) is in anaphase of mitosis. How many centromeres are moving toward each pole?',
            options: [
              '23',
              '46',
              '92',
              '184'
            ],
            correctAnswer: 1,
            explanation: 'In anaphase, the sister chromatids of all 46 chromosomes separate. Each chromatid (now an independent chromosome with its own centromere) moves to one pole. So 46 centromeres move toward each pole, for a total of 92 in the cell.'
          }
        ]
      }
    }
  ]
};