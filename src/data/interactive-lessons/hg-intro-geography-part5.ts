export const hgIntroGeographyPart5Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog5-intro',
      type: 'text' as const,
      content: `
# 🌊 Diffusion Patterns

**Part 5 of 7 — How Ideas, People, and Diseases Spread**

---

| Section |
|---------|
| 📖 Relocation vs. Expansion Diffusion |
| Four Types of Expansion Diffusion |
| 📌 Hearths & Worked Examples |
| Distance Decay Revisited |

> 🔑 **Key Concept:** Geographer **Carl Sauer** (Berkeley, 1952, *Agricultural Origins and Dispersals*) framed diffusion as the spread of innovations from a **cultural hearth**. Modern APHG distinguishes **relocation** (people physically carry the trait) from **expansion** (the trait spreads outward while staying in the original location too).
      `
    },
    {
      id: 'hgintrog5-types',
      type: 'text' as const,
      content: `
## 📖 The Two Branches of Diffusion

| Branch | Mechanism | Classic Example |
|--------|-----------|-----------------|
| **Relocation diffusion** | A person/group physically migrates and brings the trait with them | Spanish carrying Catholicism to the Americas; Irish carrying step-dancing to Boston |
| **Expansion diffusion** | The trait spreads outward from a hearth while remaining strong at the source | Islam radiating from Mecca; TikTok adoption from China outward |

### Four Types of Expansion Diffusion

| Type | How It Works | Example |
|------|-------------|---------|
| **Contagious** | Spreads rapidly and widely through proximity, like a virus | COVID-19 in March 2020; viral memes; the 1918 flu |
| **Hierarchical** | Jumps from major node to major node, then trickles down | Hip-hop from NYC & LA → Atlanta & Chicago → suburbs; fashion from Paris/Milan to global cities; corporate HQ openings |
| **Reverse hierarchical** | Spreads from a small place upward to bigger ones | **Walmart** from Bentonville, Arkansas (pop. ~10,000) → small towns → suburbs → eventually metro areas |
| **Stimulus** | The underlying *idea* spreads, but the local form is modified | Pentecostal Christianity adapting to local music & language in Brazil & Nigeria; McDonald's selling McAloo Tikki in India |

### Cultural Hearths

| Hearth | Innovation | Era |
|--------|------------|-----|
| Mesopotamia | Writing, wheel, irrigation agriculture | ~3500 BCE |
| Indus Valley | Urban planning, plumbing | ~2500 BCE |
| Mesoamerica | Maize, zero in mathematics | ~2000 BCE |
| Mecca | Islam | 7th century CE |
| Bentonville, Arkansas | Walmart's big-box retail model | 1962 → present |
| Silicon Valley | Personal computing, search, social platforms | 1970s → present |

> ⚠️ **AP Alert:** When you classify diffusion, ALWAYS specify the **type**, not just "expansion." Just saying "expansion" rarely earns the point on FRQs.
      `
    },
    {
      id: 'hgintrog5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Walmart opened its first store in Rogers, Arkansas (1962), then spread through small towns of the South and Midwest before reaching major metropolitan markets. This pattern is BEST classified as:",
            options: [
              "Contagious diffusion",
              "Hierarchical diffusion",
              "Reverse hierarchical diffusion",
              "Relocation diffusion"
            ],
            correctAnswer: 2,
            explanation: "Walmart spread *upward* from a small place (Bentonville/Rogers) to larger places — the textbook example of reverse hierarchical diffusion."
          },
          {
            question: "Pentecostal Christianity arrived in Brazil from the United States, but Brazilian congregations now incorporate samba rhythms, Portuguese-language preaching, and locally relevant prosperity-gospel themes. The underlying religion spread, but its expression was modified locally. This is:",
            options: [
              "Contagious diffusion",
              "Stimulus diffusion",
              "Reverse hierarchical diffusion",
              "Relocation diffusion"
            ],
            correctAnswer: 1,
            explanation: "Stimulus diffusion = the *idea* spreads but the local form adapts. Pentecostalism's core belief travels; the cultural expression is reworked into a Brazilian form."
          }
        ]
      }
    },
    {
      id: 'hgintrog5-decay',
      type: 'text' as const,
      content: `
## 📌 Distance Decay Revisited

Diffusion does not spread perfectly — it weakens with distance and slows at barriers.

| Concept | Definition | Example |
|---------|------------|---------|
| **Distance decay** | Strength of an interaction declines with distance | TikTok adoption peaked first in East Asia, then weakened across continents |
| **Time-space convergence** (Janelle 1969) | Distances shrink as transport/communication speed up | A 19th-century letter took 4 weeks to cross the Atlantic; an email takes seconds |
| **Friction of distance** | The "cost" (time, money, effort) of crossing space | A toll bridge raises friction; a free interstate lowers it |
| **Barriers to diffusion** | Physical, cultural, political, economic obstacles | The Himalayas blocked Buddhism's northward spread; the Iron Curtain blocked Western media into the USSR |

### Worked Example: COVID-19, Early 2020

- **Hearth**: Wuhan, China.
- **Hierarchical diffusion**: jumped via international air travel to global cities — Milan, NYC, Tehran, London.
- **Contagious diffusion**: within each city, person-to-person spread radiated through neighborhoods.
- **Time-space convergence** explains why a 21st-century pandemic globalized in weeks, while the 14th-century plague took years.
- **Barriers**: New Zealand's island geography + closed borders sharply slowed diffusion in 2020.

> 🔑 **Why This Matters:** AP FRQs often give a stimulus (a disease, a technology, a religion, a clothing brand) and ask you to **identify the type of diffusion** AND **explain a barrier**. Be ready with both.
      `
    },
    {
      id: 'hgintrog5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact-term answers)** ✍️

1) Geographer who, in 1952, traced agricultural innovations from cultural hearths (last name only):

2) Diffusion type where the *idea* spreads but the local form is modified (one word):

3) The principle that distances effectively shrink as transport/communication speed up (three words, hyphen optional):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Sauer", "Stimulus", "Time-space convergence"],
        hint1: "Berkeley geographer; 'Agricultural Origins and Dispersals.'",
        hint2: "McDonald's McAloo Tikki, Pentecostal samba services.",
        hint3: "Janelle, 1969. Three-word phrase. Use a hyphen between the first two words.",
        explanation: "Carl Sauer (Berkeley) defined cultural hearths. Stimulus diffusion modifies the form locally. Time-space convergence (Janelle, 1969) describes effective shrinkage of distance via faster transport/communication."
      }
    },
    {
      id: 'hgintrog5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Diffusion** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Spanish missionaries crossing the Atlantic and bringing Catholicism to Mexico in the 1500s. Diffusion type: ___",
            options: ["Relocation", "Contagious", "Hierarchical", "Stimulus"]
          },
          {
            label: "Hip-hop spreading from New York and Los Angeles to Atlanta, then to suburban radio stations, then to small towns. Diffusion type: ___",
            options: ["Hierarchical", "Reverse hierarchical", "Relocation", "Contagious"]
          },
          {
            label: "A viral TikTok dance trend spreading person-to-person within a high school in a single week. Diffusion type: ___",
            options: ["Contagious", "Hierarchical", "Stimulus", "Relocation"]
          }
        ],
        correctAnswers: ["Relocation", "Hierarchical", "Contagious"],
        hint1: "Migrants physically carry the trait across the ocean.",
        hint2: "Top-down: large nodes first, then trickles down.",
        hint3: "Person-to-person, like a virus.",
        explanation: "Catholic missionaries = relocation (people moved). Hip-hop NYC/LA → Atlanta → suburbs = hierarchical (top-down through urban tiers). TikTok dance through a school = contagious (rapid proximity-based spread)."
      }
    },
    {
      id: 'hgintrog5-strategy',
      type: 'text' as const,
      content: `
## ⚡ Common Misconceptions & AP Strategy

### Misconceptions
- "Hierarchical" doesn't mean "important." It means it travels through a hierarchy of places (big → small).
- Reverse hierarchical is **rare** — be sure the example actually starts in a small place (Walmart, Cracker Barrel).
- Contagious diffusion can feel "viral" but it requires **proximity**. A trend that requires Twitter to jump from NYC to Tokyo is hierarchical, not contagious.
- Stimulus diffusion preserves the *idea*, not the form. McAloo Tikki is McDonald's (idea) reformatted (local form).

### AP Strategy Moves
- Always pair a diffusion classification with a **mechanism** ("hierarchical — because urban tiers acted as adoption nodes before the trait reached small towns").
- For relocation diffusion, **name the migrants** and **the route**.
- For barrier questions, give **physical** (Himalayas, oceans) AND **cultural/political** (language difference, border closures) examples.
- Cite **Carl Sauer** for cultural hearths; cite **Janelle (1969)** for time-space convergence.
      `
    },
    {
      id: 'hgintrog5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Health officials map the spread of measles outbreaks from international air-travel hubs (London, Frankfurt, Atlanta) to mid-sized cities and finally to small rural counties. The cross-city pattern is BEST described as:",
            options: [
              "Contagious diffusion across all places equally",
              "Hierarchical diffusion through tiers of places linked by air travel",
              "Reverse hierarchical diffusion from the countryside upward",
              "Stimulus diffusion of vaccination practices"
            ],
            correctAnswer: 1,
            explanation: "Spread that jumps between large urban nodes before trickling down to smaller places is hierarchical diffusion. The air-travel network defines the hierarchy."
          },
          {
            question: "A geographer notes that a Skype call between London and Sydney in 2020 felt 'closer' than a steamship voyage in 1880. The single concept that BEST captures this perceived shrinking of the world is:",
            options: [
              "Distance decay",
              "Time-space convergence (Janelle, 1969)",
              "Network density",
              "Friction of distance"
            ],
            correctAnswer: 1,
            explanation: "Time-space convergence is the concept Donald Janelle introduced in 1969 to describe places effectively becoming closer as transport and communication speed up."
          }
        ]
      }
    }
  ]
}
