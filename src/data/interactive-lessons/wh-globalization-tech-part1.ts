export const whGlobalizationTechPart1Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt1-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Defining globalization: economic, cultural, political dimensions |
| The Bretton Woods order (1944): IMF, World Bank, GATT |
| The information revolution and the rise of the knowledge economy |
| Why technological change accelerated after 1945 |

> Key idea: Globalization after 1945 is not the first global integration (Silk Road, Atlantic system, 1870–1914 first wave), but it is the deepest and the most digitally mediated. The post-1945 system rests on three pillars: U.S.-led monetary institutions, ever-cheaper transportation and communications, and the diffusion of multinational corporations across borders.
      `
    },
    {
      id: 'whgt1-content',
      type: 'text' as const,
      content: `
## Defining Globalization

| Dimension | Examples |
|---|---|
| **Economic** | Cross-border trade, foreign direct investment, multinational supply chains, currency markets |
| **Cultural** | Global media (Hollywood, K-pop), English as lingua franca, global brands, sports (Olympics, FIFA) |
| **Political** | International organizations (UN, WTO, IMF, World Bank), NGOs (Amnesty, Greenpeace), trade blocs (EU, NAFTA, ASEAN) |
| **Technological** | Container shipping (1956), satellite communications (1962), the Internet (1990s), smartphones (2007) |
| **Demographic** | Global migration, refugee flows, brain drain, urbanization to mega-cities |

## The Bretton Woods Order (1944)

In July 1944 — before WWII even ended — 730 delegates from 44 Allied nations met at Bretton Woods, New Hampshire to design the postwar economic order.

| Institution | Founded | Purpose |
|---|---|---|
| **International Monetary Fund (IMF)** | 1945 | Stabilize exchange rates; lend to countries with balance-of-payments crises |
| **International Bank for Reconstruction and Development (World Bank)** | 1944 | Finance European reconstruction; later, development lending |
| **General Agreement on Tariffs and Trade (GATT)** | 1947 | Negotiate progressive tariff reductions through "rounds" |
| **World Trade Organization (WTO)** | 1995 | Successor to GATT; binding dispute resolution and broader scope |

- **Key rule of the original system:** Currencies pegged to the U.S. dollar; the dollar pegged to gold at \\$35 per ounce. This held until 1971, when Nixon ended dollar-gold convertibility ("Nixon Shock").

## The Information Revolution

| Decade | Breakthrough | Significance |
|---|---|---|
| 1947 | Bell Labs invents the transistor | Foundation of all later electronics |
| 1958 | Integrated circuit invented | Miniaturization begins |
| 1969 | ARPANET (precursor to Internet) | Packet switching demonstrated |
| 1971 | Intel 4004 microprocessor | Computer-on-a-chip |
| 1981 | IBM PC | Personal computing for offices |
| 1989 | World Wide Web invented at CERN | Hypertext on the Internet |
| 1995 | Netscape IPO; commercial Web takes off | Dot-com era begins |
| 2007 | iPhone introduced | Mobile Internet for billions |
| 2010s | Cloud computing, big data, AI | Knowledge-economy infrastructure |

## Why Technological Change Accelerated After 1945

| Driver | Mechanism |
|---|---|
| Massive U.S. defense R&D budgets | DARPA, NASA, Bell Labs all funded by Cold War priorities |
| Public university expansion | The GI Bill in the U.S.; postwar university growth in Europe and East Asia |
| Patent and copyright frameworks | Reliable global IP protection encouraged private R&D |
| Falling transportation costs | Containerization (1956 onward) cut shipping costs dramatically |
| Falling communications costs | Satellites, undersea fiber optic cables, then the Internet |

- **Key takeaway:** The post-1945 globalization wave is built on the Bretton Woods institutions plus the information revolution. Whenever an AP prompt asks "why globalization accelerated after 1945," your two-pillar answer is: U.S.-led monetary order + cheap communications and transportation.
      `
    },
    {
      id: 'whgt1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Bretton Woods**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the original purpose of the International Monetary Fund (IMF) at its 1944 founding?',
            options: [
              'To stabilize exchange rates among member currencies and to lend short-term to countries facing balance-of-payments crises so that they would not need to devalue or impose trade restrictions',
              'To finance long-term infrastructure projects in developing countries through low-interest loans repayable over decades from project revenues collected in local currencies',
              'To negotiate progressive tariff reductions among member states through periodic multilateral negotiating rounds organized over many years of diplomacy',
              'To resolve trade disputes among member states through binding arbitration with the authority to impose enforceable sanctions on noncompliant member governments'
            ],
            correctAnswer: 0,
            explanation: 'IMF = exchange-rate stability + balance-of-payments lending. The other options describe the World Bank, GATT, and WTO respectively.'
          },
          {
            question: 'Which event most directly ended the original Bretton Woods system of fixed exchange rates anchored by dollar-gold convertibility?',
            options: [
              'The 1971 "Nixon Shock," in which President Nixon unilaterally ended the U.S. commitment to convert dollars into gold at \\$35 per ounce, pushing the world toward floating exchange rates',
              'The 1973 OPEC oil embargo, in which Arab oil producers cut shipments to states that supported Israel during the Yom Kippur War, quadrupling global oil prices in a few months',
              'The 1995 founding of the World Trade Organization, which formally replaced the General Agreement on Tariffs and Trade with a permanent trade body with binding dispute resolution',
              'The 1989 fall of the Berlin Wall, which marked the symbolic end of the Cold War division of Europe and the imminent collapse of the Soviet bloc planned economies'
            ],
            correctAnswer: 0,
            explanation: 'August 15, 1971 — Nixon ended dollar-gold convertibility, ending the gold-anchored Bretton Woods system. The other events mattered but did not end Bretton Woods.'
          }
        ]
      }
    },
    {
      id: 'whgt1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Globalization institutions**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1944 conference in New Hampshire that designed the postwar economic order.',
            answer: 'Bretton Woods',
            acceptableAnswers: ['Bretton Woods', 'Bretton Woods Conference'],
            hint: 'Located at the Mount Washington Hotel in New Hampshire.'
          },
          {
            prompt: 'The 1995 successor to GATT with binding dispute resolution authority.',
            answer: 'World Trade Organization',
            acceptableAnswers: ['World Trade Organization', 'WTO'],
            hint: 'Common abbreviation: WTO.'
          },
          {
            prompt: 'The 1956 innovation that drastically cut shipping costs by standardizing cargo handling.',
            answer: 'containerization',
            acceptableAnswers: ['containerization', 'shipping containers', 'container shipping', 'the shipping container'],
            hint: 'Standardized steel boxes that can move between ships, trucks, and trains.'
          }
        ]
      }
    },
    {
      id: 'whgt1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each Bretton Woods–era institution to its primary function.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Stabilize exchange rates and lend short-term to balance-of-payments crises: ___',
            options: ['IMF', 'World Bank', 'GATT', 'WTO']
          },
          {
            label: 'Finance long-term reconstruction and (later) development projects: ___',
            options: ['IMF', 'World Bank', 'GATT', 'WTO']
          },
          {
            label: 'Negotiate progressive tariff reductions through multilateral "rounds": ___',
            options: ['IMF', 'World Bank', 'GATT', 'WTO']
          }
        ],
        correctAnswers: ['IMF', 'World Bank', 'GATT'],
        hint1: 'Short-term lending and exchange rates is the IMF.',
        hint2: 'Long-term reconstruction and development is the World Bank.',
        hint3: 'Tariff reductions through "rounds" is GATT (which the WTO replaced in 1995).',
        explanation: 'The Bretton Woods institutions divide labor: IMF handles short-term monetary crises, World Bank handles long-term development lending, GATT/WTO handles trade rules.'
      }
    },
    {
      id: 'whgt1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Why globalization accelerated**`,
      exercise: {
        questions: [
          {
            question: 'Which response best explains why globalization accelerated after 1945?',
            options: [
              'U.S.-led Bretton Woods institutions stabilized currency markets and lowered tariffs, while parallel innovations in containerization (1956), satellites (1962), and computing (1971 microprocessor onward) drastically cut transportation and communications costs',
              'Globalization after 1945 was driven entirely by individual entrepreneurs without any role for international institutions, transportation infrastructure, or computing technology developed by states or large firms during the Cold War',
              'Globalization after 1945 was primarily caused by the Soviet Union exporting communism through international organizations and transportation infrastructure built across the Eastern Bloc economies',
              'Globalization after 1945 happened by accident with no institutional, technological, or geopolitical drivers and produced no meaningful economic effects on either the United States or any other major world economy'
            ],
            correctAnswer: 0,
            explanation: 'AP rewards naming both the institutional framework (Bretton Woods) AND the technological enabler (containers + satellites + computing).'
          },
          {
            question: 'Which best explains why containerization (1956 onward) was a more transformative innovation for global trade than its inventor Malcom McLean initially anticipated?',
            options: [
              'Container shipping cut port handling costs by roughly 90% and reduced theft, allowing manufacturers to source components from anywhere in the world cheaply, which in turn enabled global supply chains and the relocation of manufacturing to lower-wage countries',
              'Container shipping made cross-border trade prohibitively expensive and slow, which actually reversed the trend toward global supply chains and forced manufacturers to keep all production in their home countries throughout the late 20th century',
              'Container shipping had no measurable effect on port handling costs or shipping times and produced no changes in the geography of global manufacturing during the period from 1956 to the end of the 20th century',
              'Container shipping was used only for military cargo during the Cold War and never became a significant component of civilian trade among non-military commercial shippers in any region of the world'
            ],
            correctAnswer: 0,
            explanation: 'Containerization is the canonical AP example of a transportation innovation that enabled global supply chains by collapsing port costs.'
          }
        ]
      }
    }
  ]
}
