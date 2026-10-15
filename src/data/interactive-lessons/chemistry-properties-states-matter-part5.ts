export const chemPropertiesStatesMatterPart5Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm5-intro',
      type: 'text' as const,
      title: 'Particle Models of the Phases — Introduction',
      content: `# 🔬 Comparing the Phases

**Part 5 of 7 — Particle-Level Models of Solids, Liquids, and Gases**

---

### Topics in This Part

| Section |
|---------|
| Spacing and Motion in Each Phase |
| Drawing Correct Particle Diagrams |
| Why Ice Floats |
| Gases: Spacing, Speed, and Collisions |

> 🔑 **Key Concept:** The AP exam asks you to represent solids, liquids, and gases with particle drawings and to explain macroscopic behavior (density, compressibility, shape) from those drawings.

---

### What You'll Master in Part 5
- Explaining why solids and liquids have similar molar volumes while gases do not
- Drawing and judging particle diagrams of phases and phase changes
- Predicting how temperature, pressure, and volume change a gas's particle spacing and collision frequency`
    },
    {
      id: 'sm5-features',
      type: 'text' as const,
      title: 'Spacing and Motion in Each Phase',
      content: `
## Spacing and Motion in Each Phase

### Solids and Liquids Are Both "Condensed" Phases

In both solids and liquids, the particles are **in contact with each other at all times**. The difference is motion, not spacing:

- **Solid:** particles vibrate in place and do not move past one another. In a **crystalline** solid the particles form a regular, repeating pattern; in an **amorphous** solid (like glass) they are disordered but still locked in place.
- **Liquid:** particles stay in contact but continually move, collide, and slide past each other.

Because the spacing is nearly the same, a solid and its liquid have **similar molar volumes**.

### Gases Are Mostly Empty Space

In a gas, particles are far apart compared with their own size and move independently between collisions.

| Water Sample (1 mol) | Approximate Volume |
|----------------------|--------------------|
| Ice at 0°C | 19.6 mL |
| Liquid water at 25°C | 18.0 mL |
| Water vapor at 100°C and 1 atm | about 30,600 mL |

The liquid and solid differ by about 10%, while the gas occupies well over a thousand times more space.

---

> 🔑 **Key Concept:** Liquids and solids are nearly incompressible because their particles already touch. Gases compress easily because there is so much empty space between particles.
      `
    },
    {
      id: 'sm5-features-q',
      type: 'multiple-choice' as const,
      title: 'Spacing and Motion Check',
      content: 'Test your particle-level picture of the three phases.',
      exercise: {
        questions: [
          {
            question: 'Why do the solid and liquid forms of most substances have similar molar volumes?',
            options: [
              'Both phases have exactly the same intermolecular forces',
              'In both phases the particles are in close contact',
              'Liquids are made of smaller molecules than solids',
              'Both phases contain the same amount of empty space as gases'
            ],
            correctAnswer: 1,
            explanation: 'In solids and liquids the particles touch their neighbors at all times, so the average spacing, and therefore the volume per mole, is similar. The phases differ in particle motion, not in particle size or composition, and both have far less empty space than a gas.'
          },
          {
            question: 'Which statement best distinguishes a liquid from a solid at the particle level?',
            options: [
              'Liquid particles are far apart; solid particles touch',
              'Liquid particles slide past each other; solid ones stay put',
              'Liquid particles are broken molecules; solid particles are whole',
              'Liquid particles do not attract; solid particles do'
            ],
            correctAnswer: 1,
            explanation: 'Both phases have particles in contact, and the molecules stay intact in both. The key difference is that liquid particles translate and slide past one another, while solid particles only vibrate about fixed positions. Attractions exist in both phases.'
          },
          {
            question: 'A syringe of air can be compressed easily, but a syringe of water barely compresses. The best explanation is that',
            options: [
              'water molecules are much larger than air molecules',
              'air molecules have no mass',
              'the air contains a lot of empty space between particles',
              'water molecules repel each other strongly'
            ],
            correctAnswer: 2,
            explanation: 'Gas particles are far apart, so pushing them closer takes up the empty space. Water molecules are already in contact, so there is almost no space to remove. Molecular size is not the reason: $N_{2}$ and $O_{2}$ are similar in size to $H_{2}O$.'
          }
        ]
      }
    },
    {
      id: 'sm5-reading-diagrams',
      type: 'text' as const,
      title: 'Drawing Correct Particle Diagrams',
      content: `
## Drawing Correct Particle Diagrams

A good particle diagram of a pure substance shows:

| Phase | What to Draw |
|-------|--------------|
| Solid (crystalline) | Particles touching in a regular, repeating arrangement |
| Liquid | Particles touching but randomly arranged, with occasional gaps |
| Gas | A few particles far apart, randomly placed, filling the container |

### Phase Changes Keep Molecules Intact

During melting, boiling, or sublimation, only the **intermolecular** attractions are overcome. The molecules themselves do not break apart.

- **Correct** drawing of boiling water: intact $H_{2}O$ molecules spread far apart in the gas.
- **Incorrect** drawing: separate $H_{2}$ and $O_{2}$ molecules, or loose H and O atoms. That would be a chemical change (decomposition), not a phase change.

### Example: Liquid Bromine and Its Vapor

A sealed flask contains liquid $Br_{2}$ with bromine vapor above it. A correct drawing shows:
- $Br_{2}$ molecules (two atoms joined) packed closely in the liquid at the bottom
- Fewer $Br_{2}$ molecules, far apart, in the space above
- **No** single Br atoms anywhere

---

> ⚠️ **Warning:** On free-response questions, drawing a diatomic molecule as separate atoms after a phase change is one of the most common ways to lose a point.
      `
    },
    {
      id: 'sm5-reading-dropdown',
      type: 'dropdown-select' as const,
      title: 'Particle Diagram Practice',
      content: 'Complete each statement about particle diagrams.',
      exercise: {
        dropdowns: [
          {
            id: 'sm5-dd1',
            label: 'A correct diagram of steam shows',
            options: ['intact $H_{2}O$ molecules far apart', 'separate $H_{2}$ and $O_{2}$ molecules', 'single H and O atoms far apart'],
            correctIndex: 0,
            explanation: 'Boiling overcomes only the attractions between water molecules. Each $H_{2}O$ molecule stays intact; the molecules are simply much farther apart in the gas.'
          },
          {
            id: 'sm5-dd2',
            label: 'Particles in a liquid are best drawn as',
            options: ['far apart and randomly placed', 'touching but randomly arranged', 'touching in a repeating pattern'],
            correctIndex: 1,
            explanation: 'Liquid particles are in contact like a solid but lack the regular repeating pattern of a crystal, because they constantly move past one another.'
          },
          {
            id: 'sm5-dd3',
            label: 'When iodine sublimes, the attractions overcome are',
            options: ['covalent bonds inside $I_{2}$', 'dispersion forces between $I_{2}$ molecules', 'ionic bonds between iodine atoms'],
            correctIndex: 1,
            explanation: 'Iodine is a nonpolar molecular solid. Sublimation separates whole $I_{2}$ molecules from each other by overcoming London dispersion forces; the I–I covalent bond stays intact.'
          }
        ]
      }
    },
    {
      id: 'sm5-water-anomaly',
      type: 'text' as const,
      title: 'Why Ice Floats',
      content: `
## Why Ice Floats

For most substances, the solid is slightly **denser** than the liquid because the particles pack more tightly when locked in place. Water is a famous exception.

### The Particle Explanation

- In ice, each water molecule hydrogen bonds to four neighbors in a fixed, **open hexagonal lattice**. The rigid geometry of these hydrogen bonds holds the molecules slightly apart, leaving empty space inside the crystal.
- When ice melts, some hydrogen bonds break and the lattice collapses. Molecules can then pack **more closely**, so liquid water is **denser** than ice.

> 🔑 **Key Concept:** The structure of a solid depends on both the interactions between particles and how well they can pack (3.3.A.1). In ice, the directional hydrogen bonds win out over tight packing.

### Consequences

1. **Ice floats** on liquid water.
2. **Lakes freeze from the top down**, and the floating ice insulates the water below, so aquatic life survives the winter.
3. **Water expands when it freezes**, which is why pipes can burst and rocks can crack in freezing weather.

| Substance | Denser Phase | Particle Reason |
|-----------|--------------|-----------------|
| Most substances (e.g., $CO_{2}$, paraffin) | Solid | Particles pack more tightly when locked in place |
| Water | Liquid | Hydrogen-bonded lattice of ice is open |
      `
    },
    {
      id: 'sm5-water-anomaly-q',
      type: 'multiple-choice' as const,
      title: 'Why Ice Floats Quiz',
      content: 'Test your understanding of water\'s unusual solid.',
      exercise: {
        questions: [
          {
            question: 'Why is ice less dense than liquid water?',
            options: [
              'Ice molecules are larger than liquid water molecules',
              'Hydrogen bonds hold ice in an open lattice with empty space',
              'Ice contains trapped air bubbles in every crystal',
              'Covalent O–H bonds lengthen when water freezes'
            ],
            correctAnswer: 1,
            explanation: 'In ice, each molecule hydrogen bonds to four neighbors in an open hexagonal lattice that holds the molecules apart. Melting breaks some of these hydrogen bonds so the molecules pack more closely. The molecules themselves do not change size or bond length.'
          },
          {
            question: 'A solid sample of paraffin wax sinks in its own melted liquid. What does this tell you?',
            options: [
              'Paraffin molecules hydrogen bond to each other like water',
              'Solid paraffin is less dense than liquid paraffin',
              'Its molecules pack more tightly in the solid',
              'Paraffin decomposes into smaller molecules when it melts'
            ],
            correctAnswer: 2,
            explanation: 'A solid that sinks in its own liquid is denser, meaning its molecules are packed more tightly. This is the normal behavior for most substances. Paraffin is a nonpolar hydrocarbon, so it cannot hydrogen bond, and melting is a physical change.'
          }
        ]
      }
    },
    {
      id: 'sm5-gas-spacing',
      type: 'text' as const,
      title: 'Gases: Spacing, Speed, and Collisions',
      content: `
## Gases: Spacing, Speed, and Collisions

Unlike solids and liquids, the spacing between gas particles is **not fixed**. It depends on temperature, pressure, and volume, and so does how often the particles collide.

| Change (other variables fixed) | Average Spacing | Average Speed | Collision Frequency |
|--------------------------------|-----------------|---------------|---------------------|
| Decrease the volume | Smaller | Same | Higher |
| Increase the pressure (by compressing) | Smaller | Same | Higher |
| Raise the temperature (rigid container) | Same | Higher | Higher |
| Add more gas (rigid container) | Smaller | Same | Higher |

### Reading the Table

- Only **temperature** changes the average speed, because Kelvin temperature is proportional to average kinetic energy.
- Squeezing the same particles into less space makes them collide more often even though they move no faster.
- Heating makes particles move faster, so they hit each other and the walls more often **and** harder.

---

> 💡 **Tip:** When you draw a gas before and after compression, keep the **same number** of particles and draw them closer together. When you draw it before and after heating in a rigid container, keep the spacing the same and show longer motion arrows.
      `
    },
    {
      id: 'sm5-exit-input',
      type: 'input-boxes' as const,
      title: 'Part 5 Exit Check',
      content: 'Complete these key statements about particle models of the phases.',
      exercise: {
        inputs: [
          {
            label: 'Solids and liquids are both nearly _____ because their particles are already in contact (one word)',
            correctAnswer: 'incompressible',
            explanation: 'With particles already touching, there is almost no empty space to remove, so solids and liquids barely compress.'
          },
          {
            label: 'Ice floats because it is _____ dense than liquid water (more/less)',
            correctAnswer: 'less',
            explanation: 'The hydrogen-bonded lattice of ice holds the molecules in an open arrangement, so ice is less dense than the liquid.'
          },
          {
            label: 'Of temperature, volume, and amount of gas, the only change that raises the average speed of gas particles is _____ (one word)',
            correctAnswer: 'temperature',
            explanation: 'Average kinetic energy, and therefore average speed for a given gas, depends only on Kelvin temperature. Volume and amount change the spacing and collision frequency but not the speed.'
          }
        ]
      }
    },
    {
      id: 'sm5-exit-quiz',
      type: 'multiple-choice' as const,
      title: 'Particle Models Exit Quiz',
      content: 'Final check on particle-level models.',
      exercise: {
        questions: [
          {
            question: 'A sample of $N_{2}$ gas in a sealed, rigid container is heated. Which statement about the gas particles is correct?',
            options: [
              'Their spacing shrinks, so they collide more often',
              'They move faster and collide more often',
              'They grow larger and fill more of the container',
              'They break into N atoms and collide more often'
            ],
            correctAnswer: 1,
            explanation: 'In a rigid container the volume and number of particles are fixed, so the average spacing does not change. Higher temperature means greater average kinetic energy and speed, so collisions are more frequent. Particles do not grow, and $N_{2}$ does not split into atoms on heating.'
          },
          {
            question: 'Which particle diagram best represents liquid ethanol, $C_{2}H_{5}OH$, changing to ethanol vapor?',
            options: [
              'Intact ethanol molecules moving from close contact to far apart',
              'Ethanol molecules splitting into C, H, and O atoms as they leave',
              'Ethanol molecules reacting to form $CO_{2}$ and $H_{2}O$ in the vapor',
              'Ethanol molecules staying touching in a repeating pattern'
            ],
            correctAnswer: 0,
            explanation: 'Vaporization is a physical change: only the attractions between ethanol molecules are overcome. The vapor contains the same intact $C_{2}H_{5}OH$ molecules, now far apart. Forming $CO_{2}$ and $H_{2}O$ would be combustion, a chemical change.'
          }
        ]
      }
    }
  ]
};
