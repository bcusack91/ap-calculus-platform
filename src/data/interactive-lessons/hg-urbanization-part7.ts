export const hgUrbanizationPart7Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani7-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 7 of 7 — Synthesis Review: Cities from Site to System**

---

| Section |
|---------|
| 📖 How the Parts Fit Together |
| One City Through Every Lens: Mexico City |
| Models and Ideas with Their Limits |
| Mixed Review |

> 🔑 **Key Concept:** This topic moves through **scales**. A city begins with a **site and situation**; it grows through **urbanization processes**; its size places it in a **national urban hierarchy**; its land is organized by **internal structure**; its links rank it in a **global network**; and **data** let us measure all of it, with limits that depend on definitions and scale.
`
    },
    {
      id: 'hgurbani7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Parts Fit Together

| Part | Big question | Core ideas | Scale |
|---|---|---|---|
| 1 | How fast and why are cities growing? | Urbanization vs. urban growth; causes; key terms | National, global |
| 2 | Why is a city where it is, and why did it grow? | Site vs. situation; urban hearths; five drivers of urbanization and suburbanization; the urbanization curve | Local to global |
| 3 | How are cities sized and spaced? | Rank-size rule; primate cities; gravity model; central place theory | National, regional |
| 4 | How is land arranged inside a city? | Bid-rent; Burgess, Hoyt, Harris-Ullman, galactic; Latin American, African, Southeast Asian and Middle Eastern models | City |
| 5 | How do cities rank globally, and what is new at the edge? | Megacities and metacities; world cities; edge cities, boomburbs, exurbs | Global, metropolitan |
| 6 | How do we measure cities? | Census, ACS, tracts; qualitative methods; definitions of urban | Every scale |

## One City Through Every Lens: Mexico City

| Lens | Mexico City |
|---|---|
| **Site** | Founded by the Mexica as Tenochtitlan, about 1325, on an island in Lake Texcoco; the Spanish built their capital on its ruins after 1521, and the lakes were later drained, leaving soft clay that makes the city sink |
| **Situation** | The center of the Valley of Mexico on the central plateau; national capital and hub of roads, rail and air routes |
| **Size and hierarchy** | About 22 million in 2018 (UN), roughly four times the Guadalajara metro area, so Mexico shows a **primate city** pattern |
| **Internal structure** | Fits **Griffin-Ford**: the colonial grid and Zócalo plaza at the center, a wealthy **spine** along Paseo de la Reforma, and settlements such as Ciudad Nezahualcóyotl that began as informal housing on the drained lakebed |
| **Edge growth** | Santa Fe, a high-rise business district on the western edge, functions like an **edge city** |
| **Global role** | A **megacity** that is also a regional **world city**, with Mexico's stock exchange and the Latin American headquarters of many transnational firms |
| **Data** | Mexico's national statistics institute (INEGI) runs the census; definitions of the metro area differ between INEGI and the UN |

> 🔑 **AP Connection:** A strong answer moves across scales in one chain: "Its central situation made Mexico City the national capital (**situation**), which concentrated investment and migrants there (**primacy**), producing a wealthy spine and peripheral settlements (**Griffin-Ford**)."
`
    },
    {
      id: 'hgurbani7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Tenochtitlan was built on an island in a lake, which helped protect it. This fact describes the city\'s:',
            options: [
              'Site',
              'Situation',
              'Threshold',
              'Range'
            ],
            correctAnswer: 0,
            explanation: 'The physical setting of the place itself, an island in a lake, is its site. Situation would describe its connections to other places, and threshold and range belong to central place theory.'
          },
          {
            question: 'A wealthy corridor along Paseo de la Reforma and poor settlements on the urban edge best match which model?',
            options: [
              'Burgess concentric zone model',
              'Griffin-Ford Latin American city model',
              'McGee Southeast Asian city model',
              'Harris and Ullman multiple nuclei model'
            ],
            correctAnswer: 1,
            explanation: 'A spine of wealth from the center and squatter settlements on the periphery are the signature features of Griffin-Ford. Burgess puts the wealthy on the edge, the reverse of this pattern.'
          },
          {
            question: 'Mexico City has roughly four times the population of the country\'s second-largest metro area. What does this show?',
            options: [
              'A primate city pattern',
              'A rank-size pattern',
              'A gravity model effect',
              'A central place hexagon'
            ],
            correctAnswer: 0,
            explanation: 'The rank-size rule predicts a second city about half the size of the first; a first city four times larger signals primacy. Gravity and central place theory describe interaction and spacing, not this size ratio.'
          }
        ]
      }
    },
    {
      id: 'hgurbani7-limits',
      type: 'text' as const,
      content: `
## Models and Ideas with Their Limits

| Idea | What it explains well | Limitation |
|---|---|---|
| **Site and situation** | Why a city began where it did, and why it grew | Situation changes: a canal or rail line can make a site valuable, and its decline can shrink a city |
| **Rank-size rule** | The size hierarchy of large, integrated countries such as the U.S. | Depends on city or metro boundaries; describes a pattern without explaining it |
| **Primate city** | Dominant capitals shaped by colonialism and centralization | Not limited to less developed countries; France and the U.K. have primate capitals |
| **Gravity model** | Interaction between places of different sizes and distances | Ignores borders, language, cost and online links |
| **Central place theory** | Spacing of towns in flat farm regions | Assumes a uniform plain and nearest-center shopping; online retail stretches range |
| **Burgess, Hoyt, Harris-Ullman** | Early 20th-century U.S. cities | Built from a few U.S. cities before highways; ignore terrain and later change |
| **Galactic city** | Car-based U.S. metros with edge cities | Misses transit-based cities and downtown revival |
| **Latin American, African, Southeast Asian, Middle Eastern models** | Colonial legacies and informal growth | Each region's cities vary widely and are changing fast |
| **Census data** | Detailed, comparable counts at many scales | Definitions and boundaries change results; numbers do not show meaning or motive |

### Five Errors to Avoid
1. Confusing **site** (the physical place) with **situation** (connections to other places).
2. Treating **megacity** and **world city** as synonyms. One measures size, the other global connectivity.
3. Calling every primate city a sign of poverty. Primacy reflects centralization and history.
4. Applying a U.S. model to a city elsewhere without stating a limitation.
5. Comparing percent urban across countries without noting that each country defines "urban" differently.
`
    },
    {
      id: 'hgurbani7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A shop closes after the town\'s population falls below the number of customers it needs. The concept is ___',
            options: ['Threshold', 'Range', 'Situation', 'Primacy']
          },
          {
            label: 'Two large cities close together exchange more migrants than two small, distant towns. The model is ___',
            options: ['The gravity model', 'The rank-size rule', 'The sector model', 'Central place theory']
          },
          {
            label: 'Interviews about why residents moved to the suburbs produce ___',
            options: ['Qualitative data', 'Quantitative data', 'Census counts', 'Survey estimates']
          }
        ],
        correctAnswers: ['Threshold', 'The gravity model', 'Qualitative data'],
        hint1: 'The minimum number of customers.',
        hint2: 'Interaction rises with size and falls with distance.',
        hint3: 'People\'s reasons in their own words.',
        explanation: 'A business needs a minimum market, its threshold. Interaction that rises with population and falls with distance is the gravity model. Interviews that capture reasons in people\'s own words are qualitative data.'
      }
    },
    {
      id: 'hgurbani7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly pairs an idea from this topic with one of its limitations?',
            options: [
              'Hoyt\'s sector model ignores how routes shape land use',
              'Central place theory assumes a varied, hilly terrain',
              'The gravity model ignores the effect of borders',
              'The rank-size rule fits only less developed countries'
            ],
            correctAnswer: 2,
            explanation: 'The gravity model counts only population and distance, so it overpredicts interaction across closed borders or language divides. Hoyt built his model around transport routes, central place theory assumes a flat plain, and the rank-size rule fits the U.S. well.'
          },
          {
            question: 'Which pair of cities best shows that a megacity is not always a major world city?',
            options: [
              'Kinshasa and Zurich, which differ greatly in size and in global links',
              'London and New York, which both rank in the top tier of world cities',
              'Tokyo and Delhi, which both rank among the largest urban areas on Earth',
              'Mesa and Tysons, which are both suburbs that grew quickly after 1970'
            ],
            correctAnswer: 0,
            explanation: 'Kinshasa is far larger than Zurich but much less connected to global finance, which separates size from world-city status. The other pairs do not contrast size with global connectivity.'
          },
          {
            question: 'Two countries both report that 60% of their people are urban. Why might this comparison mislead?',
            options: [
              'Each country may define urban by a different size threshold',
              'Percent urban cannot be measured with national census data',
              'Urban populations change too quickly to be counted at all',
              'Both countries must have exactly the same megacity count'
            ],
            correctAnswer: 0,
            explanation: 'Countries set different thresholds for what counts as urban, from about 200 people in some Nordic countries to far higher figures elsewhere, so equal percentages may describe different realities. National censuses are in fact the main source of these figures.'
          }
        ]
      }
    }
  ]
}
