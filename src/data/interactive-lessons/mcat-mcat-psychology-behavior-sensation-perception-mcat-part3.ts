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

### Gate Control Theory of Pain (Melzack & Wall, 1965)

- A spinal-cord "gate" modulates whether nociceptive signals reach the brain.
- Activity in **large-diameter touch fibers (A-beta)** closes the gate on **small-diameter pain fibers (A-delta, C)** — why rubbing a stubbed toe helps.
- Descending signals from the brain (attention, expectation, endorphins) also gate pain — the mechanism behind placebo analgesia and athletes not noticing injuries mid-game.

### Smell & Taste (the chemical senses)

- **Olfaction**: odorants bind olfactory receptor neurons → **olfactory bulb** → piriform cortex/limbic system, **bypassing the thalamus** (unique) — one reason odors evoke vivid emotional memories.
- **Gustation**: taste buds (papillae) detect five basic tastes — sweet, sour, salty, bitter, **umami**; signals travel via cranial nerves VII/IX/X → brainstem → **thalamus** → gustatory cortex (insula).
- **Kinesthesia/proprioception**: muscle-spindle and joint receptors report limb position — distinct from vestibular balance.

### Gestalt Principles ("the whole is other than the sum of its parts")

Founded by **Wertheimer, Köhler, and Koffka**; the umbrella law of **Prägnanz** — we perceive the simplest organization.

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

- **Size, shape, and color constancy** keep objects stable despite changing retinal images — misapplied constancy underlies size illusions (Ponzo, Müller-Lyer).
- **Perceptual set**: expectations prime interpretation (context effects, priming).
- Bottom-up = feature-driven; top-down = knowledge-driven; normal perception blends both.`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Body Senses & Perceptual Organization** 🎯`,
      exercise: {
        questions: [
          {
            question: `A nurse rubs the skin around an injection site before inserting the needle, and the patient reports less pain. According to gate control theory, this works because:`,
            options: [`Large-diameter touch fiber activity inhibits transmission from small pain fibers at a spinal gate`, `Rubbing causes sensory adaptation of the nociceptors themselves`, `Touch input raises the absolute threshold of pain receptors in the skin`, `The somatosensory cortex reassigns the pain signal to the touch homunculus`],
            correctAnswer: 0,
            explanation: `Melzack and Wall's gate control theory: A-beta (touch) fiber activity closes a spinal-cord gate on A-delta/C (pain) fiber transmission, so less nociceptive signal ascends. The modulation is central (spinal), not a change in the nociceptors — which distinguishes it from receptor adaptation.`
          },
          {
            question: `Odors are famously effective at triggering sudden, emotion-laden memories. The anatomical feature that best explains this is:`,
            options: [`Olfactory signals project to limbic structures without first relaying through the thalamus`, `Olfactory receptors are the most numerous receptors in the body`, `The olfactory bulb lies within the hippocampus`, `Smell is processed bilaterally while other senses are lateralized`],
            correctAnswer: 0,
            explanation: `Olfaction is the only sense that bypasses the thalamic relay, projecting directly toward the piriform cortex, amygdala, and entorhinal/hippocampal region — an intimate limbic connection linking odors with emotion and memory. The olfactory bulb is near, but not inside, the hippocampus.`
          },
          {
            question: `Looking out a moving train's window, fence posts near the track streak past while distant mountains barely move. Because the passenger is using only one eye, this depth cue is best identified as:`,
            options: [`Motion parallax, a monocular cue`, `Retinal disparity, a binocular cue`, `Convergence, an oculomotor binocular cue`, `Closure, a Gestalt grouping principle`],
            correctAnswer: 0,
            explanation: `Differential apparent speed of near vs. far objects during observer motion is motion parallax — available to a single eye, hence monocular. Retinal disparity and convergence both require two eyes; the stem's "only one eye" clause removes that ambiguity.`
          }
        ]
      }
    },
    {
      id: 'sp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Organization & Depth

<details>
<summary><b>Example 1: Predict the two-point threshold pattern</b></summary>

**Question:** A researcher measures two-point thresholds on the fingertip and the calf. Predict the result and explain it in terms of receptors and cortex.

**Solution:**
1. Fingertip threshold ≪ calf threshold — two nearby points on the fingertip are felt as two, but must be far apart on the calf. ✓
2. Reason: fingertips pack a high density of small-receptive-field mechanoreceptors and command a disproportionately large slice of the somatosensory homunculus.

**Key idea:** Acuity tracks receptor density and cortical magnification, not body-part size.
</details>

<details>
<summary><b>Example 2: Name the Gestalt principle from a stimulus</b></summary>

**Question:** Viewers see a triangle in the "Kanizsa figure" even though only three Pac-Man-shaped wedges are drawn. Which principle, and what does it show about perception?

**Solution:**
1. **Closure** — the visual system fills the gaps to complete a simple whole (illusory contours). ✓
2. It shows perception is constructive: the percept contains structure not present in the stimulus (top-down completion consistent with Prägnanz).

**Connection:** Contrast with proximity/similarity, which group *given* elements rather than inventing contours.
</details>

<details>
<summary><b>Example 3: Illusions from misapplied constancy</b></summary>

**Question:** In the Ponzo illusion, two identical bars drawn over converging "railroad tracks" look unequal. Explain using constancy.

**Solution:**
1. Linear perspective signals that the upper bar is *farther away*. ✓
2. Size constancy scales perceived size by assumed distance: same retinal size + greater assumed distance → perceived as larger.

**MCAT lesson:** Illusions are not receptor failures; they are normally adaptive top-down rules applied to a tricky stimulus.
</details>`
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Match mechanoreceptors to stimuli (Pacinian = deep pressure/vibration; Meissner = light touch; Merkel = sustained texture; Ruffini = stretch; free endings = pain/temperature).
- Gate control: touch-fiber and descending activity close a spinal gate on pain.
- Smell bypasses the thalamus → strong emotion/memory links; taste does not.
- Binocular cues = retinal disparity + convergence; everything else (including motion parallax) is monocular.
- Constancies stabilize perception — and generate illusions when their assumptions are violated.`
    }
  ]
};
