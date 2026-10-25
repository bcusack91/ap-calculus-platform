export const asvabGsEarthSpacePart4Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse4-water',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 4 of 7 — Water, Atmosphere and Weather**

### The Water Cycle

The Sun's energy drives water in a never-ending loop:

| Step | What happens |
|:---|:---|
| **Evaporation** | Liquid water (mostly from the ocean) becomes water vapor |
| **Transpiration** | Plants release water vapor through their leaves |
| **Condensation** | Vapor cools and becomes tiny droplets: **clouds** and fog |
| **Precipitation** | Water falls as rain, snow, sleet or hail |
| **Runoff** | Water flows over the ground into streams, rivers and the ocean |
| **Infiltration** | Water soaks into the ground and becomes **groundwater** |

### The oceans

- About **71%** of Earth's surface is covered by water.
- About **97%** of Earth's water is salty ocean water. Most of the **fresh** water is frozen in **ice caps and glaciers**; much of the rest is groundwater.
- Seawater averages about **3.5% salt** (about 35 parts per thousand), mostly sodium chloride.
- Large **ocean currents** move heat around the planet; the Gulf Stream carries warm water north along the U.S. East Coast.

> **Key Fact:** Condensation is the step that makes clouds. Evaporation goes from liquid to gas; condensation goes from gas back to liquid.`
    },
    {
      id: 'gse4-atmosphere',
      type: 'text' as const,
      content: `## The Atmosphere

### What air is made of (dry air)

| Gas | Share of the air |
|:---|:---:|
| **Nitrogen** | about 78% |
| **Oxygen** | about 21% |
| Argon | about 0.9% |
| Carbon dioxide | about 0.04% |

Water vapor varies from almost none to a few percent depending on the weather.

> **Key Fact:** The most common gas in the air is **nitrogen**, not oxygen. This is one of the most-asked GS facts.

### The layers, from the ground up

| Layer | Remember it for | Temperature going up |
|:---|:---|:---|
| **Troposphere** | Where we live and where **weather** happens | Gets colder |
| **Stratosphere** | The **ozone layer**, which absorbs harmful ultraviolet (UV) light; jets cruise near its bottom | Gets warmer |
| **Mesosphere** | Where most **meteors burn up**; the coldest layer | Gets colder |
| **Thermosphere** | **Auroras** (northern lights); the International Space Station orbits here | Gets much hotter |
| **Exosphere** | Thins out into space | — |

**Mnemonic:** "**T**he **S**trong **M**an's **T**riceps **E**xplode" → Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.

**Air pressure** is the weight of the air above you, so it **drops as you go higher**. The air on a mountaintop is still about 21% oxygen, but it is thinner, so each breath holds less of it.`
    },
    {
      id: 'gse4-weather',
      type: 'text' as const,
      content: `## Weather

### Pressure systems and wind

| System | Air is... | Weather |
|:---|:---|:---|
| **High pressure** | Sinking | Usually clear, calm and fair |
| **Low pressure** | Rising, so it cools and its vapor condenses | Clouds, rain, storms |

**Wind** blows from areas of **high** pressure toward areas of **low** pressure.

### Fronts (where two air masses meet)

| Front | What happens | Typical weather |
|:---|:---|:---|
| **Cold front** | Cold air shoves under warm air and forces it up fast | Short, strong storms or thunderstorms, then cooler, clearer air |
| **Warm front** | Warm air slides gently up over cold air | Long periods of steady, light rain or drizzle, then warmer air |
| **Stationary front** | Neither air mass moves much | Several days of clouds and rain |

### Clouds

| Cloud | Look | Weather |
|:---|:---|:---|
| **Cirrus** | High, thin, wispy, made of ice crystals | Fair now; may signal a change |
| **Cumulus** | Puffy, white, flat bottoms | Fair weather |
| **Stratus** | Low, gray, flat layers covering the sky | Overcast, drizzle |
| **Cumulonimbus** | Towering cumulus ("nimbus" = rain) | Thunderstorms, lightning, hail |

### Humidity and dew point

**Humidity** is the water vapor in the air. **Relative humidity** compares how much there is to the most the air could hold at that temperature. The **dew point** is the temperature at which the air becomes saturated and vapor starts condensing into dew, fog or clouds.

### Weather instruments

| Instrument | Measures |
|:---|:---|
| Thermometer | Temperature |
| **Barometer** | Air pressure (a falling reading means stormy weather is likely) |
| **Anemometer** | Wind speed |
| Wind vane | Wind direction |
| **Hygrometer** | Humidity |
| Rain gauge | Amount of precipitation |

### Weather, climate and the greenhouse effect

- **Weather** is the condition of the air right now or this week. **Climate** is the average pattern over many years.
- **Greenhouse effect:** sunlight warms the ground; the ground gives off heat (infrared energy); gases such as **carbon dioxide, water vapor and methane** absorb some of that heat and keep the planet warm. More of these gases traps more heat.
- The **ozone layer** is a different thing: it blocks incoming UV light.`
    },
    {
      id: 'gse4-mc',
      type: 'multiple-choice' as const,
      content: '**Water and weather.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Water vapor high in the air cools and forms the tiny droplets that make up a cloud. Which step of the water cycle is this?',
            options: ['Condensation', 'Evaporation', 'Precipitation', 'Transpiration'],
            correctAnswer: 0,
            explanation: 'Gas turning back into liquid droplets is condensation, the step that makes clouds. Evaporation is liquid to gas, precipitation is water falling, and transpiration is vapor released by plants.'
          },
          {
            question: 'A cold front passes through a town in the afternoon. What weather is most likely?',
            options: ['Brief thunderstorms, then cooler air', 'Two days of light, steady drizzle', 'Clear skies with steadily warming air', 'Thick fog that lasts for a week'],
            correctAnswer: 0,
            explanation: 'A cold front forces warm air up quickly, building tall storm clouds, and leaves cooler, drier air behind it. Long, light drizzle fits a warm front, and neither steady warming nor week-long fog fits a cold front.'
          },
          {
            question: 'In which layer of the atmosphere is the ozone layer that absorbs ultraviolet light?',
            options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
            correctAnswer: 0,
            explanation: 'The ozone layer is in the stratosphere, the second layer up. The troposphere below holds the weather, the mesosphere is where meteors burn up, and the thermosphere is where auroras glow.'
          },
          {
            question: 'The reading on a barometer drops steadily all morning. What weather should you expect?',
            options: ['Clouds and rain on the way', 'Clear, dry and calm skies', 'A sudden drop in humidity', 'Steady weather with no change'],
            correctAnswer: 0,
            explanation: 'A falling barometer means air pressure is dropping as low pressure moves in, and low pressure brings rising air, clouds and precipitation. Rising pressure points toward clear, calm weather.'
          }
        ]
      }
    },
    {
      id: 'gse4-dropdown',
      type: 'dropdown-select' as const,
      content: '**What does each instrument measure?** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Anemometer:',
            options: ['Wind speed', 'Air pressure', 'Humidity', 'Rainfall'],
            correctAnswer: 0
          },
          {
            label: 'Hygrometer:',
            options: ['Humidity', 'Wind speed', 'Air pressure', 'Rainfall'],
            correctAnswer: 0
          },
          {
            label: 'Barometer:',
            options: ['Air pressure', 'Humidity', 'Wind speed', 'Precipitation'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Wind speed', 'Humidity', 'Air pressure'],
        hint1: 'An anemometer has spinning cups that catch the wind.',
        hint2: '"Hygro-" means moisture.',
        hint3: '"Baro-" means weight or pressure.',
        explanation: 'An anemometer measures wind speed, a hygrometer measures humidity (moisture in the air) and a barometer measures air pressure. A rain gauge measures rainfall.'
      }
    },
    {
      id: 'gse4-input',
      type: 'input-boxes' as const,
      content: `**The air you breathe.** ✍️ Give each answer as a whole-number percent.

**1)** About what percent of dry air is nitrogen?

**2)** About what percent of dry air is oxygen?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['78', '21'],
        hint1: 'Nitrogen is by far the largest share.',
        hint2: 'Nitrogen and oxygen together make up about 99%.',
        hint3: 'Nitrogen is about 78%; subtract from 99.',
        explanation: '(1) Nitrogen is about 78% of dry air. (2) Oxygen is about 21%. Argon (about 0.9%), carbon dioxide and traces of other gases make up the rest.'
      }
    },
    {
      id: 'gse4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Water cycle: **evaporation**, transpiration, **condensation** (clouds), **precipitation**, runoff, infiltration (groundwater)
- About 97% of Earth's water is salty; most **fresh** water is frozen in ice caps and glaciers
- Air is about **78% nitrogen**, 21% oxygen, 0.9% argon, 0.04% carbon dioxide
- Layers: **troposphere** (weather), **stratosphere** (ozone), mesosphere (meteors), thermosphere (auroras), exosphere — "The Strong Man's Triceps Explode"
- **High pressure** = fair; **low pressure** = clouds and storms; wind blows from high to low
- **Cold front** = quick storms then cooler; **warm front** = long steady drizzle
- Barometer = pressure, anemometer = wind speed, hygrometer = humidity
- **Greenhouse gases** trap heat; the **ozone layer** blocks UV — different things

> **Up Next:** Part 5 — the solar system, stars and seasons.`
    }
  ]
};
