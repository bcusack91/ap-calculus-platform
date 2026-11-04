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
| **Western blot** | Is protein X present, and at what size? | SDS-PAGE + antibody probe (classically, HIV confirmation after an ELISA screen) |
| **Immunofluorescence** | WHERE is protein X in the cell/tissue? | Fluorescent antibody + microscopy |
| **Flow cytometry (FACS)** | How many cells carry surface marker X? Sort them? | Fluorescent antibodies read cell-by-cell in a stream (CD4 counts) |
| **Co-immunoprecipitation** | Does protein X physically associate with Y in cells? | Antibody to X pulls down X plus its partners; blot for Y |
| **Mass spectrometry** | What proteins/modifications are in this sample? | Mass-to-charge fingerprinting of peptides |

- **Yeast two-hybrid** asks whether X and Y interact, at screening scale: X and Y are fused to the two halves of a split transcription factor, and their binding reconstitutes it, switching on a reporter gene.

Antibody logic underlies half the table: specificity comes from the antibody; the assay format determines WHAT question (amount, size, place, partner) that specificity answers.

### The Master Decision Tree

Ask, in order:
1. **What molecule?** DNA (Southern, PCR, sequencing) / RNA (northern, RT-qPCR, RNA-seq) / protein (western, ELISA, IF, flow).
2. **What property?** Amount (qPCR, ELISA) / size or form (blots, gels) / location (IF, GFP fusion, fractionation) / interaction (co-IP, yeast two-hybrid, EMSA for protein-DNA) / function (activity assay, knockout + rescue).
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

**Problem 1.** In a suspected autoimmune disease, patients may make antibodies against their own insulin receptor, blocking insulin binding and causing severe insulin-resistant hyperglycemia. A team designs a screen for these antibodies in patient serum.

- **(a)** What should coat the ELISA plate, and why?
- **(b)** How are bound patient antibodies detected?
- **(c)** Which controls does the assay need?

**(a) Coat with antigen.** Purified insulin receptor (the antigen); patient serum is added and any anti-receptor antibodies bind. Note the inversion of the usual format — here the ANTIBODY is the analyte, so the plate presents antigen.

**(b) Detection.** Wash, then add an enzyme-linked anti-HUMAN-IgG secondary antibody, add substrate, and read the color.

**(c) Controls.** Healthy sera (background) and plates coated with an irrelevant protein (specificity).

**Problem 2.** ELISA-positive patients could carry antibodies that merely bind the receptor without blocking insulin.

- **(a)** What experiment distinguishes binding from blocking?
- **(b)** What downstream readout could show the same thing?

**(a) Competition assay.** Incubate cultured cells bearing insulin receptors with labeled insulin, plus or minus patient antibodies — blocking antibodies reduce insulin binding.

**(b) Signaling readout.** Blocking antibodies reduce insulin-stimulated receptor phosphorylation on a western. Binding is not function — the EMSA-vs-reporter lesson in immunological clothing.

**Problem 3.** One antibody-positive patient is hypoglycemic instead of hyperglycemic.

- **(a)** What could this patient's antibody be doing to the receptor?
- **(b)** What result in cultured cells would confirm it?
- **(c)** Which classic disease shows the same pattern with a different receptor?

**(a) An agonist antibody.** An antibody can be an AGONIST: by crosslinking receptors it may mimic insulin and activate signaling.

**(b) Confirming result.** Patient antibody alone (no insulin) triggers receptor autophosphorylation and glucose uptake in cultured cells.

**(c) Graves disease.** Stimulating antibodies against the TSH receptor. Same target, opposite functional sign — receptor antibodies split into blockers (this passage's disease) and activators (the Graves precedent the MCAT expects you to recall).

<!-- yield:low -->
The blocking anti-insulin-receptor disease is a real, rare syndrome: type B insulin resistance.
<!-- /yield -->

**Problem 4.** The team suspects the pathogenic antibodies arose against a viral protein resembling the receptor (molecular mimicry).

- **(a)** What sequence-level evidence would support mimicry, and how is it gathered?
- **(b)** What binding result would strengthen the case?
- **(c)** What absorption experiment completes the argument?

**(a) Sequence similarity.** Sequence the viral proteome (or search databases) for a peptide with high identity to the receptor's extracellular epitope.

**(b) Cross-reactivity.** Patient antibodies bind BOTH peptides (ELISA against each).

**(c) Absorption.** Pre-absorbing serum with the viral peptide removes anti-receptor reactivity. Cross-reactivity plus absorption is the standard two-step mimicry argument — technique choice, controls, and immunology reasoning in one arc.`
    },
    {
      id: 'biot4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Technique Selection & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `HIV testing classically uses an ELISA first and a western blot to confirm positives. The logic of this order is that:`,
            options: [`A sensitive screen is followed by a more specific confirmation`, `The specific western screens, and the sensitive ELISA confirms`, `ELISA detects viral RNA while the western detects DNA`, `The two tests are identical, and repetition alone improves accuracy`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Screen-then-confirm pairs a high-sensitivity assay (catch every true positive, tolerate false alarms) with a high-specificity one (the western resolves WHICH antigens the antibodies recognize, band by band — cross-reacting sera fail this). The tests are complementary formats of the same antibody detection, not redundant repeats, and neither reads nucleic acid (that is PCR viral load). This sensitivity-before-specificity architecture generalizes to nearly all clinical screening questions.`
          },
          {
            question: `To determine what fraction of a patient's T cells express the surface protein CD4 — and to physically collect those cells alive for culture — the appropriate technique is:`,
            options: [`Western blot of a whole T cell lysate`, `Flow cytometry with FACS sorting`, `ELISA for soluble CD4 in the patient's serum`, `Southern blot for the CD4 gene in T cell DNA`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The question demands single-CELL resolution (a fraction of cells) plus live recovery — uniquely flow cytometry's territory: each cell files past a laser, its antibody-bound fluorescence is scored individually, and electrostatic sorting (FACS) deflects chosen cells into tubes, viable. A western or ELISA averages the population into one number and destroys or ignores the cells; a Southern reports a gene every T cell carries regardless of expression. Population-average vs per-cell readout is the discriminator to articulate.`
          },
          {
            question: `Antibody to kinase K precipitates K from cell lysates, and phosphatase P consistently comes down with it (detected by anti-P western of the precipitate). When the experiment is repeated with an isotype-control antibody, neither protein appears. The supported conclusion is:`,
            options: [`K directly phosphorylates P inside living cells`, `K and P have identical amino acid sequences`, `P is required to maintain K's stability in cells`, `K and P physically associate in the lysate`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Co-IP demonstrates physical association: pulling K retrieves its binding partners, and the isotype control excludes sticky-bead artifact. But association is silent on catalysis, direction, or necessity — K phosphorylating P is a FUNCTIONAL claim needing a kinase assay, and even "direct" contact is unproven (a third protein may bridge them; purified-protein binding would test directness). Enumerating what a technique cannot claim is worth as many points as knowing what it can.`
          },
          {
            question: `Induced pluripotent stem cells (iPSCs) are generated by expressing a handful of transcription factors in adult skin fibroblasts. The success of this reprogramming is strong evidence that cellular differentiation is based on:`,
            options: [`Progressive deletion of unused genes from each lineage's genome`, `Irreversible mutations acquired during development`, `Reversible epigenetic states on an unchanged genome`, `Loss of telomeres in differentiated cells`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `If differentiation deleted or mutated genes, no cocktail of transcription factors could resurrect pluripotency — the information would be gone. Reprogramming works because every somatic cell retains the full genome; lineage identity is a pattern of chromatin marks and active regulators, and sufficient force at the top of the regulatory hierarchy rewrites the pattern. The same conclusion flows from SCNT cloning (an adult nucleus directing a whole organism). Genome constant, epigenome decides — a unifying principle across these lessons.`
          },
          {
            question: `A study reports that drug treatment raises gene Z's mRNA fivefold (RT-qPCR) while Z protein levels are unchanged (western), and concludes the qPCR must be erroneous. A better interpretation is that:`,
            options: [`Western blots cannot resolve fivefold changes in protein`, `The drug interfered with the qPCR reaction itself`, `mRNA and protein are the same molecule measured two ways`, `Both are true; translation or turnover decouples them`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Discordance between RNA and protein is biology, not artifact: the path from transcript to steady-state protein passes translational control (miRNAs, uORFs, eIF2 status) and protein degradation (ubiquitin-proteasome), any of which can flatten a fivefold mRNA rise. The follow-up experiments write themselves — polysome profiling for translation, pulse-chase or proteasome inhibition for turnover. On integration questions, prefer the interpretation that honors ALL data over one that discards an inconvenient figure.`
          }
        ]
      }
    },
    {
      id: 'biot4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Antibody assay formats.** ELISA = how much, western = what size, immunofluorescence = where, flow cytometry = per-cell counts and sorting.
- **Screen, then confirm.** A sensitive screen comes first, then a more specific confirmation (classically, HIV ELISA then western blot).
- **The decision tree.** Ask what molecule, then what property, then what claim level: in vitro binding, in-cell occupancy, or requirement.
- **Differentiation is epigenetic.** iPSC reprogramming and SCNT cloning show cell identity sits in epigenetic states on an intact genome.

**Common traps**

- **Co-IP as catalysis.** Co-precipitation shows two proteins associate, not that one modifies the other or that they touch directly.
- **Discordant data as error.** mRNA up with protein flat points to translational control or protein turnover, not a failed assay.
- **The clone's mitochondria.** An SCNT clone's nuclear genome matches the donor, but its mitochondrial DNA comes from the egg.
- **Pluripotent as totipotent.** ESCs and iPSCs make any embryonic lineage but not placenta; only the zygote is totipotent.

<!-- yield:low -->
**Low-yield extras**

- The blocking anti-insulin-receptor syndrome is type B insulin resistance.
<!-- /yield -->`
    }
  ]
};
