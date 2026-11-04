export const mcatOchemStereoPart2Data = {
  topicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  sections: [
    {
      id: 'stereo2-intro',
      type: 'text' as const,
      content: `# Stereochemistry for the MCAT

**Part 2 of 4 — Assigning Configuration: R/S, Fischer & E/Z**

Assigning configuration is an algorithm. Run the same steps every time and these become free points.

### Cahn-Ingold-Prelog (CIP) Priority Rules

1. **Higher atomic number wins** at the first atom: I > Br > Cl > S > F > O > N > C > H
2. **Tie? Move outward** to the next set of attached atoms and compare at the **first point of difference**, comparing highest-vs-highest first
3. **Multiple bonds are duplicated**: C=O counts as C bonded to (O, O); a nitrile carbon counts as (N, N, N)

Worked comparisons:
- $-CH_2OH$ vs $-CH_3$: first atoms tie (C vs C); attached sets (O,H,H) vs (H,H,H) → CH2OH wins
- $-CHO$ vs $-CH_2OH$: sets (O,O,H) vs (O,H,H) → CHO wins (the duplicated O breaks the tie)
- Vinyl ($-CH{=}CH_2$) vs isopropyl: both first-shell (C,C,H); exploring the branches, vinyl's $=CH_2$ carbon carries the duplicate C, so its set (C,H,H) beats each isopropyl methyl's (H,H,H) → vinyl wins

### Assigning R/S

1. Rank the four groups 1 (highest) → 4 (lowest)
2. Point group 4 (usually H) AWAY from you
3. Trace 1 → 2 → 3: clockwise = **R** (rectus), counterclockwise = **S** (sinister)

**The trick you will actually use:** if the lowest-priority group points TOWARD you (as drawn), assign the rotation and then **reverse** the answer.

### Fischer Projections

Conventions: **horizontal bonds point toward you** (wedges); **vertical bonds point away** (dashes). The carbon chain runs vertically, most oxidized carbon on top.

Manipulation rules (high yield):
- **Swap any two groups** → inverts that center (one swap = enantiomer at that center; two swaps = back to the original)
- **Rotate the whole projection 180° in the plane** (or hold one group fixed and rotate the other three) → same molecule
- **Rotate 90°** → inverts the configuration (illegal move — it silently swaps toward/away)
- Reading R/S directly: if the lowest-priority group is on a **vertical** bond (pointing away), the traced rotation is the true answer; if it is on a **horizontal** bond (pointing toward you), **reverse** what you trace

### E/Z Alkene Nomenclature

For each sp2 carbon separately, rank its two substituents by CIP:
- Higher-priority groups on the **same side** → **Z** (zusammen, "together")
- Opposite sides → **E** (entgegen)

cis/trans works only when each carbon has one H; E/Z always works. Beware: cis does not always equal Z — priorities, not "size," decide.`
    },
    {
      id: 'stereo2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Assigning Configuration

**Problem 1.** D-glyceraldehyde is drawn as a Fischer projection: CHO on top, OH on the right, H on the left, CH2OH at the bottom.

- **(a)** How do the four groups on the central carbon rank?
- **(b)** Which way does the lowest-priority group point?
- **(c)** Which way does 1 → 2 → 3 trace?
- **(d)** Is the center R or S?

**(a) Priorities.** OH (1) > CHO (2, its carbon sees O,O,H) > CH2OH (3, its carbon sees O,H,H) > H (4). The CHO > CH2OH call is decided by the duplicated oxygen.

**(b) Group 4.** H sits on a horizontal bond → it points TOWARD the viewer.

**(c) Trace.** OH (right) → CHO (top) → CH2OH (bottom), sweeping through the left side, is counterclockwise.

**(d) Assign.** With the lowest priority toward you from (b), reverse the counterclockwise trace from (c): the true configuration is **R**. D-glyceraldehyde = (R)-glyceraldehyde anchors the entire D/L sugar system (Part 4 of this lesson).

**Problem 2.** In one isomer of 2-bromo-2-butene, CH3-CBr=CH-CH3, the two methyl groups are on the same side of the double bond, so it looks "cis".

- **(a)** Which group wins on C2?
- **(b)** Which group wins on C3?
- **(c)** Is this isomer E or Z?

**(a) C2.** C2 bears Br and CH3: Br wins (atomic number 35 > 6).

**(b) C3.** C3 bears CH3 and H: CH3 wins.

**(c) Assign.** If the two methyls are cis, then Br and the C3 methyl are on OPPOSITE sides. The priority winners from (a) and (b) are trans → **E**, despite the "cis" look. Never map cis to Z by reflex; a halogen or oxygen substituent often flips the intuitive answer.

**Problem 3.** Rank $-C{\\equiv}N$, $-CH_2NH_2$ and $-CH_3$ in CIP priority. All three attach through carbon, so the first atoms tie.

- **(a)** Which set of atoms does the nitrile carbon carry?
- **(b)** Which sets do the $CH_2NH_2$ and $CH_3$ carbons carry?
- **(c)** What is the priority order?

**(a) The nitrile carbon.** The triple bond to N duplicates N twice, so the carbon sees (N, N, N). Each pi bond adds one phantom copy of the atom at the far end.

**(b) The other two.** The $CH_2NH_2$ carbon sees (N, H, H); the $CH_3$ carbon sees (H, H, H).

**(c) Rank.** Compare highest against highest, then the next: **CN > CH2NH2 > CH3**. Duplication makes carbonyl, nitrile and vinyl groups "heavier" than they look.

**Problem 4.** Starting from a Fischer projection of (R)-alanine, you first swap NH2 and H, then swap NH2 and COOH.

- **(a)** What is the configuration after the first swap?
- **(b)** What is the configuration after the second swap?
- **(c)** What general rule do the two swaps show?

**(a) First swap.** Start: R. One exchange inverts → S.

**(b) Second swap.** A second exchange inverts the S from (a) again → **R**.

**(c) The rule.** An EVEN number of pairwise swaps returns the original configuration; an odd number gives the enantiomer. Count swaps instead of re-deriving R/S; to compare two Fischer drawings, find how many swaps map one onto the other.`
    },
    {
      id: 'stereo2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Assigning Configuration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rank these substituents from highest to lowest CIP priority: $-OH$, $-NH_2$, $-CH_3$, $-H$`,
            options: [`$OH > NH_2 > CH_3 > H$`, `$NH_2 > OH > CH_3 > H$`, `$CH_3 > OH > NH_2 > H$`, `$OH > CH_3 > NH_2 > H$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Priority follows atomic number of the FIRST atom: O (8) > N (7) > C (6) > H (1). Size and mass of the whole group are irrelevant when the first atoms differ.`
          },
          {
            question: `Which group has higher CIP priority: $-CHO$ or $-CH_2OH$?`,
            options: [`$-CH_2OH$, because it has more atoms`, `$-CHO$, because its C=O oxygen is counted twice`, `$-CH_2OH$, because its oxygen also bears an H`, `Neither; each carbon bears one O`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Both first atoms are carbon — tie. Duplicate the C=O: the CHO carbon "sees" (O,O,H), while the CH2OH carbon sees (O,H,H). At the first point of difference O beats H, so CHO wins. This exact comparison decides R/S in sugars.`
          },
          {
            question: `A stereocenter is drawn with its lowest-priority group pointing toward the viewer. Tracing priorities 1 to 2 to 3 appears clockwise. The actual configuration is:`,
            options: [`R`, `S`, `Cannot be determined`, `R only if the molecule is a Fischer projection`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The assignment assumes the lowest group points AWAY. When it points toward you, you are viewing the mirror-image sense of rotation — reverse the call: apparent clockwise (R) is actually S.`
          },
          {
            question: `In a Fischer projection, exchanging the positions of any two substituents on a stereocenter:`,
            options: [`Leaves the configuration unchanged`, `Inverts the configuration at that center`, `Converts the molecule to a meso form`, `Is equivalent to rotating the projection 180°`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `One pairwise swap always inverts a stereocenter (R becomes S). Two successive swaps restore the original. A 180° in-plane rotation of the whole projection is the move that preserves the molecule.`
          },
          {
            question: `An alkene has Br and Cl on one sp2 carbon, and CH3 and H on the other. In the Z isomer, bromine is on the same side as:`,
            options: [`H, because Z pairs the largest with the smallest group`, `CH3, because Br and CH3 each win on their carbon`, `Cl, because Z groups the two halogens together`, `Neither, since Z requires one H on each alkene carbon`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Rank each carbon separately: Br > Cl on the first (atomic number 35 vs 17); CH3 > H on the second. Z means the two winners (Br and CH3) are cis to each other. E/Z needs no H on either carbon — only cis/trans naming does.`
          },
          {
            question: `Rotating a Fischer projection by 90° within the plane of the page produces:`,
            options: [`The same compound`, `Its enantiomer`, `One of its diastereomers`, `A constitutional isomer`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `A 90° rotation moves horizontal (toward-viewer) bonds onto vertical (away) positions, silently inverting every depicted center — you get the enantiomer of what you meant. Only a 180° in-plane rotation (or holding one group fixed and rotating the other three) keeps the molecule.`
          },
          {
            question: `A wedge-dash drawing of 2-butanol shows C2 with OH pointing up and the ethyl group pointing down-right, both in the plane of the page; the methyl is on a wedge pointing down-left, and H is on a dash behind C2. The configuration at C2 is:`,
            options: [`(R): the trace runs clockwise with H in back`, `(S): the wedged methyl forces a reversal`, `(S): OH, ethyl, methyl runs counterclockwise`, `Undefined until the rotation sign is measured`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Priorities: OH (1) > CH2CH3 (2) > CH3 (3) > H (4). Going from OH (up) to ethyl (down-right) to methyl (down-left) sweeps clockwise, and H is on the dash, pointing away, so no reversal is needed: (R)-2-butanol. A reversal is needed only when the LOWEST-priority group points toward you, not whenever some group is wedged. R/S is assigned from the drawing and never waits on a polarimeter.`
          }
        ]
      }
    },
    {
      id: 'stereo2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **CIP priorities.** Rank by atomic number at the first atom; break ties at the first point of difference, counting multiple bonds twice.
- **R/S in three steps.** Rank 1–4, point group 4 away, trace 1 → 2 → 3: clockwise is R, counterclockwise is S.
- **Fischer projections.** Horizontal bonds point toward you; one swap inverts, two restore, and a 180° turn keeps the molecule.
- **E/Z per carbon.** Rank each sp2 carbon's two groups separately: winners together is Z, opposite is E.

**Common traps**

- **Bigger group, higher priority.** Priority is atomic number at the first point of difference: $-OH$ outranks any carbon chain.
- **Forgetting to reverse.** With group 4 toward you (a wedge, or a Fischer horizontal bond), reverse the traced direction.
- **Turning a Fischer 90°.** A 90° turn silently swaps toward and away and gives the enantiomer; only 180° in the plane is legal.
- **Cis means Z.** Priority, not looks, decides: the 2-bromo-2-butene with cis methyls is E, because Br wins on C2.`
    }
  ]
};
