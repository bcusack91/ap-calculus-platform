export const mcatEnergyMechanismsPart1Data = {
  topicSlug: 'mcat-general-chemistry-energy-mechanisms-mcat',
  sections: [
    {
      id: 'kin3-intro',
      type: 'text' as const,
      content: `# Kinetics: Energy, Catalysis & Mechanisms

**Part 1 of 3 — Activation Energy, Arrhenius Equation & Collision Theory**

**Where this fits.** The *Kinetics: Rate Laws & Half-Lives* lesson covered rate laws (rate $= k[\\text{A}]^m[\\text{B}]^n$, with orders found by experiment), the rate constant $k$ and half-lives. This lesson explains what sets $k$: activation energy, the Arrhenius equation and collision theory, then how multistep mechanisms, the rate-determining step and catalysts, enzymes included, shape the rate law.

## Activation Energy ($E_a$)

The **activation energy** is the minimum energy that colliding molecules must have for a reaction to occur. The transition state (activated complex) sits at the energy maximum.

**Energy diagram key points:**

- **Reactants** → **Transition state** → **Products**
- $E_a(\\text{forward})$ = energy gap from reactants to peak
- $E_a(\\text{reverse})$ = energy gap from products to peak
- $\\Delta H = E_a(\\text{forward}) - E_a(\\text{reverse})$
- Exothermic: products at lower energy than reactants ($\\Delta H < 0$)
- Endothermic: products at higher energy than reactants ($\\Delta H > 0$)

A **catalyst** lowers $E_a$ (provides an alternative pathway) without changing $\\Delta H$ or the equilibrium constant.

## Worked Example — Barriers, ΔH and a Catalyst

**Problem.** A reaction has $E_a(\\text{fwd}) = 80$ kJ/mol and $\\Delta H = -30$ kJ/mol. A catalyst lowers the forward barrier to 60 kJ/mol.

- **(a)** Is the reaction exothermic or endothermic, and where do the products sit?
- **(b)** What is $E_a(\\text{rev})$ without the catalyst?
- **(c)** What are the forward and reverse barriers with the catalyst?
- **(d)** Does the catalyst change $\\Delta H$ or $K$?

**(a) Sign of ΔH.** $\\Delta H < 0$, so the reaction is **exothermic**: the products sit 30 kJ/mol below the reactants.

**(b) Reverse barrier.** From $\\Delta H = E_a(\\text{fwd}) - E_a(\\text{rev})$: $E_a(\\text{rev}) = 80 - (-30) = 110$ kJ/mol. Climbing back from the lower product plateau takes more energy.

**(c) Catalyzed barriers.** The catalyst lowers the single peak by 20 kJ/mol, so BOTH barriers fall by 20: $E_a(\\text{fwd}) = 60$ kJ/mol and $E_a(\\text{rev}) = 110 - 20 = 90$ kJ/mol.

**(d) Thermodynamics.** No. With the barriers from (c), $\\Delta H = 60 - 90 = -30$ kJ/mol, unchanged: the plateaus never move. Both directions speed up equally, so equilibrium arrives sooner with the same $K$.

## Transition State Theory

The **transition state** (activated complex) is at the peak of the reaction coordinate diagram. It is not a stable product and cannot be isolated.

| Species | Where it sits | Can it be isolated? |
|---------|--------------|---------------------|
| Transition state | Highest-energy point of a step (a peak) | No |
| Intermediate | Local energy minimum between steps (a valley) | Sometimes; it is short-lived |

## Collision Theory

A reaction needs molecules to collide with enough energy ($\\geq E_a$) AND in the correct **orientation**. The fraction with enough energy is about $f = e^{-E_a/RT}$, which grows exponentially as $T$ rises or a catalyst lowers $E_a$.

Anything that raises the **collision frequency** also speeds the reaction, without changing that fraction:

- **Concentration:** more reactant (or a higher gas partial pressure) means more collisions per second.
- **Surface area:** a powdered solid reacts faster than a lump.
- **Phase:** reactants mixed in one phase collide far more often than separate phases meeting at an interface.

## Arrhenius Equation

The Arrhenius equation describes how the rate constant $k$ depends on temperature:

$$k = Ae^{-E_a/RT}$$

where $A$ = frequency factor (pre-exponential factor accounting for collision frequency and orientation), $R = 8.314$ J/mol·K, $T$ = temperature in kelvin.

In a rate law, rate $= k[\\text{A}]^m[\\text{B}]^n$, the concentrations change as the reaction runs at a fixed $k$; only temperature or a catalyst (through $E_a$) changes $k$ itself.

**Logarithmic form:** a plot of $\\ln k$ against $1/T$ is a straight line with slope $-E_a/R$ and intercept $\\ln A$; the steeper the line, the larger $E_a$.

$$\\ln k = \\ln A - \\frac{E_a}{R}\\cdot\\frac{1}{T}$$

**Two-temperature form (MCAT-useful):** compares the rate constants at two temperatures directly.

$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**Qualitative Rule of Thumb:** for many reactions near room temperature, a **10°C rise in temperature approximately doubles the rate constant** (though the precise factor depends on $E_a$).

## Worked Example — Arrhenius and a Fever

**Problem.** A reaction with $E_a = 50$ kJ/mol runs at body temperature, 37 °C; a fever raises it to 40 °C. ($R = 8.314$ J/mol·K)

- **(a)** What are the two temperatures in kelvin?
- **(b)** What is $\\ln(k_2/k_1)$?
- **(c)** By what factor does $k$ rise?

**(a) Kelvin.** $T_1 = 37 + 273 = 310$ K and $T_2 = 40 + 273 = 313$ K. Arrhenius always needs absolute temperature.

**(b) Two-temperature form.** With the temperatures from (a):

$$\\ln\\frac{k_2}{k_1} = \\frac{50{,}000}{8.314}\\left(\\frac{1}{310} - \\frac{1}{313}\\right) = 6014 \\times 3.09 \\times 10^{-5} \\approx 0.186$$

**(c) Factor.** $k_2/k_1 = e^{0.186} \\approx 1.20$ (for small $x$, $e^x \\approx 1 + x$): about 20% faster, although the absolute temperature rose by only 1%. That exponential sensitivity is why small temperature changes matter so much.

## Effect of Temperature on Rate

| Factor | Effect on $k$ |
|--------|--------------|
| Increase $T$ | Increases $k$ (exponentially) |
| Decrease $T$ | Decreases $k$ |
| Lower $E_a$ (catalyst) | Increases $k$ |
| Higher $E_a$ | Decreases $k$ |

**MCAT application:** The Arrhenius equation explains why biological enzymes are so effective — they dramatically lower $E_a$ for biochemical reactions.

## Kinetic vs. Thermodynamic Control

When one reactant can form two products, the **kinetic product** has the LOWER $E_a$ (it forms faster), while the **thermodynamic product** is the more STABLE one, whatever its barrier. Barrier height is kinetics; product energy is thermodynamics.

- **Kinetic control:** at low temperature, over short times, or when the steps are irreversible, neither product can revert, so the faster-forming product wins.
- **Thermodynamic control:** when the steps are reversible (higher temperature, long times), the mixture equilibrates and the more stable product wins.
`
    },
    {
      id: 'kin3-quiz',
      type: 'multiple-choice' as const,
      content: `**Activation Energy, Arrhenius & Transition State** 🎯`,
      exercise: {
        questions: [
          {
            question: `A catalyst is added to a reaction. Which of the following is TRUE?`,
            options: [
              `$\\Delta H$ falls, so the reaction releases more heat`,
              `$E_a$ falls; $\\Delta H$ is unchanged`,
              `$E_a$ and $\\Delta H$ both fall by the same amount`,
              `The equilibrium constant $K$ rises, favoring products`
            ],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `A catalyst provides an alternative pathway with lower $E_a$, but it does not change the thermodynamics of the reaction — $\\Delta H$ and $K$ are unchanged. Only the kinetics are affected. The reactant and product energies do not move, so neither $\\Delta H$ alone nor $\\Delta H$ together with $E_a$ can fall, and since forward and reverse rates rise equally, $K$ cannot shift toward products.`
          },
          {
            question: `For a reaction with $E_a = 50$ kJ/mol, temperature increases from 300 K to 310 K. Using the Arrhenius equation (assume $R = 8.314$ J/mol·K), how does $k$ change?`,
            options: [
              `$k$ nearly doubles, to about 1.9 times`,
              `$k$ rises about 3%, as $T$ does`,
              `$k$ stays the same`,
              `$k$ rises about 50-fold`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$\\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2) = (50{,}000/8.314)(1/300 - 1/310) = 6014 \\times 1.075 \\times 10^{-4} \\approx 0.65$. $k_2/k_1 = e^{0.65} \\approx 1.9 \\approx \\mathbf{2\\times}$. This confirms the "doubling per 10°C" rule. A 3% rise treats $k$ as proportional to $T$, but $k$ depends exponentially on $1/T$; a 50-fold jump would need a far larger $E_a$.`
          },
          {
            question: `An energy diagram shows two humps (transition states) with a valley between them. What occupies the valley between the two humps?`,
            options: [
              `The products`,
              `The reactants`,
              `A reaction intermediate`,
              `The transition state`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A valley (local energy minimum) between two transition-state peaks represents a **reaction intermediate** — a species that forms and then reacts further. Transition states are at energy peaks, not valleys. Reactants and products sit on the plateaus at the two ends of the diagram, not between the humps.`
          },
          {
            question: `Two reactions A and B have the same $E_a$, but reaction A has a larger pre-exponential factor $A$ in the Arrhenius equation. At the same temperature, how do their rate constants compare?`,
            options: [
              `$k_A < k_B$`,
              `$k_A = k_B$`,
              `$k_A > k_B$`,
              `Cannot be determined without knowing $\\Delta H$`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$k = Ae^{-E_a/RT}$. Since $E_a$ and $T$ are equal for both, the larger pre-exponential $A$ (which reflects collision frequency and geometric probability) gives a **larger $k$** for reaction A. Equal rate constants would need equal $A$ as well, and $\\Delta H$ does not appear in the Arrhenius equation at all, so it is not needed.`
          },
          {
            question: `Which change increases the fraction of collisions with sufficient energy to react?`,
            options: [
              `Raising the reactant concentration`,
              `Raising the activation energy`,
              `Raising the temperature`,
              `Withdrawing the catalyst`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The fraction $f = e^{-E_a/RT}$ increases when the exponent $(-E_a/RT)$ becomes less negative — either by decreasing $E_a$ (catalyst) or **increasing $T$**. More thermal energy means more molecules exceed the activation energy threshold. More reactant raises the NUMBER of collisions per second, and so the rate, but not the fraction that clears $E_a$. A higher $E_a$, or removing a catalyst (which restores the higher barrier), shrinks that fraction.`
          },
          {
            question: `A reactant can form either product P₁, through the lower activation barrier, or product P₂, which is lower in energy but has the higher barrier. The reaction is run cold, for a short time, under conditions where neither step reverses. Which product dominates?`,
            options: [
              `P₁, since its lower barrier lets it form faster`,
              `P₂, since the more stable product always dominates`,
              `P₁, since its lower barrier also makes it more stable`,
              `Equal amounts, since both form from the same reactant`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cold, short and irreversible means **kinetic control**: each product forms at the rate its own barrier allows and cannot revert, so the faster-forming P₁ wins. The more stable product dominates only under thermodynamic control, when the steps are reversible (warm, long times) and the mixture equilibrates, so "always" is wrong. Barrier height says nothing about product stability; here P₂ is the more stable one. A common reactant does not force equal amounts, because the two rates differ through $e^{-E_a/RT}$.`
          }
        ]
      }
    },
    {
      id: 'kin3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **ΔH from the barriers.** $\\Delta H = E_a(\\text{fwd}) - E_a(\\text{rev})$; exothermic products sit below the reactants.
- **Arrhenius.** $k = Ae^{-E_a/RT}$: only well-aimed collisions past $E_a$ react, so higher $T$ or lower $E_a$ raises $k$.
- **Catalysts change kinetics only.** A catalyst lowers $E_a$ both ways and speeds the reaction, leaving $\\Delta H$ and $K$ unchanged.
- **Kinetic vs. thermodynamic product.** Cold, short or irreversible favors the lower-$E_a$ product; reversible or hot favors the more stable one.

**Common traps**

- **Transition state as intermediate.** A transition state is an energy peak that cannot be isolated; an intermediate sits in a valley.
- **Celsius in Arrhenius.** $T$ in $e^{-E_a/RT}$ must be in kelvin; plugging in °C gives wrong ratios.
- **Catalyst shifting equilibrium.** It speeds both directions equally, so equilibrium comes sooner with the same $K$.
- **Linear temperature thinking.** 300 K to 310 K raises $T$ by 3% yet nearly doubles $k$ (for $E_a \\approx 50$ kJ/mol), because $k$ depends exponentially on $1/T$.
`
    }
  ]
};
