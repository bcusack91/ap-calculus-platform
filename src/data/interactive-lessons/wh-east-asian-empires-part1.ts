export const whEastAsianEmpiresPart1Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheae1-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires: Background (c. 1200–1450)

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
| **Economic revolution** | Early state-issued paper money (*jiaozi*, government notes from the 1020s); joint-stock companies; massive iron/steel production |
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
| **Restoration** | Restored Chinese rule; revived Confucian traditions; strengthened northern frontier defenses (most surviving Great Wall masonry dates from the 1500s) |
| **Zheng He voyages** (1405–1433) | Massive treasure fleets (roughly 250–317 vessels on the first voyage) explored Indian Ocean; reached East Africa; demonstrated Chinese power |
| **Ended exploration** | After 1433, Ming emperors ended the state voyages and restricted private sea trade (the ban was relaxed in 1567); focused on the northern frontier (Mongols) |
| **Culture** | Porcelain production peaked; Forbidden City built in Beijing; Neo-Confucian orthodoxy |

> ⚠️ **AP Alert:** Zheng He's voyages vs. European exploration is a classic AP comparison. Zheng He sailed earlier, with much larger ships, but the Ming court **chose to stop** the state voyages (private Chinese trade continued). Europe\'s fragmented, competitive states drove continued expansion. This contrast helps explain why Europe, not China, colonized the world.
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
              'Shows that court politics rather than any lack of ability ended China\'s state voyages',
              'Shows ocean voyages to be unprofitable for every state that attempted them in this era',
              'Shows the effect of a naval defeat inflicted on the Ming fleet by Portuguese warships',
              'Shows Mongol rulers abandoning the sea after their failed invasions of Japan'
            ],
            correctAnswer: 0,
            explanation: 'China had the world\'s largest navy in 1433 — far larger than anything in Europe. But Confucian officials saw the voyages as wasteful, and the Ming court shifted resources to the northern frontier against the Mongols. The state voyages ended, though private trade continued and the sea ban was relaxed in 1567. The Portuguese did not reach the Indian Ocean until 1498, and the failed invasions of Japan were the Yuan\'s, not the Ming\'s.'
          },
          {
            question: 'Under the Yuan Dynasty, Kublai Khan used non-Chinese administrators primarily because:',
            options: [
              'To keep Chinese officials from gaining enough power to organize resistance to Mongol rule',
              'Because few Chinese in the empire had the literacy needed for government service',
              'Because Central Asian officials had passed the Confucian exams with higher marks',
              'Because Chinese scholars had refused all office under every dynasty before the Yuan'
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
| **Samurai** | Warrior class with ideals of loyalty, martial skill and honor, including ritual suicide (seppuku); these were systematized as **bushido** mainly in the later Edo period |
| **Peasants** | 80%+ of population; rice farmers; lowest status but economically essential |

**Key comparison:** Japan's feudal system resembled European feudalism (decentralized, land-based, warrior elites) but developed independently.

> **Korea: Koryo & Choson Dynasties**

| Feature | Details |
|---------|---------|
| **Koryo Dynasty** (918–1392) | Adopted Chinese civil service exams, Buddhism, Confucianism; printed with **metal movable type** (the *Jikji*, 1377, is the oldest surviving such book, decades before Gutenberg) |
| **Mongol influence** | Korea became a Mongol vassal state; maintained some autonomy |
| **Choson Dynasty** (1392–1897) | Neo-Confucian reforms; **hangul** alphabet invented (1443) to increase literacy |

> **AP Comparison Anchor**

- **Khmer Empire** (Cambodia) — **Angkor Wat**; Hindu-Buddhist temple complex; massive hydraulic engineering (reservoirs)
- **Srivijaya** (Sumatra) — Buddhist maritime empire that controlled the Strait of Malacca (c. 650–1200s); faded in the 1200s as Majapahit and later Malacca rose
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
            explanation: 'Zheng He\'s voyages (1405–1433) demonstrated China\'s unmatched naval power before the Ming court chose to end exploration. Ming records describe treasure ships far larger than any European vessel of the time, though historians debate their exact size.'
          },
          {
            question: 'What term, systematized mainly in the later Edo period, names the samurai ideal of loyalty, honor, martial skill and ritual suicide (seppuku)?',
            options: [
              'Bushido',
              'Shinto',
              'Neo-Confucianism',
              'Sakoku'
            ],
            correctAnswer: 0,
            explanation: 'Bushido — "the way of the warrior" — names ideals rooted in medieval samurai culture, but the term and its systematic code were developed mainly in the peaceful Edo period (1600–1868), so it should not be read back as a fixed code for 1185–1600. Shinto is Japan\'s native religion, Neo-Confucianism a Chinese philosophy, and sakoku a later label for Tokugawa maritime restrictions.'
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
              'Japan, Korea and Vietnam borrowed Chinese ideas selectively but kept their own states',
              'China conquered and directly governed Japan, Korea and Vietnam for most of the period',
              'Japan, Korea and Vietnam had little contact with China and developed on their own',
              'Japan, Korea and Vietnam replaced their own cultures with Chinese culture entirely'
            ],
            correctAnswer: 0,
            explanation: 'The concept of the "Sinosphere" (Chinese cultural sphere) is key: Korea adopted civil service exams and Neo-Confucianism but also invented hangul. Japan borrowed Chinese writing and Buddhism but developed a feudal political system unlike China\'s centralized bureaucracy. Vietnam adopted Confucian governance while fiercely resisting Chinese political control. This pattern of selective borrowing is a crucial AP concept.'
          },
          {
            question: 'An AP question compares Japanese feudalism with European feudalism. The MOST accurate statement would be:',
            options: [
              'Both had decentralized warrior elites and lords but emerged independently',
              'Japan borrowed its feudal order from Europe through Portuguese trade contacts',
              'Both were centralized monarchies in which kings controlled all of the land',
              'The two systems shared no features worth comparing in an AP essay'
            ],
            correctAnswer: 0,
            explanation: 'Japanese and European feudalism are a classic AP comparison: both featured decentralized power, military aristocracies with ideals of loyalty and honor, hereditary land control, and a large peasant class. However, they developed independently (the Portuguese did not reach Japan until 1543) — showing how similar political structures can emerge in different civilizations facing similar conditions (weak central government, need for local military defense).'
          }
        ]
      }
    }
  ]
}
