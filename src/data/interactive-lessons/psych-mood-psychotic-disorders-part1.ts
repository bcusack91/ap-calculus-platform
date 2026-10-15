export const psychMoodPsychPart1Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-psychotic-disorders-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood and Psychotic Disorders

**Part 1 of 7 — Depressive Disorders**

> 🔑 **Key Concept:** Depressive disorders are marked by a sad, empty, or irritable mood **plus** physical and cognitive changes that interfere with a person's ability to function. Ordinary sadness passes and does not shut down daily life; a depressive disorder persists and does.

This lesson covers the disorder categories in AP Psychology Topic 5.4. Parts 1 to 5 move category by category: depressive disorders here, then bipolar disorders, the schizophrenia spectrum, anxiety-related categories, and the remaining categories the course names. Part 6 is research and free-response practice, and Part 7 pulls it all together. (How disorders are defined and classified in general, the DSM, and the big explanatory models are covered in **Psychological Disorders Overview**.)

### The two depressive disorders in AP scope

The course framework names exactly two: **major depressive disorder (MDD)** and **persistent depressive disorder (PDD)**. Both involve a low or empty mood. They differ mainly in **intensity** and **time course**.

### Major depressive disorder: the DSM-5-TR pattern

A person meets the criteria for a **major depressive episode** when **five or more** of the nine symptoms below are present during the **same 2-week period**, they represent a change from the person's usual functioning, and **at least one** of the five is either depressed mood or loss of interest or pleasure.

| Symptom group | DSM-5-TR symptom | What it can look like |
|---|---|---|
| Mood | **Depressed mood** most of the day, nearly every day | Feeling sad, empty, or hopeless; in children and teens the mood can be **irritable** |
| Mood | **Markedly diminished interest or pleasure** (anhedonia) | A guitarist stops playing; time with friends feels flat |
| Physical | Significant **weight or appetite** change | Weight loss without dieting, or a large increase in appetite |
| Physical | **Insomnia or hypersomnia** | Waking at 4 a.m. and lying awake, or sleeping 12+ hours |
| Physical | **Psychomotor agitation or slowing** that others can observe | Pacing and fidgeting, or slowed speech and movement |
| Physical | **Fatigue** or loss of energy | Small tasks such as showering feel exhausting |
| Cognitive | Feelings of **worthlessness** or excessive guilt | "I ruin everything for everyone." |
| Cognitive | Trouble **thinking, concentrating, or deciding** | Rereading the same page; cannot choose what to eat |
| Cognitive | Recurrent **thoughts of death** or suicide | Thoughts that others would be better off without them |

Three more conditions complete the diagnosis:
1. The symptoms cause **clinically significant distress or impairment** at school, work, or in relationships.
2. They are **not better explained** by a substance or a medical condition.
3. The person has **never had a manic or hypomanic episode**. If they have, the diagnosis belongs in the bipolar category instead (Part 2).

### Persistent depressive disorder: lower intensity, longer duration

**Persistent depressive disorder** is a depressed mood for most of the day, on more days than not, for **at least 2 years** in adults (**at least 1 year** in children and adolescents, where the mood can be irritable). During that time the person also has at least two of: poor appetite or overeating, sleeping too little or too much, low energy, low self-esteem, poor concentration or trouble making decisions, and feelings of hopelessness. Over the whole period, symptom-free stretches last **no longer than 2 months** at a time.

| Feature | Major depressive disorder | Persistent depressive disorder |
|---|---|---|
| Minimum duration | 2 weeks (one episode) | 2 years in adults, 1 year in youth |
| Typical intensity | Often severe; daily functioning can collapse | Often milder on any single day, but chronic |
| Shape over time | Episodes, which can recur with recovery between them | A long, steady low that rarely lifts |
| Can they overlap? | A major depressive episode can occur during PDD | Both diagnoses can then be given |

> 🔑 **AP Connection:** Exam questions usually give you a short case and ask which disorder fits. Look first at **time** (2 weeks or 2 years?), then at **intensity**, then at whether there has **ever** been mania. Those three clues settle most depressive-versus-bipolar items.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Diagnosing Depressive Disorders** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the past three weeks, Marisol has felt empty most of every day, has lost interest in soccer, sleeps eleven hours a night, feels worthless, and cannot concentrate in class. She has never had a period of unusually elevated mood. Which diagnosis best fits?',
            options: [
              'Persistent depressive disorder',
              'Major depressive disorder',
              'Bipolar II disorder',
              'Generalized anxiety disorder'
            ],
            correctAnswer: 1,
            explanation: 'Marisol shows five symptoms, including depressed mood and loss of interest, in the same period of more than 2 weeks, with impairment, which is the pattern of a major depressive episode. Persistent depressive disorder would require at least 2 years, and the bipolar diagnosis would require a past hypomanic episode.'
          },
          {
            question: 'Devon, a 35-year-old accountant, says he has felt "low and gray" on most days for as long as he can remember, at least the last four years. He keeps working, but he has low energy and low self-esteem. Which feature most clearly points to persistent depressive disorder rather than major depressive disorder?',
            options: [
              'The low energy that accompanies his mood',
              'The fact that he continues to hold a job',
              'The total duration of his low mood',
              'The low self-esteem that he describes'
            ],
            correctAnswer: 2,
            explanation: 'Duration is the defining difference: persistent depressive disorder requires depressed mood on more days than not for at least 2 years in adults. Low energy and low self-esteem can occur in either disorder, and continuing to work does not rule out either one.'
          },
          {
            question: 'Which of the following would rule out a diagnosis of major depressive disorder, even if a person currently meets the symptom criteria?',
            options: [
              'A history of at least one manic episode',
              'A current depressed mood that is irritable',
              'An onset of symptoms during adolescence',
              'A symptom list that includes hypersomnia'
            ],
            correctAnswer: 0,
            explanation: 'A past manic or hypomanic episode moves the diagnosis into the bipolar category. Irritable mood, adolescent onset, and oversleeping are all consistent with major depressive disorder.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s3-causes',
      type: 'text' as const,
      content: `
## Possible Causes: Six Sources of Evidence

The course framework says possible causes of depressive disorders come from **biological, genetic, social, cultural, behavioral, or cognitive** sources. No single source explains every case. On the exam you will be asked to connect a specific piece of evidence to the right kind of cause.

| Source | What the evidence suggests | AP terms to use |
|---|---|---|
| **Biological** | Depression is associated with differences in the activity of the neurotransmitters **serotonin** and **norepinephrine**, and with disrupted sleep and circadian rhythms. Many antidepressants act on these neurotransmitters. | serotonin, norepinephrine, circadian rhythm |
| **Genetic** | Depression runs in families, and identical twins are more often both affected than fraternal twins. Genes raise **risk**; they do not guarantee the disorder. | twin studies, family studies, predisposition |
| **Cognitive** | People who are depressed tend to explain bad events with a **pessimistic explanatory style** (internal: "it's me"; stable: "it will last"; global: "it ruins everything") and to **ruminate**, replaying problems without solving them. | explanatory style, rumination, negative thinking |
| **Behavioral** | When effort seems to make no difference, organisms can develop **learned helplessness** and stop trying. A loss of rewarding activity also lowers reinforcement, which lowers activity further. | learned helplessness, reinforcement |
| **Social** | Loss, conflict, isolation, and chronic stress raise risk; strong social support lowers it. | social support, stressors |
| **Cultural** | Culture shapes how distress is expressed and noticed. In some cultures it is reported mainly through **physical complaints** such as fatigue or aches. Stigma can delay help-seeking. Women are diagnosed more often than men, beginning in adolescence. | cultural norms, stigma |

### A caution about "chemical imbalance"

You will often hear that depression is "caused by a chemical imbalance." The evidence is more modest. Neurotransmitter differences are **correlated** with depression, and drugs that change serotonin activity help many people, but neither fact proves that low serotonin is the starting cause. On the AP exam, describe neurotransmitters as a **possible biological cause** and avoid claiming that one chemical explains the disorder.

### Worked case: one person, several sources

> **Practice case (hypothetical):** Aiden, 17, has a parent and an aunt who have both been treated for depression. Last spring his family moved, he lost his close friends, and he was cut from the basketball team. Since then he has been telling himself, "Nothing I do ever works out, and it never will." He stopped going to practice open gyms because "there's no point." For a month he has slept poorly, felt worthless, and lost interest in almost everything.

**Step 1: Name the pattern.** A month of low mood, loss of interest, poor sleep, and worthlessness with impairment fits a **major depressive episode** (assuming at least five symptoms and no history of mania).

**Step 2: Sort the evidence by source.**
- Family history → **genetic** predisposition.
- The move and loss of friends → **social** stressors and reduced social support.
- "Nothing I do ever works out, and it never will" → **cognitive**: an internal, global, stable explanatory style.
- Stopping open gyms because "there's no point" → **behavioral**: learned helplessness and lost reinforcement.

**Step 3: Combine.** A predisposition plus stressful events plus a thinking pattern that magnifies them is a stronger explanation than any one factor. In the language of the overview lesson, that is a **diathesis-stress** account.

> 🔑 **AP Connection:** In a free-response answer, "biological factors cause depression" earns little. "Aiden's family history suggests a genetic predisposition, and the stress of the move may have triggered symptoms" connects a specific piece of **evidence** to a specific **concept**. That pairing is the skill the exam rewards.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Numbers Worth Knowing** ✍️

Type a number for each.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the minimum number of the nine symptoms needed for a major depressive episode?',
            answer: '5',
            acceptableAnswers: ['five'],
            explanation: 'Five or more of the nine symptoms must be present, and at least one must be depressed mood or loss of interest or pleasure.'
          },
          {
            question: 'Those symptoms must be present during the same period of at least how many weeks?',
            answer: '2',
            acceptableAnswers: ['two', '2 weeks', 'two weeks'],
            explanation: 'A major depressive episode requires the symptoms over the same 2-week period, representing a change from usual functioning.'
          },
          {
            question: 'In adults, persistent depressive disorder requires depressed mood on more days than not for at least how many years?',
            answer: '2',
            acceptableAnswers: ['two', '2 years', 'two years'],
            explanation: 'Adults need at least 2 years of depressed mood on more days than not; children and adolescents need at least 1 year.'
          }
        ]
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Evidence to Its Source** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An identical twin of a person with depression is more likely to be diagnosed than a fraternal twin would be. This is evidence for a _____ cause.',
            options: ['genetic', 'cognitive', 'behavioral', 'cultural']
          },
          {
            label: 'A student who failed one quiz concludes, "I am stupid, and I will fail everything from now on." This is a _____ cause.',
            options: ['biological', 'social', 'cognitive', 'genetic']
          },
          {
            label: 'After months of applying for jobs with no replies, a man stops applying even when a friend offers him a lead. This pattern is called _____.',
            options: ['rumination', 'learned helplessness', 'hypersomnia', 'anhedonia']
          }
        ],
        correctAnswers: ['genetic', 'cognitive', 'learned helplessness'],
        hint1: 'Twin comparisons are designed to separate shared genes from shared environments.',
        hint2: 'Internal, stable, global explanations of failure are a thinking pattern.',
        hint3: 'He has learned that his actions do not seem to change the outcome, so he stops acting.',
        explanation: 'Higher concordance in identical twins points to a genetic contribution. Explaining failure as personal, permanent, and pervasive is a cognitive factor (pessimistic explanatory style). Giving up after repeated uncontrollable failure is learned helplessness, a behavioral explanation.'
      }
    },
    {
      id: 'mood-psychotic-disorders-p1-s6-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions and Respectful Language

| Misconception | What the evidence shows |
|---|---|
| "Depression is just extreme sadness." | Depression also changes sleep, appetite, energy, concentration, and self-worth. Some people feel **empty or numb** rather than sad. |
| "If someone can still go to school or work, they aren't really depressed." | Persistent depressive disorder in particular is often **high-functioning on the surface** while it drains energy and self-esteem for years. |
| "Teens who are irritable are just moody." | In children and adolescents, depressed mood can show up as **irritability**. The DSM-5-TR counts it. |
| "Depression is a sign of weak character." | Genetic, biological, cognitive, behavioral, and social factors all contribute. Blaming the person adds stigma and discourages treatment. |
| "Low serotonin is the proven cause." | Serotonin differences are a **possible** biological cause supported by correlational and treatment evidence, not a settled single cause. |

### Person-first language

Psychologists describe **a person with depression** or **a student who has major depressive disorder**, not "a depressive." The disorder is something a person has, not who the person is. AP free-response answers that use respectful, precise language also tend to be more accurate, because they keep the focus on symptoms and evidence rather than labels.

### Looking ahead

Part 2 adds the missing piece from this part: what changes when a person with depressive episodes has **also** had periods of mania or hypomania. Treatments for depression, including antidepressants and cognitive therapy, are covered in **Treatment and Therapy**.
      `
    },
    {
      id: 'mood-psychotic-disorders-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Explaining Depression** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher finds that college students who explain their bad grades as personal, permanent, and affecting every part of life report more depressive symptoms a semester later. Which explanation of depression does this finding most directly support?',
            options: [
              'A biological explanation based on reduced serotonin',
              'A cognitive explanation based on explanatory style',
              'A genetic explanation based on family history',
              'A behavioral explanation based on reinforcement'
            ],
            correctAnswer: 1,
            explanation: 'Explaining failures as internal, stable, and global is a pessimistic explanatory style, a cognitive factor. The study measured how students interpret events, not neurotransmitters, genes, or reinforcement.'
          },
          {
            question: 'A study reports a correlation between lower serotonin activity and more severe depressive symptoms. Which conclusion is justified by this finding alone?',
            options: [
              'Lower serotonin activity is the cause of the depressive symptoms',
              'Severe depressive symptoms cause serotonin activity to decrease',
              'Serotonin activity and symptom severity are related in this sample',
              'Raising serotonin activity will eliminate symptoms in this sample'
            ],
            correctAnswer: 2,
            explanation: 'A correlation shows that two variables are related, not which one causes the other or whether a third variable drives both. Claims about cause or about the effect of raising serotonin would require an experiment.'
          },
          {
            question: 'In some communities, people experiencing depression mainly report headaches, fatigue, and stomach problems to their doctors. Which point does this illustrate?',
            options: [
              'Depression is a purely biological illness with physical signs',
              'Cultural norms can shape how distress is expressed',
              'Physical complaints rule out a diagnosis of depression',
              'These patients have persistent depressive disorder instead'
            ],
            correctAnswer: 1,
            explanation: 'Cultural norms influence which symptoms people notice and report, so depression can be expressed mainly through physical complaints. That does not make it purely biological, and physical symptoms are part of the diagnostic criteria rather than a reason to rule it out.'
          }
        ]
      }
    }
  ]
}
