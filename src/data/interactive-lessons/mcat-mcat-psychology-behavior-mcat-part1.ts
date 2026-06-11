export const mcatPsychBehavPart1Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb1-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 1 of 7 — Sensation & Perception**

### Sensation vs. Perception

- **Sensation**: Detection of stimuli by sensory receptors (bottom-up)
- **Perception**: Brain's interpretation of sensory information (top-down)

### Sensory Thresholds

| Concept | Definition |
|---------|-----------|
| **Absolute threshold** | Minimum stimulus detectable 50% of the time |
| **Difference threshold (JND)** | Minimum change in stimulus detectable 50% of the time |
| **Weber's Law** | $\\Delta I / I = k$ (JND is proportional to stimulus intensity) |
| **Signal detection theory** | Detection depends on signal strength AND decision criteria (hits, misses, false alarms, correct rejections) |

### Sensory Adaptation

- Decreased sensitivity to constant stimuli over time
- Example: You stop noticing the smell of your own house
- Does NOT apply to pain (for survival reasons)

### Gestalt Principles of Perception

| Principle | Description |
|-----------|-------------|
| Proximity | Near objects grouped together |
| Similarity | Similar objects grouped together |
| Closure | Brain fills in gaps to complete shapes |
| Continuity | Prefer smooth, continuous patterns |
| Figure-ground | Distinguish object from background |

### Signal Detection Theory (SDT) — The 2×2 Outcome Matrix

SDT separates *sensitivity* (how well you discriminate signal from noise, $d'$) from *response bias* (your willingness to say "yes," criterion β).

| | Signal present | Signal absent |
|--|----------------|----------------|
| Said "yes" | **Hit** | **False alarm** |
| Said "no" | **Miss** | **Correct rejection** |

- A **conservative** criterion (only respond when very sure) → fewer false alarms but more misses.
- A **liberal** criterion → more hits but more false alarms.
- Changing payoffs/expectations shifts the criterion WITHOUT changing true sensitivity — this is why SDT data, not raw hit rate, reveals perceptual ability.

### Sensory Transduction Pathways (Know the Receptor → Brain Map)

| Modality | Receptor | Primary cortical target |
|----------|----------|--------------------------|
| Vision | Rods/cones → retina | Occipital lobe (V1) |
| Hearing | Hair cells (cochlea, organ of Corti) | Temporal lobe (A1) |
| Touch/pain | Mechanoreceptors / nociceptors | Parietal lobe (somatosensory) |
| Smell | Olfactory receptors | Olfactory bulb → cortex (bypasses thalamus) |
| Taste | Taste buds | Gustatory cortex |

- **Place theory** (high-frequency pitch coded by WHERE on basilar membrane) vs. **frequency/temporal theory** (low-frequency pitch coded by rate of firing). High yield for hearing.
- Vision: **trichromatic theory** (3 cone types) explains the receptor level; **opponent-process theory** (red–green, blue–yellow, black–white) explains afterimages and downstream processing. Both are correct at different stages.

### Bottom-Up vs. Top-Down and Perceptual Constancies

- **Bottom-up:** data-driven, builds percept from raw features.
- **Top-down:** concept/expectation-driven (context, priming, schemas).
- **Constancies** (size, shape, color) keep objects stable despite changing retinal images — a top-down contribution and the source of many size-illusion questions.`
    },
    {
      id: 'pb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Sensation & Perception** 🎯`,
      exercise: {
        questions: [
          {
            question: `According to Weber's Law, if you can just barely notice the difference between 10 lbs and 11 lbs, the JND for a 50 lb weight would be:`,
            options: [`5 lbs ($\\Delta I / I = 1/10$, so $\\Delta I = 50 \\times 1/10 = 5$)`, `1 lb`, `10 lbs`, `11 lbs`],
            correctAnswer: 0,
            explanation: `Weber's Law: $\\Delta I / I = k$. From the 10 lb example, $k = 1/10$. For 50 lbs: $\\Delta I = 50 \\times 1/10 = 5$ lbs. The JND scales with stimulus intensity — this is why you can notice a candle in a dark room but not in sunlight.`
          },
          {
            question: `In a detection experiment, radiologists are told they will be rewarded for catching tumors and lightly penalized for false alarms. Their hit rate AND false-alarm rate both rise, while $d'$ is unchanged. This is best explained as:`,
            options: [`A shift toward a more liberal response criterion`, `An increase in perceptual sensitivity`, `Sensory adaptation to the images`, `A change in the absolute threshold`],
            correctAnswer: 0,
            explanation: `When hits and false alarms BOTH increase but $d'$ (sensitivity) is constant, the observer has not gotten better at discriminating — they have lowered their criterion (become more liberal), saying "yes" more often. Signal detection theory exists precisely to separate this response bias from true sensitivity.`
          },
          {
            question: `A patient reports a red afterimage after staring at a green object. Which theory best accounts for this?`,
            options: [`Opponent-process theory`, `Trichromatic theory`, `Place theory`, `Weber's law`],
            correctAnswer: 0,
            explanation: `Opponent-process theory posits paired channels (red–green, blue–yellow, black–white). Prolonged green stimulation fatigues the green side of the red–green channel, so when you look away the channel rebounds toward red → a red afterimage. Trichromatic theory explains cone-level color reception but not afterimages.`
          }
        ]
      }
    },
    {
      id: 'pb1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Sensation & Perception

<details>
<summary><b>Example 1: Apply Weber's Law to a new modality</b></summary>

**Question:** A wine taster can just detect a difference when sugar rises from 200 mg/L to 210 mg/L. What is the smallest detectable change at a baseline of 500 mg/L?

**Solution:**
$$k = \\frac{\\Delta I}{I} = \\frac{210 - 200}{200} = \\frac{10}{200} = 0.05$$
$$\\Delta I = k \\cdot I = 0.05 \\times 500 = 25 \\text{ mg/L} \\checkmark$$

**Key idea:** The JND is a constant FRACTION (5%) of the baseline, not a constant absolute amount. At higher intensities you need a larger absolute change to notice it.
</details>

<details>
<summary><b>Example 2: Interpret a signal-detection data table</b></summary>

**Question:** Over 100 trials with a signal present and 100 with it absent, an observer scores 80 hits and 30 false alarms. Another observer scores 60 hits and 5 false alarms. Who is more sensitive, and who has the more conservative criterion?

**Solution:**
1. Observer A: hit rate 0.80, false-alarm rate 0.30. Observer B: hit rate 0.60, false-alarm rate 0.05.
2. **Sensitivity ($d'$)** reflects the SEPARATION between hit and false-alarm rates. A: 0.80 − 0.30 = 0.50 gap; B: 0.60 − 0.05 = 0.55 gap → B is slightly more sensitive. ✓
3. **Criterion:** B says "yes" far less often (low false alarms) → B is the more **conservative** responder; A is more liberal. ✓

**MCAT lesson:** You cannot judge ability from hit rate alone — a high hit rate paired with a high false-alarm rate just means a liberal criterion.
</details>

<details>
<summary><b>Example 3: Bottom-up vs. top-down in an experiment</b></summary>

**Question:** Subjects shown a degraded image of an animal identify it faster if they were first told "you'll see a farm animal." Naming this effect and the process involved.

**Solution:**
1. The verbal cue creates an expectation/schema that guides interpretation → **top-down processing** (specifically, **priming**). ✓
2. The raw degraded pixels alone would be **bottom-up**; the cue supplies context that fills the gaps.

**Connection:** This is the same mechanism behind perceptual set and the word-superiority effect — expectation shapes what we perceive, not just what hits the retina.
</details>`
    },
    {
      id: 'pb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sensation = detection (bottom-up). Perception = interpretation (top-down).
- Weber's Law: JND is proportional to stimulus intensity ($\\Delta I / I = k$)
- Signal detection theory: both signal AND decision criteria matter
- Gestalt principles: proximity, similarity, closure, continuity, figure-ground`
    }
  ]
};
