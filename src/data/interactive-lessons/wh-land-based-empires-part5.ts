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
            question: 'Which best describes the Manchu (Qing) approach to governing Han Chinese majority?',
            options: [
              'A dual strategy of cultural accommodation (restoring Confucian exams, adopting Chinese governance) combined with ethnic coercion (mandatory queues, dual appointments ensuring Manchu oversight) that maintained Manchu political dominance while reducing cultural resistance',
              'Complete elimination of all Chinese cultural practices',
              'Immediate full assimilation of Manchu into Han Chinese identity',
              'Governing China through the same nomadic tribal structures used on the steppe'
            ],
            correctAnswer: 0,
            explanation: 'The Qing governance model is a model AP example of conquerors adapting to the conquered: they adopted Chinese bureaucracy, language, and culture in public while maintaining ethnic privilege (dual appointments, marriage restrictions) in political structures. This combination of adaptation and dominance enabled a 2% ethnic minority to govern a massive empire for 268 years.'
          },
          {
            question: 'The "military revolution" in European states c. 1500-1700 gave European armies an advantage over Asian land-based empires because:',
            options: [
              'Constant inter-state warfare within Europe created continuous pressure for military innovation (improved firearms, artillery, tactics, fortifications) that land-based empires with centralized military institutions resisted changing',
              'European armies were always numerically superior',
              'Land-based empires had no gunpowder weapons',
              'Asian rulers were philosophically opposed to military development'
            ],
            correctAnswer: 0,
            explanation: 'This explanation is central to AP Unit 3-4 analysis: Europe\'s fragmentation into competing states created evolutionary pressure for military innovation, while the Ottoman janissaries and Mughal mansabdars were institutional vested interests resistant to reform. The result was an accelerating gap in military effectiveness by the 18th century.'
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
            question: 'The Qing Dynasty\'s requirement that Han Chinese men wear the Manchu queue (shaved head, braid) was primarily:',
            options: [
              'A political submission symbol — forcing visible public compliance with Manchu authority, making any resistance immediately identifiable',
              'A hygienic regulation with no political significance',
              'A religious practice adopted from Buddhism',
              'A temporary measure abandoned within the first generation of Qing rule'
            ],
            correctAnswer: 0,
            explanation: 'The queue requirement was political theater: "shave or die" made visible submission to Manchu authority a daily act. It was deeply humiliating to Han Chinese (Confucian tradition held the body sacred). The thousands who died rather than comply, and the long-term Han resentment of the queue requirement, demonstrate how even symbolic acts of political submission carry enormous emotional weight.'
          },
          {
            question: 'The Mughal mansabdar system differed most importantly from European feudalism in that:',
            options: [
              'Mansabdar positions were not hereditary — they died with the official, preventing the development of an entrenched hereditary noble class and keeping officials dependent on continued imperial favor',
              'Mansabdars had no military responsibilities',
              'The system was based on religious qualification rather than imperial appointment',
              'Only non-Muslims could serve as mansabdars'
            ],
            correctAnswer: 0,
            explanation: 'The non-hereditary nature of mansabdar positions is the key AP distinction from European feudalism: European noble titles and land were inherited, creating permanent power centers independent of the king. Mansabdars had to earn their positions in each generation, keeping them dependent on the emperor. This was analogous to (though independent of) the Chinese civil service system\'s meritocratic principle.'
          },
          {
            question: 'Ottoman decline after 1700 was most directly caused by:',
            options: [
              'The janissary corps\' political power blocking military modernization, while European states developed superior military technology through constant inter-state warfare',
              'The complete collapse of Ottoman trade networks',
              'Mass conversion of Ottomans from Islam to Christianity',
              'The Ottoman Empire voluntarily surrendering its territories to European powers'
            ],
            correctAnswer: 0,
            explanation: 'The janissary paradox: created to be a loyal, professional force, by the 17th-18th century they had become a political institution resisting any reform that threatened their privileges. Ottoman sultans who tried to modernize the military faced janissary revolts. This institutional resistance to change, combined with European military superiority, created the "sick man of Europe" dynamic of the 19th century.'
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
              'While the Ottoman, Mughal, Safavid, and Qing empires used different specific instruments, all shared three convergent strategies: gunpowder military force to conquer, centralized administrative systems that bypassed traditional aristocracy, and religious or ideological legitimation tailored to their specific populations — suggesting that empire-building at this scale had common structural requirements regardless of cultural context',
              'All land-based empires used completely different, incomparable methods',
              'Only European empires used systematic methods; Asian empires relied entirely on military force',
              'Religious legitimation was not used by any major land-based empire'
            ],
            correctAnswer: 0,
            explanation: 'This thesis demonstrates AP sophistication: acknowledging variation (different specific instruments) while arguing for convergence (three shared strategies), naming all four empires, and articulating a structural principle (empire-building at scale has common requirements). This sets up a cross-empire comparison essay that earns the highest AP rubric scores.'
          },
          {
            question: 'What is the most historically accurate AP comparison between the Qing Dynasty\'s treatment of ethnic diversity and the Ottoman millet system?',
            options: [
              'Both empires used accommodation policies for non-dominant groups (Han Chinese in Qing; non-Muslims in Ottoman), but the Qing\'s accommodation was based on ethnic-administrative integration while the Ottoman millet system was based on religious community autonomy — different mechanisms for the same imperial problem of governing diverse populations',
              'The two systems were identical in every respect',
              'The Qing had no accommodation policies for Han Chinese',
              'The Ottoman millet system excluded all non-Muslim groups from any autonomy'
            ],
            correctAnswer: 0,
            explanation: 'Comparing Qing and Ottoman approaches to diversity demonstrates AP analytical depth: both solved the same problem (diverse empire governance) through different institutional designs. The Qing integrated Han officials while maintaining ethnic oversight; the Ottomans segregated religious communities while allowing internal autonomy. Same problem, different solutions — exactly the kind of comparison AP LEQ rewards.'
          }
        ]
      }
    }
  ]
}
