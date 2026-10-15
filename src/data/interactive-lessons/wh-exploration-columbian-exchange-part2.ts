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
              'A desire for direct sea routes to Asian spices, bypassing the Ottoman and Venetian middlemen who marked up overland goods',
              'A desire to find new farmland for Europe\'s growing peasant population after the end of the Black Death',
              'A desire to recruit Asian allies for a joint crusade to retake Jerusalem from the Ottoman Turks',
              'A desire to export surplus European wool and grain to new markets in Africa and Asia',
            ],
            correctAnswer: 0,
            explanation: 'The commercial motivation for exploration is essential AP knowledge. Spices (pepper, cinnamon, nutmeg) were enormously valuable in Europe, and Ottoman and Venetian middlemen marked up goods on the overland routes. Vasco da Gama\'s first Indian voyage returned with spices that sold for many times the expedition\'s cost. This profit potential drove continued state investment in exploration. Crusading hopes (the Prester John legend) were a real but secondary motive.'
          },
          {
            question: 'The caravel\'s most important innovation for exploration was:',
            options: [
              'Its lateen sails, which let ships tack into the wind and return home along the African coast',
              'Its deep cargo holds, which carried more freight than the Chinese treasure ships of Zheng He',
              'Its iron-plated hull, which protected crews from Ottoman galleys in the Mediterranean',
              'Its heavy deck cannon, which let small crews conquer the coastal cities of West Africa',
            ],
            correctAnswer: 0,
            explanation: 'The caravel\'s lateen (triangular) sail is the key technological innovation enabling Atlantic exploration. Square-rigged ships could sail with the wind but not against it — making return voyages along the African coast impossible with existing technology. The caravel was small (far smaller than Zheng He\'s treasure ships), and it transformed coastal exploration from a one-way trip to a round trip, enabling systematic accumulation of geographic knowledge.'
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
              'How state-sponsored voyages, each building on the last, solved what no lone merchant could',
              'How private Genoese bankers, not the crown, financed and directed the voyages down the African coast',
              'How a single lucky voyage, not a long program, carried Portugal from Morocco to the Indian Ocean',
              'How Portugal reached India first by an overland route and only later mapped the African coastline',
            ],
            correctAnswer: 0,
            explanation: 'Portugal\'s institutional approach to exploration is uniquely significant: Prince Henry organized an exploration effort, accumulated geographic knowledge across decades, and sponsored voyages that incrementally extended knowledge of the African coast. This systematic, state-sponsored approach — not individual genius or a single lucky voyage — explains why Portugal solved the Cape route problem by 1488.'
          },
          {
            question: 'The comparison between Zheng He\'s voyages (1405-1433) and European exploration demonstrates:',
            options: [
              'Ming court politics rather than any lack of technology ended voyages that Europeans kept funding',
              'Chinese ships were smaller and less seaworthy than European ones, so China could not sustain long voyages',
              'China\'s voyages aimed at conquest and settlement, so they ended once the Ming lost interest in new colonies',
              'European states and Ming China shared the same aims, so their different results came down to chance',
            ],
            correctAnswer: 0,
            explanation: 'The Zheng He vs. European exploration comparison is one of AP World History\'s most important questions: Chinese ships were LARGER and more sophisticated; Zheng He reached East Africa decades before da Gama. China discontinued the voyages after 1433 (Confucian court opposition and priorities shifting to northern land threats); Europe continued to colonization. The voyages were tribute diplomacy, not conquest. This demonstrates that political/institutional factors (not just technology) determine which civilizations extend their power globally.'
          },
          {
            question: 'Bartolomeu Dias\'s 1488 rounding of the Cape of Good Hope was historically significant because:',
            options: [
              'It proved a sea route to the Indian Ocean existed, opening the way for da Gama\'s 1498 voyage to India',
              'It made Dias the first European to reach India, opening Portugal\'s direct trade in Indian pepper',
              'It opened Portugal\'s first trading posts in West Africa, beginning its gold trade along the Guinea coast',
              'It gave Portugal control of the Strait of Malacca, opening its direct trade with the Spice Islands',
            ],
            correctAnswer: 0,
            explanation: 'Dias\'s voyage is the "proof of concept" that unlocked the Indian Ocean route: before 1488, Portuguese explorers didn\'t know whether Africa could be rounded. After 1488, the question was no longer "can we get there?" but "who will complete the route?" Dias turned back before reaching India; da Gama\'s 1498 voyage followed the path Dias proved was possible. Portugal\'s West African posts (Elmina, 1482) came earlier, and Malacca was taken only in 1511.'
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
      id: 'whex2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison between Portuguese and Spanish exploration strategies best supports which argument?',
            options: [
              'Portugal fortified ports to tax existing Asian sea trade, while Spain conquered and settled American land',
              'Spain built fortified ports to tax existing Asian sea trade, while Portugal conquered vast American land',
              'Portugal and Spain both conquered large inland empires, while leaving coastal trade to local merchants',
              'Portugal relied on missionaries to win over Asian rulers, while Spain relied on alliances with Aztec rulers',
            ],
            correctAnswer: 0,
            explanation: 'This distinction is AP-important: the Portuguese Estado da India worked by inserting Portuguese military force into existing Indian Ocean commercial networks (the African coast and Indian Ocean ports), charging protection fees. Spanish colonialism worked by controlling land and indigenous/enslaved labor in the Americas. Both were extractive, but through fundamentally different mechanisms — trading-post empire vs. territorial colonialism — reflecting different geographic starting points and commercial opportunities.'
          },
          {
            question: 'For AP purposes, the Treaty of Tordesillas (1494) dividing the non-European world between Spain and Portugal most significantly demonstrates:',
            options: [
              'Iberian crowns\' papal-backed claim to carve up lands whose non-Christian peoples were denied sovereignty',
              'Iberian crowns\' promise to consult indigenous rulers before claiming land on either side of the line',
              'Iberian crowns\' recognition of Ottoman and Ming claims to the seas east of the line of demarcation',
              'Iberian crowns\' acceptance that the English and French had equal rights to settle any unclaimed coast',
            ],
            correctAnswer: 0,
            explanation: 'The Tordesillas ideology is the foundation of the "Doctrine of Discovery" — the legal fiction that non-Christian peoples lacked legitimate sovereignty. The treaty was a bilateral Spain–Portugal agreement that moved the line drawn in a 1493 papal bull; the pope later confirmed it. This ideology, not just military force, was the intellectual basis for European colonial land claims. England and France rejected the division. AP questions about colonialism\'s ideological foundations require understanding that colonial appropriation was justified by a coherent (if morally reprehensible) legal and theological framework.'
          }
        ]
      }
    }
  ]
}
