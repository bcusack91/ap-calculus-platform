export const whMaritimeEmpiresLaborPart1Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmariti1-intro',
      type: 'text' as const,
      content: `
# ⚓ Maritime Empires & Labor Systems

**Part 1 of 7 — Colonial Economies & Forced Labor**

---

| Section |
|---------|
| 📖 European Maritime Empires |
| The Atlantic Slave Trade |
| Colonial Labor Systems |
| Mercantilism & the Global Economy |

> 🔑 **Key Concept:** The AP exam tests how European colonial empires created **coercive labor systems** to extract wealth from conquered territories. You must compare different labor systems and understand how the Atlantic slave trade connected three continents.
      `
    },
    {
      id: 'whmariti1-empires',
      type: 'text' as const,
      content: `
## 📖 European Maritime Empires

By the 1600s–1700s, several European powers had established vast colonial empires connected by oceanic trade:

| Empire | Key Colonies | Economic Focus |
|---|---|---|
| **Spain** | Mexico, Peru, Philippines, Caribbean | Silver mining (Potosí), sugar, haciendas |
| **Portugal** | Brazil, coastal Africa, Goa, Macau | Sugar plantations, slave trade, spice trade |
| **Britain** | North America, Caribbean, India (later) | Tobacco, sugar, fur trade, later textiles |
| **France** | Canada, Louisiana, Caribbean, W. Africa | Fur trade, sugar (Saint-Domingue/Haiti) |
| **Netherlands** | Indonesia (Dutch East Indies), South Africa, Caribbean | Spice trade (nutmeg, cloves), banking/finance |

### The Triangle Trade
The **Atlantic triangular trade** connected three continents:
1. **Europe → Africa** — manufactured goods (textiles, guns, metal goods) traded for enslaved people
2. **Africa → Americas** — the **Middle Passage**: enslaved Africans transported to plantations
3. **Americas → Europe** — raw materials (sugar, tobacco, cotton, silver) shipped to European markets

> 🔑 **AP Connection:** The AP exam frequently asks about the **Middle Passage** — the horrific transatlantic crossing where 12–15% of enslaved Africans died en route due to disease, starvation, and abuse.
      `
    },
    {
      id: 'whmariti1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes the "triangular trade" across the Atlantic?',
            options: [
              'Manufactured goods from Europe were traded for enslaved Africans, who were shipped to the Americas to produce raw materials exported back to Europe',
              'Raw materials flowed from Europe to Africa, manufactured goods from Africa to the Americas, and enslaved people from the Americas to Europe',
              'All three legs of the trade exclusively involved the exchange of agricultural products between continents',
              'The triangular trade operated primarily between the Americas, Asia, and Australia'
            ],
            correctAnswer: 0,
            explanation: 'The triangular trade followed a specific pattern: European manufactured goods (guns, textiles, metal) → Africa, where they were exchanged for enslaved people → Americas (Middle Passage), where enslaved labor produced raw materials (sugar, tobacco, cotton) → Europe for processing and consumption.'
          },
          {
            question: 'Why did the Dutch East India Company (VOC) become one of the most powerful organizations of the 17th century?',
            options: [
              'It was the world\'s first multinational corporation, granted government powers including the right to wage war, negotiate treaties, and establish colonies',
              'It was a charitable religious organization funded by the Dutch Reformed Church to spread Christianity globally',
              'It exclusively controlled all European agriculture and had a monopoly on food production within the Netherlands',
              'It was a military alliance between the Netherlands and Spain that jointly administered colonial territories'
            ],
            correctAnswer: 0,
            explanation: 'The VOC (founded 1602) was the world\'s first joint-stock company and first to issue stock. The Dutch government granted it quasi-governmental powers — it could raise armies, negotiate treaties, establish colonies, and even coin money. It monopolized the spice trade from the East Indies.'
          }
        ]
      }
    },
    {
      id: 'whmariti1-labor',
      type: 'text' as const,
      content: `
## 📖 Colonial Labor Systems

European colonial economies depended on **coercive labor systems** to extract wealth:

| System | Description | Where Used |
|---|---|---|
| **Chattel slavery** | People treated as property; hereditary; race-based | Americas (plantations) |
| **Encomienda** | Spanish grants giving colonists control over indigenous labor in exchange for "protection" and Christian instruction | Spanish Americas |
| **Hacienda** | Large agricultural estates using debt peonage to bind indigenous workers | Spanish Americas (replaced encomienda) |
| **Mita** | Spanish adaptation of Inca forced labor system — indigenous communities required to provide workers for silver mines | Peru (Potosí) |
| **Indentured servitude** | Contractual labor (typically 4–7 years) in exchange for passage to the Americas | British colonies |
| **Plantation system** | Large-scale, single-crop farms (sugar, tobacco, cotton) dependent on enslaved labor | Caribbean, Brazil, U.S. South |

### The Atlantic Slave Trade by the Numbers
- **12.5 million** Africans were forcibly transported to the Americas (1500–1870)
- **~1.8 million** died during the Middle Passage
- **~40%** went to Brazil; **~40%** to the Caribbean; **~5%** to North America
- West African kingdoms like **Dahomey** and **Asante** participated by capturing and selling rivals

> 🔑 **AP Connection:** The AP exam tests comparisons between labor systems. Be ready to explain how chattel slavery differed from the encomienda, mita, and indentured servitude in terms of **duration, inheritance, and racial basis**.
      `
    },
    {
      id: 'whmariti1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How did chattel slavery in the Americas differ from the Spanish encomienda system?',
            options: [
              'Under chattel slavery, enslaved people were legally defined as property with a hereditary status based on race; the encomienda granted control over indigenous labor but did not make workers property',
              'The encomienda system was harsher than chattel slavery because it had no legal protections for laborers whatsoever',
              'Both systems were functionally identical — they used the same legal framework and applied to the same racial groups',
              'Chattel slavery was voluntary and temporary, while the encomienda was permanent and involuntary'
            ],
            correctAnswer: 0,
            explanation: 'Chattel slavery was unique in treating humans as inheritable property with a permanent, race-based status. The encomienda was a labor grant — the Spanish crown assigned indigenous people to colonists for labor, but workers were technically not "property" and the grant was not hereditary (though in practice it was brutal and exploitative).'
          },
          {
            question: 'Which destination received the largest proportion of enslaved Africans during the Atlantic slave trade?',
            options: [
              'The British colonies of North America (modern United States)',
              'Brazil and the Caribbean — primarily for sugar plantation labor',
              'Spanish silver mines in Mexico and Peru',
              'European factory cities for industrial manufacturing'
            ],
            correctAnswer: 1,
            explanation: 'Approximately 40% of all enslaved Africans went to Brazil and another 40% to the Caribbean — both driven by the labor demands of sugar production. Only about 5% went to North America. Sugar cultivation was extraordinarily labor-intensive and deadly, requiring constant importation of new workers.'
          }
        ]
      }
    }
  ]
};
