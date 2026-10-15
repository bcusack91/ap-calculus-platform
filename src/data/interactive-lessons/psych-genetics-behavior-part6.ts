export const psychGeneticsPart6Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 6 of 7 — AP Exam Practice: AAQ and EBQ**

> 🔑 **Key Concept:** The AP Psychology free-response section has two questions. The **Article Analysis Question (AAQ)** gives you one study summary and asks six focused questions about it (7 points, 6 parts). The **Evidence-Based Question (EBQ)** gives you three short sources and asks you to build and support an argument (7 points, 3 parts). Twin and adoption research fits both formats well.

### What the AAQ asks (6 parts)

| Part | Task |
|---|---|
| A | Identify the **research method** used in the study |
| B | State the **operational definition** of a variable |
| C | Describe what a **statistic** in the study indicates |
| D | Identify one **ethical guideline** the researchers applied and describe **how** they applied it |
| E | Explain the extent to which the findings are **generalizable**, using evidence from the study |
| F | Explain how at least one finding **supports or refutes** the researchers' hypothesis |

### Practice study summary

*This practice study is invented for this lesson; it is not a real published study.*

**Title:** Twin similarity in adolescent sensation seeking

**Introduction:** Sensation seeking is the tendency to pursue new, intense, and risky experiences. The researchers hypothesized that identical twins would be more similar in sensation seeking than fraternal twins, which would suggest a genetic influence.

**Participants:** 410 same-sex twin pairs aged 15 to 17 (230 identical pairs and 180 fraternal pairs), all raised together, were recruited from a twin registry in one U.S. state. Most families were middle-income and lived in suburban areas. Twin type was confirmed by genetic testing.

**Method:** Each twin completed, separately and privately, a 24-item questionnaire such as "I would like to try skydiving." Each item answered "agree" earned one point, so scores ranged from 0 to 24. Parents gave written informed consent, and each teen gave written assent after being told that they could stop at any time. Questionnaires were labeled with ID numbers instead of names.

**Results:** Mean scores were similar for identical twins (M = 13.1) and fraternal twins (M = 13.0). The correlation between co-twins' scores was r = .58 for identical twins and r = .27 for fraternal twins.

**Discussion:** The researchers concluded that genetic differences contribute to differences in sensation seeking among adolescents, while noting that identical twins were far from perfectly alike.
      `
    },
    {
      id: 'genetics-behavior-p6-s2-walkthrough',
      type: 'text' as const,
      content: `
## ✍️ AAQ Walk-Through: Model Responses

Each model response is short, specific, and tied to the study. That is what AP readers look for.

### A. Identify the research method

> "The study is a **correlational** study (a twin study). The researchers measured how closely co-twins' scores were related and did not manipulate any variable."

⚠️ Do not call it an experiment. Twin type is not randomly assigned; it is a naturally occurring characteristic.

### B. State the operational definition of a variable

> "Sensation seeking was operationally defined as the **total score (0 to 24) on a 24-item agree/disagree questionnaire**, with one point for each item answered 'agree.'"

⚠️ "Sensation seeking means liking risky experiences" is a conceptual definition, not an operational one. An operational definition says **how the variable was measured**.

### C. Describe what a statistic indicates

> "The correlation of r = .58 for identical twins means that co-twins' sensation-seeking scores were moderately and positively related: when one identical twin scored high, the co-twin tended to score high. This was stronger than the r = .27 for fraternal twins."

⚠️ Do not say "58% genetic." Describe the direction and strength of the relationship in the context of the study.

### D. Identify an ethical guideline and how it was applied

> "The researchers followed **informed consent**: parents gave written consent and the teens gave written assent after being told they could stop at any time."

Another acceptable choice: **confidentiality**, applied by labeling questionnaires with ID numbers instead of names.

### E. Explain the extent of generalizability

> "The findings have **limited** generalizability. All twins came from one U.S. state, and most families were middle-income and suburban, so the results may not apply to adolescents in other countries, in low-income or rural settings, or to adults."

⚠️ Always cite a **specific feature of the sample** from the summary. "The sample is too small" earns nothing here; 410 pairs is a sizable sample.

### F. Explain how a finding supports or refutes the hypothesis

> "The finding **supports** the hypothesis. Identical twins' scores correlated more strongly (r = .58) than fraternal twins' scores (r = .27). Because both types of twins were raised together, the main difference between them is genetic similarity, so the greater similarity of identical twins suggests a genetic influence on sensation seeking."

⚠️ Name the finding, state support or refute, and explain the **logic** that connects them. A bare "it supports it" is not enough.
      `
    },
    {
      id: 'genetics-behavior-p6-s3-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Use the Practice Study Above** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which response would earn credit for describing what the means (M = 13.1 and M = 13.0) indicate?',
            options: [
              'Sensation seeking is 13 percent genetic for both twin types',
              'Identical twins are more alike than fraternal twins are',
              'The fraternal twins sought sensation less than the others',
              'The two twin types had about the same average level'
            ],
            correctAnswer: 3,
            explanation: 'The two means are nearly identical, so identical and fraternal twins had about the same average level of sensation seeking. Similarity within pairs is shown by the correlations, not by the means.'
          },
          {
            question: 'Which statement best explains a limit on the generalizability of the practice study\'s findings?',
            options: [
              'The twins came from one state and mostly middle-income suburban homes',
              'The researchers used a questionnaire instead of observing behavior',
              'Fraternal twins share about half of their genes on average',
              'The study did not randomly assign participants to twin type'
            ],
            correctAnswer: 0,
            explanation: 'Generalizability concerns whom the results apply to, so the strongest answer cites the sample: one state and mostly middle-income suburban families. Lack of random assignment limits causal claims, not generalizability.'
          },
          {
            question: 'A student writes, "The study shows that a gene causes sensation seeking." Why would this response NOT earn credit for explaining how the finding supports the hypothesis?',
            options: [
              'The study did find a gene but did not report its name',
              'The design reveals twin similarity, not a specific gene',
              'Sensation seeking cannot be measured by a questionnaire',
              'The hypothesis predicted that the twins would not differ'
            ],
            correctAnswer: 1,
            explanation: 'The twin design compares similarity across twin types and suggests genetic influence; it cannot identify a specific gene or prove a cause. A credited response would cite the .58 versus .27 comparison and explain its logic.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p6-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the AAQ Answers** 🔎

Each sentence comes from a student response about the practice study. Choose the AAQ task it answers.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Teens were told they could stop at any time, and parents signed consent forms." This sentence answers the AAQ task on _____.',
            options: ['ethical guidelines', 'generalizability', 'research method', 'operational definition']
          },
          {
            label: '"Sensation seeking was the number of items, out of 24, that a teen marked agree." This sentence answers the AAQ task on _____.',
            options: ['research method', 'ethical guidelines', 'operational definition', 'statistics']
          },
          {
            label: '"Because no variable was manipulated and the researchers measured relationships between co-twins\' scores, this is correlational." This sentence answers the AAQ task on _____.',
            options: ['generalizability', 'research method', 'statistics', 'ethical guidelines']
          }
        ],
        correctAnswers: ['ethical guidelines', 'operational definition', 'research method'],
        hint1: 'Consent and the right to withdraw protect participants.',
        hint2: 'This sentence says exactly how the variable was measured.',
        hint3: 'Manipulated or not? That decides the method.',
        explanation: 'Consent and withdrawal are ethical guidelines; a scoring rule is an operational definition; whether variables were manipulated identifies the research method.'
      }
    },
    {
      id: 'genetics-behavior-p6-s5-ebq',
      type: 'text' as const,
      content: `
## 📚 EBQ Practice: Three Sources, One Argument

The EBQ asks you to:

| Part | Task |
|---|---|
| A | Propose a specific, defensible **claim** that answers the prompt |
| B | (i) Cite specific **evidence from one source**; (ii) explain how it supports your claim using a psychological perspective, theory, concept, or research finding |
| C | (i) Cite specific evidence from a **different source**; (ii) explain how it supports your claim using a **different** psychological concept from the one in B |

Cite sources as "(Source 1)" or "According to Source 2, ...".

### Prompt

Develop and justify an argument about the extent to which heredity influences children's reading ability.

*All three sources are practice summaries invented for this lesson.*

**Source 1 (twin study):** Researchers tested the reading ability of 1,200 pairs of 7-year-old twins raised together. Reading scores correlated r = .70 for identical twins and r = .45 for fraternal twins.

**Source 2 (adoption study):** Researchers followed 180 children adopted in infancy. At age 10, the children's reading scores correlated r = .22 with their biological mothers' reading scores and r = .25 with the number of hours per week their adoptive parents spent reading with them.

**Source 3 (intervention study):** Researchers randomly assigned 200 struggling second-grade readers to either 12 weeks of daily small-group tutoring or regular classes. The tutored group gained significantly more on a reading test, and the gains were similar for children with and without a family history of reading difficulty.

### Model response

**A. Claim:** "Heredity influences children's reading ability, but its effect depends on the environment, so reading ability is best explained by the interaction of nature and nurture."

**B. (i)** "According to Source 1, identical twins' reading scores correlated more strongly (r = .70) than fraternal twins' scores (r = .45)."
**(ii)** "This supports the claim that heredity matters. In a **twin study**, both types of twins share a home, so the main difference is genetic similarity; the greater similarity of identical twins suggests a **genetic predisposition** that contributes to differences in reading ability."

**C. (i)** "In Source 3, struggling readers randomly assigned to daily tutoring gained significantly more than those in regular classes, including children with a family history of reading difficulty."
**(ii)** "This supports the claim that the environment shapes the outcome. Tutoring is a form of **nurture**, an external factor such as education, and it improved reading even for children with a likely inherited risk. This shows that a **genetic influence does not make a trait unchangeable**."

### Why this response works

- The claim answers "to what extent" with a position, not just "both matter."
- B and C use **different sources** and **different concepts** (twin-study logic and genetic predisposition vs nurture and changeability).
- Each explanation says **how** the evidence supports the claim, not just what the source says.
- Source 2 could have been used instead of either one: its two similar correlations suggest both biological and adoptive influences.
      `
    },
    {
      id: 'genetics-behavior-p6-s6-ebq-check',
      type: 'multiple-choice' as const,
      content: `
**EBQ Practice — Use the Three Sources Above** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim would best satisfy Part A of this EBQ?',
            options: [
              'Reading is a skill that many children learn in school',
              'Heredity and environment are both very important',
              'Heredity matters, but its effect on reading depends on schooling',
              'Twin studies and adoption studies differ in their logic'
            ],
            correctAnswer: 2,
            explanation: 'A credited claim takes a specific, defensible position on the extent to which heredity influences reading. Saying both influences are important is too vague, and the other statements do not answer the prompt.'
          },
          {
            question: 'A student uses Source 2 in Part B, explaining it with genetic predisposition. Which choice for Part C would best meet the EBQ requirements?',
            options: [
              'Source 2 again, now explained with the concept of nurture',
              'Source 3, explained with nurture and changeable outcomes',
              'Source 3, explained again with genetic predisposition',
              'Source 1, explained again with genetic predisposition'
            ],
            correctAnswer: 1,
            explanation: 'Part C requires evidence from a different source and a different psychological concept from Part B. Only the choice using Source 3 with nurture and changeable outcomes meets both requirements.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p6-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Common Point-Losers on This Topic

| Point-loser | Fix |
|---|---|
| Calling a twin or adoption study an experiment | Say **correlational**: no variable is manipulated |
| Giving a dictionary definition instead of an operational one | State **how** the variable was measured or scored |
| Reading r as a percentage | Describe direction and strength in context |
| Naming an ethical guideline without saying how it was applied | Add the specific action from the summary |
| "The sample is small" for generalizability | Cite **who** was in the sample and who was missing |
| Using the same concept in EBQ Parts B and C | Pick two different concepts, such as twin-study logic and nurture |

**Next up — Part 7:** A synthesis review that connects everything in this topic to the rest of the course.
      `
    }
  ]
}
