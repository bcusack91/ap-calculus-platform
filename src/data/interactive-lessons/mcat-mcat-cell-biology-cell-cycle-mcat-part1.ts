export const mcatCellCyclePart1Data = {
  topicSlug: 'mcat-cell-biology-cell-cycle-mcat',
  sections: [
    {
      id: 'cc1-intro',
      type: 'text' as const,
      content: `# The Cell Cycle for the MCAT

**Part 1 of 4 — Phases, Mitosis & Measuring the Cycle**

### The Four Phases (Plus One Exit)

| Phase | What happens | DNA content (diploid cell) |
|-------|--------------|---------------------------|
| **G$_1$** | Growth, organelle duplication, decision to divide | 2n chromosomes, 2C DNA |
| **S** | DNA replication; centrosome duplicates | 2n chromosomes, DNA rising 2C → 4C |
| **G$_2$** | Growth, replication error-checking, mitotic prep | 2n chromosomes, 4C DNA |
| **M** | Mitosis + cytokinesis | 4C split into two 2C daughters |
| **G$_0$** | Quiescent exit from the cycle | 2C, stable |

- **Interphase = G$_1$ + S + G$_2$** — about 90% of the cycle; chromosomes are decondensed chromatin, invisible as discrete bodies
- After S phase a chromosome consists of **two sister chromatids** joined at the centromere by **cohesin** — chromosome NUMBER (n) has not changed, DNA content (C) has doubled
- **G$_0$** cells (most neurons, cardiac muscle) are metabolically active but non-dividing; hepatocytes can re-enter the cycle when stimulated; permanent G$_0$ tissue heals by scarring, not regeneration

### Mitosis — PMAT in Mechanistic Terms

| Stage | Key events |
|-------|-----------|
| **Prophase** | Chromatin condenses (condensin); mitotic spindle begins forming between separating centrosomes |
| **Prometaphase** | Nuclear envelope breaks down; kinetochores (protein plates on centromeres) capture spindle microtubules |
| **Metaphase** | Chromosomes align at the metaphase plate under balanced tension |
| **Anaphase** | Cohesin is cleaved → sister chromatids (now called chromosomes) move to opposite poles; poles also push apart |
| **Telophase** | Nuclear envelopes re-form; chromosomes decondense |
| **Cytokinesis** | Actin-myosin **contractile ring** pinches the cell in two (animal cells); overlaps late mitosis |

> Anaphase is the moment ploidy bookkeeping changes: 46 chromosomes of 2 chromatids become (transiently) 92 chromosomes of 1 chromatid, then 46 per daughter.

### Measuring the Cycle — Flow Cytometry

Stain DNA with a quantitative fluorescent dye and count cells by DNA content:

- **2C peak** = G$_1$ (and G$_0$) cells
- **4C peak** = G$_2$ and M cells
- **Between the peaks** = S phase (actively replicating)

A drug that arrests cells in mitosis grows the 4C peak; one that blocks replication initiation grows the 2C peak; one that stalls forks piles cells between the peaks. **BrdU/EdU pulse labeling** marks only cells synthesizing DNA during the pulse — the direct S-phase census.`
    },
    {
      id: 'cc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Phases & Mitosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A human somatic cell in G$_2$ contains how many chromosomes and how much DNA relative to a G$_1$ cell?`,
            options: [`92 chromosomes, since each chromatid is counted separately`, `46 chromosomes and exactly the same DNA content as G$_1$`, `46 chromosomes, each with two chromatids, and twice the DNA`, `23 chromosomes, one set having already segregated`],
            correctAnswer: 2,
            explanation: `S phase duplicates DNA but not chromosome number: each of the 46 chromosomes now consists of two cohesin-joined sister chromatids, so DNA content is 4C while the count remains 46. Chromatids are not counted as separate chromosomes until cohesin cleavage at anaphase separates them. Confusing n (chromosome sets) with C (DNA mass) is the most common cell-cycle error.`
          },
          {
            question: `Flow cytometry of a tumor sample treated with a new drug shows a dramatic increase in cells with exactly 4C DNA content and condensed chromosomes. The drug most likely arrests cells in:`,
            options: [`Mitosis, with replication already complete`, `Mid-S phase, partway through DNA replication`, `G$_1$, before replication has begun`, `G$_0$, quiescent and outside the cycle`],
            correctAnswer: 0,
            explanation: `4C DNA means replication is complete (G$_2$ or M); condensed chromosomes distinguish M from G$_2$, since chromatin condenses only in mitosis. Spindle poisons such as vinca alkaloids and taxanes produce exactly this profile by triggering the spindle checkpoint (Part 2). A G$_1$ block would grow the 2C peak; an S block accumulates intermediate DNA contents.`
          },
          {
            question: `Cardiac muscle damaged by infarction is replaced by scar tissue rather than new cardiomyocytes because adult cardiomyocytes:`,
            options: [`They are permanently arrested in metaphase instead`, `They lack functional DNA polymerase genes altogether`, `They are haploid and cannot undergo mitosis`, `They reside in G$_0$ and cannot re-enter the cycle`],
            correctAnswer: 3,
            explanation: `Terminally differentiated cardiomyocytes and most neurons exit permanently to G$_0$: their cycle machinery is transcriptionally shut down, not mutated away. Fibroblasts, which CAN divide, fill the wound with collagenous scar instead. Contrast with liver (facultative divider — hepatocytes re-enter the cycle after resection) and gut/skin epithelium (continuously cycling stem-cell compartments).`
          }
        ]
      }
    },
    {
      id: 'cc1-deep',
      type: 'text' as const,
      content: `### Checkpoints — Quality Control Gates (Preview of Part 2)

| Checkpoint | Question asked | Blocks what |
|------------|----------------|-------------|
| **G$_1$/S (restriction point)** | Growth signals present? Cell big enough? DNA intact? | Entry into S — past this point the cell is committed to divide even without growth factors |
| **G$_2$/M** | Replication complete? DNA damage repaired? | Entry into mitosis |
| **Spindle (M) checkpoint** | Every kinetochore attached under tension? | Anaphase onset |

### The Mitotic Spindle — Three Microtubule Jobs

- **Kinetochore microtubules**: attach to chromosomes and pull chromatids poleward (anaphase A)
- **Polar (interpolar) microtubules**: overlap at the midzone; motor proteins slide them apart, pushing poles away (anaphase B)
- **Astral microtubules**: anchor poles to the cell cortex and position the spindle — which determines the cleavage plane

Microtubule drugs both stop mitosis but oppositely:
- **Vinca alkaloids / colchicine**: prevent polymerization → no spindle
- **Taxanes (paclitaxel)**: hyper-stabilize microtubules → spindle cannot remodel

Both leave kinetochores without proper tension → spindle checkpoint arrest → often apoptosis. Rapidly dividing normal tissues (marrow, gut, hair follicles) share the toxicity.

### Karyokinesis Without Cytokinesis

- Cytokinesis is a separate, actin-based process; blocking it (or in normal liver/heart development) yields **binucleate or polyploid cells**
- Megakaryocytes deliberately replicate DNA without dividing (endomitosis) → giant polyploid platelet factories
- In plants, a cell plate (vesicle-built new wall) replaces the contractile ring — a favorite comparison question`
    },
    {
      id: 'cc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Spindle & Cycle Measurement** 🎯`,
      exercise: {
        questions: [
          {
            question: `Colchicine and paclitaxel arrest cells in mitosis through opposite effects on microtubules. Their common downstream consequence is:`,
            options: [`DNA replication forks are directly inhibited`, `The spindle checkpoint is never satisfied`, `Cohesin is cleaved before metaphase alignment`, `The nuclear envelope breaks down prematurely`],
            correctAnswer: 1,
            explanation: `A functional spindle must be dynamic: colchicine prevents microtubule assembly, while paclitaxel freezes microtubules so they cannot search, release, and re-attach. Either way kinetochores are not all attached under bipolar tension, the spindle checkpoint stays on, and anaphase never fires. Two opposite biochemical actions converging on one checkpoint is classic MCAT reasoning.`
          },
          {
            question: `Cells are pulsed with EdU (a thymidine analog) for 30 minutes, and 40% of cells become labeled. The best interpretation is that:`,
            options: [`About 40% of the cells are quiescent, resting in G$_0$`, `The complete cell cycle lasts roughly 40 minutes total`, `About 40% of the population was in S phase during the pulse`, `About 40% of the cells were in mitosis during the pulse`],
            correctAnswer: 2,
            explanation: `A nucleotide analog is incorporated only by cells actively replicating DNA, so the labeled fraction estimates the S-phase fraction (and, since time-in-phase is proportional to fraction-of-cells in an asynchronous steady-state culture, S occupies ~40% of the cycle length). Mitotic cells would be identified instead by condensed chromosomes or phospho-histone H3 staining.`
          }
        ]
      }
    },
    {
      id: 'cc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Cycle order: G$_1$ → S → G$_2$ → M; interphase is ~90% of the time; G$_0$ = quiescent exit (neurons/cardiac permanent; hepatocytes facultative)
- Track n vs. C separately: S phase doubles DNA (2C → 4C) but not chromosome number; chromatids count as chromosomes only after anaphase separation
- Mitosis: condense (prophase) → envelope down/kinetochores capture (prometaphase) → align (metaphase) → cohesin cleaved, chromatids part (anaphase) → envelopes re-form (telophase) → actin ring pinches (cytokinesis)
- Three checkpoints: restriction point (G$_1$/S, growth-factor dependent), G$_2$/M (DNA integrity), spindle checkpoint (attachment/tension)
- Flow cytometry reads phase by DNA content (2C vs. 4C vs. between); EdU/BrdU pulse marks S phase directly
- Spindle poisons work oppositely (destabilize vs. hyper-stabilize) but both trigger checkpoint arrest — hence shared chemotherapy logic and toxicity
- Karyokinesis and cytokinesis are separable: endomitosis (megakaryocytes) and binucleate hepatocytes are normal outcomes`
    }
  ]
};
