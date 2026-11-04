export const mcatStoichiometryPart2Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st2-intro',
      type: 'text' as const,
      content: `# Stoichiometry: Moles & Reactions

**Part 2 of 2 — Limiting Reagent, Percent Yield & Reaction Types**

## Limiting Reagent

The **limiting reagent** is the reactant that is completely consumed first, limiting the amount of product formed. The **excess reagent** remains unreacted.

### How to Find the Limiting Reagent

1. Convert all reactant masses to moles.
2. Divide each mole value by its stoichiometric coefficient.
3. The reactant with the **smaller result** is the limiting reagent.

If the results tie, the reactants are in **exact stoichiometric ratio** and both are used up: for $2\\text{Al} + 3\\text{Cl}_2 \\to 2\\text{AlCl}_3$, 5.40 g Al (0.200 mol, $\\div 2 = 0.100$) and 21.3 g $\\text{Cl}_2$ (0.300 mol, $\\div 3 = 0.100$) leave nothing over.

### The Product Check

An equivalent route, often faster on the exam: ask how much product EACH reactant could make if the other were unlimited. The reactant that makes **less** is limiting, and its answer is already the theoretical yield. Because product $\\propto$ moles $\\div$ coefficient, the two routes always agree; raw moles or grams decide nothing unless the coefficients happen to be equal.

## Percent Yield

$$\\%\\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$$

- **Theoretical yield:** calculated assuming 100% conversion of limiting reagent to product.
- **Actual yield:** experimentally measured.

**Causes of < 100% yield:** side reactions, incomplete reaction, product loss during isolation.

### Yield Across a Multi-Step Synthesis

Most real syntheses chain several reactions, and each step's product is the next step's limiting reagent. Percent yields along the chain **multiply**; they never add or average:

$$\\text{overall yield} = y_1 \\times y_2 \\times y_3 \\times \\cdots$$

Three steps at 90%, 75% and 80% deliver $0.90 \\times 0.75 \\times 0.80 = 0.54$, or 54% overall, far below their 82% average. Losses compound, so long linear routes waste material quickly (five steps at 90% keep only 59%), and the weakest step dominates. To find the starting material a target amount needs, divide by the overall fraction (worked example later in this part).

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

### Worked Example — Which Reactant Makes More Product?

**Problem.** In the thermite reaction $\\text{Fe}_2\\text{O}_3 + 2\\text{Al} \\to 2\\text{Fe} + \\text{Al}_2\\text{O}_3$, a crucible holds 1.00 mol of $\\text{Fe}_2\\text{O}_3$ (160 g) and 1.50 mol of Al (40.5 g).

- **(a)** How many moles of Fe could each reactant make on its own?
- **(b)** Which reactant is limiting, and would comparing moles alone have said the same?
- **(c)** How much of the other reactant is left when the reaction stops?
- **(d)** Which reactant must be added to make more iron?

**(a) Product check.** $\\text{Fe}_2\\text{O}_3$: $1.00 \\times 2 = 2.00$ mol Fe. Al: $1.50 \\times \\dfrac{2\\text{ mol Fe}}{2\\text{ mol Al}} = 1.50$ mol Fe.

**(b) The smaller product wins.** Al makes less (1.50 < 2.00 from (a)), so **Al is limiting** and the theoretical yield is 1.50 mol Fe (83.7 g). Raw moles point the wrong way: $\\text{Fe}_2\\text{O}_3$ has fewer moles (1.00 < 1.50) yet is in excess. Moles $\\div$ coefficient ($1.00/1 = 1.00$ against $1.50/2 = 0.75$) agrees with the product check.

**(c) Leftover.** The 1.50 mol Al consumes $1.50 \\times \\dfrac{1\\text{ mol Fe}_2\\text{O}_3}{2\\text{ mol Al}} = 0.750$ mol $\\text{Fe}_2\\text{O}_3$, leaving $1.00 - 0.750 = 0.250$ mol (40.0 g) unreacted.

**(d) Only the limiter helps.** More Al. Adding $\\text{Fe}_2\\text{O}_3$, already in excess from (b), only increases the leftover; the yield rises only with the limiting reagent.
`
    },
    {
      id: 'st2-types',
      type: 'text' as const,
      content: `## Types of Chemical Reactions

| Type | General Form | Example |
|------|-------------|---------|
| Combination (synthesis) | $A + B \\to AB$ | $2\\text{Mg} + \\text{O}_2 \\to 2\\text{MgO}$ |
| Decomposition | $AB \\to A + B$ | $2\\text{H}_2\\text{O}_2 \\to 2\\text{H}_2\\text{O} + \\text{O}_2$ |
| Single displacement | $A + BC \\to AC + B$ | $\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$ |
| Double displacement | $AB + CD \\to AD + CB$ | $\\text{NaCl} + \\text{AgNO}_3 \\to \\text{AgCl}\\downarrow + \\text{NaNO}_3$ |
| Combustion | hydrocarbon + $\\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$ | $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$ |

A **neutralization** ($\\text{HNO}_3 + \\text{KOH} \\to \\text{KNO}_3 + \\text{H}_2\\text{O}$) is a double displacement whose products are a salt and water. Every **single displacement** is also a redox reaction, and a nonmetal can displace as well as a metal: $\\text{Cl}_2 + 2\\text{NaI} \\to 2\\text{NaCl} + \\text{I}_2$.

### Combustion Stoichiometry Shortcut

For $\\text{C}_x\\text{H}_y$ + $\\text{O}_2$:
$$\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right)\\text{O}_2 \\to x\\text{CO}_2 + \\frac{y}{2}\\text{H}_2\\text{O}$$

If the fuel already contains oxygen, $\\text{C}_x\\text{H}_y\\text{O}_z$, subtract what it brings: $\\text{O}_2$ needed $= x + y/4 - z/2$. Ethanol, $\\text{C}_2\\text{H}_6\\text{O}$, needs $2 + 1.5 - 0.5 = 3$ $\\text{O}_2$.

### Worked Example — Classifying Reactions

**Problem.** Classify each reaction by its pattern.

- **(a)** Which pattern is $\\text{Zn} + \\text{Cu}(\\text{NO}_3)_2 \\to \\text{Zn}(\\text{NO}_3)_2 + \\text{Cu}$?
- **(b)** Which pattern is $2\\text{NaHCO}_3 \\to \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2$?
- **(c)** Which pattern is $\\text{Pb}(\\text{NO}_3)_2 + 2\\text{KI} \\to \\text{PbI}_2 + 2\\text{KNO}_3$?
- **(d)** Which pattern is $\\text{CH}_3\\text{COOH} + \\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$, and what $\\text{O}_2$ coefficient balances it?

**(a) Single displacement.** Free zinc takes copper's place and copper metal is released ($A + BC \\to AC + B$); the nitrate ion rides along unchanged, while Zn is oxidized and $\\text{Cu}^{2+}$ reduced.

**(b) Decomposition.** One compound (baking soda, on heating) splits into three simpler ones ($AB \\to A + B$).

**(c) Double displacement.** Two ionic compounds swap partners ($AB + CD \\to AD + CB$); the yellow $\\text{PbI}_2$ precipitate drives it.

**(d) Combustion.** An oxygen-containing fuel still burns to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. As $\\text{C}_2\\text{H}_4\\text{O}_2$: $x + y/4 - z/2 = 2 + 1 - 1 = 2$, so $\\text{CH}_3\\text{COOH} + 2\\text{O}_2 \\to 2\\text{CO}_2 + 2\\text{H}_2\\text{O}$ (O: $2 + 4 = 6 = 4 + 2$).
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
            question: `Combustion of propane: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. If 2.00 mol $\\text{C}_3\\text{H}_8$ reacts with 8.00 mol $\\text{O}_2$, what is the limiting reagent?`,
            options: [
              `$\\text{C}_3\\text{H}_8$; 2.00 mol is far less than 8.00 mol`,
              `$\\text{O}_2$; 2.00 mol of propane needs 10.0 mol of it`,
              `Neither; the two are mixed in their exact 1 : 5 mole ratio`,
              `Neither; a gas-phase reaction never has a limiting reagent`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `2 mol $\\text{C}_3\\text{H}_8$ requires $2 \\times 5 = 10\\text{ mol O}_2$, but only 8 mol $\\text{O}_2$ is available. Therefore $\\text{O}_2$ is limiting. Alternatively: $2.00/1 = 2.00$ (propane ratio); $8.00/5 = 1.60$ ($\\text{O}_2$ ratio) — smaller ratio → **$\\text{O}_2$ is limiting**. Having fewer moles does not make propane limiting, the mixture is 1 : 4 rather than 1 : 5, and gas-phase reactions obey the same mole bookkeeping.`
          },
          {
            question: `An experiment produces 15.3 g of water from the combustion of hydrogen. The theoretical yield is 22.5 g. What is the percent yield?`,
            options: [`32.0%`, `147%`, `68.0%`, `6.80%`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Percent yield $= (\\text{actual}/\\text{theoretical}) \\times 100 = (15.3/22.5) \\times 100 = \\mathbf{68.0\\%}$. 32.0% is the share lost, 147% puts the theoretical yield on top, and 6.80% slips a decimal place.`
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
          },
          {
            question: `In $\\text{A} + 3\\text{B} \\to \\text{AB}_3$, equal MASSES of A and B are mixed, and A's molar mass is twice B's. Which reactant is limiting?`,
            options: [
              `B, since there are only 2 mol of it per mol of A`,
              `A, since fewer moles of it are present`,
              `A, since its molar mass is the larger`,
              `Neither, since equal masses react fully`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Equal masses with half the molar mass means twice the moles: 2 mol of B for every mol of A. The equation needs 3 B per A, so B runs out first; A could make 1 unit of product per mole while B makes only 2/3. A does have fewer moles, but fewer moles does not mean limiting, the larger molar mass is only why A has fewer moles, and equal masses are not the 1 : 3 mole ratio the equation needs.`
          },
          {
            question: `Calcium carbide makes acetylene by $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\to \\text{Ca}(\\text{OH})_2 + \\text{C}_2\\text{H}_2$. If 1.0 mol $\\text{CaC}_2$ meets 1.5 mol $\\text{H}_2\\text{O}$, which reactant limits, and how much acetylene forms?`,
            options: [
              `$\\text{H}_2\\text{O}$; at most 0.75 mol forms`,
              `$\\text{CaC}_2$; at most 1.0 mol forms`,
              `$\\text{H}_2\\text{O}$; at most 1.5 mol forms`,
              `$\\text{CaC}_2$; at most 0.50 mol forms`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Product check: 1.0 mol $\\text{CaC}_2$ could make 1.0 mol $\\text{C}_2\\text{H}_2$, while 1.5 mol of water, at two per acetylene, could make only 0.75 mol, so water limits despite having more moles. Taking $\\text{CaC}_2$ as limiting with 1.0 mol works from the excess reagent, 1.5 mol gives water a 1 : 1 ratio it does not have, and 0.50 mol divides the carbide by 2 as if it carried the coefficient.`
          },
          {
            question: `A four-step synthesis has step yields of 90%, 80%, 50% and 100%. What is the overall yield?`,
            options: [`80%`, `36%`, `50%`, `20%`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Yields multiply: $0.90 \\times 0.80 \\times 0.50 \\times 1.00 = 0.36$, so 36%. The value 80% is the average of the four steps, 50% is just the worst step on its own, and 20% subtracts the three losses (10 + 20 + 50) from 100 as if they added.`
          },
          {
            question: `A chemist needs 10.0 g of product from a two-step route with yields of 50% and then 80%. Each step is 1 : 1 in moles, and the product has the same molar mass as the starting material. How much starting material is needed?`,
            options: [`4.00 g`, `12.5 g`, `25.0 g`, `20.0 g`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The overall fraction is $0.50 \\times 0.80 = 0.40$, and with equal molar masses and 1 : 1 ratios the target divides by it: $10.0/0.40 = 25.0$ g. The value 4.00 g multiplies by 0.40 instead of dividing, 12.5 g allows only for the 80% step, and 20.0 g only for the 50% step.`
          }
        ]
      }
    },
    {
      id: 'st2-worked',
      type: 'text' as const,
      content: `## Worked Example: Combustion Stoichiometry

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

### Worked Example — Yield Across a Multi-Step Synthesis

**Problem.** A drug D is made from starting material S in three steps, $\\text{S} \\to \\text{A} \\to \\text{B} \\to \\text{D}$, each 1 : 1 in moles, with step yields of 90%, 75% and 80%. $M_{\\text{S}} = 100$ g/mol, $M_{\\text{D}} = 200$ g/mol, and the chemist starts with 50.0 g of S.

- **(a)** What is the overall percent yield?
- **(b)** How many moles of D are isolated?
- **(c)** What mass of D is that? Can a product outweigh the starting material it came from?
- **(d)** If the weakest step were made quantitative (100%), what would the overall yield become?

**(a) Multiply the fractions.** $0.90 \\times 0.75 \\times 0.80 = 0.540$, so the overall yield is **54.0%**, not the 82% average of the three steps.

**(b) Moles of D.** $50.0/100 = 0.500$ mol S; with 1 : 1 ratios the theoretical yield is 0.500 mol D, and the 54.0% from (a) leaves $0.500 \\times 0.540 = 0.270$ mol D.

**(c) Mass of D.** With 0.270 mol from (b): $0.270 \\times 200 = 54.0$ g. That exceeds the 50.0 g of S because D is twice as heavy per mole; the extra atoms come from the reagents added along the way, so no conservation law is broken.

**(d) Fixing the weakest step.** Raising the 75% step to 100% gives $0.90 \\times 1.00 \\times 0.80 = 0.720$, or 72.0%: a single poor step costs more than its share.
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
          },
          {
            question: `Which reaction is a single displacement?`,
            options: [
              `$\\text{BaCl}_2 + \\text{K}_2\\text{SO}_4 \\to \\text{BaSO}_4 + 2\\text{KCl}$`,
              `$\\text{Br}_2 + 2\\text{KI} \\to 2\\text{KBr} + \\text{I}_2$`,
              `$2\\text{HgO} \\to 2\\text{Hg} + \\text{O}_2$`,
              `$\\text{SO}_2 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_3$`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Free bromine takes iodine's place in KI and releases iodine as the free element, the $A + BC \\to AC + B$ pattern; a nonmetal displacing a nonmetal is still a single displacement (and a redox reaction). Barium chloride and potassium sulfate swap partners in a double displacement, mercury(II) oxide splitting into its elements is a decomposition, and sulfur dioxide joining water is a combination.`
          },
          {
            question: `Glucose, $\\text{C}_6\\text{H}_{12}\\text{O}_6$, burns completely to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. With a coefficient of 1 for glucose, what is the coefficient of $\\text{O}_2$?`,
            options: [`9`, `6`, `12`, `3`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The fuel brings its own oxygen, so $\\text{O}_2 = x + y/4 - z/2 = 6 + 3 - 3 = 6$: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$ (O: $6 + 12 = 18 = 12 + 6$). The value 9 ignores the fuel's six oxygens, 12 counts the O atoms that $\\text{O}_2$ must supply as molecules, and 3 subtracts the whole $z$ instead of $z/2$.`
          },
          {
            question: `Which reaction is a combination (synthesis)?`,
            options: [
              `$2\\text{Na} + 2\\text{H}_2\\text{O} \\to 2\\text{NaOH} + \\text{H}_2$`,
              `$\\text{NH}_4\\text{Cl} \\to \\text{NH}_3 + \\text{HCl}$`,
              `$\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca}(\\text{OH})_2$`,
              `$\\text{Na}_2\\text{S} + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{S}$`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Calcium oxide and water join into a single product, the $A + B \\to AB$ pattern. Sodium metal replacing hydrogen in water is a single displacement, ammonium chloride splitting into ammonia and HCl is a decomposition, and sodium sulfide and HCl exchanging partners is a double displacement.`
          }
        ]
      }
    },
    {
      id: 'st2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Moles ÷ coefficient.** The smallest moles-per-coefficient limits; equivalently, the reactant that could make LESS product.
- **Yield follows the limiter.** Theoretical yield is the product the limiting reagent gives at 100%; more excess reagent adds nothing.
- **Percent yields multiply.** % yield $=$ actual / theoretical $\\times 100$; across steps the fractions multiply: $0.90 \\times 0.75 \\times 0.80 = 54\\%$.
- **Five reaction patterns.** Combination, decomposition, single and double displacement, combustion; $\\text{C}_x\\text{H}_y\\text{O}_z$ needs $x + y/4 - z/2$ $\\text{O}_2$.

**Common traps**

- **Comparing raw amounts.** The reactant with fewer grams or fewer moles need not limit; divide moles by each coefficient first.
- **Averaging step yields.** Steps at 90%, 75% and 80% give 54% overall, not their 82% average; a single weak step dominates.
- **Inverted percent yield.** Theoretical goes on the bottom: 27.2 g recovered of 34.0 g theoretical is 80%, not 125%.
- **Counting O atoms as $\\text{O}_2$.** Butane's products hold 13 O atoms, so the $\\text{O}_2$ coefficient is 13/2, not 13.

**Next up:** the *Solutions, Gases & Electrolysis* lesson — molarity, dilution and solution stoichiometry, colligative properties and precipitation, the gas laws, and Faraday's law of electrolysis.
`
    }
  ]
};
