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
| 📌 Key People & Models |
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
| **Place** (Yi-Fu Tuan) | Location + meaning + lived experience |
| **Space** | Undifferentiated extent between objects |
| **Sense of place** | Emotional/cultural attachment |
| **Placelessness** (Relph) | Homogenized landscape that erases local identity |
| **Distance decay** | Interaction weakens with distance (Tobler's First Law) |
| **Time-space convergence** (Janelle 1969) | Effective shrinking of distance via faster transport/communication |
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
| **Diffusion (reverse hierarchical)** | Spreads from small place upward (Walmart) |
| **Diffusion (stimulus)** | Idea spreads, local form modified (McAloo Tikki) |
| **Cultural hearth** (Sauer) | Place where an innovation originates |
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
              "Site, perceptual region, and reverse hierarchical diffusion",
              "Situation (highway access), accessibility, and low friction of distance for trucking",
              "Cultural hearth, formal region, and stimulus diffusion",
              "Cartograms, choropleth, and MAUP"
            ],
            correctAnswer: 1,
            explanation: "Locating at interstate interchanges is about *situation* (position relative to highways), *accessibility* (easy to reach), and *low friction of distance* (interstate speeds make trucking cheap)."
          },
          {
            question: "A researcher writes: 'At the global scale, sub-Saharan Africa appears uniformly poor; at the local scale, Lagos has both luxury enclaves and informal settlements.' This sentence demonstrates correct use of:",
            options: [
              "Friction of distance",
              "Scale of analysis (and an implicit MAUP critique)",
              "Time-space convergence",
              "Stimulus diffusion"
            ],
            correctAnswer: 1,
            explanation: "Switching between global and local to reveal a pattern that aggregation hides is exactly the scale-of-analysis move (and implicitly invokes MAUP — different units, different stories)."
          }
        ]
      }
    },
    {
      id: 'hgintrog7-people',
      type: 'text' as const,
      content: `
## 📌 Key People & Models You Should Be Able to Cite

| Figure / Model | Contribution | Why You Cite It |
|----------------|--------------|-----------------|
| **Waldo Tobler** (1970) | Tobler's First Law: "Everything is related to everything else, but near things are more related" | Anchors all distance-decay and spatial-autocorrelation arguments |
| **Yi-Fu Tuan** (1977, *Space and Place*) | Distinction between location, space, and place | "Sense of place" FRQs |
| **Edward Relph** (1976, *Place and Placelessness*) | Coined "placelessness" | Standardized strip-mall landscapes |
| **David Harvey** (1989) | Time-space compression in late capitalism | Globalization & culture FRQs |
| **Donald Janelle** (1969) | Time-space convergence | Transport & communication revolutions |
| **Carl Sauer** (Berkeley, 1952) | Cultural hearths & agricultural origins | Diffusion + Unit 5 origins of agriculture |
| **Mercator vs. Gall-Peters** | Conformal vs. equal-area projection trade-offs | Map projection FRQs |
| **Goode Homolosine** | Equal-area, interrupted | Continental-area visualization |
| **GIS pioneers (Tomlinson 1968)** | Canada Geographic Information System | First operational GIS |

### Mini Synthesis Map (memorize the connections)

- **Tobler → distance decay → distance-based diffusion → why hierarchical diffusion exists.**
- **Sauer → cultural hearths → diffusion of agriculture → Unit 5.**
- **Janelle / Harvey → shrinking distance → globalization → Unit 7.**
- **Tuan / Relph → place identity → cultural landscape → Unit 3.**

> 🔑 **Why This Matters:** AP graders reward students who *name* the geographer. "As Yi-Fu Tuan argued…" earns more credit than "Some geographers say…"
      `
    },
    {
      id: 'hgintrog7-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

1) Author of Tobler's First Law (last name only):

2) Author of *Space and Place* (1977) — the place vs. space distinction (last name only):

3) Berkeley geographer who in 1952 wrote *Agricultural Origins and Dispersals* on cultural hearths (last name only):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Tobler", "Tuan", "Sauer"],
        hint1: "First Law of Geography (1970).",
        hint2: "Yi-Fu ___",
        hint3: "Carl ___, Berkeley.",
        explanation: "Tobler (1970) — distance decay law. Yi-Fu Tuan (1977) — *Space and Place*, the place vs. space distinction. Carl Sauer (1952) — cultural hearths and the Berkeley school of cultural geography."
      }
    },
    {
      id: 'hgintrog7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Concept to Geographer** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "'Near things are more related than distant things' — ___",
            options: ["Tobler", "Tuan", "Relph", "Harvey"]
          },
          {
            label: "Time-space compression in late capitalism (1989) — ___",
            options: ["Harvey", "Sauer", "Janelle", "Tobler"]
          },
          {
            label: "'Placelessness' (1976) — ___",
            options: ["Relph", "Tuan", "Sauer", "Tobler"]
          }
        ],
        correctAnswers: ["Tobler", "Harvey", "Relph"],
        hint1: "First Law of Geography.",
        hint2: "Author of *The Condition of Postmodernity* (1989).",
        hint3: "*Place and Placelessness*, 1976.",
        explanation: "Tobler — First Law (1970). David Harvey — time-space compression in late capitalism (1989). Edward Relph — placelessness (1976)."
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
- [ ] Cite Tobler, Tuan, Sauer, Janelle, Harvey, Relph each in one sentence.
- [ ] Describe one thematic map type AND its limitation.

### Top Strategic Reminders
- Always answer the **verb**: identify / describe / explain / compare ≠ interchangeable.
- Always **name the place**, **name the geographer**, **name the model**.
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
              "Burgess Concentric Zone Model",
              "A combination of hierarchical diffusion (large cities first), time-space convergence (instant cross-border data), and distance decay (regulatory barriers slow uptake in some markets)",
              "Von Thünen's agricultural rings",
              "Christaller's Central Place Theory"
            ],
            correctAnswer: 1,
            explanation: "TikTok's adoption fits hierarchical diffusion (East Asia → global cities → smaller markets), time-space convergence (instant network effects), and distance decay (slow uptake where regulators or language create friction). The other three models address agriculture, retail hierarchy, and city structure."
          },
          {
            question: "Which sentence shows the BEST AP-style synthesis use of Unit 1 vocabulary?",
            options: [
              "The Sun Belt is just where it is hot.",
              "The Sun Belt is a formal region defined by warm climate, but at the local scale within the Sun Belt, Phoenix and rural Arizona reservations have very different physiological densities and accessibility to capital.",
              "The Sun Belt has a lot of sun.",
              "The Sun Belt is a perceptual region only."
            ],
            correctAnswer: 1,
            explanation: "Option B layers region type (formal), scale switch (regional → local), density vocabulary (physiological density), and accessibility — exactly the kind of multi-concept synthesis APHG rubrics reward."
          }
        ]
      }
    }
  ]
}
