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

### Vaccination

- **Active immunity**: Exposure to antigen → immune response → memory (vaccines, natural infection)
- **Passive immunity**: Receiving pre-formed antibodies (maternal IgG, antiserum)
  - Passive = immediate but temporary. Active = delayed but long-lasting.`
    },
    {
      id: 'mi6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Immune Response** 🎯',
      exercise: {
        questions: [
          {
            question: 'A newborn has IgG antibodies from its mother. This is an example of:',
            options: ['Passive immunity — antibodies were transferred, not produced by the baby\'s own immune system', 'Active immunity', 'Innate immunity', 'Cell-mediated immunity'],
            correctAnswer: 0,
            explanation: 'Maternal IgG crosses the placenta, providing passive immunity. The baby didn\'t mount its own immune response. This protection is immediate but temporary (fades as maternal antibodies are degraded over months).'
          }
        ]
      }
    },
    {
      id: 'mi6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Three lines of defense: barriers → innate (neutrophils, complement) → adaptive (B and T cells)
- Active immunity: long-lasting, requires time. Passive: immediate but temporary.
- Neutrophils = first responders. Macrophages = APCs + phagocytes.
- Vaccines = active immunity (memory cells formed)`
    }
  ]
};
