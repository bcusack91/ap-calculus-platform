export const bioPhotosynthesisPart5Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps5-intro',
      type: 'text' as const,
      content: `
## Factors Affecting Photosynthesis

**Part 5 of 7**

The rate of photosynthesis is influenced by several environmental variables.  Understanding how each factor affects the light reactions and Calvin cycle is essential for predicting plant productivity and interpreting experimental data on the AP exam.

The three main **limiting factors** are:
1. **Light intensity**
2. **CO$_2$ concentration**
3. **Temperature**
      `
    },
    {
      id: 'ps5-light',
      type: 'text' as const,
      content: `
### Light Intensity

As light intensity increases from zero:
- The rate of photosynthesis increases **linearly** at first (light is the limiting factor)
- The curve gradually levels off and reaches a **plateau** (the light-saturation point)
- Beyond the saturation point, increasing light does not increase the rate — another factor (CO$_2$, temperature, or enzyme capacity) becomes limiting

**Compensation point:** The light intensity at which the rate of photosynthesis equals the rate of cellular respiration (net gas exchange = 0).  Below this point, the plant consumes more O$_2$ than it produces.

**Very high light intensity** can actually cause **photoinhibition** — damage to PSII reaction centers from excess absorbed energy, reducing photosynthetic efficiency.

> **Experiment Tip:** The leaf disc flotation assay is a common AP lab technique that measures photosynthetic rate by counting how quickly leaf discs float to the surface (O$_2$ production makes them buoyant).  Light intensity is varied by changing the distance between the light source and the beaker.
      `
    },
    {
      id: 'ps5-co2',
      type: 'text' as const,
      content: `
### CO2 Concentration

CO$_2$ is a substrate for RuBisCO in the Calvin cycle:
- At low CO$_2$: The rate of carbon fixation is limited because RuBisCO is not saturated
- As CO$_2$ increases: The rate increases linearly
- At high CO$_2$: The rate plateaus when RuBisCO is fully saturated or when the light reactions cannot supply enough ATP/NADPH

**Current atmospheric CO$_2$** (~420 ppm) is below the saturation point for most C3 plants, meaning **CO$_2$ enrichment can increase photosynthetic rates** in greenhouses.

C4 and CAM plants are less responsive to CO$_2$ enrichment because their carbon-concentrating mechanisms already saturate RuBisCO under normal conditions.
      `
    },
    {
      id: 'ps5-temp',
      type: 'text' as const,
      content: `
### Temperature

Temperature affects the rate of enzyme-catalyzed reactions:
- From 0 to the optimum (~25-30 °C for most C3 plants, ~30-40 °C for C4 plants): The rate increases as molecular kinetic energy increases
- At the **optimum temperature**: The rate is maximized
- Above the optimum: Enzymes begin to **denature**, active sites lose shape, and the rate drops sharply
- At extremely high temperatures: Enzymes are completely denatured and photosynthesis stops

**Temperature also affects the ratio of RuBisCO carboxylation to oxygenation:**
- Higher temperatures decrease the relative solubility of CO$_2$ vs O$_2$
- RuBisCO also has lower affinity for CO$_2$ at higher temperatures
- Both effects increase **photorespiration** in C3 plants

This is why C4 plants (which circumvent photorespiration) dominate in tropical grasslands, while C3 plants dominate in temperate forests.
      `
    },
    {
      id: 'ps5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Limiting Factors
      `,
      exercise: {
        questions: [
          {
            question: 'A graph shows photosynthetic rate vs. light intensity reaching a plateau. What could you do to increase the rate beyond the plateau?',
            options: [
              'Increase light intensity further',
              'Increase CO2 concentration or optimize temperature (change the limiting factor)',
              'Decrease O2 concentration around the plant',
              'Both B and C could potentially work'
            ],
            correctAnswer: 3,
            explanation: 'At the light-saturation plateau, light is no longer limiting. Increasing CO2 would accelerate the Calvin cycle, and decreasing O2 would reduce photorespiration — both would increase the net rate. Increasing light further would not help and might cause photoinhibition.'
          },
          {
            question: 'The compensation point is the light intensity at which:',
            options: [
              'Photosynthesis reaches its maximum rate',
              'The rate of photosynthesis equals the rate of cellular respiration',
              'Photorespiration begins',
              'Stomata close completely'
            ],
            correctAnswer: 1,
            explanation: 'At the compensation point, the rate of O2 production by photosynthesis equals the rate of O2 consumption by respiration. Net gas exchange is zero. Below this point, the plant is a net consumer of O2 and producer of CO2.'
          },
          {
            question: 'Why are C3 plants more responsive to CO2 enrichment than C4 plants?',
            options: [
              'C3 plants have more chloroplasts',
              'In C3 plants, RuBisCO is not saturated at current atmospheric CO2 levels, while C4 plants already concentrate CO2 around RuBisCO',
              'C4 plants do not use the Calvin cycle',
              'C3 plants have more stomata'
            ],
            correctAnswer: 1,
            explanation: 'At current atmospheric CO2 (~420 ppm), RuBisCO in C3 plants is below its saturation point — more CO2 directly increases fixation. C4 plants use PEP carboxylase to concentrate CO2 around RuBisCO, which is already saturated, so additional atmospheric CO2 provides little benefit.'
          }
        ]
      }
    },
    {
      id: 'ps5-interactions',
      type: 'text' as const,
      content: `
### Interactions Between Factors

In real ecosystems, multiple factors interact:

| Scenario | Primary Limiting Factor | Explanation |
|----------|------------------------|-------------|
| Winter morning, clear sky | Temperature & light | Cold slows enzyme kinetics; short days limit light duration |
| Summer noon, full sun | CO$_2$ (and photorespiration) | Abundant light and heat, but atmospheric CO$_2$ limits Calvin cycle |
| Cloudy day, warm temperature | Light intensity | Temperature and CO$_2$ are adequate but insufficient light limits the light reactions |
| Greenhouse with supplemental CO$_2$ and lighting | Temperature or enzyme capacity | Once light and CO$_2$ are optimized, the biochemical machinery reaches its maximum capacity |

**Liebig's Law of the Minimum** applies: the rate of photosynthesis is determined by whichever factor is most limiting, regardless of the abundance of other factors.
      `
    },
    {
      id: 'ps5-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Photosynthetic Factors
      `,
      exercise: {
        questions: [
          {
            question: 'The light intensity where photosynthetic rate equals respiration rate:',
            answer: 'compensation point',
            acceptableAnswers: ['compensation point', 'Compensation point', 'light compensation point'],
            placeholder: 'e.g. saturation point'
          },
          {
            question: 'The principle stating that the rate is controlled by the most limiting factor:',
            answer: 'limiting factor',
            acceptableAnswers: ['limiting factor', 'Limiting factor', 'law of the minimum', 'law of minimum'],
            placeholder: 'e.g. rate law'
          },
          {
            question: 'Damage to PSII caused by excessive light absorption:',
            answer: 'photoinhibition',
            acceptableAnswers: ['photoinhibition', 'Photoinhibition', 'photo-inhibition', 'photodamage'],
            placeholder: 'e.g. photorespiration'
          }
        ]
      }
    },
    {
      id: 'ps5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Factors Affecting Photosynthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher measures O2 production from an aquatic plant at different temperatures while keeping light and CO2 constant. At 45 °C, O2 production drops to near zero. What is the most likely explanation?',
            options: [
              'The water evaporated',
              'Enzymes involved in photosynthesis (especially RuBisCO and those in the light reactions) are denaturing at this high temperature',
              'The plant switched to CAM photosynthesis',
              'All the CO2 was consumed'
            ],
            correctAnswer: 1,
            explanation: 'At 45 °C, proteins begin to denature (lose their 3D shape). Since all stages of photosynthesis depend on enzyme catalysis, denaturation of key enzymes (RuBisCO, photosystem proteins, Calvin cycle enzymes) halts photosynthesis.'
          },
          {
            question: 'Greenhouse growers often add CO2 to the air and provide supplemental lighting. After both are optimized, what typically becomes the next limiting factor?',
            options: [
              'Water availability',
              'Temperature (enzyme kinetics)',
              'Oxygen concentration',
              'Nitrogen in the soil'
            ],
            correctAnswer: 1,
            explanation: 'After light and CO2 are optimized, the biochemical reaction rates become limited by temperature (enzyme kinetics). Greenhouses therefore also control temperature to maintain optimal enzyme function and maximize photosynthetic rate.'
          }
        ]
      }
    }
  ]
};