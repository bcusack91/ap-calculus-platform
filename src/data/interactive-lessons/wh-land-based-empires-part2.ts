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
              'It ended the Byzantine Empire and gave the Ottomans control of the strategic Bosphorus strait, making Istanbul (Constantinople) the center of a vast empire controlling eastern Mediterranean trade routes',
              'It converted all Byzantine Christians to Islam within one year',
              'It was the Ottoman Empire\'s first military victory of any kind',
              'It had no impact on European commercial patterns'
            ],
            correctAnswer: 0,
            explanation: 'Constantinople\'s fall ended a 1,000-year empire and gave the Ottomans the most strategically located city in the world — bridging Europe and Asia, controlling the Black Sea entrance. The AP exam connects this to European sea-route exploration: Ottoman control of eastern trade routes motivated Portuguese and Spanish search for maritime alternatives.'
          },
          {
            question: 'The devshirme system (collecting Christian boys for Ottoman imperial service) was significant because it:',
            options: [
              'Created a loyal administrative and military class (janissaries and bureaucrats) whose careers depended entirely on the sultan, bypassing the traditional Muslim nobility and creating unprecedented imperial centralization',
              'Was a form of religious persecution with no administrative function',
              'Only produced military soldiers with no civilian administrative role',
              'Was identical to the Chinese civil service examination system'
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
| **1571** | Battle of Lepanto | Naval defeat by Spain; Mediterranean limits established |

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
              'Were trained professionals using gunpowder weapons who were loyal to the sultan personally, unlike traditional cavalry nobility who had independent power bases and less discipline',
              'Were the first army in history to use any weapons at all',
              'Were entirely cavalry with no infantry component',
              'Were recruited from the Muslim nobility, ensuring religious loyalty'
            ],
            correctAnswer: 0,
            explanation: 'Janissaries combined professional training, gunpowder weaponry (early firearms and cannon), and personal loyalty to the sultan (their entire career and identity depended on imperial service). This made them more effective than the traditional Turkish cavalry (*sipahi*) whose loyalty was more conditional and whose tactics were less suited to siege warfare.'
          },
          {
            question: 'The Ottoman millet system\'s most important function was:',
            options: [
              'Enabling the governance of a religiously diverse empire by giving non-Muslim communities (Greek Orthodox, Armenian, Jewish) autonomy over internal affairs, reducing the administrative burden of imposing uniform Islamic law on millions of Christians and Jews',
              'Forcibly converting all conquered peoples to Islam within one generation',
              'Eliminating all non-Muslim populations from Ottoman territory',
              'Creating a democratic system of representation for minority groups'
            ],
            correctAnswer: 0,
            explanation: 'The millet system was pragmatic imperial administration: the empire could not possibly govern millions of Christian and Jewish subjects using only Islamic legal institutions. By delegating internal governance to religious leaders (Greek Orthodox Patriarch, Armenian Patriarch, Chief Rabbi), the Ottomans maintained control through taxation and military service while reducing costly administrative complexity.'
          },
          {
            question: 'The Ottoman Empire\'s control of Constantinople and eastern Mediterranean trade routes after 1453 most directly caused:',
            options: [
              'European maritime powers (Portugal, Spain) to intensify their search for alternative sea routes to Asia, eventually leading to Portuguese circumnavigation of Africa and Spanish exploration of the Americas',
              'An immediate end to all European trade with Asia',
              'The Ottoman Empire to become the world\'s largest Christian kingdom',
              'Chinese traders to begin sailing directly to Europe'
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
              'The Ottomans used coercive military power (janissary army, gunpowder weapons) to conquer territories, then employed administrative accommodation (millet system for religious minorities, devshirme creating loyal bureaucracy) to govern diverse populations at lower ongoing cost than pure military domination would require',
              'The Ottomans only used military force with no administrative accommodation',
              'The Ottomans only used accommodation with no coercive force',
              'The Ottomans had no system for governing non-Muslim populations'
            ],
            correctAnswer: 0,
            explanation: 'This argument demonstrates AP sophistication by showing HOW conquest and governance work differently: conquest requires overwhelming force, but ongoing governance requires accommodation to be sustainable. The Ottoman combination — gunpowder conquest + millet accommodation — is a model of imperial governance analysis that AP rewards.'
          },
          {
            question: 'Comparing the Ottoman devshirme to the Chinese civil service exam system, which statement is most historically accurate?',
            options: [
              'Both created loyal administrative classes that reduced the power of traditional hereditary aristocracy, but through fundamentally different mechanisms: the devshirme through royal collection of non-Muslim outsiders, the exam system through competitive testing of educated insiders',
              'Both systems were identical in every functional respect',
              'The devshirme was only a military system with no administrative function',
              'The exam system recruited from non-Chinese populations, like the devshirme'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns AP points by identifying the shared function (reducing aristocratic power, creating loyal bureaucrats) while specifying the different mechanisms (outside collection vs. inside testing). Both outcomes were similar; the processes differed fundamentally — demonstrating that similar problems (how to govern a large empire) can be solved through very different institutional innovations.'
          }
        ]
      }
    }
  ]
}
