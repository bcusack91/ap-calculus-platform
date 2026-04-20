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
              'Catastrophic mortality from Old World diseases (smallpox, measles) against populations with no acquired immunity — reducing some indigenous populations by 50-90% within a century of European contact, the largest demographic catastrophe in human history',
              'A rapid increase in Native American populations due to new food sources from the Old World',
              'Disease affected only small isolated communities with minimal impact on large empires',
              'Population decline was equally severe in Europe as in the Americas',
            ],
            correctAnswer: 0,
            explanation: 'Native American demographic collapse is perhaps the most important demographic event in world history: 50-90% mortality in a century represents a loss of life unprecedented in scale. Mexico\'s population fell from ~25 million in 1519 to ~1 million by 1600. This created the labor shortage that drove demand for enslaved Africans and fundamentally altered the demographic composition of the Americas.'
          },
          {
            question: 'New World crops (potatoes, maize) transformed Old World populations primarily because:',
            options: [
              'They grew in soils and climates unsuitable for traditional European grains, expanding the total food-producing land area and caloric output — enabling population growth in previously marginal agricultural regions of Europe, Africa, and Asia',
              'New World crops were immediately adopted as luxury foods for the wealthy only',
              'Old World populations declined because they preferred New World crops over traditional foods',
              'Only tomatoes had any lasting impact on Old World diets',
            ],
            correctAnswer: 0,
            explanation: 'The demographic consequence of New World crops reaching the Old World is as important as the collapse in the Americas, just in the opposite direction. The potato\'s ability to grow in rocky Irish, Polish, and Andean-style soils enabled population doubling in previously food-insecure regions. Maize spread across Africa, enabling population growth. These agricultural changes drove Old World demographic expansion.'
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
              'Historical causation: disease caused indigenous labor shortage → colonial demand for replacement labor → existing African slave-trading networks → enslaved Africans as the "solution" → Atlantic slave trade expansion from hundreds to millions per century',
              'The Columbian Exchange and slave trade were completely unrelated phenomena',
              'Enslaved Africans were brought to the Americas before indigenous populations declined',
              'Disease had no connection to labor demand in colonial Americas',
            ],
            correctAnswer: 0,
            explanation: 'The causal chain is essential AP knowledge: (1) European diseases arrive → (2) indigenous populations collapse → (3) colonial labor shortage → (4) demand for replacement labor → (5) existing African slave trade networks → (6) Atlantic slave trade expands. AP questions about causation reward tracing these chains rather than treating the slave trade as simply "caused by European greed" without structural explanation.'
          },
          {
            question: 'Why did Old World peoples have more devastating diseases to transmit to the Americas than vice versa?',
            options: [
              'Eurasia\'s longer history of dense agricultural settlement with domesticated animals (cattle, pigs, horses, chickens) created a larger disease pool — many human epidemics (smallpox, measles, influenza) evolved from animal diseases; the Americas had fewer domesticated animals and therefore a smaller disease reservoir',
              'European peoples were biologically superior and thus naturally more disease-resistant',
              'The Americas had no diseases because their populations were too small to sustain epidemics',
              'Disease transmission was equally devastating in both directions',
            ],
            correctAnswer: 0,
            explanation: 'The biological explanation for asymmetric disease impact is crucial for AP: most devastating human diseases evolved from domesticated animal diseases (zoonotic diseases). Eurasia\'s longer history with cattle, pigs, and chickens meant more evolved human pathogens. The Americas had fewer large domesticated animals (llamas, dogs, turkeys) and therefore a smaller disease evolutionary reservoir. This structural difference, not racial superiority, explains the asymmetric mortality.'
          },
          {
            question: 'What does the Columbian Exchange demonstrate about "unintended consequences" in historical analysis?',
            options: [
              'Columbus\'s 1492 voyage was intended to find a sea route to Asia; the exchange of crops, animals, and diseases that reshaped global demographics was an unintended byproduct of commercial motivation, demonstrating that major historical transformations frequently result from the unforeseen consequences of intentional actions',
              'The Columbian Exchange was planned in advance with full knowledge of its consequences',
              'Historical actors always anticipate the consequences of their actions accurately',
              'Unintended consequences are never historically significant',
            ],
            correctAnswer: 0,
            explanation: 'The Columbian Exchange is the AP\'s premier example of unintended consequences: Columbus died believing he had reached Asia. The consequences — indigenous death, potato-fed European population growth, Atlantic slave trade — were orders of magnitude more significant than his original commercial goal. AP complexity points come from recognizing when historical significance was unintended and from tracing the non-linear paths from cause to consequence.'
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
            options: ['Manila Galleon trade', 'Triangle trade', 'Indian Ocean trade', 'Silk Road']
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
              'The Columbian Exchange had fundamentally different consequences for different peoples simultaneously: while New World crops were beginning to increase Old World food security and population, disease was catastrophically reducing Native American populations by 50-90% — the same exchange was catastrophic for some and ultimately beneficial for others, demonstrating that historical processes have uneven and sometimes contradictory effects',
              'The exchange was uniformly beneficial for all peoples who participated in it',
              'The exchange was uniformly catastrophic for all peoples who encountered it',
              'Only the crop transfer mattered; disease effects were too small to be historically significant',
            ],
            correctAnswer: 0,
            explanation: 'Complexity means accurately representing that historical events have different effects on different groups simultaneously. The same Columbian Exchange → potatoes feeding European peasants AND smallpox killing Native Americans at the same time. AP complexity is not about being "balanced" artificially — it\'s about accurately representing historical reality, which is almost always uneven and contradictory across different groups.'
          },
          {
            question: 'Comparing the Columbian Exchange to the Black Death (1347-1353), which analysis is most sophisticated?',
            options: [
              'Both demonstrate how disease transmission via exchange networks produces catastrophic demographic consequences, but in opposite regional directions: the Black Death reduced Old World populations by 30-50%; the Columbian Exchange reduced New World populations by 50-90% while beginning to increase Old World populations through new food crops — the same mechanism (disease via exchange networks) produced regionally opposite demographic outcomes',
              'The two events were too different to compare meaningfully',
              'Only the Black Death involved significant disease transmission via trade networks',
              'The Columbian Exchange and Black Death had identical consequences globally',
            ],
            correctAnswer: 0,
            explanation: 'This cross-period comparison demonstrates analytical sophistication: same mechanism (disease via trade/exchange networks) + different contexts (Old World disease pool hitting immunologically naive Americas; new crops flowing to Old World) = regionally opposite demographic outcomes. AP rewards arguments that use comparison to generate broader principles about how historical mechanisms play out differently in different contexts.'
          }
        ]
      }
    }
  ]
}
