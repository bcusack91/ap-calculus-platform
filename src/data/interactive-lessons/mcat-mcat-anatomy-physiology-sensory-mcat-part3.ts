export const mcatSensoryPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  sections: [
    {
      id: 'sen3-intro',
      type: 'text' as const,
      content: `# Sensory Systems — Deep Dive

**Part 3 of 4 — Hearing & the Vestibular System**

### The Sound Pathway, In Order

Pinna → auditory canal → **tympanic membrane** (eardrum) → ossicles (**malleus → incus → stapes**) → **oval window** → cochlear fluid (perilymph) → **basilar membrane** vibrates → **hair cells** of the organ of Corti → stereocilia shear against the **tectorial membrane** → mechanically gated channels open → **K+ influx depolarizes** the hair cell → neurotransmitter onto **spiral ganglion** neurons → **cranial nerve VIII** (vestibulocochlear).

Two details examiners exploit:

- Hair cells depolarize by **K+ INFLUX** — the endolymph bathing the stereocilia is uniquely potassium-rich, so opening mechanically gated channels lets K+ rush IN (backwards from the usual neuronal story)
- The **round window** bulges outward as the oval window is pushed in — incompressible fluid needs a pressure-relief valve

### Middle-Ear Impedance Matching

Airborne sound striking fluid directly would mostly reflect. The middle ear amplifies pressure two ways: the tympanic membrane's area is ~17-20 times the oval window's (same force, smaller area → higher pressure, $P = F/A$), and the ossicles add lever action. Together this impedance matching allows efficient air-to-fluid transfer.

### Tonotopy: Place Theory

The basilar membrane is not uniform:

- **Base** (near oval window): **narrow and STIFF** → resonates at **HIGH frequencies**
- **Apex** (far end): **wide and floppy** → resonates at **LOW frequencies**

Each frequency maximally vibrates one place; the brain reads pitch from WHICH hair cells fire (**place theory**), preserved as a tonotopic map up the pathway. **Loudness** is coded separately, by vibration **amplitude** → firing rate and recruitment. For sound intensity comparisons, remember the decibel scale is logarithmic: $\\beta = 10 \\log(I/I_0)$.

Central route: cochlear nuclei (brainstem) → (superior olive, inferior colliculus) → **medial geniculate nucleus (MGN)** of the thalamus → **auditory cortex in the temporal lobe**. (Vision uses the LGN; audition the MGN.)

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

**Passage-style problem.** Three patients report hearing difficulty. Testing measures (i) air-conduction thresholds via headphones, (ii) bone-conduction thresholds via a vibrator on the mastoid bone (which shakes the skull and cochlear fluid directly), and (iii) audiograms by frequency.

- Patient 1: air conduction poor, bone conduction NORMAL, all frequencies affected equally. Otoscopy shows the ossicular chain immobilized by abnormal bone growth (otosclerosis).
- Patient 2: air AND bone conduction equally poor, with loss concentrated above 4000 Hz. Long career operating jackhammers.
- Patient 3: normal audiogram, but cannot understand speech presented to the left ear; MRI shows a tumor on the left vestibulocochlear nerve.

**Patient 1 — conductive loss.** Bone conduction bypasses the outer and middle ear and stimulates the cochlea directly; when it outperforms air conduction, the cochlea is fine and the MECHANICAL pathway is the problem. Fixed ossicles cannot perform impedance matching, so airborne sound reflects off the cochlear fluid. A hearing AID (amplifying sound) or surgery helps, because the sensory machinery is intact.

**Patient 2 — sensorineural loss with a tonotopic signature.** Equal air/bone deficits mean the cochlea itself fails. High-frequency loss localizes damage to hair cells at the **BASE** of the basilar membrane — the stiff, narrow region that resonates at high frequencies and bears the brunt of noise trauma. Amplification helps less; a cochlear implant (Part 4) can bypass dead hair cells.

**Patient 3 — retrocochlear (nerve) lesion.** Transduction is normal but transmission along CN VIII is degraded — speech comprehension suffers out of proportion to pure-tone thresholds. This also threatens BALANCE: CN VIII carries vestibular afferents too, so vertigo and unsteadiness are expected companions.

**The rule:** bone-vs-air separates conductive from sensorineural; the frequency pattern maps the damage onto the basilar membrane via tonotopy.`
    },
    {
      id: 'sen3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hearing & Vestibular** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which sequence correctly orders the structures sound energy traverses?`,
            options: [`Tympanic membrane → oval window → ossicles → basilar membrane → hair cells`, `Tympanic membrane → malleus → incus → stapes → oval window → basilar membrane → hair cells`, `Oval window → tympanic membrane → ossicles → cochlea → hair cells`, `Tympanic membrane → round window → ossicles → tectorial membrane → hair cells`],
            correctAnswer: 1,
            explanation: `Eardrum → the ossicular chain in order (malleus, incus, stapes) → the stapes footplate on the OVAL window → cochlear fluid → basilar membrane → hair cells. Option A skips the ossicles' position; the ROUND window is the pressure-relief outlet, not the entry point.`
          },
          {
            question: `A pure 8000 Hz tone maximally stimulates hair cells located:`,
            options: [`At the apex of the basilar membrane, where it is wide and floppy`, `Uniformly along the entire basilar membrane`, `At the base of the basilar membrane, where it is narrow and stiff`, `On the cupula of the horizontal semicircular canal`],
            correctAnswer: 2,
            explanation: `Tonotopy: the stiff, narrow BASE resonates at HIGH frequencies; the wide, compliant APEX handles LOW frequencies. (A useful anchor: noise-induced hearing loss starts with high frequencies because basal hair cells absorb the most energy.) The cupula belongs to the vestibular system and does not encode sound.`
          },
          {
            question: `Hair cells depolarize when their stereocilia bend toward the tallest cilium because:`,
            options: [`Voltage-gated Na+ channels open in the stereocilia`, `Ca2+ is pumped out of the cell`, `Cl- efflux depolarizes the membrane`, `Mechanically gated channels open and K+ flows IN from the K+-rich endolymph`],
            correctAnswer: 3,
            explanation: `The endolymph surrounding the stereocilia is unusually potassium-rich, so the electrochemical gradient drives K+ INTO the cell when tip-link-gated channels open — depolarization by K+ influx, the reverse of the usual neuronal role of K+. The channels are mechanically gated, not voltage-gated, and the trigger is not Na+.`
          },
          {
            question: `After spinning at constant velocity for 30 seconds, a dancer no longer feels rotation; when she abruptly stops, she feels she is spinning the opposite way. This is because the semicircular canals:`,
            options: [`Detect only angular ACCELERATION — at constant velocity the endolymph catches up, and stopping deflects the cupula in the reverse direction`, `Detect linear acceleration via otoliths, which fatigue during spinning`, `Adapt because their otoliths dissolve with prolonged motion`, `Are disabled by high K+ in the endolymph during rotation`],
            correctAnswer: 0,
            explanation: `The canals work by endolymph INERTIA: fluid lags during acceleration, deflecting the cupula. At constant velocity the fluid reaches the head's speed and the signal fades; deceleration then makes the still-moving fluid push the cupula the OTHER way — a false reversed-rotation signal. Otoliths belong to the utricle/saccule (linear acceleration), and they do not dissolve.`
          },
          {
            question: `A patient hears a tuning fork better when it is pressed against the mastoid bone than when held next to the ear canal. This pattern indicates:`,
            options: [`Sensorineural loss from hair cell damage`, `A lesion of the auditory cortex`, `Conductive hearing loss — the outer/middle ear path is impaired while the cochlea works`, `Normal hearing; bone conduction always exceeds air conduction`],
            correctAnswer: 2,
            explanation: `Bone conduction vibrates the skull and stimulates the cochlea directly, bypassing the eardrum and ossicles. Bone beating air means the cochlea is functional but the mechanical (conductive) route is blocked. In sensorineural loss BOTH routes are poor. In normal ears air conduction is the more efficient route, so option D is backwards.`
          }
        ]
      }
    },
    {
      id: 'sen3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Pathway: eardrum → malleus/incus/stapes → oval window → cochlear fluid → basilar membrane → hair cells shear against the tectorial membrane → K+ INFLUX (K+-rich endolymph) → spiral ganglion → CN VIII; round window relieves pressure
- Middle ear = impedance matcher: large eardrum onto small oval window plus ossicular leverage
- Tonotopy: base = stiff/narrow = high frequency; apex = wide/floppy = low frequency (place theory); loudness = amplitude; MGN → temporal cortex
- Semicircular canals (cupula) = rotational ACCELERATION in three orthogonal planes; utricle/saccule (otoliths) = linear acceleration and head tilt
- Conductive loss: mechanical path fails, bone conduction preserved; sensorineural loss: hair cells/CN VIII fail, both routes poor, noise damage hits high frequencies first`
    }
  ]
};
