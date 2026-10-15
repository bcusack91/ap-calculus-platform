export const whLandBasedEmpiresPart6Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlbe6-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (c. 1450–1750)

**Part 6 of 7 — Decline of Land-Based Empires**

---

> 🔑 **Key Concept:** See content section for main AP concepts for this part.
      `
    },
    {
      id: 'whlbe6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes the Manchu (Qing) approach to governing Han Chinese majority?',
            options: [
              'Restoring the Confucian exams and bureaucracy but enforcing the queue and paired Manchu-Han posts',
              'Abolishing Confucian exams and Chinese customs in favor of Manchu law and the Manchu language',
              'Merging fully into Han society, so that Manchu identity and banner privileges vanished early on',
              'Ruling through steppe tribal councils and leaving the old Ming bureaucracy entirely dismantled'
            ],
            correctAnswer: 0,
            explanation: 'The Qing governance model is a model AP example of conquerors adapting to the conquered: they adopted Chinese bureaucracy, language, and culture in public while maintaining ethnic privilege (dual appointments, marriage restrictions) in political structures. This combination of adaptation and dominance enabled a 2% ethnic minority to govern a massive empire for 268 years.'
          },
          {
            question: 'The "military revolution" in European states c. 1500-1700 gave European armies an advantage over Asian land-based empires because:',
            options: [
              'Wars among rival European states drove innovations that centralized empires resisted',
              'European states always fielded far larger armies than the Asian empires could raise or supply',
              'Asian land-based empires never adopted gunpowder, leaving their armies with bows and cavalry alone',
              'Asian rulers rejected military change on religious grounds, while European states embraced it'
            ],
            correctAnswer: 0,
            explanation: 'This explanation is central to AP Unit 3-4 analysis: Europe\'s fragmentation into competing states created evolutionary pressure for military innovation, while the Ottoman janissaries and Mughal mansabdars were institutional vested interests resistant to reform. The result was an accelerating gap in military effectiveness by the 18th century.'
          }
        ]
      }
    },
    {
      id: 'whlbe6-content',
      type: 'text' as const,
      content: `

## 📖 Decline of the Land-Based Empires

> **Common Patterns of Decline**

Despite their initial strength, all major land-based empires experienced decline by c. 1700–1800:

| Empire | Primary Decline Factors |
|--------|------------------------|
| **Ottoman** | Military stagnation (janissaries resisted reform); trade bypassed empire (sea routes); European military superiority after 1700 |
| **Safavid** | Afghan invasion 1722; Shia-Sunni conflict; succession crises |
| **Mughal** | Aurangzeb's policies → Hindu/Sikh rebellions; British East India Company penetration |
| **Qing** | Opium Wars (1839, 1856); European military pressure; internal rebellions (Taiping, 1850-1864) |

> **The Military Technology Problem**

Land-based empires faced a systematic military disadvantage:

- European states continuously innovated gunpowder military technology through constant warfare
- Land-based empires had centralized military institutions (janissaries, mansabdars) that resisted reform
- European-trained officers and European-manufactured artillery eventually outclassed all three Islamic empires' armies
- By 1800, the "military revolution" gap between European and non-European military capacity was decisive

> **AP Comparison Anchor**

- **Why they declined:** Institutional rigidity + European military and commercial competition + internal religious/ethnic conflicts
- **CCOT:** The same gunpowder technology that built these empires eventually became their vulnerability when they couldn't maintain parity with European military innovation

      `
    },
    {
      id: 'whlbe6-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Qing Dynasty\'s requirement that Han Chinese men wear the Manchu queue (shaved head, braid) was primarily:',
            options: [
              'A political sign of submission that made any refusal to obey Manchu rule visible',
              'A hygiene rule copied from Manchu military camps with no real political meaning',
              'A Buddhist devotional custom the Qing emperors urged on all of their Han subjects',
              'A temporary wartime order that the Qing quietly dropped within one generation'
            ],
            correctAnswer: 0,
            explanation: 'The queue requirement was political theater: "shave or die" made visible submission to Manchu authority a daily act. It was deeply humiliating to Han Chinese (Confucian tradition held the body sacred). The thousands who died rather than comply, and the long-term Han resentment of the queue requirement, demonstrate how even symbolic acts of political submission carry enormous emotional weight.'
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
            question: 'Ottoman decline after 1700 was most directly caused by:',
            options: [
              'Janissary resistance to military reform as European armies kept improving through rivalry',
              'A collapse of Ottoman trade after Portugal seized the major ports of the eastern Mediterranean',
              'Mass conversion of Ottoman subjects to Christianity, which drained the army of recruits',
              'Voluntary surrender of Balkan provinces to Austria in exchange for loans to the treasury'
            ],
            correctAnswer: 0,
            explanation: 'The janissary paradox: created to be a loyal, professional force, by the 17th-18th century they had become a political institution resisting any reform that threatened their privileges. Ottoman sultans who tried to modernize the military faced janissary revolts. This institutional resistance to change, combined with European military superiority, created the "sick man of Europe" dynamic of the 19th century.'
          }
        ]
      }
    },
    {
      id: 'whlbe6-dropdown',
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
      id: 'whlbe6-applied',
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
            question: 'What is the most historically accurate AP comparison between the Qing Dynasty\'s treatment of ethnic diversity and the Ottoman millet system?',
            options: [
              'Both accommodated subject groups, the Qing via shared Han-Manchu posts and the Ottomans via religious self-rule',
              'Both used identical policies, ranking all subjects by religion and giving each faith a separate imperial legal court',
              'The Qing denied Han Chinese any official posts, unlike the Ottomans, who shared power with Christians',
              'The Ottoman millets denied non-Muslims any self-rule, unlike the Qing, who let Han provinces govern themselves'
            ],
            correctAnswer: 0,
            explanation: 'Comparing Qing and Ottoman approaches to diversity demonstrates AP analytical depth: both solved the same problem (diverse empire governance) through different institutional designs. The Qing integrated Han officials while maintaining ethnic oversight; the Ottomans segregated religious communities while allowing internal autonomy. Same problem, different solutions — exactly the kind of comparison AP LEQ rewards.'
          }
        ]
      }
    }
  ]
}
