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

1. **Positive selection**: thymocytes whose receptors can bind self-MHC at all survive; useless receptors die by neglect. (Must be able to READ the MHC bookshelf.)
2. **Negative selection**: thymocytes that bind self-peptide/self-MHC TOO strongly are deleted. (Must not ATTACK the library's own books.)

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

- **T-dependent antigens** (most proteins): the B cell binds antigen with its BCR, internalizes and presents it on MHC II; a matching helper T cell provides CD40L contact and cytokines. Full response: class switching, affinity maturation, memory.
- **T-independent antigens** (highly repetitive structures like bacterial polysaccharides): massive BCR cross-linking activates the B cell alone — but mostly IgM, weak memory.

### Clonal Selection & Receptor Diversity

**Clonal selection**: the repertoire of lymphocytes, each with ONE unique receptor specificity, exists BEFORE antigen arrives. Antigen merely selects the matching clones, which then undergo **clonal expansion** into effector cells and memory cells.

Why does the repertoire pre-exist? **V(D)J recombination**: during lymphocyte development, one Variable, one Diversity (heavy chain/TCR beta only), and one Joining gene segment are randomly cut-and-pasted together (**somatic recombination**), and imprecise joining adds or removes nucleotides at the junctions (**junctional diversity**). Combinatorial choice, junctional randomness, and heavy-light pairing generate billions of specificities from a modest genome — no instruction from the antigen needed.`
    },
    {
      id: 'imm2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing One Virus Through the Adaptive System

**Passage-style problem.** A respiratory virus infects airway epithelial cells. A dendritic cell in the airway engulfs debris from a dying infected cell and also becomes directly infected itself. It migrates to a draining lymph node.

**Question 1 — Which MHC molecules on the dendritic cell display viral peptide, and to which T cells?** Both. Peptides from ENGULFED debris are exogenous → processed into the MHC II pathway → presented to CD4+ helper T cells. Peptides from viral proteins synthesized in the dendritic cell's OWN cytosol (it is infected) are endogenous → MHC I → presented to CD8+ T cells. One APC can thus launch both arms.

**Question 2 — An epithelial cell in the airway is infected but is not an APC. Can it be recognized?** Yes. ALL nucleated cells express MHC I, so the epithelial cell displays endogenous viral peptides on MHC I and becomes a target for the CD8+ cytotoxic T cells primed in the node. It cannot present on MHC II — that is reserved for professional APCs.

**Question 3 — How do antibodies enter the picture?** A B cell whose randomly generated BCR happens to bind a viral surface protein internalizes it and presents fragments on MHC II. A primed CD4+ helper T cell recognizing the same antigen provides CD40L and cytokines (T-dependent activation). The B cell clone expands into plasma cells secreting antibody that neutralizes free virions — note the division of labor: antibody handles EXTRACELLULAR virus, CD8+ cells handle cells already infected.

**Question 4 — The student's roommate asks how a receptor for a brand-new virus could already exist. Answer?** V(D)J recombination generated an enormous pre-formed repertoire during lymphocyte development; the virus did not instruct receptor design, it merely SELECTED pre-existing clones (clonal selection). The days-long lag of a primary response is the time needed for those rare clones to expand.`
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
            explanation: `Phagocytosed material is EXOGENOUS, so it enters the MHC II pathway, and MHC II presents to CD4+ helper T cells (recall 2 x 4 = 8: MHC II pairs with CD4, MHC I with CD8). Choices A and B scramble the pairings. MHC I (choice D) would display peptides synthesized in the macrophage's own cytosol, not endocytosed material.`
          },
          {
            question: `During thymic negative selection, T cells are deleted if they:`,
            options: [`Fail to bind self-MHC molecules at all`, `Bind self-peptide/MHC complexes too strongly`, `Express CD8 rather than CD4 on their surface`, `Have not yet encountered foreign antigen`],
            correctAnswer: 1,
            explanation: `Negative selection deletes strongly self-reactive thymocytes, establishing central tolerance — its failure predisposes to autoimmunity. Failing to bind self-MHC at all causes death by neglect during POSITIVE selection (choice A confuses the two filters). CD8 expression is a normal fate, and no T cell has met foreign antigen in the thymus — naivety is expected, not punished.`
          },
          {
            question: `Cytotoxic T cells eliminate virus-infected cells primarily by:`,
            options: [`Releasing perforin and granzymes that induce apoptosis`, `Secreting antibodies that neutralize the cell surface`, `Phagocytosing the infected cell whole`, `Releasing histamine to lyse the target osmotically`],
            correctAnswer: 0,
            explanation: `CD8+ cells deliver perforin (pore formation) and granzymes (apoptosis-inducing proteases), or engage Fas — either way the target undergoes tidy apoptosis rather than bursting. T cells never secrete antibody (that is the plasma-cell job), they are not phagocytes (neutrophils/macrophages are), and histamine is a mast-cell/basophil inflammatory mediator, not a killing mechanism.`
          },
          {
            question: `Compared with a T-dependent protein antigen, a T-independent bacterial capsular polysaccharide typically elicits:`,
            options: [`Stronger memory and extensive class switching to IgG`, `Activation of CD8+ T cells instead of B cells`, `No antibody response of any kind`, `Mostly IgM with little class switching or memory`],
            correctAnswer: 3,
            explanation: `Repetitive polysaccharides cross-link many BCRs and activate B cells without T help, but the missing CD40L/cytokine signals mean little class switching or affinity maturation — mostly IgM and poor memory. Choice A describes the T-DEPENDENT outcome. Antibody is still made (so not choice C), and polysaccharide antigens do not redirect the response to CD8+ cells.`
          },
          {
            question: `Which statement best explains why the immune system can respond to antigens that have never existed before in nature?`,
            options: [`Antigens serve as templates that instruct lymphocytes to fold matching receptors`, `Random V(D)J recombination creates a diverse repertoire before exposure`, `Each lymphocyte expresses thousands of different receptor specificities simultaneously`, `Toll-like receptors mutate rapidly upon infection to fit the new antigen`],
            correctAnswer: 1,
            explanation: `Somatic recombination of V, (D), and J segments plus imprecise junctions builds billions of specificities BEFORE any exposure; antigen then selects and expands the rare matching clones (clonal selection). The "instructional" template model (choice A) is historically famous but wrong. Each lymphocyte carries essentially ONE specificity, and TLRs are fixed germline pattern receptors that do not mutate to fit antigens.`
          }
        ]
      }
    },
    {
      id: 'imm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- MHC I: all nucleated cells, ENDOGENOUS peptides, presents to CD8+ cytotoxic T cells; MHC II: professional APCs, EXOGENOUS peptides, presents to CD4+ helper T cells (1 x 8 and 2 x 4)
- Thymic education: positive selection keeps receptors that read self-MHC; negative selection deletes those that bind self too strongly (central tolerance)
- CD4+ helpers conduct via cytokines — Th1 boosts cell-mediated responses, Th2 boosts antibody/humoral responses; CD8+ cells kill via perforin/granzyme and Fas, causing apoptosis
- B cells: T-dependent activation (BCR + MHC II presentation + helper-T CD40L/cytokines) gives class switching and memory; T-independent polysaccharide antigens give mostly IgM, weak memory
- Clonal selection: the receptor repertoire pre-exists antigen thanks to V(D)J somatic recombination and junctional diversity; antigen selects and expands the matching clones`
    }
  ]
};
