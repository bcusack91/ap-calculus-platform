export const bioFeedbackPart5Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p5-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: When Feedback Fails

**Part 5 of 7 — When Feedback Fails**

The AP framework's skill for this topic is to **predict the causes or effects of a change in, or disruption to, one or more components** of a biological system. For feedback, that means predicting what happens when one part of a loop is changed. Its own example of negative feedback is blood-glucose regulation by insulin and glucagon, so diabetes is the case to know best.

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

**3. An uncontrolled signal — an insulin-secreting tumor**
Normally, beta cells release insulin only when blood glucose is high, and release falls as glucose returns to the set point. A rare tumor of beta cells releases insulin **continuously**, whether glucose is high or low. The signal is no longer tied to the stimulus, so the loop cannot switch it off. Blood glucose is pushed **below** the normal range, causing shakiness, confusion and, if severe, loss of consciousness. Glucagon release rises in response, but it cannot fully overcome the constant insulin signal. (Some autoimmune thyroid disorders follow the same pattern: antibodies keep a gland stimulated regardless of the body's needs.)

**4. A clotting disorder — the clotting loop**
In some inherited clotting disorders (hemophilia is the best-known), one of the clotting proteins is missing or defective. The cascade that amplifies clot formation is weakened, so the **positive-feedback amplification stalls**. Small injuries bleed for a long time.
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
            question: 'A tumor of pancreatic beta cells releases insulin continuously, even when blood glucose is low. What is the most likely result?',
            options: [
              'Blood glucose falls and stays below the normal range',
              'Blood glucose rises because the extra insulin stops working',
              'Blood glucose stays normal because glucagon fully cancels insulin',
              'Blood glucose rises because the liver stores less glycogen'
            ],
            correctAnswer: 0,
            explanation: 'Insulin lowers blood glucose. Because the tumor releases it regardless of the glucose level, the loop cannot switch the signal off, and glucose is pushed below the set point. Glucagon rises in response but cannot fully offset a constant insulin signal.'
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
| "If a hormone level is low, the gland that makes it is broken." | The gland may be responding correctly to feedback, as falling insulin after glucose returns to normal shows. |
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
            label: 'A beta-cell tumor releases insulin regardless of glucose level',
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
        hint3: 'A tumor releasing hormone nonstop is unregulated; in fever, the loop works around a new target.',
        explanation: 'Type 1 diabetes removes the insulin signal, type 2 makes the target cells unresponsive, an insulin-secreting tumor supplies an uncontrolled signal, and fever moves the set point.'
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
            question: 'A person inherits an allele that makes one of the clotting proteins nonfunctional. Which outcome is most likely?',
            options: [
              'Clots form inside healthy vessels without any injury',
              'Bleeding from small cuts lasts much longer than normal',
              'Platelet numbers in the blood rise far above normal',
              'Blood glucose drops because clotting uses glucose'
            ],
            correctAnswer: 1,
            explanation: 'Each clotting protein is a step in the cascade that amplifies clot formation, so without it the positive-feedback amplification stalls and bleeding is prolonged. Excess clotting is the opposite outcome.'
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

3) The pancreatic hormone that raises blood glucose when it falls too low:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['aquaporins', 'insulin resistance', 'glucagon'],
        hint1: 'Their name combines the Latin word for water with "pore."',
        hint2: 'It is the hallmark of type 2 diabetes.',
        hint3: 'It is released by alpha cells and works opposite to insulin.',
        explanation: 'ADH increases aquaporins in collecting-duct membranes, insulin resistance underlies type 2 diabetes, and glucagon raises blood glucose by triggering glycogen breakdown in the liver.'
      }
    }
  ]
};
