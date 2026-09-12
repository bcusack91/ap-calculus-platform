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
- "Racemic switches": esomeprazole is the pure (S) enantiomer of omeprazole
- Enzymes are **stereospecific**: three points of contact in a chiral active site distinguish enantiomers the way a right glove distinguishes hands`
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
            explanation: `Diastereomers that differ at exactly one stereocenter are epimers. Enantiomers would differ at EVERY center; anomers are the special epimers at the ring-closure (anomeric) carbon, which C4 is not.`
          },
          {
            question: `Alpha-D-glucopyranose and beta-D-glucopyranose differ at:`,
            options: [`C4, the reference carbon`, `The anomeric carbon — the hemiacetal carbon derived from the open-chain carbonyl`, `Every stereocenter`, `The CH2OH group at C6`],
            correctAnswer: 1,
            explanation: `Ring closure converts the planar C1 aldehyde into a NEW stereocenter (the hemiacetal/anomeric carbon), which can form with OH in either orientation. Anomers = epimers at that carbon only.`
          },
          {
            question: `L-Cysteine is (R) while nearly all other L-amino acids are (S) because:`,
            options: [`Cysteine's Fischer projection is drawn differently`, `Sulfur in the CH2SH side chain gives it higher CIP priority than the COOH group, reordering ranks 2 and 3`, `Cysteine is achiral`, `The thiol group hydrogen-bonds to the amino group`],
            correctAnswer: 1,
            explanation: `At the first point of difference, CH2SH presents S (Z = 16) while COOH presents O (Z = 8) — sulfur wins, so the side chain outranks the carboxyl. The spatial arrangement is unchanged (still L); only the priority bookkeeping, and hence the letter, flips.`
          },
          {
            question: `A freshly prepared solution of pure alpha-D-glucose shows a specific rotation that gradually changes over hours before stabilizing. This is because:`,
            options: [`The glucose is slowly oxidized by air`, `The ring opens and recloses, interconverting alpha and beta anomers until equilibrium (mutarotation)`, `Glucose epimerizes to galactose in water`, `The solution racemizes to L-glucose`],
            correctAnswer: 1,
            explanation: `Mutarotation: the hemiacetal ring opens to the open-chain aldehyde and recloses on either face, so alpha and beta anomers equilibrate (final mix roughly one-third alpha, two-thirds beta for glucose). No oxidation, epimerization at other centers, or racemization occurs.`
          },
          {
            question: `The beta-2 receptor binds (R)-albuterol (levalbuterol) tightly but its enantiomer weakly. The most accurate structural explanation is:`,
            options: [`The enantiomers have different bond strengths`, `The (S) form is a different constitutional isomer`, `The chiral binding pocket makes simultaneous three-point contact possible for only one enantiomer`, `The (R) form is more water-soluble`],
            correctAnswer: 2,
            explanation: `Enantiomers have identical internal bonding and achiral-environment properties. A chiral pocket requiring three simultaneous contacts can be satisfied by only one hand — the mirror form can align at most two of the three groups at once.`
          },
          {
            question: `D-Glucose and D-fructose (both C6H12O6) are related as:`,
            options: [`Epimers`, `Anomers`, `Enantiomers`, `Constitutional isomers`],
            correctAnswer: 3,
            explanation: `Glucose is an aldose (carbonyl at C1); fructose is a ketose (carbonyl at C2). Different connectivity means they are constitutional isomers — no stereochemical term applies. This is a favorite MCAT trap among the sugar-relationship questions.`
          }
        ]
      }
    },
    {
      id: 'stereo4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- D/L is read at the bottom-most stereocenter of a Fischer projection (OH right = D); biology uses D sugars and L amino acids
- L-amino acids are (S) except cysteine (R) — sulfur outranks the carboxyl oxygen set
- Epimers differ at one center; anomers are epimers at the anomeric (hemiacetal) carbon; mutarotation equilibrates anomers via ring opening
- Glucose/fructose = constitutional isomers; glucose/galactose = C4 epimers; glucose/mannose = C2 epimers; D/L pair = full enantiomers
- Enantiomers are different drugs in a chiral body (thalidomide, ibuprofen, esomeprazole); enzymes distinguish them by three-point binding`
    },
    {
      id: 'stereo4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Biomolecular Stereochemistry

<details>
<summary><b>Example 1: Sort the sugar relationships</b></summary>

**Question:** Classify each pair: (a) D-glucose vs L-glucose; (b) D-glucose vs D-mannose; (c) alpha-D-glucopyranose vs beta-D-glucopyranose; (d) D-glucose vs D-galactose.

**Solution:**
1. (a) L-glucose inverts EVERY stereocenter → **enantiomers**
2. (b) Differ only at C2 → **epimers** (a subtype of diastereomers)
3. (c) Differ only at the anomeric carbon → **anomers**
4. (d) Differ only at C4 → **epimers**

**MCAT Strategy:** The question "which pair are enantiomers?" is answered by "all centers flipped," never by a one-center change. One center = epimer; one center AND it is the hemiacetal carbon = anomer.
</details>

<details>
<summary><b>Example 2: Assign D/L and R/S to an amino acid</b></summary>

**Question:** In a Fischer projection of natural serine (COOH top, side chain CH2OH bottom), where is the NH2, and what are its D/L and R/S labels?

**Solution:**
1. Natural amino acids are L → NH2 on the **left**, H on the right
2. Priorities at the alpha carbon: NH2 (1) > COOH (2) > CH2OH (3) > H (4). COOH beats CH2OH because (O,O,O) beats (O,H,H)
3. H is on a horizontal bond (toward viewer). Trace NH2 (left) → COOH (top) → CH2OH (bottom): clockwise
4. Reverse for the forward-pointing H → **(S)**. Serine is L and (S)

**MCAT Strategy:** For standard L-amino acids this trace always lands on (S); only cysteine's sulfur reshuffles priorities to give (R). Verify once, then trust the pattern.
</details>

<details>
<summary><b>Example 3: Predict what an enzyme does with a racemate</b></summary>

**Question:** D-amino acid oxidase acts only on D-amino acids. If racemic alanine is fed to the enzyme, what is the composition of the remaining unreacted alanine over time?

**Solution:**
1. The enzyme's chiral active site accepts only the D enantiomer
2. D-alanine is consumed; L-alanine is untouched
3. The unreacted pool becomes enriched in L — approaching optically pure L-alanine
4. This is a **kinetic resolution**: a chiral catalyst separates enantiomers by reacting them at different rates

**MCAT Strategy:** Enzymatic kinetic resolution passages ask "what remains?" (the slow/unaccepted enantiomer) and "why?" (diastereomeric enzyme-substrate complexes have different energies).
</details>

<details>
<summary><b>Example 4: The thalidomide caveat</b></summary>

**Question:** Thalidomide's (R) enantiomer is a sedative and the (S) enantiomer is teratogenic. Why would administering pure (R)-thalidomide NOT have prevented birth defects?

**Solution:**
1. Thalidomide's stereocenter carries an acidic hydrogen alpha to two carbonyls
2. Under physiological conditions the center **racemizes in vivo** (enolization erases the configuration, exactly like alpha-carbon racemization in ketones)
3. Pure (R) converts to an R/S mixture in the body → the teratogenic (S) form appears regardless
4. Lesson: single-enantiomer dosing only helps when the stereocenter is configurationally STABLE in vivo

**MCAT Strategy:** Link this to carbonyl chemistry: any stereocenter bearing an acidic alpha-H adjacent to a carbonyl can racemize via the planar enol/enolate. The MCAT loves cross-topic mechanisms like this.
</details>`
    }
  ]
};
