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
| China's economic rise and global investment |
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

## China's Economic Rise and Global Investment

| Stage | Development |
|---|---|
| 1978 onward | Deng Xiaoping's market reforms opened China to foreign investment and private enterprise |
| 1980s–1990s | Special economic zones made coastal China a center of export manufacturing |
| 2001 | China joined the World Trade Organization, deepening its integration into global trade |
| 2010 | China passed Japan as the world's second-largest economy |
| 2013 onward | The Belt and Road Initiative financed ports, railways and power plants across Asia, Africa and Europe |
| Climate | China became the world's largest emitter of greenhouse gases, making it central to climate negotiations |

## The Role of International Institutions

| Institution | 21st-century test |
|---|---|
| UN Security Council | Russian and Chinese vetoes blocked action on the Syrian civil war |
| WHO | Coordinated COVID response; criticized for early China deference |
| WTO | Dispute resolution paralyzed; Trump blocked appellate appointments |
| G-20 | Coordinated 2008 GFC response; less effective on subsequent crises |
| IPCC | Authoritative climate science; informs Paris Agreement targets |
| ICC | Permanent court for genocide and war crimes (2002); limited enforcement reach |

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
            question: 'Which development best explains China\'s emergence as a leading manufacturing economy by the early 21st century?',
            options: [
              'A return to Maoist central planning that rejected foreign investment and private firms after 1989',
              'Market reforms after 1978 and integration into global trade, including WTO entry in 2001',
              'Oil export earnings that paid for state-owned heavy industry in the western provinces',
              'A ban on exports that kept Chinese factories producing only for the domestic market'
            ],
            correctAnswer: 1,
            explanation: 'Deng Xiaoping\'s market reforms, special economic zones and later WTO membership drew foreign investment and turned China into a center of export manufacturing, part of a wider late-20th-century turn toward economic liberalization. China did not return to Maoist planning, its growth was not built on oil exports, and its factories grew by exporting rather than serving only the home market.'
          },
          {
            question: "Which best characterizes the 2019–20 Hong Kong protests?",
            options: [
              "Protests against an extradition bill grew into a broad pro-democracy movement until Beijing's June 2020 National Security Law effectively ended mass protest",
              "Mass protests demanded closer integration with mainland China, and Beijing answered with a 2020 law that expanded local voting rights and autonomy",
              "Small protests over transit fares faded quickly, and the territory stayed politically calm until a 2020 law gave Hong Kong full universal suffrage",
              "Mass protests won full universal suffrage for the territory, forcing Beijing to withdraw its 2020 National Security Law within weeks of passing it"
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
              "Climate-linked crop failures and wars such as Syria's drove migration, backlash fed right-populism, and populist governments weakened climate cooperation (the 2017 U.S. Paris exit)",
              "Climate change, migration, and populism are unrelated 21st-century trends, each with its own separate local causes and no meaningful causal links among them in any region of the world",
              "Climate change drives migration and populism, but causation runs only one way (from climate to politics), since populist governments have not affected climate policy",
              "Migration is the sole driver, since climate change and populism are both downstream results of migration with no independent causal role of their own in the 21st century"
            ],
            correctAnswer: 0,
            explanation: 'The full connection — climate → migration → populism → weakened climate cooperation → worsened climate — is the canonical AP feedback-loop framing.'
          },
          {
            question: 'Which best demonstrates AP "complexity" by showing how 21st-century international institutions performed unevenly on different challenges?',
            options: [
              'Results varied, as the WHO led vaccine sharing but was faulted over China, Russian and Chinese vetoes stalled the Security Council on Syria, and Paris pledges fell short',
              'Institutions performed about equally well on every 21st-century challenge, since the same rules and voting procedures applied to pandemics, climate, security, and trade alike',
              'Institutions played almost no role in 21st-century challenges, since states handled pandemics, climate, security, and trade entirely through bilateral deals with one another',
              'Institutions fully solved each major 21st-century challenge, as the WHO, the UN Security Council, and the Paris Agreement all achieved their goals with broad cooperation'
            ],
            correctAnswer: 0,
            explanation: 'AP "complexity" rewards naming the uneven performance of institutions across challenges: the WHO co-led the COVAX vaccine-sharing effort but was criticized for early deference to China; the Security Council was blocked by Russian and Chinese vetoes on Syria; and the IPCC produced authoritative science while national Paris pledges remained insufficient.'
          }
        ]
      }
    }
  ]
}
