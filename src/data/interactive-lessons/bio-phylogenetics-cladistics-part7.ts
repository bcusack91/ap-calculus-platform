export const bioPhylogeneticsCladisticsPart7Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl7-intro',
      type: 'text' as const,
      content: `# AP Exam Problems — Phylogenetics & Cladistics

**Part 7 of 7 — Phylogenetics & Cladistics**

This final part focuses on AP-style problem solving. You will practice interpreting complex cladograms, applying maximum parsimony, analyzing molecular data, and tackling the kinds of questions that appear on the AP Biology exam.

### What the AP exam tests

The AP Biology exam frequently asks you to:

1. **Read and interpret** phylogenetic trees and cladograms
2. **Determine relatedness** between taxa based on tree topology
3. **Identify shared derived characters** that define clades
4. **Evaluate molecular data** (sequence alignments, percent similarity)
5. **Apply parsimony** to choose the best-supported tree
6. **Distinguish homologous from analogous** structures
7. **Connect biogeography** to evolutionary patterns

### Maximum parsimony

**Maximum parsimony** is the principle that the best phylogenetic tree is the one that requires the **fewest evolutionary changes** (mutations, character state changes). It reflects Occam's Razor — the simplest explanation is preferred.

> 🌳 **Example:** If Tree A requires 12 character changes and Tree B requires 8 character changes to explain the same data, Tree B is the **most parsimonious** and is preferred.

| Tree | Character changes required | Preferred? |
|---|---|---|
| Tree A | 15 | ❌ |
| Tree B | 9 | ❌ |
| Tree C | 7 | ✅ Most parsimonious |
| Tree D | 11 | ❌ |

### Caution with parsimony

Parsimony assumes that evolution takes the simplest path, which isn't always true. **Convergent evolution** and **reversal events** can cause the most parsimonious tree to be incorrect. That's why modern phylogenetics uses multiple methods (parsimony, maximum likelihood, Bayesian analysis) together.`
    },
    {
      id: 'phyl7-quiz1',
      type: 'multiple-choice' as const,
      content: `**AP-Style Problem Set — Cladogram Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A cladogram shows the following branching order from root to tips: ((Lizard, Snake), (Crocodile, Bird)). Which pair of organisms shares the most recent common ancestor?',
            options: [
              'Lizard and Snake (they share a node that is more recent than the node connecting them to Crocodile/Bird)',
              'Crocodile and Lizard (both are "reptiles")',
              'Snake and Bird (both are found on every continent)',
              'All four organisms share the same most recent common ancestor'
            ],
            correctAnswer: 0,
            explanation: 'In the notation ((Lizard, Snake), (Crocodile, Bird)), the inner parentheses indicate sister-taxon pairs. Lizard and Snake share a more recent node than any between the two larger groups. Similarly, Crocodile and Bird are sister taxa. Crocodile and Lizard are NOT more closely related — being a "reptile" is a paraphyletic grouping.'
          },
          {
            question: 'Three possible trees are constructed from the same data set. Tree X requires 14 evolutionary changes, Tree Y requires 9, and Tree Z requires 11. Using maximum parsimony, which tree is preferred?',
            options: [
              'Tree Y — it requires the fewest evolutionary changes',
              'Tree X — more changes indicates a better-supported tree',
              'Tree Z — the middle number of changes is most realistic',
              'All three trees are equally supported'
            ],
            correctAnswer: 0,
            explanation: 'Maximum parsimony selects the tree requiring the fewest evolutionary changes. Tree Y (9 changes) is the most parsimonious. The principle assumes evolution tends to follow the simplest path, though convergent evolution and reversals can sometimes make the true tree less parsimonious.'
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
| **Species D** | G | C | A | T | T | G | A | C | G | T |

**Counting differences:**
- A vs. B: 1 difference (position 10)
- A vs. C: 3 differences (positions 3, 5, 10)
- A vs. D: 8 differences (positions 1, 2, 3, 4, 5, 6, 7, 8)
- B vs. C: 2 differences (positions 3, 5)
- B vs. D: 7 differences
- C vs. D: 6 differences

**Conclusion:** A and B are most closely related (1 difference). D is most distantly related to all others. The tree would be: ((A, B), C), D).

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
4. **Remember:** differences accumulate in BOTH lineages after divergence`
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
              'No — Species 1 and 2 have 98% similarity, making them the most closely related pair (sister taxa)',
              'Yes — all three species are equally related',
              'Yes — Species 1 and 3 share more homologous structures',
              'No — percentage similarity cannot determine evolutionary relationships'
            ],
            correctAnswer: 0,
            explanation: 'In a similarity matrix, the pair with the highest percentage similarity shares the most recent common ancestor. Species 1 and 2 (98% similar) are sister taxa. Species 3 is the outgroup relative to the 1-2 clade. Percent similarity is a valid (though simplified) measure of molecular relatedness.'
          },
          {
            question: 'A gene is sequenced in four species. Species W and X differ by 3 nucleotides. Species W and Y differ by 12 nucleotides. Species W and Z differ by 45 nucleotides. If the molecular clock rate for this gene is 1 substitution per million years per lineage, approximately when did Species W and X diverge?',
            options: [
              '1.5 million years ago',
              '3 million years ago',
              '6 million years ago',
              '0.75 million years ago'
            ],
            correctAnswer: 0,
            explanation: 'Divergence time = differences ÷ (2 × rate) = 3 ÷ (2 × 1) = 1.5 million years ago. We divide by 2 because mutations accumulate independently in both lineages after the split. At 1 substitution per million years per lineage, 3 total differences means 1.5 million years of independent evolution in each lineage.'
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
          { label: 'The principle that the simplest tree (fewest changes) is preferred is called', options: ['maximum parsimony', 'maximum likelihood', 'natural selection', 'genetic drift'] },
          { label: 'To determine which two taxa are most closely related, you should find the pair with the most recent shared', options: ['common ancestor (node)', 'morphological similarity', 'geographic range', 'ecological niche'] },
          { label: 'In a DNA sequence comparison, fewer nucleotide differences between two species suggests they are more', options: ['closely related', 'distantly related', 'likely to be convergent', 'likely to be analogous'] },
          { label: 'When a cladogram and a molecular phylogeny disagree, the molecular phylogeny is often preferred because molecular data is less affected by', options: ['convergent evolution', 'genetic drift', 'gene flow', 'mutation'] }
        ],
        correctAnswers: ['maximum parsimony', 'common ancestor (node)', 'closely related', 'convergent evolution'],
        hint1: 'Parsimony = simplest explanation. It\'s Occam\'s Razor applied to tree-building.',
        hint2: 'Relatedness is always about recency of common ancestry, not overall similarity.',
        hint3: 'Molecular data helps avoid the trap of analogous structures that look similar but evolved independently.',
        explanation: 'Maximum parsimony selects the tree requiring the fewest changes. Relatedness is determined by the most recent common ancestor. Fewer molecular differences indicate closer relatedness. Molecular data is preferred when morphological data may be misleading due to convergent evolution producing analogous structures.'
      }
    },
    {
      id: 'phyl7-dropdown2',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Putting It All Together** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'A valid clade on a phylogenetic tree must be', options: ['monophyletic — including the ancestor and all descendants', 'paraphyletic — including the ancestor and some descendants', 'polyphyletic — including taxa from multiple ancestors', 'defined by analogous structures'] },
          { label: 'If the outgroup lacks a trait but two ingroup taxa share it, the trait is likely a', options: ['shared derived character (synapomorphy)', 'shared ancestral character (symplesiomorphy)', 'homoplasy from convergent evolution', 'vestigial structure'] },
          { label: 'On the AP exam, a common mistake is assuming that taxa positioned closer together on the page are more', options: ['closely related — but relatedness depends on shared nodes, not page position', 'distantly related', 'likely to be in the same species', 'morphologically identical'] }
        ],
        correctAnswers: ['monophyletic — including the ancestor and all descendants', 'shared derived character (synapomorphy)', 'closely related — but relatedness depends on shared nodes, not page position'],
        hint1: 'Only monophyletic groups (clades) are valid for classification — they include all descendants of one ancestor.',
        hint2: 'If the outgroup doesn\'t have the trait, it\'s derived (evolved after the outgroup split off).',
        hint3: 'This is the #1 mistake students make — tree tips can be rotated around any node without changing meaning.',
        explanation: 'Valid clades must be monophyletic. Traits absent in the outgroup but shared by ingroup members are synapomorphies. The most common exam mistake is reading positions on the page as relatedness — always trace back to shared nodes to determine true evolutionary relationships.'
      }
    }
  ]
};
