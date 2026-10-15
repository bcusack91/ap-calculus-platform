export const hgUrbanChallengesPart6Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc6-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 6 of 7 — AP Exam Practice: Growth Policy in Two Counties**

---

| Section |
|---------|
| 📖 How the Exam Tests Urban Challenges |
| Warm-Up Questions |
| Stimulus: East County and West County |
| FRQ Practice with Model Answers |
| Stimulus Questions |

> 🔑 **Key Concept:** AP questions on Topics 6.6–6.8 and 6.10–6.11 almost always ask you to connect a **land-use pattern** to a **cause** and a **policy response**, and then to weigh the response's **benefits and limits**. Data questions usually turn on density, percent change and scale.
`
    },
    {
      id: 'hgurbanc6-howtested',
      type: 'text' as const,
      content: `
## 📖 How the Exam Tests Urban Challenges

| Task verb | What it requires | Example for this topic |
|---|---|---|
| **Identify** | Name a term, trend or value; no reasoning needed | "Identify the trend in density from 2000 to 2020." |
| **Describe** | Give the relevant characteristics of something | "Describe one feature of New Urbanist design." |
| **Explain** | Give a cause or effect and *how* it works | "Explain how an urban growth boundary can raise housing prices." |
| **Compare** | Give a similarity or difference between two things, with evidence | "Compare the land-use patterns of the two counties." |
| **Explain a limitation** | Say what a policy, model or data source cannot do, and why | "Explain one limitation of the data in the table." |

### A Reliable Answer Pattern
**Claim + mechanism + consequence.** For example: "The urban growth boundary (**claim**) limits the land available for new housing (**mechanism**), so as population grows, demand rises faster than supply and prices increase (**consequence**)."
`
    },
    {
      id: 'hgurbanc6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Warm-Up Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A geographer finds that a metro area\'s population grew 20% while the land it covers grew 70%. This evidence most strongly suggests:',
            options: [
              'Urban sprawl',
              'Gentrification',
              'Infill',
              'A primate city'
            ],
            correctAnswer: 0,
            explanation: 'Land consumption growing much faster than population means density fell, the defining sign of sprawl. Infill would raise density, and gentrification concerns who lives in a neighborhood rather than how much land a metro uses.'
          },
          {
            question: 'Which statement best explains why sustainability policies adopted by one suburb often have little effect on sprawl across its metro area?',
            options: [
              'Development can move to nearby towns that have no comparable rules',
              'Suburban governments cannot legally pass any zoning rules of their own',
              'Sprawl is driven by national laws that local policies cannot affect',
              'Most metro areas are governed by a single regional authority already'
            ],
            correctAnswer: 0,
            explanation: 'A metro area is usually split among many municipalities, so growth blocked in one simply shifts to its neighbors. Suburbs can and do zone, and few U.S. metros have a single regional authority.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc6-stimulus',
      type: 'text' as const,
      content: `
## Stimulus: East County and West County

The table describes two neighboring counties in **one hypothetical U.S. metropolitan area**. East County, which contains the central city, adopted an **urban growth boundary in 2005**. West County, just across the county line, has no growth boundary. An interstate highway runs west from downtown through both counties.

| Indicator | East County (UGB since 2005) | West County (no UGB) |
|---|---|---|
| Population, 2000 | 400,000 | 300,000 |
| Population, 2020 | 528,000 | 420,000 |
| Urbanized land, 2000 (sq mi) | 160 | 150 |
| Urbanized land, 2020 (sq mi) | 176 | 240 |
| Farmland converted to development, 2000–2020 (acres) | 9,000 | 52,000 |
| Share of new homes built as townhouses or apartments, 2000–2020 | 55% | 20% |
| Workers driving alone to work, 2020 | 68% | 84% |
| Median home price ÷ median household income, 2020 | 6.0 | 4.0 |

A map (described in text) shows most of West County's new subdivisions clustered along the interstate, just beyond East County's growth boundary.

### Reading the Table Before the Questions
1. **Density:** East County rose from 400,000 ÷ 160 = **2,500** to 528,000 ÷ 176 = **3,000** people per square mile. West County fell from 300,000 ÷ 150 = **2,000** to 420,000 ÷ 240 = **1,750**.
2. **Land use:** West County's urbanized land grew **60%** while its population grew **40%**, the signature of sprawl. East County's land grew only **10%** while its population grew **32%**.
3. **Housing cost:** East County homes cost six years of median income, versus four in West County, consistent with limited land supply inside the boundary.
4. **Spatial link:** new West County subdivisions sit just past the boundary along the highway, suggesting **leapfrog** growth: development blocked in East County moved next door.

**Limitations:** the data cannot prove that the UGB *caused* the price gap, since East County also holds the central city, whose jobs and amenities raise prices; county averages also hide differences between neighborhoods.
`
    },
    {
      id: 'hgurbanc6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the stimulus table. Enter numbers only.

**1)** By what percent did East County's population grow from 2000 to 2020?

**2)** How many people per square mile lived in West County's urbanized land in 2020?

**3)** How many times as much farmland did West County convert as East County? Round to one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '1750', '5.8'],
        hint1: 'Change ÷ original × 100: (528,000 − 400,000) ÷ 400,000.',
        hint2: 'Population ÷ urbanized land.',
        hint3: 'Divide 52,000 by 9,000.',
        explanation: '1) 128,000 ÷ 400,000 = 0.32, or 32%. 2) 420,000 ÷ 240 = 1,750 people per square mile. 3) 52,000 ÷ 9,000 ≈ 5.8 times as much.'
      }
    },
    {
      id: 'hgurbanc6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Identify the change in West County's population density from 2000 to 2020.**
> *Model:* It decreased, from about 2,000 to about 1,750 people per square mile.

**B. Describe one piece of evidence from the table that West County experienced urban sprawl.**
> *Model:* West County's urbanized land grew 60% (150 to 240 square miles) while its population grew only 40%, so development spread outward faster than people were added.

**C. Explain how East County's urban growth boundary affected its density.**
> *Model:* The boundary limited the land available for development, so builders added housing on land already inside it, with 55% of new homes built as townhouses or apartments, which raised density from 2,500 to 3,000 people per square mile.

**D. Explain one reason the ratio of home prices to income is higher in East County.**
> *Model:* Because the boundary restricts the supply of buildable land while population grew 32%, demand for housing rose faster than supply, so land and home prices climbed relative to income.

**E. Explain how growth in West County may be connected to East County's policy, using the concept of scale.**
> *Model:* The boundary works only at the county scale, not the metropolitan scale, so development blocked in East County leapfrogged across the county line to cheaper, unregulated land along the interstate in West County.

**F. Explain one environmental consequence of West County's land-use pattern.**
> *Model:* Converting 52,000 acres of farmland into subdivisions and roads increased impervious surface, so more stormwater runs off into streams, raising flood risk and carrying pollutants; the high share of solo driving (84%) also adds emissions.

**G. Explain one regional policy that could address the pattern in both counties, and one limitation of that policy.**
> *Model:* A regional planning body, like Portland's Metro, could draw one growth boundary for the whole metro area so development cannot simply shift across the county line. A limitation is that West County's government and landowners may resist losing control over local land use, and a region-wide boundary could raise housing prices across the whole metro.

### Why These Answers Score
- **Explain** answers link evidence to a concept with *so* or *because*.
- Each answer uses **specific numbers** from the stimulus.
- Part E names the **scale** explicitly, which the question demands.
`
    },
    {
      id: 'hgurbanc6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use the East County and West County table.
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of figures best supports the claim that East County grew more compactly than West County?',
            options: [
              'New homes built as townhouses or apartments, 55% versus 20%',
              'Populations in 2000 of 400,000 versus 300,000 residents',
              'Urbanized land in 2000 of 160 versus 150 square miles',
              'Home price-to-income ratios of 6.0 versus 4.0 in 2020'
            ],
            correctAnswer: 0,
            explanation: 'A larger share of attached and multifamily housing means more homes per acre, which is compact growth. The 2000 figures describe the starting point, and price ratios measure cost rather than land use.'
          },
          {
            question: 'Which additional data would best test whether East County\'s growth boundary caused its higher housing costs?',
            options: [
              'Prices in similar metros without such a policy',
              'Total miles of interstate highway in each county',
              'The number of census tracts inside each county',
              'Average winter temperatures in the two counties'
            ],
            correctAnswer: 0,
            explanation: 'Comparing with similar metro areas that lack boundaries helps separate the policy\'s effect from regional growth that raised prices everywhere. Highway miles, tract counts and temperatures do not isolate the boundary\'s effect.'
          },
          {
            question: 'The commuting data in the table are most consistent with which conclusion?',
            options: [
              'Lower densities in West County make car travel more necessary',
              'East County residents have higher incomes and own more vehicles',
              'Transit service in West County is more frequent than in East County',
              'Both counties have nearly identical patterns of travel to work'
            ],
            correctAnswer: 0,
            explanation: 'West County\'s low, falling density spreads destinations apart, so 84% drive alone versus 68% in denser East County. The table gives no vehicle-ownership or transit-frequency data, and the two shares clearly differ.'
          }
        ]
      }
    }
  ]
}
