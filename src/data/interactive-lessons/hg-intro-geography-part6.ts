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
              "A definition of arithmetic density only",
              "A cause-and-effect mechanism connecting arable-land scarcity to pressure on resources",
              "A list of three countries with high arithmetic density",
              "A choropleth map sketch"
            ],
            correctAnswer: 1,
            explanation: "'Explain' requires a cause→effect mechanism. The answer must connect arable-land scarcity to actual pressure (food, water, jobs) — not just define terms."
          },
          {
            question: "An FRQ stem says: 'Describe the spatial pattern of Walmart store openings between 1962 and 1990 shown in the map.' To earn the point, the answer must:",
            options: [
              "Use evidence from the map (e.g., 'stores cluster in the South-Central U.S., expanding outward from Arkansas')",
              "Explain why Sam Walton chose Bentonville",
              "Compare Walmart to Target's expansion",
              "Identify the year Walmart became publicly traded"
            ],
            correctAnswer: 0,
            explanation: "'Describe' a pattern means cite the stimulus — what is visible on the map. Explanation/comparison/identification are different verbs and earn different points."
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
            options: ["Wallerstein's World-Systems Theory", "Borchert's Epochs", "Burgess Concentric Zone Model", "Rostow Stages of Development"]
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
              "State that carbon emissions are bad for the climate",
              "Note that East Asia is much larger on the cartogram than sub-Saharan Africa, indicating substantially higher emissions, while both regions trail North America",
              "Explain the Kyoto Protocol",
              "Define cartogram"
            ],
            correctAnswer: 1,
            explanation: "'Compare' demands at least one similarity AND one difference, citing the stimulus. The correct answer references the visible difference (East Asia >> sub-Saharan Africa) and a similarity (both below North America)."
          },
          {
            question: "An FRQ asks: *Explain ONE reason* the U.S. has lower agricultural density than Vietnam. Which response would earn the point?",
            options: [
              "The U.S. produces more food than Vietnam.",
              "U.S. farms use heavy mechanization (combines, GPS-guided tractors), so fewer farmers are needed per arable km², while Vietnamese rice paddies remain labor-intensive.",
              "Agricultural density measures farmers per arable land.",
              "The U.S. has larger arable land than Vietnam."
            ],
            correctAnswer: 1,
            explanation: "Only option B provides cause→effect: mechanization replaces labor → fewer farmers per arable km². Defining the term or stating a fact does not satisfy the *explain* verb."
          }
        ]
      }
    }
  ]
}
