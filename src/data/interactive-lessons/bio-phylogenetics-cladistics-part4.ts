export const bioPhylogeneticsCladisticsPart4Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl4-intro',
      type: 'text' as const,
      content: `# Types of Evolution — Convergent, Divergent & Parallel

**Part 4 of 7 — Phylogenetics & Cladistics**

Understanding how traits evolve across lineages is critical for correctly interpreting phylogenies and avoiding errors in classification. The AP exam frequently tests your ability to distinguish between different evolutionary patterns.

### Divergent evolution

**Divergent evolution** occurs when two or more related species become increasingly different over time, typically due to different selective pressures in different environments.

> 🦴 **Classic example — vertebrate forelimbs:**
> - Human arm (grasping)
> - Whale flipper (swimming)
> - Bat wing (flying)
> - Dog leg (running)
>
> All share the same underlying bone structure (humerus → radius/ulna → carpals → digits) inherited from a common ancestor, but have diverged dramatically in form and function.

The structures produced by divergent evolution are called **homologous structures** — same ancestral origin, different current function.

### Convergent evolution

**Convergent evolution** occurs when unrelated species independently evolve similar traits due to similar environmental pressures.

> 🦈 **Classic examples:**
> - Shark (fish) and dolphin (mammal) — streamlined body shape
> - Bird wing, bat wing, and insect wing — flight structures from completely different tissues
> - Cactus (Americas) and euphorbia (Africa) — succulent desert plants

The structures produced by convergent evolution are called **analogous structures** — similar function, different ancestral origin.`
    },
    {
      id: 'phyl4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Divergent vs. Convergent** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The wings of a bat and the arms of a human are examples of:',
            options: [
              'Homologous structures that arose through divergent evolution',
              'Analogous structures that arose through convergent evolution',
              'Vestigial structures with no current function',
              'Identical structures that evolved at the same time'
            ],
            correctAnswer: 0,
            explanation: 'Bat wings and human arms share the same underlying skeletal pattern (humerus, radius, ulna, carpals, digits) inherited from a common mammalian ancestor. Natural selection shaped these structures for different functions (flight vs. manipulation), making them homologous structures produced by divergent evolution.'
          },
          {
            question: 'A researcher finds that sugar gliders (marsupials) and flying squirrels (placental mammals) both have a membrane stretched between their legs for gliding. This is an example of:',
            options: [
              'Convergent evolution producing analogous structures',
              'Divergent evolution producing homologous structures',
              'Coevolution between two species',
              'Parallel evolution in closely related species'
            ],
            correctAnswer: 0,
            explanation: 'Sugar gliders and flying squirrels are not closely related — marsupials and placental mammals diverged over 100 million years ago. They independently evolved gliding membranes due to similar selective pressures in forested environments. These are analogous structures from convergent evolution.'
          }
        ]
      }
    },
    {
      id: 'phyl4-parallel',
      type: 'text' as const,
      content: `## Parallel Evolution & Homology vs. Analogy

### Parallel evolution

**Parallel evolution** occurs when two closely related species independently evolve similar traits from a shared ancestral condition. It is similar to convergent evolution but involves **related** lineages rather than unrelated ones.

> 🐟 **Example:** Multiple lineages of stickleback fish independently lost their pelvic spines when they colonized freshwater lakes. Because they share the same genetic toolkit, the same gene (*Pitx1*) was involved each time — an example of parallel evolution.

### How to distinguish on the AP exam

| Pattern | Starting relatedness | Outcome | Trait origin |
|---|---|---|---|
| **Divergent** | Related (same ancestor) | Become different | Homologous structures |
| **Convergent** | Unrelated | Become similar | Analogous structures |
| **Parallel** | Related | Stay similar or evolve similarly | Similar genetic basis |

### Homologous vs. analogous structures — summary

| Feature | Homologous | Analogous |
|---|---|---|
| Evolutionary origin | Same ancestor | Different ancestors |
| Structure | Similar underlying anatomy | Different underlying anatomy |
| Function | Often different | Often similar |
| Evidence for | Common ancestry | Convergent evolution |
| Useful for cladograms? | ✅ Yes (synapomorphies) | ❌ No (misleading) |

### Vestigial structures

**Vestigial structures** are remnants of structures that had a function in an ancestor but are reduced or nonfunctional in the descendant.

> 🐍 **Examples:**
> - Pelvic bones in whales and snakes (ancestors walked on land)
> - Human appendix (reduced from a larger cecum in herbivorous ancestors)
> - Flightless bird wings (ostriches, emus)
>
> Vestigial structures are powerful evidence of evolution because they make sense only in the context of descent with modification.`
    },
    {
      id: 'phyl4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Evolutionary Patterns** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Several populations of lizards on different islands independently evolved the same toe pad structure for climbing. Their common ancestor lacked these toe pads. This is best described as:',
            options: [
              'Parallel evolution — related species independently evolving similar traits',
              'Divergent evolution — one ancestral form splitting into different species',
              'Convergent evolution — completely unrelated organisms evolving similar traits',
              'Coevolution — two species evolving in response to each other'
            ],
            correctAnswer: 0,
            explanation: 'These are closely related lizard populations evolving the same trait independently. Because they share a recent common ancestor (and likely the same underlying genetic mechanisms), this is parallel evolution rather than convergent evolution (which involves distantly related organisms).'
          },
          {
            question: 'Which of the following is a vestigial structure?',
            options: [
              'Pelvic bones in whales, which serve no locomotion function',
              'The human heart, which pumps blood throughout the body',
              'Bird feathers used for flight',
              'Shark fins used for swimming and stability'
            ],
            correctAnswer: 0,
            explanation: 'Whale pelvic bones are vestigial — they are reduced remnants of the pelvic girdle that supported the legs of the whales\' terrestrial ancestors. They no longer serve a locomotion function. The other options describe structures with clear current functions.'
          }
        ]
      }
    },
    {
      id: 'phyl4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Types of Evolution** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'When related species become increasingly different, this is called', options: ['divergent evolution', 'convergent evolution', 'parallel evolution', 'coevolution'] },
          { label: 'Structures with the same ancestral origin but different functions are', options: ['homologous', 'analogous', 'vestigial', 'convergent'] },
          { label: 'Unrelated species evolving similar traits due to similar environments is', options: ['convergent evolution', 'divergent evolution', 'parallel evolution', 'artificial selection'] },
          { label: 'A structure that has lost its original function over evolutionary time is', options: ['vestigial', 'homologous', 'analogous', 'derived'] }
        ],
        correctAnswers: ['divergent evolution', 'homologous', 'convergent evolution', 'vestigial'],
        hint1: 'Divergent = moving apart. Convergent = coming together. Think about the direction of change.',
        hint2: 'Homologous structures share an ancestor; analogous structures share a function but not ancestry.',
        hint3: 'Vestigial structures are evolutionary leftovers that are reduced or nonfunctional.',
        explanation: 'Divergent evolution produces homologous structures (same origin, different function). Convergent evolution produces analogous structures (different origin, similar function). Vestigial structures are remnants of once-functional ancestral features.'
      }
    },
    {
      id: 'phyl4-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Identifying Evolutionary Patterns** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The wing of a bat and the wing of a butterfly are', options: ['analogous structures', 'homologous structures', 'vestigial structures', 'synapomorphies'] },
          { label: 'The arm of a human and the flipper of a whale are', options: ['homologous structures', 'analogous structures', 'vestigial structures', 'convergent traits'] },
          { label: 'When building cladograms, researchers should use homologous structures and avoid using', options: ['analogous structures', 'derived characters', 'synapomorphies', 'molecular data'] }
        ],
        correctAnswers: ['analogous structures', 'homologous structures', 'analogous structures'],
        hint1: 'Bat wings are modified mammalian forelimbs; butterfly wings are extensions of the exoskeleton — completely different tissues.',
        hint2: 'Human arms and whale flippers share the same bone pattern inherited from a common ancestor.',
        hint3: 'Analogous structures lead to incorrect groupings because they reflect convergent evolution, not shared ancestry.',
        explanation: 'Bat wings and butterfly wings are analogous — both function for flight but have completely different structural origins. Human arms and whale flippers are homologous — same skeletal pattern, different function. Cladograms must be built using homologous (not analogous) characters to accurately reflect evolutionary relationships.'
      }
    }
  ]
};
