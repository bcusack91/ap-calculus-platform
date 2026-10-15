export const apesEcosystemStructurePart6Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos6-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 What the Task Verbs Demand |
| Free-Response Practice: A Salt Marsh Energy Budget |
| Designing an Investigation |

## 📖 What the Task Verbs Demand

AP Environmental Science free-response questions are scored point by point, and each point is tied to a task verb. Answer the verb that is asked, no more and no less.

| Verb | What earns the point | Example on this topic |
|---|---|---|
| **Identify** | A specific term or value, no explanation needed | "Identify the trophic level of the heron." → "Tertiary consumer (level 4)." |
| **Describe** | The relevant characteristics of something | "Describe how energy moves between levels." |
| **Explain** | A cause-and-effect link: what happens **and why** | "Explain why less energy reaches level 3 than level 2." |
| **Calculate** | Setup with units, then the answer with units | "Calculate the NPP." → "30,000 − 18,000 = 12,000 $kcal/m^{2}/yr$" |
| **Justify** | Evidence or reasoning that supports a claim | "Justify your prediction with one piece of data." |
| **Propose a solution** | A specific, realistic action that addresses the stated problem | "Propose one way to reduce the loss of marsh productivity." |

> 🔑 **AP Connection:** APES calculation points typically require the setup to be shown; a bare number often earns nothing. Write the formula, substitute the numbers with units, then box the answer.
      `
    },
    {
      id: 'apesecos6-scenario',
      type: 'text' as const,
      content: `
## Free-Response Practice: A Salt Marsh Energy Budget

Researchers studied a coastal salt marsh that covers **3.0 $km^{2}$**. The table shows the energy measured at each trophic level.

| Trophic level | Organisms | Energy ($kcal/m^{2}/yr$) |
|---|---|---|
| Producers, gross productivity | Cordgrass, algae | GPP = 30,000 |
| Producers, respiration | Cordgrass, algae | R = 18,000 |
| Primary consumers | Grasshoppers, snails | 1,320 |
| Secondary consumers | Spiders, killifish | 120 |
| Tertiary consumers | Herons | 12 |

**Questions**

(a) **Calculate** the net primary productivity of the marsh.

(b) **Calculate** the transfer efficiency from the producers' NPP to the primary consumers.

(c) **Calculate** the total NPP of the entire marsh per year, in kcal/yr.

(d) **Explain** why the secondary consumers hold less energy than the primary consumers.

(e) A developer proposes to fill 40% of the marsh. **Calculate** the percent change in the marsh's total NPP, **identify** one ecosystem service that would be lost, and **propose** one solution.

(f) Spiders are removed by a pesticide. **Predict** the effect on cordgrass and **justify** your prediction.

Try (a)–(c) in the boxes below before reading the model answers.
      `
    },
    {
      id: 'apesecos6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) (a) NPP, in $kcal/m^{2}/yr$ (no commas):

2) (b) Transfer efficiency from NPP to primary consumers, in percent:

3) (c) Total NPP of the marsh, in **billions** of kcal per year:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12000', '11', '36'],
        hint1: 'NPP = GPP − respiration.',
        hint2: 'Divide the primary consumer energy by the NPP, then multiply by 100.',
        hint3: '3.0 square kilometers is 3,000,000 square meters. Multiply by the NPP, then divide by one billion.',
        explanation: '(a) 30,000 − 18,000 = 12,000. (b) 1,320 ÷ 12,000 = 0.11, or 11 percent. (c) 12,000 × 3,000,000 = 3.6 × 10^10 kcal per year, which is 36 billion.'
      }
    },
    {
      id: 'apesecos6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** NPP = GPP − R $= 30{,}000 - 18{,}000 = 12{,}000$ $kcal/m^{2}/yr$

**(b)** Efficiency $= \\dfrac{1{,}320}{12{,}000} \\times 100 = 11\\%$

**(c)** Area: $3.0\\ km^{2} \\times 1{,}000{,}000\\ m^{2}/km^{2} = 3.0 \\times 10^{6}\\ m^{2}$
Total NPP: $12{,}000\\ kcal/m^{2}/yr \\times 3.0 \\times 10^{6}\\ m^{2} = 3.6 \\times 10^{10}$ kcal/yr

**(d)** Most of the energy the primary consumers obtain is used in their own **cellular respiration** and released as **heat** (second law of thermodynamics). Some of it is also never eaten or passes through undigested. Only the small fraction built into primary-consumer tissue (here $120 \\div 1{,}320 \\approx 9\\%$) is available to the secondary consumers.

**(e)** Percent change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$. Filling 40% leaves 60% of the area, so the new total is $0.60 \\times 3.6 \\times 10^{10} = 2.16 \\times 10^{10}$ kcal/yr.

$$\\frac{2.16 \\times 10^{10} - 3.6 \\times 10^{10}}{3.6 \\times 10^{10}} \\times 100 = -40\\%$$

Ecosystem service lost: **storm-surge and flood protection** (marsh plants slow waves and absorb floodwater), or **nursery habitat** for commercially fished species. Solution: require the developer to build outside the marsh with a protected buffer zone, or require restoration of an equal area of degraded marsh elsewhere (mitigation).

**(f)** Cordgrass would **decrease**. Spiders prey on grasshoppers; without spiders the grasshopper population would grow, and more grasshoppers would graze more cordgrass. (A complete answer traces both links.)

> 🔑 **AP Connection:** In (e), "percent change" is negative for a decrease. Write −40%, or "a 40% decrease". An answer of "40%" with no direction can lose the point.
      `
    },
    {
      id: 'apesecos6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯

Use the salt marsh data table.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the transfer efficiency from the secondary consumers to the tertiary consumers?',
            options: [
              '10 percent',
              '1 percent',
              '0.1 percent',
              '9.1 percent'
            ],
            correctAnswer: 0,
            explanation: 'Divide herons by secondary consumers: 12 ÷ 120 = 0.10, or 10 percent. The value 9.1 percent is the efficiency from primary to secondary consumers.'
          },
          {
            question: 'Which claim about the marsh is best supported by the data?',
            options: [
              'Primary consumers hold about 11 percent of producer GPP',
              'Producers spend 60 percent of their GPP on their own respiration',
              'Herons receive about 1 percent of the energy fixed by producers',
              'Energy efficiency rises at each step up the marsh food chain'
            ],
            correctAnswer: 1,
            explanation: 'Respiration is 18,000 of 30,000 kcal, which is 60 percent of GPP. The 11 percent figure is the primary consumers\' share of NPP, not GPP, and herons receive only 12 of 30,000 kcal, far below 1 percent.'
          },
          {
            question: 'A student claims the tertiary consumers prove the 10% rule is exact. Which response best evaluates this claim?',
            options: [
              'It is correct, because the heron level shows exactly 10 percent and so all levels must too',
              'It is incomplete, because the other transfers here are 11 and about 9 percent',
              'It is incorrect, because the 10% rule applies only to terrestrial ecosystems and not to marshes',
              'It is incorrect, because transfer efficiency must be measured using GPP rather than biomass'
            ],
            correctAnswer: 1,
            explanation: 'One transfer matching 10 percent does not make the rule exact; the other two transfers in the same data set are 11 and about 9.1 percent. The 10% rule is an approximate average that applies to aquatic and terrestrial systems alike.'
          }
        ]
      }
    },
    {
      id: 'apesecos6-investigation',
      type: 'text' as const,
      content: `
## Designing an Investigation

One APES free-response question asks you to analyze or design an experiment. Use the light-and-dark-bottle method from Part 2.

**Prompt:** A student hypothesizes that phytoplankton productivity in a lake decreases with depth. Design an investigation to test this.

| Element | Model response |
|---|---|
| **Hypothesis** | If water depth increases, then NPP will decrease, because less light reaches deeper water. |
| **Independent variable** | Depth at which the bottles are suspended (for example 0.5 m, 2 m, 5 m, 10 m) |
| **Dependent variable** | Change in dissolved oxygen over 24 hours, used to calculate NPP and GPP |
| **Controlled variables** | Same lake and location, same bottle volume, same 24-hour period, water collected at the same time |
| **Control** | A dark bottle at each depth, to measure respiration alone |
| **Replication** | Three light and three dark bottles at each depth, averaged |

### Interpreting the results

Suppose the light bottles show NPP of 2.4, 1.6, 0.5 and −0.3 $mg\\,O_{2}/L/day$ at 0.5, 2, 5 and 10 m. The negative value at 10 m means respiration exceeded photosynthesis: that depth lies **below the photic zone**. The data support the hypothesis.

Percent change in NPP from 0.5 m to 5 m:

$$\\frac{0.5 - 2.4}{2.4} \\times 100 \\approx -79\\%$$
      `
    },
    {
      id: 'apesecos6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the depth investigation, what is the purpose of the dark bottle placed at each depth?',
            options: [
              'To measure respiration alone, so that gross productivity can be calculated',
              'To keep the water cold, so that bacteria cannot grow in the sample',
              'To block ultraviolet light, so that the phytoplankton survive',
              'To act as the independent variable, so that depths can be compared'
            ],
            correctAnswer: 0,
            explanation: 'With no light, no photosynthesis occurs, so the oxygen drop in the dark bottle measures respiration; adding it to NPP gives GPP. Depth, not the dark bottle, is the independent variable.'
          },
          {
            question: 'At 10 m, the light bottle lost oxygen over 24 hours. Which conclusion is best supported?',
            options: [
              'Phytoplankton at that depth respire more than they photosynthesize',
              'The bottle must have leaked, since producers always release oxygen',
              'Oxygen diffused downward into the deeper and colder lake water',
              'Phytoplankton at that depth had stopped respiring entirely'
            ],
            correctAnswer: 0,
            explanation: 'A net oxygen loss in a light bottle means respiration exceeded photosynthesis, so that depth is below the photic zone. A sealed bottle exchanges no gas with the lake, and organisms respire continuously.'
          }
        ]
      }
    },
    {
      id: 'apesecos6-scoring',
      type: 'text' as const,
      content: `
## Scoring Reminders

- **Calculate:** show the setup with units, even for one-step subtraction.
- **Explain:** use the word "because" and name the mechanism (respiration, heat, the second law).
- **Predict a removal:** trace each link in the food chain.
- **Propose a solution:** name a specific action (buffer zones, mitigation, a regulation), not "protect the environment".
- **Percent change:** (new − old) ÷ old × 100, with the sign.

**Next:** Part 7 ties Parts 1–6 into one review.
      `
    }
  ]
};
