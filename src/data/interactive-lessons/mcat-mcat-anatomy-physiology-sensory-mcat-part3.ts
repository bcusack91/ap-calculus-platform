export const mcatSensoryPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  sections: [
    {
      id: 'sen3-intro',
      type: 'text' as const,
      content: `# Sensory Systems — Deep Dive

**Part 3 of 4 — Hearing & the Vestibular System**

### The Sound Pathway, In Order

Pinna → auditory canal → **tympanic membrane** (eardrum) → ossicles (**malleus → incus → stapes**) → **oval window** → perilymph → **basilar membrane** vibrates → **hair cells** of the organ of Corti → stereocilia shear against the **tectorial membrane** → **K+ influx depolarizes** the hair cell → **spiral ganglion** neurons → **cranial nerve VIII** (vestibulocochlear).

- Hair cells depolarize by **K+ INFLUX**: the endolymph around the stereocilia is uniquely K+-rich, so K+ rushes IN when the mechanically gated channels open, the reverse of the usual neuronal story
- The **round window** bulges outward as the oval window is pushed in: incompressible fluid needs a pressure-relief valve

### Middle-Ear Impedance Matching

Airborne sound striking fluid directly would mostly reflect. The middle ear amplifies pressure two ways: the tympanic membrane's area is far larger than the oval window's (same force, smaller area → higher pressure, $P = F/A$), and the ossicles add lever action. Together this impedance matching allows efficient air-to-fluid transfer.

<!-- yield:low -->
- The numbers: the eardrum's area is roughly 17-20 times the oval window's, so the area ratio alone multiplies pressure by about that factor.
<!-- /yield -->

### Tonotopy: Place Theory

The basilar membrane is not uniform:

- **Base** (near oval window): **narrow and STIFF** → resonates at **HIGH frequencies**
- **Apex** (far end): **wide and floppy** → resonates at **LOW frequencies**

Each frequency maximally vibrates one place; the brain reads pitch from WHICH hair cells fire (**place theory**), preserved as a tonotopic map up the pathway. **Loudness** is coded separately, by vibration **amplitude** → firing rate and recruitment. For sound intensity comparisons, remember the decibel scale is logarithmic: $\\beta = 10 \\log(I/I_0)$.

Central route: cochlear nuclei (brainstem) → further brainstem and midbrain relays → **medial geniculate nucleus (MGN)** of the thalamus → **auditory cortex in the temporal lobe**. (Vision uses the LGN; audition the MGN.)

<!-- yield:low -->
- The intermediate relays are the superior olive (which compares input from the two ears to localize sound) and the inferior colliculus.
<!-- /yield -->

### The Vestibular System: Two Kinds of Acceleration

Same transducer (hair cells), different mechanical attachments:

| Organ | Stimulus | Mechanism |
|-------|----------|-----------|
| **Semicircular canals** (3, mutually orthogonal) | **Rotational acceleration** in any plane | Endolymph lags behind head rotation, deflecting the **cupula** over the crista's hair cells |
| **Utricle & saccule** (otolithic organs) | **Linear acceleration** and static **head tilt** | Dense calcium carbonate **otoliths** ride atop a gel; their inertia (or gravity) shears the hair cells beneath |

Utricle ≈ horizontal accelerations (car speeding up); saccule ≈ vertical (elevator). The canals report only CHANGES in rotation — during constant-velocity spinning the endolymph catches up and the signal fades (why dizziness returns when you stop).

### Conductive vs. Sensorineural Hearing Loss

- **Conductive**: the mechanical path fails (wax, ossicle fixation, perforated eardrum) — sound never reaches the cochlea efficiently. Bone conduction bypasses it.
- **Sensorineural**: hair cells or CN VIII damaged (loud-noise exposure, aging, ototoxic drugs) — transduction itself fails; bone conduction does not help. Loud-noise damage typically begins with **high-frequency** loss (basal hair cells).`
    },
    {
      id: 'sen3-worked',
      type: 'text' as const,
      content: `### Worked Example — Localizing a Lesion Along the Auditory Chain

**Problem 1.** A patient's air-conduction thresholds (headphones) are poor but bone-conduction thresholds (a vibrator on the mastoid bone) are NORMAL, at all frequencies equally. Imaging shows the stapes fixed by abnormal bone growth (otosclerosis).

- **(a)** What does normal bone conduction say about the cochlea?
- **(b)** Is the loss conductive or sensorineural?
- **(c)** Why does a fixed stapes weaken airborne sound so much?
- **(d)** Would a hearing aid help?

**(a) The cochlea works.** A mastoid vibrator shakes the skull and cochlear fluid directly, bypassing the outer and middle ear. Normal bone thresholds mean the cochlea and nerve are fine.

**(b) Conductive.** When bone conduction outperforms air conduction, the MECHANICAL pathway through the outer and middle ear is the problem.

**(c) No impedance matching.** Fixed ossicles cannot perform impedance matching, so airborne sound reflects off the cochlear fluid instead of entering it.

**(d) Yes.** A hearing AID (amplifying sound) or surgery helps, because the sensory machinery is intact.

**Problem 2.** After a long career operating jackhammers, a patient has air- AND bone-conduction thresholds that are equally poor, with the loss concentrated above 4000 Hz.

- **(a)** Is the loss conductive or sensorineural?
- **(b)** Where along the basilar membrane is the damage?
- **(c)** Would amplification or a cochlear implant serve better if those hair cells are dead?

**(a) Sensorineural.** Equal air and bone deficits mean bypassing the middle ear gains nothing: the cochlea itself fails.

**(b) The base.** High-frequency loss localizes damage to hair cells at the **BASE** of the basilar membrane, the stiff, narrow region that resonates at high frequencies and bears the brunt of noise trauma.

**(c) The implant.** Amplification cannot drive dead hair cells; a cochlear implant (Part 4) bypasses them. Across these cases, bone-vs-air separates conductive from sensorineural loss, and the frequency pattern maps damage onto the basilar membrane via tonotopy.

**Problem 3.** A patient has a near-normal pure-tone audiogram but understands speech presented to the left ear poorly. MRI shows a tumor on the left vestibulocochlear nerve.

- **(a)** Is transduction or transmission failing?
- **(b)** What other symptom should you expect, and why?

**(a) Transmission.** This is a retrocochlear (nerve) lesion: transduction is normal but transmission along CN VIII is degraded, so speech comprehension suffers out of proportion to pure-tone thresholds.

**(b) Balance problems.** CN VIII carries vestibular afferents too, so vertigo and unsteadiness are expected companions.`
    },
    {
      id: 'sen3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hearing & Vestibular** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which sequence correctly orders the structures sound energy traverses?`,
            options: [`Tympanic membrane → oval window → malleus → incus → stapes → basilar membrane → hair cells`, `Tympanic membrane → malleus → incus → stapes → oval window → basilar membrane → hair cells`, `Oval window → tympanic membrane → ossicles → cochlea → hair cells`, `Tympanic membrane → malleus → incus → stapes → round window → basilar membrane → hair cells`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Eardrum → the ossicular chain in order (malleus, incus, stapes) → the stapes footplate on the OVAL window → cochlear fluid → basilar membrane → hair cells. The oval window comes AFTER the ossicles, not before them, and the tympanic membrane, not the oval window, receives sound first; the ROUND window is the pressure-relief outlet, not the entry point.`
          },
          {
            question: `A pure 8000 Hz tone maximally stimulates hair cells located:`,
            options: [`At the apex of the basilar membrane, where it is wide and floppy`, `Uniformly along the entire basilar membrane`, `At the base of the basilar membrane, where it is narrow and stiff`, `On the cupula of the horizontal semicircular canal`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Tonotopy: the stiff, narrow BASE resonates at HIGH frequencies; the wide, compliant APEX handles LOW frequencies. (A useful anchor: noise-induced hearing loss starts with high frequencies because basal hair cells absorb the most energy.) The cupula belongs to the vestibular system and does not encode sound.`
          },
          {
            question: `Hair cells depolarize when their stereocilia bend toward the tallest cilium because:`,
            options: [`Voltage-gated Na+ channels open in the stereocilia`, `Mechanically gated channels let K+ flow out to perilymph`, `Mechanically gated channels admit Na+ from Na+-rich endolymph`, `Mechanically gated channels let K+ flow in from endolymph`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The endolymph surrounding the stereocilia is unusually potassium-rich (and sodium-poor), so the electrochemical gradient drives K+ INTO the cell when tip-link-gated channels open — depolarization by K+ influx, the reverse of the usual neuronal role of K+. K+ flowing OUT would hyperpolarize, not depolarize. The channels are mechanically gated, not voltage-gated, and the trigger is not Na+.`
          },
          {
            question: `After spinning at constant velocity for 30 seconds, a dancer no longer feels rotation; when she abruptly stops, she feels she is spinning the opposite way. This is because the semicircular canals:`,
            options: [`Detect angular acceleration, not constant rotation`, `Use otoliths to sense linear motion, and these fatigue during spinning`, `Adapt because their otoliths dissolve with prolonged motion`, `Are disabled by high K+ in the endolymph during rotation`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The canals work by endolymph INERTIA: fluid lags during acceleration, deflecting the cupula. At constant velocity the fluid reaches the head's speed and the signal fades; deceleration then makes the still-moving fluid push the cupula the OTHER way — a false reversed-rotation signal. Otoliths belong to the utricle/saccule (linear acceleration), and they do not dissolve.`
          },
          {
            question: `A patient hears a tuning fork poorly both when it is held next to the ear canal and when it is pressed against the mastoid bone, though still better by air than by bone. This pattern indicates:`,
            options: [`Conductive loss from fixation of the ossicles`, `A unilateral lesion of the auditory cortex`, `Sensorineural loss from cochlear hair cell damage`, `Normal hearing, since air conduction always wins`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Bone conduction vibrates the skull and stimulates the cochlea directly, bypassing the eardrum and ossicles. When BOTH routes are poor, bypassing the middle ear gains nothing, so the cochlea (or CN VIII) is failing: sensorineural loss, with air keeping its normal advantage over bone. Fixed ossicles (a conductive loss) would leave bone conduction normal and better than air. A one-sided auditory cortex lesion leaves tuning-fork thresholds near normal, because each ear's input reaches both hemispheres. Air beating bone is the normal pattern, but normal hearing would not make both routes poor, and air does not always win: in conductive loss bone does.`
          }
        ]
      }
    },
    {
      id: 'sen3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **The sound pathway.** Eardrum → ossicles → oval window → basilar membrane → hair cells → CN VIII → MGN → temporal cortex.
- **Impedance matching.** A large eardrum driving a small oval window, plus ossicle leverage, raises pressure into fluid.
- **Tonotopy.** The stiff, narrow base resonates at high frequencies; the wide, floppy apex at low ones.
- **Canals vs. otoliths.** Semicircular canals sense rotational acceleration; utricle and saccule sense linear acceleration and tilt.

**Common traps**

- **K+ leaving hair cells.** Hair cells depolarize by K+ INFLUX from potassium-rich endolymph, not by K+ efflux or Na+ entry.
- **Round window as the entry.** The stapes drives the oval window; the round window only bulges outward to relieve pressure.
- **Canals sensing steady spin.** Canals report changes in rotation; at constant velocity the endolymph catches up and the signal fades.
- **Bone conduction always wins.** Normal ears hear better by air; bone beating air means conductive loss, both poor means sensorineural.

<!-- yield:low -->
**Low-yield extras**

- The eardrum is about 17-20 times the oval window's area; the brainstem relays between the cochlear nuclei and the MGN are the superior olive (sound localization) and the inferior colliculus
<!-- /yield -->`
    }
  ]
};
