export const bioFeedbackPart5Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p5-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: When Feedback Fails

**Part 5 of 7 — When Feedback Fails**

The AP framework asks you to **explain how alterations in feedback mechanisms affect the organism**, and to predict what happens when one part of a loop is changed. Its named examples are **diabetes mellitus** (decreased insulin), **dehydration** (decreased antidiuretic hormone, ADH), **Graves' disease** (hyperthyroidism) and **blood clotting** disorders.

You do not need to memorize every disease. You need a method: locate the broken part of the loop, then trace the consequence around the loop.

| What breaks | What the loop can no longer do | Typical result |
|---|---|---|
| **Sensor** | Detect the change | No response even when the variable drifts |
| **Signal** (too little hormone or nerve output) | Carry the command | Variable stays out of range in one direction |
| **Receptor or effector** | Respond to the command | Signal level is normal or high, but the variable still stays out of range |
| **Uncontrolled signal** (made without the stimulus) | Turn the response off | Variable is pushed out of range in the other direction |
| **Set point** | Defend the normal target | Loop works, but around the wrong value |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s2-cases',
      type: 'text' as const,
      content: `
### Four broken loops

**1. Diabetes mellitus — the glucose loop**
- **Type 1:** the immune system destroys the insulin-producing beta cells. The **signal is missing**: blood glucose rises after meals and is not brought back down. Cells that depend on insulin for glucose uptake are starved of fuel, so the body breaks down fat and protein instead. Treatment replaces the missing signal with insulin injections.
- **Type 2:** insulin is made, often in normal or even high amounts at first, but target cells respond poorly (**insulin resistance**). The **receptor/effector side fails**: the signal is sent but not acted on, so glucose stays high.
- In both types, glucose spills into the urine and draws water with it, so frequent urination and thirst are classic signs.

**2. Dehydration from decreased ADH — the water-balance loop**
Normally, when blood becomes concentrated, ADH from the posterior pituitary causes the kidney's collecting ducts to insert more **aquaporins** and reabsorb water. If ADH release is too low (as in the condition diabetes insipidus, or temporarily after drinking alcohol, which suppresses ADH release), the kidneys cannot retain water. Large volumes of dilute urine are produced, and the person becomes dehydrated even while drinking.

**3. Graves' disease — the thyroid loop**
Normally, the hypothalamus and anterior pituitary release TRH and TSH; TSH stimulates the thyroid to release thyroid hormones (T₃ and T₄), and high T₃/T₄ **inhibits** TRH and TSH release. In Graves' disease, the immune system makes **antibodies that bind and activate the TSH receptor**. The thyroid is stimulated constantly, regardless of TSH. T₃/T₄ rise, and the negative feedback still suppresses TSH, but suppressing TSH no longer matters, because the antibodies are not under its control. Result: high metabolic rate, weight loss, rapid heartbeat, heat intolerance, often an enlarged thyroid (goiter).

**4. Hemophilia — the clotting loop**
Hemophilia A is caused by a missing or defective clotting factor (factor VIII), coded on the X chromosome. Without it, the cascade that amplifies thrombin production is weakened, so the **positive-feedback amplification stalls**. Small injuries bleed for a long time, and bleeding into joints is common.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s3-mcq-cases',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Locate the Break
      `,
      exercise: {
        questions: [
          {
            question: 'A patient has high blood glucose and high blood insulin at the same time. Which part of the glucose-regulation loop is most likely failing?',
            options: [
              'The beta cells that release insulin',
              'The response of target cells to insulin',
              'The alpha cells that release glucagon',
              'The digestive enzymes that break down starch'
            ],
            correctAnswer: 1,
            explanation: 'Insulin is present, so the signal is being sent; glucose staying high means target cells are not responding, which is the pattern of insulin resistance in type 2 diabetes. Failing beta cells would produce low insulin, as in type 1.'
          },
          {
            question: 'A blood test shows very high thyroid hormone (T₄) and very low TSH. Which explanation is most consistent with these results?',
            options: [
              'Too much TSH from the pituitary is overstimulating the thyroid',
              'Something other than TSH is stimulating the thyroid',
              'Damage has left the thyroid unable to make any hormone',
              'High T₄ is stimulating the pituitary to release more TSH'
            ],
            correctAnswer: 1,
            explanation: 'Low TSH shows the pituitary is responding normally to high T₄ by cutting back, so the thyroid must be driven by another stimulus, such as the TSH-receptor antibodies of Graves\' disease. Excess TSH would show up as high TSH, and a damaged thyroid would give low T₄.'
          },
          {
            question: 'After drinking alcohol, which suppresses ADH release, a person produces large volumes of dilute urine. What is the direct cause?',
            options: [
              'The collecting ducts insert fewer aquaporins and reabsorb less water',
              'The kidneys filter less blood, so less urine is concentrated',
              'Blood glucose rises and draws water into the urine by osmosis',
              'The bladder holds less fluid, so urine is released more often'
            ],
            correctAnswer: 0,
            explanation: 'Without ADH, collecting-duct cells have fewer aquaporins in their membranes, so less water returns to the blood and more stays in the urine. Filtration and bladder capacity are not the targets of ADH, and alcohol does not act through blood glucose here.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s4-fever',
      type: 'text' as const,
      content: `
### Nuance: fever is a moved set point, not a broken loop

During an infection, immune cells release signaling molecules that act on the hypothalamus and **raise the temperature set point**, for example from 37 °C to 39 °C.

Trace what happens next:
1. The body is at 37 °C, but the control center now "wants" 39 °C. The body reads itself as **too cold**.
2. The usual cold responses switch on: **shivering** and **vasoconstriction** (the "chills" at the start of a fever).
3. Temperature climbs to 39 °C, and negative feedback now **defends 39 °C**.
4. When the infection clears, the set point drops back to 37 °C. Now the body reads itself as **too hot**: sweating and flushed skin bring temperature down. This is when a fever "breaks."

The loop never stopped working. Only the **target** changed. An elevated temperature can slow the growth of some pathogens and speed up some immune responses, which is one hypothesis for why fever has been maintained in vertebrates.

### Common misconceptions

| Misconception | Correction |
|---|---|
| "Negative feedback is harmful." | It is the stabilizing kind and runs constantly in healthy organisms. |
| "Positive feedback is healthy." | Direction, not outcome, defines it; runaway positive loops can be lethal. |
| "High hormone level means a strong response." | A response also needs working receptors and effectors, as type 2 diabetes shows. |
| "If a hormone level is low, the gland that makes it is broken." | The gland may be responding correctly to feedback, as low TSH in Graves' disease shows. |
| "Homeostasis keeps every variable constant." | Variables fluctuate within a range, and set points can shift (fever, sleep, exercise). |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Which Part of the Loop Is Altered?
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Type 1 diabetes: beta cells destroyed',
            options: ['signal missing', 'set point moved', 'effector unresponsive', 'signal uncontrolled']
          },
          {
            label: 'Type 2 diabetes: cells respond poorly to insulin',
            options: ['set point moved', 'effector unresponsive', 'signal uncontrolled', 'signal missing']
          },
          {
            label: 'Graves\' disease: antibodies activate TSH receptors',
            options: ['effector unresponsive', 'signal missing', 'set point moved', 'signal uncontrolled']
          },
          {
            label: 'Fever: hypothalamus targets 39 °C',
            options: ['signal uncontrolled', 'effector unresponsive', 'signal missing', 'set point moved']
          }
        ],
        correctAnswers: ['signal missing', 'effector unresponsive', 'signal uncontrolled', 'set point moved'],
        hint1: 'In type 1 diabetes, the cells that make the hormone are gone.',
        hint2: 'In type 2 diabetes, insulin is present but nothing happens when it arrives.',
        hint3: 'Antibodies stimulate the thyroid without any regulation; in fever, the loop works around a new target.',
        explanation: 'Type 1 diabetes removes the insulin signal, type 2 makes the target cells unresponsive, Graves\' antibodies supply an uncontrolled stimulating signal, and fever moves the set point.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s6-predict',
      type: 'text' as const,
      content: `
### Worked example: predicting the effect of a mutation

**Prompt (AP style):** A mutation in a plant makes guard cells unable to respond to abscisic acid (ABA). Predict how the mutant plant will respond to drought compared with a wild-type plant, and justify your prediction.

**Step 1 — locate the break.** ABA is still made (the signal is intact); the guard cells, which are the **effector**, cannot respond.

**Step 2 — trace the loop.** Drought → ABA rises → in the wild type, guard cells lose turgor and stomata close. In the mutant, stomata **stay open**.

**Step 3 — predict the measurable outcome.** The mutant keeps transpiring, loses water faster and wilts sooner than the wild type. Its ABA level may even be **higher** than the wild type's, because the water deficit (the stimulus) is never corrected.

**Step 4 — justify.** Negative feedback requires a working effector; without guard-cell closure, the response that would oppose water loss never happens.

**Model answer sentence:** "The mutant will wilt sooner than the wild type because its guard cells cannot respond to ABA, so its stomata remain open and transpiration continues during drought."

Notice the pattern that also showed up in type 2 diabetes: **when the effector fails, the signal often rises**, because the uncorrected stimulus keeps driving the control center.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Predict and Explain
      `,
      exercise: {
        questions: [
          {
            question: 'At the start of a fever, a person shivers and has cold, pale skin even though body temperature is rising. Which explanation is correct?',
            options: [
              'Thermoregulation has failed, so the body cannot sense temperature',
              'The set point has risen, so the body acts as if it is too cold',
              'Positive feedback has replaced negative feedback in the hypothalamus',
              'Pathogens are producing heat directly inside the skeletal muscles'
            ],
            correctAnswer: 1,
            explanation: 'Signals from the immune system raise the hypothalamic set point, so a normal 37 °C now reads as too cold, triggering shivering and vasoconstriction. The negative-feedback loop is still working; only its target has moved.'
          },
          {
            question: 'A person inherits an allele that produces nonfunctional clotting factor VIII. Which outcome is most likely?',
            options: [
              'Clots form inside healthy vessels without any injury',
              'Bleeding from small cuts lasts much longer than normal',
              'Platelet numbers in the blood rise far above normal',
              'Blood glucose drops because clotting uses glucose'
            ],
            correctAnswer: 1,
            explanation: 'Factor VIII is part of the cascade that amplifies thrombin and fibrin formation, so without it the positive-feedback amplification stalls and bleeding is prolonged, as in hemophilia A. Excess clotting is the opposite outcome.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s8-input',
      type: 'input-boxes' as const,
      content: `
### Recall Check

1) Water-channel proteins that ADH causes kidney cells to insert (plural):

2) The condition in which target cells respond poorly to insulin (two words):

3) The gland that is overstimulated in Graves' disease:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aquaporins', 'insulin resistance', 'thyroid'],
        hint1: 'Their name combines the Latin word for water with "pore."',
        hint2: 'It is the hallmark of type 2 diabetes.',
        hint3: 'It makes T₃ and T₄.',
        explanation: 'ADH increases aquaporins in collecting-duct membranes, insulin resistance underlies type 2 diabetes, and Graves\' disease overstimulates the thyroid gland.'
      }
    }
  ]
};
