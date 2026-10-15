export const hgUrbanizationPart2Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani2-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 2 of 7 — Site, Situation and the Origins of Cities**

---

| Section |
|---------|
| 📖 Site and Situation |
| Worked Case: Why Chicago Grew |
| How Cities Began |
| What Drives Urbanization and Suburbanization |
| The World's Urban Transition in Data |

> 🔑 **Key Concept:** A city's **site** (its physical setting) explains why people first settled there; its **situation** (its connections to other places) explains why it kept growing. Over time, changes in **transportation and communication technology, economic development, population growth, migration and government policy** drive both urbanization and suburbanization (CED Topic 6.1).
`
    },
    {
      id: 'hgurbani2-site',
      type: 'text' as const,
      content: `
## 📖 Site and Situation

| Term | Meaning | Questions to ask |
|---|---|---|
| **Site** | The physical characteristics of the place itself | Is there fresh water, a harbor, flat land, a defensible hill or island, a river crossing? |
| **Situation** | The place's location relative to other places | What routes, markets, resources and neighbors is it connected to? |

Site usually explains a city's **origin**; situation usually explains its **function and growth**. A good site with a poor situation stays small. A poor site with an excellent situation can become a giant, because people will pay to fix the site.

| City | Site | Situation |
|---|---|---|
| **Paris** | The Île de la Cité, an island in the Seine that was easy to defend and to bridge | Center of a fertile basin where river routes meet |
| **Istanbul** | Hills and a sheltered harbor (the Golden Horn) on a peninsula | On the Bosporus, between Europe and Asia and between the Black Sea and the Mediterranean |
| **Singapore** | A small, low island with a deep natural harbor | Beside the Strait of Malacca, one of the world's busiest shipping lanes |

## Worked Case: Why Chicago Grew

1. **Site:** a low, marshy plain at the mouth of the Chicago River on Lake Michigan. The site was poor: the city later raised many street levels in the 1850s and 1860s to drain it.
2. **Situation:** a short portage linked the Great Lakes to the Mississippi River basin. The **Illinois and Michigan Canal (1848)** turned that link into a water route, and Chicago soon became the hub where railroads from the East met lines fanning across the farm belt.
3. **Result:** grain, lumber and livestock from the interior flowed through Chicago to Eastern markets. The city passed **1 million people by the 1890 census**.

The lesson: the situation, not the swampy site, made Chicago one of the largest cities in North America.

> 🔑 **AP Connection:** When a question asks why a city **grew**, look for situation (routes, markets, resources). When it asks why a settlement **began** exactly where it did, look for site.
`
    },
    {
      id: 'hgurbani2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature of Singapore describes its situation rather than its site?',
            options: [
              'Its deep natural harbor along the southern coast',
              'Its position beside a major shipping lane',
              'Its low, flat terrain that is easy to build on',
              'Its small area surrounded on all sides by water'
            ],
            correctAnswer: 1,
            explanation: 'Situation is location relative to other places, and the Strait of Malacca connects Singapore to trade between the Indian Ocean and East Asia. The harbor, terrain and island shape are physical traits of the place itself, which is its site.'
          },
          {
            question: 'Chicago grew into a giant city despite a marshy, flood-prone location. Which explanation best accounts for this?',
            options: [
              'Its water and rail links joined the interior to Eastern markets',
              'Its high ground made the settlement easy to defend from attack',
              'Its mild climate attracted farmers from the colder Great Plains',
              'Its rich mineral deposits lay directly beneath the city center'
            ],
            correctAnswer: 0,
            explanation: 'Chicago\'s situation, linking the Great Lakes, the Mississippi basin and later the rail network, made it a transfer point for interior trade. Its site was low and marshy rather than high or defensible.'
          }
        ]
      }
    },
    {
      id: 'hgurbani2-origins',
      type: 'text' as const,
      content: `
## How Cities Began

The earliest cities grew in a handful of **urban hearths**, most of them in fertile river valleys that were also early agricultural hearths:

| Hearth | Example cities | Approximate time |
|---|---|---|
| Mesopotamia (Tigris and Euphrates) | Uruk, Ur | by about 3500 to 3000 BCE |
| Nile Valley | Memphis | about 3000 BCE |
| Indus Valley | Harappa, Mohenjo-daro | about 2500 BCE |
| Yellow River (Huang He) | Shang capitals such as Anyang | about 1200s BCE |
| Mesoamerica | Teotihuacan | at its height about 100 to 550 CE |
| Andes | Caral | about 2600 BCE |

### Preconditions for the First Cities
- **Agricultural surplus:** farmers produced more food than they ate, so some people could do other work.
- **Social stratification:** rulers, priests and merchants organized labor, collected taxes and stored grain.
- **Specialized labor:** artisans, soldiers and scribes lived together near temples, palaces and markets.

## What Drives Urbanization and Suburbanization

The CED names five drivers. The table follows them through U.S. history, where the evidence is clearest.

| Driver | How it changed cities | U.S. example |
|---|---|---|
| **Transportation technology** | Each new mode stretched the distance people could live from work | Walking city before about 1890; electric streetcars from 1888 built **streetcar suburbs**; cars after 1920 spread suburbs between rail lines |
| **Communication technology** | Let offices and workers spread out while staying connected | Telephones, then the internet and remote work |
| **Economic development** | Factory jobs pulled workers into cities; later, service jobs moved to suburbs | Industrial Revolution cities; suburban office parks |
| **Population growth and migration** | More people, and moves from farms to cities | The Great Migration of African Americans to Northern cities, about 1910 to 1970 |
| **Government policy** | Public spending shaped where growth could happen | The **Federal-Aid Highway Act of 1956** funded the Interstate system; federally insured mortgages and the GI Bill helped families buy suburban homes |

Policy and technology worked together: highways made long commutes possible, and mortgage programs made new suburban houses affordable. The costs of that pattern, such as sprawl and segregation, are studied with urban challenges later in Unit 6.
`
    },
    {
      id: 'hgurbani2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Driver** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'New electric trolley lines let clerks live several miles from downtown offices. This driver is ___',
            options: ['Transportation technology', 'Communication technology', 'Population growth', 'Government policy']
          },
          {
            label: 'A national program pays for limited-access highways that reach far into farmland. This driver is ___',
            options: ['Government policy', 'Transportation technology', 'Economic development', 'Migration']
          },
          {
            label: 'Home internet lets a software firm hire staff who live two hours from its office. This driver is ___',
            options: ['Communication technology', 'Transportation technology', 'Economic development', 'Government policy']
          }
        ],
        correctAnswers: ['Transportation technology', 'Government policy', 'Communication technology'],
        hint1: 'A new way of moving people.',
        hint2: 'Who decided to build and fund the roads?',
        hint3: 'Information moves, not people.',
        explanation: 'Streetcars are a transportation technology that created streetcar suburbs. A federally funded highway program is a government policy, even though highways are also a technology. Remote work rests on communication technology.'
      }
    },
    {
      id: 'hgurbani2-data',
      type: 'text' as const,
      content: `
## The World's Urban Transition in Data

According to the UN's **World Urbanization Prospects: The 2018 Revision**:

| Year | Share of world population living in urban areas |
|---|---|
| 1950 | about 30% |
| 2018 | about 55% |
| 2050 (projected) | about 68% |

### Reading the Data
- The world became **majority urban** around 2007.
- In 2018 the most urbanized regions were North America (about **82%**) and Latin America and the Caribbean (about **81%**); the least urbanized were Asia (about **50%**) and Africa (about **43%**).
- Almost all future urban growth is projected for Asia and Africa. India, China and Nigeria together were projected to add about **35%** of the world's urban growth between 2018 and 2050.

### The Urbanization Curve
Plotted over time, a country's percent urban often traces an **S-shaped curve**: slow at first, then rapid during industrialization and rural-to-urban migration, then leveling off near 80 percent. England and Wales were already more than half urban by the **1851 census**; much of sub-Saharan Africa is in the steep middle of the curve today.

**Limitation:** the curve describes a past pattern, not a law. Countries define "urban" differently, and some cities grow fast without much industry.

### Scale Matters
A national figure can hide large regional gaps. In India's **2011 census**, about **48%** of Tamil Nadu's population was urban, but only about **11%** of Bihar's. A map of India by state tells a different story from India's single national number.

> 🔑 **AP Connection:** Data questions often ask you to **describe a trend** and then **explain a cause**. Name the trend with numbers ("rose from about 30% to 55%"), then link it to a driver ("as rural-to-urban migration followed industrial jobs").
`
    },
    {
      id: 'hgurbani2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which condition was most necessary for the first cities to form in river valleys such as Mesopotamia?',
            options: [
              'A surplus of food grown on farms',
              'An export trade in factory goods',
              'A railroad network linking towns',
              'A large group of retired workers'
            ],
            correctAnswer: 0,
            explanation: 'A food surplus freed some people from farming so they could work as priests, rulers, soldiers and artisans in cities. Factories and railroads came thousands of years later.'
          },
          {
            question: 'Based on the UN data, which statement best describes the world\'s urban population share from 1950 to 2050?',
            options: [
              'It rises steadily, from about 30% to a projected 68%',
              'It peaks around 2018 at 55% and then declines slowly',
              'It stays near 50% because rural births offset migration',
              'It doubles from 1950 to 2018 and doubles again by 2050'
            ],
            correctAnswer: 0,
            explanation: 'The share climbs from about 30% in 1950 to 55% in 2018 and a projected 68% in 2050. A second doubling from 55% is impossible, and the data show no peak or plateau.'
          },
          {
            question: 'India\'s national urbanization rate hides very different rates in Tamil Nadu and Bihar. This shows that:',
            options: [
              'the scale of analysis changes the pattern',
              'urban growth in India stopped after 2011',
              'states in India define cities identically',
              'Bihar contains most of India\'s megacities'
            ],
            correctAnswer: 0,
            explanation: 'A single national number averages very different state-level patterns, so changing the scale of analysis reveals regional variation. The data say nothing about growth stopping or about where megacities are.'
          }
        ]
      }
    }
  ]
}
