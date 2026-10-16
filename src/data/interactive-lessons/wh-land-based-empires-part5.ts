export const whLandBasedEmpiresPart5Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlbe5-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (c. 1450–1750)

**Part 5 of 7 — State Building: Methods and Comparisons**

---

> 🔑 **Key Concept:** See content section for main AP concepts for this part.
      `
    },
    {
      id: 'whlbe5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ottoman sultans claimed the title of caliph, the Safavid shahs promoted Shia Islam, and Qing emperors patronized Tibetan Buddhism. These policies all show rulers using',
            options: [
              'religious courts in place of bureaucracies and standing armies',
              'one shared faith imposed on the subjects of every Asian empire',
              'religion to justify their rule and to build loyalty among subjects',
              'religion to end all political and trade rivalry with European states'
            ],
            correctAnswer: 2,
            explanation: 'Each dynasty used religion as a source of legitimacy: the Ottomans as protectors of Sunni Islam and its holy cities, the Safavids as champions of Shia Islam, and the Qing as patrons of the lamas in Mongolia and Tibet. None of them replaced bureaucracies with religious courts, they promoted different faiths, and religion did not end their rivalries with Europe.'
          },
          {
            question: 'Why did gunpowder weapons help the rulers of land-based empires centralize power?',
            options: [
              'Gunpowder made cavalry useless almost overnight, so nomadic peoples vanished from Asian politics by 1500',
              'Cannon could breach the walls of regional lords, and costly firearms favored rulers who could pay for them',
              'Firearms were cheap enough for every village to own, which spread military power evenly across society',
              'Asian rulers bought all their guns from Portugal, which turned them into loyal allies of the Portuguese'
            ],
            correctAnswer: 1,
            explanation: 'Siege cannon broke the fortresses of rival nobles and cities, as at Constantinople in 1453, and artillery and trained musket infantry were expensive, so they favored central treasuries over local lords. Cavalry stayed important, guns were not evenly spread, and these empires cast their own cannon rather than depending on Portugal.'
          }
        ]
      }
    },
    {
      id: 'whlbe5-content',
      type: 'text' as const,
      content: `

## 📖 Land-Based Empire State Building: Comparisons

> **Common Features Across Land-Based Empires**

AP Unit 3 land-based empires share key governance features:

| Feature | How Used | Examples |
|---------|---------|---------|
| **Gunpowder weapons** | Conquest; centralizing power against nobles | All three Islamic empires; Qing |
| **Bureaucratic centralization** | Reduce noble/regional power | Devshirme (Ottoman), exam system (Qing), mansabdar (Mughal) |
| **Religious legitimation** | Justify rule; create loyalty | Ottoman Caliphate claim; Safavid Shia; Akbar's tolerance; Qing Buddhist patronage |
| **Diplomatic marriage** | Alliance building | Akbar and Rajput princesses; Qing and Mongolian nobles |

> **The Mansabdar System (Mughal)**

Akbar created the mansabdar system to govern the Mughal empire:

- Officials assigned numerical ranks (mansab) determining salary, troops owed, and status
- Positions were NOT hereditary — died with the official
- Combined military and civil functions
- Created loyal officials dependent on imperial favor (like devshirme without the slavery element)

> **AP Comparison Anchor**

- **All land-based empires:** Used some combination of gunpowder military + centralized administration + religious/cultural legitimation
- **Key variable:** How did each empire handle the diversity problem? (Ottomans → millet; Mughals → tolerance vs. orthodoxy; Qing → dual appointments)
- **Decline pattern:** All eventually declined as European commercial and military competition intensified

      `
    },
    {
      id: 'whlbe5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In this lesson\'s comparison of land-based empires, the "diversity problem" refers to the challenge of',
            options: [
              'finding enough soldiers to defend coastlines against European navies',
              'ruling peoples of many religions and ethnicities under one dynasty',
              'choosing one official language for trade with European merchants',
              'dividing conquered land equally among all of a ruler\'s many sons'
            ],
            correctAnswer: 1,
            explanation: 'Each empire ruled subjects who did not share the dynasty\'s religion or ethnicity, and each found its own answer: the Ottoman millet system, Mughal policy that swung between Akbar\'s tolerance and Aurangzeb\'s orthodoxy, and Qing dual appointments. Coastal defense, trade languages and inheritance were real issues, but they are not what the term describes.'
          },
          {
            question: 'The Mughal mansabdar system differed most importantly from European feudalism in that:',
            options: [
              'Mansabdar ranks were not hereditary, keeping officials dependent on imperial favor',
              'Mansabdars had no military duties and served purely as civilian tax clerks for the court',
              'Mansabdar posts were awarded on religious grounds rather than by appointment from the emperor',
              'Only non-Muslims could hold a mansab, keeping Muslim nobles out of the imperial service'
            ],
            correctAnswer: 0,
            explanation: 'The non-hereditary nature of mansabdar positions is the key AP distinction from European feudalism: European noble titles and land were inherited, creating permanent power centers independent of the king. Mansabdars had to earn their positions in each generation, keeping them dependent on the emperor. This was analogous to (though independent of) the Chinese civil service system\'s meritocratic principle.'
          },
          {
            question: 'Which comparison of the Mughal mansabdar system and the Ottoman devshirme is most accurate?',
            options: [
              'Both passed offices from father to son, creating hereditary noble houses like those of European feudalism',
              'Both recruited officials only through written exams on the Confucian classics and on Islamic law',
              'Both were abolished by Akbar, who replaced them with tax farms run by European trading companies',
              'Both made officials depend on the ruler, but only one took enslaved Christian boys as its recruits'
            ],
            correctAnswer: 3,
            explanation: 'Both systems created officials whose position came from the ruler rather than from inherited land; the difference is that the devshirme took Christian boys from Balkan families as slaves of the sultan, while mansabdars were free men granted ranks. Neither was hereditary, neither used Confucian exams, and Akbar created the mansabdar system rather than abolishing it.'
          }
        ]
      }
    },
    {
      id: 'whlbe5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each empire\'s governance feature to its correct description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Mughal system of non-hereditary official ranks determining salary and military service was the ___',
            options: ['Mansabdar system', 'Devshirme system', 'Millet system', 'Zamindar system']
          },
          {
            label: 'The Qing (Manchu) practice of placing both a Manchu and a Han official in each major administrative position was ___',
            options: ['Dual appointments', 'Civil service exams', 'Banner system only', 'Millet system']
          },
          {
            label: 'The Ottoman military corps that eventually blocked imperial military reform through political resistance was the ___',
            options: ['Janissary corps', 'Sipahi cavalry', 'Mansabdar system', 'Ghulam infantry']
          }
        ],
        correctAnswers: ['Mansabdar system', 'Dual appointments', 'Janissary corps'],
        hint1: 'Mughal non-hereditary official ranks — Akbar\'s innovation',
        hint2: 'Qing oversight system — Manchu + Han together in each post',
        hint3: 'Ottoman elite infantry — became political obstacle to reform',
        explanation: 'The mansabdar system kept Mughal officials dependent on imperial favor by making positions non-hereditary. Qing dual appointments maintained Manchu oversight without excluding essential Han administrative expertise. The janissary corps\' evolution from loyal imperial force to conservative political institution blocking modernization illustrates how institutions created to serve rulers can become obstacles to change.'
      }
    },
    {
      id: 'whlbe5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks: "Evaluate the extent to which land-based empires used similar methods to consolidate power c. 1450-1750." Which thesis is strongest?',
            options: [
              'The four great land empires used different tools but shared gunpowder conquest, centralized rule and religious legitimation',
              'The four great land empires used such different tools that no meaningful comparison among them is possible',
              'The four great land empires relied on military force alone, while only European states built real bureaucracies',
              'Religious legitimation played no part in any land empire, which ruled through cavalry and tribute alone'
            ],
            correctAnswer: 0,
            explanation: 'This thesis is strongest because it acknowledges variation (different tools) while arguing for convergence: the Ottoman, Mughal, Safavid and Qing empires all paired gunpowder conquest with centralized administration that bypassed traditional aristocracy and with religious or ideological legitimation. That structural claim sets up a cross-empire comparison essay that earns the highest AP rubric scores.'
          },
          {
            question: 'What is the most accurate AP comparison between the Ottoman millet system and Mughal religious policy?',
            options: [
              'Both forced non-Muslims to convert, so neither empire still had large Christian or Hindu populations by 1700',
              'The Ottomans banned Christianity and Judaism, while the Mughals made Hinduism the official state religion',
              'Both let non-Muslims keep their faiths, but Mughal rule swung from Akbar\'s tolerance to Aurangzeb\'s orthodoxy',
              'Both handed their religious courts to European missionaries, who governed non-Muslim subjects for the rulers'
            ],
            correctAnswer: 2,
            explanation: 'The Ottomans let Christian and Jewish communities run their own religious and legal affairs through millets, while the Mughal Muslim minority ruled a Hindu majority: Akbar abolished the jizya and courted Hindu elites, and Aurangzeb reimposed it in 1679. Neither empire forced mass conversion, neither banned these faiths, and neither handed courts to missionaries.'
          }
        ]
      }
    }
  ]
}
