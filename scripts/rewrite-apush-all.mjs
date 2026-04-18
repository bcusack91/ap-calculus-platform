import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = 'src/data/interactive-lessons';

const topics = [
  {
    file: 'apush-native-societies-exploration-part1.ts',
    varName: 'apushNativeSocietiesExplorationPart1Data',
    slug: 'apush-native-societies-exploration',
    prefix: 'apushnat1',
    content: () => `export const apushNativeSocietiesExplorationPart1Data = {
  topicSlug: 'apush-native-societies-exploration',
  sections: [
    {
      id: 'apushnat1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 Native Societies & European Exploration

**Part 1 of 7 — Pre-Columbian Americas & First Contact**

---

### Topics in This Part

| Section |
|---------|
| 📖 Major Pre-Columbian Civilizations |
| Native American Diversity |
| European Motives for Exploration |
| 📌 The Columbian Exchange |
| Early Contact & Consequences |

> 🔑 **Key Concept:** The AP exam heavily tests the **Columbian Exchange** and the diverse nature of Native American societies before European contact. You must understand that indigenous peoples were not a monolithic group — they had vastly different political structures, economies, and cultures.

---

### What You'll Master in Part 1
- The major civilizations of the pre-Columbian Americas
- How geography shaped Native American societies
- European motives behind exploration (God, gold, glory)
- The biological, economic, and cultural impacts of the Columbian Exchange
      \`
    },
    {
      id: 'apushnat1-civilizations',
      type: 'text' as const,
      content: \`
## 📖 Major Pre-Columbian Civilizations

Before Europeans arrived, the Americas were home to complex, diverse societies with millions of inhabitants.

### Key Civilizations

| Civilization | Location | Key Features |
|---|---|---|
| **Aztec (Mexica)** | Central Mexico | Capital Tenochtitlán (pop. ~200,000); tributary empire; chinampas (floating gardens); human sacrifice |
| **Maya** | Yucatán / Central America | Advanced writing system; astronomical calendar; city-states; declined before European contact |
| **Inca** | Andes (South America) | Largest pre-Columbian empire; quipu record-keeping; extensive road system; terrace farming |
| **Mississippian** | Eastern North America | Cahokia (near modern St. Louis, pop. ~20,000); mound-building; maize agriculture |
| **Pueblo (Ancestral)** | American Southwest | Multi-story adobe dwellings; irrigation systems; dry farming techniques |

### Native American Diversity in North America

The AP exam emphasizes that indigenous peoples adapted to their **environments** in fundamentally different ways:

- **Eastern Woodlands** — Semi-sedentary; maize/squash/beans ("Three Sisters" agriculture); Iroquois Confederacy (representative governance)
- **Great Plains** — Nomadic/semi-nomadic; bison hunting; portable tipis
- **Pacific Northwest** — Fishing-based (salmon); potlatch ceremonies; totem poles; cedar plank houses
- **Great Basin / Desert** — Small bands; hunter-gatherers; seasonal migration

> 🔑 **AP Connection:** The AP exam often asks you to compare how **geography and environment** shaped different Native American societies. Be ready to contrast specific groups.
      \`
    },
    {
      id: 'apushnat1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which agricultural technique was used by the Aztecs to farm on the shallow lake beds surrounding Tenochtitlán?',
            options: [
              'Terrace farming on mountainsides',
              'Chinampas — floating gardens anchored to the lake floor',
              'Slash-and-burn clearing of dense forests',
              'Irrigation canals diverted from the Rio Grande'
            ],
            correctAnswer: 1,
            explanation: 'Chinampas were artificial islands or "floating gardens" created in the shallow lakes around Tenochtitlán. The Aztecs layered mud, vegetation, and soil to create extremely fertile agricultural plots. Terrace farming was an Inca technique used in the Andes.'
          },
          {
            question: 'The Iroquois Confederacy is historically significant because it:',
            options: [
              'Was the first Native American group to adopt European farming methods',
              'United five (later six) nations under a representative governing structure',
              'Built the largest mound complex in North America at Cahokia',
              'Controlled the fur trade exclusively with French colonists'
            ],
            correctAnswer: 1,
            explanation: 'The Iroquois (Haudenosaunee) Confederacy united the Mohawk, Oneida, Onondaga, Cayuga, and Seneca nations (the Tuscarora joined later) under the Great Law of Peace — a representative council system. Some historians argue it influenced the framers of the U.S. Constitution.'
          },
          {
            question: 'Which of the following best explains why Native American societies in the Pacific Northwest developed differently from those on the Great Plains?',
            options: [
              'Pacific Northwest peoples had access to abundant salmon and cedar, enabling permanent settlements without agriculture',
              'Great Plains peoples had larger populations and more complex governments',
              'Pacific Northwest peoples were isolated from all trade networks',
              'Great Plains peoples developed writing systems earlier than coastal groups'
            ],
            correctAnswer: 0,
            explanation: 'The Pacific Northwest\\'s abundant natural resources — especially salmon runs and cedar forests — allowed peoples like the Chinook and Tlingit to build permanent settlements and develop complex social hierarchies without relying on farming. Great Plains peoples were more nomadic, following bison herds.'
          }
        ]
      }
    },
    {
      id: 'apushnat1-exploration',
      type: 'text' as const,
      content: \`
## European Motives & the Columbian Exchange

### Why Did Europeans Explore?

Historians summarize European motives as **"God, Gold, and Glory"**:

| Motive | Details |
|--------|---------|
| **God** | Spread Christianity; Catholic missions in Spanish colonies; Protestant settlements in English colonies |
| **Gold** | Desire for precious metals, spices, and new trade routes to Asia after the fall of Constantinople (1453) |
| **Glory** | National competition between Spain, Portugal, England, France, and the Netherlands for imperial prestige |

**Technological enablers:** Improved navigation (compass, astrolabe), caravel ships, gunpowder weapons, joint-stock companies for financing voyages.

---

### The Columbian Exchange (post-1492)

The **Columbian Exchange** refers to the massive transfer of plants, animals, diseases, people, and ideas between the **Old World** (Europe, Africa, Asia) and the **New World** (the Americas).

| From Americas → Europe/Africa/Asia | From Europe/Africa/Asia → Americas |
|---|---|
| Potatoes, maize (corn), tomatoes, tobacco, cacao, squash | Horses, cattle, pigs, wheat, sugar, coffee |
| Rubber, vanilla, avocados, peanuts | Smallpox, measles, influenza, typhus |
| Syphilis (debated) | Christianity, iron tools, firearms |

> ⚠️ **Critical Impact:** European diseases (especially **smallpox**) devastated Native American populations — estimates range from **50% to 90% population decline** among indigenous peoples within the first century of contact. This demographic catastrophe is one of the most important facts on the AP exam.
      \`
    },
    {
      id: 'apushnat1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What was the name of the Aztec capital city, built on an island in Lake Texcoco?

2) What term describes the massive transfer of plants, animals, diseases, and ideas between the Old and New Worlds after 1492?

3) What crop system did Eastern Woodlands peoples use, combining maize, beans, and squash?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Tenochtitlan', 'Columbian Exchange', 'Three Sisters'],
        hint1: 'Starts with: T — a city of ~200,000 people',
        hint2: 'Named after Columbus — an "exchange" of biological and cultural elements',
        hint3: 'Three crops grown together symbiotically',
        explanation: 'Tenochtitlán was the Aztec capital (modern-day Mexico City). The Columbian Exchange was the widespread transfer of plants, animals, diseases, and culture between the Americas and the Old World. The Three Sisters (maize, beans, squash) were companion-planted by Eastern Woodlands peoples.'
      }
    },
    {
      id: 'apushnat1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Historical Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The disease that caused the most devastating population decline among Native Americans was ___',
            options: ['Smallpox', 'Malaria', 'Bubonic plague', 'Yellow fever']
          },
          {
            label: 'The largest pre-Columbian settlement north of Mexico was ___',
            options: ['Cahokia', 'Jamestown', 'Roanoke', 'Plymouth']
          },
          {
            label: 'European exploration was financed partly through ___, which allowed investors to pool money and share risk',
            options: ['Joint-stock companies', 'Federal banks', 'Colonial legislatures', 'Feudal manors']
          }
        ],
        correctAnswers: ['Smallpox', 'Cahokia', 'Joint-stock companies'],
        hint1: 'This disease spread rapidly because Native Americans had no prior immunity',
        hint2: 'Located near modern-day St. Louis; part of the Mississippian culture',
        hint3: 'An early form of corporation — the Virginia Company was one example',
        explanation: 'Smallpox was by far the most lethal European disease in the Americas. Cahokia (c. 1050–1350 CE) was a Mississippian city near present-day St. Louis with a population of ~20,000 at its peak. Joint-stock companies like the Virginia Company and Dutch East India Company funded colonial ventures.'
      }
    },
    {
      id: 'apushnat1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A historian argues that the Columbian Exchange was "the most significant ecological event since the end of the Ice Age." Which evidence would BEST support this claim?',
            options: [
              'European diseases killed an estimated 50–90% of the indigenous population of the Americas within a century',
              'Christopher Columbus made four voyages to the Americas between 1492 and 1504',
              'The Spanish established missions throughout California in the 18th century',
              'The Treaty of Tordesillas divided New World claims between Spain and Portugal'
            ],
            correctAnswer: 0,
            explanation: 'The massive demographic collapse caused by Old World diseases fundamentally transformed the ecology, economy, and cultures of the entire Western Hemisphere — making it the strongest evidence for the claim about ecological significance. The other options describe important events but don\\'t address ecological impact.'
          },
          {
            question: 'Which of the following BEST describes the political organization of most Native American societies in North America prior to European contact?',
            options: [
              'Centralized empires with hereditary monarchs ruling large territories',
              'Diverse systems ranging from confederacies and chiefdoms to small kin-based bands',
              'Democratic republics modeled on ancient Greek city-states',
              'Theocratic states governed by priestly classes similar to medieval Europe'
            ],
            correctAnswer: 1,
            explanation: 'North American Native societies were politically diverse — the Iroquois Confederacy was a representative alliance, Mississippian Cahokia was a chiefdom, and Great Basin peoples lived in small family bands. There was no single political model, which is a key AP concept.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-colonial-america-part1.ts',
    varName: 'apushColonialAmericaPart1Data',
    slug: 'apush-colonial-america',
    prefix: 'apushcol1',
    content: () => `export const apushColonialAmericaPart1Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushcol1-european',
      type: 'text' as const,
      content: \`
## 📖 European Colonial Strategies

Different European powers established colonies with very different goals and methods:

| Power | Colonial Strategy | Key Colonies | Relationship with Natives |
|-------|------------------|--------------|--------------------------|
| **Spain** | Extraction of gold/silver; encomienda labor system; Catholic missions | New Spain (Mexico), Florida, Southwest | Conquest and forced labor; mestizo population |
| **France** | Fur trade; small settlements; Jesuit missionaries | New France (Quebec, Louisiana) | Generally cooperative (trade alliances); intermarriage |
| **Netherlands** | Trade-focused; Dutch West India Company; religious tolerance | New Netherland (New York/New Jersey) | Trade partnerships; purchased Manhattan (1626) |
| **England** | Permanent agricultural settlements; joint-stock companies; diverse motives | Virginia, Massachusetts, Pennsylvania | Varied — from early cooperation to violent conflict |

> 🔑 **AP Connection:** The exam frequently asks you to compare colonial approaches. Key contrast: **Spain** used conquest and forced labor while **France** focused on trade partnerships with relatively few settlers.
      \`
    },
    {
      id: 'apushcol1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which European power\\'s colonial strategy relied most heavily on the fur trade and maintaining cooperative relationships with Native Americans?',
            options: [
              'Spain — which focused on mining and the encomienda system',
              'France — which built trade alliances and had relatively few settlers',
              'England — which established large agricultural settlements',
              'Portugal — which focused on the African slave trade exclusively'
            ],
            correctAnswer: 1,
            explanation: 'France\\'s colonial strategy in North America centered on the fur trade, requiring cooperation with Native American trappers and hunters. French colonies had far fewer settlers than English colonies, which contributed to more cooperative (though still unequal) relationships.'
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
      content: \`
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
      \`
    },
    {
      id: 'apushcol1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What was the first representative assembly in the English colonies, established in Virginia in 1619?

2) What agreement, signed aboard ship in 1620, established self-government for the Plymouth Colony?

3) What cash crop saved the Jamestown colony from economic failure?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['House of Burgesses', 'Mayflower Compact', 'tobacco'],
        hint1: 'Two words — a legislative "House" in Virginia',
        hint2: 'Named after the ship the Pilgrims sailed on',
        hint3: 'A plant cultivated by John Rolfe starting in 1612',
        explanation: 'The House of Burgesses (1619) was the first elected legislative body in British America. The Mayflower Compact (1620) was a foundational document of self-governance signed by the Pilgrims. Tobacco became Virginia\\'s primary cash crop and economic lifeline.'
      }
    },
    {
      id: 'apushcol1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Colonial Regions** 🔍
      \`,
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
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the Southern Colonies developed a labor system based on enslaved Africans rather than the indentured servant model used earlier?',
            options: [
              'Bacon\\'s Rebellion (1676) showed the dangers of a large class of discontented former indentured servants, making enslaved labor seem more controllable to planters',
              'The English government banned indentured servitude in 1660',
              'Enslaved Africans arrived in the Southern Colonies before any indentured servants did',
              'Southern colonists morally preferred slavery to indentured servitude from the beginning'
            ],
            correctAnswer: 0,
            explanation: 'Bacon\\'s Rebellion (1676) — in which poor former indentured servants and enslaved people joined together to rebel against Virginia\\'s elite — alarmed planters. They increasingly turned to race-based chattel slavery as a way to create a permanent, legally distinct labor force that could not earn freedom and rebel as citizens.'
          },
          {
            question: 'John Winthrop\\'s 1630 sermon describing Massachusetts Bay as a "city upon a hill" reflected which of the following beliefs?',
            options: [
              'That religious diversity should be encouraged in all the colonies',
              'That the Puritan colony should serve as a model godly community for the world',
              'That Massachusetts should become the economic center of British North America',
              'That democratic self-governance was more important than religious purity'
            ],
            correctAnswer: 1,
            explanation: 'Winthrop\\'s "city upon a hill" sermon expressed the Puritan belief that their colony should be an exemplary Christian community that the world would watch and emulate. This concept of American exceptionalism has resonated throughout U.S. history and appears frequently on the AP exam.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-colonial-society-conflicts-part1.ts',
    varName: 'apushColonialSocietyConflictsPart1Data',
    slug: 'apush-colonial-society-conflicts',
    prefix: 'apushcol1',
    content: () => `export const apushColonialSocietyConflictsPart1Data = {
  topicSlug: 'apush-colonial-society-conflicts',
  sections: [
    {
      id: 'apushcol1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushcol1-society',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'apushcol1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Virginia law of 1662, which declared that a child\\'s enslaved or free status followed the condition of the mother, was significant because it:',
            options: [
              'Ensured that the children of enslaved women would also be enslaved, making slavery a self-perpetuating system',
              'Granted freedom to all children born in Virginia regardless of parentage',
              'Applied only to Native American women captured in warfare',
              'Was immediately repealed after Bacon\\'s Rebellion in 1676'
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
      content: \`
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
      \`
    },
    {
      id: 'apushcol1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What 1676 uprising in Virginia accelerated the colonial shift from indentured servitude to race-based slavery?

2) What term describes Britain's informal policy of not strictly enforcing colonial trade regulations before 1763?

3) What 1739 event in South Carolina was the largest slave uprising in colonial America?

Use the exact historical term.
      \`,
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
      content: \`
**Match the Concepts** 🔍
      \`,
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
      content: \`
**AP-Style Application** 🎯
      \`,
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
            explanation: 'The pattern of resistance → repression is central to understanding slavery in colonial America. After the Stono Rebellion, South Carolina passed the Negro Act restricting enslaved people\\'s ability to assemble, earn money, or learn to read. This cycle repeated throughout American history.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-revolution-independence-part1.ts',
    varName: 'apushRevolutionIndependencePart1Data',
    slug: 'apush-revolution-independence',
    prefix: 'apushrev1',
    content: () => `export const apushRevolutionIndependencePart1Data = {
  topicSlug: 'apush-revolution-independence',
  sections: [
    {
      id: 'apushrev1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 Revolution & Independence

**Part 1 of 7 — Road to Revolution & the Declaration**

---

### Topics in This Part

| Section |
|---------|
| 📖 Causes of the American Revolution |
| Key Acts & Colonial Responses |
| Enlightenment Ideas |
| 📌 The Declaration of Independence |
| Key Battles & Turning Points |

> 🔑 **Key Concept:** The AP exam emphasizes the **ideological origins** of the Revolution — particularly how Enlightenment ideas about natural rights combined with colonial grievances over taxation and representation.
      \`
    },
    {
      id: 'apushrev1-causes',
      type: 'text' as const,
      content: \`
## 📖 Road to Revolution (1763–1776)

After the **French and Indian War** (1754–63), Britain faced massive war debt and decided the colonies should help pay. This ended the era of **salutary neglect** and sparked colonial resistance.

### Key British Acts & Colonial Responses

| Act / Event | Year | What It Did | Colonial Response |
|---|---|---|---|
| **Proclamation of 1763** | 1763 | Banned settlement west of Appalachians | Anger — colonists wanted western land |
| **Sugar Act** | 1764 | Taxed imported sugar and molasses | Protests; "no taxation without representation" |
| **Stamp Act** | 1765 | First direct tax — on newspapers, legal docs, playing cards | **Stamp Act Congress**; boycotts; Sons of Liberty formed |
| **Townshend Acts** | 1767 | Taxes on glass, lead, paint, paper, tea | Boycotts; "Letters from a Farmer" (John Dickinson) |
| **Boston Massacre** | 1770 | British soldiers killed 5 colonists | Propaganda tool (Paul Revere's engraving); increased anti-British sentiment |
| **Tea Act / Boston Tea Party** | 1773 | Gave East India Co. tea monopoly; colonists dumped tea | 342 chests of tea destroyed; direct challenge to Parliament |
| **Intolerable (Coercive) Acts** | 1774 | Closed Boston harbor; quartered troops; revoked MA charter | **First Continental Congress** called; colonies unite |
| **Lexington & Concord** | 1775 | British troops sent to seize weapons | "Shot heard round the world" — war begins |

> ⚠️ **AP Alert:** Know the **escalation pattern**: each British action provoked a stronger colonial response, which triggered harsher British measures, creating a cycle that made compromise increasingly impossible.
      \`
    },
    {
      id: 'apushrev1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why was the Stamp Act (1765) more controversial than earlier taxes like the Sugar Act?',
            options: [
              'It was the first direct tax imposed on the colonists by Parliament, affecting everyday items like newspapers and legal documents',
              'It only taxed wealthy merchants and plantation owners',
              'It was passed by colonial legislatures rather than Parliament',
              'It reduced taxes on imported goods, angering British merchants'
            ],
            correctAnswer: 0,
            explanation: 'The Stamp Act was unprecedented because it was a direct (internal) tax rather than an external trade duty. It affected nearly everyone — lawyers, printers, tavern owners — and was imposed by a Parliament in which colonists had no representation, crystallizing the "no taxation without representation" argument.'
          },
          {
            question: 'The Intolerable Acts (1774) had the unintended effect of:',
            options: [
              'Convincing most colonists to remain loyal to Britain',
              'Uniting the colonies in opposition through the First Continental Congress',
              'Ending the boycott movement and restoring trade with Britain',
              'Leading France to immediately declare war on Britain'
            ],
            correctAnswer: 1,
            explanation: 'Britain intended the Intolerable Acts to punish Massachusetts and isolate it from the other colonies. Instead, colonists across all 13 colonies rallied to Massachusetts\\' defense, convening the First Continental Congress (1774) — the first unified colonial body to coordinate resistance against British policy.'
          }
        ]
      }
    },
    {
      id: 'apushrev1-declaration',
      type: 'text' as const,
      content: \`
## The Declaration of Independence (July 4, 1776)

Written primarily by **Thomas Jefferson**, the Declaration drew on **Enlightenment** philosophy:

### Enlightenment Influences

| Thinker | Key Idea | How It Appears in the Declaration |
|---------|----------|----------------------------------|
| **John Locke** | Natural rights (life, liberty, property); social contract; right to revolution | "Life, Liberty, and the pursuit of Happiness"; government derives power from "consent of the governed" |
| **Montesquieu** | Separation of powers | Influenced the later Constitution more than the Declaration |
| **Rousseau** | Popular sovereignty; general will | "Governments are instituted among Men, deriving their just powers from the consent of the governed" |

### Structure of the Declaration

1. **Preamble** — Philosophy of government (natural rights, social contract)
2. **Grievances** — List of specific complaints against King George III
3. **Resolution** — Formal declaration of independence

### Key Contradictions
- Jefferson wrote "all men are created equal" while **owning over 600 enslaved people** during his lifetime
- Women, Native Americans, and enslaved people were excluded from the promise of equality
- These contradictions became central tensions throughout American history

> 🔑 **AP Connection:** The AP exam loves asking about the **tension** between the Declaration's ideals and the reality of slavery, inequality, and exclusion. Be ready to discuss how different groups later used the Declaration's language to argue for their own rights.
      \`
    },
    {
      id: 'apushrev1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Which Enlightenment philosopher's ideas about natural rights and the social contract most directly influenced Thomas Jefferson's Declaration of Independence?

2) What phrase did colonial protesters use to object to British taxes imposed without colonial representation in Parliament?

3) What 1773 event saw colonists destroy 342 chests of tea in Boston Harbor as a protest against the Tea Act?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['John Locke', 'no taxation without representation', 'Boston Tea Party'],
        hint1: 'English philosopher who wrote "Two Treatises of Government"',
        hint2: 'A famous slogan — "no ___ without ___"',
        hint3: 'A "party" in Boston Harbor involving tea',
        explanation: 'John Locke\\'s theory of natural rights (life, liberty, property) directly shaped Jefferson\\'s "life, liberty, and the pursuit of happiness." "No taxation without representation" became the rallying cry against Parliamentary taxes. The Boston Tea Party (1773) was organized by the Sons of Liberty.'
      }
    },
    {
      id: 'apushrev1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Events** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The first direct (internal) tax imposed by Parliament on the colonies was the ___',
            options: ['Stamp Act (1765)', 'Sugar Act (1764)', 'Tea Act (1773)', 'Townshend Acts (1767)']
          },
          {
            label: 'The 1770 event in which British soldiers killed five colonists, used as propaganda by Paul Revere, was the ___',
            options: ['Boston Massacre', 'Boston Tea Party', 'Battle of Lexington', 'Stamp Act Crisis']
          },
          {
            label: 'The colonial body convened in response to the Intolerable Acts was the ___',
            options: ['First Continental Congress', 'Second Continental Congress', 'Stamp Act Congress', 'Albany Congress']
          }
        ],
        correctAnswers: ['Stamp Act (1765)', 'Boston Massacre', 'First Continental Congress'],
        hint1: 'Affected newspapers, legal documents, and playing cards',
        hint2: 'Five colonists killed, including Crispus Attucks',
        hint3: 'Met in Philadelphia in 1774; representatives from 12 colonies',
        explanation: 'The Stamp Act (1765) was the first direct tax. The Boston Massacre (1770) killed five colonists and was exploited as propaganda. The First Continental Congress (1774) united 12 colonies in coordinated resistance to the Intolerable Acts.'
      }
    },
    {
      id: 'apushrev1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes the historical significance of the Declaration of Independence?',
            options: [
              'It established the framework for American government that is still used today',
              'It articulated Enlightenment principles of natural rights and self-governance that later groups used to advocate for their own inclusion',
              'It immediately granted equal rights to all people living in the American colonies',
              'It was primarily a military document outlining strategy for the Revolutionary War'
            ],
            correctAnswer: 1,
            explanation: 'The Declaration\\'s greatest long-term significance was its articulation of universal principles ("all men are created equal") that abolitionists, suffragists, civil rights leaders, and others later invoked to argue for extending equality to groups initially excluded. The Constitution (1787), not the Declaration, established the governmental framework.'
          },
          {
            question: 'A colonial pamphleteer in 1775 writes: "We have petitioned, we have remonstrated, we have boycotted, and still our liberties are trampled. What remains but to take up arms?" This argument MOST directly reflects:',
            options: [
              'John Locke\\'s theory that people have the right to overthrow a government that fails to protect their natural rights',
              'Thomas Hobbes\\' belief that a strong central authority is necessary to prevent chaos',
              'Adam Smith\\'s argument for free market economics without government intervention',
              'Montesquieu\\'s advocacy for separation of powers within government'
            ],
            correctAnswer: 0,
            explanation: 'The pamphleteer\\'s argument — that peaceful remedies have been exhausted, justifying armed resistance — mirrors Locke\\'s social contract theory: when a government violates the natural rights of the people, the people have the right to alter or abolish it. This logic is directly embedded in the Declaration of Independence.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-constitution-early-republic-part1.ts',
    varName: 'apushConstitutionEarlyRepublicPart1Data',
    slug: 'apush-constitution-early-republic',
    prefix: 'apushcon1',
    content: () => `export const apushConstitutionEarlyRepublicPart1Data = {
  topicSlug: 'apush-constitution-early-republic',
  sections: [
    {
      id: 'apushcon1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 The Constitution & Early Republic

**Part 1 of 7 — From Articles of Confederation to the Constitution**

---

| Section |
|---------|
| 📖 Weaknesses of the Articles of Confederation |
| The Constitutional Convention (1787) |
| Key Compromises |
| 📌 Federalists vs. Anti-Federalists |
| The Bill of Rights |

> 🔑 **Key Concept:** The AP exam heavily tests the **debates** at the Constitutional Convention — especially the compromises over representation, slavery, and federal vs. state power.
      \`
    },
    {
      id: 'apushcon1-articles',
      type: 'text' as const,
      content: \`
## 📖 The Articles of Confederation (1781–1789)

America's first constitution, the **Articles of Confederation**, created a deliberately weak central government:

### Structure & Weaknesses

| Feature | Under the Articles | Problem It Caused |
|---------|-------------------|-------------------|
| **Legislature** | Unicameral Congress; each state = 1 vote | Large states underrepresented |
| **Executive** | No president or executive branch | No one to enforce laws |
| **Judiciary** | No national court system | No way to resolve interstate disputes |
| **Taxation** | Congress could NOT levy taxes | Government couldn't fund itself; relied on state contributions |
| **Amendments** | Required unanimous consent of 13 states | Virtually impossible to reform |
| **Trade** | No power to regulate interstate commerce | Trade wars between states |
| **Military** | No standing army; relied on state militias | Couldn't respond to threats effectively |

### Shays' Rebellion (1786–87)
- Massachusetts farmers, crushed by debt and taxes, rebelled under **Daniel Shays**
- State militia had to suppress it (federal government was too weak to act)
- **Significance:** Exposed the fatal weakness of the Articles and convinced leaders like Washington, Hamilton, and Madison that a stronger national government was essential
- Directly spurred the call for the **Constitutional Convention**
      \`
    },
    {
      id: 'apushcon1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Shays\\' Rebellion (1786–87) was historically significant primarily because it:',
            options: [
              'Demonstrated that the Articles of Confederation created a national government too weak to maintain order',
              'Successfully overthrew the Massachusetts state government',
              'Led directly to the abolition of slavery in northern states',
              'Proved that state militias were more effective than a national army'
            ],
            correctAnswer: 0,
            explanation: 'Shays\\' Rebellion shocked the political elite by exposing the national government\\'s inability to respond to domestic unrest. The federal government under the Articles couldn\\'t raise troops or funds. This crisis was a primary catalyst for calling the Constitutional Convention in Philadelphia in 1787.'
          },
          {
            question: 'Under the Articles of Confederation, which of the following was the MOST significant structural weakness?',
            options: [
              'Congress could not levy taxes, leaving the government unable to fund itself or pay war debts',
              'The president had too much executive power over the states',
              'The Supreme Court could override state laws without consent',
              'States were required to contribute equal numbers of soldiers to a standing army'
            ],
            correctAnswer: 0,
            explanation: 'The inability to tax was the Articles\\' most crippling weakness. Without revenue, Congress couldn\\'t pay Revolutionary War debts, fund a military, or conduct foreign policy effectively. There was no president and no Supreme Court under the Articles.'
          }
        ]
      }
    },
    {
      id: 'apushcon1-convention',
      type: 'text' as const,
      content: \`
## The Constitutional Convention (May–September 1787)

Fifty-five delegates met in Philadelphia. Key figures: **James Madison** ("Father of the Constitution"), **Alexander Hamilton**, **Benjamin Franklin**, **George Washington** (presided).

### The Great Compromises

| Issue | Position A | Position B | Compromise |
|-------|-----------|-----------|------------|
| **Representation** | Virginia Plan — bicameral; representation by population (favored large states) | New Jersey Plan — unicameral; equal representation (favored small states) | **Great (Connecticut) Compromise** — bicameral: Senate (equal) + House (by population) |
| **Slavery & Representation** | Southern states wanted enslaved people counted for representation | Northern states objected to counting people who couldn't vote | **Three-Fifths Compromise** — each enslaved person counted as 3/5 of a person for representation and taxation |
| **Slave Trade** | Some delegates wanted immediate abolition | Southern states threatened to leave the convention | Congress could not ban the slave trade until **1808** |
| **Executive Power** | Some wanted Congress to elect the president | Others wanted direct popular election | **Electoral College** — electors chosen by states vote for president |

### Federalists vs. Anti-Federalists

| | Federalists | Anti-Federalists |
|---|---|---|
| **Key Figures** | Hamilton, Madison, Jay | Patrick Henry, George Mason, Samuel Adams |
| **Position** | Supported ratification of the Constitution | Opposed ratification without a Bill of Rights |
| **Key Arguments** | Strong central government needed; checks & balances prevent tyranny; *The Federalist Papers* (85 essays) | Constitution gave too much power to federal government; lacked protections for individual liberties |
| **Result** | Won ratification | Secured the promise of a **Bill of Rights** (first 10 amendments, ratified 1791) |
      \`
    },
    {
      id: 'apushcon1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What compromise at the Constitutional Convention created a bicameral legislature with a Senate (equal representation) and House (proportional representation)?

2) What agreement counted each enslaved person as 3/5 of a person for purposes of representation and taxation?

3) Who is known as the "Father of the Constitution" for his central role at the Convention?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Great Compromise', 'Three-Fifths Compromise', 'James Madison'],
        hint1: 'Also called the Connecticut Compromise',
        hint2: 'A fraction — ___ - ___ Compromise',
        hint3: 'Later became the 4th President of the United States',
        explanation: 'The Great (Connecticut) Compromise resolved the large-state vs. small-state debate over representation. The Three-Fifths Compromise was a morally repugnant deal that increased Southern political power. James Madison arrived with the Virginia Plan and took detailed notes throughout the Convention.'
      }
    },
    {
      id: 'apushcon1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The collection of 85 essays arguing for ratification of the Constitution was called ___',
            options: ['The Federalist Papers', 'Common Sense', 'The Declaration of Independence', 'The Articles of Confederation']
          },
          {
            label: 'The group that opposed ratification without a Bill of Rights was the ___',
            options: ['Anti-Federalists', 'Federalists', 'Republicans', 'Whigs']
          },
          {
            label: 'The system in which electors (not the general public directly) choose the president is the ___',
            options: ['Electoral College', 'Popular Vote', 'Congressional Caucus', 'Primary System']
          }
        ],
        correctAnswers: ['The Federalist Papers', 'Anti-Federalists', 'Electoral College'],
        hint1: 'Written by Hamilton, Madison, and Jay under the pen name "Publius"',
        hint2: 'Led by Patrick Henry and George Mason',
        hint3: 'A compromise between direct election and congressional selection',
        explanation: 'The Federalist Papers (1787–88) were written by Hamilton, Madison, and Jay to persuade New York to ratify. Anti-Federalists like Patrick Henry feared federal tyranny and demanded a Bill of Rights. The Electoral College was a compromise between popular election and congressional selection of the president.'
      }
    },
    {
      id: 'apushcon1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Three-Fifths Compromise is BEST understood as evidence that:',
            options: [
              'The Constitution\\'s framers prioritized political union over moral consistency on the issue of slavery',
              'Northern delegates successfully limited slavery\\'s expansion into new territories',
              'Southern delegates agreed to gradually abolish slavery in exchange for representation',
              'Enslaved people were granted partial citizenship and voting rights under the Constitution'
            ],
            correctAnswer: 0,
            explanation: 'The Three-Fifths Compromise was a political bargain that increased Southern representation in Congress without granting enslaved people any rights. It reveals the framers\\' willingness to accommodate slavery to achieve ratification — a moral compromise that would haunt the nation until the Civil War.'
          },
          {
            question: 'Which of the following arguments from The Federalist Papers (No. 10) would Madison MOST likely use to defend the Constitution against Anti-Federalist concerns about tyranny?',
            options: [
              'A large republic with diverse interests makes it harder for any single faction to dominate, protecting minority rights',
              'The president should serve for life to ensure stable governance',
              'State governments should have no independent authority under the new system',
              'Direct democracy at the national level is the best safeguard against tyranny'
            ],
            correctAnswer: 0,
            explanation: 'In Federalist No. 10, Madison argued that a large republic (as opposed to a small one) would contain so many competing factions that no single group could gain enough power to tyrannize others. This was his most innovative argument against the Anti-Federalist claim that republics only work in small territories.'
          }
        ]
      }
    }
  ]
}
`
  },
  {
    file: 'apush-democracy-expansion-part1.ts',
    varName: 'apushDemocracyExpansionPart1Data',
    slug: 'apush-democracy-expansion',
    prefix: 'apushdem1',
    content: () => `export const apushDemocracyExpansionPart1Data = {
  topicSlug: 'apush-democracy-expansion',
  sections: [
    {
      id: 'apushdem1-intro',
      type: 'text' as const,
      content: \`
# 🇺🇸 Democracy & Expansion

**Part 1 of 7 — Jacksonian Democracy & Manifest Destiny**

---

| Section |
|---------|
| 📖 Jacksonian Democracy |
| Indian Removal & the Trail of Tears |
| Manifest Destiny |
| 📌 Westward Expansion & Its Consequences |
| The Market Revolution |

> 🔑 **Key Concept:** The AP exam tests how expanding democracy for white men coincided with the dispossession of Native Americans and the expansion of slavery — revealing deep contradictions in the era's ideals.
      \`
    },
    {
      id: 'apushdem1-jackson',
      type: 'text' as const,
      content: \`
## 📖 Jacksonian Democracy (1828–1840s)

**Andrew Jackson's** presidency (1829–37) represented a dramatic expansion of political participation — but only for **white men**.

### Key Features of Jacksonian Democracy

| Feature | Details |
|---------|---------|
| **Expanded suffrage** | Most states eliminated property requirements for white male voters by the 1830s |
| **Spoils system** | Jackson rewarded political supporters with government jobs ("to the victor belong the spoils") |
| **Opposition to the National Bank** | Jackson vetoed the recharter of the Second Bank of the United States (1832); saw it as a tool of the wealthy elite |
| **Nullification Crisis** | South Carolina (led by John C. Calhoun) declared federal tariffs null and void; Jackson threatened military force; resolved by compromise tariff (1833) |
| **Indian Removal** | Forced relocation of southeastern Native nations to Indian Territory (Oklahoma) |

> ⚠️ **AP Alert:** The AP exam often asks you to evaluate whether Jacksonian Democracy was truly "democratic." Key tension: it expanded democracy for white men while simultaneously dispossessing Native Americans and doing nothing to end slavery.

### Indian Removal Act (1830) & Trail of Tears

- Jackson signed the **Indian Removal Act** (1830) — authorized forced relocation of Native nations east of the Mississippi
- **Cherokee Nation v. Georgia** (1831) and **Worcester v. Georgia** (1832) — Supreme Court (Chief Justice Marshall) ruled in favor of Cherokee sovereignty
- Jackson allegedly responded: "John Marshall has made his decision; now let him enforce it"
- **Trail of Tears** (1838–39): ~16,000 Cherokee forced to march to Oklahoma; ~4,000 died from disease, exposure, and starvation
- Also affected: Choctaw, Creek, Chickasaw, and Seminole nations
      \`
    },
    {
      id: 'apushdem1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Jackson\\'s veto of the Second Bank of the United States was significant because it:',
            options: [
              'Demonstrated presidential power to challenge Congress and the economic elite on behalf of "common" voters',
              'Led to immediate economic prosperity and eliminated all national debt',
              'Was overridden by a two-thirds vote in both houses of Congress',
              'Established the Federal Reserve System that exists today'
            ],
            correctAnswer: 0,
            explanation: 'Jackson\\'s Bank Veto (1832) was both an assertion of executive power and a populist statement against what he called a "monster" institution that benefited the wealthy. He argued the Bank was unconstitutional despite the Supreme Court ruling otherwise in McCulloch v. Maryland (1819).'
          },
          {
            question: 'The significance of Worcester v. Georgia (1832) lies in the fact that:',
            options: [
              'The Supreme Court recognized Cherokee sovereignty, but President Jackson defied the ruling and proceeded with removal',
              'It established the principle of judicial review for the first time',
              'It ruled that all Native American treaties were legally void',
              'It gave Congress the power to regulate Native American trade'
            ],
            correctAnswer: 0,
            explanation: 'In Worcester v. Georgia, Chief Justice Marshall ruled that Georgia had no authority over Cherokee lands. Jackson\\'s refusal to enforce the decision exposed the limits of judicial power when the executive branch refuses to act — a key AP concept about checks and balances.'
          }
        ]
      }
    },
    {
      id: 'apushdem1-manifest',
      type: 'text' as const,
      content: \`
## Manifest Destiny & Westward Expansion

**Manifest Destiny** — the belief that American expansion across the continent was inevitable, justified, and divinely ordained.

### Key Expansion Events

| Event | Date | Details |
|-------|------|---------|
| **Louisiana Purchase** | 1803 | Doubled U.S. territory; $15 million from France; raised constitutional questions (no explicit power to buy territory) |
| **Missouri Compromise** | 1820 | Admitted Missouri (slave) and Maine (free); banned slavery above 36°30' line in Louisiana Territory |
| **Texas Annexation** | 1845 | Republic of Texas (independent since 1836) annexed as slave state |
| **Oregon Treaty** | 1846 | U.S. and Britain split Oregon Territory at 49th parallel |
| **Mexican-American War** | 1846–48 | U.S. provoked war; Treaty of Guadalupe Hidalgo → U.S. gained California, Nevada, Utah, Arizona, New Mexico |
| **Gadsden Purchase** | 1853 | Bought strip of land from Mexico for a southern railroad route |

### The Market Revolution (1800s–1840s)

Alongside territorial expansion, the **Market Revolution** transformed the American economy:

- **Transportation:** Erie Canal (1825), steamboats, railroads connected interior to markets
- **Industry:** Textile mills in New England (Lowell system — employed young women); interchangeable parts (Eli Whitney)
- **Agriculture:** Cotton gin (1793) → cotton boom → increased demand for enslaved labor in the South
- **Result:** North industrialized; South deepened its dependence on slavery and cotton — setting the stage for sectional conflict
      \`
    },
    {
      id: 'apushdem1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) What term describes the belief that American westward expansion was inevitable and divinely ordained?

2) What 1820 agreement admitted Missouri as a slave state and Maine as a free state?

3) What was the forced march of ~16,000 Cherokee to Indian Territory in which ~4,000 died called?

Use the exact historical term.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Manifest Destiny', 'Missouri Compromise', 'Trail of Tears'],
        hint1: 'Two words — America\\'s "destiny" was "manifest" (obvious)',
        hint2: 'The ___ Compromise of 1820',
        hint3: 'Trail of ___',
        explanation: 'Manifest Destiny was coined by journalist John O\\'Sullivan in 1845. The Missouri Compromise (1820) temporarily resolved the slavery-in-territories debate. The Trail of Tears (1838–39) forcibly relocated Cherokee and other nations to present-day Oklahoma.'
      }
    },
    {
      id: 'apushdem1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Events** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1803 land deal that doubled U.S. territory was the ___',
            options: ['Louisiana Purchase', 'Gadsden Purchase', 'Treaty of Guadalupe Hidalgo', 'Oregon Treaty']
          },
          {
            label: 'Andrew Jackson\\'s practice of rewarding political allies with government jobs was called the ___',
            options: ['Spoils system', 'Merit system', 'Civil service', 'Patronage Act']
          },
          {
            label: 'The invention that dramatically increased cotton production and slavery\\'s expansion was the ___',
            options: ['Cotton gin', 'Spinning jenny', 'Power loom', 'Steam engine']
          }
        ],
        correctAnswers: ['Louisiana Purchase', 'Spoils system', 'Cotton gin'],
        hint1: 'Purchased from Napoleon\\'s France for $15 million',
        hint2: '"To the victor belong the ___"',
        hint3: 'Invented by Eli Whitney in 1793',
        explanation: 'The Louisiana Purchase (1803) was Thomas Jefferson\\'s biggest achievement despite his strict-constructionist concerns. The spoils system rewarded loyalty over competence. The cotton gin (1793) made short-staple cotton profitable, causing cotton production — and slavery — to explode across the Deep South.'
      }
    },
    {
      id: 'apushdem1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the Mexican-American War (1846–48) intensified the national debate over slavery?',
            options: [
              'The vast new territories acquired from Mexico forced Congress to decide whether slavery would expand westward, reopening the conflict the Missouri Compromise had temporarily resolved',
              'Mexico demanded that the U.S. abolish slavery as a condition of the peace treaty',
              'American soldiers refused to fight unless slavery was abolished in the new territories',
              'The war was fought primarily to free enslaved people in Mexican territory'
            ],
            correctAnswer: 0,
            explanation: 'The Treaty of Guadalupe Hidalgo added over 500,000 square miles to the U.S. The question of whether slavery would be allowed in these new territories (raised by the Wilmot Proviso in 1846) reignited sectional tensions that had been managed since the Missouri Compromise — ultimately leading to the Compromise of 1850, the Kansas-Nebraska Act, and the Civil War.'
          },
          {
            question: 'A critic of Jacksonian Democracy in 1835 might MOST convincingly argue that:',
            options: [
              'Expanding voting rights for white men while forcibly removing Native Americans revealed the era\\'s democracy was built on racial exclusion',
              'Jackson\\'s policies successfully achieved equality for all Americans regardless of race',
              'The Second Bank of the United States should have been given even more power',
              'Property requirements for voting should have been made stricter to prevent mob rule'
            ],
            correctAnswer: 0,
            explanation: 'The central contradiction of the Jacksonian era was the simultaneous expansion of democracy for white men and the violent exclusion of Native Americans, enslaved African Americans, and women. This paradox — democratic ideals applied selectively — is a core AP theme.'
          }
        ]
      }
    }
  ]
}
`
  }
];

// Write first 6 topics
for (const t of topics) {
  const filePath = join(DIR, t.file);
  writeFileSync(filePath, t.content(), 'utf-8');
  console.log(`✅ Wrote ${t.file}`);
}

console.log(`\nDone: ${topics.length} files written.`);
