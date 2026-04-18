const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{
  file: 'wh-islamic-empires-part1.ts',
  varName: 'whIslamicEmpiresPart1Data',
  slug: 'wh-islamic-empires',
  prefix: 'whislami1',
  content: `export const whIslamicEmpiresPart1Data = {
  topicSlug: 'wh-islamic-empires',
  sections: [
    {
      id: 'whislami1-intro',
      type: 'text' as const,
      content: \`
# 🕌 Islamic Empires (1450–1750)

**Part 1 of 7 — The Ottoman, Safavid & Mughal Empires**

---

| Section |
|---------|
| 📖 The Three Gunpowder Empires |
| Ottoman Empire — Structure & Expansion |
| Safavid Empire — Shi'a Identity |
| Mughal Empire — Religious Diversity |
| Decline & Comparison |

> 🔑 **Key Concept:** The AP exam groups the Ottomans, Safavids, and Mughals as **"Gunpowder Empires"** because their power rested on firearms technology. You must compare how each empire handled **religious diversity, legitimacy, and governance**.

---

### What You'll Master in Part 1
- How gunpowder technology transformed Islamic empires
- Key rulers and their policies toward religious minorities
- Similarities and differences across the three empires
- How these empires connected to global trade networks
      \`
    },
    {
      id: 'whislami1-ottoman',
      type: 'text' as const,
      content: \`
## 📖 The Ottoman Empire (c. 1299–1922)

The Ottomans built one of the most powerful and long-lasting empires in world history, spanning southeastern Europe, western Asia, and North Africa.

### Rise & Expansion

| Period | Key Events |
|---|---|
| **1299** | Osman I founds the Ottoman dynasty in Anatolia |
| **1453** | Mehmed II conquers Constantinople → renamed Istanbul; ends the Byzantine Empire |
| **1520–1566** | **Suleiman the Magnificent** — empire reaches greatest extent |
| **1529** | Siege of Vienna — Ottoman expansion into Europe halted |

### Government & Administration

- **Sultan** held absolute political and religious authority (title: *Caliph* after 1517 conquest of Egypt)
- **Devshirme system** — Christian boys from the Balkans were recruited, converted to Islam, and trained as elite soldiers (**Janissaries**) or administrators
- **Millet system** — religious minorities (Christians, Jews) governed their own communities in exchange for taxes and loyalty
- **Provincial governors (pashas)** administered distant regions with significant autonomy

### Economy
- Controlled key trade routes between Europe and Asia
- **Istanbul** became a cosmopolitan center of commerce
- Revenue from the spice trade, textiles, and taxation of conquered peoples

> 🔑 **AP Connection:** The devshirme and millet systems are **heavily tested**. The devshirme shows how empires used enslaved/recruited populations for governance, while the millet system demonstrates Ottoman religious tolerance as a governance strategy.
      \`
    },
    {
      id: 'whislami1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'What was the primary purpose of the Ottoman devshirme system?',
            options: [
              'To recruit and train Christian boys as elite soldiers and administrators loyal to the Sultan',
              'To convert Muslim subjects to Christianity through forced education programs',
              'To collect agricultural taxes from peasant farmers across the Balkans',
              'To establish diplomatic embassies in European capitals for trade negotiations'
            ],
            correctAnswer: 0,
            explanation: 'The devshirme recruited Christian boys — primarily from the Balkans — who were converted to Islam, educated, and trained to serve as Janissary soldiers or government administrators. Their loyalty was directly to the Sultan since they had no local family ties.'
          },
          {
            question: 'Under the Ottoman millet system, how were non-Muslim religious communities governed?',
            options: [
              'They were forced to convert or face execution under strict Sharia law',
              'They could govern their own internal affairs (marriage, education, disputes) in exchange for paying special taxes',
              'They had full political equality with Muslims and held seats in the imperial council',
              'They were confined to specific urban quarters and banned from participating in trade'
            ],
            correctAnswer: 1,
            explanation: 'The millet system allowed religious communities (Greek Orthodox Christians, Armenian Christians, Jews) self-governance in personal matters like marriage, education, and civil disputes. In return, they paid the jizya (a tax on non-Muslims). This is an example of pragmatic religious tolerance as a governance strategy.'
          },
          {
            question: 'Which event in 1453 is considered a turning point in world history and a key marker of the Ottoman rise?',
            options: [
              'The Ottoman defeat at the Battle of Lepanto against a European coalition',
              'The fall of Constantinople to Mehmed II, ending the Byzantine Empire',
              'The signing of the Treaty of Karlowitz with European powers',
              'The completion of the Hagia Sophia as an Ottoman mosque'
            ],
            correctAnswer: 1,
            explanation: 'Mehmed II\\'s conquest of Constantinople in 1453 ended the 1,100-year-old Byzantine Empire and gave the Ottomans control of a strategic crossroads between Europe and Asia. The city was renamed Istanbul and became the Ottoman capital.'
          }
        ]
      }
    },
    {
      id: 'whislami1-safavid',
      type: 'text' as const,
      content: \`
## 📖 The Safavid Empire (1501–1736)

The Safavids ruled Persia (modern-day Iran) and established **Twelver Shi'a Islam** as the state religion — creating a lasting religious identity that distinguishes Iran from its Sunni neighbors to this day.

### Key Features

| Ruler | Period | Significance |
|---|---|---|
| **Shah Ismail I** | 1501–1524 | Founded the dynasty; forced conversion to Shi'a Islam |
| **Shah Abbas I ("the Great")** | 1588–1629 | Military modernization; new capital at Isfahan; height of Safavid power |

### Government & Society
- **Shah** held absolute authority, claiming descent from Shi'a Imams
- **Qizilbash** — Turkic tribal warriors who provided military power (later replaced by slave soldiers similar to Janissaries)
- **Isfahan** became one of the world's most beautiful cities — "Isfahan is half the world" was a common saying
- Women in elite households had **more legal protections** than in Ottoman or Mughal society (property rights, divorce rights)

### Conflict with Ottomans
- The Safavid-Ottoman rivalry was both **territorial and religious** — Shi'a vs. Sunni
- This conflict shaped the geopolitics of the Middle East for centuries
- Battle of Chaldiran (1514): Ottomans defeated Safavids using superior firearms

> 🔑 **AP Connection:** The Safavid-Ottoman rivalry illustrates how **religious differences** (Shi'a vs. Sunni) drove interstate conflict, a pattern the AP exam frequently tests.
      \`
    },
    {
      id: 'whislami1-mughal',
      type: 'text' as const,
      content: \`
## 📖 The Mughal Empire (1526–1857)

The Mughals ruled the Indian subcontinent, governing a vast and religiously diverse population of Hindus, Muslims, Sikhs, and others.

### Key Rulers

| Ruler | Period | Legacy |
|---|---|---|
| **Babur** | 1526–1530 | Founded the dynasty; descended from both Timur and Genghis Khan |
| **Akbar** | 1556–1605 | **Most tested ruler** — policy of religious tolerance (*sulh-i-kul* = "universal peace"); abolished the jizya tax on Hindus; married Hindu Rajput princesses |
| **Shah Jahan** | 1628–1658 | Built the **Taj Mahal**; lavish architectural patronage |
| **Aurangzeb** | 1658–1707 | **Reversed** Akbar's tolerance; reinstated jizya; expanded territory but destabilized the empire |

### Religious Diversity as a Governance Challenge
- Akbar's approach: **inclusion** — appointed Hindu generals (Rajputs), created the syncretic religion *Din-i-Ilahi*, held interfaith debates (Ibadat Khana)
- Aurangzeb's approach: **exclusion** — destroyed Hindu temples, imposed strict Islamic law, triggered rebellions (Marathas, Sikhs)

### Economy & Culture
- Controlled Indian Ocean trade in textiles, spices, and gems
- **Mughal miniature painting** blended Persian and Indian artistic traditions
- Architecture: Taj Mahal, Red Fort, Jama Masjid

> 🔑 **AP Connection:** The AP exam loves the **Akbar vs. Aurangzeb comparison** — it tests how different approaches to governing diverse populations produced dramatically different outcomes.
      \`
    },
    {
      id: 'whislami1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'How did Mughal Emperor Akbar\\'s religious policies differ from those of Aurangzeb?',
            options: [
              'Akbar promoted religious tolerance and abolished the jizya tax, while Aurangzeb reimposed it and enforced strict Islamic law',
              'Akbar converted to Hinduism and banned Islam, while Aurangzeb promoted interfaith dialogue',
              'Both rulers maintained identical policies of strict religious enforcement throughout their reigns',
              'Akbar expanded the empire through military conquest, while Aurangzeb focused exclusively on domestic reforms'
            ],
            correctAnswer: 0,
            explanation: 'Akbar practiced sulh-i-kul (universal peace), abolished the jizya on non-Muslims, and appointed Hindus to high positions. Aurangzeb reversed these policies — reimposing the jizya, destroying Hindu temples, and enforcing strict Islamic law — which provoked rebellions and weakened the empire.'
          },
          {
            question: 'Which of the following BEST explains why the Safavid Empire is historically significant?',
            options: [
              'It was the first empire to abolish slavery in the Middle East',
              'It established Shi\\'a Islam as Iran\\'s state religion, creating a lasting sectarian identity',
              'It conquered Constantinople and ended the Byzantine Empire in 1453',
              'It was the largest land-based empire in world history at its peak'
            ],
            correctAnswer: 1,
            explanation: 'Shah Ismail I made Twelver Shi\\'a Islam the state religion in 1501, forcibly converting the previously Sunni population of Persia. This created the Shi\\'a identity of modern Iran and deepened the Sunni-Shi\\'a divide that continues today.'
          },
          {
            question: 'What common factor gave the Ottoman, Safavid, and Mughal empires their military advantage, earning them the label "Gunpowder Empires"?',
            options: [
              'Their extensive use of cavalry from Central Asian steppe traditions',
              'Their adoption of firearms and cannon technology, which enabled conquest of larger territories',
              'Their alliance with European powers who supplied advanced weapons',
              'Their invention of gunpowder through independent scientific research'
            ],
            correctAnswer: 1,
            explanation: 'All three empires leveraged gunpowder weapons — cannons for sieges and firearms for infantry — to conquer and control vast territories. The Ottomans used massive cannons at Constantinople (1453), the Mughals used them at the Battle of Panipat (1526), and the Safavids adopted them after their defeat at Chaldiran (1514).'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-land-based-empires-part1.ts',
  varName: 'whLandBasedEmpiresPart1Data',
  slug: 'wh-land-based-empires',
  prefix: 'whlandba1',
  content: `export const whLandBasedEmpiresPart1Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlandba1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'whlandba1-ming',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'whlandba1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
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
            explanation: 'The Ming Single Whip Reform required taxes to be paid in silver, creating massive demand. Silver flowed into China from Spanish mines in the Americas (via the Manila galleon trade) and from Japan. This made China\\'s economy dependent on global silver flows — when supplies declined in the early 1600s, it contributed to the Ming collapse.'
          }
        ]
      }
    },
    {
      id: 'whlandba1-russia',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'whlandba1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes Peter the Great\\'s primary motivation for Westernizing Russia?',
            options: [
              'A genuine desire to improve literacy and living standards for Russian peasants',
              'Strengthening Russia\\'s military and economic competitiveness with European powers',
              'Converting Russia from Eastern Orthodoxy to Western Catholicism',
              'Establishing democratic institutions modeled on the English Parliament'
            ],
            correctAnswer: 1,
            explanation: 'Peter\\'s Westernization was primarily about **power and security**. After seeing Russia\\'s military weaknesses firsthand (especially against the Ottomans and Swedes), he adopted Western military technology, shipbuilding, and administrative practices to make Russia a competitive European power. He had no interest in democracy or changing the Orthodox Church.'
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
            explanation: 'China\\'s tributary system was based on cultural prestige — neighboring states maintained autonomy while performing rituals of submission. Russia, by contrast, imposed direct control through Cossack settlement, military outposts, and the extension of serfdom into conquered territories like Siberia.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-exploration-columbian-exchange-part1.ts',
  varName: 'whExplorationColumbianExchangePart1Data',
  slug: 'wh-exploration-columbian-exchange',
  prefix: 'whexplor1',
  content: `export const whExplorationColumbianExchangePart1Data = {
  topicSlug: 'wh-exploration-columbian-exchange',
  sections: [
    {
      id: 'whexplor1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Exploration & the Columbian Exchange

**Part 1 of 7 — European Maritime Expansion & Global Exchange**

---

| Section |
|---------|
| 📖 Motives for European Exploration |
| Portuguese & Spanish Pioneers |
| The Columbian Exchange |
| Economic & Demographic Consequences |

> 🔑 **Key Concept:** The Columbian Exchange is one of the **most tested topics** on the AP World exam. You must understand the biological, economic, and demographic consequences of contact between the Eastern and Western Hemispheres after 1492.
      \`
    },
    {
      id: 'whexplor1-motives',
      type: 'text' as const,
      content: \`
## 📖 Motives for European Exploration

### Why Europe? Why the 1400s?

Several factors converged to make European maritime exploration possible and desirable:

| Factor | Explanation |
|---|---|
| **New technology** | Magnetic compass (from China via Islamic world); astrolabe; lateen sails; caravel ships |
| **Economic motive** | Desire to bypass Ottoman/Venetian middlemen in the lucrative **spice trade** with Asia |
| **Religious motive** | Spread Christianity; Reconquista spirit in Spain/Portugal |
| **Political competition** | European monarchs sought wealth and prestige to strengthen their states |
| **Renaissance curiosity** | Renewed interest in geography, navigation, and the wider world |

### Portuguese Pioneers
- **Prince Henry the Navigator** (early 1400s) — sponsored voyages along the African coast; established trading posts
- **Bartolomeu Dias** (1488) — rounded the Cape of Good Hope (southern tip of Africa)
- **Vasco da Gama** (1498) — reached India by sea → established direct spice trade, bypassing Muslim and Venetian middlemen
- Portuguese established a **trading post empire** — small fortified bases (Goa, Malacca, Macau) rather than territorial conquest

### Spanish Exploration
- **Christopher Columbus** (1492) — reached the Caribbean believing he had found Asia
- **Treaty of Tordesillas** (1494) — divided the New World between Spain and Portugal (papal mediation)
- **Hernán Cortés** (1519–21) — conquered the Aztec Empire with indigenous allies, gunpowder, and disease
- **Francisco Pizarro** (1532) — conquered the Inca Empire using similar advantages

> 🔑 **AP Connection:** Compare **Portuguese trading-post empires** with **Spanish territorial conquest**. The AP exam tests why different European powers adopted different colonial strategies.
      \`
    },
    {
      id: 'whexplor1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which factor BEST explains why Portugal was the first European nation to establish an overseas trading empire in the 15th century?',
            options: [
              'Portugal had the largest population and military in Europe at the time',
              'Its geographic position on the Atlantic coast, combined with state-sponsored investment in naval technology and the desire to access Asian trade routes',
              'Portuguese merchants had already controlled the Mediterranean spice trade for centuries',
              'The Pope mandated that Portugal lead all Christian exploration efforts worldwide'
            ],
            correctAnswer: 1,
            explanation: 'Portugal\\'s Atlantic location gave it natural access to exploration routes. Prince Henry the Navigator invested in naval technology (caravel ships, navigation instruments), and the crown sought direct access to African gold and Asian spices to bypass expensive overland routes controlled by Ottoman and Italian middlemen.'
          },
          {
            question: 'How did Portuguese colonial strategy in Asia primarily differ from Spanish colonial strategy in the Americas?',
            options: [
              'Portugal established small, fortified trading posts along coasts, while Spain conquered and directly governed large territorial empires',
              'Portugal focused on spreading Christianity, while Spain was solely interested in economic exploitation',
              'Spain relied on naval power, while Portugal preferred overland conquest',
              'Both nations used identical strategies of trading-post empires throughout their colonial territories'
            ],
            correctAnswer: 0,
            explanation: 'Portugal lacked the manpower for large-scale territorial conquest, so it built a network of coastal trading posts (Goa, Malacca, Macau) to control maritime trade routes. Spain, facing weakened Aztec and Inca empires (due to disease and internal conflict), pursued direct territorial conquest and settler colonialism.'
          }
        ]
      }
    },
    {
      id: 'whexplor1-exchange',
      type: 'text' as const,
      content: \`
## 📖 The Columbian Exchange

The **Columbian Exchange** refers to the massive transfer of plants, animals, diseases, people, and ideas between the Eastern and Western Hemispheres after 1492.

### What Was Exchanged?

| Direction | Category | Examples |
|---|---|---|
| **Americas → Old World** | Crops | Potatoes, maize (corn), tomatoes, cacao, tobacco, squash, peppers |
| **Americas → Old World** | Precious metals | Gold and silver (especially from Potosí, Bolivia) |
| **Old World → Americas** | Crops | Wheat, sugar cane, rice, grapes, coffee |
| **Old World → Americas** | Animals | Horses, cattle, pigs, sheep, chickens |
| **Old World → Americas** | Diseases | **Smallpox**, measles, influenza, typhus |

### Demographic Impact
- **Catastrophic population decline** — an estimated **50–90% of the indigenous American population** died from Old World diseases within the first century of contact
- This demographic collapse was the **single most important factor** enabling European conquest and colonization
- European and African populations in the Americas grew as indigenous populations fell

### Economic Impact
- **Silver** from the Americas (Potosí mines) fueled global trade — silver flowed from Spain → China via the Manila galleon trade
- **Sugar plantations** in the Caribbean and Brazil created enormous demand for enslaved African labor → Atlantic slave trade
- **Potatoes and maize** boosted populations in Europe, Africa, and China by providing calorie-dense crops suitable for diverse climates

> 🔑 **AP Connection:** You MUST be able to trace the **global connections** created by the Columbian Exchange: American silver → European commerce → Chinese economy; American sugar → African slave trade → plantation system.
      \`
    },
    {
      id: 'whexplor1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which consequence of the Columbian Exchange had the most significant impact on the indigenous population of the Americas?',
            options: [
              'The introduction of European legal systems that restricted indigenous land ownership rights',
              'The introduction of Old World diseases like smallpox, which killed an estimated 50–90% of the indigenous population',
              'The introduction of horses, which disrupted traditional hunting practices among all native groups',
              'The introduction of Christianity, which replaced all indigenous religious practices within one generation'
            ],
            correctAnswer: 1,
            explanation: 'Old World diseases — especially smallpox, measles, and influenza — devastated indigenous populations who had no prior exposure and therefore no immunological resistance. This demographic catastrophe was far more destructive than any military campaign and fundamentally enabled European conquest. Horses actually empowered some groups (like Plains peoples).'
          },
          {
            question: 'How did silver from the Americas affect the global economy in the 16th and 17th centuries?',
            options: [
              'It had minimal impact since silver was only used locally in Spanish colonial markets',
              'It caused deflation in Europe and reduced trade with Asia due to overproduction',
              'It created a truly global trade network — flowing from American mines through Spain to markets in China, where it was used to pay for silk, porcelain, and tea',
              'It was primarily used to fund religious crusades and had no commercial significance'
            ],
            correctAnswer: 2,
            explanation: 'American silver (particularly from Potosí) became the world\\'s most important trade commodity. Spain used it to purchase Asian goods; silver flowed to China via the Manila galleon trade because China\\'s silver-based tax system (Single Whip Reform) created massive demand. This connected the Americas, Europe, and Asia in the first truly global economy.'
          },
          {
            question: 'Which connection between the Columbian Exchange and the Atlantic slave trade is MOST historically accurate?',
            options: [
              'European demand for sugar (an Old World crop grown on New World plantations) created massive labor demand that was filled by enslaved Africans',
              'Indigenous Americans voluntarily migrated to Africa, creating the need for replacement labor in the Americas',
              'The Atlantic slave trade existed for centuries before the Columbian Exchange and was unrelated to it',
              'Enslaved Africans were primarily brought to the Americas to work in silver mines controlled by Portugal'
            ],
            correctAnswer: 0,
            explanation: 'Sugar cane (transferred from the Old World to the Americas) required intensive labor for cultivation and processing. The catastrophic decline of indigenous populations from disease made European colonizers turn to enslaved African labor. The sugar-slavery connection drove the Atlantic slave trade for over 300 years.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-maritime-empires-labor-part1.ts',
  varName: 'whMaritimeEmpiresLaborPart1Data',
  slug: 'wh-maritime-empires-labor',
  prefix: 'whmariti1',
  content: `export const whMaritimeEmpiresLaborPart1Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmariti1-intro',
      type: 'text' as const,
      content: \`
# ⚓ Maritime Empires & Labor Systems

**Part 1 of 7 — Colonial Economies & Forced Labor**

---

| Section |
|---------|
| 📖 European Maritime Empires |
| The Atlantic Slave Trade |
| Colonial Labor Systems |
| Mercantilism & the Global Economy |

> 🔑 **Key Concept:** The AP exam tests how European colonial empires created **coercive labor systems** to extract wealth from conquered territories. You must compare different labor systems and understand how the Atlantic slave trade connected three continents.
      \`
    },
    {
      id: 'whmariti1-empires',
      type: 'text' as const,
      content: \`
## 📖 European Maritime Empires

By the 1600s–1700s, several European powers had established vast colonial empires connected by oceanic trade:

| Empire | Key Colonies | Economic Focus |
|---|---|---|
| **Spain** | Mexico, Peru, Philippines, Caribbean | Silver mining (Potosí), sugar, haciendas |
| **Portugal** | Brazil, coastal Africa, Goa, Macau | Sugar plantations, slave trade, spice trade |
| **Britain** | North America, Caribbean, India (later) | Tobacco, sugar, fur trade, later textiles |
| **France** | Canada, Louisiana, Caribbean, W. Africa | Fur trade, sugar (Saint-Domingue/Haiti) |
| **Netherlands** | Indonesia (Dutch East Indies), South Africa, Caribbean | Spice trade (nutmeg, cloves), banking/finance |

### The Triangle Trade
The **Atlantic triangular trade** connected three continents:
1. **Europe → Africa** — manufactured goods (textiles, guns, metal goods) traded for enslaved people
2. **Africa → Americas** — the **Middle Passage**: enslaved Africans transported to plantations
3. **Americas → Europe** — raw materials (sugar, tobacco, cotton, silver) shipped to European markets

> 🔑 **AP Connection:** The AP exam frequently asks about the **Middle Passage** — the horrific transatlantic crossing where 12–15% of enslaved Africans died en route due to disease, starvation, and abuse.
      \`
    },
    {
      id: 'whmariti1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes the "triangular trade" across the Atlantic?',
            options: [
              'Manufactured goods from Europe were traded for enslaved Africans, who were shipped to the Americas to produce raw materials exported back to Europe',
              'Raw materials flowed from Europe to Africa, manufactured goods from Africa to the Americas, and enslaved people from the Americas to Europe',
              'All three legs of the trade exclusively involved the exchange of agricultural products between continents',
              'The triangular trade operated primarily between the Americas, Asia, and Australia'
            ],
            correctAnswer: 0,
            explanation: 'The triangular trade followed a specific pattern: European manufactured goods (guns, textiles, metal) → Africa, where they were exchanged for enslaved people → Americas (Middle Passage), where enslaved labor produced raw materials (sugar, tobacco, cotton) → Europe for processing and consumption.'
          },
          {
            question: 'Why did the Dutch East India Company (VOC) become one of the most powerful organizations of the 17th century?',
            options: [
              'It was the world\\'s first multinational corporation, granted government powers including the right to wage war, negotiate treaties, and establish colonies',
              'It was a charitable religious organization funded by the Dutch Reformed Church to spread Christianity globally',
              'It exclusively controlled all European agriculture and had a monopoly on food production within the Netherlands',
              'It was a military alliance between the Netherlands and Spain that jointly administered colonial territories'
            ],
            correctAnswer: 0,
            explanation: 'The VOC (founded 1602) was the world\\'s first joint-stock company and first to issue stock. The Dutch government granted it quasi-governmental powers — it could raise armies, negotiate treaties, establish colonies, and even coin money. It monopolized the spice trade from the East Indies.'
          }
        ]
      }
    },
    {
      id: 'whmariti1-labor',
      type: 'text' as const,
      content: \`
## 📖 Colonial Labor Systems

European colonial economies depended on **coercive labor systems** to extract wealth:

| System | Description | Where Used |
|---|---|---|
| **Chattel slavery** | People treated as property; hereditary; race-based | Americas (plantations) |
| **Encomienda** | Spanish grants giving colonists control over indigenous labor in exchange for "protection" and Christian instruction | Spanish Americas |
| **Hacienda** | Large agricultural estates using debt peonage to bind indigenous workers | Spanish Americas (replaced encomienda) |
| **Mita** | Spanish adaptation of Inca forced labor system — indigenous communities required to provide workers for silver mines | Peru (Potosí) |
| **Indentured servitude** | Contractual labor (typically 4–7 years) in exchange for passage to the Americas | British colonies |
| **Plantation system** | Large-scale, single-crop farms (sugar, tobacco, cotton) dependent on enslaved labor | Caribbean, Brazil, U.S. South |

### The Atlantic Slave Trade by the Numbers
- **12.5 million** Africans were forcibly transported to the Americas (1500–1870)
- **~1.8 million** died during the Middle Passage
- **~40%** went to Brazil; **~40%** to the Caribbean; **~5%** to North America
- West African kingdoms like **Dahomey** and **Asante** participated by capturing and selling rivals

> 🔑 **AP Connection:** The AP exam tests comparisons between labor systems. Be ready to explain how chattel slavery differed from the encomienda, mita, and indentured servitude in terms of **duration, inheritance, and racial basis**.
      \`
    },
    {
      id: 'whmariti1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'How did chattel slavery in the Americas differ from the Spanish encomienda system?',
            options: [
              'Under chattel slavery, enslaved people were legally defined as property with a hereditary status based on race; the encomienda granted control over indigenous labor but did not make workers property',
              'The encomienda system was harsher than chattel slavery because it had no legal protections for laborers whatsoever',
              'Both systems were functionally identical — they used the same legal framework and applied to the same racial groups',
              'Chattel slavery was voluntary and temporary, while the encomienda was permanent and involuntary'
            ],
            correctAnswer: 0,
            explanation: 'Chattel slavery was unique in treating humans as inheritable property with a permanent, race-based status. The encomienda was a labor grant — the Spanish crown assigned indigenous people to colonists for labor, but workers were technically not "property" and the grant was not hereditary (though in practice it was brutal and exploitative).'
          },
          {
            question: 'Which destination received the largest proportion of enslaved Africans during the Atlantic slave trade?',
            options: [
              'The British colonies of North America (modern United States)',
              'Brazil and the Caribbean — primarily for sugar plantation labor',
              'Spanish silver mines in Mexico and Peru',
              'European factory cities for industrial manufacturing'
            ],
            correctAnswer: 1,
            explanation: 'Approximately 40% of all enslaved Africans went to Brazil and another 40% to the Caribbean — both driven by the labor demands of sugar production. Only about 5% went to North America. Sugar cultivation was extraordinarily labor-intensive and deadly, requiring constant importation of new workers.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-transoceanic-part1.ts',
  varName: 'whTransoceanicPart1Data',
  slug: 'wh-transoceanic',
  prefix: 'whtranso1',
  content: `export const whTransoceanicPart1Data = {
  topicSlug: 'wh-transoceanic',
  sections: [
    {
      id: 'whtranso1-intro',
      type: 'text' as const,
      content: \`
# 🚢 Transoceanic Interconnections

**Part 1 of 7 — Global Networks of Trade & Exchange**

---

| Section |
|---------|
| 📖 Oceanic Trade Networks |
| The Manila Galleon Trade |
| Cultural & Biological Exchange |
| Resistance & Adaptation |

> 🔑 **Key Concept:** The AP exam emphasizes how transoceanic voyages after 1450 created **the first truly global network of trade**, connecting the Americas, Europe, Africa, and Asia in ways that transformed all of them.
      \`
    },
    {
      id: 'whtranso1-networks',
      type: 'text' as const,
      content: \`
## 📖 Oceanic Trade Networks

By 1600, the world was connected by several major maritime trade routes:

### Key Routes

| Route | Goods Traded | Significance |
|---|---|---|
| **Atlantic Triangle** | Enslaved Africans, sugar, manufactured goods | Connected Europe, Africa, Americas; fueled plantation economies |
| **Manila Galleon** | Spanish American silver → China; Chinese silk/porcelain → Americas | First regular transpacific trade (1565–1815); connected the Americas directly to Asia |
| **Indian Ocean** | Spices, textiles, porcelain, coffee | Pre-existing network now joined by Portuguese, Dutch, and British traders |
| **Trans-Saharan** | Gold, salt, enslaved people | Continued but declined relative to Atlantic routes |

### The Manila Galleon Trade (1565–1815)
- Spanish ships carried **silver from Acapulco (Mexico) to Manila (Philippines)**
- In Manila, silver was exchanged for **Chinese silk, porcelain, spices, and lacquerware**
- This was the missing link that made trade truly **global** — connecting American mines → European markets → Asian producers

### How Silver Made the World Go Round
1. Spanish mines at **Potosí** (Bolivia) and **Zacatecas** (Mexico) produced massive quantities
2. Silver flowed to **Spain**, where it funded wars and imported goods
3. Silver continued to **China**, where the Ming dynasty required silver for tax payments (Single Whip Reform)
4. China exported manufactured goods (silk, porcelain) in return
5. This created a **global economic interdependence** — a crisis in silver production could ripple worldwide

> 🔑 **AP Connection:** The silver trade is a favorite AP topic because it illustrates how **a single commodity created global economic connections**. Be ready to trace silver's journey from mine to marketplace.
      \`
    },
    {
      id: 'whtranso1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'What was the primary function of the Manila Galleon trade route (1565–1815)?',
            options: [
              'It transported enslaved Africans from the Philippines to Spanish colonies in South America',
              'It carried Spanish American silver to Manila, where it was exchanged for Chinese silk, porcelain, and spices',
              'It connected British India with the Australian colonies for wool and textile trade',
              'It was a military supply route used by Spain to reinforce its Caribbean fortifications'
            ],
            correctAnswer: 1,
            explanation: 'The Manila Galleon made annual voyages between Acapulco and Manila from 1565 to 1815. Silver from Mexican and Peruvian mines was carried westward to the Philippines, where Chinese and Southeast Asian merchants exchanged it for luxury goods. This was the first regular transpacific trade route and made the global economy truly interconnected.'
          },
          {
            question: 'Why was China the ultimate destination for much of the silver mined in the Americas?',
            options: [
              'Chinese emperors collected silver as personal treasure and banned it from circulation in the economy',
              'The Ming dynasty required tax payments in silver, creating enormous demand that the domestic supply could not meet',
              'China had no silver deposits of its own and needed it exclusively for making jewelry and decorative objects',
              'European merchants were legally required by the Pope to send all precious metals to China'
            ],
            correctAnswer: 1,
            explanation: 'The Ming Single Whip Reform consolidated various taxes into a single payment required in silver. Since China\\'s domestic silver production was insufficient, Chinese merchants eagerly traded silk, porcelain, and tea for foreign silver — driving global demand that drew American silver eastward through European and Asian trade networks.'
          }
        ]
      }
    },
    {
      id: 'whtranso1-cultural',
      type: 'text' as const,
      content: \`
## 📖 Cultural & Biological Exchange

Transoceanic connections didn't just move goods — they transformed cultures, religions, and populations worldwide.

### Cultural Syncretism
- **Latin America** — Blending of Spanish Catholic, indigenous, and African traditions → examples: Día de los Muertos (combines Catholic All Saints' Day with Aztec death rituals), Afro-Brazilian Candomblé (African spiritual practices merged with Catholic saints)
- **Philippines** — Spanish Catholicism blended with indigenous and Malay traditions
- **Creole languages** developed in the Caribbean and Indian Ocean as blends of European and local languages

### Environmental & Biological Changes
- **New crops transformed diets worldwide**: potatoes and maize boosted European and Chinese populations; sugar and coffee became global commodities
- **Animals** — horses, cattle, and pigs transformed the Americas; no large domesticated animals had existed in the Western Hemisphere
- **Diseases** continued to devastate populations without prior exposure (smallpox in the Americas, later cholera in global pandemics)

### Resistance to Colonial Rule
Indigenous and enslaved peoples resisted colonial domination through multiple strategies:
- **Maroon communities** — escaped enslaved Africans formed independent settlements in Jamaica, Suriname, and Brazil
- **Pueblo Revolt (1680)** — Pueblo peoples in New Mexico expelled the Spanish for 12 years
- **Religious syncretism** itself was a form of resistance — preserving cultural identity under colonial pressure

> 🔑 **AP Connection:** **Syncretism** and **resistance** are key AP themes. Be ready to give specific examples of how colonized peoples adapted, resisted, and blended cultures rather than simply accepting colonial impositions.
      \`
    },
    {
      id: 'whtranso1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which of the following is the BEST example of cultural syncretism in colonial Latin America?',
            options: [
              'The Spanish crown\\'s establishment of the Inquisition to enforce Catholic orthodoxy in Mexico',
              'The celebration of Día de los Muertos, which blends Catholic All Saints\\' Day with pre-Columbian Aztec death rituals',
              'The construction of European-style cathedrals that completely replaced all indigenous temples',
              'The Spanish encomienda system that organized indigenous labor for mining operations'
            ],
            correctAnswer: 1,
            explanation: 'Día de los Muertos is a textbook example of syncretism — it combines the Catholic observance of All Saints\\' Day with Aztec beliefs about death and ancestor veneration. The result is a uniquely Mexican tradition that is neither purely Catholic nor purely indigenous.'
          },
          {
            question: 'How did Maroon communities in the Americas represent resistance to colonial rule?',
            options: [
              'They were communities of European settlers who rejected their home country\\'s authority',
              'They were communities of escaped enslaved Africans who established independent settlements beyond colonial control',
              'They were indigenous trading posts that exclusively served French colonial merchants',
              'They were religious orders of monks who lived in isolation from colonial society by choice'
            ],
            correctAnswer: 1,
            explanation: 'Maroon communities (from the Spanish "cimarrón" meaning wild/untamed) were formed by enslaved Africans who escaped plantations and created self-governing communities in remote areas. Major examples include Palmares in Brazil and the Jamaican Maroons, who fought and won treaties with the British.'
          }
        ]
      }
    }
  ]
};\n`
},
{
  file: 'wh-enlightenment-political-revolutions-part1.ts',
  varName: 'whEnlightenmentPoliticalRevolutionsPart1Data',
  slug: 'wh-enlightenment-political-revolutions',
  prefix: 'whenligh1',
  content: `export const whEnlightenmentPoliticalRevolutionsPart1Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whenligh1-intro',
      type: 'text' as const,
      content: \`
# 💡 The Enlightenment & Political Revolutions

**Part 1 of 7 — Ideas That Changed the World**

---

| Section |
|---------|
| 📖 Enlightenment Thinkers & Ideas |
| The American Revolution |
| The French Revolution |
| The Haitian Revolution |

> 🔑 **Key Concept:** The AP exam tests how **Enlightenment ideas** (natural rights, social contract, popular sovereignty) inspired political revolutions across the Atlantic world — and how those revolutions produced different outcomes depending on local circumstances.
      \`
    },
    {
      id: 'whenligh1-ideas',
      type: 'text' as const,
      content: \`
## 📖 Enlightenment Thinkers & Key Ideas

The Enlightenment (c. 1650–1800) was an intellectual movement that applied **reason and scientific thinking** to questions about government, society, and human rights.

### Key Thinkers

| Thinker | Key Ideas | Influence |
|---|---|---|
| **John Locke** | Natural rights (life, liberty, property); government by consent; right to revolution | U.S. Declaration of Independence |
| **Jean-Jacques Rousseau** | Social contract; popular sovereignty; "general will" of the people | French Revolution |
| **Montesquieu** | Separation of powers (executive, legislative, judicial) | U.S. Constitution |
| **Voltaire** | Freedom of speech and religion; criticism of the Catholic Church | Bill of Rights / French Declaration |
| **Mary Wollstonecraft** | Women's equality; education for women | Early feminist movement |
| **Adam Smith** | Free-market economics; *The Wealth of Nations* (1776); critique of mercantilism | Economic liberalism |

### Core Enlightenment Principles
1. **Reason** — human reason, not tradition or divine right, should guide government
2. **Natural rights** — all humans possess inherent rights that governments cannot take away
3. **Social contract** — government derives authority from the consent of the governed
4. **Popular sovereignty** — ultimate political authority belongs to the people
5. **Progress** — society can be improved through rational reform

> 🔑 **AP Connection:** You must connect **specific thinkers to specific revolutions**. Locke → American Revolution; Rousseau → French Revolution; Montesquieu → U.S. Constitution's separation of powers. The AP exam loves asking which thinker influenced which event.
      \`
    },
    {
      id: 'whenligh1-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Which Enlightenment thinker\\'s ideas about natural rights and the right to revolution most directly influenced Thomas Jefferson\\'s Declaration of Independence?',
            options: [
              'Voltaire, who argued for religious tolerance and free speech',
              'John Locke, who argued that people have natural rights to life, liberty, and property, and may overthrow governments that violate those rights',
              'Adam Smith, who advocated for free-market economics and limited government intervention',
              'Montesquieu, who proposed the separation of governmental powers into three branches'
            ],
            correctAnswer: 1,
            explanation: 'Jefferson\\'s Declaration of Independence closely mirrors Locke\\'s Second Treatise of Government — Locke argued that humans have natural rights (life, liberty, property) and that government derives authority from consent of the governed. When government violates those rights, the people have a right to revolution. Jefferson changed "property" to "pursuit of happiness."'
          },
          {
            question: 'Which Enlightenment principle BEST describes the idea that government authority comes from the people rather than from God or hereditary monarchy?',
            options: [
              'Mercantilism — the belief that economic policy should maximize exports over imports',
              'Popular sovereignty — the principle that political power originates from and belongs to the people',
              'Divine right — the idea that monarchs rule by God\\'s direct appointment and are accountable only to God',
              'Absolutism — the theory that a single ruler should hold unlimited and unchecked governmental power'
            ],
            correctAnswer: 1,
            explanation: 'Popular sovereignty, championed by Rousseau and Locke, holds that government\\'s legitimacy comes from the consent of the governed — not from divine appointment or hereditary succession. This idea directly challenged the divine right of kings and became the philosophical foundation for democratic revolutions.'
          }
        ]
      }
    },
    {
      id: 'whenligh1-revolutions',
      type: 'text' as const,
      content: \`
## 📖 The Atlantic Revolutions

Enlightenment ideas fueled a wave of revolutions across the Atlantic world, each with distinct causes and outcomes:

### American Revolution (1775–1783)
- **Cause:** British taxation without colonial representation; Enlightenment ideas of self-governance
- **Key document:** Declaration of Independence (1776) — "all men are created equal" (echoing Locke)
- **Outcome:** New republic with a Constitution featuring separation of powers (Montesquieu), but limited suffrage (white, property-owning men)

### French Revolution (1789–1799)
- **Cause:** Financial crisis, social inequality (Three Estates), Enlightenment ideals
- **Key document:** Declaration of the Rights of Man and Citizen (1789) — liberty, equality, fraternity
- **Stages:** Moderate reform → Radical phase (Reign of Terror under Robespierre, ~17,000 executed) → Napoleon's rise (1799)
- **Outcome:** Abolished feudalism and monarchy (temporarily), but led to dictatorship under Napoleon

### Haitian Revolution (1791–1804)
- **Cause:** Enslaved majority (500,000+) inspired by French revolutionary ideals; brutal sugar plantation conditions
- **Leader:** **Toussaint Louverture** (formerly enslaved) and later Jean-Jacques Dessalines
- **Outcome:** **Only successful large-scale slave revolution in history**; Haiti became the first Black republic and second independent nation in the Western Hemisphere
- **Significance:** Terrified slave-holding societies worldwide; Napoleon's failure in Haiti led him to sell Louisiana to the U.S.

> 🔑 **AP Connection:** The AP exam tests **comparisons across these revolutions**. Key question: Why did the American Revolution produce a relatively stable republic while the French Revolution produced the Reign of Terror? (Answer: the U.S. had existing self-governing institutions; France had deeper social inequality and no democratic tradition.)
      \`
    },
    {
      id: 'whenligh1-quiz2',
      type: 'multiple-choice' as const,
      content: \`**Check Your Understanding** 🎯\`,
      exercise: {
        questions: [
          {
            question: 'Why is the Haitian Revolution (1791–1804) considered unique among Atlantic world revolutions?',
            options: [
              'It was the only revolution fought exclusively between two European colonial powers',
              'It was the only successful large-scale revolution led by enslaved people, resulting in the abolition of slavery and the creation of an independent Black republic',
              'It resulted in the establishment of a constitutional monarchy that lasted for over 200 years',
              'It was the only revolution that did not involve any influence from Enlightenment ideas or philosophy'
            ],
            correctAnswer: 1,
            explanation: 'The Haitian Revolution is unique because it was the only successful revolution where enslaved people overthrew their enslavers and established an independent nation. Led by Toussaint Louverture and completed by Dessalines, Haiti declared independence in 1804 — becoming the first Black republic and striking fear into slave-holding societies globally.'
          },
          {
            question: 'A key difference between the American and French Revolutions was that:',
            options: [
              'The American Revolution was influenced by Enlightenment ideas while the French Revolution was not',
              'The American Revolution built on existing colonial self-governance traditions, while the French Revolution attempted to completely restructure a society with deep class divisions and no democratic tradition',
              'The French Revolution succeeded in creating lasting democratic institutions immediately, while the American Revolution failed',
              'Only the French Revolution involved armed conflict; the American Revolution was entirely peaceful'
            ],
            correctAnswer: 1,
            explanation: 'American colonists had over 150 years of experience with self-governing assemblies, making the transition to a republic more manageable. France had an absolute monarchy, rigid social hierarchy (Three Estates), and massive inequality — making revolutionary change far more disruptive and violent (Reign of Terror). Both were influenced by Enlightenment ideas.'
          }
        ]
      }
    }
  ]
};\n`
}
];

// Write files
for (const f of files) {
  const filePath = path.join(dir, f.file);
  fs.writeFileSync(filePath, f.content);
  console.log(`✅ Wrote ${f.file}`);
}
console.log(`\nDone: ${files.length} files written`);
