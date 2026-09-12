export const mcatOchemStereoPart1Data = {
  topicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  sections: [
    {
      id: 'stereo1-intro',
      type: 'text' as const,
      content: `# Stereochemistry for the MCAT

**Part 1 of 4 — Isomers & Chirality: Core Concepts**

Stereochemistry questions are pure classification questions in disguise. If you can place any two structures into the correct box of the isomer tree, half the battle is over.

### The Isomer Tree

Same molecular formula? Then the two structures are isomers. Walk down the tree:

| Question | Yes | No |
|----------|-----|-----|
| Same connectivity (same atoms bonded to same atoms)? | Stereoisomers | **Constitutional (structural) isomers** |
| Interconvert by bond ROTATION only? | **Conformers** (not true isomers — same compound) | Configurational stereoisomers |
| Nonsuperimposable mirror images? | **Enantiomers** | **Diastereomers** |

- **Constitutional isomers**: butane vs isobutane; 1-propanol vs 2-propanol; glucose vs fructose
- **Conformers**: anti vs gauche butane; chair flips of cyclohexane — separated only by rotation barriers, same molecule
- **Enantiomers**: exact mirror images that cannot be superimposed (like left and right hands)
- **Diastereomers**: stereoisomers that are NOT mirror images — includes cis/trans (E/Z) alkene pairs and molecules differing at only SOME of several stereocenters

### Chirality Centers

A **chirality center** (stereocenter, stereogenic center) is a carbon bonded to **four different groups**. Check by comparing the ENTIRE group attached, not just the first atom.

- 2-bromobutane: C2 carries H, Br, CH3, CH2CH3 — four different → chiral center
- 2-bromopropane: C2 carries H, Br, and TWO methyls → not a stereocenter

A molecule with exactly one chirality center is always chiral. With more than one, you must check for internal symmetry.

### Counting Stereoisomers

- Maximum number of stereoisomers $= 2^n$ where $n$ = number of stereocenters (plus double bonds capable of E/Z)
- The count DROPS below $2^n$ when a **meso compound** exists

### Meso Compounds

A meso compound contains stereocenters but is **achiral** because it has an **internal mirror plane** — one half of the molecule reflects the other.

Classic example: (2R,3S)-2,3-dibromobutane. The (R,S) form is superimposable on its own mirror image. So 2,3-dibromobutane has only **three** stereoisomers: (R,R), (S,S) — an enantiomeric pair — and the meso (R,S) form, which is a diastereomer of both.

Meso requirement: the two stereocenters must carry the **same set of substituents** so a mirror plane can bisect the molecule.

### Property Rules (memorize cold)

| Pair | Physical properties (mp, bp, solubility) | Optical rotation |
|------|------------------------------------------|------------------|
| Enantiomers | **Identical** | Equal magnitude, **opposite sign** |
| Diastereomers | **Different** | Different, unrelated |
| Meso compound | — | **Zero** (achiral) |

Enantiomers behave identically in every achiral environment. They differ only toward plane-polarized light and toward other chiral things (enzymes, receptors, chiral reagents).`
    },
    {
      id: 'stereo1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Isomers & Chirality: Core Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `A molecule has 3 stereocenters and no internal symmetry. The maximum number of stereoisomers is:`,
            options: [`3`, `6`, `8`, `9`],
            correctAnswer: 2,
            explanation: `Maximum stereoisomers $= 2^n = 2^3 = 8$. The count only drops below $2^n$ when internal symmetry creates a meso form, which the question excludes.`
          },
          {
            question: `Two pure enantiomers of the same compound will differ in which property?`,
            options: [`Boiling point`, `Direction of rotation of plane-polarized light`, `Solubility in water`, `Melting point`],
            correctAnswer: 1,
            explanation: `Enantiomers have identical physical properties in any achiral environment — same mp, bp, solubility, density. They differ only in the SIGN of optical rotation (equal magnitude, opposite direction) and in interactions with other chiral entities.`
          },
          {
            question: `cis-2-Butene and trans-2-butene are best classified as:`,
            options: [`Constitutional isomers`, `Enantiomers`, `Diastereomers`, `Conformers`],
            correctAnswer: 2,
            explanation: `They have the same connectivity (stereoisomers) but are NOT mirror images of each other — that makes them diastereomers. Geometric (cis/trans) isomers are always diastereomers. They cannot interconvert by rotation because the pi bond blocks it.`
          },
          {
            question: `meso-Tartaric acid contains two stereocenters yet is optically inactive because:`,
            options: [`The two stereocenters rotate light in the same direction`, `An internal mirror plane makes the molecule superimposable on its mirror image`, `It rapidly interconverts with its enantiomer at room temperature`, `Tartaric acid is a racemic mixture`],
            correctAnswer: 1,
            explanation: `A meso compound is achiral despite having stereocenters: an internal mirror plane means the molecule IS its own mirror image. The rotations of the two halves cancel internally. It is a single compound, not a mixture.`
          },
          {
            question: `Which molecule contains a chirality center?`,
            options: [`2-bromopropane`, `2-bromobutane`, `1-bromobutane`, `2-bromo-2-methylpropane`],
            correctAnswer: 1,
            explanation: `In 2-bromobutane, C2 bears four different groups: H, Br, methyl, and ethyl. 2-Bromopropane has two identical methyls on C2; 1-bromobutane's C1 has two H atoms; 2-bromo-2-methylpropane's C2 has three identical methyls.`
          },
          {
            question: `How many distinct stereoisomers exist for 2,3-dibromobutane?`,
            options: [`2`, `3`, `4`, `8`],
            correctAnswer: 1,
            explanation: `Two stereocenters suggest $2^2 = 4$, but both centers carry the same substituent set (H, Br, CH3, and the rest of the chain), so the (R,S) form is meso — identical to (S,R). Total: (R,R), (S,S), and meso = 3 stereoisomers.`
          }
        ]
      }
    },
    {
      id: 'stereo1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Classify in order: same formula? same connectivity? mirror images? — constitutional isomers → stereoisomers → enantiomers vs diastereomers
- Chirality center = carbon with four DIFFERENT attached groups (compare whole groups, not first atoms)
- Maximum stereoisomers $= 2^n$; a meso form (internal mirror plane, matching stereocenters) reduces the count
- Enantiomers: identical physical properties, opposite optical rotation; diastereomers differ in everything
- cis/trans (E/Z) alkene pairs are diastereomers; conformers are the same compound`
    },
    {
      id: 'stereo1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Isomers & Chirality

<details>
<summary><b>Example 1: Find every stereocenter</b></summary>

**Question:** How many stereocenters are in 3-bromo-2-butanol, and how many stereoisomers exist?

**Solution:**
1. Number the chain: CH3-CH(OH)-CH(Br)-CH3
2. C2 bears H, OH, CH3, and CH(Br)CH3 — four different groups → stereocenter
3. C3 bears H, Br, CH3, and CH(OH)CH3 — four different groups → stereocenter
4. Meso check: C2's substituent set (OH-based) differs from C3's (Br-based), so NO internal mirror plane is possible
5. Stereoisomers: $2^2 = 4$ — two pairs of enantiomers

**MCAT Strategy:** A meso form requires the two stereocenters to be substituted identically. Different substituents (here OH vs Br) = full $2^n$ count.
</details>

<details>
<summary><b>Example 2: Identify the meso compound</b></summary>

**Question:** Which stereoisomer of 2,3-dichlorobutane is achiral, and what is its relationship to the (2R,3R) isomer?

**Solution:**
1. Both stereocenters carry the same set: H, Cl, CH3, CHClCH3 — meso is possible
2. The (2R,3S) isomer has an internal mirror plane between C2 and C3 → achiral → **meso**
3. Relationship to (2R,3R): same connectivity, stereoisomers, NOT mirror images (mirror of R,R is S,S) → **diastereomers**
4. Consequence: meso and (R,R) have different melting points and can be separated by ordinary physical means

**MCAT Strategy:** "R,S vs R,R" with identical substituent sets = meso vs chiral = diastereomers. The mirror image of (R,R) is always (S,S).
</details>

<details>
<summary><b>Example 3: Classify the relationship</b></summary>

**Question:** Classify each pair: (a) glucose and fructose; (b) (R)-2-butanol and (S)-2-butanol; (c) D-glucose and D-mannose (differ only at C2); (d) anti-butane and gauche-butane.

**Solution:**
1. (a) Both C6H12O6, but glucose is an aldehyde and fructose a ketone — different connectivity → **constitutional isomers**
2. (b) Single stereocenter, opposite configurations → nonsuperimposable mirror images → **enantiomers**
3. (c) Several stereocenters, differing at only one → not mirror images → **diastereomers** (specifically epimers)
4. (d) Interconvert by rotation about the C2-C3 sigma bond → **conformers** (same compound)

**MCAT Strategy:** Check connectivity FIRST. Many trap answers call glucose/fructose "stereoisomers" — the carbonyl is in a different position, so they are constitutional isomers.
</details>

<details>
<summary><b>Example 4: Stereoisomer count with a double bond</b></summary>

**Question:** How many stereoisomers exist for 4-methyl-2-hexene?

**Solution:**
1. CH3-CH=CH-CH(CH3)-CH2-CH3
2. The C2=C3 double bond has two different groups on each carbon (CH3/H and chain/H) → E/Z isomerism counts as a stereochemical unit
3. C4 bears H, CH3, ethyl, and the propenyl chain — four different → stereocenter
4. Two independent stereochemical units → $2^2 = 4$ stereoisomers: (E,R), (E,S), (Z,R), (Z,S)

**MCAT Strategy:** Count E/Z-capable double bonds along with sp3 stereocenters. A double bond with two identical groups on either carbon (e.g., a terminal =CH2) contributes nothing.
</details>`
    }
  ]
};
