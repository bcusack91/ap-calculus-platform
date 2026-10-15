export const whSilkRoadsMongolsPart3Data = {
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
| 📌 The Plague: Connectivity's Dark Side |

> 🔑 **Key Concept:** The Pax Mongolica ("Mongol Peace") created unprecedented Eurasian connectivity — enabling commerce, diplomatic missions, and cultural exchange on a scale not seen before or after. But this same connectivity transmitted the Black Death. AP asks you to evaluate BOTH dimensions of Mongol-created connectivity.
      `
    },
    {
      id: 'whsrm3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Pax Mongolica contributed to increased Silk Road trade primarily by:',
            options: [
              'Bringing rival states under one authority that protected merchants from robbery and extortion',
              'Paving a network of stone roads that linked Chinese cities directly to Mediterranean ports',
              'Abolishing every toll and tax on merchants who crossed Mongol-controlled territory',
              'Requiring merchants to adopt Mongol religious practices, creating a shared commercial identity'
            ],
            correctAnswer: 0,
            explanation: 'The Pax Mongolica worked through political unification: by eliminating competing states that had imposed conflicting tolls and unpredictable security, the Mongol Empire created a zone where merchants could travel with relatively reliable protection (the yam postal system, Mongol patrols on main routes). This reduced transaction costs and encouraged long-distance trade.'
          },
          {
            question: 'The Black Death\'s spread via the Silk Road routes controlled by the Mongol Empire demonstrates:',
            options: [
              'That the networks carrying commerce and ideas also gave disease a fast path',
              'That the Mongols spread plague on purpose as a biological weapon against Europe',
              'That the Black Death struck only Europe and spared the Islamic and Chinese worlds',
              'That plague moved only by local contact and had little to do with long-distance travel'
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
      content: `
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
- **Scale:** Roughly a third of Europe's population (about 25 million; estimates vary) dead by 1353; similar death rates in the Middle East; China suffered massive plague mortality c. 1330s–1350s
- **Social consequences:** Labor shortages weakened feudalism; religious authority questioned; Jewish communities scapegoated and massacred; long-term economic disruption

> **AP Comparison Anchor**

- **Pax Mongolica benefits:** Unprecedented Eurasian commerce, diplomacy, and cultural exchange; Chinese technologies (printing, gunpowder, compass) reached the Islamic world and Europe
- **Pax Mongolica costs:** Black Death killed more people than any pandemic in history; long-term demographic and economic disruption
- **AP complexity:** The same network cannot be reduced to "good" or "bad" — it was both simultaneously
      `,
    },
    {
      id: 'whsrm3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Mongol yam (postal relay) system\'s primary significance for Eurasian commerce was:',
            options: [
              'Fast, reliable relay stations let rulers and licensed merchants send news across the empire in weeks',
              'Relay stations served the army alone and were closed to every merchant and foreign traveler',
              'Its riders moved more slowly than merchant caravans, so traders sent letters by sea instead',
              'It carried bulk goods such as grain and silk for state monopolies on Eurasian trade routes'
            ],
            correctAnswer: 0,
            explanation: 'The yam system was commercial infrastructure as much as military: merchants with imperial passes (paiza) could use relay stations and receive fresh horses. Fast communication reduced commercial risk (you could send price information ahead; respond quickly to market changes), making long-distance trade more rational and profitable.'
          },
          {
            question: 'Marco Polo\'s account of China is significant for AP World History because it:',
            options: [
              'It gave Europeans a detailed picture of Chinese wealth and spurred interest in reaching Asia',
              'It was the first description of China ever written by an author from outside China',
              'It portrayed China as poorer than Europe, which discouraged later European contact',
              'It was wholly invented, since Marco Polo never left Italy and simply copied Arab and Persian travel books'
            ],
            correctAnswer: 0,
            explanation: 'Marco Polo\'s significance goes beyond the journey itself: his account circulated widely in Europe and demonstrated the extraordinary wealth of Asian civilizations (Kublai Khan\'s court dwarfed anything in Europe). This commercial intelligence stimulated European desire for direct access to Asian luxury goods — a motivation that eventually drove Portuguese and Spanish exploration.'
          },
          {
            question: 'How did the Black Death\'s spread demonstrate the unintended consequences of Mongol-created connectivity?',
            options: [
              'Mongol-protected trade networks carried plague from Central Asia to Eurasia\'s crowded cities',
              'The Mongols deliberately engineered plague as a weapon against sedentary civilizations',
              'The plague traveled only by sea, along shipping routes that never touched Mongol overland trade',
              'Plague outbreaks came from poor hygiene alone and were unrelated to Mongol trade links'
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
      content: `
**Match the Idea: Evidence to Claim**

Match each Pax Mongolica feature to its correct description.
      `,
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
        hint3: 'Bubonic plague — killed roughly a third of Europe\'s population',
        explanation: 'The yam system created the communication backbone of the Pax Mongolica. Marco Polo\'s 17 years at Kublai Khan\'s court provided Europe with its first detailed account of Chinese civilization. The Black Death\'s trajectory from Central Asia to Europe via Mongol trade networks illustrates the paradox of connectivity: the same infrastructure that enabled unprecedented commerce enabled unprecedented pandemic.'
      }
    },
    {
      id: 'whsrm3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks: "Evaluate the overall impact of the Pax Mongolica on Afro-Eurasian civilizations." What is the strongest thesis?',
            options: [
              'It joined distant regions as never before and spread goods and technology, but those same links spread the Black Death',
              'It brought only benefits to Afro-Eurasian civilizations, since trade grew without any serious costs',
              'It was purely destructive, since Mongol armies razed cities and left no lasting commercial ties',
              'It mattered only for Yuan China and left the Islamic world and Europe almost entirely untouched'
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns credit because it acknowledges both positive (commerce, technology transfer) and negative (plague) dimensions and points to a broader principle (connectivity = opportunity + risk). In the essay, specific evidence such as Marco Polo\'s travels and the Black Death\'s path along Mongol routes supports each half, so the thesis sets up complexity from the start.'
          },
          {
            question: 'The Black Death\'s social consequences in Europe (weakened feudalism, religious doubt, scapegoating of Jews) demonstrate which AP principle?',
            options: [
              'Mass mortality can reshape labor relations, trust in institutions and treatment of minorities',
              'Pandemics rarely alter social or political structures, since landed elites usually keep firm control',
              'Plague struck only the peasantry, leaving noble houses and church institutions largely untouched',
              'Religious institutions always grow stronger after pandemics as frightened believers turn to them'
            ],
            correctAnswer: 0,
            explanation: 'The Black Death\'s social consequences are a model AP example of how environmental/biological factors drive social change: (1) peasant labor scarcity → serfs gained negotiating power → serfdom weakened; (2) church prayers didn\'t stop deaths → some believers lost faith; (3) fear and grief created scapegoating impulses → Jewish massacres across Europe. Each consequence follows a causal chain from the demographic event.'
          }
        ]
      }
    }
  ]
}
