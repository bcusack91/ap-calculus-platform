export const bioPhylogeneticsCladisticsPart6Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl6-intro',
      type: 'text' as const,
      content: `# Speciation & Adaptive Radiation on Trees

**Part 6 of 7 — Phylogenetics & Cladistics**

Phylogenetic trees and cladograms illustrate speciation that has occurred: every node marks a point where one lineage split into two. This part connects the shape of a tree to how, where, and how fast speciation happened.

### What happens at a node

Speciation occurs when two populations become **reproductively isolated** from each other.

| Mode | Geography | Example |
|---|---|---|
| **Allopatric speciation** | Populations are geographically isolated by a barrier | A river, mountain range, or land bridge divides a population |
| **Sympatric speciation** | Populations overlap geographically | Apple maggot flies (*Rhagoletis*) that shifted from hawthorn to apple trees |

### Using geography to date a node

When a barrier forms at a known time, sister species on either side of it give a calibration point. The **Isthmus of Panama** closed about 3 million years ago and separated the Pacific from the Caribbean. Many snapping shrimp species come in sister pairs — one on each side — so the node joining each pair is dated by the closing of the isthmus.

### A revised hypothesis: ratites

Ratites are large flightless birds such as ostriches (Africa), rheas (South America), emus (Australia), and kiwis (New Zealand).

- **Older hypothesis:** A flightless ancestor was split apart as the southern supercontinent broke up, so the tree should match the order in which the continents separated.
- **Molecular evidence:** DNA, including ancient DNA from extinct moas and elephant birds, shows that tinamous — birds that can fly — fall *inside* the ratite group, and that kiwis are most closely related to the extinct elephant birds of Madagascar rather than to emus.
- **Revised interpretation:** Flying ancestors dispersed between landmasses, and flightlessness evolved more than once — a case of convergent evolution that the older tree had mistaken for shared ancestry.

### Tempo: gradualism vs. punctuated equilibrium

| Pattern | Description | On a time-scaled tree or fossil record |
|---|---|---|
| **Gradualism** | Evolution occurs slowly over hundreds of thousands or millions of years | Lineages change steadily, so forms drift apart gradually |
| **Punctuated equilibrium** | Evolution occurs rapidly after a long period of stasis | Long stretches of little change, with abrupt shifts near branching points |`
    },
    {
      id: 'phyl6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Speciation on Trees** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two sister species of snapping shrimp live on opposite sides of the Isthmus of Panama, which closed about 3 million years ago. What does the node joining them most likely represent?',
            options: [
              'An ancestral population split in two by the land bridge',
              'A hybrid species formed when the two oceans reconnected',
              'Two unrelated shrimp converging in similar habitats',
              'Sympatric speciation within one ocean after the closure'
            ],
            correctAnswer: 0,
            explanation: 'A node marks a speciation event. The rising land bridge geographically isolated one ancestral shrimp population into Pacific and Caribbean halves — allopatric speciation. The oceans were connected before the closure, not after; sister species are each other\'s closest relatives, not unrelated look-alikes; and they live in different oceans, not in overlapping ranges.'
          },
          {
            question: 'DNA shows that flying tinamous fall inside the ratite group and that kiwis are most closely related to the extinct elephant birds of Madagascar. What does this suggest?',
            options: [
              'Flightlessness evolved more than once after flighted ancestors dispersed',
              'Ratites diverged only as continents split, with no dispersal at all',
              'Kiwis and emus must be sister taxa because they live close together',
              'Molecular data cannot be used to study birds that are now extinct'
            ],
            correctAnswer: 0,
            explanation: 'A flying lineage nested among flightless ones, and a kiwi–elephant bird pairing that does not match continental breakup, both point to flighted ancestors dispersing between landmasses and losing flight independently. Living near each other does not make two species sister taxa, and ancient DNA from extinct birds was part of the evidence.'
          }
        ]
      }
    },
    {
      id: 'phyl6-radiation',
      type: 'text' as const,
      content: `## Adaptive Radiation

**Divergent evolution** occurs when adaptation to new habitats results in phenotypic diversification. Speciation rates can be especially rapid during **adaptive radiation**, as new habitats become available — after colonizing an island, after a mass extinction removes competitors, or after a new trait opens a new way of life.

### What adaptive radiation looks like on a tree

On a time-scaled tree, an adaptive radiation appears as **many nodes clustered within a short span of time**, all descending from a single ancestral lineage.

> 🐦 **Darwin's finches (Galápagos):**
> - A single ancestral finch species colonized the Galápagos from the American mainland
> - Within the last few million years, it diversified into **about 18 species**
> - Each species evolved a beak shape suited to a specific food source:
>   - Large ground finch → large, crushing beak (hard seeds)
>   - Warbler finch → thin, probing beak (insects)
>   - Cactus finch → elongated beak (cactus flowers and fruit)
>   - Woodpecker finch → straight beak plus tool use (insect larvae)

### More radiations

- **Hawaiian honeycreepers** — more than 50 species (many now extinct) from a single colonizing ancestor, with beaks for nectar, seeds, and insects
- **Hawaiian *Drosophila*** — hundreds of fruit fly species on a young island chain
- **Caribbean *Anolis* lizards** — on each large island, lizards evolved into similar forms for twigs, trunks, and treetops. Trees show that each lizard's closest relatives live on its own island, so the matching forms evolved separately on each island: convergent evolution layered on top of divergent radiations.`
    },
    {
      id: 'phyl6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Adaptive Radiation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which conditions are most likely to trigger an adaptive radiation?',
            options: [
              'A colonizing species reaches a habitat with many open niches',
              'A species experiences strong stabilizing selection in a stable habitat',
              'A large population receives constant gene flow from the mainland',
              'A mass extinction leaves no surviving lineages to diversify'
            ],
            correctAnswer: 0,
            explanation: 'Adaptive radiation is driven by ecological opportunity — many unfilled niches and few competitors, as on newly colonized islands or after mass extinctions with survivors. Stabilizing selection and steady gene flow from the mainland work against diversification, and a lineage must survive in order to radiate.'
          },
          {
            question: 'On each of four Caribbean islands, Anolis lizards include a twig form, a trunk form, and a treetop form. A tree shows that each lizard\'s closest relatives live on its own island. What best explains the matching forms?',
            options: [
              'Each form evolved separately on each island',
              'A single lineage of each form spread to every island',
              'Lizards of one form interbreed across islands and stay alike',
              'Each island was colonized by three founders, one of each form'
            ],
            correctAnswer: 0,
            explanation: 'If twig lizards on different islands were one lineage that spread, they would be each other\'s closest relatives. Instead, each lizard groups with the other forms on its own island, so the same forms arose independently on each island — convergent evolution under similar selective pressures.'
          }
        ]
      }
    },
    {
      id: 'phyl6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Speciation & Trees** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Each node on a phylogenetic tree represents a(n)', options: ['speciation event', 'extinction event', 'single mutation', 'migration event'] },
          { label: 'Speciation in populations separated by a geographic barrier is called', options: ['allopatric speciation', 'sympatric speciation', 'adaptive radiation', 'convergent evolution'] },
          { label: 'Rapid diversification of one lineage into many species occupying different niches is', options: ['adaptive radiation', 'stabilizing selection', 'genetic drift', 'convergent evolution'] },
          { label: 'On a time-scaled tree, an adaptive radiation appears as', options: ['many nodes in a short span', 'one long unbranched lineage', 'evenly spaced nodes over time', 'branches that merge again'] }
        ],
        correctAnswers: ['speciation event', 'allopatric speciation', 'adaptive radiation', 'many nodes in a short span'],
        hint1: 'A node is where one lineage splits into two.',
        hint2: 'Allo- means "other": the populations live in different places.',
        hint3: 'A radiation produces a burst of branching soon after new habitats open up.',
        explanation: 'Nodes represent speciation events. Allopatric speciation follows geographic isolation. Adaptive radiation is the rapid diversification of a single lineage into many niche-adapted species, which shows up on a time-scaled tree as a cluster of closely spaced nodes.'
      }
    },
    {
      id: 'phyl6-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Tempo of Evolution** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Rapid evolution after a long period of stasis describes', options: ['punctuated equilibrium', 'gradualism', 'genetic drift', 'gene flow'] },
          { label: 'Slow, steady change over hundreds of thousands or millions of years describes', options: ['gradualism', 'punctuated equilibrium', 'adaptive radiation', 'sympatric speciation'] },
          { label: 'Speciation rates are especially rapid during adaptive radiation because', options: ['new habitats become available', 'mutation rates fall to zero', 'gene flow between groups rises', 'selection pressures disappear'] }
        ],
        correctAnswers: ['punctuated equilibrium', 'gradualism', 'new habitats become available'],
        hint1: 'Punctuated: long pauses broken by sudden bursts.',
        hint2: 'Gradual: a little at a time.',
        hint3: 'Open niches create new selective pressures for different traits.',
        explanation: 'Punctuated equilibrium is rapid evolution after long stasis; gradualism is slow change over hundreds of thousands to millions of years. Adaptive radiations are fast because newly available habitats favor different adaptations in different populations.'
      }
    }
  ]
};
