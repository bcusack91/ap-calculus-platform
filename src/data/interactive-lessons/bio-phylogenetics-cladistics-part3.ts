export const bioPhylogeneticsCladisticsPart3Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl3-intro',
      type: 'text' as const,
      content: `# Molecular Phylogenetics

**Part 3 of 7 — Phylogenetics & Cladistics**

Modern phylogenetics relies heavily on **molecular data** — DNA sequences, RNA sequences, and protein sequences — to reconstruct evolutionary relationships. Molecular evidence often confirms (and sometimes overturns) relationships inferred from morphology alone.

### Why molecules?

| Advantage | Explanation |
|---|---|
| **Universal** | All life uses DNA/RNA → any organisms can be compared |
| **Quantifiable** | Sequence differences can be counted precisely |
| **Abundant data** | Genomes contain millions of comparable positions |
| **Less subjective** | Morphological traits can be ambiguous; base pairs are discrete |
| **Works for all taxa** | Even organisms with no morphological similarities (e.g., bacteria vs. archaea) |

### How molecular comparison works

1. **Choose a gene or protein** shared by all taxa being compared (a **homologous** gene)
2. **Align sequences** — match corresponding positions across species
3. **Count differences** — more differences = more time since divergence
4. **Build the tree** — taxa with fewer differences are placed closer together

> 🧬 **Example: Cytochrome c** is a protein involved in the electron transport chain found in nearly all eukaryotes. Comparing the amino acid sequences:
> - Human vs. chimpanzee: **0 differences** (identical)
> - Human vs. rhesus monkey: **1 difference**
> - Human vs. dog: **11 differences**
> - Human vs. tuna: **21 differences**
> - Human vs. yeast: **44 differences**
>
> This gradient of differences matches the expected evolutionary relationships perfectly.`
    },
    {
      id: 'phyl3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Molecular Comparison** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why is molecular data often preferred over morphological data for constructing phylogenies?',
            options: [
              'Molecular data is quantifiable, universal across life, and less influenced by convergent evolution',
              'Molecular data is always more accurate than morphological data',
              'Morphological data cannot be used for any phylogenetic analysis',
              'Molecular data requires fewer specimens to analyze'
            ],
            correctAnswer: 0,
            explanation: 'Molecular data is preferred because DNA/RNA is shared by all life (universal), mutations can be counted objectively (quantifiable), and molecular similarities are less likely to result from convergent evolution than morphological similarities. However, morphological data is still valuable, especially for fossil species.'
          },
          {
            question: 'Two species differ by 5 amino acids in cytochrome c, while a third species differs from both by 20 amino acids. What can you infer?',
            options: [
              'The first two species share a more recent common ancestor than either does with the third',
              'The third species evolved faster than the other two',
              'The first two species are in the same genus',
              'All three species are equally related'
            ],
            correctAnswer: 0,
            explanation: 'Fewer molecular differences indicate more recent divergence. If two species differ by only 5 amino acids, they diverged more recently from a common ancestor than either did from the third species (20 differences). We cannot infer taxonomic rank (genus) from sequence data alone.'
          }
        ]
      }
    },
    {
      id: 'phyl3-clocks',
      type: 'text' as const,
      content: `## Molecular Clocks

A **molecular clock** is a technique that uses the rate of molecular change to estimate the time of evolutionary events (divergence times).

### The molecular clock hypothesis

If mutations accumulate at a roughly **constant rate** over time in a given gene, then the number of differences between two sequences is proportional to the time since they diverged.

$$\\text{Divergence time} = \\frac{\\text{Number of substitutions}}{2 \\times \\text{Substitution rate}}$$

The factor of 2 accounts for mutations accumulating independently in *both* lineages after divergence.

### Calibrating the clock

Molecular clocks must be **calibrated** using known divergence events, typically from:
- **Fossil evidence** — the first appearance of a taxon in the fossil record
- **Geological events** — such as the separation of continents or formation of islands

> 🕐 **Example:** If the fossil record shows that two lineages diverged 60 million years ago and they differ by 30 substitutions, the rate is 30 ÷ (2 × 60 million) = **0.25 substitutions per million years per lineage**.

### Limitations of molecular clocks

| Limitation | Explanation |
|---|---|
| **Rate variation** | Different genes evolve at different rates |
| **Generation time effects** | Organisms with shorter generation times may accumulate mutations faster |
| **Selection pressure** | Functional constraints can slow or change mutation rates |
| **Saturation** | Over very long time scales, repeated mutations at the same site obscure the signal |
| **Calibration uncertainty** | Fossil dates themselves may be imprecise |

Despite these caveats, molecular clocks remain a powerful tool for estimating divergence times, especially when multiple genes and calibration points are used.`
    },
    {
      id: 'phyl3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Molecular Clocks** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Gene X accumulates mutations at a rate of 2 substitutions per million years per lineage. Two species differ by 16 substitutions in Gene X. How long ago did they diverge?',
            options: [
              '4 million years ago',
              '8 million years ago',
              '16 million years ago',
              '32 million years ago'
            ],
            correctAnswer: 0,
            explanation: 'Divergence time = substitutions ÷ (2 × rate) = 16 ÷ (2 × 2) = 4 million years. We divide by 2 because mutations accumulate independently in both lineages after the split.'
          },
          {
            question: 'Which of the following is a major limitation of the molecular clock approach?',
            options: [
              'Mutation rates can vary across genes, lineages, and over time',
              'Molecular clocks can only be used with protein sequences, not DNA',
              'Molecular clocks assume that natural selection does not occur',
              'The technique only works for organisms that diverged less than 1 million years ago'
            ],
            correctAnswer: 0,
            explanation: 'The biggest limitation is that mutation rates are not perfectly constant. They vary between genes (some are more conserved), between lineages (generation time effects), and can be influenced by natural selection. However, molecular clocks do work with both DNA and protein, and they can estimate divergence over hundreds of millions of years.'
          }
        ]
      }
    },
    {
      id: 'phyl3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Molecular Phylogenetics** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Molecular phylogenetics compares sequences of shared homologous', options: ['genes or proteins', 'analogous structures', 'fossil specimens', 'ecological niches'] },
          { label: 'Fewer molecular differences between species indicates they are more', options: ['closely related', 'distantly related', 'ecologically similar', 'genetically identical'] },
          { label: 'A molecular clock estimates divergence time by assuming mutations accumulate at a roughly', options: ['constant rate', 'increasing rate', 'random rate', 'decreasing rate'] },
          { label: 'Molecular clocks must be calibrated using evidence from the', options: ['fossil record or geological events', 'organism\'s metabolism', 'ecological niche', 'organism\'s body size'] }
        ],
        correctAnswers: ['genes or proteins', 'closely related', 'constant rate', 'fossil record or geological events'],
        hint1: 'Molecular phylogenetics only works if you compare the same gene or protein across species.',
        hint2: 'Fewer differences = less time since divergence = more closely related.',
        hint3: 'The molecular clock hypothesis depends on a roughly constant mutation rate, calibrated by independent evidence.',
        explanation: 'Molecular phylogenetics compares homologous gene or protein sequences across organisms. Fewer differences imply more recent common ancestry. The molecular clock technique assumes a roughly constant substitution rate and must be calibrated using fossil record dates or known geological events.'
      }
    }
  ]
};
