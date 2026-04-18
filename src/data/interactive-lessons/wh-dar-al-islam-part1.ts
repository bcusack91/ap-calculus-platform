export const whDarAlIslamPart1Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'whdai1-content',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'whdai1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
            explanation: 'Even without a unified caliphate, Islam spread through merchant communities along Indian Ocean and trans-Saharan trade routes, and through Sufi missionaries who emphasized mystical experience and accommodation with local traditions. This decentralized spread is a key AP concept — Islam\'s growth was not dependent on a single political authority.'
          },
          {
            question: 'The Islamic world\'s preservation and expansion of Greek, Persian, and Indian knowledge is historically significant because:',
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
      content: `
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
      `
    },
    {
      id: 'whdai1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What Muslim traveler journeyed ~75,000 miles across Dar al-Islam between 1325 and 1354, recording his observations?

2) What mystical branch of Islam was especially important in spreading the faith to South and Southeast Asia?

3) What Islamic mathematician's name gives us the word "algebra" (from Arabic *al-jabr*)?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Ibn Battuta', 'Sufism', 'Al-Khwarizmi'],
        hint1: 'His travelogue (*Rihla*) is a key primary source for AP World History',
        hint2: 'A mystical tradition emphasizing personal experience of the divine',
        hint3: 'His name is also the origin of the word "algorithm"',
        explanation: 'Ibn Battuta\'s travels provide invaluable historical evidence about the diversity and unity of the Islamic world. Sufism\'s flexibility and emphasis on spiritual experience made Islam accessible to diverse populations. Al-Khwarizmi\'s mathematical innovations shaped both the Islamic and European intellectual traditions.'
      }
    },
    {
      id: 'whdai1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
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
        explanation: 'The gold-salt trade powered West African empires like Mali and Songhai. Ibn Sina\'s Canon of Medicine synthesized Greek, Roman, and Islamic medical knowledge. Madrasas created a shared educational system across the Islamic world, standardizing religious and secular learning.'
      }
    },
    {
      id: 'whdai1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
