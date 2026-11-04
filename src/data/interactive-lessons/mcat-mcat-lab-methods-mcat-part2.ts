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
| **SDS-PAGE** | SDS-coated proteins (uniform − charge) | **Size only** | SDS + heat (denature) |
| **SDS-PAGE ± reducer** | With or without a disulfide reducer | Reduced: each chain alone; non-reduced: disulfide-linked chains together | β-mercaptoethanol or DTT |
| **Native PAGE** | No denaturant | Size, shape, AND charge | — |
| **Agarose gel** | DNA/RNA (uniformly − backbone) | **Size only** | Ethidium bromide stain |
| **Isoelectric focusing (IEF)** | pH gradient | **pI** (stop where net charge = 0) | Ampholytes |
| **2D gel** | IEF then SDS-PAGE | pI × size | Combines both |

### Gels in Practice

- **Agarose vs. polyacrylamide.** Agarose forms large pores, so it suits DNA and RNA fragments of hundreds to thousands of base pairs; polyacrylamide forms fine pores, so it resolves proteins and short nucleic acids (a sequencing gel separates chains that differ by one base).
- **Gel percentage sets the pores.** A higher-percentage gel has smaller pores: it resolves small molecules and slows everything; large molecules need a low-percentage gel.
- **Sizing against a ladder.** Migration distance is linear in log(size), so a lane of known markers calibrates the gel: DNA is read in base pairs, protein in kDa.
- **Sample prep for SDS-PAGE.** Heat the sample with SDS (unfolds and coats it) and a reducer such as β-mercaptoethanol or DTT (breaks disulfides); leave the reducer out to keep disulfide-linked chains together.
- **Native PAGE** keeps proteins folded and complexes intact, so an active enzyme or a receptor–ligand complex can be run and detected as such; mobility then depends on charge, size and shape together.

### Direction of Migration

- DNA and SDS-coated proteins carry NET NEGATIVE charge → migrate toward the **anode (+)**.
- Smaller molecules thread through the gel faster → travel FARTHER.

### Isoelectric Point (pI)

$$\\text{At pH} = \\text{pI}, \\quad \\text{net charge} = 0 \\Rightarrow \\text{molecule stops migrating}$$

- pH > pI → molecule is net **negative** → moves to anode (+).
- pH < pI → molecule is net **positive** → moves to cathode (−).
- The farther the buffer pH sits from the pI, the larger the net charge, so (at equal size and shape) the faster the molecule migrates.

### Predicting and Comparing pI

- **Composition sets pI.** Many Asp and Glu side chains (negative above pH ≈ 4) give a LOW pI (pepsin ≈ 1); many Lys, Arg and His side chains (positive below their pKa) give a HIGH pI (lysozyme ≈ 11, histones ≈ 10–11).
- **For a single amino acid,** pI is the average of the two pKa values that bracket the neutral zwitterion: ≈ 6 for a neutral side chain, ≈ 3 for Asp or Glu, ≈ 10 for Lys or Arg.
- **Modifications shift pI.** Phosphorylation adds negative charge and LOWERS pI; acetylating a lysine removes a positive charge and lowers it too.
- **Solubility is lowest at the pI.** With no net charge, molecules no longer repel one another and aggregate; bringing the pH to a protein's pI (**isoelectric precipitation**) is itself a separation step, as when casein precipitates from milk near pH 4.6.

### Reading Gels — Deducing Subunit Structure

Combine a NATIVE mass (from size-exclusion chromatography or a native gel) with SDS-PAGE run with and without a reducer:

| Observation | Conclusion |
|---|---|
| Native mass ÷ reduced SDS band = n | n chains of that size (one band: identical chains; several bands: different chains) |
| Non-reducing band = reducing band | the chains are held together only noncovalently, so SDS alone separates them |
| Non-reducing band > reducing band | the chains are disulfide-linked; only the reducer splits them |
| Native mass > non-reducing SDS band | the assembly has a noncovalent part that SDS disrupts |

Hemoglobin runs at 64 kDa native and ~16 kDa on SDS-PAGE with or without a reducer: four chains, none disulfide-linked. An antibody (IgG) runs at ~150 kDa native and non-reducing but 50 + 25 kDa reducing: two heavy and two light chains, all disulfide-linked.`
    },
    {
      id: 'lm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Electrophoresis

**Problem 1.** An SDS-PAGE ladder shows bands at 75, 50, 37 and 25 kDa from top to bottom. An unknown protein runs slightly below the 37 kDa marker.

- **(a)** Does a band lower on the gel belong to a larger or a smaller protein?
- **(b)** Between which markers does the unknown fall, and what is its approximate mass?
- **(c)** Why can the ladder calibrate the estimate?
- **(d)** The unknown gives this same single band whether or not DTT is added. What does that show?

**(a) Lower = smaller.** In SDS-PAGE, SMALLER proteins migrate FARTHER, so a band lower on the gel traveled farther and is smaller. "Lower on the gel = larger" is the classic trap.

**(b) Estimate.** The unknown sits between the 37 and 25 kDa markers, closer to 37, so its mass is roughly **~33 kDa.**

**(c) Calibration.** Migration distance varies linearly with log(MW), so the ladder's known bands define the line the unknown is read against.

**(d) No disulfide partners.** A reducer only breaks disulfides, so an unchanged band means this chain is not disulfide-linked to any other; it is a single chain or part of an assembly held together noncovalently, which SDS alone already separates.

**Problem 2.** A purified protein elutes from a size-exclusion column at about 120 kDa. On SDS-PAGE it gives one band at 60 kDa without a reducer and one band at 30 kDa with DTT.

- **(a)** How many chains make up the native protein, if they are identical?
- **(b)** What does the 60 kDa band without a reducer show?
- **(c)** What does the 30 kDa band with DTT show?
- **(d)** Why does the non-reducing SDS lane not show the full native mass?
- **(e)** What is the protein's quaternary structure?

**(a) Chain count.** The native mass divided by the mass of one reduced chain gives $120 \\div 30 = 4$: a tetramer of identical 30 kDa chains.

**(b) Pairs survive SDS.** SDS alone leaves units of 60 kDa, two chains' worth, so chains are bound in PAIRS by a bond SDS cannot break: a covalent disulfide.

**(c) The reducer splits the pairs.** DTT breaks disulfides and the 60 kDa unit becomes two 30 kDa chains, confirming that each pair is one disulfide-linked dimer of identical chains.

**(d) Noncovalent assembly.** SDS denatures proteins and disrupts noncovalent contacts, so the two dimers, which are held together only by noncovalent forces, separate even without a reducer; a native method such as size-exclusion sees the whole 120 kDa particle.

**(e) Structure.** With four chains from (a) grouped in disulfide-linked pairs from (b) and (c): two disulfide-linked 30 + 30 kDa dimers associated noncovalently into a 120 kDa tetramer, a dimer of dimers.

**Problem 3.** Three proteins with pI = 4, 7 and 9 are loaded into native gels buffered at pH 7 (wells in the center of the gel).

- **(a)** Which way does the pI 4 protein migrate?
- **(b)** What does the pI 7 protein do?
- **(c)** Which way does the pI 9 protein migrate?

**(a) pI 4.** pH 7 > pI, so the protein is net negative and migrates to the **anode (+).**

**(b) pI 7.** pH 7 = pI, so its net charge is ≈ 0 and it essentially **does not migrate.**

**(c) pI 9.** pH 7 < pI, so the protein is net positive and migrates to the **cathode (−).** The rule in every case: compare buffer pH to pI. Above pI → negative → anode; below pI → positive → cathode.

**Problem 4.** A researcher runs a 2D gel (IEF horizontally, SDS-PAGE vertically). Two spots have the same vertical position but different horizontal positions.

- **(a)** What does the shared vertical position tell you?
- **(b)** What does the different horizontal position tell you?
- **(c)** What could produce such a pair of spots?

**(a) Same size.** The vertical dimension is SDS-PAGE, so the two species have the same molecular weight.

**(b) Different pI.** The horizontal dimension is IEF, so the two species have different isoelectric points, that is, different charge.

**(c) Isoforms.** Same size but different charge fits a **post-translational modification**: phosphorylation adds negative charge and lowers the pI, giving a protein isoform. That is why 2D gels matter: they split proteins that co-migrate in one dimension.

**Problem 5.** Protein A (pI 4.2) is rich in Asp and Glu; protein B (pI 9.8) is rich in Lys and Arg. Protein C is protein A after a kinase has phosphorylated several of its serines.

- **(a)** Rank the three proteins by pI, lowest to highest.
- **(b)** On an IEF strip running from pH 3 at the anode (+) to pH 10 at the cathode (−), which protein focuses nearest the anode?
- **(c)** At pH 7, which protein binds a cation-exchange column?
- **(d)** Which protein is least soluble in a buffer at pH 4.2, and why?

**(a) Ranking.** Each phosphate adds negative charge, so C must reach a more acidic pH than A before its net charge is zero: pI of C < A (4.2) < B (9.8).

**(b) Nearest the anode.** The acidic end of the strip lies at the anode, and the protein with the lowest pI from (a), the phosphorylated C, focuses there. B focuses near the basic, cathode end.

**(c) Cation exchange.** A cation-exchange resin is negatively charged and binds POSITIVE proteins. At pH 7 only B (pH < pI 9.8) is net positive; A and C are net negative and flow through.

**(d) Least soluble.** A, because pH 4.2 equals its pI: with no net charge, its molecules stop repelling one another and aggregate. B is strongly positive there and C still negative, so both stay in solution.`
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
          },
          {
            question: `Which gel resolves two DNA oligonucleotides of 20 and 21 nucleotides?`,
            options: [`Polyacrylamide, cast at a high percentage`, `Agarose, cast at a low percentage`, `An isoelectric-focusing strip with ampholytes`, `A native protein gel run without SDS`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Polyacrylamide forms fine pores, and a high-percentage gel makes them finer still, so it resolves short nucleic acids that differ by a single base, as sequencing gels do. Agarose pores are large and suit fragments of hundreds to thousands of base pairs, so two 20-mers would run together. IEF separates proteins by pI, and a native protein gel is sized and buffered for folded proteins, not for short DNA.`
          },
          {
            question: `A protein elutes from a size-exclusion column at ~100 kDa. On SDS-PAGE it gives a single 50 kDa band both with and without DTT. The protein is best described as:`,
            options: [`Two 50 kDa chains held together noncovalently`, `Two 50 kDa chains joined by a disulfide bond`, `One 100 kDa chain that SDS cleaves into halves`, `Four 25 kDa chains linked by disulfide bonds`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The native mass is twice the SDS band, so there are two 50 kDa chains, and because the band is the same with or without a reducer, no disulfide holds them: SDS alone pulls apart their noncovalent contacts. A disulfide-linked pair would run at 100 kDa until DTT was added. SDS unfolds proteins but never cleaves peptide bonds, and four 25 kDa chains would give a 25 kDa band once reduced.`
          },
          {
            question: `Protein A is rich in Lys and Arg; protein B is rich in Asp and Glu. Which statement is correct?`,
            options: [`A has the higher pI and is net positive at pH 7`, `B has the higher pI and is net positive at pH 7`, `A has the lower pI and is net negative at pH 7`, `Both have pI near 7, since the backbone dominates`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Lys and Arg side chains stay protonated and positive up to a high pH, so a protein rich in them needs a high pH to reach zero net charge: high pI, and net positive at pH 7, which sits below it. Asp and Glu are negative above pH ≈ 4, so B has a low pI and is net negative at pH 7. Side chains, not the single backbone amino and carboxyl ends, dominate a protein's charge, so the two pI values are far apart rather than both near 7.`
          }
        ]
      }
    },
    {
      id: 'lm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Migration ∝ qE/f.** More charge or a stronger field speeds a molecule; larger size or a denser gel slows it.
- **SDS-PAGE sorts by size.** SDS masks charge, so the gel sieves by size; bands with vs. without a reducer reveal disulfide-linked chains.
- **pH vs. pI sets direction.** pH > pI: net negative, to the anode (+); pH < pI: positive, to the cathode (−); Asp/Glu-rich = low pI.
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
