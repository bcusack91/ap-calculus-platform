export const mcatAnatPhysPart5Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap5-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 5 of 7 — Special Senses**

### Vision — Structure → Function

| Structure | Function |
|-----------|----------|
| Cornea | Fixed refraction (~⅔ of total bending of light) |
| Lens | Variable refraction — **accommodation** (ciliary muscle changes shape) |
| Iris / pupil | Aperture controlling light entry (autonomic: sympathetic dilates, parasympathetic constricts) |
| Retina | Contains photoreceptors and downstream neurons |
| Rods | Dim light, peripheral, high sensitivity, **no color**; pigment = rhodopsin |
| Cones | Color (3 types: S/M/L ≈ B/G/R), high acuity, need bright light |
| Fovea | All-cone pit = sharpest vision; centered in the macula |
| Optic disc | Axons exit → **blind spot** (no photoreceptors) |

### Phototransduction (a Hyperpolarizing Receptor)

Light is unusual: photoreceptors **hyperpolarize** to light and *depolarize in the dark*.

$$\\text{Dark: cGMP high} \\to \\text{Na}^+ \\text{ channels OPEN} \\to \\text{depolarized} \\to \\text{glutamate released}$$

- Light → photon isomerizes **11-cis-retinal** to **all-trans-retinal** → activates opsin → transducin (G-protein) → activates **phosphodiesterase** → cGMP falls → $Na^{+}$ channels CLOSE → cell **hyperpolarizes** → less glutamate.
- Net retinal wiring: photoreceptor → bipolar cell → ganglion cell (axons form the optic nerve).

### Visual Pathway & Field Defects

$$\\text{Retina} \\to \\text{optic nerve} \\to \\text{optic chiasm} \\to \\text{optic tract} \\to \\text{LGN (thalamus)} \\to \\text{V1 (occipital)}$$

- **Nasal** retinal fibers cross at the chiasm; **temporal** fibers stay ipsilateral.
- A midline chiasm lesion (e.g., pituitary tumor) → **bitemporal hemianopia** (loss of both temporal fields).

### Color Vision — Two Complementary Theories

- **Trichromatic (Young–Helmholtz):** 3 cone types — explains the *receptor* stage.
- **Opponent-process:** red–green, blue–yellow, black–white channels — explains *afterimages* and color opponency downstream. Both are correct at different levels.

### Hearing — Conduction Pathway

Sound → Pinna → Ear canal → **Tympanic membrane** → Ossicles (**malleus → incus → stapes**) → **Oval window** → Cochlear fluid (perilymph) → **Basilar membrane** vibrates → Hair cells (organ of Corti) → Auditory nerve (CN VIII) → A1 (temporal lobe).

- Ossicles provide **impedance matching** (air → fluid), amplifying pressure ~20×.
- **Tonotopy:** base of cochlea = **high** frequency (stiff, narrow); apex = **low** frequency (floppy, wide).
- **Place theory** codes high-frequency pitch by location; **frequency/volley theory** codes low-frequency pitch by firing rate.

### Hair-Cell Mechanotransduction

Stereocilia bend toward the tallest → **tip links** pull open $K^{+}$ channels → $K^{+}$ enters (endolymph is $K^{+}$-rich) → depolarization → $Ca^{2+}$ influx → glutamate release. Bending the other way closes channels.

### Conductive vs. Sensorineural Hearing Loss

| Type | Lesion | Rinne/Weber |
|------|--------|-------------|
| Conductive | Outer/middle ear (ossicles, eardrum, wax) | Bone > air conduction; Weber lateralizes to **bad** ear |
| Sensorineural | Cochlea / CN VIII (hair cells) | Air > bone (both reduced); Weber lateralizes to **good** ear |

### Vestibular Sense (Balance)

- **Semicircular canals**: detect rotational (angular) acceleration via cupula/crista.
- **Utricle & saccule (otolith organs)**: detect linear acceleration and head tilt via otoliths on a gel.

### Taste & Smell (Chemoreception)

- **Taste**: 5 modalities — sweet, salty, sour, bitter, umami. Salty/sour use ion channels ($Na^{+}$, $H^{+}$); sweet/bitter/umami use **GPCRs**.
- **Smell**: olfactory receptor neurons (each expresses one GPCR type) → olfactory bulb → cortex.
- Smell is the ONLY sense that **bypasses the thalamus**, projecting directly to the limbic system → strong emotional/memory links.`
    },
    {
      id: 'ap5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Special Senses** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher records from an isolated vertebrate photoreceptor in complete darkness and finds it is steadily releasing glutamate. When a flash of light is delivered, the most direct sequence of events is:`,
            options: [`cGMP-gated $Na^{+}$ channels close, the cell hyperpolarizes, and glutamate release decreases`, `cGMP-gated $Na^{+}$ channels open, the cell depolarizes, and glutamate release increases`, `Voltage-gated $Ca^{2+}$ channels open, the cell depolarizes, and glutamate release increases`, `$Cl^{-}$ channels open, the cell depolarizes, and glutamate release decreases`],
            correctAnswer: 0,
            explanation: `Photoreceptors are depolarized in the dark (high cGMP keeps $Na^{+}$ channels open, "dark current"), continuously releasing glutamate. Light activates the opsin → transducin → phosphodiesterase cascade, which DEGRADES cGMP, closing the $Na^{+}$ channels. The cell therefore HYPERPOLARIZES and releases LESS glutamate. Option B is the dark state, not the response to light — a classic trap because most receptors depolarize to their stimulus. Phototransduction is the textbook exception.`
          },
          {
            question: `A patient with a slowly growing pituitary tumor compressing the optic chiasm at the midline would most likely present with:`,
            options: [`Loss of both temporal (peripheral) visual fields — bitemporal hemianopia`, `Complete blindness in one eye`, `Loss of both nasal visual fields — binasal hemianopia`, `Loss of central (foveal) vision only`],
            correctAnswer: 0,
            explanation: `At the chiasm, the crossing fibers are the NASAL retinal fibers, which carry information from the TEMPORAL visual fields. A central chiasm lesion destroys these crossing fibers bilaterally → bitemporal hemianopia ("tunnel"-like loss of peripheral fields). Complete monocular blindness (B) implies an optic-NERVE lesion anterior to the chiasm. Binasal loss (C) would require bilateral lateral compression, which is rare. Central/foveal loss (D) is macular, not chiasmal.`
          },
          {
            question: `An audiologist performs Rinne and Weber tests. In the right ear, bone conduction is louder than air conduction, and on the Weber test the tuning fork lateralizes to the right ear. The most likely diagnosis is:`,
            options: [`Conductive hearing loss in the right ear (e.g., otosclerosis or cerumen impaction)`, `Sensorineural hearing loss in the right ear (e.g., cochlear hair-cell damage)`, `Sensorineural hearing loss in the left ear`, `Normal hearing bilaterally`],
            correctAnswer: 0,
            explanation: `Bone > air conduction (abnormal Rinne) in a given ear indicates a CONDUCTIVE problem in that ear — sound is not being transmitted normally through the air pathway (ossicles/eardrum). On Weber, conductive loss lateralizes to the BAD ear (masking of ambient noise makes the affected ear pick up bone-conducted sound better). Sensorineural loss would instead give air > bone (still abnormal) and Weber lateralizing to the GOOD ear, ruling out B and C.`
          }
        ]
      }
    },
    {
      id: 'ap5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Special Senses

<details>
<summary><b>Example 1: Trace a sound from air to cortex</b></summary>

**Question:** A 4 kHz pure tone enters a normal ear. Order the structures it activates and predict WHERE along the cochlea it produces maximal vibration.

**Solution:**
1. Pinna → ear canal → tympanic membrane vibrates.
2. Ossicles (malleus → incus → stapes) provide **impedance matching**, pushing on the oval window.
3. Fluid pressure wave travels up the cochlea, vibrating the **basilar membrane**.
4. 4 kHz is a relatively HIGH frequency → maximal displacement near the **base** of the cochlea (stiff, narrow region) — **tonotopy**. ✓
5. Hair-cell stereocilia bend → tip links open $K^{+}$ channels → depolarization → glutamate → CN VIII → A1 (temporal lobe).

**MCAT note:** Damage to the cochlear BASE (e.g., noise/age-related) preferentially destroys **high-frequency** hearing first — explaining presbycusis.
</details>

<details>
<summary><b>Example 2: Explain a negative (red) afterimage</b></summary>

**Question:** A subject stares at a saturated green square for 30 s, then looks at a white wall and sees a red square. Which theory explains this, and why does trichromatic theory alone fail?

**Solution:**
1. Opponent-process theory posits a **red–green** channel (plus blue–yellow, black–white).
2. Prolonged green stimulation **fatigues/adapts** the green pole of the channel.
3. On the neutral white wall, the channel **rebounds** toward red → red afterimage. ✓
4. Trichromatic theory describes only the 3 cone TYPES at the receptor level; it does not include the antagonistic channels needed to produce an opposite-color rebound.

**Key idea:** Both theories are right — trichromatic at the cone stage, opponent-process at the bipolar/ganglion stage.
</details>

<details>
<summary><b>Example 3: Distinguish vestibular sub-systems</b></summary>

**Question:** An astronaut in a smoothly rotating centrifuge (constant angular velocity) reports that after a few seconds the sense of spinning fades, yet she still clearly senses which way is "down." Which structures explain each observation?

**Solution:**
1. The **semicircular canals** detect angular ACCELERATION. At constant angular velocity (no acceleration), the endolymph catches up to the canal and the cupula returns to neutral → the spinning sensation fades. ✓
2. The **otolith organs (utricle & saccule)** detect linear acceleration and gravity (head tilt). Gravity is a constant linear force, so they continue to signal "down." ✓

**Connection:** This is why pilots can become disoriented in prolonged turns — the canals adapt, but the otoliths and vision must take over to judge orientation.
</details>`
    },
    {
      id: 'ap5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Phototransduction is **hyperpolarizing**: light closes cGMP-gated $Na^{+}$ channels → less glutamate.
- Chiasm lesion → bitemporal hemianopia (nasal fibers cross).
- Tonotopy: cochlear base = high frequency, apex = low frequency.
- Conductive loss → Weber to bad ear; sensorineural → Weber to good ear.
- Smell uniquely bypasses the thalamus → direct limbic connection.`
    }
  ]
};
