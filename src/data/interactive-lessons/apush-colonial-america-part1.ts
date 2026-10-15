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
            question: 'Which European power\'s colonial strategy relied most heavily on the fur trade and on cooperation with Native Americans?',
            options: [
              'Spain, through mining, missions and the encomienda',
              'France, through fur posts, missions and alliances',
              'England, through farms, towns and growing settlements',
              'Portugal, through sugar mills, ports and Atlantic trade'
            ],
            correctAnswer: 1,
            explanation: 'New France had few settlers and depended on Native trappers and trading partners for furs, so alliances and intermarriage were central to its strategy. Spain relied on conquest and forced labor, and England on expanding farm settlements that pushed Native peoples off their land.'
          },
          {
            question: 'The encomienda system in Spanish colonies was significant because it did which of the following?',
            options: [
              'Gave settlers the right to demand labor and tribute from Native people',
              'Created elected assemblies to make laws for each Spanish territory',
              'Set up free schools to teach Native children to read and write Spanish',
              'Banned the importation of enslaved Africans into Spanish America'
            ],
            correctAnswer: 0,
            explanation: 'Encomenderos received the right to Native labor and tribute in return for promised protection and Christian instruction, which in practice meant forced labor and contributed to Native population decline. Spain created no elected assemblies and imported many enslaved Africans.'
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
- **House of Burgesses** (1619) — first elected representative assembly in English America
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
            question: 'Which of the following best explains why Chesapeake planters shifted from indentured servants to enslaved Africans in the late 1600s?',
            options: [
              'England outlawed indentured servitude in its colonies after the Restoration',
              'Enslaved Africans reached Virginia decades before the first English servants',
              'Tobacco prices rose so high that planters could buy any labor they wanted',
              'Planters feared more revolts by landless former servants after Bacon\'s Rebellion'
            ],
            correctAnswer: 3,
            explanation: 'Bacon\'s Rebellion (1676) showed planters the danger of a large class of armed, landless freedmen, and enslaved Africans could never complete a term and claim land. Indentured servitude was never outlawed, servants arrived from 1607, and tobacco prices were generally low in this period.'
          },
          {
            question: 'John Winthrop\'s 1630 sermon describing Massachusetts Bay as a "city upon a hill" reflected which of the following beliefs?',
            options: [
              'That religious diversity should be welcomed in every English colony',
              'That Massachusetts should become the trading center of the empire',
              'That the colony should be a model Christian community for the world',
              'That self-government mattered more than the purity of the churches'
            ],
            correctAnswer: 2,
            explanation: 'Winthrop told the colonists that the world would watch their covenanted community, so it had to be an example of Christian charity and order. Puritan leaders opposed religious diversity and put the purity of the churches first.'
          }
        ]
      }
    }
  ]
}
