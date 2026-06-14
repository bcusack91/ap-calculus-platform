export const mcatGeneticsPart6Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge6-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 6 of 7 — Speciation & Phylogenetics**

### Speciation

**Biological species concept**: A species is a group of organisms that can interbreed and produce **fertile** offspring.

| Type | Barrier | Example |
|------|---------|---------|
| **Allopatric** | Geographic isolation | A river divides a population |
| **Sympatric** | Reproductive isolation in the same location | Polyploidy in plants |

### Reproductive Barriers

**Prezygotic** (prevent mating or fertilization — no zygote forms):
- Temporal isolation (different mating seasons or times of day)
- Behavioral isolation (different courtship rituals or signals)
- Habitat isolation (different microhabitats within the same region)
- Mechanical isolation (incompatible reproductive anatomy)
- Gametic isolation (sperm and egg cannot fuse)

**Postzygotic** (a hybrid forms but has reduced fitness):
- Hybrid inviability (the embryo dies)
- Hybrid sterility (the mule = horse $\\times$ donkey is sterile)
- Hybrid breakdown (the F2 generation is weak or sterile)

### Phylogenetics

- **Homologous structures**: same evolutionary origin, possibly different function (human arm vs. whale flipper) → indicate **common ancestry** (divergent evolution)
- **Analogous structures**: different origin, similar function (bird wing vs. insect wing) → result from **convergent evolution**
- **Vestigial structures**: reduced, nonfunctional remnants (human appendix, whale hip bones)

### Patterns and Rates

- **Convergent evolution**: unrelated lineages independently evolve similar traits (analogous structures)
- **Divergent evolution**: related lineages accumulate differences (homologous structures)
- **Coevolution**: two species reciprocally drive each other's evolution (e.g., flower and pollinator)
- **Gradualism** (slow, steady change) vs. **punctuated equilibrium** (long stasis interrupted by rapid bursts)`
    },
    {
      id: 'ge6-worked',
      type: 'text' as const,
      content: `### Worked Example — Classifying a Reproductive Barrier and the Mode of Speciation

**Problem.** Two populations of a fly were once a single species. A mountain range rose between them, and after thousands of generations of separation they were brought back into contact. When researchers place them together, the flies court each other, but females of population A reject the courtship "song" of population B males, so no mating occurs. (a) Is the isolating barrier prezygotic or postzygotic, and which specific type is it? (b) What overall mode of speciation does this scenario illustrate?

**Step 1 — Prezygotic vs. postzygotic.** The barrier acts *before* fertilization — no zygote is ever formed because mating doesn't happen. So it is a **prezygotic** barrier.

**Step 2 — Identify the specific type.** The females reject the courtship song; this is a difference in mating behavior/signals. That is **behavioral isolation** (a prezygotic barrier).

**Step 3 — Identify the mode of speciation.** The divergence began while the populations were **geographically separated** by the mountain range. Speciation driven by an extrinsic geographic barrier is **allopatric speciation**. The reproductive isolation that we now observe on secondary contact evolved *during* that geographic separation.

**Conclusion.** (a) Prezygotic, specifically behavioral isolation. (b) Allopatric speciation. Note how the MCAT often layers concepts: the *mode* (allopatric) describes how populations were separated, while the *barrier type* (prezygotic/behavioral) describes the mechanism now preventing gene flow.`
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
            explanation: `Temporal isolation means the two species breed at different times, preventing interbreeding. It is prezygotic because it prevents mating (and thus fertilization) from occurring in the first place.`
          },
          {
            question: `A mule (horse $\\times$ donkey) is robust and healthy but cannot produce offspring. This represents which type of reproductive barrier?`,
            options: [`Postzygotic — hybrid sterility`, `Prezygotic — gametic isolation`, `Prezygotic — mechanical isolation`, `Postzygotic — hybrid inviability`],
            correctAnswer: 0,
            explanation: `A viable but sterile hybrid is the definition of hybrid sterility, a POSTzygotic barrier (the hybrid forms but cannot reproduce). Horses (2n = 64) and donkeys (2n = 62) produce a mule whose chromosomes cannot pair properly in meiosis, so it cannot make functional gametes.`
          },
          {
            question: `The wing of a bird and the wing of an insect perform the same function (flight) but evolved independently from different ancestral structures. These are:`,
            options: [`Analogous structures, the product of convergent evolution`, `Homologous structures, the product of divergent evolution`, `Vestigial structures`, `Homologous structures showing common ancestry`],
            correctAnswer: 0,
            explanation: `Analogous structures share function but not evolutionary origin; they arise via convergent evolution when unrelated lineages face similar selective pressures. Homologous structures (e.g., bird wing vs. bat wing vs. human arm) share a common ancestral origin even if their functions differ.`
          },
          {
            question: `In plants, a single individual sometimes undergoes a doubling of its chromosome number (polyploidy) and can no longer interbreed with the parent population, instantly forming a new species in the same location. This is an example of:`,
            options: [`Sympatric speciation`, `Allopatric speciation`, `Gradualism`, `Gametic isolation between populations`],
            correctAnswer: 0,
            explanation: `Polyploidy creates reproductive isolation WITHOUT geographic separation — the new polyploid lives in the same area as its parents but cannot produce fertile offspring with them. Speciation in the same geographic location is SYMPATRIC, and polyploidy is its classic plant example.`
          },
          {
            question: `According to the model of punctuated equilibrium, the fossil record should typically show:`,
            options: [`Long periods of little morphological change interrupted by brief bursts of rapid change`, `A smooth, continuous gradient of change at a constant rate`, `No change at all over geologic time`, `Change only in response to gene flow`],
            correctAnswer: 0,
            explanation: `Punctuated equilibrium proposes that species remain morphologically stable (stasis) for long stretches, then change rapidly during short intervals (often associated with speciation events). This contrasts with gradualism, which predicts slow, steady, continuous change.`
          }
        ]
      }
    },
    {
      id: 'ge6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Allopatric: geographic separation drives divergence. Sympatric: divergence in the same location (e.g., polyploidy).
- Prezygotic barriers prevent mating/fertilization; postzygotic barriers reduce hybrid fitness (inviability, sterility, breakdown)
- Homologous = same origin = common ancestry (divergent). Analogous = same function, different origin = convergent evolution.
- Species concept: must interbreed AND produce FERTILE offspring
- Gradualism (steady change) vs. punctuated equilibrium (stasis punctuated by rapid bursts)`
    }
  ]
};
