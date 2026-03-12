export const mcatCellBioPart3Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb3-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 3 of 7 — Cell Cycle & Mitosis**

### The Cell Cycle

| Phase | Events | Duration |
|-------|--------|----------|
| G$_1$ | Cell growth, organelle duplication, gene expression | Variable (longest) |
| S | DNA replication (each chromosome → 2 sister chromatids) | ~8 hours |
| G$_2$ | Final growth, preparation for mitosis, error checking | ~4 hours |
| M | Mitosis + cytokinesis | ~1 hour |
| G$_0$ | Quiescent state (non-dividing) | Indefinite |

**Interphase** = G$_1$ + S + G$_2$ (where the cell spends ~95% of its time)

### DNA Content Through the Cell Cycle

| Phase | Chromosomes | DNA Content | Chromatids |
|-------|-------------|-------------|------------|
| G$_1$ | 2n (46) | 2C | 46 |
| After S | 2n (46) | 4C | 92 (sister chromatids joined) |
| After mitosis | 2n (46) | 2C | 46 |

**Key insight**: After S phase, the chromosome number does NOT double — sisters are still joined at the centromere. The DNA content doubles (2C → 4C) but chromosome count stays at 2n until anaphase of meiosis I.

### Mitosis Stages (PMAT)

1. **Prophase**: Chromatin condenses → chromosomes visible. Nuclear envelope breaks down. Centrosomes migrate to poles, spindle begins forming.
2. **Prometaphase**: Kinetochore microtubules attach to centromeres. Chromosomes move to center.
3. **Metaphase**: Chromosomes align at metaphase plate. Spindle assembly checkpoint ensures all kinetochores are attached.
4. **Anaphase**: Cohesin proteins cleaved → sister chromatids separate and are pulled to opposite poles by shortening kinetochore microtubules.
5. **Telophase**: Nuclear envelopes reform around each chromosome set. Chromosomes decondense. Cytokinesis begins.

### Cytokinesis

- **Animal cells**: Cleavage furrow (contractile ring of actin and myosin pinches the cell)
- **Plant cells**: Cell plate forms from Golgi-derived vesicles (no cleavage furrow — rigid cell wall)

### Cell Cycle Regulation — Cyclins and CDKs

| Regulatory Pair | Checkpoint | Function |
|----------------|------------|----------|
| Cyclin D + CDK4/6 | G$_1$ | Respond to growth factor signals |
| Cyclin E + CDK2 | G$_1$/S transition | Commit to DNA replication |
| Cyclin A + CDK2 | S phase | Drive replication |
| Cyclin B + CDK1 (MPF) | G$_2$/M transition | Trigger entry into mitosis |

- **CDKs** (cyclin-dependent kinases) are always present but inactive without their cyclin partner
- CDK inhibitors (p21, p27) act as brakes — upregulated by p53

### Cell Cycle Checkpoints

| Checkpoint | Location | Checks for |
|-----------|----------|-----------|
| G$_1$/S (Restriction Point) | End of G$_1$ | DNA damage, cell size, growth signals, nutrients |
| G$_2$/M | End of G$_2$ | Complete DNA replication, no damage |
| Spindle Assembly | During M | All chromosomes properly attached to spindle |`
    },
    {
      id: 'cb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Cycle & Mitosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell has 46 chromosomes in G$_1$. After S phase but before mitosis, it has:`,
            options: [`46 chromosomes, each with 2 sister chromatids (92 chromatids, 4C DNA content)`, `92 chromosomes and 4C DNA content`, `23 chromosomes with 2C DNA content`, `46 chromosomes with 2C DNA content`],
            correctAnswer: 0,
            explanation: `DNA replicates in S phase, doubling DNA content (2C → 4C). However, sister chromatids are joined at the centromere, so chromosome count stays at 46. Each chromosome now consists of 2 identical sister chromatids = 92 total chromatids. They only become separate chromosomes when the centromere splits in anaphase.`
          },
          {
            question: `Loss of p53 function would most directly affect:`,
            options: [`The G$_1$/S checkpoint — damaged DNA would not trigger cell cycle arrest or apoptosis`, `Chromosome condensation during prophase`, `Cytokinesis and cleavage furrow formation`, `Spindle fiber attachment to kinetochores`],
            correctAnswer: 0,
            explanation: `p53 is the "guardian of the genome." When DNA damage is detected, p53 activates p21 (a CDK inhibitor) to arrest the cell at G$_1$/S. p53 can also trigger apoptosis if damage is irreparable. Loss of p53 → cells with damaged DNA continue dividing → accumulate mutations → cancer.`
          },
          {
            question: `Maturation Promoting Factor (MPF) consists of:`,
            options: [`Cyclin B + CDK1 — it triggers entry into mitosis at the G$_2$/M checkpoint`, `Cyclin D + CDK4 — it responds to growth factors`, `p53 + p21 — they arrest the cell cycle`, `Cohesin + condensin — they organize chromosomes`],
            correctAnswer: 0,
            explanation: `MPF = Cyclin B + CDK1. As cyclin B accumulates during G$_2$, it activates CDK1, which phosphorylates proteins needed for mitotic entry: nuclear lamins (envelope breakdown), condensins (chromosome condensation), and histones. MPF activity peaks at metaphase and drops sharply when cyclin B is degraded by the APC/C complex.`
          }
        ]
      }
    },
    {
      id: 'cb3-deep',
      type: 'text' as const,
      content: `### Cancer Biology — Oncogenes vs. Tumor Suppressors

This is one of the most tested MCAT topics in cell biology. Understand the analogy:

- **Proto-oncogenes** → mutated → **Oncogenes**: "Gas pedal stuck ON"
  - Gain-of-function mutation (only need ONE allele mutated = dominant)
  - Examples: Ras (GTPase stuck in active state), Myc (transcription factor overexpressed), HER2 (receptor always active)
  
- **Tumor suppressors**: "Brakes removed"
  - Loss-of-function mutation (need BOTH alleles lost = recessive at cellular level)
  - **Two-hit hypothesis** (Knudson): both copies must be inactivated
  - Examples: p53 (G$_1$/S checkpoint), Rb (retinoblastoma protein binds E2F), APC (colon cancer), BRCA1/2 (DNA repair)

### Rb Pathway — How It Works

1. Rb normally binds and inhibits E2F (a transcription factor for S-phase genes)
2. Growth factor signals → Cyclin D/CDK4 phosphorylates Rb → releases E2F
3. Free E2F activates genes needed for DNA replication
4. If Rb is mutated: E2F is always free → uncontrolled entry into S phase

### The APC/C (Anaphase-Promoting Complex)

- Ubiquitin ligase activated at the metaphase-to-anaphase transition
- Targets securin for degradation → separase released → cleaves cohesin → sister chromatids separate
- Also targets cyclin B for degradation → MPF inactivated → cell exits mitosis`
    },
    {
      id: 'cb3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cancer & Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutation in the Ras gene that prevents GTP hydrolysis would:`,
            options: [`Keep Ras permanently active, continuously stimulating cell division (oncogene)`, `Permanently inactivate Ras`, `Have no effect because Ras is a tumor suppressor`, `Block DNA replication at the S phase`],
            correctAnswer: 0,
            explanation: `Ras is a G-protein that cycles between active (GTP-bound) and inactive (GDP-bound) states. If it cannot hydrolyze GTP, it stays permanently active → continuous growth signaling → uncontrolled cell division. This is a gain-of-function mutation making Ras an oncogene. Ras mutations are found in ~30% of all human cancers.`
          },
          {
            question: `According to the two-hit hypothesis, tumor suppressor genes require:`,
            options: [`Both alleles to be inactivated before tumor suppression is lost`, `Only one allele to be mutated (dominant mutation)`, `Amplification of the gene`, `A point mutation in the promoter region only`],
            correctAnswer: 0,
            explanation: `Knudson's two-hit hypothesis: one functional copy of a tumor suppressor is sufficient to prevent cancer (haplosufficient). Both copies must be lost — by mutation, deletion, or epigenetic silencing. In hereditary cancers (e.g., retinoblastoma), one hit is inherited and only one somatic mutation is needed → earlier onset.`
          }
        ]
      }
    },
    {
      id: 'cb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Cell cycle: G$_1$ → S (DNA doubles) → G$_2$ → M (mitosis + cytokinesis). Interphase = G$_1$+S+G$_2$
- After S phase: 46 chromosomes (unchanged), 92 chromatids, 4C DNA content
- Cyclins fluctuate; CDKs are constitutive. MPF (Cyclin B + CDK1) drives M-phase entry
- p53 → p21 → CDK inhibition at G$_1$/S checkpoint. p53 loss = cancer hallmark
- Oncogenes: gain-of-function, dominant (Ras, Myc, HER2). Tumor suppressors: loss-of-function, both alleles (p53, Rb, BRCA)
- Rb normally sequesters E2F; phosphorylation by CDK releases E2F for S-phase gene activation
- APC/C ubiquitinates securin and cyclin B → triggers anaphase and mitotic exit`
    }
  ]
};
