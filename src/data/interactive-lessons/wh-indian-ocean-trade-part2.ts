export const whIndianOceanTradePart2Data = {
  topicSlug: 'wh-indian-ocean-trade',
  sections: [
    {
      id: 'whiot2-intro',
      type: 'text' as const,
      content: `
# 🌊 Indian Ocean Trade Networks

**Part 2 of 7 — Monsoon Winds and Indian Ocean Geography**

---

> 🔑 **Key Concept:** Indian Ocean trade was enabled by a unique geographic feature: predictable monsoon winds that reverse direction seasonally, allowing merchants to sail to their destination in one season and return in the next. AP questions focus on how geography enabled commerce and which peoples participated in this trade network before European arrival.
      `
    },
    {
      id: 'whiot2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The monsoon wind system\'s significance for Indian Ocean trade was:',
            options: [
              'Predictable seasonal wind reversals let merchants schedule voyages, contracts and returns with confidence',
              'Steady year-round winds let ships sail in any direction at any time without waiting for a season',
              'Violent monsoon storms closed the ocean to shipping except during a short summer window each year',
              'Monsoon winds mattered mainly in the Red Sea and had little effect on the wider Indian Ocean'
            ],
            correctAnswer: 0,
            explanation: 'The monsoon system is why the Indian Ocean was a commercially sophisticated network for centuries before European arrival. The predictability — not just the winds themselves — made commercial relationships possible: merchants could commit to contracts, build credit relationships, and establish permanent trading networks because they knew ships would arrive roughly on schedule. This reliability was as important as the wind direction itself.'
          },
          {
            question: 'The Indian Ocean\'s multi-civilizational character before European arrival demonstrates:',
            options: [
              'That long-distance commerce was not a European invention but was built by many Asian and African merchants',
              'That the ocean\'s commerce stayed small and local until Portuguese ships finally connected its distant ports',
              'That Chinese merchants alone carried the ocean\'s long-distance trade before European arrival',
              'That Indian Ocean exchange was mainly political tribute rather than commerce before Europeans came'
            ],
            correctAnswer: 0,
            explanation: 'The pre-European Indian Ocean is one of AP\'s most important counter-narratives: da Gama didn\'t "open" Indian Ocean trade — he arrived at the edge of a sophisticated commercial network that had been operating for centuries. The goods he sought (spices, textiles) were already moving through established networks. European arrival disrupted but did not create these networks — a crucial distinction for accurate historical analysis.'
          }
        ]
      }
    },
    {
      id: 'whiot2-content',
      type: 'text' as const,
      content: `
## 📖 Monsoon Winds and Indian Ocean Geography

> **The Monsoon Wind System**

The Indian Ocean's unique geography is the foundation of its trade:

| Season | Wind Direction | Navigation |
|--------|---------------|-----------|
| **Summer (April-September)** | Southwest to Northeast | Ships sail from East Africa/Arabia to India/SE Asia |
| **Winter (October-March)** | Northeast to Southwest | Ships return from India/SE Asia to East Africa/Arabia |

This predictable reversal was known by c. 1st century CE; merchants planned voyages around seasonal wind patterns.

> **Who Traded in the Indian Ocean?**

The Indian Ocean was a multi-civilizational commercial space before European arrival:

- **Arab merchants:** Connected Persian Gulf, Red Sea, and East African coasts; dhow ships (lateen sails)
- **Indian merchants:** Gujarat (northwest India) dominant; traded cotton textiles for spices and gold
- **Malay merchants:** Controlled Southeast Asian spice islands (Malacca Strait chokepoint)
- **East African Swahili cities:** Supplied gold, ivory, enslaved people from African interior
- **Chinese merchants:** Trading junks; Chinese porcelain found across the Indian Ocean world

> **Key Trading Cities and Chokepoints**

- **Hormuz:** Persian Gulf entry; controlled by various powers; gateway to Middle East
- **Aden:** Red Sea entry; Yemen; connection to Mediterranean via overland Egypt
- **Malacca:** Strait between Malay Peninsula and Sumatra; controlled SE Asian spice routes
- **Calicut (Kozhikode):** Major Indian port; where da Gama arrived 1498
- **Kilwa Kisiwani:** Major Swahili city; controlled Zimbabwe gold exports

> **AP Comparison Anchor**

- **Indian Ocean vs. Silk Road:** Both were multi-civilizational trade networks; Indian Ocean carried bulkier, higher-volume goods (cotton, spices); Silk Road carried luxury overland goods; both transmitted religion, technology, culture alongside commodities
- **Indian Ocean vs. Atlantic trade:** Indian Ocean was voluntary commercial exchange among roughly equal participants; Atlantic trade involved European military coercion and forced labor — fundamentally different commercial character
      `
    },
    {
      id: 'whiot2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why was the Malacca Strait strategically significant for Indian Ocean trade?',
            options: [
              'It was the narrow passage that most shipping between the Indian Ocean and South China Sea had to use',
              'It held the only deep-water harbor where ships from the Indian Ocean could repair their hulls before the monsoon',
              'It was the region\'s main source of cloves and nutmeg, which were grown on plantations along both of its shores',
              'It was a sacred pilgrimage site whose temples drew Hindu and Buddhist worshippers from across the Indian Ocean'
            ],
            correctAnswer: 0,
            explanation: 'Malacca\'s strategic importance explains why the Portuguese made it their first major Asian conquest (1511): controlling the strait meant inserting Portuguese military force into the single chokepoint through which Southeast Asian spice trade had to flow. The Sultanate of Malacca (founded c. 1400) had grown rich by providing services to passing merchants — safety, exchange facilities, translation. Portuguese conquest disrupted this multicultural commercial hub and pushed trade through alternative routes.'
          },
          {
            question: 'The presence of Chinese porcelain in archaeological sites across the Indian Ocean world (East Africa, Southeast Asia, India) demonstrates:',
            options: [
              'That Chinese manufactured goods traveled widely through Indian Ocean networks and were prized far from China',
              'That colonists from China settled the East African coast and made porcelain locally for export',
              'That European traders carried Chinese wares to Africa and India only after the Portuguese reached Calicut in 1498',
              'That porcelain served as the standard currency used by merchants in every Indian Ocean port'
            ],
            correctAnswer: 0,
            explanation: 'Archaeological distribution of Chinese porcelain is one of history\'s most elegant proofs of long-distance trade connections: Chinese blue-and-white ceramics (distinctive manufacturing technique) found in coastal East Africa, South Asia, and Southeast Asia prove commercial contact that predated written records. At Great Zimbabwe (landlocked Zimbabwe), Chinese porcelain pieces demonstrate that the gold trade connected southern African interior to Indian Ocean coastal networks, which connected to Chinese manufacturing.'
          },
          {
            question: 'Comparing the Indian Ocean and Silk Road trade networks reveals:',
            options: [
              'Both spread goods and faiths, but the sea carried bulky cargo far more cheaply than overland caravans',
              'Both were run by Chinese state merchants, but the sea route carried mostly luxury silk and porcelain',
              'The Silk Road carried larger volumes, since camel caravans could haul more cargo than ships on each trip',
              'The two networks never connected, so religions and goods moving on one never reached the other'
            ],
            correctAnswer: 0,
            explanation: 'The comparison between Indian Ocean and Silk Road networks demonstrates that different technologies (maritime vs. overland) produce different commercial characteristics: sea transport is cheaper per unit for bulk goods; overland transport is only economically viable for goods with high value-to-weight ratios. Both networks transmitted religion and culture alongside commodities — Islam spread along both; Buddhism spread along the Silk Road; Hinduism and Islam spread along Indian Ocean routes — but their commercial profiles differed significantly.'
          }
        ]
      }
    },
    {
      id: 'whiot2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The seasonal reversing winds that enabled regular Indian Ocean navigation were the ___',
            options: ['Monsoon winds', 'Trade winds', 'Jet stream', 'Doldrums']
          },
          {
            label: 'The East African coastal city-states that blended Bantu and Arab/Islamic culture were the ___',
            options: ['Swahili city-states', 'Aztec city-states', 'Mongol khanates', 'Indian Ocean sultanates']
          },
          {
            label: 'The Chinese admiral who led 7 massive expeditions into the Indian Ocean c. 1405-1433 was ___',
            options: ['Zheng He', 'Kublai Khan', 'Vasco da Gama', 'Henry the Navigator']
          }
        ],
        correctAnswers: ['Monsoon winds', 'Swahili city-states', 'Zheng He'],
        hint1: 'Seasonal wind patterns — reversal twice per year — enabled regular navigation',
        hint2: 'East African ports — Kilwa, Mombasa — Islamic + Bantu cultural synthesis',
        hint3: 'Chinese Muslim admiral — about 62 treasure ships in a fleet of ~250-317 — 7 expeditions — discontinued after 1433',
        explanation: 'Monsoon winds were the technological foundation of Indian Ocean commerce — they made regular, predictable navigation possible across enormous distances. The Swahili city-states are the model of how Indian Ocean trade produced cultural synthesis in East Africa. Zheng He\'s voyages demonstrate Chinese maritime capability and the political decision to discontinue it — one of history\'s most consequential non-events.'
      }
    },
    {
      id: 'whiot2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison of Indian Ocean trade and Atlantic triangle trade reveals which fundamental difference?',
            options: [
              'Indian Ocean exchange was polycentric and voluntary, while the Atlantic system rested on coercion and enslaved labor',
              'Indian Ocean trade relied on enslaved labor, while the Atlantic system was run by free wage workers',
              'Atlantic trade involved many equal partners, while the Indian Ocean was ruled by a single empire',
              'Indian Ocean trade moved only luxury goods, while the Atlantic trade moved only raw materials and food'
            ],
            correctAnswer: 0,
            explanation: 'This comparison is AP-important because it challenges the assumption that "global trade" always involves European dominance. The pre-European Indian Ocean was genuinely polycentric — no single power dominated — and organized around roughly voluntary commercial relationships. European arrival (Portuguese cartaz system) introduced coercive elements into an existing voluntary system. The Atlantic trade was coercive from its origins. These different organizational principles produced different consequences for the peoples involved.'
          },
          {
            question: 'The geographic distribution of Indian Ocean trade participants (Arab, Indian, Malay, Chinese, Swahili) demonstrates which AP principle?',
            options: [
              'Location near the routes and valuable products decided who took part, without any single organizing state',
              'Only peoples ruled by large land empires could join, because long voyages needed imperial funding and protection',
              'Cultural prestige rather than geography decided participation, so the most literate societies dominated the trade',
              'The network functioned only because one dominant naval power organized and policed all of its main sea lanes'
            ],
            correctAnswer: 0,
            explanation: 'The absence of a single hegemonic power in the pre-European Indian Ocean is a key AP point: the network functioned without a Rome or a China imposing order. Instead, complementary specializations (Indian cotton + Southeast Asian spices + East African gold + Chinese manufactured goods) created mutual commercial interests that sustained the network. This self-organizing commercial polycentric model contrasts with the coercive European trading-post empire model that was later imposed.'
          }
        ]
      }
    }
  ]
}
