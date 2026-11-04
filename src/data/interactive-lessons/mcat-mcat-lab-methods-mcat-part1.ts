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

### Chromatography for Proteins

| Type | Stationary / Mobile | Separates by | Note |
|------|---------------------|--------------|------|
| **Size-exclusion** | Porous beads / buffer | **Size** | LARGE elutes FIRST |
| **Ion-exchange** | Charged resin / buffer | Charge | Eluted by salt/pH gradient |
| **Affinity** | Ligand-bound resin / buffer | Specific binding | Highest specificity |

### Retention Factor ($R_f$) for TLC

$$R_f = \\frac{\\text{distance traveled by spot}}{\\text{distance traveled by solvent front}}$$

- $R_f$ is always between 0 and 1.
- **Normal phase** (polar plate): nonpolar compounds travel farther → higher $R_f$.
- A compound that sticks at the baseline ($R_f \\approx 0$) is too polar for the chosen solvent.
- **Reverse phase** (a NONPOLAR stationary phase, such as C18-coated silica, with a polar mobile phase) flips the order: POLAR compounds elute first. Most HPLC is run in reverse phase.

### Column, GC and HPLC in Practice

- **Column chromatography** is TLC scaled up for purification: the mixture is loaded on top of a silica column, solvent (the **eluent**) runs down through it, and fractions are collected as they leave. On polar silica the LEAST polar compound elutes first. A **gradient** that makes the eluent steadily more polar pushes the strongly bound compounds off last; a TLC plate run on the fractions shows which ones hold the product.
- **Gas chromatography** vaporizes the sample in a heated injector, and an inert carrier gas (helium or nitrogen) sweeps it through the column, so an analyte must be **volatile and thermally stable**. Elution follows boiling point on a nonpolar column; a polar column also holds polar analytes back. A compound's **retention time** identifies it against a standard, and its peak area measures how much is present.
- **HPLC** pumps a liquid mobile phase through a tightly packed column at high pressure, which gives sharp separations at room temperature. It handles what GC cannot: **nonvolatile, heat-sensitive or large molecules** such as drugs, peptides and sugars. Most runs are reverse phase, so polar analytes elute first and raising the organic fraction of the mobile phase brings the nonpolar ones off.
- **Choosing among them:** volatile and stable → GC; nonvolatile or heat-sensitive → HPLC; milligram-to-gram purification → column; a quick check of purity or reaction progress → TLC.`
    },
    {
      id: 'lm1-separations',
      type: 'text' as const,
      content: `### Extraction — Partitioning Between Immiscible Solvents

- **Liquid–liquid extraction** shakes a mixture with two immiscible solvents, usually water and an organic solvent; each solute moves into the layer it dissolves in better ("like dissolves like").
- **Which layer is on top?** The less dense one: diethyl ether floats on water; dichloromethane (DCM) sinks below it.
- **Several small extractions beat one large one** of the same total volume: each fresh portion removes the same fraction of what is left.
- **Drying the organic layer:** a **brine** (saturated NaCl) wash pulls out dissolved water; anhydrous $\\text{MgSO}_4$ removes the last traces.

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

A liquid boils when its vapor pressure equals the external pressure, and the vapor above a boiling mixture is RICHER in the more volatile (lower-bp) component. Distillation collects that vapor and condenses it, so it separates liquids by boiling point: the more volatile component distills first.

| Type | Use it when | How it works |
|---|---|---|
| **Simple** | boiling points differ by more than ~25 °C, or a liquid is separated from nonvolatile solids (or a product from its solvent) | one vaporize–condense cycle |
| **Fractional** | boiling points are closer than ~25 °C | a packed column gives many vaporize–condense cycles, each enriching the vapor further |
| **Vacuum** | the compound boils very high (above ~150 °C) or decomposes when heated | lower pressure lowers the boiling point |

- **Why fractional works.** Each time vapor condenses on the column packing and re-boils, it grows richer in the more volatile component, so a long, well-packed column behaves like many simple distillations in series. The thermometer at the top holds steady at one boiling point while a pure component comes over and climbs when the next one arrives.

### Recrystallization & Melting Point

- **Recrystallization** purifies a solid: dissolve it in a MINIMUM of hot solvent, cool slowly, and filter off the crystals. Impurities stay behind in the cold solvent (the **mother liquor**).
- **Choosing the solvent.** The compound must be SOLUBLE HOT and INSOLUBLE COLD, a steep solubility curve, while each impurity is either soluble at every temperature (it stays in solution) or insoluble even when hot (it is removed by **hot filtration** before cooling). The solvent must not react with the compound and should be volatile enough to dry off the crystals.
- **Why minimum hot solvent.** Every extra milliliter keeps some product dissolved at the cold temperature and lowers the recovery; too little, and the compound never dissolves.
- **Why slow cooling.** Crystals that grow slowly exclude impurities; a crash-cooled solution traps them. Chill in ice only at the end to force out the last product, and rinse the crystals with a little ICE-COLD solvent so the wash dissolves as little as possible.
- **Melting point checks purity.** A pure solid melts sharply at its known value; impurities make the melting point LOWER and the range BROADER.
- **Mixed melting point.** Mix the unknown with an authentic sample: an unchanged, sharp melting point means the same compound; a lower, broader one means they differ.

### Dialysis & Salting Out

- **Dialysis** separates by size through a semipermeable membrane: salts and small molecules diffuse out into the buffer, while proteins stay inside.
- **Salting out** precipitates proteins with a high salt concentration (classically ammonium sulfate), which competes for their water of hydration.

### Design the Workup — Match the Separation to the Property

Every separation exploits ONE property that the components do not share. Find that property first; the method follows.

| Components differ in | Method |
|---|---|
| Solid vs. liquid (an insoluble solid in a solvent) | Filtration (vacuum filtration for crystals) |
| Acid or base vs. neutral | Acid–base extraction, then recover by neutralizing the extract |
| Water solubility vs. organic solubility | Liquid–liquid extraction; brine wash, then dry |
| Boiling point of miscible liquids | Simple (gap > ~25 °C), fractional (closer) or vacuum (heat-sensitive) distillation |
| Solubility of a solid, hot vs. cold | Recrystallization; melting point confirms purity |
| Polarity of small molecules | TLC to check, column or HPLC to purify |
| Volatility | GC (analytical) |
| Protein size, charge or specific binding | Size-exclusion, ion-exchange or affinity chromatography |

A typical workup chains these steps: wash the reaction mixture to remove acids, bases and water-soluble material, dry and evaporate the organic solvent, then distill a liquid product or recrystallize a solid one.`
    },
    {
      id: 'lm1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Chromatography & Extraction

**Problem 1.** On a normal-phase (polar silica) TLC plate, a spot travels $3.0$ cm while the solvent front travels $7.5$ cm. A second compound on the same plate has $R_f = 0.80$.

- **(a)** What is the first compound's $R_f$?
- **(b)** Which of the two compounds is more polar?
- **(c)** Had the first compound stuck at the baseline, how would you change the mobile phase to raise its $R_f$?
- **(d)** If the same two compounds were injected onto a reverse-phase HPLC column, which would elute first?

**(a) Retention factor.** $R_f = \\dfrac{3.0}{7.5} = 0.40$

**(b) Polarity.** With $R_f = 0.40$ from (a), the first compound traveled less far than the second ($R_f = 0.80$). On a polar normal-phase plate, lower $R_f$ = stronger binding = MORE polar, so compound 1 is the more polar one.

**(c) Raising a stuck spot.** Use a MORE polar mobile phase: it competes the polar analyte off the silica, so the spot travels farther and its $R_f$ rises.

**(d) Reverse phase flips it.** A C18 column is NONPOLAR and the mobile phase polar, so the order reverses: compound 1, the more polar one from (b), prefers the mobile phase and elutes FIRST, while the less polar compound 2 is held by the C18 chains and comes off later.

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
      id: 'lm1-worked-purification',
      type: 'text' as const,
      content: `### Worked Examples — Distillation, Recrystallization & Workup Design

**Problem 1.** Ethyl benzoate (bp 212 °C) is made by heating benzoic acid with excess ethanol and an $\\text{H}_2\\text{SO}_4$ catalyst. The crude mixture is diluted with diethyl ether and worked up in a separatory funnel.

- **(a)** Which aqueous wash removes the unreacted benzoic acid and the catalyst, and what is seen in the funnel?
- **(b)** Where does the excess ethanol end up?
- **(c)** After the ether layer is dried, how is the ether removed from the product?
- **(d)** The crude ester darkens when held near its boiling point. Which final purification is appropriate?

**(a) Bicarbonate wash.** Aqueous $\\text{NaHCO}_3$ deprotonates benzoic acid to sodium benzoate and neutralizes the sulfuric acid; both move into the water layer, and the funnel fizzes with $\\text{CO}_2$, so it is vented. The neutral ester stays in the ether.

**(b) Ethanol.** It is miscible with water, so it leaves with the aqueous washes; a brine wash pulls out the last of it along with dissolved water. The ether now holds the ester, which is dried over anhydrous $\\text{MgSO}_4$.

**(c) Stripping the solvent.** Ether boils at 35 °C and the ester at 212 °C, a gap far beyond 25 °C, so simple distillation (or a rotary evaporator) removes the ether and leaves the crude ester behind.

**(d) Vacuum distillation.** A 212 °C boiling point is high and the compound degrades when held there, so distill under reduced pressure: lower pressure lowers the boiling point, and the ester comes over intact.

**Problem 2.** Mixture A holds cyclohexane (bp 81 °C) and toluene (bp 111 °C). Mixture B holds heptane (bp 98 °C) and toluene.

- **(a)** In each mixture, which component distills first?
- **(b)** Is simple distillation adequate for mixture A?
- **(c)** Which method separates mixture B, and why does it succeed where simple distillation fails?
- **(d)** What should the thermometer at the top read while the first component is collected, and what signals the second?

**(a) Most volatile first.** The lower-boiling component distills first: cyclohexane (81 °C) from mixture A and heptane (98 °C) from mixture B.

**(b) Mixture A.** The gap is 111 − 81 = 30 °C, more than ~25 °C, so one vaporize–condense cycle gives a clean separation: simple distillation is adequate.

**(c) Mixture B.** The gap is only 111 − 98 = 13 °C, so the vapor from one cycle is still a mixture. Fractional distillation's packed column repeats the vaporize–condense cycle many times, each enriching the vapor in heptane until pure heptane reaches the top.

**(d) Reading the thermometer.** It holds steady at the boiling point of the component coming over (about 81 °C for A, 98 °C for B). When the reading climbs toward 111 °C, toluene is arriving: switch the receiving flask.

**Problem 3.** Compound X dissolves in water at 1.0 g per 100 mL at 20 °C and 25 g per 100 mL at 100 °C; in ethanol it dissolves at 20 g per 100 mL even at 20 °C. A 5.0 g crude sample of X holds a trace of an impurity that stays dissolved in cold water.

- **(a)** Which solvent suits recrystallizing X?
- **(b)** What is the minimum volume of boiling water needed to dissolve the 5.0 g?
- **(c)** After cooling to 20 °C, what is the maximum mass of X recovered, and how would using 60 mL of water instead change it?

**(a) Water.** X is very soluble in hot water (25 g/100 mL) and only slightly soluble in cold (1.0 g/100 mL), a steep curve, and the impurity stays dissolved on cooling. Ethanol dissolves 20 g/100 mL even cold, so X would never crystallize from it.

**(b) Minimum volume.** $5.0\\;\\text{g} \\div \\dfrac{25\\;\\text{g}}{100\\;\\text{mL}} = 20\\;\\text{mL}$ of boiling water.

**(c) Recovery.** With the 20 mL from (b), cold water keeps $1.0 \\times \\dfrac{20}{100} = 0.20$ g dissolved, so at most $5.0 - 0.20 = 4.8$ g (96 %) crystallizes. With 60 mL it keeps 0.60 g and the recovery falls to 4.4 g (88 %): every extra milliliter costs product, so dissolve in the MINIMUM of hot solvent.`
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
          },
          {
            question: `Which sample is best analyzed by gas chromatography?`,
            options: [`A fuel blend of low-boiling hydrocarbons`, `A peptide drug that decomposes on heating`, `A mixture of nonvolatile plant sugars`, `A set of intact 50 kDa enzymes`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `GC vaporizes the sample in a heated injector and a carrier gas sweeps it through the column, so it needs volatile, thermally stable analytes: low-boiling hydrocarbons elute in boiling-point order on a nonpolar column. A heat-sensitive peptide decomposes in the injector, sugars do not vaporize, and intact enzymes are far too large and nonvolatile; those samples go to HPLC or to protein chromatography.`
          },
          {
            question: `An alkane, a ketone and a carboxylic acid are loaded onto a silica column and eluted with a hexane-to-ethyl acetate gradient. In what order do they elute?`,
            options: [`Alkane, then ketone, then carboxylic acid`, `Carboxylic acid, then ketone, then alkane`, `Ketone first, then the alkane and acid together`, `All three together, since the gradient moves each equally`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Polar silica holds the most polar compound longest. The alkane barely interacts and comes off with the early, mostly hexane eluent; the ketone's C=O dipole holds it back until the eluent grows more polar; the hydrogen-bonding carboxylic acid clings hardest and elutes last, near the ethyl acetate end of the gradient. The reverse order would need a nonpolar reverse-phase column, a ketone cannot beat an alkane off polar silica, and the gradient is what spreads the three apart rather than moving them together.`
          }
        ]
      }
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
          },
          {
            question: `Two miscible liquids boil at 65 °C and 118 °C; a second pair boil at 78 °C and 82 °C. Which distillation plan is correct?`,
            options: [`Simple for the first pair, fractional for the second`, `Fractional for both pairs`, `Simple for both pairs`, `Fractional for the first pair, simple for the second`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The first pair's boiling points differ by 53 °C, well over ~25 °C, so one vaporize–condense cycle separates them and simple distillation suffices. The second pair differ by only 4 °C, so the vapor from one cycle is still a mixture and a fractionating column's repeated cycles are needed. Using fractional for both wastes effort on the first pair, simple for both fails on the second, and swapping the two plans gets each pair wrong.`
          },
          {
            question: `A solid dissolves in solvent P at 2 g/100 mL cold and 40 g/100 mL hot, in solvent Q at 30 g/100 mL cold and 45 g/100 mL hot, and in solvent R at 0.1 g/100 mL cold and 0.4 g/100 mL hot. Which solvent should be used for recrystallization?`,
            options: [`P: its solubility rises steeply on heating`, `Q: it dissolves the most solid when hot`, `R: almost nothing stays dissolved when cold`, `An equal-volume mixture of Q and R`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `A recrystallization solvent must dissolve the compound well hot and poorly cold, and P's twentyfold rise on heating is exactly that curve. Q dissolves most of the solid even cold, so little would crystallize out; R barely dissolves it even hot, so a huge volume would be needed. A two-solvent mixture is a fallback for when no single solvent works, not the choice when P already does.`
          },
          {
            question: `An amine is coupled with benzoic acid to give a neutral amide. The crude ether solution holds the amide, unreacted amine and unreacted benzoic acid. Which pair of washes leaves only the amide in the ether?`,
            options: [`Dilute HCl, then aqueous $\\text{NaHCO}_3$`, `Aqueous $\\text{NaHCO}_3$, then brine`, `Dilute HCl, then brine`, `Water, then brine, which take both impurities`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Each impurity leaves once it becomes a salt: dilute HCl protonates the amine to an ammonium ion that moves into the water, and bicarbonate deprotonates benzoic acid to benzoate, which follows; the amide, neither basic nor acidic enough to react, stays in the ether. Bicarbonate then brine removes only the acid, HCl then brine removes only the amine, and water then brine takes neither, since a neutral amine and benzoic acid both prefer the ether.`
          }
        ]
      }
    },
    {
      id: 'lm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Match method to property.** Polarity: TLC, column, HPLC; volatility: GC; size: size-exclusion; charge: ion-exchange; binding: affinity.
- **Retention factor.** $R_f$ = spot distance ÷ front distance (0 to 1); on polar silica the more polar compound has the lower $R_f$.
- **Acid–base extraction.** Make it a salt to move it into water: HCl takes amines, $\\text{NaHCO}_3$ carboxylic acids, NaOH phenols too.
- **Liquids by bp, solids by solubility.** Simple distillation needs a bp gap over ~25 °C; recrystallize from minimum hot solvent; impurities lower the mp.

**Common traps**

- **Small elutes first.** In size-exclusion, LARGE molecules skip the bead pores and elute first; small ones are delayed.
- **High $R_f$ means polar.** On normal-phase silica a high $R_f$ marks the LESS polar compound.
- **Reverse phase reverses the order.** On a nonpolar reverse-phase column, POLAR compounds elute first, the opposite of normal phase.
- **Bicarbonate for a phenol.** $\\text{NaHCO}_3$ deprotonates only carboxylic acids; pulling a phenol into water takes NaOH.`
    }
  ]
};
