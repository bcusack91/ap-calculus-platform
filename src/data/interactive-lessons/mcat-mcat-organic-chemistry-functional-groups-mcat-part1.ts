export const mcatOchemFunctionalGroupsPart1Data = {
  topicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  sections: [
    {
      id: 'fgrp1-intro',
      type: 'text' as const,
      content: `# Functional Groups for the MCAT

**Part 1 of 4 — Recognition & Nomenclature**

Functional groups are the vocabulary of every organic and biochemistry passage. The MCAT expects instant recognition of each group in skeletal structures, plus enough IUPAC to decode names in question stems.

### The Core Inventory

| Group | Structure | Suffix | Prefix (when outranked) |
|-------|-----------|--------|--------------------------|
| Carboxylic acid | -COOH | -oic acid | carboxy- |
| Anhydride | -CO-O-CO- | -oic anhydride | — |
| Ester | -COOR | -oate | alkoxycarbonyl- |
| Acyl halide | -COX | -oyl halide | halocarbonyl- |
| Amide | -CONR2 | -amide | carbamoyl- |
| Nitrile | $-C{\\equiv}N$ | -nitrile | cyano- |
| Aldehyde | -CHO | -al | oxo- |
| Ketone | R-CO-R | -one | oxo- |
| Alcohol | -OH | -ol | hydroxy- |
| Amine | $-NR_2$ | -amine | amino- |
| Ether | R-O-R | (none) | alkoxy- |
| Alkyl halide | R-X | (none) | halo- (chloro-, bromo-) |
| Alkene / alkyne | C=C / $C{\\equiv}C$ | -ene / -yne | — |

### Priority Order (who gets the suffix)

$$\\text{acid} > \\text{anhydride} > \\text{ester} > \\text{acyl halide} > \\text{amide} > \\text{nitrile} > \\text{aldehyde} > \\text{ketone} > \\text{alcohol} > \\text{amine}$$

Ethers and alkyl halides never take a suffix; they are always prefixes (alkoxy-, halo-).

The highest-priority group takes the suffix AND the lowest possible locant; everything else appears as a prefix. Example: 4-hydroxy-2-butanone (ketone outranks alcohol); 3-oxobutanoic acid (acid outranks ketone, which becomes "oxo").

### Look-Alikes the MCAT Loves to Confuse

- **Ester vs ether**: an ester has a C=O next to the O (-CO-O-); an ether is just C-O-C
- **Amide vs amine**: an amide's N touches a C=O; an amine's does not — completely different basicity (Part 3 of this lesson)
- **Aldehyde vs ketone**: the -CHO hydrogen; terminal C=O carbon = aldehyde
- **Hemiacetal vs acetal**: OH + OR on one carbon vs OR + OR; both flag sugar chemistry
- **Phenol vs alcohol**: OH directly on an aromatic ring vs on sp3 carbon — a million-fold acidity gap
- **Carboxylic acid vs ester**: the acid's O-H; deprotonatable, H-bond donor
- **Lactone vs lactam**: a cyclic ester vs a cyclic amide; penicillin's strained four-membered beta-lactam opens unusually easily, which is how it acylates bacterial enzymes

### Amine and Alcohol Classification

Alcohols/alkyl halides classify by the **carbon** bearing the group (1°/2°/3° = carbons attached to that carbon). Amines classify by substituents **on nitrogen**: $RNH_2$ primary, $R_2NH$ secondary, $R_3N$ tertiary, $R_4N^+$ quaternary (permanently charged, no lone pair). So tert-butylamine is a PRIMARY amine on a tertiary carbon — a stock trap.

### Degrees of Unsaturation

$$DoU = \\frac{2C + 2 + N - H - X}{2}$$

Oxygen and sulfur are ignored. Each ring or pi bond counts once; a benzene ring = 4; a C=O = 1; a nitrile = 2. Compute DoU FIRST when matching a formula to candidate structures.

**IR anchors** (used in the worked examples): alcohol O-H, broad ~3300; carboxylic acid O-H, very broad 2500-3300; C=O, sharp ~1700-1740 (esters ~1740); C-O, 1000-1300.`
    },
    {
      id: 'fgrp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Recognition & Naming

**Problem 1.** Identify every functional group in the dipeptide seryl-cysteine (Ser-Cys).

- **(a)** Which groups make up the backbone?
- **(b)** What group is on serine's side chain?
- **(c)** What group is on cysteine's side chain, and how does it differ from an alcohol?
- **(d)** Which nitrogen is basic, and which is not?

**(a) Backbone.** One free alpha-**amine** (N-terminus), one **amide** (the peptide bond) and one free **carboxylic acid** (C-terminus).

**(b) Serine.** A primary **alcohol** (-CH2OH).

**(c) Cysteine.** A **thiol** (-SH), the sulfur analog of an alcohol: more acidic (pKa ~8) and a superior soft nucleophile.

**(d) The nitrogens.** The N-terminal amine is basic; the peptide N is an amide nitrogen, non-basic and non-nucleophilic. Sorting nitrogens into amide (backbone, inert) vs amine (N-terminus, Lys side chain, basic) answers most "which site reacts or protonates" items.

**Problem 2.** A compound has the formula $C_4H_8O$, and its IR spectrum shows no carbonyl band.

- **(a)** How many degrees of unsaturation does it have?
- **(b)** With no C=O, where can that degree be?
- **(c)** Which structural classes remain?
- **(d)** How would IR tell the alcohols from the ethers?

**(a) DoU.** $DoU = (8 + 2 - 8)/2 = 1$: one ring OR one pi bond.

**(b) Locating it.** There is no C=O, so the degree must be a C=C or a ring.

**(c) Candidates.** Unsaturated alcohols (e.g., 3-buten-1-ol), enol ethers, cyclic ethers (THF) and cyclobutanol.

**(d) IR.** Alcohols show a broad O-H band near 3350; ethers have no O-H, only C-O at 1000-1300. DoU plus one spectroscopic fact eliminates most of the answer grid before any detailed analysis.

**Problem 3.** Aspirin's IUPAC name is 2-acetoxybenzoic acid. Decode its functional groups from the name alone.

- **(a)** What does the suffix "-benzoic acid" tell you?
- **(b)** What group does the prefix "2-acetoxy-" add, and why is it only a prefix?
- **(c)** Which group hydrolyzes, and which one ionizes at physiological pH?

**(a) The suffix.** "-benzoic acid" is a carboxylic acid on a benzene ring: the principal group, at C1.

**(b) The prefix.** "2-acetoxy-" is an acetyl ester (-O-CO-CH3) on the adjacent ring carbon. It is named as a prefix because the acid outranks it. Groups: aromatic ring, carboxylic acid, ester.

**(c) Its chemistry.** The ester is the reactive group: water slowly hydrolyzes it (old aspirin smells of acetic acid) and a COX serine attacks it (acetylation). The acid is deprotonated at physiological pH. Decode names right to left: suffix = principal group, prefixes = everything else.

**Problem 4.** The formula $C_3H_6O_2$ fits, among others, a carboxylic acid, an ester, a hydroxy ketone or a hydroxy aldehyde.

- **(a)** What is one example of each family?
- **(b)** How does IR tell the families apart?
- **(c)** Which chemical tests separate them?

**(a) Examples.** Acid: propanoic acid. Ester: methyl acetate ($CH_3COOCH_3$). Hydroxy carbonyl: hydroxyacetone (1-hydroxypropan-2-one) or 3-hydroxypropanal.

**(b) IR.** The acid shows the 2500-3300 O-H smear; the ester shows 1740 plus a strong C-O and no O-H; the hydroxy carbonyls show BOTH a broad 3400 O-H and a C=O.

**(c) Chemical tests.** Only the acid liberates $CO_2$ from bicarbonate. Tollens is positive for the aldehyde and for hydroxyacetone, an alpha-hydroxy ketone that tautomerizes to an aldehyde (as fructose does). The acid is negative, and methyl acetate stays negative (a formate such as ethyl formate would not).`
    },
    {
      id: 'fgrp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Group Recognition & Naming** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which functional group takes the suffix in a molecule containing a ketone, an alcohol, and a carboxylic acid?`,
            options: [`The ketone (-one)`, `The carboxylic acid (-oic acid)`, `The alcohol (-ol)`, `Whichever group has the lowest locant`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The priority order puts the carboxylic acid on top: it takes the suffix and C1. The ketone appears as "oxo-" and the alcohol as "hydroxy-". Priority determines the suffix; locants are then chosen to favor that principal group — not the other way around.`
          },
          {
            question: `Tert-butylamine, $(CH_3)_3C{-}NH_2$, is classified as:`,
            options: [`A primary amine, since nitrogen bears just one carbon`, `A tertiary amine, since the attached carbon is tertiary`, `A secondary amine, since nitrogen carries two hydrogens`, `A quaternary amine, since nitrogen has four electron groups`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Amine classification counts R groups ON NITROGEN: one here, so primary — even though that R group is a tertiary carbon. Alcohols and halides classify by the carbon instead. The MCAT plants this asymmetry deliberately. Hydrogens on nitrogen are not what is counted, and a lone pair is not a substituent — a quaternary ammonium ion needs four carbon groups on N.`
          },
          {
            question: `Which pair correctly distinguishes an ester from an ether?`,
            options: [`Ester: R-O-R; ether: R-CO-O-R`, `Ester: R-CO-NH-R; ether: R-O-R`, `Ester: R-CO-O-R; ether: R-O-R`, `Ester: R-CO-OH; ether: R-O-R`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The ester linkage is -C(=O)-O-C: one of the oxygen's neighbors is a carbonyl carbon and the other is a carbon. An ether's oxygen sits between two ordinary carbons. Assigning R-O-R to the ester swaps the two groups; R-CO-NH-R is an amide and R-CO-OH is a carboxylic acid. This single C=O changes reactivity (hydrolyzable vs inert), IR (1740 band), and NMR shifts.`
          },
          {
            question: `The degrees of unsaturation for $C_7H_7NO_2$ is:`,
            options: [`3`, `4`, `6`, `5`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$DoU = (2 \\times 7 + 2 + 1 - 7)/2 = (14 + 2 + 1 - 7)/2 = 10/2 = 5$. Nitrogen ADDS one to the numerator; oxygen is ignored. Subtracting N instead of adding it gives 4, and dropping the +2 gives 4 as well. Five degrees fits, for example, nitrotoluene or an aminobenzoic acid: a benzene ring (4) plus one more pi bond.`
          },
          {
            question: `A carbon bearing both an -OH and an -OR group, found at C1 of ring-form glucose, marks which functional group?`,
            options: [`A hemiacetal`, `An acetal`, `A hydrate (gem-diol)`, `An epoxide`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `OH + OR on the same carbon = hemiacetal — the signature of a sugar's anomeric carbon in its free (reducing) form. Replacing that OH with a second OR (as in a glycosidic bond) upgrades it to a full acetal, which has no OH on that carbon and is no longer reducing. A hydrate (gem-diol) carries two OH groups on one carbon and no OR, and an epoxide is a three-membered cyclic ether with no OH at all.`
          }
        ]
      }
    },
    {
      id: 'fgrp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Priority picks the suffix.** Acid > anhydride > ester > acyl halide > amide > nitrile > aldehyde > ketone > alcohol > amine.
- **Look-alikes differ by one atom.** A C=O beside the O makes an ester, beside the N an amide; OH + OR on one carbon is a hemiacetal.
- **Amines are classed on nitrogen.** Alcohols count carbons on the carbinol carbon; amines count R groups on N; $R_4N^+$ is always charged.
- **Compute DoU first.** $DoU = (2C + 2 + N - H - X)/2$; ignore O and S; a ring or pi bond is 1, a benzene ring 4.

**Common traps**

- **Tert-butylamine as tertiary.** Its nitrogen carries one R group, so it is a primary amine on a tertiary carbon.
- **Locants before priority.** The top-priority group claims the suffix first; locants are then chosen to favor that group.
- **Ester read as ether.** R-CO-O-R is an ester; an ether is R-O-R, with no carbonyl beside the oxygen.
- **Mishandling N and O in DoU.** Nitrogen adds one to the numerator; oxygen and sulfur are left out entirely.`
    }
  ]
};
