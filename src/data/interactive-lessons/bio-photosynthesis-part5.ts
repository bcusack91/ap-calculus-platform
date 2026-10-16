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

> **Experiment Tip:** The leaf disc flotation assay is a common AP lab technique that measures photosynthetic rate by counting how quickly leaf discs float to the surface (O$_2$ production makes them buoyant).  Light intensity is varied by changing the distance between the light source and the beaker.
      `
    },
    {
      id: 'ps5-co2',
      type: 'text' as const,
      content: `
### CO2 Concentration

CO$_2$ is a reactant of the Calvin cycle, where it is fixed into sugar:
- At low CO$_2$: The rate of carbon fixation is limited by how much CO$_2$ is available
- As CO$_2$ increases: The rate increases
- At high CO$_2$: The rate plateaus, because the carbon-fixing enzymes are working as fast as they can (like any enzyme at saturating substrate) or because the light reactions cannot supply ATP and NADPH any faster

**Current atmospheric CO$_2$** (~420 ppm) is below the saturation point for most plants, so **CO$_2$ enrichment can increase photosynthetic rates** in greenhouses.

**Stomata link CO$_2$ to water.**  CO$_2$ enters the leaf through stomata, and water vapor leaves through them.  On hot, dry days plants close their stomata to conserve water, CO$_2$ inside the leaf drops, and the Calvin cycle slows.
      `
    },
    {
      id: 'ps5-temp',
      type: 'text' as const,
      content: `
### Temperature

Temperature affects the rate of enzyme-catalyzed reactions:
- From cold up to the optimum (often about 25-35 °C, depending on the species): The rate increases, because faster-moving molecules collide more often with enzymes
- At the **optimum temperature**: The rate is maximized
- Above the optimum: Enzymes begin to **denature**, active sites lose shape, and the rate drops sharply
- At extremely high temperatures: Enzymes are completely denatured and photosynthesis stops

**Reversible or not?**  Cooling slows enzymes without damaging them, so the rate recovers when the temperature rises again.  Heat that disrupts the hydrogen bonds holding an enzyme's shape denatures it; some denaturation is reversible, but severe denaturation is not.
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
            options: ['Increase the light intensity well beyond the saturation point', 'Raise the CO2 concentration around the plant', 'Lower the temperature well below the enzyme optimum', 'Move the plant into shade so it receives less light'],
            correctAnswer: 1,
            explanation: 'At the light-saturation plateau, light is no longer the limiting factor, so more light does not help. Supplying more CO2 lets the Calvin cycle fix carbon faster, raising the rate. Cooling below the optimum or shading the plant would lower it.'
          },
          {
            question: 'The compensation point is the light intensity at which:',
            options: [
              'Photosynthesis reaches its maximum, light-saturated rate',
              'Photosynthesis and respiration run at equal rates',
              'Photorespiration starts to outpace carbon fixation',
              'Stomata close fully to prevent any further water loss'
            ],
            correctAnswer: 1,
            explanation: 'At the compensation point, the rate of O2 production by photosynthesis equals the rate of O2 consumption by respiration. Net gas exchange is zero. Below this point, the plant is a net consumer of O2 and producer of CO2.'
          },
          {
            question: 'In bright light, a plant\'s photosynthetic rate rises as CO2 is increased, then levels off at high CO2. Which explanation for the plateau is best supported?',
            options: [
              'Extra CO2 has denatured the enzymes of the Calvin cycle',
              'The carbon-fixing enzymes are saturated with CO2',
              'The plant has stopped carrying out cellular respiration',
              'CO2 now blocks light from reaching the chlorophyll'
            ],
            correctAnswer: 1,
            explanation: 'Like any enzyme, the enzymes that fix carbon have a maximum rate. Once they are saturated with CO2, adding more cannot speed them up, so another factor (enzyme amount, ATP and NADPH supply, or temperature) limits the rate. CO2 does not denature enzymes or block light.'
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
| Summer noon, full sun | CO$_2$ | Abundant light and heat, but atmospheric CO$_2$ (and stomata partly closing to save water) limits the Calvin cycle |
| Cloudy day, warm temperature | Light intensity | Temperature and CO$_2$ are adequate but insufficient light limits the light reactions |
| Greenhouse with supplemental CO$_2$ and lighting | Temperature or enzyme capacity | Once light and CO$_2$ are optimized, the biochemical machinery reaches its maximum capacity |

The rule in every row is the same: the rate of photosynthesis is set by whichever factor is in shortest supply. Adding more of a factor that is already plentiful does not raise the rate; only increasing the limiting factor does.
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
            question: 'The term for the factor in shortest supply, which sets the rate of photosynthesis (two words):',
            answer: 'limiting factor',
            acceptableAnswers: ['limiting factor', 'Limiting factor', 'the limiting factor', 'limiting factors'],
            placeholder: 'e.g. carrying capacity'
          },
          {
            question: 'The light intensity above which more light no longer raises the photosynthetic rate:',
            answer: 'saturation point',
            acceptableAnswers: ['saturation point', 'Saturation point', 'light saturation point', 'light-saturation point'],
            placeholder: 'e.g. compensation point'
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
              'The plant switched to respiring only, to conserve its water',
              'The enzymes that carry out photosynthesis are denaturing',
              'All the dissolved CO2 was used up, so carbon fixation stopped',
              'Heat bleached the chlorophyll so it no longer absorbs light'
            ],
            correctAnswer: 1,
            explanation: 'At 45 °C, proteins begin to denature (lose their 3D shape). Since the light reactions and the Calvin cycle both depend on proteins, denaturing them halts photosynthesis. An aquatic plant is surrounded by water, and dissolved CO2 was held constant.'
          },
          {
            question: 'Greenhouse growers often add CO2 to the air and provide supplemental lighting. After both are optimized, what typically becomes the next limiting factor?',
            options: [
              'Water availability',
              'Temperature',
              'Oxygen concentration',
              'Soil nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'After light and CO2 are optimized, the biochemical reaction rates become limited by temperature (enzyme kinetics). Greenhouses therefore also control temperature to maintain optimal enzyme function and maximize photosynthetic rate.'
          }
        ]
      }
    }
  ]
};