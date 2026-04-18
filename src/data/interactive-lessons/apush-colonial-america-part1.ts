export const apushColonialAmericaPart1Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial America

**Part 1 of 7 — European Settlements & Colonial Regions**

---

### Topics in This Part

| Section |
|---------|
| 📖 Spanish, French & Dutch Colonies |
| The Three English Colonial Regions |
| Jamestown & the Virginia Colony |
| 📌 New England: Puritans & Plymouth |
| Middle & Southern Colonies Compared |

> 🔑 **Key Concept:** The AP exam expects you to compare the **three colonial regions** (New England, Middle, Southern) by their economies, demographics, labor systems, and religious motivations.
      `
    },
    {
      id: 'apushcol1-european',
      type: 'text' as const,
      content: `
## 📖 European Colonial Strategies

Different European powers established colonies with very different goals and methods:

| Power | Colonial Strategy | Key Colonies | Relationship with Natives |
|-------|------------------|--------------|--------------------------|
| **Spain** | Extraction of gold/silver; encomienda labor system; Catholic missions | New Spain (Mexico), Florida, Southwest | Conquest and forced labor; mestizo population |
| **France** | Fur trade; small settlements; Jesuit missionaries | New France (Quebec, Louisiana) | Generally cooperative (trade alliances); intermarriage |
| **Netherlands** | Trade-focused; Dutch West India Company; religious tolerance | New Netherland (New York/New Jersey) | Trade partnerships; purchased Manhattan (1626) |
| **England** | Permanent agricultural settlements; joint-stock companies; diverse motives | Virginia, Massachusetts, Pennsylvania | Varied — from early cooperation to violent conflict |

> 🔑 **AP Connection:** The exam frequently asks you to compare colonial approaches. Key contrast: **Spain** used conquest and forced labor while **France** focused on trade partnerships with relatively few settlers.
      `
    },
    {
      id: 'apushcol1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which European power\'s colonial strategy relied most heavily on the fur trade and maintaining cooperative relationships with Native Americans?',
            options: [
              'Spain — which focused on mining and the encomienda system',
              'France — which built trade alliances and had relatively few settlers',
              'England — which established large agricultural settlements',
              'Portugal — which focused on the African slave trade exclusively'
            ],
            correctAnswer: 1,
            explanation: 'France\'s colonial strategy in North America centered on the fur trade, requiring cooperation with Native American trappers and hunters. French colonies had far fewer settlers than English colonies, which contributed to more cooperative (though still unequal) relationships.'
          },
          {
            question: 'The encomienda system in Spanish colonies was significant because it:',
            options: [
              'Granted colonists the right to force Native Americans to labor on their land',
              'Established representative assemblies in all Spanish territories',
              'Created a system of free public education for indigenous peoples',
              'Prohibited the importation of enslaved Africans to the Americas'
            ],
            correctAnswer: 0,
            explanation: 'The encomienda system granted Spanish colonists (encomenderos) the right to demand tribute and labor from indigenous peoples in exchange for supposed protection and Christian instruction. In practice, it amounted to forced labor and was a major driver of indigenous population decline.'
          }
        ]
      }
    },
    {
      id: 'apushcol1-regions',
      type: 'text' as const,
      content: `
## The Three English Colonial Regions

### Comparing the Regions

| Feature | New England | Middle Colonies | Southern Colonies |
|---------|-------------|----------------|-------------------|
| **Colonies** | Massachusetts, Connecticut, Rhode Island, New Hampshire | New York, New Jersey, Pennsylvania, Delaware | Virginia, Maryland, Carolina, Georgia |
| **Economy** | Shipbuilding, fishing, timber, trade | "Breadbasket" — wheat, diverse commerce | Tobacco, rice, indigo; plantation agriculture |
| **Labor** | Family farms; some indentured servants | Mixed — family farms, artisans, merchants | Indentured servants → enslaved Africans |
| **Religion** | Puritan (Congregationalist); religious conformity | Diverse — Quakers, Dutch Reformed, Lutheran | Anglican (Church of England) |
| **Society** | Tight-knit towns; town meetings; high literacy | Ethnically diverse; urban centers (Philadelphia) | Hierarchical; planter elite; dispersed settlements |
| **Founding motive** | Religious freedom (for Puritans) | Trade and religious tolerance | Economic profit (cash crops) |

### Jamestown (1607)
- First permanent English settlement
- Founded by the **Virginia Company** (joint-stock company)
- Nearly failed — "starving time" (winter 1609–10)
- Saved by **John Rolfe's** cultivation of tobacco (1612)
- **House of Burgesses** (1619) — first representative assembly in America
- First enslaved Africans arrived in 1619

### Plymouth (1620) & Massachusetts Bay (1630)
- **Pilgrims** (Separatists) founded Plymouth; signed the **Mayflower Compact** (self-governance)
- **Puritans** founded Massachusetts Bay under **John Winthrop** — "City upon a Hill"
- Puritan society: theocratic tendencies, strict moral codes, emphasis on education (Harvard founded 1636)
      `
    },
    {
      id: 'apushcol1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What was the first representative assembly in the English colonies, established in Virginia in 1619?

2) What agreement, signed aboard ship in 1620, established self-government for the Plymouth Colony?

3) What cash crop saved the Jamestown colony from economic failure?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['House of Burgesses', 'Mayflower Compact', 'tobacco'],
        hint1: 'Two words — a legislative "House" in Virginia',
        hint2: 'Named after the ship the Pilgrims sailed on',
        hint3: 'A plant cultivated by John Rolfe starting in 1612',
        explanation: 'The House of Burgesses (1619) was the first elected legislative body in British America. The Mayflower Compact (1620) was a foundational document of self-governance signed by the Pilgrims. Tobacco became Virginia\'s primary cash crop and economic lifeline.'
      }
    },
    {
      id: 'apushcol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Colonial Regions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Plantation agriculture using enslaved labor was most associated with the ___',
            options: ['Southern Colonies', 'New England Colonies', 'Middle Colonies', 'French Colonies']
          },
          {
            label: 'The "breadbasket colonies" known for wheat production and ethnic diversity were the ___',
            options: ['Middle Colonies', 'Southern Colonies', 'New England Colonies', 'Spanish Colonies']
          },
          {
            label: 'Town meetings and Puritan religious conformity characterized the ___',
            options: ['New England Colonies', 'Middle Colonies', 'Southern Colonies', 'Dutch Colonies']
          }
        ],
        correctAnswers: ['Southern Colonies', 'Middle Colonies', 'New England Colonies'],
        hint1: 'Virginia, Maryland, and the Carolinas relied on cash crops',
        hint2: 'Pennsylvania, New York, New Jersey, Delaware',
        hint3: 'Massachusetts, Connecticut, Rhode Island, New Hampshire',
        explanation: 'The Southern Colonies developed a plantation economy reliant on enslaved labor. The Middle Colonies were called the "breadbasket" for their wheat production and attracted diverse immigrant groups. New England was defined by Puritan religious culture and town-meeting democracy.'
      }
    },
    {
      id: 'apushcol1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the Southern Colonies developed a labor system based on enslaved Africans rather than the indentured servant model used earlier?',
            options: [
              'Bacon\'s Rebellion (1676) showed the dangers of a large class of discontented former indentured servants, making enslaved labor seem more controllable to planters',
              'The English government banned indentured servitude in 1660',
              'Enslaved Africans arrived in the Southern Colonies before any indentured servants did',
              'Southern colonists morally preferred slavery to indentured servitude from the beginning'
            ],
            correctAnswer: 0,
            explanation: 'Bacon\'s Rebellion (1676) — in which poor former indentured servants and enslaved people joined together to rebel against Virginia\'s elite — alarmed planters. They increasingly turned to race-based chattel slavery as a way to create a permanent, legally distinct labor force that could not earn freedom and rebel as citizens.'
          },
          {
            question: 'John Winthrop\'s 1630 sermon describing Massachusetts Bay as a "city upon a hill" reflected which of the following beliefs?',
            options: [
              'That religious diversity should be encouraged in all the colonies',
              'That the Puritan colony should serve as a model godly community for the world',
              'That Massachusetts should become the economic center of British North America',
              'That democratic self-governance was more important than religious purity'
            ],
            correctAnswer: 1,
            explanation: 'Winthrop\'s "city upon a hill" sermon expressed the Puritan belief that their colony should be an exemplary Christian community that the world would watch and emulate. This concept of American exceptionalism has resonated throughout U.S. history and appears frequently on the AP exam.'
          }
        ]
      }
    }
  ]
}
