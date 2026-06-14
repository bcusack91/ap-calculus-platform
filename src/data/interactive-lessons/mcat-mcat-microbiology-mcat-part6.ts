export const mcatMicroPart6Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi6-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 6 of 7 — Immune Response to Infection**

### First Line of Defense (Barriers)

- Skin (physical), mucous membranes, stomach acid, lysozyme (tears/saliva), normal flora

### Second Line (Innate Immune Response)

| Component | Function |
|-----------|----------|
| **Neutrophils** | First responders, phagocytosis (most abundant WBC) |
| **Macrophages** | Phagocytosis + antigen presentation (APC) |
| **NK cells** | Kill virus-infected and tumor cells (no antigen specificity) |
| **Complement** | Opsonization, membrane attack complex (MAC), inflammation |
| **Inflammation** | Vasodilation, increased permeability, cell recruitment |

### Third Line (Adaptive Immune Response)

| Arm | Cells | Function |
|-----|-------|----------|
| Humoral | B cells → Plasma cells | Produce antibodies (target extracellular pathogens) |
| Cell-mediated | T cells (CD4+, CD8+) | CD4+ helps, CD8+ kills infected cells |

### MHC Presentation (High Yield)

- **MHC class I**: on all nucleated cells; presents *endogenous* (intracellular) antigen to **CD8+** cytotoxic T cells
- **MHC class II**: on antigen-presenting cells (APCs); presents *exogenous* antigen to **CD4+** helper T cells

### Vaccination

- **Active immunity**: Exposure to antigen → immune response → memory (vaccines, natural infection)
- **Passive immunity**: Receiving pre-formed antibodies (maternal IgG, antiserum)
  - Passive = immediate but temporary. Active = delayed but long-lasting.`
    },
    {
      id: 'mi6-worked',
      type: 'text' as const,
      content: `### Worked Example — Mounting a Response to a Virus-Infected Cell

**Scenario:** A passage tracks how the immune system eliminates a cell already infected by a virus. The infected cell is displaying viral peptides. A question asks which T cell recognizes it, and on which MHC molecule the peptide is presented.

**Step 1 — Classify the antigen source.** The virus replicates **inside** the cell, so viral proteins are **endogenous** (made within the cytoplasm), not engulfed from outside.

**Step 2 — Match antigen source to MHC class.** Endogenous antigen is loaded onto **MHC class I**, which essentially every nucleated cell expresses. (Exogenous antigen taken up by phagocytosis would be presented on **MHC class II** by APCs instead.)

**Step 3 — Match MHC class to the responding T cell.** A useful mnemonic is the "rule of 8": MHC class **I** $\\times$ CD**8** = 8, and MHC class **II** $\\times$ CD**4** = 8. So MHC I presents to **CD8+ cytotoxic T cells**, which recognize the infected cell and trigger apoptosis (via perforin/granzyme).

**Step 4 — Note the innate backup.** If the virus *downregulates* MHC I to hide, **NK cells** detect the "missing self" and kill the cell without needing antigen specificity.

> **MCAT takeaway:** Endogenous (intracellular) antigen → MHC I → CD8+ cytotoxic T cells (kill the infected cell). Exogenous antigen → MHC II → CD4+ helper T cells. Remember the rule of 8, and that NK cells cover cells that lose MHC I.`
    },
    {
      id: 'mi6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Immune Response** 🎯`,
      exercise: {
        questions: [
          {
            question: `A newborn has IgG antibodies acquired from its mother. This is an example of:`,
            options: [`Passive immunity — antibodies were transferred, not produced by the baby's own immune system`, `Active immunity`, `Innate immunity`, `Cell-mediated immunity`],
            correctAnswer: 0,
            explanation: `Maternal IgG crosses the placenta, providing passive immunity. The baby did not mount its own immune response. This protection is immediate but temporary (it fades as maternal antibodies are degraded over months).`
          },
          {
            question: `A virus-infected cell displays viral peptides on MHC class I. Which cell is responsible for recognizing and killing it?`,
            options: [`CD8+ cytotoxic T cell`, `CD4+ helper T cell`, `B cell`, `Neutrophil`],
            correctAnswer: 0,
            explanation: `MHC class I presents endogenous (intracellular) antigen to CD8+ cytotoxic T cells (rule of 8: I × 8). The CD8+ cell induces apoptosis of the infected cell via perforin and granzymes. CD4+ helper cells recognize MHC II.`
          },
          {
            question: `Which leukocyte is typically the FIRST responder to a bacterial infection and is the most abundant white blood cell?`,
            options: [`Neutrophil`, `Macrophage`, `NK cell`, `Plasma cell`],
            correctAnswer: 0,
            explanation: `Neutrophils are the most abundant WBC and the earliest phagocytes recruited to a site of bacterial infection. Macrophages arrive somewhat later and double as antigen-presenting cells; plasma cells (from B cells) secrete antibody in the adaptive response.`
          },
          {
            question: `A natural killer (NK) cell destroys a tumor cell that has downregulated its MHC class I molecules. NK cells are notable because they:`,
            options: [`Kill abnormal cells without requiring antigen-specific recognition (part of innate immunity)`, `Require MHC II presentation to act`, `Produce antibodies`, `Only attack extracellular bacteria`],
            correctAnswer: 0,
            explanation: `NK cells are innate lymphocytes that detect "missing self" — cells lacking normal MHC I (a trick viruses and tumors use to evade CD8+ T cells). They kill without prior sensitization or antigen-specific receptors.`
          },
          {
            question: `A patient receives a tetanus vaccine containing inactivated toxoid. The protection generated is best described as:`,
            options: [`Active immunity — the patient's own immune system forms memory cells`, `Passive immunity — pre-formed antibodies are supplied`, `Innate immunity only`, `No immunity, because the toxoid is inactivated`],
            correctAnswer: 0,
            explanation: `A vaccine exposes the immune system to antigen so it mounts its own response and forms memory B and T cells (active immunity) — delayed in onset but long-lasting. Receiving pre-made anti-tetanus antibodies (antiserum) would instead be passive immunity.`
          },
          {
            question: `The complement protein cascade contributes to defense by all of the following EXCEPT:`,
            options: [`Directly producing antigen-specific antibodies`, `Opsonizing pathogens to enhance phagocytosis`, `Forming the membrane attack complex (MAC) to lyse cells`, `Promoting inflammation`],
            correctAnswer: 0,
            explanation: `Complement opsonizes (coats) pathogens, builds the MAC pore to lyse them, and amplifies inflammation. Antibodies, however, are produced by plasma cells (differentiated B cells) of the adaptive response, not by complement proteins.`
          }
        ]
      }
    },
    {
      id: 'mi6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Three lines of defense: barriers → innate (neutrophils, complement, NK cells) → adaptive (B and T cells)
- MHC I (endogenous antigen) → CD8+ cytotoxic T cells; MHC II (exogenous antigen) → CD4+ helper T cells (rule of 8)
- Active immunity: long-lasting, requires time. Passive: immediate but temporary.
- Neutrophils = first responders. Macrophages = APCs + phagocytes. NK cells = kill "missing self."
- Vaccines = active immunity (memory cells formed)`
    }
  ]
};
