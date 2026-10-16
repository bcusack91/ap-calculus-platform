export const bioPhylogeneticsCladisticsPart4Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl4-intro',
      type: 'text' as const,
      content: `# Homology, Analogy & Convergent Evolution

**Part 4 of 7 — Phylogenetics & Cladistics**

A tree is only as good as the characters used to build it. To choose good characters, you need to tell apart similarities that were **inherited from a common ancestor** from similarities that **evolved independently**.

### Divergent evolution

**Divergent evolution** occurs when related lineages become increasingly different as they adapt to different habitats, producing phenotypic diversification.

> 🦴 **Classic example — vertebrate forelimbs:**
> - Human arm (grasping)
> - Whale flipper (swimming)
> - Bat wing (flying)
> - Dog leg (running)
>
> All share the same underlying bone structure (humerus → radius/ulna → carpals → digits) inherited from a common ancestor, but have diverged dramatically in form and function.

The structures produced by divergent evolution are called **homologous structures** — same ancestral origin, often different current function.

### Convergent evolution

**Convergent evolution** occurs when similar selective pressures produce similar phenotypic adaptations in different lineages.

> 🦈 **Classic examples:**
> - Shark (fish) and dolphin (mammal) — streamlined body shape
> - Insect wings vs. bird and bat wings — insect wings are outgrowths of the exoskeleton, while bird and bat wings are modified forelimbs
> - Cactus (Americas) and euphorbia (Africa) — succulent, spiny desert plants

The structures produced by convergent evolution are called **analogous structures** — similar function, different evolutionary origin.

> ⚠️ **Watch the level of comparison:** Bird wings and bat wings are **homologous as forelimbs** (same bones inherited from a four-limbed ancestor) but **analogous as wings**, because flight evolved separately in each lineage.`
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
              'Homologous structures produced by divergent evolution',
              'Analogous structures produced by convergent evolution',
              'Analogous structures produced by divergent evolution',
              'Vestigial structures that no longer have a function'
            ],
            correctAnswer: 0,
            explanation: 'Bat wings and human arms share the same underlying skeletal pattern (humerus, radius, ulna, carpals, digits) inherited from a common mammalian ancestor. Natural selection shaped these structures for different functions (flight vs. manipulation), making them homologous structures produced by divergent evolution. Both are fully functional, so neither is vestigial.'
          },
          {
            question: 'A researcher finds that sugar gliders (marsupials) and flying squirrels (placental mammals) both have a membrane stretched between their legs for gliding. This is an example of:',
            options: [
              'Convergent evolution producing analogous structures',
              'Divergent evolution producing homologous structures',
              'Coevolution between two species that interact closely',
              'A shared derived trait inherited from a gliding ancestor'
            ],
            correctAnswer: 0,
            explanation: 'Sugar gliders and flying squirrels are not closely related — marsupials and placental mammals diverged well over 100 million years ago, and their common ancestor did not glide. Each lineage evolved a gliding membrane under similar selective pressures in forests. These are analogous structures from convergent evolution.'
          }
        ]
      }
    },
    {
      id: 'phyl4-convergence',
      type: 'text' as const,
      content: `## Why Convergence Misleads — and How to Catch It

### Homologous vs. analogous structures — summary

| Feature | Homologous | Analogous |
|---|---|---|
| Evolutionary origin | Inherited from a common ancestor | Evolved independently |
| Structure | Similar underlying anatomy | Often different underlying anatomy |
| Function | Often different | Often similar |
| Evidence for | Common ancestry | Similar selective pressures |
| Useful for cladograms? | ✅ Yes, when the trait is a shared derived character | ❌ No — it suggests relationships that do not exist |

### How scientists detect convergence

1. **Look beneath the surface.** Analogous structures often differ in their underlying anatomy or development.
2. **Check other characters.** A convergent trait usually conflicts with most of the other characters in the analysis.
3. **Compare molecules.** DNA and protein sequences rarely converge across many positions, so molecular data can expose a misleading look-alike.

> 🦔 **Example:** Tenrecs of Madagascar look and live like hedgehogs — spiny coats, insect diets. DNA sequence comparisons place tenrecs closer to elephants than to hedgehogs, showing that their spines are analogous to hedgehog spines.

### Vestigial structures

**Vestigial structures** are reduced remnants of structures that served a function in an ancestor. Like other homologies, they provide evidence of common ancestry.

> 🐍 **Examples:**
> - Tiny pelvic and leg-bone remnants in whales and in pythons and boas (their ancestors walked on four legs)
> - The human tailbone (coccyx), a remnant of the tail of our ancestors
> - The small, flightless wings of emus and kiwis
>
> Vestigial structures make sense only in the context of descent with modification.`
    },
    {
      id: 'phyl4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Choosing Characters** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Tenrecs of Madagascar have spiny coats like hedgehogs, but DNA places tenrecs closer to elephants than to hedgehogs. How should the spines be treated when building a tree?',
            options: [
              'As analogous traits that should not group the two',
              'As a shared derived trait that unites tenrecs and hedgehogs',
              'As evidence that the DNA data must contain an error',
              'As an ancestral trait that all mammals have retained'
            ],
            correctAnswer: 0,
            explanation: 'When many DNA positions place tenrecs near elephants, the spines are best explained as convergent evolution under similar selective pressures. Analogous traits should not be used to group lineages. Spines are not present in most mammals, so they are not an ancestral mammalian trait.'
          },
          {
            question: 'Which of the following is a vestigial structure?',
            options: [
              'Pelvic bones in whales, which no longer support hind legs',
              'The heart in humans, which pumps blood through the body',
              'Feathers on a hawk, which provide lift during flight',
              'Fins on a shark, which steer and stabilize its swimming'
            ],
            correctAnswer: 0,
            explanation: 'Whale pelvic bones are vestigial — they are reduced remnants of the pelvic girdle that supported the hind legs of whales\' four-legged ancestors. The other structures still perform the function they are built for.'
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
          { label: 'When related species become increasingly different, this is called', options: ['divergent evolution', 'convergent evolution', 'gene flow', 'coevolution'] },
          { label: 'Structures with the same ancestral origin but different functions are', options: ['homologous', 'analogous', 'vestigial', 'convergent'] },
          { label: 'Different lineages evolving similar traits under similar selective pressures is', options: ['convergent evolution', 'divergent evolution', 'artificial selection', 'genetic drift'] },
          { label: 'A reduced structure that served a function in an ancestor is', options: ['vestigial', 'homologous', 'analogous', 'derived'] }
        ],
        correctAnswers: ['divergent evolution', 'homologous', 'convergent evolution', 'vestigial'],
        hint1: 'Divergent = moving apart. Convergent = coming together. Think about the direction of change.',
        hint2: 'Homologous structures share an ancestor; analogous structures share a function but not ancestry.',
        hint3: 'Vestigial structures are evolutionary leftovers that are reduced or nonfunctional.',
        explanation: 'Divergent evolution produces homologous structures (same origin, different function). Convergent evolution produces analogous structures (different origin, similar function). Vestigial structures are reduced remnants of once-functional ancestral features.'
      }
    },
    {
      id: 'phyl4-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Identifying Evolutionary Patterns** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The wing of a bat and the wing of a butterfly are', options: ['analogous structures', 'homologous structures', 'vestigial structures', 'shared derived characters'] },
          { label: 'The arm of a human and the flipper of a whale are', options: ['homologous structures', 'analogous structures', 'vestigial structures', 'convergent traits'] },
          { label: 'When building cladograms, researchers should use homologous structures and avoid using', options: ['analogous structures', 'shared derived characters', 'homologous genes', 'molecular data'] }
        ],
        correctAnswers: ['analogous structures', 'homologous structures', 'analogous structures'],
        hint1: 'Bat wings are modified mammalian forelimbs; butterfly wings are extensions of the exoskeleton — completely different tissues.',
        hint2: 'Human arms and whale flippers share the same bone pattern inherited from a common ancestor.',
        hint3: 'Analogous structures lead to incorrect groupings because they reflect convergent evolution, not shared ancestry.',
        explanation: 'Bat wings and butterfly wings are analogous — both function for flight but have completely different structural origins. Human arms and whale flippers are homologous — same skeletal pattern, different function. Cladograms must be built using homologous (not analogous) characters to reflect evolutionary relationships accurately.'
      }
    }
  ]
};
