export const mcatLabMethodsPart2Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm2-intro',
      type: 'text' as const,
      content: `# Laboratory Methods & Separations

**Part 2 of 5 — Electrophoresis (Separating by Size & Charge)**

Electrophoresis drives charged molecules through a gel matrix in an electric field. Migration depends on **charge**, **size**, and the gel's sieving.

$$\\text{Migration velocity} \\;\\propto\\; \\frac{q \\, E}{f}$$

where $q$ = net charge, $E$ = field strength, and $f$ = frictional drag (rises with size and gel density).

### Key Variants

| Method | What is varied | Separates by | Key reagent |
|--------|----------------|--------------|-------------|
| **SDS-PAGE** | Proteins coated with SDS (uniform − charge) | **Size only** | SDS + heat (denature) |
| **Native PAGE** | No denaturant | Size, shape, AND charge | — |
| **Agarose gel** | DNA/RNA (uniformly − backbone) | **Size only** | Ethidium bromide stain |
| **Isoelectric focusing (IEF)** | pH gradient | **pI** (stop where net charge = 0) | Ampholytes |
| **2D gel** | IEF then SDS-PAGE | pI × size | Combines both |

### Direction of Migration

- DNA and SDS-coated proteins carry NET NEGATIVE charge → migrate toward the **anode (+)**.
- Smaller molecules thread through the gel faster → travel FARTHER.

### Isoelectric Point (pI)

$$\\text{At pH} = \\text{pI}, \\quad \\text{net charge} = 0 \\Rightarrow \\text{molecule stops migrating}$$

- pH > pI → molecule is net **negative** → moves to anode (+).
- pH < pI → molecule is net **positive** → moves to cathode (−).`
    },
    {
      id: 'lm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Electrophoresis** 🎯`,
      exercise: {
        questions: [
          {
            question: `SDS-PAGE separates proteins essentially by size alone because SDS:`,
            options: [`Coats proteins with a uniform negative charge proportional to length, masking native charge`, `Cleaves proteins into equal fragments`, `Binds only positively charged residues`, `Forms a pH gradient in the gel`],
            correctAnswer: 0,
            explanation: `SDS is an anionic detergent that denatures proteins and binds along the polypeptide in roughly constant ratio, giving every protein a similar charge-to-mass ratio. With charge effectively normalized, the gel sieves by SIZE only — smaller proteins migrate farther.`
          },
          {
            question: `A protein with pI = 5.0 is placed in a gel buffered at pH 8.0. In an electric field it will:`,
            options: [`Carry a net negative charge and migrate toward the anode (+)`, `Carry a net positive charge and migrate toward the cathode (−)`, `Have no net charge and stay put`, `Precipitate immediately`],
            correctAnswer: 0,
            explanation: `When buffer pH (8.0) is ABOVE the pI (5.0), the protein is deprotonated overall → net negative → it migrates toward the positive electrode (anode). If pH were below pI it would be net positive and move to the cathode.`
          },
          {
            question: `In isoelectric focusing, each protein migrates until it reaches the point in the pH gradient where:`,
            options: [`pH equals its pI and its net charge is zero`, `pH is maximally acidic`, `it is fully denatured`, `it binds SDS`],
            correctAnswer: 0,
            explanation: `IEF runs proteins through a stable pH gradient. A protein keeps moving as long as it is charged; once it reaches the pH equal to its pI, its net charge is zero, the electric force vanishes, and it focuses into a sharp band. This separates proteins by pI with very high resolution.`
          }
        ]
      }
    },
    {
      id: 'lm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Electrophoresis

<details>
<summary><b>Example 1: Read an SDS-PAGE gel for molecular weight</b></summary>

**Question:** On an SDS-PAGE gel, a ladder shows bands at 75, 50, 37, and 25 kDa from top to bottom. An unknown protein runs slightly below the 37 kDa marker. Estimate its mass and explain the logic.

**Solution:**
1. In SDS-PAGE, SMALLER proteins migrate FARTHER (lower on the gel). ✓
2. The unknown sits between 37 and 25 kDa, closer to 37 → roughly **~33 kDa.** ✓
3. Migration distance varies linearly with log(MW), so the ladder calibrates the estimate.

**MCAT trap:** "Lower on the gel = larger" is WRONG. Lower = traveled farther = smaller.
</details>

<details>
<summary><b>Example 2: Predict migration direction from pI and pH</b></summary>

**Question:** Three proteins (pI = 4, 7, 9) are loaded into native gels buffered at pH 7. Predict each protein's migration.

**Solution:**
- pI 4 (pH 7 > pI): net negative → migrates to **anode (+).** ✓
- pI 7 (pH 7 = pI): net charge ≈ 0 → essentially **does not migrate.** ✓
- pI 9 (pH 7 < pI): net positive → migrates to **cathode (−).** ✓

**Key rule:** Compare buffer pH to pI. Above pI → negative → anode. Below pI → positive → cathode.
</details>

<details>
<summary><b>Example 3: Interpret a 2D gel result</b></summary>

**Question:** A researcher runs a 2D gel (IEF horizontally, SDS-PAGE vertically). Two spots have the same vertical position but different horizontal positions. What does this tell you?

**Solution:**
1. Same VERTICAL position (SDS-PAGE dimension) → same molecular weight/size. ✓
2. Different HORIZONTAL position (IEF dimension) → different pI. ✓
3. Conclusion: the two species are the same size but differ in charge — consistent with **post-translational modifications** (e.g., phosphorylation adds negative charge, lowering pI) producing protein isoforms.

**Why 2D matters:** It resolves proteins that co-migrate in a single dimension by separating on two independent properties.
</details>`
    },
    {
      id: 'lm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Migration ∝ charge × field / friction; smaller molecules travel farther through the gel.
- SDS-PAGE: size only (SDS normalizes charge). Agarose: DNA by size. Native PAGE: size + shape + charge.
- IEF separates by pI; molecule stops where pH = pI (net charge 0).
- pH > pI → net negative → anode (+); pH < pI → net positive → cathode (−).`
    }
  ]
};
