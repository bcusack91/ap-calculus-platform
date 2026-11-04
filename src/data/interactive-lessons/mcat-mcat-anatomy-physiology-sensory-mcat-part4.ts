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
- Axons project directly to the **olfactory bulb**, then onward to olfactory cortex and limbic structures
- Olfaction is the **ONLY sense that bypasses the thalamus** on its way to the cortex (vision → LGN, audition → MGN, touch/taste → other thalamic relays). Its direct limbic access (amygdala, hippocampal circuits) is the standard explanation for odor-triggered emotion and memory
- Olfactory receptor neurons are true neurons that regenerate throughout life — an exception worth knowing
- **Pheromones**: chemical signals between individuals of the same species that trigger behavioral or physiological responses in the receiver

<!-- yield:low -->
- Olfactory axons reach the bulb by passing through the cribriform plate of the ethmoid bone (why a skull-base fracture can cause loss of smell).
- In many animals pheromones are detected by a separate vomeronasal organ, which is rudimentary in humans.
<!-- /yield -->

### Gustation: Two Transduction Strategies

Five basic tastes, two mechanisms:

| Taste | Mechanism |
|-------|-----------|
| Sweet | **GPCR** |
| Umami (glutamate) | **GPCR** (shares a receptor subunit with sweet) |
| Bitter | **GPCR** (a separate, large receptor family — many receptors, hence bitterness as a broad poison alarm) |
| Salty | **Ion channel** — Na+ enters directly and depolarizes the taste cell |
| Sour | **Ion channel** — H+ acts through proton-sensitive channels |

<!-- yield:low -->
- Receptor family names: sweet and umami receptors are T1R pairs that share the T1R3 subunit (sweet = T1R2 + T1R3, umami = T1R1 + T1R3); bitter receptors are the T2R family.
<!-- /yield -->

Taste cells are modified epithelial cells (not neurons) in taste buds; all five tastes are detected across the whole tongue — the "tongue map" is a myth. The gustatory pathway DOES relay through the thalamus.

### Pain Modulation

- **Gate control theory** (concept level): non-painful mechanosensory input (rubbing a bumped elbow) activates inhibitory interneurons in the spinal dorsal horn that dampen ascending pain transmission — touch "closes the gate" on pain
- Descending pathways from the brain (endorphin/enkephalin systems) also suppress pain at the spinal level
- **Referred pain**: visceral and somatic afferents converge on the same spinal neurons, so the brain mislocalizes visceral pain to a skin region (cardiac ischemia felt in the left arm/jaw)

### The Passage Toolkit

**1. Knockout logic.** Given a mutation, find the step in the transduction cascade and predict the deficit: no transducin → rods cannot respond to light (night blindness); no taste-cell Na+ channel → salty taste lost, sweet and bitter intact; no hair-cell mechanically gated channel → hearing AND balance lost, because both organs use hair cells, with vision intact. Deficits are MODALITY-SPECIFIC when the broken protein is pathway-specific.

**2. Psychophysics data.** Weber fraction tables: smaller $k = \\Delta I / I$ means finer discrimination. Expect questions comparing modalities or testing whether data actually obey Weber's law (check whether $\\Delta I / I$ stays constant across baselines).

**3. Cochlear implant vs. hearing aid.** A hearing AID amplifies sound — it needs functioning hair cells, so it treats conductive (and mild sensorineural) loss. A cochlear IMPLANT bypasses dead hair cells entirely, electrically stimulating spiral ganglion neurons at positions chosen by frequency — an engineering application of **tonotopy** and the **labeled-line** principle. It requires an intact CN VIII.

**4. Tuning-fork logic (concept level).** Comparing air vs. bone conduction separates conductive loss (bone ≥ air: the cochlea works, the mechanical route does not) from sensorineural loss (both routes reduced, with air still better than bone).

<!-- yield:low -->
- The clinical test names: the Rinne test compares air vs. bone conduction in one ear; in the Weber test (fork on the midline of the skull), sound lateralizes TOWARD a conductively blocked ear, which loses competing background noise, and AWAY from an ear with sensorineural damage.
<!-- /yield -->`
    },
    {
      id: 'sen4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Knockout Passage Across Two Senses

**Problem 1.** Mice lacking the G protein alpha subunit expressed only in olfactory receptor neurons are tested on finding buried food by smell, sucrose preference, quinine (bitter) avoidance, and withdrawal from a 50 degrees C hotplate.

- **(a)** Can these mice find the buried food?
- **(b)** Which of the other three tests are affected?

**(a) Smell.** No. Odorant receptors are GPCRs; without their G protein, odorant binding cannot be transduced into a receptor potential, so the mice fail the buried-food test (anosmia).

**(b) The other tests.** None. Sucrose preference, quinine avoidance and hotplate withdrawal are normal: taste uses different G proteins and cell types, and nociception is unrelated.
**Problem 2.** Mice lacking the receptor subunit shared by the sweet and umami GPCRs are offered sucrose solution vs. water, a quinine (bitter) solution, and salty and sour solutions.

- **(a)** Do they prefer sucrose over water?
- **(b)** Do they still avoid quinine?
- **(c)** Do they still detect salty and sour, and why?

**(a) Sweet.** No. Sweet and umami detection collapse, so the mice treat sucrose like water.

**(b) Bitter.** Yes. Bitter avoidance is INTACT because bitter receptors are a separate GPCR family.

**(c) Salty and sour.** Yes. They use ion channels, not GPCRs at all. Losing two tastes while three persist is the signature of a shared-subunit knockout.

**Problem 3.** Mice lacking a heat- and capsaicin-gated cation channel in nociceptor endings are placed on a 50 degrees C hotplate, given capsaicin, and tested for smell, taste and light touch.

- **(a)** How do they respond to the hotplate?
- **(b)** How do they respond to capsaicin?
- **(c)** Are smell, taste and light touch affected?
- **(d)** What general rule do all three mouse lines illustrate?

**(a) Heat.** Withdrawal from the noxious heat is delayed or blunted.

**(b) Capsaicin.** Indifference: capsaicin opens this channel rather than damaging tissue, so without the channel it has nothing to act on.

**(c) Other senses.** No. Smell and taste are untouched, and light touch is normal because mechanoreceptors use different channels: "pain" and "touch" are separate labeled lines from the skin inward.

**(d) The exam skill.** Map each protein to its cascade, its cell type and its pathway to the brain. A knockout produces deficits exactly as broad as the protein's expression, no broader, and every intact behavior is a control that localizes the lesion.

<!-- yield:low -->
- The real proteins: Problem 1's missing subunit is Galpha-olf, Problem 2's is T1R3, and Problem 3's channel is TRPV1.
<!-- /yield -->`
    },
    {
      id: 'sen4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Chemical Senses & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which statement about the olfactory pathway is correct?`,
            options: [`Olfactory signals relay through the lateral geniculate nucleus before reaching cortex`, `Olfactory neurons synapse in the bulb, bypassing the thalamus en route to cortex`, `Each olfactory receptor neuron expresses hundreds of different receptor types`, `Olfactory transduction uses mechanically gated ion channels in the cilia`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Olfaction is the lone thalamus-bypassing sense: receptor neurons synapse in the olfactory bulb, and information reaches olfactory/limbic cortex without a thalamic relay (the LGN is VISUAL). Each neuron expresses essentially ONE receptor type — the combinatorial code arises across neurons — and transduction is via GPCRs, not mechanogated channels.`
          },
          {
            question: `A drug blocks all taste-cell GPCR signaling but leaves ion channels untouched. Which tastes remain detectable?`,
            options: [`Sweet and umami`, `Bitter only`, `Salty and sour`, `None of the five`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Salty (direct Na+ entry) and sour (H+ acting on proton-sensitive channels) are ION-CHANNEL tastes and survive. Sweet, umami, and bitter are GPCR-mediated and are lost. The two-mechanism split is the single most tested gustation fact.`
          },
          {
            question: `Rubbing the skin around a stubbed toe reduces the pain. Gate control theory explains this as:`,
            options: [`Rubbing depletes stored neurotransmitter from nociceptor terminals`, `Mechanoreceptor activity destroys the local pain receptors`, `Touch input distracts the cortex, which stops attending to pain`, `Touch afferents activate spinal inhibitory interneurons`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The gate is in the SPINAL dorsal horn: large-fiber touch input drives inhibitory interneurons that dampen the pain-projection neurons — a circuit-level interaction, not transmitter depletion, receptor damage, or a purely cortical attention effect (descending modulation exists too, but gate control is the spinal mechanism).`
          },
          {
            question: `A patient with profound hearing loss from destroyed cochlear hair cells (but an intact auditory nerve) would be best helped by a cochlear implant rather than a hearing aid because the implant:`,
            options: [`Stimulates spiral ganglion neurons electrically`, `Amplifies sound enough to activate the remaining hair cells`, `Regenerates hair cells by delivering growth factors`, `Transmits sound through the skull by bone conduction`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `With hair cells gone, NO amount of amplification (hearing aid) or bone conduction can produce transduction — the transducers are dead. The implant substitutes for them, exciting the surviving nerve fibers along the tonotopic map so high-frequency electrodes stimulate basal positions. It exploits labeled lines; it does not repair biology.`
          },
          {
            question: `During cardiac ischemia, patients often feel pain in the left arm and jaw rather than the heart. The best explanation is that:`,
            options: [`Cardiac nociceptors physically extend into the arm`, `Visceral and somatic afferents converge on shared spinal neurons`, `The heart lacks nociceptors, so arm receptors respond instead`, `Ischemia lowers the threshold of all nociceptors equally`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Referred pain is a convergence problem: cardiac afferents enter the same spinal segments as afferents from the left arm/jaw dermatomes, and the brain — accustomed to somatic input from those neurons — mislocalizes the pain. Cardiac nociceptors exist and stay in the heart; arm receptors are not responding in their place, and no diffuse threshold change is required.`
          }
        ]
      }
    },
    {
      id: 'sen4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Olfaction skips the thalamus.** Olfactory neurons project to the bulb, then to olfactory and limbic cortex, with no thalamic relay.
- **Two taste mechanisms.** Sweet, umami and bitter use GPCRs; salty and sour use ion channels.
- **Pain modulation.** Touch damps pain at the spinal gate; visceral and somatic afferents converging on shared spinal neurons cause referred pain.
- **Knockout logic.** A deficit is exactly as broad as the broken protein's expression; intact behaviors localize the lesion.

**Common traps**

- **Hearing aids for dead hair cells.** Amplification needs working hair cells; a cochlear implant bypasses them but needs an intact CN VIII.
- **A regional tongue map.**All five tastes are detected across the whole tongue, and taste, unlike smell, relays through the thalamus.
- **Many receptors per neuron.** Each olfactory neuron expresses ONE receptor type; an odor is coded by the combination across neurons.
- **Gate control as distraction.** Rubbing works through spinal inhibitory interneurons, not cortical attention or transmitter depletion.

<!-- yield:low -->
**Low-yield extras**

- Olfactory axons cross the cribriform plate; the vomeronasal organ detects pheromones in many animals (rudimentary in humans); taste receptor family names (T1R pairs sharing T1R3 for sweet/umami, T2R for bitter); the knockout proteins Galpha-olf and TRPV1; the Rinne and Weber test names and Weber-test lateralization (toward a conductive ear, away from a sensorineural one)
<!-- /yield -->`
    }
  ]
};
