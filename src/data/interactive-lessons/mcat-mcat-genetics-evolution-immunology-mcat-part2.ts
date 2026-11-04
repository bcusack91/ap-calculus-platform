export const mcatImmunoPart2Data = {
  topicSlug: 'mcat-genetics-evolution-immunology-mcat',
  sections: [
    {
      id: 'imm2-intro',
      type: 'text' as const,
      content: `# Immunology — Deep Dive

**Part 2 of 4 — Adaptive Immunity: T Cells, B Cells & MHC**

### MHC I vs. MHC II — The Highest-Yield Pairing in Immunology

| Feature | MHC Class I | MHC Class II |
|---------|-------------|--------------|
| Expressed by | ALL nucleated cells | Professional APCs only (dendritic cells, macrophages, B cells) |
| Peptide source | ENDOGENOUS (cytosolic — viral proteins, self proteins, tumor antigens) | EXOGENOUS (endocytosed/phagocytosed extracellular material) |
| Presents to | CD8+ cytotoxic T cells | CD4+ helper T cells |
| Logical role | "Here is what I am making inside" | "Here is what I have eaten from outside" |

Memory hook: the products multiply to eight — MHC I $\\times$ CD8, MHC II $\\times$ CD4. A cell displaying viral peptide on MHC I is confessing to internal infection and invites CD8+ killing; an APC displaying bacterial peptide on MHC II is reporting extracellular danger and recruits CD4+ help.

### T-Cell Development: Education in the Thymus

T-cell precursors leave the bone marrow and mature in the **thymus**, where two filters create **central tolerance**:

- **Positive selection**: thymocytes whose receptors can bind self-MHC at all survive; useless receptors die by neglect. (Must be able to READ the MHC bookshelf.)
- **Negative selection**: thymocytes that bind self-peptide/self-MHC TOO strongly are deleted. (Must not ATTACK the library's own books.)

The survivors are self-MHC-restricted but self-tolerant. Failure of negative selection is a root cause of autoimmunity (Part 4).

### Helper T Cells: The Conductors

CD4+ helper T cells do not kill; they coordinate via **cytokines**:

- **Th1** cells promote CELL-MEDIATED immunity — they activate macrophages and support cytotoxic T cells (intracellular pathogens)
- **Th2** cells promote HUMORAL immunity — they help B cells produce antibody, and drive responses to parasites and allergy

Losing helper T cells (as in HIV) cripples BOTH arms — antibodies and killing — which is why CD4 count predicts immune collapse.

### Cytotoxic T Cells: The Executioners

CD8+ T cells recognize antigen on MHC I and kill the presenting cell by:

- **Perforin** — pore-forming protein — plus **granzymes**, proteases that enter and trigger apoptosis
- **Fas ligand** engaging Fas on the target, again inducing apoptosis

Death is by tidy apoptosis, not lysis-and-spill: the infected cell dismantles itself without releasing virions freely.

### B Cells and the Two Activation Routes

- **T-dependent antigens** (most proteins): the B cell binds antigen with its BCR, internalizes and presents it on MHC II; a matching helper T cell provides a contact (co-stimulatory) signal and cytokines. Full response: class switching, affinity maturation, memory.

<!-- yield:low -->
- The contact signal is **CD40 ligand (CD40L)** on the helper T cell engaging **CD40** on the B cell.
<!-- /yield -->

- **T-independent antigens** (highly repetitive structures like bacterial polysaccharides): massive BCR cross-linking activates the B cell alone — but mostly IgM, weak memory.

### Clonal Selection & Receptor Diversity

**Clonal selection**: the lymphocyte repertoire, each cell with ONE unique receptor specificity, exists BEFORE antigen arrives. Antigen merely selects the matching clones, which undergo **clonal expansion** into effector and memory cells.

Why does the repertoire pre-exist? **V(D)J recombination**: as each lymphocyte develops, one Variable, one Diversity and one Joining gene segment are randomly cut and pasted together (**somatic recombination**), and imprecise joining adds or removes nucleotides at the seams (**junctional diversity**). Segment choice, junctional randomness and heavy-light pairing yield billions of specificities from a modest genome — with no instruction from antigen.

<!-- yield:low -->
- D segments exist only in antibody heavy chains and in TCR beta and delta chains; light chains and TCR alpha are joined from V and J segments alone.
<!-- /yield -->`
    },
    {
      id: 'imm2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing One Virus Through the Adaptive System

**Problem 1.** A respiratory virus infects airway epithelial cells. An airway dendritic cell engulfs debris from a dying infected cell, is itself infected, and migrates to a draining lymph node.

- **(a)** Which MHC class displays peptides from the engulfed debris, and to which T cells?
- **(b)** Which MHC class displays peptides from viral proteins made in the dendritic cell's own cytosol, and to which T cells?
- **(c)** An infected epithelial cell is not an APC. Can T cells still recognize it, and through which MHC class?

**(a) Engulfed debris.** Peptides from engulfed debris are EXOGENOUS, so they are processed into the MHC II pathway and presented to CD4+ helper T cells.

**(b) The cell's own viral proteins.** Viral proteins synthesized in the dendritic cell's OWN cytosol are ENDOGENOUS, so their peptides go onto MHC I and are presented to CD8+ T cells. One APC can thus launch both arms.

**(c) A non-APC.** Yes. ALL nucleated cells express MHC I, so the epithelial cell displays endogenous viral peptides on MHC I and becomes a target for the CD8+ cytotoxic T cells primed in the node. It cannot present on MHC II, which is reserved for professional APCs.

**Problem 2.** In the same infection, one B cell's BCR happens to bind a surface protein of this brand-new virus. The B cell internalizes the protein and presents its fragments on MHC II.

- **(a)** What must the B cell receive before its clone becomes antibody-secreting plasma cells, and from which cell?
- **(b)** Which part of the infection does the antibody handle, and which part is left to CD8+ cells?
- **(c)** Why does a primary response take days, if a matching clone already existed?

**(a) T-dependent activation.** A primed CD4+ helper T cell that recognizes the same antigen provides contact signals and cytokines. The B cell clone then expands into plasma cells that secrete antibody.

**(b) Division of labor.** Antibody neutralizes free, EXTRACELLULAR virions; CD8+ cells handle cells that are already infected.

**(c) The lag.** V(D)J recombination built the repertoire during development, so the virus only SELECTED a pre-existing clone (clonal selection). But that clone is rare, a handful of cells; the days-long lag is the time it needs to expand into enough effector and plasma cells.`
    },
    {
      id: 'imm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**T Cells, B Cells & MHC** 🎯`,
      exercise: {
        questions: [
          {
            question: `A macrophage phagocytoses an extracellular bacterium. Peptides from the bacterium will primarily be displayed on:`,
            options: [`MHC I, to CD4+ helper T cells`, `MHC II, to CD8+ cytotoxic T cells`, `MHC II, to CD4+ helper T cells`, `MHC I, to CD8+ cytotoxic T cells`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Phagocytosed material is EXOGENOUS, so it enters the MHC II pathway, and MHC II presents to CD4+ helper T cells (recall 2 x 4 = 8: MHC II pairs with CD4, MHC I with CD8). MHC I with CD4+ and MHC II with CD8+ scramble the pairings. MHC I would display peptides synthesized in the macrophage's own cytosol, not endocytosed material.`
          },
          {
            question: `During thymic negative selection, T cells are deleted if they:`,
            options: [`Fail to bind self-MHC molecules at all`, `Bind self-peptide/MHC too strongly`, `Express CD8 rather than CD4 on their surface`, `Have not yet encountered foreign antigen`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Negative selection deletes strongly self-reactive thymocytes, establishing central tolerance — its failure predisposes to autoimmunity. Failing to bind self-MHC at all causes death by neglect during POSITIVE selection (so picking that option confuses the two filters). CD8 expression is a normal fate, and no T cell has met foreign antigen in the thymus — naivety is expected, not punished.`
          },
          {
            question: `Cytotoxic T cells eliminate virus-infected cells primarily by:`,
            options: [`Releasing perforin and granzymes that induce apoptosis`, `Secreting antibodies that neutralize the cell surface`, `Phagocytosing the infected cell whole`, `Releasing histamine to lyse the target osmotically`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `CD8+ cells deliver perforin (pore formation) and granzymes (apoptosis-inducing proteases), or engage Fas — either way the target undergoes tidy apoptosis rather than bursting. T cells never secrete antibody (that is the plasma-cell job), they are not phagocytes (neutrophils/macrophages are), and histamine is a mast-cell/basophil inflammatory mediator, not a killing mechanism.`
          },
          {
            question: `Compared with a T-dependent protein antigen, a T-independent bacterial capsular polysaccharide typically elicits:`,
            options: [`Stronger memory and extensive class switching to IgG`, `Activation of CD8+ T cells instead of B cells`, `No antibody response of any kind`, `Mostly IgM with little class switching or memory`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Repetitive polysaccharides cross-link many BCRs and activate B cells without T help, but the missing helper-T contact and cytokine signals mean little class switching or affinity maturation — mostly IgM and poor memory. Stronger memory with IgG class switching describes the T-DEPENDENT outcome. Antibody is still made (so not "no antibody response"), and polysaccharide antigens do not redirect the response to CD8+ cells.`
          },
          {
            question: `A mutant mouse lacks the enzymes that cut and join V, D and J gene segments during lymphocyte development. Which outcome is expected?`,
            options: [`B and T cells mature, but every one carries the same receptor`, `No mature B or T cells, though innate defenses still work`, `Normal lymphocytes that rearrange their receptors after infection`, `Lymphocytes that build their receptors using antigen as a template`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `BCRs and TCRs are assembled only by V(D)J recombination, and developing lymphocytes that never display a working receptor die during development. With no B or T cells there is no adaptive immunity at all, a SCID-like state, while germline-encoded innate defenses such as TLRs, complement and NK cells are untouched. Without cutting and joining there is no receptor at all, so not even one shared receptor can be made. Recombination happens during development, before any infection, and antigen never serves as a template for receptor shape.`
          }
        ]
      }
    },
    {
      id: 'imm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **MHC I vs. MHC II.** MHC I shows endogenous peptide to CD8+ cells; MHC II, on professional APCs, shows exogenous peptide to CD4+.
- **Thymic education.** Positive selection keeps T cells that read self-MHC; negative selection deletes strongly self-reactive ones.
- **Helpers and killers.** CD4+ helpers direct both arms by cytokines; CD8+ cells trigger apoptosis in targets (perforin/granzymes, Fas).
- **Pre-formed repertoire.** V(D)J recombination builds receptors before any exposure; antigen selects and expands matching clones.

**Common traps**

- **Scrambled MHC pairings.** MHC I pairs with CD8 and MHC II with CD4 (1 × 8 = 2 × 4 = 8); phagocytosed peptide goes on MHC II, so it reaches CD4+ helpers.
- **Mixing up the two filters.** Not binding self-MHC means death by neglect in positive selection; negative selection deletes strong binders.
- **Polysaccharides like proteins.** T-independent polysaccharide antigens give mostly IgM and weak memory, not class-switched IgG.
- **Antigen as a template.** Antigen does not shape receptors; it selects clones that already exist, each with ONE specificity.

<!-- yield:low -->
**Low-yield extras**

- The helper-T contact signal is CD40L binding CD40 on the B cell.
- Only antibody heavy chains and TCR beta and delta chains use a D segment; light chains and TCR alpha are V–J only.
<!-- /yield -->`
    }
  ]
};
