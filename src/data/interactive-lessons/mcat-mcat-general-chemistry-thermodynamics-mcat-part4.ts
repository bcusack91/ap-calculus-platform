export const mcatThermoPart4Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo4-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 4 of 5 — Phase Changes, Heating Curves & Colligative Properties**

## Phases and Phase Changes

**The six phase transitions:**

| Transition | Direction | $\\Delta H$ | $\\Delta S$ |
|------------|----------|-----------|-----------|
| Fusion (melting) | solid → liquid | + (endothermic) | + |
| Freezing | liquid → solid | − (exothermic) | − |
| Vaporization | liquid → gas | + (endothermic) | + |
| Condensation | gas → liquid | − (exothermic) | − |
| Sublimation | solid → gas | + (endothermic) | + |
| Deposition | gas → solid | − (exothermic) | − |

At the phase transition temperature (e.g., boiling point), $\\Delta G = 0$:

$$\\Delta G = \\Delta H - T\\Delta S = 0 \\Rightarrow T_{\\text{transition}} = \\frac{\\Delta H}{\\Delta S}$$

## Heating Curves

A **heating curve** shows temperature vs. heat added for a substance. Its two kinds of segment:

- **Slanted region:** temperature rises; $q = mc\\Delta T$, and the specific heat sets the slope — steeper slope = lower specific heat, gentle slope = higher specific heat
- **Flat region (plateau):** phase change at constant $T$; $q = n\\Delta H_{\\text{fus}}$ or $q = n\\Delta H_{\\text{vap}}$

**Water's numbers to know (MCAT):** liquid water $c = 4.18$ J/g·°C (the highest of common substances), ice $2.09$ and steam $2.01$ J/g·°C; $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol and $\\Delta H_{\\text{vap}} = 40.7$ kJ/mol.

### Worked Example — Ice at −10°C to Steam at 110°C

**Problem 1.** $18.0$ g ($1.00$ mol) of ice at $-10$°C is heated to liquid water at $100$°C. Use $c_{\\text{ice}} = 2.09$ and $c_{\\text{water}} = 4.18$ J/g·°C, and $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol.

- **(a)** How much heat warms the ice to $0$°C?
- **(b)** How much heat melts it?
- **(c)** How much heat warms the liquid to $100$°C?

**(a) First slope.** $q = mc\\Delta T = 18.0 \\times 2.09 \\times 10 = 376.2$ J

**(b) First plateau.** $q = n\\Delta H_{\\text{fus}} = 1.00 \\times 6010 = 6010$ J, with the temperature held at $0$°C the whole time.

**(c) Second slope.** $q = 18.0 \\times 4.18 \\times 100 = 7524$ J. Liquid water's large specific heat makes this the gentlest slope on the curve.

**Problem 2.** The same $1.00$ mol ($18.0$ g) of water at $100$°C is boiled, and the steam is heated to $110$°C. Use $\\Delta H_{\\text{vap}} = 40.7$ kJ/mol and $c_{\\text{steam}} = 2.01$ J/g·°C.

- **(a)** How much heat boils the water?
- **(b)** How much heat warms the steam to $110$°C?
- **(c)** What is the total heat from ice at $-10$°C, and which step dominates?

**(a) Second plateau.** $q = n\\Delta H_{\\text{vap}} = 1.00 \\times 40{,}700 = 40{,}700$ J

**(b) Last slope.** $q = 18.0 \\times 2.01 \\times 10 = 361.8$ J

**(c) The total.** With $376.2$, $6010$ and $7524$ J from Problem 1: $376.2 + 6010 + 7524 + 40{,}700 + 361.8 \\approx \\mathbf{54{,}972\\text{ J} \\approx 55.0\\text{ kJ}}$. Boiling alone is about $74\\%$ of it, because $\\Delta H_{\\text{vap}} \\gg \\Delta H_{\\text{fus}}$.

## Phase Diagrams

A **phase diagram** plots pressure vs. temperature; shows stable phase regions divided by boundary curves.

| Point/Line | Meaning |
|------------|---------|
| Triple point | All three phases coexist |
| Critical point | Gas and liquid become indistinguishable |
| Solid-liquid line | Melting points at various pressures |
| Liquid-gas line | Boiling points at various pressures; it slopes upward, so lower pressure (e.g. at altitude) means a lower boiling point |

**Water is unusual:** Solid-liquid line has negative slope (ice is less dense than water; increasing pressure melts ice).

## Colligative Properties (Review)

Colligative properties depend on the **number of solute particles**, not their identity.

| Property | Formula | Key notes |
|---------|---------|----------|
| Boiling point elevation | $\\Delta T_b = K_b m i$ | Higher BP than solvent |
| Freezing point depression | $\\Delta T_f = K_f m i$ | Lower FP than solvent |
| Osmotic pressure | $\\Pi = iMRT$ | $R = 0.0821$ L·atm/mol·K |
| Vapor pressure lowering | $\\Delta P = \\chi_{\\text{solute}} P°_\\text{solvent}$ | Raoult's law |

$i$ = van 't Hoff factor (particles per formula unit); $m$ = molality (mol solute / kg solvent); $M$ = molarity (mol solute / L solution); $\\chi_{\\text{solute}}$ = mole fraction of solute.
`
    },
    {
      id: 'thermo4-quiz',
      type: 'multiple-choice' as const,
      content: `**Phase Changes & Heating Curves** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which of the following phase transitions releases heat to the surroundings?`,
            options: [`Melting`, `Sublimation`, `Vaporization`, `Condensation`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `**Condensation** (gas → liquid) releases heat — it is exothermic ($\\Delta H < 0$). Melting, sublimation, and vaporization are all endothermic (require heat input to overcome intermolecular forces).`
          },
          {
            question: `On a heating curve for water, what is happening during the flat plateau at 100°C?`,
            options: [
              `Temperature is rising as molecular kinetic energy increases`,
              `Hydrogen bonds are forming as steam condenses, releasing heat`,
              `Heat breaks intermolecular forces as the water boils`,
              `The specific heat of water has dropped to zero at 100°C`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The plateau is vaporization. During a phase transition, all energy input goes into breaking intermolecular forces (potential energy), not into increasing kinetic energy, so the temperature stays at 100°C until all the liquid has vaporized. Heat is being absorbed, not released, and specific heat describes the sloped regions, not the plateau.`
          },
          {
            question: `How much heat is required to heat 2.00 mol of water vapor from 100°C to 120°C? ($c_{\\text{steam}} = 2.01$ J/g·°C; $M_{\\text{H}_2\\text{O}} = 18.0$ g/mol)`,
            options: [`361.8 J`, `723.6 J`, `1447 J`, `3618 J`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$m = 2.00 \\times 18.0 = 36.0$ g. $q = mc\\Delta T = 36.0 \\times 2.01 \\times 20 = \\mathbf{1447\\text{ J}}$. (Note: $\\Delta T = 120 - 100 = 20°$C.) $723.6$ J uses only 1 mol of water, and $361.8$ J also drops the factor of 2 in $\\Delta T$. $3618$ J uses 1 mol of water and a $100$°C temperature change instead of $20$°C.`
          },
          {
            question: `At water's triple point, which phases coexist?`,
            options: [
              `Solid and liquid only, as on the melting curve`,
              `Liquid and gas only, as on the boiling curve`,
              `Solid and gas only, as on the sublimation curve`,
              `Solid, liquid and gas, all at once`
            ],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The **triple point** is the unique temperature and pressure where all three phases — solid, liquid, and gas — coexist in equilibrium. It is where the three boundary curves meet; anywhere else on a single curve, only two phases coexist. For water: $T = 0.01°$C, $P \\approx 612$ Pa.`
          },
          {
            question: `Why does water have an unusually high specific heat capacity?`,
            options: [
              `Its molar mass is unusually high for its size`,
              `Its hydrogen bonds absorb energy before the molecules speed up`,
              `Its molecules move slowly, so they gain kinetic energy slowly`,
              `Its strong covalent O–H bonds break as it warms`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Water's anomalously high specific heat ($4.18$ J/g·°C) is due to its extensive **hydrogen-bonding network**. Before kinetic energy (temperature) can increase, energy must first disrupt hydrogen bonds between molecules. Water's molar mass ($18$ g/mol) is low, its covalent O–H bonds stay intact when liquid water warms (only the hydrogen bonds between molecules break), and molecular speed reflects temperature rather than heat capacity.`
          }
        ]
      }
    },
    {
      id: 'thermo4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- **Direction of a phase change.** Toward a less ordered phase (melting, vaporization, sublimation) is endothermic; the reverse is exothermic.
- **Transition temperature.** At a phase change $\\Delta G = 0$, so $T_{\\text{transition}} = \\Delta H/\\Delta S$.
- **Heating-curve segments.** Slopes use $q = mc\\Delta T$; plateaus use $q = n\\Delta H$ at constant temperature.
- **Phase-diagram landmarks.** Three phases coexist at the triple point; past the critical point, liquid and gas merge.

**Common traps**

- **Temperature on a plateau.** Heat added while melting or boiling breaks intermolecular forces; $T$ holds until the change ends.
- **Reading the slope backwards.** On a heating curve a steeper slope means a SMALLER specific heat, not a larger one.
- **Grams vs. moles.** Use grams with $c$ (J/g·°C) but moles with $\\Delta H_{\\text{fus}}$ and $\\Delta H_{\\text{vap}}$ (kJ/mol).
- **Water's backward melting line.** Water's solid–liquid line slopes negative because ice is less dense, so pressure melts ice.
`
    }
  ]
};
