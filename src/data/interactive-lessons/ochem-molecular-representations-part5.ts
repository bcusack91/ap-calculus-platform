export const oChemMolRepPart5Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec5-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — From Structure to Intermolecular Forces

**Part 5 of 7**

A structural drawing is only as valuable as the predictions you can squeeze out of it. One of the most useful is **physical behavior** — boiling point, melting point, solubility, and viscosity — all of which are governed by **intermolecular forces (IMFs)**: the attractions *between* separate molecules. This part closes the loop from Parts 1 and 2: you read the functional groups and shape off a skeletal structure, and from those you deduce the IMFs, and from the IMFs you predict the properties.

The key mental move is that IMFs are *interactions between molecules*, distinct from the covalent bonds *within* a molecule. Boiling does not break covalent bonds — it overcomes the IMFs holding molecules together in the liquid. So when a molecule has stronger IMFs, it takes more energy to separate its molecules, and the boiling point rises.
      `
    },
    {
      id: 'molec5-three-forces',
      type: 'text' as const,
      content: `
### The Three Intermolecular Forces (Weakest to Strongest)

**1. London dispersion forces (LDFs).** Present in *every* molecule, polar or not. They arise from instantaneous, fluctuating dipoles in the electron cloud. Their strength grows with the number of electrons (roughly, molecular size / surface area). For a homologous series of alkanes, boiling point climbs steadily with chain length purely because of increasing LDFs. Branching *lowers* boiling point by making a molecule more compact and reducing surface contact — exactly the n-butane vs. isobutane effect from Part 3.

**2. Dipole–dipole forces.** Present in **polar** molecules, where electronegativity differences create a permanent molecular dipole (a $\\delta^+$ end and a $\\delta^-$ end). Neighboring molecules align positive-to-negative. You can spot the *potential* for these straight from a structure: a polar bond (C$\\text{–}$O, C$\\text{=}$O, C$\\text{–}$N, C$\\text{–}$Cl) that is not cancelled by symmetry produces a net dipole.

**3. Hydrogen bonding.** The strongest of the three (a specially strong dipole–dipole interaction). It requires an H atom bonded directly to a small, highly electronegative atom — **N, O, or F** — interacting with a lone pair on another N, O, or F. The signatures to hunt for in a drawing are **O$\\text{–}$H** (alcohols, acids), **N$\\text{–}$H** (amines, amides), and **H$\\text{–}$F**. Crucially, a C$\\text{–}$H bond does **not** hydrogen bond — a constant beginner trap.

> **General rule for predicting boiling point:** hydrogen bonding $>$ dipole–dipole $>$ London dispersion, *for molecules of comparable size*. When sizes differ a lot, sheer LDF magnitude can override the others — a very large nonpolar molecule can outboil a tiny polar one.
      `
    },
    {
      id: 'molec5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Identifying Forces
      `,
      exercise: {
        questions: [
          {
            question: 'Which intermolecular force is present in ALL molecules, regardless of whether they are polar?',
            options: [
              'Hydrogen bonding',
              'Dipole–dipole forces',
              'London dispersion forces',
              'Ionic bonding'
            ],
            correctAnswer: 2,
            explanation: 'London dispersion forces arise from instantaneous dipoles in any electron cloud, so every molecule has them. Hydrogen bonding and dipole–dipole forces require specific structural features (N/O/F–H bonds or a permanent dipole). Ionic bonding is not an intermolecular force between neutral molecules.'
          },
          {
            question: 'A molecule must have a hydrogen atom bonded directly to which atoms in order to act as a hydrogen-bond donor?',
            options: [
              'Carbon, silicon, or phosphorus',
              'Nitrogen, oxygen, or fluorine',
              'Any halogen',
              'Sulfur or chlorine only'
            ],
            correctAnswer: 1,
            explanation: 'Hydrogen bonding requires H bonded to the small, highly electronegative atoms N, O, or F. A C–H bond (option a) does NOT hydrogen bond — the single most common error. Larger halogens like Cl and Br are too big and diffuse to support true hydrogen bonding.'
          },
          {
            question: 'Looking only at a skeletal structure, how can you tell a molecule is capable of hydrogen bonding with itself?',
            options: [
              'It contains a long carbon chain',
              'It shows an O–H, N–H, or H–F bond drawn explicitly',
              'It contains any oxygen atom anywhere',
              'It has at least one double bond'
            ],
            correctAnswer: 1,
            explanation: 'Hydrogen-bond donation needs an explicit O–H, N–H, or H–F in the drawing. Merely containing oxygen is not enough — an ether (C–O–C) has oxygen but no O–H, so it cannot donate a hydrogen bond. Chain length and double bonds are irrelevant to hydrogen bonding.'
          }
        ]
      }
    },
    {
      id: 'molec5-properties',
      type: 'text' as const,
      content: `
### Predicting Properties from the Structure

**Boiling and melting points.** Stronger IMFs $\\rightarrow$ higher boiling point. This is why, among isomers of $\\text{C}_2\\text{H}_6\\text{O}$, ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$, bp $78\\,°\\text{C}$) vastly outboils dimethyl ether ($\\text{CH}_3\\text{OCH}_3$, bp $-24\\,°\\text{C}$): the alcohol hydrogen bonds, the ether (no O$\\text{–}$H) only has weaker dipole–dipole and dispersion forces. Same atoms, same size — the difference is entirely the hydrogen-bonding group you can read off the structure.

**Solubility — "like dissolves like."** Polar and hydrogen-bonding molecules dissolve in water; nonpolar molecules dissolve in nonpolar solvents. From a structure you predict solubility by weighing the **polar, hydrogen-bonding portion** against the **nonpolar hydrocarbon portion**:

- Small molecules with $\\text{–OH}$, $\\text{–NH}_2$, or $\\text{–COOH}$ (methanol, glycine) are water-soluble.
- As the hydrocarbon "tail" grows, water solubility drops. 1-Butanol is moderately soluble; 1-octanol is nearly insoluble — the long nonpolar chain overwhelms the single $\\text{–OH}$.

**Viscosity** rises with the number and strength of IMFs (especially hydrogen bonds). Glycerol, with three $\\text{–OH}$ groups, is famously syrupy because each molecule hydrogen bonds to many neighbors.

> **Worked comparison.** Rank the boiling points of three $\\text{C}_4$ compounds: butane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$), butanal ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$), and 1-butanol ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{OH}$).
> - **Butane:** nonpolar $\\rightarrow$ only LDFs $\\rightarrow$ lowest bp ($\\approx -1\\,°\\text{C}$).
> - **Butanal:** polar C$\\text{=}$O $\\rightarrow$ dipole–dipole + LDFs, but no O$\\text{–}$H $\\rightarrow$ middle bp ($\\approx 75\\,°\\text{C}$).
> - **1-Butanol:** O$\\text{–}$H $\\rightarrow$ hydrogen bonding $\\rightarrow$ highest bp ($\\approx 118\\,°\\text{C}$).
>
> The ranking butane $<$ butanal $<$ 1-butanol comes *entirely* from reading the functional groups and matching them to IMF strength — no measurement required.
      `
    },
    {
      id: 'molec5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting Properties
      `,
      exercise: {
        questions: [
          {
            question: 'Ethanol (CH3CH2OH) boils at 78 °C, while dimethyl ether (CH3OCH3), its constitutional isomer, boils at −24 °C. The best explanation is:',
            options: [
              'Ethanol has more carbon atoms than dimethyl ether',
              'Ethanol can hydrogen bond (it has an O–H) while dimethyl ether cannot, so ethanol has stronger IMFs',
              'Dimethyl ether is ionic',
              'They actually boil at the same temperature'
            ],
            correctAnswer: 1,
            explanation: 'Both are C2H6O (same size, same number of carbons — so trap a is false), but only ethanol has an O–H to hydrogen bond. Stronger IMFs in ethanol mean a much higher boiling point. The structural difference (alcohol vs. ether) is read directly from the drawing.'
          },
          {
            question: 'Which compound would you predict to be MOST soluble in water, based on structure?',
            options: [
              'Octane, CH3(CH2)6CH3',
              'Methanol, CH3OH',
              'Hexane, CH3(CH2)4CH3',
              'Cyclohexane (a six-carbon ring of CH2 groups)'
            ],
            correctAnswer: 1,
            explanation: 'Methanol is a small molecule whose –OH hydrogen bonds readily with water, making it fully miscible. The other three are nonpolar hydrocarbons with only London dispersion forces and no polar groups, so they are essentially insoluble in water ("like dissolves like").'
          },
          {
            question: 'Among straight-chain alkanes, why does boiling point increase steadily from butane to pentane to hexane?',
            options: [
              'Longer chains hydrogen bond more strongly',
              'Longer chains have more electrons and surface area, increasing London dispersion forces',
              'Longer chains become ionic',
              'Boiling point actually decreases down the series'
            ],
            correctAnswer: 1,
            explanation: 'Alkanes are nonpolar and cannot hydrogen bond (trap a), so the only IMF is London dispersion, which grows with size/surface area. More carbons → stronger LDFs → higher boiling point. The trend is an increase (so trap d is false).'
          },
          {
            question: 'Two alcohols have the same molecular formula, but one is a straight chain and the other is highly branched. Which generally has the LOWER boiling point, and why?',
            options: [
              'The branched one, because its compact shape reduces surface contact and weakens London dispersion forces',
              'The straight one, because chains cannot hydrogen bond',
              'They are identical in boiling point because they have the same –OH group',
              'The branched one, because branching eliminates hydrogen bonding'
            ],
            correctAnswer: 0,
            explanation: 'Both have the same –OH and hydrogen bond similarly, but the branched isomer is more spherical, with less surface area for dispersion contact, lowering its boiling point. Branching does not eliminate hydrogen bonding (trap d) — the –OH is still present.'
          }
        ]
      }
    },
    {
      id: 'molec5-synthesis',
      type: 'text' as const,
      content: `
### Why This Closes the Loop

This part demonstrates the ultimate payoff of fluency in molecular representations. The chain of reasoning runs entirely from the drawing:

$\\text{structure} \\rightarrow \\text{functional groups} \\rightarrow \\text{intermolecular forces} \\rightarrow \\text{physical properties}$

You never measured anything; you *read* the structure, recognized the groups (Part 2), inferred which IMFs are possible, and ranked the properties. That is precisely how a chemist looks at a new compound and immediately estimates whether it will be a gas or a syrup, water-soluble or oily.

> **Takeaway:** Intermolecular forces are the link between the structures you now read fluently and the macroscopic behavior of real substances. Master the hierarchy — hydrogen bonding $>$ dipole–dipole $>$ dispersion (size-adjusted) — and a skeletal drawing becomes a forecast of boiling point, solubility, and viscosity. Part 6 puts all of these skills together in a problem-solving workshop.
      `
    },
    {
      id: 'molec5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 5 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Rank these C4 compounds from LOWEST to HIGHEST boiling point: butane, butanal (CH3CH2CH2CHO), and 1-butanol (CH3CH2CH2CH2OH).',
            options: [
              '1-butanol < butanal < butane',
              'butane < butanal < 1-butanol',
              'butanal < butane < 1-butanol',
              'They all boil at the same temperature'
            ],
            correctAnswer: 1,
            explanation: 'Butane (nonpolar, only LDFs) is lowest; butanal (polar C=O, dipole–dipole but no O–H) is intermediate; 1-butanol (O–H, hydrogen bonding) is highest. The ranking follows IMF strength: dispersion < dipole–dipole < hydrogen bonding, all read from the functional groups.'
          },
          {
            question: 'Glycerol, which has three –OH groups, is far more viscous than 1-propanol, which has one –OH on a similar carbon skeleton. The structural reason is that:',
            options: [
              'Glycerol is ionic',
              'Glycerol\'s three –OH groups allow extensive hydrogen bonding between molecules, resisting flow',
              'Glycerol has no intermolecular forces',
              '1-propanol has more carbon atoms'
            ],
            correctAnswer: 1,
            explanation: 'Each glycerol molecule can form many hydrogen bonds through its three –OH groups, creating a strongly networked liquid that resists flowing — high viscosity. More hydrogen-bonding sites, read straight from the structure, predict the syrupy behavior. Glycerol is molecular, not ionic, and clearly has strong IMFs.'
          }
        ]
      }
    }
  ]
}
