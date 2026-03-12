export const mcatPsychBehavPart6Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb6-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 6 of 7 — Neuroscience & Biological Bases of Behavior**

### Brain Regions

| Region | Functions |
|--------|----------|
| **Frontal lobe** | Executive function, planning, personality, motor cortex, Broca's area (speech production) |
| **Parietal lobe** | Somatosensory cortex, spatial processing |
| **Temporal lobe** | Auditory processing, Wernicke's area (language comprehension), memory |
| **Occipital lobe** | Visual processing |
| **Cerebellum** | Motor coordination, balance |
| **Brainstem** | Vital functions (breathing, heart rate, sleep) |

### Limbic System

| Structure | Function |
|-----------|----------|
| **Hippocampus** | Memory formation (declarative/explicit) |
| **Amygdala** | Emotion (especially fear) |
| **Hypothalamus** | Homeostasis, hormones, 4 F's (fighting, fleeing, feeding, mating) |
| **Thalamus** | Relay station for ALL senses EXCEPT smell |

### Neurotransmitters & Behavior

| NT | Effect | Clinical Connection |
|----|--------|-------------------|
| Dopamine | Reward, motivation, movement | Low: Parkinson's. High: Schizophrenia |
| Serotonin | Mood, sleep, appetite | Low: Depression. Targeted by SSRIs |
| Norepinephrine | Arousal, alertness | Fight-or-flight |
| GABA | Inhibition | Low: Anxiety. Targeted by benzodiazepines |
| Acetylcholine | Memory, muscle contraction | Low: Alzheimer's |`
    },
    {
      id: 'pb6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neuroscience** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient can understand speech perfectly but produces garbled, nonsensical output. The damaged area is most likely:`,
            options: [`Broca\`s area (frontal lobe) — responsible for speech PRODUCTION`, `Wernicke\`s area (temporal lobe)`, `Occipital lobe`, `Cerebellum`],
            correctAnswer: 0,
            explanation: `Broca's area damage = Broca's aphasia (nonfluent): comprehension intact but speech production is slow, labored, agrammatic. Wernicke's damage = fluent but nonsensical speech with poor comprehension.`
          }
        ]
      }
    },
    {
      id: 'pb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Broca's = speech production (frontal). Wernicke's = comprehension (temporal).
- Hippocampus = memory. Amygdala = fear/emotion. Thalamus = sensory relay (not smell).
- Dopamine: reward + movement. Serotonin: mood. GABA: inhibition.
- Low dopamine → Parkinson's. High dopamine → Schizophrenia.`
    }
  ]
};
