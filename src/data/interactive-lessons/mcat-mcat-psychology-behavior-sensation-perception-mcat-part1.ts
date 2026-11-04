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
| **Subliminal stimulus** | Below the absolute threshold — can prime responses but does not produce conscious detection |

<!-- yield:low -->
- **Stevens' Power Law**: $S = k I^n$ — handles modalities Fechner's law fits poorly (e.g., the sensation of electric shock grows *faster* than intensity, $n > 1$).
<!-- /yield -->

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
      id: 'sp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Thresholds & SDT

**Problem 1.** A subject just detects a brightness change from $120$ to $126\\;\\text{cd/m}^2$. The same subject is then tested at a baseline of $300\\;\\text{cd/m}^2$.

- **(a)** What is the subject's Weber fraction?
- **(b)** What change must the subject see to detect a difference at $300\\;\\text{cd/m}^2$?
- **(c)** Would a $6\\;\\text{cd/m}^2$ change at the new baseline be noticed? Why or why not?

**(a) Weber fraction.** $k = \\dfrac{126 - 120}{120} = \\dfrac{6}{120} = 0.05$, so the JND is 5% of the baseline.

**(b) Scale to the new baseline.** With $k = 0.05$ from (a): $\\Delta I = 0.05 \\times 300 = 15\\;\\text{cd/m}^2$.

**(c) The constant-amount trap.** No. Weber's Law fixes the RATIO, not the difference. Six units is 5% of 120 but only 2% of 300, below the JND. Compute the fraction from the given pair, then scale; the answer is never "the same 6 units."

**Problem 2.** Each observer sees 100 signal trials and 100 noise trials. Observer A scores 85 hits and 40 false alarms; Observer B scores 70 hits and 10 false alarms.

- **(a)** What is each observer's gap between hit rate and false-alarm rate?
- **(b)** Which observer discriminates signal from noise better?
- **(c)** Which observer holds the more liberal criterion?
- **(d)** Does A's higher hit rate show better perception?

**(a) The gaps.** A: $0.85 - 0.40 = 0.45$. B: $0.70 - 0.10 = 0.60$.

**(b) Sensitivity.** Sensitivity tracks the gap between hits and false alarms, so with gaps of 0.45 (A) and 0.60 (B) from (a), B discriminates better. The formal $d'$, computed from z-scores, agrees: about 1.3 for A and 1.8 for B.

**(c) Criterion.** A says "yes" far more often on both trial types (85 and 40, against 70 and 10), so A holds the more liberal criterion.

**(d) Bias, not skill.** No. A high hit rate that comes with a high false-alarm rate reveals a liberal bias. Always read both rates before crediting sensitivity.

**Problem 3.** A word is flashed too briefly for participants to report it, yet it speeds their recognition of related words a moment later.

- **(a)** Where does the flash fall relative to the absolute threshold for conscious report?
- **(b)** What is the faster recognition called, and how large and lasting is the effect?
- **(c)** Does this show that subliminal stimuli control behavior?

**(a) Below threshold.** Participants cannot report the word, so the flash is subliminal: below the absolute threshold for conscious report.

**(b) Priming.** The speed-up is priming, a real but small and short-lived effect on processing speed. Priming is implicit facilitation of related material.

**(c) The bounded conclusion.** No. Priming does not show durable attitude or behavior change; controlled studies find no strong "subliminal persuasion." The MCAT rewards the modest, evidence-bounded conclusion.`
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
            yield: 'ULTRA_HIGH',
            explanation: `Weber fraction: $k = \\Delta I / I = 2/100 = 0.02$. At 400 g: $\\Delta I = 0.02 \\times 400 = 8$ g. The JND is a constant proportion (2%) of the baseline, not a constant 2 g. Distractor "2 g" is the classic error of treating the JND as an absolute amount.`
          },
          {
            question: `After a hospital adds a large penalty for missed tumors, radiologists' hit rate rises — but so does their false-alarm rate, and computed $d'$ values are unchanged. The best interpretation is that the policy changed the radiologists':`,
            options: [`Response criterion, making them more liberal`, `Perceptual sensitivity, improving discrimination`, `Absolute threshold for detecting tumors`, `Rate of sensory adaptation to the images`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Hits and false alarms rising together with constant $d'$ is the signature of a criterion shift (more willingness to say "tumor"), not improved discrimination. Signal detection theory exists precisely to separate this decision bias from true sensitivity — a favorite MCAT data-interpretation move.`
          },
          {
            question: `An infant initially turns toward a repeated tone, stops responding after many presentations, then responds again after a flash of light precedes the next tone. Because the response recovered after a novel stimulus, the initial decline is best classified as:`,
            options: [`Habituation of the orienting response`, `Sensory adaptation of the cochlear hair cells`, `A rise in the infant's absolute auditory threshold`, `A conservative shift in response criterion`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Recovery of the response after an intervening novel stimulus is dishabituation — the defining evidence for habituation (a simple form of learning). Receptor-level sensory adaptation would not be reversed by an unrelated light flash. The stem deliberately supplies the disambiguating cue (dishabituation) because "adaptation vs. habituation" is a classic P/S trap.`
          }
        ]
      }
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Sensation vs. perception.** Sensation is bottom-up receptor transduction; perception is the brain's top-down interpretation.
- **Thresholds at 50%.** The absolute threshold and the JND are both the levels detected on 50% of trials.
- **Weber's Law.** $\\Delta I / I = k$: compute the fraction from one known pair, then scale it to any baseline.
- **SDT splits detection.** Sensitivity ($d'$) is discrimination; the criterion is willingness to say "yes," moved by payoffs.

**Common traps**

- **Treating the JND as a fixed amount.** The JND grows with the baseline; at four times the baseline it is four times larger.
- **Reading hit rate as skill.** Hits rising with false alarms is a criterion shift; compare both rates before crediting sensitivity.
- **Calling every response decline adaptation.** Adaptation is receptor-level; habituation is learned and recovers after novelty.
- **Believing in subliminal persuasion.** Subliminal stimuli can prime faster processing but do not durably change attitudes or behavior.

<!-- yield:low -->
**Low-yield extras**

- Stevens' power law ($S = k I^n$, with $n > 1$ for electric shock) as the alternative to Fechner's logarithmic law
<!-- /yield -->`
    }
  ]
};
