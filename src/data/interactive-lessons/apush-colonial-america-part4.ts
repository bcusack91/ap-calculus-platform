export const apushColonialAmericaPart4Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol4-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial America

**Part 4 of 7 — Transatlantic Trade and Mercantilism: Causation with Data**

---

| Section |
|---------|
| 📖 The Logic of Mercantilism |
| The Navigation Acts, Step by Step |
| What Each Region Sold |
| 📌 Reading the Population Data |
| Causation: Bonds and Friction |

> 🔑 **Key Concept:** CED Topic 2.4 (KC 2.2.I) says the British colonies took part in an Atlantic economy that **tied them more closely to Britain** and at the same time **created friction** over British control. This part teaches the rules of that economy, the numbers behind it, and how to write a causation argument that captures both effects.
      `
    },
    {
      id: 'apushcol4-mercantilism',
      type: 'text' as const,
      content: `
## 📖 The Logic of Mercantilism

Mercantilism was not a single law but a set of assumptions shared by European governments in the 1600s and 1700s.

| Assumption | What it meant for colonies |
|---|---|
| The world's wealth is roughly **fixed**, so one nation gains what another loses | Colonies should enrich the mother country, not rivals such as the Dutch or French |
| A nation grows rich by keeping a **favorable balance of trade** (exporting more than it imports) | Colonies should supply raw materials England would otherwise buy from foreigners |
| Manufacturing creates the most value | Colonies should **buy English manufactured goods** and not compete with English industry |
| Shipping and sailors are national strength | Colonial trade should travel in **English ships** with English crews, training sailors for the navy |

Mercantilism explains why England cared so much about **who carried** colonial goods and **where** they went, not just what the colonies produced.
      `
    },
    {
      id: 'apushcol4-navacts',
      type: 'text' as const,
      content: `
## The Navigation Acts, Step by Step

| Year | Law | What it did |
|---|---|---|
| **1651** | Navigation Act (passed under Cromwell's Commonwealth) | Goods imported into England had to come in English ships or ships of the producing country; aimed at **Dutch** carriers who dominated Atlantic shipping |
| **1660** | Navigation Act | Colonial trade must use English or colonial ships with mostly English crews. **Enumerated goods** (sugar, tobacco, cotton, indigo, ginger, dyewoods) could be shipped only to England or another English colony |
| **1663** | Staple Act | European goods bound for the colonies had to pass through England first, where they were taxed |
| **1673** | Plantation Duty Act | Duties on enumerated goods shipped between colonies; royal customs collectors sent to America |
| **1696** | Navigation Act and Board of Trade | Tighter enforcement; **vice-admiralty courts** (judges without juries) for smuggling cases; a new Board of Trade to oversee the colonies |
| **1699–1750** | Wool Act (1699), Hat Act (1732), Iron Act (1750) | Limited colonial manufacturing that competed with English producers |
| **1733** | Molasses Act | A duty of sixpence per gallon on molasses from **foreign** (French, Dutch, Spanish) West Indies; widely evaded by smuggling |

### Who gained, who lost?
- **Gains for colonists:** a protected English market for tobacco; colonial-built ships counted as "English," which made **New England shipbuilding** boom; protection by the Royal Navy; bounties (subsidies) for naval stores (1705) and indigo (1748).
- **Costs for colonists:** Chesapeake tobacco had to go through England, so English merchants took a share and re-exported much of it to Europe; manufacturing limits; higher prices for European goods.
- **Enforcement was uneven.** Customs posts were few, officials could be bribed, and juries sided with smugglers, which is one reason Parliament turned to juryless vice-admiralty courts.

> 🔑 **AP Connection:** The Navigation Acts are a **Period 2** development, but they matter for **Period 3**. After 1763, Britain began enforcing old trade laws and adding new ones, and colonists who had grown used to loose enforcement resisted.
      `
    },
    {
      id: 'apushcol4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check: Mercantilism** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Listing tobacco and sugar as "enumerated goods" in the Navigation Act of 1660 meant that colonists could legally ship them only to which destination?',
            options: [
              'Any port in Europe or the Americas',
              'Spain, France or the Netherlands',
              'The Dutch port of New Amsterdam',
              'England and its possessions'
            ],
            correctAnswer: 3,
            explanation: 'Enumerated goods had to go to England or another English colony, so English merchants and the Crown profited from them before any re-export to Europe. Shipping them to foreign ports was exactly what the law forbade.'
          },
          {
            question: 'Which group in the colonies benefited most directly from the rule that colonial-built ships counted as English under the Navigation Acts?',
            options: [
              'Chesapeake planters who exported tobacco through London',
              'Pennsylvania farmers who sold wheat and flour to the West Indies',
              'New England shipbuilders and merchants in ports such as Boston',
              'South Carolina planters who grew rice for export to Portugal'
            ],
            correctAnswer: 2,
            explanation: 'Because colonial ships qualified as English, New England\'s shipyards and merchants could legally build and sail the empire\'s carrying trade, and the region\'s shipbuilding grew rapidly. Planters and farmers gained buyers or markets, not shipbuilding business.'
          }
        ]
      }
    },
    {
      id: 'apushcol4-regions',
      type: 'text' as const,
      content: `
## What Each Region Sold

| Region | Main exports | Main markets |
|---|---|---|
| **New England** | Fish (dried cod), timber, ships, rum, livestock | West Indies (food and lumber for sugar plantations); southern Europe; Britain |
| **Middle Colonies** | Wheat, flour, bread, livestock | West Indies; southern Europe |
| **Chesapeake** | Tobacco (the largest single colonial export) | Britain, which re-exported much of it to Europe |
| **Lower South** | Rice; indigo from the 1740s; deerskins and naval stores | Britain; after 1730, some rice could go directly to southern Europe |
| **British West Indies** | Sugar, molasses | Britain; molasses to New England distillers |

### The "triangular trade," handled with care
Textbooks often show a triangle: New England rum to West Africa, enslaved Africans to the West Indies, molasses back to New England. That route existed, and **Newport, Rhode Island**, was its leading colonial port. But most colonial trade ran on **two-way shuttle routes**, for example Boston to Barbados and back, or Philadelphia to London and back. Use "triangular trade" as one pattern among several, not as a description of all Atlantic commerce.

### Why the West Indies matter for the mainland
Sugar planters devoted almost all their land to cane, so they bought **food, horses and lumber** from New England and the Middle Colonies. That trade gave northern colonies the money to pay for English goods, which tied the northern economy to slavery in the Caribbean even where few enslaved people lived.
      `
    },
    {
      id: 'apushcol4-data',
      type: 'text' as const,
      content: `
## 📌 Reading the Population Data

**Estimated population of the British mainland colonies**

| Year | Total population | Growth over previous 50 years |
|---|---|---|
| 1650 | about 50,000 (50,368) | — |
| 1700 | about 251,000 (250,888) | about 5 times larger |
| 1750 | about 1,171,000 (1,170,760) | about 4.7 times larger |

Source: U.S. Census Bureau, *Historical Statistics of the United States*, Series Z 1–19 (estimates).

### Worked analysis
1. **Describe the trend.** The population grew roughly **fivefold** in each half-century, from about 50,000 to over 1.1 million in a hundred years.
2. **Calculate.** 1,170,760 ÷ 250,888 ≈ 4.67. A population that multiplies by about 4.7 in 50 years is doubling roughly every **22 to 23 years**.
3. **Explain the causes.** Natural increase (early marriage, large families and, outside the Chesapeake and Lower South coast, low death rates), continued immigration (English, then German and Scots-Irish in the 1700s), and the forced migration of enslaved Africans. By 1750 roughly **one in five** people in the mainland colonies was of African descent.
4. **Connect to trade.** More colonists meant a fast-growing **market for British manufactured goods**, which is why historians speak of a **"consumer revolution"** in the mid-1700s: colonists bought English cloth, ceramics, tea and printed books in growing amounts.
5. **State the limit.** These are estimates built from scattered colonial counts, and they **exclude most Native Americans**, whose numbers were falling through epidemics and war. Do not use them as evidence about the whole population of North America.

> 🔑 **AP Connection:** On an MCQ set with a table, first describe the trend in words, then ask which development the trend **caused** or **reflected**. Rapid population growth caused westward pressure on Native lands and a larger market for British goods; it reflected natural increase, immigration and the slave trade.
      `
    },
    {
      id: 'apushcol4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Cause and Effect in the Atlantic Economy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To keep the profits of carrying colonial goods away from Dutch shippers, Parliament passed the first ___',
            options: ['Navigation Act', 'Molasses Act', 'Iron Act', 'Staple Act']
          },
          {
            label: 'Because sugar planters devoted their land to cane, New England and the Middle Colonies sold food and lumber to the ___',
            options: ['British West Indies', 'Spanish Philippines', 'Dutch East Indies', 'French Louisiana']
          },
          {
            label: 'A sixpence-per-gallon duty on foreign molasses, widely evaded by smugglers, was imposed by the ___',
            options: ['Molasses Act', 'Navigation Act', 'Wool Act', 'Hat Act']
          }
        ],
        correctAnswers: ['Navigation Act', 'British West Indies', 'Molasses Act'],
        hint1: 'Passed in 1651 under Cromwell, it required English ships or ships of the producing country.',
        hint2: 'Barbados and Jamaica were the richest colonies in the English Atlantic.',
        hint3: 'Passed in 1733, it targeted the French, Dutch and Spanish Caribbean.',
        explanation: 'The 1651 Navigation Act targeted Dutch carriers. The sugar islands of the British West Indies imported food and lumber from the mainland. The Molasses Act of 1733 taxed foreign molasses but was poorly enforced.'
      }
    },
    {
      id: 'apushcol4-causation',
      type: 'text' as const,
      content: `
## Causation: Bonds and Friction

The CED asks you to explain how Atlantic trade produced **two opposite effects at once**. A strong causation paragraph names both and explains the mechanism of each.

| Effect | Mechanism | Evidence |
|---|---|---|
| **Stronger bonds with Britain** | Colonists depended on British markets, credit and goods, and shared a growing taste for British consumer products | Tobacco sold through London; the consumer revolution; Royal Navy protection of colonial shipping |
| **Resistance to British control** | Trade rules cut into colonial profits and were enforced by unpopular officials and courts | Widespread smuggling of foreign molasses; colonial hostility to customs collectors and vice-admiralty courts |

### A worked SAQ response
> **Prompt:** Explain ONE way that British mercantilist policies affected the colonies between 1660 and 1754.
>
> **Response:** The Navigation Acts required enumerated goods such as tobacco to be shipped only to England or English colonies. As a result, Chesapeake planters became dependent on London merchants who bought their crop and extended them credit, binding the region's economy closely to Britain. At the same time, rules such as the Molasses Act of 1733 encouraged New England merchants to smuggle cheaper French molasses, building a habit of evading imperial trade laws that later fed resistance after 1763.

The response names a specific law, explains **how** it worked, gives a specific result, and shows both bonds and friction.
      `
    },
    {
      id: 'apushcol4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Data Stimulus** 🎯

| Year | Estimated population of the British mainland colonies |
|---|---|
| 1650 | 50,368 |
| 1700 | 250,888 |
| 1750 | 1,170,760 |

Source: *Historical Statistics of the United States*, Series Z 1–19
      `,
      exercise: {
        questions: [
          {
            question: 'The trend shown in the table most directly contributed to which of the following developments by the mid-1700s?',
            options: [
              'A decline in British interest in its American colonies',
              'Growing colonial demand for British manufactured goods',
              'The end of indentured servitude in the Middle Colonies',
              'A sharp fall in the colonial export trade in tobacco'
            ],
            correctAnswer: 1,
            explanation: 'A colonial population that grew almost fivefold in fifty years became a large and expanding market for British cloth, tea and other goods, part of the consumer revolution. Britain\'s interest grew rather than declined, servitude continued among immigrants, and tobacco exports kept rising.'
          },
          {
            question: 'Which factor best explains the growth shown in the table between 1700 and 1750?',
            options: [
              'Natural increase, European immigration and the forced migration of Africans',
              'A royal program that paid the passage of every family moving to America',
              'Large-scale migration of French settlers from Canada to the British colonies',
              'The movement of most Native nations into British towns along the coast'
            ],
            correctAnswer: 0,
            explanation: 'High birth rates, German and Scots-Irish immigration and the forced migration of Africans together drove the growth. No royal program paid every family\'s passage, French Canadians did not move south in large numbers, and the estimates largely exclude Native Americans.'
          },
          {
            question: 'Which is the most important limitation of the table for a historian studying North America in 1750?',
            options: [
              'It reports exact census counts that each colony took on the same day each year',
              'It counts only the population of port cities such as Boston and Philadelphia',
              'It includes the populations of New France and New Spain in each yearly figure',
              'It covers the mainland colonies but leaves out most Native peoples'
            ],
            correctAnswer: 3,
            explanation: 'The figures are estimates for the British colonies and largely exclude Native peoples, so they cannot describe all of North America. They are not exact yearly censuses, they cover rural as well as urban colonists, and they do not include French or Spanish colonies.'
          }
        ]
      }
    }
  ]
}
