export const hgUrbanChallengesPart3Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc3-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 3 of 7 — Infrastructure and Transportation**

---

| Section |
|---------|
| 📖 What Counts as Infrastructure |
| Roads Shape Cities: The Interstate Era |
| Transit Shapes Cities: Rail, BRT and TOD |
| The Infrastructure Gap in Informal Settlements |
| Who Pays? Costs, Taxes and Shrinking Cities |

> 🔑 **Key Concept:** **Infrastructure** is the network of physical systems a city needs to function. Its **location and quality directly shape where people live, where firms invest and which neighborhoods prosper** (CED Topic 6.7). Infrastructure decisions are made at national, metropolitan and local scales, and their effects show up block by block.
`
    },
    {
      id: 'hgurbanc3-types',
      type: 'text' as const,
      content: `
## 📖 What Counts as Infrastructure

| System | Examples | How it shapes development |
|---|---|---|
| **Transportation** | Roads, highways, bridges, rail, buses, ports, airports | Land near interchanges, stations and airports gains value and attracts offices, warehouses and housing |
| **Water and sewer** | Treatment plants, pipes, storm drains | Land without water and sewer service is hard to develop at urban densities |
| **Energy** | Power plants, transmission lines, gas lines | Reliable power is required for factories, data centers and modern homes |
| **Communications** | Fiber-optic cable, cell towers, broadband | Fast connections let offices, remote workers and online firms locate in more places |

### Two Rules of Thumb
1. **Development follows infrastructure.** When a city extends a sewer line or opens a highway interchange, land along it is soon subdivided. Planners can steer growth by deciding where pipes and roads go.
2. **Quality varies within a city.** Older neighborhoods may have aging pipes and potholed roads while new suburbs get new systems. Uneven infrastructure helps produce uneven property values, health and job access.

> 🔑 **AP Connection:** When a stimulus shows growth clustering along one corridor, the explanation is usually **accessibility created by infrastructure**: a highway, rail line or utility extension.
`
    },
    {
      id: 'hgurbanc3-roads',
      type: 'text' as const,
      content: `
## Roads Shape Cities: The Interstate Era

The **Federal-Aid Highway Act of 1956** funded the U.S. Interstate Highway System, planned at about **41,000 miles**. The federal government paid most of the construction cost, so states and cities built quickly.

### Effects at Three Scales
| Scale | Effect |
|---|---|
| **National** | Faster freight and travel tied regional economies together |
| **Metropolitan** | Commuting from distant suburbs became practical, speeding suburbanization and sprawl; offices and malls followed to interchanges (edge cities are covered in the Urbanization topic) |
| **Neighborhood** | Many routes were cut through dense, often Black or immigrant neighborhoods, where land was cheaper and residents had less political power; St. Paul's Rondo neighborhood, for example, was split by Interstate 94 in the 1960s and hundreds of families lost their homes |

### Induced Demand
Adding road lanes to cure congestion often fails over time. Faster roads attract **new trips**: people drive more, move farther out or switch from transit. Economists Gilles Duranton and Matthew Turner (2011) found that across U.S. metro areas, vehicle-miles traveled rose roughly in proportion to new interstate lane-miles, so congestion returned.

**Limit of the idea:** induced demand does not mean roads are useless. Added trips have value to the people taking them; the point is that widening alone rarely ends rush-hour congestion.
`
    },
    {
      id: 'hgurbanc3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A county extends water and sewer lines five miles into farmland. Within a decade, new subdivisions line the route. Which idea best explains this pattern?',
            options: [
              'Development follows new infrastructure',
              'The range of high-order goods has shrunk',
              'Greenbelts protect land beyond the city',
              'Filtering moves housing to new owners'
            ],
            correctAnswer: 0,
            explanation: 'Land with water and sewer service can be built at urban densities, so extending the lines made the farmland developable. Greenbelts would restrict building there, and filtering describes older housing passing to lower-income households.'
          },
          {
            question: 'A state widens a congested highway from six lanes to ten. Five years later, rush-hour traffic is about as slow as before. Which concept explains this?',
            options: [
              'Induced demand',
              'Rank-size rule',
              'Distance decay',
              'Filtering'
            ],
            correctAnswer: 0,
            explanation: 'Faster travel on the wider road attracted new trips and longer commutes until congestion returned, which is induced demand. Distance decay describes interaction falling with distance, not traffic refilling new lanes.'
          },
          {
            question: 'Why were many U.S. interstate routes in the 1950s and 1960s placed through low-income urban neighborhoods?',
            options: [
              'Land was cheaper there and residents had less power',
              'Federal law required highways to avoid suburbs and farmland',
              'Those neighborhoods had asked for faster commutes downtown',
              'Engineers needed the flat ground found only in older districts'
            ],
            correctAnswer: 0,
            explanation: 'Planners chose routes where land acquisition was cheapest and opposition was weakest, which often meant Black and immigrant neighborhoods. No federal rule required avoiding suburbs, and the residents displaced rarely requested the projects.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc3-transit',
      type: 'text' as const,
      content: `
## Transit Shapes Cities: Rail, BRT and TOD

### Bus Rapid Transit (BRT)
**BRT** runs buses in dedicated lanes, with stations where riders pay before boarding, so buses move almost like a subway at a fraction of the cost.
- **Curitiba, Brazil (1974):** the city zoned for dense buildings along a few **structural axes** served by express buses, tying land use to transit from the start.
- **Bogotá, Colombia (TransMilenio, 2000):** a large BRT network that many cities, from Mexico City to Lagos, later studied.

### Transit-Oriented Development (TOD)
**TOD** concentrates housing, offices and shops within about a ten-minute walk of a station.
- **Arlington, Virginia:** planners decided in the 1960s and 1970s to steer dense development into a narrow corridor along the Washington Metro's Rosslyn-Ballston line, opened in 1979, and to keep surrounding neighborhoods mostly single-family. The corridor became a dense band of offices and apartments where many residents ride transit.

### Comparing Transport Investments
| Option | Strength | Limit |
|---|---|---|
| **Highway widening** | Serves dispersed trips and freight | Induced demand; encourages sprawl |
| **Heavy rail (subway)** | Very high capacity; strong pull on development | Very expensive and slow to build |
| **BRT** | Cheaper and faster to build than rail | Needs political will to take lanes from cars |
| **Bike lanes and sidewalks** | Low cost; health benefits | Useful mainly where trips are short |

**Scale reminder:** a single transit line changes land values within a few blocks of each station, a local effect, while a whole network changes the shape of the metropolitan area.
`
    },
    {
      id: 'hgurbanc3-gap',
      type: 'text' as const,
      content: `
## The Infrastructure Gap in Informal Settlements

In fast-growing cities of the developing world, migrants often arrive faster than governments can lay pipes, wires and roads. Informal settlements (Part 4) are usually built first and serviced later, if ever.

| Missing service | Common workaround | Consequence |
|---|---|---|
| **Piped water** | Buying from vendors or kiosks | Poor households often pay more per liter than wealthy households with piped connections |
| **Sewers** | Pit latrines, shared toilets, open drains | Waterborne disease, especially after floods |
| **Electricity** | Informal or illegal connections | Fire risk and unreliable supply |
| **Roads** | Narrow footpaths | Ambulances, fire trucks and garbage trucks cannot enter |

### Leapfrogging with Communications
Some infrastructure can skip a stage. **M-Pesa**, a mobile-phone payment service launched in **Kenya in 2007**, let people without bank branches nearby send and save money by text message. Cell towers reached informal settlements far sooner than bank branches or landline cables did.

> 🔑 **AP Connection:** Infrastructure gaps are an **economic** issue (lost work time, higher costs), a **social** issue (disease, unequal access) and an **environmental** issue (untreated sewage). Strong answers name which dimension they are explaining.
`
    },
    {
      id: 'hgurbanc3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Infrastructure Example** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Express buses in dedicated lanes, with fares paid at the station before boarding, are ___',
            options: ['Bus rapid transit', 'Heavy rail transit', 'Induced demand', 'A streetcar suburb']
          },
          {
            label: 'Dense apartments and offices are built within a short walk of a new rail station. This is ___',
            options: ['Transit-oriented development', 'Leapfrog development', 'Exclusionary zoning', 'Suburban sprawl']
          },
          {
            label: 'Residents of an unserviced settlement send and save money through text messages on cell phones. This shows ___',
            options: ['Leapfrogging with communications', 'Induced demand for roads', 'Filtering of the housing stock', 'Deindustrialization of the city']
          }
        ],
        correctAnswers: ['Bus rapid transit', 'Transit-oriented development', 'Leapfrogging with communications'],
        hint1: 'Curitiba and Bogotá are famous for it.',
        hint2: 'Development is organized around a station.',
        hint3: 'Cell towers arrived before bank branches.',
        explanation: 'Dedicated lanes and prepaid boarding define BRT. Dense, walkable development around a station is TOD. Mobile money skipped the bank-branch stage, an example of leapfrogging with communications infrastructure.'
      }
    },
    {
      id: 'hgurbanc3-pay',
      type: 'text' as const,
      content: `
## Who Pays? Costs, Taxes and Shrinking Cities

| Source | How it works | Who bears the cost |
|---|---|---|
| **Property taxes** | Annual tax on land and buildings | Owners, and renters indirectly |
| **User fees** | Water bills, tolls, transit fares | People who use the service |
| **Municipal bonds** | Borrowing repaid over decades | Future taxpayers |
| **Impact fees** | Charges on developers for new roads and pipes | New buyers, through higher prices |
| **State and federal grants** | Money from higher levels of government | Taxpayers nationwide |

### Worked Example: Cost per Household (hypothetical)
A new water main costs **\\$2 million per mile**.
1. **Compact neighborhood:** 400 homes per mile of main: \\$2,000,000 ÷ 400 = **\\$5,000 per home**.
2. **Low-density subdivision:** 100 homes per mile: \\$2,000,000 ÷ 100 = **\\$20,000 per home**.
3. **Conclusion:** the same pipe costs each low-density household four times as much. When that cost is spread across the whole city's taxpayers, residents of compact areas subsidize sprawl.

### When the Tax Base Shrinks
Deindustrializing cities face a trap: population and jobs leave, but the pipes and roads built for a larger city remain and must be maintained.
- **Detroit** filed for bankruptcy in **2013** with about **\\$18 billion** in debts, then the largest municipal bankruptcy in U.S. history.
- **Flint, Michigan:** after the city switched its water source in **2014** without proper corrosion control, lead leached from aging pipes into homes, a public-health crisis rooted in old infrastructure and strained budgets.
- Nationally, the American Society of Civil Engineers graded U.S. infrastructure **C−** in its **2021** report card, citing a large maintenance backlog.
`
    },
    {
      id: 'hgurbanc3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

**1)** A sewer line costs \\$3 million per mile. A dense neighborhood has 600 homes per mile of line. What is the cost per home in dollars?

**2)** A low-density area has 150 homes per mile of the same line. What is the cost per home in dollars?

**3)** How many times as much does each low-density home cost to serve?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5000', '20000', '4'],
        hint1: 'Divide the cost per mile by the homes per mile.',
        hint2: '\\$3,000,000 ÷ 150.',
        hint3: 'Divide the second answer by the first.',
        explanation: '1) \\$3,000,000 ÷ 600 = \\$5,000. 2) \\$3,000,000 ÷ 150 = \\$20,000. 3) \\$20,000 ÷ \\$5,000 = 4 times as much.'
      }
    },
    {
      id: 'hgurbanc3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Curitiba zoned for tall buildings along a few express-bus corridors starting in the 1970s. What was the main purpose of linking zoning to the bus routes?',
            options: [
              'To put dense housing and jobs where transit could serve them',
              'To push new growth into farmland far from the bus network',
              'To keep the downtown free of offices and large stores',
              'To lower land values next to every express bus station'
            ],
            correctAnswer: 0,
            explanation: 'Concentrating density on the corridors gave the buses enough riders and gave residents fast service, a land-use and transit strategy that later became known as transit-oriented development. Pushing growth away from the network would defeat that purpose.'
          },
          {
            question: 'A shrinking Rust Belt city has lost half its residents since 1950 but still maintains the same miles of water pipe. Which problem follows most directly?',
            options: [
              'Each taxpayer pays more for upkeep',
              'Rush-hour traffic grows on city streets',
              'Informal settlements spread at the edge',
              'Downtown density rises above its peak'
            ],
            correctAnswer: 0,
            explanation: 'The same pipe network must now be paid for by half as many people, so each pays more and maintenance is often deferred, as in Flint. Fewer residents would ease traffic, not worsen it.'
          }
        ]
      }
    }
  ]
}
