import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-stoichiometry-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Give the percent yield formula.`]: {
    question: r`A reaction is expected to give 0.20 mol of a product with a molar mass of 150 g/mol. The chemist isolates 24 g. What is the percent yield?`,
    options: [r`125%`, r`80%`, r`16%`, r`120%`],
    correctAnswer: 1,
    explanation: r`The theoretical yield is 0.20 mol × 150 g/mol = 30 g, so the percent yield is 24/30 = 80%. Inverting the fraction gives 125%, which is impossible for a pure product. Dividing 24 by the molar mass gives 16%, and dividing 24 by 0.20 gives 120, neither of which compares actual with theoretical mass.`,
  },
  [r`How do you find an empirical formula from percent composition?`]: {
    question: r`A sulfur oxide is 40% sulfur and 60% oxygen by mass (S = 32 g/mol, O = 16 g/mol). What is its empirical formula?`,
    options: [r`SO₂`, r`S₂O₃`, r`S₃O`, r`SO₃`],
    correctAnswer: 3,
    explanation: r`In 100 g there are 40/32 = 1.25 mol S and 60/16 = 3.75 mol O, and dividing by 1.25 gives 1 S to 3 O. S₂O₃ uses the mass ratio 40 : 60 as if it were a mole ratio. SO₂ is 50% sulfur by mass, and S₃O inverts the mole ratio.`,
  },
  [r`What is the molar volume of an ideal gas at STP?`]: {
    question: r`A weather balloon must hold 67.2 L of gas at 0 °C and 1 atm. How many moles are needed if it is filled with helium (4 g/mol), and how many if it is filled with argon (40 g/mol)?`,
    options: [r`3.0 mol of He or 3.0 mol of Ar`, r`3.0 mol of He or 0.30 mol of Ar`, r`3.0 mol of He or 30 mol of Ar`, r`0.33 mol of He or 0.33 mol of Ar`],
    correctAnswer: 0,
    explanation: r`At STP one mole of any ideal gas fills 22.4 L, so 67.2/22.4 = 3.0 mol whichever gas is used. Scaling the argon amount down or up by 10 wrongly lets molar mass change the molar volume. The 0.33 mol answer inverts the division to 22.4/67.2.`,
  },
  [r`How do you identify the limiting reagent?`]: {
    question: r`Aluminum reacts with chlorine by 2Al + 3Cl₂ → 2AlCl₃. A vessel holds 4.0 mol of Al and 4.5 mol of Cl₂. Which reactant is limiting, and why?`,
    options: [r`Al, because 4.0 mol is less than 4.5 mol`, r`Al, because 4.0/3 is smaller than 4.5/2`, r`Cl₂, because 4.5/3 is smaller than 4.0/2`, r`Neither, because both are fully used up`],
    correctAnswer: 2,
    explanation: r`Divide moles by coefficients: Al gives 4.0/2 = 2.0 and Cl₂ gives 4.5/3 = 1.5, so Cl₂ runs out first even though more moles of it are present. Comparing raw moles ignores the coefficients, and pairing each amount with the other reactant's coefficient flips the result. The quotients differ, so one reactant must be left over.`,
  },
  [r`How many grams of $O_{2}$ are needed to burn 16 g of $CH_{4}$ ($M=16$)?`]: {
    question: r`Hydrogen burns by 2H₂ + O₂ → 2H₂O. How many grams of O₂ (32 g/mol) are needed to burn 4.0 g of H₂ (2.0 g/mol) completely?`,
    options: [r`64 g`, r`128 g`, r`32 g`, r`16 g`],
    correctAnswer: 2,
    explanation: r`4.0 g of H₂ is 2.0 mol, which needs 1.0 mol of O₂, and that is 32 g. Using a 1 : 1 ratio gives 2.0 mol or 64 g, and inverting the ratio to 2 O₂ per H₂ gives 128 g. The 16 g answer uses the mass of one O atom per mole of O₂.`,
  },
  [r`Combusting 1 mol propane ($C_{3}H_{8}$) completely requires how many mol $O_{2}$?`]: {
    question: r`Butene, C₄H₈, burns completely to CO₂ and H₂O. How many moles of O₂ does 1 mol of butene consume?`,
    options: [r`6 mol`, r`12 mol`, r`8 mol`, r`4 mol`],
    correctAnswer: 0,
    explanation: r`The products are 4CO₂ and 4H₂O, which hold 8 + 4 = 12 oxygen atoms, so 6 mol of O₂ are needed. Answering 12 counts oxygen atoms instead of O₂ molecules. Answering 8 adds the product coefficients, and 4 supplies oxygen for the CO₂ only.`,
  },
  [r`What is the mass percent of oxygen in water ($M=18$)?`]: {
    question: r`A fuel analyst needs the mass percent of carbon in methane, CH₄ (C = 12 g/mol, H = 1.0 g/mol). What is it?`,
    options: [r`20%`, r`25%`, r`92%`, r`75%`],
    correctAnswer: 3,
    explanation: r`One mole of CH₄ has 12 g of carbon in 16 g total, and 12/16 = 75%. Twenty percent is the fraction of atoms that are carbon, 1 of 5, not the fraction of mass. Twenty-five percent is hydrogen's share, and 92% comes from 12/13, which counts only one hydrogen.`,
  },
  [r`How does sample impurity change a stoichiometric calculation?`]: {
    question: r`A 10.0 g ore sample is 84% MgCO₃ (84 g/mol) by mass; the rest is inert. On strong heating, MgCO₃ → MgO + CO₂. How many moles of CO₂ are released?`,
    options: [r`0.12 mol`, r`0.10 mol`, r`0.14 mol`, r`0.019 mol`],
    correctAnswer: 1,
    explanation: r`Only the pure part reacts: 10.0 g × 0.84 = 8.4 g of MgCO₃, which is 8.4/84 = 0.10 mol, giving 0.10 mol of CO₂. Using the whole 10.0 g gives 0.12 mol, and dividing by the purity instead of multiplying gives 0.14 mol. The 0.019 mol answer uses the 1.6 g of inert material.`,
  },
  [r`The limiting reagent sets {{c1::the theoretical yield}}; leftover excess equals {{c2::initial moles minus moles consumed}}.`]: {
    question: r`Zinc reacts by Zn + 2HCl → ZnCl₂ + H₂. A flask holds 0.30 mol of Zn and 1.00 mol of HCl. How much HCl is left at the end, and would adding more HCl give more H₂?`,
    options: [r`0.40 mol is left, and more HCl gives no extra H₂`, r`0.70 mol is left, and more HCl gives no extra H₂`, r`0.40 mol is left, and more HCl gives extra H₂`, r`0.70 mol is left, and more HCl gives extra H₂`],
    correctAnswer: 0,
    explanation: r`Zn is limiting (0.30/1 is less than 1.00/2) and consumes 0.60 mol of HCl, leaving 1.00 − 0.60 = 0.40 mol. Because Zn sets the yield, adding more of the excess HCl cannot make more H₂. The 0.70 mol answers use a 1 : 1 ratio in place of the 1 : 2 ratio in the equation.`,
  },
  [r`Percent yield is {{c1::actual over theoretical yield}} times 100, and the theoretical yield always comes from {{c2::the limiting reagent}}.`]: {
    question: r`A reaction converts reactant R (80 g/mol) to product P (120 g/mol) in a 1 : 1 mole ratio with a 75% yield. What mass of R is needed to isolate 45 g of P?`,
    options: [r`30 g`, r`22.5 g`, r`60 g`, r`40 g`],
    correctAnswer: 3,
    explanation: r`Divide by the yield fraction first: 45 g/0.75 = 60 g theoretical, which is 0.50 mol of P and so 0.50 mol of R, or 40 g. Ignoring the yield gives 45/120 × 80 = 30 g, and multiplying by 0.75 instead of dividing gives 22.5 g. Sixty grams is the theoretical mass of P, not the mass of R.`,
  },
  [r`An empirical formula comes from {{c1::mole ratios}}: divide each mass percent by {{c2::the atomic mass}}, then by the smallest result.`]: {
    question: r`An iron oxide is 70% iron and 30% oxygen by mass (Fe = 56 g/mol, O = 16 g/mol). What is its empirical formula?`,
    options: [r`FeO`, r`Fe₂O₃`, r`FeO₂`, r`Fe₇O₃`],
    correctAnswer: 1,
    explanation: r`In 100 g there are 70/56 = 1.25 mol Fe and 30/16 = 1.875 mol O, a ratio of 1 : 1.5, which doubles to 2 : 3. Rounding 1.5 down gives FeO and rounding it up gives FeO₂; a ratio near 1.5 must be multiplied by 2, not rounded. Fe₇O₃ uses the mass ratio 70 : 30 as subscripts.`,
  },
  [r`In combustion analysis, how do you get the C, H, and O content of a sample?`]: {
    question: r`Burning 4.6 g of an alcohol in excess O₂ yields 8.8 g of carbon dioxide (44 g/mol) and 5.4 g of water (18 g/mol). The alcohol is made of C, H and O only. How many grams of oxygen were in the alcohol itself?`,
    options: [r`11.2 g`, r`1.9 g`, r`1.6 g`, r`9.6 g`],
    correctAnswer: 2,
    explanation: r`The carbon dioxide holds 0.20 mol C (2.4 g) and the water holds 0.30 × 2 = 0.60 mol H (0.60 g), so oxygen by difference is 4.6 − 3.0 = 1.6 g. The 11.2 g answer counts all the oxygen in the products, most of which came from the O₂ supplied. Forgetting that each water molecule has two H gives 1.9 g, and 9.6 g is the mass of O₂ that was added.`,
  },
  [r`What is the overall yield of a three-step synthesis with yields of 80, 50, and 50 percent?`]: {
    question: r`A drug is made by four consecutive reactions that give 50%, 50%, 80% and 50% of the possible product, each 1 : 1 in moles. From 1.0 mol of the first reactant, how many moles of drug are obtained?`,
    options: [r`0.10 mol`, r`0.50 mol`, r`0.58 mol`, r`0.20 mol`],
    correctAnswer: 0,
    explanation: r`Overall yield is the product of the step yields: 0.5 × 0.5 × 0.8 × 0.5 = 0.10, so 0.10 mol. The 0.50 mol answer takes the lowest single step as the overall yield, and 0.58 mol averages the four yields. The 0.20 mol answer leaves out one of the 50% steps.`,
  },
  [r`In a plot of product formed versus moles of reactant A added, what does the plateau mean?`]: {
    question: r`In a series of trials, each flask holds 0.20 mol of reactant B and a different amount of reactant A. Product rises steadily until 0.60 mol of A has been added, then stays flat. What is the reacting ratio, and which reactant is limiting on the flat part?`,
    options: [r`1 A to 3 B, with B limiting on the flat part`, r`3 A to 1 B, with A limiting on the flat part`, r`1 A to 3 B, with A limiting on the flat part`, r`3 A to 1 B, with B limiting on the flat part`],
    correctAnswer: 3,
    explanation: r`The break point marks exact stoichiometric amounts, 0.60 mol of A with 0.20 mol of B, a ratio of 3 A to 1 B. Past the break extra A has nothing to react with, so B is limiting and A is in excess. The 1-to-3 answers invert the ratio, and naming A as limiting on the flat part contradicts the fact that adding more of it does nothing.`,
  },
  [r`Balancing is bookkeeping for {{c1::conservation of mass}} and, in ionic equations, {{c2::conservation of charge}}.`]: {
    question: r`A student writes Cu + Ag⁺ → Cu²⁺ + Ag and says it is balanced because each side has one Cu and one Ag. What is wrong, and how is it fixed?`,
    options: [r`Atoms are unbalanced; use 2Cu and 2Cu²⁺`, r`Charge is unbalanced; use 2Ag⁺ and 2Ag`, r`Charge is unbalanced; rewrite Ag⁺ as Ag²⁺`, r`Nothing is wrong; only atoms must balance`],
    correctAnswer: 1,
    explanation: r`The left side carries +1 and the right side +2, so charge is not conserved; coefficients of 2 on Ag⁺ and Ag give +2 on both sides with atoms still balanced. The atoms were already balanced, and doubling copper makes the charges +1 and +4. Rewriting Ag⁺ as Ag²⁺ changes the identity of the species, which is never allowed, and an ionic equation must balance charge as well as atoms.`,
  },
  [r`How do you use density to enter a stoichiometry problem given a liquid reagent's volume?`]: {
    question: r`A procedure calls for 23 mL of neat ethanol (density 0.80 g/mL, molar mass 46 g/mol). How many moles of ethanol is that?`,
    options: [r`0.50 mol`, r`0.63 mol`, r`0.40 mol`, r`18 mol`],
    correctAnswer: 2,
    explanation: r`Mass = 23 mL × 0.80 g/mL = 18.4 g, and 18.4/46 = 0.40 mol. Skipping the density and dividing 23 by 46 gives 0.50 mol. Dividing the volume by the density instead of multiplying gives 0.63 mol, and 18 is the mass in grams, not the moles.`,
  },
  [r`A table lists moles of both reactants. Which one must you never use to compute theoretical yield?`]: {
    question: r`Iron rusts by 4Fe + 3O₂ → 2Fe₂O₃. A data table lists 8.0 mol of Fe and 9.0 mol of O₂. What is the theoretical yield of Fe₂O₃?`,
    options: [r`4.0 mol`, r`6.0 mol`, r`8.0 mol`, r`10 mol`],
    correctAnswer: 0,
    explanation: r`Fe is limiting (8.0/4 = 2.0 against 9.0/3 = 3.0), and 8.0 mol Fe × (2/4) = 4.0 mol of Fe₂O₃. Six moles comes from the excess reagent, 9.0 mol O₂ × (2/3), which can never set the yield. Eight moles assumes a 1 : 1 ratio with Fe, and 10 mol adds the two separate predictions.`,
  },
  [r`Which numbers in a calculation never limit significant figures?`]: {
    question: r`A 2.50 g sample of A (molar mass 50.00 g/mol) reacts completely by A → 2B. How should the moles of B be reported?`,
    options: [r`0.1 mol: one figure, set by the coefficient 2`, r`0.100 mol: three figures, set by the 2.50 g`, r`0.1000 mol: four figures, set by the 50.00`, r`0.10 mol: two figures, set by leading zeros`],
    correctAnswer: 1,
    explanation: r`2.50/50.00 = 0.0500 mol of A, and twice that is 0.100 mol of B; the least precise measurement, 2.50 g, allows three figures. The coefficient 2 is exact and never limits precision. Four figures follows the more precise molar mass instead of the less precise mass, and leading zeros are placeholders that do not count at all.`,
  },
  [r`One hemoglobin tetramer binds {{c1::4}} $O_2$ molecules, so one mole of Hb carries {{c2::4 moles}} of oxygen.`]: {
    question: r`A blood sample contains 0.50 mmol of hemoglobin tetramer that is fully saturated with oxygen. How many millimoles of O₂ molecules are released if every site unloads?`,
    options: [r`0.50 mmol`, r`4.0 mmol`, r`1.0 mmol`, r`2.0 mmol`],
    correctAnswer: 3,
    explanation: r`Each tetramer has four heme sites and carries four O₂, so 0.50 mmol × 4 = 2.0 mmol of O₂. Answering 0.50 mmol assumes one O₂ per tetramer, and 1.0 mmol assumes two. The 4.0 mmol answer counts oxygen atoms, eight per tetramer, instead of O₂ molecules.`,
  },
  [r`On a plot of gas evolved versus time, the plateau height is set by {{c1::the limiting reagent}} and the initial slope by {{c2::the rate}}.`]: {
    question: r`A strip of magnesium, the limiting reagent, is dropped into excess acid and the volume of H₂ is plotted against time. The run is repeated with an identical strip at a higher temperature. How does the new curve compare?`,
    options: [r`A steeper initial slope and a higher plateau`, r`The same initial slope and a higher plateau`, r`A steeper initial slope and the same plateau`, r`The same initial slope and the same plateau`],
    correctAnswer: 2,
    explanation: r`Temperature raises the rate, so the curve starts steeper, but the plateau is set by the amount of limiting magnesium, which has not changed. A higher plateau would need more magnesium, not more heat. An unchanged initial slope would mean temperature had no effect on rate.`,
  },
  [r`Distinguish percent yield, percent purity, and percent composition.`]: {
    question: r`A 0.40 g pain-relief tablet contains 0.32 g of aspirin; the rest is binder. Which term names the figure of 80% that describes this tablet?`,
    options: [r`Percent purity`, r`Percent yield`, r`Percent composition`, r`Mole fraction`],
    correctAnswer: 0,
    explanation: r`The fraction of a sample that is the named compound is its percent purity: 0.32/0.40 = 80%. Percent yield compares product obtained with product expected from a reaction, and no reaction is described. Percent composition is the fixed mass share of an element within a formula, and a mole fraction would need moles of aspirin and binder, not masses.`,
  },
  [r`What estimation habit keeps stoichiometry fast on test day?`]: {
    question: r`A solution is made from 8.9 g of glucose (molar mass 180.16 g/mol). By rounding and fixing the power of ten, which answer is the number of moles of glucose?`,
    options: [r`0.49 mol`, r`4.9 mol`, r`0.049 mol`, r`20 mol`],
    correctAnswer: 2,
    explanation: r`Rounding to 9/180 gives 0.05, so only 0.049 mol has the right power of ten. The answers 0.49 and 4.9 mol have the right digits with the decimal point misplaced by one and two places. Twenty comes from inverting the division to 180/9.`,
  },
  [r`A hydrate is heated to constant mass and loses water. What does the mass lost let you calculate?`]: {
    question: r`A 2.46 g sample of MgSO₄·nH₂O is heated to constant mass, leaving 1.20 g of anhydrous MgSO₄ (120 g/mol). Water is 18 g/mol. What is n?`,
    options: [r`n = 1`, r`n = 7`, r`n = 14`, r`n = 2`],
    correctAnswer: 1,
    explanation: r`The mass lost is 2.46 − 1.20 = 1.26 g of water, or 1.26/18 = 0.070 mol, and the salt is 1.20/120 = 0.010 mol, so n = 0.070/0.010 = 7. Taking the mass ratio 1.26 : 1.20 gives about 1, and dividing the starting mass by the final mass gives about 2. Fourteen counts hydrogen atoms instead of water molecules.`,
  },
  [r`Balanced glucose combustion is $C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O$, so the respiratory quotient is {{c1::1.0}}.`]: {
    question: r`Over one hour a resting subject consumes 10 mol of O₂ and exhales 7 mol of CO₂. What is the respiratory quotient, and which fuel is mainly being burned?`,
    options: [r`RQ = 1.4, mainly fat`, r`RQ = 0.7, mainly carbohydrate`, r`RQ = 1.4, mainly carbohydrate`, r`RQ = 0.7, mainly fat`],
    correctAnswer: 3,
    explanation: r`RQ is CO₂ produced over O₂ consumed, 7/10 = 0.7, the value for fat, whose reduced carbons need extra oxygen. An RQ of 1.4 inverts the ratio. Carbohydrate gives an RQ of 1.0, because glucose combustion makes 6 CO₂ for every 6 O₂.`,
  },
  [r`Energy density anchors: carbohydrate and protein give about {{c1::4 kcal/g}} while fat gives about {{c2::9 kcal/g}}.`]: {
    question: r`A snack bar contains 20 g of carbohydrate, 5 g of protein and 10 g of fat. About how much energy does it provide?`,
    options: [r`240 kcal`, r`190 kcal`, r`140 kcal`, r`315 kcal`],
    correctAnswer: 1,
    explanation: r`Carbohydrate and protein give about 4 kcal/g and fat about 9 kcal/g: 80 + 20 + 90 = 190 kcal. Swapping the carbohydrate and fat values gives 180 + 20 + 40 = 240 kcal. Using 4 kcal/g for everything gives 140 kcal, and using 9 kcal/g for everything gives 315 kcal.`,
  },
}
