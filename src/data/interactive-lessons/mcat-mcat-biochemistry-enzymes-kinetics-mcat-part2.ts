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

This ratio compares enzymes (or one enzyme's preference among substrates) at low, physiological substrate levels. Its ceiling is the diffusion limit — the enzyme cannot convert substrate faster than substrate can collide with it; enzymes near it (catalase, carbonic anhydrase) are "catalytically perfect."

<!-- yield:low -->
The diffusion limit is roughly $10^{8}$-$10^{9}\\ M^{-1}s^{-1}$.
<!-- /yield -->

### The Lineweaver-Burk (Double-Reciprocal) Plot

Taking reciprocals linearizes the hyperbola:

$$\\frac{1}{v_0} = \\frac{K_m}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}}$$

- **y-intercept** $= 1/V_{max}$ (higher intercept = LOWER $V_{max}$); **x-intercept** $= -1/K_m$ (closer to zero = LARGER $K_m$); **slope** $= K_m/V_{max}$

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
            yield: 'ULTRA_HIGH',
            explanation: `By definition, $K_m$ is the substrate concentration at which the enzyme runs at half of $V_{max}$. Plugging in: $v_0 = V_{max}(2)/(2+2) = V_{max}/2 = 50$ $\\mu$mol/min. Dividing $V_{max}$ by $(K_m + [S])$ while dropping $[S]$ from the numerator gives the 25 $\\mu$mol/min trap.`
          },
          {
            question: `Doubling the total enzyme concentration in an assay will:`,
            options: [`Double $K_m$ and double $V_{max}$`, `Double $V_{max}$ but leave $K_m$ unchanged`, `Halve $K_m$ but leave $V_{max}$ unchanged`, `Leave both unchanged`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$V_{max} = k_{cat}[E]_{total}$, so it scales with enzyme concentration. $K_m$ reflects the intrinsic enzyme-substrate interaction (binding and catalysis rate constants) and is independent of how much enzyme is present.`
          },
          {
            question: `Enzyme A has $k_{cat} = 100\\ s^{-1}$ and $K_m = 10\\ \\mu M$; enzyme B has $k_{cat} = 1000\\ s^{-1}$ and $K_m = 1000\\ \\mu M$. At very low substrate concentrations, which enzyme converts substrate faster (per enzyme molecule)?`,
            options: [`Enzyme A, because its $k_{cat}/K_m$ is ten times higher`, `Enzyme B, because its $k_{cat}$ is ten times higher`, `They are identical, because $k_{cat}/K_m$ ratios cancel`, `Enzyme B, because a larger $K_m$ means tighter binding`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `At low $[S]$, rate per enzyme is approximately $(k_{cat}/K_m)[S]$. Enzyme A: $100/10 = 10\\ \\mu M^{-1}s^{-1}$; enzyme B: $1000/1000 = 1$. A is ten-fold more efficient. Raw $k_{cat}$ only wins at saturating substrate, and a larger $K_m$ means WEAKER apparent affinity.`
          },
          {
            question: `On a Lineweaver-Burk plot, an enzyme variant shows the same y-intercept as wild type but an x-intercept closer to the origin. The variant has:`,
            options: [`The same $V_{max}$ and a higher $K_m$`, `The same $V_{max}$ and a lower $K_m$`, `A higher $V_{max}$ and the same $K_m$`, `A lower $V_{max}$ and a lower $K_m$`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Same y-intercept ($1/V_{max}$) means $V_{max}$ is unchanged. The x-intercept is $-1/K_m$; moving toward zero means $1/K_m$ shrank, so $K_m$ INCREASED — weaker apparent affinity for substrate.`
          },
          {
            question: `At a substrate concentration 100-fold above $K_m$, an assay's velocity no longer responds to added substrate. The reaction is best described as:`,
            options: [`First order in substrate`, `Second order in substrate`, `Zero order in substrate`, `Near chemical equilibrium`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At saturating substrate, essentially every active site is occupied, so rate = $V_{max}$ regardless of $[S]$: zero order in substrate. The reaction is far from equilibrium — it is simply running at the enzyme's maximum capacity. Saturating conditions are exactly how experimenters measure $V_{max}$.`
          }
        ]
      }
    },
    {
      id: 'ek2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Kinetics Calculations

**Problem 1.** An enzyme has $V_{max} = 120$ $\\mu$mol/min and $K_m = 4$ mM. The assay runs at $[S] = 12$ mM.

- **(a)** What is $v_0$?
- **(b)** 12 mM is what multiple of $K_m$, and what fraction of $V_{max}$ should that give?
- **(c)** What fraction of $V_{max}$ does any enzyme reach at $[S] = K_m$, $4K_m$ and $9K_m$?

**(a) Plug in.** $v_0 = V_{max}[S]/(K_m + [S]) = 120 \\times 12/(4 + 12) = 1440/16 = 90$ $\\mu$mol/min.

**(b) Sanity check.** 12 mM is $3K_m$, and $3/(1+3) = 3/4$ of $V_{max}$: indeed $0.75 \\times 120 = 90$, matching (a).

**(c) The fraction shortcut.** At $[S] = nK_m$, $v_0 = \\frac{n}{n+1}V_{max}$. At $K_m$: 1/2. At $4K_m$: 4/5. At $9K_m$: 90%.

**Problem 2.** A double-reciprocal plot has y-intercept $0.01$ (min/$\\mu$mol) and x-intercept $-0.5$ (1/mM).

- **(a)** What is $V_{max}$?
- **(b)** What is $K_m$?
- **(c)** What slope should the line have, and is it consistent?

**(a) The y-intercept.** $1/V_{max} = 0.01$, so $V_{max} = 100$ $\\mu$mol/min. Intercepts are RECIPROCALS: a small y-intercept means a big $V_{max}$.

**(b) The x-intercept.** $-1/K_m = -0.5$, so $K_m = 2$ mM. Invert and drop the sign.

**(c) Slope check.** With $K_m = 2$ mM from (b) and $V_{max} = 100$ $\\mu$mol/min from (a): $K_m/V_{max} = 2/100 = 0.02$ mM·min/$\\mu$mol, consistent.

**Problem 3.** A point mutation in an enzyme's substrate-binding pocket, far from the catalytic residues, is characterized kinetically against wild type.

- **(a)** How does $K_m$ change?
- **(b)** How do $k_{cat}$ and $V_{max}$ change?
- **(c)** What does the Lineweaver-Burk plot show versus wild type?

**(a) Binding.** Weakened substrate binding raises $K_m$: more substrate is needed to reach half-saturation.

**(b) Catalysis.** The chemistry step is untouched, so $k_{cat}$ (and $V_{max}$ at fixed enzyme) is roughly unchanged.

**(c) The plot.** Same y-intercept, x-intercept pulled toward the origin, steeper slope: the same signature as a competitive inhibitor, but permanent. Binding-site changes move $K_m$; catalytic-residue changes move $k_{cat}$. A passage giving you a kinetics table is really asking which part of the enzyme the perturbation touched.`
    },
    {
      id: 'ek2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **The Michaelis-Menten equation.** $v_0 = V_{max}[S]/(K_m + [S])$; at $[S] = nK_m$, $v_0 = \\frac{n}{n+1}V_{max}$, so $V_{max}/2$ at $K_m$.
- **Reading $K_m$.** Low $K_m$ = high apparent affinity: hexokinase runs flat out, while high-$K_m$ glucokinase tracks blood glucose.
- **Efficiency is $k_{cat}/K_m$.** It ranks enzymes at low substrate; enzymes near the diffusion limit are "catalytically perfect."
- **Lineweaver-Burk intercepts.** The y-intercept is $1/V_{max}$, the x-intercept $-1/K_m$, and the slope $K_m/V_{max}$.

**Common traps**

- **More enzyme, new $K_m$.** Adding enzyme raises $V_{max} = k_{cat}[E]_t$ but leaves $K_m$, a property of the enzyme-substrate pair, alone.
- **Reading intercepts directly.** Intercepts are reciprocals: a small y-intercept means a big $V_{max}$; an x-intercept nearer zero, a bigger $K_m$.
- **Raw $k_{cat}$ at low substrate.** At low $[S]$ the enzyme with the higher $k_{cat}/K_m$ is faster, not the one with the higher $k_{cat}$.
- **Large $K_m$ as tight binding.** A larger $K_m$ means WEAKER apparent affinity: more substrate is needed for half-maximal speed.

<!-- yield:low -->
- Low-yield extras: the numerical diffusion limit, roughly $10^{8}$-$10^{9}\\ M^{-1}s^{-1}$
<!-- /yield -->`
    }
  ]
};
