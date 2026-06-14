export const mcatMicroPart7Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi7-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 7 of 7 — Immune Disorders & Clinical Microbiology**

### Immune System Disorders

| Disorder | Type | Description |
|----------|------|-------------|
| **Allergies** | Hypersensitivity Type I | IgE-mediated, mast cell degranulation (histamine) |
| **Autoimmune diseases** | Self-tolerance failure | Immune system attacks own tissues (lupus, MS, T1DM) |
| **HIV/AIDS** | Immunodeficiency | Destroys CD4+ T cells → opportunistic infections |
| **SCID** | Immunodeficiency | No functional T or B cells (severe combined) |

### Antibody Classes (HIGH YIELD)

| Class | Function | Location |
|-------|----------|----------|
| **IgG** | Most abundant, crosses placenta | Blood |
| **IgM** | First to respond, pentamer | Blood |
| **IgA** | Mucosal protection | Saliva, breast milk, gut |
| **IgE** | Allergies, parasites | Mast cells |
| **IgD** | B cell receptor | B cell surface |

**Mnemonic**: "**G**reatest amount, **M** comes first, **A** on **A**ll surfaces, **E** for all**E**rgies"

### Antibody Structure

- Y-shaped: 2 heavy chains + 2 light chains, joined by disulfide bonds
- **Fab region** (variable): binds antigen (defines specificity)
- **Fc region** (constant): determines class and binds immune effectors (complement, phagocytes)

### Koch's Postulates

1. Organism found in all cases of disease
2. Organism isolated and grown in pure culture
3. Cultured organism causes disease in a healthy host
4. Organism re-isolated from the new host = original organism`
    },
    {
      id: 'mi7-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading an Antibody Titer (Acute vs. Past Infection)

**Scenario:** A passage gives serology for a patient: **IgM against pathogen X is high**, but **IgG against pathogen X is low/absent**. A second patient has the reverse: **low IgM, high IgG**. The question asks which patient has a *current/recent* infection and which has *prior* exposure or immunity.

**Step 1 — Recall the order of the antibody response.** On first exposure (primary response), **IgM is produced first** (it is a pentamer, good at early agglutination). Days later, class switching yields **IgG**, the dominant long-term antibody that also provides memory.

**Step 2 — Interpret patient 1 (high IgM, low IgG).** A dominant IgM signal indicates the immune system is in the **early phase** of a primary response — an **acute / recent infection**.

**Step 3 — Interpret patient 2 (low IgM, high IgG).** High IgG with little IgM indicates the response has matured or the exposure was in the **past** (or via vaccination) — i.e., **prior infection / established immunity**. A rapid IgG spike on re-exposure reflects memory (secondary response).

**Step 4 — Connect to the Fc/Fab logic.** Whatever the class, the **Fab** region's specificity is what binds pathogen X; the **Fc** (constant) region is what defines the IgM-vs-IgG class being measured.

> **MCAT takeaway:** IgM up first = acute/recent; IgG high (IgM low) = past exposure or immunity. IgM is a pentamer (10 binding sites) excellent at early agglutination; IgG is the most abundant serum antibody, crosses the placenta, and drives the memory (secondary) response.`
    },
    {
      id: 'mi7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Immune Disorders** 🎯`,
      exercise: {
        questions: [
          {
            question: `HIV primarily targets:`,
            options: [`CD4+ helper T cells — leading to progressive immunodeficiency`, `CD8+ cytotoxic T cells`, `B cells directly`, `Neutrophils`],
            correctAnswer: 0,
            explanation: `HIV binds the CD4 receptor (on helper T cells) plus CCR5/CXCR4 co-receptors. As CD4+ T cells are destroyed, the immune system progressively fails. When the CD4 count drops below 200, susceptibility to opportunistic infections defines AIDS.`
          },
          {
            question: `Which antibody class is the FIRST to be produced during a primary immune response and exists as a pentamer?`,
            options: [`IgM`, `IgG`, `IgA`, `IgE`],
            correctAnswer: 0,
            explanation: `IgM appears first and circulates as a pentamer (10 antigen-binding sites), making it highly effective at agglutination and complement activation early in infection. IgG dominates later and provides long-term/memory protection.`
          },
          {
            question: `A patient with seasonal allergies experiences sneezing and itching after pollen exposure. This Type I hypersensitivity reaction is mediated by:`,
            options: [`IgE binding to mast cells, triggering histamine release`, `IgG opsonizing pollen`, `Cytotoxic T cells attacking pollen`, `Complement lysing pollen grains`],
            correctAnswer: 0,
            explanation: `In Type I hypersensitivity, allergen cross-links IgE bound to mast cells and basophils, triggering degranulation and histamine release — producing the classic allergic symptoms. IgE also defends against parasitic worms.`
          },
          {
            question: `Which antibody class is most responsible for mucosal immunity and is found in saliva, tears, and breast milk?`,
            options: [`IgA`, `IgG`, `IgM`, `IgD`],
            correctAnswer: 0,
            explanation: `IgA (often a dimer at mucosal surfaces) protects the gut, respiratory tract, and other mucosa, and is secreted in breast milk to protect the nursing infant. IgG is the main serum antibody; IgM is the first responder.`
          },
          {
            question: `A microbiologist wants to prove that a newly isolated bacterium causes a specific disease. Which framework should she apply?`,
            options: [`Koch's postulates`, `The central dogma`, `The Baltimore classification`, `The Gram stain protocol`],
            correctAnswer: 0,
            explanation: `Koch's postulates establish a causal link between a microbe and a disease: the organism is found in all cases, isolated in pure culture, reproduces disease in a healthy host, and is re-isolated from that host. The Baltimore system classifies viruses, not bacterial causation.`
          },
          {
            question: `An infant is born with no functional T cells OR B cells and suffers severe, recurrent infections from birth. This is characteristic of:`,
            options: [`Severe combined immunodeficiency (SCID)`, `A Type I hypersensitivity`, `An autoimmune disease`, `Passive immunity`],
            correctAnswer: 0,
            explanation: `SCID is a primary immunodeficiency in which both T- and B-cell arms of adaptive immunity are absent or nonfunctional, leaving the infant unable to fight even normally trivial pathogens. This contrasts with autoimmunity (a loss of self-tolerance) and hypersensitivity (an over-reaction).`
          }
        ]
      }
    },
    {
      id: 'mi7-summary',
      type: 'text' as const,
      content: `### Microbiology — Complete! ✅

From bacteria to viruses to immune function, microbiology bridges molecular biology with clinical medicine. The MCAT loves testing infectious-disease mechanisms, immune responses, and antibody functions.

**Final high-yield recall:**
- IgM = first responder (pentamer); IgG = most abundant + crosses placenta + memory; IgA = mucosal; IgE = allergies/parasites
- Antibody specificity comes from the Fab (variable) region; class/effector function from Fc (constant)
- HIV destroys CD4+ T cells; SCID lacks both T and B cells
- Koch's postulates establish microbial causation of disease`
    }
  ]
};
