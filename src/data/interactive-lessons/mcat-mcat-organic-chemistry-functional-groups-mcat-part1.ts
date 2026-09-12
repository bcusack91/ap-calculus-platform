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
| Ester | -COOR | -oate | alkoxycarbonyl- |
| Amide | -CONR2 | -amide | amido/carbamoyl- |
| Nitrile | $-C{\\equiv}N$ | -nitrile | cyano- |
| Aldehyde | -CHO | -al | oxo- |
| Ketone | R-CO-R | -one | oxo- |
| Alcohol | -OH | -ol | hydroxy- |
| Amine | $-NR_2$ | -amine | amino- |
| Ether | R-O-R | (none) | alkoxy- |
| Alkene / alkyne | C=C / $C{\\equiv}C$ | -ene / -yne | — |

### Priority Order (who gets the suffix)

$$\\text{acid} > \\text{ester} > \\text{amide} > \\text{nitrile} > \\text{aldehyde} > \\text{ketone} > \\text{alcohol} > \\text{amine} > \\text{ether}$$

The highest-priority group takes the suffix AND the lowest possible locant; everything else appears as a prefix. Example: 4-hydroxy-2-butanone (ketone outranks alcohol); 3-oxobutanoic acid (acid outranks ketone, which becomes "oxo").

### Look-Alikes the MCAT Loves to Confuse

- **Ester vs ether**: an ester has a C=O next to the O (-CO-O-); an ether is just C-O-C
- **Amide vs amine**: an amide's N touches a C=O; an amine's does not — completely different basicity (Part 3)
- **Aldehyde vs ketone**: the -CHO hydrogen; terminal C=O carbon = aldehyde
- **Hemiacetal vs acetal**: OH + OR on one carbon vs OR + OR; both flag sugar chemistry
- **Phenol vs alcohol**: OH directly on an aromatic ring vs on sp3 carbon — a million-fold acidity gap
- **Carboxylic acid vs ester**: the acid's O-H; deprotonatable, H-bond donor

### Amine and Alcohol Classification

Alcohols/alkyl halides classify by the **carbon** bearing the group (1°/2°/3° = carbons attached to that carbon). Amines classify by substituents **on nitrogen**: $RNH_2$ primary, $R_2NH$ secondary, $R_3N$ tertiary, $R_4N^+$ quaternary (permanently charged, no lone pair). So tert-butylamine is a PRIMARY amine on a tertiary carbon — a stock trap.

### Degrees of Unsaturation

$$DoU = \\frac{2C + 2 + N - H - X}{2}$$

Oxygen and sulfur are ignored. Each ring or pi bond counts once; a benzene ring = 4; a C=O = 1; a nitrile = 2. Compute DoU FIRST when matching a formula to candidate structures.`
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
            explanation: `The priority order puts the carboxylic acid on top: it takes the suffix and C1. The ketone appears as "oxo-" and the alcohol as "hydroxy-". Priority determines the suffix; locants are then chosen to favor that principal group — not the other way around.`
          },
          {
            question: `Tert-butylamine, $(CH_3)_3C$-$NH_2$, is classified as:`,
            options: [`A primary amine, because nitrogen bears exactly one carbon substituent`, `A tertiary amine, because the attached carbon is tertiary`, `A quaternary amine`, `A secondary amine`],
            correctAnswer: 0,
            explanation: `Amine classification counts R groups ON NITROGEN: one here, so primary — even though that R group is a tertiary carbon. Alcohols and halides classify by the carbon instead. The MCAT plants this asymmetry deliberately.`
          },
          {
            question: `Which pair correctly distinguishes an ester from an ether?`,
            options: [`Ester: C-O-C; ether: -CO-O-`, `Both contain a carbonyl; they differ in ring size`, `Ester: an oxygen flanked by a carbonyl carbon and an alkyl carbon; ether: an oxygen between two carbons with no adjacent C=O`, `Esters contain nitrogen; ethers do not`],
            correctAnswer: 2,
            explanation: `The ester linkage is -C(=O)-O-C: one of the oxygen's neighbors is a carbonyl carbon. An ether's oxygen sits between two ordinary carbons. This single C=O changes reactivity (hydrolyzable vs inert), IR (1740 band), and NMR shifts.`
          },
          {
            question: `The degrees of unsaturation for $C_7H_7NO_2$ is:`,
            options: [`3`, `4`, `6`, `5`],
            correctAnswer: 3,
            explanation: `$DoU = (2 \\times 7 + 2 + 1 - 7)/2 = (14 + 2 + 1 - 7)/2 = 10/2 = 5$. Nitrogen ADDS one to the numerator; oxygen is ignored. Five degrees fits, for example, nitrotoluene or an aminobenzoic acid: a benzene ring (4) plus one more pi bond.`
          },
          {
            question: `A carbon bearing both an -OH and an -OR group, found at C1 of ring-form glucose, marks which functional group?`,
            options: [`A hemiacetal`, `An acetal`, `A carboxylic acid`, `An epoxide`],
            correctAnswer: 0,
            explanation: `OH + OR on the same carbon = hemiacetal — the signature of a sugar's anomeric carbon in its free (reducing) form. Replacing that OH with a second OR (as in a glycosidic bond) upgrades it to a full acetal, which is no longer reducing.`
          }
        ]
      }
    },
    {
      id: 'fgrp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Suffix priority: acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > ether; losers become prefixes (oxo-, hydroxy-, amino-)
- Look-alike pairs: ester vs ether (C=O next to O), amide vs amine (N touching C=O), hemiacetal vs acetal (OH+OR vs OR+OR), phenol vs alcohol
- Amines classify by substituents on N; alcohols/halides by the carbon — tert-butylamine is a primary amine
- Quaternary ammonium: four bonds, permanent positive charge, no lone pair
- $DoU = (2C + 2 + N - H - X)/2$; ignore O/S; benzene = 4; compute it before matching structures`
    },
    {
      id: 'fgrp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Recognition & Naming

<details>
<summary><b>Example 1: Inventory a drug-like molecule</b></summary>

**Question:** Aspirin is 2-acetoxybenzoic acid. From the name alone, list its functional groups and their roles.

**Solution:**
1. "-benzoic acid" → a carboxylic acid on a benzene ring (the suffix group, C1)
2. "2-acetoxy-" → an acetyl ester (-O-CO-CH3) on the adjacent ring carbon — named as a prefix because the acid outranks it
3. Groups: aromatic ring, carboxylic acid, ester
4. Chemistry preview: the ester hydrolyzes (aspirin acetylates COX enzymes; old aspirin smells of acetic acid), and the acid is deprotonated at physiological pH

**MCAT Strategy:** Decode names right-to-left: suffix = principal group, prefixes = everything else. Passage pharmacology usually turns on the most hydrolyzable or ionizable group you find.
</details>

<details>
<summary><b>Example 2: Formula-to-structure triage</b></summary>

**Question:** A compound is $C_4H_8O$ and shows no IR carbonyl band. What structural classes remain?

**Solution:**
1. $DoU = (8 + 2 - 8)/2 = 1$ → one ring OR one pi bond
2. No C=O → the degree must be a C=C or a ring
3. Candidates: unsaturated alcohols (e.g., 3-buten-1-ol), enol ethers, cyclic ethers (THF), cyclobutanol
4. IR would separate alcohols (broad 3350) from ethers (no O-H, C-O at 1000-1300)

**MCAT Strategy:** DoU + one spectroscopic fact eliminates most of the answer grid before any detailed analysis. Practice this two-step triage until it is automatic.
</details>

<details>
<summary><b>Example 3: Functional groups in a peptide</b></summary>

**Question:** Identify every functional group in the dipeptide seryl-cysteine (Ser-Cys).

**Solution:**
1. Backbone: one free alpha-**amine** (N-terminus), one **amide** (the peptide bond), one free **carboxylic acid** (C-terminus)
2. Serine side chain: primary **alcohol** (-CH2OH)
3. Cysteine side chain: **thiol** (-SH) — the sulfur analog of an alcohol, more acidic (pKa ~8) and a superior soft nucleophile
4. Note what is NOT there: the peptide N is an amide nitrogen — non-basic, non-nucleophilic

**MCAT Strategy:** In peptide questions, sort nitrogens into amide (backbone, inert) vs amine (N-terminus, Lys side chain, basic). That single distinction answers most "which site reacts/protonates" items.
</details>

<details>
<summary><b>Example 4: Same formula, four families</b></summary>

**Question:** $C_3H_6O_2$ could be a carboxylic acid, an ester, or a hydroxy ketone/aldehyde. Name one example of each and one quick test to tell them apart.

**Solution:**
1. Acid: propanoic acid. Ester: methyl acetate ($CH_3COOCH_3$). Hydroxy carbonyl: hydroxyacetone (1-hydroxypropan-2-one) or 3-hydroxypropanal
2. IR: the acid shows the 2500-3300 O-H smear; the ester shows 1740 + strong C-O and no O-H; the hydroxy carbonyls show BOTH broad 3400 O-H and a C=O
3. Chemical test: only the acid liberates $CO_2$ from bicarbonate; only the aldehyde gives a positive Tollens

**MCAT Strategy:** Isomer families sharing a formula are separated by their O-H/C=O combinations — one glance at the IR's two diagnostic windows settles it.
</details>`
    }
  ]
};
