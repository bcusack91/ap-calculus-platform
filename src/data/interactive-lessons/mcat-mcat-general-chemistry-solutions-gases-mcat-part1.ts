export const mcatSolutionsGasesPart1Data = {
  topicSlug: 'mcat-general-chemistry-solutions-gases-mcat',
  sections: [
    {
      id: 'st3-intro',
      type: 'text' as const,
      content: `# Solutions, Gases & Electrolysis

**Part 1 of 3 — Solutions: Molarity, Dilution & Solution Stoichiometry**

**Where this fits.** The *Stoichiometry: Moles & Reactions* lesson built the mole conversions and the balanced-equation mole ratio (moles of one substance → moles of another, using the equation's coefficients). This lesson carries that same bookkeeping into solutions, gases and electrolysis.

## Concentration Units

| Unit | Formula | Units |
|------|---------|-------|
| Molarity (M) | $M = n/V$ | mol/L |
| Molality (m) | $m = n/\\text{kg solvent}$ | mol/kg |
| Mole fraction ($\\chi$) | $\\chi_A = n_A / n_{\\text{total}}$ | dimensionless |
| Mass percent | $(m_{\\text{solute}}/m_{\\text{solution}}) \\times 100$ | % |

**MCAT emphasis:** Molarity is by far the most frequently tested. Molality appears in colligative property problems.

## Preparing a Solution

To make a solution of known molarity, find the moles it must hold from $n = M \\times V$ (volume in litres), then weigh out that many moles of solute.

### Example — Preparing a Solution

How many grams of $\\text{NaOH}$ ($M = 40.0$ g/mol) make 250 mL of a 0.500 M solution? Convert the volume to litres first, find the moles, then the mass:

$$n = M \\times V_{\\text{L}} = 0.500\\text{ M} \\times 0.250\\text{ L} = 0.125\\text{ mol}$$

$$m = 0.125\\text{ mol} \\times 40.0\\text{ g/mol} = \\mathbf{5.00\\text{ g}}$$

## Dilution

When a solution is diluted (solvent added), the amount of solute doesn't change:

$$M_1 V_1 = M_2 V_2$$

**Problem:** 25.0 mL of 12.0 M HCl is diluted to 300 mL. What is the final concentration?

$$M_2 = \\frac{M_1 V_1}{V_2} = \\frac{12.0 \\times 25.0}{300} = \\mathbf{1.00\\text{ M}}$$

**Lab safety note:** Always add acid to water, never water to acid (heat released causes dangerous spattering).

## Solution Stoichiometry

Combine molarity calculations with balanced-equation ratios: volume × molarity gives moles, the mole ratio carries them across the equation, and moles ÷ molarity gives back a volume.

**Normality** counts reacting equivalents per litre: $N = M \\times$ (H⁺ or OH⁻ per formula unit), so 0.200 M $\\text{H}_2\\text{SO}_4$ is 0.400 N, and at neutralization $N_aV_a = N_bV_b$.

### Worked Example — Neutralizing a Base with Sulfuric Acid

**Problem.** 50.0 mL of 0.300 M $\\text{NaOH}$ is neutralized with 0.200 M $\\text{H}_2\\text{SO}_4$:

$$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$

- **(a)** How many moles of NaOH must be neutralized?
- **(b)** How many moles of $\\text{H}_2\\text{SO}_4$ does that take?
- **(c)** What volume of the acid holds that many moles?
- **(d)** Does $N_aV_a = N_bV_b$ give the same volume?

**(a) Moles of base.** Moles NaOH $= 0.300 \\times 0.0500 = 0.0150$ mol

**(b) Mole ratio.** The equation uses 2 NaOH per $\\text{H}_2\\text{SO}_4$, so the 0.0150 mol from (a) needs:
$$0.0150/2 = 0.00750\\text{ mol}$$

**(c) Volume of acid.** With 0.00750 mol from (b):
$$V = n/M = 0.00750/0.200 = 0.0375\\text{ L} = \\mathbf{37.5\\text{ mL}}$$

**(d) Normality check.** The acid gives 2 H⁺ each, so it is 0.400 N; NaOH is 0.300 N. $V_a = (0.300)(50.0)/0.400 = 37.5$ mL, matching (c).

## Colligative Properties (Molality-Based)

Properties that depend on the **number** (not identity) of solute particles:

| Property | Formula |
|----------|---------|
| Boiling point elevation | $\\Delta T_b = K_b \\times m \\times i$ |
| Freezing point depression | $\\Delta T_f = K_f \\times m \\times i$ |
| Osmotic pressure | $\\Pi = iMRT$ |
| Vapor pressure lowering (Raoult's law) | $P_{\\text{solution}} = \\chi_{\\text{solvent}} P^{\\circ}_{\\text{solvent}}$ |

$i$ = van 't Hoff factor (number of particles per formula unit after dissociation):
- Nonelectrolytes (glucose, urea): $i = 1$
- NaCl: $i = 2$; $\\text{CaCl}_2$: $i = 3$; $\\text{Al}_2(\\text{SO}_4)_3$: $i = 5$

**Example — Osmotic pressure:**  
$1.0\\text{ M}$ NaCl solution at 37°C ($T = 310$ K):

$$\\Pi = iMRT = 2 \\times 1.0 \\times 0.0821 \\times 310 \\approx \\mathbf{50.9\\text{ atm}}$$
`
    },
    {
      id: 'st3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Solution Concentration & Dilution** 🎯`,
      exercise: {
        questions: [
          {
            question: `What volume of 6.0 M HCl must be diluted to 1.00 L to make a 0.30 M solution?`,
            options: [`950 mL`, `300 mL`, `50 mL`, `500 mL`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$M_1V_1 = M_2V_2$. $V_1 = (0.30 \\times 1000)/6.0 = \\mathbf{50\\text{ mL}}$. The value 950 mL is the water added to that stock, not the stock itself; 300 mL forgets to divide by 6.0, and 500 mL slips a decimal place.`
          },
          {
            question: `How many grams of $\\text{KNO}_3$ ($M = 101$ g/mol) are needed to make 500 mL of 0.400 M solution?`,
            options: [`10.1 g`, `20.2 g`, `40.4 g`, `50.5 g`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$n = 0.400 \\times 0.500 = 0.200\\text{ mol}$. Mass $= 0.200 \\times 101 = \\mathbf{20.2\\text{ g}}$. 10.1 g halves the moles, 40.4 g doubles them, and 50.5 g multiplies the molar mass by the 0.500 L volume alone, skipping the molarity.`
          },
          {
            question: `Which aqueous solution has the **lowest freezing point** (highest $\\Delta T_f$)?`,
            options: [
              `0.10 m glucose ($i=1$)`,
              `0.10 m NaCl ($i=2$)`,
              `0.10 m $\\text{CaCl}_2$ ($i=3$)`,
              `0.10 m urea ($i=1$)`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\Delta T_f = K_f \\times m \\times i$. With equal molality, highest $i$ gives greatest depression. $\\text{CaCl}_2$ has $i=3$, so $\\Delta T_f = 3 \\times K_f \\times 0.10$ — the largest among these options. Glucose and urea do not dissociate ($i = 1$), and NaCl gives only 2 particles.`
          },
          {
            question: `What is the osmotic pressure of a 0.10 M glucose solution at 25°C ($R = 0.0821$ L·atm/mol·K)?`,
            options: [
              `Approximately 2.4 atm`,
              `Approximately 0.24 atm`,
              `Approximately 24 atm`,
              `Approximately 4.8 atm`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\Pi = iMRT = 1 \\times 0.10 \\times 0.0821 \\times 298 \\approx \\mathbf{2.4\\text{ atm}}$. Glucose is a non-electrolyte, so $i=1$. About 4.8 atm wrongly uses $i = 2$, about 24 atm uses 1.0 M instead of 0.10 M, and about 0.24 atm slips a decimal place.`
          }
        ]
      }
    },
    {
      id: 'st3-net-ionic',
      type: 'text' as const,
      content: `## Net Ionic Equations

In solution, strong electrolytes dissociate completely. A **net ionic equation** shows only the species that actually participate in the reaction (spectator ions are omitted).

### Worked Example — Precipitating Silver Chloride

**Problem.** Aqueous $\\text{AgNO}_3$ and aqueous NaCl are mixed, and a white solid, AgCl, forms.

- **(a)** What is the molecular equation?
- **(b)** What is the complete ionic equation?
- **(c)** Which ions are spectators, and what is the net ionic equation?

**(a) Molecular equation.** $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\text{AgCl}(s) + \\text{NaNO}_3(aq)$

**(b) Complete ionic.** Split every soluble ionic compound into its ions; the solid AgCl stays whole:
$$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s) + \\text{Na}^+(aq) + \\text{NO}_3^-(aq)$$

**(c) Cancel spectators.** $\\text{Na}^+$ and $\\text{NO}_3^-$ appear unchanged on both sides, so they cancel:
$$\\boxed{\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)}$$

### Solubility Rules (MCAT-Relevant)

**Always soluble:** nitrates ($\\text{NO}_3^-$), alkali metals ($\\text{Na}^+$, $\\text{K}^+$), ammonium ($\\text{NH}_4^+$)

**Usually insoluble:** $\\text{Ag}^+$ halides (except $\\text{AgF}$), $\\text{Ba}^{2+}$/$\\text{Pb}^{2+}$/$\\text{Ca}^{2+}$ sulfates, most carbonates and phosphates (except Group IA and $\\text{NH}_4^+$), most hydroxides (except Group IA and $\\text{Ba}^{2+}$; $\\text{Ca}^{2+}$ and $\\text{Sr}^{2+}$ hydroxides are only slightly soluble)

### Predicting a Precipitate ($Q$ vs. $K_{sp}$)

The solubility rules are tendencies. When concentrations and $K_{sp}$ are given, compute $Q$ (each ion's concentration raised to its coefficient, multiplied) and compare: a precipitate forms only if $Q > K_{sp}$, even for an "insoluble" salt.
`
    },
    {
      id: 'st3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Net Ionic Equations & Precipitation** 🎯`,
      exercise: {
        questions: [
          {
            question: `What is the net ionic equation for mixing $\\text{Na}_2\\text{SO}_4(aq)$ and $\\text{BaCl}_2(aq)$?`,
            options: [
              `$\\text{Na}^+ + \\text{Cl}^- \\to \\text{NaCl}(s)$`,
              `$\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\to \\text{BaSO}_4(s)$`,
              `$\\text{Ba}^{2+} + 2\\text{Cl}^- \\to \\text{BaCl}_2(s)$`,
              `No reaction occurs`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\text{BaSO}_4$ is insoluble (precipitates). The spectator ions are $\\text{Na}^+$ and $\\text{Cl}^-$. Net ionic equation: $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\to \\text{BaSO}_4(s)$. NaCl and $\\text{BaCl}_2$ are both soluble, so neither precipitates; the barium sulfate solid means a reaction does occur.`
          },
          {
            question: `A student mixes $\\text{KNO}_3(aq)$ and $\\text{NaCl}(aq)$. What is the net ionic equation?`,
            options: [
              `$\\text{K}^+ + \\text{Cl}^- \\to \\text{KCl}(s)$`,
              `$\\text{Na}^+ + \\text{NO}_3^- \\to \\text{NaNO}_3(s)$`,
              `No reaction; all four ions stay dissolved as spectators`,
              `$\\text{Na}^+ + \\text{Cl}^- \\to \\text{NaCl}(s)$`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Every possible product ($\\text{KCl}$, $\\text{NaNO}_3$, and NaCl itself) is soluble: alkali-metal salts and nitrates always dissolve. All four ions stay in solution as spectators, so nothing is left for a net ionic equation: **no reaction occurs**.`
          },
          {
            question: `Equal volumes of 1.0 M $\\text{Pb(NO}_3)_2$ and 1.0 M $\\text{KI}$ are mixed, so the concentrations after mixing are 0.50 M each. ($K_{sp}(\\text{PbI}_2) = 1.4 \\times 10^{-8}$). Does $\\text{PbI}_2$ precipitate?`,
            options: [
              `Yes; even after dilution, $Q$ far exceeds $K_{sp}$`,
              `No; the mixing step dilutes both ions too far`,
              `No; $\\text{PbI}_2$ is a soluble salt`,
              `Yes; all lead compounds are insoluble`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$Q = [\\text{Pb}^{2+}][\\text{I}^-]^2 = (0.50)(0.50)^2 = 0.125$. Since $Q = 0.125 \\gg K_{sp} = 1.4 \\times 10^{-8}$, the solution is supersaturated and $\\text{PbI}_2$ **precipitates**. Halving the concentrations still leaves $Q$ millions of times above $K_{sp}$. A $K_{sp}$ this small marks $\\text{PbI}_2$ as insoluble, yet lead nitrate dissolves readily, so not every lead compound is insoluble.`
          }
        ]
      }
    },
    {
      id: 'st3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Molarity and dilution.** $M = n/V$ with $V$ in litres; dilution keeps the moles fixed, so $M_1V_1 = M_2V_2$.
- **Solution stoichiometry.** Get moles from $n = MV$, carry them across the balanced equation's ratio, then convert back.
- **Colligative properties.** $\\Delta T_b$, $\\Delta T_f$ and $\\Pi$ scale with particle count, $i$ times concentration, not identity.
- **Net ionic and precipitation.** Cancel the spectator ions; a precipitate forms when $Q > K_{sp}$.

**Common traps**

- **Millilitres in $n = MV$.** Convert mL to L first: 250 mL of 0.500 M holds 0.125 mol, not 125 mol.
- **Forgetting $i$.** NaCl gives 2 particles and $\\text{CaCl}_2$ gives 3, so equal molalities do not give equal $\\Delta T_f$.
- **Ignoring the 2 : 1 ratio.** One $\\text{H}_2\\text{SO}_4$ neutralizes two NaOH, so the acid needs half the moles of base.
- **Splitting the solid.** Only dissolved strong electrolytes are written as ions; a precipitate stays as one formula.
`
    }
  ]
};
