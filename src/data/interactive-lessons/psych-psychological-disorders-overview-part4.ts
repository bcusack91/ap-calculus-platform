export const psychDisordersPart4Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 4 of 7 — Interaction Models and Data**

> 🔑 **Key Concept:** Two **interaction models** explain disorders as the product of several causes working together. The **biopsychosocial model** assumes any psychological problem potentially involves a combination of **biological, psychological, and sociocultural** factors. The **diathesis-stress model** assumes disorders develop from a **genetic vulnerability (diathesis)** combined with **stressful life experiences (stress)**.

## 🧬 The Biopsychosocial Model

Part 3 showed seven perspectives, each with its own kind of cause. The biopsychosocial model groups those causes into three families and assumes that any psychological problem **potentially involves all three**.

| Factor family | What belongs here | Examples of risk factors | Examples of protective factors |
|---|---|---|---|
| **Biological** | Genes, brain structure and chemistry, hormones, physical health | Family history of a disorder, chronic illness, poor sleep | Good physical health, regular sleep |
| **Psychological** | Thoughts, beliefs, emotions, learning history, coping skills | Self-critical thinking, avoidance habits, early trauma | Flexible thinking, problem-solving skills |
| **Sociocultural** | Relationships, family, community, culture, economic conditions | Isolation, poverty, discrimination, family conflict | Close friendships, community belonging, stable income |

The perspectives from Part 3 map onto these families:

- **Biological** perspective → biological factors (and the **evolutionary** perspective links to biology through inherited tendencies).
- **Behavioral, cognitive, psychodynamic, humanistic** perspectives → psychological factors.
- **Sociocultural** perspective → sociocultural factors.

### Why "potentially"

The CED's wording matters. The model does not claim that every disorder has an equal share of each factor; it claims that a full explanation should **check all three**. For one person, biology may weigh most; for another, social circumstances may.

## ⚖️ The Diathesis-Stress Model

The diathesis-stress model zooms in on one specific interaction:

- **Diathesis:** a **genetic vulnerability**, a predisposition that raises risk but does not guarantee a disorder.
- **Stress:** **stressful life experiences**, such as loss, trauma, illness, conflict, or financial hardship.

A disorder is most likely to develop when **both** are present. A person with a strong vulnerability may never develop a disorder if life stays relatively calm; a person with little vulnerability may stay healthy through considerable stress. The two together are more than the sum of their parts.

> 🔑 **AP Connection:** The biopsychosocial model is **broad** (three families of factors). The diathesis-stress model is **specific** (genetic vulnerability × stressful experience). If a question mentions a predisposition that shows up only after a stressful event, think **diathesis-stress**.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — The Two Models** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Identical twins share a family history of a disorder. One twin develops it after a series of severe losses; the other, whose life has been calmer, does not. Which model best explains this pattern?',
            options: [
              'Diathesis-stress',
              'The humanistic model',
              'The medical model',
              'Eclectic diagnosis'
            ],
            correctAnswer: 0,
            explanation: 'Both twins share the genetic vulnerability, but only the one who also faced severe stress developed the disorder, which is the core prediction of the diathesis-stress model. The other labels do not describe a vulnerability combined with stressful experience.'
          },
          {
            question: 'A clinician lists a client\'s risk factors as a parent with the same disorder, a habit of catastrophic thinking, and recent eviction from her apartment. In the biopsychosocial model, how are these three factors classified, in order?',
            options: [
              'Psychological, biological, sociocultural',
              'Biological, psychological, sociocultural',
              'Biological, sociocultural, psychological',
              'Sociocultural, psychological, biological'
            ],
            correctAnswer: 1,
            explanation: 'A parent with the disorder points to inherited, biological risk; catastrophic thinking is psychological; eviction is a sociocultural and economic stressor. Each other ordering assigns at least one factor to the wrong family.'
          },
          {
            question: 'In the diathesis-stress model, what does "diathesis" refer to?',
            options: [
              'A genetic vulnerability',
              'A stressful life event',
              'A maladaptive belief about the self',
              'A diagnosis that a clinician assigns'
            ],
            correctAnswer: 0,
            explanation: 'The CED defines the diathesis as a genetic vulnerability. The stressful life experience is the "stress" half of the model, and beliefs and diagnoses are not part of the definition.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s3-data',
      type: 'text' as const,
      content: `
## 📊 Reading Interaction Data

**A practice study (hypothetical).** Researchers followed 1,000 young adults for five years. At the start, they recorded whether each person had a **family history** of a particular disorder (a rough indicator of genetic vulnerability). Over the five years, they counted **major stressful life events** for each person. The table shows the **percentage of each group** that developed the disorder.

| | **Low stress** (0–1 major events) | **High stress** (3 or more major events) |
|---|---|---|
| **No family history** | 4% | 7% |
| **Family history** | 6% | 24% |

### Worked Example: Interpreting the table

**Step 1 — Compare across stress, within each row.**
- No family history: 4% → 7%, a rise of **3 percentage points**.
- Family history: 6% → 24%, a rise of **18 percentage points**.

**Step 2 — Compare down each column.**
- Low stress: 4% vs 6%, a difference of **2 points**.
- High stress: 7% vs 24%, a difference of **17 points**.

**Step 3 — Identify the pattern.** Stress raises risk in both rows, but it raises risk **six times as much** (18 vs 3 points) for people with a family history. When the effect of one variable **depends on the level of the other**, the variables show an **interaction**. This is exactly what the diathesis-stress model predicts.

**Step 4 — Contrast with main effects only.** If vulnerability and stress simply **added** separate effects, the high-stress, family-history cell would be about 4 + 3 + 2 = **9%**. The observed 24% is far higher, so the factors **multiply** each other's impact rather than just adding.

### Turning percentages into people

If 200 people in the study had a family history and high stress, then 24% of 200 = **48 people** developed the disorder, and 152 did not. Note that most people in even the highest-risk cell **did not** develop the disorder. A vulnerability raises risk; it is not destiny.

### Comparing risks as a ratio

Within the family-history row, the high-stress rate (24%) is **4 times** the low-stress rate (6%). Ratios like this are a common way to report how much a factor multiplies risk.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate from the Practice Table** ✍️

Use the table above (No family history: 4% low stress, 7% high stress; Family history: 6% low stress, 24% high stress). Enter numbers only.
      `,
      exercise: {
        questions: [
          {
            question: 'Among people with NO family history, by how many percentage points does high stress raise the rate of the disorder compared with low stress?',
            answer: '3',
            acceptableAnswers: ['3%', '3 points', 'three'],
            explanation: '7% minus 4% is 3 percentage points.'
          },
          {
            question: 'Suppose 300 people had no family history and high stress. How many of them would you expect to develop the disorder?',
            answer: '21',
            acceptableAnswers: ['21 people', 'twenty-one'],
            explanation: '7% of 300 is 0.07 × 300 = 21 people.'
          },
          {
            question: 'Among people under HIGH stress, how many times greater is the rate for those with a family history than for those without? Round to one decimal place.',
            answer: '3.4',
            acceptableAnswers: ['3.4 times', '3.43', '3.4x'],
            explanation: '24% divided by 7% is about 3.43, which rounds to 3.4.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s5-cautions',
      type: 'text' as const,
      content: `
## ⚠️ Cautions When Reading Interaction Data

### 1. Correlation is not causation

In the practice study, the researchers **measured** stress; they did not **assign** it. That makes this a **correlational** (longitudinal) study, so the results show an association, not proof that stress causes the disorder. Two alternative explanations must be considered:

| Problem | How it could explain the data |
|---|---|
| **Reverse causation** | Early, mild symptoms of the disorder could cause stressful events, for example by leading to conflict with friends or job loss, rather than the other way around |
| **Third variable** | A factor such as poverty could raise both the number of stressful events and the risk of the disorder |

Researchers cannot ethically assign people to experience major life stress, so studies of the diathesis-stress model are almost always correlational. Their conclusions are strengthened by measuring stress **before** symptoms begin and by controlling for third variables.

### 2. Family history is not purely genetic

Families share **environments** as well as genes: the same household, neighborhood, income, and habits. A family history raises the possibility of a genetic vulnerability, but twin and adoption studies are needed to separate genetic from environmental influences.

### 3. Percentages describe groups, not individuals

A 24% rate in a group does not mean each person in it has "a 24% chance" fixed at birth. It describes how often the outcome occurred in that group under those conditions.

## 🔍 Worked Example: Applying the Biopsychosocial Model to a Case

**Case (hypothetical).** Ana, 30, has a parent who was treated for long periods of intense anxiety. Ana tends to assume the worst ("If my boss is quiet, I'm about to be fired"). Last year, she moved to care for an ill relative, left her friends behind, and took on large medical bills.

| Factor family | Ana's factors |
|---|---|
| Biological | Parent with a similar pattern (possible genetic vulnerability) |
| Psychological | Habit of assuming the worst, a maladaptive thinking pattern |
| Sociocultural | Loss of friendships, caregiving role, financial strain |

**Diathesis-stress reading:** the parent's history suggests a **diathesis**; the move, caregiving, and debt are the **stress**. The model predicts that risk rose sharply when the stress arrived on top of the vulnerability.

**Biopsychosocial reading:** all three families are involved, so a complete explanation, and a complete plan for help, should address all three.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Interpreting the Evidence** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice study, the rate of the disorder rose 18 points with high stress for people with a family history but only 3 points for people without one. What does this difference indicate?',
            options: [
              'Stress has no effect on people without a family history',
              'Family history matters more than stress in every case',
              'High stress is the sole cause of the disorder in this study',
              'The effect of stress depends on vulnerability'
            ],
            correctAnswer: 3,
            explanation: 'Stress raised risk much more for people with a family history, so the effect of one variable depends on the level of the other, which is an interaction. Stress still raised risk without a family history, and the data cannot show a single cause.'
          },
          {
            question: 'A critic says the practice study cannot show that stressful events cause the disorder. Which point best supports the critic?',
            options: [
              'The sample of 1,000 young adults is too small for any conclusion',
              'Percentages cannot be compared between groups of different sizes',
              'The researchers measured stress rather than assigning it',
              'The diathesis-stress model applies only to experiments on animals'
            ],
            correctAnswer: 2,
            explanation: 'Because stress was measured rather than manipulated, the study is correlational, and reverse causation or third variables could explain the link. A sample of 1,000 is reasonably large, percentages are designed for comparing groups of different sizes, and the model is studied mainly in humans.'
          },
          {
            question: 'Which finding would most directly challenge the diathesis-stress model?',
            options: [
              'People with a family history often develop the disorder after major losses',
              'Stress raises risk equally whether or not a person has a genetic vulnerability',
              'Some people with a family history never develop the disorder at all',
              'People with little vulnerability usually stay healthy through moderate stress'
            ],
            correctAnswer: 1,
            explanation: 'The model predicts that stress and vulnerability interact, so equal effects of stress regardless of vulnerability would contradict it. The other findings are consistent with the model, which expects vulnerable people to stay healthy when stress is low.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s7-next',
      type: 'text' as const,
      content: `
### 🎯 Putting It Together

- **Biopsychosocial model:** any psychological problem potentially involves **biological, psychological, and sociocultural** factors.
- **Diathesis-stress model:** a **genetic vulnerability** combined with **stressful life experiences** produces disorders.
- In data, look for an **interaction**: the effect of stress is larger for people with a vulnerability.
- Diathesis-stress studies are usually **correlational**, so watch for **reverse causation** and **third variables**.

**Next up — Part 5:** A diagnosis can open doors to help, but labels also carry stigma, and bias can shape who receives which diagnosis.
      `
    }
  ]
}
