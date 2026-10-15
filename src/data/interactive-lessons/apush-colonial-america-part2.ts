export const apushColonialAmericaPart2Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol2-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial America

**Part 2 of 7 — Why the Regions Diverged: Land, Motives and Labor**

---

| Section |
|---------|
| 📖 Three Kinds of Colony: Company, Proprietor, Crown |
| The Chesapeake Model: Tobacco, Headrights and Servants |
| The New England Model: Families, Towns and Covenants |
| 📌 The Middle Colonies and the Lower South |
| Putting the Mechanism Together |

> 🔑 **Key Concept:** Part 1 described the regions. This part explains **why** they differed. The CED (KC 2.1.I and 2.1.III) points to three causes working together: the **environment** (soil, climate, growing season), the **founders' goals** (profit, religious mission, proprietary ambition), and the **labor system** each region built. Change one of the three and you get a different society.
      `
    },
    {
      id: 'apushcol2-charters',
      type: 'text' as const,
      content: `
## 📖 Three Kinds of Colony: Company, Proprietor, Crown

English colonization was mostly **private enterprise licensed by the Crown**. Who held the charter shaped who governed and why the colony existed.

| Type | Who holds power | Main goal | Examples |
|---|---|---|---|
| **Joint-stock (company) colony** | Investors who pool money and share profits and risk | Return on investment | Virginia (Virginia Company of London, chartered 1606); Massachusetts Bay (Massachusetts Bay Company, 1629) |
| **Proprietary colony** | One person or a small group granted the land by the king | Income from land sales and rents, plus the proprietor's own vision | Maryland (Lord Baltimore, 1632); Carolina (eight Lords Proprietors, 1663); Pennsylvania (William Penn, 1681) |
| **Royal colony** | The Crown, through an appointed governor and council | Imperial control and revenue | Virginia after **1624**, when the king revoked the bankrupt Virginia Company's charter; later New Hampshire, New York, the Carolinas, Georgia |

### Why this matters
- **Virginia** began as a business. Its first settlers were sent to find gold, a passage to Asia, or profitable commodities, not to build family farms.
- **Massachusetts Bay** was also a company, but the Puritan shareholders **carried their charter to New England in 1630**, so the colony governed itself with little oversight from London.
- **Proprietors** needed settlers to make money, so they advertised **religious toleration and cheap land**. That is why Maryland, Carolina and Pennsylvania drew such mixed populations.
- Over the 1600s and 1700s the Crown converted many colonies to **royal colonies**. By 1754, most had a royal governor, but every colony kept an **elected assembly**.

> 🔑 **AP Connection:** When an MCQ asks why a colony promised religious toleration, the usual answer is the **proprietor's need to attract settlers** (and, for Penn and Baltimore, protection for their own persecuted faiths), not a modern belief in freedom of religion for all.
      `
    },
    {
      id: 'apushcol2-chesapeake',
      type: 'text' as const,
      content: `
## The Chesapeake Model: Tobacco, Headrights and Servants

The Chesapeake (Virginia and Maryland) is the clearest example of **environment + profit motive + labor system** working together.

### Step 1: A cash crop
- After the "starving time" of 1609–10, **John Rolfe** planted a milder West Indian strain of tobacco (about 1612). English smokers bought it eagerly.
- In **1617** Virginia shipped about **20,000 pounds** of tobacco to England. Within a few decades the Chesapeake was exporting millions of pounds a year.
- Tobacco **exhausts the soil** in a few seasons, so planters constantly needed **new land**, and the Chesapeake's long, navigable rivers let ships load at each planter's own dock. Plantations spread out along the rivers instead of forming towns.

### Step 2: Land for labor
- Tobacco needs many hands. The **headright system** (1618) gave **50 acres** to anyone who paid a person's passage to Virginia. Planters who imported servants gained both workers and land.
- Most seventeenth-century migrants to the Chesapeake came as **indentured servants**: young, poor, mostly male English men and women who signed contracts to work **four to seven years** in exchange for passage, food and "freedom dues" at the end.

### Step 3: A harsh demography
- Malaria, dysentery and typhoid killed many newcomers within a few years. In the early decades men outnumbered women by several to one.
- Few families formed, so the population grew mainly by **immigration**, not births, for much of the 1600s.
- Those who survived their terms wanted land of their own, which pushed settlement onto **Powhatan lands** and set up the frontier tensions behind **Bacon's Rebellion (1676)**.

### Step 4: From servants to slaves
- From the 1660s, fewer English servants came (English wages rose and the population stopped growing), while the **Royal African Company (chartered 1672)** made enslaved Africans easier for planters to buy.
- By around 1700, enslaved Africans had replaced indentured servants as the Chesapeake's main labor force.

| Feature | Chesapeake by 1700 |
|---|---|
| Main export | Tobacco |
| Settlement pattern | Dispersed plantations along rivers; few towns |
| Labor | Indentured servants giving way to enslaved Africans |
| Church | Church of England established by law |
| Power | Wealthy planters dominate the House of Burgesses and county courts |

**Maryland** followed the same economic path. It differed in founding motive: **Cecilius Calvert, Lord Baltimore**, received the charter in **1632** as a refuge for English Catholics. Protestants soon outnumbered Catholics, which is why the assembly passed the **Act Concerning Religion (1649)** to protect Christians of both faiths (Part 3 reads it closely).
      `
    },
    {
      id: 'apushcol2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check: The Chesapeake** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Under the Virginia headright system created in 1618, a colonist received fifty acres of land for doing which of the following?',
            options: [
              'Serving seven years as a soldier in the colony militia',
              'Paying the passage of a person who came to Virginia',
              'Converting a Powhatan family to the Church of England',
              'Joining the Virginia Company as a voting shareholder'
            ],
            correctAnswer: 1,
            explanation: 'Headrights rewarded whoever paid a migrant\'s passage with fifty acres, so planters who imported servants gained both land and workers. That link between land grants and imported labor drove the Chesapeake\'s plantation economy.'
          },
          {
            question: 'Which factor best explains why towns remained few and small in the seventeenth-century Chesapeake?',
            options: [
              'Tobacco planters spread out along navigable rivers to reach fresh soil and ship crops from their own docks',
              'Royal governors banned towns after 1624 to keep colonists from organizing protests against tobacco taxes',
              'Puritan migrants preferred isolated farms and refused to settle in towns where Anglican churches stood',
              'The Virginia Company placed settlers on scattered estates so that each estate could defend itself alone'
            ],
            correctAnswer: 0,
            explanation: 'Tobacco wore out the soil quickly and the rivers let ships load at each plantation, so planters spread out rather than gathering in towns. The other options invent policies or place Puritans in the wrong region.'
          },
          {
            question: 'Which change most directly reduced Chesapeake planters\' reliance on English indentured servants after the 1660s?',
            options: [
              'Parliament outlawed contracts of indenture for anyone bound for the colonies',
              'Tobacco prices rose so high that planters could afford paid wage labor',
              'Powhatan workers replaced servants under treaties signed after 1646',
              'Fewer poor migrants left England as wages there began to improve'
            ],
            correctAnswer: 3,
            explanation: 'As England\'s population leveled off and wages there rose, fewer poor English men and women signed indentures, while the Royal African Company made enslaved Africans more available. Indentured servitude was never outlawed in this period.'
          }
        ]
      }
    },
    {
      id: 'apushcol2-newengland',
      type: 'text' as const,
      content: `
## The New England Model: Families, Towns and Covenants

New England reversed almost every Chesapeake feature.

### Who came, and why
- During the **Great Migration (1630–1640)** roughly **20,000** English Puritans settled in New England. Most came as **families**, often with some money, skills and a minister.
- Their goal was a **godly commonwealth**: reformed churches and a society bound by **covenants** (agreements with God and one another).

### Environment
- Rocky soil, long winters and a short growing season ruled out a single export crop. Families raised grain and livestock mainly for their own use and local sale.
- Forests and fisheries offered other wealth: **cod, timber, shipbuilding** and, by the late 1600s, a busy **carrying trade** with the West Indies.

### Demography
- A cool climate and clean water meant **long lives**. Many first-generation settlers lived into their sixties and seventies.
- Balanced sex ratios and early marriage produced large families. New England grew mainly through **natural increase**, not immigration, after 1640.

### Institutions
| Institution | How it worked |
|---|---|
| **Town grants** | The General Court granted land to a group of settlers, who laid out a compact town around a meetinghouse and divided fields among families |
| **Congregational churches** | Each congregation chose its own minister; full members had to describe a conversion experience |
| **Town meetings** | Male property holders (in Massachusetts, early on, only church members could vote for colony officials) made local decisions |
| **Schools** | Harvard College (1636); the Massachusetts law of **1647** required towns of 50 families to provide a teacher so children could read the Bible |

### Dissent inside the model
- **Roger Williams** argued that the state should not enforce religion. Banished from Massachusetts in 1635, he founded **Providence (1636)**, the start of Rhode Island.
- **Anne Hutchinson** challenged ministers' authority and was tried and banished (**1637–38**).
- **Thomas Hooker** led settlers to **Connecticut (1636)**, partly over disagreements about church membership and voting.

> 🔑 **AP Connection:** The New England model shows the **founding motive** at work. Puritan goals produced towns, schools and congregations; the environment produced mixed farming and seafaring. On the exam, cite both causes, not just religion.
      `
    },
    {
      id: 'apushcol2-middle-south',
      type: 'text' as const,
      content: `
## 📌 The Middle Colonies and the Lower South

### The Middle Colonies: fertile land, open doors
- **New Netherland** was founded by the Dutch West India Company in the 1620s as a fur-trading colony with a diverse, multilingual population. The English seized it in **1664**, and it became **New York** (granted to James, Duke of York) and **New Jersey**.
- **Pennsylvania** (charter **1681**) was William Penn's "holy experiment": Quaker toleration, an elected assembly, and land sold on easy terms.
- Fertile soil and a longer growing season made the region the colonies' **breadbasket**. Philadelphia and New York exported **wheat, flour and livestock** to the West Indies and southern Europe.
- In the 1700s the region drew large numbers of **Germans** and **Scots-Irish** migrants, many arriving as indentured "redemptioners" (Part 3).

### The Lower South: the Barbados connection
- **Carolina** was chartered in **1663** to eight Lords Proprietors; Charles Town was founded in **1670**. Many early settlers came from **Barbados**, England's richest sugar island, and brought its model of a planter elite ruling a large enslaved majority.
- By the 1690s **rice** grown in the coastal swamps became the main export; in the 1740s **indigo** (developed commercially by Eliza Lucas Pinckney and others) added a second crop. Many enslaved Africans came from rice-growing regions of West Africa, and historians debate how much their knowledge shaped Carolina's rice system.
- South Carolina had a **Black majority by the early 1700s**, the only mainland colony to do so.
- **Georgia** (charter **1732**, James Oglethorpe) was meant as a buffer against Spanish Florida and a fresh start for the "worthy poor." Its Trustees **banned slavery**, but pressure from settlers who saw Carolina's wealth ended the ban in **1751**.

### The British West Indies
Barbados and Jamaica are part of the CED's British colonial world. Sugar plantations there worked enslaved Africans so hard that deaths outnumbered births, so planters depended on constant new imports from Africa. In the 1600s their sugar made them worth more to England than the mainland colonies.
      `
    },
    {
      id: 'apushcol2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Region to Its Mechanism** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Family migration, long life expectancy and growth through natural increase best describe the ___',
            options: ['New England colonies', 'Chesapeake colonies', 'Lower South colonies', 'British West Indies']
          },
          {
            label: 'A planter class from Barbados, rice exports and a Black majority by the early 1700s best describe ___',
            options: ['South Carolina', 'Pennsylvania', 'Massachusetts', 'Maryland']
          },
          {
            label: 'Wheat and flour exports, Quaker toleration and heavy German and Scots-Irish migration best describe ___',
            options: ['Pennsylvania', 'Virginia', 'Connecticut', 'Georgia']
          }
        ],
        correctAnswers: ['New England colonies', 'South Carolina', 'Pennsylvania'],
        hint1: 'Which region had a cool, healthy climate and migrants who came as whole households?',
        hint2: 'Charles Town was founded in 1670, partly by planters moving from a sugar island.',
        hint3: 'William Penn\'s colony, centered on Philadelphia, was called a breadbasket.',
        explanation: 'New England grew from family migration and natural increase. South Carolina copied the Barbados plantation model and grew rice with an enslaved majority. Pennsylvania combined fertile wheat land with Quaker toleration that drew Germans and Scots-Irish.'
      }
    },
    {
      id: 'apushcol2-mechanism',
      type: 'text' as const,
      content: `
## Putting the Mechanism Together

| Cause | Chesapeake | New England | Middle | Lower South |
|---|---|---|---|---|
| **Environment** | Warm, long season; rivers; disease | Cold, rocky; healthy | Fertile; moderate | Hot, swampy coast; disease |
| **Founding goal** | Company profit | Religious commonwealth | Proprietary profit + toleration | Proprietary profit; plantation wealth |
| **Main labor** | Servants, then enslaved Africans | Family labor | Family farms, servants, some enslaved | Enslaved Africans |
| **Result** | Dispersed tobacco plantations; planter elite | Compact towns; congregations; trade | Diverse ports and farms | Rice and indigo plantations; enslaved majority |

### A worked causation paragraph
> **Prompt:** Explain one cause of the differences between the Chesapeake and New England colonies in the 1600s.
>
> **Response:** The Chesapeake's warm climate and fertile river lands made tobacco profitable, and the headright system rewarded planters for importing servants, so the region drew young single men and spread into scattered plantations. New England's rocky soil and short season ruled out a single cash crop, while Puritan families migrated together to build covenanted towns. As a result, the Chesapeake developed a labor-hungry export economy that turned to slavery, while New England grew through families and local trade.

Notice the structure: **specific cause → mechanism → specific result** for each region. That is what an SAQ "explain" point requires.
      `
    },
    {
      id: 'apushcol2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯

> "...the James river ships were no sooner entered with the officer at Jamestown, but they also dispersed themselves to unload, and trade all over the river. By this means the design of towns was totally balked..."
>
> "[Virginia and Maryland are] fallen into the same unhappy form of settlements, altogether upon country seats, without towns."
>
> — Robert Beverley, a Virginia planter, *The History and Present State of Virginia* (1705; wording of the revised 1722 edition)
      `,
      exercise: {
        questions: [
          {
            question: 'The pattern described in the excerpt most directly reflected which of the following?',
            options: [
              'The religious goal of separating each family from worldly neighbors',
              'Royal policy that confined all trade to a few chartered port towns',
              'The demands of a staple crop grown for export along a river system',
              'The fur trade, which required posts spread far apart in the interior'
            ],
            correctAnswer: 2,
            explanation: 'Tobacco exhausted soil and moved by ship, so planters settled along rivers and ships spread out to load at each plantation, which is why Beverley says plans for towns failed. He complains that trade was never confined to towns, and the fur trade describes New France rather than Virginia.'
          },
          {
            question: 'Which development in New England most sharply contrasts with the pattern in the excerpt?',
            options: [
              'Merchants in Boston built a carrying trade linking the colony to the West Indies',
              'Town grants clustered Puritan families around a meetinghouse and common fields',
              'Massachusetts adopted a 1647 law ordering larger towns to hire a schoolteacher',
              'Banished dissenters such as Roger Williams founded settlements in Rhode Island'
            ],
            correctAnswer: 1,
            explanation: 'New England towns were laid out as compact communities around a meetinghouse, the direct opposite of dispersed river plantations. The other options are accurate facts about New England but do not address settlement pattern.'
          }
        ]
      }
    }
  ]
}
