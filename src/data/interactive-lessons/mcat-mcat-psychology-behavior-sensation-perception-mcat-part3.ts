export const mcatPsychSensPercPart3Data = {
  topicSlug: 'mcat-psychology-behavior-sensation-perception-mcat',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `# Sensation & Perception

**Part 3 of 4 — Body Senses, Gestalt Organization & Depth**

### Somatosensation: the Skin Senses

| Receptor | Detects |
|----------|---------|
| **Meissner corpuscles** | Light touch, low-frequency vibration (fast-adapting) |
| **Pacinian corpuscles** | Deep pressure, high-frequency vibration (fast-adapting) |
| **Merkel discs** | Sustained light pressure, texture/edges (slow-adapting) |
| **Ruffini endings** | Skin stretch (slow-adapting) |
| **Free nerve endings** | Pain (nociceptors) and temperature (thermoreceptors) |

- Signals ascend to the **somatosensory cortex (parietal lobe)**, mapped as a distorted homunculus — cortical area tracks receptor *density* (fingers, lips), not body-part size.
- **Two-point threshold**: minimum separation felt as two touches; smallest where receptor density is highest.

### Gate Control Theory of Pain (Melzack & Wall)

- A spinal-cord "gate" modulates whether nociceptive signals reach the brain.
- Activity in **large-diameter touch fibers** closes the gate on **small-diameter pain fibers** — why rubbing a stubbed toe helps.

<!-- yield:low -->
- Fiber classes: the large touch fibers are A-beta; the small pain fibers are A-delta (fast, sharp pain) and C (slow, dull or burning pain). Melzack and Wall proposed the theory in 1965.
<!-- /yield -->

- Descending signals from the brain (attention, expectation, endorphins) also gate pain — the mechanism behind placebo analgesia and athletes not noticing injuries mid-game.

### Smell & Taste (the chemical senses)

- **Olfaction**: odorants bind olfactory receptor neurons → **olfactory bulb** → piriform cortex/limbic system, **bypassing the thalamus** (unique) — one reason odors evoke vivid emotional memories.
- **Gustation**: taste buds (housed in the tongue's papillae) detect five basic tastes — sweet, sour, salty, bitter, **umami**; signals travel via cranial nerves → brainstem → **thalamus** → gustatory cortex (insula).

<!-- yield:low -->
- The taste nerves: CN VII (anterior two-thirds of the tongue), CN IX (posterior third), CN X (epiglottis).
<!-- /yield -->

- **Kinesthesia/proprioception**: muscle-spindle and joint receptors report limb position — distinct from vestibular balance.

### Gestalt Principles ("the whole is other than the sum of its parts")

The umbrella law is **Prägnanz** — we perceive the simplest organization.

<!-- yield:low -->
- The Gestalt school was founded by Max Wertheimer, Wolfgang Köhler, and Kurt Koffka.
<!-- /yield -->

| Principle | We group elements that are… |
|-----------|------------------------------|
| Proximity | Near each other |
| Similarity | Alike in form/color |
| Continuity | On a smooth continuous path |
| Closure | Completable into a whole (fill in gaps) |
| Figure–ground | Separated into object vs. background |

### Depth Perception

- **Binocular cues** (need two eyes): **retinal disparity** (image difference between eyes; larger = closer) and **convergence** (eyes rotate inward for near objects)
- **Monocular cues** (one eye suffices): relative size, interposition (overlap), linear perspective, texture gradient, light/shadow, **motion parallax** (near objects sweep past faster), and accommodation
- **Visual cliff** (Gibson & Walk): crawling infants refuse the "deep" side → depth perception emerges early, by crawling age

### Perceptual Constancies & Top-Down Effects

- **Size, shape, and color constancy** keep objects stable despite changing retinal images.
- **Perceptual set**: expectations prime interpretation (context effects, priming).
- Bottom-up = feature-driven; top-down = knowledge-driven; normal perception blends both.`
    },
    {
      id: 'sp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Organization & Depth

**Problem 1.** In the Ponzo illusion, two identical bars drawn across converging "railroad tracks" that meet near the top look unequal in length.

- **(a)** Which depth cue do the tracks supply, and which bar does it place farther away?
- **(b)** Why does the bar that seems farther away look longer?
- **(c)** Is the illusion a failure of the receptors?

**(a) Linear perspective.** Converging lines signal distance, so the upper bar, nearer the point where the tracks meet, seems farther away.

**(b) Misapplied constancy.** Size constancy scales perceived size by assumed distance. The same retinal size at a greater assumed distance is seen as larger, so the upper bar looks longer.

**(c) Not a receptor fault.** No. Illusions are normally adaptive top-down rules applied to a tricky stimulus; misapplied constancy also underlies the Müller-Lyer illusion.

**Problem 2.** A researcher measures two-point thresholds on the fingertip and on the calf.

- **(a)** Which site will have the smaller two-point threshold?
- **(b)** What property of the skin's receptors explains the difference?
- **(c)** How is the difference reflected in the somatosensory cortex?

**(a) Prediction.** The fingertip threshold is far smaller: two nearby points feel like two on the fingertip but must be far apart on the calf.

**(b) Receptor density.** Fingertips pack a high density of mechanoreceptors with small receptive fields.

**(c) Cortical magnification.** Fingertips command a disproportionately large slice of the somatosensory homunculus. Acuity tracks receptor density and cortical area, not body-part size.

**Problem 3.** Viewers of the "Kanizsa figure" see a triangle, although only three Pac-Man-shaped wedges are drawn.

- **(a)** Which Gestalt principle produces the triangle?
- **(b)** What does the triangle show about perception?
- **(c)** How does this principle differ from proximity or similarity?

**(a) Closure.** The visual system fills the gaps to complete a simple whole, producing illusory contours.

**(b) Perception is constructive.** The percept contains structure that is not in the stimulus: top-down completion, consistent with Prägnanz.

**(c) Inventing vs. grouping.** Proximity and similarity group elements that are actually drawn; closure goes further and supplies contours that are missing.`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Body Senses & Perceptual Organization** 🎯`,
      exercise: {
        questions: [
          {
            question: `A nurse rubs the skin around an injection site before inserting the needle, and the patient reports less pain. According to gate control theory, this works because:`,
            options: [`Large touch fibers inhibit pain-fiber transmission at a spinal gate`, `Rubbing causes sensory adaptation of the nociceptors themselves`, `Touch input raises the absolute threshold of pain receptors in the skin`, `The somatosensory cortex reassigns the pain signal to the touch homunculus`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Melzack and Wall's gate control theory: activity in large-diameter touch fibers closes a spinal-cord gate on small-diameter pain-fiber transmission, so less nociceptive signal ascends. The modulation is central (spinal), not a change in the nociceptors — which distinguishes it from receptor adaptation.`
          },
          {
            question: `Odors are famously effective at triggering sudden, emotion-laden memories. The anatomical feature that best explains this is:`,
            options: [`Olfactory signals reach limbic structures without a thalamic relay`, `Olfactory receptors are the most numerous receptors in the body`, `The olfactory bulb lies within the hippocampal formation`, `Smell is processed bilaterally while other senses are lateralized`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Olfaction is the only sense that bypasses the thalamic relay, projecting directly toward the piriform cortex, amygdala, and entorhinal/hippocampal region — an intimate limbic connection linking odors with emotion and memory. The olfactory bulb lies beneath the frontal lobe, well outside the hippocampal formation.`
          },
          {
            question: `Looking out a moving train's window, fence posts near the track streak past while distant mountains barely move. Because the passenger is using only one eye, this depth cue is best identified as:`,
            options: [`Motion parallax, a monocular cue`, `Retinal disparity, a binocular cue`, `Convergence, an oculomotor binocular cue`, `Closure, a Gestalt grouping principle`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Differential apparent speed of near vs. far objects during observer motion is motion parallax — available to a single eye, hence monocular. Retinal disparity and convergence both require two eyes; the stem's "only one eye" clause removes that ambiguity.`
          }
        ]
      }
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Receptor density rules.** Two-point acuity and cortical area track receptor density, not body-part size.
- **Gate control.** Large touch fibers and descending signals close a spinal gate on small pain fibers.
- **Smell skips the thalamus.** Olfaction reaches limbic areas directly, tying odors to emotion and memory; taste does not.
- **Gestalt grouping.** Prägnanz: we see the simplest whole, grouping by proximity, similarity, continuity and closure.

**Common traps**

- **Mixing up touch receptors.** Pacinian: deep pressure and vibration; Meissner: light touch; Merkel: texture; Ruffini: stretch.
- **Pain relief as adaptation.** Rubbing eases pain by closing a spinal gate, not by adapting the nociceptors themselves.
- **Motion parallax as binocular.** Only retinal disparity and convergence need two eyes; motion parallax works with one.
- **Illusions as receptor faults.** Size illusions come from misapplied constancy, an adaptive top-down rule, not failed receptors.

<!-- yield:low -->
**Low-yield extras**

- Gate-control fiber classes (A-beta touch; A-delta and C pain) and the 1965 date; the Gestalt founders Wertheimer, Köhler, and Koffka; the taste cranial nerves CN VII (anterior two-thirds), IX (posterior third), X (epiglottis)
<!-- /yield -->`
    }
  ]
};
