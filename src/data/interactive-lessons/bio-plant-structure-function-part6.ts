export const bioPlantStructureFunctionPart6Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt6-intro',
      type: 'text' as const,
      content: `# Plant Reproduction 🌸

Plant reproduction involves a complex life cycle with **alternation of generations** — switching between a multicellular haploid stage and a multicellular diploid stage.

## Alternation of Generations

| Stage | Ploidy | Name | Produces |
|---|---|---|---|
| **Sporophyte** | Diploid (2n) | Spore-producing plant | Spores by **meiosis** |
| **Gametophyte** | Haploid (n) | Gamete-producing plant | Gametes by **mitosis** |

### The Cycle
1. **Sporophyte** (2n) produces **spores** via meiosis
2. Spores develop into **gametophytes** (n) via mitosis
3. Gametophytes produce **gametes** (eggs and sperm) via mitosis
4. **Fertilization** (sperm + egg) produces a **zygote** (2n)
5. Zygote develops into a new **sporophyte** (2n)

### Evolutionary Trend

| Plant Group | Dominant Stage | Gametophyte |
|---|---|---|
| **Bryophytes** (mosses) | Gametophyte dominant | Visible, independent |
| **Ferns** | Sporophyte dominant | Small, independent (prothallus) |
| **Gymnosperms** (conifers) | Sporophyte dominant | Microscopic, dependent on sporophyte |
| **Angiosperms** (flowering plants) | Sporophyte dominant | Microscopic, dependent (pollen grain & embryo sac) |

The evolutionary trend is toward **reduction of the gametophyte** and **dominance of the sporophyte**.`
    },
    {
      id: 'plt6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Alternation of Generations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In angiosperms, the visible "plant" (with stems, leaves, and flowers) is the:',
            options: ['Gametophyte (haploid)', 'Sporophyte (diploid)', 'Both gametophyte and sporophyte equally', 'Neither — it is a unique third stage'],
            correctAnswer: 1,
            explanation: 'In angiosperms, the dominant, visible stage is the sporophyte (diploid, 2n). The gametophyte is reduced to microscopic structures: the pollen grain (male) and the embryo sac (female) within the flower.'
          },
          {
            question: 'Spores are produced by ___ and develop into the ___ generation.',
            options: ['Mitosis; sporophyte', 'Meiosis; gametophyte', 'Meiosis; sporophyte', 'Mitosis; gametophyte'],
            correctAnswer: 1,
            explanation: 'The sporophyte (2n) produces haploid spores via meiosis. These spores divide by mitosis to develop into the gametophyte (n) generation, which will eventually produce gametes.'
          }
        ]
      }
    },
    {
      id: 'plt6-content2',
      type: 'text' as const,
      content: `## Flower Anatomy

Flowers are the reproductive structures of angiosperms. A **complete flower** has four whorls:

| Whorl | Structure | Function |
|---|---|---|
| **Sepals** (calyx) | Green, leaf-like outer parts | Protect developing flower bud |
| **Petals** (corolla) | Colorful inner parts | Attract pollinators |
| **Stamens** (androecium) | Male organs: **anther** + **filament** | Produce pollen (microspores → microgametophytes) |
| **Carpels/Pistil** (gynoecium) | Female organ: **stigma** + **style** + **ovary** | Contain ovules; receive pollen |

### Flower Types

| Type | Description |
|---|---|
| **Complete** | Has all four whorls (sepals, petals, stamens, carpels) |
| **Incomplete** | Missing one or more whorls |
| **Perfect** (bisexual) | Has both stamens AND carpels |
| **Imperfect** (unisexual) | Has only stamens (staminate) OR only carpels (carpellate) |
| **Monoecious** | Male and female flowers on the **same** plant (e.g., corn) |
| **Dioecious** | Male and female flowers on **different** plants (e.g., holly) |

## Pollination

**Pollination** is the transfer of pollen from anther to stigma. This is NOT fertilization!

| Pollination Type | Agent | Flower Adaptations |
|---|---|---|
| **Wind** (anemophily) | Air currents | Small, no scent, no nectar, large feathery stigmas, abundant light pollen |
| **Insect** (entomophily) | Bees, butterflies, etc. | Colorful petals, sweet nectar, fragrant, sticky pollen |
| **Bird** (ornithophily) | Hummingbirds | Red/orange tubular flowers, copious dilute nectar, no scent |
| **Bat** (chiropterophily) | Bats | White/pale flowers, open at night, strong musty scent |

### Self-Pollination vs. Cross-Pollination
- **Self-pollination**: Pollen transfers within the same flower or plant → reduces genetic diversity
- **Cross-pollination**: Pollen transfers between different plants → increases genetic diversity
- Many plants have mechanisms to **prevent** self-pollination (self-incompatibility, timing differences, structural barriers)`
    },
    {
      id: 'plt6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Flower Anatomy & Pollination** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A flower that has stamens but lacks carpels is described as:',
            options: ['Complete and perfect', 'Incomplete and imperfect (staminate)', 'Complete and imperfect', 'Incomplete and perfect'],
            correctAnswer: 1,
            explanation: 'A flower lacking carpels is missing one whorl (incomplete) and has only male reproductive parts (imperfect/unisexual). Since it only has stamens, it is a staminate flower.'
          },
          {
            question: 'Wind-pollinated flowers typically have all of the following EXCEPT:',
            options: ['Large, feathery stigmas', 'Abundant lightweight pollen', 'Bright colorful petals', 'Reduced or absent petals'],
            correctAnswer: 2,
            explanation: 'Wind-pollinated flowers do NOT invest in colorful petals since they don\'t need to attract animal pollinators. They instead have features that maximize pollen capture from the wind: large stigmas, abundant lightweight pollen, and reduced petals.'
          }
        ]
      }
    },
    {
      id: 'plt6-content3',
      type: 'text' as const,
      content: `## Double Fertilization — Unique to Angiosperms

Double fertilization is a defining feature of flowering plants involving **two sperm cells** from a single pollen grain.

### Steps of Double Fertilization

1. Pollen lands on **stigma** → germinates a **pollen tube** down through the style
2. The pollen tube delivers **two sperm cells** to the embryo sac (female gametophyte)
3. **Sperm 1** fuses with the **egg cell** → forms the **zygote** (2n) → develops into the **embryo**
4. **Sperm 2** fuses with the **two polar nuclei** (central cell) → forms the **endosperm** (3n) → nutritive tissue for the developing embryo

| Fertilization Event | Cells Involved | Product | Ploidy |
|---|---|---|---|
| First fertilization | Sperm + egg | Zygote → embryo | 2n (diploid) |
| Second fertilization | Sperm + 2 polar nuclei | Endosperm (nutritive tissue) | 3n (triploid) |

## Seed and Fruit Development

### Seed Structure
After fertilization, the ovule develops into a **seed**:

| Seed Component | Develops From | Function |
|---|---|---|
| **Embryo** | Zygote (2n) | Future plant |
| **Endosperm** | Triple fusion (3n) | Food source for embryo |
| **Seed coat** | Integuments of ovule | Protection |

### Fruit Development
The **ovary wall** develops into the **fruit**, which protects seeds and aids dispersal:

| Fruit Type | Description | Examples |
|---|---|---|
| **Fleshy fruits** | Soft, often sweet pericarp | Peach, tomato, grape |
| **Dry fruits** | Hard or papery pericarp | Sunflower, maple samara, peas |

### Seed Dispersal Mechanisms
- **Wind**: Lightweight seeds with wings or plumes (dandelion, maple)
- **Water**: Buoyant seeds (coconut)
- **Animals**: Fleshy fruits eaten; burrs attach to fur
- **Explosive**: Pods that burst open (touch-me-not, witch hazel)`
    },
    {
      id: 'plt6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Plant Reproduction** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In alternation of generations, the sporophyte is ___ and produces spores by meiosis.',
            options: ['diploid (2n)', 'haploid (n)', 'triploid (3n)', 'tetraploid (4n)']
          },
          {
            label: 'Double fertilization produces a diploid ___ and a triploid endosperm.',
            options: ['zygote', 'spore', 'gamete', 'pollen grain']
          },
          {
            label: 'The ___ develops from the ovary wall after fertilization and functions in seed protection and dispersal.',
            options: ['fruit', 'seed coat', 'petal', 'sepal']
          },
          {
            label: 'The evolutionary trend in plant life cycles is toward dominance of the ___ generation.',
            options: ['sporophyte', 'gametophyte', 'spore', 'gamete']
          }
        ],
        correctAnswers: ['diploid (2n)', 'zygote', 'fruit', 'sporophyte'],
        hint1: 'The sporophyte undergoes meiosis, so it must start with two sets of chromosomes.',
        hint2: 'One sperm + one egg = this structure, which develops into the embryo.',
        hint3: 'This structure is botanically defined as a mature ovary.',
        explanation: 'The sporophyte is the diploid (2n) generation that produces haploid spores via meiosis. Double fertilization produces a diploid zygote (sperm + egg) and triploid endosperm (sperm + 2 polar nuclei). The fruit develops from the ovary wall. Evolution has favored sporophyte dominance, with gametophytes becoming progressively smaller and more dependent.'
      }
    }
  ]
}
