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
- **Lysozyme** (tears, saliva, mucus) cleaves bacterial peptidoglycan; **defensins** from epithelial cells punch holes in microbial membranes
- **Stomach acid** (pH ~2) destroys most swallowed microbes

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
- **Dendritic cells**: the **innate→adaptive bridge** and premier antigen-presenting cell — they sample antigen in tissue, migrate to lymph nodes and present it to naive T cells
- **NK cells**: lymphocyte-lineage but innate; kill host cells that **LACK MHC I** ("missing self") — the very trick virus-infected and tumor cells use to hide from T cells
- **Eosinophils** (parasites, allergy), **basophils** and **mast cells** (histamine release, allergy and inflammation)

### Pattern Recognition: PRRs and PAMPs

Innate receptors are **pattern recognition receptors (PRRs)** — e.g., **Toll-like receptors (TLRs)** — that bind **pathogen-associated molecular patterns (PAMPs)**: conserved microbial signatures like LPS, flagellin, and double-stranded RNA. This is why innate immunity is "nonspecific" yet not random: it recognizes broad classes of invaders with fixed, germline-encoded receptors, no prior exposure needed.

### Complement

A cascade of ~30 plasma proteins (made mainly by the liver) with three effector outcomes:

1. **Opsonization** — the fragment **C3b** coats microbes, flagging them for phagocytosis
2. **Membrane attack complex (MAC)** — terminal components form a lytic pore in the pathogen membrane
3. **Anaphylatoxins** — small complement fragments that amplify inflammation and recruit phagocytes

<!-- yield:low -->
- Component names: **C3a** and **C5a** are the anaphylatoxins, and C5a is also a strong neutrophil chemoattractant.
<!-- /yield -->

Activation routes at concept level: the **classical pathway** is triggered by antibody bound to antigen (so it links to adaptive immunity), while the **alternative pathway** fires spontaneously on microbial surfaces with no antibody required — purely innate.

### Inflammation, Fever & Interferons

The inflammation cascade: tissue damage → mast cells release **histamine** → **vasodilation** (redness, heat) and increased capillary permeability (swelling) → neutrophils adhere to endothelium and squeeze out via **diapedesis** → follow chemical gradients (**chemotaxis**, e.g., toward complement fragments and bacterial products) to the site.

**Fever**: pyrogens (e.g., IL-1) reset the hypothalamic set point; moderate fever inhibits some pathogens and speeds immune reactions. **Interferons** are cytokines released by virus-infected cells that warn NEIGHBORING cells to degrade RNA and dampen protein synthesis — an antiviral state that slows viral spread before adaptive immunity arrives.`
    },
    {
      id: 'imm1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Splinter, Hour by Hour

**Problem 1.** A student gets a wooden splinter carrying soil bacteria in her finger. Within hours the site is red, warm, swollen and tender. By day 2 a small amount of pus has formed.

- **(a)** Had she taken an antihistamine at the start, which of the early signs would be blunted, and why?
- **(b)** Suppose instead her neutrophils could not adhere to endothelium. Where would they end up?
- **(c)** What is the pus made of?
- **(d)** With that adhesion defect, would pus still form at the site?

**(a) An antihistamine.** Redness, heat and swelling. Damaged tissue and mast cells release histamine, which dilates arterioles (more warm blood: redness, heat) and makes capillaries leaky (plasma leaks out: swelling). No strain-specific recognition is involved.

**(b) An adhesion defect.** They would stay in the blood. A neutrophil must first tether to activated endothelium, then exit by diapedesis and crawl up the chemical gradient (chemotaxis); without adhesion it flows past the site.

**(c) Pus.** Largely dead neutrophils and debris: neutrophils phagocytose the bacteria and die at the site.

**(d) No pus.** Little or none. With the neutrophils unable to leave the blood, few reach the site to fight and die there.

**Problem 2.** The splinter infection from Problem 1 clears by day 4 without antibiotics. The strain is new to her immune system, and a first adaptive response takes a week or more.

- **(a)** How do her innate cells recognize a strain they have never met?
- **(b)** What tags the bacteria for phagocytes before any antibody exists?
- **(c)** Meanwhile, what are dendritic cells at the wound doing?

**(a) Pattern recognition.** Innate recognition needs no prior exposure: TLRs on macrophages and neutrophils bind conserved PAMPs shared by whole microbial classes, such as LPS on Gram-negative walls.

**(b) Complement without antibody.** The alternative complement pathway fires spontaneously on the bacterial surface and coats it with C3b. Phagocytes engulf the C3b-coated bacteria and clear the small inoculum before an adaptive response is even necessary.

**(c) Dendritic cells.** They sample bacterial antigen at the wound, then migrate through lymphatics to the draining lymph node to present peptides to naive T cells. Innate immunity wins this round, but the adaptive system is being briefed: that hand-off is the dendritic cell's defining job.`
    },
    {
      id: 'imm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Innate Immunity & Inflammation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A virus-infected cell downregulates its MHC I molecules to evade cytotoxic T cells. Which immune cell is specialized to kill it anyway?`,
            options: [`Neutrophil granulocyte`, `Natural killer cell`, `Activated B lymphocyte`, `Eosinophil granulocyte`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `NK cells kill host cells that LACK MHC I ("missing self") — precisely the evasion strategy described. Neutrophils phagocytose extracellular microbes, not host cells; B cells make antibody rather than killing cells directly; eosinophils target parasites. This complementarity (T cells need MHC I present, NK cells attack when it is absent) leaves viruses no easy escape.`
          },
          {
            question: `Macrophages from a mouse that lacks the Toll-like receptor for LPS are exposed to a Gram-negative strain that no mouse has met before. Compared with normal macrophages, their early response will most likely be:`,
            options: [`Normal, since antibodies to the strain take over the receptor's role`, `Unchanged, since TLRs act only after a prior exposure`, `Weaker, since they miss a conserved pattern on the strain`, `Stronger, since missing MHC I on the bacteria triggers them`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `LPS is a conserved PAMP on all Gram-negative walls, and the TLR that reads it is germline-encoded, so normal macrophages respond to a never-seen strain on first contact. Without that receptor this pattern goes unread and the early response is blunted (other PRRs still detect other patterns, such as flagellin). TLRs need no prior exposure, so "only after a prior exposure" is backwards. No antibodies exist yet against a strain never met, so none can take over. Detecting missing MHC I is how NK cells check HOST cells; bacteria have no MHC at all.`
          },
          {
            question: `Which set correctly lists the three major effector outcomes of complement activation?`,
            options: [`Opsonization, membrane attack complex, and inflammation`, `Antibody production, memory cell formation, and clonal expansion`, `Histamine release, fever induction, and interferon secretion`, `Neutralization, agglutination, and class switching`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Complement's three outcomes are opsonization (C3b tags microbes for phagocytosis), the MAC lytic pore, and anaphylatoxins (small complement fragments) that amplify inflammation. Antibody production, memory, and clonal expansion are adaptive B-cell events; histamine, fever, and interferon are mast-cell and cytokine effects that are not complement products; neutralization, agglutination, and class switching are antibody functions (and class switching is a B-cell process).`
          },
          {
            question: `During inflammation, the correct order of neutrophil events is:`,
            options: [`Chemotaxis → diapedesis → adhesion to endothelium`, `Diapedesis → adhesion to endothelium → chemotaxis`, `Phagocytosis → diapedesis → vasodilation`, `Adhesion to endothelium → diapedesis → chemotaxis`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The neutrophil must first stick to the activated vessel wall (adhesion), then squeeze between endothelial cells out of the blood (diapedesis), and only then migrate through tissue along the chemical gradient (chemotaxis) to reach the microbes it will phagocytose. Options placing chemotaxis or diapedesis before adhesion reverse the physical sequence — a cell cannot exit a vessel it has not stopped in.`
          },
          {
            question: `Interferons released by a virus-infected cell primarily act to:`,
            options: [`Lyse the infected cell that released them`, `Directly neutralize free virions in the blood`, `Recruit eosinophils to the infected tissue`, `Induce an antiviral state in neighboring cells`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Interferons are a warning signal: neighboring cells respond by degrading RNA and slowing protein synthesis, hobbling viral replication before it starts. They do not lyse the secreting cell (cytotoxic T and NK cells kill infected cells), and direct virion neutralization is an ANTIBODY function. Eosinophil recruitment belongs to antiparasitic and allergic responses.`
          }
        ]
      }
    },
    {
      id: 'imm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Innate reads patterns.** After the barriers, germline TLRs bind conserved PAMPs within hours, with no prior exposure or memory.
- **Bridge and missing self.** Dendritic cells bring antigen to naive T cells in lymph nodes; NK cells kill cells lacking MHC I.
- **Complement's three outcomes.** C3b opsonizes, the MAC lyses, anaphylatoxins inflame; the alternative route needs no antibody.
- **Inflammation in order.** Histamine dilates and leaks vessels; neutrophils adhere, cross by diapedesis, then follow chemotaxis.

**Common traps**

- **Nonspecific means random.** Innate receptors are fixed and germline-encoded, yet they recognize broad microbial classes by pattern.
- **NK cells needing MHC I.** NK cells attack when MHC I is ABSENT; it is cytotoxic T cells that need MHC I present.
- **Chemotaxis before exit.** A neutrophil must adhere and cross the vessel wall by diapedesis before it follows the gradient.
- **Interferons as killers.** Interferons put neighboring cells into an antiviral state; they do not lyse the cell that released them.

<!-- yield:low -->
**Low-yield extras**

- C3a and C5a are the anaphylatoxins (C5a is also a neutrophil chemoattractant).
<!-- /yield -->`
    }
  ]
};
