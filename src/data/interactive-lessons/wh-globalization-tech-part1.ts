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
              'To stabilize exchange rates and lend short-term to members facing balance-of-payments crises',
              'To finance long-term infrastructure projects in developing countries through low-interest loans repaid over decades',
              'To negotiate step-by-step tariff reductions among member states through periodic multilateral bargaining rounds',
              'To settle trade disputes among member states through binding arbitration backed by enforceable sanctions on violators'
            ],
            correctAnswer: 0,
            explanation: 'IMF = exchange-rate stability + short-term balance-of-payments lending, so members would not need to devalue or impose trade restrictions. The other options describe the World Bank, GATT, and WTO respectively.'
          },
          {
            question: 'Which event most directly ended the original Bretton Woods system of fixed exchange rates anchored by dollar-gold convertibility?',
            options: [
              'The 1971 "Nixon Shock," in which the U.S. stopped redeeming dollars for gold at \\$35 per ounce, pushing the world toward floating currencies',
              'The 1973 OPEC oil embargo, in which Arab producers cut shipments to states backing Israel and quadrupled the dollar price of oil',
              'The 1995 founding of the World Trade Organization, which replaced GATT with a permanent trade body that had binding dispute settlement',
              'The 1989 fall of the Berlin Wall, which ended Europe\'s division, opened Eastern currency exchange, and doomed Soviet planning'
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
              'Bretton Woods institutions stabilized currencies and lowered tariffs, while containerization (1956), satellites (1962), and microprocessors (1971) slashed transport and communication costs',
              'Globalization after 1945 was driven by individual entrepreneurs, with international institutions and state-funded technologies such as satellites and computing playing little role',
              'Globalization after 1945 was driven mainly by the Soviet Union, which spread trade and transport networks worldwide through Comecon (founded in 1949) and its partners in the developing world',
              'Globalization after 1945 resulted mainly from the end of colonial empires, as newly independent states opened markets that European powers had closed, with technology playing only a small role'
            ],
            correctAnswer: 0,
            explanation: 'AP rewards naming both the institutional framework (Bretton Woods) AND the technological enabler (containers + satellites + computing).'
          },
          {
            question: 'Which best explains why containerization (1956 onward) was a more transformative innovation for global trade than its inventor Malcom McLean initially anticipated?',
            options: [
              'Container shipping cut port handling costs by roughly 90% and reduced theft, letting firms source parts worldwide cheaply and enabling global supply chains and offshoring',
              'Container shipping mainly sped up military logistics, and its civilian use stayed limited because most ports refused to invest in the cranes and docks it required',
              'Container shipping lowered costs only on short coastal routes, so manufacturers kept producing near home markets and long-distance supply chains grew only after 2000',
              'Container shipping raised costs at first because of the expensive new equipment it needed, which slowed global trade until air freight replaced ships for most manufactured goods'
            ],
            correctAnswer: 0,
            explanation: 'Containerization is the canonical AP example of a transportation innovation that enabled global supply chains by collapsing port costs. Containers did become standard in civilian shipping by the 1970s, and ocean freight, not air freight, still carries most manufactured goods.'
          }
        ]
      }
    }
  ]
}
