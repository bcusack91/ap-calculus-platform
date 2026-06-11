export const mcatLabMethodsPart1Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm1-intro',
      type: 'text' as const,
      content: `# Laboratory Methods & Separations

**Part 1 of 5 — Chromatography (Separating by Affinity)**

Chromatography separates a mixture distributed between a **stationary phase** (fixed) and a **mobile phase** (moving). Molecules that interact MORE with the stationary phase move SLOWER.

$$\\text{Separation} \\;\\propto\\; \\frac{\\text{affinity for stationary phase}}{\\text{affinity for mobile phase}}$$

### Major Chromatography Types

| Type | Stationary / Mobile | Separates by | Note |
|------|---------------------|--------------|------|
| **TLC** | Polar silica plate / nonpolar solvent | Polarity | Polar compounds stick (low $R_f$) |
| **Column** | Silica packing / eluent | Polarity | Preparative scale |
| **Gas (GC)** | Liquid-coated column / inert gas | Volatility + polarity | Volatile, thermally stable analytes |
| **HPLC** | Solid particles / pressurized liquid | Polarity | High resolution |
| **Size-exclusion** | Porous beads / buffer | **Size** | LARGE elutes FIRST |
| **Ion-exchange** | Charged resin / buffer | Charge | Eluted by salt/pH gradient |
| **Affinity** | Ligand-bound resin / buffer | Specific binding | Highest specificity |

### Retention Factor ($R_f$) for TLC

$$R_f = \\frac{\\text{distance traveled by spot}}{\\text{distance traveled by solvent front}}$$

- $R_f$ is always between 0 and 1.
- **Normal phase** (polar plate): nonpolar compounds travel farther → higher $R_f$.
- A compound that "streaks" or sticks at the baseline ($R_f \\approx 0$) is too polar for the chosen solvent.`
    },
    {
      id: 'lm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Chromatography** 🎯`,
      exercise: {
        questions: [
          {
            question: `On a normal-phase TLC plate (polar silica), which compound travels the FARTHEST (highest $R_f$)?`,
            options: [`A nonpolar hydrocarbon`, `A carboxylic acid`, `An alcohol`, `An amine`],
            correctAnswer: 0,
            explanation: `Normal-phase silica is polar, so polar analytes (acids, alcohols, amines) bind the plate and lag. A nonpolar hydrocarbon interacts little with the plate and is carried up with the mobile phase → highest $R_f$.`
          },
          {
            question: `In size-exclusion chromatography, the FIRST proteins to elute from the column are:`,
            options: [`The largest proteins, which cannot enter the pores`, `The smallest proteins, which fit through gaps`, `The most positively charged proteins`, `The most hydrophobic proteins`],
            correctAnswer: 0,
            explanation: `Size-exclusion (gel filtration) beads have pores that trap small molecules, lengthening their path. Large molecules are excluded from the pores and take the short route around the beads → they elute FIRST. This is the counterintuitive point the MCAT tests.`
          },
          {
            question: `You want to purify a His-tagged recombinant protein in a single step from a cell lysate. The best technique is:`,
            options: [`Affinity chromatography with a nickel column`, `Size-exclusion chromatography`, `Thin-layer chromatography`, `Gas chromatography`],
            correctAnswer: 0,
            explanation: `Affinity chromatography exploits a specific interaction — a His-tag binds immobilized Ni²⁺ ions, while everything else washes through. Eluting with imidazole releases the pure protein. This single-step specificity is why affinity is the go-to for tagged recombinant proteins.`
          }
        ]
      }
    },
    {
      id: 'lm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Chromatography

<details>
<summary><b>Example 1: Compute and interpret an $R_f$ value</b></summary>

**Question:** On a TLC plate, a spot travels 3.0 cm while the solvent front travels 7.5 cm. Find $R_f$. If a second compound has $R_f = 0.80$, which is more polar (normal phase)?

**Solution:**
$$R_f = \\frac{3.0}{7.5} = 0.40$$
The first compound ($R_f = 0.40$) traveled less far than the second ($R_f = 0.80$). On a polar normal-phase plate, lower $R_f$ = stronger binding = MORE polar. So compound 1 is more polar. ✓

**MCAT note:** To raise a stuck polar compound's $R_f$, use a MORE polar mobile phase (it competes the analyte off the plate).
</details>

<details>
<summary><b>Example 2: Choose a chromatography method from the separation goal</b></summary>

**Question:** A lysate contains proteins differing mainly in net charge at pH 7. Which method best separates them, and how are they eluted?

**Solution:**
1. Differences in CHARGE → **ion-exchange chromatography.** ✓
2. A cation-exchange resin (negatively charged) binds positively charged proteins; an anion-exchange resin binds negative ones.
3. Elution: apply a **salt gradient** (competing ions displace the protein) or change **pH** (toward the protein's pI to neutralize it). Weakly bound proteins elute first.

**Key idea:** Match the molecular property that differs (size, charge, polarity, specific binding) to the mechanism of the column.
</details>

<details>
<summary><b>Example 3: Predict GC elution order</b></summary>

**Question:** A mixture of pentane (bp 36 °C), hexane (bp 69 °C), and octane (bp 126 °C) is run on a nonpolar GC column. Predict the elution order.

**Solution:**
1. GC separates largely by **volatility** (boiling point) on a nonpolar column.
2. The most volatile (lowest bp) spends the most time in the gas/mobile phase → elutes FIRST.
3. Order: **pentane → hexane → octane.** ✓

**Connection:** On GC, low boiling point = short retention time. Adding polarity to the column would further retain polar analytes regardless of bp.
</details>`
    },
    {
      id: 'lm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Chromatography = partition between stationary and mobile phases; stronger stationary affinity = slower migration.
- $R_f$ = (spot distance)/(solvent front); normal phase → nonpolar travels farther.
- Size-exclusion: LARGE elutes first. Ion-exchange: separates by charge, elute with salt/pH. Affinity: most specific (e.g., His-tag/Ni).
- GC separates volatile analytes; lowest boiling point elutes first.`
    }
  ]
};
