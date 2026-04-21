export const whGlobalizationTechPart2Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt2-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Multinational corporations and the global supply chain |
| Free trade agreements: NAFTA (1994), EU Single Market (1993), ASEAN |
| Financialization and the dollar system after 1971 |
| Foreign direct investment and offshoring |

> Key idea: After 1971, the world economy reorganized around floating exchange rates, multinational corporations, and globally distributed supply chains. Production was unbundled — design in one country, components in many, assembly in another, sales everywhere.
      `
    },
    {
      id: 'whgt2-content',
      type: 'text' as const,
      content: `
## Multinational Corporations (MNCs)

| Period | MNC pattern |
|---|---|
| Pre-1945 | Vertically integrated — controlled raw material extraction (oil, rubber, bananas) |
| 1945–1980 | Production mostly in home country; sales offices abroad (GM, Ford, Sony) |
| 1980–2000 | Global supply chains — Apple designs in Cupertino, components from Korea/Taiwan/Japan, assembly in China, sold worldwide |
| 2000–today | "Triangle trade" — components made in Asia, assembled in China, sold to U.S. and Europe; data and finance flow back |

## Major Free Trade Agreements

| Agreement | Year | Members | Significance |
|---|---|---|---|
| EEC / EU Single Market | 1957 / 1993 | Western European democracies | Customs union → single market with free movement of goods, capital, labor |
| ASEAN | 1967 | Southeast Asian states | Originally anti-communist; later economic cooperation |
| Maastricht Treaty | 1992 | EU members | Created the Euro currency (introduced 1999/2002) |
| NAFTA | 1994 | U.S., Canada, Mexico | Trilateral free trade; later replaced by USMCA (2020) |
| WTO | 1995 | 164 members today | Binding global trade rules |
| China joins WTO | 2001 | — | China integrated into rules-based global trade |

## Financialization and the Dollar System After 1971

| Feature | Description |
|---|---|
| Floating exchange rates | After Nixon Shock 1971; major currencies float freely against the dollar |
| Petrodollar recycling | After 1973 oil shock, OPEC oil priced in dollars; oil revenues parked in U.S./European banks |
| Eurodollar markets | Dollars held outside the U.S.; lent globally without U.S. regulation |
| Capital account liberalization | 1980s–90s: capital controls dismantled in most major economies |
| Derivatives markets | Trillions in interest-rate swaps, currency forwards, credit default swaps |
| 2008 Global Financial Crisis | Subprime mortgage collapse → cascading global crisis; G-20 emerges as crisis-management forum |

## Foreign Direct Investment and Offshoring

| Decade | Pattern |
|---|---|
| 1960s–70s | U.S. firms open European subsidiaries; Japanese auto firms open U.S. plants in 1980s |
| 1980s–90s | Maquiladoras in Mexico; export processing zones in Asia |
| 1990s–2000s | China becomes "factory of the world" after 2001 WTO accession |
| 2000s–10s | Services offshored too — Indian IT outsourcing, Filipino call centers |
| 2020s | Some "reshoring" and "friend-shoring" after COVID-19 supply chain disruptions |

- **Key takeaway:** The MNC + global supply chain + dollar-based financial system together define post-1971 globalization. AP prompts often ask whether globalization "made workers worse off" — your answer should distinguish between consumers (gained from cheaper goods), workers in offshoring countries (gained jobs), workers in deindustrializing regions (lost jobs and wages), and shareholders (gained capital returns).
      `
    },
    {
      id: 'whgt2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — MNCs and supply chains**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the post-1980 transformation of multinational corporations?',
            options: [
              'A shift from vertically integrated firms producing mostly in their home country toward globally distributed supply chains in which design, components, and assembly are sourced from different countries based on cost and capability',
              'A shift away from international production back to fully domestic manufacturing in home countries with no involvement in foreign component sourcing or foreign assembly operations after 1980',
              'A shift toward state ownership of all multinational corporations by their home governments with elimination of private shareholder ownership of large firms operating across borders after 1980',
              'A shift away from manufacturing entirely toward purely financial firms with no physical production of goods of any kind across all major multinational firms after 1980'
            ],
            correctAnswer: 0,
            explanation: 'Post-1980 MNCs are defined by globally unbundled production. Apple is the canonical example: U.S. design, Asian components, Chinese assembly, global sales.'
          },
          {
            question: 'Which 1994 trilateral free trade agreement linked the United States, Canada, and Mexico?',
            options: ['NAFTA', 'EU', 'ASEAN', 'WTO'],
            correctAnswer: 0,
            explanation: 'NAFTA: North American Free Trade Agreement, in force January 1, 1994. Replaced by USMCA in 2020.'
          }
        ]
      }
    },
    {
      id: 'whgt2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — globalization vocabulary**`,
      exercise: {
        questions: [
          {
            prompt: 'A firm with operations and assets in multiple countries — abbreviation: MNC.',
            answer: 'multinational corporation',
            acceptableAnswers: ['multinational corporation', 'MNC', 'multinational corporations', 'MNCs'],
            hint: 'Apple, Toyota, Samsung, and ExxonMobil are all examples.'
          },
          {
            prompt: 'The 1992 EU treaty that created the Euro and deepened European political union.',
            answer: 'Maastricht Treaty',
            acceptableAnswers: ['Maastricht Treaty', 'Maastricht', 'Treaty of Maastricht'],
            hint: 'Signed in a Dutch city.'
          },
          {
            prompt: 'The U.S. president who ended dollar-gold convertibility in August 1971 (the "Nixon Shock").',
            answer: 'Richard Nixon',
            acceptableAnswers: ['Richard Nixon', 'Nixon'],
            hint: 'Republican; resigned in 1974 after Watergate.'
          }
        ]
      }
    },
    {
      id: 'whgt2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the decade it most clearly belongs to.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Nixon ends dollar-gold convertibility, dismantling fixed Bretton Woods exchange rates: ___',
            options: ['1960s', '1970s', '1990s', '2000s']
          },
          {
            label: 'NAFTA enters into force; EU Single Market launches; WTO is founded the next year: ___',
            options: ['1960s', '1970s', '1990s', '2000s']
          },
          {
            label: 'China joins the WTO and becomes the global factory; outsourcing of services to India accelerates: ___',
            options: ['1960s', '1970s', '1990s', '2000s']
          }
        ],
        correctAnswers: ['1970s', '1990s', '2000s'],
        hint1: 'The Nixon Shock was August 1971.',
        hint2: 'NAFTA was 1994; EU Single Market 1993; WTO 1995.',
        hint3: 'China joined WTO in 2001.',
        explanation: 'Three pivotal decades: 1970s ended the gold standard, 1990s built the modern free-trade architecture, 2000s integrated China into the system.'
      }
    },
    {
      id: 'whgt2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Distributive effects of globalization**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates AP "complexity" in addressing whether post-1980 globalization "helped" or "hurt" workers?',
            options: [
              'Post-1980 globalization had divergent distributive effects: consumers gained from cheaper goods, workers in offshoring destinations gained manufacturing jobs, workers in deindustrializing regions lost stable employment and wages, and capital owners gained from rising returns',
              'Post-1980 globalization helped all workers everywhere with no negative distributive effects of any kind on any group of workers in any region of the world during the entire period from 1980 to the present day',
              'Post-1980 globalization hurt all workers everywhere with no positive effects on any group of workers in any region of the world during the entire period from 1980 to the present day',
              'Post-1980 globalization had no measurable distributive effects on any group of workers anywhere and produced no significant changes in wages, employment, or returns to capital in any major economy'
            ],
            correctAnswer: 0,
            explanation: 'AP "complexity" rewards distinguishing among groups: consumers, offshoring-destination workers, deindustrializing workers, and capital owners had different experiences.'
          },
          {
            question: 'Which best explains why the 2008 Global Financial Crisis was global rather than confined to the United States, where the subprime mortgage market originated?',
            options: [
              'European, Asian, and Middle Eastern banks held trillions in U.S. mortgage-backed securities and credit derivatives, so when U.S. housing prices fell, balance sheets across the entire global banking system became impaired',
              'The 2008 Global Financial Crisis was actually confined entirely to the U.S. economy and produced no measurable spillovers into the European, Asian, or any other major regional banking system at any point',
              'European, Asian, and Middle Eastern banks held no U.S. financial assets in 2008 and were entirely insulated from any spillovers from the U.S. subprime mortgage market collapse during the crisis',
              'The 2008 Global Financial Crisis was caused entirely by the European Central Bank without any role for the U.S. subprime mortgage market or U.S. financial regulators in any aspect of the crisis'
            ],
            correctAnswer: 0,
            explanation: '2008 was global because dollar-denominated U.S. mortgage assets were held throughout global banking. This is the canonical AP example of financial globalization\'s contagion risks.'
          }
        ]
      }
    }
  ]
}
