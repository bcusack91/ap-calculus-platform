export const mcatEnzKineticsPart2Data = {
  topicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  sections: [
    {
      id: 'ek2-intro',
      type: 'text' as const,
      content: `# Enzymes & Kinetics

**Part 2 of 4 — Michaelis-Menten Kinetics**

### The Model

For $E + S \\rightleftharpoons ES \\rightarrow E + P$, the initial velocity at substrate concentration $[S]$ is:

$$v_0 = \\frac{V_{max}[S]}{K_m + [S]}$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $v_0$ | Initial rate (before product accumulates) | concentration/time |
| $V_{max}$ | Maximum rate when enzyme is saturated; $V_{max} = k_{cat}[E]_{total}$ | concentration/time |
| $K_m$ | Substrate concentration at which $v_0 = V_{max}/2$ | concentration |
| $k_{cat}$ | Turnover number: substrates converted per enzyme per second | 1/time |

### How to Read $K_m$

$K_m$ is an **inverse measure of apparent affinity**: a LOW $K_m$ means the enzyme reaches half-maximal speed at low substrate — high affinity. $K_m$ is a property of the enzyme-substrate pair and does **not** change when you add more enzyme. $V_{max}$, by contrast, is directly proportional to enzyme concentration.

**Limiting behaviors you should be able to derive:**

- When $[S] \\ll K_m$: $v_0 \\approx (V_{max}/K_m)[S]$ — rate is roughly **first order** in substrate.
- When $[S] \\gg K_m$: $v_0 \\approx V_{max}$ — rate is **zero order** in substrate (saturated; adding substrate does nothing).
- When $[S] = K_m$: $v_0 = V_{max}/2$ by definition.

### Catalytic Efficiency

$$\\text{efficiency} = \\frac{k_{cat}}{K_m}$$

This ratio compares enzymes (or one enzyme's preference among substrates) at low, physiological substrate levels. Its ceiling is the diffusion limit ($\\sim 10^{8}$-$10^{9}\\ M^{-1}s^{-1}$); enzymes near it (catalase, carbonic anhydrase) are "catalytically perfect."

### The Lineweaver-Burk (Double-Reciprocal) Plot

Taking reciprocals linearizes the hyperbola:

$$\\frac{1}{v_0} = \\frac{K_m}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}}$$

- **y-intercept** $= 1/V_{max}$ (higher intercept = LOWER $V_{max}$)
- **x-intercept** $= -1/K_m$ (closer to zero = LARGER $K_m$)
- **slope** $= K_m/V_{max}$

The MCAT loves asking you to compare two lines and infer what changed. Anchor yourself on the intercepts, not the slopes.

### Physiological Contrast: Hexokinase vs. Glucokinase

Hexokinase (most tissues) has a LOW $K_m$ — it works at full speed even at low glucose. Glucokinase (liver, pancreatic beta cells) has a HIGH $K_m$ near fasting blood glucose — its rate tracks blood glucose, letting the liver respond proportionally after a meal. Same reaction, different kinetics, different job.`
    },
    {
      id: 'ek2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Michaelis-Menten Kinetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `An enzyme has $K_m = 2$ mM and $V_{max} = 100$ $\\mu$mol/min. At $[S] = 2$ mM, the initial velocity is:`,
            options: [`100 $\\mu$mol/min`, `50 $\\mu$mol/min`, `25 $\\mu$mol/min`, `Cannot be determined without $k_{cat}$`],
            correctAnswer: 1,
            explanation: `By definition, $K_m$ is the substrate concentration at which the enzyme runs at half of $V_{max}$. Plugging in: $v_0 = V_{max}(2)/(2+2) = V_{max}/2 = 50$ $\\mu$mol/min.`
          },
          {
            question: `Doubling the total enzyme concentration in an assay will:`,
            options: [`Double $K_m$ and double $V_{max}$`, `Double $V_{max}$ but leave $K_m$ unchanged`, `Halve $K_m$ but leave $V_{max}$ unchanged`, `Leave both unchanged`],
            correctAnswer: 1,
            explanation: `$V_{max} = k_{cat}[E]_{total}$, so it scales with enzyme concentration. $K_m$ reflects the intrinsic enzyme-substrate interaction (binding and catalysis rate constants) and is independent of how much enzyme is present.`
          },
          {
            question: `Enzyme A has $k_{cat} = 100\\ s^{-1}$ and $K_m = 10\\ \\mu M$; enzyme B has $k_{cat} = 1000\\ s^{-1}$ and $K_m = 1000\\ \\mu M$. At very low substrate concentrations, which enzyme converts substrate faster (per enzyme molecule)?`,
            options: [`Enzyme A, because its $k_{cat}/K_m$ is ten times higher`, `Enzyme B, because its $k_{cat}$ is ten times higher`, `They are identical, because $k_{cat}/K_m$ ratios cancel`, `Enzyme B, because a larger $K_m$ means tighter binding`],
            correctAnswer: 0,
            explanation: `At low $[S]$, rate per enzyme is approximately $(k_{cat}/K_m)[S]$. Enzyme A: $100/10 = 10\\ \\mu M^{-1}s^{-1}$; enzyme B: $1000/1000 = 1$. A is ten-fold more efficient. Raw $k_{cat}$ only wins at saturating substrate, and a larger $K_m$ means WEAKER apparent affinity.`
          },
          {
            question: `On a Lineweaver-Burk plot, an enzyme variant shows the same y-intercept as wild type but an x-intercept closer to the origin. The variant has:`,
            options: [`The same $V_{max}$ and a higher $K_m$`, `The same $V_{max}$ and a lower $K_m$`, `A higher $V_{max}$ and the same $K_m$`, `A lower $V_{max}$ and a lower $K_m$`],
            correctAnswer: 0,
            explanation: `Same y-intercept ($1/V_{max}$) means $V_{max}$ is unchanged. The x-intercept is $-1/K_m$; moving toward zero means $1/K_m$ shrank, so $K_m$ INCREASED — weaker apparent affinity for substrate.`
          },
          {
            question: `At a substrate concentration 100-fold above $K_m$, an assay's velocity no longer responds to added substrate. The reaction is best described as:`,
            options: [`First order in substrate`, `Second order in substrate`, `Zero order in substrate, because nearly all enzyme is in the ES form`, `At equilibrium`],
            correctAnswer: 2,
            explanation: `At saturating substrate, essentially every active site is occupied, so rate = $V_{max}$ regardless of $[S]$: zero order in substrate. The reaction is far from equilibrium — it is simply running at the enzyme's maximum capacity. Saturating conditions are exactly how experimenters measure $V_{max}$.`
          }
        ]
      }
    },
    {
      id: 'ek2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $v_0 = V_{max}[S]/(K_m + [S])$; at $[S] = K_m$, $v_0 = V_{max}/2$
- Low $K_m$ = high apparent affinity; $K_m$ ignores enzyme amount, $V_{max}$ scales with it ($V_{max} = k_{cat}[E]_t$)
- $k_{cat}/K_m$ = efficiency at low substrate; diffusion limit defines "catalytic perfection"
- Lineweaver-Burk: y-intercept $1/V_{max}$, x-intercept $-1/K_m$, slope $K_m/V_{max}$
- Hexokinase (low $K_m$, always on) vs. glucokinase (high $K_m$, glucose sensor) is the classic physiological application`
    },
    {
      id: 'ek2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Kinetics Calculations

<details>
<summary><b>Example 1: Compute velocity at a given substrate concentration</b></summary>

**Question:** An enzyme has $V_{max} = 120$ $\\mu$mol/min and $K_m = 4$ mM. What is $v_0$ at $[S] = 12$ mM?

**Solution:**
1. $v_0 = V_{max}[S]/(K_m + [S]) = 120 \\times 12/(4 + 12)$
2. $= 1440/16 = 90$ $\\mu$mol/min
3. Sanity check: 12 mM is $3K_m$, and $3/(1+3) = 3/4$ of $V_{max}$ — indeed $0.75 \\times 120 = 90$.

**MCAT Strategy:** Memorize the fraction shortcut: at $[S] = nK_m$, $v_0 = \\frac{n}{n+1}V_{max}$. At $K_m$: 1/2. At $4K_m$: 4/5. At $9K_m$: 90%.
</details>

<details>
<summary><b>Example 2: Extract constants from a Lineweaver-Burk plot</b></summary>

**Question:** A double-reciprocal plot has y-intercept $0.01$ (min/$\\mu$mol) and x-intercept $-0.5$ (1/mM). Find $V_{max}$ and $K_m$.

**Solution:**
1. y-intercept $= 1/V_{max} = 0.01$, so $V_{max} = 100$ $\\mu$mol/min.
2. x-intercept $= -1/K_m = -0.5$, so $K_m = 2$ mM.
3. Slope check: $K_m/V_{max} = 2/100 = 0.02$ mM·min/$\\mu$mol — consistent.

**MCAT Strategy:** Invert and drop the sign. Most errors come from forgetting that intercepts are RECIPROCALS: a small y-intercept means a big $V_{max}$.
</details>

<details>
<summary><b>Example 3: Interpret a mutation's kinetic signature</b></summary>

**Question:** A point mutation in an enzyme's substrate-binding pocket (far from the catalytic residues) is characterized kinetically. Predict the likely changes in $K_m$ and $k_{cat}$, and what the Lineweaver-Burk plot would show versus wild type.

**Solution:**
1. Weakened substrate binding raises $K_m$ (more substrate needed to reach half-saturation).
2. The chemistry step is untouched, so $k_{cat}$ (and $V_{max}$ at fixed enzyme) is roughly unchanged.
3. Plot: same y-intercept, x-intercept pulled toward the origin, steeper slope — the same signature as a competitive inhibitor, but permanent.

**MCAT Strategy:** Map mutations to parameters: binding-site changes move $K_m$; catalytic-residue changes move $k_{cat}$. A passage giving you a kinetics table is really asking which part of the enzyme the perturbation touched.
</details>`
    }
  ]
};
