export const hgPopulationDistributionPart6Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula6-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 6 of 7 — AP Exam Practice: Density Data and Pyramids**

---

| Section |
|---------|
| 📖 Stimulus 1: A Density Table for Three Countries |
| Stimulus 2: A Population Pyramid, Described in Text |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Exam questions on this topic hand you a table or a pyramid and ask you to calculate, describe and explain. The method is always the same: read the numbers or the shape, name the concept, then connect it to a process and a consequence.
`
    },
    {
      id: 'hgpopula6-stimulus1',
      type: 'text' as const,
      content: `
## 📖 Stimulus 1: A Density Table for Three Countries

The table shows three **hypothetical** countries. All densities are people (or farmers) per km².

| Country | Arithmetic density | Physiological density | Agricultural density | Share of workers in farming |
|---|---|---|---|---|
| **Aldoria** | 60 | 2,400 | 600 | 55% |
| **Brevia** | 380 | 1,500 | 25 | 2% |
| **Corvala** | 15 | 60 | 4 | 3% |

### Reading the Table Before the Questions
- **Aldoria:** physiological density is **40 times** its arithmetic density (2,400 ÷ 60), so arable land is only about 2.5 percent of the total. Most people farm, and agricultural density is very high: small, labor-intensive plots under heavy pressure.
- **Brevia:** densely settled overall, with heavy pressure on farmland, but very few farmers per km²: mechanized, productive agriculture in a mostly urban, service economy. Food imports are likely.
- **Corvala:** plenty of land and farmland per person, with large mechanized farms; a likely food exporter.

> 🔑 **AP Connection:** Look for the **ratio** of physiological to arithmetic density (how scarce farmland is) and the **level** of agricultural density (how farming is organized). Those two readings answer most density questions.
`
    },
    {
      id: 'hgpopula6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which country in the table most likely faces the greatest pressure on its farmland from people who farm it by hand?',
            options: [
              'Aldoria',
              'Brevia',
              'Corvala',
              'Brevia and Corvala equally'
            ],
            correctAnswer: 0,
            explanation: 'Aldoria has the highest physiological density and a very high agricultural density with most workers in farming, which signals many people working small plots of scarce land. Brevia has high physiological but low agricultural density, and Corvala has low values on both.'
          },
          {
            question: 'Brevia has a high physiological density but a low agricultural density. Which conclusion is best supported?',
            options: [
              'Its few farmers use machinery and capital to farm scarce land productively',
              'Its farmers work very small plots of land by hand to feed a large population',
              'Its population is spread evenly across a large area of good farmland',
              'Its government has banned most farming to protect its natural forests'
            ],
            correctAnswer: 0,
            explanation: 'Low agricultural density means few farmers per km² of arable land, which points to mechanized farming, and the high physiological density shows farmland is scarce. Small hand-worked plots would raise agricultural density, and the data say nothing about a ban.'
          },
          {
            question: 'Which statement about Corvala is accurate?',
            options: [
              'It has much farmland per person',
              'It has very little arable land',
              'Most of its workers are farmers',
              'It is the most densely settled'
            ],
            correctAnswer: 0,
            explanation: 'A physiological density of 60 means only 60 people per km² of arable land, a lot of farmland per person. Only 3 percent of workers farm, and its arithmetic density is the lowest of the three.'
          }
        ]
      }
    },
    {
      id: 'hgpopula6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: A Population Pyramid, Described in Text

**Country R, 2025 (percent of total population):**

- The bars for ages 0–4 through 15–19 are **narrow** and about equal in length on both sides, each about 2 to 3 percent for each sex.
- From ages 25–29 through 40–44, the **male** bars on the left are three to four times as long as the female bars on the right, forming a large bulge.
- Above age 50, bars on both sides are short and taper quickly.
- About **75 percent** of the total population is male.

### Reading It
1. **Base:** narrow, so births are low relative to the size of the working-age population.
2. **Bulge:** a male-only bulge at working ages, the signature of **sex-selective labor migration**.
3. **Top:** few elderly, because migrant workers usually return home or move on before old age.
4. **Inference:** Country R resembles a Gulf state such as Qatar or the UAE, where foreign workers make up most of the labor force.
`
    },
    {
      id: 'hgpopula6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Using Stimulus 1, identify the country with the lowest arithmetic density.**
> *Model:* Corvala, at 15 people per km².

**B. Explain what the difference between Aldoria's arithmetic and physiological densities reveals.**
> *Model:* Aldoria's physiological density (2,400) is 40 times its arithmetic density (60), which shows that only a small share of its land is arable; its population depends on a limited area of farmland, so land is under heavy pressure.

**C. Describe the age-sex structure shown in Stimulus 2.**
> *Model:* The pyramid has a narrow base and a large bulge of males aged about 25 to 44, much larger than the female bars at those ages, with few people over 50.

**D. Explain one process that produces the structure in Stimulus 2.**
> *Model:* Large numbers of foreign men migrate to Country R for construction and service jobs, often without their families, which adds working-age males but few women, children or elderly.

**E. Explain one consequence of this structure for Country R.**
> *Model:* Because most workers are temporary migrants, demand concentrates on worker housing and transport rather than schools or elder care; and the economy depends on continued migration, so a fall in recruitment would quickly shrink the labor force.

**F. Explain one limitation of using arithmetic density alone to compare the three countries.**
> *Model:* Arithmetic density divides people by all land, including deserts or mountains that cannot be farmed or settled, so it hides how concentrated people are and how much pressure they put on farmland.

### Why These Answers Score
- Each **explain** response links a cause to an effect with *because* or *so*.
- Each uses **evidence from the stimulus** (2,400 vs. 60; ages 25 to 44).
- None stops at a definition.
`
    },
    {
      id: 'hgpopula6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Aldoria's physiological density is 2,400 and its arithmetic density is 60. How many times larger is the physiological density?

**2)** In Country R, 75 percent of the population is male. What is the sex ratio, in males per 100 females?

**3)** Brevia has 20,000,000 people and 13,000 km² of arable land. To the nearest whole number, what is its physiological density? Enter digits only, no commas.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '300', '1538'],
        hint1: 'Divide 2,400 by 60.',
        hint2: 'If 75 of every 100 people are male, then 25 are female. Divide 75 by 25 and multiply by 100.',
        hint3: 'Divide 20,000,000 by 13,000.',
        explanation: '1) 2,400 ÷ 60 = 40. 2) 75 ÷ 25 = 3, so the sex ratio is 300 males per 100 females. 3) 20,000,000 ÷ 13,000 ≈ 1,538 people per km² of arable land, close to the 1,500 in the table.'
      }
    },
    {
      id: 'hgpopula6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'Which process best explains the large male bulge at ages 25 to 44 in Country R?',
            options: [
              'Labor migration of men',
              'A baby boom about 30 years ago',
              'Sex-selective births in recent years',
              'High death rates among older women'
            ],
            correctAnswer: 0,
            explanation: 'An imbalance confined to working ages and to one sex points to men arriving for jobs. A baby boom would raise both sexes, sex-selective births would skew the youngest bars, and deaths among older women would affect the top.'
          },
          {
            question: 'Which change would most likely follow if Country R sharply cut the number of foreign work permits it issues?',
            options: [
              'The male working-age bulge would shrink over the next few years',
              'The base of the pyramid would widen because births would rise',
              'The share of residents over 65 would fall to almost nothing',
              'The female bars at ages 25 to 44 would grow longer than the male'
            ],
            correctAnswer: 0,
            explanation: 'Fewer permits means fewer working-age men arriving to replace those who leave, so the bulge would shrink. A permit cut does not by itself raise births, the elderly share would rise slightly rather than fall, and women would not suddenly outnumber men.'
          }
        ]
      }
    }
  ]
}
