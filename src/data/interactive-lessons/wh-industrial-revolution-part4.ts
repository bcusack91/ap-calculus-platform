export const whIndustrialRevolutionPart4Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir4-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 4 of 7 — Global Spread of Industrialization**

---

> 🔑 **Key Concept:** Industrialization spread from Britain to continental Europe, the United States, and Japan through technology transfer, investment, and deliberate state policies. Each country industrialized through a different path, and AP questions evaluate which factors were common versus which factors varied across national contexts.
      `
    },
    {
      id: 'whir4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'German industrialization\'s state-directed model differed from British industrialization in that:',
            options: [
              'Germany deliberately used state power (Zollverein customs union, railroad investment, protectionist tariffs, technical education) to accelerate and direct industrialization, while British industrialization was primarily market-driven by private entrepreneurs — demonstrating that industrialization can be achieved through either market or state-directed mechanisms',
              'German industrialization followed identical market-based methods to British industrialization',
              'Germany industrialized before Britain due to superior state capacity',
              'State-directed industrialization was always less effective than market-driven industrialization',
            ],
            correctAnswer: 0,
            explanation: 'The Britain vs. Germany comparison is AP\'s clearest example of multiple paths to industrialization: British "first industrial revolution" was largely unplanned, driven by private entrepreneurs responding to commercial incentives; German industrialization was deliberately organized by state actors (Prussian bureaucracy, Zollverein administrators, university administrators) who identified industrial development as a state goal and used state resources to achieve it. Both succeeded — but through different mechanisms.'
          },
          {
            question: 'Japanese Meiji industrialization\'s goal of "avoiding Western colonialism" demonstrates:',
            options: [
              'That industrialization and military power became survival requirements in a world where European industrial powers colonized non-industrial states — Japan observed the colonization of China (Opium Wars), India (British East India Company), and Southeast Asia and concluded that only rapid industrialization and military modernization could preserve Japanese sovereignty',
              'Japan industrialized to spread Japanese culture globally',
              'Japan had no awareness of Western colonialism when it began industrialization',
              'Japan\'s industrialization was motivated purely by commercial profit with no defensive dimension',
            ],
            correctAnswer: 0,
            explanation: 'The Meiji industrialization\'s geopolitical motivation is AP-essential: Japan didn\'t industrialize because of commercial incentive (British model) or nationalist economic competition (German model) but because the evidence of Western colonization of Asia demonstrated that non-industrial states were colonized. The "shock" of Commodore Perry\'s black ships (1853) forcing Japan to open trade demonstrated that Japan\'s pre-industrial military couldn\'t resist Western power. Industrialization was therefore an explicit survival strategy.'
          }
        ]
      }
    },
    {
      id: 'whir4-content',
      type: 'text' as const,
      content: `
## 📖 Global Spread of Industrialization

> **Spread to Continental Europe (1820s-1880s)**

| Country | Method | Key Industries | Timeline |
|---------|--------|---------------|----------|
| **Belgium** | British technicians; coal-rich Liège region | Coal, iron, textiles | 1820s-1840s |
| **France** | State investment; slower than Britain | Luxury goods, textiles, then heavy industry | 1830s-1860s |
| **German states** | Zollverein (customs union); state-sponsored railroad | Chemicals, steel, heavy industry | 1840s-1870s |
| **United States** | Abundant land, immigration, railroad expansion | Textiles (northeast), agriculture, railroads, steel | 1820s-1890s |

> **German Industrialization: State-Led Model**

Germany demonstrated that state guidance could accelerate industrialization:

- **Zollverein (1834):** Customs union eliminated tariffs between German states → larger integrated market
- **Railroad investment:** Prussian state invested heavily in railroads → connected markets → enabled heavy industry
- **Technical education:** German states invested in technical universities and vocational training → chemical and electrical industries
- **Protectionist tariffs:** Bismarck's tariff policies (1879) protected German industry from British competition

> **Japanese Meiji Industrialization: Selective Westernization**

Japan's industrialization (after 1868 Meiji Restoration) was the most deliberately state-directed:

- **Deliberate technology transfer:** Japanese government sent scholars to Europe and America to study technology, law, military organization
- **State-built industries:** Government built model factories, then sold them to private industrialists (Mitsui, Mitsubishi zaibatsu)
- **Preserved social order:** Industrialization implemented through traditional social hierarchies (emperor loyalty) rather than liberal individualism
- **Speed:** Japan industrialized in 30 years what Britain took 100 years
- **Military application:** Japanese industrialization explicitly aimed at avoiding Western colonialism

> **American Industrialization: Distinct Features**

American industrialization had unique characteristics:

- **Abundant land:** High land-to-labor ratio made labor expensive → strong incentive for labor-saving machinery
- **Immigration:** Massive European immigration (1840s-1920s) provided industrial labor force
- **Natural resources:** Coal (Pennsylvania), iron ore (Great Lakes region), cotton (South) abundant
- **Railroads:** Transcontinental railroads (1869) integrated national market; land grants subsidized construction
- **Robber baron capitalism:** Minimal government regulation; Carnegie (steel), Rockefeller (oil), JP Morgan (finance)

> **AP Comparison Anchor**

- **British vs. German industrialization:** British = market-driven, gradual, textile-first; German = state-directed, faster, heavy industry-focused
- **European vs. Japanese:** Both selectively adopted industrial technology; Japanese specifically aimed to avoid colonial domination; Europeans industrialized within global colonial system they were already part of
      `
    },
    {
      id: 'whir4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'American industrialization\'s "high land-to-labor ratio" driving labor-saving technology adoption demonstrates:',
            options: [
              'Resource endowment shapes the direction of technological innovation — when labor is scarce and expensive relative to land, innovators have strong incentives to develop labor-saving machinery; when labor is abundant and cheap, the incentive to mechanize is weaker; American industrialization therefore developed different technological emphases than British industrialization',
              'American technological innovation was independent of resource availability',
              'Labor-saving technology was uniquely American with no parallels elsewhere',
              'High land-to-labor ratio made American industrialization impossible',
            ],
            correctAnswer: 0,
            explanation: 'This demonstrates AP\'s resource endowment analysis: the American reaper (McCormick, 1831), which mechanized grain harvesting, was economically viable in America (labor scarce, large farms) but not in Britain (labor abundant, small farms). The direction of innovation is shaped by what factors are expensive — American innovation emphasized substituting capital (machines) for labor; British and European innovation emphasized organizing labor more efficiently. Different resource endowments produce different technological priorities.'
          },
          {
            question: 'The Zollverein (German customs union, 1834) contributed to industrialization by:',
            options: [
              'Eliminating internal tariffs between German states to create a large integrated market — larger markets enable economies of scale in production, justify investment in mass production technology, and create sufficient demand to support specialized industrial production that would be uneconomical in smaller fragmented markets',
              'The Zollverein was primarily a military alliance with no economic significance',
              'The Zollverein raised tariffs between German states to protect local industries',
              'Economic integration had no significant impact on industrialization rates',
            ],
            correctAnswer: 0,
            explanation: 'Market size is AP\'s explanation for why economic integration accelerated industrialization: a factory producing for 30 million consumers (unified Germany) can achieve economies of scale impossible when producing for 1 million consumers (Prussia alone). The Zollverein preceded full German political unification by 37 years but created the economic integration that made German industrial development possible. This demonstrates that economic integration can precede and enable political unification.'
          },
          {
            question: 'The spread of industrialization from Britain to Continental Europe and Japan demonstrates which AP principle?',
            options: [
              'Technology and industrial methods can be deliberately transferred and adapted across cultures and national contexts, but the specific path and social consequences of industrialization vary based on initial conditions (resource endowment, existing social structure, state capacity) — there is no single industrial "model" but multiple variations sharing core features',
              'Industrial technology could not be transferred — each nation had to independently reinvent it',
              'All nations industrialized identically to the British model',
              'Only nations with identical conditions to Britain could industrialize',
            ],
            correctAnswer: 0,
            explanation: 'Technology transfer with adaptation is AP\'s meta-lesson about industrialization spread: British technology (steam engines, spinning machinery) was studied, copied, and adapted by German, French, American, and Japanese industrializers — but the social context (different labor conditions, state capacities, resource endowments, cultural values) shaped different industrial trajectories. Germany emphasized chemicals and electrical industry (where state technical education gave advantages); Japan emphasizes textiles then heavy industry; America emphasizes scale and mechanization. Same core technology, different industrial configurations.'
          }
        ]
      }
    },
    {
      id: 'whir4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The German customs union that created an integrated market across German states (1834) was the ___',
            options: [
            'Zollverein',
            'Reichstag',
            'Junkers',
            'Bundesrat',
            ]
          },
          {
            label: 'The Japanese industrial-financial conglomerates created during the Meiji period that drove Japanese industrialization were the ___',
            options: [
            'Zaibatsu',
            'Samurai',
            'Daimyo',
            'Shogunate',
            ]
          },
          {
            label: 'The American industrialists (Carnegie, Rockefeller) who dominated late 19th century industry were sometimes called ___',
            options: [
            'Robber barons',
            'Factory lords',
            'Industrial kings',
            'Carnegie men',
            ]
          },
        ],
        correctAnswers: [
          'Zollverein',
          'Zaibatsu',
          'Robber barons',
        ],
        hint1: 'German — customs union — 1834 — eliminated internal tariffs — created integrated market',
        hint2: 'Japanese — industrial-financial conglomerates — Mitsui Mitsubishi — state-built then sold to private investors',
        hint3: 'American industrialists — Carnegie Rockefeller Morgan — minimal regulation — concentrated wealth',
        explanation: 'The Zollverein demonstrates state-directed market integration enabling industrialization; zaibatsu demonstrate state-to-private developmental state industrial strategy; and the robber barons demonstrate laissez-faire industrialization in the American context — three different institutional approaches to the same industrialization challenge.'
      }
    },
    {
      id: 'whir4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Japan\'s state-built model factories, subsequently sold to private industrial conglomerates (zaibatsu), represented:',
            options: [
              'A deliberate state strategy to absorb technological risk during industrialization\'s most uncertain early phase, then transfer functioning enterprises to private capital — the state subsidized the learning cost of new industrial methods (accepting losses on model factories) and then sold proved enterprises to private investors who could operate them at commercial scale',
              'Japanese government nationalized all industry permanently during Meiji period',
              'Zaibatsu built Japanese industry without any government involvement',
              'State-built factories were economically irrational and slowed Japanese industrialization',
            ],
            correctAnswer: 0,
            explanation: 'The state-private sequence in Japanese industrialization is AP\'s example of developmental state theory: governments can absorb the learning and risk costs of industrial development that private investors are unwilling to bear, then transition to private ownership once industrial viability is proved. The zaibatsu (Mitsui, Mitsubishi, Sumitomo) that bought Meiji government model factories became the industrial conglomerates that powered Japanese industrial development through the 20th century.'
          },
          {
            question: 'For AP, the most significant difference between British and all later industrializers was:',
            options: [
              'British industrialization was unplanned and market-driven because there was no existing model to follow; all subsequent industrializers (Germany, France, USA, Japan) could observe and deliberately adopt British methods, state-directing technology transfer rather than organically developing industrial technology — making later industrialization deliberately accelerated compared to Britain\'s organic but slower path',
              'Later industrializers had no advantages over Britain — they followed identical paths',
              'All nations industrialized at the same speed regardless of when they started',
              'Later industrializers deliberately rejected British methods and developed entirely new approaches',
            ],
            correctAnswer: 0,
            explanation: 'The "advantage of backwardness" concept is AP\'s framework for later industrialization: countries that industrialized after Britain could observe British successes and failures, deliberately adopt proven technologies, and avoid some developmental dead-ends. German technical universities were deliberately designed to produce industrial chemists Britain lacked; Japan deliberately sent observers to study British, American, and German models. The first industrializer creates the model; subsequent industrializers can improve on the model through deliberate adoption.'
          }
        ]
      }
    }
  ]
}
