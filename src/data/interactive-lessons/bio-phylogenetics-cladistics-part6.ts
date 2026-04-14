export const bioPhylogeneticsCladisticsPart6Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl6-intro',
      type: 'text' as const,
      content: `# Biogeography & Phylogeny

**Part 6 of 7 — Phylogenetics & Cladistics**

**Biogeography** is the study of the geographic distribution of organisms. When combined with phylogenetics, it provides powerful evidence for evolution — showing how geological events, dispersal, and vicariance have shaped the tree of life.

### Continental drift & evolution

The breakup of the supercontinent **Pangaea** (~200 million years ago) physically separated populations of organisms, leading to **vicariance** — speciation caused by geographic barriers.

> 🌍 **Example:** Ratites (large flightless birds) are found on separate continents:
> - Ostriches (Africa)
> - Emus (Australia)
> - Rheas (South America)
> - Kiwis (New Zealand)
>
> Their phylogenetic tree matches the pattern of continental breakup — they diverged as landmasses separated, not because they flew between continents.

### Vicariance vs. dispersal

| Mechanism | Definition | Example |
|---|---|---|
| **Vicariance** | A population is split by a geographic barrier (mountain, ocean, river) | Isthmus of Panama rising and splitting marine populations |
| **Dispersal** | Organisms move across a barrier to colonize a new area | Finches flying to the Galápagos Islands from South America |

Both mechanisms produce geographic patterns in phylogenies, but they make **different predictions** about the timing and branching order of speciation events.`
    },
    {
      id: 'phyl6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Biogeography Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Related species of freshwater fish are found on opposite sides of a mountain range that formed 5 million years ago. What is the most likely explanation?',
            options: [
              'Vicariance — the mountain range split an ancestral population, leading to speciation',
              'Convergent evolution — the fish evolved similar traits independently',
              'The fish migrated across the mountain during winter months',
              'The fish were placed there by human activity'
            ],
            correctAnswer: 0,
            explanation: 'Vicariance occurs when a geographic barrier (like a mountain range) physically divides a population, preventing gene flow and allowing independent evolution. Freshwater fish cannot easily cross mountain barriers, making vicariance the most parsimonious explanation for related species on opposite sides.'
          },
          {
            question: 'The phylogenetic tree of ratite birds (ostrich, emu, rhea, kiwi) mirrors the order in which the continents of Gondwana separated. What does this suggest?',
            options: [
              'Ratite speciation was driven by continental drift separating ancestral populations',
              'Ratites independently evolved flightlessness on each continent through convergent evolution',
              'Ratites originated in Antarctica and dispersed to all continents',
              'The phylogenetic tree must be incorrect because flightless birds cannot disperse'
            ],
            correctAnswer: 0,
            explanation: 'When a phylogeny matches the geological history of continental breakup, it strongly supports vicariance as the mechanism of speciation. The ancestral ratite population was split as Gondwana fragmented, and each isolated lineage evolved independently on its respective continent.'
          }
        ]
      }
    },
    {
      id: 'phyl6-island',
      type: 'text' as const,
      content: `## Island Biogeography & Adaptive Radiation

### Island biogeography

Islands (both oceanic and habitat islands like mountaintops or lakes) are natural laboratories for studying evolution because:

1. **Colonization** — a founder population arrives (dispersal event)
2. **Isolation** — gene flow from the mainland is limited or absent
3. **Open niches** — islands often have fewer competitors and predators
4. **Adaptive radiation** — the founder population diversifies to fill available niches

### Adaptive radiation

**Adaptive radiation** is the rapid diversification of a single ancestral lineage into many species, each adapted to a different ecological niche.

> 🐦 **Classic example — Darwin's finches (Galápagos):**
> - A single ancestral finch species colonized the Galápagos from South America
> - Over ~2-3 million years, it diversified into **~18 species**
> - Each species evolved a beak shape adapted to a specific food source:
>   - Large ground finch → large, crushing beak (hard seeds)
>   - Warbler finch → thin, probing beak (insects)
>   - Cactus finch → elongated beak (cactus flowers/fruit)
>   - Woodpecker finch → straight beak + tool use (insect larvae)

### Hawaiian honeycreepers — another example

Hawaiian honeycreepers radiated from a single ancestor into **~50 species** with dramatically different beak shapes, diets, and behaviors. Their phylogeny shows a classic pattern of rapid branching from a single colonization event.

### Island biogeography theory (MacArthur & Wilson)

The number of species on an island reaches an **equilibrium** determined by:

| Factor | Effect on species richness |
|---|---|
| **Island size** | Larger islands → more species (more habitats, larger populations) |
| **Distance from mainland** | Closer islands → more species (higher immigration rate) |
| **Immigration rate** | Decreases as the island fills with species |
| **Extinction rate** | Increases as the island fills (more competition) |

The equilibrium number of species is reached when the immigration rate equals the extinction rate.`
    },
    {
      id: 'phyl6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Islands & Radiation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which conditions are most likely to trigger an adaptive radiation?',
            options: [
              'A colonizing species arrives in a habitat with many open ecological niches and few competitors',
              'A species experiences strong stabilizing selection in a constant environment',
              'A large population remains connected to the mainland with constant gene flow',
              'A mass extinction eliminates all species in an ecosystem with no survivors'
            ],
            correctAnswer: 0,
            explanation: 'Adaptive radiation is driven by ecological opportunity — when organisms encounter many unfilled niches (as on islands, after mass extinctions, or with the evolution of a key innovation). Few competitors and diverse available resources allow rapid diversification. Stabilizing selection and gene flow from the mainland would actually slow diversification.'
          },
          {
            question: 'According to the island biogeography model, which island would be predicted to have the MOST species?',
            options: [
              'A large island close to the mainland',
              'A small island close to the mainland',
              'A large island far from the mainland',
              'A small island far from the mainland'
            ],
            correctAnswer: 0,
            explanation: 'Species richness increases with island size (more habitats, lower extinction rate) and proximity to the mainland (higher immigration rate). A large, close island maximizes both effects, predicting the highest species richness.'
          }
        ]
      }
    },
    {
      id: 'phyl6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Biogeography & Phylogeny** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Speciation caused by a geographic barrier splitting a population is called', options: ['vicariance', 'dispersal', 'adaptive radiation', 'convergent evolution'] },
          { label: 'When a single ancestor rapidly diversifies into many species filling different niches, this is', options: ['adaptive radiation', 'vicariance', 'genetic drift', 'stabilizing selection'] },
          { label: 'Darwin\'s finches are an example of adaptive radiation on', options: ['the Galápagos Islands', 'the Hawaiian Islands', 'Madagascar', 'Australia'] },
          { label: 'According to island biogeography theory, species richness is highest on islands that are', options: ['large and close to the mainland', 'small and far from the mainland', 'large and far from the mainland', 'small and close to the mainland'] }
        ],
        correctAnswers: ['vicariance', 'adaptive radiation', 'the Galápagos Islands', 'large and close to the mainland'],
        hint1: 'Vicariance involves a barrier splitting an existing population; dispersal involves movement to a new area.',
        hint2: 'Adaptive radiation = one lineage → many species, each adapted to a different niche.',
        hint3: 'Large islands have more habitat diversity and lower extinction; close islands have higher immigration rates.',
        explanation: 'Vicariance occurs when geographic barriers split populations. Adaptive radiation is the rapid diversification of a single lineage into many niche-adapted species, as seen in Darwin\'s finches on the Galápagos. Island biogeography theory predicts maximum species richness on large, close islands due to high immigration and low extinction.'
      }
    },
    {
      id: 'phyl6-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Patterns in Biogeography** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The breakup of Pangaea led to speciation through geographic', options: ['isolation (vicariance)', 'dispersal', 'gene flow', 'convergence'] },
          { label: 'On an island, species equilibrium is reached when immigration rate equals', options: ['extinction rate', 'mutation rate', 'speciation rate', 'birth rate'] },
          { label: 'Hawaiian honeycreepers diversified from a single ancestor into ~50 species, illustrating', options: ['adaptive radiation', 'stabilizing selection', 'genetic drift', 'convergent evolution'] }
        ],
        correctAnswers: ['isolation (vicariance)', 'extinction rate', 'adaptive radiation'],
        hint1: 'Continental drift physically separated populations, preventing gene flow.',
        hint2: 'MacArthur and Wilson\'s model balances immigration against extinction to predict equilibrium.',
        hint3: 'One ancestor → many species with different adaptations = adaptive radiation.',
        explanation: 'The breakup of Pangaea caused vicariance by physically isolating populations on separate continents. Island species equilibrium occurs when immigration rate = extinction rate (MacArthur-Wilson model). Hawaiian honeycreepers are a textbook example of adaptive radiation from a single colonizing ancestor.'
      }
    }
  ]
};
