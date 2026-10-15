export const whIslamicEmpiresPart6Data = {
  topicSlug: 'wh-islamic-empires',
  sections: [
    {
      id: 'whislami6-intro',
      type: 'text' as const,
      content: `
# 🕌 Islamic Empires (1450–1750)

**Part 6 of 7 — Exam Workshop: Sources, SAQs and the LEQ**

---

| Section |
|---------|
| 📖 How This Topic Appears on the Exam |
| Stimulus Set 1: A Mughal Painting |
| SAQ Walkthrough |
| Stimulus Set 2: A French Traveler in Iran |
| Building an LEQ Argument |

> 🔑 **Key Concept:** The May 2027 exam has **55 multiple-choice questions** (55 minutes, 40%), **3 short-answer questions** (40 minutes, 20%), a **DBQ** (60 minutes including 15 for reading, 25%) and a **long essay** (40 minutes, 15%). From 2027 all three SAQs are **required and each is tied to a source**, and the LEQ is **one broad prompt**. This part practices each format on Unit 3 content.
`
    },
    {
      id: 'whislami6-painting',
      type: 'text' as const,
      content: `
## 📖 Stimulus Set 1: A Mughal Painting

**Source:** *Jahangir Preferring a Sufi Shaikh to Kings*, a Mughal miniature by the court painter **Bichitr**, c. 1615–1618 (now in the Freer Gallery of Art, Washington, D.C.).

**What the painting shows (described):**
- Emperor **Jahangir** sits on an hourglass-shaped throne, his head framed by a glowing sun and crescent moon.
- He hands a book to an elderly **Sufi shaikh**.
- Waiting below, and ignored, are an **Ottoman sultan**, **King James I of England** (copied from a European portrait), and a Hindu figure, a self-portrait of the painter holding a painting.
- An inscription says, in substance, that although kings stand before him, the emperor looks toward holy men.

### Reading a Visual Source with HIPP
| Element | Analysis |
|---|---|
| **Historical situation** | The Mughal court was wealthy and in contact with Europe; England's ambassador Sir Thomas Roe served on an embassy to Jahangir from 1615 to 1619 |
| **Intended audience** | The emperor and his court, who viewed albums of paintings privately |
| **Purpose** | To present Jahangir as a spiritual ruler above worldly kings |
| **Point of view** | A court artist who depended on imperial patronage |

**Key inference:** the painting is a **claim to legitimacy**. It places Jahangir above both an Islamic rival (the Ottoman sultan) and a Christian king, and links his rule to Sufi holiness, not to conquest alone.
`
    },
    {
      id: 'whislami6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 1** 🎯

*Use the painting described above.*
      `,
      exercise: {
        questions: [
          {
            question: "The painting is best understood as evidence of which method of legitimizing power?",
            options: [
              "Art presenting the ruler as spiritually exalted",
              "Tax farming that tied local elites to the throne",
              "A slave-soldier corps loyal only to the emperor",
              "A treaty that recognized Mughal borders"
            ],
            correctAnswer: 0,
            explanation: "The sun-and-moon halo and the ruler's attention to a Sufi holy man present Jahangir as a spiritual sovereign. Court art of this kind is one of the main legitimizing tools named in CED Topic 3.2."
          },
          {
            question: "The inclusion of King James I in the painting most directly reflects which historical context?",
            options: [
              "Growing diplomatic and trade contact between the Mughals and England",
              "An English military victory over the Mughals in Bengal",
              "The conversion of the English royal family to Islam",
              "A Mughal alliance with England against the Safavids"
            ],
            correctAnswer: 0,
            explanation: "Sir Thomas Roe's embassy and the English East India Company's trade brought English portraits and goods to Jahangir's court. There was no English victory over the Mughals in this period, and England was a minor player beside the empire."
          },
          {
            question: "A historian would most likely use this painting to support which argument?",
            options: [
              "Mughal rulers joined Islamic piety to claims of rule above all kings",
              "Mughal rulers saw European monarchs as their equals",
              "Mughal rulers rejected Sufi Islam in favor of strict Sunni law",
              "Mughal rulers had stopped using art to shape their public image"
            ],
            correctAnswer: 0,
            explanation: "The painting joins Sufi devotion to an image of Jahangir as superior to the sultan and the English king. It portrays European monarchs as lesser petitioners and celebrates a Sufi figure, so the other claims contradict it."
          }
        ]
      }
    },
    {
      id: 'whislami6-saq',
      type: 'text' as const,
      content: `
## SAQ Walkthrough

**Prompt (modeled on the 2027 format, using the painting above):**

**(a)** Identify ONE way the painting presents Emperor Jahangir.
**(b)** Explain ONE way the painting reflects methods Mughal rulers used to legitimize their power from 1450 to 1750.
**(c)** Explain ONE way methods of legitimizing power in the Ottoman Empire **differed** from those shown in the painting.

Each part is worth one point. Answer in full sentences, and make every sentence earn its place.

### Model Responses
**(a)** *The painting presents Jahangir as a spiritual ruler: he sits under a sun-and-moon halo and gives his attention to a Sufi shaikh instead of the kings waiting below him.*

**(b)** *Mughal rulers used court art and monumental architecture to show that their power was blessed and magnificent. Just as Shah Jahan later built the Taj Mahal to display wealth and piety, Jahangir's painters placed him above the Ottoman sultan and the English king to make his supremacy visible.*

**(c)** *The Ottomans relied more on religious law and a protector role in Sunni Islam. After 1517 the sultan guarded Mecca and Medina and enforced sharia through Sunni judges, whereas Jahangir's image stressed personal holiness linked to Sufi saints.*

### Why These Earn the Points
- **(a)** *identifies* with a detail from the source; no explanation needed.
- **(b)** links the source to a **named method** and adds a second example.
- **(c)** names the **difference** and supports it with specific Ottoman evidence.
`
    },
    {
      id: 'whislami6-chardin',
      type: 'text' as const,
      content: `
## 📖 Stimulus Set 2: A French Traveler in Iran

> "When this great prince ceased to live, Persia ceased to prosper."
> — Jean Chardin, French jeweler and traveler, on Shah Abbas I, in his *Travels in Persia* (published 1686 and 1711). Chardin lived in Isfahan in the 1660s and 1670s, decades after Abbas died in 1629.

### What to Notice
- **Point of view:** Chardin was a merchant who sold jewels to the Safavid court. He knew the court well but saw it as a foreign visitor.
- **Claim type:** this is a **causal claim** about one ruler's importance, made long after the fact.
- **Corroboration:** later events support part of it: weaker shahs, a weaker army, and the fall of Isfahan in 1722.
- **Limitation:** it credits one man and ignores structural causes, such as dependence on the shah's personal control of the army and the silk trade.
`
    },
    {
      id: 'whislami6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Set 2** 🎯

*Use the Chardin excerpt above.*
      `,
      exercise: {
        questions: [
          {
            question: "Which later development most directly supports Chardin's claim?",
            options: [
              "The Afghan capture of Isfahan in 1722",
              "The Ottoman victory at Chaldiran in 1514",
              "Ismail I's conversion of Iran to Shi'ism",
              "Shah Abbas I's resettlement of Armenians"
            ],
            correctAnswer: 0,
            explanation: "The collapse of the Safavid capital in 1722 fits Chardin's view that the state weakened after Abbas I. Chaldiran and Ismail's conversion came before Abbas, and the Armenian resettlement happened during his reign."
          },
          {
            question: "Which of the following is the most important limitation of Chardin's excerpt as evidence of why the Safavid state weakened?",
            options: [
              "It attributes a long decline to the loss of a single ruler",
              "It was written by someone who never visited Iran",
              "It was written by a Safavid official praising his own shah",
              "It was written before Shah Abbas I came to the throne"
            ],
            correctAnswer: 0,
            explanation: "Chardin explains Safavid weakness through one man's death, leaving out structural causes such as the army and the dependence on royal control. He lived in Isfahan for years, was not a Safavid official, and wrote decades after Abbas I died."
          }
        ]
      }
    },
    {
      id: 'whislami6-leq',
      type: 'text' as const,
      content: `
## Building an LEQ Argument

**Prompt (modeled on the 2027 single-prompt format):** *From 1450 to 1750, rulers of land-based empires used a variety of methods to legitimize and consolidate their power. Develop an argument that evaluates the extent to which religion was the most important of these methods in the Ottoman, Safavid and Mughal empires.*

### Rubric (6 points)
| Point | What earns it |
|---|---|
| **Thesis (1)** | A defensible claim with a line of reasoning |
| **Contextualization (1)** | Broader developments before or during the period, explained in several sentences |
| **Evidence (2)** | Specific examples (1), used to support the argument (2) |
| **Analysis and reasoning (2)** | Uses comparison, causation or CCOT (1); shows complexity (2) |

### Thesis: Weak vs. Strong
- ❌ *"Religion was used by all three empires in many ways."* Not an evaluation, and no line of reasoning.
- ✅ *"Religion was central to legitimacy in the Safavid state, which built a Shi'a identity from above. In the Ottoman and Mughal empires, however, loyal military elites and revenue systems mattered more, because these rulers governed subjects of many faiths."*

### Contextualization Starter
*Before 1450, the Mongol and Timurid empires had shown that steppe dynasties could conquer vast areas but often failed to hold them. Their successors combined Turkic military traditions with Islamic law, Persian court culture and new gunpowder weapons to build longer-lasting states...*

### Complexity Moves for This Prompt
- Show that religion and administration **worked together**: the devshirme converted recruits to Islam.
- Show **change over time**: Akbar's inclusive policy vs. Aurangzeb's reversal.
- Show **comparison**: top-down Safavid conversion vs. Ottoman management of non-Muslim communities.
`
    },
    {
      id: 'whislami6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Score the Thesis** 🔍

*For each thesis written for the LEQ prompt above, choose the best description.*
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Religion was used in the Ottoman, Safavid and Mughal empires." This thesis ___',
            options: ['Only restates the prompt', 'Earns the thesis point', 'Is not historically defensible', 'Shows complexity on its own']
          },
          {
            label: '"Religion mattered most for the Safavids, who imposed Shi\'ism, but the Ottomans and Mughals relied more on loyal military elites to rule diverse subjects." This thesis ___',
            options: ['Earns the thesis point', 'Only restates the prompt', 'Is not historically defensible', 'Lacks any claim']
          },
          {
            label: '"Religion played no role in any of the three empires." This thesis ___',
            options: ['Is not historically defensible', 'Earns the thesis point', 'Only restates the prompt', 'Shows complexity on its own']
          }
        ],
        correctAnswers: ['Only restates the prompt', 'Earns the thesis point', 'Is not historically defensible'],
        hint1: 'Does it make a claim the prompt did not already make?',
        hint2: 'Look for a claim plus a reason.',
        hint3: 'Could evidence support it at all?',
        explanation: 'The first only repeats the prompt. The second makes a defensible claim with a line of reasoning. The third contradicts the evidence, since all three dynasties used religion to legitimize rule.'
      }
    }
  ]
}
