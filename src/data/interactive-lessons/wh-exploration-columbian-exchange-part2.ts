export const whExplorationColumbianExchangePart2Data = {
  topicSlug: 'wh-exploration-columbian-exchange',
  sections: [
    {
      id: 'whex2-intro',
      type: 'text' as const,
      content: `
# 🚢 Age of Exploration & the Columbian Exchange

**Part 2 of 7 — European Maritime Exploration: Causes and Methods**

---

> 🔑 **Key Concept:** Portuguese and Spanish maritime exploration c. 1415-1522 was driven by commercial motivation (bypassing Ottoman trade routes to access Asian luxury goods), enabled by new ship technology (caravel with lateen sails), and sustained by competitive state sponsorship. AP questions focus on WHY exploration happened and HOW technology made it possible.
      `
    },
    {
      id: 'whex2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What was the primary commercial motivation for European maritime exploration c. 1450-1520?',
            options: [
              'Desire for direct sea routes to Asian spice and luxury goods markets, bypassing Ottoman-controlled overland routes where high tolls reduced European merchant profit margins',
              'Pure curiosity with no commercial dimension',
              'A desire to spread European culture to other continents',
              'Military strategy to attack Asian civilizations from the sea',
            ],
            correctAnswer: 0,
            explanation: 'The commercial motivation for exploration is essential AP knowledge. Spices (pepper, cinnamon, nutmeg) were enormously valuable in Europe — preserving food and demonstrating wealth. Vasco da Gama\'s first Indian voyage returned with spices worth 60x the expedition cost. This extraordinary profit potential drove continued state investment in exploration.'
          },
          {
            question: 'The caravel\'s most important innovation for exploration was:',
            options: [
              'Its lateen (triangular) sails that allowed sailing into the wind, enabling Portuguese ships to explore the African coast and return home against prevailing winds — something older square-rigged ships could not do',
              'Its enormous size that could carry more cargo than any previous ship',
              'Its steam-powered engines that replaced reliance on wind',
              'Its military weaponry that allowed defeating all opposing navies',
            ],
            correctAnswer: 0,
            explanation: 'The caravel\'s lateen sail is the key technological innovation enabling Atlantic exploration. Square-rigged ships could sail with the wind but not against it — making return voyages along the African coast impossible with existing technology. The caravel transformed coastal exploration from a one-way trip to a round trip, enabling systematic accumulation of geographic knowledge.'
          }
        ]
      }
    },
    {
      id: 'whex2-content',
      type: 'text' as const,
      content: `
## 📖 European Maritime Exploration

> **Causes of European Exploration**

| Cause | Details |
|-------|---------|
| **Commercial motivation** | Desire for direct trade with Asia; avoid Ottoman tolls on eastern routes |
| **Technology** | Caravel (lateen sails); magnetic compass; astrolabe (latitude measurement) |
| **State competition** | Portugal vs. Spain competing for overseas wealth and prestige |
| **Religious motivation** | Spreading Christianity; finding Prester John (mythical Christian king) |

> **Portuguese Exploration Timeline**

- **Prince Henry the Navigator (c. 1415-1460):** Organized systematic annual African coastal exploration
- **Bartolomeu Dias (1488):** Rounded Cape of Good Hope; proved sea route to Indian Ocean possible
- **Vasco da Gama (1498):** First European to reach India by sea; returned with spices worth 60x voyage cost
- **Magellan/Elcano (1519-1522):** First circumnavigation under Spanish flag

> **Key Technology: The Caravel**

- Shallow-draft ship with lateen (triangular) sails
- Could sail INTO the wind — unlike square-rigged ships
- Essential for exploring African coast and returning home against prevailing winds
- Combined with magnetic compass (Chinese origin, Silk Road diffusion) and astrolabe

> **AP Comparison: Zheng He vs. European Exploration**

| Feature | Zheng He (China, 1405-1433) | European Exploration (1415+) |
|---------|---------------------------|------------------------------|
| Ship size | Enormous (400+ feet) | Smaller caravel (70-90 feet) |
| Scope | Indian Ocean, East Africa | Atlantic, then global |
| Continuation | Discontinued after 1433 | Continued to colonization |
| Key question | Why did China stop? | Why did Europe continue? |
      `
    },
    {
      id: 'whex2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Portugal\'s systematic annual exploration of the African coast (c. 1415-1488) demonstrates:',
            options: [
              'How state-sponsored, systematic accumulation of geographic knowledge — each voyage building on the previous one — eventually solved the problem of finding a sea route to Asia that individual merchant ventures could not have solved alone',
              'Portuguese exploration was entirely accidental with no systematic planning',
              'Portugal reached India without any prior African coastal exploration',
              'State sponsorship had no impact on the pace of exploration',
            ],
            correctAnswer: 0,
            explanation: 'Portugal\'s institutional approach to exploration is uniquely significant: Prince Henry organized an exploration school, accumulated geographic knowledge across decades, and sponsored annual voyages that incrementally extended knowledge of the African coast. This systematic approach — not individual genius — explains why Portugal solved the Cape route problem.'
          },
          {
            question: 'The comparison between Zheng He\'s voyages (1405-1433) and European exploration demonstrates:',
            options: [
              'Both demonstrated remarkable maritime capability, but China\'s decision to discontinue exploration after 1433 (due to Confucian bureaucratic opposition to maritime trade and shifting imperial priorities to northern land threats) while European states continued shows that technology alone does not determine historical outcomes — political and institutional decisions matter equally',
              'Zheng He\'s ships were inferior to European vessels in every respect',
              'China had no interest in foreign peoples or goods',
              'European and Chinese exploration were identical in their goals and consequences',
            ],
            correctAnswer: 0,
            explanation: 'The Zheng He vs. European exploration comparison is one of AP World History\'s most important questions: Chinese ships were LARGER and more sophisticated; Zheng He reached Africa 70 years before da Gama. The DIFFERENCE is what each civilization did with this capability. China discontinued; Europe continued to colonization. This demonstrates that political/institutional factors (not just technology) determine which civilizations extend their power globally.'
          },
          {
            question: 'Bartolomeu Dias\'s 1488 rounding of the Cape of Good Hope was historically significant because:',
            options: [
              'It proved that a sea route from Europe to the Indian Ocean was possible, transforming African coastal exploration from incremental progress to a specific achievable goal — directly enabling Vasco da Gama\'s 1498 voyage to India that initiated direct European participation in Indian Ocean trade',
              'Dias was the first European to reach India',
              'The Cape of Good Hope had no significance for trade routes',
              'Dias\'s voyage preceded any Portuguese exploration of the African coast',
            ],
            correctAnswer: 0,
            explanation: 'Dias\'s voyage is the "proof of concept" that unlocked the Indian Ocean route: before 1488, Portuguese explorers didn\'t know if Africa ended or extended infinitely south. After 1488, the question was no longer "can we get there?" but "who will complete the route?" Da Gama\'s 1498 voyage followed the path Dias proved was possible.'
          }
        ]
      }
    },
    {
      id: 'whex2-dropdown',
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
      id: 'whex2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison between Portuguese and Spanish exploration strategies best supports which argument?',
            options: [
              'Portugal focused on establishing trading post networks along existing sea routes (Indian Ocean, African coast) to redirect existing Asian trade through Portuguese-controlled ports, while Spain focused on conquering and colonizing new territories in the Americas — different strategies reflecting different geographic starting points and commercial opportunities',
              'Portugal and Spain had identical exploration strategies',
              'Spain established trading posts while Portugal colonized territories',
              'Neither Portugal nor Spain had any strategic plan for exploration',
            ],
            correctAnswer: 0,
            explanation: 'This distinction is AP-important: Portuguese Estado da India worked by inserting Portuguese military force into existing Indian Ocean commercial networks, charging protection fees. Spanish colonialism worked by controlling land and indigenous/enslaved labor in the Americas. Both were extractive, but through fundamentally different mechanisms — trading-post empire vs. territorial colonialism — reflecting different resource environments.'
          },
          {
            question: 'For AP purposes, the Treaty of Tordesillas (1494) dividing the non-European world between Spain and Portugal most significantly demonstrates:',
            options: [
              'European states\' claim of authority to divide the world based on papal sanction — treating non-Christian peoples as without legitimate sovereignty over their own territories, establishing the ideological framework that justified colonial appropriation globally',
              'The Treaty required consultation with indigenous peoples before land claims',
              'Papal authority over non-Christian lands was recognized under existing international law',
              'The treaty had no real consequences for either Spanish or Portuguese exploration',
            ],
            correctAnswer: 0,
            explanation: 'The Tordesillas ideology is the foundation of the "Doctrine of Discovery" — the legal fiction that non-Christian peoples lacked legitimate sovereignty. This ideology, not just military force, was the intellectual basis for European colonial land claims. AP questions about colonialism\'s ideological foundations require understanding that colonial appropriation was justified by a coherent (if morally reprehensible) legal and theological framework.'
          }
        ]
      }
    }
  ]
}
