export const oChemAldehydesKetonesPart1Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh1-intro',
      type: 'text' as const,
      content: `
## Aldehydes & Ketones — The Carbonyl Group

**Part 1 of 7 — Carbonyl Structure, Nomenclature & Reactivity**

The **carbonyl group**, a carbon double-bonded to oxygen ($\\text{C=O}$), is one of the most important functional groups in organic chemistry. It is the defining feature of **aldehydes**, **ketones**, carboxylic acids, esters, amides, and acyl chlorides. In this suite we focus on the two simplest carbonyl families, the aldehydes and ketones, where the carbonyl carbon bears only carbon or hydrogen substituents (no electronegative leaving group).

- **Aldehyde:** the carbonyl carbon is bonded to at least one hydrogen. General formula $\\text{RCHO}$ (for formaldehyde, $\\text{R} = \\text{H}$, giving $\\text{HCHO}$). The carbonyl always sits at the **end** of a carbon chain.
- **Ketone:** the carbonyl carbon is bonded to two other carbons. General formula $\\text{RCOR}'$. The carbonyl is **internal**, flanked on both sides.

Both are planar at the carbonyl carbon, which is $sp^2$-hybridized with bond angles near $120^\\circ$.
      `
    },
    {
      id: 'aldeh1-bonding',
      type: 'text' as const,
      content: `
### Why the Carbonyl Carbon Is Electrophilic

The $\\text{C=O}$ bond consists of a $\\sigma$ bond and a $\\pi$ bond, just like an alkene. The crucial difference is **electronegativity**: oxygen ($3.44$ on the Pauling scale) is far more electronegative than carbon ($2.55$). The shared electrons, especially the loosely held $\\pi$ electrons, are pulled toward oxygen, leaving the carbon **electron-poor** and the oxygen **electron-rich**.

We represent this polarization with a permanent dipole and with two resonance structures: the neutral form $\\text{C=O}$ in equilibrium with the dipolar form $\\overset{+}{\\text{C}}-\\overset{-}{\\text{O}}$ (written $\\text{C=O} \\leftrightarrow \\overset{+}{\\text{C}}-\\overset{-}{\\text{O}}$).

The carbonyl carbon therefore carries a partial positive charge ($\\delta+$) and behaves as an **electrophile**, while the oxygen carries a partial negative charge ($\\delta-$) and is mildly **nucleophilic/basic**. This single fact drives nearly all carbonyl chemistry:

> **Key idea:** Nucleophiles attack the carbon; electrophiles (including $\\text{H}^+$) attach to the oxygen. The $sp^2$, planar geometry leaves the carbon open to attack from either face, perpendicular to the molecular plane.

A second consequence of the polarity is physical: aldehydes and ketones are **polar aprotic** molecules. They cannot donate hydrogen bonds (no $\\text{O}-\\text{H}$ or $\\text{N}-\\text{H}$), but the lone pairs on oxygen can **accept** them, so small aldehydes and ketones are reasonably water-soluble and boil higher than comparable alkanes, yet lower than the corresponding alcohols.
      `
    },
    {
      id: 'aldeh1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Structure & Polarity
      `,
      exercise: {
        questions: [
          {
            question: 'Which best explains why the carbonyl carbon is electrophilic?',
            options: [
              'Carbon is more electronegative than oxygen, so it accumulates negative charge',
              'Oxygen withdraws electron density through the polar C=O bond, leaving the carbon partially positive',
              'The carbonyl carbon is sp3-hybridized and sterically shielded',
              'The pi bond donates electron density onto the carbon atom'
            ],
            correctAnswer: 1,
            explanation: 'Oxygen is much more electronegative than carbon and pulls the shared (especially pi) electrons toward itself. This leaves the carbon electron-poor (delta+) and therefore electrophilic. Option 1 reverses the electronegativities; the carbonyl carbon is sp2, not sp3; and the pi electrons are withdrawn, not donated onto carbon.'
          },
          {
            question: 'A compound has the structure CH3-CO-CH2CH3. Which statement is correct?',
            options: [
              'It is an aldehyde because the carbonyl carbon bears a hydrogen',
              'It is a ketone because the carbonyl carbon is bonded to two carbons',
              'It is a carboxylic acid because it contains C=O',
              'The carbonyl carbon is sp3-hybridized'
            ],
            correctAnswer: 1,
            explanation: 'The carbonyl carbon in butan-2-one is flanked by a methyl and an ethyl group (two carbons), so it is a ketone. An aldehyde would require at least one H on the carbonyl carbon. Any carbonyl carbon is sp2, not sp3.'
          },
          {
            question: 'Why do small aldehydes and ketones boil higher than alkanes of similar mass but lower than the corresponding alcohols?',
            options: [
              'They form stronger covalent bonds than alkanes but weaker than alcohols',
              'They have dipole-dipole attractions but cannot donate hydrogen bonds the way alcohols can',
              'They are ionic, whereas alkanes and alcohols are molecular',
              'They have lower molar mass than both alkanes and alcohols'
            ],
            correctAnswer: 1,
            explanation: 'The C=O dipole gives dipole-dipole (and H-bond-accepting) attractions stronger than the London forces in alkanes, raising the boiling point. But with no O-H, aldehydes/ketones cannot donate hydrogen bonds, so they cannot match the extensive H-bonding network of alcohols. Boiling point reflects intermolecular forces, not covalent bond strength.'
          }
        ]
      }
    },
    {
      id: 'aldeh1-nomenclature',
      type: 'text' as const,
      content: `
### IUPAC Nomenclature

**Aldehydes** take the suffix **-al**. Because the carbonyl must be terminal, its carbon is **always C1** — no locant is needed for the $\\text{CHO}$ group itself.

- $\\text{CH}_3\\text{CHO}$ = ethan**al** (acetaldehyde)
- $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$ = butan**al**
- $\\text{OHC}-\\text{CH}_2-\\text{CHO}$ = propane**dial**

**Ketones** take the suffix **-one**, and the chain is numbered to give the carbonyl carbon the **lowest possible locant**.

- $\\text{CH}_3\\text{COCH}_3$ = propan**one** (acetone)
- $\\text{CH}_3\\text{COCH}_2\\text{CH}_3$ = butan-2-**one**
- $\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$ = pentan-3-**one**

When a carbonyl must be named as a substituent (e.g., when a higher-priority group like a carboxylic acid is present), use **oxo-** for the $\\text{C=O}$ and **formyl-** or **-carbaldehyde** for $\\text{CHO}$ on a ring. Priority order for choosing the principal characteristic group (highest first): carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine.

> **Worked example.** Name $\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CHO}$.
> Both an aldehyde and a ketone are present. The aldehyde outranks the ketone, so the chain is numbered from the $\\text{CHO}$ end (C1). The ketone $\\text{C=O}$ at C4 becomes an "oxo" substituent: **4-oxopentanal**.
      `
    },
    {
      id: 'aldeh1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Nomenclature
      `,
      exercise: {
        questions: [
          {
            question: 'What is the correct IUPAC name for CH3CH2CH2CHO?',
            options: [
              'butan-1-one',
              'butanal',
              'butan-2-al',
              'butanone'
            ],
            correctAnswer: 1,
            explanation: 'A four-carbon chain ending in CHO is butanal. The aldehyde carbon is necessarily C1, so no locant is written ("butan-2-al" is wrong). The -one suffix and locants apply to ketones, not aldehydes.'
          },
          {
            question: 'Which name correctly identifies CH3CH2COCH2CH3?',
            options: [
              'pentan-2-one',
              'pentan-3-one',
              'pentanal',
              'diethyl ketone is the only acceptable IUPAC name'
            ],
            correctAnswer: 1,
            explanation: 'The five-carbon chain has its carbonyl on the central carbon, giving pentan-3-one. Numbering from either end places the C=O at position 3 (the lowest possible here is 3 by symmetry). "Diethyl ketone" is a common name, not the preferred IUPAC name; pentanal would be an aldehyde.'
          },
          {
            question: 'In the molecule CH3COCH2CH2CHO, why is the chain numbered starting from the CHO carbon rather than the ketone carbon?',
            options: [
              'Aldehydes always have lower molar mass than ketones',
              'The aldehyde is the higher-priority characteristic group, so it gets the lowest locant and the suffix',
              'Ketones cannot be numbered as C1 under any circumstances',
              'The CHO group is more electronegative than the C=O of the ketone'
            ],
            correctAnswer: 1,
            explanation: 'When two carbonyl groups compete, the aldehyde outranks the ketone in IUPAC priority. The principal group (here -al) takes the suffix and the lowest locant, so numbering starts at CHO. The ketone is then expressed as an "oxo" substituent, giving 4-oxopentanal. Priority is about the rules, not molar mass or electronegativity.'
          }
        ]
      }
    },
    {
      id: 'aldeh1-reactivity',
      type: 'text' as const,
      content: `
### Why Aldehydes Are More Electrophilic Than Ketones

A recurring theme in this suite is that **aldehydes react faster than ketones** in nucleophilic addition. Two effects work together, both favoring the aldehyde:

**1. Electronic (inductive/hyperconjugative) effect.** Alkyl groups are weakly **electron-donating**. A ketone has *two* alkyl groups pushing electron density toward the carbonyl carbon, partially neutralizing its $\\delta+$ and stabilizing the ground state. An aldehyde has only *one* alkyl group (plus an H, which donates essentially nothing). The aldehyde carbon is therefore left more electron-poor and more electrophilic.

**2. Steric effect.** Nucleophilic addition converts a flat, $sp^2$ carbon into a crowded, $sp^3$ center. In a ketone, the incoming nucleophile must squeeze past **two** bulky R groups; in an aldehyde, one position is occupied only by a small hydrogen. Less steric strain in the transition state means a faster reaction and a more stable (less crowded) product.

> **Worked comparison.** Rank the rate of nucleophilic addition: formaldehyde ($\\text{H}_2\\text{C=O}$) vs. acetaldehyde ($\\text{CH}_3\\text{CHO}$) vs. acetone ($\\text{(CH}_3)_2\\text{C=O}$).
> Formaldehyde has *zero* electron-donating alkyl groups and the least steric bulk, so it is the most reactive. Acetaldehyde (one $\\text{CH}_3$) is intermediate. Acetone (two $\\text{CH}_3$) is the slowest. Order: $\\text{H}_2\\text{C=O} > \\text{CH}_3\\text{CHO} > \\text{(CH}_3)_2\\text{C=O}$.

This same logic explains why, for instance, the equilibrium amount of hydrate formed from formaldehyde is enormous, while acetone barely hydrates at all — a result we will quantify in Part 2.
      `
    },
    {
      id: 'aldeh1-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Relative Reactivity
      `,
      exercise: {
        questions: [
          {
            question: 'Why is acetone [(CH3)2C=O] less reactive toward nucleophiles than acetaldehyde (CH3CHO)?',
            options: [
              'Acetone has a stronger C=O pi bond because of conjugation',
              'Acetone has two electron-donating methyl groups and more steric bulk, both of which disfavor nucleophilic attack',
              'Acetone is aromatic, which deactivates the carbonyl',
              'Acetone cannot be protonated on oxygen, so no nucleophile can add'
            ],
            correctAnswer: 1,
            explanation: 'Two methyl groups donate electron density (reducing the carbon delta+) and crowd the carbonyl carbon (raising steric strain in the sp3 transition state). Both effects slow the reaction relative to the aldehyde, which has only one alkyl group. Acetone is not aromatic, and protonation of oxygen actually accelerates addition.'
          },
          {
            question: 'Rank these carbonyls from MOST to LEAST reactive in nucleophilic addition: formaldehyde, acetone, acetaldehyde.',
            options: [
              'acetone > acetaldehyde > formaldehyde',
              'formaldehyde > acetaldehyde > acetone',
              'acetaldehyde > formaldehyde > acetone',
              'formaldehyde > acetone > acetaldehyde'
            ],
            correctAnswer: 1,
            explanation: 'Reactivity tracks with fewer electron-donating alkyl groups and less steric bulk. Formaldehyde has zero alkyl groups (most reactive), acetaldehyde has one, and acetone has two (least reactive): formaldehyde > acetaldehyde > acetone.'
          },
          {
            question: 'A student claims "the more stable the carbonyl ground state, the more reactive it is toward nucleophiles." What is the correct relationship?',
            options: [
              'The claim is correct: ground-state stability and reactivity always increase together',
              'A more stabilized (less electrophilic) carbonyl ground state is generally LESS reactive toward nucleophiles',
              'Ground-state stability has no effect on reaction rate',
              'Only the product stability matters; the carbonyl ground state is irrelevant'
            ],
            correctAnswer: 1,
            explanation: 'Electron donation from alkyl groups stabilizes the carbonyl ground state by quenching the carbon delta+. A more stabilized, less electrophilic carbonyl sits in a deeper energy well and reacts more slowly. That is exactly why ketones (two alkyl groups) are less reactive than aldehydes. Both ground-state and transition-state energies matter, so the claim as stated is backwards.'
          }
        ]
      }
    },
    {
      id: 'aldeh1-exit',
      type: 'text' as const,
      content: `
### Part 1 Summary

- The **carbonyl group** ($\\text{C=O}$) is planar and $sp^2$; the carbon is $\\delta+$ (electrophilic) and the oxygen is $\\delta-$ (basic), thanks to oxygen's high electronegativity.
- **Aldehydes** ($\\text{RCHO}$) are terminal and take the **-al** suffix (carbonyl = C1). **Ketones** ($\\text{RCOR}'$) are internal and take the **-one** suffix with the lowest locant.
- When carbonyls compete, the **aldehyde outranks the ketone**; the ketone becomes an **oxo** substituent.
- **Aldehydes are more reactive** than ketones toward nucleophilic addition because they have **fewer electron-donating alkyl groups** (more $\\delta+$) and **less steric hindrance** at the carbon.

In Part 2 we use this electrophilic carbon as the launch point for the master reaction of the entire suite: **nucleophilic addition**, illustrated with water (hydrates) and alcohols (hemiacetals).
      `
    }
  ]
}
