export const mcatBioBasisBehaviorPart3Data = {
  topicSlug: 'mcat-biological-basis-behavior-mcat',
  sections: [
    {
      id: 'bbb3-intro',
      type: 'text' as const,
      content: `# Biological Basis of Behavior

**Part 3 of 5 — Brain Regions & Their Functions**

### Organizing the Brain: Hindbrain, Midbrain, Forebrain

| Division | Structures | Functions |
|----------|------------|-----------|
| **Hindbrain** | Medulla, pons, cerebellum | Vital reflexes (HR, breathing), coordination, balance |
| **Midbrain** | Tectum, tegmentum | Sensorimotor reflexes, arousal (reticular formation) |
| **Forebrain** | Cortex, thalamus, hypothalamus, limbic system | Cognition, emotion, homeostasis |

### Cortical Lobes

| Lobe | Function |
|------|----------|
| **Frontal** | Executive function, planning, motor cortex, **Broca's area** (speech production), personality |
| **Parietal** | Somatosensory cortex, spatial processing |
| **Temporal** | Hearing, **Wernicke's area** (language comprehension), memory (hippocampus nearby) |
| **Occipital** | Vision (V1) |

### Key Subcortical & Limbic Structures

| Structure | Function |
|-----------|----------|
| **Thalamus** | Relay station for sensory info (except smell) |
| **Hypothalamus** | Homeostasis: hunger, thirst, temperature, the "4 F's"; controls pituitary |
| **Amygdala** | Fear, emotion, aggression |
| **Hippocampus** | Forming new explicit (declarative) memories |
| **Basal ganglia** | Movement initiation, procedural learning |
| **Reticular formation** | Arousal, sleep–wake, alertness |

### Language: Broca vs. Wernicke

- **Broca's aphasia** (frontal): non-fluent, effortful speech; comprehension intact ("broken" speech).
- **Wernicke's aphasia** (temporal): fluent but meaningless speech; impaired comprehension.

### Methods to Study the Brain

- **EEG** (electrical activity, great time resolution), **fMRI/PET** (blood flow/metabolism, spatial), **lesion studies**, **CT/MRI** (structure).`
    },
    {
      id: 'bbb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Brain Regions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A stroke patient speaks fluently but produces grammatically jumbled, meaningless sentences and cannot understand speech. The damaged area is most likely:`,
            options: [`Wernicke's area (temporal lobe)`, `Broca's area (frontal lobe)`, `The cerebellum`, `The occipital lobe`],
            correctAnswer: 0,
            explanation: `Wernicke's aphasia features FLUENT but meaningless ("word salad") speech and IMPAIRED comprehension, localizing to Wernicke's area in the temporal lobe. Broca's aphasia is the opposite: halting, effortful speech with relatively preserved comprehension.`
          },
          {
            question: `Bilateral damage to the hippocampus would most directly impair the ability to:`,
            options: [`Form new long-term explicit memories`, `Coordinate balance and movement`, `Regulate body temperature`, `Process visual input`],
            correctAnswer: 0,
            explanation: `The hippocampus is essential for CONSOLIDATING new explicit (declarative) memories. Bilateral damage (as in patient H.M.) produces anterograde amnesia — an inability to form new conscious memories — while older memories and procedural learning are spared.`
          },
          {
            question: `A researcher wants to track the precise TIMING of cortical electrical responses to a stimulus, millisecond by millisecond. The best tool is:`,
            options: [`EEG`, `fMRI`, `CT scan`, `PET`],
            correctAnswer: 0,
            explanation: `EEG records electrical activity directly with excellent TEMPORAL resolution (milliseconds), ideal for timing of neural responses. fMRI and PET have good spatial but poor temporal resolution (they track slower blood-flow/metabolic signals), and CT shows structure, not activity.`
          }
        ]
      }
    },
    {
      id: 'bbb3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Brain Localization

<details>
<summary><b>Example 1: Localize a deficit from a lesion description</b></summary>

**Question:** A patient develops dramatic personality changes, poor planning, and impulsivity but normal sensation and movement. Which brain region is most implicated?

**Solution:**
1. Personality, planning, and impulse control are EXECUTIVE functions of the **frontal lobe** (prefrontal cortex). ✓
2. Intact sensation/movement argues against parietal or primary motor damage.

**Historical tie-in:** The Phineas Gage case (frontal damage → personality change) is the classic illustration tested on the MCAT.
</details>

<details>
<summary><b>Example 2: Match the method to the research question</b></summary>

**Question:** A study needs to map WHICH brain regions activate during a memory task with good spatial detail and no radiation. Which imaging method fits, and why not EEG or PET?

**Solution:**
1. Good SPATIAL resolution, no radiation → **fMRI** (tracks blood-oxygen-level-dependent signal). ✓
2. EEG has poor spatial resolution; PET requires a radioactive tracer. ✓

**Key trade-off:** EEG = temporal precision; fMRI = spatial precision. Choose by which dimension the question emphasizes.
</details>

<details>
<summary><b>Example 3: Predict the effect of hypothalamic damage</b></summary>

**Question:** Damage to the lateral hypothalamus vs. the ventromedial hypothalamus produces opposite eating behaviors. Predict each.

**Solution:**
1. **Lateral hypothalamus** = the "hunger center"; damage → reduced eating (aphagia). ✓
2. **Ventromedial hypothalamus** = the "satiety center"; damage → overeating (hyperphagia, obesity). ✓

**Connection:** The hypothalamus governs homeostatic drives (hunger, thirst, temperature) and links the nervous system to the endocrine system via the pituitary.
</details>`
    },
    {
      id: 'bbb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Hindbrain = vital reflexes/coordination; midbrain = arousal/reflexes; forebrain = cognition/emotion/homeostasis.
- Frontal (executive, motor, Broca's), parietal (somatosensory), temporal (hearing, Wernicke's), occipital (vision).
- Hypothalamus = homeostasis + pituitary; amygdala = fear; hippocampus = new explicit memory; thalamus = sensory relay.
- Broca's aphasia = non-fluent/comprehension intact; Wernicke's = fluent but meaningless/comprehension impaired. EEG = timing, fMRI = location.`
    }
  ]
};
