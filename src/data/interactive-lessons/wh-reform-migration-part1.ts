export const whReformMigrationPart1Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whreform1-intro',
      type: 'text' as const,
      content: `
# 🌍 Reform, Migration & Global Movements

**Part 1 of 7 — Abolition, Suffrage & Mass Migration**

---

| Section |
|---------|
| 📖 Abolition of Slavery |
| Women's Suffrage Movements |
| Global Migration Patterns |
| Nationalist Movements |

> 🔑 **Key Concept:** The AP exam tests how industrialization and Enlightenment ideals drove **reform movements** (abolition, suffrage, labor rights) and **mass migration** patterns that reshaped global demographics in the 19th century.
      `
    },
    {
      id: 'whreform1-abolition',
      type: 'text' as const,
      content: `
## 📖 Abolition of Slavery & Serfdom

### Timeline of Abolition

| Year | Event |
|---|---|
| **1794** | French Revolution abolishes slavery (restored by Napoleon in 1802) |
| **1804** | Haiti — first nation founded by formerly enslaved people |
| **1807** | Britain bans the **slave trade** (not slavery itself) |
| **1833** | British Emancipation Act — slavery abolished throughout the British Empire |
| **1861** | Russia emancipates the serfs (Tsar Alexander II) |
| **1863** | U.S. Emancipation Proclamation (full abolition via 13th Amendment, 1865) |
| **1888** | **Brazil** — last Western Hemisphere nation to abolish slavery |

### Causes of Abolition
- **Enlightenment ideas** — natural rights philosophy undermined moral justification for slavery
- **Religious movements** — Quakers and Evangelical Christians led abolition campaigns (William Wilberforce in Britain)
- **Economic shift** — industrial capitalism needed free wage laborers and consumer markets, not enslaved workers
- **Slave resistance** — the Haitian Revolution demonstrated that slavery could be overthrown by force
- **Political pressure** — abolition societies organized public campaigns, petitions, and consumer boycotts (e.g., boycotting slave-produced sugar)

### After Abolition — New Coercive Systems
Abolition did not end exploitation. New labor systems replaced slavery:
- **Sharecropping** (U.S. South) — formerly enslaved people worked land in exchange for a share of crops, often trapped in debt
- **Indentured labor** — millions of Indian, Chinese, and Japanese workers contracted to work on plantations in the Caribbean, South Africa, Southeast Asia, and Pacific islands
- **Convict leasing** (U.S.) — imprisoned people (disproportionately Black) leased to private companies for forced labor

> 🔑 **AP Connection:** The AP exam tests **continuity and change** — slavery was abolished, but coercive labor systems persisted in new forms. Be ready to compare old and new forms of labor exploitation.
      `
    },
    {
      id: 'whreform1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST illustrates the concept of "continuity and change" in labor systems after the abolition of slavery?',
            options: [
              'Most freedpeople received land confiscated from former slaveholders, giving them economic independence soon after emancipation',
              'Coercive regimes such as sharecropping and convict leasing replaced slavery yet kept much of its exploitation of Black labor',
              'Plantation economies across the Americas collapsed because planters could find no new workforce willing to labor on their estates',
              'Wage labor with full freedom of movement became the norm for freedpeople, ending planter control over Black workers'
            ],
            correctAnswer: 1,
            explanation: 'While the formal institution of slavery was abolished, exploitative labor systems persisted. Sharecropping in the U.S. South trapped former slaves in debt cycles; convict leasing (predominantly targeting Black Americans) was forced labor under another name; and indentured servants from India and China replaced enslaved workers on Caribbean plantations. Land redistribution largely failed (the promise of "40 acres" was revoked), and plantations did not collapse — planters found new coerced or semi-coerced workers.'
          },
          {
            question: 'Which factor was LEAST significant in the abolition of the Atlantic slave trade?',
            options: [
              'Enlightenment philosophy asserting natural rights and human equality undermined slavery\'s moral legitimacy',
              'Economic arguments that free wage labor was more productive than enslaved labor for industrial capitalism',
              'Voluntary decisions by West African kingdoms to stop selling captives to Europeans for moral reasons',
              'The success of the Haitian Revolution proving that enslaved people could overthrow their enslavers by force'
            ],
            correctAnswer: 2,
            explanation: 'While some African leaders opposed the slave trade, many West African kingdoms (Dahomey, Asante) continued participating because it provided them with European goods and weapons. The primary drivers of abolition were European/American movements combining Enlightenment ideas, religious activism (Quakers), economic arguments, and enslaved peoples\' own resistance.'
          }
        ]
      }
    },
    {
      id: 'whreform1-migration',
      type: 'text' as const,
      content: `
## 📖 Global Migration Patterns (1750–1900)

Industrialization drove the **largest mass migration in human history** up to that point:

### Major Migration Flows

| Flow | Numbers | Push/Pull Factors |
|---|---|---|
| **Europe → Americas** | ~50 million (1800–1914) | Pushed by poverty, famine (Irish Potato Famine, 1845), religious persecution; pulled by land, jobs, freedom |
| **China → Southeast Asia, Americas** | ~2.5 million+ | Pushed by Taiping Rebellion, poverty; pulled by gold rushes, railroad construction |
| **India → Caribbean, E. Africa, Pacific** | ~1.5 million+ | Indentured labor replacing enslaved workers on sugar plantations |
| **Rural → Urban (within countries)** | Hundreds of millions | Agricultural mechanization pushed; factory jobs pulled |

### Impact of Migration
- **Cultural exchange** — Chinatowns, Little Italys, and ethnic enclaves formed in cities worldwide
- **Nativism** — hostility toward immigrants; Chinese Exclusion Act (U.S., 1882)
- **Diaspora communities** — maintained cultural ties to homelands while adapting to new societies
- **Demographic transformation** — the Americas, Australia, and New Zealand were fundamentally reshaped by European immigration

> 🔑 **AP Connection:** The AP exam connects migration to both **push factors** (famine, war, poverty) and **pull factors** (economic opportunity, religious freedom). You must also address how receiving societies **responded** — often with xenophobia and exclusionary laws.
      `
    },
    {
      id: 'whreform1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What was the most significant "push factor" driving Irish migration to the United States in the 1840s–1850s?',
            options: [
              'The Irish Parliament offered emigrants free passage to relieve overcrowding in Dublin and other growing industrial towns',
              'The Great Famine, when a potato blight destroyed the crop that most of the Irish rural poor relied on for food',
              'British colonial authorities forcibly deported Irish citizens to the Americas as punishment for political activity',
              'The California gold rush, which drew most Irish emigrants westward in hope of quick wealth from mining claims'
            ],
            correctAnswer: 1,
            explanation: 'The Great Famine (An Gorta Mór, 1845–1852) killed approximately 1 million Irish people and drove another 1 million+ to emigrate — primarily to the United States. The potato blight destroyed the crop that the Irish poor depended on, while British land policies and grain exports exacerbated the crisis. There was no Irish Parliament after the 1800 Act of Union, and the gold rush (1848 onward) drew only a small share of Irish emigrants, most of whom settled in eastern cities.'
          },
          {
            question: 'How did the system of indentured labor that emerged after abolition connect to global migration patterns?',
            options: [
              'Contracts mainly moved Irish, German, and Scandinavian workers to Caribbean sugar estates to replace the formerly enslaved',
              'Contracts moved large numbers of Indian, Chinese, and Japanese workers to plantations in the Caribbean, Africa, and the Pacific',
              'Contracts mostly moved workers within India and China, from inland districts to coastal ports, with little overseas movement',
              'Contracts mainly moved African workers to European factories, filling industrial jobs that European emigrants had left behind'
            ],
            correctAnswer: 1,
            explanation: 'After abolition, plantation owners recruited indentured workers — primarily from India and China — on multi-year contracts. Over 1.5 million Indians alone were sent to British colonies in the Caribbean (Trinidad, Guyana), East Africa, and the Pacific. While technically voluntary and temporary, conditions were often exploitative and workers had limited freedom.'
          }
        ]
      }
    }
  ]
};
