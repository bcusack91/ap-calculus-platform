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

**Rules:** only gases and aqueous species appear in the expression; pure solids and liquids are NOT included.

$K > 1$: products favored at equilibrium; $K < 1$: reactants favored.

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

**Why it works: every shift is $Q$ chasing $K$.** Adding a reactant enlarges the denominator of $Q$, so $Q < K$ and the reaction runs right until $Q$ climbs back to $K$. Compression raises every partial pressure by the same factor, and the side with more gas moles carries more factors, so shifting toward fewer moles brings $Q$ back; dilution does the opposite and favours the side with more dissolved particles. Temperature alone leaves $Q$ untouched and moves $K$ itself.

## Solubility Product ($K_{sp}$)

For a sparingly soluble salt: $\\text{MX}(s) \\rightleftharpoons \\text{M}^+(aq) + \\text{X}^-(aq)$

$$K_{sp} = [\\text{M}^+][\\text{X}^-]$$

For $\\text{CaF}_2(s) \\rightleftharpoons \\text{Ca}^{2+} + 2\\text{F}^-$:

$$K_{sp} = [\\text{Ca}^{2+}][\\text{F}^-]^2$$

**Molar solubility:** if $s$ = moles dissolved per liter, then for $\\text{CaF}_2$ $[\\text{Ca}^{2+}] = s$ and $[\\text{F}^-] = 2s$, so $K_{sp} = (s)(2s)^2 = 4s^3$.

### Common Ion Effect

Adding a common ion (e.g., adding NaF to a $\\text{CaF}_2$ solution) shifts equilibrium **left**, **decreasing** solubility.

### Precipitation Criterion

- If $Q_{sp} > K_{sp}$: **precipitation occurs** (solution is supersaturated)
- If $Q_{sp} < K_{sp}$: no precipitate (solution is unsaturated)
- If $Q_{sp} = K_{sp}$: saturated, at equilibrium
`
    },
    {
      id: 'ab5-worked',
      type: 'text' as const,
      content: `### Worked Example — Q, Le Chatelier and Molar Solubility

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
      id: 'ab5-ice',
      type: 'text' as const,
      content: `## ICE Tables: Finding Equilibrium Concentrations

Given $K$ and the starting amounts, find the equilibrium concentrations with an **ICE table**: Initial, Change, Equilibrium. The Change row follows the coefficients, with one unknown $x$.

For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ starting from $C$ M of $\\text{PCl}_5$ and no products:

| | $\\text{PCl}_5$ | $\\text{PCl}_3$ | $\\text{Cl}_2$ |
|---|---|---|---|
| Initial | $C$ | 0 | 0 |
| Change | $-x$ | $+x$ | $+x$ |
| Equilibrium | $C - x$ | $x$ | $x$ |

$$K_c = \\frac{x^2}{C - x}$$

**The small-x approximation.** When $K$ is tiny compared with $C$, very little reacts, so $C - x \\approx C$ and the equation collapses to $x \\approx \\sqrt{K_c C}$. Check it afterwards: the approximation is safe when $x/C < 5\\%$.

**When it fails.** If $K$ is comparable to $C$ (say $K = 0.1$ with $C = 0.1$ M), a large fraction reacts, $C - x$ is nowhere near $C$, and dropping $x$ overstates the products; the honest route is the quadratic. Products present at the start go into the Initial row, and comparing $Q$ with $K$ decides the signs in the Change row. The MCAT rarely asks for the quadratic, but it does ask whether the shortcut is justified.

## Solubility and pH

Whether a salt dissolves more in acid depends on its ANION. If the anion is the conjugate base of a weak acid, added $\\text{H}^+$ converts it to that acid ($\\text{F}^- \\to \\text{HF}$, $\\text{OH}^- \\to \\text{H}_2\\text{O}$, $\\text{CO}_3^{2-} \\to \\text{HCO}_3^- \\to \\text{H}_2\\text{CO}_3$). Removing a product ion drops $Q_{sp}$ below $K_{sp}$, so more solid dissolves: Le Chatelier applied to a salt. The anions of strong acids ($\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$, $\\text{NO}_3^-$) are not protonated at any ordinary pH, so AgCl is as insoluble in acid as in water.

| Salt | Anion | Solubility in acid |
|---|---|---|
| $\\text{CaF}_2$, $\\text{CaCO}_3$, $\\text{Ca}_3(\\text{PO}_4)_2$, $\\text{Mg(OH)}_2$ | conjugate base of a weak acid | rises sharply |
| AgCl, AgBr, AgI | anion of a strong acid | about the same |

The physiology follows: milk of magnesia, $\\text{Mg(OH)}_2$, barely dissolves in water but is cleared by stomach acid, and calcium phosphate stones form in alkaline urine, where phosphate stays unprotonated. The reverse is the **common-ion effect** in hydroxide form: raising the pH pushes $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+} + 2\\text{OH}^-$ left. A buffer fixes $[\\text{OH}^-]$, so the solubility is simply $K_{sp}/[\\text{OH}^-]^2$.`
    },
    {
      id: 'ab5-worked2',
      type: 'text' as const,
      content: `### Worked Example — An ICE Table and the Small-x Check

**Problem.** $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$ has $K_c = 1.0 \\times 10^{-4}$ at one temperature and $K_c = 1.0$ at a higher one. A flask starts with $1.0$ M $\\text{PCl}_5$ and no products.

- **(a)** In terms of $x$, what are the three equilibrium concentrations?
- **(b)** At the lower temperature, what is $[\\text{Cl}_2]$ at equilibrium?
- **(c)** Is the small-x approximation justified there?
- **(d)** At the higher temperature, what goes wrong with the same shortcut?

**(a) The table.** $\\text{PCl}_5$ loses $x$ while each product gains $x$: $[\\text{PCl}_5] = 1.0 - x$ and $[\\text{PCl}_3] = [\\text{Cl}_2] = x$, so $K_c = x^2/(1.0 - x)$.

**(b) Small x.** With $K_c = 1.0 \\times 10^{-4}$ tiny, take $1.0 - x \\approx 1.0$: $x^2 \\approx 1.0 \\times 10^{-4}$, so $x = [\\text{Cl}_2] = 1.0 \\times 10^{-2}$ M.

**(c) The 5% check.** $x/C = 0.010/1.0 = 1\\%$, under 5%, so dropping $x$ changed nothing that matters: $[\\text{PCl}_5]$ is $0.99$ M, as good as the $1.0$ M assumed.

**(d) When it fails.** With $K_c = 1.0$ the shortcut gives $x^2 = 1.0$, so $x = 1.0$ M: ALL of the $\\text{PCl}_5$ gone, which is impossible. $K$ is not small next to $C$, so solve $x^2 + x - 1.0 = 0$ exactly: $x \\approx 0.62$ M, with $0.38$ M $\\text{PCl}_5$ left.`
    },
    {
      id: 'ab5-worked3',
      type: 'text' as const,
      content: `### Worked Example — Magnesium Hydroxide in Base and in Acid

**Problem.** Milk of magnesia is $\\text{Mg(OH)}_2$, with $K_{sp} = [\\text{Mg}^{2+}][\\text{OH}^-]^2 = 3.2 \\times 10^{-11}$.

- **(a)** What is its molar solubility in pure water?
- **(b)** What is its solubility in $0.010$ M NaOH?
- **(c)** What is its solubility in a solution buffered at pH 9.0?
- **(d)** Why does it dissolve completely in stomach acid?

**(a) Pure water.** $[\\text{Mg}^{2+}] = s$ and $[\\text{OH}^-] = 2s$: $4s^3 = 3.2 \\times 10^{-11}$, so $s^3 = 8.0 \\times 10^{-12}$ and $s = 2.0 \\times 10^{-4}$ M.

**(b) Common ion.** The hydroxide from NaOH swamps the $2s$ from the salt, so $[\\text{OH}^-] \\approx 0.010$ M: $s = K_{sp}/(0.010)^2 = (3.2 \\times 10^{-11})/(1.0 \\times 10^{-4}) = 3.2 \\times 10^{-7}$ M, about 600 times less than the $2.0 \\times 10^{-4}$ M from (a).

**(c) Buffered at pH 9.0.** pOH = 5.0, so the buffer holds $[\\text{OH}^-] = 1.0 \\times 10^{-5}$ M whatever dissolves: $s = (3.2 \\times 10^{-11})/(1.0 \\times 10^{-10}) = 0.32$ M, over a thousand times the pure-water value: the buffer consumes the hydroxide the salt releases.

**(d) Stomach acid.** At pH 1–2, $\\text{H}^+$ turns every $\\text{OH}^-$ released into water, so $Q_{sp}$ never reaches $K_{sp}$ and dissolution runs to completion: the product ion is removed as fast as it forms. That is the antacid working, and why $\\text{CaCO}_3$ and $\\text{CaF}_2$ dissolve in acid while AgCl does not.`
    },
    {
      id: 'ab5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: ICE Tables & Solubility vs pH** 🎯`,
      exercise: {
        questions: [
          {
            question: `For $\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, $K_c = 2.0 \\times 10^{-5}$. A flask starts with $0.50$ M A and no products. What is $[\\text{B}]$ at equilibrium?`,
            options: [
              `$3.2 \\times 10^{-3}$ M`,
              `$1.0 \\times 10^{-5}$ M`,
              `$4.5 \\times 10^{-3}$ M`,
              `$2.0 \\times 10^{-5}$ M`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `With $[\\text{B}] = [\\text{C}] = x$ and $[\\text{A}] = 0.50 - x \\approx 0.50$: $x^2 \\approx (2.0 \\times 10^{-5})(0.50) = 1.0 \\times 10^{-5}$, so $x = 3.2 \\times 10^{-3}$ M, under 1% of 0.50 M, so the shortcut holds. The value $1.0 \\times 10^{-5}$ stops before the square root, $4.5 \\times 10^{-3}$ takes the root of $K$ alone and forgets the 0.50 M, and $2.0 \\times 10^{-5}$ simply repeats $K$.`
          },
          {
            question: `In which case is the small-x approximation (dropping $x$ from $C - x$) LEAST reliable?`,
            options: [
              `$K = 0.10$ with $C = 0.10$ M`,
              `$K = 10^{-8}$ with $C = 0.10$ M`,
              `$K = 10^{-5}$ with $C = 1.0$ M`,
              `$K = 10^{-10}$ with $C = 0.010$ M`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The shortcut needs $K$ tiny next to $C$ so that only a small fraction reacts. When $K$ equals $C$, a large fraction reacts and $C - x$ is nowhere near $C$, so the quadratic is needed. In the other three cases $C/K$ is at least $10^5$, and $x$ comes out far below 5% of $C$.`
          },
          {
            question: `Which salt becomes markedly more soluble when HCl is added to its saturated solution?`,
            options: [`$\\text{BaCO}_3$`, `AgCl`, `$\\text{PbI}_2$`, `AgBr`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Carbonate is the conjugate base of the weak acid $\\text{HCO}_3^-$, so added $\\text{H}^+$ removes it as $\\text{HCO}_3^-$ and $\\text{H}_2\\text{CO}_3$, drops $Q_{sp}$ below $K_{sp}$ and pulls more $\\text{BaCO}_3$ into solution. Chloride, bromide and iodide come from strong acids and are not protonated, and for AgCl the chloride in HCl is a common ion that makes it LESS soluble.`
          },
          {
            question: `$\\text{Mg(OH)}_2$ ($K_{sp} = 3.2 \\times 10^{-11}$) is added to solutions held at different pH values. In which is it most soluble?`,
            options: [`pH 9.5`, `pH 11.0`, `pH 12.5`, `Pure water`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `With the pH fixed, $s = K_{sp}/[\\text{OH}^-]^2$, so the less hydroxide present, the more dissolves: pH 9.5 ($[\\text{OH}^-] = 3.2 \\times 10^{-5}$ M) gives 0.032 M, pH 11.0 gives $3.2 \\times 10^{-5}$ M and pH 12.5 only $3.2 \\times 10^{-6}$ M. Pure water is the trap: there the salt's own hydroxide sets $[\\text{OH}^-]$ at $4.0 \\times 10^{-4}$ M (pH about 10.6), more than the pH 9.5 buffer holds, so only $2.0 \\times 10^{-4}$ M dissolves.`
          },
          {
            question: `The aqueous equilibrium $\\text{A}(aq) \\rightleftharpoons \\text{B}(aq) + \\text{C}(aq)$ is diluted with water at constant temperature. What happens?`,
            options: [
              `It shifts right, toward more dissolved particles`,
              `It shifts left, toward fewer particles`,
              `No shift, as all concentrations fall alike`,
              `It shifts right, and $K$ increases`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Halving every concentration halves the numerator $[\\text{B}][\\text{C}]$ twice over but the denominator $[\\text{A}]$ only once, so $Q$ falls below $K$ and the reaction runs right, toward the side with more dissolved particles, like a gas expanding toward more moles. A left shift is the response to concentrating the solution, the equal fall does not cancel because the two sides carry different powers, and $K$ changes only with temperature.`
          }
        ]
      }
    },
    {
      id: 'ab5-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Q moves toward K.** $Q < K$ shifts right and $Q > K$ left; for a salt, $Q_{sp} > K_{sp}$ means a precipitate forms.
- **Shifts partly undo the change.** Add reactant → right; compress → fewer gas moles; heat → endothermic side, the only change that moves $K$.
- **Ksp follows stoichiometry.** Raise each ion to its coefficient: $\\text{CaF}_2$ gives $K_{sp} = (s)(2s)^2 = 4s^3$; a common ion cuts $s$.
- **Acid frees basic anions.** $\\text{H}^+$ removes $\\text{F}^-$, $\\text{OH}^-$ or $\\text{CO}_3^{2-}$ as it forms, so $\\text{CaF}_2$, $\\text{Mg(OH)}_2$ and $\\text{CaCO}_3$ dissolve more at low pH.

**Common traps**

- **Catalysts shift equilibrium.** A catalyst speeds both directions equally; neither the position nor $K$ changes.
- **Inert gas shifts equilibrium.** Adding an inert gas at constant volume changes no partial pressure, so nothing shifts.
- **Common ion, more dissolving.** A shared ion pushes dissolution LEFT, so the salt becomes LESS soluble.
- **Small x with a large K.** Drop $x$ from $C - x$ only when $K \\ll C$; check $x/C < 5\\%$, otherwise solve the quadratic.

## Titrations, Equilibrium & Solubility — Complete Topic Summary

**Part 1:** Titration curves, equivalence vs half-equivalence (pH = pKa), indicators, strong vs weak acid curves, the weak-base mirror, reading polyprotic curves.

**Part 2:** Kc, Kp, Δn, Q, Le Chatelier (only T changes K), ICE tables and small x, Ksp, common ion effect, precipitation (Q vs Ksp), solubility vs pH.

### Most Tested MCAT Concepts
1. Half-equivalence point: pH = pKa (titrations)
2. Le Chatelier shifts vs. K changes (only T changes K)
3. Common ion effect reduces solubility
4. Weak acid + strong base: pH > 7 at equivalence (the conjugate base hydrolyzes)
5. Ksp → molar solubility (account for stoichiometric coefficients)
`
    }
  ]
};
