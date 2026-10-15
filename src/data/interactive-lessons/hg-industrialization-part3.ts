export const hgIndustrializationPart3Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgindust3-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 3 of 7 — Where Industry Locates: Weber's Model and Beyond**

---

| Section |
|---------|
| 📖 How the Sector Mix Shifts Over Time |
| Weber's Least Cost Theory, Step by Step |
| Worked Example: Transport Costs Decide the Site |
| Labor, Agglomeration and Break-of-Bulk Points |
| What Weber Leaves Out |

> 🔑 **Key Concept:** Part 1 introduced the economic sectors and Weber's three location factors. This part turns them into **tools**: reading how a country's sector mix changes, calculating where a weight-losing or weight-gaining industry should locate, and explaining why real firms often break the model's predictions (CED Topic 7.2).
`
    },
    {
      id: 'hgindust3-sectors',
      type: 'text' as const,
      content: `
## 📖 How the Sector Mix Shifts Over Time

As an economy develops, workers move from the **primary** sector into the **secondary** sector, and then from both into the **tertiary, quaternary and quinary** sectors. The United States shows the full sequence.

| Year | Share of U.S. workers in farming (rounded) | What drove the change |
|---|---|---|
| 1900 | about 41% | Horse-drawn machinery had spread, but millions of families still farmed |
| 1945 | about 16% | Tractors, fertilizer and hybrid corn let far fewer farmers feed the country |
| 2000 | about 2% | Large, capital-intensive farms; most jobs are now in services |

*Source: USDA Economic Research Service, "The 20th Century Transformation of U.S. Agriculture and Farm Policy" (2005).*

Manufacturing followed a different path. Its share of U.S. jobs peaked in the mid-1900s and has fallen since, even though factory **output** kept rising. Automation and the move of labor-intensive work overseas explain the gap between output and jobs.

### Reading a Sector Table
- A **large primary share** (often above 40% of workers) signals a mostly agricultural, lower-income economy.
- A **rising secondary share** signals industrialization, as in China from the 1980s.
- A **dominant tertiary share** with a falling secondary share signals a **postindustrial** economy and **deindustrialization**.

**Limitation:** sector shares describe jobs, not value. A country with few farmers can still be a major farm exporter, and a "service" job can be a low-wage cleaning job or a high-wage legal job.
`
    },
    {
      id: 'hgindust3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country X has 55% of its workers in agriculture, 15% in industry and 30% in services. What does this mix most strongly suggest?',
            options: [
              'A mostly farming, lower-income economy',
              'A postindustrial economy losing its factories',
              'A newly industrialized economy at its peak',
              'An economy led by quaternary research jobs'
            ],
            correctAnswer: 0,
            explanation: 'More than half the workforce in the primary sector signals limited industrialization and generally lower incomes. A postindustrial or research-led economy would have a large tertiary share and very few farm workers.'
          },
          {
            question: 'U.S. factory output rose for decades while the number of factory jobs fell. Which explanation fits best?',
            options: [
              'Consumers bought fewer manufactured goods',
              'Automation let fewer workers make more goods',
              'Factories closed because output had collapsed',
              'Farm work drew workers away from factories'
            ],
            correctAnswer: 1,
            explanation: 'Machines and automation raised output per worker, so production could grow while employment fell; the shift of labor-intensive work overseas added to the job losses. Output did not collapse, and farming lost workers rather than gaining them.'
          }
        ]
      }
    },
    {
      id: 'hgindust3-weber',
      type: 'text' as const,
      content: `
## Weber's Least Cost Theory, Step by Step

German economist **Alfred Weber (1909)** asked where a factory should locate to **minimize total costs**. He treated transportation as the main cost, then asked when labor or clustering could pull a factory away from the cheapest transport site.

### The Assumptions
1. Raw material sources and the market are at **fixed points**.
2. Transport cost rises with **weight and distance**.
3. Labor is available only at certain places, at fixed wages.
4. The firm sells everything it makes, so it only has to **minimize costs**.

### The Location Triangle and the Material Index
Weber drew a **locational triangle**: two raw material sources and one market. The best site is the point where the weighted pulls of the three corners balance.

The **material index** tells you which corner pulls hardest:

$$\\text{Material index} = \\frac{\\text{weight of localized raw materials}}{\\text{weight of finished product}}$$

| Material index | Type of industry | Locate near | Example |
|---|---|---|---|
| Greater than 1 | **Weight-losing** (bulk-reducing) | Raw materials | Copper smelting, sugar milling, sawmills |
| Less than 1 | **Weight-gaining** (bulk-gaining) | The market | Soft-drink bottling, brewing, concrete |
| About 1 | Neither | Anywhere along the route | Assembly of light parts |

A **localized** material is found in only some places, such as iron ore. A **ubiquitous** material, such as water in most regions, is available everywhere, so it adds weight to the product without pulling the factory toward any source. That is why adding water makes bottling weight-gaining.
`
    },
    {
      id: 'hgindust3-worked',
      type: 'text' as const,
      content: `
## Worked Example: Transport Costs Decide the Site

A mine and a market are **200 km** apart on a straight railway. Shipping costs **\\$1 per tonne per km**. A smelter needs **5 tonnes of ore** to make **1 tonne of metal**.

| Smelter site | What is shipped | Cost per tonne of metal |
|---|---|---|
| At the mine | 1 tonne of metal × 200 km | **\\$200** |
| Halfway (100 km) | 5 tonnes of ore × 100 km + 1 tonne of metal × 100 km | 500 + 100 = **\\$600** |
| At the market | 5 tonnes of ore × 200 km | **\\$1,000** |

**Result:** the material index is 5 ÷ 1 = 5, so the smelter belongs at the mine, where it ships only the light product.

### Now Reverse It: A Bottling Plant
A bottler mixes **1 tonne of syrup** with **9 tonnes of local water** to make **10 tonnes of soda**. The syrup plant is 200 km from the market.
- Bottle at the syrup plant: ship 10 tonnes × 200 km = **\\$2,000**.
- Bottle at the market: ship 1 tonne of syrup × 200 km = **\\$200**.

Water is ubiquitous, so only the syrup counts as localized: the material index is 1 ÷ 10 = 0.1, and the plant belongs at the market. That is why soda is bottled in many regional plants rather than one central factory.
`
    },
    {
      id: 'hgindust3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A sawmill turns **4 tonnes of logs** into **1 tonne of lumber**. The forest and the market are **150 km** apart, and shipping costs **\\$2 per tonne per km**.

**1)** What is the material index?

**2)** What is the transport cost, in dollars, per tonne of lumber if the mill is built at the forest?

**3)** What is the transport cost, in dollars, per tonne of lumber if the mill is built at the market?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '300', '1200'],
        hint1: 'Divide the weight of the raw material by the weight of the product.',
        hint2: 'At the forest you ship only the 1 tonne of lumber: 1 × 150 × 2.',
        hint3: 'At the market you ship all 4 tonnes of logs: 4 × 150 × 2.',
        explanation: '1) 4 ÷ 1 = 4, so sawmilling is weight-losing. 2) 1 × 150 × \\$2 = \\$300. 3) 4 × 150 × \\$2 = \\$1,200. Building at the forest saves \\$900 per tonne, as Weber predicts for a weight-losing industry.'
      }
    },
    {
      id: 'hgindust3-labor',
      type: 'text' as const,
      content: `
## Labor, Agglomeration and Break-of-Bulk Points

### Labor Can Outweigh Transport
Weber argued a firm will leave its cheapest transport site **only if labor savings exceed the extra transport cost**. Suppose a garment maker's least-transport site is near its market, but a site 1,000 km away adds **\\$3** of transport cost per shirt and saves **\\$5** in wages per shirt. The firm moves, because it gains \\$2 per shirt. Weber mapped this with **isodapanes**, lines of equal extra transport cost around the least-cost point. Labor-intensive, light products such as clothing and electronics assembly cross those lines easily, which is why they moved to lower-wage countries.

### Agglomeration and Deglomeration
- **Agglomeration economies:** firms clustered together share suppliers, skilled workers, infrastructure and ideas. Examples: the auto cluster around Detroit in the 1900s; software in Silicon Valley today.
- **Deglomeration:** when crowding raises land prices, wages, traffic and pollution, some firms leave the cluster.

### Break-of-Bulk Points
A **break-of-bulk point** is a place where cargo moves from one mode of transport to another, such as ship to rail at a port. Because goods must be unloaded there anyway, processing them on the spot avoids an extra round of handling. That is why oil refineries, flour mills and steel plants often sit at ports such as **Rotterdam**, Europe's largest port, and why Chicago grew where lake shipping met the railways.

> 🔑 **AP Connection:** For any industry in a question, ask three things in order: Is it weight-losing or weight-gaining? Is it labor-intensive enough to chase cheap wages? Does it gain from clustering or from a break-of-bulk point?
`
    },
    {
      id: 'hgindust3-limits',
      type: 'text' as const,
      content: `
## What Weber Leaves Out

| Weber's assumption | What real firms face |
|---|---|
| Transport cost is the main cost | Container shipping since the 1950s and 1960s has cut freight costs so much that, for many goods, labor, land and taxes matter more |
| One fixed market | Firms sell to many markets at once through global supply chains |
| Only costs matter | Firms also chase **demand**, nearness to customers and skilled workers |
| Governments are absent | Tax breaks, subsidies, tariffs and **special economic zones** strongly shape location |
| Firms act rationally with full information | Founders often locate where they already live, and history creates lasting clusters |

**Footloose industries** such as software, finance and many high-value electronics have products so light, or so digital, that transport costs barely matter. Their location depends on skilled labor, amenities and agglomeration, which Weber's model does not predict well.

**Scale of analysis:** Weber's model works best at the **regional** scale for **heavy, bulky** industries such as smelting, cement and bottling. At the **global** scale, labor costs and government policy usually decide where light manufacturing goes.
`
    },
    {
      id: 'hgindust3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ready-mix concrete plant combines cement with sand, gravel and water found in most regions, and its heavy product is costly to ship. According to Weber, where should it locate?',
            options: [
              'At a distant quarry',
              'Near its customers',
              'In a low-wage country',
              'At an inland rail yard'
            ],
            correctAnswer: 1,
            explanation: 'Concrete gains weight from water and bulky aggregate that are available almost everywhere, so it is weight-gaining and belongs near the market. Shipping heavy concrete from a distant quarry or another country would raise costs.'
          },
          {
            question: 'A firm\'s least-transport site would cost \\$4 less per unit to ship from than a second site, but wages at the second site are \\$6 lower per unit. What does Weber predict?',
            options: [
              'Stay put, since transport is always the deciding cost',
              'Move to the second site, which is \\$2 cheaper overall',
              'Split output evenly so both costs are equally balanced',
              'Move to the market, since labor never affects location'
            ],
            correctAnswer: 1,
            explanation: 'Weber said labor can pull a firm away from the least-transport site when wage savings exceed the extra shipping cost; here \\$6 saved minus \\$4 added leaves a \\$2 gain per unit. Transport is not always decisive in his model.'
          },
          {
            question: 'Why do many oil refineries locate at major seaports such as Rotterdam?',
            options: [
              'Crude oil gains weight when it is refined',
              'Ports offer the lowest-wage labor in Europe',
              'Cargo already changes transport mode there',
              'Weber\'s model forbids inland refineries'
            ],
            correctAnswer: 2,
            explanation: 'A port is a break-of-bulk point where tanker cargo must be unloaded anyway, so refining there avoids an extra round of handling before products move on by pipeline, barge or rail. Refining does not add weight, and port wages are not especially low.'
          }
        ]
      }
    },
    {
      id: 'hgindust3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Apply the Location Factors** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sugar mill sits beside the cane fields because cane loses most of its weight in processing. The deciding factor is ___',
            options: ['Weight-losing raw materials', 'A break-of-bulk point', 'Agglomeration economies', 'Low labor costs']
          },
          {
            label: 'An app developer chooses a city for its pool of programmers, not its freight links. The firm is ___',
            options: ['A footloose industry', 'A weight-gaining industry', 'A break-of-bulk industry', 'A primary-sector industry']
          },
          {
            label: 'Lines of equal extra transport cost drawn around a least-cost site are ___',
            options: ['Isodapanes', 'Isotherms', 'Isobars', 'Isolines of income']
          }
        ],
        correctAnswers: ['Weight-losing raw materials', 'A footloose industry', 'Isodapanes'],
        hint1: 'Compare the weight of the cane with the weight of the sugar.',
        hint2: 'Its product weighs nothing to ship.',
        hint3: 'Weber\'s own term for cost contours.',
        explanation: 'Sugar milling is weight-losing, so it locates at the raw material. A software firm ships a digital product, so it is footloose. Weber called lines of equal extra transport cost isodapanes.'
      }
    }
  ]
};
