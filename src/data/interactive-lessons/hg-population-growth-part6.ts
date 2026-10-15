export const hgPopulationGrowthPart6Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula6-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Population Questions Are Built |
| Stimulus Set 1: Four Countries |
| Stimulus Set 2: Country Q Over Time |
| Free-Response Practice with Model Answers |

> 🔑 **Key Concept:** AP Human Geography questions on population almost always give you **data** (a table, a graph or a population pyramid) and ask you to **apply** a model or theory to it. Points go to answers that cite the data, name the concept and explain the **mechanism** connecting them.
`
    },
    {
      id: 'hgpopula6-format',
      type: 'text' as const,
      content: `
## 📖 How Population Questions Are Built

The exam has **60 multiple-choice questions** and **3 free-response questions**. Each FRQ is worth 7 points, in parts A through G. One FRQ has no stimulus, one has one stimulus, and one has two.

### Task Verbs

| Verb | What earns the point | Population example |
|---|---|---|
| **Identify** | Name the correct term, place or value; no explanation needed | "Identify the DTM stage of Niger." → Stage 2 |
| **Define** | Give the meaning of a term | "Define TFR." → average number of children a woman would have over her lifetime |
| **Describe** | Give the relevant characteristics; a sentence or two | "Describe Japan's age structure." → large share of people 65+, small share of children |
| **Explain** | Give the **how** or **why**, with a cause and its effect | "Explain why Niger's CDR fell." → vaccines and clean water reduced deaths from infectious disease |
| **Compare** | State a similarity or difference **and** support it | "Compare the dependency ratios of Japan and Niger." → both high, but Niger's from children and Japan's from elders |

### Three Habits That Earn Points

1. **Quote the data.** "Niger's CBR of 42 is far above its CDR of 9" is stronger than "Niger has a high birth rate."
2. **Name the concept.** Use the model's vocabulary: Stage 2, natural increase, pro-natalist, old-age dependency.
3. **Give the mechanism.** "Because women's schooling delays marriage" is the part that turns a description into an explanation.
`
    },
    {
      id: 'hgpopula6-stimulus1',
      type: 'text' as const,
      content: `
## Stimulus Set 1: Four Countries

Data rounded, about 2023 (World Bank and national statistical agencies). Rates are per 1,000 people per year.

| Country | CBR | CDR | TFR | Share aged 65+ |
|---|---|---|---|---|
| Niger | 42 | 9 | 6.1 | 3% |
| India | 16 | 7 | 2.0 | 7% |
| United States | 11 | 9 | 1.6 | 18% |
| Japan | 6 | 13 | 1.2 | 29% |

**How to read it:** scan the CBR and CDR columns together to find natural increase, then check TFR against replacement (2.1), then use the 65+ column to judge age structure. Niger's gap between CBR and CDR is the largest; Japan's CDR is the only one above its CBR.
`
    },
    {
      id: 'hgpopula6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Practice: Four Countries** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Using the table, what is India's rate of natural increase?",
            options: [
              "0.9%",
              "2.3%",
              "9.0%",
              "0.09%"
            ],
            correctAnswer: 0,
            explanation: "RNI = (16 − 7) ÷ 10 = 0.9%. Adding the rates gives 2.3%, and forgetting to divide by 10, or dividing by 100, gives the other values."
          },
          {
            question: "Which country in the table is most likely to face a shrinking labor force over the next two decades, and why?",
            options: [
              "Japan, because its low TFR means small cohorts are entering working age",
              "Niger, because its high CBR means many children will soon need jobs",
              "India, because its TFR of 2.0 means its population is already falling",
              "United States, because its CDR is nearly as high as its CBR"
            ],
            correctAnswer: 0,
            explanation: "Decades of fertility far below replacement mean each cohort reaching age 15 is smaller than the one retiring. Niger faces the opposite problem of creating jobs for a growing workforce, and India's population is still growing from momentum."
          },
          {
            question: "Which description of Niger is best supported by the table?",
            options: [
              "A young population that is growing fast",
              "A death rate raised above Japan's by disease",
              "Fertility near replacement level but rising",
              "Growth that comes mostly from immigration"
            ],
            correctAnswer: 0,
            explanation: "A TFR of 6.1, an RNI of 3.3% and only 3% of people aged 65+ describe a young, fast-growing population. Niger's CDR is lower than Japan's, and the table contains no migration data."
          },
          {
            question: "A student argues that Japan's CDR of 13 shows poor health care. Which data in the table best refutes this argument?",
            options: [
              "Japan's 65+ share of 29%, which raises deaths per 1,000",
              "Japan's TFR of 1.2, which lowers births per 1,000 people",
              "Japan's CBR of 6, which is the lowest in the table",
              "Niger's CDR of 9, which reflects better care in Niger"
            ],
            correctAnswer: 0,
            explanation: "A crude death rate rises when a large share of the population is elderly, regardless of health-care quality. Japan's low TFR and CBR describe births, not deaths, and Niger's lower CDR reflects its young population rather than better care."
          }
        ]
      }
    },
    {
      id: 'hgpopula6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus Set 2: Country Q Over Time

The data describe a hypothetical **Country Q**.

| Year | CBR | CDR |
|---|---|---|
| 1950 | 45 | 25 |
| 1970 | 44 | 14 |
| 1990 | 32 | 8 |
| 2010 | 22 | 7 |
| 2020 | 18 | 7 |

**The graph, described in text:** on a line graph of these data, the CDR line drops steeply from 25 to 8 between 1950 and 1990, then flattens. The CBR line barely moves from 1950 to 1970, then falls steadily to 18 by 2020. The vertical gap between the lines is widest around **1970**, when RNI reaches 3.0%. After 1970 the gap narrows every decade, but the CBR line never drops below the CDR line.

### Reading the Graph Like the DTM

| Period | What the lines do | DTM stage |
|---|---|---|
| 1950–1970 | CDR falls sharply; CBR stays high | Stage 2 |
| 1970–2020 | CBR falls; CDR levels off | Stage 3 |
| After 2020 (projected) | If CBR keeps falling toward the CDR | Approaching Stage 4 |

Notice that RNI falls by more than half between 1970 and 2020, yet the population is still growing in every year shown, because births still exceed deaths.
`
    },
    {
      id: 'hgpopula6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the Country Q table.

**1)** What was Country Q's rate of natural increase in 1990, in percent?

**2)** Using the rule of 70, what was its approximate doubling time in 1990? Round to the nearest whole year.

**3)** Which stage of the DTM best describes Country Q from 1950 to 1970? Enter the stage number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.4', '29', '2'],
        hint1: 'Subtract the 1990 CDR from the 1990 CBR, then divide by 10.',
        hint2: 'Divide 70 by your answer to question 1.',
        hint3: 'Which rate is falling and which is staying high during those years?',
        explanation: '1) (32 − 8) ÷ 10 = 2.4%. 2) 70 ÷ 2.4 ≈ 29 years. 3) A sharply falling CDR with a CBR that stays near 45 is Stage 2.'
      }
    },
    {
      id: 'hgpopula6-frq',
      type: 'text' as const,
      content: `
## Free-Response Practice with Model Answers

**Prompt (uses Stimulus Set 1):** Answer parts A through G.

| Part | Task | Model answer | Why it earns the point |
|---|---|---|---|
| **A** | Identify the country in the table that best fits Stage 2 of the DTM. | Niger. | Correct identification; no explanation needed. |
| **B** | Define total fertility rate. | The average number of children a woman would have over her lifetime at current birth rates. | Accurate definition. |
| **C** | Explain one reason Niger's CBR remains high. | In Niger's largely rural, farming economy, children contribute labor and support parents in old age, so families benefit from having many children. | Gives the factor (rural economy) **and** the mechanism (children as an economic asset). |
| **D** | Explain why Japan's CDR is higher than Niger's. | About 29% of Japan's population is 65 or older, compared with about 3% of Niger's, so Japan has many more deaths per 1,000 people even with excellent health care. | Uses the data and links age structure to the crude rate. |
| **E** | Explain one limitation of using the DTM to predict the U.S. population. | The DTM ignores migration, so it cannot account for U.S. growth that comes mainly from immigration despite a TFR of about 1.6. | Names a limitation and applies it to the case. |
| **F** | Describe one policy a country with Japan's age structure might adopt. | Admitting more working-age immigrants, as Japan did with its 2019 Specified Skilled Worker visa. | Describes a specific, relevant policy. |
| **G** | Explain the degree to which Malthusian theory applies to Niger. | Partly: Niger's 3.3% growth puts pressure on farmland in a dry region, which fits Malthus, but food imports, aid and improved farming mean population has not simply outrun food as he predicted. | Takes a position on **degree** and supports both sides. |

### Responses That Would Not Earn the Point

| Part | Weak response | Problem |
|---|---|---|
| C | "Niger's birth rate is high because it is in Stage 2." | Circular: the stage describes the high birth rate; it does not cause it. |
| D | "Japan has worse health care than Niger." | Contradicts the data and ignores age structure. |
| G | "Malthus was wrong." | No degree and no evidence. |

> 🔑 **AP Connection:** "Explain the degree to which" questions reward a **qualified** position (largely, partly, to a limited degree) backed by evidence on both sides. A one-word verdict earns nothing.
`
    },
    {
      id: 'hgpopula6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**FRQ Reasoning Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Between 1970 and 1990 Country Q's CBR fell from 44 to 32. Which response would earn an \"explain\" point for this change?",
            options: [
              "Urbanization made children more costly to raise, so families chose to have fewer",
              "The birth rate fell because Country Q entered Stage 3 of the DTM",
              "Fewer births occurred because the crude birth rate went down",
              "Country Q's population grew rapidly during these two decades"
            ],
            correctAnswer: 0,
            explanation: "An explanation needs a cause and a mechanism, and rising child-rearing costs in cities supply both. Citing the stage or restating the falling rate is circular, and rapid growth describes the outcome rather than the cause."
          },
          {
            question: "Country Q's CDR fell sharply from 1950 to 1970. According to the ETM, which change most likely drove that decline?",
            options: [
              "Infectious disease receding",
              "Heart disease and cancer becoming rarer",
              "Drug-resistant infections spreading widely",
              "Surgery delaying deaths until old age"
            ],
            correctAnswer: 0,
            explanation: "A steep early drop in the death rate is ETM Stage 2, the receding of infectious disease through sanitation, vaccination and better nutrition. Rarer heart disease and surgery delaying deaths belong to later stages, and spreading resistant infections would raise deaths."
          },
          {
            question: "Which response to part G, \"Explain the degree to which Malthusian theory applies to Niger,\" would earn the point?",
            options: [
              "Partly, as fast growth strains farmland but trade can add food",
              "Largely, since Niger's population grows at about 3.3% each year",
              "Slightly, since Malthus wrote about England and not about Africa",
              "Fully, since every country with a TFR above 2.1 faces famine"
            ],
            correctAnswer: 0,
            explanation: "A degree question needs a qualified position supported by evidence on both sides. A growth rate alone does not show pressure on food, where Malthus wrote does not limit where his theory applies, and many countries with TFRs above 2.1 do not face famine."
          },
          {
            question: "Country Q's RNI fell from 3.0% in 1970 to 1.1% in 2020, yet its population kept growing. Which statement is accurate?",
            options: [
              "A positive RNI still adds people, only more slowly",
              "A falling RNI means the population is now shrinking",
              "Population can grow only while the RNI is still rising",
              "An RNI of 1.1% means growth from immigration alone"
            ],
            correctAnswer: 0,
            explanation: "Any RNI above zero means births exceed deaths, so the population grows even as the rate slows. A shrinking population requires a negative RNI or net emigration, and RNI excludes migration entirely."
          }
        ]
      }
    }
  ]
}
