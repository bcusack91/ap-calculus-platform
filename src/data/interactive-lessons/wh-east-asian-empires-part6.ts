export const whEastAsianEmpiresPart6Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas6-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian & Russian Empires (c. 1450–1750)

**Part 6 of 7 — AP Exam Workshop: Sources, SAQs and the LEQ**

---

| Section |
|---------|
| 📖 How This Topic Appears on the May 2027 Exam |
| Stimulus Set 1: Matteo Ricci on Ming Government |
| Stimulus Set 2: Peter I's Beard Decree |
| SAQ Walkthrough |
| LEQ: Thesis and Contextualization |

> 🔑 **Key Concept:** Parts 2–5 built the content. This part practices the **skills** the exam scores: sourcing a document (HIPP), using a source as evidence, answering short-answer questions precisely, and writing a comparison argument.

### The Exam at a Glance (May 2027)

| Section | Format | Weight |
|---|---|---|
| Multiple choice | 55 questions in 55 minutes, in sets based on sources | 40% |
| Short answer (SAQ) | 3 questions in 40 minutes, **all required and all with a source**: Q1 a secondary text, Q2 a primary text, Q3 a non-text source such as an image, map or chart | 20% |
| Document-based (DBQ) | 1 question, 60 minutes including reading time, on a topic from 1200 to 2001 | 25% |
| Long essay (LEQ) | 1 required broad prompt in 40 minutes, with choice inside the prompt | 15% |

### HIPP Sourcing Reminder

| Letter | Ask | Example question |
|---|---|---|
| **H** Historical situation | What was happening when and where this was produced? | What conflicts or policies surrounded it? |
| **I** Intended audience | Who was it written for? | How might that audience shape what is said? |
| **P** Purpose | Why was it produced? | To persuade, order, record, justify? |
| **P** Point of view | Who is the author, and what is their position? | What would this person know or want? |
`
    },
    {
      id: 'wheastas6-set1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 1** 🎯

> "The entire kingdom is administered by the order of the learned, commonly known as the philosophers. The responsibility for the orderly management of the whole realm is wholly committed to their charge and care. The army, officers and soldiers alike, holds them in high respect and obeys them promptly... No one may rise to high office without first succeeding in the examinations in letters."
>
> Adapted from the journals of Matteo Ricci, an Italian Jesuit who lived in China from 1582 until his death in 1610. The journals were edited and published in Latin by Nicolas Trigault in 1615.
      `,
      exercise: {
        questions: [
          {
            question: 'The passage would be most useful to a historian studying which of the following?',
            options: [
              'How peasants in the Ming countryside experienced the tax reforms of the 1500s',
              'How European visitors understood the way Ming China was governed',
              'How Zheng He organized the crews and ships of the Ming treasure fleets',
              'How the Manchu conquerors later adapted the Ming examination system'
            ],
            correctAnswer: 1,
            explanation: 'The source is a European observer describing Ming government, so it is direct evidence of how Europeans understood China. Ricci says nothing about peasants, Zheng He or the later Qing.'
          },
          {
            question: 'The situation Ricci describes most directly reflects which long-term development in Chinese history?',
            options: [
              'The Mongol policy of excluding Han Chinese from government posts',
              'The long use of Confucian exams to select officials for the state',
              'The work of Portuguese advisors who had reorganized the Ming army',
              'The sea ban that stopped Chinese contact with foreign merchants'
            ],
            correctAnswer: 1,
            explanation: 'Rule by exam-selected scholar-officials grew out of the examination system that the Song expanded and the Ming restored. The Mongols had sidelined Han scholars, the opposite of what Ricci describes, and no Portuguese ever reorganized the Ming army.'
          },
          {
            question: 'Which aspect of Ricci\'s point of view most likely shaped his admiring view of Chinese scholars?',
            options: [
              'His hope of converting the educated elite to Christianity',
              'His own appointment as a Ming official after the exams',
              'His plan to persuade Spain to invade the coast of China',
              'His position as an advisor to the Manchu banner nobles'
            ],
            correctAnswer: 0,
            explanation: 'Ricci\'s accommodation strategy targeted the scholar elite, so he had reason to study and praise them. He never held Ming office, did not seek a Spanish invasion, and died decades before the Qing conquest.'
          }
        ]
      }
    },
    {
      id: 'wheastas6-set2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 2** 🎯

> "Henceforth, in accordance with this decree of the Sovereign, all court attendants, provincial service men, government officials of all ranks, military men, and all merchants of the leading guilds are to shave their beards and moustaches. If any of them do not wish to shave, a yearly tax is to be collected from them... Peasants who keep their beards are to pay a small fee each time they pass through the town gates."
>
> Adapted from Peter I's decree on the shaving of beards, Russia, January 1705.
      `,
      exercise: {
        questions: [
          {
            question: 'The decree is best understood as part of a broader effort by Peter I to:',
            options: [
              'Raise money for a war against the Ottoman fleet',
              'Enforce the rules of the Orthodox church about the dress of the clergy',
              'Remake the Russian elite along the lines of Western European courts',
              'End serfdom by taxing nobles and merchants more heavily than peasants'
            ],
            correctAnswer: 2,
            explanation: 'Ordering officials, soldiers and merchants to shave, together with the Western dress decrees, was meant to make the elite look and act European. The tax was a penalty, not a war fund, and serfdom deepened under Peter.'
          },
          {
            question: 'Which group in Russian society would most likely have opposed this decree?',
            options: [
              'Orthodox traditionalists who saw the beard as a mark of piety',
              'Young nobles who had studied abroad in Western European cities',
              'Foreign officers hired to train the new Russian army regiments',
              'Dutch shipbuilders hired to build the new fleet on the Baltic'
            ],
            correctAnswer: 0,
            explanation: 'Many Orthodox Russians regarded the beard as part of a godly appearance, so forced shaving offended them. Nobles trained abroad and foreign experts were the people Peter\'s reforms favored.'
          },
          {
            question: 'Which East Asian policy is most similar to this decree?',
            options: [
              'The Tokugawa ban on Japanese subjects traveling overseas',
              'The Ming relaxation of the maritime trade ban in 1567',
              'The Qing order requiring Han men to wear the Manchu queue',
              'The Ming ban on private overseas trade by Chinese merchants'
            ],
            correctAnswer: 2,
            explanation: 'Both rulers regulated how men wore their hair to display loyalty to a new order. The difference is that the Qing imposed the conquerors\' style on the conquered, while Peter imposed a foreign style on his own elite.'
          }
        ]
      }
    },
    {
      id: 'wheastas6-saq',
      type: 'text' as const,
      content: `
## SAQ Walkthrough

Each SAQ has three parts, (a), (b) and (c), worth **one point each**. No thesis is needed. Answer each part in two or three sentences that **name specific evidence** and **explain** it.

### Practice SAQ 1 (secondary text source)

> "Historians once described Tokugawa Japan as a 'closed country'. More recent work argues that the shogunate did not isolate Japan so much as decide who could enter it and on what terms. Embassies from Korea and the Ryukyu kingdom marched in procession to Edo, Dutch and Chinese ships traded at Nagasaki, and the shogun used these visits to display his authority to his own subjects."
>
> *Practice passage written for this lesson, summarizing the argument of historians such as Ronald Toby (1984).*

**(a) Describe the author's argument about Tokugawa foreign relations.**

> **Model answer:** The author argues that Tokugawa Japan was not closed but practiced controlled contact: the shogunate decided which foreigners could come, where and when, and used foreign visits to strengthen its own authority.

**(b) Explain one piece of historical evidence that supports the author's argument.**

> **Model answer:** After 1641 the Dutch East India Company kept trading at Dejima in Nagasaki harbor and its captain had to report world news to the shogunate. This shows that contact continued but on terms set by the state.

**(c) Explain one piece of historical evidence that challenges or modifies the author's argument.**

> **Model answer:** The 1635 edict forbade Japanese to travel abroad on pain of death, and the Portuguese were expelled in 1639. For ordinary Japanese, contact with the outside world was nearly impossible, so "closed" describes their experience better than the author allows.

### What Q2 and Q3 Look Like
- **Q2 (primary text):** for example, the 1635 edict or the 1649 Russian Law Code, with prompts such as "Identify the historical situation" or "Explain one purpose of the document".
- **Q3 (non-text):** for example, Ricci's 1602 world map, which placed China near the center by putting the Pacific in the middle. A prompt might ask why a Jesuit mapmaker would arrange the map that way for a Chinese audience.

> ⚠️ **Common SAQ mistakes:** answering with a date or name and no explanation; describing the source instead of bringing outside evidence when the prompt asks for evidence; and using evidence from the wrong period.
`
    },
    {
      id: 'wheastas6-leq',
      type: 'text' as const,
      content: `
## LEQ: Thesis and Contextualization

**Practice prompt:** *In the period 1450–1750, rulers of land-based empires used a variety of methods to legitimize and consolidate their power. Develop an argument that compares the methods used by rulers of two land-based empires in this period.*

### The Rubric (6 points)

| Row | Points | What earns it |
|---|---|---|
| Thesis | 1 | A historically defensible claim that sets up a line of reasoning |
| Contextualization | 1 | The broader situation before or during the period, connected to the prompt |
| Evidence | 2 | Specific examples (1 point); used to support the argument (2 points) |
| Analysis and reasoning | 2 | Uses comparison to frame the argument (1 point); shows complex understanding (2 points) |

### Weak vs Strong Thesis

| Weak | Strong |
|---|---|
| "The Qing and Russia both used many methods to gain power, but they also had differences." | "Both the Qing emperors and Peter I consolidated power through state-dependent service elites, the Eight Banners and the Table of Ranks; however, the Qing legitimized rule by embracing Confucian tradition, while Peter legitimized his reforms by imitating Western Europe." |

The strong thesis names **a specific similarity and a specific difference** and the evidence it will use.

### Sample Contextualization
> "After 1450, gunpowder weapons and the decline of Mongol successor states allowed rulers across Eurasia to build large land empires over many peoples. Both the Manchus and the Muscovite tsars expanded into Inner Asia, where they had to win the loyalty of diverse subjects and of powerful elites who could challenge them."

This works because it describes the **broader situation** (gunpowder, the end of Mongol power, multiethnic empires) and **connects** it to the prompt (legitimizing and consolidating power).

> 🔑 **AP Connection:** For the complexity point, add a **qualification**: for example, Peter's Westernization was selective, and the Qing also used Tibetan Buddhist patronage, so neither empire relied on one source of legitimacy.
`
    },
    {
      id: 'wheastas6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Know the Rubric** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A defensible claim that sets up a line of reasoning earns the ___ point',
            options: ['Thesis', 'Contextualization', 'Evidence', 'Complexity']
          },
          {
            label: 'Describing the broader situation and connecting it to the prompt earns the ___ point',
            options: ['Contextualization', 'Thesis', 'Evidence', 'Complexity']
          },
          {
            label: 'Asking whom Peter I\'s decree was written for analyzes its ___',
            options: ['Intended audience', 'Purpose', 'Point of view', 'Historical situation']
          }
        ],
        correctAnswers: ['Thesis', 'Contextualization', 'Intended audience'],
        hint1: 'This point usually comes in the introduction or conclusion.',
        hint2: 'Before or during the period, and linked to the topic of the prompt.',
        hint3: 'The I in HIPP.',
        explanation: 'A defensible claim with a line of reasoning is the thesis. Connecting the broader situation to the prompt is contextualization. Asking who a document was written for analyzes its intended audience.'
      }
    }
  ]
}
