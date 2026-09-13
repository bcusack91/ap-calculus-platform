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
| Thermoreceptor | Temperature | Warm/cold free nerve endings (TRP channels) |
| Nociceptor | Tissue damage / noxious stimuli | Free nerve endings (pain) |
| Baroreceptor | Pressure/stretch of vessels | Carotid sinus, aortic arch |
| Osmoreceptor | Osmolarity | Hypothalamic neurons |
| Proprioceptor | Body position | Muscle spindles, Golgi tendon organs |

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

**Passage-style problem.** An electrode records from three afferent fibers (A, B, C) innervating the skin of a fingertip while a probe applies a constant 5-second indentation.

- Fiber A: a burst of action potentials at probe contact, silence during the hold, a second burst at probe removal. A vibrating probe (250 Hz) drives it continuously. Its receptive field is large and its ending is deep in the dermis.
- Fiber B: fires throughout the entire 5-second hold at a rate that rises with indentation depth. Small, sharply bounded receptive field, superficial ending.
- Fiber C: silent during the indentation, but fires vigorously when the probe is heated to 47 degrees C.

**Fiber A** is **rapidly adapting** (onset/offset bursts, sustained response only to vibration), deep, with a large field — a **Pacinian corpuscle**. Its lamellated capsule mechanically filters sustained pressure, transmitting only changing stimuli; that is WHY it is the high-frequency vibration specialist.

**Fiber B** is **slowly adapting** with fine spatial resolution — a **Merkel disc** afferent. Its firing rate encodes sustained indentation depth (frequency coding of intensity), and its small superficial field supports texture and two-point discrimination.

**Fiber C** ignores innocuous touch but responds at tissue-damaging temperature — a **nociceptor** (free nerve ending). Note the adequate-stimulus logic: the probe pressed on all three endings, but each fiber reports only the energy form it transduces at low threshold.

**Extension.** If the fingertip's two-point threshold is 2 mm and the forearm's is 40 mm, the difference reflects receptive field size and innervation density — plus a proportionally larger cortical territory for the fingertip (cortical magnification), not different receptor TYPES.`
    },
    {
      id: 'sen1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transduction & Somatosensation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Direct electrical stimulation of the auditory nerve is perceived as sound, not as electricity. This observation best illustrates:`,
            options: [`Weber's law`, `The labeled-line principle`, `Sensory adaptation`, `Frequency coding of stimulus intensity`],
            correctAnswer: 1,
            explanation: `The brain interprets any activity in the auditory pathway as sound, regardless of what actually triggered it — quality is assigned by the line, not the stimulus. This is exactly why cochlear implants work. Weber's law concerns discriminating intensities; adaptation concerns responses fading; frequency coding concerns how strong a stimulus feels.`
          },
          {
            question: `Which receptor is best suited to detecting high-frequency vibration, and why?`,
            options: [`Merkel disc, because it adapts slowly and sits superficially`, `Free nerve ending, because it is unencapsulated`, `Pacinian corpuscle, because it signals only stimulus change`, `Ruffini ending, because it responds to skin stretch`],
            correctAnswer: 2,
            explanation: `A rapidly adapting receptor fires at stimulus change; a vibration is continuous change, so the Pacinian corpuscle fires on every cycle. Its lamellated capsule filters out sustained pressure. Slowly adapting Merkel discs encode sustained indentation and texture, Ruffini endings encode stretch, and free nerve endings serve pain and temperature.`
          },
          {
            question: `A subject can just detect the difference between 100 g and 105 g weights. By Weber's law, the smallest increase she should detect on a 400 g baseline is about:`,
            options: [`5 g`, `10 g`, `40 g`, `20 g`],
            correctAnswer: 3,
            explanation: `Weber's law: $\\Delta I / I = k$. Here $k = 5/100 = 0.05$, so on 400 g the JND is $0.05 \\times 400 = 20$ g. Answering 5 g treats the JND as an absolute constant — the exact misconception Weber's law corrects: discriminability scales with the baseline.`
          },
          {
            question: `During a passive stretch of the quadriceps, which proprioceptor responds, and what does it encode?`,
            options: [`The muscle spindle, in parallel with muscle fibers, encoding muscle length`, `The Golgi tendon organ, in parallel with muscle fibers, encoding muscle length`, `The muscle spindle, in series with the tendon, encoding tension`, `The Pacinian corpuscle in the joint capsule, encoding vibration`],
            correctAnswer: 0,
            explanation: `Spindles lie IN PARALLEL with extrafusal fibers, so stretching the muscle stretches them — they report length and its rate of change (the stretch-reflex sensor). Golgi tendon organs lie IN SERIES at the tendon and report TENSION, not length. The Golgi-tendon-organ-in-parallel choice and the spindle-in-series-encoding-tension choice each swap attributes — the classic spindle/GTO confusion. Vibration receptors do not signal a passive stretch.`
          },
          {
            question: `Nociceptors show little sensory adaptation compared with olfactory receptors. The most sensible functional explanation is:`,
            options: [`Nociceptors lack the ion channels required for adaptation`, `Pain fibers are unmyelinated, so they cannot adapt`, `Persistent pain protects by reporting ongoing tissue damage`, `Olfactory receptors are tonic receptors and nociceptors are phasic`],
            correctAnswer: 2,
            explanation: `Adaptation suits stimuli where only CHANGE matters; tissue damage remains behaviorally urgent as long as it persists, so persistent nociceptor signaling protects the organism and nociceptors are tonic by design. The tonic-olfactory/phasic-nociceptor claim states the classification backwards — nociceptors are the tonic ones here. Myelination and conduction velocity are unrelated to adaptation (and many pain fibers are thinly myelinated A-delta fibers), and the channel claim is both false and non-explanatory.`
          }
        ]
      }
    },
    {
      id: 'sen1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Transduction: stimulus energy → graded receptor potential → action potentials; perceived quality comes from the labeled line, not the stimulus
- Tonic/slowly adapting receptors encode sustained stimuli (Merkel, Ruffini, spindles, nociceptors); phasic/rapidly adapting encode change (Meissner, Pacinian)
- Intensity is coded by firing FREQUENCY and receptor recruitment — never by action potential size
- Small receptive fields + dense innervation = fine two-point discrimination (fingertips); spindles sense stretch (parallel), Golgi tendon organs sense tension (series)
- Weber's law $\\Delta I / I = k$: the detectable change is a constant fraction of the baseline`
    }
  ]
};
