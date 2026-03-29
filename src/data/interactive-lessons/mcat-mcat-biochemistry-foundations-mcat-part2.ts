export const mcatBiochemPart2Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc2-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 2 of 7 — Enzyme Kinetics (ULTRA HIGH YIELD)**

### Michaelis-Menten Equation

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

- $K_m$ = Michaelis constant = [S] at which $v = V_{max}/2$
- Low $K_m$ → high affinity (enzyme binds substrate tightly at low [S])
- $V_{max}$ depends on $[E]_{total}$ and $k_{cat}$: $V_{max} = k_{cat}[E]_T$

### Lineweaver-Burk (Double Reciprocal) Plot

$$\\frac{1}{v} = \\frac{K_m}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$$

- y-intercept = $1/V_{max}$
- x-intercept = $-1/K_m$
- Slope = $K_m/V_{max}$

### Inhibitor Types

| Type | Effect on $V_{max}$ | Effect on $K_m$ | Overcome by more [S]? |
|------|---------------------|-----------------|----------------------|
| Competitive | No change | Increases (apparent) | Yes |
| Uncompetitive | Decreases | Decreases | No |
| Noncompetitive | Decreases | No change | No |
| Mixed | Decreases | Can increase or decrease | No |

Catalytic efficiency is often summarized by $k_{cat}/K_m$, useful for comparing enzymes at low substrate concentrations.`
    },
    {
      id: 'bc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Enzyme Kinetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher adds a molecule that binds ONLY to the enzyme-substrate complex. This is an example of:`,
            options: [`Uncompetitive inhibition`, `Competitive inhibition`, `Noncompetitive inhibition`, `Allosteric activation`],
            correctAnswer: 0,
            explanation: `Uncompetitive inhibitors bind ONLY to the ES complex (not free enzyme). This decreases both $V_{max}$ and $K_m$ (apparent). On a Lineweaver-Burk plot, lines are parallel.`
          },
          {
            question: `An enzyme has $K_m = 2$ mM and $V_{max} = 100$ $\\mu$mol/min. At $[S] = 18$ mM, the reaction velocity is approximately:`,
            options: [`90 $\\mu$mol/min`, `50 $\\mu$mol/min`, `100 $\\mu$mol/min`, `10 $\\mu$mol/min`],
            correctAnswer: 0,
            explanation: `$v = V_{max}[S]/(K_m + [S]) = 100(18)/(2 + 18) = 1800/20 = 90$ $\\mu$mol/min. At high [S] relative to $K_m$, the enzyme approaches $V_{max}$.`
          },
          {
            question: `A competitive inhibitor can often be overcome by:`,
            options: [`Lowering substrate concentration`, `Increasing substrate concentration`, `Removing enzyme`, `Increasing pH only`],
            correctAnswer: 1,
            explanation: `Competitive inhibitors compete at the active site, so higher substrate concentration can outcompete inhibitor binding.`
          },
          {
            question: `At $[S]=K_m$, reaction velocity equals:`,
            options: [`$V_{max}$`, `$V_{max}/2$`, `$2V_{max}$`, `0`],
            correctAnswer: 1,
            explanation: `By definition of Michaelis-Menten kinetics, $K_m$ is the substrate concentration at half-maximal velocity.`
          }
        ]
      }
    },
    {
      id: 'bc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $K_m$ = [S] at half $V_{max}$. Low $K_m$ = high affinity.
- Competitive: same $V_{max}$, higher apparent $K_m$
- Noncompetitive: lower $V_{max}$, same $K_m$
- Lineweaver-Burk: know how each inhibitor changes the plot`
    },
    {
      id: 'bc2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Enzyme Kinetics

<details>
<summary><b>Example 1: Calculate enzyme velocity using Michaelis-Menten equation</b></summary>

**Question:** An enzyme has $K_m = 5$ mM and $V_{max} = 120$ $\u00b5$mol/min. What is the reaction velocity when $[S] = 15$ mM?

**Solution:**
$$v = \frac{V_{max}[S]}{K_m + [S]} = \frac{120 \times 15}{5 + 15} = \frac{1800}{20} = 90 \text{ }\u00b5\text{mol/min}$$

**Interpretation**:
- When $[S] = 3 \times K_m$, the enzyme is at 75% $V_{max}$ (not yet saturated)
- As [S] increases further toward infinite concentration, v → $V_{max}$ asymptotically

**MCAT Strategy**: You don't memorize $v = 0.75 V_{max}$ when $[S] = 3K_m$. Instead, use the equation. At low [S] << $K_m$, velocity is nearly first-order in [S]. At high [S]  >> $K_m$, velocity is nearly zero-order.
</details>

<details>
<summary><b>Example 2: Distinguish inhibitor types using kinetic parameters</b></summary>

**Question:** Three inhibitors (A, B, C) are tested. The data (without inhibitor vs. with inhibitor):

| Inhibitor | $K_m$ (mM) | $V_{max}$ ($\u00b5$mol/min) |
|-----------|------------|-------------------------|
| None (control) | 5 | 100 |
| A | 15 | 100 |
| B | 5 | 50 |
| C | 10 | 60 |

Classify each inhibitor type.

**Solution:**

1. **Inhibitor A**: $K_m$ increases (5 → 15), $V_{max}$ unchanged → **Competitive** ✓
   - Competes with substrate for the active site
   - Increasing [S] can overcome inhibition
   - Can be distinguished on Lineweaver-Burk (intersects on y-axis)

2. **Inhibitor B**: $K_m$ unchanged (5), $V_{max}$ decreases (100 → 50) → **Noncompetitive** ✓
   - Binds to both E and ES complex with equal affinity
   - Cannot be overcome by increasing [S]
  - On Lineweaver-Burk, x-intercept stays fixed while y-intercept increases

3. **Inhibitor C**: $K_m$ increases (5 → 10), $V_{max}$ decreases (100 → 60) → **Mixed** ✓
   - Binds to both E and ES complex but with different affinities
   - Both $K_m$ and $V_{max}$ are affected (intermediate behavior)
   - Lines converge at a different point on Lineweaver-Burk

**MCAT Strategy**: Rapid classification: if only $V_{max}$ changes → noncompetitive; if only $K_m$ changes → competitive; if both change → mixed or uncompetitive (uncompetitive is rare but decreases both proportionally).
</details>

<details>
<summary><b>Example 3: Compare catalytic efficiency of two enzymes at low substrate concentration</b></summary>

**Question:** Enzyme A: $K_m = 0.5$ mM, $k_{cat} = 500$ s⁻¹. Enzyme B: $K_m = 5$ mM, $k_{cat} = 2000$ s⁻¹. Which enzyme is more efficient when cellular [S] ≈ 0.1 mM?

**Solution:**
1. **Catalytic efficiency** = $k_{cat}/K_m$ (velocity per unit substrate at low [S])

2. **Enzyme A**: 
   $$\frac{k_{cat}}{K_m} = \frac{500}{0.5} = 1000 \text{ s}^{-1}\text{/mM}$$

3. **Enzyme B**:
   $$\frac{k_{cat}}{K_m} = \frac{2000}{5} = 400 \text{ s}^{-1}\text{/mM}$$

4. **Result**: Enzyme A is more efficient (2.5× higher $k_{cat}/K_m$)

5. **At [S] = 0.1 mM**:
   - Enzyme A: $v_A = 500(0.1)/(0.5 + 0.1) ≈ 83$ s⁻¹ (relative to $[E]$)
   - Enzyme B: $v_B = 2000(0.1)/(5 + 0.1) ≈ 40$ s⁻¹
   - Enzyme A wins at low [S] ✓

**Why this matters**: Under cellular conditions where substrate is limiting, high $k_{cat}/K_m$ predicts enzyme performance better than either parameter alone.

**MCAT Strategy**: When comparing enzymes at low [S], use $k_{cat}/K_m$ as a single metric. The enzyme with higher efficiency wins "at the racetrack" when substrate is scarce.
</details>

<details>
<summary><b>Example 4: Interpret a Lineweaver-Burk (double reciprocal) plot</b></summary>

**Question:** Two Lineweaver-Burk plots are shown:

**Plot 1 (with inhibitor A)**:
- y-intercept = 0.01 (same as control)
- x-intercept = -0.2 (control: -0.25)
- Lines converge on y-axis

**Plot 2 (with inhibitor B)**:
- y-intercept = 0.02 (control: 0.01)
- x-intercept = -0.25 (same as control)
- Lines intersect on the x-axis

Identify the inhibitor types.

**Solution:**

1. **Lineweaver-Burk equation**: $\frac{1}{v} = \frac{K_m}{V_{max}} \cdot \frac{1}{[S]} + \frac{1}{V_{max}}$
   - Slope = $K_m/V_{max}$
   - y-intercept = $1/V_{max}$
   - x-intercept = $-1/K_m$

2. **Plot 1 (Inhibitor A)**:
   - y-intercept unchanged → $V_{max}$ unchanged
   - x-intercept changes (-0.25 → -0.2) → $K_m$ increases (becomes $-1/0.2 = -5$ mM, vs. -0.25 → 4 mM before)
   - **Diagnosis**: **Competitive inhibition** ✓
   - Lines converge on y-axis (characteristic pattern)

3. **Plot 2 (Inhibitor B)**:
   - y-intercept changes → $V_{max}$ decreases (0.01 → 0.02 = $1/V_{max}$, so $V_{max}$ goes from 100 to 50)
   - x-intercept unchanged → $K_m$ unchanged
  - Pattern matches **noncompetitive inhibition** (x-intercept conserved, y-intercept increased)

4. **Answer**: Inhibitor A = competitive; Inhibitor B = noncompetitive

**MCAT Strategy**: Memorize the Lineweaver-Burk signatures:
- **Competitive**: Conserved y-intercept, changed x-intercept, lines meet on y-axis
- **Noncompetitive**: Changed y-intercept, conserved x-intercept, lines meet on x-axis
- **Uncompetitive**: Both intercepts change, lines parallel
</details>`
    }
  ]
};
