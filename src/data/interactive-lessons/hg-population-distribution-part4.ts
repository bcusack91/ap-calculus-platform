export const hgPopulationDistributionPart4Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula4-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 4 of 7 — Consequences of Distribution and Density**

---

| Section |
|---------|
| 📖 Two Extremes: Hong Kong and Nunavut |
| Political, Economic and Social Consequences |
| Carrying Capacity and Its Limits |
| Consequences at Different Scales |

> 🔑 **Key Concept:** Where people live, and how densely, shapes politics, economies and daily life. Density affects the cost of services such as medical care, the size of labor markets, political representation and the strain placed on land and resources (CED Topic 2.2).
`
    },
    {
      id: 'hgpopula4-extremes',
      type: 'text' as const,
      content: `
## 📖 Two Extremes: Hong Kong and Nunavut

| | Hong Kong (China) | Nunavut (Canada) |
|---|---|---|
| Population (rounded) | about 7.5 million | about 37,000 |
| Land area (rounded) | about 1,100 km² | about 2,090,000 km² |
| Arithmetic density | about 6,800 per km² | about 0.02 per km² |

### Hong Kong, Described in Text
A land-use map of Hong Kong shows dense clusters of high-rise towers on the north shore of Hong Kong Island, across the harbor in Kowloon and in planned "new towns" linked by rail. Large green areas in between are steep, wooded hills; about 40 percent of the land is protected as country parks and special areas. So the people are concentrated even more tightly than the density figure suggests.

**Consequences:** very high housing costs and small apartments; one of the world's most heavily used public transit systems; services such as clinics and schools within walking distance of most homes; efficient delivery of utilities per person.

### Nunavut, Described in Text
A map of Nunavut shows 25 small communities scattered along coasts and islands in the Arctic, with no road connecting any of them to the rest of Canada. People and supplies arrive by air, and heavy goods come by sea in the short summer season (the annual "sealift").

**Consequences:** each clinic, school and power plant serves very few people, so cost per person is high. Many communities have health centers staffed by nurses, and patients needing a specialist or a hospital are often flown south. Groceries flown in cost far more than in southern Canada.

> 🔑 **AP Connection:** The CED's example of a consequence is the **provision of services such as medical care**. Low density raises the cost and travel distance of services; high density makes services cheaper per person but can overload them.
`
    },
    {
      id: 'hgpopula4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Hong Kong: 7,500,000 people ÷ 1,100 km². To the nearest hundred, what is its arithmetic density? Enter digits only, no commas.

**2)** A rural county has 12,000 people on 6,000 km². What is its arithmetic density, in people per km²?

**3)** A clinic costs the same to run in both places. If one clinic serves the county in question 2, and a city clinic serves 60,000 people, how many times as many people does the city clinic serve?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6800', '2', '5'],
        hint1: '7,500,000 ÷ 1,100 is about 6,818.',
        hint2: 'Divide 12,000 by 6,000.',
        hint3: 'Divide 60,000 by 12,000.',
        explanation: '1) 7,500,000 ÷ 1,100 ≈ 6,818, which rounds to 6,800 per km². 2) 12,000 ÷ 6,000 = 2 per km². 3) 60,000 ÷ 12,000 = 5, so the city clinic spreads its cost over five times as many people, which is why low density raises the cost of services per person.'
      }
    },
    {
      id: 'hgpopula4-consequences',
      type: 'text' as const,
      content: `
## Political, Economic and Social Consequences

| Type | High density or concentration | Low density or dispersal |
|---|---|---|
| **Political** | More seats in legislatures elected by population; heavy demand on city governments for housing, transit and policing | Fewer seats; hard to govern and defend remote territory; governments may subsidize services or encourage settlement |
| **Economic** | Large labor pools and markets; firms benefit from clustering (agglomeration); congestion and high land prices | High per-person cost for roads, power lines and broadband; small local markets; long trips to jobs |
| **Social** | Services nearby; crowding, pollution and pressure on schools and hospitals | Long travel to doctors and schools; school consolidation; social isolation |
| **Environmental** | Concentrated pollution and waste; land converted to buildings | Less pressure per km², but long-distance travel and dispersed infrastructure |

### Case: Medical Care in a Sparse Country

Australia's interior and north are very sparsely settled. The **Royal Flying Doctor Service**, founded in 1928, uses aircraft to bring doctors and emergency evacuations to remote stations and towns. It exists because distance, not just money, is the main barrier to care where density is very low.

### Case: Representation Follows People

In the United States, House seats are apportioned by population after every census. After the 2020 Census, Texas gained two seats and states such as New York and Ohio lost one each, reflecting decades of movement toward the South and West. A change in **distribution** became a change in **political power**.
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
            question: 'Why does it usually cost more per person to provide hospital care in sparsely populated regions?',
            options: [
              'Each facility serves few people spread over long distances',
              'Rural residents need more medical care than city residents do',
              'Hospitals in sparse regions must hire more doctors per bed',
              'National laws require rural hospitals to charge higher fees'
            ],
            correctAnswer: 0,
            explanation: 'Fixed costs of buildings, equipment and staff are shared among few people, and long distances add transport costs. The extra cost comes from low density, not from greater need, staffing rules or legal fee requirements.'
          },
          {
            question: 'Which is a likely economic consequence of very high population density in a city such as Hong Kong?',
            options: [
              'High land and housing prices',
              'Low demand for public transit',
              'A shortage of workers for firms',
              'Few customers for local shops'
            ],
            correctAnswer: 0,
            explanation: 'Many people competing for limited land drives up land and housing prices. High density also means heavy transit use, a large labor pool and many nearby customers, which rules out the other choices.'
          },
          {
            question: 'After the 2020 Census, Texas gained House seats and New York lost one. This shows that changes in population distribution can affect',
            options: [
              'political representation',
              'national physiological density',
              'arable land area',
              'map projections'
            ],
            correctAnswer: 0,
            explanation: 'Seats in the House are divided by population, so a shift of people between states shifts political power. The change does not alter farmland, density measures based on farmland, or how maps are projected.'
          }
        ]
      }
    },
    {
      id: 'hgpopula4-carrying',
      type: 'text' as const,
      content: `
## Carrying Capacity and Its Limits

**Carrying capacity** is the largest population an environment can support without being degraded, given a level of technology and consumption.

### When Population Exceeds Local Carrying Capacity
- **Overgrazing and desertification:** where herds grow faster than grasslands recover, as in parts of the Sahel south of the Sahara, vegetation is stripped and soil erodes.
- **Groundwater depletion:** where irrigation pumps water faster than rain refills aquifers, as in parts of northern India and the North China Plain, water tables fall year after year.
- **Deforestation for fuel and farmland:** where population growth and poverty push people to clear forest on steep slopes, erosion and landslides follow.

### Limitations of the Concept

| Limitation | Explanation |
|---|---|
| **Not fixed** | Irrigation, fertilizer and new crop varieties raise the population land can support; this is the core of the intensification critique of Malthus (Population Growth topic) |
| **Depends on consumption** | A million people with high consumption may strain resources more than several million with low consumption |
| **Trade changes it** | Singapore and the Netherlands support dense populations partly with imported food |
| **Scale matters** | A region can exceed its local carrying capacity even while the world as a whole produces enough food |

> ⚠️ **Common error:** "high density" is not the same as "overpopulation." The Netherlands is far denser than Chad, but overpopulation describes people relative to the resources and technology available, not people per km² alone.
`
    },
    {
      id: 'hgpopula4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Consequence** 🔍

Choose the kind of consequence each statement describes.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A state loses a House seat after its population share falls: ___',
            options: ['political', 'economic', 'social', 'environmental']
          },
          {
            label: 'Rural families drive two hours to reach the nearest maternity ward: ___',
            options: ['political', 'economic', 'social', 'environmental']
          },
          {
            label: 'Firms locate in a dense city to hire from a large pool of skilled workers: ___',
            options: ['political', 'economic', 'social', 'environmental']
          },
          {
            label: 'Herds exceed what a dry grassland can regrow, and the soil erodes: ___',
            options: ['political', 'economic', 'social', 'environmental']
          }
        ],
        correctAnswers: ['political', 'social', 'economic', 'environmental'],
        hint1: 'Legislative seats are a matter of power and government.',
        hint2: 'Access to health care is a service in people\'s daily lives.',
        hint3: 'Labor markets and business location decisions.',
        explanation: 'Losing a seat is a political consequence. Long trips to a maternity ward are a social consequence about access to services. Firms seeking a labor pool are an economic consequence. Overgrazing that erodes soil is an environmental consequence, a sign that local carrying capacity has been exceeded.'
      }
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
            question: 'Why do geographers say carrying capacity is not a fixed number?',
            options: [
              'Technology, trade and consumption levels change how many people land can support',
              'Carrying capacity depends only on the total land area of the country being studied',
              'Carrying capacity can be measured only at the global scale, never at a local scale',
              'Population density is fixed by climate, so the capacity of land cannot be estimated'
            ],
            correctAnswer: 0,
            explanation: 'Better farming technology, food imports and lower or higher consumption all change how many people an area can sustain. Land area alone does not set capacity, it can be studied at any scale, and climate does not fix density.'
          },
          {
            question: 'The Netherlands has a much higher arithmetic density than Chad, yet it is not usually described as overpopulated. Why?',
            options: [
              'Its productive farms and food imports support its population',
              'Its population is spread evenly across all of its land area',
              'Its arable land covers nearly all of the country\'s land',
              'Its arithmetic density is lower than it appears on maps'
            ],
            correctAnswer: 0,
            explanation: 'Overpopulation depends on people relative to resources and technology; Dutch farms are highly productive and the country can afford imports. Its population is not evenly spread, arable land is under a third of its area, and its density is genuinely high.'
          }
        ]
      }
    }
  ]
}
