#!/usr/bin/env python3
"""Write wh-silk-roads-mongols parts 2-7 with real AP content."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

w('wh-silk-roads-mongols-part2.ts', '''export const whSilkRoadsMongolsPart2Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm2-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 2 of 7 — The Mongol Empire: Rise & Expansion**

---

| Section |
|---------|
| 📖 Genghis Khan & Mongol Military Methods |
| The Structure of the Mongol Empire |
| Conquests: China, Persia, Europe |
| 📌 Why the Mongols Succeeded |

> 🔑 **Key Concept:** The Mongol Empire (c. 1206–1368) was the largest contiguous land empire in world history. AP questions ask you to explain HOW the Mongols conquered so much so quickly, and WHY their empire had contradictory effects — both destroying and connecting Eurasian civilizations.
      \`
    },
    {
      id: 'whsrm2-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The primary military advantage that allowed the Mongols to conquer vast territories so rapidly was:',
            options: [
              'Superior cavalry tactics combining extreme mobility, composite bow technology, and coordinated large-scale maneuver warfare that could defeat larger sedentary armies unable to match Mongol speed and coordination',
              'Possession of advanced siege weapons unknown to their enemies',
              'Numerical superiority — Mongol armies were always larger than their opponents',
              'Religious motivation that made Mongol soldiers willing to die in suicidal charges'
            ],
            correctAnswer: 0,
            explanation: 'Mongol military success was primarily technological and tactical: the composite bow (accurate from horseback at speed), extreme mobility (each warrior maintained multiple horses), and sophisticated coordination of large armies over vast distances. They also learned siege warfare from conquered peoples (Chinese engineers taught them to use catapults) — adapting their strengths to overcome their limitations.'
          },
          {
            question: 'Genghis Khan\'s unification of Mongol tribes (1206) was significant primarily because:',
            options: [
              'It ended destructive inter-tribal warfare and channeled Mongol military capacity toward external conquest, transforming a fragmented nomadic people into a unified military force under a single commander',
              'It converted all Mongols to Islam before their conquests began',
              'It established a permanent capital city as the center of Mongol governance',
              'It ended Mongol nomadism and created a sedentary agricultural empire'
            ],
            correctAnswer: 0,
            explanation: 'Before Temujin (Genghis Khan) unified the Mongol tribes, inter-tribal raiding was constant and destructive. Unification redirected this military energy outward, creating the human tide that conquered from China to Poland within a generation. The kurultai (tribal council) system became the Mongol Empire\'s political structure.'
          }
        ]
      }
    },
    {
      id: 'whsrm2-content',
      type: 'text' as const,
      content: \`
## 📖 The Mongol Empire: Rise and Expansion

> **Genghis Khan and Mongol Military Excellence**

Temujin (later Genghis Khan, "Universal Ruler") unified Mongol tribes by 1206 and launched the greatest military expansion in world history:

| Military Advantage | How It Worked |
|-------------------|---------------|
| **Composite bow** | Powerful, accurate from horseback at a gallop; outranged infantry bows |
| **Multiple horses** | Each warrior maintained 3–5 horses; could cover 100+ miles per day |
| **Coordinated tactics** | Feigned retreats lured enemy cavalry into ambushes; encirclement (tulugma) destroyed armies |
| **Psychological warfare** | Populations that surrendered were often spared; those that resisted were massacred — creating incentive to surrender |
| **Adaptive technology** | Learned siege warfare from Chinese engineers; cannons and catapults used against walled cities |

> **The Empire's Structure**

Genghis Khan divided his empire among his sons (ulus system):

- **Yuan Dynasty (China):** Kublai Khan — grandson; governed China; patronized trade (Marco Polo's employer)
- **Il-Khanate (Persia/Iraq):** Hulagu Khan — sacked Baghdad 1258; later converted to Islam
- **Chagatai Khanate (Central Asia):** Territory between China and Persia; often in conflict with neighbors
- **Golden Horde (Russia/Steppe):** Batu Khan — invaded Poland and Hungary; ruled Russian principalities for 200+ years

> **The Scale of Conquest**

Within 50 years of Genghis Khan's 1206 coronation, the Mongols had:

- Conquered northern China (Jin Dynasty, 1234) and all of China (Southern Song, 1279)
- Destroyed the Islamic world's center (Baghdad, 1258)
- Invaded Poland and Hungary (1241) — stopped only by Ögedei Khan's death
- Conquered most of Persia, Central Asia, and Korea

The human cost was staggering: estimates suggest the Mongol conquests killed 30–40 million people (10%+ of global population), with some regions of Persia and China losing 50–75% of their populations.

> **AP Comparison Anchor**

- **Mongol military vs. other armies:** Mongol mobility exceeded any sedentary military; only nomadic peoples (Mamluks at Ain Jalut, Vietnamese guerrillas) successfully resisted
- **Conquest vs. governance:** The Mongols were brilliant conquerors but struggled with governance — they eventually adopted the administrative systems of conquered peoples (Chinese, Persian)
      \`,
    },
    {
      id: 'whsrm2-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Mongols\' effective use of psychological warfare (massacring cities that resisted, sparing those that surrendered) demonstrates:',
            options: [
              'A rational military strategy that reduced the cost of conquest by creating powerful incentives for voluntary surrender, dramatically reducing the number of sieges and battles the Mongols needed to fight',
              'That the Mongols had no interest in governing conquered territories',
              'That the Mongols were motivated purely by religious hatred of sedentary peoples',
              'That psychological warfare is always ineffective in military campaigns'
            ],
            correctAnswer: 0,
            explanation: 'The Mongol terror system was coldly rational: massacre (like at Samarkand or Nishapur) created such devastating reputations that subsequent cities often surrendered without a fight. This reduced the Mongol army\'s casualties and accelerated conquest. AP prompts about Mongol success must include both military technology AND psychological strategy.'
          },
          {
            question: 'The ulus system (dividing the empire among Genghis Khan\'s sons) had what long-term consequence?',
            options: [
              'It created separate, often competing khanates that gradually diverged — with some converting to Islam, others to Buddhism, others remaining shamanist — accelerating the empire\'s fragmentation',
              'It created a stable unified empire that lasted for centuries without internal conflict',
              'It gave Genghis Khan\'s daughters control of the most important territories',
              'It ensured the empire would remain unified under a single ruler forever'
            ],
            correctAnswer: 0,
            explanation: 'The ulus division planted the seeds of fragmentation: the khanates competed with each other (Golden Horde vs. Il-Khanate fought for control of Persia), adopted different religions (Il-Khanate → Islam; Yuan → Buddhism/Confucianism; Golden Horde → Islam), and gradually developed distinct identities. The Mongol Empire never had a stable successor to Genghis Khan\'s unified authority.'
          },
          {
            question: 'The Mongol conquests\' demographic impact — reducing some regions\' populations by 50-75% — is most relevant to AP World History because it:',
            options: [
              'Demonstrates how military violence can create long-term economic and civilizational disruption, reducing agricultural productivity, destroying urban commercial centers, and creating power vacuums that reshaped political maps for centuries',
              'Is irrelevant to AP World History since population data is unreliable',
              'Shows that the Mongol Empire was ultimately a positive force for human development',
              'Only affected small, isolated regions with no broader historical significance'
            ],
            correctAnswer: 0,
            explanation: 'Population collapse has cascading effects: fewer farmers → less agricultural output → less taxable wealth → weakened states; fewer urban artisans → less commercial activity → slower economic recovery; destroyed irrigation systems → abandonment of formerly productive land. Persia\'s population did not recover to pre-Mongol levels until the 19th century in some regions.'
          }
        ]
      }
    },
    {
      id: 'whsrm2-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Mongol concept to its correct description.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Mongol military tactic of pretending to retreat to lure enemy cavalry into an ambush was the ___',
            options: ['Feigned retreat', 'Tulugma', 'Composite bow technique', 'Siege warfare']
          },
          {
            label: 'The Mongol ruler who conquered China, established the Yuan Dynasty, and employed Marco Polo was ___',
            options: ['Kublai Khan', 'Genghis Khan', 'Hulagu Khan', 'Batu Khan']
          },
          {
            label: 'The system of dividing the Mongol Empire among Genghis Khan\'s sons, creating separate khanates, was the ___',
            options: ['Ulus system', 'Kurultai', 'Pax Mongolica', 'Yasa']
          }
        ],
        correctAnswers: ['Feigned retreat', 'Kublai Khan', 'Ulus system'],
        hint1: 'Classic Mongol deceptive maneuver — retreating to draw enemies into a trap',
        hint2: 'Grandson of Genghis — ruled China; Marco Polo visited his court',
        hint3: 'Division into four khanates — seeds of fragmentation',
        explanation: 'Feigned retreats exploited enemies\' tendency to pursue, drawing disciplined cavalry formations into encirclements. Kublai Khan\'s Yuan Dynasty represented the most stable and commercially open of the khanates. The ulus system\'s division created the conditions for the eventual fragmentation of Mongol unity.'
      }
    },
    {
      id: 'whsrm2-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks you to evaluate the claim that "Mongol military success was primarily the result of superior weapons technology." How do you most effectively challenge this claim?',
            options: [
              'While the composite bow provided real advantage, the Mongols\' most decisive edge was tactical — coordinated mobility, feigned retreats, psychological warfare, and adaptive learning (adopting Chinese siege technology) — demonstrating that military success depends more on organizational excellence than weapon superiority alone',
              'By agreeing that weapons technology was the only relevant factor',
              'By arguing the Mongols had no weapons advantage of any kind',
              'By arguing that psychological factors are never relevant to military success'
            ],
            correctAnswer: 0,
            explanation: 'Effective historical argument requires engaging with partial truths: the composite bow WAS an advantage, but it alone cannot explain conquests across 20+ million square miles. Organizational factors — unity, coordination, adaptability — explain the broader success. AP rewards "while [X is true], [Y provides a more complete explanation" argument structures.'
          },
          {
            question: 'What does the Mongols\' adoption of Chinese administrative systems in the Yuan Dynasty best illustrate?',
            options: [
              'How nomadic conquerors who lacked pre-existing administrative experience were compelled to adopt the bureaucratic systems of more institutionally sophisticated sedentary civilizations to govern large settled populations',
              'That Chinese administrative systems were inferior to Mongol systems',
              'That the Mongols had already developed sophisticated bureaucracies before conquering China',
              'That the Yuan Dynasty rejected all aspects of Chinese governance'
            ],
            correctAnswer: 0,
            explanation: 'The Mongols were outstanding conquerors but faced governance challenges: how do nomadic pastoralists tax, organize, and govern hundreds of millions of Chinese peasants? Answer: adopt Chinese administrative frameworks. This pattern — conquerors adopting conquered peoples\' administrative systems — appears throughout AP World History (Romans in Greece, Umayyads in Persia, Manchu in China).'
          }
        ]
      }
    }
  ]
}
''')

w('wh-silk-roads-mongols-part3.ts', '''export const whSilkRoadsMongolsPart3Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm3-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 3 of 7 — The Pax Mongolica & Trade**

---

| Section |
|---------|
| 📖 The Pax Mongolica: What It Was |
| Trade, Diplomacy & Cultural Exchange |
| Marco Polo, Ibn Battuta & the Connected World |
| 📌 The Plague: Connectivity\'s Dark Side |

> 🔑 **Key Concept:** The Pax Mongolica ("Mongol Peace") created unprecedented Eurasian connectivity — enabling commerce, diplomatic missions, and cultural exchange on a scale not seen before or after. But this same connectivity transmitted the Black Death. AP asks you to evaluate BOTH dimensions of Mongol-created connectivity.
      \`
    },
    {
      id: 'whsrm3-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Pax Mongolica contributed to increased Silk Road trade primarily by:',
            options: [
              'Unifying vast territories under a single political authority that enforced laws protecting merchants and caravans, reducing the dangers of robbery and predatory taxation that fragmented political authority had previously imposed',
              'Building a network of paved roads connecting China to the Mediterranean',
              'Eliminating all tolls and taxes on merchants crossing Mongol territory',
              'Converting all merchants to Mongol religious practices, creating shared identity'
            ],
            correctAnswer: 0,
            explanation: 'The Pax Mongolica worked through political unification: by eliminating competing states that had imposed conflicting tolls and unpredictable security, the Mongol Empire created a zone where merchants could travel with relatively reliable protection (the yam postal system, Mongol patrols on main routes). This reduced transaction costs and encouraged long-distance trade.'
          },
          {
            question: 'The Black Death\'s spread via the Silk Road routes controlled by the Mongol Empire demonstrates:',
            options: [
              'That increased connectivity has inherent risks — the same networks that facilitated commerce, diplomatic missions, and cultural exchange also created pathways for catastrophic disease transmission',
              'That the Mongols deliberately spread plague as a biological weapon',
              'That the Black Death only affected Europe and not the Islamic or Chinese worlds',
              'That plague was unrelated to trade routes and spread only through local contact'
            ],
            correctAnswer: 0,
            explanation: 'The Black Death (bubonic plague caused by Yersinia pestis) moved along Mongol trade routes from Central Asian rodent reservoirs to Crimea (via Mongol sieges), then by ship to Sicily, then across Europe. China and the Islamic world were also devastated. The plague\'s spread is a textbook example of connectivity\'s unintended consequences — the networks that enabled commerce also enabled catastrophe.'
          }
        ]
      }
    },
    {
      id: 'whsrm3-content',
      type: 'text' as const,
      content: \`
## 📖 Pax Mongolica: Connectivity and Its Consequences

> **What the Pax Mongolica Created**

The Mongol Empire's political unification of Eurasia (c. 1240–1340) enabled:

| Feature | Details |
|---------|---------|
| **Yam postal system** | Relay stations every 25 miles across the empire; messages crossed from China to Persia in weeks |
| **Merchant protection** | Mongol law (*Yasa*) prohibited robbery of merchants; caravans traveled with imperial passes (*paiza*) |
| **Diplomatic missions** | European powers sent ambassadors to Mongol courts (William of Rubruck, 1253); Mongol khans exchanged gifts with Islamic and European rulers |
| **Reduced political fragmentation** | Merchants crossed fewer political borders; fewer competing tolls and taxes |

> **Marco Polo and East-West Contact**

Marco Polo's travels (c. 1271–1295) exemplify Pax Mongolica connectivity:

- Venetian merchant family traveled from Italy through Central Asia to China
- Served at Kublai Khan's court for 17 years
- His account (dictated in a Genoa prison) introduced Europeans to Chinese civilization: paper money, coal, vast cities, Chinese silk production
- His descriptions were so different from European experience that many readers didn't believe them — though modern scholarship has largely vindicated his account

> **The Black Death: Connectivity's Price**

The Mongol trade routes became plague highways:

- **Origin:** Central Asian rodent populations harbored *Yersinia pestis* (bubonic plague bacteria)
- **Trigger:** Mongol military movements c. 1340s disturbed rodent populations, spreading plague to humans
- **Spread pathway:** Mongol armies → Caffa (Crimean trading post, 1346, Mongol catapulted plague bodies into the city) → Genoese ships → Sicily → Europe
- **Scale:** 30–50% of Europe's population dead by 1353; similar death rates in the Middle East; China suffered massive plague mortality c. 1330s–1350s
- **Social consequences:** Labor shortages weakened feudalism; religious authority questioned; Jewish communities scapegoated and massacred; long-term economic disruption

> **AP Comparison Anchor**

- **Pax Mongolica benefits:** Unprecedented Eurasian commerce, diplomacy, and cultural exchange; Chinese technologies (printing, gunpowder, compass) reached the Islamic world and Europe
- **Pax Mongolica costs:** Black Death killed more people than any pandemic in history; long-term demographic and economic disruption
- **AP complexity:** The same network cannot be reduced to "good" or "bad" — it was both simultaneously
      \`,
    },
    {
      id: 'whsrm3-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Mongol yam (postal relay) system\'s primary significance for Eurasian commerce was:',
            options: [
              'It created reliable, fast communication infrastructure across the entire empire, allowing merchants and rulers to coordinate commercial activities and diplomatic decisions across thousands of miles within weeks rather than months',
              'It exclusively served military purposes with no commercial applications',
              'It was slower than alternative communication methods of the period',
              'It was only used by Mongol officials and not accessible to foreign merchants'
            ],
            correctAnswer: 0,
            explanation: 'The yam system was commercial infrastructure as much as military: merchants with imperial passes (paiza) could use relay stations and receive fresh horses. Fast communication reduced commercial risk (you could send price information ahead; respond quickly to market changes), making long-distance trade more rational and profitable.'
          },
          {
            question: 'Marco Polo\'s account of China is significant for AP World History because it:',
            options: [
              'Demonstrates the unprecedented east-west contact enabled by the Pax Mongolica, providing Europeans with their most detailed description of Chinese civilization (cities, paper money, coal, silk), and stimulating European commercial interest in Asia that eventually drove the Age of Exploration',
              'Was entirely fictional and has no historical value',
              'Was the first account of China ever written by a non-Chinese author',
              'Described China as economically inferior to Europe, discouraging future contact'
            ],
            correctAnswer: 0,
            explanation: 'Marco Polo\'s significance goes beyond the journey itself: his account circulated widely in Europe and demonstrated the extraordinary wealth of Asian civilizations (Kublai Khan\'s court dwarfed anything in Europe). This commercial intelligence stimulated European desire for direct access to Asian luxury goods — a motivation that eventually drove Portuguese and Spanish exploration.'
          },
          {
            question: 'How did the Black Death\'s spread demonstrate the unintended consequences of Mongol-created connectivity?',
            options: [
              'The same Silk Road networks that facilitated unprecedented commerce and cultural exchange also created the transmission pathways through which plague spread from Central Asian animal reservoirs to densely populated Eurasian cities, killing 30-50% of European and Middle Eastern populations',
              'The Mongols deliberately engineered the plague as a weapon against sedentary civilizations',
              'The Black Death only spread along sea routes unconnected to Mongol land trade networks',
              'Plague spread was unrelated to trade routes and was caused by poor hygiene alone'
            ],
            correctAnswer: 0,
            explanation: 'The plague transmission pathway through Mongol territories is well-documented: Central Asian rodents (the natural reservoir) → Mongol military movements → Black Sea trading posts (Caffa, 1346) → Genoese ships → Mediterranean ports. The Pax Mongolica\'s greatest achievement (connectivity) and its greatest catastrophe (plague transmission) were two sides of the same coin.'
          }
        ]
      }
    },
    {
      id: 'whsrm3-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Pax Mongolica feature to its correct description.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Mongol relay system of stations placed every 25 miles that enabled rapid communication across the empire was the ___',
            options: ['Yam system', 'Paiza system', 'Kurultai', 'Ulus network']
          },
          {
            label: 'The Venetian merchant whose account of Kublai Khan\'s China demonstrated the extraordinary east-west connectivity of the Pax Mongolica was ___',
            options: ['Marco Polo', 'Ibn Battuta', 'Genghis Khan', 'Rashid al-Din']
          },
          {
            label: 'The pandemic that spread along Mongol trade routes from Central Asia to devastate Europe and the Middle East in 1347-1353 was the ___',
            options: ['Black Death', 'Antonine Plague', 'Justinianic Plague', 'Spanish Flu']
          }
        ],
        correctAnswers: ['Yam system', 'Marco Polo', 'Black Death'],
        hint1: 'Postal relay stations — communication and merchant infrastructure',
        hint2: 'Venetian merchant at Kublai Khan\'s court',
        hint3: 'Bubonic plague — killed 30-50% of European population',
        explanation: 'The yam system created the communication backbone of the Pax Mongolica. Marco Polo\'s 17 years at Kublai Khan\'s court provided Europe with its first detailed account of Chinese civilization. The Black Death\'s trajectory from Central Asia to Europe via Mongol trade networks illustrates the paradox of connectivity: the same infrastructure that enabled unprecedented commerce enabled unprecedented pandemic.'
      }
    },
    {
      id: 'whsrm3-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks: "Evaluate the overall impact of the Pax Mongolica on Afro-Eurasian civilizations." What is the strongest thesis?',
            options: [
              'The Pax Mongolica had deeply contradictory impacts: while it created unprecedented Eurasian commercial and cultural connectivity (enabling Marco Polo\'s travels, Chinese technology transfer to Europe, and increased Silk Road commerce), it simultaneously facilitated the Black Death\'s catastrophic spread, demonstrating that increased connectivity produces both opportunities and existential risks',
              'The Pax Mongolica was entirely beneficial for all Afro-Eurasian civilizations',
              'The Pax Mongolica was entirely destructive and had no beneficial effects',
              'The Pax Mongolica only affected China and had no impact on the Islamic world or Europe'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns maximum AP rubric credit: it acknowledges both positive (commerce, cultural exchange) and negative (plague) dimensions, uses specific evidence (Marco Polo, Black Death), articulates a broader principle (connectivity = opportunity + risk), and is historically defensible. It sets up a complexity-earning essay from the thesis itself.'
          },
          {
            question: 'The Black Death\'s social consequences in Europe (weakened feudalism, religious doubt, scapegoating of Jews) demonstrate which AP principle?',
            options: [
              'Demographic catastrophes can trigger profound social, economic, and religious changes by disrupting established relationships (lords needing scarce peasant labor), challenging institutional authority (churches couldn\'t explain or stop the plague), and creating conditions for scapegoating minority communities',
              'Disease never has social or political consequences',
              'The Black Death only affected peasants and had no impact on noble or church institutions',
              'Religious institutions always grow stronger in response to pandemics'
            ],
            correctAnswer: 0,
            explanation: 'The Black Death\'s social consequences are a model AP example of how environmental/biological factors drive social change: (1) peasant labor scarcity → serfs gained negotiating power → serfdom weakened; (2) church prayers didn\'t stop deaths → some believers lost faith; (3) fear and grief created scapegoating impulses → Jewish massacres across Europe. Each consequence follows a causal chain from the demographic event.'
          }
        ]
      }
    }
  ]
}
''')

w('wh-silk-roads-mongols-part4.ts', '''export const whSilkRoadsMongolsPart4Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm4-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 4 of 7 — Mongol Khanates & Cultural Synthesis**

---

| Section |
|---------|
| 📖 The Four Khanates |
| Mongol Rule in China: The Yuan Dynasty |
| Mongols and Islam: Il-Khanate & Golden Horde |
| 📌 Cultural Absorption & Synthesis |

> 🔑 **Key Concept:** The Mongol Empire fragmented into four khanates after 1260. Each khanate adapted to its local context — the Yuan adopted Chinese governance, the Il-Khanate converted to Islam, the Golden Horde converted to Islam and ruled Russia. This cultural absorption demonstrates how nomadic conquerors were transformed by the civilizations they conquered.
      \`
    },
    {
      id: 'whsrm4-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Yuan Dynasty (Mongol China) is distinctive in Chinese history primarily because:',
            options: [
              'Kublai Khan governed China through a modified Chinese administrative system while maintaining Mongol cultural privileges, creating a hybrid government that simultaneously used Chinese bureaucratic expertise and maintained Mongol ethnic stratification',
              'It completely replaced Chinese culture with Mongol nomadic culture permanently',
              'It was the only dynasty in Chinese history led by non-Chinese rulers',
              'It abolished the civil service examination system and replaced it with hereditary Mongol rule at all levels'
            ],
            correctAnswer: 0,
            explanation: 'Yuan governance was a hybrid: Chinese administrators ran day-to-day bureaucracy (essential — Mongols couldn\'t govern 100 million Chinese without Chinese expertise), but Mongols held the highest positions and were exempt from Chinese laws. The exam system was suspended for much of the Yuan period, replaced by ethnic appointment at the top. This mix of adoption and dominance is a key AP governance pattern.'
          },
          {
            question: 'The Golden Horde\'s rule over Russian principalities (c. 1240–1480) most directly shaped Russian political development by:',
            options: [
              'Establishing a precedent for centralized autocratic rule that influenced the later development of the Muscovite principality\'s strong tsarist governance — a long-term political legacy of Mongol domination',
              'Immediately converting all Russians to Islam',
              'Creating a democratic system of governance in Russia that persisted for centuries',
              'Having no long-term impact on Russian political culture'
            ],
            correctAnswer: 0,
            explanation: 'Historians debate how much Mongol rule shaped Russian political culture, but the AP framework recognizes the long-term authoritarian tendency that emerged in Muscovite Russia and later tsarism. Russian princes collected taxes for the Golden Horde, learning centralized revenue extraction; the Mongol model of autocratic rule left imprints on Russian political consciousness.'
          }
        ]
      }
    },
    {
      id: 'whsrm4-content',
      type: 'text' as const,
      content: \`
## 📖 The Four Khanates & Cultural Synthesis

> **The Four Khanates After 1260**

| Khanate | Territory | Religion | Notable Feature |
|---------|-----------|----------|----------------|
| **Yuan Dynasty** | China, Korea, parts of Southeast Asia | Buddhism/Confucianism | Governed China through modified Chinese administration |
| **Il-Khanate** | Persia, Iraq, Anatolia | Converted to Islam (1295) | Patronized Persian art; ruled until 1335 |
| **Chagatai Khanate** | Central Asia (modern Kazakhstan, Uzbekistan) | Islam (gradual) | Controlled Silk Road heartland |
| **Golden Horde** | Russia, Western Steppe | Islam (c. 1313) | Ruled Russian principalities; capital at Sarai |

> **Yuan Dynasty: Mongols in China**

Kublai Khan's governance of China shows Mongol adaptation:

- **Administrative adoption:** Chinese bureaucracy retained; but Mongols held top positions; foreign advisors (including Marco Polo) given prominent roles
- **Ethnic stratification:** Mongols → Central Asians/Muslims → Northern Chinese → Southern Chinese — in descending order of privilege
- **Commerce:** Grand Canal extended; paper money used extensively; promoted international trade
- **Cultural patronage:** Chinese theater, painting flourished; Kublai patronized Buddhism and Tibetan lamas
- **Exam suspension:** Confucian civil service exams largely suspended → scholar-gentry class resentful → contributed to Yuan collapse (1368)

> **Il-Khanate: The Conversion of Conquerors**

The Il-Khanate\'s evolution from Islamic destroyers to Muslim rulers:

- 1258: Hulagu destroys Baghdad; kills Caliph; openly favors Christianity (his wife was Nestorian Christian)
- 1260: Ain Jalut defeat by Mamluks — first significant Mongol military loss
- 1295: Ghazan Khan converts to Islam; makes it state religion; adopts Persian administrative culture
- Persian miniature painting flourishes under Il-Khanate patronage
- Rashid al-Din writes *Jami\' al-Tawarikh* — first world history by a non-European, under Mongol patronage

> **AP Comparison Anchor**

- **Yuan vs. Il-Khanate:** Both khanates adapted to local civilizations; Yuan adopted Chinese bureaucracy while maintaining Mongol privilege; Il-Khanate converted to Islam and adopted Persian culture more thoroughly
- **Pattern:** Nomadic conquerors + institutionally sophisticated sedentary civilizations = eventual cultural absorption of conquerors; pattern repeats throughout AP World History
      \`,
    },
    {
      id: 'whsrm4-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Yuan Dynasty\'s suspension of Confucian civil service exams most directly affected which social group?',
            options: [
              'The Chinese scholar-gentry class, whose path to government office was blocked, creating deep resentment that contributed to anti-Mongol sentiment and eventual support for the rebel movement that overthrew the Yuan in 1368',
              'The Mongol military class, who depended on the exams for promotions',
              'Chinese peasants, who had used the exams to avoid agricultural labor',
              'Foreign merchants, who needed exam scores to trade in China'
            ],
            correctAnswer: 0,
            explanation: 'The exam system was the pathway to power for China\'s educated elite. Suspending it blocked the scholar-gentry from the governance roles they expected — while Mongols and foreigners (Central Asians, Marco Polo) received preference. This systematic exclusion was a key source of Chinese elite resentment of Mongol rule, contributing to the rebellions that ended the Yuan Dynasty.'
          },
          {
            question: 'Rashid al-Din\'s Jami\' al-Tawarikh (written under Il-Khanate patronage) demonstrates which AP concept?',
            options: [
              'How Mongol rule created conditions for unprecedented cross-cultural intellectual exchange, with a Persian Muslim scholar writing the first comprehensive world history under the patronage of Mongol rulers who had recently destroyed the Islamic world\'s center',
              'That the Il-Khanate destroyed all Persian intellectual life',
              'That world histories were commonly written in all medieval civilizations',
              'That Rashid al-Din was a Mongol scholar writing in a Mongol language'
            ],
            correctAnswer: 0,
            explanation: 'The paradox: Hulagu destroyed Baghdad and its libraries in 1258; his descendants patronized Persian scholars writing world histories by 1307. This transformation from destroyer to cultural patron demonstrates the speed at which Mongol rulers adopted local civilizational values — within two generations, the Il-Khanate had converted to Islam and was funding Islamic/Persian scholarship.'
          },
          {
            question: 'The Golden Horde\'s relationship to Russian principalities c. 1240–1480 most significantly shaped Russian history by:',
            options: [
              'Creating a long-term tributary relationship where Russian princes collected taxes for the Golden Horde, developing Russian administrative and fiscal infrastructure that the Muscovite state later inherited and adapted to serve Russian rather than Mongol interests',
              'Permanently converting Russia to Islam',
              'Destroying all Russian cities and ending Russian civilization entirely',
              'Creating a democratic system in Russia by modeling Golden Horde tribal consensus decision-making'
            ],
            correctAnswer: 0,
            explanation: 'Russian princes\' role as Golden Horde tax collectors was transformative: it built Russian princes\' administrative capacity (knowing how to extract revenue systematically across large territories), positioned the most compliant princes for Mongol favor (Moscow rose to prominence partly through successful tribute collection), and created a model of centralized fiscal authority that Muscovite rulers later applied to their own empire-building.'
          }
        ]
      }
    },
    {
      id: 'whsrm4-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each khanate to its most distinctive feature.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Mongol khanate that governed China, suspended civil service exams, and employed Marco Polo was the ___',
            options: ['Yuan Dynasty', 'Il-Khanate', 'Golden Horde', 'Chagatai Khanate']
          },
          {
            label: 'The Mongol khanate in Persia that converted to Islam in 1295 and patronized Persian art and scholarship was the ___',
            options: ['Il-Khanate', 'Yuan Dynasty', 'Golden Horde', 'Chagatai Khanate']
          },
          {
            label: 'The Mongol khanate that ruled Russian principalities for over 200 years and influenced Russian political centralization was the ___',
            options: ['Golden Horde', 'Il-Khanate', 'Yuan Dynasty', 'Chagatai Khanate']
          }
        ],
        correctAnswers: ['Yuan Dynasty', 'Il-Khanate', 'Golden Horde'],
        hint1: 'Kublai Khan — China — Marco Polo',
        hint2: 'Persia — Ghazan Khan converted to Islam 1295',
        hint3: 'Russia — capital at Sarai — 200+ years of rule',
        explanation: 'Each khanate adapted to its regional context: the Yuan adopted Chinese administration; the Il-Khanate converted to Islam and adopted Persian culture; the Golden Horde converted to Islam and created a tributary system over Russian principalities. All three demonstrate the pattern of nomadic conquerors being culturally absorbed by more institutionally sophisticated sedentary civilizations.'
      }
    },
    {
      id: 'whsrm4-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The pattern of nomadic Mongol conquerors adopting the religion and culture of their subjects (Il-Khanate → Islam, Yuan → Buddhism/Confucianism, Golden Horde → Islam) best illustrates which AP historical principle?',
            options: [
              'Civilizational depth and institutional sophistication can outlast political conquest — advanced sedentary civilizations with deep religious, philosophical, and administrative traditions often culturally absorb their nomadic conquerors within a few generations',
              'Military victory always results in permanent cultural dominance of the victor',
              'Nomadic peoples are culturally superior to sedentary peoples',
              'Religious conversion always precedes military conquest in world history'
            ],
            correctAnswer: 0,
            explanation: 'This principle appears throughout AP World History: Germanic tribes converted to Christianity after conquering Rome; Manchu adopted Chinese culture after conquering the Ming; Mongols adopted Islam/Buddhism/Confucianism after conquering Islamic/Buddhist/Confucian populations. The pattern is consistent: institutional depth (written language, legal codes, religious infrastructure) outlasts military defeat.'
          },
          {
            question: 'For an AP comparison LEQ between the Yuan Dynasty and the Il-Khanate, which argument demonstrates the greatest historical sophistication?',
            options: [
              'While both khanates adapted to local civilizations, the degree of adaptation differed significantly: the Yuan maintained clear Mongol ethnic stratification while adopting Chinese administrative systems, while the Il-Khanate underwent more thorough cultural assimilation through Islamic conversion and Persian cultural patronage, suggesting that religious conversion accelerates civilizational absorption more effectively than administrative adoption alone',
              'The two khanates were identical in every respect',
              'The Yuan Dynasty was entirely Chinese with no Mongol influence',
              'The Il-Khanate never converted to Islam'
            ],
            correctAnswer: 0,
            explanation: 'This argument earns complexity by: (1) acknowledging similarity (both adapted), (2) identifying meaningful difference (degree of adaptation), (3) proposing a causal explanation (religious conversion > administrative adoption in terms of cultural assimilation), and (4) deriving a principle applicable beyond these two cases. This is what AP complexity means: a nuanced argument that generates a broader historical insight.'
          }
        ]
      }
    }
  ]
}
''')

w('wh-silk-roads-mongols-part5.ts', '''export const whSilkRoadsMongolsPart5Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm5-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 5 of 7 — Silk Road Trade: Goods, Routes & Peoples**

---

| Section |
|---------|
| 📖 What Moved Along the Silk Roads |
| Key Merchants and Intermediaries |
| Caravanserais: Infrastructure of Trade |
| 📌 Cultural Exchange Through Trade |

> 🔑 **Key Concept:** The Silk Roads were not a single road but a network of routes connecting China to the Mediterranean through Central Asia and Persia. AP questions focus on WHAT moved (not just silk), WHO controlled trade (Central Asian intermediaries), and HOW trade routes changed under Mongol rule.
      \`
    },
    {
      id: 'whsrm5-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Silk Roads transported more than silk. Which combination of goods and ideas BEST describes Silk Road exchange?',
            options: [
              'Silk and porcelain from China westward; horses, glassware, and silver westward to east; Buddhism, Islam, and plague from west to east and east to west simultaneously',
              'Only luxury goods with no cultural or religious exchange',
              'Exclusively agricultural products that could not survive sea transport',
              'Only Chinese goods — no significant goods moved eastward from Central Asia or the West'
            ],
            correctAnswer: 0,
            explanation: 'The Silk Roads moved goods, people, religions, diseases, and technologies in all directions simultaneously. Chinese silk and porcelain moved west; Central Asian horses (essential for Chinese military) moved east; Buddhism spread from India through Central Asia to China; Islam spread through Central Asian merchants; plague moved from Central Asian rodents westward. AP asks about this multi-directional exchange.'
          },
          {
            question: 'Sogdian merchants\' historical significance for Silk Road trade was that they:',
            options: [
              'Served as the primary commercial intermediaries between China and the Mediterranean world for centuries, speaking multiple languages and establishing trading colonies at key nodes across Central Asia',
              'Were the only merchants ever to travel the Silk Roads',
              'Were exclusively Arab Muslims who controlled all Central Asian trade',
              'Were Chinese government officials who managed state trade'
            ],
            correctAnswer: 0,
            explanation: 'The Sogdians (an Iranian-speaking people from modern Uzbekistan) were the quintessential Silk Road merchants c. 500–900 CE. Their letters, discovered in a 4th-century watchtower in western China, document commercial networks, prices, and goods. They were multilingual intermediaries who knew Chinese, Turkic, Persian, and Aramaic — ideal for trade across cultural zones.'
          }
        ]
      }
    },
    {
      id: 'whsrm5-content',
      type: 'text' as const,
      content: \`
## 📖 Silk Road Trade: Goods, Routes & Infrastructure

> **What Moved Along the Silk Roads**

The Silk Roads were a network of routes moving luxury and high-value goods:

**Eastward to China:**
- Horses (Central Asian breeds superior to Chinese; essential for military — Song China paid enormous tribute in silver for horses)
- Glassware (Roman and later Islamic glass)
- Silver (Roman and later Abbasid coins)
- Buddhism (India → Central Asia → China, 1st century BCE onward)
- Islam (Central Asian merchants brought Islam to China by 9th century)

**Westward from China:**
- Silk (the prestige fabric; Chinese silk production techniques guarded as state secret for centuries)
- Porcelain (Chinese ceramics highly prized across Eurasia)
- Paper (Chinese invention; spread to Islamic world by 8th century via Samarkand)
- Gunpowder (gradually diffused westward through Mongol period)
- Tea (Chinese tea culture spread to Central Asia and beyond)

> **Key Merchants and Intermediaries**

No single group controlled the entire Silk Road — trade moved in relay:

| Merchant Group | Era | Role |
|---------------|-----|------|
| **Sogdians** | c. 200–900 CE | Primary Central Asian intermediaries; multilingual traders |
| **Turks** | c. 500–1200 CE | Controlled key segments; both merchants and raiders |
| **Arab Muslims** | c. 700–1450 CE | Dominated western portions; Arabic as commercial language |
| **Mongols** | c. 1230–1350 CE | Created Pax Mongolica protecting entire routes; merchants used paiza |

> **Caravanserais: Commercial Infrastructure**

Caravanserais (roadside inns for caravans) were the physical infrastructure of Silk Road trade:

- Typically located 25–30 miles apart (one day's travel for a loaded camel)
- Provided: shelter for merchants and animals; water; food; security; storage
- Built and maintained by Islamic rulers as acts of piety and commercial investment
- The yam stations of the Mongol period served similar functions for the state postal system

> **AP Comparison Anchor**

- **Silk Roads vs. Indian Ocean:** Both moved luxury goods; Indian Ocean was higher volume and eventually more commercially significant; Silk Roads moved more cultural and religious content per unit of commerce
- **Central Asian intermediaries:** Silk Road success required intermediaries (Sogdians, Turks) who knew multiple languages and cultures — multilingualism was economic capital
      \`,
    },
    {
      id: 'whsrm5-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'China\'s enormous demand for Central Asian horses along the Silk Roads was significant because it:',
            options: [
              'Created a persistent trade imbalance: China paid silver for horses (essential for cavalry), establishing silver as a key commodity flowing westward and demonstrating that Chinese military needs drove commercial exchanges as much as luxury goods markets',
              'Was purely decorative — horses were only used for ceremonial purposes in China',
              'Was satisfied by Chinese-bred horses, eliminating the need for trade',
              'Only occurred during the Mongol period and had no prior history'
            ],
            correctAnswer: 0,
            explanation: 'China\'s horse-silk exchange is a model AP commodity trade example. Chinese horses were inferior for cavalry; Central Asian (especially Ferghana) horses were essential for the military. China\'s willingness to pay enormous prices in silver for horses shows how military needs drove commercial exchange — and how trade served strategic as well as luxury functions.'
          },
          {
            question: 'Paper\'s spread from China to the Islamic world (via the Battle of Talas, 751 CE, where Chinese papermakers were captured) demonstrates:',
            options: [
              'How military conflicts and captive craftsmen could accelerate technological transfer, with paper subsequently revolutionizing Islamic scholarship by enabling mass manuscript production at lower cost than parchment',
              'That the Islamic world independently invented paper before Chinese paper arrived',
              'That China willingly shared paper-making technology through diplomatic exchange',
              'That paper only became commercially important after the Gutenberg printing press'
            ],
            correctAnswer: 0,
            explanation: 'The Battle of Talas (where an Arab-Abbasid army defeated a Tang Chinese force) resulted in Chinese papermakers being taken to Samarkand, where paper production began in the Islamic world. Within a century, paper mills spread from Samarkand to Baghdad to Egypt. Paper enabled cheaper manuscript production — critical for Islamic scholarship\'s expansion of madrasas and libraries.'
          },
          {
            question: 'The caravanserai system\'s construction by Islamic rulers along trade routes demonstrates:',
            options: [
              'How religious values (charitable building as pious act), economic interests (taxation of trade passing through), and political goals (demonstrating power and generosity) combined to create commercial infrastructure that simultaneously served rulers\' and merchants\' interests',
              'That Islamic rulers required payment for all caravanserai use',
              'That caravanserais were exclusively built by private merchants without state involvement',
              'That the Islamic world had superior road infrastructure to all other civilizations'
            ],
            correctAnswer: 0,
            explanation: 'Building caravanserais was considered a meritorious religious act (waqf infrastructure) AND a sound economic investment (rulers taxed trade that passed through their territories). This combination of religious motivation and economic self-interest created extensive commercial infrastructure. AP rewards recognizing when historical actors have multiple simultaneous motivations.'
          }
        ]
      }
    },
    {
      id: 'whsrm5-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each Silk Road trade concept to its correct description.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The primary Central Asian merchant intermediaries of the Silk Roads c. 200-900 CE, known for multilingualism and trade colonies across Eurasia, were the ___',
            options: ['Sogdians', 'Turks', 'Arabs', 'Mongols']
          },
          {
            label: 'The roadside inn providing shelter, water, and security for merchant caravans along trade routes was called a ___',
            options: ['Caravanserai', 'Yam station', 'Madrasa', 'Funduq']
          },
          {
            label: 'The Chinese technology that spread to the Islamic world via captured craftsmen after the Battle of Talas (751), enabling cheaper manuscript production, was ___',
            options: ['Paper-making', 'Silk production', 'Gunpowder', 'Porcelain']
          }
        ],
        correctAnswers: ['Sogdians', 'Caravanserai', 'Paper-making'],
        hint1: 'Iranian-speaking merchants from modern Uzbekistan — Silk Road specialists',
        hint2: 'Rest stop for caravans — typically every 25-30 miles',
        hint3: 'Chinese craftsmen captured at Battle of Talas brought technique westward',
        explanation: 'Sogdians were the Silk Road\'s professional intermediaries for centuries. Caravanserais were the commercial infrastructure that made multi-day overland journeys feasible. Paper-making\'s spread from China to the Islamic world (and later to Europe) is one of the most consequential technology transfers in world history, enabling the written knowledge explosion of the Islamic golden age.'
      }
    },
    {
      id: 'whsrm5-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "Evaluate the significance of trade intermediaries for Silk Road commerce c. 200–1400." Which answer demonstrates the strongest historical reasoning?',
            options: [
              'Trade intermediaries were essential rather than parasitic: Sogdians, Turks, and later Arab merchants provided the linguistic, cultural, and logistical expertise needed to move goods through multiple linguistic and political zones, and their relay system meant that no single party needed to understand all segments of a 5,000-mile route',
              'Trade intermediaries were obstacles who prevented direct trade and should be eliminated',
              'Trade along the Silk Roads occurred without any intermediaries — all merchants traveled the entire route',
              'Intermediaries were only important during the Mongol period'
            ],
            correctAnswer: 0,
            explanation: 'The relay trade system explains why no single merchant needed to travel from China to Rome: Sogdians in Central Asia, Arab merchants in Persia, and Byzantine merchants in Anatolia each covered their segment. This division of expertise was more efficient than attempting direct transit. AP prompts about intermediaries reward explanations of WHY they existed and what functions they served.'
          },
          {
            question: 'How did the Silk Roads differ from the Indian Ocean trade network in their primary form of cultural exchange?',
            options: [
              'The Silk Roads were proportionally more important for religious and intellectual exchange (Buddhism, Islam, plague, mathematics spreading overland), while the Indian Ocean was proportionally higher in commercial volume but less significant for religious transmission per unit of trade',
              'The Indian Ocean was used only for military purposes, not trade',
              'The Silk Roads moved more total goods than the Indian Ocean',
              'There were no differences — both networks were identical in every respect'
            ],
            correctAnswer: 0,
            explanation: 'This comparison question rewards nuanced distinction: both networks moved goods AND ideas, but the relative emphasis differed. Buddhism\'s spread to China was primarily overland; Islam\'s spread to Southeast Africa was primarily maritime. The Silk Roads\' overland nature meant longer travel times (more exposure to local cultures) and smaller cargo loads (higher value per weight), while Indian Ocean shipping enabled larger volumes with faster transit.'
          }
        ]
      }
    }
  ]
}
''')

w('wh-silk-roads-mongols-part6.ts', '''export const whSilkRoadsMongolsPart6Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm6-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 6 of 7 — Decline of the Mongols & Silk Road Legacy**

---

| Section |
|---------|
| 📖 The Fall of the Mongol Empire |
| The Black Death\'s Long-term Consequences |
| Post-Mongol Successor States |
| 📌 CCOT: Silk Roads Before and After the Mongols |

> 🔑 **Key Concept:** The Mongol Empire\'s decline by the mid-14th century — from internal fragmentation, the Black Death, and local resistance — reshaped Afro-Eurasian political geography. AP questions about CCOT ask you to identify what changed and what continued after the Mongol period, particularly for trade route patterns.
      \`
    },
    {
      id: 'whsrm6-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The primary factors causing the Mongol Empire\'s fragmentation in the 14th century were:',
            options: [
              'Internal succession conflicts between competing khanates, the devastating demographic impact of the Black Death on both Mongol armies and subject populations, and the absorption of Mongol rulers into local cultures that weakened their distinct Mongol identity',
              'A single decisive military defeat that ended all Mongol power simultaneously',
              'European Crusaders successfully conquering all Mongol territories',
              'Voluntary dissolution when Mongol leaders decided to become sedentary farmers'
            ],
            correctAnswer: 0,
            explanation: 'No single factor explains Mongol decline — it was the convergence of: (1) succession crises (the ulus system created competing claims); (2) Black Death (depopulated the empire\'s tax base and armies); (3) cultural absorption (converted Mongol rulers\' Mongol identity weakened as they became Muslim or Chinese in culture). AP rewards multi-causal explanations over single-factor narratives.'
          },
          {
            question: 'The Ottoman Empire\'s rise in Anatolia after Mongol decline is significant because it:',
            options: [
              'Created a new Islamic state that would eventually control the western Silk Road\'s endpoints and serve as the commercial gateway between Asia and Europe — ultimately motivating European search for alternative sea routes to Asia',
              'Ended all trade between Asia and Europe permanently',
              'Immediately conquered all former Mongol territory and recreated the unified empire',
              'Was established by former Mongol warriors who converted to Christianity'
            ],
            correctAnswer: 0,
            explanation: 'The Ottoman Empire controlling Constantinople (1453) and the eastern Mediterranean trade routes is the direct stimulus for European maritime exploration. Portuguese and Spanish rulers sought sea routes around Africa and across the Atlantic to bypass Ottoman-controlled overland routes — making the Ottoman rise a direct cause of the Age of Exploration. AP causation chains connect Mongol decline → Ottoman rise → European exploration.'
          }
        ]
      }
    },
    {
      id: 'whsrm6-content',
      type: 'text' as const,
      content: \`
## 📖 Mongol Decline & Silk Road Legacy

> **Why the Mongol Empire Fragmented**

The empire that had conquered most of Eurasia collapsed within a century:

| Factor | Details |
|--------|---------|
| **Succession conflicts** | Ulus system created competing heirs; khanates fought each other |
| **Black Death** | Killed up to half the population of conquered regions; disrupted agricultural tax base |
| **Cultural absorption** | Converted Mongol rulers identified more with their subjects than with Mongol heritage |
| **Local resistance** | Chinese rebellion (Red Turban movement) overthrew Yuan 1368; Mamluks had stopped western expansion 1260 |
| **Economic disruption** | Plague devastated the commercial networks that supported the empire |

> **Post-Mongol Successor States**

The Mongol collapse created political vacuums filled by successor states:

- **Ming Dynasty (China, 1368):** Chinese rulers expelled Mongols; restored civil service exams; Zheng He voyages; eventually withdrew from trade
- **Ottoman Empire (Anatolia, 1299–1922):** Grew from a small Turkic principality to eventually control Constantinople (1453) and eastern Mediterranean
- **Timurid Empire (Persia/Central Asia, 1370–1506):** Timur (Tamerlane) rebuilt a Mongol-style empire; Timurid court in Samarkand became a center of Persian-Islamic art
- **Muscovite Russia:** Overthrew Golden Horde dominance c. 1480; used techniques of centralized rule learned under Mongol domination

> **Long-term Silk Road Legacy**

The Mongol period\'s legacy for Silk Road trade:

- **Short-term decline:** Black Death, fragmentation, and political instability disrupted overland trade
- **Technological diffusion:** Chinese gunpowder, paper, printing, and compass reached the Islamic world and Europe — transforming military technology, scholarship, and navigation
- **European commercial consciousness:** Marco Polo\'s account + awareness of Asian wealth stimulated European desire for direct sea access → eventual Age of Exploration
- **Ottoman control:** Western Silk Road endpoints controlled by Ottomans → European motivation to find sea routes

> **AP Comparison Anchor**

- **CCOT:** Silk Road overland trade declined in importance relative to sea routes after c. 1400; Indian Ocean and later Atlantic trade networks became more commercially significant
- **Causation chain:** Mongol decline → political fragmentation → overland routes less secure → Ottoman expansion → European sea route motivation → Age of Exploration (next AP unit)
      \`,
    },
    {
      id: 'whsrm6-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Ming Dynasty\'s restoration of the Confucian civil service examination system after expelling the Mongols demonstrates:',
            options: [
              'How deeply the exam system was embedded in Chinese political culture — the scholar-gentry class\'s resentment of its Yuan suspension contributed to Mongol overthrow, and its restoration was a signal of "Chinese" governance returning',
              'That the Yuan Dynasty had successfully destroyed the exam system permanently',
              'That the Ming Dynasty was founded by Mongol officials adapting Chinese practices',
              'That the examination system was a Mongol invention adapted by Chinese rulers'
            ],
            correctAnswer: 0,
            explanation: 'The exam restoration was politically symbolic: it signaled that "China" had returned by reinstating the meritocratic system associated with Chinese governance. The Ming founder (Zhu Yuanzhang, himself of peasant origin) used the exam system both to staff the government and to signal legitimacy to the scholar-gentry whose cooperation he needed.'
          },
          {
            question: 'European desire to find sea routes to Asia in the 15th century was MOST directly caused by:',
            options: [
              'Ottoman Empire control of eastern Mediterranean and overland trade routes to Asia, which imposed high tolls and made overland trade expensive — creating strong economic incentives for Portuguese and Spanish rulers to find alternative sea routes',
              'A European desire to spread Christianity throughout Asia',
              'Technological limitations that made overland trade impossible',
              'Chinese restriction of all foreign merchants from their ports'
            ],
            correctAnswer: 0,
            explanation: 'This is a critical AP causation chain: Mongol decline → Ottoman expansion → Ottoman control of Constantinople (1453) and Levantine trade routes → high tolls on Asian goods → European maritime exploration. Portugal began exploring the African coast before 1453, but Ottoman control accelerated the drive for alternatives. This chain connects Unit 1-2 to Unit 3-4 in AP World History.'
          },
          {
            question: 'Which statement BEST describes the Silk Roads\' legacy for world history after the Mongol period?',
            options: [
              'While the overland Silk Roads declined in relative importance compared to expanding sea routes after c. 1400, the Mongol period\'s technological diffusion (gunpowder, paper, compass) had already transferred the tools that would enable European maritime expansion and the new global connections of the 15th-16th centuries',
              'The Silk Roads had no lasting impact after the Mongol Empire collapsed',
              'Overland Silk Road trade increased significantly after Mongol decline',
              'European explorers independently discovered all technologies associated with the Silk Roads'
            ],
            correctAnswer: 0,
            explanation: 'The Silk Roads\' greatest legacy was not the goods they moved but the technologies they diffused: gunpowder transformed European warfare; the compass enabled oceanic navigation; paper enabled printed books and Protestant Reformation pamphlets. These tools, originally Chinese, reached Europe via the Silk Road networks — and then powered the European global expansion that created the modern world.'
          }
        ]
      }
    },
    {
      id: 'whsrm6-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each post-Mongol development to its correct description.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Chinese dynasty that expelled the Mongols in 1368 and restored the civil service examination system was the ___',
            options: ['Ming Dynasty', 'Tang Dynasty', 'Song Dynasty', 'Qing Dynasty']
          },
          {
            label: 'The Turkic empire that controlled Constantinople from 1453 and the western Silk Road endpoints, motivating European sea route exploration, was the ___',
            options: ['Ottoman Empire', 'Timurid Empire', 'Mamluk Sultanate', 'Safavid Empire']
          },
          {
            label: 'The Chinese technology that spread west via Silk Road networks and eventually enabled both European naval dominance and printed books was ___',
            options: ['Gunpowder and printing', 'The compass alone', 'Paper money', 'Porcelain']
          }
        ],
        correctAnswers: ['Ming Dynasty', 'Ottoman Empire', 'Gunpowder and printing'],
        hint1: 'Zhu Yuanzhang founded it — expelled Mongols — Zheng He voyages',
        hint2: 'Captured Constantinople 1453 — controlled eastern trade routes',
        hint3: 'Both technologies changed European warfare and knowledge diffusion',
        explanation: 'The Ming Dynasty\'s exam restoration signaled Chinese governance\'s return. Ottoman control of Constantinople (1453) was the proximate cause of European sea-route exploration. Gunpowder and printing technology, diffused westward via Silk Road networks during the Mongol period, transformed European warfare (gunpowder weapons overthrew feudal castles) and intellectual life (printing press democratized literacy).'
      }
    },
    {
      id: 'whsrm6-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A CCOT essay asks about Silk Road trade c. 1200–1500. Which thesis demonstrates the strongest historical analysis?',
            options: [
              'While the Mongol period created unprecedented Silk Road commercial connectivity through the Pax Mongolica, the subsequent decline of Mongol unity and Ottoman control of western endpoints shifted the balance of Eurasian trade toward maritime routes — establishing a long-term continuity of east-west commercial exchange within a changed structural framework',
              'Silk Road trade ended entirely after the Mongol Empire collapsed',
              'Nothing changed in Silk Road trade between 1200 and 1500',
              'The Silk Roads were more important in 1500 than at any previous time'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns full CCOT points: it identifies specific change (Mongol Pax → fragmentation → maritime shift), specific continuity (east-west commercial exchange persisting), uses periodization correctly, and articulates a structural argument (the FORM of exchange changed while the FUNCTION continued). This is model CCOT thesis construction.'
          },
          {
            question: 'The connection between the Mongol Empire\'s decline, Ottoman rise, and European Age of Exploration demonstrates which AP skill?',
            options: [
              'Historical causation across multiple periods: short-term effects of Mongol decline (fragmentation, Black Death, Ottoman rise) combined with long-term structural factors (European commercial desire for Asian goods) to produce the Age of Exploration — demonstrating that major historical changes typically involve multiple intersecting causes across time',
              'That historical events are random and cannot be causally connected',
              'That the Ottoman Empire directly funded European exploration',
              'That Mongol expansion was the sole cause of the Age of Exploration'
            ],
            correctAnswer: 0,
            explanation: 'Multi-period causation is one of the most sophisticated AP skills: the Mongol → Ottoman → Exploration chain connects Units 1-2 to Units 3-4. AP essays that connect developments across units (by referencing this chain in the context paragraph of an exploration essay, or in the complexity move of a Mongol essay) earn higher scores than essays that treat each unit as isolated.'
          }
        ]
      }
    }
  ]
}
''')

w('wh-silk-roads-mongols-part7.ts', '''export const whSilkRoadsMongolsPart7Data = {
  topicSlug: 'wh-silk-roads-mongols',
  sections: [
    {
      id: 'whsrm7-intro',
      type: 'text' as const,
      content: `
# 🐉 Silk Roads & the Mongols (c. 1200–1450)

**Part 7 of 7 — AP Review & Exam Mastery**

---

| Section |
|---------|
| 📖 High-Yield Vocabulary |
| Common AP Prompt Patterns |
| Evidence Deployment Strategies |
| 📌 Pulling It All Together |

> 🔑 **Key Concept:** Silk Roads & Mongols content appears in every section of the AP exam — MCQ, SAQ, LEQ, and DBQ. Key prompt patterns include evaluating the Mongol Empire\'s impact (destruction vs. connectivity), CCOT for Silk Road trade, and comparing the Mongols to other empire-builders.
      \`
    },
    {
      id: 'whsrm7-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An AP SAQ asks: "Briefly explain ONE way the Mongol Empire affected long-distance trade c. 1200-1350." Which response earns full credit?',
            options: [
              'The Mongol Empire\'s unification of Central Asian territory created the Pax Mongolica, which reduced political fragmentation and robbery along the Silk Roads, enabling merchants like Marco Polo to travel from Italy to China — stimulating unprecedented Eurasian commercial and cultural exchange',
              'The Mongols stopped all trade by destroying every city along the Silk Road',
              'The Mongols had no impact on trade',
              'Trade only increased after the Mongols were defeated'
            ],
            correctAnswer: 0,
            explanation: 'This SAQ response earns full credit: specific effect (Pax Mongolica), specific mechanism (reduced fragmentation and robbery), specific evidence (Marco Polo\'s travels), and implicit reasoning (connecting mechanism to outcome). Three-part structure: claim + evidence + reasoning = full SAQ credit.'
          },
          {
            question: 'An AP LEQ prompt asks: "Evaluate the overall impact of the Mongol Empire on Eurasian civilizations c. 1200-1400." What\'s the best complexity move?',
            options: [
              'Acknowledge that the same empire produced contradictory outcomes simultaneously — destruction of cities and populations AND creation of trade networks; plague transmission AND technology diffusion — and argue that this paradox makes simple positive or negative assessments historically inadequate',
              'Argue that the Mongol Empire was entirely negative',
              'Argue that the Mongol Empire was entirely positive',
              'Avoid discussing the Black Death to keep the argument simple'
            ],
            correctAnswer: 0,
            explanation: 'The Mongol paradox IS the complexity point: destruction (Baghdad, 40 million dead) AND connection (Pax Mongolica, technology transfer, Marco Polo). Any essay that treats the Mongols as simply "destructive" or simply "connecting" fails the complexity standard. The AP exam specifically rewards students who can hold contradictory truths about the same historical phenomenon.'
          }
        ]
      }
    },
    {
      id: 'whsrm7-content',
      type: 'text' as const,
      content: \`
## 📖 AP Review: Vocabulary & Exam Strategy

> **Must-Know Vocabulary**

- **Pax Mongolica** — "Mongol Peace"; relative safety on Silk Road routes enabling unprecedented commercial exchange (and plague spread)
- **Yam system** — Mongol postal relay network; communication and commercial infrastructure
- **Composite bow** — Mongol military technology; powerful and accurate from horseback
- **Ulus system** — Division of empire among Genghis Khan\'s sons → four competing khanates
- **Il-Khanate** — Mongol khanate in Persia; converted to Islam (Ghazan Khan, 1295)
- **Yuan Dynasty** — Mongol khanate in China; Kublai Khan; Marco Polo\'s employer
- **Golden Horde** — Mongol khanate ruling Russia 1240–1480
- **Ain Jalut (1260)** — Mamluk defeat of Mongols; first major Mongol military loss
- **Paiza** — Mongol imperial pass granting merchants imperial protection
- **Caravanserai** — Roadside inn for caravans; commercial infrastructure

> **Common AP Prompt Patterns**

- **Causation:** Why were the Mongols able to conquer such vast territories so rapidly?
- **Evaluation:** To what extent did the Mongol Empire benefit Eurasian civilizations?
- **CCOT:** What changed and what continued in Silk Road trade c. 1200–1450?
- **Comparison:** How did Mongol governance differ across the four khanates?
- **Complexity:** How did the same Mongol networks simultaneously enable commerce and plague?

> **AP Comparison Anchor**

**Evidence tiers for Mongol impact essays:**

| Effect | Positive Evidence | Negative Evidence |
|--------|------------------|-------------------|
| Commerce | Marco Polo\'s travels; Pax Mongolica increased trade volume | Black Death spread along same routes |
| Culture | Technology diffusion (gunpowder, compass, paper west); Persian art flourished under Il-Khanate | Baghdad\'s libraries destroyed; Central Asian cities depopulated |
| Politics | Connected rulers through yam system; diplomatic exchange | Killed 30-40 million; destroyed states from China to Poland |
| Long-term | Technological diffusion enabled European expansion | Demographic collapse set back development for generations |
      \`,
    },
    {
      id: 'whsrm7-input',
      type: 'multiple-choice' as const,
      content: \`
**Applied Recall: 3-Question Sprint** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'For an AP MCQ about what the Mongols\' success reveals about sedentary vs. nomadic military capacity, which answer is strongest?',
            options: [
              'Nomadic cavalry advantages (mobility, composite bow, coordinated maneuver) consistently overcame sedentary armies\' numerical superiority until gunpowder weapons (eventually diffused from China) gave sedentary states the ability to project force without requiring direct cavalry engagement',
              'Sedentary armies always defeated nomadic armies in open battle',
              'Nomadic peoples were always militarily superior to all sedentary civilizations',
              'The Mongols succeeded only because of divine intervention'
            ],
            correctAnswer: 0,
            explanation: 'This answer demonstrates AP-level sophistication: it explains the mechanism (mobility + bow), acknowledges the eventual reversal (gunpowder), and implies a longer causal chain (technology diffusion via trade networks eventually empowered sedentary states against nomadic cavalry). The pattern of nomadic military advantage ending with gunpowder is a major AP Unit 3 theme.'
          },
          {
            question: 'When analyzing a primary source from the Mongol period (like Marco Polo\'s account), which sourcing move earns the most DBQ credit?',
            options: [
              'Considering both the source\'s PURPOSE (a Venetian merchant describing China\'s commercial opportunities to European readers) and its LIMITATIONS (Marco Polo may have exaggerated wealth to enhance his own reputation; some scholars debate how much of China he actually visited)',
              'Simply summarizing what the source says without analysis',
              'Accepting the source as completely accurate without questioning perspective',
              'Rejecting the source entirely because it\'s not written by a Chinese author'
            ],
            correctAnswer: 0,
            explanation: 'AP DBQ sourcing requires: identifying who wrote it, why (purpose), for whom (audience), and what that means for reliability. Marco Polo\'s account was written to entertain and inform European readers about Asian commercial opportunities — this purpose may have encouraged exaggeration, while his long residence at Kublai Khan\'s court provides genuine insider access. Both dimensions (value and limitation) earn sourcing credit.'
          },
          {
            question: 'The most accurate one-sentence summary of the Mongol Empire\'s historical significance is:',
            options: [
              'The Mongol Empire simultaneously created the most destructive military campaign and the most connected trade network in medieval history, diffusing world-changing technologies while transmitting the most deadly pandemic — demonstrating that historical forces of this magnitude are always contradictory in their consequences',
              'The Mongol Empire was purely destructive with no lasting positive contributions',
              'The Mongol Empire was the greatest positive force in world history',
              'The Mongol Empire had no lasting impact after its collapse'
            ],
            correctAnswer: 0,
            explanation: 'This summary captures the AP complexity standard: it acknowledges both massive destruction AND massive connection, identifies specific examples of each (military campaign vs. trade network; technology diffusion vs. plague), and articulates a principle (forces of this magnitude are always contradictory). Complexity is not about balance for its own sake — it\'s about accurate historical description of genuinely contradictory phenomena.'
          }
        ]
      }
    },
    {
      id: 'whsrm7-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Idea: Evidence to Claim**

Match each AP vocabulary term to its correct definition.
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The Mongol imperial pass granting merchants protection and access to yam relay stations was called a ___',
            options: ['Paiza', 'Yam', 'Ulus', 'Kurultai']
          },
          {
            label: 'The 1260 battle where Mamluk forces stopped Mongol westward expansion into North Africa was ___',
            options: ['Ain Jalut', 'Baghdad', 'Ain Jalut', 'Tours']
          },
          {
            label: 'The system dividing the Mongol Empire among Genghis Khan\'s sons — creating competing khanates — was the ___',
            options: ['Ulus system', 'Yam system', 'Pax Mongolica', 'Kurultai']
          }
        ],
        correctAnswers: ['Paiza', 'Ain Jalut', 'Ulus system'],
        hint1: 'Merchant passport — granted Mongol imperial protection',
        hint2: 'Battle in Palestine — Mamluks vs. Mongols — 1260',
        hint3: 'Division inheritance — four khanates — seeds of fragmentation',
        explanation: 'The paiza was the commercial passport that made the Pax Mongolica practically accessible to merchants. Ain Jalut (1260) was the turning point that stopped Mongol westward expansion and demonstrated that the Mongols could be defeated. The ulus system\'s division of the empire among competing heirs planted the structural seeds of the empire\'s eventual fragmentation.'
      }
    },
    {
      id: 'whsrm7-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'An AP essay asks you to connect Silk Roads & Mongols content to the Age of Exploration (Unit 4). What is the strongest connection argument?',
            options: [
              'The Mongol period\'s technology diffusion (compass enabling navigation, gunpowder enabling military conquest) AND Ottoman control of Silk Road western endpoints (motivating European sea-route search) created the material conditions and commercial incentives for European maritime exploration — making the Mongol Empire a structural cause of the Age of Exploration despite the two periods being separated by generations',
              'The two periods are unconnected',
              'European explorers were unaware of Asian wealth before the Age of Exploration',
              'The Ottoman Empire had no impact on European commercial motivations'
            ],
            correctAnswer: 0,
            explanation: 'This connection argument earns maximum complexity/contextualization credit: it identifies a multi-step causal chain (Mongol technology diffusion → navigation tools; Ottoman expansion → commercial motivation → exploration), explains the mechanism (not just that there\'s a connection, but HOW), and connects across AP units. This is the kind of cross-unit reasoning that separates 4s from 5s.'
          },
          {
            question: 'For AP DBQ analysis, a document showing a Mongol ruler granting commercial privileges to merchants is MOST useful for arguing:',
            options: [
              'That Mongol rulers recognized the economic benefits of facilitating commerce and used imperial authority to create conditions that made long-distance trade feasible — demonstrating that Pax Mongolica commercial benefits were deliberate policy, not accidental byproducts of conquest',
              'That Mongol rulers were exclusively motivated by altruistic desire to help merchants',
              'That all trade during this period was state-controlled by Mongol officials',
              'That merchants had no freedom under Mongol rule'
            ],
            correctAnswer: 0,
            explanation: 'Document analysis in AP DBQ requires connecting the document to an argument. A merchant-privilege document demonstrates: (1) deliberate Mongol commercial policy, (2) the mechanism of Pax Mongolica (imperial protection, not just absence of conflict), (3) the economic sophistication of Mongol governance. Using the document to support a specific claim with reasoning (not just summarizing it) is the AP DBQ skill.'
          }
        ]
      }
    }
  ]
}
''')

print("\\nAll wh-silk-roads-mongols parts 2-7 written successfully!")
