export const physics2EmWavesPart4Data = {
  topicSlug: 'electromagnetic-waves',
  sections: [
    {
      id: 'electromagneticwaves-p4-intro',
      type: 'text' as const,
      content: `# 📡 EM Wave Generation & Applications

**Part 4 of 7 — How EM Waves Are Produced**

---

### Sources of EM Waves

Any **accelerating charge** produces electromagnetic radiation.

| Source | Mechanism |
|--------|-----------|
| Antenna | Oscillating current in conductor |
| Hot objects | Thermal vibration of charges |
| Atomic transitions | Electrons jumping energy levels |
| Nuclear decay | Nuclear rearrangement |

### Antenna Basics

An oscillating voltage drives charges back and forth in an antenna, creating oscillating E and B fields that propagate outward.

- **Frequency** of radiation = frequency of oscillation
- **Dipole antenna** radiates most strongly perpendicular to its length

---

### Maxwell’s Key Insight

A changing electric field creates a magnetic field (displacement current), and a changing magnetic field creates an electric field (Faraday’s law). Together, they sustain a self-propagating wave.`
    },    {
      id: 'electromagneticwaves-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'EM waves are produced by:',
            options: ['Stationary charges', 'Charges moving at constant velocity', 'Accelerating charges', 'Magnetic monopoles'],
            correctAnswer: 2,
            explanation: 'Only accelerating charges radiate EM waves.'
          },
          {
            question: 'Maxwell’s displacement current describes:',
            options: ['Current in a wire', 'A changing electric field acting like a current', 'Magnetic current', 'Current through a capacitor plate'],
            correctAnswer: 1,
            explanation: 'Displacement current = $\\\\epsilon_0 d\\\\Phi_E/dt$. A changing E field produces B, just like a real current.'
          },
          {
            question: 'A dipole antenna radiates most strongly:',
            options: ['Along its length', 'Perpendicular to its length', 'In all directions equally', 'Only upward'],
            correctAnswer: 1,
            explanation: 'Maximum radiation is perpendicular to the antenna axis; zero along the axis.'
          }
        ]
      }
    },    {
      id: 'electromagneticwaves-p4-input',
      type: 'input-boxes' as const,
      content: `
**EM Wave Sources** 🧮

**1)** What produces visible light from a light bulb? (thermal/antenna/nuclear)

**2)** An FM radio station at 98.5 MHz broadcasts EM waves. Wavelength? (round to 1 decimal, in meters)

**3)** Does a charge moving at constant velocity radiate EM waves? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['thermal', '3.0', 'no'],
        hint1: 'Hot filament = thermal radiation',
        hint2: '$\\\\lambda = c/f$',
        hint3: 'Only accelerating charges radiate',
        explanation: '1) Thermal vibration of charges in the hot filament. 2) $3 \\\\times 10^8 / 98.5 \\\\times 10^6 \\\\approx 3.0$ m. 3) No — only acceleration produces radiation.'
      }
    }
  ]
};
