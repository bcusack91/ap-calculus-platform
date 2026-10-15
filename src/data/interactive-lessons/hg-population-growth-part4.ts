export const hgPopulationGrowthPart4Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula4-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 4 of 7 — Malthus, His Critics, and the Data**

---

| Section |
|---------|
| 📖 Malthus's Argument |
| Neo-Malthusians, Boserup and the Cornucopians |
| The Data: Population and Food Since 1800 |
| Which Theory Fits Which Scale? |

> 🔑 **Key Concept:** The CED asks you to **explain** Malthusian theory and to **evaluate** it, including its limitations. That means comparing what Malthus predicted with what the data show, and recognizing that the answer depends on the **scale of analysis**: food is adequate at the global scale but scarce in some regions and households.
`
    },
    {
      id: 'hgpopula4-malthus',
      type: 'text' as const,
      content: `
## 📖 Malthus's Argument

Thomas Malthus, an English clergyman and economist, published *An Essay on the Principle of Population* in **1798**. His argument had two premises:

1. **Population**, if unchecked, grows **geometrically** (exponentially): 1, 2, 4, 8, 16. He suggested an unchecked population could double every 25 years.
2. **Food supply** (the "means of subsistence") grows only **arithmetically** (linearly): 1, 2, 3, 4, 5.

### Worked Example: Malthus's Own Illustration

Start with 1 unit of population and 1 unit of food, and let 25 years pass between rows.

| Years | Population (doubles) | Food (adds 1) | People per unit of food |
|---|---|---|---|
| 0 | 1 | 1 | 1.0 |
| 25 | 2 | 2 | 1.0 |
| 50 | 4 | 3 | 1.3 |
| 100 | 16 | 5 | 3.2 |
| 150 | 64 | 7 | 9.1 |
| 200 | 256 | 9 | 28.4 |

**The graph, described in text:** with time on the horizontal axis, the food line is a straight line rising at a steady slope. The population line starts on top of it, then curves upward ever more steeply (a J-curve). The point where the curves separate is where Malthus said population would **outrun** food.

### Checks on Population

Malthus said the gap could never actually open very far, because **checks** would hold population down.

| Check | How it works | Examples |
|---|---|---|
| **Preventive checks** | Lower the **birth** rate | Delayed marriage, abstinence (Malthus's "moral restraint") |
| **Positive checks** | Raise the **death** rate | Famine, disease, war |

Malthus believed that, without preventive checks, positive checks were inevitable. The idea behind this is **carrying capacity**: the largest population an environment can support with its current resources and technology.

### Why Malthus Seemed Right, and Where He Went Wrong

England's population was growing quickly in the 1790s, and most people still lived close to subsistence. But Malthus did not foresee three changes:

- **Agricultural technology:** new crops, machinery, synthetic fertilizer and later the Green Revolution raised yields far faster than arithmetically.
- **Fertility decline:** as countries urbanized, birth rates fell (DTM Stage 3), a preventive check far larger than he expected.
- **Trade and transport:** railroads and steamships let densely populated places import food from distant regions.
`
    },
    {
      id: 'hgpopula4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "According to Malthus, which of the following is a positive check on population?",
            options: [
              "Famine after a failed harvest",
              "Couples postponing marriage for years",
              "Improved seeds raising yields per acre",
              "Laws limiting families to one child each"
            ],
            correctAnswer: 0,
            explanation: "Positive checks raise the death rate, and famine is Malthus's central example. Postponing marriage is a preventive check because it lowers births, while better seeds raise the food supply rather than checking population."
          },
          {
            question: "Malthus argued that food supply grows arithmetically. Which sequence, measured at 25-year intervals, fits this claim?",
            options: [
              "1, 2, 3, 4, 5",
              "1, 2, 4, 8, 16",
              "1, 3, 9, 27, 81",
              "1, 1, 2, 3, 5"
            ],
            correctAnswer: 0,
            explanation: "Arithmetic growth adds the same amount each period, so food rises by one unit every 25 years. Doubling each period is the geometric growth Malthus assigned to population."
          },
          {
            question: "Which development most weakened Malthus's prediction at the global scale?",
            options: [
              "Agricultural technology raised food output faster than population",
              "Death rates rose in Europe as industrial cities grew crowded",
              "Global food trade ended once nations reached self-sufficiency",
              "Population growth sped up in Europe as contraception spread"
            ],
            correctAnswer: 0,
            explanation: "Mechanization, fertilizer and high-yield crops let food production grow faster than arithmetically, breaking Malthus's second premise. Death rates in Europe fell rather than rose, food trade expanded, and contraception slowed growth."
          }
        ]
      }
    },
    {
      id: 'hgpopula4-critics',
      type: 'text' as const,
      content: `
## Neo-Malthusians, Boserup and the Cornucopians

| Thinker or school | Key work | Core claim | Direction of cause |
|---|---|---|---|
| **Malthus** | *Essay on the Principle of Population* (1798) | Population outruns food unless checked | Population growth → scarcity |
| **Neo-Malthusians** (Paul Ehrlich) | *The Population Bomb* (1968) | Growth strains not only food but water, energy, forests and climate | Population growth → environmental limits |
| **Ester Boserup** | *The Conditions of Agricultural Growth* (1965) | Population pressure **drives** farmers to intensify | Population growth → more food |
| **Cornucopians** (Julian Simon) | *The Ultimate Resource* (1981) | Human ingenuity, prices and markets overcome scarcity | Scarcity → innovation → abundance |

### Neo-Malthusians

Ehrlich predicted that hundreds of millions of people would starve in the 1970s. Famines did occur, such as in Bangladesh in 1974, but not on the scale he forecast. Neo-Malthusians widened Malthus's concern from **food** to all **resources** and the environment: groundwater depletion, deforestation, biodiversity loss and climate change. They argue that both population growth in poorer countries and high **consumption** in richer countries push against Earth's carrying capacity.

### Ester Boserup: Intensification

Boserup reversed Malthus's logic. When population grows, farmers do not simply run out of land; they **intensify** production on the land they have.

**Boserup's sequence of intensification, from least to most intensive:**

1. Forest fallow: land farmed one or two years, then left 20 years or more to regrow
2. Bush fallow: shorter rest periods
3. Short fallow: a year or two of rest
4. Annual cropping: one crop every year
5. Multicropping: two or more crops a year on the same plot, often with irrigation

Each step takes more labor per hectare but yields more food per hectare. A well-known study of Kenya's Machakos District (Tiffen, Mortimore and Gichuki, 1994) found that as population rose several-fold over six decades, farmers built terraces, reduced erosion and raised output per hectare.

### Cornucopians and the Simon–Ehrlich Wager

Julian Simon argued that scarcity raises prices, and high prices reward people who find substitutes, conserve or invent. In **1980** he bet Ehrlich that the inflation-adjusted prices of five metals (chromium, copper, nickel, tin and tungsten) would **fall** by 1990. They did, and Ehrlich paid. Critics note that a different decade could have produced a different result, and that market prices leave out environmental damage such as greenhouse gas emissions.

> 🔑 **AP Connection:** Boserup and Malthus disagree about **causation**. Malthus: population growth leads to food shortages. Boserup: population growth leads to agricultural innovation. If an FRQ describes farmers shortening fallow periods or terracing hillsides as density rises, it is describing Boserup.
`
    },
    {
      id: 'hgpopula4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Using Malthus's illustration (population starts at 1 and doubles every 25 years), how many units of population exist after **100 years**?

**2)** Using the same illustration (food starts at 1 and adds 1 unit every 25 years), how many units of food exist after **100 years**?

**3)** The UN dates world population at 7 billion in 2011 and 8 billion on November 15, 2022. About how many years did it take to add that billion? Round to the nearest whole year.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '5', '11'],
        hint1: 'Four 25-year periods: double four times, starting from 1.',
        hint2: 'Four 25-year periods: add 1 four times, starting from 1.',
        hint3: 'Subtract 2011 from 2022.',
        explanation: '1) 1 → 2 → 4 → 8 → 16. 2) 1 → 2 → 3 → 4 → 5. 3) 2022 − 2011 = 11 years, about the same time as the previous billion took (1999 to 2011).'
      }
    },
    {
      id: 'hgpopula4-data',
      type: 'text' as const,
      content: `
## The Data: Population and Food Since 1800

### World Population Milestones (United Nations)

| Population | Year reached | Years to add that billion |
|---|---|---|
| 1 billion | about 1804 | all of human history |
| 2 billion | 1927 | about 123 |
| 3 billion | 1960 | 33 |
| 4 billion | 1974 | 14 |
| 5 billion | 1987 | 13 |
| 6 billion | 1999 | 12 |
| 7 billion | 2011 | 12 |
| 8 billion | November 15, 2022 | 11 |

**The graph, described in text:** plot world population against time from 1800 to 2025. The line is almost flat until about 1900, then bends sharply upward into a near-vertical **J-curve** after 1950. Look closely at the most recent decades, though: the curve is now rising in an almost straight line rather than getting steeper. The **annual growth rate** peaked at a little over **2%** in the 1960s and has fallen to about **0.9%** in the 2020s. The UN's *World Population Prospects 2024* projects a peak of about **10.3 billion** in the mid-2080s, followed by a slow decline.

### Food Production vs. Population

| Measure | Early 1960s | Early 2020s | Change |
|---|---|---|---|
| World population | about 3.1 billion | about 8 billion | about 2.6 times |
| World cereal production (FAO) | under 1 billion tonnes | about 3 billion tonnes | more than tripled |

Food output grew **faster** than population. The main reason was the **Green Revolution** of the 1960s–1970s: high-yield varieties of wheat and rice, synthetic fertilizer, irrigation and pesticides, spreading through Mexico, India, Pakistan and the Philippines.

### Hunger Persists at Smaller Scales

The UN Food and Agriculture Organization estimated that about **733 million** people faced chronic hunger in **2023**, roughly 1 in 11 people worldwide, concentrated in **sub-Saharan Africa** and **South Asia**. The world grows enough calories to feed everyone; hunger is driven mainly by **poverty**, **conflict**, **climate shocks** and **unequal access** to food.

> 🔑 **AP Connection:** This is the strongest data-based critique of Malthus: **globally**, food per person has risen even as population more than doubled. But at the **regional and local** scale, where land is degraded, growth is rapid and incomes are low, Malthusian pressures can still appear.
`
    },
    {
      id: 'hgpopula4-evaluate',
      type: 'text' as const,
      content: `
## Which Theory Fits Which Scale?

| Theory | Strongest evidence for | Strongest evidence against | Scale where it fits best | Main limitation |
|---|---|---|---|---|
| **Malthus** | Food insecurity where growth is fast and farmland is degraded | Global food per person has risen since the 1960s | Local or regional, short run | Ignored technology, trade and fertility decline |
| **Neo-Malthusian** | Groundwater depletion, deforestation and climate change | Predicted famines of the 1970s did not occur at the forecast scale | Global environmental systems | Often underestimates adaptation; critics say it blames poor countries' numbers more than rich countries' consumption |
| **Boserup** | Intensification in densely settled farm regions, such as Machakos | Intensification can exhaust soil and aquifers | Local agricultural systems | Requires access to capital, land rights and markets |
| **Cornucopian** | Falling real prices of many resources; the Simon–Ehrlich wager | Climate change and biodiversity loss are not reflected in prices | Global markets, long run | Assumes innovation will always arrive in time |

### Worked Evaluation: A Densely Populated Farming Region

**Prompt:** A region's population doubles in 40 years. Farmers terrace hillsides and plant two crops a year, but wells are falling and soil quality is declining.

1. **Boserup** explains the terracing and double-cropping: population pressure caused intensification.
2. **Neo-Malthusians** explain the falling wells and declining soil: intensification is pressing against environmental limits.
3. **Evaluation:** both theories capture part of the situation. Intensification raised output in the short run, but its sustainability depends on how water and soil are managed.

A strong answer names **evidence** for each theory and states a limit, rather than declaring one theory simply right.
`
    },
    {
      id: 'hgpopula4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "World food production has grown faster than population since the 1960s, yet the FAO estimated that about 733 million people faced hunger in 2023. Which explanation best fits this pattern?",
            options: [
              "Hunger stems from poverty and unequal access more than from global supply",
              "Global food output per person has fallen steadily since the 1960s",
              "Farmers in most regions have abandoned Green Revolution seed varieties",
              "Hunger is spread fairly evenly across every world region and country"
            ],
            correctAnswer: 0,
            explanation: "Food per person has risen globally, so hunger reflects who can obtain food, which depends on income, conflict and access. Hunger is concentrated in sub-Saharan Africa and South Asia rather than spread evenly."
          },
          {
            question: "Ester Boserup would most likely explain a densely settled valley's shift from long fallow periods to multicropping as",
            options: [
              "a response to population pressure",
              "a sign the valley has passed its carrying capacity",
              "the result of a sudden fall in the labor supply",
              "evidence that food can grow only arithmetically"
            ],
            correctAnswer: 0,
            explanation: "Boserup argued that rising population pushes farmers to intensify, shortening fallow and adding labor and inputs. Passing carrying capacity and arithmetic food growth are Malthusian ideas, and intensification needs more labor, not less."
          },
          {
            question: "In 1980 Julian Simon bet Paul Ehrlich that the prices of five metals would fall by 1990, and they did. A neo-Malthusian critic would most likely reply that",
            options: [
              "market prices leave out environmental costs like climate change",
              "metal prices prove that resources are running out quickly worldwide",
              "human ingenuity will always find substitutes for scarce resources",
              "population growth has no effect on demand for metals or energy"
            ],
            correctAnswer: 0,
            explanation: "Neo-Malthusians argue that prices can fall even while environmental damage grows, because markets do not charge for emissions or biodiversity loss. Faith in ingenuity is the cornucopian position, and falling prices do not show resources running out."
          }
        ]
      }
    }
  ]
}
