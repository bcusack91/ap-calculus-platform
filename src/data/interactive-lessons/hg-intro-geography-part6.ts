export const hgIntroGeographyPart6Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Stimulus Analysis & FRQ Skills**

---

| Section |
|---------|
| 📖 The 4 AP Geographic Skills |
| 📌 Working a Map Stimulus |
| Working a Data Table |
| Common FRQ Pitfalls |

> 🔑 **Key Concept:** APHG FRQs are scored against **5 disciplinary skills**: concepts & processes, spatial relationships, data analysis, source analysis, and scale analysis. Each verb in a stem ("identify," "describe," "explain," "compare") points to a specific skill — and a specific number of points.
      `
    },
    {
      id: 'hgintrog6-skills',
      type: 'text' as const,
      content: `
## 📖 AP Geographic Skills (College Board CED)

| Skill | What It Asks | Common Verbs |
|-------|-------------|--------------|
| **1. Concepts & Processes** | Apply geographic vocabulary | *Define, Identify* |
| **2. Spatial Relationships** | Patterns, distributions, networks across space | *Describe, Explain a pattern* |
| **3. Data Analysis** | Interpret quantitative data (tables, graphs, choropleth) | *Describe a trend, Calculate a rate* |
| **4. Source Analysis** | Use a non-data source (map, image, text) | *Describe a feature, Explain meaning* |
| **5. Scale Analysis** | Connect scales of analysis (global ↔ local) | *Compare, Explain at different scales* |

### The FRQ Verb Cheat-Sheet

| Verb | Effort | Pitfall |
|------|--------|---------|
| **Identify** | A fact, in 1 sentence | Don't over-explain |
| **Define** | The textbook definition | Use exact AP vocab |
| **Describe** | A feature/pattern/trend in your own words | Must use quantitative or place-specific detail from the stimulus |
| **Explain** | Why it happens — cause/effect | Must connect cause → effect with a connector word |
| **Compare** | Similarities AND differences | Earn the point only if you say "both…" or "while X…, Y…" |

> ⚠️ **AP Alert:** A *describe* answer cites the stimulus; an *explain* answer adds **a mechanism** (because…, which leads to…). Confusing the two is the #1 lost-point error.
      `
    },
    {
      id: 'hgintrog6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**FRQ Verb Recognition** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "An FRQ stem says: 'Explain ONE reason that physiological density may better indicate population pressure than arithmetic density.' To earn the point, the answer MUST include:",
            options: [
              "A precise definition of arithmetic density and its formula",
              "A causal link from scarce farmland to strain on resources",
              "A list of three countries with very high arithmetic density",
              "A statement that physiological density is the larger number"
            ],
            correctAnswer: 1,
            explanation: "'Explain' requires a cause-and-effect mechanism: scarce arable land concentrates demand for food, water and jobs on a small area. A definition, a list of examples or a bare comparison of the two numbers does not explain why."
          },
          {
            question: "An FRQ stem says: 'Describe the spatial pattern of Walmart store openings between 1962 and 1990 shown in the map.' To earn the point, the answer must:",
            options: [
              "Cite the map, e.g. the chain spreading outward from Arkansas",
              "Explain why Sam Walton chose Bentonville for headquarters",
              "Compare Walmart's expansion with Target's over the same years",
              "Identify the year Walmart first became a publicly traded firm"
            ],
            correctAnswer: 0,
            explanation: "'Describe' a pattern means reporting what is visible in the stimulus, such as the chain spreading outward from Arkansas across the South-Central U.S. Explaining a cause, comparing with another company or identifying a date answer different task verbs."
          }
        ]
      }
    },
    {
      id: 'hgintrog6-mapstim',
      type: 'text' as const,
      content: `
## 📌 Working a Map Stimulus — Step-by-Step

When given any APHG map (choropleth, dot, isoline, flow-line, cartogram):

| Step | What to Do | Example Phrase |
|------|------------|----------------|
| 1 | **Identify the map type** | "This is a choropleth showing GDP per capita." |
| 2 | **Identify scale** | "Scale of analysis is national (country-level data)." |
| 3 | **Read the legend & units** | "Categories range from < $5,000 to > $50,000." |
| 4 | **Describe the pattern** | "High GDP clusters in North America, Western Europe, East Asia, Australia." |
| 5 | **Note exceptions** | "Russia and several Gulf states are exceptions to a regional pattern." |
| 6 | **Connect to a process** | "The pattern reflects industrialization (Rostow), colonial trade flows, and core-periphery position (Wallerstein)." |

### Working a Data Table

| Step | Move |
|------|------|
| 1 | Read column headers + units |
| 2 | Identify the highest and lowest value (give the number AND the country/region) |
| 3 | Compute a simple change ("From 2000 → 2020, X grew by ___%") |
| 4 | Note an outlier |
| 5 | Tie back to a HG concept (DTM, agricultural density, urban primacy) |

> 🔑 **Why This Matters:** Most stimulus FRQs lose points because students *describe* without **using the stimulus** — name the country, the value, or the visible pattern, every time.
      `
    },
    {
      id: 'hgintrog6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Which AP verb requires a *cause-and-effect mechanism* in the answer? (one word)

2) Which AP verb requires citing direct evidence from a stimulus, but not necessarily explaining causes? (one word)

3) Which AP verb requires both similarities and differences between two cases? (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Explain", "Describe", "Compare"],
        hint1: "Cause → effect language. \"Because…\"",
        hint2: "What you *see* in the stimulus.",
        hint3: "Both… while X… Y…",
        explanation: "Explain = mechanism (cause/effect). Describe = use stimulus evidence. Compare = similarities AND differences (use 'both' / 'while')."
      }
    },
    {
      id: 'hgintrog6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Stimulus Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A flow-line map of remittances from the U.S. to Mexico → Step 1: identify map type as ___",
            options: ["Flow-line", "Choropleth", "Cartogram", "Dot"]
          },
          {
            label: "A table showing TFR dropping from 6.5 (1960) to 2.1 (2020) in Mexico → tie to which HG model?",
            options: ["Demographic Transition Model", "Concentric Zone Model", "Rostow's Stages", "Christaller's Central Place Theory"]
          },
          {
            label: "A choropleth of GDP per capita with North America + Western Europe in the highest bin → tie to which HG framework?",
            options: ["Wallerstein's World-Systems Theory", "Borchert's Epochs of Transportation", "Burgess Concentric Zone Model", "Von Thünen's Agricultural Model"]
          }
        ],
        correctAnswers: ["Flow-line", "Demographic Transition Model", "Wallerstein's World-Systems Theory"],
        hint1: "Arrows indicate direction & volume of movement.",
        hint2: "Falling birth + death rates over time.",
        hint3: "Core / semi-periphery / periphery.",
        explanation: "Flow-line maps use arrows for movement. Falling TFR fits the DTM. Global income disparity by region maps onto Wallerstein's core-periphery framework."
      }
    },
    {
      id: 'hgintrog6-strategy',
      type: 'text' as const,
      content: `
## ⚡ FRQ Pitfalls

### Top 5 Lost-Point Errors (per AP Reader notes)
1. **Defining a term when the stem said *Explain*** — gives away half the point.
2. **Vague pattern words** ("a lot," "everywhere") instead of named places & numbers.
3. **Using a region that doesn't fit the data** ("the Middle East has high X" when the map shows Sub-Saharan Africa).
4. **Confusing scales** — mixing global and local in the same answer without saying so.
5. **Skipping a model name** when one is obviously relevant (DTM, Christaller, Wallerstein, Burgess, von Thünen).

### Universal FRQ Template
> "[Term] is [definition]. In this stimulus, [specific evidence from map/table]. This occurs *because* [mechanism], *which leads to* [outcome]. At the [scale] scale, this pattern matches [named geographer / model]."

Use that skeleton on every "explain" prompt.
      `
    },
    {
      id: 'hgintrog6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "An FRQ provides a cartogram of the world resized by carbon emissions. The stem says: *Compare* carbon emissions between sub-Saharan Africa and East Asia at the global scale. The strongest 1-point answer would:",
            options: [
              "State that carbon emissions are harmful to the global climate",
              "Note that East Asia is drawn far larger than sub-Saharan Africa",
              "List the countries of East Asia and of sub-Saharan Africa",
              "Define a cartogram as a map that resizes units by a variable"
            ],
            correctAnswer: 1,
            explanation: "'Compare' asks for a similarity or difference drawn from the stimulus. East Asia's much larger size on the emissions cartogram shows far higher emissions than sub-Saharan Africa. A general claim about climate, a definition or a list of countries makes no comparison."
          },
          {
            question: "An FRQ asks: *Explain ONE reason* the U.S. has lower agricultural density than Vietnam. Which response would earn the point?",
            options: [
              "The U.S. produces far more total food each year than Vietnam does.",
              "Machines replace labor on U.S. farms, but Vietnam's rice paddies need many hands.",
              "Agricultural density measures the number of farmers per arable km².",
              "The U.S. has a much larger total area of arable land than Vietnam."
            ],
            correctAnswer: 1,
            explanation: "Only the mechanization response gives cause and effect: machines replace labor, so fewer farmers work each km² of U.S. farmland, while labor-intensive rice farming keeps Vietnam's agricultural density high. Total food output, a definition or total arable area does not explain the difference."
          }
        ]
      }
    }
  ]
}
