export const psychBrainPart5Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p5-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 5 of 7 — Hemispheres, Plasticity and Brain Research Methods**

---

| Section |
|---------|
| Contralateral control and the corpus callosum |
| Split-brain research, step by step |
| Language areas and aphasia |
| Brain plasticity |
| How we study the brain: EEG, fMRI, case studies, lesioning |
| Reading brain-research data |

> 🔑 **Key Concept:** The two hemispheres look alike but **specialize**. Normally the **corpus callosum** shares information between them so instantly that we never notice. Cutting it, as in split-brain surgery, reveals what each side can do alone.

### Contralateral organization

Each hemisphere mainly controls and senses the **opposite** side of the body:
- The **left hemisphere** moves and feels the **right** hand, arm and leg.
- The **right hemisphere** moves and feels the **left** side.
- Vision works by **visual field**, not by eye. Whatever you see to the **left of your focus point** (with either eye) goes to the **right hemisphere**, and the right visual field goes to the left hemisphere.

### Hemispheric specialization

| Usually more active in the **left** hemisphere | Usually more active in the **right** hemisphere |
|---|---|
| Speaking and understanding language, for most people | Spatial relationships and visual patterns |
| Reading, writing and step-by-step analysis | Recognizing faces |
| Producing speech (Broca's area) | Perceiving emotion and tone of voice |

Specialization is a matter of degree. Both hemispheres work together on almost every task, and there is no evidence that people are "left-brained" or "right-brained" types.`
    },
    {
      id: 'biological-bases-brain-p5-s2-splitbrain',
      type: 'text' as const,
      content: `## Split-brain research

For some people with **severe epilepsy**, surgeons have cut the **corpus callosum** so seizures cannot spread from one hemisphere to the other. Roger Sperry and Michael Gazzaniga studied these **split-brain** patients by flashing information to just one visual field.

### Worked example: one trial, step by step

**Setup:** The patient stares at a dot in the center of a screen. A word flashes for a fraction of a second, too fast for the eyes to move.

| Step | Word flashed to the **right** visual field ("PEN") | Word flashed to the **left** visual field ("KEY") |
|---|---|---|
| 1. Which hemisphere receives it? | Left hemisphere | Right hemisphere |
| 2. "What did you see?" | Says "pen": the left hemisphere controls speech | Says "nothing": the speaking left hemisphere never saw it |
| 3. "Pick it out by touch with your left hand" | The left hand (run by the right hemisphere) gets no information; it guesses | The left hand finds the key, because the right hemisphere saw it |

**Conclusion:** both hemispheres perceive, but in most people only the **left** can put what it saw into **words**. The right hemisphere can still recognize and act on information. With an intact corpus callosum, the two sides would share the word instantly.

> 🔑 **AP Connection:** For split-brain questions, trace three links in order: **visual field → opposite hemisphere → can that hemisphere speak or control that hand?**`
    },
    {
      id: 'biological-bases-brain-p5-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Split Brain and Language** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A split-brain patient stares at a center dot while the word CUP flashes in his left visual field. He says he saw nothing, yet his left hand picks a cup out of a hidden pile. What best explains this?',
            options: [
              'The left hemisphere saw the word but could not move the hand',
              'The right hemisphere saw the word but cannot put it into speech',
              'Both hemispheres saw the word, but the memory faded too quickly',
              'The left hemisphere saw the word but forgot it before speaking'
            ],
            correctAnswer: 1,
            explanation: 'The left visual field projects to the right hemisphere, which controls the left hand but usually cannot produce speech. The speaking left hemisphere never received the word.'
          },
          {
            question: 'After a stroke, a man speaks fluently, but his sentences make little sense and he struggles to understand what others say. Damage is most likely in:',
            options: [
              'Broca\'s area in the left frontal lobe',
              'The motor cortex of the right hemisphere',
              'The corpus callosum joining the hemispheres',
              'Wernicke\'s area in the left temporal lobe'
            ],
            correctAnswer: 3,
            explanation: 'Wernicke\'s area handles language comprehension, so damage produces fluent but meaningless speech and poor understanding. Damage to Broca\'s area would make speech halting while comprehension stays mostly intact.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p5-s4-language-plasticity',
      type: 'text' as const,
      content: `## Language areas and aphasia

**Aphasia** is an impairment of language caused by brain damage. The two classic areas are both usually in the **left hemisphere**:

| Area | Location | Function | Damage produces |
|---|---|---|---|
| **Broca's area** | Left **frontal** lobe | Speech **production** | Slow, effortful, halting speech ("Walk… dog… park"); understanding is mostly intact |
| **Wernicke's area** | Left **temporal** lobe | Speech **comprehension** | Fluent but meaningless speech; poor understanding of others |

Memory aid: **B**roca = **B**roken speech output; **W**ernicke = **W**ord salad.

## Brain plasticity

**Brain plasticity** (neuroplasticity) is the brain's ability to **rewire itself**: to modify or create new connections throughout development and, often, to let one area take over the function of a damaged area.

| Example | What it shows |
|---|---|
| Children who have one hemisphere removed to stop severe seizures often regain speech and walking | Young brains can reassign major functions to the remaining hemisphere |
| Stroke patients who practice using a weakened arm regain some control | Repeated use strengthens new connections around the damage |
| In people who are blind from early life, the visual cortex becomes active during Braille reading | Unused areas can be recruited for other senses |
| Learning a skill such as juggling strengthens connections in areas that support it | Plasticity is not only for injury; experience reshapes the brain |

Plasticity is **greatest in childhood** but continues throughout life.`
    },
    {
      id: 'biological-bases-brain-p5-s5-recall',
      type: 'input-boxes' as const,
      content: `**Recall Practice — Hemispheres and Plasticity** ✍️`,
      exercise: {
        questions: [
          {
            question: 'The thick band of axons that connects the left and right cerebral hemispheres is the corpus ___.',
            answer: 'callosum',
            acceptableAnswers: ['corpus callosum'],
            explanation: 'Severing the corpus callosum creates a split brain, so information in one hemisphere can no longer reach the other directly.'
          },
          {
            question: 'Each hemisphere controls the opposite side of the body. This arrangement is called ___ organization.',
            answer: 'contralateral',
            acceptableAnswers: [],
            explanation: 'Contralateral means "opposite side": the left hemisphere controls the right side of the body and vice versa.'
          },
          {
            question: 'An impairment of language caused by brain damage, such as to Broca\'s or Wernicke\'s area, is called ___.',
            answer: 'aphasia',
            acceptableAnswers: [],
            explanation: 'Aphasia names language loss from brain damage; the type depends on which language area is affected.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p5-s6-methods',
      type: 'text' as const,
      content: `## How we study the brain

| Method | What it does | Strength | Limitation |
|---|---|---|---|
| **Case study** | In-depth study of one person, often after brain damage (Phineas Gage, split-brain patients) | Reveals rare effects no ethical experiment could create | One person; damage is uncontrolled; hard to generalize |
| **Lesioning** | Surgically destroying a small area of brain tissue, almost always in **animals**, to see what changes | Can show an area is **necessary** for a behavior; allows control | Ethical limits; animal results may not generalize to humans; nearby tissue may also be harmed |
| **EEG** (electroencephalogram) | Electrodes on the scalp record the brain's electrical activity | Excellent **timing** (milliseconds); used to identify **sleep stages** | Poor at locating **where** activity comes from |
| **fMRI** (functional MRI) | Tracks changes in **blood oxygen** to show which areas are more active during a task | Good at showing **where** activity happens | Slower timing; expensive; shows **correlation** between activity and a task, not cause |

### Reading brain-research data: a practice study

*Practice study (hypothetical):* 24 adult volunteers viewed photos of **angry** and **neutral** faces in an fMRI scanner. Researchers measured amygdala activity as the percent change in blood-oxygen signal.

| Condition | Mean amygdala signal change | Standard deviation |
|---|---|---|
| Angry faces | 0.42% | 0.10 |
| Neutral faces | 0.18% | 0.09 |

**Reading it like an AAQ:**
- **Difference in means:** 0.42 − 0.18 = **0.24** percentage points. On average, angry faces produced more amygdala activity than neutral faces.
- **Spread:** the standard deviations are small compared with the difference, so the two conditions overlap little.
- **What it supports:** the amygdala is **associated** with processing threat.
- **What it does not show:** that the amygdala **causes** fear. fMRI shows activity that accompanies a task; to test necessity you need lesion or damage evidence.
- **Generalizability:** 24 adult volunteers is a small, self-selected sample; results may not extend to children or to other populations.`
    },
    {
      id: 'biological-bases-brain-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Methods and Plasticity** 🔬`,
      exercise: {
        questions: [
          {
            question: 'A researcher wants to know exactly when, to the millisecond, the brain responds to an unexpected sound. Which approach fits best?',
            options: [
              'Lesioning the auditory cortex in rats',
              'Recording EEG from scalp electrodes',
              'Studying one patient with temporal damage',
              'Scanning blood-oxygen changes with fMRI'
            ],
            correctAnswer: 1,
            explanation: 'EEG records electrical activity with millisecond timing, ideal for when a response happens. fMRI is better at showing where activity occurs, and lesion or case data show what is lost, not timing.'
          },
          {
            question: 'An fMRI study finds that prefrontal activity is higher when people resist a tempting snack. Which conclusion is best supported?',
            options: [
              'Prefrontal activity directly causes snack refusal',
              'Self-control permanently enlarges the prefrontal cortex',
              'The amygdala must shut down before snacks are refused',
              'Greater prefrontal activity accompanies self-control'
            ],
            correctAnswer: 3,
            explanation: 'fMRI shows that activity accompanies a behavior, which supports an association, not cause and effect. Claims about causing refusal or permanent enlargement go beyond what the scan measured.'
          },
          {
            question: 'At age 5, a girl has most of one hemisphere removed to stop severe seizures. Years later she walks, talks and does well in school. This outcome best illustrates:',
            options: [
              'Brain plasticity',
              'Contralateral control',
              'Hemispheric specialization',
              'Split-brain disconnection'
            ],
            correctAnswer: 0,
            explanation: 'Her remaining hemisphere took over functions the removed side once handled, which is brain plasticity, strongest in childhood. Specialization and contralateral control describe the normal division of labor, not recovery.'
          }
        ]
      }
    }
  ]
}
