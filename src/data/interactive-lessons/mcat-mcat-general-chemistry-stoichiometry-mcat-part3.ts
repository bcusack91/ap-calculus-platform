export const mcatStoichiometryPart3Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st3-intro',
      type: 'text' as const,
      content: `# Stoichiometry & Chemical Reactions

**Part 3 of 5 — Solutions: Molarity, Dilution & Solution Stoichiometry**

## Concentration Units

| Unit | Formula | Units |
|------|---------|-------|
| Molarity (M) | $M = n/V$ | mol/L |
| Molality (m) | $m = n/\\text{kg solvent}$ | mol/kg |
| Mole fraction ($\\chi$) | $\\chi_A = n_A / n_{\\text{total}}$ | dimensionless |
| Mass percent | $(m_{\\text{solute}}/m_{\\text{solution}}) \\times 100$ | % |

**MCAT emphasis:** Molarity is by far the most frequently tested. Molality appears in colligative property problems.

## Preparing a Solution

**Problem:** How many grams of $\\text{NaOH}$ ($M = 40.0$ g/mol) are needed to make 250 mL of a 0.500 M solution?

$$n = M \\times V_{\\text{L}} = 0.500\\text{ M} \\times 0.250\\text{ L} = 0.125\\text{ mol}$$

$$m = 0.125\\text{ mol} \\times 40.0\\text{ g/mol} = \\mathbf{5.00\\text{ g}}$$

## Dilution

When a solution is diluted (solvent added), the amount of solute doesn't change:

$$M_1 V_1 = M_2 V_2$$

**Problem:** 25.0 mL of 12.0 M HCl is diluted to 300 mL. What is the final concentration?

$$M_2 = \\frac{M_1 V_1}{V_2} = \\frac{12.0 \\times 25.0}{300} = \\mathbf{1.00\\text{ M}}$$

**Lab safety note:** Always add acid to water, never water to acid (heat released causes dangerous spattering).

## Solution Stoichiometry

Combine molarity calculations with balanced-equation ratios.

**Example:** How many mL of 0.200 M $\\text{H}_2\\text{SO}_4$ are needed to neutralize 50.0 mL of 0.300 M $\\text{NaOH}$?

$$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$

Moles NaOH $= 0.300 \\times 0.0500 = 0.0150$ mol

Moles $\\text{H}_2\\text{SO}_4$ needed (2:1 NaOH:acid ratio):
$$0.0150/2 = 0.00750\\text{ mol}$$

Volume:
$$V = n/M = 0.00750/0.200 = 0.0375\\text{ L} = \\mathbf{37.5\\text{ mL}}$$

## Colligative Properties (Molality-Based)

Properties that depend on the **number** (not identity) of solute particles:

| Property | Formula |
|----------|---------|
| Boiling point elevation | $\\Delta T_b = K_b \\times m \\times i$ |
| Freezing point depression | $\\Delta T_f = K_f \\times m \\times i$ |
| Osmotic pressure | $\\Pi = iMRT$ |

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
            options: [`20 mL`, `30 mL`, `50 mL`, `100 mL`],
            correctAnswer: 2,
            explanation: `$M_1V_1 = M_2V_2$. $V_1 = (0.30 \\times 1000)/6.0 = \\mathbf{50\\text{ mL}}$.`
          },
          {
            question: `How many grams of $\\text{KNO}_3$ ($M = 101$ g/mol) are needed to make 500 mL of 0.400 M solution?`,
            options: [`10.1 g`, `20.2 g`, `40.4 g`, `50.5 g`],
            correctAnswer: 1,
            explanation: `$n = 0.400 \\times 0.500 = 0.200\\text{ mol}$. Mass $= 0.200 \\times 101 = \\mathbf{20.2\\text{ g}}$.`
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
            explanation: `$\\Delta T_f = K_f \\times m \\times i$. With equal molality, highest $i$ gives greatest depression. $\\text{CaCl}_2$ has $i=3$, so $\\Delta T_f = 3 \\times K_f \\times 0.10$ — the largest among these options.`
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
            explanation: `$\\Pi = iMRT = 1 \\times 0.10 \\times 0.0821 \\times 298 \\approx \\mathbf{2.4\\text{ atm}}$. Glucose is a non-electrolyte, so $i=1$.`
          }
        ]
      }
    },
    {
      id: 'st3-net-ionic',
      type: 'text' as const,
      content: `## Net Ionic Equations

In solution, strong electrolytes dissociate completely. A **net ionic equation** shows only the species that actually participate in the reaction (spectator ions are omitted).

**Example — Precipitation of $\\text{AgCl}$:**

Molecular: $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\text{AgCl}(s) + \\text{NaNO}_3(aq)$

Complete ionic (split all soluble ionic compounds):
$$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s) + \\text{Na}^+(aq) + \\text{NO}_3^-(aq)$$

Cancel spectator ions ($\\text{Na}^+$ and $\\text{NO}_3^-$):

$$\\boxed{\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)}$$

### Solubility Rules (MCAT-Relevant)

**Always soluble:** nitrates ($\\text{NO}_3^-$), alkali metals ($\\text{Na}^+$, $\\text{K}^+$), ammonium ($\\text{NH}_4^+$)

**Usually insoluble:** $\\text{Ag}^+$ halides (except $\\text{AgF}$), $\\text{Ba}^{2+}$/$\\text{Pb}^{2+}$/$\\text{Ca}^{2+}$ sulfates, most carbonates/phosphates/hydroxides (except Group IA and $\\text{Ba}^{2+}$)
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
              `$\\text{Na}^+ + \\text{Cl}^- \\to \\text{NaCl}$`,
              `$\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\to \\text{BaSO}_4(s)$`,
              `$2\\text{Na}^+ + \\text{SO}_4^{2-} + \\text{Ba}^{2+} + 2\\text{Cl}^- \\to \\text{BaSO}_4(s) + 2\\text{NaCl}$`,
              `No reaction occurs`
            ],
            correctAnswer: 1,
            explanation: `$\\text{BaSO}_4$ is insoluble (precipitates). The spectator ions are $\\text{Na}^+$ and $\\text{Cl}^-$. Net ionic equation: $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\to \\text{BaSO}_4(s)$.`
          },
          {
            question: `A student mixes $\\text{KNO}_3(aq)$ and $\\text{NaCl}(aq)$. What is the net ionic equation?`,
            options: [
              `$\\text{K}^+ + \\text{Cl}^- \\to \\text{KCl}(s)$`,
              `$\\text{Na}^+ + \\text{NO}_3^- \\to \\text{NaNO}_3(s)$`,
              `No net ionic equation; no reaction occurs`,
              `$\\text{K}^+ + \\text{Na}^+ \\to \\text{KNa}^{2+}$`
            ],
            correctAnswer: 2,
            explanation: `All possible products ($\\text{KCl}$, $\\text{NaNO}_3$) are soluble. All four ions remain in solution. There are no spectator ions because there is **no reaction** — all are spectators. Net: no reaction.`
          },
          {
            question: `Mixing equal volumes of 1.0 M $\\text{Pb(NO}_3)_2$ and 1.0 M $\\text{KI}$ produces a yellow precipitate. The concentrations after mixing are 0.50 M each. ($K_{sp}(\\text{PbI}_2) = 1.4 \\times 10^{-8}$). Does precipitation occur?`,
            options: [
              `No; $Q < K_{sp}$`,
              `Yes; $Q > K_{sp}$`,
              `No; both compounds are soluble`,
              `Yes; all lead compounds are insoluble`
            ],
            correctAnswer: 1,
            explanation: `$Q = [\\text{Pb}^{2+}][\\text{I}^-]^2 = (0.50)(0.50)^2 = 0.125$. Since $Q = 0.125 \\gg K_{sp} = 1.4 \\times 10^{-8}$, the solution is supersaturated and $\\text{PbI}_2$ **precipitates**.`
          }
        ]
      }
    },
    {
      id: 'st3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Molarity:** $M = n/V_{\\text{L}}$. Memorize and apply in every concentration problem.
- **Dilution:** $M_1V_1 = M_2V_2$ — moles of solute don't change.
- **Solution stoichiometry:** convert to moles using $n = MV$, apply mole ratio, convert back.
- **Colligative properties:** depend on particle count ($i \\times m$), not identity.
- **Van 't Hoff factor $i$:** 1 for nonelectrolytes; = ions per formula unit for strong electrolytes.
- **Net ionic equations:** cancel spectator ions; only reactive ions appear.
- **Solubility rules:** nitrates always soluble; $\\text{Ag}^+$ halides (except AgF) insoluble; most carbonates/phosphates insoluble.
- **$Q$ vs $K_{sp}$:** if $Q > K_{sp}$, precipitation occurs.
`
    }
  ]
};
