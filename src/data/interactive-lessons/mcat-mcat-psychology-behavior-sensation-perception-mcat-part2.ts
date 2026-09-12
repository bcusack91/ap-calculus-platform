export const mcatPsychSensPercPart2Data = {
  topicSlug: 'mcat-psychology-behavior-sensation-perception-mcat',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `# Sensation & Perception

**Part 2 of 4 — Vision & Hearing: From Transduction to Cortex**

### Vision: Structure of the Eye

Light path: cornea (most refraction) → pupil (iris controls size) → lens (**accommodation**: ciliary muscles change lens shape to focus) → retina.

| Photoreceptor | Location | Function |
|---------------|----------|----------|
| **Rods** (~120 million) | Peripheral retina | Dim-light (scotopic) vision, motion; no color; pigment = **rhodopsin** |
| **Cones** (~6 million) | Concentrated in **fovea** | Color, fine acuity, daylight (photopic) vision |

### Phototransduction (know the direction of the change)

1. Light isomerizes **11-cis-retinal → all-trans-retinal**, activating the opsin.
2. Activated pigment stimulates **transducin** (a G protein) → phosphodiesterase → **cGMP falls**.
3. cGMP-gated Na⁺ channels **close** → the photoreceptor **hyperpolarizes** → **less glutamate** released.

**Trap:** photoreceptors are depolarized in the *dark* ("dark current") and hyperpolarize in the *light* — the reverse of a typical receptor.

### Visual Pathway & Parallel Processing

Photoreceptors → **bipolar cells** → **ganglion cells** (axons form the optic nerve) → **optic chiasm** (nasal fibers cross, so each *visual field* maps to the opposite hemisphere) → **lateral geniculate nucleus (LGN)** of the thalamus → **primary visual cortex (V1)**, occipital lobe.

- **Parvocellular pathway**: fine spatial detail and color; best with stationary objects
- **Magnocellular pathway**: motion and coarse, fast processing
- **Feature detectors** (Hubel & Wiesel, Nobel 1981): V1 neurons tuned to edges and orientations

### Two Correct Theories of Color

- **Trichromatic theory** (Young–Helmholtz): three cone types (S/M/L wavelengths) — true at the **receptor** level
- **Opponent-process theory** (Hering): red–green, blue–yellow, black–white paired channels in ganglion/LGN cells — explains **afterimages** (fatigue one side, rebound to the other)
- MCAT answer: both are right, at *different stages* of processing

### Hearing: Structure and Transduction

Sound path: pinna → auditory canal → **tympanic membrane** → ossicles (**malleus → incus → stapes**, amplifying pressure) → **oval window** → cochlear fluid → **basilar membrane** → **hair cells** (in the organ of Corti) bend against the tectorial membrane → **K⁺ influx** depolarizes the hair cell → neurotransmitter onto auditory nerve (CN VIII) → brainstem → **medial geniculate nucleus (MGN)** of the thalamus → **primary auditory cortex (A1)**, temporal lobe.

**Trap:** hair-cell depolarization is by **K⁺ influx** (the endolymph is unusually K⁺-rich) — an exception to the "Na⁺ depolarizes" rule.

### Pitch Coding

| Theory | Mechanism | Works best for |
|--------|-----------|----------------|
| **Place theory** | Location of peak vibration on basilar membrane (base = high frequency; apex = low) | High frequencies |
| **Frequency (temporal) theory** | Firing rate matches sound frequency | Low frequencies (≲1,000 Hz, the neuronal firing ceiling) |
| **Volley principle** | Groups of neurons fire in staggered rotation | Extends temporal coding to a few thousand Hz |

### Balance: the Vestibular System

- **Semicircular canals** (three, orthogonal): *rotational* acceleration
- **Utricle & saccule** (otolithic organs): *linear* acceleration and head tilt, via calcium-carbonate **otoliths** bending hair cells`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Vision & Hearing** 🎯`,
      exercise: {
        questions: [
          {
            question: `In darkness, retinal photoreceptors maintain a steady "dark current." When light strikes the retina, the immediate electrical consequence in the photoreceptor is:`,
            options: [`Hyperpolarization, because falling cGMP closes Na⁺ channels`, `Depolarization, because cGMP-gated Na⁺ channels open`, `An action potential propagated down the optic nerve`, `Increased glutamate release onto bipolar cells`],
            correctAnswer: 0,
            explanation: `Light → retinal isomerization → transducin → phosphodiesterase → cGMP falls → cGMP-gated channels close → hyperpolarization and REDUCED glutamate release. Photoreceptors are depolarized in the dark, and they signal with graded potentials, not action potentials — both classic reversals the MCAT loves.`
          },
          {
            question: `A patient staring at a yellow circle sees a blue afterimage when looking at a white wall. A researcher argues this specific phenomenon cannot be fully explained at the cone-receptor level. Which theory does the afterimage support, and at what stage does it operate?`,
            options: [`Opponent-process theory, operating in post-receptor channels (ganglion/LGN)`, `Trichromatic theory, operating in the three cone types`, `Place theory, operating on the basilar membrane`, `Feature detection, operating in V1 orientation columns`],
            correctAnswer: 0,
            explanation: `Afterimages in the complementary color (yellow → blue) are the signature evidence for opponent-process channels (blue–yellow, red–green): fatiguing one pole causes rebound toward the other. Trichromatic theory is correct for cone-level reception but does not predict complementary afterimages.`
          },
          {
            question: `A pure 8,000 Hz tone is far above the maximum firing rate of any auditory neuron, yet listeners identify its pitch easily. The most complete explanation is that high-frequency pitch is coded by:`,
            options: [`The place of maximal vibration near the base of the basilar membrane`, `Individual neurons firing 8,000 times per second`, `Rotational signals from the semicircular canals`, `The volley principle operating in single neurons`],
            correctAnswer: 0,
            explanation: `Neurons cannot fire ~8,000 Hz (absolute refractory period caps rates near 1,000 Hz), so temporal/frequency coding fails; place theory takes over — high frequencies peak near the stiff base of the basilar membrane. The volley principle extends rate coding only to a few thousand Hz, and it is a property of neuron groups, not single cells.`
          }
        ]
      }
    },
    {
      id: 'sp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Vision & Hearing

<details>
<summary><b>Example 1: Localize the lesion from the visual deficit</b></summary>

**Question:** A stroke patient loses vision in the entire *left visual field* of both eyes. Where is the lesion?

**Solution:**
1. At the optic chiasm, nasal retinal fibers cross, so all information from the left visual *field* is routed to the **right** hemisphere. ✓
2. Loss of one full visual field (homonymous hemianopia) → lesion **behind the chiasm on the right** (right optic tract, LGN, or V1).

**Key idea:** Eyes ≠ visual fields. Chiasm lesions cut *peripheral (temporal) fields of both eyes*; post-chiasm lesions cut *one whole field*.
</details>

<details>
<summary><b>Example 2: Predict the deficit from receptor loss</b></summary>

**Question:** A retinal disease destroys cones but spares rods. Predict the patient's vision.

**Solution:**
1. No cones → no color vision and poor acuity, especially at the fovea (central blindness in daylight). ✓
2. Rods intact → preserved dim-light and peripheral vision, though everything is grayscale and blurry.

**Connection:** The reverse pattern (rod loss) → night blindness and tunnel vision with preserved central color vision.
</details>

<details>
<summary><b>Example 3: Conductive vs. sensorineural hearing loss</b></summary>

**Question:** Patient X has fused ossicles; patient Y has destroyed cochlear hair cells. Contrast their deficits and the step of the pathway lost.

**Solution:**
1. X: sound cannot be mechanically amplified to the oval window → **conductive** loss; transduction machinery is intact, so bone conduction still works. ✓
2. Y: transduction itself fails — no receptor potential regardless of amplification → **sensorineural** loss; hair cells do not regenerate.

**MCAT lesson:** Identify *which step* (conduction vs. transduction vs. neural relay) an experimental manipulation removes.
</details>`
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Light hyperpolarizes photoreceptors (cGMP falls, channels close); dark = depolarized.
- Pathways: retina → LGN (thalamus) → V1; cochlea → MGN → A1. Smell is the only thalamus-bypassing sense.
- Color: trichromatic at the cones, opponent-process afterward (explains afterimages).
- Pitch: place theory for high frequencies, temporal/frequency coding (+ volley) for low.
- Vestibular: semicircular canals = rotation; utricle/saccule = linear acceleration and tilt.`
    }
  ]
};
