export const hgIntroGeographyPart7Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog7-intro',
      type: 'text' as const,
      content: `
# 🎓 AP Review — Unit 1 Synthesis

**Part 7 of 7 — Capstone Review for "Thinking Geographically"**

---

| Section |
|---------|
| 📖 Master Vocabulary Map |
| 📌 Key Concepts & Models |
| Synthesis Practice |
| Final Self-Check |

> 🔑 **Key Concept:** Unit 1 sets up *every* later unit. The vocabulary you lock in here — diffusion, density, region, scale, distance decay — recurs in Units 2 (population), 3 (culture), 4 (politics), 5 (agriculture), 6 (cities), 7 (industry). Master it now.
      `
    },
    {
      id: 'hgintrog7-vocab',
      type: 'text' as const,
      content: `
## 📖 Master Vocabulary — One-Line Definitions

| Term | One-Line Definition |
|------|--------------------|
| **Absolute location** | Exact coordinates |
| **Relative location** | Position relative to other places |
| **Site** | Internal physical traits of a place |
| **Situation** | Position relative to surrounding features (trade routes, neighbors) |
| **Place** | Location + meaning + lived experience |
| **Space** | Undifferentiated extent between objects |
| **Sense of place** | Emotional/cultural attachment |
| **Placelessness** | Homogenized landscape that erases local identity |
| **Distance decay** | Interaction weakens with distance |
| **Time-space convergence** | Effective shrinking of distance via faster transport/communication |
| **Friction of distance** | Cost (time/money/effort) of crossing space |
| **Arithmetic density** | Population ÷ total land |
| **Physiological density** | Population ÷ arable land |
| **Agricultural density** | Farmers ÷ arable land |
| **Concentration** | Clustered / dispersed / random |
| **Pattern** | Linear / centralized / geometric |
| **Formal region** | Defined by a measurable shared trait |
| **Functional region** | Centered on a node, defined by interaction |
| **Perceptual region** | Defined by collective imagination |
| **Scale of analysis** | Level (global/regional/national/local) at which data are aggregated |
| **MAUP** | Modifiable Areal Unit Problem — aggregation choices change apparent patterns |
| **Diffusion (relocation)** | Trait carried by migrating people |
| **Diffusion (contagious)** | Person-to-person rapid spread |
| **Diffusion (hierarchical)** | Spreads top-down through tiers of places |
| **Diffusion (stimulus)** | Idea spreads, local form modified (McAloo Tikki) |
| **Cultural hearth** | Place where an innovation originates |
| **GIS / GPS / Remote sensing / VGI** | Data-collection technologies |
| **Map projection** | Method of flattening the globe (Mercator, Gall-Peters, Robinson, Goode, Polar) |
      `
    },
    {
      id: 'hgintrog7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which COMBINATION of concepts BEST explains why Walmart distribution centers locate at rural interstate interchanges in Arkansas, Missouri, and Oklahoma?",
            options: [
              "Site, perceptual region and hierarchical diffusion",
              "Situation, accessibility and low friction of distance",
              "Cultural hearth, formal region and stimulus diffusion",
              "Time-space convergence, functional regions and the MAUP"
            ],
            correctAnswer: 1,
            explanation: "Locating at interstate interchanges is about *situation* (position relative to highways), *accessibility* (easy to reach), and *low friction of distance* (interstate speeds make trucking cheap)."
          },
          {
            question: "A researcher writes: 'At the global scale, sub-Saharan Africa appears uniformly poor; at the local scale, Lagos has both luxury enclaves and informal settlements.' This sentence demonstrates correct use of:",
            options: [
              "Friction of distance between places",
              "Changing the scale of analysis",
              "Time-space convergence at every scale",
              "Stimulus diffusion of luxury housing"
            ],
            correctAnswer: 1,
            explanation: "Switching between the global and local scales to reveal a pattern that aggregation hides is the scale-of-analysis move, and it implicitly raises the MAUP: different units tell different stories."
          }
        ]
      }
    },
    {
      id: 'hgintrog7-people',
      type: 'text' as const,
      content: `
## 📌 Key Concepts & Models to Apply

The CED asks you to apply geographic concepts, not to cite individual geographers. These are the Unit 1 ideas that recur across the course:

| Concept / Model | What it means | Where it shows up |
|----------------|---------------|-------------------|
| **Distance decay** | Interaction between places weakens as distance increases | Diffusion, migration, trade and retail market areas |
| **Time-space compression** | Faster transport and communication make distant places feel closer | Globalization, the spread of culture and disease |
| **Place and sense of place** | Location given meaning by the people who live there | Cultural landscape and identity questions (Unit 3) |
| **Cultural hearth** | The place where an innovation or trait begins | Diffusion of religions and languages (Unit 3); origins of agriculture (Unit 5) |
| **Mercator vs. Gall-Peters** | Shape-preserving (conformal) vs. equal-area projection trade-offs | Map projection questions |
| **Goode Homolosine** | Equal-area, interrupted | Comparing the true sizes of continents |
| **GIS** | Layered digital mapping and analysis | Data and technology questions |

### Mini Synthesis Map (memorize the connections)

- **Distance decay → contagious diffusion slows with distance → why hierarchical diffusion can leap across space.**
- **Cultural hearths → diffusion of agriculture → Unit 5.**
- **Time-space compression → shrinking distance → globalization → Unit 7.**
- **Sense of place → place identity → cultural landscape → Unit 3.**

> 🔑 **Why This Matters:** AP scorers reward an accurate concept applied to a specific example ("Distance decay explains why most customers live within a few miles of the store"), not the name of the scholar who described it.
      `
    },
    {
      id: 'hgintrog7-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

1) The principle that interaction between places weakens as distance increases (two words):

2) The visible imprint of human activity on the physical environment (two words):

3) A map projection that keeps the relative sizes of areas accurate, such as Gall-Peters (two words, hyphen optional):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Distance decay", "Cultural landscape", "Equal-area"],
        hint1: "Most customers of a corner store live within walking distance.",
        hint2: "Church steeples, field patterns and street signs are all part of it.",
        hint3: "It distorts shape so that it can keep size true.",
        explanation: "Distance decay: interaction falls off with distance. Cultural landscape: the visible human imprint on the environment. Equal-area projections, such as Gall-Peters, keep relative size accurate at the cost of shape."
      }
    },
    {
      id: 'hgintrog7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Example to Its Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A town's residents trade mostly with nearby towns and rarely with distant ones — ___",
            options: ["Distance decay", "Time-space compression", "Placelessness", "Sense of place"]
          },
          {
            label: "Video calls and cheap flights make a family on another continent feel close — ___",
            options: ["Distance decay", "Time-space compression", "Placelessness", "Sense of place"]
          },
          {
            label: "Identical strip malls make towns across the country look interchangeable — ___",
            options: ["Distance decay", "Time-space compression", "Placelessness", "Sense of place"]
          }
        ],
        correctAnswers: ["Distance decay", "Time-space compression", "Placelessness"],
        hint1: "Interaction falls off as distance grows.",
        hint2: "Technology shrinks the effective distance.",
        hint3: "The opposite of a distinctive sense of place.",
        explanation: "Trading mostly with nearby places is distance decay. Technology that makes distant places feel close is time-space compression. Interchangeable chain landscapes show placelessness, the opposite of a strong sense of place."
      }
    },
    {
      id: 'hgintrog7-strategy',
      type: 'text' as const,
      content: `
## ⚡ Final Self-Check Before Exam Day

### "Can I do these without notes?"
- [ ] Distinguish absolute vs. relative location with examples.
- [ ] Distinguish site vs. situation with two real cities each.
- [ ] State all three densities and one country example for each.
- [ ] Classify regions (formal/functional/perceptual) and give Atlanta as a place that is in all three.
- [ ] Distinguish all four types of expansion diffusion + relocation diffusion, with a named example for each.
- [ ] Explain MAUP with an example of how aggregation changes the apparent pattern.
- [ ] Define distance decay, time-space compression, place, sense of place and cultural hearth, each with one example.
- [ ] Describe one thematic map type AND its limitation.

### Top Strategic Reminders
- Always answer the **verb**: identify / describe / explain / compare ≠ interchangeable.
- Always **name the place** and **name the concept or model**.
- For *every* stimulus question, cite the stimulus by value or feature.
- For scale questions, name the scale and how patterns differ.

> ✅ **You are ready for Unit 1 if** you can teach the difference between *time-space convergence* and *distance decay* to a peer in 60 seconds, with one named example for each.
      `
    },
    {
      id: 'hgintrog7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Capstone** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which Unit-1 framework would BEST help a researcher analyzing the global spread of TikTok between 2017 and 2024?",
            options: [
              "Burgess's concentric zones, applied to rings of app adoption",
              "Hierarchical diffusion, time-space convergence and national bans",
              "Von Thünen's land-use rings around a single central market",
              "Christaller's central place theory of market thresholds"
            ],
            correctAnswer: 1,
            explanation: "TikTok's adoption fits hierarchical diffusion (global cities and early-adopting markets first), time-space convergence (instant cross-border data) and barriers to diffusion where governments banned or restricted the app. Burgess, von Thünen and Christaller model city structure, farmland use and market areas, not the spread of an innovation."
          },
          {
            question: "Which sentence shows the BEST AP-style synthesis use of Unit 1 vocabulary?",
            options: [
              "The Sun Belt is a functional region because warm weather draws retirees to one node.",
              "The Sun Belt is formal by climate, yet locally Phoenix and rural reservations differ in density.",
              "The Sun Belt is a perceptual region, so measured data such as density cannot describe it.",
              "The Sun Belt has high arithmetic density everywhere, so the local scale adds nothing."
            ],
            correctAnswer: 1,
            explanation: "The Phoenix and rural-reservation sentence layers a region type (formal, defined by climate), a change of scale (regional to local) and density vocabulary, the multi-concept synthesis AP rubrics reward. Each of the others misuses one term: a functional region needs a node, perceptual regions can still be studied with data, and density varies within the region."
          }
        ]
      }
    }
  ]
}
