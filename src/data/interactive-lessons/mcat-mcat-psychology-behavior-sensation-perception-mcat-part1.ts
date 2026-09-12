export const mcatPsychSensPercPart1Data = {
  topicSlug: 'mcat-psychology-behavior-sensation-perception-mcat',
  sections: [
    {
      id: 'sp1-intro',
      type: 'text' as const,
      content: `# Sensation & Perception

**Part 1 of 4 — Thresholds, Weber's Law & Signal Detection**

### Sensation vs. Perception (the core distinction)

- **Sensation**: transduction of physical stimuli into neural signals by sensory receptors — a **bottom-up**, data-driven process
- **Perception**: the brain's organization and interpretation of those signals — shaped by **top-down** expectations, context, and experience
- One physical stimulus can yield different percepts (ambiguous figures); different stimuli can yield the same percept (constancies)

### Psychophysics: Quantifying the Stimulus–Experience Link

Psychophysics — founded by **Gustav Fechner** (building on **Ernst Weber**) — measures how physical intensity maps onto subjective experience.

| Concept | Definition |
|---------|-----------|
| **Absolute threshold** | Minimum stimulus intensity detected **50% of the time** |
| **Difference threshold (JND)** | Minimum *change* in intensity detected 50% of the time |
| **Weber's Law** | $\\Delta I / I = k$ — the JND is a constant *proportion* of the baseline stimulus |
| **Fechner's Law** | Subjective sensation grows with the *logarithm* of intensity: $S = k \\log I$ |
| **Stevens' Power Law** | $S = k I^n$ — handles modalities Fechner's law fits poorly (e.g., pain grows *faster* than intensity, $n > 1$) |
| **Subliminal stimulus** | Below the absolute threshold — can prime responses but does not produce conscious detection |

**Why Weber's Law matters:** a 1-lb change is obvious when lifting 5 lbs but invisible when lifting 100 lbs. Detectability depends on the *ratio*, not the absolute difference.

### Signal Detection Theory (SDT)

Classical thresholds treat detection as purely sensory. SDT recognizes that detection is also a **decision** made under uncertainty, influenced by motivation and expectations. It separates:

- **Sensitivity ($d'$)** — how well the observer discriminates signal from noise
- **Response criterion (bias, β)** — how willing the observer is to say "yes"

| | Signal present | Signal absent |
|--|----------------|----------------|
| Responds "yes" | **Hit** | **False alarm** |
| Responds "no" | **Miss** | **Correct rejection** |

- **Liberal criterion** → more hits *and* more false alarms
- **Conservative criterion** → fewer false alarms but more misses
- Payoffs, fatigue, and expectations shift the **criterion** without changing $d'$ — this is why raw hit rate alone never proves better perception

### Sensory Adaptation (a receptor-level change)

- **Sensory adaptation**: receptors respond less to a *constant, unchanging* stimulus over time (you stop feeling your watch). It is a peripheral, receptor-level change.
- Distinguish it from **habituation**, a *learned*, central decrease in response to a repeated stimulus — habituation shows **dishabituation** (response recovery when a novel stimulus intervenes), adaptation does not depend on learning.
- Pain adapts poorly — a protective design feature.

### Transduction: the Common First Step

Every sense converts a physical stimulus into a receptor potential, then into action potentials relayed (for all senses **except smell**) through the **thalamus** to a dedicated cortical area. Later parts trace each pathway.`
    },
    {
      id: 'sp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Thresholds & Signal Detection** 🎯`,
      exercise: {
        questions: [
          {
            question: `A participant can just barely distinguish 100 g from 102 g. According to Weber's Law, the smallest increase she should reliably detect from a 400 g standard is:`,
            options: [`8 g`, `2 g`, `4 g`, `102 g`],
            correctAnswer: 0,
            explanation: `Weber fraction: $k = \\Delta I / I = 2/100 = 0.02$. At 400 g: $\\Delta I = 0.02 \\times 400 = 8$ g. The JND is a constant proportion (2%) of the baseline, not a constant 2 g. Distractor "2 g" is the classic error of treating the JND as an absolute amount.`
          },
          {
            question: `After a hospital adds a large penalty for missed tumors, radiologists' hit rate rises — but so does their false-alarm rate, and computed $d'$ values are unchanged. The best interpretation is that the policy changed the radiologists':`,
            options: [`Response criterion, making them more liberal`, `Perceptual sensitivity, improving discrimination`, `Absolute threshold for detecting tumors`, `Rate of sensory adaptation to the images`],
            correctAnswer: 0,
            explanation: `Hits and false alarms rising together with constant $d'$ is the signature of a criterion shift (more willingness to say "tumor"), not improved discrimination. Signal detection theory exists precisely to separate this decision bias from true sensitivity — a favorite MCAT data-interpretation move.`
          },
          {
            question: `An infant initially turns toward a repeated tone, stops responding after many presentations, then responds again after a flash of light precedes the next tone. Because the response recovered after a novel stimulus, the initial decline is best classified as:`,
            options: [`Habituation, a central and learned decrease in response`, `Sensory adaptation of the auditory receptors`, `A rise in the absolute threshold`, `A conservative shift in response criterion`],
            correctAnswer: 0,
            explanation: `Recovery of the response after an intervening novel stimulus is dishabituation — the defining evidence for habituation (a simple form of learning). Receptor-level sensory adaptation would not be reversed by an unrelated light flash. The stem deliberately supplies the disambiguating cue (dishabituation) because "adaptation vs. habituation" is a classic P/S trap.`
          }
        ]
      }
    },
    {
      id: 'sp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Thresholds & SDT

<details>
<summary><b>Example 1: Weber's Law with a new modality</b></summary>

**Question:** A subject just detects a brightness change from 120 cd/m² to 126 cd/m². What change is needed at 300 cd/m²?

**Solution:**
$$k = \\frac{126 - 120}{120} = 0.05$$
$$\\Delta I = 0.05 \\times 300 = 15 \\text{ cd/m}^2 \\checkmark$$

**Key idea:** Compute the Weber fraction from the given pair, then scale. The answer is never "the same 6 units."
</details>

<details>
<summary><b>Example 2: Reading an SDT table</b></summary>

**Question:** Observer A: 85 hits / 40 false alarms per 100 trials of each type. Observer B: 70 hits / 10 false alarms. Who is more sensitive? Who is more liberal?

**Solution:**
1. Sensitivity tracks the *gap* between hit and false-alarm rates. A: $0.85 - 0.40 = 0.45$; B: $0.70 - 0.10 = 0.60$ → **B discriminates better.**
2. A says "yes" far more often overall → **A holds the more liberal criterion.** ✓

**MCAT lesson:** A high hit rate with a high false-alarm rate reveals bias, not skill.
</details>

<details>
<summary><b>Example 3: Subliminal ≠ subconscious persuasion</b></summary>

**Question:** A word flashed too briefly for participants to report still speeds recognition of related words. Does this show subliminal stimuli control behavior?

**Solution:**
1. The flash is below the *absolute threshold for conscious report*, yet produces **priming** — a real but small, short-lived effect on processing speed. ✓
2. It does **not** demonstrate durable attitude or behavior change; controlled studies find no strong "subliminal persuasion."

**Connection:** Priming is top-down facilitation; the MCAT rewards the modest, evidence-bounded conclusion.
</details>`
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sensation = bottom-up transduction; perception = top-down interpretation.
- Absolute threshold and JND are both defined at 50% detection; Weber's Law: $\\Delta I / I = k$.
- SDT splits detection into sensitivity ($d'$) and criterion (bias); payoffs move the criterion, not $d'$.
- Sensory adaptation is receptor-level and stimulus-bound; habituation is learned and shows dishabituation.`
    }
  ]
};
