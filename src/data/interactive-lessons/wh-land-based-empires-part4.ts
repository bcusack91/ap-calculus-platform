export const whLandBasedEmpiresPart4Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlbe4-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (c. 1450–1750)

**Part 4 of 7 — The Qing Dynasty and Manchu Rule**

---

> 🔑 **Key Concept:** See content section for main AP concepts for this part.
      `
    },
    {
      id: 'whlbe4-quiz1',
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
            question: 'Which statement best describes the territorial results of Qing expansion between 1644 and the 1750s?',
            options: [
              'The Qing lost Taiwan and Mongolia to European navies, shrinking China well below its old Ming borders',
              'The Qing conquered Taiwan and much of Inner Asia, building the largest Chinese state up to that time',
              'The Qing stayed inside the Great Wall and refused to send its armies into Inner Asia or across the sea',
              'The Qing traded Xinjiang and Tibet to the Safavids in return for Persian silver and cavalry horses'
            ],
            correctAnswer: 1,
            explanation: 'Under emperors such as Kangxi and Qianlong, the Qing took Taiwan (1683) and brought Mongol lands, Tibet and Xinjiang under its rule, leaving borders close to those of modern China. It did not lose these lands to Europeans in this era, it campaigned far beyond the Great Wall, and it made no such trade with the Safavids.'
          }
        ]
      }
    },
    {
      id: 'whlbe4-content',
      type: 'text' as const,
      content: `

## 📖 The Qing Dynasty (1644–1912)

> **Manchu Conquest of China**

The Manchu (from northeastern China) conquered the Ming Dynasty in 1644, founding the Qing:

- **How they conquered:** Ming dynasty weakened by famine, peasant rebellions, and bureaucratic corruption; Manchu military opportunism
- **Ethnic minority rule:** Manchu were about 2% of China's population governing 98% Han Chinese
- **Adaptation strategy:** Adopted Chinese governance wholesale — Confucian examination system, Chinese bureaucracy, Chinese cultural forms

> **Governance: Coercion and Accommodation**

| Coercive Measures | Accommodating Measures |
|------------------|----------------------|
| Required Han men to shave front of head and wear Manchu queue (braid) | Restored Confucian civil service exams |
| Manchus held dual appointments with Han in every major position | Accepted Chinese culture, language, literature |
| Banned intermarriage between Manchu and Han initially | Adopted Chinese imperial rituals and Confucian ideology |

> **Expansion**

The Qing dramatically expanded Chinese territory:

- Conquered Mongolia, Xinjiang (Central Asia), Tibet, Taiwan
- Created the largest Chinese empire in history — still roughly the borders of modern China
- Used Inner Asian alliances (Mongolian Buddhist networks) as legitimation strategy in non-Chinese regions

> **AP Comparison Anchor**

- **Manchu vs. Mongol conquest of China:** Both non-Chinese rulers; Manchu more thoroughly adapted to Chinese governance; Mongols maintained more ethnic separation in Yuan Dynasty
- **Qing governance model:** Classic example of conquerors adopting conquered culture while maintaining political dominance — the AP "reverse acculturation" pattern

      `
    },
    {
      id: 'whlbe4-input',
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
            question: 'Compared with the Mongol Yuan dynasty, the Manchu Qing dynasty governed China mainly by',
            options: [
              'abolishing the Confucian exams and barring Han Chinese from every post in the central government',
              'ruling through Mongol khans, since Manchu emperors refused to take part in Chinese court ritual',
              'keeping Confucian exams and Han officials while guarding Manchu power',
              'moving the capital to the steppe and leaving daily government to Persian and Central Asian advisers'
            ],
            correctAnswer: 2,
            explanation: 'The Qing adapted more fully to Chinese governance than the Yuan had: they kept the Confucian examinations and staffed the bureaucracy with Han scholar-officials, while dual appointments and the queue protected Manchu dominance. The Yuan, by contrast, suspended the exams for decades and favored Mongols and Central Asians over Han Chinese.'
          },
          {
            question: 'In Mongolia and Tibet, Qing emperors supported Tibetan Buddhism and its lamas. This policy is best understood as',
            options: [
              'a sign that the Qing had given up Confucian ritual in China itself',
              'an attempt to convert Han Chinese peasants from Confucianism to Buddhism',
              'a reaction to Jesuit missionaries, who had converted most of the Mongol nobility',
              'a way to win loyalty in non-Chinese regions on terms that local elites respected'
            ],
            correctAnswer: 3,
            explanation: 'The Qing presented themselves differently to different subjects: Confucian Sons of Heaven to Han Chinese, patrons of Tibetan Buddhism to Mongols and Tibetans. Supporting the lamas gave the dynasty legitimacy in Inner Asia. The Qing kept Confucian ritual in China, did not try to convert Han peasants, and Jesuits had little influence among the Mongols.'
          }
        ]
      }
    },
    {
      id: 'whlbe4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each Qing policy to its correct name.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Qing order that Han men shave the front of the head and wear a Manchu braid was the ___',
            options: ['Queue order', 'Dual appointments', 'Civil service exams', 'Millet system']
          },
          {
            label: 'The Qing (Manchu) practice of placing both a Manchu and a Han official in each major administrative position was ___',
            options: ['Dual appointments', 'Civil service exams', 'Banner system only', 'Millet system']
          },
          {
            label: 'The Qing system that recruited Han scholar-officials through tests on the Confucian classics was the ___',
            options: ['Civil service exams', 'Queue order', 'Dual appointments', 'Devshirme system']
          }
        ],
        correctAnswers: ['Queue order', 'Dual appointments', 'Civil service exams'],
        hint1: 'A hairstyle imposed as a visible sign of submission',
        hint2: 'Qing oversight system — Manchu + Han together in each post',
        hint3: 'The Ming-era route into government that the Qing restored',
        explanation: 'The queue order made submission to Manchu rule visible on every Han man. Dual appointments kept Manchu oversight without losing Han administrative skill. Restoring the Confucian civil service exams won over the Han scholar-gentry, the class the Qing needed to run the empire. Coercion and accommodation worked together.'
      }
    },
    {
      id: 'whlbe4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ asks how the Qing kept power over a Han Chinese majority c. 1644–1750. Which thesis is strongest?',
            options: [
              'The Qing relied on force alone, ruling through Manchu soldiers and banning Han Chinese from any government role',
              'The Qing paired accommodation such as Confucian exams with coercion such as the queue order',
              'The Qing relied on persuasion alone, adopting Chinese culture so fully that Manchu power soon disappeared',
              'The Qing held power mainly through European advisers, who ran the army and collected taxes for the court'
            ],
            correctAnswer: 1,
            explanation: 'The strongest thesis names both halves of Qing strategy: accommodation (restored exams, Han officials, Confucian ritual) and coercion (the queue order, dual appointments, early limits on Manchu-Han intermarriage). Han officials held many posts, Manchu identity and privilege survived, and European advisers such as the Jesuits served at court but did not run the state.'
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
