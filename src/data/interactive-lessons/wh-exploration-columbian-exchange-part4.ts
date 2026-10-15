export const whExplorationColumbianExchangePart4Data = {
  topicSlug: 'wh-exploration-columbian-exchange',
  sections: [
    {
      id: 'whex4-intro',
      type: 'text' as const,
      content: `
# 🚢 Age of Exploration & the Columbian Exchange

**Part 4 of 7 — Spanish and Portuguese Colonial Systems**

---

> 🔑 **Key Concept:** Spanish and Portuguese colonial empires c. 1500-1750 created new extractive institutions: encomienda (forced indigenous labor), the plantation system (enslaved African labor), and the extraction economy (silver, sugar). AP questions compare Spanish and Portuguese models, evaluate colonial racial hierarchies, and connect colonial labor to global economic patterns.
      `
    },
    {
      id: 'whex4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Spanish encomienda system\'s most significant feature was:',
            options: [
              'It gave colonists rights to native labor and tribute in return for Christian instruction and protection',
              'It gave native nobles authority over Spanish settlers in return for Christian baptism and tribute',
              'It hired native workers for cash wages set by the crown in return for a promise of Christian instruction',
              'It sold native captives to Caribbean planters in return for silver paid to the Spanish crown',
            ],
            correctAnswer: 0,
            explanation: 'The encomienda granted individual Spanish colonists the right to extract labor and tribute from indigenous peoples; the colonist owed Christianization and protection, and in practice the system was coercive extraction functionally similar to slavery despite its legal framing as mutual obligation. The legal fiction mattered to the Church (which could intervene on behalf of indigenous people as "commended" to Spanish care — the basis for Las Casas\'s advocacy) but not to the daily reality of forced labor.'
          },
          {
            question: 'Potosí silver\'s most significant global consequence was:',
            options: [
              'It fueled inflation in Europe and flowed on to China, tying three continents together',
              'It caused deflation in Europe as Spain hoarded silver bullion in royal treasuries at Seville',
              'It stayed inside the Spanish Empire, paying colonial officials and never reaching Asian markets',
              'It funded Portugal\'s spice trade in the Indian Ocean, while China refused silver as payment',
            ],
            correctAnswer: 0,
            explanation: 'The Potosí-to-China silver circuit is a model AP global commerce example: Spanish colonial extraction → European money supply inflation (the "price revolution") → silver flows east to China (where Single Whip Tax Reform required silver tax payment) → Chinese silk and porcelain flow west. Colonial extraction in one region (Peru) destabilized prices in another (Europe) and fueled trade with a third (China). This demonstrates that "global economy" was already a reality by 1600.'
          }
        ]
      }
    },
    {
      id: 'whex4-content',
      type: 'text' as const,
      content: `
## 📖 Spanish and Portuguese Colonial Systems

> **Spanish Labor Systems**

| System | Period | Mechanism |
|--------|--------|-----------|
| **Encomienda** | 1500s-1542 | Grant of indigenous labor to Spanish colonist; nominal obligation to Christianize |
| **Repartimiento** | After 1542 | Labor draft replacing encomienda; nominal wage; still coercive |
| **Mita (colonial)** | 1570s-1812 | Forced labor draft for Potosí silver mines; Inca mit'a repurposed by Spanish |
| **Debt peonage** | Ongoing | Hacienda workers bound by debt impossible to repay |

> **Potosí: The Engine of Spanish Colonial Wealth**

- Located in modern Bolivia; world's largest silver mine c. 1545-1650
- Millions of indigenous and enslaved African workers; catastrophic mortality
- Silver caused European price revolution (inflation from massive silver influx into money supply)
- Silver flow: Potosí → Spain → China (for silk/porcelain) — demonstrating global commercial integration

> **Colonial Racial Hierarchy: The Casta System**

Spanish colonial society organized legally by race:
- **Peninsulares** (Spain-born) > **Criollos** (Americas-born Spanish) > **Mestizos** > **Mulatos** > **Indigenous** > **Enslaved Africans**

> **Portuguese Brazil and Plantation System**

- Sugar plantation economy in Brazil from 1530s
- Enslaved African labor replaced indigenous workers (who died from disease or fled inland)
- Brazil: largest sugar producer globally by 1600
- Plantation model: monoculture + enslaved labor = profits + social rigidity

> **AP Comparison Anchor**

- **Encomienda vs. Aztec tributary system:** Both extracted labor/goods from subordinate peoples; Aztec system kept local rulers; Spanish encomienda gave individual colonists direct rights to indigenous workers
- **Potosí silver → global economy:** Links Spanish colonialism to Chinese trade and European price revolution
      `
    },
    {
      id: 'whex4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The casta system\'s significance for AP analysis is that it:',
            options: [
              'It created a legal hierarchy based on ancestry that shaped Latin American society long after independence',
              'It created a legal hierarchy based on religion that disappeared once indigenous peoples were baptized',
              'It created a legal hierarchy based on wealth that let any family buy Spanish status with silver',
              'It created a legal hierarchy based on occupation that ended with the Bourbon Reforms of the 1700s',
            ],
            correctAnswer: 0,
            explanation: 'The casta system\'s longevity is its key AP significance: racial categories assigning status, legal rights, and economic opportunities were established in the 16th century and shaped Latin American social stratification into the 20th century and beyond. The system also produced constant social negotiation — racial categories blurred in practice, documents were falsified, and people sought to "pass" as higher categories. Understanding the casta system is essential for understanding Latin American social history.'
          },
          {
            question: 'The transition from encomienda to plantation slavery in the Americas demonstrates:',
            options: [
              'Labor systems adapted when native populations collapsed and new cash crops needed enslaved workers',
              'Labor systems changed when native peoples won wage contracts and left encomiendas to work on farms',
              'Labor systems changed when the crown banned all forced labor in its American colonies by 1600',
              'Labor systems changed when European convicts and servants arrived in numbers to work sugar estates',
            ],
            correctAnswer: 0,
            explanation: 'The labor system transition follows a clear causal chain: disease → indigenous population decline → labor shortage → encomienda insufficient for expanding sugar/tobacco/cotton plantations → African enslavement as the "solution." The New Laws (1542) limited the encomienda but did not end forced labor (the mita continued). This chain explains how the Atlantic slave trade went from an existing but limited practice to a massive system of human trafficking.'
          },
          {
            question: 'Bartolomé de las Casas\'s advocacy against indigenous exploitation demonstrates which AP complexity?',
            options: [
              'Las Casas attacked native abuse on Christian grounds but at first urged African slavery as a substitute',
              'Las Casas rejected every form of coerced labor from the start, including African slavery in the Caribbean',
              'Las Casas defended the encomienda as Christian charity and opposed the New Laws that limited it',
              'Las Casas criticized colonial abuse on economic grounds alone, arguing native labor was being wasted',
            ],
            correctAnswer: 0,
            explanation: 'Las Casas is AP\'s model of "internal critique within a colonial system." He opposed indigenous exploitation using the same Christian theology the colonial system used to justify itself — demonstrating that ideological frameworks can produce internal contradictions. His initial suggestion of African enslavement as an alternative (later recanted) shows that reformers often reproduce systemic inequalities while challenging specific manifestations. He supported the New Laws of 1542.'
          }
        ]
      }
    },
    {
      id: 'whex4-dropdown',
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
      id: 'whex4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison between Spanish encomienda and Aztec tributary systems best reveals:',
            options: [
              'Aztec tribute passed through local rulers, but the encomienda gave settlers direct claims on labor',
              'Aztec tribute went straight to Tenochtitlan, but the encomienda sent all native labor to the crown',
              'Aztec tribute was voluntary and unforced, but the encomienda introduced coercion to Mesoamerica',
              'Aztec tribute was paid in silver coin, but the encomienda collected only maize, cloth and cacao',
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates AP analytical sophistication by going beyond "both extracted resources" to identify the structural difference: Aztec tribute maintained political intermediaries (local rulers) with established relationships and was collected in goods such as maize, cloth and cacao; encomienda gave individual Spaniards direct, personal exploitation rights over indigenous workers without political intermediation. This made the encomienda more arbitrary and personally brutal in practice.'
          },
          {
            question: 'For AP purposes, which statement best characterizes the role of race in constructing colonial labor systems?',
            options: [
              'They grew more racialized over time, as legal categories of descent decided who faced coercion',
              'They grew less racialized over time, as the casta categories faded and coercion rested on debt alone',
              'They began fully racialized in 1492, as Spain applied its existing color categories from day one',
              'They grew tied to religion over time, as baptized Africans and natives were freed from coerced labor',
            ],
            correctAnswer: 0,
            explanation: 'The racialization of colonial labor is an AP meta-theme: early colonial exploitation used indigenous political structures (encomienda built on existing tributary relationships); as those eroded and African slavery expanded, legal racial categories (casta system) were developed to formalize who could be enslaved, who was subject to labor drafts, and who had legal protections. Baptism did not bring freedom. Understanding this process of racialization — how race was constructed to justify exploitation — is essential for AP analysis of colonial societies.'
          }
        ]
      }
    }
  ]
}
