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
| Acetylcholine | Memory, muscle contraction | Low: Alzheimer's |

### Methods for Studying the Brain (Know What Each Measures)

| Technique | What it measures | Strength |
|-----------|------------------|----------|
| **EEG** | Electrical activity from scalp electrodes | Excellent **temporal** resolution; used for sleep stages |
| **fMRI** | Blood-oxygen-level-dependent (BOLD) signal → indirect neural activity | Good **spatial** resolution; localizes function |
| **PET** | Radioactive tracer uptake (e.g., glucose) | Maps metabolic activity, neurotransmitter receptors |
| **Lesion / case study** | Behavior after damage (e.g., Phineas Gage, H.M.) | Establishes a region's NECESSITY for a function |

**Trap:** EEG wins on *timing* (millisecond resolution) but is poor at pinpointing *location*; fMRI is the reverse. Match the question stem's emphasis to the right tool.

### Nervous System Organization & the Autonomic Divisions

$$\\text{Nervous system} \\to \\begin{cases} \\textbf{Central (CNS)} & \\text{brain + spinal cord} \\\\ \\textbf{Peripheral (PNS)} & \\begin{cases} \\textbf{Somatic} & \\text{voluntary, skeletal muscle} \\\\ \\textbf{Autonomic} & \\begin{cases} \\textbf{Sympathetic} & \\text{fight-or-flight} \\\\ \\textbf{Parasympathetic} & \\text{rest-and-digest} \\end{cases} \\end{cases} \\end{cases}$$

- **Sympathetic** activation: pupils dilate, heart rate up, bronchi dilate, digestion inhibited — driven largely by **norepinephrine/epinephrine** (adrenal medulla).
- **Parasympathetic** (vagus-dominated): pupils constrict, heart rate down, digestion stimulated — uses **acetylcholine.**

### Resting Potential & Action Potential (Quantitative Anchor)

The neuron's resting membrane potential is about $-70\\text{ mV}$, maintained by the $\\text{Na}^+/\\text{K}^+$ ATPase (pumps 3 $\\text{Na}^+$ out for every 2 $\\text{K}^+$ in). Reaching the threshold (~$-55\\text{ mV}$) triggers an **all-or-none** action potential: $\\text{Na}^+$ influx (depolarization) then $\\text{K}^+$ efflux (repolarization). The **absolute refractory period** ensures the impulse travels one direction only.`
    },
    {
      id: 'pb6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neuroscience** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient can understand speech perfectly but produces slow, labored, agrammatic output, aware that their speech is impaired. The damaged area is most likely:`,
            options: ["Broca's area (frontal lobe) — responsible for speech PRODUCTION", "Wernicke's area (temporal lobe)", "Occipital lobe", "Cerebellum"],
            correctAnswer: 0,
            explanation: `Broca's area damage = Broca's (nonfluent) aphasia: comprehension intact but speech production is slow, labored, and agrammatic, and patients are typically aware of the deficit. The trap is **Wernicke's area**, whose damage produces the OPPOSITE picture — FLUENT but nonsensical "word salad" with POOR comprehension and little awareness of the problem.`
          },
          {
            question: `A researcher wants to determine the precise MILLISECOND timing of cortical responses as a participant cycles through sleep stages overnight. Which technique is most appropriate, and why?`,
            options: [`EEG, because of its high temporal resolution`, `fMRI, because of its high spatial resolution`, `PET, because it tracks glucose metabolism`, `Lesion studies, because they establish necessity`],
            correctAnswer: 0,
            explanation: `**EEG** records electrical activity with millisecond (**high temporal**) resolution and is the standard tool for staging sleep (spindles, K-complexes, delta, REM). The trap is **fMRI**: it has superior *spatial* resolution for localizing a function but its BOLD signal is sluggish (seconds), so it is wrong when the question emphasizes precise *timing*.`
          },
          {
            question: `During a frightening event, a participant's heart rate spikes, pupils dilate, and digestion halts, mediated largely by epinephrine release from the adrenal medulla. Which division of the nervous system is responsible?`,
            options: [`Sympathetic division of the autonomic nervous system`, `Parasympathetic division of the autonomic nervous system`, `Somatic nervous system`, `Central nervous system`],
            correctAnswer: 0,
            explanation: `Pupil dilation, increased heart rate, and inhibited digestion are the classic **fight-or-flight** profile of the **sympathetic** division, amplified by epinephrine from the adrenal medulla. The trap is the **parasympathetic** ("rest-and-digest") division, which does the OPPOSITE — constricting pupils, slowing the heart, and stimulating digestion via acetylcholine.`
          }
        ]
      }
    },
    {
      id: 'pb6-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Neuroscience

<details>
<summary><b>Example 1: Localize a deficit to a brain region</b></summary>

**Question:** After a stroke, a patient cannot form any new long-term declarative memories but retains older memories and can still learn new motor skills. Which structure is most likely damaged, and which is spared?

**Solution:**
1. Loss of NEW declarative (explicit) memory formation localizes to the **hippocampus** (cf. patient H.M.). ✓
2. Preserved motor-skill (procedural) learning indicates the **cerebellum/basal ganglia** are intact — these mediate implicit memory.

**Key idea:** The hippocampus consolidates new explicit memories; it is not where old memories are permanently stored, which is why remote memories survive.
</details>

<details>
<summary><b>Example 2: Reason from a neurotransmitter to a disorder/treatment</b></summary>

**Question:** A drug that blocks postsynaptic D2 dopamine receptors reduces a patient's hallucinations and delusions but, over time, produces tremor and rigidity. Explain both effects mechanistically.

**Solution:**
1. Blocking dopamine in the **mesolimbic** pathway reduces the POSITIVE symptoms of schizophrenia — consistent with the **dopamine hypothesis** (excess dopamine). ✓
2. The same blockade in the **nigrostriatal** motor pathway lowers dopamine there, mimicking **Parkinsonism** (tremor, rigidity) — too little dopamine in a motor circuit.

**MCAT lesson:** The *direction* of a neurotransmitter's effect depends on the pathway; one drug can fix one circuit while disrupting another.
</details>

<details>
<summary><b>Example 3: Pick the right imaging method for a study design</b></summary>

**Question:** Investigators want to identify WHICH cortical region activates when subjects view fearful faces versus neutral faces. Which method best fits, and what is its limitation?

**Solution:**
1. The goal is precise **spatial localization** of activity → **fMRI** (BOLD signal) is ideal. ✓
2. Limitation: fMRI has poor **temporal** resolution (BOLD lags neural activity by seconds) and measures blood flow *indirectly*, not neural firing itself.

**Connection:** If instead they needed millisecond timing of the response, EEG/ERP would be chosen, trading spatial precision for temporal precision.
</details>`
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
