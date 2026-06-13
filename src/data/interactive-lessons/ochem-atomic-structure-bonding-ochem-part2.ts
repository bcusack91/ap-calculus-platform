export const oChemAtomicBondingPart2Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi2-intro',
      type: 'text' as const,
      content: `
## Lewis Structures & Formal Charge

**Part 2 of 7**

A **Lewis structure** is the working diagram of organic chemistry. It shows every bond, every lone pair, and — once you add formal charges — exactly where a molecule is electron-rich (nucleophilic) and electron-poor (electrophilic). You will draw thousands of these. Drawing them *correctly and quickly* is a non-negotiable skill, because a wrong Lewis structure produces a wrong reaction mechanism every single time.

A reliable five-step procedure:

1. **Count total valence electrons.** Sum the valence electrons of every atom. For an anion, **add** one electron per negative charge; for a cation, **subtract** one per positive charge.
2. **Place the skeleton.** Carbon is almost always central; hydrogen and halogens are always terminal (one bond each). The least electronegative atom (other than H) tends to be central.
3. **Connect with single bonds**, then distribute remaining electrons as **lone pairs**, completing octets on the outer atoms first.
4. **Form multiple bonds** by converting lone pairs into bonding pairs wherever a central atom is short of an octet.
5. **Assign formal charges** to check that you have the best structure.

Steps 1 and 5 are where students lose points, so we will drill the electron count and formal charge hardest.
      `
    },
    {
      id: 'atomi2-formalcharge',
      type: 'text' as const,
      content: `
### Formal Charge: The Bookkeeping That Reveals Reactivity

**Formal charge** answers the question: *relative to a free, neutral atom, did this atom gain or lose ownership of electrons when it joined the molecule?* The rule for counting "owned" electrons is the heart of it: an atom owns **all** of its lone-pair electrons but only **half** of each bonding pair (the other half belongs to its bonding partner).

$\\text{FC} = (\\text{valence electrons}) - (\\text{lone-pair electrons}) - \\tfrac{1}{2}(\\text{bonding electrons})$

A faster, equivalent form many people prefer:

$\\text{FC} = (\\text{valence electrons}) - (\\text{lone pairs} \\times 2) - (\\text{number of bonds})$

The second form works because half of the bonding electrons equals exactly the number of bonds (each bond = 2 shared electrons, half of which is 1).

Three anchor cases to memorize cold, because they recur constantly:

- **Oxygen with 3 bonds + 1 lone pair** (as in $\\text{H}_3\\text{O}^+$): $\\text{FC} = 6 - 2 - 3 = +1$.
- **Oxygen with 1 bond + 3 lone pairs** (as in hydroxide $\\text{OH}^-$): $\\text{FC} = 6 - 6 - 1 = -1$.
- **Nitrogen with 4 bonds + 0 lone pairs** (as in ammonium $\\text{NH}_4^+$): $\\text{FC} = 5 - 0 - 4 = +1$.

Note the pattern: an atom with **more** bonds than its neutral default tends to be **positive**; an atom with **fewer** bonds (and extra lone pairs) tends to be **negative**. The sum of all formal charges must equal the overall charge on the species.
      `
    },
    {
      id: 'atomi2-worked',
      type: 'text' as const,
      content: `
### Worked Example: Formal Charges in the Nitrate Ion ($\\text{NO}_3^-$)

**Step 1 — Count electrons.** N contributes 5, each O contributes 6, and the $-1$ charge adds 1: $5 + (3 \\times 6) + 1 = 24$ valence electrons.

**Step 2-4 — Build it.** Nitrogen is central, bonded to three oxygens. To give nitrogen an octet we use one $\\text{N=O}$ double bond and two $\\text{N-O}$ single bonds. The two single-bonded oxygens each carry 3 lone pairs; the double-bonded oxygen carries 2 lone pairs.

**Step 5 — Assign formal charges:**

- **Nitrogen**: 4 bonds (one double counts as 2 bonds), 0 lone pairs. $\\text{FC} = 5 - 0 - 4 = +1$.
- **Double-bonded O**: 2 bonds, 2 lone pairs. $\\text{FC} = 6 - 4 - 2 = 0$.
- **Each single-bonded O**: 1 bond, 3 lone pairs. $\\text{FC} = 6 - 6 - 1 = -1$.

**Check:** $(+1) + (0) + (-1) + (-1) = -1$. This matches the overall charge of the ion — the structure is valid.

Now the deeper point. We *chose* which oxygen got the double bond, but that choice is arbitrary: the three oxygens are chemically identical. The single Lewis structure is therefore a **lie of convenience** — the real ion has the negative charge and the double-bond character spread evenly across all three oxygens. That delocalization is **resonance**, and the "best structure" rules below are how we reason about which contributing structures matter most.
      `
    },
    {
      id: 'atomi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Calculating Formal Charge
      `,
      exercise: {
        questions: [
          {
            question: 'In the hydronium ion ($\\text{H}_3\\text{O}^+$), oxygen has three bonds and one lone pair. What is the formal charge on oxygen?',
            options: [
              '$-1$',
              '$0$',
              '$+1$',
              '$+2$'
            ],
            correctAnswer: 2,
            explanation: 'Oxygen has 6 valence electrons, 1 lone pair (2 electrons), and 3 bonds: $\\text{FC} = 6 - 2 - 3 = +1$. The trap is treating oxygen as always neutral with its "default" 2 bonds; here it has an EXTRA bond and one fewer lone pair than neutral oxygen, which makes it positive. That positive oxygen is exactly what makes hydronium a strong acid.'
          },
          {
            question: 'A carbon atom in a structure has 3 bonds and no lone pairs (a carbocation center). What is its formal charge?',
            options: [
              '$0$',
              '$+1$',
              '$-1$',
              '$+2$'
            ],
            correctAnswer: 1,
            explanation: 'Carbon has 4 valence electrons, 0 lone-pair electrons, and 3 bonds: $\\text{FC} = 4 - 0 - 3 = +1$. The trap is assuming carbon is always neutral — a three-bonded carbon with an empty orbital is one bond short of its default 4, so it is electron-deficient and carries +1. Recognizing this is how you spot the electrophilic carbon in a mechanism.'
          },
          {
            question: 'In a neutral amine, nitrogen typically has 3 bonds and 1 lone pair. Using $\\text{FC} = V - (\\text{lone-pair }e^-) - (\\text{bonds})$, confirm its formal charge.',
            options: [
              '$5 - 2 - 3 = 0$',
              '$5 - 2 - 3 = +1$',
              '$5 - 0 - 3 = +2$',
              '$5 - 4 - 3 = -2$'
            ],
            correctAnswer: 0,
            explanation: 'Nitrogen has 5 valence electrons, one lone pair = 2 electrons, and 3 bonds: $5 - 2 - 3 = 0$. A neutral amine nitrogen carries no formal charge — this is the baseline you compare against. The trap is plugging "3 bonds" into the bonds slot but forgetting the lone pair contributes 2 to the subtraction; omit it and you wrongly get a positive nitrogen.'
          }
        ]
      }
    },
    {
      id: 'atomi2-best',
      type: 'text' as const,
      content: `
### Choosing the "Best" Lewis Structure

When more than one valid Lewis structure can be drawn for a species (different placements of bonds and charges), they are **resonance contributors**, and they are *not* equally important. The real molecule resembles the *lowest-energy, most stable* contributors most closely. Rank contributors by these criteria, in order of priority:

1. **Complete octets win.** A structure where every second-row atom (especially carbon) has a full octet is far better than one with an electron-deficient atom. This rule outranks all others.
2. **Minimize formal charges.** Fewer atoms bearing nonzero formal charge means a more stable contributor. The ideal is zero formal charge everywhere.
3. **Negative charge on the most electronegative atom.** If a negative charge must exist, it is most stable on the atom best able to hold it (O over N over C). Conversely, positive charge prefers the *less* electronegative atom.
4. **Avoid like charges on adjacent atoms** and avoid large charge separation.

These same rules let you reject impossible structures (e.g., a carbon with only 6 electrons when a better octet structure exists) and identify the dominant contributor that controls a molecule's behavior.

> **Crucial distinction:** Resonance contributors are *not* different molecules in equilibrium, and the molecule does *not* flicker between them. They are simply incomplete sketches of one real, delocalized structure. The molecule is a single **resonance hybrid** — a weighted average — at all times. Part 7 returns to resonance in depth; here, just internalize that "best structure" means "most stable contributor," ranked by octets first, then formal charge.
      `
    },
    {
      id: 'atomi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Best Structure & Resonance
      `,
      exercise: {
        questions: [
          {
            question: 'Two resonance contributors are proposed for a molecule. In structure A every atom has a complete octet but there are two formal charges; in structure B there are zero formal charges but one carbon has only 6 electrons. Which is the better (more important) contributor?',
            options: [
              'Structure B, because it has no formal charges',
              'Structure A, because complete octets outrank minimizing formal charge',
              'They contribute equally',
              'Neither is valid because resonance requires identical energy'
            ],
            correctAnswer: 1,
            explanation: 'The octet rule is the top-priority criterion: a full octet on every second-row atom matters more than eliminating formal charges. Structure A (full octets) is the better contributor despite its charges. The trap (option 1) over-weights the formal-charge rule, which is genuinely #2 — but it never overrides an incomplete octet, especially an electron-deficient carbon.'
          },
          {
            question: 'For an anion, a negative formal charge can be placed on either an oxygen or a carbon depending on which resonance contributor you draw. Which placement gives the more stable (more dominant) contributor?',
            options: [
              'On carbon, because carbon forms more bonds',
              'On oxygen, because oxygen is more electronegative and better stabilizes negative charge',
              'It makes no difference to stability',
              'On whichever atom is drawn on the left'
            ],
            correctAnswer: 1,
            explanation: 'Negative charge is most stable on the most electronegative atom, which can best accommodate the extra electron density. The oxygen-anion contributor therefore dominates and is the larger weight in the hybrid. The trap (option 1) confuses bonding capacity with charge stabilization; bond count does not determine where negative charge prefers to sit — electronegativity does.'
          },
          {
            question: 'A student claims a carboxylate ion ($\\text{RCOO}^-$) "rapidly flips back and forth" between its two resonance structures. Why is this description wrong?',
            options: [
              'The two structures actually have different molecular formulas',
              'Resonance structures are not separate species in equilibrium; the real ion is a single hybrid with the charge permanently delocalized over both oxygens',
              'Only one of the two structures is ever real at a time',
              'The ion does flip, but only at very low temperatures'
            ],
            correctAnswer: 1,
            explanation: 'There is no flipping. A resonance hybrid is one structure at all times, with the negative charge and double-bond character spread equally across both oxygens (each C-O bond is identical, intermediate between single and double). The trap is the "flickering" mental model — resonance contributors are drawings, not states the molecule physically toggles between.'
          }
        ]
      }
    },
    {
      id: 'atomi2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'You draw a Lewis structure for the cyanide ion ($\\text{CN}^-$) as $:\\!\\text{C}\\!\\equiv\\!\\text{N}\\!:$ with a lone pair on each atom. What are the formal charges on C and N respectively?',
            options: [
              'C is $0$, N is $0$',
              'C is $-1$, N is $0$',
              'C is $+1$, N is $-1$',
              'C is $-1$, N is $+1$'
            ],
            correctAnswer: 1,
            explanation: 'Carbon: 4 valence, 1 lone pair (2 e), 3 bonds (triple): $4 - 2 - 3 = -1$. Nitrogen: 5 valence, 1 lone pair, 3 bonds: $5 - 2 - 3 = 0$. Sum = $-1$, matching the ion. The trap is option 3, which puts the negative charge on nitrogen — but the math (and the carbon nucleophilicity of cyanide) shows the lone pair / negative charge sits on CARBON, which is why cyanide attacks through carbon.'
          },
          {
            question: 'Which of the following is the single most important first step that, if done wrong, guarantees an incorrect Lewis structure?',
            options: [
              'Choosing colors for the bonds',
              'Correctly counting total valence electrons, including adjusting for the ion\'s charge',
              'Deciding the molecule\'s boiling point',
              'Drawing the structure left-to-right'
            ],
            correctAnswer: 1,
            explanation: 'Every later step depends on having the right electron budget; miscount by even one (a common error is forgetting to add an electron for a negative charge) and octets and formal charges all come out wrong. The trap answers are irrelevant to electron bookkeeping. Get step 1 right and the rest is mechanical.'
          }
        ]
      }
    }
  ]
}
