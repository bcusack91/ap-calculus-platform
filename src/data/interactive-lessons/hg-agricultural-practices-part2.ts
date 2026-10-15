export const hgAgriculturalPracticesPart2Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu2-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 2 of 7 — The Physical Environment, Intensity and Production Regions**

---

| Section |
|---------|
| 📖 What the Physical Environment Allows |
| Intensive and Extensive Land Use |
| Agricultural Production Regions |

> 🔑 **Key Concept:** Farmers decide what to grow inside limits set by **climate, soil, slope and water**, and they decide how hard to work each hectare based on **land value, labor and capital**. Put those two decisions together across a whole region and you get an **agricultural production region** (CED Topics 5.1 and 5.6).
`
    },
    {
      id: 'hgagricu2-environment',
      type: 'text' as const,
      content: `
## 📖 What the Physical Environment Allows

The CED stresses that agricultural practices are **influenced by the physical environment and climatic conditions**, naming the Mediterranean and tropical climates as examples. Four physical factors matter most:

| Factor | What it controls | Example |
|---|---|---|
| **Temperature and growing season** | Which crops ripen before frost; how many harvests per year | South China's warm lowlands allow two rice crops a year; Canada's prairies grow fast-maturing spring wheat |
| **Precipitation** | Whether crops can be rain-fed or need irrigation or grazing | Below roughly 250 mm of rain a year, most land supports grazing rather than crops unless irrigated |
| **Soil** | Fertility and drainage | Deep prairie soils of the U.S. Corn Belt versus thin, leached rainforest soils |
| **Slope and landform** | Erosion risk and mechanization | Flat plains suit combines; steep hillsides need terraces or are left in pasture |

### Two Climates the CED Names
**Mediterranean climate:** hot, dry summers and mild, rainy winters. It occurs around the Mediterranean Sea, in California, central Chile, South Africa's Western Cape and southern Australia. Farmers grow **drought-tolerant tree and vine crops** (olives, grapes, citrus, figs) and **winter wheat**, which grows in the wet season. Summer vegetables and fruit depend on irrigation, as in California's Central Valley.

**Tropical climates:**
- **Tropical rainforest** (Amazon, Congo Basin): heavy, year-round rain **leaches** nutrients from the soil, so most nutrients sit in the vegetation, not the ground. Burning the cleared vegetation puts nutrients back into the soil as ash, which is why **shifting cultivation** works: a plot yields for about two or three years, then is left to regrow.
- **Tropical wet-and-dry** (savannas, monsoon lands): a long dry season favors **grazing**, while reliable warmth plus irrigation or monsoon rain supports **plantations** and **wet rice**.

### Determinism or Possibilism?
Unit 1 contrasted **environmental determinism** (the environment dictates human activity) with **possibilism** (the environment sets limits, and people choose among options using technology and culture). Agriculture supports possibilism. Israel's drip irrigation grows vegetables in the Negev desert, and the Netherlands, a small, cool country, is often ranked the world's **second-largest agricultural exporter by value**, mainly because of greenhouses. The environment still matters: technology raises costs, and those costs decide what is profitable.

> 🔑 **AP Connection:** When a question asks why a practice is found in a place, name the **physical factor** (climate, soil, slope, water) and then the **human factor** (market, technology, culture). Answers that give only one usually lose a point.
`
    },
    {
      id: 'hgagricu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Central Chile, California and the lands around the Mediterranean Sea all grow grapes, olives and citrus. Which shared physical factor best explains this?',
            options: [
              'Hot, dry summers and mild, rainy winters',
              'Deep, fertile soils and hot, humid summers',
              'Year-round heavy rainfall and high heat',
              'Long, cold winters and a short growing season'
            ],
            correctAnswer: 0,
            explanation: 'All three regions share a Mediterranean climate, whose dry summers favor drought-tolerant tree and vine crops. Prairie soils describe the Corn Belt, and year-round rain describes the tropical rainforest.'
          },
          {
            question: 'Why do farmers in tropical rainforests traditionally move their fields every few years under shifting cultivation?',
            options: [
              'Heavy rain leaches nutrients from soils that are cleared',
              'Government rules limit how long one family may use a plot',
              'Frequent frosts shorten the growing season on older plots',
              'Rising land prices push farmers to cheaper plots each year'
            ],
            correctAnswer: 0,
            explanation: 'Rainforest soils are thin and leached, so the ash from burned vegetation supplies fertility for only two or three years. Rainforests do not have frost, and the practice is driven by soil, not by rules or land prices.'
          },
          {
            question: 'Drip irrigation lets Israeli farmers grow tomatoes and peppers in the Negev desert. Which idea does this example best support?',
            options: [
              'Possibilism',
              'Environmental determinism',
              'Distance decay',
              'Sequent occupance'
            ],
            correctAnswer: 0,
            explanation: 'Possibilism holds that the environment sets limits but people choose among options with technology. Environmental determinism would predict that a desert cannot be farmed for vegetables.'
          }
        ]
      }
    },
    {
      id: 'hgagricu2-intensity',
      type: 'text' as const,
      content: `
## Intensive and Extensive Land Use

**Intensity** measures how much **labor and capital** a farmer puts into each unit of **land**, and usually how much output each unit of land returns.

| | Intensive | Extensive |
|---|---|---|
| **Inputs per hectare** | High labor, fertilizer, machinery or irrigation | Low inputs spread over large areas |
| **Output per hectare** | High | Low |
| **Land value** | Usually high (near cities, scarce fertile land) | Usually low (remote, dry or poor soils) |
| **CED examples** | Market gardening, plantation agriculture, mixed crop and livestock systems | Shifting cultivation, nomadic herding, ranching |

### Intensity Is Not the Same as Commercial
Students often assume "intensive" means "modern" or "commercial." It does not. Intensity and market orientation are **separate dimensions**:

| | Subsistence | Commercial |
|---|---|---|
| **Intensive** | Wet rice in the Ganges and Mekong deltas: tiny plots, enormous labor per hectare | Market gardening, plantations, Dutch greenhouses |
| **Extensive** | Shifting cultivation; pastoral nomadism in Mongolia and the Sahel | Cattle ranching in Australia and the U.S. West |

### Worked Example: Comparing Two Farms
Farm A is a **market garden** of 4 hectares near a city. Its annual output is worth \\$200,000.
Farm B is a **cattle ranch** of 5,000 hectares in a semi-arid region. Its annual output is worth \\$500,000.

1. Output per hectare, Farm A: \\$200,000 ÷ 4 = **\\$50,000 per hectare**.
2. Output per hectare, Farm B: \\$500,000 ÷ 5,000 = **\\$100 per hectare**.
3. Ratio: \\$50,000 ÷ \\$100 = **500**. Each hectare of the market garden produces 500 times as much value.

The ranch still earns **more in total**. Extensive does not mean poor or unprofitable; it means the farm uses a lot of cheap land rather than a little expensive land. Part 3 shows why land value falls with distance from the market, which is the reason intensity usually falls too.
`
    },
    {
      id: 'hgagricu2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A wheat farm in Kansas covers 800 hectares and sells a crop worth \\$480,000. A greenhouse farm in the Netherlands covers 5 hectares and sells produce worth \\$1,500,000.

**1)** What is the wheat farm's output per hectare, in dollars?

**2)** What is the greenhouse farm's output per hectare, in dollars?

**3)** How many times greater is the greenhouse farm's output per hectare?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '300000', '500'],
        hint1: 'Divide the value of the crop by the number of hectares: 480,000 ÷ 800.',
        hint2: 'Divide 1,500,000 by 5.',
        hint3: 'Divide your answer to question 2 by your answer to question 1.',
        explanation: '1) 480,000 ÷ 800 = 600 dollars per hectare. 2) 1,500,000 ÷ 5 = 300,000 dollars per hectare. 3) 300,000 ÷ 600 = 500, so the greenhouse is far more intensive.'
      }
    },
    {
      id: 'hgagricu2-regions',
      type: 'text' as const,
      content: `
## Agricultural Production Regions

An **agricultural production region** is an area where one type of farming dominates because climate, markets and culture favor it. The CED defines these regions by **how subsistence or commercial** their farming is, and by which crops or livestock they **specialize** in.

| Region | Physical setting | Dominant practice | Why it fits |
|---|---|---|---|
| **Monsoon Asia** (Ganges, Yangtze and Mekong lowlands) | Warm, monsoon rains, flat floodplains | Intensive wet rice, much of it subsistence | Rice yields many calories per hectare; dense rural populations supply the labor |
| **U.S. Corn Belt** (Iowa, Illinois) | Humid continental, deep fertile soils | Mixed crop and livestock | Corn and soybeans are fed to hogs and cattle, and the meat is sold |
| **Wheat belts** (Great Plains, Canadian Prairies, Ukraine, Argentina's Pampas) | Flat, semi-arid to subhumid | Commercial grain | Large machines work huge flat fields; grain stores and ships well |
| **Ranching lands** (interior U.S. West, Australia, Patagonia) | Too dry for most crops | Extensive ranching | Cheap land, low rainfall |
| **Mediterranean lands** | Dry summers, wet winters | Mediterranean agriculture | Olives, grapes and citrus tolerate summer drought |
| **Dairy regions** (U.S. Northeast and Great Lakes, northwest Europe, New Zealand) | Cool, humid; grass grows well | Commercial dairy | Pasture plus nearby urban markets |
| **Tropical plantation zones** (Brazil, Côte d'Ivoire, Indonesia, Central America) | Hot, humid | Plantation agriculture for export | Coffee, cocoa, bananas, sugarcane and oil palm need tropical heat |
| **Dry lands** (Sahel, Mongolia, Horn of Africa) | Arid or semi-arid | Pastoral nomadism | Herds move to find seasonal grass and water |

### Culture and Markets Shape Regions Too
- **Religion:** hogs are rare across predominantly Muslim regions; in much of India, cattle are kept for milk and draft power far more than for beef.
- **Dairy milksheds:** dairy farms cluster within reach of large cities, because fresh milk is bulky and perishable.

### Limitations of the Region Idea
Production regions are **generalizations at the global or continental scale**. Their edges are gradients, not lines, and one country can contain several regions: Brazil has commercial soybean farms in Mato Grosso, cattle ranches on the Amazon frontier and shifting cultivation in remote forest communities. At the **local scale**, a single valley can mix dairy, orchards and vegetables.

> 🔑 **AP Connection:** If a stimulus describes a climate and asks for the likely practice, use the table above. If it asks for a **limitation**, say the region hides local variation or ignores how technology and markets change what is grown.
`
    },
    {
      id: 'hgagricu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these farming practices is extensive rather than intensive?',
            options: [
              'Cattle ranching across semi-arid grassland',
              'Market gardening on the edge of a large city',
              'Oil palm plantations on tropical lowlands',
              'Corn and hog production on an Iowa farm'
            ],
            correctAnswer: 0,
            explanation: 'Ranching spreads few inputs over very large areas of cheap, dry land, so output per hectare is low. Market gardening, plantations and mixed crop and livestock systems are the CED\'s examples of intensive practices.'
          },
          {
            question: 'Wet-rice farming in the Ganges delta is subsistence and intensive, while cattle ranching in Australia is commercial and extensive. What does this comparison show?',
            options: [
              'Intensity and market orientation vary independently',
              'Subsistence farming is always the more intensive type',
              'Commercial farms always use less labor per hectare',
              'Climate alone decides how intensive a farm will be'
            ],
            correctAnswer: 0,
            explanation: 'Intensity measures inputs per hectare, while subsistence and commercial describe who consumes the output, so the two vary separately. Shifting cultivation is subsistence but extensive, and market gardens are commercial and very intensive.'
          },
          {
            question: 'A region has cool, wet summers, good pasture and several large cities within a short drive. Which commercial practice is most likely there?',
            options: [
              'Dairy farming',
              'Plantation agriculture',
              'Spring wheat farming',
              'Mediterranean agriculture'
            ],
            correctAnswer: 0,
            explanation: 'Good pasture and nearby urban markets favor dairy, because fresh milk is perishable and bulky. Plantations need tropical heat, Mediterranean crops need dry summers, and wheat belts are drier and farther from cities.'
          }
        ]
      }
    }
  ]
}
