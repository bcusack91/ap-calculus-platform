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
              'European manufactured goods bought enslaved Africans, whose labor in the Americas produced raw materials for Europe',
              'European raw materials went to Africa, African manufactured goods went to the Americas, and American captives went to Europe',
              'American silver bought Asian silk and spices, which Europeans resold in Africa in exchange for gold dust and ivory',
              'African gold paid for European textiles, which were shipped to the Americas and exchanged for indigenous labor'
            ],
            correctAnswer: 0,
            explanation: 'The triangular trade followed a specific pattern: European manufactured goods (guns, textiles, metal) → Africa, where they were exchanged for enslaved people → Americas (Middle Passage), where enslaved labor produced raw materials (sugar, tobacco, cotton) → Europe for processing and consumption.'
          },
          {
            question: 'Why did the Dutch East India Company (VOC) become one of the most powerful organizations of the 17th century?',
            options: [
              'It was a chartered joint-stock firm that the Dutch state let wage war, sign treaties and found colonies',
              'It was a missionary society funded by the Dutch Reformed Church to spread Calvinism across Asian port cities',
              'It was a royal navy department run directly by the Dutch king to patrol trade routes to Asia',
              'It was a merchant guild of Amsterdam families who shared ships but kept their profits separate'
            ],
            correctAnswer: 0,
            explanation: 'The VOC (founded 1602) was the world\'s first publicly traded joint-stock company and often called the first multinational corporation. The Dutch Republic (which had no king until 1806) granted it quasi-governmental powers — it could raise armies, negotiate treaties, establish colonies, and even coin money. It monopolized the spice trade from the East Indies.'
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
              'Chattel slavery made people hereditary property by race, while the encomienda claimed native labor without owning workers',
              'Chattel slavery claimed native labor without owning workers, while the encomienda made people hereditary property by race',
              'Chattel slavery bound workers for fixed terms of four to seven years, while the encomienda bound them for life',
              'Chattel slavery applied only to war captives, while the encomienda applied to anyone convicted of a crime'
            ],
            correctAnswer: 0,
            explanation: 'Chattel slavery was unique in treating humans as inheritable property with a permanent, race-based status. The encomienda was a labor grant — the Spanish crown assigned indigenous people to colonists for labor and tribute, but workers were technically not "property" and the grant was not hereditary (though in practice it was brutal and exploitative). Fixed terms of four to seven years describe indentured servitude, not either system.'
          },
          {
            question: 'Which destination received the largest proportion of enslaved Africans during the Atlantic slave trade?',
            options: [
              'The British colonies of mainland North America',
              'Brazil and the sugar islands of the Caribbean',
              'The silver-mining regions of Spanish Mexico and Peru',
              'The Atlantic sugar islands of Madeira and São Tomé'
            ],
            correctAnswer: 1,
            explanation: 'Approximately 40-45% of all enslaved Africans went to Brazil and roughly another 40% to the Caribbean — both driven by the labor demands of sugar production. Only about 4-5% went to North America. Madeira and São Tomé pioneered the sugar plantation model before 1500 but received far fewer captives. Sugar cultivation was extraordinarily labor-intensive and deadly, requiring constant importation of new workers.'
          }
        ]
      }
    }
  ]
};
