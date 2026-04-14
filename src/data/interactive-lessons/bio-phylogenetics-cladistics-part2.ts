export const bioPhylogeneticsCladisticsPart2Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl2-intro',
      type: 'text' as const,
      content: `# Building Cladograms

**Part 2 of 7 — Phylogenetics & Cladistics**

A **cladogram** is a specific type of phylogenetic diagram that groups organisms by **shared derived characters** (synapomorphies). Understanding how to construct and interpret cladograms is essential for the AP Biology exam.

### Cladograms vs. phylogenetic trees

| Feature | Cladogram | Phylogenetic tree |
|---|---|---|
| Branch lengths | Equal / not meaningful | May represent time or genetic change |
| Grouping basis | Shared derived characters | Overall evolutionary relationships |
| Purpose | Identify nested clades | Show evolutionary distance |

### Key terminology

- **Character** — any heritable trait that can be compared across taxa (e.g., vertebral column, feathers, mammary glands)
- **Ancestral character (plesiomorphy)** — a trait inherited from a distant ancestor, shared broadly across many groups
- **Derived character (apomorphy)** — a trait that evolved more recently and is unique to a particular clade
- **Shared derived character (synapomorphy)** — a derived trait shared by two or more taxa, indicating common ancestry

> 🦴 **Example:** Having a vertebral column is an **ancestral** character for mammals (shared with fish, amphibians, reptiles). Having **hair/fur** is a **derived** character that unites mammals specifically.`
    },
    {
      id: 'phyl2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Characters & Synapomorphies** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which type of character is most useful for building a cladogram?',
            options: [
              'Shared derived characters (synapomorphies)',
              'Shared ancestral characters (symplesiomorphies)',
              'Analogous characters from convergent evolution',
              'Unique autapomorphies found in only one taxon'
            ],
            correctAnswer: 0,
            explanation: 'Synapomorphies (shared derived characters) are the basis for cladistic analysis. They indicate that taxa inherited a novel trait from a common ancestor. Ancestral characters are too broadly shared, and analogous characters are misleading because they arose independently.'
          },
          {
            question: 'A student notes that both sharks and dolphins have streamlined bodies and fins. Should this shared trait be used to group them together on a cladogram?',
            options: [
              'No — these are analogous structures from convergent evolution, not synapomorphies',
              'Yes — any shared physical trait indicates common ancestry',
              'Yes — streamlined bodies are a shared derived character',
              'No — only molecular data can be used in cladograms'
            ],
            correctAnswer: 0,
            explanation: 'Sharks (cartilaginous fish) and dolphins (mammals) evolved similar body shapes independently due to similar selective pressures in aquatic environments. These are analogous structures, not homologous ones, and would produce a misleading polyphyletic grouping if used in cladistic analysis.'
          }
        ]
      }
    },
    {
      id: 'phyl2-outgroups',
      type: 'text' as const,
      content: `## Outgroups & Polarizing Characters

### What is an outgroup?

An **outgroup** is a taxon that is closely related to the group being studied (the **ingroup**) but is known to have diverged *before* the ingroup diversified. It serves as a reference point.

### Why do we need outgroups?

The outgroup allows us to **polarize** characters — to determine which state is ancestral and which is derived:

1. If the outgroup shares a trait with some ingroup members → the trait is likely **ancestral**
2. If only some ingroup members have the trait (and the outgroup does not) → the trait is likely **derived**

> 🐸 **Example:** When studying mammals, amphibians can serve as an outgroup. If the amphibian outgroup lacks hair, we infer that hair is a **derived** character that evolved within the mammalian ingroup.

### Steps to build a cladogram

1. **Select taxa** to include (ingroup) and an appropriate outgroup
2. **List characters** and determine their states in each taxon (present/absent; 0/1)
3. **Polarize characters** using the outgroup to identify ancestral vs. derived states
4. **Group taxa** by shared derived characters (synapomorphies)
5. **Draw the cladogram** — taxa sharing the most derived characters are grouped most closely
6. **Mark character changes** on branches with hash marks or labels

### Character matrix example

| Character | Outgroup (Frog) | Mouse | Cat | Dog |
|---|---|---|---|---|
| Vertebral column | ✅ | ✅ | ✅ | ✅ |
| Hair/fur | ❌ | ✅ | ✅ | ✅ |
| Retractable claws | ❌ | ❌ | ✅ | ❌ |
| Carnassial teeth | ❌ | ❌ | ✅ | ✅ |

From this matrix: vertebral column is ancestral (shared by outgroup). Hair unites all mammals. Carnassial teeth unite cat + dog. Retractable claws are unique to cat (autapomorphy).`
    },
    {
      id: 'phyl2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Outgroups & Cladogram Construction** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the primary purpose of including an outgroup when constructing a cladogram?',
            options: [
              'To determine which character states are ancestral versus derived',
              'To add more species to make the tree look more complete',
              'To represent the oldest living species in the analysis',
              'To serve as the root organism from which all others descended'
            ],
            correctAnswer: 0,
            explanation: 'The outgroup provides a reference point for polarizing characters. Traits shared with the outgroup are inferred to be ancestral (plesiomorphic), while traits found only in the ingroup are inferred to be derived (apomorphic). The outgroup does not need to be the oldest species — it just needs to have diverged before the ingroup radiated.'
          },
          {
            question: 'In the character matrix above, which character is a synapomorphy uniting cat and dog but not mouse?',
            options: [
              'Carnassial teeth',
              'Vertebral column',
              'Hair/fur',
              'Retractable claws'
            ],
            correctAnswer: 0,
            explanation: 'Carnassial teeth are present in both cat and dog but absent in mouse and the outgroup (frog). This makes them a shared derived character (synapomorphy) that unites cat and dog into a clade (Carnivora). Retractable claws are only in cat (autapomorphy), and hair is shared by all three mammals.'
          }
        ]
      }
    },
    {
      id: 'phyl2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Cladogram Construction** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A trait inherited from a distant ancestor and broadly shared is called a(n)', options: ['ancestral character (plesiomorphy)', 'derived character (apomorphy)', 'synapomorphy', 'homoplasy'] },
          { label: 'A novel trait shared by two or more taxa due to common ancestry is a(n)', options: ['shared derived character (synapomorphy)', 'shared ancestral character', 'analogous structure', 'autapomorphy'] },
          { label: 'The reference taxon used to polarize characters is the', options: ['outgroup', 'ingroup', 'sister taxon', 'basal taxon'] },
          { label: 'A cladogram groups organisms based on', options: ['shared derived characters', 'overall similarity', 'physical size', 'geographic location'] }
        ],
        correctAnswers: ['ancestral character (plesiomorphy)', 'shared derived character (synapomorphy)', 'outgroup', 'shared derived characters'],
        hint1: 'Ancestral traits are widespread; derived traits are more recently evolved and restricted to particular clades.',
        hint2: 'Synapomorphies are the only characters that define clades on a cladogram.',
        hint3: 'The outgroup is chosen because it diverged before the ingroup and helps us distinguish old vs. new traits.',
        explanation: 'Ancestral characters (plesiomorphies) are broadly shared and don\'t help define clades. Shared derived characters (synapomorphies) are the key evidence for building cladograms. The outgroup serves as a reference to determine which traits are ancestral versus derived.'
      }
    },
    {
      id: 'phyl2-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Applying Cladistic Principles** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'If the outgroup possesses a trait and some ingroup members also have it, the trait is likely', options: ['ancestral', 'derived', 'convergent', 'analogous'] },
          { label: 'A derived character found in only one taxon (not shared) is called a(n)', options: ['autapomorphy', 'synapomorphy', 'symplesiomorphy', 'homoplasy'] },
          { label: 'Similar traits that evolved independently in unrelated lineages are called', options: ['analogous structures (homoplasies)', 'homologous structures', 'synapomorphies', 'plesiomorphies'] }
        ],
        correctAnswers: ['ancestral', 'autapomorphy', 'analogous structures (homoplasies)'],
        hint1: 'If the outgroup also has the trait, it likely evolved before the ingroup diversified.',
        hint2: 'Auto- means "self" — a derived character unique to one lineage only.',
        hint3: 'Convergent evolution produces similar-looking traits that are NOT evidence of common ancestry.',
        explanation: 'Traits shared with the outgroup are ancestral. Autapomorphies are derived characters unique to a single taxon and cannot define a shared clade. Analogous structures (homoplasies) arise through convergent evolution and mislead cladistic analysis if used as synapomorphies.'
      }
    }
  ]
};
