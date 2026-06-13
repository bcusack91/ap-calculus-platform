export const oChemMolRepPart1Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec1-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Condensed & Skeletal Structures

**Part 1 of 7**

Organic chemists draw the same molecule many different ways depending on how much detail they need. Mastering these representations is the foundational literacy of the entire course: every mechanism, every reaction, and every spectroscopy problem assumes you can fluently translate between them. The three you must read and draw automatically are:

- **Lewis (full structural) formulas** — show *every* atom and *every* bond, including all C$\\text{–}$H bonds and all lone pairs.
- **Condensed formulas** — collapse the C$\\text{–}$H bonds into subscripts and write the carbon chain left to right, e.g. ethanol as $\\text{CH}_3\\text{CH}_2\\text{OH}$.
- **Skeletal (line-angle, or bond-line) structures** — the working shorthand. Carbons and their hydrogens vanish into the geometry of the lines.

The guiding principle of every condensed and skeletal drawing is **carbon's tetravalence**: a neutral carbon forms exactly **four** bonds. Because that number is fixed, we can *omit* hydrogens and *infer* them later — the missing bonds must be C$\\text{–}$H.
      `
    },
    {
      id: 'molec1-skeletal-rules',
      type: 'text' as const,
      content: `
### How to Read a Skeletal Structure

A skeletal structure is a zig-zag of line segments. Four conventions let you reconstruct the full molecule:

1. **Every vertex and every free line end is a carbon atom.** They are never drawn as the letter "C".
2. **Each line segment is one bond** between the atoms at its ends. A double bond is two parallel lines; a triple bond is three.
3. **Hydrogens on carbon are implied.** Add enough H's to bring each carbon up to four total bonds. A vertex with two lines to other carbons carries 2 H's ($\\text{CH}_2$); a chain-terminating carbon with one line carries 3 H's ($\\text{CH}_3$).
4. **Heteroatoms (O, N, S, halogens) are always written explicitly**, and the hydrogens *bonded to those heteroatoms* are written too (the O$\\text{–}$H of an alcohol, the N$\\text{–}$H of an amine). Only C$\\text{–}$H bonds are hidden.

> **Worked example — count the hydrogens.** Consider the skeletal drawing of 2-methylbutane: a four-carbon zig-zag with one extra line (a methyl branch) coming off the second carbon. Label the carbons:
> - C1 (chain end): 1 bond drawn $\\rightarrow$ +3 H $\\rightarrow$ $\\text{CH}_3$
> - C2 (branch point): 3 bonds drawn (to C1, C3, and the branch) $\\rightarrow$ +1 H $\\rightarrow$ $\\text{CH}$
> - C3: 2 bonds drawn $\\rightarrow$ +2 H $\\rightarrow$ $\\text{CH}_2$
> - C4 (chain end): 1 bond drawn $\\rightarrow$ +3 H $\\rightarrow$ $\\text{CH}_3$
> - branch C: 1 bond drawn $\\rightarrow$ +3 H $\\rightarrow$ $\\text{CH}_3$
>
> Total carbons = 5, total H = $3+1+2+3+3 = 12$. The molecular formula is $\\text{C}_5\\text{H}_{12}$ — exactly what we expect for a saturated, acyclic alkane ($\\text{C}_n\\text{H}_{2n+2}$ with $n=5$).
      `
    },
    {
      id: 'molec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading Vertices
      `,
      exercise: {
        questions: [
          {
            question: 'In a skeletal (line-angle) structure, what does each vertex and each free end of a line represent?',
            options: [
              'A hydrogen atom',
              'A carbon atom, with its hydrogens implied',
              'A lone pair of electrons',
              'A heteroatom such as oxygen or nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'Vertices and line ends are carbons; their C–H hydrogens are inferred from carbon\'s tetravalence. A common trap is to read a vertex as an oxygen or as a hydrogen — heteroatoms are always written explicitly, and hydrogens on carbon are never shown.'
          },
          {
            question: 'A particular carbon in a skeletal structure has exactly two line segments drawn to it (and no heteroatom and no multiple bond). How many hydrogens are implied on that carbon?',
            options: [
              '0',
              '1',
              '2',
              '3'
            ],
            correctAnswer: 2,
            explanation: 'Carbon must reach four bonds. With two bonds already drawn to neighbors, 4 − 2 = 2 C–H bonds are implied (a CH2 group). The trap answer 3 corresponds to a chain-terminating carbon, which has only one bond drawn.'
          },
          {
            question: 'Why are the O–H hydrogen of an alcohol and the N–H hydrogens of an amine written explicitly, while the hydrogens on carbon are left out?',
            options: [
              'Heteroatoms cannot form hidden bonds, so only their hydrogens count',
              'It is an arbitrary stylistic choice with no chemical reasoning',
              'Hydrogens on heteroatoms are shown because heteroatoms (O, N, etc.) are drawn explicitly, so their attached H must be specified; only C–H bonds are inferred from carbon valence',
              'Oxygen and nitrogen always carry exactly one hydrogen'
            ],
            correctAnswer: 2,
            explanation: 'The convention hides only C–H bonds, because carbon\'s fixed valence of 4 lets us reconstruct them. Once a heteroatom is drawn, its hydrogens are not implied by any such rule, so they must be written. Answer (d) is false — nitrogen and oxygen carry variable numbers of H.'
          }
        ]
      }
    },
    {
      id: 'molec1-condensed',
      type: 'text' as const,
      content: `
### Condensed Formulas and Converting Between Representations

A **condensed formula** lists atoms in connection order and uses subscripts and parentheses instead of drawn bonds. Reading them well is a translation skill:

- $\\text{CH}_3\\text{CH}_2\\text{CH}_3$ is propane — three carbons in a row.
- Parentheses gather repeated or branching groups: isobutane is $\\text{(CH}_3\\text{)}_3\\text{CH}$, a central CH bearing three methyls; pentane can be condensed all the way to $\\text{CH}_3\\text{(CH}_2\\text{)}_3\\text{CH}_3$.
- A carbonyl is written $\\text{CHO}$ (aldehyde) or $\\text{C=O}$ in context, and a carboxylic acid as $\\text{COOH}$ or $\\text{CO}_2\\text{H}$.

> **Worked conversion — condensed to skeletal.** Take $\\text{(CH}_3\\text{)}_2\\text{CHCH}_2\\text{OH}$ (2-methyl-1-propanol, isobutanol).
> 1. Identify the carbon skeleton: a central CH carries two $\\text{CH}_3$ groups and one $\\text{CH}_2\\text{OH}$. That is a branched four-carbon framework.
> 2. Draw the longest chain as a zig-zag of 3 carbons (the $\\text{CH}_2$, the central CH, and one methyl), then branch the second methyl off the central carbon.
> 3. Write the $\\text{OH}$ explicitly on the terminal $\\text{CH}_2$. Do **not** draw the C–H bonds.
>
> The reverse direction (skeletal $\\rightarrow$ condensed) is just the hydrogen-counting procedure from the previous section, written out left to right.

**Why bother with skeletal at all?** For a molecule like cholesterol (27 carbons), a full Lewis structure is an unreadable thicket of letters; the skeletal drawing shows the ring fusion and the one $\\text{OH}$ at a glance. Representations are chosen to make the *chemically relevant* features pop out.
      `
    },
    {
      id: 'molec1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Translating Formulas
      `,
      exercise: {
        questions: [
          {
            question: 'The condensed formula (CH3)3CH represents isobutane. How many carbon atoms and how many hydrogen atoms does it contain?',
            options: [
              '3 carbons and 9 hydrogens',
              '4 carbons and 10 hydrogens',
              '4 carbons and 12 hydrogens',
              '3 carbons and 10 hydrogens'
            ],
            correctAnswer: 1,
            explanation: 'Three CH3 groups give 3 C and 9 H; the central CH adds 1 C and 1 H. Total: 4 C and 10 H, formula C4H10. The trap answer 4 C / 12 H forgets that the central carbon is a CH, not a CH2, because it already bonds to three methyls.'
          },
          {
            question: 'A skeletal structure shows a five-carbon zig-zag (no branches, no rings, no multiple bonds, no heteroatoms). What is its condensed formula?',
            options: [
              'CH3CH2CH2CH2CH3',
              'CH3CH2CH2CH3',
              '(CH3)2CHCH2CH3',
              'CH3(CH2)4CH3'
            ],
            correctAnswer: 0,
            explanation: 'A straight five-carbon chain is pentane: two terminal CH3 groups and three internal CH2 groups, written CH3CH2CH2CH2CH3. Option (b) is butane (4 C); (c) is a branched isomer; (d) is hexane (6 C). Count the vertices and ends carefully.'
          },
          {
            question: 'Which statement about the relationship among Lewis, condensed, and skeletal structures of one molecule is correct?',
            options: [
              'They depict different molecules with the same formula',
              'They are interconvertible depictions of the same molecule at different levels of detail',
              'Only the Lewis structure encodes the connectivity; the others lose it',
              'Skeletal structures can only represent rings, not chains'
            ],
            correctAnswer: 1,
            explanation: 'All three are the same compound drawn with more or less explicit detail; connectivity is preserved in each. Option (a) describes isomers, a different relationship. The skeletal form encodes connectivity fully (that is the whole point) and handles chains and rings alike.'
          }
        ]
      }
    },
    {
      id: 'molec1-wedge-preview',
      type: 'text' as const,
      content: `
### A Preview: The Third Dimension

Skeletal structures are usually drawn flat, but molecules are three-dimensional. To show geometry on paper, chemists add two special bond symbols, which later parts develop fully:

- A **solid wedge** ($\\blacktriangleright$) means the bond points *toward* the viewer, out of the page.
- A **dashed (hashed) wedge** means the bond points *away*, behind the page.
- Plain lines lie roughly in the plane of the paper.

For a tetrahedral ($sp^3$) carbon, a common drawing shows two plain bonds in the plane, one wedge forward, and one dash back. This is the language of stereochemistry — being able to read it from a skeletal drawing is what makes representations more than decoration.

> **Takeaway:** Lewis, condensed, and skeletal structures are three dialects for the same information. The skill that unlocks the course is converting among them at sight — counting implied hydrogens, expanding condensed groups, and recognizing that the lines you draw are a map of real bonds in real space.
      `
    },
    {
      id: 'molec1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'In a skeletal structure, a solid wedge bond indicates that:',
            options: [
              'The bond is a double bond',
              'The bond points toward the viewer, out of the plane of the page',
              'The bond points away from the viewer, behind the page',
              'The bond is the longest chain in the molecule'
            ],
            correctAnswer: 1,
            explanation: 'A solid wedge projects out of the page toward the viewer; a dashed wedge projects behind it. Wedges convey 3D geometry, not bond order — a double bond is shown with a second parallel line, which is the trap in option (a).'
          },
          {
            question: 'You are told a molecule\'s skeletal drawing has 6 vertices/ends, no rings, no multiple bonds, and a single OH written on a terminal carbon. Before counting, what molecular formula family should you expect for the carbon-hydrogen part?',
            options: [
              'It must be C6H6, like benzene',
              'A saturated six-carbon framework, so roughly CnH(2n+2) adjusted for the OH — about C6H14O',
              'C6H12, because every alcohol removes two hydrogens',
              'The formula cannot be estimated without the exact drawing'
            ],
            correctAnswer: 1,
            explanation: 'Six carbons with no rings or multiple bonds is a saturated chain (CnH2n+2 = C6H14); replacing one terminal H with OH gives C6H14O (an –OH swaps an H for an OH, not removing two H). Option (a) C6H6 is the highly unsaturated benzene; (c) wrongly assumes alcohols remove hydrogens. A trained eye estimates the family before exact counting.'
          }
        ]
      }
    }
  ]
}
