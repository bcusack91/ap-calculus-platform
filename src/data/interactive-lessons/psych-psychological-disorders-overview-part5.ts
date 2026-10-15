export const psychDisordersPart5Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 5 of 7 — Labels, Stigma, and Bias in Diagnosis**

> 🔑 **Key Concept:** Diagnosing or classifying a psychological disorder has **positive and negative consequences**. Which consequences dominate depends on **the nature of the disorder**, **the individual being diagnosed**, and the presence of **cultural and societal norms, stigma, racism, sexism, ageism, and discrimination**.

## ✅ Positive Consequences of a Diagnosis

| Consequence | What it looks like |
|---|---|
| **Access to treatment** | A diagnosis points clinicians toward approaches that research has tested for that pattern |
| **Access to services and coverage** | Insurance, school accommodations (such as extra test time), and workplace accommodations often require a formal diagnosis |
| **Relief and understanding** | Many people feel relief when a confusing, painful experience has a name and is shared by others: "I'm not weak; this is a recognized condition" |
| **Communication** | Clinicians, families, and the person can talk about the problem in shared terms |
| **Community and research** | People can find support groups, and researchers can study and improve care for a defined group |

## ❌ Negative Consequences of a Diagnosis

| Consequence | What it looks like |
|---|---|
| **Stigma** | Negative attitudes and stereotypes attached to a label, such as the belief that people with a disorder are dangerous, weak, or incapable |
| **Discrimination** | Unfair treatment in hiring, housing, school, or relationships because of a label |
| **Self-fulfilling expectations** | Others, and the person, may expect less, interpret ordinary behavior as "symptoms," and act in ways that make the expected outcome more likely |
| **Identity overshadowing** | The label can come to define the whole person ("a schizophrenic") instead of one part of a life ("a person with schizophrenia") |
| **Misdiagnosis** | A wrong label can lead to the wrong help and can follow a person in records for years |

### Depends on the disorder and the person

The CED's wording, *depending on the nature of the disorder, the individual being diagnosed*, is important:

- **Nature of the disorder:** Some diagnoses carry far more public stigma than others. A label that the public associates (wrongly) with violence tends to produce more fear and avoidance than one the public sees as common and understandable.
- **The individual:** The same label can open doors for one person (a student who gains accommodations and support) and close them for another (a worker who fears losing a job if a manager finds out). Age, gender, race, income, and community all shape what a diagnosis means for a specific person.
      `
    },
    {
      id: 'psychological-disorders-overview-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Consequences of Diagnosis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After years of struggling in school, a student receives a diagnosis, is given extra time on tests, and says she finally understands why reading has been so hard. Which consequences of diagnosis does this example show?',
            options: [
              'Stigma and discrimination',
              'Self-fulfilling expectations and overshadowing',
              'Access to services and relief from self-blame',
              'Misdiagnosis and loss of opportunities'
            ],
            correctAnswer: 2,
            explanation: 'Extra test time is a service that required a diagnosis, and understanding why reading was hard reflects relief and reduced self-blame. Nothing in the scenario shows stigma, lowered expectations, or a wrong label.'
          },
          {
            question: 'A worker with a mental health diagnosis is qualified for a promotion, but his manager passes him over, saying he "might not handle the pressure." Which negative consequence of diagnosis does this illustrate most directly?',
            options: [
              'Discrimination',
              'Misdiagnosis',
              'Self-stigma',
              'Dysfunction'
            ],
            correctAnswer: 0,
            explanation: 'Treating a qualified person unfairly because of a label is discrimination, driven by a stigmatizing stereotype. Nothing suggests the diagnosis is wrong, the worker has not applied the stereotype to himself, and dysfunction refers to the person\'s own impaired functioning.'
          },
          {
            question: 'Why does the CED say the consequences of diagnosis depend on "the nature of the disorder"?',
            options: [
              'Some disorders do not require a trained clinician to diagnose them',
              'Only some disorders are listed in both the DSM and the ICD manuals',
              'Some disorders are caused by genes and others by stressful events',
              'Public stigma toward some disorders is far stronger than toward others'
            ],
            correctAnswer: 3,
            explanation: 'Different disorders carry different levels of public stigma, so the same act of labeling can lead to very different reactions. All diagnoses require trained clinicians, overlap between manuals is not the point, and most disorders involve both genes and stress.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p5-s3-stigma',
      type: 'text' as const,
      content: `
## 🏷️ Three Levels of Stigma

| Level | Definition | Example |
|---|---|---|
| **Public stigma** | Negative stereotypes and prejudice held by the general public | Neighbors assume a person with a disorder is unpredictable and avoid him |
| **Self-stigma** | A person applies the public stereotype to himself or herself | "I have a disorder, so I'll never succeed; why bother applying to college?" |
| **Structural stigma** | Laws, policies, and institutional practices that disadvantage people with disorders | A job application that asks about any past mental health treatment, or insurance that covers physical illness better than mental illness |

**Why stigma matters:** stigma discourages people from **seeking help**. A person who fears being labeled may avoid treatment until a problem becomes severe. Self-stigma also lowers hope and effort, which can worsen outcomes.

### The violence myth

The most damaging stereotype is that people with psychological disorders are violent. Research consistently finds that **people with serious mental illness are more likely to be victims of violence than perpetrators**. Media portrayals that link mental illness with violence strengthen public stigma.

## ⚖️ Bias in Diagnosis

The CED names **cultural and societal norms, racism, sexism, ageism, and discrimination** as forces that shape the consequences of diagnosis. They can also shape **who receives which diagnosis** in the first place.

| Source of bias | How it can distort diagnosis | Example |
|---|---|---|
| **Cultural and societal norms** | A clinician judges behavior against the norms of his or her own culture rather than the client's | A recent immigrant's religious practices or ways of describing distress are misread as symptoms |
| **Racism** | Stereotypes about racial groups change how clinicians interpret the same symptoms | U.S. studies have found that Black patients are more likely than white patients with similar symptoms to receive a diagnosis of a psychotic disorder, and less likely to receive a mood disorder diagnosis |
| **Sexism** | Gender stereotypes lead clinicians to over- or under-recognize symptoms depending on whether they fit expectations for that gender | For centuries, "hysteria," named after the Greek word for uterus, was a diagnosis applied mostly to women's emotional distress; today, men's distress may be overlooked when it shows up as anger or substance use rather than sadness |
| **Ageism** | Symptoms in older adults are dismissed as "just getting old," or older adults are assumed to be confused | Persistent sadness or withdrawal in a 75-year-old is attributed to normal aging and never evaluated |
| **Discrimination** | Unequal access to clinicians, insurance, and culturally informed care | Communities with fewer clinicians or less coverage are diagnosed later, when problems are more severe |

Bias works in **both directions**: it can produce **overdiagnosis** (labeling normal or culturally expected behavior as a disorder) and **underdiagnosis** (missing a real, impairing pattern).

### Discrimination as a stressor

Experiences of racism, sexism, and other discrimination are themselves **stressful life experiences**. In the diathesis-stress model from Part 4, they add to the "stress" side, which helps explain why groups that face more discrimination can face higher risk for some disorders.
      `
    },
    {
      id: 'psychological-disorders-overview-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Bias or Stigma** 🔎

Choose the term that best fits each situation.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A doctor tells an 80-year-old woman that her months of hopelessness are "normal at your age" and does not evaluate further. This reflects _____.',
            options: ['ageism', 'sexism', 'self-stigma', 'structural stigma']
          },
          {
            label: 'After his diagnosis, a college student decides he is "too broken" to apply for internships. This reflects _____.',
            options: ['public stigma', 'self-stigma', 'structural stigma', 'ageism']
          },
          {
            label: 'A state law allows employers to reject applicants who have ever received mental health treatment. This reflects _____.',
            options: ['self-stigma', 'public stigma', 'ageism', 'structural stigma']
          }
        ],
        correctAnswers: ['ageism', 'self-stigma', 'structural stigma'],
        hint1: 'Ask who holds the negative belief: a clinician about an age group, the person about himself, or an institution.',
        hint2: 'Applying a stereotype to oneself is a different level of stigma from the public\'s attitudes.',
        hint3: 'A law or policy is built into institutions, not just individual attitudes.',
        explanation: 'Dismissing an older adult\'s symptoms as normal aging is ageism. Turning a stereotype on oneself is self-stigma. A law that disadvantages people with past treatment is structural stigma.'
      }
    },
    {
      id: 'psychological-disorders-overview-p5-s5-misconceptions',
      type: 'text' as const,
      content: `
## 🚫 Common Misconceptions About Psychological Disorders

| Misconception | What the evidence shows |
|---|---|
| "People with mental illness are usually violent." | Most are not violent, and people with serious mental illness are more likely to be **victims** of violence than perpetrators. |
| "A disorder is a sign of weak character." | Disorders arise from interacting biological, psychological, and sociocultural factors (Part 4), not from a lack of willpower. |
| "Normal and abnormal are two separate boxes." | Mental health lies on a **continuum** (Part 1). |
| "A diagnosis explains the cause." | The DSM is **descriptive**; it names a pattern without committing to one cause (Part 2). |
| "Once diagnosed, always diagnosed." | Many people improve or recover, and a person can meet criteria in one period of life and not in another. |
| "Disorders are rare." | Roughly one in five U.S. adults experiences a mental illness in a given year. |
| "Unusual behavior means disorder." | Deviation alone is not enough; dysfunction and distress also matter (Part 1). |

## 🔍 Worked Example: Weighing a Diagnosis for One Person

**Case (hypothetical).** Lena, 16, has had months of panic-like episodes that make her leave class. Her school offers a quiet testing room and counseling support, but only with a formal diagnosis. Lena worries that classmates will find out and treat her differently.

**Step 1 — List likely benefits.** Access to the testing room and counseling; a clearer understanding of what is happening; a path toward evidence-based help.

**Step 2 — List likely costs.** Possible public stigma from peers; risk of self-stigma if she starts to see herself as "broken"; a record in her school file.

**Step 3 — Identify what shapes the balance.** The **nature of the disorder** (how much stigma peers attach to it), the **individual** (Lena's age, school climate, family support), and **societal norms** (how her community views mental health).

**Step 4 — Conclude.** For Lena, benefits are likely to outweigh costs if confidentiality is protected and the school climate is supportive. A different person in a different setting might weigh it differently, which is exactly the CED's point.

> 🔑 **AP Connection:** A question on the consequences of diagnosis almost always rewards a **two-sided** answer: name a specific benefit **and** a specific cost, then tie the balance to the person and the setting described.
      `
    },
    {
      id: 'psychological-disorders-overview-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Bias and Stigma** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A clinician unfamiliar with a client\'s culture interprets the client\'s description of speaking with ancestors during prayer as a sign of a severe disorder. Which source of bias does this most directly illustrate?',
            options: [
              'Ageism in how symptoms are interpreted',
              'Misjudging deviation from norms',
              'Sexism in how symptoms are recognized',
              'Self-stigma held by the person seeking help'
            ],
            correctAnswer: 1,
            explanation: 'The clinician judged a culturally expected practice by the norms of his or her own culture, so normal behavior was misread as deviance. Nothing in the scenario involves age, gender, or the client\'s view of himself or herself.'
          },
          {
            question: 'A survey finds that many people who meet criteria for a disorder never seek help, and the most common reason they give is fear of what others would think. Which conclusion is best supported?',
            options: [
              'Most people who meet criteria do not need professional help',
              'Diagnostic manuals list too many disorders to be useful',
              'Fear of others is itself a symptom of every disorder',
              'Stigma can keep people from getting treatment'
            ],
            correctAnswer: 3,
            explanation: 'Fear of others\' judgments is public stigma working as a barrier to care. The survey does not show that people lack need, that manuals are too broad, or that fear is a symptom of every disorder.'
          },
          {
            question: 'Which statement about people with serious mental illness is best supported by research?',
            options: [
              'They are more likely to commit violence than to be its victims',
              'They are equally likely to be victims of violence and perpetrators',
              'They are more likely to be victims of violence than perpetrators',
              'They are rarely involved in violence as either victims or perpetrators'
            ],
            correctAnswer: 2,
            explanation: 'Research consistently finds that people with serious mental illness are more likely to be victims of violence than perpetrators. The belief that they are usually violent is a stigmatizing myth reinforced by media portrayals.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p5-s7-next',
      type: 'text' as const,
      content: `
### 🎯 Putting It Together

- Diagnosis has **positive** consequences (treatment, services, relief, communication) and **negative** ones (stigma, discrimination, lowered expectations, misdiagnosis).
- The balance depends on the **nature of the disorder**, the **individual**, and **cultural/societal norms, stigma, racism, sexism, ageism, and discrimination**.
- Stigma operates at **public**, **self**, and **structural** levels and discourages help-seeking.
- Bias can cause both **overdiagnosis** and **underdiagnosis**.

**Next up — Part 6:** AP free-response practice. An Article Analysis Question built on a practice study of stigma, and an Evidence-Based Question on interaction models.
      `
    }
  ]
}
