export const apesBiodiversityPart5Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod5-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 5 of 7 — Ecological Tolerance, Natural Disruptions and Adaptation**

---

| Section |
|---------|
| 🌡️ Range of Tolerance |
| Coral Bleaching: Tolerance in Action |
| Natural Disruptions on Every Time Scale |
| Migration |
| Adaptation and Its Speed Limit |
| The Rule of 70 |
| Common Misconceptions |

> 🔑 **Key Concept:** Every organism can live only within a certain range of conditions. When conditions shift, through natural events or human action, organisms must **change their behavior, move, or perish**. Over many generations, populations can also **adapt**, but only if change is slow enough.
      `
    },
    {
      id: 'apesbiod5-tolerance',
      type: 'text' as const,
      content: `
## 🌡️ Range of Tolerance

**Ecological tolerance** is the range of conditions an organism can endure before injury or death results. Conditions that matter include **temperature, salinity, flow rate, sunlight, pH and dissolved oxygen**. Tolerance applies both to **individuals** (each fish has its own limits) and to **species** (the overall range the species can occupy).

### Reading the Tolerance Curve (described in words)

Picture a bell-shaped curve. The **x-axis** is an environmental factor, such as water temperature, increasing to the right. The **y-axis** is population abundance (or growth and reproduction).

- **Optimal range (center, top of the bell):** conditions are best; growth and reproduction are highest, and most individuals are found here.
- **Zones of physiological stress (both sides):** individuals survive but are stressed; they grow slowly, reproduce less and are more vulnerable to disease. Few individuals are found here.
- **Zones of intolerance (outer ends, where the curve reaches zero):** conditions are beyond the organism's limits; it cannot survive.

### Example: A Cold-Water Fish (hypothetical values)

| Water temperature | Zone | What happens to the fish |
|---|---|---|
| Below 2°C | Zone of intolerance | Cannot survive |
| 2–10°C | Zone of physiological stress | Survives; slow growth, little reproduction |
| 10–16°C | **Optimal range** | Best growth and reproduction |
| 16–22°C | Zone of physiological stress | Survives; slow growth, little reproduction |
| Above 22°C | Zone of intolerance | Cannot survive |

Heat stress in fish is made worse because **warm water holds less dissolved oxygen**, so two factors move toward the fish's limits at once.

---

## Coral Bleaching: Tolerance in Action

Reef-building corals live in partnership with **symbiotic algae (zooxanthellae)** inside their tissues. The algae photosynthesize and supply most of the coral's food, and they give corals their color.

Many corals already live close to their **upper temperature limit**. When water stays about **1°C above the normal summer maximum for several weeks**, the stressed corals **expel their algae**. Without the algae, the tissue turns transparent and the white limestone skeleton shows through: the coral is **bleached**.

- If temperatures fall quickly, the algae can return and the coral can **recover**.
- If heat stress lasts, the coral **starves and dies**, and the reef loses the habitat that supports thousands of other species.

> 🔑 **AP Connection:** For a tolerance FRQ, name the factor, the zone, and the consequence: "At 19°C the fish are in a zone of physiological stress, so they survive but reproduce less, and the population declines."
      `
    },
    {
      id: 'apesbiod5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the cold-water fish table above for the first question.
      `,
      exercise: {
        questions: [
          {
            question: 'A stream that holds the cold-water fish warms to 19°C and stays there all summer. What is the most likely effect on the fish population?',
            options: [
              'Nearly all the fish die within days, as 19°C lies beyond their limits',
              'The fish grow faster, as warmer water speeds their metabolism',
              'Fish survive but reproduce less, and their numbers slowly fall',
              'Fish numbers rise, as 19°C lies inside their optimal range'
            ],
            correctAnswer: 2,
            explanation: 'At 19°C the fish are in the upper zone of physiological stress: they can survive, but growth and reproduction drop, so the population declines over time. 19°C is neither in the optimal range nor in the zone of intolerance.'
          },
          {
            question: 'What happens to a reef-building coral when it bleaches?',
            options: [
              'Its limestone skeleton dissolves in water that has turned acidic',
              'It expels the symbiotic algae that supply most of its food',
              'It is buried by sediment that blocks sunlight from reaching it',
              'Its polyps all die at once and the colony turns white'
            ],
            correctAnswer: 1,
            explanation: 'Bleaching is the loss of the coral\'s symbiotic algae under heat stress, which removes both its color and most of its food supply. Dissolving skeletons describes ocean acidification, and bleached corals are still alive and can recover if the heat stress ends.'
          },
          {
            question: 'Why can a warming of only about 1°C, if it lasts for weeks, cause mass bleaching on a coral reef?',
            options: [
              'Many corals live near their upper thermal limit',
              'Warm water carries more dissolved oxygen than corals can handle',
              'Warmer water raises the salinity beyond what corals can tolerate',
              'The algae multiply so fast in warm water that they smother corals'
            ],
            correctAnswer: 0,
            explanation: 'Corals that already live close to the top of their tolerance range are pushed into stress by a small, sustained rise. Warm water holds less oxygen, not more, and warming does not meaningfully raise salinity or cause the symbiotic algae to smother the coral.'
          }
        ]
      }
    },
    {
      id: 'apesbiod5-disruptions',
      type: 'text' as const,
      content: `
## Natural Disruptions on Every Time Scale

Disruptions are not only human-made. The CED notes that a single natural disruption can have environmental consequences **as great as, or greater than**, many human-made disruptions. When the **Mount St. Helens** eruption of 1980 sent a sideways blast across the landscape, it flattened or killed the forest across roughly 600 km².

### Periodic, Episodic and Random

| Type | Timing | Examples |
|---|---|---|
| **Periodic** | Repeats at regular, predictable intervals | Day and night, tides, seasons, a river's spring flood |
| **Episodic** | Occurs occasionally, at irregular intervals | Multi-year droughts, El Niño events |
| **Random** | No pattern; cannot be predicted in time | Earthquakes, volcanic eruptions, asteroid impacts |

Textbooks draw these lines a little differently (some call hurricanes episodic, others seasonal). On an FRQ, justify the label by describing the **timing**: "tides recur twice a day, so they are periodic."

### Geologic Time: Climate, Ice and Sea Level

Earth's climate has changed many times over geologic time, driven by changes in Earth's orbit and tilt, volcanic activity, the movement of continents and changes in atmospheric $CO_{2}$.

- **Ice ages.** Over the last 2.6 million years or so, ice sheets have repeatedly grown and shrunk. At the last glacial maximum, about 20,000 years ago, ice covered much of northern North America and Europe.
- **Sea level.** Water locked in glaciers comes from the ocean, so sea level has risen and fallen with the amount of ice. About 20,000 years ago, sea level was roughly 120 m lower than today, exposing land bridges such as **Beringia** between Siberia and Alaska. As the ice melted, rising seas flooded coastal plains and cut islands off from continents.
- **Large-scale habitat change.** Major environmental upheaval shifts whole biomes. The Sahara, for example, held grasslands and lakes roughly 11,000 to 5,000 years ago.

---

## Migration

Wildlife **migrates** on two time scales, often in response to natural disruptions:

| Scale | What it looks like | Examples |
|---|---|---|
| **Short-term** | Seasonal movements to follow food, water or breeding sites | Serengeti wildebeest following the rains; monarch butterflies flying to overwinter in Mexico |
| **Long-term** | A species' whole range shifts over many generations | Trees and animals spreading north as ice sheets retreated; many species moving poleward or upslope as climate warms today |
      `
    },
    {
      id: 'apesbiod5-adaptation',
      type: 'text' as const,
      content: `
## Adaptation and Its Speed Limit

Organisms adapt to their environment through **natural selection**, which works by small changes at the **genetic level**:

1. **Variation:** individuals differ, partly because of random mutations.
2. **Selection:** individuals whose alleles suit the environment survive and reproduce more.
3. **Inheritance:** they pass those alleles to offspring.
4. **Result:** over generations, helpful alleles become more common in the **population**.

**Adaptation can be fast or slow.** Species with short generations adapt quickly: many insect pests evolve pesticide resistance within a few years, and bacteria evolve antibiotic resistance. Long-lived species with few offspring, such as elephants or redwood trees, pass through few generations per century and adapt slowly.

**When change outruns adaptation.** If the environment changes faster than a population can adapt, individuals have three options: **change their behavior, move, or perish**. Rapid human-caused change (warming, habitat loss, new invasive species) often outpaces adaptation, which is one reason it threatens so many species.

---

## The Rule of 70

Biodiversity data often report a population changing by a steady percentage each year. The **rule of 70** estimates how long it takes to double (or, for a decline, to halve):

$$\\text{doubling time (years)} \\approx \\frac{70}{\\text{annual growth rate (\\%)}}$$

Use the rate as a **percent**, not a decimal: 5%, not 0.05. For a declining population, the same formula gives the **halving time**.

### Worked Example 1: An Invasive Species

An invasive mussel population grows **7% per year**.

1. Doubling time: $\\dfrac{70}{7} = $ **10 years**
2. Starting from 500 mussels: 1,000 after 10 years, 2,000 after 20 years, **4,000 after 30 years**
3. Percent change over 30 years: $\\dfrac{4{,}000 - 500}{500} \\times 100 = $ **+700%**

### Worked Example 2: A Declining Population

A frog population declines **3.5% per year**.

1. Halving time: $\\dfrac{70}{3.5} = $ **20 years**
2. Starting from 800 frogs: 400 after 20 years, **200 after 40 years**

### Worked Example 3: Working Backward

A deer population doubled in 35 years. Its approximate annual growth rate is $\\dfrac{70}{35} = $ **2% per year**.

**Why 70?** Exact doubling time with continuous growth is $\\dfrac{\\ln 2}{r}$, and $\\ln 2 \\approx 0.693$, which becomes 69.3 when $r$ is written as a percent. Rounding to 70 makes the arithmetic easy. The rule is a close approximation for rates below about 10% per year.

> 🔑 **AP Connection:** The rule of 70 reappears with human populations and in **Population Ecology**. Show the setup ("70 ÷ 3.5 = 20 years") for credit, and remember that each doubling time adds another factor of 2.
      `
    },
    {
      id: 'apesbiod5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** An invasive vine is spreading at 5% per year. Using the rule of 70, about how many years will it take its population to double?

**2)** Live coral cover on a reef is declining by 2% per year. About how many years until coral cover is half of today's value?

**3)** A population of 1,000 zebra mussels grows 10% per year. Using the rule of 70, about how many years until it reaches 8,000?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '35', '21'],
        hint1: 'Divide 70 by the growth rate written as a percent.',
        hint2: 'For a decline, 70 divided by the rate gives the halving time.',
        hint3: 'Find the doubling time first. How many doublings take 1,000 to 8,000?',
        explanation: '1) 70 ÷ 5 = 14 years. 2) 70 ÷ 2 = 35 years. 3) The doubling time is 70 ÷ 10 = 7 years, and 1,000 → 2,000 → 4,000 → 8,000 is three doublings, so 3 × 7 = 21 years.'
      }
    },
    {
      id: 'apesbiod5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | What is actually true |
|---|---|
| "An individual animal adapts to its new environment." | **Populations** adapt, over generations, as allele frequencies change. An individual can adjust its behavior or acclimate physically, but it cannot change its genes. |
| "Organisms evolve a trait because they need it." | Variation arises first, through random mutation. The environment then **selects** among the variants that already exist. |
| "More species always means a more stable ecosystem." | More species usually makes ecosystem functions, such as total plant growth, more resistant and resilient. But individual populations still rise and fall, losing one **keystone** species can unravel even a diverse community, and species-rich coral reefs are still very sensitive to heat. |
| "Ecosystem disruptions are caused by humans." | Eruptions, droughts and ice ages are natural disruptions, and some have been larger than any human one. |
| "Bleached coral is dead coral." | Bleached coral is alive but starving; it can recover if the heat stress ends soon enough. |
| "The rule of 70 gives exact answers." | It is an approximation that works best for rates below about 10% per year. |

> 🔑 **Key Concept:** Tolerance sets the limits, disruptions move conditions toward or past those limits, and adaptation, migration or extinction is the response. Ecological **succession**, how communities rebuild after a disruption, is covered in **Biomes and Succession**.
      `
    },
    {
      id: 'apesbiod5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which natural disruption is best classified as random rather than periodic or episodic?',
            options: [
              'The twice-daily rise and fall of ocean tides',
              'A sudden earthquake along an active fault',
              'The spring flood of a river fed by snowmelt',
              'A severe multi-year drought in a dry region'
            ],
            correctAnswer: 1,
            explanation: 'Earthquakes follow no predictable schedule, so they are random disruptions. Tides and spring floods recur at regular intervals and are periodic, while multi-year droughts recur irregularly and are usually called episodic.'
          },
          {
            question: 'A farmer sprays the same insecticide on a field every year. After ten years, the insect pests are mostly resistant to it. Which statement correctly explains this change?',
            options: [
              'Insects with resistance alleles survived and reproduced, so those alleles became common in the population',
              'Each insect built up resistance during its lifetime and passed that resistance on to its young',
              'The insecticide caused the specific mutations that made the exposed insects resistant to it',
              'The pests learned to avoid sprayed plants and taught the behavior to their offspring'
            ],
            correctAnswer: 0,
            explanation: 'Resistance alleles already existed in a few insects; spraying killed the others, so resistant survivors left more offspring and the population changed. Traits acquired during one lifetime are not inherited, and the insecticide selects among existing mutations rather than causing them.'
          },
          {
            question: 'About 20,000 years ago, sea level was roughly 120 m lower than it is today. Which consequence most directly followed from this?',
            options: [
              'Coral reefs grew on what is now dry land far inland',
              'Coastal wetlands spread far inland over today\'s plains',
              'Land bridges such as Beringia linked continents',
              'Island species became more isolated from mainland populations'
            ],
            correctAnswer: 2,
            explanation: 'With so much water locked in ice sheets, shallow seafloors were exposed as land, joining Siberia and Alaska and allowing species to migrate between continents. Lower seas reduced, rather than increased, the isolation of many near-shore islands.'
          }
        ]
      }
    }
  ]
}
