export const mcatOchemStereoPart4Data = {
  topicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  sections: [
    {
      id: 'stereo4-intro',
      type: 'text' as const,
      content: `# Stereochemistry for the MCAT

**Part 4 of 4 — Biomolecular Stereochemistry: MCAT Integration**

This is where the MCAT actually tests stereochemistry: sugars, amino acids, and drugs.

### The D/L System

Draw the Fischer projection with the most oxidized carbon on top. Look at the chiral center **farthest from the carbonyl** (the bottom-most stereocenter):

- OH on the **right** → **D** sugar
- OH on the **left** → **L** sugar

The reference is glyceraldehyde: D-glyceraldehyde = (R)-glyceraldehyde. D/L describes ONE reference center; R/S must still be assigned per-center. And like R/S, **D/L does not predict (+)/(−)**.

Biology's defaults: **carbohydrates are D; amino acids are L.** The enantiomer of a D sugar (mirror ALL centers) is the L sugar of the same name.

### Amino Acid Configuration

- L-amino acids have the amino group on the LEFT in a Fischer projection (COOH on top)
- Nearly all L-amino acids are **(S)** — except **cysteine, which is (R)**: the $-CH_2SH$ side chain outranks $-COOH$ because sulfur (Z = 16) beats oxygen at the first point of difference
- Glycine has two H atoms on the alpha carbon — **achiral**, no D/L designation

### Sugar Vocabulary (extremely high yield)

| Term | Definition | Example |
|------|------------|---------|
| Epimers | Diastereomers differing at exactly ONE stereocenter | glucose/galactose (C4); glucose/mannose (C2) |
| Anomers | Epimers at the NEW stereocenter formed on ring closure (the anomeric, former carbonyl carbon) | alpha- vs beta-D-glucopyranose |
| Enantiomer of a sugar | ALL centers inverted | D-glucose vs L-glucose |

- The anomeric carbon is the hemiacetal carbon; **alpha** = anomeric OH trans to the CH2OH reference (down in the standard Haworth drawing of D-sugars), **beta** = cis (up)
- **Mutarotation**: a freshly dissolved pure anomer's optical rotation drifts to an equilibrium value as the ring opens and recloses, interconverting alpha and beta forms
- Glucose vs fructose: same formula, different connectivity (aldose vs ketose) → constitutional isomers, NOT stereoisomers

### Drugs and Chirality

Receptors and enzymes are chiral, so enantiomers can be different drugs:
- **Thalidomide**: one enantiomer sedative, the other teratogenic (and they interconvert in vivo — resolving the drug would not have saved patients)
- (S)-ibuprofen carries the activity; the body even converts some (R) to (S)
- Enzymes are **stereospecific**: three points of contact in a chiral active site distinguish enantiomers the way a right glove distinguishes hands

<!-- yield:low -->
- "Racemic switches": esomeprazole is the pure (S) enantiomer of omeprazole
<!-- /yield -->`
    },
    {
      id: 'stereo4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Biomolecular Stereochemistry

**Problem 1.** Classify each pair of sugars as enantiomers, epimers, anomers or constitutional isomers.

- **(a)** How are D-glucose and L-glucose related?
- **(b)** How are D-glucose and D-mannose related?
- **(c)** How are alpha-D-glucopyranose and beta-D-glucopyranose related?
- **(d)** How are D-glucose and D-fructose related?

**(a) D- vs L-glucose.** L-glucose inverts EVERY stereocenter → **enantiomers**. "Which pair are enantiomers?" is answered by "all centers flipped," never by a one-center change.

**(b) Glucose vs mannose.** They differ only at C2 → **epimers** (a subtype of diastereomers).

**(c) Alpha vs beta.** They differ only at the anomeric carbon → **anomers**. One center = epimer; one center AND it is the hemiacetal carbon = anomer.

**(d) Glucose vs fructose.** Both are C6H12O6, but glucose is an aldose (carbonyl at C1) and fructose a ketose (carbonyl at C2). Different connectivity → **constitutional isomers**; no stereochemical term applies.

**Problem 2.** Natural serine is drawn as a Fischer projection with COOH on top and its side chain, CH2OH, at the bottom.

- **(a)** Which side does the NH2 sit on, and is serine D or L?
- **(b)** How do the four groups on the alpha carbon rank?
- **(c)** Is the alpha carbon R or S?

**(a) D or L.** Natural amino acids are L → NH2 on the **left**, H on the right.

**(b) Priorities.** NH2 (1) > COOH (2) > CH2OH (3) > H (4). COOH beats CH2OH because (O,O,O) beats (O,H,H).

**(c) Assign.** H is on a horizontal bond (toward the viewer). Trace NH2 (left) → COOH (top) → CH2OH (bottom), sweeping through the right side: clockwise. Reverse for the forward-pointing H → **(S)**. Serine is L and (S). Standard L-amino acids land on (S); only cysteine's sulfur reshuffles priorities to give (R).

**Problem 3.** D-amino acid oxidase acts only on D-amino acids. Racemic alanine is fed to the enzyme.

- **(a)** Which enantiomer is consumed, and why?
- **(b)** What happens to the composition of the unreacted alanine over time?
- **(c)** What is this kind of separation called?

**(a) The D enantiomer.** The enzyme's chiral active site accepts only the D enantiomer: diastereomeric enzyme-substrate complexes have different energies. D-alanine is consumed; L-alanine is untouched.

**(b) What remains.** The unreacted pool becomes enriched in L — approaching optically pure L-alanine. Passages ask "what remains?": the slow or unaccepted enantiomer.

**(c) Kinetic resolution.** A chiral catalyst separates enantiomers by reacting them at different rates — a **kinetic resolution**.

**Problem 4.** Thalidomide's (R) enantiomer is a sedative and its (S) enantiomer is teratogenic.

- **(a)** What makes thalidomide's stereocenter configurationally unstable?
- **(b)** Why would administering pure (R)-thalidomide NOT have prevented birth defects?
- **(c)** When does single-enantiomer dosing help?

**(a) An acidic alpha-H.** The stereocenter carries an acidic hydrogen alpha to a ring carbonyl. Under physiological conditions it enolizes, and the planar enol erases the configuration, exactly like alpha-carbon racemization in ketones.

**(b) Racemization in vivo.** Because the center racemizes in vivo (a), pure (R) converts to an R/S mixture in the body → the teratogenic (S) form appears regardless.

**(c) The lesson.** Only when the stereocenter is configurationally STABLE in vivo. Any stereocenter bearing an acidic alpha-H next to a carbonyl can racemize via the planar enol/enolate — a cross-topic link the MCAT loves.`
    },
    {
      id: 'stereo4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Biomolecular Stereochemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `D-Glucose and D-galactose differ in configuration only at C4. They are best described as:`,
            options: [`Enantiomers`, `Anomers`, `Epimers`, `Constitutional isomers`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Diastereomers that differ at exactly one stereocenter are epimers. Enantiomers would differ at EVERY center; anomers are the special epimers at the ring-closure (anomeric) carbon, which C4 is not.`
          },
          {
            question: `Alpha-D-glucopyranose and beta-D-glucopyranose differ at:`,
            options: [`C5, the D/L reference carbon`, `C1, the anomeric carbon`, `Every stereocenter in the ring`, `C6, the primary CH2OH carbon`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Ring closure converts the planar C1 aldehyde into a NEW stereocenter (the hemiacetal/anomeric carbon), which can form with OH in either orientation. Anomers = epimers at that carbon only; C5 (the D/L reference) and every other center are unchanged, and C6 is not a stereocenter.`
          },
          {
            question: `L-Cysteine is (R) while nearly all other L-amino acids are (S) because:`,
            options: [`Cysteine's Fischer projection is drawn differently`, `Its CH2SH group outranks COOH in CIP priority`, `In proteins, cysteine is actually the D enantiomer`, `The thiol group hydrogen-bonds to the amino group`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `At the first point of difference, CH2SH presents S (Z = 16) while COOH presents O (Z = 8) — sulfur wins, so the side chain outranks the carboxyl, reordering ranks 2 and 3. The spatial arrangement is unchanged (still L); only the priority bookkeeping, and hence the letter, flips. Cysteine is drawn with the same Fischer convention as every amino acid, proteins use L-cysteine, and hydrogen bonding plays no part in CIP ranking.`
          },
          {
            question: `A freshly prepared solution of pure alpha-D-glucose shows a specific rotation that gradually changes over hours before stabilizing. This is because:`,
            options: [`The glucose is slowly oxidized by air`, `Ring opening lets alpha and beta anomers interconvert`, `Glucose epimerizes to galactose in water`, `The solution racemizes to L-glucose`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Mutarotation: the hemiacetal ring opens to the open-chain aldehyde and recloses on either face, so alpha and beta anomers equilibrate (final mix roughly one-third alpha, two-thirds beta for glucose). No oxidation, epimerization at other centers, or racemization occurs.`
          },
          {
            question: `The beta-2 receptor binds (R)-albuterol (levalbuterol) tightly but its enantiomer weakly. The most accurate structural explanation is:`,
            options: [`The two enantiomers differ in their covalent bond strengths`, `The (S) form is a different constitutional isomer`, `The chiral pocket allows three-point fit for one enantiomer`, `The (R) form is more water-soluble in plasma`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Enantiomers have identical internal bonding and achiral-environment properties. A chiral pocket requiring three simultaneous contacts can be satisfied by only one hand — the mirror form can align at most two of the three groups at once.`
          },
          {
            question: `A monosaccharide is drawn as a Fischer projection with its carbonyl at the top. The OH on the stereocenter farthest from the carbonyl points left. The sugar is:`,
            options: [`D`, `Dextrorotatory (+)`, `Levorotatory (−)`, `L`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `D/L is read at the stereocenter farthest from the carbonyl (the bottom-most one): OH on the left means L; OH on the right would mean D. The drawing says nothing about the sign of rotation: like R/S, D/L never predicts whether a sugar is dextrorotatory or levorotatory, so that must be measured.`
          }
        ]
      }
    },
    {
      id: 'stereo4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Reading D/L.** At the bottom-most stereocenter of the Fischer projection, OH on the right is D and on the left is L.
- **L-amino acids are (S).** All except cysteine, which is (R) because $CH_2SH$ outranks COOH; glycine is achiral.
- **Epimers and anomers.** Epimers differ at one center; anomers are epimers at the anomeric carbon, interconverted by mutarotation.
- **Chiral bodies, different drugs.** Enzymes and receptors are chiral, so two enantiomers can act as two different drugs.

**Common traps**

- **Glucose and fructose as epimers.** An aldose and a ketose differ in connectivity, so they are constitutional isomers.
- **D/L predicts the sign.** D/L, like R/S, says nothing about (+) or (−); rotation must be measured.
- **One flipped center as enantiomer.** Enantiomers differ at EVERY center; a one-center change is an epimer, a diastereomer.
- **A pure enantiomer stays pure.** A stereocenter alpha to a carbonyl can racemize in vivo, as thalidomide's does.

<!-- yield:low -->
- Low-yield extras: racemic switches (esomeprazole as the (S) enantiomer of omeprazole).
<!-- /yield -->`
    }
  ]
};
