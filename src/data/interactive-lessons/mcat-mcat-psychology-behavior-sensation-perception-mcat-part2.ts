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
| **Rods** (far outnumber cones) | Peripheral retina | Dim-light (scotopic) vision, motion; no color; pigment = **rhodopsin** |
| **Cones** | Concentrated in **fovea** | Color, fine acuity, daylight (photopic) vision |

<!-- yield:low -->
- Approximate counts: about 120 million rods vs. about 6 million cones per retina.
<!-- /yield -->

### Phototransduction (know the direction of the change)

1. Light isomerizes **11-cis-retinal → all-trans-retinal**, activating the opsin.
2. Activated pigment stimulates **transducin** (a G protein) → phosphodiesterase → **cGMP falls**.
3. cGMP-gated Na⁺ channels **close** → the photoreceptor **hyperpolarizes** → **less glutamate** released.

**Trap:** photoreceptors are depolarized in the *dark* ("dark current") and hyperpolarize in the *light* — the reverse of a typical receptor.

### Visual Pathway & Parallel Processing

Photoreceptors → **bipolar cells** → **ganglion cells** (axons form the optic nerve) → **optic chiasm** (nasal fibers cross, so each *visual field* maps to the opposite hemisphere) → **lateral geniculate nucleus (LGN)** of the thalamus → **primary visual cortex (V1)**, occipital lobe.

- **Parvocellular pathway**: fine spatial detail and color; best with stationary objects
- **Magnocellular pathway**: motion and coarse, fast processing
- **Feature detectors** (Hubel & Wiesel): V1 neurons tuned to edges and orientations

<!-- yield:low -->
- Hubel and Wiesel shared the 1981 Nobel Prize for this work.
<!-- /yield -->

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
      id: 'sp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Vision & Hearing

**Problem 1.** After a stroke, a patient loses vision in the entire left visual field of both eyes.

- **(a)** Which hemisphere receives the left visual field, and why?
- **(b)** Where along the visual pathway is the lesion?
- **(c)** How would a lesion at the middle of the optic chiasm change the deficit?

**(a) Field to hemisphere.** At the optic chiasm the left eye's nasal fibers cross to the right, while the right eye's temporal fibers, which also see the left field, stay on the right. So the left visual FIELD, from both eyes, reaches the right hemisphere.

**(b) Localize the lesion.** Losing one whole field in both eyes (homonymous hemianopia) places the lesion behind the chiasm on the right: the right optic tract, right LGN or right V1.

**(c) A chiasm lesion.** A midline chiasm lesion cuts the crossing nasal fibers, which carry the peripheral (temporal) field of each eye, so the outer field of both eyes is lost: bitemporal hemianopia. Eyes are not visual fields.

**Problem 2.** Patient X has fused ossicles. Patient Y has lost the cochlear hair cells.

- **(a)** Which step of hearing does X lose, and what type of hearing loss results?
- **(b)** Which step does Y lose, and what type of loss is that?
- **(c)** Would sound delivered by bone conduction help either patient?

**(a) Patient X.** Fused ossicles cannot amplify sound onto the oval window, so CONDUCTION fails: a conductive hearing loss. The transduction machinery is intact.

**(b) Patient Y.** Without hair cells, TRANSDUCTION itself fails: no receptor potential forms however loud the sound, a sensorineural loss. Hair cells do not regenerate.

**(c) Bone conduction.** It helps X only. Vibrating the skull moves the cochlear fluid directly, bypassing the ossicles, so X's intact hair cells still respond; Y has none. Ask which step (conduction, transduction or neural relay) a manipulation removes.

**Problem 3.** A retinal disease destroys the cones but spares the rods.

- **(a)** What happens to the patient's color vision and acuity?
- **(b)** Which kinds of vision are preserved?
- **(c)** What pattern would the reverse disease, rod loss, produce?

**(a) Cone loss.** No cones means no color vision and poor acuity, worst at the fovea where cones cluster: central blindness in daylight.

**(b) What survives.** The intact rods preserve dim-light and peripheral vision, though everything is grayscale and blurry.

**(c) The reverse pattern.** Rod loss gives night blindness and tunnel vision, with central color vision preserved.`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Vision & Hearing** 🎯`,
      exercise: {
        questions: [
          {
            question: `In darkness, retinal photoreceptors maintain a steady "dark current." When light strikes the retina, the immediate electrical consequence in the photoreceptor is:`,
            options: [`Hyperpolarization, as cGMP-gated Na⁺ channels close`, `Depolarization, as cGMP-gated Na⁺ channels open`, `An action potential, as cGMP-gated Na⁺ channels close`, `Increased glutamate release, as Ca²⁺ channels open`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Light → retinal isomerization → transducin → phosphodiesterase → cGMP falls → cGMP-gated Na⁺ channels close → hyperpolarization and REDUCED glutamate release. Photoreceptors are depolarized in the dark, and they signal with graded potentials, not action potentials — both classic reversals the MCAT loves.`
          },
          {
            question: `A patient staring at a yellow circle sees a blue afterimage when looking at a white wall. A researcher argues this specific phenomenon cannot be fully explained at the cone-receptor level. Which theory does the afterimage support, and at what stage does it operate?`,
            options: [`Opponent-process theory, operating in ganglion cells`, `Trichromatic theory, operating in the three cone types`, `Place theory, operating along the cochlea's basilar membrane`, `Feature detection, operating in V1 orientation columns`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Afterimages in the complementary color (yellow → blue) are the signature evidence for opponent-process channels (blue–yellow, red–green): fatiguing one pole causes rebound toward the other. These opponent channels are post-receptor — built in retinal ganglion cells and the LGN from cone inputs. Trichromatic theory is correct for cone-level reception but does not predict complementary afterimages; place theory concerns pitch, and V1 feature detectors code orientation, not color opponency.`
          },
          {
            question: `A pure 8,000 Hz tone is far above the maximum firing rate of any auditory neuron, yet listeners identify its pitch easily. The most complete explanation is that high-frequency pitch is coded by:`,
            options: [`The place of maximal vibration along the basilar membrane`, `Single auditory neurons firing 8,000 times per second`, `Rotational signals from the semicircular canals`, `The volley principle operating within single neurons`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Neurons cannot fire ~8,000 Hz (absolute refractory period caps rates near 1,000 Hz), so temporal/frequency coding fails; place theory takes over — high frequencies peak near the stiff base of the basilar membrane. The volley principle extends rate coding only to a few thousand Hz, and it is a property of neuron groups, not single cells.`
          }
        ]
      }
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Rods vs. cones.** Rods far outnumber cones and dominate the periphery; cones cluster in the fovea for color and acuity.
- **Thalamic relays.** Vision runs retina → LGN → V1, hearing cochlea → MGN → A1; smell alone bypasses the thalamus.
- **Two color theories.** Trichromatic theory holds at the cones; opponent-process works downstream and explains afterimages.
- **Pitch coding.** Place theory codes high frequencies; frequency coding, extended by volleys, codes low ones.

**Common traps**

- **Expecting light to depolarize.** Photoreceptors are depolarized in the dark; light lowers cGMP and hyperpolarizes them.
- **Mapping each eye to one hemisphere.** Each visual field, not each eye, maps to the opposite hemisphere; nasal fibers cross.
- **Assuming Na⁺ depolarizes hair cells.** Hair cells depolarize by K⁺ influx from the K⁺-rich endolymph.
- **Crediting the canals with tilt.** Semicircular canals sense rotation; the utricle and saccule sense linear acceleration and tilt.

<!-- yield:low -->
**Low-yield extras**

- About 120 million rods vs. 6 million cones per retina; Hubel and Wiesel's 1981 Nobel Prize
<!-- /yield -->`
    }
  ]
};
