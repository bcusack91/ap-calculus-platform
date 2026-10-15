export const psychTreatmentPart7Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 7 of 7 — Synthesis: Matching Perspectives, Techniques, and Disorders**

> 🔑 **Key Concept:** Every treatment follows from a theory of what went wrong. If you know a perspective's **assumed cause**, you can predict its **goal** and its **techniques**, and you can recognize them in any scenario the exam describes.

## Master Table

| Perspective | Assumed cause of the problem | Goal of treatment | Signature techniques (CED) | Uses with strong support |
|---|---|---|---|---|
| **Psychodynamic** | Unconscious conflicts, often rooted in early relationships | Insight into unconscious material | Free association, dream interpretation | Modern, briefer psychodynamic therapy for some problems |
| **Humanistic** | Blocked growth; conditions of worth | Self-acceptance and growth | Person-centered therapy: active listening, unconditional positive regard | Building the alliance; clients seeking personal growth |
| **Behavioral** | Learned maladaptive behaviors | Unlearn or replace the behavior | Applied behavior analysis: exposure (systematic desensitization), aversion therapy, token economy, biofeedback | Phobias, OCD (exposure and response prevention), skill building in developmental disabilities |
| **Cognitive** | Maladaptive, distorted thinking | Change the thoughts | Cognitive restructuring, fear hierarchies, Beck's cognitive triad | Depression, anxiety disorders |
| **Cognitive-behavioral** | Thoughts and behaviors that maintain each other | Change both | CBT, REBT (dispute irrational beliefs), DBT (acceptance plus change skills) | Depression, anxiety disorders; DBT for chronic self-harm and borderline personality disorder |
| **Biological** | Brain chemistry or circuits | Correct the biological process | Antidepressants, antianxiety drugs, lithium, antipsychotics; ECT, TMS, psychosurgery | Severe symptoms such as psychosis or mania; ECT for severe depression that has not responded to other treatment |

### Cross-cutting ideas from Parts 1 and 6

| Idea | Applies to |
|---|---|
| Decentralized, **combined** treatment | Most current plans pair medication with psychotherapy |
| Group vs. individual formats | Any psychotherapy can be delivered in either format |
| APA ethical principles | Every therapist: nonmaleficence, fidelity, integrity, respect for people's rights and dignity |
| Evidence base | Meta-analyses: psychotherapies are generally effective; therapeutic alliance and cultural humility matter |
| Hypnosis | Effective for pain and anxiety; not for accurate memory retrieval or age regression |
      `
    },
    {
      id: 'treatment-therapy-p7-s2-cases',
      type: 'text' as const,
      content: `
## Choosing Among Treatments: A Four-Step Process

1. **Name the target.** What needs to change: avoidance, distorted thoughts, overwhelming emotions, or a biological process such as psychosis? (For the symptoms of each disorder, see Mood and Psychotic Disorders.)
2. **Match the target to a perspective.** Avoidance points to exposure; distorted thoughts point to cognitive restructuring; severe biological symptoms point to medication.
3. **Choose format and combination.** Individual or group? Psychotherapy alone, or combined with medication?
4. **Check ethics and evidence.** Is there research support? Has the client given informed consent? Does the plan respect the client's culture and choices?

### Worked Case 1: OCD

**Case.** Nadia, 26, has obsessive-compulsive disorder. She fears contamination and washes her hands for long stretches many times a day.

**Step 1: Target.** The washing compulsion is negatively reinforced: it brings brief relief from anxiety, so it keeps happening.

**Step 2: Perspective.** Behavioral: **exposure and response prevention**. Nadia touches a "contaminated" object and refrains from washing, so anxiety rises and then falls without the compulsion, and the link weakens.

**Step 3: Combination.** An SSRI may be added, since SSRIs are also used for OCD.

**Step 4: Ethics and evidence.** Exposure is distressing, so the therapist explains it fully, gets informed consent, and builds a hierarchy Nadia agrees to (nonmaleficence and respect for self-determination).

### Worked Case 2: Severe depression

**Case.** Omar, 58, has severe major depressive disorder. Two antidepressants and a year of CBT have not helped, and he can barely leave bed.

**Step 1: Target.** Symptoms are severe and have not responded to medication or psychotherapy.

**Step 2: Perspective.** Biological options for treatment-resistant depression: **ECT** (under anesthesia with a muscle relaxant) or **TMS** (noninvasive magnetic stimulation).

**Step 3: Combination.** After symptoms improve, ongoing psychotherapy can help prevent relapse.

**Step 4: Ethics and evidence.** Omar's psychiatrist explains the memory side effects of ECT and the milder profile of TMS; Omar chooses with full information.

### Worked Case 3: Same problem, different lenses

**Case.** Jada, 16, avoids speaking in class because she expects to be laughed at.

| Perspective | What that therapist would do |
|---|---|
| Psychodynamic | Explore, through free association, whether early experiences of shame shape her fear |
| Humanistic | Listen actively and accept her unconditionally so she can explore her feelings about being judged |
| Behavioral | Build a hierarchy, from answering one question to giving a short presentation, and practice each step |
| Cognitive | Test the prediction "everyone will laugh" against evidence |
| Biological | Possibly consider medication if her anxiety is severe, usually alongside therapy |
      `
    },
    {
      id: 'treatment-therapy-p7-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Name the Approach** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A therapist tells a client, 'Let's write down the thought \"I ruin everything\" and check whether the facts back it up.' This therapist is working from which perspective?",
            options: [
              "Cognitive",
              "Humanistic",
              "Psychodynamic",
              "Biological"
            ],
            correctAnswer: 0,
            explanation: "Testing a thought against the facts is cognitive restructuring, the core cognitive technique. A humanistic therapist would reflect the feeling without challenging it, and a psychodynamic therapist would look for unconscious roots."
          },
          {
            question: "Which pairing correctly matches a therapy with the learning principle it applies?",
            options: [
              "Aversion therapy and observational learning",
              "Systematic desensitization and operant conditioning",
              "Biofeedback and classical conditioning",
              "Token economy and operant conditioning"
            ],
            correctAnswer: 3,
            explanation: "A token economy reinforces target behaviors with tokens, an operant principle. Systematic desensitization and aversion therapy rely on classical conditioning, and biofeedback relies on feedback that reinforces a strategy, which is operant."
          },
          {
            question: "Nadia, who has obsessive-compulsive disorder, washes her hands for long stretches many times a day. Which plan has the strongest research support?",
            options: [
              "Free association to uncover the roots of her rituals",
              "Exposure and response prevention alongside an SSRI",
              "Unconditional positive regard while she sets the agenda",
              "A benzodiazepine taken whenever the urges feel strong"
            ],
            correctAnswer: 1,
            explanation: "Exposure and response prevention breaks the link between the trigger and the compulsion, and SSRIs are also used for OCD. Benzodiazepines offer only short-term calming and carry a risk of dependence."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p7-s4-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Retire

| Misconception | Accurate version |
|---|---|
| "ECT is a punishment given to people who are awake and convulsing." | Modern ECT is given under general anesthesia with a muscle relaxant, mainly for severe depression that has not responded to other treatment. |
| "TMS is a milder form of ECT that causes small seizures." | TMS uses magnetic pulses through the scalp; it is noninvasive, needs no anesthesia, and does not aim to cause a seizure. |
| "Lobotomies are still a standard treatment for severe disorders." | The lobotomy was popular in the mid-20th century and is rarely, if ever, performed today. |
| "Medication alone is always the best treatment." | Current practice often **combines** medication with psychotherapy; medication does not teach coping skills. |
| "Hypnosis can recover hidden memories or take you back to childhood." | Hypnosis helps with pain and anxiety; research does not support it for accurate memory retrieval or age regression. |
| "Person-centered therapy means the therapist approves of anything the client does." | Unconditional positive regard accepts the **person**; it does not mean endorsing every action. |
| "Free association is just casual chatting." | It is a structured technique: the client reports every thought, and the therapist watches for pauses and topic changes that hint at unconscious conflict. |
| "If clients say they feel better, the therapy worked." | Improvement can come from spontaneous remission, placebo effects, or regression toward the mean; only controlled studies show a treatment's effect. |
| "Group therapy is a cheaper but worse version of individual therapy." | Groups offer unique benefits, such as peer support, seeing that others share the problem, and practicing social skills. |
| "Tardive dyskinesia is a symptom of schizophrenia." | It is a movement disorder that can follow long-term use of dopamine-blocking antipsychotic medication. |
      `
    },
    {
      id: 'treatment-therapy-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Who Said It?** 🧩

Each line is something a therapist might say. Choose the approach it best represents.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Tell me anything that comes to mind, even if it seems silly." This fits _____ therapy.',
            options: ['cognitive', 'psychodynamic', 'person-centered', 'behavioral']
          },
          {
            label: '"So you feel invisible at home, even when you try your best." This fits _____ therapy.',
            options: ['person-centered', 'cognitive', 'behavioral', 'psychodynamic']
          },
          {
            label: '"Today we will stand across the street from a leashed dog while you practice slow breathing." This fits _____ therapy.',
            options: ['psychodynamic', 'person-centered', 'cognitive', 'behavioral']
          },
          {
            label: '"Who says you must be liked by everyone? Where is that written?" This fits _____ therapy.',
            options: ['behavioral', 'psychodynamic', 'rational-emotive behavior', 'person-centered']
          }
        ],
        correctAnswers: ['psychodynamic', 'person-centered', 'behavioral', 'rational-emotive behavior'],
        hint1: 'Saying whatever comes to mind is free association.',
        hint2: 'Restating a feeling without judgment is active listening.',
        hint3: 'A step on a hierarchy paired with relaxation is systematic desensitization; disputing a "must" belief is REBT.',
        explanation: 'Free association is psychodynamic, reflecting feelings is person-centered, a relaxed step up a fear hierarchy is behavioral (systematic desensitization), and forcefully disputing a "must" belief is rational-emotive behavior therapy.'
      }
    },
    {
      id: 'treatment-therapy-p7-s6-contrasts',
      type: 'text' as const,
      content: `
## Contrasts the Exam Loves

| Contrast | Side 1 | Side 2 |
|---|---|---|
| **Insight vs. action** | Psychodynamic and humanistic therapies seek self-understanding | Behavioral and cognitive therapies change behaviors and thoughts directly |
| **Directive vs. nondirective** | Cognitive, behavioral, REBT, and psychodynamic interpretation: the therapist leads | Person-centered: the client leads |
| **Classical vs. operant** | Exposure, systematic desensitization, aversion therapy | Token economy, biofeedback |
| **Beck vs. Ellis** | Collaborative testing of thoughts; cognitive triad | Directive disputing of irrational "must" beliefs; ABC model |
| **Invasive vs. noninvasive** | ECT (anesthesia, seizure), psychosurgery, lobotomy | TMS (magnetic pulses, awake) |
| **Group vs. individual** | Lower cost, peer support, practice with others | More attention, stronger confidentiality |

### Writing a strong treatment explanation

On a free-response question, link three things: the **technique**, the **mechanism**, and the **outcome**.

| Weak | Strong |
|---|---|
| "She could use exposure therapy." | "Through **systematic desensitization**, she would pair relaxation with each step of a fear hierarchy, so relaxation replaces fear as her response to dogs, reducing her avoidance." |
| "An antipsychotic would help." | "An **antipsychotic** blocks dopamine receptors, which can reduce hallucinations; long-term use, however, risks **tardive dyskinesia**." |
| "The therapist was nice to him." | "The therapist showed **unconditional positive regard**, accepting him without judgment, which let him explore feelings he had hidden." |
      `
    },
    {
      id: 'treatment-therapy-p7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Integrated Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which statement about modern electroconvulsive therapy is accurate?",
            options: [
              "It is given to awake patients as a form of behavior control",
              "It is given under anesthesia, mainly to treat severe depression",
              "It is the first treatment tried for most cases of depression",
              "It uses magnetic pulses and produces no seizure in the brain"
            ],
            correctAnswer: 1,
            explanation: "Modern ECT is given under general anesthesia with a muscle relaxant, mainly for severe depression that has not responded to other treatment. Magnetic pulses without a seizure describe TMS."
          },
          {
            question: "A clinic advertises that most of its clients say they feel better after ten sessions. What is the strongest reason this claim alone does not show the therapy works?",
            options: [
              "No untreated group was measured to compare against",
              "The clinic's therapists used more than one approach",
              "Clients who feel better tend to stay in therapy longer",
              "Ten sessions is too short a period to produce any change"
            ],
            correctAnswer: 0,
            explanation: "Without a control group, improvement could reflect spontaneous remission, placebo effects, or regression toward the mean. Using several approaches does not by itself undermine the claim, and the length of treatment is not the main flaw."
          },
          {
            question: "A person-centered therapist's unconditional positive regard means that the therapist",
            options: [
              "agrees with every decision the client describes in session",
              "interprets the client's hidden motives without judging them",
              "accepts the client as a human being without approving every act",
              "rewards the client's positive statements with praise"
            ],
            correctAnswer: 2,
            explanation: "Unconditional positive regard values the client as a person regardless of what the client says or does, without endorsing every action. Interpreting hidden motives is psychodynamic, and rewarding statements is operant reinforcement."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p7-s8-wrap',
      type: 'text' as const,
      content: `
## Topic Wrap-Up

| Part | Core takeaway |
|---|---|
| 1 | Deinstitutionalization, decentralized and combined care, group vs. individual formats, APA ethics |
| 2 | Psychodynamic (free association, dream interpretation) and person-centered (active listening, unconditional positive regard) therapies; hypnosis for pain and anxiety only |
| 3 | Applied behavior analysis: exposure, systematic desensitization, aversion therapy, token economy, biofeedback |
| 4 | Cognitive restructuring, Beck's cognitive triad, REBT, CBT, DBT |
| 5 | Medications by neurotransmitter; tardive dyskinesia; ECT, TMS, psychosurgery, lobotomy |
| 6 | Meta-analyses, evidence-based interventions, therapeutic alliance, cultural humility; AAQ and EBQ practice |
| 7 | Matching perspectives, techniques, and cases |

> 🔑 **AP Connection:** When a question describes a therapist's words or actions, ask two questions: **What is this therapist trying to change?** and **How?** The answer to the first names the perspective; the answer to the second names the technique.
      `
    }
  ]
}
