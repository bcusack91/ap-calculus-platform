export const apesAtmosphereClimatePart3Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo3-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 3 of 7 — Impacts of Climate Change**

---

| Section |
|---------|
| 🌊 Sea-Level Rise: Where the Water Comes From |
| What Rising Seas Do |
| Heat, Water and Weather |
| Circulation, Soils and the Poles |
| Living Things on the Move |
| People and Food |

> 🔑 **Key Concept:** The CED lists the effects of global climate change as rising temperatures, melting permafrost and sea ice, rising sea levels and the displacement of coastal populations, along with changes in circulation, soils, ecosystems and the spread of disease vectors (CED 9.4, 9.5). This part explains each one and the rate calculations that go with them.
      `
    },
    {
      id: 'apesatmo3-sealevel',
      type: 'text' as const,
      content: `
## 🌊 Sea-Level Rise: Where the Water Comes From

Global sea level rises for two main reasons:

| Source | How it raises sea level |
|---|---|
| **Thermal expansion** | Water expands as it warms. The ocean has absorbed most of the extra heat, so its volume grows |
| **Melting land ice** | Mountain glaciers and the **Greenland and Antarctic ice sheets** add water that was stored on land |

**Floating sea ice does not raise sea level when it melts.** It already displaces its own weight of seawater, just as an ice cube melting in a full glass does not make it overflow. Sea ice loss matters for **albedo** (the ice-albedo feedback from Part 1) and for polar species, not for sea level.

### The numbers (IPCC AR6)

- Global mean sea level rose about **0.20 m** (20 cm) from 1901 to 2018.
- The rate rose from about **1.3 mm per year** (1901–1971) to about **3.7 mm per year** (2006–2018).
- From 1971 to 2018, **thermal expansion** caused about half the rise; glaciers and ice sheets caused most of the rest.

### Worked Example 1: Rate × Time

At 3.7 mm per year, how much will the sea rise in 30 years if the rate holds steady?

$$3.7\\ \\text{mm/yr} \\times 30\\ \\text{yr} = 111\\ \\text{mm} \\approx 11\\ \\text{cm}$$

Because the rate has been **accelerating**, a constant-rate projection is a **minimum** estimate.

### Worked Example 2: How Much Faster?

$$\\frac{3.7\\ \\text{mm/yr}}{1.3\\ \\text{mm/yr}} \\approx 2.8$$

The recent rate is nearly **three times** the early-1900s rate.

### Worked Example 3: How Far Inland? (illustrative data)

A low coast rises only **1 m vertically for every 200 m inland**. If the sea rises **0.5 m**, how far inland does the shoreline move (ignoring erosion)?

$$0.5\\ \\text{m} \\times \\frac{200\\ \\text{m}}{1\\ \\text{m}} = 100\\ \\text{m}$$

On gentle slopes, a small vertical rise floods a wide strip of land. That is why deltas and barrier islands are so exposed.
      `
    },
    {
      id: 'apesatmo3-seas',
      type: 'text' as const,
      content: `
## What Rising Seas Do

| Effect | Explanation |
|---|---|
| **Coastal flooding and erosion** | High tides and storm surges reach farther inland from a higher starting level |
| **Saltwater intrusion** | Seawater pushes into coastal aquifers and estuaries, making well water salty and harming freshwater wetlands |
| **Loss of coastal wetlands** | Salt marshes and mangroves drown if they cannot build up or move inland fast enough |
| **Displacement of people** | Low-lying island nations, river deltas and coastal cities face relocation; this is the CED's "displacement of coastal populations" |
| **Marine habitats shift** | Newly flooded continental shelves can create **new habitat**, while deeper communities may end up below the **photic zone**, where too little light reaches for photosynthesis |

> 🔑 **AP Connection:** The CED names both a positive and a negative effect of sea-level change on marine ecosystems. If asked for one of each, use new shelf habitat (positive) and deeper communities losing light (negative).
      `
    },
    {
      id: 'apesatmo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Arctic sea ice is shrinking quickly. Why does its melting add almost nothing to global sea level?',
            options: [
              'Floating ice already displaces its own weight of seawater',
              'Its meltwater freezes again each winter, so the effect cancels',
              'Most of its meltwater evaporates before mixing into the ocean',
              'Sea ice is far too thin to hold a meaningful volume of water'
            ],
            correctAnswer: 0,
            explanation: 'Ice that is already floating displaces exactly its own weight of water, so melting it barely changes the level. Sea ice is not regrowing to its old extent, and its meltwater does mix into the ocean; it simply was already counted in the ocean\'s volume.'
          },
          {
            question: 'From 1971 to 2018, which process caused about half of global sea-level rise?',
            options: [
              'Melting of floating sea ice',
              'Expansion of warming seawater',
              'Runoff from heavier rainfall',
              'Sediment filling ocean basins'
            ],
            correctAnswer: 1,
            explanation: 'Thermal expansion caused about half of the rise, with melting glaciers and ice sheets causing most of the rest. Floating sea ice adds almost nothing, and rainfall and sediment are not significant causes.'
          },
          {
            question: 'Well water in a coastal town turns salty as sea level rises. What is this process called?',
            options: [
              'Ocean acidification',
              'Thermal stratification',
              'Saltwater intrusion',
              'Cultural eutrophication'
            ],
            correctAnswer: 2,
            explanation: 'Saltwater intrusion is the movement of seawater into freshwater aquifers. Acidification is a drop in ocean pH, stratification is the layering of water by temperature, and eutrophication is nutrient enrichment.'
          }
        ]
      }
    },
    {
      id: 'apesatmo3-weather',
      type: 'text' as const,
      content: `
## Heat, Water and Weather

| Impact | What is happening |
|---|---|
| **Heat waves** | More frequent and more intense; dangerous for older people, outdoor workers and people without air conditioning |
| **Heavier downpours** | Warmer air holds about **7% more water vapor per 1°C** of warming, so storms can drop more rain |
| **Drought** | Higher temperatures speed evaporation from soil and plants; dry regions tend to get drier |
| **Wildfire** | Longer, hotter, drier fire seasons in places such as western North America |
| **Tropical cyclones** | Warmer seas fuel them; the share of the most intense storms has likely increased, they carry more rain, and their surges ride on higher seas |

The same warming can cause **both** floods and droughts: wet extremes from the extra water vapor, dry extremes from faster evaporation.

## Circulation, Soils and the Poles

- **Atmospheric circulation:** Winds move heat from the equator toward the poles. Warming can change these patterns, for example by shifting **Hadley cells** and the **jet stream**, which moves storm tracks and rainfall belts. (Global wind patterns are covered in Earth Systems, Part 3.)
- **Ocean currents:** The global **ocean conveyor belt** carries heat around the world. Fresh meltwater and warmer surface water can weaken it; the Atlantic part is projected to slow this century, which would especially affect coastal climates.
- **Soils:** Changes in temperature and rainfall can dry out or waterlog soils, lower their fertility and increase **erosion**.
- **The poles respond fastest.** Snow and ice reflect the most sunlight. As they melt, darker ground and water absorb more energy, which melts more ice (the ice-albedo positive feedback from Part 1). The Arctic has warmed more than twice as fast as the global average.
- **Permafrost:** Thawing ground releases $CO_{2}$ and methane (the feedback in Part 1) and buckles roads, pipelines and buildings built on it.
      `
    },
    {
      id: 'apesatmo3-life',
      type: 'text' as const,
      content: `
## Living Things on the Move

| Change | Example |
|---|---|
| **Range shifts** | Species move **toward the poles** and **up mountains** to stay within their temperature tolerance |
| **Phenology mismatch** | Spring events (leaf-out, flowering, insect emergence) come earlier, but animals that time migration or breeding by **day length** may arrive after their food peaks |
| **Disease vectors spread** | Mosquitoes that carry malaria and dengue, and ticks that carry Lyme disease, spread from the tropics toward the poles and to higher elevations as winters warm |
| **Population dynamics** | Species that cannot move or adapt decline; generalists and invasive species often gain |

### Worked Example 1: Speed of a Range Shift (illustrative data)

A butterfly's northern range edge moved **85 km** north over **50 years**.

$$\\frac{85\\ \\text{km}}{50\\ \\text{yr}} = 1.7\\ \\text{km/yr} = 17\\ \\text{km per decade}$$

### Worked Example 2: Moving Uphill

Air cools about 6.5°C for every 1 km gained in elevation (the lapse rate from Earth Systems, Part 3). To stay at the same temperature after **1°C** of warming, a mountain species must move up about:

$$\\frac{1\\ \\text{°C}}{6.5\\ \\text{°C/km}} \\approx 0.15\\ \\text{km} = 150\\ \\text{m}$$

Species already living near a summit have nowhere higher to go, which is why mountaintop species are among the most threatened.

## People and Food

- **Agriculture:** Heat stress and drought lower yields of crops such as wheat and maize in many regions, while growing seasons lengthen at high latitudes. Shifting rainfall changes where crops can be grown.
- **Water supply:** Shrinking mountain glaciers and snowpack reduce summer meltwater for cities and farms.
- **Health:** Heat illness, wider ranges for disease vectors, and worse air quality during heat waves.
- **Migration:** Sea-level rise, drought and crop failure push people to move, the population movements the CED links to climate change.
      `
    },
    {
      id: 'apesatmo3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) Sea level is rising at 3.7 mm per year. How many millimeters will it rise in 20 years at that steady rate?

2) A coastal plain rises 1 m for every 150 m inland. If the sea rises 0.3 m, how many meters inland does the shoreline move (ignoring erosion)?

3) A bird's breeding range shifted 120 km north in 40 years. What is the shift in kilometers per decade?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['74', '45', '30'],
        hint1: 'Rate × time: 3.7 × 20.',
        hint2: 'Each 1 m of rise moves the shore 150 m inland; multiply 0.3 by 150.',
        hint3: '40 years is 4 decades.',
        explanation: '1) 3.7 × 20 = 74 mm. 2) 0.3 × 150 = 45 m. 3) 120 km ÷ 4 decades = 30 km per decade.'
      }
    },
    {
      id: 'apesatmo3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A songbird times its spring migration by day length. The caterpillars it feeds its chicks now hatch two weeks earlier in warm springs. What is the most likely result?',
            options: [
              'The birds arrive earlier each year by sensing the warmer air',
              'The caterpillars wait to hatch until the birds have arrived',
              'Warm springs bring more caterpillars, so the chicks gain food',
              'The chicks hatch after the caterpillar peak and find less food'
            ],
            correctAnswer: 3,
            explanation: 'Because the birds respond to day length, which does not change, they keep arriving on the old schedule while their food peaks earlier. This phenology mismatch lowers chick survival.'
          },
          {
            question: 'Lyme disease, carried by ticks, now occurs in parts of Canada where it was once rare. Which explanation is best supported?',
            options: [
              'Milder winters let more ticks survive farther north',
              'More ultraviolet light has made the ticks more active',
              'Higher $CO_{2}$ levels make the bacteria more infectious',
              'Rising seas have pushed ticks inland from the coasts'
            ],
            correctAnswer: 0,
            explanation: 'Warmer winters let ticks and their hosts survive at higher latitudes, the poleward spread of disease vectors that the CED describes. Ultraviolet light and carbon dioxide concentration do not control tick range.'
          },
          {
            question: 'Which explanation does the CED give for why Earth\'s polar regions respond fastest to global climate change?',
            options: [
              'The ozone hole lets more ultraviolet light reach the polar surface',
              'Melting snow and ice expose darker surfaces that absorb more energy',
              'Ocean currents now carry most tropical heat straight to the poles',
              'Polar air holds more carbon dioxide than air over the tropics does'
            ],
            correctAnswer: 1,
            explanation: 'Snow and ice reflect the most sunlight, so as they melt, the darker land and water beneath absorb more energy and warm further, a positive feedback. The ozone hole affects ultraviolet light, not the heat balance, and carbon dioxide is well mixed around the globe.'
          }
        ]
      }
    },
    {
      id: 'apesatmo3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Sea-level sources | Thermal expansion (about half since 1971) + melting glaciers and ice sheets; floating sea ice adds almost nothing |
| Sea-level rate | About 1.3 mm/yr early 1900s → about 3.7 mm/yr (2006–2018); about 20 cm since 1901 |
| Coastal effects | Flooding, saltwater intrusion, wetland loss, displacement of coastal populations |
| Marine habitat | New habitat on flooded shelves; deeper communities may fall below the photic zone |
| Water cycle | About 7% more water vapor per 1°C → heavier downpours; faster evaporation → drought |
| Circulation | Hadley cells, jet stream and ocean conveyor belt can shift; soils erode |
| Poles | Ice-albedo feedback makes them warm fastest; permafrost thaw |
| Living things | Poleward and upslope range shifts, phenology mismatch, disease vectors spreading |
| Calculations | Rate × time; ratio of rates; rise × run ÷ rise for shoreline retreat; km per decade |

**Next:** Part 4 turns to the evidence itself: ice cores, temperature anomalies, natural versus human drivers, and how to read climate data on the exam.
      `
    }
  ]
};
