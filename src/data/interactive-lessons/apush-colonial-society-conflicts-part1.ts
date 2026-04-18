export const apushColonialSocietyConflictsPart1Data = {
  topicSlug: 'apush-colonial-society-conflicts',
  sections: [
    {
      id: 'apushcol1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial Society & Conflicts

**Part 1 of 7 — Social Structures, Slavery & Colonial Tensions**

---

### Topics in This Part

| Section |
|---------|
| 📖 Colonial Social Hierarchy |
| The Growth of Slavery |
| Colonial Religious Movements |
| 📌 Colonial Conflicts & Resistance |
| Mercantilism & Salutary Neglect |

> 🔑 **Key Concept:** The AP exam emphasizes how colonial society was shaped by racial hierarchy, economic systems, and increasing tensions between colonists, Native Americans, and the British Crown.
      `
    },
    {
      id: 'apushcol1-society',
      type: 'text' as const,
      content: `
## 📖 Colonial Social Hierarchy

Colonial America developed a rigid social structure:

| Social Level | Description |
|---|---|
| **Planter Elite / Gentry** | Large landowners; controlled colonial legislatures; dominated Southern colonies |
| **Merchants & Professionals** | Urban middle class; lawyers, doctors, ministers; strongest in Middle & New England colonies |
| **Small Farmers / Yeomen** | Largest group; family farms; limited political influence |
| **Indentured Servants** | Worked 4–7 years for passage to America; declining after 1680s |
| **Enslaved Africans** | No legal rights; hereditary bondage; especially in Southern colonies |
| **Free Blacks & Native Americans** | Marginal status; limited legal protections |

### The Growth of Slavery

Key developments in the evolution of colonial slavery:

- **1619:** First enslaved Africans arrive in Virginia (treated initially as indentured servants)
- **1640s–1660s:** Virginia and Maryland pass **slave codes** making slavery hereditary and race-based
- **1662:** Virginia law: child's status follows the **mother** (*partus sequitur ventrem*) — enslaved women's children are born enslaved
- **1676:** **Bacon's Rebellion** — accelerates shift from indentured servitude to racial slavery
- **1705:** Virginia Slave Code — comprehensive legal framework defining enslaved people as property
- **1739:** **Stono Rebellion** (South Carolina) — largest slave uprising in colonial America; ~100 enslaved people; led to harsher slave codes

> ⚠️ **AP Alert:** The transition from indentured servitude to race-based chattel slavery is one of the most heavily tested topics in Period 2. Know the **causes** (economic incentives, Bacon's Rebellion, racial ideology) and **legal mechanisms** (slave codes, hereditary status).

### The Great Awakening (1730s–1740s)

The **First Great Awakening** was a religious revival that swept the colonies:

- **George Whitefield** — itinerant preacher; massive outdoor sermons; emotional "new birth" conversion
- **Jonathan Edwards** — "Sinners in the Hands of an Angry God" (1741)
- Challenged established church authority; emphasized **individual** religious experience
- Helped unify colonists across regional boundaries (first mass movement shared by all colonies)
- Created new denominations: Baptists, Methodists
- Inspired questioning of **all** authority — social, political, and religious
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
            question: 'The Virginia law of 1662, which declared that a child\'s enslaved or free status followed the condition of the mother, was significant because it:',
            options: [
              'Ensured that the children of enslaved women would also be enslaved, making slavery a self-perpetuating system',
              'Granted freedom to all children born in Virginia regardless of parentage',
              'Applied only to Native American women captured in warfare',
              'Was immediately repealed after Bacon\'s Rebellion in 1676'
            ],
            correctAnswer: 0,
            explanation: 'The 1662 Virginia law (partus sequitur ventrem) made slavery hereditary through the mother, meaning any child born to an enslaved woman was automatically enslaved. This was a critical legal mechanism that made chattel slavery self-perpetuating and removed any incentive for slaveholders to acknowledge paternity.'
          },
          {
            question: 'The First Great Awakening contributed to the American Revolution MOST directly by:',
            options: [
              'Calling for the immediate abolition of slavery in all colonies',
              'Establishing the principle that individuals could question established authority',
              'Creating a unified colonial military to fight the French',
              'Convincing Parliament to grant the colonies religious autonomy'
            ],
            correctAnswer: 1,
            explanation: 'The Great Awakening encouraged individuals to question traditional religious authorities and think for themselves about spiritual matters. This mindset of challenging authority — whether of an established church or a distant king — helped lay the intellectual groundwork for revolutionary thinking decades later.'
          }
        ]
      }
    },
    {
      id: 'apushcol1-conflicts',
      type: 'text' as const,
      content: `
## Colonial Conflicts & Mercantilism

### Key Colonial Conflicts

| Conflict | Date | Significance |
|----------|------|-------------|
| **King Philip's War** | 1675–78 | Metacom (King Philip) led Wampanoag alliance against New England settlers; deadliest per-capita war in American history; ended major Native resistance in New England |
| **Bacon's Rebellion** | 1676 | Virginia frontier settlers (led by Nathaniel Bacon) rebelled against Governor Berkeley; exposed class tensions; accelerated shift to slave labor |
| **Stono Rebellion** | 1739 | Largest slave uprising in colonial era; ~100 enslaved people in South Carolina; crushed; led to Negro Act of 1740 restricting enslaved people's movement and assembly |
| **French and Indian War** | 1754–63 | British vs. French (+Native allies); British victory → gained French Canada; massive war debt led to new colonial taxes → Revolution |

### Mercantilism & Salutary Neglect

**Mercantilism** was the economic theory driving British colonial policy:
- Colonies exist to benefit the **mother country**
- Colonies provide raw materials; buy manufactured goods from Britain
- **Navigation Acts** (1651–1673): Colonial goods must be shipped on British ships; certain goods (tobacco, sugar) shipped only to Britain

**Salutary Neglect** — Britain's informal policy of loosely enforcing trade regulations (roughly 1607–1763):
- Allowed colonies to develop **self-governing institutions** (colonial assemblies)
- Colonists grew accustomed to economic and political autonomy
- When Britain **ended** salutary neglect after 1763 (to pay French and Indian War debts), colonists resisted → path to Revolution
      `
    },
    {
      id: 'apushcol1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What 1676 uprising in Virginia accelerated the colonial shift from indentured servitude to race-based slavery?

2) What term describes Britain's informal policy of not strictly enforcing colonial trade regulations before 1763?

3) What 1739 event in South Carolina was the largest slave uprising in colonial America?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Bacon's Rebellion", 'salutary neglect', 'Stono Rebellion'],
        hint1: 'Named after Nathaniel ___ who led frontier settlers against the governor',
        hint2: 'Two words — "beneficial" + "neglect"',
        hint3: 'Named after the ___ River near Charleston, SC',
        explanation: "Bacon's Rebellion (1676) revealed dangerous class tensions and pushed planters toward race-based slavery. Salutary neglect was Britain's hands-off colonial policy that let self-governance develop. The Stono Rebellion (1739) led to the harsh Negro Act of 1740."
      }
    },
    {
      id: 'apushcol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The economic theory that colonies exist to enrich the mother country is called ___',
            options: ['Mercantilism', 'Capitalism', 'Feudalism', 'Socialism']
          },
          {
            label: 'The deadliest per-capita war in American history, fought between New England colonists and a Native American alliance, was ___',
            options: ["King Philip's War", 'The French and Indian War', "Pontiac's Rebellion", "Bacon's Rebellion"]
          },
          {
            label: 'The laws requiring colonial goods to be shipped on British vessels were the ___',
            options: ['Navigation Acts', 'Intolerable Acts', 'Stamp Act', 'Townsend Acts']
          }
        ],
        correctAnswers: ['Mercantilism', "King Philip's War", 'Navigation Acts'],
        hint1: 'Britain wanted a favorable balance of trade with its colonies',
        hint2: 'Led by Metacom; 1675–1678; devastated New England',
        hint3: 'Passed between 1651 and 1673 to control colonial trade',
        explanation: "Mercantilism held that colonies should provide raw materials and markets for the mother country. King Philip's War (1675–78) killed a higher percentage of the population than any other American war. The Navigation Acts regulated colonial trade to benefit Britain."
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
            question: 'Which of the following BEST describes the long-term significance of salutary neglect for the relationship between Britain and its American colonies?',
            options: [
              'It allowed colonists to develop traditions of self-governance, making them resistant to later British attempts to impose direct control',
              'It prevented any economic growth in the colonies until the 1760s',
              'It ensured that all colonial trade was conducted exclusively with British merchants',
              'It created a strong sense of loyalty to the Crown that lasted through the Revolution'
            ],
            correctAnswer: 0,
            explanation: 'Decades of salutary neglect allowed colonial assemblies to gain real governing power and colonists to develop expectations of autonomy. When Britain tried to reassert control after 1763 (through taxation and tighter enforcement), colonists saw this as a violation of their established rights — a key cause of the Revolution.'
          },
          {
            question: 'The Stono Rebellion of 1739 and the subsequent Negro Act of 1740 illustrate which broader pattern in colonial American history?',
            options: [
              'Enslaved people resisted their bondage, and slaveholders responded by tightening legal controls',
              'Colonial governments consistently worked to improve conditions for enslaved people',
              'Slave uprisings successfully ended slavery in individual colonies',
              'Native Americans and enslaved Africans formed lasting military alliances against colonists'
            ],
            correctAnswer: 0,
            explanation: 'The pattern of resistance → repression is central to understanding slavery in colonial America. After the Stono Rebellion, South Carolina passed the Negro Act restricting enslaved people\'s ability to assemble, earn money, or learn to read. This cycle repeated throughout American history.'
          }
        ]
      }
    }
  ]
}
