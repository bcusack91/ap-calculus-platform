export const psychDisordersPart2Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 2 of 7 — Classifying Disorders: DSM and ICD**

> 🔑 **Key Concept:** Diagnosing a psychological disorder requires **specialized training** and **evidence-based diagnostic tools**. Professionals classify disorders with two major systems: the **DSM**, developed by the **American Psychiatric Association**, and the **ICD**, developed by the **World Health Organization**. Both are **updated regularly** as research and practice advance.

### Why classify at all?

Part 1 showed that deciding whether a pattern is a disorder takes judgment. A classification system turns that judgment into something more consistent. It gives every clinician the same set of categories and the same descriptions of what each category looks like.

| Purpose | What the system makes possible |
|---|---|
| **Shared language** | A clinician in Ohio and one in Oregon mean the same thing by the same diagnosis |
| **Treatment planning** | A diagnosis points toward treatments that research has tested for that kind of problem |
| **Research** | Scientists can study groups of people who share a defined pattern and compare results across studies |
| **Prediction** | A diagnosis carries information about the likely course of the problem over time |
| **Insurance and services** | Health insurers and schools often require a formal diagnosis code before paying for treatment or providing accommodations |

### The two systems

| | **DSM** | **ICD** |
|---|---|---|
| **Full name** | *Diagnostic and Statistical Manual of Mental Disorders* | *International Classification of Diseases* |
| **Published by** | American **Psychiatric** Association (APA) | World Health Organization (WHO) |
| **Current edition** | DSM-5 (2013), revised text DSM-5-TR (2022) | ICD-11, in effect since January 2022 |
| **Scope** | Mental disorders only | All health conditions, with a chapter for mental, behavioral, and neurodevelopmental disorders |
| **Main users** | Clinicians and researchers, especially in the United States | Health systems worldwide |

The AP CED describes the WHO system as a classification of mental disorders; in practice the ICD covers all diseases, and its mental and behavioral chapter is what psychologists use.

> ⚠️ **Watch the acronym:** "APA" can mean the American **Psychiatric** Association or the American **Psychological** Association. The **DSM** comes from the **Psychiatric** Association.

### What the DSM does and does not do

The DSM is **descriptive**. For each disorder, it lists the observable symptoms and patterns that must be present, how long they must last, and what must be ruled out. It does **not** commit to one theory of cause. A behavioral psychologist and a biological psychiatrist can both use it, because it describes *what* the pattern looks like rather than *why* it happens. (The causes are the subject of Part 3.)
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — The Classification Systems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A news article states that "the American Psychological Association publishes the DSM." What correction should be made?',
            options: [
              'It should name the American Psychiatric Association',
              'It should name the World Health Organization',
              'It should name the National Institute of Mental Health',
              'It should name the American Psychoanalytic Association'
            ],
            correctAnswer: 0,
            explanation: 'The DSM is developed by the American Psychiatric Association; the shared acronym APA causes this common mix-up. The World Health Organization publishes the ICD, the National Institute of Mental Health funds research, and the American Psychoanalytic Association is a professional group for psychoanalysts, not the publisher of the DSM.'
          },
          {
            question: 'A behaviorist and a biological psychiatrist disagree about what causes a client\'s symptoms, yet both reach the same DSM diagnosis. How is this possible?',
            options: [
              'The DSM assigns one official cause to each disorder',
              'The DSM describes disorders by their observable symptoms',
              'The DSM requires agreement on what caused the symptoms',
              'The DSM is based entirely on brain-imaging results'
            ],
            correctAnswer: 1,
            explanation: 'The DSM classifies disorders by observable symptoms and does not commit to one causal theory, so clinicians from different perspectives can apply it the same way. It does not assign causes, require agreement on causes, or rely on brain scans.'
          },
          {
            question: 'A researcher in Brazil and a researcher in Japan want to compare rates of the same disorder using one international system. Which system are they most likely to use?',
            options: [
              'The ICD, published by the World Health Organization',
              'The ICD, published by the American Psychiatric Association',
              'The ICD, published by the National Institute of Mental Health',
              'The DSM, published by the World Health Organization'
            ],
            correctAnswer: 0,
            explanation: 'The ICD is the World Health Organization\'s classification and is used by health systems worldwide, which makes it the natural choice for international comparisons. The ICD is not published by the American Psychiatric Association or the National Institute of Mental Health, and the DSM is not a World Health Organization manual.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s3-training',
      type: 'text' as const,
      content: `
## 🩺 Diagnosis Requires Training and Evidence-Based Tools

A diagnostic manual is not a do-it-yourself checklist. The CED states that diagnosing psychological disorders **requires specialized training and the use of evidence-based diagnostic tools**.

### Who diagnoses?

Licensed professionals with years of supervised training, such as **clinical psychologists**, **psychiatrists** (medical doctors who specialize in mental health), and some licensed clinical social workers and counselors, depending on the state. Their training covers how symptoms present across ages and cultures, how to tell similar patterns apart, and how to rule out medical causes.

### Evidence-based tools

| Tool | What it is | Why it helps |
|---|---|---|
| **Structured clinical interview** | A standardized set of questions asked in the same order with rules for scoring answers | Different clinicians gather the same information, so they are more likely to agree |
| **Standardized questionnaires and rating scales** | Tests with published norms that measure symptom severity | Scores can be compared to large reference groups |
| **Behavioral observation** | Watching how the person acts, speaks, and responds | Adds information the person may not report |
| **Medical evaluation** | Physical exam and lab tests | Rules out physical causes, such as a thyroid problem or a medication side effect, that can mimic psychological symptoms |
| **History from others** | Information from family members or teachers, with permission | Shows how long the pattern has lasted and how it affects daily life |

### Why not diagnose yourself (or your friends)?

Online quizzes and social-media checklists are not evidence-based diagnostic tools. They have no clinical interview, no comparison with norms, and no way to rule out other explanations. Casual labels ("my roommate is so bipolar") also blur the difference between a passing mood and a clinically significant pattern.

## 📐 Reliability and Validity of Diagnosis

Two research-methods terms apply directly to diagnosis.

| Term | Meaning for diagnosis | Example question it answers |
|---|---|---|
| **Reliability** | **Consistency**: different clinicians, using the same system with the same person, reach the same diagnosis (inter-rater reliability) | "If three psychologists interview this client separately, do they agree?" |
| **Validity** | **Accuracy**: the diagnosis captures a real, distinct pattern and predicts useful things, such as the course of the problem or response to treatment | "Does this category actually tell us something true about people who receive it?" |

Structured interviews and clear symptom descriptions mainly raise **reliability**. A system can be reliable without being valid: clinicians could all agree on a category that does not reflect a real, distinct pattern. Research that follows diagnosed people over time is what tests **validity**.

> 🔑 **AP Connection:** Expect reliability-versus-validity questions framed around diagnosis. *Agreement among clinicians* means reliability. *Whether the label is accurate or meaningful* means validity.
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
**Recall the Terms** ✍️

Type the standard term for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'When two clinicians interview the same client separately and arrive at the same diagnosis, the diagnosis shows high inter-rater _____.',
            answer: 'reliability',
            acceptableAnswers: ['inter-rater reliability', 'interrater reliability'],
            explanation: 'Reliability is consistency. Agreement between independent clinicians is inter-rater reliability.'
          },
          {
            question: 'The classification system published by the World Health Organization is abbreviated _____.',
            answer: 'ICD',
            acceptableAnswers: ['ICD-11', 'the ICD', 'ICD 11'],
            explanation: 'The International Classification of Diseases (ICD) is maintained by the World Health Organization; its current edition is ICD-11.'
          },
          {
            question: 'The extent to which a diagnostic category accurately captures a real, distinct pattern and predicts its course is called _____.',
            answer: 'validity',
            acceptableAnswers: ['diagnostic validity'],
            explanation: 'Validity is accuracy: whether the category measures what it claims to and tells us something true about the people who receive it.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s5-revision',
      type: 'text' as const,
      content: `
## 🔄 Classification Systems Are Updated Regularly

The CED emphasizes that the DSM and ICD are **updated regularly to be responsive to new research and practice advances**. The first DSM appeared in 1952; the current DSM-5 was published in 2013, and a text revision (DSM-5-TR) followed in 2022. The ICD moved to its eleventh edition in 2022.

### Why classifications change

| Reason for change | What it looks like |
|---|---|
| **New research** | Studies show that two categories are really one pattern, or that one category contains two different patterns, so categories are merged or split |
| **Better tools** | Clearer symptom descriptions are written to raise reliability between clinicians |
| **Practice advances** | Clinicians report that a category is too narrow or too broad in real settings |
| **Changing social understanding** | Research and shifting norms show that a "disorder" was really a judgment about social deviance, as when homosexuality was removed as a diagnosis in **1973** |

### Worked Example: Reading a revision

**Situation.** Suppose a future edition of a diagnostic manual narrows a category so that a pattern must last six months instead of two weeks before it is diagnosed.

**Step 1 — Predict the effect on numbers.** Fewer people will meet the description, so the number of people diagnosed will **fall**, even though nobody's behavior changed.

**Step 2 — Predict the effect on research.** Studies using the old and new descriptions are not directly comparable, because they define the group differently.

**Step 3 — State the lesson.** A rise or fall in the number of diagnoses can reflect **changes in definitions**, not only changes in how many people are struggling. When a news story reports that diagnoses of some disorder have "skyrocketed," one question to ask is whether the definition or the screening changed.

> 🔑 **AP Connection:** If a question asks why diagnostic manuals are revised, the CED-aligned answer is that they respond to **new research and practice advances**. Revisions are a sign that the systems are scientific and self-correcting, not a sign that diagnosis is arbitrary.
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Diagnosis in Practice** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A clinic trains all its psychologists to use the same structured interview. Afterward, separate psychologists who interview the same client agree on the diagnosis far more often than before. What has most clearly improved?',
            options: [
              'The validity of the diagnoses',
              'The causes identified for each disorder',
              'The number of clients who seek treatment',
              'The reliability of the diagnoses'
            ],
            correctAnswer: 3,
            explanation: 'More agreement between independent clinicians means greater reliability. Agreement alone does not prove that the categories are accurate, which is validity, and the scenario says nothing about causes or how many clients seek care.'
          },
          {
            question: 'A teenager takes a social-media quiz, scores high, and announces that she has a psychological disorder. According to the CED, what is the main problem with this conclusion?',
            options: [
              'Teenagers cannot be diagnosed with psychological disorders',
              'Only brain scans can confirm whether a disorder is present',
              'Diagnosis requires a trained professional using evidence-based tools',
              'A quiz can only identify disorders listed in the ICD, not the DSM'
            ],
            correctAnswer: 2,
            explanation: 'The CED states that diagnosis requires specialized training and evidence-based diagnostic tools, which an online quiz lacks. Teenagers can be diagnosed, brain scans do not confirm most diagnoses, and the DSM and ICD distinction is irrelevant to the quiz.'
          },
          {
            question: 'After a diagnostic manual broadens the description of a disorder, the number of people diagnosed rises sharply within a few years. Which conclusion is best supported?',
            options: [
              'The disorder has become much more common in the population',
              'Part of the rise may reflect the changed definition itself',
              'The earlier version of the manual was invalid and unreliable',
              'Clinicians began diagnosing the disorder without any training'
            ],
            correctAnswer: 1,
            explanation: 'When a definition widens, more people meet it even if behavior has not changed, so the rise may partly reflect the new definition. The data alone cannot show that the disorder truly became more common, that the old version was invalid, or that clinicians lacked training.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s7-next',
      type: 'text' as const,
      content: `
### 🎯 Putting It Together

- The **DSM** (American **Psychiatric** Association; DSM-5-TR, 2022) and the **ICD** (World Health Organization; ICD-11, 2022) classify disorders.
- Classification gives a **shared language** for treatment planning, research, prediction, and access to services.
- The DSM is **descriptive**: it lists symptoms and patterns without committing to one cause.
- Diagnosis requires **specialized training** and **evidence-based tools** such as structured interviews, standardized scales, observation, and medical evaluation.
- **Reliability** = agreement among clinicians; **validity** = accuracy and meaning of the category.
- Both systems are **updated regularly** in response to research and practice.

**Next up — Part 3:** The DSM describes *what* a disorder looks like. The seven psychological perspectives each offer a different answer to *why* disorders develop.
      `
    }
  ]
}
