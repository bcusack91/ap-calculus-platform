export const mcatLabMethodsPart1Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm1-intro',
      type: 'text' as const,
      content: `# Lab Methods: Separations & Electrophoresis

**Part 1 of 2 — Chromatography, Extraction, Distillation & Recrystallization**

Chromatography separates a mixture distributed between a **stationary phase** (fixed) and a **mobile phase** (moving). Molecules that interact MORE with the stationary phase move SLOWER.

$$\\text{Retention (time spent on the column)} \\;\\propto\\; \\frac{\\text{affinity for stationary phase}}{\\text{affinity for mobile phase}}$$

### Major Chromatography Types

| Type | Stationary / Mobile | Separates by | Note |
|------|---------------------|--------------|------|
| **TLC** | Polar silica plate / less polar solvent (polarity tunable) | Polarity | Polar compounds stick (low $R_f$) |
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
- A compound that sticks at the baseline ($R_f \\approx 0$) is too polar for the chosen solvent.
- **Reverse phase** (a NONPOLAR stationary phase, such as C18-coated silica, with a polar mobile phase) flips the order: POLAR compounds elute first. Most HPLC is run in reverse phase.`
    },
    {
      id: 'lm1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Chromatography** 🎯`,
      exercise: {
        questions: [
          {
            question: `On a normal-phase TLC plate (polar silica), which compound travels the FARTHEST (highest $R_f$)?`,
            options: [`A nonpolar hydrocarbon`, `A polar carboxylic acid`, `A hydrogen-bonding alcohol`, `A ketone`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Normal-phase silica is polar, so polar analytes (acids, alcohols, and even the less polar ketone with its C=O dipole) bind the plate and lag. A nonpolar hydrocarbon interacts little with the plate and is carried up with the mobile phase → highest $R_f$.`
          },
          {
            question: `In size-exclusion chromatography, the FIRST proteins to elute from the column are:`,
            options: [`The largest proteins, which cannot enter the pores`, `The smallest proteins, which move fastest, as on a gel`, `The densest proteins, which sink through the column`, `The most hydrophobic proteins, which avoid the beads`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Size-exclusion (gel filtration) beads have pores that trap small molecules, lengthening their path. Large molecules are excluded from the pores and take the short route around the beads → they elute FIRST. This is the counterintuitive point the MCAT tests: small proteins run fastest through an electrophoresis gel, but they come off a size-exclusion column LAST. Separation depends on size, not on density or hydrophobicity.`
          },
          {
            question: `You want to purify a His-tagged recombinant protein in a single step from a cell lysate. The best technique is:`,
            options: [`Affinity chromatography using a nickel-bound resin`, `Size-exclusion chromatography on porous beads`, `Ion-exchange chromatography on a charged resin`, `Reverse-phase HPLC on a hydrophobic column`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Affinity chromatography exploits a specific interaction — a His-tag binds immobilized $\\text{Ni}^{2+}$ ions, while everything else washes through. Eluting with imidazole releases the pure protein. This single-step specificity is why affinity is the go-to for tagged recombinant proteins. Size, charge, and hydrophobicity methods separate by properties many lysate proteins share, so none of them isolates the tagged protein in one step.`
          }
        ]
      }
    },
    {
      id: 'lm1-separations',
      type: 'text' as const,
      content: `### Extraction — Partitioning Between Immiscible Solvents

- **Liquid–liquid extraction** shakes a mixture with two immiscible solvents, usually water and an organic solvent. Each solute partitions toward the layer it dissolves in better ("like dissolves like").
- **Which layer is on top?** The less dense one. Diethyl ether is less dense than water, so it floats on top; dichloromethane (DCM) is denser, so it sinks below the water.
- **Several small extractions beat one large one** of the same total volume, because each fresh portion removes the same fraction of what is left.
- A **brine** (saturated NaCl) wash pulls dissolved water out of the organic layer, and an anhydrous drying agent such as $\\text{MgSO}_4$ removes the last traces.

### Acid–Base Extraction

A neutral organic molecule stays in the organic layer; turn it into a SALT (an ion) and it moves into the water layer.

| Aqueous wash | Reacts with | Moves into water as |
|---|---|---|
| Dilute HCl | amines (bases) | ammonium ion $\\text{RNH}_3^+$ |
| $\\text{NaHCO}_3$ (weak base) | carboxylic acids only (pKa ≈ 4–5) | carboxylate $\\text{RCOO}^-$ |
| NaOH (strong base) | phenols (pKa ≈ 10) as well as carboxylic acids | phenoxide $\\text{ArO}^-$ |
| — | neutral compounds | stays in the organic layer |

- **Order matters.** Wash with $\\text{NaHCO}_3$ BEFORE NaOH to separate a carboxylic acid from a phenol: bicarbonate is too weak a base to deprotonate a phenol.
- **Recovery reverses the reaction.** Acidify a carboxylate or phenoxide extract to regenerate the neutral acid; basify an ammonium extract to regenerate the amine.

### Distillation

| Type | Use it when |
|---|---|
| **Simple** | boiling points differ by more than ~25 °C, or a liquid is separated from nonvolatile solids |
| **Fractional** | boiling points are closer than ~25 °C; the column gives many vaporize–condense cycles |
| **Vacuum** | the compound boils very high or decomposes when heated; lower pressure lowers the boiling point |

The more volatile (lower-bp) component distills first.

### Recrystallization & Melting Point

- **Recrystallization** purifies a solid. Choose a solvent in which the compound is SOLUBLE HOT and INSOLUBLE COLD; dissolve it in a minimum of hot solvent, cool slowly, and filter off the crystals. Impurities stay in the cold solvent.
- **Melting point checks purity.** A pure solid melts sharply at its known value; impurities make the melting point LOWER and the range BROADER.
- **Mixed melting point.** Mix the unknown with an authentic sample: an unchanged, sharp melting point means the same compound; a lower, broader one means they differ.

### Dialysis & Salting Out

- **Dialysis** separates by size through a semipermeable membrane: salts and small molecules diffuse out into the buffer, while proteins stay inside.
- **Salting out** precipitates proteins with a high salt concentration (classically ammonium sulfate), which competes for their water of hydration.`
    },
    {
      id: 'lm1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Extraction & Purification** 🎯`,
      exercise: {
        questions: [
          {
            question: `A diethyl ether solution contains benzoic acid, phenol and naphthalene (a neutral hydrocarbon). It is shaken with aqueous $\\text{NaHCO}_3$. Which compound ends up in the aqueous layer?`,
            options: [`Benzoic acid, as sodium benzoate`, `Phenol, as its sodium phenoxide salt`, `Both acids, as their sodium salts`, `None; bicarbonate is too weak a base`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Bicarbonate is a weak base: it deprotonates a carboxylic acid (pKa ≈ 4–5), turning benzoic acid into water-soluble sodium benzoate, but it is too weak to deprotonate phenol (pKa ≈ 10), which stays in the ether with the neutral naphthalene. Moving both acids into water would take a strong base such as NaOH. Claiming bicarbonate moves nothing forgets that it is base enough for a carboxylic acid.`
          },
          {
            question: `A crude solid melts over 119–125 °C. After recrystallization it melts at 128–130 °C. What does this change indicate?`,
            options: [`It is purer: the melting point rose and the range narrowed`, `Impurities were added, as they raise the melting point`, `Trapped solvent has raised the melting point`, `A new compound formed during the process`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Impurities LOWER a melting point and BROADEN its range, so a higher, sharper melting point after recrystallization signals a purer product. Impurities never raise the melting point, and trapped solvent acts as an impurity, which would lower it. Recrystallization dissolves and re-forms the same compound's crystals rather than making a new one; a mixed melting point with an authentic sample would confirm the identity.`
          }
        ]
      }
    },
    {
      id: 'lm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Chromatography & Extraction

**Problem 1.** On a normal-phase (polar silica) TLC plate, a spot travels $3.0$ cm while the solvent front travels $7.5$ cm. A second compound on the same plate has $R_f = 0.80$.

- **(a)** What is the first compound's $R_f$?
- **(b)** Which of the two compounds is more polar?
- **(c)** Had the first compound stuck at the baseline, how would you change the mobile phase to raise its $R_f$?

**(a) Retention factor.** $R_f = \\dfrac{3.0}{7.5} = 0.40$

**(b) Polarity.** With $R_f = 0.40$ from (a), the first compound traveled less far than the second ($R_f = 0.80$). On a polar normal-phase plate, lower $R_f$ = stronger binding = MORE polar, so compound 1 is the more polar one.

**(c) Raising a stuck spot.** Use a MORE polar mobile phase: it competes the polar analyte off the silica, so the spot travels farther and its $R_f$ rises.

**Problem 2.** A diethyl ether solution holds benzoic acid, aniline (an amine) and naphthalene (neutral). You have dilute aqueous HCl, aqueous NaOH and a separatory funnel.

- **(a)** Which wash removes the aniline, and in what form?
- **(b)** Which wash then removes the benzoic acid, and in what form?
- **(c)** Where is the naphthalene at the end, and is that layer on top or below?
- **(d)** How is each extracted compound recovered from its aqueous layer?

**(a) Remove the base.** Wash with dilute HCl: it protonates the amine to the anilinium ion $\\text{C}_6\\text{H}_5\\text{NH}_3^+$, a salt that moves into the water layer. The acid and the neutral compound stay in the ether.

**(b) Remove the acid.** Wash the ether with NaOH (or $\\text{NaHCO}_3$, which is base enough for a carboxylic acid): it deprotonates benzoic acid to benzoate $\\text{C}_6\\text{H}_5\\text{COO}^-$, which moves into the water.

**(c) The neutral stays.** Naphthalene never becomes a salt, so it stays in the ether, which is less dense than water and sits on TOP. Dry the ether (brine, then $\\text{MgSO}_4$) and evaporate it to recover the naphthalene.

**(d) Recovery.** Basify the HCl extract with NaOH to regenerate neutral aniline; acidify the benzoate extract with HCl so benzoic acid precipitates or re-extracts into fresh ether.

**Problem 3.** A cell lysate contains proteins that differ mainly in their net charge at pH 7.

- **(a)** Which chromatography method best separates them?
- **(b)** Which kind of resin binds a protein that is positively charged at pH 7?
- **(c)** How are bound proteins eluted, and which come off first?

**(a) Method.** The property that differs is CHARGE → **ion-exchange chromatography.** Always match the property that differs (size, charge, polarity, specific binding) to the mechanism of the column.

**(b) Resin.** A cation-exchange resin (negatively charged) binds positively charged proteins; an anion-exchange resin (positively charged) binds negative ones.

**(c) Elution.** Apply a **salt gradient** (competing ions displace the protein) or change the **pH** toward the protein's pI to neutralize it. Weakly bound proteins elute first: the more charge a protein carries opposite the resin's, the more tightly it binds and the more salt it takes to release it.

**Problem 4.** A mixture of pentane (bp 36 °C), hexane (bp 69 °C) and octane (bp 126 °C) is run on a nonpolar GC column.

- **(a)** Which property of the analytes governs the separation on this column?
- **(b)** Which compound elutes first, and why?
- **(c)** What is the full elution order?

**(a) Volatility.** On a nonpolar column, GC separates these alkanes largely by **volatility**, that is, by boiling point.

**(b) First off the column.** Pentane, the most volatile (lowest bp), spends the most time in the gas (mobile) phase, so it elutes FIRST: on GC, low boiling point = short retention time.

**(c) Order.** **Pentane → hexane → octane.** A more polar column would also hold polar analytes back, longer than their boiling points alone predict.`
    },
    {
      id: 'lm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Match method to property.** Polarity: TLC, column, HPLC; volatility: GC; size: size-exclusion; charge: ion-exchange; binding: affinity.
- **Retention factor.** $R_f$ = spot distance ÷ solvent-front distance, always 0 to 1; on polar silica, more polar means lower $R_f$ (acid > alcohol > ketone > ether > hydrocarbon).
- **Acid–base extraction.** Make it a salt to move it into water: HCl takes amines, $\\text{NaHCO}_3$ carboxylic acids, NaOH phenols too.
- **Distillation and melting point.** Simple distillation needs a bp gap over ~25 °C; an impure solid melts lower and over a broader range.

**Common traps**

- **Small elutes first.** In size-exclusion, LARGE molecules skip the bead pores and elute first; small ones are delayed.
- **High $R_f$ means polar.** On normal-phase silica a high $R_f$ marks the LESS polar compound.
- **Reverse phase reverses the order.** On a nonpolar reverse-phase column, POLAR compounds elute first, the opposite of normal phase.
- **Bicarbonate for a phenol.** $\\text{NaHCO}_3$ deprotonates only carboxylic acids; pulling a phenol into water takes NaOH.`
    }
  ]
};
