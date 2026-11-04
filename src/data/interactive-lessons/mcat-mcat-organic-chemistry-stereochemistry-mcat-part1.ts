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
- A double bond counts only when EACH alkene carbon carries two different groups; a terminal $=CH_2$ adds nothing
- The count DROPS below $2^n$ when a **meso compound** exists

R/S and E/Z name the two configurations; Part 2 of this lesson shows how to assign them.

### Meso Compounds

A meso compound contains stereocenters but is **achiral** because it has an **internal mirror plane** — one half of the molecule reflects the other.

Classic example: (2R,3S)-2,3-dibromobutane. The (R,S) form is superimposable on its own mirror image. So 2,3-dibromobutane has only **three** stereoisomers: (R,R), (S,S) — an enantiomeric pair — and the meso (R,S) form, which is a diastereomer of both.

Meso requirement: the two stereocenters must carry the **same set of substituents** so a mirror plane can bisect the molecule.

### Conformations and Ring Isomers

Conformers are the same compound in different rotational shapes: they interconvert at room temperature and cannot be separated.

- **Newman projections of butane** (looking down C2–C3): **anti** (methyls 180° apart) is lowest in energy; **gauche** (60°) is slightly higher from methyl–methyl crowding; **eclipsed** forms are highest, with methyls eclipsed (0°) the least stable of all.
- **Cyclohexane chairs**: each carbon has one axial and one equatorial position, and a ring flip swaps them. Bulky groups prefer **equatorial**, where they avoid 1,3-diaxial crowding.
- **cis/trans rings**: two ring substituents on the same face are cis, on opposite faces trans. A ring flip never turns cis into trans, so cis/trans ring isomers are configurational **diastereomers**.
- cis-1,2-Dimethylcyclohexane is **meso** (achiral, with an internal mirror plane); trans-1,2-dimethylcyclohexane is chiral and exists as a pair of enantiomers.

### Property Rules (memorize cold)

| Pair | Physical properties (mp, bp, solubility) | Optical rotation |
|------|------------------------------------------|------------------|
| Enantiomers | **Identical** | Equal magnitude, **opposite sign** |
| Diastereomers | **Different** | Different, unrelated |
| Meso compound | — | **Zero** (achiral) |

Enantiomers behave identically in every achiral environment. They differ only toward plane-polarized light and toward other chiral things (enzymes, receptors, chiral reagents).`
    },
    {
      id: 'stereo1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Isomers & Chirality

**Problem 1.** Classify each pair as constitutional isomers, enantiomers, diastereomers or conformers. Check connectivity FIRST.

- **(a)** How are glucose and fructose related?
- **(b)** How are (R)-2-butanol and (S)-2-butanol related?
- **(c)** How are D-glucose and D-mannose, which differ only at C2, related?
- **(d)** How are anti-butane and gauche-butane related?

**(a) Glucose and fructose.** Both are C6H12O6, but glucose is an aldehyde and fructose a ketone — different connectivity → **constitutional isomers**. Trap answers call them "stereoisomers"; the carbonyl sits in a different position.

**(b) The 2-butanols.** A single stereocenter with opposite configurations → nonsuperimposable mirror images → **enantiomers**.

**(c) Glucose and mannose.** Several stereocenters, differing at only one → not mirror images → **diastereomers** (specifically epimers).

**(d) Anti and gauche butane.** They interconvert by rotation about the C2-C3 sigma bond → **conformers**, the same compound.

**Problem 2.** 2,3-Dichlorobutane, CH3-CHCl-CHCl-CH3, has two stereocenters, C2 and C3.

- **(a)** Can this compound have a meso form?
- **(b)** Which stereoisomer is achiral?
- **(c)** How is that achiral isomer related to the (2R,3R) isomer?
- **(d)** Can the two be separated by ordinary physical means?

**(a) Matching sets.** Yes. Both stereocenters carry the same set: H, Cl, CH3 and CHClCH3, so a mirror plane can bisect the molecule.

**(b) The meso form.** The (2R,3S) isomer has an internal mirror plane between C2 and C3 → achiral → **meso**.

**(c) Relationship.** Same connectivity, so stereoisomers, but NOT mirror images: the mirror image of (R,R) is always (S,S). The meso form and (2R,3R) are **diastereomers**.

**(d) Separation.** Yes. As diastereomers from (c), the meso form and (R,R) have different melting points and can be separated by ordinary physical means.

**Problem 3.** 3-Bromo-2-butanol is CH3-CH(OH)-CH(Br)-CH3.

- **(a)** Which carbons are stereocenters?
- **(b)** Can the molecule have a meso form?
- **(c)** How many stereoisomers exist?

**(a) Find the stereocenters.** C2 bears H, OH, CH3 and CH(Br)CH3 — four different groups → stereocenter. C3 bears H, Br, CH3 and CH(OH)CH3 — four different groups → stereocenter.

**(b) Meso check.** No. C2's substituent set (OH-based) differs from C3's (Br-based), so no internal mirror plane is possible. A meso form needs the two stereocenters substituted identically.

**(c) Count.** With two stereocenters from (a) and no meso form from (b): $2^2 = 4$ stereoisomers, two pairs of enantiomers. Different substituents (here OH vs Br) give the full $2^n$ count.

**Problem 4.** 4-Methyl-2-hexene is CH3-CH=CH-CH(CH3)-CH2-CH3.

- **(a)** Can the C2=C3 double bond show E/Z isomerism?
- **(b)** Is C4 a stereocenter?
- **(c)** How many stereoisomers exist?

**(a) The double bond.** Yes. Each alkene carbon carries two different groups (CH3/H and chain/H), so E/Z counts as a stereochemical unit. A double bond with two identical groups on one carbon (a terminal =CH2) would contribute nothing.

**(b) C4.** Yes. C4 bears H, CH3, ethyl and the propenyl chain — four different groups → stereocenter.

**(c) Count.** Two independent stereochemical units from (a) and (b) → $2^2 = 4$ stereoisomers: (E,R), (E,S), (Z,R), (Z,S). Count E/Z-capable double bonds along with sp3 stereocenters.`
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
            yield: 'HIGH',
            explanation: `Maximum stereoisomers $= 2^n = 2^3 = 8$. The count only drops below $2^n$ when internal symmetry creates a meso form, which the question excludes.`
          },
          {
            question: `Two pure enantiomers of the same compound will differ in which property?`,
            options: [`Boiling point`, `Sign of optical rotation`, `Solubility in water`, `Melting point`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Enantiomers have identical physical properties in any achiral environment — same mp, bp, solubility, density. They differ only in the SIGN of optical rotation (equal magnitude, opposite direction) and in interactions with other chiral entities.`
          },
          {
            question: `cis-2-Butene and trans-2-butene are best classified as:`,
            options: [`Constitutional isomers`, `Enantiomers`, `Diastereomers`, `Conformers`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `They have the same connectivity (stereoisomers) but are NOT mirror images of each other — that makes them diastereomers. Geometric (cis/trans) isomers are always diastereomers. They cannot interconvert by rotation because the pi bond blocks it.`
          },
          {
            question: `meso-Tartaric acid contains two stereocenters yet is optically inactive because:`,
            options: [`The two stereocenters rotate light in the same direction`, `It has an internal mirror plane, so it is its own mirror image`, `It rapidly interconverts with its enantiomer at room temperature`, `It is a 50:50 mixture of the (R,R) and (S,S) forms`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A meso compound is achiral despite having stereocenters: an internal mirror plane means the molecule IS its own mirror image, so it cannot rotate plane-polarized light. If both centers rotated light the same way, the effects would add, not cancel. Stereocenters do not interconvert at room temperature without breaking bonds, and meso-tartaric acid is a single compound, not a 50:50 mixture of (R,R) and (S,S) — that would be racemic tartaric acid.`
          },
          {
            question: `Which molecule contains a chirality center?`,
            options: [`2-bromopropane`, `2-bromobutane`, `1-bromobutane`, `2-bromo-2-methylpropane`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `In 2-bromobutane, C2 bears four different groups: H, Br, methyl, and ethyl. 2-Bromopropane has two identical methyls on C2; 1-bromobutane's C1 has two H atoms; 2-bromo-2-methylpropane's C2 has three identical methyls.`
          },
          {
            question: `How many distinct stereoisomers exist for 2,3-dibromobutane?`,
            options: [`2`, `3`, `4`, `8`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Two stereocenters suggest $2^2 = 4$, but both centers carry the same substituent set (H, Br, CH3, and the rest of the chain), so the (R,S) form is meso — identical to (S,R). Total: (R,R), (S,S), and meso = 3 stereoisomers.`
          }
        ]
      }
    },
    {
      id: 'stereo1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Classify in order.** Same connectivity? Only rotation apart? Mirror images? That sorts constitutional, conformer, enantiomer, diastereomer.
- **Chirality center.** A carbon bearing four different whole groups; one such center always makes a molecule chiral.
- **Count with $2^n$.** Up to $2^n$ stereoisomers for $n$ stereocenters and E/Z double bonds; a meso form lowers the count.
- **Enantiomers vs diastereomers.** Enantiomers share every physical property but rotate light oppositely; diastereomers differ.

**Common traps**

- **Comparing first atoms only.** Compare whole groups: 2-bromopropane's C2 carries two identical methyls, so it is no stereocenter.
- **Forgetting the double bond in the count.** A C=C with two different groups on each carbon is a stereo unit: 4-methyl-2-hexene has 4 stereoisomers, not 2.
- **Meso as racemic.** A meso compound is ONE achiral compound; a racemate is a 50:50 mix of two chiral enantiomers.
- **The mirror of (R,R).** The mirror image of (R,R) is (S,S); an (R,S) form is a diastereomer of both.`
    }
  ]
};
