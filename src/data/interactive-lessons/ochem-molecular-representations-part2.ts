export const oChemMolRepPart2Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec2-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Recognizing Functional Groups

**Part 2 of 7**

A **functional group** is a specific arrangement of atoms within a molecule that gives the molecule a characteristic set of physical and chemical properties. The carbon-hydrogen framework (the "skeleton") is relatively inert; the *functional groups grafted onto it* are where the chemistry happens. This is the single most important organizing idea in the course: chemists classify millions of compounds into a few dozen families, and the family is set by the functional group.

When you look at a skeletal structure, **reading the functional groups is a higher-priority skill than reading the carbon chain.** A pharmacologist scanning a drug structure does not first count carbons — she spots the amine, the carboxylic acid, the aromatic ring, because those predict solubility, acidity, and reactivity.
      `
    },
    {
      id: 'molec2-the-groups',
      type: 'text' as const,
      content: `
### The Core Functional Groups

The following groups recur constantly. Learn to spot each one in a skeletal drawing.

| Group | Structure | Family | Key signature in a drawing |
|-------|-----------|--------|-----------------------------|
| Hydroxyl | C$\\text{–}$OH | Alcohol | An $\\text{O}$ with an $\\text{H}$, single-bonded to carbon |
| Ether | C$\\text{–}$O$\\text{–}$C | Ether | An $\\text{O}$ bridging two carbons, no H on O |
| Carbonyl | C$\\text{=}$O | (see below) | A double bond from C to O |
| Aldehyde | $\\text{–CHO}$ | Aldehyde | Carbonyl at the *end* of a chain (C=O bearing an H) |
| Ketone | C$\\text{–}$C(=O)$\\text{–}$C | Ketone | Carbonyl flanked by two carbons (internal) |
| Carboxylic acid | $\\text{–COOH}$ | Acid | Carbonyl *and* hydroxyl on the same carbon |
| Ester | $\\text{–C(=O)O–C}$ | Ester | Carbonyl with a single-bonded O$\\text{–}$C next to it |
| Amine | C$\\text{–}$NH$_2$ | Amine | A nitrogen single-bonded to carbon(s) |
| Amide | $\\text{–C(=O)N}$ | Amide | Carbonyl bonded directly to nitrogen |
| Halide | C$\\text{–}$X | Alkyl halide | A halogen ($\\text{F, Cl, Br, I}$) on carbon |

Two structural ideas unify this list:

- **The carbonyl group ($\\text{C=O}$) is the heart of a whole branch of chemistry.** What sits *next to* the carbonyl distinguishes aldehyde, ketone, acid, ester, and amide. Misreading those neighbors is the classic beginner error.
- **Oxidation level rises** as you move alcohol $\\rightarrow$ aldehyde/ketone $\\rightarrow$ carboxylic acid: each step adds bonds to oxygen.
      `
    },
    {
      id: 'molec2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carbonyl Family
      `,
      exercise: {
        questions: [
          {
            question: 'A carbonyl carbon (C=O) is bonded on its other two positions to two carbon atoms (it is internal to the chain). Which functional group is this?',
            options: [
              'Aldehyde',
              'Ketone',
              'Carboxylic acid',
              'Ester'
            ],
            correctAnswer: 1,
            explanation: 'A carbonyl flanked by two carbons is a ketone. An aldehyde (trap a) has the carbonyl at a chain terminus, bonded to at least one H. The acid and ester have an oxygen attached to the carbonyl carbon, which is absent here.'
          },
          {
            question: 'What single structural feature distinguishes a carboxylic acid (–COOH) from an aldehyde (–CHO)?',
            options: [
              'The acid has a hydroxyl (–OH) bonded to the carbonyl carbon, while the aldehyde has a hydrogen there',
              'The acid has a triple bond to oxygen',
              'The aldehyde contains nitrogen',
              'They are identical; the names are interchangeable'
            ],
            correctAnswer: 0,
            explanation: 'Both contain a carbonyl. The acid carbonyl additionally bears an –OH on the same carbon (giving the acidic proton); the aldehyde carbonyl bears an H. Carbon never triple-bonds to oxygen in these groups (trap b), and neither contains nitrogen (trap c).'
          },
          {
            question: 'In a skeletal structure you see "–C(=O)–O–CH3" embedded in a molecule. Which functional group is this?',
            options: [
              'Ketone',
              'Carboxylic acid',
              'Ester',
              'Ether'
            ],
            correctAnswer: 2,
            explanation: 'A carbonyl bonded to an oxygen that is in turn bonded to carbon (the –O–CH3) is an ester. A ketone has no oxygen on the carbonyl carbon besides the =O; a carboxylic acid would show –O–H, not –O–C; a plain ether has no adjacent carbonyl.'
          }
        ]
      }
    },
    {
      id: 'molec2-heteroatom-groups',
      type: 'text' as const,
      content: `
### Nitrogen, Oxygen, and Halogen Groups

**Alcohols (C$\\text{–}$OH)** put a hydroxyl on a saturated carbon. They are graded by the carbon: a *primary* (1°) alcohol has the C$\\text{–}$OH carbon bonded to one other carbon, *secondary* (2°) to two, *tertiary* (3°) to three. This 1°/2°/3° classification recurs for amines and alkyl halides and controls reactivity.

**Ethers (C$\\text{–}$O$\\text{–}$C)** look like alcohols missing the H — an oxygen *bridging* two carbons. The absence of an O$\\text{–}$H means ethers cannot donate hydrogen bonds, a fact you can predict purely from the drawing.

**Amines (C$\\text{–}$N)** carry a nitrogen with one or more C$\\text{–}$N bonds. Primary $\\text{–NH}_2$, secondary $\\text{–NHR}$, tertiary $\\text{–NR}_3$. Amines are weak bases — the nitrogen lone pair grabs protons.

**Alkyl halides (C$\\text{–}$X)** bear $\\text{F}$, $\\text{Cl}$, $\\text{Br}$, or $\\text{I}$ on carbon. Because halogens are written explicitly, they are among the easiest groups to spot.

> **Worked example — reading a whole molecule.** Lactic acid is drawn as $\\text{CH}_3\\text{–CH(OH)–COOH}$. Scan left to right:
> - $\\text{CH}_3$: an inert methyl, no functional group.
> - $\\text{CH(OH)}$: a hydroxyl on a carbon bonded to two other carbons $\\rightarrow$ a **secondary alcohol**.
> - $\\text{COOH}$: a carbonyl plus hydroxyl on one carbon $\\rightarrow$ a **carboxylic acid**.
>
> So one small molecule contains two distinct functional groups. Predict its behavior: the $\\text{–COOH}$ makes it acidic, and both the $\\text{–OH}$ and $\\text{–COOH}$ allow hydrogen bonding, so it is highly water-soluble. Every one of those predictions came straight from reading the structure.
      `
    },
    {
      id: 'molec2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Heteroatom Groups
      `,
      exercise: {
        questions: [
          {
            question: 'An alcohol is drawn in which the carbon bearing the –OH is itself bonded to three other carbon atoms. How is this alcohol classified?',
            options: [
              'Primary (1°)',
              'Secondary (2°)',
              'Tertiary (3°)',
              'It is not an alcohol at all'
            ],
            correctAnswer: 2,
            explanation: 'The 1°/2°/3° label counts the carbons attached to the carbon bearing the functional group. Three attached carbons make it tertiary. The trap is to count the carbons attached to the oxygen, or to count total carbons in the molecule.'
          },
          {
            question: 'Which feature lets you predict, just from the drawing, that an ether is a much weaker participant in hydrogen bonding than an alcohol of similar size?',
            options: [
              'The ether oxygen has no O–H bond to donate as a hydrogen-bond donor',
              'The ether contains no oxygen',
              'The ether has a C=O double bond',
              'Ethers are ionic compounds'
            ],
            correctAnswer: 0,
            explanation: 'An ether oxygen bridges two carbons and has no O–H, so it cannot donate a hydrogen bond (it can still weakly accept). The alcohol\'s O–H is both donor and acceptor. The trap answers misdescribe ether structure — it does contain oxygen and has no carbonyl.'
          },
          {
            question: 'A molecule\'s skeletal structure shows a nitrogen bonded to two carbons and one hydrogen (R–NH–R). Which classification applies?',
            options: [
              'Primary amine',
              'Secondary amine',
              'Tertiary amine',
              'Amide'
            ],
            correctAnswer: 1,
            explanation: 'An amine nitrogen bonded to two carbons is secondary. Primary would be –NH2 (one carbon); tertiary would be three carbons and no N–H. An amide requires the nitrogen to be bonded to a carbonyl carbon, which is not indicated here.'
          },
          {
            question: 'Why is identifying functional groups a higher-priority skill than counting the carbon chain when first reading an unknown structure?',
            options: [
              'Carbon chains are impossible to count',
              'Functional groups determine the molecule\'s reactivity and key physical properties, which the inert chain does not',
              'Functional groups are always larger than the chain',
              'The chain length never affects any property'
            ],
            correctAnswer: 1,
            explanation: 'The functional group sets reactivity, acidity/basicity, and hydrogen-bonding ability — the features that matter most. The chain is comparatively inert. (Chain length does subtly affect properties like boiling point, so option (d) overstates; but the group is the dominant predictor.)'
          }
        ]
      }
    },
    {
      id: 'molec2-multiple-groups',
      type: 'text' as const,
      content: `
### Polyfunctional Molecules and Why It Matters

Real molecules — especially biomolecules and drugs — carry several functional groups at once. Amino acids, for instance, contain *both* a carboxylic acid and an amine (hence "amino acid"). Reading such a structure means cataloguing every group, because each contributes independently:

- **Reactivity:** each group reacts with its own characteristic reagents.
- **Acid/base behavior:** a $\\text{–COOH}$ donates a proton; an $\\text{–NH}_2$ accepts one. A molecule with both can be a zwitterion.
- **Solubility:** polar, hydrogen-bonding groups (OH, NH, COOH) pull a molecule into water; long nonpolar chains push it out.

> **Takeaway:** Functional-group recognition turns a static drawing into a prediction engine. Spot the group, recall its family, and you can forecast how the molecule dissolves, ionizes, and reacts — all before doing any calculation. Parts 3 and 4 build on this by analyzing how *connectivity* (isomerism) and *degree of unsaturation* further constrain what groups a formula can hold.
      `
    },
    {
      id: 'molec2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Glycine is drawn as H2N–CH2–COOH. Which functional groups does it contain?',
            options: [
              'An ether and a ketone',
              'An amine and a carboxylic acid',
              'An alcohol and an aldehyde',
              'An amide and an ester'
            ],
            correctAnswer: 1,
            explanation: 'H2N– is a primary amine and –COOH is a carboxylic acid, so glycine is an amino acid. The trap options pair up groups that are not present: there is no ether oxygen, no isolated C=O ketone, no alcohol, and no C(=O)–N amide linkage.'
          },
          {
            question: 'You scan a drug structure and want to predict its water solubility from the drawing alone. Which combination of observed groups most strongly predicts high water solubility?',
            options: [
              'A long chain of CH2 groups and a single aromatic ring',
              'Several hydroxyl, amine, and carboxylic-acid groups capable of hydrogen bonding',
              'Only carbon–hydrogen bonds throughout',
              'A single chlorine atom on an otherwise hydrocarbon skeleton'
            ],
            correctAnswer: 1,
            explanation: 'Polar, hydrogen-bonding groups (–OH, –NH, –COOH) are what dissolve a molecule in water. Long CH2 chains and aromatic rings are nonpolar and lower solubility; a lone halogen barely helps. Reading the groups lets you make this call directly from the structure.'
          }
        ]
      }
    }
  ]
}
