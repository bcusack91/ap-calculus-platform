export const bioEndocrineSystemPart4Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end4-intro',
      type: 'text' as const,
      content: `
# 🔄 Feedback Loops in the Endocrine System

Hormone levels are tightly regulated by **feedback mechanisms** that maintain homeostasis. Most hormone systems use **negative feedback** to keep levels within a normal range, while a few specialized situations employ **positive feedback** to amplify a response.

### What You'll Learn
- How negative feedback regulates the thyroid axis (TRH → TSH → T3/T4)
- Positive feedback examples: oxytocin in childbirth, LH surge
- Set points and homeostatic regulation
- How to interpret feedback loop diagrams on the AP exam
      `
    },
    {
      id: 'end4-negative',
      type: 'text' as const,
      content: `
## Negative Feedback: The Thermostat Model

**Negative feedback** is the most common regulatory mechanism in the endocrine system. When the output of a system **inhibits further output**, the system self-corrects and maintains homeostasis.

### The Thyroid Axis: A Classic Example

The **hypothalamic-pituitary-thyroid (HPT) axis** is the most commonly tested feedback loop on the AP exam:

**Normal regulation:**
1. Hypothalamus detects low thyroid hormone → releases **TRH**
2. TRH stimulates the anterior pituitary → releases **TSH**
3. TSH stimulates the thyroid gland → releases **T3 and T4**
4. T3/T4 increase metabolic rate in target tissues

**Negative feedback:**
5. Rising T3/T4 levels **inhibit** the hypothalamus (less TRH)
6. Rising T3/T4 levels **inhibit** the anterior pituitary (less TSH)
7. With less TRH and TSH, the thyroid slows production
8. System stabilizes around the **set point**

| Component | Hormone | Role in Loop |
|-----------|---------|-------------|
| Hypothalamus | TRH | Stimulates TSH release |
| Anterior pituitary | TSH | Stimulates T3/T4 release |
| Thyroid gland | T3, T4 | Effector — raises metabolism |
| T3/T4 on hypothalamus | — | Inhibits TRH (negative feedback) |
| T3/T4 on anterior pituitary | — | Inhibits TSH (negative feedback) |

> 🔑 **AP Exam Application:** If a patient has **hyperthyroidism** (excess T3/T4), predict what happens to TRH and TSH. Answer: Both decrease due to strong negative feedback from high T3/T4 levels.
      `
    },
    {
      id: 'end4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A patient takes a drug that blocks T3/T4 receptors on the hypothalamus and anterior pituitary. What would happen to TSH levels?',
            options: [
              'TSH would decrease because the thyroid is no longer stimulated',
              'TSH would increase because negative feedback is blocked',
              'TSH would remain unchanged because the drug only affects T3/T4',
              'TSH would fluctuate unpredictably'
            ],
            correctAnswer: 1,
            explanation: 'If T3/T4 cannot bind receptors on the hypothalamus and anterior pituitary, negative feedback is blocked. The hypothalamus and pituitary "think" thyroid hormone levels are low, so they continue releasing TRH and TSH at high levels, even if actual T3/T4 is normal.'
          },
          {
            question: 'Which statement best describes the role of a set point in homeostasis?',
            options: [
              'It is the maximum hormone level the body can produce',
              'It is the target value around which a physiological variable is maintained',
              'It is the rate at which hormones are degraded',
              'It is the number of receptors on a target cell'
            ],
            correctAnswer: 1,
            explanation: 'A set point is the ideal target value (like a thermostat setting). Negative feedback mechanisms detect deviations from this set point and correct them, maintaining the variable within a narrow homeostatic range.'
          }
        ]
      }
    },
    {
      id: 'end4-positive',
      type: 'text' as const,
      content: `
## Positive Feedback: Amplifying Signals

**Positive feedback** occurs when the output of a system **enhances** further output, creating an escalating cycle. These loops are rare but important in biology — they drive processes that need to be completed rapidly once initiated.

### Example 1: Oxytocin and Childbirth
1. Baby's head presses against the cervix → stretch receptors fire
2. Nerve signals reach the hypothalamus → posterior pituitary releases **oxytocin**
3. Oxytocin stimulates **uterine contractions**
4. Contractions push the baby harder against the cervix
5. More stretching → more oxytocin → stronger contractions
6. Cycle continues with escalating intensity until **delivery** (the terminating event)

### Example 2: The LH Surge and Ovulation
1. During the follicular phase, the developing follicle produces increasing **estrogen**
2. At low levels, estrogen exerts **negative feedback** on LH
3. When estrogen reaches a **critical threshold**, it switches to **positive feedback**
4. High estrogen stimulates a massive surge of **LH** from the anterior pituitary
5. The LH surge triggers **ovulation** (release of the egg)
6. After ovulation, the corpus luteum forms and produces progesterone, which returns to negative feedback

> ⚠️ **Key Distinction:** Positive feedback loops always have a **terminating event** that breaks the cycle. Without it, the amplification would be dangerous. In childbirth, delivery ends the loop. In ovulation, the rupture of the follicle ends the estrogen signal.

### Example 3: Blood Clotting Cascade
- Platelet activation triggers more platelet activation
- Clotting factors activate more clotting factors
- Terminates when the wound is sealed
      `
    },
    {
      id: 'end4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In negative feedback, rising levels of a hormone ___ further production of that hormone.',
            options: ['stimulate', 'inhibit', 'have no effect on', 'amplify']
          },
          {
            label: 'In the thyroid axis, T3/T4 feeds back to inhibit both the ___ and the anterior pituitary.',
            options: ['thyroid gland', 'hypothalamus', 'adrenal cortex', 'posterior pituitary']
          },
          {
            label: 'Oxytocin during childbirth is an example of ___ feedback.',
            options: ['negative', 'positive', 'neutral', 'delayed']
          },
          {
            label: 'Positive feedback loops always require a ___ to stop the cycle.',
            options: ['second messenger', 'inhibiting hormone', 'terminating event', 'receptor downregulation']
          }
        ],
        correctAnswers: ['inhibit', 'hypothalamus', 'positive', 'terminating event'],
        hint1: 'Negative feedback works like a thermostat — high levels turn off the heater.',
        hint2: 'The thyroid axis has three levels: hypothalamus → pituitary → thyroid.',
        hint3: 'Without a terminating event, positive feedback would spiral out of control.',
        explanation: 'Negative feedback inhibits further hormone production to maintain set points. In the thyroid axis, T3/T4 feeds back to both the hypothalamus and anterior pituitary. Oxytocin in childbirth is a classic positive feedback example — contractions increase oxytocin, which increases contractions, until delivery (the terminating event) stops the cycle.'
      }
    },
    {
      id: 'end4-summary',
      type: 'text' as const,
      content: `
## Feedback Loops Summary

| Feature | Negative Feedback | Positive Feedback |
|---------|------------------|------------------|
| **Direction** | Output inhibits further output | Output stimulates further output |
| **Effect** | Maintains homeostasis | Amplifies to completion |
| **Frequency** | Very common | Rare |
| **Endpoint** | Returns to set point | Requires terminating event |
| **Examples** | Thyroid axis, blood glucose, cortisol | Childbirth, LH surge, clotting |

### AP Exam Strategies for Feedback Questions
1. **Identify the stimulus** — what changed from normal?
2. **Trace the pathway** — stimulus → sensor → integrator → effector → response
3. **Determine the feedback type** — does the response counteract or amplify the stimulus?
4. **Predict disruptions** — if a gland is removed or a drug blocks a receptor, trace the consequences through the loop
5. **Watch for the switch** — some signals (like estrogen) switch from negative to positive feedback at different concentrations

> 📝 **Common AP Mistake:** Students often confuse "negative" with "bad" and "positive" with "good." In biology, negative feedback is actually the healthy, stabilizing mechanism, while positive feedback is an escalating process used for specific events.
      `
    }
  ]
}
