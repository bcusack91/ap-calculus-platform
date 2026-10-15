export const hgSpatialConceptsPart5Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia5-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 5 of 7 — Scale of Analysis and Human-Environment Interaction**

---

| Section |
|---------|
| 📖 Scales of Analysis |
| Worked Example: One Variable at Four Scales |
| Environmental Determinism and Possibilism |
| Sustainability, Resources and Land Use |

> 🔑 **Key Concept:** The same question can have different answers at different **scales of analysis**, so geographers always state the scale they are working at (CED Topic 1.6). And the relationship between people and their environment runs both ways: the environment offers limits and possibilities, and people modify it (CED Topic 1.5).
`
    },
    {
      id: 'hgspatia5-scales',
      type: 'text' as const,
      content: `
## 📖 Scales of Analysis

**Scale of analysis** is the level at which data are organized and a pattern is studied.

| Scale | Unit of study | Example question |
|---|---|---|
| **Global** | The whole world | Which countries have the oldest populations? |
| **Regional** | A group of countries, or a large part of one country | How does fertility in Sub-Saharan Africa compare with Europe? |
| **National** | One country | Which U.S. states gained House seats after 2020? |
| **Local** | A city, county or neighborhood | Which census tracts in Chicago lack a grocery store within a mile? |

Each scale **reveals** some patterns and **hides** others. Data aggregated to a large unit (a whole country) average out the differences inside it. Data at a small unit (a neighborhood) show detail but can miss the larger system that produces it.

> ⚠️ **Do not confuse the two kinds of scale.**
> - **Map scale** = the ratio of map distance to ground distance (1:24,000).
> - **Scale of analysis** = the level of study (local, national, regional, global).
> A question that says "explain how the pattern differs at the national and local scales" is about scale of analysis.
`
    },
    {
      id: 'hgspatia5-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Variable at Four Scales

**Variable:** share of the population aged 65 and older (rounded, early 2020s; UN and Japanese government estimates).

| Scale | Unit | Share aged 65+ |
|---|---|---|
| Global | World | about 10% |
| National | Japan | about 29% |
| Local | Akita Prefecture, northern Japan | about 39% |
| Local | Tokyo Metropolis | about 23% |

### Reading Across the Scales

1. **Global:** Japan stands out as one of the oldest countries on Earth, nearly three times the world share.
2. **National:** a single number for Japan suggests the whole country ages evenly.
3. **Local:** inside Japan the share ranges from about 23 percent in Tokyo to about 39 percent in rural Akita.

**What the local scale reveals that the national scale hides:** young adults migrate from rural prefectures such as Akita to Tokyo for university and jobs. That migration makes Tokyo younger and Akita older. The process (internal rural-to-urban migration) is invisible in the national average.

### The Map, Described in Text

A choropleth of Japan's 47 prefectures by share aged 65 and older shows the darkest shades in rural prefectures of northern Honshu, Shikoku and parts of Kyushu, and the lightest shades in a band around the large metropolitan areas of Tokyo, Nagoya and Osaka, plus Okinawa in the far south. At a world scale, that whole internal pattern collapses into one dark shade for Japan.

> 🔑 **AP Connection:** FRQs often ask you to "explain how the pattern changes when the scale of analysis changes." The full answer names the two scales, describes what each shows, and identifies the process that only the finer (or broader) scale reveals.
`
    },
    {
      id: 'hgspatia5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A national average shows that Japan is aging, but prefecture data show rural areas aging far faster than Tokyo. Which process best explains the difference?',
            options: [
              'Young adults leaving rural areas for jobs in large cities',
              'Older adults moving from rural areas into large cities',
              'Higher fertility in rural areas than in large cities',
              'Lower life expectancy in cities than in rural areas'
            ],
            correctAnswer: 0,
            explanation: 'Rural-to-urban migration of young adults makes cities younger and leaves rural places older. Older adults moving to cities would age the cities, higher rural fertility would make rural areas younger, and city life expectancy is not lower.'
          },
          {
            question: 'Which question is framed at the local scale of analysis?',
            options: [
              'Which countries in South America have the highest fertility?',
              'Which neighborhoods of Houston flooded during the hurricane?',
              'How does Europe\'s median age compare with Africa\'s?',
              'Which U.S. states lost seats in the House after 2020?'
            ],
            correctAnswer: 1,
            explanation: 'Neighborhoods within one city are a local scale. Countries within a continent and Europe compared with Africa are regional or global comparisons, and states within the United States are a national-scale question.'
          },
          {
            question: 'A teacher says a 1:24,000 topographic map is "large scale." A student replies that it must therefore be a study of the whole world. What is wrong with the reply?',
            options: [
              'It mixes up map scale with scale of analysis',
              'It mixes up a reference map with a thematic map',
              'It mixes up absolute location with relative location',
              'It mixes up a ratio scale with a written scale'
            ],
            correctAnswer: 0,
            explanation: 'A large map scale such as 1:24,000 shows a small area in detail, which usually supports a local scale of analysis; the two ideas are different. The error has nothing to do with map type, location or the form in which the scale is written.'
          }
        ]
      }
    },
    {
      id: 'hgspatia5-environment',
      type: 'text' as const,
      content: `
## Environmental Determinism and Possibilism

| Theory | Core claim | Associated geographers | Status |
|---|---|---|---|
| **Environmental determinism** | The physical environment, especially climate, determines human behavior, culture and level of development | Ellen Churchill Semple, Ellsworth Huntington (early 1900s) | **Rejected.** It ignored culture, history and choice, and it was used to claim that people in tropical climates were inferior, which helped justify colonialism |
| **Possibilism** | The environment sets **limits and possibilities**, but people choose among them using culture and technology | Paul Vidal de la Blache (France) | The mainstream view; the basis for studying human-environment interaction |

### Possibilism in Real Landscapes

| Environment | Limit | Human choice |
|---|---|---|
| Steep mountains of the northern Philippines | Little flat land for rice | The Ifugao built terraced rice fields up the slopes, now a UNESCO World Heritage site |
| Low-lying coast of the Netherlands | About a quarter of the country lies below sea level | Dikes, pumps and **polders** (land reclaimed from the sea and lakes) turned wetlands into farmland and cities |
| Desert of southern Nevada and Arizona | Little rainfall | Dams and canals bring Colorado River water to Las Vegas and Phoenix |

### Limitation of Possibilism

Possibilism stresses human choice, but choices have environmental costs, and the limits can bite back. From the 1960s, Soviet planners diverted the two rivers feeding the Aral Sea to irrigate cotton in Central Asia. By the 2010s the sea had shrunk to roughly a tenth of its 1960 area, fisheries collapsed and salty dust storms damaged health and farms. People *chose*, but the environment set the consequences.

> ⚠️ A determinist explanation is a **single-cause** explanation. If an answer says "people in Region X are poor *because* it is hot," it is determinist and will not earn credit on the AP exam.
`
    },
    {
      id: 'hgspatia5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Determinism or Possibilism?** 🔍

Classify the reasoning in each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Hot climates make people less hardworking, so tropical countries stay poor." This reasoning is ___',
            options: ['environmental determinism', 'possibilism', 'sustainability', 'time-space compression']
          },
          {
            label: '"Farmers on steep slopes built terraces so they could grow rice." This reasoning is ___',
            options: ['environmental determinism', 'possibilism', 'sustainability', 'time-space compression']
          },
          {
            label: '"A city limits groundwater pumping so the aquifer refills for future residents." This goal is ___',
            options: ['environmental determinism', 'possibilism', 'sustainability', 'time-space compression']
          }
        ],
        correctAnswers: ['environmental determinism', 'possibilism', 'sustainability'],
        hint1: 'The climate is treated as the single cause of a human outcome.',
        hint2: 'The environment sets a limit, and people choose a way around it.',
        hint3: 'Meeting present needs without harming future generations\' ability to meet theirs.',
        explanation: 'Blaming climate for a society\'s economy is environmental determinism. Building terraces to overcome slope is possibilism. Limiting pumping so an aquifer lasts is sustainability.'
      }
    },
    {
      id: 'hgspatia5-resources',
      type: 'text' as const,
      content: `
## Sustainability, Resources and Land Use

**Sustainability** means using resources to meet present needs without reducing the ability of future generations to meet theirs.

| Resource type | Definition | Examples | Sustainability concern |
|---|---|---|---|
| **Renewable** | Replenished naturally on a human time scale | Solar, wind, forests, fresh water, fish | Can still be overused: aquifers pumped faster than they refill, fisheries overfished |
| **Nonrenewable** | Formed over geologic time; finite | Coal, oil, natural gas, metal ores | Will run out or become too costly; burning fossil fuels adds carbon dioxide |

**Land use** is how people use the surface: farming, housing, industry, conservation. Land-use change is one of the clearest ways to see human-environment interaction on a map. A time series of satellite images of the Brazilian Amazon, for example, shows a "fishbone" pattern: a straight highway with side roads branching off it at regular intervals, each lined by cleared pasture, spreading into unbroken forest.

**Scale reminder:** a sustainability problem can look different at each scale. Global fish catches can appear stable while a local fishery, such as the cod fishery off Newfoundland, collapses; Canada closed that fishery in 1992.

> 🔑 **AP Connection:** Human-environment interaction returns in agriculture (Unit 5), urban sustainability (Unit 6) and industrial pollution (Unit 7). Possibilism plus a clear statement of limits is the reasoning the exam rewards.
`
    },
    {
      id: 'hgspatia5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do geographers reject environmental determinism?',
            options: [
              'It leaves out culture and human choice',
              'It treats the climate as one factor among many',
              'It was developed only by geographers in France',
              'It relies too heavily on satellite and GIS data'
            ],
            correctAnswer: 0,
            explanation: 'Determinism treats the environment as the single cause of human outcomes and leaves out culture, history and choice; it was also used to justify colonial rule. Treating climate as one factor among many describes possibilism, and determinism predates satellite data.'
          },
          {
            question: 'The Dutch built dikes and pumped water out of low-lying land to create polders for farming and housing. Which idea does this illustrate?',
            options: [
              'Environmental determinism',
              'Possibilism',
              'Distance decay',
              'Time-space compression'
            ],
            correctAnswer: 1,
            explanation: 'The low coast set a limit, and Dutch society used technology to work around it, which is possibilism. Determinism would predict the land must stay wetland, and the other two concepts describe distance and connectivity.'
          }
        ]
      }
    }
  ]
}
