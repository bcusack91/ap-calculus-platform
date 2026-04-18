import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = 'src/data/interactive-lessons';

const topics = [
  {
    file: 'wh-global-tapestry-part1.ts',
    content: () => `export const whGlobalTapestryPart1Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whgt1-intro',
      type: 'text' as const,
      content: \`
# 🌍 The Global Tapestry (c. 1200–1450)

**Part 1 of 7 — Unit 1: Interconnected Civilizations**

---

| Section |
|---------|
| 📖 Song Dynasty China |
| The Delhi Sultanate |
| The Byzantine & Mongol Context |
| 📌 West African Kingdoms |
| Key Comparisons |

> 🔑 **Key Concept:** AP World History's Unit 1 examines how major civilizations across Afro-Eurasia developed **distinct political, economic, and cultural systems** while maintaining connections through trade, religion, and technology transfer.
      \`
    },
    {
      id: 'whgt1-song',
      type: 'text' as const,
      content: \`
## 📖 Song Dynasty China (960–1279)

The Song Dynasty represents a **golden age** of Chinese civilization — economic prosperity, technological innovation, and cultural achievement.

| Category | Developments |
|----------|-------------|
| **Economy** | World's largest economy; first paper money; advanced banking; commercialized agriculture (rice cultivation in the south) |
| **Technology** | Gunpowder (weapons), magnetic compass (navigation), movable-type printing (Bi Sheng, c. 1040), steel production |
| **Trade** | Massive maritime trade; Chinese junks dominated Asian sea routes; exported silk, porcelain, tea |
| **Society** | Neo-Confucianism blended Confucianism with Buddhist/Daoist ideas; **foot binding** restricted elite women's mobility; civil service exams expanded the scholar-gentry class |
| **Government** | Meritocratic civil service examination system based on Confucian classics |
| **Urbanization** | Cities like Hangzhou had populations exceeding 1 million — largest in the world |

### The Delhi Sultanate (1206–1526)

Muslim rulers governing a predominantly Hindu population in South Asia:

| Feature | Details |
|---------|---------|
| **Establishment** | Turkish and Afghan Muslim invaders conquered northern India |
| **Religion** | Islam in government; majority Hindu population; some forced conversions, some accommodation |
| **Architecture** | Qutb Minar; blend of Islamic and Indian styles |
| **Impact** | Introduced Persian administrative practices; spread Islam in South Asia; caste system persisted alongside Islamic social structures |
| **Challenge** | Constant tension between Islamic rulers and Hindu subjects; bhakti movement emerged as Hindu devotional response |

> ⚠️ **AP Alert:** Compare the Song Dynasty's civil service exams (merit-based, Confucian) with European feudal systems (land/birth-based). This contrast in political organization is a common AP essay prompt.
      \`
    },
    {
      id: 'whgt1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Song Dynasty China is considered a model of economic and technological innovation primarily because it:',
            options: [
              'Developed paper money, gunpowder, the compass, and movable-type printing while maintaining the world\\'s largest economy',
              'Conquered the largest empire in world history through military superiority',
              'Established the first democratic government in Asia through popular elections',
              'Completely isolated itself from foreign trade to protect domestic industries'
            ],
            correctAnswer: 0,
            explanation: 'The Song Dynasty was remarkable for its simultaneous advances in commerce (first paper money, advanced banking), technology (gunpowder, compass, printing), and urbanization (cities over 1 million people). These innovations spread along trade routes and eventually reached Europe, transforming global history.'
          },
          {
            question: 'The Delhi Sultanate is significant in AP World History primarily because it:',
            options: [
              'Demonstrates how Islamic political rule and administration spread to South Asia while coexisting with Hindu culture and traditions',
              'Was the first Hindu empire to conquer Central Asia',
              'Established Buddhism as the dominant religion in India',
              'Created a fully unified and stable government across all of South Asia'
            ],
            correctAnswer: 0,
            explanation: 'The Delhi Sultanate illustrates a key AP theme: cross-cultural interaction. Muslim rulers introduced Persian administrative practices and Islamic architecture, while the Hindu majority maintained their religious and social structures. This coexistence — sometimes peaceful, sometimes tense — shaped South Asian culture for centuries.'
          }
        ]
      }
    },
    {
      id: 'whgt1-africa',
      type: 'text' as const,
      content: \`
## West African Kingdoms & Other Key Civilizations

### West Africa: Mali Empire (c. 1235–1600)

| Feature | Details |
|---------|---------|
| **Founder** | Sundiata Keita (c. 1235) — oral tradition preserved in the *Epic of Sundiata* |
| **Famous ruler** | **Mansa Musa** (r. 1312–1337) — pilgrimage to Mecca (1324) with so much gold he destabilized Egyptian economy |
| **Economy** | Trans-Saharan gold and salt trade; taxed trade passing through the empire |
| **Religion** | Islam adopted by ruling class; blended with local animist traditions |
| **Education** | **Timbuktu** — major center of Islamic learning; University of Sankore; attracted scholars from across the Muslim world |
| **Decline** | Songhai Empire replaced Mali as dominant West African power by ~1450 |

### The Byzantine Empire (330–1453)

- Continuation of the Eastern Roman Empire after Rome fell (476 CE)
- **Constantinople** — strategically located on the Bosphorus; controlled trade between Europe and Asia
- **Eastern Orthodox Christianity** — split from Roman Catholic Church (Great Schism, 1054)
- Preserved Greco-Roman knowledge through the medieval period
- Justinian's Code — codified Roman law; influenced European legal systems
- Fell to the **Ottoman Turks** in 1453

### Feudal Europe

- Decentralized political system: kings → lords → vassals → serfs
- **Manorialism** — self-sufficient agricultural estates; serfs bound to the land
- **Catholic Church** — unifying institution across Europe; Pope wielded political and spiritual authority
- Crusades (1095–1291) — increased contact with the Islamic world; stimulated trade
      \`
    },
    {
      id: 'whgt1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What West African city became a major center of Islamic learning, home to the University of Sankore?

2) What meritocratic system did the Song Dynasty use to select government officials?

3) What Malian ruler's pilgrimage to Mecca in 1324 was so lavish it disrupted the Egyptian economy?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Timbuktu', 'civil service examinations', 'Mansa Musa'],
        hint1: 'A city in modern-day Mali — famous for libraries and scholars',
        hint2: 'Exams testing knowledge of Confucian classics — civil service ___',
        hint3: 'His hajj demonstrated Mali\\'s extraordinary wealth',
        explanation: 'Timbuktu was a globally significant center of learning, with thousands of manuscripts and scholars. The civil service examination system made government positions available based on merit rather than birth. Mansa Musa\\'s pilgrimage revealed Africa\\'s wealth to the wider world and is one of the most frequently tested topics in AP World History.'
      }
    },
    {
      id: 'whgt1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Civilizations** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The civilization that developed paper money, gunpowder, and the magnetic compass was ___',
            options: ['Song Dynasty China', 'The Delhi Sultanate', 'The Byzantine Empire', 'The Mali Empire']
          },
          {
            label: 'The continuation of the Eastern Roman Empire centered on Constantinople was the ___',
            options: ['Byzantine Empire', 'Ottoman Empire', 'Song Dynasty', 'Abbasid Caliphate']
          },
          {
            label: 'The decentralized political system in medieval Europe based on lords, vassals, and serfs was ___',
            options: ['Feudalism', 'Meritocracy', 'Theocracy', 'Republic']
          }
        ],
        correctAnswers: ['Song Dynasty China', 'Byzantine Empire', 'Feudalism'],
        hint1: 'Chinese dynasty from 960–1279 with advanced technology',
        hint2: 'Lasted until 1453 when it fell to the Ottomans',
        hint3: 'Based on land-holding and military obligations',
        explanation: 'Song China was the most technologically advanced civilization of its era. The Byzantine Empire preserved Greco-Roman culture for a thousand years after Rome\\'s fall. Feudalism organized European society through decentralized land-based power structures — contrasting sharply with China\\'s centralized bureaucracy.'
      }
    },
    {
      id: 'whgt1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which comparison BEST illustrates a key difference between Song Dynasty China and medieval Europe during the period 1200–1450?',
            options: [
              'China\\'s centralized government selected officials through meritocratic exams, while European power was fragmented among feudal lords based on hereditary status',
              'Europe was more technologically advanced than China in every field',
              'China had no cities while Europe was highly urbanized',
              'Both regions had identical political and economic structures'
            ],
            correctAnswer: 0,
            explanation: 'This is a classic AP comparison: Song China had a centralized imperial bureaucracy staffed through competitive exams (merit-based), while Europe\\'s feudal system distributed power among hereditary lords with weak central monarchies. This difference had profound effects on economic development, social mobility, and technological innovation.'
          },
          {
            question: 'Mansa Musa\\'s hajj (1324) is historically significant primarily because it:',
            options: [
              'Demonstrated the wealth and sophistication of West African civilization to the broader Islamic world, challenging later European assumptions about Africa',
              'Converted all of West Africa to Christianity',
              'Established the first European trading posts in West Africa',
              'Caused the permanent collapse of the Egyptian economy'
            ],
            correctAnswer: 0,
            explanation: 'Mansa Musa\\'s pilgrimage to Mecca — reportedly with 60,000 attendants and enormous quantities of gold — put Mali on European and Islamic maps. It demonstrated that sub-Saharan Africa had wealthy, complex states, and it strengthened trade and intellectual connections between West Africa and the broader Islamic world.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'wh-dar-al-islam-part1.ts',
    content: () => `export const whDarAlIslamPart1Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 1 of 7 — The Islamic World & Its Networks**

---

| Section |
|---------|
| 📖 The Abbasid Caliphate & Its Decline |
| Islamic Scholarship & Culture |
| Trade Networks |
| 📌 Spread of Islam |
| Dar al-Islam as a Unifying Force |

> 🔑 **Key Concept:** *Dar al-Islam* ("House of Islam") describes the interconnected Islamic world stretching from Spain to Southeast Asia. The AP exam emphasizes how Islam served as a **unifying cultural force** across diverse peoples, facilitating trade, learning, and cultural exchange.
      \`
    },
    {
      id: 'whdai1-content',
      type: 'text' as const,
      content: \`
## 📖 The Islamic World (c. 1200–1450)

### The Abbasid Caliphate & Its Fragmentation

| Period | Details |
|--------|---------|
| **Early Abbasids** (750–c. 1000) | Golden age of Islamic civilization; capital at **Baghdad**; patronage of scholars; translation of Greek texts |
| **Fragmentation** | By 1200, the caliphate had fragmented; regional powers emerged (Seljuk Turks, Fatimids, Ayyubids) |
| **Fall of Baghdad** (1258) | **Mongols** under Hulagu destroyed Baghdad; killed the last Abbasid caliph; ended the caliphate |
| **Post-1258** | Islam continued to spread even without a unified caliphate — through trade, Sufism, and local rulers |

### Islamic Scholarship & Innovation

The Islamic world preserved and expanded upon Greek, Persian, and Indian knowledge:

| Field | Contribution |
|-------|-------------|
| **Mathematics** | **Al-Khwarizmi** — algebra (the word itself comes from Arabic *al-jabr*); Arabic numerals (originally Indian) |
| **Medicine** | **Ibn Sina (Avicenna)** — *The Canon of Medicine*; standard medical text in Europe for centuries |
| **Optics** | **Ibn al-Haytham** — pioneered the scientific method; explained how vision works |
| **Philosophy** | **Ibn Rushd (Averroes)** — commentaries on Aristotle; influenced European scholasticism |
| **Geography** | **Ibn Battuta** — traveled ~75,000 miles across Dar al-Islam (1325–1354); detailed accounts of diverse Islamic societies |
| **Architecture** | Mosques with minarets, geometric patterns, calligraphy; Alhambra (Spain), Great Mosque of Córdoba |

### How Islam Spread

| Method | Example |
|--------|---------|
| **Military conquest** | Arab conquests (7th–8th c.); later Turkish expansion |
| **Trade** | Muslim merchants along Indian Ocean routes, trans-Saharan trade; Southeast Asian port cities |
| **Sufism** | Mystical branch of Islam; Sufi missionaries adapted to local cultures; especially important in South/Southeast Asia and sub-Saharan Africa |
| **Syncretic blending** | Islam combined with local traditions (West African animism, Hinduism in Southeast Asia) |

> ⚠️ **AP Alert:** Islam spread through **trade and Sufism** as much as military conquest. The AP exam frequently asks about the role of **Sufi missionaries** and **merchant networks** in spreading Islam to Southeast Asia, sub-Saharan Africa, and Central Asia.
      \`
    },
    {
      id: 'whdai1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'After the Mongol destruction of Baghdad in 1258, Islam continued to spread primarily through:',
            options: [
              'Trade networks and Sufi missionaries who adapted Islamic teachings to local cultures',
              'A new centralized caliphate that reconquered all lost territories',
              'European Crusaders who converted to Islam and carried it westward',
              'Chinese explorers who introduced Islam to Southeast Asia'
            ],
            correctAnswer: 0,
            explanation: 'Even without a unified caliphate, Islam spread through merchant communities along Indian Ocean and trans-Saharan trade routes, and through Sufi missionaries who emphasized mystical experience and accommodation with local traditions. This decentralized spread is a key AP concept — Islam\\'s growth was not dependent on a single political authority.'
          },
          {
            question: 'The Islamic world\\'s preservation and expansion of Greek, Persian, and Indian knowledge is historically significant because:',
            options: [
              'It maintained intellectual traditions that later fueled the European Renaissance when these texts were transmitted westward',
              'Islamic scholars rejected all non-Islamic sources of knowledge',
              'European scholars had already preserved all Greek and Roman knowledge independently',
              'The knowledge had no impact outside the Islamic world'
            ],
            correctAnswer: 0,
            explanation: 'Islamic scholars translated Greek works (Aristotle, Plato, Euclid) into Arabic, added their own advances in mathematics, medicine, and science, and these texts later reached Europe through Spain (Al-Andalus) and the Crusades. Without this Islamic preservation and enhancement, much of classical knowledge would have been lost.'
          }
        ]
      }
    },
    {
      id: 'whdai1-networks',
      type: 'text' as const,
      content: \`
## Trade Networks & Dar al-Islam as a Unifying Force

### Key Trade Networks

| Route | Goods Traded | Cultural Impact |
|-------|-------------|----------------|
| **Trans-Saharan** | Gold (south) and salt (north); enslaved people | Spread Islam to West Africa (Mali, Songhai); Timbuktu |
| **Indian Ocean** | Spices, textiles, porcelain, gold | Connected East Africa (Swahili Coast), Arabia, India, Southeast Asia; spread Islam |
| **Silk Roads** | Silk, paper, gunpowder, horses, ideas | Connected China to the Mediterranean; Islamic merchants as middlemen |

### Unifying Features of Dar al-Islam

Despite political fragmentation, the Islamic world shared:

- **Arabic** as a scholarly and trade language (lingua franca)
- **Sharia** (Islamic law) — provided a common legal framework
- **Hajj** — annual pilgrimage to Mecca connected Muslims across vast distances
- **Madrasas** — Islamic schools/universities spread standardized education
- **Architectural styles** — mosques, minarets, and geometric art created visual unity
- **Trade practices** — Islamic commercial law (contracts, partnerships) facilitated long-distance trade

> 🔑 **AP Connection:** Compare Dar al-Islam's unifying role to other cultural systems: Latin Christendom (shared religion, language, Pope), Confucian East Asia (shared philosophy, writing system, civil service model). All created cultural unity across political boundaries.
      \`
    },
    {
      id: 'whdai1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What Muslim traveler journeyed ~75,000 miles across Dar al-Islam between 1325 and 1354, recording his observations?

2) What mystical branch of Islam was especially important in spreading the faith to South and Southeast Asia?

3) What Islamic mathematician's name gives us the word "algebra" (from Arabic *al-jabr*)?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Ibn Battuta', 'Sufism', 'Al-Khwarizmi'],
        hint1: 'His travelogue (*Rihla*) is a key primary source for AP World History',
        hint2: 'A mystical tradition emphasizing personal experience of the divine',
        hint3: 'His name is also the origin of the word "algorithm"',
        explanation: 'Ibn Battuta\\'s travels provide invaluable historical evidence about the diversity and unity of the Islamic world. Sufism\\'s flexibility and emphasis on spiritual experience made Islam accessible to diverse populations. Al-Khwarizmi\\'s mathematical innovations shaped both the Islamic and European intellectual traditions.'
      }
    },
    {
      id: 'whdai1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The trans-Saharan trade primarily exchanged ___ from the south for salt from the north',
            options: ['Gold', 'Silk', 'Porcelain', 'Spices']
          },
          {
            label: 'The Islamic scholar whose Canon of Medicine was used as a standard medical text in Europe for centuries was ___',
            options: ['Ibn Sina (Avicenna)', 'Al-Khwarizmi', 'Ibn Battuta', 'Ibn Rushd']
          },
          {
            label: 'Islamic schools that spread standardized education across Dar al-Islam were called ___',
            options: ['Madrasas', 'Monasteries', 'Academies', 'Gymnasia']
          }
        ],
        correctAnswers: ['Gold', 'Ibn Sina (Avicenna)', 'Madrasas'],
        hint1: 'West African kingdoms like Mali were famous for this precious metal',
        hint2: 'Persian polymath — his medical encyclopedia was used until the 1700s',
        hint3: 'Arabic word for educational institutions attached to mosques',
        explanation: 'The gold-salt trade powered West African empires like Mali and Songhai. Ibn Sina\\'s Canon of Medicine synthesized Greek, Roman, and Islamic medical knowledge. Madrasas created a shared educational system across the Islamic world, standardizing religious and secular learning.'
      }
    },
    {
      id: 'whdai1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which statement BEST explains why Dar al-Islam maintained cultural unity despite political fragmentation after 1258?',
            options: [
              'Shared religious practices (hajj, Sharia), a common scholarly language (Arabic), and trade networks created cultural connections that did not depend on a single centralized government',
              'A new caliphate immediately replaced Baghdad and reunified all Muslim territories',
              'European Crusaders imposed political unity on the Islamic world',
              'Islam declined rapidly after the fall of Baghdad and ceased to be a unifying force'
            ],
            correctAnswer: 0,
            explanation: 'This is a crucial AP concept: cultural systems can maintain unity even without political unity. Arabic as a scholarly lingua franca, shared legal traditions (Sharia), the hajj pilgrimage, madrasas, and merchant networks all kept the Islamic world connected despite being divided among Mamluks, Seljuks, regional sultanates, and other political entities.'
          },
          {
            question: 'A student compares how Buddhism spread through East and Southeast Asia with how Islam spread through the Indian Ocean basin. The MOST accurate comparison would be:',
            options: [
              'Both religions spread significantly through trade networks and adapted to local cultures, creating syncretic practices that blended with existing traditions',
              'Both religions spread exclusively through military conquest',
              'Buddhism spread through trade while Islam spread only through conquest',
              'Neither religion adapted to local cultures; both demanded complete cultural replacement'
            ],
            correctAnswer: 0,
            explanation: 'Both Buddhism and Islam spread extensively through merchant networks — Buddhist and Muslim traders carried their faiths along trade routes. Both also underwent syncretism: Buddhism blended with Confucianism and Daoism in East Asia, while Islam blended with Hinduism in Southeast Asia and animism in sub-Saharan Africa. This pattern of trade-based, syncretic religious spread is a key AP comparison.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'wh-americas-africa-1200-part1.ts',
    content: () => `export const whAmericasAfrica1200Part1Data = {
  topicSlug: 'wh-americas-africa-1200',
  sections: [
    {
      id: 'whaa1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'whaa1-meso',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'whaa1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Aztec and Inca Empires DIFFERED most significantly in their:',
            options: [
              'Methods of extracting resources from conquered peoples — the Aztecs demanded tribute goods while the Incas required labor through the mit\\'a system',
              'Geographic location — the Aztecs were in South America while the Incas were in Mesoamerica',
              'Use of iron tools and wheeled vehicles for agricultural production',
              'Adoption of Christianity before European contact'
            ],
            correctAnswer: 0,
            explanation: 'The Aztec tributary system required conquered peoples to provide goods (gold, textiles, food, sacrificial victims) to Tenochtitlan. The Inca mit\\'a system required labor service (building roads, farming state land, military service). This distinction in economic organization is a common AP comparison question.'
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
      content: \`
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
      \`
    },
    {
      id: 'whaa1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What innovative agricultural system did the Aztecs use, building artificial islands in Lake Texcoco for farming?

2) What Inca knotted-string system was used for record-keeping without a written language?

3) What is the name of the southern African stone-walled complex that controlled gold trade between the interior and the coast?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['chinampas', 'quipu', 'Great Zimbabwe'],
        hint1: 'Sometimes called "floating gardens" — built in lakes',
        hint2: 'Knotted strings used by Inca administrators',
        hint3: 'A famous stone ruin in modern-day Zimbabwe',
        explanation: 'Chinampas allowed intensive agriculture in the lake environment of the Valley of Mexico, supporting Tenochtitlan\\'s massive population. The quipu system enabled the Incas to manage their vast empire without traditional writing. Great Zimbabwe\\'s impressive stone architecture demonstrates the sophistication of pre-contact African civilizations.'
      }
    },
    {
      id: 'whaa1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Civilizations** 🔍
      \`,
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
        explanation: 'Cahokia was the largest pre-Columbian settlement north of Mexico. The Swahili city-states demonstrate how trade creates cultural synthesis — blending African and Arab traditions. The mit\\'a labor system allowed the Incas to build 25,000 miles of roads and massive agricultural terraces without currency or markets.'
      }
    },
    {
      id: 'whaa1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`
  },
  {
    file: 'wh-silk-roads-mongols-part1.ts',
    content: () => `export const whSilkRoadsMongolsPart1Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm1-intro',
      type: 'text' as const,
      content: \`
# 🌍 The Silk Roads & Mongol Empire

**Part 1 of 7 — Trade Routes & the Largest Contiguous Empire**

---

| Section |
|---------|
| 📖 Silk Road Trade Networks |
| The Mongol Empire |
| Pax Mongolica |
| 📌 Effects of Mongol Rule |
| Disease & Exchange |

> 🔑 **Key Concept:** The Mongol Empire (c. 1206–1368) created the largest contiguous land empire in history. The AP exam focuses on how the **Pax Mongolica** revitalized Silk Road trade, facilitated cultural/technological exchange, and unintentionally spread the **Black Death**.
      \`
    },
    {
      id: 'whsrm1-silk',
      type: 'text' as const,
      content: \`
## 📖 The Silk Roads

### Overview

- Network of overland trade routes connecting **China** to the **Mediterranean** (~4,000 miles)
- Active for centuries, but reached peak under the **Pax Mongolica** (c. 1250–1350)
- Carried goods, ideas, religions, technology, and disease

### Goods & Exchange

| Direction | Goods |
|-----------|-------|
| **East → West** | Silk, porcelain, paper, gunpowder, spices, tea |
| **West → East** | Horses, gold, silver, glassware, textiles, precious stones |
| **Ideas** | Buddhism, Islam, Christianity (Nestorian); artistic styles; scientific knowledge |
| **Technology** | Printing, compass, gunpowder spread westward; Islamic mathematics spread eastward |

### Key Features of Silk Road Trade

- **Relay trade** — goods passed through multiple middlemen; few traders traveled the entire route
- **Caravanserais** — roadside inns providing shelter, food, and water for merchants and animals
- **Nomadic peoples** — Turkic and Mongol groups controlled interior routes; taxed and protected trade
- **Religions spread** — Buddhism along the eastern routes; Islam across Central Asia; Nestorian Christianity in China

## The Mongol Empire (1206–1368)

### Genghis Khan (Temüjin, r. 1206–1227)

| Feature | Details |
|---------|---------|
| **Unification** | United Mongol tribes through military genius, meritocracy, and the *Yasa* (legal code) |
| **Military** | Horse archers; psychological warfare; feigned retreats; siege warfare learned from Chinese and Persian engineers |
| **Conquests** | Conquered northern China, Central Asia, Persia; destroyed Khwarazm Empire; estimated 40 million deaths |
| **Administration** | Meritocracy over aristocracy; religious tolerance; integrated conquered peoples into military/administration |

### The Four Khanates (after 1260)

| Khanate | Region | Notable Ruler |
|---------|--------|---------------|
| **Yuan Dynasty** | China | Kublai Khan (r. 1260–1294) |
| **Chagatai Khanate** | Central Asia | Various khans |
| **Ilkhanate** | Persia/Middle East | Hulagu (destroyed Baghdad, 1258) |
| **Golden Horde** | Russia/Eastern Europe | Batu Khan → established Tatar control over Russia |

> ⚠️ **AP Alert:** The AP exam focuses on the **Pax Mongolica** — the period of relative peace and stability across Eurasia that revitalized Silk Road trade, enabled travelers like Marco Polo and Ibn Battuta, and facilitated unprecedented exchange.
      \`
    },
    {
      id: 'whsrm1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Pax Mongolica facilitated Silk Road trade MOST directly by:',
            options: [
              'Providing political stability and military protection across the entire Eurasian landmass, making long-distance trade safer',
              'Inventing new trade goods that did not exist before Mongol rule',
              'Forcing all peoples under Mongol rule to convert to a single religion',
              'Building a single continuous road from China to Europe'
            ],
            correctAnswer: 0,
            explanation: 'The Pax Mongolica (c. 1250–1350) meant that for the first time, a single political authority controlled territory from China to Eastern Europe. Mongol rulers protected trade routes, punished banditry, established relay stations (yam system), and promoted commerce. This security made long-distance trade safer and more profitable than ever before.'
          },
          {
            question: 'Genghis Khan\\'s empire was distinctive in its use of:',
            options: [
              'Meritocracy — promoting skilled individuals regardless of tribal origin — and religious tolerance for conquered peoples',
              'A hereditary aristocracy with rigid social classes that excluded conquered peoples',
              'Forced conversion of all subjects to Mongol shamanism',
              'A parliamentary system of government with elected representatives'
            ],
            correctAnswer: 0,
            explanation: 'Genghis Khan promoted generals and administrators based on ability rather than birth — a remarkable practice for the era. He also practiced religious tolerance, allowing Christians, Muslims, Buddhists, and others to worship freely under Mongol rule. These policies helped him integrate diverse peoples into an effective empire.'
          }
        ]
      }
    },
    {
      id: 'whsrm1-effects',
      type: 'text' as const,
      content: \`
## Effects of Mongol Rule & the Black Death

### Positive Effects of Mongol Rule

- **Trade:** Silk Road commerce flourished; China's gunpowder, compass, and printing spread westward
- **Cultural exchange:** Marco Polo visited Kublai Khan's court (c. 1275); Ibn Battuta traveled across Dar al-Islam
- **Diplomatic connections:** Mongol rulers exchanged envoys with European popes and kings
- **Yam system:** Relay stations with fresh horses allowed rapid communication across the empire

### Negative Effects

- **Massive death toll:** Mongol conquests killed an estimated 5–10% of the world's population
- **City destruction:** Baghdad, Kiev, and countless cities razed; centuries of cultural heritage destroyed
- **Black Death:** The plague (*Yersinia pestis*) traveled along Mongol trade routes from Central Asia to Europe (1346–1353); killed ~30–60% of Europe's population
- **Long-term political disruption:** Collapse of Mongol states led to new empires (Ming China, Ottoman, Timurid)

### The Black Death's Impact

| Region | Effects |
|--------|---------|
| **Europe** | ~25–50 million dead; labor shortages ended feudalism; peasant revolts; questioning of Church authority |
| **Islamic World** | Major population loss in Egypt, Syria, Iraq; disrupted Mamluk economy |
| **China** | Plague combined with rebellion helped overthrow Yuan Dynasty → Ming Dynasty (1368) |

> 🔑 **AP Connection:** The Black Death demonstrates how **interconnection has consequences** — the same trade routes that spread silk and ideas also spread disease. This pattern repeats with the Columbian Exchange.
      \`
    },
    {
      id: 'whsrm1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What term describes the period of relative peace and stability across the Mongol Empire that facilitated Silk Road trade?

2) What Mongol relay system of stations with fresh horses enabled rapid communication across the empire?

3) What pandemic, spread along trade routes from Central Asia, killed 30–60% of Europe's population (1346–1353)?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Pax Mongolica', 'yam system', 'Black Death'],
        hint1: '"Pax" means peace — the Mongolian ___',
        hint2: 'A Mongol postal/relay system',
        hint3: 'Caused by Yersinia pestis — also called the bubonic plague',
        explanation: 'The Pax Mongolica (c. 1250–1350) was a golden age of Eurasian trade and exchange. The yam system (also called örtöö) was a sophisticated relay network that allowed messages to travel across the empire in days. The Black Death was the deadliest pandemic in human history, fundamentally transforming European, Islamic, and Chinese societies.'
      }
    },
    {
      id: 'whsrm1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Mongol leader who united the tribes and established the empire in 1206 was ___',
            options: ['Genghis Khan', 'Kublai Khan', 'Tamerlane', 'Attila']
          },
          {
            label: 'The Mongol khanate that ruled China and was visited by Marco Polo was the ___',
            options: ['Yuan Dynasty', 'Golden Horde', 'Ilkhanate', 'Chagatai Khanate']
          },
          {
            label: 'Roadside inns along the Silk Roads that sheltered merchants and their animals were called ___',
            options: ['Caravanserais', 'Madrasas', 'Monasteries', 'Bazaars']
          }
        ],
        correctAnswers: ['Genghis Khan', 'Yuan Dynasty', 'Caravanserais'],
        hint1: 'Born as Temüjin; given the title "universal ruler"',
        hint2: 'Founded by Kublai Khan; ruled from Beijing',
        hint3: 'From the Persian word — a rest stop for caravans',
        explanation: 'Genghis Khan (r. 1206–1227) created the largest contiguous land empire in history. The Yuan Dynasty (1271–1368) was the Mongol-ruled Chinese dynasty that attracted foreign visitors like Marco Polo. Caravanserais were essential infrastructure for long-distance trade across Central Asia.'
      }
    },
    {
      id: 'whsrm1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The spread of the Black Death along Mongol trade routes BEST illustrates which historical concept?',
            options: [
              'Increased interconnection creates vulnerability — the same networks that facilitate trade and cultural exchange can also transmit devastating diseases',
              'Disease only spreads through military conquest, not trade',
              'The Black Death had no connection to trade routes or interconnection',
              'The Mongol Empire intentionally created the plague as a weapon'
            ],
            correctAnswer: 0,
            explanation: 'This is a key AP pattern: connectivity is a double-edged sword. The Pax Mongolica revitalized trade and cultural exchange, but the same routes that carried silk and ideas also carried *Yersinia pestis*. This pattern repeats in the Columbian Exchange (1492+), when transatlantic connections spread smallpox and other diseases to the Americas.'
          },
          {
            question: 'An AP essay asks: "Evaluate the extent to which the Mongol Empire facilitated cultural exchange across Eurasia." The STRONGEST supporting evidence would be:',
            options: [
              'Gunpowder, the compass, and printing spread from China to Europe; Islam expanded into new regions; travelers like Marco Polo and Ibn Battuta recorded diverse cultures',
              'The Mongol Empire prevented all cultural exchange by destroying conquered civilizations',
              'Cultural exchange only occurred within the borders of China and never reached Europe',
              'The Mongols had no impact on trade routes, technology transfer, or religious spread'
            ],
            correctAnswer: 0,
            explanation: 'The strongest evidence combines concrete examples: Chinese technologies (gunpowder, compass, printing) reached Europe via Mongol-protected trade routes. Religious traditions spread to new areas. Individual travelers like Marco Polo and Ibn Battuta documented the cultural diversity and connections of the Mongol world. Together, these show extensive cultural exchange.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'wh-indian-ocean-trade-part1.ts',
    content: () => `export const whIndianOceanTradePart1Data = {
  topicSlug: 'wh-indian-ocean-trade',
  sections: [
    {
      id: 'whiot1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Indian Ocean Trade

**Part 1 of 7 — Maritime Commerce & Cultural Exchange**

---

| Section |
|---------|
| 📖 The Indian Ocean Network |
| Key Trading Regions |
| Monsoon Winds & Technology |
| 📌 Cultural & Religious Exchange |
| Comparisons with Other Routes |

> 🔑 **Key Concept:** The Indian Ocean trade network was the **largest and most diverse** maritime trade system in the pre-modern world, connecting East Africa, the Middle East, South Asia, Southeast Asia, and China. The AP exam emphasizes the role of **monsoon winds**, **diasporic communities**, and **cultural diffusion**.
      \`
    },
    {
      id: 'whiot1-network',
      type: 'text' as const,
      content: \`
## 📖 The Indian Ocean Trade Network

### Overview

The Indian Ocean connected **four major trade zones**:

| Zone | Key Players | Major Exports |
|------|-------------|---------------|
| **East Africa** | Swahili city-states (Kilwa, Mombasa) | Gold, ivory, enslaved people, animal skins |
| **Middle East / Arabia** | Arab merchants, Persian Gulf ports | Horses, dates, frankincense, textiles |
| **South Asia** | India (Gujarat, Malabar Coast) | Cotton textiles, spices (pepper), gems |
| **East / Southeast Asia** | China, Malay Archipelago | Porcelain, silk, spices (cloves, nutmeg, cinnamon) |

### Monsoon Winds — The Key to Indian Ocean Trade

- **Southwest monsoon** (April–September): Blows from Africa/Arabia toward India and Southeast Asia
- **Northeast monsoon** (October–March): Blows from Asia back toward Africa and Arabia
- Traders timed voyages to use these **predictable seasonal winds**, making long-distance sailing reliable
- **Dhow** — triangular-sailed vessel used by Arab and Indian merchants; ideal for monsoon sailing
- **Chinese junks** — large, multi-masted ships; dominated eastern routes

### Diasporic Communities

Merchants settled in foreign ports, creating **diasporic trading communities**:

- **Arab merchants** in Swahili East Africa and Southeast Asia
- **Indian (Gujarati) traders** throughout Southeast Asia
- **Chinese merchants** in Southeast Asian port cities
- These communities maintained their own customs while integrating into host societies — creating **cultural synthesis**

> ⚠️ **AP Alert:** Indian Ocean trade was **voluntary and mutually beneficial** — unlike later European colonialism. No single power dominated; trade was decentralized and relied on trust, shared commercial practices, and diasporic networks.
      \`
    },
    {
      id: 'whiot1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Monsoon winds were critical to Indian Ocean trade because they:',
            options: [
              'Provided predictable, seasonal wind patterns that allowed merchants to plan reliable round-trip voyages across the ocean',
              'Prevented any commerce from taking place during most of the year',
              'Only blew in one direction, making return voyages impossible',
              'Were created artificially by Indian Ocean sailors using advanced technology'
            ],
            correctAnswer: 0,
            explanation: 'The monsoon cycle was the engine of Indian Ocean trade. Southwest winds (summer) carried ships from Africa and Arabia to India and Southeast Asia, while northeast winds (winter) carried them back. Merchants planned their voyages around these seasons, often staying in foreign ports for months — which contributed to the formation of diasporic communities.'
          },
          {
            question: 'Diasporic trading communities in the Indian Ocean basin are historically significant because they:',
            options: [
              'Created cross-cultural networks that facilitated trade, spread religions, and blended cultural traditions — without military conquest',
              'Completely replaced local populations in every port city they settled',
              'Refused to interact with local cultures and maintained total isolation',
              'Were established exclusively by European colonial powers'
            ],
            correctAnswer: 0,
            explanation: 'Arab merchants in Swahili Africa, Indian traders in Southeast Asia, and Chinese merchants in port cities all formed communities that facilitated commerce through trust and shared practices. These diaspora communities also spread Islam, Hinduism, and Buddhism, created new syncretic cultures (like Swahili civilization), and demonstrate peaceful cross-cultural exchange.'
          }
        ]
      }
    },
    {
      id: 'whiot1-culture',
      type: 'text' as const,
      content: \`
## Cultural & Religious Exchange

### Religion Spread Through Trade

| Religion | How It Spread | Where |
|----------|--------------|-------|
| **Islam** | Arab and Indian Muslim merchants; Sufi missionaries | East Africa, Southeast Asia (Malaysia, Indonesia) |
| **Hinduism** | Indian traders and cultural influence | Southeast Asia (Angkor, Majapahit); temples, Sanskrit, epics |
| **Buddhism** | Monks traveling with merchant ships | Sri Lanka, Southeast Asia (Thailand, Myanmar, Cambodia) |

### The Swahili Coast: A Case Study in Cultural Synthesis

- **Language:** Swahili = Bantu grammar + Arabic vocabulary
- **Architecture:** Mosques with coral stone; blend of African and Islamic styles
- **Society:** African kinship structures + Islamic commercial law
- **Economy:** Connected African interior (gold, ivory) to Indian Ocean trade

### Comparing Trade Networks

| Feature | Silk Roads | Indian Ocean | Trans-Saharan |
|---------|-----------|-------------|---------------|
| **Type** | Overland | Maritime | Overland |
| **Key goods** | Silk, paper, horses | Spices, textiles, porcelain | Gold, salt, enslaved people |
| **Key technology** | Camelcarvans, caravanserais | Monsoon winds, dhows | Camels, oasis stops |
| **Religions spread** | Buddhism, Islam | Islam, Hinduism, Buddhism | Islam |
| **Volume** | Moderate (luxury goods) | Highest (bulk + luxury) | Moderate |

> 🔑 **AP Connection:** The Indian Ocean network carried **more goods in greater volume** than the Silk Roads because ships can carry far more cargo than camel caravans. This made Indian Ocean trade the most commercially significant pre-modern network.
      \`
    },
    {
      id: 'whiot1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What triangular-sailed vessel was used by Arab and Indian merchants for monsoon-powered Indian Ocean trade?

2) What term describes merchant communities that settled in foreign ports, maintaining their identity while integrating with local cultures?

3) What Indian region on the western coast was a major hub for cotton textile exports in Indian Ocean trade?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['dhow', 'diasporic communities', 'Gujarat'],
        hint1: 'A type of sailing vessel with a triangular (lateen) sail',
        hint2: 'Related to the word "diaspora" — scattered communities',
        hint3: 'A western Indian state/region known for textile production',
        explanation: 'The dhow\\'s lateen sail was perfectly suited for catching monsoon winds. Diasporic communities were the human infrastructure of Indian Ocean trade — networks of trust that facilitated cross-cultural commerce. Gujarat (and the Malabar Coast) were India\\'s primary commercial connections to the Indian Ocean world.'
      }
    },
    {
      id: 'whiot1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The primary goods exported from East African Swahili city-states were ___',
            options: ['Gold, ivory, and enslaved people', 'Silk and porcelain', 'Cotton textiles and spices', 'Horses and dates']
          },
          {
            label: 'Islam spread to Southeast Asia primarily through ___',
            options: ['Muslim merchant networks and Sufi missionaries', 'Military conquest by Arab armies', 'European colonial missionaries', 'Chinese imperial decree']
          },
          {
            label: 'The Indian Ocean trade network carried more goods than the Silk Roads primarily because ___',
            options: ['Ships could carry far more cargo than camel caravans', 'The Silk Roads did not exist during this period', 'Only luxury goods could travel by sea', 'Overland routes were faster than maritime routes']
          }
        ],
        correctAnswers: ['Gold, ivory, and enslaved people', 'Muslim merchant networks and Sufi missionaries', 'Ships could carry far more cargo than camel caravans'],
        hint1: 'African interior resources traded for Asian manufactured goods',
        hint2: 'Islam arrived peacefully through trade connections, not armies',
        hint3: 'A single ship could carry as much as hundreds of camels',
        explanation: 'The Swahili Coast linked African resources to Asian markets. Islam\\'s spread to Southeast Asia through trade (not conquest) is a key AP distinction. Maritime trade\\'s volume advantage over overland routes explains why the Indian Ocean was the most commercially significant pre-modern trade network.'
      }
    },
    {
      id: 'whiot1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST distinguishes Indian Ocean trade from later European colonial trade (post-1500)?',
            options: [
              'Indian Ocean trade was decentralized with no single dominant power, while European colonial trade was controlled by imperial states that used military force to monopolize routes',
              'Indian Ocean trade involved only luxury goods, while European trade involved only bulk commodities',
              'European colonial trade was always peaceful while Indian Ocean trade was always violent',
              'There were no significant differences between the two trade systems'
            ],
            correctAnswer: 0,
            explanation: 'Pre-1500 Indian Ocean trade was characterized by voluntary exchange, multiple participating cultures, and no single dominant power. After 1500, the Portuguese (and later Dutch, British, and French) used naval force to control chokepoints, establish monopolies, and impose colonial rule — fundamentally changing the nature of Indian Ocean commerce.'
          },
          {
            question: 'An AP essay asks you to compare the effects of trade on TWO regions connected by the Indian Ocean network. The STRONGEST response would note that:',
            options: [
              'Both the Swahili Coast and Southeast Asia experienced religious conversion (to Islam), cultural synthesis (blended languages and architecture), and economic transformation through participation in long-distance trade',
              'Trade had no cultural impact on any region; it was purely economic',
              'Only one region was affected by trade while the other remained completely isolated',
              'Trade caused identical cultural changes in every region it reached'
            ],
            correctAnswer: 0,
            explanation: 'The Swahili Coast and Southeast Asia both illustrate how trade creates cultural synthesis: Swahili blended Bantu and Arabic elements; Southeast Asian kingdoms blended Indian (Hindu/Buddhist) and later Islamic influences with local traditions. Both experienced religious conversion through merchant contact, and both were transformed economically by integration into the Indian Ocean network.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'wh-east-asian-empires-part1.ts',
    content: () => `export const whEastAsianEmpiresPart1Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheae1-intro',
      type: 'text' as const,
      content: \`
# 🌍 East Asian Empires (c. 1200–1450)

**Part 1 of 7 — China, Japan, Korea & Southeast Asia**

---

| Section |
|---------|
| 📖 Song Dynasty Innovations |
| The Yuan (Mongol) Dynasty |
| Japan: Feudalism & Shoguns |
| 📌 Korea & Southeast Asia |
| Cultural Connections |

> 🔑 **Key Concept:** The AP exam focuses on how East Asian societies developed distinct political systems while sharing **Confucian values, Chinese cultural influence, and interconnected trade networks**. Compare China's centralized bureaucracy with Japan's decentralized feudalism.
      \`
    },
    {
      id: 'wheae1-china',
      type: 'text' as const,
      content: \`
## 📖 Chinese Dynasties (1200–1450)

### Song Dynasty (960–1279) — Economic Golden Age

| Achievement | Significance |
|------------|-------------|
| **Neo-Confucianism** | Zhu Xi blended Confucianism with Buddhist/Daoist elements; emphasized self-cultivation, social harmony, and hierarchical relationships |
| **Civil service exams** | Expanded access (theoretically open to all men); tested Confucian classics; created scholar-gentry elite |
| **Economic revolution** | First paper money (*jiaozi*); joint-stock companies; massive iron/steel production |
| **Agriculture** | Champa rice (fast-growing variety from Vietnam); population boom; southern China became economic center |
| **Women's status** | Foot binding spread among elites; Neo-Confucian emphasis on female subordination; women's property rights declined |

### Yuan Dynasty (1271–1368) — Mongol Rule

| Feature | Details |
|---------|---------|
| **Founded by** | **Kublai Khan** (grandson of Genghis Khan) |
| **Ethnic hierarchy** | Mongols at top; Central Asians second; northern Chinese third; southern Chinese at bottom |
| **Trade** | Revitalized Silk Road; welcomed foreign merchants (Marco Polo); expanded maritime trade |
| **Governance** | Used non-Chinese administrators to prevent Chinese resistance; suspended civil service exams initially |
| **Fall** | Flooding, famine, plague, and **Red Turban Rebellion** → **Ming Dynasty** founded by Zhu Yuanzhang (1368) |

### Ming Dynasty (1368–1644) — Restoration & Expansion

| Feature | Details |
|---------|---------|
| **Restoration** | Restored Chinese rule; revived Confucian traditions; rebuilt the Great Wall |
| **Zheng He voyages** (1405–1433) | Massive treasure fleets (300+ ships) explored Indian Ocean; reached East Africa; demonstrated Chinese power |
| **Ended exploration** | After 1433, Ming emperors ended voyages; turned inward; focused on internal threats (Mongols) |
| **Culture** | Porcelain production peaked; Forbidden City built in Beijing; Neo-Confucian orthodoxy |

> ⚠️ **AP Alert:** Zheng He's voyages vs. European exploration is a classic AP comparison. Zheng He sailed earlier, with much larger ships, but China **chose to stop** exploring. Europe's fragmented, competitive states drove continued expansion. This contrast helps explain why Europe, not China, colonized the world.
      \`
    },
    {
      id: 'wheae1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Ming Dynasty\\'s decision to end Zheng He\\'s voyages after 1433 is historically significant because it:',
            options: [
              'Demonstrates how political decisions, not just capability, shaped global history — China voluntarily withdrew from maritime exploration that later defined European power',
              'Proved that maritime exploration was economically unprofitable for all civilizations',
              'Was caused by military defeat at the hands of European navies',
              'Had no long-term consequences for global power dynamics'
            ],
            correctAnswer: 0,
            explanation: 'China had the world\\'s most advanced navy in 1433 — far larger and more sophisticated than anything in Europe. But Confucian officials saw the voyages as wasteful and the Ming court shifted resources to defending against Mongol threats. This voluntary withdrawal left the Indian Ocean open for Portuguese and then other European powers, fundamentally shaping the next 500 years of history.'
          },
          {
            question: 'Under the Yuan Dynasty, Kublai Khan used non-Chinese administrators primarily because:',
            options: [
              'He wanted to prevent ethnically Chinese officials from gaining enough power to organize resistance against Mongol rule',
              'There were no educated Chinese people available for government service',
              'Non-Chinese administrators were always more competent than Chinese scholars',
              'The Confucian examination system had never existed before Mongol rule'
            ],
            correctAnswer: 0,
            explanation: 'The Mongols were a tiny minority ruling a vast Chinese population. By placing Central Asians and other non-Chinese in key positions, Kublai Khan reduced the risk of Chinese elites mobilizing against Mongol rule. He also suspended the civil service examinations for a time, further marginalizing the Chinese scholar-gentry class.'
          }
        ]
      }
    },
    {
      id: 'wheae1-japan',
      type: 'text' as const,
      content: \`
## Japan & the Sinosphere

### Japanese Feudalism (c. 1185–1600)

| Feature | Details |
|---------|---------|
| **Emperor** | Ceremonial figurehead; real power held by military rulers |
| **Shogun** | Supreme military commander; ruled through a bakufu (military government) |
| **Daimyo** | Regional lords who controlled territories; commanded samurai |
| **Samurai** | Warrior class bound by **bushido** (code of honor: loyalty, martial skill, honor, ritual suicide — seppuku) |
| **Peasants** | 80%+ of population; rice farmers; lowest status but economically essential |

**Key comparison:** Japan's feudal system resembled European feudalism (decentralized, land-based, warrior elites) but developed independently.

### Korea: Koryo & Choson Dynasties

| Feature | Details |
|---------|---------|
| **Koryo Dynasty** (918–1392) | Adopted Chinese civil service exams, Buddhism, Confucianism; invented **metal movable type** (before Gutenberg!) |
| **Mongol influence** | Korea became a Mongol vassal state; maintained some autonomy |
| **Choson Dynasty** (1392–1897) | Neo-Confucian reforms; **hangul** alphabet invented (1443) to increase literacy |

### Southeast Asia

- **Khmer Empire** (Cambodia) — **Angkor Wat**; Hindu-Buddhist temple complex; massive hydraulic engineering (reservoirs)
- **Srivijaya** (Indonesia) — Buddhist maritime empire controlling the Strait of Malacca; key to Indian Ocean trade
- **Majapahit** (Java) — Hindu-Buddhist kingdom; controlled spice trade; later Islamized through merchant contact
- **Dai Viet** (Vietnam) — Confucian governance adopted from China; resisted Chinese political control while accepting cultural influence
      \`
    },
    {
      id: 'wheae1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What Chinese admiral led massive treasure fleets across the Indian Ocean between 1405 and 1433?

2) What Japanese warrior code emphasized loyalty, honor, martial skill, and ritual suicide (seppuku)?

3) What Korean alphabet, invented in 1443, was designed to increase literacy among common people?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Zheng He', 'bushido', 'hangul'],
        hint1: 'His fleet included ships up to 400 feet long — dwarfing European vessels',
        hint2: 'The samurai code — "way of the warrior"',
        hint3: 'Still used in both North and South Korea today',
        explanation: 'Zheng He\\'s voyages (1405–1433) demonstrated China\\'s unmatched naval power before the Ming court chose to end exploration. Bushido shaped Japanese warrior culture for centuries and still influences Japanese society. Hangul was a revolutionary innovation — a phonetic alphabet designed to be easy to learn, created by King Sejong.'
      }
    },
    {
      id: 'wheae1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The fast-growing rice variety imported from Vietnam that fueled Song Dynasty population growth was ___',
            options: ['Champa rice', 'Basmati rice', 'Wild rice', 'Jasmine rice']
          },
          {
            label: 'The massive Hindu-Buddhist temple complex built by the Khmer Empire in Cambodia was ___',
            options: ['Angkor Wat', 'Forbidden City', 'Taj Mahal', 'Borobudur']
          },
          {
            label: 'The military commander who held real political power in feudal Japan (while the emperor was a figurehead) was the ___',
            options: ['Shogun', 'Daimyo', 'Samurai', 'Emperor']
          }
        ],
        correctAnswers: ['Champa rice', 'Angkor Wat', 'Shogun'],
        hint1: 'Imported from Southeast Asia; allowed multiple harvests per year',
        hint2: 'The world\\'s largest religious monument',
        hint3: 'Title meaning "barbarian-subduing generalissimo"',
        explanation: 'Champa rice\\'s fast growth cycle allowed double-cropping, fueling the Song population boom. Angkor Wat demonstrates Indian cultural influence in Southeast Asia (Hindu then Buddhist). The shogunate system defined Japanese governance for nearly 700 years.'
      }
    },
    {
      id: 'wheae1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which comparison BEST captures the relationship between China and other East Asian societies during 1200–1450?',
            options: [
              'Japan, Korea, and Vietnam selectively adopted Chinese cultural elements (Confucianism, writing, governance models) while maintaining distinct political structures and cultural identities',
              'China militarily conquered and directly governed Japan, Korea, and Vietnam throughout this period',
              'East Asian societies had no contact with China and developed entirely independently',
              'Japan, Korea, and Vietnam completely replaced their own cultures with Chinese culture'
            ],
            correctAnswer: 0,
            explanation: 'The concept of the "Sinosphere" (Chinese cultural sphere) is key: Korea adopted civil service exams and Neo-Confucianism but also invented hangul. Japan borrowed Chinese writing and Buddhism but developed a feudal political system unlike China\\'s centralized bureaucracy. Vietnam adopted Confucian governance while fiercely resisting Chinese political control. This pattern of selective borrowing is a crucial AP concept.'
          },
          {
            question: 'An AP question compares Japanese feudalism with European feudalism. The MOST accurate statement would be:',
            options: [
              'Both developed decentralized systems with warrior elites (samurai/knights), regional lords (daimyo/lords), and peasant farmers, though they emerged independently with distinct cultural expressions',
              'Japanese feudalism was directly borrowed from European feudalism through trade contacts',
              'The two systems were completely dissimilar with no comparable features',
              'Both systems were centralized monarchies with powerful kings controlling all territory'
            ],
            correctAnswer: 0,
            explanation: 'Japanese and European feudalism are a classic AP comparison: both featured decentralized power, military aristocracies bound by codes of honor (bushido/chivalry), hereditary land control, and a large peasant class. However, they developed independently — demonstrating how similar political structures can emerge in different civilizations facing similar conditions (weak central government, need for local military defense).'
          }
        ]
      }
    }
  ]
}
`
  }
];

for (const t of topics) {
  const filePath = join(DIR, t.file);
  writeFileSync(filePath, t.content(), 'utf-8');
  console.log('✅ Wrote ' + t.file);
}

console.log('\nDone: ' + topics.length + ' files written.');
