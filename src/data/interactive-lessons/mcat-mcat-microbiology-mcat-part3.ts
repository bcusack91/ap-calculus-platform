export const mcatMicroPart3Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi3-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 3 of 7 — Bacterial Genetics & Antibiotic Resistance**

### Horizontal Gene Transfer

| Mechanism | How it works |
|-----------|-------------|
| **Transformation** | Bacteria picks up free DNA from environment |
| **Transduction** | Bacteriophage transfers DNA between bacteria |
| **Conjugation** | Direct DNA transfer via sex pilus (F plasmid) |

### Antibiotic Resistance Mechanisms

| Mechanism | Example |
|-----------|---------|
| Enzyme degradation | $\\beta$-lactamase destroys penicillin |
| Target modification | Altered ribosome binding site → macrolide resistance |
| Efflux pumps | Pump drug out of cell → tetracycline resistance |
| Decreased permeability | Porin mutations → reduced drug entry |

### MCAT Connection: Antibiotic Targets

| Antibiotic Class | Target | Spectrum |
|-----------------|--------|----------|
| $\\beta$-lactams (penicillin) | Cell wall synthesis | Bacteria only |
| Aminoglycosides | 30S ribosomal subunit | Bacteria only |
| Macrolides (erythromycin) | 50S ribosomal subunit | Bacteria only |
| Fluoroquinolones | DNA gyrase (topoisomerase) | Bacteria only |
| Sulfonamides | Folate synthesis | Bacteria only |

Antibiotics DON'T work against viruses — viruses use host machinery!`
    },
    {
      id: 'mi3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacterial Genetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A bacterium acquires antibiotic resistance after being infected by a bacteriophage carrying resistance genes from another bacterium. This is:`,
            options: [`Transduction — phage-mediated DNA transfer between bacteria`, `Transformation`, `Conjugation`, `Mutation`],
            correctAnswer: 0,
            explanation: `Transduction = bacteriophage accidentally packages bacterial DNA and transfers it to a new host. Generalized transduction transfers random genes; specialized transduction transfers genes near the phage integration site.`
          }
        ]
      }
    },
    {
      id: 'mi3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Horizontal gene transfer: Transformation (naked DNA), Transduction (phage), Conjugation (pilus)
- Antibiotic resistance: enzyme degradation, target modification, efflux pumps
- Know antibiotic targets: cell wall, 30S/50S ribosome, DNA gyrase, folate
- Antibiotics target bacteria, NOT viruses`
    }
  ]
};
