export const bioSpeciationPart7Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 7 of 7 — AP Review**

---

| Section |
|---------|
| The big picture: a concept map from alleles to the history of life |
| Integrated check: from populations to species |
| One case, every idea: the island lizards |
| Fill in the concept map |
| Connections to other units and a self-check |
| Integrated check: patterns and mechanisms |
| Final summary |

> 🔑 **Key Concept:** Speciation links the two scales of evolution. **Microevolution** (selection, drift, mutation, gene flow) changes allele frequencies; when **gene flow stops**, those changes accumulate until **reproductive isolation** makes two species. Repeated over millions of years, speciation and **extinction** together produce the **patterns of macroevolution**: tempo, adaptive radiation and the rise and fall of diversity.

### The concept map

| Link | Idea | What causes it | Where it was taught |
|------|------|----------------|---------------------|
| 1 | A species is a gene pool held together by gene flow | Interbreeding in nature with viable, fertile offspring | Part 1 |
| 2 | Gene flow is reduced or stopped | A geographic barrier (allopatric), or polyploidy, a habitat shift or mate choice (sympatric) | Parts 2–3 |
| 3 | The separated groups diverge | Natural selection in different environments, genetic drift, new mutations | Parts 2–3 |
| 4 | Reproductive isolation evolves | Prezygotic barriers (habitat, temporal, behavioral, mechanical, gametic) and postzygotic barriers (reduced hybrid viability, reduced hybrid fertility, hybrid breakdown) | Part 4 |
| 5 | Speciation happens at different tempos | Gradualism vs. punctuated equilibrium; rapid adaptive radiation when new habitats open | Part 5 |
| 6 | Species are lost | Background extinction; mass extinctions in times of ecological stress; human-driven extinction | Part 5 |
| 7 | Diversity rises or falls | Speciation rate minus extinction rate; extinction opens niches for new radiations | Parts 5–6 |

### Reading the map as a cause-and-effect chain

1. **Gene flow keeps a species together.** As long as alleles move between populations, local differences are erased.
2. **Cut gene flow and evolution acts separately.** Selection, drift and mutation now change each group's allele frequencies independently.
3. **Isolation is a by-product.** Nobody "aims" for a new species. Differences in mating signals, timing or chromosomes build up as side effects of divergence (Dodd's fruit flies).
4. **Hybrid fitness decides what happens on contact.** Unfit hybrids lead to reinforcement of prezygotic barriers; fit hybrids lead to fusion.
5. **Many speciation events make macroevolutionary patterns.** Clusters of branch points on a tree mark adaptive radiations; long unbranched stretches with little change mark stasis.
6. **Extinction resets the stage.** A mass extinction lowers diversity, then the survivors radiate into the empty niches.

### Mechanism vs. pattern

A frequent exam trap is mixing up **mechanisms** (processes that cause change) with **patterns** (what we observe in the record).

| Mechanisms (causes) | Patterns (outcomes) |
|---------------------|---------------------|
| Natural selection, genetic drift, mutation, gene flow | Gradualism, punctuated equilibrium |
| Geographic isolation, polyploidy, habitat differentiation, sexual selection | Divergent evolution, adaptive radiation |
| Prezygotic and postzygotic barriers | Convergent evolution |
| Ecological stress, human activity | Mass extinction, changes in diversity over time |
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Integrated Check — From Populations to Species** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A storm carries a few lizards from the mainland to a distant island with different vegetation. Which set of factors best accounts for the rapid divergence of the island population from the mainland population?',
            options: [
              'Founder effect, genetic drift, and selection by a new environment',
              'Continued gene flow, a large population, and the same selection',
              'Acquired traits, steady gene flow, and an environment like home',
              'Hybridization, chromosome doubling, and contact with the parents'
            ],
            correctAnswer: 0,
            explanation: 'A small founding group carries only some of the mainland alleles, drift acts strongly in a small population, and the new vegetation imposes different selection, all of which speed divergence. Gene flow and identical selection would prevent divergence, acquired traits are not inherited, and hybridization with chromosome doubling describes sympatric speciation in plants.'
          },
          {
            question: 'After 5,000 generations on the island, which observation would provide the strongest evidence that the island lizards have become a separate species?',
            options: [
              'Island lizards have longer hind limbs than mainland lizards',
              'Mainland and island lizards differ at many sequenced loci',
              'Lizards from the two groups produce no fertile young together',
              'Island lizards have been separated for thousands of generations'
            ],
            correctAnswer: 2,
            explanation: 'Under the biological species concept, the test is whether the two groups can produce fertile offspring together; failure to do so shows reproductive isolation. Differences in limb length or at many loci show divergence, and long separation shows opportunity, but neither proves that gene flow could not resume.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s3-case',
      type: 'text' as const,
      content: `
### One case, every idea: the island lizards

Follow one hypothetical lineage through the whole topic.

| Stage | What happens | Concept |
|-------|--------------|---------|
| 1 | A storm carries 12 lizards to an island 100 km offshore | **Dispersal**; **founder effect** |
| 2 | No lizards cross back; the sea is a barrier for lizards but not for birds | **Allopatric** isolation; barrier depends on mobility |
| 3 | Island trees have thin branches; lizards with shorter limbs grip better and survive | **Natural selection** in a new environment |
| 4 | In the small population, a rare allele for a yellow throat fan rises to high frequency by chance | **Genetic drift** |
| 5 | Mainland females ignore yellow-fanned males in lab trials | **Behavioral isolation** (prezygotic) |
| 6 | Hybrids from forced lab crosses are healthy but sterile | **Reduced hybrid fertility** (postzygotic) |
| 7 | Over 2 million years the island species splits into five species on different perches: canopy, trunk, grass, rocks, ground | **Divergent evolution**; **adaptive radiation** |
| 8 | Fossils show limb length changing little for a million years, then shifting quickly as each new species forms | **Punctuated equilibrium** |
| 9 | People introduce a predatory snake; three of the five species go extinct within a century | **Human-driven extinction** (invasive species) |
| 10 | Island diversity falls from 5 species to 2 | **Diversity = speciation − extinction** |

#### Worked FRQ-style answer: stage 7

**Prompt:** Explain how one colonizing species could give rise to five species on a single island.

- **Claim:** The island lineage underwent an adaptive radiation.
- **Evidence:** The five species are each other's closest relatives and each uses a different perch type.
- **Reasoning:** The island had open niches with no competing lizards. Populations using different perches experienced different selection pressures on limb length and body size. Because lizards tend to mate where they live, gene flow between perch types was reduced (**habitat isolation**), so the populations diverged and became reproductively isolated, producing several species in a short time.

#### Worked FRQ-style answer: stage 9

**Prompt:** Predict how the arrival of the snake will affect the island's lizard diversity over the next 100 years and justify your prediction.

- **Prediction:** Diversity will decrease.
- **Justification:** The lizards evolved without this predator and lack defenses against it, so extinction rates will rise far above the rate at which new lizard species can form; with extinction exceeding speciation, the number of species falls.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Concept Map** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Speciation begins when _____ between two populations is reduced or stopped.',
            options: ['gene flow', 'mutation', 'natural selection', 'competition']
          },
          {
            label: 'A tetraploid plant arising among its diploid parents is an example of _____ speciation.',
            options: ['sympatric', 'allopatric', 'convergent', 'gradual']
          },
          {
            label: 'A fossil record showing long stasis broken by rapid change fits the model of _____.',
            options: ['punctuated equilibrium', 'gradualism', 'convergent evolution', 'hybrid breakdown']
          },
          {
            label: 'The diversity of a group increases when the speciation rate is _____ the extinction rate.',
            options: ['greater than', 'less than', 'equal to', 'independent of']
          }
        ],
        correctAnswers: ['gene flow', 'sympatric', 'punctuated equilibrium', 'greater than'],
        hint1: 'What keeps a species together? Speciation starts when that stops.',
        hint2: 'Polyploidy needs no geographic barrier.',
        hint3: 'Diversity changes by new species formed minus species lost.',
        explanation: 'Speciation begins when gene flow stops. Polyploidy among the parents is sympatric speciation. Stasis broken by rapid change is punctuated equilibrium. Diversity rises when speciation outpaces extinction.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s5-connections',
      type: 'text' as const,
      content: `
### Connections to other units

| This topic | Connects to | The link |
|------------|-------------|----------|
| Polyploidy | **Unit 5 (Heredity):** meiosis and nondisjunction | Nondisjunction of all chromosomes produces 2n gametes; an odd number of sets cannot pair evenly in meiosis |
| Divergence after isolation | **Unit 7:** natural selection, genetic drift, Hardy-Weinberg | Once gene flow between two populations stops, selection, drift and mutation (other departures from Hardy-Weinberg equilibrium) change each population's allele frequencies independently |
| Speciation events | **Unit 7:** phylogenetic trees | Every node on a tree represents a speciation event; a time-scaled tree shows radiations as clusters of nodes |
| Mass extinctions | **Unit 8 (Ecology):** disruptions to ecosystems | Ecological stress and invasive species change communities and can drive species to extinction |
| Small, isolated populations | **Unit 8:** population ecology and biodiversity | Small populations have less genetic variation and are more vulnerable to extinction |

### Self-check: can you do each of these?

| Skill | If not, revisit |
|-------|-----------------|
| State the biological species concept and give two cases where it cannot be applied | Part 1 |
| Explain why a geographic barrier can split one species but not another | Part 2 |
| Calculate chromosome numbers for a tetraploid, a triploid and an allopolyploid | Part 3 |
| Classify any scenario into one of the eight reproductive barriers | Part 4 |
| Tell gradualism from punctuated equilibrium on a fossil graph | Part 5 |
| Explain how extinction can lead to adaptive radiation | Part 5 |
| Identify variables, controls and the null hypothesis in a mate-choice experiment, and run chi-square | Part 6 |
| Calculate the change in diversity from speciation and extinction counts | Parts 5–6 |
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**Integrated Check — Patterns and Mechanisms** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A time-scaled phylogenetic tree shows that eight island lizard species form one clade whose branch points all fall within 2 million years after the island formed. Their mainland relatives show branch points spread evenly over 20 million years. Which explanation is best supported?',
            options: [
              'Open niches on the new island allowed a burst of speciation',
              'Island lizards changed faster because they needed new traits',
              'Mainland lizards stopped forming species once the island arose',
              'The island species are unrelated colonists with similar looks'
            ],
            correctAnswer: 0,
            explanation: 'Branch points clustered soon after the island formed are the signature of an adaptive radiation into newly available habitats. Need does not produce heritable traits, the mainland tree shows speciation continuing, and the island species share one branch rather than being unrelated look-alikes.'
          },
          {
            question: 'Which statement correctly connects the formation of polyploid plant species to events in meiosis?',
            options: [
              'Crossing over between sister chromatids can add a full set of chromosomes',
              'Independent assortment can double the chromosome number of a gamete',
              'Nondisjunction of every chromosome pair can produce diploid gametes',
              'Errors in DNA replication can attach an extra set to each gamete'
            ],
            correctAnswer: 2,
            explanation: 'When all homologs fail to separate, a gamete receives two full sets (2n), and the union of two such gametes yields a tetraploid. Crossing over swaps segments without adding sets, independent assortment shuffles chromosomes without changing their number, and replication errors change sequences, not whole sets.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s7-final',
      type: 'text' as const,
      content: `
### Final Summary

| Big question | Short answer |
|--------------|--------------|
| What is a species? | A group that interbreeds in nature and produces viable, fertile offspring |
| What starts speciation? | Anything that reduces gene flow: geography, polyploidy, habitat shifts, mate choice |
| What finishes it? | Reproductive isolation: prezygotic or postzygotic barriers |
| How fast is it? | Gradual or punctuated; especially fast in adaptive radiations |
| What removes species? | Background and mass extinctions; human activity |
| What sets diversity? | Speciation rate minus extinction rate |

> 🔑 **AP Connection:** The strongest answers on this topic always name the **process** (what stopped gene flow and what drove divergence) and the **evidence** (the barrier, the data, or the tree pattern). Practice explaining the chain from allele frequencies to new species in your own words, and you will be ready for any speciation question on the exam.
      `
    }
  ]
};
