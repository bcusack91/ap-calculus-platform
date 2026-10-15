export const bioCellCyclePart3Data = {
  topicSlug: 'cell-cycle-mitosis',
  sections: [
    {
      id: 'cc3-intro',
      type: 'text' as const,
      content: `
## Mitosis — Dividing the Nucleus

**Part 3 of 7**

Mitosis is the division of the nucleus to produce two **genetically identical** daughter nuclei.  It is a continuous process, but it is conventionally divided into four stages: **prophase, metaphase, anaphase, and telophase**. (Some textbooks call late prophase "prometaphase"; the AP framework uses the four-stage model.)
      `
    },
    {
      id: 'cc3-prophase',
      type: 'text' as const,
      content: `
### Prophase

**Key events:**
- Chromatin condenses into visible **chromosomes** (each consisting of two sister chromatids joined at the centromere)
- The **mitotic spindle** begins to form, and the **centrosomes** move toward opposite poles of the cell (plant cells build a spindle without centrosomes)
- **Nucleolus** disappears

**Late prophase:**
- The **nuclear envelope breaks down**, so spindle microtubules can reach the chromosomes
- **Kinetochores**, protein structures at the centromere of each sister chromatid, attach to spindle microtubules
- Sister chromatids become attached to microtubules from **opposite** poles
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
- **Metaphase checkpoint** (also called the spindle assembly checkpoint) — verifies that every chromosome is attached to spindle microtubules from both poles before allowing anaphase to proceed

> **Why this checkpoint matters:** if anaphase began while a chromosome was still unattached, both of its chromatids could be pulled to the same pole. One daughter cell would get an extra chromosome and the other would be missing one, a condition called **aneuploidy** (abnormal chromosome number). The checkpoint therefore holds the cell in metaphase until every chromosome is attached.

### Anaphase

The shortest phase of mitosis, but the most dramatic:

**Key events:**
- The proteins holding sister chromatids together at the centromere are broken down
- Paired sister chromatids separate as spindle fibers pull them toward opposite poles
- At the same time, the poles themselves move farther apart, elongating the cell
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

**Summary of the four stages (as the AP framework describes them):**

| Stage | What to look for |
|-------|------------------|
| **Prophase** | Sister chromatids condense; spindle forms; centrosomes move to opposite poles |
| **Metaphase** | Spindle fibers align the chromosomes along the cell's equator |
| **Anaphase** | Sister chromatids separate and are pulled toward opposite poles |
| **Telophase** | Spindle breaks down; a new nuclear envelope forms around each set; cytokinesis follows |
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
            question: 'A drug prevents microtubules from assembling. If it is added to dividing cells, at which stage would the cells arrest?',
            options: [
              'G1 — cells cannot grow without an intact microtubule cytoskeleton',
              'S phase — replication forks need microtubules to move along the DNA',
              'Metaphase — no spindle forms, so the checkpoint blocks anaphase',
              'Telophase — the nuclear envelope cannot re-form around the chromosomes'
            ],
            correctAnswer: 2,
            explanation: 'Without microtubules no spindle can form, so the chromosomes never become attached to both poles. The metaphase checkpoint then blocks entry into anaphase, and cells accumulate in metaphase with condensed chromosomes, which is why such drugs are used when preparing karyotypes.'
          },
          {
            question: 'Suppose the metaphase checkpoint fails, and anaphase begins while one chromosome is attached to spindle fibers from only one pole. What is the most likely result?',
            options: [
              'Both chromatids of that chromosome could end up in one daughter cell',
              'The cell would return to S phase and copy that chromosome once more',
              'The unattached chromosome would be destroyed before telophase began',
              'Both daughter cells would receive an extra copy of every chromosome'
            ],
            correctAnswer: 0,
            explanation: 'A chromosome attached to only one pole can be pulled to that pole whole, so one daughter cell gets an extra copy and the other is missing it (aneuploidy). Cells do not return to S phase from anaphase, and the error affects one chromosome, not all of them.'
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
            question: 'The plane at the cell\'s equator where chromosomes line up during metaphase:',
            answer: 'metaphase plate',
            acceptableAnswers: ['metaphase plate', 'Metaphase plate', 'equatorial plate', 'equator'],
            placeholder: 'e.g. cell plate'
          },
          {
            question: 'The checkpoint that verifies all chromosomes are attached to the spindle before anaphase:',
            answer: 'metaphase checkpoint',
            acceptableAnswers: ['metaphase checkpoint', 'M checkpoint', 'M phase checkpoint', 'spindle assembly checkpoint', 'spindle checkpoint', 'SAC'],
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
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Prophase'
          },
          {
            question: 'Spindle fibers align the chromosomes along the cell\'s equator:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Metaphase'
          },
          {
            question: 'Sister chromatids separate and move to opposite poles:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 'Anaphase'
          },
          {
            question: 'Nuclear envelopes re-form; chromosomes decondense:',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
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