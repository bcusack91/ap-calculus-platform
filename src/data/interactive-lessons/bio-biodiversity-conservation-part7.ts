export const bioBiodiversityConservationPart7Data = {
  topicSlug: 'biodiversity-conservation',
  sections: [
    {
      id: 'bco7-intro',
      type: 'text' as const,
      content: `# AP Exam Problems — Biodiversity & Conservation

**Part 7 of 7 — Biodiversity & Conservation**

This section presents AP-style problems that integrate concepts from Parts 1–6. Practice analyzing data, performing calculations, and constructing written explanations.

### What to Expect
- **Data interpretation**: Diversity indices, species-area curves, population viability graphs.
- **Calculations**: Shannon index, Simpson's index, effective population size.
- **Experimental design**: Evaluating conservation programs, identifying controls and variables.
- **Free-response format**: Justify claims with evidence and biological reasoning.
`
    },
    {
      id: 'bco7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Problem Set 1 — Biodiversity Indices** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Researchers survey two island communities. Island X has 4 species with abundances of 40, 30, 20, 10 (total = 100). Island Y has 4 species with abundances of 85, 5, 5, 5. Which statement is correct?',
            options: [
              'Island Y has higher species diversity because it has the same richness as Island X',
              'Island X has higher species diversity due to greater species evenness',
              'Both islands have identical Shannon diversity indices',
              'Island Y has higher Simpson\'s diversity because one species dominates'
            ],
            correctAnswer: 1,
            explanation: 'Both islands have equal species richness (S = 4), but Island X has much greater evenness (abundances are more equitably distributed). Since species diversity depends on both richness and evenness, Island X has the higher Shannon and Simpson diversity indices. Island Y is heavily dominated by one species, reducing its diversity.'
          },
          {
            question: 'A community has 5 equally abundant species (each with 20% of individuals). The Shannon diversity index H\' for this community is:',
            options: [
              '$H\' = -5(0.20 \\times \\ln 0.20) = 1.609$',
              '$H\' = 5 \\times 0.20 = 1.000$',
              '$H\' = \\ln 5 \\times 0.20 = 0.322$',
              '$H\' = -(0.20 + 0.20 + 0.20 + 0.20 + 0.20) = -1.000$'
            ],
            correctAnswer: 0,
            explanation: '$H\' = -\\sum p_i \\ln p_i = -5(0.20 \\times \\ln 0.20) = -5(0.20 \\times -1.609) = -5(-0.322) = 1.609$. This equals $\\ln 5 = 1.609$, confirming that maximum diversity occurs when all species are equally abundant ($H\' = H\'_{max} = \\ln S$).'
          }
        ]
      }
    },
    {
      id: 'bco7-pva',
      type: 'text' as const,
      content: `## Problem Set 2 — Population Viability Analysis

### Scenario
A population of an endangered amphibian has been monitored for 10 years. The data below show the census size (N) and estimated effective population size (Nₑ):

| Year | Census Size (N) | Nₑ |
|---|---|---|
| 1 | 500 | 120 |
| 2 | 480 | 110 |
| 3 | 420 | 90 |
| 4 | 350 | 70 |
| 5 | 300 | 55 |
| 6 | 280 | 48 |
| 7 | 250 | 40 |
| 8 | 220 | 35 |
| 9 | 190 | 28 |
| 10 | 160 | 22 |

### Key Observations
- Census size has declined **68%** over 10 years (500 → 160).
- The ratio $N_e / N$ has remained low (~0.14–0.24), indicating that most individuals do not contribute genetically.
- By Year 10, $N_e = 22$ — **below the 50-individual threshold** for short-term inbreeding risk.
- The population is likely entering the **extinction vortex**: declining Nₑ → more inbreeding → lower fitness → further decline.
`
    },
    {
      id: 'bco7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Problem Set 2 — Data Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Based on the amphibian population data, which of the following is the most immediate genetic concern by Year 10?',
            options: [
              'Gene flow is too high, reducing local adaptation',
              'Nₑ has dropped below 50, increasing risk of severe inbreeding depression',
              'The population has exceeded carrying capacity',
              'Natural selection is eliminating beneficial alleles'
            ],
            correctAnswer: 1,
            explanation: 'With $N_e = 22$ in Year 10, the population is well below the 50-individual threshold for preventing short-term inbreeding depression. At this effective size, genetic drift dominates, deleterious alleles accumulate, and inbreeding depression accelerates — classic signs of the extinction vortex.'
          },
          {
            question: 'Conservation managers propose introducing 15 individuals from a distant population of the same species. This strategy is called genetic rescue. Which outcome would best indicate success?',
            options: [
              'Census population size immediately doubles',
              'Offspring of introduced × local matings show higher heterozygosity and improved survival rates',
              'The introduced individuals outcompete all local individuals',
              'All introduced individuals survive their first year'
            ],
            correctAnswer: 1,
            explanation: 'The goal of genetic rescue is to increase genetic diversity. Success is measured by increased heterozygosity in offspring and improved fitness traits (survival, reproduction, disease resistance) — not simply by adding more individuals. The Florida panther genetic rescue is the classic example: Texas puma introductions produced healthier, more heterozygous offspring.'
          }
        ]
      }
    },
    {
      id: 'bco7-species-area',
      type: 'text' as const,
      content: `## Problem Set 3 — Species-Area Relationships

### The Species-Area Curve
The relationship between habitat area and the number of species it supports:

$$S = cA^z$$

Taking the logarithm of both sides:

$$\\log S = \\log c + z \\log A$$

Where:
- $S$ = number of species
- $A$ = area of habitat
- $c$ = constant (varies by taxon and region)
- $z$ = slope of the log-log relationship (typically 0.1–0.35)
  - Mainland areas: $z ≈ 0.1–0.2$
  - Islands: $z ≈ 0.25–0.35$ (steeper slope due to isolation)

### Application to Conservation
If a habitat is reduced by a fraction, the predicted species loss can be estimated:

$$\\frac{S_{new}}{S_{original}} = \\left(\\frac{A_{new}}{A_{original}}\\right)^z$$

**Example**: If 90% of a habitat is destroyed ($A_{new} = 0.10 \\times A_{original}$) and $z = 0.25$:

$$\\frac{S_{new}}{S_{original}} = 0.10^{0.25} = 0.562$$

This predicts ~44% species loss from a 90% habitat reduction.

### Important Caveat
- Species-area predictions often **overestimate** extinction because:
  - Some species persist in small remnant patches.
  - Species may shift to modified habitats (matrix habitat).
  - There is an **extinction debt** — species committed to extinction but not yet gone.
`
    },
    {
      id: 'bco7-quiz3',
      type: 'multiple-choice' as const,
      content: `**Problem Set 3 — Species-Area Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An island originally covered by 1,000 km² of forest containing an estimated 200 bird species is reduced to 100 km² of forest. Using $z = 0.30$, the predicted number of remaining bird species is approximately:',
            options: [
              '200 (no change)',
              '100 (50% loss)',
              '20 (90% loss)',
              '100 (using $S_{new} = 200 \\times 0.1^{0.30} ≈ 100$)'
            ],
            correctAnswer: 3,
            explanation: '$S_{new} = S_{original} \\times (A_{new}/A_{original})^z = 200 \\times (100/1000)^{0.30} = 200 \\times 0.1^{0.30} = 200 \\times 0.501 ≈ 100$ species. A 90% reduction in forest area predicts roughly a 50% loss of bird species when $z = 0.30$.'
          },
          {
            question: 'The z-value (slope) in the species-area relationship is typically higher for islands than for mainland areas. Which explanation best accounts for this difference?',
            options: [
              'Islands have more favorable climates for species diversity',
              'Island communities are more isolated, making recolonization after local extinction less likely',
              'Mainland areas always have fewer species than islands',
              'The constant c is always higher on islands'
            ],
            correctAnswer: 1,
            explanation: 'Islands have steeper species-area slopes (higher z) because their isolation means that species lost from an island fragment are less likely to be replaced by immigration from nearby areas. On mainlands, species can recolonize habitat patches more easily from surrounding continuous habitat, buffering against local extinctions.'
          }
        ]
      }
    },
    {
      id: 'bco7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Conservation Analysis** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In the species-area equation $S = cA^z$, a higher value of ___ indicates a steeper decline in species with habitat loss.',
            options: ['c', 'S', 'A', 'z']
          },
          {
            label: 'Species that are predicted to go extinct based on habitat loss but have not yet disappeared represent an extinction ___.',
            options: ['vortex', 'debt', 'cascade', 'threshold']
          },
          {
            label: 'When Nₑ drops below 50, the most immediate genetic threat is ___ depression.',
            options: ['inbreeding', 'outbreeding', 'population', 'environmental']
          },
          {
            label: 'The most appropriate index for comparing diversity between two communities where the researcher wants to emphasize differences in dominant species is ___.',
            options: ['Shannon index', 'species richness', 'Simpson\'s index', 'evenness']
          }
        ],
        correctAnswers: ['z', 'debt', 'inbreeding', 'Simpson\'s index'],
        hint1: 'The exponent z controls how steeply species number declines with area.',
        hint2: 'Extinction debt implies a future "payment" — species are committed to extinction but still present.',
        hint3: 'Simpson\'s index uses squared proportions, giving more weight to dominant species.',
        explanation: 'A higher z-value means species number drops more steeply as area decreases. Extinction debt refers to species doomed to local extinction that still persist temporarily. Below Nₑ = 50, inbreeding depression becomes the most urgent genetic concern. Simpson\'s index emphasizes dominant species because squaring proportions amplifies the contribution of common species.'
      }
    },
    {
      id: 'bco7-summary',
      type: 'text' as const,
      content: `## Part 7 Summary — AP Exam Problem Strategies

### Key Formulas to Know
- **Shannon Index**: $H' = -\\sum p_i \\ln p_i$
- **Simpson's Index**: $D = \\sum p_i^2$; Diversity = $1 - D$
- **Evenness**: $E = H' / \\ln S$
- **Effective Population Size**: $N_e = \\frac{4N_fN_m}{N_f + N_m}$
- **Species-Area**: $S = cA^z$ (or $\\log S = \\log c + z \\log A$)

### Free-Response Tips
1. **Show your work**: Write out calculations step by step, even on multiple-choice.
2. **Use data as evidence**: Reference specific values from tables/graphs in your explanations.
3. **Connect concepts**: Link genetic diversity → population fitness → extinction risk → conservation action.
4. **Address multiple threats**: Real species face several HIPPO threats simultaneously.
5. **Evaluate trade-offs**: Conservation plans involve cost-benefit analyses (e.g., single large vs. several small reserves).

### Common Mistakes to Avoid
- Confusing species richness with species diversity (richness is only one component).
- Using census size (N) instead of effective population size (Nₑ) when assessing genetic vulnerability.
- Forgetting that Simpson's and Shannon indices measure different aspects — know when each is appropriate.
- Assuming species-area predictions are exact — they are estimates with limitations.

### Series Complete!
You've covered all major topics in Biodiversity & Conservation. Review Parts 1–6 for content, and practice these AP-style problems until the calculations and reasoning feel automatic. Good luck on the exam!
`
    }
  ]
};
