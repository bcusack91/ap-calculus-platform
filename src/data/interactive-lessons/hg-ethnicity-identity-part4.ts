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
| The Index of Dissimilarity: A Worked Calculation |
| How Segregation Was Built: Redlining, Covenants and Blockbusting |
| Limits of the Index and of the Map |

> 🔑 **Key Concept:** **Residential segregation** is the uneven spread of groups across the neighborhoods of a city. Geographers measure it with census data and the **index of dissimilarity**, map it with choropleth and dot maps, and explain it with history: in the United States, **redlining, racial covenants and blockbusting** built patterns that still show on today's maps. (This links to urban challenges in CED Topic 6.10.)
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
## The Index of Dissimilarity: A Worked Calculation

The **index of dissimilarity (D)** compares how two groups are spread across the tracts of a city:

$$D = \\frac{1}{2} \\sum \\left| \\frac{a_i}{A} - \\frac{b_i}{B} \\right| \\times 100$$

Here $a_i$ and $b_i$ are each group's count in tract $i$, and $A$ and $B$ are each group's city-wide totals.

**Meaning:** D is the **percentage of either group that would have to move to another tract** for both groups to be spread in the same proportions. It runs from **0** (identical spreads) to **100** (the groups never share a tract).

| Value of D | Usual reading |
|---|---|
| Below 30 | Low segregation |
| 30 to 60 | Moderate |
| Above 60 | High |

### Worked Example: A City of Four Tracts

Group A totals 1,000 people and Group B totals 4,000.

| Tract | Group A | Share of A | Group B | Share of B | Difference |
|---|---|---|---|---|---|
| 1 | 500 | 0.50 | 400 | 0.10 | 0.40 |
| 2 | 300 | 0.30 | 800 | 0.20 | 0.10 |
| 3 | 150 | 0.15 | 1,200 | 0.30 | 0.15 |
| 4 | 50 | 0.05 | 1,600 | 0.40 | 0.35 |
| **Total** | 1,000 | 1.00 | 4,000 | 1.00 | **1.00** |

1. Find each group's **share** in each tract (500 ÷ 1,000 = 0.50; 400 ÷ 4,000 = 0.10).
2. Take the **absolute difference** in each tract (0.50 − 0.10 = 0.40).
3. Add the differences: 0.40 + 0.10 + 0.15 + 0.35 = **1.00**.
4. Halve and convert to a percent: ½ × 1.00 × 100 = **D = 50**.

**Interpretation:** moderate segregation. Half of Group A, **500 people**, would have to move to other tracts for Group A to be spread like Group B.

### Real Values
For Black and white residents of large US metropolitan areas, D has **fallen slowly since about 1970**, but in **2020** it remained **above 60**, the high range, in metros such as Milwaukee, New York, Chicago and Detroit. Hispanic–white and Asian–white values are generally lower.
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
| 1 | 600 | 100 |
| 2 | 300 | 900 |
| 3 | 100 | 1,000 |
| **Total** | 1,000 | 2,000 |

**1)** What percent of Group A lives in tract 1?

**2)** What is the index of dissimilarity, D?

**3)** How many members of Group A would have to move to other tracts to match Group B's spread?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '55', '550'],
        hint1: 'Divide 600 by Group A\'s total of 1,000.',
        hint2: 'Group B\'s shares are 0.05, 0.45 and 0.50. Add the three absolute differences, halve, then multiply by 100.',
        hint3: 'D is the percent of Group A that must move. Take that percent of 1,000.',
        explanation: '1) 600 ÷ 1,000 = 60 percent. 2) A\'s shares are 0.60, 0.30 and 0.10; B\'s are 0.05, 0.45 and 0.50. The differences are 0.55, 0.15 and 0.40, which sum to 1.10; half of that is 0.55, so D = 55. 3) 55 percent of 1,000 is 550 people.'
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
## Limits of the Index and of the Map

### Limitations of the Index of Dissimilarity
| Limitation | Why it matters |
|---|---|
| **Two groups at a time** | A city with four large groups needs six separate indexes |
| **Ignores arrangement** | Minority tracts clustered in one large block and minority tracts scattered like a checkerboard can give the **same D**, though residents' experiences differ greatly |
| **Depends on the unit** | D is usually **higher** with small units (blocks) than with large ones (tracts). This is the **modifiable areal unit problem** |
| **Measures evenness only** | It does not say how often groups meet (exposure) or **why** they are separated |

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
            question: 'A metropolitan area has a Black–white index of dissimilarity of 75. What does this mean?',
            options: [
              '75 percent of residents in the area are Black',
              '75 percent of either group would need to relocate',
              '75 percent of tracts contain members of only one group',
              '75 percent of Black residents live in high-poverty tracts'
            ],
            correctAnswer: 1,
            explanation: 'D is the share of either group that would have to move to another tract to even out the two spreads, so 75 means high segregation. It is not a population share, a count of one-group tracts or a poverty rate.'
          },
          {
            question: 'Two cities have the same index of dissimilarity. In one, minority neighborhoods form a single large block; in the other, they are scattered like a checkerboard. Which limitation does this show?',
            options: [
              'It compares only two cities at a time',
              'It ignores where tracts lie',
              'It counts only residents who own homes',
              'It changes every time a city grows'
            ],
            correctAnswer: 1,
            explanation: 'The index treats tracts as separate boxes and ignores their arrangement, so very different patterns can share one value. It compares two groups, not two cities, counts all residents, and does not shift just because a city grows.'
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
