export const oChemAlkanesPart2Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan2-intro',
      type: 'text' as const,
      content: `
## Conformational Analysis

**Part 2 of 7 — Conformations of Acyclic Alkanes**

A single $C-C$ $\\sigma$ bond allows nearly free rotation. The different three-dimensional arrangements a molecule adopts by rotating about such bonds are called **conformations** (or conformers / rotamers). Crucially, interconverting conformers does **not** break any bonds — they are not isomers in the structural sense and cannot be separated under normal conditions.

The key variable is the **dihedral (torsion) angle**: the angle between two bonds on adjacent carbons when viewed down the $C-C$ axis. As this angle changes, the molecule's potential energy rises and falls. The energy differences are small (a few $\\text{kcal/mol}$), so at room temperature molecules spin rapidly through all conformations — but they spend most of their time in the lowest-energy ones.

Two kinds of strain raise the energy of a conformation:

- **Torsional strain** — resistance to eclipsing of bonds on adjacent atoms (electron–electron / bond–bond repulsion when bonds align). Maximal in eclipsed conformers.
- **Steric strain** — repulsion between atoms or groups forced too close in space (van der Waals overlap). Important when bulky groups approach each other.

The tool we use to visualize all this is the **Newman projection**.
      `
    },
    {
      id: 'alkan2-newman',
      type: 'text' as const,
      content: `
### Newman Projections: Staggered vs. Eclipsed

A **Newman projection** views the molecule straight down one $C-C$ bond. The **front carbon** is drawn as a dot with three bonds radiating from the center; the **back carbon** is a circle with three bonds emerging from its edge.

**Ethane ($CH_3-CH_3$)** is the simplest case, with two limiting conformations:

| Conformation | Dihedral angle | Strain | Relative energy |
|--------------|---------------|--------|-----------------|
| **Staggered** | $60^\\circ$ | none (minimum) | $0$ (most stable) |
| **Eclipsed** | $0^\\circ$ | torsional | $\\approx 3\\;\\text{kcal/mol}$ higher |

In the **staggered** conformation the front C–H bonds bisect the gaps between the back C–H bonds, minimizing bond–bond repulsion. In the **eclipsed** conformation the front and back bonds line up directly, maximizing torsional strain.

The barrier to rotation in ethane is about $3\\;\\text{kcal/mol}$, which corresponds to roughly $1\\;\\text{kcal/mol}$ per eclipsed $H{-}H$ interaction (three pairs eclipse simultaneously). This barrier is low enough that ethane rotates millions of times per second at room temperature, yet high enough that the staggered form is meaningfully favored.

> **Key point:** Eclipsed conformers are *transition states / energy maxima* on the rotational pathway, not stable wells. Staggered conformers are the *minima*. The molecule continuously passes through eclipsed arrangements but dwells in staggered ones.
      `
    },
    {
      id: 'alkan2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Ethane Conformers
      `,
      exercise: {
        questions: [
          {
            question: 'In a Newman projection, why is the staggered conformation of ethane lower in energy than the eclipsed?',
            options: [
              'Staggered has a $0^\\circ$ dihedral angle that maximizes orbital overlap',
              'Staggered ($60^\\circ$ dihedral) minimizes torsional strain by keeping bonds out of alignment',
              'Eclipsed conformers break a C–H bond',
              'Staggered allows the carbons to form a double bond'
            ],
            correctAnswer: 1,
            explanation: 'Staggered places front bonds in the gaps between back bonds (60° dihedral), minimizing bond–bond (torsional) repulsion. Eclipsed (0° dihedral) aligns the bonds and maximizes torsional strain. No bonds break during rotation — only the dihedral angle changes.'
          },
          {
            question: 'The rotational barrier in ethane is about $3\\;\\text{kcal/mol}$. What does this represent?',
            options: [
              'The energy to break the C–C bond',
              'The energy difference between the eclipsed (maximum) and staggered (minimum) conformations',
              'The energy released when ethane combusts',
              'The energy of a single C–H bond'
            ],
            correctAnswer: 1,
            explanation: 'The barrier is the energy cost to rotate from a staggered minimum through an eclipsed maximum — roughly 3 kcal/mol total, about 1 kcal/mol per eclipsing H–H pair (three pairs). It is far smaller than the ~83 kcal/mol C–C bond energy; no bonds break.'
          },
          {
            question: 'Which statement about conformers is correct?',
            options: [
              'Conformers are constitutional isomers that can be separated by distillation',
              'Conformers interconvert by rotation about a single bond and cannot normally be isolated',
              'Eclipsed conformers are stable energy minima',
              'Conformers have different molecular formulas'
            ],
            correctAnswer: 1,
            explanation: 'Conformers differ only by rotation about a sigma bond — same connectivity, same formula — and interconvert too rapidly to isolate at room temperature. They are NOT constitutional isomers, and eclipsed forms are energy MAXIMA, not minima.'
          }
        ]
      }
    },
    {
      id: 'alkan2-butane',
      type: 'text' as const,
      content: `
### Butane: Gauche and Anti

When the rotating bond carries larger groups, **steric strain** joins torsional strain. The classic case is rotation about the **C2–C3 bond of butane** ($CH_3-CH_2-CH_2-CH_3$), where each of the two central carbons bears a methyl group.

As we rotate the back carbon through $360^\\circ$, four named conformers recur:

| Conformer | Dihedral (CH₃–CH₃) | Strain present | Relative energy |
|-----------|--------------------|----------------|-----------------|
| **Anti** | $180^\\circ$ | none (global minimum) | $0$ |
| **Gauche** | $60^\\circ$ | steric (methyls close) | $\\approx 0.9\\;\\text{kcal/mol}$ |
| **Eclipsed** (CH₃/H) | $120^\\circ$ | torsional | $\\approx 3.4\\;\\text{kcal/mol}$ |
| **Totally eclipsed** (CH₃/CH₃) | $0^\\circ$ | torsional + steric | $\\approx 4.5\\text{–}6\\;\\text{kcal/mol}$ |

**Anti** ($180^\\circ$) is the most stable: the two methyl groups are as far apart as possible (staggered *and* anti), so neither steric nor torsional strain is significant.

**Gauche** ($60^\\circ$) is still staggered (no torsional strain) but the two methyls are only $60^\\circ$ apart, close enough to feel mutual van der Waals repulsion. This **gauche interaction** costs about $0.9\\;\\text{kcal/mol}$ — a number worth memorizing, because it reappears in cyclohexane analysis.

**Totally eclipsed** ($0^\\circ$) is the global maximum: the two methyls eclipse each other directly, combining the worst torsional and steric penalties.

> **Worked ranking:** From most to least stable, butane's conformers about C2–C3 are **anti ($180^\\circ$) > gauche ($60^\\circ$) > methyl/H eclipsed ($120^\\circ$) > methyl/methyl eclipsed ($0^\\circ$)**. Notice both staggered forms (anti, gauche) sit *below* both eclipsed forms — torsional strain dominates the energy landscape, with steric strain breaking ties among similar conformers.
      `
    },
    {
      id: 'alkan2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Butane Conformers
      `,
      exercise: {
        questions: [
          {
            question: 'Which conformation about the C2–C3 bond of butane is the global energy minimum?',
            options: [
              'Gauche ($60^\\circ$ between methyls)',
              'Anti ($180^\\circ$ between methyls)',
              'Totally eclipsed ($0^\\circ$ between methyls)',
              'Methyl/H eclipsed ($120^\\circ$)'
            ],
            correctAnswer: 1,
            explanation: 'The ANTI conformer (methyls 180° apart) is the global minimum: the bulky methyls are maximally separated and the conformation is staggered, so both steric and torsional strain are minimized. Gauche is a local minimum but ~0.9 kcal/mol higher due to methyl–methyl steric crowding.'
          },
          {
            question: 'The gauche conformer of butane is staggered, so it has no torsional strain. Why is it still ~0.9 kcal/mol higher in energy than anti?',
            options: [
              'It has torsional strain after all',
              'The two methyl groups are only $60^\\circ$ apart and experience steric (van der Waals) strain',
              'A C–C bond is partially broken',
              'It is eclipsed, not staggered'
            ],
            correctAnswer: 1,
            explanation: 'Gauche is genuinely staggered (no torsional strain), but the two methyl groups sit only 60° apart and crowd each other — this STERIC strain (gauche interaction) costs about 0.9 kcal/mol. This same gauche penalty governs axial vs. equatorial preferences in cyclohexane.'
          },
          {
            question: 'Rank butane conformers about C2–C3 from most to least stable.',
            options: [
              'Totally eclipsed > methyl/H eclipsed > gauche > anti',
              'Anti > gauche > methyl/H eclipsed > totally eclipsed',
              'Gauche > anti > totally eclipsed > methyl/H eclipsed',
              'Anti > methyl/H eclipsed > gauche > totally eclipsed'
            ],
            correctAnswer: 1,
            explanation: 'Anti (180°, ~0) > gauche (60°, ~0.9) > methyl/H eclipsed (120°, ~3.4) > totally eclipsed (0°, ~4.5–6 kcal/mol). Both staggered forms beat both eclipsed forms; among them, energy rises as steric/torsional strain increases.'
          },
          {
            question: 'Which conformer of butane is the global energy MAXIMUM?',
            options: [
              'Anti, because the methyls are far apart',
              'Gauche, because of steric strain',
              'Totally eclipsed ($0^\\circ$), where the two methyls eclipse each other',
              'There is no maximum; all conformers are equal'
            ],
            correctAnswer: 2,
            explanation: 'The totally eclipsed conformer (CH3 directly eclipsing CH3 at 0°) is the highest-energy point because it suffers BOTH maximal torsional strain (all bonds aligned) AND maximal steric strain (the two largest groups overlap). It is a transition state, not a stable conformer.'
          }
        ]
      }
    },
    {
      id: 'alkan2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Strain Concepts
      `,
      exercise: {
        questions: [
          {
            question: 'Torsional strain and steric strain are distinguished by which description?',
            options: [
              'Torsional strain is repulsion between eclipsing bonds; steric strain is van der Waals repulsion between groups crowded in space',
              'They are the same thing under different names',
              'Torsional strain only occurs in rings; steric strain only in chains',
              'Steric strain is the energy of bond rotation; torsional strain is the energy of bond breaking'
            ],
            correctAnswer: 0,
            explanation: 'Torsional (eclipsing) strain arises when bonds on adjacent atoms align (0° dihedral), maximized in eclipsed conformers. Steric strain arises when atoms/groups are forced too close in space, regardless of dihedral. Anti vs. gauche (both staggered) differ only in steric strain; staggered vs. eclipsed differ in torsional strain.'
          },
          {
            question: 'In a Newman projection, the front atom is drawn as a point/dot and the back atom as a circle. In the eclipsed conformation, how do the back bonds appear?',
            options: [
              'Rotated $60^\\circ$ from the front bonds, in the gaps',
              'Directly behind (aligned with) the front bonds',
              'Pointing the same direction as the C–C axis',
              'They are not drawn'
            ],
            correctAnswer: 1,
            explanation: 'In the eclipsed conformer the back bonds line up directly behind the front bonds (0° dihedral), which is why they are drawn slightly offset for visibility. In the staggered conformer the back bonds sit in the 60° gaps between the front bonds.'
          }
        ]
      }
    }
  ]
}
