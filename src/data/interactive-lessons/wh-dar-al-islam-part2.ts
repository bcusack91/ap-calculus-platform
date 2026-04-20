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
              'It served as the Abbasid Caliphate\'s primary institution for translating Greek, Persian, and Indian texts into Arabic and generating original Islamic scholarship in mathematics, astronomy, and medicine',
              'It was a military academy training Abbasid armies',
              'It was established by European Crusaders in Baghdad',
              'It only preserved Islamic religious texts and had no interest in non-Muslim knowledge'
            ],
            correctAnswer: 0,
            explanation: 'The House of Wisdom (c. 830 CE) represented the apex of the Translation Movement — a deliberate Abbasid project to acquire, translate, and build upon Aristotle, Plato, Euclid, Ptolemy, and Indian mathematicians. Scholars like Al-Khwarizmi (algebra), Ibn Sina (medicine), and Al-Biruni (natural history) transformed received knowledge into new discoveries.'
          },
          {
            question: 'What is the most historically significant legacy of the Islamic world\'s preservation of Greek philosophical texts c. 800–1200?',
            options: [
              'Islamic scholars not only preserved Greek texts but added original commentary and synthesis, which later transmitted these works to medieval European universities through translation centers in Spain and Sicily',
              'Islamic scholars destroyed all Greek texts to replace them with Islamic alternatives',
              'Greek texts were only preserved in Byzantium and had no Islamic connection',
              'European scholars obtained Greek texts directly from ancient Rome without Islamic intermediaries'
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
              'The development of algebra and the transmission of Hindu-Arabic numerals to the Islamic world, both of which later entered European mathematics through Latin translations',
              'Developing the first accurate world map and circumnavigating Africa',
              'Writing the Canon of Medicine used in European universities for 500 years',
              'Translating the Bible into Arabic for Islamic scholars'
            ],
            correctAnswer: 0,
            explanation: 'Al-Khwarizmi\'s *Kitab al-Mukhtasar fi Hisab al-Jabr* (c. 830 CE) created algebra. The word "algebra" comes from *al-jabr* in the title; "algorithm" comes from the Latinization of Al-Khwarizmi\'s name. His work was translated into Latin in the 12th century and transformed European mathematics.'
          },
          {
            question: 'The waqf (Islamic charitable endowment) system was significant for intellectual life in Dar al-Islam because it:',
            options: [
              'Provided stable, protected funding for madrasas and libraries that was insulated from political changes in caliphates and dynasties',
              'Only funded military campaigns and had no connection to educational institutions',
              'Was controlled by the central government, making it dependent on political stability',
              'Exclusively funded mosques rather than schools'
            ],
            correctAnswer: 0,
            explanation: 'The waqf\'s protection from government seizure meant that intellectual institutions could survive caliphate collapses, dynastic changes, and even Mongol invasions (in some cases). This institutional stability supported sustained scholarship across centuries.'
          },
          {
            question: 'Ibn Battuta\'s *Rihla* (travel account) is valuable as an AP primary source primarily because it:',
            options: [
              'Provides a first-hand account of Islamic societies, trade networks, and cultural practices across 44 modern countries, demonstrating the geographic reach and cultural unity of Dar al-Islam c. 1325–1354',
              'Is the only surviving account of medieval Islamic civilization',
              'Documents exclusively military campaigns and political history',
              'Was written in Latin for European readers, not Arabic'
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
            options: ['Ibn Sina (Avicenna)', 'Al-Khwarizmi', 'Ibn Battuta', 'Ibn al-Haytham']
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
              'Islamic scholars at institutions like the House of Wisdom translated Greek philosophical and scientific works into Arabic, added original commentary and new discoveries, and these Arabic texts were later translated into Latin in Spain and Sicily, becoming the foundation of medieval European university curricula',
              'Islamic scholars rejected all Greek philosophy as incompatible with Islam and burned Greek texts',
              'Medieval Europeans obtained Greek knowledge directly from Athens without any Islamic intermediary',
              'The Islamic world had no contact with either ancient Greece or medieval Europe'
            ],
            correctAnswer: 0,
            explanation: 'This answer demonstrates the key transmission chain: Greek → Arabic (c. 800–1000) → Latin (c. 1100–1200) → European universities. AP rewards answers that show how historical knowledge moved through specific institutions and processes — not just that it happened, but HOW it happened.'
          },
          {
            question: 'Which argument BEST demonstrates the complexity of Islamic intellectual contributions c. 750–1450?',
            options: [
              'While Islamic scholars are often credited with "preserving" Greek knowledge, they actually transformed it — adding original discoveries in algebra, optics, and medicine that went far beyond the Greek originals, making the Islamic intellectual tradition generative rather than merely archival',
              'Islamic scholars only copied texts without any original contribution',
              'All Islamic intellectual achievements were derived entirely from China',
              'Islamic intellectual life was entirely separate from Greek and Indian traditions'
            ],
            correctAnswer: 0,
            explanation: 'This complexity argument earns AP points by challenging the reductive "preservation" narrative. Islamic scholars did preserve Greek texts — but calling them only "preservers" undersells Al-Khwarizmi\'s algebra, Ibn al-Haytham\'s optics, and Ibn Sina\'s medical synthesis, all of which exceeded Greek originals in significant ways.'
          }
        ]
      }
    }
  ]
}
