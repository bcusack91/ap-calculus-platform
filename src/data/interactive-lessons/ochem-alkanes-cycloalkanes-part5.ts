export const oChemAlkanesPart5Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan5-intro',
      type: 'text' as const,
      content: `
## Physical Properties of Alkanes

**Part 5 of 7 — Boiling Points, Branching, Solubility, and IMFs**

Alkanes are **nonpolar**. The $C-C$ bond is between identical atoms, and the $C-H$ bond has only a tiny electronegativity difference ($\\approx 0.4$), so alkanes have essentially **no permanent dipole**. With no dipole–dipole forces and no hydrogen bonding, the *only* intermolecular force available to alkanes is the weakest one: **London dispersion forces** (LDF), also called van der Waals or induced-dipole/induced-dipole forces.

London forces arise from instantaneous, fluctuating electron distributions that induce complementary dipoles in neighbors. Two features make them stronger:

1. **More electrons / larger surface area** — bigger molecules are more polarizable, so LDF grows with molecular size.
2. **More contact area** — molecules that can pack closely along their surfaces attract more strongly than compact, ball-like molecules.

Because all of an alkane's physical behavior traces back to weak, size-dependent London forces, the property trends are remarkably systematic and predictable.
      `
    },
    {
      id: 'alkan5-bp',
      type: 'text' as const,
      content: `
### Boiling Point: Size and Branching

**Trend 1 — Boiling point rises with molecular weight (chain length).** Each added $CH_2$ adds electrons and surface area, strengthening London forces, so more thermal energy is needed to separate molecules into the gas phase. The first four straight-chain alkanes ($CH_4$, ethane, propane, butane) are gases at room temperature; $C_5$–$C_{17}$ are liquids; $C_{18}$ and up are waxy solids. Roughly, each additional carbon raises the boiling point by $20\\text{–}30\\,^{\\circ}\\text{C}$ in the lower members.

**Trend 2 — Branching lowers boiling point.** For a fixed formula, a *branched* isomer boils *lower* than its straight-chain relative. Branching makes the molecule more compact and spherical, reducing the surface area available for intermolecular contact, which weakens London forces.

> **Worked comparison — the three $C_5H_{12}$ isomers:**
> - **n-pentane** (straight): bp $\\approx 36\\,^{\\circ}\\text{C}$ — most extended, most surface contact, highest bp.
> - **isopentane** (2-methylbutane, one branch): bp $\\approx 28\\,^{\\circ}\\text{C}$.
> - **neopentane** (2,2-dimethylpropane, most branched, nearly spherical): bp $\\approx 9.5\\,^{\\circ}\\text{C}$ — least surface contact, lowest bp.
>
> All three have the *same* molecular weight (72 g/mol), so the ~26 °C spread is due entirely to shape: the more spherical the molecule, the weaker its London forces and the lower its boiling point.
      `
    },
    {
      id: 'alkan5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Boiling Point Trends
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the boiling point of straight-chain alkanes increase as the chain gets longer?',
            options: [
              'Longer chains have stronger covalent bonds',
              'More carbons mean more electrons and surface area, strengthening London dispersion forces',
              'Longer chains become polar',
              'Longer chains form hydrogen bonds'
            ],
            correctAnswer: 1,
            explanation: 'Each added CH2 increases the electron count and surface area of the molecule, making it more polarizable and increasing London dispersion forces — the only IMF available to nonpolar alkanes. Stronger IMFs require more energy to vaporize, raising the boiling point. Covalent bond strength and (absent) polarity/H-bonding are irrelevant here.'
          },
          {
            question: 'n-Pentane (bp ~36 °C) and neopentane (2,2-dimethylpropane, bp ~9.5 °C) have the same formula $C_5H_{12}$. Why does neopentane boil so much lower?',
            options: [
              'Neopentane is polar',
              'Neopentane is nearly spherical, reducing surface contact and weakening London forces',
              'Neopentane has more electrons',
              'Neopentane has stronger C–C bonds'
            ],
            correctAnswer: 1,
            explanation: 'Branching makes neopentane compact and ball-like, minimizing the surface area available for intermolecular contact. Less contact means weaker London forces and a lower boiling point. The two isomers have identical molecular weight, so SHAPE — not size — accounts for the ~26 °C difference.'
          },
          {
            question: 'At room temperature, which physical state are the smallest alkanes (methane through butane) found in?',
            options: [
              'Solids',
              'Liquids',
              'Gases',
              'Aqueous solutions'
            ],
            correctAnswer: 2,
            explanation: 'C1–C4 alkanes (methane, ethane, propane, butane) are gases at room temperature because their London forces are too weak to hold them as liquids. C5–C17 are liquids and C18+ are waxy solids, reflecting the steady rise in dispersion forces with size.'
          }
        ]
      }
    },
    {
      id: 'alkan5-solubility',
      type: 'text' as const,
      content: `
### Solubility, Density, and Melting Point

**Solubility — "like dissolves like."** Alkanes are nonpolar and cannot hydrogen-bond, so they are **insoluble in water** (a polar, hydrogen-bonding solvent). Dissolving an alkane in water would require breaking favorable water–water hydrogen bonds without compensating attraction — entropically and enthalpically unfavorable (the **hydrophobic effect**). Alkanes *are*, however, fully miscible with other nonpolar solvents (other hydrocarbons, ethers, $CCl_4$). They are themselves excellent nonpolar solvents — this is the chemistry behind oils and greases.

**Density.** All liquid alkanes are **less dense than water** ($\\rho \\approx 0.62\\text{–}0.80\\;\\text{g/mL}$). Combined with their insolubility, this is why oil floats on water and forms a distinct upper layer — the basis of oil spills and of separations in a separatory funnel.

**Melting point.** Melting points also generally rise with molecular weight, but **less smoothly** than boiling points, because melting depends on how well molecules **pack into a crystal lattice**, not just on IMF strength. Alkanes with an **even** number of carbons often pack more efficiently than odd-numbered neighbors, producing a characteristic "sawtooth" alternation in the melting-point trend. Symmetry matters too: highly symmetric neopentane has an anomalously *high* melting point for its size because its spherical shape packs neatly into a crystal.

> **Key contrast:** Boiling point is governed almost entirely by IMF strength (size + surface area), so its trend is smooth. Melting point adds a *packing/symmetry* dependence, so its trend is bumpier — a symmetric molecule can boil low (weak LDF) yet melt high (efficient packing), as neopentane does.
      `
    },
    {
      id: 'alkan5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Solubility & Packing
      `,
      exercise: {
        questions: [
          {
            question: 'Why are alkanes insoluble in water?',
            options: [
              'They react violently with water',
              'They are nonpolar and cannot hydrogen-bond, so "like dissolves like" fails with polar water (hydrophobic effect)',
              'They are denser than water',
              'They ionize in water'
            ],
            correctAnswer: 1,
            explanation: 'Nonpolar alkanes offer no dipole or H-bonding to compensate for disrupting the hydrogen-bond network of water, so dissolving them is unfavorable (the hydrophobic effect). "Like dissolves like": alkanes mix with nonpolar solvents but not polar water. They do not react with or ionize in water.'
          },
          {
            question: 'Oil floats on water and forms a separate top layer. Which two alkane properties explain this?',
            options: [
              'High polarity and high density',
              'Insolubility in water and density less than water (~0.7 g/mL)',
              'Hydrogen bonding and high boiling point',
              'Ionic character and low molecular weight'
            ],
            correctAnswer: 1,
            explanation: 'Alkanes are insoluble in water (nonpolar, no H-bonding) AND less dense than water, so they neither mix in nor sink — they float as a distinct upper layer. This underlies oil spills and liquid–liquid separations in a separatory funnel.'
          },
          {
            question: 'Melting points of alkanes rise with size but in a bumpy "sawtooth" pattern, unlike the smooth boiling-point trend. Why?',
            options: [
              'Melting points do not depend on molecular size at all',
              'Melting depends on how efficiently molecules pack into a crystal lattice (affected by even/odd carbon count and symmetry), not just on IMF strength',
              'Boiling points are random',
              'Branched alkanes cannot melt'
            ],
            correctAnswer: 1,
            explanation: 'Boiling depends almost solely on IMF strength (smooth with size). Melting adds a crystal-PACKING dependence: even-carbon chains and symmetric molecules pack more efficiently, giving an alternating sawtooth. That is why symmetric neopentane melts unusually high despite weak London forces and a low boiling point.'
          }
        ]
      }
    },
    {
      id: 'alkan5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Predicting Properties
      `,
      exercise: {
        questions: [
          {
            question: 'Rank these by boiling point, highest first: n-hexane, n-pentane, 2-methylpentane.',
            options: [
              '2-methylpentane > n-hexane > n-pentane',
              'n-hexane > 2-methylpentane > n-pentane',
              'n-pentane > n-hexane > 2-methylpentane',
              'All three boil at the same temperature'
            ],
            correctAnswer: 1,
            explanation: 'n-Hexane (C6, straight) has the most carbons and most surface contact → highest bp. 2-Methylpentane is also C6 but branched, lowering its bp below n-hexane. n-Pentane (C5) is the smallest → lowest bp. So: n-hexane > 2-methylpentane > n-pentane. Size sets the tier; branching breaks ties within a formula.'
          },
          {
            question: 'Which intermolecular force is responsible for essentially all alkane physical properties, and why is it the only one present?',
            options: [
              'Hydrogen bonding, because alkanes have O–H bonds',
              'London dispersion forces, because alkanes are nonpolar (no dipole, no H-bond donors)',
              'Ion–dipole forces, because alkanes are ionic',
              'Dipole–dipole forces, because alkanes are strongly polar'
            ],
            correctAnswer: 1,
            explanation: 'Alkanes have no permanent dipole (C–H is barely polar) and no O–H or N–H for hydrogen bonding, so dipole–dipole and H-bonding are absent. Only London dispersion forces remain — weak, but the sole IMF — which is why size and surface area dictate alkane boiling points, solubility, and density.'
          }
        ]
      }
    }
  ]
}
