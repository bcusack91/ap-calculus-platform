export const apesEarthSystemsPart4Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart4-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 4 of 7 — Solar Radiation, Seasons and Climate Geography**

---

| Section |
|---------|
| 📖 Insolation and the Angle of Sunlight |
| Why Earth Has Seasons |
| Albedo |
| Geography and Climate: Rain Shadows and Ocean Currents |

> 🔑 **Key Concept:** Solar radiation is Earth's main energy source. How much of it a place receives depends on the angle of the sun (CED Topic 4.7), and what that energy does once it arrives depends on surface color, mountains and ocean currents (CED Topic 4.8).
      `
    },
    {
      id: 'apeseart4-insolation',
      type: 'text' as const,
      content: `
## 📖 Insolation and the Angle of Sunlight

**Insolation** (incoming solar radiation) is the solar energy reaching a given area, measured in watts per square meter ($W/m^{2}$).

Picture a flashlight shining straight down on a table: it makes a small, bright circle. Tilt it, and the same light spreads into a larger, dimmer oval. Sunlight behaves the same way.

| Location | Sun angle | Same beam spread over | Insolation per $m^{2}$ |
|---|---|---|---|
| Equator | High, close to directly overhead | Small area | Highest |
| Mid-latitudes | Moderate | Larger area | Moderate |
| Poles | Low, near the horizon | Very large area | Lowest |

Low-angle sunlight also passes through **more atmosphere**, so more of it is scattered and absorbed before reaching the ground.

### Worked Example: Spreading a Beam

A beam carrying 1,000 W of solar power covers 1 $m^{2}$ when the sun is directly overhead. When the sun is 30° above the horizon, the same beam spreads over 2 $m^{2}$ of ground.

1. Overhead sun: $1{,}000\\ W \\div 1\\ m^{2} = 1{,}000\\ W/m^{2}$
2. Sun at 30°: $1{,}000\\ W \\div 2\\ m^{2} = 500\\ W/m^{2}$
3. Percent change: $\\dfrac{500 - 1{,}000}{1{,}000} \\times 100 = -50\\%$

## Why Earth Has Seasons

Earth's axis is tilted about **23.5°** relative to the plane of its orbit, and the tilt points the same direction in space all year.

| Date (approximate) | Event | Northern Hemisphere |
|---|---|---|
| June 21 | June solstice | Tilted toward the sun: highest sun angles, longest days, summer. The sun is directly overhead at the Tropic of Cancer (23.5° N) |
| September 22 | Equinox | Neither hemisphere tilted toward the sun; about 12 hours of daylight everywhere |
| December 21 | December solstice | Tilted away: low sun angles, short days, winter. The sun is directly overhead at the Tropic of Capricorn (23.5° S) |
| March 20 | Equinox | About 12 hours of daylight everywhere |

Seasons in the Southern Hemisphere are reversed: December is summer in Australia.

> ⚠️ **Common misconception:** Seasons are **not** caused by changes in Earth's distance from the sun. Earth is actually **closest** to the sun in early January, during Northern Hemisphere winter. The tilt changes the **angle** of sunlight and the **length of day**, and those two factors set the seasons.
      `
    },
    {
      id: 'apeseart4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the main cause of Earth\'s seasons?',
            options: [
              'The tilt of Earth\'s axis',
              'Earth\'s changing distance from the sun through the year',
              'Changes in the amount of energy the sun gives off each month',
              'Ocean currents shifting heat between the two hemispheres'
            ],
            correctAnswer: 0,
            explanation: 'The 23.5° tilt changes the sun\'s angle and the length of daylight in each hemisphere over the year. Earth is closest to the sun in January, during Northern Hemisphere winter, so distance cannot be the cause.'
          },
          {
            question: 'Why does the equator receive more insolation per square meter than the poles over a year?',
            options: [
              'The equator is closer to the sun than the poles are',
              'Sunlight strikes the equator at a higher angle and is less spread out',
              'The equator has more cloud cover that traps incoming sunlight',
              'The atmosphere is much thinner over the equator than it is over the poles'
            ],
            correctAnswer: 1,
            explanation: 'High-angle sunlight concentrates its energy on a small area and passes through less atmosphere, while low-angle polar sunlight spreads over a larger area. The difference in distance to the sun between the equator and poles is negligible.'
          }
        ]
      }
    },
    {
      id: 'apeseart4-albedo',
      type: 'text' as const,
      content: `
## Albedo

**Albedo** is the fraction of incoming solar radiation a surface **reflects**. Light surfaces have high albedo; dark surfaces have low albedo and absorb more energy, warming up.

$$\\text{Albedo} = \\frac{\\text{reflected radiation}}{\\text{incoming radiation}}$$

| Surface | Typical albedo |
|---|---|
| Fresh snow | 0.80–0.90 |
| Sea ice | 0.50–0.70 |
| Desert sand | about 0.40 |
| Grassland | about 0.25 |
| Forest | 0.10–0.20 |
| Open ocean (sun high in sky) | about 0.06 |
| Fresh asphalt | about 0.05 |
| Earth as a whole | about 0.30 |

### Worked Example: Melting Sea Ice

Sunlight of 300 $W/m^{2}$ reaches sea ice with an albedo of 0.60. The ice melts, exposing ocean with an albedo of 0.06.

1. Absorbed by ice: $300 \\times (1 - 0.60) = 120\\ W/m^{2}$
2. Absorbed by ocean: $300 \\times (1 - 0.06) = 282\\ W/m^{2}$
3. Percent change: $\\dfrac{282 - 120}{120} \\times 100 = +135\\%$

More absorbed energy warms the water, which melts more ice, which lowers albedo further. This is a **positive feedback loop**, one reason the Arctic is warming faster than the global average.

The same idea explains the **urban heat island**: dark roofs and pavement absorb more sunlight than vegetation does, so cities are warmer than the surrounding countryside.
      `
    },
    {
      id: 'apeseart4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) A surface receives 800 $W/m^{2}$ and reflects 200 $W/m^{2}$. What is its albedo, as a decimal?

2) Sunlight of 500 $W/m^{2}$ falls on fresh snow with albedo 0.85. How many $W/m^{2}$ does the snow absorb?

3) A beam that covers 1 $m^{2}$ with the sun overhead covers 4 $m^{2}$ near the poles. What is the percent change in insolation? (include the sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '75', '-75'],
        hint1: 'Albedo = reflected ÷ incoming.',
        hint2: 'Absorbed = incoming × (1 − albedo).',
        hint3: 'The same energy over 4 times the area gives one-fourth the insolation.',
        explanation: '1) 200 ÷ 800 = 0.25. 2) 500 × (1 − 0.85) = 75 W/m². 3) Insolation falls to one-fourth of its original value: (0.25 − 1) ÷ 1 × 100 = −75 percent.'
      }
    },
    {
      id: 'apeseart4-geography',
      type: 'text' as const,
      content: `
## Geography and Climate: Rain Shadows and Ocean Currents

### The rain shadow effect

When prevailing winds meet a mountain range:

1. **Windward side:** moist air is forced upward, expands and cools. Water vapor condenses into clouds and falls as rain or snow. This side is wet and often forested.
2. **Leeward side:** the air, now dry, descends and warms as it is compressed. It absorbs moisture instead of releasing it. This side is a dry **rain shadow**.

Examples: the westerlies carry Pacific moisture onto the western slopes of the Sierra Nevada and the Cascades; the Great Basin of Nevada and eastern Oregon and Washington lie in their rain shadows.

### Ocean currents move heat

| Current system | How it works | Climate effect |
|---|---|---|
| **Surface currents and gyres** | Driven by prevailing winds and bent by the Coriolis effect into large loops: clockwise in the Northern Hemisphere, counterclockwise in the Southern | Carry warm water poleward along east coasts of continents and cold water toward the equator along west coasts |
| **Gulf Stream** | Warm current flowing north along the U.S. East Coast, then across the Atlantic | Helps keep Western Europe milder than other regions at the same latitude |
| **Thermohaline circulation** | Deep-ocean "conveyor belt" driven by differences in **temperature** and **salinity**. Cold, salty, dense water sinks in the North Atlantic and flows along the ocean floor | Redistributes heat and nutrients around the globe over centuries |

### Water moderates temperature

Water has a high specific heat, so it warms and cools slowly. Coastal cities have milder summers and winters than inland cities at the same latitude. San Francisco, on the Pacific, has a much smaller range between summer and winter temperatures than Kansas City, far inland.

> 🔑 **AP Connection:** When an AP question asks why two places at the same latitude have different climates, check three things: mountains (rain shadow), nearby ocean currents (warm or cold) and distance from the coast (moderating effect of water).
      `
    },
    {
      id: 'apeseart4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The western slopes of the Cascade Mountains receive heavy rain, while land just east of the range is semi-arid. What explains the dry conditions to the east?',
            options: [
              'Descending air on the leeward side warms and is already dry',
              'Air rising on the eastern side cools too slowly for clouds to form above it',
              'The eastern side faces away from the ocean currents that carry rain inland',
              'The eastern side has a higher albedo that reflects incoming clouds away'
            ],
            correctAnswer: 0,
            explanation: 'Moist westerly air drops its water as it rises and cools over the western slopes; on the leeward side it descends and warms, creating a rain shadow. Albedo affects absorbed sunlight, not clouds.'
          },
          {
            question: 'London lies farther north than New York City but has milder winters. Which factor best explains this?',
            options: [
              'Its higher elevation',
              'Heat carried by the Gulf Stream',
              'Its longer winter days',
              'A rain shadow from western hills'
            ],
            correctAnswer: 1,
            explanation: 'The Gulf Stream and its extension carry warm water across the Atlantic toward Western Europe, and prevailing westerlies bring that ocean-warmed air onshore. London is not at a higher elevation, and days at higher latitudes are shorter in winter, not longer.'
          },
          {
            question: 'Arctic sea ice is replaced by open ocean. Which sequence correctly describes the feedback that follows?',
            options: [
              'Reflection rises, so the region cools and the ice soon re-forms',
              'Albedo falls, so the dark water absorbs more sunlight and more ice melts',
              'Absorption falls, so the water cools and new sea ice forms',
              'Albedo is unchanged, because ice and water reflect similar amounts'
            ],
            correctAnswer: 1,
            explanation: 'Open ocean is much darker than ice, so albedo falls and absorbed energy rises, warming the water and melting more ice. Each step reinforces the first, which makes it a positive feedback loop.'
          }
        ]
      }
    }
  ]
};
