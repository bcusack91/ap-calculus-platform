export const hgAgriculturalOriginsPart4Data = {
  topicSlug: 'hg-agricultural-origins',
  sections: [
    {
      id: 'hgagricu4-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Origins & Hearths

**Part 4 of 7 — Rural Settlement Patterns: Why Farms and Villages Sit Where They Do**

---

| Section |
|---------|
| 📖 Three Rural Settlement Patterns |
| What Produces Each Pattern |
| Survey Systems and Their Consequences |
| Reading a Rural Landscape |

> 🔑 **Key Concept:** Farming created permanent rural settlements, and their layout records how people farmed. The CED expects you to identify **clustered**, **dispersed** and **linear** rural settlement patterns and the **metes and bounds**, **township and range** and **long-lot** survey methods, and to explain them (CED Topic 5.2). Unit 1 and Unit 3 defined these terms; this part explains **why** each pattern appears and what it does to farming over time.
`
    },
    {
      id: 'hgagricu4-patterns',
      type: 'text' as const,
      content: `
## 📖 Three Rural Settlement Patterns

| Pattern | What you see | Where it is common |
|---|---|---|
| **Clustered** (nucleated) | Farmhouses grouped in a village, with fields spread around it; farmers walk out to their fields each day | Much of Europe, South and East Asia, and Africa |
| **Linear** | Houses strung along a river, road, canal or valley floor, each with land running back behind it | French long lots along the St. Lawrence River; villages along roads and dikes in the Netherlands |
| **Dispersed** | Isolated farmsteads, each on its own land, far from neighbors | The US Midwest and Great Plains, the Canadian Prairies, Australia |

## What Produces Each Pattern

### Clustered Villages
- **Defense:** in the past, living together protected people and stored grain.
- **Shared resources:** a single well, spring or irrigation system serves the whole village.
- **Communal labor and land:** under the medieval **open-field system** in England, a village's land lay in large unfenced fields, and each family farmed scattered strips in them. Living in the center kept every strip within walking distance.
- **Social ties:** a church, mosque or temple and a market at the center.

### Linear Settlements
- **Access to a line:** before roads, the river was the highway, so every farm needed frontage on it.
- **Physical limits:** in a narrow valley or on a dike, the only flat, dry land runs in a line.

### Dispersed Farmsteads
- **Security and law:** once defense mattered less, families could live on their own land.
- **Enclosure:** from the 1700s, England's **enclosure** movement consolidated scattered strips into compact, fenced farms. Farmers moved out of villages onto their new holdings, so clustered villages gave way to a more dispersed pattern (Part 5).
- **Government land policy:** the US **Homestead Act of 1862** offered **160 acres** to settlers who lived on and farmed the land for five years. Living on the claim was required, so farmhouses spread out across the grid.

> 🔑 **AP Connection:** The same region can show different patterns at different times. England moved from clustered open-field villages toward dispersed farms after enclosure. Name the **time** as well as the place.
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
            question: 'In a medieval English village, each family farmed scattered strips in large unfenced fields. Why did families live together in the village center?',
            options: [
              'Village homes paid much lower land taxes',
              'It put all their plots within a short walk',
              'Law forbade anyone from living outside it',
              'Fields flooded each year near the outer edges'
            ],
            correctAnswer: 1,
            explanation: 'Under the open-field system a family\'s strips lay in different fields around the village, so a central home kept them all within reach. Taxes, a legal ban or flooding do not explain why the village sat in the middle of its fields.'
          },
          {
            question: 'Which process most directly turned English clustered villages into a more dispersed pattern of farms?',
            options: [
              'Enclosure',
              'Urban growth',
              'Crop rotation',
              'Rural flight'
            ],
            correctAnswer: 0,
            explanation: 'Enclosure consolidated scattered strips into compact, fenced farms, so farmers could move out and live on their own land. Crop rotation changed what was planted, not where people lived.'
          },
          {
            question: 'Why did US homesteads in Kansas form a dispersed rather than a clustered pattern?',
            options: [
              'Settlers had to live on the land they claimed',
              'The Great Plains had no rivers that could be settled',
              'Railroads banned towns from forming near their lines',
              'Water was too scarce for villages to share wells'
            ],
            correctAnswer: 0,
            explanation: 'The Homestead Act required settlers to live on and farm their own claims, which spread farmhouses across the land. The Plains do have rivers, railroads actually founded towns along their lines, and wells could serve villages as well as farms.'
          }
        ]
      }
    },
    {
      id: 'hgagricu4-survey',
      type: 'text' as const,
      content: `
## Survey Systems and Their Consequences

A **survey system** is how land is divided and recorded. Unit 3 introduced the three North American systems; here is what each **does** to farming over time.

| System | Shape of parcels | Long-run consequence |
|---|---|---|
| **Metes and bounds** | Irregular, following streams, trees, rocks and walls | Parcels fit the terrain, but markers move or vanish, which leads to boundary disputes; roads wander |
| **Township and range** | Square sections of 1 square mile (640 acres), in townships of 36 sections | Easy to sell and record; roads on section lines every mile; fields ignore terrain, which can worsen erosion on slopes |
| **Long lot** | Narrow strips running back from a river | Every farm has water and transport; when **divided among heirs**, strips grow ever narrower |

### Worked Example: Homestead Math
The Homestead Act offered **160 acres**, a **quarter section**.
- One section = 640 acres, so 640 ÷ 160 = **4 homesteads per section**.
- One township = 36 sections, so 36 × 4 = **144 homesteads per township**, if every quarter were claimed.

That is why the Plains landscape shows farmhouses roughly half a mile apart on a regular grid.

### Worked Example: Long Lots and Inheritance
A long lot has 200 m of river frontage. Under **partible inheritance**, land is divided equally among heirs. If the land passes to 2 heirs in each of 3 generations:

200 m ÷ 2 = 100 m → ÷ 2 = 50 m → ÷ 2 = **25 m** of frontage per farm.

The farms keep the same length but become very narrow, which makes plowing and machinery harder. This pattern of narrowing lots is visible today along the St. Lawrence River in Quebec.
`
    },
    {
      id: 'hgagricu4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A section is 640 acres. How many 80-acre farms fit in one section?

**2)** A long lot with 120 m of frontage is split equally among 3 heirs. How many meters of frontage does each heir get?

**3)** How many 160-acre homesteads fit in one township of 36 sections?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '40', '144'],
        hint1: 'Divide 640 by 80.',
        hint2: 'Divide 120 by 3.',
        hint3: 'Four homesteads per section, times 36 sections.',
        explanation: '1) 640 ÷ 80 = 8 farms. 2) 120 ÷ 3 = 40 m each. 3) 4 × 36 = 144 homesteads.'
      }
    },
    {
      id: 'hgagricu4-landscape',
      type: 'text' as const,
      content: `
## Reading a Rural Landscape

**Landscape A, described in text.** An aerial view of central Iowa shows straight gravel roads exactly one mile apart, meeting at right angles. Square and rectangular fields of corn and soybeans fill each block. A farmhouse with barns and grain bins sits alone every half mile or so. A small town with a grain elevator stands beside a railroad line every 8 to 15 km.

**Reading it in layers:**
1. **Survey system:** the one-mile grid is **township and range**.
2. **Settlement pattern:** isolated farmsteads are **dispersed**; the railroad towns form a **linear** string along the line.
3. **Cause:** the Land Ordinance of 1785 and the Homestead Act of 1862, plus railroad companies that founded towns at regular intervals to serve farmers.

**Landscape B, described in text.** Along the south bank of a wide river, houses stand every 30 to 50 m along a single road that follows the bank. Behind each house a narrow field runs straight back from the river for over a kilometer.

**Reading it in layers:**
1. **Survey system:** **long lots**, French in origin.
2. **Settlement pattern:** **linear**, along the river and its road.
3. **Cause:** river access for transport and water, plus division of the lots among heirs over generations.

### Limits of Reading Landscapes
- Patterns change: many dispersed farmsteads on the Plains now stand **empty** as farms consolidate, so the grid of houses records the 1800s, not today.
- One pattern can have several causes. A linear village may follow a road, a river or a ridge; check the physical setting before naming the cause.
`
    },
    {
      id: 'hgagricu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Read the Landscape** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Farmhouses about half a mile apart on a one-mile road grid form a ___ settlement pattern',
            options: ['dispersed', 'clustered', 'linear', 'nucleated']
          },
          {
            label: 'Narrow fields running back from a river, each with a house at the water, show the ___ survey system',
            options: ['long-lot', 'township and range', 'metes and bounds', 'open-field']
          },
          {
            label: 'A parcel described as running "from the oak tree to the creek, then along the stone wall" uses ___',
            options: ['metes and bounds', 'township and range', 'long lots', 'enclosure']
          }
        ],
        correctAnswers: ['dispersed', 'long-lot', 'metes and bounds'],
        hint1: 'Each family lives alone on its own land.',
        hint2: 'Every farm has frontage on the water.',
        hint3: 'Natural markers, not a grid.',
        explanation: 'Isolated farmhouses on a grid are dispersed. Narrow strips with river frontage are long lots. Boundaries described by trees, creeks and walls are metes and bounds.'
      }
    }
  ]
};
