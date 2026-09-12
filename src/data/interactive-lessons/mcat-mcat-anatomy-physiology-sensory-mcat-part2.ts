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

**Refractive errors:**

- **Myopia** (nearsightedness): eye too long or optics too strong → image focuses IN FRONT of the retina → corrected with a **diverging (concave)** lens
- **Hyperopia** (farsightedness): eye too short → focal point behind the retina → corrected with a **converging (convex)** lens
- Presbyopia: age-stiffened lens loses accommodation (reading glasses = converging)

### Rods vs. Cones

| Feature | Rods | Cones |
|---------|------|-------|
| Light level | Dim (scotopic) — very high sensitivity | Bright (photopic) |
| Color | None (one pigment: rhodopsin) | Three opsins → color vision |
| Acuity | Low (high convergence onto bipolar cells) | High (fovea: ~1:1 wiring) |
| Location | Peripheral retina | Concentrated in the **fovea** |
| Count | ~120 million | ~6 million |

High **convergence** (many rods → one ganglion cell) pools signals — great sensitivity, poor resolution. The fovea's private-line wiring gives maximal acuity, which is why you look DIRECTLY at what you want to see, but a dim star is best seen slightly off-center.

### Phototransduction: The Dark Current (get the direction right)

**In darkness, photoreceptors are DEPOLARIZED** (~-40 mV): high cytoplasmic **cGMP** keeps **cGMP-gated Na+ (and Ca2+) channels open** — the dark current — and the depolarized cell continuously **releases glutamate**.

Light reverses everything:

1. A photon isomerizes **11-cis-retinal to all-trans-retinal** within rhodopsin (opsin + retinal, a vitamin A derivative)
2. Activated rhodopsin activates **transducin** (a G protein)
3. Transducin activates **phosphodiesterase (PDE)**, which hydrolyzes cGMP
4. **cGMP falls → channels close → the cell HYPERPOLARIZES**
5. **Glutamate release DECREASES** — light is signaled by LESS transmitter

So the photoreceptor is a "dark detector" that light turns down. Bipolar cells read the glutamate change (ON-bipolars are inhibited by glutamate, so they depolarize in light; OFF-bipolars do the opposite).

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

**Passage-style problem.** A mouse line carries a null mutation in the gene encoding the retinal cGMP phosphodiesterase (PDE) of rods. Electroretinograms are recorded in darkness and during light flashes; intracellular electrodes measure rod membrane potential and synaptic glutamate release.

**Question 1 — Predict the rod's membrane potential in darkness.**
Normal, i.e., depolarized (~-40 mV). The dark current depends on high cGMP holding cation channels open; without PDE, cGMP is if anything higher than normal, so the channels are open and glutamate release is maximal — darkness looks normal at this level.

**Question 2 — Predict the response to a light flash.**
Absent. Photon capture and transducin activation still occur, but the cascade dead-ends: no PDE means cGMP is never hydrolyzed, channels never close, the rod never hyperpolarizes, and glutamate release never drops. The mouse's rods are blind even though rhodopsin is intact — a downstream block silences the pathway just as effectively as losing the photopigment.

**Question 3 — The mouse still avoids bright light and can discriminate colors. Why?**
Cones use their OWN opsins, transducin, and PDE isoforms; a rod-specific PDE knockout spares cone phototransduction. Behavior in bright (photopic) conditions survives; only dim-light (scotopic) vision is lost — the phenotype of night blindness.

**Question 4 — A second mouse lacks rod transducin instead. How do the phenotypes compare?**
Functionally identical at this level of analysis: both knockouts freeze the cascade with channels open and prevent the light-evoked hyperpolarization. Distinguishing them requires probing the cascade between rhodopsin and PDE (e.g., checking whether activated rhodopsin can still turn on PDE in a biochemical assay). This step-through-the-cascade logic is exactly how the MCAT tests phototransduction.`
    },
    {
      id: 'sen2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Vision & Phototransduction** 🎯`,
      exercise: {
        questions: [
          {
            question: `In complete darkness, a rod photoreceptor is:`,
            options: [`Hyperpolarized, with cGMP-gated channels closed`, `Depolarized, releasing glutamate, with cGMP-gated Na+ channels held open by high cGMP`, `At rest at -70 mV, like a typical neuron`, `Firing action potentials at a steady baseline rate`],
            correctAnswer: 1,
            explanation: `The dark current is the trap: high cGMP keeps cation channels open in darkness, so the rod sits depolarized (~-40 mV) and constantly releases glutamate. LIGHT closes the channels and hyperpolarizes the cell. Photoreceptors are also graded-potential cells — they never fire action potentials (only ganglion cells do in the retina).`
          },
          {
            question: `Place the phototransduction steps in correct order after a photon is absorbed: (1) PDE activated, (2) cGMP-gated channels close, (3) retinal isomerizes and rhodopsin activates transducin, (4) cGMP concentration falls.`,
            options: [`3 → 1 → 4 → 2`, `3 → 4 → 1 → 2`, `1 → 3 → 2 → 4`, `3 → 1 → 2 → 4`],
            correctAnswer: 0,
            explanation: `Photon → 11-cis-retinal isomerizes, activating rhodopsin → transducin (G protein) → phosphodiesterase → PDE hydrolyzes cGMP so its level FALLS → channels that cGMP held open now CLOSE → hyperpolarization. The channel closing must follow the cGMP drop (it is caused by it), which eliminates option D.`
          },
          {
            question: `A student sees a faint star best by looking slightly AWAY from it. The explanation is that:`,
            options: [`The fovea contains mostly rods, which saturate when aimed at the star`, `Looking away engages the blind spot, which enhances contrast`, `The dim star's image then falls on the rod-rich peripheral retina, where high convergence maximizes sensitivity`, `Cones in the periphery have lower thresholds than foveal cones`],
            correctAnswer: 2,
            explanation: `The fovea is nearly rod-free — it is packed with cones, which need bright light. Averting the gaze drops the image onto the peripheral retina, where many highly sensitive rods converge onto each ganglion cell, pooling the faint signal. Option A inverts foveal anatomy; the blind spot detects nothing at all.`
          },
          {
            question: `A myopic (nearsighted) eye focuses distant objects in front of the retina. The appropriate corrective lens is:`,
            options: [`A converging lens, to add refractive power`, `A cylindrical lens, to correct the asymmetry`, `No lens; the ciliary muscle can compensate by contracting`, `A diverging lens, to reduce total refractive power so the image lands on the retina`],
            correctAnswer: 3,
            explanation: `Myopia = too much converging power (or too long an eye), so the fix is a diverging (concave) lens that pushes the focal point back onto the retina. Converging lenses correct HYPEROPIA and presbyopia. Accommodation only ADDS power (a rounder lens), which would worsen myopia — the eye cannot flatten its lens below the relaxed state. Cylindrical lenses correct astigmatism.`
          },
          {
            question: `A lesion that destroys the crossing fibers at the optic chiasm (as from a pituitary tumor pressing on it) would most directly impair:`,
            options: [`All vision in the left eye only`, `Input from both nasal retinas — producing loss of both temporal (outer) visual fields`, `The entire left visual field of both eyes`, `Input from both temporal retinas, abolishing central vision`],
            correctAnswer: 1,
            explanation: `Only NASAL retinal fibers cross at the chiasm, and each nasal retina views the TEMPORAL visual field of its eye. Cutting the crossing fibers therefore blinds both outer visual fields (bitemporal hemianopsia), the classic pituitary-tumor deficit. One whole eye would require an optic NERVE lesion; one whole visual field (option C) requires a lesion behind the chiasm (optic tract or cortex).`
          }
        ]
      }
    },
    {
      id: 'sen2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Cornea = most refractive power; lens = adjustable focus (ciliary contraction → rounder lens for near); myopia → diverging lens, hyperopia → converging
- Rods: dim light, no color, high convergence, periphery; cones: acuity and color, packed in the fovea
- Dark current: in darkness cGMP holds channels OPEN → depolarized rod releasing glutamate; light → rhodopsin → transducin → PDE → cGMP falls → channels close → HYPERPOLARIZATION and less glutamate
- Vertical circuit: photoreceptor → bipolar → ganglion (only ganglion cells spike; their axons = optic nerve); horizontal and amacrine cells process laterally
- Chiasm: nasal fibers cross → left visual field maps to right cortex; pathway continues LGN (thalamus) → V1
- Dark adaptation is slow (rhodopsin regeneration, ~20-30 min); light adaptation is fast (bleaching, switch to cones)`
    }
  ]
};
