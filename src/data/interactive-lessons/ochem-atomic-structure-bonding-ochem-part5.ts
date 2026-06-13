export const oChemAtomicBondingPart5Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi5-intro',
      type: 'text' as const,
      content: `
## Electronegativity, Bond Polarity & Dipole Moments

**Part 5 of 7**

A covalent bond shares electrons — but rarely *equally*. **Electronegativity** is an atom's pull on the shared electrons of a bond. When two bonded atoms differ in electronegativity, the electron density shifts toward the greedier atom, creating a **polar bond**: a separation of partial charge, written $\\delta^-$ (partial negative, on the more electronegative atom) and $\\delta^+$ (partial positive). This polarity is the origin of almost every intermolecular force and every "where does the nucleophile attack" question in orgo.

The trend on the periodic table, which you should know without a chart:

- Electronegativity **increases left $\\rightarrow$ right** across a period (more nuclear charge pulling on the same shell).
- Electronegativity **increases bottom $\\rightarrow$ top** up a group (valence electrons closer to the nucleus).
- The orgo "all-stars," roughly: $\\text{F} > \\text{O} > \\text{N} \\approx \\text{Cl} > \\text{C} \\approx \\text{H}$.

The key reference point for organic chemistry: **carbon (2.5) and hydrogen (2.2) are nearly equal**, so C-H bonds are *essentially nonpolar*. That is why hydrocarbon chains are greasy and hydrophobic. But the moment carbon bonds to O, N, or a halogen, a polar bond appears with carbon as the $\\delta^+$ end — and that electron-poor carbon becomes the electrophilic site that nucleophiles attack.
      `
    },
    {
      id: 'atomi5-spectrum',
      type: 'text' as const,
      content: `
### The Bonding Spectrum and the Dipole Moment

Bond character is a continuum, indexed by the electronegativity difference $\\Delta\\text{EN}$:

| $\\Delta\\text{EN}$ | Bond type | Example |
|---|---|---|
| $0$ to $\\sim 0.4$ | Nonpolar covalent | C-H, C-C |
| $\\sim 0.5$ to $\\sim 1.7$ | Polar covalent | C-O, O-H, C-Cl |
| $> \\sim 1.7$ to $2.0$ | Largely ionic | Na-Cl |

These cutoffs are guidelines, not hard walls — the point is the *trend*: the bigger the $\\Delta\\text{EN}$, the more the electrons localize on the electronegative atom, sliding from equal sharing toward full transfer.

The **dipole moment ($\\mu$)** quantifies a bond's (or a molecule's) polarity. It is the product of the magnitude of the partial charge and the distance separating the charges:

$\\mu = q \\times d$

where $q$ is the partial charge and $d$ is the separation distance. Dipole moment is a **vector** — it has direction, conventionally drawn as an arrow pointing from $\\delta^+$ toward $\\delta^-$ (some textbooks use a crossed arrow with the cross on the positive end). Its unit is the **debye (D)**.

The vector nature is the crux of the next idea: a molecule's *overall* dipole is the **vector sum** of its individual bond dipoles. Individual bonds can be very polar, yet if their dipole vectors point in opposing directions and cancel, the **molecule** has no net dipole at all.
      `
    },
    {
      id: 'atomi5-vsepr',
      type: 'text' as const,
      content: `
### Worked Example: Why Geometry Decides Molecular Polarity

To predict whether a *molecule* is polar, you need its **shape**, which comes from **VSEPR** (Valence Shell Electron Pair Repulsion): electron-density regions around a central atom arrange themselves as far apart as possible, giving exactly the geometries from hybridization — linear ($sp$, $180^\\circ$), trigonal planar ($sp^2$, $120^\\circ$), tetrahedral ($sp^3$, $109.5^\\circ$). Then you add up the bond dipoles as vectors.

**Case 1 — carbon dioxide, $\\text{O=C=O}$.** Each C=O bond is strongly polar (O is much more electronegative than C). But the central carbon is $sp$, so the molecule is **linear**: the two C=O dipoles point in exactly opposite directions and **cancel**. Net dipole = 0. **$\\text{CO}_2$ is nonpolar** despite two very polar bonds.

**Case 2 — water, $\\text{H-O-H}$.** Each O-H bond is polar. Oxygen is $sp^3$ with two lone pairs, so the molecule is **bent** ($\\sim 104.5^\\circ$), not linear. The two O-H dipoles do *not* oppose each other; they add to a large net dipole pointing toward the oxygen. **Water is strongly polar** — the reason it is an excellent solvent.

**Case 3 — carbon tetrachloride, $\\text{CCl}_4$.** Each C-Cl bond is polar, but the carbon is $sp^3$ **tetrahedral** and all four substituents are identical chlorines arranged symmetrically. The four dipoles point toward the four corners and sum to **zero**. **$\\text{CCl}_4$ is nonpolar.** Contrast with chloroform, $\\text{CHCl}_3$: replacing one Cl with H breaks the symmetry, the dipoles no longer cancel, and the molecule becomes polar.

The lesson, in one line: **polar bonds + symmetric geometry $\\rightarrow$ nonpolar molecule; polar bonds + asymmetric geometry (or lone pairs that break symmetry) $\\rightarrow$ polar molecule.** You cannot judge molecular polarity from bonds alone — you must consider the 3-D shape.
      `
    },
    {
      id: 'atomi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Bond Polarity & Electronegativity
      `,
      exercise: {
        questions: [
          {
            question: 'Why are typical carbon-hydrogen (C-H) bonds considered essentially nonpolar?',
            options: [
              'Carbon and hydrogen have very similar electronegativities (about 2.5 and 2.2)',
              'Carbon and hydrogen share no electrons',
              'Hydrogen is far more electronegative than carbon',
              'C-H bonds are ionic'
            ],
            correctAnswer: 0,
            explanation: 'With $\\Delta\\text{EN}$ near 0.3, the electrons in a C-H bond are shared nearly equally, so there is little partial charge — the bond is effectively nonpolar. This is why hydrocarbons are greasy and water-insoluble. The trap (option 3) inverts the values; hydrogen is actually slightly LESS electronegative than carbon, but the real reason for nonpolarity is how CLOSE the two values are, not which is larger.'
          },
          {
            question: 'In a C-O bond, which atom bears the partial negative charge ($\\delta^-$), and what does this imply about the carbon?',
            options: [
              'Carbon is $\\delta^-$; the oxygen becomes electrophilic',
              'Oxygen is $\\delta^-$; the carbon is $\\delta^+$ and is the electrophilic (nucleophile-attracting) site',
              'Both atoms are $\\delta^-$ simultaneously',
              'Neither atom carries partial charge because the bond is covalent'
            ],
            correctAnswer: 1,
            explanation: 'Oxygen is more electronegative, so it pulls electron density toward itself and becomes $\\delta^-$, leaving carbon $\\delta^+$. That electron-poor carbon is exactly where nucleophiles attack (e.g., at a carbonyl). The trap (option 4) assumes "covalent" means "no partial charge" — covalent bonds can be quite polar; it is the UNEQUAL sharing, not the presence of sharing, that sets the partial charges.'
          },
          {
            question: 'Which bond is the most polar?',
            options: [
              'C-C',
              'C-H',
              'C-F',
              'C-I'
            ],
            correctAnswer: 2,
            explanation: 'Polarity scales with $\\Delta\\text{EN}$. Fluorine is the most electronegative element, so C-F has the largest electronegativity difference and is the most polar of these. The trap (option 4) might tempt you because iodine is a big atom, but size is not electronegativity — iodine is far down the group and only weakly electronegative, so C-I is much less polar than C-F.'
          }
        ]
      }
    },
    {
      id: 'atomi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Molecular Polarity & Geometry
      `,
      exercise: {
        questions: [
          {
            question: 'Carbon dioxide ($\\text{CO}_2$) has two strongly polar C=O bonds, yet the molecule has no net dipole moment. Why?',
            options: [
              'The C=O bonds are actually nonpolar',
              'The molecule is linear, so the two equal bond dipoles point in opposite directions and cancel exactly',
              'Oxygen and carbon have identical electronegativities',
              'The molecule is bent, which cancels the dipoles'
            ],
            correctAnswer: 1,
            explanation: 'Each C=O bond is very polar, but the linear ($sp$ carbon, $180^\\circ$) geometry makes the two dipole vectors antiparallel and equal, so they sum to zero. Net dipole = 0, nonpolar molecule. The trap (option 4) gets the cancellation right but the geometry wrong — a BENT triatomic (like water) would NOT cancel; it is precisely the LINEAR shape that produces the cancellation.'
          },
          {
            question: 'Both $\\text{CCl}_4$ and $\\text{CHCl}_3$ contain polar C-Cl bonds. $\\text{CCl}_4$ is nonpolar but $\\text{CHCl}_3$ is polar. What accounts for the difference?',
            options: [
              'C-Cl bonds in $\\text{CHCl}_3$ are more polar than in $\\text{CCl}_4$',
              'In $\\text{CCl}_4$ the four identical bond dipoles cancel by tetrahedral symmetry, but replacing one Cl with H in $\\text{CHCl}_3$ breaks that symmetry so the dipoles no longer cancel',
              '$\\text{CHCl}_3$ is ionic while $\\text{CCl}_4$ is covalent',
              '$\\text{CCl}_4$ is bent and $\\text{CHCl}_3$ is linear'
            ],
            correctAnswer: 1,
            explanation: 'Both are tetrahedral, but symmetry is the deciding factor. Four identical C-Cl dipoles in $\\text{CCl}_4$ sum to zero; swapping one Cl for a much less polar C-H bond in $\\text{CHCl}_3$ destroys the symmetric cancellation, leaving a net dipole. The trap (option 1) invents a difference in bond polarity — the C-Cl bonds are essentially the same in both; what changed is the molecular SYMMETRY.'
          },
          {
            question: 'Water is bent ($\\sim 104.5^\\circ$) rather than linear. How does this shape affect its polarity, and why is the molecule bent?',
            options: [
              'Bent shape makes the O-H dipoles cancel, so water is nonpolar',
              "Oxygen's two lone pairs force a bent geometry, so the O-H dipoles add to a large net dipole, making water strongly polar",
              'Water is bent because hydrogen is more electronegative than oxygen',
              'The bend has no effect on polarity'
            ],
            correctAnswer: 1,
            explanation: 'Oxygen is $sp^3$ with two lone pairs; VSEPR repulsion bends the H-O-H angle to ~104.5 degrees. Because the molecule is bent (not linear), the two O-H bond dipoles do not oppose each other — they sum to a strong net dipole toward oxygen, making water highly polar. The trap (option 1) wrongly assumes any two dipoles cancel; cancellation requires the bonds to point OPPOSITE, which only a linear arrangement provides.'
          }
        ]
      }
    },
    {
      id: 'atomi5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 5 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Two molecules have similar molar masses, but one is polar and one is nonpolar. Which generally has the higher boiling point, and why does molecular polarity matter for physical properties?',
            options: [
              'The nonpolar one, because nonpolar molecules attract more strongly',
              'The polar one, because dipole-dipole attractions between polar molecules require more energy to overcome than the weak forces between nonpolar molecules',
              'They boil at exactly the same temperature regardless of polarity',
              'Polarity affects color but not boiling point'
            ],
            correctAnswer: 1,
            explanation: 'A net molecular dipole creates dipole-dipole attractions (and enables hydrogen bonding when H is on N/O/F); these intermolecular forces are stronger than the dispersion-only forces between nonpolar molecules of similar mass, raising the boiling point. The trap (option 1) reverses the logic — nonpolar molecules of comparable size have WEAKER intermolecular forces, hence lower boiling points.'
          },
          {
            question: 'A student concludes that because $\\text{BF}_3$ has three polar B-F bonds, the molecule must be polar. What is the flaw in this reasoning?',
            options: [
              'B-F bonds are nonpolar, so the premise is wrong',
              "$\\text{BF}_3$ is trigonal planar and symmetric, so the three equal bond dipoles cancel by symmetry and the molecule is nonpolar despite polar bonds",
              '$\\text{BF}_3$ is ionic, so dipole reasoning does not apply',
              'The molecule is polar, so the student is correct'
            ],
            correctAnswer: 1,
            explanation: 'Polar bonds do not guarantee a polar molecule — geometry decides. $\\text{BF}_3$ is trigonal planar ($120^\\circ$) with three identical, symmetrically arranged B-F dipoles that vector-sum to zero, so the molecule is nonpolar. The flaw is judging molecular polarity from bonds alone while ignoring the symmetric SHAPE, the same way $\\text{CO}_2$ and $\\text{CCl}_4$ end up nonpolar.'
          }
        ]
      }
    }
  ]
}
