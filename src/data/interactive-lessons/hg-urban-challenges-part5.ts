export const hgUrbanChallengesPart5Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc5-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 5 of 7 — Environmental Challenges and Sustainable Responses**

---

| Section |
|---------|
| 📖 Heat and Water: How Pavement Changes a Place |
| Air, Sanitation, Energy and Climate |
| Responses: Green Infrastructure, Brownfields and Regional Planning |
| Trade-offs: When Sustainability Has a Price |

> 🔑 **Key Concept:** Cities concentrate people, buildings and energy use, so they concentrate environmental problems. Yet density can also make cities **more efficient per person** than sprawl. This part covers the environmental challenges of urban areas and the responses the CED names: **regional planning, brownfield remediation, urban growth boundaries and farmland protection** (CED Topics 6.8 and 6.11). Each problem appears at a different scale, from a single parking lot to the whole planet.
`
    },
    {
      id: 'hgurbanc5-heatwater',
      type: 'text' as const,
      content: `
## 📖 Heat and Water: How Pavement Changes a Place

### The Urban Heat Island
Asphalt, concrete and dark roofs absorb sunlight and release heat slowly; buildings block breezes; engines and air conditioners add waste heat; and there are fewer trees to cool the air through shade and evaporation. The U.S. Environmental Protection Agency (EPA) estimates that **daytime** temperatures in urban areas run about **1–7°F** higher than in outlying areas, and **nighttime** temperatures about **2–5°F** higher. The air-temperature gap between a city and its countryside is usually largest a few hours after sunset, because pavement and buildings release the heat they stored during the day while open land cools quickly.

**Why it matters:** hot nights prevent bodies from recovering, so heat waves kill more people in cities, especially older adults, outdoor workers and residents without air conditioning. Heat also raises electricity demand and worsens ground-level ozone.

### Impervious Surfaces and Stormwater
**Impervious surfaces** (roofs, roads, parking lots) stop rain from soaking into the ground, so it runs off into drains and streams.

| Ground cover | Share of rain that runs off | Share that soaks in |
|---|---|---|
| Natural ground cover | About 10% | About 50% |
| 75–100% impervious (dense city) | About 55% | About 15% |

*Source: U.S. EPA, adapted from the Federal Interagency Stream Restoration Working Group (1998). The rest of the rain evaporates or is taken up by plants.*

**Worked example: one storm on one parking lot**
1. One inch of rain on one acre is about **27,000 gallons** of water.
2. A **4-acre** parking lot in a 1-inch storm receives about 4 × 27,000 = **108,000 gallons**.
3. If about 55% runs off instead of 10%, the lot sends about 59,400 gallons to the drains instead of about 10,800, more than **five times** as much.
4. **Consequence:** faster, larger floods, eroded stream banks and oil, metals and trash washed into rivers.

### Combined Sewer Overflows
Many older cities, including hundreds in the United States, have **combined sewers** that carry stormwater and sewage in the same pipes. In heavy rain the pipes overflow and send untreated sewage into rivers and harbors, a problem that grows as more land is paved.
`
    },
    {
      id: 'hgurbanc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two neighborhoods in one city get the same rainfall. The one with more parking lots floods more often. What best explains the difference?',
            options: [
              'Pavement stops rain from soaking into the soil',
              'Parking lots attract more rain to fall over them',
              'Paved areas sit at a higher elevation than parks',
              'Cars release water vapor that collects on asphalt'
            ],
            correctAnswer: 0,
            explanation: 'Impervious surfaces block infiltration, so far more of the rain runs off at once into drains and streams. Pavement does not change how much rain falls or the elevation of the land.'
          },
          {
            question: 'Why is the urban heat island usually strongest at night rather than in the afternoon?',
            options: [
              'Pavement and buildings release the heat they stored during the day',
              'Cities receive more sunlight after dark than the surrounding farms do',
              'Trees in rural areas warm the air at night by releasing stored water',
              'Streetlights produce most of the extra heat found in large city centers'
            ],
            correctAnswer: 0,
            explanation: 'Dense materials absorb solar energy by day and radiate it slowly after sunset, so cities cool far less at night than open countryside. Evaporation from trees cools the air rather than warming it.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc5-challenges',
      type: 'text' as const,
      content: `
## Air, Sanitation, Energy and Climate

| Challenge | Data (rounded, with source) | Scale and pattern |
|---|---|---|
| **Air quality** | About **99%** of the world's people lived where air pollution exceeded WHO guideline levels (World Health Organization, 2019 data); outdoor air pollution was linked to about **4.2 million** premature deaths in 2019 | Worst in fast-industrializing cities of South Asia, East Asia and Africa; local traffic and regional industry both matter |
| **Sanitation** | About **3.5 billion** people lacked safely managed sanitation in **2022** (WHO/UNICEF Joint Monitoring Programme) | Concentrated in informal settlements and rural areas of low-income countries |
| **Water quality** | Untreated sewage, industrial waste and urban runoff pollute rivers that cities also drink from | The Ganges near large Indian cities is a well-known case |
| **Energy and emissions** | UN-Habitat estimates that cities use about **three-quarters** of the world's energy and produce **more than 60%** of greenhouse-gas emissions, on less than 2% of Earth's land | Per person, residents of dense cities often emit less from transport than suburban residents |
| **Climate risk** | Many of the largest cities sit on coasts and deltas exposed to sea-level rise and stronger storms | Jakarta's northern districts are sinking as groundwater is pumped out; Indonesia announced in **2019** that it would move its capital to Borneo |

### The Ecological Footprint
A city's **ecological footprint** is the land and water area needed to supply its food, water, energy and materials and to absorb its waste. A large city's footprint covers **many times** its own area, reaching into farms, forests and oceans worldwide.

**Limit of the measure:** the footprint is a useful comparison tool, but it converts very different impacts into a single area figure, which hides which resource is under the most pressure.

> 🔑 **AP Connection:** Density cuts both ways. A dense city concentrates pollution and heat, but each resident typically uses less land, drives less and heats a smaller home. Strong answers name **which scale** they mean: per square mile or per person.
`
    },
    {
      id: 'hgurbanc5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the runoff table and the fact that 1 inch of rain on 1 acre is about 27,000 gallons. Enter numbers only.

**1)** A 10-acre shopping center receives 1 inch of rain. About how many gallons fall on it in total?

**2)** If 55% of that water runs off, about how many gallons run off?

**3)** If the site were natural ground cover with 10% runoff, about how many gallons would run off?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['270000', '148500', '27000'],
        hint1: 'Multiply the acres by 27,000.',
        hint2: 'Multiply your first answer by 0.55.',
        hint3: 'Multiply your first answer by 0.10.',
        explanation: '1) 10 × 27,000 = 270,000 gallons. 2) 0.55 × 270,000 = 148,500 gallons. 3) 0.10 × 270,000 = 27,000 gallons, so paving multiplies runoff by 5.5.'
      }
    },
    {
      id: 'hgurbanc5-responses',
      type: 'text' as const,
      content: `
## Responses: Green Infrastructure, Brownfields and Regional Planning

| Response | How it works | Example | Limit |
|---|---|---|---|
| **Green infrastructure** | Green roofs, rain gardens, bioswales, permeable pavement and street trees soak up rain and cool the air | Philadelphia's **Green City, Clean Waters** plan (**2011**) uses green infrastructure to cut sewer overflows | Needs steady maintenance; benefits are spread over decades |
| **Brownfield remediation and redevelopment** | Clean up contaminated former industrial land and reuse it, instead of building on farmland | The EPA counts **more than 450,000** brownfields in the U.S.; Seattle's **Gas Works Park** (opened **1975**) reused a coal-gasification plant site | Cleanup is costly; liability fears deter investors without public help |
| **Regional planning** | One body plans land use, transit and sewers for a whole metro area instead of dozens of separate towns | The **Twin Cities Metropolitan Council** (Minnesota, **1967**); Portland's **Metro**, an elected regional government | Local governments often resist giving up control |
| **Urban growth boundaries** | Keep development inside a line (Part 2) | Portland, Oregon | Can raise housing prices inside the line |
| **Farmland protection** | Agricultural zoning, or buying **development rights** (conservation easements) so farms can never be subdivided | County farmland-preservation programs in Pennsylvania and Maryland | Expensive; works only where enough farms enroll |
| **Clean transport and energy** | Transit, electric buses, district heating, renewable power | Bus rapid transit (Part 3) | High upfront costs |

### Why Regional Scale Matters
A U.S. metro area may contain **dozens or even hundreds** of separate municipal governments, school districts and special districts, a pattern called **political fragmentation**. Each town competes for tax base and makes its own land-use rules, so sprawl and pollution that cross town lines are hard to manage. Regional bodies exist to plan at the scale where the problems actually occur.
`
    },
    {
      id: 'hgurbanc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A former rail yard with oil-soaked soil is cleaned up and rebuilt as apartments and a park. Which sustainability goal does this most directly serve?',
            options: [
              'It reuses developed land instead of open land at the edge',
              'It raises the number of cars each household is likely to own',
              'It moves new housing farther away from existing city jobs',
              'It increases the total area of impervious surface in the city'
            ],
            correctAnswer: 0,
            explanation: 'Brownfield redevelopment puts growth on land that is already urban and served by infrastructure, which reduces pressure to pave farmland at the edge. It also removes contamination, but it does not add cars or distance.'
          },
          {
            question: 'Forty separate towns in one metro area each set their own land-use rules, and none will limit growth alone. Which response fits the scale of this problem?',
            options: [
              'A regional planning body',
              'A single town\'s green roof rule',
              'A neighborhood land trust',
              'A countywide rent freeze'
            ],
            correctAnswer: 0,
            explanation: 'The problem is political fragmentation across a metropolitan area, so the response must also work at the metropolitan scale, like Portland\'s Metro or the Twin Cities Metropolitan Council. The other tools act on one town, neighborhood or housing market.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc5-tradeoffs',
      type: 'text' as const,
      content: `
## Trade-offs: When Sustainability Has a Price

| Policy | Intended benefit | Possible cost | Who bears it |
|---|---|---|---|
| **New park or greenway** | Shade, recreation, cleaner stormwater | **Green gentrification**: nearby rents rise | Long-time renters near the park |
| **Urban growth boundary** | Protects farmland, cuts sprawl | Higher land and housing prices inside the line | First-time buyers, renters |
| **Brownfield redevelopment** | Cleans pollution, reuses land | New high-end housing may replace affordable areas | Residents of the old industrial district |
| **Congestion or emissions charges** | Cleaner air, faster buses | Higher costs for drivers | Workers with no transit alternative |

**Case: New York's High Line (opened 2009).** An abandoned elevated rail line became a celebrated linear park. It drew millions of visitors and new investment, and it is now a widely cited example of green gentrification, because property values and rents rose steeply along it.

**Responses that soften the trade-off:** pair green projects with **inclusionary zoning** or **community land trusts** (Part 4), and involve existing residents in planning before land values change.

> 🔑 **AP Connection:** The CED expects you to **evaluate** responses, not just list them. Name the response, its mechanism, and one group that could be harmed, then suggest a complementary policy.
`
    },
    {
      id: 'hgurbanc5-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Apply the Trade-offs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city turns a polluted riverbank into a popular trail and park. Five years later, rents in the adjacent blocks have doubled. This outcome is best described as:',
            options: [
              'Green gentrification',
              'Filtering of housing',
              'Leapfrog development',
              'Brownfield abandonment'
            ],
            correctAnswer: 0,
            explanation: 'An environmental improvement that raises nearby property values and rents, risking displacement, is green gentrification. Filtering would move housing toward lower-income residents, the opposite direction.'
          },
          {
            question: 'Which policy most directly protects farmland at the edge of a metro area while letting farmers keep their land?',
            options: [
              'Buying development rights through conservation easements',
              'Requiring affordable units in every new apartment building',
              'Building a ring road around the edge of the metro area',
              'Extending sewer lines into the farm district for new homes'
            ],
            correctAnswer: 0,
            explanation: 'Purchasing development rights pays farmers to give up the right to subdivide while they keep farming, so the land stays rural permanently. A ring road or sewer extension would invite development onto the farms.'
          }
        ]
      }
    }
  ]
}
