export const mcatOchemStereoPart3Data = {
  topicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  sections: [
    {
      id: 'stereo3-intro',
      type: 'text' as const,
      content: `# Stereochemistry for the MCAT

**Part 3 of 4 — Optical Activity & Reaction Stereochemistry**

### Optical Activity

A chiral compound rotates the plane of plane-polarized light. The standardized measure is **specific rotation**:

$[\\alpha] = \\dfrac{\\alpha_{\\text{obs}}}{l \\times c}$

where $\\alpha_{\\text{obs}}$ = observed rotation (degrees), $l$ = path length in **decimeters**, $c$ = concentration in **g/mL**.

- (+) or *d*- = dextrorotatory (clockwise); (−) or *l*- = levorotatory (counterclockwise)
- **R/S has NO fixed relationship to (+)/(−).** Configuration is assigned on paper; rotation is measured in a polarimeter. An R compound can be either sign.
- **Absolute configuration** is the actual 3-D arrangement at a center, named R or S; **relative configuration** compares one center with another or with a reference (cis/trans, D/L, or retention vs inversion in a reaction).
- A **racemic mixture** (50:50 enantiomers) shows **zero** net rotation — the rotations cancel.
- A meso compound also reads zero, but for a different reason: the single molecule is achiral.

### Enantiomeric Excess (ee)

$\\text{ee} = \\dfrac{[\\alpha]_{\\text{mixture}}}{[\\alpha]_{\\text{pure}}} \\times 100\\%$

Also: $\\text{ee} = \\%\\text{major} - \\%\\text{minor}$. A 90:10 mixture has $\\text{ee} = 80\\%$.

### Separating Stereoisomers

- **Diastereomers**: different physical properties → separable by distillation, recrystallization, chromatography
- **Enantiomers**: identical physical properties → CANNOT be separated by achiral methods. **Resolution** requires a chiral helper: react the racemate with a single enantiomer of a resolving agent (e.g., a chiral amine with a racemic acid) to form **diastereomeric salts**, separate those by crystallization, then release the pure enantiomers.
- Enzymes and chiral chromatography columns resolve enantiomers the same way — by providing a chiral environment.

### Stereochemistry of Reactions

| Reaction | Stereochemical outcome |
|----------|------------------------|
| SN2 | Inversion at the attacked carbon |
| SN1 | Racemization (planar carbocation) |
| Radical halogenation at a stereocenter | Racemization (planar radical) |
| Catalytic hydrogenation (H2, metal) | **Syn addition** — both H atoms add to the same face |
| Achiral reactants forming a NEW stereocenter | **Racemic product** — both faces attacked equally |

The last row is a law of nature worth internalizing: **you cannot create optical activity from purely achiral starting materials and reagents.** NaBH4 reduction of 2-butanone gives exactly 50:50 (R)- and (S)-2-butanol. Only a pre-existing chiral influence (enzyme, chiral catalyst, chiral center elsewhere in the molecule) can bias the ratio.`
    },
    {
      id: 'stereo3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Optical Activity & Reactions

**Problem 1.** Pure (R)-carvone has $[\\alpha] = -61°$. A carvone sample at $c = 0.050$ g/mL in a $2.0$ dm tube gives $\\alpha_{\\text{obs}} = -3.05°$.

- **(a)** What is the sample's specific rotation?
- **(b)** What is the sample's enantiomeric excess?
- **(c)** What percentage of the sample is the (R) enantiomer?
- **(d)** Check: why do 75% R and 25% S give exactly half the pure rotation?

**(a) Specific rotation.** $[\\alpha] = \\alpha_{\\text{obs}}/(l \\times c) = -3.05/(2.0 \\times 0.050) = -3.05/0.10 = -30.5°$

**(b) Enantiomeric excess.** With $[\\alpha] = -30.5°$ from (a): $\\text{ee} = 30.5/61 \\times 100\\% = 50\\%$

**(c) Composition.** ee = %R − %S, and %R + %S = 100%. With $\\text{ee} = 50\\%$ from (b): %R = (100 + 50)/2 = **75%**, %S = 25%. In general, %major = (100 + ee)/2.

**(d) Check.** The 25% S pairs with 25% of the R as a racemate (no rotation); the remaining 50% R produces half the pure rotation ✓. The polarimeter sees only the unpaired excess.

**Problem 2.** (S)-2-Bromooctane reacts with cyanide by SN2, giving 2-methyloctanenitrile. Separately, the same substrate solvolyzes in ethanol (SN1).

- **(a)** What is the stereochemical outcome of the SN2 reaction, and is its product optically active?
- **(b)** What is the outcome of the solvolysis?
- **(c)** What decides whether a product is optically active?

**(a) SN2.** Backside attack, complete inversion → a single enantiomer, (R)-2-methyloctanenitrile (CN takes over bromine's top priority) → **optically active**.

**(b) SN1.** Ethanol captures the planar carbocation from both faces → near-racemic 2-ethoxyoctane → rotation near **zero**.

<!-- yield:low -->
The residual small rotation in SN1 products comes from ion pairing (a slight excess of inversion).
<!-- /yield -->

**(c) The mechanism.** "Is the product optically active?" is really a mechanism question. Active = stereospecific pathway (SN2); inactive/racemic = planar intermediate (SN1, radical).

**Problem 3.** (S)-3-Methylhexane undergoes radical bromination selectively at C3, the tertiary position.

- **(a)** What intermediate forms at C3?
- **(b)** From which face does $Br_2$ deliver the bromine?
- **(c)** What is the stereochemical outcome, and is the product optically active?

**(a) The radical.** Abstraction of the C3-H gives a tertiary **radical** — sp2, planar (or rapidly inverting).

**(b) Either face.** $Br_2$ delivers Br to either face of the planar radical from (a) with equal probability.

**(c) Outcome.** 3-Bromo-3-methylhexane forms as a **racemic mixture** at C3, so optical activity is lost even though the substrate was a single enantiomer. Planar intermediate = memory loss: carbocations AND radicals erase configuration; concerted mechanisms (SN2, E2, syn additions) transmit it.

**Problem 4.** 2-Butyne is hydrogenated with $H_2$ over Lindlar's catalyst (poisoned Pd), which stops hydrogenation at the alkene stage.

- **(a)** Do the two hydrogens add syn or anti?
- **(b)** Which alkene forms?
- **(c)** Is the product optically active?

**(a) Syn addition.** Both hydrogens add to the SAME face of the triple bond (**syn addition**).

**(b) The alkene.** With syn addition from (a), the two methyls end up on the same side → **cis-2-butene** (the Z isomer).

**(c) Optical activity.** None: cis-2-butene is planar and achiral. Addition stereochemistry (syn vs anti) also sets relative configuration when new stereocenters form on a ring.

<!-- yield:low -->
Na/NH3 dissolved-metal reduction adds the hydrogens anti and gives the trans (E) alkene instead. Pair these: Lindlar = syn = cis alkene; dissolved metal (Na/NH3) = anti = trans alkene.
<!-- /yield -->`
    },
    {
      id: 'stereo3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Optical Activity & Reactions** 🎯`,
      exercise: {
        questions: [
          {
            question: `Pure (+)-limonene has $[\\alpha] = +124°$. A sample of limonene shows a specific rotation of $+93°$. The enantiomeric excess of the sample is:`,
            options: [`93%`, `75%`, `50%`, `25%`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\text{ee} = 93/124 \\times 100\\% = 75\\%$. That corresponds to 87.5% (+) and 12.5% (−): the excess 75% rotates light, while the remaining 12.5% of each enantiomer cancels as a racemic pair.`
          },
          {
            question: `A compound is determined to be (S) by CIP analysis. Its optical rotation is:`,
            options: [`Necessarily levorotatory (−)`, `Necessarily dextrorotatory (+)`, `Identical to that of the (R) enantiomer`, `Not predictable from R/S`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `R/S is a paper convention based on atomic-number priorities; (+)/(−) is an experimental measurement. There is no correlation, so the sign must be measured. (S)-alanine is (+), while (S)-glyceraldehyde is (−). The (R) enantiomer would rotate light by the same magnitude in the opposite direction, not identically.`
          },
          {
            question: `A solution containing equal amounts of (R)- and (S)-2-butanol shows zero optical rotation because:`,
            options: [`2-Butanol is achiral`, `Their equal and opposite rotations cancel`, `The stereocenter racemizes in solution`, `Only the (R) enantiomer rotates light`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A racemic mixture is optically inactive by external compensation: equal and opposite rotations sum to zero. Each individual molecule is still chiral, and 2-butanol does not racemize on its own (no mechanism to break bonds at the stereocenter). Both enantiomers rotate light, by the same magnitude in opposite directions; if only one did, the mixture would not read zero.`
          },
          {
            question: `To separate a racemic carboxylic acid into its enantiomers, a chemist adds a single enantiomer of a chiral amine. This works because:`,
            options: [`The amine reacts with only one enantiomer of the acid`, `The salts are diastereomers with different solubilities`, `The amine catalyzes racemization`, `The salts are enantiomers and crystallize separately`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Both acid enantiomers form salts, but (R-acid)(S-amine) and (S-acid)(S-amine) are DIASTEREOMERIC — different physical properties, so one crystallizes preferentially. Classic resolution. The amine is a base that neutralizes BOTH acid enantiomers, not just one, and it causes no racemization. The salts are not enantiomers of each other: their mirror images would need the (R)-amine, which is not present.`
          },
          {
            question: `NaBH4 (achiral) reduces 2-butanone to 2-butanol. The product is:`,
            options: [`Optically active (R)-2-butanol`, `Optically active (S)-2-butanol`, `A racemic mixture`, `A single meso stereoisomer`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The ketone carbonyl is planar; achiral hydride attacks both faces with equal probability, creating the new stereocenter as a 50:50 racemate, which is optically inactive. With only one stereocenter, 2-butanol cannot be meso. Optical activity can never arise from exclusively achiral starting materials and reagents.`
          },
          {
            question: `In the liver, only one enantiomer of a racemic drug is metabolized rapidly. The most fundamental explanation is:`,
            options: [`The enantiomers have different solubilities in blood`, `The enzyme's chiral active site tells them apart`, `One enantiomer is more thermodynamically stable`, `The enantiomers have different pKa values`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Enantiomers behave identically in achiral environments (same solubility, stability, pKa). An enzyme is a chiral environment — its active site forms diastereomeric binding complexes with the two enantiomers, which can differ enormously in fit and rate.`
          }
        ]
      }
    },
    {
      id: 'stereo3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Specific rotation.** $[\\alpha] = \\alpha_{\\text{obs}}/(l \\times c)$, with $l$ in decimeters and $c$ in g/mL.
- **R/S never predicts sign.** Configuration is assigned on paper; (+) or (−) must be measured in a polarimeter.
- **Enantiomeric excess.** $\\text{ee} = \\%\\text{major} - \\%\\text{minor} = [\\alpha]_{\\text{mix}}/[\\alpha]_{\\text{pure}} \\times 100\\%$; %major = (100 + ee)/2.
- **Mechanism sets stereochemistry.** SN2 inverts; SN1 and radicals racemize; hydrogenation adds syn.

**Common traps**

- **Zero rotation means achiral.** A racemate reads zero because two chiral enantiomers cancel; a meso compound is truly achiral.
- **Separating enantiomers by distillation.** Enantiomers need a chiral agent (salt, enzyme, column); diastereomers separate ordinarily.
- **Reading ee as %major.** An ee of 50% means a 75:25 mixture, not 50% of the major enantiomer.
- **Chirality from achiral reagents.** NaBH4 on 2-butanone gives 50:50 (R)/(S)-2-butanol; only a chiral influence biases it.

<!-- yield:low -->
- Low-yield extras: ion pairing as the source of the small residual rotation in SN1 products; dissolved-metal (Na/NH3) reduction of alkynes to trans alkenes.
<!-- /yield -->`
    }
  ]
};
