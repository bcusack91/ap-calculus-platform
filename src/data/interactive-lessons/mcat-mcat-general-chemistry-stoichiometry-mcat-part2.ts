export const mcatStoichiometryPart2Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st2-intro',
      type: 'text' as const,
      content: `# Stoichiometry & Chemical Reactions

**Part 2 of 5 — Limiting Reagent, Percent Yield & Reaction Types**

## Limiting Reagent

The **limiting reagent** is the reactant that is completely consumed first, limiting the amount of product formed. The **excess reagent** remains unreacted.

### How to Find the Limiting Reagent

1. Convert all reactant masses to moles.
2. Divide each mole value by its stoichiometric coefficient.
3. The reactant with the **smaller result** is the limiting reagent.

**Example:**  
$2\\text{Al} + 3\\text{Cl}_2 \\to 2\\text{AlCl}_3$

Given: 5.40 g Al and 21.3 g $\\text{Cl}_2$.

- Moles Al $= 5.40/27.0 = 0.200$ mol → $0.200/2 = 0.100$
- Moles $\\text{Cl}_2 = 21.3/70.9 = 0.300$ mol → $0.300/3 = 0.100$

Both give 0.100 — they are in **exact stoichiometric ratio**; neither is in excess. All reactants are consumed.

**Second example:**  
$2\\text{Al} + 3\\text{Cl}_2 \\to 2\\text{AlCl}_3$

Given: 5.40 g Al and 14.2 g $\\text{Cl}_2$.

- Moles Al $= 0.200$ mol → $0.200/2 = 0.100$
- Moles $\\text{Cl}_2 = 14.2/70.9 = 0.200$ mol → $0.200/3 = 0.0667$

$\\text{Cl}_2$ gives the smaller ratio → **$\\text{Cl}_2$ is the limiting reagent**.

Moles of $\\text{AlCl}_3$ produced (uses $\\text{Cl}_2$):
$$0.200\\text{ mol }\\text{Cl}_2 \\times \\frac{2\\text{ mol }\\text{AlCl}_3}{3\\text{ mol }\\text{Cl}_2} = 0.133\\text{ mol}$$

Mass $= 0.133 \\times 133.3 = 17.7\\text{ g AlCl}_3$

## Percent Yield

$$\\%\\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$$

- **Theoretical yield:** calculated assuming 100% conversion of limiting reagent to product.
- **Actual yield:** experimentally measured.

**Causes of < 100% yield:** side reactions, incomplete reaction, product loss during isolation.

## Types of Chemical Reactions

| Type | General Form | Example |
|------|-------------|---------|
| Combination (synthesis) | $A + B \\to AB$ | $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$ |
| Decomposition | $AB \\to A + B$ | $2\\text{H}_2\\text{O}_2 \\to 2\\text{H}_2\\text{O} + \\text{O}_2$ |
| Single displacement | $A + BC \\to AC + B$ | $\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$ |
| Double displacement | $AB + CD \\to AD + CB$ | $\\text{NaCl} + \\text{AgNO}_3 \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$ |
| Combustion | hydrocarbon + $\\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$ | $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$ |

### Combustion Stoichiometry Shortcut

For $\\text{C}_x\\text{H}_y$ + $\\text{O}_2$:
$$\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right)\\text{O}_2 \\to x\\text{CO}_2 + \\frac{y}{2}\\text{H}_2\\text{O}$$
`
    },
    {
      id: 'st2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Limiting Reagent & Yield** 🎯`,
      exercise: {
        questions: [
          {
            question: `$\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$. If 28.0 g $\\text{N}_2$ and 9.0 g $\\text{H}_2$ are mixed, which is the limiting reagent?`,
            options: [
              `$\\text{N}_2$ (runs out first)`,
              `$\\text{H}_2$ (runs out first)`,
              `Neither; they are in stoichiometric ratio`,
              `Cannot determine without temperature`
            ],
            correctAnswer: 2,
            explanation: `Moles $\\text{N}_2 = 28.0/28.0 = 1.00$; ratio $= 1.00/1 = 1.00$. Moles $\\text{H}_2 = 9.0/2.0 = 4.5$; ratio $= 4.5/3 = 1.50$. $\\text{N}_2$ gives the smaller ratio (1.00 < 1.50) → **$\\text{N}_2$ is the limiting reagent.**`
          },
          {
            question: `In the reaction above ($\\text{N}_2$ limiting, 1.00 mol), what is the theoretical yield of $\\text{NH}_3$?`,
            options: [`1.00 mol (17 g)`, `2.00 mol (34 g)`, `3.00 mol (51 g)`, `0.50 mol (8.5 g)`],
            correctAnswer: 1,
            explanation: `From the balanced equation, 1 mol $\\text{N}_2$ produces 2 mol $\\text{NH}_3$. Theoretical yield $= 2.00\\text{ mol} \\times 17.0\\text{ g/mol} = \\mathbf{34.0\\text{ g}}$.`
          },
          {
            question: `If the actual yield of $\\text{NH}_3$ in the above reaction is 27.2 g, what is the percent yield?`,
            options: [`50%`, `60%`, `80%`, `90%`],
            correctAnswer: 2,
            explanation: `$\\% \\text{ yield} = (27.2/34.0) \\times 100 = \\mathbf{80\\%}$.`
          },
          {
            question: `Which reaction is classified as a **double displacement** (metathesis) reaction?`,
            options: [
              `$\\text{Fe} + \\text{CuSO}_4 \\to \\text{FeSO}_4 + \\text{Cu}$`,
              `$2\\text{KClO}_3 \\to 2\\text{KCl} + 3\\text{O}_2$`,
              `$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\to \\text{BaSO}_4 + 2\\text{NaCl}$`,
              `$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$`
            ],
            correctAnswer: 2,
            explanation: `$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\to \\text{BaSO}_4 + 2\\text{NaCl}$: Two ionic compounds exchange partners ($\\text{Ba}^{2+}$ and $\\text{Na}^+$ switch anions). This is a classic double displacement (precipitation) reaction. Option A is single displacement; B is decomposition; D is combustion.`
          }
        ]
      }
    },
    {
      id: 'st2-worked',
      type: 'text' as const,
      content: `## Worked Example: Combustion Analysis

Propane ($\\text{C}_3\\text{H}_8$) burns completely in oxygen:

$$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$$

**How much $\\text{CO}_2$ is produced by burning 44.1 g of propane?**

Step 1 — Moles propane ($M = 44.1$ g/mol):
$$n = \\frac{44.1}{44.1} = 1.00\\text{ mol}$$

Step 2 — Moles $\\text{CO}_2$ (3:1 ratio):
$$1.00 \\times 3 = 3.00\\text{ mol CO}_2$$

Step 3 — Grams:
$$3.00 \\times 44.0 = \\mathbf{132\\text{ g CO}_2}$$

## MCAT Shortcut: Combustion $O_{2}$ Coefficient

For $\\text{C}_3\\text{H}_8$: $x=3$, $y=8$. $O_{2}$ needed $= 3 + 8/4 = 3 + 2 = 5$. ✓
`
    },
    {
      id: 'st2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Combustion & Reaction Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `Balance the combustion of $\\text{C}_4\\text{H}_{10}$ (butane). What is the coefficient for $\\text{O}_2$?`,
            options: [`5`, `13/2 (or multiply: 13 with 2 $\\text{C}_4\\text{H}_{10}$)`, `6`, `8`],
            correctAnswer: 1,
            explanation: `$\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\to 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$. O needed $= 4(2) + 5(1) = 13$ oxygen atoms = 6.5 $O_{2}$. Coefficient $= \\mathbf{13/2}$ (or use $2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\to ...$). Using the formula: $x=4$, $y=10$: $4 + 10/4 = 4 + 2.5 = 6.5$.`
          },
          {
            question: `Decomposition of $\\text{CaCO}_3$ on heating yields $\\text{CaO}$ and $\\text{CO}_2$. This is an example of:`,
            options: [
              `Combustion`,
              `Combination (synthesis)`,
              `Decomposition`,
              `Single displacement`
            ],
            correctAnswer: 2,
            explanation: `$\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$: one reactant breaks into two or more products — the definition of a **decomposition** reaction.`
          },
          {
            question: `40.0 g of $\\text{Fe}_2\\text{O}_3$ reacts with excess CO: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$ ($M_{\\text{Fe}_2\\text{O}_3} = 160$ g/mol, $M_{\\text{Fe}} = 55.8$ g/mol). What is the theoretical yield of Fe?`,
            options: [`11.2 g`, `22.3 g`, `27.9 g`, `55.8 g`],
            correctAnswer: 2,
            explanation: `Moles $\\text{Fe}_2\\text{O}_3 = 40.0/160 = 0.250\\text{ mol}$. Each mole of $\\text{Fe}_2\\text{O}_3$ produces 2 mol Fe: $0.250 \\times 2 = 0.500\\text{ mol Fe}$. Mass $= 0.500 \\times 55.8 = \\mathbf{27.9\\text{ g}}$.`
          }
        ]
      }
    },
    {
      id: 'st2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Limiting reagent:** divide moles by coefficient; smallest ratio = limiting reagent
- **Theoretical yield** is calculated from the limiting reagent using stoichiometric ratios
- **% yield = (actual / theoretical) × 100**; always ≤ 100% in practice
- **Reaction types:** combination, decomposition, single displacement, double displacement, combustion
- **Combustion of $\\text{C}_x\\text{H}_y$:** coefficient for $\\text{O}_2 = x + y/4$; always produces $\\text{CO}_2$ and $\\text{H}_2\\text{O}$
- On the MCAT, % yield questions often appear with multi-step syntheses — apply to each step separately
`
    }
  ]
};
