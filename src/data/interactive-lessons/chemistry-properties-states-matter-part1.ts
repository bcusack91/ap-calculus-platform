export const chemPropertiesStatesMatterPart1Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm1-intro',
      type: 'text' as const,
      title: 'Kinetic Molecular Theory — Introduction',
      content: `
# 🌡️ Kinetic Molecular Theory

**Part 1 of 7 — Particle Motion in Solids, Liquids, and Gases**

Matter exists in three common phases — solid, liquid, and gas — and the **Kinetic Molecular Theory (KMT)** explains their properties by focusing on the behavior of individual particles (atoms, molecules, or ions).

The central idea: **all particles are in constant motion**, and the type and extent of that motion determines the phase of matter.
      `
    },
    {
      id: 'sm1-kmt-postulates',
      type: 'text' as const,
      title: 'Postulates of KMT',
      content: `
## Postulates of Kinetic Molecular Theory

The KMT was originally developed for ideal gases, but its principles extend to all phases:

1. **All matter is composed of tiny particles** (atoms, molecules, or ions) that are in **constant, random motion**.

2. **Temperature** is a measure of the **average kinetic energy** of the particles:

$$KE_{\\text{avg}} = \\frac{3}{2} k_B T$$

where $k_B = 1.38 \\times 10^{-23}$ J/K is Boltzmann\'s constant and $T$ is the absolute temperature in kelvin.

3. **Collisions** between gas particles and with container walls are **perfectly elastic** — no kinetic energy is lost.

4. The **volume** of individual gas particles is **negligible** compared to the volume of the container (for ideal gases).

5. There are **no attractive or repulsive forces** between ideal gas particles (real gases deviate from this).

### Key Takeaway

At a given temperature, **all gases have the same average kinetic energy**, regardless of molar mass. Heavier molecules move more slowly; lighter molecules move faster.
      `
    },
    {
      id: 'sm1-kmt-postulates-check',
      type: 'multiple-choice' as const,
      title: 'KMT Postulate Check',
      content: 'Test your understanding of the basic postulates of Kinetic Molecular Theory.',
      exercise: {
        questions: [
          {
            question: 'According to KMT, what does temperature measure?',
            options: [
              'The total energy of all particles in a sample',
              'The average kinetic energy of the particles',
              'The potential energy between particles',
              'The speed of the fastest particle'
            ],
            correctAnswer: 1,
            explanation: 'Temperature is directly proportional to the average kinetic energy of the particles: $KE_{\\text{avg}} = \\frac{3}{2}k_BT$. It does not measure total energy (which depends on the amount of substance) or potential energy.'
          },
          {
            question: 'At the same temperature, which gas has the fastest average molecular speed?',
            options: [
              'O₂ (32 g/mol)',
              'N₂ (28 g/mol)',
              'He (4 g/mol)',
              'CO₂ (44 g/mol)'
            ],
            correctAnswer: 2,
            explanation: 'At the same temperature, all gases have the same average KE. Since $KE = \\frac{1}{2}mv^2$, lighter molecules must move faster to have the same KE. Helium (4 g/mol) is the lightest, so it moves fastest.'
          }
        ]
      }
    },
    {
      id: 'sm1-phases-particle-motion',
      type: 'text' as const,
      title: 'Particle Motion in Each Phase',
      content: `
## How Particles Move in Each Phase

### Solids 🧊
- Particles are **tightly packed** in fixed positions (usually a regular lattice).
- Particles **vibrate** about their fixed positions but do **not** translate or rotate freely.
- **Strong intermolecular forces** hold particles in place.
- Have a **definite shape** and **definite volume**.

### Liquids 💧
- Particles are **close together** but can **slide past** one another.
- Particles have **translational, rotational, and vibrational** motion.
- **Moderate intermolecular forces** — strong enough to keep particles close, but not strong enough to fix them in place.
- Have a **definite volume** but take the **shape of their container**.

### Gases 💨
- Particles are **far apart** with large distances between them.
- Particles move **rapidly** in **random, straight-line paths** until they collide.
- **Very weak or negligible intermolecular forces** (ideal gas assumption).
- Have **no definite shape** and **no definite volume** — expand to fill their container.

| Property | Solid | Liquid | Gas |
|----------|-------|--------|-----|
| Particle spacing | Very close (fixed) | Close (mobile) | Far apart |
| Motion type | Vibration only | Translation + rotation + vibration | Rapid translation |
| Shape | Definite | Indefinite | Indefinite |
| Volume | Definite | Definite | Indefinite |
| Compressibility | Nearly incompressible | Nearly incompressible | Highly compressible |
      `
    },
    {
      id: 'sm1-phase-motion-dropdown',
      type: 'dropdown-select' as const,
      title: 'Phase Properties Fill-In',
      content: 'Complete each statement about the phases of matter.',
      exercise: {
        dropdowns: [
          {
            id: 'sm1-dd1',
            label: 'In solids, particles are locked in fixed positions. What type of motion can they perform?',
            options: ['vibrate in place', 'slide past each other', 'move rapidly in straight lines'],
            correctIndex: 0,
            explanation: 'In solids, particles are locked in fixed positions and can only vibrate about those positions.'
          },
          {
            id: 'sm1-dd2',
            label: 'Which phase of matter is highly compressible?',
            options: ['solids', 'liquids', 'gases'],
            correctIndex: 2,
            explanation: 'Gases are highly compressible because their particles are far apart with lots of empty space between them.'
          },
          {
            id: 'sm1-dd3',
            label: 'Which best describes the shape and volume properties of a liquid?',
            options: ['definite shape and definite volume', 'definite volume but indefinite shape', 'neither definite shape nor definite volume'],
            correctIndex: 1,
            explanation: 'Liquids have a definite volume (particles are close together) but take the shape of their container (particles can slide past each other).'
          }
        ]
      }
    },
    {
      id: 'sm1-ke-and-temperature',
      type: 'text' as const,
      title: 'Kinetic Energy and Temperature',
      content: `
## The Relationship Between KE and Temperature

The average kinetic energy of particles depends **only** on temperature:

$$KE_{\\text{avg}} = \\frac{3}{2} k_B T$$

For a mole of particles, we can write:

$$KE_{\\text{avg per mole}} = \\frac{3}{2} RT$$

where $R = 8.314$ J/(mol·K) is the ideal gas constant.

### Root-Mean-Square Speed

The **rms speed** ($v_{\\text{rms}}$) relates KE to the molar mass $M$:

$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$

where $M$ is the molar mass in **kg/mol** (not g/mol!).

### Important Consequences

- **Doubling the temperature** (in kelvin) doubles the average KE.
- **Doubling the temperature** increases $v_{\\text{rms}}$ by a factor of $\\sqrt{2}$ (not 2!).
- At the same temperature, a gas with **4× the molar mass** has **half** the rms speed.
      `
    },
    {
      id: 'sm1-rms-calculation',
      type: 'input-boxes' as const,
      title: 'RMS Speed Calculations',
      content: 'Use the equation $v_{\\text{rms}} = \\sqrt{3RT/M}$ to answer these questions. Use $R = 8.314$ J/(mol·K).',
      exercise: {
        inputs: [
          {
            label: 'Calculate the rms speed of N₂ (M = 0.028 kg/mol) at 300 K, in m/s (round to the nearest whole number)',
            correctAnswer: '517',
            explanation: '$v_{\\text{rms}} = \\sqrt{\\frac{3(8.314)(300)}{0.028}} = \\sqrt{\\frac{7482.6}{0.028}} = \\sqrt{267{,}236} \\approx 517$ m/s.'
          },
          {
            label: 'If the temperature is doubled from 300 K to 600 K, what is the new rms speed of N₂ in m/s? (round to the nearest whole number)',
            correctAnswer: '731',
            explanation: 'Doubling the temperature multiplies $v_{\\text{rms}}$ by $\\sqrt{2}$: $517 \\times \\sqrt{2} \\approx 517 \\times 1.414 \\approx 731$ m/s.'
          }
        ]
      }
    },
    {
      id: 'sm1-maxwell-boltzmann',
      type: 'text' as const,
      title: 'Maxwell-Boltzmann Distribution',
      content: `
## Maxwell-Boltzmann Distribution

Not all particles in a gas move at the same speed. The **Maxwell-Boltzmann distribution** shows the spread of molecular speeds at a given temperature:

Key features of the distribution curve:
- The curve is **not symmetric** — it is skewed to the right.
- **Most probable speed** ($v_p$): the peak of the curve (most common speed).
- **Average speed** ($v_{\\text{avg}}$): slightly higher than $v_p$.
- **Root-mean-square speed** ($v_{\\text{rms}}$): highest of the three, $v_{\\text{rms}} > v_{\\text{avg}} > v_p$.

### Effect of Temperature

- **Higher temperature** → the curve shifts **right** (faster speeds) and becomes **broader and flatter**.
- **Lower temperature** → the curve shifts **left** (slower speeds) and becomes **taller and narrower**.
- The **area under the curve** is always the same (= total number of particles).

### Effect of Molar Mass (at constant T)

- **Lighter molecules** → broader curve shifted to the right (faster).
- **Heavier molecules** → narrower curve shifted to the left (slower).
      `
    },
    {
      id: 'sm1-maxwell-quiz',
      type: 'multiple-choice' as const,
      title: 'Maxwell-Boltzmann Quiz',
      content: 'Test your understanding of the Maxwell-Boltzmann distribution.',
      exercise: {
        questions: [
          {
            question: 'When a gas is heated from 300 K to 600 K, what happens to the Maxwell-Boltzmann distribution curve?',
            options: [
              'It shifts left and becomes taller',
              'It shifts right and becomes broader and flatter',
              'It stays in the same position but gets taller',
              'It shifts right and becomes taller and narrower'
            ],
            correctAnswer: 1,
            explanation: 'Higher temperature means higher average KE and speed, so the curve shifts right. The total area must remain constant (same number of molecules), so as it broadens, it must also become flatter.'
          },
          {
            question: 'For three speed measures of a Maxwell-Boltzmann distribution, which order is correct?',
            options: [
              '$v_{\\text{rms}} > v_{\\text{avg}} > v_p$',
              '$v_p > v_{\\text{avg}} > v_{\\text{rms}}$',
              '$v_{\\text{avg}} > v_{\\text{rms}} > v_p$',
              'All three are equal'
            ],
            correctAnswer: 0,
            explanation: 'Because the distribution is right-skewed, the rms speed is always greatest, followed by the average speed, then the most probable speed: $v_{\\text{rms}} > v_{\\text{avg}} > v_p$.'
          },
          {
            question: 'At the same temperature, how do the Maxwell-Boltzmann distributions of He and Xe compare?',
            options: [
              'He has a taller, narrower curve shifted left',
              'Xe has a broader curve shifted to the right',
              'He has a broader curve shifted to the right',
              'Both have identical distributions'
            ],
            correctAnswer: 2,
            explanation: 'At the same temperature, lighter He molecules move faster than heavier Xe molecules. So He has a broader distribution shifted to higher speeds (right), while Xe has a taller, narrower curve shifted left.'
          }
        ]
      }
    },
    {
      id: 'sm1-exit-input',
      type: 'input-boxes' as const,
      title: 'Part 1 Exit Check',
      content: 'Complete these key statements from Part 1.',
      exercise: {
        inputs: [
          {
            label: 'In solids, particles can only _____ about their fixed positions (one word)',
            correctAnswer: 'vibrate',
            explanation: 'Solid particles are held in fixed positions by strong intermolecular forces and can only vibrate in place.'
          },
          {
            label: 'The phase that is highly compressible because particles are far apart is _____ (solid/liquid/gas)',
            correctAnswer: 'gas',
            explanation: 'Gas particles are far apart with mostly empty space between them, making gases highly compressible.'
          },
          {
            label: 'According to KMT, temperature is proportional to the average _____ energy of the particles (one word)',
            correctAnswer: 'kinetic',
            explanation: 'Temperature is a direct measure of average kinetic energy: $KE_{\\text{avg}} = \\frac{3}{2}k_BT$.'
          }
        ]
      }
    }
  ]
};
