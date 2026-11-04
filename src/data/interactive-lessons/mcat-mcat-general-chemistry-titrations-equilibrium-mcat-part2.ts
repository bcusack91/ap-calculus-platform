export const mcatTitrationsEqPart2Data = {
  topicSlug: 'mcat-general-chemistry-titrations-equilibrium-mcat',
  sections: [
    {
      id: 'ab5-intro',
      type: 'text' as const,
      content: `# Titrations, Equilibrium & Solubility

**Part 2 of 2 — Equilibrium: $K_c$, $K_p$, Le Chatelier's Principle & $K_{sp}$**

## Equilibrium Constant Expressions

For a reaction: $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$

$$K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$

**Rules:**
- Pure solids and liquids: NOT included in $K$ expression
- Only gases and aqueous species are included
- $K > 1$: products favored; $K < 1$: reactants favored

## $K_p$ vs $K_c$

For reactions involving gases:
$$K_p = K_c (RT)^{\\Delta n}$$

where $\\Delta n = \\text{moles gaseous products} - \\text{moles gaseous reactants}$.

$K_p = K_c$ whenever $\\Delta n = 0$, at any temperature.

## Reaction Quotient Q

$$Q = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b} \\quad (\\text{at any point, not just equilibrium})$$

| Comparison | Direction of reaction |
|-----------|-----------------------|
| $Q < K$ | Shifts **right** (toward products) |
| $Q = K$ | At equilibrium |
| $Q > K$ | Shifts **left** (toward reactants) |

## Le Chatelier's Principle

If a system at equilibrium is disturbed, it shifts to **partially counteract** the disturbance.

| Disturbance | Shift direction | $K$ changes? |
|------------|----------------|-------------|
| Add reactant | Right (toward products) | No |
| Remove product | Right (toward products) | No |
| Increase pressure (compress) | Toward fewer moles of gas | No |
| Increase temperature | Toward endothermic direction | **Yes** |
| Decrease temperature | Toward exothermic direction | **Yes** |
| Add inert gas (constant V) | No shift | No |
| Add catalyst | No shift (faster equilibrium) | No |

**Key distinction:** Adding or removing species and changing pressure shift the position of equilibrium but do **not** change $K$. Only temperature changes $K$.

## Solubility Product ($K_{sp}$)

For a sparingly soluble salt: $\\text{MX}(s) \\rightleftharpoons \\text{M}^+(aq) + \\text{X}^-(aq)$

$$K_{sp} = [\\text{M}^+][\\text{X}^-]$$

For $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\text{F}^-$:

$$K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2$$

**Molar solubility:** If $s$ = moles dissolved per liter, then for $\\text{CaF}_2$:
$[\\text{Ca}^{2+}] = s$ and $[\\text{F}^-] = 2s$

$$K_{sp} = (s)(2s)^2 = 4s^3$$

### Common Ion Effect

Adding a common ion (e.g., adding NaF to a $\\text{CaF}_2$ solution) shifts equilibrium **left**, **decreasing** solubility.

### Precipitation Criterion

- If $Q_{sp} > K_{sp}$: **precipitation occurs** (solution is supersaturated)
- If $Q_{sp} < K_{sp}$: no precipitate (solution is unsaturated)
- If $Q_{sp} = K_{sp}$: saturated, at equilibrium

### Worked Example — Q, Le Chatelier and Molar Solubility

**Problem 1.** The reaction $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$ is endothermic, with $K_c = 5.0 \\times 10^{-3}$. A flask holds $0.20$ M $\\text{N}_2\\text{O}_4$ and $0.020$ M $\\text{NO}_2$.

- **(a)** What is $Q$?
- **(b)** Which way does the reaction shift to reach equilibrium?
- **(c)** Once at equilibrium, which way does compressing the flask shift it, and does $K$ change?
- **(d)** Which way does heating shift it, and does $K$ change?

**(a) Reaction quotient.** $Q = \\dfrac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\dfrac{(0.020)^2}{0.20} = \\dfrac{4.0 \\times 10^{-4}}{0.20} = 2.0 \\times 10^{-3}$.

**(b) Direction.** With $Q = 2.0 \\times 10^{-3}$ from (a) below $K = 5.0 \\times 10^{-3}$, there are too few products: the reaction shifts **right**, making $\\text{NO}_2$.

**(c) Compression.** The left side has 1 mole of gas and the right side 2, so compression shifts the equilibrium **left**, toward fewer gas moles. $K$ is unchanged.

**(d) Heating.** The forward reaction is endothermic, so heat acts like a reactant: the equilibrium shifts **right** and $K$ **increases**. Temperature is the only change here that alters $K$.

**Problem 2.** $\\text{CaF}_2$ has $K_{sp} = 4.0 \\times 10^{-11}$, where $K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2$.

- **(a)** What is its molar solubility $s$ in pure water?
- **(b)** What is $s$ in $0.10$ M NaF, and how does it compare?
- **(c)** Would $1.0 \\times 10^{-3}$ M $\\text{Ca}^{2+}$ in this $0.10$ M NaF form a precipitate?

**(a) In pure water.** $[\\text{Ca}^{2+}] = s$ and $[\\text{F}^-] = 2s$, so $K_{sp} = (s)(2s)^2 = 4s^3 = 4.0 \\times 10^{-11}$. Then $s^3 = 1.0 \\times 10^{-11} = 10 \\times 10^{-12}$, so $s = \\sqrt[3]{10} \\times 10^{-4} \\approx 2.2 \\times 10^{-4}$ M.

**(b) Common ion.** $[\\text{F}^-] \\approx 0.10$ M, since the $2s$ from $\\text{CaF}_2$ is tiny. So $s = (4.0 \\times 10^{-11})/(0.10)^2 = 4.0 \\times 10^{-9}$ M, against $2.2 \\times 10^{-4}$ M from (a): the common ion cuts solubility about 50,000-fold.

**(c) Precipitation test.** $Q_{sp} = (1.0 \\times 10^{-3})(0.10)^2 = 1.0 \\times 10^{-5}$, far above $K_{sp} = 4.0 \\times 10^{-11}$, so $\\text{CaF}_2$ precipitates.
`
    },
    {
      id: 'ab5-quiz',
      type: 'multiple-choice' as const,
      content: `**Equilibrium, Le Chatelier & $K_{sp}$** 🎯`,
      exercise: {
        questions: [
          {
            question: `For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $K_c = 6.0 \\times 10^{-2}$. If $[\\text{N}_2] = [\\text{H}_2] = [\\text{NH}_3] = 1.0$ M, what is $Q$, and which way does the reaction shift?`,
            options: [
              `$Q = 1.0$; shifts right`,
              `$Q = 1.0$; shifts left`,
              `$Q = 16.7$; shifts right`,
              `$Q = 16.7$; shifts left`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$Q = [\\text{NH}_3]^2/([\\text{N}_2][\\text{H}_2]^3) = (1.0)^2/((1.0)(1.0)^3) = 1.0$. Since $Q(1.0) > K_c(0.060)$, the reaction shifts **left** (toward reactants) to decrease [$NH_{3}$] and increase [$N_{2}$] and [$H_{2}$]. The value 16.7 is $1/K_c$, a slip that computes the reverse reaction's constant instead of $Q$; and with $Q > K$ the shift can never be right.`
          },
          {
            question: `The reaction $\\text{A} \\rightleftharpoons 2\\text{B}$ is endothermic. What happens to $K$ when temperature increases?`,
            options: [
              `$K$ decreases (shifts left)`,
              `$K$ increases (shifts right)`,
              `$K$ is unchanged (only concentration changes)`,
              `$K$ decreases, then increases`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Temperature changes are the only factor that changes $K$. For an **endothermic** reaction, heat is a "reactant." Increasing temperature shifts equilibrium **right** (toward products), so $K$ **increases**.`
          },
          {
            question: `$K_{sp}$ of AgCl = $1.8 \\times 10^{-10}$. What is the molar solubility of AgCl in pure water?`,
            options: [
              `$1.8 \\times 10^{-10}$ M`,
              `$1.3 \\times 10^{-5}$ M`,
              `$9.0 \\times 10^{-11}$ M`,
              `$3.6 \\times 10^{-5}$ M`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\text{AgCl} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$. Let $s$ = molar solubility: $K_{sp} = s \\cdot s = s^2$. $s = \\sqrt{1.8 \\times 10^{-10}} = \\mathbf{1.3 \\times 10^{-5}}\\text{ M}$.`
          },
          {
            question: `NaCl (a soluble salt) is added to a saturated AgCl solution. What happens?`,
            options: [
              `More AgCl dissolves (common ion increases solubility)`,
              `No change — NaCl is not involved in the AgCl equilibrium`,
              `More AgCl precipitates ($Cl^{-}$ is a common ion)`,
              `The solution becomes unsaturated`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Adding NaCl introduces $\\text{Cl}^-$ (common ion). This increases $[\\text{Cl}^-]$, causing $Q > K_{sp}$, and equilibrium shifts left — **more AgCl precipitates out**, decreasing solubility. This is the **common ion effect**.`
          },
          {
            question: `For the reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, increasing total pressure (at constant T) shifts equilibrium in which direction?`,
            options: [
              `Left — toward more moles of gas`,
              `Right — toward fewer moles of gas`,
              `No shift — pressure does not affect equilibrium`,
              `Right — because the reaction is exothermic`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta n = 2 - (2+1) = -1$: products side has fewer gas moles. Increasing pressure shifts equilibrium toward the side with **fewer moles of gas** → shifts **right** toward $\\text{SO}_3$. "Left" reverses the rule, pressure does shift any reaction with $\\Delta n \\neq 0$, and the exothermic reason is wrong because heat is not changing here.`
          },
          {
            question: `Which change does NOT affect the value of $K$ for a reaction?`,
            options: [
              `Adding a catalyst to the reaction`,
              `Doubling every coefficient in the equation`,
              `Heating the reaction mixture by 20 °C`,
              `Writing the equation in the reverse direction`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `A catalyst speeds up both forward and reverse reactions equally, reaching equilibrium faster — but $K$ **does not change**. Heating changes $K$, because temperature is the one condition that does. Rewriting the equation also changes $K$: doubling every coefficient squares $K$, and reversing the equation gives $1/K$. Adding reactants, products, or changing pressure shift the position of equilibrium but not $K$.`
          },
          {
            question: `$K_{sp}$ of $\\text{Ca}_3(\\text{PO}_4)_2 = 2.1 \\times 10^{-33}$. The dissolution is $\\text{Ca}_3(\\text{PO}_4)_2 \\rightleftharpoons 3\\text{Ca}^{2+} + 2\\text{PO}_4^{3-}$. If $s$ is the molar solubility, which expression equals $K_{sp}$?`,
            options: [
              `$72s^5$`,
              `$5s^5$`,
              `$108s^5$`,
              `$36s^5$`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$[\\text{Ca}^{2+}] = 3s$, $[\\text{PO}_4^{3-}] = 2s$. $K_{sp} = (3s)^3(2s)^2 = 27s^3 \\cdot 4s^2 = \\mathbf{108s^5}$. Swapping the exponents, $(3s)^2(2s)^3$, gives $72s^5$; $5s^5$ just counts the five ions and drops the coefficients; $36s^5$ squares the 3 instead of cubing it.`
          }
        ]
      }
    },
    {
      id: 'ab5-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Compression favours fewer gas moles.** Squeezing a gas mixture shifts it toward the side with fewer moles of gas.
- **Q moves toward K.** $Q < K$ shifts right and $Q > K$ left; for a salt, $Q_{sp} > K_{sp}$ means a precipitate forms.
- **Only temperature changes K.** Concentration and pressure move the position; heating favors the endothermic side.
- **Ksp follows stoichiometry.** Raise each ion to its coefficient: $\\text{CaF}_2$ gives $K_{sp} = (s)(2s)^2 = 4s^3$.

**Common traps**

- **Catalysts shift equilibrium.** A catalyst speeds both directions equally; neither the position nor $K$ changes.
- **Inert gas shifts equilibrium.** Adding an inert gas at constant volume changes no partial pressure, so nothing shifts.
- **Common ion, more dissolving.** A shared ion pushes dissolution LEFT, so the salt becomes LESS soluble.
- **Kp always equals Kc.** Only when $\\Delta n = 0$; otherwise $K_p = K_c(RT)^{\\Delta n}$.

## Titrations, Equilibrium & Solubility — Complete Topic Summary

**Part 1:** Titration curves, equivalence vs half-equivalence point (pH = pKa), indicators, strong/weak acid titration differences, polyprotic titrations.

**Part 2:** Kc, Kp, Δn, reaction quotient Q, Le Chatelier's principle (only T changes K), Ksp, molar solubility, common ion effect, precipitation criterion (Q vs Ksp).

### Most Tested MCAT Concepts
1. Half-equivalence point: pH = pKa (titrations)
2. Le Chatelier shifts vs. K changes (only T changes K)
3. Common ion effect reduces solubility
4. pH > 7 at equivalence for weak acid + strong base titration
5. Ksp → molar solubility (account for stoichiometric coefficients)
`
    }
  ]
};
