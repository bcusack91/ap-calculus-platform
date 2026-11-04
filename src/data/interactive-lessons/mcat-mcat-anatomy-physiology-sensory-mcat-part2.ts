export const mcatSensoryPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  sections: [
    {
      id: 'sen2-intro',
      type: 'text' as const,
      content: `# Sensory Systems — Deep Dive

**Part 2 of 4 — Vision: Optics & Phototransduction**

### The Optical Path

Light traverses: cornea → aqueous humor → pupil (iris aperture) → lens → vitreous humor → retina. Two refraction facts the MCAT loves:

- The **cornea** provides MOST of the eye's refractive power (largest refractive index step: air → tissue)
- The **lens** provides the adjustable fine focus. **Accommodation**: for NEAR objects, the ciliary muscle CONTRACTS, slackening the suspensory ligaments (zonules), letting the elastic lens become rounder and more powerful. For distant objects the muscle relaxes, the zonules pull taut, and the lens flattens.

- Refractive errors — **myopia** (nearsightedness): eye too long or optics too strong → image focuses IN FRONT of the retina → corrected with a **diverging (concave)** lens
- **Hyperopia** (farsightedness): eye too short → focal point behind the retina → corrected with a **converging (convex)** lens
- Presbyopia: age-stiffened lens loses accommodation (reading glasses = converging)

### Rods vs. Cones

| Feature | Rods | Cones |
|---------|------|-------|
| Light level | Dim (scotopic) — very high sensitivity | Bright (photopic) |
| Color | None (one pigment: rhodopsin) | Three opsins → color vision |
| Acuity | Low (high convergence onto bipolar cells) | High (fovea: ~1:1 wiring) |
| Location | Peripheral retina | Concentrated in the **fovea** |
| Count | Far more numerous | Far fewer |

High **convergence** (many rods → one ganglion cell) pools signals — great sensitivity, poor resolution. The fovea's private-line wiring gives maximal acuity, which is why you look DIRECTLY at what you want to see, but a dim star is best seen slightly off-center.

<!-- yield:low -->
- Approximate counts: about 120 million rods vs. about 6 million cones per retina.
<!-- /yield -->

### Phototransduction: The Dark Current (get the direction right)

**In darkness, photoreceptors are DEPOLARIZED** (~-40 mV): high cytoplasmic **cGMP** keeps **cGMP-gated Na+ (and Ca2+) channels open** — the dark current — and the depolarized cell continuously **releases glutamate**.

Light reverses everything:

1. A photon isomerizes **11-cis-retinal to all-trans-retinal** within rhodopsin (opsin + retinal, a vitamin A derivative)
2. Activated rhodopsin activates **transducin** (a G protein)
3. Transducin activates **phosphodiesterase (PDE)**, which hydrolyzes cGMP
4. **cGMP falls → channels close → the cell HYPERPOLARIZES**
5. **Glutamate release DECREASES** — light is signaled by LESS transmitter

So the photoreceptor is a "dark detector" that light turns down, and the bipolar cells downstream read the change in glutamate.

<!-- yield:low -->
- Bipolar subtypes: ON-bipolar cells are inhibited by glutamate, so they depolarize in light; OFF-bipolar cells do the opposite.
<!-- /yield -->

### Retinal Circuitry and the Visual Pathway

Vertical path: **photoreceptor → bipolar cell → ganglion cell**; only **ganglion cells fire action potentials**, and their axons form the **optic nerve** (exit point = blind spot). **Horizontal** and **amacrine** cells provide lateral processing (know the names).

Central pathway: optic nerve → **optic chiasm**, where **NASAL retinal fibers cross** (temporal fibers stay ipsilateral). Because the nasal retina views the temporal (outer) visual field, the net result: the **left visual field of both eyes → right visual cortex** and vice versa. Then optic tract → **lateral geniculate nucleus (LGN)** of the thalamus → visual cortex (V1, occipital lobe).

### Adaptation

- **Dark adaptation** (bright → dim): pupils dilate; rod rhodopsin regenerates over ~20-30 minutes as sensitivity climbs
- **Light adaptation** (dim → bright): pupils constrict; pigments bleach and the system quickly shifts to cones`
    },
    {
      id: 'sen2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing the Cascade Through a Knockout

**Problem 1.** A mouse line carries a null mutation in the gene for the rods' cGMP phosphodiesterase (PDE). Electrodes record rod membrane potential and glutamate release in darkness and during light flashes.

- **(a)** What is the rod's membrane potential in darkness?
- **(b)** How does the rod respond to a light flash?
- **(c)** The mouse avoids bright light and discriminates colors. Why?

**(a) In darkness.** Depolarized (~-40 mV), as in a normal rod. The dark current depends on high cGMP holding cation channels open; without PDE, cGMP is if anything higher than normal, so the channels stay open and glutamate release is maximal.

**(b) In light.** No response. Photon capture and transducin activation still occur, but with no PDE, cGMP is never hydrolyzed: channels never close, the rod never hyperpolarizes, and glutamate release never drops. The rods are blind although rhodopsin is intact.

**(c) Cones are spared.** Cones use their OWN opsins, transducin and PDE isoforms, so a rod-specific knockout spares them. Bright-light (photopic) vision survives; only dim-light (scotopic) vision is lost, the phenotype of night blindness.

**Problem 2.** A second mouse line has normal rod PDE but lacks rod transducin. The same recordings are made in darkness and during light flashes.

- **(a)** How does this rod respond to a light flash?
- **(b)** Could these recordings tell this mouse from the PDE knockout?
- **(c)** What biochemical test would show where each line's cascade is broken?

**(a) In light.** No response. Activated rhodopsin has no transducin to pass the signal to, so PDE is never switched on, cGMP stays high, and the channels stay open.

**(b) Not at this level.** Both knockouts freeze the cascade with channels open and prevent the light-evoked hyperpolarization, so the recordings look identical. A downstream block silences the pathway as effectively as losing the photopigment.

**(c) Probe the middle of the cascade.** Supply PDE in a biochemical assay and ask whether light-activated rhodopsin, acting through transducin, can still turn it on: it can in the PDE knockout, not in the transducin knockout. This step-through-the-cascade logic is exactly how the MCAT tests phototransduction.`
    },
    {
      id: 'sen2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Vision & Phototransduction** 🎯`,
      exercise: {
        questions: [
          {
            question: `A drug locks the rods' cGMP-gated channels in the open state. In bright light, a treated rod is:`,
            options: [`Hyperpolarized, with glutamate release reduced`, `Depolarized, with glutamate release continuing`, `At rest at -70 mV, releasing no glutamate`, `Firing action potentials at a steady rate`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Light hyperpolarizes a rod only by lowering cGMP so that the channels close. With the channels locked open, the cascade still runs and cGMP still falls, but the dark current keeps flowing: the rod stays depolarized (~-40 mV) and keeps releasing glutamate, signalling "dark". Hyperpolarization with reduced release is the normal light response, which needs the channels to close. Sitting at -70 mV with no release would also require shut cation channels. Photoreceptors are graded-potential cells and never fire action potentials (only ganglion cells do in the retina).`
          },
          {
            question: `Place the phototransduction steps in correct order after a photon is absorbed: (1) PDE activated, (2) cGMP-gated channels close, (3) retinal isomerizes and rhodopsin activates transducin, (4) cGMP concentration falls.`,
            options: [`3 → 1 → 4 → 2`, `3 → 4 → 1 → 2`, `1 → 3 → 2 → 4`, `3 → 1 → 2 → 4`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Photon → 11-cis-retinal isomerizes, activating rhodopsin → transducin (G protein) → phosphodiesterase → PDE hydrolyzes cGMP so its level FALLS → channels that cGMP held open now CLOSE → hyperpolarization. The channel closing must follow the cGMP drop (it is caused by it), which eliminates the 3 → 1 → 2 → 4 ordering.`
          },
          {
            question: `A student sees a faint star best by looking slightly AWAY from it. The explanation is that:`,
            options: [`The fovea contains mostly rods, which saturate when aimed at the star`, `Looking away engages the blind spot, which enhances contrast`, `The image then falls on the rod-rich, highly convergent periphery`, `Cones in the periphery have lower thresholds than foveal cones`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The fovea is nearly rod-free — it is packed with cones, which need bright light. Averting the gaze drops the image onto the peripheral retina, where many highly sensitive rods converge onto each ganglion cell, pooling the faint signal. The claim that the fovea contains mostly rods inverts foveal anatomy; the blind spot detects nothing at all.`
          },
          {
            question: `A myopic (nearsighted) eye focuses distant objects in front of the retina. The appropriate corrective lens is:`,
            options: [`A converging lens, to add refractive power`, `A cylindrical lens, to correct the asymmetry`, `No lens; the ciliary muscle can compensate by contracting`, `A diverging lens, to reduce total refractive power`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Myopia = too much converging power (or too long an eye), so the fix is a diverging (concave) lens that pushes the focal point back onto the retina. Converging lenses correct HYPEROPIA and presbyopia. Accommodation only ADDS power (a rounder lens), which would worsen myopia — the eye cannot flatten its lens below the relaxed state. Cylindrical lenses correct astigmatism.`
          },
          {
            question: `A lesion that destroys the crossing fibers at the optic chiasm (as from a pituitary tumor pressing on it) would most directly impair:`,
            options: [`All vision in the left eye, sparing the right eye`, `Input from both nasal retinas, which see the temporal fields`, `The entire left visual field of both eyes`, `Input from both temporal retinas, abolishing central vision`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Only NASAL retinal fibers cross at the chiasm, and each nasal retina views the TEMPORAL visual field of its eye. Cutting the crossing fibers therefore blinds both outer visual fields (bitemporal hemianopsia), the classic pituitary-tumor deficit. One whole eye would require an optic NERVE lesion; one whole visual field requires a lesion behind the chiasm (optic tract or cortex).`
          }
        ]
      }
    },
    {
      id: 'sen2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Cornea and lens.** The cornea does most of the refracting; ciliary contraction rounds the lens for near focus.
- **Rods vs. cones.** Rods: dim light, no color, high convergence, periphery. Cones: color and acuity, packed in the fovea.
- **The dark current.** Darkness: cGMP holds channels open. Light: transducin → PDE → cGMP falls → hyperpolarization.
- **Retina to cortex.** Only ganglion cells spike; nasal fibers cross, so each visual field reaches the opposite cortex via the LGN.

**Common traps**

- **Light depolarizing photoreceptors.** Light hyperpolarizes rods and CUTS glutamate release; darkness is the depolarized state.
- **Converging lenses for myopia.** Myopia needs a diverging lens; converging lenses correct hyperopia and presbyopia.
- **Fast dark adaptation.** Dark adaptation is slow (~20-30 min, rhodopsin regenerates); light adaptation is fast.
- **Chiasm lesion, one eye blind.** Cutting the crossing nasal fibers blinds both temporal fields; one whole eye needs an optic nerve lesion.

<!-- yield:low -->
**Low-yield extras**

- About 120 million rods vs. 6 million cones; ON-bipolar cells depolarize in light (glutamate inhibits them), OFF-bipolar cells do the opposite
<!-- /yield -->`
    }
  ]
};
