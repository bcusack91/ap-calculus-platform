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
              'It granted individual Spanish colonists the right to extract labor and tribute from indigenous peoples, creating a system of coercive extraction that was functionally similar to slavery despite its legal framing as mutual obligation — the colonist owed Christianization and protection; indigenous workers owed labor',
              'It gave indigenous peoples equal legal rights with Spanish colonists',
              'It was a purely voluntary labor market with wage compensation',
              'It had no connection to the Catholic Church or religious conversion',
            ],
            correctAnswer: 0,
            explanation: 'The encomienda\'s legal fiction mattered to the Church (which could intervene on behalf of indigenous people as "commended" to Spanish care — the basis for Las Casas\'s advocacy) but not to the daily reality of forced labor. Understanding the gap between legal form and lived reality is essential for AP analysis of colonial labor systems.'
          },
          {
            question: 'Potosí silver\'s most significant global consequence was:',
            options: [
              'The massive influx of New World silver caused European price inflation (the "price revolution") while simultaneously flowing to China to pay for luxury goods — demonstrating that colonial extraction in one region (Peru) could destabilize monetary systems in another (Europe) and fuel commodity trade with a third (China)',
              'Potosí silver only circulated within the Spanish Empire with no global impact',
              'Silver caused deflation in Europe by increasing the money supply appropriately',
              'Chinese demand for silver was insignificant compared to European consumption',
            ],
            correctAnswer: 0,
            explanation: 'The Potosí-to-China silver circuit is a model AP global commerce example: Spanish colonial extraction → European money supply inflation → silver flows east to China (where Single Whip Tax Reform required silver tax payment) → Chinese state receives tax revenue; Chinese silk and porcelain flow west. This demonstrates that "global economy" was already a reality by 1600, not just a 20th-century phenomenon.'
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
              'Created a legally codified racial hierarchy assigning social status, legal rights, and economic opportunities based on perceived racial identity — establishing race as a primary organizing principle of colonial societies that would shape Latin American social stratification for centuries after independence',
              'The casta system was immediately dismantled after Spanish colonial rule ended',
              'Race had no legal significance in Spanish colonial society',
              'The casta system gave indigenous people equal legal standing to Spanish colonists',
            ],
            correctAnswer: 0,
            explanation: 'The casta system\'s longevity is its key AP significance: racial categories established in the 16th century shaped Latin American social stratification into the 20th century and beyond. The system also produced constant social negotiation — racial categories blurred in practice, documents were falsified, and people sought to "pass" as higher categories. Understanding the casta system is essential for understanding Latin American social history.'
          },
          {
            question: 'The transition from encomienda to plantation slavery in the Americas demonstrates:',
            options: [
              'How colonial labor systems adapted to changing conditions: indigenous population collapse reduced encomienda viability, while expanding sugar/tobacco/cotton demand created incentive for a more reliable, legally unprotected labor force — leading to systematic expansion of African chattel slavery',
              'The transition occurred because indigenous peoples voluntarily left the encomienda system',
              'Plantation slavery predated the encomienda in the Americas',
              'Legal reforms eliminated all forced labor in colonial Americas by 1600',
            ],
            correctAnswer: 0,
            explanation: 'The labor system transition follows a clear causal chain: disease → indigenous population decline → labor shortage → encomienda insufficient for expanding plantation crops → African enslavement as the "solution." This chain explains how the Atlantic slave trade went from an existing but limited practice to a massive, industrialized system of human trafficking. Understanding the structural causes is more AP-useful than moral condemnation alone.'
          },
          {
            question: 'Bartolomé de las Casas\'s advocacy against indigenous exploitation demonstrates which AP complexity?',
            options: [
              'Colonial systems could produce internal critics who challenged the system\'s moral foundations — Las Casas opposed indigenous exploitation using Christian moral arguments — while still operating within colonial logic: he initially suggested enslaved Africans as a labor alternative, demonstrating that reformers often reproduce systemic inequalities while challenging specific manifestations',
              'Las Casas fully rejected all forms of coerced labor from the beginning',
              'No one within the colonial system ever criticized indigenous exploitation',
              'Las Casas was primarily an economic administrator with no humanitarian concerns',
            ],
            correctAnswer: 0,
            explanation: 'Las Casas is AP\'s model of "internal critique within a colonial system." He opposed indigenous exploitation using the same Christian theology the colonial system used to justify itself — demonstrating that ideological frameworks can produce internal contradictions. His initial suggestion of African enslavement as an alternative (later recanted) shows that reformers operate within historical contexts that limit their imagination even while pushing its boundaries.'
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
      id: 'whex4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison between Spanish encomienda and Aztec tributary systems best reveals:',
            options: [
              'While both extracted labor and goods from subordinate peoples, the Aztec system maintained local rulers and extracted tribute through established political channels, while the encomienda gave individual Spanish colonists direct rights to indigenous workers — the Spanish system was more personally exploitative and less politically mediated than the Aztec model it replaced',
              'Both systems were identical in their exploitation of subject peoples',
              'The Aztec system was more exploitative than the encomienda',
              'Neither system involved any coercion of subject peoples',
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates AP analytical sophistication by going beyond "both extracted resources" to identify the structural difference: Aztec tribute maintained political intermediaries (local rulers) with established relationships; encomienda gave individual Spaniards direct, personal exploitation rights over indigenous workers without political intermediation. This made the encomienda more arbitrary and personally brutal in practice.'
          },
          {
            question: 'For AP purposes, which statement best characterizes the role of race in constructing colonial labor systems?',
            options: [
              'Colonial labor systems were increasingly racialized over time: early Spanish exploitation used existing political categories (tributary relationships), but as those broke down and African slavery expanded, racial categories (casta system) were elaborated to legally encode exploitation — race became the mechanism for determining who was subject to which forms of coercive labor',
              'Race played no role in determining who was subjected to colonial labor exploitation',
              'Colonial labor systems were purely economic with no racial dimension',
              'Racial categories in colonial Americas were established before European contact',
            ],
            correctAnswer: 0,
            explanation: 'The racialization of colonial labor is an AP meta-theme: early colonial exploitation used indigenous political structures (encomienda built on existing tributary relationships); as those eroded, legal racial categories (casta system) were developed to formalize who could be enslaved, who was subject to labor drafts, and who had legal protections. Understanding this process of racialization — how race was constructed to justify exploitation — is essential for AP analysis of colonial societies.'
          }
        ]
      }
    }
  ]
}
