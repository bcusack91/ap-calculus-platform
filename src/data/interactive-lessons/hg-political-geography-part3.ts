export const hgPoliticalGeographyPart3Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpoliti3-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Geography & Boundaries

**Part 3 of 7 — Boundaries in Practice**

---

| Section |
|---------|
| 📖 How a Boundary Is Made: Define, Delimit, Demarcate, Administer |
| Classifying Boundaries by Origin, and the Limits of the Model |
| What Boundaries Do: Functions That Change |
| Worked Cases: Partition, Korea, Cyprus, Schengen and the South China Sea |

> 🔑 **Key Concept:** A boundary is not just a line on a map. It is **made** in stages, it **does** things (controls movement, trade and security), and both its meaning and its function can **change** over time. The CED asks you to explain how boundaries are established and how they shape interaction and identity (Topics 4.4–4.5).
`
    },
    {
      id: 'hgpoliti3-process',
      type: 'text' as const,
      content: `
## 📖 How a Boundary Is Made: Define, Delimit, Demarcate, Administer

| Stage | What happens | Typical evidence |
|---|---|---|
| **1. Definition** | A treaty or legal document describes where the boundary runs, in words | "Along the 49th parallel of north latitude" |
| **2. Delimitation** | Cartographers draw the defined line on official maps | A boundary line on a treaty map |
| **3. Demarcation** | The line is marked on the ground | Pillars, fences, walls, buoys, cleared strips |
| **4. Administration** | States manage and enforce the boundary over time | Customs posts, patrols, joint boundary commissions |

### Worked Case: The US–Canada Boundary
1. **Definition:** the Treaty of 1818 set the boundary along the **49th parallel** from the Lake of the Woods to the Rocky Mountains; the Oregon Treaty (1846) extended it to the Pacific coast.
2. **Delimitation:** surveyors and mapmakers fixed the line on maps over the following decades.
3. **Demarcation:** monuments mark the line, and a cleared strip about **6 meters (20 feet)** wide, called the "vista," runs through forests.
4. **Administration:** a joint International Boundary Commission maintains the monuments and the vista, and each state runs its own border crossings.

Many boundary disputes trace back to a weak early stage: a vague definition ("the main channel of the river") or a line that was defined but never demarcated in remote mountains, as along parts of the India–China border.

## Classifying Boundaries by Origin, and the Limits of the Model

Part 1's table mixed two ways of classifying boundaries. Keep them separate:
- **Genetic classification** (Richard Hartshorne, 1930s) asks **when** a boundary was drawn relative to settlement: **antecedent**, **subsequent**, **superimposed**, **relic**. A **consequent** boundary is a kind of subsequent boundary drawn to fit existing cultural divides such as religion or language.
- **Morphological classification** asks what the line **looks like** or follows: **geometric** (straight lines) or **physical** (rivers, mountains, lakes).

So one boundary gets one label from each system. The western US–Canada boundary is **antecedent** by origin and **geometric** by form.

**Limitations of the genetic model:**
- One boundary can fit **more than one** category, or change category over time (the Berlin Wall: superimposed, then relic).
- It classifies **origin**, not **function**; it says nothing about how open or militarized a border is today.
- "Antecedent" depends on whose settlement counts. The western US–Canada line is called antecedent because few **European** settlers lived there in 1846, although Indigenous peoples did.
`
    },
    {
      id: 'hgpoliti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two governments sign a treaty describing their border as "the crest of the Ardan Range." Surveyors later set concrete pillars along the ridge. Setting the pillars is called:',
            options: [
              'demarcation',
              'delimitation',
              'definition',
              'administration'
            ],
            correctAnswer: 0,
            explanation: 'Marking a boundary on the ground with pillars, fences or cleared strips is demarcation. Writing the treaty wording is definition, drawing the line on maps is delimitation, and managing the boundary afterward is administration.'
          },
          {
            question: 'What is one limitation of the genetic classification of boundaries?',
            options: [
              'One boundary can fit more than one category',
              'It sorts boundaries by their shape rather than their origin',
              'It works for land borders but not for maritime boundaries',
              'It was designed to rank borders by how well they are defended'
            ],
            correctAnswer: 0,
            explanation: 'Genetic categories describe when a line was drawn relative to settlement, and a single line can be both superimposed and, later, relic. Sorting by shape is the morphological system, and the model was never a ranking of defenses.'
          },
          {
            question: 'The Radcliffe Line of 1947 divided British India into India and Pakistan, largely along religious majorities, after centuries of dense settlement. A British lawyer drew it in about five weeks. Which pair of terms best fits it?',
            options: [
              'Subsequent and superimposed',
              'Antecedent and geometric',
              'Physical and relic',
              'Antecedent and superimposed'
            ],
            correctAnswer: 0,
            explanation: 'The line came long after the cultural landscape had formed, so it is subsequent (and, because it followed religious majorities, consequent), and an outside power imposed it, so it is superimposed. It cannot be antecedent, because the land was densely settled, and it is still a functioning boundary, not a relic.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti3-functions',
      type: 'text' as const,
      content: `
## What Boundaries Do: Functions That Change

The CED makes three claims about boundary functions:
1. Boundaries are defined, delimited, demarcated and administered to **establish the limits of sovereignty**, but they are often **contested**.
2. Boundaries often coincide with cultural, national or economic divisions, but some are created by **military lines or policy**, such as the Korean Demilitarized Zone.
3. Land and maritime boundaries and international agreements can **encourage or discourage interaction**, shape national or regional identity, and lead to disputes over resources.

| Function | A border that is open | A border that is closed or hardened |
|---|---|---|
| Movement of people | Schengen internal borders: no routine passport checks | Korean DMZ: almost no crossing |
| Trade | Customs union: no tariffs at internal borders | Separate customs posts and inspections |
| Security | Shared defense through an alliance | Fences, patrols and surveillance |
| Identity | Shared regional identity grows ("European") | National identity defined against the neighbor |

A boundary's function can change without the line moving: the line between France and Germany runs in essentially the same place as in the 1950s, but crossing it has gone from a guarded checkpoint to an unmarked highway.

> 🔑 **AP Connection:** "Explain how a boundary affects interaction" means naming a flow (people, goods, ideas), saying whether the boundary speeds or slows it, and giving the mechanism (checks, tariffs, walls, agreements).
`
    },
    {
      id: 'hgpoliti3-cases',
      type: 'text' as const,
      content: `
## Worked Cases: Partition, Korea, Cyprus, Schengen and the South China Sea

| Case | Origin of the line | Function today | Key data |
|---|---|---|---|
| **India–Pakistan (1947)** | Superimposed and consequent: drawn by a British commission along religious majorities | Heavily guarded; Kashmir still disputed | An estimated 10 to 20 million people were displaced in the migration that followed |
| **Korean DMZ (1953)** | Set by the 1953 armistice near the 38th parallel, where the US and Soviet Union had divided Korea in 1945 | One of the most militarized borders on Earth; it divides one nation into two states | About 250 km long and about 4 km wide |
| **Cyprus Green Line (1974)** | A ceasefire line after 1974; a UN buffer zone separates the Greek Cypriot south from the Turkish Cypriot north | Crossings opened in 2003; the north is recognized only by Turkey | The Republic of Cyprus joined the EU in 2004 |
| **Schengen Area** | Agreement signed in 1985; checks removed in 1995 | Internal borders open; external border shared | 29 countries in 2025, including non-EU Iceland, Norway, Switzerland and Liechtenstein |

### Maritime Case: The South China Sea
Six governments (China, Taiwan, Vietnam, the Philippines, Malaysia and Brunei) claim overlapping parts of the sea, which holds rich fisheries, possible oil and gas, and major shipping lanes. China's claim follows the **"nine-dash line,"** which encloses most of the sea.

In **2016**, a tribunal under UNCLOS ruled on a case brought by the Philippines:
- China's claim to historic rights inside the nine-dash line had **no legal basis** under UNCLOS.
- None of the disputed Spratly features qualifies as a full island that generates a 200-nautical-mile EEZ; under UNCLOS, **rocks that cannot sustain human habitation get only a 12-nautical-mile territorial sea**, and building up a reef does not change its legal status.
- China rejected the ruling and continues to build and occupy artificial islands.

**Applying Part 1's dispute types:**
- **Definitional:** what counts as an "island" versus a "rock" under the treaty's wording.
- **Locational:** which state owns each feature and where lines between EEZs fall.
- **Allocational:** who may fish and drill for oil and gas.
- **Operational:** whether foreign warships may pass freely.

*Scale:* a dispute over single reefs (local) involves national claims, regional security and global shipping.
`
    },
    {
      id: 'hgpoliti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify It** 🔍

Choose the best term for each situation.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two states agree where their border lies but argue over a natural gas field that straddles it: ___ dispute',
            options: ['allocational', 'definitional', 'locational', 'operational']
          },
          {
            label: 'Two states disagree over whether a treaty\'s phrase "the main channel" means the deepest channel or the middle of the river: ___ dispute',
            options: ['allocational', 'definitional', 'locational', 'operational']
          },
          {
            label: 'Two neighbors argue over how many hours a day their border crossing should be open: ___ dispute',
            options: ['allocational', 'definitional', 'locational', 'operational']
          },
          {
            label: 'The words of a treaty are turned into a line drawn on official maps: ___',
            options: ['definition', 'delimitation', 'demarcation', 'administration']
          }
        ],
        correctAnswers: ['allocational', 'definitional', 'operational', 'delimitation'],
        hint1: 'The line is not in question; the resource is.',
        hint2: 'The argument is about the meaning of the treaty\'s words.',
        hint3: 'Crossing hours are about how the border works day to day; maps come after the treaty words and before markers on the ground.',
        explanation: 'A shared gas field is an allocational dispute over resources. Arguing over a treaty phrase is definitional. Crossing hours concern how the boundary functions, so the dispute is operational. Drawing the defined line on maps is delimitation.'
      }
    },
    {
      id: 'hgpoliti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Korean Demilitarized Zone, set by the 1953 armistice, is best described as a boundary that:',
            options: [
              'reflects a ceasefire line, not a cultural divide',
              'follows a long-standing ethnic divide between two nations',
              'was drawn before the peninsula had been settled',
              'separates two states that share one currency and market'
            ],
            correctAnswer: 0,
            explanation: 'The DMZ follows the front line where fighting stopped in 1953, so it was created by military policy, and it divides one Korean nation into two states. The peninsula was settled for thousands of years before 1953, and the two Koreas have separate currencies and almost no trade.'
          },
          {
            question: 'Since the Schengen rules took effect, what has happened at most borders between member countries?',
            options: [
              'Routine passport checks were removed and travelers now cross freely',
              'Each line was redrawn to match the language boundaries',
              'Members now share one army that patrols the crossings',
              'Border posts were rebuilt to tighten customs searches'
            ],
            correctAnswer: 0,
            explanation: 'Schengen removed routine passport checks at internal borders, so the lines stayed where they were but their function changed. Schengen did not redraw any boundary or create a shared army, and tighter searches are the opposite of its purpose, although members may bring back temporary checks in emergencies.'
          },
          {
            question: 'Which finding of the 2016 UNCLOS tribunal on the South China Sea matters most for EEZ claims?',
            options: [
              'Building up a reef cannot create an EEZ',
              'China\'s nine-dash line confirms its historic rights to the waters',
              'A reef that stays above water at high tide earns a full EEZ',
              'Neighboring states must split the sea\'s oil revenue evenly'
            ],
            correctAnswer: 0,
            explanation: 'The tribunal held that a feature\'s natural state decides its zones, so artificial building cannot turn a reef or rock into an island with a 200-nautical-mile EEZ. It rejected the nine-dash line\'s historic-rights claim, a rock above water at high tide gets only a 12-nautical-mile territorial sea, and it ordered no revenue sharing.'
          }
        ]
      }
    }
  ]
};
