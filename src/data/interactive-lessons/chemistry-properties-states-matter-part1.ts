export const chemPropertiesStatesMatterPart1Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm1-intro',
      type: 'text' as const,
      title: 'Kinetic Molecular Theory — Introduction',
      content: `# 🌡️ Kinetic Molecular Theory

**Part 1 of 7 — Particle Motion in Solids, Liquids, and Gases**

---

### Topics in This Part

| Section |
|---------|
| Postulates of Kinetic Molecular Theory |
| How Particles Move in Each Phase |
| Solids 🧊 |
| Liquids 💧 |
| Gases 💨 |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sm1-kmt-postulates',
      type: 'text' as const,
      title: 'Postulates of KMT',
      content: `
## Postulates of Kinetic Molecular Theory

The KMT was originally developed for ideal gases, but its principles extend to all phases:

1. **All matter is composed of tiny particles** (atoms, molecules, or ions) that are in **constant, random motion**.

2. **Temperature** is a measure of the **average kinetic energy** of the particles: the Kelvin temperature is **directly proportional** to the average kinetic energy. Each individual particle\'s kinetic energy is

$$\\boxed{KE = \\frac{1}{2}mv^2}$$

so at the same average KE, a particle with smaller mass $m$ must have a larger speed $v$.

3. **Collisions** between gas particles and with container walls are **perfectly elastic** — no kinetic energy is lost.

4. The **volume** of individual gas particles is **negligible** compared to the volume of the container (for ideal gases).

5. There are **no attractive or repulsive forces** between ideal gas particles (real gases deviate from this).

---

> 🔑 **Key Concept:** At a given temperature, **all gases have the same average kinetic energy**, regardless of molar mass. Heavier molecules move more slowly; lighter molecules move faster.
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
              'The total energy of all particles present',
              'The average kinetic energy of the particles',
              'The potential energy between particles',
              'The speed of the fastest particle'
            ],
            correctAnswer: 1,
            explanation: 'Kelvin temperature is directly proportional to the average kinetic energy of the particles. It does not measure total energy (which depends on the amount of substance) or potential energy.'
          },
          {
            question: 'At the same temperature, which gas has the fastest average molecular speed?',
            options: [
              '$O_{2}$ (32 g/mol)',
              '$N_{2}$ (28 g/mol)',
              'He (4 g/mol)',
              '$CO_{2}$ (44 g/mol)'
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

The average kinetic energy of gas particles depends **only** on the Kelvin temperature:

$$\\boxed{KE_{\\text{avg}} \\propto T \\text{ (in K)}}$$

- Doubling the Kelvin temperature **doubles** the average kinetic energy.
- At the same temperature, **every** gas has the same average kinetic energy, no matter its molar mass.

### Connecting to Speed

Because $KE = \\frac{1}{2}mv^2$:
- At the **same temperature**, lighter particles move **faster** on average than heavier particles.
- For **one gas**, raising the temperature raises the average speed, though not in direct proportion: speed grows more slowly than kinetic energy.

---

> ⚠️ **Warning:** Always convert to kelvin before comparing temperatures. Heating a gas from 10°C to 20°C does **not** double its average KE; the Kelvin temperature only rises from 283 K to 293 K, an increase of about 3.5%.
      `
    },
    {
      id: 'sm1-rms-calculation',
      type: 'input-boxes' as const,
      title: 'Kinetic Energy and Temperature Practice',
      content: 'Use the fact that average kinetic energy is proportional to Kelvin temperature.',
      exercise: {
        inputs: [
          {
            label: 'A gas is heated from 200 K to 600 K. By what factor does its average kinetic energy increase? (whole number)',
            correctAnswer: '3',
            explanation: 'Average KE is proportional to Kelvin temperature: $600/200 = 3$, so the average KE triples.'
          },
          {
            label: 'A gas is heated from 27°C to 327°C. By what factor does its average kinetic energy increase? (whole number)',
            correctAnswer: '2',
            explanation: 'Convert to kelvin first: 27°C = 300 K and 327°C = 600 K. The ratio $600/300 = 2$, so the average KE doubles. Using Celsius values directly would wrongly suggest a factor of about 12.'
          },
          {
            label: 'Samples of He and $CO_{2}$ are both at 300 K. What is the ratio of the average kinetic energy of He to that of $CO_{2}$? (whole number)',
            correctAnswer: '1',
            explanation: 'At the same temperature, all gases have the same average kinetic energy, so the ratio is 1. Helium atoms move faster on average only because they have much less mass.'
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
- **Most probable speed**: the peak of the curve (the most common speed).
- The long tail on the right means a small fraction of particles move much faster than average. This fraction matters for reaction rates, because only fast-moving particles collide with enough energy to react.

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
              'It shifts right and gets taller and narrower'
            ],
            correctAnswer: 1,
            explanation: 'Higher temperature means higher average KE and speed, so the curve shifts right. The total area must remain constant (same number of molecules), so as it broadens, it must also become flatter.'
          },
          {
            question: 'When a gas is heated, what happens to the fraction of particles moving faster than a given high speed?',
            options: [
              'It decreases because the curve gets flatter',
              'It increases because the curve shifts to higher speeds',
              'It stays the same because the area under the curve is fixed',
              'It drops to zero because all particles reach the same speed'
            ],
            correctAnswer: 1,
            explanation: 'Heating shifts the distribution to the right and spreads it out, so more of the area under the curve lies above any given high speed. The total area stays the same (same number of particles), but more of it moves into the high-speed tail.'
          },
          {
            question: 'At the same temperature, how do the Maxwell-Boltzmann distributions of He and Xe compare?',
            options: [
              'He has a narrower curve shifted left',
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
            explanation: 'Kelvin temperature is directly proportional to the average kinetic energy of the particles.'
          }
        ]
      }
    }
  ]
};
