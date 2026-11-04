export const mcatThermoPart1Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo1-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 1 of 5 — Enthalpy ($\\Delta H$) & Hess's Law**

## System vs. Surroundings

- **System:** The reaction or process under study
- **Surroundings:** Everything else (including the calorimeter/solution)
- **First Law of Thermodynamics:** Energy is conserved: $\\Delta E_{\\text{universe}} = 0$; $\\Delta E_{\\text{sys}} = -\\Delta E_{\\text{surr}}$

## Enthalpy ($H$)

**Enthalpy change** $\\Delta H$ = heat transferred at constant pressure, written $q_p$: $\\Delta H = q_p$.

$$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$$

| $\\Delta H$ | Name | Energy transfer |
|------------|------|----------------|
| Negative ($\\Delta H < 0$) | Exothermic | Releases heat to surroundings |
| Positive ($\\Delta H > 0$) | Endothermic | Absorbs heat from surroundings |

**Calorimetry at constant pressure:**

$$q = mc\\Delta T$$

where $m$ = mass (g), $c$ = specific heat (J/g·°C), $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$.

For the **reaction:** $\\Delta H_{\\text{rxn}} = -q_{\\text{solution}}$ (the sign flip — if the solution warms, the reaction is exothermic)

### Worked Example — Coffee-Cup Calorimetry

**Problem 1.** Dissolving $5.0$ g of $\\text{NH}_4\\text{NO}_3$ ($M = 80.0$ g/mol) in water gives $105.0$ g of solution, which cools from $25.0$°C to $21.3$°C. Take $c = 4.18$ J/g·°C.

- **(a)** How much heat does the solution gain or lose?
- **(b)** How much heat does the dissolving process absorb or release?
- **(c)** What is $\\Delta H$ per mole of $\\text{NH}_4\\text{NO}_3$, and is dissolving it endothermic or exothermic?

**(a) Heat for the solution.** $q_{\\text{soln}} = mc\\Delta T = (105.0)(4.18)(21.3 - 25.0) = (105.0)(4.18)(-3.7) \\approx -1620$ J. The solution LOST heat.

**(b) Heat for the process.** Flip the sign: $q_{\\text{rxn}} = -q_{\\text{soln}} \\approx +1620$ J. The dissolving absorbed exactly the heat the water lost.

**(c) Per mole.** $n = 5.0/80.0 = 0.0625$ mol, so with $+1620$ J from (b), $\\Delta H = \\dfrac{+1620\\;\\text{J}}{0.0625\\;\\text{mol}} \\approx +26$ kJ/mol. Endothermic, which is why an instant cold pack feels cold.

## Standard Enthalpy of Formation ($\\Delta H°_f$)

$\\Delta H°_f$ = enthalpy change when 1 mole of a compound is formed from its elements in their standard states.

By convention: $\\Delta H°_f = 0$ for pure elements in standard states.

**From formation enthalpies** (Hess's Law applied to formation reactions):
$$\\Delta H°_{\\text{rxn}} = \\sum n \\Delta H°_f(\\text{products}) - \\sum m \\Delta H°_f(\\text{reactants})$$

## Hess's Law (Path Independence)

Enthalpy is a **state function** — $\\Delta H$ depends only on initial and final states, not the path.

**Method:** Reactions can be added/subtracted like algebraic equations to obtain a target reaction.

**Rules for manipulating reactions:**
1. If a reaction is **reversed**, flip the sign of $\\Delta H$
2. If a reaction is **multiplied** by a factor, multiply $\\Delta H$ by the same factor

### Worked Example — Hess's Law: Carbon Monoxide From Two Combustions

**Problem 1.** Find $\\Delta H$ for $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}(g)$ from two measured reactions:

(1) $\\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g)$, $\\Delta H_1 = -393.5$ kJ; (2) $\\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}_2(g)$, $\\Delta H_2 = -283.0$ kJ

- **(a)** Which given reaction must be reversed, and what is its new $\\Delta H$?
- **(b)** What is left after the reversed reaction is added to (1)?
- **(c)** What is $\\Delta H$ for the target reaction?

**(a) Reverse (2).** CO must end up as a product, so reverse (2): $\\text{CO}_2(g) \\to \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g)$, and its sign flips to $\\Delta H = +283.0$ kJ. Reaction (1) already has C on the left, so it stays as written.

**(b) Add and cancel.** Adding the reversed (2) to (1):

$$\\text{C}(s) + \\text{O}_2 + \\text{CO}_2 \\to \\text{CO}_2 + \\text{CO} + \\frac{1}{2}\\text{O}_2$$

$\\text{CO}_2$ cancels, and $\\frac{1}{2}\\text{O}_2$ on the right cancels half of the $\\text{O}_2$ on the left, leaving the target: $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}(g)$.

**(c) Add the $\\Delta H$ values.** With $+283.0$ kJ from (a): $\\Delta H = -393.5 + 283.0 = \\mathbf{-110.5\\text{ kJ}}$. Burning carbon always makes some $\\text{CO}_2$, so this $\\Delta H$ cannot be measured directly; Hess's Law gets it from two that can.

## Bond Enthalpy Approximation

$$\\Delta H_{\\text{rxn}} \\approx \\sum (\\text{bonds broken}) - \\sum (\\text{bonds formed})$$

Breaking bonds requires energy (+); forming bonds releases energy (−). This gives an estimate; less accurate than using $\\Delta H°_f$ values.

### Worked Example — Estimating $\\Delta H$ From Bond Enthalpies

**Problem 1.** Estimate $\\Delta H$ for $\\text{H}_2(g) + \\text{Cl}_2(g) \\to 2\\text{HCl}(g)$ from average bond enthalpies: H–H $436$, Cl–Cl $242$, H–Cl $431$ kJ/mol.

- **(a)** How much energy goes into breaking the reactant bonds?
- **(b)** How much energy is released forming the product bonds?
- **(c)** What is the estimated $\\Delta H$, and is the reaction exothermic or endothermic?

**(a) Bonds broken.** One H–H and one Cl–Cl bond: $436 + 242 = 678$ kJ absorbed.

**(b) Bonds formed.** Two H–Cl bonds: $2 \\times 431 = 862$ kJ released.

**(c) The estimate.** With $678$ kJ from (a) and $862$ kJ from (b): $\\Delta H \\approx 678 - 862 = \\mathbf{-184\\text{ kJ}}$. Exothermic, because the bonds formed are stronger than the bonds broken. Note the order: broken minus formed, the reverse of products minus reactants.
`
    },
    {
      id: 'thermo1-quiz',
      type: 'multiple-choice' as const,
      content: `**Enthalpy & Hess's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `50.0 g of water in a calorimeter warms from 22.0°C to 28.0°C when a reaction occurs. Specific heat of water = 4.18 J/g·°C. What is $\\Delta H_{\\text{rxn}}$ (assuming the solution mass equals water mass)?`,
            options: [
              `+1254 J (endothermic)`,
              `−1254 J (exothermic)`,
              `−5852 J (exothermic)`,
              `−1254 kJ (exothermic)`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$q_{\\text{soln}} = mc\\Delta T = 50.0 \\times 4.18 \\times (28.0 - 22.0) = 50.0 \\times 4.18 \\times 6.0 = +1254$ J. $\\Delta H_{\\text{rxn}} = -q_{\\text{soln}} = \\mathbf{-1254\\text{ J}}$ (exothermic — reaction heats the solution). A positive value forgets the sign flip; $-5852$ J uses the final temperature ($28.0$°C) in place of $\\Delta T$; and $-1254$ kJ is a thousand times too large: the product of grams, J/g·°C and °C is in joules.`
          },
          {
            question: `Using $\\Delta H°_f$: $\\Delta H°_f[\\text{CO}_2] = -393.5$ kJ/mol; $\\Delta H°_f[\\text{H}_2\\text{O}(l)] = -285.8$ kJ/mol; $\\Delta H°_f[\\text{C}_3\\text{H}_8] = -103.8$ kJ/mol. Calculate $\\Delta H°$ for propane combustion: $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\to 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$.`,
            options: [`−2220 kJ`, `−2044 kJ`, `+2220 kJ`, `+2044 kJ`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\Delta H° = [3(-393.5) + 4(-285.8)] - [(-103.8) + 5(0)]$. $= [-1180.5 + (-1143.2)] - [-103.8] = -2323.7 + 103.8 = \\mathbf{-2220\\text{ kJ}}$. $-2044$ kJ uses the value for water as a gas ($-241.8$ kJ/mol) although the equation forms liquid water, and the positive values subtract products from reactants instead of reactants from products.`
          },
          {
            question: `For a Hess's Law problem, reaction A has $\\Delta H_A = +100$ kJ. You need to reverse it to arrive at the target reaction. What is the $\\Delta H$ of the reversed reaction?`,
            options: [`+100 kJ`, `−100 kJ`, `+200 kJ`, `0 kJ`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Reversing a reaction **changes the sign** of $\\Delta H$: $\\Delta H_{\\text{reversed}} = \\mathbf{-100\\text{ kJ}}$. This reflects the fact that enthalpy is a state function — the path from products to reactants is exactly equal and opposite. Keeping $+100$ kJ forgets the sign change, $+200$ kJ treats reversing as doubling, and $0$ kJ wrongly assumes a reversed reaction cancels to nothing.`
          },
          {
            question: `Which of the following reactions defines the standard enthalpy of formation of $\\text{NH}_3(g)$?`,
            options: [
              `$\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\to \\text{NH}_3(g)$`,
              `$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$`,
              `$2\\text{NH}_3(g) \\to \\text{N}_2(g) + 3\\text{H}_2(g)$`,
              `$\\text{N}(g) + 3\\text{H}(g) \\to \\text{NH}_3(g)$`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The standard enthalpy of formation is defined as the enthalpy change forming **1 mole** of a compound from its elements in their **standard states**. Only the equation forming 1 mol $\\text{NH}_3$ from $\\frac{1}{2}\\text{N}_2$ and $\\frac{3}{2}\\text{H}_2$ fits. The whole-number equation makes 2 mol, the decomposition runs the wrong way, and gaseous N and H atoms are not the elements' standard states.`
          },
          {
            question: `A reaction at constant pressure absorbs 500 J of heat from the surroundings. Which statement is correct?`,
            options: [
              `$\\Delta H_{\\text{rxn}} = -500$ J; endothermic`,
              `$\\Delta H_{\\text{rxn}} = +500$ J; endothermic`,
              `$\\Delta H_{\\text{rxn}} = +500$ J; exothermic`,
              `$\\Delta H_{\\text{rxn}} = -500$ J; exothermic`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `"Absorbs heat from surroundings" means the reaction takes in energy → **endothermic**. At constant pressure the heat absorbed, $q_p$, equals $\\Delta H$: $\\Delta H_{\\text{rxn}} = q_p = \\mathbf{+500\\text{ J}}$ (positive = endothermic).`
          }
        ]
      }
    },
    {
      id: 'thermo1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Sign of $\\Delta H$.** $\\Delta H < 0$ is exothermic (heat released); $\\Delta H > 0$ is endothermic (heat absorbed).
- **Calorimetry.** $q_{\\text{soln}} = mc\\Delta T$, then $\\Delta H_{\\text{rxn}} = -q_{\\text{soln}}$: a solution that warms means an exothermic reaction.
- **Hess's Law.** $\\Delta H$ is a state function: add reactions, flip the sign to reverse one, scale $\\Delta H$ to scale one.
- **Formation enthalpies.** $\\Delta H°_{\\text{rxn}} = \\sum n\\Delta H°_f(\\text{products}) - \\sum m\\Delta H°_f(\\text{reactants})$.

**Common traps**

- **Skipping the sign flip.** The solution's $q$ is not the reaction's: if the water warms, $\\Delta H_{\\text{rxn}}$ is negative.
- **Bond enthalpies backwards.** Bond estimates use broken minus formed, the reverse of products minus reactants for $\\Delta H°_f$.
- **Dropping coefficients.** Multiply each $\\Delta H°_f$ by its coefficient, and scale $\\Delta H$ whenever you scale a reaction.
- **Nonzero element values.** Elements in standard states, such as $\\text{O}_2(g)$ and $\\text{C}(s)$, have $\\Delta H°_f = 0$; $\\text{N}(g)$ atoms do not.
`
    }
  ]
};
