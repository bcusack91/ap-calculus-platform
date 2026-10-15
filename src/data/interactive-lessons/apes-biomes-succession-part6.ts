export const apesBiomesSuccessionPart6Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom6-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response Practice: After the Fire |
| Model Answers |
| Second Scenario: An Estuary Under Pressure |

> 🔑 **Key Concept:** Biome and succession FRQs usually combine climate data, a time series of community change and a management question. Read the verb in each prompt first, then decide whether it wants a name, a trend, a number, a mechanism or a proposal.

## 📋 Free-Response Practice: After the Fire

Researchers studied lodgepole pine stands in a mountain region, comparing sites that burned at different times. (All values are illustrative.)

**Table 1. Climate at a nearby weather station**

| Month | J | F | M | A | M | J | J | A | S | O | N | D |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Temp (°C) | −10 | −8 | −4 | 1 | 6 | 11 | 14 | 13 | 8 | 3 | −3 | −7 |
| Precip (mm) | 30 | 25 | 30 | 35 | 55 | 70 | 80 | 75 | 50 | 40 | 35 | 30 |

**Table 2. Sites by time since fire**

| Years since fire | 1 | 5 | 20 | 60 | 120 |
|---|---|---|---|---|---|
| Plant species richness | 14 | 32 | 25 | 18 | 15 |
| Pine stems per hectare | 9,000 | 7,500 | 3,000 | 1,200 | 600 |
| Grass and wildflower cover (%) | 20 | 65 | 30 | 10 | 5 |

**Questions**

(a) **Calculate** the mean annual temperature and the total annual precipitation from Table 1, and **identify** the biome these values describe.

(b) **Identify** the type of succession occurring after the fire and **justify** your answer.

(c) **Describe** the trend in plant species richness over the 120 years.

(d) **Calculate** the percent decrease in pine stems per hectare from year 5 to year 60.

(e) **Explain** why the number of pine stems per hectare declines as the stand ages.

(f) **Explain** one adaptation that allows lodgepole pine to regenerate quickly after fire.

(g) A manager wants to reduce the risk of a severe fire in a nearby unburned stand that has not burned in 150 years. **Propose** one action and **describe** one disadvantage of it.
      `
    },
    {
      id: 'apesbiom6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units.

1) (a) Mean annual temperature from Table 1, in °C:

2) (a) Total annual precipitation from Table 1, in mm:

3) (d) Percent decrease in pine stems per hectare from year 5 to year 60:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '555', '84'],
        hint1: 'Add all 12 temperatures (the negatives and positives partly cancel), then divide by 12.',
        hint2: 'Add all 12 precipitation values.',
        hint3: '(7,500 − 1,200) ÷ 7,500 × 100.',
        explanation: '1) The temperatures sum to 24, and 24 ÷ 12 = 2 °C. 2) The precipitation values sum to 555 mm. 3) 6,300 ÷ 7,500 × 100 = 84 percent.'
      }
    },
    {
      id: 'apesbiom6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Mean temperature: sum of the 12 months is 24 °C, so $24 \\div 12 = 2$ °C. Total precipitation: 555 mm. A cold mean, five months below freezing, a short mild summer and moderate precipitation describe a **boreal forest (taiga)**, which matches the conifer stands.

**(b)** **Secondary succession.** The fire removed vegetation but left soil, along with seeds stored in cones and the soil seed bank, so the community regrows without first building soil.

**(c)** Richness rose sharply from 14 species at year 1 to a peak of 32 at year 5, then declined steadily to 15 species by year 120.

**(d)** $\\dfrac{7{,}500 - 1{,}200}{7{,}500} \\times 100 = 84\\%$ decrease.

**(e)** After the fire, many seedlings sprout at once. As they grow, they **compete** for light, water and nutrients; taller trees shade smaller ones, which die. This density-dependent thinning leaves fewer, larger trees. *(The point needs both the competition and the resource.)*

**(f)** Lodgepole pines produce many **serotinous cones**, sealed with resin that melts in the heat of a fire. The cones open after the fire and drop seeds onto bare, sunlit, ash-enriched soil with little competition.

**(g)** *Proposal:* Conduct prescribed burns (or thin the dense understory) to reduce the accumulated fuel, so a future fire burns cooler and stays on the ground. *Disadvantage:* A prescribed burn can escape control in dry or windy weather, and its smoke lowers air quality in nearby towns.

### Why richness rose and then fell

Year 5 is the peak because sun-loving grasses and wildflowers flourish in the open, alongside young pines and surviving species. As the pines close their canopy, shade eliminates most of the sun-loving plants, and the herb cover column falls from 65% to 5%.
      `
    },
    {
      id: 'apesbiom6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Tables 1 and 2 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which change in Table 2 best explains the decline in species richness after year 5?',
            options: [
              'Herb cover fell as the pine canopy closed overhead',
              'Pine stems per hectare rose as new seedlings kept sprouting',
              'Wildflower cover rose as the soil grew deeper',
              'The number of pines stayed constant after the fifth year'
            ],
            correctAnswer: 0,
            explanation: 'Herb cover dropped from 65 percent to 5 percent as shading increased, which removed the sun-loving species that made year 5 so rich. Pine stems fell rather than rose or stayed constant.'
          },
          {
            question: 'By what percent did plant species richness change from year 5 to year 120?',
            options: [
              'About a 53 percent decrease',
              'About a 113 percent increase',
              'About a 17 percent decrease',
              'About a 47 percent decrease'
            ],
            correctAnswer: 0,
            explanation: '(15 − 32) ÷ 32 × 100 ≈ −53 percent. A value of 47 percent is the fraction remaining rather than the change, and 113 percent comes from dividing by the later value instead of the earlier one.'
          },
          {
            question: 'If the region\'s climate warmed by several degrees and stayed similarly moist, which long-term change is most likely at these sites?',
            options: [
              'A gradual shift toward temperate forest species suited to warmer conditions',
              'A shift toward tundra plants as warmer summers thaw the soil',
              'No change, because a climax community is permanent once reached',
              'A shift toward desert succulents as the soil dries out completely'
            ],
            correctAnswer: 0,
            explanation: 'Warming moves biome boundaries poleward and upslope, so species from warmer temperate forests could gradually establish. Climax communities are not permanent, and with moisture unchanged a desert is not expected.'
          }
        ]
      }
    },
    {
      id: 'apesbiom6-estuary',
      type: 'text' as const,
      content: `
## Second Scenario: An Estuary Under Pressure

A river enters the sea through a tidal estuary fringed by salt marsh. Monitoring found the following. (Illustrative data.)

| Measure | 2005 | 2020 |
|---|---|---|
| Salt marsh area (ha) | 1,200 | 780 |
| Juvenile fish caught per standard net haul | 140 | 63 |
| Summer bottom-water dissolved oxygen (mg/L) | 6.5 | 2.8 |
| Upstream farmland (km²) | 300 | 450 |

### Worked Example: Linking the Numbers

**Marsh loss:** $\\dfrac{780 - 1{,}200}{1{,}200} \\times 100 = -35\\%$

**Fish decline:** $\\dfrac{63 - 140}{140} \\times 100 = -55\\%$

**Farmland increase:** $\\dfrac{450 - 300}{300} \\times 100 = 50\\%$

**Reasoning chain:** More farmland upstream sends more fertilizer nutrients into the estuary; algae bloom, die and decompose; decomposers use up oxygen, so bottom water fell to 2.8 mg/L, below the roughly 5 mg/L many fish need. At the same time, losing 35% of the salt marsh removed nursery habitat. Both changes point toward fewer juvenile fish.
      `
    },
    {
      id: 'apesbiom6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the loss of salt marsh most directly reduce the number of juvenile fish?',
            options: [
              'Marsh channels provide sheltered, food-rich nursery habitat',
              'Marsh grasses release salt that young fish need to grow',
              'Marsh plants consume the zooplankton that would compete with fish',
              'Marsh soils cool the estuary water enough for fish eggs to hatch'
            ],
            correctAnswer: 0,
            explanation: 'Shallow marsh channels give young fish food and protection from larger predators, so losing marsh removes nursery space. Marsh plants do not supply salt or eat zooplankton.'
          },
          {
            question: 'Which action would most directly reduce the low-oxygen problem in the estuary?',
            options: [
              'Planting buffer strips along farm streams to trap fertilizer',
              'Stocking the estuary with hatchery fish each spring',
              'Dredging the estuary channel to let in larger ships',
              'Building seawalls to replace the eroding marsh edge'
            ],
            correctAnswer: 0,
            explanation: 'Buffer strips absorb nitrogen and phosphorus before they reach the water, cutting the algal growth that drives oxygen depletion. Stocking fish treats a symptom, and seawalls and dredging do not reduce nutrient input.'
          },
          {
            question: 'Monitors want a single living organism to signal improving water quality in the estuary\'s tributary streams. Which would be the best choice?',
            options: [
              'Stonefly larvae, which need high dissolved oxygen',
              'Midge larvae, which tolerate low dissolved oxygen',
              'Aquatic worms, which thrive in organic sediment',
              'Algae, which grow faster when nutrients are high'
            ],
            correctAnswer: 0,
            explanation: 'Stoneflies are pollution-sensitive, so their return signals that oxygen levels have recovered. Midges, worms and abundant algae are associated with polluted, nutrient-rich or low-oxygen water.'
          }
        ]
      }
    }
  ]
};
