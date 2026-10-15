export const whLandBasedEmpiresPart2Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlbe2-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (c. 1450–1750)

**Part 2 of 7 — The Ottoman Empire**

---

| Section |
|---------|
| 📖 Ottoman Rise and Conquest of Constantinople |
| Ottoman Governance: Devshirme and Millet |
| Ottoman Economy and Culture |
| 📌 AP Comparison: Ottomans vs. Other Land-Based Empires |

> 🔑 **Key Concept:** The Ottoman Empire (c. 1299–1922) was the longest-lasting and most successful of the AP Unit 3 land-based empires. AP questions focus on how the Ottomans used gunpowder technology, religious tolerance (millet system), and administrative innovation (devshirme) to build and maintain power.
      `
    },
    {
      id: 'whlbe2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Ottoman conquest of Constantinople (1453) was historically significant primarily because:',
            options: [
              'It ended the Byzantine Empire and gave the Ottomans control of the Bosphorus straits',
              'It gave the Ottomans their first foothold in Europe, which they had never entered before',
              'It reunited the Orthodox and Catholic churches under the protection of the Ottoman sultan',
              'It ended Ottoman expansion, since the sultans had no further territorial ambitions in Europe'
            ],
            correctAnswer: 0,
            explanation: 'Constantinople\'s fall ended a 1,000-year empire and gave the Ottomans the most strategically located city in the world — bridging Europe and Asia, controlling the Black Sea entrance. The AP exam connects this to European sea-route exploration: Ottoman control of eastern trade routes motivated Portuguese and Spanish search for maritime alternatives.'
          },
          {
            question: 'The devshirme system (collecting Christian boys for Ottoman imperial service) was significant because it:',
            options: [
              'It produced janissaries and officials whose careers depended entirely on the sultan, bypassing the Muslim nobility',
              'It was mainly a religious conversion campaign with no real role in staffing the army or government',
              'It supplied cavalry officers who received hereditary land grants and passed their estates to their sons',
              'It recruited the sons of prominent Turkish Muslim families, binding the old nobility more tightly to the sultan\'s court'
            ],
            correctAnswer: 0,
            explanation: 'The devshirme\'s genius was political: by recruiting from non-Muslim boys who had no family connections to Ottoman Muslim nobility, the sultan created officials whose loyalty was to him personally. They had no alternative power base, no family inheritance claims, no local noble allegiance — total imperial dependence was their defining characteristic.'
          }
        ]
      }
    },
    {
      id: 'whlbe2-content',
      type: 'text' as const,
      content: `
## 📖 The Ottoman Empire

> **Rise and Gunpowder**

The Ottomans were a small Turkic principality in Anatolia c. 1299 that expanded using gunpowder technology:

| Date | Event | Significance |
|------|-------|-------------|
| **1299** | Ottoman state founded | Small Anatolian principality |
| **1389** | Battle of Kosovo | Defeated Serbian coalition; dominant in Balkans |
| **1453** | Conquest of Constantinople | Ended Byzantine Empire; gained Bosphorus control |
| **1517** | Conquered Egypt | Added Mamluk wealth; claimed Caliphate |
| **1529** | First Siege of Vienna | Maximum westward extent; repelled |
| **1571** | Battle of Lepanto | Naval defeat by the Holy League (Spain, Venice, the Papacy); Mediterranean limits established |

> **Governance: Devshirme and Millet**

Ottoman administrative innovations enabled governing a diverse empire:

- **Devshirme:** Christian boys collected as tax; educated as Muslims; served as janissaries (elite military) or bureaucrats; loyal to sultan personally
- **Janissaries:** Devshirme-trained infantry; used gunpowder weapons; more effective than traditional cavalry
- **Millet system:** Non-Muslim communities (Greek Orthodox, Armenian, Jewish) governed their internal affairs through their religious leaders; paid jizya; could not hold highest offices but maintained communal autonomy
- **Result:** Multi-religious, multi-ethnic empire functioned with relative stability for centuries

> **Culture and Economy**

- **Süleiman the Magnificent (r. 1520–1566):** Peak of Ottoman power; patron of Islamic architecture (Süleymaniye Mosque); legal reforms (*kanun* law); controlled most lucrative eastern trade routes
- **Istanbul (Constantinople):** Capital became cosmopolitan center; population 500,000+ by 1600 — largest city in Europe or the Middle East
- **Economic geography:** Controlled strategic straits (Bosphorus, Dardanelles), taxing trade between Mediterranean and Black Sea

> **AP Comparison Anchor**

- **Ottomans vs. Safavids:** Both Islamic empires; Ottoman Sunni, Safavid Shia — creating sustained religious conflict; both used gunpowder armies
- **Devshirme vs. Chinese exam system:** Both created loyal administrative classes; devshirme based on royal collection, exam system on meritocratic testing; both bypassed traditional aristocracy
      `
    },
    {
      id: 'whlbe2-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Janissaries (devshirme-trained infantry) gave the Ottomans a military advantage because they:',
            options: [
              'Were disciplined gunpowder troops loyal to the sultan personally, not to independent noble patrons',
              'Were heavy cavalry archers drawn from the Turkish tribes that had founded the Ottoman state',
              'Were recruited from Muslim noble families, giving them strong religious and dynastic loyalty',
              'Were mercenaries hired from Venice and Genoa who brought Italian siege expertise with them'
            ],
            correctAnswer: 0,
            explanation: 'Janissaries combined professional training, gunpowder weaponry (early firearms and cannon), and personal loyalty to the sultan (their entire career and identity depended on imperial service). This made them more effective than the traditional Turkish cavalry (*sipahi*) whose loyalty was more conditional and whose tactics were less suited to siege warfare.'
          },
          {
            question: 'The Ottoman millet system\'s most important function was:',
            options: [
              'Letting non-Muslim communities run their own internal affairs under their religious leaders',
              'Requiring Christians and Jews to convert to Islam before they could own land or pay lower taxes',
              'Organizing the empire\'s Muslim subjects into military districts that supplied janissary recruits',
              'Giving each religious community elected seats in an imperial assembly that approved new taxes'
            ],
            correctAnswer: 0,
            explanation: 'The millet system was pragmatic imperial administration: the empire could not possibly govern millions of Christian and Jewish subjects using only Islamic legal institutions. By delegating internal governance to religious leaders (Greek Orthodox Patriarch, Armenian Patriarch, Chief Rabbi), the Ottomans maintained control through taxation and military service while reducing costly administrative complexity.'
          },
          {
            question: 'The Ottoman Empire\'s control of Constantinople and eastern Mediterranean trade routes after 1453 most directly caused:',
            options: [
              'Portugal and Spain to intensify their search for sea routes to Asia around Africa and across the Atlantic',
              'Venice and Genoa to abandon Mediterranean commerce and shift to overland routes through Russia',
              'Ming China to launch Zheng He\'s voyages in order to reopen direct sea routes to European ports',
              'The Ottomans to close every eastern route to Christian merchants, ending European spice imports for a century'
            ],
            correctAnswer: 0,
            explanation: 'The AP causation chain: Ottoman control → higher tolls on eastern trade → European commercial disadvantage → motivation for sea routes → Portuguese Africa circumnavigation (1488, 1498) → Spanish Caribbean exploration (1492). This chain directly connects AP Unit 3 (land-based empires) to Unit 4 (exploration and Atlantic world).'
          }
        ]
      }
    },
    {
      id: 'whlbe2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each Ottoman feature to its correct description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Ottoman system of recruiting Christian boys for imperial service who became elite soldiers and administrators was the ___',
            options: ['Devshirme', 'Millet system', 'Janissary corps', 'Kanun law']
          },
          {
            label: 'The Ottoman policy allowing non-Muslim communities to govern their internal affairs through their own religious leaders was the ___',
            options: ['Millet system', 'Devshirme', 'Jizya', 'Waqf']
          },
          {
            label: 'The Ottoman sultan known as "the Magnificent" who represented the empire\'s peak power and patronized the Süleymaniye Mosque was ___',
            options: ['Süleiman I', 'Mehmed II', 'Selim I', 'Bayezid II']
          }
        ],
        correctAnswers: ['Devshirme', 'Millet system', 'Süleiman I'],
        hint1: 'Collection of Christian boys — military and administrative elite',
        hint2: 'Religious community autonomy — dhimmi system in Ottoman form',
        hint3: 'r. 1520-1566 — peak Ottoman power — law and architecture',
        explanation: 'The devshirme created a loyal administrative class with no alternative power base. The millet system enabled multi-religious governance by delegating internal affairs to religious communities. Süleiman\'s reign represented the Ottoman peak — military expansion, legal consolidation, and architectural achievement simultaneously.'
      }
    },
    {
      id: 'whlbe2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks how the Ottoman Empire used both coercive power and accommodation to maintain control. Which answer demonstrates the strongest reasoning?',
            options: [
              'Janissary armies conquered new lands, then millets and the devshirme made ruling them cheaper than constant force',
              'The Ottomans relied on force alone, ruling non-Muslims through janissary garrisons in every province',
              'Accommodation replaced force entirely, since the sultans disbanded their armies once a region was won',
              'Conversion was the main tool, as millets existed to bring Christians and Jews into Islam over time'
            ],
            correctAnswer: 0,
            explanation: 'This argument demonstrates AP sophistication by showing HOW conquest and governance work differently: conquest requires overwhelming force, but ongoing governance requires accommodation to be sustainable. The Ottoman combination — gunpowder conquest + millet accommodation — is a model of imperial governance analysis that AP rewards.'
          },
          {
            question: 'Comparing the Ottoman devshirme to the Chinese civil service exam system, which statement is most historically accurate?',
            options: [
              'Both produced loyal officials who curbed hereditary aristocrats, one by drafting outsiders and one by testing insiders',
              'Both recruited through competitive written exams, given in Turkish for one and Classical Chinese for the other',
              'The devshirme drafted Muslim noble sons, just as the exams were open only to sons of the gentry',
              'The exam system recruited mainly from conquered non-Chinese peoples, mirroring how the devshirme drew Christian outsiders'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP points by identifying the shared function (reducing aristocratic power, creating loyal bureaucrats) while specifying the different mechanisms (outside collection vs. inside testing). Both outcomes were similar; the processes differed fundamentally — demonstrating that similar problems (how to govern a large empire) can be solved through very different institutional innovations.'
          }
        ]
      }
    }
  ]
}
