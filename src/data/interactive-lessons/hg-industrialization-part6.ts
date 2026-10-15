export const hgIndustrializationPart6Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgindust6-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 6 of 7 — Theories of Development in Depth**

---

| Section |
|---------|
| 📖 Rostow's Stages: Assumptions and Critiques |
| Dependency Theory and Commodity Dependence |
| Wallerstein's World-System Theory |
| Comparing the Three Theories |

> 🔑 **Key Concept:** Part 1 listed the theories. Here you learn **what each assumes, what evidence fits it and where it fails**. Rostow looks **inside** a country for the causes of development; dependency theory and world-system theory look at a country's **position in the global economy** (CED Topic 7.5).
`
    },
    {
      id: 'hgindust6-rostow',
      type: 'text' as const,
      content: `
## 📖 Rostow's Stages: Assumptions and Critiques

American economist **W. W. Rostow** published *The Stages of Economic Growth: A Non-Communist Manifesto* in **1960**. The subtitle matters: during the Cold War, Rostow offered a capitalist path to development as an alternative to Soviet-style planning.

| Stage | Key features in Rostow's account |
|---|---|
| 1. Traditional society | Subsistence farming, limited technology, little change in output per person |
| 2. Preconditions for takeoff | New ideas, a commercial class, banks, transport and an effective national state |
| 3. Takeoff | About two decades of rapid growth led by a few **leading sectors** (for Britain, cotton textiles); investment rises above about 10% of national income |
| 4. Drive to maturity | Growth spreads to many industries; technology diffuses across the economy |
| 5. Age of high mass consumption | Durable consumer goods, services and welfare spending |

Rostow dated **Britain's takeoff to about 1783–1802** and the **United States' to about 1843–1860**.

### Evidence That Fits
South Korea moved from a poor, mostly rural country in the 1950s to a high-income industrial economy, with rapid growth led first by textiles and later by steel, ships, cars and electronics, roughly the sequence Rostow described.

### Critiques
- **Linear and universal:** it assumes every country follows Europe's path, one stage after another.
- **Ignores history and power:** it treats poor countries as "early" rather than shaped by colonialism and unequal trade.
- **Ignores the global context:** latecomers face competition from countries that industrialized first, and countries cannot all become exporters of the same goods at once.
- **Ignores environmental limits:** if every country reached Stage 5 consumption, resource use would rise far beyond current levels.
- **Too vague to test:** the stages are hard to measure, so countries can be placed in different stages by different scholars.
`
    },
    {
      id: 'hgindust6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement captures the central assumption of Rostow\'s model?',
            options: [
              'Every country can pass through the same sequence of stages',
              'Poor countries stay poor because core countries exploit them',
              'Development depends on a country\'s place in a world-system',
              'Industrial growth always begins in the semi-periphery first'
            ],
            correctAnswer: 0,
            explanation: 'Rostow assumed a single, linear sequence that every society can follow. Exploitation by the core is the dependency argument, and the world-system idea is Wallerstein\'s.'
          },
          {
            question: 'Which critique of Rostow\'s model relies most on historical evidence about colonialism?',
            options: [
              'Its stages are too vague to measure precisely',
              'It overlooks how imperial rule shaped economies',
              'It ignores the environmental cost of consumption',
              'It treats services as more advanced than farming'
            ],
            correctAnswer: 1,
            explanation: 'Critics argue that colonies were organized to export raw materials and import manufactured goods, so their economies were not simply "early" versions of Europe\'s. The other critiques concern measurement and environmental limits, not colonial history.'
          }
        ]
      }
    },
    {
      id: 'hgindust6-dependency',
      type: 'text' as const,
      content: `
## Dependency Theory and Commodity Dependence

**Dependency theory** grew out of Latin America in the 1950s and 1960s.
- **Raúl Prebisch**, an Argentine economist at the UN Economic Commission for Latin America, argued (around 1950) that the prices of raw materials tend to fall over time **relative to** the prices of manufactured goods. Exporters of raw materials must therefore sell more and more to buy the same imports. This decline in the **terms of trade** is often called the Prebisch-Singer hypothesis.
- **Andre Gunder Frank** argued in 1966 that the periphery was not simply undeveloped but actively **underdeveloped** by its ties to the core: profits, raw materials and skilled people flowed out.

**Policy response:** many Latin American governments adopted **import substitution industrialization (ISI)** from the 1950s to the 1970s, using tariffs to protect new domestic factories so they could make goods that had been imported.

### Commodity Dependence Today
UNCTAD calls a country **commodity-dependent** when raw materials (farm goods, minerals, fuels) make up **more than 60%** of its merchandise exports. By that measure, about **two-thirds of developing countries** were commodity-dependent in its 2023 report.

**Worked case: Nigeria and the oil price.** Petroleum supplies the great majority of Nigeria's export earnings. When world oil prices fell from over \\$100 a barrel in mid-2014 to under \\$30 in early 2016, Nigeria's export earnings and government revenue collapsed, and the economy fell into recession in 2016. A diversified economy would have absorbed the shock far better.

### Critiques of Dependency Theory
- **East Asian growth:** South Korea, Taiwan and Singapore grew rich by **integrating** with core markets through exports, not by cutting ties.
- **ISI's record:** protected industries often stayed inefficient, and heavy borrowing contributed to the Latin American debt crisis of the 1980s.
- **Too deterministic:** it can make poor countries seem to have no choices, ignoring governance, education and policy.
`
    },
    {
      id: 'hgindust6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A country exports \\$12 billion of goods a year: \\$9 billion of copper, \\$1 billion of tobacco and \\$2 billion of manufactured goods.

**1)** What **percent** of its exports are commodities (copper plus tobacco)?

**2)** Is the country commodity-dependent under UNCTAD's 60% threshold? (Type yes or no.)

**3)** If the copper price falls by half and nothing else changes, what is the new total value of exports, in **billions** of dollars?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['83.3', 'yes', '7.5'],
        hint1: '(9 + 1) ÷ 12 × 100, rounded to one decimal place.',
        hint2: 'Compare your answer with 60%.',
        hint3: 'Copper falls from \\$9 billion to \\$4.5 billion; add the other exports.',
        explanation: '1) \\$10 billion ÷ \\$12 billion ≈ 83.3%. 2) Yes, 83.3% is above the 60% threshold. 3) \\$4.5 + \\$1 + \\$2 = \\$7.5 billion, a 37.5% drop in export earnings from a single price change, which is why commodity dependence makes economies fragile.'
      }
    },
    {
      id: 'hgindust6-wallerstein',
      type: 'text' as const,
      content: `
## Wallerstein's World-System Theory

Sociologist **Immanuel Wallerstein** (first volume of *The Modern World-System*, **1974**) argued that since the 1500s there has been **one capitalist world-economy** with a single division of labor. Countries do not develop separately; they hold **positions** in that system.

| Position | Typical processes | How the position is kept |
|---|---|---|
| **Core** | High-wage, high-technology, high-profit production; finance and headquarters | Controls capital, technology and trade rules |
| **Semi-periphery** | A mix: some advanced industry, much low-wage manufacturing | Exploited by the core while it exploits the periphery; this buffer layer makes the system more stable |
| **Periphery** | Low-wage, low-technology production and raw material exports | Sells cheap and buys dear, as dependency theory describes |

### What Makes It Different from Dependency Theory
- **Three tiers, not two:** the semi-periphery explains countries such as China, Brazil, India and Mexico that fit neither extreme.
- **Mobility is possible:** countries can move. South Korea rose from periphery toward the core; Argentina, among the richer countries around 1900, slipped toward the semi-periphery.
- **The unit is the world, not the country:** core and periphery describe **processes**, so they can coexist inside one country.

### Limits
- **Scale:** national labels hide regions. Coastal Shanghai and Shenzhen run core-like activities while parts of western China remain peripheral.
- **Economic focus:** the theory says little about culture, governance or environment.
- **Hard to test:** the boundaries between tiers are not defined by fixed numbers, so classifications vary between sources.
`
    },
    {
      id: 'hgindust6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What feature of Wallerstein\'s theory most clearly separates it from earlier dependency theory?',
            options: [
              'It adds a semi-periphery tier between core and periphery',
              'It argues that all countries pass through five stages',
              'It denies that core countries benefit from trade at all',
              'It treats each country as a separate, closed economy'
            ],
            correctAnswer: 0,
            explanation: 'Wallerstein added a middle tier and allowed countries to move between positions. Five stages belong to Rostow, and Wallerstein, like dependency theorists, argued that the core benefits from unequal exchange.'
          },
          {
            question: 'Coffee prices fall by 40% in one year, and Country Z\'s government must cut school spending. Which concept best explains Z\'s vulnerability?',
            options: [
              'Agglomeration',
              'Takeoff',
              'Commodity dependence',
              'Postindustrial growth'
            ],
            correctAnswer: 2,
            explanation: 'A country that relies on one or a few raw material exports sees its earnings and tax revenue swing with world prices. Agglomeration and takeoff describe growth processes, not vulnerability to price shocks.'
          },
          {
            question: 'Which development path most strongly challenges the claims of dependency theory?',
            options: [
              'Nigeria\'s recession after oil prices fell in 2014 to 2016',
              'South Korea\'s export-led rise to high income after the 1960s',
              'Latin America\'s debt crisis in the 1980s after ISI borrowing',
              'Zambia\'s reliance on copper for most of its export earnings'
            ],
            correctAnswer: 1,
            explanation: 'Dependency theory predicts that close ties to the core keep a country poor, yet South Korea grew rich by exporting to core markets. The Nigerian, Zambian and debt-crisis cases fit dependency arguments rather than challenging them.'
          }
        ]
      }
    },
    {
      id: 'hgindust6-compare',
      type: 'text' as const,
      content: `
## Comparing the Three Theories

| Question | Rostow (1960) | Dependency (1950s–1960s) | Wallerstein (1974) |
|---|---|---|---|
| **Why are some countries poor?** | They have not yet passed through the stages | Core exploitation and unequal trade keep them poor | Their position in the world-economy |
| **Unit of analysis** | The individual country | Core vs. periphery relationship | The whole world-economy |
| **Path forward** | Investment, trade and modernization | Reduce dependence, for example through ISI | Countries can move between tiers, but the system always has a periphery |
| **Best evidence** | South Korea, early Britain | Commodity exporters hit by price swings | Rising semi-periphery: China, Brazil, Mexico |
| **Main critique** | Linear, ignores colonialism | Cannot explain East Asian export success | Vague tier boundaries; national labels hide regions |

> 🔑 **AP Connection:** When an FRQ asks you to **explain a limitation** of a development model, name the assumption and give a counterexample: "Rostow assumes every country follows one linear path, but colonial economies were organized to export raw materials, so they could not simply repeat Britain's stages."
`
    },
    {
      id: 'hgindust6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Theory** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A scholar argues Brazil both exploits poorer neighbors and is exploited by richer countries. This fits ___',
            options: ['World-system theory', 'Rostow\'s stages', 'Weber\'s least cost theory', 'The demographic transition']
          },
          {
            label: 'A planner says a country needs more investment so its textile industry can lead a burst of growth. This fits ___',
            options: ['Rostow\'s stages', 'Dependency theory', 'World-system theory', 'The gravity model']
          },
          {
            label: 'An economist argues that raw material prices fall over time relative to manufactured goods. This fits ___',
            options: ['Dependency theory', 'Rostow\'s stages', 'Central place theory', 'The rank-size rule']
          }
        ],
        correctAnswers: ['World-system theory', 'Rostow\'s stages', 'Dependency theory'],
        hint1: 'A middle position that both exploits and is exploited.',
        hint2: 'Leading sectors and investment drive takeoff.',
        hint3: 'Prebisch and declining terms of trade.',
        explanation: 'A country that both exploits and is exploited holds a semi-periphery position in Wallerstein\'s world-system. Investment in a leading sector to spark takeoff is Rostow\'s idea. Declining terms of trade for raw materials is a core argument of dependency theory.'
      }
    }
  ]
};
