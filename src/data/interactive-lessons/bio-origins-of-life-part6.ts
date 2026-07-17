export const bioOriginsOfLifePart6Data = {
  topicSlug: 'origins-of-life',
  sections: [
    {
      id: 'ori6-intro',
      type: 'text' as const,
      content: `
## Major Evolutionary Transitions

**Part 6 of 7**

After the origin of life and the emergence of eukaryotic cells, several **transformative events** reshaped Earth's biosphere. Understanding this timeline is essential for AP Biology because exam questions frequently ask you to connect environmental changes to evolutionary consequences.

### Key terms for this part
- **Great Oxidation Event (GOE)** — dramatic rise in atmospheric $O_{2}$ (~2.4 Ga) driven by cyanobacterial photosynthesis
- **Cambrian explosion** — rapid diversification of animal phyla (~541–530 Ma)
- **mass extinction** — event in which >75% of species go extinct in a geologically short time
- **adaptive radiation** — rapid diversification of a lineage to fill available ecological niches
- **colonization of land** — transition of life from aquatic to terrestrial environments
      `
    },
    {
      id: 'ori6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Evolutionary Transitions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What caused the Great Oxidation Event (~2.4 Ga)?',
            options: [
              'Oxygenic photosynthesis by cyanobacteria released $O_{2}$ that accumulated in the atmosphere',
              'Volcanic eruptions released massive amounts of $O_{2}$',
              'The breakdown of water by UV radiation produced free oxygen',
              'Aerobic organisms consumed $CO_{2}$ and released $O_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Cyanobacteria evolved oxygenic photosynthesis (using $H_{2}O$ as an electron donor, releasing $O_{2}$). Over hundreds of millions of years, $O_{2}$ accumulated — first oxidizing dissolved iron in the oceans (forming banded iron formations), then building up in the atmosphere.'
          },
          {
            question: 'The Cambrian explosion (~541 Ma) is characterized by:',
            options: [
              'The rapid appearance of most major animal phyla in the fossil record',
              'The first photosynthetic organisms',
              'A mass extinction that killed 96% of marine species',
              'The colonization of land by plants'
            ],
            correctAnswer: 0,
            explanation: 'The Cambrian explosion (~541–530 Ma) marks the geologically sudden appearance of most major animal body plans (phyla) in the fossil record. The causes likely include rising $O_{2}$ levels, the evolution of eyes, and ecological arms races.'
          }
        ]
      }
    },
    {
      id: 'ori6-content2',
      type: 'text' as const,
      content: `
## Timeline of Major Evolutionary Events

| Time | Event | Significance |
|---|---|---|
| **~3.5 Ga** | Oldest microfossils (stromatolites) | First evidence of prokaryotic life |
| **~2.7 Ga** | Cyanobacteria evolve oxygenic photosynthesis | Begin producing $O_{2}$ |
| **~2.4 Ga** | **Great Oxidation Event (GOE)** | Atmosphere shifts from reducing to oxidizing; mass extinction of obligate anaerobes |
| **~2.1 Ga** | Oldest eukaryotic fossils | Cells with nuclei and organelles (post-endosymbiosis) |
| **~1.2 Ga** | Oldest multicellular algae | Multicellularity evolves |
| **~635–540 Ma** | Ediacaran biota | Earliest large, complex multicellular organisms |
| **~541 Ma** | **Cambrian explosion** | Most animal phyla appear rapidly |
| **~470 Ma** | Plants colonize land | Require adaptations: cuticle, stomata, vascular tissue |
| **~375 Ma** | Tetrapods (vertebrates) colonize land | Lobe-finned fish → amphibians (*Tiktaalik*) |
| **~252 Ma** | **Permian-Triassic extinction** | Greatest mass extinction (96% of marine species, 70% of land vertebrates) |
| **~66 Ma** | **Cretaceous-Paleogene extinction** | Asteroid impact; end of non-avian dinosaurs; mammals radiate |

### The Pattern: Extinction → Radiation

After each mass extinction, surviving lineages undergo **adaptive radiation** — rapidly diversifying to fill vacated ecological niches. Example: mammalian radiation after the K-Pg extinction gave rise to bats, whales, primates, and many other orders within ~10 million years.
      `
    },
    {
      id: 'ori6-content3',
      type: 'text' as const,
      content: `
## Deep Dive: Key Transitions

### 1. The Oxygen Revolution

The Great Oxidation Event was both a **catastrophe** and an **opportunity**:

- **Catastrophe**: $O_{2}$ was toxic to obligate anaerobes — it caused the first mass extinction
- **Opportunity**: $O_{2}$ enabled **aerobic respiration**, which yields ~30–32 ATP per glucose vs. ~2 ATP from fermentation
- More energy → larger cells → more complex organisms → multicellularity
- $O_{2}$ also formed the **ozone layer $(O_{3})$**, protecting surface life from UV radiation

### 2. Colonization of Land

Life on land required major adaptations:

**Plants:**
- **Cuticle** — waxy coating to prevent water loss
- **Stomata** — pores for gas exchange
- **Vascular tissue** (xylem/phloem) — transport water and nutrients
- **Seeds and pollen** — reproduction without standing water
- **Lignin** — structural support against gravity

**Animals:**
- **Waterproof skin/exoskeleton** — prevent desiccation
- **Internal gas exchange** (lungs, tracheae) — breathing air
- **Limbs** — locomotion on solid ground
- **Amniotic egg / internal fertilization** — reproduction without water

### 3. Mass Extinctions and Recovery

Earth has experienced **five major mass extinctions** (the "Big Five"):

| # | Name | Time | Cause | % Species Lost |
|---|---|---|---|---|
| 1 | Ordovician-Silurian | ~443 Ma | Glaciation | ~85% |
| 2 | Late Devonian | ~372 Ma | Multiple causes | ~75% |
| 3 | Permian-Triassic | ~252 Ma | Volcanic (Siberian Traps) | ~96% marine |
| 4 | Triassic-Jurassic | ~201 Ma | Volcanic + climate | ~80% |
| 5 | Cretaceous-Paleogene | ~66 Ma | Asteroid impact | ~76% |
      `
    },
    {
      id: 'ori6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Evolutionary Transitions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Great Oxidation Event was caused by ___ performing oxygenic photosynthesis.',
            options: ['cyanobacteria', 'archaea', 'early animals', 'fungi']
          },
          {
            label: 'After each mass extinction, surviving lineages undergo ___, rapidly filling vacated niches.',
            options: ['adaptive radiation', 'genetic drift', 'convergent evolution', 'stabilizing selection']
          },
          {
            label: 'The ___ extinction (~252 Ma) was the largest in Earth\'s history, eliminating ~96% of marine species.',
            options: ['Permian-Triassic', 'Cretaceous-Paleogene', 'Ordovician-Silurian', 'Late Devonian']
          }
        ],
        correctAnswers: ['cyanobacteria', 'adaptive radiation', 'Permian-Triassic'],
        hint1: 'These photosynthetic prokaryotes are also the ancestors of chloroplasts.',
        hint2: 'This process explains why mammal diversity exploded after the dinosaurs went extinct.',
        hint3: 'Often called "The Great Dying" — caused by massive volcanic eruptions (Siberian Traps).',
        explanation: 'Cyanobacteria drove the GOE through oxygenic photosynthesis. Adaptive radiation follows mass extinctions as survivors diversify. The Permian-Triassic extinction ("The Great Dying") was the most severe, caused by the Siberian Traps volcanic event.'
      }
    },
    {
      id: 'ori6-summary',
      type: 'text' as const,
      content: `
## Summary — Part 6

- **Great Oxidation Event** (~2.4 Ga): cyanobacterial $O_{2}$ transformed Earth's atmosphere, caused the first mass extinction of anaerobes, and enabled aerobic respiration
- **Ozone layer** formation protected surface life from UV radiation
- **Cambrian explosion** (~541 Ma): most animal phyla appeared rapidly, likely driven by rising $O_{2}$, predator-prey arms races, and Hox gene innovation
- **Colonization of land** required key adaptations (cuticle, vascular tissue, lungs, amniotic egg)
- **Five major mass extinctions** shaped the tree of life; each was followed by **adaptive radiation**
- The Permian-Triassic ("The Great Dying") was the largest; the K-Pg extinction cleared the way for mammalian dominance
- AP Biology tests the connection between **environmental change** and **evolutionary response**

**Next up:** Part 7 — AP Exam Practice Problems
      `
    }
  ]
};
