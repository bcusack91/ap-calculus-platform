export const bioSpeciationPart1Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 1 of 7 — Species Concepts**

---

| Section |
|---------|
| What a species is: the biological species concept |
| Concept Check: applying the definition |
| Gene flow: the glue that holds a species together |
| Fill in the blanks: isolation and gene flow |
| Where the definition breaks down: other species concepts |
| AP-style check: limits of the definition |
| Part 1 summary |

> 🔑 **Key Concept:** Under the **biological species concept**, a species is a group of populations whose members can interbreed in nature and produce **viable, fertile offspring**. A new species arises when a population becomes **reproductively isolated**, so that gene flow with its parent population stops.

### Microevolution vs. macroevolution

Earlier topics showed **microevolution**: changes in allele frequencies within a population from one generation to the next, caused by natural selection, genetic drift, gene flow and mutation. This topic asks the bigger question: how does one species become two, and how do those splits add up over millions of years to the diversity of life?

| Scale | What changes | Typical time frame | Example |
|-------|--------------|--------------------|---------|
| **Microevolution** | Allele frequencies within one population | A few to thousands of generations | Antibiotic resistance spreading in a bacterial population |
| **Speciation** | One lineage splits into two that no longer exchange genes | Thousands to millions of years (faster in some plants) | Snapping shrimp separated by the Isthmus of Panama |
| **Macroevolution** | Patterns at and above the species level | Millions of years | Adaptive radiation of mammals after the dinosaurs died out |

Speciation is the **bridge** between the two scales. Every branch point (node) on a phylogenetic tree represents a speciation event.

### The biological species concept (BSC)

The AP Biology course uses the biological species concept, proposed by Ernst Mayr in 1942. Each phrase of the definition does a specific job:

| Phrase in the definition | What it means | What it rules out |
|--------------------------|---------------|-------------------|
| "group of populations" | A species is usually many local populations, not one | Treating a single herd or pond as "the species" |
| "interbreed **in nature**" | Mating happens under natural conditions | Crosses that occur only in zoos or labs, such as lions and tigers producing "ligers" in captivity |
| "**viable** offspring" | Hybrid zygotes develop and survive | Crosses whose embryos die early |
| "**fertile** offspring" | The offspring can themselves reproduce | A horse x donkey cross: the mule is healthy but sterile |
| "exchange genetic information" | Alleles move between populations through mating | Populations that never meet or never mate |

#### Worked example: horse, donkey and mule

1. Horses have **64** chromosomes (2n = 64); donkeys have **62** (2n = 62).
2. A horse gamete carries 32 chromosomes and a donkey gamete carries 31, so a mule has **63** chromosomes.
3. The mule is **viable**: it grows into a strong, healthy adult.
4. In meiosis, the mule's horse-derived and donkey-derived chromosomes cannot pair up properly, so it makes few or no functional gametes. The mule is **not fertile**.
5. Conclusion: alleles cannot flow from the horse gene pool into the donkey gene pool through mules, so horses and donkeys are **separate species**.

The key test is never "do they look alike?" or "can they mate?" It is "**can genes flow between them through fertile offspring in nature?**"
      `
    },
    {
      id: 'bio-speciation-macroevolution-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Applying the Biological Species Concept** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Lions and tigers can mate in zoos and produce live cubs, but in the wild they have not been observed to interbreed. Under the biological species concept, how should lions and tigers be classified?',
            options: [
              'As one species, since their matings produce living cubs',
              'As two species, since they do not exchange genes in nature',
              'As one species, since both belong to the same cat genus',
              'As two species, since they differ in coat and body size'
            ],
            correctAnswer: 1,
            explanation: 'The definition requires interbreeding in nature; matings that happen only in captivity do not move alleles between wild gene pools, so lions and tigers are separate species. Producing living cubs, sharing a genus or differing in coat pattern does not decide the question.'
          },
          {
            question: 'A biologist wants to know whether two frog populations that live in the same marsh belong to one species. Which observation would provide the strongest evidence that they are separate biological species?',
            options: [
              'Frogs from the two groups differ in skin color and adult body length',
              'Frogs from the two groups eat different insects in different parts of the marsh',
              'Frogs from the two groups breed in the marsh but never produce fertile hybrids',
              'Frogs from the two groups share most alleles at the loci the biologist sequenced'
            ],
            correctAnswer: 2,
            explanation: 'The biological species concept turns on gene exchange, so populations that breed in the same place without ever producing fertile hybrids are reproductively isolated. Differences in color or diet can exist within one species, and sharing many alleles says nothing about whether genes still flow.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s3-gene-flow',
      type: 'text' as const,
      content: `
### Gene flow: the glue that holds a species together

**Gene flow** is the movement of alleles between populations when individuals (or their gametes, such as pollen) move and reproduce. Gene flow has a **homogenizing** effect: it keeps the allele frequencies of connected populations similar, even if they live in somewhat different environments.

| Situation | Effect on allele frequencies | Outcome |
|-----------|------------------------------|---------|
| High gene flow between populations | Differences are continually erased | Populations stay one species |
| Low gene flow | Some local differences can build up | Populations may become distinct but still interbreed |
| **No gene flow** | Selection, drift and mutation act independently in each population | Populations diverge; reproductive isolation can evolve, and with it a new species |

#### Why stopping gene flow matters

Think of two populations as two buckets of paint connected by a tube. As long as paint flows through the tube, the colors stay mixed. Cut the tube, and anything added to one bucket (a new mutation, a shift from drift, a different selection pressure) stays in that bucket. Over many generations the buckets drift apart in color.

Speciation follows the same logic:

1. **Gene flow is reduced or stopped** (by a mountain range, a new river, a chromosome change, a shift in breeding season).
2. **The populations diverge**: natural selection favors different traits in different environments, genetic drift changes allele frequencies at random, and new mutations arise separately in each.
3. **Reproductive isolation evolves** as a by-product of that divergence: mating signals, breeding times, or chromosome structure no longer match.
4. **Speciation is complete** when, even if the populations meet again, they do not exchange genes.

> 🔑 **AP Connection:** The CED states that speciation may occur when two populations become **reproductively isolated** from each other. On the exam, a strong answer about speciation names the event that stopped gene flow, the evolutionary mechanism that caused divergence, and the barrier that now keeps the populations apart.

### Looks can deceive

- **Similar appearance, different species.** Eastern and western meadowlarks look almost identical, but where their ranges overlap they rarely interbreed, largely because their songs differ. They are separate species.
- **Different appearance, same species.** A Chihuahua and a Great Dane look very different, but all dog breeds can interbreed and produce fertile puppies. Human populations also vary in height, skin color and facial features, yet all humans are one species with extensive gene flow.

Appearance is a clue, not the test. The test is gene exchange.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p1-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Isolation and Gene Flow** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Under the biological species concept, members of a species can interbreed in nature and produce viable, _____ offspring.',
            options: ['fertile', 'identical', 'heterozygous', 'larger']
          },
          {
            label: 'The movement of alleles between populations through migration and mating is called _____.',
            options: ['gene flow', 'genetic drift', 'mutation', 'natural selection']
          },
          {
            label: 'Gene flow tends to make the allele frequencies of two connected populations more _____.',
            options: ['similar', 'different', 'random', 'extreme']
          },
          {
            label: 'Speciation may occur when two populations become reproductively _____ from each other.',
            options: ['isolated', 'connected', 'dependent', 'synchronized']
          }
        ],
        correctAnswers: ['fertile', 'gene flow', 'similar', 'isolated'],
        hint1: 'Think about the mule: healthy, but unable to reproduce.',
        hint2: 'Gene flow mixes gene pools, which erases differences between them.',
        hint3: 'A new species forms when genes can no longer pass between the two populations.',
        explanation: 'A biological species produces viable, fertile offspring. Gene flow moves alleles between populations and keeps their allele frequencies similar. When populations become reproductively isolated, gene flow stops and they can diverge into separate species.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s5-limits',
      type: 'text' as const,
      content: `
### Where the biological species concept breaks down

The BSC is the most widely used definition for sexually reproducing organisms, but it has clear limits. Biologists use other species concepts when the BSC cannot be applied.

| Problem case | Why the BSC fails | Example |
|--------------|-------------------|---------|
| **Asexual organisms** | No interbreeding happens at all, so "can they interbreed?" has no answer | Bacteria dividing by binary fission; bdelloid rotifers |
| **Fossil species** | Extinct organisms cannot be tested for interbreeding | Trilobites, early hominins |
| **Populations that never meet** | Isolated populations cannot be observed interbreeding in nature | Populations on separate islands |
| **Hybridizing species** | Some distinct species exchange a little gene flow and still stay distinct | Many plants, such as oaks; grizzly and polar bears occasionally produce fertile hybrids |

### Other species concepts (for context)

| Concept | A species is defined by... | Most useful for |
|---------|----------------------------|-----------------|
| **Morphological** | Body shape and other structural features | Fossils and asexual organisms; quick field identification |
| **Ecological** | Its niche: how members use resources and interact with the environment | Asexual organisms; species that hybridize but stay ecologically distinct |
| **Phylogenetic** | The smallest group of individuals that share a common ancestor and form one branch on a tree | Any organism with DNA or trait data, including bacteria |

#### Worked example: choosing a concept

A microbiologist isolates two strains of a soil bacterium. They reproduce only by binary fission, so the BSC cannot be applied. Their ribosomal RNA gene sequences differ at many positions, and on a phylogenetic tree built from those sequences each strain sits on its own branch with its closest relatives. The microbiologist uses the **phylogenetic** (or a morphological or ecological) concept and treats them as separate species.

> 🔑 **AP Connection:** Unless a question says otherwise, use the biological species concept. When a question describes asexual organisms or fossils, expect to explain **why** the BSC cannot be applied: there is no interbreeding to observe.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p1-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Limits of the Definition** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For which of the following groups would the biological species concept be most difficult to apply?',
            options: [
              'Sexually reproducing salamanders that share one stream',
              'Wind-pollinated grasses spread across a large prairie',
              'Fossil clams known only from their preserved shells',
              'Migratory songbirds that nest in two separate forests'
            ],
            correctAnswer: 2,
            explanation: 'Fossil clams cannot be tested for interbreeding, so a fossil species must be defined by morphology. The salamanders, grasses and songbirds all reproduce sexually, so their potential to exchange genes can in principle be observed.'
          },
          {
            question: 'Two populations of a land snail live on opposite banks of a river. Each generation, a few snails are carried across on floating debris and mate with snails on the other side. Which prediction is best supported?',
            options: [
              'The two populations will rapidly become separate species',
              'The migrants will slowly make the two populations sterile',
              'Gene flow will tend to keep their allele frequencies similar',
              'Mutation will stop in whichever population receives migrants'
            ],
            correctAnswer: 2,
            explanation: 'Migrants that mate carry alleles between the two gene pools, and this gene flow tends to keep allele frequencies similar, which works against speciation. Gene flow does not cause rapid speciation, does not make populations sterile, and has no effect on the mutation rate.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s7-summary',
      type: 'text' as const,
      content: `
### Part 1 Summary

| Concept | Key detail |
|---------|-----------|
| Biological species concept | Interbreed in nature; viable, fertile offspring |
| Reproductive isolation | Genes no longer pass between populations; this marks speciation |
| Gene flow | Moves alleles between populations and keeps them similar |
| Divergence | Selection, drift and mutation act separately once gene flow stops |
| Limits of the BSC | Asexual organisms, fossils, isolated or hybridizing populations |
| Other concepts | Morphological, ecological, phylogenetic |

**Up next → Part 2: Allopatric Speciation**, where a physical barrier splits a population and the two halves go their separate evolutionary ways.
      `
    }
  ]
};
