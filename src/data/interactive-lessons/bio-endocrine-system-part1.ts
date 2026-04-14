export const bioEndocrineSystemPart1Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end1-intro',
      type: 'text' as const,
      content: `
# 🧪 The Endocrine System: Chemical Communication

Your body uses two major communication systems to maintain homeostasis: the **nervous system** and the **endocrine system**. While the nervous system sends rapid electrical signals along neurons, the endocrine system uses **hormones** — chemical messengers secreted into the bloodstream — to coordinate slower, longer-lasting responses.

### What You'll Learn
- How the endocrine system differs from the nervous system
- The role of hormones as chemical messengers
- Major endocrine glands and their locations
- Key terminology for AP Biology
      `
    },
    {
      id: 'end1-comparison',
      type: 'text' as const,
      content: `
## Endocrine vs. Nervous System

Both systems transmit information, but they do so in fundamentally different ways:

| Feature | Nervous System | Endocrine System |
|---------|---------------|-----------------|
| **Signal type** | Electrical impulses (action potentials) | Chemical (hormones in blood) |
| **Speed** | Very fast (milliseconds) | Slower (seconds to hours) |
| **Duration** | Short-lived | Long-lasting (minutes to days) |
| **Specificity** | Targets specific cells via synapses | Targets any cell with the right receptor |
| **Transmission** | Along neurons | Via bloodstream |
| **Range** | Point-to-point | Widespread / systemic |
| **Examples** | Pulling hand from hot stove | Growth over years, blood sugar regulation |

> 🔑 **AP Key Concept:** The endocrine system enables **long-distance cell communication**. A hormone may be produced in one location and affect target cells far away in the body — but only if those target cells express the correct **receptor**.

### Integration of Both Systems
The nervous and endocrine systems are not completely separate. The **hypothalamus** serves as a critical integration center, receiving neural input and translating it into hormonal signals. This **neuroendocrine** connection allows the brain to regulate hormone secretion.
      `
    },
    {
      id: 'end1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which characteristic best distinguishes endocrine signaling from nervous signaling?',
            options: [
              'Endocrine signals travel faster than nerve impulses',
              'Endocrine signals use hormones transported through the bloodstream',
              'Endocrine signals only affect cells immediately adjacent to the gland',
              'Endocrine signals do not require receptors on target cells'
            ],
            correctAnswer: 1,
            explanation: 'The endocrine system secretes hormones into the bloodstream, allowing them to reach distant target cells. Nervous signaling is faster, not slower. Endocrine signals are systemic (not just adjacent cells), and target cells must have the correct receptor.'
          },
          {
            question: 'A student observes that a hormone effect lasts for several hours after a single release event. This is most consistent with which signaling system?',
            options: [
              'Nervous system — because signals are amplified',
              'Endocrine system — because hormones persist in the blood',
              'Paracrine signaling — because local signals last longer',
              'Direct contact signaling — because cell junctions sustain the signal'
            ],
            correctAnswer: 1,
            explanation: 'Hormones circulate in the blood and can continue to bind receptors for hours or even days. Nervous system signals are rapid but short-lived. Paracrine signaling is local, not systemic.'
          }
        ]
      }
    },
    {
      id: 'end1-hormones',
      type: 'text' as const,
      content: `
## Hormones as Chemical Messengers

**Hormones** are molecules produced by endocrine glands (or specialized cells) that are released into the bloodstream and act on distant target cells.

### Key Properties of Hormones
- Produced in **small quantities** but have large effects
- Transported by the **circulatory system**
- Only affect cells with the correct **receptor** (lock-and-key specificity)
- Regulated by **feedback mechanisms** (usually negative feedback)
- Can be **degraded** by enzymes, ensuring signals don't persist indefinitely

### Types of Signaling
| Type | Description | Example |
|------|-------------|---------|
| **Endocrine** | Hormone travels through blood to distant target | Insulin from pancreas → liver cells |
| **Paracrine** | Signal acts on nearby cells | Histamine during inflammation |
| **Autocrine** | Signal acts on the same cell that produced it | T-cell activation cytokines |
| **Synaptic** | Neurotransmitter crosses a synapse | Acetylcholine at neuromuscular junction |

> 🧬 **AP Connection:** Cell signaling is a major theme in AP Biology (Big Idea 3). Hormones are classic examples of **long-distance signaling molecules** that illustrate signal transduction pathways.
      `
    },
    {
      id: 'end1-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The endocrine system uses ___ as chemical messengers.',
            options: ['neurotransmitters', 'hormones', 'enzymes', 'antibodies']
          },
          {
            label: 'Hormones travel through the ___ to reach target cells.',
            options: ['lymphatic system', 'nervous tissue', 'bloodstream', 'digestive tract']
          },
          {
            label: 'A target cell must have the correct ___ to respond to a hormone.',
            options: ['nucleus', 'receptor', 'mitochondria', 'ribosome']
          },
          {
            label: 'The ___ connects the nervous and endocrine systems.',
            options: ['cerebellum', 'hypothalamus', 'adrenal cortex', 'thymus']
          }
        ],
        correctAnswers: ['hormones', 'bloodstream', 'receptor', 'hypothalamus'],
        hint1: 'Think about what distinguishes endocrine signals from neural signals.',
        hint2: 'Hormones are secreted into a fluid that circulates throughout the body.',
        hint3: 'The brain structure sits just above the pituitary gland.',
        explanation: 'Hormones are chemical messengers that travel through the bloodstream to act on target cells bearing the correct receptor. The hypothalamus is the key neuroendocrine link between the nervous system and the endocrine system.'
      }
    },
    {
      id: 'end1-glands',
      type: 'text' as const,
      content: `
## Major Endocrine Glands Overview

The endocrine system consists of glands distributed throughout the body:

| Gland | Location | Key Hormone(s) | Primary Function |
|-------|----------|----------------|-----------------|
| **Hypothalamus** | Base of brain | Releasing/inhibiting hormones | Controls pituitary; links nervous & endocrine |
| **Anterior pituitary** | Below hypothalamus | GH, TSH, ACTH, FSH, LH, Prolactin | "Master gland" — regulates other glands |
| **Posterior pituitary** | Below hypothalamus | ADH, Oxytocin | Water balance, uterine contractions |
| **Thyroid** | Neck (anterior) | T3, T4, Calcitonin | Metabolism, calcium regulation |
| **Parathyroids** | Behind thyroid | PTH | Raises blood calcium |
| **Adrenal cortex** | On top of kidneys | Cortisol, Aldosterone | Stress response, electrolyte balance |
| **Adrenal medulla** | Inner adrenal | Epinephrine, Norepinephrine | Fight-or-flight response |
| **Pancreas (islets)** | Behind stomach | Insulin, Glucagon | Blood glucose regulation |
| **Ovaries** | Pelvic cavity | Estrogen, Progesterone | Female reproduction, secondary sex traits |
| **Testes** | Scrotum | Testosterone | Male reproduction, secondary sex traits |
| **Pineal gland** | Brain (epithalamus) | Melatonin | Circadian rhythm / sleep-wake cycle |
| **Thymus** | Upper chest | Thymosin | T-cell maturation (immune function) |

> 📝 **AP Tip:** You don't need to memorize every hormone, but you must understand hormone **types**, **mechanisms of action**, and **feedback regulation** — these are heavily tested.

### Key Takeaways
- The endocrine system enables slow, sustained, widespread communication
- Hormones require **specific receptors** on target cells
- The hypothalamus integrates neural and hormonal signals
- Understanding gland-hormone-target relationships is foundational for AP Biology
      `
    }
  ]
}
