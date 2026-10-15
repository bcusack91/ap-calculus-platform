export const hgAgriculturalPracticesPart5Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu5-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 5 of 7 — Environmental Consequences and Conservation**

---

| Section |
|---------|
| 📖 How Farming Changes Land Cover |
| Desertification and Pastoral Nomadism |
| Water: Irrigation, Salinization and Wetlands |
| Pollution from Farms |
| Conservation Practices and Their Scale |

> 🔑 **Key Concept:** Every farming practice changes the landscape. The CED lists **slash-and-burn, terraces, irrigation, deforestation, draining wetlands, shifting cultivation and pastoral nomadism** as practices that alter land, and **pollution, land cover change, desertification, soil salinization and conservation efforts** as the environmental issues that follow (CED Topic 5.10).
`
    },
    {
      id: 'hgagricu5-landcover',
      type: 'text' as const,
      content: `
## 📖 How Farming Changes Land Cover

### Deforestation for Pasture and Cash Crops
- **Amazon:** cattle pasture is the largest single use of cleared land; studies commonly estimate that roughly 80 percent of deforested land in the Brazilian Amazon ends up as pasture. Soybeans follow on older cleared land. Under the **Soy Moratorium** of 2006, major traders agreed not to buy soy grown on newly cleared Amazon land, which slowed direct soy-driven clearing.
- **Southeast Asia:** Indonesia and Malaysia produce about 85 percent of the world's palm oil. Plantations have replaced large areas of lowland rainforest and drained peat swamps, releasing stored carbon and shrinking orangutan habitat.

Clearing forest for farms is a **global** issue (carbon and climate), a **regional** one (rainfall patterns in the Amazon basin) and a **local** one (lost hunting, fishing and farming grounds for Indigenous communities).

### Slash-and-Burn: Sustainable or Not?
Shifting cultivation clears a small plot, farms it for two or three years, then leaves it **fallow** so the forest regrows.

| Condition | Result |
|---|---|
| Low population density, fallow of a decade or more | Forest and soil recover; the system can last for centuries |
| Rising population, fallow cut to a few years | Soil has no time to recover; yields fall and the forest is replaced by scrub or grass |

The practice itself is not the problem; **the length of the fallow** is. A geographer would also ask whether the clearing is done by subsistence farmers or by commercial ranchers using fire, because the two operate at very different scales.

## Desertification and Pastoral Nomadism

**Desertification** is land degradation in arid, semi-arid and dry subhumid areas caused by **climatic variation and human activity** (UN definition). The **Sahel**, the semi-arid belt south of the Sahara, is the classic case: severe droughts from the late 1960s into the 1980s combined with heavier grazing and cropping on marginal land.

**Pastoral nomadism** itself is an adaptation to dry land: moving herds lets grass recover. Problems grow when herds are **confined**, for example by new borders, by farms expanding onto old grazing routes, or by government programs that settle nomads in one place. A fixed herd on the same pasture strips the vegetation, the bare soil blows away, and the land **overgrazes** toward desert. The African Union's **Great Green Wall** initiative (launched 2007) aims to restore land across the Sahel with trees and better land management.
`
    },
    {
      id: 'hgagricu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Shifting cultivation sustained forest communities for centuries but now often causes lasting forest loss. Which change best explains this?',
            options: [
              'Fallow periods have shortened as populations grow',
              'Rainforest soils have become more fertile over time',
              'Farmers have switched from burning to plowing fields',
              'Tropical rainfall has increased across most regions'
            ],
            correctAnswer: 0,
            explanation: 'When fallow periods are long, forest and soil recover between clearings; shorter fallows under population pressure leave no time to recover. Rainforest soils remain poor, and burning, not plowing, is still the usual method.'
          },
          {
            question: 'Which human activity most directly contributes to desertification in the Sahel?',
            options: [
              'Overgrazing by herds confined to shrinking ranges',
              'Planting tree belts along the edge of the desert',
              'Shifting cultivation in nearby tropical rainforests',
              'Building terraces on steep slopes for rice paddies'
            ],
            correctAnswer: 0,
            explanation: 'Herds kept on the same pasture strip the vegetation and expose the soil to wind erosion. Tree belts are a response to desertification, and rainforests and rice terraces are not features of the Sahel.'
          }
        ]
      }
    },
    {
      id: 'hgagricu5-water',
      type: 'text' as const,
      content: `
## Water: Irrigation, Salinization and Wetlands

Agriculture accounts for about **70 percent** of global freshwater withdrawals (FAO AQUASTAT). Irrigation makes dry land productive, but it has two costs.

### Soil Salinization
All irrigation water carries dissolved salts. In hot, dry climates the water **evaporates** and leaves the salt behind; without good **drainage**, salt builds up until crops fail and white crusts appear on fields. Salinization affects irrigated land in Pakistan's Indus basin, Australia's Murray-Darling basin and the western San Joaquin Valley of California.

**Case: the Aral Sea.** From the 1960s, Soviet planners diverted the Amu Darya and Syr Darya rivers to irrigate cotton in Central Asia. The Aral Sea, once one of the world's largest lakes, lost roughly 90 percent of its water. The exposed seabed blows salt and pesticide dust onto surrounding farms, salinizing soil far from the irrigated fields themselves. A dam completed in 2005 has partly restored the small northern section.

### Draining Wetlands
Farmers drain wetlands to gain flat, fertile land. The lower 48 U.S. states lost about **half** their original wetlands between the 1780s and the 1980s, much of it to agriculture (U.S. Fish and Wildlife Service). South of Lake Okeechobee, the **Everglades Agricultural Area** was drained for sugarcane. The Netherlands built **polders**, land reclaimed from the sea and lakes, over centuries. Losing wetlands removes wildlife habitat, natural flood storage and water filtration.

## Pollution from Farms

| Source | Effect | Example |
|---|---|---|
| **Fertilizer runoff** (nitrogen, phosphorus) | **Eutrophication**: algae bloom, die and decay, using up oxygen | The Gulf of Mexico **dead zone**, fed by Mississippi River nutrients, covers several thousand square miles in most summers (NOAA) |
| **Pesticides** | Harm to insects, fish and farmworkers | Pesticide drift onto nearby homes and streams |
| **Livestock waste** from large feedlots and hog barns | Water contamination and odor | Hog waste lagoons in eastern North Carolina flooded during Hurricane Florence in 2018 |
| **Greenhouse gases** | Climate change | Methane from cattle and flooded rice paddies; carbon from cleared forest |

Scale matters again: runoff from **thousands of local farms** across a **regional** watershed creates one dead zone hundreds of kilometers away.
`
    },
    {
      id: 'hgagricu5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A **hypothetical** district had 2,000 km² of forest in 2000 and 1,500 km² in 2020, mainly because of new pasture.

**1)** What percent of the 2000 forest area was lost by 2020?

**2)** What was the average forest loss per year, in km²?

**3)** If that yearly loss continues, how many years after 2020 will the forest be gone?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '25', '60'],
        hint1: 'Divide the area lost (2,000 − 1,500) by the starting area, then multiply by 100.',
        hint2: 'Divide the area lost by the 20 years between 2000 and 2020.',
        hint3: 'Divide the remaining 1,500 km² by the yearly loss.',
        explanation: '1) 500 ÷ 2,000 = 0.25, or 25 percent. 2) 500 ÷ 20 = 25 km² per year. 3) 1,500 ÷ 25 = 60 years, assuming the rate stays constant, which real clearing rarely does.'
      }
    },
    {
      id: 'hgagricu5-conservation',
      type: 'text' as const,
      content: `
## Conservation Practices and Their Scale

| Practice | How it protects land | Example |
|---|---|---|
| **Terracing** | Flat steps cut into slopes slow runoff and hold soil and water | The centuries-old Ifugao rice terraces of the Philippines; Inca terraces (andenes) in the Andes |
| **Contour plowing** | Furrows follow the slope's contour lines, so water cannot race downhill | Hilly farms in the U.S. Midwest |
| **No-till farming** | Seeds are planted into the previous crop's residue without plowing, which keeps soil covered | Large grain farms in the U.S., Brazil and Argentina |
| **Cover crops** | A crop such as rye or clover covers the soil between main crops and adds organic matter | Corn Belt farms in winter |
| **Shelterbelts** | Rows of trees break the wind | Planted across the Great Plains after the 1930s Dust Bowl |
| **Drip irrigation** | Delivers water to roots, wasting less and adding less salt | Israel and California orchards |
| **Rotational grazing** | Moves herds between paddocks so grass recovers | Ranches in Australia and the U.S. West |

### Conservation at Different Scales
- **Local:** a farmer terraces a hillside or plants cover crops.
- **National:** the U.S. **Conservation Reserve Program** (created in the 1985 Farm Bill) pays farmers to take highly erodible land out of production and plant grass or trees.
- **Regional and global:** the Amazon Soy Moratorium and the Great Green Wall coordinate many countries, firms and farmers.

### Trade-offs
Conservation often costs farmers yield or money in the short run, which is why programs use payments, certification or trade rules. No-till farming, for example, saves soil and fuel but usually relies on more herbicide to control weeds.

> 🔑 **AP Connection:** For a consequences question, give the **practice**, the **environmental effect** and a **specific place**. For a solutions question, match the practice to the problem: terraces for steep slopes, drainage for salinization, cover crops and buffer strips for runoff.
`
    },
    {
      id: 'hgagricu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Farmers in a dry region irrigate for decades without adequate drainage, and white crusts begin to form on their fields. What process is this?',
            options: [
              'Soil salinization',
              'Eutrophication',
              'Desertification',
              'Soil erosion'
            ],
            correctAnswer: 0,
            explanation: 'Evaporating irrigation water leaves dissolved salts behind, and poor drainage lets them build up into visible crusts. Eutrophication happens in water bodies, and erosion removes soil rather than adding salt to it.'
          },
          {
            question: 'Excess nitrogen from Corn Belt fields flows down the Mississippi River each spring. What happens in the Gulf of Mexico as a result?',
            options: [
              'Algae blooms decay and leave a low-oxygen dead zone',
              'Salt builds up in the soils of coastal farms',
              'Fresh water pushes sea level higher along the coast',
              'Sediment builds new wetlands across the whole delta'
            ],
            correctAnswer: 0,
            explanation: 'Nutrients feed algae blooms, and their decay uses up dissolved oxygen, creating a hypoxic dead zone each summer. The nitrogen does not salt farm soils or raise sea level.'
          },
          {
            question: 'Which conservation practice is best suited to farming steep hillsides?',
            options: [
              'Terracing',
              'No-till planting',
              'Cover cropping',
              'Shelterbelts'
            ],
            correctAnswer: 0,
            explanation: 'Terraces turn a slope into a series of flat steps that hold soil and water, which is why they appear on mountainsides from the Philippines to the Andes. Shelterbelts block wind on flat plains, and no-till and cover crops help but do not make steep land farmable on their own.'
          }
        ]
      }
    }
  ]
}
