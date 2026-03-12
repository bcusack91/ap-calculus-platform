export const mcatOrganSysPart7Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os7-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 7 of 7 — Immune System**

### Innate vs. Adaptive Immunity

| Feature | Innate | Adaptive |
|---------|--------|---------|
| Speed | Immediate (0-12 hours) | Slow (days to weeks) |
| Specificity | Broad | Highly specific (antigen-specific) |
| Memory | No | Yes |
| Components | Neutrophils, macrophages, NK cells, complement | T cells, B cells, antibodies |

### Adaptive Immunity

**Humoral (B cells)**:
- B cells → Plasma cells → Antibodies (immunoglobulins)
- Antibodies neutralize, opsonize, activate complement
- **IgG**: Most abundant, crosses placenta
- **IgM**: First responder, pentamer
- **IgA**: Mucosal surfaces (saliva, breast milk)
- **IgE**: Allergies, parasites

**Cell-mediated (T cells)**:
- **CD4+ (Helper T)**: Activate B cells and CD8+ cells
- **CD8+ (Cytotoxic T)**: Kill infected/cancer cells directly
- **T regulatory**: Suppress immune responses (prevent autoimmunity)

### MHC Molecules

- **MHC I**: On ALL nucleated cells. Presents intracellular antigens → recognized by CD8+
- **MHC II**: On APCs only (macrophages, dendritic cells, B cells). Presents extracellular antigens → recognized by CD4+`
    },
    {
      id: 'os7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Immune System** 🎯`,
      exercise: {
        questions: [
          {
            question: `A virus-infected cell would be killed primarily by:`,
            options: [`CD8+ cytotoxic T cells recognizing viral peptides on MHC I`, `B cells and antibodies`, `CD4+ helper T cells`, `Neutrophils`],
            correctAnswer: 0,
            explanation: `Virus-infected cells display viral peptides on MHC I (present on all nucleated cells). CD8+ T cells recognize this and kill the infected cell via perforin/granzyme. This is why MHC I = "license to kill."`
          }
        ]
      }
    },
    {
      id: 'os7-summary',
      type: 'text' as const,
      content: `### Organ Systems — Complete! ✅

From cardiovascular to immune, organ systems make up the bulk of MCAT biology. Know the key structures, functions, and regulatory mechanisms for each system. Integration between systems (e.g., kidney + endocrine, nervous + cardiovascular) is frequently tested.`
    }
  ]
};
