export const hgAgriculturalPracticesPart1Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgap1-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 1 of 7 — From Subsistence to Commercial Farming**

---

## Types of Agriculture

| Type | Goal | Scale | Technology | Example |
|------|------|-------|-----------|---------|
| **Subsistence** | Feed family/community | Small | Low — hand tools | Shifting cultivation, pastoral nomadism |
| **Commercial** | Sell for profit | Large | High — machinery | Grain farming, livestock ranching |

> 🔑 **AP Key Point:** The AP exam focuses on WHERE different farming types occur and WHY — connecting agriculture to climate, development level, and cultural practices.

---

## Subsistence Agriculture Types

| Practice | Description | Location |
|----------|-----------|----------|
| **Shifting cultivation** | Slash-and-burn; rotate fields every few years | Tropical regions (Amazon, Central Africa, SE Asia) |
| **Pastoral nomadism** | Herding livestock; moving with grazing | Arid/semi-arid regions (Sahel, Central Asia) |
| **Intensive subsistence (wet rice)** | Paddy rice on small plots; high labor | East and South Asia (China, India, Bangladesh) |
| **Intensive subsistence (non-rice)** | Wheat, barley on small plots; high labor | Drier parts of Asia |
| **Plantation** | Large-scale tropical crops for export | Tropical developing countries (coffee, rubber, palm oil) |
      `
    },
    {
      id: 'hgap1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Shifting cultivation (slash-and-burn) is a form of:',
            options: [
              'Commercial agriculture',
              'Subsistence agriculture',
              'Plantation farming',
              'Mixed crop and livestock farming'
            ],
            correctAnswer: 1,
            explanation: 'Shifting cultivation is a subsistence practice where farmers clear forest, grow crops until soil is depleted, then move on. It feeds the local community, not external markets.'
          },
          {
            question: 'Pastoral nomadism is most commonly practiced in:',
            options: [
              'Humid tropical rainforests',
              'Arid and semi-arid grasslands',
              'Dense urban areas',
              'Temperate coastal regions'
            ],
            correctAnswer: 1,
            explanation: 'Pastoral nomadism occurs in arid/semi-arid regions where farming is difficult — herders move livestock to follow water and grazing land (Sahel, Central Asia, Middle East).'
          }
        ]
      }
    },
    {
      id: 'hgap1-content',
      type: 'text' as const,
      content: `
## The Von Thunen Model (1826)

Johann von Thunen proposed that agricultural land use forms concentric rings around a central market:

| Ring | Activity | Why Here? |
|------|----------|----------|
| **1 (closest)** | Dairy, market gardens | Perishable goods need quick transport |
| **2** | Forest | Heavy timber expensive to transport |
| **3** | Field crops (grain) | Less perishable, cheaper to transport |
| **4 (farthest)** | Ranching/livestock | Animals can walk to market |

**Assumptions:** Flat terrain, single market, uniform soil, no roads.

**Real-world modifications:** Rivers, highways, and multiple markets distort the rings. Modern refrigeration reduces the perishability constraint. But the core principle — **transportation cost shapes land use** — remains valid.

## Commercial Agriculture Types

| Practice | Description | Location |
|----------|-----------|----------|
| **Mixed crop and livestock** | Both crops and animals on same farm | US Midwest, Western Europe |
| **Dairy farming** | Milk production near urban markets | US Northeast, Northern Europe, New Zealand |
| **Grain farming** | Large-scale wheat, corn, rice | US Great Plains, Canadian Prairies, Ukraine |
| **Livestock ranching** | Extensive grazing on large areas | US West, Argentina, Australia |
| **Mediterranean agriculture** | Olives, grapes, fruits, vegetables | Southern Europe, California, Chile |
      `
    },
    {
      id: 'hgap1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Agriculture that feeds the farmer family rather than producing for sale is called _______ agriculture.

2) Agriculture that produces crops primarily for sale and profit is called _______ agriculture.

3) The model showing concentric rings of agricultural land use around a market is the _______ Model.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['subsistence', 'commercial', 'Von Thunen'],
        hint1: 'The opposite of commercial farming.',
        hint2: 'Sold on markets for money.',
        hint3: 'Named after a German economist.',
        explanation: 'Subsistence = farming to feed your family. Commercial = farming for profit. Von Thunen Model = concentric rings based on transportation costs.'
      }
    },
    {
      id: 'hgap1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Agriculture Type** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In Von Thunen model, dairy farming is in ring 1 because ___',
            options: ['Dairy products are perishable and expensive to transport', 'Cows need the most fertile soil', 'Dairy is the most profitable farming type', 'Government regulations require it']
          },
          {
            label: 'Wet rice intensive subsistence farming is primarily found in ___',
            options: ['East and South Asia', 'Sub-Saharan Africa', 'Western Europe', 'North America']
          },
          {
            label: 'Large-scale ranching occupies the outermost ring in Von Thunen model because ___',
            options: ['Animals can walk to market and need lots of land', 'Ranching is the most profitable type', 'Ranchers prefer isolation', 'Government land grants are only available far from cities']
          }
        ],
        correctAnswers: ['Dairy products are perishable and expensive to transport', 'East and South Asia', 'Animals can walk to market and need lots of land'],
        hint1: 'Think about what happens to milk in hot weather without refrigeration.',
        hint2: 'Where is rice the staple food crop?',
        hint3: 'Land is cheap far from the market.',
        explanation: 'Dairy = perishable, must be near market. Wet rice = East/South Asia. Ranching = animals self-transport and need extensive cheap land.'
      }
    },
    {
      id: 'hgap1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Agricultural Geography

- Always connect agriculture type to **climate** and **development level**
- Von Thunen is a theoretical model — know its assumptions AND real-world modifications
- **Bid-rent theory** is similar to Von Thunen but for urban land use
- Know how the Green Revolution affected developing countries (both positive and negative)
- Understand **food deserts** — areas in developed countries with limited access to fresh food
      `
    },
    {
      id: 'hgap1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A new highway connecting a rural area to a city would MOST likely affect Von Thunen rings by:',
            options: [
              'Eliminating all agricultural activity near the highway',
              'Extending agricultural zones along the highway corridor',
              'Having no effect on the spatial pattern',
              'Reversing the order of the rings'
            ],
            correctAnswer: 1,
            explanation: 'Highways reduce transportation costs, extending the distance that perishable goods can profitably travel. This stretches the rings along the transportation corridor, distorting the concentric pattern.'
          },
          {
            question: 'Which pair of agricultural practices would you most likely find in Stage 2 (developing) vs Stage 4 (developed) countries respectively?',
            options: [
              'Commercial grain farming and pastoral nomadism',
              'Shifting cultivation and commercial dairy farming',
              'Mediterranean agriculture and plantation agriculture',
              'Livestock ranching and intensive subsistence farming'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 developing countries rely on subsistence methods like shifting cultivation. Stage 4 developed countries use commercial, technology-intensive methods like dairy farming.'
          }
        ]
      }
    }
  ]
};
