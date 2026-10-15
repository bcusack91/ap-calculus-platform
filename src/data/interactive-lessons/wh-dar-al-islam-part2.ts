export const whDarAlIslamPart2Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai2-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 2 of 7 — Islamic Scholarship & Intellectual Life**

---

| Section |
|---------|
| 📖 The House of Wisdom & Translation Movement |
| Islamic Philosophy and Science |
| Madrasas & the Preservation of Knowledge |
| 📌 Islam's Global Intellectual Legacy |

> 🔑 **Key Concept:** The Islamic world of c. 800–1450 was the global leader in philosophy, mathematics, astronomy, and medicine. The AP exam asks how Islamic scholarship preserved, transformed, and transmitted Greco-Roman and Indian knowledge — and why this matters for later European development.
      `
    },
    {
      id: 'whdai2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The House of Wisdom (Bayt al-Hikma) in Baghdad was significant primarily because:',
            options: [
              'It was the Abbasid center for translating Greek, Persian and Indian texts into Arabic',
              'It was the Abbasid academy that trained officers for the caliph\'s frontier armies',
              'It was a Fatimid library in Cairo that collected only Quranic commentary and law',
              'It was a Byzantine school in Constantinople where Muslim scholars copied texts'
            ],
            correctAnswer: 0,
            explanation: 'The House of Wisdom (c. 830 CE) represented the apex of the Translation Movement — a deliberate Abbasid project to acquire, translate, and build upon Aristotle, Plato, Euclid, Ptolemy, and Indian mathematicians. Scholars there such as Al-Khwarizmi (algebra) produced original work, and later scholars such as Ibn Sina (medicine) and Al-Biruni (natural history) built on the translations it produced.'
          },
          {
            question: 'What is the most historically significant legacy of the Islamic world\'s preservation of Greek philosophical texts c. 800–1200?',
            options: [
              'Scholars added their own commentary, and the texts later reached Europe through Spain and Sicily',
              'Scholars replaced the Greek texts with Islamic works, so very few of them ever reached Europe at all',
              'The texts survived only in Byzantium, so the Islamic world played no part in passing them on',
              'European scholars obtained the texts from Rome directly, with no Arabic translations involved'
            ],
            correctAnswer: 0,
            explanation: 'The pathway of Greek knowledge: Greece → Islamic world (via Arabic translation, c. 800–1000) → European universities (via Latin translation from Arabic, c. 1100–1200). Works like Aristotle\'s logic and Galen\'s medicine reached medieval European scholars primarily as Arabic translations with Islamic commentary. This transmission chain is a key AP causation example.'
          }
        ]
      }
    },
    {
      id: 'whdai2-content',
      type: 'text' as const,
      content: `
## 📖 Islamic Intellectual Life (c. 750–1450)

> **The House of Wisdom & the Translation Movement**

The Abbasid Caliphate (750–1258 CE) made Baghdad the world's premier intellectual center:

| Scholar | Field | Contribution |
|---------|-------|-------------|
| **Al-Khwarizmi** | Mathematics | Developed algebra (*al-jabr*); introduced Hindu-Arabic numerals to Islamic world |
| **Ibn Sina (Avicenna)** | Medicine | *Canon of Medicine* — standard medical textbook in Europe until 17th century |
| **Al-Farabi** | Philosophy | Synthesized Aristotle with Islamic theology |
| **Ibn Rushd (Averroes)** | Philosophy | Commentaries on Aristotle that shaped medieval European scholasticism |
| **Ibn Battuta** | Geography/Travel | *Rihla* — documented travels across 44 modern countries, describing the Islamic world in detail |
| **Al-Biruni** | Natural history | Comparative study of religions; measurements of the earth's circumference |

> **Madrasas: The Architecture of Islamic Learning**

Madrasas (Islamic schools) spread standardized Islamic education across Dar al-Islam:

- **What they taught:** Quran, Hadith, Islamic law (fiqh), grammar, rhetoric, mathematics, astronomy
- **How they were funded:** *Waqf* (Islamic endowment) — charitable trusts funded by wealthy donors protected from government seizure
- **Who attended:** Male students of all social backgrounds (theoretically meritocratic)
- **Legacy:** Madrasas connected scholars from Morocco to Indonesia through shared curriculum and texts, creating intellectual solidarity across the Islamic world

> **Mathematical & Scientific Innovations**

Key contributions that shaped global intellectual history:

- **Algebra** (*al-jabr*): Al-Khwarizmi's treatise (c. 830 CE) created a new branch of mathematics; the word "algebra" is Arabic
- **Algorithms**: Al-Khwarizmi's name gave us the word "algorithm"
- **Hindu-Arabic numerals**: Transmitted from India through the Islamic world to Europe — our number system (0–9) entered European use via Arabic manuscripts
- **Astronomy**: Improved Ptolemy's star charts; developed trigonometry for astronomical calculation
- **Optics**: Ibn al-Haytham's *Book of Optics* (c. 1011) — foundational for later European scientific revolution

> **AP Comparison Anchor**

- **Islamic scholarship vs. European scholarship:** In the period c. 800–1200, the Islamic world was globally dominant in philosophy and science while European learning was largely centered in monasteries; the tables began to turn after 1200 as European universities absorbed Arabic translations
- **Madrasas vs. European universities:** Both were educational institutions funded by religious/charitable wealth; European universities were more autonomous; madrasas were more geographically dispersed
      `
    },
    {
      id: 'whdai2-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Al-Khwarizmi\'s most significant contributions to global intellectual history were:',
            options: [
              'Developing algebra and spreading Hindu-Arabic numerals, both later adopted in Europe',
              'Writing the Canon of Medicine, used as a textbook in European universities for centuries',
              'Producing the Book of Optics, which explained vision as light entering the eye',
              'Drawing the world map for Roger II of Sicily that was copied for three centuries'
            ],
            correctAnswer: 0,
            explanation: 'Al-Khwarizmi\'s *Kitab al-Mukhtasar fi Hisab al-Jabr* (c. 830 CE) created algebra. The word "algebra" comes from *al-jabr* in the title; "algorithm" comes from the Latinization of Al-Khwarizmi\'s name. His work was translated into Latin in the 12th century and transformed European mathematics. The Canon of Medicine was Ibn Sina\'s, the Book of Optics Ibn al-Haytham\'s, and the map for Roger II al-Idrisi\'s.'
          },
          {
            question: 'The waqf (Islamic charitable endowment) system was significant for intellectual life in Dar al-Islam because it:',
            options: [
              'Gave madrasas and libraries secure funding that outlasted changes of ruler or dynasty',
              'Paid for the caliph\'s military campaigns and had no link to schools or libraries',
              'Was run by the central treasury, so schools lost funding whenever a dynasty fell',
              'Funded only mosque construction, leaving scholars to depend on royal patrons'
            ],
            correctAnswer: 0,
            explanation: 'The waqf\'s protection from government seizure meant that intellectual institutions could survive caliphate collapses, dynastic changes, and even Mongol invasions (in some cases). This institutional stability supported sustained scholarship across centuries.'
          },
          {
            question: 'Ibn Battuta\'s *Rihla* (travel account) is valuable as an AP primary source primarily because it:',
            options: [
              'It gives a first-hand view of Muslim societies from West Africa to China',
              'It is the only surviving written account of a medieval Islamic society at all',
              'It records military campaigns only, with little about trade or ordinary daily life',
              'It was written in Latin for European merchants planning their trade with Asia'
            ],
            correctAnswer: 0,
            explanation: 'Ibn Battuta traveled more than 75,000 miles, visiting from Morocco to Mali to India to China. His detailed observations — of court life, economic practices, gender norms, and religious customs across the Islamic world — make the *Rihla* an invaluable primary source for understanding the diversity and connectivity of Dar al-Islam.'
          }
        ]
      }
    },
    {
      id: 'whdai2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each Islamic scholar or concept to their correct contribution.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Islamic mathematician who developed algebra and transmitted Hindu-Arabic numerals was ___',
            options: ['Al-Khwarizmi', 'Ibn Sina', 'Ibn Rushd', 'Al-Biruni']
          },
          {
            label: 'The Islamic physician whose Canon of Medicine was used in European universities until the 17th century was ___',
            options: ['Ibn Sina (Avicenna)', 'Al-Khwarizmi', 'Ibn Battuta', 'Ibn al-Haytham (Alhazen)']
          },
          {
            label: 'The Islamic institution that spread standardized religious and scientific education across the Islamic world was the ___',
            options: ['Madrasa', 'House of Wisdom', 'Mosque', 'Waqf']
          }
        ],
        correctAnswers: ['Al-Khwarizmi', 'Ibn Sina (Avicenna)', 'Madrasa'],
        hint1: 'Name means "father of algebra" — gave us the words algebra and algorithm',
        hint2: 'Latin name Avicenna — medical authority for 500 years',
        hint3: 'Educational institution funded by charitable endowments',
        explanation: 'Al-Khwarizmi\'s algebra and number transmission transformed mathematics globally. Ibn Sina\'s Canon of Medicine remained authoritative in European universities centuries after his death. Madrasas spread Islamic learning from West Africa to Southeast Asia through a shared curriculum of religious and scientific subjects.'
      }
    },
    {
      id: 'whdai2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "Explain the role of the Islamic world in transmitting knowledge between ancient Greece and medieval Europe." Which answer earns full credit?',
            options: [
              'Arabic translations of Greek works and their commentaries were put into Latin in Spain and shaped European universities',
              'Scholars rejected Greek philosophy as un-Islamic, so Europe had to rediscover it much later from Byzantine copies alone',
              'Europeans obtained Greek learning directly from Athens, so the Islamic world served as no intermediary at all',
              'Persian translators rendered Greek works into Farsi, and Mongol envoys later carried them to the Italian city-states'
            ],
            correctAnswer: 0,
            explanation: 'This answer demonstrates the key transmission chain: Greek → Arabic (c. 800–1000) → Latin (c. 1100–1200) → European universities. AP rewards answers that show how historical knowledge moved through specific institutions and processes — not just that it happened, but HOW it happened.'
          },
          {
            question: 'Which argument BEST demonstrates the complexity of Islamic intellectual contributions c. 750–1450?',
            options: [
              'Scholars did not just preserve Greek learning but surpassed it in algebra, optics and medicine',
              'Scholars only copied Greek texts faithfully and made no original contributions of their own',
              'Islamic science was borrowed almost entirely from Chinese sources carried along the Silk Roads',
              'Islamic learning developed in isolation from Greek and Indian traditions'
            ],
            correctAnswer: 0,
            explanation: 'This complexity argument earns AP points by challenging the reductive "preservation" narrative. Islamic scholars did preserve Greek texts — but calling them only "preservers" undersells Al-Khwarizmi\'s algebra, Ibn al-Haytham\'s optics, and Ibn Sina\'s medical synthesis, all of which exceeded Greek originals in significant ways.'
          }
        ]
      }
    }
  ]
}
