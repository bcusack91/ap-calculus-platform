export const apesBiomesSuccessionPart2Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom2-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 2 of 7 — Aquatic Biomes**

---

| Section |
|---------|
| 📖 What Shapes an Aquatic Biome |
| Freshwater Biomes: Rivers, Lakes and Wetlands |
| Where Fresh Water Meets the Sea |
| Marine Biomes: Reefs, Shores and Open Ocean |
| Calculating With Salinity and Oxygen |

> 🔑 **Key Concept:** Part 1 sorted land biomes by temperature and precipitation. Water biomes are sorted by different factors: **salinity, depth, flow, temperature and dissolved oxygen**. This part covers each aquatic biome named in the AP course and works the calculations that go with them.
      `
    },
    {
      id: 'apesbiom2-factors',
      type: 'text' as const,
      content: `
## 📖 What Shapes an Aquatic Biome

| Factor | Why it matters | Range |
|---|---|---|
| **Salinity** | Organisms must balance salt and water across their cells, so most are adapted to fresh, brackish or salt water, not all three | Fresh water under about 0.5 ppt; seawater about 35 ppt; estuaries in between |
| **Depth** | Sunlight penetrates only the upper layer, so photosynthesis is limited to shallow water or the surface | Photic zone: top layer where light supports photosynthesis |
| **Flow** | Moving water carries oxygen and sediment and limits which organisms can hold on | Fast streams vs still lakes |
| **Temperature** | Sets metabolic rates and how much oxygen water can hold | Cold water holds more dissolved oxygen |
| **Nutrients** | Nitrogen and phosphorus limit phytoplankton | High near runoff and upwelling; low in the open ocean |

**ppt** means parts per thousand: 35 ppt is 35 g of dissolved salts per kilogram of water.

## Freshwater Biomes: Rivers, Lakes and Wetlands

### Rivers and streams

- **Flowing water** is well mixed with air, so dissolved oxygen is usually high, especially in cold, fast headwaters.
- Rivers carry sediment and nutrients downstream. Where they slow and spread out, they deposit fertile soil on **floodplains** and build **deltas**.

### Lakes and ponds: four zones

| Zone | Location | Life |
|---|---|---|
| **Littoral** | Shallow water near shore, where light reaches the bottom | Rooted plants such as cattails and lilies; snails, insects, amphibians |
| **Limnetic** | Open, sunlit surface water away from shore | Phytoplankton, zooplankton and fish; most of the lake's photosynthesis |
| **Profundal** | Deep open water below the reach of light | No photosynthesis; dissolved oxygen can run low |
| **Benthic** | The bottom sediments at all depths | Decomposers, insect larvae, worms, mussels |

### Wetlands

Land where the soil is saturated with water for at least part of the year, supporting plants adapted to waterlogged soil.

| Type | Defining feature |
|---|---|
| **Marsh** | Dominated by non-woody plants (cattails, reeds, sedges) |
| **Swamp** | Dominated by trees or shrubs (cypress, red maple) |
| **Bog** | Acidic, low-nutrient, fed mostly by rain; peat moss accumulates |

Wetlands are among the most productive ecosystems per area. They **store floodwater**, **filter pollutants and sediment**, recharge groundwater and provide breeding habitat for fish, amphibians and waterfowl.
      `
    },
    {
      id: 'apesbiom2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In which lake zone would you expect the lowest dissolved oxygen during a warm summer?',
            options: [
              'Profundal zone',
              'Littoral zone',
              'Limnetic zone',
              'Surface of a shallow bay'
            ],
            correctAnswer: 0,
            explanation: 'The profundal zone is deep and dark, so no photosynthesis adds oxygen, while decomposers there consume it. The littoral and limnetic zones are sunlit and in contact with air.'
          },
          {
            question: 'Which feature most clearly distinguishes a swamp from a marsh?',
            options: [
              'A swamp is dominated by trees, while a marsh is dominated by grasses and reeds',
              'A swamp contains salt water, while a marsh always contains fresh water',
              'A swamp is acidic and fed only by rain, while a marsh is fed by rivers',
              'A swamp dries out completely each summer, while a marsh stays flooded'
            ],
            correctAnswer: 0,
            explanation: 'Swamps are wetlands dominated by woody plants such as cypress, and marshes by non-woody plants such as cattails and reeds. Both can be fresh or salt water, and the acidic, rain-fed wetland is a bog.'
          },
          {
            question: 'Why do cold, fast-flowing mountain streams usually have high dissolved oxygen?',
            options: [
              'Cold water holds more gas, and turbulence mixes air into it',
              'Fast water carries more nutrients that feed oxygen-producing algae',
              'Mountain streams receive little sunlight, so less oxygen is used up',
              'Stream insects release oxygen into the water as they respire'
            ],
            correctAnswer: 0,
            explanation: 'Gas solubility rises as temperature falls, and churning water constantly mixes atmospheric oxygen in. Respiring organisms consume oxygen rather than releasing it.'
          }
        ]
      }
    },
    {
      id: 'apesbiom2-marine',
      type: 'text' as const,
      content: `
## Where Fresh Water Meets the Sea

An **estuary** is where a river meets the ocean. Its water is **brackish** (a mix of fresh and salt), and salinity changes with the tides and the seasons.

- Rivers deliver nutrients and sediment, and shallow water lets light reach the bottom, so estuaries are highly productive.
- Many commercially important fish and shellfish use estuaries as **nurseries**.
- **Salt marshes** fringe estuaries in temperate zones; their grasses tolerate salt and daily flooding.
- **Mangrove swamps** grow along tropical and subtropical coasts. Mangrove roots trap sediment, protect shorelines from storm surge and erosion, and shelter young fish.

## Marine Biomes: Reefs, Shores and Open Ocean

| Biome | Conditions | Key features |
|---|---|---|
| **Coral reef** | Warm, shallow, clear, nutrient-poor tropical water | Coral polyps live in a **mutualism** with photosynthetic algae (zooxanthellae) that supply most of their food; one of the most diverse ecosystems on Earth |
| **Intertidal zone** | Shoreline between high and low tide | Organisms must survive exposure to air, crashing waves, and swings in temperature and salinity; distinct bands of species at different heights |
| **Open ocean (pelagic)** | Deep water away from shore | Photic zone near the surface supports phytoplankton; nutrient-poor surface water keeps productivity per area low |
| **Aphotic and abyssal zones** | Below the reach of light, down to the deep sea floor | Cold, dark, high pressure; food drifts down from above; hydrothermal vent communities rely on **chemosynthesis** |

Coral reefs are productive in nutrient-poor water because the coral-algae partnership recycles nutrients tightly. Why the open ocean is low per square meter but large in total was covered in the Ecosystem Structure topic (Part 2).

> 🔑 **AP Connection:** If a question gives salinity, depth and light conditions and asks you to "identify the biome," match the combination: brackish + shallow + river mouth = estuary; warm + shallow + clear + tropical = coral reef; deep + dark = aphotic or abyssal zone.
      `
    },
    {
      id: 'apesbiom2-calcs',
      type: 'text' as const,
      content: `
## Calculating With Salinity and Oxygen

### Worked Example 1: Mixing in an Estuary

At one site, 3 parts river water (0 ppt) mix with 1 part seawater (35 ppt). The salinity is the weighted average:

$$\\frac{(3 \\times 0) + (1 \\times 35)}{3 + 1} = \\frac{35}{4} = 8.75\\ \\text{ppt}$$

Farther seaward, equal parts mix: $\\dfrac{0 + 35}{2} = 17.5$ ppt.

### Worked Example 2: Grams of Salt

Seawater at 35 ppt holds 35 g of salt per kg of water. How much salt is in 20 kg of seawater?

$$20\\ \\text{kg} \\times 35\\ \\text{g/kg} = 700\\ \\text{g}$$

### Worked Example 3: Temperature and Dissolved Oxygen

The maximum dissolved oxygen fresh water can hold at sea-level pressure:

| Water temperature | Saturation DO |
|---|---|
| 0 °C | about 14.6 mg/L |
| 10 °C | about 11.3 mg/L |
| 20 °C | about 9.1 mg/L |
| 30 °C | about 7.6 mg/L |

Percent change in maximum DO when a stream warms from 10 °C to 30 °C:

$$\\frac{7.6 - 11.3}{11.3} \\times 100 \\approx -33\\%$$

Warmer water holds about a third less oxygen, while fish need **more** oxygen because their metabolism speeds up. That double squeeze is why thermal pollution and warm summers stress cold-water fish such as trout.
      `
    },
    {
      id: 'apesbiom2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units.

1) At an estuary site, 1 part river water (0 ppt) mixes with 4 parts seawater (35 ppt). What is the salinity in ppt?

2) How many grams of dissolved salt are in 8 kg of seawater at 35 ppt?

3) A pond's maximum dissolved oxygen falls from 9.1 mg/L to 7.6 mg/L as it warms. What is the percent decrease, to the nearest whole percent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['28', '280', '16'],
        hint1: 'Weighted average: (1 × 0 + 4 × 35) ÷ 5.',
        hint2: 'Each kilogram holds 35 g of salt.',
        hint3: '(9.1 − 7.6) ÷ 9.1 × 100.',
        explanation: '1) 140 ÷ 5 = 28 ppt. 2) 8 × 35 = 280 g. 3) 1.5 ÷ 9.1 × 100 ≈ 16 percent.'
      }
    },
    {
      id: 'apesbiom2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A site has salinity that rises and falls with each tide, shallow sunlit water and grasses rooted in mud. Which biome is it?',
            options: [
              'Salt marsh in an estuary',
              'Coral reef',
              'Littoral zone of a lake',
              'Abyssal zone'
            ],
            correctAnswer: 0,
            explanation: 'Tidal swings in salinity mean fresh and salt water are mixing, and salt-tolerant grasses rooted in mud describe a salt marsh. A lake littoral zone is fresh water with no tides.'
          },
          {
            question: 'Ocean warming causes corals to expel the algae living in their tissues. Why does this threaten the reef?',
            options: [
              'The algae supply most of the coral\'s food through photosynthesis',
              'The algae shield the coral from predators by making it toxic',
              'The algae build the calcium carbonate skeleton the coral lives in',
              'The algae filter nitrogen from the water before it reaches the coral'
            ],
            correctAnswer: 0,
            explanation: 'Zooxanthellae photosynthesize and pass most of their sugars to the coral, so bleached corals starve if the algae do not return. The coral, not the algae, builds the calcium carbonate skeleton.'
          },
          {
            question: 'A developer proposes clearing mangroves along a tropical coast to build a resort. Which consequence is most likely?',
            options: [
              'More shoreline erosion and storm damage, and fewer young fish offshore',
              'Higher salinity in nearby rivers because mangroves release fresh water',
              'Greater coral growth because the mangroves were shading nearby reefs',
              'Lower ocean temperatures because mangroves trap heat near the coast'
            ],
            correctAnswer: 0,
            explanation: 'Mangrove roots hold sediment, absorb wave and storm-surge energy, and serve as nursery habitat for juvenile fish. Removing them exposes the shore and reduces the fish that later move to reefs and open water.'
          }
        ]
      }
    },
    {
      id: 'apesbiom2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Biome | Defining features |
|---|---|
| Rivers and streams | Flowing; high DO; carry sediment to floodplains and deltas |
| Lakes | Littoral (shore, rooted plants), limnetic (open sunlit water), profundal (deep, dark), benthic (bottom) |
| Wetlands | Saturated soil; marsh (non-woody), swamp (trees), bog (acidic, peat); flood control and filtration |
| Estuaries | Brackish; nutrient-rich; nurseries; salt marshes (temperate) and mangroves (tropical) |
| Coral reefs | Warm, shallow, clear, nutrient-poor; coral-algae mutualism; very high diversity |
| Intertidal | Between tides; organisms tolerate drying, waves and salinity swings |
| Open ocean | Low productivity per area; photic zone on top, aphotic and abyssal below |

**Next:** Part 3 returns to land and shows how to read a climatograph, why soils differ so much between biomes, and how biomes may shift as the climate changes.
      `
    }
  ]
};
