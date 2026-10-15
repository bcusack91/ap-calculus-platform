export const hgPopulationDistributionPart7Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula7-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 7 of 7 — Synthesis Review: Where, How Dense, and Who**

---

| Section |
|---------|
| 📖 How the Parts Fit Together |
| One Country Through Every Lens: Egypt |
| Measures and Models with Their Limits |
| Mixed Review |

> 🔑 **Key Concept:** This topic asks three linked questions. **Where** do people live, and why (distribution)? **How crowded** are they, measured in ways that reveal pressure on land (density)? **Who** are they, by age and sex (composition)? The answers shape a country's politics, economy and services.
`
    },
    {
      id: 'hgpopula7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Parts Fit Together

| Part | Big question | Core ideas |
|---|---|---|
| 1 | What do we measure? | Population density, ecumene, arithmetic density |
| 2 | Where do people live, and why? | Four clusters; physical factors (climate, landforms, water) and human factors (economic, historical, political, cultural) |
| 3 | How do we measure pressure on land? | Arithmetic, physiological and agricultural density; what each reveals and hides |
| 4 | What follows from density? | Political, economic, social and environmental consequences; services such as medical care; carrying capacity |
| 5 | Who lives there? | Population pyramids, sex ratio, cohorts, bulges and notches; planning |
| 6 | How is it tested? | Reading tables and pyramids; explain with evidence |

## One Country Through Every Lens: Egypt

| Lens | Egypt |
|---|---|
| **Distribution** | Roughly 95 percent of people live on about 5 percent of the land, along the Nile valley and delta; on a dot map, a thin line from Aswan to Cairo that fans out at the delta |
| **Physical factor** | Desert climate; the Nile supplies almost all fresh water |
| **Human factor** | Thousands of years of irrigated farming and cities along the river; Cairo and Alexandria concentrate jobs |
| **Arithmetic density** | About 110 per km², which looks moderate |
| **Physiological density** | About 3,140 per km² of arable land, roughly 29 times higher |
| **Consequence** | Heavy pressure on farmland and water; Egypt is among the world's largest wheat importers; Cairo's crowding and housing shortages |
| **Scale** | National density hides the crowded valley; at the local scale, Cairo's densest districts are among the most crowded urban areas in the world |

> 🔑 **AP Connection:** A strong answer moves across lenses: "Egypt's population is concentrated along the Nile (**distribution**) because of its arid climate (**physical factor**), so its physiological density far exceeds its arithmetic density (**density**), which puts pressure on scarce farmland (**consequence**)."
`
    },
    {
      id: 'hgpopula7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of measures would best show that a country has scarce farmland worked by many farmers on small plots?',
            options: [
              'High physiological density and high agricultural density',
              'Low arithmetic density and low physiological density',
              'High arithmetic density and low agricultural density',
              'Low physiological density and high arithmetic density'
            ],
            correctAnswer: 0,
            explanation: 'High physiological density shows many people per unit of farmland, and high agricultural density shows many farmers working it. Low agricultural density would point to mechanized farms, and low physiological density means farmland is plentiful.'
          },
          {
            question: 'Which statement correctly links a physical factor to population distribution?',
            options: [
              'Siberia is sparsely settled because its cold winters limit farming',
              'Brasília grew because the government moved Brazil\'s capital inland in 1960',
              'Coastal Chinese cities grew because export factories created millions of jobs',
              'Colonial port cities remain large because trade routes were built around them'
            ],
            correctAnswer: 0,
            explanation: 'Cold climate is a physical factor that limits farming and settlement in Siberia. The capital move, factory jobs and colonial trade routes are political, economic and historical factors, all of them human.'
          },
          {
            question: 'Why is the ecumene larger today than it was 500 years ago?',
            options: [
              'Technology lets people settle harsher places',
              'Earth\'s deserts have shrunk to small areas',
              'Polar ice sheets have melted away entirely',
              'People now avoid living along river valleys'
            ],
            correctAnswer: 0,
            explanation: 'Irrigation, heating, air conditioning and transport let people live permanently in places once too dry, cold or remote. Deserts and ice sheets remain extensive, and river valleys are still among the most crowded places on Earth.'
          }
        ]
      }
    },
    {
      id: 'hgpopula7-limits',
      type: 'text' as const,
      content: `
## Measures and Models with Their Limits

| Tool | What it shows | Main limitation |
|---|---|---|
| Arithmetic density | People per unit of all land | Includes unusable land; hides concentration |
| Physiological density | Pressure on arable land | Ignores farm productivity and food imports |
| Agricultural density | How many farmers work the land | Says nothing about total food output |
| Dot distribution map | Where people cluster | Exact counts are hard to read; dots merge in dense areas |
| Population pyramid | Age-sex structure at one moment | A snapshot; a national pyramid hides regional differences |
| Carrying capacity | Limits of land and resources | Not fixed; changes with technology, consumption and trade |

### Five Distinctions to Know Cold
1. **Physiological vs. agricultural density:** both divide by arable land; physiological uses all people, agricultural uses only farmers.
2. **Density vs. concentration:** how many per area vs. how clustered.
3. **High density vs. overpopulation:** overpopulation is about people relative to resources and technology.
4. **Wide pyramid base vs. high death rate:** the base shows births; mortality is a separate inference.
5. **Uneven pyramid sides:** migration (working ages), sex-selective births (young ages) or longer female lives (old ages).
`
    },
    {
      id: 'hgpopula7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Pick the Right Tool** 🔍

Choose the best measure or graph for each task.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Show how many people depend on each km² of farmland: ___',
            options: ['physiological density', 'agricultural density', 'arithmetic density', 'population pyramid']
          },
          {
            label: 'Forecast how many kindergarten places a country will need in five years: ___',
            options: ['physiological density', 'agricultural density', 'arithmetic density', 'population pyramid']
          },
          {
            label: 'Compare how mechanized two countries\' farming systems are: ___',
            options: ['physiological density', 'agricultural density', 'arithmetic density', 'population pyramid']
          },
          {
            label: 'Give a quick, single figure for people per km² of a country\'s whole territory: ___',
            options: ['physiological density', 'agricultural density', 'arithmetic density', 'population pyramid']
          }
        ],
        correctAnswers: ['physiological density', 'population pyramid', 'agricultural density', 'arithmetic density'],
        hint1: 'All people divided by arable land.',
        hint2: 'The 0–4 cohort today is next year\'s and the following years\' young children.',
        hint3: 'Farmers per unit of arable land.',
        explanation: 'People per km² of farmland is physiological density. The 0–4 bars of a pyramid forecast future school places. Farmers per km² of arable land, agricultural density, reflects mechanization. People per km² of all land is arithmetic density.'
      }
    },
    {
      id: 'hgpopula7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s population pyramid has a wide base that narrows sharply at every age. Which combination is most likely?',
            options: [
              'High fertility and a young population',
              'Low fertility and an aging population',
              'High immigration of working-age men',
              'Low fertility and a large elderly share'
            ],
            correctAnswer: 0,
            explanation: 'An expansive pyramid with a wide base shows many recent births and a young population. Low fertility and aging produce a narrow base, and immigration of working-age men produces a one-sided middle bulge.'
          },
          {
            question: 'Which consequence is most closely tied to very low population density in a large region?',
            options: [
              'Services such as hospitals cost more per person and are farther away',
              'Housing prices rise quickly because land is scarce for new homes',
              'Public transit systems become crowded during the morning rush',
              'Firms gain from a large local pool of skilled workers nearby'
            ],
            correctAnswer: 0,
            explanation: 'Where few people are spread over a large area, each facility serves few users and travel distances are long, so services cost more and are harder to reach. Scarce land, crowded transit and large labor pools are features of high density.'
          },
          {
            question: 'Egypt\'s arithmetic density is about 110 per km², but most Egyptians live in very crowded conditions. What best explains this?',
            options: [
              'Nearly everyone lives along the narrow Nile valley and delta',
              'Most Egyptians live in the western desert oases far from the river',
              'Egypt\'s land area is smaller than it appears',
              'Egypt\'s arithmetic density is calculated using arable land only'
            ],
            correctAnswer: 0,
            explanation: 'The average spreads people over a country that is mostly empty desert, while nearly all live on the small strip of land along the Nile. The oases hold few people, and arithmetic density uses total land, not arable land.'
          }
        ]
      }
    }
  ]
}
