export const mcatLabMethodsPart2Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm2-intro',
      type: 'text' as const,
      content: `# Lab Methods: Separations & Electrophoresis

**Part 2 of 2 — Electrophoresis (Separating by Size & Charge)**

Electrophoresis drives charged molecules through a gel matrix in an electric field. Migration depends on **charge**, **size**, and the gel's sieving.

$$\\text{Migration velocity} \\;\\propto\\; \\frac{q \\, E}{f}$$

where $q$ = net charge, $E$ = field strength, and $f$ = frictional drag (rises with size and gel density).

### Key Variants

| Method | What is varied | Separates by | Key reagent |
|--------|----------------|--------------|-------------|
| **SDS-PAGE** | Proteins coated with SDS (uniform − charge) | **Size only** | SDS + heat (denature) |
| **Reducing vs. non-reducing SDS-PAGE** | With or without a disulfide reducer | Reducing: each chain separately; non-reducing: disulfide-linked chains together | β-mercaptoethanol or DTT |
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
- pH < pI → molecule is net **positive** → moves to cathode (−).
- The farther the buffer pH sits from the pI, the larger the net charge, so (at equal size and shape) the faster the molecule migrates.`
    },
    {
      id: 'lm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Electrophoresis** 🎯`,
      exercise: {
        questions: [
          {
            question: `SDS-PAGE separates proteins essentially by size alone because SDS:`,
            options: [`Coats proteins in negative charge proportional to length`, `Cleaves each protein into fragments of equal length`, `Binds only the positively charged residues of each protein`, `Keeps each protein folded so shape sets its mobility`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `SDS is an anionic detergent that denatures proteins and binds along the polypeptide in roughly constant ratio, giving every protein a similar charge-to-mass ratio and masking its native charge. It does not cut the chain, and because it unfolds proteins, native shape no longer matters. With charge effectively normalized, the gel sieves by SIZE only — smaller proteins migrate farther.`
          },
          {
            question: `A protein with pI = 5.0 is placed in a gel buffered at pH 8.0. In an electric field it will:`,
            options: [`Carry a net negative charge and migrate toward the anode (+)`, `Carry a net positive charge and migrate toward the cathode (−)`, `Carry a net positive charge and migrate toward the anode (+)`, `Carry a net negative charge and migrate toward the cathode (−)`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `When buffer pH (8.0) is ABOVE the pI (5.0), the protein is deprotonated overall → net negative → it migrates toward the positive electrode (anode). Opposite charges attract, so a negative species never runs to the cathode and a positive one never runs to the anode. If pH were below pI it would be net positive and move to the cathode; only at pH = pI would it carry no net charge.`
          },
          {
            question: `In isoelectric focusing, each protein migrates until it reaches the point in the pH gradient where:`,
            options: [`pH equals its pI and its net charge is zero`, `pH equals a side chain's pKa and that group is half protonated`, `the gel pores become too small for it to pass`, `pH is lowest and its charge is most positive`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `IEF runs proteins through a stable pH gradient. A protein keeps moving as long as it is charged; once it reaches the pH equal to its pI, its net charge is zero, the electric force vanishes, and it focuses into a sharp band. This separates proteins by pI with very high resolution. A single side chain's pKa is not the stopping point, IEF gels are not size-sieving, and at the most acidic end a protein would be strongly positive and still moving.`
          }
        ]
      }
    },
    {
      id: 'lm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Electrophoresis

**Problem 1.** An SDS-PAGE ladder shows bands at 75, 50, 37 and 25 kDa from top to bottom. An unknown protein runs slightly below the 37 kDa marker.

- **(a)** Does a band lower on the gel belong to a larger or a smaller protein?
- **(b)** Between which markers does the unknown fall, and what is its approximate mass?
- **(c)** Why can the ladder calibrate the estimate?

**(a) Lower = smaller.** In SDS-PAGE, SMALLER proteins migrate FARTHER, so a band lower on the gel traveled farther and is smaller. "Lower on the gel = larger" is the classic trap.

**(b) Estimate.** The unknown sits between the 37 and 25 kDa markers, closer to 37, so its mass is roughly **~33 kDa.**

**(c) Calibration.** Migration distance varies linearly with log(MW), so the ladder's known bands define the line the unknown is read against.

**Problem 2.** Three proteins with pI = 4, 7 and 9 are loaded into native gels buffered at pH 7 (wells in the center of the gel).

- **(a)** Which way does the pI 4 protein migrate?
- **(b)** What does the pI 7 protein do?
- **(c)** Which way does the pI 9 protein migrate?

**(a) pI 4.** pH 7 > pI, so the protein is net negative and migrates to the **anode (+).**

**(b) pI 7.** pH 7 = pI, so its net charge is ≈ 0 and it essentially **does not migrate.**

**(c) pI 9.** pH 7 < pI, so the protein is net positive and migrates to the **cathode (−).** The rule in every case: compare buffer pH to pI. Above pI → negative → anode; below pI → positive → cathode.

**Problem 3.** A researcher runs a 2D gel (IEF horizontally, SDS-PAGE vertically). Two spots have the same vertical position but different horizontal positions.

- **(a)** What does the shared vertical position tell you?
- **(b)** What does the different horizontal position tell you?
- **(c)** What could produce such a pair of spots?

**(a) Same size.** The vertical dimension is SDS-PAGE, so the two species have the same molecular weight.

**(b) Different pI.** The horizontal dimension is IEF, so the two species have different isoelectric points, that is, different charge.

**(c) Isoforms.** Same size but different charge fits a **post-translational modification**: phosphorylation adds negative charge and lowers the pI, giving a protein isoform. That is why 2D gels matter: they split proteins that co-migrate in one dimension.`
    },
    {
      id: 'lm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Migration ∝ qE/f.** More charge or a stronger field speeds a molecule; larger size or a denser gel slows it.
- **SDS-PAGE sorts by size.** SDS unfolds proteins and coats them in negative charge, so the gel sieves by size alone.
- **pH vs. pI sets direction.** pH > pI: net negative, to the anode (+); pH < pI: net positive, to the cathode (−).
- **IEF and 2D gels.** IEF stops each protein where pH = pI; a 2D gel adds SDS-PAGE to separate by pI and size.

**Common traps**

- **Lower band = larger.** A band lower on the gel traveled farther, so it is the SMALLER molecule.
- **Negative to the cathode.** DNA and SDS-coated proteins are net negative and always run to the positive anode.
- **Native gel = size only.** Without SDS, a native gel separates by size, shape and charge together.
- **Same height, same protein.** Two 2D spots at one height share a size but differ in pI, as a phosphorylated isoform does.

**Next up:** the *Lab Methods: Centrifugation, Spectroscopy & Assays* lesson — centrifugation, UV-Vis, IR, NMR and mass spectrometry with Beer's law, and the blots, PCR and ELISA that detect what a separation isolates.`
    }
  ]
};
