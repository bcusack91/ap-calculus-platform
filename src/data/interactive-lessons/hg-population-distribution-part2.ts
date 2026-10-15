export const hgPopulationDistributionPart2Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula2-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 2 of 7 — Where People Live and Why**

---

| Section |
|---------|
| 📖 The World Map of People, Described in Text |
| Physical Factors |
| Human Factors |
| Distribution at Different Scales |

> 🔑 **Key Concept:** People are not spread evenly across Earth. Physical factors (climate, landforms, water bodies) and human factors (culture, economics, history, politics) together explain why some places are crowded and others nearly empty (CED Topic 2.1).
`
    },
    {
      id: 'hgpopula2-map',
      type: 'text' as const,
      content: `
## 📖 The World Map of People, Described in Text

Imagine a world **dot distribution map** where each dot is 100,000 people.

- **East Asia:** dots pack the plains and river valleys of eastern China (the Huang He and Chang Jiang basins), plus Japan and South Korea. Western China, with its deserts and the Tibetan Plateau, is nearly blank.
- **South Asia:** a dense band runs along the Ganges and Indus river valleys and down both coasts of India, with Bangladesh one solid mass of dots in the Ganges-Brahmaputra delta.
- **Europe:** dots are spread widely from Britain across to western Russia, densest in an arc from England through the Low Countries and Germany to northern Italy.
- **Eastern North America:** a cluster runs from Boston to Washington, D.C., and around the Great Lakes.
- **Southeast Asia:** the Indonesian island of Java is crowded; over half of Indonesia's people live there on under a tenth of its land.

The blank areas are just as telling: the Sahara, the Arabian Desert, central Australia, Siberia, northern Canada, Greenland, the Amazon interior and Antarctica.

### The Numbers Behind the Map

Share of world population by region, about 2024 (UN, rounded; world total about 8.2 billion):

| Region | Share of world population |
|---|---|
| Asia | about 59% |
| Africa | about 18% |
| Europe | about 9% |
| Latin America and the Caribbean | about 8% |
| Northern America | about 5% |
| Oceania | under 1% |

India passed China as the world's most populous country in 2023; each has more than 1.4 billion people. Together, the two hold more than a third of humanity.

> 🔑 **AP Connection:** The four clusters to know are **East Asia, South Asia, Europe and eastern North America**. If a question asks you to describe global distribution, name at least two clusters and one sparsely populated region, and give a reason for each.
`
    },
    {
      id: 'hgpopula2-physical',
      type: 'text' as const,
      content: `
## Physical Factors

| Factor | How it shapes distribution | Example |
|---|---|---|
| **Climate** | People avoid places that are too dry, too cold or, historically, too hot and wet for farming | Few people live in the Sahara or in Siberia's subarctic interior |
| **Landforms** | Flat, low land is easier to farm and build on; high, rugged mountains hold few people | Dense settlement on China's North China Plain, sparse settlement on the Tibetan Plateau |
| **Water bodies** | Rivers supply water, fertile soil and transport; coasts allow trade and fishing | Roughly 40 percent of people live within about 100 km of a coast |

### The Ecumene

The **ecumene** is the part of Earth's surface permanently settled by people (Part 1). The rest, the **nonecumene** (or anecumene), includes polar ice, high mountains and the driest deserts. The ecumene has grown over time as irrigation, heating, air conditioning and transport let people live in places once considered too harsh.

### Case: Egypt and the Nile

Egypt covers about 1 million km², but nearly all of it is desert. Roughly 95 percent of Egyptians live on about 5 percent of the land, along the Nile valley and in its delta. **On a population map**, Egypt is a narrow line of dots from Aswan north to Cairo that fans into a triangle at the delta, with almost nothing to the east or west.

**Limitation of a purely physical explanation:** physical factors set possibilities, not destinies (possibilism, from the previous topic). Dubai and Las Vegas grew in deserts because of trade, tourism and engineered water supplies.
`
    },
    {
      id: 'hgpopula2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which physical factor best explains why most Egyptians live in a narrow strip of land?',
            options: [
              'Access to river water in a desert climate',
              'Mountain ranges that block travel to the west',
              'Cold winters across the country\'s interior',
              'Thick tropical forest across the southern half'
            ],
            correctAnswer: 0,
            explanation: 'The Nile provides water and fertile soil in an otherwise arid country, so settlement follows the river. Egypt\'s interior is desert, not mountains, cold plateau or tropical forest.'
          },
          {
            question: 'Which list contains only major world population clusters?',
            options: [
              'East Asia, South Asia, Europe',
              'Siberia, East Asia, Europe',
              'South Asia, Sahara, Europe',
              'Europe, the Amazon Basin, East Asia'
            ],
            correctAnswer: 0,
            explanation: 'East Asia, South Asia and Europe are three of the four major clusters, along with eastern North America. Siberia, the Sahara and the Amazon interior are sparsely populated parts of the nonecumene or near it.'
          },
          {
            question: 'Over time, the ecumene has expanded mainly because',
            options: [
              'technology such as irrigation lets people live in harsher places',
              'Earth\'s climate has warmed enough to make deserts productive',
              'governments have required people to settle in the nonecumene',
              'world population has fallen, so people have more room to move'
            ],
            correctAnswer: 0,
            explanation: 'Irrigation, heating, cooling and transport have made dry, cold and remote areas livable. Deserts have not become broadly productive from warming, settlement has not been mostly forced, and world population has grown, not fallen.'
          }
        ]
      }
    },
    {
      id: 'hgpopula2-human',
      type: 'text' as const,
      content: `
## Human Factors

| Factor | How it shapes distribution | Example |
|---|---|---|
| **Economic** | People move to where jobs and trade are | Coastal cities in southern and eastern China grew rapidly after export manufacturing expanded from the 1980s |
| **Historical** | Past settlement and colonial patterns persist | Many African and Latin American capitals are coastal ports founded for colonial trade, such as Lagos, Dakar and Buenos Aires |
| **Political** | Governments can redirect settlement | Brazil moved its capital inland from Rio de Janeiro to Brasília in 1960 to draw people toward the interior |
| **Cultural** | Ties to sacred places, ethnic homelands and family land keep people in place | Rural families stay on inherited land even when city jobs pay more |

### Physical and Human Factors Work Together

Canada is the second-largest country by area, yet most Canadians live within about 160 km (100 miles) of the U.S. border. **Physical:** the far north is cold, with permafrost and a short growing season. **Human:** the southern strip holds the best farmland, the major cities and the closest trade links to the U.S. market. **On a dot map**, Canada is a thin ribbon of dots along its southern edge, thickest in the corridor from Quebec City to Windsor, with scattered points in the north.

> ⚠️ **Common error:** do not stop at one factor. AP scoring rewards answers that connect a physical factor and a human factor to a named place.
`
    },
    {
      id: 'hgpopula2-scale',
      type: 'text' as const,
      content: `
## Distribution at Different Scales

The same question, "where do people live?", has different answers at each scale.

| Scale | Pattern | Example |
|---|---|---|
| **Global** | Four large clusters; vast empty areas | East Asia vs. Sahara |
| **National** | Concentration in one part of a country | Australia: most people live along the southeast and southwest coasts, very few in the arid interior |
| **Regional (within a country)** | Concentration along a river, coast or corridor | Egypt's Nile valley |
| **Local** | Clustering within a city or district | Dense apartment towers near transit stations, low-density homes at the edge |

**Why scale matters:** Australia's national density is very low, about 3 people per km². That single number suggests an empty country, but Sydney and Melbourne each hold about 5 million people. The national number hides extreme clustering.

> 🔑 **AP Connection:** In an FRQ, "explain one reason for the distribution at the national scale" needs a reason tied to the whole country, such as aridity in Australia's interior. A reason about one neighborhood answers a local-scale question instead.
`
    },
    {
      id: 'hgpopula2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Factor** 🔍

Is each explanation mainly physical or human, and which kind?
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Few people live on the Tibetan Plateau because of its high elevation and cold: ___',
            options: ['physical: landforms and climate', 'human: economic', 'human: political', 'human: historical']
          },
          {
            label: 'Brazil built a new inland capital to pull settlement away from the coast: ___',
            options: ['physical: water bodies', 'human: economic', 'human: political', 'human: cultural']
          },
          {
            label: 'Factory jobs drew tens of millions of rural migrants to coastal Chinese cities: ___',
            options: ['physical: water bodies', 'human: economic', 'human: political', 'human: cultural']
          },
          {
            label: 'Colonial port cities such as Dakar remain the largest cities in their countries: ___',
            options: ['physical: landforms and climate', 'human: economic', 'human: cultural', 'human: historical']
          }
        ],
        correctAnswers: ['physical: landforms and climate', 'human: political', 'human: economic', 'human: historical'],
        hint1: 'Elevation and temperature are features of the natural environment.',
        hint2: 'A government decision moved the capital.',
        hint3: 'The draw was employment.',
        explanation: 'The Tibetan Plateau is sparsely settled for physical reasons (elevation and cold). Brasília was a political decision. Factory jobs are an economic pull. Colonial ports that remain dominant reflect historical factors.'
      }
    },
    {
      id: 'hgpopula2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Australia\'s national population density is about 3 people per km². Why is this number misleading?',
            options: [
              'Most Australians live in a few large coastal cities',
              'Australians are spread evenly across the arid interior',
              'Density cannot be calculated for a country so large',
              'The number counts farmland only, not the whole land area'
            ],
            correctAnswer: 0,
            explanation: 'A national average spreads people evenly over all the land, but Australians cluster in coastal cities such as Sydney and Melbourne while the arid interior is nearly empty. Density can be calculated for any country, and arithmetic density uses total land area.'
          },
          {
            question: 'Which pairing best explains why most Canadians live near the U.S. border?',
            options: [
              'A colder north, and better farmland and trade links in the south',
              'A drier south, and government rules that limit northern settlement',
              'A mountainous north, and a cultural ban on living near the Arctic',
              'A wetter south, and colonial ports built along the Arctic coast'
            ],
            correctAnswer: 0,
            explanation: 'The cold north limits farming and settlement, while the south has the best farmland, the major cities and access to the U.S. market. Canada\'s south is not drier, there is no law or cultural ban against northern living, and colonial ports were on the Atlantic and St. Lawrence, not the Arctic.'
          }
        ]
      }
    }
  ]
}
