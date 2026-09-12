export const mcatBiotechnologyPart4Data = {
  topicSlug: 'mcat-molecular-biology-biotechnology-mcat',
  sections: [
    {
      id: 'biot4-intro',
      type: 'text' as const,
      content: `# Biotechnology for the MCAT

**Part 4 of 4 — Choosing the Right Tool: Protein Methods & MCAT Integration**

### The Protein-Side Toolkit

| Technique | Question answered | Key mechanism |
|-----------|-------------------|---------------|
| **ELISA** | How much of protein/antigen X is in this fluid? | Capture antibody + enzyme-linked detection antibody; color intensity ~ amount (pregnancy tests, HIV screening) |
| **Western blot** | Is protein X present, and at what size? | SDS-PAGE + antibody probe (HIV confirmation after ELISA screen) |
| **Immunofluorescence** | WHERE is protein X in the cell/tissue? | Fluorescent antibody + microscopy |
| **Flow cytometry (FACS)** | How many cells carry surface marker X? Sort them? | Fluorescent antibodies read cell-by-cell in a stream (CD4 counts) |
| **Co-immunoprecipitation** | Does protein X physically associate with Y in cells? | Antibody to X pulls down X plus its partners; blot for Y |
| **Yeast two-hybrid** | Do X and Y interact (screening scale)? | Interaction reconstitutes a split transcription factor, switching on a reporter gene |
| **Mass spectrometry** | What proteins/modifications are in this sample? | Mass-to-charge fingerprinting of peptides |

Antibody logic underlies half the table: specificity comes from the antibody; the assay format determines WHAT question (amount, size, place, partner) that specificity answers.

### The Master Decision Tree

Ask, in order:
1. **What molecule?** DNA (Southern, PCR, sequencing) / RNA (northern, RT-qPCR, RNA-seq) / protein (western, ELISA, IF, flow).
2. **What property?** Amount (qPCR, ELISA) / size or form (blots, gels) / location (IF, GFP fusion, fractionation) / interaction (co-IP, two-hybrid, EMSA for protein-DNA) / function (activity assay, knockout + rescue).
3. **In vitro binding, in-cell occupancy, or organismal requirement?** — the EMSA vs ChIP vs knockout ladder from the transcription lesson generalizes to every claim.

### Stem Cells & Cloning Vocabulary (Light but Tested)

- Potency ladder: **totipotent** (zygote — any cell INCLUDING placenta) > **pluripotent** (embryonic stem cells, any embryonic lineage) > **multipotent** (adult stem cells — hematopoietic SCs make all blood, nothing else).
- **iPSCs**: adult somatic cells reprogrammed to pluripotency by defined transcription factors — patient-matched, no embryo; the reprogramming itself is evidence that differentiation is epigenetic, not genetic (the genome never changed).
- **Reproductive cloning (SCNT)**: somatic nucleus into an enucleated egg — the clone's NUCLEAR genome matches the donor, but its **mitochondrial DNA comes from the egg** (a beloved detail).

### Passage-Day Integration Checklist

- Name each figure's technique and the ONE claim it can support before reading the answer choices.
- Trust the controls: a result without its control (no-template PCR, isotype antibody, empty vector, scrambled siRNA) supports nothing.
- Quantitative instincts: PCR doubles per cycle; ELISA color scales with analyte; qPCR thresholds run backwards (fewer cycles = more template).
- When two techniques disagree (mRNA up, protein flat), the interesting biology lives between them — regulation at translation or protein stability, not an "error."`
    },
    {
      id: 'biot4-worked',
      type: 'text' as const,
      content: `### Worked Example — Building a Diagnostic and Testing a Mechanism

**Passage-style problem.** A biotech team studies a suspected autoimmune disease in which patients may make antibodies against their own insulin receptor, blocking insulin binding and causing severe insulin-resistant hyperglycemia.

**Question 1 — Design the screening assay for anti-receptor antibodies in patient serum.** ELISA: coat plates with purified insulin receptor (the antigen), add patient serum (any anti-receptor antibodies bind), wash, detect with an enzyme-linked anti-HUMAN-IgG secondary antibody, add substrate, read color. Note the inversion of the usual format — here the ANTIBODY is the analyte, so the plate presents antigen. Controls: healthy sera (background), plates coated with an irrelevant protein (specificity).

**Question 2 — ELISA-positive patients could carry antibodies that merely bind the receptor without blocking insulin. What experiment distinguishes binding from blocking?** A competition/function assay: incubate cultured cells bearing insulin receptors with labeled insulin plus or minus patient antibodies — blocking antibodies reduce insulin binding (or downstream: reduce insulin-stimulated receptor phosphorylation on a western). Binding is not function — the EMSA-vs-reporter lesson in immunological clothing.

**Question 3 — One patient is hypoglycemic instead. Propose the mechanism and the confirming result.** An antibody can be an AGONIST: by crosslinking receptors it may mimic insulin and activate signaling. Prediction: patient antibody alone (no insulin) triggers receptor autophosphorylation and glucose uptake in cultured cells. Same target, opposite functional sign — receptor antibodies split into blockers (this passage's Type B insulin resistance) and activators (the Graves disease TSH-receptor precedent the MCAT expects you to recall).

**Question 4 — The team suspects the pathogenic antibodies arose against a viral protein resembling the receptor (molecular mimicry). What sequence-level evidence would support this, and what technique gathers it?** Sequence the viral proteome (or search databases) for a peptide with high identity to the receptor's extracellular epitope; then show patient antibodies bind BOTH peptides (ELISA against each) and that pre-absorbing serum with viral peptide removes anti-receptor reactivity. Cross-reactivity plus absorption is the standard two-step mimicry argument — technique choice, controls, and immunology reasoning in one arc, which is precisely what an MCAT discrete-passage hybrid looks like.`
    },
    {
      id: 'biot4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Technique Selection & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `HIV testing classically uses an ELISA first and a western blot to confirm positives. The logic of this order is that:`,
            options: [`The sensitive, high-throughput ELISA screens broadly, and the western — showing antibodies against specific viral proteins by size — weeds out the screen's false positives`, `The western blot is cheaper and faster than ELISA`, `ELISA detects viral RNA while the western detects DNA`, `The two tests are identical, and repetition alone improves accuracy`],
            correctAnswer: 0,
            explanation: `Screen-then-confirm pairs a high-sensitivity assay (catch every true positive, tolerate false alarms) with a high-specificity one (the western resolves WHICH antigens the antibodies recognize, band by band — cross-reacting sera fail this). The tests are complementary formats of the same antibody detection, not redundant repeats, and neither reads nucleic acid (that is PCR viral load). This sensitivity-before-specificity architecture generalizes to nearly all clinical screening questions.`
          },
          {
            question: `To determine what fraction of a patient's T cells express the surface protein CD4 — and to physically collect those cells alive for culture — the appropriate technique is:`,
            options: [`Western blot of a T cell lysate`, `Flow cytometry with a fluorescent anti-CD4 antibody, using FACS to sort the positive cells`, `ELISA of the patient's serum`, `Southern blot for the CD4 gene`],
            correctAnswer: 1,
            explanation: `The question demands single-CELL resolution (a fraction of cells) plus live recovery — uniquely flow cytometry's territory: each cell files past a laser, its antibody-bound fluorescence is scored individually, and electrostatic sorting (FACS) deflects chosen cells into tubes, viable. A western or ELISA averages the population into one number and destroys or ignores the cells; a Southern reports a gene every T cell carries regardless of expression. Population-average vs per-cell readout is the discriminator to articulate.`
          },
          {
            question: `Antibody to kinase K precipitates K from cell lysates, and phosphatase P consistently comes down with it (detected by anti-P western of the precipitate). When the experiment is repeated with an isotype-control antibody, neither protein appears. The supported conclusion is:`,
            options: [`K phosphorylates P inside cells`, `K and P have identical sequences`, `P is required for K's stability`, `K and P physically associate (directly or through a complex) in the lysate — a co-immunoprecipitation result`],
            correctAnswer: 3,
            explanation: `Co-IP demonstrates physical association: pulling K retrieves its binding partners, and the isotype control excludes sticky-bead artifact. But association is silent on catalysis, direction, or necessity — K phosphorylating P is a FUNCTIONAL claim needing a kinase assay, and even "direct" contact is unproven (a third protein may bridge them; purified-protein binding would test directness). Enumerating what a technique cannot claim is worth as many points as knowing what it can.`
          },
          {
            question: `Induced pluripotent stem cells (iPSCs) are generated by expressing a handful of transcription factors in adult skin fibroblasts. The success of this reprogramming is strong evidence that cellular differentiation is based on:`,
            options: [`Progressive deletion of unused genes from each lineage's genome`, `Irreversible mutations acquired during development`, `Reversible epigenetic and gene-expression states overlaid on a complete, unchanged genome`, `Loss of telomeres in differentiated cells`],
            correctAnswer: 2,
            explanation: `If differentiation deleted or mutated genes, no cocktail of transcription factors could resurrect pluripotency — the information would be gone. Reprogramming works because every somatic cell retains the full genome; lineage identity is a pattern of chromatin marks and active regulators, and sufficient force at the top of the regulatory hierarchy rewrites the pattern. The same conclusion flows from SCNT cloning (an adult nucleus directing a whole organism). Genome constant, epigenome decides — a unifying principle across these lessons.`
          },
          {
            question: `A study reports that drug treatment raises gene Z's mRNA fivefold (RT-qPCR) while Z protein levels are unchanged (western), and concludes the qPCR must be erroneous. A better interpretation is that:`,
            options: [`Western blots cannot detect fivefold changes`, `The drug degraded the qPCR primers`, `mRNA and protein are the same molecule measured two ways`, `Both results can be true — regulation at translation (e.g., miRNA repression) or rapid protein turnover can decouple protein levels from mRNA levels`],
            correctAnswer: 3,
            explanation: `Discordance between RNA and protein is biology, not artifact: the path from transcript to steady-state protein passes translational control (miRNAs, uORFs, eIF2 status) and protein degradation (ubiquitin-proteasome), any of which can flatten a fivefold mRNA rise. The follow-up experiments write themselves — polysome profiling for translation, pulse-chase or proteasome inhibition for turnover. On integration questions, prefer the interpretation that honors ALL data over one that discards an inconvenient figure.`
          }
        ]
      }
    },
    {
      id: 'biot4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Antibody assay formats map to questions: ELISA = how much (fluids; screen), western = present + size (confirm), immunofluorescence = where, flow/FACS = per-cell counting AND live sorting, co-IP = physical association, two-hybrid = interaction screening
- Screen sensitive, confirm specific (HIV ELISA then western) — the universal diagnostic architecture
- Decision tree: molecule (DNA/RNA/protein), then property (amount/size/location/interaction/function), then claim level (in vitro binding, in-cell occupancy, organismal requirement)
- Co-IP shows association, never catalysis or directness; function needs activity assays; requirement needs knockout + rescue
- Stem cell ladder: totipotent > pluripotent (ESC, iPSC) > multipotent; iPSC reprogramming and SCNT prove differentiation is epigenetic over an intact genome; SCNT clones carry the EGG's mitochondrial DNA
- Discordant data are mechanisms in disguise: mRNA up + protein flat = translational control or turnover — chase it with polysome profiles and pulse-chase
- Before answering any figure question: name the technique, its one supportable claim, and the control that legitimizes it`
    }
  ]
};
