export const whLandBasedEmpiresPart7Data = {
  topicSlug: 'wh-land-based-empires',
  sections: [
    {
      id: 'whlbe7-intro',
      type: 'text' as const,
      content: `
# 🏰 Land-Based Empires (c. 1450–1750)

**Part 7 of 7 — AP Review & Exam Mastery**

---

| Section |
|---------|
| 📖 High-Yield Vocabulary |
| Common AP Prompt Patterns |
| Evidence Deployment |
| 📌 Pulling It All Together |

> 🔑 **Key Concept:** Land-Based Empires content is heavily tested through LEQ and DBQ questions asking you to compare governance methods, evaluate the role of religion in legitimation, and analyze decline patterns. Mastering the vocabulary and comparison frameworks is essential.
      `
    },
    {
      id: 'whlbe7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP SAQ asks: "Briefly explain ONE similarity in how two land-based empires maintained political power c. 1450-1750." Which response earns full credit?',
            options: [
              'The Ottoman devshirme and Mughal mansabdar ranks both made officials depend on imperial favor, not inherited land',
              'The Ottoman and Mughal empires both relied on hereditary nobles whose lands and offices passed from father to son',
              'The Ottoman and Mughal empires both ruled through religious scholars who appointed each governor',
              'The Ottoman and Safavid empires both drew officials from Chinese-style written exams held in the capital'
            ],
            correctAnswer: 0,
            explanation: 'This response earns full SAQ credit: names two specific empires, identifies a specific similarity (centralized administration bypassing aristocracy), provides specific evidence for each (devshirme and mansabdar), and explains the shared mechanism (imperial dependency). Three-part structure: claim + evidence for both + reasoning.'
          },
          {
            question: 'For an AP DBQ about land-based empires, a document showing a religious scholar praising an emperor\'s piety MOST directly supports which argument?',
            options: [
              'That rulers cultivated religious endorsement to legitimize their authority beyond military force',
              'That religious scholars, rather than emperors, actually set imperial policy in land-based empires',
              'That the emperor was personally more pious than rival rulers, as the scholar reports',
              'That military conquest was the sole source of imperial legitimacy in this period'
            ],
            correctAnswer: 0,
            explanation: 'Religious legitimation documents require careful AP sourcing: who wrote it (a religious scholar with incentive to praise the emperor), for what purpose (likely commissioned or expected), and what it shows (that emperors actively sought religious endorsement). AP DBQ analysis should use this document to support an argument about legitimation strategies rather than just accepting it as evidence of the emperor\'s actual piety.'
          }
        ]
      }
    },
    {
      id: 'whlbe7-content',
      type: 'text' as const,
      content: `
## 📖 AP Review: High-Yield Terms and Exam Strategy

> **Must-Know Vocabulary**

- **Gunpowder empires** — Ottoman, Safavid, Mughal; built power through gunpowder military technology
- **Devshirme** — Ottoman system collecting Christian boys for imperial service
- **Janissaries** — Devshirme-trained Ottoman infantry; elite gunpowder soldiers
- **Millet system** — Ottoman policy giving non-Muslim communities internal autonomy
- **Mansabdar system** — Mughal non-hereditary official rank system
- **Din-i-Ilahi** — Akbar\'s syncretic personal religious practice blending multiple faiths
- **Shia Islam** — Branch of Islam; Safavid Empire made it state religion in Persia
- **Queue** — Manchu hairstyle forced on Han Chinese; political submission symbol
- **Dual appointments** — Qing system pairing Manchu and Han officials in each post
- **Zamindar** — Hereditary landholders who collected land tax for the Mughal state (not the ranked officials, who were mansabdars)

> **Common AP Prompt Patterns**

- **Comparison LEQ:** Compare two land-based empires\' governance methods c. 1450-1750
- **Evaluation LEQ:** Evaluate the extent to which religion was used to consolidate power
- **CCOT:** How did land-based empire power change between 1450 and 1750?
- **Causation:** Why did land-based empires decline c. 1700-1800?

> **AP Comparison Anchor**

**Quick comparison chart:**

| Empire | Key Admin System | Religious Policy | Primary Decline Factor |
|--------|-----------------|-----------------|----------------------|
| Ottoman | Devshirme/Millet | Sunni tolerance | Janissary conservatism |
| Mughal | Mansabdar | Tolerance→Orthodoxy | Aurangzeb\'s policies |
| Safavid | Shah/Clergy alliance | Forced Shia | Afghan invasion 1722 |
| Qing | Dual appointments | Buddhist patronage | Opium Wars/rebellions |
      `
    },
    {
      id: 'whlbe7-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The best one-sentence definition of "gunpowder empires" for an AP essay is:',
            options: [
              'The Ottoman, Safavid and Mughal states that used firearms to conquer and centralize c. 1450-1750',
              'Any state in any era that fielded gunpowder weapons, from Song China to Napoleon\'s France',
              'States whose economies depended mainly on manufacturing gunpowder and saltpeter for export abroad',
              'The European maritime empires that used cannon-armed ships to colonize Asia and the Americas after 1500'
            ],
            correctAnswer: 0,
            explanation: 'This definition is AP-ready because it names the three specific empires, specifies the mechanism (gunpowder for conquest and centralization) and gives the time period (1450-1750). A strong essay then adds the qualification that gunpowder alone does not explain their rise: administrative innovation and religious legitimation were equally important, so the term is somewhat reductive.'
          },
          {
            question: 'An AP LEQ compares how the Ottoman and Qing empires handled religious and ethnic diversity. What is the strongest thesis?',
            options: [
              'Each accommodated subject groups through formal institutions, the Ottomans with millets and the Qing with shared posts',
              'Each relied mainly on forced conversion, the Ottomans to Sunni Islam and the Qing to Tibetan Buddhism',
              'The Ottomans tolerated religious minorities, but the Qing suppressed Han culture entirely after 1644',
              'Neither empire had a systematic policy, leaving diversity to local officials and Ottoman governors'
            ],
            correctAnswer: 0,
            explanation: 'This thesis uses comparison to generate a principle: successful large empires developed formal institutional accommodations for non-dominant groups. It names specific mechanisms (millet vs. dual appointments/exam restoration), acknowledges the different forms (religious community autonomy vs. ethnic-administrative integration), and articulates a structural principle applicable beyond these two cases.'
          },
          {
            question: 'For an AP LEQ asking about religion\'s role in legitimating land-based empire authority, which complexity move earns the most credit?',
            options: [
              'Showing that Akbar\'s tolerance and Aurangzeb\'s orthodoxy both claimed religious legitimacy for opposite policies',
              'Arguing that religion played no real role, since emperors ruled through military force and legitimacy came from victory',
              'Treating all religions as producing the same political results, so religious legitimacy worked identically',
              'Arguing that Aurangzeb\'s orthodoxy was the only true religious claim to legitimacy among the Mughals'
            ],
            correctAnswer: 0,
            explanation: 'This complexity move is excellent: it uses internal contradiction (Akbar and Aurangzeb both claiming legitimacy through religion despite opposite policies) to show that religion\'s role in legitimation was flexible and instrumentalized rather than fixed and principled. Showing that the same category (religion) could justify opposite behaviors demonstrates sophisticated historical thinking about how ideology functions in political power.'
          }
        ]
      }
    },
    {
      id: 'whlbe7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each AP term to its correct definition.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Ottoman system of giving non-Muslim communities internal autonomy through their own religious leaders was the ___',
            options: ['Millet system', 'Devshirme', 'Mansabdar system', 'Jizya']
          },
          {
            label: 'The Mughal emperor whose religious tolerance policies included abolishing jizya and adopting Hindu wives was ___',
            options: ['Akbar', 'Aurangzeb', 'Babur', 'Shah Jahan']
          },
          {
            label: 'The three Islamic empires that all used gunpowder weapons to build power c. 1450-1750 are called ___',
            options: ['Gunpowder empires', 'Tributary empires', 'Maritime empires', 'Merchant empires']
          }
        ],
        correctAnswers: ['Millet system', 'Akbar', 'Gunpowder empires'],
        hint1: 'Ottoman religious community autonomy system',
        hint2: 'Mughal emperor r. 1556-1605 — tolerance and Din-i-Ilahi',
        hint3: 'Ottoman + Safavid + Mughal — three Islamic land empires',
        explanation: 'The millet system is the Ottoman solution to religious diversity governance. Akbar is the AP\'s model of pragmatic religious tolerance in imperial governance. "Gunpowder empires" is a historiographical term worth knowing but worth questioning: it captures the military technology dimension while potentially underselling the administrative and cultural dimensions of these empires\' success.'
      }
    },
    {
      id: 'whlbe7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks: "How did the development of gunpowder empires in Asia compare to the development of European overseas empires c. 1450-1750?" Which answer earns the most complexity credit?',
            options: [
              'Asian empires used gunpowder to expand overland, while Europeans paired it with ships to expand overseas',
              'Asian rulers never mastered gunpowder weapons, while European states used them to win overseas colonies everywhere',
              'Asian and European empires followed identical paths, each using gunpowder to expand overland across Eurasia',
              'European empires expanded overseas, while Asian gunpowder empires never added territory after their founding'
            ],
            correctAnswer: 0,
            explanation: 'This comparison earns complexity by: comparing similar technologies (gunpowder) applied through different strategies (land vs. maritime), identifying why the strategies differed (geographic context — Eurasia is conquerable by cavalry; oceans require ships), and noting different long-term consequences (overland vs. global reach). AP rewards comparisons that go beyond "they were different" to explain WHY they were different.'
          },
          {
            question: 'Which of the following AP arguments most effectively uses land-based empire evidence to support a broader historical principle?',
            options: [
              'Four empires conquered with gunpowder yet governed through accommodation, so force wins land but cannot hold it alone',
              'Four empires conquered and governed by force alone, so military power was enough to sustain their rule for many centuries',
              'Four empires ruled without religious legitimation, so ideology was irrelevant to governing large states',
              'Only European empires practiced administrative accommodation, so Asian rulers depended on terror'
            ],
            correctAnswer: 0,
            explanation: 'This argument earns maximum complexity because it derives a general principle from specific evidence: conquest ≠ governance, and the same tools (military force) cannot accomplish both. This principle applies beyond the specific empires to a broader theory of state-building. AP essays that use specific historical evidence to derive broader principles demonstrate the highest level of historical thinking.'
          }
        ]
      }
    }
  ]
}
