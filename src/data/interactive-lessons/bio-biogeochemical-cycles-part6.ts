export const bioBiogeochemicalCyclesPart6Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc6-intro',
      type: 'text' as const,
      content: `# Cycle Interactions and Climate Change Feedbacks 🔗

Biogeochemical cycles do not operate in isolation — they are deeply **interconnected**. Changes in one cycle cascade through others, creating feedback loops that can amplify or dampen environmental changes.

## How the Cycles Connect

| Interaction | Connection |
|-------------|-----------|
| **C ↔ Water** | $CO_{2}$ dissolves in water; plants need water for photosynthesis; warming increases evaporation |
| **C ↔ N** | Plants need both C and N for growth; N availability limits $CO_{2}$ uptake by ecosystems |
| **C ↔ P** | P limits productivity in many ecosystems; less P = less photosynthesis = less C fixation |
| **N ↔ P** | Both are nutrients; their ratio (N:P) determines which limits growth in aquatic systems |
| **N ↔ Water** | Nitrate is mobile in water; runoff carries N pollution to waterways |
| **Water ↔ P** | Phosphorus travels via water runoff (no gas phase); erosion mobilizes P |

> 🔬 **AP Key Point:** Biogeochemical cycles are coupled — perturbation of one cycle inevitably affects others. The AP exam frequently tests students' ability to trace these interconnections.`
    },
    {
      id: 'bgc6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Cycle Interactions** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If nitrogen availability in a forest ecosystem suddenly decreases, what is the most likely effect on the carbon cycle?',
            options: [
              'Carbon fixation by photosynthesis would increase',
              'Carbon fixation by photosynthesis would decrease because plants need N for proteins/chlorophyll',
              'There would be no effect on the carbon cycle',
              'Decomposition rates would increase'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen is essential for chlorophyll and the enzyme RuBisCO (both contain N). If N becomes limiting, plants cannot produce enough photosynthetic machinery, reducing $CO_{2}$ fixation. This demonstrates C-N coupling: nitrogen availability directly limits carbon uptake by ecosystems.'
          },
          {
            question: 'The Redfield ratio (C:N:P = 106:16:1) in marine phytoplankton demonstrates that:',
            options: [
              'Carbon is always the limiting nutrient in oceans',
              'Organisms require these elements in relatively fixed proportions',
              'Phosphorus is not important for marine life',
              'The ocean has too much nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'The Redfield ratio shows that phytoplankton require C, N, and P in approximately 106:16:1 molar ratios. Whichever element falls below this ratio relative to the others becomes limiting. This demonstrates the fundamental coupling of C, N, and P cycles in marine ecosystems.'
          }
        ]
      }
    },
    {
      id: 'bgc6-content2',
      type: 'text' as const,
      content: `## Climate Change Feedback Loops 🔄

### Positive Feedback Loops (Amplifying)

Positive feedbacks **amplify** the initial change, potentially leading to runaway effects:

**1. Ice-Albedo Feedback**
- Warming → ice melts → darker surfaces exposed → absorb more solar radiation → more warming
- Arctic sea ice has declined ~40% since 1979

**2. Permafrost-Carbon Feedback**
- Warming → permafrost thaws → frozen organic matter decomposes → releases $CO_{2}$ and $CH_{4}$ → more warming
- Permafrost contains ~1,500 GtC (nearly twice the current atmospheric carbon!)

**3. Water Vapor Feedback**
- Warming → more evaporation → more atmospheric water vapor (a greenhouse gas) → more warming
- Water vapor amplifies $CO_{2}$-driven warming by ~2×

**4. Forest Dieback Feedback**
- Warming + drought → forest die-off → decomposition releases $CO_{2}$ → less $CO_{2}$ absorption → more warming

### Negative Feedback Loops (Stabilizing)

Negative feedbacks **counteract** the initial change:

**1. Chemical Weathering Feedback**
- Higher $CO_{2}$ → warmer temperature → more rainfall → faster rock weathering → $CO_{2}$ consumed in reactions → lower $CO_{2}$
- This operates over millions of years (thermostat of geological climate)

**2. Plant Growth Feedback $(CO_{2} fertilization)$**
- Higher $CO_{2}$ → enhanced photosynthesis (to a point) → more $CO_{2}$ absorbed
- Limited by nutrient availability (N, P) and water

> ⚡ **Critical Distinction:** Currently, positive feedbacks are **outpacing** negative feedbacks, leading to accelerating climate change.`
    },
    {
      id: 'bgc6-content3',
      type: 'text' as const,
      content: `## The Greenhouse Effect and Global Warming 🌡️

### The Natural Greenhouse Effect

1. **Solar radiation** (shortwave) passes through the atmosphere and warms Earth's surface
2. Earth's surface emits **infrared radiation** (longwave/heat)
3. **Greenhouse gases** absorb and re-emit infrared radiation in all directions
4. This keeps Earth ~33°C warmer than it would be without an atmosphere (~15°C vs. −18°C)

### Major Greenhouse Gases

| Gas | Chemical Formula | Global Warming Potential (100-yr) | Main Human Source |
|-----|-----------------|----------------------------------|-------------------|
| **Carbon dioxide** | $CO_{2}$ | 1 (reference) | Fossil fuels, deforestation |
| **Methane** | $CH_{4}$ | 28 | Agriculture, landfills, natural gas |
| **Nitrous oxide** | $N_{2}O$ | 265 | Fertilizers, combustion |
| **CFCs/HFCs** | Various | 1,000–10,000+ | Refrigerants, aerosols |
| **Water vapor** | $H_{2}O$ | N/A (feedback) | Evaporation (amplifies warming) |

### Evidence for Human-Caused Warming

- **$CO_{2}$ concentration:** 280 ppm (pre-industrial) → 420+ ppm (2024)
- **Temperature increase:** +1.1°C above pre-industrial average
- **Isotopic signature:** Fossil fuel $CO_{2}$ has distinct $ {}^{13}C/^{12}C$ ratio (depleted in $ {}^{13}C$)
- **Ocean heat content:** Oceans have absorbed >90% of excess heat
- **Sea level rise:** ~20 cm since 1900 (thermal expansion + ice melt)

> 🔬 **AP Connection:** The AP exam may ask you to connect greenhouse gases to specific biogeochemical cycles — $CO_{2}$ (carbon cycle), $CH_{4}$ (carbon cycle, anaerobic decomposition), $N_{2}O$ (nitrogen cycle, denitrification).`
    },
    {
      id: 'bgc6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Feedbacks and Climate** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The permafrost-carbon feedback is concerning because:',
            options: [
              'Permafrost contains water that will flood coastal cities',
              'Thawing permafrost releases stored methane and $CO_{2}$, potentially doubling atmospheric carbon',
              'Permafrost prevents earthquakes',
              'Permafrost reflects sunlight and keeps the planet cool'
            ],
            correctAnswer: 1,
            explanation: 'Permafrost contains approximately 1,500 GtC of frozen organic matter — nearly twice what is currently in the atmosphere (~850 GtC). As warming thaws permafrost, microbes decompose this organic matter, releasing $CO_{2}$ and $CH_{4}$, which causes further warming — a dangerous positive feedback loop.'
          },
          {
            question: 'Which is an example of a NEGATIVE (stabilizing) climate feedback?',
            options: [
              'Melting ice exposes darker surfaces that absorb more heat',
              'Warmer temperatures increase water vapor, which traps more heat',
              'Higher $CO_{2}$ increases rock weathering, which consumes $CO_{2}$ over geological time',
              'Thawing permafrost releases methane, causing more warming'
            ],
            correctAnswer: 2,
            explanation: 'Chemical weathering is a negative feedback: higher $CO_{2}$ → warmer → more rain → faster weathering of silicate rocks → $CO_{2}$ consumed in weathering reactions → lower $CO_{2}$. This acts as Earth\'s geological thermostat but operates over millions of years — too slow to counteract current rapid emissions.'
          }
        ]
      }
    },
    {
      id: 'bgc6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Cycle Interactions** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The ice-albedo feedback is a ___ feedback loop that amplifies warming',
            options: ['positive', 'negative', 'neutral', 'logarithmic']
          },
          {
            label: 'The greenhouse gas with the highest global warming potential per molecule (100-yr) is ___',
            options: ['$CO_{2}$', '$CH_{4}$', '$N_{2}O$', 'CFCs/HFCs']
          },
          {
            label: 'Nitrogen availability limits carbon fixation because plants need N to make ___',
            options: ['cellulose', 'starch', 'chlorophyll and RuBisCO', 'lignin']
          },
          {
            label: 'Permafrost stores approximately ___ of frozen organic carbon',
            options: ['100 GtC', '500 GtC', '1,500 GtC', '10,000 GtC']
          }
        ],
        correctAnswers: ['positive', 'CFCs/HFCs', 'chlorophyll and RuBisCO', '1,500 GtC'],
        hint1: 'Positive feedbacks amplify change; negative feedbacks resist change.',
        hint2: 'CFCs and HFCs have GWP values of 1,000–10,000+ (per molecule, over 100 years).',
        hint3: 'Chlorophyll captures light; RuBisCO fixes $CO_{2}$. Both are nitrogen-containing proteins.',
        explanation: 'The ice-albedo feedback is a positive feedback — melting ice exposes dark surfaces that absorb more heat. CFCs/HFCs have the highest per-molecule warming potential (1,000–10,000×). Chlorophyll and RuBisCO contain nitrogen, directly linking N availability to carbon fixation capacity. Permafrost stores ~1,500 GtC — nearly double the atmospheric carbon pool.'
      }
    }
  ]
};
