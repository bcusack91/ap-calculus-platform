export const physics2EmWavesPart4Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p4-intro',
      type: 'text' as const,
      content: `# 📡 EM Wave Generation & Applications

**Part 4 of 7 — How EM Waves Are Produced**

---

### The Fundamental Rule

> **Any accelerating charge produces electromagnetic radiation.**

A charge at rest creates a static E field. A charge moving at constant velocity creates both E and B fields but no radiation. Only **acceleration** (changing velocity) produces EM waves that propagate outward.

### Sources of EM Waves

| Source | Mechanism | EM Region Produced |
|--------|-----------|-------------------|
| Antenna | Oscillating current in conductor | Radio, microwave |
| Hot objects | Thermal vibration of charges | Infrared, visible |
| Atomic transitions | Electrons jumping energy levels | Visible, UV, X-ray |
| Nuclear decay | Nuclear rearrangement | Gamma rays |
| Synchrotron | Charges accelerated in circles | X-rays (synchrotron radiation) |
      `
    },
    {
      id: 'electromagneticwaves-p4-antennas',
      type: 'text' as const,
      content: `
## Antennas and Broadcasting

### How an Antenna Works

An oscillating voltage source drives charges **back and forth** in a conducting rod. This acceleration creates oscillating E and B fields that propagate outward as EM waves.

Key points:
- **Frequency** of radiation = frequency of the driving oscillation
- **Wavelength** follows from $\\lambda = c/f$
- **Dipole antenna** radiates most strongly **perpendicular** to its length — zero radiation along the axis

### Antenna Length

For optimal transmission/reception, antenna length should be about $\\lambda/2$ (half a wavelength):

| Station Type | Frequency | Wavelength | Antenna Size |
|-------------|-----------|-----------|-------------|
| AM radio | ~1 MHz | ~300 m | ~150 m towers |
| FM radio | ~100 MHz | ~3 m | ~1.5 m |
| Cell phone | ~2 GHz | ~15 cm | ~7.5 cm (internal) |
| Wi-Fi | ~5 GHz | ~6 cm | ~3 cm |

> 🔑 **AP Tip:** Higher frequency = shorter wavelength = smaller antenna. This is why cell phone antennas can be inside the phone but AM radio stations need huge towers.

### Maxwell's Displacement Current

Maxwell's key addition to Ampere's law: a **changing electric field** acts like a current (displacement current) and produces a magnetic field:

$$I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}$$

This completes the symmetry: changing B → E (Faraday), AND changing E → B (Maxwell). Together, they allow self-sustaining EM waves to propagate without any charges or currents.
      `
    },
    {
      id: 'electromagneticwaves-p4-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'EM waves are produced by:',
            options: ['Stationary charges', 'Charges moving at constant velocity', 'Accelerating charges', 'Magnetic monopoles'],
            correctAnswer: 2,
            explanation: 'Only accelerating charges radiate EM waves. A stationary charge has a static E field; a charge at constant velocity has E and B but no radiation. Acceleration is required.'
          },
          {
            question: 'Maxwell\'s displacement current describes:',
            options: ['Current flowing in a wire', 'A changing electric field acting as a source of magnetic field', 'Magnetic current through a solenoid', 'Current through a capacitor plate'],
            correctAnswer: 1,
            explanation: 'Displacement current = $\\epsilon_0 d\\Phi_E/dt$. A changing E field produces B, just like a real current does. This was Maxwell\'s crucial addition that predicted EM waves.'
          },
          {
            question: 'A dipole antenna radiates most strongly:',
            options: ['Along its length', 'Perpendicular to its length', 'In all directions equally', 'Only in the forward direction'],
            correctAnswer: 1,
            explanation: 'Maximum radiation is perpendicular to the antenna axis; zero radiation along the axis. This is why TV antennas need to be oriented properly.'
          },
          {
            question: 'Why are FM radio antennas (~1.5 m) much shorter than AM radio towers (~150 m)?',
            options: [
              'FM uses less power',
              'FM has higher frequency, so shorter wavelength, so shorter optimal antenna length',
              'AM signals travel farther',
              'FM stations are closer to listeners'
            ],
            correctAnswer: 1,
            explanation: 'Optimal antenna ≈ $\\lambda/2$. FM: $f \\approx 100$ MHz → $\\lambda \\approx 3$ m → antenna ≈ 1.5 m. AM: $f \\approx 1$ MHz → $\\lambda \\approx 300$ m → antenna ≈ 150 m.'
          }
        ]
      }
    },
    {
      id: 'electromagneticwaves-p4-input',
      type: 'input-boxes' as const,
      content: `
**EM Wave Sources** 🧮

**1)** What produces visible light from a light bulb? (thermal/antenna/nuclear)

**2)** An FM radio station at 98.5 MHz broadcasts EM waves. Wavelength in meters? (round to 1 decimal)

**3)** Does a charge moving at constant velocity radiate EM waves? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['thermal', '3.0', 'no'],
        hint1: 'Hot filament = thermal radiation from vibrating charges',
        hint2: '$\\lambda = c/f = 3 \\times 10^8 / 98.5 \\times 10^6$',
        hint3: 'Only ___ charges radiate',
        explanation: '1) Thermal vibration of charges in the hot filament. 2) $3 \\times 10^8 / 98.5 \\times 10^6 \\approx 3.0$ m. 3) No — only acceleration produces EM radiation.'
      }
    },
    {
      id: 'electromagneticwaves-p4-applications',
      type: 'multiple-choice' as const,
      content: `
**Real-World Applications** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A microwave oven heats food using EM waves at ~2.45 GHz. These waves primarily cause:',
            options: [
              'Nuclear reactions in food molecules',
              'Water molecules to rotate and vibrate, converting EM energy to thermal energy',
              'Chemical bonds to break',
              'Food to become radioactive'
            ],
            correctAnswer: 1,
            explanation: 'Microwave radiation at 2.45 GHz is near the rotational resonance frequency of water molecules. The oscillating E field causes water molecules to rotate rapidly, and intermolecular friction converts this energy to heat.'
          },
          {
            question: 'Heinrich Hertz confirmed Maxwell\'s prediction of EM waves in 1887 by:',
            options: [
              'Observing light through a prism',
              'Producing and detecting radio waves with a spark-gap transmitter and receiver',
              'Measuring the speed of light',
              'Discovering X-rays'
            ],
            correctAnswer: 1,
            explanation: 'Hertz used an oscillating spark gap (accelerating charges) to produce radio waves and detected them with a loop antenna across the room. He confirmed the waves traveled at speed $c$, validating Maxwell\'s theory.'
          }
        ]
      }
    }
  ]
};
