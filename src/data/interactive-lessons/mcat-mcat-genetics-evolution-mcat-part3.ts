export const mcatGeneticsPart3Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge3-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 3 of 7 — Sex-Linked Inheritance & Pedigrees**

### X-Linked Inheritance

- Males (XY) only have ONE X chromosome → hemizygous
- X-linked recessive diseases affect males more (no second X to compensate)
- Carrier females ($X^AX^a$) pass the trait to ~50% of sons

### Common X-Linked Recessive Diseases

- Color blindness
- Hemophilia A and B
- Duchenne muscular dystrophy
- G6PD deficiency

### Pedigree Analysis

Key patterns to recognize:

**Autosomal Dominant**: Affected in every generation, males and females equally affected, unaffected parents don't transmit

**Autosomal Recessive**: Can skip generations, often appears in consanguineous (related) parents, 25% of carrier $\\times$ carrier offspring affected

**X-Linked Recessive**: Mostly males affected, carrier mother → 50% sons affected, no male-to-male transmission

**X-Linked Dominant**: Affected fathers pass to ALL daughters (never sons), more females affected

### MCAT Pedigree Strategy

1. Check for male-to-male transmission → if yes, NOT X-linked
2. Check if trait skips generations → if yes, likely recessive
3. Count affected males vs. females → more males = X-linked recessive`
    },
    {
      id: 'ge3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Pedigrees** 🎯`,
      exercise: {
        questions: [
          {
            question: `A trait appears in a grandfather and his grandson through his daughter (who is unaffected). This is most consistent with:`,
            options: [`X-linked recessive — the daughter is a carrier`, `Autosomal dominant`, `Autosomal recessive`, `Mitochondrial inheritance`],
            correctAnswer: 0,
            explanation: `Grandfather ($X^aY$) → Daughter ($X^AX^a$, carrier) → Grandson ($X^aY$, affected). The trait skips the daughter because she has a normal X to compensate. This classic pattern = X-linked recessive.`
          }
        ]
      }
    },
    {
      id: 'ge3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- X-linked recessive: mainly males affected, no male-to-male transmission, carrier females
- Autosomal recessive: can skip generations, 25% risk from carrier parents
- Autosomal dominant: every generation, 50% chance if one parent affected
- Pedigree strategy: check male-to-male, skipping, and sex ratios`
    }
  ]
};
