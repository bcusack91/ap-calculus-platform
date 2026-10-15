export const apesBiomesSuccessionPart4Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom4-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 4 of 7 — Succession in Depth**

---

| Section |
|---------|
| 📖 How Each Stage Prepares the Next |
| What Changes as Succession Proceeds |
| Two Classic Sequences: Glacier Bay and the Old Field |
| Reading Chronosequence Data |
| Aquatic Succession |

> 🔑 **Key Concept:** Part 1 listed the stages of succession. This part explains **why** one stage gives way to the next, tracks how soil, biomass, species richness and productivity change over time (CED 2.7), and shows how to calculate those changes from field data.
      `
    },
    {
      id: 'apesbiom4-mechanism',
      type: 'text' as const,
      content: `
## 📖 How Each Stage Prepares the Next

Early species change the site in ways that help later species move in, and the later species then outcompete them. This is called **facilitation**.

| Stage | Typical organisms | How they change the site |
|---|---|---|
| **Pioneer** | Lichens, mosses, nitrogen-fixing plants, fast-growing annual weeds | Lichen acids and freeze-thaw weathering break rock; dead tissue adds the first organic matter; nitrogen fixers enrich the soil |
| **Early** | Grasses, herbs, wildflowers | Roots hold soil; yearly die-back builds humus; more moisture is retained |
| **Middle** | Shrubs and sun-loving, fast-growing trees | Shade the ground, which suppresses the sun-loving plants that came before |
| **Late (climax)** | Shade-tolerant trees, such as hemlock or oak and hickory | Seedlings can grow in the shade of their own parents, so the community perpetuates itself |

### Pioneer species are r-selected

Pioneers share a profile: small, fast-growing, short-lived, producing many easily dispersed seeds or spores (often carried by wind), and tolerant of bare ground, full sun, drought and poor soil. Late-successional species are more K-selected: larger, longer-lived, slower to mature, and good competitors for light and nutrients.

### Why pioneers disappear

Pioneers rarely die off because conditions worsen. They are **outcompeted**: once soil, moisture and shade build up, slower-growing species that compete better in those conditions take over.

## What Changes as Succession Proceeds

| Property | Pioneer stage | Middle stage | Late stage |
|---|---|---|---|
| Soil depth and organic matter | Little or none | Increasing | Deepest |
| Total biomass | Low | Rising quickly | Highest, then levels off |
| Species richness | Low | Rising, often peaks here or later | High, sometimes slightly lower as dominant competitors exclude some species |
| Net primary productivity (NPP) | Low | **Highest** | Lower or level, because respiration by the large biomass uses much of the GPP |
| Dominant strategy | r-selected | Mixed | K-selected |

The NPP pattern surprises many students. A mature forest stores the most biomass, but a growing, middle-aged ecosystem adds new biomass fastest.
      `
    },
    {
      id: 'apesbiom4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Alder shrubs host nitrogen-fixing bacteria and colonize bare glacial gravel early in succession. How do they help later species?',
            options: [
              'They add nitrogen to the soil that later trees use to grow',
              'They release chemicals that stop later trees sprouting',
              'They remove nitrogen from the soil so that only mosses survive',
              'They shade the ground so heavily that no other plants can grow'
            ],
            correctAnswer: 0,
            explanation: 'Nitrogen fixed by bacteria in alder roots enters the soil through leaf litter and decay, enriching the nutrient-poor gravel so trees such as spruce can establish. This is facilitation: the early species improves conditions for its successors.'
          },
          {
            question: 'At which point in succession is net primary productivity usually highest?',
            options: [
              'The middle stage of shrubs and young trees',
              'The pioneer stage on bare rock',
              'The climax stage of a mature forest',
              'The first year after a fire clears a site'
            ],
            correctAnswer: 0,
            explanation: 'Middle-stage communities are adding biomass rapidly with relatively little respiration demand. In a mature forest, respiration by the large standing biomass uses much of the GPP, so NPP levels off or falls.'
          },
          {
            question: 'Sun-loving pine seedlings are scarce under a mature pine stand, while oak seedlings are common there. What does this predict?',
            options: [
              'Oaks will gradually replace the pines as the dominant canopy trees',
              'Pines will remain dominant because they arrived at the site first',
              'Both species will disappear and the site will return to grassland',
              'The pines will shade out the oak seedlings over the next decades'
            ],
            correctAnswer: 0,
            explanation: 'Pine seedlings need full sun and cannot grow in the shade of their parents, while shade-tolerant oak seedlings can. As the old pines die, oaks fill the gaps and the community shifts toward a hardwood forest.'
          }
        ]
      }
    },
    {
      id: 'apesbiom4-sequences',
      type: 'text' as const,
      content: `
## Two Classic Sequences

### Primary succession: Glacier Bay, Alaska

Glaciers in Glacier Bay have retreated many kilometers since the late 1700s, so walking away from the ice is like traveling back in time. Sites exposed longest are the most advanced.

| Sequence (from the ice outward) | Community |
|---|---|
| Recently exposed gravel | Mosses, lichens, mountain avens (*Dryas*), fireweed |
| Decades later | Dense thickets of nitrogen-fixing alder and willow |
| About a century later | Sitka spruce forest |
| Oldest sites | Spruce-hemlock forest with a deep organic soil layer |

### Secondary succession: an abandoned farm field

In the eastern United States, a plowed field left alone typically follows this path (the soil was already there, so it moves much faster than primary succession):

| Approximate time after abandonment | Community |
|---|---|
| Years 1–2 | Annual weeds such as crabgrass and ragweed |
| Years 3–10 | Perennial grasses and wildflowers such as goldenrod and asters |
| Years 10–25 | Shrubs and pine seedlings |
| Years 25–100 | Pine forest |
| After about 100 years | Oak-hickory hardwood forest grows up beneath and replaces the pines |

## Reading Chronosequence Data

A **chronosequence** compares sites of different ages at the same time, because no researcher can watch a single site for 200 years.

### Worked Example: Sites Along a Retreating Glacier (illustrative data)

| Years since exposed | 0 | 20 | 50 | 100 | 200 |
|---|---|---|---|---|---|
| Soil organic layer (cm) | 0 | 1 | 4 | 10 | 24 |
| Plant species richness | 2 | 12 | 20 | 26 | 21 |
| Aboveground biomass (kg/m²) | 0.1 | 1.5 | 8 | 20 | 35 |

**1. Average rate of soil formation over 200 years:**
$$\\frac{24\\ \\text{cm} - 0\\ \\text{cm}}{200\\ \\text{yr}} = 0.12\\ \\text{cm/yr}$$

**2. Percent change in richness from year 100 to year 200:**
$$\\frac{21 - 26}{26} \\times 100 \\approx -19\\%$$

**3. Interpretation:** Biomass and soil keep increasing, but richness peaks at year 100 and then declines as spruce and hemlock shade out many smaller plants. This is the late-stage pattern in the table above.

**4. Unit conversion:** Because 1 cm = 10 mm, 0.12 cm/yr is 1.2 mm per year. Soil forms slowly, which is why soil lost to erosion is effectively nonrenewable on human time scales.
      `
    },
    {
      id: 'apesbiom4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the chronosequence table above. Enter numbers only.

1) What was the average rate of soil organic layer formation between year 50 and year 100, in cm per year?

2) By what percent did aboveground biomass increase from year 100 to year 200?

3) By what factor did species richness increase between year 0 and year 50?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.12', '75', '10'],
        hint1: 'Change in depth (10 − 4) divided by the number of years (100 − 50).',
        hint2: '(35 − 20) ÷ 20 × 100.',
        hint3: 'Divide the later value by the earlier value.',
        explanation: '1) 6 cm ÷ 50 yr = 0.12 cm per year. 2) 15 ÷ 20 × 100 = 75 percent. 3) 20 ÷ 2 = 10, a tenfold increase.'
      }
    },
    {
      id: 'apesbiom4-aquatic',
      type: 'text' as const,
      content: `
## Aquatic Succession

Lakes and ponds also undergo succession as they slowly fill in.

1. Sediment washes in from the watershed, and dead plankton and plants settle to the bottom.
2. The pond becomes shallower, and rooted plants spread out from the littoral zone.
3. Open water shrinks into a **marsh** of cattails and sedges.
4. The marsh dries into a **wet meadow**, then shrubs and trees move in.

Nutrient pollution speeds this up: extra nitrogen and phosphorus produce more algae and plant growth, so organic matter accumulates on the bottom faster.

> 🔑 **AP Connection:** When asked to "describe how a property changes during succession," give direction **and** reason: "Soil depth increases because each generation of plants adds dead organic matter that decomposers convert to humus."
      `
    },
    {
      id: 'apesbiom4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does secondary succession on an abandoned farm reach a forest far faster than primary succession on a fresh lava flow?',
            options: [
              'Soil, seeds and roots are already present on the farm',
              'Farm fields receive more sunlight than lava flows at the same latitude',
              'Lava flows release toxic gases that kill seedlings for many centuries',
              'Farm crops are the same species that later form the climax forest'
            ],
            correctAnswer: 0,
            explanation: 'Secondary succession starts with soil, a seed bank and surviving roots, so it skips the centuries needed to build soil from bare rock. Sunlight is not what limits colonization of a lava flow.'
          },
          {
            question: 'A student claims that species richness always rises steadily until the climax community is reached. Which data from the chronosequence table best evaluate this claim?',
            options: [
              'Richness peaked at year 100 and then fell, so the claim is not supported',
              'Biomass rose at every site, so richness must also have risen at every site',
              'Soil depth rose at every site, so the claim is fully supported',
              'Richness began at only 2, so the claim cannot be tested with these data'
            ],
            correctAnswer: 0,
            explanation: 'Richness peaked at year 100 and then dropped, which contradicts a steady rise. Biomass and soil measure different properties and cannot stand in for richness.'
          },
          {
            question: 'Phosphorus-rich runoff from nearby farms enters a small pond. How will this most likely affect the pond\'s succession?',
            options: [
              'It speeds the filling of the pond into a marsh',
              'It halts succession by killing all rooted plants in the shallows',
              'It reverses succession, deepening the pond as sediments dissolve',
              'It has no effect, because ponds do not undergo succession'
            ],
            correctAnswer: 0,
            explanation: 'Extra phosphorus fuels algae and plant growth, so more dead organic matter settles to the bottom and the pond fills in faster. Ponds do undergo succession, moving toward marsh and meadow.'
          }
        ]
      }
    },
    {
      id: 'apesbiom4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Facilitation | Early species improve conditions, then are outcompeted by later species |
| Pioneers | r-selected, wind-dispersed, tolerant of harsh bare ground; some fix nitrogen |
| Soil and biomass | Increase through succession |
| Species richness | Rises, often peaks in middle-to-late stages, may dip at climax |
| NPP | Highest in the middle stage; levels off in mature communities |
| Glacier Bay | Mosses and *Dryas* → alder → spruce → spruce-hemlock |
| Old field | Annual weeds → perennials → shrubs and pines → oak-hickory |
| Aquatic | Ponds fill in to marsh, meadow, then forest; nutrients speed this |

**Next:** Part 5 looks at the species that steer these communities, keystone species and indicator species, and at disturbances such as fire that reset succession.
      `
    }
  ]
};
