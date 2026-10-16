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
| Multinational corporations and global supply chains |
| Free trade agreements: the EU, ASEAN, NAFTA, the WTO |
| Floating currencies and financial globalization after 1971 |
| Foreign direct investment and offshoring |

> Key idea: After 1971 the world economy reorganized around floating exchange rates, multinational corporations and globally distributed supply chains. Production was unbundled: design in one country, components in several others, assembly in another, and sales everywhere. KC-6.3.I.E describes the result: knowledge economies grew in some regions "while industrial production and manufacturing were increasingly situated in Asia and Latin America."
      `
    },
    {
      id: 'whgt2-content',
      type: 'text' as const,
      content: `
## Multinational Corporations (MNCs)

| Period | MNC pattern |
|---|---|
| Before 1945 | Firms controlled raw materials abroad: oil, rubber, bananas |
| 1945–1980 | Firms either exported from home (Sony) or built separate factories in each major market to serve local customers (Ford, Nestlé); production was not yet split into cross-border supply chains |
| 1980–2001 | Global supply chains: a computer designed in California could be assembled in China from parts made in South Korea, Taiwan and Japan, then sold worldwide |

CED Topic 9.4 names Nestlé (Switzerland), Nissan (Japan) and Mahindra and Mahindra (India) as examples of multinationals; the list is a reminder that MNCs were not only American.

## Major Free Trade Agreements

| Agreement | Year | Members | Significance |
|---|---|---|---|
| European Economic Community / EU single market | 1957 / 1993 | Western European states | Customs union, then a single market with free movement of goods, capital and labor |
| ASEAN | 1967 | Southeast Asian states | Founded partly as an anti-communist grouping; later focused on economic cooperation |
| Maastricht Treaty | 1992 | EU members | Created the European Union and planned the euro (launched in 1999 for banking and financial markets) |
| NAFTA | 1994 | United States, Canada, Mexico | Trilateral free trade in North America |
| WTO | 1995 | Founding agreement concluded by the 123 governments of the Uruguay Round in 1994 | Binding global trade rules; China joined in 2001 |
      `
    },
    {
      id: 'whgt2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — MNCs and trade blocs**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the transformation of multinational corporations between 1980 and 2001?',
            options: [
              'A move back to domestic manufacturing, as firms closed overseas plants and ended foreign sourcing',
              'A move toward state ownership, as home governments bought out the shareholders of large firms',
              'A shift from producing mainly at home toward supply chains that spread design, parts and assembly across countries',
              'A move away from manufacturing, as major multinationals sold their factories and stopped making goods'
            ],
            correctAnswer: 2,
            explanation: 'After 1980 multinationals unbundled production across borders: design in one country, components in several, assembly in another. They did not bring production home, they were not nationalized, and they kept making goods.'
          },
          {
            question: 'What did the EU single market, ASEAN and NAFTA have in common?',
            options: [
              'They were military alliances formed to contain the spread of communism',
              'They were regional blocs that cut barriers among members',
              'They were agencies that lent money to countries in a debt crisis',
              'They were cartels that set world prices for their members\' oil exports'
            ],
            correctAnswer: 1,
            explanation: 'The EU, ASEAN and NAFTA reduced barriers to trade among their members, part of the spread of free-market principles named in KC-6.3.II.B. They were not alliances, lenders like the IMF, or cartels like OPEC.'
          }
        ]
      }
    },
    {
      id: 'whgt2-finance',
      type: 'text' as const,
      content: `
## Floating Currencies and Financial Globalization After 1971

| Feature | Description |
|---|---|
| Floating exchange rates | After the Nixon Shock of 1971, major currencies floated against the dollar |
| Petrodollar recycling | After the 1973 oil shock, oil exporters deposited their dollar earnings in Western banks, which lent them on, often to developing countries |
| Latin American debt crisis | In 1982 Mexico could not repay its loans; the IMF lent money on condition of spending cuts and market reforms |
| Capital account liberalization | In the 1980s and 1990s most major economies dismantled controls on moving money across borders |
| Asian financial crisis | In 1997 short-term foreign capital fled Thailand, Indonesia and South Korea; currencies collapsed and the IMF imposed austerity conditions |

## Foreign Direct Investment and Offshoring

| Period | Pattern |
|---|---|
| 1960s–70s | U.S. firms opened European subsidiaries; Japanese automakers opened U.S. plants in the 1980s |
| From 1965 | Mexico's Border Industrialization Program created **maquiladoras**, assembly plants near the U.S. border that imported parts duty-free and exported finished goods; they multiplied after the 1982 debt crisis and again after NAFTA (1994) |
| 1980s–90s | Export processing zones spread across Asia; China's special economic zones drew foreign investment |
| 1990s | Services began to move too: Indian software firms in Bangalore worked for clients in the United States and Europe |

> **Who gained and who lost:** Consumers gained cheaper goods; workers in Mexico, China and Southeast Asia gained factory jobs, often at low wages; workers in older industrial regions of the United States and Europe lost jobs; shareholders gained higher returns. AP rewards answers that separate these groups.
      `
    },
    {
      id: 'whgt2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each development to the decade it belongs to.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Nixon ends dollar-gold convertibility, dismantling fixed Bretton Woods exchange rates: ___',
            options: ['1960s', '1970s', '1990s']
          },
          {
            label: 'NAFTA takes effect, the EU single market launches, and the WTO is founded: ___',
            options: ['1960s', '1970s', '1990s']
          },
          {
            label: 'Mexico launches its Border Industrialization Program, creating the first maquiladoras: ___',
            options: ['1960s', '1970s', '1990s']
          }
        ],
        correctAnswers: ['1970s', '1990s', '1960s'],
        hint1: 'The Nixon Shock was August 1971.',
        hint2: 'NAFTA 1994, the single market 1993, the WTO 1995.',
        hint3: 'The program began in 1965, long before NAFTA.',
        explanation: 'The 1960s saw the first maquiladoras (1965); the 1970s ended fixed exchange rates; the 1990s built the modern free-trade architecture.'
      }
    },
    {
      id: 'whgt2-takeaway',
      type: 'text' as const,
      content: `
## Putting the Processes Together

The three processes reinforced each other. Floating currencies and open capital markets let money move quickly to wherever production was cheapest; trade agreements lowered the tariffs on goods crossing borders; and multinationals used both to build supply chains that ran through Mexico, China and Southeast Asia. The same openness made economies vulnerable: when foreign lenders pulled money out of Mexico in 1994 or East Asia in 1997, crises spread from one country to its neighbors.

- **Key takeaway:** Post-1971 globalization rested on three linked processes: multinational supply chains, regional and global trade rules, and a dollar-based financial system with mobile capital.
      `
    },
    {
      id: 'whgt2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Effects of integration**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates complexity in evaluating whether globalization after 1980 helped or hurt workers?',
            options: [
              'It helped nearly all workers everywhere, since cheaper goods and new export jobs raised wages in rich and poor countries alike',
              'Effects diverged, as consumers and new factory regions gained while older industrial regions lost jobs',
              'It hurt nearly all workers everywhere, since offshoring cut wages in rich countries and paid too little abroad to help anyone',
              'It had little effect on workers, since changes in wages and jobs came almost entirely from domestic policy and automation'
            ],
            correctAnswer: 1,
            explanation: 'A complexity answer separates groups: consumers, workers in new manufacturing regions, workers in deindustrializing regions, and capital owners fared differently. The other options treat all workers alike or deny any effect.'
          },
          {
            question: 'Why did the 1997 financial crisis that began in Thailand spread quickly to Indonesia, South Korea and other economies?',
            options: [
              'Foreign investors who had poured short-term money into the region pulled it out of many countries at once',
              'The crisis began in the United States and reached Asia only through a collapse in U.S. purchases of rice',
              'The region\'s governments had banned foreign investment, so their banks could not borrow abroad',
              'A war between Thailand and its neighbors closed the region\'s ports to international shipping'
            ],
            correctAnswer: 0,
            explanation: 'Open capital markets had drawn large short-term inflows into East Asia; when confidence broke in Thailand, investors withdrew from similar economies, and currencies collapsed. The crisis began in Asia, the region was open to foreign money rather than closed, and no regional war occurred.'
          }
        ]
      }
    }
  ]
}
