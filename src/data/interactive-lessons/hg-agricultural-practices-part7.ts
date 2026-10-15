export const hgAgriculturalPracticesPart7Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu7-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 7 of 7 — Synthesis Review: From Field to Global Market**

---

| Section |
|---------|
| 📖 How the Parts Fit Together |
| One Case Through Every Lens: Soybeans in Brazil |
| Models and Ideas with Their Limits |
| Mixed Review |

> 🔑 **Key Concept:** This topic follows a chain. The **physical environment** sets what can be grown; **land value and markets** set how intensively; **agribusiness** organizes production into **commodity chains**; those chains tie places into a **global food system**; and the whole system has **environmental consequences** and **social challenges**, including who goes hungry and whose work is counted.
`
    },
    {
      id: 'hgagricu7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Parts Fit Together

| Part | Big question | Core ideas |
|---|---|---|
| 1 | What kinds of farming exist? | Subsistence vs. commercial; main farming types; von Thünen basics |
| 2 | Why is a practice found in a place? | Climate, soil, slope and water; intensive vs. extensive; production regions and their limits |
| 3 | How does distance to market sort land use? | Land rent $R = Y(p - c) - Yfd$; crossover distances; refrigeration and highways; Uruguay; global scale; bid-rent link |
| 4 | How is commercial farming organized? | Monocropping, economies of scale, agribusiness, vertical integration; U.S. consolidation; commodity chains; food dependence, cash crops, fair trade |
| 5 | What does farming do to the land? | Deforestation, slash-and-burn fallows, desertification, salinization, drained wetlands, runoff; conservation at local, national and global scales |
| 6 | What are today's food debates? | GMOs, aquaculture, organic and local food, diet shifts, hunger data, food deserts, women in agriculture |

## One Case Through Every Lens: Soybeans in Brazil

| Lens | Soybeans in Brazil |
|---|---|
| **Physical environment** | The Cerrado, a tropical savanna, has flat land and reliable rain but acidic soils; research by Brazil's agricultural agency Embrapa from the 1970s showed that lime and fertilizer could make it farmable |
| **Intensity and region** | Commercial grain production on very large, mechanized farms; Mato Grosso is the leading soybean state |
| **Von Thünen** | The frontier lies far from the coast, so soy was costly to ship; new highways such as BR-163 and river ports on Amazon tributaries cut freight costs and pushed profitable farming farther inland |
| **Spatial organization** | Monocropping at huge scale, with seed, fertilizer, credit and export handled by agribusiness firms and global grain traders |
| **Global system** | Brazil is the world's largest soybean exporter, and China buys most of its exports, largely as feed for pigs and poultry |
| **Environmental consequences** | Clearing of the Cerrado and the Amazon edge; the 2006 Soy Moratorium covers the Amazon but not the Cerrado, so clearing pressure shifted there |
| **Challenges** | Diet shifts toward meat in China drive feed demand in Brazil; genetically engineered varieties dominate the crop |
| **Scale** | Local: a cleared farm. Regional: the Cerrado frontier. Global: a commodity chain linking Mato Grosso to pig farms in China |

> 🔑 **AP Connection:** A strong answer moves along the chain: "Rising meat consumption in China (**dietary shift**) increased demand for feed, which Brazilian agribusiness met by expanding **monocropped** soy into the Cerrado (**land cover change**), helped by new highways that cut **transport costs**."
`
    },
    {
      id: 'hgagricu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Brazilian soybeans are grown on huge farms in Mato Grosso, sold through international trading firms and shipped mostly to China as animal feed. Which pair of concepts does this best illustrate?',
            options: [
              'Agribusiness and a global commodity chain',
              'Subsistence farming and food dependence',
              'Shifting cultivation and local food sales',
              'Pastoral nomadism and fair trade buying'
            ],
            correctAnswer: 0,
            explanation: 'Large commercial farms linked to traders and overseas buyers form an agribusiness system and a global commodity chain. Subsistence farming and shifting cultivation feed the farmer\'s household rather than distant markets.'
          },
          {
            question: 'New river ports and a paved highway in northern Brazil cut the cost of shipping soybeans from Mato Grosso. According to von Thünen\'s logic, what should happen?',
            options: [
              'Commercial grain farming should extend farther inland',
              'Farmland near the ports should revert to wilderness',
              'Ranching should replace grain on land near the highway',
              'Grain farming should retreat closer to the old markets'
            ],
            correctAnswer: 0,
            explanation: 'Lower freight rates flatten the rent line, so grain stays profitable at greater distances and the zone expands. Cheaper transport does not push grain back toward the old markets or turn farmland into wilderness.'
          },
          {
            question: 'Brazil\'s Soy Moratorium covers the Amazon but not the Cerrado. What is a likely consequence?',
            options: [
              'New clearing shifts toward less protected savanna',
              'Soybean output in Brazil falls to near zero',
              'Cattle ranching ends across the Amazon basin entirely',
              'All Brazilian soy becomes certified organic'
            ],
            correctAnswer: 0,
            explanation: 'When one region is protected and a neighboring one is not, expansion tends to move to the unprotected land. Brazil remains the largest soybean exporter, and the moratorium covers soy, not cattle or organic rules.'
          }
        ]
      }
    },
    {
      id: 'hgagricu7-limits',
      type: 'text' as const,
      content: `
## Models and Ideas with Their Limits

| Idea | What it explains well | Limitation |
|---|---|---|
| **Von Thünen's model** | Why intensity and land rent fall with distance from a market | Assumes a flat plain, one market and one transport mode; refrigeration, highways, air freight and subsidies reshape or erase the rings |
| **Production regions** | Broad global patterns tied to climate and markets | Generalizations at the global scale; edges are gradients, and one country can hold several regions |
| **Intensive vs. extensive** | How much labor and capital go into each hectare | Not the same as commercial vs. subsistence; wet rice is intensive subsistence, ranching is extensive commercial |
| **Commodity chains** | How a product links distant producers and consumers | A simple chain hides who captures the value and the environmental costs at each stage |
| **Regional hunger data** | Where food insecurity is most common | Averages hide local hot spots; rates and counts can point to different regions |
| **Farm labor statistics** | Trends in who works on farms | Unpaid family work, often done by women, is undercounted, and census rules change over time |

### Five Errors to Avoid
1. Calling **plantation agriculture** subsistence. It is commercial, export-oriented and usually large-scale.
2. Treating **intensive** as a synonym for **commercial**. Intensity is about inputs per hectare.
3. Reciting von Thünen's rings without saying **which assumption** a real case breaks.
4. Explaining hunger as a lack of world food. Most hunger reflects **access**: poverty, conflict and weak infrastructure.
5. Mixing up **vertical** integration (stages of one chain) and **horizontal** integration (buying rivals).
`
    },
    {
      id: 'hgagricu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Planting the same genetically engineered corn on the same fields every year is ___',
            options: ['Monocropping', 'Shifting cultivation', 'Crop rotation', 'Intercropping']
          },
          {
            label: 'A coffee cooperative receives a guaranteed minimum price plus a premium to build a new well. This is ___',
            options: ['Fair trade', 'Food dependence', 'Vertical integration', 'Agribusiness']
          },
          {
            label: 'In von Thünen\'s model, the product with the steepest rent line takes the ___',
            options: ['Ring nearest the market', 'Outermost ring', 'Middle ring', 'Land beyond the rings']
          }
        ],
        correctAnswers: ['Monocropping', 'Fair trade', 'Ring nearest the market'],
        hint1: 'One crop, same field, year after year.',
        hint2: 'A price floor and a community premium.',
        hint3: 'A steep line earns the most rent close to the market.',
        explanation: 'Repeating one crop on the same field is monocropping. A minimum price plus a community premium defines fair trade. A steep rent line starts highest at the market, so that product wins the innermost ring.'
      }
    },
    {
      id: 'hgagricu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about von Thünen\'s model is most accurate today?',
            options: [
              'Distance still matters, but less than in 1826',
              'Distance no longer has any effect on farm land use',
              'The rings appear exactly as predicted around cities',
              'The model applies only to subsistence farming today'
            ],
            correctAnswer: 0,
            explanation: 'Transport costs still shape land use, as the Montevideo rings and modern frontier expansion show, but refrigeration, highways and air freight have weakened the pull of distance. Real rings are distorted, and the model was built for commercial farming.'
          },
          {
            question: 'Which pairing of problem and conservation response is correctly matched?',
            options: [
              'Soil salinization and improved field drainage',
              'Desertification and draining nearby wetlands',
              'Fertilizer runoff and center-pivot irrigation',
              'Steep-slope erosion and continuous monocropping'
            ],
            correctAnswer: 0,
            explanation: 'Drainage carries away the salts that irrigation water leaves behind, so it directly addresses salinization. Draining wetlands, extra irrigation and monocropping tend to worsen the other problems rather than solve them.'
          }
        ]
      }
    }
  ]
}
