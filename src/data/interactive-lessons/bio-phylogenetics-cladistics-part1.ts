export const bioPhylogeneticsCladisticsPart1Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl1-intro',
      type: 'text' as const,
      content: `# Reading Phylogenetic Trees

**Part 1 of 7 — Phylogenetics & Cladistics**

Phylogenetic trees are visual hypotheses about evolutionary relationships among organisms. Learning to read them is one of the most testable skills on the AP Biology exam.

### What is a phylogenetic tree?

A **phylogenetic tree** (also called an **evolutionary tree**) is a branching diagram that depicts the inferred evolutionary relationships among a group of organisms. Each tree is a *hypothesis* based on available evidence — not an absolute fact.

### Anatomy of a phylogenetic tree

| Component | Definition | Example |
|---|---|---|
| **Root** | The common ancestor of all taxa on the tree | The base of the trunk |
| **Node (internal)** | A branching point representing a speciation event | Where a lineage splits into two |
| **Branch** | A line connecting nodes, representing a lineage through time | The "arms" of the tree |
| **Tip (terminal node)** | A current or extinct taxon at the end of a branch | Species names at the top |
| **Sister taxa** | Two taxa that share the most recent common ancestor | Humans and chimpanzees |

### Important reading rules

- **Branch length** may or may not represent time, depending on the tree style
- **The order of tips does not matter** — you can rotate around any node without changing the meaning
- Two taxa are more closely related if they share a **more recent common ancestor**
- Always trace back to the nearest shared node to determine relatedness`
    },
    {
      id: 'phyl1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Tree Anatomy** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On a phylogenetic tree, what does an internal node represent?',
            options: [
              'A speciation event or most recent common ancestor',
              'An extinct species with no living descendants',
              'The amount of genetic change along a lineage',
              'A living species at the tip of a branch'
            ],
            correctAnswer: 0,
            explanation: 'An internal node (branching point) represents the hypothesized most recent common ancestor where one lineage diverged into two. It marks a speciation event in the evolutionary history of the group.'
          },
          {
            question: 'Consider taxa A, B, C, and D on a tree. A and B share a node that is more recent than the node shared by A and C. Which statement is correct?',
            options: [
              'A and B are sister taxa and are more closely related to each other than either is to C',
              'A and C are more closely related because they appear closer together on the page',
              'All three taxa are equally related because they share a common ancestor',
              'B and C are sister taxa because they share primitive characters'
            ],
            correctAnswer: 0,
            explanation: 'Relatedness is determined by how recently two taxa share a common ancestor, not by their position on the page. Since A and B share a more recent node, they are sister taxa and more closely related to each other than either is to C.'
          }
        ]
      }
    },
    {
      id: 'phyl1-monophyletic',
      type: 'text' as const,
      content: `## Monophyletic, Paraphyletic & Polyphyletic Groups

Correct classification depends on identifying the right type of grouping on a tree.

### Monophyletic group (clade)
A **monophyletic group** includes an ancestor and *all* of its descendants. This is the only type of group that reflects true evolutionary relationships.

> 🦎 **Example:** Reptilia (when it includes birds) is monophyletic — all descendants of the common reptilian ancestor are included.

### Paraphyletic group
A **paraphyletic group** includes an ancestor and *some* but not all of its descendants.

> 🐊 **Example:** "Reptiles" excluding birds is paraphyletic — birds descended from the same ancestor but are left out.

### Polyphyletic group
A **polyphyletic group** includes organisms from different ancestors grouped by convergent traits, not shared ancestry.

> 🦇 **Example:** Grouping bats with birds because both fly would be polyphyletic — flight evolved independently.

### Why this matters on the AP exam

The AP exam loves to test whether students can identify valid clades. A valid clade must be **monophyletic**: it must include the common ancestor and every single descendant of that ancestor.

| Group type | Includes ancestor? | Includes ALL descendants? | Valid clade? |
|---|---|---|---|
| Monophyletic | ✅ | ✅ | ✅ Yes |
| Paraphyletic | ✅ | ❌ | ❌ No |
| Polyphyletic | ❌ | ❌ | ❌ No |`
    },
    {
      id: 'phyl1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Clades & Groupings** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher groups all organisms descended from ancestor X, including every branch and tip. What type of group has the researcher constructed?',
            options: [
              'A monophyletic group (clade)',
              'A paraphyletic group',
              'A polyphyletic group',
              'An outgroup'
            ],
            correctAnswer: 0,
            explanation: 'A monophyletic group (clade) is defined as an ancestor plus ALL of its descendants. This is the fundamental unit of phylogenetic classification.'
          },
          {
            question: 'Why is the traditional class "Reptilia" (excluding birds) considered paraphyletic?',
            options: [
              'Because it includes the common ancestor but excludes birds, which are descendants of that ancestor',
              'Because reptiles evolved from multiple independent ancestors',
              'Because birds and reptiles share no common ancestor',
              'Because the group includes too many unrelated species'
            ],
            correctAnswer: 0,
            explanation: 'Traditional Reptilia excludes birds (Aves), even though birds descended from theropod dinosaurs — which are part of the reptilian lineage. Excluding some descendants of the common ancestor makes it paraphyletic.'
          }
        ]
      }
    },
    {
      id: 'phyl1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Phylogenetic Tree Vocabulary** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A branching point on a phylogenetic tree is called a(n)', options: ['node', 'tip', 'root', 'outgroup'] },
          { label: 'Two taxa that share the most recent common ancestor are called', options: ['sister taxa', 'outgroups', 'polyphyletic groups', 'basal taxa'] },
          { label: 'A group that includes an ancestor and ALL of its descendants is', options: ['monophyletic', 'paraphyletic', 'polyphyletic', 'convergent'] },
          { label: 'A group that excludes some descendants of a common ancestor is', options: ['paraphyletic', 'monophyletic', 'polyphyletic', 'homologous'] }
        ],
        correctAnswers: ['node', 'sister taxa', 'monophyletic', 'paraphyletic'],
        hint1: 'Think about what each structural feature on a tree represents — branching points indicate speciation events.',
        hint2: 'Sister taxa are always the two closest relatives. A valid clade must include every descendant.',
        hint3: 'Monophyletic = ancestor + all descendants. Paraphyletic = ancestor + some descendants.',
        explanation: 'A node represents a speciation event. Sister taxa share the most recent common ancestor. A monophyletic group (clade) includes an ancestor and all its descendants, while a paraphyletic group leaves some descendants out.'
      }
    },
    {
      id: 'phyl1-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Interpreting Trees** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The position of taxa at the tips of a tree can be rearranged by rotating around a', options: ['node', 'branch', 'root', 'tip'] },
          { label: 'Rotating branches around a node changes the meaning of the tree:', options: ['False — the relationships stay the same', 'True — the relationships change', 'True — only if branch lengths change', 'False — only if the root changes'] },
          { label: 'To determine which two taxa are most closely related, you should look at the most recent shared', options: ['common ancestor (node)', 'branch length', 'tip position', 'trait similarity'] }
        ],
        correctAnswers: ['node', 'False — the relationships stay the same', 'common ancestor (node)'],
        hint1: 'Phylogenetic trees can be drawn in many orientations without changing meaning.',
        hint2: 'Rotating around a node is like swinging a mobile — the connections stay the same.',
        hint3: 'Relatedness is determined by recency of common ancestry, not by position on the page or physical similarity.',
        explanation: 'Branches can be freely rotated around any node without changing the evolutionary relationships depicted. Relatedness is always determined by tracing back to the most recent common ancestor, not by proximity on the page.'
      }
    }
  ]
};
