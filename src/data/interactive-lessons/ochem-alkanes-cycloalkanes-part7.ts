export const oChemAlkanesPart7Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan7-intro',
      type: 'text' as const,
      content: `
## Synthesis & Cumulative Review

**Part 7 of 7 — Tying It All Together**

You now hold the full toolkit for alkanes and cycloalkanes. This capstone integrates the four pillars of the unit:

1. **Nomenclature** — encoding exact connectivity into an unambiguous IUPAC name (longest chain, lowest locants, alphabetized substituents). The grammar that lets chemists communicate structure.
2. **Conformational analysis** — predicting the populated 3-D shapes from torsional and steric strain (Newman projections; anti/gauche; chair, axial/equatorial, ring flip, A-values).
3. **Ring strain** — explaining stability and reactivity of cycloalkanes from angle and torsional strain, quantified by heats of combustion.
4. **Reactions** — combustion (the fuel reaction) and free-radical halogenation (initiation/propagation/termination, with selectivity).

The connecting thread across all four is **stability driven by minimizing strain and maximizing favorable orbital/steric arrangements** — the same logic whether you are choosing a chair, ranking a conformer, or predicting a halogenation product.
      `
    },
    {
      id: 'alkan7-bigpicture',
      type: 'text' as const,
      content: `
### How the Pieces Connect

A single worked thread shows the concepts reinforcing one another.

**Consider *trans*-1,2-dimethylcyclohexane undergoing monobromination at a tertiary-like position:**

- *Nomenclature* tells us the substrate: a cyclohexane ring (parent, 6 C beats any chain) with two methyls, *trans*, at C1 and C2.
- *Conformational analysis* tells us its shape: the *trans*-1,2 isomer can place **both** methyls equatorial (e,e) — the favored chair — minimizing 1,3-diaxial strain.
- *Ring strain* reminds us the six-membered ring itself is strain-free, so the ring will not open; only substitution is possible.
- *Reactions* let us predict that $Br_2/h\\nu$ — the **selective** halogen — will abstract the most stable (most substituted) hydrogen, e.g. a $3°$ ring C–H, giving predominantly one product.

**Numbers worth carrying forward** (units: $\\text{kcal/mol}$):

| Quantity | Value |
|----------|-------|
| Gauche-butane interaction | $\\approx 0.9$ |
| Ethane rotational barrier | $\\approx 3$ |
| A-value of methyl | $\\approx 1.7$ |
| A-value of *tert*-butyl | $\\approx 4.7$ |
| Cyclopropane total ring strain | $\\approx 27.5$ |
| Cyclohexane (chair) ring strain | $\\approx 0$ |

> **Unifying idea:** "Most stable = least strained." A methyl prefers equatorial for the same reason butane prefers anti — to escape gauche/1,3-diaxial crowding. A bromine radical prefers the 3° site because the resulting radical is most stable. Strain accounting governs both conformational *preference* and chemical *selectivity*.
      `
    },
    {
      id: 'alkan7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Cumulative Checkpoint — Nomenclature & Isomerism
      `,
      exercise: {
        questions: [
          {
            question: 'Which name correctly applies IUPAC rules to a 5-carbon chain bearing methyl groups on C2 and C3?',
            options: [
              '2,3-dimethylpentane',
              '3,4-dimethylpentane',
              'diethylpropane',
              '2,3-methylpentane'
            ],
            correctAnswer: 0,
            explanation: '2,3-Dimethylpentane: pentane parent (5 C), two methyls at the lowest-locant positions (2,3 beats the alternative 3,4 numbering from the other end), and the multiplying prefix "di-" with locants for both. "2,3-methylpentane" omits the required di-; "diethylpropane" misidentifies the parent chain.'
          },
          {
            question: 'For 1,3-dimethylcyclohexane, which isomer is more stable, and what conformational fact explains it?',
            options: [
              'trans, because trans isomers are always more stable',
              'cis, because cis-1,3 can place both methyls equatorial (e,e)',
              'They are equal; ring flipping makes them identical',
              'cis, because it is forced diaxial'
            ],
            correctAnswer: 1,
            explanation: 'For the 1,3 pattern, the CIS isomer can be diequatorial (e,e) and is therefore more stable; trans-1,3 is forced into a,e (one axial methyl, ~1.7 kcal/mol penalty). This inverts the 1,4 case and is the classic "trans is not always more stable" trap.'
          },
          {
            question: 'Why is "longest chain" not always the chain drawn horizontally, illustrated by 4-ethyl-3-methylheptane?',
            options: [
              'Because the longest chain is whichever is drawn straight',
              'Because the longest CONTINUOUS chain may run through bends; you must trace all paths and pick the maximum (here 7 carbons = heptane)',
              'Because ethyl groups extend the parent chain',
              'Because methyl is always the parent'
            ],
            correctAnswer: 1,
            explanation: 'The parent is the longest continuous carbon path regardless of drawing orientation — it may zigzag through bends. You trace every path, choose the 7-carbon one (heptane), and what is left over (ethyl, methyl) becomes substituents. Mis-picking a shorter "straight" chain is a frequent naming error.'
          }
        ]
      }
    },
    {
      id: 'alkan7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Cumulative Checkpoint — Conformation & Strain
      `,
      exercise: {
        questions: [
          {
            question: 'Place these in order of INCREASING energy for butane about C2–C3: (I) anti, (II) gauche, (III) totally eclipsed.',
            options: [
              'III < II < I',
              'I < II < III',
              'II < I < III',
              'I < III < II'
            ],
            correctAnswer: 1,
            explanation: 'Increasing energy: anti (I, ~0) < gauche (II, ~0.9) < totally eclipsed (III, ~4.5–6 kcal/mol). Anti is the global minimum (methyls 180° apart, staggered); gauche is a higher local minimum (60°, steric strain); the totally eclipsed form is the maximum (torsional + steric).'
          },
          {
            question: 'A cyclohexane bears one tert-butyl and one methyl group. The molecule strongly favors the chair with tert-butyl equatorial even when that forces methyl axial. Which principle explains this?',
            options: [
              'Methyl has a larger A-value than tert-butyl',
              'The group with the larger A-value (tert-butyl, ~4.7) dictates the chair; it acts as a conformational anchor',
              'Ring flipping is impossible with two substituents',
              'Axial is always preferred for the larger group'
            ],
            correctAnswer: 1,
            explanation: 'When substituents conflict, the larger A-value wins. tert-Butyl (~4.7) vastly exceeds methyl (~1.7), so the equilibrium adopts the chair with tert-butyl equatorial — even at the cost of an axial methyl. tert-Butyl thereby "anchors" which chair is occupied.'
          },
          {
            question: 'Cyclopropane is a saturated ring yet reacts more readily than cyclohexane. The best one-sentence explanation ties together which two unit concepts?',
            options: [
              'Nomenclature and solubility',
              'Ring strain (stored energy from $60^\\circ$ angles + eclipsing) drives reactivity, whereas strain-free cyclohexane behaves like an unreactive alkane',
              'Boiling point and density',
              'Hydrogen bonding and chair conformations'
            ],
            correctAnswer: 1,
            explanation: 'Cyclopropane stores large ring strain (severe angle strain from 60° bonds plus torsional strain from eclipsed C–H bonds); releasing that energy on ring-opening makes it reactive. Cyclohexane, strain-free in its chair, has no such driving force and behaves like an ordinary unreactive alkane.'
          }
        ]
      }
    },
    {
      id: 'alkan7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Synthesis — Reactions in Context
      `,
      exercise: {
        questions: [
          {
            question: 'You need a clean, single monohalogenation product at the 3° carbon of 2-methylpropane (isobutane). What reagent, and which mechanistic feature ensures success?',
            options: [
              'Cl₂/hν; the high selectivity of chlorine favors 3°',
              'Br₂/hν; bromine is highly selective (late, product-like transition state) and preferentially abstracts the most stable 3° hydrogen',
              'O₂; combustion installs the halogen',
              'Br₂ in the dark; no initiation needed'
            ],
            correctAnswer: 1,
            explanation: 'Br2/hν is correct: bromination has a late transition state that strongly reflects radical stability (3° ≫ 2° ≫ 1°, ~1640:82:1), so it cleanly targets the lone 3° H to give mostly tert-butyl bromide. Cl2 is UNselective (mixtures); combustion destroys the skeleton; light (hν) is required for initiation.'
          },
          {
            question: 'In the propagation phase of radical chlorination of methane, which pair of steps is correct, and why does the chain continue?',
            options: [
              '$Cl_2 \\rightarrow 2\\,\\text{Cl}\\cdot$ then $\\text{CH}_3\\cdot + \\text{Cl}\\cdot \\rightarrow CH_3Cl$; radicals are destroyed',
              '$\\text{Cl}\\cdot + CH_4 \\rightarrow HCl + \\text{CH}_3\\cdot$ then $\\text{CH}_3\\cdot + Cl_2 \\rightarrow CH_3Cl + \\text{Cl}\\cdot$; the $\\text{Cl}\\cdot$ is regenerated to carry the chain',
              '$\\text{CH}_3\\cdot + \\text{CH}_3\\cdot \\rightarrow C_2H_6$; the chain grows by coupling',
              '$CH_4 + Cl_2 \\rightarrow CH_3Cl + HCl$ in one concerted step'
            ],
            correctAnswer: 1,
            explanation: 'The two propagation steps are H-abstraction ($\\text{Cl}\\cdot + CH_4 \\rightarrow HCl + \\text{CH}_3\\cdot$) and product formation with regeneration of the carrier ($\\text{CH}_3\\cdot + Cl_2 \\rightarrow CH_3Cl + \\text{Cl}\\cdot$). Because Cl- is regenerated, the chain self-sustains. Option 1 mixes in initiation/termination; option 3 is termination; option 4 ignores the radical mechanism.'
          },
          {
            question: 'Which single principle best unifies "anti beats gauche," "equatorial beats axial," and "3° halogenation beats 1° (with Br₂)"?',
            options: [
              'Maximize molecular weight',
              'Systems favor the lowest-energy (least-strained / most-stabilized) arrangement — minimizing steric/torsional strain or maximizing radical stability',
              'Always choose the most symmetric option',
              'Reactions always give a single product'
            ],
            correctAnswer: 1,
            explanation: 'All three reflect the drive toward the lowest-energy outcome: anti and equatorial minimize steric/1,3-diaxial (gauche) strain, and bromination targets the H whose loss yields the most stable (3°) radical. "Most stable = least strained / most stabilized" is the through-line of the entire unit.'
          }
        ]
      }
    }
  ]
}
