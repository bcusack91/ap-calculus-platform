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
| **Hindbrain** | Medulla, pons | Vital reflexes (heart rate, breathing); pons relays signals to the cerebellum |
| **Hindbrain** | Cerebellum | Coordination, balance, fine-tuning of movement, motor learning |
| **Midbrain** | Tectum, tegmentum | Sensorimotor reflexes, arousal (reticular formation) |
| **Forebrain** | Cortex, thalamus, hypothalamus, limbic system | Cognition, emotion, homeostasis |

### Cortical Lobes

| Lobe | Function |
|------|----------|
| **Frontal** | Executive function, planning, motor cortex, **Broca's area** (speech production), personality (Phineas Gage: frontal damage → personality change) |
| **Parietal** | Somatosensory cortex, spatial processing |
| **Temporal** | Hearing, **Wernicke's area** (language comprehension), memory (hippocampus nearby) |
| **Occipital** | Vision (V1) |

### Key Subcortical & Limbic Structures

| Structure | Function |
|-----------|----------|
| **Thalamus** | Relay station for sensory info (except smell) |
| **Hypothalamus** | Homeostasis: hunger, thirst, temperature, the "4 F's"; controls pituitary |
| **Lateral vs. ventromedial hypothalamus** | Lateral = "hunger center"; ventromedial = "satiety center" |
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
      id: 'bbb3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Brain Localization

**Problem 1.** A patient develops dramatic personality changes, poor planning, and impulsivity, but sensation and movement are normal.

- **(a)** What kind of functions are planning and impulse control?
- **(b)** Which brain region is most implicated?
- **(c)** What do the normal sensation and movement argue against?
- **(d)** Which classic case illustrates this pattern?

**(a) Executive functions.** Planning and impulse control are EXECUTIVE functions; personality and social conduct also depend on the prefrontal cortex.

**(b) Frontal lobe.** Executive functions belong to the **frontal lobe**, especially the prefrontal cortex.

**(c) Other areas spared.** Intact sensation and movement argue against parietal (somatosensory) or primary motor damage.

**(d) Phineas Gage.** His frontal damage followed by personality change is the classic illustration tested on the MCAT.

**Problem 2.** Damage to the lateral hypothalamus and damage to the ventromedial hypothalamus produce opposite eating behaviors.

- **(a)** What does lateral hypothalamic damage do to eating?
- **(b)** What does ventromedial hypothalamic damage do to eating?
- **(c)** What broader role of the hypothalamus do these findings illustrate?

**(a) Aphagia.** The lateral hypothalamus is the "hunger center"; damage reduces eating (aphagia).

**(b) Hyperphagia.** The ventromedial hypothalamus is the "satiety center"; damage causes overeating (hyperphagia) and obesity.

**(c) Homeostatic drives.** The hypothalamus governs hunger, thirst, and temperature, and links the nervous system to the endocrine system via the pituitary.

**Problem 3.** A study needs to map WHICH brain regions activate during a memory task, with good spatial detail and no radiation.

- **(a)** Which imaging method fits these needs?
- **(b)** Why not EEG?
- **(c)** Why not PET?
- **(d)** In general, how do you choose between EEG and fMRI?

**(a) fMRI.** fMRI gives good SPATIAL resolution with no radiation; it tracks the blood-oxygen-level-dependent (BOLD) signal.

**(b) EEG's weakness.** EEG has poor spatial resolution, so it cannot pinpoint which regions are active.

**(c) PET's drawback.** PET requires a radioactive tracer, which the study's design rules out.

**(d) The trade-off.** EEG = temporal precision; fMRI = spatial precision. Choose by which dimension the question emphasizes.`
    },
    {
      id: 'bbb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Brain Regions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A stroke patient speaks fluently but produces grammatically jumbled, meaningless sentences and cannot understand speech. The damaged area is most likely:`,
            options: [`Wernicke's area (temporal lobe)`, `Broca's area (frontal lobe)`, `Cerebellum (hindbrain)`, `Primary motor cortex (frontal lobe)`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Wernicke's aphasia features FLUENT but meaningless ("word salad") speech and IMPAIRED comprehension, localizing to Wernicke's area in the temporal lobe. Broca's aphasia is the opposite: halting, effortful speech with relatively preserved comprehension.`
          },
          {
            question: `Bilateral damage to the hippocampus would most directly impair the ability to:`,
            options: [`Form new long-term explicit memories`, `Coordinate balance and movement`, `Regulate body temperature`, `Learn new motor skills`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The hippocampus is essential for CONSOLIDATING new explicit (declarative) memories. Bilateral damage (as in patient H.M.) produces anterograde amnesia — an inability to form new conscious memories — while remote memories and procedural learning are largely spared.`
          },
          {
            question: `fMRI shows that a region becomes active whenever people recognize faces. A researcher now wants to show that the region is NECESSARY for face recognition, not merely active during it. The best approach is:`,
            options: [`Testing patients with damage to the region`, `Recording the region's activity with an EEG`, `Imaging the region's metabolism with PET`, `Repeating the fMRI scan in more people`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Imaging shows only that a region is active during a task, which is correlation. To show it is necessary, you must remove or disrupt it and see whether the ability is lost, as in a lesion study of patients with damage there. Recording with EEG, imaging metabolism with PET, and repeating the fMRI scan in more people all still measure activity during the task, so none can show that the task depends on the region.`
          }
        ]
      }
    },
    {
      id: 'bbb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three divisions.** Hindbrain = vital reflexes and coordination; midbrain = arousal and reflexes; forebrain = cognition and emotion.
- **Four lobes.** Frontal (executive, motor, Broca's), parietal (somatosensory), temporal (hearing, Wernicke's), occipital (vision).
- **Subcortical roles.** Hypothalamus = homeostasis; amygdala = fear; hippocampus = new explicit memory; thalamus = sensory relay.
- **Imaging trade-off.** EEG gives timing (milliseconds); fMRI and PET give location; CT and MRI show structure.

**Common traps**

- **Broca's means poor comprehension.** Broca's is halting with comprehension relatively intact; Wernicke's is fluent but meaningless.
- **Hippocampus does all learning.** It forms new explicit memories; procedural (motor-skill) learning relies on the basal ganglia and cerebellum.
- **Thalamus relays every sense.** Smell is the exception: it is the one sensory pathway the thalamus does not relay.
- **Lateral damage causes overeating.** Lateral damage stops eating (hunger center); ventromedial damage causes overeating (satiety center).`
    }
  ]
};
