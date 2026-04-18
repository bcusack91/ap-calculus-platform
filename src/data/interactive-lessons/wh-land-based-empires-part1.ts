export const whLandBasedEmpiresPart1Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlandba1-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (1450–1750)

**Part 1 of 7 — Imperial Expansion & Administration**

---

| Section |
|---------|
| 📖 How Empires Expanded |
| Ming China & the Qing Transition |
| Russian Empire Expansion |
| Comparing Imperial Administration |

> 🔑 **Key Concept:** The AP exam tests how empires **legitimized** their rule, **administered** diverse populations, and **expanded** through both military conquest and bureaucratic systems. Focus on comparing strategies across empires.

---

### What You'll Master in Part 1
- How land-based empires expanded and consolidated power
- Ming China's tributary system and the Manchu Qing conquest
- Russian expansion under Ivan IV and Peter the Great
- Comparative analysis of imperial administration systems
      `
    },
    {
      id: 'whlandba1-ming',
      type: 'text' as const,
      content: `
## 📖 Ming China (1368–1644) & the Qing Transition

### The Ming Dynasty

| Feature | Details |
|---|---|
| **Founded** | 1368 by Zhu Yuanzhang (Hongwu Emperor) after overthrowing Mongol Yuan dynasty |
| **Capital** | Beijing; constructed the **Forbidden City** |
| **Government** | Centralized bureaucracy; reinstituted the **civil service exam** based on Confucian classics |
| **Economy** | Silver-based economy; global trade in silk, porcelain, tea |
| **Zheng He Voyages** | 1405–1433: massive naval expeditions across Indian Ocean; discontinued by later emperors |

### Key Concepts
- **Tributary system** — neighboring states (Korea, Vietnam, Japan) sent tribute to the Ming court, acknowledging Chinese cultural superiority in exchange for trade access
- **Haijin** — maritime trade ban (partially enforced); reflected Confucian suspicion of merchant class
- **Silver trade** — massive inflow from Spanish American mines (via Manila galleon trade) transformed China's economy but created dependency

### The Qing Conquest (1644)
- **Manchu** people from Manchuria conquered Ming China during a period of internal rebellion
- Maintained Chinese bureaucratic structures but imposed Manchu customs:
  - **Queue hairstyle** — mandatory for Chinese men as a sign of submission
  - **Banner system** — Manchu military/administrative units
  - **Kangxi Emperor** (1661–1722) — exemplified successful integration of Manchu and Chinese traditions

> 🔑 **AP Connection:** The Ming-to-Qing transition illustrates the AP theme of **continuity and change** — the Qing kept the exam system and Confucian governance but imposed new ethnic hierarchies.
      `
    },
    {
      id: 'whlandba1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'After the Qing Manchu conquered Ming China in 1644, how did they handle the existing Chinese governmental system?',
            options: [
              'They largely maintained the Confucian civil service exam system while adding Manchu ethnic hierarchies and cultural requirements',
              'They abolished all Chinese institutions and replaced them entirely with Manchu tribal governance structures',
              'They created a fully democratic system granting equal rights to both Manchu and Han Chinese populations',
              'They decentralized all authority and eliminated the role of the emperor in daily governance'
            ],
            correctAnswer: 0,
            explanation: 'The Qing adopted a pragmatic approach: they kept the proven civil service exam and Confucian bureaucracy (continuity) but imposed Manchu customs like the queue hairstyle and maintained Manchu dominance through the banner system (change). This is a classic AP example of continuity and change in transitions of power.'
          },
          {
            question: 'What role did silver play in the Ming Chinese economy during the 15th–17th centuries?',
            options: [
              'Silver was irrelevant because China relied on a barter economy for all transactions',
              'China exported massive quantities of silver to Europe in exchange for manufactured goods',
              'Silver flowed into China from the Americas and Japan, becoming the basis of the Chinese tax system and commercial economy',
              'The Ming government banned silver entirely and used only copper coins for currency'
            ],
            correctAnswer: 2,
            explanation: 'The Ming Single Whip Reform required taxes to be paid in silver, creating massive demand. Silver flowed into China from Spanish mines in the Americas (via the Manila galleon trade) and from Japan. This made China\'s economy dependent on global silver flows — when supplies declined in the early 1600s, it contributed to the Ming collapse.'
          }
        ]
      }
    },
    {
      id: 'whlandba1-russia',
      type: 'text' as const,
      content: `
## 📖 Russian Empire Expansion

### From Muscovy to Empire

| Ruler | Period | Key Developments |
|---|---|---|
| **Ivan III ("the Great")** | 1462–1505 | Threw off Mongol (Golden Horde) rule; consolidated Muscovite state |
| **Ivan IV ("the Terrible")** | 1547–1584 | First to use the title **Tsar** (from Caesar); expanded into Siberia; created the Oprichnina (secret police/terror) |
| **Peter the Great** | 1682–1725 | **Westernization** — reformed military, government, and culture; built St. Petersburg as a "window to Europe" |

### Methods of Expansion & Control
- **Eastward** — Cossack explorers (like Yermak) pushed into Siberia for fur trade; Russia reached the Pacific by the 1640s
- **Serfdom** — Peasants were bound to the land and to noble landlords; serfdom **intensified** under the Romanovs (Law Code of 1649)
- **Peter's Westernization** — forced nobles to shave beards, adopt Western dress, and serve in the military or government; created a professional army modeled on European forces; established a navy

### Comparison: Russia vs. Other Empires
- Like the Ottomans, Russia used a **service nobility** — elites owed their status to the state, not to independent feudal power
- Unlike China's exam-based meritocracy, Russia relied on **hereditary nobility** tied to land ownership and military service

> 🔑 **AP Connection:** Peter the Great's Westernization is a key example of **cultural borrowing as a state-building strategy**. The AP exam tests whether students can analyze WHY rulers adopted foreign practices and what resistance they faced.
      `
    },
    {
      id: 'whlandba1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes Peter the Great\'s primary motivation for Westernizing Russia?',
            options: [
              'A genuine desire to improve literacy and living standards for Russian peasants',
              'Strengthening Russia\'s military and economic competitiveness with European powers',
              'Converting Russia from Eastern Orthodoxy to Western Catholicism',
              'Establishing democratic institutions modeled on the English Parliament'
            ],
            correctAnswer: 1,
            explanation: 'Peter\'s Westernization was primarily about **power and security**. After seeing Russia\'s military weaknesses firsthand (especially against the Ottomans and Swedes), he adopted Western military technology, shipbuilding, and administrative practices to make Russia a competitive European power. He had no interest in democracy or changing the Orthodox Church.'
          },
          {
            question: 'How did the Chinese tributary system differ from Russian methods of controlling conquered territories?',
            options: [
              'China used a tribute system where neighboring states acknowledged Chinese cultural superiority in exchange for trade, while Russia imposed direct rule through military garrisons and serfdom',
              'Both empires used identical methods of democratic local governance in all territories',
              'Russia relied on cultural superiority claims while China used military force exclusively',
              'Neither empire expanded beyond its original borders during this period'
            ],
            correctAnswer: 0,
            explanation: 'China\'s tributary system was based on cultural prestige — neighboring states maintained autonomy while performing rituals of submission. Russia, by contrast, imposed direct control through Cossack settlement, military outposts, and the extension of serfdom into conquered territories like Siberia.'
          }
        ]
      }
    }
  ]
};
