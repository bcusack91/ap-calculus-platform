export const hgIntroGeographyPart4Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog4-intro',
      type: 'text' as const,
      content: `
# 📐 Spatial Concepts

**Part 4 of 7 — Density, Concentration, Pattern, and Place**

---

| Section |
|---------|
| 📖 Density: Three Ways to Count |
| Concentration & Pattern |
| 📌 Place, Location, Space |
| Connectivity & Accessibility |

> 🔑 **Key Concept:** *Density* is people per area, *concentration* is how clustered they are within that area, and *pattern* is the geometric shape they form. APHG rubrics expect you to use these as **separate** vocabulary words — never as synonyms.
      `
    },
    {
      id: 'hgintrog4-density',
      type: 'text' as const,
      content: `
## 📖 Three Densities (memorize all three)

| Type | Formula | What It Tells You | Example |
|------|---------|-------------------|---------|
| **Arithmetic density** | Total population ÷ total land area | Crude crowding | Bangladesh ≈ 1,265/km² (very crowded); Mongolia ≈ 2/km² |
| **Physiological density** | Population ÷ **arable** land area | Pressure on farmland | Egypt's arithmetic ≈ 100/km², but physiological > 2,500/km² because the Nile valley is the only arable land |
| **Agricultural density** | Number of **farmers** ÷ arable land | Mechanization & development level | U.S. agricultural density is *low* (few farmers per arable km²) → highly mechanized; Vietnam's is high → labor-intensive |

> ⚠️ **AP Trap:** A *low* agricultural density is a sign of a **more developed** economy (machines replaced farmers). Students often reverse this.

### Concentration & Pattern

| Spatial Concept | Definition | Example |
|-----------------|------------|---------|
| **Clustered** | Objects packed close together | Houses in a Polish village; storefronts on Main Street |
| **Dispersed** | Spread out evenly across space | Iowa farmsteads under the U.S. township-and-range system |
| **Random** | No clear order | Convenience stores in an old city |
| **Linear** pattern | Strung along a line | Mississippi River towns; strip malls along Route 66 |
| **Centralized** pattern | Around a node | Suburbs ringing Atlanta |
| **Geometric** pattern | Grid / radial / hexagonal | Manhattan grid; Washington DC radial avenues |

Two settlements can have **the same density** but **different concentrations** — picture 1,000 people scattered evenly across 10 km² versus 1,000 people packed into one corner. Density identical; concentration radically different.
      `
    },
    {
      id: 'hgintrog4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Egypt has an arithmetic density of about 100 people per km², but a physiological density above 2,500 per km². The gap is BEST explained by:",
            options: [
              "Egypt's high birth rate concentrated in cities",
              "Most of Egypt is desert; nearly all population and farmland are confined to the Nile valley",
              "Government policy that requires farmers to live near Cairo",
              "An overcounting of arable land in census records"
            ],
            correctAnswer: 1,
            explanation: "Physiological density divides population by **arable** land. Egypt's arable land (the Nile valley + delta) is a tiny slice of national territory, so the ratio explodes even though arithmetic density is moderate."
          },
          {
            question: "Country A has 5 farmers per arable km²; Country B has 200 farmers per arable km². The MOST defensible inference is that:",
            options: [
              "Country A has more fertile soil than Country B",
              "Country A is more economically developed and more mechanized than Country B",
              "Country B exports more grain than Country A",
              "Country A has a smaller total population than Country B"
            ],
            correctAnswer: 1,
            explanation: "Low agricultural density signals mechanization and capital-intensive farming — features of more developed economies. We cannot infer soil fertility, exports, or total population from agricultural density alone."
          }
        ]
      }
    },
    {
      id: 'hgintrog4-place',
      type: 'text' as const,
      content: `
## 📌 Place, Location, and Space (Yi-Fu Tuan)

Geographer **Yi-Fu Tuan (1977, _Space and Place_)** drew the formal distinction:

| Term | Meaning | Example |
|------|---------|---------|
| **Location** | Where something is on Earth (coordinates / address) | 38.8977° N, 77.0365° W |
| **Place** | Location + meaning, identity, lived experience | "The White House" — symbol of U.S. executive power |
| **Space** | The undifferentiated extent between objects | Open prairie before settlement; an empty parking lot |
| **Sense of place** | Emotional & cultural attachment to a place | New Orleans residents' identification with the Lower 9th Ward post-Katrina |
| **Placelessness** (Edward Relph, 1976) | Standardized landscapes that erase local identity | A generic highway interchange with the same Walmart, McDonald's, and Holiday Inn anywhere in the U.S. |

### Connectivity, Accessibility, Network Density

| Concept | Definition | Example |
|---------|------------|---------|
| **Accessibility** | How easy it is to *reach* a location | A Walmart at a freeway interchange is highly accessible; a village at the end of a dirt road is not |
| **Connectivity** | The degree to which places are linked (roads, fiber, flights) | Singapore → connected to ~140 countries via Changi Airport |
| **Network density** | Number of links per node in a network | Tokyo's rail network has very high network density |
| **Friction of distance** | The tendency for interaction to weaken as crossing distance becomes harder | A toll bridge increases friction; a free interstate reduces it |

> 🔑 **Why This Matters:** A FRQ may ask why Walmart locates at interchanges. Answer with **accessibility** (freeway exit) + **clustered concentration** (anchor for surrounding sprawl) + **low friction of distance** (highway speeds reduce the cost of a 30-mile trip).
      `
    },
    {
      id: 'hgintrog4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact-term answers)** ✍️

1) Population divided by **arable** land area gives what density measure? (one word)

2) Yi-Fu Tuan's term for *location + meaning + lived experience* (one word)

3) Edward Relph's 1976 term for the homogenization of landscapes (e.g., interchangeable highway interchanges) (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Physiological", "Place", "Placelessness"],
        hint1: "Egypt's Nile-valley density.",
        hint2: "Not 'space' — it's the meaningful version.",
        hint3: "Relph's critique of generic landscapes.",
        explanation: "Physiological density (pop ÷ arable land), Place (Yi-Fu Tuan's meaningful location), Placelessness (Relph 1976 — standardized landscapes erasing local identity)."
      }
    },
    {
      id: 'hgintrog4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Apply the Vocabulary** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Iowa farmsteads spread one per quarter-section under the township-and-range survey form a ___ pattern.",
            options: ["Dispersed", "Clustered", "Linear", "Centralized"]
          },
          {
            label: "Mississippi River towns lined up along the riverbank form a ___ pattern.",
            options: ["Linear", "Random", "Geometric", "Clustered"]
          },
          {
            label: "Singapore's Changi Airport links Singapore to ~140 countries by direct flight. This is best described as high ___.",
            options: ["Connectivity", "Friction of distance", "Density", "Concentration"]
          }
        ],
        correctAnswers: ["Dispersed", "Linear", "Connectivity"],
        hint1: "One per quarter-section, evenly spread.",
        hint2: "A single line — the river.",
        hint3: "Number of links between nodes.",
        explanation: "Township-and-range produces a dispersed concentration. River-bank towns form a linear pattern. Air-network reach measures connectivity."
      }
    },
    {
      id: 'hgintrog4-strategy',
      type: 'text' as const,
      content: `
## ⚡ Common Misconceptions & AP Strategy

### Misconceptions to Avoid
- Density ≠ concentration. Two regions can share density yet differ wildly in concentration.
- High agricultural density ≠ "good farmland." It signals **labor-intensive** farming and lower mechanization.
- Place ≠ location. Coordinates are location; lived meaning is place.
- Connectivity ≠ accessibility. Connectivity is how many links you have; accessibility is how easy *one* trip is.

### AP Strategy Moves
- For "describe spatial pattern" prompts, give **two** descriptors: *concentration* (clustered/dispersed) AND *pattern* (linear/geometric/centralized).
- Cite **Yi-Fu Tuan** by name when an FRQ asks about "sense of place."
- Cite **Edward Relph** for placelessness / homogenized strip-mall landscapes.
- For density questions, choose the most-relevant of the three densities and **explain why** that one matches the question.
- For interchange / hub questions, link **accessibility + low friction of distance + connectivity**.
      `
    },
    {
      id: 'hgintrog4-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A planner reports that the population of two suburbs (each 10 km²) is identical at 5,000 people, but Suburb A's residents are packed into a single high-rise district while Suburb B's homes are spread evenly. The two suburbs differ in:",
            options: [
              "Arithmetic density",
              "Concentration",
              "Physiological density",
              "Connectivity"
            ],
            correctAnswer: 1,
            explanation: "Identical population and area means identical arithmetic density. The difference — packed vs. spread — is concentration (clustered vs. dispersed)."
          },
          {
            question: "Travelers note that a McDonald's at a Kansas highway interchange looks identical to one in Florida or Oregon. The geographer who first labeled this homogenization of landscapes was:",
            options: [
              "Yi-Fu Tuan",
              "Edward Relph (placelessness)",
              "David Harvey (time-space convergence)",
              "Walter Christaller"
            ],
            correctAnswer: 1,
            explanation: "Edward Relph's 1976 _Place and Placelessness_ named the loss of distinctive local landscape character that comes with chain-store homogenization."
          }
        ]
      }
    }
  ]
}
