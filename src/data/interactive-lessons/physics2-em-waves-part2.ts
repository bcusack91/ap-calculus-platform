export const physics2EmWavesPart2Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p2-intro',
      type: 'text' as const,
      content: `# ⚡ Energy & Intensity of EM Waves

**Part 2 of 7 — Power and Intensity**

---

### Intensity

Intensity is the **power per unit area** carried by the wave, measured in W/m²:

$$I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}$$

For a **point source** radiating uniformly in all directions, intensity follows the **inverse-square law** — doubling the distance quarters the intensity.

### Why Inverse-Square?

The same total power spreads over an ever-larger sphere ($A = 4\\pi r^2$). At distance $r$:

| Distance | Area | Intensity |
|----------|------|-----------|
| $r$ | $4\\pi r^2$ | $I_0$ |
| $2r$ | $4\\pi(2r)^2 = 16\\pi r^2$ | $I_0/4$ |
| $3r$ | $4\\pi(3r)^2 = 36\\pi r^2$ | $I_0/9$ |
| $10r$ | $4\\pi(10r)^2 = 400\\pi r^2$ | $I_0/100$ |

> 🔑 **Quick ratio method:** $I_1 r_1^2 = I_2 r_2^2$. No need to find $P$ first!
      `
    },
    {
      id: 'electromagneticwaves-p2-energy',
      type: 'text' as const,
      content: `
## Energy Density and Field Amplitudes

### Energy Stored in EM Fields

The energy per unit volume (energy density) of the wave:

$$u = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{B^2}{2\\mu_0} = \\epsilon_0 E^2$$

The electric and magnetic field energy densities are **always equal** — each carries exactly half the total energy.

### Connecting Intensity to Field Amplitudes

$$I = \\frac{c\\epsilon_0 E_0^2}{2} = \\frac{E_0 B_0}{2\\mu_0}$$

where $E_0$ and $B_0$ are the **peak** (maximum) field amplitudes.

### Radiation Pressure

Light exerts pressure on surfaces! This is because EM waves carry **momentum** as well as energy.

| Surface Type | Pressure | Momentum Change |
|-------------|----------|-----------------|
| **Perfectly absorbing** | $P_{rad} = I/c$ | Photon stops → $\\Delta p = p$ |
| **Perfectly reflecting** | $P_{rad} = 2I/c$ | Photon bounces → $\\Delta p = 2p$ |

> 🔑 **Real-world:** Radiation pressure is tiny for everyday light, but it's the principle behind **solar sails** for spacecraft propulsion. A 1 km² sail near Earth feels ~9 N from sunlight ($I \\approx 1400$ W/m²).

### The Poynting Vector

The **Poynting vector** $\\vec{S}$ gives the direction and magnitude of energy flow:

$$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$$

- Direction: energy propagation direction
- Magnitude: instantaneous intensity
- Average: $\\langle S \\rangle = I = \\frac{E_0 B_0}{2\\mu_0}$
      `
    },
    {
      id: 'electromagneticwaves-p2-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you double the distance from a point source, intensity:',
            options: ['Doubles', 'Halves', 'Drops to 1/4 of its original value', 'Stays the same'],
            correctAnswer: 2,
            explanation: 'Inverse-square law: $I \\propto 1/r^2$. Double $r$ → intensity drops by factor of $2^2 = 4$. Quick check: $I_1 r_1^2 = I_2 r_2^2$.'
          },
          {
            question: 'Radiation pressure is greater for:',
            options: ['Absorbed light', 'Perfectly reflected light', 'Both are equal', 'Neither — light cannot exert pressure'],
            correctAnswer: 1,
            explanation: 'Reflected light: $P = 2I/c$ (photon reverses direction → double momentum change). Absorbed: $P = I/c$ (photon stops → single momentum change). A perfect mirror feels twice the force of a perfect absorber.'
          },
          {
            question: 'The energy in an EM wave is carried:',
            options: ['Only by the electric field', 'Only by the magnetic field', 'Equally by both E and B fields', 'By the Poynting vector'],
            correctAnswer: 2,
            explanation: 'Electric and magnetic field energy densities are always equal: $u_E = u_B = \\frac{1}{2}\\epsilon_0 E^2$. This is a fundamental property of EM waves in vacuum.'
          },
          {
            question: 'A 200 W bulb is at 5 m. Using $I_1 r_1^2 = I_2 r_2^2$, the intensity at 10 m compared to 5 m is:',
            options: ['Half', 'One-quarter', 'Double', 'One-eighth'],
            correctAnswer: 1,
            explanation: '$I_1(5)^2 = I_2(10)^2$, so $I_2 = I_1 \\cdot 25/100 = I_1/4$. The ratio method avoids computing the actual intensity values.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p2-input',
      type: 'input-boxes' as const,
      content: `
**Intensity Calculations** 🧮

A 100 W light bulb radiates uniformly.

**1)** Intensity at 2 m distance? (in W/m², round to 1 decimal)

**2)** At what distance is intensity 1 W/m²? (in meters, round to 1 decimal)

**3)** If intensity is 500 W/m² and light is fully absorbed, radiation pressure? (answer in scientific notation like 1.67e-6)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.0', '2.8', '1.67e-6'],
        hint1: '$I = P/(4\\pi r^2) = 100/(4\\pi \\cdot 4)$',
        hint2: '$r = \\sqrt{P/(4\\pi I)}$',
        hint3: '$P_{rad} = I/c$',
        explanation: '1) $100/(16\\pi) \\approx 2.0$ W/m². 2) $\\sqrt{100/(4\\pi)} \\approx 2.8$ m. 3) $500/(3 \\times 10^8) \\approx 1.67 \\times 10^{-6}$ Pa.'
      }
    },
    {
      id: 'electromagneticwaves-p2-misconceptions',
      type: 'multiple-choice' as const,
      content: `
**Common Mistakes** ⚠️
      `,
      exercise: {
        questions: [
          {
            question: 'A student calculates intensity at 3 m from a bulb using $I = P/A = P/(\\pi r^2)$. What is wrong?',
            options: [
              'Nothing — $\\pi r^2$ is correct for spherical radiation',
              'Should use $4\\pi r^2$ — a point source radiates over a full sphere, not just a circle',
              'Should use $2\\pi r^2$ — a hemisphere',
              'Should not use area at all'
            ],
            correctAnswer: 1,
            explanation: '$\\pi r^2$ is the area of a flat disk. A point source radiates in ALL directions — the light spreads over the surface of a sphere: $A = 4\\pi r^2$. This is one of the most common errors on AP Physics 2.'
          },
          {
            question: 'Sunlight intensity at Earth is ~1400 W/m². At Mars (1.5 AU from Sun), it is approximately:',
            options: ['1400 W/m²', '933 W/m²', '622 W/m²', '700 W/m²'],
            correctAnswer: 2,
            explanation: 'Inverse-square law: $I_{Mars} = I_{Earth} \\times (1/1.5)^2 = 1400/2.25 \\approx 622$ W/m². This is why Mars receives less solar energy and is colder.'
          }
        ]
      }
    }
  ]
};
