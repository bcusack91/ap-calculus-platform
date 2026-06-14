export const mcatSciPassagePart2Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 2 of 7 — Data Interpretation**

### Reading Graphs

| Graph Element | What to Identify |
|--------------|-----------------|
| X-axis | Independent variable (what's being changed) |
| Y-axis | Dependent variable (what's being measured) |
| Trend | Increasing, decreasing, plateauing, sigmoidal |
| Units | Must match answer choices |

### Common Data Patterns on the MCAT

| Pattern | Interpretation |
|---------|---------------|
| Linear increase | Direct proportional relationship |
| Inverse relationship | As X increases, Y decreases |
| Plateau | Maximum reached (saturation, $V_{max}$) |
| Sigmoidal (S-curve) | Cooperative binding (hemoglobin) or logistic growth |
| Logarithmic | pH scale, enzyme activity vs. pH |

### Table Interpretation Strategy

1. Read column headers (what's measured)
2. Identify controls vs. experimental conditions
3. Look for the biggest differences between groups
4. Check if changes are statistically meaningful (error bars, p-values)

### MCAT Trap: Correlation vs. Causation

A passage shows that A correlates with B. Answer choices may state "A causes B."
- Correlation $\\neq$ Causation unless the experiment was well-controlled
- Look for confounding variables!`
    },
    {
      id: 'sp2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Data Table Under Time Pressure

A passage reports the effect of an inhibitor on reaction rate:

| [Inhibitor] (µM) | Reaction rate (µmol/min) |
|------------------|--------------------------|
| 0 | 100 |
| 5 | 82 |
| 10 | 64 |
| 20 | 30 |
| 40 | 8 |

**Step 1 — Read the headers and units.** X-like column = inhibitor concentration (µM); measured outcome = rate (µmol/min). Units matter: if an answer choice is in mol/s, you must convert.

**Step 2 — Identify the control.** The $0\\ \\mu\\text{M}$ row (rate = 100) is the no-inhibitor baseline. Every other row is compared against it.

**Step 3 — Describe the trend, not just one point.** As inhibitor rises, rate falls — an **inverse relationship**. From 0 → 40 µM, rate drops from 100 → 8, roughly a 92% reduction.

**Step 4 — Quantify when asked.** "By what fraction does rate fall when inhibitor goes from 10 to 20 µM?" Rate goes $64 \\to 30$: change $= 64 - 30 = 34$, so $\\frac{34}{64} \\approx 0.53$, about a **53% decrease**. Estimate first ($30$ is just under half of $64$) and the choice near 50% is the target.

**Step 5 — Resist the causation trap.** The table supports that the inhibitor *reduces rate* in this controlled assay; it does not, by itself, reveal the *mechanism* (competitive vs. noncompetitive) — that requires varying substrate too.`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Data Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A graph shows enzyme activity vs. substrate concentration with a plateau at high concentrations. The plateau indicates:`,
            options: [`All enzyme active sites are saturated ($V_{max}$ reached)`, `The enzyme is denatured`, `Substrate is being consumed`, `The experiment failed`],
            correctAnswer: 0,
            explanation: `At high substrate concentration, all enzyme active sites are occupied → increasing substrate further has no effect on rate → plateau at $V_{max}$. This is the classic Michaelis-Menten curve.`
          },
          {
            question: `Using the inhibitor table, the relationship between inhibitor concentration and reaction rate is best described as:`,
            options: [`Inverse — rate decreases as inhibitor concentration increases`, `Direct — rate increases with inhibitor`, `Sigmoidal — cooperative`, `No relationship — rate is constant`],
            correctAnswer: 0,
            explanation: `Rate falls steadily from 100 to 8 µmol/min as inhibitor rises from 0 to 40 µM. That is an inverse (negative) relationship, the expected signature of inhibition.`
          },
          {
            question: `From the table, approximately what fraction of the uninhibited rate remains at 20 µM inhibitor?`,
            options: [`About 30% (rate falls from 100 to 30)`, `About 64%`, `About 82%`, `About 8%`],
            correctAnswer: 0,
            explanation: `The control rate is 100 µmol/min and the rate at 20 µM is 30 µmol/min, so $30/100 = 30\\%$ of activity remains. Anchoring every row to the $0\\ \\mu\\text{M}$ control makes these comparisons fast.`
          }
        ]
      }
    },
    {
      id: 'sp2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Trends, Units & Causation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage reports a sigmoidal (S-shaped) curve of oxygen saturation vs. partial pressure. This shape most directly indicates:`,
            options: [`Cooperative binding, as seen in hemoglobin`, `Simple linear diffusion`, `Enzyme denaturation`, `A first-order rate law`],
            correctAnswer: 0,
            explanation: `A sigmoidal binding curve is the hallmark of positive cooperativity — binding of one ligand increases affinity for the next. Hemoglobin's O₂ binding is the canonical MCAT example; myoglobin, by contrast, gives a hyperbolic curve.`
          },
          {
            question: `An answer choice gives a rate in mol/s, but the table reports µmol/min. Before selecting, you should:`,
            options: [`Convert units so the table value and answer choice are directly comparable`, `Ignore units since the numbers are close`, `Assume the choice is wrong because units differ`, `Pick it anyway — units never affect MCAT answers`],
            correctAnswer: 0,
            explanation: `Mismatched units are a deliberate trap. Convert carefully ($1\\ \\mu\\text{mol/min} = \\frac{10^{-6}}{60}\\ \\text{mol/s}$) so the magnitude lines up. Many wrong choices are correct numbers with the wrong units.`
          },
          {
            question: `A passage shows that ice-cream sales and drowning deaths rise together over the year. The safest interpretation is:`,
            options: [`The two are correlated, likely via a confounder such as hot weather — not causally linked`, `Ice cream causes drowning`, `Drowning causes ice-cream sales`, `One variable must be the control`],
            correctAnswer: 0,
            explanation: `Correlation $\\neq$ causation. A lurking variable (summer heat) drives both. The MCAT rewards recognizing confounders rather than asserting a direct causal link from co-movement alone.`
          }
        ]
      }
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Always identify axes, units, and trends FIRST
- Anchor table rows to the control row, then describe the overall trend
- Plateaus = saturation. Sigmoidal = cooperativity. Linear = proportional.
- Convert units before comparing to answer choices
- Correlation $\\neq$ Causation — always look for confounding variables`
    }
  ]
};
