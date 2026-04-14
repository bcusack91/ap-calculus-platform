export const bioEndocrineSystemPart5Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end5-intro',
      type: 'text' as const,
      content: `
# ⚡ Adrenal & Pancreatic Hormones

The **adrenal glands** and **pancreas** produce hormones critical for stress response and energy metabolism. Understanding **cortisol/epinephrine** (stress) and **insulin/glucagon** (blood glucose) is essential for AP Biology — these represent some of the most commonly tested hormone systems.

### What You'll Learn
- Adrenal cortex (cortisol) vs. adrenal medulla (epinephrine) in stress
- Insulin and glucagon as antagonistic hormones
- Blood glucose regulation and homeostasis
- Type 1 vs. Type 2 diabetes
      `
    },
    {
      id: 'end5-adrenal',
      type: 'text' as const,
      content: `
## The Adrenal Glands: Stress Response

Each adrenal gland sits atop a kidney and has two functionally distinct regions:

### Adrenal Medulla (Inner)
| Feature | Detail |
|---------|--------|
| **Hormones** | Epinephrine (adrenaline), Norepinephrine |
| **Type** | Amino acid-derived (water-soluble) |
| **Trigger** | Sympathetic nervous system activation |
| **Response speed** | Immediate (seconds) |
| **Duration** | Short-lived (minutes) |

**Fight-or-flight effects of epinephrine:**
- Increases heart rate and blood pressure
- Dilates airways (bronchodilation)
- Redirects blood flow to skeletal muscles
- Stimulates glycogen breakdown → raises blood glucose
- Inhibits digestion and immune activity
- Dilates pupils

### Adrenal Cortex (Outer)
| Feature | Detail |
|---------|--------|
| **Hormones** | Cortisol, Aldosterone |
| **Type** | Steroid (lipid-soluble, from cholesterol) |
| **Trigger** | ACTH from anterior pituitary |
| **Response speed** | Slower (minutes to hours) |
| **Duration** | Long-lasting |

**Cortisol (the "stress hormone"):**
- Promotes gluconeogenesis (making glucose from amino acids/fats)
- Suppresses the immune system and inflammatory responses
- Breaks down proteins and fats for energy
- Raises blood glucose during prolonged stress
- Regulated by the **HPA axis**: CRH → ACTH → Cortisol → negative feedback

**Aldosterone:**
- Stimulates sodium reabsorption in the kidney
- Water follows sodium → increases blood volume and blood pressure
- Part of the renin-angiotensin-aldosterone system (RAAS)

> 🔑 **AP Distinction:** Epinephrine = fast, short-term "fight-or-flight." Cortisol = slower, longer-term adaptation to chronic stress. Both raise blood glucose, but through different mechanisms.
      `
    },
    {
      id: 'end5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student is startled by a loud noise. Which hormone would be released FIRST?',
            options: [
              'Cortisol — because it is the primary stress hormone',
              'Aldosterone — because blood pressure needs to increase',
              'Epinephrine — because the sympathetic nervous system activates the adrenal medulla',
              'TSH — because metabolism must increase during stress'
            ],
            correctAnswer: 2,
            explanation: 'Epinephrine is released within seconds by the adrenal medulla in response to sympathetic nervous system activation. Cortisol takes minutes to hours because it requires ACTH from the pituitary and involves gene expression changes (steroid hormone). Aldosterone and TSH are not primary acute stress hormones.'
          },
          {
            question: 'How does cortisol help the body during prolonged stress?',
            options: [
              'It rapidly increases heart rate through neural signaling',
              'It promotes gluconeogenesis and protein breakdown to maintain blood glucose',
              'It directly activates skeletal muscle contraction',
              'It stimulates the immune system to fight potential infections'
            ],
            correctAnswer: 1,
            explanation: 'Cortisol promotes gluconeogenesis (making glucose from non-carbohydrate sources) and breaks down proteins and fats, ensuring that blood glucose remains available during prolonged stress. Cortisol actually suppresses (not stimulates) the immune system.'
          }
        ]
      }
    },
    {
      id: 'end5-pancreas',
      type: 'text' as const,
      content: `
## The Pancreas: Blood Glucose Regulation

The pancreas is both an **exocrine** gland (digestive enzymes) and an **endocrine** gland. The endocrine portion consists of clusters of cells called **islets of Langerhans**, which produce two antagonistic hormones:

### Insulin vs. Glucagon
| Feature | Insulin | Glucagon |
|---------|---------|---------|
| **Produced by** | Beta (β) cells | Alpha (α) cells |
| **Released when** | Blood glucose is HIGH | Blood glucose is LOW |
| **Effect on glucose** | Lowers blood glucose | Raises blood glucose |
| **Mechanism** | Stimulates glucose uptake; promotes glycogen synthesis | Stimulates glycogen breakdown; promotes gluconeogenesis |
| **Target tissues** | Liver, muscle, adipose | Liver (primarily) |
| **Hormone type** | Peptide | Peptide |

### How Blood Glucose Is Regulated

**After a meal (blood glucose rises):**
1. Beta cells detect high blood glucose
2. Beta cells secrete **insulin**
3. Insulin stimulates cells to take up glucose (via GLUT4 transporters)
4. Liver converts glucose → **glycogen** (glycogenesis)
5. Adipose tissue converts glucose → fat
6. Blood glucose falls back to set point (~90 mg/dL)

**During fasting (blood glucose drops):**
1. Alpha cells detect low blood glucose
2. Alpha cells secrete **glucagon**
3. Liver breaks down glycogen → glucose (**glycogenolysis**)
4. Liver produces new glucose from amino acids/glycerol (**gluconeogenesis**)
5. Blood glucose rises back to set point

> 🔑 **Antagonistic hormones** = two hormones with opposite effects that work together to maintain homeostasis. Insulin and glucagon are the textbook example of hormonal antagonism.
      `
    },
    {
      id: 'end5-diabetes',
      type: 'text' as const,
      content: `
## Diabetes Mellitus

Diabetes occurs when blood glucose regulation fails. There are two major types:

### Type 1 Diabetes (Insulin-Dependent)
| Feature | Detail |
|---------|--------|
| **Cause** | Autoimmune destruction of beta cells |
| **Insulin production** | None (or very little) |
| **Onset** | Usually childhood/adolescence |
| **Treatment** | Insulin injections required |
| **Mechanism** | Without insulin, cells cannot take up glucose → glucose accumulates in blood |

### Type 2 Diabetes (Insulin-Resistant)
| Feature | Detail |
|---------|--------|
| **Cause** | Target cells become resistant to insulin |
| **Insulin production** | Normal or elevated (initially) |
| **Onset** | Usually adulthood; linked to obesity and lifestyle |
| **Treatment** | Diet, exercise, medications; sometimes insulin |
| **Mechanism** | Cells don't respond to insulin properly → glucose stays in blood |

### Consequences of Uncontrolled Diabetes
- **Hyperglycemia** — persistently high blood glucose
- Glucose in urine (kidneys can't reabsorb it all)
- Increased urination → dehydration
- Long-term: nerve damage, kidney failure, cardiovascular disease, vision loss

> 🧬 **AP Connection:** Diabetes illustrates what happens when feedback mechanisms break down. Type 1 = loss of signal production. Type 2 = loss of signal reception. Both concepts connect to cell communication and signal transduction.
      `
    },
    {
      id: 'end5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Insulin is produced by ___ cells in the pancreatic islets.',
            options: ['alpha', 'beta', 'delta', 'gamma']
          },
          {
            label: 'When blood glucose is low, the liver breaks down glycogen to glucose through ___.',
            options: ['glycogenesis', 'gluconeogenesis', 'glycogenolysis', 'glycolysis']
          },
          {
            label: 'In Type 2 diabetes, target cells become ___ to insulin.',
            options: ['hypersensitive', 'resistant', 'dependent', 'allergic']
          },
          {
            label: 'Epinephrine is released from the adrenal ___ during acute stress.',
            options: ['cortex', 'medulla', 'capsule', 'pelvis']
          }
        ],
        correctAnswers: ['beta', 'glycogenolysis', 'resistant', 'medulla'],
        hint1: 'Remember: Beta = B for "Brings glucose down" (insulin).',
        hint2: 'Glycogenolysis = glycogen + lysis (breaking down).',
        hint3: 'The inner part of the adrenal gland is functionally part of the sympathetic nervous system.',
        explanation: 'Insulin is made by beta cells and lowers blood glucose. When glucose is low, glucagon triggers glycogenolysis (glycogen breakdown) in the liver. In Type 2 diabetes, cells become resistant to insulin signaling. Epinephrine is released from the adrenal medulla (inner region) during the fight-or-flight response.'
      }
    }
  ]
}
