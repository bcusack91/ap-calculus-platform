export const psychDisordersPart6Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 6 of 7 — AP Exam Practice: AAQ and EBQ**

> 🔑 **Key Concept:** The AP Psychology exam has two free-response questions. The **Article Analysis Question (AAQ)** is worth **7 points, 6 parts** and asks you to analyze one research study. The **Evidence-Based Question (EBQ)** is worth **7 points, 3 parts** and asks you to build an argument from three sources. This part practices both on topics from this lesson.

## 📄 AAQ Practice Study Summary

Read this practice study summary carefully. It is **hypothetical**, written for practice; the researchers and numbers are invented.

**Introduction.** Researchers hypothesized that disclosing a past psychological diagnosis on an otherwise identical job application would lower managers' hiring evaluations.

**Participants.** 240 adults in the United States who currently make hiring decisions at their workplaces were recruited through an online research panel and paid a small fee. Ages ranged from 25 to 64 (mean age 41); 52% were women and 48% were men. Most worked for medium or large companies in office-based industries.

**Method.** Participants were **randomly assigned** to read one of two versions of an application for an office manager position. The résumés and cover letters were identical except for one sentence. In the **diagnosis condition**, the cover letter said the applicant had taken a semester off from college to receive treatment for a psychological disorder. In the **physical injury condition**, it said the applicant had taken a semester off to recover from a broken leg. Participants then rated **how likely they would be to recommend hiring the applicant** on a scale from 1 (definitely would not recommend) to 7 (definitely would recommend).

**Ethics.** Participants read a consent form describing the study as research on "how managers evaluate job applicants" and agreed to take part before beginning. To avoid influencing responses, the form did not mention mental health. Participants were told they could stop at any time and still receive payment. No names were collected, and responses were stored without identifying information. After finishing, every participant was **debriefed**: researchers explained the true purpose of the study, that the applicant was fictional, and why the purpose had not been stated at the start. A research ethics board approved the study before it began.

**Results.** The mean hiring recommendation was **4.2** in the diagnosis condition and **5.1** in the physical injury condition, a statistically significant difference.

**Discussion.** The researchers concluded that disclosing a psychological diagnosis lowered hiring evaluations compared with disclosing a physical injury, and suggested that hiring practices be reviewed for stigma.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s2-aaq-walk',
      type: 'text' as const,
      content: `
## 🔍 Worked Example: The Six AAQ Tasks

The AAQ's six parts follow the same pattern every year. Here is each task applied to the practice study, with the reasoning that earns credit.

### A. Identify the research method used in the study.

**Response:** Experiment.
**Why:** The researchers **randomly assigned** participants to two conditions and **manipulated** one variable (which reason was given for the semester off). Random assignment plus manipulation is what makes it an experiment, not a correlational study.

### B. State the operational definition of the dependent variable.

**Response:** Hiring evaluation was operationally defined as the participant's **rating, from 1 to 7, of how likely they would be to recommend hiring the applicant**.
**Why:** An operational definition states **exactly how a variable was measured**. "How much managers liked the applicant" would be too vague; the 1-to-7 rating is specific.

### C. Describe what the difference in means indicates.

**Response:** Participants who read the application mentioning a psychological diagnosis gave, on average, a hiring recommendation **0.9 points lower** (4.2 versus 5.1) than those who read about a broken leg. Because the difference was statistically significant, it is unlikely to be due to chance alone.
**Why:** Name **both groups**, the **direction** of the difference, and what the statistic means. Saying only "4.2 is lower than 5.1" does not describe what the difference indicates about the groups.

### D. Identify one ethical guideline described in the study. Describe one way the researchers applied this ethical guideline.

The summary describes several guidelines; you choose one. Any of these works:

| Guideline | How the researchers applied it |
|---|---|
| **Informed consent** | Participants read a consent form describing the study and agreed before they began |
| **Right to withdraw** | Participants were told they could stop at any time and still be paid |
| **Confidentiality** | No names were collected, and responses were stored without identifying information |
| **Debriefing** | Afterward, researchers explained the true purpose, that the applicant was fictional, and why the purpose had been withheld |
| **Institutional review** | A research ethics board approved the study before it began |

**Why:** Credit requires the guideline **and** a specific application **from this study**, not a textbook definition.

### E. Explain the extent to which the findings may or may not be generalizable, using specific evidence from the study.

**Response:** The findings generalize reasonably well to **U.S. managers who make hiring decisions in office-based industries**, because the participants were 240 people in hiring roles, with a wide age range and a nearly even mix of women and men. They may **not** generalize to managers in other countries with different norms about mental health, to small businesses or non-office industries, or to real hiring decisions, because participants rated a single paper application from an online panel rather than interviewing real applicants.
**Why:** Tie the answer to **specific details of the sample and setting** in the summary.

### F. Explain how at least one of the research findings supports or refutes the researchers' hypothesis.

**Response:** The finding **supports** the hypothesis. The researchers predicted that disclosing a psychological diagnosis would lower hiring evaluations, and the diagnosis condition received a significantly lower mean rating (4.2) than the otherwise identical physical injury condition (5.1).
**Why:** State **supports or refutes**, then connect a specific result to the specific prediction.

> 🔑 **AP Connection:** This study is also a clear case of **stigma** and **discrimination** from Part 5: the only difference between the applications was the label, and the label alone lowered evaluations.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s3-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Check — The Practice Hiring Study** 🎯

Use the practice study summary above.
      `,
      exercise: {
        questions: [
          {
            question: 'Why did the researchers describe the second application as a semester off for a broken leg rather than giving no reason at all?',
            options: [
              'So that both applications had the same gap, isolating the effect of the diagnosis',
              'So that the participants would not notice the study was about job applications',
              'So that the managers would feel sympathy for both of the applicants equally',
              'So that the study could be described as correlational rather than experimental'
            ],
            correctAnswer: 0,
            explanation: 'Giving both applicants the same semester away from college means the only difference is the reason, so any difference in ratings can be attributed to the diagnosis. Participants knew the study was about applicants, and the comparison condition does not change the study into a correlational design.'
          },
          {
            question: 'A student writes that the findings apply to "all employers everywhere." Which detail from the summary best limits generalizability?',
            options: [
              'The participants were randomly assigned',
              'Its sample was U.S. managers found online',
              'The ratings used a scale from 1 to 7',
              'A research ethics board approved the study'
            ],
            correctAnswer: 1,
            explanation: 'Generalizability depends on who was studied. A sample of U.S. managers from an online panel may not represent employers in other countries or settings. Random assignment, the rating scale, and ethics approval affect other aspects of the study, not whom the results describe.'
          },
          {
            question: 'Which response would earn credit for identifying and applying an ethical guideline from this study?',
            options: [
              'Debriefing, since researchers later explained the true purpose and that the applicant was fictional',
              'Informed consent, since participants should be told about a study before taking part in research',
              'Confidentiality, since psychologists are required to protect the privacy of research participants',
              'Random assignment, since every participant had an equal chance of being placed in each condition'
            ],
            correctAnswer: 0,
            explanation: 'The debriefing response names a guideline and describes how these researchers applied it in this study. The informed consent and confidentiality responses only define the guideline without using the study, and random assignment is a design feature, not an ethical guideline.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s4-ebq',
      type: 'text' as const,
      content: `
## 📚 EBQ Practice: Three Sources

**Prompt:** Develop and justify an argument about whether psychological disorders are best explained by a single cause or by interacting factors.

All three sources are **practice summaries (hypothetical)**; the findings are invented for practice.

**Source 1 — Practice twin study.** Researchers identified twin pairs in which at least one twin had been diagnosed with a particular disorder. When one identical twin had the disorder, the other twin also had it in **45%** of pairs. When one fraternal twin had it, the other twin had it in **15%** of pairs.

**Source 2 — Practice longitudinal study.** Researchers followed 800 adults for six years. Among adults with a family history of a disorder, those who experienced three or more major stressful events developed it at **four times** the rate of those who experienced few stressful events. Among adults without a family history, stressful events raised the rate only slightly.

**Source 3 — Practice community survey.** In a survey of 2,000 adults, people who reported frequent self-critical thoughts **and** few close relationships had the highest rates of a disorder. Among people with a family history of the disorder, those who reported strong social support had rates similar to people with no family history.

### Worked Example: Building the response

**Part A — Claim.** A defensible claim answers the prompt directly:
> "Psychological disorders are best explained by interacting biological, psychological, and social factors rather than by a single cause."

**Part B — Evidence from one source, explained with a psychological concept.**
> "According to Source 2, adults with a family history who experienced many stressful events developed the disorder at four times the rate of those with few stressful events, while stress raised the rate only slightly for adults without a family history. This supports the **diathesis-stress model**: a genetic vulnerability (the diathesis) led to a disorder mainly when combined with stressful life experiences, so neither factor alone explains who developed it."

**Part C — Evidence from a DIFFERENT source, explained with a DIFFERENT concept.**
> "In Source 3, people with self-critical thoughts and few close relationships had the highest rates, and strong social support kept rates low even among people with a family history. This fits the **biopsychosocial model**: a biological factor (family history), a psychological factor (self-critical thinking), and a sociocultural factor (relationships and support) all influenced the outcome together."

### What makes this response strong

| Requirement | How the response meets it |
|---|---|
| Claim answers the prompt | It takes a clear position on single cause versus interacting factors |
| Evidence is specific and cited | Each paragraph names its source and reports a concrete finding |
| Different sources in B and C | Source 2, then Source 3 |
| Different concepts in B and C | Diathesis-stress model, then biopsychosocial model |
| Explanation connects evidence to the claim | Each paragraph says *why* the finding shows interaction rather than a single cause |

**Using Source 1 instead:** the 45% versus 15% difference supports a **biological** (genetic) contribution, because identical twins share more genes than fraternal twins. And because the identical-twin rate is far below 100%, factors other than genes must also matter, which also supports the claim.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s5-input',
      type: 'input-boxes' as const,
      content: `
**Quick Numbers** ✍️

Use the practice AAQ study and the EBQ sources. Enter a number or a short standard term.
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice hiring study, by how many points was the mean hiring recommendation lower in the diagnosis condition than in the physical injury condition?',
            answer: '0.9',
            acceptableAnswers: ['.9', '0.9 points', '9/10'],
            explanation: '5.1 minus 4.2 is 0.9 points on the 1-to-7 scale.'
          },
          {
            question: 'In Source 1, how many percentage points higher is the identical-twin rate than the fraternal-twin rate?',
            answer: '30',
            acceptableAnswers: ['30%', '30 points', 'thirty'],
            explanation: '45% minus 15% is 30 percentage points.'
          },
          {
            question: 'The practice hiring study randomly assigned participants to conditions and manipulated one variable. What research method is it?',
            answer: 'experiment',
            acceptableAnswers: ['an experiment', 'experimental', 'true experiment', 'experimental study'],
            explanation: 'Random assignment combined with manipulation of an independent variable defines an experiment.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s6-ebq-check',
      type: 'multiple-choice' as const,
      content: `
**EBQ Check — Claims and Evidence** 🔬

Use the three practice sources above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim best answers the EBQ prompt?',
            options: [
              'Twin studies are a useful research method',
              'Many adults experience stressful life events',
              'Some disorders appear in many cultures around the world',
              'Disorders arise from several interacting factors'
            ],
            correctAnswer: 3,
            explanation: 'A claim must take a position on the prompt\'s question, single cause or interacting factors. The other statements may be true, but none answers whether disorders are best explained by one cause or several.'
          },
          {
            question: 'A student uses Source 2 in Part B with the diathesis-stress model. Which pairing would best satisfy Part C?',
            options: [
              'Source 2 again, explained with the biopsychosocial model',
              'Source 1, explained with the diathesis-stress model',
              'Source 3, explained with the biopsychosocial model',
              'Source 3, explained with the diathesis-stress model'
            ],
            correctAnswer: 2,
            explanation: 'Part C requires evidence from a different source and an explanation with a different concept. Reusing Source 2 repeats the source, and pairing any source with the diathesis-stress model repeats the concept already used in Part B.'
          },
          {
            question: 'Why does the 45% identical-twin rate in Source 1 support the claim that disorders involve more than genes alone?',
            options: [
              'Identical twins share their environment but none of their genes',
              'Were genes the sole cause, identical twins would nearly always match',
              'Fraternal twins were less likely to report their symptoms honestly',
              'A rate below 50% shows that genes have no effect on the disorder'
            ],
            correctAnswer: 1,
            explanation: 'Identical twins share essentially all their genes, so if genes alone caused the disorder the second twin would nearly always have it too. A 45% rate means non-genetic factors also matter, while the higher rate than in fraternal twins still shows a genetic contribution.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s7-tips',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Habits That Earn Points

| AAQ | EBQ |
|---|---|
| Use the study's own words and numbers | Write a claim that takes a side on the prompt |
| For operational definitions, say exactly how the variable was measured | Cite each source by number: "(Source 2)" or "According to Source 2…" |
| For ethics, name the guideline **and** describe what these researchers did | Use a **different source** and a **different concept** in Parts B and C |
| For generalizability, point to specific details about the sample and setting | Explain **how** the evidence supports the claim, not just what it says |

**Next up — Part 7:** A synthesis review that ties together definitions, classification, perspectives, interaction models, and the consequences of diagnosis.
      `
    }
  ]
}
