export const apesEarthSystemsPart3Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart3-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 3 of 7 — The Atmosphere and Global Wind Patterns**

---

| Section |
|---------|
| 📖 What the Atmosphere Is Made Of |
| The Layers of the Atmosphere |
| Global Wind Patterns: Uneven Heating and the Coriolis Effect |

> 🔑 **Key Concept:** The atmosphere is a thin layer of gases held by gravity. Its composition determines how it traps heat and blocks ultraviolet radiation (CED Topic 4.4), and the uneven way the sun heats it drives the planet-wide circulation of air that sets where rain forests and deserts form (CED Topic 4.5).
      `
    },
    {
      id: 'apeseart3-composition',
      type: 'text' as const,
      content: `
## 📖 What the Atmosphere Is Made Of

| Gas | Share of dry air | Why it matters |
|---|---|---|
| Nitrogen ($N_{2}$) | about 78% | Mostly unreactive; the reservoir for the nitrogen cycle |
| Oxygen ($O_{2}$) | about 21% | Produced by photosynthesis; used in respiration and combustion |
| Argon (Ar) | about 0.9% | Inert noble gas |
| Carbon dioxide ($CO_{2}$) | about 0.04% (about 420 ppm) | Greenhouse gas; raw material for photosynthesis |
| Water vapor ($H_{2}O$) | 0–4%, varies with place and weather | The most abundant greenhouse gas; source of clouds and precipitation |

### Worked Example: ppm and Percent

Trace gases are reported in **parts per million (ppm)**. Since 1% is one part per hundred, or 10,000 parts per million:

$$\\text{percent} = \\frac{\\text{ppm}}{10{,}000}$$

1. $CO_{2}$ at 420 ppm: $420 \\div 10{,}000 = 0.042\\%$
2. Pre-industrial $CO_{2}$ at 280 ppm: $280 \\div 10{,}000 = 0.028\\%$
3. Percent change: $\\dfrac{420 - 280}{280} \\times 100 = +50\\%$

A gas that makes up only 0.04% of the air has risen by half since the Industrial Revolution, which is why small numbers in ppm can matter so much.

## The Layers of the Atmosphere

The layers are defined by how **temperature changes with altitude**.

| Layer | Approximate altitude | Temperature trend with height | Key features |
|---|---|---|---|
| **Troposphere** | Surface to about 8–16 km (thickest at the equator) | **Decreases** | Holds most of the air's mass and nearly all water vapor; all weather happens here |
| **Stratosphere** | Top of troposphere to about 50 km | **Increases** | Contains the **ozone layer**, which absorbs UV radiation and warms this layer |
| **Mesosphere** | About 50–85 km | **Decreases** | Coldest layer; meteors burn up here |
| **Thermosphere** | About 85–600 km | **Increases** | Absorbs high-energy X-ray and UV radiation; auroras occur here |
| **Exosphere** | Above the thermosphere | | Gases thin out into space |

### Worked Example: Temperature Drop in the Troposphere

Air in the troposphere cools by an average of about 6.5 °C for each kilometer of altitude. A town at sea level is 24 °C. Estimate the temperature on a nearby peak 3,000 m high.

1. Convert meters to kilometers: $3{,}000\\ \\text{m} \\div 1{,}000 = 3\\ \\text{km}$
2. Temperature drop: $3\\ \\text{km} \\times 6.5\\ ^{\\circ}\\text{C/km} = 19.5\\ ^{\\circ}\\text{C}$
3. Peak temperature: $24 - 19.5 = 4.5\\ ^{\\circ}\\text{C}$

> 🔑 **AP Connection:** Remember the two "good" and "bad" ozone locations: ozone in the **stratosphere** shields life from UV radiation, while ozone in the **troposphere** is a harmful secondary air pollutant in photochemical smog.
      `
    },
    {
      id: 'apeseart3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In which layer of the atmosphere does temperature increase with altitude because ozone absorbs ultraviolet radiation?',
            options: [
              'Troposphere',
              'Stratosphere',
              'Mesosphere',
              'Thermosphere'
            ],
            correctAnswer: 1,
            explanation: 'The ozone layer lies in the stratosphere, and its absorption of UV radiation warms the upper stratosphere, so temperature rises with height there. Temperature falls with height in the troposphere and mesosphere.'
          },
          {
            question: 'Methane in the atmosphere measures about 1.9 ppm. What percent of the air is this?',
            options: [
              '0.00019 percent',
              '0.019 percent',
              '0.19 percent',
              '1.9 percent'
            ],
            correctAnswer: 0,
            explanation: 'Divide ppm by 10,000 to get percent: 1.9 ÷ 10,000 = 0.00019 percent. Dividing by 100 instead gives 0.019, which treats ppm as if it were parts per ten thousand.'
          },
          {
            question: 'Why does nearly all weather, including clouds and precipitation, occur in the troposphere?',
            options: [
              'It holds almost all of the atmosphere\'s water vapor and has rising, cooling air',
              'It is the layer where ozone absorbs sunlight and heats the air from above',
              'It is the layer farthest from Earth\'s surface and so receives the most sunlight',
              'It contains no nitrogen, which leaves more room in the air for water vapor'
            ],
            correctAnswer: 0,
            explanation: 'The troposphere contains almost all of the water vapor, and because it cools with height, rising air condenses into clouds and precipitation. Ozone heating defines the stratosphere instead.'
          }
        ]
      }
    },
    {
      id: 'apeseart3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) Convert 0.93% argon to ppm (no commas).

2) A town at sea level is 30 °C. Using a cooling rate of 6.5 °C per km, what is the temperature at 2,000 m, in °C?

3) Atmospheric $CO_{2}$ rose from 315 ppm in 1958 to about 420 ppm today. What is the percent increase, to the nearest whole percent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9300', '17', '33'],
        hint1: 'Multiply percent by 10,000 to get ppm.',
        hint2: '2,000 m is 2 km; 2 × 6.5 = the drop.',
        hint3: '(420 − 315) ÷ 315 × 100.',
        explanation: '1) 0.93 × 10,000 = 9,300 ppm. 2) 30 − (2 × 6.5) = 17 °C. 3) 105 ÷ 315 = 0.333, an increase of about 33 percent.'
      }
    },
    {
      id: 'apeseart3-winds',
      type: 'text' as const,
      content: `
## Global Wind Patterns: Uneven Heating and the Coriolis Effect

### Step 1: the equator gets the most intense sunlight

Sunlight strikes the equator nearly straight on and the poles at a low angle, so the equator is heated far more per square meter (Part 4 explains why).

### Step 2: convection cells form

| Latitude | What the air does | Surface pressure | Climate result |
|---|---|---|---|
| 0° (equator) | Warm, moist air **rises**, cools and condenses | Low | Heavy rainfall: tropical rainforests. This rising belt is the **Intertropical Convergence Zone (ITCZ)** |
| About 30° N and S | Dry air that rose at the equator **sinks** and warms | High | Clear skies and little rain: most of the world's great deserts (Sahara, Arabian, Australian) |
| About 60° N and S | Air **rises** where polar and mid-latitude air meet | Low | Wet, stormy: temperate rain forests and frequent storms |
| 90° (poles) | Cold, dense air **sinks** | High | Very dry: polar deserts |

The loop from the equator to 30° is the **Hadley cell**; 30° to 60° is the **Ferrel cell**; 60° to the pole is the **polar cell**.

### Step 3: the Coriolis effect bends the winds

Because Earth rotates, air moving across its surface is deflected: **to the right in the Northern Hemisphere** and **to the left in the Southern Hemisphere**. Surface air flowing from high to low pressure is bent into the prevailing winds.

| Wind belt | Latitudes | Direction blows FROM (Northern Hemisphere) |
|---|---|---|
| **Trade winds** | 0°–30° | Northeast (southeast in the Southern Hemisphere) |
| **Westerlies** | 30°–60° | West (southwest) |
| **Polar easterlies** | 60°–90° | East (northeast) |

Winds are **named for the direction they come from**. The westerlies blow from west to east, which is why weather systems across the United States generally move from west to east.

> 🔑 **AP Connection:** A classic AP question asks why the Sahara is a desert while the Congo Basin is a rain forest. Answer with the Hadley cell: rising air at the equator cools and drops its moisture, while the same air, now dry, sinks and warms near 30° N, preventing rain.
      `
    },
    {
      id: 'apeseart3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Air** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At about 30° N, the dominant vertical air motion is ___',
            options: ['sinking dry air', 'rising moist air', 'rising dry air', 'sinking moist air']
          },
          {
            label: 'In the Northern Hemisphere, the Coriolis effect deflects moving air to the ___',
            options: ['right', 'left', 'equator', 'poles']
          },
          {
            label: 'Winds that blow from about 30° toward the equator are the ___',
            options: ['trade winds', 'westerlies', 'polar easterlies', 'jet streams']
          }
        ],
        correctAnswers: ['sinking dry air', 'right', 'trade winds'],
        hint1: 'This is where the world\'s great deserts are found.',
        hint2: 'It is the opposite direction in the Southern Hemisphere.',
        hint3: 'These steady winds filled the sails of ships crossing the tropics.',
        explanation: 'Air that rose and lost its moisture at the equator sinks and warms near 30°, producing deserts. The Coriolis effect deflects air to the right in the Northern Hemisphere, turning the surface return flow toward the equator into the northeast trade winds.'
      }
    },
    {
      id: 'apeseart3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Most of the world\'s large hot deserts lie near 30° N and 30° S latitude. Which explanation is best supported by global circulation?',
            options: [
              'Air sinks and warms there after losing its moisture over the equator',
              'Air rises and cools there, so its water vapor cannot condense',
              'Those latitudes receive the most direct sunlight of any region',
              'The Coriolis effect is strongest there and blows clouds away'
            ],
            correctAnswer: 0,
            explanation: 'Air rises at the equator and drops its moisture as rain, then flows poleward aloft and sinks near 30°, where it warms and holds its remaining vapor. Rising, cooling air produces rain rather than preventing it.'
          },
          {
            question: 'A sailboat leaves Spain and heads southwest across the Atlantic toward the Caribbean at about 15° N. Which wind belt will help push it west?',
            options: [
              'The westerlies',
              'The northeast trade winds',
              'The polar easterlies',
              'The southeast trade winds'
            ],
            correctAnswer: 1,
            explanation: 'Between the equator and 30° N, surface air flows toward the equator and is deflected right, so it blows from the northeast toward the southwest. The westerlies blow the other way, from west to east, and the southeast trades are a Southern Hemisphere belt.'
          }
        ]
      }
    },
    {
      id: 'apeseart3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Composition | About 78% $N_{2}$, 21% $O_{2}$, 0.9% Ar, 0.04% $CO_{2}$, variable water vapor |
| ppm to percent | Divide by 10,000 |
| Troposphere | Weather layer; cools about 6.5 °C per km |
| Stratosphere | Ozone layer; warms with height |
| Equator | Rising air, low pressure, heavy rain (ITCZ) |
| 30° N and S | Sinking dry air, high pressure, deserts |
| Coriolis effect | Deflects right in the Northern Hemisphere, left in the Southern |
| Wind belts | Trade winds (0–30°), westerlies (30–60°), polar easterlies (60–90°) |

**Next:** Part 4 explains why the equator is heated most in the first place: the angle of sunlight, the tilt of Earth's axis and the seasons.
      `
    }
  ]
};
