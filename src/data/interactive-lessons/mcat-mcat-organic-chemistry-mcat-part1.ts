export const mcatOrgChemPart1Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc1-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 1 of 7 — Functional Groups & Stereochemistry**

### Must-Know Functional Groups

| Group | Structure | Example |
|-------|-----------|---------|
| Alcohol | $-OH$ | Ethanol |
| Aldehyde | $-CHO$ | Formaldehyde |
| Ketone | $-CO-$ (internal) | Acetone |
| Carboxylic acid | $-COOH$ | Acetic acid |
| Ester | $-COOR$ | Ethyl acetate |
| Amide | $-CONHR$ | Peptide bond! |
| Amine | $-NH_2$ | Methylamine |
| Ether | $-O-$ | Diethyl ether |

### Stereochemistry

- **Chirality**: 4 different groups on a carbon → chiral center
- **Enantiomers**: Non-superimposable mirror images (same physical properties except optical rotation)
- **Diastereomers**: Stereoisomers that are NOT mirror images (different physical properties)
- **Meso compounds**: Have chiral centers but an internal plane of symmetry → optically inactive

### R/S Assignment (Cahn-Ingold-Prelog)

1. Assign priority by atomic number (highest = 1)
2. Orient lowest priority group away from you
3. 1→2→3 clockwise = R; counterclockwise = S

### Stereochemical Relationships You Must Distinguish

- **Constitutional isomers**: same formula, different connectivity
- **Stereoisomers**: same connectivity, different 3D arrangement
- **Conformational isomers**: interconvert by bond rotation (usually not isolated)

On the MCAT, many questions hide stereochemistry inside a passage about receptor binding where only one stereoisomer is biologically active.`
    },
    {
      id: 'oc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Functional Groups & Stereochem** 🎯`,
      exercise: {
        questions: [
          {
            question: `A molecule with 2 chiral centers can have a maximum of how many stereoisomers?`,
            options: [`4 (using $2^n$ rule)`, `2`, `3`, `8`],
            correctAnswer: 0,
            explanation: `Maximum stereoisomers = $2^n$ where $n$ = number of chiral centers. $2^2 = 4$. May be fewer if meso compounds exist.`
          },
          {
            question: `The peptide bond is an example of which functional group?`,
            options: [`Amide`, `Amine`, `Ester`, `Carboxylic acid`],
            correctAnswer: 0,
            explanation: `The peptide bond ($-CO-NH-$) is an amide bond formed between the carboxyl group of one amino acid and the amino group of another, with loss of water.`
          },
          {
            question: `Two molecules differ at one chiral center but are not mirror images. They are:`,
            options: [`Enantiomers`, `Diastereomers`, `Constitutional isomers`, `Conformers`],
            correctAnswer: 1,
            explanation: `Diastereomers are stereoisomers that are not mirror images and usually have different physical/chemical properties.`
          },
          {
            question: `A molecule is achiral despite having two stereocenters because it has an internal plane of symmetry. This is a:`,
            options: [`Racemic mixture`, `Meso compound`, `Constitutional isomer`, `Geometric isomer`],
            correctAnswer: 1,
            explanation: `A meso compound has stereocenters but is overall achiral due to an internal symmetry plane.`
          }
        ]
      }
    },
    {
      id: 'oc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know ALL functional groups instantly — they appear in every MCAT passage
- $2^n$ rule for maximum stereoisomers
- Enantiomers: mirror images, same properties (except rotation). Diastereomers: different properties.
- Amide = peptide bond — this connects to biochemistry
- Always classify relationship first: constitutional vs stereoisomer vs conformer.`
    },
    {
      id: 'oc1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Functional Groups & Stereochemistry

<details>
<summary><b>Example 1: Assign R/S configuration to a chiral center</b></summary>

**Question:** Assign R or S to this chiral carbon:
<pre>
     4
    H | 1-C-2
      | 3
</pre>
Where: 1=Cl, 2=CH₃, 3=OH, 4=H

**Solution:**
1. Assign atomic numbers: Cl (17) > OH (8) > CH₃ (6) > H (1)
   - Priority 1 = Cl
   - Priority 2 = OH
   - Priority 3 = CH₃
   - Priority 4 = H

2. Orient H (priority 4) away from viewer ✓ (already shown)

3. Trace 1→2→3:
   - 1 (Cl) → 2 (OH) → 3 (CH₃)
   - This traces **counterclockwise** = **S-configuration**

**MCAT Strategy:** Draw/mentally rotate to get H in back. Then trace 1→2→3 path. Clockwise=R, counterclockwise=S. Practice this 10× before test day.
</details>

<details>
<summary><b>Example 2: Count stereoisomers using the 2^n rule</b></summary>

**Question:** How many stereoisomers exist for 2,3,4-trihydroxybutanal?
<pre>
CHO
|
CHOH  ← chiral center 1
|
CHOH  ← chiral center 2
|
CH₂OH ← NOT chiral (two H atoms)
</pre>

**Solution:**
1. Identify chiral centers: C2 and C3 have 4 different groups each → 2 chiral centers
2. Maximum stereoisomers = $2^n = 2^2 = 4$
3. These are: 2R,3R / 2R,3S / 2S,3R / 2S,3S

**MCAT Strategy:** $2^n$ rule doesn't account for meso compounds (which reduce the number). For this molecule, check if any stereoisomer has an internal plane of symmetry. (It doesn't, so answer = 4.)
</details>

<details>
<summary><b>Example 3: Distinguish stereoisomer relationships</b></summary>

**Question:** Molecules A and B both have formula C₄H₈Cl₂. A has both Cl atoms on C1 (geminal), and B has Cl atoms on C1 and C2. What is their relationship?

**Solution:**
1. Connectivity differs: A = 1,1-dichlorobutane; B = 1,2-dichlorobutane
2. Different connectivity means **constitutional isomers** (not stereoisomers)
3. They are NOT related by stereochemistry alone

**MCAT Strategy:** If the atoms are in different positions (different connectivity), don't even look at stereochemistry—they're constitutional isomers.

**If they had same connectivity, different 3D arrangement?** Then determine stereoisomer relationship: enantiomers (mirror images) or diastereomers (not mirror images).
</details>

<details>
<summary><b>Example 4: Identify a meso compound</b></summary>

**Question:** Is this molecule chiral?
<pre>
       H
      |
 Br-C-H
     |
 CH₃-C-CH₃
      |
      Br
</pre>

(Assuming this is drawn with internal plane symmetry)

**Solution:**
1. It has 2 chiral centers (both carbons have 4 different groups)
2. BUT if you draw it in 3D, the molecule has an **internal plane of symmetry**
3. The left half is the mirror image of the right half
4. Result: **Chiral centers exist, but molecule is achiral overall (meso compound)**
5. The molecule does NOT rotate plane-polarized light

**MCAT Strategy:** Meso compounds are rare on the MCAT, but they're a "gotcha." Always ask: "Does this have a plane of symmetry?" If yes, it's achiral despite chiral centers.
</details>`
    }
  ]
};
