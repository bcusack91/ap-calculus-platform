export const mcatSensoryPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  sections: [
    {
      id: 'sen4-intro',
      type: 'text' as const,
      content: `# Sensory Systems — Deep Dive

**Part 4 of 4 — MCAT Integration: Chemical Senses & Sensory Passages**

### Olfaction: The Rule-Breaker

- Odorants dissolve in mucus and bind **G protein-coupled receptors (GPCRs)** on olfactory receptor neurons in the olfactory epithelium
- **One receptor type per neuron**: each olfactory neuron expresses a single receptor gene out of hundreds; an odor is encoded by the COMBINATION of receptor types it activates
- Axons project through the cribriform plate directly to the **olfactory bulb**, then onward to olfactory cortex and limbic structures
- Olfaction is the **ONLY sense that bypasses the thalamus** on its way to the cortex (vision → LGN, audition → MGN, touch/taste → other thalamic relays). Its direct limbic access (amygdala, hippocampal circuits) is the standard explanation for odor-triggered emotion and memory
- Olfactory receptor neurons are true neurons that regenerate throughout life — an exception worth knowing
- **Pheromones**: chemical signals between individuals of a species; in many animals detected by the vomeronasal organ (rudimentary in humans)

### Gustation: Two Transduction Strategies

Five basic tastes, two mechanisms:

| Taste | Mechanism |
|-------|-----------|
| Sweet | **GPCR** (T1R family) |
| Umami (glutamate) | **GPCR** (T1R family) |
| Bitter | **GPCR** (T2R family — many receptors, hence bitterness as a broad poison alarm) |
| Salty | **Ion channel** — Na+ enters directly and depolarizes the taste cell |
| Sour | **Ion channel** — H+ acts through proton-sensitive channels |

Taste cells are modified epithelial cells (not neurons) in taste buds; all five tastes are detected across the whole tongue — the "tongue map" is a myth. The gustatory pathway DOES relay through the thalamus.

### Pain Modulation

- **Gate control theory** (concept level): non-painful mechanosensory input (rubbing a bumped elbow) activates inhibitory interneurons in the spinal dorsal horn that dampen ascending pain transmission — touch "closes the gate" on pain
- Descending pathways from the brain (endorphin/enkephalin systems) also suppress pain at the spinal level
- **Referred pain**: visceral and somatic afferents converge on the same spinal neurons, so the brain mislocalizes visceral pain to a skin region (cardiac ischemia felt in the left arm/jaw)

### The Passage Toolkit

**1. Knockout logic.** Given a mutation, find the step in the transduction cascade and predict the deficit: no transducin → rods cannot respond to light (night blindness); no TRPV1-type heat-gated channel → blunted response to painful heat and capsaicin; no T1R subunit → loss of sweet/umami with bitter intact. Deficits are MODALITY-SPECIFIC when the broken protein is pathway-specific.

**2. Psychophysics data.** Weber fraction tables: smaller $k = \\Delta I / I$ means finer discrimination. Expect questions comparing modalities or testing whether data actually obey Weber's law (check whether $\\Delta I / I$ stays constant across baselines).

**3. Cochlear implant vs. hearing aid.** A hearing AID amplifies sound — it needs functioning hair cells, so it treats conductive (and mild sensorineural) loss. A cochlear IMPLANT bypasses dead hair cells entirely, electrically stimulating spiral ganglion neurons at positions chosen by frequency — an engineering application of **tonotopy** and the **labeled-line** principle. It requires an intact CN VIII.

**4. Tuning-fork logic (Rinne/Weber, concept level).** Comparing air vs. bone conduction separates conductive loss (bone ≥ air; sound lateralizes TOWARD the blocked ear, which loses competing background noise) from sensorineural loss (both routes reduced; sound lateralizes AWAY from the damaged ear).`
    },
    {
      id: 'sen4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Knockout Passage Across Two Senses

**Passage-style problem.** Researchers engineer three mouse lines and test each on (a) finding buried food by smell, (b) preference for sucrose solution vs. water, (c) avoidance of quinine (bitter) solution, and (d) withdrawal from a 50 degrees C hotplate.

- Line 1 lacks the G protein alpha subunit expressed only in olfactory receptor neurons (Galpha-olf).
- Line 2 lacks the T1R3 receptor subunit shared by the sweet and umami GPCRs.
- Line 3 lacks TRPV1, a heat- and capsaicin-gated cation channel in nociceptor endings.

**Line 1 predictions.** Odorant receptors are GPCRs; without their G protein, binding cannot be transduced into a receptor potential. The mouse fails the buried-food test (anosmia). Tests (b), (c), (d) are normal: taste uses different G proteins and cell types, and nociception is unrelated. Note the anatomy detail a passage might probe: the missing signal would have traveled directly to the olfactory bulb WITHOUT a thalamic relay.

**Line 2 predictions.** Sweet and umami detection collapse — the mouse treats sucrose like water (no preference). Bitter avoidance is INTACT because T2R bitter receptors are a separate family, and salty/sour survive because they use ion channels, not GPCRs at all. This dissociation — losing two tastes while three persist — is the signature of a shared-subunit knockout.

**Line 3 predictions.** Delayed or blunted withdrawal from noxious heat and indifference to capsaicin (which activates TRPV1 rather than damaging tissue). Smell and taste are untouched. Light touch is also normal — mechanoreceptors use different channels, illustrating that "pain" and "touch" are separate labeled lines from the skin inward.

**The exam skill.** Map each protein to (1) its cascade, (2) its cell type, (3) its pathway to the brain. A knockout produces deficits exactly as broad as the protein's expression — no broader — and every intact behavior is a control that localizes the lesion.`
    },
    {
      id: 'sen4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Chemical Senses & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which statement about the olfactory pathway is correct?`,
            options: [`Olfactory signals relay through the lateral geniculate nucleus before reaching cortex`, `Olfactory receptor neurons project directly to the olfactory bulb, bypassing the thalamus en route to cortex`, `Each olfactory receptor neuron expresses hundreds of different receptor types`, `Olfactory transduction uses mechanically gated ion channels`],
            correctAnswer: 1,
            explanation: `Olfaction is the lone thalamus-bypassing sense: receptor neurons synapse in the olfactory bulb, and information reaches olfactory/limbic cortex without a thalamic relay (the LGN is VISUAL). Each neuron expresses essentially ONE receptor type — the combinatorial code arises across neurons — and transduction is via GPCRs, not mechanogated channels.`
          },
          {
            question: `A drug blocks all taste-cell GPCR signaling but leaves ion channels untouched. Which tastes remain detectable?`,
            options: [`Sweet and umami`, `Bitter only`, `Salty and sour`, `None — all five tastes require GPCRs`],
            correctAnswer: 2,
            explanation: `Salty (direct Na+ entry) and sour (H+ acting on proton-sensitive channels) are ION-CHANNEL tastes and survive. Sweet, umami (T1R family), and bitter (T2R family) are GPCR-mediated and are lost. The two-mechanism split is the single most tested gustation fact.`
          },
          {
            question: `Rubbing the skin around a stubbed toe reduces the pain. Gate control theory explains this as:`,
            options: [`Rubbing depletes neurotransmitter in nociceptors`, `Mechanoreceptor activity destroys the local pain receptors`, `Touch input distracts the cortex, which stops attending to pain`, `Non-nociceptive mechanosensory afferents activate spinal inhibitory interneurons that suppress ascending pain transmission`],
            correctAnswer: 3,
            explanation: `The gate is in the SPINAL dorsal horn: large-fiber touch input drives inhibitory interneurons that dampen the pain-projection neurons — a circuit-level interaction, not transmitter depletion, receptor damage, or a purely cortical attention effect (descending modulation exists too, but gate control is the spinal mechanism).`
          },
          {
            question: `A patient with profound hearing loss from destroyed cochlear hair cells (but an intact auditory nerve) would be best helped by a cochlear implant rather than a hearing aid because the implant:`,
            options: [`Electrically stimulates spiral ganglion neurons directly, at electrode positions mapped to frequency, bypassing the dead hair cells`, `Amplifies sound enough to activate the remaining hair cells`, `Regenerates hair cells by delivering growth factors`, `Transmits sound through the skull by bone conduction`],
            correctAnswer: 0,
            explanation: `With hair cells gone, NO amount of amplification (hearing aid) or bone conduction can produce transduction — the transducers are dead. The implant substitutes for them, exciting the surviving nerve fibers along the tonotopic map so high-frequency electrodes stimulate basal positions. It exploits labeled lines; it does not repair biology.`
          },
          {
            question: `During cardiac ischemia, patients often feel pain in the left arm and jaw rather than the heart. The best explanation is that:`,
            options: [`Cardiac nociceptors physically extend into the arm`, `Visceral and somatic afferents converge on shared spinal neurons, and the brain attributes the input to the more familiar somatic source`, `The heart lacks nociceptors, so the arm's receptors respond to circulating signals`, `Ischemia lowers the firing threshold of all body nociceptors equally`],
            correctAnswer: 1,
            explanation: `Referred pain is a convergence problem: cardiac afferents enter the same spinal segments as afferents from the left arm/jaw dermatomes, and the brain — accustomed to somatic input from those neurons — mislocalizes the pain. Cardiac nociceptors exist and stay in the heart; no diffuse threshold change or circulating factor is required.`
          }
        ]
      }
    },
    {
      id: 'sen4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Olfaction: GPCRs, one receptor type per neuron, combinatorial coding, direct to the olfactory bulb — the ONLY sense bypassing the thalamus; close limbic ties explain odor-memory links
- Gustation: sweet/umami/bitter = GPCRs; salty/sour = ion channels; taste cells are epithelial, the tongue map is a myth, and taste DOES relay through the thalamus
- Pain: gate control (spinal touch-driven inhibition), descending endorphin modulation, referred pain from viscero-somatic convergence
- Knockout passages: a deficit is exactly as broad as the broken protein's expression — intact behaviors localize the lesion
- Cochlear implant = tonotopy + labeled lines applied (bypasses hair cells, needs CN VIII); hearing aid = amplification (needs hair cells); Rinne/Weber logic separates conductive from sensorineural loss`
    }
  ]
};
