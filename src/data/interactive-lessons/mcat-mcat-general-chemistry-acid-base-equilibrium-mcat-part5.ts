export const mcatAcidBaseEqPart5Data = {
  topicSlug: 'mcat-general-chemistry-acid-base-equilibrium-mcat',
  sections: [
    {
      id: 'ab5-intro',
      type: 'text' as const,
      content: `# Acid-Base Chemistry & Equilibrium

**Part 5 of 5 — Equilibrium: $K_c$, $K_p$, Le Chatelier's Principle & $K_{sp}$**

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

At constant temperature, $K_p = K_c$ when $\\Delta n = 0$.

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

**Key distinction:** Adding or removing species, changing pressure all shift equilibrium but do **not** change $K$. Only temperature changes $K$.

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
              `$Q = 0.33$; shifts right`,
              `$Q = 0.33$; shifts left`
            ],
            correctAnswer: 1,
            explanation: `$Q = [\\text{NH}_3]^2/([\\text{N}_2][\\text{H}_2]^3) = (1.0)^2/((1.0)(1.0)^3) = 1.0$. Since $Q(1.0) > K_c(0.060)$, the reaction shifts **left** (toward reactants) to decrease [$NH_{3}$] and increase [$N_{2}$] and [$H_{2}$].`
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
            explanation: `$\\text{AgCl} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$. Let $s$ = molar solubility: $K_{sp} = s \\cdot s = s^2$. $s = \\sqrt{1.8 \\times 10^{-10}} = \\mathbf{1.3 \\times 10^{-5}}\\text{ M}$.`
          },
          {
            question: `NaCl (a soluble salt) is added to a saturated AgCl solution. What happens?`,
            options: [
              `More AgCl dissolves (common ion increases solubility)`,
              `No change — NaCl is not involved in the AgCl equilibrium`,
              `AgCl precipitation increases (common ion $Cl^{-}$ reduces solubility)`,
              `The solution becomes unsaturated`
            ],
            correctAnswer: 2,
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
            explanation: `$\\Delta n = 2 - (2+1) = -1$: products side has fewer gas moles. Increasing pressure shifts equilibrium toward the side with **fewer moles of gas** → shifts **right** toward $\\text{SO}_3$.`
          },
          {
            question: `Which change does NOT affect the value of $K$ for a reaction at constant temperature?`,
            options: [
              `Adding a catalyst`,
              `Increasing temperature`,
              `Decreasing temperature`,
              `Both A, B, and C are correct`
            ],
            correctAnswer: 0,
            explanation: `A catalyst speeds up both forward and reverse reactions equally, reaching equilibrium faster — but $K$ **does not change**. Only temperature changes $K$. Adding reactants, products, or changing pressure shift the position of equilibrium but not $K$.`
          },
          {
            question: `$K_{sp}$ of $\\text{Ca}_3(\\text{PO}_4)_2 = 2.1 \\times 10^{-33}$. The dissolution is $\\text{Ca}_3(\\text{PO}_4)_2 \\rightleftharpoons 3\\text{Ca}^{2+} + 2\\text{PO}_4^{3-}$. If $s$ is the molar solubility, which expression equals $K_{sp}$?`,
            options: [
              `$s^2$`,
              `$5s^5$`,
              `$108s^5$`,
              `$36s^5$`
            ],
            correctAnswer: 2,
            explanation: `$[\\text{Ca}^{2+}] = 3s$, $[\\text{PO}_4^{3-}] = 2s$. $K_{sp} = (3s)^3(2s)^2 = 27s^3 \\cdot 4s^2 = \\mathbf{108s^5}$.`
          }
        ]
      }
    },
    {
      id: 'ab5-summary',
      type: 'text' as const,
      content: `## Acid-Base & Equilibrium — Complete Topic Summary

**Part 1:** pH, pOH, Kw, strong vs weak acids/bases, pH calculation methods.

**Part 2:** Ka, Kb, pKa, Henderson-Hasselbalch equation, percent dissociation, polyprotic acids, amphiprotic species.

**Part 3:** Buffer mechanism (HA consumes $OH^{-}$; $A^{-}$ consumes $H^{+}$), buffer capacity, buffer range (pKa ± 1), bicarbonate buffer in blood, acid-base disturbances.

**Part 4:** Titration curves, equivalence vs half-equivalence point (pH = pKa), indicators, strong/weak acid titration differences, polyprotic titrations.

**Part 5:** Kc, Kp, Δn, reaction quotient Q, Le Chatelier's principle (only T changes K), Ksp, molar solubility, common ion effect, precipitation criterion (Q vs Ksp).

### Most Tested MCAT Concepts
1. Half-equivalence point: pH = pKa (titrations)
2. Le Chatelier shifts vs. K changes (only T changes K)
3. Common ion effect reduces solubility
4. Henderson-Hasselbalch for buffer pH
5. pH > 7 at equivalence for weak acid + strong base titration
6. Ksp → molar solubility (account for stoichiometric coefficients)
`
    }
  ]
};
