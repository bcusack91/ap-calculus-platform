export const oChemAlkanesPart3Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan3-intro',
      type: 'text' as const,
      content: `
## Cyclohexane Chair Conformations

**Part 3 of 7 — The Chair, Ring Flips, and Diaxial Strain**

Although a flat hexagon suggests $120^\\circ$ internal angles, a *real* cyclohexane ring is not planar. By puckering, the ring lets every carbon adopt nearly perfect tetrahedral ($109.5^\\circ$) angles **and** keeps every adjacent $C-H$ pair staggered. The result is the famous **chair conformation** — essentially strain-free (no angle strain, no torsional strain).

Cyclohexane also visits higher-energy shapes — the **half-chair** (the rotational transition state, $\\approx 10\\;\\text{kcal/mol}$), the **twist-boat** ($\\approx 5\\text{–}6\\;\\text{kcal/mol}$), and the **boat** ($\\approx 7\\;\\text{kcal/mol}$, suffering "flagpole" steric strain and eclipsing) — but at any instant the overwhelming majority of molecules are chairs.

In the chair, the twelve hydrogens divide into two geometrically distinct sets:

- **Axial** hydrogens point straight up or down, parallel to the ring's vertical axis (alternating up/down around the ring).
- **Equatorial** hydrogens point outward, roughly along the "equator" of the ring.

Each carbon bears exactly one axial and one equatorial hydrogen.
      `
    },
    {
      id: 'alkan3-ringflip',
      type: 'text' as const,
      content: `
### The Ring Flip

A chair can interconvert with its mirror-image chair by a process called a **ring flip**, passing through the half-chair, twist-boat, and boat forms. The barrier ($\\approx 10\\;\\text{kcal/mol}$) is low enough that ring-flipping occurs thousands of times per second at room temperature.

The defining consequence of a ring flip:

> **Every axial position becomes equatorial, and every equatorial position becomes axial.** A group's "up vs. down" orientation in space is preserved, but its "axial vs. equatorial" label is swapped.

For **unsubstituted cyclohexane** the two chairs are identical in energy, so this is invisible. But the moment we add a substituent, the two chairs differ — and the molecule spends more time in whichever chair places the substituent **equatorial**.

**Why equatorial is preferred — 1,3-diaxial strain:** An axial substituent on, say, C1 points straight up, directly toward the *other two axial groups on the same face* (the axial hydrogens on C3 and C5). These **1,3-diaxial interactions** are sterically unfavorable — they are, in fact, exactly the **gauche** relationships from butane, transplanted onto the ring. Placing the substituent equatorial relieves this crowding.
      `
    },
    {
      id: 'alkan3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Chair Geometry & Ring Flip
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the chair conformation of cyclohexane essentially strain-free?',
            options: [
              'Because puckering lets each carbon adopt ~$109.5^\\circ$ bond angles with all adjacent C–H bonds staggered',
              'Because the ring is a flat planar hexagon with $120^\\circ$ angles',
              'Because all hydrogens are eclipsed',
              'Because it has a double bond that relieves strain'
            ],
            correctAnswer: 0,
            explanation: 'The chair is puckered, not flat. Puckering gives every carbon near-tetrahedral (109.5°) angles — eliminating angle strain — and keeps every adjacent C–H pair staggered — eliminating torsional strain. A flat hexagon would force 120° angles and fully eclipsed bonds, which is why cyclohexane is never planar.'
          },
          {
            question: 'What happens to substituent positions during a cyclohexane ring flip?',
            options: [
              'Axial groups stay axial; equatorial groups stay equatorial',
              'All axial positions become equatorial and all equatorial positions become axial',
              'The molecule breaks a C–C bond and reforms',
              '"Up" groups become "down" groups'
            ],
            correctAnswer: 1,
            explanation: 'A ring flip interconverts the two chairs, swapping every axial position to equatorial and vice versa. What is preserved is the up/down orientation of a group, NOT its axial/equatorial label. No bonds break — the ring merely passes through twist-boat/boat forms.'
          },
          {
            question: 'A substituent prefers the equatorial position primarily to avoid which interaction?',
            options: [
              'Torsional strain from eclipsing',
              '1,3-diaxial steric strain with the axial groups on C3 and C5',
              'Angle strain from $60^\\circ$ bond angles',
              'Dipole–dipole attraction'
            ],
            correctAnswer: 1,
            explanation: 'An axial substituent points straight up toward the two other axial groups on the same face (C3 and C5), creating 1,3-DIAXIAL strain — sterically equivalent to gauche-butane interactions. Going equatorial relieves this crowding, which is why larger groups strongly prefer equatorial.'
          }
        ]
      }
    },
    {
      id: 'alkan3-avalues',
      type: 'text' as const,
      content: `
### A-Values: Quantifying the Equatorial Preference

The energetic penalty for placing a given group **axial** instead of equatorial is tabulated as its **A-value** (in $\\text{kcal/mol}$). A larger A-value means a stronger equatorial preference.

| Substituent | A-value ($\\text{kcal/mol}$) |
|-------------|------------------------------|
| $-F$ | $\\approx 0.25$ |
| $-CH_3$ (methyl) | $\\approx 1.7$ |
| $-CH_2CH_3$ (ethyl) | $\\approx 1.8$ |
| $-CH(CH_3)_2$ (isopropyl) | $\\approx 2.2$ |
| $-C(CH_3)_3$ (tert-butyl) | $\\approx 4.7\\text{–}5$ |

The A-value equals the free-energy difference between the axial and equatorial chairs, so it determines the equilibrium ratio. For methylcyclohexane (A $\\approx 1.7$), the equilibrium is roughly **95% equatorial : 5% axial** at room temperature.

The standout is **tert-butyl**. Its A-value ($\\approx 4.7\\;\\text{kcal/mol}$) is so large that the axial chair is essentially never populated — *tert*-butylcyclohexane is "locked" with the *tert*-butyl group equatorial. This is why *tert*-butyl is used as a **conformational anchor** in problems: it fixes which chair you are looking at.

> **A-value bookkeeping:** A methyl axial costs $\\approx 1.7\\;\\text{kcal/mol}$, which is about **two gauche-butane interactions** ($2 \\times 0.9 \\approx 1.8$). This is not a coincidence — each 1,3-diaxial interaction between the axial methyl and an axial ring hydrogen *is* a gauche relationship.
      `
    },
    {
      id: 'alkan3-cistrans',
      type: 'text' as const,
      content: `
### Cis/Trans Isomerism in Rings & Disubstituted Chairs

Because a ring has two distinct faces, two substituents on different ring carbons can be on the **same face (cis)** or **opposite faces (trans)**. Unlike conformers, **cis and trans ring isomers are genuine stereoisomers** — they cannot interconvert by ring-flipping or bond rotation; converting one to the other would require breaking bonds. (A ring flip changes axial/equatorial labels but never changes cis/trans relationships.)

To find the most stable chair of a disubstituted cyclohexane, place the **larger group equatorial** and check whether the geometry forces the other group axial.

**Worked example — 1,4-dimethylcyclohexane:**

- **trans-1,4:** the two methyls can be **both equatorial** (e,e) in one chair — this is the lowest-energy arrangement, with no axial methyls. (The other chair is diaxial and much higher.) Therefore *trans*-1,4-dimethylcyclohexane is more stable than *cis*.
- **cis-1,4:** one methyl is forced axial and the other equatorial (a,e) in *both* chairs — ring-flipping just swaps which methyl is axial, so there is always exactly one axial methyl ($\\approx 1.7\\;\\text{kcal/mol}$ penalty). It can never reach an all-equatorial state.

**The 1,4 pattern in general:** *trans*-1,4 gives e,e (most stable); *cis*-1,4 is forced a,e. For **1,2** and **1,3** the pattern inverts — e.g. for 1,3-dimethyl, the *cis* isomer can be e,e while *trans* is forced a,e.

> **Trap:** Students often assume "trans is always more stable." That is true for 1,4 (and 1,2), but for **1,3-disubstituted** cyclohexanes the **cis** isomer is the one that can be diequatorial — so *cis*-1,3 beats *trans*-1,3. Always work out the actual axial/equatorial outcome rather than memorizing "trans wins."
      `
    },
    {
      id: 'alkan3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — A-Values, Cis/Trans, Stability
      `,
      exercise: {
        questions: [
          {
            question: 'Why is tert-butylcyclohexane considered conformationally "locked" with the tert-butyl group equatorial?',
            options: [
              'Because tert-butyl cannot rotate',
              'Because its A-value (~4.7 kcal/mol) makes the axial chair so high in energy it is essentially unpopulated',
              'Because the ring cannot flip when a tert-butyl group is present',
              'Because tert-butyl forms a covalent bond to the ring axis'
            ],
            correctAnswer: 1,
            explanation: 'The ring still flips, but the enormous ~4.7 kcal/mol A-value of tert-butyl means the axial chair is so destabilized that the equilibrium lies essentially 100% toward the equatorial chair. This is why tert-butyl is used as a conformational anchor to fix which chair is being analyzed.'
          },
          {
            question: 'Which is more stable, cis- or trans-1,4-dimethylcyclohexane, and why?',
            options: [
              'cis, because both methyls can be equatorial',
              'trans, because both methyls can be equatorial (e,e) in one chair',
              'They are equal in energy',
              'cis, because trans is forced diaxial in both chairs'
            ],
            correctAnswer: 1,
            explanation: 'For the 1,4 pattern, the TRANS isomer can place both methyls equatorial (e,e) — the lowest-energy state. The CIS isomer is locked as axial/equatorial (a,e) in both chairs, always carrying one axial methyl (~1.7 kcal/mol penalty). So trans-1,4 is more stable.'
          },
          {
            question: 'For 1,3-dimethylcyclohexane, which isomer is more stable?',
            options: [
              'trans, following the rule that trans is always more stable',
              'cis, because the cis-1,3 isomer can place both methyls equatorial (e,e)',
              'They are identical compounds',
              'Neither — both are forced diaxial'
            ],
            correctAnswer: 1,
            explanation: 'The 1,3 pattern INVERTS the 1,4 result: cis-1,3-dimethylcyclohexane can be diequatorial (e,e) and is therefore more stable, while trans-1,3 is forced into a,e. This is the classic trap — "trans is always more stable" is false; always work out the real axial/equatorial outcome.'
          },
          {
            question: 'An axial methyl group costs about 1.7 kcal/mol (its A-value). How does this relate to gauche-butane interactions (~0.9 kcal/mol each)?',
            options: [
              'It is unrelated; A-values come from angle strain',
              'It corresponds to exactly one gauche interaction',
              'It corresponds to roughly two gauche-butane interactions ($2 \\times 0.9 \\approx 1.8$ kcal/mol)',
              'It corresponds to four eclipsing interactions'
            ],
            correctAnswer: 2,
            explanation: 'An axial substituent has two 1,3-diaxial interactions (with the axial H atoms on C3 and C5), and each is geometrically a gauche-butane relationship (~0.9 kcal/mol). Two of them sum to ~1.8 kcal/mol, matching the methyl A-value of ~1.7. The 1,3-diaxial picture and the gauche picture are the same physics.'
          },
          {
            question: 'Can cis-1,2-dimethylcyclohexane be converted to trans-1,2-dimethylcyclohexane simply by a ring flip?',
            options: [
              'Yes, ring-flipping interconverts cis and trans',
              'No — cis and trans are stereoisomers; interconverting them would require breaking bonds, whereas a ring flip only changes axial/equatorial labels',
              'Yes, because both are conformers',
              'Only at high temperature'
            ],
            correctAnswer: 1,
            explanation: 'Cis and trans ring isomers are configurational STEREOISOMERS — the substituents are on fixed faces. A ring flip changes axial↔equatorial but never the face a group sits on, so it cannot turn cis into trans. That conversion requires bond breaking.'
          }
        ]
      }
    },
    {
      id: 'alkan3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Picking the Better Chair
      `,
      exercise: {
        questions: [
          {
            question: 'In trans-1-tert-butyl-2-methylcyclohexane, which chair dominates the equilibrium?',
            options: [
              'The one with tert-butyl axial and methyl equatorial',
              'The one with tert-butyl equatorial (and methyl axial), because the huge tert-butyl A-value dictates which chair is occupied',
              'Both chairs are equally populated',
              'The boat conformation'
            ],
            correctAnswer: 1,
            explanation: 'When two groups conflict, the one with the larger A-value wins. tert-Butyl (~4.7) vastly outweighs methyl (~1.7), so the molecule adopts the chair with tert-butyl equatorial even though that forces methyl axial. tert-Butyl acts as the conformational anchor.'
          },
          {
            question: 'Cyclohexane is never found as a flat planar hexagon. What two strains would a planar cyclohexane suffer?',
            options: [
              'Only steric strain',
              'Only 1,3-diaxial strain',
              'No strain — that is why it would be planar',
              'Angle strain ($120^\\circ$ vs. $109.5^\\circ$) and torsional strain (all C–H bonds eclipsed)'
            ],
            correctAnswer: 3,
            explanation: 'A planar hexagon forces 120° internal angles (angle strain, since carbon prefers 109.5°) and aligns all twelve C–H bonds into eclipsing pairs (torsional strain). Puckering into a chair eliminates both, which is why the chair, not the planar form, is the real ground state.'
          }
        ]
      }
    }
  ]
}
