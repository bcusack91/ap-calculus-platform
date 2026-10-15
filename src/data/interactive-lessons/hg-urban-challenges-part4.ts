export const hgUrbanChallengesPart4Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hgurbanc4-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 4 of 7 — Housing, Inequality and Neighborhood Change**

---

| Section |
|---------|
| 📖 Informal Settlements: Scale and Conditions |
| Clearance, Upgrading or Titles? |
| How Neighborhoods Decline: Filtering, Renewal and Abandonment |
| Gentrification: Process, Evidence and Debate |
| Affordable Housing and Lasting Legacies |

> 🔑 **Key Concept:** Where people can afford to live is shaped by **markets, laws and past policies**. This part works at the **neighborhood scale**, where displacement and decline are felt, while tying each process to its **metropolitan and national** causes (CED Topic 6.10).
`
    },
    {
      id: 'hgurbanc4-informal',
      type: 'text' as const,
      content: `
## 📖 Informal Settlements: Scale and Conditions

About **1.1 billion people** lived in slums or informal settlements in **2020**, close to one in four urban residents worldwide (UN-Habitat). The highest share is in **sub-Saharan Africa**, and the largest numbers are in **Asia**.

### How UN-Habitat Defines a Slum Household
A household counts as living in a slum if it lacks **one or more** of these five things:

| Deprivation | What is missing |
|---|---|
| **Water** | Access to an improved water source |
| **Sanitation** | Access to improved toilets |
| **Living space** | Enough room: no more than three people sharing a room |
| **Durable housing** | A structure that protects against weather, on safe land |
| **Secure tenure** | Legal protection against forced eviction |

### Why They Form
Rural-to-urban migrants arrive faster than formal housing is built, and formal homes cost more than most newcomers earn. People build on land nobody is guarding: steep hillsides, floodplains, railway edges and land beside dumps.

### Two Settlements, Two Stories
- **Dharavi, Mumbai:** often called one of Asia's largest informal settlements, with estimates from about **600,000 to 1 million** residents on roughly **2 square kilometers**. It is also a dense workplace, full of recycling, pottery, leather and garment workshops. In **2022** a redevelopment contract went to the Adani Group, and residents still debate who will qualify for new apartments.
- **Rocinha, Rio de Janeiro:** Rio's largest favela, with about **70,000** residents in Brazil's 2010 census and higher local estimates. Decades of self-building turned shacks into multistory brick homes with shops, but secure tenure and public services remain uneven.

**Misconception:** informal settlements are not only places of despair. Many are places of **work, enterprise and gradual improvement**, which is why most planners now try to upgrade them rather than clear them.
`
    },
    {
      id: 'hgurbanc4-responses',
      type: 'text' as const,
      content: `
## Clearance, Upgrading or Titles?

| Response | How it works | Example | Trade-off |
|---|---|---|---|
| **Clearance (forced eviction)** | Bulldoze the settlement, sometimes relocating residents far away | Zimbabwe's Operation Murambatsvina (**2005**) cost about 700,000 people their homes or livelihoods (UN estimate) | Destroys homes, jobs and social networks; residents often rebuild elsewhere |
| **In-situ upgrading** | Add water, sewers, paved paths, lighting and clinics where people already live | Rio's **Favela-Bairro** program (from **1994**) | Keeps communities intact, but costly and slow; can raise rents for tenants |
| **Sites and services** | Government lays out plots with water and roads; families build their own homes | Widely funded by the World Bank in the 1970s and 1980s | Cheaper than public housing, but plots are often far from jobs |
| **Land titling** | Give residents legal ownership | Promoted by economist Hernando de Soto (2000) so homes could serve as loan collateral | Titles alone rarely bring credit, and rising values can push renters out |

> 🔑 **AP Connection:** For any response, explain **who benefits and who loses**. Owners may gain from titles and upgrades while renters in the same settlement face higher rents.
`
    },
    {
      id: 'hgurbanc4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A family in a large city has piped water, a private toilet and a sturdy brick home, but six people share one room. Under the UN-Habitat definition, the household:',
            options: [
              'Counts as a slum household because it is overcrowded',
              'Is not a slum household because it has water and toilets',
              'Is a slum household only if the city is in sub-Saharan Africa',
              'Is not a slum household unless it also lacks durable walls'
            ],
            correctAnswer: 0,
            explanation: 'Lacking any one of the five conditions is enough, and more than three people per room fails the living-space test. The definition does not depend on region or on several deprivations at once.'
          },
          {
            question: 'A city adds water lines, sewers, paved lanes and a clinic inside an existing favela without moving residents. This approach is called:',
            options: [
              'Sites and services',
              'In-situ upgrading',
              'Forced clearance',
              'Urban renewal'
            ],
            correctAnswer: 1,
            explanation: 'Improving services where people already live is in-situ upgrading, as in Rio\'s Favela-Bairro. Sites and services prepares new plots elsewhere, and clearance or renewal removes the existing homes.'
          },
          {
            question: 'Which is the strongest criticism of granting land titles as the main response to informal settlements?',
            options: [
              'Rising values can push out tenants',
              'Titles always block access to bank loans',
              'Owners must leave their homes to get titles',
              'Titling requires clearing the settlement first'
            ],
            correctAnswer: 0,
            explanation: 'Titles can raise property values and rents, so renters, who do not receive titles, may be displaced. Titling is meant to help owners borrow and does not require moving or clearing anyone.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc4-decline',
      type: 'text' as const,
      content: `
## How Neighborhoods Decline: Filtering, Renewal and Abandonment

| Process | What happens | Example or evidence |
|---|---|---|
| **Filtering** | As homes age and wealthier households move to newer areas, older housing passes down to lower-income occupants, often subdivided into more units | Large Victorian houses near downtowns split into rooming houses or apartments |
| **Disinvestment** | Owners and lenders stop investing; maintenance is deferred; buildings deteriorate | Redlined neighborhoods (see below) |
| **Urban renewal** | Government clears "blighted" areas and rebuilds, often as highways, offices or public housing | The **Housing Act of 1949** funded clearance; St. Louis's **Pruitt-Igoe** towers, finished in the mid-1950s, were demolished beginning in **1972** |
| **Zones of abandonment** | Areas lose so much population and investment that buildings stand empty | **Detroit** fell from about **1.85 million** people in 1950 to about **640,000** in 2020 (U.S. Census), leaving many vacant lots |

**Disamenity zones**, the poorest areas of Latin American cities in the Griffin-Ford model, are covered in the Urbanization topic. They are the developing-world counterpart of zones of abandonment: places with little or no public service.

### Redlining's Land-Use Legacy
Redlining, the 1930s HOLC maps and related practices such as covenants and blockbusting are taught in the Ethnicity and Identity topic. What matters for urban challenges is the **lasting land-use effect**:
- **Investment:** about **three in four** neighborhoods graded "hazardous" in the 1930s were still low-to-moderate income in a 2018 study by the National Community Reinvestment Coalition.
- **Heat:** across **108** U.S. urban areas, formerly redlined neighborhoods averaged about **2.6°C (about 5°F)** hotter in summer than the highest-graded areas, because they have more pavement and fewer trees (Hoffman, Shandas and Pendleton, **2020**).
- **Infrastructure siting:** highways, rail yards and industry were more often placed in these areas, adding noise and pollution.
`
    },
    {
      id: 'hgurbanc4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In 1950 a neighborhood of large single-family houses housed managers and doctors. By 1990 the same houses were divided into apartments rented by lower-income families. This is best described as:',
            options: [
              'Gentrification',
              'Filtering',
              'Leapfrogging',
              'Infill'
            ],
            correctAnswer: 1,
            explanation: 'Older housing passing down to lower-income occupants as wealthier households move to newer areas is filtering. Gentrification is the reverse: higher-income newcomers moving into lower-income areas.'
          },
          {
            question: 'Why are many formerly redlined neighborhoods hotter in summer than other parts of the same city today?',
            options: [
              'Decades of disinvestment left them with more pavement and fewer trees',
              'They were usually built on hillsides that face the afternoon sun',
              'Redlining maps placed them closest to the shore of nearby lakes',
              'Their newer houses are built from heavier, heat-absorbing stone'
            ],
            correctAnswer: 0,
            explanation: 'Disinvestment, industrial land uses and highways left these areas with more heat-absorbing surfaces and less tree canopy, which intensifies the urban heat island. The pattern comes from land-use history, not from slope, shoreline or newer building materials.'
          }
        ]
      }
    },
    {
      id: 'hgurbanc4-gentrification',
      type: 'text' as const,
      content: `
## Gentrification: Process, Evidence and Debate

Sociologist **Ruth Glass** coined the term **gentrification** in **1964** to describe middle-class households moving into working-class London districts and displacing residents.

### Why It Happens
- **Rent gap (Neil Smith, 1979):** when the rent a property *currently* earns falls far below what it *could* earn after renovation, investors have a strong incentive to buy and upgrade.
- **Changing preferences:** some higher-income households want short commutes, older architecture and walkable streets.
- **Public investment:** a new transit line, park or rezoning can raise nearby land values (Part 5 covers "green gentrification").

### Reading the Evidence: Tract 14, 2010 vs. 2020 (hypothetical)
| Indicator | 2010 | 2020 | Change |
|---|---|---|---|
| Median household income | \\$32,000 | \\$58,000 | +81% |
| Median monthly rent | \\$800 | \\$1,400 | +75% |
| Adults with a bachelor's degree | 18% | 46% | +28 points |
| Residents who lived in the same home five years earlier | 70% | 45% | −25 points |

Rising income, rent and education **together** with falling residential stability are classic signs of gentrification. Rising income alone could mean existing residents got raises.

### The Debate
| Benefits often cited | Costs often cited |
|---|---|
| Renovated buildings and less vacancy | **Displacement** of renters, small businesses and elders |
| Higher property-tax revenue for the city | Loss of cultural identity and community networks |
| New shops, services and safer streets | Rising rents spread to nearby neighborhoods |

**Limit of the data:** census figures show *that* the population changed, not *why* people left. Interviews and eviction records are needed to separate displacement from voluntary moves.
`
    },
    {
      id: 'hgurbanc4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

The U.S. Department of Housing and Urban Development calls a household **cost-burdened** if it spends more than **30%** of its income on housing. Enter numbers only.

**1)** A household earns \\$48,000 a year and pays \\$1,500 a month in rent. What percent of its income goes to rent?

**2)** What is the highest monthly rent this household could pay without becoming cost-burdened, in dollars?

**3)** In Tract 14 above, by what percent did median rent rise from 2010 to 2020?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['37.5', '1200', '75'],
        hint1: 'Annual rent = \\$1,500 × 12. Divide by income and multiply by 100.',
        hint2: '30% of \\$48,000, divided by 12 months.',
        hint3: 'Change ÷ original value × 100.',
        explanation: '1) \\$18,000 ÷ \\$48,000 = 0.375, or 37.5%, so the household is cost-burdened. 2) 0.30 × \\$48,000 = \\$14,400 a year, or \\$1,200 a month. 3) (\\$1,400 − \\$800) ÷ \\$800 = 0.75, a 75% rise.'
      }
    },
    {
      id: 'hgurbanc4-affordable',
      type: 'text' as const,
      content: `
## Affordable Housing and Lasting Legacies

About **half** of U.S. renter households were cost-burdened in **2022** (Harvard Joint Center for Housing Studies). Cities respond with several tools, each with limits.

| Tool | How it works | Limit |
|---|---|---|
| **Inclusionary zoning** | New buildings must include, or are rewarded for including, a share of below-market units | Produces relatively few units; developers may build less |
| **Community land trust** | A nonprofit owns the land and sells or rents homes at permanently limited prices; Burlington, Vermont's trust is among the best known | Owners give up most of the gain in market value |
| **Rent stabilization** | Limits yearly rent increases on existing units | Protects current tenants but can discourage new construction and maintenance |
| **Housing vouchers** | Government pays part of a tenant's rent in private housing | Demand far exceeds funding; many landlords refuse vouchers |
| **Upzoning** | Allows more homes per lot (Part 2) | New supply takes years and may not be affordable at first |

> 🔑 **AP Connection:** The CED pairs each urban challenge with responses. A strong FRQ answer names the challenge (for example, displacement from gentrification), a specific response (inclusionary zoning) and one limit of that response.
`
    },
    {
      id: 'hgurbanc4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Process or Policy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A city requires that 15% of the apartments in every new building rent below market rates. This is ___',
            options: ['Inclusionary zoning', 'Exclusionary zoning', 'Rent stabilization', 'Urban renewal']
          },
          {
            label: 'Investors buy run-down buildings because their current rents are far below what renovated units would earn. This illustrates the ___',
            options: ['Rent gap', 'Filtering process', 'Threshold', 'Bid-rent curve']
          },
          {
            label: 'Whole blocks of a shrinking city stand vacant after decades of job and population loss. These blocks form a ___',
            options: ['Zone of abandonment', 'Disamenity sector', 'Greenbelt', 'Squatter settlement']
          }
        ],
        correctAnswers: ['Inclusionary zoning', 'Rent gap', 'Zone of abandonment'],
        hint1: 'The rule adds affordable units rather than excluding anyone.',
        hint2: 'Neil Smith\'s explanation of gentrification.',
        hint3: 'Think of Detroit\'s vacant lots.',
        explanation: 'Requiring a share of below-market units is inclusionary zoning. The gap between current and potential rent is Neil Smith\'s rent gap. Areas emptied by long decline are zones of abandonment.'
      }
    }
  ]
}
