export const psychPersonalityPart6Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Personality Theories

**Part 6 of 7 — AP Exam Practice: Personality Research on the AAQ and EBQ**

> 🔑 **Key Concept:** The AP Psychology exam has two free-response questions. The **Article Analysis Question (AAQ)** is worth 7 points across 6 parts and asks you to analyze one study. The **Evidence-Based Question (EBQ)** is worth 7 points across 3 parts and asks you to build an argument from three sources. Personality research, with its inventories, correlations, and assessment debates, is a natural fit for both.

### What the AAQ Asks You to Do

| Task | What a strong answer does |
|------|--------------------------|
| **Identify the research method** | Names the design (experiment, correlational study, case study, and so on) and fits it to the study's features |
| **State the operational definition** | Says exactly how a variable was measured or manipulated in this study |
| **Describe a statistic or result** | Explains what a specific number in the summary shows |
| **Identify an ethical guideline** | Names a guideline the researchers actually applied, with the evidence for it |
| **Explain generalizability** | Uses facts about the participants to say how far the results can extend |
| **Explain support or refutation** | Uses a specific finding to say whether it supports or refutes the hypothesis |

### A Practice Study Summary (hypothetical, written for practice)

**Title:** Conscientiousness and On-Time Work in High School

**Hypothesis:** Students who score higher in conscientiousness will turn in a greater percentage of their assignments on time.

**Participants:** 212 students, ages 15 to 18, from two public high schools in one suburban school district. Students volunteered after an announcement in homeroom.

**Procedure:** In September, students completed the 9-item conscientiousness scale of a Big Five personality inventory, rating statements such as "I make plans and stick to them" from 1 (strongly disagree) to 5 (strongly agree), for a possible total of 9 to 45. At the end of the semester, researchers used the school's online gradebook to calculate the percentage of each student's assignments that were submitted by the deadline.

**Ethics:** Parents gave written informed consent and students gave their own assent. Students were told they could stop at any time without penalty. Researchers replaced names with code numbers, and teachers never saw individual inventory scores.

**Results:** Conscientiousness scores and on-time submission were positively correlated, r = +.41. Students in the top quarter of conscientiousness scores submitted an average of 92% of assignments on time, and students in the bottom quarter submitted an average of 71%.
      `
    },
    {
      id: 'personality-theories-p6-s2-aaq-walkthrough',
      type: 'text' as const,
      content: `
## ✍️ AAQ Walk-Through: Model Answers

**1. Research method.** This is a **correlational study**. The researchers measured two existing variables (conscientiousness scores and on-time submission) and computed a correlation. They did not randomly assign students to conditions or manipulate any variable.

**2. Operational definition.** Conscientiousness was operationally defined as **a student's total score, from 9 to 45, on the 9-item conscientiousness scale** of a Big Five inventory. On-time work was defined as **the percentage of assignments submitted by the deadline in the online gradebook during the semester**.

> A common mistake is restating the concept ("being organized and dependable"). An operational definition must say how it was **measured in this study**.

**3. Statistic.** The correlation of r = +.41 shows a **moderate positive relationship**: students with higher conscientiousness scores tended to submit a higher percentage of assignments on time. The comparison of 92% with 71% shows the same direction in the most and least conscientious quarters.

**4. Ethical guideline.** The researchers obtained **informed consent** (written consent from parents and assent from students) and kept data **confidential** by replacing names with code numbers. Either one, tied to the evidence, answers the task.

**5. Generalizability.** The findings are **limited** in generalizability. All participants came from two schools in one suburban district, and they were volunteers rather than a random sample, so the results may not apply to students in urban or rural schools, other countries, or students who chose not to volunteer.

**6. Support or refute.** The results **support** the hypothesis. The positive correlation (r = +.41), and the higher on-time rate for the top quarter (92%) than for the bottom quarter (71%), show that higher conscientiousness went along with a greater percentage of on-time work.

> 🔑 **AP Connection:** Do not claim that conscientiousness **caused** on-time work. In a correlational study, a third variable, such as a structured home routine, could produce both. Saying "caused" in task 6 can cost you the point.
      `
    },
    {
      id: 'personality-theories-p6-s3-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Check — The Conscientiousness Practice Study** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the conscientiousness practice study classified as correlational rather than as an experiment?',
            options: [
              'The researchers measured both variables without manipulating either one',
              'The researchers used a personality inventory instead of a behavioral test',
              'The researchers studied fewer than 500 students drawn from just two schools',
              'The researchers kept the participants\' names confidential with code numbers'
            ],
            correctAnswer: 0,
            explanation: 'A study is correlational when researchers measure existing variables and look for a relationship without manipulating anything or assigning conditions. Using an inventory, the sample size, and confidentiality do not determine the research method.'
          },
          {
            question: 'Which statement best describes the generalizability of the findings?',
            options: [
              'They apply to all students, as 212 participants is a large enough sample',
              'They apply best to students like the suburban volunteers from these two schools',
              'They cannot be generalized at all, as the study did not use random assignment',
              'They apply to adults as well, as conscientiousness is stable after childhood'
            ],
            correctAnswer: 1,
            explanation: 'Generalizability depends on who was sampled, and these were volunteers from two schools in one suburban district. A larger sample does not fix an unrepresentative one, random assignment concerns causation rather than generalizing, and no adults were studied.'
          },
          {
            question: 'Suppose the researchers had instead found r = −.41. What would that result have shown?',
            options: [
              'Students with higher conscientiousness scores tended to submit less work on time',
              'Conscientiousness and on-time work were completely unrelated to each other',
              'Higher conscientiousness scores caused students to submit work less often on time',
              'The relationship was weaker than r = +.41 because negative values mean weak links'
            ],
            correctAnswer: 0,
            explanation: 'A negative correlation means that as one variable rises the other tends to fall, and the size of the number gives the strength, so −.41 is as strong as +.41. A correlation of zero would mean no relationship, and no correlation shows causation.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p6-s4-ebq',
      type: 'text' as const,
      content: `
## 📚 EBQ Practice: Is Personality Stable?

**Prompt:** Develop and justify an argument about the extent to which personality is stable across time and situations.

The three sources below are **practice summaries written for this lesson**. They are hypothetical, not real published studies.

**Source 1 (practice, longitudinal).** Researchers gave a Big Five inventory to 500 adults at age 30 and again at age 40. For each of the five traits, scores at the two ages correlated between +.65 and +.75.

**Source 2 (practice, experience sampling).** 80 college students used a phone app to rate how sociable they were acting, five times a day for two weeks. Each student's sociability varied a great deal from moment to moment, mostly depending on whether friends were present. However, each student's **average** sociability over the two weeks correlated +.70 with his or her extraversion score on an inventory.

**Source 3 (practice, experiment).** 90 shy adolescents were randomly assigned to either eight weeks of social-skills sessions with gradually harder speaking tasks or a no-treatment control group. Afterward, the trained group started more conversations during a lunch observation and rated themselves higher in confidence that they could talk with new people.

### Model Response

**Part A — Claim.** Personality is stable in its broad traits across time, but how those traits are expressed changes with the situation and with experience.

**Part B — Evidence and reasoning (Source 1).** In Source 1, Big Five scores at ages 30 and 40 correlated between +.65 and +.75. This supports the stable part of the claim because **trait theory** defines personality as enduring characteristics that produce typical responses, and strong test-retest correlations over ten years show that people kept roughly the same standing on each trait.

**Part C — Evidence and reasoning (Source 3).** In Source 3, shy adolescents randomly assigned to graduated speaking practice later started more conversations and reported more confidence about talking with new people. This supports the "changes with experience" part of the claim because, according to **social-cognitive theory**, mastery experiences raise **self-efficacy**, and through **reciprocal determinism** the new belief changes behavior, which changes the social environment.

### Why This Response Works

| Feature | Where it appears |
|---------|-----------------|
| A defensible claim that takes a position | Part A answers "to what extent" with stable traits plus flexible expression |
| Specific evidence quoted from a source | Correlations in Source 1, the experimental result in Source 3 |
| Different sources for B and C | Source 1, then Source 3 |
| A named psychological concept linking evidence to claim | Trait theory in B; self-efficacy and reciprocal determinism in C |

Source 2 could also support the claim: momentary behavior varied with the situation, yet two-week averages matched trait scores, which is the aggregation principle from Part 5.
      `
    },
    {
      id: 'personality-theories-p6-s5-ebq-dropdown',
      type: 'dropdown-select' as const,
      content: `
**EBQ Skills — Link Evidence to Concepts** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Students\' two-week average sociability matched their extraversion scores even though moment-to-moment behavior varied (Source 2). This best illustrates that traits predict _____',
            options: ['Single actions', 'Unconscious wishes', 'Averaged behavior', 'Ideal selves']
          },
          {
            label: 'Source 3 used random assignment to two conditions, so its research method is _____',
            options: ['A correlational study', 'An experiment', 'A case study', 'A longitudinal survey']
          },
          {
            label: 'Using Source 1 for Part B and Source 1 again for Part C would break the EBQ rule that each part must use evidence from _____',
            options: ['A different source', 'An experiment', 'A named researcher', 'The same claim']
          }
        ],
        correctAnswers: ['Averaged behavior', 'An experiment', 'A different source'],
        hint1: 'Behavior in any one moment varied, but something else matched the inventory.',
        hint2: 'Random assignment to a treatment and a control condition is the signature of one research method.',
        hint3: 'The EBQ asks for evidence in Parts B and C that comes from two separate sources.',
        explanation: 'Traits predict behavior averaged across many situations (aggregation). Random assignment with a manipulated condition makes Source 3 an experiment. EBQ Parts B and C must each use evidence from a different source.'
      }
    },
    {
      id: 'personality-theories-p6-s6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice — Personality Assessment and Design** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher wants evidence that a new Big Five inventory gives consistent results over time. Which procedure would provide that evidence most directly?',
            options: [
              'Check, after a single testing, whether the extraversion items correlate',
              'Give the same people the inventory again months later and correlate the two scores',
              'Have two psychologists independently interpret each participant\'s open answers',
              'Compare the scores of people who took the inventory with those who refused it'
            ],
            correctAnswer: 1,
            explanation: 'Consistency over time is test-retest reliability, measured by giving the same test to the same people twice and correlating the scores. Correlating items within one testing shows internal consistency, and two interpreters agreeing is interrater reliability.'
          },
          {
            question: 'A clinician asks a client to tell stories about ambiguous pictures, while a second psychologist asks the same client to rate 120 statements on a 1-to-5 agreement scale. Which comparison of the two methods is most accurate?',
            options: [
              'The stories come from trait theory and give highly reliable scores',
              'The stories give highly reliable scores, and the ratings probe the unconscious',
              'Both methods are projective tests that rely on how the client interprets them',
              'The stories form a projective test, and the ratings form a personality inventory'
            ],
            correctAnswer: 3,
            explanation: 'Telling stories about ambiguous pictures is a projective test like the TAT, used in the psychodynamic tradition, while rating fixed statements is an objectively scored personality inventory used in trait research. Projective tests have weak reliability, inventories do not aim to probe the unconscious, and only the stories are projective.'
          }
        ]
      }
    }
  ]
}
