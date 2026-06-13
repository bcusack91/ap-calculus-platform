export const oChemAtomicBondingPart6Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7**

You now have all the tools: Lewis structures and formal charge (Part 2), hybridization and s-character (Part 3), $\\sigma$/$\\pi$ bonds and bond order (Part 4), and electronegativity, dipoles, and VSEPR geometry (Part 5). Real exam questions rarely test these in isolation — they hand you a structure and ask you to chain the ideas together. This workshop drills that **integrated workflow** on real organic molecules.

A master procedure for analyzing any structure handed to you:

1. **Draw / verify the Lewis structure** — correct electron count, octets satisfied.
2. **Assign formal charges** — locate any charged atoms; these flag reactive sites.
3. **Count regions of electron density per central atom** ($\\sigma$ bonds + lone pairs) to assign **hybridization** and **VSEPR geometry**.
4. **Identify $\\sigma$ vs $\\pi$ bonds** — singles are $\\sigma$; doubles add one $\\pi$; triples add two $\\pi$.
5. **Evaluate polarity** — bond dipoles from $\\Delta\\text{EN}$, then the vector sum given the geometry.

Work the examples below with paper and pencil before reading each resolution. Speed and accuracy here are what separate a confident orgo student from a struggling one.
      `
    },
    {
      id: 'atomi6-worked1',
      type: 'text' as const,
      content: `
### Worked Problem 1: Full Analysis of Acetonitrile ($\\text{CH}_3\\text{CN}$)

Structure: $\\text{CH}_3\\!-\\!\\text{C}\\!\\equiv\\!\\text{N}\\!:$ (a methyl group, then a carbon triple-bonded to nitrogen, with a lone pair on N).

**Formal charges.** Methyl carbon: 4 bonds, 0 LP $\\rightarrow 4 - 0 - 4 = 0$. Nitrile carbon: 4 bonds (1 single + triple), 0 LP $\\rightarrow 4 - 0 - 4 = 0$. Nitrogen: 3 bonds + 1 LP $\\rightarrow 5 - 2 - 3 = 0$. All neutral; net charge 0. Good.

**Hybridization (count regions).**
- Methyl carbon: 4 $\\sigma$ bonds (three C-H + one C-C), 0 LP = **4 regions $\\rightarrow sp^3$, tetrahedral, $109.5^\\circ$.**
- Nitrile carbon: 2 regions (one $\\sigma$ to methyl, one $\\sigma$ to N — the triple bond is one region) = **2 regions $\\rightarrow sp$, linear, $180^\\circ$.**
- Nitrogen: 2 regions (one $\\sigma$ to C + one lone pair; the two $\\pi$ bonds add no region) = **2 regions $\\rightarrow sp$, linear.**

**Sigma vs pi.** Three C-H ($\\sigma$), one C-C ($\\sigma$), and the C≡N (1 $\\sigma$ + 2 $\\pi$). **Total: 5 $\\sigma$ and 2 $\\pi$.**

**Polarity.** The C≡N bond is strongly polar (N more electronegative), and the linear nitrile end does not cancel it; acetonitrile has a large net dipole toward nitrogen. **Polar molecule** — indeed a common polar aprotic solvent.

Notice how every tool fed into the next: regions gave hybridization and geometry, bond multiplicity gave the $\\sigma$/$\\pi$ count, and geometry plus $\\Delta\\text{EN}$ gave the polarity.
      `
    },
    {
      id: 'atomi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integrated Analysis I
      `,
      exercise: {
        questions: [
          {
            question: 'In acetonitrile ($\\text{CH}_3\\text{CN}$), what are the hybridizations of the methyl carbon and the nitrile (triple-bonded) carbon, respectively?',
            options: [
              '$sp^3$ and $sp^3$',
              '$sp^3$ and $sp$',
              '$sp^2$ and $sp$',
              '$sp$ and $sp^3$'
            ],
            correctAnswer: 1,
            explanation: 'The methyl carbon has 4 regions (3 C-H + 1 C-C) = $sp^3$; the nitrile carbon has 2 regions (one sigma to methyl, one sigma to N) = $sp$. The trap (option 1) treats both as $sp^3$, forgetting that the triple bond compresses the nitrile carbon to just two regions of density — a triple bond is ONE region, so that carbon is $sp$, not $sp^3$.'
          },
          {
            question: 'How many total sigma and pi bonds are present in acetonitrile, $\\text{CH}_3\\text{C}\\!\\equiv\\!\\text{N}$?',
            options: [
              '7 sigma and 0 pi',
              '5 sigma and 2 pi',
              '4 sigma and 3 pi',
              '6 sigma and 1 pi'
            ],
            correctAnswer: 1,
            explanation: 'Three C-H sigma + one C-C sigma + the C≡N (1 sigma + 2 pi) = 5 sigma and 2 pi. The trap (option 1) counts the triple bond as three sigma bonds; only its first bond is sigma, and the other two are pi. Always resolve each multiple bond into 1 sigma plus the rest pi.'
          },
          {
            question: 'Is acetonitrile a polar molecule, and which end carries the partial negative charge?',
            options: [
              'Nonpolar, because the bond dipoles cancel',
              'Polar, with the partial negative charge on the nitrogen end',
              'Polar, with the partial negative charge on the methyl end',
              'Nonpolar, because all atoms have equal electronegativity'
            ],
            correctAnswer: 1,
            explanation: 'The strongly polar C≡N bond points its dipole toward the more electronegative nitrogen, and the linear nitrile geometry does not cancel it, so acetonitrile is polar with N as the $\\delta^-$ end. The trap (option 1) assumes the linear shape forces cancellation as in CO2 — but CO2 cancels because it has TWO opposing equal dipoles; acetonitrile has one dominant C≡N dipole with nothing to oppose it.'
          }
        ]
      }
    },
    {
      id: 'atomi6-worked2',
      type: 'text' as const,
      content: `
### Worked Problem 2: The Carbonyl Group and a Formal-Charge Trap

Consider the carbonyl carbon in **acetone**, $(\\text{CH}_3)_2\\text{C=O}$ — the central carbon bonded to two methyl groups and double-bonded to oxygen.

**Hybridization & geometry.** The carbonyl carbon has 3 regions (two C-C $\\sigma$ + one C=O, which is one region) = **$sp^2$, trigonal planar, $120^\\circ$.** The leftover pure $p$ orbital on this carbon forms the $\\pi$ bond to oxygen.

**Bonds.** The C=O is 1 $\\sigma$ + 1 $\\pi$. The oxygen, with 2 bonds + 2 lone pairs, is also part of the picture: regions = 2 (one $\\sigma$ to C + 2 lone pairs... wait — count carefully: oxygen has one $\\sigma$ bond and two lone pairs = 3 regions $\\rightarrow sp^2$).

**Polarity and reactivity — the payoff.** Oxygen pulls the C=O electrons toward itself, so oxygen is $\\delta^-$ and the **carbonyl carbon is $\\delta^+$**. That electron-poor, $sp^2$, trigonal-planar carbon is wide open for a nucleophile to attack from above or below the plane — this is the foundation of *every* carbonyl reaction you will see (nucleophilic addition, substitution at acyl carbons, and more).

**The trap.** A tempting resonance contributor puts a full positive charge on carbon and a negative on oxygen ($\\text{C}^+\\!-\\!\\text{O}^-$ with a C-O single bond). Is it valid? Check octets: that contributor leaves carbon with only 6 electrons (an incomplete octet). By the "best structure" rules (Part 2), it is a **minor** contributor — the neutral $\\text{C=O}$ double-bond structure dominates. But the minor contributor is not useless: it is *exactly* the picture that explains the carbon's $\\delta^+$ electrophilicity. Knowing which contributor dominates (the octet one) *and* what the minor one teaches you (the reactivity) is the integrated skill being built.
      `
    },
    {
      id: 'atomi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integrated Analysis II
      `,
      exercise: {
        questions: [
          {
            question: 'What is the hybridization and approximate bond angle at the carbonyl carbon of acetone, $(\\text{CH}_3)_2\\text{C=O}$?',
            options: [
              '$sp^3$, $109.5^\\circ$',
              '$sp^2$, $120^\\circ$',
              '$sp$, $180^\\circ$',
              '$sp^3$, $120^\\circ$'
            ],
            correctAnswer: 1,
            explanation: 'The carbonyl carbon has 3 regions of density (two C-C single bonds + one C=O double bond, counted as one region) = $sp^2$, trigonal planar, $120^\\circ$. The trap (option 1) counts the C=O as two regions, inflating the count to 4 and wrongly giving $sp^3$; the pi part of the double bond never adds a region.'
          },
          {
            question: 'In a carbonyl group (C=O), which atom is the electrophilic site that nucleophiles attack, and why?',
            options: [
              'The oxygen, because it is $\\delta^+$',
              'The carbon, because oxygen pulls electron density away, leaving the carbon electron-poor ($\\delta^+$)',
              'Neither; the C=O bond is nonpolar',
              'The carbon, because it is $\\delta^-$'
            ],
            correctAnswer: 1,
            explanation: 'Oxygen is more electronegative and withdraws the C=O electrons, making oxygen $\\delta^-$ and the carbon $\\delta^+$ — the electron-poor carbon is where electron-rich nucleophiles attack. The trap (option 1) puts the positive charge on oxygen; it is the LESS electronegative carbon that ends up partially positive and electrophilic. This single fact underlies all carbonyl chemistry.'
          },
          {
            question: 'A resonance contributor for acetone draws the carbonyl as $\\text{C}^+\\!-\\!\\text{O}^-$ with a C-O single bond, giving carbon only 6 electrons. How should this contributor be classified?',
            options: [
              'It is the dominant contributor because it has formal charges',
              'It is a minor contributor (incomplete octet on carbon), but it usefully illustrates the carbon\'s $\\delta^+$ electrophilic character',
              'It is invalid and must be discarded entirely',
              'It is equal in importance to the neutral C=O structure'
            ],
            correctAnswer: 1,
            explanation: 'By the best-structure rules, the neutral full-octet C=O form dominates; the charge-separated form with a 6-electron carbon is minor. But it is not worthless — it is precisely the resonance picture that rationalizes why the carbonyl carbon is electrophilic. The trap (option 1) over-values formal charges, which are only the #2 criterion and never beat a complete octet.'
          }
        ]
      }
    },
    {
      id: 'atomi6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 6 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'For the formate ion, $\\text{HCOO}^-$, the carbon is bonded to one H, one C-O single bond (to $\\text{O}^-$), and one C=O double bond. What is the hybridization of the carbon, and what does resonance say about the two oxygens?',
            options: [
              '$sp^3$ carbon; the two oxygens are permanently different (one single, one double)',
              '$sp^2$ carbon; resonance makes the two oxygens equivalent, each carrying half the negative charge with identical C-O bond lengths',
              '$sp$ carbon; the negative charge sits entirely on carbon',
              '$sp^2$ carbon; but resonance does not affect the oxygens'
            ],
            correctAnswer: 1,
            explanation: 'The carbon has 3 regions (C-H, C-O single, C=O) = $sp^2$, trigonal planar. The two resonance contributors (swapping which oxygen is double-bonded) make the real ion a hybrid: both C-O bonds are identical (between single and double), and the $-1$ charge is split equally over both oxygens. The trap (option 1) treats the single Lewis drawing as literal; resonance means the oxygens are equivalent, not fixed as one single and one double.'
          },
          {
            question: 'You are told a molecule has polar bonds but a measured net dipole moment of zero. Which conclusion is justified?',
            options: [
              'The bonds must actually be nonpolar',
              'The molecule has a symmetric geometry in which the bond dipoles cancel as vectors (e.g., linear $\\text{CO}_2$ or tetrahedral $\\text{CCl}_4$)',
              'The molecule must be ionic',
              'The measurement is necessarily an error'
            ],
            correctAnswer: 1,
            explanation: 'Polar bonds plus zero net dipole is the signature of a symmetric molecule whose bond-dipole vectors cancel — exactly the $\\text{CO}_2$ (linear) and $\\text{CCl}_4$ (tetrahedral) situations from Part 5. The trap (option 1) denies the bonds are polar, but the problem states they are; the resolution is geometric cancellation, not nonpolar bonds.'
          }
        ]
      }
    }
  ]
}
