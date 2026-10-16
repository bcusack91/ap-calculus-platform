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
| The information revolution, from the transistor to the Web |
| Why technological change accelerated after 1945 |

> Key idea: Globalization after 1945 was not the first global integration (the Silk Roads, the Atlantic system, and the 1870–1914 wave came before it), but it was the deepest. It rested on three pillars: U.S.-led economic institutions, ever-cheaper transportation and communications, and multinational corporations operating across borders. The exam's short-answer and document-based questions cover developments through 2001, so this lesson runs to 2001.
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
| **Cultural** | Global media (Hollywood, Bollywood, the BBC), English as a common language of business, global brands, the Olympics and the World Cup |
| **Political** | International organizations (UN, WTO, IMF, World Bank), NGOs (Amnesty International, Greenpeace), trade blocs (EU, NAFTA, ASEAN) |
| **Technological** | Container shipping (1956), communications satellites (1962), cellular phones (1980s–90s), the internet (1990s) |
| **Demographic** | Labor migration, refugee flows, brain drain, rapid growth of cities |

## The Bretton Woods Order (1944)

In July 1944, before World War II had ended, delegates from 44 Allied nations met at Bretton Woods, New Hampshire, to design the postwar economic order. The conference created both the IMF and the World Bank, which began operating in 1945–46.

| Institution | Created | Purpose |
|---|---|---|
| **International Monetary Fund (IMF)** | 1944 (Bretton Woods) | Stabilize exchange rates; lend to countries with balance-of-payments crises |
| **International Bank for Reconstruction and Development (World Bank)** | 1944 (Bretton Woods) | Finance European reconstruction; later, development lending to poorer countries |
| **General Agreement on Tariffs and Trade (GATT)** | 1947 | Negotiate step-by-step tariff reductions through "rounds" |
| **World Trade Organization (WTO)** | 1995 | Successor to GATT, with binding dispute settlement and a broader scope |

- **Key rule of the original system:** Currencies were pegged to the U.S. dollar, and the dollar was pegged to gold at \\$35 per ounce. This held until 1971, when President Nixon ended dollar-gold convertibility (the "Nixon Shock").
      `
    },
    {
      id: 'whgt1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Bretton Woods**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the original purpose of the International Monetary Fund (IMF), created at Bretton Woods in 1944?',
            options: [
              'To finance long-term infrastructure projects in poorer countries through low-interest loans repaid over decades',
              'To negotiate tariff reductions among member states through periodic multilateral bargaining rounds',
              'To stabilize exchange rates and lend short-term to members facing balance-of-payments crises',
              'To settle trade disputes among member states through binding arbitration backed by sanctions'
            ],
            correctAnswer: 2,
            explanation: 'The IMF kept exchange rates stable and lent short-term to members in balance-of-payments trouble, so they would not need to devalue or restrict trade. The other options describe the World Bank, GATT and the WTO.'
          },
          {
            question: 'Which event most directly ended the original Bretton Woods system of fixed exchange rates anchored by dollar-gold convertibility?',
            options: [
              'The 1973 OPEC oil embargo against states that supported Israel',
              'The 1995 founding of the WTO to replace the GATT system of trade rounds',
              'The 1971 U.S. refusal to swap paper money for gold',
              'The 1989 fall of the Berlin Wall and the end of Europe\'s division'
            ],
            correctAnswer: 2,
            explanation: 'In August 1971 Nixon stopped redeeming dollars for gold at \\$35 per ounce, ending the gold-anchored system and pushing the world toward floating currencies. The other events mattered but did not end Bretton Woods.'
          }
        ]
      }
    },
    {
      id: 'whgt1-info',
      type: 'text' as const,
      content: `
## The Information Revolution

KC-6.1.I.A: "New modes of communication—including radio communication, cellular communication, and the internet—as well as transportation, including air travel and shipping containers, reduced the problem of geographic distance."

| Year | Breakthrough | Significance |
|---|---|---|
| 1920s | Commercial radio broadcasting | News and music reach mass audiences instantly |
| 1947 | Bell Labs invents the transistor | Foundation of later electronics |
| 1958 | The Boeing 707 jet airliner enters regular service | Faster, cheaper long-distance air travel begins |
| 1962 | Telstar, the first satellite to relay live television across the Atlantic | Live television across the Atlantic |
| 1969 | ARPANET, a U.S. defense-funded network, sends its first message | Precursor to the internet |
| 1971 | Intel 4004 microprocessor | A computer on a single chip |
| 1980s–90s | Cellular phone networks spread | Communication without wires, first in wealthy countries, then worldwide |
| 1989 | Tim Berners-Lee proposes the World Wide Web at CERN | Hypertext on the internet |
| 1990s | Commercial web and e-commerce (Amazon and eBay in 1995, Alibaba in 1999) | Online commerce crosses borders |
      `
    },
    {
      id: 'whgt1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Globalization institutions and tools**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1944 conference in New Hampshire that designed the postwar economic order and created the IMF and World Bank.',
            answer: 'Bretton Woods',
            acceptableAnswers: ['Bretton Woods', 'Bretton Woods Conference'],
            hint: 'Held at the Mount Washington Hotel.'
          },
          {
            prompt: 'The 1995 successor to GATT with binding dispute-settlement authority.',
            answer: 'World Trade Organization',
            acceptableAnswers: ['World Trade Organization', 'WTO'],
            hint: 'Common abbreviation: WTO.'
          },
          {
            prompt: 'The innovation, introduced in 1956, that drastically cut shipping costs by standardizing cargo handling.',
            answer: 'containerization',
            acceptableAnswers: ['containerization', 'shipping containers', 'container shipping', 'the shipping container'],
            hint: 'Standardized steel boxes that move between ships, trucks and trains.'
          }
        ]
      }
    },
    {
      id: 'whgt1-why',
      type: 'text' as const,
      content: `
## Why Technological Change Accelerated After 1945

| Driver | Mechanism |
|---|---|
| Cold War defense research | Government funding for ARPANET, satellites, jet engines and computing; much of it later moved into civilian use |
| University expansion | The GI Bill in the United States; postwar university growth in Europe and East Asia |
| Falling transportation costs | Containerization (1956 onward) and jet aircraft cut the cost of moving goods and people |
| Falling communication costs | Satellites, undersea cables, then the internet |
| Cheap energy | KC-6.1.I.D: petroleum and nuclear power "raised productivity and increased the production of material goods" |

> **Energy in brief:** Oil replaced coal as the leading fuel for transport and much of industry after World War II, and the first nuclear power stations opened in the 1950s. The 1973 oil embargo showed how dependent industrial economies had become on imported petroleum.

- **Key takeaway:** When a prompt asks why globalization accelerated after 1945, give a two-part answer: an institutional framework (Bretton Woods, GATT) plus technologies that made distance cheaper (containers, jets, satellites, computing).
      `
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
              'Individual entrepreneurs drove it, and international institutions and state-funded technologies such as satellites played little role',
              'The Soviet Union drove it by spreading trade and transport networks worldwide through Comecon and its partners in the developing world',
              'Bretton Woods institutions stabilized currencies and lowered tariffs, and containers, jets and satellites cut the cost of distance',
              'The end of colonial empires drove it, as new states opened markets that Europe had closed, with technology playing only a small role'
            ],
            correctAnswer: 2,
            explanation: 'A strong answer names both the institutional framework (Bretton Woods, GATT) and the technologies that made distance cheaper. The other options leave out one of the two or credit the wrong actor.'
          },
          {
            question: 'Which statement best explains why containerization, introduced in 1956, transformed global trade?',
            options: [
              'It mainly sped up military logistics, and its civilian use stayed limited because ports refused to build the cranes it needed',
              'It cut port handling costs and theft so sharply that firms could source parts worldwide, making long-distance supply chains practical',
              'It lowered costs only on short coastal routes, so manufacturers kept producing close to home until long after 2001',
              'It raised costs so much at first that air freight replaced ships for most manufactured goods by the 1970s'
            ],
            correctAnswer: 1,
            explanation: 'Standard containers moved straight from ships to trucks and trains, slashing handling costs and theft and making long-distance supply chains cheap. Containers became standard in civilian shipping by the 1970s, and ocean freight, not air freight, still carries most manufactured goods.'
          }
        ]
      }
    }
  ]
}
