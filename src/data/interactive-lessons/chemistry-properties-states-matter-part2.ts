export const chemPropertiesStatesMatterPart2Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm2-intro',
      type: 'text' as const,
      title: 'Properties of Solids — Introduction',
      content: `
# 🧊 Properties of Solids

**Part 2 of 7 — Types of Solids and Their Properties**

Solids have a definite shape and definite volume because their particles are held in fixed positions by **strong interparticle forces**. But not all solids are the same — the **type of particles** and **bonding** within a solid determine its physical properties.

We classify solids into two broad categories:
- **Crystalline solids** — particles arranged in a **regular, repeating 3D pattern** (a crystal lattice)
- **Amorphous solids** — particles arranged in a **random, disordered** pattern (no long-range order)
      `
    },
    {
      id: 'sm2-crystalline-vs-amorphous',
      type: 'text' as const,
      title: 'Crystalline vs. Amorphous Solids',
      content: `
## Crystalline vs. Amorphous Solids

### Crystalline Solids

- Have a **well-defined melting point** (sharp transition from solid to liquid).
- Particles arranged in an **orderly, repeating lattice**.
- Examples: NaCl, diamond, quartz, iron, ice.

### Amorphous Solids

- Have **no definite melting point** — they soften gradually over a range of temperatures.
- Particles arranged **randomly**, without long-range order.
- Often called "supercooled liquids" because their structure resembles a frozen liquid.
- Examples: glass, rubber, plastics, chocolate.

| Feature | Crystalline | Amorphous |
|---------|------------|-----------|
| Structure | Ordered lattice | Random/disordered |
| Melting point | Sharp, well-defined | Gradual softening |
| Flat crystal faces | Yes | No |
| Examples | Salt, diamond, ice | Glass, rubber, plastic |
      `
    },
    {
      id: 'sm2-cryst-vs-amorphous-q',
      type: 'multiple-choice' as const,
      title: 'Crystalline vs. Amorphous Check',
      content: 'Distinguish between crystalline and amorphous solids.',
      exercise: {
        questions: [
          {
            question: 'Which property is characteristic of an amorphous solid?',
            options: [
              'A sharp, well-defined melting point',
              'A regular, repeating crystal lattice',
              'Gradual softening over a temperature range instead of a sharp melting point',
              'Flat crystal faces visible to the naked eye'
            ],
            correctAnswer: 2,
            explanation: 'Amorphous solids lack long-range order, so different regions of the solid break down at different temperatures, resulting in gradual softening rather than a sharp melting point.'
          }
        ]
      }
    },
    {
      id: 'sm2-ionic-solids',
      type: 'text' as const,
      title: 'Ionic Solids',
      content: `
## Types of Crystalline Solids

### 1. Ionic Solids

**Lattice particles:** Cations (+) and anions (−) held together by **electrostatic (ionic) bonds**.

**Properties:**
- **High melting points** (strong ionic bonds; typically > 500°C)
- **Hard but brittle** — displacing a layer brings like charges together, causing repulsion and fracture
- **Do not conduct electricity as solids** (ions locked in place)
- **Conduct electricity when melted or dissolved** in water (ions free to move)
- Many are **soluble in polar solvents** like water

**Examples:** NaCl (801°C mp), MgO (2852°C mp), CaF₂

### Why is MgO\'s melting point so much higher than NaCl\'s?

The lattice energy (strength of ionic bonding) depends on **charge** and **ionic radius**:

$$\\text{Lattice Energy} \\propto \\frac{q^+ \\times q^-}{r^+ + r^-}$$

MgO has 2+/2− charges vs. NaCl\'s 1+/1−, and smaller ions, giving MgO much stronger ionic bonds.
      `
    },
    {
      id: 'sm2-molecular-solids',
      type: 'text' as const,
      title: 'Molecular Solids',
      content: `
### 2. Molecular Solids

**Lattice particles:** Discrete molecules held together by **intermolecular forces** (LDF, dipole-dipole, or hydrogen bonds).

**Properties:**
- **Low melting points** (weak IMFs; typically < 300°C)
- **Soft** — easy to deform
- **Do not conduct electricity** in any phase (no free ions or delocalized electrons)
- Solubility follows "like dissolves like"

**Examples:** Ice (H₂O, 0°C mp), dry ice (CO₂, sublimes at −78°C), sugar (C₁₂H₂₂O₁₁), I₂

### Key Insight

The **intramolecular bonds** (covalent bonds within each molecule) are strong, but the **intermolecular forces** (between molecules) are relatively weak. It\'s the IMFs that determine the melting point — you\'re separating molecules from each other, not breaking covalent bonds.
      `
    },
    {
      id: 'sm2-metallic-solids',
      type: 'text' as const,
      title: 'Metallic Solids',
      content: `
### 3. Metallic Solids

**Lattice particles:** Metal cations surrounded by a **"sea" of delocalized electrons** (metallic bonding).

**Properties:**
- **Variable melting points** (from −39°C for Hg to 3422°C for W/tungsten)
- **Malleable** (can be hammered into sheets) and **ductile** (drawn into wires)
- **Excellent conductors** of heat and electricity (delocalized electrons carry charge and energy)
- **Lustrous** (shiny) — delocalized electrons absorb and re-emit light
- **Insoluble** in most solvents

**Examples:** Fe, Cu, Al, Au, Na

### Why are metals malleable instead of brittle?

When layers of a metal are displaced, the delocalized electrons shift to maintain bonding in the new arrangement. In ionic solids, displacement brings like charges together → shattering.
      `
    },
    {
      id: 'sm2-network-covalent',
      type: 'text' as const,
      title: 'Network Covalent Solids',
      content: `
### 4. Network Covalent (Atomic) Solids

**Lattice particles:** Atoms connected by a **continuous network of covalent bonds** extending throughout the entire solid.

**Properties:**
- **Extremely high melting points** (strong covalent bonds; often > 1000°C)
- **Very hard** (diamond is the hardest natural substance)
- **Do not conduct electricity** (no free electrons or ions) — exception: graphite
- **Insoluble** in virtually all solvents

**Examples:**
- **Diamond** (C, mp 3550°C) — each carbon bonded to 4 others in a tetrahedral network
- **Silicon dioxide / Quartz** (SiO₂, mp 1713°C) — Si and O atoms in a 3D network
- **Silicon carbide** (SiC, mp 2730°C)
- **Graphite** (C) — carbon atoms in 2D sheets with delocalized electrons between layers; conducts electricity!

### Diamond vs. Graphite

Both are pure carbon, but:
- **Diamond**: 3D network of $sp^3$ bonds → extremely hard, does not conduct
- **Graphite**: 2D sheets of $sp^2$ bonds with delocalized $\\pi$ electrons → slippery layers, conducts electricity
      `
    },
    {
      id: 'sm2-types-comparison',
      type: 'multiple-choice' as const,
      title: 'Comparing Solid Types',
      content: 'Identify the type of solid based on its properties.',
      exercise: {
        questions: [
          {
            question: 'A solid has a very high melting point, is extremely hard, and does not conduct electricity. What type of solid is it?',
            options: [
              'Ionic solid',
              'Molecular solid',
              'Metallic solid',
              'Network covalent solid'
            ],
            correctAnswer: 3,
            explanation: 'Network covalent solids (like diamond or SiO₂) have extremely high melting points due to strong covalent bonds, are very hard, and generally do not conduct electricity. Ionic solids also have high melting points but are brittle and conduct when dissolved.'
          },
          {
            question: 'A solid conducts electricity both as a solid and when melted, is malleable, and is lustrous. What type of solid is it?',
            options: [
              'Ionic solid',
              'Molecular solid',
              'Metallic solid',
              'Network covalent solid'
            ],
            correctAnswer: 2,
            explanation: 'Metallic solids conduct electricity in all phases (delocalized electrons), are malleable and ductile (electron sea adjusts to deformation), and are lustrous (electrons interact with light).'
          },
          {
            question: 'A solid does NOT conduct electricity as a solid, but DOES conduct when dissolved in water. What type is it?',
            options: [
              'Ionic solid',
              'Molecular solid',
              'Metallic solid',
              'Network covalent solid'
            ],
            correctAnswer: 0,
            explanation: 'Ionic solids have ions locked in a lattice (can\'t move → no conduction as solid), but when dissolved, the ions dissociate and are free to carry charge → conduction in solution.'
          }
        ]
      }
    },
    {
      id: 'sm2-dropdown-solid-types',
      type: 'dropdown-select' as const,
      title: 'Classify the Solid',
      content: 'For each substance, select the correct type of crystalline solid.',
      exercise: {
        dropdowns: [
          {
            id: 'sm2-dd1',
            label: 'Ice (H₂O) is composed of discrete water molecules held together by hydrogen',
            options: ['Ionic', 'Molecular', 'Metallic', 'Network covalent'],
            correctIndex: 1,
            explanation: 'Ice (H₂O) is composed of discrete water molecules held together by hydrogen bonds — a molecular solid with a low melting point of 0°C.'
          },
          {
            id: 'sm2-dd2',
            label: 'NaCl is composed of Na⁺ and Cl⁻ ions in a crystal lattice — an _______ solid',
            options: ['Ionic', 'Molecular', 'Metallic', 'Network covalent'],
            correctIndex: 0,
            explanation: 'NaCl is composed of Na⁺ and Cl⁻ ions in a crystal lattice — an ionic solid with a high melting point of 801°C.'
          },
          {
            id: 'sm2-dd3',
            label: 'Diamond is pure carbon with each atom covalently bonded to four others in a',
            options: ['Ionic', 'Molecular', 'Metallic', 'Network covalent'],
            correctIndex: 3,
            explanation: 'Diamond is pure carbon with each atom covalently bonded to four others in a continuous 3D network — a network covalent solid.'
          },
          {
            id: 'sm2-dd4',
            label: 'Copper (Cu) consists of metal cations in a sea of delocalized electrons — a',
            options: ['Ionic', 'Molecular', 'Metallic', 'Network covalent'],
            correctIndex: 2,
            explanation: 'Copper (Cu) consists of metal cations in a sea of delocalized electrons — a metallic solid that conducts electricity and is malleable.'
          }
        ]
      }
    },
    {
      id: 'sm2-melting-points',
      type: 'text' as const,
      title: 'Predicting Relative Melting Points',
      content: `
## Predicting Relative Melting Points

The melting point of a solid depends on the **strength of the forces** holding particles in the lattice:

**Ranking by typical melting points (from lowest to highest):**

$$\\text{Molecular} < \\text{Metallic (varies)} < \\text{Ionic} < \\text{Network Covalent}$$

### Within each category:

**Molecular solids:** Stronger IMFs → higher mp
- H-bonding > dipole-dipole > LDF (for similar size)
- Larger molar mass → stronger LDF → higher mp

**Ionic solids:** Greater charge, smaller ions → higher lattice energy → higher mp
- MgO (2+/2−) ≫ NaCl (1+/1−)

**Metallic solids:** More valence electrons and smaller atomic radius → stronger metallic bonding → higher mp
- Tungsten (W, 3422°C) ≫ Sodium (Na, 98°C)

**Network covalent solids:** Shorter, stronger covalent bonds → higher mp
- Diamond (C–C bonds, 3550°C) > SiC (2730°C) > SiO₂ (1713°C)
      `
    },
    {
      id: 'sm2-melting-point-ranking',
      type: 'multiple-choice' as const,
      title: 'Melting Point Ranking',
      content: 'Apply your knowledge of solid types to rank melting points.',
      exercise: {
        questions: [
          {
            question: 'Rank the following from lowest to highest melting point: NaCl, CO₂, SiO₂, Cu',
            options: [
              'CO₂ < Cu < NaCl < SiO₂',
              'Cu < CO₂ < NaCl < SiO₂',
              'NaCl < CO₂ < Cu < SiO₂',
              'CO₂ < NaCl < Cu < SiO₂'
            ],
            correctAnswer: 3,
            explanation: 'CO₂ is a molecular solid (sublimes at −78°C, weakest forces). NaCl is ionic (mp 801°C). Cu is a metallic solid (mp 1085°C). SiO₂ is network covalent (mp 1713°C, strongest forces). Correct order: CO₂ (−78°C) < NaCl (801°C) < Cu (1085°C) < SiO₂ (1713°C).'
          }
        ]
      }
    },
    {
      id: 'sm2-exit-input',
      type: 'input-boxes' as const,
      title: 'Part 2 Exit Check',
      content: 'Complete these key facts about types of solids.',
      exercise: {
        inputs: [
          {
            label: 'The type of solid that conducts electricity due to delocalized electrons is _____ (ionic/molecular/metallic/network covalent)',
            correctAnswer: 'metallic',
            explanation: 'Metallic solids have a "sea" of delocalized electrons that are free to move and carry electric charge, making metals excellent electrical conductors.'
          },
          {
            label: 'Solids that lack long-range order and soften gradually are called _____ solids (crystalline/amorphous)',
            correctAnswer: 'amorphous',
            explanation: 'Amorphous solids have a random particle arrangement with no long-range order. They soften gradually over a temperature range rather than melting at a sharp temperature.'
          },
          {
            label: 'Ionic solids conduct electricity when _____ or dissolved in water (one word)',
            correctAnswer: 'melted',
            explanation: 'When an ionic solid is melted (or dissolved), the ions are freed from the lattice and can move to carry electric current. As a solid, ions are locked in place and cannot conduct.'
          }
        ]
      }
    }
  ]
};
