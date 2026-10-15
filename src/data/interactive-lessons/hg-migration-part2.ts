export const hgMigrationPart2Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat2-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 2 of 7 — Causes of Migration in Depth**

---

| Section |
|---------|
| 📖 Five Categories of Push and Pull Factors |
| Obstacles and Opportunities Along a Real Route |
| Ravenstein's Laws Tested Against Modern Data |
| Distance Decay and the Limits of the Models |

> 🔑 **Key Concept:** Migration is a **permanent or long-term change of residence**. People move when the combined pull of a destination outweighs the push of home **and** the cost of everything in between. The AP course sorts causes into five categories (economic, cultural, demographic, environmental and political) and asks you to judge where classic models such as **Ravenstein's laws** still fit the data and where they do not.
`
    },
    {
      id: 'hgmigrat2-categories',
      type: 'text' as const,
      content: `
## 📖 Five Categories of Push and Pull Factors

Part 1 listed push and pull factors in pairs. On the exam you will usually be asked to **name the category** a factor belongs to and to **explain** how it causes movement. A single move almost always involves several categories at once.

| Category | Push factor (at the origin) | Pull factor (at the destination) | Real case |
|---|---|---|---|
| **Economic** | Unemployment, low wages, failed harvests | Jobs, higher wages, booming industries | Nepali and Bangladeshi workers recruited to construction jobs in Qatar and the UAE |
| **Cultural** | Religious or ethnic persecution, language restrictions | Religious freedom, an existing community that shares the language | Rohingya Muslims fleeing Myanmar for Bangladesh in 2017 |
| **Demographic** | Many young adults competing for few jobs; crowding | Aging, shrinking workforces that need workers | Young workers from the Philippines filling nursing and caregiving jobs in aging Japan and Europe |
| **Environmental** | Drought, flooding, sea-level rise, natural hazards | Fertile land, a milder climate, safer ground | Evacuees from Hurricane Katrina (2005) who settled permanently in Houston |
| **Political** | War, persecution, oppressive government | Political stability, civil liberties, asylum protection | Ukrainians fleeing the Russian invasion of 2022 for Poland and Germany |

### Worked Example: One Move, Several Categories

A 24-year-old leaves a village in Guatemala's Western Highlands for Houston, Texas.

| Factor | Category | Push or pull |
|---|---|---|
| Coffee prices fell and rains failed, so the family farm earns little | Economic and environmental | Push |
| Village has many young adults and few jobs | Demographic | Push |
| A cousin in Houston has a construction job lined up | Economic (and a social network) | Pull |
| Gang extortion in the nearest town | Political | Push |

**How to explain it on the exam:** name the factor, name the category, then link it to the decision. *"Falling coffee prices are an economic push factor because they reduce household income at the origin, so the expected wage gain from moving rises."*

> ⚠️ A factor is "push" or "pull" depending on **where** it sits. Unemployment in the home village is a push; jobs in Houston are a pull. The same condition (a strong economy) can be a pull for one place and absent, and therefore a push, in another.
`
    },
    {
      id: 'hgmigrat2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Japan\'s workforce is shrinking as its population ages, and the government has expanded visas for foreign caregivers. For a Filipino nurse, Japan\'s aging population is best classified as',
            options: [
              'a demographic pull factor',
              'a demographic push factor',
              'a cultural pull factor',
              'an economic push factor'
            ],
            correctAnswer: 0,
            explanation: 'Population structure at the destination, an aging society short of workers, attracts migrants, so it is a demographic pull. A push would have to sit at the origin, and nothing about the factor is cultural.'
          },
          {
            question: 'Which situation is an example of an environmental push factor?',
            options: [
              'Factory closures that raise unemployment in a mill town',
              'Repeated crop failures from drought in the Sahel region',
              'A new law banning a minority language in public schools',
              'Fertile, well-watered farmland opening for settlement'
            ],
            correctAnswer: 1,
            explanation: 'Drought is a physical condition that drives people away from the origin, so it is an environmental push. Factory closures are economic, a language ban is cultural and political, and fertile land elsewhere is a pull.'
          },
          {
            question: 'Rohingya refugees crossed into Bangladesh in 2017 after violence by Myanmar\'s military targeted their ethnic and religious group. Which pair of categories best describes the main push factors?',
            options: [
              'Economic and demographic',
              'Environmental and economic',
              'Cultural and political',
              'Demographic and environmental'
            ],
            correctAnswer: 2,
            explanation: 'Persecution aimed at an ethnic and religious group is cultural, and violence by the state is political. Poverty and crowding existed but were not what forced the sudden flight.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat2-route',
      type: 'text' as const,
      content: `
## Obstacles and Opportunities Along a Real Route

Geographer **Everett Lee** (1966) described every migration as a set of factors at the **origin**, factors at the **destination**, and **intervening obstacles** in between, all filtered through the migrant's own circumstances. Part 1 defined intervening obstacles and opportunities; here we trace them along one route.

### Worked Example: From Syria to Germany, 2015

Syria's civil war began in 2011. By 2015 millions of Syrians had fled, and that year about **1 million** refugees and migrants reached Europe by sea (UNHCR). The route, described as a map in text:

1. **Aleppo to the Turkish border.** A short move of under 100 km across a land border.
2. **Turkey.** Several million Syrians stopped here. Turkey offered temporary protection, and later work permits, and cities such as Gaziantep and Istanbul already had Syrian communities.
3. **The Aegean crossing.** From the Turkish coast, smugglers' boats carried people a few kilometers to Greek islands such as Lesbos.
4. **The Balkan route.** North by bus, train and on foot through North Macedonia and Serbia toward Hungary or Croatia.
5. **Austria to Germany and Sweden.** Final destinations for many, chosen for asylum rules, jobs and existing Syrian or Arab communities.

| Stage | Intervening obstacle | Intervening opportunity |
|---|---|---|
| Turkey | Cost of the next leg; limited legal right to work at first | Protection, informal jobs, a large Syrian community; **most Syrians in Turkey stayed** |
| Aegean | A dangerous sea crossing, smugglers' fees, drownings | — |
| Balkans | Border closures, Hungary's border fence (built in 2015) | Transit camps, temporary shelter |
| Germany | Asylum processing, language barrier | Asylum recognition, jobs, family already settled there |

**Reading the table:** Turkey is the clearest **intervening opportunity**. Most Syrian refugees never went farther than a neighboring country; Turkey, Lebanon and Jordan together hosted far more Syrians than all of Europe. Each obstacle **filtered** the flow: those who reached Germany were disproportionately young men and people with the money to pay smugglers.

> 🔑 **AP Connection:** A question about intervening obstacles wants a **specific barrier** tied to the **flow**. "The Aegean Sea was a physical intervening obstacle because crossing it required paying smugglers and risking drowning, which reduced the number of Syrians who reached Europe" earns credit; "there were obstacles" does not.
`
    },
    {
      id: 'hgmigrat2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Factor** 🔍

Each sentence describes part of a migrant's journey. Choose the best term.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A Syrian family finds steady work in Gaziantep and decides not to continue to Germany: ___',
            options: ['intervening opportunity', 'intervening obstacle', 'push factor', 'counter-stream']
          },
          {
            label: 'A new border fence forces migrants onto a longer, costlier route: ___',
            options: ['intervening opportunity', 'intervening obstacle', 'pull factor', 'distance decay']
          },
          {
            label: 'Germany\'s asylum recognition rate attracts people to apply there: ___',
            options: ['pull factor', 'push factor', 'intervening obstacle', 'counter-stream']
          },
          {
            label: 'Some refugees later return from Germany to Syria as conditions change: ___',
            options: ['counter-stream', 'step migration', 'intervening opportunity', 'pull factor']
          }
        ],
        correctAnswers: ['intervening opportunity', 'intervening obstacle', 'pull factor', 'counter-stream'],
        hint1: 'Something along the way that makes stopping attractive.',
        hint2: 'A barrier between origin and destination.',
        hint3: 'A condition at the destination that attracts migrants.',
        explanation: 'A job along the way is an intervening opportunity, a fence is an intervening obstacle, favorable asylum rules at the destination are a pull factor, and movement back toward the origin is the counter-stream Ravenstein predicted.'
      }
    },
    {
      id: 'hgmigrat2-ravenstein',
      type: 'text' as const,
      content: `
## Ravenstein's Laws Tested Against Modern Data

**E. G. Ravenstein** built his "laws" from British census birthplace data and published them in **1885**. They describe **tendencies**, not rules. The AP exam expects you to know where they still fit.

| Ravenstein's generalization | Still holds? | Modern evidence |
|---|---|---|
| Most migrants move a **short distance** | **Largely yes** | Internal migrants far outnumber international ones, and about 7 in 10 refugees live in a country next to their own (UNHCR, 2023) |
| Long-distance migrants head for **major cities** | **Yes** | International migrants cluster in gateway cities such as New York, London, Toronto and Dubai |
| Each stream produces a **counter-stream** | **Yes** | Return migration, such as Mexicans returning from the US after the 2008 recession |
| **Rural** people migrate more than **urban** people | **Mixed** | Still true in countries urbanizing fast (China, India); in highly urbanized countries most moves are urban-to-urban or city-to-suburb |
| **Women** dominate short moves; men dominate long, international moves | **Partly outdated** | Women are about **48%** of international migrants (UN DESA, 2020), and many move alone for work as nurses, caregivers and domestic workers |
| Migration rises with **technology and economic development** | **Yes, with limits** | Cheap flights and phones shrink effective distance, but visas and border controls now restrict long-distance moves more than in 1885 |
| Most migration is **economic** | **Largely yes** | Most international migrants move for work, but forced displacement reached about **117 million** people by the end of 2023 (UNHCR) |

### Why Some Laws Weakened

- **Policy, not distance, is now the main barrier.** In 1885 Britain had almost no immigration controls. Today a migrant's passport can matter more than the kilometers involved.
- **Gender roles changed.** Demand for care work in rich, aging countries made women primary migrants rather than accompanying spouses, a shift called the **feminization of migration**.
- **Forced migration is larger.** Ravenstein studied an era of mostly voluntary internal movement; his laws say little about refugees.
- **Some corridors break the gender pattern entirely.** Labor flows from South Asia to the Gulf are overwhelmingly male.

> 🔑 **AP Connection:** When an FRQ asks you to "explain a limitation" of Ravenstein's laws, give a **specific law** and **specific counter-evidence**: "Ravenstein said men dominate long-distance migration, but women now make up nearly half of international migrants because of demand for care work in aging countries."
`
    },
    {
      id: 'hgmigrat2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Women now make up close to half of all international migrants. Which of Ravenstein\'s generalizations does this most directly challenge?',
            options: [
              'Most migrants move only a short distance',
              'Each migration stream creates a counter-stream',
              'Men dominate long-distance migration',
              'Long-distance migrants go to big cities'
            ],
            correctAnswer: 2,
            explanation: 'Ravenstein expected women to move short distances and men to dominate long, international moves; near gender parity among international migrants contradicts that. The other generalizations are about distance, return flows and destinations, not gender.'
          },
          {
            question: 'About 7 in 10 refugees live in a country bordering their own. This pattern best supports which idea?',
            options: [
              'Ravenstein\'s claim that most migration covers short distances',
              'The view that refugees choose destinations mainly for wages',
              'Ravenstein\'s claim that rural people migrate more than urban',
              'The idea that technology has eliminated distance as a barrier'
            ],
            correctAnswer: 0,
            explanation: 'Refugees mostly stop in the nearest safe country, which fits the short-distance generalization and distance decay. Fleeing to the nearest border is about safety rather than wages, and the pattern shows distance still matters.'
          },
          {
            question: 'Why do Ravenstein\'s laws fit migration in 1880s Britain better than migration between countries today?',
            options: [
              'Transport technology was more advanced in the 1880s',
              'Modern migrants respond less to economic incentives',
              'Border and visa rules now limit who can move',
              'Ravenstein studied only international migrants abroad'
            ],
            correctAnswer: 2,
            explanation: 'Ravenstein\'s data came from internal moves inside a country with almost no immigration controls, while today state policy often decides who can move, regardless of distance. He studied internal census data, and transport is far more advanced now.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat2-decay',
      type: 'text' as const,
      content: `
## Distance Decay and the Limits of the Models

### Distance Decay

**Distance decay** is the tendency for interaction, including migration, to **decline as distance increases**. Distance raises the cost of moving, reduces what a migrant knows about the destination, and makes return visits harder.

**Described as a graph in text:** put distance from the origin on the horizontal axis and the number of migrants on the vertical axis. The curve starts high near the origin and falls steeply, then flattens into a long tail of a few long-distance movers.

**Time-space compression** flattens that curve. Air travel, phones, money-transfer apps and social media let migrants learn about distant jobs and stay in touch with home, so the effective distance between, say, Kerala in India and Dubai is much shorter than the roughly 2,700 km on the map. Social networks matter more than kilometers: migrants follow relatives, which is why chain migration produces **clusters**, such as people from one Mexican state concentrating in one US city.

### Limitations of the Push-Pull and Ravenstein Models

| Limitation | Explanation |
|---|---|
| Treats migrants as purely rational calculators | Real decisions depend on networks, family obligations, rumors and incomplete information |
| Ignores **who cannot move** | The poorest people often lack the money to migrate; emigration tends to rise as poor countries become somewhat richer, then fall later |
| Underplays **policy** | Visas, quotas, guest-worker programs and asylum rules can open or close a corridor overnight |
| Built on one place and era | Ravenstein's data were 19th-century British, mostly internal moves |
| Splits causes too neatly | A drought (environmental) that ruins farms (economic) and sparks conflict (political) does not fit one category |

### Scale of Analysis

Causes look different at different scales:
- **Global:** wage gaps between richer and poorer regions drive South-to-North and South-to-Gulf flows.
- **National:** a country's immigration policy decides which of those potential migrants can enter.
- **Regional or local:** one town's factory closure, or one village's network of relatives abroad, decides who actually leaves.

> 🔑 **AP Connection:** Expect a question that asks you to explain one **limitation** of a model. Name the model, state what it assumes, and give the case it cannot explain, such as a poor household that cannot afford to move despite strong push factors.
`
    },
    {
      id: 'hgmigrat2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

**1)** The tendency for migration and other interaction to decline as distance increases is called distance _______.

**2)** In which year did Ravenstein publish his laws of migration? Enter the year.

**3)** Air travel and the internet make distant places feel closer. Geographers call this time-space _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['decay', '1885', 'compression'],
        hint1: 'The word describes something that weakens or fades with distance.',
        hint2: 'He drew on British census data from the 1870s and 1880s.',
        hint3: 'Time and space are squeezed together.',
        explanation: '1) Distance decay describes interaction falling as distance grows. 2) Ravenstein published "The Laws of Migration" in 1885. 3) Time-space compression is the shrinking of effective distance through faster transport and communication.'
      }
    },
    {
      id: 'hgmigrat2-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Apply the Model** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Many workers from one district of Kerala, India, work in Dubai, while few from a neighboring district do. Which concept best explains this concentration?',
            options: [
              'Social networks built through chain migration',
              'Distance decay from Kerala to the Gulf',
              'Ravenstein\'s rural-urban generalization',
              'Environmental push factors in Kerala'
            ],
            correctAnswer: 0,
            explanation: 'Neighboring districts are the same distance from Dubai, so distance decay cannot explain the difference; earlier migrants who help relatives and neighbors follow them create the cluster. Nothing in the stem points to a rural-urban or environmental difference.'
          },
          {
            question: 'Which observation is the strongest criticism of a simple push-pull explanation of migration?',
            options: [
              'Wages differ greatly between origin and destination',
              'Many very poor households cannot afford to move',
              'Wars at the origin often trigger large outflows',
              'Migrants usually move toward growing job markets'
            ],
            correctAnswer: 1,
            explanation: 'A push-pull model predicts that the strongest pushes produce the most movement, but the poorest often lack the money to migrate. Wage gaps, wars and job growth are exactly what the model predicts, so they support it rather than criticize it.'
          }
        ]
      }
    }
  ]
}
