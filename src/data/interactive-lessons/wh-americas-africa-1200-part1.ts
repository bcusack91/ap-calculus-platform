export const whAmericasAfrica1200Part1Data = {
  topicSlug: 'wh-americas-africa-1200',
  sections: [
    {
      id: 'whaa1-intro',
      type: 'text' as const,
      content: `
# 🌍 The Americas & Africa (c. 1200–1450)

**Part 1 of 7 — Civilizations Before European Contact**

---

| Section |
|---------|
| 📖 Mesoamerican Civilizations |
| Andean Civilizations |
| North American Societies |
| 📌 African Kingdoms & Trade |
| Comparative Analysis |

> 🔑 **Key Concept:** The AP exam emphasizes that the Americas and sub-Saharan Africa had **complex, sophisticated civilizations** before European contact — with advanced agriculture, engineering, trade networks, and political organizations.
      `
    },
    {
      id: 'whaa1-meso',
      type: 'text' as const,
      content: `
## 📖 Mesoamerican & Andean Civilizations

### The Aztec Empire (Mexica, c. 1325–1521)

| Feature | Details |
|---------|---------|
| **Capital** | **Tenochtitlan** — built on an island in Lake Texcoco; population ~200,000 (larger than most European cities) |
| **Agriculture** | **Chinampas** ("floating gardens") — artificial islands for intensive farming |
| **Government** | Tributary empire — conquered peoples paid tribute (goods, labor, **human sacrifice**) |
| **Religion** | Polytheistic; human sacrifice to sustain the sun god Huitzilopochtli; elaborate temple complexes |
| **Economy** | Massive marketplace at Tlatelolco; cacao beans as currency; long-distance trade networks |
| **Military** | Warrior culture; *Flower Wars* — ritual battles to capture sacrificial victims |

### The Inca Empire (Tawantinsuyu, c. 1438–1533)

| Feature | Details |
|---------|---------|
| **Capital** | **Cusco** (modern Peru); empire stretched 2,500 miles along the Andes |
| **Government** | Highly centralized bureaucracy; emperor (*Sapa Inca*) considered divine |
| **Economy** | **Mit'a system** — labor tax where subjects worked on state projects (roads, terraces, storehouses) |
| **Engineering** | 25,000-mile road system; rope bridges; terrace farming on steep mountain slopes |
| **Communication** | **Quipu** — knotted strings for record-keeping (no written language) |
| **Agriculture** | Terracing; freeze-drying potatoes; irrigation systems |

> ⚠️ **AP Alert:** Compare Aztec and Inca systems: The Aztec Empire was a **tribute** system (conquered peoples paid goods), while the Inca used a **labor tax** (mit'a). Neither used currency — Aztecs used cacao, Incas used labor. Both lacked iron tools, wheeled vehicles, and draft animals.
      `
    },
    {
      id: 'whaa1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Aztec and Inca Empires DIFFERED most significantly in their:',
            options: [
              'Methods of extracting resources from conquered peoples — the Aztecs demanded tribute goods while the Incas required labor through the mit\'a system',
              'Geographic location — the Aztecs were in South America while the Incas were in Mesoamerica',
              'Use of iron tools and wheeled vehicles for agricultural production',
              'Adoption of Christianity before European contact'
            ],
            correctAnswer: 0,
            explanation: 'The Aztec tributary system required conquered peoples to provide goods (gold, textiles, food, sacrificial victims) to Tenochtitlan. The Inca mit\'a system required labor service (building roads, farming state land, military service). This distinction in economic organization is a common AP comparison question.'
          },
          {
            question: 'The Inca quipu system is historically significant because it demonstrates that:',
            options: [
              'Complex administrative record-keeping was possible without a traditional written language',
              'The Incas had developed a written alphabet similar to European scripts',
              'Record-keeping was unnecessary for managing a large empire',
              'The Incas borrowed their writing system from the Aztecs'
            ],
            correctAnswer: 0,
            explanation: 'The quipu — a system of knotted strings — allowed the Incas to record census data, tax obligations, and other administrative information without written language. This challenges assumptions that civilization requires writing and shows diverse paths to complex state organization.'
          }
        ]
      }
    },
    {
      id: 'whaa1-africa',
      type: 'text' as const,
      content: `
## North American Societies & African Kingdoms

### North American Societies

| Society | Region | Key Features |
|---------|--------|-------------|
| **Mississippian** | Southeast / Mississippi River | Cahokia (near modern St. Louis) — city of ~20,000; massive earthen mounds; maize agriculture; chiefdom |
| **Pueblo (Ancestral)** | American Southwest | Cliff dwellings (Mesa Verde, Chaco Canyon); irrigation in arid environments; maize, beans, squash |
| **Iroquois Confederacy** | Northeast | **Haudenosaunee** — league of 5 (later 6) nations; Great Law of Peace; matrilineal society; representative council |

### African Kingdoms (c. 1200–1450)

| Kingdom | Region | Key Features |
|---------|--------|-------------|
| **Mali Empire** | West Africa | Gold-salt trade; Mansa Musa; Timbuktu; Islam among elites; oral traditions (griots) |
| **Great Zimbabwe** | Southern Africa | Stone-walled city complex; controlled gold trade between interior and Swahili Coast; cattle herding |
| **Ethiopian Kingdoms** | East Africa | Aksumite legacy; Christianity (Coptic); rock-hewn churches of Lalibela; trade with Indian Ocean world |
| **Swahili City-States** | East African Coast | Kilwa, Mombasa, Zanzibar; Bantu-Arabic culture; **Swahili language** (Bantu + Arabic); Indian Ocean trade |

### The Swahili Coast

- City-states along East African coast (modern Kenya, Tanzania, Mozambique)
- **Not a unified empire** — independent city-states connected by trade
- Linked sub-Saharan Africa to the **Indian Ocean trade network**
- Exported gold, ivory, enslaved people; imported porcelain, textiles, spices
- Islam spread through trade; mosques built alongside traditional African structures
- **Swahili** — Bantu language with Arabic loanwords; a trade lingua franca
      `
    },
    {
      id: 'whaa1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What innovative agricultural system did the Aztecs use, building artificial islands in Lake Texcoco for farming?

2) What Inca knotted-string system was used for record-keeping without a written language?

3) What is the name of the southern African stone-walled complex that controlled gold trade between the interior and the coast?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['chinampas', 'quipu', 'Great Zimbabwe'],
        hint1: 'Sometimes called "floating gardens" — built in lakes',
        hint2: 'Knotted strings used by Inca administrators',
        hint3: 'A famous stone ruin in modern-day Zimbabwe',
        explanation: 'Chinampas allowed intensive agriculture in the lake environment of the Valley of Mexico, supporting Tenochtitlan\'s massive population. The quipu system enabled the Incas to manage their vast empire without traditional writing. Great Zimbabwe\'s impressive stone architecture demonstrates the sophistication of pre-contact African civilizations.'
      }
    },
    {
      id: 'whaa1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Civilizations** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The massive mound-building city near modern St. Louis with a population of ~20,000 was ___',
            options: ['Cahokia', 'Tenochtitlan', 'Cusco', 'Timbuktu']
          },
          {
            label: 'The East African city-states that blended Bantu and Arabic cultures through Indian Ocean trade were the ___',
            options: ['Swahili city-states', 'Mali Empire', 'Aztec Empire', 'Mississippian societies']
          },
          {
            label: 'The Inca system of mandatory labor service for state projects was called ___',
            options: ["Mit'a", 'Tribute', 'Feudalism', 'Manorialism']
          }
        ],
        correctAnswers: ['Cahokia', 'Swahili city-states', "Mit'a"],
        hint1: 'A Mississippian civilization in the American Midwest',
        hint2: 'Kilwa, Mombasa, Zanzibar — connected Africa to Indian Ocean trade',
        hint3: 'Not tribute in goods — tribute in labor for roads, terraces, and buildings',
        explanation: 'Cahokia was the largest pre-Columbian settlement north of Mexico. The Swahili city-states demonstrate how trade creates cultural synthesis — blending African and Arab traditions. The mit\'a labor system allowed the Incas to build 25,000 miles of roads and massive agricultural terraces without currency or markets.'
      }
    },
    {
      id: 'whaa1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Swahili Coast city-states are MOST useful for illustrating which AP World History theme?',
            options: [
              'Cross-cultural interaction — trade networks created new cultural syntheses that blended African, Arab, and Indian Ocean traditions',
              'Political consolidation — a single ruler unified all East African trade under one empire',
              'Technological innovation — the Swahili invented new navigation tools that revolutionized Indian Ocean trade',
              'Environmental determinism — geography alone explains all cultural development'
            ],
            correctAnswer: 0,
            explanation: 'The Swahili Coast perfectly illustrates cross-cultural exchange: the Swahili language itself (Bantu grammar + Arabic vocabulary) is a product of interaction. Islam arrived through trade rather than conquest, mosques incorporated African architectural elements, and the economy depended on connecting African resources to Indian Ocean markets. This is cultural synthesis in action.'
          },
          {
            question: 'An AP essay asks you to compare state-building in the Americas and Afro-Eurasia. The MOST important similarity would be that:',
            options: [
              'Both regions developed complex political organizations, labor systems, and monumental architecture despite having different technologies and no contact with each other',
              'Both regions used iron tools and draft animals for agriculture',
              'Both regions had extensive maritime trade networks connecting them to each other',
              'State-building occurred only in Afro-Eurasia; the Americas had no complex societies'
            ],
            correctAnswer: 0,
            explanation: 'The key AP insight is **parallel development**: the Aztec and Inca empires built sophisticated states, road systems, and monumental architecture without iron, the wheel (for transport), or draft animals — technologies available in Afro-Eurasia. This demonstrates that civilizational complexity can emerge through different paths.'
          }
        ]
      }
    }
  ]
}
