export const hgIndustrializationPart2Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgindust2-intro',
      type: 'text' as const,
      content: `
# 🌍 Industrialization & Development

**Part 2 of 7 — The Industrial Revolution: Origins, Diffusion and Consequences**

---

| Section |
|---------|
| 📖 Why Industrialization Began in Great Britain |
| How Industrialization Diffused |
| Raw Materials, Markets and Imperialism |
| Consequences for Cities, Population and Society |

> 🔑 **Key Concept:** The Industrial Revolution replaced hand tools and animal or water power with **machines driven by fossil fuels**, first in Great Britain from about the **1760s**. As it spread, it reorganized where people lived and worked, created a demand for raw materials that drove **colonialism and imperialism**, and laid down the core-periphery pattern of the world economy (CED Topic 7.1).
`
    },
    {
      id: 'hgindust2-origins',
      type: 'text' as const,
      content: `
## 📖 Why Industrialization Began in Great Britain

No single cause explains Britain's head start. Geographers point to a **combination of site and situation factors** that came together there first.

| Factor | What Britain had | Why it mattered |
|---|---|---|
| **Energy and raw materials** | Coal and iron ore deposits, often close together, in the Midlands, northern England, South Wales and lowland Scotland | Coal fueled steam engines and iron smelting; short hauls kept costs low |
| **Food and labor** | The **Second Agricultural Revolution**: enclosure, crop rotation and new tools raised farm output with fewer workers | Surplus food fed growing towns; displaced rural workers became factory labor |
| **Capital** | Profits from overseas trade, including the Atlantic slave trade and colonial plantations, plus a developed banking system | Investors could pay for mills, mines, canals and later railways |
| **Markets and supplies** | A large empire and merchant fleet | Colonies supplied raw cotton and bought finished cloth |
| **Transportation** | Navigable rivers, a long coastline and a canal network built from the 1760s | Heavy coal and iron moved cheaply by water |
| **Institutions** | Patent protection and a stable government friendly to commerce | Inventors and investors could expect to profit |

### The Key Technologies

| Invention | Date | Effect |
|---|---|---|
| **Coke-fired iron smelting** (Abraham Darby) | 1709 | Coal-based coke replaced scarce charcoal, so iron output could expand |
| **Spinning jenny** (James Hargreaves) | about 1764 | One worker could spin many threads at once |
| **Improved steam engine** (James Watt) | patented 1769 | A far more efficient engine that could power factories anywhere coal could reach |
| **Steam railway** (Liverpool and Manchester Railway) | 1830 | Fast overland freight and passenger travel between cities |
| **Bessemer process** | 1856 | Cheap, mass-produced steel for rails, ships and buildings |

The **textile industry** led the way. Mills first clustered beside fast rivers for water power; Watt's engine let them move to coalfields and towns, which is why Lancashire cotton towns such as Manchester grew so quickly.

> 🔑 **AP Connection:** The steam engine changed the **location** of industry. Water-powered mills were tied to river sites; steam-powered mills could locate near coal, labor and markets. That shift is an early example of the location factors you will apply with Weber's model in Part 3.
`
    },
    {
      id: 'hgindust2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which factor best explains why early British factories were concentrated in the Midlands and northern England?',
            options: [
              'Nearby deposits of coal and iron ore',
              'Mild winters that lowered heating costs',
              'Laws that banned factories near London',
              'A shortage of farmland in those regions'
            ],
            correctAnswer: 0,
            explanation: 'Coal powered steam engines and smelted iron, and both were heavy and costly to move, so industry gathered on the coalfields. Climate and farmland shortages did not drive the pattern, and no law pushed factories away from London.'
          },
          {
            question: 'How did the Second Agricultural Revolution help make the Industrial Revolution possible?',
            options: [
              'It moved most British farms into the colonies overseas',
              'It raised food output and freed rural workers for factories',
              'It replaced coal with crop waste as the main source of fuel',
              'It kept most families on farms and out of the growing towns'
            ],
            correctAnswer: 1,
            explanation: 'Enclosure, crop rotation and new tools let fewer farmers grow more food, which fed urban workers and released rural labor for mills. The other options describe changes that did not happen or would have slowed industrialization.'
          },
          {
            question: 'Why did James Watt\'s improved steam engine change where textile mills were built?',
            options: [
              'Mills no longer needed a site on a fast river',
              'Mills could now run without any human workers',
              'Mills had to move to ports to import the engines',
              'Mills were required to locate beside iron mines'
            ],
            correctAnswer: 0,
            explanation: 'Water-powered mills depended on river sites, but steam engines burned coal, so mills could locate in towns and on coalfields close to labor and markets. Mills still needed many workers, and engines did not have to be imported.'
          }
        ]
      }
    },
    {
      id: 'hgindust2-diffusion',
      type: 'text' as const,
      content: `
## How Industrialization Diffused

Britain tried to protect its lead, for example by banning the emigration of skilled mechanics (until 1824) and the export of textile machinery (until 1843), but the knowledge spread anyway.

| Region | When industry took hold | How it spread there |
|---|---|---|
| **Belgium, northern France** | Early 1800s | Coalfields close to Britain; British mechanics and machines crossed the Channel |
| **United States** | 1790s textile mills in New England; heavy industry after the 1860s | Samuel Slater rebuilt British mill designs from memory (1790); later steel around Pittsburgh used Appalachian coal and Great Lakes iron ore |
| **Germany** | Rapid growth after unification in 1871 | The Ruhr coalfield became Europe's largest heavy-industry region |
| **Japan** | After the Meiji Restoration of 1868 | The **state** imported Western experts and built model factories, then sold many to private firms |
| **Russia** | Fast growth in the 1890s | State-funded railways, including the Trans-Siberian Railway begun in 1891, and foreign investment |

### Patterns in the Diffusion
- **Relocation diffusion:** skilled workers such as Slater carried the know-how in their heads.
- **Hierarchical diffusion:** industry reached capital cities, ports and coalfields before rural areas.
- **The role of the state:** latecomers (Germany, Japan, Russia) relied more on government planning and banks to catch up quickly.

**Scale matters.** At the **global** scale, industrialization made Western Europe, North America and later Japan the core of the world economy. At the **national** scale, it concentrated wealth in particular regions (the Ruhr, Lancashire, the U.S. Manufacturing Belt) while other regions stayed agricultural.
`
    },
    {
      id: 'hgindust2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Diffusion** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A British mechanic emigrates and rebuilds mill machinery from memory in New England. This is ___',
            options: ['Relocation diffusion', 'Contagious diffusion', 'Stimulus diffusion', 'Reverse hierarchical diffusion']
          },
          {
            label: 'Japan\'s government imports foreign engineers and builds model factories after 1868. This is ___',
            options: ['State-led industrialization', 'Deindustrialization', 'Commodity export dependence', 'Agglomeration diseconomy']
          },
          {
            label: 'Factories appear first in ports and capitals and only later in small towns. This is ___',
            options: ['Hierarchical diffusion', 'Relocation diffusion', 'Contagious diffusion', 'Reverse hierarchical diffusion']
          }
        ],
        correctAnswers: ['Relocation diffusion', 'State-led industrialization', 'Hierarchical diffusion'],
        hint1: 'The person physically moved and carried the idea.',
        hint2: 'Who organized and paid for the first factories?',
        hint3: 'Large, well-connected places adopt first.',
        explanation: 'Slater carried mill designs with him when he moved, which is relocation diffusion. Meiji Japan industrialized through government planning. Spread from large, connected places down to smaller ones is hierarchical diffusion.'
      }
    },
    {
      id: 'hgindust2-imperialism',
      type: 'text' as const,
      content: `
## Raw Materials, Markets and Imperialism

Factories consumed raw materials faster than Europe could supply them, and they produced more goods than home markets could buy. Both needs pushed industrial powers outward.

| Need | Raw material or market | Main source regions, colonial and other |
|---|---|---|
| Textiles | Raw cotton | India, Egypt; enslaved labor in the U.S. South supplied most of Britain's cotton before 1861 |
| Machinery and tires | Rubber | Congo Free State, Malaya, Amazon basin |
| Soap, lubricants | Palm oil | West Africa |
| Food for factory workers | Wheat, sugar, tea | India, Caribbean, Argentina, Australia |
| Markets | Cheap factory cloth | India, where British imports undercut local handloom weavers |

The **Berlin Conference (1884–1885)** set European rules for claiming African territory, and by about 1914 European powers controlled nearly all of Africa.

### The Lasting Pattern
Colonies were organized to **export raw materials** and **import manufactured goods**. Railways ran from mines and plantations to ports, not between interior towns. That colonial economic structure is the root of the **commodity dependence** that development theorists discuss (Part 6), and its transportation legacy still shapes many African and South Asian economies.

> 🔑 **AP Connection:** If a question asks how industrialization affected places that did **not** industrialize, the answer is often colonialism: periphery regions were tied to the core as suppliers of raw materials and buyers of finished goods.
`
    },
    {
      id: 'hgindust2-consequences',
      type: 'text' as const,
      content: `
## Consequences for Cities, Population and Society

| Change | Evidence | Link to other units |
|---|---|---|
| **Urbanization** | The 1851 census showed that, for the first time, more than half the people of England and Wales lived in towns | Unit 6: industrial cities and the Burgess model's factory zone |
| **Population growth** | Better food supply, and later sanitation and medicine, cut death rates while birth rates stayed high | Unit 2: Stage 2 of the demographic transition model |
| **Class structure** | A wage-earning working class and an expanding middle class of managers, clerks and owners | Unit 3: changing gender and family roles as work left the home |
| **Working conditions** | Long hours, child labor and dangerous mills led to the Factory Act of 1833, which limited children's working hours in textile mills | Unit 7: labor standards in today's export factories |
| **Environment** | Coal smoke, polluted rivers and crowded, unsanitary housing | Unit 6: urban sustainability challenges |

### The Industrial Revolution Did Not End in Britain
Later waves of industrialization (Part 1's three-wave table) moved through steel, chemicals and electricity, then electronics and automation. Since the 1970s, manufacturing has shifted toward East and South Asia, and the old industrial regions of Britain and the United States have **deindustrialized**, a change covered in the globalization topic.

**Misconception:** industrialization did not raise living standards immediately or evenly. Wages and life expectancy in early factory cities were often low, and gains came only over decades, partly through reform laws and labor organizing.
`
    },
    {
      id: 'hgindust2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A hypothetical industrial town had 20,000 people in 1800 and 80,000 in 1850.

**1)** By what **percent** did its population grow over those 50 years?

**2)** In 1850, 60,000 of the 80,000 residents were born outside the town. What **percent** were migrants?

**3)** The town's death rate fell from 35 to 25 per 1,000 while its birth rate stayed at 40 per 1,000. What was the new rate of natural increase, **per 1,000**?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '75', '15'],
        hint1: 'Percent change = (new − old) ÷ old × 100.',
        hint2: 'Divide the migrants by the total population, then multiply by 100.',
        hint3: 'Natural increase = birth rate − death rate.',
        explanation: '1) (80,000 − 20,000) ÷ 20,000 × 100 = 300%. 2) 60,000 ÷ 80,000 = 75%, showing that rural-to-urban migration drove most of the growth. 3) 40 − 25 = 15 per 1,000, a rise in natural increase typical of DTM Stage 2.'
      }
    },
    {
      id: 'hgindust2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why were many colonial railways built from interior mines and plantations straight to the coast?',
            options: [
              'To move raw materials to ports for export',
              'To link colonial capitals with each other',
              'To carry factory goods to interior mills',
              'To settle rural migrants on new farmland'
            ],
            correctAnswer: 0,
            explanation: 'Colonial economies were designed to ship raw materials to the industrial core, so lines ran to ports rather than connecting interior towns. That legacy still limits trade between neighboring African countries.'
          },
          {
            question: 'Which change in Britain during the 1800s fits Stage 2 of the demographic transition model?',
            options: [
              'Birth rates fell faster than death rates',
              'Death rates fell but birth rates stayed high',
              'Both rates fell to low and similar levels',
              'Both rates rose as factory towns expanded'
            ],
            correctAnswer: 1,
            explanation: 'Better food supply and later sanitation lowered death rates while birth rates remained high, so the population grew quickly, which defines Stage 2. Low, similar rates describe Stage 4.'
          },
          {
            question: 'Japan, Germany and Russia industrialized after Britain. What did these latecomers have in common?',
            options: [
              'They relied on water power long after Britain had moved to steam',
              'They depended heavily on state planning and banks to catch up',
              'They industrialized without importing any foreign technology',
              'They began with textiles and avoided heavy industry entirely'
            ],
            correctAnswer: 1,
            explanation: 'To close the gap quickly, latecomers used government planning, state-funded railways and large banks to concentrate capital. Each imported foreign technology and built heavy industry, especially Germany in the Ruhr.'
          }
        ]
      }
    }
  ]
};
