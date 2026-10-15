export const hgAgriculturalPracticesPart4Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu4-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 4 of 7 — Agribusiness, Commodity Chains and the Global Food System**

---

| Section |
|---------|
| 📖 How Commercial Farming Is Organized |
| Reading the Data: U.S. Farm Consolidation |
| Commodity Chains: From Farm to Shelf |
| The Global System: Dependence, Cash Crops and Fair Trade |

> 🔑 **Key Concept:** Modern commercial farming is organized like any other industry. Firms grow larger to cut costs (**economies of scale**), specialize in one crop (**monocropping**), and control more stages of production (**vertical integration**). Those firms link farmers in one country to consumers in another through **commodity chains** (CED Topics 5.7 and 5.9).
`
    },
    {
      id: 'hgagricu4-organization',
      type: 'text' as const,
      content: `
## 📖 How Commercial Farming Is Organized

| Term | Meaning | Example |
|---|---|---|
| **Monocropping** | Growing the same crop on the same field year after year | Corn on corn in parts of the U.S. Corn Belt |
| **Monoculture** | One crop or species dominating a farm or whole region | Oil palm estates covering large areas of Malaysia and Indonesia |
| **Economies of scale** | Average cost per unit falls as output rises, because fixed costs are spread over more units | A combine costing hundreds of thousands of dollars pays off faster over 5,000 acres than over 500 |
| **Agribusiness** | Farming organized as a business system that includes inputs (seed, fertilizer, machinery), production, processing, distribution and retail | Seed and chemical firms, meatpackers, grain traders and supermarket chains |
| **Vertical integration** | One firm controls several **stages** of the same chain | A poultry company owns hatcheries, feed mills and processing plants |
| **Horizontal integration** | One firm buys **competitors** at the same stage | Seed and chemical mergers such as Bayer buying Monsanto in 2018 |

### Vertical Integration in Practice: U.S. Chickens
In the U.S. broiler industry, more than 90 percent of chickens are raised under **production contracts** (USDA Economic Research Service). The integrating company owns the birds and the feed, sets the schedule and buys the finished birds; the **contract grower** owns the barns, supplies labor and is paid per flock. The company captures efficiency and control; the grower carries debt for the barns and has few buyers to choose from.

### Why Monocropping Spreads, and What It Costs
- **Why it spreads:** specialized machinery, expert knowledge and bulk contracts all favor growing one crop at large scale.
- **What it costs:** a single crop invites pests and disease adapted to it, drains the same soil nutrients each year and needs more fertilizer and pesticide. Part 5 covers the environmental effects.

> 🔑 **AP Connection:** Do not confuse the two integrations. **Vertical** means up and down one chain (farm to processing to retail). **Horizontal** means buying rivals at the same stage.
`
    },
    {
      id: 'hgagricu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A poultry company owns the hatcheries, feed mills and processing plants, and contracts with farmers who raise its chickens in their own barns. This is an example of:',
            options: [
              'Vertical integration',
              'Horizontal integration',
              'Economies of scale',
              'Monocropping'
            ],
            correctAnswer: 0,
            explanation: 'One firm controls several stages of the same chain, from eggs and feed to processing, which is vertical integration. Horizontal integration would mean buying rival poultry companies at the same stage.'
          },
          {
            question: 'Why do large grain farms on the Great Plains usually have lower costs per bushel than small farms nearby?',
            options: [
              'Machinery expenses are spread over more acres',
              'Large farms receive a higher market price',
              'Soils on large farms are naturally more fertile',
              'Large farms pay less to ship grain to market'
            ],
            correctAnswer: 0,
            explanation: 'Fixed costs such as combines and storage are divided among more acres and bushels, which is an economy of scale. Grain sells at the same market price regardless of farm size, and nearby farms share similar soils and distances.'
          },
          {
            question: 'A farmer plants corn on the same field every year for a decade. Which term describes this practice?',
            options: [
              'Monocropping',
              'Crop rotation',
              'Intercropping',
              'Double cropping'
            ],
            correctAnswer: 0,
            explanation: 'Growing the same crop on the same field year after year is monocropping. Crop rotation changes the crop each year, intercropping grows two crops together, and double cropping fits two harvests into one year.'
          }
        ]
      }
    },
    {
      id: 'hgagricu4-data',
      type: 'text' as const,
      content: `
## Reading the Data: U.S. Farm Consolidation

| Year | Number of U.S. farms | Average farm size |
|---|---|---|
| 1935 (all-time peak) | about 6.8 million | about 155 acres |
| 2022 | about 1.9 million | about 463 acres |

*Sources: USDA historical series; USDA 2022 Census of Agriculture.*

### Working Through the Table
1. **Change in farm numbers:** $(1.9 - 6.8) \\div 6.8 \\approx -0.72$, a fall of about **72 percent**.
2. **Change in average size:** $463 \\div 155 \\approx 3$, so the average farm roughly **tripled** in size.
3. **Interpretation:** total farmland changed far less than the number of farms, so fewer, larger farms now work most of the land. That is consolidation driven by mechanization and economies of scale.

### What the Table Does Not Show
- An **average** hides a split: the census counts many small "lifestyle" farms with little income alongside a small number of very large operations that produce most of the value of sales.
- Farm numbers say nothing about **ownership**. A family farm may still sell under contract to a single integrator.
- The data are **national scale**. Consolidation has gone further in hogs and poultry than in fruit and vegetables, and further in some states than in others.

> 🔑 **AP Connection:** When you describe a trend in a table, give the **direction**, the **size** (a percent or a ratio) and one **cause**. Then add a limitation of the data if the question asks for one.
`
    },
    {
      id: 'hgagricu4-chains',
      type: 'text' as const,
      content: `
## Commodity Chains: From Farm to Shelf

A **commodity chain** is the series of steps and places that link the production of a good to its consumption. The CED notes that **complex commodity chains link production and consumption** of agricultural products across the world.

### Worked Chain: A Chocolate Bar
1. **Farm:** smallholders grow cocoa in Côte d'Ivoire and Ghana, which together produce more than half of the world's cocoa.
2. **Local buying:** cooperatives and traders collect, dry and bag the beans.
3. **Export and grinding:** large trading firms ship beans to grinders; the port of Amsterdam is one of the world's largest cocoa-handling ports.
4. **Manufacturing:** chocolate companies in Europe and North America add sugar, milk and branding.
5. **Retail and consumer:** supermarkets sell the bar in high-income countries, where most chocolate is eaten.

### Who Captures the Value?
An **illustrative** split of a \\$2.00 bar (rounded; real shares vary by year and brand):

| Stage | Share of the price |
|---|---|
| Cocoa farmer | \\$0.14 |
| Traders, grinders and shipping | \\$0.16 |
| Manufacturer (other ingredients, processing, branding) | \\$0.90 |
| Retailer and taxes | \\$0.80 |

Most of the value is added **after** the beans leave the farm, and most of those later stages happen in **core** countries. This is why geographers link commodity chains to **uneven development**: countries that export raw crops capture little of the final price.
`
    },
    {
      id: 'hgagricu4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the farm consolidation table and the chocolate bar table above. Round to the nearest whole number.

**1)** By what percent did the number of U.S. farms fall between 1935 and 2022?

**2)** About how many times larger was the average U.S. farm in 2022 than in 1935?

**3)** What percent of the \\$2.00 bar's price goes to the cocoa farmer?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['72', '3', '7'],
        hint1: 'Divide the drop (6.8 − 1.9) by the starting value, 6.8, then multiply by 100.',
        hint2: 'Divide 463 by 155.',
        hint3: 'Divide 0.14 by 2.00, then multiply by 100.',
        explanation: '1) 4.9 ÷ 6.8 ≈ 0.72, a fall of about 72 percent. 2) 463 ÷ 155 ≈ 3 times larger. 3) 0.14 ÷ 2.00 = 0.07, or 7 percent of the price.'
      }
    },
    {
      id: 'hgagricu4-global',
      type: 'text' as const,
      content: `
## The Global System: Dependence, Cash Crops and Fair Trade

The CED says global food patterns are shaped by **political relationships, infrastructure and patterns of world trade**.

### Food Dependence
A country is **food dependent** when it relies on imports for a large share of its staple food. Egypt is among the world's largest wheat importers. Before 2022, Russia and Ukraine together supplied roughly 30 percent of world wheat exports, so when the war closed Ukraine's Black Sea ports in 2022, bread-grain prices jumped in import-dependent countries such as Egypt and Lebanon. A UN-brokered **Black Sea Grain Initiative** reopened shipments from July 2022 to July 2023.

### Cash Crops and Export Dependence
A **cash crop** is grown to sell, usually for export, rather than to eat. Many countries earn much of their export income from one or two crops: cocoa in Côte d'Ivoire and Ghana, where production expanded under colonial rule, and coffee in Ethiopia and Uganda. The risk is **price volatility**: when world prices fall, national income, farm wages and government budgets fall with them. Critics also argue that the best land goes to export crops rather than local food.

### Fair Trade
**Fair trade** certification links buyers in high-income countries with producer cooperatives. It guarantees a **minimum price** that applies when world prices fall below it, plus a **premium** paid to the cooperative for community projects such as schools or wells.

| Strength | Limitation |
|---|---|
| Price floor reduces risk for small farmers | Certified goods are a small share of total sales for most crops |
| Premium funds local projects | Certification fees and rules can exclude the poorest farmers |
| Raises consumer awareness of commodity chains | Most of the final price is still captured by processors and retailers |

### Policy and Infrastructure
Subsidies in the United States and European Union lower the cost of their farm exports, which critics say undercuts farmers in poorer countries. Ports, rail lines and **cold chains** (refrigerated storage and transport) decide who can export perishable goods at all.

> 🔑 **AP Connection:** Name the **scale** of each effect: a price shock is global, food dependence is national, and a fair-trade premium is felt locally by one cooperative.
`
    },
    {
      id: 'hgagricu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In 2022, bread-grain prices rose sharply in Egypt and Lebanon after war disrupted shipments from Ukraine and Russia. This vulnerability is best described as:',
            options: [
              'Food dependence',
              'A food desert',
              'Economies of scale',
              'Vertical integration'
            ],
            correctAnswer: 0,
            explanation: 'Countries that import much of their staple grain are food dependent, so supply shocks abroad raise their prices. A food desert is a local area with poor access to fresh food, not a national import problem.'
          },
          {
            question: 'Which statement best describes a limitation of fair trade?',
            options: [
              'It reaches only a small share of the crops sold worldwide',
              'It lowers the price that farmers receive for their crops',
              'It bans cooperatives from selling to wealthy countries',
              'It requires farmers to switch from cash crops to staples'
            ],
            correctAnswer: 0,
            explanation: 'Certified goods remain a small share of sales for most crops, so the benefits reach relatively few farmers. Fair trade sets a price floor rather than lowering prices, and it is built around selling to buyers in wealthy countries.'
          },
          {
            question: 'Côte d\'Ivoire relies on cocoa for a large share of its exports. Which risk does this create?',
            options: [
              'Falling world prices can sharply cut its income',
              'Cocoa beans spoil too fast to ship to distant buyers',
              'Its farmers must stop growing food for local markets',
              'Its plantations must switch to extensive cattle grazing'
            ],
            correctAnswer: 0,
            explanation: 'Dependence on one export leaves a country exposed to world price swings. Dried cocoa beans ship well over long distances, and farmers can and do grow food alongside cocoa.'
          }
        ]
      }
    }
  ]
}
