export const apushNativeSocietiesExplorationPart1Data = {
  topicSlug: 'apush-native-societies-exploration',
  sections: [
    {
      id: 'apushnat1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Native Societies & European Exploration

**Part 1 of 7 — Pre-Columbian Americas & First Contact**

---

### Topics in This Part

| Section |
|---------|
| 📖 Native Societies Before Contact |
| Native American Diversity |
| European Motives for Exploration |
| 📌 The Columbian Exchange |
| Early Contact & Consequences |

> 🔑 **Key Concept:** The AP exam heavily tests the **Columbian Exchange** and the diverse nature of Native American societies before European contact. You must understand that indigenous peoples were not a monolithic group — they had vastly different political structures, economies, and cultures.

---

### What You'll Master in Part 1
- How the spread of maize shaped Native societies north of Mexico
- How geography shaped Native American societies
- European motives behind exploration (God, gold, glory)
- The biological, economic, and cultural impacts of the Columbian Exchange
      `
    },
    {
      id: 'apushnat1-civilizations',
      type: 'text' as const,
      content: `
## 📖 Native Societies Before Contact

Before Europeans arrived, the Americas were home to complex, diverse societies with millions of inhabitants. The course focuses on North America, where the **spread of maize cultivation northward from present-day Mexico** supported settlement, irrigation and social diversification.

### Key Societies North of Mexico

| Society | Location | Key Features |
|---|---|---|
| **Ancestral Puebloans** | American Southwest | Maize, beans and squash grown with irrigation and dry farming; multi-story adobe and stone villages |
| **Mississippian** | Mississippi River Valley | Cahokia (near modern St. Louis, pop. ~20,000); earthen mounds; maize agriculture; chiefdoms |
| **Haudenosaunee (Iroquois)** | Northeast | Three Sisters farming plus hunting; permanent villages; a confederacy of five nations |

> 📌 **Scope note:** The Mexica (Aztec) and Inca empires appear in this course through their conquest by Spain (Part 3); their internal features, and the Maya, belong to AP World History rather than this exam.

### Native American Diversity in North America

The AP exam emphasizes that indigenous peoples adapted to their **environments** in fundamentally different ways:

- **Eastern Woodlands** — Semi-sedentary; maize/squash/beans ("Three Sisters" agriculture); Iroquois Confederacy (representative governance)
- **Great Plains** — Nomadic/semi-nomadic; bison hunting; portable tipis
- **Pacific Northwest** — Fishing-based (salmon); potlatch ceremonies; totem poles; cedar plank houses
- **Great Basin / Desert** — Small bands; hunter-gatherers; seasonal migration

> 🔑 **AP Connection:** The AP exam often asks you to compare how **geography and environment** shaped different Native American societies. Be ready to contrast specific groups.
      `
    },
    {
      id: 'apushnat1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The spread of maize cultivation northward from present-day Mexico most directly supported which development in the American Southwest?',
            options: [
              'Mobile bands that followed bison herds on foot',
              'Irrigated farming villages with diverse social roles',
              'Coastal villages living on salmon and cedar',
              'Mounted raiding societies built on Spanish horses'
            ],
            correctAnswer: 1,
            explanation: 'Maize, together with irrigation, let Ancestral Puebloans and the Hohokam live in permanent villages with specialized crafts and larger populations. Following bison describes the western Plains, salmon and cedar describe the Northwest coast, and horses reached the Southwest only after Spanish colonization.'
          },
          {
            question: 'The Iroquois Confederacy is historically significant because it:',
            options: [
              'Adopted European farming methods before other nations',
              'Joined several nations in a council-based alliance',
              'Built the largest mound complex at Cahokia',
              'Held a monopoly on the fur trade with the French'
            ],
            correctAnswer: 1,
            explanation: 'The Iroquois (Haudenosaunee) Confederacy united the Mohawk, Oneida, Onondaga, Cayuga, and Seneca nations (the Tuscarora joined later) under the Great Law of Peace — a representative council system. Some historians argue it influenced the framers of the U.S. Constitution.'
          },
          {
            question: 'Which of the following best explains why Native American societies in the Pacific Northwest developed differently from those on the Great Plains?',
            options: [
              'Abundant salmon and cedar supported permanent villages without farming',
              'Great Plains peoples had larger populations and stronger central rulers',
              'Pacific Northwest peoples were cut off from all regional trade networks',
              'Great Plains peoples developed writing systems earlier than coastal peoples'
            ],
            correctAnswer: 0,
            explanation: 'The Pacific Northwest\'s abundant natural resources — especially salmon runs and cedar forests — allowed peoples like the Chinook and Tlingit to build permanent settlements and develop complex social hierarchies without relying on farming. Great Plains peoples were more nomadic, following bison herds.'
          }
        ]
      }
    },
    {
      id: 'apushnat1-exploration',
      type: 'text' as const,
      content: `
## European Motives & the Columbian Exchange

### Why Did Europeans Explore?

Historians summarize European motives as **"God, Gold, and Glory"**:

| Motive | Details |
|--------|---------|
| **God** | Spread Christianity; Catholic missions in Spanish colonies; Protestant settlements in English colonies |
| **Gold** | Desire for precious metals, spices, and new trade routes to Asia after the fall of Constantinople (1453) |
| **Glory** | National competition between Spain, Portugal, England, France, and the Netherlands for imperial prestige |

**Technological enablers:** Improved navigation (compass, astrolabe), caravel ships, gunpowder weapons, joint-stock companies for financing voyages.

---

### The Columbian Exchange (post-1492)

The **Columbian Exchange** refers to the massive transfer of plants, animals, diseases, people, and ideas between the **Old World** (Europe, Africa, Asia) and the **New World** (the Americas).

| From Americas → Europe/Africa/Asia | From Europe/Africa/Asia → Americas |
|---|---|
| Potatoes, maize (corn), tomatoes, tobacco, cacao, squash | Horses, cattle, pigs, wheat, sugar, coffee |
| Rubber, vanilla, avocados, peanuts | Smallpox, measles, influenza, typhus |
| Syphilis (debated) | Christianity, iron tools, firearms |

> ⚠️ **Critical Impact:** European diseases (especially **smallpox**) devastated Native American populations — estimates range from **50% to 90% population decline** among indigenous peoples within the first century of contact. This demographic catastrophe is one of the most important facts on the AP exam.

**Early consequences:** To profit from conquest, Spain created the **encomienda** system, which granted colonists the right to demand labor and tribute from groups of Native people. As disease and overwork shrank the Native labor force, Spanish colonists turned increasingly to enslaved Africans.
      `
    },
    {
      id: 'apushnat1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What Spanish labor system granted colonists the right to demand labor and tribute from groups of Native people?

2) What term describes the massive transfer of plants, animals, diseases, and ideas between the Old and New Worlds after 1492?

3) What crop system did Eastern Woodlands peoples use, combining maize, beans, and squash?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['encomienda', 'Columbian Exchange', 'Three Sisters'],
        hint1: 'Starts with: E — from the Spanish word for "to entrust"',
        hint2: 'Named after Columbus — an "exchange" of biological and cultural elements',
        hint3: 'Three crops grown together symbiotically',
        explanation: 'The encomienda entrusted Native laborers to Spanish colonists, who demanded their labor and tribute. The Columbian Exchange was the widespread transfer of plants, animals, diseases, and culture between the Americas and the Old World. The Three Sisters (maize, beans, squash) were companion-planted by Eastern Woodlands peoples.'
      }
    },
    {
      id: 'apushnat1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Historical Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The disease that caused the most devastating population decline among Native Americans was ___',
            options: ['Smallpox', 'Malaria', 'Bubonic plague', 'Yellow fever']
          },
          {
            label: 'The largest pre-Columbian settlement north of Mexico was ___',
            options: ['Cahokia', 'Jamestown', 'Roanoke', 'Plymouth']
          },
          {
            label: 'European exploration was financed partly through ___, which allowed investors to pool money and share risk',
            options: ['Joint-stock companies', 'Federal banks', 'Colonial legislatures', 'Feudal manors']
          }
        ],
        correctAnswers: ['Smallpox', 'Cahokia', 'Joint-stock companies'],
        hint1: 'This disease spread rapidly because Native Americans had no prior immunity',
        hint2: 'Located near modern-day St. Louis; part of the Mississippian culture',
        hint3: 'An early form of corporation — the Virginia Company was one example',
        explanation: 'Smallpox was by far the most lethal European disease in the Americas. Cahokia (c. 1050–1350 CE) was a Mississippian city near present-day St. Louis with a population of ~20,000 at its peak. Joint-stock companies like the Virginia Company and Dutch East India Company funded colonial ventures.'
      }
    },
    {
      id: 'apushnat1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A historian argues that the Columbian Exchange was "the most significant ecological event since the end of the Ice Age." Which evidence would BEST support this claim?',
            options: [
              'European diseases killed most of the Native population within a century',
              'Columbus made four voyages to the Caribbean between 1492 and 1504',
              'Spanish missionaries built missions along the California coast',
              'The Treaty of Tordesillas divided newly claimed lands between Spain and Portugal'
            ],
            correctAnswer: 0,
            explanation: 'The massive demographic collapse caused by Old World diseases fundamentally transformed the ecology, economy, and cultures of the entire Western Hemisphere — making it the strongest evidence for the claim about ecological significance. The other options describe important events but don\'t address ecological impact.'
          },
          {
            question: 'Which of the following BEST describes the political organization of most Native American societies in North America prior to European contact?',
            options: [
              'Centralized empires ruled by hereditary monarchs over large territories',
              'Varied systems from confederacies to small kin-based bands',
              'Democratic republics modeled on ancient Greek city-states',
              'Theocratic states governed by a priestly class'
            ],
            correctAnswer: 1,
            explanation: 'North American Native societies were politically diverse — the Iroquois Confederacy was a representative alliance, Mississippian Cahokia was a chiefdom, and Great Basin peoples lived in small family bands. There was no single political model, which is a key AP concept.'
          }
        ]
      }
    }
  ]
}
