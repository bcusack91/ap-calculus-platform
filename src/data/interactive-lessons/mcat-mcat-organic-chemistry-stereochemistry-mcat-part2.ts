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
- Vinyl ($-CH{=}CH_2$) vs isopropyl: both first-shell (C,C,H); exploring the branches, vinyl's duplicated carbon beats isopropyl's (H,H,H) methyls → vinyl wins

### Assigning R/S

1. Rank the four groups 1 (highest) → 4 (lowest)
2. Point group 4 (usually H) AWAY from you
3. Trace 1 → 2 → 3: clockwise = **R** (rectus), counterclockwise = **S** (sinister)

**The trick you will actually use:** if the lowest-priority group points TOWARD you (as drawn), assign the rotation and then **reverse** the answer.

### Fischer Projections

Conventions: **horizontal bonds point toward you** (wedges); **vertical bonds point away** (dashes). The carbon chain runs vertically, most oxidized carbon on top.

Manipulation rules (high yield):
- **Swap any two groups** → inverts that center (one swap = enantiomer at that center; two swaps = back to the original)
- **Rotate the whole projection 180° in the plane** → same molecule
- **Rotate 90°** → inverts the configuration (illegal move — it silently swaps toward/away)
- Reading R/S directly: if the lowest-priority group is on a **vertical** bond (pointing away), the traced rotation is the true answer; if it is on a **horizontal** bond (pointing toward you), **reverse** what you trace

### E/Z Alkene Nomenclature

For each sp2 carbon separately, rank its two substituents by CIP:
- Higher-priority groups on the **same side** → **Z** (zusammen, "together")
- Opposite sides → **E** (entgegen)

cis/trans works only when each carbon has one H; E/Z always works. Beware: cis does not always equal Z — priorities, not "size," decide.`
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
            explanation: `Priority follows atomic number of the FIRST atom: O (8) > N (7) > C (6) > H (1). Size and mass of the whole group are irrelevant when the first atoms differ.`
          },
          {
            question: `Which group has higher CIP priority: $-CHO$ or $-CH_2OH$?`,
            options: [`$-CH_2OH$, because it has more atoms`, `$-CHO$, because the double-bonded O is counted twice, giving (O,O,H) vs (O,H,H)`, `$-CH_2OH$, because its oxygen bears an H`, `They are identical in priority`],
            correctAnswer: 1,
            explanation: `Both first atoms are carbon — tie. Duplicate the C=O: the CHO carbon "sees" (O,O,H), while the CH2OH carbon sees (O,H,H). At the first point of difference O beats H, so CHO wins. This exact comparison decides R/S in sugars.`
          },
          {
            question: `A stereocenter is drawn with its lowest-priority group pointing toward the viewer. Tracing priorities 1 to 2 to 3 appears clockwise. The actual configuration is:`,
            options: [`R`, `S`, `Cannot be determined`, `R only if the molecule is a Fischer projection`],
            correctAnswer: 1,
            explanation: `The assignment assumes the lowest group points AWAY. When it points toward you, you are viewing the mirror-image sense of rotation — reverse the call: apparent clockwise (R) is actually S.`
          },
          {
            question: `In a Fischer projection, exchanging the positions of any two substituents on a stereocenter:`,
            options: [`Leaves the configuration unchanged`, `Inverts the configuration at that center`, `Converts the molecule to a meso form`, `Is equivalent to rotating the projection 180°`],
            correctAnswer: 1,
            explanation: `One pairwise swap always inverts a stereocenter (R becomes S). Two successive swaps restore the original. A 180° in-plane rotation of the whole projection is the move that preserves the molecule.`
          },
          {
            question: `An alkene has Br and Cl on one sp2 carbon, and CH3 and H on the other. In the Z isomer, bromine is on the same side as:`,
            options: [`H, because Z pairs the largest with the smallest group`, `CH3, because Br and CH3 are the higher-priority groups on their respective carbons`, `Cl, because halogens group together`, `Either — Z is ambiguous here`],
            correctAnswer: 1,
            explanation: `Rank each carbon separately: Br > Cl on the first (atomic number 35 vs 17); CH3 > H on the second. Z means the two winners (Br and CH3) are cis to each other.`
          },
          {
            question: `Rotating a Fischer projection by 90° within the plane of the page produces:`,
            options: [`The same compound`, `The enantiomer (all centers inverted)`, `A diastereomer`, `A constitutional isomer`],
            correctAnswer: 1,
            explanation: `A 90° rotation moves horizontal (toward-viewer) bonds onto vertical (away) positions, silently inverting every depicted center — you get the enantiomer of what you meant. Only 180° in-plane rotation is a legal move.`
          }
        ]
      }
    },
    {
      id: 'stereo2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- CIP: first atom's atomic number; ties break at the first point of difference, comparing highest against highest; double bonds duplicate atoms
- Lowest priority away → trace 1-2-3 → clockwise R, counterclockwise S; lowest priority toward you → reverse the call
- Fischer: horizontal = toward you, vertical = away; one swap inverts; 180° legal, 90° inverts everything
- In a Fischer, lowest group on a horizontal bond → reverse the traced rotation
- Z = higher-priority groups on the same side (per-carbon CIP ranking, not "bigger groups")`
    },
    {
      id: 'stereo2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Assigning Configuration

<details>
<summary><b>Example 1: R/S of glyceraldehyde</b></summary>

**Question:** D-glyceraldehyde is drawn as a Fischer projection: CHO on top, OH on the right, H on the left, CH2OH at the bottom. Assign R or S.

**Solution:**
1. Priorities at the central carbon: OH (1) > CHO (2, its carbon sees O,O,H) > CH2OH (3, its carbon sees O,H,H) > H (4)
2. H sits on a horizontal bond → it points TOWARD the viewer
3. Trace 1 → 2 → 3: OH (right) → CHO (top) → CH2OH (bottom) is counterclockwise
4. Lowest priority is toward you → reverse: the true configuration is **R**

**MCAT Strategy:** D-glyceraldehyde = (R)-glyceraldehyde is the anchor for the entire D/L sugar system (Part 4). The CHO > CH2OH priority call is decided by the duplicated oxygen.
</details>

<details>
<summary><b>Example 2: The duplication rule head-to-head</b></summary>

**Question:** Rank $-C{\\equiv}N$, $-CH_2NH_2$, and $-CH_3$ in CIP priority.

**Solution:**
1. All three attach through carbon — go to the attached-atom sets
2. Nitrile carbon: the triple bond to N duplicates twice → (N, N, N)
3. CH2NH2 carbon: (N, H, H)
4. CH3 carbon: (H, H, H)
5. Compare highest-vs-highest, then next: **CN > CH2NH2 > CH3**

**MCAT Strategy:** Each pi bond adds one phantom copy of the atom at the far end. A triple bond duplicates twice. This makes carbonyl, nitrile, and vinyl groups "heavier" than they look.
</details>

<details>
<summary><b>Example 3: Legal and illegal Fischer moves</b></summary>

**Question:** Starting from a Fischer projection of (R)-alanine, you (a) swap NH2 and H, then (b) swap NH2 and COOH. What is the final configuration?

**Solution:**
1. Start: R
2. Swap (a): one exchange inverts → S
3. Swap (b): a second exchange inverts again → **R**
4. General rule: an EVEN number of pairwise swaps returns the original configuration; an odd number gives the enantiomer

**MCAT Strategy:** Count swaps, don't re-derive R/S from scratch each time. Even = same, odd = inverted. This also speeds up comparing two Fischer drawings: find how many swaps map one onto the other.
</details>

<details>
<summary><b>Example 4: When cis is not Z</b></summary>

**Question:** In 2-bromo-2-butene, the isomer with the two methyl groups on the same side — "cis" by appearance — is E or Z?

**Solution:**
1. C2 bears Br and CH3: Br (Z-determining winner, 35 > 6)
2. C3 bears CH3 and H: CH3 wins
3. If the two methyls are cis, then Br and the C3 methyl are on OPPOSITE sides
4. The priority winners (Br, CH3) are trans → **E**, despite the "cis" look

**MCAT Strategy:** Never map cis to Z by reflex. Rank each carbon's two groups first; a halogen or oxygen substituent frequently flips the intuitive answer.
</details>`
    }
  ]
};
