export const mcatImmunoPart1Data = {
  topicSlug: 'mcat-genetics-evolution-immunology-mcat',
  sections: [
    {
      id: 'imm1-intro',
      type: 'text' as const,
      content: `# Immunology — Deep Dive

**Part 1 of 4 — Innate Immunity: Barriers, Cells & Inflammation**

### The First Line: Barriers Before Cells

Before any immune cell acts, **physical and chemical barriers** exclude most pathogens:

- **Skin**: keratinized epithelium, dry and slightly acidic; sweat and sebum inhibit growth
- **Mucus** in respiratory and GI tracts traps microbes; the mucociliary escalator sweeps them out
- **Lysozyme** (tears, saliva, mucus) cleaves bacterial peptidoglycan cell walls
- **Stomach acid** (pH ~2) destroys most swallowed microbes
- **Defensins**: antimicrobial peptides secreted by epithelial cells that punch holes in microbial membranes

### Innate vs. Adaptive — The Framing Table

| Feature | Innate | Adaptive |
|---------|--------|----------|
| Speed | Minutes to hours | Days (first exposure) |
| Specificity | Broad PATTERNS (PAMPs) | Single epitopes |
| Receptors | Germline-encoded (TLRs) | Somatically rearranged (BCR/TCR) |
| Memory | None | Yes — faster, stronger second response |
| Cells | Neutrophils, macrophages, NK, dendritic | B and T lymphocytes |

### The Innate Cell Cast

- **Neutrophils**: most abundant leukocyte; first responders that phagocytose and die at the site (pus)
- **Macrophages**: tissue-resident phagocytes (from monocytes); engulf pathogens, release cytokines, present antigen
- **Dendritic cells**: the **innate→adaptive bridge** — they sample antigen in tissue, migrate to lymph nodes, and present it to naive T cells (the premier antigen-presenting cell)
- **NK cells**: lymphocyte-lineage but innate; kill host cells that **LACK MHC I** ("missing self" — virus-infected and tumor cells often downregulate MHC I to hide from T cells, and NK cells exploit exactly that)
- **Eosinophils** (parasites, allergy), **basophils** and **mast cells** (histamine release, allergy and inflammation)

### Pattern Recognition: PRRs and PAMPs

Innate receptors are **pattern recognition receptors (PRRs)** — e.g., **Toll-like receptors (TLRs)** — that bind **pathogen-associated molecular patterns (PAMPs)**: conserved microbial signatures like LPS, flagellin, and double-stranded RNA. This is why innate immunity is "nonspecific" yet not random: it recognizes broad classes of invaders with fixed, germline-encoded receptors, no prior exposure needed.

### Complement

A cascade of ~30 plasma proteins (made mainly by the liver) with three effector outcomes:

1. **Opsonization** — C3b coats microbes, flagging them for phagocytosis
2. **Membrane attack complex (MAC)** — terminal components form a lytic pore in the pathogen membrane
3. **Anaphylatoxins** (C3a, C5a) — amplify inflammation and recruit phagocytes

Activation routes at concept level: the **classical pathway** is triggered by antibody bound to antigen (so it links to adaptive immunity), while the **alternative pathway** fires spontaneously on microbial surfaces with no antibody required — purely innate.

### Inflammation, Fever & Interferons

The inflammation cascade: tissue damage → mast cells release **histamine** → **vasodilation** (redness, heat) and increased capillary permeability (swelling) → neutrophils adhere to endothelium and squeeze out via **diapedesis** → follow chemical gradients (**chemotaxis**, e.g., toward C5a) to the site.

**Fever**: pyrogens (e.g., IL-1) reset the hypothalamic set point; moderate fever inhibits some pathogens and speeds immune reactions. **Interferons** are cytokines released by virus-infected cells that warn NEIGHBORING cells to degrade RNA and dampen protein synthesis — an antiviral state that slows viral spread before adaptive immunity arrives.`
    },
    {
      id: 'imm1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Splinter, Hour by Hour

**Passage-style problem.** A student gets a wooden splinter contaminated with soil bacteria in her finger. Within hours the site is red, warm, swollen, and tender. By day 2 a small amount of pus has formed. She has never encountered this bacterial strain before, yet the infection is cleared by day 4 without antibiotics.

**Question 1 — Why redness, heat, and swelling within hours?** Damaged tissue and resident mast cells release histamine. Local arterioles dilate (more warm blood → redness and heat) and capillaries become leaky (plasma leaks out → swelling). This is the stereotyped innate inflammatory response — no recognition of the specific strain is required.

**Question 2 — How do neutrophils "know" where to go?** Bacterial products and complement fragments (C5a) form a chemical gradient. Circulating neutrophils tether to activated endothelium, exit the vessel by diapedesis, and crawl up the gradient by chemotaxis. The pus at day 2 is largely dead neutrophils and debris.

**Question 3 — The strain is new to her immune system. How can it be cleared in 4 days when adaptive responses take a week or more?** Innate recognition does not need prior exposure: TLRs on macrophages and neutrophils bind conserved PAMPs (e.g., LPS on Gram-negative walls), and the alternative complement pathway opsonizes the bacteria spontaneously. Phagocytosis of C3b-coated bacteria clears the small inoculum before an adaptive response is even necessary.

**Question 4 — Meanwhile, what are dendritic cells doing?** Sampling bacterial antigen at the wound, then migrating through lymphatics to the draining lymph node to present peptides to naive T cells. Even though innate immunity wins this round, the adaptive system is being briefed — that hand-off is the dendritic cell's defining job.`
    },
    {
      id: 'imm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Innate Immunity & Inflammation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A virus-infected cell downregulates its MHC I molecules to evade cytotoxic T cells. Which immune cell is specialized to kill it anyway?`,
            options: [`Neutrophil`, `Natural killer (NK) cell`, `B lymphocyte`, `Eosinophil`],
            correctAnswer: 1,
            explanation: `NK cells kill host cells that LACK MHC I ("missing self") — precisely the evasion strategy described. Neutrophils phagocytose extracellular microbes, not host cells; B cells make antibody rather than killing cells directly; eosinophils target parasites. This complementarity (T cells need MHC I present, NK cells attack when it is absent) leaves viruses no easy escape.`
          },
          {
            question: `Toll-like receptors allow a macrophage to respond to a bacterial species it has never encountered because TLRs:`,
            options: [`Are randomly rearranged during development to cover all possible antigens`, `Bind antibodies already attached to the bacterium`, `Recognize conserved molecular patterns (PAMPs) shared by broad classes of microbes`, `Detect the absence of MHC I on the bacterial surface`],
            correctAnswer: 2,
            explanation: `PRRs like TLRs are germline-encoded and bind conserved PAMPs (LPS, flagellin, dsRNA) common to whole microbial classes — pattern-based, not pathogen-specific. Random rearrangement (choice A) describes B/T-cell receptors, the adaptive strategy. Antibody-dependent recognition would require prior adaptive response, and MHC I surveillance is the NK-cell mechanism for HOST cells, not bacteria.`
          },
          {
            question: `Which set correctly lists the three major effector outcomes of complement activation?`,
            options: [`Opsonization, membrane attack complex formation, and inflammatory anaphylatoxin release`, `Antibody production, memory cell formation, and clonal expansion`, `Histamine release, fever induction, and interferon secretion`, `Neutralization, agglutination, and class switching`],
            correctAnswer: 0,
            explanation: `Complement's three outcomes are C3b opsonization (tagging for phagocytosis), the MAC lytic pore, and anaphylatoxins (C3a/C5a) that amplify inflammation. Choice B lists adaptive B-cell events; choice C mixes mast-cell and cytokine effects that are not complement products; choice D lists antibody functions (and class switching is a B-cell process).`
          },
          {
            question: `During inflammation, the correct order of neutrophil events is:`,
            options: [`Chemotaxis → diapedesis → adhesion to endothelium`, `Diapedesis → adhesion to endothelium → chemotaxis`, `Phagocytosis → diapedesis → vasodilation`, `Adhesion to endothelium → diapedesis → chemotaxis to the infection site`],
            correctAnswer: 3,
            explanation: `The neutrophil must first stick to the activated vessel wall (adhesion), then squeeze between endothelial cells out of the blood (diapedesis), and only then migrate through tissue along the chemical gradient (chemotaxis) to reach the microbes it will phagocytose. Options placing chemotaxis or diapedesis before adhesion reverse the physical sequence — a cell cannot exit a vessel it has not stopped in.`
          },
          {
            question: `Interferons released by a virus-infected cell primarily act to:`,
            options: [`Lyse the infected cell that released them`, `Directly neutralize free virions in the blood`, `Recruit eosinophils to the infected tissue`, `Induce an antiviral state in neighboring uninfected cells`],
            correctAnswer: 3,
            explanation: `Interferons are a warning signal: neighboring cells respond by degrading RNA and slowing protein synthesis, hobbling viral replication before it starts. They do not lyse the secreting cell (cytotoxic T and NK cells kill infected cells), and direct virion neutralization is an ANTIBODY function. Eosinophil recruitment belongs to antiparasitic and allergic responses.`
          }
        ]
      }
    },
    {
      id: 'imm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Barriers first: skin, mucus, lysozyme, stomach acid, defensins exclude most pathogens before any cell responds
- Innate = fast, pattern-based (PRRs like TLRs binding PAMPs), germline-encoded, no memory; adaptive = slow first time, epitope-specific, with memory
- Dendritic cells are the innate→adaptive bridge: capture antigen in tissue, present it to naive T cells in lymph nodes
- NK cells kill host cells LACKING MHC I ("missing self") — the counter to viral MHC downregulation
- Complement: opsonization (C3b), MAC lysis, anaphylatoxins (C3a/C5a); classical pathway = antibody-triggered, alternative = spontaneous on microbial surfaces
- Inflammation sequence: histamine → vasodilation and permeability → adhesion → diapedesis → chemotaxis; fever and interferons buy time against pathogens system-wide`
    }
  ]
};
