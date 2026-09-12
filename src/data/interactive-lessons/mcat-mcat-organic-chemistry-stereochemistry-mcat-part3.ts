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

$[\\alpha] = \\dfrac{\\alpha_{obs}}{l \\times c}$

where $\\alpha_{obs}$ = observed rotation (degrees), $l$ = path length in **decimeters**, $c$ = concentration in **g/mL**.

- (+) or $d$ = dextrorotatory (clockwise); (−) or $l$ = levorotatory (counterclockwise)
- **R/S has NO fixed relationship to (+)/(−).** Configuration is assigned on paper; rotation is measured in a polarimeter. An R compound can be either sign.
- A **racemic mixture** (50:50 enantiomers) shows **zero** net rotation — the rotations cancel.
- A meso compound also reads zero, but for a different reason: the single molecule is achiral.

### Enantiomeric Excess (ee)

$ee = \\dfrac{[\\alpha]_{mixture}}{[\\alpha]_{pure}} \\times 100\\%$

Also: $ee = \\%major - \\%minor$. A 90:10 mixture has $ee = 80\\%$.

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
      id: 'stereo3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Optical Activity & Reactions** 🎯`,
      exercise: {
        questions: [
          {
            question: `Pure (+)-limonene has $[\\alpha] = +124°$. A sample of limonene shows a specific rotation of $+93°$. The enantiomeric excess of the sample is:`,
            options: [`93%`, `75%`, `50%`, `25%`],
            correctAnswer: 1,
            explanation: `$ee = 93/124 \\times 100\\% = 75\\%$. That corresponds to 87.5% (+) and 12.5% (−): the excess 75% rotates light, while the remaining 12.5% of each enantiomer cancels as a racemic pair.`
          },
          {
            question: `A compound is determined to be (S) by CIP analysis. Its optical rotation is:`,
            options: [`Necessarily levorotatory (−)`, `Necessarily dextrorotatory (+)`, `Zero`, `Not predictable from the configuration — it must be measured`],
            correctAnswer: 3,
            explanation: `R/S is a paper convention based on atomic-number priorities; (+)/(−) is an experimental measurement. There is no correlation. (S)-alanine is (+), while (S)-glyceraldehyde is (−).`
          },
          {
            question: `A solution containing equal amounts of (R)- and (S)-2-butanol shows zero optical rotation because:`,
            options: [`2-Butanol is achiral`, `Each enantiomer's rotation is exactly canceled by the other's`, `The stereocenter racemizes in solution`, `Optical rotation requires a meso compound`],
            correctAnswer: 1,
            explanation: `A racemic mixture is optically inactive by external compensation: equal and opposite rotations sum to zero. Each individual molecule is still chiral, and 2-butanol does not racemize on its own (no mechanism to break bonds at the stereocenter).`
          },
          {
            question: `To separate a racemic carboxylic acid into its enantiomers, a chemist adds a single enantiomer of a chiral amine. This works because:`,
            options: [`The amine reacts with only one enantiomer of the acid`, `The resulting salts are diastereomers with different solubilities`, `The amine catalyzes racemization`, `The salts are enantiomers and crystallize separately`],
            correctAnswer: 1,
            explanation: `Both acid enantiomers form salts, but (R-acid)(S-amine) and (S-acid)(S-amine) are DIASTEREOMERIC — different physical properties, so one crystallizes preferentially. Classic resolution. The salts are not enantiomers of each other.`
          },
          {
            question: `NaBH4 (achiral) reduces 2-butanone to 2-butanol. The product is:`,
            options: [`Optically active (R)-2-butanol`, `Optically active (S)-2-butanol`, `A racemic, optically inactive mixture`, `A meso compound`],
            correctAnswer: 2,
            explanation: `The ketone carbonyl is planar; achiral hydride attacks both faces with equal probability, creating the new stereocenter as a 50:50 racemate. Optical activity can never arise from exclusively achiral starting materials and reagents.`
          },
          {
            question: `In the liver, only one enantiomer of a racemic drug is metabolized rapidly. The most fundamental explanation is:`,
            options: [`The enantiomers have different solubilities in blood`, `The enzyme's chiral active site binds the two enantiomers differently`, `One enantiomer is more thermodynamically stable`, `The enantiomers have different pKa values`],
            correctAnswer: 1,
            explanation: `Enantiomers behave identically in achiral environments (same solubility, stability, pKa). An enzyme is a chiral environment — its active site forms diastereomeric binding complexes with the two enantiomers, which can differ enormously in fit and rate.`
          }
        ]
      }
    },
    {
      id: 'stereo3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $[\\alpha] = \\alpha_{obs}/(l \\times c)$ with dm and g/mL; racemic = zero rotation (cancellation), meso = zero (achiral molecule)
- R/S never predicts (+)/(−) — rotation is measured, not assigned
- $ee = observed/pure \\times 100\\%$ = %major − %minor
- Enantiomers separate only via a chiral agent (diastereomeric salts, enzymes, chiral columns); diastereomers separate by ordinary physical methods
- Achiral + achiral → racemic at any new stereocenter; SN2 inverts, SN1 and radicals racemize, hydrogenation adds syn`
    },
    {
      id: 'stereo3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Optical Activity & Reactions

<details>
<summary><b>Example 1: From rotation to mixture composition</b></summary>

**Question:** Pure (R)-carvone has $[\\alpha] = -61°$. A sample shows $-30.5°$. What percentage of the sample is the (R) enantiomer?

**Solution:**
1. $ee = 30.5/61 \\times 100\\% = 50\\%$
2. ee = %R − %S, and %R + %S = 100%
3. Solve: %R = (100 + 50)/2 = **75%**, %S = 25%
4. Check: the 25% S pairs with 25% of the R as a racemate (no rotation); the remaining 50% R produces half the pure rotation ✓

**MCAT Strategy:** Convert ee to composition with %major = (100 + ee)/2. The polarimeter sees only the unpaired excess.
</details>

<details>
<summary><b>Example 2: Track configuration through a reaction</b></summary>

**Question:** (S)-2-bromooctane undergoes SN2 with cyanide, and the resulting 2-methyloctanenitrile rotates plane-polarized light. Separately, the same substrate solvolyzes in ethanol. Compare the optical outcomes.

**Solution:**
1. SN2: backside attack, complete inversion → a single enantiomer of product → **optically active**
2. Solvolysis (SN1): planar carbocation captured from both faces → near-racemic product → rotation near **zero**
3. The residual small rotation in SN1 products comes from ion pairing (slight excess of inversion)

**MCAT Strategy:** "Is the product optically active?" is really a mechanism question. Active = stereospecific pathway (SN2); inactive/racemic = planar intermediate (SN1, radical).
</details>

<details>
<summary><b>Example 3: Radical halogenation destroys a stereocenter's purity</b></summary>

**Question:** (S)-3-methylhexane undergoes radical bromination selectively at C3 (the tertiary position). What is the stereochemical outcome at C3?

**Solution:**
1. Abstraction of the C3-H gives a tertiary **radical** — sp2, planar (or rapidly inverting)
2. Br2 delivers Br to either face with equal probability
3. Product 3-bromo-3-methylhexane forms as a **racemic mixture** at C3
4. Optical activity is lost even though the substrate was a single enantiomer

**MCAT Strategy:** Planar intermediate = memory loss. Carbocations AND radicals both erase configuration; only concerted mechanisms (SN2, E2, syn additions) transmit it.
</details>

<details>
<summary><b>Example 4: Syn addition draws the product</b></summary>

**Question:** 2-Butyne is hydrogenated with H2 over Lindlar's catalyst. What alkene forms, and is it optically active?

**Solution:**
1. Lindlar (poisoned Pd) stops hydrogenation at the alkene stage
2. Both hydrogens add to the SAME face of the triple bond (**syn addition**)
3. The two methyls end up on the same side → **cis-2-butene** (the Z isomer)
4. cis-2-Butene is planar and achiral → no optical activity; note that Na/NH3 dissolved-metal reduction would give the trans (E) alkene instead

**MCAT Strategy:** Pair these: Lindlar = syn = cis alkene; dissolved metal (Na/NH3) = anti = trans alkene. Addition stereochemistry (syn vs anti) also sets relative configuration when new stereocenters form on a ring.
</details>`
    }
  ]
};
