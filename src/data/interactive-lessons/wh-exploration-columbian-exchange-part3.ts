export const whExplorationColumbianExchangePart3Data = {
  topicSlug: 'wh-exploration-columbian-exchange',
  sections: [
    {
      id: 'whex3-intro',
      type: 'text' as const,
      content: `
# 🚢 Age of Exploration & the Columbian Exchange

**Part 3 of 7 — The Columbian Exchange: Crops, Diseases, and Populations**

---

> 🔑 **Key Concept:** The Columbian Exchange (after 1492) transferred plants, animals, diseases, and peoples between the Americas and the Old World. AP questions focus on the devastating demographic consequences for Native Americans (50-90% mortality from disease), the agricultural transformation of Old World populations (new crops), and the long-term global demographic effects.
      `
    },
    {
      id: 'whex3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The most devastating consequence of the Columbian Exchange for Native American populations was:',
            options: [
              'Epidemics of smallpox and measles that killed half or more of many native peoples',
              'Warfare with Spanish armies that killed most native fighters before epidemics could spread inland',
              'Famine from European crops and livestock that displaced maize, beans and squash across the Americas',
              'Forced migration to Caribbean sugar islands that emptied the highland empires of Mexico and Peru',
            ],
            correctAnswer: 0,
            explanation: 'Native American demographic collapse is perhaps the most important demographic event in world history: Old World diseases (smallpox, measles) struck populations with no acquired immunity, with 50-90% mortality in a century in many regions. Mexico\'s population fell from an estimated ~25 million in 1519 to ~1 million by 1600. Warfare and forced labor added to the toll but killed far fewer than disease. This created the labor shortage that drove demand for enslaved Africans.'
          },
          {
            question: 'New World crops (potatoes, maize) transformed Old World populations primarily because:',
            options: [
              'They thrived in soils and climates where wheat and rye failed, raising calories from marginal land',
              'They replaced rice and wheat entirely within a generation, ending Old World dependence on native grains',
              'They spread first as luxury foods for elites, raising population only after the year 1800 in most regions',
              'They required large irrigation works that only centralized states such as Qing China could build',
            ],
            correctAnswer: 0,
            explanation: 'The demographic consequence of New World crops reaching the Old World is as important as the collapse in the Americas, just in the opposite direction. The potato\'s ability to grow in rocky Irish and Polish soils (and maize and sweet potato on Chinese hillsides) raised calorie output from marginal land without irrigation. Maize and cassava spread across Africa. These crops supplemented rather than replaced existing staples, and they drove Old World demographic expansion from the 1600s on.'
          }
        ]
      }
    },
    {
      id: 'whex3-content',
      type: 'text' as const,
      content: `
## 📖 The Columbian Exchange

> **What Was Transferred**

| Direction | Items |
|-----------|-------|
| **Old World → Americas** | Horses, cattle, pigs, wheat, rice, sugar cane, smallpox, measles, influenza |
| **Americas → Old World** | Maize (corn), potatoes, tomatoes, chocolate, tobacco, peppers, rubber |

> **Demographic Catastrophe in the Americas**

The most immediate consequence was disaster for Native Americans:

- Estimates: 50-90% of indigenous American populations died within a century of contact
- Mexico: ~25 million in 1519 → ~1 million by 1600
- Caribbean indigenous peoples virtually eliminated within decades
- Mechanism: No prior exposure = no acquired immunity to Old World diseases
- Consequence of labor shortage → demand for enslaved African labor → Atlantic slave trade

> **Agricultural Transformation of the Old World**

New World crops transformed Old World agriculture:

- **Potatoes:** Grew in poor, wet soils unsuitable for grain; fed European peasants; enabled Irish, Polish, German population growth
- **Maize:** High-calorie, storable; spread across Europe, Africa, Asia; enabled population growth
- **Tomatoes:** Transformed Mediterranean diets after initial suspicion
- **Long-term:** New World crops contributed to Old World population growth c. 1600-1800

> **AP Comparison Anchor**

- **Columbian Exchange vs. Black Death:** Both massive demographic events; Black Death → Old World population decline; Columbian Exchange → catastrophic New World decline AND eventual Old World growth from new crops
- **Why the Americas?:** Eurasian disease pool was larger and older (more domesticated animals = more disease evolution); Americas had no comparable disease reservoir
      `
    },
    {
      id: 'whex3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The causal chain connecting the Columbian Exchange to the Atlantic slave trade demonstrates which AP skill?',
            options: [
              'Comparison, setting colonial labor shortages in the Americas beside serfdom in Russia',
              'Causation, tracing disease to labor shortage to demand for enslaved Africans',
              'Periodization, dating the start of the slave trade to Columbus\'s first voyage in 1492',
              'Contextualization, placing the slave trade within the European Reformation and its wars',
            ],
            correctAnswer: 0,
            explanation: 'The causal chain is essential AP knowledge: (1) European diseases arrive → (2) indigenous populations collapse → (3) colonial labor shortage → (4) demand for replacement labor → (5) existing African slave-trading networks → (6) Atlantic slave trade expands from hundreds to millions per century. AP questions about causation reward tracing these chains rather than treating the slave trade as simply "caused by European greed" without structural explanation.'
          },
          {
            question: 'Why did Old World peoples have more devastating diseases to transmit to the Americas than vice versa?',
            options: [
              'Eurasia\'s long contact with herd animals bred more crowd diseases, and the Americas had few such animals',
              'Eurasia\'s cold winters killed off American pathogens, so diseases carried east died out at sea',
              'Eurasia\'s people carried inherited racial immunity, so American diseases rarely infected them at all',
              'Eurasia\'s doctors already had vaccines for smallpox and measles, so Europeans were protected on contact',
            ],
            correctAnswer: 0,
            explanation: 'The biological explanation for asymmetric disease impact is crucial for AP: most devastating human diseases (smallpox, measles, influenza) evolved from domesticated animal diseases (zoonotic diseases). Eurasia\'s longer history of dense farming settlement with cattle, pigs, horses, and chickens meant more evolved human pathogens. The Americas had fewer large domesticated animals (llamas, dogs, turkeys) and therefore a smaller disease reservoir. This structural difference, not race or medicine (vaccination came only in 1796), explains the asymmetric mortality.'
          },
          {
            question: 'What does the Columbian Exchange demonstrate about "unintended consequences" in historical analysis?',
            options: [
              'That voyages aimed at an Asian sea route produced a biological exchange no one planned or foresaw',
              'That Columbus planned the crop and animal transfers in advance to make Spanish colonies self-supporting',
              'That the exchange began only after 1600, once governments set out to move crops between continents',
              'That Iberian physicians predicted the coming epidemics and warned the crown against further voyages',
            ],
            correctAnswer: 0,
            explanation: 'The Columbian Exchange is the AP\'s premier example of unintended consequences: Columbus\'s 1492 voyage sought a sea route to Asia, and he died believing he had reached it. The consequences — indigenous death, potato-fed European population growth, Atlantic slave trade — were orders of magnitude more significant than his original commercial goal. Major historical transformations frequently result from the unforeseen consequences of intentional actions.'
          }
        ]
      }
    },
    {
      id: 'whex3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Portuguese ship innovation with lateen sails enabling Atlantic exploration was the ___',
            options: ['Caravel', 'Galleon', 'Dhow', 'Junk']
          },
          {
            label: 'The Spanish colonial labor grant giving colonists rights to indigenous workers was the ___',
            options: ['Encomienda', 'Millet system', 'Mansabdar system', 'Devshirme']
          },
          {
            label: 'The Pacific trade route connecting American silver to Chinese silk markets was the ___',
            options: ['Manila Galleon trade', 'Triangle trade', 'Indian Ocean trade', 'Trans-Saharan caravan trade']
          }
        ],
        correctAnswers: ['Caravel', 'Encomienda', 'Manila Galleon trade'],
        hint1: 'Portuguese ship — lateen sails — could sail against the wind',
        hint2: 'Spanish colonial labor system — grant to colonists — de facto forced labor',
        hint3: 'Pacific silver route — Acapulco to Manila — American silver for Asian goods',
        explanation: 'The caravel enabled systematic Atlantic and coastal African exploration by Portugal. The encomienda was the primary mechanism of Spanish colonial labor extraction from indigenous peoples. The Manila Galleon trade completed global commercial connectivity by linking the Atlantic and Pacific systems through the silver-for-silk exchange.'
      }
    },
    {
      id: 'whex3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For an AP LEQ evaluating the Columbian Exchange\'s consequences, which complexity argument earns the highest score?',
            options: [
              'The exchange fed Old World populations even as it collapsed American ones, so its effects were uneven',
              'The exchange hurt every group it touched because disease outweighed every benefit of new crops and animals',
              'The exchange benefited every group it touched because new crops and animals outweighed disease losses',
              'The exchange mattered mainly for Europe, since crops and diseases rarely reached Africa or Asia',
            ],
            correctAnswer: 0,
            explanation: 'Complexity means accurately representing that historical events have different effects on different groups simultaneously: New World crops were beginning to increase Old World food security while disease was reducing Native American populations by 50-90%. Maize and cassava did reach Africa, and maize and sweet potatoes reached China. AP complexity is not about being "balanced" artificially — it\'s about accurately representing historical reality, which is almost always uneven and contradictory across different groups.'
          },
          {
            question: 'Comparing the Columbian Exchange to the Black Death (1347-1353), which analysis is most sophisticated?',
            options: [
              'Each spread disease along exchange routes, but one emptied Eurasia and the other emptied the Americas',
              'Each spread disease along exchange routes, but neither changed population totals for more than a decade',
              'Each spread disease along trade routes, but only the Black Death reached densely populated regions',
              'Each began in the Americas and moved east, but only the Columbian Exchange reached Asia and Africa',
            ],
            correctAnswer: 0,
            explanation: 'This cross-period comparison demonstrates analytical sophistication: the Black Death reduced Old World populations by roughly 30-50%; the Columbian Exchange reduced New World populations by 50-90% while new food crops began to increase Old World populations. Same mechanism (disease via exchange networks) + different contexts = regionally opposite demographic outcomes. AP rewards arguments that use comparison to generate broader principles about how historical mechanisms play out differently in different contexts.'
          }
        ]
      }
    }
  ]
}
