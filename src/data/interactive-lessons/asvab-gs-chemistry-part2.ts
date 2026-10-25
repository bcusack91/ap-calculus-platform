const gscParticleFigure = {
  svg: '<svg viewBox="0 0 330 145" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="90" height="100"/><rect x="120" y="10" width="90" height="100"/><rect x="230" y="10" width="90" height="100"/></g><g class="fig-accent" fill="currentColor"><circle cx="22" cy="102" r="5"/><circle cx="34" cy="100" r="5"/><circle cx="47" cy="103" r="5"/><circle cx="60" cy="101" r="5"/><circle cx="72" cy="103" r="5"/><circle cx="86" cy="100" r="5"/><circle cx="27" cy="90" r="5"/><circle cx="40" cy="88" r="5"/><circle cx="53" cy="91" r="5"/><circle cx="66" cy="89" r="5"/><circle cx="79" cy="91" r="5"/><circle cx="91" cy="88" r="5"/><circle cx="21" cy="78" r="5"/><circle cx="34" cy="77" r="5"/><circle cx="47" cy="79" r="5"/><circle cx="60" cy="76" r="5"/><circle cx="73" cy="79" r="5"/><circle cx="86" cy="77" r="5"/><circle cx="135" cy="25" r="5"/><circle cx="190" cy="30" r="5"/><circle cx="160" cy="55" r="5"/><circle cx="131" cy="80" r="5"/><circle cx="198" cy="76" r="5"/><circle cx="172" cy="99" r="5"/><circle cx="145" cy="102" r="5"/><circle cx="251" cy="50" r="5"/><circle cx="263" cy="50" r="5"/><circle cx="275" cy="50" r="5"/><circle cx="287" cy="50" r="5"/><circle cx="299" cy="50" r="5"/><circle cx="251" cy="62" r="5"/><circle cx="263" cy="62" r="5"/><circle cx="275" cy="62" r="5"/><circle cx="287" cy="62" r="5"/><circle cx="299" cy="62" r="5"/><circle cx="251" cy="74" r="5"/><circle cx="263" cy="74" r="5"/><circle cx="275" cy="74" r="5"/><circle cx="287" cy="74" r="5"/><circle cx="299" cy="74" r="5"/><circle cx="251" cy="86" r="5"/><circle cx="263" cy="86" r="5"/><circle cx="275" cy="86" r="5"/><circle cx="287" cy="86" r="5"/><circle cx="299" cy="86" r="5"/><circle cx="251" cy="98" r="5"/><circle cx="263" cy="98" r="5"/><circle cx="275" cy="98" r="5"/><circle cx="287" cy="98" r="5"/><circle cx="299" cy="98" r="5"/></g><text x="55" y="130" font-size="12" fill="currentColor" text-anchor="middle">Panel 1</text><text x="165" y="130" font-size="12" fill="currentColor" text-anchor="middle">Panel 2</text><text x="275" y="130" font-size="12" fill="currentColor" text-anchor="middle">Panel 3</text></svg>',
  alt: 'Three boxes of particles drawn as dots. Panel 1: about eighteen particles packed close together but in an irregular, jumbled arrangement, settled in the bottom of the box. Panel 2: seven particles spread far apart throughout the whole box. Panel 3: twenty-five particles packed tightly in neat, regular rows and columns.',
  caption: 'Figure 1. The same substance shown as particles in three different states.',
  size: 'md' as const,
}

export const asvabGsChemistryPart2Data = {
  topicSlug: 'asvab-gs-chemistry',
  sections: [
    {
      id: 'gsc2-intro',
      type: 'text' as const,
      content: `# ⚗️ Chemistry: Matter and Reactions

**Part 2 of 7 — Matter, States and Changes**

### What Matter Is

**Matter** is anything that has **mass** and takes up **space** (has **volume**). Air, water, steel and your own body are all matter. Light, heat and sound are **not** matter: they are forms of energy.

| Word | Meaning | Common units |
|:---|:---|:---|
| **Mass** | how much matter an object contains | grams (g), kilograms (kg) |
| **Volume** | how much space it takes up | cm³, mL, L |
| **Density** | how much mass is packed into each unit of volume | g/cm³ or g/mL |

One cubic centimeter and one milliliter are the **same volume**: $1 \\text{ cm}^3 = 1 \\text{ mL}$.

### Density

$$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$$

**Water's density is about 1 g/cm³** (1 g/mL). That single number answers most floating questions:

| Object's density | In water it... |
|:---|:---|
| Less than 1 g/cm³ | **floats** (wood, cooking oil, ice) |
| More than 1 g/cm³ | **sinks** (rock, iron, lead) |

Density belongs to the **substance**, not the size of the piece. Cut a steel bar in half and each half has half the mass and half the volume, so the density stays the same.

### Density and particle spacing

Density depends on how **tightly the particles are packed**. When the same mass is squeezed into less space (particles closer together), density goes **up**. When particles spread out, density goes **down**. That is why a gas is far less dense than the same substance as a liquid.

> **Key Fact:** Water is the famous exception. In **ice**, water molecules lock into an open, spread-out pattern, so ice is **less dense** than liquid water and **floats**. That is why lakes freeze from the top down.`
    },
    {
      id: 'gsc2-states',
      type: 'text' as const,
      content: `## The States of Matter

| State | Shape | Volume | Particles |
|:---|:---|:---|:---|
| **Solid** | fixed | fixed | packed tightly in a regular pattern; **vibrate in place** |
| **Liquid** | takes the shape of its container | fixed | close together but **slide past** one another |
| **Gas** | fills the whole container | fills the whole container | **far apart**, moving fast in all directions |

A fourth state, **plasma**, is a very hot gas whose atoms have lost electrons. Lightning, neon signs and the Sun are plasma.

**Memory hook:** going from solid → liquid → gas, the particles get **more energy**, **move faster** and **spread farther apart**.

## Phase Changes: Six Names to Know

| Change | From → to | Everyday example | Energy |
|:---|:---|:---|:---:|
| **Melting** | solid → liquid | butter softening in a pan | absorbed |
| **Freezing** | liquid → solid | water in an ice tray | released |
| **Vaporization** | liquid → gas | a pot of water boiling | absorbed |
| **Condensation** | gas → liquid | fog on a bathroom mirror | released |
| **Sublimation** | solid → gas | dry ice "smoking" | absorbed |
| **Deposition** | gas → solid | frost forming on grass | released |

Vaporization comes in two kinds:

- **Boiling** happens **throughout** the liquid, at the **boiling point**.
- **Evaporation** happens only at the **surface**, at temperatures **below** the boiling point (wet clothes drying on a line).

**Water's landmarks** (at sea level): freezes at **0 °C (32 °F)**, boils at **100 °C (212 °F)**. While a substance is melting or boiling, its temperature **stays constant** until the change is complete: the added energy goes into changing the state.`
    },
    {
      id: 'gsc2-changes',
      type: 'text' as const,
      content: `## Physical vs Chemical Changes

| | Physical change | Chemical change |
|:---|:---|:---|
| What happens | form, size or state changes | **new substance** with new properties forms |
| Examples | melting, freezing, boiling, dissolving, cutting, crushing, bending | burning, rusting, cooking an egg, digesting food, milk souring |
| Can you get the original back easily? | often yes | usually no |

**Signs that a chemical change happened (memory hook: "Gas, Glow, Color, Solid, Smell"):**

1. **Gas** bubbles form (when the liquid is not just boiling)
2. **Glow**: light or heat is given off
3. **Color** changes unexpectedly
4. A **solid** (a precipitate) forms when two liquids are mixed
5. A new **smell** appears

### Physical vs chemical **properties**

- A **physical property** can be observed without changing the substance: color, density, hardness, melting point, boiling point.
- A **chemical property** describes how a substance **reacts**: flammability, ability to rust, reaction with acids.

## Worked Examples

**1. Density.** An aluminum block has a mass of 54 g and a volume of 20 cm³.

$$\\text{density} = \\frac{54}{20} = 2.7 \\text{ g/cm}^3$$

That is more than 1 g/cm³, so the block sinks in water.

**2. Floating.** A piece of wood has a mass of 30 g and a volume of 50 cm³: $\\frac{30}{50} = 0.6$ g/cm³, less than 1, so it floats.

**3. Classifying.** Burning gasoline makes carbon dioxide and water, new substances, so it is a **chemical** change. Gasoline evaporating from a spill is still gasoline, now as a vapor, so it is a **physical** change.`
    },
    {
      id: 'gsc2-figure-mc',
      type: 'multiple-choice' as const,
      figure: gscParticleFigure,
      content: '**Read the particles.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'Which panel shows the substance as a gas?',
            options: ['Panel 2', 'Panel 1', 'Panel 3', 'None of the panels'],
            correctAnswer: 0,
            explanation: 'In a gas the particles are far apart and spread through the whole container, as in Panel 2. Panel 1 has particles close together but jumbled (a liquid), and Panel 3 has particles locked in regular rows (a solid).'
          },
          {
            question: 'How do the particles in Panel 3 move?',
            options: ['They vibrate in fixed positions', 'They slide past one another', 'They fly freely all around the box', 'They do not move at all'],
            correctAnswer: 0,
            explanation: 'Panel 3 is a solid: the particles are held in fixed positions and vibrate in place. Sliding past one another describes a liquid, flying freely describes a gas, and particles in matter are never completely still.'
          }
        ]
      }
    },
    {
      id: 'gsc2-mc',
      type: 'multiple-choice' as const,
      content: '**States and changes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A block of dry ice (solid carbon dioxide) shrinks in the open air without leaving any liquid behind. What is this change called?',
            options: ['Sublimation', 'Evaporation', 'Condensation', 'Melting'],
            correctAnswer: 0,
            explanation: 'Going straight from a solid to a gas, skipping the liquid stage, is sublimation. Evaporation starts from a liquid, condensation goes from gas to liquid, and melting would leave a puddle.'
          },
          {
            question: 'Which of these is a chemical property of a substance?',
            options: ['How easily it catches fire', 'The temperature at which it melts', 'How much mass fits in 1 cm³', 'How hard it is to scratch'],
            correctAnswer: 0,
            explanation: 'Flammability describes how a substance reacts (it burns into new substances), so it is a chemical property. Melting point, density and hardness can all be observed without changing the substance, so they are physical properties.'
          },
          {
            question: 'Why does an ice cube float in a glass of water?',
            options: ['Ice is less dense than liquid water', 'Ice has less mass than the water', 'Air bubbles trapped inside hold it up', 'Cold objects always rise in water'],
            correctAnswer: 0,
            explanation: 'Ice is less dense than liquid water because its molecules lock into an open pattern, so it floats. Floating depends on density, not total mass, and solid ice with no bubbles still floats. Cold things do not rise in general: cold water actually sinks below warm water.'
          }
        ]
      }
    },
    {
      id: 'gsc2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the phase change.** 🔽 Pick the name for each everyday event.',
      exercise: {
        dropdowns: [
          {
            label: 'Water droplets appear on the outside of a cold glass of soda:',
            options: ['Condensation', 'Evaporation', 'Deposition', 'Melting'],
            correctAnswer: 0
          },
          {
            label: 'A puddle disappears on a warm afternoon without ever boiling:',
            options: ['Evaporation', 'Condensation', 'Sublimation', 'Freezing'],
            correctAnswer: 0
          },
          {
            label: 'Ice crystals grow straight from water vapor on a windshield overnight:',
            options: ['Deposition', 'Freezing', 'Condensation', 'Sublimation'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Condensation', 'Evaporation', 'Deposition'],
        hint1: 'Ask: what state did it start in, and what state did it end in?',
        hint2: 'Gas → liquid is condensation; liquid → gas below the boiling point is evaporation.',
        hint3: 'Gas → solid with no liquid stage is deposition.',
        explanation: 'Water vapor in the air touches the cold glass and turns to liquid: condensation. The puddle turns to vapor at its surface below the boiling point: evaporation. Frost on a windshield forms straight from vapor to solid: deposition.'
      }
    },
    {
      id: 'gsc2-input',
      type: 'input-boxes' as const,
      content: `**Density on scratch paper.** ✍️

**1)** A rock has a mass of 60 g and a volume of 20 cm³. Its density, in g/cm³:

**2)** A plastic toy has a mass of 45 g and a volume of 50 cm³. Its density, in g/cm³:

**3)** Of the rock and the toy, how many would float in water? (Enter a number from 0 to 2.)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0.9', '1'],
        hint1: 'Density = mass ÷ volume.',
        hint2: '$45 \\div 50$ is less than 1: write it as a decimal.',
        hint3: 'Compare each density with water\'s 1 g/cm³.',
        explanation: '(1) $60 \\div 20 = 3$ g/cm³. (2) $45 \\div 50 = 0.9$ g/cm³. (3) Only the toy is less dense than water (0.9 < 1), so 1 object floats; the rock (3 g/cm³) sinks.'
      }
    },
    {
      id: 'gsc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Matter has **mass** and **volume**; $1 \\text{ cm}^3 = 1 \\text{ mL}$
- **Density = mass ÷ volume**; water is about **1 g/cm³**; less dense floats, more dense sinks
- Closer particles mean higher density; **ice is the exception**: less dense than liquid water, so it floats
- Solid (fixed shape and volume), liquid (fixed volume), gas (fills its container)
- Six phase changes: melting, freezing, vaporization, condensation, **sublimation** (solid → gas), **deposition** (gas → solid)
- Water freezes at **0 °C / 32 °F** and boils at **100 °C / 212 °F**
- **Chemical change = new substance** (gas, glow, color, solid, smell); melting, dissolving and cutting are physical

> **Up Next:** Part 3 — what atoms are made of and how the periodic table is organized.`
    }
  ]
};
