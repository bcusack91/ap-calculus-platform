export const hgIntroGeographyPart1Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog1-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 1 of 7 — Geographic Thinking**

---

| Section |
|---------|
| 📖 What Geographers Do |
| The Spatial Perspective |
| 📌 Five Themes & Tobler's First Law |
| Site vs. Situation |

> 🔑 **Key Concept:** Geography is **not** "memorizing capitals." On the AP exam it is the **systematic analysis of spatial patterns and processes** — *where* things are, *why they are there*, and *what difference it makes*.
      `
    },
    {
      id: 'hgintrog1-themes',
      type: 'text' as const,
      content: `
## 📖 What Geographers Actually Study

The discipline asks four signature questions every time:

| Question | What It Probes | Example |
|----------|----------------|---------|
| **Where** is it? | Location, distribution | Why are tornadoes concentrated in "Tornado Alley"? |
| **Why there**? | Causes of the spatial pattern | Why did Detroit, not Mobile, become the U.S. auto capital? |
| **Why care**? | Consequences for people & environment | What happens to Bangladesh as sea level rises? |
| **How is it changing**? | Process over time | How is the U.S. Sun Belt redistributing population? |

### The Five Themes of Geography (NCGE, 1984)

| Theme | Definition | AP Exam Hook |
|-------|------------|--------------|
| **Location** | Absolute (lat/long, street address) vs. relative (relation to other places) | Memphis: 35°N 90°W (absolute); on the Mississippi 200 mi N of New Orleans (relative) |
| **Place** | Physical + human characteristics that give a location identity | Las Vegas = neon, casinos, desert, water-stressed |
| **Human-Environment Interaction** | How people modify, adapt to, and depend on the environment | Dutch polders, Japanese terraced rice, Phoenix air-conditioning |
| **Movement** | Flows of people, goods, ideas, capital | Remittances from U.S. → Mexico; H1N1 spread along airline routes |
| **Region** | An area unified by one or more characteristics | Corn Belt, Bible Belt, Eurozone |

> ⚠️ **AP Alert:** The CED replaced the Five Themes with seven **course skills**, but the themes still appear in MCQ stems as scaffolding language. Recognize them.
      `
    },
    {
      id: 'hgintrog1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A researcher maps every Walmart in the U.S. and notes that openings move outward from a single Arkansas store along the interstate system. The strongest geographic concept at work is:",
            options: [
              "Movement and the diffusion of an innovation from a hearth",
              "The Five Themes' concept of 'place identity'",
              "Absolute location of each store",
              "Human-environment adaptation to climate"
            ],
            correctAnswer: 0,
            explanation: "Walmart spread outward from Bentonville, AR (the hearth) along transport corridors — a textbook contagious-then-hierarchical diffusion process, an example of the Movement theme."
          },
          {
            question: "Which statement gives the relative — not absolute — location of New Orleans?",
            options: [
              "29.95° N, 90.07° W",
              "A port city at the mouth of the Mississippi River, ~700 mi south of St. Louis",
              "600 Decatur Street, French Quarter",
              "Within UTM zone 15R"
            ],
            correctAnswer: 1,
            explanation: "Relative location describes a place in relation to other places (mouth of the Mississippi, distance from St. Louis). Latitude/longitude, street addresses, and UTM grids are all absolute."
          }
        ]
      }
    },
    {
      id: 'hgintrog1-spatial',
      type: 'text' as const,
      content: `
## 📌 The Spatial Perspective & Tobler's First Law

> **"Everything is related to everything else, but near things are more related than distant things."** — Waldo Tobler, 1970

Tobler's First Law is the foundation of **spatial autocorrelation**: nearby places are usually more similar than far-apart places (housing prices, dialects, disease outbreaks, vegetation).

### Core Spatial Concepts

| Concept | Definition | Real-World Hook |
|---------|------------|-----------------|
| **Distance decay** | Interaction declines as distance increases | You text your roommate hourly, your hometown friend monthly, your study-abroad host yearly |
| **Friction of distance** | Distance imposes a cost (time, money, effort) on interaction | Why FedEx hubs cluster in Memphis (low friction to most U.S. cities) |
| **Time-space convergence** | Improved transport/communication makes distant places "closer" | NYC ↔ London: 6 weeks (1840 sail), 7 hours (today) |
| **Space-time compression** | The lived feeling that the world is shrinking (Harvey, 1989) | Real-time TikTok trends in Manila, Lagos, and Lima within hours |
| **Site** | Internal physical characteristics of a place | Manhattan: bedrock supports skyscrapers, deep harbor |
| **Situation** | Location relative to other places | Manhattan: at the mouth of the Hudson, hub of the U.S. Atlantic seaboard |

> 🔑 **Why This Matters:** When the AP asks "Why did X locate at Y?" your answer must distinguish **site** (the local physical traits) from **situation** (the relational geography). High-scoring FRQs always do both.
      `
    },
    {
      id: 'hgintrog1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact-term answers)** ✍️

1) Tobler's First Law states that "near things are more related than distant things." What single term names the phenomenon where interaction *declines* with distance?

2) Two New York City restaurants both occupy roughly the same lot, but one is at the corner of a busy subway exit and the other is on a quiet side street. What term describes a location's relationship to *other* places (transport, hubs, surrounding city)?

3) NYC and London were 6 weeks apart by sail in 1840 and are 7 hours apart by jet today. What term describes the apparent "shrinking" of distance over time as transport improves?

Use the exact term from the lesson.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Distance decay", "Situation", "Time-space convergence"],
        hint1: "Two words. The principle that 'the farther away, the less interaction.'",
        hint2: "The opposite of 'site.' Describes a place's relational geography.",
        hint3: "Three words separated by hyphens. Coined to describe the shrinking world.",
        explanation: "Distance decay — interaction falls with distance. Situation — a place's position relative to other places. Time-space convergence — distance shrinks as transport/communication improves."
      }
    },
    {
      id: 'hgintrog1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Apply the Themes** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Mumbai's Dharavi slum residents recycle 80% of the city's plastic, adapting to scarce land and waste services. Best-fit theme: ___",
            options: ["Human-Environment Interaction", "Absolute Location", "Distance decay", "Friction of distance"]
          },
          {
            label: "TikTok dances spread from Atlanta teens to Manila to São Paulo within 48 hours. Best-fit concept: ___",
            options: ["Space-time compression", "Site", "Absolute location", "Tobler's law of decay"]
          },
          {
            label: "Singapore's deep-water harbor, equatorial rainfall, and lack of typhoons make it a natural port. Best-fit concept: ___",
            options: ["Site", "Situation", "Region", "Movement"]
          }
        ],
        correctAnswers: ["Human-Environment Interaction", "Space-time compression", "Site"],
        hint1: "Residents are modifying and adapting to their environment.",
        hint2: "Coined by Harvey to describe the felt shrinking of the world.",
        hint3: "The internal physical traits of a place — not its relation to others.",
        explanation: "Dharavi recycling = adaptation/modification = HEI. Global TikTok trends = space-time compression (Harvey). Singapore's harbor + climate = site characteristics, distinct from its situation as a Strait of Malacca chokepoint."
      }
    },
    {
      id: 'hgintrog1-strategy',
      type: 'text' as const,
      content: `
## ⚡ Common Misconceptions & AP Strategy

### Misconceptions to Avoid
- **"Geography = capitals"**: AP HG is not trivia. It is *spatial reasoning*.
- **Site ≠ Situation**: Site = internal physical (soil, harbor, climate). Situation = relational (near hubs, on a trade route). Confusing these is the #1 FRQ error.
- **Tobler's Law has limits**: Tribal kin networks, religious diasporas, and global financial flows can defeat distance decay (e.g., the Mumbai–Silicon Valley tech corridor).

### AP Strategy Moves
- For "Why is X located at Y?" → write **two sentences**: one for site, one for situation.
- For diffusion questions → identify the **hearth**, the **mechanism** (relocation vs. expansion), and the **type** (contagious / hierarchical / stimulus).
- On stimulus-based MCQs, scan the map for the **scale** (local, regional, global) before reading options — wrong scale = wrong answer.
- Memorize Tobler's exact wording — it appears verbatim in MCQ stems.
      `
    },
    {
      id: 'hgintrog1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Researchers find that childhood asthma rates are nearly identical on adjoining city blocks but vary widely between blocks 2 miles apart. Which geographic principle is most directly demonstrated?",
            options: [
              "Spatial autocorrelation (Tobler's First Law)",
              "Time-space convergence",
              "Hierarchical diffusion",
              "Absolute location"
            ],
            correctAnswer: 0,
            explanation: "Near things being more similar than far things — and the asthma rates clustering by block — is spatial autocorrelation, the formal expression of Tobler's First Law."
          },
          {
            question: "A start-up chooses Memphis, TN over Birmingham, AL because Memphis sits at the convergence of FedEx's overnight network, I-40/I-55, the Mississippi River, and major rail lines. The decision is best explained by:",
            options: [
              "Memphis's superior site characteristics (soil, bedrock, climate)",
              "Memphis's superior situation (relational location to transport networks)",
              "Time-space compression",
              "Distance decay from Birmingham"
            ],
            correctAnswer: 1,
            explanation: "Site = local physical traits; situation = relation to other places and networks. Memphis's logistics advantage is purely relational — a textbook situation argument."
          }
        ]
      }
    }
  ]
}
