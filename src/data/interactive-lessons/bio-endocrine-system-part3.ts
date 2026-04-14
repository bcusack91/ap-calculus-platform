export const bioEndocrineSystemPart3Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end3-intro',
      type: 'text' as const,
      content: `
# 🧠 The Hypothalamus-Pituitary Axis

The **hypothalamus** and **pituitary gland** form the command center of the endocrine system. The hypothalamus receives neural input from the brain and converts it into hormonal signals, making it the primary link between the **nervous system** and the **endocrine system**.

### What You'll Learn
- The hypothalamus as a neuroendocrine integrator
- Anterior pituitary hormones and their targets
- Posterior pituitary hormones and their release mechanism
- The hypothalamic-hypophyseal portal system
      `
    },
    {
      id: 'end3-hypothalamus',
      type: 'text' as const,
      content: `
## The Hypothalamus: Master Integrator

The hypothalamus is a small brain region located below the thalamus that controls the pituitary gland and regulates many homeostatic processes.

### Functions
- Receives **neural signals** from the brain (stress, temperature, circadian rhythms)
- Produces **releasing hormones** and **inhibiting hormones** that control the anterior pituitary
- Synthesizes **ADH** and **oxytocin**, which are stored in the posterior pituitary
- Regulates body temperature, hunger, thirst, and circadian rhythms

### Key Releasing/Inhibiting Hormones
| Hypothalamic Hormone | Effect on Anterior Pituitary |
|---------------------|---------------------------|
| **TRH** (Thyrotropin-releasing hormone) | Stimulates TSH release |
| **CRH** (Corticotropin-releasing hormone) | Stimulates ACTH release |
| **GnRH** (Gonadotropin-releasing hormone) | Stimulates FSH and LH release |
| **GHRH** (Growth hormone-releasing hormone) | Stimulates GH release |
| **Somatostatin** | Inhibits GH (and TSH) release |
| **Dopamine** | Inhibits prolactin release |

> 🔑 **AP Key Concept:** The hypothalamus doesn't directly act on most body tissues — instead, it controls the pituitary, which then controls other endocrine glands. This creates a **three-tier hierarchy**: Hypothalamus → Pituitary → Target Gland.
      `
    },
    {
      id: 'end3-anterior',
      type: 'text' as const,
      content: `
## The Anterior Pituitary ("Master Gland")

The anterior pituitary produces and secretes **six major hormones**, each regulated by hypothalamic releasing or inhibiting hormones. These hormones are delivered via the **hypothalamic-hypophyseal portal system** — a specialized capillary network connecting the hypothalamus to the anterior pituitary.

### Anterior Pituitary Hormones
| Hormone | Full Name | Target | Function |
|---------|-----------|--------|----------|
| **TSH** | Thyroid-stimulating hormone | Thyroid gland | Stimulates T3/T4 production |
| **ACTH** | Adrenocorticotropic hormone | Adrenal cortex | Stimulates cortisol release |
| **FSH** | Follicle-stimulating hormone | Gonads | Stimulates gamete production |
| **LH** | Luteinizing hormone | Gonads | Triggers ovulation; stimulates sex hormone production |
| **GH** | Growth hormone | Liver, bone, muscle | Promotes growth and metabolism |
| **Prolactin** | Prolactin | Mammary glands | Stimulates milk production |

### The Portal System
Unlike most glands, the anterior pituitary does **not** receive hormones through the general circulation. Instead:

1. Hypothalamic neurons secrete releasing hormones into **portal capillaries**
2. These capillaries carry the hormones directly down the pituitary stalk
3. Hormones reach the anterior pituitary at **high concentrations**
4. This ensures precise, targeted regulation

> 📝 **Portal system** = two capillary beds connected by a portal vein. This is similar to the hepatic portal system (intestine → liver). The hypothalamic portal system ensures releasing hormones don't get diluted in the general circulation.
      `
    },
    {
      id: 'end3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes the relationship between the hypothalamus and anterior pituitary?',
            options: [
              'The hypothalamus stores hormones made by the anterior pituitary',
              'The hypothalamus secretes releasing hormones that regulate anterior pituitary secretion',
              'The anterior pituitary directly secretes hormones into the hypothalamus',
              'The hypothalamus and anterior pituitary produce identical hormones'
            ],
            correctAnswer: 1,
            explanation: 'The hypothalamus produces releasing and inhibiting hormones (like TRH, CRH, GnRH) that travel through the portal system to stimulate or inhibit hormone secretion from the anterior pituitary.'
          },
          {
            question: 'What is the advantage of the hypothalamic-hypophyseal portal system?',
            options: [
              'It allows hormones to bypass the liver for faster metabolism',
              'It delivers releasing hormones at high concentration directly to the anterior pituitary',
              'It stores hormones for long-term release',
              'It filters blood before it reaches the brain'
            ],
            correctAnswer: 1,
            explanation: 'The portal system connects two capillary beds, allowing releasing hormones to travel directly from the hypothalamus to the anterior pituitary without being diluted in the general circulation. This ensures effective regulation.'
          }
        ]
      }
    },
    {
      id: 'end3-posterior',
      type: 'text' as const,
      content: `
## The Posterior Pituitary

The posterior pituitary is fundamentally different from the anterior pituitary — it does **not** synthesize its own hormones. Instead, it **stores and releases** hormones made by hypothalamic neurons.

### How It Works
1. Specialized neurons in the hypothalamus (**neurosecretory cells**) synthesize ADH and oxytocin
2. Hormones travel down the **axons** of these neurons into the posterior pituitary
3. Hormones are stored in **axon terminals** in the posterior pituitary
4. When triggered by neural signals, hormones are released into the bloodstream

### Posterior Pituitary Hormones
| Hormone | Full Name | Target | Function |
|---------|-----------|--------|----------|
| **ADH** | Antidiuretic hormone (vasopressin) | Kidney collecting ducts | Increases water reabsorption; concentrates urine |
| **Oxytocin** | Oxytocin | Uterus, mammary glands | Stimulates uterine contractions; milk let-down |

### ADH and Water Balance
- When blood osmolarity rises (dehydration), osmoreceptors in the hypothalamus trigger ADH release
- ADH causes kidney collecting ducts to insert **aquaporins** (water channels)
- More water is reabsorbed → urine becomes concentrated
- When blood osmolarity normalizes, ADH release decreases

> 🔑 **Alcohol inhibits ADH release**, which is why alcohol consumption leads to increased urination and dehydration.
      `
    },
    {
      id: 'end3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The anterior pituitary is often called the "___" because it regulates many other glands.',
            options: ['target gland', 'master gland', 'portal gland', 'feedback gland']
          },
          {
            label: 'The posterior pituitary ___ hormones made by the hypothalamus.',
            options: ['synthesizes', 'destroys', 'stores and releases', 'modifies']
          },
          {
            label: 'ADH increases water reabsorption by inserting ___ into kidney collecting duct cells.',
            options: ['sodium pumps', 'aquaporins', 'carrier proteins', 'ion channels']
          },
          {
            label: 'Hypothalamic releasing hormones reach the anterior pituitary via the ___.',
            options: ['general circulation', 'lymphatic system', 'portal system', 'posterior pituitary']
          }
        ],
        correctAnswers: ['master gland', 'stores and releases', 'aquaporins', 'portal system'],
        hint1: 'The anterior pituitary controls the thyroid, adrenals, and gonads.',
        hint2: 'Unlike the anterior pituitary, the posterior pituitary does not make its own hormones.',
        hint3: 'Portal systems connect two capillary beds without going through the heart.',
        explanation: 'The anterior pituitary is the "master gland" because its hormones regulate other endocrine glands. The posterior pituitary stores and releases ADH and oxytocin (synthesized by the hypothalamus). ADH works by inserting aquaporin water channels into kidney tubule cells. Releasing hormones reach the anterior pituitary through the hypothalamic-hypophyseal portal system.'
      }
    }
  ]
}
