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
              'German states used customs unions, railways, tariffs, and technical schools, while Britain relied on private firms',
              'Germany copied Britain\'s market-led path exactly, while the state stayed out of railways, tariffs, and schools',
              'Germany industrialized before Britain because Prussian officials had built coal mines, ironworks, and canals by 1750',
              'German industry grew more slowly than Britain\'s in every sector, since state planning always stifled private investment',
            ],
            correctAnswer: 0,
            explanation: 'The Britain vs. Germany comparison is AP\'s clearest example of multiple paths to industrialization: British "first industrial revolution" was largely unplanned, driven by private entrepreneurs responding to commercial incentives; German industrialization was deliberately organized by state actors (Prussian bureaucracy, Zollverein administrators, university administrators) who identified industrial development as a state goal and used state resources to achieve it. Both succeeded — but through different mechanisms.'
          },
          {
            question: 'Japanese Meiji industrialization\'s goal of "avoiding Western colonialism" demonstrates:',
            options: [
              'That industrial and military power became a survival need once Japan saw Western domination of China and India',
              'That Japan industrialized mainly to spread Japanese culture and Shinto belief across the Pacific world',
              'That Japan began industrializing before contact with the West and knew little about Western colonial expansion',
              'That Meiji leaders saw industry purely as a source of private profit with no connection to national defense',
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
              'Scarce, costly labor pushed Americans toward labor-saving machines, so resource endowments steered innovation',
              'American inventors worked independently of resource conditions, so labor costs had little effect on design',
              'Labor-saving machinery was a purely American idea with no parallel developments in Britain or Germany',
              'Abundant land, cheap labor, and few cities kept the United States a farm economy until the 1900s',
            ],
            correctAnswer: 0,
            explanation: 'This demonstrates AP\'s resource endowment analysis: the American reaper (McCormick, 1831), which mechanized grain harvesting, was economically viable in America (labor scarce, large farms) but not in Britain (labor abundant, small farms). The direction of innovation is shaped by what factors are expensive — American innovation emphasized substituting capital (machines) for labor; British and European innovation emphasized organizing labor more efficiently. Different resource endowments produce different technological priorities.'
          },
          {
            question: 'The Zollverein (German customs union, 1834) contributed to industrialization by:',
            options: [
              'Removing tariffs among member German states, creating a large single market that rewarded mass production',
              'Forming a military alliance of German states against Austria, with trade issues left to each member state',
              'Raising tariffs between German states so each one could protect its own young industries from competition',
              'Adopting British free-trade policy toward all nations, which flooded German markets with British goods',
            ],
            correctAnswer: 0,
            explanation: 'Market size is AP\'s explanation for why economic integration accelerated industrialization: a factory producing for 30 million consumers (unified Germany) can achieve economies of scale impossible when producing for 1 million consumers (Prussia alone). The Zollverein preceded full German political unification by 37 years but created the economic integration that made German industrial development possible. This demonstrates that economic integration can precede and enable political unification.'
          },
          {
            question: 'The spread of industrialization from Britain to Continental Europe and Japan demonstrates which AP principle?',
            options: [
              'Industrial methods could be transferred abroad, but local conditions shaped each country\'s path',
              'Industrial technology could not be transferred, so each nation had to reinvent the machines on its own',
              'Every country followed the British model exactly, producing identical factories and class structures',
              'Only nations with coal, colonies, and a parliament like Britain\'s were ever able to industrialize at all',
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
              'A state strategy of absorbing the early risks of new industries, then selling working firms to private owners',
              'A permanent nationalization of industry, as the Meiji state kept ownership of every factory it built into the 1900s',
              'A purely private effort, as zaibatsu families built Japan\'s industry without any government support',
              'A costly policy failure that slowed industrial growth until foreign firms bought the factories',
            ],
            correctAnswer: 0,
            explanation: 'The state-private sequence in Japanese industrialization is AP\'s example of developmental state theory: governments can absorb the learning and risk costs of industrial development that private investors are unwilling to bear, then transition to private ownership once industrial viability is proved. The zaibatsu (Mitsui, Mitsubishi, Sumitomo) that bought Meiji government model factories became the industrial conglomerates that powered Japanese industrial development through the 20th century.'
          },
          {
            question: 'For AP, the most significant difference between British and all later industrializers was:',
            options: [
              'Britain industrialized without a model to follow, while later states could study and deliberately copy British methods',
              'Later industrializers enjoyed no advantages, since each had to follow the same slow path Britain took',
              'Every industrializing nation moved at the same speed, regardless of when it started building factories',
              'Later industrializers rejected British methods and invented entirely new kinds of machines from scratch',
            ],
            correctAnswer: 0,
            explanation: 'The "advantage of backwardness" concept is AP\'s framework for later industrialization: countries that industrialized after Britain could observe British successes and failures, deliberately adopt proven technologies, and avoid some developmental dead-ends. German technical universities were deliberately designed to produce industrial chemists Britain lacked; Japan deliberately sent observers to study British, American, and German models. The first industrializer creates the model; subsequent industrializers can improve on the model through deliberate adoption.'
          }
        ]
      }
    }
  ]
}
