export const hgCultureDiffusionPart3Data = {
  topicSlug: 'hg-culture-diffusion',
  sections: [
    {
      id: 'hgcultur3-intro',
      type: 'text' as const,
      content: `
# 🌍 Cultural Landscape & Diffusion

**Part 3 of 7 — Classifying Diffusion: Worked Cases**

---

| Section |
|---------|
| 📖 A Four-Question Decision Procedure |
| Reverse Hierarchical Diffusion |
| Six Worked Cases |
| Barriers and Mixed Cases |

> 🔑 **Key Concept:** Part 1 defined the diffusion types. This part is about **classifying** real cases, which is what the exam asks. The key evidence is always the same: **did people move, what path did the trait take, and did the trait arrive unchanged?** (CED Topic 3.4)
`
    },
    {
      id: 'hgcultur3-procedure',
      type: 'text' as const,
      content: `
## 📖 A Four-Question Decision Procedure

Ask these in order. The first "yes" usually gives the main type.

| Step | Question | If yes |
|---|---|---|
| 1 | Did the **people who carry the trait move** to a new place and bring it with them? | **Relocation diffusion** |
| 2 | Did the trait **jump** between large or powerful places or people first, skipping the places in between? | **Hierarchical diffusion** |
| 3 | Did the trait spread **outward to neighbors**, like a wave, regardless of status? | **Contagious diffusion** |
| 4 | Did people adopt the **underlying idea** but change or reject the specific trait? | **Stimulus diffusion** |

### Reverse Hierarchical Diffusion
Hierarchical diffusion usually runs **downward**, from large cities or high-status people to smaller places. **Reverse hierarchical** diffusion runs **upward**: a trait starts in small towns or among ordinary people and later reaches large cities.

### What the Exam Rewards
- Naming the type is only the start. **Explain the evidence**: "Because merchants physically carried the faith to port cities, this is relocation diffusion."
- Many real cases combine types. Say which type fits **which stage**, and at **what scale**.
`
    },
    {
      id: 'hgcultur3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A new slang term appears first in New York, Los Angeles and London, and only later in small towns between them. Which type of diffusion is this?',
            options: [
              'Hierarchical',
              'Contagious',
              'Relocation',
              'Stimulus'
            ],
            correctAnswer: 0,
            explanation: 'The term jumped between large, connected cities before reaching the smaller places in between, which is the signature of hierarchical diffusion. Contagious spread would move outward to neighboring places in a continuous wave.'
          },
          {
            question: 'Which piece of evidence most clearly points to relocation diffusion rather than expansion diffusion?',
            options: [
              'The trait reached remote areas before nearby ones',
              'The trait was carried by migrants to their new home',
              'The trait changed form as each new group adopted it',
              'The trait spread fastest among the most famous people'
            ],
            correctAnswer: 1,
            explanation: 'Relocation diffusion requires the people who hold the trait to move and bring it along. A changing form points to stimulus diffusion, and spread through famous people points to hierarchical diffusion.'
          }
        ]
      }
    },
    {
      id: 'hgcultur3-cases',
      type: 'text' as const,
      content: `
## Six Worked Cases

**Case 1: Catholicism in Spanish America (1500s onward)**
- Spanish colonists, soldiers and missionaries **physically moved** across the Atlantic and carried the faith, then built missions and churches.
- **Main type: relocation.** Colonial authority then helped impose the religion on local populations, so conversions under church and crown also had a **hierarchical** element. Local blends of Catholic and indigenous practice show **syncretism**, an effect of diffusion (Part 5).

**Case 2: Early Islam (600s and 700s CE)**
- Within the Arabian Peninsula, the faith spread from Mecca and Medina to nearby communities: **contagious**.
- Across North Africa and into Iberia by **711**, it moved with Arab armies, administrators and traders: **relocation**.
- **Scale point:** at the regional scale the spread looks contagious; at the scale of three continents it depended on people moving.

**Case 3: Hip-hop (1970s onward)**
- Emerged in the **Bronx** in New York City in the 1970s.
- Reached other large U.S. cities and then Paris, London, Tokyo and Seoul through recordings, radio and later the internet: **hierarchical**.
- Local artists rapping in French, Korean or Arabic about local issues adopted the form but changed the content: **stimulus**.

**Case 4: Walmart (founded 1962, Rogers, Arkansas)**
- Opened stores first in **small towns** in the South and Midwest and reached large metropolitan areas later.
- **Type: reverse hierarchical.** It moved up the urban hierarchy rather than down.

**Case 5: Sequoyah's Cherokee syllabary (completed 1821)**
- Sequoyah saw English speakers using writing but did not learn the English alphabet. He invented a new system of symbols for Cherokee syllables.
- **Type: stimulus.** The **idea** of writing diffused; the specific trait, the alphabet, did not.

**Case 6: Chinese food in Peru (mid-1800s onward)**
- Chinese contract laborers arrived in Peru from **1849**, bringing cooking methods with them: **relocation**.
- Over time, Chinese techniques merged with Peruvian ingredients into **chifa**, now part of mainstream Peruvian cuisine: an example of syncretism.
`
    },
    {
      id: 'hgcultur3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is Sequoyah\'s Cherokee writing system classified as stimulus diffusion?',
            options: [
              'The idea of writing spread, but he created new symbols',
              'Cherokee speakers moved and carried an alphabet with them',
              'Writing reached powerful leaders before ordinary people',
              'Each nearby town copied the alphabet used by its neighbor'
            ],
            correctAnswer: 0,
            explanation: 'Sequoyah adopted the underlying idea of writing but invented a different system, which defines stimulus diffusion. No group carried an alphabet with them, and the case is not about status or neighbor-to-neighbor spread.'
          },
          {
            question: 'A discount chain opened its first stores in small rural towns and reached major cities only decades later. This pattern is best described as:',
            options: [
              'Contagious diffusion',
              'Relocation diffusion',
              'Reverse hierarchical diffusion',
              'Stimulus diffusion'
            ],
            correctAnswer: 2,
            explanation: 'Spread that starts at the bottom of the urban hierarchy and moves up toward large cities is reverse hierarchical diffusion. Contagious diffusion ignores city size, and relocation requires the people themselves to move.'
          },
          {
            question: 'Which statement about the early spread of Islam is most accurate?',
            options: [
              'It shows a single type of diffusion',
              'It shows different types at different scales',
              'It spread only through hierarchical channels',
              'It spread only through stimulus diffusion'
            ],
            correctAnswer: 1,
            explanation: 'Neighbor-to-neighbor spread within Arabia was contagious, while movement across North Africa into Iberia depended on armies, officials and traders relocating. Recognizing that the type depends on scale is what the exam rewards.'
          }
        ]
      }
    },
    {
      id: 'hgcultur3-barriers',
      type: 'text' as const,
      content: `
## Barriers and Mixed Cases

### Barriers to Diffusion
Distance decay means traits weaken with distance from the hearth unless something speeds them up. **Barriers** slow or stop diffusion:

| Barrier | How it works | Example |
|---|---|---|
| **Physical** | Mountains, deserts and oceans limit contact | Isolated mountain valleys keep distinct dialects and dress |
| **Cultural** | Beliefs reject a trait | Beef-based fast food spreads slowly where many people are Hindu |
| **Political** | Governments restrict contact or media | China has blocked major Western social media platforms such as Facebook since 2009 |
| **Economic** | People cannot afford access | Low broadband access slows the spread of streaming culture in poor rural areas |

### Mixed Cases: How to Write About Them
1. **Split the case into stages.** Arrival of the trait, then spread within the new region.
2. **Name a type for each stage.** Relocation for arrival, then contagious or hierarchical within the region.
3. **Name the scale.** Global, regional or local.

**Worked example:** *"K-pop spread from Seoul to fans worldwide through streaming platforms and social media. Explain the type of diffusion."*
- **Global scale:** reached large cities and connected fans first through media companies and online platforms, a **hierarchical** pattern; then shared from fan to fan online, which is **contagious**.
- **Local scale:** groups abroad perform K-pop-style music in their own languages: **stimulus**.

> 🔑 **AP Connection:** If a free-response question says "explain," a one-word type earns little. Write: *type + evidence from the case + the scale at which it applies*.
`
    },
    {
      id: 'hgcultur3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Case** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chinese contract laborers bring cooking methods to Peru in the 1850s. This is ___',
            options: ['Relocation diffusion', 'Hierarchical diffusion', 'Contagious diffusion', 'Stimulus diffusion']
          },
          {
            label: 'A dance spreads from student to student across a school in one week. This is ___',
            options: ['Contagious diffusion', 'Relocation diffusion', 'Reverse hierarchical diffusion', 'Stimulus diffusion']
          },
          {
            label: 'A government blocks foreign streaming sites, slowing the spread of foreign music. This is a ___',
            options: ['Political barrier', 'Physical barrier', 'Cultural barrier', 'Economic barrier']
          }
        ],
        correctAnswers: ['Relocation diffusion', 'Contagious diffusion', 'Political barrier'],
        hint1: 'The people who held the trait moved.',
        hint2: 'Spread to people in direct contact, regardless of status.',
        hint3: 'Who did the blocking?',
        explanation: 'Migrants carrying cuisine is relocation. A dance passing among classmates in contact is contagious. A government ban on foreign media is a political barrier.'
      }
    }
  ]
}
