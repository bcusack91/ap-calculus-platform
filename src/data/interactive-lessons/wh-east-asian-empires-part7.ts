export const whEastAsianEmpiresPart7Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas7-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian & Russian Empires (c. 1450–1750)

**Part 7 of 7 — Synthesis Review: Periodization, Comparison and Causation**

---

| Section |
|---------|
| 📖 Periodization: From the Song to 1750 |
| Continuity and Change |
| 📌 Master Comparison Table |
| Five Causation Chains |
| Mixed Review |

> 🔑 **Key Concept:** This part ties the topic together. Part 1 covered East Asia from about 1200 to 1450; Parts 2–5 followed the Ming, Qing, Tokugawa Japan and Russia to about 1750; Part 6 practiced the exam skills. Use this review to see the **long arcs**, the **comparisons** and the **causal chains** that the exam asks you to explain.
`
    },
    {
      id: 'wheastas7-periods',
      type: 'text' as const,
      content: `
## 📖 Periodization: From the Song to 1750

| Era | China | Japan | Russia |
|---|---|---|---|
| **c. 1200–1450** | Song (to 1279), then Mongol Yuan (1271–1368), then early Ming | Kamakura and Ashikaga shogunates; power shifts toward regional lords | Rus principalities pay tribute to the Golden Horde (from the 1240s) |
| **c. 1450–1600** | Ming: sea ban, Single Whip reform, silver inflows, Jesuits arrive | Sengoku civil wars; Europeans and Christianity arrive (1540s); reunification under Nobunaga and Hideyoshi | Ivan III ends tribute (1480); Ivan IV crowned tsar (1547), takes Kazan and Astrakhan; Yermak enters Siberia |
| **c. 1600–1750** | Ming collapse (1644); Qing conquest and expansion under Kangxi, Yongzheng and Qianlong | Tokugawa peace (from 1603): bakuhan system, Christian ban, controlled contact | Romanovs (1613); serfdom codified (1649); Peter I and Westernization |

### Why 1450 and 1750?
- **Around 1450:** the Ming had stopped the treasure fleets, Muscovy would break free of the Horde within decades, and gunpowder was reshaping warfare across Eurasia.
- **Around 1750:** the Qing reached their greatest extent with the conquest of the Dzungars, Tokugawa Japan was at peace, and Russia was a European great power. In the next century, industrialized Western states would challenge all three.

## Continuity and Change

| Continuities | Changes |
|---|---|
| **Confucian bureaucracy and exams** in China from the Song through the Qing, even under foreign conquerors (with a long break under the early Yuan) | **Money:** China's economy shifted from paper money to silver, tying it to Japanese and American mines |
| **The tribute system** as China's frame for foreign relations, from Ming envoys to Qianlong's 1793 letter | **Rulers:** China was ruled twice by conquest dynasties, the Mongol Yuan and the Manchu Qing |
| **Agrarian base:** most people in all three regions were peasants, and land and harvest taxes funded the state | **Japan:** from decentralized warfare among daimyo to a centralized, peaceful order under the shogun |
| **Neo-Confucian social ideals** in China, Korea and Japan | **Russia:** from a tributary of the Horde to an empire spanning Eurasia, with peasants pushed into serfdom |

> 🔑 **AP Connection:** A CCOT essay needs **both** continuity and change, and a reason for each. Example: "The exam system continued under the Qing **because** the Manchus needed Han scholar-officials to govern a vast Han population."
`
    },
    {
      id: 'wheastas7-table',
      type: 'text' as const,
      content: `
## 📌 Master Comparison Table

| | Ming China | Qing China | Tokugawa Japan | Russia |
|---|---|---|---|---|
| **Rulers** | Han dynasty founded by a rebel leader | Manchu conquest dynasty | Military shogun; emperor a symbol in Kyoto | Orthodox tsars (Rurikids, then Romanovs) |
| **Legitimacy** | Mandate of Heaven; Confucian rites | Confucian rites for Han; Buddhist patronage for Mongols and Tibetans | Appointment by the emperor; Neo-Confucian order | Orthodox faith; Byzantine and imperial symbols |
| **Service elite** | Exam-selected scholar-officials; eunuchs at court | Scholar-officials plus Manchu bannermen | Salaried samurai | Service nobility; Table of Ranks (1722) |
| **Control of elites** | Purges; no chancellor after 1380 | Dyarchy; banner garrisons | Alternate attendance; hostages in Edo | Oprichnina; service obligations |
| **Foreign contact** | Tribute; sea ban relaxed in 1567; silver trade | Tribute; Canton system (1757) | "Four gates"; Dutch at Dejima | Westernization; fur trade; Nerchinsk |
| **Social hierarchy** | Scholar-gentry at top; merchants rich but low | Manchu-Han distinctions added | Four-status order; rich merchants | Serfdom hardened in 1649 |
| **Major challenge** | Famine and rebellion (1644) | Revolt of the Three Feudatories | Shimabara Rebellion | Stenka Razin's revolt |
`
    },
    {
      id: 'wheastas7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the best example of continuity in Chinese government from the Song through the Qing?',
            options: [
              'Rule by the same ethnic group throughout the whole period',
              'Officials chosen through exams on the Confucian classics',
              'A ban on all foreign trade carried by private merchants',
              'Paper currency as the main money used to pay state taxes'
            ],
            correctAnswer: 1,
            explanation: 'The Confucian exams, suspended for decades under the early Yuan but revived in 1315, ran through the Ming and Qing because every dynasty needed trained officials. Both the Yuan and the Qing were foreign conquest dynasties, the sea ban was relaxed in 1567, and silver replaced paper money.'
          },
          {
            question: 'Salaried samurai in Japan, bannermen in Qing China and service nobles in Petrine Russia were similar in that they all:',
            options: [
              'Gained their posts by passing exams on the Confucian classics',
              'Lived on estates they controlled independently of the ruler',
              'Depended on the ruler for income, rank or position',
              'Belonged to merchant families that had bought noble titles'
            ],
            correctAnswer: 2,
            explanation: 'Each group owed its income or status to the state, which bound it to the ruler. Samurai and bannermen did not rise through exams, and stipends replaced independent estates for samurai.'
          },
          {
            question: 'Which statement best compares Tokugawa Japan and Qing China in their dealings with Europeans before 1760?',
            options: [
              'Both allowed Europeans to trade only at a single closely supervised port',
              'Both invited Jesuit missionaries to preach freely across the countryside',
              'Both granted Portuguese merchants exclusive rights in their main ports',
              'Both relied on European ships to carry their tribute missions abroad'
            ],
            correctAnswer: 0,
            explanation: 'Japan confined the Dutch to Dejima in Nagasaki, and the Qing confined European ships to Guangzhou from 1757. Both states restricted missionaries, and Japan expelled the Portuguese in 1639.'
          }
        ]
      }
    },
    {
      id: 'wheastas7-causation',
      type: 'text' as const,
      content: `
## Five Causation Chains

1. **Silver:** Ming paper money fails → taxes paid in silver (Single Whip, by 1581) → Chinese demand pulls silver from Japan and from Potosí through Manila (from 1571) → a global trade network centered on China.
2. **The fall of the Ming:** Little Ice Age famine and fiscal crisis → unpaid soldiers and peasant rebellions → Li Zicheng takes Beijing (1644) → Wu Sangui joins the Manchus at Shanhai Pass → Qing rule.
3. **Controlled contact in Japan:** Jesuit conversions in Kyushu → fear of divided loyalty and Iberian conquest → bans (1614), Shimabara (1637–1638) → Portuguese expelled (1639), Dutch on Dejima (1641).
4. **Russian serfdom:** a huge, thinly populated state needs gentry cavalry → peasants bound to gentry estates → Law Code of 1649 → runaways flee to the Cossack frontier → Razin's revolt (1670–1671).
5. **Nerchinsk:** Russian fur hunters push down the Amur → clashes at Albazin → Kangxi wants peace in the north to fight the Dzungars → Treaty of Nerchinsk (1689).

> 🔑 **AP Connection:** In a causation essay, show **how** one step leads to the next, and separate **long-term** causes (fiscal strain, climate) from **short-term triggers** (the capture of Beijing, Wu Sangui's decision).
`
    },
    {
      id: 'wheastas7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Empire?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bound peasants to the land without time limit in a law code of 1649: ___',
            options: ['Russia', 'Qing China', 'Tokugawa Japan', 'Ming China']
          },
          {
            label: 'Made regional lords spend alternate years in the capital, leaving their families as hostages: ___',
            options: ['Tokugawa Japan', 'Russia', 'Qing China', 'Ming China']
          },
          {
            label: 'Paired a Manchu and a Han president at the head of each of the Six Boards: ___',
            options: ['Qing China', 'Ming China', 'Tokugawa Japan', 'Russia']
          }
        ],
        correctAnswers: ['Russia', 'Tokugawa Japan', 'Qing China'],
        hint1: 'The Ulozhenie, under the second Romanov tsar.',
        hint2: 'Sankin-kotai, formalized in 1635.',
        hint3: 'Only one of these dynasties was Manchu.',
        explanation: 'Russia codified serfdom in the Ulozhenie of 1649. Tokugawa Japan required alternate attendance in Edo. The Qing paired Manchu and Han officials to combine Han expertise with Manchu oversight.'
      }
    },
    {
      id: 'wheastas7-review',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which long-term cause best links the fall of the Ming in 1644 with the Stenka Razin revolt in Russia?',
            options: [
              'Rebellions that drew on hungry or bound peasants who resented the state',
              'Invasions by Western European armies that were equipped with gunpowder weapons',
              'Religious wars between Catholic converts and supporters of the state',
              'Disputes over the succession after the deaths of reforming rulers'
            ],
            correctAnswer: 0,
            explanation: 'Both upheavals drew on rural people who resented heavy demands: famine-stricken Chinese peasants and runaway Russian serfs. Neither involved Western European armies or Catholic converts.'
          },
          {
            question: 'Which development best explains why the Qing could expand far into Inner Asia in the 1750s?',
            options: [
              'Western European allies supplied the Qing with modern warships',
              'Peace with Russia and strong banner armies left the Dzungars isolated',
              'The Ming had already conquered Xinjiang and Tibet before 1644',
              'The Canton system funded the campaigns with British silver loans'
            ],
            correctAnswer: 1,
            explanation: 'The Treaty of Nerchinsk kept Russia neutral, so Qing banner armies could destroy the Dzungar state without a second enemy. The Ming never ruled Xinjiang or Tibet, and the Canton system did not involve loans.'
          },
          {
            question: 'Which statement best describes a major change in Russia between 1450 and 1750?',
            options: [
              'It changed from an Orthodox realm into a Catholic one under Peter I',
              'It moved from serf labor to free peasant farming during the 1700s',
              'It went from paying tribute to the Horde to ruling lands to the Pacific',
              'It gave up all of its Siberian lands to the Qing in the Treaty of Nerchinsk'
            ],
            correctAnswer: 2,
            explanation: 'Moscow stopped paying tribute in 1480 and within two centuries ruled from the Baltic to the Pacific. Russia stayed Orthodox, serfdom deepened rather than ended, and Nerchinsk cost Russia only the Amur valley.'
          }
        ]
      }
    }
  ]
}
