export const hgUrbanizationPart5Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani5-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 5 of 7 — Cities in a Global System: Megacities, World Cities and New Suburbs**

---

| Section |
|---------|
| 📖 Megacities and Metacities |
| World Cities: Command Centers of the Global Economy |
| Size Is Not the Same as Global Power |
| New Forms at the Edge: Edge Cities, Boomburbs, Exurbs |

> 🔑 **Key Concept:** Cities can be ranked in two very different ways. **Size** (megacities and metacities) tells you how many people live there. **Connectivity** (world cities) tells you how much of the world's money, decisions and information flow through it. Meanwhile, growth at the edges of cities is creating **new urban forms** (CED Topics 6.2 and 6.3).
`
    },
    {
      id: 'hgurbani5-mega',
      type: 'text' as const,
      content: `
## 📖 Megacities and Metacities

| Term | Definition |
|---|---|
| **Megacity** | An urban area of **10 million** or more people |
| **Metacity** | An urban area of **20 million** or more people (a term used by UN-Habitat) |

### Where the Largest Cities Are Now
According to the UN's **World Urbanization Prospects 2018**:
- In **1950** only two urban areas, **New York and Tokyo**, had more than 10 million people.
- By **2018** there were **33** megacities, and the UN projected **43** by 2030, almost all of the new ones in Asia and Africa.
- The largest urban areas in 2018 were Tokyo (about 37 million), Delhi (about 29 million) and Shanghai (about 26 million), followed by São Paulo and Mexico City (each about 22 million) and Cairo (about 20 million).

**A note on definitions:** the UN's **2025 revision** applied one standard definition of a city to every country instead of each country's own definition, and under it **Jakarta** ranked ahead of Tokyo. Rankings of "the biggest city" depend on where the boundary is drawn, a point Part 6 returns to.

### Why the Largest Cities Shifted to Less Developed Countries
1. **Rural-to-urban migration** toward jobs and services, often concentrated in one primate city.
2. **Natural increase**, because migrants are young and urban birth rates remain above replacement in many countries.
3. **Slower growth in developed countries**, which urbanized earlier and are near the top of the urbanization curve.

**Scale note:** a megacity is a **metropolitan-scale** unit. Delhi's urban area spreads across the National Capital Territory and neighboring states, so "Delhi" means different things in different datasets.
`
    },
    {
      id: 'hgurbani5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which trend in the UN data best describes the world\'s megacities since 1950?',
            options: [
              'They grew in number, mostly in Asia and Africa',
              'They fell in number as people left for the suburbs',
              'They stayed few, all in Europe and North America',
              'They rose in number, mostly in Europe and Japan'
            ],
            correctAnswer: 0,
            explanation: 'Megacities rose from two in 1950 to 33 in 2018, and nearly all recent and projected growth is in Asia and Africa. Europe and North America urbanized earlier and now grow slowly.'
          },
          {
            question: 'Why did the UN\'s 2025 revision change which city ranked as the world\'s largest?',
            options: [
              'It used one city definition for all countries',
              'It counted only the residents of city centers',
              'It dropped all cities in East and South Asia',
              'It ranked cities by GDP instead of population'
            ],
            correctAnswer: 0,
            explanation: 'Applying the same boundary rules to every country changed where each urban area\'s edge was drawn, and so changed the totals. The revision still ranked cities by population, and Asian cities remained at the top.'
          }
        ]
      }
    },
    {
      id: 'hgurbani5-world',
      type: 'text' as const,
      content: `
## World Cities: Command Centers of the Global Economy

A **world city** (or **global city**) sits at the top of the global urban hierarchy and is tied to other world cities through flows of money, information, people and goods. Sociologist **Saskia Sassen** made the idea famous in *The Global City* (1991), using **New York, London and Tokyo** as her cases.

### What Makes a World City
| Function | Evidence on the landscape |
|---|---|
| **Corporate headquarters** of transnational corporations | Office towers, a large CBD |
| **Finance** | Major stock exchanges and global banks |
| **Producer services**: law, accounting, advertising, consulting | Clusters of firms serving companies worldwide |
| **Media and culture** | Global news, publishing, museums, fashion |
| **Transport and communication hubs** | Major international airports, fiber-optic links |
| **Political power** | Headquarters of international organizations (the UN in New York, the EU in Brussels) |

The **Globalization and World Cities (GaWC)** research network ranks cities by how many offices of major producer-service firms they host. In its rankings, only **London and New York** reach the top tier, Alpha++. Other highly connected cities include Hong Kong, Singapore, Shanghai, Dubai, Paris and Tokyo.

### Where World Cities Are
World cities are concentrated in **core countries** in North America, Europe and East Asia, but more are rising in **semi-periphery** countries, such as Shanghai, Mumbai, São Paulo and Dubai, as those economies join global networks.

## Size Is Not the Same as Global Power

| City | Size | Global connectivity |
|---|---|---|
| **Kinshasa** | A megacity of more than 10 million | Weak links to global finance and corporate networks |
| **Zurich** | Under 2 million in its metro area | A major banking and insurance center |
| **London** | About 9 million in Greater London | Top tier: a megacity-scale world city |

**Misconception:** "megacity" and "world city" are not synonyms. A city can be huge but weakly connected, or small but globally powerful.
`
    },
    {
      id: 'hgurbani5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the City** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A city of about 1.5 million hosts dozens of global bank headquarters and a major stock exchange. It is best described as a ___',
            options: ['World city', 'Megacity', 'Primate city', 'Boomburb']
          },
          {
            label: 'An urban area of 24 million people, most of them recent migrants from rural areas, is best described as a ___',
            options: ['Metacity', 'World city', 'Edge city', 'Exurb']
          },
          {
            label: 'A fast-growing suburb of 300,000 that is not the largest city in its metro area is best described as a ___',
            options: ['Boomburb', 'Exurb', 'Metacity', 'World city']
          }
        ],
        correctAnswers: ['World city', 'Metacity', 'Boomburb'],
        hint1: 'Small in people, large in global functions.',
        hint2: 'More than 20 million people.',
        hint3: 'A suburb that has grown past 100,000.',
        explanation: 'Global finance and headquarters define a world city regardless of size. An urban area above 20 million is a metacity. A rapidly growing suburb of more than 100,000 that is not its metro\'s core city is a boomburb.'
      }
    },
    {
      id: 'hgurbani5-edge',
      type: 'text' as const,
      content: `
## New Forms at the Edge: Edge Cities, Boomburbs, Exurbs

**Suburbanization**, sprawl and the **decentralization** of jobs have created urban forms that the older models did not include.

| Form | Definition | Example |
|---|---|---|
| **Edge city** | Journalist Joel Garreau's term (*Edge City*, 1991): a suburban node with at least 5 million square feet of office space, at least 600,000 square feet of retail, more jobs than bedrooms, and no city there 30 years earlier | Tysons, Virginia, outside Washington, D.C. |
| **Boomburb** | Robert Lang's term: a suburb of more than 100,000 people that is not the largest city in its metro area and has grown by double digits in each census since 1970 | Mesa, Arizona, about 500,000 people in the 2020 Census |
| **Exurb** | A low-density area beyond the suburbs that looks rural but whose residents commute to the metro area | Large-lot subdivisions in former farmland an hour or more from downtown |
| **Satellite city** | A smaller city near a large one, with its own downtown and economy but linked by commuting | Milton Keynes, England, a planned new town (designated 1967) about 50 miles from London |

### How Edge Growth Differs Around the World
- In the **United States**, growth at the edge has mostly been middle- and upper-income suburbs linked by highways.
- In many **Latin American, African and South Asian** cities, the edge holds both **gated communities** for the wealthy and **informal settlements** for recent migrants.
- In parts of **Europe**, strict planning and transit have kept edge growth more compact.

The costs of sprawl and the planning responses to it, such as smart growth and new urbanism, are covered with urban challenges later in Unit 6.

> 🔑 **AP Connection:** If a question describes office towers and a mall at a suburban highway interchange, the answer is **edge city**, and the model that predicts it is the **galactic city**.
`
    },
    {
      id: 'hgurbani5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Office towers, hotels and a regional mall have grown up since the 1970s at a highway interchange 15 miles from downtown, and more people work there than live there. This place is best described as:',
            options: [
              'An exurb',
              'A boomburb',
              'An edge city',
              'A satellite city'
            ],
            correctAnswer: 2,
            explanation: 'A suburban node built recently around offices and retail, with more jobs than residents, meets Garreau\'s definition of an edge city. A boomburb is defined by fast population growth, and an exurb is a low-density commuter area.'
          },
          {
            question: 'Which evidence most clearly shows that a city functions as a world city?',
            options: [
              'A large share of global firms in finance and law have offices there',
              'Its population has grown past 10 million in the last two decades',
              'Most of its new residents arrived recently from rural villages',
              'It holds the largest share of its country\'s total population'
            ],
            correctAnswer: 0,
            explanation: 'World-city status comes from global connections, such as concentrations of producer-service firms and finance. Size, migration and national primacy can describe cities that are only weakly tied to the global economy.'
          },
          {
            question: 'Kinshasa is a megacity, but it is not usually ranked as a major world city. What best explains this?',
            options: [
              'Its population is far too small',
              'It has few global firm links',
              'It is located outside of Asia',
              'It is not the national capital'
            ],
            correctAnswer: 1,
            explanation: 'World-city rankings measure ties to global finance and producer-service networks, and those ties are weak in Kinshasa. It is large, it is a capital, and world cities exist outside Asia, so the other reasons fail.'
          }
        ]
      }
    }
  ]
}
