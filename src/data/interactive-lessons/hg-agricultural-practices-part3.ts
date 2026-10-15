export const hgAgriculturalPracticesPart3Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu3-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 3 of 7 — Von Thünen in Depth: Rent, Rings and Real Places**

---

| Section |
|---------|
| 📖 The Model and Its Assumptions |
| Worked Example: Calculating Land Rent |
| Changing Transport Costs |
| Real Cases: Uruguay and the Global Scale |
| Limitations and the Link to Bid-Rent |

> 🔑 **Key Concept:** Von Thünen's model is about **land rent**: the profit a hectare earns after production and transport costs. Every product's rent falls as distance from the market rises, and each ring belongs to whichever product earns the **highest rent** at that distance (CED Topic 5.8).
`
    },
    {
      id: 'hgagricu3-model',
      type: 'text' as const,
      content: `
## 📖 The Model and Its Assumptions

Johann Heinrich von Thünen ran an estate in northern Germany and published *The Isolated State* in **1826**. He asked a simple question: if everything else were equal, how would **distance to market** alone sort farm land uses?

### The Assumptions
| Assumption | What it removes from the problem |
|---|---|
| An **isolated state** with **one central market city** | Competing markets and trade with outside places |
| A **flat, featureless plain** with **uniform soil and climate** | Differences in fertility, slope and weather |
| **One mode of transport** (in 1826, the horse-drawn wagon), with cost rising directly with distance | Rivers, railroads and highways that make some routes cheaper |
| Farmers who act to **maximize profit** | Tradition, culture and government policy |

### The Land-Rent Equation
For each product, rent per hectare at distance $d$ from the market is:

$$R = Y(p - c) - Y f d$$

| Symbol | Meaning |
|---|---|
| $R$ | Land rent (profit) per hectare |
| $Y$ | Yield in tonnes per hectare |
| $p$ | Market price per tonne |
| $c$ | Production cost per tonne |
| $f$ | Freight rate per tonne per kilometer |
| $d$ | Distance to market in kilometers |

The first term, $Y(p - c)$, is the rent a hectare would earn **right at the market**. The second term, $Y f d$, is the **transport bill**, which grows with distance. The **slope** of each product's rent line is $Y f$: products with a heavy yield per hectare and a high freight rate (fresh vegetables, milk, firewood in 1826) lose rent fastest as distance grows.

### Von Thünen's Original Order
1. Market gardening and fresh milk, which spoiled quickly
2. **Forest**, because firewood and timber were heavy and every town needed them
3. Grain, farmed less intensively with distance
4. Livestock grazing, because animals could walk to market
5. Beyond that, wilderness: no farm earns positive rent
`
    },
    {
      id: 'hgagricu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these is one of the assumptions of von Thünen\'s model?',
            options: [
              'A flat plain with uniform soil and climate',
              'Several competing cities of equal size',
              'Railroads radiating out from the market',
              'Farmers who keep land in the family'
            ],
            correctAnswer: 0,
            explanation: 'Von Thünen assumed an isotropic plain so that distance to one market would be the only variable. Multiple cities and railroads are exactly the kinds of complications the model leaves out.'
          },
          {
            question: 'Market gardening earns high rent near the city, but its rent drops steeply with distance. In the land-rent equation, what makes its rent line so steep?',
            options: [
              'A high yield multiplied by a high freight rate',
              'A low market price for each tonne it sells',
              'A low production cost on every hectare used',
              'A large area of land needed for each tonne'
            ],
            correctAnswer: 0,
            explanation: 'The slope of a rent line is yield times freight rate, so heavy, perishable produce loses rent quickly with distance. A low production cost would raise rent, and needing much land per tonne describes extensive grazing.'
          }
        ]
      }
    },
    {
      id: 'hgagricu3-worked',
      type: 'text' as const,
      content: `
## Worked Example: Calculating Land Rent

Three products compete for land around one market. Values are illustrative, chosen to keep the arithmetic clean.

| Product | Yield $Y$ (t/ha) | Price $p$ (per t) | Cost $c$ (per t) | Freight $f$ (per t per km) |
|---|---|---|---|---|
| Vegetables | 10 | \\$300 | \\$100 | \\$5 |
| Grain | 5 | \\$200 | \\$80 | \\$1 |
| Cattle | 0.5 | \\$600 | \\$200 | \\$2 |

**Step 1: write each rent line.**
- Vegetables: $R = 10(300 - 100) - 10(5)d = 2000 - 50d$
- Grain: $R = 5(200 - 80) - 5(1)d = 600 - 5d$
- Cattle: $R = 0.5(600 - 200) - 0.5(2)d = 200 - d$

**Step 2: find where each line reaches zero** (the farthest distance the product can be grown at a profit).
- Vegetables: $2000 - 50d = 0$, so $d = 40$ km.
- Grain: $600 - 5d = 0$, so $d = 120$ km.
- Cattle: $200 - d = 0$, so $d = 200$ km.

**Step 3: find the crossover distances** (where the highest-rent product changes).
- Vegetables and grain: $2000 - 50d = 600 - 5d$, so $45d = 1400$ and $d \\approx 31$ km.
- Grain and cattle: $600 - 5d = 200 - d$, so $4d = 400$ and $d = 100$ km.

**Step 4: read off the rings.**

| Distance from market | Highest-rent use | Check at one distance |
|---|---|---|
| 0 to about 31 km | Vegetables | At 20 km: vegetables \\$1,000, grain \\$500, cattle \\$180 |
| About 31 to 100 km | Grain | At 60 km: vegetables negative, grain \\$300, cattle \\$140 |
| 100 to 200 km | Cattle | At 150 km: grain negative, cattle \\$50 |
| Beyond 200 km | No farming at a profit | Every rent line is below zero |

Notice that vegetables would still earn positive rent at 35 km, but grain earns **more** there, so grain wins the land. The rings come from **competition**, not from where each product could survive alone.
`
    },
    {
      id: 'hgagricu3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the rent lines from the worked example: vegetables $R = 2000 - 50d$, grain $R = 600 - 5d$, cattle $R = 200 - d$.

**1)** What is the land rent for grain at 50 km, in dollars per hectare?

**2)** What is the land rent for cattle at 150 km, in dollars per hectare?

**3)** Refrigerated trucks cut the vegetable freight rate in half, so the vegetable line becomes $R = 2000 - 25d$. What is the vegetable rent at 20 km now?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['350', '50', '1500'],
        hint1: 'Substitute d = 50 into 600 − 5d.',
        hint2: 'Substitute d = 150 into 200 − d.',
        hint3: 'Substitute d = 20 into 2000 − 25d.',
        explanation: '1) 600 − 5(50) = 350. 2) 200 − 150 = 50. 3) 2000 − 25(20) = 1,500, up from 1,000 before refrigeration, so vegetables can now outbid grain farther from the city.'
      }
    },
    {
      id: 'hgagricu3-change',
      type: 'text' as const,
      content: `
## Changing Transport Costs

With refrigeration, the vegetable line becomes $2000 - 25d$. The new crossover with grain is $2000 - 25d = 600 - 5d$, so $20d = 1400$ and $d = 70$ km. The vegetable ring **more than doubles in width**, from about 31 km to 70 km, and grain is pushed outward.

This is the general rule: **cutting a product's freight rate flattens its rent line and widens its ring.** History shows it repeatedly:
- **Railroads** in the 1800s let the U.S. Great Plains ship grain to eastern cities and to Europe.
- **Refrigerated shipping** reached a turning point in **1882**, when the ship *Dunedin* carried frozen meat from New Zealand to Britain. Lamb and butter from the far side of the world could now compete in London.
- **Interstate highways and refrigerated trucks** let lettuce from California and Arizona reach supermarkets across the United States within days.
- **Air freight** carries cut flowers and green beans from Kenya to European supermarkets overnight.

## Real Cases: Uruguay and the Global Scale

### Uruguay and Montevideo (regional scale)
Uruguay comes close to von Thünen's assumptions: gently rolling grassland with fairly uniform conditions and **one dominant city and port**, Montevideo, home to roughly 4 in 10 Uruguayans. A well-known 1973 study by geographer Ernst Griffin found an approximate ring pattern: **market gardening and dairy** nearest Montevideo, **mixed crop and livestock** farming in a middle zone, and **extensive cattle and sheep grazing** across the outer zone. The rings were not perfect circles; they stretched along roads and were distorted by soil differences and by smaller towns.

### The Global-Scale von Thünen Pattern
Treat the urbanized core of **northwestern Europe** (and, similarly, the northeastern United States) as one giant market city:
- **Inner zone:** intensive dairy, vegetables and greenhouse produce in the Netherlands, Belgium, Denmark and southern England.
- **Middle zone:** grain from the North American plains, Ukraine and Argentina's Pampas.
- **Outer zone:** extensive beef and wool from Australia, Patagonia and New Zealand, which once supplied Britain because land there was cheap.

Refrigeration and air freight now blur this world pattern, but the idea that **distance from the core shapes intensity** still holds broadly.
`
    },
    {
      id: 'hgagricu3-limits',
      type: 'text' as const,
      content: `
## Limitations and the Link to Bid-Rent

| Limitation | Real-world example |
|---|---|
| Real land is not a uniform plain | Rivers, hills and soil differences break up the rings, as around Montevideo |
| Many markets, not one | Overlapping rings form around every city in a region |
| Transport is uneven | Rings stretch along highways and rail lines into star shapes |
| Government policy overrides rent | Farm subsidies, price supports and zoning keep some land in uses the model would not predict |
| Cities grow outward | Dairy farms that once ringed Los Angeles moved inland to the Central Valley as suburbs raised land values |
| Global supply chains | Fresh produce now travels thousands of kilometers, so perishability no longer ties it to the nearest city |

### The Link to Bid-Rent Theory
In 1964 economist **William Alonso** applied the same logic to cities: land users with the steepest rent lines (retail and offices) outbid others near the central business district, then industry, then housing. Von Thünen is **bid-rent for farm land**; the Urbanization topic covers the urban version.

> 🔑 **AP Connection:** The exam rarely asks you to recite the rings. It asks you to **apply** the model: predict what a new highway or refrigeration does, or explain why a real pattern departs from it. Name the assumption the real case breaks.
`
    },
    {
      id: 'hgagricu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Around Montevideo, geographers found vegetable and dairy farms nearest the city and extensive cattle and sheep grazing in the outer zones. Why is Uruguay a good test of von Thünen\'s model?',
            options: [
              'It has fairly uniform land and one dominant city',
              'It has many cities spaced evenly across the land',
              'It has steep mountains that separate each zone',
              'It has no paved roads linking farms and markets'
            ],
            correctAnswer: 0,
            explanation: 'Uruguay\'s gentle, fairly uniform grasslands and single dominant city and port come close to the model\'s assumptions. Evenly spaced cities or steep mountains would break the assumptions, and Uruguay does have paved roads.'
          },
          {
            question: 'Refrigerated trucks cut the cost of shipping fresh vegetables in half. According to the model, what happens to the vegetable ring?',
            options: [
              'It expands outward from the city',
              'It shrinks inward toward the city',
              'It jumps to the outermost ring',
              'It keeps the same outer boundary'
            ],
            correctAnswer: 0,
            explanation: 'A lower freight rate flattens the vegetable rent line, so vegetables outbid grain farther from the market and the ring widens. In the worked example, the boundary moves from about 31 km to 70 km.'
          },
          {
            question: 'Which modern example most clearly breaks the global-scale von Thünen pattern?',
            options: [
              'Cut roses flown from Kenya to Europe overnight',
              'Wheat shipped from Argentina to distant markets',
              'Wool exported from remote Australian sheep stations',
              'Vegetables grown on farms just outside Amsterdam'
            ],
            correctAnswer: 0,
            explanation: 'Fresh flowers are highly perishable, so the model would place them near the market, yet air freight lets Kenya supply Europe. Distant wheat and wool and nearby vegetables all fit the pattern.'
          }
        ]
      }
    }
  ]
}
