export const hgUrbanChallengesPart7Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc7-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 7 of 7 — Synthesis Review: Challenges, Responses and Trade-offs**

---

| Section |
|---------|
| 📖 How the Parts Fit Together |
| One City Through Every Lens: Mumbai |
| Every Response and Its Limit |
| Mixed Review |

> 🔑 **Key Concept:** Every urban challenge in this topic links a **cause** (rapid growth, decline, past policy, cheap land at the edge) to a **land-use pattern** (informal settlements, sprawl, abandonment, gentrification, pavement) and a **response** that helps some people while costing others. The best answers name the **scale** at which the challenge and the response operate, and whether they match.
`
    },
    {
      id: 'hgurbanc7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Parts Fit Together

| Part | Big question | Core ideas | Main scale |
|---|---|---|---|
| 1 | What problems do growing and shrinking cities face? | Developing- vs. developed-world challenges; key terms | Global, city |
| 2 | How dense should cities be, and who decides? | Residential density; sprawl and its costs; zoning; smart growth, New Urbanism, UGBs, greenbelts, slow growth; praise and criticism | Metropolitan, neighborhood |
| 3 | How do pipes, roads and transit steer growth? | Interstates and induced demand; BRT and TOD; infrastructure gaps; who pays; shrinking-city budgets | National, metropolitan |
| 4 | Who can afford to live where? | Informal settlements and responses; filtering, renewal, abandonment; gentrification; redlining's legacy; affordable-housing tools | Neighborhood |
| 5 | What do cities do to the environment, and how can they respond? | Heat islands, stormwater, air, sanitation, energy, climate; green infrastructure, brownfields, regional planning, farmland protection; trade-offs | Site to global |
| 6 | How does the exam test this? | Density and percent change; leapfrogging across political boundaries; claim + mechanism + consequence | Metropolitan |

### Three Threads That Run Through Every Part
1. **Density is a trade-off.** Higher density saves land, infrastructure money and travel, but concentrates heat, pollution and demand for scarce housing.
2. **Scale mismatch.** Problems spread across metro areas while most decisions are made by individual towns, which is why regional planning keeps returning as a response.
3. **Every improvement has winners and losers.** Upgrading, growth boundaries, transit and parks all raise land values, so pair them with protections for renters.
`
    },
    {
      id: 'hgurbanc7-mumbai',
      type: 'text' as const,
      content: `
## One City Through Every Lens: Mumbai

| Lens | Mumbai |
|---|---|
| **Density (Part 2)** | About **12.4 million** people lived in Greater Mumbai on roughly **600 square kilometers** in 2011, about 20,000 per square kilometer (Census of India). For decades the city held floor space per plot to low limits compared with other Asian megacities, which many economists argue raised housing prices and pushed growth north and onto the mainland |
| **Infrastructure (Part 3)** | A suburban railway carries several million riders a day; the first metro line opened in **2014**. Many informal areas still rely on shared toilets and water bought or carried from outside |
| **Housing (Part 4)** | About **4 in 10** residents lived in census-recognized slums in 2011, Dharavi among them. Since the 1990s, a slum rehabilitation scheme has let developers build extra floor space for sale if they rehouse eligible residents in free apartments on the same land |
| **Neighborhood change (Part 4)** | After the textile strike of **1982** and the decline of the mills, central mill lands such as Lower Parel were redeveloped into offices, malls and luxury towers, a mix of deindustrialization, brownfield reuse and gentrification |
| **Environment (Part 5)** | The **July 2005** flood showed how paved land, blocked drains and lost mangroves along the Mithi River worsen monsoon flooding; air quality also worsens in winter |
| **Scale** | Most policy is set by the state of Maharashtra and the city corporation, while the metro region spreads across many municipalities |

> 🔑 **AP Connection:** A strong answer chains the lenses: "Limited land and floor-space caps raised housing prices (**density policy**), so many migrants settled in informal areas (**housing**) lacking sewers (**infrastructure**), which worsens flooding and disease (**environment**)."
`
    },
    {
      id: 'hgurbanc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mumbai\'s slum rehabilitation scheme lets developers sell extra floor space if they rehouse slum residents for free on the same land. Which trade-off is most likely?',
            options: [
              'Residents stay close to work, but denser blocks strain water and sewers',
              'Residents must move to the urban edge, far from their jobs and schools',
              'The city must pay the full cost of every new apartment out of its budget',
              'Land values fall sharply, so developers lose money on most projects'
            ],
            correctAnswer: 0,
            explanation: 'Rehousing on the same site keeps people near their work, but the extra floor space that pays for it raises density and pressure on water, sewers and roads. Developers fund the scheme through market sales, so the city does not pay for each unit.'
          },
          {
            question: 'Closed textile mills in central Mumbai were rebuilt as offices, malls and luxury towers. Which pair of concepts best describes this change?',
            options: [
              'Brownfield reuse and gentrification',
              'Filtering and zones of abandonment',
              'Leapfrog growth and sites and services',
              'Exclusionary zoning and induced demand'
            ],
            correctAnswer: 0,
            explanation: 'Former industrial land was cleaned up and redeveloped, which is brownfield reuse, and the new uses drew higher-income workers and residents, which is gentrification. Filtering and abandonment describe decline, not reinvestment.'
          },
          {
            question: 'Which response matches the scale of a problem in which forty separate towns pave farmland and none will limit its own expansion?',
            options: [
              'One town\'s green roof mandate',
              'A metro-wide growth boundary',
              'A single brownfield cleanup',
              'A neighborhood rent freeze'
            ],
            correctAnswer: 1,
            explanation: 'Political fragmentation is a metropolitan-scale problem, so it needs a metropolitan-scale response such as a regional growth boundary. Each of the other tools acts on one town, site or neighborhood.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc7-limits',
      type: 'text' as const,
      content: `
## Every Response and Its Limit

| Challenge | Response | How it helps | Limit to name on the exam |
|---|---|---|---|
| **Sprawl** | Smart growth, UGBs, greenbelts, slow-growth caps | Protects farmland; supports transit | Higher prices inside; leapfrogging outside |
| **Car dependence** | TOD, BRT, mixed-use zoning | Fewer car trips; walkable centers | Costly; nearby opposition to density |
| **Exclusion and unaffordability** | Inclusionary zoning, upzoning, land trusts, vouchers | Adds below-market or more varied housing | Small scale; slow to build |
| **Informal settlements** | Upgrading, sites and services, titling | Services without destroying communities | Rising values can push out renters |
| **Gentrification and displacement** | Rent stabilization, land trusts, resident planning | Keeps long-time residents in place | Can slow new construction |
| **Decline and abandonment** | Brownfield redevelopment, land banks, reuse of vacant lots | Returns land to use; restores tax base | Needs public money and patient investors |
| **Heat and stormwater** | Green infrastructure, tree planting, cool roofs | Cooler air; less runoff and overflow | Maintenance costs; green gentrification |
| **Fragmented governance** | Regional planning | Plans at the scale of the problem | Towns resist losing local control |
`
    },
    {
      id: 'hgurbanc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Challenge to a Response** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rain from a huge mall parking lot floods a nearby creek after every storm. The best-matched response is ___',
            options: ['Green infrastructure', 'Inclusionary zoning', 'Land titling', 'A slow-growth cap']
          },
          {
            label: 'Long-time renters are priced out after a new rail station opens nearby. The best-matched response is ___',
            options: ['A community land trust', 'A highway widening', 'Sites and services', 'A greenbelt']
          },
          {
            label: 'A large, contaminated former steel mill site sits empty near downtown. The best-matched response is ___',
            options: ['Brownfield redevelopment', 'In-situ upgrading', 'Exclusionary zoning', 'Induced demand']
          }
        ],
        correctAnswers: ['Green infrastructure', 'A community land trust', 'Brownfield redevelopment'],
        hint1: 'The problem is impervious surface and runoff.',
        hint2: 'The problem is displacement from rising land values.',
        hint3: 'The problem is contaminated industrial land.',
        explanation: 'Rain gardens, bioswales and permeable pavement absorb runoff. A community land trust keeps homes permanently affordable as values rise. Cleaning and reusing contaminated industrial land is brownfield redevelopment.'
      }
    },
    {
      id: 'hgurbanc7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Enter one word for each blank.

1) Building new homes on vacant lots inside an existing city is called _______ development.

2) Roofs, roads and parking lots that keep rain from soaking into the ground are _______ surfaces.

3) As housing ages, it passes to lower-income occupants through a process called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['infill', 'impervious', 'filtering'],
        hint1: 'It fills gaps rather than spreading outward.',
        hint2: 'The opposite of permeable.',
        hint3: 'Think of housing moving down the income ladder.',
        explanation: 'Infill development uses land inside the existing urban area. Impervious surfaces block infiltration and increase runoff. Filtering moves older housing toward lower-income households.'
      }
    },
    {
      id: 'hgurbanc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a common criticism of smart growth and New Urbanism?',
            options: [
              'They can raise housing costs and change the historic character of places',
              'They always increase the number of car trips that residents make',
              'They require cities to clear informal settlements before building',
              'They lower density by requiring very large minimum lot sizes'
            ],
            correctAnswer: 0,
            explanation: 'Higher housing costs and the loss of historic or local character are the criticisms most often raised against these designs. Smart growth aims to reduce car trips and raise density, so the other options describe its opposite.'
          },
          {
            question: 'A city plants thousands of street trees, mainly in formerly redlined neighborhoods. Which two problems is this response most directly designed to reduce?',
            options: [
              'Extreme heat and stormwater runoff',
              'Rank-size gaps and primate growth',
              'Rural depopulation and farm loss',
              'Induced demand and road congestion'
            ],
            correctAnswer: 0,
            explanation: 'Tree canopy shades and cools the hottest, most-paved neighborhoods and intercepts rain before it runs off. It does not address city-size hierarchies, rural population change or traffic.'
          }
        ]
      }
    }
  ]
}
