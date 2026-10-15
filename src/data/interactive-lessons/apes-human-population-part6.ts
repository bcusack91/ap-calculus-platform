export const apesHumanPopulationPart6Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma6-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 The Data Set and the Prompts |
| Model Answers |
| Scoring the Response |

> 🔑 **Key Concept:** Human population FRQs give you a data table and ask you to **identify**, **describe**, **explain**, **calculate** and **justify**. Each verb asks for a different amount of writing. This part works one full question and shows what earns each point.

| Task verb | What earns the point |
|---|---|
| Identify | A specific name or value; no explanation needed |
| Describe | The relevant characteristics, in a sentence |
| Explain | A cause-and-effect link: "because ..., so ..." |
| Calculate | The setup and the answer with units; show your work |
| Justify | A claim plus evidence from the data or the science |
      `
    },
    {
      id: 'apeshuma6-data',
      type: 'text' as const,
      content: `
## 📖 The Data Set and the Prompts

Three countries (illustrative data):

| Indicator | Country Q | Country R | Country S |
|---|---|---|---|
| Population (millions) | 40 | 60 | 80 |
| CBR (per 1,000) | 38 | 18 | 8 |
| CDR (per 1,000) | 8 | 7 | 11 |
| Immigration rate (per 1,000) | 1 | 2 | 5 |
| Emigration rate (per 1,000) | 3 | 1 | 1 |
| TFR (children per woman) | 5.2 | 2.3 | 1.3 |
| Infant mortality (per 1,000 live births) | 48 | 12 | 3 |
| Population under 15 (%) | 44 | 26 | 13 |
| Population 65 and older (%) | 3 | 9 | 28 |
| Women completing secondary school (%) | 20 | 65 | 95 |

**Prompts.** Try each one on paper before you read the model answers.

(a) **Identify** the stage of the demographic transition that Country Q is in.

(b) **Describe** the shape of Country S's age structure diagram.

(c) **Calculate** Country Q's annual growth rate, including migration. Then **calculate** its doubling time. Show your work.

(d) **Explain** how Country S's population can grow even though its crude death rate is higher than its crude birth rate.

(e) **Explain** one reason, using the data, that Country Q's TFR is higher than Country R's.

(f) Country Q's government wants to lower its TFR. **Propose** one policy and **justify** it with evidence from the data.
      `
    },
    {
      id: 'apeshuma6-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the data table. Enter numbers only.

1) What is Country Q's annual growth rate, in percent, including migration?

2) What is Country Q's doubling time, in years?

3) What is Country S's annual growth rate, in percent, including migration?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.8', '25', '0.1'],
        hint1: 'Add CBR and immigration, subtract CDR and emigration, then divide by 10.',
        hint2: 'Divide 70 by the growth rate in percent.',
        hint3: 'Country S: (8 + 5) − (11 + 1), then divide by 10.',
        explanation: '1) [(38 + 1) − (8 + 3)] ÷ 10 = 28 ÷ 10 = 2.8%. 2) 70 ÷ 2.8 = 25 years. 3) [(8 + 5) − (11 + 1)] ÷ 10 = 1 ÷ 10 = 0.1%.'
      }
    },
    {
      id: 'apeshuma6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a) Identify.** Stage 2. *(A stage number alone earns the point. A high CBR of 38 with a low CDR of 8 is the Stage 2 pattern.)*

**(b) Describe.** Country S's diagram has a narrow base and is wide at the top: only 13% of the population is under 15, while 28% is 65 or older. It is a constrictive (top-heavy) shape.

**(c) Calculate.**

$$\\text{Growth rate} = \\frac{(38 + 1) - (8 + 3)}{10} = \\frac{28}{10} = 2.8\\%$$

$$\\text{Doubling time} = \\frac{70}{2.8} = 25\\ \\text{years}$$

*(The setup must appear. A bare "25 years" can lose the point.)*

**(d) Explain.** Country S's natural increase is negative: (8 − 11) ÷ 10 = −0.3%. But its immigration rate (5 per 1,000) is much larger than its emigration rate (1 per 1,000), so net migration adds 0.4%. The population therefore grows by about 0.1% per year because immigrants more than replace the natural loss.

**(e) Explain.** Country Q's infant mortality rate is 48 per 1,000 live births, four times Country R's 12. Where many infants die, parents have more children to make sure some survive to adulthood, which raises TFR. *(An equally strong answer uses female education: 20% of women in Country Q complete secondary school versus 65% in Country R, and women with less schooling tend to marry and begin having children earlier.)*

**(f) Propose and justify.** Expand secondary schooling for girls. Only 20% of women in Country Q complete secondary school, compared with 95% in Country S, where TFR is 1.3. Girls who stay in school marry later, have their first child later and have more job options, so they tend to have fewer children over their lifetime.

### Where students lose points

| Mistake | Fix |
|---|---|
| Naming a factor without connecting it to the outcome | Add "which causes ..." or "so ..." |
| Forgetting migration when the table gives it | Use [(CBR + immigration) − (CDR + emigration)] ÷ 10 |
| Writing 0.028 or 28 instead of 2.8% | Divide the per-1,000 total by 10 to get a percent |
| Describing a diagram with only "it is constrictive" | Cite the data: the percent under 15 and the percent 65 or older |
| Proposing a policy without evidence from the table | Quote a number from the data in the justification |
      `
    },
    {
      id: 'apeshuma6-score',
      type: 'multiple-choice' as const,
      content: `
**Score the Response** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For prompt (d), which student response would earn the "explain" point?',
            options: [
              'Country S is growing because it has reached Stage 4 of the demographic transition',
              'Country S has a high death rate because so many of its people are 65 or older',
              'Immigration at 5 per thousand outweighs emigration and offsets the natural decrease',
              'Country S has a TFR of 1.3, which is below the replacement level of about 2.1'
            ],
            correctAnswer: 2,
            explanation: 'The prompt asks how the population can grow despite more deaths than births, and only net immigration answers that. Being in Stage 4, having an old population and having a low TFR are all true but do not explain the growth.'
          },
          {
            question: 'A student answers prompt (c) with "Growth rate = (38 − 8) ÷ 10 = 3.0%; doubling time = 23 years." What is wrong with this response?',
            options: [
              'It divides by 10 when it should divide by 100',
              'It leaves out the immigration and emigration rates',
              'It should have used the rule of 72 instead of 70',
              'It uses the CDR when it should use the infant mortality rate'
            ],
            correctAnswer: 1,
            explanation: 'The table gives migration rates, so the growth rate must include them: [(38 + 1) − (8 + 3)] ÷ 10 = 2.8%. Dividing a per-1,000 total by 10 is the correct way to get a percent, and the rule of 70 is the standard APES method.'
          },
          {
            question: 'Which response to prompt (e) best explains the difference in TFR between Country Q and Country R using the data?',
            options: [
              'Country Q has more people, so it has more births overall',
              'Country Q\'s infant mortality rate of 48 leads parents to have extra children to ensure some survive',
              'Country Q has a lower death rate, which allows its people to have more children',
              'Country Q has a younger population, so its TFR is higher'
            ],
            correctAnswer: 1,
            explanation: 'It cites the data (an IMR of 48 versus 12) and links it to family decisions, which is what "explain" requires. Country R actually has more people and a lower death rate, and a young population is a result of high fertility rather than its cause.'
          }
        ]
      }
    },
    {
      id: 'apeshuma6-second',
      type: 'text' as const,
      content: `
## A Second Scenario: Policy Trade-offs

Country T (illustrative data) has a TFR of 1.1, 30% of its people are 65 or older, and its dependency ratio is 72. The government is considering three options.

| Option | Likely effect | Trade-off |
|---|---|---|
| Pronatalist incentives (child allowances, paid parental leave, subsidized child care) | Modest rise in TFR; new births take about 20 years to join the workforce | Costly, and slow to help the labor shortage |
| Increased immigration of working-age adults | Immediately enlarges the 15–64 cohort and the tax base | Requires integration services; political resistance |
| Raising the retirement age | Keeps more people working and paying taxes | Unpopular; does not change the age structure |

### Worked Example: Writing a Justified Recommendation

**Step 1. State the claim.** Country T should increase immigration of working-age adults.
**Step 2. Give evidence from the data.** With 30% of its people 65 or older and a dependency ratio of 72, the working-age cohort is too small to support retirees.
**Step 3. Connect to the science.** Most immigrants are young adults, so they widen the reproductive and working-age bands at once, add taxpayers right away, and can raise future births.
**Step 4. Acknowledge the limit.** Immigration does not raise TFR among existing residents, so it treats the symptom faster than pronatalist policy but does not change native fertility.

> 🔑 **AP Connection:** "Justify" points reward a claim tied to evidence. A recommendation with a number from the data and a mechanism ("because most immigrants are of working age, ...") earns full credit; a recommendation alone does not.
      `
    },
    {
      id: 'apeshuma6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country T has a TFR of 1.1 and a labor shortage. Why would pronatalist incentives alone be slow to fix the shortage?',
            options: [
              'Children born now will not reach working age for about two decades',
              'Pronatalist incentives lower the birth rate in the short term',
              'Extra births immediately shrink the working-age population',
              'Incentives work only in countries with a TFR above replacement'
            ],
            correctAnswer: 0,
            explanation: 'New births add to the 0–14 cohort first, and those children take about 20 years to enter the workforce. Meanwhile they add to the dependency ratio.'
          },
          {
            question: 'Based on the three-country data set, which ranking orders the countries from highest to lowest annual growth rate?',
            options: [
              'Country Q, then Country R, then Country S',
              'Country R, then Country Q, then Country S',
              'Country Q, then Country S, then Country R',
              'Country S, then Country R, then Country Q'
            ],
            correctAnswer: 0,
            explanation: 'Country Q grows 2.8%, Country R grows [(18 + 2) − (7 + 1)] ÷ 10 = 1.2%, and Country S grows 0.1%. Growth falls as the countries move further through the transition.'
          },
          {
            question: 'Which indicator in the data set most directly predicts that Country Q\'s population will keep growing for decades even if its TFR drops quickly?',
            options: [
              'The 44 percent of its people under age 15',
              'The infant mortality rate of 48 per 1,000 births',
              'The emigration rate of 3 per 1,000 each year',
              'Its small share of people aged 65 or older'
            ],
            correctAnswer: 0,
            explanation: 'A pre-reproductive cohort of 44 percent will soon enter the reproductive years, so births stay high even at lower fertility. This is population momentum.'
          }
        ]
      }
    },
    {
      id: 'apeshuma6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| Skill | What the model answers did |
|---|---|
| Identify | Named the stage from the CBR and CDR pattern |
| Describe | Named the shape and cited the percent under 15 and 65+ |
| Calculate | Included migration, showed the setup, gave units |
| Explain | Linked a data value to a mechanism ("so parents have more children") |
| Justify | Made a claim, cited a number from the table, stated the mechanism and a limit |

**Next:** Part 7 is a synthesis review that ties age structure, fertility, growth calculations and the demographic transition into one picture.
      `
    }
  ]
};
