export const whGlobalTapestryPart2Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whglobal2-intro',
      type: 'text' as const,
      content: `
# 🌍 The Global Tapestry (c. 1200–1450)

**Part 2 of 7 — State Power & Political Organization**

---

| Section |
|---------|
| 📖 Confucian Governance in East Asia |
| Islamic Political Structures |
| European Feudalism vs. Other Systems |
| 📌 AP Comparison: Political Organization |

> 🔑 **Key Concept:** How states organized political power — through bureaucracy, religion, or military hierarchy — is a core AP Unit 1 theme. Comparing these systems across civilizations is frequently tested.
      `
    },
    {
      id: 'whglobal2-content',
      type: 'text' as const,
      content: `
## 📖 Governing Diverse Civilizations

> **Confucian Bureaucracy (East Asia)**

China's Song and later Ming dynasties governed through a **meritocratic civil service system** rooted in Confucian classics. Scholar-officials (*shi*) staffed the bureaucracy after passing rigorous exams. Key features:

- **Centralized authority** flowed from the emperor downward through appointed officials
- **Neo-Confucianism** justified hierarchy: ruler over subject, father over son, husband over wife
- Korea (Koryo/Choson) adopted similar exam systems; Japan and Vietnam selectively borrowed these ideas

> **Islamic Political Structures**

In regions under Islamic rule (c. 1200–1450), governance blended religious and political authority:

- **Delhi Sultanate:** Muslim rulers over a Hindu majority; used Persian administrative models; Sharia influenced but did not fully replace local law
- **Abbasid Caliphate (Baghdad, until 1258):** combined caliph's religious and political authority; fragmented by regional dynasties before the Mongol destruction
- **Mali Empire:** rulers used Islam to legitimize trade and connections with the broader Islamic world while maintaining local traditions

> **European Feudalism**

Medieval Europe governed through decentralized **feudal contracts** rather than bureaucratic hierarchy:

- Power flowed from land ownership: kings granted land to lords in exchange for military service
- No professional bureaucracy; local lords held judicial, economic, and military power
- The **Catholic Church** provided the only pan-European institution of authority

> **AP Comparison Anchor**

- **China vs. Europe:** Centralized meritocracy vs. decentralized hereditary aristocracy
- **Delhi Sultanate vs. Mali Empire:** Both Islamic-ruled societies with different strategies for managing non-Muslim populations
- **Theme:** All states faced the challenge of legitimizing authority — through Confucian hierarchy, Islamic law, or feudal obligation
      `
    },
    {
      id: 'whglobal2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Song Dynasty China\'s civil service examination system is significant in AP World History primarily because it:',
            options: [
              'Created a merit-based route into government through mastery of the Confucian classics',
              'Opened government posts to Buddhist monks trained in the scriptures of the great monasteries',
              'Let the emperor choose officials from the aristocratic clans that had dominated since the Han',
              'Replaced the emperor\'s advisers with officials elected by village assemblies across the empire'
            ],
            correctAnswer: 0,
            explanation: 'The civil service exam is a key AP comparison point: China\'s government drew on meritocracy (knowledge-based), while European feudalism relied on hereditary land ownership and military service. This contrast shaped vastly different political cultures.'
          },
          {
            question: 'The key difference between the political systems of Song Dynasty China and medieval Europe was that:',
            options: [
              'China had a centralized bureaucracy of educated officials, while Europe was divided among feudal lords',
              'Europe had stronger central monarchies, while China\'s emperors were figureheads for regional warlords',
              'China was governed by a hereditary warrior class, while Europe\'s kings ruled through trained scholars',
              'China and Europe were equally centralized, but China justified rule through Buddhism instead'
            ],
            correctAnswer: 0,
            explanation: 'This is one of the most tested AP comparisons for Unit 1. Song China\'s bureaucratic efficiency contrasted sharply with Europe\'s fragmented feudal system — this difference had major consequences for economic development, stability, and technological spread.'
          }
        ]
      }
    },
    {
      id: 'whglobal2-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What feature of Song Dynasty governance made it a meritocracy rather than an aristocracy?',
            options: [
              'Officials won their posts through competitive exams on Confucian texts, not by birth',
              'Monasteries nominated officials from among the boys they had taught to read and write',
              'Commanders who won victories on the frontier were given civil offices automatically',
              'Provincial governors passed their offices to their sons once the emperor confirmed them'
            ],
            correctAnswer: 0,
            explanation: 'The civil service examination system opened government positions (theoretically) to any man who could master Confucian texts — a stark contrast to Europe\'s hereditary aristocracy, where birth determined status.'
          },
          {
            question: 'In the Mali Empire, Islamic rulers maintained power over a largely non-Muslim population primarily by:',
            options: [
              'Promoting Islam at court and in trade but tolerating local religious traditions',
              'Requiring conversion of all subjects and destroying the shrines of traditional faiths',
              'Ruling through Arab governors appointed directly by the caliph in Cairo or Baghdad',
              'Barring Islamic scholars from court so that local priests kept their political role'
            ],
            correctAnswer: 0,
            explanation: 'Mansa Musa and other Mali rulers were Muslim and promoted Islam in government and trade, but local traditional religions persisted among most of the population. Mali was an independent West African state, not a province governed by caliphal appointees, and its rulers patronized Muslim scholars rather than excluding them.'
          },
          {
            question: 'Which best explains why European feudalism produced weaker central governments than China\'s bureaucratic empire?',
            options: [
              'Power was split among hereditary lords whose loyalty was personal, not owed to a state',
              'Kings collected so much in direct taxes that nobles rose in repeated revolts against them',
              'The papacy appointed every king, so rulers could not act without approval from Rome',
              'Feudal kings relied on salaried exam-trained officials who were loyal to their own guilds'
            ],
            correctAnswer: 0,
            explanation: 'Feudal obligations were personal (lord to vassal) rather than institutional (official to state). This dispersed power and made it difficult for European kings to command the centralized control that Chinese emperors exercised through their bureaucracy.'
          }
        ]
      }
    },
    {
      id: 'whglobal2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each political system with its defining characteristic.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The system where government officials were chosen by competitive exams based on Confucian classics was ___',
            options: ['Song Dynasty civil service', 'European feudalism', 'Delhi Sultanate', 'Mali Empire governance']
          },
          {
            label: 'The decentralized system where kings granted land to lords in exchange for military service was ___',
            options: ['European feudalism', 'Song Dynasty civil service', 'Confucian bureaucracy', 'Islamic caliphate']
          },
          {
            label: 'Muslim rulers governing a majority Hindu population in South Asia using Persian administrative models was the ___',
            options: ['Delhi Sultanate', 'Mali Empire', 'Abbasid Caliphate', 'Byzantine Empire']
          }
        ],
        correctAnswers: ['Song Dynasty civil service', 'European feudalism', 'Delhi Sultanate'],
        hint1: 'Meritocracy — officials selected by knowledge, not birth',
        hint2: 'Decentralized — power distributed through land grants',
        hint3: 'Muslim rulers over a Hindu majority — in South Asia',
        explanation: 'The Song civil service system, European feudalism, and the Delhi Sultanate each represent different solutions to governing complex societies. AP prompts frequently ask you to compare these political organization models.'
      }
    },
    {
      id: 'whglobal2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks you to compare political organization in China and Europe c. 1200–1450. Which thesis is strongest?',
            options: [
              'Song China\'s exam-staffed bureaucracy gave it stronger central authority than Europe\'s feudal order',
              'Song China and Europe both had strong central rulers, so their political systems were basically alike',
              'Europe\'s Christian kings governed more effectively than Song emperors because the Church unified them',
              'Song China and Europe differed politically in many ways, which shows that each region was unique'
            ],
            correctAnswer: 0,
            explanation: 'The strongest thesis names a specific structural difference (an exam-staffed bureaucracy vs. hereditary feudal decentralization), states its consequence (strong vs. weak central authority), and sets up a concrete comparative argument. "Different in many ways" is too vague to be defensible, and the other claims are historically inaccurate.'
          },
          {
            question: 'The Delhi Sultanate\'s use of Persian administrative models while ruling a Hindu majority population best illustrates which AP theme?',
            options: [
              'Cultural interaction — Muslim rulers borrowed Persian institutions to govern Hindu subjects',
              'Religious uniformity — rulers required conversion before granting any office or land',
              'Cultural isolation — rulers kept Persian methods but barred all contact with Hindu elites',
              'Economic decline — Persian tax methods ruined the Indian farming economy in a generation'
            ],
            correctAnswer: 0,
            explanation: 'The Delhi Sultanate is a prime example of cross-cultural governance: Islamic rulers using Persian administrative models, governing a Hindu majority, producing a syncretic cultural environment. This fits AP themes of cultural interaction and accommodation.'
          }
        ]
      }
    }
  ]
}
