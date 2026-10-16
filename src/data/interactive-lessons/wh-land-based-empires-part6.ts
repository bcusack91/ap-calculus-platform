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
            question: 'Which development most directly marked the collapse of Safavid power in Persia?',
            options: [
              'The Ottoman conquest of Constantinople in 1453, which closed Persia\'s trade routes',
              'The Afghan invasion that captured Isfahan in 1722',
              'A British naval blockade of the Persian Gulf that began around 1600',
              'A Mughal army under Akbar that annexed Persia and deposed its shah'
            ],
            correctAnswer: 1,
            explanation: 'Weakened by succession crises, the Safavids lost their capital, Isfahan, to Afghan invaders in 1722 and never recovered; the last Safavid shah was deposed in 1736. Constantinople fell in 1453, before the Safavid state even existed (1501), Britain imposed no such blockade, and Akbar never conquered Persia.'
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

Despite their initial strength, the three Islamic land-based empires showed clear signs of decline by c. 1700–1750; the Qing did not:

| Empire | Primary Decline Factors |
|--------|------------------------|
| **Ottoman** | Military stagnation (janissaries resisted reform); trade bypassed empire (sea routes); European military superiority after 1700 |
| **Safavid** | Afghan invasion 1722; Shia-Sunni conflict; succession crises |
| **Mughal** | Aurangzeb's policies → Maratha, Sikh and Rajput revolts; provinces broke away after his death (1707); Nader Shah sacked Delhi (1739) |
| **Qing** | Still expanding and near its height in 1750; its serious crises came in the 1800s and are covered in later units |

> **The Military Technology Problem**

Land-based empires faced a systematic military disadvantage:

- European states continuously innovated gunpowder military technology through constant warfare
- Land-based empires had centralized military institutions (janissaries, mansabdars) that resisted reform
- European-trained officers and European-manufactured artillery eventually outclassed all three Islamic empires' armies
- By 1750, the "military revolution" gap between European and Islamic-empire armies was widening; it became decisive in the 1800s

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
            question: 'Which development most weakened the Mughal Empire in the decades after Aurangzeb\'s death in 1707?',
            options: [
              'Akbar\'s decision to abolish the jizya tax on non-Muslim subjects',
              'Maratha and Sikh revolts and provinces breaking away from Delhi',
              'A Ming Chinese invasion that seized the cities of the Ganges valley',
              'A Safavid campaign that converted most Indian Hindus to Shia Islam'
            ],
            correctAnswer: 1,
            explanation: 'Aurangzeb\'s long wars and his reimposition of the jizya fueled Maratha, Sikh and Rajput resistance. After 1707 provincial governors ruled more and more on their own, and the Persian ruler Nader Shah sacked Delhi in 1739. Akbar abolished the jizya more than a century earlier (1564), the Ming fell in 1644 without invading India, and no Safavid conversion campaign took place.'
          },
          {
            question: 'Why is the Qing dynasty usually set apart from the three Islamic empires when discussing decline before 1750?',
            options: [
              'The Qing collapsed around 1700, decades before any of the Islamic empires began to weaken',
              'The Qing never used gunpowder weapons, so the military revolution did not affect its armies',
              'The Qing was still expanding in 1750, and its worst crises came in the 1800s',
              'The Qing was conquered by Russia in 1689, so the dynasty no longer existed after that year'
            ],
            correctAnswer: 2,
            explanation: 'Under Kangxi, Yongzheng and Qianlong, the Qing was at the height of its power and was still adding territory in the 1750s. Its major crises, such as the Opium Wars and the Taiping Rebellion, belong to the 1800s and are studied in later units. The Qing used cannon, and the 1689 Treaty of Nerchinsk fixed a border with Russia rather than ending the dynasty.'
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
            explanation: 'The janissary paradox: created to be a loyal, professional force, by the 17th–18th century they had become a political institution resisting any reform that threatened their privileges. Ottoman sultans who tried to modernize the military faced janissary revolts. This institutional resistance to change, combined with improving European armies, left the empire falling behind its rivals.'
          }
        ]
      }
    },
    {
      id: 'whlbe6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each sign of decline to the empire it describes.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The empire whose capital, Isfahan, fell to Afghan invaders in 1722 was the ___',
            options: ['Safavid Empire', 'Mughal Empire', 'Ottoman Empire', 'Qing Empire']
          },
          {
            label: 'The empire weakened after 1707 by Maratha and Sikh revolts and by breakaway provinces was the ___',
            options: ['Safavid Empire', 'Mughal Empire', 'Ottoman Empire', 'Qing Empire']
          },
          {
            label: 'The empire whose janissary corps resisted military reform as European armies kept improving was the ___',
            options: ['Safavid Empire', 'Mughal Empire', 'Ottoman Empire', 'Qing Empire']
          }
        ],
        correctAnswers: ['Safavid Empire', 'Mughal Empire', 'Ottoman Empire'],
        hint1: 'Isfahan was the Persian capital rebuilt by Shah Abbas I',
        hint2: 'Aurangzeb died in 1707; the Marathas and Sikhs were in India',
        hint3: 'The janissaries were the elite infantry of the sultans',
        explanation: 'The Safavids lost Isfahan to Afghan invaders in 1722, the Mughal Empire fragmented after Aurangzeb\'s death in 1707, and the Ottoman janissaries blocked military reform. The Qing is the distractor: in 1750 it was still at the height of its power.'
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
            question: 'An AP LEQ asks: "Explain the causes of the decline of the Ottoman, Safavid and Mughal empires c. 1700–1750." Which thesis is strongest?',
            options: [
              'They declined for one reason only: European armies conquered all three empires outright before 1750',
              'They declined because they gave up gunpowder weapons and went back to cavalry warfare after 1650',
              'Rigid institutions and internal revolts weakened them just as their European rivals grew stronger',
              'They never declined in this period, since each empire grew steadily stronger until the First World War'
            ],
            correctAnswer: 2,
            explanation: 'The strongest thesis is multi-causal: privileged institutions such as the janissaries resisted reform, religious and ethnic revolts (Marathas, Sikhs, Afghans) split the empires from within, and European competition cut into trade and military advantage. No European army conquered all three before 1750, they kept gunpowder weapons, and the Safavids fell and the Mughals fragmented well before 1914.'
          },
          {
            question: 'Which statement best expresses a continuity-and-change argument about gunpowder in the Islamic land-based empires?',
            options: [
              'Gunpowder weapons were unknown in Asia until Europeans brought them there in the 1700s',
              'Gunpowder built these empires, but by the 1700s they lagged European innovation',
              'Gunpowder weapons mattered only at sea, so they had no effect on how land empires rose or fell',
              'Gunpowder ended warfare between the land empires, which kept their borders unchanged for centuries'
            ],
            correctAnswer: 1,
            explanation: 'Gunpowder is the continuity (cannon and muskets built Ottoman, Safavid and Mughal power) and the change is relative: by the 1700s European states, driven by constant rivalry, were innovating faster than these empires could match. Gunpowder reached Asia centuries earlier, it shaped land warfare from Constantinople (1453) to Panipat (1526), and the empires kept fighting one another.'
          }
        ]
      }
    }
  ]
}
