export const bioFeedbackPart1Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p1-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Anatomy of a Feedback Loop

**Part 1 of 7 — Anatomy of a Feedback Loop**

Your body temperature right now is probably within a degree of 37 °C, even though the room around you may be 20 °C and your muscles are releasing heat every second. Your blood glucose is probably between about 70 and 110 mg/dL, even if you just ate a candy bar. These values stay steady not because nothing is happening, but because the body is constantly **detecting change and responding to it**. The machinery that does this is a **feedback loop**.

A feedback loop is any system in which the **output of a process feeds back to influence the process itself**. Biology runs on two kinds:

| Type | What the response does to the original change | Result |
|---|---|---|
| **Negative feedback** | Opposes (reverses) the change | The variable returns toward a **set point** — stability |
| **Positive feedback** | Reinforces (amplifies) the change | The variable moves **farther from** its starting value — rapid change toward an endpoint |

The words "positive" and "negative" describe **direction**, not value. Negative feedback is not bad, and positive feedback is not good. They tell you whether the response pushes the variable **back** or pushes it **further**.

> **AP Connection:** The AP Biology framework asks you to *describe* positive and negative feedback, *explain* how negative feedback maintains homeostasis, and *explain* what happens when a feedback mechanism is altered. Every one of those tasks starts with naming the parts of the loop correctly.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s2-components',
      type: 'text' as const,
      content: `
### The five parts of every feedback loop

Whether the loop controls body temperature, blood glucose or water loss from a leaf, it can be broken into the same components.

| Component | Job | Body-temperature example |
|---|---|---|
| **Stimulus** | A change in the regulated variable | Core temperature rises during a run |
| **Sensor (receptor)** | Detects the change | Thermoreceptors in the skin and in the hypothalamus |
| **Control center (integrator)** | Compares the input with the **set point** and sends commands | The hypothalamus in the brain |
| **Effector** | Carries out the command | Sweat glands; smooth muscle in skin arterioles |
| **Response** | The change the effector produces | Sweat evaporates and blood flow to the skin increases, so heat is lost |

Then the loop **closes**: the response changes the regulated variable, the sensor detects the new value, and the control center adjusts its output. In negative feedback, once temperature falls back toward 37 °C, the signal to sweat weakens and stops.

**Two terms to keep separate:**
- The **set point** is the target value the control center defends (about 37 °C for human core temperature).
- The **normal range** is the band of values the variable actually wanders through. Homeostasis is a **dynamic** steady state: the variable rises and falls a little around the set point rather than sitting at one exact number.

**Signals between parts** can be electrical (nerve impulses, which are fast and short-lived) or chemical (hormones carried in the blood, which are slower but reach many targets). In plants, the signals are hormones such as abscisic acid, auxin and ethylene.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s3-mcq-components',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Naming the Parts
      `,
      exercise: {
        questions: [
          {
            question: 'When blood becomes too concentrated, osmoreceptor cells in the hypothalamus fire more often. The hypothalamus then signals the posterior pituitary to release antidiuretic hormone (ADH), and kidney collecting-duct cells reabsorb more water. In this loop, what role do the kidney collecting-duct cells play?',
            options: [
              'They are the effector',
              'They are the sensor',
              'They are the control center',
              'They are the stimulus'
            ],
            correctAnswer: 0,
            explanation: 'The collecting-duct cells carry out the corrective action by reabsorbing water, which makes them the effector. The osmoreceptors detect the change (sensor), the hypothalamus compares it to the set point (control center), and the rising concentration is the stimulus.'
          },
          {
            question: 'A student says, "Homeostasis means body temperature is held at exactly 37.0 °C at every moment." Which statement best corrects the student?',
            options: [
              'Temperature drifts freely with the room and is reset to 37 °C only during sleep',
              'Temperature fluctuates within a narrow range as feedback keeps adjusting it',
              'Temperature is held constant by the skin alone, with no role for the brain',
              'Temperature stays fixed until illness, when feedback stops working entirely'
            ],
            correctAnswer: 1,
            explanation: 'Homeostasis is a dynamic steady state: the variable moves slightly above and below the set point while negative feedback repeatedly nudges it back. The other choices either deny ongoing regulation or leave out the control center in the hypothalamus.'
          },
          {
            question: 'Which description defines negative feedback?',
            options: [
              'The response intensifies the original change until an outside event ends it',
              'The response opposes the original change and moves the variable toward a set point',
              'The response has no effect on the variable that triggered it',
              'The response happens only when an organism is injured or ill'
            ],
            correctAnswer: 1,
            explanation: 'In negative feedback, the effector\'s response reverses the stimulus, which stabilizes the variable near its set point. Intensifying the change describes positive feedback, and negative feedback runs constantly in healthy organisms, not just during illness.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s4-two-loops',
      type: 'text' as const,
      content: `
### Worked comparison: one negative loop, one positive loop

**Negative feedback — cooling down after exercise**

1. **Stimulus:** core temperature rises to 38.5 °C during a run.
2. **Sensor:** thermoreceptors detect the rise.
3. **Control center:** the hypothalamus registers that temperature is above the set point.
4. **Effectors:** sweat glands secrete sweat; arterioles in the skin dilate.
5. **Response:** evaporation and extra skin blood flow remove heat.
6. **Feedback:** temperature falls toward 37 °C, so the stimulus shrinks and sweating slows.

The response **cancels** the stimulus. That is why negative feedback is self-limiting.

**Positive feedback — the onset of labor**

1. **Stimulus:** the baby's head presses on the cervix, stretching it.
2. **Sensor:** stretch receptors in the cervix send nerve signals to the brain.
3. **Control center:** the hypothalamus triggers release of **oxytocin** from the posterior pituitary.
4. **Effector:** smooth muscle of the uterus contracts more strongly.
5. **Response:** stronger contractions push the baby harder against the cervix.
6. **Feedback:** more stretch → more oxytocin → stronger contractions.

The response **adds to** the stimulus. The loop keeps escalating until an outside event, the **birth of the baby**, removes the stretch and ends the cycle.

| Question to ask | Negative feedback | Positive feedback |
|---|---|---|
| Does the response reduce or increase the stimulus? | Reduces it | Increases it |
| What happens to the variable? | Returns toward set point | Moves farther from its start |
| How does the loop end? | It shuts itself off as the variable is corrected | An outside event ends it |
| How common is it? | Most homeostatic control | A few processes that must finish quickly |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Component — Shivering in the Cold

A hiker's core temperature drops on a cold night. Match each part of the loop to its role.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thermoreceptors in the skin',
            options: ['sensor', 'effector', 'control center', 'stimulus']
          },
          {
            label: 'Hypothalamus',
            options: ['effector', 'control center', 'stimulus', 'sensor']
          },
          {
            label: 'Skeletal muscles that begin shivering',
            options: ['stimulus', 'sensor', 'effector', 'control center']
          },
          {
            label: 'The drop in core temperature',
            options: ['control center', 'effector', 'sensor', 'stimulus']
          }
        ],
        correctAnswers: ['sensor', 'control center', 'effector', 'stimulus'],
        hint1: 'Follow the information: something changes, something notices, something decides, something acts.',
        hint2: 'The brain region that compares the reading to 37 °C is the decision-maker.',
        hint3: 'Muscles do the work of generating heat, so they act on the command.',
        explanation: 'The temperature drop is the stimulus, skin thermoreceptors detect it, the hypothalamus compares it to the set point and sends commands, and skeletal muscles shiver to generate heat. Because the heat raises temperature back toward the set point, this is negative feedback.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s6-classify',
      type: 'text' as const,
      content: `
### A three-step test for classifying any loop

When an AP question describes a regulatory pathway, run this test before choosing an answer.

1. **Identify the regulated variable.** Name the quantity that changed first (temperature, glucose concentration, cervical stretch, water potential in a leaf).
2. **Follow the response back to that variable.** Ask: after the effector acts, is the variable **smaller or larger** than before?
3. **Compare directions.**
   - Stimulus up → response pushes it down (or stimulus down → response pushes it up): **negative feedback**.
   - Stimulus up → response pushes it further up: **positive feedback**.

**Example:** Blood glucose rises after a meal. Beta cells in the pancreas release insulin. Insulin causes liver and muscle cells to take up glucose and store it as glycogen. Glucose concentration falls. The response opposes the stimulus, so this is **negative feedback**.

**Common error:** classifying a loop by whether a hormone level goes up. Insulin *rises* after a meal, but the loop is negative because the **regulated variable** (glucose) is pushed back down. Always judge the variable, not the messenger.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Classify the Loop
      `,
      exercise: {
        questions: [
          {
            question: 'After a meal, insulin secretion rises sharply as blood glucose climbs. A student concludes that glucose regulation is positive feedback because the hormone level increased. What is the flaw in this reasoning?',
            options: [
              'Insulin falls after a meal, so the student has misread the hormone data',
              'Glucose regulation relies on nerves, so hormone levels are not relevant',
              'Feedback type is judged by the glucose level, and insulin brings it down',
              'Positive feedback applies here only after meals rich in carbohydrates'
            ],
            correctAnswer: 2,
            explanation: 'Feedback is judged by the regulated variable. Insulin rises, but its effect is to lower blood glucose back toward the set point, so the loop is negative. Insulin really does rise after a meal, and the pathway depends on hormones rather than nerves alone.'
          },
          {
            question: 'In which situation does the response move a variable farther from its starting value until an outside event stops the process?',
            options: [
              'Sweating when core temperature rises during exercise',
              'Uterine contractions growing stronger during labor',
              'Glucagon release when blood glucose falls overnight',
              'Shivering when core temperature falls in a cold room'
            ],
            correctAnswer: 1,
            explanation: 'During labor, stronger contractions increase cervical stretch, which triggers more oxytocin and stronger contractions until birth ends the loop. Sweating, glucagon release and shivering each oppose the change and return the variable toward its set point.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s8-input',
      type: 'input-boxes' as const,
      content: `
### Vocabulary Retrieval

1) The target value that a control center defends (two words):

2) The component that carries out the corrective action:

3) The hormone whose release escalates during labor:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['set point', 'effector', 'oxytocin'],
        hint1: 'The first term describes the value the hypothalamus compares readings against, such as 37 °C.',
        hint2: 'Sweat glands and shivering muscles are examples of this component.',
        hint3: 'It is released from the posterior pituitary and makes the uterus contract.',
        explanation: 'The set point is the target value, the effector carries out the response, and oxytocin drives the positive-feedback loop of labor.'
      }
    }
  ]
};
