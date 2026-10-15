export const apesBiodiversityPart3Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod3-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 3 of 7 — Ecosystem Services and Their Value**

---

| Section |
|---------|
| 🌳 The Four Categories of Ecosystem Services |
| How Human Activity Disrupts Each Category |
| Putting a Price on Nature |
| Calculating Costs and Percent Change |
| What Valuation Leaves Out |

> 🔑 **Key Concept:** **Ecosystem services** are the benefits people receive from ecosystems. Most of them are free, so markets tend to ignore them until they are lost. This part classifies the services, traces what happens when human activity disrupts them, and shows how to compare the cost of protecting a service with the cost of replacing it.
      `
    },
    {
      id: 'apesbiod3-categories',
      type: 'text' as const,
      content: `
## 🌳 The Four Categories of Ecosystem Services

| Category | What it is | Classic examples |
|---|---|---|
| **Provisioning** | Goods people **harvest** directly from an ecosystem | Food (fish, game, wild fruit), timber and fuelwood, fresh water, fibers, medicines |
| **Regulating** | Benefits from an ecosystem **moderating** natural processes | Climate regulation (forests and soils storing carbon), flood control by wetlands and floodplains, erosion control by plant roots, storm-surge protection by mangroves and coral reefs |
| **Cultural** | **Non-material** benefits | Recreation, ecotourism, spiritual and religious value, scenic beauty, education and scientific research |
| **Supporting** | The **underlying processes** that keep every other service running | Nutrient cycling, soil formation, primary production (photosynthesis) |

### A Provisioning Example: Medicine
The cancer drug **paclitaxel (Taxol)** was first isolated from the bark of the **Pacific yew**, a tree of old-growth forests in the Pacific Northwest. Many medicines trace back to compounds first found in wild plants, fungi and microbes, which is one reason losing species can mean losing future medicines.

### Supporting Services Work Behind the Scenes
People rarely use a supporting service directly. Nobody buys "soil formation," but without it there would be no crops (provisioning), no forests to store carbon (regulating) and no parks to hike in (cultural). Supporting services are the foundation the other three stand on.

> ⚠️ **Classification note (from Part 1):** A few services are filed differently by different sources. **Pollination** and **water purification by wetlands** are regulating services in the Millennium Ecosystem Assessment, but some APES textbooks list them as supporting. If an FRQ asks you to classify one of these, name a category **and** describe what the ecosystem is doing ("bees transfer pollen, which lets crop plants produce fruit"). The description earns credit whichever label the scorer expects.
      `
    },
    {
      id: 'apesbiod3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A coastal city keeps its mangrove forest intact, and during hurricanes the mangroves absorb wave energy and reduce storm-surge damage to homes. Which ecosystem service is this?',
            options: [
              'Provisioning, because the forest supplies a material good',
              'Regulating, because the forest moderates a natural hazard',
              'Cultural, because residents value the forest for its scenery',
              'Supporting, because the forest builds soil for other services'
            ],
            correctAnswer: 1,
            explanation: 'Mangroves moderate a natural process, storm surge, so this is a regulating service. Nothing is harvested, the benefit is physical protection rather than enjoyment, and the protection is used directly, unlike a background supporting process.'
          },
          {
            question: 'The cancer drug paclitaxel was first isolated from the bark of the Pacific yew tree. Which category of ecosystem service does this represent?',
            options: [
              'Regulating',
              'Cultural',
              'Provisioning',
              'Supporting'
            ],
            correctAnswer: 2,
            explanation: 'A medicine harvested from an organism is a good taken directly from the ecosystem, which makes it a provisioning service. Regulating services moderate processes, cultural services are non-material, and supporting services are background processes such as nutrient cycling.'
          },
          {
            question: 'Nutrient cycling and soil formation are classed as supporting services. What sets supporting services apart from the other three categories?',
            options: [
              'They help people indirectly, by keeping other benefits going',
              'People can buy and sell them in markets, much like timber or fish',
              'They operate only in ecosystems that humans have never disturbed',
              'They provide mainly spiritual and recreational benefits to people'
            ],
            correctAnswer: 0,
            explanation: 'Supporting services are rarely used directly; they keep provisioning, regulating and cultural services running. They are not traded in markets, they operate in disturbed ecosystems too, and spiritual or recreational value is the cultural category.'
          }
        ]
      }
    },
    {
      id: 'apesbiod3-disruption',
      type: 'text' as const,
      content: `
## How Human Activity Disrupts Each Category

The CED states that human activities can disrupt ecosystem services, with both **ecological** and **economic** consequences. FRQs often ask for one of each, so learn to name them separately.

| Category | Human disruption | Ecological consequence | Economic consequence |
|---|---|---|---|
| **Provisioning** | Overfishing of Atlantic cod off Newfoundland | The cod population collapsed and has not fully recovered | Canada closed the northern cod fishery in 1992, and tens of thousands of people lost their jobs |
| **Regulating** | Clearing mangroves for shrimp farms and coastal development | The coast loses its storm-surge buffer, and young fish lose nursery habitat | Higher storm-repair costs and smaller fish catches |
| **Regulating** | Draining wetlands and paving floodplains | Rain runs off faster, so floods downstream are higher | More flood damage and the cost of building levees |
| **Regulating** | Clearing and burning forests | Stored carbon is released as $CO_{2}$ | Costs linked to climate change rise |
| **Cultural** | Ocean warming and pollution that bleach and kill coral | Reefs lose living coral and fish | Dive and snorkel tourism income falls |
| **Supporting** | Overgrazing and repeated tillage that erode topsoil | Less soil organic matter and slower nutrient cycling | Farmers pay for more synthetic fertilizer, and yields can still fall |

> 🔑 **AP Connection:** "It hurts the economy" earns nothing. A credited economic consequence names **who pays and how**: "fishers lose income," "the city must pay to treat drinking water," "hotels lose ecotourism revenue."
      `
    },
    {
      id: 'apesbiod3-valuation',
      type: 'text' as const,
      content: `
## Putting a Price on Nature

Because most services are free, decision makers can treat them as worth zero. Economists estimate their value in several ways:

| Method | Question it asks | Example |
|---|---|---|
| **Market price** | What do the goods sell for? | The dock price of fish or timber |
| **Replacement cost** | What would it cost to do the job with technology? | A filtration plant instead of a protected watershed |
| **Avoided damage cost** | How much damage does the service prevent? | Flood losses a wetland prevents |
| **Willingness to pay** | What would people pay to keep it? | Park entry fees, travel costs of visitors |

**A real case.** In the 1990s, New York City faced a federal requirement to filter its drinking water unless it protected the water at its source. A filtration plant for the Catskill and Delaware supply was estimated to cost several billion dollars. The city chose instead to buy land and pay farmers and towns in the watershed to reduce pollution, a far cheaper way to keep the water clean.

---

## Calculating Costs and Percent Change

All numbers in these worked examples are **hypothetical**, chosen to show the method.

### Worked Example 1: Protect or Replace?

A city must keep its drinking water clean for the next **20 years**.

| | Option A: build a filtration plant | Option B: protect the watershed |
|---|---|---|
| Up-front cost | \\$600 million | \\$100 million (buy forest land) |
| Yearly cost | \\$30 million to operate | \\$10 million to manage the land |

1. Option A total: $600 + (30 \\times 20) = 600 + 600 = $ **\\$1,200 million**
2. Option B total: $100 + (10 \\times 20) = 100 + 200 = $ **\\$300 million**
3. Savings from Option B: $1{,}200 - 300 = $ **\\$900 million**
4. Percent difference relative to Option A: $\\dfrac{300 - 1{,}200}{1{,}200} \\times 100 = -75\\%$

Protecting the watershed costs **75% less**, and the forest keeps providing other services (carbon storage, recreation) for free.

### Worked Example 2: Percent Change After a Disruption

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$$

A town's average yearly flood damage was \\$4 million. After an upstream wetland is drained, it rises to \\$10 million.

$\\dfrac{10 - 4}{4} \\times 100 = \\dfrac{6}{4} \\times 100 = $ **+150%**

Always divide by the **old** value. Dividing by the new value (6 ÷ 10 = 60%) is the most common mistake.

### Worked Example 3: Value per Hectare, with a Unit Conversion

A study values a wetland's flood control at \\$3,000 per hectare per year. The wetland covers **2.5 km²**.

1. Convert area. Since $1 \\text{ km}^2 = 100 \\text{ ha}$: $2.5 \\text{ km}^2 \\times 100 \\dfrac{\\text{ha}}{\\text{km}^2} = 250 \\text{ ha}$
2. Multiply: $250 \\text{ ha} \\times \\$3{,}000 \\text{ per ha per year} = $ **\\$750,000 per year**

> 🔑 **AP Connection:** On calculation FRQs, show the setup with units, not just the final number. Write "(10 − 4) ÷ 4 × 100 = 150%," and label the answer with its unit.
      `
    },
    {
      id: 'apesbiod3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

All values are hypothetical.

**1)** A fishery's yearly catch fell from 50,000 tonnes to 12,000 tonnes after years of overfishing. By what percent did the catch decrease? (number only)

**2)** A 6 km² mangrove forest is valued at \\$4,000 per hectare per year for storm protection. What is its total yearly value, in millions of dollars?

**3)** A filtration plant would cost \\$400 million to build plus \\$20 million per year to run. Protecting the watershed would cost \\$80 million plus \\$4 million per year. Over 25 years, how many million dollars does watershed protection save?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['76', '2.4', '720'],
        hint1: 'Percent change = (12,000 − 50,000) ÷ 50,000 × 100. Report the size of the decrease.',
        hint2: 'Convert first: 6 km² × 100 = 600 ha. Then multiply by \\$4,000 and express the result in millions.',
        hint3: 'Plant: 400 + (20 × 25). Watershed: 80 + (4 × 25). Subtract the smaller total from the larger.',
        explanation: '1) (12,000 − 50,000) ÷ 50,000 × 100 = −76%, a 76% decrease. 2) 600 ha × \\$4,000 = \\$2,400,000, or \\$2.4 million per year. 3) The plant costs 400 + 500 = \\$900 million and watershed protection costs 80 + 100 = \\$180 million, so protection saves \\$720 million.'
      }
    },
    {
      id: 'apesbiod3-limits',
      type: 'text' as const,
      content: `
## What Valuation Leaves Out

Dollar values are useful for comparing options, but they have limits:

- **Some values resist pricing.** What is a sacred mountain or the existence of blue whales worth? Willingness-to-pay surveys capture only part of it.
- **Services are linked.** Draining a wetland removes flood control **and** fish nursery habitat **and** bird-watching, so valuing one service at a time underestimates the loss.
- **Losses can be irreversible.** A filtration plant can be rebuilt; an extinct species that might have yielded a medicine cannot.
- **Costs and benefits fall on different people.** The developer who drains the wetland profits, while downstream homeowners pay for the floods. Economists call this an **externality**.

> 🔑 **Key Concept:** Biodiversity underlies all four categories. More species and more genetic variety mean more possible foods and medicines, more organisms doing regulating and supporting work, and richer places for people to enjoy. How societies protect these services through laws and reserves is the subject of **Biodiversity Conservation** (Unit 9).
      `
    },
    {
      id: 'apesbiod3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Service** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tourists paying a local guide to snorkel over a coral reef is a ___ service',
            options: ['Supporting', 'Cultural', 'Provisioning', 'Regulating']
          },
          {
            label: 'Villagers gathering mushrooms and fuelwood from a nearby forest is a ___ service',
            options: ['Regulating', 'Supporting', 'Cultural', 'Provisioning']
          },
          {
            label: 'Tree roots holding a steep hillside together during heavy rain is a ___ service',
            options: ['Provisioning', 'Regulating', 'Supporting', 'Cultural']
          }
        ],
        correctAnswers: ['Cultural', 'Provisioning', 'Regulating'],
        hint1: 'The tourists take nothing home except an experience.',
        hint2: 'The villagers carry goods out of the forest.',
        hint3: 'The roots control erosion, a natural process.',
        explanation: 'Snorkeling tourism is a non-material benefit, so it is cultural. Mushrooms and fuelwood are goods harvested from the forest, so they are provisioning. Roots that prevent erosion moderate a natural process, so they are regulating.'
      }
    }
  ]
}
