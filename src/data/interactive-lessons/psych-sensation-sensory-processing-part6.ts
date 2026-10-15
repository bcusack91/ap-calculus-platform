export const psychSensationPart6Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 6 of 7 — Data Analysis and AP Exam Practice**

> 🔑 **Key Concept:** Sensation is measured, not guessed. Exam items hand you detection percentages, JND values or ratings over time and ask what they show. The two free-response questions, the **Article Analysis Question (AAQ)** and the **Evidence-Based Question (EBQ)**, ask you to read study summaries and reason from them.

### Data skill 1: reading thresholds from detection data

**Practice study (hypothetical).** Researchers played a high-pitched tone at five intensities to 30 adults aged 18–25 and 30 adults aged 65–75. Each person heard each intensity 20 times; the table shows the mean percent of trials detected.

| Intensity (dB) | Ages 18–25 | Ages 65–75 |
|---|---|---|
| 10 | 20% | 0% |
| 20 | 50% | 10% |
| 30 | 85% | 30% |
| 40 | 100% | 50% |
| 50 | 100% | 80% |

1. Absolute threshold = lowest intensity detected at least 50% of the time.
2. Younger group: **20 dB**. Older group: **40 dB**.
3. A **higher** threshold means **lower** sensitivity: the older group needs a louder tone.
4. Link to content: age-related sensorineural loss affects high pitches first, so this pattern is what Part 4 predicts.

### Data skill 2: testing Weber's law

**Practice data.** One participant's JND for lifted weights at four starting weights:

| Starting weight | JND | JND ÷ starting weight |
|---|---|---|
| 50 g | 1 g | 0.02 |
| 100 g | 2 g | 0.02 |
| 200 g | 4 g | 0.02 |
| 400 g | 8 g | 0.02 |

The JND grows, but the **ratio stays constant**, which is exactly what Weber's law predicts. If the JND had stayed at 2 g for every starting weight, the data would **contradict** Weber's law.

### Data skill 3: spotting adaptation

**Practice data.** Volunteers rated the strength of a constant room odor (0 = none, 10 = very strong): 9 at the start, 6 after 2 minutes, 3 after 5 minutes, 2 after 10 minutes. The odor never changed, but ratings fell: a textbook **sensory adaptation** curve.
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s2-data',
      type: 'multiple-choice' as const,
      content: `
**Data Check — Thresholds, JND and Adaptation** 📊

Use the practice data above.
      `,
      exercise: {
        questions: [
          {
            question: 'In the hearing practice study, which statement correctly interprets the difference between the two age groups?',
            options: [
              'The older group has a higher threshold and so lower sensitivity',
              'The older group has a lower threshold and so lower sensitivity',
              'The older group has a higher threshold and so higher sensitivity',
              'The older group has the same threshold but a smaller JND'
            ],
            correctAnswer: 0,
            explanation: 'The older group needs 40 dB rather than 20 dB to reach 50% detection, so its threshold is higher; needing more stimulation means lower sensitivity. Higher thresholds never mean greater sensitivity.'
          },
          {
            question: 'A second participant\'s JNDs for weights of 50, 100, 200 and 400 g are 3, 6, 12 and 24 g. What do these data show?',
            options: [
              'They contradict Weber\'s law because the JND keeps changing',
              'They fit Weber\'s law with a fraction of 0.06',
              'They show a fraction that falls as the weight rises',
              'They show sensory adaptation to repeated lifting'
            ],
            correctAnswer: 1,
            explanation: 'Each JND divided by its starting weight is 0.06, a constant proportion, which is what Weber\'s law predicts. A changing JND is expected under the law; it is the ratio that must stay fixed.'
          },
          {
            question: 'In the odor practice data, ratings fall from 9 to 2 over ten minutes while the odor stays the same. Which conclusion is best supported?',
            options: [
              'The odor fell below the absolute threshold',
              'Their sensitivity to the odor declined',
              'The odor molecules broke down in the room air',
              'Their JND for the odor grew larger over time'
            ],
            correctAnswer: 1,
            explanation: 'With the stimulus held constant, falling ratings show diminished sensitivity over time, which is sensory adaptation. The ratings never reach zero, so the odor did not drop below threshold, and the study says the odor itself did not change.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s3-aaq',
      type: 'text' as const,
      content: `
### 📝 AAQ Walk-Through (7 points, 6 parts)

**Practice study summary (hypothetical, written for this lesson).** Researchers tested whether distraction increases tolerance for pain. They recruited 80 undergraduate volunteers, aged 18–22, from one university's introductory psychology course in exchange for course credit. Participants were **randomly assigned** to one of two conditions. In the **distraction** condition, participants played a demanding video game; in the **control** condition, they sat quietly. All participants placed one hand in ice water (about 3 °C). **Pain tolerance** was measured as the number of seconds before the participant removed the hand, with a maximum of 180 seconds. Before starting, all participants signed **informed consent** forms explaining the procedure, and they were told they could remove their hand and stop at any time. Everyone was **debriefed** afterward. Results: the distraction group kept their hands in the water for a mean of 112 seconds, compared with 68 seconds for the control group, and the difference was statistically significant. The researchers concluded that the results are consistent with **gate control theory**, which proposes that messages from the brain can close a spinal "gate" to pain.

| AAQ part | What it asks | Model response for this study |
|---|---|---|
| **A** (1 pt) | Identify the research method | An **experiment**: the researchers manipulated distraction and randomly assigned participants to conditions. |
| **B** (1 pt) | State the operational definition of a variable | Pain tolerance was defined as the **number of seconds**, up to 180, before the participant removed the hand from 3 °C water. |
| **C** (1 pt) | Describe what a statistic shows | The mean of 112 seconds versus 68 seconds shows that, on average, distracted participants tolerated the cold water about 44 seconds longer than controls. |
| **D** (1 pt) | Identify an ethical guideline and how it was applied | **Informed consent** and the **right to withdraw**: participants signed consent forms describing the procedure and were told they could remove their hand at any time. |
| **E** (1 pt) | Explain the extent to which findings generalize, using the study | Limited: all 80 participants were 18–22-year-old students from one university's psychology course, so results may not generalize to older adults, children or people in chronic pain. |
| **F** (2 pts) | Explain how a finding supports or refutes the hypothesis | **Supports**: the distraction group's longer mean tolerance fits the claim that brain activity (attention on the game) can close the pain gate, so fewer pain signals are felt. |

**Scoring habits that earn the points:**
- Part A: name the method **and** point to the feature that makes it so (manipulation plus random assignment).
- Part B: give a measurable definition with units, not "how much pain they could take."
- Part E: use a specific detail from the summary (age range, one university, course credit), not "the sample was small."
- Part F: state the direction (supports or refutes) and connect the specific number to the hypothesis.
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s4-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Pain Tolerance Study** 🎯

Refer to the practice study summary above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which response would best earn the point for explaining the extent to which the findings generalize?',
            options: [
              'The findings generalize well because the sample was randomly assigned',
              'The findings are limited because all participants were young students',
              'The findings generalize to everyone because the study was an experiment',
              'The findings are limited because only one dependent variable was measured'
            ],
            correctAnswer: 1,
            explanation: 'Generalizability depends on who was sampled, and this study used only 18–22-year-old students from one university, so results may not extend to other ages or groups. Random assignment supports cause-and-effect claims, not generalization to other populations.'
          },
          {
            question: 'A student writes: "The researchers followed ethical guidelines by debriefing participants." Why might this response still fall short of the full ethics point?',
            options: [
              'Debriefing is not a guideline that psychologists follow',
              'It omits how the guideline was applied',
              'Only informed consent can earn the ethics point',
              'Ethics responses must cite the specific APA rule number'
            ],
            correctAnswer: 1,
            explanation: 'The ethics part asks you to identify a guideline and describe how the researchers applied it, such as debriefing everyone after the session. Debriefing is a valid guideline, and no rule number is required.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s5-ebq',
      type: 'text' as const,
      content: `
### 📚 EBQ Mini-Set (7 points, 3 parts)

**Prompt:** Develop and justify an argument about whether what we sense depends on the brain and not only on the sense organs.

**Source 1 (practice summary, hypothetical).** In a survey of 50 adults who had lost an arm or a leg, 40 reported feeling sensations, including pain, in the missing limb at least once a week a year after surgery.

**Source 2 (practice case, hypothetical).** A patient with damage to her left occipital lobe reports seeing nothing in her right visual field. When asked to guess where a light appears in that field, she points to the correct location on 80% of trials, far above the chance rate.

**Source 3 (practice study, hypothetical).** Among 120 adults, the number of taste buds counted on the tongue correlated positively with ratings of bitterness for black coffee (r = +0.58).

| EBQ part | Points | What you do | Model response |
|---|---|---|---|
| **A** | 1 | Propose a specific, defensible claim | What we sense depends heavily on the brain, which can create sensations with no input and process input without awareness. |
| **B(i)** | 1 | Cite evidence from one source | According to Source 1, 40 of 50 amputees still felt sensations, including pain, in a limb that was gone (Source 1). |
| **B(ii)** | 2 | Explain how it supports the claim, using a psychological concept | This is **phantom limb** sensation: with no receptors left in the limb, the brain itself generates the pain, showing that pain is processed in the brain as well as the body. |
| **C(i)** | 1 | Cite evidence from a **different** source | In Source 2, a patient with occipital damage located lights she said she could not see on 80% of trials (Source 2). |
| **C(ii)** | 2 | Explain using a **different** concept than B(ii) | This is **blindsight**: her eyes still transduce light, but damage to the brain's visual areas removes conscious seeing, so what she experiences depends on the brain, not just the eyes. |

**Notes on the mini-set:**
- B and C must use **different sources** and **different concepts**. Using phantom limb twice would lose the C(ii) points.
- Source 3 fits a qualified claim: receptor differences (supertasters) also shape sensation. A strong writer can say the brain matters **in addition to**, not instead of, the sense organs.
- Cite by source number, as in "(Source 1)" or "According to Source 2."
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Build the EBQ Response** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Source 1 is best explained with the concept of _____.',
            options: ['phantom limb', 'synesthesia', 'sensory adaptation', 'blindsight']
          },
          {
            label: 'Source 2 is best explained with the concept of _____.',
            options: ['prosopagnosia', 'blindsight', 'phantom limb', 'accommodation']
          },
          {
            label: 'Source 3 is best explained with the concept of _____.',
            options: ['oleogustus', 'nontasters', 'supertasters', 'sensory interaction']
          },
          {
            label: 'Parts B and C of an EBQ must use evidence from _____.',
            options: ['two different sources', 'the same source twice', 'outside research', 'the prompt only']
          }
        ],
        correctAnswers: ['phantom limb', 'blindsight', 'supertasters', 'two different sources'],
        hint1: 'Sensation in a missing body part has its own name.',
        hint2: 'Responding to visual stimuli without conscious sight follows damage to visual brain areas.',
        hint3: 'More taste buds and stronger bitterness ratings describe one group of tasters.',
        explanation: 'Source 1 shows phantom limb sensation, Source 2 shows blindsight, and Source 3 shows that people with more taste receptors (supertasters) taste bitterness more strongly. EBQ parts B and C must draw on two different sources.'
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s7-ebq-check',
      type: 'multiple-choice' as const,
      content: `
**EBQ Practice — Judge the Response** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim would best earn the Part A point for this EBQ prompt?',
            options: [
              'Sensation is a very interesting and complex topic',
              'The brain shapes what we sense, not only the sense organs',
              'Some people lose limbs and some have occipital damage',
              'Source 1, Source 2 and Source 3 are all about senses'
            ],
            correctAnswer: 1,
            explanation: 'A claim must take a specific, defensible position that answers the prompt. Restating topics or summarizing sources does not take a position.'
          },
          {
            question: 'A student claims that both the sense organs and the brain shape what we sense, uses Source 3 in Part C, and writes: "This shows that people with more taste buds find coffee more bitter." What does the response still need to earn the explanation points?',
            options: [
              'A second statistic copied from the source',
              'A concept tied to the argument',
              'A citation of a published study by name',
              'A restatement of the claim from Part A'
            ],
            correctAnswer: 1,
            explanation: 'The student has stated the evidence but has not explained it with a concept. Naming supertasters and explaining how receptor number shapes taste intensity, and how that relates to the claim, completes the reasoning.'
          }
        ]
      }
    }
  ]
}
