export const whEastAsianEmpiresPart1Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheae1-intro',
      type: 'text' as const,
      content: `
# 🌍 East Asian Empires (c. 1200–1450)

**Part 1 of 7 — China, Japan, Korea & Southeast Asia**

---

| Section |
|---------|
| 📖 Song Dynasty Innovations |
| The Yuan (Mongol) Dynasty |
| Japan: Feudalism & Shoguns |
| 📌 Korea & Southeast Asia |
| Cultural Connections |

> 🔑 **Key Concept:** The AP exam focuses on how East Asian societies developed distinct political systems while sharing **Confucian values, Chinese cultural influence, and interconnected trade networks**. Compare China's centralized bureaucracy with Japan\'s decentralized feudalism.
      `
    },
    {
      id: 'wheae1-china',
      type: 'text' as const,
      content: `
## 📖 Chinese Dynasties (1200–1450)

> **Song Dynasty (960–1279) — Economic Golden Age**

| Achievement | Significance |
|------------|-------------|
| **Neo-Confucianism** | Zhu Xi blended Confucianism with Buddhist/Daoist elements; emphasized self-cultivation, social harmony, and hierarchical relationships |
| **Civil service exams** | Expanded access (theoretically open to all men); tested Confucian classics; created scholar-gentry elite |
| **Economic revolution** | First paper money (*jiaozi*); joint-stock companies; massive iron/steel production |
| **Agriculture** | Champa rice (fast-growing variety from Vietnam); population boom; southern China became economic center |
| **Women's status** | Foot binding spread among elites; Neo-Confucian emphasis on female subordination; women\'s property rights declined |

> **Yuan Dynasty (1271–1368) — Mongol Rule**

| Feature | Details |
|---------|---------|
| **Founded by** | **Kublai Khan** (grandson of Genghis Khan) |
| **Ethnic hierarchy** | Mongols at top; Central Asians second; northern Chinese third; southern Chinese at bottom |
| **Trade** | Revitalized Silk Road; welcomed foreign merchants (Marco Polo); expanded maritime trade |
| **Governance** | Used non-Chinese administrators to prevent Chinese resistance; suspended civil service exams initially |
| **Fall** | Flooding, famine, plague, and **Red Turban Rebellion** → **Ming Dynasty** founded by Zhu Yuanzhang (1368) |

> **Ming Dynasty (1368–1644) — Restoration & Expansion**

| Feature | Details |
|---------|---------|
| **Restoration** | Restored Chinese rule; revived Confucian traditions; rebuilt the Great Wall |
| **Zheng He voyages** (1405–1433) | Massive treasure fleets (300+ ships) explored Indian Ocean; reached East Africa; demonstrated Chinese power |
| **Ended exploration** | After 1433, Ming emperors ended voyages; turned inward; focused on internal threats (Mongols) |
| **Culture** | Porcelain production peaked; Forbidden City built in Beijing; Neo-Confucian orthodoxy |

> ⚠️ **AP Alert:** Zheng He's voyages vs. European exploration is a classic AP comparison. Zheng He sailed earlier, with much larger ships, but China **chose to stop** exploring. Europe\'s fragmented, competitive states drove continued expansion. This contrast helps explain why Europe, not China, colonized the world.
      `
    },
    {
      id: 'wheae1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Ming Dynasty\'s decision to end Zheng He\'s voyages after 1433 is historically significant because it:',
            options: [
              'Demonstrates how political decisions, not just capability, shaped global history — China voluntarily withdrew from maritime exploration that later defined European power',
              'Proved that maritime exploration was economically unprofitable for all civilizations',
              'Was caused by military defeat at the hands of European navies',
              'Had no long-term consequences for global power dynamics'
            ],
            correctAnswer: 0,
            explanation: 'China had the world\'s most advanced navy in 1433 — far larger and more sophisticated than anything in Europe. But Confucian officials saw the voyages as wasteful and the Ming court shifted resources to defending against Mongol threats. This voluntary withdrawal left the Indian Ocean open for Portuguese and then other European powers, fundamentally shaping the next 500 years of history.'
          },
          {
            question: 'Under the Yuan Dynasty, Kublai Khan used non-Chinese administrators primarily because:',
            options: [
              'He wanted to prevent ethnically Chinese officials from gaining enough power to organize resistance against Mongol rule',
              'There were no educated Chinese people available for government service',
              'Non-Chinese administrators were always more competent than Chinese scholars',
              'The Confucian examination system had never existed before Mongol rule'
            ],
            correctAnswer: 0,
            explanation: 'The Mongols were a tiny minority ruling a vast Chinese population. By placing Central Asians and other non-Chinese in key positions, Kublai Khan reduced the risk of Chinese elites mobilizing against Mongol rule. He also suspended the civil service examinations for a time, further marginalizing the Chinese scholar-gentry class.'
          }
        ]
      }
    },
    {
      id: 'wheae1-japan',
      type: 'text' as const,
      content: `
## Japan & the Sinosphere

> **Japanese Feudalism (c. 1185–1600)**

| Feature | Details |
|---------|---------|
| **Emperor** | Ceremonial figurehead; real power held by military rulers |
| **Shogun** | Supreme military commander; ruled through a bakufu (military government) |
| **Daimyo** | Regional lords who controlled territories; commanded samurai |
| **Samurai** | Warrior class bound by **bushido** (code of honor: loyalty, martial skill, honor, ritual suicide — seppuku) |
| **Peasants** | 80%+ of population; rice farmers; lowest status but economically essential |

**Key comparison:** Japan's feudal system resembled European feudalism (decentralized, land-based, warrior elites) but developed independently.

> **Korea: Koryo & Choson Dynasties**

| Feature | Details |
|---------|---------|
| **Koryo Dynasty** (918–1392) | Adopted Chinese civil service exams, Buddhism, Confucianism; invented **metal movable type** (before Gutenberg!) |
| **Mongol influence** | Korea became a Mongol vassal state; maintained some autonomy |
| **Choson Dynasty** (1392–1897) | Neo-Confucian reforms; **hangul** alphabet invented (1443) to increase literacy |

> **AP Comparison Anchor**

- **Khmer Empire** (Cambodia) — **Angkor Wat**; Hindu-Buddhist temple complex; massive hydraulic engineering (reservoirs)
- **Srivijaya** (Indonesia) — Buddhist maritime empire controlling the Strait of Malacca; key to Indian Ocean trade
- **Majapahit** (Java) — Hindu-Buddhist kingdom; controlled spice trade; later Islamized through merchant contact
- **Dai Viet** (Vietnam) — Confucian governance adopted from China; resisted Chinese political control while accepting cultural influence
      `
    },
    {
      id: 'wheae1-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What Chinese admiral led massive treasure fleets across the Indian Ocean between 1405 and 1433?',
            options: [
              'Zheng He',
              'Kublai Khan',
              'Yongle Emperor',
              'Marco Polo'
            ],
            correctAnswer: 0,
            explanation: 'Zheng He\'s voyages (1405–1433) demonstrated China\'s unmatched naval power before the Ming court chose to end exploration. His fleet included ships up to 400 feet long — dwarfing European vessels.'
          },
          {
            question: 'What Japanese warrior code emphasized loyalty, honor, martial skill, and ritual suicide (seppuku)?',
            options: [
              'Bushido',
              'Shinto',
              'Neo-Confucianism',
              'Sakoku'
            ],
            correctAnswer: 0,
            explanation: 'Bushido — "the way of the warrior" — shaped Japanese warrior culture for centuries and still influences Japanese society today.'
          },
          {
            question: 'What Korean alphabet, invented in 1443, was designed to increase literacy among common people?',
            options: [
              'Hangul',
              'Kanji',
              'Hiragana',
              'Hanja'
            ],
            correctAnswer: 0,
            explanation: 'Hangul was a revolutionary phonetic alphabet, easy to learn, created by King Sejong — still used in both North and South Korea today.'
          }
        ]
      }
    },
    {
      id: 'wheae1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The fast-growing rice variety imported from Vietnam that fueled Song Dynasty population growth was ___',
            options: ['Champa rice', 'Basmati rice', 'Wild rice', 'Jasmine rice']
          },
          {
            label: 'The massive Hindu-Buddhist temple complex built by the Khmer Empire in Cambodia was ___',
            options: ['Angkor Wat', 'Forbidden City', 'Taj Mahal', 'Borobudur']
          },
          {
            label: 'The military commander who held real political power in feudal Japan (while the emperor was a figurehead) was the ___',
            options: ['Shogun', 'Daimyo', 'Samurai', 'Emperor']
          }
        ],
        correctAnswers: ['Champa rice', 'Angkor Wat', 'Shogun'],
        hint1: 'Imported from Southeast Asia; allowed multiple harvests per year',
        hint2: 'The world\'s largest religious monument',
        hint3: 'Title meaning "barbarian-subduing generalissimo"',
        explanation: 'Champa rice\'s fast growth cycle allowed double-cropping, fueling the Song population boom. Angkor Wat demonstrates Indian cultural influence in Southeast Asia (Hindu then Buddhist). The shogunate system defined Japanese governance for nearly 700 years.'
      }
    },
    {
      id: 'wheae1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which comparison BEST captures the relationship between China and other East Asian societies during 1200–1450?',
            options: [
              'Japan, Korea, and Vietnam selectively adopted Chinese cultural elements (Confucianism, writing, governance models) while maintaining distinct political structures and cultural identities',
              'China militarily conquered and directly governed Japan, Korea, and Vietnam throughout this period',
              'East Asian societies had no contact with China and developed entirely independently',
              'Japan, Korea, and Vietnam completely replaced their own cultures with Chinese culture'
            ],
            correctAnswer: 0,
            explanation: 'The concept of the "Sinosphere" (Chinese cultural sphere) is key: Korea adopted civil service exams and Neo-Confucianism but also invented hangul. Japan borrowed Chinese writing and Buddhism but developed a feudal political system unlike China\'s centralized bureaucracy. Vietnam adopted Confucian governance while fiercely resisting Chinese political control. This pattern of selective borrowing is a crucial AP concept.'
          },
          {
            question: 'An AP question compares Japanese feudalism with European feudalism. The MOST accurate statement would be:',
            options: [
              'Both developed decentralized systems with warrior elites (samurai/knights), regional lords (daimyo/lords), and peasant farmers, though they emerged independently with distinct cultural expressions',
              'Japanese feudalism was directly borrowed from European feudalism through trade contacts',
              'The two systems were completely dissimilar with no comparable features',
              'Both systems were centralized monarchies with powerful kings controlling all territory'
            ],
            correctAnswer: 0,
            explanation: 'Japanese and European feudalism are a classic AP comparison: both featured decentralized power, military aristocracies bound by codes of honor (bushido/chivalry), hereditary land control, and a large peasant class. However, they developed independently — demonstrating how similar political structures can emerge in different civilizations facing similar conditions (weak central government, need for local military defense).'
          }
        ]
      }
    }
  ]
}
