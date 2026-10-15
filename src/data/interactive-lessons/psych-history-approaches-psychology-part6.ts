export const psychHistoryApproachesPart6Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo6-workshop',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 6 of 7 — AP Exam Practice: The Article Analysis Question (AAQ)**

> 🔑 **Key Concept:** The AAQ gives you a summary of one study and asks six focused tasks (7 points, 6 parts). Every task uses the research-methods, statistics, and ethics skills from Parts 3 to 5.

### The six AAQ tasks

| Part | Task | Skill from this topic |
|------|------|----------------------|
| A | Identify the **research method** used | Experiment vs. correlation, case study, meta-analysis, naturalistic observation |
| B | State the **operational definition** of a variable | How the variable was actually measured |
| C | Describe what a **statistic** in the study indicates | Means, SD, significance, effect size, correlation |
| D | Identify one **ethical guideline** described and describe **how** the researchers applied it | Consent/assent, confidentiality, debriefing, deception |
| E | Explain the extent to which the findings are **generalizable**, using evidence from the study | Sample, sampling method, representation |
| F | Explain how at least one finding **supports or refutes** the hypothesis | Connecting results to the prediction |

### Warm-up: identify the design

A researcher randomly assigns 40 college students to sleep either 4 hours or 8 hours, then tests their memory the next day.
- **Method:** experiment (manipulated IV + random assignment)
- **IV:** hours of sleep (4 vs. 8); **DV:** memory test score
- **Possible confound if not controlled:** caffeine use the next morning
      `
    },
    {
      id: 'histo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Warm-Up: Identify the Method** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that students who eat breakfast earn higher grades. No variables were manipulated. This is',
            options: [
              'proof that breakfast causes higher grades',
              'a correlational finding',
              'an experimental result',
              'a case study'
            ],
            correctAnswer: 1,
            explanation: 'Measuring how two variables relate without manipulating either is correlational research. Motivated students might both eat breakfast and study more, so causation cannot be concluded.'
          },
          {
            question: 'A researcher studies one patient with a rare brain injury in great detail over five years. This is a',
            options: [
              'correlational study',
              'naturalistic observation',
              'case study',
              'double-blind experiment'
            ],
            correctAnswer: 2,
            explanation: 'An in-depth investigation of a single person is a case study, useful for rare conditions but limited in generalizability.'
          },
          {
            question: 'Neither the patients nor the doctors handing out pills know which patients receive a new drug and which receive a sugar pill. This describes',
            options: [
              'a single-blind procedure with a placebo group',
              'a double-blind procedure with a placebo group',
              'a correlational study with a control group',
              'a naturalistic observation with random assignment'
            ],
            correctAnswer: 1,
            explanation: 'When neither participants nor the researchers interacting with them know group assignments, the procedure is double-blind. The sugar pill is a placebo, which controls for expectation effects.'
          }
        ]
      }
    },
    {
      id: 'histo6-study',
      type: 'text' as const,
      content: `
## Practice Study Summary

*This practice study is invented for this lesson; it is not a real published study.*

**Introduction:** The researchers hypothesized that a walk in a park would improve attention more than a walk along a busy city street.

**Participants:** 90 undergraduate students (aged 18 to 22) at one large public university volunteered for course credit. Participants were 70% female.

**Method:** Participants were randomly assigned to take a 50-minute walk either through a large park or along a busy downtown street. Before and after the walk, each participant completed a backward digit-span task: they heard strings of digits and repeated them in reverse order. Attention was scored as the longest string repeated correctly. The research assistants who scored the tasks did not know which walk each participant had taken. Participants signed informed consent forms stating they could stop at any time, results were stored under ID numbers, and at the end participants were told the hypothesis and the purpose of the two routes.

**Results:** After the walk, the park group's mean score was 7.1 digits (SD = 1.2) and the street group's mean was 6.4 digits (SD = 1.3). The difference was statistically significant, with an effect size of d = 0.55.
      `
    },
    {
      id: 'histo6-walkthrough',
      type: 'text' as const,
      content: `
## ✍️ Model Responses

**A. Research method:** "This is an **experiment**: the researchers manipulated the walking route (IV) and randomly assigned participants to the park or street condition."

**B. Operational definition:** "Attention was operationally defined as **the longest string of digits a participant repeated correctly in reverse order**."

**C. Statistic:** "The park group's mean (7.1 digits) was 0.7 digits higher than the street group's (6.4). The difference was statistically significant, so it is unlikely to be due to chance, and d = 0.55 is a **medium** effect size."

**D. Ethical guideline:** "The researchers used **debriefing**: at the end, they told participants the hypothesis and the purpose of the two routes." (Informed consent, through signed forms, or confidentiality, through ID numbers, would also earn credit.)

**E. Generalizability:** "The findings generalize **only somewhat**. All 90 participants were volunteer undergraduates aged 18 to 22 from one university, and 70% were female, so the results may not apply to older adults, children, or people outside a university setting."

**F. Support or refute:** "The results **support** the hypothesis. Students randomly assigned to the park walk scored higher on the attention task (7.1) than those assigned to the street walk (6.4), and the difference was statistically significant."

⚠️ **Common point-losers:** calling the study correlational even though there was random assignment; giving a dictionary definition ("attention means focus") instead of the measure; saying "it was significant" without describing what the numbers show; listing every ethical guideline instead of identifying one and describing how it was applied.
      `
    },
    {
      id: 'histo6-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Use the Practice Study Above** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What procedure did the researchers use to reduce experimenter bias?',
            options: [
              'Participants were randomly assigned to the two walking routes',
              'Scorers were unaware of each participant\'s walking route',
              'Participants signed forms saying they could stop at any time',
              'Results were stored under ID numbers rather than names'
            ],
            correctAnswer: 1,
            explanation: 'Keeping the scorers unaware of each participant\'s condition prevents their expectations from affecting the scoring. Random assignment controls differences between participants, not experimenter bias.'
          },
          {
            question: 'Which response best explains a limit on the generalizability of this study?',
            options: [
              'The difference between the groups was statistically significant',
              'The walks were 50 minutes long in both of the conditions',
              'The researchers used a backward digit-span task to measure attention',
              'Participants were volunteer undergraduates from a single university'
            ],
            correctAnswer: 3,
            explanation: 'Generalizability depends on who was studied. A volunteer sample of 18- to 22-year-olds from one university may not represent other ages or settings.'
          },
          {
            question: 'A student writes: "The finding supports the hypothesis because walking is good for you." Why would this NOT earn credit?',
            options: [
              'It does not cite a specific result from the study',
              'It refutes the hypothesis rather than supporting it',
              'It names the ethical guideline instead of the method',
              'It should have described the standard deviations first'
            ],
            correctAnswer: 0,
            explanation: 'Part F requires connecting a specific finding, such as the park group\'s higher mean score, to the hypothesis. A general opinion about walking does not use the study\'s evidence.'
          }
        ]
      }
    },
    {
      id: 'histo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the AAQ Answers** 🔍

Each sentence comes from a student response about the practice study. Choose the AAQ task it answers.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Attention was the longest digit string repeated correctly in reverse." This answers the task on _____.',
            options: ['research method', 'operational definition', 'generalizability', 'ethical guidelines']
          },
          {
            label: '"Results were stored under ID numbers, so no one outside the team could link scores to names." This answers the task on _____.',
            options: ['statistics', 'research method', 'ethical guidelines', 'operational definition']
          },
          {
            label: '"Because the route was manipulated and participants were randomly assigned, this is an experiment." This answers the task on _____.',
            options: ['research method', 'generalizability', 'statistics', 'support or refute']
          }
        ],
        correctAnswers: ['operational definition', 'ethical guidelines', 'research method'],
        hint1: 'How was the variable measured?',
        hint2: 'Confidentiality is a guideline.',
        hint3: 'Manipulation plus random assignment.',
        explanation: 'Describing the exact measure is the operational definition. Storing results under ID numbers applies confidentiality, an ethical guideline. Manipulating a variable with random assignment identifies the research method as an experiment.'
      }
    },
    {
      id: 'histo6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Random ASSIGNMENT is not random SAMPLING. Assignment creates equivalent groups (causation); sampling selects who participates (generalizability).
- A large sample does NOT fix a biased sampling method. Surveying 10,000 people at a gym does not represent the general population.
- In a single-blind study, only participants are unaware of their condition; in a double-blind study, participants AND the researchers interacting with them are unaware.
- Case studies give depth but NOT generalizability.

### AP Strategy Moves
- Read the summary once for the big picture, then again to underline: the hypothesis, the IV and DV and how each was measured, every ethical procedure, the sample description, and every number in the results.
- Match bias to remedy: experimenter bias → blind scorers or double-blind; participant expectations → placebo or single-blind; sampling bias → random sampling.
- Use the study's own words and numbers in every part. Specific beats general.
      `
    }
  ]
}
