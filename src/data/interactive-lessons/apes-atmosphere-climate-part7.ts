export const apesAtmosphereClimatePart7Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo7-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| From Emissions to Impacts |
| Calculations in This Topic |
| Final Checklist |

> 🔑 **Key Concept:** Every part of this topic is one link in a single chain: human activities add greenhouse gases, the gases trap infrared, the trapped energy warms the air, land and especially the ocean, and the dissolved $CO_{2}$ acidifies the sea. Exam questions can start at any link and ask you to reason forward or backward.

## 📖 The Topic on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 9.3 The greenhouse effect | The natural greenhouse effect keeps Earth habitable; GHGs absorb infrared; GWP: CFCs > $N_{2}O$ > $CH_{4}$ > $CO_{2}$ = 1; water vapor is a feedback | Parts 1–2 |
| 9.4 Increases in greenhouse gases | Sources of each gas; $CO_{2}$-equivalents; effects such as sea-level rise and spreading disease vectors | Parts 2–3 |
| 9.5 Global climate change | Ice cores and $CO_{2}$ records; rising temperatures, melting permafrost and sea ice, rising seas, displaced coastal populations; circulation and polar feedbacks | Parts 1, 3, 4 |
| 9.6 Ocean warming | About 90% of the extra heat; habitat loss, metabolic and reproductive changes; coral bleaching | Part 5 |
| 9.7 Ocean acidification | $CO_{2}$ lowers pH and carbonate; shell builders suffer; pH is logarithmic | Part 5 |
| Responses | Mitigation vs adaptation; carbon tax, cap-and-trade, sequestration; Kyoto 1997, Paris 2015 | Part 5 |

Stratospheric ozone depletion, smog and acid rain are in the Atmospheric Pollution lessons; the carbon cycle and the Keeling curve are in the Biogeochemical Cycles lessons.
      `
    },
    {
      id: 'apesatmo7-chain',
      type: 'text' as const,
      content: `
## From Emissions to Impacts

| Link | What happens | Evidence or number |
|---|---|---|
| 1. Emissions | Fossil fuels, deforestation, cement, livestock, rice, landfills, fertilizer | $CO_{2}$ about three-quarters of human emissions by $CO_{2}$-eq |
| 2. Concentrations rise | Emissions exceed what sinks remove | $CO_{2}$ about 280 → above 420 ppm; methane about 0.7 → 1.9 ppm |
| 3. Energy imbalance | More outgoing infrared is absorbed and re-emitted downward | Earth absorbs a little under 1 W/m² more than it emits |
| 4. Warming | Air, land and especially the ocean warm | About 1.1°C (2011–2020 vs 1850–1900); ocean took about 90% of the heat |
| 5. Feedbacks | Ice-albedo, permafrost methane and water vapor amplify warming | The Arctic warms more than twice as fast as the globe |
| 6. Impacts | Sea-level rise, heat waves, drought and downpours, range shifts, disease vectors, displaced people | Sea level up about 20 cm since 1901 |
| 7. Ocean chemistry (side branch from link 2) | Dissolved $CO_{2}$ lowers pH and carbonate | pH about 8.2 → 8.1, about 26% more $H^{+}$ |

### Worked Example: A City's Climate Plan (illustrative data)

A city's yearly greenhouse gas inventory:

| Gas | Mass | GWP (100 yr) | $CO_{2}$-eq |
|---|---|---|---|
| $CO_{2}$ | 50,000 t | 1 | 50,000 t |
| $CH_{4}$ (mostly from its landfill) | 400 t | 30 | 12,000 t |
| $N_{2}O$ (wastewater treatment) | 20 t | 270 | 5,400 t |
| **Total** | | | **67,400 t** |

**Goal:** cut total emissions 25%.

$$67{,}400 \\times 0.25 = 16{,}850\\ \\text{t CO}_{2}\\text{-eq to cut}$$

**Option:** capture 300 t of the landfill's methane and burn it for electricity.

$$300\\ \\text{t} \\times 30 = 9{,}000\\ \\text{t CO}_{2}\\text{-eq avoided} \\quad (\\text{minus about } 825\\ \\text{t of } CO_{2} \\text{ from burning it})$$

Burning 1 t of methane makes $44/16 = 2.75$ t of $CO_{2}$, so 300 t makes about 825 t. The net saving is about $9{,}000 - 825 = 8{,}175$ t, roughly **half** the goal, from one site. That is why capturing landfill methane is a common early step in city climate plans; the rest must come from cutting $CO_{2}$ (efficiency, renewable electricity, transit), which is the larger and longer-lasting share.
      `
    },
    {
      id: 'apesatmo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of processes both raise global sea level?',
            options: [
              'Melting sea ice and thermal expansion',
              'Thermal expansion and melting ice sheets',
              'Melting ice sheets and melting sea ice',
              'Ocean acidification and thermal expansion'
            ],
            correctAnswer: 1,
            explanation: 'Warming water expands, and melting ice sheets add water that was stored on land. Floating sea ice already displaces its own weight, and acidification changes chemistry, not volume.'
          },
          {
            question: 'Ocean warming and ocean acidification are both driven by rising $CO_{2}$. Which effect comes from acidification rather than from warming?',
            options: [
              'Coral bleaching from long heat stress',
              'Less dissolved oxygen in surface water',
              'Thermal expansion of the upper ocean',
              'Fewer carbonate ions for building shells'
            ],
            correctAnswer: 3,
            explanation: 'Acidification lowers pH, and the extra hydrogen ions tie up carbonate ions that shell builders need. Bleaching, lower dissolved oxygen and thermal expansion are all effects of warmer water.'
          },
          {
            question: 'Why do many climate plans target methane leaks for fast results?',
            options: [
              'Methane makes up most of the greenhouse gas mass humans emit',
              'Methane breaks down in about a decade, so cuts work within years',
              'Methane has a lower GWP, so removing it costs less per tonne',
              'Methane is the main cause of ocean acidification worldwide'
            ],
            correctAnswer: 1,
            explanation: 'Because methane is short-lived, cutting its emissions lowers its concentration, and its strong warming effect, within years. Carbon dioxide dominates by mass, methane has a higher GWP, and acidification is caused by carbon dioxide.'
          }
        ]
      }
    },
    {
      id: 'apesatmo7-calcs',
      type: 'text' as const,
      content: `
## Calculations in This Topic

| Skill | Formula or fact | Part |
|---|---|---|
| Energy absorbed | Incoming × (1 − albedo): 340 × 0.70 ≈ 240 W/m² | 2 |
| $CO_{2}$-equivalent | Mass × GWP ($CH_{4}$ about 30 over 100 yr or about 80 over 20 yr; $N_{2}O$ about 270) | 2, 6, 7 |
| Share of total | Part ÷ total × 100 | 2 |
| Percent change | (new − old) ÷ old × 100 | 2, 4, 6 |
| Rate of change | Change ÷ time (mm/yr, ppm/yr, °C per decade) | 3, 4, 6 |
| Projection | Current value + rate × time (a minimum if the rate is accelerating) | 3, 6 |
| Shoreline retreat | Rise × (horizontal distance per 1 m of rise) | 3 |
| Anomaly | Observed − baseline average | 4 |
| pH | Drop of $d$ units → $[H^{+}] \\times 10^{d}$ | 5 |
| Carbon tax | kg → t (÷ 1,000) × price per tonne | 5 |
| Combustion mass | $CH_{4}$ → $CO_{2}$ × 44/16 | 7 |

## Final Checklist

- Can you explain why $CO_{2}$ and methane absorb infrared but nitrogen and oxygen do not?
- Can you rank the gases by GWP, and explain why methane's GWP is lower over 100 years than over 20?
- Can you explain why water vapor is a **feedback**, not a driver?
- Can you name the **two** causes of sea-level rise, and explain why melting sea ice is not one of them?
- Can you give one positive and one negative effect of sea-level change on marine ecosystems?
- Can you explain the ice-albedo feedback and why the poles warm fastest?
- Can you read an ice-core or anomaly graph and calculate a rate with units?
- Can you name a natural driver and explain why it cannot account for recent warming?
- Can you calculate the change in $[H^{+}]$ for a given pH drop, and name organisms harmed by acidification?
- Can you tell mitigation from adaptation, and contrast Kyoto with Paris?
      `
    },
    {
      id: 'apesatmo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comparing the heat trapped by 1 kg of a gas with the heat trapped by 1 kg of $CO_{2}$ gives the gas\'s ___',
            options: ['global warming potential', 'atmospheric residence time', 'surface albedo value', 'carbon sink capacity']
          },
          {
            label: 'The gas that causes the largest share of the natural greenhouse effect but acts as a feedback rather than a driver is ___',
            options: ['water vapor', 'carbon dioxide', 'nitrous oxide', 'methane']
          },
          {
            label: 'The 2015 agreement under which each country sets its own emission targets is the ___',
            options: ['Paris Agreement', 'Kyoto Protocol', 'Montreal Protocol', 'Kigali Amendment']
          }
        ],
        correctAnswers: ['global warming potential', 'water vapor', 'Paris Agreement'],
        hint1: 'Carbon dioxide is the reference, with a value of 1.',
        hint2: 'Its residence time is only about nine days.',
        hint3: 'Kyoto came first, in 1997, with binding targets for developed countries only.',
        explanation: 'Global warming potential compares heat trapped per kilogram with carbon dioxide. Water vapor dominates the natural greenhouse effect but rains out in days, so it amplifies warming rather than starting it. The Paris Agreement (2015) uses nationally determined contributions.'
      }
    },
    {
      id: 'apesatmo7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A chemical plant releases 15 t of nitrous oxide per year (100-year GWP 270). How many tonnes of $CO_{2}$-eq is that?

2) Surface seawater falls from pH 8.1 to pH 7.8. About how many times greater is its hydrogen ion concentration?

3) Sea level rises 4 mm per year for 25 years. How many centimeters is that in total?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4050', '2', '10'],
        hint1: '15 × 270.',
        hint2: 'A drop of 0.3 units: 10 to the power 0.3.',
        hint3: '4 × 25 gives millimeters; 10 mm = 1 cm.',
        explanation: '1) 15 × 270 = 4,050 t CO2-eq. 2) 10 to the power 0.3 ≈ 2, so about twice as many hydrogen ions. 3) 4 × 25 = 100 mm = 10 cm.'
      }
    },
    {
      id: 'apesatmo7-summary',
      type: 'text' as const,
      content: `
## Part 7 Summary

| Theme | Takeaway |
|---|---|
| Greenhouse effect | Natural and necessary; the enhanced effect from human emissions is the problem |
| The gases | $CO_{2}$ (most of the impact), $CH_{4}$ (strong but short-lived), $N_{2}O$ (about 270), CFCs and HFCs (thousands); water vapor is a feedback |
| Evidence | Ice cores, anomalies, rising seas, fingerprints that rule out the sun |
| Impacts | Sea-level rise, extreme weather, polar amplification, range shifts, disease vectors, displaced people |
| The ocean | About 90% of the heat; pH 8.2 → 8.1; shell builders and corals at risk |
| Responses | Mitigation cuts the cause, adaptation copes; carbon pricing, sequestration, Kyoto and Paris |
| Calculations | $CO_{2}$-eq, percent change, rates, projections, pH logarithms, unit conversions |

**Next:** You have finished Atmosphere & Climate. The Atmospheric Pollution lessons cover smog, acid deposition and the stratospheric ozone layer, the other side of Unit 7 and Unit 9.
      `
    }
  ]
};
