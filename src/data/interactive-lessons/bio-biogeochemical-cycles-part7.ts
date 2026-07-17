export const bioBiogeochemicalCyclesPart7Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc7-intro',
      type: 'text' as const,
      content: `# AP Exam Practice: Biogeochemical Cycles 📝

This section focuses on the types of questions you will encounter on the AP Biology exam regarding biogeochemical cycles. You'll practice:

- **Interpreting cycle diagrams** — identifying processes, reservoirs, and fluxes
- **Analyzing data** — calculating carbon flux, interpreting eutrophication graphs
- **Making predictions** — how perturbations propagate through cycles
- **Constructing explanations** — free-response essay-style reasoning

> 🎯 **Exam Tip:** AP Biology frequently tests biogeochemical cycles in the context of **energy flow**, **ecosystem dynamics**, and **human impact**. You must be able to connect molecular-level processes to ecosystem-level consequences.`
    },
    {
      id: 'bgc7-quiz1',
      type: 'multiple-choice' as const,
      content: `**AP Practice: Diagram Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A diagram shows arrows representing carbon flux. Arrow A (photosynthesis) = 120 GtC/yr INTO the biosphere. Arrow B (respiration + decomposition) = 118 GtC/yr OUT of the biosphere. Arrow C (fossil fuel burning) = 9.5 GtC/yr INTO the atmosphere. What is the NET annual change in atmospheric carbon?',
            options: [
              'Decrease of 2 GtC/yr',
              'Increase of 7.5 GtC/yr',
              'Increase of 9.5 GtC/yr',
              'No change'
            ],
            correctAnswer: 1,
            explanation: 'Atmospheric carbon change = Carbon entering atmosphere - Carbon leaving atmosphere. Respiration/decomposition adds 118 GtC/yr and fossil fuels add 9.5 GtC/yr to the atmosphere (total: 127.5). Photosynthesis removes 120 GtC/yr. Net change = 127.5 - 120 = +7.5 GtC/yr increase. (Note: ocean absorption further reduces this to ~5 GtC/yr in reality.)'
          },
          {
            question: 'In a nitrogen cycle diagram, which arrow would represent the process that REQUIRES anaerobic conditions?',
            options: [
              '$N_{2}$ → $NH_{3}$ (nitrogen fixation by Rhizobium)',
              '$NH_{4}^{+}$ → $NO_{3}^{-}$ (nitrification)',
              '$NO_{3}^{-}$ → $N_{2}$ (denitrification)',
              'Organic N → $NH_{4}^{+}$ (ammonification)'
            ],
            correctAnswer: 2,
            explanation: 'Denitrification ($NO_{3}^{-}$ → $N_{2}$) is performed by bacteria like Pseudomonas under strictly anaerobic conditions. In contrast, nitrification REQUIRES oxygen (aerobic). While nitrogenase is inactivated by $O_{2}$, Rhizobium uses leghemoglobin to create a $low-O_{2}$ (microaerobic) environment, not strictly anaerobic.'
          }
        ]
      }
    },
    {
      id: 'bgc7-content2',
      type: 'text' as const,
      content: `## Analyzing Eutrophication Data 📊

### Practice Scenario

A researcher monitored a lake after a new housing development was built nearby (with septic systems). Data collected over 5 years:

| Year | Dissolved Phosphorus (μg/L) | Chlorophyll-a (μg/L) | Dissolved $O_{2}$ (mg/L) | Fish Species Count |
|------|---------------------------|---------------------|---------------------|-------------------|
| 1 (baseline) | 8 | 3 | 9.5 | 24 |
| 2 | 22 | 12 | 8.0 | 22 |
| 3 | 45 | 38 | 5.5 | 16 |
| 4 | 62 | 95 | 2.1 | 7 |
| 5 | 58 | 110 | 1.3 | 3 |

### Key Observations

- **Phosphorus** increased ~7× (septic system leaching)
- **Chlorophyll-a** (proxy for algal biomass) increased ~37× — algal bloom
- **Dissolved $O_{2}$** dropped from 9.5 → 1.3 mg/L — severe hypoxia (< 2 mg/L)
- **Fish species** declined from 24 → 3 — biodiversity collapse

### AP-Style Analysis

**Trophic state classification:**
- Oligotrophic: < 10 μg/L chlorophyll-a (Year 1)
- Mesotrophic: 10–30 μg/L (Year 2)
- Eutrophic: > 30 μg/L (Years 3–5)

> 📝 **FRQ Tip:** When analyzing eutrophication data, always connect the **cause** (nutrient input) → **mechanism** (algal bloom → decomposition) → **effect** ($O_{2}$ depletion → biodiversity loss).`
    },
    {
      id: 'bgc7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP Practice: Data Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Based on the lake eutrophication data above, between which two consecutive years did the lake transition from mesotrophic to eutrophic status?',
            options: [
              'Year 1 → Year 2',
              'Year 2 → Year 3',
              'Year 3 → Year 4',
              'Year 4 → Year 5'
            ],
            correctAnswer: 1,
            explanation: 'A lake is classified as eutrophic when chlorophyll-a exceeds 30 μg/L. In Year 2, chlorophyll-a was 12 μg/L (mesotrophic). In Year 3, it jumped to 38 μg/L (eutrophic). This transition coincided with dissolved phosphorus reaching 45 μg/L, well above the eutrophication threshold.'
          },
          {
            question: 'A student claims that adding nitrogen-fixing cyanobacteria to a phosphorus-limited lake would not increase algal blooms. Is this claim correct?',
            options: [
              'No — nitrogen-fixing bacteria always cause algal blooms',
              'Yes — if phosphorus is the limiting nutrient, adding more nitrogen will not stimulate additional growth',
              'No — nitrogen always stimulates growth regardless of phosphorus levels',
              'Yes — cyanobacteria consume nutrients and reduce algal growth'
            ],
            correctAnswer: 1,
            explanation: 'According to Liebig\'s Law of the Minimum, growth is limited by whichever nutrient is in shortest supply. If phosphorus is limiting, adding nitrogen (even via $N_{2}$ fixation) will not increase total algal biomass because growth is constrained by P availability. The claim is correct — only adding more phosphorus would stimulate further growth.'
          }
        ]
      }
    },
    {
      id: 'bgc7-content3',
      type: 'text' as const,
      content: `## AP Free-Response Question Strategies ✍️

### Common FRQ Themes for Biogeochemical Cycles

**1. Trace an element through a cycle**
- "Describe the path of a carbon atom from atmospheric $CO_{2}$ through a food web and back to the atmosphere"
- Key: Name each process (photosynthesis, consumption, respiration/decomposition) and identify the molecular form at each step

**2. Predict effects of a perturbation**
- "Explain how clear-cutting a forest would affect the local nitrogen and water cycles"
- Key: Address MULTIPLE cycles and their connections; use cause → effect chains

**3. Analyze experimental data**
- "Given the following data on lake nutrient levels, explain the trends and propose a management strategy"
- Key: Identify independent/dependent variables, describe trends, connect to mechanisms, propose evidence-based solutions

### Model FRQ Response Framework

Use the **CLAIM → EVIDENCE → REASONING** structure:

| Component | What to Include |
|-----------|----------------|
| **Claim** | Direct answer to the question |
| **Evidence** | Specific data, values, or biological facts |
| **Reasoning** | WHY the evidence supports the claim (connect to biological principles) |

### Example

**Question:** Explain how burning fossil fuels affects ocean pH.

**Claim:** Burning fossil fuels decreases ocean pH (makes it more acidic).

**Evidence:** Fossil fuel combustion releases $CO_{2}$. Atmospheric $CO_{2}$ has increased from 280 to 420+ ppm. Ocean pH has dropped from 8.2 to 8.1.

**Reasoning:** $CO_{2}$ dissolves in seawater to form carbonic acid ($CO_{2}$ + $H_{2}O$ → $H_{2}CO_{3}$), which dissociates to release $H^{+}$ ions ($H_{2}CO_{3}$ → $HCO_{3}^{-}$ + $H^{+}$). More atmospheric $CO_{2}$ means more dissolves in the ocean, producing more $H^{+}$ ions, lowering pH. This 0.1 unit drop represents a ~30% increase in $H^{+}$ concentration because pH is a logarithmic scale.`
    },
    {
      id: 'bgc7-quiz3',
      type: 'multiple-choice' as const,
      content: `**AP Practice: Prediction and Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A farmer converts a large wetland to cropland and applies heavy nitrogen fertilizer. Which of the following is the LEAST likely consequence?',
            options: [
              'Increased nitrate runoff into nearby streams',
              'Loss of natural water filtration capacity',
              'Increased biological nitrogen fixation in the soil',
              'Downstream eutrophication'
            ],
            correctAnswer: 2,
            explanation: 'Adding synthetic nitrogen fertilizer actually DECREASES biological $N_{2}$ fixation because nitrogen-fixing bacteria reduce activity when soil N is already abundant (no selective advantage to expending ATP on fixation). The other three are all likely consequences: fertilizer washes off (runoff), wetland destruction removes filtration, and excess N causes downstream eutrophication.'
          },
          {
            question: 'If global temperatures increase by 3°C, which of the following positive feedback mechanisms would most rapidly release additional greenhouse gases?',
            options: [
              'Increased chemical weathering of silicate rocks',
              'Accelerated permafrost thawing and decomposition of stored organic carbon',
              'Expansion of tropical forests',
              'Increased $CO_{2}$ dissolution in warmer oceans'
            ],
            correctAnswer: 1,
            explanation: 'Permafrost thawing is a rapid positive feedback: warming → thaw → microbial decomposition of ~1,500 GtC of stored organic matter → $CO_{2}$ and $CH_{4}$ release → more warming. Chemical weathering is a NEGATIVE feedback and operates over millions of years. Warmer oceans actually hold LESS dissolved $CO_{2}$ (gas solubility decreases with temperature). Forest expansion would be a negative feedback (more $CO_{2}$ absorption).'
          }
        ]
      }
    },
    {
      id: 'bgc7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Exam Concepts** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'According to Liebig\'s Law of the Minimum, growth is limited by the nutrient in ___',
            options: ['greatest abundance', 'shortest supply relative to demand', 'the atmosphere', 'the highest concentration']
          },
          {
            label: 'In an AP FRQ, the recommended response structure is ___',
            options: ['Introduction-Body-Conclusion', 'Claim-Evidence-Reasoning', 'Hypothesis-Experiment-Results', 'Question-Answer-Discussion']
          },
          {
            label: 'A carbon atom in atmospheric $CO_{2}$ enters the biosphere through ___',
            options: ['respiration', 'decomposition', 'photosynthesis', 'combustion']
          },
          {
            label: 'When synthetic N fertilizer is abundant, biological nitrogen fixation tends to ___',
            options: ['increase', 'decrease', 'stay the same', 'become toxic']
          }
        ],
        correctAnswers: ['shortest supply relative to demand', 'Claim-Evidence-Reasoning', 'photosynthesis', 'decrease'],
        hint1: 'The "minimum" in Liebig\'s Law refers to the nutrient that is least available.',
        hint2: 'AP Biology scoring rubrics reward structured responses with clear claims supported by evidence.',
        hint3: 'Photosynthesis is the gateway process — $CO_{2}$ enters the biosphere through carbon fixation by autotrophs.',
        explanation: 'Liebig\'s Law states growth is limited by the nutrient in shortest supply. AP free-response questions are best answered using Claim-Evidence-Reasoning (CER) structure. Carbon enters the biosphere from $CO_{2}$ via photosynthesis (carbon fixation by RuBisCO). When synthetic fertilizer provides abundant N, nitrogen-fixing bacteria reduce activity because the energetic cost of fixation (16 ATP per $N_{2}$) is not worthwhile when $NH_{4}^{+}/NO_{3}^{-}$ is already available.'
      }
    }
  ]
};
