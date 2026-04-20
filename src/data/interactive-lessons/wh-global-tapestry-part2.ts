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
              'Created a meritocratic pathway to government service based on knowledge of Confucian classics rather than hereditary birth',
              'Was the world\'s first democratic election system',
              'Allowed women equal access to government positions',
              'Was copied directly from European feudal practices'
            ],
            correctAnswer: 0,
            explanation: 'The civil service exam is a key AP comparison point: China\'s government drew on meritocracy (knowledge-based), while European feudalism relied on hereditary land ownership and military service. This contrast shaped vastly different political cultures.'
          },
          {
            question: 'The key difference between the political systems of Song Dynasty China and medieval Europe was that:',
            options: [
              'China had a centralized bureaucratic state staffed by educated officials, while Europe had decentralized feudal arrangements based on hereditary land control',
              'Europe had stronger central monarchies than China during this period',
              'Both systems were equally centralized but used different religious justifications',
              'China\'s government was based on military conquest while Europe relied on scholarship'
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
              'Officials were selected through competitive exams based on Confucian knowledge, not hereditary birth',
              'The emperor was elected by popular vote',
              'Military commanders automatically became government officials',
              'All citizens had equal voting rights in choosing administrators'
            ],
            correctAnswer: 0,
            explanation: 'The civil service examination system opened government positions (theoretically) to any man who could master Confucian texts — a stark contrast to Europe\'s hereditary aristocracy, where birth determined status.'
          },
          {
            question: 'In the Mali Empire, Islamic rulers maintained power over a largely non-Muslim population primarily by:',
            options: [
              'Using Islam to legitimize trade connections while tolerating local religious traditions',
              'Forcing all subjects to convert to Islam immediately upon conquest',
              'Relying solely on military force to suppress all local resistance',
              'Separating religion entirely from political governance'
            ],
            correctAnswer: 0,
            explanation: 'Mansa Musa and other Mali rulers were Muslim and promoted Islam in government and trade, but local animist traditions persisted among most of the population. This selective integration of Islam is a classic AP example of religious-political accommodation.'
          },
          {
            question: 'Which best explains why European feudalism produced weaker central governments than China\'s bureaucratic empire?',
            options: [
              'Power in feudalism was fragmented among hereditary lords who owed personal loyalty to each other rather than to a centralized state',
              'Europe had no interest in governance and allowed complete political chaos',
              'European kings were always weaker militarily than their Chinese counterparts',
              'Feudalism required professional bureaucrats who undermined royal authority'
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
              'While both Song China and medieval Europe had powerful governments, China\'s meritocratic civil service produced stronger central authority than Europe\'s decentralized feudal system based on hereditary land control',
              'China and Europe were very different from each other in many ways',
              'Europe had better political organization than China because of Christianity',
              'China\'s government was the same as all other Asian governments during this period'
            ],
            correctAnswer: 0,
            explanation: 'This thesis names a specific structural difference (meritocracy vs. hereditary feudalism), explains its consequence (strong vs. weak central authority), and sets up a concrete comparative argument — exactly what AP readers want.'
          },
          {
            question: 'The Delhi Sultanate\'s use of Persian administrative models while ruling a Hindu majority population best illustrates which AP theme?',
            options: [
              'Cultural interaction and adaptation — rulers adopted useful external administrative tools while navigating religious and cultural differences within their territories',
              'State formation always requires religious uniformity',
              'Islam was incompatible with Hindu culture and produced only conflict',
              'Conquest inevitably leads to complete cultural replacement'
            ],
            correctAnswer: 0,
            explanation: 'The Delhi Sultanate is a prime example of cross-cultural governance: Islamic rulers using Persian administrative models, governing a Hindu majority, producing a syncretic cultural environment. This fits AP themes of cultural interaction and accommodation.'
          }
        ]
      }
    }
  ]
}
