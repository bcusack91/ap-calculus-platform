export const psychMoodPsychPart6Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood and Psychotic Disorders

**Part 6 of 7 — Research on Disorders and AP Exam Practice**

> 🔑 **Key Concept:** Every "possible cause" in Parts 1 to 5 rests on a specific kind of study. Knowing which method produced a finding tells you what the finding can and cannot show. That same skill earns points on both AP free-response questions: the **Article Analysis Question (AAQ)**, which has 6 parts worth 7 points, and the **Evidence-Based Question (EBQ)**, which has 3 parts worth 7 points.

### Which method answers which question?

| Research question | Typical method | What it can show | Main limit |
|---|---|---|---|
| Does a disorder have a genetic contribution? | **Twin, family, and adoption studies** | Whether risk rises with genetic relatedness (higher **concordance** in identical twins) | Families share environments as well as genes |
| Is rumination related to depressive symptoms? | **Correlational study** | Direction and strength of a relationship | Cannot show cause; a third variable may explain both |
| Do early stressors predict later disorder? | **Longitudinal study** | Whether a factor comes before the disorder | Time-consuming; participants drop out |
| Does a thinking style **cause** a temporary change in mood? | **Experiment** with random assignment | Cause and effect for a short, safe manipulation | Researchers cannot ethically create a disorder |
| What is a rare condition like for one person? | **Case study** | Rich detail about unusual cases | Findings may not generalize |
| Do symptoms differ across cultures? | **Cross-cultural comparison** | How culture shapes expression (ataque de nervios, taijin kyofusho) | Translation and measurement may differ |

### Reading concordance data

**Concordance** is the percentage of twin pairs in which, when one twin has a disorder, the other twin has it too.

> **Practice data (hypothetical, for skill practice only):**
>
> | Disorder | Identical-twin concordance | Fraternal-twin concordance |
> |---|---|---|
> | Disorder X | 45% | 15% |
> | Disorder Y | 30% | 25% |

How to read it:
1. **Compare within a row.** For Disorder X, identical twins are concordant three times as often as fraternal twins. Because identical twins share more genes, that gap points to a **substantial genetic contribution**.
2. **Compare the gaps across rows.** Disorder Y's gap is small, so genes appear to contribute less, and shared environment may matter more.
3. **Notice what is below 100%.** Even for Disorder X, more than half of identical pairs are **not** concordant, so environment must also matter.
      `
    },
    {
      id: 'mood-psychotic-disorders-p6-s2-data',
      type: 'multiple-choice' as const,
      content: `
**Data Check — Interpreting Research on Disorders** 🎯

Use the practice concordance table above for the first question.
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the practice table, which conclusion is best supported?',
            options: [
              'Disorder X is caused entirely by genes in identical twins',
              'Genes appear to contribute more to Disorder X than to Disorder Y',
              'Disorder Y has no genetic contribution of any kind at all',
              'Environment plays no part in the development of Disorder X'
            ],
            correctAnswer: 1,
            explanation: 'The identical-fraternal gap is much larger for Disorder X, which suggests a larger genetic contribution. Because neither concordance rate is 100% and Disorder Y still shows a small gap, the data rule out the claims of entirely genetic or entirely environmental causes.'
          },
          {
            question: 'A researcher surveys 300 adults and finds a correlation of +0.45 between hours spent ruminating each week and scores on a depression scale. Which statement is an accurate interpretation?',
            options: [
              'Rumination has been shown to cause higher depression scores',
              'More rumination tends to go with higher depression scores',
              'Higher depression scores have been shown to cause rumination',
              'About 45 percent of the adults surveyed have depression'
            ],
            correctAnswer: 1,
            explanation: 'A positive correlation means that higher values on one variable tend to accompany higher values on the other. It does not show which variable causes which, and the coefficient is not a percentage of people.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p6-s3-aaq',
      type: 'text' as const,
      content: `
## AAQ Walkthrough

> **A practice study summary (hypothetical):**
>
> **Introduction:** Researchers hypothesized that dwelling on one's feelings (rumination) increases sad mood more than distraction does, especially among people who already have elevated depressive symptoms.
>
> **Participants:** 120 undergraduates (ages 18 to 22) from one university in the United States volunteered for course credit. Based on a screening questionnaire, 60 had elevated depressive symptoms and 60 did not.
>
> **Method:** Within each group, participants were randomly assigned to one of two 8-minute tasks. In the **rumination** condition, they read prompts asking them to think about their feelings and why they feel the way they do. In the **distraction** condition, they read prompts asking them to picture neutral scenes, such as a bus driving down a street. Before and after the task, participants rated their sad mood on a scale from 0 (not at all sad) to 100 (extremely sad).
>
> **Ethics:** All participants gave informed consent and were told they could stop at any time without losing credit. Responses were stored under code numbers rather than names. At the end, participants were debriefed, completed a short positive-mood activity, and received a list of campus counseling resources.
>
> **Results:**
>
> | Group | Rumination: mean change in sad mood | Distraction: mean change in sad mood |
> |---|---|---|
> | Elevated symptoms | +14 points | −6 points |
> | Not elevated | +2 points | −1 point |
>
> **Discussion:** Rumination increased sad mood among participants with elevated symptoms, while distraction decreased it. In the group without elevated symptoms, both tasks produced little change.

### The six AAQ tasks, answered

| AAQ task | Model response |
|---|---|
| **Identify the research method** | An **experiment**: participants were **randomly assigned** to the rumination or distraction task, the manipulated independent variable. (The symptom grouping itself was measured, not assigned.) |
| **State the operational definition** of a variable | Sad mood was operationally defined as the participant's **self-rating from 0 to 100** before and after the task. |
| **Describe what a statistic shows** | Among participants with elevated symptoms, sad mood **rose by 14 points on average** after rumination but **fell by 6 points** after distraction, a difference of 20 points between conditions. |
| **Identify one ethical guideline and how it was applied** | **Debriefing:** at the end of the session the researchers explained the study, ran a positive-mood activity, and gave participants counseling resources. (Informed consent, right to withdraw, and confidentiality through code numbers would also work.) |
| **Explain the extent of generalizability** using evidence from the study | Limited: all 120 participants were **18-to-22-year-old undergraduates from one U.S. university** who volunteered for credit, so the results may not apply to older adults, people outside college, other cultures, or people with diagnosed major depressive disorder. |
| **Explain how a finding supports or refutes the hypothesis** | It **supports** the hypothesis: rumination increased sad mood (+14) while distraction decreased it (−6) among participants with elevated symptoms, and the effect was much smaller in the other group, matching the prediction that rumination matters most for people already experiencing symptoms. |

> 🔑 **AP Connection:** Each AAQ answer must cite **this** study. "Results may not generalize because of the sample" earns nothing; "all participants were 18-to-22-year-old volunteers from one university" does. Under the October 2025 clarification, the ethics part asks you to **identify** a guideline described in the study and **describe how** the researchers applied it.
      `
    },
    {
      id: 'mood-psychotic-disorders-p6-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Apply the AAQ Skills** 🔍

These refer to the practice study summary above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The independent variable that the researchers manipulated was the _____.',
            options: ['type of 8-minute task', 'sad-mood rating', 'screening questionnaire score', 'participants\' age']
          },
          {
            label: 'Storing responses under code numbers instead of names applied the ethical guideline of _____.',
            options: ['debriefing', 'informed consent', 'confidentiality', 'right to withdraw']
          },
          {
            label: 'In the group without elevated symptoms, the change in sad mood after rumination was _____ points.',
            options: ['+14', '+2', '−1', '−6']
          }
        ],
        correctAnswers: ['type of 8-minute task', 'confidentiality', '+2'],
        hint1: 'Which variable did the researchers randomly assign?',
        hint2: 'Code numbers protect participants\' identities.',
        hint3: 'Read the "Not elevated" row under Rumination.',
        explanation: 'Participants were randomly assigned to the rumination or distraction task, so task type is the independent variable and sad-mood rating is the dependent variable. Code numbers protect confidentiality. The not-elevated rumination cell shows +2.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p6-s5-ebq',
      type: 'text' as const,
      content: `
## EBQ Mini Set

> **Prompt:** Develop and justify an argument about whether learning and environmental experience contribute to the development of anxiety disorders.
>
> **Source 1 (practice summary, hypothetical):** In a longitudinal study, 200 children were observed at ages 4 and 10. Children whose parents frequently showed visible fear of everyday situations (storms, dogs, crowds) were more likely to meet criteria for an anxiety disorder at age 10 than children whose parents rarely showed fear.
>
> **Source 2 (practice summary, hypothetical):** In a laboratory study, adult volunteers viewed pictures of geometric shapes. One shape was repeatedly followed by a loud, unpleasant noise. After several pairings, participants showed increased skin conductance (a sign of arousal) to that shape alone, and the response spread to similar shapes.
>
> **Source 3 (practice summary, hypothetical):** A twin study found that identical twins were more often concordant for generalized anxiety disorder than fraternal twins, but fewer than half of identical pairs were concordant.

### Part A: a defensible claim

> "Learning and environmental experiences contribute to the development of anxiety disorders, although they likely act on a genetic vulnerability."

The claim takes a clear position and can be supported with the sources.

### Parts B and C: evidence plus explanation, from different sources

| Part | Evidence (cite the source) | Explanation using a psychological concept |
|---|---|---|
| **B** | According to **Source 1**, children of parents who often showed fear were more likely to have an anxiety disorder by age 10. | This supports the claim through **observational learning**: children watched a model respond fearfully to everyday situations and acquired the same fearful responses, an environmental route to anxiety. |
| **C** | In **Source 2**, a shape paired with a loud noise came to produce arousal on its own, and the response spread to similar shapes. | This supports the claim through **classical conditioning**: the shape became a conditioned stimulus for fear, and **stimulus generalization** spread it, the same process that can turn one frightening experience into a phobia. |

**Using Source 3:** it can **qualify** the claim. Higher identical-twin concordance suggests a genetic contribution, but concordance below 50% means environment must matter too, which fits a combined explanation.

> 🔑 **AP Connection:** Parts B and C must each cite a **different** source and use a **different** psychological concept. Restating the source is not an explanation; the point comes from linking the evidence to a concept and back to the claim.
      `
    },
    {
      id: 'mood-psychotic-disorders-p6-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Exam Practice — Judging Responses** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes for the generalizability part of the AAQ on the practice rumination study: "The findings cannot be generalized because the sample was small." Why would this response most likely not earn the point?',
            options: [
              'It mentions sample size, which scorers never accept',
              'It gives no evidence about who the participants were',
              'It should have defined the study variables operationally',
              'It should have said whether the hypothesis held up'
            ],
            correctAnswer: 1,
            explanation: 'The generalizability response must use evidence from the study, such as the narrow age range and single-university volunteer sample. A generic claim about sample size, without study details, does not show the reasoning the AAQ requires.'
          },
          {
            question: 'For EBQ part B, a student cites Source 3 and explains it with observational learning. What is the main problem with this response?',
            options: [
              'Twin data do not show learning from models',
              'EBQ responses are allowed to cite only experimental sources',
              'Source 3 must be cited in part C instead of in part B',
              'Observational learning is not a psychological concept'
            ],
            correctAnswer: 0,
            explanation: 'The explanation must accurately connect the cited evidence to the concept. Twin concordance data address genetic contributions, not modeling, so observational learning does not fit that evidence.'
          },
          {
            question: 'Why can researchers not use a true experiment to test whether childhood trauma causes posttraumatic stress disorder?',
            options: [
              'Trauma cannot be measured in any reliable way by researchers',
              'Randomly assigning people to trauma would be seriously harmful',
              'PTSD symptoms appear too quickly to be studied in experiments',
              'Experiments are unable to detect differences between groups'
            ],
            correctAnswer: 1,
            explanation: 'Randomly assigning participants to a traumatic experience would violate the ethical requirement to protect participants from harm. Researchers instead use correlational and longitudinal designs with people who have already experienced trauma.'
          }
        ]
      }
    }
  ]
}
