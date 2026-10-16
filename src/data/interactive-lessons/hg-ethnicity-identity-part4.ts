export const hgEthnicityIdentityPart4Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgethnic4-intro',
      type: 'text' as const,
      content: `
# 🌍 Ethnicity, Race & Identity

**Part 4 of 7 — Measuring and Mapping Segregation**

---

| Section |
|---------|
| 📖 Census Data at Different Scales |
| Reading Tract Data: A Worked Example |
| How Segregation Was Built: Redlining, Covenants and Blockbusting |
| Limits of Census Data and of the Map |

> 🔑 **Key Concept:** **Residential segregation** is the uneven spread of groups across the neighborhoods of a city. Geographers measure it with census data at different scales, map it with choropleth and dot maps, and explain it with history: in the United States, **redlining, racial covenants and blockbusting** built patterns that still show on today's maps. (This links to urban challenges in CED Topic 6.10.)
`
    },
    {
      id: 'hgethnic4-scales',
      type: 'text' as const,
      content: `
## 📖 Census Data at Different Scales

The US Census Bureau publishes counts by race and ethnicity for nested units:

| Unit | Typical size | What it shows |
|---|---|---|
| Nation | About 331 million people (2020) | Overall composition; hides all regional patterns |
| State or county | Thousands to millions | Regional clusters, such as Hispanic majorities in many border counties of Texas |
| **Census tract** | About **4,000** people (range about 1,200 to 8,000) | Neighborhood patterns; the usual unit for segregation studies |
| Block group and block | A few hundred people or fewer | Street-level detail; more error in survey estimates |

### Two Ways to Map It
- **Choropleth map:** each tract is shaded by a rate, such as percent Black or percent Asian. Easy to read, but large, thinly settled tracts dominate the picture.
- **Dot density map:** one dot per person (or per 25 people), colored by group. Shows where people actually live, and the sharp edges between groups, but dots merge in crowded areas.

### The Same Group at Three Scales
A group that is **5 percent** of a metropolitan area's population might be **20 percent** of one county and **over 80 percent** of a handful of tracts. Segregation is invisible at the coarse scale and obvious at the fine scale, so **the scale you choose changes the answer**.
`
    },
    {
      id: 'hgethnic4-index',
      type: 'text' as const,
      content: `
## Reading Tract Data: A Worked Example

Segregation shows up when you compare a group's share of the whole city with its share of each tract.

### Worked Example: A City of Four Tracts

Group A totals 1,000 people and Group B totals 4,000, so Group A is **20 percent** of the city.

| Tract | Group A | Group B | Tract total | Group A's share of the tract |
|---|---|---|---|---|
| 1 | 500 | 400 | 900 | 56% |
| 2 | 300 | 800 | 1,100 | 27% |
| 3 | 150 | 1,200 | 1,350 | 11% |
| 4 | 50 | 1,600 | 1,650 | 3% |
| **Total** | 1,000 | 4,000 | 5,000 | **20%** |

1. Find each tract's share: 500 ÷ 900 ≈ 56 percent in tract 1, and so on down the table.
2. Compare each tract with the city-wide **20 percent**. Tract 1 is far above it; tract 4 is far below.
3. Find where the group lives: half of Group A (500 of 1,000) lives in tract 1 alone.

**Interpretation:** Group A is **clustered**, with half its members in one tract, a pattern the city-wide 20 percent hides. This is the scale lesson from the section above, applied to real numbers.

### Real Patterns
For Black and white residents of large US metropolitan areas, segregation has **declined slowly since about 1970**, but in 2020 it remained high in metros such as Milwaukee, New York, Chicago and Detroit. Hispanic–white and Asian–white segregation is generally lower.
`
    },
    {
      id: 'hgethnic4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A second city has three tracts.

| Tract | Group A | Group B |
|---|---|---|
| 1 | 600 | 150 |
| 2 | 300 | 900 |
| 3 | 100 | 950 |
| **Total** | 1,000 | 2,000 |

**1)** What percent of Group A lives in tract 1?

**2)** What percent of tract 1's residents belong to Group A?

**3)** Group A is one-third of the city. In how many of the three tracts is Group A's share **higher** than its city-wide share?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '80', '1'],
        hint1: 'Divide 600 by Group A\'s total of 1,000.',
        hint2: 'Tract 1 has 600 + 150 = 750 residents. Divide 600 by 750.',
        hint3: 'Work out Group A\'s share of each tract and compare it with one-third (about 33 percent).',
        explanation: '1) 600 ÷ 1,000 = 60 percent. 2) 600 ÷ 750 = 80 percent. 3) Group A\'s shares are 80 percent in tract 1, 25 percent in tract 2 (300 ÷ 1,200) and about 10 percent in tract 3 (100 ÷ 1,050), so only tract 1 is above the city-wide one-third: Group A is clustered in one tract.'
      }
    },
    {
      id: 'hgethnic4-history',
      type: 'text' as const,
      content: `
## How Segregation Was Built: Redlining, Covenants and Blockbusting

| Practice | What it was | When | Effect on the map |
|---|---|---|---|
| **Redlining** | The federal **Home Owners' Loan Corporation** (HOLC, created 1933) mapped about 200 cities and graded neighborhoods A (green, "best") to D (red, "hazardous"). Black and many immigrant neighborhoods were routinely graded D. The Federal Housing Administration and private lenders avoided or refused mortgages in such areas. | Maps drawn 1935–1940 | Little lending or investment in red areas; homeownership and wealth grew in white suburbs instead |
| **Racially restrictive covenants** | Clauses in property deeds barring sale or rental to Black, Jewish, Asian or other buyers | Common from the 1910s to the 1940s; courts could no longer enforce them after *Shelley v. Kraemer* (1948) | Whole subdivisions kept white by contract |
| **Blockbusting** | Agents stoked white owners' fears that Black families were moving in, bought homes cheaply, then resold them at high prices to Black buyers | 1950s–1960s | Rapid racial turnover of blocks and **white flight** to the suburbs |
| **Steering** | Agents showing buyers homes only in areas where their own group lived | Outlawed in 1968 but still found in audit studies | Quietly reproduces existing patterns |

The **Fair Housing Act of 1968** banned discrimination by race, religion and national origin in the sale, rental and financing of housing.

### Lasting Effects
A 2018 study by the National Community Reinvestment Coalition found that about **three in four** neighborhoods graded "hazardous" in the 1930s are low- to moderate-income today, and most are majority-minority.

**Nuance:** historians debate how much the HOLC maps themselves **caused** this. Many D-graded areas were already poor and segregated, and FHA rules and private lenders shaped lending more directly. The safest claim: the maps **recorded and reinforced** discrimination, and the pattern they show persists.

> 🔑 **AP Connection:** In an FRQ, define the practice, say who did it, and link it to a **spatial outcome**: disinvestment, lower home values, white flight or a persistent color line on today's map.
`
    },
    {
      id: 'hgethnic4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On HOLC maps of the 1930s, the neighborhoods colored red and graded "hazardous" were most often:',
            options: [
              'Areas with Black or immigrant residents',
              'New suburbs built for factory workers',
              'Districts at high risk of river flooding',
              'Downtown blocks zoned only for offices'
            ],
            correctAnswer: 0,
            explanation: 'The HOLC graded neighborhoods largely by who lived there, so Black and many immigrant areas were marked red. "Hazardous" meant lending risk, not floods, and new white suburbs were graded favorably.'
          },
          {
            question: 'Which practice involved agents frightening white homeowners into selling cheaply by warning that Black families were moving in?',
            options: [
              'Steering',
              'Redlining',
              'Blockbusting',
              'Gentrification'
            ],
            correctAnswer: 2,
            explanation: 'Blockbusting profited from racial fear: agents bought low from white sellers and resold high to Black buyers. Steering shows buyers homes only in certain areas, redlining denies credit to areas, and gentrification is the arrival of higher-income residents.'
          },
          {
            question: 'Why did the Supreme Court decision in Shelley v. Kraemer (1948) matter for residential segregation?',
            options: [
              'Judges could no longer enforce race-based deed clauses',
              'Lenders were barred from consulting any HOLC map',
              'Cities had to build public housing in white areas',
              'Private sellers could no longer refuse any buyer'
            ],
            correctAnswer: 0,
            explanation: 'The decision made racially restrictive covenants unenforceable in court. It did not regulate lenders or public housing, and broad bans on discrimination by sellers came with the Fair Housing Act of 1968.'
          }
        ]
      }
    },
    {
      id: 'hgethnic4-limits',
      type: 'text' as const,
      content: `
## Limits of Census Data and of the Map

### Limitations of Tract Data
| Limitation | Why it matters |
|---|---|
| **Depends on the unit** | The same city usually looks **more** segregated with small units (blocks) than with large ones (tracts). This is the **modifiable areal unit problem**, a scale-of-analysis issue |
| **Ignores arrangement** | Tract percentages alone do not show whether minority tracts form one large block or are scattered like a checkerboard, though residents' experiences differ greatly |
| **Shows where, not why** | The data show where groups live, not whether choice, income or discrimination produced the pattern |
| **Categories change** | Race and ethnicity are self-reported, and census categories have changed over time, which complicates comparisons across decades |

### Limitations of Choropleth Maps
- **Area bias:** big, thinly settled tracts at the city's edge take up much of the map, while dense inner tracts look tiny.
- **Class breaks:** the same data look segregated or mixed depending on where the color categories are cut.
- **Ecological fallacy:** a tract that is 70 percent one group does not tell you the identity of any one resident.

> 🔑 **AP Connection:** A common FRQ prompt is "explain one limitation of using the data to..." Name the limitation, then say what it would hide in **this** case.
`
    },
    {
      id: 'hgethnic4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a metropolitan area, Group A is 20 percent of the population but more than 80 percent of the residents in a handful of tracts. What does this show?',
            options: [
              'Group A is spread evenly across the whole metropolitan area',
              'Group A is clustered, a pattern the metro-wide figure hides',
              'The census undercounted Group A in all the other tracts',
              'Group A makes up a majority of the metropolitan population'
            ],
            correctAnswer: 1,
            explanation: 'A group that is a small share of the metro but a large majority in a few tracts is clustered, and the metro-wide 20 percent hides that pattern, which is why the scale of analysis matters. The figures show the opposite of an even spread, give no sign of an undercount, and 20 percent is not a majority.'
          },
          {
            question: 'Two cities each have a few tracts where a minority group is the majority. In one city those tracts form a single large block; in the other they are scattered like a checkerboard. Which limitation of tract percentages does this show?',
            options: [
              'They compare only two cities at a time',
              'They ignore how neighborhoods are arranged',
              'They count only residents who own homes',
              'They change every time a city grows'
            ],
            correctAnswer: 1,
            explanation: 'Tract percentages treat each tract as a separate box and ignore how tracts are arranged, so very different patterns can look alike in a table. They are not limited to two cities, they count all residents, and they do not shift just because a city grows.'
          },
          {
            question: 'Why can a choropleth map of census tracts give a misleading picture of where a group lives?',
            options: [
              'Percent values cannot be shown on choropleth maps',
              'Census tract borders are redrawn every single year',
              'Large, thinly settled tracts dominate the map',
              'The census does not record the race of residents'
            ],
            correctAnswer: 2,
            explanation: 'Shading by area lets big, sparsely populated tracts take up most of the map while dense tracts look small. Choropleths are built for rates, tracts change mainly once a decade, and the census does record race.'
          }
        ]
      }
    }
  ]
}
