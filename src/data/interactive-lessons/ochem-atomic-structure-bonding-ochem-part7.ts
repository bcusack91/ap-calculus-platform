export const oChemAtomicBondingPart7Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi7-intro',
      type: 'text' as const,
      content: `
## Resonance, Delocalization & Capstone Review

**Part 7 of 7**

This final part does two things. First, it gives **resonance** — touched on in Parts 2 and 6 — the full treatment it deserves, because resonance is the concept students most often misunderstand and the one orgo leans on most heavily (acidity, stability, aromaticity, mechanism all depend on it). Second, it ties the whole unit together: **structure determines properties**, from the orbital all the way up to boiling point and reactivity.

The thesis of the unit: a molecule's behavior is dictated, in a clean chain, by

$\\text{electron configuration} \\rightarrow \\text{Lewis structure / formal charge} \\rightarrow \\text{hybridization} \\rightarrow \\text{geometry} \\rightarrow \\text{polarity} \\rightarrow \\text{properties and reactivity}$

Resonance is what happens when a single Lewis structure cannot honestly capture the electron distribution — when electrons are **delocalized** over more than two atoms. Mastering it is the capstone skill of atomic structure and bonding.
      `
    },
    {
      id: 'atomi7-resonance',
      type: 'text' as const,
      content: `
### Resonance: One Molecule, Several Sketches

**Resonance structures (contributors)** are two or more valid Lewis structures for the *same* arrangement of atoms that differ only in the placement of **electrons** — specifically $\\pi$ electrons and lone pairs. The real molecule is none of them individually; it is the **resonance hybrid**, a single, lower-energy, weighted average of all contributors.

The non-negotiable rules of resonance:

1. **Atoms never move.** Only electrons (specifically $\\pi$ bonds and lone pairs) are redistributed. $\\sigma$ bonds and the molecular skeleton are fixed. If you moved an atom, you drew a different molecule, not a resonance structure.
2. **The total electron count and overall charge are conserved** across every contributor.
3. **Contributors are connected by a double-headed arrow** ($\\leftrightarrow$), which means "these are pictures of one hybrid" — *not* an equilibrium arrow ($\\rightleftharpoons$). The molecule does not interconvert between them.
4. **Contributors are weighted by stability** (the Part 2 best-structure rules: full octets first, then minimal formal charge, then negative charge on electronegative atoms). The more stable a contributor, the more it resembles the true hybrid.

**Delocalization lowers energy.** This is the chemical punchline: spreading electrons (and charge) over several atoms is *stabilizing*. A molecule or ion with significant resonance delocalization is lower in energy — more stable — than any single contributor suggests. This extra stability is called **resonance (delocalization) energy**, and it explains a huge amount of orgo:
- **Carboxylic acids** are far more acidic than alcohols because the carboxylate conjugate base spreads its negative charge over two equivalent oxygens (two equal contributors).
- **Allylic and benzylic cations/radicals** are unusually stable because the charge/radical is delocalized.
- **Benzene's** exceptional stability ("aromaticity") is resonance delocalization of six $\\pi$ electrons over the ring.
      `
    },
    {
      id: 'atomi7-curved',
      type: 'text' as const,
      content: `
### Worked Example: Resonance in the Acetate Ion and How to Rank Contributors

**Acetate**, $\\text{CH}_3\\text{COO}^-$, is the conjugate base of acetic acid. Draw the carboxylate end: the carbon is bonded to the methyl group, double-bonded to one oxygen, and single-bonded to the other oxygen (which bears the $-1$ charge and three lone pairs).

**The two contributors.** Push the lone pair on the negative oxygen up to form a new $\\pi$ bond, and simultaneously push the existing C=O $\\pi$ electrons down onto that oxygen as a new lone pair. The result is a second, *equivalent* structure with the double bond and the negative charge swapped between the two oxygens. Because the two contributors are **identical in stability** (each: full octets, one $-1$ on an oxygen), they contribute **equally**.

**The hybrid.** The true acetate ion has:
- Two **identical** C-O bonds, each with a bond order of **1.5** (halfway between single and double).
- The $-1$ charge **split evenly**, $-\\tfrac{1}{2}$ on each oxygen.

This equal, symmetric delocalization is precisely why acetate is so stable, and therefore why acetic acid is far more acidic than, say, ethanol (whose alkoxide conjugate base has *no* resonance to spread the charge).

**Ranking contributors — the checklist.** When contributors are *not* equivalent, rank them with the Part 2 rules, in priority order:

1. **More complete octets** (especially no electron-deficient carbon) — highest priority.
2. **Fewer formal charges.**
3. **Negative charge on the more electronegative atom** (and positive on the less electronegative).
4. **Less charge separation.**

The contributor highest on this list is the **major** contributor and dominates the hybrid; ones with incomplete octets or awkward charges are **minor** but can still illustrate reactivity (recall the carbonyl example in Part 6).
      `
    },
    {
      id: 'atomi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Resonance Fundamentals
      `,
      exercise: {
        questions: [
          {
            question: 'Which change is allowed when drawing a legitimate resonance structure?',
            options: [
              'Moving a hydrogen atom from one carbon to another',
              'Redistributing pi bonds and lone-pair electrons while keeping all atoms in place',
              'Breaking a sigma bond and relocating the atoms',
              'Changing the total number of valence electrons'
            ],
            correctAnswer: 1,
            explanation: 'Resonance moves only electrons — pi bonds and lone pairs — never atoms, and it conserves the total electron count. The trap (option 1) moves an atom (a hydrogen); that produces a constitutional isomer or a tautomer, NOT a resonance structure. The litmus test: if any nucleus changed position, it is not resonance.'
          },
          {
            question: 'The acetate ion ($\\text{CH}_3\\text{COO}^-$) is drawn with two resonance contributors. What does the real ion actually look like?',
            options: [
              'It rapidly alternates between the two structures',
              'It is a single hybrid with two identical C-O bonds (bond order ~1.5) and the negative charge shared equally over both oxygens',
              'Only the structure with the double bond on the left oxygen is real',
              'The two oxygens are permanently different, one single-bonded and one double-bonded'
            ],
            correctAnswer: 1,
            explanation: 'The two contributors are equivalent, so the hybrid is their perfect average: both C-O bonds are identical (intermediate, order ~1.5) and the charge is split evenly ($-\\tfrac{1}{2}$ each). The trap (option 1) is the persistent "flickering" misconception — the ion never alternates; it IS the averaged hybrid at all times.'
          },
          {
            question: 'Why is acetic acid ($\\text{CH}_3\\text{COOH}$) much more acidic than ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)?',
            options: [
              'The O-H bond in acetic acid is weaker for no particular reason',
              'The acetate conjugate base delocalizes its negative charge over two equivalent oxygens by resonance, stabilizing it, while ethanol\'s alkoxide has no such resonance',
              'Ethanol has more oxygen atoms than acetic acid',
              'Acetic acid is a larger molecule, which always increases acidity'
            ],
            correctAnswer: 1,
            explanation: 'Acidity is governed by conjugate-base stability. Acetate spreads its $-1$ charge over two oxygens via resonance (a strongly stabilizing delocalization), whereas the ethoxide ion localizes the charge on one oxygen with no resonance — so acetate is far more stable and acetic acid far more acidic. The trap (option 1) hand-waves at bond strength; the real, specific cause is resonance delocalization of the carboxylate charge.'
          }
        ]
      }
    },
    {
      id: 'atomi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Ranking Contributors & Delocalization
      `,
      exercise: {
        questions: [
          {
            question: 'When two non-equivalent resonance contributors are compared, which is the single highest-priority criterion for deciding which one contributes more to the hybrid?',
            options: [
              'Which one is drawn first',
              'Which one has more complete octets (no electron-deficient atoms)',
              'Which one has the longest bonds',
              'Which one places positive charge on the most electronegative atom'
            ],
            correctAnswer: 1,
            explanation: 'Complete octets are the top criterion; a contributor with a full octet on every second-row atom outweighs one with an electron-deficient carbon, even before considering formal charges. The trap (option 4) inverts a real rule — POSITIVE charge prefers the LESS electronegative atom (and negative prefers the more electronegative); putting positive charge on an electronegative atom makes a contributor worse, not better.'
          },
          {
            question: 'An allylic carbocation ($\\text{CH}_2\\!=\\!\\text{CH}\\!-\\!\\text{CH}_2^+$) is more stable than a comparable non-allylic primary carbocation. What is the structural reason?',
            options: [
              'The allylic cation has more sigma bonds',
              'The positive charge is delocalized over two carbons by resonance (the double bond and the empty p orbital interact), lowering the energy',
              'Allylic cations are sp hybridized',
              'There is no real difference in stability'
            ],
            correctAnswer: 1,
            explanation: 'In the allylic cation, the adjacent pi bond and the empty p orbital overlap, so the positive charge is shared (delocalized) over two carbons via resonance — delocalization is stabilizing, so the allylic cation is lower in energy. The trap (option 1) appeals to sigma-bond count, which is irrelevant here; it is the resonance delocalization of the POSITIVE charge that confers the extra stability.'
          },
          {
            question: 'Benzene is far more stable than a hypothetical molecule with three isolated, non-interacting C=C double bonds. This "extra" stability is called:',
            options: [
              'Hybridization energy',
              'Resonance (delocalization) energy, from spreading the six pi electrons over the entire ring',
              'Ionization energy',
              'Bond dissociation energy'
            ],
            correctAnswer: 1,
            explanation: 'Benzene\'s six pi electrons are delocalized continuously around the ring rather than locked into three separate double bonds; that delocalization lowers the energy substantially, and the stabilization is the resonance (delocalization) energy. The trap (option 1) names hybridization energy, which is unrelated — the special stability of benzene comes specifically from pi-electron DELOCALIZATION, the aromatic version of resonance.'
          }
        ]
      }
    },
    {
      id: 'atomi7-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Unit Capstone Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Trace the full chain for a terminal alkyne C-H ($\\equiv\\!\\text{C-H}$): which property of the carbon orbital makes this bond unusually acidic, and what unit-level principle does this illustrate?',
            options: [
              'Its sp orbital has 50% s-character, holding the conjugate-base lone pair close to the nucleus and stabilizing it — illustrating that hybridization (structure) determines acidity (a property)',
              'Its sp3 orbital has 25% s-character, which destabilizes the anion',
              'The C-H bond is ionic, so it dissociates easily',
              'The carbon has a lone pair in its ground state'
            ],
            correctAnswer: 0,
            explanation: 'The sp carbon (50% s-character) holds the resulting carbanion lone pair tightly and low in energy, stabilizing the conjugate base and making the alkyne acidic — a clean example of structure (hybridization) dictating a property (acidity), the unit\'s central theme. The trap (option 1) misassigns the terminal alkyne carbon as sp3; it is sp, and that high s-character is exactly the point.'
          },
          {
            question: 'Two compounds, dimethyl ether ($\\text{CH}_3\\text{OCH}_3$) and ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$), have the same molecular formula ($\\text{C}_2\\text{H}_6\\text{O}$) but ethanol boils much higher. Using the unit\'s structure-to-property logic, why?',
            options: [
              'They should boil at the same temperature since the formula is identical',
              'Ethanol has an O-H bond and can hydrogen-bond between molecules, while dimethyl ether (no O-H) cannot, so ethanol\'s stronger intermolecular forces raise its boiling point',
              'Dimethyl ether is ionic and ethanol is covalent',
              'Ethanol is nonpolar and dimethyl ether is polar'
            ],
            correctAnswer: 1,
            explanation: 'Same formula, different connectivity (structure): ethanol\'s O-H lets it form strong hydrogen bonds molecule-to-molecule; the ether, lacking an O-H, relies on weaker dipole-dipole and dispersion forces, so it boils lower. This is the unit thesis in action — bonding structure (here, the presence of an O-H) determines a physical property (boiling point). The trap (option 1) assumes identical formula means identical properties; connectivity and the resulting intermolecular forces are decisive.'
          }
        ]
      }
    }
  ]
}
