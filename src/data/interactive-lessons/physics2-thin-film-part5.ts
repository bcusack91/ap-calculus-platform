export const physics2ThinFilmPart5Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p5-intro',
      type: 'text' as const,
      content: `# 🔬 Real-World Applications & Structural Color

**Part 5 of 7 — Thin Films in Nature and Technology**

---

### Optical Interferometry — Precision Measurement

Thin film interference enables measurements down to fractions of a wavelength (~100 nm precision):

| Application | Method | Precision |
|-------------|--------|-----------|
| **Surface flatness** | Compare fringes to a reference flat | $\\lambda/20 \\approx 25$ nm |
| **Film thickness** | Count fringes as film is deposited | $\\lambda/2 \\approx 300$ nm per fringe |
| **Wavelength measurement** | Known gap, count fringes | $\\Delta\\lambda \\approx 0.01$ nm |
| **Strain measurement** | Photoelastic stress analysis | $\\sim 10^{-6}$ strain |

---

### Dichroic Filters & Mirrors

Multiple thin film layers (alternating high-$n$ and low-$n$ materials) create precisely engineered interference:

| Device | Layers | Function |
|--------|--------|----------|
| **Dichroic mirror** | 10–30 | Reflects one color, transmits others |
| **Band-pass filter** | 20–50 | Transmits only a narrow wavelength range |
| **Dielectric mirror** | 10–20 | Very high reflectivity at specific $\\lambda$ (>99.9%) |
| **Notch filter** | 20–40 | Blocks one narrow wavelength band |

Used in: projectors (RGB separation), laser optics, fluorescence microscopy, astronomy.

---

### Anti-Reflection Coating Applications

| Product | Why Coating Matters |
|---------|-------------------|
| Camera lenses | Reduce flare, increase contrast (10+ surfaces!) |
| Eyeglasses | Reduce glare, improve appearance |
| Solar panels | Increase light transmission by 2–3% |
| Smartphone screens | Reduce reflections for readability |
| Telescope optics | Maximize light collection |
| Stealth aircraft | Reduce radar reflection (microwave "thin film") |`
    },
    {
      id: 'thinfilminterference-p5-bio',
      type: 'text' as const,
      content: `### Structural Color in Nature

Many of the most vivid colors in nature come from thin film interference, not pigments. These are called **structural colors**.

| Organism | Structure | Color Effect |
|----------|-----------|-------------|
| **Morpho butterfly** | Multilayer nano-ridges on wing scales | Brilliant iridescent blue |
| **Peacock feathers** | Melanin/keratin layers (~200 nm spacing) | Green/blue/gold depending on angle |
| **Beetle shells** | Chitin layers with varying spacing | Metallic green, gold, or rainbow |
| **Hummingbird throat** | Melanin platelets in feather barbules | Ruby, emerald, or gold flash |
| **Soap bubbles** | Water film in air | Rainbow swirls |
| **Oil on water** | Hydrocarbon film | Rainbow bands |
| **Mother of pearl** | Aragonite layers (~0.5 μm thick) | Iridescent glow |

---

### Structural vs. Pigment Colors

| Property | Structural Color | Pigment Color |
|----------|-----------------|---------------|
| **Mechanism** | Interference / diffraction | Absorption of certain wavelengths |
| **Angle dependence** | Changes with viewing angle (iridescent) | Same at all angles |
| **Fading** | Does not fade (structure is permanent) | Fades as molecules break down |
| **Brightness** | Can be extremely vivid | Limited by absorption efficiency |
| **Temperature stability** | Stable | May decompose |

> 🔑 **Why iridescence?** As viewing angle changes, the effective path through the nanostructure changes → different wavelengths satisfy the constructive condition → color shifts.

---

### Biomimicry — Learning from Nature

Scientists have created:
- **Structural color paints** (no pigment, unfading)
- **Anti-counterfeiting** features on currency
- **Sensors** that change color with humidity or temperature
- **Efficient solar cells** inspired by butterfly wing structures`
    },
    {
      id: 'thinfilminterference-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Structural colors differ from pigment colors because they:',
            options: ['Change with viewing angle (iridescent)', 'Are always blue', 'Require UV light', 'Only appear on metals'],
            correctAnswer: 0,
            explanation: 'Structural colors arise from interference, which depends on the path length through the structure — this changes with angle, producing iridescence.'
          },
          {
            question: 'A dichroic filter works by:',
            options: ['Multiple thin film layers creating precise interference', 'Absorbing specific wavelengths', 'Polarizing specific wavelengths', 'Diffraction through a grating'],
            correctAnswer: 0,
            explanation: 'Stacked thin film layers of alternating $n$ create constructive/destructive interference at precisely controlled wavelengths.'
          },
          {
            question: 'Morpho butterfly wings appear blue because of:',
            options: ['Nano-ridges causing thin film interference', 'Blue pigment molecules', 'Fluorescence', 'Rayleigh scattering'],
            correctAnswer: 0,
            explanation: 'The wing scales have multilayer nano-ridges (~200 nm spacing) that constructively reflect blue wavelengths through thin film interference.'
          },
          {
            question: 'Why don\'t structural colors fade over time like pigments?',
            options: ['The physical structure persists; no chemical change needed', 'They continuously regenerate', 'They absorb UV protection', 'They are coated with a polymer'],
            correctAnswer: 0,
            explanation: 'Pigments fade because the absorbing molecules chemically degrade. Structural colors depend on physical geometry, which doesn\'t break down.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p5-input',
      type: 'input-boxes' as const,
      content: `
**Applications Problems** 🧮

**1)** A glass surface is tested for flatness using $\\lambda = 632.8$ nm (He-Ne laser). You count 8 dark fringes across a 1.5 cm region. What is the total height variation? (in nm, round to 1 decimal place)

**2)** A dielectric mirror uses quarter-wave layers of $n = 2.3$ material for $\\lambda = 1064$ nm (Nd:YAG laser). Thickness of each layer? (in nm, round to 1 decimal place)

**3)** A Morpho butterfly wing scale has $n = 1.56$ layers spaced to reflect $\\lambda = 470$ nm (blue). Estimated layer thickness for constructive reflection? (in nm, round to nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2531.2', '115.7', '75'],
        hint1: 'Each dark fringe = $\\lambda/2$ height change. Total = 8 × $\\lambda/2$',
        hint2: 'Quarter-wave: $t = \\lambda/(4n) = 1064/(4 \\times 2.3)$',
        hint3: '$t \\approx \\lambda/(4n) = 470/(4 \\times 1.56)$',
        explanation: '1) $8 \\times 632.8/2 = 8 \\times 316.4 = 2531.2$ nm. 2) $1064/9.2 = 115.7$ nm. 3) $470/6.24 \\approx 75$ nm — remarkably thin nanostructures!'
      }
    }
  ]
};