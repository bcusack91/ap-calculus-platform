export const mcatMicroPart1Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi1-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 1 of 7 — Bacteria: Structure & Classification**

### Bacterial Cell Structure

| Structure | Function | Notes |
|-----------|----------|-------|
| Cell wall | Protection, shape | Peptidoglycan |
| Plasma membrane | Selective barrier | No cholesterol |
| Nucleoid | Circular DNA | No membrane-bound nucleus |
| Ribosomes | Protein synthesis | 70S (target for antibiotics!) |
| Plasmid | Accessory genes | Often carry antibiotic resistance |
| Flagella | Motility | Chemotaxis |
| Pili | Attachment, conjugation | Sex pili for DNA transfer |
| Capsule | Immune evasion | Prevents phagocytosis |

### Gram Stain Classification

| Feature | Gram Positive | Gram Negative |
|---------|-------------|-------------|
| Stain color | Purple/Blue | Pink/Red |
| Cell wall | Thick peptidoglycan | Thin peptidoglycan |
| Outer membrane | No | Yes (contains LPS) |
| LPS (endotoxin) | No | Yes |

### LPS (Lipopolysaccharide) — HIGH YIELD

- Found ONLY in Gram-negative outer membrane
- Released when bacteria lyse → triggers massive immune response
- Can cause septic shock, fever, disseminated intravascular coagulation (DIC)`
    },
    {
      id: 'mi1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacteria Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A Gram-negative bacterium is more difficult to treat with certain antibiotics because:`,
            options: [`The outer membrane acts as an additional barrier, blocking drug entry`, `It has a thicker peptidoglycan layer`, `It lacks a cell wall`, `It has no ribosomes`],
            correctAnswer: 0,
            explanation: `Gram-negative bacteria have an outer membrane (with LPS) that many antibiotics cannot penetrate. This is why Gram-negative infections (E. coli, Pseudomonas) are often harder to treat than Gram-positive.`
          }
        ]
      }
    },
    {
      id: 'mi1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Gram-positive: thick peptidoglycan, no outer membrane (stains purple)
- Gram-negative: thin peptidoglycan + outer membrane with LPS (stains pink)
- LPS = endotoxin → fever, shock
- Bacterial ribosomes = 70S (antibiotics target these)`
    }
  ]
};
