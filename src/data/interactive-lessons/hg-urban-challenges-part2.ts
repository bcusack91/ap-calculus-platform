export const hgUrbanChallengesPart2Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc2-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 2 of 7 — Density, Land Use and Sprawl, and the Policies That Answer It**

---

| Section |
|---------|
| 📖 Measuring Residential Density |
| Sprawl: Causes and Costs |
| Zoning: The Rules Behind the Pattern |
| Smart Growth, New Urbanism and Growth Limits |
| Praise and Criticism |

> 🔑 **Key Concept:** How densely people live and how land uses are mixed or separated are **choices shaped by markets, technology and rules**. This part works mostly at the **metropolitan and neighborhood scales**, where zoning codes and growth policies are written (CED Topics 6.6 and 6.8). The models of where land uses sit inside a city (bid-rent, Burgess, Hoyt and the rest) are covered in the Urbanization topic.
`
    },
    {
      id: 'hgurbanc2-density',
      type: 'text' as const,
      content: `
## 📖 Measuring Residential Density

**Residential density** is the number of people or housing units per unit of land. Planners usually count **dwelling units per acre** (1 square mile = 640 acres).

| Density level | Typical housing type | Rough density |
|---|---|---|
| **Low** | Detached single-family houses on large lots | Fewer than about 5 units per acre |
| **Medium** | Townhouses, duplexes, small apartment buildings, smaller-lot houses | About 10 to 30 units per acre |
| **High** | Mid-rise and high-rise apartment buildings | Often more than 50 units per acre |

The cut-offs vary by city and by source, so treat these as rough guides.

**Worked example: the land cost of a 1,200-home subdivision**
1. At **3 units per acre** (large-lot houses): 1,200 ÷ 3 = **400 acres**.
2. At **12 units per acre** (townhouses and small apartments): 1,200 ÷ 12 = **100 acres**.
3. **Conclusion:** the low-density version uses **four times** as much land for the same number of households, and every road, water main and sewer line must stretch across that larger area.

**Why density differs between cities:** older cities built before cars (Boston, Philadelphia, most European cities) packed housing near streetcar and rail lines; cities that grew after 1945 (Phoenix, Houston, Atlanta) spread out along highways. Land prices, building codes, culture and household preferences all matter as well.
`
    },
    {
      id: 'hgurbanc2-sprawl',
      type: 'text' as const,
      content: `
## Sprawl: Causes and Costs

**Urban sprawl** is low-density, car-dependent development that spreads outward faster than population grows, usually with land uses separated from one another.

### Why Sprawl Happens
- **Transportation:** highways and cheap gasoline made distant land reachable (Part 3 covers infrastructure).
- **Land markets:** farmland at the edge is cheaper than land near the center, so builders and buyers move outward.
- **Policy:** U.S. federal mortgage insurance after the 1930s favored new single-family houses, and many zoning codes require large lots.
- **Preferences:** many households want private yards, newer schools and more space.
- **Leapfrog development:** builders skip over expensive or protected land and build farther out, leaving gaps that later fill in.

### A Famous Comparison
Atlanta and Barcelona had **similar metropolitan populations** in the 1990s, yet Atlanta's built-up area was **more than 20 times larger** (Alain Bertaud and Harry Richardson's comparison of the two cities). Barcelona's apartments sit close together around a dense street grid, so most trips can be walked or made by metro; Atlanta's houses spread across a vast area served almost entirely by cars.

### What Sprawl Costs
| Cost | How it arises |
|---|---|
| **Farmland and habitat loss** | Development consumes fields, forests and wetlands at the urban edge |
| **Infrastructure cost per household** | Longer roads, pipes and bus routes serve fewer homes per mile |
| **Traffic and emissions** | Separated uses force car trips for work, school and shopping |
| **Social isolation** | People who cannot drive (children, many older adults, low-income households) have fewer options |
| **Inner-city decline** | Jobs and tax base move outward, leaving older neighborhoods behind |

**Nuance:** sprawl also brings benefits that buyers value, such as lower prices per square foot and more space, so the debate is about trade-offs, not a single right answer.
`
    },
    {
      id: 'hgurbanc2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A developer plans 900 homes. How many acres are needed at 9 units per acre, compared with 3 units per acre?',
            options: [
              '100 acres versus 300 acres',
              '300 acres versus 900 acres',
              '100 acres versus 2,700 acres',
              '81 acres versus 27 acres'
            ],
            correctAnswer: 0,
            explanation: 'Land needed equals homes divided by density: 900 ÷ 9 = 100 acres and 900 ÷ 3 = 300 acres. The other pairs come from multiplying instead of dividing, or from mixing up the two densities.'
          },
          {
            question: 'A builder buys cheap farmland 15 miles past the edge of a metro area, skipping over closer land that costs more. This is an example of:',
            options: [
              'Infill development',
              'Leapfrog development',
              'Gentrification',
              'Transit-oriented growth'
            ],
            correctAnswer: 1,
            explanation: 'Jumping past nearer, costlier land to build farther out is leapfrog development, a common cause of sprawl. Infill builds on vacant lots inside the existing urban area, the opposite pattern.'
          },
          {
            question: 'Which outcome is the most direct cost of low-density development for a city government?',
            options: [
              'Longer pipes and roads must serve fewer taxpayers per mile',
              'Apartment rents in the central business district fall sharply',
              'Rural migrants crowd into informal settlements on the edge',
              'Downtown office towers outbid housing for the central land'
            ],
            correctAnswer: 0,
            explanation: 'Spreading homes out means each mile of road, water main and sewer serves fewer households, so the cost of building and maintaining it per taxpayer rises. Offices outbidding housing downtown is bid-rent theory, not a cost of sprawl.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc2-zoning',
      type: 'text' as const,
      content: `
## Zoning: The Rules Behind the Pattern

**Zoning** is a local law that divides a city into districts and sets what may be built in each: the use (homes, shops, factories), the height, the lot size and the number of units.

| Type | What it does | Effect on the city |
|---|---|---|
| **Single-use (Euclidean) zoning** | Separates homes, shops and industry into different districts | Protects homes from factories but forces longer trips between uses |
| **Mixed-use zoning** | Allows apartments above shops and offices near homes | Supports walking and transit; common in older European and U.S. city centers |
| **Exclusionary zoning** | Requires large minimum lots or bans apartments | Raises the price of entry, so it can exclude lower-income households and, in effect, many minority households |
| **Inclusionary zoning** | Requires or rewards a share of affordable units in new buildings | Adds affordable housing, though usually in small numbers (Part 4) |

### Key Dates and Cases
- **New York City (1916)** adopted the first comprehensive zoning ordinance in the United States, partly to keep tall buildings from blocking light.
- **Village of Euclid v. Ambler Realty (1926):** the U.S. Supreme Court upheld zoning as constitutional, which is why separated-use zoning is called **Euclidean**.
- **Houston, Texas** has never adopted citywide use zoning; private deed restrictions control many neighborhoods instead. It still sprawls, which shows that cheap land and highways, not zoning alone, drive spread.
- **Minneapolis (2018)** approved a plan ending single-family-only zoning, allowing up to three homes on lots once reserved for one house. Results so far are modest, because building still depends on land prices and construction costs.

> 🔑 **AP Connection:** Zoning is a **local-scale** policy with **metropolitan-scale** effects. When a question asks how a government shapes land use, zoning is often the strongest answer, but name its limit: it controls what *may* be built, not what the market will actually build.
`
    },
    {
      id: 'hgurbanc2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

**1)** A neighborhood has 1,920 housing units on 1 square mile (640 acres). What is its density in units per acre?

**2)** A suburb has 2,400 homes at 4 units per acre. How many acres does it cover?

**3)** If the same 2,400 homes were rebuilt at 16 units per acre, how many acres would be freed for parks or farmland?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '600', '450'],
        hint1: 'Divide units by acres.',
        hint2: 'Acres = homes ÷ density.',
        hint3: 'Find the new area (2,400 ÷ 16), then subtract it from 600.',
        explanation: '1) 1,920 ÷ 640 = 3 units per acre. 2) 2,400 ÷ 4 = 600 acres. 3) 2,400 ÷ 16 = 150 acres, and 600 − 150 = 450 acres freed.'
      }
    },
    {
      id: 'hgurbanc2-policies',
      type: 'text' as const,
      content: `
## Smart Growth, New Urbanism and Growth Limits

Part 1 introduced these strategies. Here is how each one works, where it has been tried and what it cannot do.

| Policy | How it works | Real example | Main limit |
|---|---|---|---|
| **Smart growth** | A planning philosophy: compact, mixed-use, walkable growth inside existing areas, with transit and protected open space | Maryland's 1997 Smart Growth law steered state money toward existing communities | Voluntary or incentive-based programs often fail to stop growth at the edge |
| **New Urbanism** | A design movement: narrow grid streets, front porches, garages on alleys, mixed housing types, shops within a five-minute walk | Seaside, Florida (begun 1980s); the Congress for the New Urbanism formed in 1993 | Many projects are expensive and are built on greenfield sites at the edge |
| **Urban growth boundary (UGB)** | A legal line: urban development inside, farms and forest outside | Oregon's 1973 land-use law required UGBs; Portland's regional boundary was adopted in 1979 | Limiting land supply can raise housing prices inside the line |
| **Greenbelt** | A ring of protected open land around a city | London's green belt; Seoul's greenbelt, created in 1971 | Development can leapfrog over the belt into commuter towns beyond it |
| **Slow-growth city** | Caps the number of new building permits each year | Petaluma, California, limited new housing to about 500 units a year in the 1970s | Pushes growth and rising prices onto neighboring towns |
| **Infill and transit-oriented development** | Builds on vacant or underused lots, especially near transit stops | Former parking lots and malls rebuilt as housing | Neighbors often oppose added density (NIMBY: "not in my backyard") |

**Scale matters:** a UGB or greenbelt works only if it covers the **whole metropolitan region**. If one town limits growth and the next town does not, development simply moves next door.
`
    },
    {
      id: 'hgurbanc2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A new neighborhood has houses with front porches on narrow streets, garages on rear alleys and a small grocery within a five-minute walk. Its design best reflects:',
            options: [
              'Euclidean zoning',
              'New Urbanism',
              'A greenbelt',
              'Exclusionary zoning'
            ],
            correctAnswer: 1,
            explanation: 'Porches, alleys, narrow streets and shops within walking distance are signature New Urbanist design features. Euclidean zoning would separate the grocery from the homes.'
          },
          {
            question: 'Several suburbs set minimum lot sizes of two acres and ban apartment buildings. Which effect is most likely?',
            options: [
              'Homes become too costly for many lower-income families',
              'The suburbs gain population density faster than the city',
              'Mixed-use corridors appear along the main suburban roads',
              'Commuters shift from driving toward walking and transit'
            ],
            correctAnswer: 0,
            explanation: 'Large minimum lots and apartment bans are exclusionary zoning: they raise the cost of the cheapest available home, keeping out lower-income households. They lower density and discourage mixed use and transit.'
          },
          {
            question: 'A city adopts a strict growth boundary, but the towns just outside the region do not. What is the most likely result?',
            options: [
              'Development leapfrogs into nearby suburbs',
              'Sprawl stops across the whole metropolitan area',
              'Housing prices fall sharply inside the boundary',
              'Farmland outside the region gains full protection'
            ],
            correctAnswer: 0,
            explanation: 'Growth limits work at the scale they cover, so builders move to the nearest unrestricted land and commute traffic grows. Prices inside the boundary tend to rise, not fall, because buildable land is limited.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc2-praise',
      type: 'text' as const,
      content: `
## Praise and Criticism

The CED asks you to explain both the benefits and the drawbacks of urban sustainability design.

| Praise | Criticism |
|---|---|
| **Reduces sprawl** and protects farmland, forests and wetlands at the edge | **Raises housing costs** when land supply is limited and demand keeps rising |
| **Improves walkability and transit**, cutting car trips and emissions | **Can feed gentrification**, as walkable, well-served areas attract richer buyers |
| **Diversifies housing**, adding townhouses and apartments beside detached homes | **Can erase historic or local character** when older buildings give way to new density |
| **Uses existing infrastructure** more efficiently, saving public money | **Draws neighborhood opposition**, slowing or shrinking projects |

### Portland: Both Sides of the Ledger
- **For:** Portland's urban footprint grew much more slowly than its population, and much farmland outside the boundary stayed in farms.
- **Against:** housing prices rose quickly in the 2010s. Economists debate how much of that rise came from the boundary and how much from rapid in-migration, which affected cities without boundaries too.

> 🔑 **AP Connection:** FRQs often ask you to **explain one benefit and one limitation** of a policy. Name the policy, name the mechanism (for example, "limits land supply"), and finish with the consequence (for example, "so prices inside the boundary rise").
`
    },
    {
      id: 'hgurbanc2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Policy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A town allows only 300 new building permits per year, no matter how many builders apply. This is a ___',
            options: ['Slow-growth policy', 'Greenbelt', 'New Urbanist design', 'Inclusionary zoning rule']
          },
          {
            label: 'A legal line around a metro area separates land for urban development from protected farms and forest. This is an ___',
            options: ['Urban growth boundary', 'Exclusionary zoning rule', 'Slow-growth policy', 'Infill development']
          },
          {
            label: 'Apartments are built on an empty lot between existing buildings in an older neighborhood. This is ___',
            options: ['Infill development', 'Leapfrog development', 'Greenbelt protection', 'Euclidean zoning']
          }
        ],
        correctAnswers: ['Slow-growth policy', 'Urban growth boundary', 'Infill development'],
        hint1: 'The rule limits the pace of building, not its location.',
        hint2: 'The policy draws a line on the map.',
        hint3: 'The new building fills a gap inside the city.',
        explanation: 'Capping permits each year is a slow-growth policy. A legal line between urban and rural land is an urban growth boundary. Building on vacant land inside the existing city is infill development.'
      }
    }
  ]
}
