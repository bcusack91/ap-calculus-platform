export const apesBiomesSuccessionPart3Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom3-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 3 of 7 — Climate, Climatographs and Biome Distribution**

---

| Section |
|---------|
| 📖 Reading a Climatograph |
| Latitude, Altitude and Climate |
| Soils: Where Each Biome Keeps Its Nutrients |
| Plant Adaptations and Shifting Biomes |

> 🔑 **Key Concept:** Part 1 said that temperature and precipitation decide where biomes form. This part turns that idea into a skill: reading climate data to identify a biome, predicting climate from altitude, explaining why soils differ so much, and predicting how biome boundaries move as the climate changes.
      `
    },
    {
      id: 'apesbiom3-climatograph',
      type: 'text' as const,
      content: `
## 📖 Reading a Climatograph

A **climatograph** shows a location's average climate across a year. Months run along the x-axis. **Bars** show monthly precipitation (mm, right axis) and a **line** shows monthly average temperature (°C, left axis). From it you can find three things: total yearly precipitation, average temperature, and how much both vary by season.

### Worked Example 1: Site P (illustrative data)

| Month | J | F | M | A | M | J | J | A | S | O | N | D |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Temp (°C) | −5 | −3 | 3 | 10 | 16 | 21 | 24 | 23 | 19 | 12 | 5 | −2 |
| Precip (mm) | 80 | 70 | 90 | 95 | 100 | 95 | 100 | 90 | 85 | 80 | 85 | 80 |

**Step 1. Total annual precipitation (add all 12 bars):**
$$80 + 70 + 90 + 95 + 100 + 95 + 100 + 90 + 85 + 80 + 85 + 80 = 1{,}050\\ \\text{mm}$$

**Step 2. Mean annual temperature (add the 12 values, divide by 12):**
$$\\frac{123}{12} \\approx 10.3\\ ^{\\circ}\\text{C}$$

**Step 3. Temperature range:** $24 - (-5) = 29\\ ^{\\circ}$C, so the site has strong seasons with freezing winters.

**Step 4. Match the pattern.** Moderate, evenly spread precipitation (about 1,000 mm), warm summers and cold winters fit a **temperate deciduous forest**.

### Typical climate ranges (approximate)

| Biome | Annual precipitation | Temperature pattern |
|---|---|---|
| Tropical rainforest | Above about 2,000 mm | Warm all year (about 25–28 °C), little seasonal change |
| Tropical savanna | About 500–1,500 mm, with a long dry season | Warm all year |
| Desert | Below about 250 mm | Hot or cold; large daily swings |
| Temperate grassland | About 250–750 mm | Hot summers, cold winters |
| Temperate deciduous forest | About 750–1,500 mm, spread through the year | Warm summers, cold winters |
| Boreal forest (taiga) | About 300–900 mm, much as snow | Short cool summers, long very cold winters |
| Tundra | Below about 250 mm | Below freezing most of the year; brief cool summer |

Notice that the tundra is about as dry as many deserts. It stays wet at the surface only because permafrost stops water draining and cold slows evaporation.
      `
    },
    {
      id: 'apesbiom3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A climatograph shows monthly temperatures between 26 °C and 28 °C all year and monthly precipitation between 180 mm and 300 mm. Which biome does it describe?',
            options: [
              'Tropical rainforest',
              'Tropical savanna',
              'Temperate deciduous forest',
              'Hot desert'
            ],
            correctAnswer: 0,
            explanation: 'Constant warmth and heavy rain every month add up to well over 2,000 mm a year, the signature of a tropical rainforest. A savanna is equally warm but has a long dry season with little rain.'
          },
          {
            question: 'Site Q has a mean annual temperature of −12 °C, only 3 months above freezing and 200 mm of precipitation per year. Which biome fits best?',
            options: [
              'Tundra',
              'Boreal forest',
              'Temperate grassland',
              'Cold desert scrub'
            ],
            correctAnswer: 0,
            explanation: 'A very cold mean temperature, a short growing season and little precipitation match the tundra. Boreal forest needs a longer, warmer summer to support trees.'
          },
          {
            question: 'Two sites have the same yearly precipitation of 700 mm. Site A receives most of it in a five-month wet season, and Site B receives it evenly. Both are warm all year. Which statement is best supported?',
            options: [
              'Site A is more likely to be savanna with fire-adapted grasses',
              'Site A is more likely to be rainforest with an evergreen canopy',
              'Site B is more likely to be desert with succulent plants',
              'The two sites must belong to the same biome'
            ],
            correctAnswer: 0,
            explanation: 'The timing of rain matters as much as the total: a long dry season in a warm climate favors savanna grasses that survive drought and fire. 700 mm is far too little for a rainforest and far too much for a desert.'
          }
        ]
      }
    },
    {
      id: 'apesbiom3-altitude',
      type: 'text' as const,
      content: `
## Latitude, Altitude and Climate

Moving **toward the poles** and moving **up a mountain** have similar effects: it gets colder, and the vegetation changes in the same order. A tall mountain near the equator can have rainforest at its base and tundra-like vegetation near its summit.

Air temperature falls by an average of about **6.5 °C for every 1,000 m** of elevation gain in the lower atmosphere.

### Worked Example 2: Temperature at Elevation

A valley at 500 m elevation averages 22 °C. Estimate the temperature at a ridge at 2,500 m.

1. Elevation gain: $2{,}500 - 500 = 2{,}000$ m
2. Cooling: $2.0 \\times 6.5 = 13$ °C
3. Ridge temperature: $22 - 13 = 9$ °C

A drop of 13 °C is roughly what you would feel moving thousands of kilometers poleward at sea level, which is why the ridge supports conifers while the valley supports broadleaf forest.

(Mountains also block moisture and create rain shadows, which the Earth Systems topic covers in Part 4.)

## Soils: Where Each Biome Keeps Its Nutrients

| Biome | Soil | Why |
|---|---|---|
| **Tropical rainforest** | Thin and nutrient-poor | Warmth and moisture make decomposition fast, plants take up nutrients almost at once, and heavy rain **leaches** the rest. Most nutrients are stored in living biomass, not soil. |
| **Temperate grassland** | Deep, dark and very fertile | Dense grass roots die back and decompose each year, and moderate rainfall leaches little, building thick, organic-rich topsoil. |
| **Temperate deciduous forest** | Moderately fertile | Leaf litter decomposes over a year or two and feeds a well-developed topsoil. |
| **Boreal forest** | Thin and acidic | Cold slows decomposition; acidic needles build up as litter rather than becoming humus. |
| **Tundra** | Waterlogged above permafrost | Decomposition is so slow that dead material accumulates, storing large amounts of carbon. |

This explains a classic APES puzzle: cleared rainforest makes poor farmland. After the trees are burned, crops grow for only a few years before the thin soil is exhausted, while grassland soils have supported farming for generations.
      `
    },
    {
      id: 'apesbiom3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units. Values are illustrative.

1) A site's monthly precipitation (mm) is 10, 8, 12, 15, 20, 5, 2, 3, 10, 18, 22, 15. What is the total annual precipitation in mm?

2) A site's 12 monthly temperatures add up to 186 °C. What is its mean annual temperature in °C?

3) A town at 1,000 m elevation averages 18 °C. Using a cooling rate of 6.5 °C per 1,000 m, what is the average temperature at a peak at 3,000 m?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['140', '15.5', '5'],
        hint1: 'Add all twelve monthly values.',
        hint2: 'Divide the total by 12 months.',
        hint3: 'The peak is 2,000 m higher, so it is 2 × 6.5 °C cooler.',
        explanation: '1) The twelve values sum to 140 mm, which with that little rain points to a desert. 2) 186 ÷ 12 = 15.5 °C. 3) 18 − 13 = 5 °C.'
      }
    },
    {
      id: 'apesbiom3-adaptations',
      type: 'text' as const,
      content: `
## Plant Adaptations and Shifting Biomes

| Biome | Plant adaptation | What it solves |
|---|---|---|
| Desert | Succulent stems, waxy coatings, small or no leaves, CAM photosynthesis (stomata open at night) | Water loss |
| Tundra | Low, cushion-shaped growth; dark leaves; fast flowering | Wind, cold and a very short season |
| Boreal forest | Evergreen needles with waxy coats; cone shape | Photosynthesis in any warm spell; shedding heavy snow |
| Temperate deciduous forest | Dropping leaves in autumn | Avoiding water loss and frost damage when the ground is frozen |
| Temperate grassland | Deep roots; growth from the base of the plant | Drought, fire and grazing remove only the tops |
| Tropical rainforest | Drip tips, buttress roots, epiphytes, climbing vines | Shedding heavy rain, support in thin soil, reaching light |

### Biomes on the move

Because biomes follow climate, warming shifts their boundaries **poleward and upslope**. The boreal forest is advancing north into tundra in some regions, and alpine plant zones are moving uphill. Plants spread only as fast as their seeds, so many species lag behind the climate they need, and species already at the top of a mountain or the edge of a continent have nowhere left to move.

> 🔑 **AP Connection:** When asked how climate change affects a biome, give the direction of shift (poleward or upslope) **and** a reason a species might fail to keep up: slow dispersal, barriers such as cities or farmland, or running out of higher ground.
      `
    },
    {
      id: 'apesbiom3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer clears and burns a patch of tropical rainforest to plant crops. Yields fall sharply after three years. Which explanation is best supported?',
            options: [
              'Most nutrients were held in the removed vegetation, and rain leached the rest',
              'The ash from burning acidified the soil and killed all soil microbes',
              'Tropical crops need cold winters to set seed and fail in constant heat',
              'Rainforest soils are deep and rich, but crops cannot reach the nutrients'
            ],
            correctAnswer: 0,
            explanation: 'In rainforests nutrients are stored mainly in living biomass, so clearing removes them and heavy rain washes the remaining soil nutrients away. Rainforest soils are thin, not deep and rich.'
          },
          {
            question: 'Which biome would most likely have the deepest, most organic-rich topsoil?',
            options: [
              'Temperate grassland',
              'Tropical rainforest',
              'Boreal forest',
              'Hot desert'
            ],
            correctAnswer: 0,
            explanation: 'Grass roots die back and decompose each year under moderate rainfall, steadily building thick, fertile topsoil. Rainforest soil is leached, boreal soil is thin and acidic, and deserts produce little organic matter.'
          },
          {
            question: 'Researchers find that the tree line on a mountain has moved 150 m uphill over 60 years. Which conclusion is most consistent with this observation?',
            options: [
              'The climate warmed, letting trees survive higher up',
              'Higher elevations received more volcanic ash that enriched the soil',
              'Grazing animals moved downhill and stopped eating seedlings at the top',
              'Increased snowfall at the summit protected seedlings from the wind'
            ],
            correctAnswer: 0,
            explanation: 'Trees stop where it becomes too cold for them, so a rising tree line indicates warmer conditions at higher elevations. This is the upslope shift expected as climate warms.'
          }
        ]
      }
    },
    {
      id: 'apesbiom3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Climatograph | Bars = monthly precipitation; line = monthly temperature |
| Annual precipitation | Add the 12 monthly bars |
| Mean temperature | Add the 12 monthly values and divide by 12 |
| Seasonality | Timing of rain matters: warm + long dry season = savanna |
| Altitude | About 6.5 °C cooler per 1,000 m; climbing resembles moving poleward |
| Soils | Rainforest thin and leached; grassland deep and fertile; boreal acidic; tundra waterlogged |
| Climate change | Biomes shift poleward and upslope; slow dispersers lag behind |

**Next:** Part 4 follows an ecosystem through time: how soil, biomass, species richness and productivity change as succession proceeds.
      `
    }
  ]
};
