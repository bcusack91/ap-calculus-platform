export const whMaritimeEmpiresLaborPart4Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmelf4-intro',
      type: 'text' as const,
      content: `
# ⚓ Maritime Empires & Labor Systems (c. 1450–1750)

**Part 4 of 7 — The Atlantic Slave Trade**

---

> 🔑 **Key Concept:** The transatlantic slave trade (c. 1500-1888) transported approximately 12.5 million enslaved Africans from West and Central Africa to the Americas, with ~2 million dying during the Middle Passage. AP questions focus on the scale, causes, African dimensions of the trade, resistance, and long-term consequences for Africa, the Americas, and global commerce.
      `
    },
    {
      id: 'whmelf4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Atlantic slave trade\'s most historically significant feature for AP analysis was:',
            options: [
              'Its extraordinary scale (12.5 million people over four centuries) combined with its systematic racialization (African descent = enslaved) created a new form of slavery categorically different from earlier historical slavery — the foundation of racial hierarchy in the Americas that persisted long after legal emancipation',
              'The slave trade was historically insignificant because it ended in the 19th century',
              'The Atlantic slave trade was identical in character to ancient Mediterranean slavery',
              'Slavery had always been racial before the Atlantic trade began',
            ],
            correctAnswer: 0,
            explanation: 'The Atlantic slave trade\'s novelty is not slavery itself (which existed in many societies) but its racialization and scale. Ancient Mediterranean, Islamic, and African slavery all included people of many ethnic backgrounds; American chattel slavery progressively defined "enslaved" as synonymous with "African-descended." This racial definition — and its legal institutionalization — created uniquely lasting consequences.'
          },
          {
            question: 'African kingdoms\' participation in the Atlantic slave trade demonstrates which AP complexity?',
            options: [
              'The slave trade was a product of African-European commercial relationships in which some African political elites (Dahomey, Ashanti, Oyo) profited by selling captives to European traders, while the majority of African peoples bore the costs as victims of increased warfare and enslavement — demonstrating that colonial economic systems created internal divisions within colonized/traded societies',
              'African peoples unanimously resisted the slave trade without any African participation',
              'African kingdom participation means the slave trade was mutually beneficial and non-coercive',
              'European traders had no African partners and simply raided African coasts for enslaved people',
            ],
            correctAnswer: 0,
            explanation: 'The African dimension of the slave trade is a model AP complexity point: it challenges both the "innocent victims only" narrative (some African elites did profit) and the "mutual benefit" narrative (ordinary African people did not benefit; they were the victims). Understanding how the slave trade created internal African divisions — elites profiting while others suffered — is essential for understanding both the trade\'s operation and its long-term consequences for African society.'
          }
        ]
      }
    },
    {
      id: 'whmelf4-content',
      type: 'text' as const,
      content: `
## 📖 The Atlantic Slave Trade

> **Scale and Scope**

| Feature | Details |
|---------|---------|
| **Total enslaved** | ~12.5 million transported, 1500-1900 |
| **Deaths in transit** | ~2 million (15-20% Middle Passage mortality) |
| **Peak period** | 18th century; ~6 million transported in 1700s |
| **Destinations** | Brazil 46%, Caribbean 43%, North America 4%, other 7% |
| **Origins** | West Africa (Senegambia, Gold Coast, Bight of Benin, Bight of Biafra), Central Africa (Kongo) |

> **Causes and African Dimensions**

The Atlantic slave trade required African participation:

- African kingdoms sold enslaved captives to European traders at the coast
- European demand for enslaved people transformed internal African warfare — wars fought partly to generate enslaved captives for sale
- **Dahomey, Ashanti, Oyo** became powerful partly because they supplied the slave trade and received firearms in return
- Firearms from the slave trade enabled more African warfare → more captives → more slaves — a destructive cycle
- African elites profited from the trade; ordinary African people bore its costs (enslavement, societal disruption)

> **The Middle Passage**

The Atlantic crossing was catastrophic:

- Ships packed enslaved people in "tight pack" formations — 1.5 sq ft per person in some cases
- Mortality from disease (dysentery, smallpox), dehydration, suicide, violence
- Enslaved people were sometimes thrown overboard alive if they became ill (to collect insurance)
- Zong massacre (1781): British captain threw 132 enslaved Africans overboard; insurance case became abolitionist cause

> **Resistance**

Enslaved peoples resisted at every stage:

- **Shipboard revolts:** Hundreds documented; Amistad (1839) most famous
- **Maroon communities:** Quilombo dos Palmares (Brazil), Jamaican Maroons, Surinamese Maroons
- **Cultural retention:** Music, religion, language elements survived
- **Daily resistance:** Sabotage, work slowdowns, feigned illness

> **AP Comparison Anchor**

- **Atlantic slave trade vs. Indian Ocean slave trade:** Both moved enslaved peoples; Indian Ocean trade was smaller and less racially defined; Atlantic trade was larger, more systematic, and increasingly racialized
- **Long-term African consequences:** Population loss, political destabilization, economic disruption that contributed to African vulnerability to 19th-century colonialism
      `
    },
    {
      id: 'whmelf4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Zong massacre (1781) — in which enslaved Africans were thrown overboard so their enslaver could collect insurance — is historically significant for AP because:',
            options: [
              'It revealed the logical extreme of chattel slavery\'s legal framework: if enslaved people were property, they could be destroyed to collect insurance like any other cargo — a revelation that strengthened abolitionist arguments by demonstrating the moral bankruptcy of the system\'s own legal logic',
              'The Zong massacre was a minor incident with no historical significance',
              'The massacre demonstrated that enslaved people had legal rights that were violated',
              'Insurance companies supported the massacre as a standard business practice',
            ],
            correctAnswer: 0,
            explanation: 'The Zong case became an abolitionist cause célèbre because it forced British courts and public opinion to confront the legal logic of chattel slavery: if enslaved people were property, the captain\'s action was legally defensible. British abolitionist Granville Sharp used the case to argue that the slave trade was incompatible with any legal system treating enslaved people as human. The case demonstrates how extreme cases can illuminate the systemic logic of unjust institutions.'
          },
          {
            question: 'Resistance to the Atlantic slave trade (shipboard revolts, maroon communities, daily resistance) demonstrates:',
            options: [
              'Enslaved peoples were not passive victims but active agents who resisted enslavement in every available form — from spectacular shipboard revolts to everyday sabotage — demonstrating that the system required constant violence and surveillance to maintain, not just initial coercion',
              'Enslaved peoples generally accepted their condition without significant resistance',
              'Only armed rebellion counts as meaningful resistance to slavery',
              'Maroon communities were too small to have any historical significance',
            ],
            correctAnswer: 0,
            explanation: 'The spectrum of resistance is AP\'s corrective to the "passive victim" narrative: individual survival strategies (feigning illness, working slowly), cultural retention (preserving African music and religious practices within slavery), maroon community formation, and armed revolt all represent forms of resistance across a spectrum of danger and effectiveness. The fact that plantation owners invested enormous resources in surveillance, pass systems, and brutal punishment demonstrates that they understood resistance was constant.'
          },
          {
            question: 'The long-term consequences of the Atlantic slave trade for West and Central Africa included:',
            options: [
              'Demographic loss (millions of mostly young adults removed from the population), political destabilization (warfare to generate enslaved captives disrupted state structures), economic distortion (economies oriented toward slave-trading rather than production), and increased vulnerability to 19th-century European colonialism resulting from weakened political and demographic capacity',
              'The slave trade had no lasting impact on African societies',
              'West African societies became stronger and more unified as a result of the slave trade',
              'Demographic loss had no political or economic consequences for African states',
            ],
            correctAnswer: 0,
            explanation: 'The long-term consequences for Africa are often underemphasized in AP but are essential for understanding 19th-century African colonialism: the Atlantic slave trade over four centuries removed millions of mostly young adults (the most productive demographic), distorted African political economies toward slave-raiding rather than agricultural production, introduced European firearms that intensified internal warfare, and left many West African states weakened at precisely the moment when European colonial ambitions expanded.'
          }
        ]
      }
    },
    {
      id: 'whmelf4-dropdown',
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
      id: 'whmelf4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing the Atlantic slave trade to the Indian Ocean slave trade reveals:',
            options: [
              'Both moved enslaved people across long distances, but the Atlantic trade was far larger in scale (~12.5 million vs. ~3 million for Indian Ocean over comparable periods), more systematically racialized (African descent = enslaved in Atlantic; Indian Ocean slavery included diverse ethnic groups), and more destructive of origin societies',
              'The Indian Ocean slave trade was larger than the Atlantic trade',
              'Both slave trades were identical in their racial basis and scale',
              'The Indian Ocean trade was more racially defined than the Atlantic trade',
            ],
            correctAnswer: 0,
            explanation: 'The comparison reveals what was unique about the Atlantic trade: its industrialized scale and systematic racialization. Indian Ocean slavery existed within a broader commercial context and included enslaved people from many ethnic backgrounds (East Africans, Central Asians, South Asians) without creating a single racial category. The Atlantic trade\'s specific racialization — and its legal institutionalization through slave codes — was a distinctive feature of American colonial capitalism.'
          },
          {
            question: 'An AP LEQ asks: "Evaluate the extent to which economic factors explain the development and expansion of the Atlantic slave trade." Which argument earns the highest score?',
            options: [
              'Economic factors were primary but not sole drivers of the Atlantic slave trade: plantation profitability (sugar, tobacco, cotton demand) created the economic incentive; the legal construction of racial slavery reduced costs by making slavery heritable; and African political economies contributed to the trade by supplying captives — but ideological factors (racial hierarchy, Christian mission justifications) also enabled a system that pure economic rationality alone would not explain, since exploiting free labor is rarely actually economically "rational" — the profitability depended on the prior construction of a legal system denying enslaved people\'s humanity',
              'Economic factors alone explain the slave trade with no ideological dimension',
              'The slave trade had no economic rationale and was purely ideological',
              'Economic factors are irrelevant to understanding the slave trade',
            ],
            correctAnswer: 0,
            explanation: 'This argument earns full AP complexity by: (1) affirming economic factors as primary, (2) complicating the economic argument (profitability depended on prior legal construction of slavery), (3) identifying non-economic factors (racial ideology, Christian justifications), and (4) demonstrating that the two dimensions were intertwined (economic incentive + ideological enablement = the actual historical system). AP rewards arguments that transcend simple monocausal explanations.'
          }
        ]
      }
    }
  ]
}
