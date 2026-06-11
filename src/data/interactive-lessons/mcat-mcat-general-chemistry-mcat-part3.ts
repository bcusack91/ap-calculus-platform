export const mcatGenChemPart3Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 3 of 7 — Stoichiometry, Solutions & Concentration**

Stoichiometry is the arithmetic of chemistry. On the MCAT you will encounter stoichiometry problems embedded in biochemistry passages (enzyme reactions, metabolic pathways) and lab-technique passages. Connecting moles to biological quantities is a high-yield skill.
`
    },
    {
      id: 'gc3-stoichiometry',
      type: 'text' as const,
      content: `## Stoichiometry: The Mole Map

**The Mole** is the chemist's counting unit: 1 mol = $6.022 \\times 10^{23}$ particles (Avogadro's number).

$$\\text{mol} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}} = \\frac{\\text{volume of gas (L)}}{22.4 \\text{ L/mol at STP}}$$

### Four-Step Stoichiometry Workflow

1. **Balance** the chemical equation.
2. **Convert** all given quantities to moles.
3. **Apply mole ratio** from balanced equation.
4. **Convert** moles to requested units (grams, liters, molarity, particles).

### Limiting Reagent

The limiting reagent is the reactant that runs out first and determines the maximum yield.

**Short method:** Divide each reactant's moles by its stoichiometric coefficient. The **smallest ratio** identifies the limiting reagent.

**Example:**  
$$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$$

If you have 3 mol $\\text{H}_2$ and 2 mol $\\text{O}_2$:
- $\\text{H}_2$: $3 / 2 = 1.5$
- $\\text{O}_2$: $2 / 1 = 2.0$

Smallest = 1.5 → **$\\text{H}_2$ is limiting**. Moles $\\text{H}_2\\text{O}$ = $1.5 \\times 2 = 3$ mol.

### Percent Yield

$$\\%\\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$

### Percent Composition

$$\\%\\text{ element} = \\frac{\\text{molar mass of element in formula}}{\\text{molar mass of compound}} \\times 100\\%$$
`
    },
    {
      id: 'gc3-solutions',
      type: 'text' as const,
      content: `## Solutions & Concentration

### Key Concentration Units

| Measure | Formula | Temperature Dependent? |
|---------|---------|----------------------|
| Molarity (M) | $\\dfrac{\\text{mol solute}}{\\text{L solution}}$ | Yes (volume changes with T) |
| Molality (m) | $\\dfrac{\\text{mol solute}}{\\text{kg solvent}}$ | No |
| Mole fraction (χ) | $\\dfrac{n_A}{n_A + n_B + \\ldots}$ | No |

### Dilution

When you dilute a solution, moles of solute are conserved:

$$M_1 V_1 = M_2 V_2$$

**Example:** Preparing 250 mL of 0.50 M $\\text{HCl}$ from 12 M $\\text{HCl}$:
$$V_1 = \\frac{M_2 V_2}{M_1} = \\frac{0.50 \\times 0.250}{12} = 0.0104 \\text{ L} = \\mathbf{10.4 \\text{ mL}}$$

### Solubility Rules (MCAT High-Yield)

**Always soluble:** all Na⁺, K⁺, NH₄⁺, NO₃⁻, C₂H₃O₂⁻ salts

**Usually soluble:** halides (Cl⁻, Br⁻, I⁻) **except** AgX, PbX₂, Hg₂X₂

**Usually insoluble:** carbonates (CO₃²⁻), phosphates (PO₄³⁻), hydroxides (OH⁻) **except** Group IA + Ba²⁺

**Usually insoluble:** sulfates (SO₄²⁻) **except** MgSO₄, CaSO₄ (slightly), BaSO₄ (insoluble)
`
    },
    {
      id: 'gc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Stoichiometry & Solutions** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the reaction $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$, if 4.0 g of $\\text{H}_2$ and 32.0 g of $\\text{O}_2$ are mixed, which is the limiting reagent? ($\\text{H}_2$ = 2 g/mol, $\\text{O}_2$ = 32 g/mol)`,
            options: [
              `$\\text{H}_2$ (2 mol available, needs 2 mol per mol O₂)`,
              `$\\text{O}_2$ (exactly 1 mol available, stoichiometrically balanced)`,
              `Neither — exact stoichiometric amounts are present`,
              `Both are limiting reagents simultaneously`
            ],
            correctAnswer: 2,
            explanation: `mol H₂ = 4.0/2 = 2.0 mol; mol O₂ = 32.0/32 = 1.0 mol. Ratio check: H₂/2 = 1.0; O₂/1 = 1.0. Equal ratios → exact stoichiometric amounts → neither is limiting, and 2.0 mol H₂O is produced.`
          },
          {
            question: `A researcher dissolves 0.10 mol NaCl in water to make 500 mL of solution. What is the molarity of Na⁺ ions?`,
            options: [
              `0.20 M`,
              `0.10 M`,
              `0.40 M`,
              `0.050 M`
            ],
            correctAnswer: 0,
            explanation: `M = 0.10 mol / 0.500 L = 0.20 M for NaCl. Since NaCl is a strong electrolyte that fully dissociates, [Na⁺] = [Cl⁻] = 0.20 M.`
          },
          {
            question: `How many milliliters of 12 M HCl are needed to prepare 250 mL of 0.50 M HCl?`,
            options: [
              `10.4 mL`,
              `24.0 mL`,
              `60.0 mL`,
              `120 mL`
            ],
            correctAnswer: 0,
            explanation: `$M_1V_1 = M_2V_2 \\Rightarrow V_1 = (0.50 \\times 250)/12 = 10.4$ mL. Add 10.4 mL of concentrated HCl to enough water to make 250 mL total.`
          },
          {
            question: `When aqueous $\\text{AgNO}_3$ is mixed with aqueous $\\text{NaCl}$, what precipitates?`,
            options: [
              `$\\text{NaNO}_3$`,
              `$\\text{AgCl}$`,
              `$\\text{NaCl}$`,
              `No precipitate forms`
            ],
            correctAnswer: 1,
            explanation: `$\\text{Ag}^+$ combines with $\\text{Cl}^-$ to form insoluble $\\text{AgCl}(s)$. $\\text{Na}^+$ and $\\text{NO}_3^-$ remain in solution as spectator ions.`
          },
          {
            question: `A 5.0 g sample of $\\text{CaCO}_3$ (M = 100 g/mol) reacts with excess HCl: $\\text{CaCO}_3 + 2\\text{H}^+ \\to \\text{Ca}^{2+} + \\text{CO}_2 + \\text{H}_2\\text{O}$. How many moles of $\\text{CO}_2$ are produced?`,
            options: [
              `0.025 mol`,
              `0.050 mol`,
              `0.10 mol`,
              `0.20 mol`
            ],
            correctAnswer: 1,
            explanation: `Moles CaCO₃ = 5.0/100 = 0.050 mol. The 1:1 mole ratio of CaCO₃ to CO₂ gives 0.050 mol CO₂.`
          }
        ]
      }
    },
    {
      id: 'gc3-colligative',
      type: 'text' as const,
      content: `## Colligative Properties

Colligative properties depend only on the **number of dissolved particles**, not their identity.

$$i = \\text{van't Hoff factor (particles per formula unit in solution)}$$

| Solute | $i$ | Reason |
|--------|-----|--------|
| Glucose (nonelectrolyte) | 1 | No dissociation |
| NaCl | 2 | $\\text{Na}^+ + \\text{Cl}^-$ |
| $\\text{CaCl}_2$ | 3 | $\\text{Ca}^{2+} + 2\\text{Cl}^-$ |
| $\\text{AlCl}_3$ | 4 | $\\text{Al}^{3+} + 3\\text{Cl}^-$ |

### Freezing Point Depression & Boiling Point Elevation

$$\\Delta T_f = K_f \\cdot m \\cdot i \\qquad (\\text{solution freezes } \\Delta T_f \\text{ lower than pure solvent})$$
$$\\Delta T_b = K_b \\cdot m \\cdot i \\qquad (\\text{solution boils } \\Delta T_b \\text{ higher than pure solvent})$$

For water: $K_f = 1.86\\;°\\text{C}\\cdot\\text{kg/mol}$, $K_b = 0.512\\;°\\text{C}\\cdot\\text{kg/mol}$

### Osmotic Pressure

$$\\Pi = iMRT$$

where $M$ = molarity, $R = 0.0821\\;\\text{L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$, $T$ = temperature in K

**MCAT Connection:** Osmosis is critical in biology (cells shrink in hypertonic solution, swell in hypotonic). Dissolving more particles = higher osmolarity = more osmotic pressure.

### Vapor Pressure Lowering (Raoult's Law)

$$P_{\\text{solution}} = \\chi_{\\text{solvent}} \\cdot P°_{\\text{solvent}}$$

Adding a nonvolatile solute always **lowers** vapor pressure.
`
    },
    {
      id: 'gc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Colligative Properties** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which 0.10 m aqueous solution has the LOWEST freezing point?`,
            options: [
              `$\\text{CaCl}_2$ ($i = 3$)`,
              `$\\text{NaCl}$ ($i = 2$)`,
              `Glucose ($i = 1$)`,
              `$\\text{KBr}$ ($i = 2$)`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta T_f = K_f \\cdot m \\cdot i$. At the same molality, the compound with the highest $i$ causes the greatest freezing point depression. $\\text{CaCl}_2$ ($i=3$) > NaCl/KBr ($i=2$) > glucose ($i=1$).`
          },
          {
            question: `A 0.50 m solution of NaCl in water ($K_f = 1.86\\;°\\text{C}\\cdot\\text{kg/mol}$) has a freezing point depression of:`,
            options: [
              `0.93°C`,
              `1.86°C`,
              `3.72°C`,
              `0.186°C`
            ],
            correctAnswer: 1,
            explanation: `$\\Delta T_f = 1.86 \\times 0.50 \\times 2 = 1.86°C$. NaCl → $i=2$, m=0.50. The solution freezes at $-1.86°C$.`
          },
          {
            question: `Red blood cells placed in pure water will:`,
            options: [
              `Shrink (crenate) due to high external osmolarity`,
              `Swell and possibly lyse due to water moving in by osmosis`,
              `Remain unchanged`,
              `Lose solutes to equilibrate with water`
            ],
            correctAnswer: 1,
            explanation: `Pure water has lower solute concentration (lower osmolarity) than the cell interior. Water moves by osmosis from low to high solute concentration (into the cell), causing swelling and potential lysis.`
          },
          {
            question: `A solution is prepared by dissolving a nonvolatile solute in water. Compared to pure water, the solution has:`,
            options: [
              `Higher vapor pressure and lower boiling point`,
              `Lower vapor pressure and higher boiling point`,
              `Higher vapor pressure and higher boiling point`,
              `No change in vapor pressure`
            ],
            correctAnswer: 1,
            explanation: `According to Raoult's Law, adding a nonvolatile solute reduces the mole fraction of solvent, lowering vapor pressure. Lower vapor pressure means a higher temperature is needed to reach atmospheric pressure — so the boiling point rises.`
          }
        ]
      }
    },
    {
      id: 'gc3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Stoichiometry workflow:** balance → moles → mole ratio → convert to final units.
- **Limiting reagent:** divide reactant moles by coefficient; smallest ratio wins.
- **Molarity vs molality:** M changes with temperature (volume changes); m does not.
- **Dilution:** $M_1V_1 = M_2V_2$ — moles of solute are conserved.
- **Colligative properties** depend on particle count ($i$): more particles = greater effect.
- **Osmosis:** water moves toward higher solute concentration (lower water potential).
- **Key solubility rules:** all NO₃⁻ soluble; AgCl insoluble; BaSO₄ insoluble.
`
    }
  ]
};
