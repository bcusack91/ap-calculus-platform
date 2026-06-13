export const oChemMolRepPart7Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec7-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Synthesis & Review

**Part 7 of 7**

Molecular representation is the **language of organic chemistry**. Everything ahead — reaction mechanisms, stereochemistry, spectroscopy, synthesis — is written in this language, and fluency means reading and drawing structures as automatically as you read a sentence. This final part weaves the six preceding threads into one picture and stress-tests your mastery.

The arc of the suite:

- **Parts 1:** the representations themselves — Lewis, condensed, and skeletal structures, and converting fluidly among them.
- **Part 2:** functional groups, the units that set a molecule's reactivity and properties.
- **Part 3:** constitutional isomers — why connectivity, not formula, defines a compound.
- **Part 4:** degrees of unsaturation — reading rings and $\\pi$ bonds straight off a formula.
- **Part 5:** intermolecular forces — predicting physical behavior from structure.
- **Part 6:** the integrated problem-solving workflow for structure elucidation.
      `
    },
    {
      id: 'molec7-big-ideas',
      type: 'text' as const,
      content: `
### The Three Unifying Ideas

**1. Structure determines properties.** This is the throughline of the entire course. The same atoms in a different arrangement (ethanol vs. dimethyl ether) give a different functional-group family, different IMFs, and different boiling points. A skeletal drawing is therefore not a picture — it is a *prediction* of how a substance behaves.

**2. Functional groups predict reactivity patterns.** Chemists do not memorize millions of reactions; they learn how each *functional group* behaves and apply that knowledge across every molecule that contains it. Recognizing an $\\text{–OH}$, a $\\text{C=O}$, or an $\\text{–NH}_2$ instantly tells you the available chemistry.

**3. A formula constrains, but only a structure specifies.** The molecular formula gives the atom inventory and (via DoU) the unsaturation budget, but a single formula can hide dozens or thousands of constitutional isomers. Only a structural representation names one real compound.

> **Synthesis check.** Consider $\\text{C}_2\\text{H}_4\\text{O}_2$. Its DoU is $\\frac{2(2) + 2 - 4}{2} = 1$, so one ring or one $\\pi$ bond. Two very different isomers fit: **acetic acid** ($\\text{CH}_3\\text{COOH}$, a carboxylic acid that hydrogen bonds strongly, bp $118\\,°\\text{C}$) and **methyl formate** ($\\text{HCOOCH}_3$, an ester with no O$\\text{–}$H, bp $32\\,°\\text{C}$). One formula, one degree of unsaturation, two compounds with wildly different properties — every theme of the suite in a single example.
      `
    },
    {
      id: 'molec7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Comprehensive Review — Part A
      `,
      exercise: {
        questions: [
          {
            question: 'A skeletal structure shows a six-membered carbon ring with alternating double bonds and one –OH attached to the ring. Reading the structure, this molecule is best described as:',
            options: [
              'A saturated cyclohexane with no functional groups',
              'An aromatic ring (phenol-type) bearing a hydroxyl group',
              'An open-chain alkane',
              'An ether'
            ],
            correctAnswer: 1,
            explanation: 'A six-membered ring with alternating double bonds is aromatic (benzene-derived), and an –OH on that ring makes it a phenol. It is neither saturated (the double bonds make it unsaturated), nor acyclic, nor an ether (an –OH is an alcohol/phenol group, not C–O–C).'
          },
          {
            question: 'Why can organic chemists predict the reactivity of millions of compounds without memorizing each one individually?',
            options: [
              'All organic compounds react identically',
              'Reactivity is governed by functional groups, so knowing how each group behaves generalizes across every molecule containing it',
              'Reactivity depends only on molecular weight',
              'Compounds never react'
            ],
            correctAnswer: 1,
            explanation: 'The functional-group concept is the great organizing principle: each group has characteristic chemistry that transfers to any molecule bearing it. This is precisely why recognizing groups from a structure is so powerful. Reactivity is not uniform across all compounds, nor dictated solely by molecular weight.'
          },
          {
            question: 'For C2H4O2, the degree of unsaturation is 1, and two isomers are acetic acid (CH3COOH) and methyl formate (HCOOCH3). Acetic acid boils much higher (118 °C vs. 32 °C). The structural reason is:',
            options: [
              'Acetic acid has more atoms',
              'Acetic acid has an O–H and hydrogen bonds strongly, while the ester methyl formate has no O–H',
              'Methyl formate is ionic',
              'They are not really isomers'
            ],
            correctAnswer: 1,
            explanation: 'Both share C2H4O2 (same atoms — trap a false) and DoU 1, but only the carboxylic acid has an O–H for strong hydrogen bonding, giving the higher boiling point. The ester, lacking O–H, has weaker IMFs. This single example ties together isomerism, functional groups, DoU, and IMFs.'
          }
        ]
      }
    },
    {
      id: 'molec7-skill-review',
      type: 'text' as const,
      content: `
### Reviewing the Core Skills

Before the final assessment, walk through the mechanical skills one more time on a single molecule: **propanoic acid**, $\\text{CH}_3\\text{CH}_2\\text{COOH}$.

- **Condensed $\\rightarrow$ skeletal:** draw a two-carbon zig-zag ending in a carbon double-bonded to one O and single-bonded to an O$\\text{–}$H. Hydrogens on carbon are implied; the O$\\text{–}$H is explicit.
- **Molecular formula:** carbons = 3; H = $3 + 2 + 0 + 1 = 6$ (the carbonyl carbon bears no H; the acid O bears 1 H); O = 2. So $\\text{C}_3\\text{H}_6\\text{O}_2$.
- **Degree of unsaturation:** $\\frac{2(3) + 2 - 6}{2} = 1$ — one $\\pi$ bond, namely the carbonyl $\\text{C=O}$. No ring. Consistent.
- **Functional group:** $\\text{–COOH}$, a carboxylic acid (carbonyl + hydroxyl on one carbon).
- **Property prediction:** the $\\text{–COOH}$ hydrogen bonds and is acidic, so propanoic acid is water-soluble and weakly acidic, with a relatively high boiling point for its size.

Notice how a single structure simultaneously exercises drawing, formula determination, DoU, functional-group recognition, and property prediction. That integration *is* the competency this suite builds.

> **Common traps to avoid, gathered in one place:**
> - Reading a vertex as anything but carbon, or forgetting that only C$\\text{–}$H hydrogens are hidden.
> - Counting carbons attached to oxygen (instead of to the functional carbon) when assigning 1°/2°/3°.
> - Calling a mirror image or rotated drawing a "new isomer."
> - Including oxygen in the DoU numerator, or forgetting that nitrogen *adds* and halogens *subtract*.
> - Assuming any oxygen-containing molecule hydrogen bonds — only an explicit O$\\text{–}$H, N$\\text{–}$H, or H$\\text{–}$F does.
      `
    },
    {
      id: 'molec7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Comprehensive Review — Part B
      `,
      exercise: {
        questions: [
          {
            question: 'For propanoic acid (CH3CH2COOH), what are its molecular formula and degree of unsaturation?',
            options: [
              'C3H6O2 and DoU = 1',
              'C3H8O2 and DoU = 0',
              'C3H6O2 and DoU = 2',
              'C3H6O and DoU = 1'
            ],
            correctAnswer: 0,
            explanation: 'Carbons = 3; H = 3 (CH3) + 2 (CH2) + 0 (carbonyl C) + 1 (O–H) = 6; O = 2, giving C3H6O2. DoU = (2·3 + 2 − 6)/2 = 1, the single C=O pi bond. The other options miscount hydrogens, oxygens, or the unsaturation.'
          },
          {
            question: 'Which of these is a correctly stated trap that students should avoid in this topic?',
            options: [
              'Treating every vertex of a skeletal structure as a carbon atom',
              'Including oxygen in the degree-of-unsaturation numerator (it should be ignored, since divalent O does not change the hydrogen count)',
              'Writing heteroatoms like O and N explicitly in a structure',
              'Recognizing that a –COOH group is acidic'
            ],
            correctAnswer: 1,
            explanation: 'Oxygen must be omitted from the DoU formula; including it is the error. The other three statements describe correct practices: vertices ARE carbons, heteroatoms ARE written explicitly, and –COOH IS acidic — so those are not traps.'
          },
          {
            question: 'A compound has formula C8H10. Compute its degree of unsaturation and state the most likely structural feature.',
            options: [
              'DoU = 2; likely one triple bond and nothing else',
              'DoU = 4; likely contains a benzene (aromatic) ring',
              'DoU = 0; fully saturated and acyclic',
              'DoU = 6; likely two benzene rings'
            ],
            correctAnswer: 1,
            explanation: 'DoU = (2·8 + 2 − 10)/2 = (16 + 2 − 10)/2 = 8/2 = 4. Four degrees points to one benzene ring (e.g. ethylbenzene or the xylenes, C6H4 ring plus C2H5 or two CH3 substituents). Two benzene rings would need DoU 8, and the formula is clearly unsaturated, ruling out DoU 0.'
          },
          {
            question: 'Which statement best captures the overarching lesson of this entire suite on molecular representations?',
            options: [
              'Molecular formulas alone are sufficient to identify and predict the behavior of organic compounds',
              'Structural representations encode connectivity and functional groups, from which reactivity and physical properties can be predicted',
              'All isomers of a formula are chemically identical',
              'Three-dimensional shape is irrelevant to chemistry'
            ],
            correctAnswer: 1,
            explanation: 'The suite\'s thesis is that a structure — not a bare formula — encodes the connectivity and functional groups that determine chemistry. Formulas are insufficient (isomers prove it, so trap a and c are false), and 3D shape (wedge-dash, stereochemistry) is highly relevant (trap d false).'
          }
        ]
      }
    },
    {
      id: 'molec7-closing',
      type: 'text' as const,
      content: `
### Where This Takes You

With molecular representations mastered, you are ready for the chemistry that builds on them:

- **Mechanisms** are drawn entirely in skeletal structures with curved arrows; you must read them instantly.
- **Stereochemistry** extends the wedge-dash conventions previewed in Part 1 into a full account of three-dimensional shape and chirality.
- **Spectroscopy** (IR, NMR, mass spec) is the experimental partner of the degree-of-unsaturation reasoning from Part 4 — together they pin down unknown structures.
- **Synthesis** is the art of converting one structure into another by manipulating functional groups.

> **Final takeaway:** You can now translate among Lewis, condensed, and skeletal structures; recognize functional groups; distinguish constitutional isomers; compute degrees of unsaturation; and predict physical properties from intermolecular forces. These are not isolated tricks — they are one integrated literacy, the language in which the rest of organic chemistry is written. Read it fluently, and every later topic becomes accessible.
      `
    },
    {
      id: 'molec7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket — Suite Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Putting it all together: an unknown is C3H6O2 with one degree of unsaturation, hydrogen bonds strongly, and is acidic. The most consistent structure is:',
            options: [
              'Acetone (a ketone)',
              'Propanoic acid (CH3CH2COOH, a carboxylic acid)',
              'Propane (an alkane)',
              'Dimethyl ether (an ether)'
            ],
            correctAnswer: 1,
            explanation: 'C3H6O2 with DoU 1, strong hydrogen bonding, and acidity all point to a carboxylic acid: propanoic acid. Acetone is C3H6O (one oxygen, not acidic); propane is a nonpolar C3H8 hydrocarbon; dimethyl ether neither is acidic nor matches the formula. Each clue — formula, DoU, IMF, acidity — converges on the answer.'
          },
          {
            question: 'A classmate claims that knowing only the molecular formula of an organic compound is enough to predict all its chemistry. Using the lessons of this suite, the best rebuttal is:',
            options: [
              'They are correct; the formula is sufficient',
              'A single formula can correspond to many constitutional isomers with different functional groups, connectivities, and properties, so a structural representation is required to predict chemistry',
              'Molecular formulas are never useful',
              'Only three-dimensional shape matters, never connectivity'
            ],
            correctAnswer: 1,
            explanation: 'The central lesson is that one formula hides many isomers (e.g. C2H6O = ethanol or dimethyl ether), each with distinct functional groups and behavior, so the structure is essential. Formulas remain useful for computing DoU and atom inventory (so trap c overstates), and connectivity certainly matters (trap d false).'
          }
        ]
      }
    }
  ]
}
