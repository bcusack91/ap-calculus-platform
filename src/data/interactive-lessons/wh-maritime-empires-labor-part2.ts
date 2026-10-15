export const whMaritimeEmpiresLaborPart2Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmelf2-intro',
      type: 'text' as const,
      content: `
# ⚓ Maritime Empires & Labor Systems (c. 1450–1750)

**Part 2 of 7 — Portuguese and Spanish Maritime Empires**

---

> 🔑 **Key Concept:** The Portuguese Estado da India (Indian Ocean trading-post empire) and Spanish territorial empire in the Americas represent two different models of early modern empire-building. AP questions compare these models, evaluate their labor systems, and connect colonial extraction to global commerce.
      `
    },
    {
      id: 'whmelf2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Portuguese Estado da India differed from the Spanish American empire primarily in that:',
            options: [
              'Portugal fortified ocean chokepoints to tax existing trade, while Spain conquered and settled vast lands',
              'Portugal conquered large inland territories across Asia, while Spain built coastal posts to tax American trade',
              'Portugal relied on Christian native allies to rule Asia, while Spain ruled its colonies only through viceroys',
              'Portugal let private companies run its empire, while Spain governed every colony directly from Seville',
            ],
            correctAnswer: 0,
            explanation: 'The trading-post vs. territorial distinction is the key AP comparison between Portuguese and Spanish empires. Estado da India built fortified posts at chokepoints (Goa, Hormuz, Malacca) and charged protection fees to existing merchants; it was efficient for a small country (Portugal had ~1-2 million people). Spain\'s territorial model required much larger investments in governance but also generated greater long-term economic control.'
          },
          {
            question: 'The Portuguese cartaz system (requiring Indian Ocean merchants to purchase protection passes) demonstrates:',
            options: [
              'How naval power could force fees on an existing trade network without replacing it',
              'How Portuguese convoys could win the trust of Gujarati and Arab merchants by offering cheap insurance',
              'How Portuguese cannon could end Asian merchants\' role in the spice trade and replace them by 1520',
              'How an Indian Ocean treaty system could set common rules that Asian and European traders accepted',
            ],
            correctAnswer: 0,
            explanation: 'The cartaz is a model AP example of how power asymmetry (military technology advantage) can extract profit from existing economic systems without creating new ones. It was essentially organized extortion backed by Portuguese cannon. Indian Ocean merchants continued to trade — they simply had to pay Portuguese protection fees or face attack. Portuguese disruption was real but partial: the existing commercial networks (Arab, Indian, Malay) survived and adapted.'
          }
        ]
      }
    },
    {
      id: 'whmelf2-content',
      type: 'text' as const,
      content: `
## 📖 Portuguese and Spanish Maritime Empires

> **Two Models of Empire**

| Feature | Portuguese Estado da India | Spanish Territorial Empire |
|---------|---------------------------|---------------------------|
| Geography | Indian Ocean, West Africa, Brazil | Americas (Caribbean, Mexico, Peru) |
| Method | Trading posts + armed ships | Conquest + territorial settlement |
| Labor | Enslaved Africans (Brazil), existing trade networks (Asia) | Encomienda, mita, debt peonage |
| Key commodity | Spices, gold (Africa), sugar (Brazil) | Silver (Potosí), sugar (Caribbean) |

> **Estado da India: Portuguese Indian Ocean Empire**

The Portuguese inserted themselves into existing Indian Ocean trade:

- **Method:** Built fortified trading posts (feitorias) at key ports — Goa (India), Malacca (SE Asia), Hormuz (Persian Gulf)
- **Revenue:** Charged "cartaz" (protection fees) to Indian Ocean merchants — pay or be attacked
- **Scope:** Never controlled the interior; controlled choke points of sea routes
- **Result:** Redirected some Asian luxury trade through Portuguese-controlled routes; overall disrupted but did not replace existing Indian Ocean commerce

> **Spanish Territorial Empire**

Spain built the first large territorial empire outside Europe:

- **Conquest:** Hernán Cortés (Aztec, 1521), Francisco Pizarro (Inca, 1533)
- **Territory:** New Spain (Mexico, Central America) + Viceroyalty of Peru (South America)
- **Governance:** Viceroys appointed by Spanish Crown; audiencias (courts) for legal disputes
- **Wealth:** Silver extraction from Potosí (Bolivia) and Zacatecas (Mexico) was the primary goal

> **AP Comparison Anchor**

- **Portuguese vs. Spanish empire:** trading-post vs. territorial models reflect different geographic opportunities (existing Indian Ocean commerce vs. new American territories) and different resource types (spices/gold vs. silver/land)
- **Both empires relied on coerced labor** — Portuguese in Brazil used enslaved Africans; Spanish used encomienda/mita/hacienda systems
      `
    },
    {
      id: 'whmelf2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why did Portugal choose the trading-post model while Spain built territorial colonies?',
            options: [
              'Portugal met strong commercial Asian states, while Spain met American empires weakened by disease',
              'Portugal had a larger army than Spain, while Spain lacked the warships needed for long Asian voyages',
              'Portugal was barred by papal decree from conquest, while Spain received papal approval to conquer land',
              'Portugal sought converts rather than profit, while Spain sought profit rather than converts',
            ],
            correctAnswer: 0,
            explanation: 'This explanation demonstrates AP analytical sophistication: neither empire simply "chose" its model — they responded to their specific circumstances. The Mughal Empire and other Asian states were militarily formidable and commercially sophisticated; Portugal lacked the manpower to conquer them. The Aztec and Inca empires were devastated by disease and could be conquered by small Spanish forces allied with indigenous enemies of the Aztecs. Geographic and demographic contexts shaped imperial strategies.'
          },
          {
            question: 'Spanish governance of the Americas through viceroys and audiencias demonstrates:',
            options: [
              'A layered royal system whose authority was often diluted by distance and the power of local elites',
              'A layered royal system that left local rule to native nobles, who answered directly to the pope in Rome',
              'A layered royal system run by criollo viceroys, who were elected by town councils in the Americas',
              'A layered royal system whose viceroys held absolute power, with no courts or reviews from Spain',
            ],
            correctAnswer: 0,
            explanation: 'The gap between formal colonial governance structures and actual power is an AP meta-theme: on paper, viceroys (usually peninsular Spaniards appointed by the Crown) represented royal authority, and audiencias (royal courts) checked them and reviewed their conduct; in practice, the enormous distances, communication delays (months for messages to travel from Spain), and entrenched power of local elites meant that colonial governance was always a negotiation. This gap helps explain why criollo elites could eventually lead independence movements.'
          },
          {
            question: 'Comparing Portuguese Estado da India to the later British East India Company reveals:',
            options: [
              'Both began as armed traders, but only the English firm went on to rule large territories after Plassey',
              'Both began as armed traders, but only the Portuguese moved on to rule large Indian territories after Goa',
              'Both began as territorial empires, but each shrank into a few coastal trading posts by the 1700s',
              'Both began as unarmed merchants, and neither used military force against Asian rulers at any point',
            ],
            correctAnswer: 0,
            explanation: 'Comparing Portuguese and British Indian Ocean empire demonstrates how similar institutional forms can evolve in different directions. Both started as armed trading organizations; the Portuguese remained primarily coastal and commercial (Goa stayed a small enclave); the British Company expanded inland after the Battle of Plassey (1757) to become a territorial power that eventually governed most of India. Britain\'s greater military and financial power in the 18th-19th centuries enabled what Portugal\'s 16th-17th century power could not.'
          }
        ]
      }
    },
    {
      id: 'whmelf2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Portuguese Indian Ocean empire of trading posts and armed ships was the ___',
            options: ['Estado da India', 'British East India Company', 'Dutch VOC', 'Mughal Empire']
          },
          {
            label: 'The Spanish colonial labor system granting individuals rights to indigenous workers was the ___',
            options: ['Encomienda', 'Millet system', 'Devshirme', 'Zamindari system']
          },
          {
            label: 'The labor system where workers were bound to land through impossible-to-repay debts was ___',
            options: ['Debt peonage', 'Indentured servitude', 'Mit\'a labor', 'Chattel slavery']
          }
        ],
        correctAnswers: ['Estado da India', 'Encomienda', 'Debt peonage'],
        hint1: 'Portuguese Indian Ocean trading-post empire — armed ships charging protection fees',
        hint2: 'Spanish colonial labor grant — individual colonists — indigenous workers',
        hint3: 'Bound labor through unpayable debt — hacienda system — ongoing coercion',
        explanation: 'The Estado da India was the Portuguese model of empire: not territorial control but commercial monopoly enforced by armed ships. The encomienda gave individual Spanish colonists direct rights to indigenous labor. Debt peonage was the long-term mechanism that kept workers bound to haciendas long after encomienda was officially abolished.'
      }
    },
    {
      id: 'whmelf2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison of Portuguese and Spanish colonial systems would most accurately conclude:',
            options: [
              'Both extracted wealth by coercion, but by different methods that left different societies',
              'Both extracted wealth through territorial conquest, and both built the same mita and encomienda systems',
              'Both extracted wealth mainly through voluntary trade, and neither empire used forced labor in its colonies',
              'Portugal built the larger and wealthier empire, while Spain\'s colonies remained small coastal posts',
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP credit by: (1) acknowledging similarity (both extracted wealth through coercion), (2) identifying meaningful difference (Portuguese trading-post extraction vs. Spanish territorial extraction via encomienda/mita), (3) explaining why they differed (different opportunities/contexts), and (4) connecting to consequences (different long-term social structures). AP comparison analysis should always explain WHY differences exist, not just describe them.'
          },
          {
            question: 'The Treaty of Tordesillas (1494) dividing the world between Spain and Portugal demonstrates the limits of European colonial power because:',
            options: [
              'Rival states such as England, France and the Netherlands ignored the line it drew',
              'Iberian monarchs abandoned the line within a decade and shared all colonies with their rivals',
              'Indigenous rulers took the treaty to papal courts and won back most of the land it divided',
              'The Ottoman navy enforced its own line in the Atlantic and kept Iberian ships out of Africa',
            ],
            correctAnswer: 0,
            explanation: 'The Tordesillas treaty illustrates the gap between claimed and actual colonial authority. England, France, and the Netherlands all established colonies in violation of the Tordesillas line (English settlements in North America; French Caribbean islands; Dutch posts in Asia and the Americas). The treaty reveals that claims of sovereignty require enforcement capability: colonial sovereignty was a legal claim backed by force, and when the force was insufficient, the claim was contested.'
          }
        ]
      }
    }
  ]
}
