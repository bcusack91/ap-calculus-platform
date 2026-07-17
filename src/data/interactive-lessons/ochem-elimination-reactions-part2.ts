export const oChemElimPart2Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi2-intro',
      type: 'text' as const,
      content: `
## The E2 Mechanism

**Part 2 of 7 — Bimolecular Elimination**

The **$\\text{E}2$** (Elimination, bimolecular) mechanism is a single-step, **concerted** process. In one continuous transition state, four bond changes happen simultaneously:

1. The base forms a new bond to the $\\beta$-hydrogen.
2. The $\\text{C}_\\beta{-}\\text{H}$ bond breaks.
3. The electrons from that $\\text{C}{-}\\text{H}$ bond become the new $\\text{C}{=}\\text{C}$ $\\pi$-bond.
4. The $\\text{C}_\\alpha{-}\\text{LG}$ bond breaks as the leaving group departs.

Because everything occurs at once, there is **no intermediate** — no carbocation, no carbanion. The energy diagram shows a single hill (one transition state) connecting starting material to alkene.

The rate law reflects that both the **substrate** and the **base** are present in the (single) rate-determining step:

$\\text{rate} = k[\\text{substrate}][\\text{base}]$

This second-order kinetics — first order in each reactant — is the defining experimental fingerprint of $\\text{E}2$. Doubling either the substrate or the base concentration doubles the rate.
      `
    },
    {
      id: 'elimi2-conditions',
      type: 'text' as const,
      content: `
### What Conditions Favor E2?

| Factor | E2 preference | Reason |
|--------|---------------|--------|
| **Base** | Strong, often **bulky** | A strong base is needed to rip off a $\\beta$-H with no carbocation assistance |
| **Substrate** | $3° > 2° > 1°$ (all work) | More substituted alkenes are more stable; $3°$ has no $\\text{S}_\\text{N}2$ competition |
| **Solvent** | Polar **aprotic** (or the base's own solvent) | Keeps the base "naked" and reactive; avoids stabilizing a cation |
| **Leaving group** | Good (I, Br, OTs $>$ Cl) | A better LG lowers the transition-state energy |
| **Temperature** | Higher favors elimination | Entropy term $-T\\Delta S$ rewards making more particles |

Classic $\\text{E}2$ bases include hydroxide ($\\text{HO}^-$), alkoxides ($\\text{RO}^-$), and especially the **bulky** bases *tert*-butoxide ($(\\text{CH}_3)_3\\text{CO}^-$, often written $t\\text{-BuOK}$) and the amidine **DBU**. Bulky bases are too big to reach the carbon for backside attack, so they cannot do $\\text{S}_\\text{N}2$ — they are forced to grab an exposed $\\beta$-hydrogen and eliminate. (They also steer regiochemistry toward the Hofmann product; see Part 4.)

> **Why bulky bases mean "E2, not $\\text{S}_\\text{N}2$":** Substitution requires the base/nucleophile to approach the crowded $\\alpha$-carbon. A peripheral $\\beta$-hydrogen sticking out from the molecule is far easier for a big base to reach, so steric bulk is the single cleanest way to push a $1°$ or $2°$ substrate from substitution toward elimination.
      `
    },
    {
      id: 'elimi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — E2 Fundamentals
      `,
      exercise: {
        questions: [
          {
            question: 'Which kinetic behavior identifies an E2 reaction?',
            options: [
              'Rate = k[substrate], independent of base concentration',
              'Rate = k[substrate][base], first order in each',
              'Rate = k[base], independent of substrate',
              'Rate = k[substrate]$ {}^{2}$'
            ],
            correctAnswer: 1,
            explanation: 'E2 is concerted and bimolecular: both substrate and base are in the single rate-determining step, so rate = k[substrate][base]. Rate = k[substrate] alone is the E1/SN1 fingerprint (rate-determining ionization), not E2.'
          },
          {
            question: 'Why is potassium tert-butoxide [(CH3)3COK] used to favor E2 over SN2 on a primary or secondary substrate?',
            options: [
              'It is a weak base, so it cannot do substitution',
              'It is small and unhindered, so it attacks carbon easily',
              'It is sterically bulky, so it cannot reach the α-carbon for backside attack but can still abstract an exposed β-hydrogen',
              'It stabilizes carbocations and promotes E1'
            ],
            correctAnswer: 2,
            explanation: 'tert-Butoxide is a strong but very bulky base. Its size blocks the SN2 backside approach to the α-carbon, while a peripheral β-hydrogen remains accessible — so it is steered into E2. It is a strong base (not weak), and it does not promote E1.'
          },
          {
            question: 'How many discrete intermediates does the E2 mechanism pass through?',
            options: [
              'Zero — it is concerted, with a single transition state',
              'One — a carbocation',
              'One — a carbanion',
              'Two — a carbocation then an alkene'
            ],
            correctAnswer: 0,
            explanation: 'E2 is a one-step, concerted reaction: C–H breaking, π-bond forming, and C–LG breaking happen together through ONE transition state with NO intermediate. A carbocation intermediate is the hallmark of E1, not E2.'
          }
        ]
      }
    },
    {
      id: 'elimi2-anti-periplanar',
      type: 'text' as const,
      content: `
### The Anti-Periplanar Requirement

The most distinctive feature of $\\text{E}2$ is its **stereoelectronic** demand: the $\\beta$-hydrogen and the leaving group must lie in the **same plane** and point in **opposite** directions — a dihedral angle of $180°$. This arrangement is called **anti-periplanar**.

Why $180°$? The breaking $\\text{C}_\\beta{-}\\text{H}$ $\\sigma$-bond must overlap, side-on, with the $\\text{C}_\\alpha{-}\\text{LG}$ $\\sigma^*$ antibonding orbital as the new $\\pi$-bond develops. The orbitals achieve continuous, in-phase overlap only when H and LG are anti-periplanar. (A syn-periplanar, $0°$ arrangement can also overlap but is much higher in energy because of eclipsing strain and is rarely accessible.)

A useful way to *see* the geometry is a **Newman projection** looking down the $\\text{C}_\\alpha{-}\\text{C}_\\beta$ bond. Rotate the back carbon until a $\\beta$-H sits directly **anti** (pointing straight down at the back when LG points straight up at the front). That H is the one that leaves; its $\\beta$-carbon becomes part of the double bond.

> **Consequence — stereospecificity:** Because only the anti-periplanar H can leave, the relative configuration of the substrate dictates the geometry ($E$ vs $Z$, cis vs trans) of the alkene produced. Two diastereomeric starting materials give two different alkene stereoisomers. $\\text{E}2$ is therefore a **stereospecific** reaction.
      `
    },
    {
      id: 'elimi2-cyclohexane',
      type: 'text' as const,
      content: `
### Worked Example — Anti-Periplanar on a Cyclohexane Ring

**Problem:** Predict the $\\text{E}2$ product of **menthyl chloride vs neomenthyl chloride**-style reasoning using the simpler case of *cis*- vs *trans*-1-chloro-2-methylcyclohexane with a strong base. Focus on the geometric rule.

**The ring rule:** On a chair cyclohexane, two groups are anti-periplanar only when **both are axial** (a *trans*-diaxial relationship across the $\\text{C}_\\alpha{-}\\text{C}_\\beta$ bond). An equatorial leaving group is gauche to its neighbors and **cannot** do $\\text{E}2$ until the ring flips to place it axial.

**Reasoning for chlorocyclohexane bearing an adjacent substituent:**

- The leaving group (Cl) must be **axial** to find an **axial $\\beta$-hydrogen** that is anti-periplanar (trans-diaxial).
- If placing Cl axial forces a bulky group (e.g., an isopropyl or *tert*-butyl) axial, that conformer is high in energy and the reaction is **slow**, but it is still the only geometry that permits $\\text{E}2$.
- Only the $\\beta$-hydrogens that can become **trans-diaxial** to Cl are eliminable. This can *override* Zaitsev: if the more-substituted alkene would require a $\\beta$-H that can never be anti-periplanar, the reaction is forced to give the **less-substituted** alkene instead.

**Classic result:** *trans*-1-chloro-2-isopropyl... type systems (menthyl chloride) eliminate **slowly** and give the **non-Zaitsev** alkene, because the only anti-periplanar $\\beta$-H lies away from the more substituted side. Their diastereomers (neomenthyl chloride) hold Cl axial in the favored chair, eliminate **fast**, and give the **Zaitsev** product. Same connectivity, opposite stereochemistry, dramatically different rate and regiochemistry — pure $\\text{E}2$ stereoelectronics.

> **Exam trap:** On a ring, never apply Zaitsev blindly. First ask: *which $\\beta$-H can be anti-periplanar (trans-diaxial) to the leaving group?* Geometry is the gatekeeper; Zaitsev only chooses among the H's that geometry allows.
      `
    },
    {
      id: 'elimi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Geometry & Stereospecificity
      `,
      exercise: {
        questions: [
          {
            question: 'For an E2 reaction, the β-hydrogen and the leaving group must adopt which dihedral relationship?',
            options: [
              'Syn-periplanar (0° dihedral)',
              'Gauche (60° dihedral)',
              'Anti-periplanar (180° dihedral)',
              'Any orientation; geometry does not matter'
            ],
            correctAnswer: 2,
            explanation: 'E2 requires the breaking C–H bond to overlap the C–LG σ* orbital, which happens with continuous orbital overlap only at a 180° (anti-periplanar) dihedral. Syn-periplanar (0°) overlap is possible but much higher in energy and rarely seen. "Geometry does not matter" describes E1, not E2.'
          },
          {
            question: 'On a chair cyclohexane, an E2 elimination requires the leaving group and the β-hydrogen to be:',
            options: [
              'Both equatorial',
              'One axial and one equatorial',
              'Both axial (trans-diaxial)',
              'Either arrangement works equally well'
            ],
            correctAnswer: 2,
            explanation: 'Anti-periplanar geometry on a ring is satisfied only when the leaving group and β-H are BOTH axial (trans-diaxial), giving the 180° relationship. If the leaving group is equatorial, the ring must flip it axial before E2 can occur. This is why some substrates eliminate slowly or against Zaitsev.'
          },
          {
            question: 'E2 is described as "stereospecific." What does this mean in practice?',
            options: [
              'It always gives the more substituted alkene',
              'The configuration (stereochemistry) of the starting material determines which alkene stereoisomer (E or Z, cis or trans) forms',
              'It produces a racemic mixture of products',
              'It only works on chiral substrates'
            ],
            correctAnswer: 1,
            explanation: 'Because only the single anti-periplanar β-H can be removed, the spatial arrangement of the substrate is "locked in" to the product geometry — diastereomeric starting materials give different alkene stereoisomers. Stereospecific ≠ "more substituted" (that is regioselectivity/Zaitsev), and E2 does not generate racemic mixtures.'
          },
          {
            question: 'A rigid substrate has its leaving group locked equatorial, with NO β-hydrogen ever able to become anti-periplanar to it. What is the consequence for E2?',
            options: [
              'E2 proceeds rapidly with Zaitsev selectivity',
              'E2 is geometrically forbidden / extremely slow because no β-H can align anti-periplanar to the leaving group',
              'E2 switches to a syn-only pathway with no rate penalty',
              'The substrate immediately forms a carbocation'
            ],
            correctAnswer: 1,
            explanation: 'No accessible anti-periplanar β-H means the concerted E2 transition state cannot form, so E2 is shut down or drastically slowed. This is exactly why locked trans-decalin-type and certain menthyl systems resist E2 — the stereoelectronic requirement cannot be met regardless of base strength.'
          }
        ]
      }
    },
    {
      id: 'elimi2-summary',
      type: 'text' as const,
      content: `
### Part 2 Summary

- **$\\text{E}2$ is concerted and bimolecular:** $\\text{C}_\\beta{-}\\text{H}$ breaking, $\\pi$-bond forming, and $\\text{C}_\\alpha{-}\\text{LG}$ breaking all occur in **one** transition state — **no intermediate**.
- **Kinetics:** $\\text{rate} = k[\\text{substrate}][\\text{base}]$ (second order overall; first order in each).
- **Requires a strong base**; **bulky bases** ($t\\text{-BuOK}$, DBU) suppress $\\text{S}_\\text{N}2$ and push the system toward elimination.
- **Anti-periplanar geometry** ($180°$ dihedral between $\\beta$-H and LG) is mandatory — making $\\text{E}2$ **stereospecific**.
- **On rings:** anti-periplanar means **trans-diaxial**; the leaving group must be **axial**, and geometry can override Zaitsev (menthyl-type substrates).

Next: **Part 3** turns to the **$\\text{E}1$** mechanism — the stepwise, carbocation-based route, its first-order kinetics, and the hydride/alkyl shifts that betray a cationic intermediate.
      `
    }
  ]
}
