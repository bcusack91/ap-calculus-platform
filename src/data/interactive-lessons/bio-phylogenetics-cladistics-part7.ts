export const bioPhylogeneticsCladisticsPart7Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl7-intro',
      type: 'text' as const,
      content: `# AP Exam Problems — Phylogenetics & Cladistics

**Part 7 of 7 — Phylogenetics & Cladistics**

This final part focuses on AP-style problem solving. You will practice interpreting cladograms, choosing the simplest tree, analyzing molecular data, and tackling the kinds of questions that appear on the AP Biology exam.

### What the AP exam tests

The AP Biology exam frequently asks you to:

1. **Read and interpret** phylogenetic trees and cladograms
2. **Determine relatedness** between taxa from the most recent shared node
3. **Identify shared derived characters** and the out-group
4. **Evaluate molecular data** (sequence alignments, percent similarity)
5. **Build a tree or cladogram** from a table of characters or sequence differences
6. **Distinguish homologous from analogous** structures
7. **Explain how trees are revised** when new fossil or molecular evidence appears

### Choosing the simplest tree

When the same data could be drawn as several different trees, scientists generally prefer the tree that requires the **fewest evolutionary changes** (trait gains, trait losses, or sequence changes). This principle is called **parsimony** — the simplest explanation that fits the data is preferred.

> 🌳 **Example:** Four trees are drawn from the same character table. Tree C explains the data with only 7 character changes, fewer than any other, so it is preferred.

| Tree | Character changes required | Preferred? |
|---|---|---|
| Tree A | 15 | ❌ |
| Tree B | 9 | ❌ |
| Tree C | 7 | ✅ Fewest changes |
| Tree D | 11 | ❌ |

### Caution with the simplest tree

Evolution does not always take the simplest path. **Convergent evolution** and traits that are lost and regained can make the simplest tree incorrect. That is why scientists compare many characters — especially molecular data — and treat every tree as a hypothesis.`
    },
    {
      id: 'phyl7-quiz1',
      type: 'multiple-choice' as const,
      content: `**AP-Style Problem Set — Cladogram Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A cladogram is written as ((Lizard, Snake), (Crocodile, Bird)). Based on this cladogram, which organism is most closely related to the bird?',
            options: [
              'Crocodile',
              'Lizard',
              'Snake',
              'Lizard, snake, and crocodile equally'
            ],
            correctAnswer: 0,
            explanation: 'Crocodile and bird are paired inside the same parentheses, so they share a node that no other taxon shares — they are sister taxa. Lizard and snake join the bird only at the deeper node at the base of the tree, so both are more distantly related to the bird. Grouping crocodiles with lizards as "reptiles" leaves out the bird and does not reflect shared ancestry.'
          },
          {
            question: 'Three possible trees are constructed from the same data set. Tree X requires 14 evolutionary changes, Tree Y requires 9, and Tree Z requires 11. Which tree is preferred by the principle of parsimony?',
            options: [
              'Tree Y, because it needs the fewest changes',
              'Tree X, because more changes mean more support',
              'Tree Z, because a middle count is most realistic',
              'None, because counts of changes cannot rank trees'
            ],
            correctAnswer: 0,
            explanation: 'Parsimony selects the tree requiring the fewest evolutionary changes, so Tree Y (9 changes) is preferred. The principle assumes evolution tends to follow the simplest path, though convergent evolution and trait reversals can sometimes make the true tree less parsimonious.'
          }
        ]
      }
    },
    {
      id: 'phyl7-molecular',
      type: 'text' as const,
      content: `## Interpreting Molecular Data on the AP Exam

### Sequence alignment problems

The AP exam may present aligned DNA or amino acid sequences and ask you to determine relationships.

**Example alignment:**

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Species A** | A | T | G | C | C | A | T | G | A | C |
| **Species B** | A | T | G | C | C | A | T | G | A | T |
| **Species C** | A | T | A | C | T | A | T | G | A | T |
| **Species D** | G | T | A | C | T | G | A | C | A | T |

**Counting differences:**
- A vs. B: 1 difference (position 10)
- A vs. C: 3 differences (positions 3, 5, 10)
- A vs. D: 7 differences (positions 1, 3, 5, 6, 7, 8, 10)
- B vs. C: 2 differences (positions 3, 5)
- B vs. D: 6 differences (positions 1, 3, 5, 6, 7, 8)
- C vs. D: 4 differences (positions 1, 6, 7, 8)

**Conclusion:** A and B are most closely related (1 difference). C joins the A–B pair next, and D is most distantly related to all the others. The tree would be (((A, B), C), D).

### Percent similarity vs. number of differences

Some problems give you a **similarity matrix** instead:

| | Species A | Species B | Species C |
|---|---|---|---|
| **Species A** | 100% | 95% | 82% |
| **Species B** | 95% | 100% | 80% |
| **Species C** | 82% | 80% | 100% |

Higher percent similarity → more closely related. A and B (95% similar) are sister taxa.

### Key tips for molecular data questions

1. **Count differences carefully** — mark or highlight changed positions
2. **Build the tree from the most similar pair outward**
3. **Check all pairwise comparisons** — don't just look at the first two
4. **For time estimates,** set the rate from a calibrated pair first, then divide`
    },
    {
      id: 'phyl7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Problem Set — Molecular Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A similarity matrix shows: Species 1 vs. 2 = 98%, Species 1 vs. 3 = 85%, Species 2 vs. 3 = 84%. A researcher claims Species 1 and Species 3 are sister taxa. Is this correct?',
            options: [
              'No, because Species 1 and 2 are the most similar pair',
              'Yes, because Species 1 and 3 are more alike than 2 and 3',
              'Yes, because all three species are about equally similar',
              'No, because similarity data cannot show relatedness'
            ],
            correctAnswer: 0,
            explanation: 'In a similarity matrix, the pair with the highest percent similarity shares the most recent common ancestor. Species 1 and 2 (98% similar) are sister taxa, and Species 3 is the out-group to that pair. Species 1 and 3 being slightly more alike than 2 and 3 does not outweigh the much closer 1–2 match.'
          },
          {
            question: 'A gene is sequenced in four species. Species W and X differ at 3 sites, W and Y at 12 sites, and W and Z at 45 sites. Fossils show that W and Y diverged 6 million years ago. Assuming a constant rate, approximately when did Species W and X diverge?',
            options: [
              '1.5 million years ago',
              '3 million years ago',
              '6 million years ago',
              '0.75 million years ago'
            ],
            correctAnswer: 0,
            explanation: 'The calibrated pair gives the rate: 12 differences ÷ 6 million years = 2 differences per million years. Species W and X differ at 3 sites, so they diverged about 3 ÷ 2 = 1.5 million years ago.'
          }
        ]
      }
    },
    {
      id: 'phyl7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — AP Exam Strategies** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The principle that the tree requiring the fewest changes is preferred is called', options: ['parsimony', 'natural selection', 'genetic drift', 'convergence'] },
          { label: 'To determine which two taxa are most closely related, you should find the pair with the most recent shared', options: ['common ancestor (node)', 'morphological similarity', 'geographic range', 'ecological niche'] },
          { label: 'In a DNA sequence comparison, fewer nucleotide differences between two species suggests they are more', options: ['closely related', 'distantly related', 'likely to be convergent', 'likely to be analogous'] },
          { label: 'When a morphological cladogram and a molecular phylogeny disagree, the molecular phylogeny is often preferred because molecular data is less affected by', options: ['convergent evolution', 'genetic drift', 'gene flow', 'mutation'] }
        ],
        correctAnswers: ['parsimony', 'common ancestor (node)', 'closely related', 'convergent evolution'],
        hint1: 'Parsimony = simplest explanation that fits the data.',
        hint2: 'Relatedness is always about recency of common ancestry, not overall similarity.',
        hint3: 'Molecular data helps avoid the trap of analogous structures that look similar but evolved independently.',
        explanation: 'Parsimony selects the tree requiring the fewest changes. Relatedness is determined by the most recent common ancestor. Fewer molecular differences indicate closer relatedness. Molecular data is preferred when morphological data may be misleading due to convergent evolution producing analogous structures.'
      }
    },
    {
      id: 'phyl7-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Putting It All Together** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A clade on a phylogenetic tree includes', options: ['an ancestor and all its descendants', 'an ancestor and some descendants', 'taxa from several separate ancestors', 'taxa grouped by analogous traits'] },
          { label: 'If the out-group lacks a trait but two ingroup taxa share it, the trait is likely a', options: ['shared derived character', 'shared ancestral character', 'convergent analogous trait', 'vestigial structure'] },
          { label: 'On the AP exam, a common mistake is judging relatedness by the taxa\'s', options: ['positions on the page', 'most recent shared node', 'shared derived characters', 'sequence differences'] }
        ],
        correctAnswers: ['an ancestor and all its descendants', 'shared derived character', 'positions on the page'],
        hint1: 'A clade includes every descendant of one ancestor — nothing left out.',
        hint2: 'If the out-group doesn\'t have the trait, it\'s derived (it evolved after the out-group split off).',
        hint3: 'Tree tips can be rotated around any node without changing meaning, so page position tells you nothing.',
        explanation: 'A clade includes an ancestor and all its descendants. Traits absent in the out-group but shared by ingroup members are shared derived characters. The most common exam mistake is reading positions on the page as relatedness — always trace back to shared nodes to determine evolutionary relationships.'
      }
    }
  ]
};
