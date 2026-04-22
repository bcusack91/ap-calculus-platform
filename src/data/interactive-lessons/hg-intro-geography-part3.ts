export const hgIntroGeographyPart3Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog3-intro',
      type: 'text' as const,
      content: `
# 🌐 Regions and Regionalization

**Part 3 of 7 — Formal, Functional, and Perceptual Regions**

---

| Section |
|---------|
| 📖 What Makes a Region |
| The Three Region Types |
| 📌 Scale of Analysis |
| Regional Boundaries & Critique |

> 🔑 **Key Concept:** Regions are **mental constructs** — geographers *create* them to organize the world. The borders are debatable, the criteria are chosen, and the same place may belong to multiple regions at once.
      `
    },
    {
      id: 'hgintrog3-types',
      type: 'text' as const,
      content: `
## 📖 The Three Types of Regions

| Type | Defined By | Boundary | Examples |
|------|------------|----------|----------|
| **Formal (uniform)** | A measurable, shared trait — language, climate, GDP, dominant religion | Sharp on a map | Francophone Quebec, the Sahara, the EU, the Wheat Belt |
| **Functional (nodal)** | Interaction with a central node | Strongest at center, fades outward (distance decay) | A pizza-delivery zone, NYC metro media market, Memphis FedEx hub catchment |
| **Perceptual (vernacular)** | Cultural identity / shared image | Vague, contested | The Bible Belt, "the South," "Dixie," the Middle East, "Silicon Valley" |

### Formal Regions in Detail
- **Single-feature**: defined by one trait (e.g., the corn-growing Midwest).
- **Multi-feature**: defined by a bundle (Latin America = Spanish/Portuguese + Catholic + colonial heritage + tropical to temperate).
- **Boundary problem**: where exactly does the "Midwest" end? Cartographers must choose criteria that produce a defensible line.

### Functional Regions in Detail
- A node (a city, a stadium, an airport) plus the area it influences.
- Field weakens with distance — classic distance decay.
- Pittsburgh's Steelers fan base, Atlanta's Hartsfield-Jackson airport catchment, the Boston Globe circulation area.

### Perceptual Regions in Detail
- Defined by **collective imagination**, not a measurable variable.
- "Where is the South?" asks 200 Texans → 200 different lines.
- Based on stereotypes, music, food, dialect, history.
- Important politically: real estate listings, marketing, regional identity all depend on perceptual regions.

> ⚠️ **AP Alert:** A given place can sit in **all three** at once. Atlanta is in the formal Sun Belt (climate), the functional Hartsfield-Jackson catchment (transport node), and the perceptual "South" (culture). Be ready to layer them.
      `
    },
    {
      id: 'hgintrog3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which is the BEST example of a functional region?",
            options: [
              "The U.S. Corn Belt",
              "The circulation area of the Chicago Tribune newspaper",
              "The American 'Bible Belt'",
              "The European Union"
            ],
            correctAnswer: 1,
            explanation: "A functional region is organized around a node and weakens outward. A newspaper's circulation area weakens with distance from Chicago — the textbook nodal region. Corn Belt and EU are formal; Bible Belt is perceptual."
          },
          {
            question: "Two reporters draw the boundaries of 'the American South' and disagree about whether Maryland and Missouri are inside it. The disagreement is most consistent with:",
            options: [
              "A formal region with measurable criteria",
              "A functional region centered on Atlanta",
              "A perceptual (vernacular) region built on shared imagination",
              "A planning region defined by federal districts"
            ],
            correctAnswer: 2,
            explanation: "Perceptual regions are constructed from collective identity, dialect, and history — there is no single measurable variable, so reasonable observers disagree about borders."
          }
        ]
      }
    },
    {
      id: 'hgintrog3-scale',
      type: 'text' as const,
      content: `
## 📌 Scale of Analysis — The Same Data, Different Stories

Geographers must always disclose the **scale of analysis**, because patterns visible at one scale may vanish at another (the **scale problem**).

| Scale | Unit | Pattern Visible |
|-------|------|-----------------|
| **Global** | Countries | China & India dominate world population; sub-Saharan Africa fastest growing |
| **Regional / National** | Provinces / states | Within China: dense east coast vs. sparse west; within U.S.: Sun Belt growth, Rust Belt loss |
| **Local** | Counties / cities | Within Texas: Houston booming, rural counties shrinking |
| **Site / micro** | Census tracts, blocks | Within Houston: gentrification of the Heights, segregation by historic redlining |

### MAUP — The Modifiable Areal Unit Problem

The same underlying data can yield very different choropleth maps depending on the **enumeration units** used (counties vs. ZIPs vs. census tracts) and the **classification breaks**.

- Aggregating to large units **smooths** local variation.
- Boundary lines can be drawn to favor a political result — the foundation of **gerrymandering** (Unit 4).

> 🔑 **Why This Matters:** AP rubrics specifically reward students who name a scale, then explain how the pattern would change at a different scale. "Globally, India is densely populated, but at the regional scale Rajasthan's Thar Desert is sparsely populated."
      `
    },
    {
      id: 'hgintrog3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact-term answers)** ✍️

1) The "Sahara" is defined by aridity (< 250 mm annual rainfall). What region type is defined by a measurable, shared trait across its area?

2) A pizza shop delivers within a 4-mile radius; orders fall off sharply beyond mile 3. What region type is organized around a central node with influence weakening outward?

3) A geographer warns that a study showing "low obesity" at the state scale hides obesity hotspots at the census-tract scale. What single term names the principle that aggregation unit choice changes results?

Use the exact term from the lesson.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Formal", "Functional", "MAUP"],
        hint1: "Also called 'uniform.' One measurable trait across the area.",
        hint2: "Also called 'nodal.' Centered on a hub with distance decay.",
        hint3: "Acronym. Modifiable ___ ___ Problem.",
        explanation: "Formal (uniform) — defined by a measurable shared trait. Functional (nodal) — defined by interaction with a node. MAUP — Modifiable Areal Unit Problem, the warning that aggregation choices change apparent patterns."
      }
    },
    {
      id: 'hgintrog3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Region** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "The 'Eurozone' (countries that use the euro currency). Region type: ___",
            options: ["Formal", "Functional", "Perceptual", "Macro"]
          },
          {
            label: "Hartsfield-Jackson Atlanta Airport's catchment of passengers within a 2-hour drive. Region type: ___",
            options: ["Functional", "Formal", "Perceptual", "Vernacular"]
          },
          {
            label: "'New England' as imagined in tourism brochures (lighthouses, fall foliage, lobster). Region type: ___",
            options: ["Perceptual", "Formal", "Functional", "Nodal"]
          }
        ],
        correctAnswers: ["Formal", "Functional", "Perceptual"],
        hint1: "Defined by a single measurable trait (currency).",
        hint2: "Centered on a hub; weakens outward.",
        hint3: "Built on cultural imagery and identity.",
        explanation: "Eurozone = formal (currency). Airport catchment = functional (node + decay). 'New England' brochure imagery = perceptual / vernacular."
      }
    },
    {
      id: 'hgintrog3-strategy',
      type: 'text' as const,
      content: `
## ⚡ Common Misconceptions & AP Strategy

### Misconceptions to Avoid
- **Regions aren't 'natural'**. They are *constructed* by geographers using chosen criteria. The Middle East has no agreed eastern boundary; "Latin America" excludes francophone Quebec.
- **A place belongs to many regions**. Atlanta = Sun Belt (formal) + Hartsfield catchment (functional) + South (perceptual). All three are correct.
- **Don't confuse functional with formal**. A *city's media market* is functional; the *city's political boundary* is formal.
- **Scale changes the answer**. India is densely populated at the global scale, but its Thar Desert is sparsely populated at the local scale.

### AP Strategy Moves
- For "What type of region is X?" — answer the **type + the defining criterion** ("Formal — defined by currency union").
- For scale questions, always specify global / regional / national / local — *and* give an example of how the pattern would shift.
- When a stimulus shows a choropleth, mention **MAUP** if the question hints at boundary or aggregation choices.
- For perceptual region FRQs, name **two cultural traits** that make people imagine the region (e.g., Bible Belt: evangelical Protestant majority + dry counties + country-music dominance).
      `
    },
    {
      id: 'hgintrog3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Census data show that the 'Rust Belt' has lost 1.4 million manufacturing jobs since 2000. The 'Rust Belt' as commonly mapped is BEST classified as a:",
            options: [
              "Functional region centered on Detroit",
              "Formal region defined by a shared decline in manufacturing employment",
              "Perceptual region only — there is no measurable definition",
              "Vernacular region with no economic basis"
            ],
            correctAnswer: 1,
            explanation: "The Rust Belt is defined by a measurable shared trait (manufacturing decline + heavy-industry legacy) across its area — the textbook formal region. It also has perceptual associations, but its analytical definition is formal."
          },
          {
            question: "Researchers find that at the *state* scale, Mississippi has the highest poverty rate. At the *county* scale within Mississippi, the Delta counties have rates double the state average. The disparity between scales is best explained by:",
            options: [
              "Modifiable Areal Unit Problem (MAUP)",
              "Distance decay",
              "Site vs. situation",
              "Time-space convergence"
            ],
            correctAnswer: 0,
            explanation: "The same data tell different stories at different aggregation units — exactly the MAUP. State averages mask county-level concentrations of poverty."
          }
        ]
      }
    }
  ]
}
