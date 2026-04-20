#!/usr/bin/env python3
"""Write all wh-dar-al-islam parts 2-7 with real AP content."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

# ------- PART 2: Islamic Scholarship & the House of Wisdom -------
w('wh-dar-al-islam-part2.ts', '''export const whDarAlIslamPart2Data = {
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
| 📌 Islam\'s Global Intellectual Legacy |

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

The Abbasid Caliphate (750–1258 CE) made Baghdad the world\'s premier intellectual center:

| Scholar | Field | Contribution |
|---------|-------|-------------|
| **Al-Khwarizmi** | Mathematics | Developed algebra (*al-jabr*); introduced Hindu-Arabic numerals to Islamic world |
| **Ibn Sina (Avicenna)** | Medicine | *Canon of Medicine* — standard medical textbook in Europe until 17th century |
| **Al-Farabi** | Philosophy | Synthesized Aristotle with Islamic theology |
| **Ibn Rushd (Averroes)** | Philosophy | Commentaries on Aristotle that shaped medieval European scholasticism |
| **Ibn Battuta** | Geography/Travel | *Rihla* — documented travels across 44 modern countries, describing the Islamic world in detail |
| **Al-Biruni** | Natural history | Comparative study of religions; measurements of the earth\'s circumference |

> **Madrasas: The Architecture of Islamic Learning**

Madrasas (Islamic schools) spread standardized Islamic education across Dar al-Islam:

- **What they taught:** Quran, Hadith, Islamic law (fiqh), grammar, rhetoric, mathematics, astronomy
- **How they were funded:** *Waqf* (Islamic endowment) — charitable trusts funded by wealthy donors protected from government seizure
- **Who attended:** Male students of all social backgrounds (theoretically meritocratic)
- **Legacy:** Madrasas connected scholars from Morocco to Indonesia through shared curriculum and texts, creating intellectual solidarity across the Islamic world

> **Mathematical & Scientific Innovations**

Key contributions that shaped global intellectual history:

- **Algebra** (*al-jabr*): Al-Khwarizmi\'s treatise (c. 830 CE) created a new branch of mathematics; the word "algebra" is Arabic
- **Algorithms**: Al-Khwarizmi\'s name gave us the word "algorithm"
- **Hindu-Arabic numerals**: Transmitted from India through the Islamic world to Europe — our number system (0–9) entered European use via Arabic manuscripts
- **Astronomy**: Improved Ptolemy\'s star charts; developed trigonometry for astronomical calculation
- **Optics**: Ibn al-Haytham\'s *Book of Optics* (c. 1011) — foundational for later European scientific revolution

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
''')

# ------- PART 3: Trade Networks in the Islamic World -------
w('wh-dar-al-islam-part3.ts', '''export const whDarAlIslamPart3Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai3-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 3 of 7 — Islamic Trade Networks**

---

| Section |
|---------|
| 📖 Islam & the Indian Ocean |
| Trans-Saharan Trade under Muslim Control |
| The Role of Arabic as a Lingua Franca |
| 📌 How Trade Built Dar al-Islam |

> 🔑 **Key Concept:** Islamic merchants dominated Afro-Eurasian trade networks c. 700–1450. Arabic served as both a religious and commercial language across the Indian Ocean, trans-Saharan routes, and Central Asian Silk Roads. Understanding how commerce built and reinforced the Islamic world is central to AP Unit 1.
      `
    },
    {
      id: 'whdai3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Muslim merchants dominated Indian Ocean trade c. 700–1450 primarily because:',
            options: [
              'They combined expertise in monsoon wind navigation, access to Arabic as a shared commercial language, and Islamic legal institutions (like contracts and credit) that facilitated long-distance trade across cultural boundaries',
              'They were the only group with access to sailing vessels in this period',
              'The Quran required all Muslims to become merchants',
              'They conquered and militarily controlled all Indian Ocean port cities'
            ],
            correctAnswer: 0,
            explanation: 'Muslim merchants\' dominance combined technological (navigation), linguistic (Arabic), legal (Islamic commercial law including contracts, partnerships, and credit instruments), and religious factors. Islam\'s prohibition on usury (interest) led to creative financial instruments like *suftaja* (bills of exchange) that facilitated long-distance commerce.'
          },
          {
            question: 'The role of Arabic as a lingua franca across Dar al-Islam was significant for trade because:',
            options: [
              'It provided a shared commercial and legal language that allowed Muslim merchants from Morocco to Southeast Asia to conduct business, write contracts, and resolve disputes using shared Islamic law',
              'It forced all non-Arab Muslims to abandon their native languages entirely',
              'Arabic was the only language spoken in the Islamic world',
              'It was adopted by Chinese and European merchants as their primary trade language'
            ],
            correctAnswer: 0,
            explanation: 'Arabic\'s role as the language of the Quran gave it religious authority, but its commercial role was equally significant: shared legal concepts, contract forms, and financial instruments allowed Muslim merchants across vast distances to trade with built-in trust mechanisms that non-Muslim merchants lacked.'
          }
        ]
      }
    },
    {
      id: 'whdai3-content',
      type: 'text' as const,
      content: `
## 📖 Islamic Trade Networks

> **The Indian Ocean Islamic Trading World**

Muslim merchants built the most sophisticated commercial network in the pre-modern world:

| Feature | Details |
|---------|---------|
| **Diasporic communities** | Muslim merchants established communities (*funduqs*) in port cities across India, East Africa, and Southeast Asia |
| **Financial instruments** | *Suftaja* (bills of exchange) allowed merchants to transfer credit without carrying gold |
| **Islamic partnerships** | *Mudaraba* — a commercial partnership where one partner provides capital, another provides labor; profits shared; not riba (usury) |
| **Key goods** | Spices (Southeast Asia) → India → Arabia → Europe; textiles (India) → East Africa; porcelain (China) → Islamic world and beyond |

> **Trans-Saharan Trade: Islamic Connectivity**

After Arab conquests of North Africa (7th–8th centuries), Islamic merchants and Berber nomads dominated trans-Saharan trade:

- **Berber intermediaries:** Tuareg and other Berber people served as caravan guides and intermediaries between North African merchants and sub-Saharan sources of gold
- **Key commodities:** Gold (Ghana/Mali → North Africa → Europe); salt (Saharan mines → sub-Saharan Africa); enslaved people (West Africa → North Africa)
- **Islamic urban centers:** Timbuktu, Djenné, Kumbi Saleh — cities at the Saharan interface became major commercial AND scholarly centers
- **Mansa Musa\'s hajj (1324–1325):** His pilgrimage to Mecca, accompanied by thousands of servants and enormous quantities of gold, demonstrated Mali\'s wealth to the Islamic world and destabilized Mediterranean gold markets

> **Arabic as Commercial Infrastructure**

Arabic unified the Islamic commercial world through:

- **Shared legal framework:** Islamic commercial law (*fiqh al-muamalat*) governed contracts, partnerships, and disputes across thousands of miles
- **Shared accounting:** Arabic numerals and accounting systems standardized record-keeping
- **Shared trust network:** A Muslim merchant in Cairo could trust another in Calicut based on shared religious and legal norms
- **Diplomatic language:** Letters between Islamic rulers were written in Arabic regardless of their native tongue

> **AP Comparison Anchor**

- **Islamic trade vs. Chinese trade:** Both used established routes; China\'s tributary system controlled trade politically, while Islamic merchants operated more independently through private commercial networks
- **Role of religion in commerce:** Islam\'s commercial law directly facilitated trade (partnerships, contracts, credit) — religion was not separate from economics but embedded in commercial practice
      `
    },
    {
      id: 'whdai3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The mudaraba commercial partnership in Islamic law was significant for long-distance trade because:',
            options: [
              'It allowed a capital provider and a traveling merchant to share risk and profit without violating Islam\'s prohibition on interest (riba), creating a legal framework for financing long-distance voyages',
              'It gave the Islamic government direct control over all merchant profits',
              'It was identical to European feudal contracts',
              'It only applied to trade within the Arabian Peninsula'
            ],
            correctAnswer: 0,
            explanation: 'The mudaraba solved a key problem: how to finance long-distance trade without charging interest (prohibited by Islam). By structuring commerce as a profit-sharing partnership rather than a loan, Islamic law enabled sophisticated commercial finance that facilitated Indian Ocean and trans-Saharan trade.'
          },
          {
            question: 'Timbuktu\'s significance in the trans-Saharan trade network c. 1200–1450 was that it:',
            options: [
              'Served simultaneously as a major commercial hub for gold and salt trade AND as a center of Islamic scholarship, demonstrating the inseparability of commercial and intellectual life in Dar al-Islam',
              'Was exclusively a military fortress with no commercial function',
              'Was the capital of the Abbasid Caliphate relocated to West Africa',
              'Was the origin point of Islam\'s expansion into sub-Saharan Africa through military conquest'
            ],
            correctAnswer: 0,
            explanation: 'Timbuktu exemplifies how trade and scholarship co-existed in Islamic commercial cities. The Sankore Mosque and Timbuktu\'s university attracted scholars from across the Islamic world, funded by the wealth generated by trans-Saharan commerce. AP questions often use Timbuktu to demonstrate the cultural dimensions of trade networks.'
          },
          {
            question: 'Mansa Musa\'s 1324–1325 hajj to Mecca is significant for AP World History because it:',
            options: [
              'Demonstrated the integration of Mali Empire into the Islamic world, the extraordinary wealth of sub-Saharan African kingdoms, and the connectivity of trans-Saharan trade networks — while his gold spending destabilized Mediterranean economies for years',
              'Was the first time any African ruler had traveled to the Middle East',
              'Resulted in the Mali Empire converting from Christianity to Islam',
              'Was primarily a military campaign disguised as a religious pilgrimage'
            ],
            correctAnswer: 0,
            explanation: 'Mansa Musa\'s hajj serves multiple AP functions: evidence of Mali\'s integration into Dar al-Islam, evidence of sub-Saharan African economic power, and evidence of gold\'s role in trans-Saharan trade. His reportedly massive gold giveaways in Cairo caused inflation that affected Mediterranean gold prices for over a decade — concrete evidence of West African economic weight.'
          }
        ]
      }
    },
    {
      id: 'whdai3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each trade concept to its correct definition.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Islamic commercial partnership that allowed profit-sharing without charging interest was ___',
            options: ['Mudaraba', 'Waqf', 'Suftaja', 'Riba']
          },
          {
            label: 'The West African city that served as both a trans-Saharan trade hub and a major Islamic scholarly center was ___',
            options: ['Timbuktu', 'Kilwa', 'Baghdad', 'Cairo']
          },
          {
            label: 'The Mali ruler whose 1324 hajj demonstrated sub-Saharan African wealth to the entire Islamic world was ___',
            options: ['Mansa Musa', 'Sundiata Keita', 'Askia Muhammad', 'Mansa Wali']
          }
        ],
        correctAnswers: ['Mudaraba', 'Timbuktu', 'Mansa Musa'],
        hint1: 'Islamic commercial partnership — profit sharing, not interest',
        hint2: 'West African city — gold trade and Islamic scholarship',
        hint3: 'Mali ruler — hajj caused Mediterranean gold inflation',
        explanation: 'The mudaraba partnership embedded Islamic legal principles into commercial practice. Timbuktu represents the convergence of commerce and scholarship that characterized Islamic urban centers at trade crossroads. Mansa Musa\'s hajj is the most powerful single piece of evidence for sub-Saharan African wealth and Islamic connectivity in the AP Unit 1 period.'
      }
    },
    {
      id: 'whdai3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "Evaluate the role of religion in facilitating trade across Dar al-Islam c. 700–1450." Which argument is most historically sophisticated?',
            options: [
              'Islam played a multifaceted role in facilitating trade: the shared Arabic language and legal framework (Islamic commercial law) reduced transaction costs across vast distances, while Muslim merchants\' religious networks provided trust mechanisms that non-Muslims lacked — making religion an active commercial infrastructure rather than merely a cultural backdrop',
              'Religion had no impact on trade — merchants only cared about profits regardless of religion',
              'Islam restricted trade by prohibiting commerce with non-Muslims',
              'Trade occurred despite Islam\'s religious rules rather than because of them'
            ],
            correctAnswer: 0,
            explanation: 'This argument is sophisticated because it goes beyond "Muslims were merchants" to explain the MECHANISM: shared language → reduced communication costs; shared law → enforceable contracts across borders; shared religious identity → trust networks enabling credit. Religion was economic infrastructure, not just cultural context.'
          },
          {
            question: 'How did the trans-Saharan trade network under Islamic merchants differ from the Indian Ocean network?',
            options: [
              'Trans-Saharan trade required animal transport (camels) across land, was primarily organized around gold-salt exchange, and relied on Berber intermediaries, while Indian Ocean trade used monsoon-driven ships and was more directly controlled by Arab and Indian Muslim merchant communities',
              'The trans-Saharan network was larger and more economically significant than the Indian Ocean network',
              'Both networks were identical in their use of sailing vessels and commodities',
              'The Indian Ocean network was entirely controlled by Chinese merchants, not Muslims'
            ],
            correctAnswer: 0,
            explanation: 'Contrasting the two networks is a classic AP comparison. Key differences: transport technology (camels vs. ships), primary commodities (gold/salt vs. spices/textiles), intermediary groups (Berber nomads vs. Arab/Indian merchants), and geographic scale. Both connected Islamic commercial civilization, but through very different mechanisms.'
          }
        ]
      }
    }
  ]
}
''')

# ------- PART 4: Political Structures in the Islamic World -------
w('wh-dar-al-islam-part4.ts', '''export const whDarAlIslamPart4Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai4-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 4 of 7 — Political Structures & the Caliphate**

---

| Section |
|---------|
| 📖 The Abbasid Caliphate & Its Fragmentation |
| The Seljuk Turks & Political Change |
| The Delhi Sultanate |
| 📌 Comparing Islamic Political Authority |

> 🔑 **Key Concept:** The Islamic world was politically diverse — the universal caliphate fragmented early, and by 1200 multiple competing Islamic states coexisted. AP questions ask you to explain how Islamic political structures varied and what held the Islamic world together despite political fragmentation.
      `
    },
    {
      id: 'whdai4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Abbasid Caliphate\'s fragmentation after c. 900 CE is significant for AP World History because it demonstrates:',
            options: [
              'That political unity was not necessary for cultural and commercial unity — despite multiple competing Islamic states, Dar al-Islam remained connected through shared religion, language, trade networks, and scholarly institutions',
              'That the Islamic world ceased to exist politically after the Abbasids fell',
              'That political fragmentation always leads to cultural and economic collapse',
              'That the Mongol invasions caused the Abbasid Caliphate to fragment in the 10th century'
            ],
            correctAnswer: 0,
            explanation: 'This is a key AP complexity point: the Islamic world\'s cultural and commercial unity did NOT depend on political unity. While the caliphate fragmented into regional dynasties (Fatimids in Egypt, Buyids in Persia, later Seljuks), Arabic scholarship, Islamic commercial networks, and Hajj pilgrimage continued to create shared identity. Political fragmentation ≠ civilizational collapse.'
          },
          {
            question: 'The Delhi Sultanate (1206–1526) is significant in AP World History primarily because it:',
            options: [
              'Established the first major Islamic political entity in South Asia, governing a Hindu majority population and demonstrating how Islamic rulers adapted to governing non-Muslim populations through a mix of accommodation and assertion',
              'Conquered all of India and forcibly converted the entire population to Islam',
              'Was established by the Mongol Empire as a vassal state',
              'Had no lasting cultural impact on South Asian civilization'
            ],
            correctAnswer: 0,
            explanation: 'The Delhi Sultanate governed a Hindu-majority India for over 300 years. Its strategies — maintaining Hindu administrators, using Persian as a court language, allowing Hindu temples in many areas while building mosques — demonstrate Islamic rulers\' adaptability. Its most famous ruler, Alauddin Khalji, successfully resisted Mongol invasions, protecting South Asian civilization.'
          }
        ]
      }
    },
    {
      id: 'whdai4-content',
      type: 'text' as const,
      content: `
## 📖 Islamic Political Structures c. 1200–1450

> **The Abbasid Caliphate: Rise, Peak, and Fragmentation**

The Abbasid Caliphate (750–1258 CE) represents Islamic political achievement and limitation:

- **Peak:** Baghdad under Caliph Harun al-Rashid (786–809) was the world\'s largest city (~1 million people); center of global scholarship and commerce
- **Fragmentation:** By 900 CE, regional dynasties (Buyids, Fatimids, Samanids) effectively controlled their territories while nominally acknowledging Abbasid authority
- **Mongol destruction:** Hulagu Khan\'s sack of Baghdad (1258) killed the last Abbasid Caliph and destroyed the city — but Islamic civilization survived in Egypt (Mamluks), Persia, India, and elsewhere

> **The Seljuk Turks & Turkish-Islamic Synthesis**

Central Asian Turks converted to Islam and became its military champions:

| Feature | Details |
|---------|---------|
| **Political role** | Seljuks became *sultans* (military rulers) while keeping Abbasid Caliph as nominal religious head |
| **Cultural synthesis** | Blended Turkic military traditions with Persian administrative culture and Islamic religion |
| **Legacy** | Created the Turkish-Islamic synthesis later inherited by the Ottoman Empire |
| **Crusades** | Seljuk control of Jerusalem triggered the First Crusade (1095) |

> **The Delhi Sultanate: Islam in South Asia**

Five successive dynasties governed Muslim-ruled South Asia 1206–1526:

- **Founding:** Qutb-ud-din Aybak (former Mamluk slave) established the Sultanate after Ghurid conquests of northern India
- **Governance challenge:** Ruling a Hindu majority required pragmatism — Hindu administrators retained, temples sometimes protected, sometimes destroyed
- **Cultural legacy:** Persian became the court language; Urdu (blend of Hindi and Persian/Arabic vocabulary) developed; Indo-Islamic architecture (Qutb Minar in Delhi)
- **Resistance to Mongols:** Delhi Sultanate was one of the few states that successfully repelled Mongol invasions multiple times

> **AP Comparison Anchor**

- **Islamic political authority vs. Confucian governance:** Both used educated officials; Islamic governance used religious law (Sharia) as foundation; Chinese governance used Confucian philosophy and civil service exams
- **Delhi Sultanate vs. European feudalism:** Both governed through military elite; Delhi Sultanate governed across religious lines with a Muslim minority ruling Hindu majority — far more complex than Europe\'s religiously uniform feudal states
      `
    },
    {
      id: 'whdai4-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Mongol destruction of Baghdad in 1258 affected the Islamic world primarily by:',
            options: [
              'Destroying the Abbasid Caliphate as a political institution, ending the symbolic center of Islamic authority — but Islamic civilization survived and even flourished in Egypt, Persia, and India, where Mongol rulers eventually converted to Islam',
              'Ending all Islamic scholarship and commerce permanently',
              'Causing the entire Islamic world to fall under Mongol rule for centuries',
              'Having no lasting impact because Baghdad was already irrelevant by 1258'
            ],
            correctAnswer: 0,
            explanation: 'The sack of Baghdad was a trauma — the caliph was killed, the city\'s libraries burned, thousands killed. But the AP story continues: Egypt\'s Mamluks stopped the Mongols at Ain Jalut (1260), Persian Islamic culture absorbed Mongol rulers (Il-Khanate rulers converted to Islam within decades), and Islamic civilization adapted and continued.'
          },
          {
            question: 'The Seljuk Turks\' political arrangement of keeping the Abbasid Caliph as nominal head while exercising actual power as sultans demonstrates:',
            options: [
              'The separation of religious legitimacy (the Caliph as symbolic head of Islam) from military/political power (the Sultan as actual ruler) — a pattern that would recur throughout Islamic political history',
              'That Seljuk Turks rejected Islamic religion while ruling Muslim populations',
              'That the Abbasid Caliphate maintained full political control throughout the Seljuk period',
              'That sultans and caliphs had identical, overlapping powers with no distinction'
            ],
            correctAnswer: 0,
            explanation: 'The Caliph-Sultan arrangement is a key AP pattern: the caliph provided religious legitimacy (Friday prayers said in his name, coins minted with his image) while the sultan exercised actual military and political authority. This separation persisted throughout Islamic political history, including under later Ottoman sultans who claimed the caliphate.'
          },
          {
            question: 'The Delhi Sultanate\'s governance of a Hindu-majority population under Muslim rulers best illustrates:',
            options: [
              'How Islamic states adapted to governing religiously diverse populations by mixing coercive power with pragmatic accommodation of local religious and administrative traditions',
              'That Islam always required forced conversion of all conquered peoples',
              'That Hindu and Muslim populations had no cultural interaction in medieval India',
              'That the Delhi Sultanate was exclusively populated by Arab Muslims with no local Indian influence'
            ],
            correctAnswer: 0,
            explanation: 'The Delhi Sultanate developed the *dhimmi* system (protected non-Muslim subjects paying jizya tax) in South Asian form. Pragmatism often overcame ideological purity: Hindu administrators were needed for their knowledge of local conditions; outright forced conversion would have been administratively impossible and economically counterproductive.'
          }
        ]
      }
    },
    {
      id: 'whdai4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each political structure to its correct description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Turkish rulers who became military champions of Islam while keeping the Abbasid Caliph as nominal religious head were the ___',
            options: ['Seljuk Turks', 'Mongols', 'Mamluks', 'Ottoman Turks']
          },
          {
            label: 'The Islamic state that governed Hindu-majority South Asia for over 300 years, resisting multiple Mongol invasions, was the ___',
            options: ['Delhi Sultanate', 'Abbasid Caliphate', 'Mughal Empire', 'Fatimid Caliphate']
          },
          {
            label: 'The event that ended the Abbasid Caliphate as a political institution but failed to destroy Islamic civilization was the ___',
            options: ['Mongol sack of Baghdad (1258)', 'First Crusade (1095)', 'Battle of Tours (732)', 'Black Death (1347)']
          }
        ],
        correctAnswers: ['Seljuk Turks', 'Delhi Sultanate', 'Mongol sack of Baghdad (1258)'],
        hint1: 'Central Asian Turks who converted to Islam and became its military defenders',
        hint2: 'Five successive Muslim dynasties ruling India 1206–1526',
        hint3: 'Hulagu Khan\'s attack that killed the last Abbasid Caliph',
        explanation: 'The Seljuks created the sultan-caliph arrangement that separated religious from military authority. The Delhi Sultanate demonstrated Islamic governance\'s adaptability to non-Muslim majority populations. The Mongol sack of Baghdad ended the symbolic Islamic political center — but Islamic civilization\'s resilience in surviving this catastrophe is equally important for AP analysis.'
      }
    },
    {
      id: 'whdai4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks: "Evaluate the extent to which political fragmentation undermined Islamic civilization c. 900–1450." Which thesis earns the highest score?',
            options: [
              'Despite significant political fragmentation — the Abbasid Caliphate\'s decline, competing dynasties, and Mongol conquests — Islamic civilization remained unified and even flourished through non-political institutions including Arabic scholarship, Islamic commercial networks, and Hajj pilgrimage, demonstrating that cultural and commercial cohesion does not require political unity',
              'Political fragmentation completely destroyed Islamic civilization',
              'Political unity was maintained throughout this period',
              'The Islamic world had no political problems between 900 and 1450'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns points for: (1) acknowledging the reality of fragmentation (complexity), (2) arguing it did NOT undermine civilization (defensible claim), (3) providing specific counter-mechanisms (Arabic scholarship, commerce, Hajj), and (4) articulating a broader principle (cultural unity ≠ political unity). It sets up a nuanced essay rather than a simple narrative.'
          },
          {
            question: 'What does the conversion of Mongol rulers in Persia and Central Asia to Islam (c. 1260–1295) demonstrate about Islamic civilization?',
            options: [
              'Islamic civilization\'s cultural and institutional strength was powerful enough to absorb and convert its conquerors — the Mongols who destroyed Baghdad\'s political center ultimately adopted the civilization they had conquered',
              'The Mongols converted to Islam before their invasions',
              'Islam was forced upon Mongol rulers by surviving Abbasid leaders',
              'Mongol conversion to Islam had no significant historical consequences'
            ],
            correctAnswer: 0,
            explanation: 'The Mongols\' conversion is a powerful AP example of civilizational resilience: a nomadic people who militarily conquered an advanced civilization were culturally absorbed by it. This pattern — where politically dominant groups adopt the culture of the politically subordinate — is called "reverse acculturation" and the AP exam rewards students who can identify and explain it.'
          }
        ]
      }
    }
  ]
}
''')

# ------- PART 5: Social Structures & Gender in the Islamic World -------
w('wh-dar-al-islam-part5.ts', '''export const whDarAlIslamPart5Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai5-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 5 of 7 — Social Structures & Gender**

---

| Section |
|---------|
| 📖 Social Hierarchy in the Islamic World |
| Gender & Women in Islamic Societies |
| Slavery in Dar al-Islam |
| 📌 Comparing Social Structures Across Civilizations |

> 🔑 **Key Concept:** The Islamic world had distinct social structures shaped by Islamic law (Sharia), the *dhimmi* system for non-Muslims, and varying gender norms across different regions. AP questions ask you to compare Islamic social structures with other contemporary civilizations and evaluate how religion shaped social organization.
      `
    },
    {
      id: 'whdai5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The dhimmi system in Islamic societies was significant because it:',
            options: [
              'Provided a legal status for non-Muslim "People of the Book" (Jews, Christians, Zoroastrians) that allowed them to practice their religion and maintain their communities in exchange for paying a special tax (jizya) and accepting certain restrictions',
              'Required all non-Muslims to convert to Islam within one year of conquest',
              'Expelled all non-Muslims from Islamic territories',
              'Gave non-Muslims identical rights to Muslim subjects'
            ],
            correctAnswer: 0,
            explanation: 'The dhimmi system was neither full equality nor genocide — it was a pragmatic accommodation that allowed multi-religious societies to function under Islamic governance. Dhimmis could not build new houses of worship or hold the highest offices, but they could practice their religion, conduct commerce, and participate in intellectual life. Jewish and Christian scholars worked at the House of Wisdom alongside Muslims.'
          },
          {
            question: 'Women\'s rights in classical Islamic law (Sharia) compared to contemporary European Christian societies were:',
            options: [
              'In some respects more legally protective: the Quran guaranteed women inheritance rights (though typically half of men\'s), the right to own property, and limited divorce rights — rights that European women largely lacked under medieval Christian canon law',
              'Identical to European women\'s rights in all respects',
              'Far more restrictive in every legal category',
              'Completely unrestricted — Islamic law granted women full equality in all areas'
            ],
            correctAnswer: 0,
            explanation: 'This comparison requires nuance: Islamic law gave women inheritance rights, property ownership, and *mahr* (bridal gift that belonged to the wife), which medieval European women largely lacked. However, both systems were fundamentally patriarchal — Islamic women had more legal protections in some areas, but faced restrictions in others (testimony, mobility, divorce initiation). AP rewards this kind of qualified comparison.'
          }
        ]
      }
    },
    {
      id: 'whdai5-content',
      type: 'text' as const,
      content: `
## 📖 Social Structures in Dar al-Islam

> **Social Hierarchy in the Islamic World**

Islamic societies were stratified, but differently from caste or feudal systems:

| Group | Status | Notes |
|-------|--------|-------|
| **Free Muslim men** | Highest legal status | Access to all occupations, government |
| **Free Muslim women** | Legal persons; restricted in mobility | Property rights; marriage contract rights |
| **Dhimmis (People of the Book)** | Protected but restricted non-Muslims | Paid jizya; could not hold highest offices; distinct dress in some periods |
| **Converts (Mawali)** | Technically equal as Muslims; sometimes socially inferior | Arab Muslims sometimes looked down on non-Arab converts |
| **Enslaved people** | Property under Islamic law | Could be freed; children of Muslim men born to enslaved mothers were free |

> **Gender & Women in Islamic Societies**

Women\'s status varied significantly by class, region, and period:

- **Quran\'s protections:** Inheritance rights (typically ½ of male relatives); property ownership; *mahr* (bridal gift to wife, not family); right to divorce in certain circumstances
- **Restrictions:** Four witnesses required to prove rape; men could divorce more easily than women; purdah (seclusion) among elite women; women\'s testimony worth half a man\'s in some courts
- **Elite women\'s power:** Khadijah (Muhammad\'s first wife) was a successful merchant; Aisha (Muhammad\'s wife) was a political and religious authority; elite women endowed madrasas and mosques through waqf
- **Regional variation:** Purdah was stricter in urban Middle East; rural and nomadic women had more freedom of movement

> **Slavery in the Islamic World**

Slavery was legal, widespread, and took distinctive forms in Dar al-Islam:

- **Sources:** Trans-Saharan trade (enslaved sub-Saharan Africans); Central Asian warfare; Mediterranean piracy
- **Functions:** Household service; concubinage; MILITARY (Mamluks, Janissaries); administration
- **Mamluks:** Enslaved soldiers who rose to become one of the most powerful military forces in the medieval world — and eventually overthrew their masters to rule Egypt (1250–1517)
- **Legal protections:** Masters prohibited from working enslaved people to death; children of Muslim men born to enslaved women were free; manumission (freeing enslaved people) was considered a virtuous act

> **AP Comparison Anchor**

- **Islamic slavery vs. Atlantic slavery:** Islamic slavery was multi-functional (military, household, administrative), not primarily agricultural, and race was not the defining criterion; Atlantic slavery (post-1500) was racially defined, primarily agricultural, and hereditary — fundamentally different systems
- **Islamic gender norms vs. Chinese gender norms:** Both patriarchal; Islamic law gave more formal legal rights; Chinese Neo-Confucian norms physically enforced subordination through foot binding — different mechanisms of patriarchy
      `
    },
    {
      id: 'whdai5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Mamluk phenomenon — enslaved soldiers who overthrew their masters to rule Egypt — best illustrates:',
            options: [
              'How military slavery in the Islamic world could create pathways to power that differed fundamentally from agricultural slavery, with enslaved soldiers sometimes accumulating enough military resources to seize political authority',
              'That Islamic slavery was always benign and non-exploitative',
              'That enslaved people in all societies routinely achieved political power through military service',
              'That the Mamluks were free soldiers who chose to serve as bodyguards'
            ],
            correctAnswer: 0,
            explanation: 'The Mamluk paradox — enslaved people ruling one of the most powerful states in the Islamic world — is a uniquely Islamic phenomenon. Their military value gave them political leverage unavailable to agricultural enslaved people. The Mamluks\' 1260 victory over the Mongols at Ain Jalut saved Islamic civilization in the Middle East and stopped Mongol westward expansion.'
          },
          {
            question: 'A Muslim merchant woman in 13th-century Cairo had which COMBINATION of rights and restrictions?',
            options: [
              'Could legally own property, enter contracts, and inherit assets (Quran-guaranteed), but faced social restrictions on public mobility (purdah among elites) and her testimony might be valued at half a male witness\'s in court',
              'Had identical rights to Muslim men in all legal and social matters',
              'Had no legal rights whatsoever under Islamic law',
              'Could only own property if her husband granted permission in writing'
            ],
            correctAnswer: 0,
            explanation: 'This question captures the complexity of women\'s status in Islamic societies: genuine legal rights (property, contracts, inheritance) coexisted with genuine restrictions (purdah, testimony rules, easier male divorce). AP rewards nuanced analysis that neither romanticizes nor demonizes — but accurately describes the combination of rights and restrictions.'
          },
          {
            question: 'The dhimmi system\'s historical significance for AP World History is that it demonstrates:',
            options: [
              'A distinctive Islamic approach to governing multi-religious societies through formal legal accommodation rather than forced conversion or expulsion — pragmatic multi-religious coexistence under Islamic political authority',
              'That Islamic rulers uniformly persecuted all non-Muslims throughout history',
              'That all non-Muslims were immediately enslaved upon conquest by Islamic armies',
              'That Islamic societies were religiously homogeneous with no significant non-Muslim populations'
            ],
            correctAnswer: 0,
            explanation: 'The dhimmi system is evidence of pragmatic multi-religious governance. AP questions often ask about how Islamic rulers managed religious diversity — the dhimmi system is the primary answer. It was neither equality nor persecution, but a legal framework for coexistence that varied in practice across time and region.'
          }
        ]
      }
    },
    {
      id: 'whdai5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each social structure concept to its correct description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The legal status in Islamic law for non-Muslim "People of the Book" who paid a special tax in exchange for religious protection was ___',
            options: ['Dhimmi', 'Mawali', 'Mamluk', 'Waqf']
          },
          {
            label: 'Enslaved soldiers in the Islamic world who eventually overthrew their masters to rule Egypt (1250–1517) were the ___',
            options: ['Mamluks', 'Janissaries', 'Seljuks', 'Mongols']
          },
          {
            label: 'The Quranic guarantee that women in Islamic societies held compared to medieval European women was the right to ___',
            options: ['Inherit property', 'Hold political office', 'Command armies', 'Become caliphs']
          }
        ],
        correctAnswers: ['Dhimmi', 'Mamluks', 'Inherit property'],
        hint1: 'Protected non-Muslim subjects paying jizya tax',
        hint2: 'Enslaved soldiers who seized political power in Egypt',
        hint3: 'Quranic right — typically half of male relatives\' share',
        explanation: 'The dhimmi system enabled multi-religious societies under Islamic rule. The Mamluks exemplify how military slavery in Islam differed from agricultural slavery — creating pathways to power. Women\'s inheritance rights, though less than men\'s, gave Islamic women legal standing that medieval European women largely lacked.'
      }
    },
    {
      id: 'whdai5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks you to compare gender norms in Song China and the Islamic world c. 1200–1450. Which answer demonstrates the most historical sophistication?',
            options: [
              'Both societies were patriarchal, but through different mechanisms: Song China\'s Neo-Confucian norms physically enforced female subordination through foot binding and restricted women\'s public roles, while Islamic law simultaneously restricted women (purdah, testimony rules) AND granted them legal rights (property, inheritance, contracts) largely absent in China',
              'Women in both societies had identical rights',
              'Islamic women had complete equality while Chinese women had none',
              'Foot binding was practiced in both Song China and the Islamic world'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns complexity points by: (1) acknowledging the shared pattern (both patriarchal), (2) comparing mechanisms rather than just outcomes, (3) noting the contradiction within Islamic women\'s status (restrictions AND rights simultaneously), and (4) using specific evidence (foot binding, Quran-guaranteed inheritance). This is exactly the nuance AP readers reward.'
          },
          {
            question: 'How did pre-1450 Islamic slavery differ most fundamentally from post-1500 Atlantic plantation slavery?',
            options: [
              'Islamic slavery was multi-functional (military, administrative, household), not racially codified as permanent hereditary status, and allowed greater possibilities for manumission and social mobility — fundamentally different from the racially defined, agriculturally organized, and largely hereditary Atlantic system',
              'Islamic slavery and Atlantic slavery were identical in all respects',
              'Islamic slavery was more economically significant than Atlantic slavery',
              'Atlantic slavery was less violent than Islamic slavery'
            ],
            correctAnswer: 0,
            explanation: 'This distinction is crucial for AP comparative analysis. The AP framework asks students to avoid anachronism — judging pre-1450 slavery by post-1500 Atlantic standards. The key differences: race as defining criterion (Atlantic: yes; Islamic: no), primary function (Atlantic: plantation agriculture; Islamic: multi-functional), hereditary nature (Atlantic: strongly hereditary; Islamic: weaker hereditary norm), and scale of forced migration.'
          }
        ]
      }
    }
  ]
}
''')

# ------- PART 6: The Mongol Impact on Dar al-Islam -------
w('wh-dar-al-islam-part6.ts', '''export const whDarAlIslamPart6Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai6-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 6 of 7 — The Mongol Impact & Recovery**

---

| Section |
|---------|
| 📖 The Mongol Invasions of the Islamic World |
| The Il-Khanate: Mongol Rulers in Persia |
| Islamic Recovery & Resilience |
| 📌 CCOT: Dar al-Islam Before and After the Mongols |

> 🔑 **Key Concept:** The Mongol invasions of the 13th century were the most traumatic external shock to Islamic civilization before the modern era — yet the Islamic world proved remarkably resilient, and the Mongol rulers of Persia eventually converted to Islam. This resilience and absorption of conquerors is a key AP argument.
      `
    },
    {
      id: 'whdai6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Mongol sack of Baghdad in 1258 is considered a turning point in Islamic history primarily because:',
            options: [
              'It destroyed the Abbasid Caliphate (the symbolic center of Islamic political authority), killed enormous numbers of scholars and civilians, and ended Baghdad\'s role as the world\'s premier intellectual and commercial center — though Islamic civilization recovered in other centers like Cairo and Tabriz',
              'It permanently ended all Islamic scholarship and ended Dar al-Islam as a functioning civilization',
              'It was the first military defeat ever suffered by Islamic forces',
              'It caused the entire Islamic world to convert to Mongol religious beliefs'
            ],
            correctAnswer: 0,
            explanation: 'The 1258 sack killed perhaps 200,000-800,000 people (estimates vary wildly), destroyed the House of Wisdom and its libraries, and killed the last Abbasid Caliph. But the story doesn\'t end there — Egypt\'s Mamluks stopped the Mongols at Ain Jalut (1260), and the Mongol Il-Khanate rulers converted to Islam within decades. Destruction and resilience must both be analyzed.'
          },
          {
            question: 'The Battle of Ain Jalut (1260), where Egyptian Mamluk forces defeated the Mongols, was historically significant because:',
            options: [
              'It was one of the first major military defeats of a Mongol army, stopping Mongol westward expansion into North Africa and the western Islamic world, and demonstrating that the Mongols were not invincible',
              'It ended the Mongol Empire entirely and immediately',
              'It was fought by Crusader forces, not Muslim armies',
              'It had no strategic significance since the Mongols were already planning to retreat'
            ],
            correctAnswer: 0,
            explanation: 'Ain Jalut is a major turning point: the Mongol army (accompanied by Christian Armenian and Georgian allies) was stopped by enslaved soldiers who had seized power in Egypt. This is both an AP example of Mamluk significance AND of the limits of Mongol expansion — the Mongols never conquered North Africa or the western Mediterranean.'
          }
        ]
      }
    },
    {
      id: 'whdai6-content',
      type: 'text' as const,
      content: `
## 📖 Mongol Impact on Dar al-Islam

> **The Invasions: Scale and Trauma**

The Mongol invasions c. 1219–1260 devastated the eastern Islamic world:

| Event | Date | Impact |
|-------|------|--------|
| **Conquest of Khwarezm** | 1219–1221 | Destruction of major Central Asian Islamic cities (Samarkand, Bukhara) |
| **Sack of Baghdad** | 1258 | Last Abbasid Caliph killed; House of Wisdom destroyed; city depopulated |
| **Battle of Ain Jalut** | 1260 | Mamluks stop Mongol westward expansion in Palestine |

The psychological and material devastation was immense: irrigation systems destroyed, populations killed or fled, agricultural land abandoned, urban centers depopulated. Central Asian and Persian Islamic civilization lost centuries of accumulated infrastructure.

> **The Il-Khanate: Mongol Rulers of Persia**

The Il-Khanate (1256–1335) governed Persia/Iraq under Mongol rule:

- **Initially hostile to Islam:** Early Il-Khans patronized Buddhism and Christianity; Baghdad\'s sack
- **Gradual conversion:** Ghazan Khan (r. 1295–1304) converted to Sunni Islam, declared Islam the state religion
- **Cultural synthesis:** Under converted rulers, Persian-Islamic art, architecture, and scholarship flourished — the Il-Khanate became a center of Persian miniature painting and historical writing
- **Rashid al-Din:** Il-Khanate\'s Persian vizier wrote *Jami\' al-Tawarikh* (Compendium of Chronicles) — the first world history written by a non-European

> **Islamic Recovery & Resilience**

The Islamic world\'s recovery demonstrated structural strengths:

- **Egypt under Mamluks:** Cairo became the new center of Islamic political and intellectual life; the Mamluks sheltered the Abbasid Caliph as a figurehead (no political power, but symbolic)
- **Anatolia:** Rum Seljuks, then Ottoman Turks, maintained Islamic governance in western Anatolia
- **India:** Delhi Sultanate successfully resisted Mongol invasions, preserving South Asian Islamic civilization
- **Trade recovery:** Indian Ocean and trans-Saharan trade continued; by 1300s, Pax Mongolica briefly stimulated Silk Road commerce

> **AP Comparison Anchor**

- **Mongol impact: destruction AND transmission:** The same Mongol Empire that destroyed Baghdad also connected Eurasia through the Pax Mongolica, facilitating both plague and commerce — AP requires holding both truths simultaneously
- **Islamic resilience:** The ability of Islamic civilization to survive the Mongol trauma through decentralized institutions (waqf, madrasa, trade networks) independent of the caliphate demonstrates that civilizational strength is not dependent on political centralization
      `
    },
    {
      id: 'whdai6-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ghazan Khan\'s conversion to Islam (1295) is significant for AP World History because it demonstrates:',
            options: [
              'The pattern of cultural absorption — conquerors (Mongols) adopting the religion and culture of the conquered (Islamic Persia) — showing that civilizational influence can outlast political defeat',
              'That the Mongols had been secretly Muslim before their invasions of the Islamic world',
              'That conversion to Islam was required by the Mamluk treaty ending the Battle of Ain Jalut',
              'That Islamic forces militarily forced Ghazan\'s conversion'
            ],
            correctAnswer: 0,
            explanation: 'Ghazan\'s conversion exemplifies the "reverse acculturation" pattern: militarily dominant Mongols adopting the culture of their subjects. This pattern appears throughout AP World History (e.g., Germanic tribes adopting Roman Christianity; Manchu adopting Chinese culture). The conquered civilization\'s institutional depth — madrasas, waqf, trade networks — survived the conquest and absorbed the conquerors.'
          },
          {
            question: 'How did the Pax Mongolica affect trade and communication across Eurasia in the 13th–14th centuries?',
            options: [
              'The Mongol Empire\'s control of vast territory temporarily made overland trade safer and faster, enabling increased commerce and cultural exchange — but also creating the connected networks through which the Black Death spread catastrophically',
              'The Pax Mongolica only affected trade within China and had no impact on Islamic or European commerce',
              'The Mongol Empire completely stopped all Silk Road trade for centuries',
              'The Pax Mongolica exclusively benefited Christian European merchants'
            ],
            correctAnswer: 0,
            explanation: 'The Pax Mongolica had two faces: it created unprecedented Eurasian connectivity (Marco Polo\'s travels became possible; Ibn Battuta traveled freely across Mongol-controlled territory) AND it created the network that transmitted plague from Central Asia to the Mediterranean. AP rewards students who can explain both the benefits and catastrophic costs of this connectivity.'
          },
          {
            question: 'Cairo\'s rise as the dominant center of Islamic political and intellectual life after 1258 best illustrates which AP principle?',
            options: [
              'The geographic flexibility of Islamic civilization — when one center (Baghdad) was destroyed, institutional strengths (scholarship, trade networks, Islamic law) were replicated in another center (Cairo), demonstrating resilience through decentralization',
              'That Islamic civilization was only ever concentrated in one city at a time',
              'That the Mongols controlled Cairo and directed Islamic scholarship from there',
              'That Egyptian culture was always superior to Mesopotamian culture'
            ],
            correctAnswer: 0,
            explanation: 'Cairo\'s emergence demonstrates an AP key concept: Islamic civilization\'s strength came partly from its decentralized institutions. The waqf system, madrasas, Islamic commercial law, and Arabic scholarship were not dependent on Baghdad or any single political center — they could be recreated wherever Islamic communities existed, including Egypt under the Mamluks.'
          }
        ]
      }
    },
    {
      id: 'whdai6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each event or concept to its historical significance.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The 1260 battle where Egyptian Mamluk soldiers stopped Mongol westward expansion was ___',
            options: ['Battle of Ain Jalut', 'Battle of Baghdad', 'Battle of Tours', 'Battle of Manzikert']
          },
          {
            label: 'The Mongol ruler of Persia who converted to Islam in 1295, making Islam the Il-Khanate\'s state religion, was ___',
            options: ['Ghazan Khan', 'Hulagu Khan', 'Genghis Khan', 'Kublai Khan']
          },
          {
            label: 'The period of relative Eurasian peace under unified Mongol rule that facilitated both trade and plague spread was the ___',
            options: ['Pax Mongolica', 'Pax Romana', 'Abbasid Peace', 'Mamluk Era']
          }
        ],
        correctAnswers: ['Battle of Ain Jalut', 'Ghazan Khan', 'Pax Mongolica'],
        hint1: '1260 — Mamluks defeat Mongols in Palestine',
        hint2: 'Il-Khanate ruler who converted 1295',
        hint3: 'Latin: "Mongol Peace" — safety and plague simultaneously',
        explanation: 'Ain Jalut stopped Mongol expansion and demonstrated Mamluk military power. Ghazan\'s conversion exemplifies the civilizational absorption of conquerors that Islamic institutional strength made possible. The Pax Mongolica represents the paradox of connectivity: safer routes meant more commerce AND more plague — both consequences of the same Mongol unification.'
      }
    },
    {
      id: 'whdai6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A CCOT essay asks: "Describe change and continuity in Dar al-Islam c. 1200–1400." Which thesis structure earns the highest score?',
            options: [
              'While the Mongol invasions dramatically changed the political landscape (destroying Baghdad, ending the Abbasid Caliphate, shifting the center of Islamic political authority to Cairo), the fundamental institutions of Islamic civilization — Arabic scholarship, trade networks, madrasas funded by waqf — demonstrated remarkable continuity through and after this disruption',
              'Everything about the Islamic world changed between 1200 and 1400',
              'Nothing changed in the Islamic world between 1200 and 1400',
              'The Mongols had no impact on the Islamic world'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns full CCOT rubric points: (1) specific change identified (Mongol destruction, caliphate end, Cairo\'s rise), (2) specific continuity identified (Islamic institutions), (3) both dimensions addressed in one defensible claim, (4) implies causation (why continuity persisted despite disruption). This is model CCOT structure.'
          },
          {
            question: 'The Mongol Empire\'s relationship to Islamic civilization is best described as:',
            options: [
              'Contradictory and complex — the Mongols simultaneously destroyed Islamic political centers, transmitted plague, and facilitated trade (Pax Mongolica), while eventually being culturally absorbed into Islam, making simple "destructive" or "beneficial" verdicts historically inaccurate',
              'Exclusively destructive with no positive dimensions',
              'Exclusively beneficial because the Pax Mongolica stimulated commerce',
              'Irrelevant to Islamic history since the Mongols never entered Islamic territory'
            ],
            correctAnswer: 0,
            explanation: 'The Mongol-Islamic relationship is the AP exam\'s favorite example of historical complexity in this period. Any single-verdict answer (all bad, all good) fails the complexity standard. The most sophisticated AP response holds contradictory truths simultaneously: the same empire that murdered hundreds of thousands also connected Eurasia and then converted to the religion it had tried to destroy.'
          }
        ]
      }
    }
  ]
}
''')

# ------- PART 7: AP Review — Dar al-Islam -------
w('wh-dar-al-islam-part7.ts', '''export const whDarAlIslamPart7Data = {
  topicSlug: 'wh-dar-al-islam',
  sections: [
    {
      id: 'whdai7-intro',
      type: 'text' as const,
      content: `
# 🌍 Dar al-Islam (c. 1200–1450)

**Part 7 of 7 — AP Review & Exam Mastery**

---

| Section |
|---------|
| 📖 High-Yield Vocabulary |
| Common AP Prompt Patterns |
| Evidence Deployment Strategies |
| 📌 Pulling It All Together |

> 🔑 **Key Concept:** The AP exam tests Dar al-Islam content through MCQ (stimulus and non-stimulus), SAQ, LEQ, and DBQ questions. Mastering specific vocabulary, understanding comparison and causation patterns, and deploying precise evidence efficiently are the keys to high scores on this topic.
      `
    },
    {
      id: 'whdai7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP SAQ asks: "Identify and explain ONE way the Islamic world influenced intellectual developments in medieval Europe." Which response earns full credit?',
            options: [
              'Islamic scholars translated Greek philosophical and scientific texts into Arabic and added original commentary; these Arabic texts were then translated into Latin in Spain and Sicily (c. 1100–1200), introducing Aristotelian logic, algebra, and Ibn Sina\'s medical knowledge to European universities and shaping scholastic philosophy',
              'Islamic scholars fought against European intellectual development',
              'European scholars independently rediscovered all Greek texts without Islamic intermediaries',
              'The Islamic world had no contact with medieval Europe'
            ],
            correctAnswer: 0,
            explanation: 'This SAQ response earns full credit: specific Islamic contribution (translation + original scholarship), specific mechanism (Arabic → Latin translation in Spain/Sicily), specific impact on Europe (Aristotelian logic at universities, algebra, Ibn Sina\'s medicine), and implicit causation (the transmission chain). Three sentences, three elements: claim + evidence + reasoning.'
          },
          {
            question: 'For an AP LEQ comparing Islam\'s political and cultural unity c. 1200–1450, what is the best complexity move?',
            options: [
              'Acknowledge that while Dar al-Islam lacked political unity (competing caliphates, dynasties, Mongol fragmentation), it maintained cultural and commercial unity through non-political institutions — demonstrating that civilizational cohesion does not require political centralization',
              'Argue that the Islamic world was perfectly unified politically throughout this period',
              'Ignore political fragmentation entirely and focus only on cultural unity',
              'Argue that no cultural unity existed in the Islamic world'
            ],
            correctAnswer: 0,
            explanation: 'This complexity move earns points by identifying a contradiction within the argument (political fragmentation + cultural unity) and using that contradiction to articulate a broader principle (civilizational coherence ≠ political centralization). AP complexity points require more than additional facts — they require a move that qualifies, extends, or complicates the main argument.'
          }
        ]
      }
    },
    {
      id: 'whdai7-content',
      type: 'text' as const,
      content: `
## 📖 AP Review: High-Yield Vocabulary & Strategies

> **Must-Know Vocabulary for AP Dar al-Islam Questions**

- **Dar al-Islam** — "House of Islam"; the interconnected world of Islamic civilization
- **Abbasid Caliphate** — Dominant Islamic dynasty 750–1258; center in Baghdad
- **Madrasa** — Islamic school; spread standardized religious and scientific education
- **Waqf** — Islamic charitable endowment; funded madrasas and mosques, protected from government seizure
- **Dhimmi** — Non-Muslim "People of the Book" under Islamic governance; paid jizya for religious protection
- **Sufi** — Mystical Islamic tradition; key mechanism for peaceful Islamic spread along trade routes
- **Mudaraba** — Islamic commercial partnership; allowed profit-sharing without charging interest
- **Pax Mongolica** — "Mongol Peace"; period of relative Eurasian safety enabling Silk Road commerce (and plague spread)
- **Mamluk** — Enslaved soldier; the Mamluks of Egypt stopped the Mongols and preserved Islamic civilization
- **Al-Khwarizmi** — Islamic mathematician; developed algebra; transmitted Hindu-Arabic numerals
- **Ibn Battuta** — Islamic traveler; *Rihla* documents 44 modern countries c. 1325–1354

> **Common AP Prompt Patterns for Dar al-Islam**

- **Causation:** Why did Islam spread so successfully across Afro-Eurasia c. 700–1450?
- **Comparison:** How did Islamic political structures compare to Confucian governance in China?
- **CCOT:** What changed and what remained stable in Dar al-Islam between 1200 and 1450?
- **Evaluation:** To what extent did the Mongol invasions undermine Islamic civilization?
- **DBQ documents:** Travel accounts (Ibn Battuta), merchant records, architectural descriptions, conversion accounts

> **AP Comparison Anchor**

**Key comparison pairs for LEQ/SAQ:**

| Comparison | Key Difference | Key Similarity |
|-----------|---------------|----------------|
| Islam vs. Confucianism (governance) | Sharia vs. civil service exams | Both justified hierarchy; both meritocratic in theory |
| Islamic trade vs. Chinese tributary trade | Private merchant networks vs. state-controlled tribute | Both spread religion and goods along established routes |
| Islamic slavery vs. Atlantic slavery | Non-racial, multi-functional vs. racial, plantation-based | Both involved forced labor and long-distance migration |
| Islamic women vs. Song Chinese women | Quran-guaranteed property rights vs. foot binding enforcement | Both patriarchal societies with restricted female public roles |
      `
    },
    {
      id: 'whdai7-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP MCQ asks which event BEST demonstrates Islamic civilization\'s resilience after the Mongol invasions. Which answer is correct?',
            options: [
              'The Mamluk victory at Ain Jalut (1260) and Cairo\'s emergence as the new center of Islamic political and intellectual authority, preserving core Islamic institutions after Baghdad\'s destruction',
              'The Mongol conversion to Islam before their invasions',
              'The reconstruction of Baghdad as an even larger city within 10 years of 1258',
              'The European Crusaders\' protection of Islamic scholars during the Mongol invasions'
            ],
            correctAnswer: 0,
            explanation: 'Ain Jalut + Cairo\'s rise is the strongest evidence pair for Islamic resilience: Ain Jalut showed military capacity to defeat the Mongols, while Cairo\'s cultural florescence showed that Islamic institutional life relocated and continued. Together, they demonstrate that Islamic civilization was not dependent on any single political center.'
          },
          {
            question: 'Which best explains WHY Islamic trade networks were more commercially sophisticated than contemporary European trade c. 1200–1300?',
            options: [
              'Islamic commercial law (mudaraba partnerships, suftaja credit instruments, waqf-funded infrastructure) provided a developed legal and financial framework for long-distance trade that European commercial law had not yet developed to the same extent',
              'Islamic merchants had access to better ships than European merchants',
              'The Quran specifically commanded Muslims to be merchants',
              'European merchants were prohibited by the Catholic Church from all commercial activity'
            ],
            correctAnswer: 0,
            explanation: 'The sophistication of Islamic commerce was institutional: mudaraba partnerships financed voyages without usury; suftaja bills of exchange eliminated the need to carry gold; waqf-funded caravanserais provided commercial infrastructure along routes. European commercial sophistication would catch up — partly by learning from Islamic financial innovations through contact in Spain and the Crusades.'
          },
          {
            question: 'For AP DBQ analysis, which primary source type is MOST useful for understanding Dar al-Islam\'s commercial networks c. 1200–1450?',
            options: [
              'Travel accounts like Ibn Battuta\'s Rihla and merchant letters from the Cairo Geniza, which document commercial practices, prices, commodities, and the extent of Islamic trading communities across Afro-Eurasia',
              'European Crusader chronicles, which describe the Islamic world from a hostile external perspective',
              'Chinese imperial records, which focus exclusively on East Asian affairs',
              'Archaeological evidence from mosques, which documents religious rather than commercial activity'
            ],
            correctAnswer: 0,
            explanation: 'The Cairo Geniza (a storeroom of medieval Jewish merchant letters preserved in a Cairo synagogue) and Ibn Battuta\'s travel account are premier primary sources for Islamic commercial life. AP DBQ preparation should recognize that merchants\' own records provide unmediated evidence of commercial practices, routes, commodities, and the extent of trading networks.'
          }
        ]
      }
    },
    {
      id: 'whdai7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each AP vocabulary term to its correct definition.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Islamic charitable endowment that funded madrasas and mosques while protecting them from government seizure was the ___',
            options: ['Waqf', 'Jizya', 'Mudaraba', 'Sharia']
          },
          {
            label: 'The Islamic travel account documenting 44 modern countries c. 1325-1354 was Ibn Battuta\'s ___',
            options: ['Rihla', 'Canon of Medicine', 'Compendium of Chronicles', 'Muqaddimah']
          },
          {
            label: 'The non-Muslim "People of the Book" who lived under Islamic governance with religious protection in exchange for paying a special tax were ___',
            options: ['Dhimmi', 'Mawali', 'Mamluk', 'Sufi']
          }
        ],
        correctAnswers: ['Waqf', 'Rihla', 'Dhimmi'],
        hint1: 'Charitable endowment — institutionally protected from political changes',
        hint2: 'Travel account — Arabic word meaning "journey"',
        hint3: 'Protected non-Muslims — paid jizya tax',
        explanation: 'Waqf provided the institutional stability that allowed Islamic scholarship to survive caliphate collapses. The Rihla is the premier primary source for understanding Dar al-Islam\'s geographic extent and cultural practices. Dhimmi status was the Islamic legal framework for multi-religious governance — neither forced conversion nor expulsion, but regulated coexistence.'
      }
    },
    {
      id: 'whdai7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ prompt asks: "Evaluate the extent to which Islam served as a unifying force across Dar al-Islam c. 1200–1450." What is the strongest thesis?',
            options: [
              'Islam served as the primary unifying force across a politically fragmented Islamic world, as shared Arabic language, Islamic commercial law, and the hajj pilgrimage created cultural and commercial cohesion that transcended political divisions between competing caliphates and dynasties',
              'Islam had no unifying effect on the Islamic world',
              'Political unity was the primary unifying force, not religion',
              'Islam only unified Arab populations, not Turks, Persians, or Africans'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns all three LEQ rubric points: (1) historically defensible claim, (2) specific line of reasoning (three non-political mechanisms), (3) names categories of evidence (Arabic language, commercial law, hajj). It also implicitly addresses the complexity problem: the political world WAS fragmented, but Islam unified through non-political channels. Strong setup for a sophisticated multi-paragraph essay.'
          },
          {
            question: 'An AP question asks you to evaluate a historical argument that "the Islamic world made no original intellectual contributions, only preserving Greek knowledge." How do you most effectively counter this argument?',
            options: [
              'Al-Khwarizmi\'s development of algebra (a genuinely new mathematical field) and Ibn al-Haytham\'s optics (going far beyond Greek optics theory) demonstrate that Islamic scholars were actively generative, not merely archival — producing knowledge that exceeded Greek originals and shaped European scientific development',
              'By agreeing that Islamic scholars only preserved, not created',
              'By arguing that Greek knowledge was not preserved at all in the Islamic world',
              'By focusing only on Islamic religious scholarship'
            ],
            correctAnswer: 0,
            explanation: 'Countering this argument requires specific evidence of original creation: algebra (Al-Khwarizmi), optics (Ibn al-Haytham), medical synthesis (Ibn Sina\'s Canon exceeded Galen). The word "algebra" derives from Al-Khwarizmi\'s work — making its Arabic origin linguistically traceable. AP rewards students who can deploy specific, named evidence to challenge reductive historical narratives.'
          }
        ]
      }
    }
  ]
}
''')

print("\\nAll wh-dar-al-islam parts 2-7 written successfully!")
