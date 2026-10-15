export const whGlobalTapestryPart5Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whglobal5-intro',
      type: 'text' as const,
      content: `
# 🌍 The Global Tapestry (c. 1200–1450)

**Part 5 of 7 — Social Structures & Gender Across Civilizations**

---

| Section |
|---------|
| 📖 Social Hierarchies & Caste |
| Gender Norms Across Civilizations |
| Slavery & Unfree Labor |
| 📌 Comparing Social Structures |

> 🔑 **Key Concept:** Social structures — how societies organized people into hierarchies based on birth, religion, gender, and occupation — varied significantly across civilizations c. 1200–1450. AP Unit 1 asks you to compare these structures and understand how belief systems reinforced or challenged them.
      `
    },
    {
      id: 'whglobal5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The caste system in South Asia (reinforced by Hindu beliefs about dharma and karma) is significant in AP World History primarily because it:',
            options: [
              'Shows religious ideas entrenching a hierarchy that fixed occupation and status by birth',
              'Shows Delhi sultans creating a new social order that replaced the older Hindu divisions',
              'Shows a hierarchy based mainly on wealth, so merchants could buy entry to higher castes',
              'Shows Buddhist teachings spreading social equality across South Asia\'s farming villages'
            ],
            correctAnswer: 0,
            explanation: 'The caste system is a model AP example of how religious belief reinforces social hierarchy. Hinduism\'s concepts of dharma (duty according to one\'s caste) and karma (merit affecting future rebirths) made caste hierarchy appear divinely ordained and morally necessary, making social mobility extremely limited.'
          },
          {
            question: 'Foot binding in Song Dynasty China is historically significant in AP World History because it:',
            options: [
              'Shows Neo-Confucian ideals of female subordination physically enforced on elite women',
              'Shows a Mongol custom forced on Chinese women after the Yuan conquest of the south',
              'Shows a practice common to peasant women who worked long days in the rice paddies',
              'Shows a Buddhist devotional practice with no connection to Confucian ideas about women'
            ],
            correctAnswer: 0,
            explanation: 'Foot binding spread alongside Neo-Confucianism\'s emphasis on female subordination, modesty, and domestic roles. It was practiced primarily among elite women (a poor peasant woman could not bind her feet and still work in fields), making it both a marker of elite status and a mechanism of female subordination. AP prompts often ask about how belief systems shaped gender norms.'
          }
        ]
      }
    },
    {
      id: 'whglobal5-content',
      type: 'text' as const,
      content: `
## 📖 Social Structures Across Civilizations

> **Social Hierarchies & The Role of Birth**

Most pre-modern societies organized social status through birth:

| Civilization | Social Structure | Basis |
|-------------|-----------------|-------|
| **Song China** | Scholar-gentry → peasants → artisans → merchants (Confucian order ranked merchants last, despite their wealth) | Civil service exams offered limited mobility; birth still mattered |
| **Medieval Europe** | Clergy → nobles → knights → peasants (serfs) | Hereditary feudalism; Church provided separate hierarchy |
| **South Asia** | Caste system (Brahmin → Kshatriya → Vaishya → Sudra → Untouchables) | Birth; justified by Hindu dharma and karma |
| **Mali Empire** | Royal family → nobles → free commoners → enslaved people | Mix of hereditary status and control of trade wealth |

> **Gender Norms c. 1200–1450**

Patriarchal structures dominated most civilizations, but with significant variation:

- **Song China:** Neo-Confucian norms emphasized female subordination; foot binding spread among elite women; women's property rights declined; *exception:* some merchant-class women had economic agency
- **Medieval Europe:** Inheritance favored sons (primogeniture), so women usually inherited land only without brothers or held it as widows; convents offered an alternative path; noblewomen had limited political influence; peasant women worked alongside men
- **Islamic societies:** Quran gave women inheritance rights and limits on polygamy (unprecedented for the era); purdah (seclusion) varied by region and class; elite women had more restrictions than poor women who had to work
- **Sub-Saharan Africa:** More varied — some societies were matrilineal (inheritance through mother's line); women traders active in some regions

> **Slavery & Unfree Labor**

Forced labor existed in multiple forms across this period:

| Form | Where | Details |
|------|-------|--------|
| **Serfdom** | Medieval Europe | Peasants bound to land; owed labor to lord; not technically enslaved but not free |
| **Enslaved people (trans-Saharan)** | West Africa → North Africa | Enslaved Africans traded across the Sahara; served in military, households, administration |
| **Enslaved people (Indian Ocean)** | East Africa → Middle East | Swahili Coast served as source; enslaved people worked in households and agriculture |
| **Debt bondage** | South/Southeast Asia | Peasants working off debts to landlords; common but variable |

Key AP distinction: Mediterranean/Islamic slavery was more diverse in function (military, administrative, household) than later Atlantic plantation slavery

> **AP Comparison Anchor**

- **China vs. Europe:** Both patriarchal; China's exam system offered limited mobility, Europe\'s hereditary feudalism offered almost none
- **Islam vs. Confucianism on gender:** Both patriarchal, but Islam's Quran gave women more legal rights (inheritance, divorce) than Song China\'s Neo-Confucian norms
- **Slavery in context:** Pre-1450 slavery was geographically widespread but differed significantly from post-1500 plantation slavery in scale, racial categorization, and hereditary nature
      `
    },
    {
      id: 'whglobal5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What was the primary social function of foot binding in Song Dynasty China?',
            options: [
              'To mark elite status and enforce Neo-Confucian ideals of female seclusion',
              'To prepare peasant girls for long hours of transplanting rice in flooded fields',
              'To identify merchant families so that local officials could tax them more heavily',
              'To follow a Mongol court fashion introduced under the Yuan emperors'
            ],
            correctAnswer: 0,
            explanation: 'Foot binding is one of the most concrete examples of how ideology shapes bodies and social roles. Neo-Confucianism emphasized female domestic virtue and subordination; foot binding literally restricted elite women\'s mobility, making it a physical embodiment of these ideals.'
          },
          {
            question: 'How did the social structure of medieval Europe differ most fundamentally from that of Song Dynasty China?',
            options: [
              'Europe\'s nobility was hereditary, while China\'s exams offered a limited path to rank by merit',
              'Europe\'s kings could override nobles at will, while China\'s emperor shared power with the gentry',
              'Europe let merchants buy noble titles freely, while Chinese status was fixed entirely by birth',
              'Europe\'s estates were based on wealth alone, while China\'s hierarchy rested on military service'
            ],
            correctAnswer: 0,
            explanation: 'This is a classic AP comparison: Europe\'s feudal nobility was hereditary (you were born into it), while China\'s civil service exams theoretically allowed any man to achieve high government office through merit. In practice, wealthy families dominated exam preparation, but the principle of merit-based advancement was distinct.'
          },
          {
            question: 'Pre-1450 slavery in the Islamic world differed most significantly from later Atlantic plantation slavery in that:',
            options: [
              'It filled varied military and household roles and was not organized around cash crops',
              'It involved too few people to matter to the economies of the Islamic states',
              'It was a hereditary racial caste that bound enslaved people\'s descendants forever',
              'It was harsher and deadlier than the Atlantic system on the Caribbean sugar islands'
            ],
            correctAnswer: 0,
            explanation: 'Pre-1450 slavery in Islamic societies included enslaved soldiers (Mamluks), administrators, domestic servants and concubines — a range of roles. It was not primarily agricultural, not racially codified as permanently hereditary, and it was large enough to matter (enslaved soldiers even ruled Egypt). AP prompts often ask students to make these distinctions.'
          }
        ]
      }
    },
    {
      id: 'whglobal5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each social structure feature with its civilization.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The social hierarchy based on birth and justified by Hindu concepts of dharma and karma was the ___',
            options: ['Caste system', 'Feudal system', 'Scholar-gentry system', 'Tributary system']
          },
          {
            label: 'The practice of binding elite women\'s feet to enforce Neo-Confucian ideals of female subordination was ___',
            options: ['Foot binding', 'Purdah', 'Serfdom', 'The veil']
          },
          {
            label: 'The system in medieval Europe where peasants were bound to land and owed labor to lords was ___',
            options: ['Serfdom', 'Slavery', 'Caste', 'Debt bondage']
          }
        ],
        correctAnswers: ['Caste system', 'Foot binding', 'Serfdom'],
        hint1: 'Hindu religious justification',
        hint2: 'Song Dynasty China — spread with Neo-Confucianism',
        hint3: 'Unfree labor in medieval European feudalism',
        explanation: 'The caste system used Hindu religious ideology to naturalize hereditary social hierarchy. Foot binding physically enforced Neo-Confucian gender norms. Serfdom bound peasants to land in Europe\'s decentralized feudal economy — each represents a different mechanism for organizing and controlling labor and social roles.'
      }
    },
    {
      id: 'whglobal5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "Evaluate the extent to which patriarchal social structures limited women\'s roles across multiple civilizations c. 1200–1450." Which argument earns the most complexity points?',
            options: [
              'Patriarchy was nearly universal but took different forms, as Quranic inheritance rights contrasted with foot binding',
              'Patriarchy limited women everywhere in exactly the same way, since every society barred women from owning property',
              'Patriarchy was weakest in Song China, where Neo-Confucian scholars promoted the legal equality of women and men',
              'Patriarchy was absent from Islamic lands, where the Quran gave women fully equal rights with men'
            ],
            correctAnswer: 0,
            explanation: 'This argument earns complexity by comparing within the general trend (patriarchy was nearly universal) while showing meaningful differences (Islamic legal rights such as a share of inheritance vs. Neo-Confucian physical enforcement). The Quran granted women real but unequal rights, so "fully equal" is wrong, and Neo-Confucianism tightened rather than loosened female subordination.'
          },
          {
            question: 'The AP exam\'s focus on social structures c. 1200–1450 primarily asks students to understand:',
            options: [
              'How societies ranked people and used ideology, law and custom to reinforce those rankings',
              'Why every hierarchy was justified mainly by its economic efficiency and productivity',
              'How medieval hierarchies gave rise directly to modern democratic institutions',
              'How rulers counted their populations in order to set separate tax rates for each social class'
            ],
            correctAnswer: 0,
            explanation: 'The AP framework for social structures examines three things: the structure itself (who is high, who is low), the mechanism of justification (religion, philosophy, custom), and the enforcement (law, practice, ideology). Understanding all three levels produces stronger AP arguments.'
          }
        ]
      }
    }
  ]
}
