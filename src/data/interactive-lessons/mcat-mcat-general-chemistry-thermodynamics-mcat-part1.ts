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

**Enthalpy change** $\\Delta H$ = heat transferred at constant pressure.

$$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$$

| $\\Delta H$ | Name | Energy transfer |
|------------|------|----------------|
| Negative ($\\Delta H < 0$) | Exothermic | Releases heat to surroundings |
| Positive ($\\Delta H > 0$) | Endothermic | Absorbs heat from surroundings |

**Calorimetry at constant pressure:**

$$q = mc\\Delta T$$

where $m$ = mass (g), $c$ = specific heat (J/g·°C), $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$.

For the **reaction:** $\\Delta H_{\\text{rxn}} = -q_{\\text{solution}}$ (the sign flip — if the solution warms, the reaction is exothermic)

## Standard Enthalpy of Formation ($\\Delta H°_f$)

$\\Delta H°_f$ = enthalpy change when 1 mole of a compound is formed from its elements in their standard states.

By convention: $\\Delta H°_f = 0$ for pure elements in standard states.

**Hess's Law:**
$$\\Delta H°_{\\text{rxn}} = \\sum n \\Delta H°_f(\\text{products}) - \\sum m \\Delta H°_f(\\text{reactants})$$

## Hess's Law (Path Independence)

Enthalpy is a **state function** — $\\Delta H$ depends only on initial and final states, not the path.

**Method:** Reactions can be added/subtracted like algebraic equations to obtain a target reaction.

**Rules for manipulating reactions:**
1. If a reaction is **reversed**, flip the sign of $\\Delta H$
2. If a reaction is **multiplied** by a factor, multiply $\\Delta H$ by the same factor

### Worked Example

Find $\\Delta H$ for: $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}(g)$

Given:
- (1) $\\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g)$; $\\Delta H_1 = -393.5$ kJ
- (2) $\\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}_2(g)$; $\\Delta H_2 = -283.0$ kJ

Reverse reaction (2): $\\text{CO}_2(g) \\to \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g)$; $\\Delta H = +283.0$ kJ

Add to reaction (1):

$$\\text{C}(s) + \\text{O}_2 + \\text{CO}_2 \\to \\text{CO}_2 + \\text{CO} + \\frac{1}{2}\\text{O}_2$$

$$\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\to \\text{CO}(g)$$

$$\\Delta H = -393.5 + 283.0 = \\mathbf{-110.5\\text{ kJ}}$$

## Bond Enthalpy Approximation

$$\\Delta H_{\\text{rxn}} \\approx \\sum (\\text{bonds broken}) - \\sum (\\text{bonds formed})$$

Breaking bonds requires energy (+); forming bonds releases energy (−). This gives an estimate; less accurate than using $\\Delta H°_f$ values.
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
              `+4180 J (endothermic)`,
              `−4180 J (exothermic)`
            ],
            correctAnswer: 1,
            explanation: `$q_{\\text{soln}} = mc\\Delta T = 50.0 \\times 4.18 \\times (28.0 - 22.0) = 50.0 \\times 4.18 \\times 6.0 = +1254$ J. $\\Delta H_{\\text{rxn}} = -q_{\\text{soln}} = \\mathbf{-1254\\text{ J}}$ (exothermic — reaction heats the solution).`
          },
          {
            question: `Using $\\Delta H°_f$: $\\Delta H°_f[\\text{CO}_2] = -393.5$ kJ/mol; $\\Delta H°_f[\\text{H}_2\\text{O}(l)] = -285.8$ kJ/mol; $\\Delta H°_f[\\text{C}_3\\text{H}_8] = -103.8$ kJ/mol. Calculate $\\Delta H°$ for propane combustion: $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\to 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$.`,
            options: [`−2220 kJ`, `−2044 kJ`, `+2220 kJ`, `+2044 kJ`],
            correctAnswer: 0,
            explanation: `$\\Delta H° = [3(-393.5) + 4(-285.8)] - [(-103.8) + 5(0)]$. $= [-1180.5 + (-1143.2)] - [-103.8] = -2323.7 + 103.8 = \\mathbf{-2220\\text{ kJ}}$.`
          },
          {
            question: `For a Hess's Law problem, reaction A has $\\Delta H_A = +100$ kJ. You need to reverse it to arrive at the target reaction. What is the $\\Delta H$ of the reversed reaction?`,
            options: [`+100 kJ`, `−100 kJ`, `+200 kJ`, `0 kJ`],
            correctAnswer: 1,
            explanation: `Reversing a reaction **changes the sign** of $\\Delta H$: $\\Delta H_{\\text{reversed}} = \\mathbf{-100\\text{ kJ}}$. This reflects the fact that enthalpy is a state function — the path from products to reactants is exactly equal and opposite.`
          },
          {
            question: `Which of the following reactions defines the standard enthalpy of formation of $\\text{NH}_3(g)$?`,
            options: [
              `$\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\to \\text{NH}_3(g)$`,
              `$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$`,
              `$\\text{NH}_3(g) \\to \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$`,
              `$\\text{N}(g) + 3\\text{H}(g) \\to \\text{NH}_3(g)$`
            ],
            correctAnswer: 0,
            explanation: `The standard enthalpy of formation is defined as the enthalpy change forming **1 mole** of a compound from its elements in their **standard states**. Only option A fits: $\\frac{1}{2}\\text{N}_2 + \\frac{3}{2}\\text{H}_2 \\to \\text{NH}_3$ (1 mol product, elements in standard form).`
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
            explanation: `"Absorbs heat from surroundings" means the reaction takes in energy → **endothermic**. $\\Delta H_{\\text{rxn}} = q_p = \\mathbf{+500\\text{ J}}$ (positive = endothermic).`
          }
        ]
      }
    },
    {
      id: 'thermo1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- $\\Delta H < 0$: exothermic (releases heat); $\\Delta H > 0$: endothermic (absorbs heat)
- Calorimetry: $q = mc\\Delta T$; $\\Delta H_{\\text{rxn}} = -q_{\\text{soln}}$
- Hess's Law: $\\Delta H$ is a state function; add reactions algebraically
- Reverse a reaction → flip sign of $\\Delta H$; multiply by factor → multiply $\\Delta H$
- Formation enthalpy: $\\Delta H°_{\\text{rxn}} = \\sum n\\Delta H°_f(\\text{products}) - \\sum m\\Delta H°_f(\\text{reactants})$
- $\\Delta H°_f = 0$ for elements in standard states
`
    }
  ]
};
