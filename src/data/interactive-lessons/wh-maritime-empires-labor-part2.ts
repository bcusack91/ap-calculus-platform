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
              'Portugal built a network of fortified trading posts at key Indian Ocean chokepoints, extracting revenue by charging protection fees to existing merchants, rather than conquering and settling large territories as Spain did in the Americas',
              'Portugal conquered large territorial empires throughout Asia while Spain built trading posts',
              'The two empires had identical approaches to colonial governance',
              'Portugal relied primarily on indigenous labor while Spain used enslaved Africans',
            ],
            correctAnswer: 0,
            explanation: 'The trading-post vs. territorial distinction is the key AP comparison between Portuguese and Spanish empires. Estado da India was efficient for a small country (Portugal had ~1-2 million people): it extracted revenue from existing commerce without the enormous cost of territorial administration. Spain\'s territorial model required much larger investments in governance but also generated greater long-term economic control.'
          },
          {
            question: 'The Portuguese cartaz system (requiring Indian Ocean merchants to purchase protection passes) demonstrates:',
            options: [
              'How superior naval technology could be used to impose protection fees on existing commercial networks — the cartaz system was essentially organized extortion backed by Portuguese cannon power, redirecting some profit from Indian Ocean trade into Portuguese coffers without replacing the underlying commercial system',
              'The cartaz system was a voluntary insurance program welcomed by Indian Ocean merchants',
              'Portuguese naval power eliminated all competition in the Indian Ocean',
              'The cartaz system benefited Indian Ocean merchants by reducing piracy',
            ],
            correctAnswer: 0,
            explanation: 'The cartaz is a model AP example of how power asymmetry (military technology advantage) can extract profit from existing economic systems without creating new ones. Indian Ocean merchants continued to trade — they simply had to pay Portuguese protection fees or face attack. Portuguese disruption of Indian Ocean commerce was real but partial: the existing commercial networks (Arab, Indian, Malay) survived and adapted, ultimately reasserting themselves as Portuguese power declined.'
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
              'Different geographic circumstances produced different strategies: Portugal encountered densely populated, commercially sophisticated Asian civilizations with existing trade networks that could not be easily conquered; Spain encountered American civilizations already weakened by disease that could be conquered and administered as territories',
              'Portugal\'s military was stronger than Spain\'s, allowing it to avoid territorial conquest',
              'Spain chose territorial empire because it was more profitable in all circumstances',
              'The two empires made identical strategic choices for identical reasons',
            ],
            correctAnswer: 0,
            explanation: 'This explanation demonstrates AP analytical sophistication: neither empire simply "chose" its model — they responded rationally to their specific circumstances. The Mughal Empire was militarily formidable; Portugal lacked the manpower to conquer India. The Aztec and Inca empires were devastated by disease and could be conquered by small Spanish forces. Geographic and demographic contexts shaped imperial strategies.'
          },
          {
            question: 'Spanish governance of the Americas through viceroys and audiencias demonstrates:',
            options: [
              'A layered colonial administration where the Crown attempted to maintain direct control by appointing peninsular Spaniards as viceroys, while audiencias (courts) served both administrative and legal functions — but the system\'s remoteness from Spain and the power of local landholders (criollos) meant that royal authority was often diluted in practice',
              'Spanish colonial governance gave complete autonomy to local populations',
              'The viceroyalty system gave colonial administrators absolute power with no oversight from Spain',
              'Spanish governance was identical to indigenous governance systems it replaced',
            ],
            correctAnswer: 0,
            explanation: 'The gap between formal colonial governance structures and actual power is an AP meta-theme: on paper, viceroys represented the Crown\'s absolute authority; in practice, the enormous distances, communication delays (months for messages to travel from Spain), and entrenched power of local elites meant that colonial governance was always a negotiation between Crown authority and local interest. This gap helps explain why criollo elites could eventually lead independence movements.'
          },
          {
            question: 'Comparing Portuguese Estado da India to the later British East India Company reveals:',
            options: [
              'Both operated as armed trading organizations extracting profit from Asian commerce, but the British East India Company eventually evolved from trading-post empire to territorial control (especially after 1757 Battle of Plassey) while the Portuguese remained primarily a trading-post empire — demonstrating different trajectories even within similar imperial forms',
              'The British East India Company and Estado da India were identical in every respect',
              'The British East India Company was entirely different with no similarities to Portuguese empire',
              'Neither organization ever exercised military power in their commercial activities',
            ],
            correctAnswer: 0,
            explanation: 'Comparing Portuguese and British Indian Ocean empire demonstrates how similar institutional forms can evolve in different directions. Both started as armed trading organizations; the Portuguese remained primarily coastal and commercial; the British Company expanded inland to become a territorial empire that eventually governed all of India. The difference reflects changing power balances: Britain\'s greater industrial/military power in the 18th-19th centuries enabled what Portugal\'s 16th-17th century power could not.'
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
              'Both empires extracted wealth from colonized regions through combinations of commercial coercion and forced labor, but their different methods (Portuguese trading-post extraction vs. Spanish territorial extraction via encomienda/mita) reflected different opportunities and produced different long-term social structures in their respective colonial zones',
              'Portuguese colonialism was entirely beneficial while Spanish was entirely exploitative',
              'Both empires had identical labor systems and governance structures',
              'The Portuguese empire was more extensive and powerful than the Spanish in every respect',
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP credit by: (1) acknowledging similarity (both extracted wealth through coercion), (2) identifying meaningful difference (methods of extraction), (3) explaining why they differed (different opportunities/contexts), and (4) connecting to consequences (different social structures). AP comparison analysis should always explain WHY differences exist, not just describe them.'
          },
          {
            question: 'The Treaty of Tordesillas (1494) dividing the world between Spain and Portugal demonstrates the limits of European colonial power because:',
            options: [
              'Spain and Portugal could divide the non-European world between themselves on paper, but other European powers (England, France, Netherlands) simply ignored the treaty — demonstrating that claims of sovereignty require enforcement capability to be meaningful, and that early modern colonial power was always contested and provisional',
              'The treaty successfully prevented all other European powers from colonial expansion',
              'All European powers respected the Tordesillas line throughout the colonial period',
              'The treaty demonstrated that European nations worked cooperatively on colonial governance',
            ],
            correctAnswer: 0,
            explanation: 'The Tordesillas treaty illustrates the gap between claimed and actual colonial authority. England, France, and the Netherlands all established colonies in violation of the Tordesillas line (English settlements in North America; French Caribbean islands; Dutch East India Company). The treaty reveals that colonial sovereignty was a legal claim backed by force — and when the force was insufficient, the claim was meaningless.'
          }
        ]
      }
    }
  ]
}
