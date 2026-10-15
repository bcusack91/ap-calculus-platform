export const apesBiomesSuccessionPart7Data = {
  topicSlug: 'apes-biomes-succession',
  sections: [
    {
      id: 'apesbiom7-intro',
      type: 'text' as const,
      content: `
# 🌍 Biomes & Ecological Succession

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 🧭 The Topic on One Page |
| One Valley Through Time |
| Final Checklist |

> 🔑 **Key Concept:** Biomes describe **where** communities form, set by climate on land and by salinity, depth and flow in water. Succession describes **how** a community develops in one place over time. Keystone species, indicator species and disturbance link the two. This review puts them side by side.

## 🧭 The Topic on One Page

| Part | Big idea | What you should be able to do |
|---|---|---|
| 1 | Terrestrial biomes; succession basics | Name each land biome's climate and vegetation; tell primary from secondary succession |
| 2 | Aquatic biomes | Use salinity, depth, flow and DO to identify freshwater, estuary and marine biomes; name the four lake zones |
| 3 | Climate and biome distribution | Read a climatograph; apply the 6.5 °C per 1,000 m rule; explain soil differences |
| 4 | Succession in depth | Track soil, biomass, richness and NPP through the stages; read chronosequence data |
| 5 | Keystone and indicator species; fire | Explain outsized roles; score a stream; explain fire adaptations and prescribed burns |
| 6 | Exam skills | Turn tables into trends, percent changes and mechanisms |

### Calculations from this topic

| Calculation | Method | Example |
|---|---|---|
| Annual precipitation | Add 12 monthly values | 12 months of 50 mm = 600 mm |
| Mean annual temperature | Add 12 monthly values ÷ 12 | 120 ÷ 12 = 10 °C |
| Temperature at altitude | Subtract 6.5 °C per 1,000 m gained | 1,500 m higher: 9.75 °C cooler |
| Salinity of a mix | Weighted average of the waters | 1 part sea (35 ppt) + 1 part river (0) = 17.5 ppt |
| Rate of change | Change ÷ time | 24 cm of soil in 200 yr = 0.12 cm/yr |
| Percent change | (new − old) ÷ old × 100 | Index 20 → 15: −25% |
| Stream biotic index | Types × points (3, 2, 1), then add | 4 sensitive + 2 tolerant types = 12 + 2 = 14 |
      `
    },
    {
      id: 'apesbiom7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing of biome and defining condition is correct?',
            options: [
              'Estuary: brackish water where a river meets the sea',
              'Coral reef: cold, deep water rich in dissolved nutrients',
              'Tundra: heavy rainfall and thick, fertile topsoil',
              'Profundal zone: shallow, sunlit water with rooted plants'
            ],
            correctAnswer: 0,
            explanation: 'Estuaries are defined by mixing fresh and salt water. Coral reefs need warm, shallow, clear water, tundra is dry with waterlogged permafrost soils, and shallow water with rooted plants is the littoral zone.'
          },
          {
            question: 'A valley at 200 m elevation averages 24 °C. About what is the average temperature on a plateau at 2,200 m?',
            options: [
              'About 11 °C',
              'About 17.5 °C',
              'About 4 °C',
              'About 22 °C'
            ],
            correctAnswer: 0,
            explanation: 'The plateau is 2,000 m higher, so it is about 2 × 6.5 = 13 °C cooler: 24 − 13 = 11 °C. Subtracting only 6.5 °C would give 17.5 °C.'
          },
          {
            question: 'Which statement correctly compares an early-successional and a late-successional forest?',
            options: [
              'Biomass is greater in the late forest, but NPP peaks earlier',
              'The early forest has more biomass, while NPP is higher in the late forest',
              'Both forests have equal biomass, but only the late forest has soil',
              'Soil is thinner in the late forest as trees use up organic matter'
            ],
            correctAnswer: 0,
            explanation: 'Biomass accumulates through succession, but a mature forest spends much of its GPP on respiration, so NPP peaks earlier. Soil deepens, rather than shrinks, as succession proceeds.'
          }
        ]
      }
    },
    {
      id: 'apesbiom7-valley',
      type: 'text' as const,
      content: `
## One Valley Through Time

A mountain valley in a temperate deciduous forest region is followed for 150 years. (Illustrative scenario.)

**1. The setting (Part 3).** Monthly temperatures range from −4 °C to 23 °C and precipitation totals 1,100 mm, spread evenly. That fits a temperate deciduous forest. The ridge 1,400 m above is about $1.4 \\times 6.5 \\approx 9$ °C cooler and supports conifers.

**2. The stream and pond (Part 2).** A beaver dam creates a pond with a littoral fringe of cattails, open limnetic water and a dark profundal zone where oxygen runs low in late summer.

**3. A disturbance (Part 5).** Trappers remove the beavers. The dam fails, the pond drains, and a sediment-rich meadow appears: beavers were a **keystone** engineer, and without them the wetland is lost.

**4. Secondary succession (Part 4).** The meadow follows the old-field sequence: grasses and wildflowers, then shrubs, then sun-loving trees, then shade-tolerant hardwoods. Soil deepens and biomass rises; NPP peaks in the shrub and young-tree stage.

**5. Indicators (Part 5).** Before the dam failed, the stream below scored 21 on the biotic index (good). Silt from the drained pond smothered sensitive larvae, and the score fell to 13 (fair):

$$\\frac{13 - 21}{21} \\times 100 \\approx -38\\%$$

**6. Management (Part 5).** Reintroducing beavers would restore ponds and wetland habitat. *Trade-off:* beaver ponds can flood roads or farmland, so managers may need flow devices that limit pond depth.
      `
    },
    {
      id: 'apesbiom7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units. Values are illustrative.

1) A site's monthly temperatures add up to 54 °C. What is its mean annual temperature in °C?

2) A stream sample contains 4 sensitive types, 3 somewhat sensitive types and 2 tolerant types. Using 3, 2 and 1 points, what is the index value?

3) Forest biomass rose from 12 kg/m² at year 30 to 30 kg/m² at year 90. What was the average increase, in kg/m² per year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.5', '20', '0.3'],
        hint1: 'Divide the sum by 12.',
        hint2: '(4 × 3) + (3 × 2) + (2 × 1).',
        hint3: 'Change in biomass ÷ change in years: (30 − 12) ÷ (90 − 30).',
        explanation: '1) 54 ÷ 12 = 4.5 °C. 2) 12 + 6 + 2 = 20. 3) 18 ÷ 60 = 0.3 kg/m² per year.'
      }
    },
    {
      id: 'apesbiom7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the valley scenario, why is the meadow left by the drained beaver pond an example of secondary rather than primary succession?',
            options: [
              'Soil and sediment remain on the site',
              'The meadow is colonized by lichens first',
              'The beavers are expected to return soon',
              'The site lies in a temperate climate zone'
            ],
            correctAnswer: 0,
            explanation: 'Secondary succession starts where soil already exists, and the drained pond leaves rich sediment behind. Lichens on bare rock signal primary succession, and climate does not decide which type occurs.'
          },
          {
            question: 'A scientist wants to know whether a lake is becoming more polluted over time without running chemical tests each week. Which approach uses indicator species most effectively?',
            options: [
              'Track sensitive and tolerant invertebrates in yearly samples',
              'Count the total number of fish caught by anglers each summer',
              'Record which bird species visit the lake during migration',
              'Measure the height of trees growing along the lake shore'
            ],
            correctAnswer: 0,
            explanation: 'Shifts from sensitive to tolerant invertebrates over several years reveal declining water quality. Angler catch, migrating birds and shoreline trees respond to many factors besides water pollution.'
          },
          {
            question: 'A grassland has not burned in 40 years and is filling in with shrubs. Which explanation and response best fit?',
            options: [
              'Without fire, succession moves on; prescribed burns can restore it',
              'Without grazing, soil has eroded; planting trees can restore it',
              'The climate has turned wetter; irrigation removal can restore it',
              'Shrubs are keystone species, so protecting them restores it'
            ],
            correctAnswer: 0,
            explanation: 'Fire normally kills invading woody plants while grasses regrow from protected growing points, so its absence lets succession proceed toward shrubland. Prescribed burns reset the community to grassland.'
          }
        ]
      }
    },
    {
      id: 'apesbiom7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

| ✅ | I can... |
|---|---|
| ☐ | Identify a land biome from a climatograph by calculating annual precipitation and mean temperature |
| ☐ | Identify an aquatic biome from salinity, depth, flow and light, and name the four lake zones |
| ☐ | Explain why rainforest soils are poor and grassland soils are rich |
| ☐ | Describe how soil, biomass, richness and NPP change through succession, and explain why |
| ☐ | Tell primary from secondary succession by whether soil is present |
| ☐ | Define keystone and indicator species with an example of each, and score a stream sample |
| ☐ | Explain fire adaptations and why prescribed burns are used |
| ☐ | Predict how biomes shift as climate warms |

**You have completed Biomes & Ecological Succession.** Revisit Part 3 for climatograph practice and Part 4 for succession data.
      `
    }
  ]
};
