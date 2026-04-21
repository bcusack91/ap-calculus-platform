export const whChallenges21stCenturyPart4Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc4-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| How 21st-century challenges interact (climate ↔ migration ↔ populism) |
| Great-power rivalry: U.S.-China competition |
| The role of international institutions: UN, WHO, WTO, G-20, IPCC |
| Resistance and protest: Black Lives Matter, climate strikes, Hong Kong protests |

> Key idea: Twenty-first-century challenges are not isolated. Climate change drives migration; migration fuels populism; populism weakens international cooperation; weakened cooperation worsens climate change. AP prompts on connections reward students who can trace these feedback loops.
      `
    },
    {
      id: 'whc4-content',
      type: 'text' as const,
      content: `
## How Challenges Interact

| Linkage | Mechanism |
|---|---|
| Climate → Migration | Sahel droughts, Bangladeshi sea-level rise, Central American crop failures push out-migration |
| Migration → Populism | Demographic anxiety mobilizes anti-immigrant parties (AfD, FN, FIDESZ) |
| Populism → Weak cooperation | Trump withdrew from Paris (2017), WHO (2020); Bolsonaro weakened Amazon protection |
| Pandemics → Inequality | COVID-19 hit lower-income workers and developing countries harder |
| AI/automation → Labor displacement | Routine clerical and manufacturing jobs at risk; possibly some skilled jobs too |

## Great-Power Rivalry: U.S. vs. China

| Dimension | Pattern |
|---|---|
| Trade | 2018+ tariff escalation under Trump; 2022+ chip export controls under Biden |
| Technology | Race over 5G (Huawei), semiconductors (TSMC, Intel, SMIC), AI capability |
| Influence | Belt and Road Initiative (2013+) vs. Indo-Pacific partnerships (Quad: U.S.-Japan-India-Australia) |
| Military | South China Sea island-building; Taiwan tensions; AUKUS pact (2021) |
| Climate | World\'s top two emitters; intermittent cooperation despite political tensions |

## The Role of International Institutions

| Institution | 21st-century test |
|---|---|
| UN Security Council | Russian veto blocks Ukraine action; China vetoes Syria action |
| WHO | Coordinated COVID response; criticized for early China deference |
| WTO | Dispute resolution paralyzed; Trump blocked appellate appointments |
| G-20 | Coordinated 2008 GFC response; less effective on subsequent crises |
| IPCC | Authoritative climate science; informs Paris Agreement targets |
| ICC | Issued arrest warrant for Putin (2023); limited enforcement reach |

## Resistance and Protest in the 21st Century

| Movement | Year(s) | Significance |
|---|---|---|
| Color revolutions | 2003 (Georgia), 2004 (Ukraine) | Pro-Western post-Soviet protests |
| Iran Green Movement | 2009 | Suppressed; foreshadowed Arab Spring |
| Occupy Wall Street | 2011 | Global anti-inequality wave; "We are the 99%" |
| Hong Kong protests | 2014 (Umbrella), 2019–20 | Resisted Chinese tightening; defeated by 2020 National Security Law |
| #MeToo | 2017+ | Global movement against sexual harassment |
| Climate strikes / Greta Thunberg | 2018+ | School strikes; "Fridays for Future" |
| Black Lives Matter | 2014+, peak 2020 | Global protests after George Floyd killing |
| Iran "Woman, Life, Freedom" | 2022+ | Mass protests after Mahsa Amini\'s death in custody |

- **Key takeaway:** AP "connections" prompts often ask students to trace how a single phenomenon ripples across regions and challenge categories. Climate change is the master example: it drives migration, fuels populism, strains international cooperation, and disproportionately harms the global South. The strongest essays trace at least three of these linkages with specific cases.
      `
    },
    {
      id: 'whc4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Connections**`,
      exercise: {
        questions: [
          {
            question: 'Which response best characterizes the 21st-century U.S.-China rivalry as it has developed since roughly 2017?',
            options: [
              'A multi-dimensional rivalry combining trade tariffs, semiconductor export controls, technology competition (5G, AI), military positioning in the South China Sea and around Taiwan, and Chinese-financed Belt and Road Initiative infrastructure across multiple continents',
              'A purely military rivalry confined entirely to the South China Sea with no trade, technology, or diplomatic dimensions of any kind during the period from 2017 through the present day in any region',
              'A purely diplomatic rivalry without any meaningful trade, technology, military, or infrastructure-investment dimensions during the entire period from 2017 through the present day in any region',
              'A trade-only rivalry that ended completely in 2018 after the initial round of tariffs without any further escalation in technology, military, or infrastructure dimensions during the period from 2018 onward'
            ],
            correctAnswer: 0,
            explanation: 'The post-2017 U.S.-China rivalry is multi-dimensional: trade + tech + military + influence projection.'
          },
          {
            question: "Which best characterizes the 2019–20 Hong Kong protests?",
            options: [
              "Mass protests against a proposed extradition bill that would have allowed transfers to mainland China expanded into broader pro-democracy demonstrations; Beijing imposed a National Security Law in June 2020 that effectively ended large-scale protest in the territory",
              "Hong Kong residents staged mass protests in 2019–20 to demand closer political integration with mainland China and the imposition of a National Security Law to enhance public order in the territory's neighborhoods",
              "Hong Kong residents held no significant protests during 2019–20 and the territory remained politically calm throughout the entire period from 2019 through the imposition of the 2020 National Security Law",
              "Hong Kong's 2019–20 protests successfully secured full universal suffrage for the territory and reversed Beijing's encroachments on Hong Kong autonomy by the end of the protest movement during 2020"
            ],
            correctAnswer: 0,
            explanation: 'Hong Kong 2019–20: extradition bill triggered protests → broader democracy movement → 2020 National Security Law ended large-scale protest.'
          }
        ]
      }
    },
    {
      id: 'whc4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — connections vocabulary**`,
      exercise: {
        questions: [
          {
            prompt: 'The Chinese global infrastructure investment program announced in 2013 (initials: BRI).',
            answer: 'Belt and Road Initiative',
            acceptableAnswers: ['Belt and Road Initiative', 'BRI', 'Belt and Road', 'One Belt One Road', 'OBOR'],
            hint: "Roughly $1 trillion in pledged infrastructure across Asia, Africa, and parts of Europe."
          },
          {
            prompt: "The Swedish teen activist whose 2018 'Fridays for Future' school strikes spread globally.",
            answer: 'Greta Thunberg',
            acceptableAnswers: ['Greta Thunberg', 'Thunberg'],
            hint: "Born 2003; addressed the UN Climate Action Summit in 2019 ('How dare you?')."
          },
          {
            prompt: 'The protest movement that exploded globally in 2020 after the Minneapolis killing of George Floyd (initials: BLM).',
            answer: 'Black Lives Matter',
            acceptableAnswers: ['Black Lives Matter', 'BLM'],
            hint: 'Originated 2013; reached global scale 2020.'
          }
        ]
      }
    },
    {
      id: 'whc4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each protest movement to the correct year of its peak global mobilization.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Occupy Wall Street and the global "We are the 99%" anti-inequality wave: ___',
            options: ['2011', '2018', '2019', '2020']
          },
          {
            label: 'Greta Thunberg\'s "Fridays for Future" climate strikes spread globally: ___',
            options: ['2011', '2018', '2019', '2020']
          },
          {
            label: 'Black Lives Matter peaks globally after the Minneapolis killing of George Floyd: ___',
            options: ['2011', '2018', '2019', '2020']
          }
        ],
        correctAnswers: ['2011', '2019', '2020'],
        hint1: 'Occupy began in September 2011.',
        hint2: 'The first "Fridays for Future" was 2018; global spread peaked in 2019.',
        hint3: 'George Floyd was killed in May 2020.',
        explanation: 'Three waves of 21st-century protest: 2011 economic, 2019 climate, 2020 racial justice.'
      }
    },
    {
      id: 'whc4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Tracing connections**`,
      exercise: {
        questions: [
          {
            question: 'Which response best traces the connections among climate change, migration, and populism in the 21st century?',
            options: [
              "Climate-related crop failures in the Sahel and Central America, combined with the Syrian war and other conflicts, drove mass refugee and economic-migrant flows; receiving-country political backlash against migration mobilized right-populist parties (AfD, FN, FIDESZ); right-populist governments then weakened international climate cooperation (e.g., Trump\'s 2017 Paris withdrawal), creating a feedback loop",
              "Climate change, migration, and populism are entirely unrelated 21st-century phenomena with no causal connections of any kind among them in any major region of the world during the entire 21st-century period",
              "Climate change has the only causal direction in the 21st century, and migration and populism have no effect on climate cooperation or international climate policy in any direction during the entire 21st-century period",
              "Migration is the only causal driver in the 21st century, and climate change and populism are downstream consequences of migration with no independent causal role of their own during the entire 21st-century period"
            ],
            correctAnswer: 0,
            explanation: 'The full connection — climate → migration → populism → weakened climate cooperation → worsened climate — is the canonical AP feedback-loop framing.'
          },
          {
            question: 'Which best demonstrates AP "complexity" by showing how 21st-century international institutions performed unevenly on different challenges?',
            options: [
              'International institutions performed unevenly: the WHO coordinated rapid COVID-19 vaccine development and distribution but was criticized for early deference to China; the UN Security Council was paralyzed on Russia by Russian vetoes after 2022; the IPCC produced authoritative climate science but the Paris Agreement\'s nationally determined contributions remain insufficient',
              'International institutions performed identically on all 21st-century challenges with no meaningful variation in effectiveness across different policy domains during the entire period from 2000 to the present day',
              'International institutions had no role in addressing any 21st-century challenge during the entire period from 2000 to the present day in any policy domain across pandemics, climate, security, or trade',
              'International institutions completely solved every 21st-century challenge with full international cooperation across pandemics, climate, security, and trade during the entire period from 2000 to today'
            ],
            correctAnswer: 0,
            explanation: 'AP "complexity" rewards naming the uneven performance of institutions across challenges (WHO worked on vaccines but missed early COVID; UNSC paralyzed by veto; IPCC strong, Paris weak).'
          }
        ]
      }
    }
  ]
}
