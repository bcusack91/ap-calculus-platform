export const chemPropertiesStatesMatterPart5Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm5-intro',
      type: 'text' as const,
      title: 'Phase Diagrams — Introduction',
      content: `
# 📊 Phase Diagrams

**Part 5 of 7 — Triple Points, Critical Points, and Reading Phase Diagrams**

A **phase diagram** is a graph that shows which phase of a substance is most stable at any given combination of **temperature** (x-axis) and **pressure** (y-axis). Phase diagrams encode an enormous amount of information about a substance\'s behavior in a single image.
      `
    },
    {
      id: 'sm5-features',
      type: 'text' as const,
      title: 'Key Features of Phase Diagrams',
      content: `
## Anatomy of a Phase Diagram

A typical phase diagram has three **regions** (areas) and three **lines** (boundaries):

### The Three Regions

- **Solid region** — upper left (high pressure, low temperature)
- **Liquid region** — middle area
- **Gas region** — lower right (low pressure, high temperature)

### The Three Boundary Lines

Each line represents conditions where **two phases coexist** in equilibrium:

1. **Solid-Liquid line** (fusion curve) — separates solid and liquid regions
   - Follows the equation related to the Clausius-Clapeyron relation
   - Slope is usually **positive** (slants right) — increased pressure favors the denser solid phase

2. **Liquid-Gas line** (vaporization curve) — separates liquid and gas regions
   - Ends at the **critical point**
   - Corresponds to the vapor pressure vs. temperature relationship

3. **Solid-Gas line** (sublimation curve) — separates solid and gas regions
   - Below the triple point

### Two Special Points

**Triple Point** — where all three boundary lines meet
- The **unique** temperature and pressure where **solid, liquid, and gas coexist** simultaneously
- For water: $T = 0.01°C$, $P = 611.7$ Pa (0.00604 atm)

**Critical Point** — the end of the liquid-gas boundary line
- Above this temperature and pressure, liquid and gas become **indistinguishable** → a **supercritical fluid**
- For water: $T_c = 374°C$, $P_c = 218$ atm
- For CO₂: $T_c = 31.1°C$, $P_c = 73$ atm
      `
    },
    {
      id: 'sm5-features-q',
      type: 'multiple-choice' as const,
      title: 'Phase Diagram Features Quiz',
      content: 'Test your understanding of phase diagram features.',
      exercise: {
        questions: [
          {
            question: 'At the triple point of a substance:',
            options: [
              'Only the solid phase exists',
              'Solid, liquid, and gas phases all coexist in equilibrium',
              'The substance becomes a supercritical fluid',
              'The substance cannot exist'
            ],
            correctAnswer: 1,
            explanation: 'The triple point is the unique temperature and pressure at which all three phases — solid, liquid, and gas — coexist in equilibrium. Every pure substance has exactly one triple point.'
          },
          {
            question: 'What happens above the critical temperature and critical pressure?',
            options: [
              'The substance is always a solid',
              'The substance is always a gas',
              'The liquid and gas phases become indistinguishable (supercritical fluid)',
              'The substance decomposes'
            ],
            correctAnswer: 2,
            explanation: 'Above the critical point, the distinction between liquid and gas disappears. The substance forms a supercritical fluid that has properties of both phases — it fills a container like a gas but can dissolve substances like a liquid.'
          },
          {
            question: 'On a phase diagram, the vaporization curve (liquid-gas line) represents conditions where:',
            options: [
              'Only liquid exists',
              'Only gas exists',
              'Liquid and gas coexist in equilibrium',
              'The substance is at its critical point'
            ],
            correctAnswer: 2,
            explanation: 'Each boundary line on a phase diagram represents conditions where two phases coexist in equilibrium. The vaporization curve is the set of (T, P) points where liquid and gas are in equilibrium.'
          }
        ]
      }
    },
    {
      id: 'sm5-reading-diagrams',
      type: 'text' as const,
      title: 'Reading Phase Diagrams',
      content: `
## How to Read a Phase Diagram

### Determining the Phase

To find the phase at a specific temperature and pressure:
1. Locate the point $(T, P)$ on the diagram.
2. Determine which **region** the point falls in → that\'s the stable phase.

### Tracing a Path

**Heating at constant pressure** (horizontal line from left to right):
- Cross the solid-liquid line → **melting**
- Cross the liquid-gas line → **boiling**

**Increasing pressure at constant temperature** (vertical line going up):
- Cross the gas-liquid line → **condensation**
- Cross the liquid-solid line → **freezing**

### Example: What happens when you heat CO₂ at 1 atm?

At 1 atm pressure, trace a horizontal line across the CO₂ phase diagram:
- You start in the **solid** region.
- You cross the **solid-gas** line (sublimation curve) — but **not** the solid-liquid or liquid-gas lines!
- CO₂ goes directly from solid → gas (**sublimation**).

Why? Because 1 atm is **below** the triple point pressure of CO₂ (5.11 atm). At pressures below the triple point, the liquid phase does not exist — the substance sublimes.

This is why dry ice sublimes at atmospheric pressure instead of melting!
      `
    },
    {
      id: 'sm5-reading-dropdown',
      type: 'dropdown-select' as const,
      title: 'Reading Phase Diagrams Practice',
      content: 'Complete each statement about interpreting phase diagrams.',
      exercise: {
        dropdowns: [
          {
            id: 'sm5-dd1',
            label: 'At pressures below the triple point',
            options: ['melts (solid → liquid)', 'sublimes (solid → gas)', 'freezes (liquid → solid)'],
            correctIndex: 1,
            explanation: 'At pressures below the triple point, the liquid phase does not exist on the phase diagram. Heating a solid at such low pressure causes sublimation — direct conversion from solid to gas.'
          },
          {
            id: 'sm5-dd2',
            label: 'The liquid phase only exists at pressures at or _______ the triple point',
            options: ['below', 'at', 'above'],
            correctIndex: 2,
            explanation: 'The liquid phase only exists at pressures at or above the triple point pressure. Above the triple point, you can observe solid → liquid → gas transitions.'
          },
          {
            id: 'sm5-dd3',
            label: 'Above _______, the liquid-gas boundary line ends',
            options: ['the triple point', 'the critical point', 'the normal boiling point'],
            correctIndex: 1,
            explanation: 'Above the critical point, the liquid-gas boundary line ends. There is no phase transition — the substance exists as a supercritical fluid with properties of both liquid and gas.'
          }
        ]
      }
    },
    {
      id: 'sm5-water-anomaly',
      type: 'text' as const,
      title: 'Water\'s Anomalous Phase Diagram',
      content: `
## Water vs. CO₂: The Anomaly

### Typical Substances (e.g., CO₂)

For most substances, the **solid-liquid line slopes to the right** (positive slope). This means:
- Increasing pressure at constant temperature **favors the solid** phase.
- The solid is **denser** than the liquid (which is the norm).

### Water — The Exception

Water\'s solid-liquid line slopes **to the left** (negative slope)! This means:
- Increasing pressure at constant temperature can **melt ice** → favors the liquid.
- **Ice is less dense than liquid water** — an anomaly among substances.

### Why Is Ice Less Dense?

In ice, water molecules form a **hexagonal crystal lattice** stabilized by hydrogen bonds. This open structure has empty space, making ice **less dense** than liquid water (where H-bond network is partially disrupted and molecules are more randomly packed).

### Consequences of Water\'s Anomaly

1. **Ice floats** — lakes freeze from the top down, insulating aquatic life below.
2. **Ice skating** — high pressure under the blade can melt ice (though friction is the main factor).
3. **Glacial movement** — high pressure at the base of glaciers can cause localized melting.

### Comparison Table

| Feature | Water (H₂O) | Carbon Dioxide (CO₂) |
|---------|-------------|---------------------|
| Solid-liquid line slope | Negative (slopes left) | Positive (slopes right) |
| Solid density vs. liquid | Solid < Liquid (ice floats) | Solid > Liquid (normal) |
| Triple point | 0.01°C, 0.006 atm | −56.6°C, 5.11 atm |
| Behavior at 1 atm | Solid → Liquid → Gas | Solid → Gas (sublimation) |
| Critical point | 374°C, 218 atm | 31.1°C, 73 atm |
      `
    },
    {
      id: 'sm5-water-anomaly-q',
      type: 'multiple-choice' as const,
      title: 'Water\'s Anomaly Quiz',
      content: 'Test your understanding of water\'s unusual phase diagram.',
      exercise: {
        questions: [
          {
            question: 'Why does the solid-liquid line in water\'s phase diagram slope to the LEFT?',
            options: [
              'Because water has strong hydrogen bonds',
              'Because ice is denser than liquid water',
              'Because ice is LESS dense than liquid water, so increasing pressure favors the denser liquid',
              'Because water has a very high critical temperature'
            ],
            correctAnswer: 2,
            explanation: 'The negative slope means increasing pressure at constant temperature converts solid to liquid — pressure favors the denser phase. Since liquid water is denser than ice, increasing pressure favors the liquid.'
          },
          {
            question: 'Why does CO₂ sublime at 1 atm instead of melting?',
            options: [
              'CO₂ has very strong intermolecular forces',
              '1 atm is below the triple point pressure of CO₂ (5.11 atm), so the liquid phase doesn\'t exist',
              'CO₂ is a network covalent solid',
              'CO₂ has a negative solid-liquid slope like water'
            ],
            correctAnswer: 1,
            explanation: 'CO₂\'s triple point is at 5.11 atm. Since normal atmospheric pressure (1 atm) is below this, the liquid phase cannot exist at 1 atm. Heating solid CO₂ at 1 atm causes it to go directly from solid to gas (sublimation).'
          }
        ]
      }
    },
    {
      id: 'sm5-supercritical',
      type: 'text' as const,
      title: 'Supercritical Fluids',
      content: `
## Supercritical Fluids

Above the **critical temperature** ($T_c$) and **critical pressure** ($P_c$), a substance enters the **supercritical fluid** region. In this state:

- The boundary between liquid and gas **disappears** — there is no distinct phase transition.
- The substance has properties of **both** a liquid (dissolving power, density) and a gas (fills container, low viscosity).

### Supercritical CO₂ — An Important Application

Because CO₂\'s critical point is relatively accessible ($T_c = 31.1°C$, $P_c = 73$ atm):
- **Supercritical CO₂** is widely used as a "green" solvent in industrial processes.
- It is used to **decaffeinate coffee** — it dissolves caffeine selectively, then the CO₂ is depressurized and the caffeine is recovered.
- It leaves no toxic residue (CO₂ simply evaporates when pressure is released).
      `
    },
    {
      id: 'sm5-exit-input',
      type: 'input-boxes' as const,
      title: 'Part 5 Exit Check',
      content: 'Complete these key statements about phase diagrams.',
      exercise: {
        inputs: [
          {
            label: 'The point where all three phases coexist is called the _____ point (one word before "point")',
            correctAnswer: 'triple',
            explanation: 'The triple point is the unique temperature and pressure where solid, liquid, and gas all coexist in equilibrium.'
          },
          {
            label: 'Above the critical point, a substance exists as a _____ fluid (one word)',
            correctAnswer: 'supercritical',
            explanation: 'Above both the critical temperature and critical pressure, the substance is a supercritical fluid — the liquid-gas distinction vanishes.'
          },
          {
            label: 'Water\'s solid-liquid line has a negative slope because ice is _____ dense than liquid water (more/less)',
            correctAnswer: 'less',
            explanation: 'Ice is less dense than liquid water due to its open hexagonal crystal structure. Since the liquid is denser, increasing pressure favors the liquid, giving a negative slope.'
          }
        ]
      }
    },
    {
      id: 'sm5-exit-quiz',
      type: 'multiple-choice' as const,
      title: 'Phase Diagrams Exit Quiz',
      content: 'Final check on phase diagram concepts.',
      exercise: {
        questions: [
          {
            question: 'A substance has a triple point at 50°C and 0.5 atm. At 1 atm and 30°C, the substance is most likely a:',
            options: [
              'Gas',
              'Liquid',
              'Solid',
              'Supercritical fluid'
            ],
            correctAnswer: 2,
            explanation: 'At 30°C (below the triple point temperature of 50°C) and 1 atm (above the triple point pressure of 0.5 atm), we are in the upper-left region of the phase diagram. This is typically the solid region (high pressure, low temperature).'
          },
          {
            question: 'If you want to observe the liquid phase of CO₂, you need a minimum pressure of approximately:',
            options: [
              '1 atm',
              '5.11 atm',
              '73 atm',
              '218 atm'
            ],
            correctAnswer: 1,
            explanation: 'The triple point of CO₂ is at 5.11 atm. The liquid phase only exists at or above the triple point pressure. Below 5.11 atm, CO₂ transitions directly between solid and gas (sublimation/deposition).'
          }
        ]
      }
    }
  ]
};
