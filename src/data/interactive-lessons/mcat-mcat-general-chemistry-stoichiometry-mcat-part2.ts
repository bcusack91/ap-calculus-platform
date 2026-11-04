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

If the results tie, the reactants are in **exact stoichiometric ratio** and both are used up: for $2\\text{Al} + 3\\text{Cl}_2 \\to 2\\text{AlCl}_3$, 5.40 g Al (0.200 mol, $\\div 2 = 0.100$) and 21.3 g $\\text{Cl}_2$ (0.300 mol, $\\div 3 = 0.100$) leave nothing over.

## Percent Yield

$$\\%\\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$$

- **Theoretical yield:** calculated assuming 100% conversion of limiting reagent to product.
- **Actual yield:** experimentally measured.

**Causes of < 100% yield:** side reactions, incomplete reaction, product loss during isolation.

### Worked Example — Finding the Limiting Reagent

**Problem.** For $2\\text{Al} + 3\\text{Cl}_2 \\to 2\\text{AlCl}_3$, a flask holds 5.40 g Al ($M = 27.0$ g/mol) and 14.2 g $\\text{Cl}_2$ ($M = 70.9$ g/mol); $M_{\\text{AlCl}_3} = 133.3$ g/mol.

- **(a)** Which reactant is limiting?
- **(b)** How many moles of $\\text{AlCl}_3$ can form?
- **(c)** What is the theoretical yield of $\\text{AlCl}_3$ in grams?
- **(d)** How much of the excess reagent is left over?
- **(e)** If 15.0 g of $\\text{AlCl}_3$ is recovered, what is the percent yield?

**(a) Limiting reagent.** Al: $5.40/27.0 = 0.200$ mol → $0.200/2 = 0.100$. $\\text{Cl}_2$: $14.2/70.9 = 0.200$ mol → $0.200/3 = 0.0667$. $\\text{Cl}_2$ gives the smaller result, so **$\\text{Cl}_2$ is the limiting reagent**.

**(b) Moles of product.** Work from the limiting $\\text{Cl}_2$ (0.200 mol from (a)):
$$0.200\\text{ mol }\\text{Cl}_2 \\times \\frac{2\\text{ mol }\\text{AlCl}_3}{3\\text{ mol }\\text{Cl}_2} = 0.1333\\text{ mol}$$

**(c) Theoretical yield.** With 0.1333 mol from (b): mass $= 0.1333 \\times 133.3 = 17.8\\text{ g AlCl}_3$. (Rounding to 0.133 mol first gives 17.7 g, so carry the extra digit.)

**(d) Excess left over.** Al used $= 0.200\\text{ mol Cl}_2 \\times \\dfrac{2\\text{ mol Al}}{3\\text{ mol Cl}_2} = 0.133$ mol, so $0.200 - 0.133 = 0.0667$ mol Al stays unreacted.

**(e) Percent yield.** With 17.8 g theoretical from (c): $\\%\\text{ yield} = 15.0/17.8 \\times 100 = 84.3\\%$.

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
              `$\\text{N}_2$; it can make only 2.0 mol $\\text{NH}_3$`,
              `$\\text{H}_2$; it can make only 3.0 mol $\\text{NH}_3$`,
              `Neither; the two are present in stoichiometric ratio`,
              `It cannot be found without knowing the temperature`
            ],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Moles $\\text{N}_2 = 28.0/28.0 = 1.00$; ratio $= 1.00/1 = 1.00$. Moles $\\text{H}_2 = 9.0/2.0 = 4.5$; ratio $= 4.5/3 = 1.50$. $\\text{N}_2$ gives the smaller ratio (1.00 < 1.50) → **$\\text{N}_2$ is the limiting reagent.** The product check agrees: $\\text{N}_2$ can make $1.00 \\times 2 = 2.0$ mol $\\text{NH}_3$ and $\\text{H}_2$ can make $4.5 \\times 2/3 = 3.0$ mol, and the reactant that makes LESS product limits. The ratios differ, so they are not in stoichiometric ratio, and temperature plays no part in the mole bookkeeping.`
          },
          {
            question: `For $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$ with 1.00 mol $\\text{N}_2$ as the limiting reagent, what is the theoretical yield of $\\text{NH}_3$?`,
            options: [`1.00 mol (17 g)`, `2.00 mol (34 g)`, `3.00 mol (51 g)`, `0.50 mol (8.5 g)`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `From the balanced equation, 1 mol $\\text{N}_2$ produces 2 mol $\\text{NH}_3$. Theoretical yield $= 2.00\\text{ mol} \\times 17.0\\text{ g/mol} = \\mathbf{34.0\\text{ g}}$. 1.00 mol assumes a 1 : 1 ratio, 3.00 mol uses the coefficient of $\\text{H}_2$, and 0.50 mol inverts the 2 : 1 ratio.`
          },
          {
            question: `For $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$ (theoretical yield 34.0 g $\\text{NH}_3$), the actual yield is 27.2 g. What is the percent yield?`,
            options: [`125%`, `20%`, `80%`, `90%`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\% \\text{ yield} = (27.2/34.0) \\times 100 = \\mathbf{80\\%}$. The value 125% puts the theoretical yield on top of the fraction instead of the bottom, 20% is the share LOST rather than recovered, and 90% would need 30.6 g recovered.`
          },
          {
            question: `Which reaction is classified as a **double displacement** (metathesis) reaction?`,
            options: [
              `$\\text{Fe} + \\text{CuSO}_4 \\to \\text{FeSO}_4 + \\text{Cu}$`,
              `$2\\text{KClO}_3 \\to 2\\text{KCl} + 3\\text{O}_2$`,
              `$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\to \\text{BaSO}_4 + 2\\text{NaCl}$`,
              `$\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\to \\text{BaSO}_4 + 2\\text{NaCl}$: Two ionic compounds exchange partners ($\\text{Ba}^{2+}$ and $\\text{Na}^+$ switch anions). This is a classic double displacement (precipitation) reaction. $\\text{Fe} + \\text{CuSO}_4$ is single displacement; breaking down $\\text{KClO}_3$ is decomposition; burning $\\text{CH}_4$ is combustion.`
          }
        ]
      }
    },
    {
      id: 'st2-worked',
      type: 'text' as const,
      content: `## Worked Example: Combustion Analysis

**Problem.** A burner consumes 44.1 g of propane ($\\text{C}_3\\text{H}_8$, $M = 44.1$ g/mol), which burns completely in oxygen ($M_{\\text{CO}_2} = 44.0$ g/mol):

$$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$$

- **(a)** How many moles of propane burn?
- **(b)** How many moles of $\\text{CO}_2$ form?
- **(c)** What mass of $\\text{CO}_2$ is produced?
- **(d)** Does the shortcut $x + y/4$ give the same $\\text{O}_2$ coefficient as the balanced equation?

**(a) Moles of propane.**
$$n = \\frac{44.1}{44.1} = 1.00\\text{ mol}$$

**(b) Mole ratio.** The equation gives 3 mol $\\text{CO}_2$ per mol propane, so the 1.00 mol from (a) gives:
$$1.00 \\times 3 = 3.00\\text{ mol CO}_2$$

**(c) Grams of $\\text{CO}_2$.** With 3.00 mol from (b):
$$3.00 \\times 44.0 = \\mathbf{132\\text{ g CO}_2}$$

**(d) Shortcut check.** For $\\text{C}_3\\text{H}_8$, $x = 3$ and $y = 8$, so $\\text{O}_2$ needed $= 3 + 8/4 = 3 + 2 = 5$, matching the equation. ✓
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
            options: [`5`, `13/2`, `13`, `9/2`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\to 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$. O needed $= 4(2) + 5(1) = 13$ oxygen atoms $= 6.5$ $\\text{O}_2$. Coefficient $= \\mathbf{13/2}$ (or use $2\\text{C}_4\\text{H}_{10} + 13\\text{O}_2 \\to 8\\text{CO}_2 + 10\\text{H}_2\\text{O}$). Using the formula: $x=4$, $y=10$: $4 + 10/4 = 4 + 2.5 = 6.5$. The answer 13 counts O atoms instead of $\\text{O}_2$ molecules; 9/2 gives each $\\text{CO}_2$ only one O; 5 is the water coefficient.`
          },
          {
            question: `Heating $\\text{CaCO}_3$ yields $\\text{CaO}$ and $\\text{CO}_2$. This is an example of which reaction type?`,
            options: [
              `Combination (synthesis)`,
              `Decomposition`,
              `Single displacement`,
              `Double displacement`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$: one reactant breaks into two or more products — the definition of a **decomposition** reaction. Combination is the reverse (two reactants join), and neither kind of displacement fits, since there is only one reactant to swap partners with.`
          },
          {
            question: `40.0 g of $\\text{Fe}_2\\text{O}_3$ reacts with excess CO: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$ ($M_{\\text{Fe}_2\\text{O}_3} = 160$ g/mol, $M_{\\text{Fe}} = 55.8$ g/mol). What is the theoretical yield of Fe?`,
            options: [`14.0 g`, `41.9 g`, `27.9 g`, `55.8 g`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Moles $\\text{Fe}_2\\text{O}_3 = 40.0/160 = 0.250\\text{ mol}$. Each mole of $\\text{Fe}_2\\text{O}_3$ produces 2 mol Fe: $0.250 \\times 2 = 0.500\\text{ mol Fe}$. Mass $= 0.500 \\times 55.8 = \\mathbf{27.9\\text{ g}}$. 14.0 g assumes a 1 : 1 ratio, 41.9 g uses the 3 : 1 ratio of CO instead of Fe, and 55.8 g is a full mole of Fe.`
          }
        ]
      }
    },
    {
      id: 'st2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Moles ÷ coefficient.** Convert each reactant to moles and divide by its coefficient; the smallest result is the limiting reagent.
- **Yield follows the limiter.** Theoretical yield is the product the limiting reagent gives at 100% conversion.
- **Percent yield.** % yield $=$ actual / theoretical $\\times 100$; side reactions and isolation losses keep it below 100%.
- **Five reaction patterns.** Combination, decomposition, single and double displacement, combustion; $\\text{C}_x\\text{H}_y$ needs $x + y/4$ $\\text{O}_2$.

**Common traps**

- **Comparing raw amounts.** The reactant with fewer grams or fewer moles need not limit; divide moles by each coefficient first.
- **Product from the excess.** Theoretical yield comes from the limiting reagent; the excess reagent is simply left over.
- **Inverted percent yield.** Theoretical goes on the bottom: 27.2 g recovered of 34.0 g theoretical is 80%, not 125%.
- **Counting O atoms as $\\text{O}_2$.** Butane's products hold 13 O atoms, so the $\\text{O}_2$ coefficient is 13/2, not 13.
`
    }
  ]
};
