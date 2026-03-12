export const mcatGeneticsPart6Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge6-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 6 of 7 — Speciation & Phylogenetics**

### Speciation

**Biological species concept**: Species = organisms that can interbreed and produce fertile offspring

| Type | Barrier | Example |
|------|---------|---------|
| **Allopatric** | Geographic isolation | River divides population |
| **Sympatric** | Reproductive isolation (same location) | Polyploidy in plants |

### Reproductive Barriers

**Prezygotic** (prevent mating/fertilization):
- Temporal isolation (different mating seasons)
- Behavioral isolation (different courtship rituals)
- Habitat isolation (different microhabitats)
- Mechanical isolation (incompatible anatomy)
- Gametic isolation (gametes can't fuse)

**Postzygotic** (hybrid problems):
- Hybrid inviability (embryo doesn't survive)
- Hybrid sterility (mule = horse $\\times$ donkey)
- Hybrid breakdown (F2 generation problems)

### Phylogenetics

- **Homologous structures**: Same Origin, different function (human arm vs. whale flipper) → common ancestor
- **Analogous structures**: Different origin, same function (bird wing vs. insect wing) → convergent evolution
- **Vestigial structures**: Reduced/nonfunctional remnants (human appendix, whale hip bones)`
    },
    {
      id: 'ge6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Speciation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two species of frogs live in the same pond but breed in different months. This is an example of:`,
            options: [`Temporal (seasonal) isolation — a prezygotic barrier`, `Postzygotic isolation`, `Allopatric speciation`, `Hybrid sterility`],
            correctAnswer: 0,
            explanation: `Temporal isolation means the two species breed at different times, preventing interbreeding. It's prezygotic because it prevents mating from occurring in the first place.`
          }
        ]
      }
    },
    {
      id: 'ge6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Allopatric: geographic separation. Sympatric: same location, different mechanism.
- Prezygotic barriers prevent mating; postzygotic barriers reduce hybrid fitness
- Homologous = same origin = common ancestor. Analogous = convergent evolution.
- Species concept: can interbreed + produce FERTILE offspring`
    }
  ]
};
