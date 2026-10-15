export const hgPoliticalPowerPart4Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpoliti4-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Power & Territoriality

**Part 4 of 7 — State Shape and Access: Reading the Data and the Limits**

---

| Section |
|---------|
| 📖 Measuring Shape |
| Proruptions, Enclaves and Corridors |
| Landlocked States and Access to the Sea |
| What Shape Can and Cannot Predict |

> 🔑 **Key Concept:** Part 1 named the five shapes of states. Shape is a **traditional model** in political geography: it suggests how hard a territory is to govern, defend and connect. Like every model in this course, it has **limits**. Shape is one factor among many, and states with "difficult" shapes can be stable while compact states can collapse.
`
    },
    {
      id: 'hgpoliti4-measure',
      type: 'text' as const,
      content: `
## 📖 Measuring Shape

A shape label is a judgment. Numbers make the judgment testable.

### Worked Example: How Elongated Is Chile?
- Length from north to south: about **4,300 km**.
- Average width from the Pacific to the Andes: about **175 km**.
- **Length-to-width ratio:** 4,300 ÷ 175 ≈ **25**.

A compact state such as Poland has a ratio close to **1**: it is roughly as wide as it is long. Chile's ratio of about 25 means that the capital, Santiago, near the middle, is about 2,000 km by road from the northern border and farther still from the southern tip, and every road, power line and army supply route must run along one narrow strip.

### Worked Example: How Fragmented Is Indonesia?
- About **17,000** islands, of which several thousand are inhabited.
- Spread across about **5,000 km** from east to west.
- About **280 million** people (2024), more than half of them on the single island of Java.

Fragmentation shows up in **where people live**, not just in the number of islands. With most people on one island, the outer islands can feel far from the center in every sense.

### Worked Example: A State Split by Another: Pakistan, 1947–1971
- At independence, Pakistan had two parts, **West** and **East Pakistan**, about **1,600 km** apart, with India between them.
- East Pakistan held more people, spoke **Bengali**, and felt ruled from the West, where power and spending were concentrated.
- In **1971**, after a war, East Pakistan became **Bangladesh**.
- **Lesson:** fragmentation alone did not cause the split. It combined with a **language** difference and **uneven power** to produce a breakup.
`
    },
    {
      id: 'hgpoliti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A state is 1,800 km long and averages 120 km wide. What is its length-to-width ratio?',
            options: [
              '15',
              '12',
              '18',
              '1.5'
            ],
            correctAnswer: 0,
            explanation: '1,800 ÷ 120 = 15, so the state is about 15 times as long as it is wide, which makes it elongated.'
          },
          {
            question: 'Which statement best explains why East Pakistan became Bangladesh in 1971?',
            options: [
              'Bengalis resented rule from the distant west',
              'The two wings were separated by about 1,600 km of India',
              'East Pakistan was landlocked and lacked its own seaports',
              'Fragmented states tend to split apart within decades'
            ],
            correctAnswer: 0,
            explanation: 'The distance made the split possible, but Bengali identity and resentment of rule from the West drove it. Distance alone does not explain it, East Pakistan had seaports, and many fragmented states stay united.'
          },
          {
            question: 'Most of Indonesia\'s people live on Java. Why does this matter for governing a fragmented state?',
            options: [
              'Outer islands can feel distant from a center dominated by one island',
              'It makes the state compact, because a single island holds most residents',
              'It means the outer islands have no need for any regional government',
              'It lets the government move its capital to any island without cost'
            ],
            correctAnswer: 0,
            explanation: 'When power and population concentrate on one island, people on distant islands may feel neglected, which can feed demands for autonomy. Population concentration does not change the state\'s fragmented shape.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti4-proruptions',
      type: 'text' as const,
      content: `
## Proruptions, Enclaves and Corridors

Many proruptions were drawn deliberately, often by colonial powers, to give access to something.

| Feature | Case | Why it exists |
|---|---|---|
| **Proruption to a river** | Namibia's **Caprivi Strip** (now the Zambezi Region) | Britain and Germany agreed in **1890** to give German South West Africa access to the Zambezi River |
| **Proruption as a buffer** | Afghanistan's **Wakhan Corridor** | Agreed in the 1890s so that the Russian and British empires would not share a border |
| **Proruption to the sea** | The Democratic Republic of the Congo's narrow strip to the Atlantic | Gives the vast interior an outlet at the mouth of the Congo River |
| **Enclave and perforated state** | **Lesotho** inside South Africa; **Vatican City** and **San Marino** inside Italy | Lesotho remained a separate British protectorate when South Africa was formed |

### Worked Example: How Much Does Lesotho Perforate South Africa?
- Lesotho: about **30,000 km²**. South Africa: about **1,220,000 km²**.
- 30,000 ÷ 1,220,000 ≈ 0.025, so Lesotho fills a hole of about **2.5 percent** of South Africa's outline.
- Small in area, but large in effect for Lesotho: every road, pipeline and trade route out of Lesotho crosses South Africa.
`
    },
    {
      id: 'hgpoliti4-landlocked',
      type: 'text' as const,
      content: `
## Landlocked States and Access to the Sea

About **44** states have no coastline; the UN counts **32** of them as **landlocked developing countries**, which face higher costs to reach world markets. Two states, **Liechtenstein** and **Uzbekistan**, are **double-landlocked**: every neighbor is landlocked too.

| Case | What happened | How it manages access |
|---|---|---|
| **Bolivia** | Lost its coast to Chile in the War of the Pacific (1879–1884), confirmed by a 1904 treaty | Uses Chilean and Peruvian ports by agreement; in **2018** the International Court of Justice ruled that Chile was not obliged to negotiate sea access |
| **Ethiopia** | Became landlocked when Eritrea gained independence in **1993** | Sends most of its trade through the port of **Djibouti** |
| **Switzerland** and **Austria** | Long landlocked | Rich and stable, with rail, river and road links through friendly neighbors |

**Reading the table:** landlocked status raises costs, but **relations with neighbors** and **infrastructure** decide how much. Switzerland and Austria trade easily through the EU's open market; Bolivia's access depends on agreements with a former enemy.
`
    },
    {
      id: 'hgpoliti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Switzerland and Bolivia are both landlocked. Which factor best explains why landlocked status costs Switzerland far less?',
            options: [
              'Its open borders and transport links with friendly neighbors',
              'Its shape is elongated, which gives it a longer border',
              'Its mountains block invasions from neighboring states',
              'Its rivers flow directly into the Pacific Ocean'
            ],
            correctAnswer: 0,
            explanation: 'Switzerland reaches the sea easily through neighbors with which it has open trade and dense rail and road links, while Bolivia depends on agreements with Chile. Switzerland is not elongated, and its rivers drain to the North Sea, the Mediterranean and the Black Sea.'
          },
          {
            question: 'Namibia\'s Caprivi Strip was created in 1890 mainly to ___',
            options: [
              'give access to the Zambezi River',
              'separate two rival ethnic groups',
              'link two halves of a divided state',
              'protect a coastal port from attack'
            ],
            correctAnswer: 0,
            explanation: 'Britain and Germany drew the strip so that German South West Africa could reach the Zambezi River. It was a colonial bargain, not a response to ethnic settlement or defense of a port.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti4-limits',
      type: 'text' as const,
      content: `
## What Shape Can and Cannot Predict

| The model predicts | Counter-evidence | Better conclusion |
|---|---|---|
| Elongated states are hard to govern | **Chile** is one of Latin America's most stable and prosperous states | Elongation raises costs; institutions decide the outcome |
| Compact states are easy to govern | **Rwanda** is compact, yet suffered genocide in 1994 | Compactness does not prevent ethnic conflict |
| Fragmented states break up | **Japan** and the **Philippines** are fragmented but intact; **Pakistan** split in 1971 | Fragmentation matters when it lines up with cultural or economic divides |
| Landlocked states are poor | **Switzerland** and **Austria** are rich; **Chad** and **Bolivia** are poor | Access depends on neighbors and infrastructure |

> 🔑 **AP Connection:** Shape is a **possibilist** factor: it sets costs and opportunities, but people and institutions decide the result. If you cite shape in an answer, pair it with a **cultural**, **economic** or **political** factor.

### Scale Check
Shape is a **national-scale** model. It says nothing about divisions **inside** a state, such as a concentrated minority or a rich region, which often matter more.
`
    },
    {
      id: 'hgpoliti4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Chile is about 4,300 km long and about 175 km wide on average. To the nearest whole number, what is its length-to-width ratio?

**2)** A state of 600,000 km² completely surrounds an enclave of 12,000 km². What percent of the outer state's outline does the enclave fill?

**3)** Liechtenstein and Uzbekistan are both surrounded only by landlocked states. They are called _______-landlocked.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '2', 'double'],
        hint1: 'Divide 4,300 by 175 and round.',
        hint2: 'Divide 12,000 by 600,000, then multiply by 100.',
        hint3: 'Two layers of land between them and the sea.',
        explanation: '1) 4,300 ÷ 175 ≈ 24.6, about 25. 2) 12,000 ÷ 600,000 = 0.02, which is 2 percent. 3) A state whose neighbors are all landlocked is double-landlocked.'
      }
    }
  ]
};
