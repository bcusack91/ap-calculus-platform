export const psychSensationPart1Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 1 of 7 — Thresholds, Weber's Law, and Adaptation**

> 🔑 **Key Concept:** Every sense starts with the same job. A receptor detects a stimulus strong enough to meet a **threshold** and converts that physical energy into neural signals (**transduction**). Thresholds, Weber's law and adaptation describe *how much* stimulation it takes to notice something, or to notice that it changed.

**Sensation** is the process of detecting information from the environment that meets a certain threshold and transducing it into neural messages the brain can process. **Perception** is the brain's organization and interpretation of those messages; perception takes over from here (see Perception & Attention). This topic stays at the sensation end of the chain.

### Transduction: the shared first step

| Sense | Physical energy | Receptor that transduces it | Where the receptor sits |
|---|---|---|---|
| Vision | Light (electromagnetic energy) | Rods and cones | Retina, at the back of the eye |
| Hearing | Sound waves (moving air molecules) | Hair cells | Inside the cochlea of the inner ear |
| Smell | Airborne chemical molecules | Olfactory receptor cells | Top of the nasal cavity |
| Taste | Chemicals dissolved in saliva | Taste receptor cells | Taste buds |
| Touch and pain | Pressure, temperature, tissue damage | Receptors in the skin and body tissue | Skin and body tissue |
| Balance (vestibular) | Head rotation and tilt | Hair cells | Semicircular canals of the inner ear |

Two points the exam likes:
- Transduction happens **at the receptor**, not in the cortex. A damaged receptor means no signal, however healthy the brain is.
- Every sense uses the same neural "currency" (action potentials). What makes a signal feel like light or sound is **where it is sent** in the brain, not the signal itself.

### The absolute threshold

The **absolute threshold** is the minimum intensity at which a stimulus is detected **at least 50% of the time**. Why use 50% rather than "the first time it is noticed"? Detection is not an on/off switch. Near the threshold, the same faint stimulus is sometimes detected and sometimes not, because neural activity and attention fluctuate from moment to moment. So researchers present a faint stimulus many times at several intensities and record the percentage of "yes" responses.

**Worked example (practice data).** A listener hears a tone at five intensities, 40 trials each.

| Tone intensity (practice units) | Percent of trials detected |
|---|---|
| 1 | 5% |
| 2 | 20% |
| 3 | 50% |
| 4 | 80% |
| 5 | 98% |

1. Find the lowest intensity where detection reaches 50%: intensity 3.
2. That intensity is the absolute threshold for this listener under these conditions.
3. Notice that intensity 2 was still detected on some trials. A stimulus below threshold is not "undetectable"; it is detected **less than half** the time.

A stimulus below the absolute threshold is sometimes called **subliminal**. Lab studies find that such stimuli can produce brief, small effects, but there is no good evidence that hidden messages produce lasting changes in what people buy or believe.
      `
    },
    {
      id: 'sensation-sensory-processing-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Thresholds and Transduction** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a practice hearing test, a listener reports a 10 dB tone on 30% of trials, a 12 dB tone on 50% of trials, a 14 dB tone on 75% of trials, and a 16 dB tone on every trial. What is the absolute threshold?',
            options: [
              '10 dB, the quietest tone the listener reported at all',
              '12 dB, the tone the listener reported on half of the trials',
              '14 dB, the tone the listener reported on most trials',
              '16 dB, the tone the listener reported on all trials'
            ],
            correctAnswer: 1,
            explanation: 'The absolute threshold is the lowest intensity detected at least 50% of the time, which is 12 dB here. The quietest tone ever reported and the tone reported on every trial are the two most common wrong definitions.'
          },
          {
            question: 'A cochlear implant picks up sound with a microphone and stimulates the auditory nerve with electrical pulses, doing the work that damaged receptor cells in the inner ear can no longer do. Which step of sensation is the implant replacing?',
            options: [
              'Perception of sound patterns as speech and music',
              'Adaptation of hearing to constant noise',
              'Transduction of sound into neural signals',
              'Localization of sound by comparing ears'
            ],
            correctAnswer: 2,
            explanation: 'The damaged receptors are the cells that turn sound energy into neural signals, so the implant takes over transduction. Perception, adaptation and localization depend on later steps that the implant does not replace.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p1-s3-weber',
      type: 'text' as const,
      content: `
### ⚖️ Difference Thresholds and Weber's Law

The **difference threshold**, or **just-noticeable difference (JND)**, is the minimum difference between two stimuli that a person detects **50% of the time**. The absolute threshold asks "is anything there?"; the difference threshold asks "did it change?"

**Weber's law** says that to be noticed, the difference between two stimuli must be a roughly **constant proportion** of the original stimulus, not a constant amount:

$$\\dfrac{\\Delta I}{I} = k$$

where $I$ is the starting intensity, $\\Delta I$ is the JND, and $k$ is the **Weber fraction**, a constant for a given kind of stimulus.

**Worked example (practice values).** Suppose a person's Weber fraction for lifted weight is 0.02 (2%).

| Starting weight | JND = 0.02 × starting weight | Meaning |
|---|---|---|
| 100 g | 2 g | 102 g feels heavier about half the time |
| 500 g | 10 g | A 2 g change now goes unnoticed |
| 2,000 g | 40 g | The bigger the base, the bigger the change needed |

The same idea explains why one extra candle is obvious in a dark room lit by two candles but invisible on a cake with 60 candles, and why a 1 dollar price rise feels large on a 3 dollar coffee but trivial on a 900 dollar laptop.

**How exact is it?** Weber fractions differ from one sense to another and from person to person, and the law fits best in the middle range of intensities, less well at the extremes. On the exam you will be given any fraction you need; what you must know is the **proportional** logic.

### Sensory adaptation

**Sensory adaptation** is diminished sensitivity to an **unchanging** stimulus. Receptors and early neurons fire less when stimulation stays constant, so after a while you stop noticing your watch, the hum of a refrigerator, or the smell of your own house. Adaptation frees the system to respond to **change**, which is usually what matters for survival.

- Vision resists adaptation because the eyes make constant tiny movements, so the image keeps shifting across receptors. In lab setups that hold an image perfectly still on the retina, the image fades within seconds.
- Adaptation is **sensory**: it happens in the receptors and early pathway, and you cannot will it away. **Habituation** (Unit 3) is a learned decrease in a *behavioral* response to a repeated stimulus.
      `
    },
    {
      id: 'sensation-sensory-processing-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Practice Calculations and Terms** ✍️

Use Weber's law and the definitions above. Type a number or a single term.
      `,
      exercise: {
        questions: [
          {
            question: 'Practice problem: a person\'s Weber fraction for lifted weight is 0.02. How many grams must be added to a 300 g weight for the change to be noticed 50% of the time?',
            answer: '6',
            acceptableAnswers: ['6 g', '6 grams', '6g', 'six'],
            explanation: 'JND = 0.02 × 300 g = 6 g. The required change grows in proportion to the starting weight.'
          },
          {
            question: 'Practice problem: a person can just notice the change from 40 lit candles to 42. By Weber\'s law, how many candles must be added to 80 lit candles for a just-noticeable difference?',
            answer: '4',
            acceptableAnswers: ['4 candles', 'four', 'four candles'],
            explanation: 'The fraction is 2/40 = 0.05, and 0.05 × 80 = 4 candles. Doubling the base doubles the change needed.'
          },
          {
            question: 'After ten minutes in a pool, the water no longer feels cold, although its temperature has not changed. What is this process called?',
            answer: 'sensory adaptation',
            acceptableAnswers: ['adaptation', 'sensory adaption'],
            explanation: 'Constant stimulation lowers receptor responding, so an unchanging temperature stops being noticed. That is sensory adaptation.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p1-s5-interaction',
      type: 'text' as const,
      content: `
### 🔗 Senses Working Together: Sensory Interaction and Synesthesia

The senses are not sealed off from one another. **Sensory interaction** is the constant process by which one sense influences another. It happens in everyone, all the time.

| Example | Senses involved | What happens |
|---|---|---|
| **Flavor** | Smell + taste | With a pinched nose, an apple and a raw potato can be hard to tell apart; smell supplies much of what we call "taste" |
| **A head cold** | Smell + taste | Blocked nasal passages make food taste bland |
| **Lip reading in noise** | Vision + hearing | Watching a speaker's mouth makes speech easier to follow at a loud party |
| **The McGurk effect** | Vision + hearing | Seeing lips form "ga" while hearing "ba" leads many people to hear "da" |
| **Plate color** | Vision + taste | The color of a food can change how sweet or how intense people rate it |

**Synesthesia** is different. In synesthesia, stimulation of one sensory system produces an **automatic, consistent experience in another** system. A person with grapheme–color synesthesia sees the letter A as red every time; others "hear" colors or "taste" words. It occurs in a minority of people, and each person's pairings stay stable across years.

| | Sensory interaction | Synesthesia |
|---|---|---|
| Who | Everyone | A minority of people |
| What | One sense shapes the experience of another stimulus | One sense triggers an extra experience in another sense |
| Example | Smell changes how food tastes | The number 7 is always seen as green |

> 🔑 **AP Connection:** If a scenario describes two senses combining to change **one** experience (flavor, speech), think sensory interaction. If it describes one stimulus producing a **second, cross-sense** experience for a particular person, think synesthesia.
      `
    },
    {
      id: 'sensation-sensory-processing-p1-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A hearing test finds the softest tone a child reports on half of the trials. This is the child\'s _____.',
            options: ['absolute threshold', 'difference threshold', 'sensory adaptation', 'sensory interaction']
          },
          {
            label: 'A baker can tell that a second batch of dough is sweeter only when it has at least 5% more sugar. This is the baker\'s _____.',
            options: ['absolute threshold', 'difference threshold', 'sensory adaptation', 'synesthesia']
          },
          {
            label: 'With a stuffy nose, Dev says his favorite curry tastes like nothing. This illustrates _____.',
            options: ['synesthesia', 'sensory adaptation', 'sensory interaction', 'absolute threshold']
          },
          {
            label: 'For Lena, hearing a trumpet always brings a flash of orange. This illustrates _____.',
            options: ['sensory interaction', 'synesthesia', 'difference threshold', 'sensory adaptation']
          }
        ],
        correctAnswers: ['absolute threshold', 'difference threshold', 'sensory interaction', 'synesthesia'],
        hint1: 'Detecting something from nothing is one threshold; detecting a change is the other.',
        hint2: 'Two senses blending into one experience is something everyone has.',
        hint3: 'One sense automatically triggering a second, cross-sense experience happens only for some people.',
        explanation: 'The softest tone heard half the time is an absolute threshold; the smallest detectable sugar change is a difference threshold; smell shaping taste is sensory interaction; and a sound consistently producing a color is synesthesia.'
      }
    },
    {
      id: 'sensation-sensory-processing-p1-s7-compare',
      type: 'text' as const,
      content: `
### 🧭 Keeping the Part 1 Terms Apart

| Term | Question it answers | Measured or seen as | Quick example |
|---|---|---|---|
| **Absolute threshold** | Can the stimulus be detected at all? | Lowest intensity detected at least 50% of the time | Faintest tone heard on half of trials |
| **Difference threshold (JND)** | Can a change be detected? | Change detected 50% of the time | Smallest added weight that feels heavier |
| **Weber's law** | How does the JND scale? | JND ÷ starting intensity ≈ constant | A bigger base needs a bigger change |
| **Sensory adaptation** | Why does a constant stimulus fade? | Declining response over time | Not noticing your watch |
| **Sensory interaction** | How do senses affect one another? | One sense shapes another's experience | Smell shaping flavor |
| **Synesthesia** | Why do some people "see" sounds? | One sense triggers another | Letters seen in colors |

> 🔑 **AP Connection:** Many wrong answers swap "absolute" and "difference" threshold. Ask whether the scenario starts from **nothing** (absolute) or from **an existing stimulus** that changes (difference).
      `
    },
    {
      id: 'sensation-sensory-processing-p1-s8-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Detection and Change** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A cook can just taste the difference when 1 g of salt is added to soup that already contains 10 g. According to Weber\'s law, about how much salt must be added to soup that already contains 40 g for the change to be just noticeable?',
            options: [
              '1 g',
              '4 g',
              '8 g',
              '2 g'
            ],
            correctAnswer: 1,
            explanation: 'The Weber fraction here is 1/10 = 0.10, so the JND for 40 g is 0.10 × 40 = 4 g. The change must stay a constant proportion of the base, not a constant amount.'
          },
          {
            question: 'An hour after putting on a new watch, Leo no longer feels it on his wrist, yet he feels it immediately when the band slips. Which concept best explains this pattern?',
            options: [
              'A raised threshold for all touch',
              'Sensory adaptation to a constant stimulus',
              'A raised difference threshold for weight',
              'Damaged touch receptors in the wrist'
            ],
            correctAnswer: 1,
            explanation: 'The unchanging pressure of the watch stops being registered, but a change in stimulation is noticed at once, which is what sensory adaptation predicts. The receptors still work, since the slipping band is felt at once.'
          },
          {
            question: 'In a practice taste demonstration, students wearing nose clips cannot tell cherry jelly beans from grape ones, but they name the flavor at once when the clips come off. Which concept does the demonstration show?',
            options: [
              'Synesthesia',
              'Sensory interaction',
              'Sensory adaptation',
              'Difference threshold'
            ],
            correctAnswer: 1,
            explanation: 'Taste and smell combine to create flavor, so blocking smell mutes the fruit flavors; that is sensory interaction. Synesthesia would be one sense triggering an extra experience in another, which is not what happens here.'
          }
        ]
      }
    }
  ]
}
