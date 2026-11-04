export const mcatSensoryPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  sections: [
    {
      id: 'sen1-intro',
      type: 'text' as const,
      content: `# Sensory Systems — Deep Dive

**Part 1 of 4 — Sensory Transduction Principles & Somatosensation**

### The Universal Pipeline

Every sense follows the same logic: **stimulus energy → receptor potential (graded) → action potentials → labeled line to the brain**. The receptor converts one energy form into a membrane voltage change (transduction); the BRAIN assigns quality based on WHICH pathway fires (the labeled-line principle) — stimulate the optic nerve electrically and you perceive light, not electricity. Each receptor has an **adequate stimulus**, the energy form it transduces at lowest threshold.

### Receptor Classes

| Receptor | Adequate stimulus | Examples |
|----------|-------------------|----------|
| Photoreceptor | Light | Rods, cones |
| Mechanoreceptor | Physical deformation | Touch receptors, hair cells, stretch receptors |
| Chemoreceptor | Chemicals | Olfactory neurons, taste cells, carotid body |
| Thermoreceptor | Temperature | Warm/cold free nerve endings |
| Nociceptor | Tissue damage / noxious stimuli | Free nerve endings (pain) |
| Baroreceptor | Pressure/stretch of vessels | Carotid sinus, aortic arch |
| Osmoreceptor | Osmolarity | Hypothalamic neurons |
| Proprioceptor | Body position | Muscle spindles, Golgi tendon organs |

<!-- yield:low -->
- Thermoreceptors transduce temperature through TRP-family ion channels; TRPV1, for example, opens with painful heat and with capsaicin.
<!-- /yield -->

### Adaptation: Tonic vs. Phasic

- **Tonic (slowly adapting)** receptors fire as long as the stimulus lasts — they encode SUSTAINED intensity (nociceptors, Merkel discs, muscle spindles). Pain adapting away would be dangerous.
- **Phasic (rapidly adapting)** receptors fire at stimulus ONSET and OFFSET, then fall silent — they encode CHANGE (Pacinian corpuscles, olfactory adaptation to a smell you stop noticing).

### Coding Intensity and Location

- **Intensity**: stronger stimuli → higher action potential **frequency** (frequency coding) and **recruitment** of more receptors, including higher-threshold ones. Action potential SIZE never changes — all-or-none.
- **Location**: each receptor monitors a **receptive field**. Small fields + dense innervation (fingertips, lips) → fine **two-point discrimination**; large sparse fields (back, calf) → coarse localization.

### The Somatosensory Roster

| Receptor | Modality | Adaptation | Depth |
|----------|----------|------------|-------|
| Merkel discs | Fine touch, pressure, texture | Slow | Superficial |
| Meissner corpuscles | Light touch, low-freq vibration | Rapid | Superficial |
| Ruffini endings | Skin stretch | Slow | Deep |
| Pacinian corpuscles | Deep pressure, high-freq vibration | Rapid | Deep |
| Free nerve endings | Pain, temperature | Mostly slow | All layers |

### Proprioception: Spindles vs. Golgi Tendon Organs

- **Muscle spindles** lie IN PARALLEL with muscle fibers and sense **stretch** (length and its rate) — the sensor behind the knee-jerk reflex
- **Golgi tendon organs** lie IN SERIES at the muscle-tendon junction and sense **tension**; extreme tension triggers reflexive relaxation (protection)

### Psychophysics at Concept Level

- **Absolute threshold**: minimum stimulus detectable (usually 50% of the time)
- **Just noticeable difference (JND)**: smallest detectable change
- **Weber's law**: the JND is a constant FRACTION of the baseline: $\\Delta I / I = k$. Detecting 1 extra gram on 10 grams (k = 0.1) predicts you need 10 extra grams on 100 grams.`
    },
    {
      id: 'sen1-worked',
      type: 'text' as const,
      content: `### Worked Example — Decoding a Receptor from Its Recording

**Problem 1.** A probe holds a constant 5-second indentation on a fingertip. Fiber A bursts at probe contact, falls silent during the hold, and bursts again at removal; a 250 Hz vibrating probe drives it continuously. Its field is large and its ending deep.

- **(a)** Is Fiber A rapidly or slowly adapting?
- **(b)** Which receptor is it?
- **(c)** Why does it follow a vibration but not the steady hold?

**(a) Adaptation.** Rapidly adapting. It fires only at the onset and offset of the indentation, so it reports change, not sustained pressure.

**(b) Identity.** Rapid adaptation, a deep ending in the dermis and a large receptive field mark a **Pacinian corpuscle**.

**(c) The capsule.** Its lamellated capsule mechanically filters out sustained pressure and transmits only changing stimuli. A vibration is continuous change, which is WHY it is the high-frequency vibration specialist.

**Problem 2.** During the same 5-second fingertip indentation, Fiber B fires throughout the hold at a rate that rises with indentation depth. Its receptive field is small and sharply bounded, and its ending is superficial.

- **(a)** Is Fiber B rapidly or slowly adapting?
- **(b)** Which receptor is it?
- **(c)** What does its small, superficial field let the fingertip do?

**(a) Adaptation.** Slowly adapting: it keeps firing for the entire hold.

**(b) Identity.** Slow adaptation with a superficial ending and fine spatial resolution marks a **Merkel disc** afferent.

**(c) Fine detail.** A small, superficial receptive field supports texture perception and fine two-point discrimination.

**Problem 3.** Fiber C, recorded during the same fingertip indentation, stays silent while the probe presses, but fires vigorously when the probe is heated to 47 degrees C.

- **(a)** What kind of receptor is Fiber C?
- **(b)** The probe pressed on Fiber C's ending too. Why did it not respond?

**(a) Identity.** It ignores innocuous touch but responds at a tissue-damaging temperature: a **nociceptor** (free nerve ending).

**(b) Adequate stimulus.** Each fiber reports only the energy form it transduces at low threshold. The probe pressed on all three endings, but pressure is not Fiber C's adequate stimulus.

**Problem 4.** A subject's two-point threshold is 2 mm on the fingertip and 40 mm on the forearm.

- **(a)** What property of the skin's receptors explains the difference?
- **(b)** What central factor adds to it?
- **(c)** Does the fingertip owe its acuity to different receptor types?

**(a) Fields and density.** Fingertip receptors have small receptive fields and dense innervation; forearm fields are large and sparse.

**(b) Cortical magnification.** The fingertip also claims a proportionally larger territory of somatosensory cortex.

**(c) No.** The difference reflects receptive field size, innervation density and cortical territory, not different receptor types.`
    },
    {
      id: 'sen1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transduction & Somatosensation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Direct electrical stimulation of the auditory nerve is perceived as sound, not as electricity. This observation best illustrates:`,
            options: [`Weber's law of just-noticeable differences`, `The labeled-line principle`, `Sensory adaptation to a constant stimulus`, `Frequency coding of stimulus intensity`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The brain interprets any activity in the auditory pathway as sound, regardless of what actually triggered it — quality is assigned by the line, not the stimulus. This is exactly why cochlear implants work. Weber's law concerns discriminating intensities; adaptation concerns responses fading; frequency coding concerns how strong a stimulus feels.`
          },
          {
            question: `In an experiment, the lamellated capsule of a Pacinian corpuscle is removed. The bare nerve ending now fires throughout a steady press instead of only at its onset and offset. The best explanation is that:`,
            options: [`The capsule supplied the ion channels that open on pressure`, `Removing the capsule injured the axon, so it fires spontaneously`, `The capsule is the filter that makes it adapt rapidly`, `Stripped of its capsule, the ending has become a nociceptor`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The lamellated capsule mechanically filters out sustained pressure and passes only changes to the ending inside. Without it, a steady press keeps deforming the ending, so the fiber fires for as long as the press lasts: its rapid adaptation came from the capsule, not the nerve. The pressure-gated channels sit in the nerve ending itself, which is why the bare ending still responds at all. Spontaneous injury firing would not start and stop with the press. The ending still reports pressure, its adequate stimulus, so it has not become a pain receptor.`
          },
          {
            question: `A subject can just detect the difference between 100 g and 105 g weights. By Weber's law, the smallest increase she should detect on a 400 g baseline is about:`,
            options: [`5 g`, `10 g`, `40 g`, `20 g`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Weber's law: $\\Delta I / I = k$. Here $k = 5/100 = 0.05$, so on 400 g the JND is $0.05 \\times 400 = 20$ g. Answering 5 g treats the JND as an absolute constant — the exact misconception Weber's law corrects: discriminability scales with the baseline.`
          },
          {
            question: `During a passive stretch of the quadriceps, which proprioceptor responds, and what does it encode?`,
            options: [`The muscle spindle, in parallel with muscle fibers, encoding muscle length`, `The Golgi tendon organ, in parallel with muscle fibers, encoding muscle length`, `The muscle spindle, in series with the tendon, encoding tension`, `The Pacinian corpuscle in the joint capsule, encoding vibration`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Spindles lie IN PARALLEL with extrafusal fibers, so stretching the muscle stretches them — they report length and its rate of change (the stretch-reflex sensor). Golgi tendon organs lie IN SERIES at the tendon and report TENSION, not length. The Golgi-tendon-organ-in-parallel choice and the spindle-in-series-encoding-tension choice each swap attributes — the classic spindle/GTO confusion. Vibration receptors do not signal a passive stretch.`
          },
          {
            question: `Nociceptors show little sensory adaptation compared with olfactory receptors. The most sensible functional explanation is:`,
            options: [`Nociceptors lack the ion channels required for adaptation`, `Pain fibers are unmyelinated, so they cannot adapt`, `Persistent pain protects by reporting ongoing tissue damage`, `Olfactory receptors are tonic receptors and nociceptors are phasic`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Adaptation suits stimuli where only CHANGE matters; tissue damage remains behaviorally urgent as long as it persists, so persistent nociceptor signaling protects the organism and nociceptors are tonic by design. The tonic-olfactory/phasic-nociceptor claim states the classification backwards — nociceptors are the tonic ones here. Myelination and conduction velocity are unrelated to adaptation (and many pain fibers are thinly myelinated A-delta fibers), and the channel claim is both false and non-explanatory.`
          }
        ]
      }
    },
    {
      id: 'sen1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Labeled lines.** A stimulus becomes a graded receptor potential, then spikes; perceived quality comes from WHICH pathway fires.
- **Tonic vs. phasic.** Tonic (Merkel, Ruffini, spindles, nociceptors) report sustained stimuli; phasic (Meissner, Pacinian) report change.
- **Intensity and location.** Stronger stimuli raise firing frequency and recruitment; small, dense receptive fields localize finely.
- **Weber's law.** $\\Delta I / I = k$: the just noticeable difference is a constant fraction of the baseline.

**Common traps**

- **Bigger action potentials.** Action potentials are all-or-none; intensity raises firing frequency and recruitment, never spike size.
- **Swapping spindles and GTOs.** Spindles lie in parallel and sense stretch; Golgi tendon organs lie in series and sense tension.
- **A fixed JND.** The detectable change scales with the baseline: 5 g on 100 g means about 20 g on 400 g.
- **Pain adapting away.** Nociceptors are tonic, not phasic; persistent pain keeps reporting ongoing tissue damage.

<!-- yield:low -->
**Low-yield extras**

- Thermoreceptors use TRP-family channels (TRPV1 opens with painful heat and capsaicin)
<!-- /yield -->`
    }
  ]
};
