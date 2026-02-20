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

**Mnemonic**: "**G**reatest amount, **M** is fi**M**rst, **A** on **A**ll surfaces, **E** for all**E**rgies"

### Koch's Postulates

1. Organism found in all cases of disease
2. Organism isolated and grown in pure culture
3. Cultured organism causes disease in healthy host
4. Organism re-isolated from new host = original organism`
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
            explanation: `HIV binds CD4 receptor (on helper T cells) + CCR5/CXCR4 co-receptors. As CD4+ T cells are destroyed, the immune system progressively fails. When CD4 count drops below 200, susceptibility to opportunistic infections defines AIDS.`
          }
        ]
      }
    },
    {
      id: 'mi7-summary',
      type: 'text' as const,
      content: `### Microbiology — Complete! ✅

From bacteria to viruses to immune function, microbiology bridges molecular biology with clinical medicine. The MCAT loves testing infectious disease mechanisms, immune responses, and antibody functions. Know Koch's postulates, vaccine types, and immune disorders.`
    }
  ]
};
