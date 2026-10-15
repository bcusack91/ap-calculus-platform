export const bioFeedbackPart6Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p6-s1-intro',
      type: 'text' as const,
      content: `
## Feedback Mechanisms: Reading Feedback Data and FRQ Practice

**Part 6 of 7 — Reading Feedback Data and FRQ Practice**

Half of the AP Biology exam score comes from six free-response questions, and two of them (worth 9 points each) ask you to interpret experimental results, one with a graph you must build. Feedback mechanisms are a favorite context because the data have recognizable **shapes**.

### What feedback looks like on a graph

| Shape of a variable over time | Most likely loop | Example |
|---|---|---|
| Rises after a disturbance, overshoots slightly, settles back to the starting level | Negative feedback | Blood glucose after a meal |
| Regular rises and falls that never settle, with one curve lagging another | Negative feedback with a time lag | Lynx and hare numbers |
| Accelerating rise that ends abruptly at an event | Positive feedback with an off switch | Oxytocin and contraction strength during labor |
| Stays far from normal and does not return | Broken feedback | Glucose in untreated diabetes |

### Task verbs and what they require

| Verb | What a full-credit answer contains |
|---|---|
| **Identify** | A specific name or value, no explanation needed |
| **Describe** | The relevant characteristics, such as the direction and size of a change |
| **Explain** | A cause-and-effect link: how or why |
| **Predict** | The expected outcome, stated as a direction or value |
| **Justify** | Evidence or a biological principle that supports a claim or prediction |
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s2-gtt',
      type: 'text' as const,
      content: `
### Data set 1: an oral glucose tolerance test

Two adults fasted overnight, drank a solution containing 75 g of glucose, and had their blood glucose measured every 30 minutes. (Hypothetical data; the clinical cutoffs below are real.)

| Time (min) | Subject A (mg/dL) | Subject B (mg/dL) |
|---|---|---|
| 0 | 85 | 130 |
| 30 | 140 | 220 |
| 60 | 120 | 260 |
| 90 | 100 | 245 |
| 120 | 90 | 230 |

**Clinical reference values:** a fasting value of 126 mg/dL or higher, or a 2-hour value of 200 mg/dL or higher, is consistent with diabetes. A normal 2-hour value is below 140 mg/dL.

**Reading the data:**
- **Subject A** peaks at 30 minutes and returns almost to the fasting level by 120 minutes. The loop detects the rise and reverses it: intact negative feedback.
- **Subject B** starts high (130 mg/dL fasting), rises later and higher (peak 260 mg/dL at 60 minutes) and is still at 230 mg/dL at 2 hours. The corrective response is weak or absent: the pattern of diabetes.
- The data alone cannot tell type 1 from type 2. To distinguish them, you would also measure **blood insulin**: low insulin points to type 1 (signal missing), and normal or high insulin with high glucose points to type 2 (target cells unresponsive).
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s3-mcq-gtt',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Interpreting the Glucose Data
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the glucose tolerance data, which statement about Subject A is best supported?',
            options: [
              'Subject A\'s glucose never rose, so insulin was not needed',
              'Glucose rose, then fell near baseline within 2 hours',
              'Subject A\'s glucose kept climbing, showing positive feedback',
              'Subject A\'s 2-hour value meets the cutoff for diabetes'
            ],
            correctAnswer: 1,
            explanation: 'Subject A rose from 85 to 140 mg/dL and was back to 90 mg/dL at 120 minutes, the signature of intact negative feedback. The 2-hour value of 90 mg/dL is well below the 200 mg/dL diabetes cutoff.'
          },
          {
            question: 'A researcher wants to determine whether Subject B has type 1 or type 2 diabetes. Which additional measurement would be most useful?',
            options: [
              'Insulin level during the test',
              'Body temperature at each time point',
              'Heart rate before and after the drink',
              'Volume of the glucose drink consumed'
            ],
            correctAnswer: 0,
            explanation: 'Insulin level separates the two: low insulin indicates loss of the signal (type 1), while normal or high insulin with high glucose indicates insulin resistance (type 2). Temperature and heart rate do not reveal which part of the glucose loop has failed, and the drink volume was the same for both subjects.'
          },
          {
            question: 'By how much did Subject B\'s blood glucose fall between its peak and the 120-minute reading?',
            options: [
              '15 mg/dL',
              '30 mg/dL',
              '40 mg/dL',
              '100 mg/dL'
            ],
            correctAnswer: 1,
            explanation: 'Subject B peaked at 260 mg/dL (60 minutes) and was at 230 mg/dL at 120 minutes, a fall of 30 mg/dL. Subtracting from the 245 mg/dL reading or from the fasting value gives the other numbers.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s4-thyroid',
      type: 'text' as const,
      content: `
### Data set 2: reading the signal and the variable together

Measuring **both** the regulated variable and the signal that controls it tells you where a loop is broken, because negative feedback links them. For the glucose loop, measure blood glucose (the variable) and insulin (the signal) after an overnight fast and after a meal.

| Pattern | Interpretation | Reasoning |
|---|---|---|
| Glucose normal, insulin normal | Healthy loop | Signal and variable in balance |
| Glucose **high**, insulin **low** | Signal missing (beta cells failing, as in type 1 diabetes) | The variable is out of range, but the signal that should correct it is absent |
| Glucose **high**, insulin **high** | Target cells unresponsive (insulin resistance, as in type 2 diabetes) | The signal is being sent, but the effectors do not act on it |
| Glucose **low**, insulin **high** | Signal uncontrolled (for example, an insulin-secreting tumor) | The signal stays on even after the variable has been pushed below the set point |

**General rule:** ask whether the signal is doing what the loop *should* do given the variable. A missing signal points to the sensor or gland; a strong signal with no correction points to the effectors; a signal that stays on when it should be off points to an uncontrolled source.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Diagnose From the Hormone Pair
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Patient 1: fasting glucose high, insulin low',
            options: ['signal missing', 'target cells unresponsive', 'signal uncontrolled', 'healthy loop']
          },
          {
            label: 'Patient 2: fasting glucose high, insulin high',
            options: ['healthy loop', 'target cells unresponsive', 'signal missing', 'signal uncontrolled']
          },
          {
            label: 'Patient 3: fasting glucose low, insulin high',
            options: ['signal uncontrolled', 'signal missing', 'healthy loop', 'target cells unresponsive']
          }
        ],
        correctAnswers: ['signal missing', 'target cells unresponsive', 'signal uncontrolled'],
        hint1: 'High glucose should trigger insulin release. Is the insulin there?',
        hint2: 'If insulin is high but glucose is still high, the message is sent but not acted on.',
        hint3: 'Low glucose should switch insulin off; if insulin stays high, its source is not under control.',
        explanation: 'High glucose with low insulin means the signal is missing; high glucose with high insulin means the target cells do not respond; low glucose with high insulin means insulin is being released without control.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s6-frq',
      type: 'text' as const,
      content: `
### Worked FRQ: stomata, ABA and drought

**Scenario.** Researchers compared wild-type tomato plants with an ABA-deficient mutant (tomato mutants of this kind, such as *flacca*, wilt easily). They measured stomatal conductance, a measure of how open the stomata are, in well-watered plants and again after watering was stopped for 3 days. Each group had 10 plants. (Hypothetical data.)

| Group | Watered (mmol m⁻² s⁻¹) | After 3 days without water (mmol m⁻² s⁻¹) |
|---|---|---|
| Wild type | 400 | 120 |
| ABA-deficient mutant | 400 | 360 |

**(a) Identify the independent variable and the control group.**
*Answer:* The independent variable is plant genotype (and water treatment); the wild-type plants are the control for the mutant, and the well-watered measurements are the control for the drought treatment.

**(b) Calculate the percent change in stomatal conductance for each group.**
*Answer:* Wild type: (120 − 400) ÷ 400 × 100 = **−70%**. Mutant: (360 − 400) ÷ 400 × 100 = **−10%**.

**(c) Explain the difference between the groups using the feedback loop.**
*Answer:* In the wild type, drought raises ABA, which causes guard cells to lose turgor and close the stomata, reducing water loss: negative feedback. The mutant makes little ABA, so the signal is missing and the stomata stay mostly open.

**(d) Predict the result of spraying the mutant with ABA during the drought, and justify the prediction.**
*Answer:* Conductance in the mutant would fall toward the wild-type value, because its guard cells are normal and only the signal is missing; supplying ABA restores the loop.

**(e) State a null hypothesis for the experiment.**
*Answer:* There is no difference in the change in stomatal conductance between wild-type and ABA-deficient plants during drought.

> **AP Connection:** Part (d) is a classic "rescue" prediction. If adding back the missing signal restores the response, the defect is in the signal, not the effector. If it does not, the effector (here, the guard cells) must be altered.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s7-input',
      type: 'input-boxes' as const,
      content: `
### Calculate From the FRQ Data

1) Percent decrease in stomatal conductance for the wild type (number only):

2) Percent decrease for the ABA-deficient mutant (number only):

3) Difference, in mmol m⁻² s⁻¹, between the two groups after 3 days without water (number only):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '10', '240'],
        hint1: 'Wild type: (400 − 120) ÷ 400 × 100.',
        hint2: 'Mutant: (400 − 360) ÷ 400 × 100.',
        hint3: 'Subtract the wild-type drought value from the mutant drought value: 360 − 120.',
        explanation: 'The wild type fell 70% (400 to 120), the mutant fell only 10% (400 to 360), and the mutant\'s drought value is 240 mmol m⁻² s⁻¹ higher.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Exit Check — Experimental Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'In the stomata experiment, the mutant was sprayed with ABA during drought, and its stomatal conductance did not change. What does this result suggest?',
            options: [
              'It makes so much ABA that extra spray adds nothing',
              'Its guard cells are unable to respond to the ABA signal',
              'Drought has no effect on stomatal conductance in tomatoes',
              'Stomatal closure depends on light rather than on water'
            ],
            correctAnswer: 1,
            explanation: 'If supplying the signal fails to rescue the response, the defect lies in the effector, so the guard cells must be unable to respond to ABA. The wild-type data already show that drought lowers conductance.'
          },
          {
            question: 'Which change to the stomata experiment would most improve confidence in the conclusion that ABA causes stomatal closure?',
            options: [
              'Measuring only the wild-type plants so fewer variables are involved',
              'Using more plants per group and reporting variation within each group',
              'Watering the mutant plants more often than the wild-type plants',
              'Recording stomatal conductance once rather than before and after'
            ],
            correctAnswer: 1,
            explanation: 'Larger samples and a measure of variation, such as error bars, show whether the difference between groups is greater than chance variation. Dropping the mutant, treating groups differently or removing the baseline would weaken the comparison.'
          }
        ]
      }
    }
  ]
};
