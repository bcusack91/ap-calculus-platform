export const apushNativeSocietiesExplorationPart4Data = {
  topicSlug: 'apush-native-societies-exploration',
  sections: [
    {
      id: 'apushnat4-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Native Societies & European Exploration

**Part 4 of 7 — The Columbian Exchange: Data and Causation**

---

| Section |
|---------|
| 📖 Reading Population Estimates Like a Historian |
| Worked Example: Central Mexico, 1518–1605 |
| Source Study: Thomas Harriot on Epidemic Disease (1588) |
| Global Effects: Food, Silver, Sugar and Horses |
| Causation Skill: Three Ways to Classify a Cause |

> 🔑 **Key Concept:** Part 1 listed what crossed the Atlantic. This part asks the harder questions the exam asks: **how do we know** how many people died, **why** the epidemics were so lethal, and **what long-term changes** the exchange set in motion on both sides of the ocean.
      `
    },
    {
      id: 'apushnat4-data',
      type: 'text' as const,
      content: `
## 📖 Reading Population Estimates Like a Historian

No one counted the population of the Americas in 1492. Every figure you see is an **estimate**, and estimates for the whole hemisphere range from under 10 million to over 100 million. Many historians today work with something like 40–60 million. Why such a spread?

| Method | How It Works | Weakness |
|---|---|---|
| **Back-projection from colonial records** | Start with a Spanish tribute count, then estimate how many people had already died | Depends on an assumed death rate before the first count |
| **Carrying capacity** | Estimate how many people the land and farming methods could feed | Assumes land was used to its maximum |
| **Archaeology** | Count house sites, burials, village sizes | Patchy coverage; dating is approximate |

**Skill point:** When a question gives you a population figure, ask who produced it, from what evidence, and for what purpose. A Spanish tribute census was made to collect tribute, so it may undercount people who fled or hid.

## Worked Example: Central Mexico, 1518–1605

In the 1960s the historians Sherburne Cook and Woodrow Borah used Spanish tribute records to estimate the population of central Mexico. Their figures are among the most cited, and among the most debated; many scholars think the starting figure is too high. The **trend**, however, is accepted by nearly everyone.

| Year | Estimated population (Cook and Borah) |
|---|---|
| 1518 | 25.2 million |
| 1532 | 16.8 million |
| 1548 | 6.3 million |
| 1568 | 2.65 million |
| 1580 | 1.9 million |
| 1595 | 1.375 million |
| 1605 | 1.075 million |

### Step 1: Calculate the overall change

Decline = 25.2 − 1.075 = 24.125 million.
Percentage decline = 24.125 ÷ 25.2 ≈ 0.957, or about **96 percent**.

### Step 2: Find the steepest period

From 1532 to 1548 the estimate falls from 16.8 to 6.3 million, a loss of more than 60 percent in sixteen years. Spanish sources record a massive epidemic, called *cocoliztli* in Nahuatl, in 1545–1548.

### Step 3: Draw a careful conclusion

Even if the starting figure is too high by half, the population still fell by roughly 90 percent within a century. A claim about **direction and scale** is safe; a claim about an exact number is not.

> 🔑 **AP Connection:** APUSH data questions rarely ask you to compute. They ask what a table **shows** and what it **cannot show**. This table shows scale and timing; it cannot by itself tell you which disease, or how much war, labor and famine added to the deaths.
      `
    },
    {
      id: 'apushnat4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Data** ✍️

Use the Cook and Borah table above.

1) To the nearest whole percent, by what percentage did the estimated population fall between 1518 and 1605?

2) In which year does the table first show a population below 3 million?

3) What term do historians use for an estimate built backward from a later colonial count?

Enter a number, a year, or a short term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['96', '1568', 'back-projection'],
        hint1: 'Compute (25.2 − 1.075) ÷ 25.2 and multiply by 100.',
        hint2: 'Scan the right-hand column for the first figure smaller than 3.',
        hint3: 'The method projects backward from a census: back-___.',
        explanation: '(25.2 − 1.075) ÷ 25.2 ≈ 0.957, so about 96 percent. The first figure below 3 million is 2.65 million in 1568. Back-projection starts from a colonial count and estimates backward to the pre-contact population.'
      }
    },
    {
      id: 'apushnat4-harriot',
      type: 'text' as const,
      content: `
## Source Study: Thomas Harriot on Epidemic Disease (1588)

Thomas Harriot was a scientist on Sir Walter Raleigh's 1585–1586 expedition to Roanoke Island, in present-day North Carolina. His report was published in 1588 to encourage English investment in "Virginia."

> "...within a few days after our departure from every such town, the people began to die very fast, and many in short space; in some towns about twenty, in some forty, and in one six score, which in truth was very many in respect of their numbers.... The disease also was so strange, that they neither knew what it was, nor how to cure it; the like by report of the oldest men in the country never happened before, time out of mind."
>
> — Thomas Harriot, *A Briefe and True Report of the New Found Land of Virginia*, 1588 (spelling modernized)

### HIPP and What the Source Reveals

| Element | Analysis |
|---|---|
| **Historical context** | Written after the first English colony at Roanoke (1585–1586); Spain already ruled much of the Americas, and England hoped to compete |
| **Intended audience** | English investors and supporters of Raleigh's venture |
| **Purpose** | To present Virginia as promising and its peoples as manageable. Harriot reported that the Algonquian peoples saw the deaths as a sign of English power, a claim that served his purpose |
| **Point of view** | An educated English observer who did not understand disease transmission (germ theory was centuries away) |

### Why Were the Epidemics So Deadly?

Historians identify **reinforcing causes**, not a single one:

1. **No prior exposure.** Smallpox, measles and influenza had circulated in Afro-Eurasia for centuries, so many Europeans had survived childhood infection. Native populations had never encountered these diseases, so every age group fell sick at once (a "virgin soil" epidemic).
2. **Successive waves.** One epidemic followed another before populations could recover.
3. **Compounding stresses.** War, forced labor, displacement and famine weakened survivors and left no one to plant or harvest.

> 🔑 **AP Connection:** Harriot's account is valuable because it comes from **North America** before permanent English settlement. It shows that epidemics followed even brief contact, which helps explain why English colonists in the 1600s often found depopulated coastal regions.
      `
    },
    {
      id: 'apushnat4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source and Data Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Harriot\'s observation that "the like by report of the oldest men in the country never happened before" is best explained by which of the following?',
            options: [
              'Native peoples had never been exposed to these diseases',
              'Native healers had refused to treat the English visitors',
              'English settlers had deliberately poisoned the local water supply',
              'Native towns had grown too large for their farms to feed'
            ],
            correctAnswer: 0,
            explanation: 'Elders had never seen such illness because these diseases had never reached the Americas before contact. Harriot describes no poisoning, and the deaths followed English visits to towns of modest size rather than famine from overcrowding.'
          },
          {
            question: 'Which of the following is the most important limitation of the Cook and Borah table as evidence?',
            options: [
              'It covers too short a period to show any trend over time',
              'Its figures are estimates from tribute records',
              'It was compiled by Native historians writing in Nahuatl',
              'It measures population in Peru rather than in Mexico'
            ],
            correctAnswer: 1,
            explanation: 'The figures are modern estimates derived from colonial tribute counts, so the exact numbers, especially the 1518 starting point, are debated. The table spans almost a century, covers central Mexico, and was produced by twentieth-century U.S. scholars.'
          }
        ]
      }
    },
    {
      id: 'apushnat4-global',
      type: 'text' as const,
      content: `
## Global Effects: Food, Silver, Sugar and Horses

The CED treats the Columbian Exchange as a cause of long-term change on **both sides** of the Atlantic.

| Effect | Mechanism | Where and When |
|---|---|---|
| **Population growth in the Eastern Hemisphere** | American crops such as potatoes, maize and sweet potatoes grew in soils and climates where wheat or rice did poorly | Potatoes in northern Europe; maize in West and Central Africa; sweet potatoes and maize in China (1600s–1700s) |
| **A global silver economy** | Silver from Potosí and Zacatecas paid for European imports from Asia | Manila galleons linked Mexico and China after 1565 |
| **The sugar and slavery complex** | European demand for sugar created labor-hungry plantations | Brazil and the Caribbean; the largest forced migration in history before 1800 |
| **Transformation of the Plains** | Horses escaped or were traded from Spanish settlements | Spread north after 1680; by the 1700s Comanche, Lakota and others built mounted bison-hunting societies |
| **Environmental change** | Free-ranging cattle and pigs trampled Native fields; sugar planters cleared forests | Mexico, Caribbean, later English colonies |

### Following One Chain: From Sugar to the Atlantic Slave Trade

1. Europeans already valued sugar, grown with enslaved labor on Atlantic islands such as Madeira and São Tomé.
2. The tropical Caribbean and Brazil offered vast new land for cane.
3. Native labor collapsed in the Caribbean through disease and overwork.
4. Planters bought captives from European traders who partnered with West African states and merchants.
5. **Result:** Of the roughly 12.5 million Africans forced aboard slave ships between 1500 and 1866, the great majority went to Brazil and the Caribbean, not to North America.

## Causation Skill: Three Ways to Classify a Cause

| Distinction | Question | Example from Period 1 |
|---|---|---|
| **Proximate vs. underlying** | What triggered it, and what made it possible? | Proximate: smallpox in Tenochtitlán in 1520. Underlying: centuries of separation between the hemispheres |
| **Intended vs. unintended** | Did anyone plan this outcome? | Intended: Spanish pursuit of silver. Unintended: the Plains horse culture |
| **Short-term vs. long-term** | When did the effect appear? | Short-term: fall of the Mexica. Long-term: population growth in China from American crops |

> 🔑 **AP Connection:** The highest-scoring causation answers sort causes this way without being asked. "Disease was the proximate cause of collapse, but Spanish labor demands and warfare were underlying conditions that prevented recovery" is a complexity-level sentence.
      `
    },
    {
      id: 'apushnat4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Causation Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The spread of horses among Plains peoples such as the Comanche and Lakota is best described as which kind of effect of the Columbian Exchange?',
            options: [
              'An intended result of Spanish missionary policy',
              'A short-term result of the 1492 voyage alone',
              'An unintended, long-term result of Spanish colonization',
              'A direct result of English trade with Plains nations'
            ],
            correctAnswer: 2,
            explanation: 'The Spanish did not plan to supply Native peoples with horses, and mounted bison-hunting societies emerged over the 1600s and 1700s. English traders were not active on the southern Plains in this period.'
          },
          {
            question: 'Which of the following developments most directly resulted from the introduction of American food crops into Africa, Europe and Asia?',
            options: [
              'A decline in long-distance trade between Europe and Asia',
              'Population growth fed by new high-calorie staple foods',
              'The end of sugar cultivation on the Atlantic islands',
              'A shift of European settlement away from the Americas'
            ],
            correctAnswer: 1,
            explanation: 'Potatoes, maize and sweet potatoes could grow where older staples did poorly, which helped feed growing populations across the Eastern Hemisphere. Trade with Asia expanded, sugar cultivation spread, and European migration to the Americas increased.'
          },
          {
            question: 'A student argues that disease alone explains the collapse of Native populations after 1492. Which evidence would best complicate that argument?',
            options: [
              'Smallpox struck Tenochtitlán during the Spanish siege of 1520',
              'Harriot reported deaths in towns the English had recently visited',
              'Forced labor and famine kept survivors from recovering their numbers',
              'European colonists had been exposed to smallpox in childhood'
            ],
            correctAnswer: 2,
            explanation: 'Labor demands and famine show that human actions compounded the epidemics and prevented recovery, which complicates a disease-only explanation. The other three statements are accurate but all support the importance of disease rather than complicating it.'
          }
        ]
      }
    }
  ]
}
