export const hgLanguageReligionPart6Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglangua6-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 6 of 7 — AP Exam Practice: Regional Data and Religious Change**

---

| Section |
|---------|
| 📖 Stimulus 1: Language and Religion by Region |
| Stimulus 2: Religious Affiliation in England and Wales, 2001 to 2021 |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Language and religion stimuli test two moves: **compare scales** (a national total against its regions) and **explain change over time** (a trend, its causes and its limits as evidence). Calculate first, then connect the numbers to centripetal and centrifugal forces, diffusion or secularization.
`
    },
    {
      id: 'hglangua6-stimulus1',
      type: 'text' as const,
      content: `
## 📖 Stimulus 1: Language and Religion by Region

The table describes the three regions of a **hypothetical** country, Kestria. Language A is the only official language and the language of government and universities.

| Region | Population | Main home language | Can speak Language A | Christian | Muslim | Other or none |
|---|---|---|---|---|---|---|
| **North** | 12 million | Language B | 35% | 10% | 85% | 5% |
| **Central** (capital) | 20 million | Language A | 95% | 60% | 25% | 15% |
| **South** | 8 million | Language C | 50% | 90% | 5% | 5% |

### Reading the Table Before the Questions
1. **National totals:** Christians = 1.2 + 12 + 7.2 = 20.4 million of 40 million, or **51 percent**. Muslims = 10.2 + 5 + 0.4 = 15.6 million, or **39 percent**. A national map would shade Kestria as Christian-majority.
2. **Regional reality:** the North is 85 percent Muslim and mostly speaks Language B; only about a third of its people speak the official language.
3. **Overlap:** in the North, **language and religion differences coincide**, and both separate it from the capital region. Overlapping differences make centrifugal pressure stronger than either difference alone.
4. **Policy link:** with Language A required for government jobs and universities, most northerners are cut off from national opportunities.
`
    },
    {
      id: 'hglangua6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which region is most likely to develop a separatist or autonomy movement?',
            options: [
              'North',
              'Central',
              'South',
              'All three equally'
            ],
            correctAnswer: 0,
            explanation: 'The North differs from the capital in both language and religion, and few of its people speak the official language, so centrifugal pressure is strongest there. The South shares the capital\'s majority religion, and Central holds the capital.'
          },
          {
            question: 'Which change would most likely act as a centripetal force in Kestria?',
            options: [
              'Making Language B co-official and offering university classes in it',
              'Requiring Language A in all primary schools across the North',
              'Moving the capital to the South, where Christians are the majority',
              'Ending all broadcasts in Languages B and C on national television'
            ],
            correctAnswer: 0,
            explanation: 'Recognizing the North\'s language gives its people access to state institutions and signals inclusion, which strengthens ties to the state. Forcing Language A or removing other languages from media would deepen grievances.'
          },
          {
            question: 'A world map shades Kestria as a Christian-majority country. What is the main limitation of that map for understanding Kestria?',
            options: [
              'It hides a large minority concentrated in one region',
              'It overstates the total population of the whole country',
              'It shows religion at too local a scale to be useful',
              'It counts religious practice rather than identity'
            ],
            correctAnswer: 0,
            explanation: 'At 51 percent, Christians are only a slim national majority; Muslims are 39 percent and form 85 percent of the North. A national majority map hides both facts. It says nothing about population totals or practice.'
          }
        ]
      }
    },
    {
      id: 'hglangua6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Stimulus 1.

**1)** How many million people in the North can speak Language A?

**2)** How many million people in all of Kestria can speak Language A? Give one decimal place.

**3)** What percent of all Kestrians can speak Language A? Round to the nearest whole percent.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.2', '27.2', '68'],
        hint1: 'Multiply 12 million by 0.35.',
        hint2: 'Add the three regions: 12 × 0.35, 20 × 0.95 and 8 × 0.50.',
        hint3: 'Divide your answer to question 2 by the total population of 40 million.',
        explanation: '1) 12 × 0.35 = 4.2 million. 2) 4.2 + 19 + 4 = 27.2 million. 3) 27.2 ÷ 40 = 0.68, or 68 percent. The national figure hides that only 35 percent of northerners can use the official language.'
      }
    },
    {
      id: 'hglangua6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: Religious Affiliation in England and Wales, 2001 to 2021

A line graph, described in text, shows census answers to the **voluntary** religion question. Each line has three points.

| Census year | Christian | No religion | Muslim |
|---|---|---|---|
| 2001 | 71.7% | 14.8% | 3.0% |
| 2011 | 59.3% | 25.2% | 4.9% |
| 2021 | 46.2% | 37.2% | 6.5% |

**Shape of the graph:** the Christian line falls steeply and evenly, by about 12 to 13 points each decade. The no-religion line rises by about 10 to 12 points each decade. The Muslim line rises gently. The Christian and no-religion lines are converging and, if trends continued, would cross within a few decades.

### Reading It
1. **Trend:** a rapid shift from Christian identity to no religion: **secularization**.
2. **Causes:** younger people are much more likely than older people to report no religion, so the shift continues as generations replace one another; immigration from South Asia and elsewhere added to the Muslim population.
3. **Limitation:** the census asks about **identity**, not belief or attendance, and the question is voluntary, so some people skip it.
`
    },
    {
      id: 'hglangua6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Using Stimulus 1, identify the region where the official language is least spoken.**
> *Model:* The North, where only 35 percent can speak Language A.

**B. Explain how language could act as a centrifugal force in Kestria.**
> *Model:* Because Language A is required for government jobs and universities, northerners who speak Language B are shut out of national opportunities, which breeds resentment and can fuel demands for autonomy or separation.

**C. Explain why the national religious figure for Kestria is misleading.**
> *Model:* Nationally, Christians are 51 percent, which suggests a Christian country, but Muslims are 39 percent overall and 85 percent of the North; the national scale hides a large minority concentrated in one region.

**D. Describe the trend shown in Stimulus 2.**
> *Model:* Between 2001 and 2021, the share identifying as Christian fell from about 72 to 46 percent while the share with no religion rose from about 15 to 37 percent.

**E. Explain one cause of the trend in Stimulus 2.**
> *Model:* Younger generations are far more likely to report no religion than older ones, so as older Christian-identifying cohorts die and younger cohorts become adults, the national share with no religion rises.

**F. Explain one limitation of Stimulus 2 as evidence of declining religious belief.**
> *Model:* The census measures self-identified affiliation, not belief or practice; some people with no affiliation still believe in God, and some who call themselves Christian rarely attend, so the data do not directly measure belief.

### Why These Answers Score
- Each cites **specific numbers** from the stimulus.
- Each **explain** gives a mechanism with *because* or *so*.
- Part F names exactly **what is measured** and why that differs from the claim.
`
    },
    {
      id: 'hglangua6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'Which process does Stimulus 2 most directly show?',
            options: [
              'Secularization',
              'Language creolization',
              'Hierarchical diffusion',
              'Religious syncretism'
            ],
            correctAnswer: 0,
            explanation: 'A falling share of people identifying with a religion and a rising share with none is secularization. Creolization concerns language, and syncretism is the blending of two traditions.'
          },
          {
            question: 'Which additional data would best test whether the trend in Stimulus 2 is driven by generational change?',
            options: [
              'Religious affiliation broken down by age group in each census year',
              'The number of churches built in England in each decade',
              'A map of the largest religion in each country of Europe',
              'The share of Welsh speakers in each census year'
            ],
            correctAnswer: 0,
            explanation: 'If younger age groups report no religion far more often than older ones, generational replacement explains much of the trend. Church building, a Europe-wide map and language data do not separate the effect of age.'
          },
          {
            question: 'The Muslim share in England and Wales rose from 3.0 to 6.5 percent. Which process best explains most of this increase?',
            options: [
              'Migration and a younger age structure',
              'Conversion campaigns in rural districts',
              'Boundary changes that added new territory',
              'Contagious diffusion from mainland Europe'
            ],
            correctAnswer: 0,
            explanation: 'Immigration and the younger average age of Muslim communities, with more people in childbearing years, account for most of the growth, a form of relocation diffusion. There were no boundary changes, and conversion explains only a small share.'
          }
        ]
      }
    }
  ]
}
