export const whAmericasAfrica1200Part6Data = {
  topicSlug: 'wh-americas-africa-1200',
  sections: [
    {
      id: 'whaaf6-intro',
      type: 'text' as const,
      content: `
# 🌎 Americas & Africa (c. 1200–1450)

**Part 6 of 7 — Cross-Regional Comparisons and CCOT**

---

> 🔑 **Key Concept:** AP World History connects the Americas and Africa by asking comparison and CCOT questions. Key themes: how geography shaped civilization development, the role of trade in state formation, and how isolation (Americas) vs. connectivity (Africa's Indian Ocean ports) affected civilizational development.
      `
    },
    {
      id: 'whaaf6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why were Mali and the Swahili city-states more connected to the wider world than the Aztec and Inca empires c. 1200–1450?',
            options: [
              'The Aztec and Inca rulers banned all trade, even inside their own empires',
              'Mali and the Swahili towns were provinces of the Ottoman Empire at the time',
              'The Aztec and Inca had no cities, so they produced no goods worth trading',
              'They sat on trans-Saharan and Indian Ocean trade routes'
            ],
            correctAnswer: 3,
            explanation: 'Mali\'s gold-salt trade crossed the Sahara to North Africa, and the Swahili ports traded across the Indian Ocean, so both were linked to the Islamic world and beyond. The Aztecs ran great markets and the Inca moved goods by redistribution within their own regions, and both had great cities, but the oceans cut them off from Afro-Eurasia; neither African society was under the Ottomans.'
          },
          {
            question: 'Which feature of the Americas before 1492 best explains the scale of population collapse after contact?',
            options: [
              'Their farming systems could not feed large cities, so populations were already falling',
              'Isolation from Afro-Eurasian diseases left them no immunity to smallpox',
              'They had immunity to smallpox, so European firearms caused nearly all of the deaths',
              'Their rulers had already moved most people into remote regions with little food'
            ],
            correctAnswer: 1,
            explanation: 'Because the Americas had been cut off from Afro-Eurasian disease pools, Native Americans had no acquired immunity to smallpox, measles and influenza, and populations fell by 90 percent or more in some regions within a century. Chinampas and terraces fed large cities, epidemics rather than guns caused most deaths, and no such resettlement took place.'
          }
        ]
      }
    },
    {
      id: 'whaaf6-content',
      type: 'text' as const,
      content: `
## 📖 Americas & Africa: AP Comparison Framework

> **Comparing Americas to African Civilizations**

| Feature | Aztec | Inca | Mali/Songhai | Swahili Cities |
|---------|-------|------|-------------|---------------|
| Economy | Tribute + markets | Mit'a labor + redistribution | Gold-salt trade | Indian Ocean trade |
| Religion | Polytheistic sun worship | Polytheistic sun worship | Islam adopted | Islam + African syncretism |
| Writing | Pictographic codices | No writing (quipus) | Arabic script | Arabic script |
| Connection to global networks | Limited (trans-regional Mesoamerican) | Limited | Trans-Saharan + Islamic world | Indian Ocean |

> **CCOT: Americas and Africa c. 1200-1450**

- **Change:** Aztec power rises after the Triple Alliance of 1428 (peak c. 1500, under Moctezuma II before 1519); Inca expansion c. 1438; Mali at peak under Mansa Musa c. 1324; East African cities flourishing
- **Continuity:** All these civilizations were pre-contact, functioning without sustained Old World connection (Americas); African states continued integrating into Indian Ocean and trans-Saharan networks (continuity from earlier periods)

> **Geographic Isolation and Development**

The Americas' relative isolation from Old World disease pools had a critical consequence: Native American populations had no acquired immunity to Eurasian diseases (smallpox, measles, influenza). When contact came after 1492, the demographic catastrophe (90%+ population decline in some regions within a century) was one of the largest in human history.

> **AP Comparison Anchor**

- **Americas vs. Africa:** America's relative isolation meant no disease exchange; Africa\'s connectivity meant already integrated into Islamic world; both contrast with European maritime expansion\'s homogenizing effects after 1450
      `
    },
    {
      id: 'whaaf6-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which pairing of record-keeping systems is accurate?',
            options: [
              'Aztec: pictographic codices; Inca: knotted-string quipus; Mali: Arabic script',
              'Aztec: Arabic script; Inca: pictographic codices; Mali: knotted-string quipus',
              'Aztec: no records of any kind; Inca: the Latin alphabet; Mali: Chinese characters',
              'All three used one alphabet, which had spread among them across the Atlantic'
            ],
            correctAnswer: 0,
            explanation: 'The Aztecs painted pictographic codices, the Inca kept census and tribute records on knotted quipus, and Mali\'s Muslim scholars and officials wrote in Arabic script. Arabic did not reach the Americas, the Latin alphabet arrived only with the Spanish, and there was no contact across the Atlantic in this period.'
          },
          {
            question: 'Which statement best describes a continuity in African states c. 1200–1450?',
            options: [
              'They cut off all contact with the Islamic world after the Mongols sacked Baghdad in 1258',
              'They abandoned long-distance trade in favor of farming only for their own needs',
              'They kept integrating into trans-Saharan and Indian Ocean networks that predated them',
              'They were conquered by European powers and governed as overseas colonies'
            ],
            correctAnswer: 2,
            explanation: 'Mali built on the trans-Saharan trade that had enriched Ghana, and the Swahili coast and Great Zimbabwe grew within Indian Ocean networks that were centuries old. Contact with the Islamic world deepened rather than ended, long-distance trade grew, and European colonial rule came much later.'
          },
          {
            question: 'Which development is the best example of change in the Americas c. 1200–1450?',
            options: [
              'European settlers founded colonies in Mexico and Peru during the 1300s',
              'The Aztec Triple Alliance and Inca conquests built large new empires',
              'The Maya cities of the Yucatán united all of Mesoamerica under one king',
              'The Inca adopted an alphabet that they borrowed from the Aztecs'
            ],
            correctAnswer: 1,
            explanation: 'The Aztec Triple Alliance and the Inca conquests from about 1438 created empires far larger than earlier states in their regions. Europeans did not arrive until after 1492, the Maya never unified Mesoamerica, and the Inca kept records on quipus rather than adopting an alphabet.'
          }
        ]
      }
    },
    {
      id: 'whaaf6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Inca economy rested mainly on ___',
            options: ['Mit\'a labor and redistribution', 'Tribute and markets', 'Gold-salt trade', 'Indian Ocean trade']
          },
          {
            label: 'The Aztec economy rested mainly on ___',
            options: ['Mit\'a labor and redistribution', 'Tribute and markets', 'Gold-salt trade', 'Indian Ocean trade']
          },
          {
            label: 'The economy of the Swahili city-states rested mainly on ___',
            options: ['Mit\'a labor and redistribution', 'Tribute and markets', 'Gold-salt trade', 'Indian Ocean trade']
          }
        ],
        correctAnswers: ['Mit\'a labor and redistribution', 'Tribute and markets', 'Indian Ocean trade'],
        hint1: 'The Inca had no markets or money on the Aztec scale',
        hint2: 'Conquered city-states paid the Aztecs in goods, and Tlatelolco held a great market',
        hint3: 'The Swahili towns faced the sea',
        explanation: 'The Inca drafted labor through the mit\'a and redistributed goods from state storehouses, the Aztecs collected tribute and ran huge markets, and the Swahili towns lived on Indian Ocean commerce. The gold-salt trade was Mali\'s base.'
      }
    },
    {
      id: 'whaaf6-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks you to evaluate continuity and change in state-building in the Americas and Africa, c. 1200-1450. Which thesis best demonstrates historical complexity?',
            options: [
              'Older traditions persisted, yet rising states like the Aztecs and Mali ran tribute and trade on a larger scale',
              'Nothing important changed in the Americas or Africa in this period, since states there stayed small and isolated',
              'Everything changed at once as new states arose, leaving no trace of earlier political traditions',
              'Military conquest alone explains change in this period, since trade and religion had no effect on any states'
            ],
            correctAnswer: 0,
            explanation: 'The strongest thesis names a continuity (older tribute systems in Mesoamerica, the gold-salt trade inherited from Ghana) and a change (new states such as the Aztecs and Mali organizing them on a much larger scale). The other choices deny change, deny continuity, or reduce the period to conquest alone.'
          },
          {
            question: 'Which comparison best demonstrates AP historical reasoning about Americas & Africa (c. 1200–1450)?',
            options: [
              'Mali and the Inca both built vast states, but Mali taxed trade while the Inca drafted labor',
              'Mali and the Inca were identical states, since both depended on gold mined by drafted village laborers',
              'Comparing Mali and the Inca is not useful, because societies with no contact share no common patterns at all',
              'Mali and the Inca differed only in religion, so their economies and governments can be treated as the same'
            ],
            correctAnswer: 0,
            explanation: 'A strong comparison names a similarity (both built large states) and a difference with its cause: Mali grew rich by taxing the gold-salt trade, while the Inca, with no money economy, drew on the mit\'a labor draft and redistributed goods. Societies without contact can still be compared, and their economies were not alike.'
          }
        ]
      }
    }
  ]
}
