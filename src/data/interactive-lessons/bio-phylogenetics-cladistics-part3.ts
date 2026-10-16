export const bioPhylogeneticsCladisticsPart3Data = {
  topicSlug: 'phylogenetics-cladistics',
  sections: [
    {
      id: 'phyl3-intro',
      type: 'text' as const,
      content: `# Molecular Phylogenetics

**Part 3 of 7 — Phylogenetics & Cladistics**

Modern phylogenetics relies heavily on **molecular data** — DNA nucleotide sequences and protein amino acid sequences — to reconstruct evolutionary relationships. Molecular data typically provide more accurate and reliable evidence than morphological traits, and they sometimes overturn relationships inferred from anatomy alone.

### Why molecules?

| Advantage | Explanation |
|---|---|
| **Universal** | All life uses DNA → any organisms can be compared |
| **Quantifiable** | Sequence differences can be counted precisely |
| **Abundant data** | One gene offers hundreds of comparable positions; a genome offers millions |
| **Less subjective** | Morphological traits can be ambiguous; base pairs are discrete |
| **Less fooled by convergence** | Similar environments can shape similar bodies, but they rarely produce matching sequences across many positions |
| **Works for all taxa** | Even organisms with no morphological similarities (e.g., bacteria vs. plants) |

### How molecular comparison works

1. **Choose a gene or protein** shared by all taxa being compared (a **homologous** gene)
2. **Align sequences** — match corresponding positions across species
3. **Count differences** — more differences = more time since divergence
4. **Build the tree** — taxa with fewer differences are placed closer together

> 🧬 **Example: Cytochrome c** is an electron transport chain protein found in the mitochondria of nearly all eukaryotes. Comparing the amino acid sequences:
> - Human vs. chimpanzee: **0 differences** (identical)
> - Human vs. rhesus monkey: **1 difference**
> - Human vs. dog: **11 differences**
> - Human vs. tuna: **21 differences**
> - Human vs. yeast: **44 differences**
>
> This gradient of differences matches the relationships inferred from anatomy and the fossil record.`
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
              'It supplies many countable characters that convergence rarely mimics',
              'It is always correct, so trees built from it never need revision',
              'Morphological traits cannot be used in any phylogenetic analysis',
              'It can be collected only from organisms that are still alive'
            ],
            correctAnswer: 0,
            explanation: 'A sequence offers many discrete positions that can be counted, and similar environments rarely produce matching sequences across many positions, so molecular data is less misled by convergent evolution. Molecular trees are still hypotheses that get revised, morphology remains valuable (especially for fossils), and DNA can sometimes be recovered from preserved or recently extinct organisms.'
          },
          {
            question: 'Two species differ by 5 amino acids in cytochrome c, while a third species differs from both by 20 amino acids. What can you infer?',
            options: [
              'The first two species are each other\'s closest relatives',
              'The third species must have evolved faster than the other two species',
              'Both of the first two species must belong to the same genus',
              'All three species diverged from one another at about the same time'
            ],
            correctAnswer: 0,
            explanation: 'Fewer molecular differences indicate more recent divergence. If two species differ by only 5 amino acids, they diverged from each other more recently than either did from the third species (20 differences). The data say nothing about faster evolution in one lineage, and sequence counts alone do not assign species to named groups.'
          }
        ]
      }
    },
    {
      id: 'phyl3-clocks',
      type: 'text' as const,
      content: `## Molecular Clocks

A **molecular clock** uses the number of sequence differences between species to estimate how long ago their lineages diverged. Phylogenetic trees can show the amount of change over time because they are calibrated by fossils or a molecular clock.

### The molecular clock idea

If a gene accumulates differences at a roughly **constant rate**, then the number of differences between two species is proportional to the time since they diverged.

### Calibrating the clock

The rate must first be **calibrated** using a divergence whose date is known from independent evidence:
- **Fossil evidence** — the first appearance of a lineage in the fossil record
- **Geological events** — such as the separation of continents or the formation of islands

$$\\text{Time since divergence} = \\frac{\\text{Differences between the two species}}{\\text{Differences per million years (from calibration)}}$$

> 🕐 **Example:** Fossils show that species A and B diverged 20 million years ago, and a gene differs at 40 positions between them. The calibrated rate is 40 ÷ 20 = **2 differences per million years**. If species A and C differ at 10 positions in the same gene, they diverged about 10 ÷ 2 = **5 million years ago**.

### Limitations of molecular clocks

| Limitation | Explanation |
|---|---|
| **Rate varies among genes** | Genes under strong functional constraint change slowly; others change quickly |
| **Rate varies among lineages** | Organisms with shorter generation times may accumulate changes faster |
| **Calibration uncertainty** | The fossil or geological dates used to set the rate may be imprecise |

Despite these caveats, molecular clocks remain a powerful tool for estimating divergence times, especially when several genes and calibration points are used.`
    },
    {
      id: 'phyl3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Molecular Clocks** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Fossils show that species A and B diverged 10 million years ago, and gene X differs at 20 positions between them. Species A and C differ at 6 positions in gene X. Assuming a constant rate, about when did A and C diverge?',
            options: [
              '3 million years ago',
              '6 million years ago',
              '12 million years ago',
              '30 million years ago'
            ],
            correctAnswer: 0,
            explanation: 'The calibration gives 20 differences ÷ 10 million years = 2 differences per million years. Species A and C differ at 6 positions, so they diverged about 6 ÷ 2 = 3 million years ago. Reading the 6 differences directly as millions of years skips the calibration step.'
          },
          {
            question: 'Which of the following is a major limitation of the molecular clock approach?',
            options: [
              'The rate of change can differ among genes and lineages',
              'The clock works only on protein sequences and never on DNA',
              'The method assumes that natural selection never acts on genes',
              'The method works only for splits less than a million years old'
            ],
            correctAnswer: 0,
            explanation: 'The biggest limitation is that rates of change are not perfectly constant: they vary between genes (some are highly conserved) and between lineages (for example, with generation time). Molecular clocks work with both DNA and protein sequences, and they are used to estimate divergences hundreds of millions of years old.'
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
          { label: 'A molecular clock estimates divergence time by assuming changes accumulate at a roughly', options: ['constant rate', 'increasing rate', 'random rate', 'decreasing rate'] },
          { label: 'Molecular clocks must be calibrated using evidence from the', options: ['fossil record or geological events', 'metabolic rates of living species', 'present-day population sizes', 'body sizes of the species compared'] }
        ],
        correctAnswers: ['genes or proteins', 'closely related', 'constant rate', 'fossil record or geological events'],
        hint1: 'Molecular phylogenetics only works if you compare the same gene or protein across species.',
        hint2: 'Fewer differences = less time since divergence = more closely related.',
        hint3: 'The molecular clock depends on a roughly constant rate, calibrated by independent evidence.',
        explanation: 'Molecular phylogenetics compares homologous gene or protein sequences across organisms. Fewer differences imply more recent common ancestry. The molecular clock assumes a roughly constant rate of change and must be calibrated using fossil dates or known geological events.'
      }
    }
  ]
};
