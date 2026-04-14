export const bioEndocrineSystemPart7Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end7-intro',
      type: 'text' as const,
      content: `
# 🎯 AP Exam Practice: Endocrine System

This section focuses on the types of questions you'll see on the AP Biology exam — interpreting feedback diagrams, predicting the effects of hormone disorders, analyzing experimental designs, and working with data on hormone levels.

### Skills Tested
- Interpreting and constructing feedback loop diagrams
- Predicting consequences of gland removal, hyper/hyposecretion, or receptor defects
- Designing controlled experiments with hormone variables
- Analyzing graphs and data tables of hormone concentrations
      `
    },
    {
      id: 'end7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Feedback Diagram Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A diagram shows: Hypothalamus → (TRH) → Anterior Pituitary → (TSH) → Thyroid → (T3/T4) → [inhibits Hypothalamus and Anterior Pituitary]. A patient\'s thyroid gland is surgically removed. What would happen to TSH levels?',
            options: [
              'TSH would decrease because there is no thyroid to stimulate',
              'TSH would increase because negative feedback from T3/T4 is eliminated',
              'TSH would remain unchanged because the pituitary functions independently',
              'TSH would first increase then decrease to zero'
            ],
            correctAnswer: 1,
            explanation: 'Without the thyroid, T3/T4 levels drop to near zero. This removes the negative feedback signal to the hypothalamus and anterior pituitary. Without inhibition, TRH and TSH levels rise dramatically. This is exactly what happens clinically — elevated TSH is a hallmark of hypothyroidism.'
          },
          {
            question: 'A researcher observes that a patient has HIGH T3/T4, LOW TSH, and LOW TRH. Which diagnosis is most consistent with these findings?',
            options: [
              'The patient has a hypothalamic tumor producing excess TRH',
              'The patient has a pituitary tumor producing excess TSH',
              'The patient has a thyroid tumor autonomously producing T3/T4',
              'The patient has an iodine deficiency'
            ],
            correctAnswer: 2,
            explanation: 'High T3/T4 with low TSH and TRH indicates that the thyroid is overproducing hormones independently (not in response to TSH). The high T3/T4 is correctly suppressing TSH and TRH through negative feedback. If the problem were at the hypothalamus or pituitary, those upstream hormones would be elevated, not low.'
          }
        ]
      }
    },
    {
      id: 'end7-disorders',
      type: 'text' as const,
      content: `
## Predicting Hormone Disorder Effects

The AP exam tests your ability to **trace through feedback loops** and predict consequences. Here's a systematic approach:

### Framework for Predicting Hormonal Disorders

| Disorder | Primary Defect | Upstream Hormones | Downstream Effects |
|----------|---------------|-------------------|-------------------|
| **Primary hypothyroidism** | Thyroid fails | TRH ↑, TSH ↑ | T3/T4 ↓, metabolism ↓ |
| **Secondary hypothyroidism** | Pituitary fails | TRH ↑, TSH ↓ | T3/T4 ↓, metabolism ↓ |
| **Tertiary hypothyroidism** | Hypothalamus fails | TRH ↓, TSH ↓ | T3/T4 ↓, metabolism ↓ |
| **Primary hyperthyroidism** | Thyroid overactive | TRH ↓, TSH ↓ | T3/T4 ↑, metabolism ↑ |
| **Type 1 diabetes** | Beta cells destroyed | — | Insulin ↓, glucose ↑ |
| **Type 2 diabetes** | Receptor resistance | — | Insulin ↑ (initially), glucose ↑ |
| **Addison's disease** | Adrenal cortex fails | CRH ↑, ACTH ↑ | Cortisol ↓ |
| **Cushing's syndrome** | Excess cortisol | CRH ↓, ACTH ↓ (if adrenal) | Cortisol ↑ |

### Key Principle
> When a **downstream gland** fails, all **upstream hormones increase** (because negative feedback is removed). When a downstream gland is **overactive**, upstream hormones decrease (strong negative feedback).
      `
    },
    {
      id: 'end7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Hormone Disorder Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A patient has elevated ACTH but low cortisol. The most likely explanation is:',
            options: [
              'A pituitary tumor is overproducing ACTH',
              'The adrenal cortex is failing to respond to ACTH (primary adrenal insufficiency)',
              'The hypothalamus is producing excess CRH',
              'The patient is taking exogenous cortisol supplements'
            ],
            correctAnswer: 1,
            explanation: 'High ACTH + low cortisol = the pituitary is trying to stimulate the adrenal cortex (by producing lots of ACTH), but the adrenal cortex can\'t respond. This is primary adrenal insufficiency (Addison\'s disease). If the problem were a pituitary tumor, cortisol would also be high. If taking cortisol supplements, ACTH would be suppressed by negative feedback.'
          },
          {
            question: 'An experiment shows that injecting a mouse with insulin causes blood glucose to drop. However, in a genetically modified mouse lacking GLUT4 transporters, insulin injection has no effect on blood glucose. What does this demonstrate?',
            options: [
              'Insulin is not required for glucose regulation',
              'GLUT4 transporters are necessary for insulin-stimulated glucose uptake',
              'The modified mouse must have Type 1 diabetes',
              'Glucagon is compensating for the lack of GLUT4'
            ],
            correctAnswer: 1,
            explanation: 'This experiment demonstrates that insulin\'s ability to lower blood glucose requires GLUT4 transporters. Without GLUT4, cells cannot take up glucose even when insulin is present. This models the concept behind Type 2 diabetes, where insulin signaling fails at the cellular level. The modified mouse produces insulin (ruling out Type 1).'
          }
        ]
      }
    },
    {
      id: 'end7-experimental',
      type: 'text' as const,
      content: `
## Experimental Design with Hormones

AP Biology free-response questions often ask you to **design an experiment** involving hormones. Follow this structure:

### Experiment Design Template
1. **Hypothesis:** State a testable prediction (e.g., "If cortisol suppresses the immune response, then mice treated with cortisol will show lower antibody production compared to controls.")
2. **Independent variable:** What you manipulate (e.g., cortisol injection vs. saline injection)
3. **Dependent variable:** What you measure (e.g., antibody concentration in blood)
4. **Control group:** Receives saline (placebo) instead of hormone
5. **Controlled variables:** Same species, age, sex, diet, housing conditions
6. **Sample size:** Large enough for statistical significance
7. **Replication:** Multiple trials to ensure reproducibility

### Example: Does melatonin affect circadian activity patterns?

| Element | Detail |
|---------|--------|
| **Hypothesis** | Exogenous melatonin will shift activity onset to earlier times |
| **Experimental group** | Mice receive melatonin injection at fixed time daily |
| **Control group** | Mice receive saline injection at the same time |
| **Dependent variable** | Onset time of wheel-running activity |
| **Duration** | 4 weeks |
| **Data collection** | Automated wheel-turn counters, recorded continuously |
| **Analysis** | Compare mean activity onset times between groups (t-test) |

> 📝 **AP Tip:** Always explain WHY controls are needed. Controls ensure that observed effects are due to the hormone treatment and not other factors (like the stress of injection itself).
      `
    },
    {
      id: 'end7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Data Analysis** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'If a patient\'s thyroid is removed, you would predict TSH levels to ___ due to loss of negative feedback.',
            options: ['decrease', 'increase', 'remain the same', 'fluctuate randomly']
          },
          {
            label: 'In an experiment testing the effect of insulin on blood glucose, the control group should receive ___.',
            options: ['glucagon', 'a saline injection', 'no treatment', 'double the insulin dose']
          },
          {
            label: 'A graph showing blood glucose rising after a meal and then returning to baseline illustrates ___.',
            options: ['positive feedback', 'negative feedback', 'signal amplification', 'autocrine signaling']
          },
          {
            label: 'If administering a hormone to Group A produces an effect, but the same hormone has no effect on Group B (which lacks the receptor), this demonstrates that the ___ is required for the response.',
            options: ['hormone', 'receptor', 'second messenger', 'nucleus']
          }
        ],
        correctAnswers: ['increase', 'a saline injection', 'negative feedback', 'receptor'],
        hint1: 'Without T3/T4, the pituitary has no inhibitory signal.',
        hint2: 'Controls should match the experimental conditions in all ways except the variable being tested.',
        hint3: 'Blood glucose returning to baseline is the body self-correcting — classic negative feedback.',
        explanation: 'TSH rises when the thyroid is removed because negative feedback from T3/T4 is eliminated. Controls should receive saline (a placebo injection) to account for the stress of the injection procedure. Blood glucose returning to baseline after a meal is negative feedback (insulin brings it back down). Comparing a group with receptors to one without demonstrates that the receptor is necessary for the hormone to have its effect.'
      }
    },
    {
      id: 'end7-summary',
      type: 'text' as const,
      content: `
## AP Exam Review: Endocrine System Key Concepts

### Must-Know for the Exam
| Topic | Key Points |
|-------|-----------|
| **Endocrine vs. Nervous** | Hormones = slow, long-lasting, widespread; Nerves = fast, brief, targeted |
| **Peptide vs. Steroid** | Peptide = surface receptor, cAMP cascade, fast; Steroid = intracellular receptor, gene expression, slow |
| **Hypothalamus-Pituitary** | Hypothalamus controls pituitary via releasing hormones; portal system delivers them |
| **Negative feedback** | Most common; output inhibits further output; maintains set point |
| **Positive feedback** | Rare; amplifies signal; requires terminating event (oxytocin, LH surge) |
| **Insulin/Glucagon** | Antagonistic; regulate blood glucose; beta cells / alpha cells |
| **Thyroid axis** | TRH → TSH → T3/T4 → negative feedback; metabolism regulation |
| **Calcium balance** | PTH raises Ca²⁺; Calcitonin lowers Ca²⁺; antagonistic hormones |

### Common Free-Response Themes
1. **Trace a feedback loop** — identify all components (stimulus, sensor, integrator, effector, response, feedback)
2. **Predict disorder effects** — given a gland failure, predict upstream and downstream hormone changes
3. **Design an experiment** — hypothesis, variables, controls, sample size, data collection
4. **Analyze data** — interpret hormone level graphs, identify feedback type, explain physiological significance
5. **Compare signaling mechanisms** — explain why peptide hormones act faster than steroid hormones

> 🎓 **Final Tip:** The endocrine system is a perfect example of AP Biology's Big Ideas: **Information** (hormones carry information), **Systems Interactions** (feedback loops maintain homeostasis), and **Structure & Function** (hormone chemistry determines mechanism of action).
      `
    }
  ]
}
