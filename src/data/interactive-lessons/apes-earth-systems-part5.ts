export const apesEarthSystemsPart5Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart5-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 5 of 7 — Watersheds and El Niño / La Niña**

---

| Section |
|---------|
| 📖 Watersheds |
| How Land Use Changes Runoff |
| The El Niño–Southern Oscillation (ENSO) |

> 🔑 **Key Concept:** A watershed connects everything that happens on land to the water downstream (CED Topic 4.6). The El Niño–Southern Oscillation connects the ocean and atmosphere across the Pacific, shifting rainfall, fisheries and storms around the world (CED Topic 4.9).
      `
    },
    {
      id: 'apeseart5-watersheds',
      type: 'text' as const,
      content: `
## 📖 Watersheds

A **watershed** (drainage basin) is all of the land area that drains into a particular river, lake or other body of water. Ridges and high ground form its boundaries, called **divides**. Every point on land lies in some watershed.

Watersheds are nested: the Ohio River watershed is part of the much larger Mississippi River watershed, which drains about 40% of the land area of the lower 48 states into the Gulf of Mexico.

### Characteristics that control how a watershed behaves

| Characteristic | Effect |
|---|---|
| **Area** | Larger watersheds collect more water and deliver larger flood volumes |
| **Length** | Longer watersheds take longer to deliver water to the outlet |
| **Slope** | Steep slopes speed runoff and erosion; gentle slopes allow infiltration |
| **Soil** | Sandy, permeable soils absorb water; clay and compacted soils shed it as runoff |
| **Vegetation** | Plants slow runoff, hold soil and take up nutrients; bare ground erodes |

### Human activities that affect watersheds

- **Agriculture:** fertilizer and animal waste add nitrogen and phosphorus (eutrophication downstream); tilled fields add sediment.
- **Clear-cutting:** removes the vegetation that holds soil, increasing sediment and runoff.
- **Urbanization:** pavement and roofs (**impervious surfaces**) block infiltration, so more rain becomes fast runoff carrying oil, metals and trash.
- **Dams and channelization:** change flow, trap sediment and block fish migration.

Because everything flows downhill to the outlet, a problem anywhere in a watershed can show up far downstream, as the Gulf of Mexico dead zone shows for the Mississippi.
      `
    },
    {
      id: 'apeseart5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which characteristic of a watershed would most increase the speed of runoff after a storm?',
            options: [
              'Gentle slopes covered by dense native grasses',
              'Steep slopes with thin, bare soil',
              'Deep sandy soils with high permeability',
              'Wide wetlands along the main channel of the river'
            ],
            correctAnswer: 1,
            explanation: 'Steep, bare slopes let water run off quickly with little infiltration. Vegetation, permeable soils and wetlands all slow water down and let more of it soak in.'
          },
          {
            question: 'A town is far upstream from a lake but in the same watershed. Why can the town\'s lawn fertilizer affect algae in the lake?',
            options: [
              'Fertilizer evaporates and falls into the lake as rain near the shore',
              'Runoff from the town drains downhill through the watershed to the lake',
              'Groundwater in every watershed flows directly toward the largest lake',
              'Algae spores from lawns are carried to the lake by the prevailing wind'
            ],
            correctAnswer: 1,
            explanation: 'All land in a watershed drains toward its outlet, so dissolved nitrogen and phosphorus in runoff are carried downstream to the lake, where they fuel algal growth.'
          }
        ]
      }
    },
    {
      id: 'apeseart5-runoff',
      type: 'text' as const,
      content: `
## How Land Use Changes Runoff

### Worked Example: Runoff Volume

A storm drops 2.0 cm of rain on a 50 $km^{2}$ watershed. In its forested condition, 10% of the rain becomes surface runoff. How many cubic meters of runoff is that?

1. Convert rainfall depth to meters: $2.0\\ \\text{cm} \\div 100 = 0.020\\ \\text{m}$
2. Convert area to $m^{2}$: $50\\ km^{2} \\times 1{,}000{,}000\\ m^{2}/km^{2} = 5.0 \\times 10^{7}\\ m^{2}$
3. Total rain volume: $0.020\\ \\text{m} \\times 5.0 \\times 10^{7}\\ m^{2} = 1.0 \\times 10^{6}\\ m^{3}$
4. Runoff at 10%: $1.0 \\times 10^{6} \\times 0.10 = 1.0 \\times 10^{5}\\ m^{3}$
5. In liters ($1\\ m^{3} = 1{,}000$ L): $1.0 \\times 10^{8}$ L

### Worked Example: After Development

Suburbs and roads are built across the watershed, and runoff rises to 40% of rainfall.

1. New runoff: $1.0 \\times 10^{6} \\times 0.40 = 4.0 \\times 10^{5}\\ m^{3}$
2. Percent change: $\\dfrac{4.0 \\times 10^{5} - 1.0 \\times 10^{5}}{1.0 \\times 10^{5}} \\times 100 = +300\\%$

Four times as much water now reaches the streams, and it arrives faster, raising flood peaks, eroding stream banks and carrying more pollutants. Less water soaks in to recharge groundwater.

> 🔑 **AP Connection:** Solutions to urban runoff appear often on the exam: permeable pavement, green roofs, rain gardens, retention ponds and restored wetlands all increase infiltration or slow water down.
      `
    },
    {
      id: 'apeseart5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A storm drops 3.0 cm of rain on a 20 $km^{2}$ watershed.

1) What is the total volume of rain, in cubic meters? (no commas)

2) If 25% becomes runoff, how many cubic meters of runoff is that?

3) After paving, runoff becomes 60% of rainfall. What is the percent increase in runoff volume?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['600000', '150000', '140'],
        hint1: '0.030 m × 20,000,000 m².',
        hint2: 'Multiply the total rain volume by 0.25.',
        hint3: 'New runoff is 0.60 × total rain. Percent change = (new − old) ÷ old × 100.',
        explanation: '1) 0.030 m × 2.0 × 10^7 m² = 600,000 m³. 2) 600,000 × 0.25 = 150,000 m³. 3) New runoff is 360,000 m³, and (360,000 − 150,000) ÷ 150,000 × 100 = 140 percent.'
      }
    },
    {
      id: 'apeseart5-enso',
      type: 'text' as const,
      content: `
## The El Niño–Southern Oscillation (ENSO)

ENSO is a natural cycle of change in winds and sea-surface temperatures across the equatorial Pacific Ocean. It swings between El Niño and La Niña every 2 to 7 years.

### Normal conditions

1. The **trade winds** blow from east to west along the equator.
2. They push warm surface water west, piling up a warm pool near Indonesia and Australia, where warm, rising air brings heavy rain.
3. Off the coast of Peru, the departing surface water is replaced by cold, nutrient-rich water from below. This **upwelling** feeds phytoplankton and supports some of the world's richest fisheries (anchovies).

### El Niño and La Niña compared

| Feature | El Niño | La Niña |
|---|---|---|
| Trade winds | **Weaken** (or even reverse) | **Strengthen** |
| Eastern Pacific surface water | Warmer than normal | Cooler than normal |
| Upwelling off Peru | **Suppressed**: fewer nutrients, fisheries decline | Stronger: very productive |
| Peru and Ecuador | Heavy rain and flooding | Drier |
| Indonesia and Australia | Drought and wildfire risk | Heavy rain |
| Southern United States (winter) | Wetter and cooler | Drier and warmer |
| Atlantic hurricanes | Usually suppressed | Usually more active |

### Reading ENSO data

Scientists track ENSO with the **Oceanic Niño Index (ONI)**: the sea-surface temperature anomaly (difference from the long-term average) in the central equatorial Pacific. An anomaly of **+0.5 °C or more** for several months in a row signals El Niño; **−0.5 °C or less** signals La Niña.

| Season | ONI anomaly (°C) | Phase |
|---|---|---|
| Example A | +1.8 | Strong El Niño |
| Example B | +0.2 | Neutral |
| Example C | −1.1 | La Niña |

> 🔑 **AP Connection:** ENSO questions usually test a chain: **weaker trade winds → warm water spreads east → upwelling stops → fewer nutrients → phytoplankton decline → fish populations crash**. Practice writing every link.
      `
    },
    {
      id: 'apeseart5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a strong El Niño, the anchovy catch off Peru drops sharply. Which sequence best explains this?',
            options: [
              'Trade winds weaken and upwelling slows, so fewer nutrients reach the phytoplankton',
              'Stronger trade winds raise colder water, and anchovies migrate west toward Indonesia',
              'Heavier rainfall lowers ocean salinity enough to kill most adult anchovies directly',
              'Warmer air holds less oxygen, and the anchovies suffocate in the surface water'
            ],
            correctAnswer: 0,
            explanation: 'Weaker trade winds let warm water spread east and cap the cold, nutrient-rich water below, so upwelling slows and the phytoplankton that support the food web decline. Stronger trade winds describe La Niña.'
          },
          {
            question: 'The ONI reads −1.3 °C for several consecutive months. Which forecast is most consistent with this reading?',
            options: [
              'A wetter winter across the southern United States',
              'An active Atlantic hurricane season',
              'Weak upwelling off the coast of Peru',
              'Severe drought across eastern Australia'
            ],
            correctAnswer: 1,
            explanation: 'A strongly negative anomaly signals La Niña, which tends to bring more Atlantic hurricanes, drier conditions in the southern United States, strong upwelling off Peru and heavy rain in Australia.'
          },
          {
            question: 'Which change to a watershed would most reduce flooding downstream?',
            options: [
              'Restoring wetlands along the river',
              'Paving parking lots near the river',
              'Clear-cutting forest on the slopes',
              'Straightening the channel of the river'
            ],
            correctAnswer: 0,
            explanation: 'Wetlands store floodwater and release it slowly, lowering flood peaks downstream. Paving and clear-cutting increase runoff, and straightening a channel speeds water toward downstream communities.'
          }
        ]
      }
    }
  ]
};
