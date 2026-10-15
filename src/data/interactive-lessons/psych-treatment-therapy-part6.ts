export const psychTreatmentPart6Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 6 of 7 — Does Therapy Work? Evidence and AP Exam Practice**

> 🔑 **Key Concept:** Many researchers who have conducted **meta-analytic studies** of psychotherapy conclude that **psychotherapies are generally effective**. Psychologists use **evidence-based interventions** to plan treatment, and successful therapy depends on **cultural humility** and a strong **therapeutic alliance** (CED 5.5.A.1). This part shows how that evidence is gathered and read, then practices both free-response question types.

## What the research says

| Term | Meaning | Why it matters |
|---|---|---|
| **Meta-analysis** | A statistical procedure that combines the results of many separate studies into one overall estimate | One study can be a fluke; dozens of studies together give a more reliable answer |
| **Main conclusion** | Psychotherapies are **generally effective**: people who receive therapy tend to improve more than similar people who do not | Supports offering psychotherapy as a standard treatment |
| **Evidence-based intervention** | A treatment chosen by combining the best available research with clinical expertise and the client's characteristics, culture, and preferences | Keeps treatment grounded in data, not habit or hunches |
| **Therapeutic alliance** | The trusting, collaborative relationship between therapist and client, including agreement on goals and tasks | A stronger alliance is consistently linked to better outcomes across therapy types |
| **Cultural humility** | An ongoing stance of self-reflection, openness, and respect toward a client's cultural identity, treating the client as the expert on their own experience | Helps clients feel understood; supports the alliance and reduces early dropout |

### Matching treatment to the problem

"Generally effective" does not mean every therapy works equally well for every problem. Some pairings have especially strong research support:

| Problem | Approach with strong support |
|---|---|
| Specific phobias, OCD | Exposure-based behavior therapy, including exposure and response prevention |
| Depression, many anxiety disorders | Cognitive-behavioral therapy, often combined with medication |
| Chronic self-harm, borderline personality disorder | Dialectical behavior therapy |
| Bipolar disorder | Mood-stabilizing medication such as lithium, plus psychotherapy |

### Cultural humility vs. cultural competence

Cultural **competence** can sound like a finished skill: learn facts about a group and apply them. Cultural **humility** stresses that a therapist never fully "masters" another person's culture. The therapist asks rather than assumes, examines their own biases, and lets the client explain what their background means to them.

**Example.** A therapist working with a client from a religious community does not assume what the client believes. She asks, "How does your faith shape the way you see what you're going through?" and builds the client's answer into the plan.
      `
    },
    {
      id: 'treatment-therapy-p6-s2-outcome',
      type: 'text' as const,
      content: `
## Why Outcome Studies Need Controls

Clients and therapists both tend to believe therapy worked. That belief is not evidence. Three forces can make people improve **even if a treatment does nothing**:

| Force | What it is | How researchers rule it out |
|---|---|---|
| **Spontaneous remission** | Some symptoms ease on their own with time | Compare with a **control group**, such as a waitlist group that receives no treatment during the study |
| **Placebo effect** | Improvement caused by the **expectation** of being helped | Give a control group a placebo pill or a credible inactive treatment; use a **double-blind** procedure for drug trials |
| **Regression toward the mean** | People often seek help when symptoms are at their worst, so scores tend to drift back toward average on retesting | Compare with a control group that started at the same level |

**Random assignment** to treatment and control groups makes the groups similar at the start, so a difference at the end can be credited to the treatment.

## Reading an Outcome Table

**Practice Data Set (hypothetical).** Researchers randomly assigned 160 adults with major depressive disorder to one of four groups for 12 weeks. Depression was measured on a practice scale from 0 to 60, where higher scores mean more severe symptoms.

| Group | n | Mean score before | Mean score after | Mean change |
|---|---|---|---|---|
| CBT only | 40 | 32 | 18 | −14 |
| Antidepressant only | 40 | 31 | 19 | −12 |
| CBT plus antidepressant | 40 | 32 | 14 | −18 |
| Waitlist control | 40 | 32 | 27 | −5 |

**Statistical results (practice).** Each treatment group improved significantly more than the waitlist group (p < .05). The combined group improved significantly more than either single-treatment group (p < .05). The difference between CBT only and antidepressant only was **not** statistically significant.

### How to read it

1. **Start with the control.** The waitlist group improved by 5 points with no treatment, a sign of spontaneous remission or regression toward the mean. Treatment effects must be judged **beyond** that 5 points.
2. **Compare groups, not single scores.** CBT only dropped 14 points versus 5 for the waitlist, so CBT's added benefit was about 9 points.
3. **Check significance.** A statistically significant difference is unlikely to be due to chance alone. A non-significant difference, such as CBT only versus antidepressant only, means the study cannot conclude that one beat the other.
4. **Remember these are means.** A mean change of −14 does not mean every person in the CBT group improved by 14 points.

> 🔑 **AP Connection:** These are exactly the skills the AAQ tests: identifying a control group, describing what a difference in means shows, and avoiding claims the data do not support.
      `
    },
    {
      id: 'treatment-therapy-p6-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Data Check — Use the Practice Data Set above** 📊
      `,
      exercise: {
        questions: [
          {
            question: "Why did the researchers include the waitlist group?",
            options: [
              "To make sure every participant received some medication",
              "To measure how much the therapists' training affected scores",
              "To show how much improvement occurs without treatment",
              "To increase the number of participants who received CBT"
            ],
            correctAnswer: 2,
            explanation: "A waitlist control shows how much people improve with time alone, so the treatment groups can be judged against that baseline. The waitlist group received no medication and no CBT during the study."
          },
          {
            question: "The waitlist group's mean score fell by 5 points. Which explanation is most consistent with the study design?",
            options: [
              "Some symptoms ease over time without any treatment",
              "Waitlist scores were recorded on a different scale",
              "The waitlist group began with milder symptoms than the rest",
              "The waitlist group quietly received the combined treatment"
            ],
            correctAnswer: 0,
            explanation: "Spontaneous remission and regression toward the mean can lower scores with no treatment. The table shows the waitlist group started at the same mean as the other groups, and nothing suggests a different scale or secret treatment."
          },
          {
            question: "Which conclusion is best supported by the practice data and statistical results?",
            options: [
              "CBT alone worked significantly better than medication alone",
              "Medication alone had no effect beyond that of the waitlist",
              "Every participant who received CBT improved by 14 points",
              "Combined treatment produced the largest mean improvement"
            ],
            correctAnswer: 3,
            explanation: "The combined group improved most and differed significantly from both single treatments. The CBT versus medication difference was not significant, medication did beat the waitlist, and a mean change says nothing about every individual."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p6-s4-aaq',
      type: 'text' as const,
      content: `
## AAQ Walkthrough: A Practice Study

The **Article Analysis Question (AAQ)** gives you a summary of one study and has **7 points across 6 parts**. Here is a practice study summary, followed by each task and a model response.

### A practice study summary (hypothetical)

> **Purpose.** Researchers tested the hypothesis that group cognitive-behavioral therapy (CBT) would reduce social anxiety more than no treatment.
>
> **Participants.** 90 undergraduates, ages 18 to 22, were recruited from the counseling-center waitlist at one large public university. All met criteria for social anxiety disorder.
>
> **Method.** Participants were randomly assigned to 8 weekly sessions of group CBT (n = 45) or to a waitlist control group (n = 45). Social anxiety was measured before and after the 8 weeks with a 24-item self-report questionnaire (scores 0 to 72; higher scores mean more social anxiety).
>
> **Ethics.** All participants gave informed consent and were told they could withdraw at any time. Questionnaires were labeled with code numbers rather than names. After the study, waitlist participants were offered the same group CBT, and all participants were debriefed.
>
> **Results.** The group CBT mean fell from 48 to 30. The waitlist mean fell from 47 to 44. The difference in change between groups was statistically significant (p < .05).

### The six tasks, with model responses

| Task | What it asks | Model response | Why it works |
|---|---|---|---|
| **A. Research method** | Identify the method | "This is an **experiment**." | Random assignment to conditions, with the researchers manipulating treatment, makes it an experiment |
| **B. Operational definition** | State how a variable was measured | "Social anxiety was operationally defined as the **score on a 24-item self-report questionnaire**, from 0 to 72." | Names the specific, measurable procedure, not just "anxiety" |
| **C. Statistic** | Describe what a result shows | "The CBT group's mean dropped 18 points versus 3 for the waitlist, and the difference was **statistically significant**, so it is unlikely to be due to chance." | Describes the direction and meaning of the difference |
| **D. Ethics** | Identify one ethical guideline described **and** how the researchers applied it | "**Confidentiality**: questionnaires used code numbers instead of names." | Names one guideline from the summary and the specific step the researchers took |
| **E. Generalizability** | Explain the extent of generalizability using evidence from the study | "The findings may not generalize to older adults or people outside college, because **all participants were 18 to 22-year-old students at one university** seeking counseling." | Cites the actual sample to justify the limit |
| **F. Support or refute** | Explain how a finding supports or refutes the hypothesis | "The CBT group's anxiety fell far more than the waitlist group's, a significant difference, which **supports** the hypothesis that group CBT reduces social anxiety more than no treatment." | Connects a specific result to the specific hypothesis |

### Common AAQ mistakes on treatment studies

| Mistake | Fix |
|---|---|
| Calling any study with groups an experiment | Look for **random assignment** and a manipulated variable |
| "Anxiety was measured" as an operational definition | State the actual instrument and scale |
| Naming an ethical guideline the summary never mentions | Pick one listed in the summary and quote what the researchers did |
| "The results are not generalizable" with no evidence | Name the sample feature (age, setting, single university) that limits it |
| "It proves CBT works for everyone" | Use cautious language and tie it to this sample and hypothesis |
      `
    },
    {
      id: 'treatment-therapy-p6-s5-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Use the practice study summary above** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which statement best explains the extent to which the practice study's findings can be generalized?",
            options: [
              "They apply to all adults, since assignment was random",
              "They cannot apply to anyone, since a waitlist was used",
              "They may not carry over past students at one university",
              "They apply to every anxiety disorder in the population"
            ],
            correctAnswer: 2,
            explanation: "All participants were 18 to 22-year-old students from one university's counseling center, which limits generalization to other ages and settings. Random assignment supports causal conclusions but does not make a narrow sample representative."
          },
          {
            question: "Which result, had it occurred, would most directly refute the researchers' hypothesis?",
            options: [
              "The CBT group's scores fell more than the waitlist group's",
              "The waitlist group's scores fell as much as the CBT group's",
              "Each group began the study with a similar mean anxiety score",
              "A few CBT participants withdrew before the final session"
            ],
            correctAnswer: 1,
            explanation: "The hypothesis predicts a greater drop for CBT than for no treatment, so equal drops would refute it. Similar starting scores and a few withdrawals do not test the prediction, and a bigger CBT drop supports it."
          },
          {
            question: "The summary states that waitlist participants were offered group CBT after the study ended. This step best protects participants from",
            options: [
              "losing confidentiality",
              "being denied helpful treatment",
              "being deceived about the purpose",
              "being pressured not to withdraw"
            ],
            correctAnswer: 1,
            explanation: "Offering the treatment afterward ensures the control group is not permanently denied a potentially helpful therapy, a form of protecting participants from harm. Confidentiality was handled with code numbers, and nothing in the summary involves deception."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p6-s6-ebq',
      type: 'text' as const,
      content: `
## EBQ Mini Set: Three Practice Sources

The **Evidence-Based Question (EBQ)** has **7 points across 3 parts**: (A) a defensible claim, (B) evidence from one source plus an explanation using a psychological concept, and (C) evidence from a **different** source plus an explanation using a **different** concept.

**Prompt.** Develop and justify an argument about whether the relationship between a therapist and a client affects the success of therapy.

### Source 1 (practice correlational study, hypothetical)

> 200 adults in outpatient therapy rated the strength of their working relationship with their therapist after the third session. Stronger relationship ratings were positively correlated with greater reductions in symptoms by the end of therapy.

### Source 2 (practice experiment, hypothetical)

> 40 therapists were randomly assigned to complete either a cultural humility training program or a standard training program. Their clients, who did not know which training their therapist had received, reported feeling more understood in the cultural humility condition and were less likely to drop out before the fifth session.

### Source 3 (practice case study, hypothetical)

> A 29-year-old client with depressive symptoms stopped attending therapy after her first therapist dismissed her religious beliefs as "part of the problem." A second therapist asked how her faith shaped her experience and built it into the treatment plan. The client completed treatment, and her symptoms decreased.

### Model response

**A. Claim.** "A trusting, culturally humble relationship between therapist and client improves the success of therapy."

**B. Evidence and explanation.** "According to Source 1, clients who rated their working relationship as stronger after the third session showed greater symptom reductions. This supports the claim through the concept of the **therapeutic alliance**: when a client trusts the therapist and agrees on goals, the client is more likely to engage in the work of therapy. Because Source 1 is correlational, it shows the relationship and outcome move together, and the experiment in Source 2 strengthens the causal case."

**C. Evidence and explanation.** "In Source 2, therapists randomly assigned to cultural humility training had clients who felt more understood and dropped out less. This supports the claim through **cultural humility**: a therapist who asks about and respects a client's cultural identity helps the client stay in treatment long enough to benefit. Random assignment lets us attribute the difference to the training."

### Why this earns credit

| Part | What the response does |
|---|---|
| A | Takes a clear position that the sources can support |
| B | Cites Source 1 by number, gives a specific finding, and explains it with **therapeutic alliance** |
| C | Cites a **different** source, Source 2, and uses a **different** concept, **cultural humility** |

Source 3 could also support the claim, but a single case cannot show cause and effect or generalize widely. Using it is allowed; leaning on it alone would be weaker.

> 🔑 **AP Connection:** Do not reuse the same source or the same concept in parts B and C. Name the source ("According to Source 2..."), state the specific evidence, and then **explain** the link with a psychological concept; summarizing the source without the concept does not complete the explanation.
      `
    },
    {
      id: 'treatment-therapy-p6-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**EBQ Check — Use the three practice sources above** 🧩
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Source 2 supports a cause-and-effect claim more strongly than Source 1 because Source 2 is _____.',
            options: ['a correlational study', 'an experiment', 'a case study', 'a meta-analysis']
          },
          {
            label: 'The psychological concept that best explains the finding in Source 1 is the _____.',
            options: ['cognitive triad', 'token economy', 'therapeutic alliance', 'placebo effect']
          },
          {
            label: 'A response that cites Source 1 in part B and Source 1 again in part C loses credit in part C, because part C requires evidence from _____.',
            options: ['the same source', 'a different source', 'a hypothetical example', 'outside research']
          }
        ],
        correctAnswers: ['an experiment', 'therapeutic alliance', 'a different source'],
        hint1: 'Random assignment of therapists to two training programs is the giveaway for one research method.',
        hint2: 'Source 1 measured how strong the working relationship felt.',
        hint3: 'Parts B and C must each draw on a different source.',
        explanation: 'Source 2 randomly assigned therapists to conditions, so it is an experiment and supports causal claims. Source 1 measured the working relationship, which is the therapeutic alliance. Part C must cite a source different from the one used in part B.'
      }
    },
    {
      id: 'treatment-therapy-p6-s8-wrap',
      type: 'text' as const,
      content: `
## Part 6 Summary

| Idea | Takeaway |
|---|---|
| Meta-analysis | Combining many studies shows psychotherapies are generally effective |
| Evidence-based intervention | Research plus clinical expertise plus the client's characteristics and preferences |
| Therapeutic alliance | A trusting, collaborative relationship predicts better outcomes |
| Cultural humility | Ongoing openness to the client's cultural identity strengthens the alliance |
| Controls | Waitlist and placebo groups, random assignment, and double-blind procedures rule out spontaneous remission, placebo effects, and regression toward the mean |
| AAQ | Method, operational definition, statistic, ethics, generalizability, support or refute |
| EBQ | Claim, then two different sources explained with two different concepts |

> 🔑 **AP Connection:** Treatment studies are a natural fit for both free-response questions, so expect to see therapy, medication, or therapeutic alliance research on the exam. Part 7 pulls every part of this topic together.
      `
    }
  ]
}
