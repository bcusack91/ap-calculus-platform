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

A **heating curve** shows temperature vs. heat added for a substance.

**Key features:**
1. **Slanted region:** Temperature rises; $q = mc\\Delta T$; specific heat governs slope
2. **Flat region (plateau):** Phase change at constant T; $q = n\\Delta H_{\\text{fus}}$ or $q = n\\Delta H_{\\text{vap}}$
3. Steeper slope = lower specific heat; gentle slope = higher specific heat

**Specific heats to know (MCAT):**
- Water (liquid): $4.18$ J/g·°C (highest of common substances)
- Steam: $2.01$ J/g·°C
- Ice: $2.09$ J/g·°C
- $\\Delta H_{\\text{fus}}$(water) = $6.01$ kJ/mol
- $\\Delta H_{\\text{vap}}$(water) = $40.7$ kJ/mol

**Example calculation:** Heat to convert 18.0 g (1.00 mol) of ice at −10°C to steam at 110°C:

1. Heat ice: $18.0 \\times 2.09 \\times 10 = 376.2$ J
2. Melt ice: $1.00 \\times 6010 = 6010$ J
3. Heat water: $18.0 \\times 4.18 \\times 100 = 7524$ J
4. Boil water: $1.00 \\times 40{,}700 = 40{,}700$ J
5. Heat steam: $18.0 \\times 2.01 \\times 10 = 361.8$ J

Total = $376.2 + 6010 + 7524 + 40{,}700 + 361.8 \\approx \\mathbf{54{,}972\\text{ J} \\approx 55.0\\text{ kJ}}$

## Phase Diagrams

A **phase diagram** plots pressure vs. temperature; shows stable phase regions divided by boundary curves.

| Point/Line | Meaning |
|------------|---------|
| Triple point | All three phases coexist |
| Critical point | Gas and liquid become indistinguishable |
| Solid-liquid line | Melting points at various pressures |
| Liquid-gas line | Boiling points at various pressures |

**Water is unusual:** Solid-liquid line has negative slope (ice is less dense than water; increasing pressure melts ice).

## Colligative Properties (Review)

Colligative properties depend on the **number of solute particles**, not their identity.

| Property | Formula | Key notes |
|---------|---------|----------|
| Boiling point elevation | $\\Delta T_b = K_b m i$ | Higher BP than solvent |
| Freezing point depression | $\\Delta T_f = K_f m i$ | Lower FP than solvent |
| Osmotic pressure | $\\Pi = iMRT$ | $R = 0.0821$ L·atm/mol·K |
| Vapor pressure lowering | $\\Delta P = \\chi_{\\text{solute}} P°_\\text{solvent}$ | Raoult's law |

$i$ = van 't Hoff factor (particles per formula unit); $m$ = molality (mol solute / kg solvent).
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
            explanation: `**Condensation** (gas → liquid) releases heat — it is exothermic ($\\Delta H < 0$). Melting, sublimation, and vaporization are all endothermic (require heat input to overcome intermolecular forces).`
          },
          {
            question: `On a heating curve for water, what is happening during the flat plateau at 100°C?`,
            options: [
              `Temperature is rising as kinetic energy increases`,
              `Hydrogen bonds are forming, releasing heat`,
              `Vaporization is occurring; heat added breaks intermolecular forces without raising T`,
              `The specific heat of water is zero at 100°C`
            ],
            correctAnswer: 2,
            explanation: `During a phase transition, all energy input goes into breaking intermolecular forces (potential energy), not into increasing kinetic energy. Temperature remains constant until all liquid has vaporized.`
          },
          {
            question: `How much heat is required to heat 2.00 mol of water vapor from 100°C to 120°C? ($c_{\\text{steam}} = 2.01$ J/g·°C; $M_{\\text{H}_2\\text{O}} = 18.0$ g/mol)`,
            options: [`361.8 J`, `723.6 J`, `1447 J`, `3618 J`],
            correctAnswer: 1,
            explanation: `$m = 2.00 \\times 18.0 = 36.0$ g. $q = mc\\Delta T = 36.0 \\times 2.01 \\times 20 = \\mathbf{1447\\text{ J}}$. (Note: $\\Delta T = 120 - 100 = 20°$C)`
          },
          {
            question: `At water's triple point, which phases coexist?`,
            options: [
              `Solid and liquid only`,
              `Liquid and gas only`,
              `Solid and gas only`,
              `Solid, liquid, and gas simultaneously`
            ],
            correctAnswer: 3,
            explanation: `The **triple point** is the unique temperature and pressure where all three phases — solid, liquid, and gas — coexist in equilibrium. For water: $T = 0.01°$C, $P = 612$ Pa.`
          },
          {
            question: `Why does water have an unusually high specific heat capacity?`,
            options: [
              `Water has high molecular weight`,
              `Extensive hydrogen bonding requires significant energy input to increase temperature`,
              `Water molecules move slowly in liquid phase`,
              `Water has a high density`
            ],
            correctAnswer: 1,
            explanation: `Water's anomalously high specific heat ($4.18$ J/g·°C) is due to its extensive **hydrogen-bonding network**. Before kinetic energy (temperature) can increase, energy must first disrupt hydrogen bonds between molecules.`
          }
        ]
      }
    },
    {
      id: 'thermo4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- Endothermic phase changes: melting, vaporization, sublimation (require heat input)
- Exothermic phase changes: freezing, condensation, deposition (release heat)
- Phase transition temperature: $T = \\Delta H / \\Delta S$ (where $\\Delta G = 0$)
- Heating curve plateaus = phase transitions at constant T; sloped regions = $q = mc\\Delta T$
- Water: $c_{\\text{liq}} = 4.18$; $c_{\\text{steam}} = 2.01$; $c_{\\text{ice}} = 2.09$ J/g·°C; $\\Delta H_{\\text{vap}} \\gg \\Delta H_{\\text{fus}}$
- Phase diagram: triple point (all 3 coexist); critical point (gas/liquid no distinction)
- Water's negative solid-liquid slope = unique (ice less dense than liquid water)
`
    }
  ]
};
