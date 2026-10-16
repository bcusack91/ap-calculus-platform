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

A **phylogenetic tree** (also called an **evolutionary tree**) is a branching diagram that depicts the inferred evolutionary relationships among a group of organisms. Each tree is a *hypothesis* based on available evidence — it can be tested, and it is revised when new evidence appears.

### Anatomy of a phylogenetic tree

| Component | Definition | Example |
|---|---|---|
| **Root** | The common ancestor of all taxa on the tree | The base of the trunk |
| **Node (internal)** | A branching point: a speciation event and the most recent common ancestor of the lineages that branch from it | Where a lineage splits into two |
| **Branch** | A line connecting nodes, representing a lineage through time | The "arms" of the tree |
| **Tip (terminal node)** | A current or extinct taxon at the end of a branch | Species names at the top |
| **Sister taxa** | Two taxa that share a more recent common ancestor with each other than with any other taxon on the tree | Humans and chimpanzees on a tree of great apes |

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
              'The most recent common ancestor of the lineages that branch there',
              'An extinct species that left no living descendants on the tree',
              'The total amount of genetic change along one lineage',
              'A living species sampled at the end of a branch'
            ],
            correctAnswer: 0,
            explanation: 'An internal node (branching point) represents the hypothesized most recent common ancestor of the lineages that diverge from it. It marks a speciation event. Living species sit at the tips, and the amount of change, when shown at all, is shown by branch length.'
          },
          {
            question: 'Consider taxa A, B, C, and D on a tree. A and B share a node that is more recent than the node shared by A and C. Which statement is correct?',
            options: [
              'A and B are more closely related to each other than either is to C',
              'A and C are more closely related because they sit closer on the page',
              'A, B, and C are equally related because they share an ancestor',
              'B and C are sister taxa because both are distant from A'
            ],
            correctAnswer: 0,
            explanation: 'Relatedness is determined by how recently two taxa share a common ancestor, not by their position on the page. Since A and B share a more recent node, they are more closely related to each other than either is to C. Sharing some ancestor does not make taxa equally related; what matters is how recent the shared node is.'
          }
        ]
      }
    },
    {
      id: 'phyl1-clades',
      type: 'text' as const,
      content: `## Clades, Out-groups & Tree Styles

### Clades

A **clade** is an ancestor plus *all* of its descendants. On a tree, a clade is everything you could cut away with a single snip just below one node.

> 🦎 **Example:** On the tree (Frog, (Lizard, (Crocodile, Bird))), the group {Lizard, Crocodile, Bird} is a clade: it contains their common ancestor and every descendant of it. The group {Lizard, Crocodile} is **not** a clade, because it leaves out the bird, which descends from the same ancestor.

A grouping that leaves out some descendants, or that lumps lineages together because of a look-alike trait (such as "flying vertebrates" for birds plus bats), does not reflect shared ancestry.

### The out-group

The **out-group** is the lineage that is least closely related to the remainder of the organisms on the tree. It branches off first, closest to the root, and serves as the reference for deciding which traits are ancestral. In the tree above, the frog is the out-group.

### Cladograms vs. phylogenetic trees

| Feature | Cladogram | Phylogenetic tree |
|---|---|---|
| What it shows | Branching order only | Branching order plus time or amount of change |
| Branch lengths | Carry no meaning | Proportional to time or change |
| Time scale | None | Calibrated by fossils or a molecular clock |

### Reading any tree in three steps

1. Find the two taxa you are comparing.
2. Trace each one back toward the root until the two paths meet.
3. The node where they meet is their most recent common ancestor. The farther that node is from the root, the more closely related the two taxa are.`
    },
    {
      id: 'phyl1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Clades & Out-groups** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A cladogram is written as (Frog, (Lizard, (Crocodile, Bird))). Which group of taxa forms a clade?',
            options: [
              'Lizard, crocodile, and bird',
              'Frog, lizard, and crocodile',
              'Lizard and crocodile only',
              'Frog, crocodile, and bird'
            ],
            correctAnswer: 0,
            explanation: 'A clade is an ancestor and all of its descendants. Lizard, crocodile, and bird share a common ancestor, and no other descendant of that ancestor is left out. Lizard plus crocodile omits the bird; the groupings with the frog leave out the bird or the lizard while adding a more distant lineage.'
          },
          {
            question: 'In the cladogram (Frog, (Lizard, (Crocodile, Bird))), which taxon is the out-group?',
            options: [
              'Frog',
              'Lizard',
              'Crocodile',
              'Bird'
            ],
            correctAnswer: 0,
            explanation: 'The out-group is the lineage least closely related to the rest of the taxa on the tree. The frog branches off first, closest to the root, so it is the out-group for the lizard–crocodile–bird clade.'
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
          { label: 'A branching point on a phylogenetic tree is called a(n)', options: ['node', 'tip', 'root', 'out-group'] },
          { label: 'Two taxa that share a more recent common ancestor with each other than with any other taxon are', options: ['sister taxa', 'out-groups', 'basal taxa', 'ingroups'] },
          { label: 'An ancestor together with ALL of its descendants forms a(n)', options: ['clade', 'out-group', 'node', 'branch'] },
          { label: 'The lineage least closely related to all the others on a tree is the', options: ['out-group', 'sister taxon', 'root', 'clade'] }
        ],
        correctAnswers: ['node', 'sister taxa', 'clade', 'out-group'],
        hint1: 'Think about what each structural feature on a tree represents — branching points indicate speciation events.',
        hint2: 'Sister taxa are each other\'s closest relatives on the tree. A clade must include every descendant of its ancestor.',
        hint3: 'The out-group branches off first, closest to the root.',
        explanation: 'A node represents a speciation event and a most recent common ancestor. Sister taxa share a more recent common ancestor with each other than with anything else on the tree. A clade includes an ancestor and all its descendants, and the out-group is the lineage least closely related to the rest.'
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
          { label: 'To determine which two taxa are most closely related, you should look at the most recent shared', options: ['common ancestor (node)', 'branch length', 'tip position', 'trait similarity'] },
          { label: 'On a cladogram, unlike a time-scaled phylogenetic tree, branch lengths show', options: ['nothing about time or change', 'the time since each split', 'the mutations in each lineage', 'the size of each population'] }
        ],
        correctAnswers: ['node', 'False — the relationships stay the same', 'common ancestor (node)', 'nothing about time or change'],
        hint1: 'Phylogenetic trees can be drawn in many orientations without changing meaning.',
        hint2: 'Rotating around a node is like swinging a mobile — the connections stay the same.',
        hint3: 'A cladogram shows branching order only; a phylogenetic tree can add a time scale calibrated by fossils or a molecular clock.',
        explanation: 'Branches can be freely rotated around any node without changing the evolutionary relationships depicted. Relatedness is determined by tracing back to the most recent common ancestor, not by proximity on the page. Cladograms show only branching order, so their branch lengths carry no information about time or amount of change.'
      }
    }
  ]
};
