export const bioFeedbackPart4Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p4-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Feedback in Populations and Ecosystems

**Part 4 of 7 — Feedback in Populations and Ecosystems**

Feedback is not only a property of bodies. Any system in which an outcome loops back to affect its own cause can show feedback, and that includes **populations, communities and ecosystems**. Unit 8 of AP Biology returns to the same logic you used for body temperature, just with a different regulated variable.

| Level | Example regulated variable | What counts as the "response" |
|---|---|---|
| Organism | Body temperature, blood glucose | Physiological or behavioral change in one individual |
| Population | Population size (N) | Changes in birth and death rates across many individuals |
| Community | Predator and prey numbers | Changes in each population driven by the other |
| Ecosystem | Dissolved oxygen in a lake; heat absorbed by a region | Changes in growth, decomposition or surface properties |

The test from Part 1 still works: identify the variable, follow the response, and ask whether the response **opposes** or **reinforces** the original change. What changes is the **scale**: there is no single sensor or control center. Instead, the "sensing" is built into how individuals respond to crowding, food supply or oxygen levels.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s2-density',
      type: 'text' as const,
      content: `
### Negative feedback 1: density-dependent regulation

When a population grows, resources per individual shrink. **Density-dependent factors** are limits whose effect grows stronger as the population becomes more crowded:
- competition for food, water, nesting sites or light
- predation (predators often concentrate where prey are dense)
- disease and parasites (spread faster when hosts are close together)
- accumulation of toxic wastes (for example, ethanol in a yeast culture)

**The loop:** population size rises → each density-dependent factor intensifies → birth rate falls and death rate rises → population growth slows or reverses → population size moves back toward the **carrying capacity (K)**.

The response opposes the change, so this is **negative feedback**, and K plays the role of a set point. (The Population and Community Ecology topic covers the logistic model and its math; here, focus on the loop.)

**Density-independent factors** such as a hard freeze, a flood or a wildfire kill a similar fraction of the population whatever its density. They do **not** form a feedback loop, because their effect does not depend on population size.

### Worked example: reading a density-dependence table

Hypothetical data for a songbird population on a small island:

| Breeding females | Young fledged per female |
|---|---|
| 20 | 4.0 |
| 40 | 3.1 |
| 60 | 2.2 |
| 80 | 1.4 |

**Step 1 — identify the variable:** the number of breeding females (population density).
**Step 2 — describe the trend:** as density quadruples from 20 to 80, reproductive output per female falls from 4.0 to 1.4, a decrease of 65%.
**Step 3 — classify:** the response (lower per-capita reproduction) slows growth when the population is large, opposing further increase, so it is **negative feedback** through a density-dependent factor such as competition for food or territories.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s3-mcq-density',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Density and Feedback
      `,
      exercise: {
        questions: [
          {
            question: 'In a pond, a parasite spreads more easily among frogs as frog density increases, raising the death rate. Which description of this effect is accurate?',
            options: [
              'Density-independent regulation that acts the same at every population size',
              'Negative feedback that slows growth as the frog population becomes crowded',
              'Positive feedback that speeds up frog growth as the parasite spreads',
              'No feedback at all, because the parasite is a separate species'
            ],
            correctAnswer: 1,
            explanation: 'The parasite\'s effect grows stronger as density rises, and its effect (more deaths) pushes population size back down, so it is density-dependent negative feedback. Interactions with another species can still form feedback when their strength depends on the population\'s own size.'
          },
          {
            question: 'An early frost kills about 30% of the grasshoppers in a field whether the population is large or small. How should this factor be classified?',
            options: [
              'Density-dependent negative feedback',
              'Density-independent, with no feedback',
              'Density-dependent positive feedback',
              'A shift in the population\'s carrying capacity'
            ],
            correctAnswer: 1,
            explanation: 'The frost kills the same fraction regardless of density, so its effect does not depend on population size and does not loop back as feedback. Density-dependent factors, by contrast, strengthen as crowding increases.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s4-predator-prey',
      type: 'text' as const,
      content: `
### Negative feedback 2: predator and prey cycles

Trapping records kept by the Hudson's Bay Company from the mid-1800s into the 1900s show that **Canada lynx** and **snowshoe hare** numbers rise and fall in cycles of roughly **10 years**, with lynx peaks trailing hare peaks.

**The loop:**
1. Hares become abundant.
2. Lynx have more food, so more lynx survive and reproduce (this takes time).
3. More lynx eat more hares, so the hare population falls.
4. With fewer hares, lynx starve or fail to breed, and the lynx population falls.
5. With fewer predators, hares recover, and the cycle repeats.

Each population's growth eventually **opposes** the other's, so the system is regulated by negative feedback. But the response comes after a **time lag** (a lynx born this year affects hare numbers next year), so instead of settling at one value, the populations **oscillate**. Field experiments in the Yukon showed that hare food supply matters too: the cycle results from both predation and food limitation.

> **AP Connection:** A delayed negative-feedback loop produces oscillations, and the predator peak lagging behind the prey peak is the clue on a graph. Do not mistake the rising phase of a cycle for positive feedback.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s5-positive-eco',
      type: 'text' as const,
      content: `
### Positive feedback in ecosystems

Positive feedback appears in ecosystems mostly as **disruption**: a change triggers a response that pushes the system farther from its starting state.

**Eutrophication and hypoxia in a lake**
1. Fertilizer runoff adds nitrogen and phosphorus, and algae bloom.
2. Algae die and sink; decomposing bacteria use up dissolved oxygen as they break them down.
3. Low oxygen kills fish and other animals.
4. Their bodies add more organic matter, so decomposition consumes even more oxygen.

Each step deepens the oxygen shortage, which is a positive-feedback spiral. This is how "dead zones" form, such as the seasonal low-oxygen zone in the Gulf of Mexico near the mouth of the Mississippi River.

**Ice-albedo feedback in the Arctic**
1. Warming melts sea ice.
2. Bright ice reflects most incoming sunlight; the dark open ocean that replaces it absorbs over 90% of it.
3. The ocean warms, which melts more ice.

**Permafrost thaw**
1. Warming thaws frozen soil that holds large stores of dead organic matter.
2. Microbes decompose it, releasing carbon dioxide and methane.
3. These greenhouse gases add to warming, which thaws more permafrost.

| Ecological loop | Variable | Feedback type | Effect on the system |
|---|---|---|---|
| Density-dependent regulation | Population size | Negative | Holds N near K |
| Lynx and hare | Predator and prey numbers | Negative with a time lag | Regular oscillations |
| Eutrophication | Dissolved oxygen | Positive | Spirals toward hypoxia |
| Ice-albedo | Heat absorbed in the Arctic | Positive | Accelerates warming and melting |
| Permafrost thaw | Atmospheric greenhouse gases | Positive | Accelerates warming |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Classify the Ecological Loop
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Melting snow exposes dark soil, which absorbs heat and melts more snow',
            options: ['positive feedback', 'negative feedback', 'density-independent factor', 'no feedback']
          },
          {
            label: 'Crowded deer face more food competition, so fewer fawns survive',
            options: ['density-independent factor', 'positive feedback', 'negative feedback', 'no feedback']
          },
          {
            label: 'A hurricane kills half of a coastal lizard population regardless of density',
            options: ['negative feedback', 'density-independent factor', 'no feedback', 'positive feedback']
          },
          {
            label: 'Dead fish in a hypoxic lake decompose and lower oxygen further',
            options: ['no feedback', 'negative feedback', 'positive feedback', 'density-independent factor']
          }
        ],
        correctAnswers: ['positive feedback', 'negative feedback', 'density-independent factor', 'positive feedback'],
        hint1: 'Ask whether the response reinforces or opposes the original change.',
        hint2: 'A factor that kills the same fraction at any density is not part of a loop.',
        hint3: 'Snow melt and fish die-offs both make the original problem worse.',
        explanation: 'Snow melt exposing dark soil and decomposition in a hypoxic lake both amplify the original change (positive feedback). Food competition among crowded deer opposes further growth (negative feedback). A hurricane acts regardless of density, so it is a density-independent factor.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Feedback at Ecological Scales
      `,
      exercise: {
        questions: [
          {
            question: 'On a graph of predator and prey populations over 40 years, both populations rise and fall regularly, and each predator peak comes a year or two after a prey peak. What best explains the lag?',
            options: [
              'Predators increase only after extra prey has let more of them survive and breed',
              'Prey reproduce only after predators decline, so prey always peak second',
              'Predators and prey compete for the same food, so neither can grow at once',
              'Predator numbers are set by weather, so they ignore changes in prey'
            ],
            correctAnswer: 0,
            explanation: 'Predator numbers respond to prey abundance through survival and reproduction, which takes time, so predator peaks trail prey peaks. That delay in a negative-feedback loop is what makes the populations oscillate rather than level off.'
          },
          {
            question: 'Which change would weaken the positive-feedback loop that produces a dead zone in a lake?',
            options: [
              'Adding more phosphorus fertilizer to farms in the watershed',
              'Cutting nutrient runoff, so fewer algal blooms form each summer',
              'Warming the lake water so it holds less dissolved oxygen',
              'Removing the lake\'s fish so bacteria have less to decompose'
            ],
            correctAnswer: 1,
            explanation: 'Cutting nutrient runoff removes the trigger for algal blooms, so less dead algae fuels oxygen-consuming decomposition. Removing fish does not stop the bloom, and more fertilizer or warmer water would make the hypoxia worse.'
          },
          {
            question: 'Why is Arctic sea-ice loss described as a positive-feedback process?',
            options: [
              'Bright open water reflects more sunlight, cooling the region',
              'Dark open water absorbs more sunlight, so more ice melts',
              'Melting ice adds fresh water that lowers the ocean\'s set point',
              'Ice loss lets more snow fall, rebuilding the ice each winter'
            ],
            correctAnswer: 1,
            explanation: 'Dark open water absorbs most incoming sunlight, warming the ocean and melting more ice, which reinforces the original change. Rebuilding ice or cooling the region would be negative feedback, and ocean temperature has no physiological set point.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s8-input',
      type: 'input-boxes' as const,
      content: `
### Data Check

Use the songbird table from the worked example.

1) Young fledged per female at 40 females minus young fledged per female at 60 females (number only):

2) Total young fledged by the whole population at 80 females (number only):

3) The population size that density-dependent negative feedback pushes a population toward (two words):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.9', '112', 'carrying capacity'],
        hint1: 'Subtract 2.2 from 3.1.',
        hint2: 'Multiply the number of females by the young fledged per female: 80 × 1.4.',
        hint3: 'It is represented by K in the logistic growth model.',
        explanation: '3.1 − 2.2 = 0.9 young per female; 80 × 1.4 = 112 young. Density-dependent factors push N toward the carrying capacity, K.'
      }
    }
  ]
};
