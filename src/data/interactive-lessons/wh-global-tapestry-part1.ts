export const whGlobalTapestryPart1Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whgt1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'whgt1-song',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'whgt1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Song Dynasty China is considered a model of economic and technological innovation primarily because it:',
            options: [
              'Developed paper money, gunpowder, the compass, and movable-type printing while maintaining the world\'s largest economy',
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
      content: `
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
      `
    },
    {
      id: 'whgt1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What West African city became a major center of Islamic learning, home to the University of Sankore?

2) What meritocratic system did the Song Dynasty use to select government officials?

3) What Malian ruler's pilgrimage to Mecca in 1324 was so lavish it disrupted the Egyptian economy?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Timbuktu', 'civil service examinations', 'Mansa Musa'],
        hint1: 'A city in modern-day Mali — famous for libraries and scholars',
        hint2: 'Exams testing knowledge of Confucian classics — civil service ___',
        hint3: 'His hajj demonstrated Mali\'s extraordinary wealth',
        explanation: 'Timbuktu was a globally significant center of learning, with thousands of manuscripts and scholars. The civil service examination system made government positions available based on merit rather than birth. Mansa Musa\'s pilgrimage revealed Africa\'s wealth to the wider world and is one of the most frequently tested topics in AP World History.'
      }
    },
    {
      id: 'whgt1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Civilizations** 🔍
      `,
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
        explanation: 'Song China was the most technologically advanced civilization of its era. The Byzantine Empire preserved Greco-Roman culture for a thousand years after Rome\'s fall. Feudalism organized European society through decentralized land-based power structures — contrasting sharply with China\'s centralized bureaucracy.'
      }
    },
    {
      id: 'whgt1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which comparison BEST illustrates a key difference between Song Dynasty China and medieval Europe during the period 1200–1450?',
            options: [
              'China\'s centralized government selected officials through meritocratic exams, while European power was fragmented among feudal lords based on hereditary status',
              'Europe was more technologically advanced than China in every field',
              'China had no cities while Europe was highly urbanized',
              'Both regions had identical political and economic structures'
            ],
            correctAnswer: 0,
            explanation: 'This is a classic AP comparison: Song China had a centralized imperial bureaucracy staffed through competitive exams (merit-based), while Europe\'s feudal system distributed power among hereditary lords with weak central monarchies. This difference had profound effects on economic development, social mobility, and technological innovation.'
          },
          {
            question: 'Mansa Musa\'s hajj (1324) is historically significant primarily because it:',
            options: [
              'Demonstrated the wealth and sophistication of West African civilization to the broader Islamic world, challenging later European assumptions about Africa',
              'Converted all of West Africa to Christianity',
              'Established the first European trading posts in West Africa',
              'Caused the permanent collapse of the Egyptian economy'
            ],
            correctAnswer: 0,
            explanation: 'Mansa Musa\'s pilgrimage to Mecca — reportedly with 60,000 attendants and enormous quantities of gold — put Mali on European and Islamic maps. It demonstrated that sub-Saharan Africa had wealthy, complex states, and it strengthened trade and intellectual connections between West Africa and the broader Islamic world.'
          }
        ]
      }
    }
  ]
}
