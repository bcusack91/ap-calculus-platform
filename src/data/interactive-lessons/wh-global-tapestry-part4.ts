export const whGlobalTapestryPart4Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whglobal4-intro',
      type: 'text' as const,
      content: `
# 🌍 The Global Tapestry (c. 1200–1450)

**Part 4 of 7 — Religion, Culture & Belief Systems**

---

| Section |
|---------|
| 📖 Buddhism, Confucianism & Neo-Confucianism |
| Islam as a Global Force |
| Christianity in Europe & Beyond |
| 📌 Comparing Religious Spread |

> 🔑 **Key Concept:** The AP exam frequently asks how major world religions shaped political authority, social structures, and cultural identity in this period. Understanding where each religion spread — and HOW it spread — is essential for Unit 1 comparison questions.
      `
    },
    {
      id: 'whglobal4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Neo-Confucianism, which blended Confucian ethics with Buddhist and Daoist ideas, primarily served which function in Song Dynasty China?',
            options: [
              'Provided an ideological framework justifying social hierarchy, bureaucratic governance, and proper relationships within families and the state',
              'Replaced all Buddhist and Daoist influence in Chinese society',
              'Encouraged women to participate in government through equal exam access',
              'Promoted individual freedom and resistance to authority'
            ],
            correctAnswer: 0,
            explanation: 'Neo-Confucianism was not just philosophy — it was administrative infrastructure. It justified the emperor\'s authority, the scholar-gentry\'s social dominance, and gender hierarchy (foot binding spread alongside Neo-Confucian norms of female subordination). AP prompts often ask students to explain how belief systems reinforced political and social structures.'
          },
          {
            question: 'Islam\'s rapid spread across Afro-Eurasia between 600–1450 was primarily driven by:',
            options: [
              'A combination of military expansion, merchant trade networks, and Sufi missionary adaptation to local cultures',
              'Exclusively military conquest by Arab armies',
              'European missionaries converting people along trade routes',
              'Natural disasters that destroyed other religions\' institutions'
            ],
            correctAnswer: 0,
            explanation: 'No single mechanism explains Islamic spread. Military conquest was important in the Middle East and North Africa; trade networks carried Islam to coastal East Africa and Southeast Asia; Sufi missionaries\' flexibility and emphasis on inner devotion made Islam appealing in diverse cultural contexts. AP essays should acknowledge this complexity.'
          }
        ]
      }
    },
    {
      id: 'whglobal4-content',
      type: 'text' as const,
      content: `
## 📖 Belief Systems & Their Impact

> **Buddhism and Its Spread**

Originally from India (5th c. BCE), Buddhism spread throughout Asia through trade and missionary activity:

- **Theravada Buddhism** dominant in Southeast Asia (Cambodia, Thailand, Burma) — brought by monks and merchants
- **Mahayana Buddhism** dominant in East Asia (China, Japan, Korea, Vietnam) — emphasized bodhisattvas who delay nirvana to help others
- **Zen Buddhism** (Japan) — contemplative practice emphasizing meditation; influenced samurai culture
- By 1200, Buddhism had largely declined in India (homeland) but thrived across Asia

> **Islam: A Global Faith**

By 1200, Islam had become the most geographically widespread religion on earth:

| Region | How Islam Arrived |
|--------|------------------|
| **West Africa** | Trans-Saharan merchants; rulers adopted Islam for legitimacy and trade connections |
| **East Africa (Swahili Coast)** | Indian Ocean merchants established Muslim communities in port cities |
| **South Asia** | Delhi Sultanate brought Muslim governance; Sufi missionaries gained converts |
| **Southeast Asia** | Muslim merchants from India and Arabia; Sufi missionaries adapted to local cultures |
| **Central Asia** | Mongol rulers converted; Sufis worked among nomadic peoples |

**Unifying features:** Arabic as scholarly/trade language; Hajj connected Muslims worldwide; Sharia provided common legal framework; madrasas standardized education

> **Christianity and the Catholic Church**

In medieval Europe (c. 1200–1450), the Catholic Church was the dominant cultural and political institution:

- **Universal authority:** Pope claimed spiritual authority over all Christian rulers; excommunication was a political weapon
- **Economic role:** Church owned ~1/3 of European land; collected tithes (taxes)
- **Cultural role:** Preserved Greco-Roman texts; ran universities (Oxford, Paris, Bologna founded c. 1100–1200)
- **Crusades (1095–1291):** Christian military campaigns to recapture Jerusalem; increased European contact with Islamic world; stimulated trade
- **Eastern Orthodox Christianity:** Byzantine Empire's church; different from Catholic Church after the Great Schism (1054)

> **AP Comparison Anchor**

- **Islam vs. Christianity:** Islam spread more successfully in this period — more geographically widespread by 1450; both used trade networks and religious institutions
- **Confucianism vs. Islam:** Both shaped governance (Confucianism through exam-based bureaucracy; Islam through caliphate and Sharia); neither required the other's absence
- **Key AP question:** How did religious belief systems reinforce OR challenge existing political and social structures?
      `
    },
    {
      id: 'whglobal4-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What was the primary social function of Neo-Confucianism in Song Dynasty China?',
            options: [
              'Justify social hierarchy and centralized bureaucracy through a philosophical framework blending Confucian ethics with Buddhist and Daoist ideas',
              'Promote equal rights for women in government',
              'Replace Buddhism as the state religion of China',
              'Encourage resistance to imperial authority'
            ],
            correctAnswer: 0,
            explanation: 'Neo-Confucianism served as ideological glue: it justified the emperor\'s supreme authority, the scholar-gentry\'s social position, gender hierarchy (including foot binding), and the entire meritocratic examination system.'
          },
          {
            question: 'What feature of Sufi Islam made it particularly effective at gaining converts in sub-Saharan Africa and Southeast Asia?',
            options: [
              'Sufi missionaries accommodated local customs and emphasized inner spiritual experience rather than rigid legal compliance',
              'Sufi armies conquered and forced mass conversions',
              'Sufi missionaries required converts to abandon all local traditions immediately',
              'Sufi missionaries only worked in the Arabian Peninsula'
            ],
            correctAnswer: 0,
            explanation: 'Sufi missionaries\' flexibility was key to their success. By participating in local customs, learning local languages, and emphasizing personal devotion over legal technicalities, Sufis made Islam accessible in diverse cultural settings where stricter forms of Islam might have been rejected.'
          },
          {
            question: 'The Catholic Church\'s most important political tool in medieval Europe was:',
            options: [
              'Excommunication — the power to cut rulers off from the Christian community, which delegitimized their authority over their own subjects',
              'Military conquest of rival kingdoms',
              'Control of all international trade routes',
              'The ability to elect or remove all European monarchs by direct vote'
            ],
            correctAnswer: 0,
            explanation: 'Excommunication was extraordinarily powerful in a society where most people believed salvation depended on church membership. If the Pope excommunicated a king, that king\'s subjects were released from their oaths of loyalty — this made excommunication a devastating political weapon.'
          }
        ]
      }
    },
    {
      id: 'whglobal4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each religion/philosophy with its key mechanism for spreading or maintaining influence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The belief system that spread through meritocratic civil service exams and justified social hierarchy in East Asia was ___',
            options: ['Neo-Confucianism', 'Islam', 'Theravada Buddhism', 'Catholic Christianity']
          },
          {
            label: 'The religion that spread most widely through merchant trade networks and Sufi missionary flexibility by 1450 was ___',
            options: ['Islam', 'Buddhism', 'Christianity', 'Hinduism']
          },
          {
            label: 'The institution that claimed universal spiritual authority over European rulers and preserved Greco-Roman knowledge was the ___',
            options: ['Catholic Church', 'Buddhist monastery system', 'Islamic caliphate', 'Confucian bureaucracy']
          }
        ],
        correctAnswers: ['Neo-Confucianism', 'Islam', 'Catholic Church'],
        hint1: 'It structured governance through philosophy',
        hint2: 'It spread along every major trade route',
        hint3: 'Dominant institution in medieval Europe',
        explanation: 'Neo-Confucianism structured East Asian governance through philosophy and examinations. Islam spread through merchant communities and adaptable Sufi missionaries — making it the most geographically widespread religion by 1450. The Catholic Church\'s universal claims and educational institutions made it the defining institution of medieval European civilization.'
      }
    },
    {
      id: 'whglobal4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP essay asks how belief systems reinforced political authority c. 1200–1450. Which example provides the STRONGEST argument?',
            options: [
              'Neo-Confucianism justified the scholar-gentry\'s social dominance and the emperor\'s authority through a philosophical framework that made hierarchy appear natural and morally necessary',
              'European monarchs had no connection to religious institutions',
              'Islamic rulers never used religion to legitimize their authority',
              'Buddhism had no political implications in East Asia'
            ],
            correctAnswer: 0,
            explanation: 'Neo-Confucianism is the strongest AP example of belief reinforcing political structure: the entire civil service examination system, gender hierarchy, and imperial authority rested on Confucian philosophical justifications. The AP exam rewards specific, well-developed examples like this.'
          },
          {
            question: 'Which statement BEST explains why Islam spread more successfully than Christianity in sub-Saharan Africa and Southeast Asia c. 1200–1450?',
            options: [
              'Islam\'s decentralized spread through merchants and flexible Sufi missionaries reached these regions more effectively than the more institutionally centralized Catholic Church, which lacked strong trade network connections to these areas',
              'Christianity was prohibited from spreading outside of Europe by treaty',
              'Africans and Southeast Asians preferred Islam because of its military superiority',
              'The Catholic Church had no missionaries during this period'
            ],
            correctAnswer: 0,
            explanation: 'Islam\'s spread through merchant communities and Sufi missionaries gave it a decentralized, adaptable quality. The Catholic Church, while powerful in Europe, was more institutionally centralized and did not have the same commercial network connections to sub-Saharan Africa and coastal Southeast Asia that Muslim merchants had built over centuries.'
          }
        ]
      }
    }
  ]
}
